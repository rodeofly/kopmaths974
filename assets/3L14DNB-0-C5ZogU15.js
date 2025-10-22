import{c as a}from"./lists-i1i4IA1M.js";import{ac as g,cs as f,z as p,f as q,r as b,br as k}from"./embellissements-BYV7mIDn.js";import{s as d}from"./scratchblock-CPHivmfQ.js";import y from"./ExerciceBrevetA-CJtX4hAj.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceBrevet-lD74fcMo.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const P="6c592",Q={"fr-fr":["3L14DNB-0","3Z1DNB-01"],"fr-ch":["11FA4-3"]},j="Préparation DNB : Calcul littéral, scratch et équation produit nul",G="15/11/2024";class U extends y{constructor(){super(),this.besoinFormulaireCaseACocher=["Sujet original",!1],this.sup=!1,this.introduction=g("D'après l'exercice 4 du brevet Antilles-Guyane 2024."),this.versionAleatoire(0)}appliquerLesValeurs(r,o,e,t,s){const x={1:"nombre de départ",2:"double du nombre de départ",3:"triple du nombre de départ",4:"quadruple du nombre de départ"}[r],u=$=>($+t)*($-s);let l="On considère le programme de calcul ci-dessous :<br>";l+=f(a({items:["Choisir un nombre","Mettre ce nombre au carré",`Soustraire le ${x}`,`Soustraire ${o}`],style:"fleches"}));let m=l,n=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;n+=`\\blockinit{quand \\greenflag est cliqué}
`,n+=`\\blockmove{demander \\ovalnum{Choisir un nombre} et attendre}
`,n+=`\\blockvariable{mettre \\selectmenu{x} à \\ovalmove{réponse}}
`,n+=`\\blockvariable{mettre \\selectmenu{y} à \\ovaloperator{\\ovalnum{...}*\\ovalnum{...}}}
`,n+=`\\blockvariable{mettre \\selectmenu{z} à \\ovaloperator{\\ovalnum{${r}}*\\ovalnum{x}}}
`,n+=`\\blockvariable{mettre \\selectmenu{Résultat} à \\ovaloperator{\\ovaloperator{\\ovalnum{...}-\\ovalnum{...}} -\\ovalnum{${o}} }}
`,n+=`\\blocklook{dire \\ovalnum{Résultat } pendant \\ovalnum{5}secondes}
`,n+=`\\end{scratch}
`;const v=a({items:[`Montrer que si on choisit $${e}$ comme nombre de départ, le résultat du programme est $${u(e)}$.`,"On choisit $x$ comme nombre de départ. Exprimer le résultat du programme en fonction de $x$.",`Vérifier que l'on peut écrire ce résultat sous la forme $(x+${t})(x-${s})$.`,"Déterminer les nombres à choisir au départ pour que le résultat du programme soit 0.",`Juliette a écrit le programme ci-dessous :<br>
            ${d(n)}<br>
            Recopier et compléter sur la copie les lignes 4 et 6 du programme afin que celui-ci corresponde au programme de calcul encadré.`],style:"nombres"});l+=v;let i=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;i+=`\\blockvariable{mettre \\selectmenu{y} à \\ovaloperator{\\ovalnum{x}*\\ovalnum{x}}}
`,i+=`\\blockvariable{mettre \\selectmenu{Résultat} à \\ovaloperator{\\ovaloperator{\\ovalnum{y}-\\ovalnum{z}} -\\ovalnum{${o}} }}
`,i+=`\\end{scratch}
`;const h=a({items:[`On a successivement : $${e} \\to ${e}^2 = ${e*e} \\to ${e*e} - ${r} \\times ${e} = ${e*e-r*e}  \\to, ${e*e-r*e} - ${o} = ${u(e)}$.`,`De même avec $x$ au départ : <br>
              $x \\to x^2 \\to x^2 - ${r}x \\to x^2 - ${r}x - ${o}$.`,`On développe $(x+${t})(x-${s}) = x^2 ${p(-s)}x${p(t)}x${q(-s*t)}=x^2-${r}x-${o}$.<br>On retrouve l'expression de la question 2.<br>
              On a donc $x^2 - ${r}x - ${o} = (x+${t})(x-${s})$.`,`Il faut trouver un ou des nombres $x$ tels que $x^2-${r}x-${o}=0$ ou d'après la question précédente tels que :<br>
              $(x+${t})(x-${s})=0$.<br>
              Un produit de facteurs est nul si l'un des facteurs est nul , soit <br>
              $\\left\\{\\begin{array}{l c l}
              x+${t}&=&0\\\\
              &\\text{ou}&\\\\
              x-${s}&=&0
              \\end{array}\\right.$ d'où $\\left\\{\\begin{array}{l c l}
              x&=&${-t}\\\\
              &\\text{ou}&\\\\
              x&=& ${s}
              \\end{array}\\right.$.`,`Juliette doit compléter en ligne 4 et 6 :<br>
              ${d(i)}`],style:"nombres"});m+=`<br><br>${h}`,this.enonce=l,this.correction=m}versionOriginale=()=>{this.appliquerLesValeurs(3,4,5,1,4)};versionAleatoire=r=>{const o=b(1,3),e=o+k([2,3,4],this.nbQuestions)[r],t=e-o,s=o*e,c=b(1,10,[o,e]);this.appliquerLesValeurs(t,s,c,o,e)}}export{G as dateDePublication,U as default,Q as refs,j as titre,P as uuid};
