import $ from"decimal.js";import{a as t,r,u as f,e as n,z as s,F as a,f as c}from"./embellissements-BYV7mIDn.js";import m from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const D="Déterminer la fonction dérivée d’une fonction affine",E=!0,F="mathLive",C="20/06/2022",L="45511",k={"fr-fr":["can1F08"],"fr-ch":["3mA2-6"]};class y extends m{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,i,o;switch(t([1,2,3])){case 1:e=t([r(1,10)*t([-1,1]),new $(r(-19,19,[0,-10,10])).div(10)]),i=t([r(1,10)*t([-1,1]),new $(r(-19,19,[0,-10,10])).div(10)]),o=new a(e*10,10),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
       $f(x)=${f(e,i)}$.<br>
        Déterminer $f'(x)$.`,this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=${n(e,1)}$ et $p=${n(i,1)}$.<br>
        La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=${n(e,1)}$. `,this.reponse=[e,o.texFraction],this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
        $f(x)=${f(e,i)}$.`,this.canReponseACompleter="$f^\\prime(x)=\\ldots$";break;case 2:e=t([r(2,10)*t([-1,1]),new $(r(-19,19,[0,-10,10])).div(10)]),i=t([r(1,10)*t([-1,1]),new $(r(-19,19,[0,-10,10])).div(10)]),o=new a(e*10,10),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
      $f(x)=${n(i,1)}${c(e)}x$.<br>
        Déterminer $f'(x)$.`,this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=${n(e,1)}$ et $p=${n(i,1)}$.<br>
        La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=${n(e,1)}$. `,this.reponse=[e,o.texFraction],this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
        $f(x)=${n(i,1)}${c(e)}x$.`,this.canReponseACompleter="$f^\\prime(x)=\\ldots$";break;case 3:i=t([r(1,10)*t([-1,1]),new $(r(-19,19,[0,-10,10])).div(10)]),e=t([-1,1]),t([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>
       $f(x)=${f(e,i)}$.<br>
       Déterminer $f'(x)$.`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
       $f(x)=${f(e,i)}$.`,this.canReponseACompleter="$f^\\prime(x)=\\ldots$"):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
        $f(x)=${n(i,1)}${s(e)}x$.<br>
        Déterminer $f'(x)$.`,this.canEnonce=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
        $f(x)=${n(i,1)}${s(e)}x$.`,this.canReponseACompleter="$f^\\prime(x)=\\ldots$"),this.interactif&&(this.question+="<br>$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=${e}$ et $p=${n(i,1)}$.<br>
        La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=${e}$. `,this.reponse=e;break}}}export{C as dateDePublication,y as default,E as interactifReady,F as interactifType,k as refs,D as titre,L as uuid};
