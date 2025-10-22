import{l as A}from"./message-BfjIT6jz.js";import{g as D,a as f,r as k,an as x,U as w,t as C,am as U,af as Q,aq as E,l as B}from"./embellissements-BYV7mIDn.js";import{s as I}from"./scratchblock-CPHivmfQ.js";import{E as V}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const se="Comprendre un script Scratch - 1",oe=!0,ie="AMCHybride",te="20/09/2022",re="08/05/2023",ne="defeb",ae={"fr-fr":["3I12-2"],"fr-ch":[]};class le extends V{constructor(){super(),this.besoinFormulaireTexte=["Question(s) à sélectionner",`Nombres séparés par des tirets :
1 : Nombre de variables
2 : Nom de variables
3 : Description du script
4 : Test du script avec deux nombres multiples
5 : Test du script avec deux nombres non multiples
6 : Action initiale
   ------------   
7 : Une seule question parmi celles choisies
8 : Deux questions parmi celles choisies
9 : Trois questions parmi celles choisies
10 : Quatre questions parmi celles choisies
11 : Cinq questions parmi celles choisies
12 : L'ensemble des six questions`],this.besoinFormulaire2Texte=["Choix sur la brique intiale",`Nombres séparés par des tirets :
1 : La brique initiale est un clic sur drapeau vert.
2 : La brique initiale est un clic sur lutin.
3 : La brique initiale est un appui sur touche imposée
4 : La brique initiale est un appui sur touche non imposée
5 : Une des possiblités précédentes choisie au hasard`],this.besoinFormulaire3Texte=["Choix sur une des phrases finales",`Nombres séparés par des tirets :
1 : Une phrase finale contient : ... est un multiple de ...
2 : Une phrase finale contient : ... divise ...
3 : Une phrase finale contient : ... est un diviseur de ...
4 : Une des possiblités précédentes choisie au hasard`],this.besoinFormulaire4Numerique=["Choix de l'ordre sur la brique modulo",3,`1 : Premier entier demandé modulo le second
2 : Second entier demandé modulo le premier 
3 : Une des possiblités précédentes choisie au hasard`],this.sup=9,this.sup2=5,this.sup3=4,this.sup4=3,this.spacing=2,this.spacingCorr=2,this.nbQuestions=1,this.typeExercice="Scratch"}nouvelleVersion(){const N=D({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,saisie:this.sup2}),l=D({max:3,defaut:4,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup3}),n=this.sup4===3?f([!0,!1]):this.sup4===2;for(let i=0,g,v,M=0;i<this.nbQuestions&&M<50;){const u=[];for(let e=1;e<27;e++)u.push(String.fromCharCode(64+e).toLowerCase());for(let e=0;e<10;e++)u.push(e);u.push("espace"),u.push("flèche haut"),u.push("flèche bas"),u.push("flèche droite"),u.push("flèche gauche");const S=f(u),q=k(1,26,[23,9,15,17]),F=k(1,26,[23,9,15,17,q]);let a=x(q),t=x(F),s=`\\begin{scratch}[print,fill,blocks,scale=1]
`;const T=[[`\\blockinit{quand \\greenflag est cliqué}
`,"Quand le drapeau vert est cliqué"],[`\\blockinit{quand ce sprite est cliqué}
`,"Quand ce sprite est cliqué"],[`\\blockinit{quand la touche \\selectmenu{${S}} est pressée}
`,`Quand la touche ${S} est pressée`],[`\\blockinit{quand la touche \\selectmenu{n'importe laquelle} est pressée}
`,"Quand n'importe quelle touche est pressée"]],b=N[i];s+=typeof b=="number"?T[b-1][0]:"",s+=`\\blockmove{demander \\ovalnum{Donne-moi un nombre entier.} et attendre}
`,s+=`\\blockvariable{mettre \\selectmenu{${a}} à \\ovalsensing{réponse}}
`,s+=`\\blockmove{demander \\ovalnum{Donne-moi un second nombre entier.} et attendre}
`,s+=`\\blockvariable{mettre \\selectmenu{${t}} à \\ovalsensing{réponse}}
`;const P=x(q);switch(a=n?t:a,t=n?P:t,s+=`\\blockifelse{si \\booloperator{\\ovaloperator{\\ovalmove{${a}} modulo \\ovalmove{${t}}} = \\ovalnum{0}} alors}
`,l[i]){case 1:s+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{ est un multiple de } et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`,s+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{ n'est pas un multiple de } et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`;break;case 2:s+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ divise } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`,s+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ ne divise pas } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`;break;case 3:s+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ est un diviseur de } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`,s+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ n'est pas un diviseur de } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`;break}s+="\\end{scratch}";const L=I(s);s=typeof L=="string"?L:"problème avec scratchblock";const r=f([2,3,5,9,10]),p=f(w(5,15))*r,m=p+k(1,r-1),d=[["Combien ce script comporte-t-il de variables ?",`Ce script comporte ${C(2)} variables.`,1],["Comment se nomment les variables dans ce script ?",`Les variables de ce script se nomment ${C(a)} et ${C(t)}.`,1],["Que fait ce script ?",`Ce script demande deux nombres entiers à l'utilisateur, calcule le reste de la division euclidienne du
      ${n?" second nombre fourni par le premier ":" premier nombre fourni par le second "}
      puis indique si
      ${l[i]===1?n?" le second nombre ":" le premier nombre ":n?" le premier nombre ":" le second nombre "} ${l[i]===1?" est un multiple ou pas du ":l[i]===2?" divise ou pas le ":" est un diviseur ou pas du "} ${l[i]===1?n?"premier":"second":n?"second":"premier"} nombre.`,3],[`Si les nombres saisis sont d'abord ${n?r:p} puis ensuite ${n?p:r}, que dit précisément le lutin au final ?`,`${l[i]===1?p+" est un multiple de "+r:l[i]===2?r+" divise "+p:r+" est un diviseur de "+p}.`,1],[`Si les nombres saisis sont d'abord ${n?r:m} puis ensuite ${n?m:r}, que dit précisément le lutin au final ?`,`${l[i]===1?m+" n'est pas un multiple de "+r:l[i]===2?r+" ne divise pas "+m:r+" n'est pas un diviseur de "+m}.`,1],["Quelle action initiale permet de déclencher ce script ?",typeof b=="number"?T[b-1][1]:".",1]];let o=[],h=[6];if(!this.sup)o=d;else if(typeof this.sup=="number")this.sup=U(1,12,this.sup,12),this.sup<7?o=[d[this.sup]]:o=Q(d,6).slice(0,this.sup-6);else{const e=this.sup.split("-");for(let c=0;c<e.length;c++)e[c]=U(1,12,parseInt(e[c]),12),e[c]<7?o.push(d[e[c]-1]):h=[e[c]-6];o.length===0&&(o=Q(d,6).slice(0,h[0]))}o=Q(o,o.length),this.introduction=A({titre:`${I(`\\begin{scratch}[print,fill,blocks,scale=0.5]
\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}\\end{scratch}`)}`,texte:"Cette brique donne le reste de la division euclidienne du nombre de gauche par le nombre de droite.",couleur:"nombres"}),this.consigne="Lire ce script Scratch associé à un lutin et répondre ensuite",this.consigne+=Math.min(o.length,h[0])>1?" aux questions.":" à la question.";let y="";v="";let $="";for(let e=0;e<Math.min(o.length,h[0]);e++)Math.min(o.length,h[0])===1?($=o[0][0]+"<br>",v=o[0][1]+"<br>"):($=E(e)+o[e][0]+"<br>",v+=E(e)+o[e][1]+"<br>"),y+="<br>"+$;g=s+y,this.questionJamaisPosee(i,g)&&(this.listeQuestions[i]=g,this.listeCorrections[i]=v,i++),M++}B(this)}}export{oe as amcReady,ie as amcType,re as dateDeModifImportante,te as dateDePublication,le as default,ae as refs,se as titre,ne as uuid};
