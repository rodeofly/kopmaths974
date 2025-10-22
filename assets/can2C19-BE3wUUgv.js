import s from"./ExerciceSimple-CWWOU0FG.js";import{r as t,a as $,e as i,m as o}from"./embellissements-BYV7mIDn.js";import{K as c}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const g="Calculer astucieusement avec un pourcentage",D=!0,E="mathLive",y="15/09/2024",q="1abca",A={"fr-fr":["can2C19"],"fr-ch":["9NO14-14"]};class P extends s{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierDeBase,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1}nouvelleVersion(){const r=[[25,t(1,15,10),4],[50,t(21,49,[30,40]),2],[75,t(1,12,[5,10]),4]],e=$(r);this.reponse=e[0]===75?i(e[1]*3,1):i(e[1],1),this.question=`Calculer $${e[2]*e[1]}\\,\\%$ de $${e[0]}$.`,this.interactif&&(this.question+="<br>"),this.canEnonce=this.question,this.canReponseACompleter="",this.correction=`Calculer $${e[2]*e[1]}\\,\\%$ de $${e[0]}$ revient à calculer $${e[0]}\\,\\%$ de $${e[2]*e[1]}$.<br>
  `,this.correctionDetaillee&&(this.correction+=`En effet : <br>
    $\\begin{aligned}
    ${e[2]*e[1]}\\,\\% \\text{ de } ${e[0]}&= \\dfrac{${e[2]*e[1]}}{100}\\times ${e[0]}\\\\
    &=${e[2]*e[1]}\\times \\dfrac{1}{100}\\times${e[0]}\\\\
    &=${e[2]*e[1]}\\times${e[0]}\\times \\dfrac{1}{100}\\\\
    &=\\dfrac{${e[0]}}{100}\\times ${e[2]*e[1]} \\\\
    &=${e[0]}\\,\\% \\text{ de } ${e[2]*e[1]}
    \\end{aligned}$<br>`),this.correction+=`  Prendre $${e[0]}\\,\\%$ d'un nombre revient à ${e[0]===75?`le diviser par $${e[2]}$ puis à multiplier par $3$ (c'est-à-dire en prendre les trois quarts)`:`le diviser par $${e[2]}$`}.<br>
     ${e[0]===75?`$${e[2]*e[1]}\\div ${e[2]}=${e[1]}$ et $${e[1]}\\times 3=${e[1]*3}$.<br>`:""}
     Ainsi, $${e[2]*e[1]}\\,\\%$ de $${e[0]}$ est égal à $${o(this.reponse)}$. `}}export{y as dateDePublication,P as default,D as interactifReady,E as interactifType,A as refs,g as titre,q as uuid};
