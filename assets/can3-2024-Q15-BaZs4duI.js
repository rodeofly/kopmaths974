import c from"./ExerciceSimple-CWWOU0FG.js";import{F as s,m as r,a,ax as $}from"./embellissements-BYV7mIDn.js";import{K as m}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const q="Soustraire deux fractions",y=!0,P="mathLive",w="50e11";class S extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=m.clavierDeBaseAvecFraction,this.optionsChampTexte={texteAvant:" $=$"},this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=new s(3,35).texFraction,this.question="$\\dfrac{13}{35}-\\dfrac{2}{7}$    ",this.correction=`Pour soustraire des fractions, on les met au même dénominateur.<br>
      Ainsi, <br><br>
      $\\begin{aligned}
      \\dfrac{13}{35}-\\dfrac{2}{7}&=\\dfrac{13}{35}-\\dfrac{10}{35}\\\\
      &=${r(this.reponse)}
      \\end{aligned}$`;else{const t=a($()),i=a([2,4]),e=new s(1,t.d*i),n=new s(t.n*i-e.n,e.d);if(this.reponse=n.texFraction,a([!0,!1]))this.question=`$${t.texFraction} - ${e.texFraction}$
       `,this.correction=`Pour soustraire des fractions, on les met au même dénominateur.<br>
       Ainsi, <br><br>
       $\\begin{aligned}
       ${t.texFraction} - ${e.texFraction}
       &=\\dfrac{${t.n}\\times ${i}}{${t.d}\\times ${i}}- ${e.texFraction}\\\\
      &=${t.reduire(i).texFraction} - ${e.texFraction}\\\\
      &=\\dfrac{${t.n*i}-${e.n}}{${e.d}}\\\\
      &=${r(n.texFraction)}${n.texSimplificationAvecEtapes()}
      \\end{aligned}$<br>
      Par conséquent, $ ${t.texFraction}-${e.texFraction}= ${r(n.simplifie().texFraction)}$.`;else{const o=new s(e.n-t.n*i,e.d);this.reponse=o.texFraction,this.question=`$ ${e.texFraction}-${t.texFraction}$`,this.correction=`Pour soustraire des fractions, on les met au même dénominateur.
       <br>
       Ainsi, <br><br>$\\begin{aligned} ${e.texFraction}-${t.texFraction}
       &= ${e.texFraction}-\\dfrac{${t.n}\\times ${i}}{${t.d}\\times ${i}}\\\\
      &=${e.texFraction}-${t.reduire(i).texFraction}\\\\
      &=\\dfrac{${e.n}-${t.n*i}}{${e.d}}\\\\
      &=${r(o.texFraction)}${o.texSimplificationAvecEtapes()}
      \\end{aligned}$<br>
      Par conséquent, $ ${e.texFraction}-${t.texFraction}= ${r(o.simplifie().texFraction)}$.`}}this.canEnonce=this.question,this.canReponseACompleter=""}}export{S as default,y as interactifReady,P as interactifType,q as titre,w as uuid};
