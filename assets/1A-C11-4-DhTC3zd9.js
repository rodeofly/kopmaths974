import{m as c,r as o,F as s,u as r,f as $}from"./embellissements-BYV7mIDn.js";import u from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const O="459d1",R={"fr-fr":["1A-C11-4"],"fr-ch":[]},C=!0,P="qcm",T="true",B="qcmMono",M="Résoudre une équation",Q="26/09/2025";class j extends u{versionOriginale=()=>{this.enonce="La solution de l'équation $(5x+3)-(3x-2)=0$ est : ",this.correction=`On se ramène à une équation du type $ax=b$ en isolant les  « $x$ » dans le membre de gauche et les « non $x$ » dans le membre de droite.<br>
    $\\begin{aligned}
    (5x+3)-(3x-2)&=0\\\\
    5x+3-3x+2&=0\\\\
2x&=-5\\\\
x&=-\\dfrac{5}{2}
\\end{aligned}$<br>
    
   La solution de cette équation est  $${c("-\\dfrac{5}{2}")}$.`,this.reponses=["$-\\dfrac{5}{2}$","$-\\dfrac{3}{5}$","$\\dfrac{2}{3}$","$-\\dfrac{1}{2}$"]};versionAleatoire=()=>{const e=o(1,10),t=o(-10,10,0),i=o(2,10,[e,e-1,e+1]),n=o(-10,10,[0,t]),a=new s(n-t,e-i),d=new s(-t,e),m=new s(-n,i),l=new s(-n-t,e-i);this.enonce=`La solution de l'équation $(${r(e,t)})-(${r(i,n)})=0$ est : `,this.correction=`On se ramène à une équation du type $ax=b$ en isolant les  « $x$ » dans le membre de gauche et les « non $x$ » dans le membre de droite.<br>
    $\\begin{aligned}
    (${r(e,t)})-(${r(i,n)})&=0\\\\
   ${e}x${$(t)}${$(-i)}x${$(-n)}&=0\\\\
 ${e-i}x${$(t-n)}&=0\\\\
 ${e-i}x&=${n-t}\\\\
x&= ${a.simplifie().texFSD}
\\end{aligned}$<br>
    
   La solution de cette équation est  $${c(a.simplifie().texFSD)}$.`,this.reponses=[`$${a.simplifie().texFSD}$`,`$${d.simplifie().texFSD}$`,`$${m.simplifie().texFSD}$`,`$${l.simplifie().texFSD}$`]};constructor(){super(),this.versionAleatoire(),this.spacing=1.5}}export{T as amcReady,B as amcType,Q as dateDePublication,j as default,C as interactifReady,P as interactifType,R as refs,M as titre,O as uuid};
