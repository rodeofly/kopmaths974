import{af as k,r,a as F,u as $,F as g,s as S,v as m,m as h,z as q,l as T}from"./embellissements-BYV7mIDn.js";import{E as O,K as P}from"./Exercice-DtXhjCyI.js";import{a as y}from"./questionMathLive-DdRvWqlN.js";import{h as E}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const re=!0,le="mathlive",ae="02/05/2023",oe="Résoudre des équations avec un quotient",ue="b5828",de={"fr-fr":["2N52-5","BP2RES32"],"fr-ch":[]};class me extends O{constructor(){super(),this.besoinFormulaireNumerique=["Type d'équations",3,`1 : A(x)/B(x)=0
 2 : A(x)/B(x)=a ou a/A(x)=b/B(x)
 3 : Mélange`],this.nbQuestions=2,this.sup=3}nouvelleVersion(){let D=[];this.sup===1?D=[1,2]:this.sup===2?D=[3,4]:D=[1,2,3,4];const R=k(D,this.nbQuestions);for(let b=0,B=0;b<this.nbQuestions&&B<50;){let p="",l="",e,t,i,s,a,v,c,n,o;const Q=R[b],A="Préciser les valeurs interdites éventuelles, puis résoudre l'équation : ";let d,u,x,w,f;switch(Q){case 1:for(e=r(-3,9,0),t=r(-9,9),i=r(-9,9,0),s=r(-9,9);e*s-t*i===0;)e=r(-3,9,0),t=r(-9,9),i=r(-9,9,0),s=r(-9,9);c=F([!0,!1]),p=A,t===0?p+=`$\\dfrac{${$(e,t)}}{${$(i,s)}}=0$.`:p+=`${c?`$\\dfrac{${$(e,t)}}{${$(i,s)}}=0$`:`$\\dfrac{${t}${q(e)}x}{${$(i,s)}}=0$`}.`,l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent le dénominateur du quotient, puisque la division par $0$ n'existe pas.<br>",x=new g(-s,i),f=new g(-t,e),d=`\\left\\{${x.texFractionSimplifiee}\\right\\}`,u=`\\left\\{${f.texFractionSimplifiee}\\right\\}`,l+=`Or $${$(i,s)}=0$ si et seulement si  $x=${x.texFractionSimplifiee}$. <br>
          Donc l'ensemble des valeurs interdites est  $${d}$. <br>`,t===0?l+=`Pour tout $x\\in \\mathbb{R}\\smallsetminus\\left\\{${x.texFractionSimplifiee}\\right\\}$, <br>
 $\\begin{aligned}
 \\dfrac{${$(e,t)}}{${$(i,s)}}&=0 \\\\
 ${$(e,t)}&=0 ${S(7)} \\text{ car }\\dfrac{A(x)}{B(x)}=0 \\text { si et seulement si } A(x)=0 \\text { et } B(x)\\neq 0\\\\
x&= ${f.texFractionSimplifiee}
\\end{aligned}$<br>`:l+=`Pour tout $x\\in \\mathbb{R}\\smallsetminus\\left\\{${x.texFractionSimplifiee}\\right\\}$,<br>
 $\\begin{aligned}
 ${c?`\\dfrac{${$(e,t)}}{${$(i,s)}}&=0`:`\\dfrac{${t}${q(e)}x}{${$(i,s)}}&=0`}\\\\
 ${c?`${$(e,t)}&=0`:`${t}${q(e)}x&=0`}${S(7)} \\text{ car }\\dfrac{A(x)}{B(x)}=0 \\text { si et seulement si } A(x)=0 \\text { et } B(x)\\neq 0\\\\
x&= ${f.texFractionSimplifiee}
\\end{aligned}$<br>`,l+=` $${f.texFractionSimplifiee}$ n'est pas une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`;break;case 2:e=r(1,4),a=r(1,10),t=e*a*a,i=r(-9,9,0),v=r(-4,4,0),s=i*v,c=F([!0,!1]),p=A,F([!0,!1])?(p+=`${c?`$\\dfrac{${m(e)}x^2-${t}}{${$(i,s)}}=0$`:`$\\dfrac{${t}-${m(e)}x^2}{${$(i,s)}}=0$`}.`,l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent le dénominateur du quotient, puisque la division par $0$ n'existe pas.<br>",x=new g(-v,1),d=`\\left\\{${x.texFractionSimplifiee}\\right\\}`,l+=`Or $${$(i,s)}=0$ si et seulement si  $x=${x.texFractionSimplifiee}$. <br>
          Donc l'ensemble des valeurs interdites est  $${d}$.<br>
          Pour tout $x\\in \\mathbb{R}\\smallsetminus${d}$, <br>
            $\\begin{aligned}
            ${c?`\\dfrac{${m(e)}x^2-${t}}{${$(i,s)}}&=0`:`\\dfrac{${t}-${m(e)}x^2}{${$(i,s)}}&=0`}\\\\
            ${c?`${m(e)}x^2-${t}&=0`:`${t}-${m(e)}x^2&=0`}${S(7)} \\text{ car }\\dfrac{A(x)}{B(x)}=0 \\text { si et seulement si } A(x)=0 \\text { et } B(x)\\neq 0\\\\
            ${m(e)}x^2&=${t}\\\\
            x^2&=${a*a}\\\\
           x= ${a}&\\text{ ou } x= -${a}
           \\end{aligned}$<br>
           `,-v===a||v===a?-v===a?(u=`\\left\\{${-a}\\right\\}`,l+=`  $${a}$ est une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.
        `):(u=`\\left\\{${a}\\right\\}`,l+=`  $${-a}$ est une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.
        `):(u=`\\left\\{${-a}\\,;\\,${a}\\right\\}`,l+=`  $${-a}$ et $${a}$ ne sont pas des valeurs interdites, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.
        `)):(p+=`${c?`$\\dfrac{${m(e)}x^2+${t}}{${$(i,s)}}=0$`:`$\\dfrac{${t}+${m(e)}x^2}{${$(i,s)}}=0$`}.`,l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent le dénominateur du quotient, puisque la division par $0$ n'existe pas.<br>",d=`\\left\\{${-v}\\right\\}`,u="\\emptyset",l+=`Or $${$(i,s)}=0$ si et seulement si  $x=${-v}$. <br>
Donc l'ensemble des valeurs interdites est  $${d}$.<br>
Pour tout $x\\in \\mathbb{R}\\smallsetminus${d}$, <br>
  $\\begin{aligned}
  ${c?`\\dfrac{${m(e)}x^2+${t}}{${$(i,s)}}&=0`:`\\dfrac{${t}+${m(e)}x^2}{${$(i,s)}}&=0`}\\\\
  ${c?`${m(e)}x^2+${t}&=0`:`${t}+${m(e)}x^2&=0`}${S(7)} \\text{ car }\\dfrac{A(x)}{B(x)}=0 \\text { si et seulement si } A(x)=0 \\text { et } B(x)\\neq 0\\\\
  ${m(e)}x^2&=-${t}\\\\
  x^2&=-${a*a}
 \\end{aligned}$<br>
 `,l+=`Puisque $-${a*a}<0$, cette équation n'a pas de solution, donc l'ensemble des solutions est  $${h(`\\mathscr{S}=${u}`)}$.`);break;case 3:for(e=r(-3,5,0),t=r(-9,9),i=r(-9,9,0),s=r(-9,9),n=r(-9,9,0);e*s-t*i===0||e-n*i===0;)e=r(-3,5),t=r(-9,9),i=r(-9,9,0),s=r(-9,9),n=r(-9,9,0);c=F([!0,!1]),p=A,t===0?p+=`$\\dfrac{${$(e,t)}}{${$(i,s)}}=${n}$.`:p+=`${c?`$\\dfrac{${$(e,t)}}{${$(i,s)}}=${n}$`:`$\\dfrac{${t}${q(e)}x}{${$(i,s)}}=${n}$`}.`,l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent le dénominateur du quotient, puisque la division par $0$ n'existe pas.<br>",x=new g(-s,i),d=`\\left\\{${x.texFractionSimplifiee}\\right\\}`,f=new g(n*s-t,e-n*i),l+=`Or $${$(i,s)}=0$ si et seulement si  $x=${x.texFractionSimplifiee}$. <br>
          Donc l'ensemble des valeurs interdites est  $${d}$. <br>
          Pour tout $x\\in \\mathbb{R}\\smallsetminus${d}$,<br>`,t===0?l+=`
            $\\begin{aligned}
            \\dfrac{${$(e,t)}}{${$(i,s)}}&=${n}\\\\
            ${$(e,t)}&=${n}\\times(${$(i,s)})${S(7)} \\text{ car les produits en croix sont égaux.}\\\\
            ${$(e,t)}&= ${$(n*i,n*s)}\\\\
           ${m(e-n*i)}x&= ${n*s-t} ${e-n*i===1?"":"\\\\"}
          ${e-n*i===1?"":`x&=${f.texFractionSimplifiee}`} 
           \\end{aligned}$<br>`:l+=`
            $\\begin{aligned}
           ${c?`\\dfrac{${$(e,t)}}{${$(i,s)}}&=${n}`:`\\dfrac{${t}${q(e)}x}{${$(i,s)}}&=${n}`}\\\\
            ${c?`${$(e,t)}&=${n}\\times(${$(i,s)})`:`${t}${q(e)}x&=${n}\\times(${$(i,s)})`}${S(7)}\\text{ car les produits en croix sont égaux.}\\\\
            ${$(e,t)}&= ${$(n*i,n*s)}\\\\
            ${m(e-n*i)}x&= ${n*s-t}\\\\
           x&=${f.texFractionSimplifiee}
           \\end{aligned}$<br>`,-s*(e-n*i)-i*(n*s-t)===0?(u="\\emptyset",l+=`$${f.texFractionSimplifiee}$ est  une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`):(u=`\\left\\{${f.texFractionSimplifiee}\\right\\}`,l+=`$${f.texFractionSimplifiee}$ n'est pas une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`);break;case 4:default:for(e=r(-3,9,0),t=r(-9,9),i=r(-2,9,[0,e]),s=r(-9,9),n=r(-9,9,0),o=r(-9,9,0);i*(o*t-e*s)===-s*(n*i-o*e)||e*(o*t-e*s)===-t*(n*i-o*e);)e=r(-3,9,0),t=r(-9,9),i=r(-2,9,[0,e]),s=r(-9,9),n=r(-9,9,0),o=r(-9,9,0);n*i-o*e===0&&(n=n+10),c=F([!0,!1]),p=A,p+=`$\\dfrac{${n}}{${$(e,t)}}=\\dfrac{${o}}{${$(i,s)}}$.`,l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent les dénominateurs des quotients, puisque la division par $0$ n'existe pas.<br>",x=new g(-s,i),w=new g(-t,e),f=new g(-n*s+o*t,n*i-o*e),-e*s+t*i===0?d=`\\left\\{${x.texFractionSimplifiee}\\right\\}`:-s/i<-t/e?d=`\\left\\{${x.texFractionSimplifiee}\\,;\\,${w.texFractionSimplifiee} \\right\\}`:d=`\\left\\{${w.texFractionSimplifiee} \\, ; \\,${x.texFractionSimplifiee}\\right\\}`,l+=`Or $${$(e,t)}=0$ si et seulement si  $x = ${w.texFractionSimplifiee}$ et $${$(i,s)}=0$ si et seulement si  $x = ${x.texFractionSimplifiee} $. <br>Donc l'ensemble des valeurs interdites est $${d}$. <br>`,l+=`Pour tout $x\\in \\mathbb{R}\\smallsetminus ${d}$,<br>
 $\\begin{aligned}
 \\dfrac{${n}}{${$(e,t)}}&=\\dfrac{${o}}{${$(i,s)}}\\\\
 ${o}\\times (${$(e,t)})&=${n}\\times (${$(i,s)})${S(7)} \\text{ car les produits en croix sont égaux.}\\\\
 ${$(o*e,o*t)}&=${$(n*i,n*s)}\\\\
${m(-n*i+o*e)}x&= ${n*s-o*t}${-n*i+o*e===1?"":"\\\\"}
          ${-n*i+o*e===1?"":`x&=${f.texFractionSimplifiee}`} 
\\end{aligned}$<br>`,-t*(n*i-o*e)===e*(-n*s+o*t)?(u="\\emptyset",l+=` $${f.texFractionSimplifiee}$ est  une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`):(u=`\\left\\{${f.texFractionSimplifiee}\\right\\}`,l+=` $${f.texFractionSimplifiee}$ n'est pas une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`);break}this.interactif&&(p+=y(this,2*b,P.clavierEnsemble,{texteAvant:"<br>Ensemble des valeurs interdites : "}),p+=y(this,2*b+1,P.clavierEnsemble,{texteAvant:"<br>Ensemble des solutions : "})),E(this,2*b,{reponse:{value:d,options:{ensembleDeNombres:!0}}}),E(this,2*b+1,{reponse:{value:u,options:{ensembleDeNombres:!0}}}),this.questionJamaisPosee(b,e,t,i,s)&&(this.listeQuestions[b]=p,this.listeCorrections[b]=l,b++),B++}T(this)}}export{ae as dateDePublication,me as default,re as interactifReady,le as interactifType,de as refs,oe as titre,ue as uuid};
