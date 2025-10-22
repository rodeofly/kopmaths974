import o from"./ExerciceSimple-CWWOU0FG.js";import{r as s,e as t,f as r,m as n}from"./embellissements-BYV7mIDn.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const g="",y=!0,E="mathLive",C="986cd",T={"fr-fr":[],"fr-ch":[]};class A extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBase}nouvelleVersion(){const e=s(-5,5,[0,-1,1]);this.reponse=s(-9,9,[-1,0,1]);const i=-e*this.reponse+2025;this.question=`Donner la solution de l'équation : <br>$${e}x+${t(i,0)}=${t(2025,0)}$.`,this.correction=`On procède par étapes successives.<br>
        On commence par isoler $${e}x$ dans le membre de gauche en ajoutant
        $${r(-i)}$ dans chacun des membres, puis on divise
        par $${e}$ pour obtenir la solution : <br>
        $\\begin{aligned}
        ${e}x${r(i)}&=${t(2025,0)}\\\\
       ${e}x&=${t(2025,0)}${r(-i)}\\\\
       ${e}x&=${t(2025-i,0)}\\\\
       x&=\\dfrac{${t(2025-i,0)}}{${e}}\\\\
       x&=${this.reponse}
       \\end{aligned}$<br>
       La solution de l'équation $${e}x+${t(i,0)}=${t(2025,0)}$ est $${n(t(this.reponse,0))}$.
       `,this.interactif&&(this.question+="<br>"),this.canEnonce=this.question,this.canReponseACompleter=""}}export{A as default,y as interactifReady,E as interactifType,T as refs,g as titre,C as uuid};
