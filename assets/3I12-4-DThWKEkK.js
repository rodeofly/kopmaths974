import{l as A}from"./message-BfjIT6jz.js";import{am as f,r as $,g as M,a as g,an as U,t as L,af as q,aq as S,l as j}from"./embellissements-BYV7mIDn.js";import{s as T}from"./scratchblock-CPHivmfQ.js";import{E}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const X="Comprendre un script Scratch - 2",Y=!0,Z="AMCHybride",_="23/09/2022",ee="08/05/2023",se="9a1a9",te={"fr-fr":["3I12-4"],"fr-ch":[]};class ie extends E{constructor(){super(),this.besoinFormulaireTexte=["Question(s) à sélectionner",`Nombres séparés par des tirets :
1 : Nombre de variables
2 : Nom de variables
3 : Description du script
4 : Test du script avec un entier
5 : Action initiale
6 : Ajouter 1
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
4 : Une des possiblités précédentes choisie au hasard`],this.sup=9,this.sup2=5,this.sup3=4,this.spacing=2,this.spacingCorr=2,this.nbQuestions=1,this.typeExercice="Scratch"}nouvelleVersion(){this.introduction=A({titre:`${T(`\\begin{scratch}[print,fill,blocks,scale=0.5]
\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}\\end{scratch}`)}`,texte:"Cette brique donne le reste de la division euclidienne du nombre de gauche par le nombre de droite.",couleur:"nombres"});const y=f(1,10,this.sup2,$(1,10));this.consigne="Compléter ",this.consigne+=y>1?"les briques manquantes.":"la brique manquante.";const I=M({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,saisie:this.sup2}),o=M({max:3,defaut:4,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup3});for(let i=0,d,h,x=0;i<this.nbQuestions&&x<50;){const a=[];for(let e=1;e<27;e++)a.push(String.fromCharCode(64+e).toLowerCase());for(let e=0;e<10;e++)a.push(e);a.push("espace"),a.push("flèche haut"),a.push("flèche bas"),a.push("flèche droite"),a.push("flèche gauche");const C=g(a),D=$(1,26,[23,9,15,17]),r=U(D);let n=`\\begin{scratch}[print,fill,blocks,scale=1]
`;const k=[[`\\blockinit{quand \\greenflag est cliqué}
`,"Quand le drapeau vert est cliqué"],[`\\blockinit{quand ce sprite est cliqué}
`,"Quand ce sprite est cliqué"],[`\\blockinit{quand la touche \\selectmenu{${C}} est pressée}
`,`Quand la touche ${C} est pressée`],[`\\blockinit{quand la touche \\selectmenu{n'importe laquelle} est pressée}
`,"Quand n'importe quelle touche est pressée"]],b=I[i];switch(n+=typeof b=="number"?k[b-1][0]:"problème briqueInitiale",n+=`\\blockvariable{mettre \\selectmenu{${r}} à \\ovalnum{1}}
`,n+=`\\blockmove{demander \\ovalnum{Donne-moi un nombre entier.} et attendre}
`,n+=`\\blockrepeat{répéter \\ovalsensing{réponse} fois}
{
`,n+=`\\blockif{si \\booloperator{\\ovaloperator{\\ovalsensing{réponse} modulo \\ovalmove{${r}}} = \\ovalnum{0}} alors}
`,o[i]){case 1:n+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalsensing{réponse} et \\ovaloperator{regrouper \\ovalnum{ est un multiple de } et \\ovalmove{${r}}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break;case 2:n+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${r}} et \\ovaloperator{regrouper \\ovalnum{ divise } et \\ovalsensing{réponse}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break;case 3:n+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${r}} et \\ovaloperator{regrouper \\ovalnum{ est un diviseur de } et \\ovalsensing{réponse}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break}n+=`\\blockvariable{ajouter \\ovalnum{1} à \\selectmenu{${r}}}
`,n+=`}
\\end{scratch}`;const Q=T(n);d=typeof Q=="string"?Q:"problème avec texteScratch";const u=g([2,3,5,7]),l=g([2,3,5,7],[u]),t=u*l,p=[["Combien ce script comporte-t-il de variables ?",`Ce script comporte ${L(1)} variable.`,1],["Comment se nomme la variable dans ce script ?",`La variable de ce script se nomme ${L(r)}.`,1],["Que fait ce script ?",`Ce script demande un nombre entier à l'utilisateur puis, pour tous les nombres entiers de 1 au nombre fourni, calcule le reste de la division euclidienne
      de ce nombre fourni par chacun des entiers et le compare à zéro. Le lutin peut ainsi énoncer pendant une demi-seconde un nouveau diviseur du nombre fourni.`,3],[`Si le nombre saisi est ${t}, que dit précisément le lutin ?`,`${o[i]===1?t+" est un multiple de 1":o[i]===2?"1 divise "+t:"1 est un diviseur de "+t}.<br>
      ${o[i]===1?t+" est un multiple de "+Math.min(u,l):o[i]===2?Math.min(u,l)+" divise "+t:Math.min(u,l)+" est un diviseur de "+t}.<br>
      ${o[i]===1?t+" est un multiple de "+Math.max(u,l):o[i]===2?Math.max(u,l)+" divise "+t:Math.max(u,l)+" est un diviseur de "+t}.<br>
      ${o[i]===1?t+" est un multiple de "+t:o[i]===2?t+" divise "+t:t+" est un diviseur de "+t}.`,1],["Quelle action initiale permet de déclencher ce script ?",typeof b=="number"?k[b-1][1]:"probleme briqueInitiale.",1],[`Pourquoi, dans ce script, faut-il ajouter 1 à ${r} ?`,`Cet ajout, grâce à la boucle, permet à ${r} de valoir, tour à tour, tous les nombres de 1 jusqu'au nombre choisi par l'utilisateur.`,2]];let s=[],m=[6];if(!this.sup)s=p;else if(typeof this.sup=="number")this.sup=f(1,12,this.sup,12),this.sup<7?s=[p[this.sup]]:s=q(p,6).slice(0,this.sup-6);else{const e=this.sup.split("-");for(let c=0;c<e.length;c++)e[c]=f(1,12,parseInt(e[c]),12),e[c]<7?s.push(p[e[c]-1]):m=[e[c]-6];s.length===0&&(s=q(p,6).slice(0,m[0]))}s=q(s,s.length),this.consigne="Lire ce script Scratch associé à un lutin et répondre ensuite",this.consigne+=Math.min(s.length,m[0])>1?" aux questions.":" à la question.",h="";let v="";for(let e=0;e<Math.min(s.length,m[0]);e++)Math.min(s.length,m[0])===1?(v=typeof s[0][0]=="string"?s[0][0]:"problème choixQuestions[0][0]",h=s[0][1]+"<br>"):(v=S(e)+s[e][0],h+=S(e)+s[e][1]+"<br>"),d+="<br>"+v+"<br>";this.questionJamaisPosee(i,d)&&(this.listeQuestions[i]=d,this.listeCorrections[i]=h,i++),x++}j(this)}}export{Y as amcReady,Z as amcType,ee as dateDeModifImportante,_ as dateDePublication,ie as default,te as refs,X as titre,se as uuid};
