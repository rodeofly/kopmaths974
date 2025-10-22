import{af as U,r as u,F as B,a as R,bC as G,s as h,Y as z,f as y,v as M,h as C,x as S,e as r,p,k as j,A as O,I as w,aG as Y,C as v,G as c,o as H,aH as W,m as d,u as L,l as X}from"./embellissements-BYV7mIDn.js";import{E as Z,K as A}from"./Exercice-DtXhjCyI.js";import{a as _}from"./Personne-DRrbQFAY.js";import{t as T,c as ee}from"./style-CcGLZIPY.js";import{h as D}from"./gestionInteractif-DujZpSu8.js";import{a as E}from"./questionMathLive-DdRvWqlN.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const Me=!0,Ce="mathLive",De="Modéliser un problème par une inéquation",Be="14/02/2023",Le="03/04/2025",Pe="d2084",je={"fr-fr":["2N60-1","BP2RES18"],"fr-ch":[]};class Oe extends Z{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",4,`1 : Situation concrète
2 : Situation géométrique
3 : Programme de calcul
4 : Mélange des cas précédents`],this.nbQuestions=1,this.sup=4,this.spacing=1.5,this.spacingCorr=1.5}nouvelleVersion(){let Q;this.sup===1?Q=["typeE1","typeE2","typeE3"]:this.sup===2?Q=["typeE4","typeE5","typeE6"]:this.sup===3?Q=["typeE7","typeE8"]:Q=["typeE1","typeE2","typeE3","typeE4","typeE5","typeE6","typeE7","typeE8"];const J=U(Q,this.nbQuestions);for(let o=0,N=0;o<this.nbQuestions&&N<50;){let s="",a="",m="";switch(J[o]){case"typeE1":{const t=u(20,30),e=u(t+5,50),$=u(20,35)/100,i=u(14,19)/100;s=`  Une société de location de véhicules particuliers propose deux tarifs :<br>
              $\\bullet$ Tarif A : un forfait de $${t}$ € et $${r($,2)}$ € par km parcouru ;<br>
              $\\bullet$  Tarif B : un forfait de $${e}$ € et $${r(i,2)}$ € par km parcouru ;<br>
                      À partir de combien de km (arrondi à l'unité), le tarif B est-il plus intéressant que le tarif A ?<br>`,a=`En notant $x$, le nombre de km parcourus, on a :<br>
              $\\bullet$ Avec le tarif A, le prix à payer est : $${L($,t)}$ ;<br>
              $\\bullet$  Avec le tarif B, le prix à payer est : $${L(i,e)}$ ;<br>
                       Le tarif B est plus avantageux que le tarif A lorsque $x$ vérifie : $${L(i,e)} < ${L($,t)}$.<br>
                       On résout cette inéquation : <br>
              $\\begin{aligned}
              ${r(i,2)}x+${e}&<${r($,2)}x+${t}\\\\
              ${r(i,2)}x+${e}-${d(r($,2))}${d("\\textit{x}")}&< ${r($,2)}x-${d(r($,2))}${d("\\textit{x}")}+${t}\\\\
                     ${r(i-$)}x+${e}&<${t}\\\\
              ${r(i-$,2)}x+${e}-${d(r(e))}&<${t}-${e}\\\\
              ${r(i-$,2)}x&<${t-e}\\\\
      \\dfrac{${r(i-$,2)}x}{${d(r(i-$,2))}}&>\\dfrac{${t-e}}{${d(r(i-$,2))}}${h(7)} \\text{On divise par } ${r(i-$,2)} <0\\\\
      x&>\\dfrac{${C(t-e)}}{${r(C(i-$),2)}}
      \\end{aligned}$<br>`,Math.round((t-e)/(i-$))===(t-e)/(i-$)?(a+=`Comme $\\dfrac{${C(t-e)}}{${r(C(i-$),2)}}= ${r((t-e)/(i-$),2)}$, c'est donc pour une distance minimale de  $${d(r(Math.ceil((t-e)/(i-$))+1,0))}$ km que le tarif B est plus intéressant que le tarif A.
             `,m=r(Math.ceil((t-e)/(i-$))+1,0)):(a+=` Comme $\\dfrac{${C(t-e)}}{${r(C(i-$),2)}}\\simeq ${r((t-e)/(i-$),2)}$, c'est donc pour une distance minimale de  $${d(Math.ceil((t-e)/(i-$)))}$ km que le tarif B est plus intéressant que le tarif A.
                            `,m=r(Math.ceil((t-e)/(i-$)),0)),s+="<br>"+E(this,o,A.clavierDeBaseAvecFraction,{texteApres:" km"}),D(this,o,{reponse:{value:m}})}break;case"typeE2":{const t=_(),e=u(90,120),$=u(15,25)/100,i=u(20,35)*10;s=` Pour la location mensuelle d'un véhicule, une entreprise propose le tarif suivant :<br>
            Forfait de $${e}$ € quel que soit le nombre de km parcourus, puis un supplément par kilomètre parcouru de $${r($,2)}$ €. <br>
            
            ${t} loue une voiture à cette société. Elle a un budget de $${i}$ € et ne veut pas le dépasser.<br>
                      Quel nombre maximum de km (arrondi à l'unité) pourra-t-elle parcourir sans dépasser son budget  ?
                                   `,a=`En notant $x$, le nombre de km parcourus, le coût pour la location mensuelle est donné par : $${L($,e)}$.<br>
            Le budget de ${t} étant de  $${i}$ €, le nombre de km $x$ qu'elle pourra parcourir doit vérifier $${L($,e)}<${i}$.<br>
            $\\begin{aligned}
            ${L($,e)}&\\leqslant${i}\\\\
            ${r($,2)}x+${e}-${d(e)}&\\leqslant ${i}x-${d(e)}\\\\
            ${r($,2)}x&\\leqslant${i-e}\\\\
            x&\\leqslant\\dfrac{${i-e}}{${r($,2)}}
    \\end{aligned}$<br>`,a+=`Comme $\\dfrac{${i-e}}{${r($,2)}}${Math.round((i-e)/$)===(i-e)/$?"=":"\\simeq"} ${r((i-e)/$,2)}$, ${t} pourra faire au maximum  $${Math.floor((i-e)/$)}$ km pendant le mois avec son budget de $${i}$ €.
       `,m=r(Math.floor((i-e)/$),0),s+="<br>"+E(this,o,A.clavierDeBaseAvecFraction,{texteApres:" km"}),D(this,o,{reponse:{value:m}})}break;case"typeE3":{const t=u(7,25,[10,20])/2,e=u(70,150),$=u(200,400)*10;s=` À la mi-journée, la recette d'un musée s'élève à $${r(t*e,2)}$ € pour $${e}$ entrées. Le prix de l'entrée est unique.<br>
                Quel doit être le minimum d'entrées en deuxième partie de journée pour que la recette de la journée soit au moins égale à  $${r($)}$ € ?<br>
                Résoudre ce problème en écrivant et résolvant une inéquation modélisant la situation.
                                       `,a=`Le montant du billet d'entrée est donné par $${r(t*e,2)}${h(1)} € \\div ${e}=${ee(t)}$ €.<br>

                En notant $x$ le nombre d'entrées en deuxième partie de journée, on obtient : $${r(t*e,2)} +${r(t,2)}\\times x\\geqslant ${r($)}$.<br>

                $\\begin{aligned}
                ${r(t*e,2)} +${r(t,2)} x&\\geqslant ${r($)}\\\\
                ${r(t*e,2)} +${r(t,2)}x-${d(r(t*e,2))}&\\geqslant ${r($)}-${d(r(t*e,2))}\\\\
                ${r(t,2)}x&\\geqslant ${r($-t*e,2)}\\\\
                x&\\geqslant \\dfrac{${r($-t*e,2)}}{${r(t,2)}}\\\\
    \\end{aligned}$<br>
  Comme  $\\dfrac{${r($-t*e,2)}}{${r(t,2)}}${Math.round(($-t*e)/t)===($-t*e)/t?"=":"\\simeq"} ${r(($-t*e)/t,1)}$,
  il faudra au minimum ${Math.round(($-t*e)/t)===($-t*e)/t?`$${r(($-t*e)/t,0)}$`:`$${r(Math.floor(($-t*e)/t)+1,0)} $`} entrées pour que la recette de la journée soit au moins égale à  $${r($)}$ €.
                            `,m=Math.round(($-t*e)/t)===($-t*e)/t?r(($-t*e)/t,0):r(Math.floor(($-t*e)/t)+1,0),s+="<br>"+E(this,o,A.clavierDeBaseAvecFraction,{texteApres:"entrées"}),D(this,o,{reponse:{value:m}})}break;case"typeE4":{const t=R([!0,!1]),e=u(3,10),$=e+u(3,10),i=R([["au tiers",3],["au quart",4],["à la moitié",2],["au dixième",10],["au cinquième",5]]),l=new B($*e/2,i[1]*e/2+e/2).simplifie(),n=new B(e*$,e*i[1]+e).simplifie(),f=p(0,0,"A","below"),F=p(10,0,"B","below"),g=p(10,6,"C"),x=p(4,0,"M","below"),b=p(0,6,"D"),q=[],k=O([f,x,b],"black"),P=O([g,x,F],"black");k.couleurDeRemplissage=w("lightgray"),P.couleurDeRemplissage=w("lightgray"),q.push(j(f,F),j(F,g),j(b,f),j(g,b),W(f,F,g,b,x),k,P),q.push(v("x",c(f,x).x,c(f,x).y-.7,0,"black",1,"milieu",!0),v(`${r(e)}`,c(f,b).x-.5,c(f,b).y,0,"black",1,"milieu",!0),v(`${r($)}`,c(g,b).x,c(g,b).y+.5,0,"black",1,"milieu",!0)),s=` Soit $ABCD$ un rectangle tel que $AD=${e}$ et $DC=${$}$.<br>
            $M$ est un point du segment $[AB]$. On note $AM=x$.<br>
            Pour quelles valeurs de $x$ l'aire du triangle $AMD$ est-elle ${t?"au plus":"au moins"} égale ${i[0]} de l'aire du triangle $CMB$ ?<br>
              `,s+=H({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!1,amplitude:.5,scale:.5,style:"margin: auto"},q),a=` L'aire du triangle $AMD$ est : ${e%2===0?`$\\dfrac{x\\times ${e}}{2}=${r(e/2,0)}x$`:`$\\dfrac{x\\times ${e}}{2}$`}. <br>
            Comme $MB=${$}-x$, l'aire du triangle $CMB$ est : ${e%2===0?`$\\dfrac{(${$}-x)\\times ${e}}{2}=${r(e/2,0)}(${$}-x)$`:`$\\dfrac{(${$}-x)\\times ${e}}{2}$`}. <br>
            Le problème revient donc à déterminer les valeurs de $x$ telles que : $${e%2===0?`${r(e/2,0)}x`:`\\dfrac{${e}x}{2}`} ${t?"\\leqslant":"\\geqslant"} ${e%2===0?`\\dfrac{1}{${i[1]}}\\times ${r(e/2,0)}(${$}-x)`:`\\dfrac{1}{${i[1]}}\\times \\dfrac{${e}(${$}-x)}{2}`}$. <br>`,e%2===0?(a+=`$\\begin{aligned}
            ${r(e/2,0)}x &${t?"\\leqslant":"\\geqslant"}  \\dfrac{${r(e/2,0)}(${$}-x)}{${i[1]}}${h(7)}\\\\`,a+=` ${r(e/2,0)}x \\times ${i[1]}&${t?"\\leqslant":"\\geqslant"} \\dfrac{${r(e/2,0)}(${$}-x)}{${i[1]}}\\times ${i[1]} ${h(7)}\\text{ On  multiplie par ${i[1]}, le sens de l'inéquation ne change pas.}\\\\`,a+=` ${r(i[1]*e/2,0)}x &${t?"\\leqslant":"\\geqslant"}  ${r(e/2,0)}(${$}-x)\\\\`,a+=` ${r(i[1]*e/2,0)}x &${t?"\\leqslant":"\\geqslant"}  ${r($*e/2,0)}-${r(e/2,0)}x\\\\`,a+=` ${r(i[1]*e/2,0)}x +${r(e/2,0)}x&${t?"\\leqslant":"\\geqslant"}  ${r($*e/2,0)}\\\\`,a+=` ${r(i[1]*e/2+e/2,0)}x &${t?"\\leqslant":"\\geqslant"}  ${r($*e/2,0)}\\\\`,a+=` x &${t?"\\leqslant":"\\geqslant"}  ${l.texFraction}\\\\`,a+="\\end{aligned}$<br>",a+=`L'aire du triangle $AMD$ est ${t?"au plus":"au moins"} égale ${i[0]} de l'aire du triangle $CMB$ pour $x\\in ${t?`${d(`\\left[0\\,;\\,${l.texFraction}\\right]`)}`:`${d(`\\left[${l.texFraction}\\,;\\,${$}\\right]`)}`}$`,m=t?`[0;${l.texFraction}]`:`[${l.texFraction};${$}]`,s+="<br>"+E(this,o,A.clavierEnsemble)):(a+=`$\\begin{aligned}
              \\dfrac{${e} x}{2} &${t?"\\leqslant":"\\geqslant"} \\dfrac{${e}(${$}-x)}{${2*i[1]}}\\\\`,a+=`\\dfrac{${e} x}{2} \\times ${2*i[1]}&${t?"\\leqslant":"\\geqslant"} \\dfrac{${e}(${$}-x)}{${r(i[1]*2,0)}}\\times ${2*i[1]} ${h(7)}\\text{ On multiplie par ${2*i[1]}, le sens des inégalités ne change pas.}\\\\`,a+=` ${r(e*i[1],0)}x &${t?"\\leqslant":"\\geqslant"} ${e}(${$}-x)\\\\`,a+=` ${r(e*i[1],0)}x &${t?"\\leqslant":"\\geqslant"} ${e*$}-${e}x\\\\`,a+=` ${r(e*i[1],0)}x +${e}x&${t?"\\leqslant":"\\geqslant"} ${e*$}\\\\`,a+=` ${r(e*i[1]+e,0)}x &${t?"\\leqslant":"\\geqslant"} ${e*$}\\\\`,a+=` x &${t?"\\leqslant":"\\geqslant"}  ${n.texFraction}\\\\`,a+="\\end{aligned}$<br>",a+=`L'aire du triangle $AMD$ est ${t?"au plus":"au moins"} égale ${i[0]} de l'aire du triangle $CMB$ pour $x\\in ${t?`${d(`\\left[0\\,;\\,${l.texFraction}\\right]`)}`:`${d(`\\left[${l.texFraction}\\,;\\,${$}\\right]`)}`}$`,m=t?`[0;${l.texFraction}]`:`[${l.texFraction};${$}]`,s+="<br>"+E(this,o,A.clavierEnsemble)),D(this,o,{reponse:{value:m,options:{intervalle:!0}}})}break;case"typeE5":{const t=u(8,15),e=u(2,6),$=u(50,70),i=p(0,0,"A"),l=p(10,0,"B"),n=p(10,6,"C"),f=p(0,6,"D"),F=p(0,2,"E"),g=p(-2,2,"F"),x=p(-2,0,"G"),b=j(i,F);b.pointilles=2;const q=[],k=O([i,l,n,f,F,g,x],"black");k.couleurDeRemplissage=w("lightgray"),q.push(k,b),q.push(v("x",c(x,g).x-.5,c(x,g).y,0,"black",1,"milieu",!0),v("x",c(x,i).x,c(x,i).y-.5,0,"black",1,"milieu",!0),v(`x+${r(e)}`,c(l,n).x+1,c(l,n).y,0,"black",1,"milieu",!0),v(`${r(t)}`,c(i,l).x,c(i,l).y-.5,0,"black",1,"milieu",!0)),s=` On considère la figure ci-dessous (l'unité est le centimètre). <br>
            Quelles sont les valeurs possibles de $x$ pour que le périmètre de la figure soit supérieur à $${$}$ cm.<br>
              `,s+=H({xmin:-3,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!1,amplitude:.5,scale:.5,style:"margin: auto"},q),a=`Le périmètre de la figure est : $x+${t}+(x+${e})+${t}+${e}+x+x=4x+${2*e+2*t}$.<br>
            Le périmètre de la figure doit être supérieur à $${$}$, on cherche $x$ tel que : <br>

             `,a+=`$\\begin{aligned}
            4x+${2*e+2*t} &>${$}\\\\
            4x &>${$}-${2*e+2*t}\\\\
            4x&>${$-2*e-2*t}\\\\
            x&>\\dfrac{${$-2*e-2*t}}{4}`,a+="\\end{aligned}$<br>",a+=`Comme $\\dfrac{${$-2*e-2*t}}{4}=${r(($-2*e-2*t)/4,2)}$, $x$ doit être supérieur à $${r(($-2*e-2*t)/4,2)}$ cm pour que le périmètre de la figure soit supérieur à $${$}$ cm.

             `,m=new B($-2*e-2*t,4).texFraction,s+="<br>"+E(this,o,A.clavierDeBaseAvecFraction,{texteAvant:"$x>$"}),D(this,o,{reponse:{value:m}})}break;case"typeE6":{const t=u(1,3),e=R([6,8,10,12]),$=u(50,70),i=new B($-t**2,t+e/2).simplifie(),l=p(0,0,"A"),n=p(8,0,"B"),f=p(10,0,"C"),F=p(10,2,"D"),g=p(8,2,"E"),x=p(4,8,"F"),b=p(0,2,"G"),q=p(4,2,"H"),k=j(x,q);k.pointilles=2;const P=[],I=O([l,n,g,b],"black");I.couleurDeRemplissage=w("#7dbdd8");const K=O([n,f,F,g],"black");K.couleurDeRemplissage=w("#e1ac66");const V=O([b,g,x],"black");V.couleurDeRemplissage=w("#75ee7e"),P.push(I,K,V,k,Y(x,q,g)),P.push(v("x",c(l,n).x,c(l,n).y-.7,0,"black",1,"milieu",!0),v(`${r(t)}`,c(b,l).x-.8,c(b,l).y,0,"black",1,"milieu",!0),v(`${r(t)}`,c(n,f).x,c(n,f).y-.7,0,"black",1,"milieu",!0),v(`${r(e)}`,c(x,q).x+.5,c(x,q).y,0,"black",1,"milieu",!0)),s=` On considère la figure ci-dessous sur laquelle les longueurs sont en cm. <br>
            Quelles sont les valeurs possibles de $x$ pour que l'aire de cette  figure dépasse  $${$}$ cm$^2$ ?<br>
            Résoudre ce problème en le modélisant par une inéquation.<br>
              `,s+=H({xmin:-3,ymin:-1,xmax:12,ymax:9,pixelsParCm:20,mainlevee:!1,amplitude:.5,scale:.5,style:"margin: auto"},P),a=`La figure est constituée d'un rectangle, d'un carré et d'un triangle.<br>
           $\\bullet$  L'aire du rectangle est : $${t}\\times x=${M(t)}x$.<br>
           $\\bullet$  L'aire du carré est : $${t}\\times ${t}=${t**2}$.<br>
           $\\bullet$  L'aire du triangle est : $\\dfrac{${e}\\times x}{2}=${r(e/2,0)}x$.<br>
Le problème revient donc à trouver les valeurs de $x$ vérifiant : $${M(t)}x+${t**2}+${r(e/2,0)}x>${$}$, soit $${r(t+e/2,0)}x+${t**2}>${$}$.<br>

             `,a+=`$\\begin{aligned}
            ${r(t+e/2,0)}x+${t**2} &>${$}\\\\
            ${r(t+e/2,0)}x &>${$}-${t**2}\\\\
            ${r(t+e/2,0)}x &>${$-t**2}\\\\
            x&>\\dfrac{${$-t**2}}{${r(t+e/2,0)}}`,a+="\\end{aligned}$<br>",S($-t**2,t+e/2)===1?(a+=`$x$ doit être supérieur à $\\dfrac{${$-t**2}}{${r(t+e/2,0)}}$ cm pour que l'aire  de la figure dépasse $${$}$ cm$^2$.
            `,m=new B($-t**2,t+e/2).texFraction):(a+=`Comme $\\dfrac{${$-t**2}}{${r(t+e/2,0)}}=${i.texFraction}$, $x$ doit être supérieur à $${i.texFraction}$ cm pour que l'aire  de la figure dépasse $${$}$ cm$^2$.
             `,m=i.texFraction),s+="<br>"+E(this,o,A.clavierDeBaseAvecFraction,{texteAvant:"$x>$"}),D(this,o,{reponse:{value:m}})}break;case"typeE7":{const t=u(-10,10,[-1,0,1]),e=u(-10,10,[-1,0,1]),$=u(2,10),i=u(-20,20,0),l=new B(i-e*$,$*t).simplifie(),n=R([["strictement supérieur",">","<"],["strictement inférieur","<",">"],["inférieur ou égal ","\\leqslant","\\geqslant"],["supérieur ou égal ","\\geqslant","\\leqslant"]]);s=` ${T("Voici un programme de calcul :")} `,s+=G(["Choisir un nombre",`Multiplier ce nombre par $${t}$`,`Ajouter $${e}$`,`Multiplier le résultat par $${$}$`]),s+=`Quels nombres doit-on choisir au départ pour obtenir un nombre ${n[0]} à $${i}$.<br>
               `,a=`En notant $x$ le nombre choisi au départ, on obtient  :<br>
          $\\bullet$ Multiplier ce nombre par $${t}$ : ${h(6)}$${t}\\times x=${t}x$ ;<br>
          $\\bullet$ Ajouter $${e}$ : ${h(6)}$${t}x${y(e)}$ ; <br>
          $\\bullet$ Multiplier le résultat par $${$}$ :${h(6)}$${$}\\times (${t}x${y(e)})=${r($*t)}x${y(e*$)}$.<br>
          On cherche $x$ tel que : <br>`,a+=`$\\begin{aligned}
         ${r($*t)}x${y(e*$)} &${n[1]}${i}\\\\
         ${r($*t)}x &${n[1]}${i}${y(-e*$)}\\\\`,a+=` x &${$*t>0?`${n[1]}`:`${n[2]}`}\\dfrac{${i-e*$}}{${r($*t)}}\\\\`,a+="\\end{aligned}$<br>",S(i-e*$,$*t)===1?(a+=`On doit choisir $x${$*t>0?`${n[1]}`:`${n[2]}`}${l.texFraction}$ pour obtenir un nombre ${n[0]} à $${i}$. .
            `,s+="<br>"+E(this,o,A.clavierDeBaseAvecFraction,{texteAvant:$*t>0?`$x${n[1]}$`:`$x${n[2]}$`})):(a+=`Comme $\\dfrac{${i-e*$}}{${r($*t)}}=${l.texFraction}$, on doit choisir $x${$*t>0?`${n[1]}`:`${n[2]}`}${l.texFraction}$ pour obtenir un nombre ${n[0]} à $${i}$.
             `,s+="<br>"+E(this,o,A.clavierDeBaseAvecFraction,{texteAvant:$*t>0?`$x${n[1]}$`:`$x${n[2]}$`})),m=l.texFraction,D(this,o,{reponse:{value:m}})}break;case"typeE8":{const t=u(-10,10,0),e=u(-10,10,0),$=new B(e*e,t-2*e).simplifie(),i=R([["strictement supérieur",">","<"],["strictement inférieur","<",">"],["inférieur ou égal ","\\leqslant","\\geqslant"],["supérieur ou égal ","\\geqslant","\\leqslant"]]);s=`On donne les deux programmes de calcul suivants :<br>
            ${T("Programme 1 :")}<br>
                   `,s+=G(["Choisir un nombre",`Ajouter $${t}$`,"Multiplier le résultat par le nombre choisi au départ"]),s+=`<br>
            ${T("Programme 2 :")}<br>
                        `,s+=G(["Choisir un nombre",`Ajouter $${e}$`,"Prendre le carré du résultat"]),s+=`<br>Déterminer les nombres que l'on  doit entrer dans ces deux programmes pour qu'au final le résultat obtenu
            avec le programme 1 soit ${i[0]} à celui obtenu avec le programme 2.<br><br>`,a=`En notant $x$ le nombre choisi au départ : <br>
            On obtient avec le ${T("programme 1 :")} <br>
            $\\bullet$ Ajouter $${t}$ : ${h(5)} $x+${z(t)}$ ;<br>
            $\\bullet$ Multiplier le résultat par le nombre choisi au départ: ${h(5)} $x\\times(x${y(t)})=x^2${t>0?"+":"-"}${M(C(t))}x$.<br>
                   On obtient avec le ${T("programme 2 :")} <br>
        $\\bullet$ Ajouter $${e}$ :${h(5)} $x+${z(e)}$ ;<br>
        $\\bullet$ Prendre le carré du résultat :${h(5)} $(x${y(e)})^2=x^2${y(2*e)}x+${e*e}$.<br>
        
        Les nombres $x$ que l'on  doit entrer dans les deux programmes pour qu'au final le résultat obtenu avec le programme 1 soit ${i[0]} à celui obtenu avec le programme 2 vérifient : <br>
        $\\begin{aligned}
        x^2${t>0?"+":"-"}${M(C(t))}x & ${i[1]} x^2${y(2*e)}x+${e*e}\\\\
 ${M(t)}x & ${i[1]} ${y(2*e)}x+${e*e}\\\\
 ${2*e>0?`${M(t)}x- ${2*e}x`:`${M(t)}x- (${2*e}x)`}& ${i[1]} ${e*e}\\\\
 ${M(t-2*e)}x& ${i[1]} ${e*e}\\\\`,t-2*e===1?a+="":a+=` x &${t-2*e>0?`${i[1]}`:`${i[2]}`}\\dfrac{${e*e}}{${t-2*e}}\\\\`,a+="\\end{aligned}$<br>",S(e*e,t-2*e)===1?a+=`On doit choisir $x${t-2*e>0?`${i[1]}`:`${i[2]}`}${$.texFraction}$ pour que le résultat obtenu
  avec le programme 1 soit ${i[0]} à celui obtenu avec le programme 2.
`:a+=`Comme $\\dfrac{${e*e}}{${t-2*e}}=${$.texFraction}$, on doit choisir $x${t-2*e>0?`${i[1]}`:`${i[2]}`}${$.texFraction}$ pour que le résultat obtenu
  avec le programme 1 soit ${i[0]} à celui obtenu avec le programme 2.`,s+=E(this,o,A.clavierDeBaseAvecFraction,{texteAvant:t-2*e>0?`$x${i[1]}$`:`$x${i[2]}$`}),m=$.texFraction,D(this,o,{reponse:{value:m}})}break}this.questionJamaisPosee(o,m)&&(this.listeQuestions[o]=s,this.listeCorrections[o]=a,o++),N++}X(this)}}export{Le as dateDeModifImportante,Be as dateDePublication,Oe as default,Me as interactifReady,Ce as interactifType,je as refs,De as titre,Pe as uuid};
