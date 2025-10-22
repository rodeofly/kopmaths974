import $ from"./ExerciceSimple-CWWOU0FG.js";import{r as t,e as o,m as i}from"./embellissements-BYV7mIDn.js";import{a,p as r}from"./Personne-DRrbQFAY.js";import{K as p}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const A="Résoudre un problème avec une addition",y=!0,T="mathLive",R="31/10/2024",k="a7a49",L={"fr-fr":["canc3C17"],"fr-ch":[]};class D extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.spacing=1.5,this.formatChampTexte=p.clavierDeBase}nouvelleVersion(){switch(t(1,7)){case 1:{const s=t(1,3)*10+t(4,8),e=t(1,3)*10+t(6,9),n=r();this.reponse=o(s+e,0),this.question=`Ce matin, ${n} a dépensé  $${s}$ €, puis l'après-midi, il a dépensé $${e}$ €.<br>
Combien a-t-il dépensé en tout ?`,this.correction=`${n} a d'abord dépensé  $${s}$ €, puis  il a dépensé $${e}$ €.<br>
          $${s} +${e}=${this.reponse}$<br>
          En tout, ${n} a dépensé $${i(this.reponse)}$ €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break;case 2:{const s=t(3,4)*10+t(4,8),e=t(2,3)*10+t(6,9);this.reponse=o(s+e,0),this.question=`Pour le voyage de fin d’année, $${s}$ élèves de CE et $${e}$ élèves de CM partent.<br>
              Au total, combien d’élèves partent ?`,this.correction=`$${s}$ élèves de CE et $${e}$ élèves de CM partent en voyage.<br>
          $${s} +${e}=${this.reponse}$ <br>
          En tout,  $${i(this.reponse)}$ élèves partent en voyage.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ élèves",this.optionsChampTexte={texteApres:"élèves"}}break;case 3:{const s=t(21,39)*10+t(4,8),e=t(1,3)*10+t(6,9);this.reponse=o(s+e,0),this.question=`Un vendeur a vendu dans sa journée un VTT à  $${s}$ € et  un casque à $${e}$ €.<br>
Quel est le montant de la vente du jour pour ce vendeur ?`,this.correction=`Dans la journée, le vendeur a vendu  un VTT à  $${s}$ € et  un casque à $${e}$ €.<br>
          $${s} +${e}=${this.reponse}$<br>
          La vente du jour pour ce vendeur est $${i(this.reponse)}$ €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break;case 4:{const s=t(2,3)*100+t(4,8)*10,e=t(3,4)*100+t(6,9)*10;this.reponse=o(s+e,0),this.question=`Dans une ville, il y a deux collèges.<br>
                  Dans l'un, il y a $${s}$ élèves et dans l'autre, il y a $${e}$ élèves.<br>
                  Combien y a-t-il d'élèves au collège dans cette ville ? `,this.correction=`Il y a $${s}$ élèves dans un collège et $${e}$ élèves dans un autre.<br>
          $${s} +${e}=${this.reponse}$<br>
          En tout, il y a  $${i(this.reponse)}$ élèves au collège dans cette ville.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ élèves",this.optionsChampTexte={texteApres:"élèves"}}break;case 5:{const s=r(),e=t(3,7)*10+t(6,9),n=t(1,2)*10+t(5,7);this.reponse=o(e+n,0),this.question=`${s} a $${e}$ billes. <br>Il en gagne $${n}$ à la récréation.<br>
Combien de billes a-t-il maintenant ? `,this.correction=`${s} a $${e}$ billes puis en gagne $${n}$.<br>
          $${e} +${n}=${this.reponse}$<br>
          En tout, ${s} a  $${i(this.reponse)}$ billes.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ billes",this.optionsChampTexte={texteApres:"billes"}}break;case 6:{const s=a(),e=t(21,39)*10+t(4,8),n=t(1,3)*10+t(6,9);this.reponse=o(e+n,0),this.question=`${s} a $${e}$ euros sur son compte en banque. <br>Elle dépose sur son compte $${n}$ euros.<br>
    Combien a-t-elle  d'argent maintenant sur son compte ?`,this.correction=`${s} a $${e}$ € sur son compte puis dépose $${n}$ €.<br>
          $${e} +${n}=${this.reponse}$<br>
           ${s} a maintenant $${i(this.reponse)}$ euros sur son compte.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break;case 7:{const s=t(21,39)*1e4+t(7,9)*1e3,e=t(4,7)*1e3;this.reponse=o(s+e,0),this.question=`Le prix d'une maison est $${o(s,0)}$ € hors frais d'agence. <br>
              Les frais d'agence s'élèvent à $${o(e,0)}$ €.<br>
       Quel est le prix de la maison frais d'agence inclus ?`,this.correction=`Le prix de la maison est $${o(s,0)}$ € et les frais d'agence  $${o(e,0)}$ €.<br>
           $${o(s,0)} +${o(e,0)}=${this.reponse}$<br>
         La maison coûte $${i(this.reponse)}$ euros frais d'agence inclus.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break}this.interactif&&(this.question+="<br>")}}export{R as dateDePublication,D as default,y as interactifReady,T as interactifType,L as refs,A as titre,k as uuid};
