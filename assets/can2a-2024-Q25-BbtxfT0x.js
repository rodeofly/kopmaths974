import t from"./ExerciceSimple-CWWOU0FG.js";import{m as i,r as s,a as r}from"./embellissements-BYV7mIDn.js";import{h as a}from"./comparisonFunctions-B45ZZ3C7.js";import{K as o}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";const D="Développer avec une identité remarquable",y=!0,O="mathLive",C="7e2a2";class R extends t{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=o.clavierDeBaseAvecFractionPuissanceCrochets,this.compare=a}nouvelleVersion(){if(this.canOfficielle)this.reponse="x^2-8x+16",this.question=" Développer $(x-4)^2$.<br>",this.correction=`On utilise l'égalité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $a=x$ et $b=4$.<br>
      $\\begin{aligned}
      (x-4)^2&=x^2-2 \\times x \\times 4+4^2\\\\
      &=${i(this.reponse)}\\end{aligned}$`;else{const e=s(1,9);switch(r([1,2])){case 1:this.reponse=`x^2+${2*e}x+${e*e}`,this.question=` Développer $(x+${e})^2$.`,this.correction=`On utilise l'égalité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $a=x$ et $b=${e}$.<br>
      $\\begin{aligned}
      (x+${e})^2&=x^2+2 \\times ${e} \\times x+${e}^2\\\\
      &=${i(this.reponse)}
      \\end{aligned}$`;break;case 2:this.reponse=`x^2-${2*e}x+${e*e}`,this.question=` Développer $(x-${e})^2$.`,this.correction=`On utilise l'égalité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $a=x$ et $b=${e}$.<br>
      $\\begin{aligned}
      (x-${e})^2&=x^2-2 \\times ${e} \\times x+${e}^2\\\\
      &=${i(this.reponse)}
      \\end{aligned}$`;break}}this.canEnonce=this.question,this.canReponseACompleter=""}}export{R as default,y as interactifReady,O as interactifType,D as titre,C as uuid};
