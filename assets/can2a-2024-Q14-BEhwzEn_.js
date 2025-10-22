import s from"./ExerciceSimple-CWWOU0FG.js";import{a,e as t,m as o}from"./embellissements-BYV7mIDn.js";import{t as n,c as u}from"./style-CcGLZIPY.js";import{p}from"./qcm-BQR8Ns0N.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const C="Calculer un prix après des évolutions successives",Q=!0,D="qcm",L="d51f8";class N extends s{constructor(){super(),this.canOfficielle=!1,this.formatInteractif="qcm",this.typeExercice="simple",this.nbQuestions=1,this.nbQuestionsModifiable=!1}nouvelleVersion(){const e=this.canOfficielle?[100,10,99,99]:a([[100,10,99,101],[1e3,1,999.9,1000.1],[1e3,10,990,1010],[10,10,9.9,10.1],[1,10,.99,1.01],[100,50,75,125],[10,50,7.5,15]]),$=e[0]+e[0]*e[1]/100,i=`Un article à $${t(e[0])}$ € subit une hausse de $${e[1]}\\,\\%$ puis une baisse de $${e[1]}\\,\\%$.
        <br> Son nouveau prix est maintenant de : `;this.autoCorrection[0]={options:{ordered:!1},enonce:i,propositions:[{texte:`$${t(e[2],2)}$ €`,statut:!0},{texte:`$${t(e[0],2)}$ €`,statut:!1},{texte:`$${t(e[3],2)}$ €`,statut:!1}]};const r=p(this,0);this.question=i+r.texte,this.correction=` $${e[1]}\\,\\%$ de  $${t(e[0])}$ € est égal à $${t(e[0]*e[1]/100,2)}$ €. <br>
        Après la hausse de $${e[1]}\\,\\%$, le prix est de $${t(e[0])}$ € $+$ $${t(e[0]*e[1]/100,2)}$ € $=${t($,2)}$ €.<br>
        $${e[1]}\\,\\%$ de  $${t($)}$ € est égal à $${t($*e[1]/100,2)}$ €. <br>
        Après la baisse de $${e[1]}\\,\\%$, le prix est de  $${t($)}$ € $-$ $${t($*e[1]/100,2)}$ € $=${t($-$*e[1]/100)}$ €.<br>
        Le nouveau prix est $${o(u(e[2]))}$ €. <br>
        ${n("Autre méthode :<br> ")}
        Augmenter de $${e[1]}\\,\\%$ revient à multiplier par $${t(1+e[1]/100,2)}$.<br>
Diminuer de $${e[1]}\\,\\%$ revient à multiplier par $${t(1-e[1]/100,2)}$.<br>
Donc le prix est multiplié par $${t(1+e[1]/100)}\\times ${t(1-e[1]/100,2)}$, c'est-à-dire par $${t((1+e[1]/100)*(1-e[1]/100),2)}$.<br>
Le prix final est donc inférieur au prix initial (car on multiplie par un nombre inférieur à $1$).
        `,this.canEnonce=`Un article à $${t(e[0])}$ € subit une hausse de $${t(e[1])}\\,\\%$ puis une baisse de $${t(e[1])}\\,\\%$.<br>
        Son nouveau prix est maintenant de :`,this.canReponseACompleter=`\\faSquare[regular] $${t(e[2],2)}$ € <br>\\faSquare[regular] $${t(e[0],2)}$ €<br>\\faSquare[regular] $${t(e[3],2)}$ € `}}export{N as default,Q as interactifReady,D as interactifType,C as titre,L as uuid};
