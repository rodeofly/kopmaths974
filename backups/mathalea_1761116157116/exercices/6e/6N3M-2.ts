import { combinaisonListesSansChangerOrdre } from '../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { fixeBordures, mathalea2d } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'

import { pointAbstrait } from '../../lib/2d/points-abstraits'
import { Segment, segment } from '../../lib/2d/segmentsVecteurs'
import { latex2d } from '../../lib/2d/textes'
import { fraction } from '../../modules/fractions'
export const titre = 'Exprimer le rapport de deux longueurs sur un segment'
export const dateDeModificationImportante = '19/10/2025' // Mettre tous les segments à la même longueur pour éviter les sorties Latex problématiques. Jean-Claude Lhote

function representationFraction(
  n: number,
  d: number,
  longueurTotale: number,
  noms: string[],
  couleur: string = 'none',
) {
  const longueurPartie = n > d ? longueurTotale : (n * longueurTotale) / d
  const support = segment(
    pointAbstrait(0, 0),
    pointAbstrait(longueurTotale, 0),
    'black',
  )
  support.styleExtremites = '|-|'
  const segments: Segment[] = []
  const nbSegments = Math.max(n, d)
  for (let i = 0; i < nbSegments - 1; i++) {
    const segPart = segment(
      pointAbstrait((i * longueurTotale) / nbSegments, 0),
      pointAbstrait(((i + 1) * longueurTotale) / nbSegments, 0),
    )

    segPart.styleExtremites = '-|'
    segments.push(segPart)
  }
  const dernierSegment = segment(
    pointAbstrait(((n - 1) * longueurTotale) / nbSegments, 0),
    pointAbstrait(longueurTotale, 0),
  )

  dernierSegment.styleExtremites = '-'
  segments.push(dernierSegment)
  const label0 = latex2d(noms[0], 0, -0.5, { letterSize: 'scriptsize' })
  const label1 =
    n > d
      ? latex2d(noms[1], longueurTotale, -0.5, {
          letterSize: 'scriptsize',
        })
      : latex2d(noms[1], (n * longueurTotale) / d, -0.5, {
          letterSize: 'scriptsize',
        })
  const label2 =
    n > d
      ? latex2d(noms[2], (d * longueurTotale) / n, 0.5, {
          letterSize: 'scriptsize',
        })
      : latex2d(noms[2], longueurTotale, 0.5, {
          letterSize: 'scriptsize',
        })
  const objets = [support, ...segments, label0, label1, label2]
  if (couleur !== 'none') {
    const segColor = segment(
      pointAbstrait(0, 0),
      pointAbstrait(longueurPartie, 0),
      couleur,
    )
    segColor.epaisseur = 2
    objets.push(segColor)
  }
  return mathalea2d(
    Object.assign({}, fixeBordures(objets, { rymin: 0, rymax: 0 })),
    objets,
  )
}

/**
 * * Exprimer un rapport de longueurs sur un segment
 * * 6N22-1
 * @author Sébastien Lozano refactorisé par Jean-Claude Lhote le 19/10/2025
 */

export const uuid = '7781a'

export const refs = {
  'fr-fr': ['6N3M-2'],
  'fr-2016': ['6N22-1'],
  'fr-ch': ['9NO10-6'],
}
export default class RapportsSurUnSegment extends Exercice {
  constructor() {
    super()

    this.nbQuestions = 2
    this.consigne = 'Sur tous les axes, les graduations sont régulières.'
    context.isHtml ? (this.spacing = 3) : (this.spacing = 2)
    context.isHtml ? (this.spacingCorr = 2.5) : (this.spacingCorr = 1.5)
  }

  nouvelleVersion() {
    const typesDeQuestionsDisponibles = [0, 1]

    const listeTypeDeQuestions = combinaisonListesSansChangerOrdre(
      typesDeQuestionsDisponibles,
      this.nbQuestions,
    ) // Tous les types de questions sont posées --> à remettre comme ci-dessus

    for (
      let i = 0, texte, texteCorr, cpt = 0;
      i < this.nbQuestions && cpt < 50;

    ) {
      const entierMax = 9
      const max = randint(1, entierMax)
      const min = randint(1, entierMax, max) // on évite l'autre pour éviter la fraction 1

      // on choisit de façon aléatoire un triplet de noms pour les points
      const nomsChoix = [
        ['A', 'B', 'C'],
        ['D', 'E', 'F'],
        ['I', 'J', 'K'],
        ['L', 'M', 'N'],
      ]
      const noms = nomsChoix[randint(0, nomsChoix.length - 1)]

      // pour les situations, autant de situations que de cas dans le switch !
      const f0 = representationFraction(min, max, 10, noms)
      const f0Corr = representationFraction(min, max, 10, noms, 'red')
      const f0Corr2 = representationFraction(
        max,
        min,
        10,
        [noms[0], noms[2], noms[1]],
        'blue',
      )
      const f1 = representationFraction(max, min, 10, noms)
      const f1Corr = representationFraction(max, min, 10, noms, 'red')
      const f1Corr2 = representationFraction(
        min,
        max,
        10,
        [noms[0], noms[2], noms[1]],
        'blue',
      )
      //

      const situations = [
        {
          // case 0 --> m < n
          m: min,
          n: max,
          rapport: `\\dfrac{${noms[0] + noms[1]}}{${noms[0] + noms[2]}}`,
          rapport_inverse: `\\dfrac{${noms[0] + noms[2]}}{${noms[0] + noms[1]}}`,
          fig: f0,
          segment_corr1: `\\textcolor{red}{[${noms[0] + noms[1]}]}`,
          longueur_corr1: `\\textcolor{red}{${noms[0] + noms[1]}}`,
          m_color_corr: `\\textcolor{red}{${min}}`,
          n_color_corr: `\\textcolor{blue}{${max}}`,
          fig_corr1: f0Corr,
          segment_corr2: `\\textcolor{blue}{[${noms[0] + noms[2]}]}`,
          longueur_corr2: `\\textcolor{blue}{${noms[0] + noms[2]}}`,
          fig_corr2: f0Corr2,
        },
        {
          // case 1 --> m > n
          m: max,
          n: min,
          rapport: `\\dfrac{${noms[0] + noms[1]}}{${noms[0] + noms[2]}}`,
          rapport_inverse: `\\dfrac{${noms[0] + noms[2]}}{${noms[0] + noms[1]}}`,
          fig: f1,
          segment_corr1: `\\textcolor{red}{[${noms[0] + noms[1]}]}`,
          longueur_corr1: `\\textcolor{red}{${noms[0] + noms[1]}}`,
          m_color_corr: `\\textcolor{red}{${max}}`,
          n_color_corr: `\\textcolor{blue}{${min}}`,
          fig_corr1: f1Corr,
          segment_corr2: `\\textcolor{blue}{[${noms[0] + noms[2]}]}`,
          longueur_corr2: `\\textcolor{blue}{${noms[0] + noms[2]}}`,
          fig_corr2: f1Corr2,
        },
      ]

      const enonces = []
      for (let k = 0; k < situations.length; k++) {
        enonces.push({
          enonce: `
          Exprimer les rapports suivants $${situations[k].rapport}$ et $${situations[k].rapport_inverse}$.<br>
          ${situations[k].fig}
`,
          question: '',
          correction: `
          Les graduations étant régulières, comptons le nombre d'espaces entre deux graduations pour chaque segment :<br>
          ${situations[k].fig_corr1}<br>
          Le segment $${situations[k].segment_corr1}$ compte $${situations[k].m_color_corr}$ ${singPlur(situations[k].m, 'espace', 'espaces')}.<br>
          ${situations[k].fig_corr2}<br>
          Le segment $${situations[k].segment_corr2}$ compte $${situations[k].n_color_corr}$ ${singPlur(situations[k].n, 'espace', 'espaces')}.<br><br>
          $\\textbf{Donc}$ $\\mathbf{\\dfrac{${situations[k].longueur_corr2}}{${situations[k].longueur_corr1}}=\\dfrac{${situations[k].n_color_corr}}{${situations[k].m_color_corr}}}$
          $\\textbf{et}$ $\\mathbf{\\dfrac{${situations[k].longueur_corr1}}{${situations[k].longueur_corr2}}=\\dfrac{${situations[k].m_color_corr}}{${situations[k].n_color_corr}}}$<br><br>
          ${Remarque(situations[k].rapport, situations[k].rapport_inverse, situations[k].n, situations[k].m)}
`,
        })
      }

      // autant de case que d'elements dans le tableau des situations
      switch (listeTypeDeQuestions[i]) {
        case 0:
          texte = `${enonces[0].enonce}`
          texteCorr = `${enonces[0].correction}`
          break
        case 1:
        default:
          texte = `${enonces[1].enonce}`
          texteCorr = `${enonces[1].correction}`
          break
      }

      if (this.questionJamaisPosee(i, texteCorr)) {
        // <- laisser le i et ajouter toutes les variables qui rendent les exercices différents (par exemple a, b, c et d)
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
function singPlur(nombre: number, singulier: string, pluriel: string) {
  if (nombre > 1) {
    return pluriel
  } else {
    return singulier
  }
}
function etapeSimp(n: number, m: number) {
  let sortie
  const rapport = fraction(n, m).n / fraction(n, m).numIrred
  if (rapport !== 1) {
    sortie = `\\dfrac{${fraction(n, m).numIrred} ${miseEnEvidence(`\\times ${fraction(n, m).n / fraction(n, m).numIrred}`)}}{${fraction(n, m).denIrred}${miseEnEvidence(`\\times ${fraction(n, m).n / fraction(n, m).numIrred}`)}}\\mathbf{=}${fraction(n, m).texFractionSimplifiee}`
  } else {
    sortie = `${fraction(n, m).texFractionSimplifiee}`
  }
  return sortie
}
function Remarque(rapAlph: string, rapAlphI: string, n: number, m: number) {
  let sortie
  const rapport = fraction(n, m).n / fraction(n, m).numIrred
  if (rapport !== 1) {
    sortie = `Remarque : Nous verrons plus tard que $${rapAlph}=${etapeSimp(fraction(n, m).n, fraction(n, m).d)}$ et que $${rapAlphI}=${etapeSimp(fraction(m, n).n, fraction(m, n).d)}$<br>`
  } else {
    sortie = ''
  }
  return sortie
}
