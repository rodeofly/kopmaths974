import{K as a}from"./Exercice-DtXhjCyI.js";import{F as o,m as r,a as c,f as n}from"./embellissements-BYV7mIDn.js";import $ from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Résoudre une équation",A=!0,F="mathLive",L="a9e45";class R extends ${constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBaseAvecFraction}nouvelleVersion(){if(this.canOfficielle)this.reponse=new o(2,7),this.question="Solution de  l'équation $7x+3=5$<br>",this.correction=`On procède par étapes successives :<br>
    On commence par isoler $7x$ dans le membre de gauche en retranchant
    $3$ dans chacun des membres, puis on divise
    par $7$ pour obtenir la solution : <br>
     $\\begin{aligned}
     7x+3&=5\\\\
    7x&=5-3\\\\
    7x&=2\\\\
    x&=\\dfrac{2}{7}   
    \\end{aligned}$<br>
    La solution de l'équation est : $${r("\\dfrac{2}{7}")}$.
    `;else{const s=c([[3,1,5],[3,1,8],[3,2,9],[3,2,-9],[7,4,-2],[7,4,8],[7,3,2],[7,3,-5],[6,3,-2],[6,3,10],[6,4,3],[6,4,-3],[3,4,14],[7,4,14]]),e=s[0],i=s[1],t=s[2];this.reponse=new o(t-i,e),this.question=`Solution de l'équation $${e}x${n(i)}=${t}$<br>`,this.correction=`On procède par étapes successives :<br>
      On commence par isoler $${e}x$ dans le membre de gauche en retranchant
      $${i}$ dans chacun des membres, puis on divise
      par $${e}$ pour obtenir la solution : <br>
       $\\begin{aligned}
       ${e}x${n(i)}&=${t}\\\\
      ${e}x&=${t}${n(-i)}\\\\
      ${e}x&=${t-i}\\\\
      x&=\\dfrac{${t-i}}{${e}}    
      \\end{aligned}$<br>
      La solution de l'équation est : $${r(this.reponse)}$.
      `}this.canEnonce=this.question,this.canReponseACompleter=""}}export{R as default,A as interactifReady,F as interactifType,y as titre,L as uuid};
