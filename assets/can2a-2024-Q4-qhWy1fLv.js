import a from"./ExerciceSimple-CWWOU0FG.js";import{F as c,m as s,a as m,r as p}from"./embellissements-BYV7mIDn.js";import{K as d}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const q="Calculer avec des fractions ",w=!0,A="mathLive",K="bb035";class O extends a{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=d.clavierDeBaseAvecFraction,this.optionsChampTexte={texteAvant:" $=$"}}nouvelleVersion(){if(this.canOfficielle)this.reponse=new c(22,7).texFraction,this.question="$3+\\dfrac{1}{7}$ ",this.correction=`$\\begin{aligned}
      3+\\dfrac{1}{7} &= \\dfrac{3 \\times 7}{7} + \\dfrac{1}{7}\\\\
      & = \\dfrac{21}{7} + \\dfrac{1}{7}\\\\
      &  =${s("\\dfrac{22}{7}")}
      \\end{aligned}$`;else{const n=m([[1,3],[2,3],[3,7],[2,7],[4,3],[5,3],[4,7],[1,5],[3,5],[1,7],[2,9],[1,9],[7,9],[1,8],[5,8]]),e=p(1,4),r=n[0],t=n[1],i=new c(r,t),o=new c(e*t+r,t);this.reponse=o,this.question=`$${e}+${i.texFraction}$ `,this.correction=`$\\begin{aligned}
      ${e}+${i.texFraction} &= \\dfrac{${e} \\times ${t}}{${t}} + ${i.texFraction} \\\\
      &= \\dfrac{${e*t}}{${t}} + ${i.texFraction}\\\\
      &  =${s(o.texFraction)}
      \\end{aligned}$`}this.canEnonce=this.question,this.canReponseACompleter=""}}export{O as default,w as interactifReady,A as interactifType,q as titre,K as uuid};
