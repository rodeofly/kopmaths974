import n from"./ExerciceSimple-CWWOU0FG.js";import{r,f as o,m as a}from"./embellissements-BYV7mIDn.js";import{K as c}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const O="Résoudre une équation",g=!0,y="mathLive",R="41aff",T={"fr-fr":[""],"fr-ch":[]};class A extends n{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierDeBase,this.canOfficielle=!0,this.optionsChampTexte={texteAvant:"<br> $x=$"}}nouvelleVersion(){const e=this.canOfficielle?5:r(3,7),s=this.canOfficielle?5:r(-7,7,[-1,0,1]),t=this.canOfficielle?22:r(-9,9,[0,e*s]),i=t-e*s;this.reponse=s,this.question=`Résous $${e}x${o(i)}=${t}$.`,this.correction=`On procède par étapes successives :<br>
         On commence par isoler $${e}x$ dans le membre de gauche en ajoutant
         $${o(-i)}$ dans chacun des membres, puis on divise
         par $${e}$ pour obtenir la solution : <br>
          $\\begin{aligned}
          ${e}x${o(i)}&=${t}\\\\
         ${e}x&=${t}${o(-i)}\\\\
         ${e}x&=${t-i}\\\\
         x&=\\dfrac{${t-i}}{${e}}\\\\
         x&=${this.reponse}
         \\end{aligned}$<br>
         La solution de l'équation est : $${a(s)}$.
         `,this.canEnonce=this.question,this.canReponseACompleter="$x=\\ldots$"}}export{A as default,g as interactifReady,y as interactifType,T as refs,O as titre,R as uuid};
