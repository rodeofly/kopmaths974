import{r,Y as i,_ as n,h as s}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const E="Rechercher un nombre à ajouter",L=!0,q="mathLive",y="6b25b",C={"fr-fr":["can5C15"],"fr-ch":[]};class R extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=r(-9,9,0),o=r(1,8),t=e-o;this.question=`Quel nombre doit-on ajouter à $${e}$ pour obtenir $${t}$ ?
    `,this.correction=`Le nombre $n$ à ajouter vérifie $${e}+n=${t}$, soit
    $n=${t}-${i(e)}=${t-e}$. <br>
    `,this.correction+=n(` Mentalement : <br>
    Le nombre cherché est négatif car le résultat est plus petit que le nombre de départ. <br>
L'"écart" entre les deux nombres est $${s(t-e)}$. Il faut donc ajouter $${t-e}$.
`),this.reponse=t-e,this.canEnonce=this.question,this.canReponseACompleter=""}}export{R as default,L as interactifReady,q as interactifType,C as refs,E as titre,y as uuid};
