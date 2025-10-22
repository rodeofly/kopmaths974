import{r as c,f as n,Y as s,z as o,m as l,l as m}from"./embellissements-BYV7mIDn.js";import{E as d}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const Q="Déterminer une équation cartésienne d'un cercle",v="04/09/2025",D=!1,A="c0c0d",L={"fr-fr":[],"fr-ch":["2mEqCar-1"]};class S extends d{constructor(){super(),this.nbQuestions=3}nouvelleVersion(){for(let i=0,a=0;i<this.nbQuestions&&a<50;){let u="",$="",r=c(1,10),e=c(-10,10),t=c(-10,10);u+=`Déterminer une équation cartésienne du cercle de rayon ${r} est de centre $(${e}\\,;\\,${t})$.`,$+=`La formule de l'équation d'un cercle de centre $(x_0\\,;\\,y_0)$ et de rayon $r$ est :<br>
      \\[(x - x_0)^2 + (y - y_0)^2 = r^2\\]<br>
      Ici, $x_0 = ${e}, y_0 = ${t}$ et $r=${r}$. L'équation du cercle recherché est <br>
      \\[(x  ${n(-e)})^2 + (y  ${n(-t)})^2 = ${r}^2\\]
      Pour la mettre sous la forme cartésienne, on développe :<br><br>
      $\\begin{aligned}
      & x^2 - 2\\times ${s(e)}\\times x + ${s(e)}^2 + y^2 - 2\\times ${s(t)}\\times y + ${s(t)}^2 = ${r**2} \\\\
      & x^2 + y^2  ${o(-2*e)}x ${o(-2*t)}y  ${n(e**2+t**2-r**2)} = 0
      \\end{aligned}$<br>
      Une équation cartésienne du cercle est donc :
      $${l(`x^2 + y^2  ${o(-2*e)}x ${o(-2*t)}y  ${n(e**2+t**2-r**2)} = 0`)}$`,this.questionJamaisPosee(i,r,e,t)&&(this.listeQuestions[i]=u,this.listeCorrections[i]=$,i++),a++}m(this)}}export{v as dateDePublication,S as default,D as interactifReady,L as refs,Q as titre,A as uuid};
