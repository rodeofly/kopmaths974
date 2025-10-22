import{af as h,r as u,an as m,e,l as x,m as a}from"./embellissements-BYV7mIDn.js";import{E as v}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const j="Utiliser la distributivité pour du calcul numérique",w="26/11/2022",F="41f23",I={"fr-fr":["5C12-2b"],"fr-ch":["10FA2-1"]};class O extends v{constructor(){super(),this.nbQuestions=6,this.listeAvecNumerotation=!1,this.consigne="Calculer les expressions suivantes de deux manières différentes."}nouvelleVersion(){const p=h([1,2,3,4,5,6],this.nbQuestions);function l(t,$,i,r,n,s){let o="bug";return n==="factorisee"&&(o=`
        $\\textbf{Méthode 1 : avec les priorités.}$<br>
        $${m(t+1)}=${$}\\times (${e(i)} ${s===1?`+ ${e(r)}`:`- ${e(r)}`})$<br>
        $${m(t+1)}=${$}\\times ${s===1?e(i+r):e(i-r)}$<br>
        $${m(t+1)}=${s===1?e($*(i+r)):e($*(i-r))}$<br>
        `,o+=`<br>
        $\\textbf{Méthode 2 : en distribuant d'abord.}$<br>
        $${m(t+1)}=${a($)}\\times (${e(i)} ${s===1?`+ ${e(r)}`:`- ${e(r)}`})$<br>
        $${m(t+1)}=${a($)}\\times ${e(i)} ${s===1?"+":"-"} ${a($)}\\times ${r}$<br>
        $${m(t+1)}=${e($*i)} ${s===1?"+":"-"} ${e($*r)}$<br>
        $${m(t+1)}=${s===1?e($*i+$*r):e($*i-$*r)}$<br>
        `),n==="developpee"&&(o=`
        $\\textbf{Méthode 1 : avec les priorités.}$<br>
        $${m(t+1)}=${$}\\times ${e(i)} ${s===1?"+":"-"} ${$}\\times ${e(r)}$<br>
        $${m(t+1)}=${e($*i)} ${s===1?"+":"-"} ${e($*r)}$<br>
        $${m(t+1)}=${s===1?e($*i+$*r):e($*i-$*r)}$<br>
        `,o+=`<br>
        $\\textbf{Méthode 2 : en factorisant d'abord.}$<br>
        $${m(t+1)}=${a($)}\\times ${e(i)} ${s===1?"+":"-"} ${a($)}\\times ${e(r)}$<br>
        $${m(t+1)}=${a($)}\\times (${e(i)} ${s===1?`+ ${e(r)}`:`- ${e(r)}`})$<br>
        $${m(t+1)}=${a($)}\\times ${s===1?e(i+r):e(i-r)}$<br>
        $${m(t+1)}=${s===1?e($*(i+r)):e($*(i-r))}$<br>
        `),o}for(let t=0,$,i,r=0;t<this.nbQuestions&&r<50;){$="",i="";let n=u(2,9),s=u(1,9,[n]),o=u(1,9,[n,s]),f;s<o&&(f=s,s=o,o=f);const b=[100,1e3],c=u(1,9);switch($="",i="",p[t]){case 1:$+=`$${m(t+1)}=${n}\\times (${e(s)} + ${e(o)})$`,i+=l(t,n,s,o,"factorisee",1);break;case 2:$+=`$${m(t+1)}=${n}\\times ${e(s)} + ${n}\\times ${e(o)}$`,i+=l(t,n,s,o,"developpee",1);break;case 3:$+=`$${m(t+1)}=${n}\\times (${e(s)} - ${e(o)})$`,i+=l(t,n,s,o,"factorisee",-1);break;case 4:$+=`$${m(t+1)}=${n}\\times ${e(s)} - ${n}\\times ${e(o)}$`,i+=l(t,n,s,o,"developpee",-1);break;case 5:{n=u(47,83);const d=u(0,1);o=c,s=b[d]-o,$+=`$${m(t+1)}=${n}\\times ${e(s)} + ${n}\\times ${o}$`,i+=l(t,n,s,o,"developpee",1);break}case 6:{n=u(47,83);const d=u(0,1);o=c,s=b[d]+o,$+=`$${m(t+1)}=${n}\\times ${e(s)} - ${n}\\times ${o}$`,i+=l(t,n,s,o,"developpee",-1);break}}this.listeQuestions.indexOf($)===-1&&(this.listeQuestions[t]=$,this.listeCorrections[t]=i,t++),r++}x(this)}}export{w as dateDePublication,O as default,I as refs,j as titre,F as uuid};
