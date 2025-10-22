import{a as i,r as e,e as o}from"./embellissements-BYV7mIDn.js";import s from"./ExerciceSimple-CWWOU0FG.js";import a from"decimal.js";import{K as n}from"./Exercice-DtXhjCyI.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Déterminer la fonction dérivée d’une fonction $k/x$ ou $k\\sqrt{x}$",D=!0,g="mathLive",k="21/06/2022",F="e794b",R={"fr-fr":["can1F12"],"fr-ch":[]};class C extends s{constructor(){super(),this.formatChampTexte=n.clavierFullOperations,this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let r,t;switch(i([1,2])){case 1:r=e(2,15)*i([-1,1]),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}^*$ par : <br>

            $f(x)=\\dfrac{${r}}{x}$. <br>

           Déterminer $f'(x)$.<br>     `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`$f(x)=\\dfrac{${r}}{x}=${r}\\times \\dfrac{1}{x}$.<br>
          Or  $x\\longmapsto \\dfrac{1}{x}$ a pour dérivée $x\\longmapsto -\\dfrac{1}{x^2}$.<br>
          Par conséquent, $f'(x)=${r}\\times \\left(-\\dfrac{1}{x^2}\\right)=\\dfrac{${-r}}{x^2}$.`,this.reponse=[`\\dfrac{${-r}}{x^2}`,`-\\dfrac{${r}}{x^2}`,`${r}\\dfrac{-1}{x^2}`];break;case 2:r=e(2,15)*i([-1,1]),t=new a(r).div(2),this.question=`Soit $f$ la fonction définie sur $[0;+\\infty[$ par : <br>

            $f(x)=${r}\\sqrt{x}$. <br>

            Déterminer $f'(x)$ pour $x\\in ]0;+\\infty[$ .<br>     `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`$f(x)=${r}\\sqrt{x}=${r}\\times\\sqrt{x}$.<br>
          Or  $x\\longmapsto \\sqrt{x}$ a pour dérivée $x\\longmapsto \\dfrac{1}{2\\sqrt{x}}$.<br>
          Par conséquent, $f'(x)=${r}\\times \\dfrac{1}{2\\sqrt{x}}=\\dfrac{${r}}{2\\sqrt{x}}=\\dfrac{${o(t,1)}}{\\sqrt{x}}$.`,this.reponse=[`\\dfrac{${r}}{2\\sqrt{x}}`,`\\dfrac{${t}}{\\sqrt{x}}`,`${r}\\dfrac{1}{2\\sqrt{x}}`];break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{k as dateDePublication,C as default,D as interactifReady,g as interactifType,R as refs,y as titre,F as uuid};
