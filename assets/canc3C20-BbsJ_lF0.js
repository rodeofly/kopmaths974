import a from"./ExerciceSimple-CWWOU0FG.js";import{r as i,e as o,m as r,a as $}from"./embellissements-BYV7mIDn.js";import{p as c}from"./Personne-DRrbQFAY.js";import{K as p}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const L="Résoudre un problème avec une division",T=!0,y="mathLive",R="30/10/2024",g="416be",P={"fr-fr":["canc3C20"],"fr-ch":[]};class D extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.spacing=1.5,this.formatChampTexte=p.clavierDeBase}nouvelleVersion(){switch(i(1,6)){case 1:{const e=i(4,10),s=i(3,10),t=s*e;this.reponse=o(s,0),this.question=`Un fleuriste a $${t}$ roses.<br>
Combien de bouquets de $${e}$ roses peut-il faire au maximum ?`,this.correction=`Le fleuriste a au total $${t}$ roses et veut faire un maximum de bouquets avec $${e}$ roses chacun.<br>
          $${t} \\div ${e}=${this.reponse}$<br>
          Le fleuriste peut faire $${r(this.reponse)}$ bouquets de $${e}$ roses chacun.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ bouquets",this.optionsChampTexte={texteApres:"bouquets"}}break;case 2:{const e=$([3,4,6]),s=i(3,9),t=s*e;this.reponse=o(s,0),this.question=`Les bouteilles sont vendues par pack de $${e}$ bouteilles.<br>
          Je dois acheter $${t}$ bouteilles.<br>
Combien de packs dois-je acheter ?`,this.correction=`Je dois acheter au total $${t}$ bouteilles et les bouteilles sont vendues en pack de $${e}$ bouteilles.
          $${t} \\div ${e}=${this.reponse}$<br>          
          Je dois donc acheter $${r(this.reponse)}$ packs.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ packs",this.optionsChampTexte={texteApres:"packs"}}break;case 3:{const e=i(3,10),s=i(3,9),t=s*e;this.reponse=o(s,0),this.question=`Un immeuble de $${e}$ étages comporte $${t}$ appartements. <br>
            Il y a le même nombre d’appartements à chaque étage.<br>
Combien d’appartements y a-t-il à chaque étage ?`,this.correction=`L'immeuble de $${e}$ étages comporte $${t}$ appartements au total.<br>
          $${t} \\div ${e}=${this.reponse}$<br>
          Il y a  $${r(this.reponse)}$ appartements à chaque étage.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ appartements",this.optionsChampTexte={texteApres:"appartements"}}break;case 4:{const e=i(5,10),s=i(3,9)*10,t=s*e;this.reponse=o(s,0),this.question=`Pour l'achat de tee-shirts, une association a dépensé $${o(t,0)}$ €.<br>
            Chaque  tee-shirt coûte $${e}$ €.<br>
            Combien de tee-shirts a-t-elle acheté ?`,this.correction=`Au total, la dépense pour l'achat des tee-shirts est $${o(t,0)}$ € et chaque tee-shirt coûte $${e}$ €.<br>
          $${t} \\div ${e}=${this.reponse}$<br>          
          L'association a acheté  $${r(this.reponse)}$ tee-shirts.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ tee-shirts",this.optionsChampTexte={texteApres:"tee-shirts"}}break;case 5:{const e=c(),s=i(5,10),t=i(3,9)*10,n=t*s;this.reponse=o(t,0),this.question=`Pour son goûter d’anniversaire ${e} a besoin de $${n}$ biscuits.<br>
             Les biscuits sont vendus par paquet de $${s}$.<br>
Combien de paquets ${e} doit-il acheter ?`,this.correction=`Au total, ${e} a besoin de $${n}$ biscuits et ils sont vendus par paquet de $${s}$.<br>
            $${n} \\div ${s}=${this.reponse}$<br>       
          ${e} doit acheter  $${r(this.reponse)}$ paquets.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ paquets",this.optionsChampTexte={texteApres:"paquets"}}break;case 6:{const e=i(2,5)*1e3,s=i(3,9)*10,t=s*e;this.reponse=o(s,0),this.question=`Pour un  concert, il y a $${o(e,0)}$ spectateurs. La recette totale est de $${o(t,0)}$ €.<br>
             Toutes les places ont été vendues a un prix unique.<br>
Quel est le prix d'une place pour ce concert ?`,this.correction=`La recette totale est $${o(t,0)}$ € pour $${o(e,0)}$ spectateurs. <br>
          $${o(t,0)} \\div ${o(e,0)}=${this.reponse}$<br>
          Le prix de la place de concert est   $${r(this.reponse)}$ €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break}this.interactif&&(this.question+="<br>")}}export{R as dateDePublication,D as default,T as interactifReady,y as interactifType,P as refs,L as titre,g as uuid};
