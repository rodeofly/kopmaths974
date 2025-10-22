import{K as n}from"./Exercice-DtXhjCyI.js";import{a,d as o,m as c,e as t,_ as i,r as $}from"./embellissements-BYV7mIDn.js";import{b as s}from"./colors-bl7PrqSM.js";import m from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const C="Déterminer la valeur décimale d’une fraction",N=!0,k="mathLive",A=!0,T="AMCNum",R="bf6e6",K={"fr-fr":["can6C22","6N3A-flash1","3AutoN01-1"],"fr-ch":[]};class V extends m{constructor(){super(),this.nbQuestions=1,this.formatChampTexte=n.clavierNumbers,this.typeExercice="simple"}nouvelleVersion(){let r,e;switch(a([1,2,3,4])){case 1:r=$(1,9,5),this.reponse=o(r/5),this.question=`Donner la valeur décimale de  $\\dfrac{${r}}{5}$.`,this.correction=`$\\dfrac{${r}}{5}=${c(t(this.reponse))}$<br>`,(r===2||r===3||r===4)&&(this.correction+=i(`
    <br> Mentalement : <br>
         $\\dfrac{1}{5}=0,2$ et $\\dfrac{${r}}{5}=${r}\\times \\dfrac{1}{5}=${r}\\times 0,2=${t(this.reponse)}$.`,s)),r>5&&(this.correction+=i(`
  <br> Mentalement : <br>
   $\\dfrac{${r}}{5}=\\dfrac{5}{5}+\\dfrac{${r-5}}{5}=1+${t((r-5)/5)}=${t(this.reponse)}$.`,s));break;case 2:e=a([1,3,5,7,9,11]),this.question=`Donner la valeur décimale de  $\\dfrac{${e}}{4}$.`,this.reponse=o(e/4),this.correction=`$\\dfrac{${e}}{4}=${c(t(this.reponse))}$<br>`,(e===5||e===7)&&(this.correction+=i(`
          <br> Mentalement : <br>
          $\\dfrac{${e}}{4}=\\dfrac{4}{4}+\\dfrac{${e-4}}{4}=
          1+${t((e-4)/4)}=${t(this.reponse)}$.`,s)),(e===9||e===11)&&(this.correction+=i(`
          <br> Mentalement : <br>
          $\\dfrac{${e}}{4}=\\dfrac{8}{4}+\\dfrac{${e-8}}{4}=
          2+${t((e-8)/4)}=${t(this.reponse)}$.`,s));break;case 3:e=a([1,3,5,7,9,11,13,17,19]),this.question=`Donner la valeur décimale de  $\\dfrac{${e}}{10}$.`,this.reponse=o(e/10),this.correction=`$\\dfrac{${e}}{10}=${c(t(this.reponse))}$<br>`,e>1&&(this.correction+=i(`
          <br> Mentalement : <br>
          $\\dfrac{${e}}{10}=${e}\\times \\dfrac{1}{10}=
          ${e}\\times 0,1=${t(this.reponse)}$.`,s));break;case 4:e=a([3,5,7,9,11,13,17,19]),this.question=`Donner la valeur décimale de  $\\dfrac{${e}}{2}$.`,this.reponse=o(e/2),this.correction=`$\\dfrac{${e}}{2}=${c(t(this.reponse))}$<br>`,this.correction+=i(`
          <br> Mentalement : <br>
          $\\dfrac{${e}}{2}=${e}\\div 2=${t(this.reponse)}$.`,s);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{A as amcReady,T as amcType,V as default,N as interactifReady,k as interactifType,K as refs,C as titre,R as uuid};
