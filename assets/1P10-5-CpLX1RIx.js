import{E as H}from"./Exercice-DtXhjCyI.js";import{g as W,af as X,a as Y,r as l,e as n,m as o,a$ as A,o as f,D as g,l as Z}from"./embellissements-BYV7mIDn.js";import{A as u}from"./arbres-BoNgbwQ8.js";import{c as r}from"./lists-i1i4IA1M.js";import{p as ee}from"./Personne-DRrbQFAY.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const ve="Résoudre des problèmes avec des probabilités (E3C)",fe="29/04/2025",ge="0e166",he={"fr-fr":["1P10-5"],"fr-ch":["3mP1-6"]};class qe extends H{constructor(){super(),this.nbQuestions=1,this.sup=8,this.spacing=1.5,this.spacingCorr=1.5,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Maladie/Vaccin","2 : Sandwich/dessert","3 : Jeu de fléchettes","4 : Vacances au camping","5 : L'agence de voyage","6 : Le salon de coiffure","7 : Le portique de sécurité","8 : Mélange"].join(`
`)]}nouvelleVersion(){const K=W({saisie:this.sup,min:1,max:8,melange:8,defaut:8,nbQuestions:this.nbQuestions}),a=X(K,this.nbQuestions);for(let t=0,i,P,z=0,v,O,s,$,y,h,k,D,S,E,M,C,G,c,T,w,j,d,b,m,x,q,_,p,Q,F,e,R,I,J,B,L,U,V,N;t<this.nbQuestions&&z<50;){switch(F=a[t]===1?[["M","T"],["A","S"],["M","S"],["A","T"]]:a[t]===2?[["S","D"],["S","R"],["A","T"],["K","L"]]:a[t]===3?[["C","G"],["F","G"],["E","G"]]:a[t]===4?[["F","A"],["L","A"],["F","C"]]:a[t]===5?[["A","V"],["A","G"],["I","G"]]:a[t]===6?[["C","E"],["C","F"],["S","E"]]:a[t]===7?[["M","S"],["T","S"],["L","S"]]:[["C","G"],["F","G"],["E","G"]],e=Y(F),v=ee(),h=l(3,7),k=l(1,9,h),O=l(1,8),s=a[t]===1?l(3,9)/1e3:a[t]===2?l(60,85)/100:a[t]===3?l(20,40)/100:a[t]===4?l(51,65)/100:a[t]===5?l(2,4)/10:a[t]===6?l(2,4)/10:a[t]===7?O/500:l(2,4)/10,m=1-s,c=a[t]===1?l(91,95)/100:a[t]===2?l(20,35)/100:a[t]===3?h/10:a[t]===4?l(36,45)/100:a[t]===5?l(36,45)/100:a[t]===6?l(40,60)/100:a[t]===7?l(95,99)/100:l(2,4)/10,x=1-c,b=a[t]===1?l(1,4)/100:a[t]===2?l(52,65)/100:a[t]===3?k/10:a[t]===4?l(25,35)/100:a[t]===5?l(60,70)/100:a[t]===6?l(23,45)/100:a[t]===7?l(6,10)/100:l(2,4)/10,q=1-b,d=s*c,j=s*x,w=m*b,T=m*q,$=d+w,y=j+T,M=d/$,G=j/y,C=w/$,L=`$${e[0]}$ et $\\overline{${e[0]}}$ forment une partition de l'univers. Donc, d'après la formule des probabilités totales  : <br>
                $\\begin{aligned}
                P(${e[1]})&=P(${e[0]}\\cap ${e[1]})+P(\\overline{${e[0]}}\\cap ${e[1]})\\\\
                &=P(${e[0]})\\times P_{${e[0]}}(${e[1]})+P(\\overline{${e[0]}})\\times P_{\\overline{${e[0]}}}(${e[1]})\\\\
                &=${n(s,5)}\\times ${n(c,5)}+${n(m,5)}\\times ${n(b,5)}\\\\
                &=${o(`${n($,5)}`)}
                \\end{aligned}$<br>`,N=`
                $\\begin{aligned}
              P(${e[0]}\\cap ${e[1]})&=P(${e[0]})\\times P_{${e[0]}}(${e[1]})\\\\
              &=${n(s,4)}\\times ${n(c,4)}\\\\
              &=${o(`${n(d,5)}`)}
              \\end{aligned}$<br>`,R=`
              $\\begin{aligned}
            P(\\overline{${e[0]}}\\cap ${e[1]})&=P(\\overline{${e[0]}})\\times P_{\\overline{${e[0]}}}(${e[1]})\\\\
            &=${n(m,4)}\\times ${n(b,4)}\\\\
            &=${o(`${n(w,5)}`)}
            \\end{aligned}$<br>`,I=`
            $\\begin{aligned}
          P(\\overline{${e[0]}}\\cap \\overline{${e[1]}})&=P(\\overline{${e[0]}})\\times P_{\\overline{${e[0]}}}(\\overline{${e[1]}})\\\\
          &=${n(m,4)}\\times ${n(q,4)}\\\\
          &=${o(`${n(T,5)}`)}
          \\end{aligned}$<br>`,J=`
              $\\begin{aligned}
            P(${e[0]}\\cap \\overline{${e[1]}})&=P(${e[0]})\\times P_{${e[0]}}(\\overline{${e[1]}})\\\\
            &=${n(s,4)}\\times ${n(x,4)}\\\\
            &=${o(`${n(j,5)}`)}
            \\end{aligned}$<br>`,U=`
               $\\begin{aligned}
              P_${e[1]}\\left(\\overline{${e[0]}}\\right)&=\\dfrac{P(\\overline{${e[0]}}\\cap ${e[1]})}{P(${e[1]})}\\\\
              &=\\dfrac{${n(m,5)}\\times ${n(b,5)}}{${n($,5)}}\\\\
              &=\\dfrac{${n(w,5)}}{${n($,5)}}\\\\
              &\\approx ${this.sup===1?`${o(`${n(C,3,!0)}`)}`:this.sup===2?`${o(`${n(C,2,!0)}`)}`:`${o(`${n(C,3)}`)}`}
              \\end{aligned}$<br>`,B=`
               $\\begin{aligned}
              P_${e[1]}\\left(${e[0]}\\right)&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[1]})}\\\\
              &=\\dfrac{${n(s,5)}\\times ${n(c,5)}}{${n($,5)}}\\\\
              &=\\dfrac{${n(d,5)}}{${n($,5)}}\\\\
              &\\approx  ${this.sup===4?` ${o(`${n(M,2,!0)}`)}`:`${o(`${n(M,3,!0)}`)}`}
              \\end{aligned}$<br>`,V=`
               $\\begin{aligned}
              P_{\\overline{${e[1]}}}\\left(${e[0]}\\right)&=\\dfrac{P(${e[0]}\\cap \\overline{${e[1]}})}{P(\\overline{${e[1]}})}\\\\
              &=\\dfrac{${n(s,5)}\\times ${n(x,5)}}{1-${n($,5)}}\\\\
              &=\\dfrac{${n(j,5)}}{${n(y,5)}}\\\\
              &\\approx  ${o(`${n(G,2,!0)}`)}
              \\end{aligned}$<br>`,S=new u({racine:!0,nom:"",proba:1,visible:!1,alter:"",enfants:[new u({rationnel:!1,nom:`${e[0]}`,proba:s,enfants:[new u({rationnel:!1,nom:`${e[1]}`,proba:c}),new u({rationnel:!1,nom:`\\overline{${e[1]}}`,proba:x})]}),new u({rationnel:!1,nom:`\\overline{${e[0]}}`,proba:m,enfants:[new u({rationnel:!1,nom:`${e[1]}`,proba:b}),new u({rationnel:!1,nom:`\\overline{${e[1]}}`,proba:q})]})]}),S.setTailles(),p=S.represente(0,9,0,2,!0,1,2),D=new u({racine:!0,nom:"",proba:1,visible:!1,alter:"\\ldots",enfants:[new u({rationnel:!1,nom:`${e[0]}`,proba:s,visible:!1,alter:"\\ldots",enfants:[new u({rationnel:!1,nom:`${e[1]}`,proba:c,visible:!1,alter:"\\ldots"}),new u({rationnel:!1,nom:`\\overline{${e[1]}}`,proba:x,visible:!1,alter:"\\ldots"})]}),new u({rationnel:!1,nom:`\\overline{${e[0]}}`,proba:m,visible:!1,alter:"\\ldots",enfants:[new u({rationnel:!1,nom:`${e[1]}`,proba:c,visible:!1,alter:"\\ldots"}),new u({rationnel:!1,nom:`\\overline{${e[1]}}`,proba:q,visible:!1,alter:"\\ldots"})]})]}),D.setTailles(),_=D.represente(0,9,0,2,!0,1,2),E=new u({racine:!0,nom:"",proba:1,visible:!1,alter:"\\ldots",enfants:[new u({rationnel:!1,nom:`${e[0]}`,proba:s,visible:!1,alter:"\\ldots",enfants:[new u({rationnel:!1,nom:`${e[1]}`,proba:c}),new u({rationnel:!1,nom:`\\overline{${e[1]}}`,proba:x,visible:!1,alter:"\\ldots"})]}),new u({rationnel:!1,nom:`\\overline{${e[0]}}`,proba:m,visible:!1,alter:"\\ldots",enfants:[new u({rationnel:!1,nom:`${e[1]}`,proba:c,visible:!1,alter:"\\ldots"}),new u({rationnel:!1,nom:`\\overline{${e[1]}}`,proba:q,visible:!1,alter:"\\ldots"})]})]}),E.setTailles(),Q=E.represente(0,9,0,2,!0,1,2),a[t]){case 1:i=`Le dépistage d'une maladie particulière que l'on appelle $M$ s'effectue par un test basé sur le dosage d'une hormone particulière. <br>
          D'après une étude, cette maladie $M$ touche $${n(s*100,4)}\\,\\%$ de la population.<br>
Si une personne est atteinte par la maladie $M$, le test sera positif dans $${n(c*100,4)}\\,\\%$ des cas ; alors que si la personne n'est pas atteinte par la maladie $M$, le test sera négatif dans $${n(q*100,4)}\\,\\%$ des cas.<br>
On soumet à ce test une personne prise au hasard dans la population.<br>
On note :<br>`,i+=r({items:[`$${e[0]}$ l'événement : « La personne est atteinte par la maladie $M$ »;`,`$${e[1]}$ l'événement :  « Le test est positif ».`],style:"fleches"}),i+=r({items:["Traduire l'énoncé à l'aide d'un arbre pondéré.","Déterminer la probabilité pour que le test soit positif et que la personne choisie ne soit pas malade.","Déterminer la probabilité pour que le test soit positif.",` Calculer $P_${e[1]}\\left(\\overline{${e[0]}}\\right)$ (Arrondir à $10^{-3}$ près). Interpréter ce résultat dans le contexte de l'exercice.`],style:"nombres"}),P=r({items:[f(Object.assign({scale:.7,style:"inline"},g(p)),p),`La probabilité pour que le test soit positif et que la personne choisie ne soit pas malade est donnée par $P(\\overline{${e[0]}}\\cap ${e[1]})$.<br>
              $\\begin{aligned}
              P(\\overline{${e[0]}}\\cap ${e[1]})&=P(\\overline{${e[0]}})\\times P_{\\overline{${e[0]}}}(${e[1]})\\\\
              &=${n(m,4)}\\times ${n(b,4)}\\\\
              &=${o(`${n(w,5)}`)}
              \\end{aligned}$`,`${L}`,`On a :<br>
               ${U}
              La probabilité que la personne ne soit pas malade sachant que le test est positif est $${o(`${n(C,3)}`)}$.`],style:"nombres"});break;case 2:i=`Un snack propose deux types de plats : des sandwichs et des pizzas.<br>
Le snack propose également plusieurs desserts.<br>
La gérante constate que $${n(s*100,4)}\\,\\%$ des clients qui achètent un plat choisissent un sandwich et que parmi ceux-ci seulement $${n(c*100,4)}\\,\\%$ prennent également un dessert.<br>
Elle constate aussi que $${n(q*100,4)}\\,\\%$ des clients qui ont choisi une pizza comme plat ne prennent pas de dessert.<br>
On choisit au hasard un client ayant acheté un plat dans ce snack.<br>
On considère les événements suivants :`,i+=r({items:[`$${e[0]}$ l'événement : « Le client interrogé a choisi un sandwich »;`,`$${e[1]}$ l'événement : « Le client interrogé a choisi un dessert ».`],style:"fleches"}),i+=r({items:["Sans justifier, recopier puis compléter l'arbre pondéré suivant :<br>"+f(Object.assign({scale:.7,style:"inline"},g(_)),_),"Calculer la probabilité que le client ait choisi un sandwich et un dessert.",`Démontrer que $P(${e[1]}) = ${n($,5)}$.`," Sachant que le client a acheté un dessert, quelle est la probabilité, arrondie à $0,01$ près, qu'il ait acheté une pizza ?",`Les évènements $${e[0]}$ et $${e[1]}$ sont-ils indépendants ? Justifier.`],style:"nombres"}),P=r({items:[f(Object.assign({scale:.7,style:"inline"},g(p)),p),`La probabilité la probabilité que le client ait choisi un sandwich et un dessert est donnée par  $P(${e[0]}\\cap ${e[1]})$.<br>
            ${N}`,`${L}`,`La probabilité que le client ait acheté une pizza sachant qu'il a acheté un dessert est donnée par $P_${e[1]}\\left(\\overline{${e[0]}}\\right)$.<br>
            ${U}`,`Comme  $P(${e[0]}\\cap ${e[1]})=${n(d,5)}$ et $P(${e[0]})\\times P(${e[1]})=${n(s,5)}\\times ${n($,5)}=${n(s*$,5)}$, on en déduit que $P(${e[0]}\\cap ${e[1]})\\neq P(${e[0]})\\times P(${e[1]})$. <br>
            Les événements $${e[0]}$ et $${e[1]}$ ne sont donc pas indépendants.`],style:"nombres"});break;case 3:i=`${v} joue à un jeu dont une partie est constituée d'un lancer d'une fléchette sur une cible suivi d'un tirage au sort dans deux urnes contenant des tickets marqués «  gagnant » ou
« perdant » indiscernables.<br>`,i+=r({items:[" S'il tire un ticket marqué « gagnant », il pourra recommencer une partie. ;",` S'il atteint le centre de la cible, ${v} tire un ticket dans l'urne $U_1$ contenant exactement ${A(h)} ${h===1?"ticket marqué":"tickets marqués"}  « gagnant » et ${A(10-h)}  ${10-h===1?"ticket marqué":"tickets marqués"} « perdant »`,`S'il n'atteint pas le centre de la cible (donc même s'il n'atteint pas la cible), ${v} tire un ticket dans l'urne $U_2$ contenant exactement ${A(k)}  ${k===1?"ticket marqué":"tickets marqués"} « gagnant » et ${A(10-k)}  ${10-k===1?"ticket marqué":"tickets marqués"} « perdant ».`],style:"fleches"}),i+=`${v} atteint le centre de la cible avec une probabilité de $${n(s,2)}$.<br>
On note les évènements suivants :<br>`,i+=r({items:[`$${e[0]}$ l'événement : « ${v} atteint le centre de la cible »;`,`$${e[1]}$ l'événement : « ${v} tire un ticket lui offrant une autre partie ».`],style:"fleches"}),i+=r({items:[`Recopier et compléter l'arbre pondéré suivant en justifiant la valeur $${n(c,2)}$ :<br>`+f(Object.assign({scale:.7,style:"inline"},g(Q)),Q),`Calculer la probabilité de l'événement $\\overline{${e[0]}}\\cap ${e[1]}$. Interpréter ce résultat.`,`Montrer que la probabilité qu'à l'issue d'une partie ${v} en gagne une nouvelle est égale à $${n($,5)}$.`,`Sachant que ${v} a gagné une nouvelle partie, quelle est la probabilité qu'il ait atteint le centre de la cible ? <br>Arrondir le résultat à $10^{-3}$.`],style:"nombres"}),P=r({items:[f(Object.assign({scale:.7,style:"inline"},g(p)),p)+`Quand ${v} atteint la cible, il tire un ticket dans l'urne $U_1$ qui contient ${A(h)} ${h===1?"ticket marqué":"tickets marqués"}  « gagnant » sur un total de $10$ tickets.<br>
                Ainsi, la probabilité d'obtenir un ticket  « gagnant » est $\\dfrac{${h}}{10}=${o(`${n(c,2)}`)}$.`,`On a :<br>
              ${R}`,`${L}`,`La probabilité que ${v} ait atteint le centre de la cible sachant qu'il a gagné une nouvelle partie est donnée par $P_${e[1]}\\left(${e[0]}\\right)$.<br>
              ${B}`],style:"nombres"});break;case 4:i="Une enquête réalisée dans un camping a donné les résultats suivants :<br>",i+=r({items:[` $${n(s*100,2)}\\,\\%$ des campeurs viennent en famille, les autres viennent entre amis ;`,` parmi ceux venant en famille, $${n(c*100,2)}\\,\\%$ profitent des activités du camping ;`,`parmi ceux venant entre amis, $${n(b*100,2)}\\,\\%$ ne profitent pas des activités du camping.`],style:"fleches"}),i+="On choisit au hasard un client de ce camping et on considère les évènements suivants :",i+=r({items:[`$${e[0]}$ l'événement : « Le campeur choisi est venu en famille »;`,`$${e[1]}$ l'événement : « Le campeur choisi profite des activités du camping ».`],style:"fleches"}),i+=r({items:["Recopier et compléter l'arbre pondéré suivant. <br>"+f(Object.assign({scale:.7,style:"inline"},g(_)),_),`Calculer $P(${e[0]}\\cap \\overline{${e[1]}})$. Interpréter ce résultat.`,`Montrer que $P(${e[1]})=${n($,5)}$.`,`Sachant que le campeur choisi a profité des activités du camping, calculer la probabilité qu'il soit venu en famille. <br>
                  Arrondir le résultat au centième.`],style:"nombres"}),P=r({items:[f(Object.assign({scale:.7,style:"inline"},g(p)),p),`On a :<br>
                ${J}
                La probabilité de choisir un client qui vient en famille et qui ne profite pas des activités du camping est $${n(j,5)}$.`,`${L}`,`La probabilité que le campeur choisi soit venu en famille sachant qu'il a profité des activités du camping est donnée par  $P_${e[1]}\\left(${e[0]}\\right)$.<br>
                ${B}`],style:"nombres"});break;case 5:i=`Une agence de voyage propose deux formules week-end pour se rendre à Londres depuis Paris.<br>
            Les clients choisissent leur moyen de transport : train ou avion.<br>
            De plus, s'ils le souhaitent, ils peuvent compléter leur formule par l'option  « visites guidées ».<br>
            Une étude a produit les données suivantes :`,i+=r({items:[` $${n(s*100,2)}\\,\\%$ des clients optent pour l'avion ;`,` parmi les clients ayant choisi le train, $${n(b*100,2)}\\,\\%$ choisissent aussi l'option  « visites guidées » ;`,` $${n(d*100,2)}\\,\\%$ des clients ont choisi à la fois l'avion et l'option  « visites guidées ».`],style:"fleches"}),i+="On interroge au hasard un client de l'agence ayant souscrit à une formule week-end à Londres et on considère les évènements suivants :",i+=r({items:[`$${e[0]}$ l'événement : « Le client a choisi l'avion » ;`,`$${e[1]}$ l'événement : « Le client a choisi l'option  "visites guidées" ».`],style:"fleches"}),i+=r({items:["Écrire les trois probabilités, données dans l'énoncé, avec les notations qui conviennent.","Réaliser un arbre pondéré modélisant la situation.",`Déterminer $P_{${e[0]}}(${e[1]})$.`,`Démontrer que la probabilité pour que le client interrogé ait choisi l'option  « visites guidées »  est  égale à $${n($,4)}$. `,`Calculer la probabilité pour que le client interrogé ait pris l'avion sachant qu'il n'a pas choisi l'option  visites guidées. <br>
                    Arrondir le résultat au centième.`,`On interroge au hasard deux clients de manière aléatoire et indépendante.<br> 
                    Quelle est la probabilité qu'aucun des deux ne prenne l'option  visites guidées ? <br>
                    On donnera le résultat sous forme d'une valeur approchée à $10^{-3}$ près.`],style:"nombres"}),P=r({items:[`D'après l'énoncé, on a : <br>
                $P(${e[0]})=${n(s,2)}$,  $P_{\\overline{${e[0]}}}(${e[1]})=${n(b,2)}$ et $P(${e[0]}\\cap ${e[1]})=${n(d,3)}$.
                `,f(Object.assign({scale:.7,style:"inline"},g(p)),p),`On a :<br>
                  $\\begin{aligned}
              P_${e[0]}\\left(${e[1]}\\right)&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[0]})}\\\\
              &=\\dfrac{${n(d,5)}}{${n(s,5)}}\\\\
              &=   ${o(`${n(c,2,!0)}`)}
              \\end{aligned}$
                 `,`${L}`,`La probabilité  que le client interrogé ait pris l'avion sachant qu'il n'a pas choisi l'option  « visites guidées » est $P_{\\overline{${e[1]}}}(${e[0]})$.<br>
                ${V}  `,`En notant $\\overline {${e[1]}}_1$ l'événement « le premier client n'a pas choisi  l'option   visites guidées  et $\\overline {${e[1]}}_2$ l'événement « le second client n'a pas choisi  l'option  « visites guidées », et puisque ces deux événements sont indépendants, on a  : <br>
                $P(\\overline {${e[1]}}_1\\cap\\overline {${e[1]}}_2)=P(\\overline {${e[1]}}_1)\\times P(\\overline {${e[1]}}_2)$.<br>
                Or $P(\\overline {${e[1]}}_1)=P(\\overline {${e[1]}}_2)=1-${n($,5)}=${n(y,4)}$.<br>
                On en déduit : $P(\\overline {${e[1]}}_1\\cap\\overline {${e[1]}}_2)=${n(y,4)}\\times ${n(y,4)}\\approx${n(y**2,3,!0)}$.<br>
                Ainsi, la probabilité qu'aucun des deux ne prenne l'option   visites guidées  est environ $${o(`${n(y**2,3,!0)}`)}$. `],style:"nombres"});break;case 6:i="Une chaîne de salons de coiffure propose à ses clients qui viennent pour une coupe, deux prestations supplémentaires cumulables :<br>",i+=i+=r({items:[" Une coloration naturelle à base de plantes appelée « couleur-soin » ;"," Des mèches blondes pour donner du relief à la chevelure, appelées « effet coup de soleil »."],style:"fleches"})+"Il apparaît que :",i+=r({items:[` $${n(s*100,2)}\\,\\%$ des clients demandent une « couleur-soin » ;`,` parmi ceux qui ne veulent pas de « couleur-soin », $${n(b*100,2)}\\,\\%$ des clients demandent un « effet coup de soleil »  ;`,` par ailleurs, $${n(d*100,2)}\\,\\%$ demandent une « couleur-soin » et un « effet coup de soleil ».`],style:"fleches"}),i+="On interroge un client au hasard. On notera :",i+=r({items:[`$${e[0]}$ l'événement : « Le client souhaite une "couleur-soin" »;`,`$${e[1]}$ l'événement : « Le client souhaite un "effet coup de soleil" ».`],style:"fleches"}),i+=r({items:[`Donner les valeurs de $P(${e[0]})$, $P(${e[0]}\\cap ${e[1]})$ et $P_{\\overline{${e[0]}}}(${e[1]})$.`,"Calculer la probabilité que le client ne souhaite ni une « couleur-soin » , ni un « effet coup de soleil ».","Calculer la probabilité qu'un client choisisse l'« effet coup de soleil » sachant qu'il a pris une « couleur-soin ». ",`Montrer que la probabilité de l'événement $${e[1]}$ est $${n($,4)}$.`,`Les événements $${e[0]}$ et $${e[1]}$ sont-ils indépendants ? Justifier.`],style:"nombres"}),P=r({items:[`D'après l'énoncé, on a : <br>
                  $P(${e[0]})=${o(`${n(s,2)}`)}$,  $P(${e[0]}\\cap ${e[1]})=${o(`${n(d,3)}`)}$ et $P_{\\overline{${e[0]}}}(${e[1]})=${o(`${n(b,2)}`)}$.
                  `,"On peut réaliser un arbre pondéré qui sera complété au fur et à mesure des questions : "+f(Object.assign({scale:.7,style:"inline"},g(p)),p)+`La probabilité que le client ne souhaite ni une « couleur-soin » , ni un « effet coup de soleil » est $P(\\overline{${e[0]}}\\cap \\overline{${e[1]}})$ :<br>
            ${I}`,`On a :<br>
                    $\\begin{aligned}
                P_${e[0]}\\left(${e[1]}\\right)&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[0]})}\\\\
                &=\\dfrac{${n(d,5)}}{${n(s,5)}}\\\\
                &=   ${o(`${n(c,2,!0)}`)}
                \\end{aligned}$
                   `,`${L}`,`Comme  $P(${e[0]}\\cap ${e[1]})=${n(d,5)}$ et $P(${e[0]})\\times P(${e[1]})=${n(s,5)}\\times ${n($,5)}=${n(s*$,5)}$, on en déduit que $P(${e[0]}\\cap ${e[1]})\\neq P(${e[0]})\\times P(${e[1]})$. <br>
            Les événements $${e[0]}$ et $${e[1]}$ ne sont donc pas indépendants.`],style:"nombres"});break;case 7:default:i=`Dans un aéroport, les portiques de sécurité servent à détecter les objets métalliques que peuvent emporter les voyageurs.<br>
On choisit au hasard un voyageur franchissant un portique. <br>
On note :`,i+=r({items:[`$${e[1]}$ l'événement : « Le voyageur fait sonner le portique » ;`,`$${e[0]}$ l'événement : « Le voyageur porte un objet métallique » .`],style:"fleches"}),i+=`On considère   ${O===1?`qu'${A(O)} voyageur sur $500$ porte sur lui`:`que ${A(O)} voyageurs sur $500$ portent sur eux`} un objet métallique. <br>
          On admet que : `+r({items:[` Lorsqu'un voyageur franchit le portique avec un objet métallique, la probabilité que le portique sonne est égale à $${n(c,4)}$ ;`,`Lorsqu'un voyageur franchit le portique sans objet métallique, la probabilité que le portique ne sonne pas est de $${n(q,4)}$.`],style:"fleches"}),i+=r({items:[`À l'aide des données de l'énoncé, préciser les valeurs de $P(${e[0]})$, $P_{${e[0]}}(${e[1]})$ et $P_{\\overline{${e[0]}}}(\\overline{${e[1]}})$.`,"Recopier et compléter l'arbre pondéré ci-dessous, modélisant cette situation : <br>"+f(Object.assign({scale:.7,style:"inline"},g(_)),_),`Montrer que $P(${e[1]})=${n($,5)}$.`,`En déduire la probabilité qu'un voyageur porte un objet métallique sachant qu'il a fait
sonner le portique en passant. On arrondira le résultat à $10^{-3}$. 
                  `,`Les événements $${e[0]}$ et $${e[1]}$ sont-ils indépendants ? Justifier.`],style:"nombres"}),P=r({items:[`D'après l'énoncé, on a : <br>
                  $P(${e[0]})=\\dfrac{${O}}{500}=${o(`${n(s,4)}`)}$,  $P_{${e[0]}}(${e[1]})=${o(`${n(c,4)}`)}$ et $P_{\\overline{${e[0]}}}(\\overline{${e[1]}})=${o(`${n(q,4)}`)}$.
                  `,f(Object.assign({scale:.7,style:"inline"},g(p)),p),`${L}`,`la probabilité qu'un voyageur porte un objet métallique sachant qu'il a fait
sonner le portique en passant $P_${e[1]}\\left(${e[0]}\\right)$.<br>
                ${B}`,`Comme  $P(${e[0]}\\cap ${e[1]})=${n(d,5)}$ et $P(${e[0]})\\times P(${e[1]})=${n(s,5)}\\times ${n($,5)}\\approx${n(s*$,5)}$, on en déduit que $P(${e[0]}\\cap ${e[1]})\\neq P(${e[0]})\\times P(${e[1]})$. <br>
            Les événements $${e[0]}$ et $${e[1]}$ ne sont donc pas indépendants.`],style:"nombres"});break}this.questionJamaisPosee(t,s,$,m)&&(this.listeQuestions[t]=i,this.listeCorrections[t]=P,t++),z++}Z(this)}}export{fe as dateDePublication,qe as default,he as refs,ve as titre,ge as uuid};
