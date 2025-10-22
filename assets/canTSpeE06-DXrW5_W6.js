import{r as i,s,Y as o,m as n}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Calculer la norme d'un vecteur",E=!0,C="mathLive",S="29/01/2025",T="3f038",P={"fr-fr":["canTSpeE06"],"fr-ch":[]};class D extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=i(-10,10),t=i(-10,10,0),r=i(-10,10,0);this.formatChampTexte=a.clavierFullOperations,this.question=` Dans un repère orthonormé de l'espace $\\big(O ; \\vec \\imath,\\vec \\jmath, \\vec k\\big)$,<br> calculer la norme du vecteur
    $\\vec{u}\\begin{pmatrix}${e}${s(1)} \\\\ ${s(1)}${t}\\\\ ${s(1)}${r}\\end{pmatrix}$.<br>

     <br>$\\vert\\vert\\vec{u}\\vert\\vert=$`,this.interactif||(this.question+=" ...."),this.correction=`$\\begin{aligned}
    \\vert\\vert\\vec{u}\\vert\\vert&=\\sqrt{${o(e)}^2 +${o(t)}^2+${o(r)}^2}\\\\
   &=\\sqrt{${e*e} +${t*t}+${r*r}}\\\\
    &=\\sqrt{${n(e*e+t*t+r*r)}}
    \\end{aligned}$`,this.reponse=`\\sqrt{${e*e+t*t+r*r}}`,this.canEnonce=this.question,this.canReponseACompleter=""}}export{S as dateDePublication,D as default,E as interactifReady,C as interactifType,P as refs,y as titre,T as uuid};
