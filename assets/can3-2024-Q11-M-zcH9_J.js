import n from"./ExerciceSimple-CWWOU0FG.js";import{m as o,r as t,f as r}from"./embellissements-BYV7mIDn.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const v="Résoudre une équation",E=!0,O="mathLive",y="6bb1f";class L extends n{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=4,this.question="$3x-5=7$",this.correction=`On procède par étapes successives.<br>
      On commence par isoler $3x$ dans le membre de gauche en ajoutant
      $5$ dans chacun des membres, puis on divise
      par $3$ pour obtenir la solution : <br>
       $\\begin{aligned}
       3x-5&=7\\\\
      3x&=7+5\\\\
      3x&=12\\\\
      x&=\\dfrac{12}{3}\\\\
      x&=${this.reponse}
      \\end{aligned}$<br>
      La solution de l'équation est : $${o(this.reponse)}$.`;else{let e=t(2,6);this.reponse=t(-5,5,[-1,0,1]);let i=t(-7,7,[0]),s=i-e*this.reponse;do e=t(2,6),this.reponse=t(-5,5,[-1,0,1]),i=t(-7,7,[0]),s=i-e*this.reponse;while(s===0);this.question=`$${e}x${r(s)}=${i}$`,this.correction=`On procède par étapes successives :<br>
      On commence par isoler $${e}x$ dans le membre de gauche en ajoutant
      $${r(-s)}$ dans chacun des membres, puis on divise
      par $${e}$ pour obtenir la solution : <br>
       $\\begin{aligned}
       ${e}x${r(s)}&=${i}\\\\
      ${e}x&=${i}${r(-s)}\\\\
      ${e}x&=${i-s}\\\\
      x&=\\dfrac{${i-s}}{${e}}\\\\
      x&=${this.reponse}
      \\end{aligned}$<br>
      La solution de l'équation est : $${o(this.reponse)}$.
      `}this.canEnonce=this.question,this.canReponseACompleter="$x=\\ldots$",this.interactif?this.question+="<br> $x=$":this.question+="<br> $x=\\ldots$"}}export{L as default,E as interactifReady,O as interactifType,v as titre,y as uuid};
