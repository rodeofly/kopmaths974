import a from"./ExerciceSimple-CWWOU0FG.js";import{m as s,r as t,u as o,Y as c,f as n}from"./embellissements-BYV7mIDn.js";import{K as p}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const C="Calculer une expression pour une valeur particulière",q=!0,A="mathLive",O="eaa47";class P extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=p.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=-6,this.question="Calculer $2+8x$ pour $x=-1$.<br> ",this.correction=`On remplace $x$ par $-1$ dans l'expression  : <br>
       $\\begin{aligned}
       2+8\\times (-1)&=2-8\\\\
      &=${s(this.reponse)}
      \\end{aligned}$
     `;else{const e=t(-5,5,[0,1]),i=t(-10,10,0),r=t(-5,3,0);this.reponse=e*r+i,this.question=`Calculer $${o(e,i)}$ pour $x=${r}$.<br>`,this.correction=`Pour $x=${r}$, on a : <br>
      $\\begin{aligned}
      ${o(e,i)}&=${e}\\times ${c(r)}${n(i)}\\\\
      &=${e*r}${n(i)}\\\\
      &=${s(this.reponse)}
     \\end{aligned}$
      `}this.canEnonce=this.question,this.canReponseACompleter=""}}export{P as default,q as interactifReady,A as interactifType,C as titre,O as uuid};
