import{r as n,u as c,v as r,Y as m,z as p}from"./embellissements-BYV7mIDn.js";import d from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const A="Déterminer un coefficient dans un développement*",E=!0,P="mathLive",g="11/06/2022",C="cbbbb",R={"fr-fr":["can1L08"],"fr-ch":[]};class z extends d{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,i,e,$;t=n(-3,3,[0]),i=n(-3,3,[0]),e=n(-2,5,[-1,0]),$=n(-2,5,[0]);const o=n(1,3,[0]),s=n(-9,9,[0]);t*$+i*e===0&&(t=n(-8,5,[0]),i=n(-5,9,[0]),e=n(-5,5,[0]),$=n(-5,8,[0])),this.question=`Déterminer le coefficient de $x$ dans le développement réduit de l'expression : <br>
         $ (${c(o,s)})^2+(${c(t,i)})(${c(e,$)})$
       `,s>0?this.correction=`$\\bullet$ Le coefficient du terme en $x$ dans le développement de
       $(${c(o,s)})^2$ est $2\\times ${r(o)}x\\times ${s}=${2*o*s}x$. <br>`:this.correction=`$\\bullet$ Le coefficient du terme en $x$ dans le développement de
       $(${c(o,s)})^2$ est $-2\\times ${r(o)}x\\times ${-s}=${2*o*s}x$.<br>`,this.correction+=`$\\bullet$ Le coefficient du terme en $x$ dans le développement de
    $(${c(t,i)})(${c(e,$)})$ est la somme des produits :`,e<0?this.correction+=`
     $${r(t)}x\\times ${m($)}$ et $${i} \\times (${e}x)$,
     soit  $${r(t)}x\\times ${m($)}+${m(i)} \\times (${r(e)}x)=
     ${r(t*$)}x${p(i*e)}x=${r(t*$+i*e)}x$.<br>
     `:this.correction+=`
     $${r(t)}x\\times ${m($)}$ et $${i} \\times ${r(e)}x$,
     soit  $${r(t)}x\\times ${m($)}+${m(i)} \\times ${r(e)}x=${t*$}x${p(i*e)}x=${r(t*$+i*e)}x$.<br>
      `,this.correction+=`
     Le terme en $x$ est donc donné par la somme :  $${2*o*s}x +${t*$+i*e===1?"":`${m(t*$+i*e)}`}x=${2*o*s+t*$+i*e}x$.<br>
     Le coefficient devant $x$ est donc $${2*o*s+t*$+i*e}$.`,this.reponse=2*o*s+t*$+i*e,this.canEnonce=this.question,this.canReponseACompleter=""}}export{g as dateDePublication,z as default,E as interactifReady,P as interactifType,R as refs,A as titre,C as uuid};
