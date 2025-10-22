import a from"./ExerciceSimple-CWWOU0FG.js";import{m as o,r as n,a as c,u as l,f as r,Y as $}from"./embellissements-BYV7mIDn.js";import{K as p}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const A="Calculer une image",C=!0,Q="mathLive",T="9727d";class B extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=p.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=-2,this.question=` $f$ est la fonction définie par : $f(x)=4-2x$ pour tout nombre $x$.<br>
      Quelle est l'image de $3$ par la fonction $f$ ? `,this.correction=`On remplace $x$ par $3$ dans l'expression de $f$ : <br>
       $\\begin{aligned}
       f(3)&=4-2\\times 3\\\\
    &=4-6\\\\
      &=${o(this.reponse)}
      \\end{aligned}$<br>
     `;else{const i=n(-5,5,[-1,0,1]),t=n(-5,5,[-1,0,1]),s=c([!0,!1]),e=n(-5,5,[-1,0,1]);this.reponse=i*e+t,this.question=`$f$ est la fonction définie par : $f(x)=${s?`${l(i,t)}`:`${t}${r(i)}x`}$ pour tout nombre $x$.<br>
      Quelle est l'image de $${e}$ par la fonction $f$ ? `,this.correction=`On remplace $x$ par $${e}$ dans l'expression de $f$ : <br>
      $\\begin{aligned}
      f(${e})&=${s?`${i}\\times ${$(e)}${r(t)}`:`${t}${r(i)}\\times ${$(e)}`}\\\\
   &=${s?`${i*e}${r(t)}`:`${t}${r(i*e)}`}\\\\
     &=${o(this.reponse)}
     \\end{aligned}$<br>
    `}this.canEnonce=this.question,this.canReponseACompleter=""}}export{B as default,C as interactifReady,Q as interactifType,A as titre,T as uuid};
