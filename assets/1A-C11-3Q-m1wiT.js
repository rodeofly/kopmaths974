import{m as x,a as w,r as p,v as r,f as t,F as a,w as m,h as l,x as g}from"./embellissements-BYV7mIDn.js";import S from"./ExerciceQcmA-CHnTcRvH.js";import{t as h}from"./deprecatedFractions-D2cbyAQf.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./colors-bl7PrqSM.js";const G="2e7a5",H={"fr-fr":["1A-C11"],"fr-ch":["11QCM-12","1mQCM-12"]},I=!0,J="qcm",K="true",N="qcmMono",U="Résoudre une équation du premier degré",V="05/08/2025";class W extends S{versionOriginale=()=>{this.enonce="La solution de l'équation $4(x-5)=7x+3$ est : ",this.correction=`On développe, puis on isole l'inconnue dans le membre de gauche :<br>
 $\\begin{aligned}
 4(x-5)&=7x+3\\\\
 4x-20&=7x+3\\\\
 4x-7x&=3+20\\\\
 -3x&=23\\\\
 x&=-\\dfrac{23}{3}
\\end{aligned}$<br>
 `,this.correction+=` La solution est $${x("-\\dfrac{23}{3}")}$.`,this.reponses=["$-\\dfrac{23}{3}$","$\\dfrac{23}{3}$","$26$","$-\\dfrac{17}{3}$"]};versionAleatoire=()=>{const F=w(["k(ax+b)=cx+d","k-(ax+b)=cx+d"]);let d,e,u,f,b;const o=p(-9,9,0),$=p(-9,9,0);e=p(-9,9,0);const n=p(-9,9,0),i=p(2,9,$);if(F==="k(ax+b)=cx+d")e===i*o&&(e=p(1,9,[o])),this.enonce=`La solution de l'équation $${i}(${r(o)}x${t($)})=${r(e)}x${t(n)}$ est : `,this.correction=`On développe, puis on isole l'inconnue dans le membre de gauche :<br>
 $\\begin{aligned}
 ${i}(${r(o)}x${t($)})&=${r(e)}x${t(n)}\\\\
 ${i*o}x${t(i*$)}&=${r(e)}x${t(n)}\\\\
 ${i*o}x${t(i*$)}${x(m(-1*e)+r(l(e))+"x")}&=${e}x${t(n)}${x(m(-1*e)+r(l(e))+"x")}\\\\
 ${r(i*o-e)}x${t(i*$)}&=${n}\\\\
 ${r(i*o-e)}x${t(i*$)}${x(t(-i*$))}&=${n}${x(t(-i*$))}\\\\
 ${r(i*o-e)}x&=${n-i*$}\\\\
 x&=${h(n-i*$,i*o-e)}
 ${g(l(n-i*$),l(i*o-e))>1||i*o-e<0?`\\\\x&=${new a(n-i*$,i*o-e).texFractionSimplifiee}`:""}
\\end{aligned}$
 `,this.correction+=`<br> La solution est $${x(new a(n-i*$,i*o-e).texFractionSimplifiee)}$.`,d=new a(n-i*$,i*o-e).texFractionSimplifiee,u=new a(n-$,o-e).texFractionSimplifiee,f=new a(n+i*$,i*o-e).texFractionSimplifiee,b=new a(n-i*$,i*o+e).texFractionSimplifiee;else{e===-o&&(e=p(-9,9,[0,o,-o]));const c=-o,s=i-$;this.enonce=`La solution de l'équation $${i}-(${r(o)}x${t($)})=${r(e)}x${t(n)}$ est : `,this.correction=`On développe, puis on isole l'inconnue dans le membre de gauche :<br>
 $\\begin{aligned}
 ${i}-(${r(o)}x${t($)})&=${r(e)}x${t(n)}\\\\
 ${i}${t(-o)}x${t(-$)}&=${r(e)}x${t(n)}\\\\
 ${r(c)}x${t(s)}&=${r(e)}x${t(n)}\\\\
 ${r(c)}x${t(s)}${x(m(-1*e)+r(l(e))+"x")}&=${e}x${t(n)}${x(m(-1*e)+r(l(e))+"x")}\\\\
 ${r(c-e)}x${t(s)}&=${n}\\\\
 ${r(c-e)}x${t(s)}${x(t(-1*s))}&=${n}${x(t(-1*s))}\\\\
 ${r(c-e)}x&=${n-s}\\\\
 x&=${h(n-s,c-e)}
 ${g(l(n-s),l(c-e))>1||c-e<0?`\\\\x&=${new a(n-s,c-e).texFractionSimplifiee}
`:""}\\end{aligned}$
 `,this.correction+=`<br> La solution est $${x(new a(n-s,c-e).texFractionSimplifiee)}$.`,d=new a(n-s,c-e).texFractionSimplifiee,u=new a(n+s,c-e).texFractionSimplifiee,f=new a(n-$,o-e).texFractionSimplifiee,b=new a(-n+s,c-e).texFractionSimplifiee}this.reponses=[`$${d}$`,`$${u}$`,`$${f}$`,`$${b}$`]};constructor(){super(),this.versionAleatoire(),this.spacing=1.5}}export{K as amcReady,N as amcType,V as dateDePublication,W as default,I as interactifReady,J as interactifType,H as refs,U as titre,G as uuid};
