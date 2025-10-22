import p from"decimal.js";import{K as b}from"./Exercice-DtXhjCyI.js";import{a as h,r as a,v as c,f as x,m as d,F as q,a0 as y,Y as l,u as f,e as v}from"./embellissements-BYV7mIDn.js";import F from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const C="Déterminer une équation de l’axe de symétrie d’une parabole",K=!0,N="mathLive",B="15/06/2022",I="30/09/2025",M="5b203",Q={"fr-fr":["can1F07"],"fr-ch":[]};class V extends F{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=b.clavierFullOperations,this.optionsChampTexte={texteAvant:"<br> "}}nouvelleVersion(){let e,t,r,i,o,n,u,s,$,m;switch(h([1,2,3])){case 1:e=a(-9,9,0),t=a(-9,9),r=a(-9,9,[0,t]),i=new p(t+r),t===0?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
      $f(x)=${c(e)}x(${f(1,-r)})$. <br>
      
      `:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
      $f(x)=${c(e)}(${f(1,-t)})(${f(1,-r)})$. <br>
      
      `,this.question+="Donner une équation de l'axe de symétrie de la parabole représentant $f$.",this.correction=`$f$ est une fonction polynôme du second degré écrite sous forme factorisée $a(x-x_1)(x-x_2)$.<br>
    Les racines sont donc $x_1=${t}$ et $x_2=${r}$.<br>
    L'axe de symétrie a pour équation $x=\\dfrac{x_1+x_2}{2}$. <br>
    On obtient alors  $x=\\dfrac{${t}+${l(r)}}{2}$, soit $x=\\dfrac{${t+r}}{2}$ ou encore $${d("x="+v((t+r)/2,1))}$. `,t+r<0?this.reponse=[`x=${i.div(2)}`,`x=\\dfrac{${i}}{2}`,`x+\\dfrac{${-i}}{2}=0`,`x+${-i.div(2)}=0`]:this.reponse=[`x=${i.div(2)}`,`x=\\dfrac{${i}}{2}`,`x-\\dfrac{${i}}{2}=0`,`x-${i.div(2)}=0`];break;case 2:e=a(-3,3,0),n=a(-9,9),u=a(-10,10),o=new p(-n),s=new q(-n,2*e),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
      $f(x)=${y(0,e,n,u)}$. <br>
      
      `,this.question+="Donner une équation de l'axe de symétrie de la parabole représentant $f$.",this.correction=`$f$ est une fonction polynôme du second degré écrite sous forme développée $ax^2+bx+c$.<br>
    Le sommet de la parabole a pour abscisse $-\\dfrac{b}{2a}$.<br>
        L'axe de symétrie a donc pour équation $x=-\\dfrac{b}{2a}$. <br>
    On obtient alors  $x=-\\dfrac{${n}}{2\\times ${l(e)}}$, soit $${d("x="+s.simplifie().texFSD)}$. `,-n/(2*e)<0?this.reponse=[`x=${o.div(2*e)}`,`x=\\dfrac{${o}}{${2*e}}`,`x+${o.div(-2*e)}=0`,`x+\\dfrac{${o}}{${-2*e}}=0`,`x=${s.texFraction}`,`x+${s.multiplieEntier(-1).texFraction}=0`]:this.reponse=[`x=${o.div(2*e)}`,`x=\\dfrac{${o}}{${2*e}}`,`x-\\dfrac{${o}}{${2*e}}=0`,`x-${o.div(2*e)}=0`,`x=${s.texFraction}`,`x-${s.texFraction}=0`];break;case 3:e=a(-9,9,0),$=a(-1,0),m=a(-10,10),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
      $f(x)=${c(e)}${$===0?"x^2":`(x${x(-$)})^2`}${x(m)}$. <br>
      
      `,this.question+="Donner une équation de l'axe de symétrie de la parabole représentant $f$.",this.correction=`$f$ est une fonction polynôme du second degré écrite sous forme canonique $a(x-\\alpha)^2+\\beta$.<br>
        L'axe de symétrie a pour équation $x=\\alpha$. <br>
    On obtient alors  $${d("x="+$)}$. `,this.reponse=[`x=${$}`,`x${x(-$)}=0`];break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{I as dateDeModifImportante,B as dateDePublication,V as default,K as interactifReady,N as interactifType,Q as refs,C as titre,M as uuid};
