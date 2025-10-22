import{a as s}from"./deprecatedFractions-D2cbyAQf.js";import{r as n,s as e}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"./colors-bl7PrqSM.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const q="Déterminer le rang d’une médiane",E=!0,y="mathLive",R="87ceb",M={"fr-fr":["can3S06"],"fr-ch":[]};class Q extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const t=n(10,15),r=n(1,4),i=t*2*r+1;this.question=`Une série statistique de $${i}$ données est rangée dans l’ordre croissant.<br>
   
    Quel est le rang de la médiane ? `,this.correction=`En notant $x_1$ la plus valeur de la série, puis $x_2$ la suivante, .... et $x_{${i}}$ la plus grande valeur, on obtient :<br>
$\\underbrace{x_1 ${e(2)} ; ${e(2)} x_2 ${e(2)} ; ${e(2)} ..... ; ${e(2)}
 x_{${t*r}}}_{${t*r} \\text{ valeurs}} ${e(2)} ; ${e(2)} \\underbrace{x_{${t*r+1}}}_{\\text{Médiane}}
 ${e(2)} ; ${e(2)} \\underbrace{x_{${t*r+2}} ; ${e(2)} ..... ; ${e(2)}  x_{${i}}}_{${t*r} \\text{ valeurs}}$<br>

    
    
    Puisque la série comporte un nombre impair de valeurs, la médiane se situe au rang $\\dfrac{${i}+1}{2}=${s(i+1,2)}$.`,this.reponse=(i+1)/2,this.canEnonce=this.question,this.canReponseACompleter=""}}export{Q as default,E as interactifReady,y as interactifType,M as refs,q as titre,R as uuid};
