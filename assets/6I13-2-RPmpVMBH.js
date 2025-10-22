import{c as q}from"./lists-i1i4IA1M.js";import{c as b}from"./questionMathLive-DdRvWqlN.js";import{y as I,g as C,bI as F,e as c,m as l,r as P}from"./embellissements-BYV7mIDn.js";import{E as j}from"./Exercice-DtXhjCyI.js";import{V as w,e as E}from"./patternsPreDef-CbRb9iae.js";import"./tableauMathlive-xx-nDjq0.js";import"./index-BUDQz6-w.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"decimal.js";import"seedrandom";import"mathjs";import"katex";import"earcut";import"roughjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./gestionInteractif-DujZpSu8.js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./shapes2d-C4LL3wzV.js";import"./Figures2D-C1IYLm7-.js";import"./VisualPattern-D11BgzPT.js";import"./Canvas3DElement-BqpJ_f1x.js";import"./three.module-6qJVdblD.js";const ue="Comprendre un algorithme itératif",le=!0,pe="mathLive",ce="10/06/2025",fe="328b7",$e={"fr-fr":["6I13-2"],"fr-ch":["autres-15"]};class be extends j{canvas3ds=[];constructor(){super(),this.nbQuestions=1,this.comment=`Étudier les premiers termes d'une série de motifs afin de donner le nombre de formes du motif suivant.

 Les patterns sont des motifs figuratifs qui évoluent selon des règles définies.

 Cet exercice contient des patterns issus de l'excellent site : https://www.visualpatterns.org/`,this.besoinFormulaireNumerique=["Nombre de figures par question",4],this.sup=3,this.besoinFormulaire4Texte=["Types de questions",`Nombres séparés par des tirets :
1: Motif suivant à dessiner
2 : Motif suivant (nombre)
3 : Motif 10 (nombre)
4 : Numéro du motif
5 : Motif 100 (nombre)
6 : Question au hasard parmi les 5 précédentes`],this.sup4="6"}nouvelleVersion(){this.nbQuestions>25&&(this.nbQuestions=25);const y=I(E),r=Math.max(1,this.sup),N=Array.from(new Set(C({saisie:this.sup4,min:1,max:5,defaut:1,melange:6,nbQuestions:5,shuffle:!1}).map(Number)));let f=0;for(let d=0;d<this.nbQuestions;){const $=[],e=y.pop();if(!e)continue;const s=e.fonctionNb(2)-e.fonctionNb(1),a=e.fonctionNb(1)-s,v=e.type==="linéaire"?`On constate que le nombre de formes augmente de $${s}$ à chaque étape.<br>
        Et que c'est aussi le nombre de formes à l'étape 1. Par conséquent, pour trouver le nombre de formes d'un motif il faut simplement multiplier par ${s} le numéro du motif.`:`On constate que le nombre de formes augmente de $${s}$ à chaque étape.<br>
        Cependant, il n'y a pas ${s} formes sur le motif 1, mais ${e.fonctionNb(1)}. Par conséquent, il faut multiplier le numéro du motif par ${s} et ${a<0?`retirer ${-a}`:`ajouter ${a}`}.`,p=new w({initialCells:[],prefixId:"",shapes:["cube-trois-couleurs"],type:"full3D"});p.shapes=[...e.shapes??["cube-trois-couleurs-tube-edges"]].slice(0,11),p.iterate3d=e.iterate3d;let h=`Voici les ${r} premiers motifs d'une série de motifs figuratifs. Ils évoluent selon des règles définies.<br><br>`;for(let n=0;n<r+1;n++){p.prefixId=`Serie${d}F${n}`;const t=p.render3d(n+1);$.push(t)}h+=`${F(r-1).map(n=>`<div style="display: inline-block; width: 250px; height: 250px; margin-right: 10px;">${$[n]}<h1>motif ${n+1}</h1></div>`).join(`
`)}`;let x="";const m=[],u=[],i="de cubes";for(const n of N)switch(n){case 1:m.push(`
Dessiner le motif $${r+1}$.<br>`),$[r+1]=p.render3d(r+1),u.push(`Voici le motif $${r+1}$ :<br>
              ${`<div style="display: inline-block; width: 250px; height: 250px; margin-right: 10px;">${$[r+1]}</div>`}`);break;case 2:{const t=e.fonctionNb(r+1),o=c(t,0);m.push(`
Quel sera le nombre ${i} dans le motif $${r+1}$ ?<br>${b({exercice:this,question:f++,objetReponse:{reponse:{value:o}},typeInteractivite:"mathlive"})}`),u.push(`Le motif $${r+1}$ contient $${l(c(t,0))}$ formes ${i}.<br>`)}break;case 3:{const t=e.fonctionNb(10),o=c(t,0);m.push(`
Quel sera le nombre ${i} pour le motif $10$ ?<br>${b({exercice:this,question:f++,objetReponse:{reponse:{value:o}},typeInteractivite:"mathlive"})}
            `),u.push(`Le motif $10$ contient $${l(o)}$ formes ${i}.<br>
            En effet, la formule pour trouver le nombre ${i} est : $${l(e.formule.replaceAll("n","10"))}$.<br>
            ${v}`)}break;case 4:{const t=P(20,80),o=e.fonctionNb(t),g=c(o,0);m.push(`
Un motif de cette série contient $${g}$ ${i.replace("de ","")}. À quel numéro de motif cela correspond-il ?<br>${b({exercice:this,question:f++,objetReponse:{reponse:{value:t.toString()}},typeInteractivite:"mathlive"})}
            `);const Q=e.type==="linéaire"?`On constate que le nombre de formes  augmente de $${s}$ à chaque étape.<br>
        Et que c'est aussi le nombre de formes à l'étape 1. Par conséquent, pour trouver le numéro d'un motif dont on connait le nombre de formes, il faut simplement diviser ce nombre par ${s} pour trouver le numéro.`:`On constate que le nombre de formes augmente de $${s}$ à chaque étape.<br>
        Cependant, il n'y a pas ${s} formes sur le motif 1, mais ${e.fonctionNb(1)}. Par conséquent, il faut ${a<0?`ajouter ${-a}`:`retirer ${a}`} au nombre de formes puis diviser le résultat par ${s} : <br>
        $\\dfrac{${g} ${a<0?"+":"-"} ${Math.abs(a)}}{${s}}=${l(t)}$.`;u.push(`C'est le motif numéro $${l(t.toString())}$ qui contient $${l(c(o,0))}$ ${p.shapes[0]}s.<br>
            ${Q}`)}break;case 5:{const t=e.fonctionNb(100),o=c(t,0);m.push(`
Quel sera le nombre ${i} pour le motif $100$ ?<br>${b({exercice:this,question:f++,objetReponse:{reponse:{value:o}},typeInteractivite:"mathlive"})}
            `),u.push(`Le motif $100$ contient $${l(o)}$ formes ${i}.<br>
            En effet, la formule pour trouver le nombre ${i} est : $${l(e.formule.replaceAll("n","100"))}$.<br>
            ${v}`)}break}h+=m.length===1?m[0]:q({items:m,style:"alpha"}),x+=u.length===1?u[0]:q({items:u,style:"alpha"}),this.listeQuestions.push(h),this.listeCorrections.push(x),d++}}}export{ce as dateDePublication,be as default,le as interactifReady,pe as interactifType,$e as refs,ue as titre,fe as uuid};
