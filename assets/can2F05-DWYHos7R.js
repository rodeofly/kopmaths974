import{r as o,a2 as a,m as n}from"./embellissements-BYV7mIDn.js";import s from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const g="Déterminer un antécédent avec la racine carrée",v=!0,D="mathLive",E="1/11/2021",R="82d4a",y={"fr-fr":["can2F05"],"fr-ch":[]};class S extends s{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){this.spacingCorr=2;const e=o(2,5),t=o(1,4)*e,i=o(5,10)*e,r=a(i-t,e);this.question=`Déterminer l'antécédent de $${i}$
    par la fonction $f$ définie sur $\\mathbb{R}_+$ par : $f(x)=${e}\\sqrt{x}+${t}$.`,this.correction=`L'antécédent de $${i}$ (s'il existe) par la fonction $f$ est la solution de l'équation $f(x)=${i}$.<br>
Pour résoudre cette équation, on isole la racine carrée dans le membre de gauche.<br>

    $\\begin{aligned}
    ${e}\\sqrt{x}+${t}&=${i}\\\\[2ex]
    ${e}\\sqrt{x}+${t}~${n(-t,"blue")}&=${i}~${n(-t,"blue")}\\\\[2ex]
    \\dfrac{${e}\\sqrt{x}}{${n(e,"blue")}}&=\\dfrac{${i-t}}{${n(e,"blue")}}\\\\[2ex]
    \\sqrt{x}&=${r.simplifie().texFSD}{\\qquad\\text{ On cherche le nombre dont la racine carrée vaut }}${r.simplifie().texFSD} \\\\[2ex]
    x&=${n(r.puissanceFraction(2).simplifie().texFraction)}
    \\end{aligned}$
    `,this.reponse=r.puissanceFraction(2),this.canEnonce=this.question,this.canReponseACompleter=""}}export{E as dateDePublication,S as default,v as interactifReady,D as interactifType,y as refs,g as titre,R as uuid};
