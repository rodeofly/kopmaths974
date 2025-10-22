import{h as N}from"./gestionInteractif-DujZpSu8.js";import{af as _,r as a,a as b,f as s,v as C,z as E,Y as q,m as D,w as O,h as x,l as T}from"./embellissements-BYV7mIDn.js";import{E as k}from"./Exercice-DtXhjCyI.js";import{a as w}from"./questionMathLive-DdRvWqlN.js";import"decimal.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./index-BUDQz6-w.js";import"mathjs";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"katex";import"earcut";import"roughjs";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";const rt="Appliquer la double distributivité avec les racines carrées",$t="30/09/2025",nt=!0,at="mathLive",ot="660de",lt={"fr-fr":["2N32-5"],"fr-ch":["11NO1-8","1mCN-10"]};class mt extends k{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",3,`1 : Coefficient égal à 1 
2 : Coefficient  différent de 1
3 : Mélange`],this.sup=1,this.spacing=2,this.nbQuestions=1,this.nbCols=2}nouvelleVersion(){let d=[];this.sup===1?d=[3]:this.sup===2?d=[1,2]:d=[1,2,3];const A=_(d,this.nbQuestions);this.consigne=this.nbQuestions===1?"Développer le produit  suivant.":"Développer les produits  suivants.";for(let u=0,Q=0;u<this.nbQuestions&&Q<50;){const y=A[u];let r=0,$=0,t=0,i=0,e=0,p=0,l=0,o=0,n=0,f=0,g=0,v=0,m="",h="",c="";switch(y){case 1:r=a(2,9)*b([-1,1,1]),t=a(2,11,[4,8,9]),i=a(2,9)*b([-1,1]),$=a(2,9),e=a(2,9)*b([-1,1]),l=r*$*t,n=i*e,o=r*e+i*$,p=l+n,o===0&&(e=-e,n=i*e,o=r*e+i*$,p=l+n),m=`\\left(${r}\\sqrt{${t}}${s(i)}\\right)\\left(${$}\\sqrt{${t}}${s(e)}\\right)`,c=`${o} \\sqrt{${t}}${s(p)}`,h=`On développe en utilisant la double distributivité : <br><br>
          $\\begin{aligned}
${m}&=${r}\\sqrt{${t}}\\times ${$}\\sqrt{${t}}${s(r)}\\sqrt{${t}} \\times ${q(e)} ${s(i)} \\times ${$}\\sqrt{${t}}${s(i)} \\times ${q(e)}\\\\
   &=\\underbrace{${r}\\times ${$}}_{=${r*$}}\\times\\underbrace{\\sqrt{${t}}\\times \\sqrt{${t}}}_{=${t}}${s(r*e)}\\sqrt{${t}} ${s(i*$)}\\sqrt{${t}}${s(i*e)}\\\\
   &=${r*$}\\times ${t} +(${r*e}${s(i*$)})\\sqrt{${t}} ${s(n)}\\\\   
                   &=${D(`${C(o)} \\sqrt{${t}}${s(p)}`)}
                   \\end{aligned}$
                  `;break;case 2:r=a(2,9)*b([-1,1,1]),t=a(2,11,[4,8,9]),i=a(2,9)*b([-1,1,1]),e=a(2,9),$=a(2,9),l=r*e,o=r*$,n=i*e,f=i*$,g=n+o*t,v=l+f,m=`\\left(${r}\\sqrt{${t}}${s(i)}\\right)\\left(${e} ${s($)}\\sqrt{${t}}\\right)`,c=`${v}\\sqrt{${t}}${s(g)}`,h=`On développe en utilisant la double distributivité : <br><br>
          $\\begin{aligned}
${m}&=${r}\\sqrt{${t}}\\times ${e}${s(r)}\\sqrt{${t}} \\times ${q($)}\\sqrt{${t}}${s(i)} \\times ${e}  ${s(i)}  \\times ${$}\\sqrt{${t}}\\\\
 &=${l}\\sqrt{${t}}${O(r)} \\underbrace{${x(r)}\\times ${$}}_{=${x(r)*$}}\\times \\underbrace{\\sqrt{${t}}\\times \\sqrt{${t}}}_{=${t}} ${s(n)} ${s(f)} \\sqrt{${t}} \\\\   
&=(${l}${s(f)})\\sqrt{${t}} ${s(o)}\\times ${t} ${s(n)} \\\\
                   &=${D(`${C(v)}\\sqrt{${t}}${s(g)}`)}
                   \\end{aligned}$`;break;case 3:default:r=1,t=a(2,11,[4,8,9]),i=a(2,9)*b([-1,1]),$=1,e=a(2,9)*b([-1,1]),l=r*$*t,n=i*e,o=r*e+i*$,p=l+n,o===0&&(e=-e,n=i*e,o=r*e+i*$,p=l+n),m=`\\left(\\sqrt{${t}}${s(i)}\\right)\\left(\\sqrt{${t}}${s(e)}\\right)`,c=`${C(o)} \\sqrt{${t}}${s(p)}`,h=`On développe en utilisant la double distributivité : <br><br>
          $\\begin{aligned}
${m}&=\\underbrace{\\sqrt{${t}}\\times \\sqrt{${t}}}_{=${t}}${E(r)}\\sqrt{${t}} \\times ${q(e)} ${s(i)} \\times \\sqrt{${t}}${s(i)} \\times ${q(e)}\\\\
   &=${t}${s(r*e)}\\sqrt{${t}} ${s(i*$)}\\sqrt{${t}}${s(i*e)}\\\\
   &=${t}+(${r*e} ${s(i*$)})\\sqrt{${t}} ${s(i*e)}\\\\
                   &=${D(c)}
                   \\end{aligned}$`;break}m=`$${m}$`,m+=w(this,u," ",{texteAvant:"$=$"}),N(this,u,{reponse:{value:c}}),this.questionJamaisPosee(u,r,$,t,i,e)&&(this.listeQuestions[u]=m,this.listeCorrections[u]=h,u++),Q++}T(this)}}export{$t as dateDeModifImportante,mt as default,nt as interactifReady,at as interactifType,lt as refs,rt as titre,ot as uuid};
