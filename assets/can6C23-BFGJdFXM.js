import{K as a}from"./Exercice-DtXhjCyI.js";import{a as c,r as t,e as r,m as $,_ as o}from"./embellissements-BYV7mIDn.js";import{b as n}from"./colors-bl7PrqSM.js";import i from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const q="Calculer avec +/-99 ou +/-999",v=!0,E="mathLive",_=!0,k="AMCNum",P="ad0ee",N={"fr-fr":["can6C23","CM2N3J-flash3"],"fr-ch":[]};class T extends i{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierNumbers}nouvelleVersion(){let e;switch(c(["a","b","c","d","e"])){case"a":e=t(1,9)*100+t(1,9)*10+t(1,9),this.question=`Calculer $${r(e)}+99$.`,this.correction=`$${r(e)}+99=${$(r(e+99))}$<br>`,this.correction+=o(`<br> Mentalement : <br>
       Pour ajouter $99$, on ajoute $100$ et on retranche $1$<br>
       $${r(e)}+99=${r(e)}+\\underbrace{100-1}_{99}=${r(e+100)}-1=${r(e+99)}$.
          `,n),this.reponse=e+99;break;case"b":e=t(1,9)*1e3+t(1,9)*100+t(1,9)*10+t(1,9),this.question=`Calculer $${r(e)}+999$.`,this.correction=`$${r(e)}+999=${$(r(e+999))}$<br>`,this.reponse=e+999,this.correction+=o(`<br> Mentalement : <br>
       Pour ajouter $999$, on ajoute $${r(1e3)}$ et on retranche $1$<br>
       $${r(e)}+999=${r(e)}+\\underbrace{1000-1}_{999}=${r(e+1e3)}-1=${r(e+999)}$.
          `,n);break;case"c":e=t(1,9)*1e3+t(1,9)*100+t(1,9)*10+t(1,9),this.question=`Calculer $${r(e)}-999$.`,this.correction=`$${r(e)}-999=${$(r(e-999))}$<br>`,this.reponse=e-999,this.correction+=o(`<br> Mentalement : <br>
       Pour retrancher $999$, on retranche $${r(1e3)}$ et on ajoute $1$<br>
       $${r(e)}-999=${r(e)}\\underbrace{-1000+1}_{-999}=${r(e-1e3)}+1=${r(e-999)}$.
          `,n);break;case"d":e=t(1,9)*100+t(1,9)*10+t(1,9),this.question=`Calculer $${r(e)}-99$.`,this.correction=`$${r(e)}-99=${$(r(e-99))}$<br>`,this.reponse=e-99,this.correction+=o(`<br> Mentalement : <br>
       Pour retrancher $99$, on retranche $100$ et on ajoute $1$<br>
       $${r(e)}-99=${r(e)}\\underbrace{-100+1}_{-99}=${r(e-100)}+1=${r(e-99)}$.
          `,n);break;case"e":e=t(1,9)*1e3+t(1,9)*100+t(1,9)*10+t(1,9),this.question=`Calculer $${r(e)}+99$.`,this.correction=`$${r(e)}+99=${$(r(e+99))}$<br>`,this.reponse=e+99,this.correction+=o(`<br> Mentalement : <br>
        Pour ajouter $99$, on ajoute $100$ et on retranche $1$<br>
        $${r(e)}+99=${r(e)}+\\underbrace{100-1}_{99}=${r(e+100)}-1=${r(e+99)}$.
           `,n);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{_ as amcReady,k as amcType,T as default,v as interactifReady,E as interactifType,N as refs,q as titre,P as uuid};
