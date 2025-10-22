import{a as s,r as t,a0 as f,m as i,f as a,u as x}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import{K as o}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const S="Calculer une dérivée et écrire le résultat sous la forme d’un quotient",k=!0,y="mathLive",E="24/06/2022",C="c7f8e",F={"fr-fr":["can1F19"],"fr-ch":[]};class P extends c{constructor(){super(),this.formatChampTexte=o.clavierFullOperations,this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let $,e,r;switch(s([1,2,3,4,5,6,7])){case 1:r=t(1,10),$=t(-10,10,0),e=t(-10,10,0),this.question=`Soit $f$ la fonction définie  par : <br>
           $f(x)=${x($,e)}+\\dfrac{${r}}{x}$.<br>
            Déterminer $f'(x)$ (écrire le résultat sous la forme d'un seul quotient).`,this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`$f$ est de la forme $u+v$ avec $u(x)=${x($,e)}$ et $v(x)=\\dfrac{${r}}{x}$.<br>
                 On a $u'(x)=${$}$ et $v'(x)=\\dfrac{-${r}}{x^2}$.<br>
          Ainsi,
          $f'(x)= ${$}+\\dfrac{-${r}}{x^2}=\\dfrac{${$}x^2}{x^2}+\\dfrac{${-r}}{x^2}=${i(`\\dfrac{${$}x^2-${r}}{x^2}`)}$.`,this.reponse=`\\dfrac{${$}x^2-${r}}{x^2}`;break;case 2:r=t(1,10),$=t(-10,10,0),e=t(-10,10,0),this.question=`Soit $f$ la fonction définie  par :<br>
             $f(x)=${x($,e)}-\\dfrac{${r}}{x}$. <br>
              Déterminer  $f'(x)$ (écrire le résultat sous la forme d'un seul quotient).`,this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`$f$ est de la forme $u-v$ avec $u(x)=${x($,e)}$ et $v(x)=\\dfrac{${r}}{x}$.<br>
                   On a $u'(x)=${$}$ et $v'(x)=\\dfrac{-${r}}{x^2}$.<br>
            Ainsi,
            $f'(x)= ${$}-\\dfrac{-${r}}{x^2}=\\dfrac{${$}x^2}{x^2}-\\dfrac{${-r}}{x^2}=${i(`\\dfrac{${$}x^2+${r}}{x^2}`)}$.`,this.reponse=`\\dfrac{${$}x^2+${r}}{x^2}`;break;case 3:r=t(1,10),$=t(-10,10,0),e=t(-10,10,0),this.question=`Soit $f$ la fonction définie  par : <br>
               $f(x)=${e}${a($)}x+\\dfrac{${r}}{x}$. <br>
                Déterminer  $f'(x)$ (écrire le résultat sous la forme d'un seul quotient).    `,this.interactif&&(this.question+="<br> $f'(x)=$"),this.correction=`$f$ est de la forme $u+v$ avec $u(x)=${e}${a($)}x$ et $v(x)=\\dfrac{${r}}{x}$.<br>
                     On a $u'(x)=${$}$ et $v'(x)=\\dfrac{-${r}}{x^2}$.<br>
              Ainsi,
              $f'(x)= ${$}+\\dfrac{-${r}}{x^2}=\\dfrac{${$}x^2}{x^2}+\\dfrac{${-r}}{x^2}=${i(`\\dfrac{${$}x^2-${r}}{x^2}`)}$.`,this.reponse=[`\\dfrac{${$}x^2-${r}}{x^2}`];break;case 4:r=t(1,10),$=t(-10,10,0),e=t(-10,10,0),this.question=`Soit $f$ la fonction définie  par : <br>
                  $f(x)=${e}${a($)}x-\\dfrac{${r}}{x}$. <br>
                  Déterminer  $f'(x)$ (écrire le résultat sous la forme d'un seul quotient).`,this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`$f$ est de la forme $u+v$ avec $u(x)=${e}${a($)}x$ et $v(x)=\\dfrac{${r}}{x}$.<br>
                       On a $u'(x)=${$}$ et $v'(x)=\\dfrac{-${r}}{x^2}$.<br>
                Ainsi,
                $f'(x)= ${$}-\\dfrac{-${r}}{x^2}=\\dfrac{${$}x^2}{x^2}-\\dfrac{${-r}}{x^2}=${i(`\\dfrac{${$}x^2+${r}}{x^2}`)}$.`,this.reponse=`\\dfrac{${$}x^2+${r}}{x^2}`;break;case 5:r=t(1,10),$=t(-10,10,0),e=t(-10,10,0),this.question=`Soit $f$ la fonction définie  par : <br>
            $f(x)=${f(0,$,0,e)}+\\dfrac{${r}}{x}$. <br>
            Déterminer  $f'(x)$ (écrire le résultat sous la forme d'un seul quotient).`,this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`$f$ est de la forme $u+v$ avec $u(x)=${f(0,$,0,e)}$ et $v(x)=\\dfrac{${r}}{x}$.<br>
                 On a $u'(x)=${2*$}x$ et $v'(x)=\\dfrac{-${r}}{x^2}$.<br>
          Ainsi,
          $f'(x)= ${2*$}x+\\dfrac{-${r}}{x^2}=\\dfrac{${2*$}x^3}{x^2}+\\dfrac{${-r}}{x^2}=${i(`\\dfrac{${2*$}x^3-${r}}{x^2}`)}$.`,this.reponse=`\\dfrac{${2*$}x^3-${r}}{x^2}`;break;case 6:r=t(1,10),$=t(-10,10,0),e=t(-10,10,0),this.question=`Soit $f$ la fonction définie  par : <br>
         $f(x)=${e}${a($)}x^2+\\dfrac{${r}}{x}$. <br>
          Déterminer  $f'(x)$ (écrire le résultat sous la forme d'un seul quotient).`,this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`$f$ est de la forme $u+v$ avec $u(x)=${e}${a($)}x^2$ et $v(x)=\\dfrac{${r}}{x}$.<br>
               On a $u'(x)=${2*$}x$ et $v'(x)=\\dfrac{-${r}}{x^2}$.<br>
        Ainsi,
        $f'(x)= ${2*$}x+\\dfrac{-${r}}{x^2}=\\dfrac{${2*$}x^3}{x^2}+\\dfrac{${-r}}{x^2}=${i(`\\dfrac{${2*$}x^3-${r}}{x^2}`)}$.`,this.reponse=`\\dfrac{${2*$}x^3-${r}}{x^2}`;break;case 7:r=t(1,10),$=t(-10,10,0),e=t(-10,10,0),this.question=`Soit $f$ la fonction définie  par : <br>
       $f(x)=${f(0,$,0,e)}-\\dfrac{${r}}{x}$.<br>
        Déterminer  $f'(x)$ (écrire le résultat sous la forme d'un seul quotient).`,this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`$f$ est de la forme $u-v$ avec $u(x)=${f(0,$,0,e)}$ et $v(x)=\\dfrac{${r}}{x}$.<br>
             On a $u'(x)=${2*$}x$ et $v'(x)=\\dfrac{-${r}}{x^2}$.<br>
      Ainsi,
      $f'(x)= ${2*$}x-\\dfrac{-${r}}{x^2}=\\dfrac{${2*$}x^3}{x^2}-\\dfrac{${-r}}{x^2}=${i(`\\dfrac{${2*$}x^3+${r}}{x^2}`)}$.`,this.reponse=`\\dfrac{${2*$}x^3+${r}}{x^2}`;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{E as dateDePublication,P as default,k as interactifReady,y as interactifType,F as refs,S as titre,C as uuid};
