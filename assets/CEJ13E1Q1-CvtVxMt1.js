import{e as o,m as $,r as s,a}from"./embellissements-BYV7mIDn.js";import{nombreElementsDifferents as c}from"./ExerciceQcm-DOkcCRBu.js";import u from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const D="67e1a",Q={"fr-fr":["3L1QCM-02"],"fr-ch":[]},V=!0,C="qcm",M="true",R="qcmMono",T="Équation produit nul (2013 Centres étrangers)",w="30/10/2024";class J extends u{appliquerLesValeurs(i,t,r){const e=-i,n=r/t;this.reponses=[`$${String(e)}$ et $${o(n,2)}$`,`$${String(-e)}$ et $${o(-n,2)}$`,`$${String(e)}$ et $${String(r-t)}$`],this.enonce=`Les solutions de l'équation  $(x+${String(i)})(${String(t)}x-${String(r)})=0$ sont :`,this.correction=`Un produit de facteurs est nul si l'un des facteurs est nul , soit <br>
    $\\left\\{\\begin{array}{l c l}
    x+${String(i)}&=0\\\\
    \\text{ou}&\\\\
    ${String(t)}x-${String(r)}&=0\\\\
    \\end{array}\\right.$ d'où $\\left\\{\\begin{array}{l c l}
    x&=-${String(i)}\\\\
     \\text{ou}&\\\\
     ${String(t)}x&=${String(r)}\\\\
      \\end{array}\\right.$ soit $\\left\\{\\begin{array}{l c l}
      x&=${String(e)}\\\\
      \\text{ou}&\\\\
       x&=${o(n,2)}\\\\
        \\end{array}\\right.$.<br>`,this.correction+=`Donc, l'équation $(x+${String(i)})(${String(t)}x-${String(r)})=0$ a pour solutions $${$(`x=${String(e)} \\text{ et }x=${o(n,2)}`)}$.`}versionOriginale=()=>{this.appliquerLesValeurs(7,2,7)};versionAleatoire=()=>{do{const t=s(2,9),r=s(5,9),e=a([2,4]);this.appliquerLesValeurs(t,e,r)}while(c(this.reponses)<3)};constructor(){super(),this.versionAleatoire()}}export{M as amcReady,R as amcType,w as dateDePublication,J as default,V as interactifReady,C as interactifType,Q as refs,T as titre,D as uuid};
