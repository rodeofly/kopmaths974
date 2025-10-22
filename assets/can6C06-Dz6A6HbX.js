import{b as r}from"./colors-bl7PrqSM.js";import{K as $}from"./Exercice-DtXhjCyI.js";import{r as n,a as c,e,m as o,_ as s}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const M="Diviser par 9",q=!0,D="mathLive",N=!0,T="AMCNum",k="8be78",R={"fr-fr":["can6C06","6N2J-flash1"],"fr-ch":[]};class A extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=$.clavierNumbers,this.optionsDeComparaison={nombreDecimalSeulement:!0}}nouvelleVersion(){const i=n(2,9);let t;switch(c([1,2,3])){case 1:t=i*90+9,this.question=`Calculer $${e(t,0)}\\div 9$.`,this.reponse=t/9,this.correction=`$${e(t,0)}\\div 9 = ${o(e(this.reponse,0))}$<br>`,this.correction+=s(`<br> Mentalement : <br>
        On décompose $${e(t,0)}$ en $${e(i*90,0)}+9$.<br>
$${e(i*90,0)}\\div 9= ${e(i*10,0)}$ et $9\\div 9=1$. <br>
On obtient donc comme résultat : $${e(t,0)}\\div 9=${e(i*10,0)}+1$, soit $${e(this.reponse,0)}$.
          `,r);break;case 2:t=i*900+9,this.question=`Calculer $${e(t,0)}\\div 9$.`,this.reponse=t/9,this.correction=`$${e(t,0)}\\div 9 = ${o(e(this.reponse,0))}$<br>`,this.correction+=s(`<br> Mentalement : <br>
        On décompose $${e(t,0)}$ en $${e(i*900,0)}+9$.<br>
$${e(i*900,0)}\\div 9= ${e(i*100,0)}$ et $9\\div 9=1$. <br>
On obtient donc comme résultat : $${e(t,0)}\\div 9=${e(i*100,0)}+1$, soit $${e(this.reponse,0)}$.
          `,r);break;case 3:t=i*900+90,this.question=`Calculer $${e(t,0)}\\div 9$.`,this.reponse=t/9,this.correction=`$${e(t,0)}\\div 9 = ${o(e(this.reponse,0))}$<br>`,this.correction+=s(`<br> Mentalement : <br>
        On décompose $${e(t,0)}$ en $${e(i*900,0)}+90$.<br>
$${e(i*900,0)}\\div 9= ${e(i*100,0)}$ et $90\\div 9=10$. <br>
On obtient donc comme résultat : $${e(t,0)}\\div 9=${e(i*100,0)}+10$, soit $${e(this.reponse,0)}$.
          `,r);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{N as amcReady,T as amcType,A as default,q as interactifReady,D as interactifType,R as refs,M as titre,k as uuid};
