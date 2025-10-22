import{a as y}from"./etudeFonction-BXXWUyni.js";import{af as P,r as m,aq as u,l as v,s as f}from"./embellissements-BYV7mIDn.js";import{E}from"./Exercice-DtXhjCyI.js";import"./Matrice-C65I2nuw.js";import"mathjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./index-BUDQz6-w.js";import"decimal.js";import"./Hms-u2AUyU1C.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"seedrandom";const H="Déterminer un extremum ou encadrer par lecture d'un tableau de variations",K="20/12/2021",O="acee0",R={"fr-fr":["2F32-3"],"fr-ch":[]};class W extends E{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",3,`1 : Minimum et maximum
2 :Encadrement
3 :Mélange`],this.nbQuestions=1,this.sup=3}nouvelleVersion(){let p;this.sup===1?p=["typeE1"]:this.sup===2?p=["typeE2"]:p=["typeE1","typeE2"];const M=P(p,this.nbQuestions);for(let x=0,A=0;x<this.nbQuestions&&A<50;){let o="",r="",t,n,l,s,i,$,e,a,c,q,I,g,h,b,d;switch(M[x]){case"typeE1":t=m(-20,10),n=m(t+1,15),l=m(n+1,20),s=m(l+1,25),i=m(-10,10),$=m(i-10,i-1),e=m($+1,$+10,i),a=m(e-10,e-1,$),c=Math.max(i,$,e,a),q=Math.min(i,$,e,a),b=m(1,2),b===1?d=["Var",10,`+/$${i}$`,10,`-/$${$}$`,10,`+/$${e}$`,10,`-/$${a}$`,10]:d=["Var",10,`-/$${-i}$`,10,`+/$${-$}$`,10,`-/$${-e}$`,10,`+/$${-a}$`,10],o=` Voici le tableau de variations d'une fonction $f$ définie sur $[${t};${s}]$.<br><br>
              `,o+=y({tabInit:[[["$x$",2,10],["$f(x)$",4,30]],[`$${t}$`,10,`$${n}$`,10,`$${l}$`,10,`$${s}$`,10]],tabLines:[d],espcl:4,deltacl:1,lgt:3,scale:.6}),o+=" <br>Déterminer le minimum et le maximum de $f$ sur son ensemble de définition. Préciser en quelles valeurs de $x$ ils sont atteints.",r=`$\\bullet~$ $f$ admet un maximum en $a$ sur un intervalle $I$ signifie que pour tout réel $x$ de $I$, $f(x)\\leqslant f(a)$.<br>
          Le nombre $f(a)$ est le maximum de $f$ sur $I$.<br>
          $\\bullet~$ $f$ admet un minimum en $b$ sur un intervalle $I$ signifie que pour tout réel $x$ de $I$, $f(x)\\geqslant f(b)$.<br>
          Le nombre $f(b)$ est le minimum de $f$ sur $I$.<br>
          <br>`,b===1?(c===i?r+=`Pour tout réel $x$ de $[${t};${s}]$, on a  $f(x)\\leqslant ${i}$, c'est-à-dire  $f(x)\\leqslant f(${t})$.<br>
           Ainsi, le maximum de $f$ est $${i}$. Il est atteint en $x=${t}$. `:r+=`Pour tout réel $x$ de $[${t};${s}]$, on a  $f(x)\\leqslant ${e}$, c'est-à-dire  $f(x)\\leqslant f(${l})$.<br>
          Ainsi, le maximum de $f$ est $${e}$. Il est atteint en $x=${l}$.  `,q===$?r+=`<br>Pour tout réel $x$ de $[${t};${s}]$, on a  $f(x)\\geqslant ${$}$, c'est-à-dire  $f(x)\\geqslant f(${n})$.<br>
          Ainsi, le minimum de $f$ est $${$}$. Il est atteint en $x=${n}$. `:r+=`<br>Pour tout réel $x$ de $[${t};${s}]$, on a  $f(x)\\geqslant ${a}$, c'est-à-dire  $f(x)\\geqslant f(${s})$.<br>
         Ainsi, le minimum de $f$ est $${a}$. Il est atteint en $x=${s}$.  `):(c===i?r+=`Pour tout réel $x$ de $[${t};${s}]$, on a  $f(x)\\geqslant ${-i}$, c'est-à-dire  $f(x)\\geqslant f(${t})$.<br>
           Ainsi, le minimum de $f$ est $${-i}$. Il est atteint en $x=${t}$. `:r+=`Pour tout réel $x$ de $[${t};${s}]$, on a  $f(x)\\geqslant ${-e}$, c'est-à-dire  $f(x)\\geqslant f(${l})$.<br>
          Ainsi, le minimum de $f$ est $${-e}$. Il est atteint en $x=${l}$.  `,q===$?r+=`<br>Pour tout réel $x$ de $[${t};${s}]$, on a  $f(x)\\leqslant ${-$}$, c'est-à-dire  $f(x)\\leqslant f(${n})$.<br>
          Ainsi, le maximum de $f$ est $${-$}$. Il est atteint en $x=${n}$. `:r+=`<br>Pour tout réel $x$ de $[${t};${s}]$, on a  $f(x)\\leqslant ${-a}$, c'est-à-dire  $f(x)\\leqslant f(${s})$.<br>
         Ainsi, le maximum de $f$ est $${-a}$. Il est atteint en $x=${s}$.  `);break;case"typeE2":default:t=m(-20,10),n=m(t+1,15),l=m(n+1,20),s=m(l+1,25),i=m(-10,10),$=m(i-10,i-1),e=m($+1,$+10,i),a=m(e-10,e-1,$),I=Math.max(i,e),g=Math.max(i,e),h=Math.min($,a),b=m(1,2),b===1?d=["Var",10,`+/$${i}$`,10,`-/$${$}$`,10,`+/$${e}$`,10,`-/$${a}$`,10]:d=["Var",10,`-/$${-i}$`,10,`+/$${-$}$`,10,`-/$${-e}$`,10,`+/$${-a}$`,10],o=` Voici le tableau de variations d'une fonction $f$ définie sur $[${t};${s}]$.<br><br>
              `,o+=y({tabInit:[[["$x$",2,10],["$f(x)$",4,30]],[`$${t}$`,10,`$${n}$`,10,`$${l}$`,10,`$${s}$`,10]],tabLines:[d],espcl:4,deltacl:1,lgt:3,scale:.6}),o+=" <br>Encadrer le plus précisément possible $f(x)$ (en déterminant les valeurs de $m$ et de $M$ telles que $m\\leqslant f(x)\\leqslant M$) dans chacun des cas suivants :<br>",o+=u(0)+` $x\\in[${t};${l}]$<br>`,o+=u(1)+` $x\\in[${n};${s}]$`,r="",b===1?(I===i?r+=u(0)+`Sur $[${t};${l}]$, le minimum de $f$ est $${$}$ et le maximum est
          $${i}$. <br>
          Ainsi, pour $x\\in[${t};${l}]$, ${f(3)} $${$}\\leqslant f(x)\\leqslant ${i}$.<br>`:r+=u(0)+`Sur $[${t};${l}]$, le minimum de $f$ est $${$}$ et le maximum est
          $${e}$. <br>
          Ainsi, pour $x\\in[${t};${l}]$, ${f(3)} $${$}\\leqslant f(x)\\leqslant ${e}$.<br>`,h===$?r+=u(1)+`Sur $[${n};${s}]$, le minimum de $f$ est $${$}$ et le maximum est
          $${e}$. <br>
          Ainsi, pour $x\\in[${n};${s}]$, ${f(3)} $${$}\\leqslant f(x)\\leqslant ${e}$.<br>`:r+=u(1)+`Sur $[${n};${s}]$, le minimum de $f$ est $${a}$ et le maximum est
          $${e}$. <br>
          Ainsi, pour $x\\in[${n};${s}]$, ${f(3)} $${a}\\leqslant f(x)\\leqslant ${e}$.<br>`):(g===i?r+=u(0)+`Sur $[${t};${l}]$, le minimum de $f$ est $${-i}$ et le maximum est
            $${-$}$. <br>
            Ainsi, pour $x\\in[${t};${l}]$, ${f(3)} $${-i}\\leqslant f(x)\\leqslant ${-$}$.<br>`:r+=u(0)+`Sur $[${t};${l}]$, le minimum de $f$ est $${-e}$ et le maximum est
            $${-$}$. <br>
            Ainsi, pour $x\\in[${t};${l}]$, ${f(3)} $${-e}\\leqslant f(x)\\leqslant ${-$}$.<br>`,h===$?r+=u(1)+`Sur $[${n};${s}]$, le minimum de $f$ est $${-e}$ et le maximum est
            $${-$}$. <br>
            Ainsi, pour $x\\in[${n};${s}]$, ${f(3)} $${-e}\\leqslant f(x)\\leqslant ${-$}$.<br>`:r+=u(1)+`Sur $[${n};${s}]$, le minimum de $f$ est $${-e}$ et le maximum est
            $${-a}$. <br>
            Ainsi, pour $x\\in[${n};${s}]$, ${f(3)} $${-e}\\leqslant f(x)\\leqslant ${-a}$.<br>`);break}this.questionJamaisPosee(x,t,n,l,s,i,$,e,a)&&(this.listeQuestions[x]=o,this.listeCorrections[x]=r,x++),A++}v(this)}}export{K as dateDePublication,W as default,R as refs,H as titre,O as uuid};
