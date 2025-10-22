import o from"./ExerciceSimple-CWWOU0FG.js";import{r as n,f as r,Y as s,m as $}from"./embellissements-BYV7mIDn.js";import{K as u}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const E="Calculer un terme d'une suite définie par récurrence",S=!0,v="mathLive",O="df70c";class q extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=u.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){let e,i,t;this.canOfficielle?(e=2,i=1,t=2,this.reponse=11):(e=n(-3,3,[0,1,-1]),i=n(-5,5,0),t=n(1,5)),this.reponse=e**2*t+e*i+i,this.question=`Soit la suite $(u_n)$ définie  par $u_0 = ${t}$ et pour $n \\in \\mathbb{N}$, 
    $u_{n+1} = ${e}u_n ${r(i)}$.<br>
    $u_2=$`,this.interactif||(this.question+=" $\\ldots$"),this.correction=`On calcule d'abord $u_1$ : <br>   
      $\\begin{aligned}
      u_1&=${e}\\times u_0 ${r(i)}\\\\
      u_1&=${e}\\times ${s(t)} ${r(i)}\\\\
      &=${e*t+i}     
      \\end{aligned}$<br>
      On obtient donc pour $u_2$ :<br>
      $\\begin{aligned}
      u_2&=${e}\\times u_1 ${r(i)}\\\\
      u_2&=${e}\\times ${s(e*t+i)} ${r(i)}\\\\
      &=${$(this.reponse.toFixed(0))}     
      \\end{aligned}$`,this.canEnonce=`Soit la suite $(u_n)$ définie  par $u_0 = ${t}$ et pour $n \\in \\mathbb{N}$, 
      $u_{n+1} = ${e}u_n ${r(i)}$.`,this.canReponseACompleter="$u_2=\\ldots$"}}export{q as default,S as interactifReady,v as interactifType,E as titre,O as uuid};
