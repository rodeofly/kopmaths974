import{l as F}from"./message-BfjIT6jz.js";import{am as U,r as f,g as p,ay as E,b5 as j,cb as s,a as w,l as A,an as I}from"./embellissements-BYV7mIDn.js";import{s as m}from"./scratchblock-CPHivmfQ.js";import{E as M}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const _="Compléter un script Scratch - 2",ee=!0,oe="AMCOpen",re="22/09/2022",ne="08/05/2023",se="52c97",te={"fr-fr":["3I12-3"],"fr-ch":[]};class ae extends M{constructor(){super(),this.besoinFormulaireTexte=["Brique(s) à trouver",`Nombres séparés par des tirets :
1 : Ligne 2 (variable)
2 : Ligne 2 (nombre)
3 : Ligne 4
4 : Ligne 5 (réponse)
5 : Ligne 5 (variable)
6 : Ligne 5 (nombre)
7 : Ligne 6 (variable et réponse)
8 : Ligne 6 (mot(s))
9 : Ligne 7 (nombre)
10 : Ligne 7 (variable)
11 : Tous ces choix`],this.besoinFormulaire2Numerique=["Nombre de briques à trouver",10],this.besoinFormulaire3Texte=["Choix sur la brique intiale",`Nombres séparés par des tirets :
1 : La brique initiale est un clic sur drapeau vert.
2 : La brique initiale est un clic sur lutin.
3 : La brique initiale est un appui sur touche imposée
4 : La brique initiale est un appui sur touche non imposée
5 : Une des possiblités précédentes choisie au hasard`],this.besoinFormulaire4Texte=["Choix sur une des phrases finales",`Nombres séparés par des tirets :
1 : Une phrase finale contient : ... est un multiple de ...
2 : Une phrase finale contient : ... divise ...
3 : Une phrase finale contient : ... est un diviseur de ...
4 : Une des possiblités précédentes choisie au hasard`],this.sup=11,this.sup2=3,this.sup3=5,this.sup4=4,this.spacing=2,this.nbQuestions=1,this.typeExercice="Scratch"}nouvelleVersion(){this.introduction=F({titre:`${m(`\\begin{scratch}[print,fill,blocks,scale=0.5]
\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}\\end{scratch}`)}`,texte:"Cette brique donne le reste de la division euclidienne du nombre de gauche par le nombre de droite.",couleur:"nombres"});const v=U(1,10,this.sup2,f(1,10));this.consigne="Compléter ",this.consigne+=v>1?"les briques manquantes.":"la brique manquante.";let o=p({max:10,defaut:11,melange:11,nbQuestions:0,saisie:this.sup});o.push(...E(10)),o=j(o).slice(0,v);const x=s(o,1)>0,k=s(o,2)>0,L=s(o,3)>0,q=s(o,4)>0,$=s(o,5)>0,C=s(o,6)>0,l=s(o,7)>0,u=s(o,8)>0,S=s(o,9)>0,T=s(o,10)>0,Q=p({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,saisie:this.sup2}),y=p({max:3,defaut:4,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup3});for(let a=0,c,h,b=0;a<this.nbQuestions&&b<50;){const t=[];for(let i=1;i<27;i++)t.push(String.fromCharCode(64+i).toLowerCase());for(let i=0;i<10;i++)t.push(i);t.push("espace"),t.push("flèche haut"),t.push("flèche bas"),t.push("flèche droite"),t.push("flèche gauche");const D=w(t),N=f(1,26,[23,9,15,17]),n=I(N);let e=`\\begin{scratch}[print,fill,blocks,scale=1]
`;switch(Q[a]){case 1:e+=`\\blockinit{quand \\greenflag est cliqué}
`;break;case 2:e+=`\\blockinit{quand ce sprite est cliqué}
`;break;case 3:e+=`\\blockinit{quand la touche \\selectmenu{${D}} est pressée}
`;break;case 4:e+=`\\blockinit{quand la touche \\selectmenu{n'importe laquelle} est pressée}
`;break}const r=[e];switch(r.push(`\\blockvariable{mettre \\selectmenu{${n}} à \\ovalnum{1}}
`),e+=`\\blockvariable{mettre \\selectmenu{${x?" ................ ":n}} à ${k?"\\ovalnum{ ................ }":"\\ovalnum{1}"}}
`,r.push(`\\blockmove{demander \\ovalnum{Donne-moi un nombre entier.} et attendre}
`),e+=r[2],r.push(`\\blockrepeat{répéter \\ovalsensing{réponse} fois}
{
`),e+=L?`\\blockrepeat{répéter \\ovalnum{ ................ } fois}
{
`:r[3],r.push(`\\blockif{si \\booloperator{\\ovaloperator{\\ovalsensing{réponse} modulo \\ovalmove{${n}}} = \\ovalnum{0}} alors}
`),e+="\\blockif{si \\booloperator{\\ovaloperator{",e+=q?"\\ovalnum{ ................ }":"\\ovalsensing{réponse}",e+=" modulo ",e+=$?"\\ovalnum{ ................ }":`\\ovalmove{${n}}`,e+="} =  ",e+=C?"\\ovalnum{ ................ }}":"\\ovalnum{0}}",e+=`  alors}
`,y[a]){case 1:r.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalsensing{réponse} et \\ovaloperator{regrouper \\ovalnum{ est un multiple de } et \\ovalmove{${n}}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`),e+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper ${l?"\\ovalnum{ ................ }":"\\ovalsensing{réponse}"} et \\ovaloperator{regrouper \\ovalnum{${u?" ................ ":" est un multiple de "}} et ${l?"\\ovalnum{ ................ }":"\\ovalmove{"+n+"}"}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break;case 2:r.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${n}} et \\ovaloperator{regrouper \\ovalnum{ divise } et \\ovalsensing{réponse}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`),e+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper ${l?"\\ovalnum{ ................ }":"\\ovalmove{"+n+"}"} et \\ovaloperator{regrouper \\ovalnum{${u?" ................ ":" divise "}} et ${l?"\\ovalnum{ ................ }":"\\ovalsensing{réponse}"}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break;case 3:r.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${n}} et \\ovaloperator{regrouper \\ovalnum{ est un diviseur de } et \\ovalsensing{réponse}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`),e+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper ${l?"\\ovalnum{ ................ }":"\\ovalmove{"+n+"}"} et \\ovaloperator{regrouper \\ovalnum{${u?" ................ ":" est un diviseur de "}} et ${l?"\\ovalnum{ ................ }":"\\ovalsensing{réponse}"}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break}r.push(`\\blockvariable{ajouter \\ovalnum{1} à \\selectmenu{${n}}}
`),e+=`\\blockvariable{ajouter ${S?"\\ovalnum{ ................ }":"\\ovalnum{1}"} à \\selectmenu{${T?" ................ ":n}}}
`,r.push(`}
\\end{scratch}`),e+=r[7];const d=m(e);c=typeof d=="string"?d:"problème avec texteScratch";const g=m(r.join(""));h=typeof g=="string"?g:"problème avec texteCorr",this.questionJamaisPosee(a,c)&&(this.listeQuestions[a]=c,this.listeCorrections[a]=h,a++),b++}A(this)}}export{ee as amcReady,oe as amcType,ne as dateDeModifImportante,re as dateDePublication,ae as default,te as refs,_ as titre,se as uuid};
