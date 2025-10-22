import{a as i,ax as o,a2 as a}from"./embellissements-BYV7mIDn.js";import{s as n}from"./deprecatedFractions-D2cbyAQf.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Déterminer la somme de fractions à dénominateurs compatibles",A=!0,E="mathLive",P=!0,R="AMCNum",D="1b4fe",L={"fr-fr":["can4C05"],"fr-ch":["NR"]};class N extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=i(o()),r=i([2,4]),t=a(1,e.d*r);i([!0,!1])?(this.question=`Calculer $${e.texFraction} + ${t.texFraction}$.`,this.correction=`Pour additionner des fractions, on les met au même dénominateur.<br>
     <br>
     Pour écrire $${e.texFraction}$ avec le même dénominateur que $${t.texFraction}$,
     on multiplie son numérateur et son dénominateur par $${r}$.<br><br>
     Ainsi, $${e.texFraction} + ${t.texFraction}
     =\\dfrac{${e.n}\\times ${r}}{${e.d}\\times ${r}}+ ${t.texFraction}
    =${e.reduire(r).texFraction} + ${t.texFraction}
    =\\dfrac{${e.n*r}+${t.n}}{${t.d}}
    =\\dfrac{${e.n*r+t.n}}{${t.d}}${n(e.n*r+t.n,t.d)}$`):(this.question=`Calculer $ ${t.texFraction}+${e.texFraction}$.`,this.correction=`Pour additionner des fractions, on les met au même dénominateur.<br>
     <br>
     Pour écrire $${e.texFraction}$ avec le même dénominateur que $${t.texFraction}$,
     on multiplie son numérateur et son dénominateur par $${r}$.<br><br>
     Ainsi, $ ${t.texFraction}+${e.texFraction}
     = ${t.texFraction}+\\dfrac{${e.n}\\times ${r}}{${e.d}\\times ${r}}
    =${t.texFraction}+${e.reduire(r).texFraction}
    =\\dfrac{${t.n}+${e.n*r}}{${t.d}}
    =\\dfrac{${t.n+e.n*r}}{${t.d}}${n(e.n*r+t.n,t.d)}$`),this.reponse=e.sommeFraction(t).simplifie(),this.canEnonce=this.question,this.canReponseACompleter=""}}export{P as amcReady,R as amcType,N as default,A as interactifReady,E as interactifType,L as refs,y as titre,D as uuid};
