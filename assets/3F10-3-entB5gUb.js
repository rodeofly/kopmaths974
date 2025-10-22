import{C as T,g as P,af as b,bI as d,a as f,r as u,u as v,a0 as A,p as y,q as Q,T as D,o as M,aH as q,s as c,l as F}from"./embellissements-BYV7mIDn.js";import{r as U}from"./reperes-WwrVcExd.js";import{E as w}from"./Exercice-DtXhjCyI.js";import{p as B}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const K=!0,W="qcm",Z=!0,_="qcmMult",tt="Utiliser le vocabulaire et les notations des fonctions",$t="29/09/2022",et="15/03/2024",at="4daef",rt={"fr-fr":["3F10-3","BP2AutoO4"],"fr-ch":["10FA5-7","11FA7-1","1mF1-5"]};class ot extends w{constructor(){super(),this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Traduire une égalité par une phrase","2 : Traduire une phrase par une égalité","3 : Interprétation graphique","4 : Expression littérale","5 : Mélange"].join(`
`)],this.sup=5,this.spacing=1.5,this.nbQuestions=3}nouvelleVersion(){this.consigne=this.interactif?"Cocher toutes les réponses correctes.":"";const L=U({xMin:-5,xMax:5,yMin:-4,yMax:4,thickHauteur:.1,axeXStyle:"->",axeYStyle:"->"}),k=T("O",-.3,-.3,0,"black",1,"milieu"),m=P({saisie:this.sup,min:1,max:4,melange:5,defaut:5,nbQuestions:this.nbQuestions}),n=[];n.push(b(this.interactif?d(5):d(3),this.nbQuestions)),n.push(b(d(4),this.nbQuestions)),n.push(b(d(3),this.nbQuestions)),n.push(b(this.interactif?d(2):d(4),this.nbQuestions));const l=[0,0,0,0];for(let a=0,r,i,$,e,p,h,x,o,g=[],C=0;a<this.nbQuestions&&C<50;){let t="",s="";switch(r="",i="",$=0,e=0,t=f(["f","g","h","u","v","w","p","m","t","k"]),m[a]){case 1:switch($=u(-9,9,[0,1,-1]),e=u(-9,9,$),n[0][l[0]]){case 0:{r=`Traduire l'égalité  $${t}(${$})=${e}$ par une phrase contenant le mot «${c(1)}image${c(1)}».`,i=`L'égalité  $${t}(${$})=${e}$ se traduit par : <br>
            $\\bullet$ L'image de $${$}$ par la fonction $${t}$ est $${e}$.<br>
            $\\bullet$ $${$}$ a pour image $${e}$ par la fonction $${t}$.
            `,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`L'image de $${$}$ par la fonction $${t}$ est $${e}$.`,statut:!0},{texte:`L'image de $${e}$ par la fonction $${t}$ est $${$}$.`,statut:!1},{texte:` $${$}$ est l'image de $${e}$ par la fonction $${t}$.`,statut:!1},{texte:`$${$}$ a pour image $${e}$ par la fonction $${t}$.`,statut:!0}];break}case 1:{r=`Traduire l'égalité  $${t}(${$})=${e}$ par une phrase contenant le mot «${c(1)}image${c(1)}».`,this.interactif?i=`L'égalité  $${t}(${$})=${e}$ se traduit par : <br>
            Par la fonction $${t}$,  $${$}$  a pour image $${e}$.
            `:i=`L'égalité  $${t}(${$})=${e}$ se traduit par : <br>
            $\\bullet$ L'image de $${$}$ par la fonction $${t}$ est $${e}$.<br>
            $\\bullet$ $${$}$ a pour image $${e}$ par la fonction $${t}$.
            `,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`Par la fonction $${t}$,  $${$}$  a pour image $${e}$.`,statut:!0},{texte:`L'image de $${e}$ par la fonction $${t}$ est $${$}$.`,statut:!1},{texte:`Par la fonction $${t}$, $${$}$ est l'image de $${e}$.`,statut:!1},{texte:`$${e}$ a pour image $${$}$ par la fonction $${t}$.`,statut:!1}];break}case 2:{r=`Traduire l'égalité  $${t}(${$})=${e}$ par une phrase contenant le mot «${c(1)}antécédent${c(1)}».`,i=`L'égalité  $${t}(${$})=${e}$ se traduit par : <br>
            $\\bullet$ Un antécédent de $${e}$ par la fonction $${t}$ est $${$}$.<br>
            $\\bullet$ $${$}$ est un antécédent de $${e}$ par la fonction $${t}$.
            `,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`Un antécédent de $${$}$ par la fonction $${t}$ est $${e}$.`,statut:!1},{texte:`Un antécédent de $${e}$ par la fonction $${t}$ est $${$}$.`,statut:!0},{texte:` $${$}$ est un antécédent de $${e}$ par la fonction $${t}$.`,statut:!0},{texte:`$${$}$ a pour antécédent $${e}$ par la fonction $${t}$.`,statut:!1}];break}case 3:{r=`Traduire l'égalité  $${t}(${$})=${e}$ par une phrase contenant le mot «${c(1)}antécédent${c(1)}».`,this.interactif?i=`L'égalité  $${t}(${$})=${e}$ se traduit par : <br>
            Par la fonction $${t}$,  $${e}$  a pour antécédent $${$}$.
            `:i=`L'égalité  $${t}(${$})=${e}$ se traduit par : <br>
            $\\bullet$ Un antécédent de $${e}$ par la fonction $${t}$ est $${$}$.<br>
            $\\bullet$ $${$}$ est un antécédent de $${e}$ par la fonction $${t}$.
            `,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`Par la fonction $${t}$, $${e}$ a pour antécédent $${$}$.`,statut:!0},{texte:`Un antécédent de $${$}$ par la fonction $${t}$ est $${e}$.`,statut:!1},{texte:`Par la fonction $${t}$, $${$}$ a pour antécédent $${e}$.`,statut:!1},{texte:`$${e}$ est un antécédent de $${$}$ par la fonction $${t}$.`,statut:!1}];break}case 4:{r=`Traduire l'égalité  $${t}(${$})=${e}$ par une phrase.`,i=`L'égalité  $${t}(${$})=${e}$ se traduit par : <br>
            $\\bullet$ Un antécédent de $${e}$ par la fonction $${t}$ est $${$}$.<br>
            $\\bullet$ L'image de $${$}$ par la fonction $${t}$ est $${e}$.<br>
            $\\bullet$ $${e}$ est l'image de $${$}$ par la fonction $${t}$.
            `,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`Un antécédent de $${e}$ par la fonction $${t}$ est $${$}$.`,statut:!0},{texte:`L'image de $${$}$ par la fonction $${t}$ est $${e}$.`,statut:!0},{texte:` $${e}$ est l'image de $${$}$ par la fonction $${t}$.`,statut:!0},{texte:`$${$}$ a pour antécédent $${e}$ par la fonction $${t}$.`,statut:!1}];break}case 5:{r=`Traduire l'égalité  $${t}(${$})=${e}$ par une phrase.`,i=`L'égalité  $${t}(${$})=${e}$ se traduit par : <br>
            $${$}$ a pour image $${e}$ par la fonction $${t}$.
            `,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${e}$ est un antécédent de $${$}$ par la fonction $${t}$.`,statut:!1},{texte:` $${$}$ a pour image $${e}$ par la fonction $${t}$.`,statut:!0},{texte:` $${e}$ a pour image  $${$}$ par la fonction $${t}$.`,statut:!1},{texte:`$${$}$ a pour antécédent $${e}$ par la fonction $${t}$.`,statut:!1}];break}}break;case 2:switch($=u(-9,9,[0,1,-1]),e=u(-9,9,$),n[1][l[1]]){case 0:{r=`L'image de $${$}$ par la fonction $${t}$ est $${e}$.<br>
            Traduire cette phrase par une égalité.`;break}case 1:{r=` $${$}$ est un antécédent de $${e}$ par la fonction $${t}$.<br>
            Traduire cette phrase par une égalité.`;break}case 2:{r=` $${e}$ a pour antécédent  $${$}$ par la fonction $${t}$.<br>
            Traduire cette phrase par une égalité.`;break}case 3:{r=` $${e}$ est l'image de  $${$}$ par la fonction $${t}$.<br>
            Traduire cette phrase par une égalité.`;break}case 4:{r=` Un antécédent de $${e}$ par la fonction $${t}$ est  $${$}$.<br>
            Traduire cette phrase par une égalité.`;break}}i=`L'égalité traduisant cette phrase est : $${t}(${$})=${e}$
            `,this.autoCorrection[a]={options:{ordered:!1,vertical:!1}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${t}(${$})=${e}$`,statut:!0},{texte:`$${t}(${e})=${$}$`,statut:!1}];break;case 3:switch($=u(-4,4,[0,1,-1]),e=u(-3,3,$),n[2][l[2]]){case 0:{s=f(["A","B","C","D","M","R","S","T"]),p=y($,e,`${s}`),p.positionLabel="above",h=Q(p,u(-3,3,0)/2,"","red"),h.epaisseur=3,p.epaisseur=3,x=D(p,"blue"),x.epaisseur=2,r=`La fonction $${t}$ est représentée par la droite rouge ci-dessous.<br>
            Le point $${s}$ est sur la droite. Donner l'égalité correspondante.<br>`,r+=M({xmin:-5.1,ymin:-4.1,xmax:5.1,ymax:4.1,pixelsParCm:30,scale:.7},L,h,k,x,q(p)),i=`L'égalité traduisant que $${s}$ est sur la courbe représentant $${t}$ est : $${t}(${$})=${e}$
            `,this.autoCorrection[a]={options:{ordered:!1,vertical:!1}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${t}(${$})=${e}$`,statut:!0},{texte:`$${t}(${e})=${$}$`,statut:!1}];break}case 1:{s=f(["A","B","C","D","M","R","S","T"]),r=`Le point $${s}(${$}\\;;\\;${e})$  est un point de la courbe représentant la fonction $${t}$.<br>
              Donner l'égalité correspondante.`,i=`L'égalité traduisant que $${s}$ est sur la courbe représentant $${t}$ est : $${t}(${$})=${e}$.
              `,this.autoCorrection[a]={options:{ordered:!1,vertical:!1}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${t}(${$})=${e}$`,statut:!0},{texte:`$${t}(${e})=${$}$`,statut:!1}];break}case 2:{s=f(["A","B","C","D","M","R","S","T"]),r=` La courbe représentant la fonction $${t}$ passe par le point $${s}(${$}\\;;\\;${e})$.<br>
              Donner l'égalité correspondante. `,i=`L'égalité traduisant que $${s}$ est sur la courbe représentant $${t}$ est : $${t}(${$})=${e}$
              `,this.autoCorrection[a]={options:{ordered:!1,vertical:!1}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${t}(${$})=${e}$`,statut:!0},{texte:`$${t}(${e})=${$}$`,statut:!1}];break}case 3:s=f(["A","B","C","D","M","R","S","T"]),r=`
           Les coordonnées du point $${s}$ de la courbe représentant $${t}$ vérifient $${t}(${$})=${e}$.<br>
           Quelles sont les coordonnées du point $${s}$ ? `,i=`L'égalité $${t}(${$})=${e}$ permet d'affirmer que le point  $${s}(${$}\\;;\\;${e})$ est sur la courbe représentant $${t}$.
              `,this.autoCorrection[a]={options:{ordered:!1,vertical:!1}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${s}(${$}\\;;\\;${e})$`,statut:!0},{texte:`$${s}(${e};${$})$`,statut:!1}]}break;case 4:if($=u(-9,9,[0,1,-1]),e=u(-9,9,$),g=[`${$}x`,`${$}x^2`,`${v($,e)}`,`${A(0,$,0,e)}`],o=f(g),this.interactif)switch(n[3][l[3]]){case 0:{r=`$x$ a pour image $${o}$ par la fonction $${t}$.<br>
             Alors :`,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${t}(x)=${o}$`,statut:!0},{texte:`$x$ est l'image de $${o}$ par la fonction $${t}$`,statut:!1},{texte:`Par la fonction $${t}$,  $${o}$ a pour image $x$. `,statut:!1}],i=`$x$ a pour image $${o}$ par la fonction $${t}$.<br>
              Alors :<br>
              $${t}(x)=${o}$
              `;break}case 1:{r=` L'image de $x$ par la fonction $${t}$ est $${o}$.<br>
              Alors :`,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${t}(${o})=x$`,statut:!1},{texte:`$x$ a pour image $${o}$ par la fonction $${t}$`,statut:!0},{texte:`Par la fonction $${t}$,  $x$ est l'image de $${o}$. `,statut:!1}],i=` L'image de $x$ par la fonction $${t}$ est $${o}$.<br>
              Alors :<br>
              $x$ a pour image $${o}$ par la fonction $${t}$.
              `;break}case 2:{r=`Par la fonction $${t}$, $${o}$ est l'image de $x$.<br>
              Alors :`,this.autoCorrection[a]={options:{ordered:!1,vertical:!0}},this.autoCorrection[a].enonce=`${r}
`,this.autoCorrection[a].propositions=[{texte:`$${t}(x)=${o}$`,statut:!0},{texte:`$x$ a pour image $${o}$ par la fonction $${t}$`,statut:!0},{texte:`L'image de $${o}$ par la fonction $${t}$ est $x$`,statut:!1}],i=`Par la fonction $${t}$, $${o}$ est l'image de $x$.<br>
              Alors :<br>
              $\\bullet$ $${t}(x)=${o}$, <br>
              $\\bullet$ $x$ a pour image $${o}$ par la fonction $${t}$.
              `;break}}else{switch(n[3][l[3]]){case 0:{r=`$x$ a pour image $${o}$ par la fonction $${t}$.<br>
              Traduire cette phrase par une égalité.`;break}case 1:{r=` L'image de $x$ par la fonction $${t}$ est $${o}$.<br>
              Traduire cette phrase par une égalité.`;break}case 2:{r=`Par la fonction $${t}$, $${o}$ est l'image de $x$.<br>
              Traduire cette phrase par une égalité.`;break}case 3:{r=` $${o}$ est l'image de  $x$ par la fonction $${t}$.<br>
              Traduire cette phrase par une égalité.`;break}case 4:{r=` La fonction $${t}$ associe, à tout nombre $x$, le nombre $${o}$.<br>
              Traduire cette phrase par une égalité.`;break}}i=`L'égalité traduisant cette phrase est : $${t}(x)=${o}.$
              `}break}this.interactif&&(r+=B(this,a).texte),this.questionJamaisPosee(a,$,e)&&(this.listeQuestions[a]=r,this.listeCorrections[a]=i,l[m[a]-1]++,a++),C++}F(this)}}export{Z as amcReady,_ as amcType,et as dateDeModifImportante,$t as dateDePublication,ot as default,K as interactifReady,W as interactifType,rt as refs,tt as titre,at as uuid};
