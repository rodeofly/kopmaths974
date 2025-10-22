import o from"./ExerciceSimple-CWWOU0FG.js";import{F as a,m as n,a as $}from"./embellissements-BYV7mIDn.js";import{K as d}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const T="Diviser des fractions",g=!0,q="mathLive",C="abad7";class L extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=d.clavierDeBaseAvecFraction,this.optionsChampTexte={texteAvant:" $=$"},this.canOfficielle=!1}nouvelleVersion(){let t;if(this.canOfficielle)t=new a(4,45),this.question="$\\dfrac{2}{5}\\div\\dfrac{9}{2}$",this.correction=`Diviser par un nombre revient à multiplier par  son inverse. L'inverse de $\\dfrac{9}{2}$ est 
      $\\dfrac{2}{9}$. <br>Ainsi, 
      $\\dfrac{2}{5}\\div\\dfrac{9}{2}=\\dfrac{2}{5}\\times\\dfrac{2}{9}=${n(t.texFraction)}$.`;else{const c=$([[2,3,4,5],[2,3,5,7],[2,9,3,8],[4,5,3,2],[4,3,5,7],[3,5,2,9],[4,7,2,3],[1,5,3,7],[4,5,1,3],[3,4,9,7],[8,7,2,3]]),r=c[0],s=c[1],e=c[2],i=c[3];t=new a(r*i,s*e),this.question=`$\\dfrac{${r}}{${s}}\\div \\dfrac{${e}}{${i}}$`,this.correction=`Diviser par un nombre revient à multiplier par  son inverse. L'inverse de $\\dfrac{${e}}{${i}}$ est 
      $\\dfrac{${i}}{${e}}$. <br>Ainsi, <br><br>
       $\\begin{aligned}
       \\dfrac{${r}}{${s}}\\div \\dfrac{${e}}{${i}}&=\\dfrac{${r}}{${s}}\\times \\dfrac{${i}}{${e}}\\\\
      &=\\dfrac{${r}\\times ${i}}{${s}\\times${e}}\\\\
      &=${n(t.texFraction)}
      \\end{aligned}$<br>
      Ainsi, $\\dfrac{${r}}{${s}}\\div \\dfrac{${e}}{${i}}=${n(t.simplifie().texFraction)}$
      `}this.reponse=t.texFraction,this.canEnonce=this.question,this.canReponseACompleter=""}}export{L as default,g as interactifReady,q as interactifType,T as titre,C as uuid};
