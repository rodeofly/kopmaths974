import{b as s}from"./colors-bl7PrqSM.js";import{a as i,r as o,m as n,e as m,_ as u}from"./embellissements-BYV7mIDn.js";import p from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const R="Résoudre un problème de robinets",v=!0,M="mathLive",P=!0,A="AMCNum",N="8767b",T={"fr-fr":["can4P01"],"fr-ch":[]};class D extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const t=i([2,3,4,5,6,10]),r=60/t,e=o(2,r-1,[10])%10;this.reponse=e*t,this.question=`Le débit d'eau d'un robinet est de $${r}$ L/min.<br>
    
    Combien de secondes faut-il pour remplir un seau de $${e}$ L ?`,this.correction=`Il faut $${n(m(t*e))}$ s pour remplir le seau de $${e}$ L.`,this.correction+=u(`<br> Mentalement : <br>
    On commence par déterminer le temps en secondes (puisque dans la question,
       il est demandé un temps en secondes) qu'il faut pour remplir $1$ L.<br>
    Comme le débit est de  $${r}$ L
    pour une minute soit $60$ secondes, on divise $60$ par $${r}$ pour obtenir
    ce temps :  $\\dfrac{60}{${r}}=${t}$ s.<br>
    Puisqu'il faut $${t}$ s pour remplir un litre, il en faut $${e}$ fois plus pour remplir un seau de
    $${e}$ L, soit $${t}\\times ${e}=${t*e}$ s.`,s),this.canEnonce=this.question,this.canReponseACompleter=""}}export{P as amcReady,A as amcType,D as default,v as interactifReady,M as interactifType,T as refs,R as titre,N as uuid};
