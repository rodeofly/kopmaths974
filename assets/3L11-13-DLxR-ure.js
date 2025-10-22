import{max as F,min as C}from"mathjs";import{P as $}from"./PolynomePlusieursVariables-DEsXl1Ev.js";import{y as N,af as P,bo as b,a as S,r,F as x,an as n,m as c,l as E}from"./embellissements-BYV7mIDn.js";import{E as Q}from"./Exercice-DtXhjCyI.js";import"./MonomePlusieursVariables-DHq3iA-O.js";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const H="Additionner et soustraire des polynômes",K="19/08/2024",O="4b495",U={"fr-fr":["3L11-13"],"fr-ch":["11FA1-9","1mCL1-12"]};class W extends Q{constructor(){super(),this.consigne=this.nbQuestions>1?"Réduire les expressions suivantes.":"Réduire l'expression suivante.",this.besoinFormulaireNumerique=["Type de calcul",4,`Addition
Soustraction
 Avec un signe devant la première parenthèse
Mélange`],this.besoinFormulaire2Numerique=["Coefficients",3,`Entiers 
2 : Fractionnaires 
3 : Mélange`],this.besoinFormulaire3Numerique=["Degré maximum (au moins égal au degré minimum)",5,`1
2
3
4
5`],this.besoinFormulaire4Numerique=["Nombre de variables différentes",5,`1
2
3
4
5`],this.besoinFormulaire5Numerique=["Nombre de termes maximal dans un polynôme",5,`2
3
4
5
6`],this.sup=4,this.sup2=1,this.sup3=3,this.sup4=3,this.sup5=2,this.listeAvecNumerotation=!1}nouvelleVersion(){let a;this.sup===1?a=["addition"]:this.sup===2?a=["soustraction"]:this.sup===3?a=["signe"]:a=N(["addition","soustraction","signe"]);const p=0,y=P(a,this.nbQuestions);for(let t=0,d=0;t<this.nbQuestions&&d<50;){let o,m;const h=F(this.sup3,0),g=b(["x","y","z","r","s","t"],this.sup4),v=["entier","fractionnaire"];let u=[];this.sup2===1?u=["entier"]:this.sup2===2?u=["fraction"]:u=v;const e=$.createRandomPolynome(p,h,this.sup5+1,S(u),g),i=$.createRandomPolynome(p,h,this.sup5+1,S(u),g,b(e.monomes,r(C(1,this.sup5),this.sup5+1)));let f=!0,l=1;for(let s=0;s<e.monomes.length;s++)e.monomes[s].coefficient.den!==1&&(f?(l=e.monomes[s].coefficient.den,f=!1):e.monomes[s].coefficient=new x(r(-10,10,[0]),l*r(-2,2,[0])));for(let s=0;s<i.monomes.length;s++)i.monomes[s].coefficient.den!==1&&(f?(l=i.monomes[s].coefficient.den,f=!1):i.monomes[s].coefficient=new x(r(-10,10,[0]),l*r(-2,2,[0])));switch(y[t]){case"addition":{o=`$${n(t+1)}=\\left(${e.toString()}\\right)+\\left(${i.toString()}\\right)$`,m=`$${n(t+1)}=${e.somme(i).toString()}=${c(e.somme(i).reduire().toString())}$`;break}case"soustraction":{o=`$${n(t+1)}=\\left(${e.toString()}\\right)-\\left(${i.toString()}\\right)$`,m=`$${n(t+1)}=${e.difference(i).toString()}=${c(e.difference(i).reduire().toString())}$`;break}case"signe":{(r(0,1)===0?"-":"+")==="-"?(o=`$${n(t+1)}=-\\left(${e.toString()}\\right)-\\left(${i.toString()}\\right)$`,m=`$${n(t+1)}=${e.oppose().difference(i).toString()}=${c(e.oppose().difference(i).reduire().toString())}$`):(o=`$${n(t+1)}=-\\left(${e.toString()}\\right)+\\left(${i.toString()}\\right)$`,m=`$${n(t+1)}=${e.oppose().somme(i).toString()}=${c(e.oppose().somme(i).reduire().toString())}$`);break}}this.questionJamaisPosee(t,o)&&(this.listeQuestions[t]=o,this.listeCorrections[t]=m,t++),d++}E(this)}}export{K as dateDePublication,W as default,U as refs,H as titre,O as uuid};
