import{E as w}from"./Exercice-DtXhjCyI.js";import{g as S,af as Q,a as D,r as n,e as i,m as h,al as v,l as A}from"./embellissements-BYV7mIDn.js";import{h as _}from"./gestionInteractif-DujZpSu8.js";import{a as g}from"./questionMathLive-DdRvWqlN.js";import $ from"decimal.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const Z="Calculer la raison d'une suite arithmétique ou géométrique",ee=!0,te="mathLive",ie="23/10/2024",se="db786",ne={"fr-fr":["1AL11-5"],"fr-ch":[]};class re extends w{constructor(){super(),this.nbQuestions=1,this.sup="5",this.spacing=1.5,this.spacingCorr=2,this.besoinFormulaire2CaseACocher=["Avec des décimaux"],this.correctionDetaillee=!1,this.correctionDetailleeDisponible=!0,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Suite arithmétique avec deux termes consécutifs","2 : Suite arithmétique avec deux termes non consécutifs","3 : Suite géométrique avec deux termes consécutifs","4 : Suite géométrique avec deux termes non consécutifs","5 : Mélange"].join(`
`)]}nouvelleVersion(){const x=S({saisie:this.sup,min:1,max:4,melange:5,defaut:5,nbQuestions:this.nbQuestions}),b=Q(x,this.nbQuestions);for(let o=0,f=0;o<this.nbQuestions&&f<50;){let m="",u="",l;const e=D(["u","v","w","t"]);let d,p,r,a,c,q,t,s;switch(b[o]){case 1:r=this.sup2?new $(n(1,99)).div(10):n(-12,12,0),p=this.sup2?new $(n(-99,99,0)).div(10):n(-15,15,0),a=new $(r).add(p),t=n(0,10),s=t+1,l=i(p,2),_(this,o,{reponse:{value:l}}),m=`Soit $(${e}_n)$ une suite arithmétique telle que $${e}_{${t}}=${i(r,2)}$ et $${e}_{${s}}=${i(a,2)}$.<br>
         Quelle est la valeur de la raison $r$ de cette suite ?`,this.correctionDetaillee?u=`Si $(u_n)$ est une suite arithmétique de raison $r$, alors pour tout entier naturel $n$, $u_{n+1}=u_n+r$.<br>
           Ainsi, $r=u_{n+1}-u_n$.<br>`:u="",u+=`La suite $(${e}_n)$ est arithmétique, on obtient donc la raison de la suite en effectuant la différence de deux termes consécutifs : <br>
          $\\begin{aligned}        
          r&=${e}_{${s}}-${e}_{${t}}\\\\
          &=${i(a,2)}-${v(i(r,2))}\\\\
          &=${h(l)}
          \\end{aligned}$    
          `;break;case 2:r=this.sup2?new $(n(1,99)).div(10):n(-12,12,0),d=n(5,15),p=this.sup2?new $(n(-99,99,0)).div(10):n(-15,15,0),a=new $(p).mul(d).add(r),l=i(p,2),t=n(0,10),s=t+d,_(this,o,{reponse:{value:l}}),m=`Soit $(${e}_n)$ une suite arithmétique telle que $${e}_{${t}}=${i(r,2)}$ et $${e}_{${s}}=${i(a,2)}$.<br>
         Quelle est la valeur de la raison $r$ de cette suite ?`,this.correctionDetaillee?u=`Si $(u_n)$ est une suite arithmétique de raison $r$, alors pour tout entier naturel $n$ et $p$, on a $u_n=u_p+(n-p)\\times r$. <br>
            Ainsi, $r=\\dfrac{u_n-u_p}{n-p}$.<br>`:u="",u+=`$(${e}_n)$ est une suite arithmétique, alors $${e}_{${s}}=${e}_{${t}}+(${s}-${t})\\times r$. <br>
          Ainsi : <br>
          $\\begin{aligned}
          r&=\\dfrac{${e}_{${s}}-${e}_{${t}}}{${s}-${t}}\\\\
          &=\\dfrac{${i(a,2)}-${v(i(r,2))}}{${s-t}}\\\\
          &=${h(l)}
          \\end{aligned}$
          <br>   
           `;break;case 3:r=this.sup2?new $(n(1,99)).div(10):n(-12,12,0),c=this.sup2?new $(n(-99,99,0)).div(10):n(-15,15,0),a=new $(r).mul(c),t=n(0,10),s=t+1,l=i(c,2),_(this,o,{reponse:{value:l}}),m=`Soit $(${e}_n)$ une suite géométrique telle que $${e}_{${t}}=${i(r,2)}$ et $${e}_{${s}}=${i(a,2)}$.<br>
         Quelle est la valeur de la raison $q$ de cette suite ?`,this.correctionDetaillee?u=`Si $(u_n)$ est une suite géométrique de raison $q$, alors pour tout entier naturel $n$, $u_{n+1}=q\\times u_n$.<br>
           Ainsi, $q=\\dfrac{u_{n+1}}{u_n}$.<br>`:u="",u+=`La suite $${e}_n$ est géométrique, on obtient donc la raison de la suite en effectuant le quotient  de deux termes consécutifs : <br>
          $\\begin{aligned}        
          q&=\\dfrac{${e}_{${s}}}{${e}_{${t}}}\\\\
          &=\\dfrac{${i(a,2)}}{${i(r,2)}}\\\\
          &=${h(l)}
          \\end{aligned}$    
          `;break;case 4:r=this.sup2?new $(n(1,99)).div(10):n(-12,12),d=2,c=this.sup2?new $(n(-99,99,[0,1])).div(10):n(-15,15,[0,1]),a=new $(c).pow(d).mul(r),q=new $(a).div(r),l=i(c,2),t=n(1,10),s=t+d,_(this,o,{reponse:{value:l}}),m=`Soit $(${e}_n)$ une suite géométrique de raison $q$ strictement ${$.sign(c)===1?"positive":"négative"} telle que $${e}_{${t}}=${i(r,5)}$ et $${e}_{${s}}=${i(a,5)}$.<br>
           Quelle est la valeur de la raison de cette suite ?`,this.correctionDetaillee?u="Si $(u_n)$ est une suite géométrique de raison $q$, alors pour tout entier naturel $n$ et $p$, on a $u_n=u_p\\times q^{n-p}$.<br>":u="",u+=`$(${e}_n)$ est une suite géométrique, alors $${e}_{${s}}=${e}_{${t}}\\times q^{${s}-${t}}$. <br>
            Ainsi : <br>
            $\\begin{aligned}
            ${e}_{${s}}&=${e}_{${t}}\\times q^{${s}-${t}}\\\\
            ${i(a,2)}&=${i(r,2)}\\times q^{${s-t}}\\\\
           q^{${s-t}} &=\\dfrac{${i(a,2)}}{${i(r,2)}}\\\\
           q^{${s-t}}&=${i(q,4)}\\\\
           q&=${$.sign(c)===1?"":"-"}\\sqrt{${i(q,4)}}${$.sign(c)===1?"\\text{ car d'après l'énoncé la raison est strictement positive.}":"\\text{ car d'après l'énoncé la raison est strictement négative.}"}\\\\
            q&=${h(l)}
            \\end{aligned}$  
             `;break}b[o]===1||b[o]===2?m+="<br>"+g(this,o," ",{texteAvant:"$r=$"}):m+="<br>"+g(this,o," ",{texteAvant:"$q=$"}),this.questionJamaisPosee(o,m)&&(this.listeQuestions[o]=m,this.listeCorrections[o]=u,o++),f++}A(this)}}export{ie as dateDePublication,re as default,ee as interactifReady,te as interactifType,ne as refs,Z as titre,se as uuid};
