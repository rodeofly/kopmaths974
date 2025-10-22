import{E as S}from"./Exercice-DtXhjCyI.js";import{g as A,af as C,a as q,r as o,e as a,al as d,m as l,v as f,z as g,f as c,l as N}from"./embellissements-BYV7mIDn.js";import{h as b}from"./gestionInteractif-DujZpSu8.js";import{a as D}from"./questionMathLive-DdRvWqlN.js";import v from"decimal.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const ee="Calculer les termes d'une suite arithmétique ou géométrique",$e=!0,ie="mathLive",te="29/09/2024",re="3ae4a",ne={"fr-fr":["1AL11-4"],"fr-ch":[]};class se extends S{constructor(){super(),this.nbQuestions=1,this.sup="7",this.spacing=1.5,this.spacingCorr=1.5,this.correctionDetaillee=!1,this.correctionDetailleeDisponible=!0,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Suite arithmétique avec premier terme u_0","2 : Suite arithmétique avec premier terme u_1","3 : Suite arithmétique avec premier terme u_p","4 : Suite géométrique avec premier terme u_1","5 : Suite géométrique avec premier terme u_1","6 : Suite géométrique avec premier terme u_p","7 : Mélange"].join(`
`)]}nouvelleVersion(){const L=A({saisie:this.sup,min:1,max:6,melange:7,defaut:7,nbQuestions:this.nbQuestions}),h=C(L,this.nbQuestions);for(let m=0,x=0;m<this.nbQuestions&&x<50;){let _="",r="",n;const e=q(["u","v","w","t"]);let $,i,t,s,u,p;switch(h[m]){case 1:t=o(-10,10),$=o(5,15),i=o(-10,10,0),n=a(t+$*i,0),b(this,m,{reponse:{value:n}}),_=`$(${e}_n)$ est une suite arithmétique de raison $r=${i}$ et de premier terme $${e}_0=${t}$.<br>
          Calculer $${e}_{${$}}$.`,this.correctionDetaillee?r="La forme explicite d'une suite arithmétique $(u_n)$ de raison $r$ et de premier terme $u_0$ est : $u_n=u_0+n\\times r$.<br>":r="",r+=`La suite $(${e}_n)$ est arithmétique de raison $r=${i}$ et de premier terme $${e}_0=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_0+n\\times r\\\\
          ${e}_n&=${t}+n\\times ${d(i)}\\\\
           ${e}_n&=${t===0?`${f(i)}n`:`${t}${g(i)}n`}
           \\end{aligned}$
          <br>Ainsi, `,t===0?i===1||i===-1?r+=`$${e}_n=${l(n)}$.`:r+=`$${e}_{${$}}=${i}\\times ${$} =${l(n)}$.`:i===1||i===-1?r+=`$${e}_{${$}}=${t}${i===1?`${c($)}`:`${-$}`} =${l(n)}$.`:r+=`$${e}_{${$}}=${t}${c(i)}\\times ${$} =${l(n)}$.`;break;case 2:t=o(-10,10),$=o(5,15),i=o(-10,10,0),n=a(t-i+$*i,0),b(this,m,{reponse:{value:n}}),_=`$(${e}_n)$ est une suite arithmétique de raison $r=${i}$ et de premier terme $${e}_1=${t}$.<br>
          Calculer $${e}_{${$}}$.`,this.correctionDetaillee?r="La forme explicite d'une suite arithmétique $(u_n)$ de raison $r$ et de premier terme $u_1$ est : $u_n=u_1+(n-1)\\times r$.<br>":r="",r+=`
          La suite $(${e}_n)$ est arithmétique de raison $r=${i}$ et de premier terme $${e}_1=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}^*$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_1+(n-1)\\times r\\\\
          ${e}_n&=${t}+(n-1)\\times ${d(i)}\\\\
           ${e}_n&=${t-i===0?`${f(i)}n$.`:`${t-i}${g(i)}n`}
           \\end{aligned}$
          <br>   
          Ainsi, `,t-i===0?i===1||i===-1?r+=`$${e}_n=${l(n)}$.`:r+=`$${e}_{${$}}=${i}\\times ${$} =${l(n)}$.`:i===1||i===-1?r+=`$${e}_{${$}}=${t-i}${i===1?`${c($)}`:`${-$}`} =${l(n)}$.`:r+=`$${e}_{${$}}=${t-i}${c(i)}\\times ${$} =${l(n)}$.`;break;case 3:t=o(-10,10),$=o(9,15),i=o(-10,10,0),u=o(2,4),n=a(t+($-u)*i,0),b(this,m,{reponse:{value:n}}),_=`$(${e}_n)$ est une suite arithmétique de raison $r=${i}$ avec $${e}_${u}=${t}$.<br>
            Calculer $${e}_{${$}}$.`,this.correctionDetaillee?r="Si $(u_n)$ est une suite arithmétique  de raison $r$, alors pour tout entier naturel $n$ et $p$, on a $u_n=u_p+(n-p)\\times r$.<br>":r="",r+=`
              La suite $(${e}_n)$ est arithmétique de raison $r=${i}$ avec $${e}_${u}=${t}$.<br>
            On en déduit que pour tout $n\\in\\mathbb{N}$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_${u}+(n-${u})\\times r\\\\
          ${e}_n&=${t}+(n-${u})\\times ${d(i)}\\\\
          ${e}_n&=${t-u*i===0?`=${f(i)}n`:`${t-u*i}${g(i)}n`} 
           \\end{aligned}$
          <br>   
          Ainsi, `,t-u*i===0?i===1||i===-1?r+=`$${e}_n=${l(n)}$.`:r+=`$${e}_{${$}}=${i}\\times ${$} =${l(n)}$.`:i===1||i===-1?r+=`$${e}_{${$}}=${t-u*i}${i===1?`${c($)}`:`${-$}`} =${l(n)}$.`:r+=`$${e}_{${$}}=${t-u*i}${c(i)}\\times ${$} =${l(n)}$.`;break;case 4:t=o(-10,10,0),$=o(5,10),s=new v(o(8,29,[10,20])).div(10).mul(q([-1,1])),p=s.pow($).mul(t),n=p.toFixed(1),b(this,m,{reponse:{value:n}}),_=`$(${e}_n)$ est une suite géométrique de raison $q=${a(s,1)}$ et de premier terme $${e}_0=${t}$.<br>
            Calculer $${e}_{${$}}$.`,_+="<br>Donner la valeur arrondie au dixième.",this.correctionDetaillee?r="La forme explicite d'une suite géométrique $(u_n)$ de raison $q$ et de premier terme $u_0$ est : $u_n=u_0\\times q^n$.<br>":r="",r+=`La suite $(${e}_n)$ est géométrique de raison $q=${a(s,1)}$ et de premier terme $${e}_0=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_0\\times q^n\\\\
          ${e}_n&=${t}\\times ${d(a(s,1))}^n\\\\
           ${e}_{${$}}&=${t===1?`${d(a(s,1))}^{${$}}`:`${t}\\times ${d(a(s,1))}^{${$}}`}
           \\end{aligned}$
          <br>Ainsi, $${e}_{${$}}\\simeq${l(a(p,1))}$.`;break;case 5:t=o(-10,10,0),$=o(5,10),s=new v(o(8,29,[10,20])).div(10).mul(q([-1,1])),p=s.pow($-1).mul(t),n=p.toFixed(1),b(this,m,{reponse:{value:n}}),_=`$(${e}_n)$ est une suite géométrique de raison $q=${a(s,1)}$ et de premier terme $${e}_1=${t}$.<br>
            Calculer $${e}_{${$}}$.`,_+="<br>Donner la valeur arrondie au dixième.",this.correctionDetaillee?r="La forme explicite d'une suite géométrique $(u_n)$ de raison $q$ et de premier terme $u_1$ est : $u_n=u_1\\times q^{n-1}$.<br>":r="",r+=`La suite $(${e}_n)$ est géométrique de raison $q=${a(s,1)}$ 
          et de premier terme $${e}_1=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}^*$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_1\\times q^{n-1}\\\\
          ${e}_n&=${t}\\times ${d(a(s,1))}^{n-1}\\\\
           ${e}_{${$}}&=${t===1?`${d(a(s,1))}^{${$-1}}`:`${t}\\times ${d(a(s,1))}^{${$-1}}`}
           \\end{aligned}$
          <br>Ainsi, $${e}_{${$}}\\simeq${l(a(p,1))}$.`;break;case 6:t=o(-10,10,0),$=o(9,11),u=o(2,4),s=new v(o(8,29,[10,20])).div(10).mul(q([-1,1])),p=s.pow($-u).mul(t),n=p.toFixed(1),b(this,m,{reponse:{value:n}}),_=`$(${e}_n)$ est une suite géométrique de raison $q=${a(s,1)}$ avec $${e}_${u}=${t}$.<br>
            Calculer $${e}_{${$}}$.`,_+="<br>Donner la valeur arrondie au dixième.",this.correctionDetaillee?r="Si $(u_n)$ est une suite géométrique  de raison $q$, alors pour tout entier naturel $n$ et $p$, on a $u_n=u_p\\times q^{n-p}$.<br>":r="",r+=` La suite $(${e}_n)$ est géométrique de raison $q=${a(s,1)}$ avec $${e}_${u}=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_{${u}}\\times q^{n-${u}}\\\\
          ${e}_n&=${t}\\times ${d(a(s,1))}^{n-${u}}\\\\
           ${e}_{${$}}&=${t===1?`${d(a(s,1))}^{${$-u}}`:`${t}\\times ${d(a(s,1))}^{${$-u}}`}
           \\end{aligned}$
          <br>Ainsi, $${e}_{${$}}\\simeq${l(a(p,1))}$.`;break}h[m]===1||h[m]===2||h[m]===3?_+="<br>"+D(this,m," ",{texteAvant:`$${e}_{${$}}=$`}):_+="<br>"+D(this,m," ",{texteAvant:`$${e}_{${$}}\\simeq$`}),this.questionJamaisPosee(m,_)&&(this.listeQuestions[m]=_,this.listeCorrections[m]=r,m++),x++}N(this)}}export{te as dateDePublication,se as default,$e as interactifReady,ie as interactifType,ne as refs,ee as titre,re as uuid};
