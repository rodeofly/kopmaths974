import c from"./ExerciceSimple-CWWOU0FG.js";import{a,r as n,e,m as l}from"./embellissements-BYV7mIDn.js";import m from"decimal.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const O="Placer la virgule dans un produit",P=!0,R="mathLive",S="050b3";class V extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.canOfficielle=!1}nouvelleVersion(){let s,t,i;this.canOfficielle?(s=10,t=24,i=7):(s=a([10,100,1e3]),t=n(2,5)*10+n(1,9),i=n(3,9));const o=t*i;this.question=`Sachant que $${e(t,0)}\\times ${e(i,0)}=${e(o,0)}$,<br>complète`,this.canEnonce=this.question+".",this.question+=` : $${e(t/s,3)}\\times ${e(i,0)}=$`,this.interactif||(this.question+=" $\\ldots$"),this.canReponseACompleter=`$${e(t/s,3)}\\times ${e(i,0)}=\\ldots$`,this.reponse=e(o/s,3);const r=new m(1).div(s);this.correction=`On utilise le résultat du calcul donné : <br>
    $\\begin{aligned}
      ${e(t/s,3)}\\times ${e(i,0)}&=(${e(t,0)}\\times ${e(r,3)})\\times ${e(i,0)}\\\\
      &=${e(t,0)}\\times ${e(i,0)}\\times ${e(r,3)}\\\\
      &=${e(o,0)}\\times ${e(r,3)}\\\\
      &=${l(e(o/s,3))}
      \\end{aligned}$`}}export{V as default,P as interactifReady,R as interactifType,O as titre,S as uuid};
