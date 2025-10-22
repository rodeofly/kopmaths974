import{r,_ as n}from"./embellissements-BYV7mIDn.js";import i from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Calculer une différence d’entiers",x=!0,y="mathLive",E=!0,g="AMCNum",R="62e1f",q={"fr-fr":["can5C03"],"fr-ch":[]};class v extends i{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple"}nouvelleVersion(){const e=r(41,69,[50,60]),t=r(2,30)+100;this.reponse=t-e,this.question=`Calculer $${t} - ${e}$.`,this.correction=`$${t} - ${e}=${t-e}$`,this.correction+=n(`<br> Mentalement : <br>
    On décompose le calcul $${t} - ${e}$ en  $(100+${t-100})- ${e}$.<br>
    On obtient : <br>
    
    $\\begin{aligned}
    \\underbrace{100-${e}}_{${100-e}}+${t-100}&=${100-e}+${t-100}\\\\
    &=${t-e}
    \\end{aligned}$<br>
       Cela donne :  $${t} - ${e}=${t-e}$.
      `),this.canEnonce=this.question,this.canReponseACompleter=""}}export{E as amcReady,g as amcType,v as default,x as interactifReady,y as interactifType,q as refs,C as titre,R as uuid};
