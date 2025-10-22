import{r as t}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="10/08/2025",A="d388c",O={"fr-fr":["1A-C9-5"],"fr-ch":[]},S=!0,T="qcm",P="true",R="qcmMono",k="Travailler les expressions rationnelles (1).";class C extends o{versionOriginale=()=>{this.enonce="Soit $x$ un réel non nul.<br>",this.enonce="Soit $x$ un réel non nul.<br>",this.enonce+="À quelle expression est égale $\\dfrac{4x^2}{\\dfrac{2}{x^2}}$?",this.correction=`On peut simplifier l'expression : <br>$\\begin{aligned}
        \\dfrac{4x^2}{\\dfrac{2}{x^2}}&=4x^2 \\times \\dfrac{x^2}{2}\\\\
        &=\\dfrac{4x^4}{2}\\\\
        &=2x^4.
     \\end{aligned}$`,this.reponses=["$2x^4$","$2$ ","$8$ ","$8x^4$ "]};versionAleatoire=()=>{const r=t(2,5),i=t(2,5),e=t(2,7),n=t(2,5);this.enonce="Soit $x$ un réel non nul.<br>",this.enonce+=`À quelle expression est égale $\\dfrac{${n*e}x^{${r}}}{\\dfrac{${e}}{x^${i}}}$?`,this.correction=`On peut simplifier l'expression : <br>
              $\\begin{aligned}
       \\dfrac{${n*e}x^{${r}}}{\\dfrac{${e}}{x^${i}}}&=${n*e}x^{${r}} \\times \\dfrac{x^${i}}{${e}}\\\\
        &=\\dfrac{${n*e}x^{${r+i}}}{${e}}\\\\
        &=${n}x^{${r+i}}.
     \\end{aligned}$`,this.reponses=[`$${n}x^{${r+i}}$`,`$${n}x^{${r-i}}$`,`$${n*e}x^{${r-i}}$`,`$${n*e}x^{${r+i}}$`]};constructor(){super(),this.versionAleatoire()}}export{P as amcReady,R as amcType,y as dateDePublication,C as default,S as interactifReady,T as interactifType,O as refs,k as titre,A as uuid};
