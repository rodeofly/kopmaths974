import{K as i}from"./Exercice-DtXhjCyI.js";import{a as o,F as t,m as r,e as s}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Calculer une probabilité",E=!0,q="mathLive",v="5c582";class C extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=i.clavierDeBaseAvecFraction,this.canOfficielle=!1}nouvelleVersion(){let e;this.canOfficielle?e=9:e=o([2,3,4,5,9,10,11,15,20,21,22,23,24,25]),this.reponse=new t(Math.floor(100/e),100),this.question=`Parmi $100$ jetons numérotés de $1$ à $100$, quelle est la probabilité de tirer
    un jeton portant un multiple de $${e}$ ?`,this.correction=`Comme $${e}\\times ${Math.floor(100/e)}=${e*Math.floor(100/e)}\\leqslant 100$ 
    et  $${e}\\times ${Math.floor(100/e)+1}=${e*(Math.floor(100/e)+1)} > 100$,
    il y a $${Math.floor(100/e)}$ multiples de $${e}$ inférieurs à $100$.<br>
    Ainsi, la probabilité d'obtenir 
    un multiple de $${e}$ est  $${new t(Math.floor(100/e),100).texFraction}=${r(s(Math.floor(100/e)/100,2))}$.
    
      `,this.canEnonce=this.question,this.canReponseACompleter="",this.interactif||(this.question+="")}}export{C as default,E as interactifReady,q as interactifType,y as titre,v as uuid};
