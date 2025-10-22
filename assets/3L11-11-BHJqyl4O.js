import{max as C}from"mathjs";import{h as $}from"./gestionInteractif-DujZpSu8.js";import{a as D}from"./questionMathLive-DdRvWqlN.js";import{M as n}from"./MonomePlusieursVariables-DHq3iA-O.js";import{P as d}from"./PolynomePlusieursVariables-DEsXl1Ev.js";import{af as N,bo as Q,r as s,a as r,y as q,an as y,m as E,l as A,F as S}from"./embellissements-BYV7mIDn.js";import{E as w}from"./Exercice-DtXhjCyI.js";import"decimal.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./index-BUDQz6-w.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"katex";import"earcut";import"roughjs";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";const pe="Additionner et soustraire des monômes",le="19/08/2024",ce=!0,fe="mathLive",he="2f983",de={"fr-fr":["3L11-11"],"fr-ch":["11FA1-7","1mCL1-10"]};class be extends w{constructor(){super(),this.consigne=this.nbQuestions>1?"Réduire les expressions suivantes.":"Réduire l'expression suivante.",this.besoinFormulaireNumerique=["Coefficients",3,`Entiers 
2 : Fractionnaires 
3 : Mélange`],this.besoinFormulaire2Numerique=["Degré minimum",6,`0
1
2
3
4
5`],this.besoinFormulaire3Numerique=["Degré maximum (au moins égal au degré minimum)",5,`1
2
3
4
5`],this.besoinFormulaire4Numerique=["Nombre de variables différentes",5,`1
2
3
4
5`],this.besoinFormulaire5Numerique=["Nombre de termes",5,`2
3
4
5
6`],this.sup=1,this.sup2=3,this.sup3=3,this.sup4=3,this.sup5=2,this.listeAvecNumerotation=!1}nouvelleVersion(){const F=N([1],this.nbQuestions);for(let i=0,b=0;i<this.nbQuestions&&b<50;){let l,p;const a=this.sup2-1,m=C(this.sup3,this.sup2-1),u=Q(["x","y","z","a","b","c","k"],this.sup4),R=["entier","fractionnaire"];let t=[],c=d.createRandomPolynome(1,1,1,"entier",["x"]);switch(l="",p="",F[i]){case 1:{this.sup===1?t=["entier"]:this.sup===2?t=["fraction"]:t=R;const x=n.createRandomMonome(s(a,m),r(t),u);let f;const h=s(0,3);h===0||h===1||h===2?f=n.createMonomeFromPartieLitterale(r(t),x.partieLitterale):f=n.createRandomMonome(s(a,m),r(t),u);let e=[x,f];if(this.sup5+1>3){e.push(n.createRandomMonome(s(a,m),r(t),u));const o=s(0,3);o===0||o===1||o===2?e.push(n.createMonomeFromPartieLitterale(r(t),e[2].partieLitterale)):e.push(n.createRandomMonome(s(a,m),r(t),u));for(let v=0;v<this.sup5+1-4;v++)e.push(n.createRandomMonome(s(a,m),r(t),u))}else this.sup5+1===3&&e.push(n.createRandomMonome(s(a,m),r(t),u));e=q(e);let M=!0,g=1;for(let o=0;o<e.length;o++)e[o].coefficient.den!==1&&(M?(g=e[o].coefficient.den,M=!1):e[o].coefficient=new S(s(-10,10,[0]),g*s(-2,2,[0])));const P=new d(e);c=d.PolynomeReduit(e),l=`$${y(i+1)}=${P.toString()}$`+D(this,i,"",{texteAvant:"$=$"}),p=`$${y(i+1)}=${E(c.toString())}$`}}const L=p.split("=")[1];this.questionJamaisPosee(i,L)&&($(this,i,{reponse:{value:c.toString()}}),this.listeQuestions[i]=l,this.listeCorrections[i]=p,i++),b++}A(this)}}export{le as dateDePublication,be as default,ce as interactifReady,fe as interactifType,de as refs,pe as titre,he as uuid};
