import{K as c}from"./Exercice-DtXhjCyI.js";import{r as o,m as a,_ as s}from"./embellissements-BYV7mIDn.js";import{b as i}from"./colors-bl7PrqSM.js";import m from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const q="Utiliser la division euclidienne (cas concret)",D=!0,M="mathLive",T=!0,j="AMCNum",I="04/10/2025",K="d02a7",N={"fr-fr":["can6C18","6N2K-flash1"],"fr-ch":[]};class A extends m{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierNumbers,this.optionsDeComparaison={nombreDecimalSeulement:!0}}nouvelleVersion(){let r,t,e,n;r=o(7,9),t=o(1,r-1),n=o(5,9),e=n*r+t,this.reponse=e%r,this.question=`Je possède $${e}$ bonbons et je fabrique des sacs de $${r}$ bonbons.<br>
     Une fois mes sacs complétés, combien me restera-t-il de bonbons ?`,t===1?this.correction=`Il me restera $${a(t)}$ bonbon.<br>`:this.correction=`Il me restera $${a(t)}$ bonbons.<br>`,this.correction+=s(`
    <br> Mentalement : <br>
    On cherche un multiple de $${r}$ inférieur à $${e}$ (mais le plus grand possible).
     C'est $${e-e%r}$. <br> `,i),t===1?this.correction+=s(`
     Comme $${e}=${e-e%r} + ${t}$, donc il me restera $${t}$ bonbon.<br>
     Remarque : je pourrai faire $${(e-e%r)/r}$ sacs complets.
     `,i):this.correction+=s(`
     Comme $${e}=${e-e%r} + ${t}$, donc il me restera $${t}$ bonbons.<br>
     Remarque : je pourrai faire $${(e-e%r)/r}$ sacs complets.
     `,i),this.canEnonce=this.question,this.canReponseACompleter=""}}export{T as amcReady,j as amcType,I as dateDeModifImportante,A as default,D as interactifReady,M as interactifType,N as refs,q as titre,K as uuid};
