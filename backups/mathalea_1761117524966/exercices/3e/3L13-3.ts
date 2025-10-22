import { codageSegments } from '../../lib/2d/codages'
import { point } from '../../lib/2d/points'
import { polygone, polygoneAvecNom } from '../../lib/2d/polygones'
import { segment } from '../../lib/2d/segmentsVecteurs'
import { texteParPosition } from '../../lib/2d/textes'
import { homothetie } from '../../lib/2d/transformations'
import { texPrix } from '../../lib/format/style'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { choice } from '../../lib/outils/arrayOutils'
import {
  ecritureAlgebrique,
  ecritureParentheseSiNegatif,
  rienSi1,
} from '../../lib/outils/ecritures'
import {
  miseEnEvidence,
  texteEnCouleurEtGras,
} from '../../lib/outils/embellissements'
import { nombreDeChiffresDe } from '../../lib/outils/nombres'
import { sp } from '../../lib/outils/outilString'
import { prenom } from '../../lib/outils/Personne'
import { texNombre } from '../../lib/outils/texNombre'
import { mathalea2d } from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import Grandeur from '../../modules/Grandeur'
import {
  gestionnaireFormulaireTexte,
  listeQuestionsToContenu,
  randint,
} from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = 'Mettre en équation un problème et le résoudre'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCHybride'

export const dateDePublication = '15/02/2022'
export const dateDeModifImportante = '06/04/2023'
/**
 * @author Jean-Claude Lhote
 * Différents problèmes à résoudre.
 * Mise en équation de degré 1 à une inconnue, résolution et vérification.
 * Réf : 3L13-3 2N50-1 (pour une version sans commentaires)
 * Ajout du choix des types de problèmes par Guillaume Valmont le 06/04/2023
 * Ajout d'un paramètre permettant d'avoir uniquement des nombres entiers dans l'énoncé par Guillaume-Valmont le 06/04/2023
 * Date de publication 15/02/2022
 * Refactorisation complète et passage en typescript Jean-Claude Lhote le 24/01/2025
 */
export const uuid = '22412'

export const refs = {
  'fr-fr': ['3L13-3', 'BP2RES14'],
  'fr-ch': ['11FA6-6'],
}

// fonctions problèmes
// figures
function triangleIsocele1(): string {
  const O = point(6, 1.5)
  const B = point(0, 0)
  const A = point(0, 3)
  const OAB = polygone(O, A, B)
  const codage = codageSegments('//', 'black', O, A, O, B)
  return mathalea2d(
    {
      xmin: -1,
      xmax: 7,
      ymin: -1,
      ymax: 4,
      pixelsParCm: 20,
      scale: 0.8,
      zoom: 1,
    },
    OAB,
    codage,
  )
}

function triangleIsocele2(): string {
  const O = point(3, 1.5)
  const B = point(6, 0)
  const A = point(0, 0)
  const OAB = polygone(O, A, B)
  const codage = codageSegments('//', 'black', O, A, O, B)
  return mathalea2d(
    {
      xmin: -1,
      xmax: 7,
      ymin: -1,
      ymax: 2.5,
      pixelsParCm: 20,
      scale: 0.8,
      zoom: 1,
    },
    OAB,
    codage,
  )
}

function figureThales(
  a: number | string,
  b: number | string,
  c: number | string,
  OC: number | string,
): string {
  const O = point(1.5, 0, 'O')
  const B = point(4, 6, 'B')
  const A = point(0, 5, 'A')
  const D = homothetie(B, O, 0.4, 'D')
  const C = homothetie(A, O, 0.4, 'C')
  const OAB = polygoneAvecNom(O, C, A, B, D)
  const CD = segment(C, D)
  const longOC = texteParPosition(`${OC}`, 0.5, 1)
  const longCA = texteParPosition(`${b}`, 0, 3)
  const longAB = texteParPosition(`${c}`, 2, 6)
  const longCD = texteParPosition(`${a}`, 1.5, 2.5)
  return mathalea2d(
    {
      xmin: -1,
      xmax: 5,
      ymin: -1,
      ymax: 7,
      pixelsParCm: 20,
      scale: 0.8,
      zoom: 1,
    },
    OAB[0],
    OAB[1],
    longOC,
    longCA,
    longAB,
    longCD,
    CD,
  )
}
// fin figures début des problèmes

function basket(cd: boolean) {
  const x = randint(5, 15) // variables.x // nombre de paniers à trois points
  const a = randint(5, 12) // variables.a // nombres de paniers à deux points de plus que x
  const b = randint(15, 30) // variables.b // nombre de points marqués au lancer franc
  const d = b + (a + x) * 2 + x * 3 // variables.d // nombre de points de la partie
  const equation = `x\\times 3+(${a}+x)\\times 2+${b}=${d}`

  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
 Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}x\\times 3 + (${a}+x)\\times 2 + ${b} &= 3x + 2x +2\\times${a} + ${b}\\\\
  &=5x + ${2 * a} + ${b}\\\\
  &=5x + ${2 * a + b}
  \\end{aligned}$.<br>
 Ainsi, l'équation devient : $5x + ${2 * a + b} = ${d}$.<br>
 Soustrayons $${2 * a + b}$ des deux membres : $5x = ${d} - ${2 * a + b} = ${d - (2 * a + b)}$.<br>
 Divisons les deux membres par 5 : $x = \\dfrac{${d - (2 * a + b)}}{5} = ${x}$.<br>`,
  }
  let enonce = `Une équipe de basket a marqué $${d}$ points lors d'un match. Au cours de ce match, elle a marqué $${b}$ points sur lancers francs.<br>`
  enonce += `L'équipe a marqué $${a}$ paniers à deux points de plus que de paniers à trois points.<br>Combien a-t-elle marqué de paniers à trois points ?`
  let intro = `Posons $x$ le nombre de paniers à trois points.<br>Le nombre de paniers à deux points est donc : $${a}+x$.<br>`
  intro += "Le score de l'équipe fournit donc l'équation :<br>"
  const conclusion = `L'équipe a donc marqué $${miseEnEvidence(x)}$ paniers à trois points.<br>`
  const figure = ''
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br> $\\begin{aligned}3\\times ${x}+(${x}+${a})\\times 2 + ${b}&=${3 * x} + ${x + a}\\times 2+${b}\\\\
  &= ${3 * x + b} + ${(x + a) * 2}\\\\
  &= ${d}\\end{aligned}$<br>`
  const uniteOptions = ['', '', '']

  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}

function basket2(cd: boolean) {
  const x = randint(17, 27) // variables.x // nombre de paniers à deux points
  const a = randint(5, 12) // variables.a // nombres de paniers à trois points de moins que de paniers à 2 points
  const b = randint(15, 30) // variables.b // nombre de points marqués au lancer franc
  const d = b + (x - a) * 3 + x * 2 // variables.d // nombre de points de la partie
  const equation = `x\\times 2+(x-${a})\\times 3+${b}=${d}`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
    Commençons par développer et réduire le membre de gauche :<br>
    $\\begin{aligned}x\\times 2 + (x - ${a})\\times 3 + ${b} &= 2x + 3x - 3\\times${a} + ${b}\\\\
    &=5x - ${3 * a} + ${b}\\\\
    &=5x + ${b - 3 * a}
    \\end{aligned}$.<br>
    Ainsi, l'équation devient : $5x + ${b - 3 * a} = ${d}$.<br>
    Soustrayons $${b - 3 * a}$ des deux membres : $5x = ${d} - ${b - 3 * a} = ${d - (b - 3 * a)}$.<br>
    Divisons les deux membres par 5 : $x = \\dfrac{${d - (b - 3 * a)}}{5} = ${x}$.<br>`,
  }
  let enonce = `Une équipe de basket a marqué $${d}$ points lors d'un match. Au cours de ce match, elle a marqué $${b}$ points sur lancers francs.<br>`
  enonce += `L'équipe a marqué $${a}$ paniers à trois points de moins que de paniers à deux points.<br>Combien a-t-elle marqué de paniers à deux points ?`
  let intro = `Posons $x$ le nombre de paniers à deux points.<br>Le nombre de paniers à trois points est donc : $x-${a}$.<br>`
  intro += "Le score de l'équipe fournit donc l'équation: <br>"
  const conclusion = `L'équipe a donc marqué $${miseEnEvidence(x)}$ paniers à deux points.<br>`
  const figure = ''
  const uniteOptions = ['', '', '']
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br> $\\begin{aligned}2\\times ${x} + ( ${x} - ${a})\\times 3 + ${b}&=${2 * x} + ${x - a} \\times 3 + ${b} \\\\
  &= ${2 * x + b} + ${(x - a) * 3}\\\\
  &= ${d}\\end{aligned}$<br>`

  return {
    enonce,
    intro,
    conclusion,
    figure,
    uniteOptions,
    verification,
    x,
    resolution,
  }
}

function aliasAchatsEntier(cd: boolean) {
  return achats(true, cd)
}
function aliasAchatsReel(cd: boolean) {
  return achats(false, cd)
}
function achats(valeurEntiere: boolean, cd: boolean) {
  let x: number
  let a: number
  let b: number
  const quidam = prenom(2)
  const produit = choice([
    'fraises',
    'pêches',
    'poires',
    'pommes',
    'mangues',
    'prunes',
    'citrons',
  ])

  do {
    x = randint(2, 5) + (valeurEntiere ? 0 : randint(0, 4) / 5) // variables.x // prix de 1kg de produit
    a = randint(2, 5) + (valeurEntiere ? 0 : randint(0, 1) / 5) // variables.a // nombre de kg de produit
    b = a * x // variables.b // prix total du produit
  } while (b >= 100 || b <= 5 || b % 10 === 0)
  const d = b > 50 ? 100 : b > 20 ? 50 : b > 10 ? 20 : 10 // valeur du billet donné
  const equation = `${texNombre(a, 2)}\\times x+${texNombre(d - b, 2)}=${d}`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
  Commençons par soustraire $${texNombre(d - b, 2)}$ des deux membres :<br>
  $\\begin{aligned}${texNombre(a, 2)}\\times x + ${texNombre(d - b, 2)} - ${texNombre(d - b, 2)} &= ${d} - ${texNombre(d - b, 2)}\\\\
  ${texNombre(a, 2)}\\times x &= ${texNombre(b, 2)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${texNombre(a, 2)}$ :<br>
  $x = \\dfrac{${texNombre(b, 2)}}{${texNombre(a, 2)}} = ${texNombre(x)}$.<br>`,
  }
  let enonce = `${quidam[0]} a acheté $${texNombre(a)}$ kg de ${produit} avec un billet de $${d}$ €. Le marchand lui a rendu $${texPrix(d - b)}$ €.<br>`
  enonce += `Quel est le prix d'un kilogramme de ${produit} ?`
  const intro = `Posons $x$ le prix d'un kilogramme de ${produit}.<br>L'énoncé se traduit par l'équation suivante :<br>`
  const conclusion = `<br>Le prix d'un kilogramme de ${produit} est donc de $${miseEnEvidence(texNombre(x, 2, true))}$ €.`
  const figure = ''
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br> $\\begin{aligned}${texNombre(a, 2)}\\times ${texNombre(x)} + ${texNombre(d - b, 2)} &= ${texNombre(b, 2)} + ${texNombre(d - b, 2)}\\\\
  &= ${d}\\\\
  \\end{aligned}$<br>`

  const uniteOptions = ['', '', '€']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}

function aliasPolygoneEntier(cd: boolean) {
  return polyg(true, cd)
}
function aliasPolygoneReel(cd: boolean) {
  return polyg(false, cd)
}
function polyg(valeurEntiere: boolean, cd: boolean) {
  const polygones = ['triangle', 'quadrilatère', 'pentagone', 'hexagone']
  const x = randint(2, 4) + (valeurEntiere ? 0 : randint(0, 45) / 5) // variables.x // longueur d'un des côtés égaux
  const a = randint(2, 5) + (valeurEntiere ? 0 : randint(0, 45) / 5) // variables.a // longueur du côté différent
  const b = randint(2, 5) // variables.b // nombre de côtés égaux du polygone
  const d = b * x + a // variables.d // périmètre du polygone
  const equation = `${b}x+${texNombre(a, 1)}=${texNombre(d, 1)}`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
  Commençons par soustraire $${texNombre(a, 1)}$ des deux membres :<br>
  $\\begin{aligned}${b}x + ${texNombre(a, 1)} - ${texNombre(a, 1)} &= ${texNombre(d, 1)} - ${texNombre(a, 1)}\\\\
  ${b}x &= ${texNombre(d - a, 1)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${b}$ :<br>
  $x = \\dfrac{${texNombre(d - a, 1)}}{${b}} = ${texNombre(x)}$.<br>`,
  }
  let enonce = `Un ${polygones[b - 2]} possède un côté de longueur $${texNombre(a)}$ cm et $${b}$ autres côtés de longueur égale.<br>Son périmètre est $${texNombre(d)}$ cm.<br>`
  enonce +=
    'Quelle est la longueur' +
    (context.isAmc ? ', en cm,' : '') +
    ' des côtés de même longueur ?'
  let intro = 'Posons $x$ la longueur des côtés de même longueur.<br>'
  intro += `Un ${polygones[b - 2]} possède $${b + 1}$ côtés, donc celui-ci possède $${b}$ côtés de longueur $x$.<br>`
  intro += "L'énoncé se traduit par l'équation suivante :<br>"
  const conclusion = `<br>Les côtés de même longueur mesurent donc $${miseEnEvidence(texNombre(x))}$ cm.`
  const figure = ''
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br> $\\begin{aligned}${b} \\times ${texNombre(x)} + ${texNombre(a, 1)} &= ${texNombre(b * x, 1)} + ${texNombre(a, 1)}\\\\
  &= ${texNombre(d, 1)}\\\\
  \\end{aligned}$<br>`

  const uniteOptions = [' unites[Longueurs]', new Grandeur(x, 'cm'), '']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}

function aliasProgramme1a(cd: boolean) {
  return programme1(1, cd)
}
function aliasProgramme1b(cd: boolean) {
  return programme1(2, cd)
}
function programme1(n: 1 | 2, cd: boolean) {
  let a: number
  let b: number
  let c: number
  let d: number

  if (n === 1) {
    do {
      a = randint(2, 15)
      b = randint(1, 10)
      c = randint(2, 15)
      d = randint(1, 10)
    } while (
      (c * d - a * b) * (a - c) <= 0 ||
      Math.abs(c * d - a * b) % Math.abs(a - c) !== 0
    )
  } else {
    do {
      a = randint(2, 15)
      b = randint(1, 10)
      c = randint(2, 15)
      d = randint(1, 10)
    } while (
      (c * d - a * b) * (a - c) >= 0 ||
      Math.abs(c * d - a * b) % Math.abs(a - c) !== 0
    )
  }
  const x = Math.round((c * d - a * b) / (a - c))
  const quidam = prenom(2)
  const equation = `(x+${b})\\times ${a}=(x+${d})\\times ${c}`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
  Commençons par développer et réduire les deux membres :<br>
  $\\begin{aligned}(x + ${b})\\times ${a} &= ${a}x + ${a * b}\\\\
  (x + ${d})\\times ${c} &= ${c}x + ${c * d}\\\\
  \\end{aligned}$<br>
  Ainsi, l'équation devient : $${a}x + ${a * b} = ${c}x + ${c * d}$.<br>  
  Soustrayons $${c}x$ des deux membres et soustrayons $${a * b}$ des deux membres :<br>
  $\\begin{aligned}${a}x - ${c}x &= ${c * d} - ${a * b}\\\\
  ${a - c}\\times x &= ${c * d - a * b}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${a - c}$ :<br>
  $x = \\dfrac{${c * d - a * b}}{${a - c}} = ${x}$.<br>`,
  }
  let enonce = `${quidam[0]} et ${quidam[1]} choisissent un même nombre.<br> ${quidam[0]} lui ajoute $${b}$ puis multiplie le résultat par $${a}$ alors que `
  enonce += `${quidam[1]} lui ajoute $${d}$ puis multiplie le résultat par $${c}$.<br>`
  enonce += `${quidam[0]} et ${quidam[1]} obtiennent le même résultat.<br>`
  enonce += `Quel nombre commun ont choisi ${quidam[0]} et ${quidam[1]} ?`
  let intro = 'Posons $x$ le nombre choisi au départ.<br>'
  intro += `Le programme de calcul effectué par ${quidam[0]} se traduit par : $(x+${b})\\times ${a}$.<br>`
  intro += `Le programme de calcul effectué par ${quidam[1]} se traduit par : $(x+${d})\\times ${c}$.<br>`
  intro += "L'égalité des résultats se traduit par l'équation suivante :<br>"
  const conclusion = `<br>${quidam[0]} et ${quidam[1]} ont donc choisi au départ le nombre $${miseEnEvidence(x)}$.`
  const figure = ''
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br> $(${x} + ${b})\\times ${a} = ${x + b}\\times ${a} = ${a * x + a * b}$<br> 
  $(${x} + ${d})\\times ${c} = ${x + d}\\times ${c} = ${c * x + c * d}$<br>`

  const uniteOptions = ['', '', '']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}
function aliasProgramme2a(cd: boolean) {
  return programme2(1, cd)
}
function aliasProgramme2b(cd: boolean) {
  return programme2(2, cd)
}
function programme2(n: 1 | 2, cd: boolean) {
  let a: number
  let b: number
  let c: number
  let d: number

  if (n === 1) {
    do {
      a = randint(2, 15)
      b = randint(1, 10)
      c = randint(2, 15)
      d = randint(1, 10)
    } while (
      (d - a * b) * (a - c) <= 0 ||
      Math.abs(d - a * b) % Math.abs(a - c) !== 0
    )
  } else {
    do {
      a = randint(2, 15)
      b = randint(1, 10)
      c = randint(2, 15)
      d = randint(1, 10)
    } while (
      (d - a * b) * (a - c) >= 0 ||
      Math.abs(d - a * b) % Math.abs(a - c) !== 0
    )
  }
  const x = Math.round((d - a * b) / (a - c))
  const quidam = prenom(2)
  const equation = `(x+${b})\\times${a}=${c}x+${d}`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}(x + ${b})\\times ${a} &= ${a}x + ${a * b}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${a}x + ${a * b} = ${c}x + ${d}$.<br>  
  Soustrayons $${c}x$ des deux membres et soustrayons $${a * b}$ des deux membres :<br>
  $\\begin{aligned}${a}x - ${c}x &= ${d} - ${a * b}\\\\
  ${rienSi1(a - c)}${Math.abs(a - c) === 1 ? '' : '\\times '}x &= ${d - a * b}\\\\
  \\end{aligned}$.<br>
  ${
    a - c !== 1
      ? `Divisons les deux membres par $${a - c}$ :<br>
  $x = \\dfrac{${d - a * b}}{${a - c}} = ${x}$.<br>`
      : ''
  }`,
  }
  let enonce = `${quidam[0]} et ${quidam[1]} choisissent un même nombre.<br> ${quidam[0]} lui ajoute $${b}$ puis multiplie le résultat par $${a}$ alors que `
  enonce += `${quidam[1]} le multiplie par $${c}$ puis ajoute au résultat $${d}$.<br>`
  enonce += `${quidam[0]} et ${quidam[1]} obtiennent le même résultat.<br>`
  enonce += `Quel nombre commun ont choisi ${quidam[0]} et ${quidam[1]} ?`
  let intro = 'Posons $x$ le nombre choisi au départ.<br>'
  intro += `Le programme de calcul effectué par ${quidam[0]} se traduit par : $(x+${b})\\times ${a}$.<br>`
  intro += `Le programme de calcul effectué par ${quidam[1]} se traduit par : $${c}x + ${d}$.<br>`
  intro += "L'égalité des résultats se traduit par l'équation suivante :<br>"
  const conclusion = `<br>${quidam[0]} et ${quidam[1]} ont donc choisi au départ le nombre $${miseEnEvidence(x)}$.`
  const figure = ''
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br> $(${x} + ${b})\\times ${a} = ${x + b}\\times ${a} = ${a * x + a * b}$<br> 
  $${c} \\times ${ecritureParentheseSiNegatif(x)} + ${d} = ${c * x + d}$<br>`
  const uniteOptions = ['', '', '']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}

function aliasTarifsEntier(cd: boolean) {
  return tarifs(true, cd)
}
function aliasTarifsReel(cd: boolean) {
  return tarifs(false, cd)
}
function tarifs(valeurEntiere: boolean, cd: boolean) {
  const clubs = ['ciné-club', 'club de fitness', 'club de ski']
  let a: number
  let b: number
  let c: number
  let d: number

  do {
    a = randint(0, 2)
    b = valeurEntiere ? randint(5, 8) : randint(50, 80) / 10
    c = randint(4, 10) * 5
    d = b - (valeurEntiere ? randint(1, 3) : randint(2, 6) * 0.5)
  } while (
    c / (b - d) >= 30 ||
    c / (b - d) <= 10 ||
    (c * 2) % ((b - d) * 2) !== 0
  )
  const x = Math.ceil(c / (b - d))
  const equation = `x\\times${b}>=${c}+x\\times${texNombre(d, 1)}`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette inéquation :', 'black')}<br>
  Commençons par soustraire $${texNombre(d, 1)}x$ des deux membres :<br>
  $\\begin{aligned}${texNombre(b, 1)}x - ${texNombre(d, 1)}x &= ${c}\\\\
  ${
    Math.abs(b - d) !== 1
      ? `${texNombre(b - d, 1)} x &= ${c}\\\\`
      : `${rienSi1(b - d)}x &= ${c}\\\\`
  }
  \\end{aligned}$.<br>
  ${
    rienSi1(b - d) !== ''
      ? `Divisons les deux membres par $${texNombre(b - d, 1)}$ :<br>
  $x \\geq \\dfrac{${c}}{${texNombre(b - d, 1)}} = ${texNombre(c / (b - d), 2)}$.<br>`
      : ''
  }
      ${
        (c / (b - d)) % 1 !== 0
          ? `Comme $x$ représente un nombre de séances, il doit être un entier. Il faut donc arrondir $${texNombre(c / (b - d), 2)}$ à l'entier supérieur.<br>`
          : ''
      }
  Ainsi, le tarif B devient plus avantageux à partir de $${miseEnEvidence(x)}$ séances.<br>`,
  }
  let enonce = `Le ${clubs[a]} d'un village propose deux tarifs à ses pratiquants.<br>`
  enonce += `Le tarif A propose de payer $${texPrix(b)}$ € à chaque séance.<br>`
  enonce += `Le tarif B propose de payer un abonnement annuel de $${texPrix(c)}$ € puis de payer $${texPrix(d)}$ € par séance.<br>`
  enonce +=
    'Pour quel nombre de séances le tarif B devient-il plus avantageux que le tarif A ?'
  let intro = 'Posons $x$ le nombre de séances.<br>'
  intro += `Le prix à payer avec le tarif A est : $x\\times ${texPrix(b)}$.<br>`
  intro += `Le prix à payer avec le tarif B est : $${texPrix(c)}+x\\times ${texPrix(d)}$.<br>`
  intro +=
    "Pour que le tarif B soit plus avantageux, $x$ doit vérifier l'inéquation suivante:<br>"
  const conclusion = `<br>C'est à partir de $${miseEnEvidence(x)}$ séances que le tarif B devient plus avantageux que le tarif A (pour $${x}$ séances, les deux tarifs sont équivalents).`
  const figure = ''
  const verification =
    texteEnCouleurEtGras('Vérification pour ', 'black') +
    `$${miseEnEvidence(`x = ${x}`, 'black')}$` +
    texteEnCouleurEtGras(' : ', 'black') +
    '<br>' +
    `Prix avec le tarif A : $${texPrix(b)} \\times ${x} = ${texPrix(b * x)}$<br>
  Prix avec le tarif B : $${texPrix(c)} + ${texPrix(d)} \\times ${x} = ${texPrix(c + d * x)}$<br>` +
    texteEnCouleurEtGras('Vérification pour ', 'black') +
    `$${miseEnEvidence(`x=${x + 1}`, 'black')}$` +
    texteEnCouleurEtGras(' : ', 'black') +
    '.<br>' +
    `Prix avec le tarif A : $${texPrix(b)} \\times ${x + 1} = ${texPrix(b * (x + 1))}$<br>
  Prix avec le tarif B : $${texPrix(c)} + ${texPrix(d)} \\times ${x + 1} = ${texPrix(c + d * (x + 1))}$.<br>
  Ainsi, pour $x=${x}$ séances, les deux tarifs sont équivalents et pour $x=${x + 1}$ séances, le tarif B est plus avantageux.<br>`

  const uniteOptions = ['', '', '']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}

function aliasSpectacleEntier(cd: boolean) {
  return spectacle(true, cd)
}
function aliasSpectacleReel(cd: boolean) {
  return spectacle(false, cd)
}

function spectacle(valeurEntiere: boolean, cd: boolean) {
  let a: number
  let b: number
  let c: number
  let d: number
  let x: number
  do {
    a = randint(200, 300) * 10
    b = valeurEntiere ? randint(10, 20) : randint(100, 200) / 10
    c = valeurEntiere ? randint(5, 15) : randint(50, 150) / 10
    x = randint(1000, a - 500)
    d = b * x + (a - x) * c
  } while (b <= c)
  const equation = `x\\times${texNombre(b, 2, true)}+(${a}-x)\\times${texNombre(c, 2, true)}=${texNombre(d, 2, true)}`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}x\\times ${texNombre(b, 1)} + (${a} - x)\\times ${texNombre(c, 1)} &= ${texNombre(b, 1)}x + ${a} \\times ${texNombre(c, 1)} - ${texNombre(c, 1)}x\\\\
  &= ${texNombre(b - c, 1)} x + ${texNombre(a * c, 1)}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${texNombre(b - c, 1)} x + ${texNombre(a * c, 1)} = ${texNombre(d, 1)}$.<br>
  Soustrayons $${texNombre(a * c, 1)}$ des deux membres :<br>
  $\\begin{aligned}${texNombre(b - c, 1)} x &= ${texNombre(d, 1)} - ${texNombre(a * c, 1)}\\\\
  ${texNombre(b - c, 1)} x &=${texNombre(d - a * c, 1)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${texNombre(b - c, 1)}$ :<br>
  $x = \\dfrac{${texNombre(d - a * c, 1)}}{${texNombre(b - c, 1)}} = ${miseEnEvidence(texNombre(x))}$.<br>`,
  }
  let enonce = `Dans une salle de spectacle de $${texNombre(a)}$ places, le prix d'entrée pour un adulte est $${texPrix(b)}$ € et, pour un enfant, il est de $${texPrix(c)}$ €.<br>`
  enonce += `Le spectacle de ce soir s'est déroulé devant une salle pleine et la recette est de $${texPrix(d)}$ €.<br>`
  enonce += "Combien d'adultes y avait-il dans la salle ?"
  let intro = 'Posons $x$ le nombre de places adultes vendues.<br>'
  intro += `Comme les $${texNombre(a)}$ places ont été vendues, le nombre de places enfants est : $${a}-x$.<br>`
  intro += "Le calcul de la recette donne l'équation suivante.<br>"
  const conclusion = `<br>Il y a donc eu $${miseEnEvidence(texNombre(x))}$ adultes au spectacle.`
  const figure = ''
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br> $\\begin{aligned}${texNombre(x, 1)}\\times ${texNombre(b, 1)} + (${texNombre(a, 1)} - ${texNombre(x, 1)})\\times ${texNombre(c, 1)} &= ${texNombre(b * x, 2)} + ${texNombre(a - x, 2)}\\times ${texNombre(c, 2)}\\\\
  &= ${texNombre(b * x, 2)}+ ${texNombre(c * (a - x), 2)}\\\\
  &= ${texNombre(d, 1)}\\\\
  \\end{aligned}$<br>`
  const uniteOptions = ['', '', '']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}

function isocele(cd: boolean) {
  let a: number
  let b: number
  let c: number
  let d: number
  do {
    a = randint(50, 100)
    c = (1 - 2 * randint(0, 2)) * randint(10, 30) // variables.b
    b = a + c
    d = 2 * a + b
  } while (b <= 0 || 2 * a <= b)
  let enonce = `Un triangle isocèle a pour périmètre $${d}$ mm. `
  let intro = ''
  let conclusion = ''
  let equation = ''
  let x: number
  let figure: string
  if (c > 0) {
    // La base est le plus grand côté
    enonce += `Sa base est plus longue de $${c}$ mm que chacun des côtés égaux.`
  } else {
    // La base est plus petite que les autres côtés
    enonce += `Sa base est plus courte de $${-c}$ mm que chacun des côtés égaux.`
  }
  if (choice([true, false])) {
    enonce +=
      '<br>Quelle est la mesure de sa base' +
      (context.isAmc ? ', en mm' : '') +
      " ? (La figure n'est pas en vraie grandeur.)"
    intro = `Posons $x$ la longueur de sa base. La longueur des côtés égaux est : $x${ecritureAlgebrique(-c)}$.<br>`
    intro += "Le calcul du périmètre donne l'équation suivante :<br>"
    equation = `2(x${ecritureAlgebrique(-c)})+x=${d}`
    conclusion = `<br>La base de ce triangle isocèle mesure donc $${miseEnEvidence(b)}$ mm.`
    x = b
  } else {
    enonce +=
      "<br>Quelle est la mesure de ses côtés égaux ? (la figure n'est pas en vraie grandeur)"
    intro = `Posons $x$ la longueur d'un des côtés égaux. La longueur de la base est : $x${ecritureAlgebrique(c)}$.<br>`
    intro += "Le calcul du périmètre donne l'équation suivante :<br>"
    equation = `2x+x${ecritureAlgebrique(c)}=${d}`
    conclusion = `<br>Les deux côtés égaux de ce triangle isocèle mesurent donc $${miseEnEvidence(a)}$ mm.`
    x = a
  }
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}2x ${ecritureAlgebrique(-2 * c)} + x &= ${d}\\\\
  ${3}x ${ecritureAlgebrique(-2 * c)} &= ${d}\\\\
  \\end{aligned}$.<br>
  ${
    c < 0
      ? `Soustrayons $${-2 * c}$ des deux membres :<br>
  $\\begin{aligned}${3}x &= ${d} ${ecritureAlgebrique(2 * c)}\\\\
  ${3}x &= ${d + 2 * c}\\\\
  \\end{aligned}$.<br>`
      : `Ajoutons $${2 * c}$ aux deux membres :<br>
  $\\begin{aligned}${3}x &= ${d} + ${2 * c}\\\\
  ${3}x &= ${d + 2 * c}\\\\
  \\end{aligned}$<br>`
  }
  Divisons les deux membres par $${3}$ :<br>
  $x = \\dfrac{${d + 2 * c}}{${3}} = ${miseEnEvidence(x)}$.<br>`,
  }
  if (c > 0) figure = triangleIsocele2()
  else figure = triangleIsocele1()
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br> $\\begin{aligned}2 \\times ${texNombre(a, 1)} + ${texNombre(b, 1)} &= ${texNombre(2 * a, 1)} + ${texNombre(b, 1)}\\\\
  &= ${texNombre(d, 1)}\\\\
  \\end{aligned}$<br>`
  const uniteOptions = [' unites[Longueurs]', new Grandeur(x, 'mm'), '']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}

function thales(cd: boolean) {
  let a: number
  let b: number
  let c: number
  let d: number
  do {
    a = randint(5, 40)
    b = randint(5, 40)
    c = randint(41, 100)
    d = (a * b) / (c - a)
  } while (d <= 0 || (a * b) % Math.abs(c - a) !== 0)
  const x = Math.round(d)
  const equation = `(x+${b})\\times${a}=${c}x`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}(x + ${b})\\times ${a} &= ${a}x + ${a * b}\\\\
  \\end{aligned}$<br>
  Ainsi, l'équation devient : $${a}x + ${a * b} = ${c}x$.<br>  
  Soustrayons $${a}x$ des deux membres :<br>
  $\\begin{aligned}${a * b} &= ${c}x - ${a}x\\\\
  ${a * b} &= ${c - a}x\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${c - a}$ :<br>
  $x = \\dfrac{${a * b}}{${c - a}} = ${miseEnEvidence(x)}$.<br>`,
  }
  const figure = figureThales(a, b, c, '')
  let enonce =
    "Soit la figure ci-dessous qui n'est pas en vraie grandeur où $[CD]$ et $[AB]$ sont parallèles."
  enonce += ` $AB=${c}\\text{mm}$, $AC=${b}\\text{mm}$ et $CD=${a}\\text{mm}$.<br> Déterminer la longueur $OC$${context.isAmc ? ', en mm.' : '.'}`
  let intro =
    "Dans cette configuration de Thalès, on a l'égalité suivante : $\\dfrac{OC}{OA}=\\dfrac{CD}{AB}$.<br>"
  intro +=
    "Cette égalité est équivalente à l'égalité des produits en croix : $CD\\times OA=OC\\times AB$.<br>"
  intro +=
    "En remplaçant les longueurs par les données de l'énoncé et en posant $x=OC$, on obtient l'équation suivante :<br>"
  const conclusion = `donc $OA=${miseEnEvidence(x)}\\text{ mm}$.<br>`
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br>
  D'une part : $CD\\times OA = ${texNombre(a, 1)} \\times ${texNombre(b + x, 1)} = ${texNombre(a * b + a * x, 1)}$<br>
  D'autre part : $OC\\times AB = ${texNombre(x, 1)} \\times ${texNombre(c, 1)} = ${texNombre(c * x, 1)}$<br>
  Les produits en croix sont bien égaux pour $x=${x}$<br>
  `
  const uniteOptions = [' unites[Longueurs]', new Grandeur(x, 'mm'), '']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}

function thales2(cd: boolean) {
  let a: number
  let c: number
  let d: number
  let x: number

  do {
    a = randint(5, 40)
    x = randint(5, 40)
    c = randint(41, 100)
    d = (a * x) / (c - a)
  } while (d <= 0 || (a * x) % Math.abs(c - a) !== 0)
  const b = Math.round(d)
  const equation = `(x+${b})\\times${a}=${b}\\times${c}`
  const resolution = {
    equation,
    texteCorr: `${texteEnCouleurEtGras('Résolvons cette équation :', 'black')}<br>
  Commençons par développer et réduire le membre de droite :<br>
  $\\begin{aligned}(x + ${b})\\times ${a} &= ${a}x + ${a * b}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${a}x + ${a * b} = ${b} \\times ${c}$.<br>  
  Soustrayons $${a * b}$ des deux membres :<br>
  $\\begin{aligned}${a}x &= ${b} \\times ${c} - ${a * b}\\\\
  ${a}x &= ${b * (c - a)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${a}$ :<br>
  $x = \\dfrac{${b * (c - a)}}{${a}} = ${miseEnEvidence(x)}$.<br>`,
  }
  const figure = figureThales(a, '', c, b)
  let enonce =
    "Soit la figure ci-dessous qui n'est pas en vraie grandeur où $[CD]$ et $[AB]$ sont parallèles."
  enonce += ` $AB=${c}\\text{mm}$, $OC=${b}\\text{mm}$ et $CD=${a}\\text{mm}$.<br> Déterminer la longueur $AC$${context.isAmc ? ', en mm.' : '.'}`
  let intro =
    "Dans cette configuration de Thalès, on a l'égalité suivante : $\\dfrac{OA}{OC}=\\dfrac{AB}{CD}$.<br>"
  intro +=
    "Cette égalité est équivalente à l'égalité des produits en croix : $CD\\times OA = OC\\times AB$.<br>"
  intro +=
    "En remplaçant les longueurs par les données de l'énoncé et en posant $x=OC$, on obtient l'équation suivante :<br>"
  const conclusion = `donc $CA=${miseEnEvidence(x)}\\text{ mm}$.<br>`
  const verification = `${texteEnCouleurEtGras('Vérification :', 'black')}<br>
  D'une part : $CD\\times OA = ${texNombre(a, 1)} \\times ${texNombre(x + b, 1)} = ${texNombre(a * x + a * b, 1)}$.<br>
  D'autre part : $OC\\times AB = ${texNombre(b, 1)} \\times ${texNombre(c, 1)} = ${texNombre(b * c, 1)}$.<br>
  Les produits en croix sont bien égaux pour $x=${x}$.<br>
  `
  const uniteOptions = [' unites[Longueurs]', new Grandeur(x, 'mm'), '']
  return {
    enonce,
    intro,
    conclusion,
    figure,
    verification,
    uniteOptions,
    x,
    resolution,
  }
}
// fin de la définition des problèmes
const listeDeFonction = [
  basket,
  basket2,
  [aliasAchatsEntier, aliasAchatsReel],
  [aliasPolygoneEntier, aliasPolygoneReel],
  [aliasProgramme1a, aliasProgramme1b],
  [aliasProgramme2a, aliasProgramme2b],
  [aliasTarifsEntier, aliasTarifsReel],
  [aliasSpectacleEntier, aliasSpectacleReel],
  isocele,
  thales,
  thales2,
]

export default class ProblemesEnEquation extends Exercice {
  niveau = 3
  constructor() {
    super()
    this.nbQuestions = 2
    this.spacingCorr = 1.5
    this.besoinFormulaireTexte = [
      'Choix des problèmes',
      'Nombres séparés par des tirets :\n1 : basket\n2 : basket2\n3 : achats\n4 : polygone\n5 : programmes (produit vs produit,\n ... solution entière positive)\n6 : programmes (produit vs produit,\n ... solution entière négative)\n7 : tarifs\n8 : spectacle\n9 : isocèle\n10 : Thalès\n11 : Thalès2\n14 : Mélange',
    ]
    this.sup = '12'
    this.besoinFormulaire2CaseACocher = ['Uniquement des nombres entiers']
    this.sup2 = false
    this.correctionDetaillee = true
  }

  nouvelleVersion() {
    const listeDeProblemes = gestionnaireFormulaireTexte({
      saisie: this.sup,
      min: 1,
      max: 11,
      melange: 12,
      defaut: 1,
      shuffle: true,
      nbQuestions: this.nbQuestions,
    }).map(Number)
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      // const n = 0 // un paramètre entier qui peut servir dans certains cas.
      let fonctionProbleme = listeDeFonction[listeDeProblemes[i] - 1]
      if (Array.isArray(fonctionProbleme))
        fonctionProbleme = fonctionProbleme[this.sup2 ? 0 : 1]
      let {
        enonce,
        intro,
        conclusion,
        figure,
        verification,
        uniteOptions,
        x,
        resolution,
      } = fonctionProbleme(this.correctionDetaillee)
      figure = figure ?? ''
      uniteOptions = uniteOptions ?? ['', '', '']

      const texte =
        enonce +
        figure +
        ajouteChampTexteMathLive(this, i, '' + uniteOptions[0], {
          texteApres: sp(2) + uniteOptions[2],
        })
      let texteCorr = intro
      texteCorr += `$${resolution.equation}$<br>`
      texteCorr += resolution.texteCorr
      texteCorr += verification
      texteCorr += conclusion

      if (context.isAmc) {
        this.autoCorrection[i] = {
          enonce: texte + '\\\\',
          enonceAvant: false,
          propositions: [
            {
              type: 'AMCOpen',
              propositions: [
                {
                  enonce:
                    texte +
                    '<br>Mettre le problème en équation ci-dessous et la résoudre.',
                  statut: 3,
                  pointilles: true,
                },
              ],
            },
            {
              type: 'AMCNum',
              propositions: [
                {
                  texte: '',
                  statut: '',
                  reponse: {
                    texte: 'Réponse au problème : ',
                    valeur: [x],
                    param: {
                      digits: Math.max(nombreDeChiffresDe(x), 2),
                      signe: true,
                    },
                  },
                },
              ],
            },
          ],
        }
      }

      if (this.questionJamaisPosee(i, x, resolution.texteCorr)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr

        if (uniteOptions[0] === '')
          handleAnswers(this, i, { reponse: { value: x } })
        else
          handleAnswers(this, i, {
            reponse: { value: uniteOptions[1], options: { unite: true } },
          })
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
