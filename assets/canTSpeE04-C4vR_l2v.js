import{r as e,s as t,Y as s,f as $,m}from"./embellissements-BYV7mIDn.js";import p from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const A="Déterminer un produit scalaire avec les coordonnées",D=!0,P="mathLive",z="26/01/2025",C="4a643",R={"fr-fr":["canTSpeE04"],"fr-ch":[]};class T extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const i=e(-10,10),r=e(-10,10,0),c=e(-10,10,0),n=e(-10,10,0),o=e(-10,10,0),a=e(-10,10,0);this.question=` Dans un repère orthonormé de l'espace $\\big(O ; \\vec \\imath,\\vec \\jmath, \\vec k\\big)$, on donne deux vecteurs :<br>
    $\\vec{u}\\begin{pmatrix}${i}${t(1)} \\\\ ${t(1)}${r}\\\\ ${t(1)}${c}\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${n}${t(1)} \\\\ ${t(1)}${o}\\\\ ${t(1)}${a}\\end{pmatrix}$<br>

    Alors $\\vec{u}\\cdot\\vec{v}=$`,this.interactif||(this.question+=" ...."),this.correction=`$\\begin{aligned}
    \\vec{u}\\cdot\\vec{v}&=${i}\\times ${s(n)}+${s(r)}\\times ${s(o)}+${s(c)}\\times ${s(a)}\\\\
    &=${i*n} ${$(r*o)}${$(c*a)}\\\\
    &=${m(i*n+r*o+c*a)}
    \\end{aligned}$`,this.reponse=i*n+r*o,this.canEnonce=this.question,this.canReponseACompleter=""}}export{z as dateDePublication,T as default,D as interactifReady,P as interactifType,R as refs,A as titre,C as uuid};
