import{r as l,u as o,$ as a,f as $,l as d}from"./embellissements-BYV7mIDn.js";import{E as u}from"./Exercice-DtXhjCyI.js";import{r as f}from"./questionMathLive-DdRvWqlN.js";import{h}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const k="Déterminer les coordonnées du sommet d'une parabole à partir de la forme canonique",z=!0,G="mathLive",H="1/11/2021",I="f2035",K={"fr-fr":["can1F01"],"fr-ch":[]};class M extends u{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){let i,r,n,e,t;for(let s=0,m=0;s<this.nbQuestions&&m<50;){n=l(-10,10,[0,-1,1]),e=l(-5,5,0),t=l(-5,5);const p=f(this,s,"\\Bigg(~~%{champ1}~~;~~%{champ2}~~\\Bigg)"),c="$\\Bigg(~~~~~;~~~~~\\Bigg)$";t===0?(i=`Les coordonnées du sommet de la parabole représentant
    la fonction $f$ définie sur $\\mathbb{R}$
    par $f(x)=${o(0,n)}(${o(1,e)})^2$ sont  :
    ${a(this.interactif?p:c)}`,e>0?r=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
        ${a("$f(x)=a(x-\\alpha)^2+\\beta$")}Sous cette forme les coordonnées du sommet de la parabole qui représente la fonction $f$ sont :
    $(\\alpha;\\beta)$.
    ${a(` $f(x)=${o(0,n)}(${o(1,e)})^2=${o(0,n)}(x-(\\underbrace{-${e}}_{\\alpha}))^2+0$`)}.
     Ainsi, $\\alpha=-${e}$ et $\\beta=${t}$ et on en déduit que les coordonnées du sommet de la parabole sont : $(-${e};${t})$.`:r=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
        ${a("$f(x)=a(x-\\alpha)^2+\\beta$")} Sous cette forme les coordonnées du sommet de la parabole qui représente la fonction $f$ sont :
  $(\\alpha;\\beta)$.
  ${a(`$f(x)=${o(0,n)}(${o(1,e)})^2$`)}
     Puisque $\\alpha=${-e}$ et $\\beta=${t}$, on en déduit que les coordonnées du sommet de la parabole sont : $(${-e};${t})$.`,this.canEnonce=`Déterminer les coordonnées du sommet de la parabole représentant
        la fonction $f$ définie sur $\\mathbb{R}$
        par $f(x)=${o(0,n)}(${o(1,e)})^2$.`,this.canReponseACompleter=""):(i=`Les coordonnées du sommet de la parabole représentant
    la fonction $f$ définie sur $\\mathbb{R}$
    par     $f(x)=${o(0,n)}(${o(1,e)})^2${$(t)}$ sont  :
     ${a(this.interactif?p:c)}`,e>0?r=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
        ${a("$f(x)=a(x-\\alpha)^2+\\beta$")} Sous cette forme les coordonnées du sommet de la parabole qui représente la fonction $f$ sont :
        $(\\alpha;\\beta)$.
        ${a(`$f(x)=${o(0,n)}(${o(1,e)})^2${$(t)}
        =${o(0,n)}(x-(\\underbrace{-${e}}_{\\alpha}))^2${$(t)}$`)}
        Ainsi, $\\alpha=-${e}$ et $\\beta=${t}$ et on en déduit que les coordonnées du sommet de la parabole sont : $(${-e};${t})$.`:r=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
        ${a("$f(x)=a(x-\\alpha)^2+\\beta$")}  Sous cette forme les coordonnées du sommet de la parabole qui représente la fonction $f$ sont :
        $(\\alpha;\\beta)$.
        ${a(`$f(x)=${o(0,n)}(${o(1,e)})^2${$(t)}$`)}
         Puisque $\\alpha=${-e}$ et $\\beta=${t}$, on en déduit que les coordonnées du sommet de la parabole sont : $(${-e};${t})$.`,this.canEnonce=`Déterminer les coordonnées du sommet de la parabole représentant
        la fonction $f$ définie sur $\\mathbb{R}$
        par  $f(x)=${o(0,n)}(${o(1,e)})^2${$(t)}$.`,this.canReponseACompleter=""),h(this,s,{champ1:{value:String(-e)},champ2:{value:String(t)}}),this.questionJamaisPosee(s,n,e,t)&&(this.listeQuestions[s]=i,this.listeCorrections[s]=r,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),s++),m++}d(this)}}export{H as dateDePublication,M as default,z as interactifReady,G as interactifType,K as refs,k as titre,I as uuid};
