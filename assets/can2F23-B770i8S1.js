import a from"./ExerciceSimple-CWWOU0FG.js";import{a as c,r as o,e as p,v as r,Y as m,m as $}from"./embellissements-BYV7mIDn.js";import{K as f}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const A="Déterminer la valeur de $p$ dans une fonction affine",C=!0,S="mathLive",K="30/11/2024",N="25d1f",P={"fr-fr":["can2F23"],"fr-ch":["1mF2-20","11FA8-25"]};class R extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=f.clavierDeBase}nouvelleVersion(){const n=c(["f","g","h"]),e=o(-10,10,0),t=o(-10,10,0),i=o(-10,10,0),s=t-i*e;this.reponse=p(s,0),this.question=`$${n}$ est  la fonction définie par $${n}(x)=${r(i)}x+p$.<br>
    Déterminer la valeur de $p$ sachant que $${n}(${e})=${t}$.`,this.correction=`Comme $${n}(${e})=${t}$, alors : <br>
    $\\begin{aligned}
    ${r(i)}${i===1?"":"\\times"} ${m(e)}+p&=${t}\\\\
    ${i*e}+p&=${t}\\\\
    p&=${$(this.reponse)}
    \\end{aligned}$`,this.interactif&&(this.question+="<br>$p=$"),this.canEnonce=this.question,this.canReponseACompleter="$p=\\ldots$"}}export{K as dateDePublication,R as default,C as interactifReady,S as interactifType,P as refs,A as titre,N as uuid};
