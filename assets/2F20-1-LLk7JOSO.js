import{af as q,r as a,a as x,a6 as O,a2 as c,$ as _,f as r,x as U,a0 as P,Y as p,ax as I,u as R,v as C,l as E}from"./embellissements-BYV7mIDn.js";import{s as A}from"./deprecatedFractions-D2cbyAQf.js";import{E as M}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const $e="Montrer qu'un point appartient ou non à une courbe",te="36795",ie={"fr-fr":["2F20-1"],"fr-ch":["11FA9-1"]};class ne extends M{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",4,`1 : Fonction affine
2 : Polynôme de degré 2 
3 : Fonction a/x+b 
4 : Mélange`],this.besoinFormulaire2Numerique=["Choix des questions",3,`1 : Abscisse du point A entière
2 : Abscisse du point A fractionnaire
3 : Mélange`],this.sup=1,this.sup2=1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.nbQuestions=2}nouvelleVersion(){let y;switch(this.sup){case 1:y=["affine"];break;case 2:y=["polynôme"];break;case 3:y=["a/x+b"];break;case 4:default:y=["affine","polynôme","a/x+b"];break}const D=q(y,this.nbQuestions);let F;parseInt(this.sup2)===1?F=q([0],this.nbQuestions):parseInt(this.sup2)===2?F=q([1],this.nbQuestions):F=q([0,1],this.nbQuestions);for(let b=0,k,Q,L,J,t,i,s,$,e,l,d,o,u,S,v,h,m,f,g,n,w=0;b<this.nbQuestions&&w<50;){switch(L=a(-9,9,[0,1,-1]),J=a(-9,9,[L,0]),D[b]){case"affine":switch(F[b]){case 0:t=a(-9,9,[0,1]),i=a(-9,9,0),$=a(-9,9),l=x([t*$+i,t*($+1)+i]),g=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
              ${_(`$f(x)=${R(t,i)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A(${$}; ${l})$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>
               `),l===t*$+i?n+=`$${$}$ est bien dans l'ensemble de définition de $f$ et :<br>
                   $f(x_A)=f(${$})=${t}\\times ${p($)}${r(i)}=${l}=y_A$.<br>
                L'image de $${$}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$${$}$ est bien dans l'ensemble de définition de $f$ et :<br>
                  $f(x_A)=f(${$})=${t}\\times ${p($)}${r(i)}=${t*$+i}\\neq${l}$.<br>
                L'image de $${$}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$.`;break;case 1:default:t=a(-9,9,[0,1]),i=a(-9,9,0),e=x(I()),o=c(t*e.n+i*e.d,e.d),u=c(t*e.n+i*e.d+1,e.d),d=x([o,u]),h=c(i*o.d,o.d),g=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
              ${_(`$f(x)=${R(t,i)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A\\left(${e.texFraction}; ${d.texFractionSimplifiee}\\right)$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>
               `),d===o?(n+=`$${e.texFraction}$ est bien dans l'ensemble de définition de $f$ et  : <br>
                $f(x_A)=f\\left(${e.texFraction}\\right)=$`,t===-1?n+=`$${C(t)}${e.texFraction}${r(i)}=
                  ${C(t)}${e.texFraction}${h.ecritureAlgebrique} =
                  \\dfrac{${C(t)}${e.n}${r(i*e.d)}}{${e.d}}=
               ${o.texFraction}${A(t*e.n+i*e.d,e.d)}=y_A$.<br>
               L'image de $${e.texFraction}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$${t}\\times ${e.texFraction}${r(i)}=
                  ${t}\\times${e.texFraction}${h.ecritureAlgebrique} =
                  \\dfrac{${t}\\times${e.n}${r(i*e.d)}}{${e.d}}=
               ${o.texFraction}${A(t*e.n+i*e.d,e.d)}=y_A$.<br>
               L'image de $${e.texFraction}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`):(n+=`$${e.texFraction}$ est bien dans l'ensemble de définition de $f$ et  : <br>
              $f(x_A)=f\\left(${e.texFraction}\\right)=$`,t===-1?n+=`$${C(t)}${e.texFraction}${r(i)}=
                ${C(t)}${e.texFraction}${h.ecritureAlgebrique} =
                \\dfrac{${C(t)}${e.n}${r(i*e.d)}}{${e.d}}=
             ${e.texFraction}${A(t*e.n+i*e.d,e.d)}\\neq${u.texFractionSimplifiee}$.<br>
             L'image de $${e.texFraction}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$.`:n+=`$${t}\\times ${e.texFraction}${r(i)}=
                ${t}\\times${e.texFraction}${h.ecritureAlgebrique} =
                \\dfrac{${t}\\times${e.n}${r(i*o.d)}}{${o.d}}=
             ${o.texFraction}${A(t*e.n+i*e.d,e.d)}\\neq${u.texFractionSimplifiee}$.<br>
             L'image de $${e.texFraction}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$.`);break}break;case"polynôme":switch(F[b]){case 0:t=a(-9,9,0),i=a(-9,9,0),s=a(-9,9),$=a(-9,9),l=x([t*$**2+i*$+s,t*$**2+i*$+s-1]),g=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
              ${_(`$f(x)=${P(0,t,i,s)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A(${$}; ${l})$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>
               `),l===t*$**2+i*$+s?(n+=`$${$}$ est bien dans l'ensemble de définition de $f$ et :<br> `,t!==1?n+=`$f(x_A)=f(${$})=${t}\\times ${p($)}^2${r(i)}\\times${p($)}${r(s)}
                =${t*$**2}${r(i*$)}${r(s)}=${l}=y_A$.<br>
                L'image de $${$}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$f(x_A)=f(${$})= ${p($)}^2${r(i)}\\times${p($)}${r(s)}
                =${t*$**2}${r(i*$)}${r(s)}=${l}=y_A$.<br>
                L'image de $${$}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`):(n+=`$${$}$ est bien dans l'ensemble de définition de $f$ et :<br> `,t!==1?n+=`
                $f(x_A)=f(${$})=${t}\\times ${p($)}^2${r(i)}\\times${p($)}${r(s)}
                =${t*$**2}${r(i*$)}${r(s)}=${t*$**2+i*$+s}\\neq${l}$.<br>
                L'image de $${$}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`:n+=` $f(x_A)=f(${$})= ${p($)}^2${r(i)}\\times${p($)}${r(s)}
                =${t*$**2}${r(i*$)}${r(s)}=${t*$**2+i*$+s}\\neq${l}$.<br>
                L'image de $${$}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`);break;case 1:default:t=a(-2,2,0),i=a(-4,4),s=a(-4,4,0),e=x(O()),o=c(t*e.n**2+i*e.n*e.d+s*e.d**2,e.d**2),u=c(t*e.n**2+i*e.n*e.d+s*e.d**2-1,e.d**2),d=x([o,u]),h=c(i*e.n,e.d),m=c(i*e.n*e.d,e.d**2),f=c(s*e.d**2,e.d**2),g=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
              ${_(`$f(x)=${P(0,t,i,s)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A\\left(${e.texFraction}; ${d.texFractionSimplifiee}\\right)$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>`),t!==1?(n+=`$${e.texFraction}$ est bien dans l'ensemble de définition de $f$ et :<br>
                $f(x_A)=f\\left(${e.texFraction}\\right)=${t}\\times \\left(${e.texFraction}\\right)^2$`,i===0?n+=`$${r(s)}
                =\\dfrac{${t}\\times ${e.n**2}}{${e.d**2}}${r(s)}
                =\\dfrac{${t*e.n**2}}{${e.d**2}}${f.ecritureAlgebrique}=\\dfrac{${t*e.n**2+f.n}}{${e.d**2}}
                ${A(t*e.n**2+m.n+f.n,e.d**2)}$`:n+=`$${r(i)}\\times${e.texFraction}${r(s)}
                  =\\dfrac{${t}\\times ${e.n**2}}{${e.d**2}}${h.ecritureAlgebrique}${r(s)}
                  =\\dfrac{${t*e.n**2}}{${e.d**2}}${m.ecritureAlgebrique}${f.ecritureAlgebrique}=\\dfrac{${t*e.n**2+m.n+f.n}}{${e.d**2}}
                ${A(t*e.n**2+m.n+f.n,e.d**2)}$`,d===o?n+=`$=y_A$.<br>
                  L'image de $${e.texFraction}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$\\neq${d.texFractionSimplifiee}$.<br>
                                 L'image de $${e.texFraction}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`):(n+=`$${e.texFraction}$ est bien dans l'ensemble de définition de $f$ et :<br>
                $f(x_A)=f\\left(${e.texFraction}\\right)=\\left(${e.texFraction}\\right)^2$`,i===0?n+=`$${r(s)}
                =\\dfrac{${e.n**2}}{${e.d**2}}${r(s)}
                =\\dfrac{${e.n**2}}{${e.d**2}}${f.ecritureAlgebrique}=\\dfrac{${t*e.n**2+f.n}}{${e.d**2}}
                ${A(t*e.n**2+m.n+f.n,e.d**2)}$`:n+=`
               $${r(i)}\\times${e.texFraction}${r(s)}
                =\\dfrac{ ${e.n**2}}{${e.d**2}}${h.ecritureAlgebrique}${r(s)}
                =\\dfrac{${t*e.n**2}}{${e.d**2}}${m.ecritureAlgebrique}${f.ecritureAlgebrique}
                =\\dfrac{${t*e.n**2+m.n+f.n}}{${e.d**2}}
                ${A(t*e.n**2+m.n+f.n,e.d**2)}$
                  `,d===o?n+=`$=y_A$.<br>
                  L'image de $${e.texFraction}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$\\neq${d.texFractionSimplifiee}$.<br>
                                 L'image de $${e.texFraction}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`);break}break;case"a/x+b":default:switch(F[b]){case 0:for(t=a(-9,9,0),i=a(-9,9,0),$=a(-9,9,[0,1,-1]);U(t,$)!==1;)t=a(-9,9,0);o=c(t+i*$,$),u=c(t+i*$+1,$),S=c(t,$),v=c(i*$,$),d=x([o,u]),g=`Soit $f$ la fonction définie sur $\\mathbb{R}^*$ par :
              ${_(`$f(x)=\\dfrac{${t}}{x}${r(i)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A\\left(${$}; ${d.texFractionSimplifiee}\\right)$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>`),n+=`$${$}$ est bien dans l'ensemble de définition de $f$ et : <br>
                              $f(x_A)=f(${$})=\\dfrac{${t}}{${$}}${r(i)}
              =${S.texFractionSimplifiee}${r(i)}
              =${S.texFractionSimplifiee}${v.ecritureAlgebrique}=${o.texFractionSimplifiee}
              $`,d===o?n+=`$=y_A$.<br>
                L'image de $${$}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$\\neq${d.texFractionSimplifiee}$.<br>
                               L'image de $${$}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`;break;case 1:default:t=a(-9,9,0),i=a(-9,9,0),$=x(O()),o=c(t*$.d+i*$.n,$.n),u=c(t*$.d+i*$.n-1,$.n),S=c(t*$.d,$.n),v=c(i*$.n,$.n),d=x([o,u]),g=`Soit $f$ la fonction définie sur $\\mathbb{R}^*$ par :
              ${_(`$f(x)=\\dfrac{${t}}{x}${r(i)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A\\left(${$.texFractionSimplifiee}; ${d.texFractionSimplifiee}\\right)$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>`),n+=`$${$.texFractionSimplifiee}$ est bien dans l'ensemble de définition de $f$ et :<br>
              $f(x_A)=f\\left(${$.texFractionSimplifiee}\\right)
              =\\dfrac{${t}}{${$.texFractionSimplifiee}}${r(i)}
              =${t}\\times \\dfrac{${$.d}}{${$.n}}${r(i)}=
              ${S.texFractionSimplifiee}${r(i)}
              =${o.texFractionSimplifiee}
              $`,d===o?n+=`$=y_A$.<br>
                L'image de $${$.texFractionSimplifiee}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$\\neq${d.texFractionSimplifiee}$.<br>
                               L'image de $${$.texFractionSimplifiee}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`;break}break}k=g,Q=n,this.questionJamaisPosee(b,D[b],L,J,F[b])&&(this.listeQuestions[b]=k,this.listeCorrections[b]=Q,b++),w++}E(this)}}export{ne as default,ie as refs,$e as titre,te as uuid};
