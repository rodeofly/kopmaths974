import{a as b,r as c,m as u,Y as p,f as r,d as q,s as n,ap as o,e as l,l as S}from"./embellissements-BYV7mIDn.js";import{a as f}from"./deprecatedFractions-D2cbyAQf.js";import{E as h}from"./Exercice-DtXhjCyI.js";import{p as d}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const N="Résoudre une équation avec une fonction de référence*",T=!0,w="qcm",J="27/12/2021",V="1380f",Y={"fr-fr":["can2F10"],"fr-ch":["1mCL3-1"]};class j extends h{constructor(){super(),this.nbQuestions=1,this.spacing=2}nouvelleVersion(){let s,a,t,e,$,x;for(let i=0,m=0;i<this.nbQuestions&&m<50;){switch(b([1,2,3,4,5,6])){case 1:e=c(-5,5,0),$=c(-5,5,0),t=q($-e),s=`L'ensemble des solutions $S$ de l'équation $x^2${r(e)}=${$}$ est :
                 `,t>0&&(t===1||t===4||t===9||t===16||t===25?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-${o(t)[0]}${n(1)};${n(1)}${o(t)[0]}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${o(t)[0]}\\}$`,statut:!1}]}:o(t)[1]===t?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-\\sqrt{${$-e}}${n(1)};${n(1)}\\sqrt{${$-e}}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{\\sqrt{${$-e}}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-${Math.sqrt(t)};${Math.sqrt(t)}\\}$`,statut:!0},{texte:`$S=\\{${Math.sqrt(t)}\\}$`,statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\{0\\}$",statut:!0},{texte:"$S=\\{1}\\}$",statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}),t<0&&(t===-1||t===-4||t===-9||t===-16||t===-25?this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-${Math.sqrt(-t)};${Math.sqrt(-t)}\\}$`,statut:!1},{texte:`$S=\\{-${Math.sqrt(-t)}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-\\sqrt{${-t}};\\sqrt{${-t}}\\}$`,statut:!1},{texte:`$S=\\{\\sqrt{${-t}}\\}$`,statut:!1}]}),x=d(this,i),this.interactif?s+=x.texte:s=`Résoudre dans $\\mathbb{R}$ :<br>
  
        $x^2${r(e)}=${$}$`,e>0?a=`On isole $x^2$ :<br>
            
            $\\begin{aligned}
           x^2${r(e)}&=${$}\\\\
           x^2${r(e)}-${u(e)}&=${$}-${u(e)}\\\\
           x^2&=${$-e}
           \\end{aligned}$`:a=`On isole $x^2$ :<br>
            
            $\\begin{aligned}
           x^2${r(e)}&=${$}\\\\
           x^2${r(e)}+${u(-e)}&=${$}+${u(-e)}\\\\
           x^2&=${$-e}
           \\end{aligned}$`,t>0&&(t===1||t===4||t===9||t===16||t===25?a+=`<br>L'équation est de la forme $x^2=k$ avec $k=${l(t)}>0$, donc l'équation a deux solutions : $-\\sqrt{${l(t)}}$ et $\\sqrt{${l(t)}}$.
              <br> Comme $-\\sqrt{${l(t)}}=-${o(t)[0]}$ et $\\sqrt{${t}}=${o(t)[0]}$ alors
              les solutions de l'équation peuvent s'écrire plus simplement : $-${o(t)[0]}$ et $${o(t)[0]}$.<br>
              Ainsi,  $S=\\{-${o(t)[0]}${n(1)};${n(1)}${o(t)[0]}\\}$.`:o(t)[1]!==t?a+=`<br>L'équation est de la forme $x^2=k$ avec $k=${l(t)}>0$, donc l'équation a deux solutions : $-\\sqrt{${l(t)}}$ et $\\sqrt{${l(t)}}$. <br>
                  Comme $-\\sqrt{${t}}=-${o(t)[0]}\\sqrt{${o(t)[1]}}$ et $\\sqrt{${t}}=${o(t)[0]}\\sqrt{${o(t)[1]}}$ alors
                  les solutions de l'équation peuvent s'écrire plus simplement : $-${o(t)[0]}\\sqrt{${o(t)[1]}}$ et $${o(t)[0]}\\sqrt{${o(t)[1]}}$.<br>
                  Ainsi,  $S=\\{-${o(t)[0]}\\sqrt{${o(t)[1]}}${n(1)};${n(1)}${o(t)[0]}\\sqrt{${o(t)[1]}}\\}$.`:a+=`<br>L'équation est de la forme $x^2=k$ avec $k=${$-e}>0$,
                  donc l'équation a deux solutions : $-\\sqrt{${$-e}}$ et $\\sqrt{${$-e}}$.<br>
                  Ainsi,  $S=\\{-\\sqrt{${$-e}}${n(1)};${n(1)}\\sqrt{${$-e}}\\}$.`),t===0&&(a+=`
            <br>L'équation est de la forme $x^2=k$ avec $k=${l(t)}$, alors l'équation a une solution : $0$.<br>
            Ainsi, $S=\\{0\\}$. `),t<0&&(a+=`
            <br>L'équation est de la forme $x^2=k$ avec $k=${l($-e)}$, alors l'équation n'a pas de solution.
              <br>Ainsi, $S=\\emptyset$. `),this.canEnonce=`Résoudre dans $\\mathbb{R}$ l'équation $x^2${r(e)}=${$}$.`,this.canReponseACompleter="";break;case 2:e=c(-5,5,0),$=c(-5,5,0),t=q(e-$),s=`L'ensemble des solutions $S$ de l'équation $-x^2${r(e)}=${$}$ est :
           `,t>0&&(t===1||t===4||t===9||t===16||t===25?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-${o(t)[0]}${n(1)};${n(1)}${o(t)[0]}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${o(t)[0]}\\}$`,statut:!1}]}:o(t)[1]===t?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-\\sqrt{${t}}${n(1)};${n(1)}\\sqrt{${t}}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{\\sqrt{${t}}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-${Math.sqrt(t)};${Math.sqrt(t)}\\}$`,statut:!0},{texte:`$S=\\{${Math.sqrt(t)}\\}$`,statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\{0\\}$",statut:!0},{texte:"$S=\\{1}\\}$",statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}),t<0&&(t===-1||t===-4||t===-9||t===-16||t===-25?this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-${Math.sqrt(-t)};${Math.sqrt(-t)}\\}$`,statut:!1},{texte:`$S=\\{-${Math.sqrt(-t)}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-\\sqrt{${-t}};\\sqrt{${-t}}\\}$`,statut:!1},{texte:`$S=\\{\\sqrt{${-t}}\\}$`,statut:!1}]}),x=d(this,i),this.interactif?s+=x.texte:s=`Résoudre dans $\\mathbb{R}$ :<br>
  
   $-x^2${r(e)}=${$}$`,e>0?a=`On isole $x^2$ :<br>
            
            $\\begin{aligned}
     -x^2${r(e)}&=${$}\\\\
     -x^2${r(e)}-${u(e)}&=${$}-${u(e)}\\\\
     x^2&=${e-$}
     \\end{aligned}$`:a=`On isole $x^2$ :<br>
  
            $\\begin{aligned}
     -x^2${r(e)}&=${$}\\\\
    - x^2${r(e)}+${u(-e)}&=${$}+${u(-e)}\\\\
     x^2&=${e-$}
     \\end{aligned}$`,t>0&&(t===1||t===4||t===9||t===16||t===25?a+=`<br>
  
              L'équation est de la forme $x^2=k$ avec $k=${l(t)}>0$, donc l'équation a deux solutions : $-\\sqrt{${l(t)}}$ et $\\sqrt{${l(t)}}$.
        <br> Comme $-\\sqrt{${l(t)}}=-${o(t)[0]}$ et $\\sqrt{${t}}=${o(t)[0]}$ alors
        les solutions de l'équation peuvent s'écrire plus simplement : $-${o(t)[0]}$ et $${o(t)[0]}$.<br>
        Ainsi,  $S=\\{-${o(t)[0]}${n(1)};${n(1)}${o(t)[0]}\\}$.`:o(t)[1]!==t?a+=`<br>
                L'équation est de la forme $x^2=k$ avec $k=${l(t)}>0$, donc l'équation a deux solutions : $-\\sqrt{${l(t)}}$ et $\\sqrt{${l(t)}}$. <br>
            Comme $-\\sqrt{${t}}=-${o(t)[0]}\\sqrt{${o(t)[1]}}$ et $\\sqrt{${t}}=${o(t)[0]}\\sqrt{${o(t)[1]}}$ alors
            les solutions de l'équation peuvent s'écrire plus simplement : $-${o(t)[0]}\\sqrt{${o(t)[1]}}$ et $${o(t)[0]}\\sqrt{${o(t)[1]}}$.<br>
            Ainsi,  $S=\\{-${o(t)[0]}\\sqrt{${o(t)[1]}}${n(1)};${n(1)}${o(t)[0]}\\sqrt{${o(t)[1]}}\\}$.`:a+=`<br>
                L'équation est de la forme $x^2=k$ avec $k=${t}>0$,
            donc l'équation a deux solutions : $-\\sqrt{${t}}$ et $\\sqrt{${t}}$.<br>
            Ainsi,  $S=\\{-\\sqrt{${t}}${n(1)};${n(1)}\\sqrt{${t}}\\}$.`),t===0&&(a+=`<br>
            L'équation est de la forme $x^2=k$ avec $k=${l(t)}$, alors l'équation a une solution : $0$.<br>
      Ainsi, $S=\\{0\\}$. `),t<0&&(a+=`<br>
            L'équation est de la forme $x^2=k$ avec $k=${l(t)}$, alors l'équation n'a pas de solution.
        <br>Ainsi, $S=\\emptyset$. `),this.canEnonce=`Résoudre dans $\\mathbb{R}$ l'équation $-x^2${r(e)}=${$}$.`,this.canReponseACompleter="";break;case 3:e=c(-5,5,0),$=c(-5,5),t=q($-e),s=`L'ensemble des solutions $S$ de l'équation $\\sqrt{x}${r(e)}=${$}$ est :
                       `,t>0&&(t!==1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t**2}\\}$`,statut:!0},{texte:`$S=\\{${2*t}\\}$`,statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${2*t}\\}$`,statut:!1}]}),t<0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{\\sqrt{${-t}}\\}$`,statut:!1},{texte:`$S=\\{${t**2}\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\{0\\}$",statut:!0},{texte:`$S=\\{${t+1}\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}),x=d(this,i),this.interactif?s+=x.texte:s=`Résoudre dans $[0${n(1)};${n(1)}+\\infty[$ :<br>
  
               $\\sqrt{x}${r(e)}=${$}$`,e>0?a=`
            
            On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
              $\\begin{aligned}
              \\sqrt{x}${r(e)}&=${$}\\\\
              \\sqrt{x}${r(e)}-${u(e)}&=${$}-${u(e)}\\\\
              \\sqrt{x}&=${$-e}
                             \\end{aligned}$<br>`:a=`
            
            On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                             $\\begin{aligned}
                             \\sqrt{x}${r(e)}&=${$}\\\\
                             \\sqrt{x}${r(e)}+${u(-e)}&=${$}+${u(-e)}\\\\
                             \\sqrt{x}&=${$-e}
                                            \\end{aligned}$<br>`,$-e<0&&(a+=`
            L'équation est de la forme $\\sqrt{x}=k$ avec $k=${t}$. Comme $${t}<0$ alors l'équation n'admet pas de solution. <br>
  Ainsi,   $S=\\emptyset$.<br>
  `),($-e>0||$-e===0)&&(a+=`
            L'équation est de la forme $\\sqrt{x}=k$ avec $k=${$-e}$. Comme $${$-e}\\geqslant 0$ alors l'équation admet une solution : $${t}^2=${t**2}$.<br>
  Ainsi $S=\\{${t**2}\\}$.
  `),this.canEnonce=`Résoudre dans $[0${n(1)};${n(1)}+\\infty[$ l'équation $\\sqrt{x}${r(e)}=${$}$.`,this.canReponseACompleter="";break;case 4:e=c(-5,5,0),$=c(-5,5),t=q(e-$),s=`L'ensemble des solutions $S$ de l'équation $${e}-\\sqrt{x}=${$}$ est :
                           `,t>0&&(t!==1?t===2?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t**2}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t**2}\\}$`,statut:!0},{texte:`$S=\\{${2*t}\\}$`,statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${2*t}\\}$`,statut:!1}]}),t<0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{\\sqrt{${-t}}\\}$`,statut:!1},{texte:`$S=\\{${t**2}\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\{0\\}$",statut:!0},{texte:`$S=\\{${t+1}\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}),x=d(this,i),this.interactif?s+=x.texte:s=`Résoudre dans $[0${n(1)};${n(1)}+\\infty[$ :<br>
  
                  $-\\sqrt{x}${r(e)}=${$}$`,e>0?a=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                  $\\begin{aligned}
                  ${e}-\\sqrt{x}&=${$}\\\\
                  ${e}-\\sqrt{x}-${u(e)}&=${$}-${u(e)}\\\\
                  -\\sqrt{x}&=${$-e}\\\\
                  \\sqrt{x}&=${e-$}
                                 \\end{aligned}$<br>`:a=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                                 $\\begin{aligned}
                                 ${e}-\\sqrt{x}&=${$}\\\\
                                 ${e}-\\sqrt{x}+${u(-e)}&=${$}+${u(-e)}\\\\
                                 -\\sqrt{x}&=${$-e}\\\\
                                 \\sqrt{x}&=${e-$}
                                                \\end{aligned}$<br>`,t<0&&(a+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${t}$. Comme $${t}<0$ alors l'équation n'admet pas de solution. <br>
  Ainsi,   $S=\\emptyset$.<br>
  `),(t>0||t===0)&&(a+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${e-$}$. Comme $${e-$}\\geqslant0$ alors l'équation admet une solution : $${t}^2=${t**2}$.<br>
     Ainsi $S=\\{${t**2}\\}$.
    `),this.canEnonce=`Résoudre dans $[0${n(1)};${n(1)}+\\infty[$ l'équation $-\\sqrt{x}${r(e)}=${$}$.`,this.canReponseACompleter="";break;case 5:e=c(-10,10,0),$=c(-10,10),t=$-e,s=`L'ensemble des solutions $S$ de l'équation $\\dfrac{1}{x}${r(e)}=${$}$ est :
                         `,t!==0&&(t===1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${f(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${f(1,-t)}\\right\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}:t===-1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${f(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${f(1,-t)}\\right\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${f(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${f(1,-t)}\\right\\}$`,statut:!1},{texte:`$S=\\left\\{${t}\\right\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:"$S=\\left\\{0\\right\\}$",statut:!1},{texte:"$S=\\left\\{-1\\right\\}$",statut:!1}]}),x=d(this,i),this.interactif?s+=x.texte:s=`
                       Résoudre dans $\\mathbb{R}^*$ :<br>
  
                        $\\dfrac{1}{x}${r(e)}=${$}$`,a=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
              $\\begin{aligned}
              \\dfrac{1}{x}${r(e)}&=${$}\\\\
              \\dfrac{1}{x}${r(e)}+${u(p(-e))}&=${$}+${u(-e)}\\\\
              \\dfrac{1}{x}&=${$-e}
                                          \\end{aligned}$<br>`,t===0&&(a+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${t}$. Donc l'équation n'admet pas de solution.<br>
  Ainsi,   $S=\\emptyset$.
  `),t!==0&&(a+=`$k=${t}$ et $${t}\\neq 0$, donc l'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${t}$. Donc l'équation admet une solution :
  $${f(1,t)}$.<br>
  Ainsi $S=\\left\\{${f(1,t)}\\right\\}$.
  `),this.canEnonce=`Résoudre dans $\\mathbb{R}^*$ l'équation $\\dfrac{1}{x}${r(e)}=${$}$.`,this.canReponseACompleter="";break;case 6:default:e=c(-10,10,0),$=c(-10,10),t=e-$,s=`L'ensemble des solutions $S$ de l'équation $${e}-\\dfrac{1}{x}=${$}$ est :
                             `,t!==0&&(t===1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${f(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${f(1,-t)}\\right\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}:t===-1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${f(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${f(1,-t)}\\right\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${f(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${f(1,-t)}\\right\\}$`,statut:!1},{texte:`$S=\\left\\{${t}\\right\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:"$S=\\left\\{0\\right\\}$",statut:!1},{texte:"$S=\\left\\{-1\\right\\}$",statut:!1}]}),x=d(this,i),this.interactif?s+=x.texte:s=`
                           Résoudre dans $\\mathbb{R}^*$ :<br>
  
                           $${e}-\\dfrac{1}{x}=${$}$`,a=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
                  $\\begin{aligned}
                  ${e}-\\dfrac{1}{x}&=${$}\\\\
                  ${e}-\\dfrac{1}{x}+${u(p(-e))}&=${$}+${u(p(-e))}\\\\
                  \\dfrac{1}{x}&=${e-$}
                                              \\end{aligned}$<br>`,t===0&&(a+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${t}$. Donc l'équation n'admet pas de solution.<br>
      Ainsi,   $S=\\emptyset$.
      `),t!==0&&(a+=`$k=${t}$ et $${t}\\neq 0$, donc l'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${t}$. Donc l'équation admet une solution :
      $${f(1,t)}$.<br>
      Ainsi $S=\\left\\{${f(1,t)}\\right\\}$.
      `),this.canEnonce=`Résoudre dans $\\mathbb{R}^*$ l'équation $${e}-\\dfrac{1}{x}=${$}$.`,this.canReponseACompleter="";break}this.questionJamaisPosee(i,t,e,$)&&(this.listeQuestions[i]=s,this.listeCorrections[i]=a,S(this),i++),m++}}}export{J as dateDePublication,j as default,T as interactifReady,w as interactifType,Y as refs,N as titre,V as uuid};
