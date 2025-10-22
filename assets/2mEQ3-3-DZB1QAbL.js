import{g as T,r as q,v as d,z as a,f as o,Y as E,F as l,m as g,a as S,l as Q}from"./embellissements-BYV7mIDn.js";import{E as C}from"./EquationSecondDegre-Dejvrn5a.js";import{E as P}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./MonomePlusieursVariables-DHq3iA-O.js";import"./PolynomePlusieursVariables-DEsXl1Ev.js";import"./languagesStore-wAwK5LyE.js";import"./canStore-DaSrd7sp.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const W="Déterminer l'équation de la tangente à une courbe ou un cercle passant par un point",Z="04/09/2025",_=!1,ee="asdea",te={"fr-fr":[],"fr-ch":["2mEqCar-3"]};class ie extends P{constructor(){super(),this.besoinFormulaireTexte=["Tangente à",`1 : Une courbe
2 : Un cercle
3 : Mélange`],this.sup=1,this.nbQuestions=3}nouvelleVersion(){const L=T({saisie:this.sup,min:1,max:2,melange:3,defaut:3,listeOfCase:["courbe","cercle"],shuffle:!0,nbQuestions:this.nbQuestions});for(let b=0,w=0;b<this.nbQuestions&&w<50;){let y="",m="",v=[];if(L[b]==="courbe"){let p,u,r,c,$,i;do $=q(-5,5,[0]),i=q(-5,5,[0]),p=q(-5,5,[0]),c=q(-5,5,[0]),u=c-i+p*$,r=2*u+p;while(u===0);y=`Déterminer les équations de toutes les tangentes à la courbe d'équation $y = ${d(u)}x^2${a(r)}x${o(c)}$ passant par le point $(${$} \\,;\\, ${i})$.`,m=`On pose $y=ax+b$ la droite tangente avec inconnues $a$ et $b$.<br> On va déterminer les valeurs de $a$ et $b$.<br> La droite passe par le point $(${$}\\,;\\,${i})$, donc $${i}=${$}a+b$, d'où $b=${i}${a(-$)}a$. On obtient 
            \\[y=ax${o(i)}${a(-$)}a\\]
            On impose que cette droite et la courbe aient un unique point d'intersection, donc que le système
            \\[\\begin{cases}
            y=${d(u)}x^2${a(r)}x${a(c)}\\\\
            y=ax${o(i)}${a(-$)}a
            \\end{cases}\\]
            ait une unique solution. On résout le système par comparaison :
            \\[${d(u)}x^2${a(r)}x${a(c)}=ax${o(i)}${a(-$)}a\\]
            Cette équation est équivalente à 
            \\[${d(u)}x^2${r<0?`-(${-r}+a)`:`(${r}-a)`}x${a($)}a${o(c-i)}=0\\]
            Le discriminant de ce polynôme doit être nul, afin que l'équation ait une unique solution. Il vaut :
            \\[\\Delta=(${r}-a)^2-4\\cdot${E(u)}\\cdot\\left(${d($)}a${o(c-i)}\\right).\\] On impose donc $\\Delta=0$, d'où
            \\[(${r}-a)^2-4\\cdot${E(u)}\\cdot\\left(${d($)}a${o(c-i)}\\right)=0\\]
            On obtient l'équation du second degré en $a$ suivante :
            \\[a^2${a(-(2*r+4*u*$))}a${o(r*r-4*u*(c-i))}=0.\\]
            On résout cette équation et on obtient comme ensemble de solutions
            `;const x=C.aPartirDesCoefficients(new l(1,1),new l(-(2*r+4*u*$),1),new l(r*r-4*u*(c-i),1),new l(0,1),new l(0,1),new l(0,1),{format:"initial",variable:"a"});let t=x.solutionFrac();if(m+=`$${x.ensembleDeSolutionsTex}$.`,x.delta.num===0){m+=` Il y a qu'une seule valeur de $a$ possible et donc une seule tangente.
          On déduit l'ordonnée à l'origine en substituant la valeur trouvée pour $a$ dans $b=${i}${a(-$)}a$.<br>`;let e=t[0],n=new l(i,1).sommeFraction(e.multiplieEntier(-$));m+=`\\[b=${n.texFractionSimplifiee}\\]
        L'équation de la tangente est donc :<br>
        \\[${g(`y=${d(e.simplifie())}x${n.simplifie().texFractionSignee}`)}.\\]
        `}else{`${i}${a(-$)}`;let e=t[0],n=t[1],s=new l(i,1).sommeFraction(n.multiplieEntier(-$)),f=new l(i,1).sommeFraction(e.multiplieEntier(-$));m+=`\\[b=${s.texFractionSimplifiee} \\text{ si } a=${n.texFractionSimplifiee}\\quad \\text{ ou } b=${f.texFractionSimplifiee} \\text{ si } a=${e.texFractionSimplifiee}\\]
        Les équations des tangentes sont donc :<br>
        \\[${g(`y=${d(n.simplifie())}x${s.simplifie().texFractionSignee}`)} \\text{ et } ${g(`y=${d(e.simplifie())}x${f.simplifie().texFractionSignee}`)}.\\]
        `}v=[x.solutionsListeTex[0]]}else{let p=[[[1,8],[4,7]],[[9,13],[15,5]]],u=S([0,1]),r=[[0,0],[0,1],[1,0],[1,1]],c=S([0,1,2,3]),$=S([0,1]),i=p[u][r[c][0]][r[c][1]],x=p[u][r[c][0]][(r[c][1]+1)%2],t,e,n,s;n=q(-14,14,[0]),s=q(-14,14,[0]),t=p[u][(r[c][0]+1)%2][$]+n,e=p[u][(r[c][0]+1)%2][($+1)%2]+s,y=`Déterminer les équations de toutes les tangentes au cercle d'équation $(x${o(-n)})^2+(y${o(-s)})^2 = ${i**2}$ passant par le point $(${t} \\,;\\, ${e})$.`,m=`On pose $y=ax+b$ la droite tangente avec inconnues $a$ et $b$.<br> On va déterminer les valeurs de $a$ et $b$.<br> La droite passe par le point $(${t}\\,;\\,${e})$, donc $${e}=${d(t)}a+b$, d'où $b=${e}${a(-t)}a$. On obtient 
            \\[y=ax${o(e)}${a(-t)}a\\]
            On impose que cette droite et la courbe aient un unique point d'intersection, donc que le système
            \\[\\begin{cases}
             ${i**2}=(x${o(-n)})^2+(y${o(-s)})^2\\\\
            y=ax${o(e)}${a(-t)}a
            \\end{cases}\\]
            ait une unique solution. On résout le système par substitution de la valeur de $y$ dans la première équation :
            \\[\\begin{cases}
             ${i**2}=(x${o(-n)})^2+(ax${o(e)}${a(-t)}a${o(-s)})^2\\\\
            y=ax${o(e)}${a(-t)}a
            \\end{cases}\\iff\\begin{cases}
             ${i**2}=(x${o(-n)})^2+(ax${a(-t)}a${o(e-s)})^2\\\\
            y=ax${o(e)}${a(-t)}a
            \\end{cases}\\]
            La première équation du système est équivalente à 
            \\[(a^2+1)x^2+(${d(-2*t)}a^2${a(2*e-2*s)}a${a(-2*n)})x${a(t**2)}a^2${a(2*t*s-2*e*t)}a${o(n**2+(e-s)**2-i**2)}=0\\]
            Le discriminant de ce polynôme doit être nul, afin que l'équation ait une unique solution. Il vaut :
            \\[\\Delta=(${d(-2*t)}a^2${a(2*e-2*s)}a${a(-2*n)})^2-4(a^2+1)(${d(t**2)}a^2${a(2*t*s-2*e*t)}a${o(n**2+(e-s)**2-i**2)}).\\] On impose donc $\\Delta=0$ et on obtient l'équation du second degré en $a$ suivante :
            \\[${d(4*i**2-4*t**2+8*t*n-4*n**2)}a^2${a(8*t*e-8*n*e-8*t*s+8*n*s)}a${o(4*i**2-4*e**2+8*e*s-4*s**2)}=0.\\]
            On résout cette équation et on obtient les deux solutions
            `;const f=C.aPartirDesCoefficients(new l(4*i**2-4*t**2+8*t*n-4*n**2,1),new l(8*t*e-8*n*e-8*t*s+8*n*s,1),new l(4*i**2-4*e**2+8*e*s-4*s**2,1),new l(0,1),new l(0,1),new l(0,1),{format:"initial",variable:"a"});m+=`$${f.ensembleDeSolutionsTex}$. Ces deux solutions correspondent aux pentes des deux tangentes.<br> On en déduit l'ordonnées à l'origine de chaque droite en substituant la valeur trouvée pour $a$ dans $b=${e}${a(-t)}a$.<br>`;let F=new l(x*i+t*(s-e)+n*e-n*s,i**2-(t-n)**2),h=new l(-x*i+t*(s-e)+n*e-n*s,i**2-(t-n)**2),O=new l(e,1).sommeFraction(h.multiplieEntier(-t)),D=new l(e,1).sommeFraction(F.multiplieEntier(-t));m+=`\\[b=${O.texFractionSimplifiee} \\text{ si } a=${h.texFractionSimplifiee}\\quad \\text{ ou } b=${D.texFractionSimplifiee} \\text{ si } a=${F.texFractionSimplifiee}\\]
        Les équations des tangentes sont donc :<br>
        \\[${g(`y=${d(h.simplifie())}x${O.simplifie().texFractionSignee}`)} \\text{ et } ${g(`y=${d(F.simplifie())}x${D.simplifie().texFractionSignee}`)}.\\]
        
`,v=[f.solutionsListeTex[0],f.solutionsListeTex[1]]}this.questionJamaisPosee(b,v[0])&&(this.listeQuestions[b]=y,this.listeCorrections[b]=m,b++),w++}Q(this)}}export{Z as dateDePublication,ie as default,_ as interactifReady,te as refs,W as titre,ee as uuid};
