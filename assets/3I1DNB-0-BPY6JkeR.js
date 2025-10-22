import{ac as U,p as f,a4 as l,a3 as a,ah as b,A as D,C as E,k as W,o as k,D as h,bG as N,bP as X,cm as j,t as F,bk as Y,a as d,r as ee}from"./embellissements-BYV7mIDn.js";import{c as G}from"./lists-i1i4IA1M.js";import{s as L}from"./scratchblock-CPHivmfQ.js";import te from"./ExerciceBrevetA-CJtX4hAj.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceBrevet-lD74fcMo.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const ge="972f6",xe={"fr-fr":["3I1DNB-0","3Z1DNB-16"],"fr-ch":[]},Pe="Scratch",je="7/12/2024";class ye extends te{constructor(){super(),this.besoinFormulaireCaseACocher=["Sujet original",!1],this.sup=!1,this.introduction=U("D'après l'exercice 5 du brevet Amérique du sud 2024.<br>"),this.versionAleatoire(0)}appliquerLesValeurs(t,o,u,p,v,n,y){let g,x,s;const c=y==="direct",m=c?-1:1;switch(t){case"rectangle":{g=`\\begin{scratch}[print,fill,blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{${t}}}
        \\blockpen{stylo en position d'écriture}
        \\blockrepeat{répéter \\ovalnum{2} fois}
        {
        \\blockmove{avancer de \\ovalnum{${o}} pas}
        \\blockmove{tourner ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{90} degrés}
         \\blockmove{avancer de \\ovalnum{a} pas}
        \\blockmove{tourner  ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{b} degrés}
      }
         \\blockpen{relever le stylo}
         \\end{scratch}`,x=`\\begin{scratch}[print,fill,blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{Motif A}}
        \\blockrepeat{répéter \\ovalnum{${u}} fois}
        {
           \\blockmoreblocks{${t}}
           \\blockmove{tourner ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{${n}} degrés}
        }
         \\end{scratch}
`;const e=f(0,0),r=l(e,a(o/5,0)),i=b(l(r,a(o/10,0)),r,m*90),$=l(i,a(-o/5,0));s=D([e,r,i,$])}break;case"carré":{g=`\\begin{scratch}[print,fill,blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{${t}}}
        \\blockpen{stylo en position d'écriture}
        \\blockrepeat{répéter \\ovalnum{2} fois}
        {
        \\blockmove{avancer de \\ovalnum{${o}} pas}
        \\blockmove{tourner ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{90} degrés}
         \\blockmove{avancer de \\ovalnum{a} pas}
        \\blockmove{tourner  ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{b} degrés}
      }
         \\blockpen{relever le stylo}
         \\end{scratch}
`,x=`\\begin{scratch}[print,fill,blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{Motif A}}
        \\blockrepeat{répéter \\ovalnum{${u}} fois}
        {
           \\blockmoreblocks{${t}}
           \\blockmove{tourner ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{${n}} degrés}
        }
         \\end{scratch}
`;const e=f(0,0),r=l(e,a(o/5,0)),i=b(l(r,a(o/5,0)),r,m*90),$=l(i,a(-o/5,0));s=D([e,r,i,$])}break;default:{g=`\\begin{scratch}[print,fill,blocks,scale=0.8]

        \\initmoreblocks{définir \\namemoreblocks{${t}}}
        \\blockpen{stylo en position d'écriture}
        \\blockrepeat{répéter \\ovalnum{2} fois}
        {
        \\blockmove{avancer de \\ovalnum{${o}} pas}
        \\blockmove{tourner ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{60} degrés}
         \\blockmove{avancer de \\ovalnum{a} pas}
        \\blockmove{tourner  ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{b} degrés}
      }
         \\blockpen{relever le stylo}
         \\end{scratch}
`,x=`\\begin{scratch}[print,fill,blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{Motif A}}
        \\blockrepeat{répéter \\ovalnum{${u}} fois}
        {
           \\blockmoreblocks{${t}}
           \\blockmove{tourner ${c?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{${n}} degrés}
        }
         \\end{scratch}
`;const e=f(0,0),r=l(e,a(o/5,0)),i=b(l(r,a(o/5,0)),r,m*60),$=l(i,a(-o/5,0));s=D([e,r,i,$])}break}const R=E("Point et",-5,1),Z=E("orientation",-5,0),_=E("de départ.",-5,-1),I=W(f(-3,0),f(-.5,0));I.styleExtremites="->";const S=[s,I,R,Z,_],z=k(Object.assign({pixelsParCm:15,scale:.5},h(S)),S),A=[s];for(let e=1;e<u;e++)A.push(b(s,s.listePoints[0],m*n*e));const H=k(Object.assign({pixelsParCm:15,scale:.5},h(A)),A),V=this.sup?n-10:n===50?60:n===60?70:60,C=[s];for(let e=1;e<(t==="losange"?6:8);e++)C.push(b(s,s.listePoints[0],m*n*e));const J=k(Object.assign({pixelsParCm:15,scale:.5},h(C)),C),M=[s];for(let e=1;e<u;e++)M.push(b(s,s.listePoints[0],m*V*e));let q=[k(Object.assign({pixelsParCm:15,scale:.5},h(M)),M),J,H];const P=3;this.sup||(q=q.map((e,r,i)=>i[(r-P+3)%3]));const B=[s];for(let e=1;e<v;e++)B.push(l(s,a(e*p/5,0)));const K=k(Object.assign({pixelsParCm:15,scale:.5},h(B)),B);let w=`Dans cet exercice, aucune justification n'est attendue pour les réponses apportées aux questions 1 et 2.<br>
À l'aide d'un logiciel de programmation, on définit un bloc ${N(t)} pour construire un ${t}.<br>
${X(`${j(F(`Bloc «${t}»`,"black"))}
${L(g)}`,`${j(F(`${N(t)} obtenu`,"black"))}
${z}`,{largeur1:50,widthmincol1:"100px",widthmincol2:"100px",eleId:""})}
`;const Q=q.map((e,r)=>`${j(`figure ${r+1}`)}${e}`);w+=G({items:[`Dans le bloc «${t}», par quelles valeurs faut-il remplacer $a$ et $b$ pour obtenir le ${t} ci-dessus ?`,`On définit ensuite un nouveau bloc nommé  «Motif A» :<br>
    ${L(x)}<br>
    Parmi les figures ci-dessous, laquelle est obtenue en utilisant le bloc «Motif A» ?<br>
    ${Y(...Q,200,200)}`,`On définit un nouveau bloc nommé «Motif B» :<br>
    En l'exécutant on obtient la figure ci-dessous :<br>
    ${j(K)}
    Écrire un script du bloc «Motif B».`],style:"nombres"});const T=G({items:[`${t==="rectangle"?`Le ${t} ci-dessus, a une largeur qui est la moitié de sa longueur, il faut donc remplacer $a$ par $${o/2}$.<br>`:`La figure ci-dessus est un ${t} dont les côtés sont de même mesure, il faut donc remplacer $a$ par $${o}$.<br>`}
         Il faut remplacer $b$  par $2$ car les instructions de la boucle ne construisent que deux côtés.`,`La figure obtenue en utilisant le bloc «Motif A» est la figure ${this.sup?3:(2+P)%3+1}.<br>
        En effet, la figure ${this.sup?1:(0+P)%3+1} est obtenue en utilisant un angle de $${V}^{\\circ}$ et la figure ${this.sup?2:(1+P)%3+1} comporte ${t==="rectangle"?8:6} ${t}s.`,`Voici un script du bloc «Motif B» :<br>
        ${L(`\\begin{scratch}[print,fill,blocks,scale=0.8]

        \\initmoreblocks{définir \\namemoreblocks{Motif B}}
        \\blockpen{stylo en position d'écriture}
        \\blockrepeat{répéter \\ovalnum{${v}} fois}
        {
           \\blockmoreblocks{${t}}
           \\blockmove{avancer de \\ovalnum{${p}} pas}
        }
         \\end{scratch}
`)}`],style:"nombres"});this.enonce=w,this.correction=T}versionOriginale=()=>{this.appliquerLesValeurs("losange",20,3,40,3,60,"direct")};versionAleatoire=t=>{const o=d(["carré","losange","rectangle"]),u=d([3,4,5]),p=ee(4,5)*5,v=u>4?p/2:u>3?p:p*2,n=o==="losange"?d([50,60,70]):45,y=o==="losange"?d([3,4,5]):d([4,6]),O=d(["direct","indirect"]);this.appliquerLesValeurs(o,p,y,v,u,n,O)}}export{je as dateDePublication,ye as default,xe as refs,Pe as titre,ge as uuid};
