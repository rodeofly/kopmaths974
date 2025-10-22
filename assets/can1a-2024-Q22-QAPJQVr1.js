import s from"./ExerciceSimple-CWWOU0FG.js";import{r,a0 as o,Y as n,m as a}from"./embellissements-BYV7mIDn.js";import{K as c}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const E="Calculer un nombre dérivé",C=!0,D="mathLive",O="88bc2";class T extends s{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierDeBase}nouvelleVersion(){let e,t,i;this.canOfficielle?(e=3,t=-2,i=1):(e=r(-9,9,0),t=r(-9,9,0),i=r(1,5)),this.reponse=(2*e*i).toFixed(0),this.question=`$f(x)=${o(0,e,0,t)}$<br>
    $f'(${i})=$`,this.correction=` On détermine d'abord la fonction dérivée :<br>
    $f'(x)=${2*e}x$ et donc : <br>
    $\\begin{aligned}
  f'(${i})&=${2*e}\\times ${n(i)}\\\\
  &=${a(this.reponse)}
  \\end{aligned}$`,this.canEnonce=`$f(x)=${o(0,e,0,t)}$`,this.canReponseACompleter=`$f'(${i})=\\ldots$`,this.interactif||(this.question+=" $\\ldots$")}}export{T as default,C as interactifReady,D as interactifType,E as titre,O as uuid};
