import{M as c}from"./MonomePlusieursVariables-DHq3iA-O.js";import{af as v,bo as q,r as p,a as h,an as b,m as D,l as C}from"./embellissements-BYV7mIDn.js";import{E as N}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const j="Multiplier des monômes",k="19/08/2024",B="62111",G={"fr-fr":["3L11-12"],"fr-ch":["11FA1-8","1mCL1-11"]};class H extends N{constructor(){super(),this.consigne=this.nbQuestions>1?"Réduire les expressions suivantes.":"Réduire l'expression suivante.",this.besoinFormulaireNumerique=["Coefficients",3,`Entiers 
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
5`],this.besoinFormulaire5Numerique=["Nombre de termes",2,`2
3`],this.sup=1,this.sup2=3,this.sup3=3,this.sup4=3,this.sup5=1,this.listeAvecNumerotation=!1}nouvelleVersion(){const d=v([1],this.nbQuestions);for(let i=0,f=0;i<this.nbQuestions&&f<50;){let o,n;const r=this.sup2-1,a=Math.max(this.sup3,this.sup2-1),u=q(["x","y","z","r","s","t"],this.sup4),g=["entier","fractionnaire"];let t=[];switch(d[i]){case 1:{this.sup===1?t=["entier"]:this.sup===2?t=["fraction"]:t=g,o="",n="";const s=[],x=c.createRandomMonome(p(r,a),h(t),u),M=c.createRandomMonome(p(r,a),h(t),u);if(s.push(x),s.push(M),this.sup5>1){const e=c.createRandomMonome(p(r,a),h(t),u);s.push(e)}let m=s[0];for(let e=1;e<s.length;e++)m=m.produit(s[e]);let l="";for(let e=0;e<s.length;e++)l+=s[e].toStringAvecParentheses(),e<s.length-1&&(l+=" \\times ");o=`$${b(i+1)}=${l}$`,n=`$${b(i+1)}=${D(m.toString())}$`}this.questionJamaisPosee(i,n)&&(this.listeQuestions[i]=o,this.listeCorrections[i]=n,i++),f++}C(this)}}}export{k as dateDePublication,H as default,G as refs,j as titre,B as uuid};
