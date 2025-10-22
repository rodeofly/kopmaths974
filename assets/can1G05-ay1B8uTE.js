import{r as n,s as o,Y as s,f as c,m as a}from"./embellissements-BYV7mIDn.js";import m from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const q="Déterminer un produit scalaire avec les coordonnées",A=!0,D="mathLive",P="27/06/2022",S="e20cc",C={"fr-fr":["can1G05"],"fr-ch":[]};class R extends m{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=n(-10,10),t=n(-10,10,0),i=n(-10,10,0),r=n(-10,10,0);this.question=` Dans un repère orthonormé $\\big(O ; \\vec \\imath,\\vec \\jmath\\big)$, on donne deux vecteurs :<br>
    $\\vec{u}\\begin{pmatrix}${e}${o(1)} \\\\ ${o(1)}${t}\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${i}${o(1)} \\\\ ${o(1)}${r}\\end{pmatrix}$<br>

    Alors $\\vec{u}\\cdot\\vec{v}=$`,this.interactif||(this.question+=" ...."),this.correction=`$\\begin{aligned}\\vec{u}\\cdot\\vec{v}&=${e}\\times ${s(i)}+${s(t)}\\times ${s(r)}\\\\
    &=${e*i} ${c(t*r)}\\\\
    &=${a(e*i+t*r)}\\end{aligned}$



   `,this.reponse=e*i+t*r,this.canEnonce=this.question,this.canReponseACompleter=""}}export{P as dateDePublication,R as default,A as interactifReady,D as interactifType,C as refs,q as titre,S as uuid};
