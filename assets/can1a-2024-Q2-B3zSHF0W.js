import{r as a,a as s,Y as c,f as l,t as o,a0 as n}from"./embellissements-BYV7mIDn.js";import p from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const L="Déterminer un point sur une courbe",S=!0,V="qcm",F="5157a";class O extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.canOfficielle=!1,this.versionQcm=!0}nouvelleVersion(){const i=this.canOfficielle?-1:a(-5,5,0),e=this.canOfficielle?-2:a(-3,3,0),t=this.canOfficielle?3:s([e**2+i,e**2+i+s([-1,1])]);this.correction=`Le point $A$ est sur la parabole si son ordonnée est égale à l'image de son abscisse. <br>
    $\\begin{aligned}
        f(${e})&=${c(e)}^2${l(i)}\\\\
        &=${e**2+i}
        \\end{aligned}$
        <br>
        ${e**2+i===t?`Le point $A$ est bien sur la parabole.<br> L'affirmation est ${o("Vraie")}`:`Puisque $${e**2+i} \\neq ${t}$, le point $A$ n'est pas sur la parabole. <br>L'affirmation est ${o("FAUSSE")}`}`,this.question=`Affirmation : <br>
    Le point $A(${e}\\,;\\,${t})$ appartient à la parabole d'équation $y=${n(0,1,0,i)}$ `;const r=t===e**2+i;this.reponse=r?"Vrai":"Faux",this.distracteurs=[r?"Faux":"Vrai"],this.canEnonce=`Affirmation : <br>
    Le point $A(${e}\\,;\\,${t})$ appartient à la parabole d'équation $y=${n(0,1,0,i)}$ `,this.canReponseACompleter="\\faSquare[regular] Vrai <br>\\faSquare[regular] Faux"}}export{O as default,S as interactifReady,V as interactifType,L as titre,F as uuid};
