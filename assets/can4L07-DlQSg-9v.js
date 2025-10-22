import{r,a as m,v as t,e as s,Y as p,m as l,a0 as b,u,w as d,f as o,z as g}from"./embellissements-BYV7mIDn.js";import h from"./ExerciceSimple-CWWOU0FG.js";import{K as f}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const B="Réduire une expression littérale",K=!0,L="mathLive",N="23/02/2022",O="97664",z={"fr-fr":["can4L07"],"fr-ch":[]};class Q extends h{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=f.clavierDeBaseAvecX,this.optionsChampTexte={texteAvant:"<br>"}}nouvelleVersion(){let $,e,i,a,n,x,c;switch(r(1,3)){case 1:a=m([1,2,3]),a===1?($=r(1,10),e=r(1,10),i=r(1,10),this.question=`Écrire le plus simplement possible : <br>  
          $${t($)}x+${t(e)}x+${s(i)}$.`,this.correction=`En regroupant les termes en $x$, on obtient : <br>
        $\\begin{aligned}
        ${t($)}x+${t(e)}x+${s(i)}&=(${$}+${e})x+${i}\\\\
        &=${l(`${s($+e)}x+${s(i)}`)}
        \\end{aligned}$`):a===2?($=r(1,5),e=r(1,5),i=r(1,5),this.question=`Écrire le plus simplement possible : <br>
          $${t(e)}x+${s(i)}+${t($)}x$.`,this.correction=`En regroupant les termes en $x$, on obtient : <br>
        $\\begin{aligned}
        ${t(e)}x+${s(i)}+${t($)}x&=(${$}+${e})x+${i}\\\\
        &=${l(`${s($+e)}x+${s(i)}`)}
        \\end{aligned}$`):($=r(-4,-1),e=r(-4,-1),i=r(1,10),this.question=`Écrire le plus simplement possible : <br>
          $${t(e)}x+${s(i)}${t($)}x$.`,this.correction=`En regroupant les termes en $x$, on obtient : <br>
          $\\begin{aligned}
          ${t(e)}x+${s(i)}${t($)}x&=(${$}${e})x+${i}\\\\
          &=${l(`${s($+e)}x+${s(i)}`)}
          \\end{aligned}$`),c=`${u($+e,i,"x")}`;break;case 2:a=m([1,2]),a===1?(e=r(1,3),i=r(1,3),n=r(1,5),x=m([-1,1]),$=r(1,4,n),this.question=`Écrire le plus simplement possible : <br>
          $${t($)}x^2+${t(e)}x+${s(i)}+${t(n)}x^2${d(x)}x$.`,e+x===0?(this.correction=`En regroupant les termes en $x$ et les termes en $x^2$, on obtient : <br>
            $\\begin{aligned}
            ${t($)}x^2+${t(e)}x+${s(i)}+${t(n)}x^2+x&=(${$} + ${n})x^2+(${e}${o(x)})x+${s(i)}\\\\
            &=${l(`${t($+n)}x^2+${s(i)}`)}
            \\end{aligned}$`,c=`${s($+n)}x^2+${s(i)}`):this.correction=`En regroupant les termes en $x$ et les termes en $x^2$, on obtient : <br>
            $\\begin{aligned}
            ${t($)}x^2+${t(e)}x+${s(i)}+${t(n)}x^2+x&=(${$} + ${n})x^2+(${e}${o(x)})x+${s(i)}\\\\
            &=${l(`${t($+n)}x^2+${t(e+x)}x+${s(i)}`)}
            \\end{aligned}$`):(e=r(-5,-2),i=r(1,5),n=r(-5,-2),x=m([-1,1]),$=r(-5,5,0),this.question=`Écrire le plus simplement possible : <br>
          $${t($)}x^2${o(e)}x${o(i)}${o(n)}x^2${d(x)}x$.`,$+n===0?(this.correction=`En regroupant les termes en $x$ et les termes en $x^2$, on obtient : <br>
            $\\begin{aligned}
            ${t($)}x^2${o(e)}x${o(i)}${o(n)}x^2+x&=
            (${$}${o(n)})x^2+(${e}${o(x)})x${o(i)}\\\\
            &=${l(`${o(e+x)}x+${s(i)}`)}\\end{aligned}$`,c=`${t(e+x)}x+${s(i)}`):this.correction=`En regroupant les termes en $x$ et les termes en $x^2$, on obtient : <br>
            $\\begin{aligned}
            ${t($)}x^2${o(e)}x${o(i)}${o(n)}x^2+x&=(${$}${o(n)})x^2+(${e}${o(x)})x${o(i)}\\\\
            &=${l(`${t($+n)}x^2${g(e+x)}x+${s(i)}`)}
            \\end{aligned}$`),c=`${b(0,$+n,e+x,i,"x")}`;break;case 3:default:a=m([1,2]),a===1&&($=r(-9,9,0),e=r(-9,9,[0,-1,1]),e>0?this.question=`Écrire le plus simplement possible : <br> 
            $${t($)}x\\times${e}x$.`:this.question=`Écrire le plus simplement possible : <br>$${t($)}x\\times(${e}x)$.`,e>0?this.correction=`On a : <br>
            $\\begin{aligned}
            ${t($)}x\\times${e}x&=(${s($)}\\times  ${p(e)})x^2\\\\
            &=${l(`${s($*e)}x^2`)}
            \\end{aligned}$`:this.correction=`On a : <br>
              $\\begin{aligned}
              ${t($)}x\\times (${e}x)&=(${s($)}\\times  ${p(e)})x^2\\\\
              &=${l(`${s($*e)}x^2`)}\\end{aligned}$`,c=`${b(0,$*e,0,0,"x")}`),a===2&&($=r(-9,9,0),e=r(-9,9,[0,-1,1]),this.question=`Écrire le plus simplement possible : <br>
          $${t($)}x\\times${p(e)}$.`,this.correction=`$${t($)}x\\times${p(e)}=${l(`${s($*e)}x`)}$`,c=`${u($*e,0,"x")}`);break}this.reponse=c,this.canEnonce=this.question,this.canReponseACompleter=""}}export{N as dateDePublication,Q as default,K as interactifReady,L as interactifType,z as refs,B as titre,O as uuid};
