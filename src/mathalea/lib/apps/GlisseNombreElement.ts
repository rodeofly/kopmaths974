const COLUMN_LABELS = [
  'Millions',
  'Centaines de milliers',
  'Dizaines de milliers',
  'Milliers',
  'Centaines',
  'Dizaines',
  'Unités',
  'Dixièmes',
  'Centièmes',
  'Millièmes',
  'Dix-millièmes',
  'Cent-millièmes',
] as const

const COLUMN_COUNT = COLUMN_LABELS.length
const UNIT_COLUMN_INDEX = 6

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const parseBooleanAttribute = (
  value: string | null,
  defaultValue: boolean,
): boolean => {
  if (value === null) return defaultValue
  if (value === '' || value.toLowerCase() === 'true') return true
  if (value.toLowerCase() === 'false') return false
  return defaultValue
}

const parseNumericAttribute = (
  value: string | null,
  defaultValue: number,
): number => {
  if (value === null || value.trim() === '') return defaultValue
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : defaultValue
}

type NumberParts = {
  sign: 1 | -1
  integer: string
  decimal: string
}

const normaliseNumber = (value: string | null): NumberParts => {
  if (!value) {
    return { sign: 1, integer: '0', decimal: '' }
  }
  let str = value
    .replace(/\\,/g, '')
    .replace(/\{\s*,\s*\}/g, ',')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\s+/g, '')
  const sign: 1 | -1 = str.startsWith('-') ? -1 : 1
  if (sign === -1) {
    str = str.slice(1)
  }
  str = str.replace(/,/g, '.')
  str = str.replace(/[^0-9.]/g, '')
  if (str === '' || str === '.') {
    return { sign, integer: '0', decimal: '' }
  }
  const [integerPart, ...decimalParts] = str.split('.')
  const integer = integerPart === '' ? '0' : integerPart
  const decimal = decimalParts.join('')
  return {
    sign,
    integer: integer.replace(/^0+(\d)/, '$1') || '0',
    decimal,
  }
}

const fillDigits = (
  parts: NumberParts,
  addZeros: boolean,
  removeLeftZeros: boolean,
): string[] => {
  const digits = new Array<string>(COLUMN_COUNT).fill(addZeros ? '0' : '')
  let column = UNIT_COLUMN_INDEX
  const integer = parts.integer
  for (let i = integer.length - 1; i >= 0 && column >= 0; i--, column--) {
    digits[column] = integer[i]
  }
  column = UNIT_COLUMN_INDEX + 1
  const decimal = parts.decimal
  for (let i = 0; i < decimal.length && column < COLUMN_COUNT; i++, column++) {
    digits[column] = decimal[i]
  }
  if (removeLeftZeros) {
    let firstIndex = digits.findIndex((digit) => digit !== '' && digit !== '0')
    if (firstIndex === -1) {
      digits.fill('')
      digits[UNIT_COLUMN_INDEX] = '0'
    } else {
      for (let i = 0; i < firstIndex; i++) {
        digits[i] = ''
      }
    }
  }
  return digits
}

const formatCalculus = (shift: number): string => {
  if (shift === 0) return ''
  const absolute = Math.abs(shift)
  if (shift > 0) {
    return `× 10^${absolute}`
  }
  return `÷ 10^${absolute}`
}

export default class GlisseNombreElement extends HTMLElement {
  private shadow: ShadowRoot
  private initialized = false
  private resizeObserver?: ResizeObserver
  private signElement?: HTMLSpanElement
  private row1Cells: HTMLSpanElement[] = []
  private row2Cells: HTMLSpanElement[] = []
  private row2?: HTMLDivElement
  private row2Wrapper?: HTMLDivElement
  private calculusElement?: HTMLDivElement
  private columnWidth = 0
  private dragging = false
  private startX = 0
  private startOffset = 0
  private offset = 0
  private animationTimeout?: number
  private digitsTop: string[] = new Array(COLUMN_COUNT).fill('')
  private digitsBottom: string[] = new Array(COLUMN_COUNT).fill('')
  private sign: 1 | -1 = 1
  private options = {
    addZeros: true,
    showCalculus: true,
    showComma1: true,
    showComma2: true,
    removeLeftZeros: false,
    initialPower: 0,
    animation: 0,
  }

  static get observedAttributes() {
    return [
      'number',
      'add-zeros',
      'animation',
      'show-calculus',
      'show-comma1',
      'show-comma2',
      'initial-power',
      'remove-left-zeros',
    ] as const
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    if (!this.initialized) {
      this.setupShadowDom()
      this.initialized = true
    }
    this.updateFromAttributes()
    this.updateColumnMetrics()
    this.resizeObserver = new ResizeObserver(() => this.updateColumnMetrics())
    if (this.row2Wrapper && this.resizeObserver) {
      this.resizeObserver.observe(this.row2Wrapper)
    }
  }

  disconnectedCallback() {
    this.stopAnimation()
    if (this.resizeObserver && this.row2Wrapper) {
      this.resizeObserver.unobserve(this.row2Wrapper)
    }
    this.resizeObserver?.disconnect()
    this.resizeObserver = undefined
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (!this.initialized || oldValue === newValue) return
    this.updateFromAttributes()
  }

  private setupShadowDom() {
    const style = document.createElement('style')
    style.textContent = `
      :host {
        display: inline-block;
        font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        color: #1f2937;
      }
      .layout {
        display: flex;
        align-items: stretch;
        gap: 0.5rem;
      }
      .sign {
        font-size: 1.5rem;
        font-weight: 600;
        min-width: 1.5rem;
        text-align: center;
        color: #f15929;
      }
      .board {
        background: #ffffff;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        padding: 0.75rem;
        box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
      }
      .row {
        display: grid;
        grid-template-columns: repeat(${COLUMN_COUNT}, minmax(2.4rem, 1fr));
        gap: 0.25rem;
      }
      .header {
        text-transform: uppercase;
        font-size: 0.65rem;
        font-weight: 600;
        color: #6b7280;
        line-height: 1.1;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        justify-items: center;
      }
      .header span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem 0;
      }
      .digits {
        margin-top: 0.5rem;
      }
      .cell {
        position: relative;
        background: #f9fafb;
        border-radius: 0.35rem;
        border: 1px solid #e5e7eb;
        min-height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: 500;
        color: #111827;
        transition: background 0.2s ease;
      }
      .cell[data-highlight='true'] {
        background: #fde8dc;
        border-color: #f15929;
        color: #f15929;
        font-weight: 700;
      }
      .cell[data-comma='true']::after {
        content: ',';
        position: absolute;
        right: -0.55rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.2rem;
        font-weight: 700;
        color: #f15929;
      }
      .row-wrapper {
        margin-top: 0.25rem;
        overflow: hidden;
        border-radius: 0.35rem;
      }
      .draggable-row {
        display: grid;
        grid-template-columns: repeat(${COLUMN_COUNT}, minmax(2.4rem, 1fr));
        gap: 0.25rem;
        cursor: grab;
        user-select: none;
        touch-action: none;
        transition: transform 0.2s ease;
      }
      .draggable-row.dragging {
        cursor: grabbing;
        transition: none;
      }
      .calculus {
        margin-top: 0.5rem;
        font-size: 0.95rem;
        font-weight: 600;
        color: #2563eb;
        min-height: 1.2rem;
      }
    `
    this.shadow.append(style)

    const layout = document.createElement('div')
    layout.className = 'layout'

    const signElement = document.createElement('span')
    signElement.className = 'sign'
    layout.append(signElement)
    this.signElement = signElement

    const board = document.createElement('div')
    board.className = 'board'
    layout.append(board)

    const headerRow = document.createElement('div')
    headerRow.className = 'row header'
    COLUMN_LABELS.forEach((label) => {
      const span = document.createElement('span')
      span.textContent = label
      headerRow.append(span)
    })
    board.append(headerRow)

    const row1 = document.createElement('div')
    row1.className = 'row digits'
    this.row1Cells = COLUMN_LABELS.map((_, index) => {
      const cell = document.createElement('span')
      cell.className = 'cell'
      if (index === UNIT_COLUMN_INDEX) {
        cell.dataset.highlight = 'true'
      }
      row1.append(cell)
      return cell
    })
    board.append(row1)

    const row2Wrapper = document.createElement('div')
    row2Wrapper.className = 'row-wrapper'
    board.append(row2Wrapper)
    this.row2Wrapper = row2Wrapper

    const row2 = document.createElement('div')
    row2.className = 'draggable-row'
    this.row2Cells = COLUMN_LABELS.map((_, index) => {
      const cell = document.createElement('span')
      cell.className = 'cell'
      if (index === UNIT_COLUMN_INDEX) {
        cell.dataset.highlight = 'true'
      }
      row2.append(cell)
      return cell
    })
    row2Wrapper.append(row2)
    this.row2 = row2

    row2.addEventListener('pointerdown', this.handlePointerDown)
    row2.addEventListener('pointermove', this.handlePointerMove)
    row2.addEventListener('pointerup', this.handlePointerUp)
    row2.addEventListener('pointercancel', this.handlePointerUp)
    row2.addEventListener('lostpointercapture', this.handlePointerUp)

    const calculus = document.createElement('div')
    calculus.className = 'calculus'
    board.append(calculus)
    this.calculusElement = calculus

    this.shadow.append(layout)
  }

  private updateFromAttributes() {
    this.options.addZeros = parseBooleanAttribute(
      this.getAttribute('add-zeros'),
      true,
    )
    this.options.showCalculus = parseBooleanAttribute(
      this.getAttribute('show-calculus'),
      true,
    )
    this.options.showComma1 = parseBooleanAttribute(
      this.getAttribute('show-comma1'),
      true,
    )
    this.options.showComma2 = parseBooleanAttribute(
      this.getAttribute('show-comma2'),
      true,
    )
    this.options.removeLeftZeros = parseBooleanAttribute(
      this.getAttribute('remove-left-zeros'),
      false,
    )
    this.options.initialPower = parseNumericAttribute(
      this.getAttribute('initial-power'),
      0,
    )
    this.options.animation = parseNumericAttribute(
      this.getAttribute('animation'),
      0,
    )

    const parts = normaliseNumber(this.getAttribute('number'))
    this.sign = parts.sign
    this.digitsTop = fillDigits(
      parts,
      this.options.addZeros,
      this.options.removeLeftZeros,
    )
    this.digitsBottom = [...this.digitsTop]

    if (this.signElement) {
      this.signElement.textContent = this.sign === -1 ? '−' : ''
    }

    this.row1Cells.forEach((cell, index) => {
      cell.textContent = this.digitsTop[index]
      if (this.options.showComma1 && index === UNIT_COLUMN_INDEX) {
        cell.dataset.comma = 'true'
      } else {
        delete cell.dataset.comma
      }
    })

    this.row2Cells.forEach((cell, index) => {
      cell.textContent = this.digitsBottom[index]
      if (this.options.showComma2 && index === UNIT_COLUMN_INDEX) {
        cell.dataset.comma = 'true'
      } else {
        delete cell.dataset.comma
      }
    })

    this.offset = this.options.initialPower
    this.updateRow2Transform(true)

    if (this.calculusElement) {
      if (this.options.showCalculus) {
        this.calculusElement.textContent = formatCalculus(
          this.options.animation !== 0
            ? this.options.animation
            : this.options.initialPower,
        )
      } else {
        this.calculusElement.textContent = ''
      }
    }

    if (this.options.animation !== 0) {
      this.runAnimation()
    } else {
      this.stopAnimation()
    }
  }

  private updateColumnMetrics() {
    if (!this.row2Wrapper) return
    const rect = this.row2Wrapper.getBoundingClientRect()
    if (rect.width > 0) {
      this.columnWidth = rect.width / COLUMN_COUNT
      this.updateRow2Transform(false)
    }
  }

  private updateRow2Transform(applyTransition: boolean) {
    if (!this.row2) return
    if (applyTransition) {
      this.row2.style.transition = 'transform 0.2s ease'
    }
    const limitedOffset = clamp(this.offset, -COLUMN_COUNT, COLUMN_COUNT)
    this.row2.style.transform = `translateX(${limitedOffset * this.columnWidth}px)`
  }

  private runAnimation() {
    this.stopAnimation()
    if (!this.row2) return
    const startOffset = this.options.initialPower
    const targetOffset = startOffset + this.options.animation
    this.offset = startOffset
    this.updateRow2Transform(true)
    this.animationTimeout = window.setTimeout(() => {
      if (!this.row2) return
      this.row2.style.transition = 'transform 1s ease'
      this.offset = targetOffset
      this.updateRow2Transform(false)
      this.animationTimeout = window.setTimeout(() => {
        if (this.row2) {
          this.row2.style.transition = 'transform 0.2s ease'
        }
      }, 1100)
    }, 120)
  }

  private stopAnimation() {
    if (this.animationTimeout) {
      window.clearTimeout(this.animationTimeout)
      this.animationTimeout = undefined
    }
    if (this.row2) {
      this.row2.style.transition = 'transform 0.2s ease'
    }
  }

  private handlePointerDown = (event: PointerEvent) => {
    if (!this.row2) return
    this.updateColumnMetrics()
    this.dragging = true
    this.startX = event.clientX
    this.startOffset = this.offset
    this.row2.setPointerCapture(event.pointerId)
    this.row2.classList.add('dragging')
    this.row2.style.transition = 'none'
  }

  private handlePointerMove = (event: PointerEvent) => {
    if (!this.dragging || !this.row2) return
    const delta = event.clientX - this.startX
    if (this.columnWidth === 0) return
    const tentativeOffset = this.startOffset + delta / this.columnWidth
    this.offset = clamp(tentativeOffset, -COLUMN_COUNT, COLUMN_COUNT)
    this.row2.style.transform = `translateX(${this.offset * this.columnWidth}px)`
  }

  private handlePointerUp = (event: PointerEvent) => {
    if (!this.dragging || !this.row2) return
    this.dragging = false
    this.row2.releasePointerCapture(event.pointerId)
    this.row2.classList.remove('dragging')
    this.offset = Math.round(this.offset)
    this.updateRow2Transform(true)
  }
}
