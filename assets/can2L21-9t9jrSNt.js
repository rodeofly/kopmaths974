import{r as o,a as x,f as r,Z as y,Y as q,m as v}from"./embellissements-BYV7mIDn.js";import E from"./ExerciceSimple-CWWOU0FG.js";import{K as R}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const U="Résoudre une inéquation du type $\\dfrac{x+a}{b}\\le c$",k=!0,w="mathLive",O="05/10/2025",V="94237",X={"fr-fr":["can2L21"],"fr-ch":[]};class Y extends E{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=R.clavierEnsemble,this.optionsDeComparaison={intervalle:!0}}nouvelleVersion(){const t=o(-10,10,0),e=o(-10,10,[-1,0,1]),s=o(-10,10,0),u=["\\leqslant","<","\\geqslant",">"],[$,c,f,m]=u,p=o(0,3),a=u[p],h=[f,m,$,c][p],i=e<0?h:a,d=[c,m].includes(a);let n;[$,c].includes(i)?n=`]-\\infty\\,;\\,${s*e-t}${d?"[":"]"}`:n=`${d?"]":"["}${s*e-t}\\,;\\,+\\infty[`;const l=(b=!1)=>`\\dfrac{x${r(t)}}{${e}}${b?"&":""}${a}${s}`;switch(x([1])){case 1:this.interactif?this.question=` Donner la solution de l'inéquation $${l()}$.<p>On attend une réponse sous forme d'intervalle.</p>`:this.question=` Résoudre l'inéquation $${l()}$.`,this.correction=`\\[
\\begin{aligned}
${l(!0)}\\\\
x${r(t)}&${e<0?`\\,${y(i)}\\,`:i}${s}\\times ${q(e)}\\\\
x${r(t)}&${i}${s*e}\\\\
x&${i}${s*e}${r(-t)}\\\\
x&${i}${s*e-t}\\\\
\\end{aligned}
\\]`,this.correction+=`L'ensemble des solutions est donc $${v(n)}$.`,this.reponse=n;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{O as dateDePublication,Y as default,k as interactifReady,w as interactifType,X as refs,U as titre,V as uuid};
