import r from"./ExerciceSimple-CWWOU0FG.js";import{m as n,r as o,f as s}from"./embellissements-BYV7mIDn.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const v="Résoudre une équation",E=!0,O="mathLive",y="0e09a";class A extends r{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBaseAvecFraction}nouvelleVersion(){if(this.canOfficielle)this.reponse=4,this.question="Solution de  l'équation $2x-3=5$<br>",this.correction=`On procède par étapes successives :<br>
    On commence par isoler $2x$ dans le membre de gauche en ajoutant
    $3$ dans chacun des membres, puis on divise
    par $2$ pour obtenir la solution : <br>
     $\\begin{aligned}
     2x-3&=5\\\\
    2x&=5+3\\\\
    2x&=8\\\\
    x&=\\dfrac{8}{2}\\\\
    x&=4
    \\end{aligned}$<br>
    La solution de l'équation est : $${n("4")}$.
    `;else{const e=o(-5,5,[0,-1,1]);this.reponse=o(-9,9,[-1,0,1]);const i=o(-9,9,[0]),t=i-e*this.reponse;this.question=`Solution de l'équation $${e}x${s(t)}=${i}$`,this.correction=`On procède par étapes successives :<br>
      On commence par isoler $${e}x$ dans le membre de gauche en ajoutant
      $${s(-t)}$ dans chacun des membres, puis on divise
      par $${e}$ pour obtenir la solution : <br>
       $\\begin{aligned}
       ${e}x${s(t)}&=${i}\\\\
      ${e}x&=${i}${s(-t)}\\\\
      ${e}x&=${i-t}\\\\
      x&=\\dfrac{${i-t}}{${e}}\\\\
      x&=${this.reponse}
      \\end{aligned}$<br>
      La solution de l'équation est : $${n(this.reponse)}$.
      `}this.canEnonce=this.question,this.canReponseACompleter=""}}export{A as default,E as interactifReady,O as interactifType,v as titre,y as uuid};
