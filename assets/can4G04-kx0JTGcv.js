import{aP as x,r as p,p as f,aJ as u,aX as y,ap as g,aG as C,j as d,G as $,e as h,o as v,D as q,m as b,X as c,_ as A}from"./embellissements-BYV7mIDn.js";import{K as E}from"./Exercice-DtXhjCyI.js";import P from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const X="Calculer un côté avec le théorème de Pythagore",k=!0,F="mathLive",J="4b711",V={"fr-fr":["can4G04","BP2AutoR5","3AutoG11-2"],"fr-ch":[]};class _ extends P{constructor(){super(),this.typeExercice="simple",this.formatChampTexte=E.clavierFullOperations,this.nbQuestions=1}nouvelleVersion(){const e=x(3,["QD"]),r=p(2,5),o=p(6,10),t=o**2-r**2,s=f(0,0,e[0]),i=u(s,r,-90,e[1]),a=u(i,Math.sqrt(t),0,e[2]),l=y(s,i,a),n=[],m=g(t)[0]!==1;n.push(l[0],l[1],C(s,i,a)),n.push(d(`${h(o)}`,$(a,s).x,$(a,s).y+.4,{letterSize:"scriptsize"}),d(`${h(r)}`,$(i,s).x-.3,$(i,s).y+.2,{letterSize:"scriptsize"})),this.question=`Déterminer la valeur exacte de $${e[1]}${e[2]}$.<br>`,this.question+=`${v(Object.assign({scale:.5,style:"margin: auto; display: block"},q([n],{rxmin:0,rxmax:0,rymax:0,rymin:.5})),[n])}`,this.optionsChampTexte={texteAvant:`<br>$${e[1]}${e[2]}=$`},this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[1]}$.<br>
      On obtient :<br><br>
      $\\begin{aligned}
        ${e[0]}${e[1]}^2+${e[1]}${e[2]}^2&=${e[0]}${e[2]}^2\\\\
        ${e[1]}${e[2]}^2&=${e[0]}${e[2]}^2-${e[0]}${e[1]}^2\\\\
        ${e[1]}${e[2]}^2&=${o}^2-${r}^2\\\\
        ${e[1]}${e[2]}^2&=${o**2}-${r**2}\\\\
        ${e[1]}${e[2]}^2&=${t}\\\\
        ${e[1]}${e[2]}&=${b("\\sqrt{"+t+"}")}
        \\end{aligned}$<br>
        ${m?`En simplifiant, on obtient : $${e[1]}${e[2]} = ${b(c(t))}$.`:""}
        <br>`,this.correction+=A(`Mentalement : <br>
    La longueur $${e[1]}${e[2]}$ est donnée par la racine carrée de la différence des carrés de $${o}$ et de $${r}$.<br>
    Cette différence vaut $${o**2}-${r**2}=${t}$. <br>
    La valeur cherchée est donc : $\\sqrt{${t}}${m?"="+c(t):""}$.`,"blue"),this.reponse=[`\\sqrt{${t}}`,`${Math.sqrt(t)}`,c(t)],this.canEnonce=this.question,this.canReponseACompleter=`$${e[1]}${e[2]}=\\ldots$`}}export{_ as default,k as interactifReady,F as interactifType,V as refs,X as titre,J as uuid};
