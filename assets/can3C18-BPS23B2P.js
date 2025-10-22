import p from"./ExerciceSimple-CWWOU0FG.js";import{a as o,ax as d,F as r,r as l,m as $,x as c}from"./embellissements-BYV7mIDn.js";import{K as m}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const T="Calculer une valeur dans une égalité de quotients",D=!0,L="mathLive",R="17/10/2024",B="49a2b",K={"fr-fr":["can3C18"],"fr-ch":[]};class S extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.spacingCorr=1.5,this.formatChampTexte=m.clavierDeBaseAvecFraction}nouvelleVersion(){const t=o(["AB","AC","BC","EF","HT","CD","RT","GR","JK"]),e=o(d()),s=new r(e.n,e.d),i=l(2,10,e.d),u=o([!0,!1]),a=o([!0,!1]);let n;u===!0?(n=new r(i*e.d,e.n).texFraction,this.reponse={reponse:{value:n}},this.question=`Calculer $${t}$ sachant que ${a===!0?`$\\dfrac{${i}}{${t}}=${s.texFraction}$.`:`$${s.texFraction}=\\dfrac{${i}}{${t}}$.`}`,this.correction=`Les produits en croix sont égaux :<br>
    $\\begin{aligned}
    ${t}\\times${e.n}&=${i}\\times ${e.d}\\\\
    ${t}&=${c(i*e.d,e.n)===1?`${$(n)}`:`${n}`}
    \\end{aligned}$<br>
    ${c(i*e.d,e.n)===1?"":`On peut simplifier : $${t}=${n}${new r(i*e.d,e.n).texSimplificationAvecEtapes(!1,"#f15929")}$`}`):(n=new r(i*e.n,e.d).texFraction,this.reponse={reponse:{value:n}},this.question=`Calculer $${t}$ sachant que ${a===!0?`$\\dfrac{${t}}{${i}}=${s.texFraction}$.`:`$${s.texFraction}=\\dfrac{${t}}{${i}}$.`}`,this.correction=this.correction=`Les produits en croix sont égaux :<br>
    $\\begin{aligned}
    ${t}\\times${e.d}&=${i}\\times ${e.n}\\\\
    ${t}&=${c(i*e.n,e.d)===1?`${$(n)}`:`${n}`}
    \\end{aligned}$<br>
    ${c(i*e.n,e.d)===1?"":`On peut simplifier : $${t}=${n}${new r(i*e.n,e.d).texSimplificationAvecEtapes(!1,"#f15929")}$`}`),this.interactif&&(this.question+=`<br> $${t}=$`),this.correction+=`
         `,this.canEnonce=this.question,this.canReponseACompleter=`$${t}=\\ldots$`}}export{R as dateDePublication,S as default,D as interactifReady,L as interactifType,K as refs,T as titre,B as uuid};
