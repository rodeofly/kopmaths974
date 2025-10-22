import{g as S,cr as T,r as q,p as j,v as y,f as w,aS as D,a8 as d,m as R,o as I,D as M,l as B}from"./embellissements-BYV7mIDn.js";import{h as F}from"./gestionInteractif-DujZpSu8.js";import{a as O}from"./questionMathLive-DdRvWqlN.js";import{e as E}from"./equations-BON3qEbF.js";import{E as J}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./index-BUDQz6-w.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./deprecatedFractions-D2cbyAQf.js";import"./colors-bl7PrqSM.js";const he="Résoudre un problème mêlant équations et périmètre et aire d'un rectangle",ge=!0,fe="mathLive",De="11/06/2025",xe="cd2f2",Ce={"fr-fr":["3L13-4","BP2RES15"],"fr-ch":["11FA6-9"]};class ve extends J{constructor(){super(),this.nbQuestions=2,this.sup="1-2",this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets :","1 : Deux longueurs identiques","2 : Deux longueurs différentes","3 : Mélange"].join(`
`)],this.correctionDetailleeDisponible=!0}nouvelleVersion(){const G=S({saisie:this.sup,min:1,max:2,melange:3,defaut:3,nbQuestions:this.nbQuestions});for(let u=0,L=0,P,x;u<this.nbQuestions&&L<50;){const m=[],Q=T(j(0,0),5,3.5,{angleRotation:q(-20,20),avecCodageSegments:!1}),[s,r,n,i]=Q[0].listePoints,h=s.nom+r.nom+n.nom+i.nom;m.push(Q);let e,o,b,p,C,g,f,v,A;switch(P=`$${h}$ est un rectangle.<br>`,G[u]){case 1:{let $=-1;const a=q(20,80);do e=E({valeursRelatives:!1,type:"ax+b=cx+d"}),$=e.a*e.reponse+e.b;while($<0);const c=e.a,l=e.b;p=2*$+2*a;let t;switch(q(1,2)){case 1:o=`${s.nom}${r.nom}`,m.push(D(`$${e.membreDeGauche}$`,r,s)),b=`${n.nom}${i.nom}`,m.push(D(`$${e.membreDeDroite}$`,i,n)),t=`${r.nom}${n.nom}`,v=o,A=t,g=$,f=a;break;case 2:default:o=`${r.nom}${n.nom}`,m.push(D(`$${e.membreDeGauche}$`,n,r)),b=`${i.nom}${s.nom}`,m.push(D(`$${e.membreDeDroite}$`,s,i)),t=`${s.nom}${r.nom}`,v=t,A=o,g=a,f=$;break}C=g*f,P+=`$x$ est un nombre tel que $${o}=${e.membreDeGauche}$ et $${b}=${e.membreDeDroite}$ (en cm).<br>`,x=`${h} est un rectangle donc ses côtés opposés sont de la même longueur donc $${s.nom}${r.nom}=${n.nom}${i.nom}$ et $${r.nom}${n.nom}=${i.nom}${s.nom}$.<br>
            Ainsi $${e.egalite}$.<br><br>
            ${d("Résolution de l'équation.")}<br>
            ${this.correctionDetaillee?e.correctionDetaillee:e.correction}<br><br>
            ${d(`Calcul de $${o}$ en cm.`)}<br>
            $${o}=${e.membreDeGauche}$<br>
            $${o}=${c} \\times ${e.reponse}${w(l)}$<br>
            $${o}=${$}$<br><br>
            ${d(`Calcul de $${t}$ en cm.`)}<br>
            $\\mathcal{P} = 2 \\times ${$} + 2 \\times ${t}$<br>
            $${p} = ${2*$} + 2 ${t}$<br>`,this.correctionDetaillee&&(x+=`On soustrait $${2*$}$ aux deux membres.<br>`),x+=`$${p} ${R(`- ${2*$}`)} = 2 ${t} ${R(`- ${2*$}`)}$<br>
            $${p-2*$} = 2 ${t}$<br>`,this.correctionDetaillee&&(x+="On divise les deux membres par $2$.<br>"),x+=`$${p-2*$} ${R("\\div 2")} = 2 ${t} ${R("\\div 2")}$<br>
            $${a} = ${t}$<br><br>
            ${d(`Calcul de l'aire de $${h}$ en cm$^2$.`)}<br>
            $\\mathcal{A} = L \\times l$<br>
            $\\mathcal{A} = ${v} \\times ${A}$<br>
            $\\mathcal{A} = ${g} \\times ${f}$<br>
            $\\mathcal{A} = ${C}$<br>
            Donc l'aire du rectangle $${h}$ est de $${R(C)}$ cm$^2$.`;break}case 2:default:{let $,a,c,l;do e=E({valeursRelatives:!1,divisiblePar:2,type:"ax+b=d"}),$=q(1,e.a/2),a=e.a/2-$,c=q(1,e.b/2),l=e.b/2-c,g=$*e.reponse+c;while($*e.reponse+c<=0||a*e.reponse+l<=0||e.d===4||a===0);p=e.d;const t=`${y($)}x${c===0?"":w(c)}`,k=`${y(a)}x${l===0?"":w(l)}`;switch(q(1,2)){case 1:v=`${s.nom}${r.nom}`,m.push(D(`$${t}$`,r,s));break;case 2:default:v=`${n.nom}${i.nom}`,m.push(D(`$${t}$`,i,n));break}switch(q(1,2)){case 1:A=`${r.nom}${n.nom}`,m.push(D(`$${k}$`,n,r));break;case 2:default:A=`${i.nom}${s.nom}`,m.push(D(`$${k}$`,s,i));break}o=v,b=A,f=a*e.reponse+l,C=g*f,P+=`$x$ est un nombre tel que $${o}=${t}$ et $${b}=${k}$ (en cm).<br>`,x=`${h} est un rectangle donc ses côtés opposés sont de la même longueur donc $${s.nom}${r.nom}=${n.nom}${i.nom}$ et $${r.nom}${n.nom}=${i.nom}${s.nom}$.<br><br>
            ${d("Mise en équation.")}<br>
            $\\mathcal{P} = 2 \\times ${o} + 2 \\times ${b}$<br>
            $${p} = 2 \\times ${$===0||c===0?t:`(${t})`} + 2 \\times ${a===0||l===0?k:`(${k})`}$<br>
            $${p} = ${e.membreDeGauche}$<br><br>
            ${d("Résolution de l'équation.")}<br>
            ${this.correctionDetaillee?e.correctionDetaillee:e.correction}<br><br>
            ${d(`Calcul de $${o}$ en cm.`)}<br>
            $${o} = ${$} \\times ${e.reponse}${c===0?"":w(c)}$<br>
            $${o} = ${g}$<br><br>
            ${d(`Calcul de $${b}$ en cm.`)}<br>
            $${b} = ${a} \\times ${e.reponse}${l===0?"":w(l)}$<br>
            $${b} = ${f}$<br><br>
            ${d(`Calcul de l'aire de $${h}$ en cm$^2$.`)}<br>
            $\\mathcal{A} = L \\times l$<br>
            $\\mathcal{A} = ${v} \\times ${A}$<br>
            $\\mathcal{A} = ${g} \\times ${f}$<br>
            $\\mathcal{A} = ${C}$<br>
            Donc l'aire du rectangle $${h}$ est de $${R(C)}$ cm$^2$.`;break}}P+=`Le périmètre de $${h}$ mesure $${p}$ cm.<br>
      Déterminer son aire en cm$^2$.`+O(this,u,"inline"),F(this,u,{reponse:{value:C}}),P+=I(Object.assign({pixelsParCm:20,scale:.5},M(m)),m),this.questionJamaisPosee(u,u)&&(this.listeQuestions[u]=P,this.listeCorrections[u]=x,u++),L++}B(this)}}export{De as dateDeModifImportante,ve as default,ge as interactifReady,fe as interactifType,Ce as refs,he as titre,xe as uuid};
