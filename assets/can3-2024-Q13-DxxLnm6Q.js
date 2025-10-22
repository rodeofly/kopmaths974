import u from"./ExerciceSimple-CWWOU0FG.js";import{m as c,a as l,r as x,v as $,e as a,w as m,a0 as d,f as e,u as h}from"./embellissements-BYV7mIDn.js";import{K as f}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const N="Réduire une expression littérale",O=!0,P="mathLive",S="93937";class V extends u{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=f.clavierDeBaseAvecVariable,this.optionsChampTexte={texteAvant:"$=$"},this.canOfficielle=!1}nouvelleVersion(){let o;if(this.canOfficielle)o="14x^2-10x+12",this.question="Réduis : $8x^2-9x-x+6x^2+12$   ",this.correction=`$\\begin{aligned}
      8x^2-9x-x+6x^2+12&=\\underbrace{8x^2+6x^2}_{14x^2}\\underbrace{-9x-x}_{-10x}+12\\\\
      &=${c(o)}
      \\end{aligned}$
     `;else{const p=l([1,2]);if(p===1){const t=x(1,3),s=x(1,3),i=x(1,5),r=l([-1,1]),n=x(1,4,i);this.question=`Réduis :
      $${$(n)}x^2+${$(t)}x+${a(s)}+${$(i)}x^2${m(r)}x$ `,t+r===0?(o=d(0,n+i,0,s,"x"),this.correction=`$\\begin{aligned}
          ${$(n)}x^2+${$(t)}x+${a(s,0)}+${$(i)}x^2+x&=(${n} + ${i})x^2+(${t}${e(r)})x+${a(s,0)}\\\\
          &=${c(o)}
          \\end{aligned}$`):(o=d(0,n+i,t+r,s,"x"),this.correction=`$\\begin{aligned}
          ${$(n)}x^2+${$(t)}x+${a(s,0)}+${$(i)}x^2+x&=(${n} + ${i})x^2+(${t}${e(r)})x+${a(s,0)}\\\\
          &=${c(o)}
          \\end{aligned}$`)}if(p===2){const t=x(-5,-2),s=x(1,5),i=x(-5,-2),r=l([-1,1]),n=x(-5,5,0);this.question=`Réduis : 
      $${$(n)}x^2${e(t)}x${e(s)}${e(i)}x^2${m(r)}x$ `,n+i===0?(o=h(t+r,s,"x"),this.correction=`$\\begin{aligned}
          ${$(n)}x^2${e(t)}x${e(s)}${e(i)}x^2+x&=
        (${n}${e(i)})x^2+(${t}${e(r)})x${e(s)}\\\\
        &=${c(o)}
        \\end{aligned}$`):(o=d(0,n+i,t+r,s,"x"),this.correction=`$\\begin{aligned}
          ${$(n)}x^2${e(t)}x${e(s)}${e(i)}x^2+x&=
        (${n}${e(i)})x^2+(${t}${e(r)})x${e(s)}\\\\
        &=${c(o)}
          \\end{aligned}$`)}}this.reponse={reponse:{value:o}},this.canEnonce=this.question,this.canReponseACompleter="",this.interactif||(this.question+=".")}}export{V as default,O as interactifReady,P as interactifType,N as titre,S as uuid};
