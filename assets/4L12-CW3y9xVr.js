import{r as d,t as h,m as $,l as B}from"./embellissements-BYV7mIDn.js";import{t as p}from"./style-CcGLZIPY.js";import{E as O}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const L="Démontrer l'équivalence de deux programmes de calcul",V="21/02/2022",z="",H="501f9",K={"fr-fr":["4L12"],"fr-ch":["11FA4-1"]};class N extends O{constructor(){super(),this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.video="https://www.youtube.com/watch?v=-iw4OkMhgCA"}nouvelleVersion(){for(let r=0,u,b,o,n,c,x,a,s,g,f,q,C=0;r<this.nbQuestions&&C<50;){const e=d(-9,9,[0]),t=d(2,6),i=d(-9,9,[0,-1*t*e]),m=t,l=e*t+i,v=d(-9,9),P=d(-9,9,[v]);m===2?o="doubler":m===3?o="tripler":o=`multiplier par $${m}$`,l<0?(n=`enlever $${-l}$`,a=""):(n=`ajouter $${l}$`,a="+"),e<0?(c=`soustraire $${-e}$`,s=""):(c=`ajouter $${e}$`,s="+"),i<0?(x=`soustraire $${-i}$`,g=""):(x=`ajouter $${i}$`,g="+"),e*t<0?f="":f="+",e*t+i<0?q="":q="+",u=`On considère les programmes de calcul suivants :<br><br>
      ${p("Programme A :")}<br>
      - choisir un nombre,<br>
      - le ${o},<br>
      - puis ${n}.<br><br>
      ${p("Programme B :")}<br>
      - choisir un nombre,<br>
      - lui ${c},<br>
      - multiplier le résultat par ${t},<br>
      - ${x}.<br><br>
      ${h("1)")} Tester ces programmes avec le nombre $${v}$ et en choisissant un autre nombre quelconque. Émettre une conjecture.<br>
      ${h("2)")} Prouver cette conjecture.`,b=`${h("1)")} ${this.testeProgrammesDeCalcul(v,m,l,e,t,i,a,s,g)}
      Testons ces deux programmes de calcul avec le nombre $${P}$ par exemple :<br>
      ${this.testeProgrammesDeCalcul(P,m,l,e,t,i,a,s,g)}
      À chaque fois, le programme A a donné le même résultat que le programme B.<br>
      On conjecture que le programme A donnera le même résultat que le programme B pour tous les nombres.<br><br>
      ${h("2)")} Appliquons ces deux programmes de calcul à un nombre (n'importe lequel) qu'on va noter $${$("\\textit{x}")}$ :<br>
      ${p("Programme A :")}<br>
      $${$("\\textit{x}")} \\times ${m} = ${m} ${$("\\textit{x}")}$<br>
      $${m} ${$("\\textit{x}")} ${a} ${l} = ${$(m+" \\textit{x} "+a+" "+l)}$<br><br>
      ${p("Programme B :")}<br>
      $${$("\\textit{x}")} ${s} ${e} = ${$("\\textit{x}")} ${s} ${e}$<br>
      $(${$("\\textit{x}")} ${s} ${e}) \\times ${t} = ${$("\\textit{x}")} \\times ${t} ${s} ${e} \\times ${t} = ${t} ${$("\\textit{x}")} ${f} ${e*t}$<br>
      $${t} ${$("\\textit{x}")} ${f} ${e*t} ${g} ${i} = ${$(t+" \\textit{x} "+q+" "+(e*t+i))}$<br><br>
      
      On a obtenu le même résultat avec les deux programmes de calcul.<br>
      Comme on peut remplacer $${$("\\textit{x}")}$ par n'importe quel nombre, on a donc montré qu'on obtient le même résultat avec les deux programmes de calcul pour n'importe quel nombre.`,this.questionJamaisPosee(r,m,l,e,i)&&(this.listeQuestions[r]=u,this.listeCorrections[r]=b,r++),C++}B(this)}testeProgrammesDeCalcul(r,u,b,o,n,c,x,a,s){return`${p("Programme A :")}<br>
  $${r} \\times ${u} = ${r*u}$ <br>
  $${r*u} ${x} ${b} = ${$(r*u+b)}$ <br><br>
  ${p("Programme B :")}<br>
  $${r} ${a} ${o} = ${r+o}$ <br>
  $${r+o} \\times ${n} = ${(r+o)*n}$ <br>
  $${(r+o)*n} ${s} ${c} = ${$((r+o)*n+c)}$ <br><br>`}}export{z as dateDeModifImportante,V as dateDePublication,N as default,K as refs,L as titre,H as uuid};
