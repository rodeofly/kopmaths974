import f from"./ExerciceSimple-CWWOU0FG.js";import{a as s,r as n,u as r,Y as o,m as a,_ as c}from"./embellissements-BYV7mIDn.js";import{K as p}from"./Exercice-DtXhjCyI.js";import{a as $}from"./comparisonFunctions-B45ZZ3C7.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";const P="Déterminer une fonction affine avec deux images",T=!0,k="mathLive",B="30/04/2024",K="571b2",M={"fr-fr":["can2F19"],"fr-ch":["11FA8-23","1mF2-18"]};class O extends f{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=p.clavierDeBaseAvecVariable,this.compare=$}nouvelleVersion(){switch(s([1,2])){case 1:{const e=s(["f","g","h"]),t=n(1,8),i=n(-10,10);this.reponse={reponse:{value:r(t,i),options:{variable:"x",domaine:[-100,100]},compare:$}},this.question=`$${e}$ est une fonction affine vérifiant $${e}(0)=${i}$ et $${e}(1)=${i+t}$.<br>`,this.interactif?this.question+=`L'expression algébrique de $${e}$ est $${e}(x)=$`:this.question+=`Déterminer l'expression algébrique de $${e}$.`,this.correction=`$${e}$ est une fonction affine donc de la forme $${e}(x)=mx+p$ avec $p=${e}(0)=${i}$.<br>
          $\\begin{aligned}
          m&=\\dfrac{${e}(1)-${e}(0)}{1-0}\\\\
          &=${e}(1)-${e}(0)\\\\
          &=${i+t}-${o(i)}\\\\
          &=${t}
          \\end{aligned}$<br>

          On en déduit  $${e}(x)=${a(r(t,i))}$<br>`,this.correction+=c(`
    Mentalement : <br>
Les images de $0$ et de $1$ permettent de déterminer rapidement le coefficient directeur qui est la différence des images, 
soit $${i+t}-${o(i)}=${t}$.
`,"blue")}break;case 2:{const e=s(["f","g","h"]),t=n(1,8),i=n(-10,10);this.reponse={reponse:{value:r(t,i),options:{variable:"x",domaine:[-100,100]},compare:$}},this.question=`$${e}$ est une fonction affine vérifiant $${e}(-1)=${i-t}$ et $${e}(0)=${i}$.<br>`,this.interactif?this.question+=`L'expression algébrique de $${e}$ est $${e}(x)=$`:this.question+=`Déterminer l'expression algébrique de $${e}$.`,this.correction=`$${e}$ est une fonction affine donc de la forme $${e}(x)=mx+p$ avec $p=${e}(0)=${i}$.<br>
        $\\begin{aligned}
        m&=\\dfrac{${e}(0)-${e}(-1)}{0-(-1)}\\\\
        &=${e}(0)-${e}(-1)\\\\
        &=${i}-${o(i-t)}\\\\
        &=${t}
        \\end{aligned}$<br>

        On en déduit  $${e}(x)=${a(r(t,i))}$<br>`,this.correction+=c(`
  Mentalement : <br>
Les images de $-1$ et de $0$ permettent de déterminer rapidement le coefficient directeur qui est la différence des images, 
soit $${i}-${o(i-t)}=${t}$.
`,"blue")}break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{B as dateDePublication,O as default,T as interactifReady,k as interactifType,M as refs,P as titre,K as uuid};
