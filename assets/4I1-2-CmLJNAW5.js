import{a as k,r as p,c as T,I as P,d as B,y as A,T as H,p as D,k as I,o as F,W as G,ao as V}from"./embellissements-BYV7mIDn.js";import{E as W}from"./Exercice-DtXhjCyI.js";import{c as z,a as q,b as J,o as L,d as n,t as s,e as a,l as K,f as U}from"./2dLutin-DLeyGTRS.js";import{s as X}from"./scratchblock-CPHivmfQ.js";import{a as Y}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";const xe=!0,ye="cliqueFigure",Me=!0,Ce="qcmMono",Te="Tortue Scratch avec répétitions",qe="29/06/2021",Qe="8ded2",Ee={"fr-fr":["4I1-2"],"fr-ch":[]};class je extends W{indiceBonneFigure;constructor(){super(),this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.typeExercice="Scratch",this.interactif=!0,this.listeAvecNumerotation=!1,this.indiceBonneFigure=0}nouvelleVersion(y){this.figures=[];const M=[];this.autoCorrection[0]={};const N=k(["polygonesReguliers","spirales","rosaces1","roueDentee","frise1"]);let o,t,c,i,l;const d=k(["turnright","turnleft"]);let $,m;d==="turnright"?m="turnleft":m="turnright";const e=[],u=p(0,3),Q=90,E=0,j=0;T.unitesLutinParCm=10,T.pixelsParCm=20;let C="";for(let r=0;r<4;r++)e[r]=z(),e[r].color=P("green"),e[r].epaisseur=3,e[r].pointilles=0,q(E,j,e[r]),J(e[r]),L(U(Q),e[r]);switch(e[0].codeScratch=`\\begin{scratch}[print,fill,blocks,scale=0.75]
 \\blockinit{quand \\greenflag est cliqué}
 `,e[0].codeScratch+=`\\blockmove{aller à x: \\ovalnum{${E}} y: \\ovalnum{${j}}}
 `,e[0].codeScratch+=`\\blockmove{s'orienter à \\ovalnum{${Q}}}
 `,e[0].codeScratch+=`\\blockpen{stylo en position d'écriture}
 `,N){case"polygonesReguliers":i=k([3,5,6,7,8]),o=B(360/i,1),t=(10-i)*10,u!==3?e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${i}} fois}
{
\\blockmove{avancer de \\ovalnum{${t}} pas}
`:e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${o}} degrés}
\\blockrepeat{répéter \\ovalnum{${i-1}} fois}
{
\\blockmove{avancer de \\ovalnum{${t}} pas}

`,u===0||u===3?e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${o}} degrés}
}
`:u===1?e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${o}} degrés}
}
`:o!==90?e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${180-o}} degrés}
}
`:e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${o}} degrés}
              \\blockmove{avancer de \\ovalnum{${t}} pas}

              \\blockmove{tourner \\${d}{} de \\ovalnum{${o}} degrés}
}
`,L(-90,e[2]);for(let r=0;r<i;r++)n(t,e[0]),n(t,e[1]),n(t,e[2]),r!==0&&n(t,e[3]),d==="turnright"?(s(o,e[0]),s(o,e[3]),a(o,e[1]),o!==90?s(180-o,e[2]):(s(o,e[2]),n(t,e[2]),s(o,e[2]))):(a(o,e[0]),a(o,e[3]),s(o,e[1]),o!==90?a(180-o,e[2]):(a(o,e[2]),n(t,e[2]),a(o,e[2])));break;case"rosaces1":switch(i=k([3,4,5,6,8]),l=p(3,6,5),o=p(2,4)*10,t=(10-i)*5,c=(8-l)*4,e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${i}} fois} 
{`,u<2&&(e[0].codeScratch+=`\\blockmove{aller à x: \\ovalnum{0} y: \\ovalnum{0}}
`),u%2===0?e[0].codeScratch+=`\\blockmove{avancer de \\ovalnum{${o}} pas}
`:u===1?e[0].codeScratch+=`\\blockmove{avancer de \\ovalnum{${o/2}} pas}
`:e[0].codeScratch+=`\\blockmove{avancer de \\ovalnum{${o+2}} pas}
`,u){case 0:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{${90-180/l}} degrés}
`;break;case 1:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{90} degrés}
`;break;case 2:e[0].codeScratch+=`\\blockmove{tourner \\turnleft{} de \\ovalnum{90} degrés}
`;break}switch(e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${l}} fois}
        {
          \\blockmove{avancer de \\ovalnum{${c}} pas}
          \\blockmove{tourner \\turnleft{} de \\ovalnum{${360/l}} degrés}
        }
`,u){case 0:e[0].codeScratch+=`\\blockmove{tourner \\turnleft{} de \\ovalnum{${90-180/l}} degrés}
`;break;case 1:e[0].codeScratch+=`\\blockmove{tourner \\turnleft{} de \\ovalnum{90} degrés}
`;break;case 2:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{90} degrés}
`;break;case 3:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{180} degrés}
`;break}e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${360/i}} degrés}
}
`;for(let r=0;r<i;r++){q(0,0,e[0]),q(0,0,e[1]),n(o,e[0]),n(o/2,e[1]),n(o,e[2]),n(o+2,e[3]),s(90-180/l,e[0]),s(90,e[1]),a(90,e[2]);for(let v=0;v<l;v++)n(c,e[0]),n(c,e[1]),n(c,e[2]),n(c,e[3]),a(360/l,e[0]),a(360/l,e[1]),a(360/l,e[2]),a(360/l,e[3]);a(90-180/l,e[0]),a(90,e[1]),s(90,e[2]),s(180,e[3]),d==="turnright"?(s(360/i,e[0]),s(360/i,e[1]),s(360/i,e[2]),s(360/i,e[3])):(a(360/i,e[0]),a(360/i,e[1]),a(360/i,e[2]),a(360/i,e[3]))}break;case"spirales":i=k([3,4,5,6,8]),l=p(1,4)+Math.floor((9-i)/2),o=p(1,4)*5,t=60+p(0,4)*5,c=360/i,u!==2?e[0].codeScratch+=`\\blockvariable{mettre \\selectmenu*{longueur} à \\ovalnum{${o}}}
          \\blockrepeat{répéter jusqu'à ce que \\booloperator{\\ovalvariable{longueur}>\\ovalnum{${t}}}}
          {
          \\blockmove{avancer de \\ovalvariable{longueur} pas}
`:e[0].codeScratch+=`\\blockvariable{mettre \\selectmenu*{longueur} à \\ovalnum{${t}}}
          \\blockrepeat{répéter jusqu'à ce que \\booloperator{\\ovalvariable{longueur}<\\ovalnum{${o}}}}
          {
          \\blockmove{avancer de \\ovalvariable{longueur} pas}
`,u%2===0?e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${c}} degrés}
`:u===1?d==="turnright"?e[0].codeScratch+=`\\blockmove{tourner \\turnleft{} de \\ovalnum{${c}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{${c}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${c-10}} degrés}
`,u===2?(e[0].codeScratch+=`\\blockvariable{ajouter \\ovalnum{${-l}} à \\ovalvariable{longueur}}
`,e[0].codeScratch+=`}
`):(e[0].codeScratch+=`\\blockvariable{ajouter \\ovalnum{${l}} à \\ovalvariable{longueur}}
`,e[0].codeScratch+=`}
`);for(let r=o;r<t;r+=l)n(r,e[0]),n(r,e[1]),n(r,e[3]),d==="turnright"?(s(c,e[0]),a(c,e[1]),s(c-10,e[3])):(a(c,e[0]),s(c,e[1]),a(c-10,e[3]));for(let r=t;r>o;r-=l)n(r,e[2]),d==="turnright"?s(c,e[2]):a(c,e[2]);break;case"roueDentee":i=k([3,4,5,6,8]),o=p(1,2)*10,t=720/i,c=360/i,u<5&&(e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${i}} fois}
                                  {
                                  \\blockmove{avancer de \\ovalvariable{${o}} pas}
`,u<2?e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${c}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${c}} degrés}
`,e[0].codeScratch+=`\\blockmove{avancer de \\ovalvariable{${o*2}} pas}
`,u===0?e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${t}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${t}} degrés}
`,u<3?e[0].codeScratch+=`\\blockmove{avancer de \\ovalvariable{${o*2}} pas}
`:e[0].codeScratch+=`\\blockmove{avancer de \\ovalvariable{${o}} pas}
`,u>0?e[0].codeScratch+=`\\blockmove{tourner \\${d}{} de \\ovalnum{${t}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${t}} degrés}
`,e[0].codeScratch+=`}
`);for(let r=0;r<i;r++)n(o,e[0]),n(o,e[1]),n(o,e[2]),n(o,e[3]),d==="turnright"?(s(c,e[0]),s(c,e[1]),a(c,e[2]),a(c,e[3])):(a(c,e[0]),a(c,e[1]),s(c,e[2]),s(c,e[3])),n(o*2,e[0]),n(o*2,e[1]),n(o*2,e[2]),n(o*2,e[3]),d==="turnright"?(s(t,e[0]),a(t,e[1]),a(t,e[2]),a(t,e[3])):(a(t,e[0]),s(t,e[1]),s(t,e[2]),s(t,e[3])),n(o*2,e[0]),n(o*2,e[1]),n(o*2,e[2]),n(o,e[3]),d==="turnright"?(a(t,e[0]),s(t,e[1]),s(t,e[2]),s(t,e[3])):(s(t,e[0]),a(t,e[1]),a(t,e[2]),a(t,e[3]));break;case"frise1":i=3,l=k([45,60,90]),l=k([45,60,90]),o=p(1,2)*5,t=p(1,3)*5,c=p(2,4)*5,$=[[`\\blockmove{avancer de \\ovalvariable{${t}} pas}
`,t],[`\\blockmove{tourner \\${d}{} de \\ovalnum{${l}} degrés}
`,d,l],[`\\blockmove{avancer de \\ovalvariable{${o}} pas}
`,o],[`\\blockmove{tourner \\${d}{} de \\ovalnum{${l}} degrés}
`,d,l],[`\\blockmove{avancer de \\ovalvariable{${o}} pas}
`,o],[`\\blockmove{tourner \\${m}{} de \\ovalnum{${l}} degrés}
`,m,l],[`\\blockmove{avancer de \\ovalvariable{${o}} pas}
`,o],[`\\blockmove{tourner \\${m}{} de \\ovalnum{${l}} degrés}
`,m,l],[`\\blockmove{avancer de \\ovalvariable{${c}} pas}
`,c],[`\\blockmove{tourner \\${m}{} de \\ovalnum{${l}} degrés}
`,m,l],[`\\blockmove{avancer de \\ovalvariable{${t}} pas}
`,t],[`\\blockmove{tourner \\${d}{} de \\ovalnum{${l}} degrés}
`,d,l]],e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${i}} fois}
{
`;for(let r=0;r<6;r++)e[0].codeScratch+=$[2*(u+r)%12][0],e[0].codeScratch+=$[(2*(u+r)+1)%12][0];e[0].codeScratch+=`}
`;for(let r=0;r<i;r++)for(let v=0;v<6;v++)for(let g=0;g<4;g++)n(Number($[2*(g+v)%12][1]),e[g]),$[(2*(g+v)+1)%12][1]==="turnright"?s(Number($[(2*(g+v)+1)%12][2]),e[g]):a(Number($[(2*(g+v)+1)%12][2]),e[g]);break}e[0].codeScratch+=`\\blockpen{relever le stylo}
`,e[0].codeScratch+="\\end{scratch}";let b="Quelle figure est tracée par le stylo à l'exécution du programme ci-dessous ?<br>Le tracé démarre à la croix bleue.<br>";b+="S'orienter à 90° signifie s'orienter vers la droite de l'écran.<br>";let f=1,S=1;for(let r=0;r<4;r++)K(e[r]),f=Math.max(f,e[r].xMax-e[r].xMin),S=Math.max(S,e[r].yMax-e[r].yMin);f=Math.round(f+1.5),b+='<table style="width: 100%"><tr><td>',b+=X(e[0].codeScratch),b+="</td><td>",b+="    ",b+='</td><td style="vertical-align: top; text-align: center">';let h=[0,1,2,3];h=A(h);for(let r=0;r<4;r++)for(let v=0;v<e[r].listeTraces.length;v++)e[r].listeTraces[v][0]-=Math.floor(e[r].xMin),e[r].listeTraces[v][2]-=Math.floor(e[r].xMin),e[r].listeTraces[v][1]-=Math.floor(e[r].yMin),e[r].listeTraces[v][3]-=Math.floor(e[r].yMin);const x=[];for(let r=0;r<4;r++)x[r]=H(D(e[r].listeTraces[0][0],e[r].listeTraces[0][1])),x[r].taille=5,x[r].color=P("blue"),x[r].epaisseur=2,r===u&&M.push(x[r]);const O=I(0,S+.5,1,S+.5);O.epaisseur=2,O.styleExtremites="|-|",M.push(e[u]);const R={xmin:-.5,ymin:-1.5,xmax:f,ymax:S+1,pixelsParCm:Math.round(400/f),scale:4/f,style:"display: inline-block"},w={xmin:-.5,ymin:-1.5,xmax:f,ymax:S+1,pixelsParCm:Math.round(400/f),scale:4/f,style:"display: inline-block"};for(let r=0;r<4;r++){const v={...R,id:`cliquefigure${r}Ex${y}Q0`};b+=F(v,e[h[r]],x[h[r]],G(`figure ${r+1}`,D((e[h[r]].xMax-e[h[r]].xMin)/2,-.8),0,"black",1)),r===1&&(b+="<br>")}b+="</td></tr></table>",this.autoCorrection[0]={enonce:b,propositions:[{texte:"figure 1",statut:!1},{texte:"figure 2",statut:!1},{texte:"figure 3",statut:!1},{texte:"figure 4",statut:!1}],options:{ordered:!0}},this.autoCorrection[0].propositions[h.indexOf(u)].statut=!0,Y(this.autoCorrection[0]),this.indiceBonneFigure=h.indexOf(u),C+=`La bonne figure est la figure ${this.indiceBonneFigure+1}`,this.interactif&&T.isHtml&&(b+=`<span id="resultatCheckEx${this.numeroExercice}Q0"></span>`),this.figures[0]=[{id:`cliquefigure0Ex${this.numeroExercice}Q0`,solution:h.indexOf(u)===0},{id:`cliquefigure1Ex${y}Q0`,solution:h.indexOf(u)===1},{id:`cliquefigure2Ex${y}Q0`,solution:h.indexOf(u)===2},{id:`cliquefigure3Ex${y}Q0`,solution:h.indexOf(u)===3}],C+=F(w,M),this.listeQuestions.push(b),this.listeCorrections.push(C),V(this)}}export{Me as amcReady,Ce as amcType,qe as dateDePublication,je as default,xe as interactifReady,ye as interactifType,Ee as refs,Te as titre,Qe as uuid};
