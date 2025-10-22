import{a as s,r as n,a0 as r,z as t,v as f,u as o}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Déterminer la fonction dérivée d’un polynôme de degré 2",D=!0,L="mathLive",C="20/06/2022",A="a3e7a",E={"fr-fr":["can1F10"],"fr-ch":[]};class g extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let $,i,e;switch(s([1,2,3])){case 1:$=n(-10,10,[0]),i=n(-10,10,[0]),e=n(-10,10,[0]),this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${r(0,$,i,e)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
          $f(x)= ${r(0,$,i,e)}$.<br>
       Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du second degré de la forme $f(x)=ax^2+bx+c$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$ définies par $u(x)=${f($)}x^2$ et $v(x)=${o(i,e)}$.<br>
     Comme $u'(x)=${2*$}x$ et $v'(x)=${i}$, on obtient  $f'(x)=${o(2*$,i)}$. `,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
     $f(x)= ${r(0,$,i,e)}$.`,this.canReponseACompleter="$f'(x)=\\ldots$",this.reponse=[`${2*$}x+${i}`];break;case 2:$=n(-10,10,[0]),i=n(-10,10,[0]),e=n(-10,10,[0]),s([!0,!1])?this.interactif?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${o(i,e)}${t($)}x^2$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
        $f(x)=  ${o(i,e)}${t($)}x^2$.`,this.canReponseACompleter="$f'(x)=\\ldots$"):this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>
            $f(x)= ${o(i,e)}${t($)}x^2$.<br>
       Déterminer $f'(x)$.`:this.interactif?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${e}${t($)}x^2${t(i)}x$.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
        $f(x)=  ${e}${t($)}x^2${t(i)}x$.`,this.canReponseACompleter="$f'(x)=\\ldots$"):this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>
            $f(x)= ${e}${t($)}x^2${t(i)}x$.<br>
     Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du second degré de la forme $f(x)=ax^2+bx+c$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$ définies par $u(x)=${f($)}x^2$ et $v(x)=${o(i,e)}$.<br>
     Comme $u'(x)=${2*$}x$ et $v'(x)=${i}$, on obtient  $f'(x)=${o(2*$,i)}$. `,this.reponse=[`${2*$}x+${i}`];break;case 3:$=n(-10,10,[0]),e=n(-10,10,[0]),s([!0,!1])?this.interactif?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${r(0,$,0,e)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
        $f(x)= ${r(0,$,0,e)}$.`,this.canReponseACompleter="$f'(x)=\\ldots$"):this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>
             $f(x)= ${r(0,$,0,e)}$.<br>
             Déterminer $f'(x)$.`:this.interactif?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${e}${t($)}x^2$.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
        $f(x)= ${e}${t($)}x^2$.`,this.canReponseACompleter="$f'(x)=\\ldots$"):this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
            $f(x)= ${e}${t($)}x^2$.<br>
            Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du second degré de la forme $f(x)=ax^2+b$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$ définies par $u(x)=${f($)}x^2$ et $v(x)=${e}$.<br>
     Comme $u'(x)=${2*$}x$ et $v'(x)=0$, on obtient  $f'(x)=${o(2*$,0)}$. `,this.reponse=[`${2*$}x`];break}}}export{C as dateDePublication,g as default,D as interactifReady,L as interactifType,E as refs,y as titre,A as uuid};
