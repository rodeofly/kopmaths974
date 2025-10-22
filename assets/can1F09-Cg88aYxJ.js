import s from"decimal.js";import{a as t,r,F as c,e as a,f as m,u as p}from"./embellissements-BYV7mIDn.js";import h from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const F="Déterminer la fonction dérivée d’une fonction affine*",k=!0,y="mathLive",C="20/06/2022",P="84ae6",g={"fr-fr":["can1F09"],"fr-ch":[]};class B extends h{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const d=[[2,5],[-2,3],[-3,4],[5,7],[-3,7],[3,5],[4,5],[-2,7],[-7,9],[-4,9],[4,7],[2,11],[-3,11],[8,9],[6,7],[-8,3],[-7,3],[2,15],[-2,15],[3,17],[-3,10]],x=[[2,5],[2,3],[3,4],[5,7],[3,7],[3,5],[4,5],[2,7],[7,9],[-4,9],[4,7],[2,11],[3,11],[8,9],[6,7],[10,7],[11,7],[9,8],[7,8],[11,3],[2,15]];let i,e,o,f,n=[],$=[];switch(t([1,2,3,4])){case 1:i=r(2,15),e=t([r(1,10)*t([-1,1]),new s(r(-19,19,[0,-10,10])).div(10)]),t([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=\\dfrac{x}{${i}}${m(e)}$. <br>

            Déterminer $f'(x)$.   <br>       `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{1}{${i}}$ et $p=${a(e,1)}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{1}{${i}}$. `,this.reponse=new c(1,i)):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

         $f(x)=-\\dfrac{x}{${i}}${m(e)}$.<br>
         
          Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=-\\dfrac{1}{${i}}$ et $p=${a(e,1)}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=-\\dfrac{1}{${i}}$. `,this.reponse=new c(-1,i));break;case 2:o=r(2,15)*t([-1,1]),e=t([r(1,10)*t([-1,1]),new s(r(-19,19,[0,-10,10])).div(10)]),i=r(2,15),f=new c(o,i),t([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

           $f(x)=\\dfrac{${p(o,e)}}{${i}}$. <br>

            Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{${o}}{${i}}$ et $p=\\dfrac{${a(e,1)}}{${i}}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${o}}{${i}}${f.texSimplificationAvecEtapes()}$. `,this.reponse=f):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>

           $f(x)=\\dfrac{${a(e,1)}${m(o)}x}{${i}}$.<br>
           
            Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{${o}}{${i}}$ et $p=\\dfrac{${a(e,1)}}{${i}}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${o}}{${i}}${f.texSimplificationAvecEtapes()}$. `,this.reponse=f);break;case 3:o=r(2,15)*t([-1,1]),e=t([r(1,10)*t([-1,1]),new s(r(-19,19,[0,-10,10])).div(10)]),i=r(2,15),n=t(d),f=new c(n[0],n[1]),t([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

         $f(x)=\\dfrac{${n[0]}x}{${n[1]}}${m(e)}$.<br>

          Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{${n[0]}}{${n[1]}}$  et $p=${a(e,1)}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${n[0]}}{${n[1]}}$. `,this.reponse=f):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=\\dfrac{${n[0]}x}{${n[1]}}$.<br>

            Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction linéaire de la forme $f(x)=mx$ avec $m=\\dfrac{${n[0]}}{${n[1]}}$.<br>
              La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${n[0]}}{${n[1]}}$. `,this.reponse=f);break;case 4:o=r(2,15)*t([-1,1]),e=t([r(1,10)*t([-1,1]),new s(r(-19,19,[0,-10,10])).div(10)]),i=r(2,15),$=t(x),t([!0,!1])?(f=new c($[0],$[1]),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

          $f(x)=${a(e,1)}+\\dfrac{${$[0]}x}{${$[1]}}$. <br>
          
          Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{${$[0]}}{${$[1]}}$  et $p=${a(e,1)}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${$[0]}}{${$[1]}}$. `,this.reponse=f):(f=new c(-$[0],$[1]),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

           $f(x)=${a(e,1)}-\\dfrac{${$[0]}x}{${$[1]}}$. <br>

            Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=-\\dfrac{${$[0]}}{${$[1]}}$  et $p=${a(e,1)}$.<br>
              La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=-\\dfrac{${$[0]}}{${$[1]}}$. `,this.reponse=f);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{C as dateDePublication,B as default,k as interactifReady,y as interactifType,g as refs,F as titre,P as uuid};
