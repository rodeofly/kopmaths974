import m from"./ExerciceSimple-CWWOU0FG.js";import{a as l,r as a,u as x,e as t,f as r,w as o,h as n,m as $,a0 as c}from"./embellissements-BYV7mIDn.js";import{K as h}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const B="Développer une expression",C=!0,K="mathLive",P="cfe2d",R={"fr-fr":[],"fr-ch":[]};class V extends m{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=h.clavierDeBaseAvecVariable}nouvelleVersion(){const p=l([1,2,3]),i=a(-2,2,0),s=a(-5,5,0);let e="";this.question="Développer ",p===1?(e=`${x(2025,i*2025)}`,this.reponse=e,this.question+=`$A=${t(2025,0)}(x${r(i)})$.`,this.correction=`On développe $A$ :<br>
      $\\begin{aligned}
      A&=${t(2025,0)}\\times x ${o(i)}${t(2025,0)}\\times ${n(i)}\\\\
      &=${$(this.reponse)}
      \\end{aligned}$`):p===2?(e=`${c(0,2025,i*2025,0)}`,this.reponse=[e,e.replace("x^2","x \\times x ")],this.question+=`$A=${t(2025,0)}x(x${r(i)})$.`,this.correction=`On développe $A$ :<br>
      $\\begin{aligned}
      A&=${t(2025,0)}x\\times x ${o(i)}${t(2025,0)}x\\times ${n(i)}\\\\
      &=${$(e)}
      \\end{aligned}$`):(e=`${c(0,2025,s,0)}`,this.reponse=[e,e.replace("x^2","x \\times x ")],this.question+=`$A=x(${t(2025,0)}x${r(s)})$.`,this.correction=`On développe $A$ :<br>
      $\\begin{aligned}
      A&=x\\times${t(2025,0)}x ${o(s)}x\\times ${n(s)}\\\\
       &=${$(e)}
      \\end{aligned}$`),this.interactif&&(this.question+="<br>$A=$"),this.canEnonce=this.question,this.canReponseACompleter=""}}export{V as default,C as interactifReady,K as interactifType,R as refs,B as titre,P as uuid};
