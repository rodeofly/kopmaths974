import{af as N,r as d,a as C,a0 as m,u as h,Y as b,w as p,f as l,h as f,l as P}from"./embellissements-BYV7mIDn.js";import{E as Q}from"./Exercice-DtXhjCyI.js";import{p as q}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const v="22/05/2023",J="Montrer qu'un nombre est ou n'est pas solution d'une inéquation",L=!0,V="qcm",Y=!0,j="qcmMono",z="2844c",F={"fr-fr":["2N60-5","BP2RES20"],"fr-ch":["2mIneq-7"]};class G extends Q{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){const O=N([1,2,3],this.nbQuestions);for(let o=0,x=0;o<this.nbQuestions&&x<50;){const g=O[o],t=d(-6,6),i=d(-3,3,0),e=d(-10,10,0),s=d(-10,10,0),a=d(-5,5,[0,1]),u=d(-10,10,0),n=C([i*t*t+e*t+s,i*t*t+e*t+s+1,i*t*t+e*t+s-1,i*t*t+e*t+s+2,i*t*t+e*t+s-2]);let $="",r="",c;switch(g){case 1:$=` $${t}$ est-il solution de l'inéquation $${m(0,i,e,s)} < ${n}$ ?`,r=`Pour $x=${t}$, on obtient :<br>`,r+=`
          $\\begin{aligned}
          ${m(0,i,e,s)}&=${i===1?"":`${i}\\times`}${b(t)}^2${f(e)===1?`${p(e)}`:`${l(e)}\\times`}${b(t)}${l(s)}\\\\
          &=${i*t*t+e*t+s}
         \\end{aligned}$`,i*t*t+e*t+s>n&&(r+=`<br>Or  $${i*t*t+e*t+s} >${n}$<br>
          On en déduit que $${t}$ n'est pas solution de l'inéquation.`),i*t*t+e*t+s<n&&(r+=`<br> Or  $${i*t*t+e*t+s}<${n}$<br>
          On en déduit que $${t}$ est  solution de l'inéquation.`),i*t*t+e*t+s===n&&(r+=`<br>$${n}$ n'est pas strictement inférieur à $${n}$.<br>
          On en déduit que $${t}$ n'est pas solution de l'inéquation.`),i*t*t+e*t+s<n?this.autoCorrection[o]={enonce:$,propositions:[{texte:"OUI",statut:!0},{texte:"NON",statut:!1}]}:this.autoCorrection[o]={enonce:$,propositions:[{texte:"NON",statut:!0},{texte:"OUI",statut:!1}]},c=q(this,o),this.interactif&&($+=c.texte);break;case 2:$=` $${t}$ est-il solution de l'inéquation $${m(0,i,e,s)} \\geqslant ${n}$ ?`,r=` Pour $x=${t}$, on obtient :<br>`,r+=` $\\begin{aligned}
          ${m(0,i,e,s)}&=${i===1?"":`${i}\\times`}${b(t)}^2${f(e)===1?`${p(e)}`:`${l(e)}\\times`}${b(t)}${l(s)}\\\\
          &=${i*t*t+e*t+s}
          \\end{aligned}$
          `,i*t*t+e*t+s>n||i*t*t+e*t+s===n?r+=`<br> Or $${i*t*t+e*t+s}\\geqslant ${n}$.<br>
          On en déduit que $${t}$ est solution de l'inéquation.`:r+=`<br>Or $${i*t*t+e*t+s}< ${n}$.<br>
          On en déduit que $${t}$ n'est pas solution de l'inéquation.`,i*t*t+e*t+s>n||i*t*t+e*t+s===n?this.autoCorrection[o]={enonce:$,propositions:[{texte:"OUI",statut:!0},{texte:"NON",statut:!1}]}:this.autoCorrection[o]={enonce:$,propositions:[{texte:"NON",statut:!0},{texte:"OUI",statut:!1}]},c=q(this,o),this.interactif&&($+=c.texte);break;case 3:$=` $${t}$ est-il solution de l'inéquation $${m(0,i,e,s)} \\leqslant ${h(a,u)}$ ?
          `,r=`
          $\\bullet$  Pour $x=${t}$, on obtient :<br>$\\begin{aligned}
          ${m(0,i,e,s)}&=${i===1?"":`${i}\\times`}${b(t)}^2${f(e)===1?`${p(e)}`:`${l(e)}\\times`}${b(t)}${l(s)}\\\\
          &=${i*t*t+e*t+s}
          \\end{aligned}$<br>
          $\\bullet$ Pour $x=${t}$, on obtient :<br>$\\begin{aligned}
          ${h(a,u)}&=${a}\\times ${t}${l(u)}\\\\
          &=${a*t+u}
          \\end{aligned}$`,i*t*t+e*t+s<a*t+u||i*t*t+e*t+s===a*t+u?r+=`<br>Comme $${i*t*t+e*t+s}\\leqslant ${a*t+u}$, le nombre $${t}$ est solution de l'inéquation.`:r+=`<br>Comme $${i*t*t+e*t+s} > ${a*t+u}$, le nombre $${t}$ n'est pas solution de l'inéquation.`,i*t*t+e*t+s<a*t+u||i*t*t+e*t+s===a*t+u?this.autoCorrection[o]={enonce:$,propositions:[{texte:"OUI",statut:!0},{texte:"NON",statut:!1}]}:this.autoCorrection[o]={enonce:$,propositions:[{texte:"NON",statut:!0},{texte:"OUI",statut:!1}]},c=q(this,o),this.interactif&&($+=c.texte);break}this.questionJamaisPosee(o,i,e,s,n)&&(this.listeQuestions[o]=$,this.listeCorrections[o]=r,o++),x++}P(this)}}export{Y as amcReady,j as amcType,v as dateDePublication,G as default,L as interactifReady,V as interactifType,F as refs,J as titre,z as uuid};
