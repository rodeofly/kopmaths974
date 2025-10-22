import{_ as o,r as n,al as s,m as a,F as u}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const L="25/08/2025",O="5cf1f",y={"fr-fr":["1AL11-5QCM"],"fr-ch":[]},A=!0,N="qcm",C="true",F="qcmMono",M="Calculer la raison d'une suite arithmétique";class P extends c{versionOriginale=()=>{this.enonce=`Soit $(u_n)$ une suite arithmétique.<br>
    On donne $u_{10}=4$ et $u_{35 }=${4+25*2}$. <br>
    La raison de cette suite est égale à : `,this.correction=`Soit $(u_n)$ une suite arithmétique, de premier terme $u_0\\in \\mathbb{R}$ et de raison $r\\in \\mathbb{R}.$
    <br> On a alors pour tout $n\\in \\mathbb{N}$ et tout $p\\in \\mathbb{N}$ : $u_n=u_p+(n-p)r$.
<br>En particulier, avec l'énoncé, <br>$\\begin{aligned}
u_{35}&=u_{10}+(35-10)\\times r\\\\
25\\times r&=u_{35}-u_{10}\\\\
r&=\\dfrac{${4+25*2}-4}{25}\\\\
r&=2
\\end{aligned}$.<br>
 ${o("La raison est donc 2.")} `,this.reponses=["$2$","$50$","$25$","$5$"]};versionAleatoire=()=>{const i=n(-5,5,[0,1]),e=n(3,10),t=n(4,10),r=n(-5,5,[-1,0,1]);this.enonce=`Soit $(u_n)$ une suite arithmétique.<br>On donne $u_{${e}}=${i}$ et $u_{${e+t} }=${i+t*r}$. <br>
    La raison de cette suite est est égale à :`,this.correction=`Soit $(u_n)$ une suite arithmétique, de premier terme $u_0\\in \\mathbb{R}$ et de raison $r\\in \\mathbb{R}.$
    <br> On a alors pour tout $n\\in \\mathbb{N}$ et tout $p\\in \\mathbb{N}$ : $u_n=u_p+(n-p)r$.
<br>En particulier, avec l'énoncé, <br>$\\begin{aligned}
u_{${e+t}}&=u_{${e}}+(${e+t}-${e})\\times r\\\\
${t}\\times r&=u_{${e+t}}-u_{${e}}\\\\
r&=\\dfrac{${i+t*r}-${s(i)}}{${t}}\\\\
r&=\\dfrac{${t*r}}{${t}}\\\\
r&=${r}
\\end{aligned}$.<br>
La raison est donc $${a(`r=${r}.`)}$ `;const $=new u(t*r,t+1);this.reponses=[`$${r}$`,` $${e}$`,`$${-r}$`,`$${$.texFractionSimplifiee}$`]};constructor(){super(),this.options={vertical:!1,ordered:!1},this.versionAleatoire()}}export{C as amcReady,F as amcType,L as dateDePublication,P as default,A as interactifReady,N as interactifType,y as refs,M as titre,O as uuid};
