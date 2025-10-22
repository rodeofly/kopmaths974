import{a,r,v as t,z as n,f as s,a0 as o,u as x}from"./embellissements-BYV7mIDn.js";import d from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Déterminer la fonction dérivée d’un polynôme de degré 3",g=!0,w="mathLive",C="21/06/2022",k="ffbf6",A={"fr-fr":["can1F11"],"fr-ch":["3mA2-7"]};class P extends d{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let $,e,i,f;switch(a([1,2,3,4,5,6])){case 1:$=r(-10,10,[0]),e=r(-10,10,[0]),i=r(-10,10,[0]),f=r(-10,10,[0]),this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${o($,e,i,f)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
          
          $f(x)= ${o($,e,i,f)}$.<br>

       Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$, $v$ et $w$ définies par $u(x)=${t($)}x^3$, $v(x)=${t(e)}x^2$ et $w(x)=${x(i,f)}$.<br>
     Comme $u'(x)=${3*$}x^2$, $v'(x)=${2*e}x$ et $w'(x)=${i}$, on obtient  $f'(x)=${o(0,3*$,2*e,i)}$. `,this.reponse=[`${3*$}x^2+${2*e}x+${i}`];break;case 2:$=r(-10,10,[0]),e=r(-10,10,[0]),i=r(-10,10,[0]),f=r(-10,10,[0]),a([!0,!1])?this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${t(e)}x^2${n($)}x^3${n(i)}x${s(f)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)= ${t(e)}x^2${n($)}x^3${n(i)}x${s(f)}$.<br>
       
            Déterminer $f'(x)$.`:this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${t(i)}x${n(e)}x^2${s(f)}${n($)}x^3 $.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
            
            $f(x)=${t(i)}x${n(e)}x^2${s(f)}${n($)}x^3 $.<br>
    
            Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$, $v$ et $w$ définies par $u(x)=${t($)}x^3$, $v(x)=${t(e)}x^2$ et $w(x)=${x(i,f)}$.<br>
     Comme $u'(x)=${3*$}x^2$, $v'(x)=${2*e}x$ et $w'(x)=${i}$, on obtient  $f'(x)=${o(0,3*$,2*e,i)}$. `,this.reponse=[`${3*$}x^2+${2*e}x+${i}`];break;case 3:$=r(-10,10,[0]),e=r(-10,10,[0]),i=r(-10,10,[0]),a([!0,!1])?this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${o($,e,0,i)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)= ${o($,e,0,i)}$.<br>

        Déterminer $f'(x)$.`:this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
             $f(x)=${t($)}x^3${s(i)}${n(e)}x^2$.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=${t($)}x^3${s(i)}${n(e)}x^2 $.<br>

      Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $c=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$, $v$ et $w$ définies par $u(x)=${t($)}x^3$, $v(x)=${t(e)}x^2$ et $w(x)=${i}$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=${2*e}x$ et $w'(x)=0$, on obtient  $f'(x)=${o(0,3*$,2*e,0)}$. `,this.reponse=[`${3*$}x^2+${2*e}x`];break;case 4:$=r(-10,10,[0]),e=r(-10,10,[0]),i=r(-10,10,[0]),a([!0,!1])?this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${o($,0,e,i)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)= ${o($,0,e,i)}$.<br>

       Déterminer $f'(x)$.`:this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
             $f(x)=${t(e)}x${s(i)}${n($)}x^3 $.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=${t(e)}x${s(i)}${n($)}x^3 $.<br>

     Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $b=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$  définies par $u(x)=${t($)}x^3$ et $v(x)=${x(e,i)}$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=${e}$, on obtient  $f'(x)=${3*$}x^2${s(e)}$. `,this.reponse=[`${3*$}x^2+${e}`];break;case 5:$=r(-10,10,[0]),e=r(-10,10,[0]),a([!0,!1])?this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${o($,0,0,e)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${o($,0,0,e)}$.<br>
       Déterminer la fonction dérivée de $f$.`:this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
             $f(x)=${e}${n($)}x^3 $.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>

            $f(x)=${e}${n($)}x^3 $.<br>

      Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $b=0$ et $c=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$  définies par $u(x)=${t($)}x^3$ et $v(x)=${e}$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=0$, on obtient  $f'(x)=${3*$}x^2$. `,this.reponse=[`${3*$}x^2`];break;case 6:$=r(-10,10,[0]),e=r(-10,10,[0]),a([!0,!1])?(this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
                      $f(x)= ${t(e)}x^2${n($)}x^3$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)= ${t(e)}x^2${n($)}x^3$.<br>

       Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $c=0$ et $d=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$  définies par $u(x)=${t($)}x^3$ et $v(x)=${e}x^2$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=${2*e}x$, on obtient  $f'(x)=${3*$}x^2${2*e}x$. `,this.reponse=[`${3*$}x^2+${2*e}x`]):(this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>
             $f(x)=${t(e)}x${n($)}x^3 $.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=${t(e)}x${n($)}x^3 $.<br>

     Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $b=0$ et $d=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$  définies par $u(x)=${t($)}x^3$ et $v(x)=${e}x$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=${e}$, on obtient  $f'(x)=${3*$}x^2${s(e)}$. `,this.reponse=[`${3*$}x^2+${e}`]);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{C as dateDePublication,P as default,g as interactifReady,w as interactifType,A as refs,y as titre,k as uuid};
