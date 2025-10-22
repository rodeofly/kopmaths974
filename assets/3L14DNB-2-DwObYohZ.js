import{ac as te,f as s,Y as a,aw as se,a2 as T,z as oe,ct as p,k as u,o as ne,D as $e,a as ce,r as g,w as j}from"./embellissements-BYV7mIDn.js";import{c as G}from"./lists-i1i4IA1M.js";import ae from"./ExerciceBrevetA-CJtX4hAj.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceBrevet-lD74fcMo.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const qe="972f7",ve={"fr-fr":["3L14DNB-2","3Z1DNB-14"],"fr-ch":["11FA4-5","1mCL1-13"]},De="Programme de calcul et calcul littéral",Ee="25/11/2024";class Le extends ae{constructor(){super(),this.besoinFormulaireCaseACocher=["Sujet original",!1],this.sup=!1,this.introduction=te("D'après l'exercice 2 du brevet Amérique du Nord 2024.")+"<br><br>",this.versionAleatoire(0)}appliquerLesValeurs(t,r,i,e,$,n){const c=j(t)==="+",x=j(e)==="+",l=o=>(o+t)*r*(o*i+e),h=o=>(o+t)*r,B=o=>o*i+e,M=l($),N=l(n),m=[{exp:`\\Big(x${s(t)}\\times ${a(r)}\\Big)\\Big(x\\times ${a(i)}${s(e)}\\Big)`,isGood:!1},{exp:`\\Big(${r}x${s(t)}\\Big)\\Big(${i}x${s(e)}\\Big)`,isGood:!1},{exp:`\\Big(${r}x${s(t*r)}\\Big)\\Big(${i}x${s(e)}\\Big)`,isGood:!0},{exp:`\\Big(x${s(t)}\\Big)\\times ${a(r)}\\times\\Big(x\\times ${a(i)}${s(e)}\\Big)`,isGood:!0}],y=["A","B","C","D"];se(m,y);const f=y.findIndex(o=>o==="B"),P=m[f].exp,F=`On choisit $x$ comme nombre de départ.<br>
    Parmi les expressions suivantes, lesquelles permettent d'exprimer le résultat à l'arrivée de ce programme de calcul. Aucune justification n'est demandée.<br>
    $\\def\\arraystretch{2}\\begin{array}{|c|c|c|c|}
    \\hline
    \\text{Expression A} & \\text{Expression B} & \\text{Expression C} & \\text{Expression D} \\\\
    \\hline
    ${m.map(o=>o.exp).join(" & ")} \\\\
    \\hline
    \\end{array}$<br>
    <br>`,V=G({items:[`Montrer que, si on choisit $${$}$ comme nombre de départ, le résultat du programme A est $${M}$.`,`Quel est le résultat obtenu à l'arrivée si on choisit $${n}$ comme nombre de départ ?`,F,"Trouver les deux nombres de départ qui permettent d'obtenir 0 à l'arrivée. Expliquer la démarche.",`Développer et réduire l'expression ${String.fromCharCode(65+f)}.`],style:"nombres"}),d=h($),A=B($),O=`Tout d'abord, calculons le nombre de gauche du programme :<br>
    $\\Big(${$}${c?"+":"-"}${Math.abs(t)}\\Big)\\times ${r} = ${$+t} \\times ${r} = ${d}$<br>
    Ensuite, calculons le nombre de droite du programme :<br>
    $${$}\\times ${i}${s(e)} = ${$*i}${s(e)} = ${A}$<br>
    Enfin, le résultat du programme est :<br>
    $${d}\\times${a(A)} = ${M}$`,I=h(n),q=B(n),R=`Tout d'abord, calculons le nombre de gauche du programme :<br>
    $\\Big(${n}${c?"+":"-"}${Math.abs(t)}\\Big)\\times ${r} = ${n+t} \\times ${r} = ${I}$<br>
    Ensuite, calculons le nombre de droite du programme :<br>
    $${n}\\times ${i}${s(e)} = ${n*i}${s(e)} = ${q}$<br>
    Enfin, le résultat du programme est :<br>
    $${I}\\times${a(q)} = ${N}$`,k=m.map((o,re)=>{const ie=o.exp;return`Expression ${String.fromCharCode(65+re)} : $${ie}$ est ${o.isGood?"vraie":"fausse"}`}).filter(o=>o.includes("vraie")).join("<br>"),z=`Le nombre de gauche s'exprime en fonction de x comme suit :<br>
    $\\Big(x${s(t)}\\Big)\\times ${r} = ${r}x${s(r*t)}$<br>
    Le nombre de droite s'exprime en fonction de x comme suit :<br>
    $${i}x${s(e)}$<br>
    Le résultat du programme s'exprime en fonction de x comme suit :<br>
    $\\Big(${r}x${s(r*t)}\\Big)\\Big(${i}x${s(e)}\\Big)$ ou $\\Big(x${s(t)}\\Big)\\times${r}\\times\\Big(${i}x${s(e)}\\Big)$<br>`,Q=`Pour que le résultat du programme soit égal à 0, il faut que l'un des deux nombres soit égal à 0.<br>
    Le nombre de gauche est égal à $0$ si $x${c?"+":"-"}${Math.abs(t)} = 0$ donc $x = ${-t}$.<br>
    Le nombre de droite est égal à $0$ si $${i}x${s(e)} = 0$ soit $${i}x = ${-e}$ et donc $x=${T(-e,i).simplifie().texFSD}$.<br>
    Le résultat du programme est égal à $0$ si $x = ${-t}$ ou $x=${T(-e,i).simplifie().texFSD}$`,Y=`Développons l'expression ${String.fromCharCode(65+f)} :<br>
    $\\begin{aligned}${P}&=${r}x\\times${i}x+${r}x\\times${a(e)}${s(t)}\\times${i}x${s(t)}\\times${a(e)}\\\\
    &=${r*i}x^2${s(r*e)}x${s(i*t)}x${s(t*e)}\\\\
    &=${r*i}x^2${r*e+t*i!==0?`${oe(r*e+i*t)}x`:""}${s(t*e)}\\end{aligned}$`,Z=G({items:[O,R,z+k,Q,Y],style:"nombres"}),b=[],H=new p({xMin:-4.5,yMin:-.5,xMax:4.5,yMax:.5}).addTextIn({textIn:"Résultat obtenu à l'arrivée"}).render(),J=new p({xMin:-4.5,yMin:2,xMax:4.5,yMax:3}).addTextIn({textIn:"Multiplier les deux nombres"}).render(),K=new p({xMin:-9,yMin:4.5,xMax:-4,yMax:5.5}).addTextIn({textIn:`Multiplier par ${r}`}).render(),U=new p({xMin:-8.5,yMin:7,xMax:-4.5,yMax:8}).addTextIn({textIn:`${c?"Ajouter":"Soustraire"} ${Math.abs(t)}`}).render(),W=new p({xMin:4.5,yMin:4.5,xMax:8.5,yMax:5.5}).addTextIn({textIn:`${x?"Ajouter":"Soustraire"} ${Math.abs(e)}`}).render(),X=new p({xMin:4,yMin:7,xMax:9,yMax:8}).addTextIn({textIn:`Multiplier par ${i}`}).render(),_=new p({xMin:-4,yMin:9.5,xMax:4,yMax:10.5}).addTextIn({textIn:"Nombre choisi au départ"}).render(),v=u(0,1.9,0,.6),D=u(-6.5,4.4,-.2,3.1),E=u(6.5,4.4,.2,3.1),L=u(6.5,6.9,6.5,5.6),C=u(-6.5,6.9,-6.5,5.6),w=u(-.2,9.4,-6.5,8.1),S=u(.2,9.4,6.5,8.1);for(const o of[v,D,E,C,L,w,S])o.styleExtremites="->",o.epaisseur=2;b.push(H,J,K,X,U,W,_),b.push(v,D,E,C,L,w,S);const ee=ne(Object.assign({},$e(b)),b);this.enonce=`Voici un programme de calcul :<br>
    ${ee}
    ${V}`,this.correction=Z}versionOriginale=()=>{this.appliquerLesValeurs(2,4,5,-3,2,-3)};versionAleatoire=t=>{let r=1,i=1,e=2,$=-3,n=-2,c=3,x=2,l=-3;do r=ce([1,-1]),i=-r,e=g(2,5)*r,$=g(2,5)*i,n=g(2,5),c=g(2,5,n),x=g(2,7),l=-g(2,7,x);while((x+e)*n*(x*c+$)===0||(l+e)*n*(l*c+$)===0);this.appliquerLesValeurs(e,n,c,$,x,l)}}export{Ee as dateDePublication,Le as default,ve as refs,De as titre,qe as uuid};
