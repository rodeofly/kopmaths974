import a from"./ExerciceSimple-CWWOU0FG.js";import{F as r,m as s,a as m,r as p}from"./embellissements-BYV7mIDn.js";import{K as f}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const S="Calculer avec des fractions ",T=!0,q="mathLive",w="9e8a8",A={"fr-fr":[],"fr-ch":[]};class D extends a{constructor(){super(),this.canOfficielle=!0,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=f.clavierDeBaseAvecFraction,this.optionsChampTexte={texteAvant:" $=$"},this.optionsDeComparaison={fractionEgale:!0,nombreDecimalSeulement:!0}}nouvelleVersion(){if(this.canOfficielle)this.reponse=new r(2,5).texFraction,this.question="$1-\\dfrac{3}{5}$ ",this.correction=`On a : <br>
      $\\begin{aligned}
      1-\\dfrac{3}{5} &= \\dfrac{5}{5} - \\dfrac{3}{5}\\\\
      &  =${s("\\dfrac{2}{5}")}
      \\end{aligned}$`;else{const n=m([[1,3],[2,3],[3,7],[2,7],[4,3],[5,3],[4,7],[1,5],[3,5],[1,7],[2,9],[1,9],[7,9],[1,8],[5,8]]),t=p(1,2),o=n[0],e=n[1],i=new r(o,e),c=new r(t*e-o,e).texFraction;this.reponse=c,this.question=`$${t}-${i.texFraction}$ `,this.correction=`On a : <br>$\\begin{aligned}
      ${t}+${i.texFraction} &= \\dfrac{${t} \\times ${e}}{${e}} - ${i.texFraction} \\\\
      &= \\dfrac{${t*e}}{${e}} - ${i.texFraction}\\\\
      &  =${s(c)}
      \\end{aligned}$`}this.canEnonce=this.question,this.canReponseACompleter=""}}export{D as default,T as interactifReady,q as interactifType,A as refs,S as titre,w as uuid};
