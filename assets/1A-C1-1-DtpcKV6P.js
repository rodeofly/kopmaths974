import{e as r,m as l,r as t}from"./embellissements-BYV7mIDn.js";import g from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const N="6d860",O={"fr-fr":["1A-C1-1"],"fr-ch":[]},P=!0,Q="qcm",j="true",z="qcmMono",B="Comparer deux nombres",F="02/09/2025";class G extends g{appliquerLesValeurs(d,f,p,$,a,e,c,s,n){const i=r(-f,4),o=r(-p,4),u=`$(${i})^2>(${o})^2$ est fausse car la fonction carré est strictement décroissante sur $]-\\infty\\,;\\,0]$, 
        on a :  $(${i})^2 < (${o})^2$ car $${i} > ${o}$.<br>`,m=`$\\dfrac{1}{${r($,3)}}<\\dfrac{1}{${r(a,3)}}$ est fausse car la fonction inverse est strictement décroissante sur $]0\\,;\\,+\\infty[$, donc $\\dfrac{1}{${r($,3)}} > \\dfrac{1}{${r(a,3)}}$ car $${r($,3)}<${r(a,3)}$.<br>`,b=`$${r(s,3)}^2>${r(n,3)}^2$ est fausse car la fonction carré est strictement croissante sur $[0\\,;\\,+\\infty[$, donc $${r(s,3)}^2<${r(n,3)}^2$ car $${r(s,3)}<${r(n,3)}$.<br>`,h=`$\\left(\\dfrac{1}{${r(c,4)}}\\right)^2>\\left(\\dfrac{1}{${r(e,4)}}\\right)^2$ est fausse car la fonction carré est strictement croissante sur $]0\\,;\\,+\\infty[$, donc $\\left(\\dfrac{1}{${r(c,4)}}\\right)^2<\\left(\\dfrac{1}{${r(e,4)}}\\right)^2$ car $\\dfrac{1}{${r(c,4)}} < \\dfrac{1}{${r(e,4)}}$.<br>`;switch(this.enonce="La seule inégalité vraie est : ",d){case 1:this.correction=`La seule inégalité vraie est : $${l(`(${i})^2 < (${o})^2`)}$.<br>
        En effet, la fonction carré étant strictement décroissante sur $]-\\infty\\,;\\,0]$, 
        on a : $(${i})^2 < (${o})^2$ car $${i} > ${o}$.<br><br>
        Concernant les autres propositions :<br>
        ${m}
        ${b}
        ${h}`,this.reponses=[`$(${i})^2<(${o})^2$`,`$\\dfrac{1}{${r($,3)}} < \\dfrac{1}{${r(a,3)}}$`,`$${r(s,3)}^2>${r(n,3)}^2$`,`$\\left(\\dfrac{1}{${r(c,4)}}\\right)^2>\\left(\\dfrac{1}{${r(e,4)}}\\right)^2$`];break;case 2:this.correction=`La seule inégalité vraie est : $${l(`\\dfrac{1}{${r($,3)}}>\\dfrac{1}{${r(a,3)}}`)}$.<br>
        En effet, la fonction inverse étant strictement décroissante sur $]0\\,;\\,+\\infty[$, donc $\\dfrac{1}{${r($,3)}} > \\dfrac{1}{${r(a,3)}}$ car $${r($,3)}<${r(a,3)}$.<br><br>
        Concernant les autres propositions :<br>
        ${u}
        ${b}
        ${h}`,this.reponses=[`$\\dfrac{1}{${r($,3)}} > \\dfrac{1}{${r(a,3)}}$`,`$(${i})^2>(${o})^2$`,`$${r(s,3)}^2>${r(n,3)}^2$`,`$\\left(\\dfrac{1}{${r(c,4)}}\\right)^2>\\left(\\dfrac{1}{${r(e,4)}}\\right)^2$`];break;case 3:this.correction=`La seule inégalité vraie est : $${l(`${r(s,3)}^2<${r(n,3)}^2`)}$.<br>
        En effet, la fonction carré étant strictement croissante sur $[0\\,;\\,+\\infty[$, 
        on a : $${r(s,3)}^2<${r(n,3)}^2$ car $${r(s,3)}<${r(n,3)}$.<br><br>
        Concernant les autres propositions :<br>
        ${u}
        ${m}
        ${h}`,this.reponses=[`$${r(s,3)}^2<${r(n,3)}^2$`,`$(${i})^2>(${o})^2$`,`$\\dfrac{1}{${r($,3)}} < \\dfrac{1}{${r(a,3)}}$`,`$\\left(\\dfrac{1}{${r(c,4)}}\\right)^2>\\left(\\dfrac{1}{${r(e,4)}}\\right)^2$`];break;case 4:default:this.correction=`La seule inégalité vraie est : $${l(`\\left(\\dfrac{1}{${r(c,4)}}\\right)^2<\\left(\\dfrac{1}{${r(e,4)}}\\right)^2`)}$.<br>
        En effet, la fonction carré étant strictement croissante sur $[0\\,;\\,+\\infty[$, 
        on a : $\\left(\\dfrac{1}{${r(c,4)}}\\right)^2<\\left(\\dfrac{1}{${r(e,4)}}\\right)^2$ car $\\dfrac{1}{${r(c,4)}} < \\dfrac{1}{${r(e,4)}}$.<br><br>
        Concernant les autres propositions :<br>
        ${u}
        ${m}
        ${b}`,this.reponses=[`$\\left(\\dfrac{1}{${r(c,4)}}\\right)^2<\\left(\\dfrac{1}{${r(e,4)}}\\right)^2$`,`$${r(s,3)}^2>${r(n,3)}^2$`,`$\\dfrac{1}{${r($,3)}} < \\dfrac{1}{${r(a,3)}}$`,`$(${i})^2>(${o})^2$`];break}}versionOriginale=()=>{this.appliquerLesValeurs(1,1.075,1.076,2.03,2.032,3,4,1.5,2)};versionAleatoire=()=>{const d=t(1,4),f=t(1,5)+t(1,9)/10+t(1,9)/100,p=f+t(1,9)/100,$=t(1,5)+t(1,9)/10+t(1,9)/100,a=$+t(1,9)/10+t(1,9)/100,e=t(1,5)+t(1,9)/10+t(1,9)/100,c=e+t(1,9)/10+t(1,9)/100,s=t(1,5)+t(1,9)/10+t(1,9)/100,n=s+t(1,9)/10+t(1,9)/100;this.appliquerLesValeurs(d,f,p,$,a,e,c,s,n)};constructor(){super(),this.versionAleatoire(),this.spacing=1.5,this.spacingCorr=1.5}}export{j as amcReady,z as amcType,F as dateDePublication,G as default,P as interactifReady,Q as interactifType,O as refs,B as titre,N as uuid};
