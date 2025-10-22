import{g as U,s as F,l as I,r as a,t as p,m as f,a as B,f as h,e as r,v as L,Y as N,p as v,A as M,b9 as S,o as k,aa as y,aX as z,k as G,C}from"./embellissements-BYV7mIDn.js";import{c as g}from"./style-CcGLZIPY.js";import{h as P}from"./gestionInteractif-DujZpSu8.js";import{a as H}from"./questionMathLive-DdRvWqlN.js";import"decimal.js";import"mathjs";import{b as D}from"./Personne-DRrbQFAY.js";import{G as A}from"./comparisonFunctions-B45ZZ3C7.js";import{E as J}from"./Exercice-DtXhjCyI.js";import"katex";import"earcut";import"roughjs";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./index-BUDQz6-w.js";import"./Hms-u2AUyU1C.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./compute-engine.min.umd-BwAhpA7x.js";const je="Mettre en équation un problème et le résoudre",Ue=!0,Fe="mathLive",Ie=!0,Ne="AMCHybride",ze="15/02/2022",Ge="06/04/2023",He="22412",Je={"fr-fr":["3L13-3","BP2RES14"],"fr-ch":["11FA6-6"]};function X(){const l=v(6,1.5),i=v(0,0),t=v(0,3),n=M(l,t,i),e=S("//","black",l,t,l,i);return k({xmin:-1,xmax:7,ymin:-1,ymax:4,pixelsParCm:20,scale:.8,zoom:1},n,e)}function Y(){const l=v(3,1.5),i=v(6,0),t=v(0,0),n=M(l,t,i),e=S("//","black",l,t,l,i);return k({xmin:-1,xmax:7,ymin:-1,ymax:2.5,pixelsParCm:20,scale:.8,zoom:1},n,e)}function R(l,i,t,n){const e=v(1.5,0,"O"),s=v(4,6,"B"),$=v(0,5,"A"),o=y(s,e,.4,"D"),m=y($,e,.4,"C"),c=z(e,m,$,s,o),u=G(m,o),d=C(`${n}`,.5,1),b=C(`${i}`,0,3),x=C(`${t}`,2,6),q=C(`${l}`,1.5,2.5);return k({xmin:-1,xmax:5,ymin:-1,ymax:7,pixelsParCm:20,scale:.8,zoom:1},c[0],c[1],d,b,x,q,u)}function K(l){const i=a(5,15),t=a(5,12),n=a(15,30),e=n+(t+i)*2+i*3,$={equation:`x\\times 3+(${t}+x)\\times 2+${n}=${e}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
 Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}x\\times 3 + (${t}+x)\\times 2 + ${n} &= 3x + 2x +2\\times${t} + ${n}\\\\
  &=5x + ${2*t} + ${n}\\\\
  &=5x + ${2*t+n}
  \\end{aligned}$.<br>
 Ainsi, l'équation devient : $5x + ${2*t+n} = ${e}$.<br>
 Soustrayons $${2*t+n}$ des deux membres : $5x = ${e} - ${2*t+n} = ${e-(2*t+n)}$.<br>
 Divisons les deux membres par 5 : $x = \\dfrac{${e-(2*t+n)}}{5} = ${i}$.<br>`};let o=`Une équipe de basket a marqué $${e}$ points lors d'un match. Au cours de ce match, elle a marqué $${n}$ points sur lancers francs.<br>`;o+=`L'équipe a marqué $${t}$ paniers à deux points de plus que de paniers à trois points.<br>Combien a-t-elle marqué de paniers à trois points ?`;let m=`Posons $x$ le nombre de paniers à trois points.<br>Le nombre de paniers à deux points est donc : $${t}+x$.<br>`;m+="Le score de l'équipe fournit donc l'équation :<br>";const c=`L'équipe a donc marqué $${f(i)}$ paniers à trois points.<br>`,u="",d=`${p("Vérification :","black")}<br> $\\begin{aligned}3\\times ${i}+(${i}+${t})\\times 2 + ${n}&=${3*i} + ${i+t}\\times 2+${n}\\\\
  &= ${3*i+n} + ${(i+t)*2}\\\\
  &= ${e}\\end{aligned}$<br>`;return{enonce:o,intro:m,conclusion:c,figure:u,verification:d,uniteOptions:["","",""],x:i,resolution:$}}function W(l){const i=a(17,27),t=a(5,12),n=a(15,30),e=n+(i-t)*3+i*2,$={equation:`x\\times 2+(x-${t})\\times 3+${n}=${e}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
    Commençons par développer et réduire le membre de gauche :<br>
    $\\begin{aligned}x\\times 2 + (x - ${t})\\times 3 + ${n} &= 2x + 3x - 3\\times${t} + ${n}\\\\
    &=5x - ${3*t} + ${n}\\\\
    &=5x + ${n-3*t}
    \\end{aligned}$.<br>
    Ainsi, l'équation devient : $5x + ${n-3*t} = ${e}$.<br>
    Soustrayons $${n-3*t}$ des deux membres : $5x = ${e} - ${n-3*t} = ${e-(n-3*t)}$.<br>
    Divisons les deux membres par 5 : $x = \\dfrac{${e-(n-3*t)}}{5} = ${i}$.<br>`};let o=`Une équipe de basket a marqué $${e}$ points lors d'un match. Au cours de ce match, elle a marqué $${n}$ points sur lancers francs.<br>`;o+=`L'équipe a marqué $${t}$ paniers à trois points de moins que de paniers à deux points.<br>Combien a-t-elle marqué de paniers à deux points ?`;let m=`Posons $x$ le nombre de paniers à deux points.<br>Le nombre de paniers à trois points est donc : $x-${t}$.<br>`;m+="Le score de l'équipe fournit donc l'équation: <br>";const c=`L'équipe a donc marqué $${f(i)}$ paniers à deux points.<br>`,u="",d=["","",""],b=`${p("Vérification :","black")}<br> $\\begin{aligned}2\\times ${i} + ( ${i} - ${t})\\times 3 + ${n}&=${2*i} + ${i-t} \\times 3 + ${n} \\\\
  &= ${2*i+n} + ${(i-t)*3}\\\\
  &= ${e}\\end{aligned}$<br>`;return{enonce:o,intro:m,conclusion:c,figure:u,uniteOptions:d,verification:b,x:i,resolution:$}}function Z(l){return w(!0)}function _(l){return w(!1)}function w(l,i){let t,n,e;const s=D(2),$=B(["fraises","pêches","poires","pommes","mangues","prunes","citrons"]);do t=a(2,5)+(l?0:a(0,4)/5),n=a(2,5)+(l?0:a(0,1)/5),e=n*t;while(e>=100||e<=5||e%10===0);const o=e>50?100:e>20?50:e>10?20:10,c={equation:`${r(n,2)}\\times x+${r(o-e,2)}=${o}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par soustraire $${r(o-e,2)}$ des deux membres :<br>
  $\\begin{aligned}${r(n,2)}\\times x + ${r(o-e,2)} - ${r(o-e,2)} &= ${o} - ${r(o-e,2)}\\\\
  ${r(n,2)}\\times x &= ${r(e,2)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${r(n,2)}$ :<br>
  $x = \\dfrac{${r(e,2)}}{${r(n,2)}} = ${r(t)}$.<br>`};let u=`${s[0]} a acheté $${r(n)}$ kg de ${$} avec un billet de $${o}$ €. Le marchand lui a rendu $${g(o-e)}$ €.<br>`;u+=`Quel est le prix d'un kilogramme de ${$} ?`;const d=`Posons $x$ le prix d'un kilogramme de ${$}.<br>L'énoncé se traduit par l'équation suivante :<br>`,b=`<br>Le prix d'un kilogramme de ${$} est donc de $${f(r(t,2,!0))}$ €.`,x="",q=`${p("Vérification :","black")}<br> $\\begin{aligned}${r(n,2)}\\times ${r(t)} + ${r(o-e,2)} &= ${r(e,2)} + ${r(o-e,2)}\\\\
  &= ${o}\\\\
  \\end{aligned}$<br>`;return{enonce:u,intro:d,conclusion:b,figure:x,verification:q,uniteOptions:["","","€"],x:t,resolution:c}}function ee(l){return T(!0)}function te(l){return T(!1)}function T(l,i){const t=["triangle","quadrilatère","pentagone","hexagone"],n=a(2,4)+(l?0:a(0,45)/5),e=a(2,5)+(l?0:a(0,45)/5),s=a(2,5),$=s*n+e,m={equation:`${s}x+${r(e,1)}=${r($,1)}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par soustraire $${r(e,1)}$ des deux membres :<br>
  $\\begin{aligned}${s}x + ${r(e,1)} - ${r(e,1)} &= ${r($,1)} - ${r(e,1)}\\\\
  ${s}x &= ${r($-e,1)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${s}$ :<br>
  $x = \\dfrac{${r($-e,1)}}{${s}} = ${r(n)}$.<br>`};let c=`Un ${t[s-2]} possède un côté de longueur $${r(e)}$ cm et $${s}$ autres côtés de longueur égale.<br>Son périmètre est $${r($)}$ cm.<br>`;c+="Quelle est la longueur des côtés de même longueur ?";let u="Posons $x$ la longueur des côtés de même longueur.<br>";u+=`Un ${t[s-2]} possède $${s+1}$ côtés, donc celui-ci possède $${s}$ côtés de longueur $x$.<br>`,u+="L'énoncé se traduit par l'équation suivante :<br>";const d=`<br>Les côtés de même longueur mesurent donc $${f(r(n))}$ cm.`,b="",x=`${p("Vérification :","black")}<br> $\\begin{aligned}${s} \\times ${r(n)} + ${r(e,1)} &= ${r(s*n,1)} + ${r(e,1)}\\\\
  &= ${r($,1)}\\\\
  \\end{aligned}$<br>`,q=[" unites[Longueurs]",new A(n,"cm"),""];return{enonce:c,intro:u,conclusion:d,figure:b,verification:x,uniteOptions:q,x:n,resolution:m}}function ne(l){return V(1)}function se(l){return V(2)}function V(l,i){let t,n,e,s;if(l===1)do t=a(2,15),n=a(1,10),e=a(2,15),s=a(1,10);while((e*s-t*n)*(t-e)<=0||Math.abs(e*s-t*n)%Math.abs(t-e)!==0);else do t=a(2,15),n=a(1,10),e=a(2,15),s=a(1,10);while((e*s-t*n)*(t-e)>=0||Math.abs(e*s-t*n)%Math.abs(t-e)!==0);const $=Math.round((e*s-t*n)/(t-e)),o=D(2),c={equation:`(x+${n})\\times ${t}=(x+${s})\\times ${e}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire les deux membres :<br>
  $\\begin{aligned}(x + ${n})\\times ${t} &= ${t}x + ${t*n}\\\\
  (x + ${s})\\times ${e} &= ${e}x + ${e*s}\\\\
  \\end{aligned}$<br>
  Ainsi, l'équation devient : $${t}x + ${t*n} = ${e}x + ${e*s}$.<br>  
  Soustrayons $${e}x$ des deux membres et soustrayons $${t*n}$ des deux membres :<br>
  $\\begin{aligned}${t}x - ${e}x &= ${e*s} - ${t*n}\\\\
  ${t-e}\\times x &= ${e*s-t*n}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${t-e}$ :<br>
  $x = \\dfrac{${e*s-t*n}}{${t-e}} = ${$}$.<br>`};let u=`${o[0]} et ${o[1]} choisissent un même nombre.<br> ${o[0]} lui ajoute $${n}$ puis multiplie le résultat par $${t}$ alors que `;u+=`${o[1]} lui ajoute $${s}$ puis multiplie le résultat par $${e}$.<br>`,u+=`${o[0]} et ${o[1]} obtiennent le même résultat.<br>`,u+=`Quel nombre commun ont choisi ${o[0]} et ${o[1]} ?`;let d="Posons $x$ le nombre choisi au départ.<br>";d+=`Le programme de calcul effectué par ${o[0]} se traduit par : $(x+${n})\\times ${t}$.<br>`,d+=`Le programme de calcul effectué par ${o[1]} se traduit par : $(x+${s})\\times ${e}$.<br>`,d+="L'égalité des résultats se traduit par l'équation suivante :<br>";const b=`<br>${o[0]} et ${o[1]} ont donc choisi au départ le nombre $${f($)}$.`,x="",q=`${p("Vérification :","black")}<br> $(${$} + ${n})\\times ${t} = ${$+n}\\times ${t} = ${t*$+t*n}$<br> 
  $(${$} + ${s})\\times ${e} = ${$+s}\\times ${e} = ${e*$+e*s}$<br>`;return{enonce:u,intro:d,conclusion:b,figure:x,verification:q,uniteOptions:["","",""],x:$,resolution:c}}function re(l){return Q(1)}function ie(l){return Q(2)}function Q(l,i){let t,n,e,s;if(l===1)do t=a(2,15),n=a(1,10),e=a(2,15),s=a(1,10);while((s-t*n)*(t-e)<=0||Math.abs(s-t*n)%Math.abs(t-e)!==0);else do t=a(2,15),n=a(1,10),e=a(2,15),s=a(1,10);while((s-t*n)*(t-e)>=0||Math.abs(s-t*n)%Math.abs(t-e)!==0);const $=Math.round((s-t*n)/(t-e)),o=D(2),c={equation:`(x+${n})\\times${t}=${e}x+${s}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}(x + ${n})\\times ${t} &= ${t}x + ${t*n}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${t}x + ${t*n} = ${e}x + ${s}$.<br>  
  Soustrayons $${e}x$ des deux membres et soustrayons $${t*n}$ des deux membres :<br>
  $\\begin{aligned}${t}x - ${e}x &= ${s} - ${t*n}\\\\
  ${L(t-e)}${Math.abs(t-e)===1?"":"\\times "}x &= ${s-t*n}\\\\
  \\end{aligned}$.<br>
  ${t-e!==1?`Divisons les deux membres par $${t-e}$ :<br>
  $x = \\dfrac{${s-t*n}}{${t-e}} = ${$}$.<br>`:""}`};let u=`${o[0]} et ${o[1]} choisissent un même nombre.<br> ${o[0]} lui ajoute $${n}$ puis multiplie le résultat par $${t}$ alors que `;u+=`${o[1]} le multiplie par $${e}$ puis ajoute au résultat $${s}$.<br>`,u+=`${o[0]} et ${o[1]} obtiennent le même résultat.<br>`,u+=`Quel nombre commun ont choisi ${o[0]} et ${o[1]} ?`;let d="Posons $x$ le nombre choisi au départ.<br>";d+=`Le programme de calcul effectué par ${o[0]} se traduit par : $(x+${n})\\times ${t}$.<br>`,d+=`Le programme de calcul effectué par ${o[1]} se traduit par : $${e}x + ${s}$.<br>`,d+="L'égalité des résultats se traduit par l'équation suivante :<br>";const b=`<br>${o[0]} et ${o[1]} ont donc choisi au départ le nombre $${f($)}$.`,x="",q=`${p("Vérification :","black")}<br> $(${$} + ${n})\\times ${t} = ${$+n}\\times ${t} = ${t*$+t*n}$<br> 
  $${e} \\times ${N($)} + ${s} = ${e*$+s}$<br>`;return{enonce:u,intro:d,conclusion:b,figure:x,verification:q,uniteOptions:["","",""],x:$,resolution:c}}function $e(l){return E(!0)}function oe(l){return E(!1)}function E(l,i){const t=["ciné-club","club de fitness","club de ski"];let n,e,s,$;do n=a(0,2),e=l?a(5,8):a(50,80)/10,s=a(4,10)*5,$=e-(l?a(1,3):a(2,6)*.5);while(s/(e-$)>=30||s/(e-$)<=10||s*2%((e-$)*2)!==0);const o=Math.ceil(s/(e-$)),c={equation:`x\\times${e}>=${s}+x\\times${r($,1)}`,texteCorr:`${p("Résolvons cette inéquation :","black")}<br>
  Commençons par soustraire $${r($,1)}x$ des deux membres :<br>
  $\\begin{aligned}${r(e,1)}x - ${r($,1)}x &= ${s}\\\\
  ${Math.abs(e-$)!==1?`${r(e-$,1)} x &= ${s}\\\\`:`${L(e-$)}x &= ${s}\\\\`}
  \\end{aligned}$.<br>
  ${L(e-$)!==""?`Divisons les deux membres par $${r(e-$,1)}$ :<br>
  $x \\geq \\dfrac{${s}}{${r(e-$,1)}} = ${r(s/(e-$),2)}$.<br>`:""}
      ${s/(e-$)%1!==0?`Comme $x$ représente un nombre de séances, il doit être un entier. Il faut donc arrondir $${r(s/(e-$),2)}$ à l'entier supérieur.<br>`:""}
  Ainsi, le tarif B devient plus avantageux à partir de $${f(o)}$ séances.<br>`};let u=`Le ${t[n]} d'un village propose deux tarifs à ses pratiquants.<br>`;u+=`Le tarif A propose de payer $${g(e)}$ € à chaque séance.<br>`,u+=`Le tarif B propose de payer un abonnement annuel de $${g(s)}$ € puis de payer $${g($)}$ € par séance.<br>`,u+="Pour quel nombre de séances le tarif B devient-il plus avantageux que le tarif A ?";let d="Posons $x$ le nombre de séances.<br>";d+=`Le prix à payer avec le tarif A est : $x\\times ${g(e)}$.<br>`,d+=`Le prix à payer avec le tarif B est : $${g(s)}+x\\times ${g($)}$.<br>`,d+="Pour que le tarif B soit plus avantageux, $x$ doit vérifier l'inéquation suivante:<br>";const b=`<br>C'est à partir de $${f(o)}$ séances que le tarif B devient plus avantageux que le tarif A (pour $${o}$ séances, les deux tarifs sont équivalents).`,x="",q=p("Vérification pour ","black")+`$${f(`x = ${o}`,"black")}$`+p(" : ","black")+`<br>Prix avec le tarif A : $${g(e)} \\times ${o} = ${g(e*o)}$<br>
  Prix avec le tarif B : $${g(s)} + ${g($)} \\times ${o} = ${g(s+$*o)}$<br>`+p("Vérification pour ","black")+`$${f(`x=${o+1}`,"black")}$`+p(" : ","black")+`.<br>Prix avec le tarif A : $${g(e)} \\times ${o+1} = ${g(e*(o+1))}$<br>
  Prix avec le tarif B : $${g(s)} + ${g($)} \\times ${o+1} = ${g(s+$*(o+1))}$.<br>
  Ainsi, pour $x=${o}$ séances, les deux tarifs sont équivalents et pour $x=${o+1}$ séances, le tarif B est plus avantageux.<br>`;return{enonce:u,intro:d,conclusion:b,figure:x,verification:q,uniteOptions:["","",""],x:o,resolution:c}}function ae(l){return j(!0)}function ue(l){return j(!1)}function j(l,i){let t,n,e,s,$;do t=a(200,300)*10,n=l?a(10,20):a(100,200)/10,e=l?a(5,15):a(50,150)/10,$=a(1e3,t-500),s=n*$+(t-$)*e;while(n<=e);const m={equation:`x\\times${r(n,2,!0)}+(${t}-x)\\times${r(e,2,!0)}=${r(s,2,!0)}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}x\\times ${r(n,1)} + (${t} - x)\\times ${r(e,1)} &= ${r(n,1)}x + ${t} \\times ${r(e,1)} - ${r(e,1)}x\\\\
  &= ${r(n-e,1)} x + ${r(t*e,1)}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${r(n-e,1)} x + ${r(t*e,1)} = ${r(s,1)}$.<br>
  Soustrayons $${r(t*e,1)}$ des deux membres :<br>
  $\\begin{aligned}${r(n-e,1)} x &= ${r(s,1)} - ${r(t*e,1)}\\\\
  ${r(n-e,1)} x &=${r(s-t*e,1)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${r(n-e,1)}$ :<br>
  $x = \\dfrac{${r(s-t*e,1)}}{${r(n-e,1)}} = ${f(r($))}$.<br>`};let c=`Dans une salle de spectacle de $${r(t)}$ places, le prix d'entrée pour un adulte est $${g(n)}$ € et, pour un enfant, il est de $${g(e)}$ €.<br>`;c+=`Le spectacle de ce soir s'est déroulé devant une salle pleine et la recette est de $${g(s)}$ €.<br>`,c+="Combien d'adultes y avait-il dans la salle ?";let u="Posons $x$ le nombre de places adultes vendues.<br>";u+=`Comme les $${r(t)}$ places ont été vendues, le nombre de places enfants est : $${t}-x$.<br>`,u+="Le calcul de la recette donne l'équation suivante.<br>";const d=`<br>Il y a donc eu $${f(r($))}$ adultes au spectacle.`,b="",x=`${p("Vérification :","black")}<br> $\\begin{aligned}${r($,1)}\\times ${r(n,1)} + (${r(t,1)} - ${r($,1)})\\times ${r(e,1)} &= ${r(n*$,2)} + ${r(t-$,2)}\\times ${r(e,2)}\\\\
  &= ${r(n*$,2)}+ ${r(e*(t-$),2)}\\\\
  &= ${r(s,1)}\\\\
  \\end{aligned}$<br>`;return{enonce:c,intro:u,conclusion:d,figure:b,verification:x,uniteOptions:["","",""],x:$,resolution:m}}function le(l){let i,t,n,e;do i=a(50,100),n=(1-2*a(0,2))*a(10,30),t=i+n,e=2*i+t;while(t<=0||2*i<=t);let s=`Un triangle isocèle a pour périmètre $${e}$ mm. `,$="",o="",m="",c,u;n>0?s+=`Sa base est plus longue de $${n}$ mm que chacun des côtés égaux.`:s+=`Sa base est plus courte de $${-n}$ mm que chacun des côtés égaux.`,B([!0,!1])?(s+="<br>Quelle est la mesure de sa base ? (La figure n'est pas en vraie grandeur.)",$=`Posons $x$ la longueur de sa base. La longueur des côtés égaux est : $x${h(-n)}$.<br>`,$+="Le calcul du périmètre donne l'équation suivante :<br>",m=`2(x${h(-n)})+x=${e}`,o=`<br>La base de ce triangle isocèle mesure donc $${f(t)}$ mm.`,c=t):(s+="<br>Quelle est la mesure de ses côtés égaux ? (la figure n'est pas en vraie grandeur)",$=`Posons $x$ la longueur d'un des côtés égaux. La longueur de la base est : $x${h(n)}$.<br>`,$+="Le calcul du périmètre donne l'équation suivante :<br>",m=`2x+x${h(n)}=${e}`,o=`<br>Les deux côtés égaux de ce triangle isocèle mesurent donc $${f(i)}$ mm.`,c=i);const d={equation:m,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}2x ${h(-2*n)} + x &= ${e}\\\\
  3x ${h(-2*n)} &= ${e}\\\\
  \\end{aligned}$.<br>
  ${n<0?`Soustrayons $${-2*n}$ des deux membres :<br>
  $\\begin{aligned}3x &= ${e} ${h(2*n)}\\\\
  3x &= ${e+2*n}\\\\
  \\end{aligned}$.<br>`:`Ajoutons $${2*n}$ aux deux membres :<br>
  $\\begin{aligned}3x &= ${e} + ${2*n}\\\\
  3x &= ${e+2*n}\\\\
  \\end{aligned}$<br>`}
  Divisons les deux membres par $3$ :<br>
  $x = \\dfrac{${e+2*n}}{3} = ${f(c)}$.<br>`};n>0?u=Y():u=X();const b=`${p("Vérification :","black")}<br> $\\begin{aligned}2 \\times ${r(i,1)} + ${r(t,1)} &= ${r(2*i,1)} + ${r(t,1)}\\\\
  &= ${r(e,1)}\\\\
  \\end{aligned}$<br>`,x=[" unites[Longueurs]",new A(c,"mm"),""];return{enonce:s,intro:$,conclusion:o,figure:u,verification:b,uniteOptions:x,x:c,resolution:d}}function ce(l){let i,t,n,e;do i=a(5,40),t=a(5,40),n=a(41,100),e=i*t/(n-i);while(e<=0||i*t%Math.abs(n-i)!==0);const s=Math.round(e),o={equation:`(x+${t})\\times${i}=${n}x`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}(x + ${t})\\times ${i} &= ${i}x + ${i*t}\\\\
  \\end{aligned}$<br>
  Ainsi, l'équation devient : $${i}x + ${i*t} = ${n}x$.<br>  
  Soustrayons $${i}x$ des deux membres :<br>
  $\\begin{aligned}${i*t} &= ${n}x - ${i}x\\\\
  ${i*t} &= ${n-i}x\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${n-i}$ :<br>
  $x = \\dfrac{${i*t}}{${n-i}} = ${f(s)}$.<br>`},m=R(i,t,n,"");let c="Soit la figure ci-dessous qui n'est pas en vraie grandeur où $[CD]$ et $[AB]$ sont parallèles.";c+=` $AB=${n}\\text{mm}$, $AC=${t}\\text{mm}$ et $CD=${i}\\text{mm}$.<br> Déterminer la longueur $OC$.`;let u="Dans cette configuration de Thalès, on a l'égalité suivante : $\\dfrac{OC}{OA}=\\dfrac{CD}{AB}$.<br>";u+="Cette égalité est équivalente à l'égalité des produits en croix : $CD\\times OA=OC\\times AB$.<br>",u+="En remplaçant les longueurs par les données de l'énoncé et en posant $x=OC$, on obtient l'équation suivante :<br>";const d=`donc $OA=${f(s)}\\text{ mm}$.<br>`,b=`${p("Vérification :","black")}<br>
  D'une part : $CD\\times OA = ${r(i,1)} \\times ${r(t+s,1)} = ${r(i*t+i*s,1)}$<br>
  D'autre part : $OC\\times AB = ${r(s,1)} \\times ${r(n,1)} = ${r(n*s,1)}$<br>
  Les produits en croix sont bien égaux pour $x=${s}$<br>
  `,x=[" unites[Longueurs]",new A(s,"mm"),""];return{enonce:c,intro:u,conclusion:d,figure:m,verification:b,uniteOptions:x,x:s,resolution:o}}function de(l){let i,t,n,e;do i=a(5,40),e=a(5,40),t=a(41,100),n=i*e/(t-i);while(n<=0||i*e%Math.abs(t-i)!==0);const s=Math.round(n),o={equation:`(x+${s})\\times${i}=${s}\\times${t}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de droite :<br>
  $\\begin{aligned}(x + ${s})\\times ${i} &= ${i}x + ${i*s}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${i}x + ${i*s} = ${s} \\times ${t}$.<br>  
  Soustrayons $${i*s}$ des deux membres :<br>
  $\\begin{aligned}${i}x &= ${s} \\times ${t} - ${i*s}\\\\
  ${i}x &= ${s*(t-i)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${i}$ :<br>
  $x = \\dfrac{${s*(t-i)}}{${i}} = ${f(e)}$.<br>`},m=R(i,"",t,s);let c="Soit la figure ci-dessous qui n'est pas en vraie grandeur où $[CD]$ et $[AB]$ sont parallèles.";c+=` $AB=${t}\\text{mm}$, $OC=${s}\\text{mm}$ et $CD=${i}\\text{mm}$.<br> Déterminer la longueur $AC$.`;let u="Dans cette configuration de Thalès, on a l'égalité suivante : $\\dfrac{OA}{OC}=\\dfrac{AB}{CD}$.<br>";u+="Cette égalité est équivalente à l'égalité des produits en croix : $CD\\times OA = OC\\times AB$.<br>",u+="En remplaçant les longueurs par les données de l'énoncé et en posant $x=OC$, on obtient l'équation suivante :<br>";const d=`donc $CA=${f(e)}\\text{ mm}$.<br>`,b=`${p("Vérification :","black")}<br>
  D'une part : $CD\\times OA = ${r(i,1)} \\times ${r(e+s,1)} = ${r(i*e+i*s,1)}$.<br>
  D'autre part : $OC\\times AB = ${r(s,1)} \\times ${r(t,1)} = ${r(s*t,1)}$.<br>
  Les produits en croix sont bien égaux pour $x=${e}$.<br>
  `,x=[" unites[Longueurs]",new A(e,"mm"),""];return{enonce:c,intro:u,conclusion:d,figure:m,verification:b,uniteOptions:x,x:e,resolution:o}}const me=[K,W,[Z,_],[ee,te],[ne,se],[re,ie],[$e,oe],[ae,ue],le,ce,de];class Xe extends J{niveau=3;constructor(){super(),this.nbQuestions=2,this.spacingCorr=1.5,this.besoinFormulaireTexte=["Choix des problèmes",`Nombres séparés par des tirets :
1 : basket
2 : basket2
3 : achats
4 : polygone
5 : programmes (produit vs produit,
 ... solution entière positive)
6 : programmes (produit vs produit,
 ... solution entière négative)
7 : tarifs
8 : spectacle
9 : isocèle
10 : Thalès
11 : Thalès2
14 : Mélange`],this.sup="12",this.besoinFormulaire2CaseACocher=["Uniquement des nombres entiers"],this.sup2=!1,this.correctionDetaillee=!0}nouvelleVersion(){const i=U({saisie:this.sup,min:1,max:11,melange:12,defaut:1,shuffle:!0,nbQuestions:this.nbQuestions}).map(Number);for(let t=0,n=0;t<this.nbQuestions&&n<50;){let e=me[i[t]-1];Array.isArray(e)&&(e=e[this.sup2?0:1]);let{enonce:s,intro:$,conclusion:o,figure:m,verification:c,uniteOptions:u,x:d,resolution:b}=e(this.correctionDetaillee);m=m??"",u=u??["","",""];const x=s+m+H(this,t,""+u[0],{texteApres:F(2)+u[2]});let q=$;q+=`$${b.equation}$<br>`,q+=b.texteCorr,q+=c,q+=o,this.questionJamaisPosee(t,d,b.texteCorr)&&(this.listeQuestions[t]=x,this.listeCorrections[t]=q,u[0]===""?P(this,t,{reponse:{value:d}}):P(this,t,{reponse:{value:u[1],options:{unite:!0}}}),t++),n++}I(this)}}export{Ie as amcReady,Ne as amcType,Ge as dateDeModifImportante,ze as dateDePublication,Xe as default,Ue as interactifReady,Fe as interactifType,Je as refs,je as titre,He as uuid};
