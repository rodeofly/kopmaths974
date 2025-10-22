import i from"./ExerciceSimple-CWWOU0FG.js";import{r,e as t,m as s}from"./embellissements-BYV7mIDn.js";import{K as o}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const v="Effetuer une multiplication avec $25$",y=!0,E="mathLive",T="b8fc6",g={"fr-fr":[],"fr-ch":[]};class C extends i{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=o.clavierDeBase,this.optionsChampTexte={texteAvant:"$=$"}}nouvelleVersion(){const e=this.canOfficielle?32:r(3,9)*4;this.reponse=e*25,this.question=`$${e}\\times 25$ `,this.correction=`On peut décomposer $${e}$ en $${t(e/4,0)}\\times 4$.<br>
    $\\begin{aligned}
    ${e}\\times 25 &= ${t(e/4,0)}\\times 4\\times 25\\\\
    &=${t(e/4,0)}\\times 100\\\\
    &=${s(e*25)}
    \\end{aligned}$`}}export{C as default,y as interactifReady,E as interactifType,g as refs,v as titre,T as uuid};
