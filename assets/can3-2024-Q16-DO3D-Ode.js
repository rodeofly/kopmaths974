import r from"./ExerciceSimple-CWWOU0FG.js";import{m as t,e as s,a as n,r as i}from"./embellissements-BYV7mIDn.js";import{K as c}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const A="Calculer le côté d'un carré à partir de son aire",C=!0,E="mathLive",L="4a518";class g extends r{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=6,this.question=`Un carré a une aire de $36$ cm$^2$.<br>
      La longueur de l'un de ses côtés est :   `,this.correction=`L'aire d'un carré est le carré de la longueur d'un côté. <br>
      Ainsi, la longueur $c$ d'un de ses côtés est :   $c=\\sqrt{36}=${t(s(this.reponse,0))}$ cm.
     `,this.optionsChampTexte={texteApres:"cm"},this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ cm",this.interactif||(this.question+="$\\ldots$ cm");else if(n([!0,!1])){const e=i(4,12);this.reponse=e,this.question=`Un carré a une aire de $${e**2}$ cm$^2$.<br>
      La longueur d'un de ses côtés est :   `,this.correction=`L'aire d'un carré est le carré de la longueur d'un côté. <br>
      Ainsi, la longueur $c$ d'un de ses côtés est : $c=\\sqrt{${e**2}}=${t(s(this.reponse,0))}$ cm.
     `,this.optionsChampTexte={texteApres:"cm"},this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ cm",this.interactif||(this.question+="$\\ldots$ cm")}else{const e=i(4,12);this.reponse=e**2,this.question=`Un carré a un périmètre de $${e*4}$ cm.<br>
     Son aire est :   `,this.correction=`L'aire d'un carré est le carré du côté. <br>
      Le côté du carré est $\\dfrac{${4*e}}{4}=${e}$ cm.<br>
      Ainsi, son aire est : $${e}^2=${t(s(this.reponse,0))}$ cm$^2$.
     `,this.optionsChampTexte={texteApres:"cm$^2$"},this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ cm$^2$",this.interactif||(this.question+="$\\ldots$ cm$^2$")}}}export{g as default,C as interactifReady,E as interactifType,A as titre,L as uuid};
