import{g as _,af as x,r as s,a as u,v as m,f as r,F as D,m as c,z as v,l as Q}from"./embellissements-BYV7mIDn.js";import{E as C}from"./Exercice-DtXhjCyI.js";import{h as d}from"./gestionInteractif-DujZpSu8.js";import{a as S}from"./questionMathLive-DdRvWqlN.js";import{a as f}from"./comparisonFunctions-B45ZZ3C7.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./Hms-u2AUyU1C.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./compute-engine.min.umd-BwAhpA7x.js";const W="Déterminer les termes d'une suite définie de façon explicite",X=!0,Y="mathLive",Z="22/09/2024",ee="f0c2d",ie={"fr-fr":["1AL10-3"],"fr-ch":[]};class te extends C{constructor(){super(),this.nbQuestions=1,this.sup=4,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Affine","2 : Second degré","3 : Homographique","4 : Mélange"].join(`
`)]}nouvelleVersion(){const h=_({saisie:this.sup,min:1,max:3,melange:4,defaut:4,nbQuestions:this.nbQuestions}),g=x(h,this.nbQuestions);for(let o=0,a,p,$,b=0,i,t,n,l,e;o<this.nbQuestions&&b<50;){switch(g[o]){case 1:i=s(1,10)*u([-1,1]),t=s(1,10)*u([-1,1]),e=s(0,20),$=i*e+t,d(this,o,{reponse:{value:$,compare:f}}),a=`Soit $(u_n)$ une suite définie pour tout entier $n\\in\\mathbb{N}$ par $u_n =${m(i)}n${r(t)}$. `,a+=`<br>Calculer $u_{${e}}$.`,p=`Dans l'expression de $u_n$ on remplace $n$ par ${e}, on obtient : <br>
          $\\begin{aligned}
u_{${e}}&=${i===1?"":i===-1?"-":`${i} \\times`} ${e} ${r(t)}\\\\
&=${c(i*e+t)}
\\end{aligned}$`;break;case 2:i=s(1,3)*u([-1,1]),t=s(0,9)*u([-1,1]),n=s(0,9)*u([-1,1]),e=s(0,10),$=i*e**2+t*e+n,d(this,o,{reponse:{value:$,compare:f}}),a=`Soit $(u_n)$ une suite définie pour tout entier $n\\in\\mathbb{N}$ par 
        ${t===0?`$u_n = ${m(i)}n^2${r(n)}$`:`$u_n = ${m(i)}n^2${v(t)}n${r(n)}$`}  .`,a+=`<br>Calculer $u_{${e}}$.`,p=`Dans l'expression de $u_n$ on remplace $n$ par $${e}$, on obtient :<br>`,t===0?p+=`$\\begin{aligned}
            u_{${e}}&=${i===1?"":i===-1?"-":`${i} \\times`} ${e}^2${r(n)}\\\\
            &=${c($)}
            \\end{aligned}$`:p+=`$\\begin{aligned}
u_{${e}}&=${i===1?"":i===-1?"-":`${i} \\times`} ${e}^2 ${t===1?"+":t===-1?"-":`${r(t)} \\times`} ${e}${r(n)}\\\\
&=${c($)}
\\end{aligned}$`;break;case 3:default:i=s(1,5)*u([-1,1]),t=s(1,5)*u([-1,1]),n=s(2,4),l=s(1,7),e=s(1,9),this.reponse=1,a=`Soit $(u_n)$ une suite définie pour tout entier $n\\in\\mathbb{N}$ par 
          $u_n =\\dfrac{${m(i)}n${r(t)}}{${m(n)}n${r(l)}} $.`,a+=`<br>Calculer $u_{${e}}$. <br>
          Donner le résultat sous la forme d'une fraction irréductible ou d'un nombre entier.`,$=new D(i*e+t,n*e+l).simplifie(),d(this,o,{reponse:{value:$.toLatex(),options:{fractionIrreductible:!0}}}),p=`Dans l'expression de $u_n$ on remplace $n$ par $${e}$, on obtient :<br>
         $\\begin{aligned}
u_{${e}}&=\\dfrac{${i===1?"":i===-1?"-":`${i} \\times`} ${e} ${r(t)}}{${n===1?"":n===-1?"-":`${n} \\times`} ${e} ${r(l)}}\\\\
&=${c($.texFSD)}
\\end{aligned}$`;break}a+="<br>"+S(this,o," ",{texteAvant:`$u_{${e}}=$`}),this.questionJamaisPosee(o,i,t,e)&&(this.listeQuestions[o]=a,this.listeCorrections[o]=p,o++),b++}Q(this)}}export{Z as dateDeModifImportante,te as default,X as interactifReady,Y as interactifType,ie as refs,W as titre,ee as uuid};
