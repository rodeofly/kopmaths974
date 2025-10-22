import $ from"./ExerciceSimple-CWWOU0FG.js";import{r as s,e as o,m as i}from"./embellissements-BYV7mIDn.js";import{p as r}from"./Personne-DRrbQFAY.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const k="Résoudre un problème avec une soustraction",E=!0,y="mathLive",R="31/10/2024",T="31e91",L={"fr-fr":["canc3C18"],"fr-ch":["PR-19"]};class g extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.spacing=1.5,this.formatChampTexte=a.clavierDeBase}nouvelleVersion(){switch(s(1,7)){case 1:{const t=s(4,6)*10+s(1,5),e=s(1,3)*10+s(6,9);this.reponse=o(t-e,0),this.question=`Dans un carton qui contient $${t}$ balles, $${e}$ sont rouges.<br>
Combien de balles ne sont pas rouges ?`,this.correction=`Le carton contient $${t}$ balles en tout et $${e}$ sont rouges.<br>
           $${t} -${e}=${this.reponse}$<br>
          Dans le carton, $${i(this.reponse)}$ balles ne sont pas rouges.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ balles",this.optionsChampTexte={texteApres:"balles"}}break;case 2:{const t=100+s(3,4)*10+s(1,5),e=s(2,3)*10+s(6,9);this.reponse=o(t-e,0),this.question=`Un cycliste doit parcourir $${t}$ Km. <br>
          Il a déjà parcouru $${e}$ km.<br>
Combien lui reste-t-il de km à parcourir ?`,this.correction=`Le cycliste doit parcourir $${t}$ Km et il a déjà parcouru $${e}$ km.<br>
           $${t} -${e}=${this.reponse}$ <br>
          Le cycliste doit encore parcourir $${i(this.reponse)}$ km.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ Km",this.optionsChampTexte={texteApres:"Km"}}break;case 3:{const t=r(),e=s(4,8)*10+s(1,5),n=s(1,2)*10+s(6,9);this.reponse=o(e-n,0),this.question=` ${t} a $${n}$ euros.<br>
           Il voudrait acheter un jeu qui coûte $${e}$ euros.<br>
Combien lui manque-t-il ?`,this.correction=`${t} veut acheter un jeu qui coûte $${e}$ euros mais a seulement  $${n}$ euros.<br>
          $${e} -${n}=${this.reponse}$<br>
          Il manque $${i(this.reponse)}$ € à  ${t} pour acheter son jeu.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break;case 4:{const t=r(),e=s(4,8)*10+s(1,5),n=s(1,2)*10+s(6,9);this.reponse=o(e-n,0),this.question=`${t} a acheté un pantalon et une chemise pour $${e}$ euros. <br>
            Le pantalon coûte $${n}$ euros.<br>
 Quel est le prix de la chemise ?`,this.correction=`${t} a acheté un pantalon à $${n}$ € et une chemise pour un total de $${e}$ €.<br>
          $${e} -${n}=${this.reponse}$<br>
          La chemise coûte $${i(this.reponse)}$ €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break;case 5:{const t=s(2,4)*1e3+s(1,4)*100,e=s(15,19)*100;this.reponse=o(t-e,0),this.question=`Dans une salle de spectacle, il y a $${o(t,0)}$ places.<br>
           $${o(e,0)}$ places sont occupées.<br>
Combien de places sont inoccupées ? `,this.correction=`Au total, il y a  $${o(t,0)}$ places et seulement $${o(e,0)}$ places sont occupées.<br>
          $${o(t,0)} -${o(e,0)}=${this.reponse}$<br>
          Ainsi, $${i(this.reponse)}$ places sont inoccupées.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ places",this.optionsChampTexte={texteApres:"places"}}break;case 6:{const t=s(1,3)*1e3+s(1,9)*100+s(6,9)*10,e=s(1,2)*100+s(1,5)*10,n=t-e;this.reponse=o(n,0),this.question=`Après une augmentation de  $${e}$ euros, mon salaire mensuel est de $${o(t,0)}$ euros.<br>
             Quel était mon salaire mensuel avant l'augmentation ?`,this.correction=`Mon salaire mensuel est de $${o(t,0)}$ € après une augmentation de $${e}$ €.<br>
          $${o(t,0)} -${e}=${this.reponse}$<br>          
          Mon salaire était de  $${i(this.reponse)}$ €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break;case 7:{const t=s(13,29)*1e3+s(1,9)*100,e=s(0,2)*1e3+s(1,9)*100,n=t-e;this.reponse=o(n,0),this.question=`Le prix d'une voiture est  $${o(t,0)}$ euros avec l'option confort.<br>
              L'option confort coûte $${o(e,0)}$ euros.<br>
                              Quel est le prix de cette voiture sans l'option confort ?`,this.correction=`Le prix d'une voiture est  $${o(t,0)}$ € avec l'option.<br>
          $${o(t,0)} -${e}=${this.reponse}$<br>
          Sans l'option confort, le prix de la voiture est $${i(this.reponse)}$ €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break}this.interactif&&(this.question+="<br>")}}export{R as dateDePublication,g as default,E as interactifReady,y as interactifType,L as refs,k as titre,T as uuid};
