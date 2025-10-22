import{a as n,r as i}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Calculer un antécédent par une fonction linéaire",g=!0,k="mathLive",v=!0,C="AMCNum",L="13/10/2022",w="4b600",A={"fr-fr":["can3F04"],"fr-ch":[]};class E extends o{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple"}nouvelleVersion(){let $,t,r,e;switch(n([1,2])){case 1:t=i(-10,10,[-1,0,1]),e=i(-9,9,[-1,0,1]),$=n(["f","g","h","u","v","w","p","m","t","k"]),this.question=`Soit $${$}$ la fonction définie par : $${$}(x)=${e}x$.<br>
        
        Quel est l'antécédent de  $${e*t}$ par la fonction $${$}$ ?`,this.correction=`$${$}(x)=${e}x$. <br>
        
        L'antécédent de $${e*t}$ est le nombre $x$ qui a pour image $${e*t}$. On cherche donc $x$ tel que : <br>
        
         $${e}x=${e*t}$<br> soit $x=\\dfrac{${e*t}}{${e}}=${t}$.`,this.reponse=t;break;case 2:t=i(-10,10,[-1,0,1]),r=n([2,3,5]),e=i(2,6,[r,r*2,r*3]),$=n(["f","g","h","u","v","w","p","m","t","k"]),this.question=`Soit $${$}$ la fonction définie par : $${$}(x)=\\dfrac{${e}}{${r}}x$.<br>
        
        Quel est l'antécédent de  $${e*t}$ par la fonction $${$}$ ?`,this.correction=`$${$}(x)=\\dfrac{${e}}{${r}}x$. <br>
        
        L'antécédent de $${e*t}$ est le nombre $x$ qui a pour image $${e*t}$. On cherche donc $x$ tel que : <br>
        
         $\\dfrac{${e}}{${r}}x=${e*t}$<br>  soit $x=${e*t}\\times \\dfrac{${r}}{${e}}=${t*r}$.`,this.reponse=r*t;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{v as amcReady,C as amcType,L as dateDeModifImportante,E as default,g as interactifReady,k as interactifType,A as refs,y as titre,w as uuid};
