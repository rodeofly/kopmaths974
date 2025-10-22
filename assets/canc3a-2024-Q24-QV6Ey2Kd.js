import n from"./ExerciceSimple-CWWOU0FG.js";import{a as c,r as o,e as t,m as a}from"./embellissements-BYV7mIDn.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const v="Placer la virgule dans un produit",y=!0,O="mathLive",P="25b8a";class C extends n{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.canOfficielle=!1}nouvelleVersion(){let e,i,s;this.canOfficielle?(e=2,i=26,s=8):(e=c([2,10]),i=o(1,2)*10+o(1,9),s=o(3,9));const r=i*s;this.question=`Sachant que $${t(i,0)}\\times ${t(s,0)}=${t(r,0)}$,<br>complète`,this.canEnonce=this.question+".",this.question+=` : $${t(i,0)}\\times${t(s*e,0)} =$`,this.interactif||(this.question+=" $\\ldots$"),this.canReponseACompleter=`$${t(i/e,3)}\\times ${t(s,0)}=\\ldots$`,this.reponse=t(r*e,0),this.correction=`On utilise le résultat du calcul donné : <br>
    $\\begin{aligned}
    ${t(i,0)}\\times${t(s*e,0)} &=${t(i,0)}\\times (${t(s,3)}\\times ${t(e,0)})\\\\
      &=(${t(i,0)}\\times ${t(s,0)})\\times ${t(e,3)}\\\\
      &=${t(r,0)}\\times ${t(e,0)}\\\\
      &=${a(t(r*e,0))}
      \\end{aligned}$`}}export{C as default,y as interactifReady,O as interactifType,v as titre,P as uuid};
