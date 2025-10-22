import s from"./ExerciceSimple-CWWOU0FG.js";import{m as o,r,a as c}from"./embellissements-BYV7mIDn.js";import{K as $}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Calculer une expression pour une valeur particulière",q=!0,C="mathLive",T="ca76e";class V extends s{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=$.clavierDeBaseAvecFraction}nouvelleVersion(){if(this.canOfficielle)this.question="Valeur de $9x+2$ pour $x=-2$<br>",this.correction=`Pour $x=-2$, on obtient :  <br>
          $\\begin{aligned}
          9\\times(-2)+2&=-18+2\\\\
          &=${o("-16")}
          \\end{aligned}$.`,this.reponse="-16";else{const e=r(2,6),i=r(3,5),t=r(-4,-2),n=c([!0,!1]);this.question=`Valeur de ${n?`$${e}+${i}x$`:`$${i}x+${e}$`} pour $x=${t}$ `,this.correction=`Pour $x=${t}$, on obtient : <br> 
            ${n?`$\\begin{aligned}${e}+${i}x&=${e}+${i}\\times(${t})\\\\&=${o(e+i*t)}\\end{aligned}$.`:`$\\begin{aligned}${i}x+${e}&=${i}\\times(${t})+${e}\\\\&=${o(e+i*t)}\\end{aligned}$.`}
            `,this.reponse=e+i*t}this.canEnonce=this.question,this.canReponseACompleter=""}}export{V as default,q as interactifReady,C as interactifType,y as titre,T as uuid};
