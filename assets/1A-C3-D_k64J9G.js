import{m as p,r}from"./embellissements-BYV7mIDn.js";import L from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const z="2137a",B={"fr-fr":["1A-C3"],"fr-ch":["11QCM-9"]},G=!0,H="qcm",I="true",J="qcmMono",K="Trouver  l'égalité correcte (puissances)",N="23/07/2025";class S extends L{versionOriginale=()=>{this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${p("\\dfrac{10^{-5}}{10^8}=10^{-13}")}$.<br>
    En effet, <br>  
      $\\begin{aligned}
     \\dfrac{10^{-5}}{10^8}&=10^{-5-8}\\\\
      &=10^{-13}
      \\end{aligned}$<br>
      Les égalités corrigées (et donc correctes) pour les autres égalités, sont :  <br>
      $40\\times \\dfrac{1}{40^3}=40^{-2}$<br>
       $\\left(2^{-4}\\right)^3=2^{-12}$<br>
       $5^{-6}\\times 11^{-6}=55^{-6}$`,this.reponses=["$\\dfrac{10^{-5}}{10^8}=10^{-13}$","$40\\times \\dfrac{1}{40^3}=40^2$","$\\left(2^{-4}\\right)^3=2^{-1}$","$5^{-6}\\times 11^{-6}=55^{-12}$"]};versionAleatoire=()=>{const e=r(3,15),s=r(-10,-3),a=-s+r(4,8),$=r(2,6)*10,i=r(3,6),c=r(2,6)*10,o=r(-8,-3),l=r(3,6),n=r(3,7),b=r(3,7,n),t=r(-6,-2),d=`\\dfrac{${e}^{${s}}}{${e}^{${a}}}=${e}^{${s-a}}`,f=`${$}\\times \\dfrac{1}{${$}^{${i}}}=${$}^{${1-i}}`,g=`\\left(${c}^{${o}}\\right)^${l}=${c}^{${o*l}}`,m=`${n}^{${t}}\\times ${b}^{${t}}=${n*b}^{${t}}`,u=`\\dfrac{${e}^{${s}}}{${e}^{${a}}}=${e}^{${s+a}}`,h=`${$}\\times \\dfrac{1}{${$}^{${i}}}=${$}^{${i-1}}`,v=`\\left(${c}^{${o}}\\right)^${l}=${c}^{${o+l}}`,q=`${n}^{${t}}\\times ${b}^{${t}}=${n*b}^{${2*t}}`;switch(r(1,4)){case 1:this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${p(`${d}`)}$.<br>
    En effet, <br>  
      $\\begin{aligned}
    \\dfrac{${e}^{${s}}}{${e}^{${a}}}&=${e}^{${s}-${a}}\\\\
      &=${e}^{${s-a}}
      \\end{aligned}$<br>
    Concernant les autres propositions  :  <br>
     $${f}\\neq ${$}^{${i-1}}$<br>
  $${g}\\neq ${c}^{${o+l}}$<br>
       $${m}\\neq ${n*b}^{${2*t}}$`,this.reponses=[`$${d}$`,`$${h}$`,`$${v}$`,`$${q}$`];break;case 2:this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${p(`${f}`)}$.<br>
    En effet, <br>  
      $\\begin{aligned}
    ${$}\\times \\dfrac{1}{${$}^{${i}}}&=\\dfrac{${$}^1}{${$}^{${i}}}\\\\
    &=${$}^{1-${i}}\\\\
      &=${$}^{${1-i}}
      \\end{aligned}$<br>
     Concernant les autres propositions  :  <br>
    $${d}\\neq ${e}^{${s+a}}$<br>
  $${g}\\neq ${c}^{${o+l}}$<br>
       $${m}\\neq ${n*b}^{${2*t}}$`,this.reponses=[`$${f}$`,`$${u}$`,`$${v}$`,`$${q}$`];break;case 3:this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${p(`${g}`)}$.<br>
    En effet, <br>  
      $\\begin{aligned}
    \\left(${c}^{${o}}\\right)^${l}&=${c}^{${o} \\times ${l}}\\\\
    &=${c}^{${o*l}}
      \\end{aligned}$<br>
     Concernant les autres propositions  :  <br>
     $${d}\\neq ${e}^{${s+a}}$<br>
  $${f}\\neq ${$}^{${i-1}}$<br>
       $${m}\\neq ${n*b}^{${2*t}}$`,this.reponses=[`$${g}$`,`$${h}$`,`$${u}$`,`$${q}$`];break;case 4:default:this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${p(`${m}`)}$.<br>
    En effet, <br>  
      $\\begin{aligned}
      ${n}^{${t}}\\times ${b}^{${t}}&=(${n}\\times  ${b})^{${t}}\\\\
    &=${n*b}^{${t}}
      \\end{aligned}$<br>
     Concernant les autres propositions  :  <br>
    $${d}\\neq ${e}^{${s+a}}$<br>
  $${f}\\neq ${$}^{${i-1}}$<br>
       $${g}\\neq ${c}^{${o+l}}$`,this.reponses=[`$${m}$`,`$${u}$`,`$${v}$`,`$${h}$`];break}};constructor(){super(),this.versionAleatoire()}}export{I as amcReady,J as amcType,N as dateDePublication,S as default,G as interactifReady,H as interactifType,B as refs,K as titre,z as uuid};
