import{a as b,r as c,a2 as x,u as r,Y as m,v as u,m as f,s as h,_ as d,t as p,ao as F}from"./embellissements-BYV7mIDn.js";import{E as C}from"./Exercice-DtXhjCyI.js";import{p as E}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const T="Déterminer le signe d’une fonction affine (V/F)",w=!0,B="qcm",D="03b1d",G={"fr-fr":["can2F03"],"fr-ch":["1mQCM-4"]};class J extends C{constructor(){super(),this.date=1635094684684,this.nbQuestions=1,this.listeAvecNumerotation=!0}nouvelleVersion(){let n,a,e,t,$,i,o;for(let s=0,l=0;s<this.nbQuestions&&l<50;){switch(b(["a","b"])){case"a":e=c(-5,5,0),$=c(2,7)*b([-1,1]),t=$*e,i=x(-t,e),n=`$${r(e,t)}$ est strictement positif pour $x>${i.texFractionSimplifiee}$.`,this.canEnonce=n,this.autoCorrection[s]={enonce:n,propositions:[{texte:"Vrai",statut:e>0},{texte:"Faux",statut:e<0}],options:{ordered:!0,radio:!0}},o=E(this,s),n+=o.texte,e>0?a=o.texteCorr+`<br>$${r(e,t)}>0$.<br>
            En ajoutant $${m(-t)}$ dans chaque membre, on obtient :<br>
            $${u(e)}x>${-t}$<br>
            En divisant par $${e}$ dans chaque membre, on obtient :<br>
            $x>${i.texFractionSimplifiee}$.<br><br>
            $${r(e,t)}$ est strictement positif pour $x>${i.texFractionSimplifiee}$, il fallait donc cocher "${p("Vrai")}".`:a=o.texteCorr+`<br>$${r(e,t)}>0$.<br>
            En ajoutant $${m(-t)}$ dans chaque membre, on obtient :<br>
            $${u(e)}x>${-t}$<br>
            En divisant par $(${e})$ dans chaque membre, on obtient :<br>
            $x$ $${f("<","blue")}$ $${i.texFractionSimplifiee}$ ${h(3)}
            ${d("(quand on divise par un nombre strictement négatif, on change le sens de l’inégalité).","blue")}<br><br>
            $${r(e,t)}$ est strictement positif pour $x<${i.texFractionSimplifiee}$, il fallait donc cocher "${p("Faux")}".`;break;case"b":e=c(-5,5,0),$=c(2,7)*b([-1,1]),t=$*e,i=x(-t,e),n=`$${r(e,t)}$ est strictement positif pour $x<${i.texFractionSimplifiee}$.`,this.canEnonce=n,this.autoCorrection[s]={enonce:n,propositions:[{texte:"Vrai",statut:e<0},{texte:"Faux",statut:e>0}],options:{ordered:!0}},o=E(this,s),n+=o.texte,e<0?a=o.texteCorr+`<br>$${r(e,t)}>0$.<br>
              En ajoutant $${m(-t)}$ dans chaque membre, on obtient :<br>
              $${u(e)}x>${-t}$<br>
              En divisant par $(${e})$ dans chaque membre, on obtient :<br>
              $x$ $${f("<","blue")}$ $${i.texFractionSimplifiee}$ ${h(3)}
              ${d("(quand on divise par un nombre strictement négatif, on change le sens de l’inégalité).","blue")}<br><br>
              $${r(e,t)}$ est strictement positif pour $x<${i.texFractionSimplifiee}$, il fallait donc cocher "${p("Vrai")}".`:a=o.texteCorr+`<br>$${r(e,t)}>0$.<br>
              En ajoutant $${m(-t)}$ dans chaque membre, on obtient :<br>
              $${u(e)}x>${-t}$<br>
              En divisant par $${e}$ dans chaque membre, on obtient :<br>
              $x>${i.texFractionSimplifiee}$.<br><br>
              $${r(e,t)}$ est strictement positif pour $x>${i.texFractionSimplifiee}$, il fallait donc cocher "${p("Faux")}".`;break}this.questionJamaisPosee(s,e,t,$)&&(this.listeQuestions[s]=n,this.listeCorrections[s]=a,this.canReponseACompleter=o.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),s++),l++}F(this)}}export{J as default,w as interactifReady,B as interactifType,G as refs,T as titre,D as uuid};
