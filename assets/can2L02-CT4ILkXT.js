import{r as i,u as n,Y as s,e as r}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const P="Calculer les coordonnées d’un point sur une droite",C=!0,D="mathLive",L="04/11/2022",A="dfe60",E={"fr-fr":["can2L02"],"fr-ch":[]};class v extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const t=i(-10,10,0),o=i(-10,10,0),e=i(-10,10,0);this.formatInteractif="texte",this.reponse=`${e};${t*e+o}`,this.question=` Déterminer les coordonnées du point de la droite
        d'équation $y=${n(t,o)}$ dont l'abscisse est $${e}$.
       `,this.interactif&&(this.optionsChampTexte={texteApres:"$)$"},this.question+="<br>$($"),t===1?this.correction=`Puisque $${e}$ est l'abscisse de ce point, son ordonnée est donnée par :<br>
        $y= ${e}+${s(o)}=${t*e+o}$.<br>
  Les coordonnées du  point sont donc : $(${e};${r(t*e+o)})$.`:this.correction=`Puisque $${e}$ est l'abscisse de ce point, son ordonnée est donnée par :<br>

  $y=${t}\\times ${s(e)}+${s(o)}=${t*e} + ${s(o)}=${t*e+o}$.<br>
  Les coordonnées du  point sont donc : $(${e};${r(t*e+o)})$.`,this.canEnonce=` Déterminer les coordonnées du point de la droite
    d'équation $y=${n(t,o)}$ dont l'abscisse est $${e}$. `,this.canReponseACompleter=""}}export{L as dateDePublication,v as default,C as interactifReady,D as interactifType,E as refs,P as titre,A as uuid};
