import{K as q}from"./Exercice-DtXhjCyI.js";import{r as b,d as s,a as M,e as u,m as E,_ as f,bG as h}from"./embellissements-BYV7mIDn.js";import{b as v}from"./colors-bl7PrqSM.js";import x from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const X="Multiplier ou diviser par 0,1 ou 0,01 ou 0,001",j=!0,z="mathLive",B=!0,F="AMCNum",I="19/02/2023",S="15/09/2021",V="53034",_={"fr-fr":["can6C24","6N2B-flash1"],"fr-ch":["NR"]};class k extends x{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.versionQcmDisponible=!0,this.formatChampTexte=q.clavierNumbers,this.besoinFormulaireNumerique=["Multiplier ou diviser",3,`1 : Multiplier
2 : Diviser
3 : Mélange`],this.sup=3}nouvelleVersion(){const r=b(1,9),t=b(1,9,r),n=b(1,9,t),e=s(r*100+t*10+n);let d=["multiplier","diviser"];this.sup===1?d=["multiplier"]:this.sup===2&&(d=["diviser"]);const $=M(d),i=M([.1,.01,.001]);this.reponse=s(e*i),this.distracteurs=[s(e/i),s(e*10*i),s(e*10/i)];let o="\\times",p="\\div",l="multipli",a="divis",m="multipliant",c="petit";$==="diviser"&&(this.reponse=s(e/i),this.distracteurs=[s(e*i),s(e*10*i),s(e*10/i)],o="\\div",l="divis",a="multipli",m="divisant",p="\\times",c="grand"),this.question=`Calculer $${e}${o} ${u(i)}$.`,this.versionQcm&&(this.question=`$${e}${o} ${u(i)} =$`),this.correction=`$${e}${o} ${u(i)}=${E(u(this.reponse))}$<br>`,i===.1?this.correction+=f(`<br> Mentalement : <br>
  ${h(l)}er par $0,1$ revient à ${a}er par $10$. <br>
  Quand on ${a}e par $10$, le chiffre des unités (chiffre souligné) dans le nombre  $${r}${t}\\underline{${n}}$
  devient le chiffre des ${$==="multiplier"?"dixièmes":"dizaines"}. On obtient alors :<br>
  $${e}${o} ${u(i)}=${e}${p} 10=${$==="multiplier"?`${r}${t},\\underline{${n}}`:`${r}\\,${t}\\underline{${n}}0`}$.<br>
  Remarque : En ${m} un nombre par $0,1$, le résultat doit être plus ${c} que le nombre ${l}é.
     `,v):i===.01?this.correction+=f(`<br> Mentalement : <br>
  ${h(l)}er par $0,01$ revient à ${a}er par $100$. <br>
  Quand on ${a}e par $100$, le chiffre des unités (chiffre souligné) dans le nombre  $${r}${t}\\underline{${n}}$
  devient le chiffre des ${$==="multiplier"?"centièmes":"centaines"}. On obtient alors :<br>
  $${e}${o} ${u(i)}=${e}${p} 100=${$==="multiplier"?`${r},${t}\\underline{${n}}`:`${r}${t}\\,\\underline{${n}}00`}$.<br>
  Remarque : En ${m} un nombre par $0,01$, le résultat doit être plus ${c} que le nombre ${l}é.
     `,v):this.correction+=f(`<br> Mentalement : <br>
  ${h(l)}er par $0,001$ revient à ${a}er par $1000$. <br>
  Quand on ${a}e par $1000$, le chiffre des unités (chiffre souligné) dans le nombre  $${r}${t}\\underline{${n}}$
  devient le chiffre des ${$==="multiplier"?"millièmes":"unités de mille"}. On obtient alors :<br>
  $${e}${o} ${u(i)}=${e}${p} 1000=${$==="multiplier"?`0,${r}${t}\\underline{${n}}`:`${r}${t}\\underline{${n}}\\,000`}$.<br>
  Remarque : En ${m} un nombre par $0,001$, le résultat doit être plus ${c} que le nombre ${l}é.
     `,v),this.canEnonce=this.question,this.canReponseACompleter=""}}export{B as amcReady,F as amcType,I as dateDeModifImportante,S as dateDePublication,k as default,j as interactifReady,z as interactifType,_ as refs,X as titre,V as uuid};
