import t from"./ExerciceSimple-CWWOU0FG.js";import{r as s,e,m as r}from"./embellissements-BYV7mIDn.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const b="Diviser par 5",q=!0,x="mathLive",E="17db4";class g extends t{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.canOfficielle=!1}nouvelleVersion(){let i;this.canOfficielle?i=120:i=s(11,30,[12])*10,this.question=`$${e(i,0)}\\div 5`,this.interactif?this.question+="=$":this.question+="$",this.canEnonce=this.question,this.canReponseACompleter="",this.reponse=e(i/5,0),this.correction="Pour diviser par $5$, on peut diviser par $10$ puis multiplier le résultat par $2$ :<br>",this.correction+=`
    $\\begin{aligned}
    ${e(i,0)}\\div 5&=(${e(i,0)}\\div 10)\\times 2\\\\
    &=${e(i/10,0)}\\times 2\\\\
    &=${r(this.reponse)}
    \\end{aligned}$`}}export{g as default,q as interactifReady,x as interactifType,b as titre,E as uuid};
