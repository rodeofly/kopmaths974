import n from"./ExerciceSimple-CWWOU0FG.js";import{m as s,a as r,ax as o,e as a}from"./embellissements-BYV7mIDn.js";import{K as c}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Calculer une fraction d'un entier",F=!0,C="mathLive",T="2a879";class q extends n{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierDeBase,this.optionsChampTexte={texteAvant:" est égal à : "},this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=24,this.question="$\\dfrac{3}{5}$ de $40$ ",this.correction=` $\\dfrac{3}{5}$ de $40$ est égal à $\\dfrac{3}{5}\\times 40$.<br><br>
       $\\begin{aligned}
      \\dfrac{3}{5}\\times 40&=3\\times (40\\div 5)\\\\
      &=3\\times 8\\\\
      &=${s(this.reponse)}
      \\end{aligned}$<br>
     `;else{const e=r(o()),i=r([2,3,4,5,6]),t=e.d*i;this.reponse=e.n*i,this.question=`$${e.texFraction}$  de $${t}$`,this.correction=` $${e.texFraction}$ de $${t}$ est égal à $${e.texFraction}\\times ${t}$.<br><br>
       $\\begin{aligned}
       ${e.texFraction}\\times ${t}&=${e.n}\\times (${t}\\div ${e.d})\\\\
      &=${e.n}\\times ${a(t/e.d,0)}\\\\
      &=${s(this.reponse)}
      \\end{aligned}$<br>
     `}this.canEnonce=this.question,this.canReponseACompleter=""}}export{q as default,F as interactifReady,C as interactifType,y as titre,T as uuid};
