import{y as O,a as E,br as Q,r as _,m as s,_ as m,s as u,Y as L,l as R}from"./embellissements-BYV7mIDn.js";import{f as d}from"./deprecatedFractions-D2cbyAQf.js";import{p as C,a as D}from"./Personne-DRrbQFAY.js";import{t as o}from"./style-CcGLZIPY.js";import{E as I}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const U="Trouver l'erreur dans une résolution d'équation du premier degré",W="df5a3",X={"fr-fr":["4L15-0","BP2RES6"],"fr-ch":["10FA3-8"]},r=function(a){return a>0?{signe:"+",operation:"\\bf{soustraire}",operationTexte:"soustraire",chgt_signe:a}:{signe:"",operation:"\\bf{ajouter}",operationTexte:"ajouter",chgt_signe:a*-1}},S=function(){return _(0,1)===0?{prenom:C(),pronom:"il"}:{prenom:D(),pronom:"elle"}},P=function(a,c){return d(a,c)[0]!==a},l=function(a,c){return P(a,c)?d(a,c)[1]===1?`$= ${d(a,c)[0]}$`:d(a,c)[0]===0?"$ = 0":`$= \\dfrac{${d(a,c)[0]}}{${d(a,c)[1]}}$`:d(a,c)[1]===1?`$= ${d(a,c)[0]}$`:d(a,c)[0]===0?"$ = 0$":" "};class Z extends I{constructor(){super(),this.nbQuestions=3,this.spacing=3,this.spacingCorr=2.5}nouvelleVersion(){this.consigne=this.nbQuestions===1?"Trouver l'erreur dans les résolutions suivantes.<br>On ne demande pas de résoudre l'équation.":"Trouver l'erreur dans la résolution suivante.<br>On ne demande pas de résoudre l'équation.";const c=O([E([1,3]),E([2,4]),5]),h=Q(c,this.nbQuestions),v=["x","t","u","v","w","y","z"];for(let f=0,x,y,T=0;f<this.nbQuestions&&T<50;){const t=v[_(0,v.length-1)],i=_(-9,9,[-1,0,1]),$=_(-9,9,[-1,0,1]),e=_(-9,9,[-1,0,1,i,-i]),n=_(-9,9,[-1,0,1]),p=S(),b=[{pronom:p.pronom,prenom:p.prenom,a:i,b:$,c:e,d:n,inc:t,eq:`$${i}${t} ${r($).signe} ${$} = ${n} ${r(e).signe} ${e}${t}$`,et1:`${o("Étape 1 :")} $${i}${t} ${r(e).signe} ${e}${t} ${r($).signe} ${$} = ${n} $`,et2:`${o("Étape 2 :")} $${i}${t} ${r(e).signe} ${e}${t} = ${n} ${r(-$).signe} ${-$} $`,et3:`${o("Étape 3 :")} $${i+e}${t} = ${n} ${r(-$).signe} ${-$} $`,et4:`${o("Étape 4 :")} $${t} = \\dfrac{${n} ${r(-$).signe} ${-$}}{${i+e}} $`,et_fin:`${o("Étape 5 :")} $${t} = \\dfrac{${n-$}}{${i+e}}$ ${l(n-$,i+e)}`,err:`L'erreur se situe à l'étape 1.
            <br>${p.prenom} «${u(1)}a fait passer${u(1)}» le terme $${r(e).signe} ${e}${t}$ «${u(1)}de l'autre côté${u(1)}»
            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.
            <br>Ici il faut ${r(e).operationTexte} $${r(e).chgt_signe}${t}$ aux deux membres.`,eq_corr:`${o("Équation d'origine : ")} $${i}${t} ${r($).signe} ${$} = ${n} ${r(e).signe} ${e}${t}$`,eq_corr_et1:`${o("Étape 1 : ")} $${s(r(e).operation)}$ $${s(r(e).chgt_signe)}$${m(`$\\boldsymbol{${t}}$`)} aux deux membres.
          <br> $${i}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)} $${r($).signe}\\,${$} = ${n} ${r(e).signe} ${e}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$${t}$`)}
          <br>${o("Étape 2 : ")} On réduit.
          <br> $${i-e}${t} ${r($).signe} ${$} = ${n}$`,eq_corr_et2:`${o("Étape 3 :")} $${s(r($).operation)}$ $${s(r($).chgt_signe)}$ aux deux membres.
          <br> $${i-e}${t} ${r($).signe} ${$}\\,${s(r(-$).signe)}\\,${s(-$)} = ${n}\\,${s(r(-$).signe)}\\,${s(-$)}$
          <br>${o("Étape 4 : ")} Réduction à nouveau.
          <br> $${i-e}${t} = ${n-$}$`,eq_corr_et3:`${o("Étape 5 :")} $${s("\\textbf{diviser par}")}$ $${s(i-e)}$ les deux membres.
          <br> $\\dfrac{${i-e}${t}}{${s(i-e)}} = \\dfrac{${n-$}}{${s(i-e)}}$
          <br>$${t} = \\dfrac{${n-$}}{${i-e}}$ ${l(n-$,i-e)}`},{pronom:p.pronom,prenom:p.prenom,a:i,b:$,c:e,d:n,inc:t,eq:`$${i}${t} ${r($).signe} ${$} = ${n} ${r(e).signe} ${e}${t}$`,et1:`${o("Étape 1 :")} $${i}${t} ${r(-e).signe} ${-e}${t} ${r($).signe} ${$} = ${n}$`,et2:`${o("Étape 2 :")} $${i}${t} ${r(-e).signe} ${-e}${t} = ${n} ${r($).signe} ${$}$`,et3:`${o("Étape 3 :")} $${i-e}${t} = ${n} ${r($).signe} ${$}$`,et4:`${o("Étape 4 :")} $${t} = \\dfrac{${n} ${r($).signe} ${$}}{${i-e}} $`,et_fin:`${o("Étape 5 :")} $${t} = \\dfrac{${n+$}}{${i-e}}$ ${l(n+$,i-e)}`,err:`L'erreur se situe à l'étape 2.
            <br>${p.prenom} «${u(1)}a fait passer${u(1)}» le terme $${r($).signe} ${$}$ «${u(1)}de l'autre côté${u(1)}»
            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.
            <br>Ici il faut ${r($).operationTexte} $${r($).chgt_signe}$ aux deux membres.`,eq_corr:`${o("Équation d'origine : ")} $${i}${t} ${r($).signe} ${$} = ${n} ${r(e).signe} ${e}${t}$`,eq_corr_et1:`${o("Étape 1 :")} $${s(r(e).operation)}$ $${s(r(e).chgt_signe)}$${m(`$\\boldsymbol{${t}}$`)} aux deux membres
          <br> $${i}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)} $ ${r($).signe}\\,${$} = ${n} ${r(e).signe} ${e}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)}
          <br>${o("Étape 2 : ")} On réduit.
          <br> $${i-e}${t} ${r($).signe} ${$} = ${n}$`,eq_corr_et2:`${o("Étape 3 :")} $${s(r($).operation)}$ $${s(r($).chgt_signe)}$ aux deux membres
          <br> $${i-e}${t} ${r($).signe} ${$}\\,${s(r(-$).signe)}\\,${s(-$)} = ${n}\\,${s(r(-$).signe)}\\,${s(-$)}$
          <br>${o("Étape 4 : ")} Réduction à nouveau.
          <br> $${i-e}${t} = ${n-$}$`,eq_corr_et3:`${o("Étape 5 :")} $${s("\\textbf{diviser par}")}$ $${s(i-e)}$ les deux membres
          <br> $\\dfrac{${i-e}${t}}{${s(i-e)}} = \\dfrac{${n-$}}{${s(i-e)}}$
          <br>$${t} = \\dfrac{${n-$}}{${i-e}}$ ${l(n-$,i-e)}`},{pronom:p.pronom,prenom:p.prenom,a:i,b:$,c:e,d:n,inc:t,eq:`$${i}${t} ${r($).signe} ${$} = ${e}${t} ${r(n).signe} ${n} $`,et1:`${o("Étape 1 :")} $${i}${t} = ${e}${t} ${r(n).signe} ${n} ${r(-$).signe} ${-$}$`,et2:`${o("Étape 2 :")} $${i}${t} ${r(e).signe} ${e}${t} = ${n} ${r(-$).signe} ${-$}$`,et3:`${o("Étape 3 :")} $${i+e}${t} = ${n} ${r(-$).signe} ${-$}$`,et4:`${o("Étape 4 :")} $${t} = \\dfrac{${n} ${r(-$).signe} ${-$}}{${i+e}} $`,et_fin:`${o("Étape 5 :")} $${t} = \\dfrac{${n-$}}{${i+e}}$ ${l(n-$,i+e)}`,err:`L'erreur se situe à l'étape 2.
            <br>${p.prenom} «${u(1)}a fait passer${u(1)}» le terme $${r(e).signe} ${e}${t}$ «${u(1)}de l'autre côté${u(1)}»
            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.
            <br>Ici il faut ${r(e).operationTexte} $${r(e).chgt_signe}${t}$ aux deux membres.`,eq_corr:`${o("Équation d'origine : ")} $${i}${t} ${r($).signe} ${$} = ${e}${t} ${r(n).signe} ${n} $`,eq_corr_et1:`${o("Étape 1 :")} $${s(r(e).operation)}$ $${s(r(e).chgt_signe)}$${m(`$\\boldsymbol{${t}}$`)} aux deux membres
          <br> $${i}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)} $${r($).signe}\\,${$} = ${n} ${r(e).signe} ${e}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)}
          <br>${o("Étape 2 : ")} On réduit.
          <br> $${i-e}${t} ${r($).signe} ${$} = ${n}$`,eq_corr_et2:`${o("Étape 3 :")} $${s(r($).operation)}$ $${s(r($).chgt_signe)}$ aux deux membres
          <br> $${i-e}${t} ${r($).signe} ${$}\\,${s(r(-$).signe)}\\,${s(-$)} = ${n}\\,${s(r(-$).signe)}\\,${s(-$)}$
          <br>${o("Étape 4 : ")} Réduction à nouveau.
          <br> $${i-e}${t} = ${n-$}$`,eq_corr_et3:`${o("Étape 5 :")} $${s("\\textbf{diviser par}")}$ $${s(i-e)}$ les deux membres
          <br> $\\dfrac{${i-e}${t}}{${s(i-e)}} = \\dfrac{${n-$}}{${s(i-e)}}$
          <br>$${t} = \\dfrac{${n-$}}{${i-e}}$ ${l(n-$,i-e)}`},{pronom:p.pronom,prenom:p.prenom,a:i,b:$,c:e,d:n,inc:t,eq:`$${i}${t} ${r($).signe} ${$} = ${e}${t} ${r(n).signe} ${n} $`,et1:`${o("Étape 1 :")} $${i}${t} = ${e}${t} ${r(n).signe} ${n} ${r($).signe} ${$}$`,et2:`${o("Étape 2 :")} $${i}${t} ${r(-e).signe} ${-e}${t} = ${n} ${r($).signe} ${$}$`,et3:`${o("Étape 3 :")} $${i-e}${t} = ${n} ${r($).signe} ${$}$`,et4:`${o("Étape 4 :")} $${t} = \\dfrac{${n} ${r($).signe} ${$}}{${i-e}} $`,et_fin:`${o("Étape 5 :")} $${t} = \\dfrac{${n+$}}{${i-e}}$ ${l(n+$,i-e)}`,err:`L'erreur se situe à l'étape 1.
            <br>${p.prenom} «${u(1)}a fait passer${u(1)}» le terme $${r($).signe} ${$}$ «${u(1)}de l'autre côté${u(1)}»
            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.
            <br>Ici il faut ${r($).operationTexte} $${r($).chgt_signe}$ aux deux membres.`,eq_corr:`${o("Équation d'origine : ")} $${i}${t} ${r($).signe} ${$} = ${e}${t} ${r(n).signe} ${n} $`,eq_corr_et1:`${o("Étape 1 :")} $${s(r(e).operation)}$ $${s(r(e).chgt_signe)}$${m(`$\\boldsymbol{${t}}$`)} aux deux membres
          <br>$${i}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)} $${r($).signe}\\,${$} = ${n} ${r(e).signe} ${e}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)}
          <br>${o("Étape 2 : ")} On réduit.
          <br>$${i-e}${t} ${r($).signe} ${$} = ${n}$`,eq_corr_et2:`${o("Étape 3 :")} $${s(r($).operation)}$ $${s(r($).chgt_signe)}$ aux deux membres
          <br>$${i-e}${t} ${r($).signe} ${$}\\,${s(r(-$).signe)}\\,${s(-$)} = ${n}\\,${s(r(-$).signe)}\\,${s(-$)}$
          <br>${o("Étape 4 : ")} Réduction à nouveau.
          <br>$${i-e}${t} = ${n-$}$`,eq_corr_et3:`${o("Étape 5 :")} $${s("\\textbf{diviser par}")}$ $${s(i-e)}$ les deux membres
          <br>$\\dfrac{${i-e}${t}}{${s(i-e)}} = \\dfrac{${n-$}}{${s(i-e)}}$
          <br>$${t} = \\dfrac{${n-$}}{${i-e}}$ ${l(n-$,i-e)}`},{pronom:p.pronom,prenom:p.prenom,a:i,b:$,c:e,d:n,inc:t,eq:`$${i}${t} ${r($).signe} ${$} = ${e}${t} ${r(n).signe} ${n} $`,et1:`${o("Étape 1 :")} $${i}${t} = ${e}${t} ${r(n).signe} ${n} ${r(-$).signe} ${-$}$`,et2:`${o("Étape 2 :")} $${i}${t} ${r(-e).signe} ${-e}${t} = ${n} ${r(-$).signe} ${-$}$`,et3:`${o("Étape 3 :")} $${i-e}${t} = ${n} ${r(-$).signe} ${-$}$`,et4:`${o("Étape 4 :")} $${t} = ${n} ${r(-$).signe} ${-$} - ${L(i-e)} $`,et_fin:`${o("Étape 5 :")} $${t} = ${n-$-i+e}$`,err:`L'erreur se situe à l'étape 4.
            <br>${p.prenom} soustrait le coefficient de ${t} au lieu de diviser par ce coefficient.
            <br>Or $${i-e}${t}$ représente la multiplication $${i-e}\\times ${t}$, et l'opération inverse de la multiplication c'est la division et non la soustraction.
            <br>Ici il faut diviser les deux membres par $${i-e}$.`,eq_corr:`${o("Équation d'origine : ")} $${i}${t} ${r($).signe} ${$} = ${e}${t} ${r(n).signe} ${n} $`,eq_corr_et1:`${o("Étape 1 :")} $${s(r(e).operation)}$ $${s(r(e).chgt_signe)}$${m(`$\\boldsymbol{${t}}$`)} aux deux membres
          <br> $${i}${t} ${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)} $${r($).signe}\\,${$} = ${n} ${r(e).signe} ${e}${t}\\,${s(r(-e).signe)}\\,${s(-e)}$${m(`$\\boldsymbol{${t}}$`)}
          <br>${o("Étape 2 : ")} On réduit.
          <br>$${i-e}${t} ${r($).signe} ${$} = ${n}$`,eq_corr_et2:`${o("Étape 3 :")} $${s(r($).operation)}$ $${s(r($).chgt_signe)}$ aux deux membres
          <br> $${i-e}${t} ${r($).signe} ${$}\\,${s(r(-$).signe)}\\,${s(-$)} = ${n}\\,${s(r(-$).signe)}\\,${s(-$)}$
          <br>${o("Étape 4 : ")} Réduction à nouveau.
          <br> $${i-e}${t} = ${n-$}$`,eq_corr_et3:`${o("Étape 5 :")} $${s("\\textbf{diviser par}")}$ $${s(i-e)}$ les deux membres
          <br> $\\dfrac{${i-e}${t}}{${s(i-e)}} = \\dfrac{${n-$}}{${s(i-e)}}$
          <br>$${t} = \\dfrac{${n-$}}{${i-e}}$ ${l(n-$,i-e)}`}],q=[];for(let g=0;g<5;g++)q.push({enonce:`          ${b[g].prenom} doit résoudre l'équation suivante : ${b[g].eq}.
          <br> Voilà ce qu'${b[g].pronom} écrit :
          <br>${b[g].et1}
          <br>${b[g].et2}
          <br>${b[g].et3}
          <br>${b[g].et4}
          <br>${b[g].et_fin}
        `,question:"",correction:`
        ${b[g].err}
        <br>${o("=== Voici une proposition de résolution détaillée : ===")}
        <br>${b[g].eq_corr}
        <br>${b[g].eq_corr_et1}
        <br>${b[g].eq_corr_et2}
        <br>${b[g].eq_corr_et3}
        `});x=`${q[h[f]-1].enonce}`,y=`${q[h[f]-1].correction}`,this.listeQuestions.indexOf(x)===-1&&(this.listeQuestions[f]=x,this.listeCorrections[f]=y,f++),T++}R(this)}}export{Z as default,X as refs,U as titre,W as uuid};
