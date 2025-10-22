import{a as $,r,Y as c}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const E="Calculer la raison d’une suite arithmétique/géométrique",R=!0,g="mathLive",y="18/02/2022",D="cd45d",L={"fr-fr":["can1S07"],"fr-ch":[]};class k extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,t,s,o,n;const i=$(["u","v","w"]);switch($(["a","b"])){case"a":e=r(-15,15,0),o=r(-15,15,0),s=e+o,t=r(0,10),this.question=`Soit $(${i}_n)$ une suite arithmétique telle que :<br>
$${i}_{${t}}=${e}$ et  $${i}_{${t+1}}=${s}$.<br>

Donner la raison $r$ de cette suite.`,this.interactif?this.question+="<br> $r=$":this.question+="",this.correction=`La raison est donnée par la différence de deux termes consécutifs :<br>
        $r=${i}_{${t+1}}-${i}_{${t}}=${s}-${c(e)}=${s-e}$.`,this.reponse=o,this.canEnonce=this.question,this.canReponseACompleter="$r=\\ldots$";break;case"b":e=r(-12,12,0),n=r(-10,10,[-1,1,0]),s=e*n,t=r(0,10),this.question=`Soit $(${i}_n)$ une suite géométrique  telle que :<br>
$${i}_{${t}}=${e}$ et  $${i}_{${t+1}}=${s}$.<br>

Donner la raison $q$ de cette suite.`,this.interactif?this.question+="<br> $q=$":this.question+="",this.correction=`La raison est donnée par le quotient de deux termes consécutifs :<br>
        $q=\\dfrac{${i}_{${t+1}}}{${i}_{${t}}}=\\dfrac{${s}}{${e}}=${s/e}$.`,this.reponse=n,this.canEnonce=this.question,this.canReponseACompleter="$q=\\ldots$";break}}}export{y as dateDePublication,k as default,R as interactifReady,g as interactifType,L as refs,E as titre,D as uuid};
