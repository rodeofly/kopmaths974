import a from"./ExerciceSimple-CWWOU0FG.js";import{F as n,m as r,a as o,ax as c,x as s}from"./embellissements-BYV7mIDn.js";import{K as m}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const q="Additionner deux fractions de dénominateurs comptatibles",y=!0,A="mathLive",C="60909";class P extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=m.clavierDeBaseAvecFraction,this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=new n(7,6).texFraction,this.question="$\\dfrac{5}{6}+\\dfrac{1}{3}$ ",this.correction=`Pour additionner les fractions, on les met au même dénominateur. <br>
      $\\begin{aligned}
      \\dfrac{5}{6}+\\dfrac{1}{3}=& \\dfrac{5}{6}+\\dfrac{2}{6}
      &=${r(this.reponse)}
      \\end{aligned}$`;else{const t=o(c()),i=o([2,4]),e=new n(1,t.d*i);this.reponse=t.sommeFraction(e).simplifie().texFraction,this.question=`Calculer $${t.texFraction} + ${e.texFraction}$`,this.correction=`Pour additionner des fractions, on les met au même dénominateur.<br>
     <br>
     Pour écrire $${t.texFraction}$ avec le même dénominateur que $${e.texFraction}$,
     on multiplie son numérateur et son dénominateur par $${i}$.<br><br>
     $\\begin{aligned}
     ${t.texFraction} + ${e.texFraction}&= \\dfrac{${t.n}\\times ${i}}{${t.d}\\times ${i}}+ ${e.texFraction}\\\\
     &=${t.reduire(i).texFraction} + ${e.texFraction}\\\\
     &=\\dfrac{${t.n*i}+${e.n}}{${e.d}}\\\\
     &=${r(`\\dfrac{${t.n*i+e.n}}{${e.d}}`)}
     ${s(t.n*i+e.n,e.d)===1?"\\end{aligned}$":`\\\\&${t.sommeFraction(e).texSimplificationAvecEtapes()}\\end{aligned}$`}`}this.canEnonce=this.question,this.canReponseACompleter="",this.interactif&&(this.question+="$=$")}}export{P as default,y as interactifReady,A as interactifType,q as titre,C as uuid};
