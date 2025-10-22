import{m,r as c,a as p,Y as f,v as l,f as d}from"./embellissements-BYV7mIDn.js";import b from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const I="28/08/2025",N="7092d",Q={"fr-fr":["1A-F3-1"],"fr-ch":[]},Y=!0,j="qcm",k="true",w="qcmMono",z="Déterminer une image par une fonction affine sans son expression";class B extends b{versionOriginale=()=>{this.enonce=`On considère une fonction affine $f$ telle que $f(2)=7$ et $f(5)=13$.<br>
    L'image de $7$ par cette fonction affine est : `,this.correction=`$f$ est une fonction affine, elle est donc de la forme $f(x)=mx+p$.<br>
     
    $\\begin{aligned}
    m&=\\dfrac{f(5)-f(2)}{5-2}\\\\
    &=\\dfrac{13-7}{3}\\\\
    &=2
    \\end{aligned}$<br>
    On a donc $f(x)=2x+p$.<br> Pour déterminer $p$, on utilise la valeur de $f(2)$ :<br>
    $\\begin{aligned}
    f(2)&=2\\times 2+p\\\\
    7&=4+p\\\\
    p&=3
    \\end{aligned}$<br>
    On a donc $f(x)=2x+3$.<br>
    
    L'image de $7$ par cette fonction est :<br>
    $\\begin{aligned}
    f(7)&=2\\times 7+3\\\\
    &=14+3\\\\
    &=${m(17)}
    \\end{aligned}$
    `,this.reponses=["$17$","$20$","$2$","$5$"]};versionAleatoire=()=>{const n=c(-5,5,0),r=c(n+2,n+5),e=p([1,2,3,-1,-2]);let $=c(-5,10),i=e*n+$,o=e*r+$;const t=n+r;let a=e*t+$,s=i+o;a===s&&($=$+p([-2,-1,1,2]),i=e*n+$,o=e*r+$,a=e*t+$,s=i+o);const u=a+(o-i),g=e*t;this.enonce=`On considère une fonction affine $f$ telle que $f(${n})=${i}$ et $f(${r})=${o}$.<br>
  L'image de $${t}$ par cette fonction affine est :`,this.correction=`$f$ est une fonction affine, elle est donc de la forme $f(x)=mx+p$.<br>
   
  $\\begin{aligned}
  m&=\\dfrac{f(${r})-f(${n})}{${r}-${f(n)}}\\\\
  &=\\dfrac{${o}${i>=0?"-":"+"}${Math.abs(i)}}{${r-n}}\\\\
  &=${e}
  \\end{aligned}$<br>
  On a donc $f(x)=${l(e)}x+p$.<br> Pour déterminer $p$, on utilise la valeur de $f(${n})$ :<br>
  $\\begin{aligned}
  f(${n})&=${e===1?`${n}`:`${e}\\times ${f(n)}`}+p\\\\
  ${i}&=${e*n}+p\\\\
  p&=${$}
  \\end{aligned}$<br>
  On a donc $f(x)=${l(e)}x${d($)}$.<br>
  
  L'image de $${t}$ par cette fonction est :<br>
  $\\begin{aligned}
  f(${t})&=${e===1?`${t}`:`${e}\\times ${f(t)}`}  ${d($)}
  ${e===1?"\\\\":` \\\\&=${e*t}${d($)}\\\\`} 
  &=${m(a)}
  \\end{aligned}$
  `,this.reponses=[`$${a}$`,`$${s}$`,`$${u}$`,`$${g}$`]};constructor(){super(),this.versionAleatoire()}}export{k as amcReady,w as amcType,I as dateDePublication,B as default,Y as interactifReady,j as interactifType,Q as refs,z as titre,N as uuid};
