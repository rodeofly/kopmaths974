import{K as n}from"./Exercice-DtXhjCyI.js";import{r as s,_ as r}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Trouver le reste d’une division par 3",L=!0,x="mathLive",E=!0,T="AMCNum",A="b3aee",M={"fr-fr":["can6C07","6N2J-flash2"],"fr-ch":[]};class R extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=n.clavierNumbers,this.optionsDeComparaison={nombreDecimalSeulement:!0}}nouvelleVersion(){const t=s(1,9),i=s(0,9),$=s(0,9,[t,i]),e=t*100+i*10+$;this.reponse=e%3,this.question=`Quel est le reste de la division de $${e}$ par $3$ ?`,e%3===0&&(this.correction=`Le reste de la division de $${e}$ par $3$ est $${e%3}$.`,this.correction+=r(`<br> Mentalement : <br>
      Un entier est divisible par $3$ lorsque la somme de ses chiffres est un multiple de $3$.<br>
      La somme des chiffres qui composent $${e}$ est :  $${t}+${i}+${$}=${t+i+$}$.<br>
   $${t+i+$}$ est un mutiple de $3$, donc le reste de la division de $${e}$ par $3$ est $0$.
      `)),e%3===1&&(this.correction=`Le reste de la division de $${e}$ par $3$ est ${e%3}.`,this.correction+=r(`<br> Mentalement : <br>
      Un entier est divisible par $3$ lorsque la somme de ses chiffres est un multiple de $3$.<br>
      La somme des chiffres qui composent $${e}$ est : $${t}+${i}+${$}=${t+i+$}$.<br>
      $${t+i+$}$ n'est pas un mutiple de $3$. <br>
      En enlevant 1 unité à $${t+i+$}$, on obtient $${t+i+$-1}$ qui est un multiple de $3$.<br>
      Cela signifie que $${e}-1=${e-1}$ est un multiple de $3$.<br>
     Ainsi, le reste de la division de $${e}$ par $3$ est donc $1$.
         `)),e%3===2&&(this.correction=`Le reste de la division de $${e}$ par $3$ est ${e%3}.`,this.correction+=r(`<br> Mentalement : <br>
      Un entier est divisible par $3$ lorsque la somme de ses chiffres est un multiple de $3$.<br>
      La somme des chiffres qui composent $${e}$ est : $${t}+${i}+${$}=${t+i+$}$.<br>
      $${t+i+$}$ n'est pas un mutiple de $3$. <br>
      En enlevant 2 unités à $${t+i+$}$, on obtient $${t+i+$-2}$ qui est un multiple de $3$.<br>
      Cela signifie que $${e}-2=${e-2}$ est un multiple de $3$.<br>
     Ainsi, le reste de la division de $${e}$ par $3$ est donc $2$.
         `)),this.canEnonce=this.question,this.canReponseACompleter=""}}export{E as amcReady,T as amcType,R as default,L as interactifReady,x as interactifType,M as refs,y as titre,A as uuid};
