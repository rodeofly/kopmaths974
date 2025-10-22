import{a as v}from"./etudeFonction-BXXWUyni.js";import{af as L,r as a,a as c,e as $,aq as l,f as p,l as D}from"./embellissements-BYV7mIDn.js";import{E as O}from"./Exercice-DtXhjCyI.js";import"./Matrice-C65I2nuw.js";import"mathjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./index-BUDQz6-w.js";import"decimal.js";import"./Hms-u2AUyU1C.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"seedrandom";const N="01/10/2022",j="Dresser et utiliser le tableau de signes d'une fonction affine en lien avec son sens de variation",M="46bec",B={"fr-fr":["2F10-7"],"fr-ch":[]};class G extends O{constructor(){super(),this.besoinFormulaireNumerique=["Types de question ",3,`1 : Donner le tableau de signes.
2 : Utiliser le tableau de signes.
3 : Mélange.`],this.nbQuestions=2,this.spacing=1.75,this.spacingCorr=1.75,this.sup=1}nouvelleVersion(){let f;this.sup===1?f=["Signes1"]:this.sup===2?f=["Signes2"]:f=["Signes1","Signes2"];const g=[["f"],["g"],["h"],["u"],["v"],["w"]],x=L(f,this.nbQuestions);for(let u=0,q=0;u<this.nbQuestions&&q<50;){let b="",o="";const m=[];switch(x[u]){case"Signes1":if(c([0,1])===0){const s=c(g),n=c([1,2,5,10])*c([-1,1]),i=a(1,15)*c([-1,1]),e=-i/n;b=`Une fonction affine $${s}$  définie sur $\\mathbb R$ est strictement ${n>0?"croissante":"décroissante"}. De plus $${s}(${$(e,1)})=0$.<br>
        ${l(0)} Dresser son tableau de signes sur $\\mathbb R$.<br>
        ${l(1)} Donner une fonction $${s}$ vérifiant les conditions précédentes.`,o=`${l(0)} $${s}$ est une fonction affine. Elle s'écrit donc sous la forme $${s}(x)=ax+b$. <br>
        Puisque $${s}$ est strictement ${n>0?"croissante":"décroissante"} sur $\\mathbb R$, les images sont ${n>0?"d'abord négatives, puis positives":"d'abord positives, puis négatives"}.<br>
        Sachant que $${s}$ s'annule en $${$(e,1)}$, le changement de signe intervient donc en $x=${$(e,1)}$. <br>
        On obtient ainsi le tableau de signes suivant : <br>
         `;let t;n>0?t=["Line",10,"",0,"-",20,"z",20,"+"]:t=["Line",10,"",0,"+",20,"z",20,"-"],o+=v({tabInit:[[["$x$",1.5,10],[`$${s}(x)$`,2,50]],["$-\\infty$",20,`$${$(e,1)}$`,20,"$+\\infty$",30]],tabLines:[t],espcl:3.5,deltacl:.8,lgt:5}),o+=`<br> ${l(1)} La fonction doit vérifier les trois conditions : <br>
        $\\bullet$ être une fonction affine ; <br>
        $\\bullet$ être strictement ${n>0?"croissante":"décroissante"} ;<br>
        $\\bullet$ s'annuler en $${$(e,1)}$.<br>
       Comme $${s}$ est une fonction ${n>0?"croissante":"décroissante"}, on doit choisir un coefficient directeur
       $a$ ${n>0?"positif":"négatif"}.<br>
       Prenons ${n>0?"$a=1$":"$a=-1$"}.<br>
       $${s}$ est alors de la forme : $${s}(x)=${n>0?"":"-"}x + b$.<br>
       On cherche maintenant $b$ : <br>
       Comme on sait que : $${s}(${$(e,1)})=0$, on en déduit :
        $${s}(${$(e,1)})=${n>0?`${$(e,1)}`:`${$(-e,1)}`}   + b=0$.<br>
       d'où $b=${n>0?`${$(-e,1)}`:`${$(e,1)}`}$.<br>
       On obtient la fonction $${s}$ définie par $${s}(x)=${n>0?"":"-"}x${n>0?`${p(-e)}`:`${p(e)}`}$.<br>
       En partant d'une autre valeur pour $a$, on aurait obtenu une autre expression pour $${s}$.<br>
       Il existe une infinité de fonctions qui possèdent ces trois propriétés. <br>
       Toutes les fonctions de la forme $${s}(x)= k\\times\\left( ${n>0?"":"-"}x${n>0?`${p(-e)}`:`${p(e)}`}\\right)$ avec $k$ un réel non nul est solution de l'exercice.
       
       `,m.push(n,i,e)}else{const s=c(g),n=a(-5,5,0),i=n*a(-9,9,0),e=-i/n,t=a(-10,10,e),d=n*t+i;b=`Une fonction affine $${s}$  définie sur $\\mathbb R$ vérifie $${s}(${$(e,1)})=0$ et $${s}(${t})=${d}$.<br>
           Dresser son tableau de signes sur $\\mathbb R$. Justifier.
         `,t>e?o=` $${s}$ est une fonction affine (non constante, puisque $${s}(${t})\\neq ${s}(${$(e,1)})$), elle
          est donc soit strictement croissante, soit strictement décroissante.<br>
         On observe que $${e}<${t}$ implique ${n>0?`$${s}(${e}) < ${s}(${t})$`:`$${s}(${e}) > ${s}(${t})$`}.<br>
          Les images et les antécédents sont donc rangés ${n>0?"dans le même ordre":"dans l'ordre inverse"}.<br>
          On en déduit que la fonction $${s}$ est${n>0?"croissante":"décroissante"} sur $\\mathbb R$.<br>
          Les images sont donc ${n>0?"d'abord négatives, puis positives":"d'abord positives, puis négatives"}.<br>
          Sachant que $${s}$ s'annule en $${$(e,1)}$, le changement de signe intervient donc en $x=${$(e,1)}$. <br>
          On obtient ainsi le tableau de signes suivant : <br>
           `:o=` $${s}$ est une fonction affine (non constante, puisque $${s}(${t})\\neq ${s}(${$(e,1)})$), elle
           est donc soit strictement croissante, soit strictement décroissante.<br>
           On observe que $${t}<${e}$ implique ${n>0?`$${s}(${t}) < ${s}(${e})$`:`$${s}(${t}) > ${s}(${e})$`}.<br>
          Les images et les antécédents sont donc rangés ${n>0?"dans le même ordre":"dans l'ordre inverse"}.<br>
          On en déduit que la fonction $${s}$ est${n>0?"croissante":"décroissante"} sur $\\mathbb R$.<br>
           
           Les images sont ${n>0?"d'abord négatives, puis positives":"d'abord positives, puis négatives"}.<br>
           Sachant que $${s}$ s'annule en $${$(e,1)}$, le changement de signe intervient donc en $x=${$(e,1)}$. <br>
           On obtient ainsi le tableau de signes suivant : <br>
            `;let h;n>0?h=["Line",10,"",0,"-",20,"z",20,"+"]:h=["Line",10,"",0,"+",20,"z",20,"-"],o+=v({tabInit:[[["$x$",1.5,10],[`$${s}(x)$`,2,50]],["$-\\infty$",20,`$${$(e,1)}$`,20,"$+\\infty$",30]],tabLines:[h],espcl:3.5,deltacl:.8,lgt:5}),m.push(n,i,e)}break;case"Signes2":default:{const r=a(-5,5,0),s=r*a(-6,6,0),n=-s/r,i=c(g);let e,t;c([!0,!1])?(e=a(n+1,10),t=a(n+1,10,e)):(e=a(-10,n-1),t=a(-10,n-1,e)),b=`On donne le tableau de signes d'une fonction affine  $${i}$  définie sur $\\mathbb R$ :<br>`;let d;r>0?d=["Line",10,"",0,"-",20,"z",20,"+"]:d=["Line",10,"",0,"+",20,"z",20,"-"],b+=v({tabInit:[[["$x$",1.5,10],[`$${i}(x)$`,2,50]],["$-\\infty$",20,`$${$(n,1)}$`,20,"$+\\infty$",30]],tabLines:[d],espcl:3.5,deltacl:.8,lgt:5}),b+=`<br> ${l(0)} Donner le sens de varitions de $${i}$ sur $\\mathbb R$.<br>
        ${l(1)} Comparer $${i}(${e})$ et $${i}(${t})$.`,o=`${l(0)} D'après le tableau de signes, les images sont  ${r>0?"d'abord négatives, puis positives":"d'abord positives, puis négatives"}.<br>
        On en déduit que la fonction $${i}$ est ${r>0?"strictement croissante":"strictement décroissante"} sur $\\mathbb R$.<br>`,o+=`${l(1)} Comme $${i}$ est une fonction affine ${r>0?"strictement croissante":"strictement décroissante"},
          les antécédents et les images sont rangées ${r>0?"dans le même ordre":"dans l'ordre inverse"}. <br>
         `,t>e?o+=` Comme $${e} < ${t}$, alors  ${r>0?`$${i}(${e}) < ${i}(${t})$`:`$${i}(${e}) > ${i}(${t})$`}
         `:o+=` Comme $${t} < ${e}$, alors  ${r>0?`$${i}(${t}) < ${i}(${e})$`:`$${i}(${t}) > ${i}(${e})$`}
          `,m.push(r,s,n,e,t)}break}this.questionJamaisPosee(u,m.map(String).join(";")+x[u])&&(this.listeQuestions[u]=b,this.listeCorrections[u]=o,u++),q++}D(this)}}export{N as dateDePublication,G as default,B as refs,j as titre,M as uuid};
