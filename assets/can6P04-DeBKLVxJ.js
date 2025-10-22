import{a as n,r as t,s as e,_ as i,e as s}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Appliquer un pourcentage",M=!0,A="mathLive",k=!0,x="AMCNum",y="da0c1",E={"fr-fr":["can6P04","6N3Q-flash1"],"fr-ch":[]};class N extends o{bis;constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.bis=!1}nouvelleVersion(){let $,r;switch(this.bis?n([4,5,6]):n([1,2,3])){case 1:$=t(2,99),this.reponse=$/10,this.question=`Calculer $10${e(1)}\\%$ de $${$}$.`,this.correction=`$10${e(1)}\\%$ de $${$} = 0,1 \\times ${$}=${s(this.reponse)}$`,this.correction+=i(`<br> Mentalement : <br>
        Prendre $10${e(1)}\\%$  d'une quantité revient à la diviser par $10$.<br>
        Ainsi, $10${e(1)}\\%$ de $${$} = \\dfrac{${$}}{10}=${s(this.reponse)}$.`,"blue");break;case 2:$=t(1,9)*10,r=t(2,9,5)*10,this.reponse=$*r/100,this.question=`Calculer $${r}${e(1)}\\%$ de $${$}$.`,this.correction=`$${r}${e(1)}\\%$ de $${$} = ${s(this.reponse)}$`,this.correction+=i(`<br> Mentalement : <br>
        Prendre $${r}${e(1)}\\%$  de $${$}$ revient à prendre $${r/10}\\times 10${e(1)}\\%$  de $${$}$.<br>
        Comme $10${e(1)}\\%$  de $${$}$ vaut $${$/10}$ (pour prendre $10${e(1)}\\%$  d'une quantité, on la divise par $10$), alors
        $${r}${e(1)}\\%$ de $${$}=${r/10}\\times ${$/10}=${this.reponse}$.
       `,"blue");break;case 3:r=t(2,9)*10,$=t(2,9,r)*10,this.reponse=r*$/100,this.question=`Calculer $${r}${e(1)}\\%$ de $${$}$.`,r===50?(this.correction=`$50${e(1)}\\%$  de $${$} = ${this.reponse}$.`,this.correction+=i(`<br> Mentalement : <br>
            Prendre $50${e(1)}\\%$  d'une quantité revient à la diviser par $2$.<br>
            Ainsi, $${r}${e(1)}\\%$ de $${$} = ${$}\\div 2=${this.reponse}$.`,"blue")):(this.correction=`$${r}${e(1)}\\%$ de $${$} = ${this.reponse}$`,this.correction+=i(`<br> Mentalement : <br>
          Prendre $${r}${e(1)}\\%$  de $${$}$ revient à prendre $${r/10}\\times 10${e(1)}\\%$  de $${$}$.<br>
          Comme $10${e(1)}\\%$  de $${$}$ vaut $${$/10}$ (pour prendre $10${e(1)}\\%$ d'une quantité, on la divise par $10$), alors
          $${r}${e(1)}\\%$ de $${$}=${r/10}\\times ${$/10}=${this.reponse}$.
         `,"blue"));break;case 4:$=t(100,999),this.reponse=$/100,this.question=`Calculer $1${e(1)}\\%$ de $${$}$.`,this.correction=`$1${e(1)}\\%$ de $${$} = 0,01 \\times ${$}=${s(this.reponse)}$`,this.correction+=i(`<br> Mentalement : <br>
        Prendre $1${e(1)}\\%$  d'une quantité revient à la diviser par $100$.<br>
        Ainsi, $1${e(1)}\\%$ de $${$} = \\dfrac{${$}}{100}=${s(this.reponse)}$.`,"blue");break;case 5:$=t(10,50)*20,r=n([25,50,75]),this.reponse=$*r/100,this.question=`Calculer $${r}${e(1)}\\%$ de $${$}$.`,this.correction=`$${r}${e(1)}\\%$ de $${$} = ${s(this.reponse)}$`,r===25?this.correction+=i(`<br> Mentalement : <br>
        Prendre $25${e(1)}\\%$  de $${$}$ revient à diviser $${$}$ par $4$.<br>
        $${r}${e(1)}\\%$ de $${$}=\\dfrac{${$}}{4}=${this.reponse}$.
       `,"blue"):r===75?this.correction+=i(`<br> Mentalement : <br>
          Prendre $75${e(1)}\\%$  de $${$}$ revient à diviser $${$}$ par 4 et à multiplier le résultat par $3$.<br>
          Comme $25${e(1)}\\%$  de $${$}$ vaut $${$/4}$, alors
          $75${e(1)}\\%$ de $${$}=${$/4}\\times 3=${this.reponse}$.
         `,"blue"):this.correction+=i(`<br> Mentalement : <br>
          Prendre $50${e(1)}\\%$  d'une quantité revient à la diviser par $2$.<br>
          Ainsi, $50${e(1)}\\%$ de $${$} = \\dfrac{${$}}{2}=${this.reponse}$.`,"blue");break;case 6:$=t(10,50)*20,r=n([5,10,20]),this.reponse=$*r/100,this.question=`Calculer $${r}${e(1)}\\%$ de $${$}$.`,r===5?(this.correction=`$5${e(1)}\\%$  de $${$} = ${this.reponse}$.`,this.correction+=i(`<br> Mentalement : <br>
            Prendre $5${e(1)}\\%$  d'une quantité revient à la diviser par $20$ soit la diviser par $10$ puis par $2$.<br>
            Ainsi, $5${e(1)}\\%$ de $${$} = ${$}\\div 10 \\div 2=${this.reponse*2}\\div 2=${this.reponse}$.`,"blue")):r===10?(this.correction=`$10${e(1)}\\%$ de $${$} = ${this.reponse}$`,this.correction+=i(`<br> Mentalement : <br>
          Prendre $10${e(1)}\\%$  de $${$}$ revient à diviser $${$}$ par $10$, alors
          $10${e(1)}\\%$ de $${$}=\\dfrac{${$}}{10}=${this.reponse}$.
         `,"blue")):(this.correction=`$20${e(1)}\\%$ de $${$} = ${this.reponse}$`,this.correction+=i(`<br> Mentalement : <br>
          Prendre $20${e(1)}\\%$  de $${$}$ revient à diviser $${$}$ par $5$ soit diviser par $10$ puis multiplier le résultat par $2$.<br>
          Donc $20${e(1)}\\%$ de $${$}=\\dfrac{${$}}{10}\\times 2=${this.reponse/2}\\times 2=${this.reponse}$.
         `,"blue"));break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{k as amcReady,x as amcType,N as default,M as interactifReady,A as interactifType,E as refs,C as titre,y as uuid};
