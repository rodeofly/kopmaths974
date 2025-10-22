import{a as r,ax as o,F as s,m as n,_ as c}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import{K as $}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Effectuer une division avec une fraction",D=!0,q="mathLive",I=!0,R="AMCNum",T="17/05/2025",A="22c4c",M={"fr-fr":["can4C03"],"fr-ch":["NR"]};class Q extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=$.clavierDeBaseAvecFraction,this.optionsDeComparaison={fractionEgale:!0}}nouvelleVersion(){const e=r(o()),t=r([2,3,4,5,6]),i=e.n*t;this.question=`Calculer $${i}\\div ${e.texFraction}$.<br>`,this.reponse=new s(i*e.d,e.n),e.n===1?this.correction=`Diviser par un nombre revient à multiplier par son inverse. <br>
    Ici, on divise par $${e.texFraction}$, donc cela revient à multiplier par son inverse : $${e.inverse().texFraction}$.<br>
    $${i}\\div ${e.texFraction}=${i}\\times ${e.inverse().texFraction}=
        ${n(t*e.d)}$`:(this.correction=`Diviser par un nombre revient à multiplier par son inverse. <br>
    Ici, on divise par $${e.texFraction}$, donc cela revient à multiplier par son inverse :  $${e.inverse().texFraction}$.<br>
    $${i}\\div ${e.texFraction}=${i}\\times ${e.inverse().texFraction}=
    \\dfrac{${i}\\times ${e.d}}{${e.n}}=
    ${t}\\times ${e.d}=${n(t*e.d)}$`,this.correction+=c(`<br> Mentalement : <br>
    Pour multiplier $${i}$ par $${e.inverse().texFraction}$,
    on commence par diviser $${i}$ par $${e.n}$, ce qui donne $${i/e.n}$,
     puis on multiplie par $${e.d}$, ce qui donne $${i/e.n}\\times ${e.d}=${t*e.d}$.      `)),this.canEnonce=this.question,this.canReponseACompleter=""}}export{I as amcReady,R as amcType,T as dateDeModifImportante,Q as default,D as interactifReady,q as interactifType,M as refs,C as titre,A as uuid};
