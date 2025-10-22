import{af as E,r as l,a as p,a6 as N,F as f,$ as F,f as o,m as d,a2 as T,Y as q,s as j,x as Y,a0 as Q,ax as z,u as x,v as I,l as G}from"./embellissements-BYV7mIDn.js";import{s as J}from"./deprecatedFractions-D2cbyAQf.js";import{a as H}from"./questionMathLive-DdRvWqlN.js";import{E as W,K as X}from"./Exercice-DtXhjCyI.js";import{h as m}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./tableauMathlive-xx-nDjq0.js";import"./index-BUDQz6-w.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";const Se="Calculer des coordonnées de points appartenant à une courbe connaissant l'abscisse ou l'ordonnée",we=!0,Oe="mathLive",Ae="24/09/2022",Pe="07/11/2023",ye="ec059",Qe={"fr-fr":["2F20-2"],"fr-ch":["11FA9-2"]};class Ee extends W{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",4,`1 : Fonction affine
2 : Polynôme de degré 2 
3 : Fonction a/x+b 
4 : Mélange`],this.besoinFormulaire2Numerique=["Choix des questions",3,`1 : Valeurs entières
2 : Valeurs fractionnaire
3 : Mélange`],this.sup=1,this.sup2=1,this.nbQuestions=2}nouvelleVersion(){let A;switch(this.sup){case 1:A=["affine"];break;case 2:A=["polynôme"];break;case 3:A=["a/x+b"];break;case 4:default:A=["affine","polynôme","a/x+b"];break}const V=E(A,this.nbQuestions);let v;this.sup2===1?v=E([0],this.nbQuestions):this.sup2===2?v=E([1],this.nbQuestions):v=E([0,1],this.nbQuestions);const C=[["f"],["g"],["h"],["u"],["v"],["w"]],g=[["M"],["N"],["P"],["R"],["S"],["T"]];for(let b=0,L,B,i,a,R,K,e,$,u,n,t,s,c,S,k,P,M,w,O,D,y,h,r,U=0;b<this.nbQuestions&&U<50;){switch(R=l(-9,9,[0,1,-1]),K=l(-9,9,[R,0]),V[b]){case"affine":switch(v[b]){case 0:e=l(-12,12,[0,1]),$=l(-12,12,0),n=l(-12,12,0),s=e*n+$,i=p(C),a=p(g),p([!0,!1])?(h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${i}(x)=${x(e,$)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
             $${a}$ est le point de $\\mathscr{C}$ d'abscisse $${n}$. <br>Quelle est son ordonnée ?`,r=`Puisque le point $${a}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br>
              $${i}(${n})=${e}\\times ${q(n)}${o($)}=${s}$.<br>
              L'ordonnée du point $${a}$ est $${d(s)}$.`,m(this,b,{reponse:{value:s}})):(h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${i}(x)=${x(e,$)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
             $${a}$ est le point de $\\mathscr{C}$ d'ordonnée $${s}$.<br>
              Quelle est son abscisse ?`,r=`$${i}$ est une fonction affine (non constante), donc il existe un unique point dont l'ordonnée est $${s}$.<br>
                Puisque le point $${a}$ appartient à $\\mathscr{C}$, son abscisse est l'antécédent de son ordonnée.<br>
              On cherche donc $x$ tel que $${i}(x)=${s}$, c'est-à-dire $${x(e,$)}=${s}$.<br>`,$<0?r+=`
              $\\begin{aligned}
              ${x(e,$)}&=${s}\\\\
              ${x(e,$)}+${d(-$)}&=${s}+${d(-$)}\\\\
              ${e}x&=${s-$}   \\\\
              x&=\\dfrac{${s-$}}{${e}}   \\\\
              x&=${n}
                                          \\end{aligned}$<br>`:r+=`
                                          $\\begin{aligned}
                                          ${x(e,$)}&=${s}\\\\
                                          ${x(e,$)}-${d($)}&=${s}-${d($)}\\\\
                                          ${e}x&=${s-$}   \\\\
                                          x&=\\dfrac{${s-$}}{${e}}   \\\\
                                          x&=${n}
                                                                      \\end{aligned}$<br>`,r+=`L'abscisse du point $${a}$ est $${d(n)}$.`,m(this,b,{reponse:{value:n}}));break;case 1:default:e=l(-10,10,[0,1]),$=l(-10,10,0),t=p(z()),c=new f(e*t.n+$*t.d,t.d),O=new f($*c.d,c.d),P=new f(t.n-$*t.d,t.d),M=new f($*t.d,t.d),w=new f(t.n-$*t.d,e*t.d),i=p(C),a=p(g),p([!0,!1])?(h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${i}(x)=${x(e,$)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
              $${a}$ est le point de $\\mathscr{C}$ d'abscisse $${t.texFraction}$.<br>
               Quelle est son ordonnée ?
              `,r=`Puisque le point $${a}$ appartient à $\\mathscr{C}$, son ordonnée est l'image de son abscisse.<br>
                $${i}\\left(${t.texFraction}\\right)=$`,e===-1||e===1?r+=`$${I(e)}${t.texFraction}${o($)}=
                  ${I(e)}${t.texFraction}${O.ecritureAlgebrique} =
                  \\dfrac{${I(e)}${t.n}${o($*t.d)}}{${t.d}}=
               ${c.texFraction}${J(e*t.n+$*t.d,t.d)}$.<br>`:r+=`$${e}\\times ${t.texFraction}${o($)}=
                  ${e}\\times${t.texFraction}${O.ecritureAlgebrique} =
                  \\dfrac{${e}\\times${t.n}${o($*t.d)}}{${t.d}}=
               ${c.texFraction}${J(e*t.n+$*t.d,t.d)}$.<br>`,r+=`L'ordonnée du point $${a}$ est $${d(c.texFractionSimplifiee)}$.`,m(this,b,{reponse:{value:c}})):(h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}$ par :
               ${F(`$${i}(x)=${x(e,$)}$`)}
               On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
               $${a}$ est le point de $\\mathscr{C}$ d'ordonnée $${t.texFraction}$. <br>
               Quelle est son abscisse ?
               `,r=`$${i}$ est une fonction affine (non constante), donc il existe un unique point dont l'ordonnée est $${t.texFraction}$.<br>
                 Puisque le point $${a}$ appartient à $\\mathscr{C}$, son abscisse est l'antécédent de son ordonnée.<br>
               On cherche donc $x$ tel que $${i}(x)=${t.texFraction}$, c'est-à-dire $${x(e,$)}=${t.texFraction}$.<br>
                `,$<0?r+=`
                    $\\begin{aligned}
                    ${x(e,$)}&=${t.texFraction}\\\\
                    ${x(e,$)}+${d(-$)}&=${t.texFraction}+${d(-$)}\\\\
                    ${e}x&=${t.texFraction}+${M.oppose().texFraction}   \\\\
                    ${e}x&=${P.texFraction}\\\\
                    ${e}x\\div${d(q(e))} &=${P.texFraction}\\div${d(q(e))} \\\\
                    x&=${w.texFraction}${w.texSimplificationAvecEtapes()}
                                                \\end{aligned}$<br>`:r+=`
                    $\\begin{aligned}
                    ${x(e,$)}&=${t.texFraction}\\\\
                    ${x(e,$)}-${d($)}&=${t.texFraction}-${d($)}\\\\
                    ${e}x&=${t.texFraction}-${M.texFraction}   \\\\
                    ${e}x&=${P.texFraction}\\\\
                    ${e}x\\div${d(q(e))} &=${P.texFraction}\\div${d(q(e))} \\\\
                    x&=${w.texFraction}${w.texSimplificationAvecEtapes()}
                                                \\end{aligned}$<br>`,r+=`L'abscisse du point $${a}$ est $${d(w.texFractionSimplifiee)}$.`,m(this,b,{reponse:{value:w}}));break}break;case"polynôme":switch(v[b]){case 0:p([!0,!1])?(e=l(-10,10,0),$=l(-10,10,0),u=l(-10,10),n=l(-9,9),s=e*n**2+$*n+u,i=p(C),a=p(g),h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${i}(x)=${Q(0,e,$,u)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
              $${a}$ est le point de $\\mathscr{C}$ d'abscisse $${n}$. <br>
              Quelle est son ordonnée ?`,r=`Puisque le point $${a}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br> `,e!==1?r+=`$${i}(${n})=${e}\\times ${q(n)}^2${o($)}\\times${q(n)}${u===0?"":`${o(u)}`}
                =${e*n**2}${o($*n)}${u===0?"":`${o(u)}`}=${s}$.<br>`:r+=`$${i}(${n})= ${q(n)}^2${o($)}\\times${q(n)}${u===0?"":`${o(u)}`}
                =${e*n**2}${o($*n)}${u===0?"":`${o(u)}`}=${s}$.<br>`,r+=`L'ordonnée du point $${a}$ est $${d(s)}$.`,m(this,b,{reponse:{value:s}})):(e=l(-10,10,0),$=l(-10,10,0),u=l(-10,10,0),n=l(-9,16),s=e*n+u,i=p(C),a=p(g),h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}$ par :
                ${F(`$${i}(x)=${Q(0,e,0,u)}$`)}
                On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
                Existe-t-il des points de $\\mathscr{C}$ d'ordonnée $${s}$ ? <br>
                Si oui, quelles sont les abscisses possibles de ces points ?`,this.interactif&&(h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}$ par :
${F(`$${i}(x)=${Q(0,e,0,u)}$`)}
On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
Existe-t-il des points de $\\mathscr{C}$ d'ordonnée $${s}$ ? <br>
Si oui, quelles sont les abscisses possibles de ces points ?<br>
Écrire les valeurs séparées par un point-virgule ou $\\emptyset$ s'il n'y en a pas.`),r=` Si un point de $\\mathscr{C}$ a pour ordonnée $${s}$, son abscisse est un antécédent de $${s}$.<br> `,r+=` On cherche donc $x$ tel que $${i}(x)=${s}$, c'est-à-dire $${Q(0,e,0,u)}=${s}$.<br>
                  On résout cette équation en isolant le carré, c'est-à-dire en l'écrivant $x^2=${n}$. <br>`,n===0?(r+=` Cette équation n'a qu'une seule solution : $0$.<br>
 On en déduit qu'il existe un unique point de $\\mathscr{C}$ ayant pour ordonnée $${s}$ : son abscisse est $${d(0)}$. `,m(this,b,{reponse:{value:0}})):n<0?(r+=` Cette équation n'a pas de solution.<br>
 On en déduit qu'il n'existe pas de point de $\\mathscr{C}$ ayant pour ordonnée $${s}$. `,m(this,b,{reponse:{value:"\\emptyset",options:{ensembleDeNombres:!0}}})):n===1||n===4||n===9||n===16?(r+=` Cette équation a deux solutions : $-\\sqrt{${n}}=-${Math.sqrt(n)}$ et $\\sqrt{${n}}=${Math.sqrt(n)}$.<br>
                On en déduit qu'il existe deux points de $\\mathscr{C}$ ayant pour ordonnée $${s}$.<br>
                Les  abscisses de ces points sont : $${d(`-${Math.sqrt(n)}`)}$ et $${d(Math.sqrt(n))}$. `,m(this,b,{reponse:{value:`-${Math.sqrt(n)};${Math.sqrt(n)}`,options:{suiteDeNombres:!0}}})):(r+=` Cette équation a deux solutions : $-\\sqrt{${n}}$ et $\\sqrt{${n}}$.<br>
On en déduit qu'il existe deux points de $\\mathscr{C}$ ayant pour ordonnée $${s}$.<br>
Les  abscisses de ces points sont : $${d(`-\\sqrt{${n}}`)}$ et $${d(`\\sqrt{${n}}`)}$. `,m(this,b,{reponse:{value:`-\\sqrt{${n}};\\sqrt{${n}}`,options:{suiteDeNombres:!0}}})));break;case 1:default:e=l(-2,2,0),$=l(-3,3),u=l(-2,2,0),t=p(N()),c=T(e*t.n**2+$*t.n*t.d+u*t.d**2,t.d**2),i=p(C),a=p(g),O=new f($*t.n,t.d),D=new f($*t.n*t.d,t.d**2),y=new f(u*t.d**2,t.d**2),h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${i}(x)=${Q(0,e,$,u)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
              $${a}$ est le point de $\\mathscr{C}$ d'abscisse $${t.texFraction}$. <br>
              Quelle est son ordonnée ?`,r=`Puisque le point $${a}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br>`,e!==1?$===0?r+=`
                    $${i}\\left(${t.texFraction}\\right)=${e}\\times \\left(${t.texFraction}\\right)^2${o(u)}
                =\\dfrac{${e}\\times ${t.n**2}}{${t.d**2}}${o(u)}
                =\\dfrac{${e*t.n**2}}{${t.d**2}}${y.ecritureAlgebrique}
               = ${c.texFractionSimplifiee}$`:r+=`
                    $${i}\\left(${t.texFraction}\\right)=${e}\\times \\left(${t.texFraction}\\right)^2${o($)}\\times${t.texFraction}${o(u)}
                  =\\dfrac{${e}\\times ${t.n**2}}{${t.d**2}}${O.ecritureAlgebrique}${o(u)}
                  =\\dfrac{${e*t.n**2}}{${t.d**2}}${D.ecritureAlgebrique}${y.ecritureAlgebrique}
                  =${c.texFractionSimplifiee}$`:$===0?r+=`$${i}\\left(${t.texFraction}\\right)=\\left(${t.texFraction}\\right)^2${o(u)}
                =\\dfrac{${t.n**2}}{${t.d**2}}${o(u)}
                =\\dfrac{${t.n**2}}{${t.d**2}}${y.ecritureAlgebrique}
                =${c.texFractionSimplifiee}$`:r+=`$${i}\\left(${t.texFraction}\\right)=\\left(${t.texFraction}\\right)^2${o($)}\\times${t.texFraction}${o(u)}
                =\\dfrac{ ${t.n**2}}{${t.d**2}}${O.ecritureAlgebrique}${o(u)}
                =\\dfrac{${e*t.n**2}}{${t.d**2}}${D.ecritureAlgebrique}${y.ecritureAlgebrique}
                =${c.texFractionSimplifiee}$
                `,r+=`<br> L'ordonnée du point $${a}$ est $${d(c.texFractionSimplifiee)}$.`,m(this,b,{reponse:{value:c}});break}break;case"a/x+b":default:switch(v[b]){case 0:if(p([!0,!1])){for(e=l(-9,9,0),$=l(-9,9,0),n=l(-9,9,[0,1,-1]),i=p(C),a=p(g);Y(e,n)!==1;)e=l(-9,9,0);c=new f(e+$*n,n),S=new f(e,n),k=new f($*n,n),h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}^*$ par :
                ${F(`$${i}(x)=\\dfrac{${e}}{x}${o($)}$`)}
                On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
                $${a}$ est le point de $\\mathscr{C}$ d'abscisse $${n}$. <br>
                Quelle est son ordonnée ?`,r=`Puisque le point $${a}$ appartient à $\\mathscr{C}$, son ordonnée est l'image de son abscisse.<br>
                                $${i}(${n})=\\dfrac{${e}}{${n}}${o($)}
                =${S.texFractionSimplifiee}${o($)}
                =${S.texFractionSimplifiee}${k.ecritureAlgebrique}=${c.texFractionSimplifiee}$<br>`,r+=`L'ordonnée du point $${a}$ est $${d(c.texFractionSimplifiee)}$.`,m(this,b,{reponse:{value:c}})}else e=l(-10,10,0),$=l(-9,9,0),s=l(-9,9,[0,1,-1,$]),i=p(C),a=p(g),c=new f(e,s-$),h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}^*$ par :
                    ${F(`$${i}(x)=\\dfrac{${e}}{x}${o($)}$`)}
                    On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
                    Existe-t-il des points de $\\mathscr{C}$ d'ordonnée $${s}$ ? <br>
                    Si oui, quelles sont les abscisses possibles de ces points ?`,r=` Si un point de $\\mathscr{C}$ a pour ordonnée $${s}$, son abscisse est un antécédent de $${s}$.<br> `,r+=` On cherche donc $x$ tel que $${i}(x)=${s}$, c'est-à-dire $\\dfrac{${e}}{x}${o($)}=${s}$.<br> `,r+=`Pour $x\\neq 0$, <br>
                      $\\begin{aligned}
                      \\dfrac{${e}}{x}${o($)}&=${s}\\\\
                      \\dfrac{${e}}{x}${o($)}${d(o(-$))}&=${s}${d(o(-$))}\\\\
                      \\dfrac{${e}}{x}&=${s-$}\\\\
                      x\\times${q(s-$)} &=${e} ${j(4)}{\\text{(Produit en croix)}}\\\\
                      x&=${c.texFraction}${c.texSimplificationAvecEtapes()}\\\\
                                                \\end{aligned}$<br>
                                                Un seul point de $\\mathscr{C}$ a pour ordonnée $${s}$. `,r+=`Son abcsisse est $${d(c.texFractionSimplifiee)}$.`,m(this,b,{reponse:{value:c}});break;case 1:default:p([!0,!1])?(e=l(-9,9,0),$=l(-9,9,0),n=p(N()),c=new f(e*n.d+$*n.n,n.n),S=new f(e*n.d,n.n),k=new f($*n.n,n.n),i=p(C),a=p(g),h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}^*$ par :
              ${F(`$${i}(x)=\\dfrac{${e}}{x}${o($)}$`)}
             On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
                $${a}$ est le point de $\\mathscr{C}$ d'abscisse $${n.texFraction}$.<br>
                Quelle est son ordonnée ?`,r=`Puisque le point $${a}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br>
              $${i}\\left(${n.texFraction}\\right)
              =\\dfrac{${e}}{${n.texFraction}}${o($)}
              =${e}\\times \\dfrac{${n.d}}{${n.n}}${o($)}=
              ${S.texFractionSimplifiee}${o($)}
              =${c.texFractionSimplifiee}
              $<br>`,r+=`L'ordonnée du point $${a}$ est $${d(c.texFractionSimplifiee)}$.`,m(this,b,{reponse:{value:c}})):(e=l(-9,9,0),$=l(-9,9,0),s=p(N()),S=T(s.n-$*s.d,s.d),c=T(e*s.d,s.n-$*s.d),i=p(C),a=p(g),h=`Soit $${i}$ la fonction définie sur $\\mathbb{R}^*$ par :
                ${F(`$${i}(x)=\\dfrac{${e}}{x}${o($)}$`)}
                On note $\\mathscr{C}$ la courbe représentative de la fonction $${i}$ dans un repère.<br>
                Existe-t-il des points de $\\mathscr{C}$ d'ordonnée $${s.texFraction}$ ? <br>
                Si oui, quelles sont les abscisses possibles de ces points ?`,r=` Si un point de $\\mathscr{C}$ a pour ordonnée $${s.texFraction}$, son abscisse est un antécédent de $${s.texFraction}$.<br> `,r+=` On cherche donc $x$ tel que $${i}(x)=${s.texFraction}$, c'est-à-dire $\\dfrac{${e}}{x}${o($)}=${s.texFraction}$.<br> `,r+=`Pour $x\\neq 0$, <br>
                      $\\begin{aligned}
                      \\dfrac{${e}}{x}${o($)}&=${s.texFraction}\\\\
                      \\dfrac{${e}}{x}${o($)}${d(o(-$))}&=${s.texFraction}${d(o(-$))}\\\\
                      \\dfrac{${e}}{x}&=${S.texFraction}\\\\
                      x\\times${q(s.n-$*s.d)} &=${e}\\times ${s.d} ${j(4)}{\\text{(Produit en croix)}}\\\\
                      x&=${c.texFraction}${c.texSimplificationAvecEtapes()}
                                                \\end{aligned}$<br>
                                                Un seul point de $\\mathscr{C}$ a pour ordonnée $${s.texFraction}$. `,r+=`Son abcsisse est $${d(c.texFractionSimplifiee)}$.`,m(this,b,{reponse:{value:c}}));break}break}L=h,L+=" "+H(this,b,X.clavierEnsemble),B=r,this.questionJamaisPosee(b,V[b],R,K,v[b])&&(this.listeQuestions[b]=L,this.listeCorrections[b]=B,b++),U++}G(this)}}export{Pe as dateDeModifImportante,Ae as dateDePublication,Ee as default,we as interactifReady,Oe as interactifType,Qe as refs,Se as titre,ye as uuid};
