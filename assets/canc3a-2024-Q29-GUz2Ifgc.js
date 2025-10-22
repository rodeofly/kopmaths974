import s from"./ExerciceSimple-CWWOU0FG.js";import{r,e,m as o}from"./embellissements-BYV7mIDn.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const E="Diviser par 5",b=!0,q="mathLive",g="4adca";class y extends s{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.canOfficielle=!1}nouvelleVersion(){let i,t;this.canOfficielle?(i=120,t=4):(i=r(16,39,[22,20])*4,t=4),this.question=`$${e(i,0)}\\div ${e(t,0)}`,this.interactif?this.question+="=$":this.question+="$",this.canEnonce=this.question,this.canReponseACompleter="",this.reponse=e(i/t,0),this.correction="Pour diviser par $4$, on peut diviser par $2$ puis diviser le résultat par $2$ :<br>",this.correction+=`
    $\\begin{aligned}
    ${e(i,0)}\\div 4&=(${e(i,0)}\\div 2)\\div 2\\\\
    &=${e(i/2,0)}\\div 2\\\\
    &=${o(this.reponse)}
    \\end{aligned}$`}}export{y as default,b as interactifReady,q as interactifType,E as titre,g as uuid};
