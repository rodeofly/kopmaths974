import{K as u}from"./Exercice-DtXhjCyI.js";import{a as d,aP as g,r as b,p as l,k as r,aH as m,aG as h,j as o,e as n,m as p,o as f}from"./embellissements-BYV7mIDn.js";import q from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const w="Calculer une longueur dans un triangle rectangle",K=!0,Q="mathLive",k="75151",B={"fr-fr":[],"fr-ch":["NR"]};class F extends q{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=u.clavierFullOperations}nouvelleVersion(){const c=d([!0,!1]),e=g(3,["QD"]),t=b(1,6),$=l(0,0,e[0],"below"),s=l(6,0,e[1],"below"),i=l(6,2,e[2],"above"),a=[];c===!0?(a.push(r($,s),r($,i),r(s,i),m($,s,i),h($,s,i),o("\\sqrt{2025}",2.6,2.1,{}),o(`${t}`,6.8,1,{})),this.question=`Calculer $${e[0]}${e[1]}$.`,this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[1]}$.<br>
              On obtient :<br>
              $\\begin{aligned}
                ${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2+${e[0]}${e[1]}^2\\\\
                ${e[0]}${e[1]}^2&=${e[0]}${e[2]}^2-${e[1]}${e[2]}^2\\\\
                ${e[0]}${e[1]}^2&=(\\sqrt{${n(2025,0)}})^2-${t}^2\\\\
                ${e[0]}${e[1]}^2&=${n(2025,0)}-${t*t}\\\\
                ${e[0]}${e[1]}^2&=${n(2025-t*t,0)}\\\\
                ${e[0]}${e[1]}&= ${p(`\\sqrt{${n(2025-t*t)}}`)}\\\\
                \\end{aligned}$ `,this.reponse=`\\sqrt{${2025-t*t}}`,this.canEnonce=this.question,this.canReponseACompleter=`$${e[0]}${e[1]}=\\ldots$`):(a.push(r($,s),r($,i),r(s,i),m($,s,i),h($,s,i),o("\\sqrt{2025}",2.6,-1,{}),o(`${t}`,6.8,1,{})),this.question=`Calculer $${e[0]}${e[2]}$.`,this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[1]}$.<br>
                    On obtient :<br>
                    $\\begin{aligned}
                      ${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2+${e[0]}${e[1]}^2\\\\
                      ${e[0]}${e[2]}^2&=(\\sqrt{${n(2024)}})^2+${t}^2\\\\
                      ${e[0]}${e[2]}^2&=${n(2025,0)}+${t*t}\\\\
                      ${e[0]}${e[2]}^2&=${n(2025+t*t,0)}\\\\
                      ${e[0]}${e[2]}&= ${p(`\\sqrt{${n(2025+t*t,0)}}`)}\\\\
                      \\end{aligned}$ `,this.reponse=`\\sqrt{${2025+t*t}}`,this.canReponseACompleter=`$${e[0]}${e[2]}=\\ldots$`),this.question+="<br>"+f({xmin:-1,ymin:-1.4,xmax:8,ymax:3,scale:.6,pixelsParCm:18,mainlevee:!1,style:"margin: auto"},a),this.interactif&&(c===!0?this.question+=`<br>$${e[0]}${e[1]}=$`:this.question+=`<br>$${e[0]}${e[2]}=$`),this.canEnonce=this.question}}export{F as default,K as interactifReady,Q as interactifType,B as refs,w as titre,k as uuid};
