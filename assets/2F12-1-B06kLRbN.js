import{g as R,af as k,r as b,a as q,s as o,f as n,m as r,e as d,Y as g,F,ap as a,l as D}from"./embellissements-BYV7mIDn.js";import{a as l}from"./deprecatedFractions-D2cbyAQf.js";import{E as O}from"./Exercice-DtXhjCyI.js";import{a as M}from"./questionMathLive-DdRvWqlN.js";import{h as Q}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const a$="Résoudre algébriquement une équation $f(x)=k$ avec une fonction de référence",n$="07/01/2022",o$="16/05/2024",l$=!0,u$="mathLive",d$="de0d1",m$={"fr-fr":["2F12-1"],"fr-ch":[]};class b$ extends O{constructor(){super(),this.besoinFormulaire2Numerique=["Choix des questions",3,`1 : Équation directe
2 : Équation indirecte
3 : Mélange`],this.sup=1,this.sup2=1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.nbQuestions=2,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : x^2=k","2 : sqrt(x)=k","3 : 1/x=k","4 : x^3=k","5 : Mélange"].join(`
`)]}nouvelleVersion(){const C=R({saisie:this.sup,min:1,max:4,melange:5,defaut:1,nbQuestions:this.nbQuestions}),v=k(C,this.nbQuestions);let p;this.sup2===1?p=k([0],this.nbQuestions):this.sup2===2?p=k([1,2,3],this.nbQuestions):p=k([0,1,2,3],this.nbQuestions);for(let f=0,h,y,s,$,t,e,m,x,L,S,c,i,u,A=0;f<this.nbQuestions&&A<50;){switch(v[f]){case 1:switch(p[f]){case 0:s=b(0,15)**2,$=0,e=q([q([2,3,5,7,10,11,13,15,17,19,21,23,26])*q([-1,1]),s]),c=`Résoudre dans $\\mathbb{R}$ :<br>
              ${o(50)} $x^2=${e}$`,i="",this.correctionDetaillee&&(i+=`L'équation $x^2=k$ admet :<br>
                $\\bullet~$ deux solutions lorsque $k>0$ : $-\\sqrt{k}$ et $\\sqrt{k}$  ;<br>
                $\\bullet~$ une unique solution égale à $0$ lorsque $k=0$ ; <br>
                $\\bullet~$ aucune solution lorsque $k<0$.<br><br>
        `),e>0?(i+=`L'équation est de la forme $x^2=k$ avec $k=${e}$. Comme  $${e}>0$ alors l'équation admet deux solutions : $-\\sqrt{${e}}$ et $\\sqrt{${e}}$.<br>
                `,e===s?(u=`\\{-${Math.sqrt(e)};${Math.sqrt(e)}\\}`,i+=`Comme $-\\sqrt{${e}}=-${Math.sqrt(e)}$ et $\\sqrt{${e}}=${Math.sqrt(e)}$ alors
                les solutions de l'équation peuvent s'écrire plus simplement : $-${Math.sqrt(e)}$ et $${Math.sqrt(e)}$.<br>
                Ainsi,  $S=${r(`\\{-${Math.sqrt(e)}${o(1)};${o(1)}${Math.sqrt(e)}\\}`)}$.`):(u=`\\{-\\sqrt{${e}};\\sqrt{${e}}\\}`,i+=`Ainsi,  $S=${r(`\\{-\\sqrt{${e}};\\sqrt{${e}}\\}`)}$.`)):e===0?(u="\\{0\\}",i+=`L'équation est de la forme $x^2=k$ avec $k=${e}$. Comme $k=${e}$ alors L'équation admet une unique solution : $0$.<br>
                Ainsi, $S=${r("\\{0\\}")}$.`):(i+=`L'équation est de la forme $x^2=k$ avec $k=${e}$. Comme $${e}<0$, alors l'équation n'admet aucune solution.<br>
                  Ainsi, $S=${r("\\emptyset")}$.`,u="\\emptyset");break;case 1:$=b(-15,15,0),s=b(0,15)**2,e=q([q([2,3,5,7,10,11,13,15,17,19,21,23,26])*q([-1,1]),s]),t=e+$,c=`Résoudre dans $\\mathbb{R}$ :<br>
              ${o(50)} $x^2${n($)}=${t}$`,i="On isole $x^2$ dans le membre de gauche pour obtenir une équation du type $x^2=k$.<br> ",$>0?i+=`$\\begin{aligned}
             x^2${n($)}&=${t}\\\\
             x^2${n($)}-${r($)}&=${t}-${r($)}\\\\
             x^2&=${t-$}
             \\end{aligned}$`:i+=`$\\begin{aligned}
             x^2${n($)}&=${t}\\\\
             x^2${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
             x^2&=${t-$}
             \\end{aligned}$`,e>0?e===s?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(e,0)}$. Comme $${d(e,0)}>0$,  l'équation a deux solutions : $-\\sqrt{${d(e,0)}}$ et $\\sqrt{${d(e,0)}}$.
                <br> Comme $-\\sqrt{${d(e,0)}}=-${a(e)[0]}$ et $\\sqrt{${e}}=${a(e)[0]}$ alors
                les solutions de l'équation peuvent s'écrire plus simplement : $-${a(e)[0]}$ et $${a(e)[0]}$.<br>
                Ainsi,  $S=${r(`\\{-${a(e)[0]}${o(1)};${o(1)}${a(e)[0]}\\}`)}$.`,u=`\\{-${a(e)[0]};${a(e)[0]}\\}`):a(e)[1]!==e?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(e,0)}$. Comme $${d(e,0)}>0$, l'équation a deux solutions : $-\\sqrt{${d(e,0)}}$ et $\\sqrt{${d(e,0)}}$. <br>
                    Comme $-\\sqrt{${e}}=-${a(e)[0]}\\sqrt{${a(e)[1]}}$ et $\\sqrt{${e}}=${a(e)[0]}\\sqrt{${a(e)[1]}}$ alors
                    les solutions de l'équation peuvent s'écrire plus simplement : $-${a(e)[0]}\\sqrt{${a(e)[1]}}$ et $${a(e)[0]}\\sqrt{${a(e)[1]}}$.<br>
                    Ainsi,  $S=${r(`\\{-${a(e)[0]}\\sqrt{${a(e)[1]}}${o(1)};${o(1)}${a(e)[0]}\\sqrt{${a(e)[1]}}\\}`)}$.`,u=`\\{-${a(e)[0]}\\sqrt{${a(e)[1]}};${a(e)[0]}\\sqrt{${a(e)[1]}}\\}`):(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${t-$}$. Comme $${t-$}>0$, l'équation a deux solutions : $-\\sqrt{${t-$}}$ et $\\sqrt{${t-$}}$.<br>
                    Ainsi,  $S=${r(`\\{-\\sqrt{${t-$}}${o(1)};${o(1)}\\sqrt{${t-$}}\\}`)}$.`,u=`\\{-\\sqrt{${t-$}};\\sqrt{${t-$}}\\}`):e===0?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(e,0)}$, alors l'équation a une solution : $0$.<br>
              Ainsi, $S=${r("\\{0\\}")}$. `,u="\\{0\\}"):(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(t-$,0)}$. Comme $${d(t-$,0)}<0$, l'équation n'a pas de solution.
                <br>Ainsi, $S=${r("\\emptyset")}$. `,u="\\emptyset");break;case 2:$=b(-15,15,0),s=b(0,15)**2,e=q([q([2,3,5,7,10,11,13,15,17,19,21,23,26])*q([-1,1]),s]),t=$-e,c=`Résoudre dans $\\mathbb{R}$ :<br>
              ${o(50)} $-x^2${n($)}=${t}$`,i="On isole $x^2$ dans le membre de gauche pour obtenir une équation du type $x^2=k$.<br> ",$>0?i+=`$\\begin{aligned}
             -x^2+${$}&=${t}\\\\
             -x^2${n($)}-${r($)}&=${t}-${r($)}\\\\
             -x^2&=${t-$}\\\\
             x^2&=${$-t}
             \\end{aligned}$`:i+=`$\\begin{aligned}
             -x^2${n($)}&=${t}\\\\
             -x^2${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
             -x^2&=${t-$}\\\\
             x^2&=${$-t}
             \\end{aligned}$`,e>0?e===s?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(e,0)}$. Comme $${d(e,0)}>0$, l'équation a deux solutions : $-\\sqrt{${d(e,0)}}$ et $\\sqrt{${d(e,0)}}$.
                <br>  Comme $-\\sqrt{${d(e,0)}}=-${a(e)[0]}$ et $\\sqrt{${e}}=${a(e)[0]}$ alors
                les solutions de l'équation peuvent s'écrire plus simplement : $-${a(e)[0]}$ et $${a(e)[0]}$.<br>
                Ainsi,  $S=${r(`\\{-${a(e)[0]}${o(1)};${o(1)}${a(e)[0]}\\}`)}$.`,u=`\\{-${a(e)[0]};${a(e)[0]}\\}`):a(e)[1]!==e?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(e,0)}$. Comme $${d(e,0)}>0$, l'équation a deux solutions : $-\\sqrt{${d(e,0)}}$ et $\\sqrt{${d(e,0)}}$.<br>Comme $-\\sqrt{${e}}=-${a(e)[0]}\\sqrt{${a(e)[1]}}$ et $\\sqrt{${e}}=${a(e)[0]}\\sqrt{${a(e)[1]}}$ alors
                    les solutions de l'équation peuvent s'écrire plus simplement : $-${a(e)[0]}\\sqrt{${a(e)[1]}}$ et $${a(e)[0]}\\sqrt{${a(e)[1]}}$.<br>
                    Ainsi,  $S=${r(`\\{-${a(e)[0]}\\sqrt{${a(e)[1]}}${o(1)};${o(1)}${a(e)[0]}\\sqrt{${a(e)[1]}}\\}`)}$.`,u=`\\{-${a(e)[0]}\\sqrt{${a(e)[1]}};${a(e)[0]}\\sqrt{${a(e)[1]}}\\}`):(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(e,0)}$. Comme $${d(e,0)}>0$, alors l'équation a deux solutions : $-\\sqrt{${d(e,0)}}$ et $\\sqrt{${d(e,0)}}$.<br>
                    Ainsi,  $S=${r(`\\{-\\sqrt{${e}}${o(1)};${o(1)}\\sqrt{${e}}\\}`)}$.`,u=`\\{-\\sqrt{${e}};\\sqrt{${e}}\\}`):e===0?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(e,0)}$, donc l'équation a une solution : $0$.<br>
              Ainsi, $S=${r("\\{0\\}")}$. `,u="\\{0\\}"):(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d($-t)}$. Comme $${d($-t)}<0$, l'équation n'a pas de solution.
                <br> Ainsi, $S=${r("\\emptyset")}$. `,u="\\emptyset");break;case 3:default:s=b(-10,10,[-1,0,1]),$=b(-10,10,0),t=b(-10,10,0),e=(t-$)/s,x=new F(t-$,s),c=`Résoudre dans $\\mathbb{R}$ :<br>
              ${o(50)} $${s}x^2${n($)}=${t}$`,i="On isole $x^2$ dans le membre de gauche pour obtenir une équation du type $x^2=k$.<br> ",$>0?i+=`$\\begin{aligned}
              ${s}x^2${n($)}&=${t}\\\\
              ${s}x^2${n($)}-${r($)}&=${t}-${r($)}\\\\
              ${s}x^2&=${t-$}\\\\
                         x^2&=${x.texFractionSimplifiee}
             \\end{aligned}$`:i+=`$\\begin{aligned}
             ${s}x^2${n($)}&=${t}\\\\
             ${s}x^2${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
             ${s}x^2&=${t-$}\\\\
                        x^2&=${x.texFractionSimplifiee}
            \\end{aligned}$`,e>0?t-$===s||t-$===4*s||t-$===9*s||t-$===16*s||t-$===25*s?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${d(e,0)}$. Comme $${d(e,0)}>0$, alors l'équation a deux solutions : $-\\sqrt{${d(e,0)}}$ et $\\sqrt{${d(e,0)}}$.
                <br>  Comme $-\\sqrt{${d(e,0)}}=-${a(e)[0]}$ et $\\sqrt{${e}}=${a(e)[0]}$ alors
                les solutions de l'équation peuvent s'écrire plus simplement : $-${a(e)[0]}$ et $${a(e)[0]}$.
                <br> Ainsi, $S=${r(`\\left\\{-${a(e)[0]}${o(1)};${o(1)}${a(e)[0]}\\right\\}`)}$.`,u=`\\{-${a(e)[0]};${a(e)[0]}\\}`):t-$===4&&s===9||t-$===9&&s===4||t-$===16&&s===9||t-$===9&&s===16?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${x.texFractionSimplifiee}$. Comme $${l(t-$,s)}>0$, alors l'équation a deux solutions : $-\\sqrt{${l(t-$,s)}}$ et $\\sqrt{${l(t-$,s)}}$.
                  <br>  Comme $-\\sqrt{${x.texFractionSimplifiee}}=-\\dfrac{${a(t-$)[0]}}{${a(s)[0]}}$ et $\\sqrt{${x.texFractionSimplifiee}}=\\dfrac{${a(t-$)[0]}}{${a(s)[0]}}$ alors
                  les solutions de l'équation peuvent s'écrire plus simplement : $-\\dfrac{${a(t-$)[0]}}{${a(s)[0]}}$ et $\\dfrac{${a(t-$)[0]}}{${a(s)[0]}}$.<br>
                  Ainsi, $S=${r(`\\left\\{-\\dfrac{${a(t-$)[0]}}{${a(s)[0]}}${o(1)};${o(1)}\\dfrac{${a(t-$)[0]}}{${a(s)[0]}}\\right\\}`)}$`,u=`\\{-\\dfrac{${a(t-$)[0]}}{${a(s)[0]}};\\dfrac{${a(t-$)[0]}}{${a(s)[0]}}\\}`):(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${x.texFractionSimplifiee}$. Comme $${x.texFractionSimplifiee}>0$, alors l'équation a deux solutions :
                  $-\\sqrt{${x.texFractionSimplifiee}}$ et $\\sqrt{${x.texFractionSimplifiee}}$. <br>
                  Ainsi, $S=${r(`\\left\\{-\\sqrt{${x.texFractionSimplifiee}}${o(1)};${o(1)}\\sqrt{${x.texFractionSimplifiee}}\\right\\}`)}$`,u=`\\{-\\sqrt{${x.texFractionSimplifiee}};\\sqrt{${x.texFractionSimplifiee}}\\}`):t-$===0?(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=0$. Alorsl'équation a une solution : $0$.<br>
                Ainsi, $S=${r("\\{0\\}")}$. `,u="\\{0\\}"):(i+=`<br>L'équation est de la forme $x^2=k$ avec $k=${x.texFractionSimplifiee}$. Comme $${x.texFractionSimplifiee}<0$, alors l'équation n'a pas de solution. <br>
                Ainsi, $S=${r("\\emptyset")}$. `,u="\\emptyset");break}break;case 2:switch(p[f]){case 0:s=0,$=0,e=b(-25,25,0),c=`Résoudre dans $[0${o(1)};${o(1)}+\\infty[$ :<br>
                            ${o(50)} $\\sqrt{x}=${e}$`,i="",this.correctionDetaillee&&(i+=`Pour tout réel $x$ positif ou nul, l'équation $\\sqrt{x}=k$ admet :<br>
                $\\bullet~$ une solution  si $k\\geqslant 0$ : $k^2$ ;<br>
                $\\bullet~$  aucune solution si $k<0$.<br>
               `),e<0?(i+=`L'équation est de la forme $\\sqrt{x}=k$. Comme $k=${e}$ et $${e}<0$ alors l'équation n'admet pas de solution.<br>
              Ainsi,   $S=${r("\\emptyset")}$.
              `,u="\\emptyset"):(i+=`$k=${e}$ et $${e}>0$ donc l'équation admet une solution : $${e}^2=${e**2}$.<br>
               Ainsi $S=${r(`\\{${e**2}\\}`)}$.
              `,u=`\\{${e**2}\\}`);break;case 1:s=0,$=b(-10,10,0),t=b(-10,10),e=t-$,c=`Résoudre dans $[0${o(1)};${o(1)}+\\infty[$ :<br>
                ${o(50)} $\\sqrt{x}${n($)}=${t}$`,$>0?i=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                $\\begin{aligned}
                \\sqrt{x}${n($)}&=${t}\\\\
                \\sqrt{x}${n($)}-${r($)}&=${t}-${r($)}\\\\
                \\sqrt{x}&=${t-$}
                               \\end{aligned}$<br>`:i=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                               $\\begin{aligned}
                               \\sqrt{x}${n($)}&=${t}\\\\
                               \\sqrt{x}${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
                               \\sqrt{x}&=${t-$}
                                              \\end{aligned}$<br>`,t-$<0?(i+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${e}$. Comme $${e}<0$ alors l'équation n'admet pas de solution. <br>
Ainsi,   $S=${r("\\emptyset")}$.<br>
`,u="\\emptyset"):(i+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${t-$}$. Comme $${t-$}\\geqslant 0$ alors l'équation admet une solution : $${e}^2=${e**2}$.<br>
   Ainsi $S=${r(`\\{${e**2}\\}`)}$.
  `,u=`\\{${e**2}\\}`);break;case 2:s=0,$=b(-10,10,0),t=b(-10,10),e=$-t,c=`Résoudre dans $[0${o(1)};${o(1)}+\\infty[$ :<br>
                ${o(50)} $-\\sqrt{x}${n($)}=${t}$`,$>0?i=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                $\\begin{aligned}
                -\\sqrt{x}${n($)}&=${t}\\\\
                -\\sqrt{x}${n($)}-${r($)}&=${t}-${r($)}\\\\
                -\\sqrt{x}&=${t-$}\\\\
                \\sqrt{x}&=${$-t}
                               \\end{aligned}$<br>`:i=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                               $\\begin{aligned}
                               -\\sqrt{x}${n($)}&=${t}\\\\
                               -\\sqrt{x}${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
                               -\\sqrt{x}&=${t-$}\\\\
                               \\sqrt{x}&=${$-t}
                                              \\end{aligned}$<br>`,e<0?(i+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${e}$. Comme $${e}<0$ alors l'équation n'admet pas de solution. <br>
Ainsi,   $S=${r("\\emptyset")}$.<br>
`,u="\\emptyset"):(i+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${$-t}$. Comme $${$-t}\\geqslant0$ alors l'équation admet une solution : $${e}^2=${e**2}$.<br>
   Ainsi $S=${r(`\\{${e**2}\\}`)}$.
  `,u=`\\{${e**2}\\}`);break;case 3:default:s=b(-10,10,[0,-1,1]),$=b(-10,10,0),t=b(-10,10),e=(t-$)/s,c=`Résoudre dans $[0${o(1)};${o(1)}+\\infty[$ :<br>
                ${o(50)} $${s}\\sqrt{x}${n($)}=${t}$`,$>0?i=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                $\\begin{aligned}
                ${s}\\sqrt{x}${n($)}&=${t}\\\\
                ${s}\\sqrt{x}${n($)}-${r($)}&=${t}-${r($)}\\\\
                ${s}\\sqrt{x}&=${t-$}\\\\
                \\sqrt{x}&=${l(t-$,s)}
                               \\end{aligned}$<br>`:i=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                               $\\begin{aligned}
                               ${s}\\sqrt{x}${n($)}&=${t}\\\\
                               ${s}\\sqrt{x}${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
                               ${s}\\sqrt{x}&=${t-$}\\\\
                               \\sqrt{x}&=${l(t-$,s)}
                                              \\end{aligned}$<br>`,e<0?(i+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${l(t-$,s)}$. Comme $${l(t-$,s)}<0$ alors l'équation n'admet pas de solution. <br>
Ainsi,    $S=${r("\\emptyset")}$.<br>
`,u="\\emptyset"):(i+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${l(t-$,s)}$. Comme $${l(t-$,s)}\\geqslant0$ alors l'équation admet une solution : $\\left(${l(t-$,s)}\\right)^2=${l((t-$)**2,s**2)}$.<br>
   Ainsi $S=${r(`\\left\\{${l((t-$)**2,s**2)}\\right\\}`)}$.
  `,u=`\\{${l((t-$)**2,s**2)}\\}`);break}break;case 3:switch(p[f]){case 0:$=0,s=0,e=q([-3,-7,-6,3,6,7,9,-9,0,-11,11,-12,12,-8,8,-13,13]),c=`Résoudre dans $\\mathbb{R}^*$ :<br>
                ${o(50)} $\\dfrac{1}{x}=${e}$`,i="",this.correctionDetaillee&&(i+=`L'équation $\\dfrac{1}{x}=k$ admet :<br>
                $\\bullet~$ si $k\\neq 0$, l'équation a une unique solution  : $\\dfrac{1}{k}$.<br>
                $\\bullet~$ si $k= 0$, l'équation n'admet pas de solution.<br>`),i+="",e===0?(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${e}$. Comme $k=${e}$, alors l'équation n'admet pas de solution.<br>
              Ainsi,   $S=${r("\\emptyset")}$.
              `,u="\\emptyset"):(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${e}$. Comme $${e}\\neq 0$ alors l'équation admet une solution :
                $${l(1,e)}$.<br>
               Ainsi $S=${r(`\\left\\{${l(1,e)}\\right\\}`)}$.
              `,u=`\\{${l(1,e)}\\}`);break;case 1:s=0,e=q([-3,-7,-6,3,6,7,9,-9,0,-11,11,-12,12,-8,8,-13,13]),$=b(-10,10,0),t=e+$,c=`Résoudre dans $\\mathbb{R}^*$ :<br>
                   ${o(50)} $\\dfrac{1}{x}${n($)}=${t}$`,i="",$>0?i+=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
                    $\\begin{aligned}
                    \\dfrac{1}{x}${n($)}&=${t}\\\\
                    \\dfrac{1}{x}${n($)}-${r($)}&=${t}-${r($)}\\\\
                    \\dfrac{1}{x}&=${t-$}
                                                \\end{aligned}$<br>`:i+=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
                                                $\\begin{aligned}
                                                \\dfrac{1}{x}${n($)}&=${t}\\\\
                                                \\dfrac{1}{x}${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
                                                \\dfrac{1}{x}&=${t-$}
                                                                            \\end{aligned}$<br>`,e===0?(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${e}$. Donc l'équation n'admet pas de solution.<br>
                 Ainsi,   $S=${r("\\emptyset")}$.
                 `,u="\\emptyset"):(i+=`$k=${e}$ et $${e}\\neq 0$, donc l'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${e}$. Donc l'équation admet une solution :
                   $${l(1,e)}$.<br>
                  Ainsi $S=${r(`\\left\\{${l(1,e)}\\right\\}`)}$.
                 `,u=`\\{${l(1,e)}\\}`);break;case 2:L=[[5,0],[3,0],[10,5],[6,3],[2,14],[1,7],[2,9],[3,9],[9,3],[2,7],[4,3],[10,6],[5,3],[4,7],[10,3],[6,9],[4,2]],S=q(L),s=S[0]*q([-1,1]),$=S[1]*q([-1,1]),e=$/s,c=`Résoudre dans $\\mathbb{R}^*$ :<br>
                   ${o(50)} $\\dfrac{${s}}{x}=${$}$`,i="",i+=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
                    $\\begin{aligned}
                    \\dfrac{${s}}{x}&=${$}\\\\
                    \\dfrac{1}{x}&=${l($,s)}${o(20)}\\text{En divisant par } ${s} \\text{ dans chaque membre}\\\\
                                                \\end{aligned}$<br>`,e===0?(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${e}$. Donc l'équation n'admet pas de solution.<br>
                 Ainsi,   $S=${r("\\emptyset")}$.
                 `,u="\\emptyset"):e%1===0?(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${l($,s)}$. Donc l'équation admet une solution :
                   $\\dfrac{1}{${l($,s)}}$.<br>
                  Ainsi $S=${r(`\\left\\{${l(s,$)}\\right\\}`)}$.
                 `,u=`\\{${l(s,$)}\\}`):(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${l($,s)}$. Donc l'équation admet une solution :
                 $\\dfrac{1}{${l($,s)}}=${l(s,$)}$.<br>
                Ainsi $S=${r(`\\left\\{${l(s,$)}\\right\\}`)}$.
               `,u=`\\{${l(s,$)}\\}`);break;case 3:default:s=b(-10,10,0),$=b(-10,10,0),e=q([-3,-7,-6,3,6,7,9,-9,0,-11,11,-12,12,-8,8,-13,13]),t=s*e+$,c=`Résoudre dans $\\mathbb{R}^*$ :<br>
                   ${o(50)} $\\dfrac{${s}}{x}${n($)}=${t}$`,i="",$>0?i+=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
                    $\\begin{aligned}
                    \\dfrac{${s}}{x}${n($)}&=${t}\\\\
                    \\dfrac{${s}}{x}${n($)}-${r($)}&=${t}-${r($)}\\\\
                    \\dfrac{${s}}{x}&=${t-$}\\\\
                    \\dfrac{1}{x}&=${l(t-$,s)}${o(20)}\\text{En divisant par } ${s} \\text{ dans chaque membre}
                                                \\end{aligned}$<br>`:i+=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
                                                $\\begin{aligned}
                                                \\dfrac{${s}}{x}${n($)}&=${t}\\\\
                                                \\dfrac{${s}}{x}${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
                                                \\dfrac{${s}}{x}&=${t-$}\\\\
                    \\dfrac{1}{x}&=${l(t-$,s)}${o(20)}\\text{En divisant par } ${s} \\text{ dans chaque membre}\\\\
                                                                            \\end{aligned}$<br>`,e===0?(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${l(t-$,s)}$. Donc l'équation n'admet pas de solution.<br>
                 Ainsi,   $S=${r("\\emptyset")}$.
                 `,u="\\emptyset"):e%1===0?(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${l(t-$,s)}$. Donc l'équation  admet une solution :
                   $\\dfrac{1}{${l(t-$,s)}}$.<br>
                  Ainsi $S=${r(`\\left\\{${l(s,t-$)}\\right\\}`)}$.
                 `,u=`\\{${l(s,t-$)}\\}`):(i+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${l(t-$,s)}$. Donc l'équation  admet une solution :
                 $\\dfrac{1}{${l(t-$,s)}}=${l(s,t-$)}$.<br>
                Ainsi $S=${r(`\\left\\{${l(s,t-$)}\\right\\}`)}$.
               `,u=`\\{${l(s,t-$)}\\}`);break}break;case 4:default:switch(p[f]){case 0:s=0,$=0,m=q([-10,-5,-4,-3,-2,-1,0,1,2,3,4,5,10]),e=m**3,c=`Résoudre dans $\\mathbb{R}$ :<br>
                ${o(50)} $x^3=${e}$`,i="",this.correctionDetaillee&&(i+=`Pour tout réel $k$, l'équation $x^3=k$ admet pour unique solution le nombre dont le cube est égal à $k$. <br>
                On peut noter ce nombre : $\\sqrt[3]{k}$. <br>`),i+=`L'équation est de la forme $x^3=k$ avec $k=${e}$. <br>
              Le nombre dont le cube est $${e}$ est $${m}$ car $${g(m)}^3=${e}$.<br>
              Ainsi,   $S=\\{${m}\\}$.
              `,u=`\\{${m}\\}`;break;case 1:s=0,$=b(-10,10,0),m=q([-10,-5,-4,-3,-2,-1,0,1,2,3,4,5,10]),e=m**3,t=e+$,c=`Résoudre dans $\\mathbb{R}$ :<br>
                   ${o(50)} $x^3${n($)}=${t}$`,i="",$>0?i+=`On isole $x^3$ dans le membre de gauche pour obtenir une équation du type $x^3=k$.<br>
                    $\\begin{aligned}
                    x^3${n($)}&=${t}\\\\
                    x^3${n($)}-${r($)}&=${t}-${r($)}\\\\
                    x^3&=${t-$}
                                                \\end{aligned}$<br>`:i+=`On isole $x^3$ dans le membre de gauche pour obtenir une équation du type $x^3=k$.<br>
                                                $\\begin{aligned}
                                                x^3${n($)}&=${t}\\\\
                                                x^3${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
                                                x^3&=${t-$}
                                                                            \\end{aligned}$<br>`,i+=`L'équation est de la forme $x^3=k$ avec $k=${e}$. <br>
              Le nombre dont le cube est $${e}$ est $${m}$ car $${g(m)}^3=${e}$.<br>
              Ainsi,   $S=\\{${m}\\}$.
              `,u=`\\{${m}\\}`;break;case 2:s=b(-10,10,[0,-1,1]),$=0,m=q([-10,-5,-4,-3,-2,-1,0,1,2,3,4,5,10]),e=m**3,t=e*s,c=`Résoudre dans $\\mathbb{R}$ :<br>
                     ${o(50)} $${s}x^3=${t}$`,i="",i+=`On isole $x^3$ dans le membre de gauche pour obtenir une équation du type $x^3=k$.<br>
                      $\\begin{aligned}
                      ${s}x^3&=${t}\\\\
                      x^3&=${l(t,s)}\\\\
                                                  \\end{aligned}$<br>`,i+=`L'équation est de la forme $x^3=k$ avec $k=${e}$. <br>
              Le nombre dont le cube est $${e}$ est $${m}$ car $${g(m)}^3=${e}$.<br>
              Ainsi,   $S=\\{${m}\\}$.
              `,u=`\\{${m}\\}`;break;case 3:default:s=b(-10,10,[0,-1,1]),$=b(-10,10,[0,-1,1]),m=q([-10,-5,-4,-3,-2,-1,0,1,2,3,4,5,10]),e=m**3,t=e*s+$,c=`Résoudre dans $\\mathbb{R}$ :<br>
                     ${o(50)} $${s}x^3${n($)}=${t}$`,i="",$>0?i+=`On isole $x^3$ dans le membre de gauche pour obtenir une équation du type $x^3=k$.<br>
                      $\\begin{aligned}
                      ${s}x^3${n($)}&=${t}\\\\
                      ${s}x^3${n($)}-${r($)}&=${t}-${r($)}\\\\
                      ${s}x^3&=${d(t-$,0)}\\\\
                      x^3&=${l(t-$,s)}\\\\
                                                  \\end{aligned}$<br>`:i+=`On isole $x^3$ dans le membre de gauche pour obtenir une équation du type $x^3=k$.<br>
                      $\\begin{aligned}
                      ${s}x^3${n($)}&=${t}\\\\
                      ${s}x^3${n($)}+${r(-$)}&=${t}+${r(-$)}\\\\
                      ${s}x^3&=${d(t-$,0)}\\\\
                      x^3&=${l(t-$,s)}\\\\
                                                  \\end{aligned}$<br>`,i+=`L'équation est de la forme $x^3=k$ avec $k=${e}$. <br>
              Le nombre dont le cube est $${e}$ est $${m}$ car $${g(m)}^3=${e}$.<br>
              Ainsi,   $S=\\{${m}\\}$.
              `,u=`\\{${m}\\}`;break}break}Q(this,f,{reponse:{value:u,options:{ensembleDeNombres:!0}}}),h=c+"<br>"+M(this,f," lycee   ",{texteAvant:" $S=$"}),y=i,this.interactif&&(h+="<br>$\\textit{Respecter les notations}$."),this.questionJamaisPosee(f,v[f],s,$,e)&&(this.listeQuestions[f]=h,this.listeCorrections[f]=y,f++),A++}D(this)}}export{o$ as dateDeModifImportante,n$ as dateDePublication,b$ as default,l$ as interactifReady,u$ as interactifType,m$ as refs,a$ as titre,d$ as uuid};
