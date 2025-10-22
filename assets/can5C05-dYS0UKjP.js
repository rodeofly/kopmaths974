import{r,_ as o}from"./embellissements-BYV7mIDn.js";import n from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Calculer un quotient entier",x=!0,y="mathLive",E=!0,q="AMCNum",A="63dff",R={"fr-fr":["can5C05"],"fr-ch":[]};class M extends n{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple"}nouvelleVersion(){const i=r(11,15),t=r(3,6),e=i*t;this.reponse=i,this.question=`Calculer $${e} \\div ${t}$.`,this.correction=`$${e} \\div ${t}=${i}$`,this.correction+=o(`
    <br> Mentalement : <br>
    On décompose $${e}$ en $${t*10}+${e-10*t}=${t}\\times 10+${t}\\times ${(e-10*t)/t}=${t}(10+${(e-10*t)/t})$.<br>
        Ainsi :
     $${e} \\div ${t}=10+${(e-10*t)/t}=${i}$.<br>
     `),this.canEnonce=this.question,this.canReponseACompleter=""}}export{E as amcReady,q as amcType,M as default,x as interactifReady,y as interactifType,R as refs,C as titre,A as uuid};
