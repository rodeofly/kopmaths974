import{a as $,r,_ as s,e as t,m}from"./embellissements-BYV7mIDn.js";import{K as o}from"./Exercice-DtXhjCyI.js";import{b as n}from"./colors-bl7PrqSM.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const M="Trouver le complément à 1",T=!0,N="mathLive",k=!0,O="AMCNum",R="9e396",q={"fr-fr":["can6C20","6N2A-flash2"],"fr-ch":[]};class K extends a{constructor(){super(),this.nbQuestions=1,this.formatChampTexte=o.clavierNumbers,this.typeExercice="simple"}nouvelleVersion(){let e,i;switch($([1,2,3])){case 1:e=r(2,9)/10,i=s(`
    <br> Mentalement : <br>
    $1$ unité = $10$ dixièmes.<br>
    On enlève $${t(10*e)}$ dixièmes à $10$ dixièmes, il en reste $${t(10*(1-e))}$.<br>
    Ainsi, $1-${t(e)}=${t(1-e)}$.  `,n);break;case 2:e=r(2,9)/100,i=s(`
    <br> Mentalement : <br>
    $1$ unité = $100$ centièmes.<br>
    On enlève $${t(100*e)}$ centièmes à $100$ centièmes, il en reste $${t(100*(1-e))}$.<br>
    Ainsi, $1-${t(e)}=${t(1-e)}$.  `,n);break;case 3:default:e=r(2,9)/1e3,i=s(`
    <br> Mentalement : <br>
    $1$ unité = $1000$ millièmes.<br>
    On enlève $${t(1e3*e)}$ millièmes à $1000$ millièmes, il en reste $${t(1e3*(1-e))}$.<br>
    Ainsi, $1-${t(e)}=${t(1-e)}$.  `,n);break}this.question=`Calculer $1-${t(e)}$.`,this.correction=`$1-${t(e)}=${m(t(1-e))}$<br>`+i,this.reponse=1-e,this.canEnonce=this.question,this.canReponseACompleter=""}}export{k as amcReady,O as amcType,K as default,T as interactifReady,N as interactifType,q as refs,M as titre,R as uuid};
