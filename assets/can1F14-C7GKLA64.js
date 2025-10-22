import{a as f,r as n,a0 as s,z as o,v as a,u as r,Y as c,f as m}from"./embellissements-BYV7mIDn.js";import d from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const g="Déterminer un nombre dérivé",y=!0,E="mathLive",L="20/06/2022",P="a1ba2",k={"fr-fr":["can1F14"],"fr-ch":[]};class N extends d{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let $,i,t,e;switch(f([1,2,3])){case 1:$=n(-5,5,[0]),i=n(-5,5,[0]),t=n(-10,10,[0]),e=n(-3,3),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${s(0,$,i,t)}$.<br>
        Déterminer $f'(${e})$.`,this.correction=`$f$ est une fonction polynôme du second degré de la forme $f(x)=ax^2+bx+c$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$ définies par $u(x)=${a($)}x^2$ et $v(x)=${r(i,t)}$.<br>
     Comme $u'(x)=${2*$}x$ et $v'(x)=${i}$, on obtient  $f'(x)=${r(2*$,i)}$. <br>
     Ainsi, $f'(${e})=${2*$}\\times ${c(e)}${m(i)}=${2*$*e+i}$.`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${s(0,$,i,t)}$.`,this.canReponseACompleter=`$f'(${e})=\\ldots$`,this.reponse=2*$*e+i;break;case 2:$=n(-5,5,[0]),i=n(-5,5,[0]),t=n(-10,10,[0]),e=n(-3,3),f([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
          $f(x)= ${r(i,t)}${o($)}x^2$.<br>
            Déterminer $f'(${e})$.`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${r(i,t)}${o($)}x^2$.`,this.canReponseACompleter=`$f'(${e})=\\ldots$`):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : 
          $f(x)= ${t}${o($)}x^2${o(i)}x$.<br>
            Déterminer $f'(${e})$.`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${t}${o($)}x^2${o(i)}x$.`,this.canReponseACompleter=`$f'(${e})=\\ldots$`),this.correction=`$f$ est une fonction polynôme du second degré de la forme $f(x)=ax^2+bx+c$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$ définies par $u(x)=${a($)}x^2$ et $v(x)=${r(i,t)}$.<br>
     Comme $u'(x)=${2*$}x$ et $v'(x)=${i}$, on obtient  $f'(x)=${r(2*$,i)}$. <br>
     Ainsi, $f'(${e})=${2*$}\\times ${c(e)}${m(i)}=${2*$*e+i}$.`,this.reponse=2*$*e+i;break;case 3:$=n(-10,10,[0]),t=n(-10,10,[0]),e=n(-5,5),f([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : 
          $f(x)= ${s(0,$,0,t)}$.<br>
            Déterminer $f'(${e})$.`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${s(0,$,0,t)}$.`,this.canReponseACompleter=`$f'(${e})=\\ldots$`):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
          $f(x)= ${t}${o($)}x^2$.<br>
            Déterminer $f'(${e})$.`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${t}${o($)}x^2$.`,this.canReponseACompleter=`$f'(${e})=\\ldots$`),this.correction=`$f$ est une fonction polynôme du second degré de la forme $f(x)=ax^2+b$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$ définies par $u(x)=${a($)}x^2$ et $v(x)=${t}$.<br>
     Comme $u'(x)=${2*$}x$ et $v'(x)=0$, on obtient  $f'(x)=${r(2*$,0)}$. <br>
     Ainsi, $f'(${e})=${2*$}\\times ${c(e)}=${2*$*e}$.`,this.reponse=2*$*e;break}this.interactif&&(this.question+=`<br>$f'(${e})=$`)}}export{L as dateDePublication,N as default,y as interactifReady,E as interactifType,k as refs,g as titre,P as uuid};
