import o from"./ExerciceSimple-CWWOU0FG.js";import{r as s,e,m as n}from"./embellissements-BYV7mIDn.js";import r from"decimal.js";import{K as m}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const E="Multiplier des décimaux",q=!0,g="mathLive",D="edbea";class O extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=m.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){let i,t;this.canOfficielle?(t=new r("0.6"),i=7):(t=new r(s(4,9)).div(10),i=s(3,9)),this.question=`$${e(t,1)}\\times${e(i,0)}`,this.interactif?this.question+="=$":this.question+="$",this.canEnonce=this.question,this.canReponseACompleter="",this.reponse=e(t.mul(i),2),this.correction=`On peut calculer ainsi : <br>
    $\\begin{aligned}
    ${e(t,1)}\\times${e(i,0)}&=0,1\\times ${e(t.mul(10),0)}\\times${e(i,0)}\\\\
    &=0,1\\times ${e(t.mul(10).mul(i),0)}\\\\
    &=${n(this.reponse)}
    \\end{aligned}$`}}export{O as default,q as interactifReady,g as interactifType,E as titre,D as uuid};
