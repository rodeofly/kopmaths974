import{m as e,r}from"./embellissements-BYV7mIDn.js";import s from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const g="a3996",k={"fr-fr":["1A-C4-2"],"fr-ch":[]},A=!0,y="qcm",x="true",C="qcmMono",E="Calculer avec inverse, double, carré, ...",q="29/09/2025";class R extends s{versionOriginale=()=>{this.enonce="L'inverse du double de $5$ est égal à  : ",this.correction=` Le double de $5$ est $10$. <br>
    L'inverse de $10$ est $\\dfrac{1}{10}$.<br>
    L'inverse du double de $5$ est donc égal à  $${e("\\dfrac{1}{10}")}$.
  `,this.reponses=["$\\dfrac{1}{10}$","$10$","$\\dfrac{1}{5}$","$\\dfrac{5}{2}$"]};versionAleatoire=()=>{switch(r(1,7)){case 1:{const $=2*r(2,10)+1;this.enonce=`L'inverse du double de $${$}$ est égal à   : `,this.correction=` Le double de $${$}$ est $${2*$}$. <br>
    L'inverse de $${2*$}$ est $\\dfrac{1}{${2*$}}$.<br>
    L'inverse du double de $${$}$ est donc égal à   $${e(`\\dfrac{1}{${2*$}}`)}$.
  `,this.reponses=[`$\\dfrac{1}{${2*$}}$`,`$${2*$}$`,`$\\dfrac{2}{${$}}$`,`$\\dfrac{${$}}{2}$`]}break;case 2:{const $=2*r(2,10)+1;this.enonce=`Le double de l'inverse  de $${$}$ est égal à   : `,this.correction=` L'inverse de $${$}$ est $\\dfrac{1}{${$}}$. <br>
    Le double  de $\\dfrac{1}{${$}}$ est $\\dfrac{2}{${$}}$.<br>
    Le double de l'inverse  de $${$}$ est égal à    $${e(`\\dfrac{2}{${$}}`)}$.
  `,this.reponses=[`$\\dfrac{2}{${$}}$`,`$${2*$}$`,`$\\dfrac{1}{${2*$}}$`,`$\\dfrac{${$}}{2}$`]}break;case 3:{const $=r(3,10);this.enonce=`L'inverse du carré de $${$}$ est égal à   : `,this.correction=` Le carré de $${$}$ est $${$}^2 = ${$*$}$. <br>
    L'inverse de $${$*$}$ est $\\dfrac{1}{${$*$}}$.<br>
    L'inverse du carré de $${$}$ est donc égal à   $${e(`\\dfrac{1}{${$*$}}`)}$.
  `,this.reponses=[`$\\dfrac{1}{${$*$}}$`,`$${$*$}$`,`$\\dfrac{1}{${2*$}}$`,`$\\dfrac{2}{${$*$}}$`]}break;case 4:{const $=r(2,8);this.enonce=`Le double du carré de $${$}$ est égal à   : `,this.correction=` Le carré de $${$}$ est $${$}^2 = ${$*$}$. <br>
    Le double de $${$*$}$ est $2 \\times ${$*$} = ${2*$*$}$.<br>
    Le double du carré de $${$}$ est égal à    $${e(`${2*$*$}`)}$.
  `,this.reponses=[`$${2*$*$}$`,`$${$*$}$`,`$${2*$}^2$`,`$2${$}$`]}break;case 5:{const $=r(3,6);this.enonce=`Le carré du double de $${$}$ est égal à   : `,this.correction=` Le double de $${$}$ est $2 \\times ${$} = ${2*$}$. <br>
    Le carré de $${2*$}$ est $${2*$}^2 = ${4*$*$}$.<br>
    Le carré du double de $${$}$ est égal à    $${e(`${4*$*$}`)}$.
  `,this.reponses=[`$${4*$*$}$`,`$${2*$*$}$`,`$${4*$}$`,`$${$*$}$`]}break;case 6:{const $=2*r(2,10);this.enonce=`L'inverse de la moitié de $${$}$ est égal à   : `,this.correction=` La moitié de $${$}$ est $\\dfrac{${$}}{2} = ${$/2}$. <br>
    L'inverse de $${$/2}$ est $\\dfrac{1}{${$/2}}$.<br>
    L'inverse de la moitié de $${$}$ est donc égal à   $${e(`\\dfrac{1}{${$/2}}`)}$.
  `,this.reponses=[`$\\dfrac{1}{${$/2}}$`,`$\\dfrac{1}{${2*$}}$`,`$\\dfrac{2}{${$}}$`,`$${$/2}$`]}break;case 7:default:{const $=2*r(2,10);this.enonce=`La moitié de l'inverse de $${$}$ est égale à   : `,this.correction=` L'inverse de $${$}$ est $\\dfrac{1}{${$}}$. <br>
    La moitié de $\\dfrac{1}{${$}}$ est $\\dfrac{1}{2} \\times \\dfrac{1}{${$}} = \\dfrac{1}{${2*$}}$.<br>
    La moitié de l'inverse de $${$}$ est égale à    $${e(`\\dfrac{1}{${2*$}}`)}$.
  `,this.reponses=[`$\\dfrac{1}{${2*$}}$`,`$\\dfrac{2}{${$}}$`,`$\\dfrac{${$}}{2}$`,`$\\dfrac{1}{${$}}$`]}break}};constructor(){super(),this.versionAleatoire()}}export{x as amcReady,C as amcType,q as dateDePublication,R as default,A as interactifReady,y as interactifType,k as refs,E as titre,g as uuid};
