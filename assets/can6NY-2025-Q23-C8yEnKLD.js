import i from"./ExerciceSimple-CWWOU0FG.js";import{r as s,e,m as o}from"./embellissements-BYV7mIDn.js";import{K as n}from"./Exercice-DtXhjCyI.js";import{a}from"./Personne-DRrbQFAY.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const T="Dtéreminer un reste à payer",q=!0,A="mathLive",C="9b8f9",g={"fr-fr":[],"fr-ch":[]};class D extends i{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:" €"},this.formatChampTexte=n.clavierDeBase}nouvelleVersion(){const r=a(),t=s(11,19)*100+25;this.question=`${r} a acheté un scooter électrique coûtant $${e(2025,0)}$ €.<br> 
            Elle règle $${e(t,0)}$ € à la livraison du scooter puis règlera la moitié du montant restant le mois suivant. <br>
            Quelle somme lui restera-t-il à payer ensuite pour le dernier versement ?  `,this.correction=`$${e(2025,0)}-${e(t,0)}=${e(2025-t,0)}$<br>
    Après le premier versement de $${e(t,0)}$ €, ${r} doit encore payer $${e(2025-t,0)}$ €. <br>
    $${e(2025-t,0)} \\div 2 = ${e((2025-t)/2,0)}$<br>
            La moitié de $${e(2025-t,0)}$ € est $${e((2025-t)/2,0)}$ €. <br>
              Ainsi, son dernier versement sera de $${o(`${e((2025-t)/2,0)}`)}$ €.
                   `,this.reponse=`${(2025-t)/2}`,this.interactif&&(this.question+="<br>"),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €"}}export{D as default,q as interactifReady,A as interactifType,g as refs,T as titre,C as uuid};
