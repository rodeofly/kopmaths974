import l from"./ExerciceSimple-CWWOU0FG.js";import{a,r,e as i,v as o,m as $}from"./embellissements-BYV7mIDn.js";import{K as p}from"./Exercice-DtXhjCyI.js";import c from"decimal.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const R="Réduire une expression littérale avec des décimaux",w=!0,T="mathLive",k="17/04/2024",A="c80b3",C={"fr-fr":["can4L09"],"fr-ch":[]};class K extends l{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=p.clavierDeBaseAvecVariable}nouvelleVersion(){switch(a([1,2])){case 1:{const e=a(["x","y","a","b","n"]),t=new c(r(1,99)).div(100),s=r(1,2),n=t.mul(-1).plus(s);this.reponse=i(t.mul(-1).plus(s),2)+`${e}`,this.reponse={reponse:{value:this.reponse}},this.question=`Écrire le plus simplement possible  $${o(s)}${e}-${i(t,2)}${e}$.`,this.interactif&&(this.question+=`<br>$${o(s)}${e}-${i(t,2)}${e}=$`),this.correction="À l'aide d'une factorisation, on obtient :<br>",s===1?this.correction+=`$\\begin{aligned}
          ${e}-${i(t,2)}${e}&=1${e}-${i(t,2)}${e}\\\\
          &=(${s}-${i(t,2)})${e}\\\\
          &=${$(`${i(n,2)}${e}`)}
          \\end{aligned}$`:this.correction+=`$\\begin{aligned}
          ${s}${e}-${i(t,2)}${e}  &=(${s}-${i(t,2)})${e}\\\\        
          &=${$(`${i(n,2)}${e}`)}
          \\end{aligned}$`}break;case 2:{const e=a(["x","y","a","b","n"]),t=new c(r(1,99)).div(100),s=r(1,2),n=t.sub(s);this.reponse=i(t.sub(s),2)+`${e}`,this.reponse={reponse:{value:this.reponse}},this.question=`Écrire le plus simplement possible  $${i(t,2)}${e}-${o(s)}${e}$.`,this.interactif&&(this.question+=`<br>$${i(t,2)}${e}-${o(s)}${e}=$`),this.correction="À l'aide d'une factorisation, on obtient :<br>",s===1?this.correction+=`$\\begin{aligned}
          ${i(t,2)}${e}-${e}&=${i(t,2)}${e}-1${e}\\\\
      &=(${i(t,2)}-1)${e}\\\\
      &=${$(`${i(n,2)}${e}`)}
      \\end{aligned}$`:this.correction+=`$\\begin{aligned}
          ${i(t,2)}${e}-${o(s)}${e}  &=(${i(t,2)}-${s})${e}\\\\        
      &=${$(`${i(n,2)}${e}`)}
      \\end{aligned}$`}break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{k as dateDePublication,K as default,w as interactifReady,T as interactifType,C as refs,R as titre,A as uuid};
