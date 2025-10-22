import o from"./ExerciceSimple-CWWOU0FG.js";import{m as s,a as $,e as a}from"./embellissements-BYV7mIDn.js";import{K as p}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const g="Trouver un pourcentage",y=!0,T="mathLive",C="21a91";class D extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=p.clavierDeBase,this.optionsChampTexte={texteApres:"%"},this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=20,this.question=` Un jouet coûtait $50$ €. <br>
      Il est soldé au prix de $40$ €.<br>
      De quel pourcentage le prix a-t-il baissé ? `,this.correction=`Le prix a baissé de $10$ € sur un prix de départ de $50$ €. <br>
      $10\\,\\%$ de $50$ € est égal à $5$ €, donc $10$ € représente $20\\,\\%$ du prix de départ. <br>
      Le prix a baissé de $${s(this.reponse)}\\,\\%$.
    
     `;else{const i=$([[50,40,20],[50,45,10],[60,48,20],[80,72,10],[50,35,30],[50,30,40],[60,42,30],[60,54,10],[80,72,10],[40,30,25],[60,45,25],[80,60,25]]),e=i[0],r=i[1],t=i[2];this.reponse=i[2],this.question=` Un jouet coûtait $${e}$ €. <br>
      Il est soldé au prix de $${r}$ €.<br>
      De quel pourcentage le prix a-t-il baissé ? `,this.correction=`Le prix a baissé de $${e-r}$ € sur un prix de départ de $${e}$ €. <br>`,(t===10||t===20||t===30||t===40)&&(this.correction+=`
      $10\\,\\%$ de $${e}$ € est égal à $${a(e/10,0)}$ €, donc $${e-r}$ € représente $${t}\\,\\%$ du prix de départ. <br>
      Le prix a baissé de $${s(this.reponse)}\\,\\%$.`),t===25&&(this.correction+=`
      $${e-r}$ € représente le quart  du prix de départ $${e}$ €. <br>
      Le prix a baissé de $${s(this.reponse)}\\,\\%$.`)}this.canEnonce=this.question,this.canReponseACompleter="$\\ldots\\,\\%$"}}export{D as default,y as interactifReady,T as interactifType,g as titre,C as uuid};
