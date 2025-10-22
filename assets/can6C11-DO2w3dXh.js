import c from"decimal.js";import{b as $}from"./colors-bl7PrqSM.js";import{K as a}from"./Exercice-DtXhjCyI.js";import{r as o,a as u,e,m as n,_ as m}from"./embellissements-BYV7mIDn.js";import p from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const M="Calculer le double ou le triple (décimal)",L=!0,Q="mathLive",R=!0,A="AMCNum",K="50fc4",S={"fr-fr":["can6C11","6N2E-flash2"],"fr-ch":[]};class w extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierNumbers,this.optionsDeComparaison={nombreDecimalSeulement:!0}}nouvelleVersion(){const r=o(1,3),l=o(1,9,r),t=r*10+l,s=new c(o(1,9)).div(10),i=s.add(t);u([!0,!1])?(this.reponse=i.mul(3),this.question=`Quel est le triple de $${e(i,1)}$ ?`,this.correction=`Le triple de $${e(i,1)}$ est $3 \\times ${e(i,1)}=${n(e(Number(this.reponse),1))}$.<br>`,this.correction+=m(`
      <br> Mentalement : <br>
  On décompose $${e(i,1)}$ en $${t}+${e(s,1)}$. <br>
  On calcule le triple de $${t}$, soit $3\\times ${t}= ${3*t}$
  puis le triple de $${e(s,1)}$, soit $3\\times ${e(s,1)}=${e(s.mul(3),1)}$.<br>
  On en fait la somme : $${3*t}+${e(s.mul(3),1)}$, ce qui donne le résultat $${e(Number(this.reponse),1)}$.
      `,$)):(this.reponse=i.mul(2),this.question=`Quel est le double de $${e(i,1)}$ ?`,this.correction=`Le double de $${e(i,1)}$ est $2 \\times ${e(i,1)}=${n(e(Number(this.reponse),1))}$.<br>`,this.correction+=m(`
      <br> Mentalement : <br>
  On décompose $${e(i,1)}$ en $${t}+${e(s,1)}$. <br>
  On calcule le double de $${t}$, soit $2\\times ${t}= ${2*t}$
  puis le double de $${e(s,1)}$, soit $2\\times ${e(s,1)}=${e(s.mul(2),1)}$.<br>
  On en fait la somme : $${2*t}+${e(s.mul(2),1)}$, ce qui donne le résultat $${e(Number(this.reponse),1)}$.
      `,$)),this.canEnonce=this.question,this.canReponseACompleter=""}}export{R as amcReady,A as amcType,w as default,L as interactifReady,Q as interactifType,S as refs,M as titre,K as uuid};
