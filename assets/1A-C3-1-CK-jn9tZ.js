import{m as $,e as s,a as o,r}from"./embellissements-BYV7mIDn.js";import n from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const A="23/07/2025",E="6682b",q={"fr-fr":["1A-C3-1"],"fr-ch":[]},C=!0,P="qcm",R="true",T="qcmMono",k="Calculer avec des puissances (1)";class D extends n{versionOriginale=()=>{this.enonce="On considère le nombre $N=\\dfrac{10^7}{5^2}$. On a :",this.correction=`$\\begin{aligned}
    N&=\\dfrac{10^7}{5^2}\\\\
    &=\\dfrac{2^7\\times 5^7}{5^2}\\\\
    &=2^7\\times 5^{7-2}\\\\
    &=2^7\\times 5^5\\\\
    &=(2\\times 5)^5\\times 2^2\\\\
    &=${$("4\\times 10^5")}
    \\end{aligned}$`,this.reponses=["$N=4\\times 10^5$","$N= 2^5$",`$N=${s(2e4)}$`,"$N=\\dfrac{1}{10^5}$"]};versionAleatoire=()=>{const e=o([[5,2],[2,5],[5,3],[5,3],[2,3],[3,2]]),i=r(2,4),t=r(2,3);this.enonce=`
        On considère le nombre $N=\\dfrac{${e[0]*e[1]}^${i+t}}{${e[0]}^${i}}$. On a :<br>`,this.correction=`$\\begin{aligned}
    N&=\\dfrac{${e[0]*e[1]}^${i+t}}{${e[0]}^${i}}\\\\
    &=\\dfrac{${e[0]}^${i+t}\\times ${e[1]}^${i+t} }{${e[0]}^${i}}\\\\
    &=${e[1]}^${i+t}\\times ${e[0]}^{${t}}\\\\
    &=${e[1]*e[0]}^${t}\\times ${e[1]}^{${i}}\\\\
    &=${$(`${e[1]**i}\\times ${e[0]*e[1]}^{${t}}`)}
    \\end{aligned}$`,this.reponses=[` $N=${e[1]**i}\\times ${e[0]*e[1]}^{${t}}$`,`$N=${e[1]}^{${t}}$`,`$N=${e[0]*e[1]}^{${t}}$`,`$N=${e[0]**i}\\times ${e[0]*e[1]}^{${t}}$`]};constructor(){super(),this.versionAleatoire()}}export{R as amcReady,T as amcType,A as dateDePublication,D as default,C as interactifReady,P as interactifType,q as refs,k as titre,E as uuid};
