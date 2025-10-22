import{r as i,d as n,e as t,_ as c}from"./embellissements-BYV7mIDn.js";import m from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const A="Calculer la somme de nombres décimaux",N=!0,R="mathLive",q=!0,v="AMCNum",M="f8f99",O={"fr-fr":["can5N01"],"fr-ch":[]};class S extends m{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple"}nouvelleVersion(){const e=i(1,9),r=i(1,9,e),o=i(1,9,[e,r]),s=i(1,9,[e,r,o]);this.reponse=n(10+(r+s)*.1+o*.01),this.question=`Calculer $${t(e+r*.1+o*.01)}+${t(10-e+s*.1)}$.`,this.correction=`$${t(e+r*.1+o*.01)}+${t(10-e+s*.1)}=${t(10+(r+s)*.1+o*.01)}$`,this.correction+=c(`
    <br> Mentalement : <br>
    On fait la somme des parties entières des deux nombres : $${e}+${10-e}=10$, puis on ajoute les parties décimales. <br>
    On obtient :<br>
$${t(r*.1+o*.01)}+${t(s*.1)}=${t(r*.1+o*.01+s*.1)}$.<br>
Ainsi, $${t(e+r*.1+o*.01)}+${t(10-e+s*.1)}=${t(10+(r+s)*.1+o*.01)}$.
    `),this.canEnonce=this.question,this.canReponseACompleter=""}}export{q as amcReady,v as amcType,S as default,N as interactifReady,R as interactifType,O as refs,A as titre,M as uuid};
