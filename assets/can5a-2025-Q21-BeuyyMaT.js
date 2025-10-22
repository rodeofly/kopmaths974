import{a as s,r as o,e as t,m as r}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceCan-BGFYQSAT.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceSimple-CWWOU0FG.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const q="Calculer facilement avec la distributivité",y=!0,N="mathLive",O="a343f",R={"fr-fr":[],"fr-ch":[]};class A extends c{enonce(i,e){if(i==null||e==null){i=s([101,1001]);const n=o(1,8);e=n*10+o(1,8,n)}this.reponse=i*e,this.question=`$${t(i,0)} \\times ${e}$ `,this.correction=`On décompose le calcul : <br>
    $\\begin{aligned}
    ${t(i,0)}\\times${e}&=${t(i-1,0)}\\times${e}+1\\times${e}\\\\
    &=${t((i-1)*e,0)}+${e}\\\\
    &=${r(t(this.reponse,0))}
    \\end{aligned}$`,this.canEnonce=this.question,this.canReponseACompleter="",this.interactif&&(this.question+="$=$")}nouvelleVersion(){this.canOfficielle?this.enonce(101,13):this.enonce()}}export{A as default,y as interactifReady,N as interactifType,R as refs,q as titre,O as uuid};
