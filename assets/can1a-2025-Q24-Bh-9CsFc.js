import r from"./ExerciceSimple-CWWOU0FG.js";import{r as s,e,m as o}from"./embellissements-BYV7mIDn.js";import{K as n}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Calculer une différence de deux carrés",C=!0,E="mathLive",g="83b36",T={"fr-fr":[],"fr-ch":[]};class q extends r{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=n.clavierDeBase,this.canOfficielle=!0,this.optionsChampTexte={texteAvant:" $=$"}}nouvelleVersion(){const t=this.canOfficielle?2025:s(1,5)*100+25,i=t-1;this.reponse=e(2*t-1,0),this.question=`$${e(t,0)}^2-${e(i,0)}^2$ `,this.correction=`On utilise l'égalité remarquable $a^2-b^2=(a+b)(a-b)$ avec $a=${e(t,0)}$ et $b=${e(i,0)}$.<br>
    $\\begin{aligned}
    ${e(t,0)}^2-${e(i,0)}^2&=(${e(t,0)}+${e(i,0)})(${e(t,0)}-${e(i,0)})\\\\
    &=${e(t+i,0)}\\times 1\\\\
    &=${o(this.reponse)}
    \\end{aligned}$`,this.canEnonce=this.question,this.canReponseACompleter=""}}export{q as default,C as interactifReady,E as interactifType,T as refs,y as titre,g as uuid};
