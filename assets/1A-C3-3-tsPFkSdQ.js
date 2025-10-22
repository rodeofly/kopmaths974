import{m as t,r as i}from"./embellissements-BYV7mIDn.js";import r from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const x="10/08/2025",A="65cdf",y={"fr-fr":["1A-C3-3"],"fr-ch":[]},N=!0,S="qcm",E="true",O="qcmMono",C="Calculer avec des puissances (3)";class P extends r{versionOriginale=()=>{this.enonce="Soit $n$ un entier non nul. À quelle expression est égale $\\left(3^n\\right)^{2}$ ?",this.correction=`On applique la propriété des puissances de puissances d'un réel : <br>
    Soit $n\\in \\mathbb{N}$, et $p \\in \\mathbb{N}$, on a : 
     $\\left(a^{n}\\right)^{p}=a^{np}$<br>
    $\\begin{aligned}\\left(3^{n}\\right)^{2}&=3^{2n}\\\\
    &=\\left(3^{2}\\right)^{n}\\\\
    &=9^{n}
    \\end{aligned}$`,t("$3^{2n}$"),this.reponses=["$9^{n}$","$3^{n^{2}}$","$6^{n}$","Aucune de ces propositions"]};versionAleatoire=()=>{const n=i(2,3),e=i(2,4);this.enonce=`Soit $n$ un entier.  À quelle expression est égale $\\left(${e}^{n}\\right)^{${n}}$ ?`,this.correction=`On applique la propriété des puissances de puissances d'un réel : <br>
    Soit $n\\in \\mathbb{N}$, et $p \\in \\mathbb{N}$, on a : 
     $\\left(a^{n}\\right)^{p}=a^{np}$<br>
    $\\begin{aligned}\\left(${e}^{n}\\right)^{${n}}&=${e}^{${n}n}\\\\
    &=\\left(${e}^{${n}}\\right)^{n}\\\\
    &=${e**n}^{n}
    \\end{aligned}$`,t(`$${e}^{2n}$`),this.reponses=[`$${e**n}^{n}$`,`$${e}^{n^{${n}}}$`,`$${e}^{${n}+n}$`,`$${e*n}^{n}$`]};constructor(){super(),this.versionAleatoire()}}export{E as amcReady,O as amcType,x as dateDePublication,P as default,N as interactifReady,S as interactifType,y as refs,C as titre,A as uuid};
