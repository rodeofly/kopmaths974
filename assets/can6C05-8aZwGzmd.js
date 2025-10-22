import{b as l}from"./colors-bl7PrqSM.js";import{K as u}from"./Exercice-DtXhjCyI.js";import{r as n,a,e,_ as s,m as p}from"./embellissements-BYV7mIDn.js";import h from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const D="Multiplier astucieusement",N=!0,T="mathLive",R=!0,z="AMCNum",K="c8078",Q={"fr-fr":["can6C05","auto6N2D-flash1"],"fr-ch":[]};class S extends h{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=u.clavierNumbers,this.besoinFormulaireCaseACocher=["Permettre des facteurs au dixième, au millième",!1],this.optionsDeComparaison={nombreDecimalSeulement:!0}}nouvelleVersion(){const i=n(1,9),o=n(1,9,i),r=n(1,9,[i,o]),c=n(1,9,[i,o,r]),m=a([1,2,3,4,5,6]);let $=i*1e3+o*100;$+=this.sup?a([r*10+c,r*10,0]):r*10;const t=$/1e3;switch(this.reponse=m<5?$/10:$/100,m){case 1:this.question=`Calculer $4 \\times ${e(t,3)}\\times 25$.`,this.correction=`$4 \\times ${e(t,3)}\\times 25 = 100 \\times ${e(t,3)} = ${p(e(this.reponse,1))}$<br>`,this.correction+=s(`<br> Mentalement : <br>
  On remarque dans $4 \\times ${e(t,3)}\\times 25$ le produit $4\\times 25$ qui donne $100$.<br>
  Il reste alors à multiplier par $100$ le nombre $${e(t,3)}$ : le chiffre des unités ($${i}$) devient le chiffre des centaines, etc ...
  on obtient ainsi comme résultat : $${e(this.reponse,1)}$.
    `,l);break;case 2:this.question=`Calculer $2 \\times ${e(t,3)}\\times 50$.`,this.correction=`$2 \\times ${e(t,3)}\\times 50 = 100 \\times ${e(t,3)} = ${e(this.reponse,1)}$`,this.correction+=s(`<br> Mentalement : <br>
  On remarque dans $2 \\times ${e(t,3)}\\times 50$ le produit $2\\times 50$ qui donne $100$.<br>
  Il reste alors à multiplier par $100$ le nombre $${e(t,3)}$ : le chiffre des unités ($${i}$) devient le chiffre des centaines, etc ...
  on obtient ainsi comme résultat : $${e(this.reponse,1)}$.
    `);break;case 3:this.question=`Calculer $25 \\times ${e(t,3)}\\times 4$.`,this.correction=`$25 \\times ${e(t,3)}\\times 4 = 100 \\times ${e(t,3)} = ${e(this.reponse,1)}$`,this.correction+=s(`<br> Mentalement : <br>
        On remarque dans $25 \\times ${e(t,3)}\\times 4$ le produit $4\\times 25$ qui donne $100$.<br>
        Il reste alors à multiplier par $100$ le nombre $${e(t,3)}$ : le chiffre des unités ($${i}$) devient le chiffre des centaines, etc ...
        on obtient ainsi comme résultat : $${e(this.reponse,1)}$.
          `);break;case 4:this.question=`Calculer $50 \\times ${e(t,3)}\\times 2$.`,this.correction=`$50 \\times ${e(t,3)}\\times 2 = 100 \\times ${e(t,3)} = ${e(this.reponse,1)}$`,this.correction+=s(`<br> Mentalement : <br>
  On remarque dans $50 \\times ${e(t,3)}\\times 2$ le produit $2\\times 50$ qui donne $100$.<br>
  Il reste alors à multiplier par $100$ le nombre $${e(t,3)}$ : le chiffre des unités ($${i}$) devient le chiffre des centaines, etc ...
  on obtient ainsi comme résultat : $${e(this.reponse,1)}$.
    `);break;case 5:this.question=`Calculer $2 \\times ${e(t,3)}\\times 5$.`,this.correction=`$2 \\times ${e(t,3)}\\times 5 = 10 \\times ${e(t,3)} = ${e(this.reponse,1)}$`,this.correction+=s(`<br> Mentalement : <br>
    On remarque dans $2 \\times ${e(t,3)}\\times 5$ le produit $2\\times 5$ qui donne $10$.<br>
    Il reste alors à multiplier par $10$ le nombre $${e(t,3)}$ : le chiffre des unités ($${i}$) devient le chiffre des dizaines, etc ...
    on obtient ainsi comme résultat : $${e(this.reponse,1)}$.
      `);break;case 6:this.question=`Calculer $5 \\times ${e(t,3)}\\times 2$.`,this.correction=`$5 \\times ${e(t,3)}\\times 2 = 10 \\times ${e(t,3)} = ${e(this.reponse,1)}$`,this.correction+=s(`<br> Mentalement : <br>
    On remarque dans $5 \\times ${e(t,3)}\\times 2$ le produit $5\\times 2$ qui donne $10$.<br>
    Il reste alors à multiplier par $10$ le nombre $${e(t,3)}$ : le chiffre des unités ($${i}$) devient le chiffre des dizaines, etc ...
    on obtient ainsi comme résultat : $${e(this.reponse,1)}$.
      `);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{R as amcReady,z as amcType,S as default,N as interactifReady,T as interactifType,Q as refs,D as titre,K as uuid};
