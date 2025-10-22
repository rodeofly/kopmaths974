import{t as P}from"./style-CcGLZIPY.js";import{a as g}from"./etudeFonction-BXXWUyni.js";import{g as v,aw as O,a as Q,r as b,a0 as i,u as a,aq as u,ap as r,v as h,f as p,m as q,z as _,x as S,l as A}from"./embellissements-BYV7mIDn.js";import{a as o}from"./deprecatedFractions-D2cbyAQf.js";import{E as G}from"./Exercice-DtXhjCyI.js";import"decimal.js";import"./Matrice-C65I2nuw.js";import"mathjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./index-BUDQz6-w.js";import"./Hms-u2AUyU1C.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"seedrandom";const $$="25/05/2023",e$="Étudier la position relative de deux courbes",t$="53e8f",s$={"fr-fr":["2N60-6"],"fr-ch":[]};class r$ extends G{constructor(){super(),this.sup=1,this.sup2=1,this.nbQuestions=1,this.besoinFormulaireTexte=["Choix des fonctions",`1 : Fonctions affines
2 : Polynôme de degré 2 et fonction affine
3 : Mélange`],this.besoinFormulaire2Texte=["Choix des questions",`1 : Avec questions intermédiaires
2 : Sans question intermédiaire`]}nouvelleVersion(){const z=v({saisie:this.sup,min:1,max:2,melange:3,defaut:3,listeOfCase:["affines","polynômeEtAffine"],shuffle:!1,nbQuestions:this.nbQuestions}),C=v({saisie:this.sup2,min:1,max:2,defaut:1,listeOfCase:["true","false"],nbQuestions:this.nbQuestions,shuffle:!1,melange:0}).map(Boolean);O(z,C);for(let c=0,L=0;c<this.nbQuestions&&L<50;){let f="",n="",s=0,t,e,$,x,d,l;const y=z[c],m=`${P("Remarque :")} vous pouvez vérifier ce résultat en représentant les courbes sur votre calculatrice graphique.`;switch(y){case"affines":C[c]?(s=b(-9,9,0),t=b(-9,9,0),e=b(-9,9,[0,s]),$=b(-9,9,0),f=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${a(s,t)}$ et $g(x)=${a(e,$)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,f+=`${u(0)} Résoudre dans $\\mathbb R$ l'inéquation $f(x) < g(x)$.<br>
          ${u(1)} Quelle interprétation graphique peut-on en donner ?`,n=`${u(0)} Résolution de l'inéquation :<br>
              $\\begin{aligned}
              ${a(s,t)}&<${a(e,$)}\\\\
              ${a(s,t)}\\,${q(_(-e)+"x")}&<${a(e,$)}\\,${q(_(-e)+"x")}\\\\
              ${a(s-e,t)}&<${a(0,$)}\\\\
              ${a(s-e,t)}\\,${q(_(-t))}&<${a(0,$)}\\,${q(_(-t))}\\\\
              ${a(s-e,0)}&<${a(0,$-t)}\\\\
            ${s-e>0?`x&<\\dfrac{${$-t}}{${s-e}}`:`x&>\\dfrac{${$-t}}{${s-e}}`}
              \\end{aligned}$
              <br>
              ${S($-t,s-e)===1&&s-e>0?"L'":`Comme $\\dfrac{${$-t}}{${s-e}}=${o($-t,s-e)}$, l'`}  ensemble $S$ des solutions de l'inéquation est
              $S= ${s-e>0?`\\left]-\\infty\\,;\\,${o($-t,s-e)}\\right[`:`\\left]${o($-t,s-e)}\\,;\\,+\\infty\\right[`}$.<br>`,n+=`${u(1)} Position relative : <br>
              La courbe $\\mathscr{C}_f$ est en dessous de la courbe $\\mathscr{C}_g$ sur l'intervalle $${s-e>0?`\\left]-\\infty\\,;\\,${o($-t,s-e)}\\right[`:`\\left]${o($-t,s-e)}\\,;\\,+\\infty\\right[`}$.`,n+=`<br>${m}`):(s=b(-9,9,0),t=b(-9,9,0),e=b(-9,9,[0,s]),$=b(-9,9,0),f=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${a(s,t)}$ et $g(x)=${a(e,$)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,f+="Étudier la position relative des deux courbes  $\\mathscr{C}_f$ et $\\mathscr{C}_g$.",n=`La position relative des deux courbes est donnée par l'étude du signe de la différence : $f(x)-g(x)$.<br>
              Plus précisément, si $f(x)-g(x)>0$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$, sinon, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.<br>
              Pour tout réel $x$,<br> $\\begin{aligned}
              f(x)-g(x)&=(${a(s,t)})-(${a(e,$)})\\\\
               &=${a(s,t)}${e>0?"":"+"}${a(-e,-$)}\\\\
               &=${a(s-e,t-$)}
               \\end{aligned}$<br>`,n+=`Il s'agit d'étudier le signe de l'expression affine $${a(s-e,t-$)}$.<br>
               Comme elle s'annule en $${o($-t,s-e)}$ et que $${s-e>0?`${s-e}>0`:`${s-e}<0`}$, on en déduit le tableau de signes : <br>`,s-e>0?x=["Line",10,"",0,"-",20,"z",20,"+"]:x=["Line",10,"",0,"+",20,"z",20,"-"],n+=g({tabInit:[[["$x$",2.5,10],["$f(x)-g(x)$",2,50]],["$-\\infty$",20,`$${o($-t,s-e)}$`,20,"$+\\infty$",30]],tabLines:[x],espcl:3.5,deltacl:.8,lgt:5}),n+=`Comme $f(x)-g(x)>0$ sur l'intervalle $${s-e>0?`\\left]${o($-t,s-e)}\\,;\\,+\\infty\\right[`:`\\left]-\\infty\\,;\\,${o($-t,s-e)}\\right[`}$,
                  la courbe $\\mathscr{C}_f$ est au dessus de la courbe $\\mathscr{C}_g$ sur cet intervalle et elle est en dessous sur $${s-e>0?`\\left]-\\infty\\,;\\,${o($-t,s-e)}\\right[`:`\\left]${o($-t,s-e)}\\,;\\,+\\infty\\right[`}$.
                  `,n+=`<br>${m}`);break;case"polynômeEtAffine":default:{const R=Q([1,2,3]);R===1?C[c]?(s=1,t=b(-9,9,0),e=b(-10,10),$=b(-10,10,0),f=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${i(0,1,t,e)}$ et $g(x)=${a(t,$)}$. <br>
            On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,e-$>0&&(f+=`
                ${u(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=${i(0,1,0,e-$)}$.<br>`),e-$===0&&(f+=`
                ${u(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=${i(0,1,0,e-$)}$.<br>`),e-$<0&&(f+=`${u(0)} Montrer que pour tout $x$ de $\\mathbb R$,
                $f(x)-g(x)=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                `),f+=`${u(1)} Étudier pour tout $x$ de $\\mathbb R$, le signe de $f(x)-g(x)$.<br>
        ${u(2)} Quelle interprétation graphique peut-on en donner ?`,n=`${u(0)}  Pour tout $x$ de $\\mathbb R$, <br>
            $\\begin{aligned}
            f(x) - g(x)&=(${i(0,1,t,e)})-(${a(t,$)})\\\\
            &=${i(0,1,t,e)}${t>0?"":"+"}${a(-t,-$)}\\\\
            &=${i(0,1,0,e-$)}
            \\end{aligned}$
            <br>
           `,x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],l=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20],e-$>0?(n+=`${u(1)}  Pour tout $x$ de $\\mathbb R$, $${i(0,1,0,e-$)}>0$.<br>
                ${u(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)>0$, soit $f(x)>g(x)$. <br>
                Graphiquement,  $\\mathscr{C}_f$ est toujours au dessus de $\\mathscr{C}_g$.`,n+=`<br>${m}`):e-$===0?(n+=`${u(1)}  Pour tout $x$ de $\\mathbb R$, $${i(0,1,0,e-$)}\\geqslant 0$.<br>
                ${u(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)\\geqslant0$, soit $f(x)\\geqslant g(x)$. <br>
                Graphiquement, $\\mathscr{C}_f$ et $\\mathscr{C}_g$ ont un point d'intersection (de coordonnées $(0\\,;\\${$})) et $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$.  .`,n+=`<br>${m}`):(n+=`  $${i(0,1,0,e-$)}$ est de la forme $a^2-b^2$ avec $a=x$ et $b=${r($-e)[0]}$.<br>
                  Comme $a^2-b^2=(a-b)(a+b)$, on en déduit $${i(0,1,0,e-$)}=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                  Ainsi, pour tout $x$ de $\\mathbb R$,
                  $f(x)-g(x)=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                 
                ${u(1)} Comme $x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ s'annule en
                $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ et
                 $x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ s'annule en $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}$, on obtient le tableau de signes : <br>`,n+=g({tabInit:[[["$x$",2.5,30],[`$x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$`,2,75],[`$x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}$`,20,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$`,20,"$+\\infty$",30]],tabLines:[x,d,l],espcl:3.5,deltacl:.8,lgt:10}),n+=`<br>${u(2)} Comme $f(x)-g(x)<0$ pour $x\\in]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}[$, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                  $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur $]-\\infty\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}[$ et sur $]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}\\,;\\,+\\infty [$.`,n+=`<br>${m}`)):(s=1,t=b(-9,9,0),e=b(-10,10),$=b(-10,10,0),f=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par :$f(x)=${i(0,1,t,e)}$ et $g(x)=${a(t,$)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,f+="Étudier la position relative des deux courbes $\\mathscr{C}_f$ et $\\mathscr{C}_g$.",n=`La position relative des deux courbes est donnée par l'étude du signe de la différence : $f(x)-g(x)$.<br>
            Plus précisément, si $f(x)-g(x)>0$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$, sinon, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.<br>`,n+=`  Pour tout $x$ de $\\mathbb R$, <br>
            $\\begin{aligned}
            f(x) - g(x)&=(${i(0,1,t,e)})-(${a(t,$)})\\\\
            &=${i(0,1,t,e)}${t>0?"":"+"}${a(-t,-$)}\\\\
            &=${i(0,1,0,e-$)}
            \\end{aligned}$
            <br>
           `,x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],l=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20],e-$>0?(n+=`  Pour tout $x$ de $\\mathbb R$, $${i(0,1,0,e-$)}>0$.<br>
                 On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)>0$, soit $f(x)>g(x)$. <br>
                Graphiquement,  $\\mathscr{C}_f$ est toujours au dessus de $\\mathscr{C}_g$.`,n+=`<br>${m}`):e-$===0?(n+=`  Pour tout $x$ de $\\mathbb R$, $${i(0,1,0,e-$)}\\geqslant 0$.<br>
                On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)\\geqslant0$, soit $f(x)\\geqslant g(x)$. <br>
                Graphiquement, $\\mathscr{C}_f$ et $\\mathscr{C}_g$ ont un point d'intersection (de coordonnées $(0\\,;\\${$})) et $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$.  .`,n+=`<br>${m}`):(n+=`  $${i(0,1,0,e-$)}$ est de la forme $a^2-b^2$ avec $a=x$ et $b=${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$.<br>
                  Comme $a^2-b^2=(a-b)(a+b)$, on en déduit $${i(0,1,0,e-$)}=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                  Ainsi, pour tout $x$ de $\\mathbb R$,
                  $f(x)-g(x)=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                 
                 Comme $x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ s'annule en
                $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ et
                 $x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ s'annule en $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}$, on obtient le tableau de signes : <br>`,n+=g({tabInit:[[["$x$",2.5,30],[`$x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$`,2,75],[`$x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}$`,20,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$`,20,"$+\\infty$",30]],tabLines:[x,d,l],espcl:3.5,deltacl:.8,lgt:10}),n+=`<br> Comme $f(x)-g(x)<0$ pour $x\\in]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}[$, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                  $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur $]-\\infty\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}[$ et sur $]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}\\,;\\,+\\infty [$.`,n+=`<br>${m}`)):R===2?C[c]?(s=1,t=b(-9,9,0),e=b(-10,10),$=b(-10,10,0),f=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${i(0,-1,t,-e)}$ et $g(x)=${a(t,-$)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,e-$>0&&(f+=`
                  ${u(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=${i(0,-1,0,$-e)}$.<br>`),e-$===0&&(f+=`
                  ${u(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=${i(0,-1,0,$-e)}$.<br>`),e-$<0&&(f+=`${u(0)} Montrer que pour tout $x$ de $\\mathbb R$,
                  $f(x)-g(x)=(${$-e===1||$-e===4||$-e===9||$-e===16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${$-e===1||$-e===4||e-$===9||e-$===16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                  `),f+=`${u(1)} Étudier pour tout $x$ de $\\mathbb R$, le signe de $f(x)-g(x)$.<br>
          ${u(2)} Quelle interprétation graphique peut-on en donner ?`,n=`${u(0)}  Pour tout $x$ de $\\mathbb R$, <br>
              $\\begin{aligned}
              f(x) - g(x)&=(${i(0,-1,t,-e)})-(${a(t,-$)})\\\\
              &=${i(0,-1,t,-e)}${t>0?"":"+"}${a(-t,$)}\\\\
              &=${i(0,-1,0,$-e)}
              \\end{aligned}$
              <br>
             `,x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"+",20,"t",20,"+",20,"z",20,"-",20],l=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20],e-$>0&&(n+=`${u(1)}  Pour tout $x$ de $\\mathbb R$, $${i(0,-1,0,$-e)}<0$.<br>
                  ${u(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)<0$, soit $f(x) < g(x)$. <br>
                  Graphiquement,  $\\mathscr{C}_f$ est toujours en dessous de $\\mathscr{C}_g$.`,n+=`<br>${m}`),e-$===0&&(n+=`${u(1)}  Pour tout $x$ de $\\mathbb R$, $${i(0,-1,0,$-e)}\\leqslant 0$.<br>
                  ${u(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)\\leqslant0$, soit $f(x)\\leqslant g(x)$. <br>
                  Graphiquement, $\\mathscr{C}_f$ et $\\mathscr{C}_g$ ont un point d'intersection (de coordonnées $(0\\,;\\${-$})) et $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.  .`,n+=`<br>${m}`),e-$<0&&(n+=`  $${$-e}-x^2$ est de la forme $a^2-b^2$ avec $a=${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ et $b=x$.<br>
                    Comme $a^2-b^2=(a-b)(a+b)$, on en déduit $${$-e}-x^2=(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                    Ainsi, pour tout $x$ de $\\mathbb R$,
                    $f(x)-g(x)=
                    (${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                   
                  ${u(1)} Comme $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x$ s'annule en
                  $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ et
                   $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x$ s'annule en $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}$, on obtient le tableau de signes : <br>`,n+=g({tabInit:[[["$x$",2.5,30],[`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x$`,2,75],[`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}$`,20,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$`,20,"$+\\infty$",30]],tabLines:[x,d,l],espcl:3.5,deltacl:.8,lgt:10}),n+=`<br>${u(2)} Comme $f(x)-g(x)>0$ pour $x\\in]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}[$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                    $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur $]-\\infty\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}[$ et sur $]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}\\,;\\,+\\infty [$.`,n+=`<br>${m}`)):(t=b(-9,9,0),e=b(-10,10),$=b(-10,10,0),f=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${i(0,-1,t,-e)}$ et $g(x)=${a(t,-$)}$. <br>
            On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,f+="Étudier la position relative des deux courbes $\\mathscr{C}_f$ et $\\mathscr{C}_g$.",n=`La position relative des deux courbes est donnée par l'étude du signe de la différence : $f(x)-g(x)$.<br>
            Plus précisément, si $f(x)-g(x)>0$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$, sinon, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.<br>`,n+=`  Pour tout $x$ de $\\mathbb R$, <br>
            $\\begin{aligned}
            f(x) - g(x)&=(${i(0,-1,t,-e)})-(${a(t,-$)})\\\\
            &=${i(0,-1,t,-e)}${t>0?"":"+"}${a(-t,$)}\\\\
            &=${i(0,-1,0,$-e)}
            \\end{aligned}$
            <br>
           `,x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"+",20,"t",20,"+",20,"z",20,"-",20],l=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20],e-$>0&&(n+=`  Pour tout $x$ de $\\mathbb R$, $${i(0,-1,0,$-e)}<0$.<br>
                ${u(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)<0$, soit $f(x) < g(x)$. <br>
                Graphiquement,  $\\mathscr{C}_f$ est toujours en dessous de $\\mathscr{C}_g$.`),e-$===0&&(n+=`  Pour tout $x$ de $\\mathbb R$, $${i(0,-1,0,$-e)}\\leqslant 0$.<br>
                 On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)\\leqslant0$, soit $f(x)\\leqslant g(x)$. <br>
                Graphiquement, $\\mathscr{C}_f$ et $\\mathscr{C}_g$ ont un point d'intersection (de coordonnées $(0\\,;\\${-$})) et $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.  .`,n+=`<br>${m}`),e-$<0&&(n+=`  $${$-e}-x^2$ est de la forme $a^2-b^2$ avec $a=${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ et $b=x$.<br>
                  Comme $a^2-b^2=(a-b)(a+b)$, on en déduit $${$-e}-x^2=(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                  Ainsi, pour tout $x$ de $\\mathbb R$,
                  $f(x)-g(x)=
                  (${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                 
                ${u(1)} Comme $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x$ s'annule en
                $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$ et
                 $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x$ s'annule en $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}$, on obtient le tableau de signes : <br>`,n+=g({tabInit:[[["$x$",2.5,30],[`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}+x$`,2,75],[`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}-x$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}$`,20,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}$`,20,"$+\\infty$",30]],tabLines:[x,d,l],espcl:3.5,deltacl:.8,lgt:10}),n+=`<br> Comme $f(x)-g(x)>0$ pour $x\\in]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}[$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                  $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur $]-\\infty\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${r($-e)[0]}`:`-\\sqrt{${$-e}}`}[$ et sur $]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${r($-e)[0]}`:`\\sqrt{${$-e}}`}\\,;\\,+\\infty [$.`,n+=`<br>${m}`)):C[c]?(s=b(-3,3,0),t=b(-9,9,0),e=b(-10,10),$=b(-10,10,[0,t]),f=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${i(0,s,t,e)}$ et $g(x)=${a($,e)}$. <br>
          On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,f+=`${u(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=x(${h(s)}x${p(t-$)})$.<br>`,f+=`${u(1)} Étudier pour tout $x$ de $\\mathbb R$, le signe de $f(x)-g(x)$.<br>
      ${u(2)} Quelle interprétation graphique peut-on en donner ?`,n=`${u(0)}  Pour tout $x$ de $\\mathbb R$, <br>
          $\\begin{aligned}
          f(x) - g(x)&=(${i(0,s,t,e)}) -(${a($,e)})\\\\
          &=${i(0,s,t,e)}${$>0?"":"+"}${a(-$,-e)}\\\\
          &=${i(0,s,t-$,0)}\\\\
          &=x(${h(s)}x${p(t-$)})
          \\end{aligned}$
          <br>
         `,s>0&&($-t)/s>0?(x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],l=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):s>0&&($-t)/s<0?(x=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],d=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],l=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):s<0&&($-t)/s>0?(x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"+",20,"t",20,"+",20,"z",20,"-",20],l=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]):(x=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],d=["Line",30,"",0,"+",20,"z",20,"-",20,"t",20,"-",20],l=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]),n+=` ${u(1)} $x$ s'annule en $0$ et $${h(s)}x${p(t-$)}$ s'annule en $${o($-t,s)}$.<br>
          On obtient le tableau de signes : <br>
          
          `,n+=g({tabInit:[[["$x$",2.5,30],["$x$",2,75],[`$${h(s)}x${p(t-$)}$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${($-t)/s<0?`${o($-t,s)}`:"0"}$`,20,`$${($-t)/s>0?`${o($-t,s)}`:"0"}$`,20,"$+\\infty$",30]],tabLines:[x,d,l],espcl:3.5,deltacl:.8,lgt:10}),s<0?(n+=`<br>${u(2)} Comme $f(x)-g(x)>0$ pour
          $x\\in\\left]${($-t)/s<0?`${o($-t,s)}`:"0"} \\,;\\,
          ${($-t)/s<0?"0":`${o($-t,s)}`}\\right[$, $\\mathscr{C}_f$ est au dessus de
            $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur $\\left]-\\infty\\,;\\,
                ${($-t)/s<0?`${o($-t,s)}`:"0"}\\right[$
                  et sur $\\left]${($-t)/s<0?"0":`${o($-t,s)}`}\\,;\\,+\\infty \\right[$.`,n+=`<br>${m}`):(n+=`<br>${u(2)} Comme $f(x)-g(x)<0$ pour
          $x\\in\\left]${($-t)/s<0?`${o($-t,s)}`:"0"} \\,;\\,
          ${($-t)/s<0?"0":`${o($-t,s)}`}\\right[$, $\\mathscr{C}_f$ est en dessous de
            $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur $\\left]-\\infty\\,;\\,
                ${($-t)/s<0?`${o($-t,s)}`:"0"}\\right[$
                  et sur $\\left]${($-t)/s<0?"0":`${o($-t,s)}`}\\,;\\,+\\infty \\right[$.`,n+=`<br>${m}`)):(s=b(-3,3,0),t=b(-9,9,0),e=b(-10,10),$=b(-10,10,[0,t]),f=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${i(0,s,t,e)}$ et $g(x)=${a($,e)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,f+="Étudier la position relative des deux courbes $\\mathscr{C}_f$ et $\\mathscr{C}_g$.",n=`La position relative des deux courbes est donnée par l'étude du signe de la différence : $f(x)-g(x)$.<br>
            Plus précisément, si $f(x)-g(x)>0$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$, sinon, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.<br>`,n+=`  Pour tout $x$ de $\\mathbb R$, <br>
              $\\begin{aligned}
              f(x) - g(x)&=(${i(0,s,t,e)}) -(${a($,e)})\\\\
              &=${i(0,s,t,e)}${$>0?"":"+"}${a(-$,-e)}\\\\
              &=${i(0,s,t-$,0)}\\\\
              &=x(${h(s)}x${p(t-$)})
              \\end{aligned}$
              <br>
             `,s>0&&($-t)/s>0?(x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],l=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):s>0&&($-t)/s<0?(x=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],d=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],l=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):s<0&&($-t)/s>0?(x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"+",20,"t",20,"+",20,"z",20,"-",20],l=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]):(x=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],d=["Line",30,"",0,"+",20,"z",20,"-",20,"t",20,"-",20],l=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]),n+=`  $x$ s'annule en $0$ et $${h(s)}x${p(t-$)}$ s'annule en $${o($-t,s)}$.<br>
              On obtient le tableau de signes : <br>
              
              `,n+=g({tabInit:[[["$x$",2.5,30],["$x$",2,75],[`$${h(s)}x${p(t-$)}$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${($-t)/s<0?`${o($-t,s)}`:"0"}$`,20,`$${($-t)/s>0?`${o($-t,s)}`:"0"}$`,20,"$+\\infty$",30]],tabLines:[x,d,l],espcl:3.5,deltacl:.8,lgt:10}),s<0?(n+=`<br> Comme $f(x)-g(x)>0$ pour
              $x\\in\\left]${($-t)/s<0?`${o($-t,s)}`:"0"} \\,;\\,
              ${($-t)/s<0?"0":`${o($-t,s)}`}\\right[$, $\\mathscr{C}_f$ est au dessus de
                $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                    $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur $\\left]-\\infty\\,;\\,
                    ${($-t)/s<0?`${o($-t,s)}`:"0"}\\right[$
                      et sur $\\left]${($-t)/s<0?"0":`${o($-t,s)}`}\\,;\\,+\\infty \\right[$.`,n+=`<br>${m}`):(n+=`<br> Comme $f(x)-g(x)<0$ pour
              $x\\in\\left]${($-t)/s<0?`${o($-t,s)}`:"0"} \\,;\\,
              ${($-t)/s<0?"0":`${o($-t,s)}`}\\right[$, $\\mathscr{C}_f$ est en dessous de
                $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                    $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur $\\left]-\\infty\\,;\\,
                    ${($-t)/s<0?`${o($-t,s)}`:"0"}\\right[$
                      et sur $\\left]${($-t)/s<0?"0":`${o($-t,s)}`}\\,;\\,+\\infty \\right[$.`,n+=`<br>${m}`))}}this.questionJamaisPosee(c,s,t,e,$)&&(this.listeQuestions[c]=f,this.listeCorrections[c]=n,c++),L++}A(this)}}export{$$ as dateDePublication,r$ as default,s$ as refs,e$ as titre,t$ as uuid};
