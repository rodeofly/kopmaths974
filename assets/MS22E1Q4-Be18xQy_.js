import{m as o,a as n,r as s}from"./embellissements-BYV7mIDn.js";import{nombreElementsDifferents as $}from"./ExerciceQcm-DOkcCRBu.js";import a from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const M="c82d0",A={"fr-fr":["3L1QCM-08"],"fr-ch":[]},D=!0,Q="qcm",V="true",b="qcmMono",R="Équation produit nul  (septembre 2022 Métropole)",T="07/11/2024";class w extends a{appliquerLesValeurs(i,r,t){const e=`-\\dfrac{${String(r)}}{${String(i)}}`;this.reponses=[`$${e}$ et $${String(t)}$`,`$${String(-r)}$ et $${String(-t)}$`,`$${String(i)}$ et $${String(-t)}$`],this.enonce=`Les solutions de l'équation  $(${String(i)}x+${String(r)})(-x+${String(t)})$ sont :`,this.correction=`Un produit de facteurs est nul si l'un des facteurs est nul , soit <br>
    $\\left\\{\\begin{array}{l c l}
    ${String(i)}x+${String(r)}&=0\\\\
    \\text{ou}&\\\\
    -x+${String(t)}&=0\\\\
    \\end{array}\\right.$ d'où $\\left\\{\\begin{array}{l c l}
    ${String(i)}x&=-${String(r)}\\\\
     \\text{ou}&\\\\
     -x&=-${String(t)}\\\\
      \\end{array}\\right.$ soit $\\left\\{\\begin{array}{l c l}
       x&=-\\dfrac{${String(r)}}{${String(i)}}\\\\
      \\text{ou}&\\\\
       x&=${String(t)}\\\\
        \\end{array}\\right.$.<br>`,this.correction+=`Donc, l'équation$(${String(i)}x+${String(r)})(-x+${String(t)})=0$ a pour solutions $${o(`x=-\\dfrac{${String(r)}}{${String(i)}} \\text{ et }x=${String(t)}`)}$.`}versionOriginale=()=>{this.appliquerLesValeurs(2,1,3)};versionAleatoire=()=>{do{const r=n([2,4,5]),t=s(2,9),e=n([1,3,7]);this.appliquerLesValeurs(r,e,t)}while($(this.reponses)<3)};constructor(){super(),this.versionAleatoire()}}export{V as amcReady,b as amcType,T as dateDePublication,w as default,D as interactifReady,Q as interactifType,A as refs,R as titre,M as uuid};
