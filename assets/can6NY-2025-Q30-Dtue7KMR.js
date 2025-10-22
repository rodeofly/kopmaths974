import o from"./ExerciceSimple-CWWOU0FG.js";import{r,e,m as $}from"./embellissements-BYV7mIDn.js";import{K as i}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const q="",y=!0,E="mathLive",C="d7fe8",T={"fr-fr":[],"fr-ch":[]};class L extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:"€"},this.formatChampTexte=i.clavierDeBase}nouvelleVersion(){let t,s;switch(r(1,2)){case 1:t=r(8,12,10),s=20-t,this.question=`Pour un concert, $${e(2025,0)}$ places ont été vendues à $${t}$ € la place.<br>
       $${e(2025,0)}$ places supplémentaires ont été vendues à $${s}$ € la place.<br>
       Quelle est la recette totale pour ce concert ?`,this.reponse=40500,this.correction=`$${e(2025,0)}$ places à $${t}$ € et $${e(2025,0)}$ places à $${s}$ € rapportent autant que $${e(2025,0)}$ places à $${t+s}$ €.<br>
         
        $${e(2025,0)} \\times ${t+s}=${e(this.reponse,0)}$<br>
        La recette totale est : $${$(e(this.reponse,0))}$ €.`;break;case 2:t=r(4,7,5),s=10-t,this.question=`Pour un concert, $${e(2025,0)}$ places ont été vendues à $${t}$ € la place.<br>
       $${e(2025,0)}$ places supplémentaires ont été vendues à $${s}$ € la place.<br>
       Quelle est la recette totale pour ce concert ?`,this.reponse=20250,this.correction=`$${e(2025,0)}$ places à $${t}$ € et $${e(2025,0)}$ places à $${s}$ € rapportent autant que $${e(2025,0)}$ places à $${t+s}$ €.<br>
         
        $${e(2025,0)} \\times ${t+s}=${e(this.reponse,0)}$<br>
        La recette totale est $${$(e(this.reponse,0))}$ €.`}this.interactif&&(this.question+="<br>"),this.canEnonce=this.question,this.canReponseACompleter=""}}export{L as default,y as interactifReady,E as interactifType,T as refs,q as titre,C as uuid};
