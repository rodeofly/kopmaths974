import{af as F,r as o,F as m,m as r,e as c,y as C,l as I}from"./embellissements-BYV7mIDn.js";import{E as H}from"./Exercice-DtXhjCyI.js";import p from"decimal.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const B="Homothétie - Rapport",J="27/11/2022",K="1ebf7",W={"fr-fr":["3G11-1"],"fr-ch":["11ES3-4"]};class X extends H{constructor(){super(),this.nbQuestions=1,this.consigne="Compléter le tableau ci-dessous en cochant les bonnes cases."}nouvelleVersion(){const u=F([1],this.nbQuestions);this.nbQuestions>1&&(this.consigne="Compléter les tableaux ci-dessous en cochant les bonnes cases.");for(let n=0,s,a,d=0;n<this.nbQuestions&&d<50;){s="",a="";const l=new p(o(1,9)).div(10),h=0-o(2,9),$=new p(o(11,49)).div(10),f=0-new p(o(1,9)).div(10);let t=o(2,9),i=o(2,9,[t]);if(i<t){const w=t;t=i,i=w}const g=new m(t,i),x=-1*i,R=t,b=new m(x,R),A={rapport:c(l,1),correctionReduction:r("\\times"),correctionAgrandissement:""},y={rapport:c(h,0),correctionReduction:"",correctionAgrandissement:r("\\times")},Q={rapport:c($,1),correctionReduction:"",correctionAgrandissement:r("\\times")},v={rapport:c(f,1),correctionReduction:r("\\times"),correctionAgrandissement:""},D={rapport:g.texFraction,correctionReduction:r("\\times"),correctionAgrandissement:""},E={rapport:b.texFraction,correctionReduction:"",correctionAgrandissement:r("\\times")},e=C([A,y,Q,v,D,E]);switch(u[n]){case 1:s+=`$
          \\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|c|c|}
          \\hline
          \\text{Homothétie de rapport} & ${e[0].rapport} & ${e[1].rapport} & ${e[2].rapport} & ${e[3].rapport} & ${e[4].rapport} & ${e[5].rapport} \\\\
          \\hline
          \\text{Réduction} & & & & & & \\\\
          \\hline
          \\text{Agrandissement} & & & & & & \\\\
          \\hline
          \\end{array}
          $
          `,a+=`$
          \\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|c|c|}
          \\hline
          \\text{Homothétie de rapport} & ${e[0].rapport} & ${e[1].rapport} & ${e[2].rapport} & ${e[3].rapport} & ${e[4].rapport} & ${e[5].rapport} \\\\
          \\hline
          \\text{Réduction} & ${e[0].correctionReduction} & ${e[1].correctionReduction} & ${e[2].correctionReduction} & ${e[3].correctionReduction} & ${e[4].correctionReduction} & ${e[5].correctionReduction} \\\\
          \\hline
          \\text{Agrandissement} & ${e[0].correctionAgrandissement} & ${e[1].correctionAgrandissement} & ${e[2].correctionAgrandissement} & ${e[3].correctionAgrandissement} & ${e[4].correctionAgrandissement} & ${e[5].correctionAgrandissement} \\\\
          \\hline
          \\end{array}
          $
          `;break}this.listeQuestions.indexOf(s)===-1&&(this.listeQuestions[n]=s,this.listeCorrections[n]=a,n++),d++}I(this)}}export{J as dateDePublication,X as default,W as refs,B as titre,K as uuid};
