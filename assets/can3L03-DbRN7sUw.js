import{r as i,f as s}from"./embellissements-BYV7mIDn.js";import r from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const q="Résoudre une équation du type $ax+b=c$",g=!0,y="mathLive",E=!0,v="AMCNum",A="cb6b3",R={"fr-fr":["can3L03"],"fr-ch":[]};class C extends r{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=i(-5,5,[0,-1,1]);this.reponse=i(-9,9,[-1,0,1]);const t=i(-9,9,[0]),o=t-e*this.reponse;this.question=`Donner la solution de l'équation : <br>$${e}x${s(o)}=${t}$`,this.correction=`On procède par étapes successives :<br>
    On commence par isoler $${e}x$ dans le membre de gauche en ajoutant
    $${s(-o)}$ dans chacun des membres, puis on divise
    par $${e}$ pour obtenir la solution : <br>
     $\\begin{aligned}
     ${e}x${s(o)}&=${t}\\\\
    ${e}x&=${t}${s(-o)}\\\\
    ${e}x&=${t-o}\\\\
    x&=\\dfrac{${t-o}}{${e}}\\\\
    x&=${this.reponse}
    \\end{aligned}$<br>
    La solution de l'équation est : $${this.reponse}$.
    `,this.canEnonce=this.question,this.canReponseACompleter=""}}export{E as amcReady,v as amcType,C as default,g as interactifReady,y as interactifType,R as refs,q as titre,A as uuid};
