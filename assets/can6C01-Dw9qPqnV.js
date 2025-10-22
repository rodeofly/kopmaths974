import{p as h}from"./qcm-BQR8Ns0N.js";import{r as i,e as t,_ as $,l as f}from"./embellissements-BYV7mIDn.js";import{E as d}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const N="Trouver un ordre de grandeur (QCM)",g=!0,D="qcm",F=!0,G="qcmMono",J="de779",P={"fr-fr":["can6C01","6N2F-flash1"],"fr-ch":[]};class V extends d{nbQuestions;constructor(){super(),this.nbQuestions=1}nouvelleVersion(){for(let r=0,a=0;r<this.nbQuestions&&a<50;){const e=i(3,7),l=i(2,9),p=i(1,9),o=e*100+l*10+p,s=i(5,9),u=o*s;let n=`$${t(o,0)}\\times ${s}$<br>
    Choisir parmi ces propositions, le résultat du calcul, sans effectuer précisément le calcul.<br>`;this.canEnonce=n,this.autoCorrection[r]={enonce:n,propositions:[{texte:`$${t(u,0)}$`,statut:!0},{texte:`$${t(s*1e3+o,0)}$`,statut:!1},{texte:`$${t((e*1e3+l*100+p)*s,0)}$`,statut:!1}]};const m=h(this,r);n+=m.texte;let c=`$${t(o,0)} \\times ${s} = ${t(u,0)}$<br>
        `;o>e*100+50?c+=$(`
    Mentalement : <br>
On remplace le premier facteur $${t(o,0)}$ par $${(e+1)*100}$, on calcule
$${(e+1)*100}\\times ${s}=${t((e+1)*100*s,0)}$ et on sélectionne le résultat qui s'en rapproche le plus.
    `):c+=$(`
    Mentalement : <br>
    On remplace le premier facteur $${t(o,0)}$ par $${e*100}$, on calcule
    $${e*100}\\times ${s}=${t(e*100*s,0)}$ et on sélectionne le résultat qui s'en rapproche le plus.
           `),this.questionJamaisPosee(r,e,o)&&(this.listeQuestions[r]=n,this.listeCorrections[r]=c,r++),this.canReponseACompleter=m.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),a++}f(this)}}export{F as amcReady,G as amcType,V as default,g as interactifReady,D as interactifType,P as refs,N as titre,J as uuid};
