import{l as D}from"./message-BfjIT6jz.js";import{g as d,cb as p,a as q,r as C,l as E,an as h}from"./embellissements-BYV7mIDn.js";import{s as b}from"./scratchblock-CPHivmfQ.js";import{E as F}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const H="Compléter un script Scratch - 1",K=!0,W="AMCOpen",X="20/09/2022",Y="08/05/2023",Z="39a32",_={"fr-fr":["3I12-1"],"fr-ch":[]};class ee extends F{constructor(){super(),this.besoinFormulaireTexte=["Brique(s) à trouver",`Nombres séparés par des tirets :
1 : Lignes 3 et 5
2 : Ligne 6
3 : Lignes 7 et 8 (aux extrèmes)
4 : Lignes 7 et 8 (au centre)
5 : Une des possiblités précédentes choisie au hasard`],this.besoinFormulaire2Texte=["Choix sur la brique intiale",`Nombres séparés par des tirets :
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
3 : Une des possiblités précédentes choisie au hasard`],this.sup=5,this.sup2=5,this.sup3=4,this.sup4=3,this.spacing=2,this.nbQuestions=1,this.typeExercice="Scratch"}nouvelleVersion(){this.introduction=D({titre:`${b(`\\begin{scratch}[print,fill,blocks,scale=0.5]
\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}\\end{scratch}`)}`,texte:"Cette brique donne le reste de la division euclidienne du nombre de gauche par le nombre de droite.",couleur:"nombres"}),this.consigne="Compléter les briques manquantes.";const u=d({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,shuffle:!1,saisie:this.sup}),g=p(u,1)>0,S=p(u,2)>0,i=p(u,3)>0,r=p(u,4)>0,L=d({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,saisie:this.sup2}),T=d({max:3,defaut:4,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup3});for(let l=0,v,m,k=0;l<this.nbQuestions&&k<50;){const $=this.sup4===3?q([!0,!1]):this.sup4===2,s=[];for(let n=1;n<27;n++)s.push(String.fromCharCode(64+n).toLowerCase());for(let n=0;n<10;n++)s.push(n);s.push("espace"),s.push("flèche haut"),s.push("flèche bas"),s.push("flèche droite"),s.push("flèche gauche");const Q=q(s),c=C(1,26,[23,9,15,17]),y=C(1,26,[23,9,15,17,c]);let a=h(c),t=h(y),o=`\\begin{scratch}[print,fill,blocks,scale=1]
`;switch(L[l]){case 1:o+=`\\blockinit{quand \\greenflag est cliqué}
`;break;case 2:o+=`\\blockinit{quand ce sprite est cliqué}
`;break;case 3:o+=`\\blockinit{quand la touche \\selectmenu{${Q}} est pressée}
`;break;case 4:o+=`\\blockinit{quand la touche \\selectmenu{n'importe laquelle} est pressée}
`;break}o+=`\\blockmove{demander \\ovalnum{Donne-moi un nombre entier.} et attendre}
`;const e=[o];e.push(`\\blockvariable{mettre \\selectmenu{${a}} à \\ovalsensing{réponse}}
`),o+=g?`\\blockvariable{mettre \\selectmenu{${a}} à \\ovalnum{ ................ }}
`:e[1],e.push(`\\blockmove{demander \\ovalnum{Donne-moi un second nombre entier.} et attendre}
`),o+=e[2],e.push(`\\blockvariable{mettre \\selectmenu{${t}} à \\ovalsensing{réponse}}
`),o+=g?`\\blockvariable{mettre \\selectmenu{${t}} à \\ovalnum{ ................ }}
`:e[3];const U=h(c);switch(a=$?t:a,t=$?U:t,e.push(`\\blockifelse{si \\booloperator{\\ovaloperator{\\ovalmove{${a}} modulo \\ovalmove{${t}}} = \\ovalnum{0}} alors}
`),o+=S?`\\blockifelse{si \\booloperator{\\ovaloperator{\\ovalnum{ ................ } modulo \\ovalnum{ ................ }} = \\ovalnum{0}} alors}
`:e[4],T[l]){case 1:e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{ est un multiple de } et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`),o+=i?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" est un multiple de "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" est un multiple de "}} et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`:e[5],e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{ n'est pas un multiple de } et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`),o+=i?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" n'est pas un multiple de "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" n'est pas un multiple de "}} et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`:e[6];break;case 2:e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ divise } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`),o+=i?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" divise "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" divise "}} et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`:e[5],e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ ne divise pas } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`),o+=i?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" ne divise pas "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" ne divise pas "}} et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`:e[6];break;case 3:e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ est un diviseur de } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`),o+=i?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" est un diviseur de "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" est un diviseur de "}} et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`:e[5],e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ n'est pas un diviseur de } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`),o+=i?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" n'est pas un diviseur de "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" n'est pas un diviseur de "}} et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`:e[6];break}e.push("\\end{scratch}"),o+=e[7];const f=b(o);typeof f=="string"?o=f:o="Il y a un problème avec texteScratch",v=o;const x=b(e.join(""));typeof x=="string"?m=x:m="Il y a un problème avec texteSansTrou",this.questionJamaisPosee(l,v)&&(this.listeQuestions[l]=v,this.listeCorrections[l]=m,l++),k++}E(this)}}export{K as amcReady,W as amcType,Y as dateDeModifImportante,X as dateDePublication,ee as default,_ as refs,H as titre,Z as uuid};
