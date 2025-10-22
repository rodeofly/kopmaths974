import{a as u,r as o,w as b,m as $,Y as h,e as f,f as l}from"./embellissements-BYV7mIDn.js";import{t as _}from"./deprecatedFractions-D2cbyAQf.js";import{b as s}from"./style-CcGLZIPY.js";import d from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const P="Calculer un terme d’une suite récurrente*",T=!0,D="mathLive",L="15/02/2022",Q="fccb4",V={"fr-fr":["can1S03"],"fr-ch":[]};class Y extends d{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let i,n,r,t,p,m,c,a;switch(u(["a","b","c","d","e"])){case"a":if(i=o(1,10)*u([-1,1]),t=o(1,10)*u([-1,1]),r=2,this.question=`Soit $(u_n)$ une suite définie par $u_0=${t}$ et pour tout  $n\\in\\mathbb{N}$ par $u_{n+1} = u_n ${l(i)}$.`,this.interactif?this.question+=`<br> $u_{${r}}=.....$`:this.question+=`<br>
          
          Calculer $u_{${r}}$.`,this.correction=`On calcule successivement les termes jusqu'à obtenir $u_{${r}}$ :`,i>0)for(let e=0;e<r;e++)this.correction+=`<br> $u_{${e+1}} = ${$("u_{"+e+"}",s(e,!0))} ${l(i)} =
              ${$(t,s(e,!0))} + ${i} = ${$(t+i,s(e+1,!0))}$`,t=t+i;else for(let e=0;e<r;e++)this.correction+=`<br> $u_{${e+1}} = ${$("u_{"+e+"}",s(e,!0))} ${l(i)} =
            ${$(t,s(e,!0))}  ${i} = ${$(t+i,s(e+1,!0))}$`,t=t+i;this.reponse=t;break;case"b":i=o(2,5)*u([-1,1]),t=o(1,4)*u([-1,1]),r=2,this.question=`Soit $(u_n)$ une suite définie par $u_0=${t}$ et pour tout  $n\\in\\mathbb{N}$ par $u_{n+1} = ${i}u_n $.`,this.interactif?this.question+=`<br> $u_{${r}}=.....$`:this.question+=`<br>
          
          Calculer $u_{${r}}$.`,this.correction=`On calcule successivement les termes jusqu'à obtenir $u_{${r}}$ :`;for(let e=0;e<r;e++)this.correction+=`<br> $u_{${e+1}} = ${i}\\times ${$("u_{"+e+"}",s(e,!0))}  =
               ${i}\\times ${$(h(t,s(e,!0)))}  = ${$(t*i,s(e+1,!0))}$`,t=t*i;this.reponse=t;break;case"c":p=[[1,2],[2,3],[3,4],[2,5],[4,5],[1,6],[1,10],[3,10],[7,10],[5,3],[4,3],[3,2],[5,2]],m=u(p),r=2,c=m[0],a=m[1],i=o(1,2)*u([-1,1]),t=i*a*a,this.question=`Soit $(u_n)$ une suite définie par $u_0=${t}$ et pour tout  $n\\in\\mathbb{N}$ par $u_{n+1} = ${_(c,a)}u_n $.`,this.interactif?this.question+=`<br> $u_{${r}}=.....$`:this.question+=`<br>
          
          Calculer $u_{${r}}$.`,this.correction=`On calcule successivement les termes jusqu'à obtenir $u_{${r}}$ :`;for(let e=0;e<r;e++)this.correction+=`<br> $u_{${e+1}} = ${_(c,a)}\\times ${$("u_{"+e+"}",s(e,!0))}  =
          ${_(c,a)}\\times ${$(h(t,s(e,!0)))}  = ${$(t*c/a,s(e+1,!0))}$`,t=c*i*a;this.reponse=c*c*i;break;case"d":i=o(2,4)*u([-1,1]),n=o(1,7)*u([-1,1]),t=o(1,4)*u([-1,1]),r=2,this.question=`Soit $(u_n)$ une suite définie par $u_0=${t}$ et pour tout $n\\in\\mathbb{N}$ par $u_{n+1} = ${i} u_n ${l(n)}$.`,this.interactif?this.question+=`<br> $u_{${r}}=.....$`:this.question+=`<br>
          
          Calculer $u_{${r}}$.`,this.correction=`On calcule successivement les termes jusqu'à obtenir $u_{${r}}$ :`;for(let e=0;e<r;e++)this.correction+=`<br>$u_{${e+1}} = ${i}\\times ${$("u_{"+e+"}",s(e,!0))} ${l(n)}=
            ${i} \\times ${$(h(t,s(e,!0)))} ${l(n)} =
        ${$(i*t+n,s(e+1,!0))}$`,t=t*i+n;this.reponse=t;break;case"e":i=o(1,3)*u([-1,1]),n=u([-1,1]),t=o(1,3)*u([-1,1]),r=2,this.question=`Soit $(u_n)$ une suite définie par $u_0=${t}$ et pour tout $n\\in\\mathbb{N}$ par $u_{n+1} = ${i} ${b(n)} u_n^2$.`,this.interactif?this.question+=`<br>
        
        $u_{${r}}=.....$`:this.question+=`<br>
          
          Calculer $u_{${r}}$.`,this.correction=`En utilisant la relation de récurrence pour $n=0$, on obtient :<br>
       `;for(let e=0;e<r;e++)this.correction+=`<br> $u_{${e+1}} = ${i} ${b(n)} ${$("u_{"+e+"}",s(e,!0))}^2=`,this.correction+=`${i} ${b(n)} ${$(h(t,s(e,!0)))}^2 =
              ${$(f(i+n*t*t),s(e+1,!0))}$`,t=i+n*t*t;this.reponse=t;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{L as dateDePublication,Y as default,T as interactifReady,D as interactifType,V as refs,P as titre,Q as uuid};
