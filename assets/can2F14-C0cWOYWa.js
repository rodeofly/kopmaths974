import{a as c,r as a,a0 as l,Y as p,f as o,m as u,u as b}from"./embellissements-BYV7mIDn.js";import h from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const N="Calculer une ordonnée à partir de l’abscisse d’un point",O=!0,Q="mathLive",k="27/09/2022",w="1d7cc",D={"fr-fr":["can2F14"],"fr-ch":["NR"]};class F extends h{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const d=[["f"],["g"],["h"],["u"],["v"],["w"]],m=[["M"],["N"],["P"],["R"],["S"],["T"]];let t,$,r,e,i,s,n;switch(c([1,2])){case 1:t=a(-10,10,[0,1]),$=a(-9,9,0),e=a(-10,10,0),i=t*e+$,s=c(d),n=c(m),this.question=`Soit $${s}$ la fonction définie sur $\\mathbb{R}$ par : $${s}(x)=${b(t,$)}$<br>
        On note $\\mathscr{C}$ la courbe représentative de la fonction $${s}$ dans un repère.<br>
        $${n}$ est le point de $\\mathscr{C}$ d'abscisse $${e}$.<br>
        Quelle est son ordonnée ?`,this.correction=`Puisque le point $${n}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br>
          $${s}(${e})=${t}\\times ${p(e)}${o($)}=${i}$.<br>
          L'ordonnée du point $${n}$ est $${u(i)}$.`,this.reponse=i;break;case 2:t=a(-2,2,0),$=a(-3,3,0),r=a(-10,10),e=a(-5,5),i=t*e**2+$*e+r,s=c(d),n=c(m),this.question=`Soit $${s}$ la fonction définie sur $\\mathbb{R}$ par : $${s}(x)=${l(0,t,$,r)}$<br>
        On note $\\mathscr{C}$ la courbe représentative de la fonction $${s}$ dans un repère.<br>
        $${n}$ est le point de $\\mathscr{C}$ d'abscisse $${e}$.<br>
        Quelle est son ordonnée ?`,this.correction=`Puisque le point $${n}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br> `,t!==1?this.correction+=`$${s}(${e})=${t}\\times ${p(e)}^2${o($)}\\times${p(e)}${r===0?"":`${o(r)}`}
  =${t*e**2}${o($*e)}${r===0?"":`${o(r)}`}=${i}$.<br>
  L'ordonnée du point $${n}$ est $${u(i)}$.`:this.correction+=`$${s}(${e})= ${p(e)}^2${o($)}\\times${p(e)}${r===0?"":`${o(r)}`}
  =${t*e**2}${o($*e)}${r===0?"":`${o(r)}`}=${i}$.<br>
  L'ordonnée du point $${n}$ est $${u(i)}$.`,this.reponse=i;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{k as dateDePublication,F as default,O as interactifReady,Q as interactifType,D as refs,N as titre,w as uuid};
