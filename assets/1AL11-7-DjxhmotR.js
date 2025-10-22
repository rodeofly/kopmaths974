import{E as C}from"./Exercice-DtXhjCyI.js";import{a as h,r as p,e as r,v as S,f as i,m as l,Y as c,l as q}from"./embellissements-BYV7mIDn.js";import u from"decimal.js";import{c as b}from"./lists-i1i4IA1M.js";import{p as E}from"./qcm-BQR8Ns0N.js";import{a as x}from"./questionMathLive-DdRvWqlN.js";import{h as g}from"./gestionInteractif-DujZpSu8.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const te="Étudier une suite arithmético-géométrique",ne="30/11/2024",$e=!0,ie="mathLive",re="12afc",oe={"fr-fr":["1AL11-7"],"fr-ch":["autres-10"]};class se extends C{constructor(){super(),this.nbQuestions=1,this.sup="3",this.spacing=1.5,this.spacingCorr=1.5,this.besoinFormulaire2CaseACocher=["Avec des décimaux"]}nouvelleVersion(){for(let o=0,_=0;o<this.nbQuestions&&_<50;){let a="",d="",$,s,m,t;const v=["u","w"],w=["v","t"],n=h(v),e=h(w);this.sup2?($=new u(p(-19,19,[0,-10,10])).div(10),s=new u(p(-19,19,[0,-10,10])).div(10),t=p(2,8),m=new u($).mul(-1).add(1).mul(t)):($=p(-10,10,[-1,0,1]),s=p(-10,10),t=p(-6,6,[s,0]),m=new u($).mul(-1).add(1).mul(t)),this.autoCorrection[3*o]={enonce:a,options:{vertical:!0},propositions:[{texte:`Pour tout entier naturel $n$, $${e}_{n+1}=${r($,1)}${e}_n$`,statut:!0},{texte:`Pour tout entier naturel $n$, $${e}_{n+1}=${r(m,1)}${e}_n$`,statut:!1},{texte:`Pour tout entier naturel $n$, $${e}_{n+1}= ${S(-t)}${e}_n$`,statut:!1},{texte:`Pour tout entier naturel $n$, $${e}_{n+1}=${e}_n${i(-t)}$`,statut:!1}]};const f=E(this,3*o);this.interactif&&(a+=f.texte),a=`Soit $(${n}_n)$ la suite définie pour tout entier naturel $n$ par $${n}_{n+1}=${r($,1)}${n}_n ${i(m)}$ et $${n}_0=${r(s,1)}$.`,a+=b({items:[`${this.interactif?`On pose $${e}_n=${n}_n ${i(-t)}$ pour tout entier naturel $n$.<br>
`+f.texte:`On pose $${e}_n=${n}_n ${i(-t)}$ pour tout entier naturel $n$.<br>
Montrer que  $(${e}_n)$ est une suite géométrique.<br>
 Donner sa raison et son premier terme.`}`,`Exprimer $${e}_n$ en fonction de $n$.`+x(this,3*o+1,"",{texteAvant:`<br>$${e}_n=$`}),`En déduire l'expression du terme général de $(${n}_n)$ en fonction de $n$.`+x(this,3*o+2,"",{texteAvant:`<br>$${n}_n=$`})],style:"nombres"}),d=b({items:[`Pour tout entier naturel $n$, <br>
            $\\begin{aligned}
           ${e}_{n+1}&=${n}_{n+1} ${i(-t)}\\\\
           &=${r($,1)}${n}_n ${i(m)} ${i(-t)}\\\\
           &=${r($,1)}${n}_n ${i(m.sub(t))}\\\\
           &=${r($,1)}(\\underbrace{${n}_n${i(-t)}}_{${e}_n})\\\\
           &=${r($,1)}${e}_n
           \\end{aligned}$<br>
           On a donc $${l(`${e}_{n+1}=${r($,1)}${e}_n`)}$.<br>
           $(${e}_n)$ est donc une suite géométrique de raison $${r($,1)}$.<br>
           On calcule son premier terme $${e}_0$ : <br>
           $\\begin{aligned}
          ${e}_0&=${n}_0${i(-t)}\\\\
          &=${r(s,1)}${i(-t)}\\\\
          &=${r(new u(s).sub(t),1)}
          \\end{aligned}$`,`
          On en déduit l'expression de $${e}_n$ en fonction de $n$ pour tout entier naturel $n$ : $${e}_n=${l(`${r(new u(s).sub(t),1)}\\times ${c($)}^n`)}$.
           `,`Puisque $${e}_n=${n}_n ${i(-t)}$, alors $${n}_n=${e}_n ${i(t)}$.<br>
           Ainsi l'expression de $${n}_n$ en fonction de $n$ est donnée pour tout entier naturel $n$ par  : 
           $${n}_n=${l(`${r(new u(s).sub(t),1)}\\times ${c($)}^n ${i(t)}`)}$.`],style:"nombres"});const A=`${new u(s).sub(t)} \\times ${c($)}^n`,P=`${new u(s).sub(t)}\\times ${c($)}^n ${i(t)}`;g(this,3*o+1,{reponse:{value:A}}),g(this,3*o+2,{reponse:{value:P}}),this.questionJamaisPosee(o,a)&&(this.listeQuestions[o]=a,this.listeCorrections[o]=d,o++),_++}q(this)}}export{ne as dateDePublication,se as default,$e as interactifReady,ie as interactifType,oe as refs,te as titre,re as uuid};
