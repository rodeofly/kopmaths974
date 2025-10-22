import{r as o,u as n,v as r,Y as $,z as c}from"./embellissements-BYV7mIDn.js";import m from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const q="Déterminer un coefficient dans un développement",y=!0,A="mathLive",E="11/06/2022",P="c1168",g={"fr-fr":["can1L07"],"fr-ch":[]};class C extends m{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,i,e,s;t=o(-8,5,[0]),i=o(-5,9,[0]),e=o(-5,5,[0]),s=o(-5,8,[0]),t*s+i*e===0&&(t=o(-8,5,[0]),i=o(-5,9,[0]),e=o(-5,5,[0]),s=o(-5,8,[0])),this.question=`Déterminer le coefficient de $x$ dans le développement réduit de l'expression : <br>
         $(${n(t,i)})(${n(e,s)})$
       `,this.correction=`Le coefficient du terme en $x$ dans le développement de
    $(${n(t,i)})(${n(e,s)})$ est la somme des produits :`,e<0?this.correction+=`
     $${r(t)}x\\times ${$(s)}$ et $${i} \\times (${e}x)$,
     soit  $${r(t)}x\\times ${$(s)}+${$(i)} \\times (${r(e)}x)=
     ${r(t*s)}x${c(i*e)}x=${r(t*s+i*e)}x$.<br>
     Le coefficient devant $x$ est donc $${t*s+i*e}$.`:this.correction+=`
     $${r(t)}x\\times ${$(s)}$ et $${i} \\times ${r(e)}x$,
     soit  $${r(t)}x\\times ${$(s)}+${$(i)} \\times ${r(e)}x=${t*s}x${c(i*e)}x=${t*s+i*e}x$.<br>
     Le coefficient devant $x$ est donc $${t*s+i*e}$. `,this.reponse=t*s+i*e,this.canEnonce=this.question,this.canReponseACompleter=""}}export{E as dateDePublication,C as default,y as interactifReady,A as interactifType,g as refs,q as titre,P as uuid};
