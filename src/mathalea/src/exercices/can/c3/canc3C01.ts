import { choice } from '../../../lib/outils/arrayOutils'
import { setReponse } from '../../../lib/interactif/gestionInteractif'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { listeQuestionsToContenu } from '../../../modules/outils'
import ExerciceSimple from '../../ExerciceSimple'
export const titre = 'Déterminer un nombre à partir d’une phrase'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCNum'

/**
 * @author Jean-Claude Lhote
 * Date de publication septembre 2021

 */
export const uuid = '385b7'

export const refs = {
  'fr-fr': ['canc3C01'],
  'fr-ch': [],
}
export default class CalculsAutomatiques extends ExerciceSimple {
  constructor() {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1

    this.formatChampTexte = KeyboardType.clavierNumbers
  }

  nouvelleVersion() {
    for (let i = 0, essais = 0; i < this.nbQuestions && essais < 50; ) {
      const a = choice([50, 100, 40, 10, 20, 60, 200, 1000, 500])
      const multiplicatif = choice([true, false])
      let question = ''
      let correction = ''
      let reponse = 0
      const signature: (string | number)[] = [a]

      if (multiplicatif) {
        const variante = choice([1, 2, 3])
        signature.push('m', variante)
        switch (variante) {
          case 1:
            reponse = a << 1
            question = `Calculer le double de $${a}$.`
            correction = `$${a}\\times 2 = ${a << 1}$`
            break
          case 2:
            reponse = a * 3
            question = `Calculer le triple de $${a}$.`
            correction = `$${a}\\times 3 = ${a * 3}$`
            break
          default:
            reponse = a * 10
            question = `Quel est le nombre dix fois plus grand que $${a}$ ?`
            correction = `$${a}\\times 10 = ${a * 10}$`
            break
        }
      } else {
        signature.push('d')
        reponse = a >> 1
        question = `Calculer la moitié de $${a}$.`
        correction = `$${a}\\div 2 = ${a >> 1}$`
      }

      if (!this.questionJamaisPosee(i, ...signature)) {
        essais += 1
        continue
      }

      this.listeQuestions[i] = question
      this.listeCorrections[i] = correction
      this.listeCanEnonces[i] = question
      this.listeCanReponsesACompleter[i] = ''
      setReponse(this, i, reponse, { formatInteractif: 'calcul' })

      if (this.nbQuestions === 1) {
        this.question = question
        this.correction = correction
        this.reponse = reponse
        this.canEnonce = question
        this.canReponseACompleter = ''
      }

      i += 1
      essais += 1
    }

    listeQuestionsToContenu(this)
  }
}
