import{aP as M,r as l,p as P,aJ as E,ai as L,aX as O,a as A,ap as g,m as d,_ as u,X as c,aG as R,C as q,G as h,e as x,o as D}from"./embellissements-BYV7mIDn.js";import{K as G}from"./Exercice-DtXhjCyI.js";import N from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const J="Calculer l’hypoténuse avec le théorème de Pythagore",V=!0,_="mathLive",U="01/06/2025",W="d9524",Y={"fr-fr":["can4G03","3AutoG11-1"],"fr-ch":[]};class Z extends N{constructor(){super(),this.typeExercice="simple",this.formatChampTexte=G.clavierFullOperations,this.nbQuestions=1}nouvelleVersion(){let r,$;const e=M(3,["QD"]);r=l(2,7),$=l(3,7);const n=P(0,0,e[0]),a=E(n,r,l(0,45),e[1]),i=L(n,a,90,$/r,e[2]),p=O(n,a,i),b=[],y=Math.min(n.x,a.x,i.x)-1,f=Math.min(n.y,a.y,i.y)-1,v=Math.max(n.x,a.x,i.x)+1,C=Math.max(n.y,a.y,i.y)+1;let t,s,o,m;switch(A(["a","b"])){case"a":t=r**2+$**2,s=g(t),o=s[0]!==1,m=s[1]===1,b.push(p[0],p[1],R(n,a,i)),b.push(q(`${x(r)}`,h(n,a).x,h(n,a).y+.4),q(`${x($)}`,h(a,i).x+.4,h(a,i).y)),this.question=`Sur cette figure, calculer la valeur exacte de $${e[0]}${e[2]}$.<br>`,this.question+=D({xmin:y,ymin:f,xmax:v,ymax:C,pixelsParCm:22,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},b),m?(this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[1]}$.<br>
            On obtient :<br>
            $\\begin{aligned}
              ${e[0]}${e[1]}^2+${e[1]}${e[2]}^2&=${e[0]}${e[2]}^2\\\\
              ${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2+${e[0]}${e[1]}^2\\\\
              ${e[0]}${e[2]}^2&=${$}^2+${r}^2\\\\
              ${e[0]}${e[2]}^2&=${$**2}+${r**2}\\\\
              ${e[0]}${e[2]}^2&=${t}\\\\
              ${e[0]}${e[2]}&=\\sqrt{${t}}\\\\
              ${e[0]}${e[2]}&=${d(`${s[0]}`)}
              \\end{aligned}$`,this.correction+=u(`<br> Mentalement : <br>
    La longueur $${e[0]}${e[2]}$ est donnée par la racine carrée de la somme des carrés de $${$}$ et de $${r}$.<br>
    Cette somme vaut $${$**2}+${r**2}=${t}$. <br>
    La valeur cherchée est donc : $\\sqrt{${t}}$, soit $${s[0]}$.`)):(this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[1]}$.<br>
      On obtient :<br>
      $\\begin{aligned}
        ${e[0]}${e[1]}^2+${e[1]}${e[2]}^2&=${e[0]}${e[2]}^2\\\\
        ${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2+${e[0]}${e[1]}^2\\\\
        ${e[0]}${e[2]}^2&=${$}^2+${r}^2\\\\
        ${e[0]}${e[2]}^2&=${$**2}+${r**2}\\\\
        ${e[0]}${e[2]}^2&=${t}\\\\
        ${e[0]}${e[2]}&=${d(`\\sqrt{${t}}`)}
        \\end{aligned}$
        ${o?`En simplifiant, on obtient : $${e[0]}${e[2]} = ${c(t)}$`:""}`,this.correction+=u(`<br> Mentalement : <br>
La longueur $${e[0]}${e[2]}$ est donnée par la racine carrée de la somme des carrés de $${$}$ et de $${r}$.<br>
Cette somme vaut $${$**2}+${r**2}=${t}$. <br>
La valeur cherchée est donc : $\\sqrt{${t}}$.
`)),this.reponse=[`\\sqrt{${t}}`,`${Math.sqrt(t)}`,c(t)],this.canEnonce=this.question,this.canReponseACompleter=`$${e[0]}${e[2]}=\\ldots$`;break;case"b":r=l(1,10),$=l(2,10,[4,9]),t=r**2+$,s=g(t),o=s[0]!==1,m=s[1]===1,m?(this.question=`$${e[0]}${e[1]}${e[2]}$ est un triangle rectangle en $${e[0]}$ dans lequel
                  $${e[0]}${e[1]}=${r}$ et $${e[0]}${e[2]}=\\sqrt{${$}}$.<br>
                   Calculer la valeur exacte de $${e[1]}${e[2]}$ .<br>`,this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[0]}$.<br>
        On obtient :<br>
        $\\begin{aligned}
          ${e[0]}${e[1]}^2+${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2\\\\
          ${e[1]}${e[2]}^2&=${e[0]}${e[1]}^2+${e[0]}${e[2]}^2\\\\
          ${e[1]}${e[2]}^2&=\\sqrt{${$}}^2+${r}^2\\\\
          ${e[1]}${e[2]}^2&=${$}+${r**2}\\\\
          ${e[1]}${e[2]}^2&=${t}\\\\
          ${e[1]}${e[2]}&=\\sqrt{${t}}\\\\
          ${e[1]}${e[2]}&=${d(`${s[0]}`)}
          \\end{aligned}$`,this.correction+=u(`<br> Mentalement : <br>
    La longueur $${e[1]}${e[2]}$ est donnée par la racine carrée de la somme des carrés de $\\sqrt{${$}}$ et de $${r}$.<br>
    Cette somme vaut $${$}+${r**2}=${t}$ (n'oubliez pas que $(\\sqrt{${$}})^2=${$}$). <br>
    La valeur cherchée est donc : $${s[0]}$.`)):(this.question=`$${e[0]}${e[1]}${e[2]}$ est un triangle rectangle en $${e[0]}$ dans lequel
      $${e[0]}${e[1]}=${r}$ et $${e[0]}${e[2]}=\\sqrt{${$}}$.<br>
       Calculer la valeur exacte de $${e[1]}${e[2]}$ .<br>`,this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[0]}$.<br>
On obtient :<br>
$\\begin{aligned}
${e[0]}${e[1]}^2+${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2\\\\
${e[1]}${e[2]}^2&=${e[0]}${e[1]}^2+${e[0]}${e[2]}^2\\\\
${e[1]}${e[2]}^2&=\\sqrt{${$}}^2+${r}^2\\\\
${e[1]}${e[2]}^2&=${$}+${r**2}\\\\
${e[1]}${e[2]}^2&=${t}\\\\
${e[1]}${e[2]}&=${d(`\\sqrt{${t}}`)}
\\end{aligned}$
${o?`En simplifiant, on obtient : $${e[1]}${e[2]} = ${c(t)}$`:""}`,this.correction+=u(`<br> Mentalement : <br>
La longueur $${e[1]}${e[2]}$ est donnée par la racine carrée de la somme des carrés de $\\sqrt{${$}}$ et de $${r}$.<br>
Cette somme vaut $${$}+${r**2}=${t}$ (n'oubliez pas que $(\\sqrt{${$}})^2=${$}$). <br>
La valeur cherchée est donc : $\\sqrt{${t}}${o?"="+c(t):""}$.`)),this.reponse=[`\\sqrt{${t}}`,c(t),`${Math.sqrt(t)}`],this.canEnonce=this.question,this.canReponseACompleter=`$${e[1]}${e[2]}=\\ldots$`;break}}}export{U as dateDeModifImportante,Z as default,V as interactifReady,_ as interactifType,Y as refs,J as titre,W as uuid};
