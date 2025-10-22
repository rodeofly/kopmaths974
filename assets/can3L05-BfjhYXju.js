import{K as f}from"./Exercice-DtXhjCyI.js";import{a as p,r as $,u as i,Y as a,m as d,F as u}from"./embellissements-BYV7mIDn.js";import b from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const D="Calculer le produit des solutions d’une équation produit nul",N=!0,T="mathLive",k="25/10/2021",I="27/07/2025",B="ab332",K={"fr-fr":["can3L05"],"fr-ch":[]};class M extends b{constructor(){super(),this.versionQcmDisponible=!0,this.typeExercice="simple",this.nbQuestions=1,this.spacingCorr=1.5,this.optionsChampTexte={texteAvant:"<br>"},this.formatChampTexte=f.clavierDeBaseAvecFraction,this.versionQcm=!1}nouvelleVersion(){const l="On reconnaît une équation produit nul. <br>Un produit de facteurs est nul, si et seulement si l'un au moins de ses facteurs est nul.<br>";switch(this.versionQcm?p([2,3]):p([1,2,3])){case 1:{const e=$(-10,10),t=$(-10,10,[0,e]);this.question=this.versionQcm?`Le produit des solutions de l'équation ${e===0?`$x(${i(1,t)})=0$`:`$(${i(1,e)})(${i(1,t)})=0$`} est égal à :`:`Calculer le produit des solutions de l'équation ${e===0?`$x(${i(1,t)})=0$`:`$(${i(1,e)})(${i(1,t)})=0$`}.`,this.correction=l+`
$\\begin{aligned}
${e===0?`x(${i(1,t)})&=0`:`(${i(1,e)})(${i(1,t)})&=0`}\\\\
${i(1,e)}=0 &\\text{ ou } ${i(1,t)}=0\\\\
x=${-e} &\\text{ ou } x=${-t}
\\end{aligned}$<br>
Le produit de ces soltions est donc égal à : $${a(-e)}\\times ${a(-t)}=${d(e*t)}$.`,this.reponse=this.versionQcm?`$${e*t}$`:e*t,this.distracteurs=[`$${-e-t}$`,"$0$",`$${-e*t}$`,`$${e+t}$`]}break;case 2:{const e=$(2,5),t=$(2,5,[e]),s=$(-8,8,[0]),o=$(-8,8,[0,s]),n=new u(-s,e),r=new u(-o,t),c=new u(s*o,e*t);this.question=this.versionQcm?`Le produit des solutions de l'équation $(${i(e,s)})(${i(t,o)})=0$ est égal à :`:`Calculer le produit des solutions de l'équation $(${i(e,s)})(${i(t,o)})=0$.`,this.correction=l+`
$\\begin{aligned}
(${i(e,s)})(${i(t,o)})&=0\\\\
${i(e,s)}=0 &\\text{ ou } ${i(t,o)}=0\\\\
${e}x=${-s} &\\text{ ou } ${t}x=${-o}\\\\
x=${n.texFractionSimplifiee} &\\text{ ou } x=${r.texFractionSimplifiee}
\\end{aligned}$<br>
Le produit de ces soltions est donc égal à : $${n.simplifie().ecritureParentheseSiNegatif}\\times ${r.simplifie().ecritureParentheseSiNegatif}=${d(c.texFractionSimplifiee)}$.`,this.reponse=this.versionQcm?`$${c.texFractionSimplifiee}$`:{reponse:{value:c.texFractionSimplifiee,options:{fractionEgale:!0}}};const m=n.sommeFraction(r),h=new u(n.numIrred*r.numIrred,1),x=c.oppose();this.distracteurs=[`$${m.texFractionSimplifiee}$`,`$${h.texFractionSimplifiee}$`,`$${x.texFractionSimplifiee}$`,"$0$"]}break;case 3:{const e=$(-6,6,[0]),t=$(-6,6,[0,e]),s=$(2,5),o=$(2,5),n=-s*e,r=-o*t,c=e*t;this.question=this.versionQcm?`Le produit des solutions de l'équation $(${i(s,n)})(${i(o,r)})=0$ est égal à :`:`Calculer le produit des solutions de l'équation $(${i(s,n)})(${i(o,r)})=0$.`,this.correction=l+`
$\\begin{aligned}
(${i(s,n)})(${i(o,r)})&=0\\\\
${i(s,n)}=0 &\\text{ ou } ${i(o,r)}=0\\\\
${s}x=${-n} &\\text{ ou } ${o}x=${-r}\\\\
x=${e} &\\text{ ou } x=${t}
\\end{aligned}$<br>
Le produit de ces soltions est donc égal à : $${a(e)}\\times ${a(t)}=${d(c)}$.`,this.reponse=this.versionQcm?`$${c}$`:c,this.distracteurs=[`$${e+t}$`,`$${-c}$`,`$${Math.abs(e-t)}$`,"$0$"]}break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{I as dateDeModifImportante,k as dateDePublication,M as default,N as interactifReady,T as interactifType,K as refs,D as titre,B as uuid};
