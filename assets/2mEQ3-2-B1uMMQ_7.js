import{r as f,z as t,f as e,Z as o,t as d,m as x,l as y}from"./embellissements-BYV7mIDn.js";import{E as q}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const S="Déterminer si une équation cartésienne est l'équation d'un cercle",T="05/09/2025",z=!1,G="4efcd",J={"fr-fr":[],"fr-ch":["2mEqCar-2"]};class L extends q{constructor(){super(),this.nbQuestions=3}nouvelleVersion(){for(let $=0,m=0;$<this.nbQuestions&&m<50;){let p="",l="",r=f(-12,12,[0]),s=f(-10,10),a=f(-10,10),c=s**2+a**2-r**2*(r>0?1:-1),i=-2*s,n=-2*a,u="";c===0?u=`x^2 + y^2 ${t(i)}x ${t(n)}y = 0`:u=`x^2 + y^2 ${t(i)}x ${t(n)}y ${e(c)} = 0`,p+=`Déterminer si l'équation $${u}$ est l'équation d'un cercle. Si oui, donner son centre et son rayon.`,l+=`Une équation représente un cercle si on peut la mettre sous la forme 
      \\[(x - x_0)^2 + (y - y_0)^2 = r^2\\]
      avec $(x_0\\,;\\,y_0)$ le centre du cercle et $r$ son rayon.<br>
      On commence par appliquer la technique de la complétion du carré pour faire apparaître les carrés parfaits $(x - x_0)^2$ et $(y - y_0)^2$ dans l'équation initiale.<br>
      On a <br>
      $\\begin{aligned}
      &${u} \\\\
      \\iff& x^2 ${t(i)}x + y^2  ${t(n)}y ${e(c)} = 0 \\\\
      \\iff& x^2 ${t(i)}x ${o(`\\,+ \\left(\\frac{${i}}{2}\\right)^2 - \\left(\\frac{${i}}{2}\\right)^2`,"red")} + y^2  ${t(n)}y ${o(`\\,+ \\left(\\frac{${n}}{2}\\right)^2 - \\left(\\frac{${n}}{2}\\right)^2`,"red")} ${e(c)} = 0 \\\\
      \\iff& ${o(`\\,x^2 ${t(i)}x ${e((i/2)**2)}`,"green")}  ${o(`\\,${e(-((i/2)**2))}`,"orange")} + ${o(`\\,y^2  ${t(n)}y ${e((n/2)**2)}`,"blue")}  ${o(`\\,${e(-((n/2)**2))} ${e(c)}`,"orange")} = 0 \\\\
      \\iff& ${o(`\\,(x ${e(-s)})^2`,"green")} + ${o(`\\,(y ${e(-a)})^2`,"blue")} = ${o(`\\,${r<0?"-":""}${r**2}`,"orange")}
      \\end{aligned}$<br>
      `,r>0?(l+=`$\\iff(x ${e(-s)})^2 + (y ${e(-a)})^2 =${r}^2$<br>`,l+=`${d("C'est l'équation d'un cercle de centre")} $${x(`(${s}\\,;\\,${a})`)}$ ${d("et de rayon")} $${x(`${r}`)}$.`):r<0&&(l+=`Le membre de droite de l'équation ne peut pas être écrit sous la forme d'un carré, donc ${d("ce n'est pas l'équation d'un cercle")}.`),this.questionJamaisPosee($,r,s,a)&&(this.listeQuestions[$]=p,this.listeCorrections[$]=l,$++),m++}y(this)}}export{T as dateDePublication,L as default,z as interactifReady,J as refs,S as titre,G as uuid};
