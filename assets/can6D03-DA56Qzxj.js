import{b as n}from"./colors-bl7PrqSM.js";import{r as i,s,m as $,_ as m}from"./embellissements-BYV7mIDn.js";import{p as a}from"./Personne-DRrbQFAY.js";import p from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const T="Calculer une durée en minutes",j=!0,q="mathLive",D=!0,L="AMCNum",B="05b2e",G={"fr-fr":["can6D03","6M4B-flash2"],"fr-ch":["10GM3-12"]};class I extends p{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple",this.optionsChampTexte={texteApres:" minutes"}}nouvelleVersion(){const e=i(13,15),o=e+1,t=i(1,4)*10,r=i(10,58);this.reponse=o*60+r-(e*60+t),this.question=`${a()} est parti à  $${e}$h${s(1)}$${t}$ de son domicile.
    Il est arrivé à $${o}$h${s(1)}$${r}$.<br>

    Combien de temps a duré son trajet ?`,this.correction=`$${o}$h${s(1)}$${r}-${e}$h${s(1)}$${t}=${$(this.reponse)}$ min`,this.correction+=m(`<br> Mentalement : <br>
      On part de $${e}$h${s(1)}$${t}$ et  on complète par $${(e+1)*60-(e*60+t)}$ min pour arriver
      à $${e+1}$h. <br>
      Puis on ajoute  les $${r}$ minutes pour arriver à $${o}$h${s(1)}$${r}$.<br>
      Le résultat est donc donné par $${(e+1)*60-(e*60+t)}+${r}=${this.reponse}$ min.
          `,n),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ minutes"}}export{D as amcReady,L as amcType,I as default,j as interactifReady,q as interactifType,G as refs,T as titre,B as uuid};
