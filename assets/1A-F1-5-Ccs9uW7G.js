import{m as r,a as o,F as c,r as a}from"./embellissements-BYV7mIDn.js";import s from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const M="20/09/2025",R="d294c",q={"fr-fr":["1A-F1-5"],"fr-ch":[]},w=!0,T="qcm",j="true",C="qcmMono",D="Calculer une image avec le second degré (2)";class P extends s{versionOriginale=()=>{this.enonce=`On considère la fonction  $f$ définie sur $\\mathbb{R}$ par $f(x)=7-\\dfrac{1}{2}(x-3)^2$<br>
    L'image de $3$ par cette fonction est : `,this.correction=`On remplace $x$ par $3$ dans l'expression de $f$ :<br>
     
    $\\begin{aligned}
    f\\left(3\\right)&=7-\\dfrac{1}{2}(3-3)^2\\\\
    &=7-\\dfrac{1}{2}\\times 0\\\\
    &=7
    \\end{aligned}$<br>
    
    
    L'image de $3$  par la  fonction  $f$ est : $${r("7")}$.`,this.reponses=["$7$","$7-\\dfrac{1}{2}$","$7-\\dfrac{1}{2}(9+9)$","$0$"]};versionAleatoire=()=>{const n=o([[1,2],[1,3],[2,3],[3,4],[3,5],[4,5],[5,3],[4,3],[5,4],[6,5],[5,3],[2,5]]),t=new c(n[0],n[1]),e=n[0]+1,$=a(2,5),i=o([$,$-1,$+1]);this.enonce=`On considère la fonction  $f$ définie sur $\\mathbb{R}$ par $f(x)=${e}-${t.texFraction}(x-${$})^2$<br>
    L'image de $${i}$ par cette fonction est : `,this.correction=`On remplace $x$ par $${i}$ dans l'expression de $f$ :<br>`,i===$?(this.correction=`
    $\\begin{aligned}
    f\\left(${i}\\right)&=${e}-${t.texFraction}(${i}-${$})^2\\\\
    &=${e}-${t.texFraction}\\times 0\\\\
    &=${e}
    \\end{aligned}$<br>
    
    
    L'image de $${i}$  par la  fonction  $f$ est : $${r(e)}$.`,this.reponses=[`$${e}$`,"$0$",`$${e}-${t.texFraction}$`,`$${e}-${t.texFraction}(${i**2}+${$**2})$`]):(this.correction=`
    $\\begin{aligned}
    f\\left(${i}\\right)&=${e}-${t.texFraction}(${i}-${$})^2\\\\
    &=${e}-${t.texFraction}\\times 1\\\\
    &=${t.entierMoinsFraction(e).texFraction}
    \\end{aligned}$<br>
    
    
    L'image de $${i}$  par la  fonction  $f$ est : $${r(t.entierMoinsFraction(e).texFraction)}$.`,this.reponses=[`$${t.entierMoinsFraction(e).texFraction}$`,`$${e}$`,`$${t.ajouteEntier(e).texFraction}$`,`$${new c(1,n[1]).texFraction}$`])};constructor(){super(),this.versionAleatoire()}}export{j as amcReady,C as amcType,M as dateDePublication,P as default,w as interactifReady,T as interactifType,q as refs,D as titre,R as uuid};
