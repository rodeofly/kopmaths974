import{e,m as h,a as g,r as j}from"./embellissements-BYV7mIDn.js";import{nombreElementsDifferents as A}from"./ExerciceQcm-DOkcCRBu.js";import M from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const H="bd806",I={"fr-fr":["1A-S4-3"],"fr-ch":[]},J=!0,K="qcm",L="true",U="qcmMono",V="Déterminer la valeur manquante d'une série dont on connaît la moyenne.",W="02/08/2025";class X extends M{versionOriginale=()=>{const i=[8,12,6,10],n=i.reduce(($,s)=>$+s,0),o=9,u=o*5-n,m=7,f=11,r=5;this.reponses=[`$${e(u)}$`,`$${e(m)}$`,`$${e(f)}$`,`$${e(r)}$`],this.enonce=`On donne la série statistique suivante : $${i.join(" ; ")}$.<br>
  Quelle valeur faut-il ajouter à la série pour que sa moyenne soit égale à $${e(o)}$ ?`,this.correction=`Appelons $x$ la valeur cherchée.<br>
  On commence par calculer la somme des valeurs de la série de l'énoncé :<br>
  $${i.join(" + ")} = ${n}$.<br>
  Comme la série de l'énoncé contient $4$ valeurs, la nouvelle série avec $x$ en contient $5$.
  <br>On peut calculer sa moyenne avec l'expression : $\\dfrac{${n} + x}{5}$<br>
  Comme cette moyenne vaut $${e(o)}$ d'après l'énoncé, il faut alors résoudre l'équation : <br>
  $\\dfrac{${n} + x}{5} = ${e(o)}$
  <br>
  $${n} + x = ${e(o)} \\times 5$
  <br>
  $x = ${e(o)} \\times 5 - ${n}$
  <br>$x = ${h(e(u))}$`};versionAleatoire=()=>{let i,n,o,u;do{let m=function(t){for(let a=t.length-1;a>0;a--){const l=Math.floor(Math.random()*(a+1));[t[a],t[l]]=[t[l],t[a]]}},f=function(t){const l=[-3,-2,-1,1,2,3].map(v=>t+v).filter(v=>v>0);if(m(l),l.length<3)throw new Error("Pas assez de valeurs positives autour de x pour générer 3 distracteurs");const[x,y,q]=l.slice(0,3);return{distracteur2:x,distracteur3:y,distracteur4:q}};const r=g([4,5]),$=[];for(let t=0;t<r;t++)$.push(j(5,15,0));const s=$.reduce((t,a)=>t+a,0),d=s/r;let c;d>11?c=Math.floor(d)-1:c=Math.floor(d)+1,i=c*(r+1)-s;const p=f(i);n=p.distracteur2,o=p.distracteur3,u=p.distracteur4,this.reponses=[`$${e(i)}$`,`$${e(n)}$`,`$${e(o)}$`,`$${e(u)}$`],this.enonce=`On donne la série suivante : $${$.join(" ; ")}$.<br>
      Quelle valeur faut-il ajouter à la série pour que sa moyenne soit égale à $${e(c)}$ ?`,this.correction=`Appelons $x$ la valeur cherchée.<br>
      On commence par calculer la somme des valeurs de la série de l'énoncé :<br>
      $${$.join(" + ")} = ${s}$.<br>
      Comme la série de l'énoncé contient $${r}$ valeurs, la nouvelle série avec $x$ en contient $${r+1}$.
      <br>On peut calculer sa moyenne avec l'expression : $\\dfrac{${s} + x}{${r+1}}$<br>
      Comme cette moyenne vaut $${e(c)}$ d'après l'énoncé, il faut alors résoudre l'équation : <br>
      $\\dfrac{${s} + x}{${r+1}} = ${e(c)}$
      <br>
      $${s} + x = ${e(c)} \\times ${r+1}$
      <br>
      $x = ${e(c)} \\times ${r+1} - ${s}$
      <br>$x = ${h(e(i))}$`}while(A(this.reponses)<4)};constructor(){super(),this.options={vertical:!1,ordered:!1},this.versionAleatoire()}}export{L as amcReady,U as amcType,W as dateDePublication,X as default,J as interactifReady,K as interactifType,I as refs,V as titre,H as uuid};
