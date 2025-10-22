import{h as B}from"./gestionInteractif-DujZpSu8.js";import{a as K}from"./questionMathLive-DdRvWqlN.js";import{b as P}from"./Personne-DRrbQFAY.js";import{g as R,r as d,y as F,af as z,Z as t,m as N,l as I}from"./embellissements-BYV7mIDn.js";import{E as J,K as Z}from"./Exercice-DtXhjCyI.js";import{e as x}from"./comparisonFunctions-B45ZZ3C7.js";import{p as b}from"./expression-ovJTbCJ5.js";import"decimal.js";import"mathjs";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./index-BUDQz6-w.js";import"./Hms-u2AUyU1C.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"katex";import"earcut";import"roughjs";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./compute-engine.min.umd-BwAhpA7x.js";const ge=!0,ve="mathLive",Ne="Organiser des calculs en une seule ligne",xe="31/05/2024",Ee="2z3e5",Ce={"fr-fr":["5C12-2"],"fr-2016":["6C33-2"],"fr-ch":["9NO6-8","10NO6-6"]};function f(c,m,$){return isNaN(Number($))&&($=`( ${$} )`),`(${c}) ${m} ${$}`}function y(c,m,$){if(c<2||Math.floor(c)!==c||m.includes(c))return!1;for(let s=0;s<$.length;s++)if(Math.floor($[s])!==$[s]||$[s]<2||c===$[s]||m.includes($[s]))return!1;return!0}class ye extends J{constructor(){super(),this.nbQuestions=1,this.sup=!1,this.sup2="2",this.sup3=!1,this.besoinFormulaireCaseACocher=["Inclure des divisions"],this.besoinFormulaire2Texte=["Nombre de calculs (2 à 4) séparés par des tirets :",`2 : 2 opérations successives
3 : 3 opérations successives
4 : 4 opérations successives
5 : Mélange`],this.besoinFormulaire3CaseACocher=["Sans parenthèses inutiles",!1],this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1}nouvelleVersion(){const m=!!this.sup,$=R({defaut:2,saisie:this.sup2,min:2,max:4,melange:5,nbQuestions:this.nbQuestions});for(let s=0,D=0;s<this.nbQuestions&&D<200;D++){const h=d(2,9),g=d(2,9,[h]),E=d(2,10,[h,g]),S=d(2,12,[h,g,E]),L=d(2,20,[h,g,E,S]),e=F([h,g,E,S,L]),r=m?F(["+","-","\\times","\\div"]):z(["+","-","\\times"],4),i=`${e[0]} ${r[0]} ${e[1]}`,C={operator:r[0],left:e[0],right:e[1]},n=x.parse(i).simplify().latex,Q=`${n} ${r[1]} ${e[2]}`,a=x.parse(Q).simplify().latex,T=`${a} ${r[2]} ${e[3]}`,p=x.parse(T).simplify().latex,A=`${p} ${r[3]} ${e[4]}`,k=x.parse(A).simplify().latex;let u="",o,l,v="";switch(Number($[s])){case 2:if(o=a,l=f(i,r[1],e[2].toString()),u={operator:r[1],left:C,right:e[2]},!y(Number(o),[e[1],e[2],e[0]],[Number(n)]))continue;this.sup3&&(l=b(u)),v=`
$${t(`${i} = ${n}`,"red")}$<br>
$${t(`${t(`\\overset{${i}}{${n}}`,"red")} ${r[1]} ${e[2]} = ${a}`,"blue")}$<br>
<br>
$${t(`(${i})`,"red")}${t(`${r[1]}${e[2]} = ${o}`,"blue")}$<br>
<br>
En supprimant les parenthèses inutiles, on peut écrire :<br> $${N(b(u))} = ${o}$<br>
`;break;case 3:if(o=p,l=f(f(i,r[1],e[2].toString()),r[2],e[3].toString()),u={operator:r[2],left:{operator:r[1],left:C,right:e[2]},right:e[3]},!y(Number(o),[e[1],e[2],e[0],e[3]],[Number(n),Number(a)]))continue;this.sup3&&(l=b(u)),v=`
$${t(`${i} = ${n}`,"red")}$<br>
$${t(`${t(`\\overset{${i}}{${n}}`,"red")} ${r[1]} ${e[2]} = ${a}`,"blue")}$<br>
$${t(`${t(`\\overset{(${t(`(${i})`,"red")}${r[1]}${e[2]})}{${a}}`,"blue")} ${r[2]} ${e[3]} = ${p}`,"green")}$<br>
<br>
$${t(`${t(`(${t(`(${i})`,"red")}${r[1]}${e[2]})`,"blue")}${r[2]}${e[3]}=${p}`,"green")}$<br>
<br>
En supprimant les parenthèses inutiles, on peut écrire : <br> $${N(b(u))} = ${o}$<br>
`;break;case 4:default:if(o=k,l=f(f(f(i,r[1],e[2].toString()),r[2],e[3].toString()),r[3],e[4].toString()),u={operator:r[3],left:{operator:r[2],left:{operator:r[1],left:C,right:e[2]},right:e[3]},right:e[4]},!y(Number(o),[e[1],e[2],e[0],e[3],e[3]],[Number(n),Number(a),Number(p)]))continue;this.sup3&&(l=b(u)),v=`
$${t(`${i} = ${n}`,"red")}$<br>
$${t(`${t(`\\overset{${i}}{${n}}`,"red")} ${r[1]} ${e[2]} = ${a}`,"blue")}$<br>
$${t(`${t(`\\overset{(${t(`(${i})`,"red")}${r[1]}${e[2]})}{${a}}`,"blue")} ${r[2]} ${e[3]} = ${p}`,"green")}$<br>
$${t(`\\overset{(${t(`(${t(`(${i})`,"red")}${r[1]}${e[2]})`,"blue")}${r[2]}${e[3]})}{${p}}`,"green")} ${r[3]} ${e[4]} = ${o}$<br>
<br>
$${t(`(${t(`(${t(`(${i})`,"red")}${r[1]}${e[2]})`,"blue")}${r[2]}${e[3]})`,"green")} ${r[3]} ${e[4]} = ${o}$<br>
<br>
En supprimant les parenthèses inutiles, on peut écrire : <br> $${N(b(u))} = ${o}$<br>
`;break}const M=this.correctionDetaillee?v:`$${N(l)} = ${o}$`,O=[`$${i} = ${n}$<br>`,`$${Q} = ${a}$<br>`,`$${T} = ${p}$<br>`,`$${A} = ${k}$<br>`],V=e.slice(0,$[s]+1),j=`${P()} a obtenu le nombre $${o}$ à partir des nombres suivants : ${V.map(w=>`$${w}$`).join(" ; ")}.<br>
Voici ses calculs :<br>${O.slice(0,$[s]).join(`
`)}
Les écrire en une seule ligne. ${K(this,s,Z.clavierDeBaseAvecEgal)}`;B(this,s,{reponse:{value:l,options:{expressionNumerique:!0}}});const q=Number(o)<100*Number($[s]);this.questionJamaisPosee(s,...e,...r,l)&&q&&(this.listeQuestions[s]=j,this.listeCorrections[s]=M,s++)}I(this)}}export{y as checkValue,xe as dateDePublication,ye as default,ge as interactifReady,ve as interactifType,f as rediger,Ce as refs,Ne as titre,Ee as uuid};
