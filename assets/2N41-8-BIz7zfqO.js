import{af as N,a as l,r as d,h as p,F as v,u as s,z as L,a0 as R,v as f,l as C}from"./embellissements-BYV7mIDn.js";import{E}from"./Exercice-DtXhjCyI.js";import{a as m}from"./questionMathLive-DdRvWqlN.js";import{s as b}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const se="23/04/2023",ne=!0,ae="mathLive",oe="Mettre au même dénominateur des expressions littérales",ce="641bc",de={"fr-fr":["2N41-8"],"fr-ch":[]};class ue extends E{constructor(){super(),this.besoinFormulaireNumerique=["Niveau de difficulté",3,`1 : Niveau 1
 2 : Niveau 2
 3 : Mélange`],this.nbQuestions=2,this.sup=3,this.comment=`Les expressions du niveau 1 sont des expressions du type $a+\\dfrac{b}{x}$ ou $ax+\\dfrac{b}{x}$ ou $a+\\dfrac{b}{cx+d}$.<br>
  Les expressions de niveau 2 sont plus complexes. Elles nécessitent par exemple un développement du numérateur et peuvent avoir deux valeurs interdites.`}nouvelleVersion(){let q=[];this.sup===1?q=[1,2,3]:this.sup===2?q=[4,5,6,7]:q=[1,2,3,4,5,6,7];const y=N(q,this.nbQuestions);for(let u=0,c,x,Q=0,w,k,h,F,g;u<this.nbQuestions&&Q<50;){switch(w=y[u],k="Préciser les valeurs interdites éventuelles, puis écrire l'expression sous la forme d'un quotient : ",h="Préciser les valeurs interdites éventuelles, puis écrire l'expression sous la forme d'un quotient (réduire le numérateur) : ",F=" Écrire avec un seul quotient :<br>",g=" Écrire avec un seul quotient (réduire le numérateur) :<br>",w){case 1:{const e=d(1,9),t=d(-9,9,0),r=l([!0,!1]);c=k,c+=`$${f(t)}x${r?"-":"+"}\\dfrac{${e}}{x}$.`,x=`Déterminer les valeurs interdites de cette expression, revient à déterminer les valeurs qui annulent le dénominateur de $\\dfrac{${e}}{x}$, puisque la division par $0$ n'existe pas.<br>
          $0$ est donc une valeur interdite. <br>
            Pour $x\\in \\mathbb{R}^*$,<br>
            $\\begin{aligned}
            ${f(t)}x${r?"-":"+"}\\dfrac{${e}}{x}&=\\dfrac{${f(t)}x^2}{x}${r?"-":"+"}\\dfrac{${e}}{x}\\\\
           &= \\dfrac{${f(t)}x^2${r?"-":"+"}${e}}{x}
           \\end{aligned}$
        `;const $=r?[`\\dfrac{${t}x^2-${e}}{x}`]:[`\\dfrac{${t}x^2+${e}}{x}`];b(this,u,$),this.interactif&&(c=F,c+=` $${f(t)}x${r?"-":"+"}\\dfrac{${e}}{x}=$`+m(this,u,""))}break;case 2:{const e=d(1,9),t=d(-9,9,0),r=l([!0,!1]);c=k,c+=`$${t}${r?"+":"-"}\\dfrac{${e}}{x}$.`,x=`Déterminer les valeurs interdites de cette expression, revient à déterminer les valeurs qui annulent le dénominateur de $\\dfrac{${e}}{x}$, puisque la division par $0$ n'existe pas.<br>
            $0$ est donc une valeur interdite. <br>
            Pour $x\\in \\mathbb{R}^*$, <br>
            $\\begin{aligned}
            ${t}${r?"+":"-"}\\dfrac{${e}}{x}&=\\dfrac{${f(t)}x}{x}${r?"+":"-"}\\dfrac{${e}}{x}\\\\
            &=\\dfrac{${f(t)}x${r?"+":"-"}${e}}{x}
            \\end{aligned}$`;const $=r?[`\\dfrac{${t}x+${e}}{x}`]:[`\\dfrac{${t}x-${e}}{x}`];b(this,u,$),this.interactif&&(c=F,c+=` $${t}${r?"+":"-"}\\dfrac{${e}}{x}=$`+m(this,u,""))}break;case 3:{let e;const t=d(-5,5,0),r=l([!0,!1]),$=d(-2,5,0),n=d(1,4),i=l([n*$,d(-5,5,0)]);e=l([p(i-1),p(i+1)]),e===0&&(e=e+1);const a=new v(-i,$).simplifie();c=h,c+=`$${t}${r?"+":"-"}\\dfrac{${e}}{${s($,i)}}$.`,x=`Déterminer les valeurs interdites de cette expression, revient à  déterminer les valeurs qui annulent le dénominateur de $\\dfrac{${e}}{${s($,i)}}$,
            puisque la division par $0$ n'existe pas.<br>`,x+=`L'équation $${s($,i)}=0$ a pour solution $${a.texFraction}$. <br>
            $${a.texFraction}$ est donc une valeur interdite pour l'expression. <br>
            Pour $x\\in \\mathbb{R}\\smallsetminus\\left\\{${a.texFraction}\\right\\}$, <br>
            $\\begin{aligned}
${t}${r?"+":"-"}\\dfrac{${e}}{${s($,i)}}&=\\dfrac{${t}(${s($,i)})}{${s($,i)}}${r?"+":"-"}\\dfrac{${e}}{${s($,i)}}\\\\
            &=\\dfrac{${s(t*$,t*i)}${r?"+":"-"}${e}}{${s($,i)}}\\\\
            &=\\dfrac{${r?`${s(t*$,t*i+e)}`:`${s(t*$,t*i-e)}`}}{${s($,i)}}
            \\end{aligned}$`;const o=r?[`\\dfrac{${t*$}x+${t*i+e}}{${$}x+${i}}`,`\\dfrac{${-t*$}x+${-t*i-e}}{${-$}x+${-i}}`]:[`\\dfrac{${t*$}x+${t*i-e}}{${$}x+${i}}`,`\\dfrac{${-t*$}x+${-t*i+e}}{${-$}x+${-i}}`];b(this,u,o),this.interactif&&(c=F,c+=`$${t}${r?"+":"-"}\\dfrac{${e}}{${s($,i)}}=$`+m(this,u,""))}break;case 4:{let e;const t=d(-5,5,0),r=l([!0,!1]),$=d(-2,5,0),n=d(1,4),i=l([n*$,d(-5,5,0)]);e=l([p(i-1),p(i+1)]),e===0&&(e=e+1);const a=new v(-i,$).simplifie();c=h,c+=`$\\dfrac{${t}}{x}${r?"+":"-"}\\dfrac{${e}}{${s($,i)}}$.`,x=`Déterminer les valeurs interdites de cette expression, revient à déterminer les valeurs qui annulent le dénominateur de $\\dfrac{${e}}{${s($,i)}}$,
            puisque la division par $0$ n'existe pas.<br>`,x+=` L'équation $${s($,i)}=0$ a pour solution $${a.texFraction}$. <br>
             $0$ et $${a.texFraction}$ sont donc des valeurs interdites pour l'expression. <br>
            Pour $x\\in \\mathbb{R}\\smallsetminus\\left\\{${-i/$<0?`${a.texFraction}\\,;\\,0`:`0\\,;\\,${a.texFraction}`}\\right\\}$,<br>
            $\\begin{aligned}
            \\dfrac{${t}}{x}${r?"+":"-"}\\dfrac{${e}}{${s($,i)}}&=\\dfrac{${t}(${s($,i)})}{x(${s($,i)})}${r?"+":"-"}\\dfrac{${f(e)}x}{x(${s($,i)})}\\\\
           & =\\dfrac{${s(t*$,t*i)}${r?"+":"-"}${f(e)}x}{x(${s($,i)})}\\\\
           &=\\dfrac{${r?`${s(t*$+e,t*i)}`:`${s(t*$-e,t*i)}`}}{x(${s($,i)})}
           \\end{aligned}$`;const o=r?[`\\dfrac{${t*$+e}x+${t*i}}{x(${$}x+${i})}`,`\\dfrac{${-t*$-e}x+${-t*i}}{x(${-$}x+${-i})}`]:[`\\dfrac{${t*$-e}x+${t*i}}{x(${$}x+${i})}`,`\\dfrac{${-t*$+e}x+${-t*i}}{x(${-$}x+${-i})}`];b(this,u,o),this.interactif&&(c=g,c+=`$\\dfrac{${t}}{x}${r?"+":"-"}\\dfrac{${e}}{${s($,i)}}=$`+m(this,u,""))}break;case 5:{let e;const t=d(-3,9,0),r=d(-2,5,0),$=d(1,4),n=l([$*r,d(-5,5,0)]);e=l([p(n-1),p(n+1)]),e===0&&(e=e+1);const i=new v(-n,r).simplifie();c=h,c+=`$${f(t)}x+\\dfrac{${e}}{${s(r,n)}}$.`,x=`Déterminer les valeurs interdites de cette expression, revient à
            déterminer les valeurs qui annulent le dénominateur de $\\dfrac{${e}}{${s(r,n)}}$,
            puisque la division par $0$ n'existe pas.<br>`,x+=`L'équation $${s(r,n)}=0$ a pour solution $${i.texFraction}$. <br>
            $${i.texFraction}$ est une valeur interdite pour le quotient $\\dfrac{${e}}{${s(r,n)}}$.<br>
            Pour $x\\in \\mathbb{R}\\smallsetminus\\left\\{${i.texFraction}\\right\\}$, <br>
            $\\begin{aligned}
            ${f(t)}x+\\dfrac{${e}}{${s(r,n)}}&=\\dfrac{${t}x(${s(r,n)})}{${s(r,n)}}+\\dfrac{${e}}{${s(r,n)}}\\\\
            &=\\dfrac{${t*r}x^2${L(t*n)}x+${e}}{${s(r,n)}}\\\\
            &=\\dfrac{${R(0,t*r,t*n,e)}}{${s(r,n)}}
            \\end{aligned}$`;const a=[`\\dfrac{${t*r}x^2+${t*n}x+${e}}{${r}x+${n}}`];b(this,u,a),this.interactif&&(c=g,c+=`$${f(t)}x+\\dfrac{${e}}{${s(r,n)}}=$`+m(this,u,""))}break;case 6:{let e;const t=d(-3,9,0),r=d(-5,5,0),$=d(-2,5,0),n=d(1,4),i=l([n*$,d(-5,5,0)]);e=l([p(i-1),p(i+1)]),e===0&&(e=e+1);const a=new v(-i,$).simplifie();c=h,c+=`$${s(t,r)}+\\dfrac{${e}}{${s($,i)}}$.`,x=`Déterminer les valeurs interdites de cette expression, revient à
            déterminer les valeurs qui annulent le dénominateur de $\\dfrac{${e}}{${s($,i)}}$,
            puisque la division par $0$ n'existe pas.<br>`,x+=`L'équation $${s($,i)}=0$ a pour solution $${a.texFraction}$. <br>
              $${a.texFraction}$ est donc une valeur interdite pour l'expression. <br>
            Pour $x\\in \\mathbb{R}\\smallsetminus\\left\\{${a.texFraction}\\right\\}$, <br>
            $\\begin{aligned}
            ${s(t,r)}+\\dfrac{${e}}{${s($,i)}}
           & = \\dfrac{(${s(t,r)})(${s($,i)})}{${s($,i)}}+\\dfrac{${e}}{${s($,i)}}\\\\
            &=\\dfrac{(${R(0,t*$,t*i+r*$,r*i)})+${e}}{${s($,i)}}\\\\
           & =\\dfrac{${R(0,t*$,t*i+r*$,r*i+e)}}{${s($,i)}}
           \\end{aligned}$`;const o=[`\\dfrac{${t*$}x^2+${t*i+r*$}x+${r*i+e}}{${$}x+${i}}`];b(this,u,o),this.interactif&&(c=g,c+=`$${s(t,r)}+\\dfrac{${e}}{${s($,i)}}=$`+m(this,u,""))}break;case 7:default:{let e;const t=l([!0,!1]),r=d(-3,9,0),$=d(-2,5,0),n=d(1,9,$),i=d(1,4),a=l([i*$,d(-5,5,0)]),o=l([i*$,d(-5,5,0)]);e=l([p(a-1),p(a+1)]),e===0&&(e=e+1);const D=new v(-a,$).simplifie(),P=new v(-o,n).simplifie();c=h,c+=`$\\dfrac{${r}}{${s(n,o)}}${t?"+":"-"}\\dfrac{${e}}{${s($,a)}}$.`,x=`Déterminer les valeurs interdites de cette expression, revient à déterminer les valeurs qui annulent les dénominateurs de $\\dfrac{${r}}{${s(n,o)}}$ et de $\\dfrac{${e}}{${s($,a)}}$, puisque la division par $0$ n'existe pas.<br>
              `,x+=`L'équation $${s(n,o)}=0$ a pour solution $${P.texFraction}$. <br>
            L'équation $${s($,a)}=0$ a pour solution $${D.texFraction}$. <br>
            $${P.texFraction}$ et $${D.texFraction}$ sont donc des valeurs interdites pour l'expression. <br>
            Pour $x\\in \\mathbb{R}\\smallsetminus\\left\\{${-a/$<-o/n?`${D.texFraction}\\,;\\,${P.texFraction}`:`${P.texFraction}\\,;\\,${D.texFraction}`}\\right\\}$, <br>
            $\\begin{aligned}
            \\dfrac{${r}}{${s(n,o)}}${t?"+":"-"}\\dfrac{${e}}{${s($,a)}}
            &= \\dfrac{${r}(${s($,a)})}{(${s(n,o)})(${s($,a)})}${t?"+":"-"}\\dfrac{${e}(${s(n,o)})}{(${s(n,o)})(${s($,a)})}\\\\
            &=\\dfrac{${r}(${s($,a)})${t?`${L(e)}`:`${L(-e)}`}(${s(n,o)})}{(${s(n,o)})(${s($,a)})}\\\\
            &=\\dfrac{${t?`${s(r*$+e*n,r*a+e*o)}`:`${s(r*$-e*n,r*a-e*o)}`}}{(${s(n,o)})(${s($,a)})}
            \\end{aligned}$`;const M=t?[`\\dfrac{${r*$+e*n}x+${r*a+e*o}}{(${n}x+${o})(${$}x+${a})}`,`\\dfrac{${-r*$-e*n}x+${-r*a-e*o}}{(${-$}x+${-a})(${n}x+${o})}`,`\\dfrac{${-r*$-e*n}x+${-r*a-e*o}}{(${$}x+${a})(${-n}x+${-o})}`]:[`\\dfrac{${r*$-e*n}x+${r*a-e*o}}{(${n}x+${o})(${$}x+${a})}`,`\\dfrac{${-r*$+e*n}x+${-r*a+e*o}}{(${-n}x+${-o})(${$}x+${a})}`,`\\dfrac{${-r*$+e*n}x+${-r*a+e*o}}{(${n}x+${o})(${-$}x+${-a})}`];b(this,u,M),this.interactif&&(c=g,c+=`$\\dfrac{${r}}{${s(n,o)}}${t?"+":"-"}\\dfrac{${e}}{${s($,a)}}=$`+m(this,u,""))}break}this.questionJamaisPosee(u,c)&&(this.listeQuestions[u]=c,this.listeCorrections[u]=x,u++),Q++}C(this)}}export{se as dateDePublication,ue as default,ne as interactifReady,ae as interactifType,de as refs,oe as titre,ce as uuid};
