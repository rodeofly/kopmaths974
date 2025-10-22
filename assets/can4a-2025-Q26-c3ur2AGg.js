import{r as o,e,m as n}from"./embellissements-BYV7mIDn.js";import r from"./ExerciceCan-BGFYQSAT.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceSimple-CWWOU0FG.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const v="Convertir des heures décimales en minutes",E=!0,b="mathLive",g="3422k",q={"fr-fr":[],"fr-ch":["NR"]};class N extends r{enonce(t){t==null&&(t=o(1,3)+o(2,8)/10);const i=t-Math.floor(t);this.question=`$${e(t,1)}\\text{ h }$`,this.correction=`On décompose $${e(t,1)}\\text{ h }$ :<br>
     $\\begin{aligned}
     ${e(t,1)}\\text{ h }&=${e(Math.floor(t),0)} \\text{ h } +${e(t-Math.floor(t),1)}\\text{ h }\\\\
     &=${Math.floor(t)}\\times 60 \\text{ min }+${e(i,1)}\\times 60 \\text{ min }\\\\
     &= ${Math.floor(t)*60} \\text{ min } +${e(i*60,0)} \\text{ min }\\\\
     &=${n(e(t*60,0))} \\text{ min }
     \\end{aligned}$`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots\\text{ min}$",this.reponse=Math.round(t*60),this.optionsChampTexte={texteApres:" min"},this.question+=this.interactif?" $=$":"$=\\ldots$ min"}nouvelleVersion(){this.canOfficielle?this.enonce(2.4):this.enonce()}}export{N as default,E as interactifReady,b as interactifType,q as refs,v as titre,g as uuid};
