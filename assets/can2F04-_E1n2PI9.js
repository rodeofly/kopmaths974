import{a as u,r as t,s as n,v as s,u as a,m as c}from"./embellissements-BYV7mIDn.js";import{a as $}from"./deprecatedFractions-D2cbyAQf.js";import l from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Trouver les valeurs interdites d’une fonction",F=!0,P="mathLive",S="25/10/2021",T="6f13a",V={"fr-fr":["can2F04"],"fr-ch":[]};class B extends l{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let i,e,r,o;u([!0,!1])?(i=t(-10,10,0),o=t(-5,5,0),e=t(-10,10,0),r=o*e,this.question=`Donner la valeur interdite de la fonction $f$ définie par ${n(1)}: ${n(1)}$f(x)=\\dfrac{${s(i)}x}{${a(e,r)}}$.<br>
    
            `,this.correction=`La valeur interdite est la solution de l'équation $${a(e,r)}=0$.<br>
    La valeur interdite est donc $${c($(-r,e))}$.`,this.reponse=-o):(i=t(-10,10,0),e=t(1,10),this.question=`Donner la plus petite valeur interdite de la fonction $f$ définie par ${n(1)}: ${n(1)} $f(x)=\\dfrac{${s(i)}x}{x^2-${e**2}}$.<br>
   
      
      `,this.correction=`Les valeurs interdites sont les solutions de l'équation $x^2-${e**2}=0$.<br>
               Cette équation a deux solutions : $${e}$ et $-${e}$.<br>
               La plus petite valeur interdite est donc : $${c(`-${e}`)}$. `,this.reponse=-e),this.canEnonce=this.question,this.canReponseACompleter=""}}export{S as dateDePublication,B as default,F as interactifReady,P as interactifType,V as refs,C as titre,T as uuid};
