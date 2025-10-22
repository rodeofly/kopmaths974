import r from"decimal.js";import{K as d}from"./Exercice-DtXhjCyI.js";import{a,r as $,e as t,m as u}from"./embellissements-BYV7mIDn.js";import p from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const P="Calculer un produit par déduction d'un autre produit",R=!0,T="mathLive",k="06/07/2025",A="a3046",B={"fr-fr":["can6C61","6N2D-flash1"],"fr-ch":[]};class K extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.spacing=1.5,this.spacingCorr=1.5,this.formatChampTexte=d.clavierDeBase}nouvelleVersion(){switch(a([1,2])){case 1:{const i=a([10,100,1e3]),e=$(4,9)*10+$(1,9),s=$(7,9),n=e*s;this.question=`Compléter l'égalité sachant que $${t(e,0)}\\times ${t(s,0)}=${t(n,0)}$.<br> `,this.question+=`$${t(e/i,3)}\\times ${t(s,0)}=$`,this.interactif||(this.question+=" $\\ldots$"),this.canEnonce=`Compléter l'égalité sachant que $${t(e,0)}\\times ${t(s,0)}=${t(n,0)}$. `,this.canReponseACompleter=`$${t(e/i,3)}\\times ${t(s,0)}=\\ldots$`,this.reponse=t(n/i,3);const o=new r(1).div(i);this.correction=`On utilise le résultat du calcul donné : <br>
       $\\begin{aligned}
         ${t(e/i,3)}\\times ${t(s,0)}&=(${t(e,0)}\\times ${t(o,3)})\\times ${t(s,0)}\\\\
         &=${t(e,0)}\\times ${t(s,0)}\\times ${t(o,3)}\\\\
         &=${t(n,0)}\\times ${t(o,3)}\\\\
         &=${u(t(n/i,3))}
         \\end{aligned}$`}break;case 2:{const i=a([10,100,1e3,.1,.01,.001]),e=a([7,8,9,16,17]),s=$(21,59,[30,40,50]),n=new r(s).div(i),o=new r(e).mul(n),m=t(n,3),c=new r(n).mul(i),l=e*c.toNumber();this.question=`Compléter l'égalité sachant que $${e} \\times ${m} = ${t(o,3)}$.<br>
$${e} \\times ${t(c,0)} = $`,this.interactif||(this.question+=" $\\ldots$"),this.canEnonce=`Compléter l'égalité sachant que $${e} \\times ${m} = ${t(o,3)}$. `,this.canReponseACompleter=`$${e} \\times ${t(c,0)} = \\ldots$`,this.reponse=t(l,0),this.correction=`On utilise la relation entre les deux écritures :<br>
$\\begin{aligned}
${e} \\times ${m} &= ${e} \\times \\left(${t(c,0)} \\times ${t(new r(1).div(i),3)}\\right) \\\\
&= ${e} \\times ${t(c,0)} \\times ${t(new r(1).div(i),3)} \\\\
&= ${t(l,0)} \\times ${t(new r(1).div(i),3)} \\\\
&= ${u(t(o,3))}
\\end{aligned}$`}break}}}export{k as dateDePublication,K as default,R as interactifReady,T as interactifType,B as refs,P as titre,A as uuid};
