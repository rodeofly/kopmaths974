import{a,r as s,e as $,s as i,y as u,m as n}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const L="Déterminer un taux global d’évolution",y=!0,A="mathLive",C=!0,G="AMCNum",M="19/12/2021",T="16/07/2025",k="9d51d",Q={"fr-fr":["can2C12"],"fr-ch":[]};class R extends o{constructor(){super(),this.versionQcmDisponible=!0,this.typeExercice="simple",this.nbQuestions=1,this.optionsDeComparaison={nombreDecimalSeulement:!0},this.optionsChampTexte={texteAvant:"<br>Taux d'évolution global : ",texteApres:" $\\%$"}}nouvelleVersion(){let e,t,r,l=[];switch(this.reponse=0,a(["a","b","c","d"])){case"a":e=s(1,9)*10,t=s(1,14)*5,r=(1+e/100)*(1-t/100),l=[`$\\bullet$ $${$(1-e/100,4)}\\times ${$(1-t/100,4)}=${$((1-e/100)*(1-t/100),4)}$${i(4)}`,`$\\bullet$ $${$(1+e/100,4)}\\times ${$(1-t/100,4)}=${$((1+e/100)*(1-t/100),4)}$${i(4)}`,`$\\bullet$ $${$(1+e/100,4)}\\times ${$(1+t/100,4)}=${$((1+e/100)*(1+t/100),4)}$${i(4)}`,`$\\bullet$ $${$(e/100)}\\times ${$(t/100)}=${$(e/100*(t/100))}$${i(4)}`],l=u(l),this.question=`  ${l[0]}  ${l[1]} <br>
 ${l[2]}${l[3]}<br>
En utilisant l'un des résultats précédents, déterminer le taux global d'évolution d'un article qui augmente de
$${e}${i(1)}\\%$  dans un premier temps, puis qui diminue de $${t}${i(1)}\\%$ dans un second temps.`,this.correction=`Augmenter de $${e}${i(1)}\\%$ revient à multiplier par $${$(1+e/100)}$ et diminuer de $${t}${i(1)}\\%$ revient à multiplier par $${$(1-t/100)}$.<br>
Globalement cela revient donc à multiplier par $${$(1+e/100)}\\times ${$(1-t/100)}=${$(r)}$.<br>
Multiplier par $${$(r)}$ revient à multiplier par `,r>1?this.correction+=` $1+${$(r-1)}$, ce qui revient à augmenter de $${$((r-1)*100)}${i(1)}\\%$. <br>
          Le taux d'évolution global est donc : $${n("+")} ${n(`${$((r-1)*100)}${i(1)}`)} \\%$.
`:this.correction+=` $1-${$(1-r)}$. <br>
        Le taux d'évolution global est donc : $${n(`${$((r-1)*100)}${i(1)}`)} \\%$
`,this.distracteurs=[`$${$(-r*100,2)}\\,\\%$`,`$${$(r*100,2)}\\,\\%$`,`$${$(e-t,4)}\\,\\%$`];break;case"b":e=s(1,9)*10,t=s(1,14)*5,r=(1+e/100)*(1+t/100),l=[`$\\bullet$ $${$(1-e/100)}\\times ${$(1+t/100)}=${$((1-e/100)*(1+t/100))}$${i(4)}`,`$\\bullet$ $${$(1+e/100)}\\times ${$(1+t/100)}=${$((1+e/100)*(1+t/100))}$${i(4)}`,`$\\bullet$ $${$(1+e/100)}\\times ${$(1-t/100)}=${$((1+e/100)*(1-t/100))}$${i(4)}`,`$\\bullet$ $${$(e/100)}\\times ${$(t/100)}=${$(e/100*(t/100))}$${i(4)}`],l=u(l),this.question=`  ${l[0]}  ${l[1]} <br>
   ${l[2]}${l[3]}<br>
  En utilisant l'un des résultats précédents, déterminer le taux global d'évolution d'un article qui augmente de
  $${e}${i(1)}\\%$  dans un premier temps, puis qui augmente de $${t}${i(1)}\\%$ dans un second temps. `,this.correction=`Augmenter de $${e}${i(1)}\\%$ revient à multiplier par $${$(1+e/100)}$ et augmenter de $${t}${i(1)}\\%$ revient à multiplier par $${$(1+t/100)}$.<br>
  Globalement cela revient donc à multiplier par $${$(1+e/100)}\\times ${$(1+t/100)}=${$(r)}$.<br>
  Multiplier par $${$(r)}$ revient à multiplier par
           $1+${$(r-1)}$. <br>
          Le taux d'évolution global est donc : $${n("+")} ${n(`${$((r-1)*100)}${i(1)}`)} \\%$.`,this.distracteurs=[`$${$(100*((1+e/100)*(1-t/100)))}\\,\\%$`,`$${$(r*100,2)}\\,\\%$`,`$${$(e+t,4)}\\,\\%$`];break;case"c":e=s(1,9)*10,t=s(1,14)*5,r=(1-e/100)*(1-t/100),l=[`$\\bullet$ $${$(1-e/100)}\\times ${$(1-t/100)}=${$((1-e/100)*(1-t/100))}$${i(4)}`,`$\\bullet$ $${$(1+e/100)}\\times ${$(1+t/100)}=${$((1+e/100)*(1+t/100))}$${i(4)}`,`$\\bullet$ $${$(1+e/100)}\\times ${$(1-t/100)}=${$((1+e/100)*(1-t/100))}$${i(4)}`,`$\\bullet$ $${$(e/100)}\\times ${$(t/100)}=${$(e/100*(t/100))}$${i(4)}`],l=u(l),this.question=`  ${l[0]}  ${l[1]} <br>
   ${l[2]}${l[3]}<br>

  En utilisant l'un des résultats précédents, déterminer le taux global d'évolution d'un article qui diminue de
  $${e}${i(1)}\\%$  dans un premier temps, puis qui diminue de $${t}${i(1)}\\%$ dans un second temps. `,this.correction=`Diminuer de $${e}${i(1)}\\%$ revient à multiplier par $${$(1-e/100)}$ et diminuer de $${t}${i(1)}\\%$ revient à multiplier par $${$(1-t/100)}$.<br>
  Globalement cela revient donc à multiplier par $${$(1-e/100)}\\times ${$(1-t/100)}=${$(r)}$.<br>
  Multiplier par $${$(r)}$ revient à multiplier par
           $1-${$(1-r)}$. <br>
          Le taux d'évolution global est donc : $${n(`${$((r-1)*100)}${i(1)}`)} \\%$.`,this.distracteurs=[`$${$(-100*((1+e/100)*(1-t/100)))}\\,\\%$`,`$${$(r*100,2)}\\,\\%$`,`$${$(-e-t,4)}\\,\\%$`];break;case"d":default:e=s(1,9)*10,t=s(1,4)*5,r=(1-e/100)*(1+t/100),l=[`$\\bullet$ $${$(1-e/100)}\\times ${$(1+t/100)}=${$((1-e/100)*(1+t/100))}$${i(4)}`,`$\\bullet$ $${$(1+e/100)}\\times ${$(1-t/100)}=${$((1+e/100)*(1-t/100))}$${i(4)}`,`$\\bullet$ $${$(1+e/100)}\\times ${$(1+t/100)}=${$((1+e/100)*(1+t/100))}$${i(4)}`,`$\\bullet$ $${$(e/100)}\\times ${$(t/100)}=${$(e/100*(t/100))}$${i(4)}`],l=u(l),this.question=`  ${l[0]}  ${l[1]} <br>
   ${l[2]}${l[3]}<br>
   
  En utilisant l'un des résultats précédents, déterminer le taux global d'évolution d'un article qui diminue de
  $${e}${i(1)}\\%$  dans un premier temps, puis qui augmente de $${t}${i(1)}\\%$ dans un second temps. `,this.correction=`Diminuer de $${e}${i(1)}\\%$ revient à multiplier par $${$(1-e/100)}$ et augmenter de $${t}${i(1)}\\%$ revient à multiplier par $${$(1+t/100)}$.<br>
  Globalement cela revient donc à multiplier par $${$(1-e/100)}\\times ${$(1+t/100)}=${$(r)}$.<br>
  Multiplier par $${$(r)}$ revient à multiplier par `,r>1?this.correction+=` $1+${$(r-1)}$, ce qui revient à augmenter de $${$((r-1)*100)}\\%$. <br>
            Le taux d'évolution global est donc : $${n("+")} ${n(`${$((r-1)*100)}${i(1)}`)} \\%$`:this.correction+=` $1-${$(1-r)}$. <br>
          Le taux d'évolution global est donc : $${n(`${$((r-1)*100)}${i(1)}`)} \\%$.`,this.distracteurs=[`$${$(-100*((1+e/100)*(1-t/100)))}\\,\\%$`,`$${$(r*100,2)}\\,\\%$`,`$${$(-e+t,4)}\\,\\%$`];break}this.reponse=this.versionQcm?`$${$((r-1)*100,2)}\\,\\%$`:`${$((r-1)*100,2)}`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots \\%$"}}export{C as amcReady,G as amcType,T as dateDeModifImportante,M as dateDePublication,R as default,y as interactifReady,A as interactifType,Q as refs,L as titre,k as uuid};
