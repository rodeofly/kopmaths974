import{E as C,K as m}from"./Exercice-DtXhjCyI.js";import{g as _,af as E,a as d,r as b,e as t,m as c,F as A,l as B}from"./embellissements-BYV7mIDn.js";import{h as u}from"./gestionInteractif-DujZpSu8.js";import{a as p}from"./questionMathLive-DdRvWqlN.js";import{a as P}from"./comparisonFunctions-B45ZZ3C7.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./Hms-u2AUyU1C.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./compute-engine.min.umd-BwAhpA7x.js";const ee="Calculer avec une probabilité conditionnelle",te=!0,ie="mathLive",ae="29/04/2025",se="baee1",ne={"fr-fr":["1P10-2"],"fr-ch":[]};class re extends C{constructor(){super(),this.nbQuestions=1,this.sup=4,this.spacing=1.5,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Sans situation (valeurs décimales)","2 : Sans situation (valeurs fractionnaires)","3 : Dans une situation","4 : Mélange"].join(`
`)]}nouvelleVersion(){const F=_({saisie:this.sup,min:1,max:3,melange:4,defaut:4,nbQuestions:this.nbQuestions}),O=E(F,this.nbQuestions);for(let o=0,s=0,r,$,l,f=0,i,a,n,v,h,x,e,q,g;o<this.nbQuestions&&f<50;){switch(h=`Pour tout événement $A$ (avec $P(A)\\neq 0$) et $B$ d'un univers $\\Omega$, on a  : <br>
          $P_{A}(B)=\\dfrac{P(A\\cap B)}{P(A)}$ ou encore  $P(A\\cap B)=P(A)\\times P_{A}(B)$.<br>
          En appliquant avec les données de l'énoncé, on obtient :<br>`,x=[["A","B"],["A","C"],["R","T"],["K","L"]],e=d(x),q=[[1,3,1,4],[2,3,3,7],[1,4,1,6],[3,4,1,7],[3,5,3,7],[2,3,2,9],[3,8,1,4],[4,7,1,4],[4,7,1,3],[1,6,1,9]],g=d(q),O[o]){case 1:i=b(1,9)/10,a=b(1,49)/100,n=i*a,d([!0,!1])?(l=t(i*a,3),u(this,s,{reponse:{value:l,compare:P}}),r=`On considère deux événements $${e[0]}$ et  $${e[1]}$ tels que : <br>
          $P(${e[0]})=${t(i,1)}$ et $P_{${e[0]}}(${e[1]})=${t(a,2)}$.<br>
         ${this.interactif?`$P(${e[0]}\\cap ${e[1]})=$`:`Calculer $P(${e[0]}\\cap ${e[1]})$.`}`,r+=p(this,s," "),$=h,$+=`
          $\\begin{aligned}
          P(${e[0]}\\cap ${e[1]})&=P(${e[0]}) \\times P_{${e[0]}}(${e[1]})\\\\
          &=${t(i,2)}\\times ${t(a,2)}\\\\
          &=${c(`${t(i*a,3)}`)}
          \\end{aligned}$`):(l=t(a,2),u(this,o,{reponse:{value:l,compare:P}}),r=`On considère deux événements $${e[0]}$ et  $${e[1]}$ tels que : <br>
          $P(${e[0]})=${t(i,1)}$ et $P(${e[0]}\\cap ${e[1]})=${t(n,3)}$.<br>
         ${this.interactif?`$P_{${e[0]}}(${e[1]})=$`:`Calculer $P_{${e[0]}}(${e[1]})$.`}`,r+=p(this,o," "),$=h,$+=`
          $\\begin{aligned}
         P_{${e[0]}}(${e[1]})&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[0]})}\\\\
          &=\\dfrac{${t(i*a,3)}}{${t(i,3)}}\\\\
          &=${c(`${t(a,3)}`)}
          \\end{aligned}$`);break;case 2:i=new A(g[0],g[1]),a=new A(g[2],g[3]),n=i.produitFraction(a).simplifie(),d([!0,!1])?(l=n.texFraction,u(this,s,{reponse:{value:l,options:{fractionEgale:!0}}}),r=`On considère deux événements $${e[0]}$ et  $${e[1]}$ tels que : <br>
        $P(${e[0]})=${i.texFraction}$ et $P_{${e[0]}}(${e[1]})=${a.texFraction}$.<br>
       ${this.interactif?`$P(${e[0]}\\cap ${e[1]})=$`:`Calculer $P(${e[0]}\\cap ${e[1]})$.`}`,r+=p(this,s,m.clavierDeBaseAvecFraction),$=h,$+=`
        $\\begin{aligned}
        P(${e[0]}\\cap ${e[1]})&=P(${e[0]}) \\times P_{${e[0]}}(${e[1]})\\\\
        &=${i.texFraction}\\times ${a.texFraction}\\\\
        &=${c(n.texFraction)}
        \\end{aligned}$`):(l=a.texFraction,u(this,s,{reponse:{value:l,options:{fractionEgale:!0}}}),r=`On considère deux événements $${e[0]}$ et  $${e[1]}$ tels que : <br>
        $P(${e[0]})=${i.texFraction}$ et $P(${e[0]}\\cap ${e[1]})=${n.texFraction}$.<br>
       ${this.interactif?`$P_{${e[0]}}(${e[1]})=$`:`Calculer $P_{${e[0]}}(${e[1]})$.`}`,r+=p(this,s,m.clavierDeBaseAvecFraction),$=h,$+=`
        $\\begin{aligned}
       P_{${e[0]}}(${e[1]})&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[0]})}\\\\
        &=${n.texFraction}\\div ${i.texFraction}\\\\
         &=${n.texFraction}\\times ${i.inverse().texFraction}\\\\
        &=${c(a.texFraction)}
        \\end{aligned}$`);break;case 3:default:switch(b(1,2)){case 1:i=b(40,60)/100,a=b(65,85)/100,n=i*a,v=d([`On estime que la proportion de spams, sur la boîte de messagerie électronique d’un particulier est de $${t(i*100,0)}\\,\\%$. <br>
               Un logiciel de suppression de spams est installé sur l'ordinateur. Il ne supprime que des spams mais ne supprime pas tous les spams.<br>
               On constate qu'il  supprime $${t(a*100,2)}\\,\\%$ de spams.<br>
                On choisit un message au hasard et on note $${e[0]}$ : « le message est un spam » et $${e[1]}$ : « le message est supprimé ».<br>
              En utilisant les événements  $${e[0]}$ et $${e[1]}$,  écrire la probabilité que le message soit un spam supprimé, puis calculer cette probabilité.`,`Le cuisinier d’une colonie de vacances a confectionné des beignets pour le goûter :<br>
 $${t(i*100,0)}\\,\\%$ des beignets sont à l’ananas, les autres sont aux pommes  et $${t(a*100,2)}\\,\\%$ des beignets à l’ananas sont aromatisés à la cannelle.<br>
On choisit un beignet au hasard. <br>
On définit les évènements suivants :<br>
• $${e[0]}$ : « le beignet choisi est à l’ananas » ;<br>
• $${e[1]}$ : « le beignet choisi est aromatisé à la cannelle ».<br>
En utilisant les événements  $${e[0]}$ et $${e[1]}$, écrire la probabilité que le beignet choisi soit un beignet à l'ananas aromatisé à la cannelle, puis calculer cette probabilité.`,`Le jour d'une grande journée de promotion, $${t(i*100,0)}\\,\\%$ des clients qui entrent dans un magasin ont été
contactés lors d'une  campagne publicitaire. Une étude statistique montre que la probabilité qu’un client effectue un achat sachant qu’il a été contacté au cours de la campagne publicitaire est de $${t(a,2)}$.<br>
On choisit au hasard un client du magasin lors de cette grande journée de promotion. <br>On définit les évènements suivants :<br>
• $${e[0]}$ : « le client choisi a été contacté lors de la campagne publicitaire ; »<br>
• $${e[1]}$ : le client choisi a effectué un achat ».<br>
En utilisant les événements  $${e[0]}$ et $${e[1]}$, écrire la probabilité que le client choisi ait été contacté par la campagne publicitaire et qu'il a fait un achat, puis calculer cette probabilité.`]),u(this,s,{reponse:{value:[`P(${e[0]}\\cap ${e[1]})`,`P(${e[1]}\\cap ${e[0]})`],options:{texteAvecCasse:!0}}}),u(this,s+1,{reponse:{value:t(n,4),compare:P}}),r=v,r+="<br>"+p(this,s,m.clavierProbabilite,{texteAvant:"Notation de la probabilité :"})+"<br>"+p(this,s+1,m.clavierDeBase,{texteAvant:"Valeur de la probabilité :"}),$=`La probabilité $P$ est donnée par  $${c(`P(${e[0]}\\cap ${e[1]})`)}$.<br>
              $\\begin{aligned}
              P(${e[0]}\\cap ${e[1]})&=P(${e[0]}) \\times P_{${e[0]}}(${e[1]})\\\\
              &=${t(i,4)}\\times ${t(a,4)}\\\\
              &=${c(`${t(i*a,4)}`)}
              \\end{aligned}$`;break;case 2:default:i=b(40,60)/100,a=b(89,95)/100,n=i*a,v=d([`On estime que la proportion de spams, sur la boîte de messagerie électronique d’un particulier est de $${t(i*100,0)}\\,\\%$. <br>
                  Un logiciel de suppression de spams est installé sur l'ordinateur. Il ne supprime que des spams mais ne supprime pas tous les spams.<br>
                 $${t(n*100,2)}\\,\\%$ des messages sont des spams supprimés.<br>
                 On note $${e[0]}$ : « le message est un spam » et $${e[1]}$ : « le message est supprimé ».<br>
                 On choisit un message au hasard.<br>
                  En utilisant les événements  $${e[0]}$ et $${e[1]}$, écrire la probabilité  que le message soit supprimé par le logiciel lorsque c'est un spam, puis calculer cette probabilité.`,`Le cuisinier d’une colonie de vacances a confectionné des beignets pour le goûter :<br>
                  $${t(i*100,0)}\\,\\%$  sont à l’ananas, les autres sont aux pommes  et $${t(n*100,1)}\\,\\%$  sont des beignets à l’ananas  aromatisés à la cannelle.<br>
                 On choisit un beignet au hasard. <br>
                 On définit les évènements suivants :<br>
                 • $${e[0]}$ : « le beignet choisi est à l’ananas » ;<br>
                 • $${e[1]}$ : « le beignet choisi est aromatisé à la cannelle ».<br>
                 En utilisant les événements  $${e[0]}$ et $${e[1]}$, écrire la probabilité que le beignet choisi soit aromatisé à la cannelle sachant que ce beignet est à l'ananas, puis calculer cette probabilité.`,`Le jour d'une grande journée de promotion, $${t(i*100,0)}\\,\\%$ des clients qui entrent dans un magasin ont été
contactés lors d'une  campagne publicitaire. Une étude statistique montre que, parmi tous les clients,  $${t(n*100,3)}\\,\\%$ ont été contactés lors de la campagne publicitaire et ont fait un achat.<br>
On choisit au hasard un client du magasin lors de cette grande journée de promotion. <br>On définit les évènements suivants :<br>
• $${e[0]}$ : « le client choisi a été contacté lors de la campagne publicitaire  » ;<br>
• $${e[1]}$ : « le client choisi a effectué un achat. »<br>
Le client choisi a été contacté lors de la campagne publicitaire.<br>
En utilisant les événements  $${e[0]}$ et $${e[1]}$, écrire la probabilité que ce client ait fait un achat, puis calculer cette probabilité.`]),u(this,s,{reponse:{value:[`P_{${e[0]}}(${e[1]})`],options:{texteAvecCasse:!0}}}),u(this,s+1,{reponse:{value:t(a,4),compare:P}}),r=v,r+="<br>"+p(this,s,m.clavierProbabilite,{texteAvant:"Notation de la probabilité :"})+"<br>"+p(this,s+1,m.clavierDeBase,{texteAvant:"Valeur de la probabilité :"}),$=`La probabilité $P$ est donnée par  $${c(`P_{${e[0]}}(${e[1]})`)}$.<br>
          $\\begin{aligned}
         P_{${e[0]}}(${e[1]})&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[0]})}\\\\
          &=\\dfrac{${t(n,4)}}{${t(i,4)}}\\\\
          &=${c(`${t(a,4)}`)}
          \\end{aligned}$`}break}this.questionJamaisPosee(o,i)?(this.listeQuestions[o]=r,this.listeCorrections[o]=$,o++,s=this.autoCorrection.length):this.autoCorrection=this.autoCorrection.slice(0,s),f++}B(this)}}export{ae as dateDePublication,re as default,te as interactifReady,ie as interactifType,ne as refs,ee as titre,se as uuid};
