import{K as i}from"./Exercice-DtXhjCyI.js";import{r as s,e as t,m as o}from"./embellissements-BYV7mIDn.js";import r from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const E="Effetuer une multiplication avec $50$",b=!0,y="mathLive",C="57201",T={"fr-fr":[],"fr-ch":["NR"]};class g extends r{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=i.clavierDeBase,this.optionsChampTexte={texteAvant:"$=$"}}nouvelleVersion(){const e=this.canOfficielle?12:s(7,9)*2;this.reponse=e*50,this.question=`$${e}\\times 50$ `,this.correction=`On décompose $${e}$ en $${t(e/2,0)}\\times 2$.<br>
    $\\begin{aligned}
    ${e}\\times 50 &= ${t(e/2,0)}\\times 2\\times 50\\\\
    &=${t(e/2,0)}\\times 100\\\\
    &=${o(e*50)}
    \\end{aligned}$`,this.canEnonce=this.question,this.canReponseACompleter=""}}export{g as default,b as interactifReady,y as interactifType,T as refs,E as titre,C as uuid};
