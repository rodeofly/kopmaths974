import{r as o,a as s,Y as $,h as a}from"./embellissements-BYV7mIDn.js";import{a as n}from"./deprecatedFractions-D2cbyAQf.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const A="Déterminer le coefficient d’une fonction affine",E=!0,R="mathLive",O="25/10/2021",P="17987",S={"fr-fr":["can3F06"],"fr-ch":["11FA8-27","1mF2-1b"]};class g extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const t=o(-3,3,0),e=o(1,5),r=s([-4,-3,-2,2,3,4]),i=t+r*e;t>0?(this.question=`$f$ est une fonction affine telle que $f(x)=ax+${t}$ et $f(${e})=${i}$.<br>

    Donner la valeur de $a$.
    `,this.correction=`Comme $f(${e})=${i}$, on a $a\\times ${e}+${$(t)}=${i}$.<br>
    On en déduit $ ${e}a=${i}-${$(t)}$, d'où $a=\\dfrac{${i}-${$(t)}}{${e}}=\\dfrac{${i-t}}{${e}}=${n(i-t,e)}$.`,this.reponse=(i-t)/e):(this.question=`$f$ est une fonction affine telle que $f(x)=ax-${a(t)}$ et $f(${e})=${i}$.<br>

      Donner la valeur de $a$.
    `,this.correction=`Comme $f(${e})=${i}$, on a $a\\times ${e}+${$(t)}=${i}$.<br>
    On en déduit $${e}a=${i}-${$(t)}$, d'où $a=\\dfrac{${i}-${$(t)}}{${e}}=\\dfrac{${i-t}}{${e}}=${n(i-t,e)}$.`,this.reponse=(i-t)/e),this.canEnonce=this.question,this.canReponseACompleter="$a=\\ldots$"}}export{O as dateDePublication,g as default,E as interactifReady,R as interactifType,S as refs,A as titre,P as uuid};
