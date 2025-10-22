import{t as i}from"./deprecatedFractions-D2cbyAQf.js";import{r as o,f as r}from"./embellissements-BYV7mIDn.js";import n from"./ExerciceSimple-CWWOU0FG.js";import"./colors-bl7PrqSM.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Résoudre une équation du type $ax+b=0$",E=!0,v="mathLive",A=!0,R="AMCNum",C="9419f",F={"fr-fr":["can3L02"],"fr-ch":[]};class L extends n{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=o(-5,5,[0,-1,1]);this.reponse=o(-9,9,[-1,0,1]);const t=-e*this.reponse;this.question=`Donner la solution de l'équation :<br> $${e}x${r(t)}=0$`,this.correction=`On procède par étapes successives :<br>
    On commence par isoler $${e}x$ dans le membre de gauche en ajoutant
    $${r(-t)}$ dans chacun des membres, puis on divise
    par $${e}$ pour obtenir la solution : <br>
     $\\begin{aligned}
     ${e}x${r(t)}&=0\\\\
    ${e}x&=${r(-t)}\\\\
    x&=${i(-t,e)}\\\\
    x&=${this.reponse}
    \\end{aligned}$
   `,this.canEnonce=this.question,this.canReponseACompleter=""}}export{A as amcReady,R as amcType,L as default,E as interactifReady,v as interactifType,F as refs,y as titre,C as uuid};
