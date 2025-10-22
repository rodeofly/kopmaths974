import { glisseNombre } from '../../lib/2d/GlisseNombre'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { choice } from '../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { nombreDeChiffresDansLaPartieEntiere } from '../../lib/outils/nombres'
import { decimalToScientifique, texNombre } from '../../lib/outils/texNombre'
import { fixeBordures, mathalea2d } from '../../modules/2dGeneralites'
import { randint } from '../../modules/outils'
import ExerciceSimple from '../ExerciceSimple'

export const titre =
  'Convertir un nombre décimal en écriture scientifique et réciproquement.'

export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDePublication = '18/10/2025'

export const uuid = '4a986'

export const refs = {
  'fr-fr': ['3AutoN07'],
  'fr-ch': [],
}

/**
 * @author Chloe Seignovert
 */
export default class DecimalToScientifique extends ExerciceSimple {
  constructor() {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.formatChampTexte = KeyboardType.clavierFullOperations
  }

  nouvelleVersion() {
    const pileOuFace = choice([true, false])
    const troisChiffres = randint(1, 999)
    const nbChiffres = nombreDeChiffresDansLaPartieEntiere(troisChiffres)
    const puissance = randint(-3, 3, 1 - nbChiffres)
    const nombre = troisChiffres * 10 ** puissance
    const [mantisse, exposant] = decimalToScientifique(nombre)

    if (pileOuFace) {
      this.question = `Donne l'écriture scientifique de $${texNombre(nombre)}$.`
      this.reponse = `$${texNombre(mantisse)} \\times 10^{${exposant}}$`
      const glisseNumber = glisseNombre(nombre, -exposant)
      this.correction = mathalea2d(
        Object.assign({}, fixeBordures([glisseNumber])),
        glisseNumber,
      )
      this.correction += `L'écriture scientifique de $${texNombre(nombre)}$ est $${miseEnEvidence(`${texNombre(mantisse)} \\times 10^{${exposant}}`)}$.`
    } else {
      this.question = `Donne l'écriture décimale de $${texNombre(mantisse)} \\times 10^{${exposant}}$`
      this.reponse = texNombre(nombre)
      const glisseNumber = glisseNombre(mantisse, exposant)
      this.correction = mathalea2d(
        Object.assign({}, fixeBordures([glisseNumber])),
        glisseNumber,
      )
      this.correction += `L'écriture décimale de $${texNombre(mantisse)} \\times 10^{${exposant}}$ est $${miseEnEvidence(texNombre(nombre))}$.`
    }
  }
}
