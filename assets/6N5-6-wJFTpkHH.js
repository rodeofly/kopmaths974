import{E as M,K as x}from"./Exercice-DtXhjCyI.js";import{g as L,r as u,aq as m,e as o,m as v,l as S}from"./embellissements-BYV7mIDn.js";import{a as y}from"./questionMathLive-DdRvWqlN.js";import{h as Y}from"./gestionInteractif-DujZpSu8.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const Z="Résoudre des problèmes (impliquant diverses opérations)",_=!0,ee="AMCHybride",ie=!0,se="mathLive",te="24/05/2025",ae="72e9d",re={"fr-fr":["6N5-6"],"fr-2016":["6C12-6"],"fr-ch":[]};class ne extends M{constructor(){super(),this.consigne="On a réalisé deux pesées comme indiqué sur les schémas.",this.nbQuestions=4,this.sup=1,this.sup2=1,this.besoinFormulaireNumerique=["Niveau de difficulté",3,`1 : Soustraction et division
2 :Multiplication, soustraction et division
3 : Mélange`],this.besoinFormulaire2Numerique=["Précision de la masse",4,`1 : à la dizaine
2 :à l'unité
3 : au dixième
4 : Mélange`]}nouvelleVersion(){const h=L({max:2,defaut:1,melange:3,nbQuestions:this.nbQuestions,saisie:this.sup}),b=L({max:3,defaut:1,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup2});for(let c=0,p,l,B=0;c<this.nbQuestions&&B<50;){const g=b[c],r=u(2,5)*10+u(1,9)*(g>=2?1:0)+u(1,9)*.1*(g>=3?1:0),n=u(2,5,[Math.floor(r/10)])*10+u(1,9)*(g>=2?1:0)+u(1,9)*.1*(g>=3?1:0),i=u(2,5),t=u(2,5,[i]);switch(h[c]){case 1:{const a=u(0,1)===0?[u(2,4),1]:[1,u(2,4)],f=this.generateBalance(t,i,n*t+r*i),e=this.generateBalance(t*a[0],i*a[1],n*t*a[0]+r*i*a[1]),s=u(0,1);p=(s===0?f+""+e:e+""+f)+"<br>",p+=`${m(0)} Quelle est la masse d'une ${a[0]===1?"étoile":"boule"} en grammes?<br>`,p+=this.interactif?y(this,c*2,x.clavierDeBase,{texteApres:" g"})+"<br>":"",p+=`${m(1)} Quelle est la masse d'une ${a[0]===1?"boule":"étoile"} en grammes?<br>`,p+=this.interactif?y(this,c*2+1,x.clavierDeBase,{texteApres:" g"})+"<br>":"",l=`${m(0)} Si on fait la soustraction entre les deux balances, ${a[0]===1?"les boules sont enlevées":"les étoiles sont enlevées"}.<br>`,l+=this.generateBalance(t*a[0]-t,i*a[1]-i,n*(t*a[0]-t)+r*(i*a[1]-i))+"<br>",l+=`On divise ensuite par le nombre ${a[0]===1?"d'étoiles restantes":"de boules restantes"} pour trouver la masse d'une ${a[0]===1?"étoile":"boule"}.<br>`,l+=`$ ${o(n*(t*a[0]-t)+r*(i*a[1]-i))} \\div ${a[0]===1?i*a[1]-i:t*a[0]-t} = ${o(a[0]===1?r:n)}$ g.<br>`,l+=`La masse d'une ${a[0]===1?"étoile":"boule"} est de $${v(o(a[0]===1?r:n))}$ g.<br>`,l+=`${m(1)} Si on reprend la ${s===0?"première":"deuxième"} balance<br>`,l+=f+"<br>",l+=`On supprime les ${a[0]===1?i:t} ${a[0]===1?"étoiles":"boules"} à gauche et on supprime à droite $${a[0]===1?i:t} \\times ${a[0]===1?o(r):o(n)} = ${a[0]===1?o(i*r):o(t*n)}$ g.<br>`,l+=this.generateBalance(a[0]===1?t:0,a[0]===1?0:i,a[0]===1?t*n:i*r)+"<br>",l+=`On en déduit que  ${a[0]===1?t:i} ${a[0]===1?"boules":"étoiles"} pèsent $${o(a[0]===1?n*t:r*i)}$ g.<br>`,l+=`On divise ensuite ${a[0]===1?t:i} pour trouver la masse d'une ${a[0]===1?"boule":"étoile"}.<br>`,l+=`$ ${o(a[0]===1?n*t:r*i)} \\div ${a[0]===1?t:i} = ${o(a[0]===1?n:r)}$ g.<br>`,l+=`La masse d'une ${a[0]===1?"boule":"étoile"} est de $${v(o(a[0]===1?n:r))}$ g.<br>`,Y(this,c*2,{reponse:{value:a[0]===1?r:n}}),Y(this,c*2+1,{reponse:{value:a[0]===1?n:r}});break}case 2:{const a=u(2,4),f=u(2,4,[a]),e=u(0,1)===0?[a,f]:[f,a],s=e[0]<e[1]?1:0,d=this.generateBalance(t,i,n*t+r*i),w=this.generateBalance(t*e[0],i*e[1],n*t*e[0]+r*i*e[1]),$=u(0,1);p=($?w+""+d:d+""+w)+"<br>",p+=`${m(0)} Quelle est la masse d'une ${s===1?"étoile":"boule"} en grammes?<br>`,p+=this.interactif?y(this,c*2,x.clavierDeBase,{texteApres:" g"})+"<br>":"",p+=`${m(1)} Quelle est la masse d'une ${s===0?"étoile":"boule"} en grammes?<br>`,p+=this.interactif?y(this,c*2+1,x.clavierDeBase,{texteApres:" g"})+"<br>":"",l=`${m(0)} Si on multiplie la ${$===0?"première":"deuxième"} par ${s===1?e[0]:e[1]} alors on obtient la même quantité ${s===1?"de boules":"d'étoiles"}.<br>`,l+=this.generateBalance(t*(s===1?e[0]:e[1]),i*(s===1?e[0]:e[1]),n*t*(s===1?e[0]:e[1])+r*i*(s===1?e[0]:e[1]))+"<br>",l+=`La ${$===1?"première":"deuxième"} étant: <br>`,l+=w+"<br>",l+=`Si on fait la soustraction entre les deux balances, ${s===1?"les boules sont enlevées":"les étoiles sont enlevées"}.<br>`,l+=this.generateBalance(Math.abs(t*(s===1?e[0]:e[1])-t*e[0]),Math.abs(i*(s===1?e[0]:e[1])-i*e[1]),Math.abs(n*(t*(s===1?e[0]:e[1])-t*e[0])+r*(i*(s===1?e[0]:e[1])-i*e[1])))+"<br>",l+=`On divise ensuite par le nombre ${s===1?"d'étoiles restantes":"de boules restantes"} pour trouver la masse d'une ${s===1?"étoile":"boule"}.<br>`,l+=`$ ${o(Math.abs(n*(t*(s===1?e[0]:e[1])-t*e[0])+r*(i*(s===1?e[0]:e[1])-i*e[1])))} \\div ${Math.abs(s===1?i*e[1]-i*e[0]:t*e[0]-t*e[1])} = ${s===1?o(r):o(n)}$ g.<br>`,l+=`La masse d'une ${s===1?"étoile":"boule"} est de $${v(o(s===1?r:n))}$ g.<br>`,l+=`${m(1)} Si on reprend la ${$===0?"première":"deuxième"} balance<br>`,l+=d+"<br>",l+=`On supprime les ${s===0?t:i} ${s===0?" boules":" étoiles"} à gauche et on supprime à droite $${s===0?t:i} \\times ${s===0?o(n):o(r)} = ${s===0?o(t*n):o(i*r)}$ g.<br>`,l+=this.generateBalance(s===1?t:0,s===1?0:i,s===1?t*n:i*r)+"<br>",l+=`On en déduit que  ${s===1?t:i} ${s===1?"boules":"étoiles"} pèsent $${o(s===1?n*t:r*i)}$ g.<br>`,l+=`On divise ensuite par ${s===1?t:i} pour trouver la masse d'une ${s===1?"boule":"étoile"}.<br>`,l+=`$ ${o(s===1?n*t:r*i)} \\div ${s===1?t:i} = ${s===1?o(n):o(r)}$ g.<br>`,l+=`La masse d'une ${s===1?"boule":"étoile"} est de $${v(o(s===1?n:r))}$ g.<br>`,Y(this,c*2,{reponse:{value:s===1?r:n}}),Y(this,c*2+1,{reponse:{value:s===1?n:r}})}}this.questionJamaisPosee(c,i,n,n,r)&&(this.listeQuestions[c]=p??"",this.listeCorrections[c]=l??"",c++),B++}S(this)}generateBalance(h,b,c){return this.generateBalanceSVG(h,b,c)}generateBalanceSVG(h,b,c){const g=(e,s)=>`<circle cx="${e}" cy="${s}" r="10" fill="black" />`,r=(e,s)=>`<text x="${e}" y="${s+10}" font-size="30" text-anchor="middle" fill="gold">★</text>`,n=(e,s,d)=>`<rect x="${e-25}" y="${s-20}" width="50" height="40" rx="5" ry="5" fill="#666" />
       <text x="${e}" y="${s+5}" font-size="14" text-anchor="middle" fill="white">${Intl.NumberFormat("fr-FR",{maximumFractionDigits:1}).format(c).toString()} g</text>`,i=[];for(let e=0;e<h;e++)h<11?e<4?i.push(g(30+e*20,90)):e<7?i.push(g(30+(e-4)*20+20/2,70)):e<9?i.push(g(30+(e-7)*20+20,50)):e<10?i.push(g(30+(e-9)*20+20+20/2,30)):i.push(g(30+(e-10)*20,50)):e<4?i.push(g(30+e*20,90)):e<8?i.push(g(30+(e-4)*20,70)):e<12?i.push(g(30+(e-8)*20,50)):e<16?i.push(g(30+(e-12)*20,30)):i.push(g(30+(e-16)*20,10));for(let e=0;e<b;e++)b<11?e<4?i.push(r(30+(4+e)*20,90)):e<7?i.push(r(30+(4+e-4)*20+20/2,70)):e<9?i.push(r(30+(4+e-7)*20+20,50)):e<10?i.push(r(30+(4+e-9)*20+20+20/2,30)):e<11?i.push(r(30+(4+e-10)*20,50)):e<12&&i.push(r(30+(4+e-11)*20+20+20+20,50)):e<4?i.push(r(30+(4+e)*20,90)):e<8?i.push(r(30+(4+e-4)*20,70)):e<12?i.push(r(30+(4+e-8)*20,50)):e<16?i.push(r(30+(4+e-12)*20,30)):i.push(r(30+(4+e-16)*20,10));const a=n(305,80);return`<div class="svgContainer" style="display: inline-block">
    <svg class="mathalea2d" viewBox="0 0 400 200" style="display: inline-block" width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        
    
      <!-- Barre horizontale -->
      <!--<rect x="80" y="50" width="240" height="5" fill="#333" />-->
    
      <!-- Plateaux -->
      <rect x="20" y="100" width="160" height="10" fill="#999" />
      <rect x="85" y="120" width="230" height="10" fill="#999" />
      <rect x="85" y="100" width="20" height="30" fill="#999" />
      <rect x="295" y="100" width="20" height="30" fill="#999" />
      <rect x="220" y="100" width="160" height="10" fill="#999" />
      
      <!-- Socle -->
      <rect x="190" y="110" width="20" height="40" fill="#444" />
      <polygon points="200,70 195,105 205,105" fill="#888" />
    
      <!-- Contenu plateau gauche -->
      ${i.join(`
`)}
    
      <!-- Contenu plateau droit -->
      ${a}
    </svg></div>
    `}generateBalanceTikz=(h,b,c)=>`
\\begin{tikzpicture}[baseline={(current bounding box.north)}, scale=1]

\\fill[gray!60] (2,-0.8) rectangle (8,-0.6); % barre horizontale
\\fill[gray!60] (1.9,-0.8) rectangle (2.1,-0.2); % barre horizontale
\\fill[gray!60] (7.9,-0.8) rectangle (8.1,-0.2); % barre horizontale

% Barres et socle
\\fill[gray!70] (0,-0.4) rectangle (4,-0.2); % plateau gauche
\\fill[gray!70] (6,-0.4) rectangle (10,-0.2); % plateau droit
\\fill[gray!70] (4.8,-1) rectangle (5.2,-0); % support central
\\fill[gray!50] (4.7,0.2) -- (5.3,0.2) -- (5,.9) -- cycle; % base triangle

% Définir une variable locale à tikzpicture
\\pgfmathsetmacro{\\boules}{${h}}
\\pgfmathsetmacro{\\etoiles}{${b}}
\\pgfmathsetmacro{\\masse}{${c}}

% Objets sur plateau gauche
\\ifthenelse{\\boules>0}{
\\ifthenelse{\\boules<11}{
% forme triangulaire
\\foreach \\i in {0,...,\\numexpr\\boules-1\\relax} {
  \\ifthenelse{\\i<4}{
    \\fill (0.3+0.4*\\i,0) circle (0.2);
  }{
    \\ifthenelse{\\i<7}{
      \\fill (0.3+0.4*\\i-1.4,0.4) circle (0.2);
    }{
      \\ifthenelse{\\i<9}{
        \\fill (0.3+0.4*\\i-2.4,0.8) circle (0.2);
      }{
        \\fill (0.3+0.4*\\i-3,1.2) circle (0.2);
      }
    }
  }
} % fin de forme triangulaire forEach
}{
% forme carrée
\\foreach \\i in {0,...,\\numexpr\\boules-1\\relax} {
  \\ifthenelse{\\i<4}{
    \\fill (0.3+0.4*\\i,0) circle (0.2);
  }{
    \\ifthenelse{\\i<8}{
      \\fill (0.3+0.4*\\i-1.6,0.4) circle (0.2);
    }{
      \\ifthenelse{\\i<12}{
        \\fill (0.3+0.4*\\i-3.2,0.8) circle (0.2);
      }{
        \\ifthenelse{\\i<16}{
          \\fill (0.3+0.4*\\i-4.8,1.2) circle (0.2);
         }{
          \\fill (0.3+0.4*\\i-6.4,1.6) circle (0.2);
        }
      }
    }
  }
} % fin de forme carrée forEach
}
}{}

\\ifthenelse{\\etoiles>0}{
\\ifthenelse{\\etoiles<11}{
% forme triangulaire
\\foreach \\i in {0,...,\\numexpr\\etoiles-1\\relax} {
  \\ifthenelse{\\i<4}{
    \\node at (2.5+0.4*\\i,0) {\\textcolor{orange}{\\Large \\ding{72}}};
  }{
    \\ifthenelse{\\i<7}{
      \\node at (2.5+0.4*\\i-1.4,0.4) {\\textcolor{orange}{\\Large \\ding{72}}};
    }{
      \\ifthenelse{\\i<9}{
        \\node at (2.5+0.4*\\i-2.4,0.8) {\\textcolor{orange}{\\Large \\ding{72}}};
      }{
        \\node at (2.5+0.4*\\i-3,1.2) {\\textcolor{orange}{\\Large \\ding{72}}};
      }
    }
  }
} % fin de forme triangulaire
}{
% forme carrée
\\foreach \\i in {0,...,\\numexpr\\etoiles-1\\relax} {
  \\ifthenelse{\\i<4}{
    \\node at (2.5+0.4*\\i,0) {\\textcolor{orange}{\\Large \\ding{72}}};
  }{
    \\ifthenelse{\\i<8}{
      \\node at (2.5+0.4*\\i-1.6,0.4) {\\textcolor{orange}{\\Large \\ding{72}}};
    }{
      \\ifthenelse{\\i<12}{
        \\node at (2.5+0.4*\\i-3.2,0.8) {\\textcolor{orange}{\\Large \\ding{72}}};
      }{
        \\ifthenelse{\\i<16}{
          \\node at (2.5+0.4*\\i-4.8,1.2) {\\textcolor{orange}{\\Large \\ding{72}}};
         }{
          \\node at (2.5+0.4*\\i-6.4,1.6) {\\textcolor{orange}{\\Large \\ding{72}}};;
        }
      }
    }
  }
} % fin de forme carrée
}
}{}

% Masse à droite
\\fill[yellow] (7.4,-0.2) rectangle +(1.2,1);
\\pgfkeys{/pgf/number format/set decimal separator={,}}
\\pgfkeys{/pgf/number format/set thousands separator={\\,}}
\\node[black, font={\\small},anchor=center] at (8,0.3) {\\pgfmathprintnumber{\\masse}\\,g};

\\end{tikzpicture}`}export{_ as amcReady,ee as amcType,te as dateDePublication,ne as default,ie as interactifReady,se as interactifType,re as refs,Z as titre,ae as uuid};
