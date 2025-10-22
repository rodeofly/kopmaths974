import{e,m as d,r as h,a as m}from"./embellissements-BYV7mIDn.js";import b from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const j="1f233",k={"fr-fr":["1A-C4-1"],"fr-ch":["10QCM-5","9QCM-7"]},z=!0,B="qcm",G="true",H="qcmMono",I="Calculer une somme de fractions décimales",J="02/09/2025";class K extends b{versionOriginale=()=>{this.enonce=`On considère $A=\\dfrac{1}{100}+\\dfrac{1}{${e(1e3)}}$. On a : `,this.correction=` On a  : <br>
   $\\begin{aligned}
   A&=\\dfrac{1}{100}+\\dfrac{1}{${e(1e3)}}\\\\
   &=0,01+${e(.001)}\\\\
   &=${d(.011)}
   \\end{aligned}$ <br>
  `,this.reponses=["$A=0,011$","$A=100,001$",`$\\dfrac{2}{${e(1e4)}}$`,"$A=0,11$"]};versionAleatoire=()=>{const f=[10,100,1e3,1e4],r=h(1,9),$=m(f);let n=m(f);for(;n===$;)n=m(f);const i=r/$+r/n,p=(o,c)=>c===0?o:p(c,o%c),t=((o,c)=>o*c/p(o,c))($,n),l=r*(t/$)+r*(t/n),A=p(l,t),a=l/A,s=t/A,g=A>1,u=m([!0,!1,!1]);this.enonce=`On considère $A=\\dfrac{${r}}{${e($)}}+\\dfrac{${r}}{${e(n)}}$. On a : `,u?g?this.correction=` On a  : <br>
       $\\begin{aligned}
       A&=\\dfrac{${r}}{${e($)}}+\\dfrac{${r}}{${e(n)}}\\\\
       &=${e(r/$,4)}+${e(r/n,4)}\\\\
       &=${e(i,4)}\\\\
       &=\\dfrac{${l}}{${e(t)}}\\\\
       &=${d(`\\dfrac{${a}}{${e(s)}}`)}
       \\end{aligned}$ <br>
      `:this.correction=` On a  : <br>
       $\\begin{aligned}
       A&=\\dfrac{${r}}{${e($)}}+\\dfrac{${r}}{${e(n)}}\\\\
       &=${e(r/$,4)}+${e(r/n,4)}\\\\
       &=${e(i,4)}\\\\
       &=${d(`\\dfrac{${a}}{${e(s)}}`)}
       \\end{aligned}$ 
      `:this.correction=` On a  : <br>
     $\\begin{aligned}
     A&=\\dfrac{${r}}{${e($)}}+\\dfrac{${r}}{${e(n)}}\\\\
     &=${e(r/$,4)}+${e(r/n,4)}\\\\
     &=${d(e(i,4))}
     \\end{aligned}$ 
    `,u?this.reponses=[`$A=\\dfrac{${a}}{${e(s)}}$`,`$A=${e(i/10,4)}$`,`$A=${e(i*10,4)}$`,`$A=\\dfrac{${2*r}}{${e($*n)}}$`]:this.reponses=[`$A=${e(i,4)}$`,`$A=\\dfrac{${2*r}}{${e($*n)}}$`,`$A=${e(i*10,4)}$`,`$A=\\dfrac{${a+1}}{${e(s)}}$`]};constructor(){super(),this.versionAleatoire(),this.spacing=1.5,this.spacingCorr=1}}export{G as amcReady,H as amcType,J as dateDePublication,K as default,z as interactifReady,B as interactifType,k as refs,I as titre,j as uuid};
