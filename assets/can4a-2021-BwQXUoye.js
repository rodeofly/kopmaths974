import{d as l,y as z,r as n,a as p,e as s,m as c,a2 as w,p as F,aX as J,C as y,G as A,b as L,aH as S,aG as K,o as T,F as fe,k as ie,af as be,ax as W,s as se,l as pe}from"./embellissements-BYV7mIDn.js";import{s as d,h as he}from"./gestionInteractif-DujZpSu8.js";import{a as m}from"./questionMathLive-DdRvWqlN.js";import{t as re,a as G,s as ae}from"./deprecatedFractions-D2cbyAQf.js";import{E as xe}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./index-BUDQz6-w.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./colors-bl7PrqSM.js";const He="CAN 4e sujet 2021",Ve=!0,Xe="mathLive",ze="30/03/2022";function ne(Y,U){return Y-U}const Je="60563",Ke={"fr-fr":["can4a-2021"],"fr-ch":["NR"]};class We extends xe{constructor(){super(),this.nbQuestions=30,this.comment=`Cet exercice fait partie des annales des Courses Aux Nombres.<br>
  Il est composé de 30 questions réparties de la façon suivante :<br>
  Les 10 premières questions, parfois communes à plusieurs niveaux, font appel à des questions élémentaires et les 20 suivantes (qui ne sont pas rangées dans un ordre de difficulté) sont un peu plus « coûteuses » cognitivement.<br>
  Par défaut, les questions sont rangées dans le même ordre que le sujet officiel avec des données aléatoires. Ainsi, en cliquant sur « Nouvelles données », on obtient une nouvelle Course Aux Nombres avec des données différentes.
  En choisissant un nombre de questions inférieur à 30, on fabrique une « mini » Course Aux Nombres qui respecte la proportion de nombre de questions élémentaires par rapport aux autres.
  Par exemple, en choisissant 20 questions, la course aux nombres sera composée de 7 ou 8 questions élémentaires choisies aléatoirement dans les 10 premières questions du sujet officiel puis de 12 ou 13 autres questions choisies aléatoirement parmi les 20 autres questions du sujet officiel.`}nouvelleVersion(){const U=Math.min(l(this.nbQuestions*8/30),8),oe=Math.min(this.nbQuestions-U,22),le=z([1,2,3,4,5,6,7,8]).slice(-U).sort(ne),ce=z([9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]).slice(-oe).sort(ne),ue=le.concat(ce),me=[[1,5],[2,5],[3,5],[4,5],[6,5],[7,5],[8,5],[9,5]],de=[[2,3],[4,3],[5,3],[7,3],[8,3],[1,5],[2,5],[3,5],[4,5],[1,6],[5,6]];for(let j=0,a=0,u,t,o,r,P=[],q=[],Z,H,_,R,V,I,e,$,i,v,ee,X,$e,E,x,h,b,f,k,B,g,M,D,Q,N,O,C,te=0;j<this.nbQuestions&&te<50;){switch(ue[j]){case 1:e=n(4,9),$=n(4,9),t=`$${e} \\times ${$}=$ `,o=`$${e} \\times ${$}=${c(e*$)}$`,r=e*$,d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 2:e=l(n(6,12)*4),$=l(n(6,15)*3),X=p(["quart","tiers"]),X==="quart"&&(t=`Le quart de $${e}$ est :  `,o=`Prendre le quart d'un nombre revient à le diviser par $4$.<br>
                Ainsi le quart de $${e}$ est : $${e}\\div 4 =${c(s(e/4))}$.`,r=e/4),X==="tiers"&&(t=`Le tiers de $${$}$ est :  `,o=`Prendre le tiers d'un nombre revient à le diviser par $3$.<br>
                Ainsi le tiers de $${$}$ est : $${$}\\div 3 =${c(s($/3))}$.`,r=$/3),d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 3:e=n(101,121),$=n(21,45),r=e-$,t=`$${e} - ${$}=$ `,o=`$${e}-${$}=${c(e-$)}$`,r=l(e-$),d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 4:e=l(n(3,9)+n(1,4)/10),$=l(n(1,5)/10+n(2,9)/100),t=`$${s(e)}+${s($)}=$ `,o=`$${s(e)}+${s($)}=${c(s(e+$))}$ `,r=l(e+$),d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 5:e=n(11,18),$=n(3,5),i=e*$,p([!0,!1])?(t=`Complète : <br>$${e}\\times .... =${i}$`,o=`$${e}\\times ${c($)} =${i}$`):(t=`Complète :<br> $ .... \\times ${e}=${i}$`,o=`$ ${c($)} \\times ${e}=${i}$`),r=$,d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 6:e=l(n(1,9)*10+n(1,9)+.9+n(1,9)/100),$=l(n(1,9)*10+n(1,9)/10+.09+n(1,9)/1e3),p([!0,!1])?(t=`Quel nombre obtient-on si on ajoute un dixième à $${s(e)}$ ?`,o=`$1$ dixième $=0,1$, d'où $${s(e)}+0,1 =${c(s(e+.1))}$`,r=l(e+.1,2)):(t=`Quel nombre obtient-on si on ajoute un centième à $${s($)}$ ?`,o=`$1$ centième $=0,01$, d'où $${s($)}+0,01 =${c(s($+.01))}$`,r=l($+.01,3)),d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 7:e=n(1,9),$=n(1,9,e),x=l(e*100+$*10),v=p([.1,.01,.001]),r=l(x*v),v===.1&&(t=`$${x}\\times ${s(v)}=$`,o=`$${x}\\times ${s(v)}=${c(s(r))}$`,o+=`<br>
        Multiplier par $0,1$ revient à diviser par $10$. <br>
               $${x}\\times ${s(v)}=${x}\\div 10=${e}${$},\\underline{0}$.<br>
                  `),v===.01&&(t=`$${x}\\times ${s(v)}=$`,o=`$${x}\\times ${s(v)}=${c(s(r))}$`,o+=`    <br>    Multiplier par $0,01$ revient à diviser par $100$. <br>
                $${x}\\times ${s(v)}=${x}\\div 100=${e},${$}\\underline{0}$.<br>
                  `),v===.001&&(t=`$${x}\\times ${s(v)}=$`,o=`$${x}\\times ${s(v)}=${c(s(r))}$`,o+=`<br>
        Multiplier par $0,001$ revient à diviser par $1000$. <br>
                $${x}\\times ${s(v)}=${x}\\div 1000=0,${e}${$}\\underline{0}$.<br>
                  `),d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 8:e=n(2,5),$=n(2,9),i=n(2,9),p([!0,!1])?(r=l(e*1e4+$*100+i*10),t=`$${s(e)}\\times ${s(1e4)} + ${s($)}\\times 100 + ${s(i)}\\times 10=$`,o=`$${s(e)}\\times ${s(1e4)} + ${s($)}\\times 100 + ${s(i)}\\times 10 =
     ${s(e*1e4)} + ${s($*100)} + ${s(i*10)}=${c(s(r))}$`):(r=l(i*1e4+$*1e3+e*10),t=`$ ${s(i)}\\times ${s(1e4)}+ ${s($)}\\times ${s(1e3)} + ${s(e)}\\times 10 =$`,o=`$ ${s(i)}\\times ${s(1e4)}+ ${s($)}\\times ${s(1e3)} + ${s(e)}\\times 10  =
      ${s(i*1e4)}+ ${s($*1e3)} + ${s(e*10)} =${c(s(r))}$`),d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 9:e=n(2,6),R=l(2+n(1,3)/10+.05),x=n(2,4),r=l(R*x,2),t=`$${e}$ stylos identiques coûtent  $${s(R)}$ €. <br>
            Combien coûtent $${x*e}$ de ces mêmes stylos ?
             `,o=`$${e}$ stylos identiques coûtent  $${s(R)}$ €, donc $${x*e}$
           de ces mêmes stylos coûtent  $${x}$ fois plus, soit $${x}\\times ${s(R)}=${c(s(x*R))}$ €.`,d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")+" €"),u=1;break;case 10:e=n(11,24,20),r=l(101*e),t=`$${e}\\times 101=$`,o=`$${e}\\times 101 = ${s(101*e)}$<br>`,o+=`$${e}\\times 101 = ${e}\\times (100+1)=${e}\\times 100+${e}\\times 1=${s(e*100)}+${e}=${c(s(101*e))}$`,d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 11:e=n(-22,-11),$=n(-9,-2),t=`$${e}-(${$})=$`,o=`$${e}-(${$})=${e}+${s(-$)}=${c(e-$)}$.`,r=e-$,d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 12:e=p([2,2,2,3,3,4,5]),e===2&&($=n(3,6),r=l(e**$),t=`Recopie la bonne réponse.<br>
          $${e}^{${$}}$ est égal à :<br>`),e===3&&($=n(2,4),r=l(e**$),t=`Recopie la bonne réponse.<br>
           $${e}^{${$}}$ est égal à :<br>`),e===4&&($=n(2,3),r=l(e**$),t=`Recopie la bonne réponse.<br>
             $${e}^{${$}}$ est égal à :<br>`),e===5&&($=2,r=l(e**$),t=`Recopie la bonne réponse.<br>
               $${e}^{${$}}$ est égal à :<br>`),H=z([`$${s(r)}$`,`$${s(e*$)}$`,`$${s(e+$)}$`]),t+=`$\\square$ ${H[0]} ${se(6)} $\\square$ ${H[1]} ${se(6)} $\\square$ ${H[2]}`,o=`$${e}^{${$}}$ est le produit de $${$}$ facteurs tous égaux à $${e}$. Ainsi, $${e}^{${$}}=${c(e**$)}$.`,d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 13:g=n(8,12),e=l(g*n(2,7)),t=`Un rectangle a une aire de $${e}$ m$^2$ et sa longueur mesure $${g}$ m.<br>
            Détermine sa largeur.`,o=`L'aire d'un rectangle est obtenue  par le produit de sa longueur par sa largeur. <br>
          On obtient donc sa largeur
            en divisant l'aire par sa longueur : $\\ell=${e}\\div ${g}=${c(e/g)}$. `,r=l(e/g),d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")+"m"),u=1;break;case 14:e=p(W()),i=p([2,4]),$=w(1,e.d*i),p([!0,!1])?(t=`$${e.texFraction} + ${$.texFraction}=$
           `,o=`Pour additionner des fractions, on les met au même dénominateur.<br>

           Ainsi, $${e.texFraction} + ${$.texFraction}
           =\\dfrac{${e.n}\\times ${i}}{${e.d}\\times ${i}}+ ${$.texFraction}
          =${e.reduire(i).texFraction} + ${$.texFraction}
          =\\dfrac{${e.n*i}+${$.n}}{${$.d}}
          =\\dfrac{${e.n*i+$.n}}{${$.d}}${ae(e.n*i+$.n,$.d)}$.<br>
          Par conséquent, $ ${e.texFraction}+${$.texFraction}= ${c(G(e.n*i+$.n,$.d))}$.`):(t=`$ ${$.texFraction}+${e.texFraction}=$`,o=`Pour additionner des fractions, on les met au même dénominateur.<br>
           <br>
           Ainsi, $ ${$.texFraction}+${e.texFraction}
           = ${$.texFraction}+\\dfrac{${e.n}\\times ${i}}{${e.d}\\times ${i}}
          =${$.texFraction}+${e.reduire(i).texFraction}
          =\\dfrac{${$.n}+${e.n*i}}{${$.d}}
          =\\dfrac{${$.n+e.n*i}}{${$.d}}${ae(e.n*i+$.n,$.d)}$.<br>
          Par conséquent, $ ${$.texFraction}+${e.texFraction}= ${c(G(e.n*i+$.n,$.d))}$.`),r=w(e.n*i+$.n,$.d),d(this,a,r,{formatInteractif:"fractionEgale"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 15:e=p([2,3,6]),$=l(60/e),i=p([30,60,90,120]),r=l(i/e),t=`Une voiture roule à $${i}$ km/h. Combien de kilomètres parcourt-elle en $${$}$ minutes ?`,o=`La voiture parcourt $${l(i/e)}$ km.<br>
         En $${$}$ minutes, elle parcourt $${e}$ fois moins de km qu'en $1$ heure, soit $\\dfrac{${i}}{${e}}=
          ${c(l(i/e))}$ km.`,d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")+"km"),u=1;break;case 16:e=n(-19,-11),$=n(3,8),i=n(4,10),r=l(e+$*i),t=`$${e}+${$}\\times ${i}= $`,o=`La multiplication est prioritaire. On obtient : <br>
          $${e}+${$}\\times ${i}=${e}+${$*i}=${c(e+$*i)}$. `,d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 17:e=p(W()),i=p([2,3,4,5,6]),$=e.d*i,r=l(e.n*i,0),t=`Écris sous la forme d'un entier : $${e.texFraction}\\times ${$}$`,o=`$${e.texFraction}\\times ${$}= ${e.n}\\times\\dfrac{${$}}{${e.d}}=${e.n}\\times ${i}=${c(r)}$`,d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 18:e=p(W()),i=e.d,r=l(e*2),p([!0,!1])?($=e.n,v=w($,i),t=`L'opposé de $\\dfrac{${$}}{${i}}$ est : `,o=`Deux nombres sont opposés lorsque leur somme est nulle.<br>
              Ainsi, l'opposé de $\\dfrac{${$}}{${i}}$ est $${c("-")}${c(v.texFraction)}$ car $\\dfrac{${$}}{${i}}+\\left(-${v.texFraction}\\right)=0$.`,r=v.oppose()):($=e.n,v=w($,i),ee=w(i,$),t=`L'inverse de $\\dfrac{${$}}{${i}}$ est :`,o=`Deux nombres sont inverses l'un de l'autre lorsque leur produit vaut $1$.<br>
                Ainsi, l'inverse de $\\dfrac{${$}}{${i}}$ est $${c(G(i,$))}$ car $\\dfrac{${$}}{${i}}\\times ${G(i,$)}=1$.`,r=ee),d(this,a,r,{formatInteractif:"fractionEgale"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 19:e=be([0,1,2,3],3),t=`$10^${e[0]}+10^${e[1]}+10^${e[2]}= $`,o=`$10^${e[0]}+10^${e[1]}+10^${e[2]}=
    ${s(10**e[0])}+${s(10**e[1])}+${s(10**e[2])}
    =${c(s(10**e[0]+10**e[1]+10**e[2]))}$`,r=l(10**e[0]+10**e[1]+10**e[2]),d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 20:e=n(1,5)*10,E=n(2,9,5)*10,r=l(e*E/100),t=`$${E}\\,\\%$ de $${e}= $`,o=`          Prendre $${E}\\,\\%$  de $${e}$ revient à prendre $${E/10}\\times 10\\,\\%$  de $${e}$.<br>
          Comme $10\\,\\%$  de $${e}$ vaut $${e/10}$ (pour prendre $10\\,\\%$  d'une quantité, on la divise par $10$), alors
          $${E}\\,\\%$ de $${e}=${E/10}\\times ${e/10}=${c(r)}$.
         `,d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,""):t+="$\\ldots$",u=1;break;case 21:p([!0,!1])?(g=n(3,9),b=F(0,0,"B","below"),f=F(3,0,"C","below"),k=F(3,3,"D","above"),h=F(0,3,"A","above"),D=-1,N=-.5,Q=4.5,O=3.5,B=J(h,b,f,k),C=[],C.push(B[0]),C.push(y(`${L(g)} cm`,A(f,k).x+.5,A(f,k).y),ie(b,k),S(h,b,f,k)),r=l(g*g/2),t=`$ABCD$ est un carré. <br>
            Calcule l'aire du triangle $ABD$.<br>
            
            `,t+=T({xmin:D,ymin:N,xmax:Q,ymax:O,pixelsParCm:40,mainlevee:!1,amplitude:.5,scale:.9,style:"margin: auto"},C),o=`$ABD$ est un triangle rectangle isocèle. Son aire est donc la moitié de celle du carré :<br>
            $\\dfrac{${g}\\times ${g}}{2}=${c(s(g*g/2,1))}$ cm$^2$
                           `):(g=n(2,5),M=n(7,9),b=F(0,0,"B","below"),f=F(4,0,"C","below"),k=F(4,2.5,"D","above"),h=F(0,2.5,"A","above"),D=-1,N=-.8,Q=6,O=3,B=J(h,b,f,k),C=[],C.push(B[0]),C.push(y(`${L(g)} cm`,A(f,k).x+.5,A(f,k).y),y(`${L(M)} cm`,A(b,f).x,A(b,f).y-.4),ie(b,k),S(h,b,f,k)),r=l(g*M/2),t=`$ABCD$ est un rectangle. <br>
            Calcule l'aire du triangle $ABD$.<br>
            
            `,t+=T({xmin:D,ymin:N,xmax:Q,ymax:O,pixelsParCm:40,mainlevee:!1,amplitude:.5,scale:.9,style:"margin: auto"},C),o=`$ABD$ est un triangle rectangle. Son aire est donc la moitié de celle du rectangle : <br>
            $\\dfrac{${g}\\times ${M}}{2}=${c(s(g*M/2,2))}$ cm$^2$
            `),d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")+"cm$^2$"),u=1;break;case 22:q=p(de),e=w(q[0],q[1]),$=w(4*q[0],2*q[1]),_=new fe(-q[0],q[1]).simplifie(),t=`$A=${e.texFraction} -${$.texFraction}$<br>
           Donne la valeur de $A$ sous la forme d'une fraction simplifiée au maximum ou d'un nombre entier.`,o=` $A=${e.texFraction} -${$.texFraction}=${re(2*q[0],2*q[1])}-${$.texFraction}=${re(-2*q[0],2*q[1])}=${c(G(-2*q[0],2*q[1]))}$.
           <br>
          `,he(this,j,{reponse:{value:_.toLatex(),options:{fractionIrreductible:!0}}}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 23:e=n(-5,-2),$=n(2,4),I=n(-5,-2),i=l(e*$*I),t=`Complète l'égalité : <br>
            $${e}\\times ${$}\\times \\ldots =${i}$ `,r=I,o=`On cherche le nombre qui multiplié par $${e}\\times ${$}=${e*$}$ donne $${i}$, il s'agit de $\\dfrac{${i}}{${e*$}}=${c(I)}$. `,d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 24:e=n(1,6)*2,$=l(e+e/2),i=n(7,12)*2,r=l(i+i/2),t="Complète le tableau de proportionnalité :<br>",t+=`$
          \\begin{array}{|c|c|}
          \\hline
          ${e}&${$}\\\\
          \\hline
          ${i}&\\\\
          \\hline
          \\end{array}
          $
          
          `,o=`On constate que $${$}$ s'obtient en augmentant $${e}$ de la moitié de $${e}$.
              Ainsi, on obtient la quatrième proportionnelle en augmentant $${i}$ de la moitié de $${i}$.<br>
              La valeur cherchée est donc $${i}+${i/2}=${c(i+i/2)}$.`,d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 25:e=l(n(1,12)+n(1,9)/10),r=l(e*1e3),t=` $${s(e)}$ m$^3=$`,o=`Comme $1$ m$^3$= $1000$ L, $${s(e)}$ m$^3=${c(e*1e3)}$ L.`,d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,"")+"L":t+="$\\ldots$ L",u=1;break;case 26:e=n(10,29),$=n(3,8),I=n(-8,-2),t=`Calcule $${e}+${$}x$ pour $x=${I}$. `,o=`Pour $x=${I}$, on obtient :  $${e}+${$}x=${e}+${$}\\times(${I})=${c(e+$*I)}$.`,r=l(e+$*I),d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 27:for(e=p([2,3,4,5,6,10]),$=l(60/e),i=n(2,$-1)%10;i===0;)e=p([2,3,4,5,6,10]),$=l(60/e),i=n(2,$-1)%10;r=l(i*e),t=`Le débit d'eau d'un robinet est de $${$}$ L/min. <br>Combien de secondes faut-il pour remplir un seau de $${i}$ L ?`,o=`
          On commence par déterminer le temps en seconde (puisque dans la question,
             il est demandé un temps en seconde) qu'il faut pour remplir $1$ L.<br>
          Comme le débit est de  $${$}$ L
          pour une minute soit $60$ secondes, on divise $60$ par $${$}$ pour obtenir
          ce temps :  $\\dfrac{60}{${$}}=${e}$ s.<br>
          Puisqu'il faut $${e}$ s pour remplir un litre, il en faut $${i}$ fois plus pour remplir un seau de
          $${i}$ L, soit $${e}\\times ${i}=${c(e*i)}$ s.`,d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")+"secondes"),u=1;break;case 28:Z=[[3,4,5],[6,8,10]],e=p(Z),f=F(0,0,"C","below"),h=F(2,0,"A","below"),b=F(2,3,"B","above"),D=-1,N=-1,Q=3.5,O=3.5,B=J(h,b,f),C=[],V=p(["a","b","c"]),V==="a"&&(C.push(B[0]),C.push(y(`${L(e[0])} cm`,A(h,f).x,A(h,f).y-.3),y(`${L(e[2])} cm`,A(b,f).x-.6,A(b,f).y),S(h,b,f),K(b,h,f)),r=e[1],t="Calcule la longueur $AB$. <br>",t+=T({xmin:D,ymin:N,xmax:Q,ymax:O,pixelsParCm:40,mainlevee:!1,amplitude:.5,scale:1,style:"margin: auto"},C),t+="<br>$AB=$",o=`On utilise le théorème de Pythagore dans le triangle rectangle $ABC$ :<br>
              On a $AB^2=BC^2-AC^2$, soit $AB^2=${e[2]}^2-${e[0]}^2=${e[2]**2-e[0]**2}$.<br>
              Par conséquent, $AB=${c(e[1])}$.`),V==="b"&&(C.push(B[0]),C.push(y(`${L(e[1])} cm`,A(h,b).x+.5,A(h,b).y),y(`${L(e[2])} cm`,A(b,f).x-.6,A(b,f).y),S(h,b,f),K(b,h,f)),r=e[0],t="Calcule la longueur $AC$. <br>",t+=T({xmin:D,ymin:N,xmax:Q,ymax:O,pixelsParCm:40,mainlevee:!1,amplitude:.5,scale:1,style:"margin: auto"},C),t+="<br>$AC=$",o=`On utilise le théorème de Pythagore dans le triangle rectangle $ABC$ :<br>
                On a $AC^2=BC^2-AB^2$, soit $AC^2=${e[2]}^2-${e[1]}^2=${e[2]**2-e[1]**2}$.<br>
                Par conséquent, $AC=${c(e[0])}$.`),V==="c"&&(C.push(B[0]),C.push(y(`${L(e[1])} cm`,A(h,b).x+.5,A(h,b).y),y(`${L(e[0])} cm`,A(h,f).x,A(h,f).y-.3),S(h,b,f),K(b,h,f)),r=e[2],t="Calcule la longueur $BC$. <br>",t+=T({xmin:D,ymin:N,xmax:Q,ymax:O,pixelsParCm:40,mainlevee:!1,amplitude:.5,scale:1,style:"margin: auto"},C),t+="<br>$BC=$",o=`On utilise le théorème de Pythagore dans le triangle rectangle $ABC$ :<br>
                  On a $BC^2=AB^2+AC^2$, soit $BC^2=${e[0]}^2+${e[1]}^2=${e[0]**2+e[1]**2}$.<br>
                  Par conséquent, $BC=${c(e[2])}$.`),d(this,a,r,{formatInteractif:"calcul"}),this.interactif?t+=m(this,a,"")+"cm":t+=" $\\ldots$ cm",u=1;break;case 29:P=p(me),e=w(P[0],P[1]),t=`Donne l'écriture décimale de $${e.texFraction}$. <br>`,o=`$\\dfrac{1}{5}=0,2$, ainsi  $${e.texFraction}=${P[0]}\\times\\dfrac{1}{5}=${c(s(P[0]/P[1]))}$`,r=l(P[0]/P[1]),d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")),u=1;break;case 30:e=l(n(2,6)*10),$e=p(["pull","pantalon","tee-shirt","vêtement","blouson","sweat"]),$=p([5,15]),t=`Le prix d'un ${$e} est $${e}$ €. Il baisse de $${$}\\,\\%$ . <br>
          Quel est son nouveau prix ? `,$===5?o=`

       $10\\,\\%$  de $${e}$ est égal à $0,1\\times ${e}=${s(e/10,1)}$.<br>
      Puisque $5\\,\\%$  est deux fois plus petit  que $10\\,\\%$ ,  $5\\,\\%$  de $${e}$ est égal à $ ${e/10}\\div 2=${e/20}$.<br>
                   La réduction est donc de : $${s($*e/100)}$ €.<br>
           Le nouveau prix est :   $${e}-${s($*e/100)}= ${c(s(e-$*e/100))}$  €.

    `:o=`
                      $10\\,\\%$  de $${e}$ est égal à $0,1\\times ${e}=${s(e/10,1)}$.<br>
       $5\\,\\%$  de $${e}$  est égal à la moitié de $10\\,\\%$  de $${e}$, soit
      $${e/10}\\div 2=${e/20}$.<br>
      Puisque $15\\,\\%$  est égal à $10\\%$  $+5\\,\\%$ ,  $15\\,\\%$  de $${e}$ est égal à $${e/10}+${e/20}=${3*e/20}$.<br>
                      La réduction est donc de : $${s(3*e/20)}$ €.<br>
           Le nouveau prix est :   $${e}-${s($*e/100)}= ${c(s(e-$*e/100))}$  €.

  `,r=l(e-$*e/100),d(this,a,r,{formatInteractif:"calcul"}),this.interactif&&(t+=m(this,a,"")+"€"),u=1;break}this.listeQuestions.indexOf(t)===-1&&(this.listeQuestions[j]=t,this.listeCorrections[j]=o,j++,a+=u),te++}pe(this)}}export{ze as dateDePublication,We as default,Ve as interactifReady,Xe as interactifType,Ke as refs,He as titre,Je as uuid};
