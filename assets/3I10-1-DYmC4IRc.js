import{c as i,at as E,I as H,r as h,a as J,i as U,o as M,D as V,p as z,l as K}from"./embellissements-BYV7mIDn.js";import{l as W}from"./message-BfjIT6jz.js";import{t as F}from"./style-CcGLZIPY.js";import{E as X}from"./Exercice-DtXhjCyI.js";import{p as Y,n as Z,a as p}from"./noteLaCouleur-d6i3w2B8.js";import{c as _,a as P,b as $,l as d,o as O,f as Q,i as g,j as L,h as D}from"./2dLutin-DLeyGTRS.js";import{p as ee}from"./qcm-BQR8Ns0N.js";import{s as I}from"./scratchblock-CPHivmfQ.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const ke="Analyser des scripts Scratch",Ce=!0,ve="qcm",Pe=!0,$e="AMCHybride",ge="27/09/2022",Le="18/06/2028",Te="2ecd9",je={"fr-fr":["3I10-1"],"fr-ch":[]};function te(N){return N.reduce((y,k)=>y+(k<0?1:0),0)}class qe extends X{constructor(){super(),this.besoinFormulaireTexte=["Compétence évaluée",`1 : Repérage dans le plan
2 : Boucles répéter n fois imbriquées
3 : Conditionnelles`],this.spacing=2,this.nbQuestions=1,this.typeExercice="Scratch",this.sup="2",this.correctionDetailleeDisponible=!0,this.correctionDetaille=!1}nouvelleVersion(){this.introduction=W({titre:"Information",texte:I(`\\begin{scratch}[fill,blocks,scale=0.5]
\\blockmoreblocks{Note la couleur}\\end{scratch}`)+" Cette brique donne la couleur de la case sur laquelle est positionné le lutin.",couleur:"nombres"});const x=Y({type:1,melange:!1,scale:.5,relatif:!0}),y=["Blanc","Vert","Bleu","Rouge","Noir","Rose","Orange","Jaune","Gris"];this.consigne="Donner la série de couleurs affichées par ce"+(this.nbQuestions>1?"s":"")+" programme"+(this.nbQuestions>1?"s.":".");const k=[];let m=0;const R=parseInt(this.sup),G=[],t=[],c=[];i.unitesLutinParCm=20,i.pixelsParCm=20;for(let e=0,S=0;e<this.nbQuestions&&S<50;){const T=[];c[e]=[];const r=[],n=[],A=E(e+1),w=[[`\\blockinit{quand \\greenflag est cliqué}
`,"Quand le drapeau vert est cliqué"],[`\\blockinit{quand ce sprite est cliqué}
`,"Quand ce sprite est cliqué"],[`\\blockinit{quand la touche \\selectmenu{${A}} est pressée}
`,`Quand la touche ${A} est pressée`],[`\\blockinit{quand la touche \\selectmenu{n'importe laquelle} est pressée}
`,"Quand n'importe quelle touche est pressée"]];let l=`\\begin{scratch}[fill,blocks,scale=0.8]
`;const f=["\\turnright{}","\\turnleft{}"],j=[0,90,180];l+=w[2][0],G[e]=Z({x:0,y:0,plateau:x.plateauNLC,relatif:!0});const s=G[e];switch(t[e]=_(),t.color=H("green"),t.epaisseur=3,t.pointilles=!1,P(0,0,t[e]),$(t[e]),R){case 1:r[0]=0,n[0]=0;do{for(let o=1;o<=3;o++)r[o]=h(-6,5,r),n[o]=h(-4,3,[...n,...r]);for(let o=1;o<=3;o++)r[o]=r[o]*30+15,n[o]=n[o]*30+15}while(te([...r,...n])<3);d(t[e]),l+=`\\blockpen{effacer tout}
`,l+=`\\blockmove{aller à x: \\ovalnum{${r[0]}} y: \\ovalnum{${n[0]}}}
`,l+=`\\blockmove{s'orienter à \\ovalnum{90}}
`,O(Q(90),t[e]),l+=`\\blockpen{stylo en position d'écriture}
`,$(t[e]);for(let o=1;o<=3;o++)l+=`\\blockmove{aller à x: \\ovalnum{${r[o]}} y: \\ovalnum{${n[o]}}}
`,P(r[o],n[o],t[e]),s.currentPos={x:r[o],y:n[o]},l+=`\\blockmoreblocks{Note la couleur}
`,c[e].push(s.nlc()),D(5,t[e]);l+=`\\blockpen{relever le stylo}
`,d(t[e]),l+="\\blockstop{stop \\selectmenu{tout}}";break;case 2:r.push(h(-5,0)*30+15),n.push(h(0,1)*30+15),J([!0,!1])?(r.push(60,60,60),n.push(30,30,30)):(r.push(30,30,30),n.push(60,60,60)),d(t[e]),l+=`\\blockpen{effacer tout}
`,l+=`\\blockmove{aller à x: \\ovalnum{${r[0]}} y: \\ovalnum{${n[0]}}}
`,l+=`\\blockmove{s'orienter à \\ovalnum{${e%3<2?90:180}}}
`,s.currentPos={x:r[0],y:n[0]},P(r[0],n[0],t[e]),s.currentOrientation=e%3<2?90:180,O(Q(e%3<2?90:180),t[e]),l+=`\\blockpen{stylo en position d'écriture}
`,$(t[e]),l+=`\\blockrepeat{répéter \\ovalnum{2} fois}{
\\blockrepeat{répéter \\ovalnum{2} fois}{
\\blockmove{avancer de \\ovalnum{${r[e%3+1]}} pas}
\\blockmove{tourner ${f[e%2]} de \\ovalnum{90} degrés}
\\blockmove{avancer de \\ovalnum{${n[e%3+1]}} pas}
\\blockmove{tourner ${f[(e+1)%2]} de \\ovalnum{90} degrés}
\\blockmoreblocks{Note la couleur}
}
\\blockmove{tourner ${f[e%3===2?1:0]} de \\ovalnum{90} degrés}
}
`;for(let o=0;o<2;o++){for(let B=0;B<2;B++){const C=p(`AV${r[e%3+1]}`,t[e],s);if(C[0]&&(s.currentPos.x=C[1],s.currentPos.y=C[2],s.currentOrientation=C[3],t[e]=C[5]),f[e%2]==="\\turnright{}"){const a=p("TD90",t[e],s);a[0]&&(s.currentPos.x=a[1],s.currentPos.y=a[2],s.currentOrientation=a[3],t[e]=a[5])}else{const a=p("TG90",t[e],s);a[0]&&(s.currentPos.x=a[1],s.currentPos.y=a[2],s.currentOrientation=a[3],t[e]=a[5])}const v=p(`AV${n[e%3+1]}`,t[e],s);if(v[0]&&(s.currentPos.x=v[1],s.currentPos.y=v[2],s.currentOrientation=v[3],t[e]=v[5]),f[(e+1)%2]==="\\turnright{}"){const a=p("TD90",t[e],s);s.currentPos.x=a[1],s.currentPos.y=a[2],s.currentOrientation=a[3],t[e]=a[5]}else{const a=p("TG90",t[e],s);a[0]&&(s.currentPos.x=a[1],s.currentPos.y=a[2],s.currentOrientation=a[3],t[e]=a[5])}D(5,t[e]),c[e].push(s.nlc())}let u;f[e%3===2?1:0]==="\\turnright{}"?u=p("TD90",t[e],s):u=p("TG90",t[e],s),s.currentPos.x=u[1],s.currentPos.y=u[2],s.currentOrientation=u[3],t[e]=u[5]}l+=`\\blockpen{relever le stylo}
`,d(t[e]),l+=`\\blockstop{stop \\selectmenu{tout}}
`;break;default:r.push(h(-4,2)*30+15),n.push(h(-4,2)*30+15),r.push(-120,30,30,60,30,30),n.push(30,-120,-30,30,60,60),d(t[e]),l+=`\\blockpen{effacer tout}
`,l+=`\\blockmove{aller à x: \\ovalnum{${r[0]}} y: \\ovalnum{${n[0]}}}
`,s.currentPos={x:r[0],y:n[0]},P(r[0],n[0],t[e]),l+=`\\blockmove{s'orienter à \\ovalnum{${j[e%3]}}}
`,s.currentOrientation=j[e%3],O(Q(j[e%3]),t[e]),l+=`\\blockpen{stylo en position d'écriture}
`,$(t[e]),l+=`\\blockrepeat{répéter \\ovalnum{4} fois}{
\\blockifelse{si \\booloperator{\\ovalmove{${e%3<1?"abscisse x":"ordonnée y"}} > \\ovalnum{${e%3<1?120:30}}} alors}
{\\blockmove{ajouter \\ovalnum{${r[e%3+1]}} à x}
\\blockmove{ajouter \\ovalnum{${n[e%3+1]}} à y}
}
{\\blockmove{ajouter \\ovalnum{${r[e%3+4]}} à x}
\\blockmove{ajouter \\ovalnum{${n[e%3+4]}} à y}
}
\\blockmoreblocks{Note la couleur}
}
`;for(let o=0;o<4;o++)e%3<1?t[e].x>(e%3<1?120:30)/i.unitesLutinParCm?(g(r[e%3+1],t[e]),L(n[e%3+1],t[e]),s.testCoords(t[e].x*i.unitesLutinParCm,t[e].y*i.unitesLutinParCm)&&(s.currentPos={x:t[e].x*i.unitesLutinParCm,y:t[e].y*i.unitesLutinParCm})):(g(r[e%3+4],t[e]),L(n[e%3+4],t[e]),s.testCoords(t[e].x*i.unitesLutinParCm,t[e].y*i.unitesLutinParCm)&&(s.currentPos={x:t[e].x*i.unitesLutinParCm,y:t[e].y*i.unitesLutinParCm})):t[e].y>(e%3<1?120:30)/i.unitesLutinParCm?(g(r[e%3+1],t[e]),L(n[e%3+1],t[e]),s.testCoords(t[e].x*i.unitesLutinParCm,t[e].y*i.unitesLutinParCm)&&(s.currentPos={x:t[e].x*i.unitesLutinParCm,y:t[e].y*i.unitesLutinParCm})):(g(r[e%3+4],t[e]),L(n[e%3+4],t[e]),s.testCoords(t[e].x*i.unitesLutinParCm,t[e].y*i.unitesLutinParCm)&&(s.currentPos={x:t[e].x*i.unitesLutinParCm,y:t[e].y*i.unitesLutinParCm})),D(5,t[e]),c[e].push(s.nlc());l+=`\\blockpen{relever le stylo}
`,d(t[e]),l+="\\blockstop{stop \\selectmenu{tout}}";break}l+="\\end{scratch}";let q=`${this.interactif||i.isAmc?"":"Noter la séquence de couleurs produite.<br>"}`;q+=U(I(l),M(Object.assign({},V(x.objets),{scale:.4,style:"display: inline"}),x.objets),35);let b="On obtient la série de couleurs suivante :<br> ";b+=`${F(c[e][0])} `;for(let o=1;o<c[e].length;o++)b+=`- ${F(c[e][o])} `;b+="<br>",t[e].animation=`<radialGradient id="Ball" cx="8" cy="-3" r="20" gradientUnits="userSpaceOnUse">
    <stop offset="0" style="stop-color:#FFFF99"/>
    <stop offset="1" style="stop-color:#FF9400"/>
  </radialGradient> <circle fill="url(#Ball)"  r="12" stroke-width="1"
   x="${t[e].listeTraces[0][0]*i.pixelsParCm}"
    y="${-t[e].listeTraces[0][1]*i.pixelsParCm}">

    <animateMotion path="M ${t[e].listeTraces[0][0]*i.pixelsParCm} ${-t[e].listeTraces[0][1]*i.pixelsParCm} L`;for(let o=0;o<t[e].listeTraces.length;o++){const u=z(t[e].listeTraces[o][2],t[e].listeTraces[o][3]);t[e].animation+=` ${u.xSVG(i.pixelsParCm)} ${u.ySVG(i.pixelsParCm)} `}t[e].animation+='" begin="10s" dur="10s" repeatCount="indefinite" />; </circle>',T.push(x.objets,t[e]),b+=M(Object.assign({},V(T),{style:"display: inline",scale:.4}),T);for(let o=0;o<c[e].length;o++){this.autoCorrection[m+o]={},this.autoCorrection[m+o].options={ordered:!0,vertical:!1,nbCols:9},this.autoCorrection[m+o].propositions=[];for(let u=0;u<y.length;u++)this.autoCorrection[m+o].propositions.push({texte:y[u],statut:c[e][o]===y[u]})}for(let o=0;o<c[e].length;o++)k[m+o]=ee(this,m+o),q+=`Couleur N° ${o+1} ? `+(this.interactif?k[m+o].texte:""),b+=`Couleur N° ${o+1} : `+(this.interactif?k[m+o].texteCorr:"");this.questionJamaisPosee(e,...c[e])&&(this.listeQuestions[e]=q,this.listeCorrections[e]=b,m+=c[e].length,e++),S++}K(this)}}export{Pe as amcReady,$e as amcType,Le as dateDeModifImportante,ge as dateDePublication,qe as default,Ce as interactifReady,ve as interactifType,je as refs,ke as titre,Te as uuid};
