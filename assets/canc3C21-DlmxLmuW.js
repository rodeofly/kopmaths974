import{g as c,a,r as i,m as u}from"./embellissements-BYV7mIDn.js";import{E as m,K as l}from"./Exercice-DtXhjCyI.js";import{c as b}from"./questionMathLive-DdRvWqlN.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./gestionInteractif-DujZpSu8.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const w="Ajouter ou soustraire des dizaines à un près",B=!0,I="mathLive",J="03/02/2025",L="416xx",U={"fr-fr":["canc3C21"],"fr-ch":[]};class V extends m{constructor(){super(),this.sup="5",this.nbQuestions=1,this.spacing=1.5,this.formatChampTexte=l.clavierDeBase,this.besoinFormulaireTexte=["Types de questions",`Nombres séparés par des tirets  :
1: Ajouter 9 ou 99
2: Soustraire 9 ou 99
3: Ajouter x9
4: Soustraire x9
5: Ajouter xx9
6: Soustraire xx9
7: Mélange`]}nouvelleVersion(){const $=c({saisie:this.sup,min:1,max:6,melange:7,defaut:7,nbQuestions:this.nbQuestions}).map(Number);for(let o=0,p=0;o<this.nbQuestions&&p<50;){let t,e,r,s,n;switch($[o]){case 5:t=i(1,6)*10+i(1,9),e=i(1,5)*100+9+a([10,20,30]),r=`$${t}+${e}$`,s=t+e;break;case 6:e=9+a([10,20,30])+i(1,5)*100,t=e+i(1,6)*10+i(1,9),r=`$${t}-${e}$`,s=t-e;break;case 1:t=i(1,6)*10+i(1,9),e=a([9,99]),r=`$${t}+${e}$`,s=t+e;break;case 2:e=a([9,99]),t=e+i(1,8)*10+i(1,9),r=`$${t}-${e}$`,s=t-e;break;case 3:t=i(1,6)*10+i(1,9),e=9+a([10,20,30]),r=`$${t}+${e}$`,s=t+e;break;case 4:default:e=9+a([10,20,30]),t=e+i(1,8)*10+i(1,9),r=`$${t}-${e}$`,s=t-e,n=`$${t}-${e}=${u(s)}$`;break}$[o]%2===1?n=`Ajouter $${e}$, c'est ajouter $${e+1}$ et soustraire $1$, donc<br>
        $\\begin{aligned}${t}+${e}&=${t}+${e+1}-1\\\\
        &=${t+e+1}-1\\\\
        &=${u(s)}\\end{aligned}$`:n=`Soustraire $${e}$, c'est soustraire $${e+1}$ et ajouter $1$, donc<br>
        $\\begin{aligned}${t}-${e}&=${t}-${e+1}+1\\\\
        &=${t-e-1}+1\\\\
        &=${u(s)}\\end{aligned}$`,r+=b({exercice:this,question:o,typeInteractivite:"mathlive",objetReponse:{reponse:{value:s}}}),this.questionJamaisPosee(o,t,e,$[o])&&(this.listeQuestions.push(r),this.listeCorrections.push(n),o++),p++}}}export{J as dateDePublication,V as default,B as interactifReady,I as interactifType,U as refs,w as titre,L as uuid};
