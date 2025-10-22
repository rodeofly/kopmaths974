import n from"./ExerciceSimple-CWWOU0FG.js";import{r,e as t,m as o}from"./embellissements-BYV7mIDn.js";import{K as $}from"./Exercice-DtXhjCyI.js";import{a as m,p as c}from"./Personne-DRrbQFAY.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const R="",T=!0,k="mathLive",D="1c133",F={"fr-fr":[],"fr-ch":["NR"]};class K extends n{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=$.clavierDeBase}nouvelleVersion(){const i=m(),s=c(),e=r(1,9)*100+25;switch(r(1,2)){case 1:this.question=`${i} a une collection de timbres qui est composée de $${t(2025,0)}$ timbres.<br>
         ${s} en possède $${e}$ de plus.<br>
         Combien en a-t-il ?`,this.reponse=t(2025+e,0),this.correction=` ${s} possède $${e}$ timbres de plus que ${i}.<br>
        $${t(2025,0)} + ${e}=${this.reponse}$<br>
         ${s} a $${o(this.reponse)}$ timbres.`;break;case 2:this.question=`${i} a une collection de timbres qui est composée de $${t(2025,0)}$ timbres.<br>
        ${s} en possède $${e}$ de moins.<br>
        Combien en a-t-il ?`,this.reponse=t(2025-e,0),this.correction=` ${s} en possède $${e}$ timbres de moins que ${i}.<br>
       $${t(2025,0)} - ${e}=${this.reponse}$<br>
      ${s} en a $${o(this.reponse)}$ timbres.`;break}this.interactif&&(this.question+="<br>"),this.canEnonce=this.question,this.canReponseACompleter=""}}export{K as default,T as interactifReady,k as interactifType,F as refs,R as titre,D as uuid};
