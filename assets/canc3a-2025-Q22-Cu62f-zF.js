import i from"./ExerciceSimple-CWWOU0FG.js";import{r as s,e as t,m as o}from"./embellissements-BYV7mIDn.js";import{K as r}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const E="Effetuer une multiplication avec $25$",b=!0,y="mathLive",C="cc23e",T={"fr-fr":[],"fr-ch":[]};class g extends i{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=r.clavierDeBase,this.optionsChampTexte={texteAvant:"$=$"}}nouvelleVersion(){const e=this.canOfficielle?16:s(2,7)*4;this.reponse=e*25,this.question=`$${e}\\times 25$ `,this.correction=`On décompose $${e}$ en $${t(e/4,0)}\\times 4$.<br>
    $\\begin{aligned}
    ${e}\\times 25 &= ${t(e/4,0)}\\times 4\\times 25\\\\
    &=${t(e/4,0)}\\times 100\\\\
    &=${o(e*25)}
    \\end{aligned}$`,this.canEnonce=this.question,this.canReponseACompleter=""}}export{g as default,b as interactifReady,y as interactifType,T as refs,E as titre,C as uuid};
