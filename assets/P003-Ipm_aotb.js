import{d as t}from"./reperes-WwrVcExd.js";import{g as r,o as n,ao as o}from"./embellissements-BYV7mIDn.js";import{E as a}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const N="Tracer des droites graduées",S={"fr-fr":["P003"],"fr-ch":[]},T="ad5f5";class k extends a{constructor(){super(),this.besoinFormulaireTexte=["Nombres de parts",`Nombres séparés par des tirets  :
1 : Unités
2 : Demis
3 : Tiers
4 : Quarts
5 : Cinquièmes
6 : Sixièmes
7 : Septièmes
8 : Huitièmes
9 : Neuvièmes
10: Dixièmes
11: Mélange`],this.nbQuestions=1,this.spacing=3,this.sup=10,this.nbQuestions=4}nouvelleVersion(){const i=r({saisie:this.sup,min:1,max:10,defaut:10,melange:11,nbQuestions:this.nbQuestions,shuffle:!1}).map(Number);for(let s=0,e;s<this.nbQuestions;s++)e=n({xmin:-.5,ymin:-1,xmax:20,ymax:1},t({Unite:4,Min:0,Max:4.7,x:0,y:0,thickSecDist:1/i[s],thickSec:!0,labelsPrincipaux:!1,thickDistance:1})),this.listeQuestions.push(e);o(this)}}export{k as default,S as refs,N as titre,T as uuid};
