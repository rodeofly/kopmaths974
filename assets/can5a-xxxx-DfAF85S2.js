import{d as C}from"./reperes-WwrVcExd.js";import{c as b}from"./style-CcGLZIPY.js";import{a as q}from"./questionMathLive-DdRvWqlN.js";import{br as g,r as s,d as o,a as h,F as L,o as y,y as x,s as k,e as u,l as Q}from"./embellissements-BYV7mIDn.js";import{E as F}from"./Exercice-DtXhjCyI.js";import{s as m}from"./gestionInteractif-DujZpSu8.js";import{G as I}from"./comparisonFunctions-B45ZZ3C7.js";import"decimal.js";import"./tableauMathlive-xx-nDjq0.js";import"./index-BUDQz6-w.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"mathjs";import"katex";import"earcut";import"roughjs";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./Hms-u2AUyU1C.js";import"./compute-engine.min.umd-BwAhpA7x.js";const $e="Course aux nombres début de 5e",se=!0,ie="mathLive",ae=!0,re="AMCNum",ne="9e40d",ce={"fr-fr":["can5a-xxxx"],"fr-ch":[]};class oe extends F{constructor(){super(),this.besoinFormulaireTexte=["Choix des questions",`Nombres séparés par des tirets :
1 : Multiplication (facteur 12 à 19)

2 : Somme à abc + de

3 : Différence abc - de

4 : Somme de deux décimaux avec retenue

5 : Somme astucieuse

6 : Conversion en heures et minutes

7 : Triple et moitié

8 : Produit avec facteur 100

9 : Division

10 : Reste de division par diviseur à 2 chiffres

11 : Priorité opératoire

12 : Recomposer une nombre avec chevauchement

13 : conversion heures et minutes vers minutes

14 :  Reste de la division par 3

15 :  Une division par 9 qui tombe juste

16 :  ajouter un nombre de la forme 10n+9

17 :  quart d'un nombre

18 :  addition à trou

19 :  Nombre impair de 2 chiffres × 5

20 :  Prix de la mitié

21 :  Ordre de grandeur

22 :  Conversion cm ou mm -> m

23 :  Fraction m/n d'une quantité de L

24 :  Reste de la division euclidienne

25 :  Ordre de grandeur : hauteurs

26 :  Appliquer un pourcentage

27 :  Calcul de distance à vitesse constante

28 :  Comparaison de périmètre

29 :  Repérage fraction

30 : Proportionnalité par linéarité
`],this.nbQuestions=30,this.nbCols=2,this.nbColsCorr=2,this.sup=1}nouvelleVersion(){let e,t,$,i,a,d;const l=[["pêches",4,10,30],["noix",5,4,13],["cerises",6,11,20],["pommes",2,20,40],["framboises",15,1,5],["fraises",6,5,10],["citrons",1.5,15,30],["bananes",1.5,15,25]],f=[["chaise",75,115,"cm"],["grue",120,250,"dm"],["tour",50,180,"m"],["girafe",40,50,"dm"],["coline",75,150,"m"]],p=g(["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12","q13","q14","q15","q16","q17","q18","q19","q20","q21","q22","q23","q24","q25","q26","q27","q28","q29","q30"],this.nbQuestions);for(let r=0,n,c,v=0;r<this.nbQuestions&&v<50;){switch(p[r]){case"q1":e=s(12,19),t=s(2,5),a=e*t,n=`$${e} \\times ${t}$`,c=`$${e} \\times ${t}=${e*t}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q2":e=s(2,50)+100,t=s(50,99),a=o(e+t),n=`$${t} + ${e}$`,c=`$${t} + ${e}=${e+t}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q3":e=s(2,50)+100,t=s(50,99),a=o(e-t),n=`$${e} - ${t}$`,c=`$${e} - ${t}=${e-t}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q4":e=s(1,9),t=s(1,9,e),$=s(1,9,[e,t]),i=s(1,9,[e,t,$]),a=o(10+(t+i)*.1+$*.01),n=`$${u(e+t*.1+$*.01)}+${u(10-e+i*.1)}$`,c=`$${u(e+t*.1+$*.01)}+${u(10-e+i*.1)}=${u(10+(t+i)*.1+$*.01)}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q5":e=s(1,9),t=s(1,9,e),$=s(3,7)*10,i=s(10,15)*10-$,a=o(2*($+i)),n=`$${$-e} + ${i+t} + ${$+e} + ${i-t}$`,c=`$${$-e} + ${i+t} + ${$+e} + ${i-t} = ${2*$} + ${2*i} = ${2*($+i)}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q6":e=s(2,4),t=s(10,59),i=o(e*60+t),n=`Convertir $${i}$ minutes en heures(h) et minutes(min) :`,c=`$${i} = ${e} \\times 60 + ${t}$ donc $${i}$ minutes = ${e}h ${t}min`,m(this,r,`${e}h${t}min`);break;case"q7":e=s(1,10)*2,n=`Le triple d'un nombre vaut ${3*e}, combien vaut sa moitié ?`,c=`Le nombre est ${e}, sa moitié est ${o(e/2)}.`,m(this,r,o(e/2),{formatInteractif:"calcul"});break;case"q8":switch(e=s(1,9),t=s(1,9,e),$=s(1,9,[e,t]),i=o(e+t*.1+$*.01),a=o(100*i),h([1,2,3,4])){case 1:n=`$4 \\times ${u(i)}\\times 25$`,c=`$4 \\times ${u(i)}\\times 25 = 100 \\times ${u(i)} = ${o(100*i)}$`;break;case 2:n=`$2 \\times ${u(i)}\\times 50$`,c=`$2 \\times ${u(i)}\\times 50 = 100 \\times ${u(i)} = ${o(100*i)}$`;break;case 3:n=`$25 \\times ${u(i)}\\times 4$`,c=`$25 \\times ${u(i)}\\times 4 = 100 \\times ${u(i)} = ${o(100*i)}$`;break;case 4:n=`$50 \\times ${u(i)}\\times 2$`,c=`$50 \\times ${u(i)}\\times 2 = 100 \\times ${u(i)} = ${o(100*i)}$`;break}m(this,r,a,{formatInteractif:"calcul"});break;case"q9":e=s(5,15),t=s(2,8),$=e*t,a=e,n=`$${$} \\div ${t}$`,c=`$${$} \\div ${t}=${e}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q10":e=h([25,20,50,40]),t=s(5,e-1),$=s(3,9),i=$*e+t,n=`Quel est le reste de la division de ${i} par ${e} ?`,c=`$${i}=${e} \\times ${$} + ${t}$ avec $${t}<${e}$ donc le reste de la division de ${i} par ${e} est ${t}.`,m(this,r,t,{formatInteractif:"calcul"});break;case"q11":e=s(5,9),t=20-e,$=s(3,9),a=t+e*$,n=`$${t} + ${e} \\times ${$}$`,c=`$${t} + ${e} \\times ${$}= ${t} + ${e*$} = ${a}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q12":e=s(20,70),t=s(20,70,e),a=e*100+t*10,n=`$${e}$ centaines et $${t}$ dizaines = ?`,c=`$${e} \\times 100 + ${t} \\times 10 = ${e*100+t*10}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q13":e=s(2,4),t=s(10,59),i=o(e*60+t),n=`$${e}$ heures et ${t} minutes font combien de minutes ?`,c=`$${e}h ${t}min = ${e} \\times 60 + ${t}= ${i}$ donc $${i}$ minutes`,m(this,r,i);break;case"q14":t=s(1,9),$=s(0,9),i=s(0,9,[t,$]),e=o(t*100+$*10+i),a=e%3,n=`Quel est le reste de la division de $${e}$ par $3$ ?`,c=`Le reste de la division de $${e}$ par $3$ est ${e%3}.`,m(this,r,a,{formatInteractif:"calcul"});break;case"q15":t=s(5,9),e=t*90+9,a=t*10+1,n=`$${e}\\div 9$`,c=`$${e}\\div 9 = ${a}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q16":e=s(5,9),t=s(2,8),$=s(1,3),a=o(e*10+t+$*10+9),n=`$${e*10+t} + ${$*10+9}$`,c=`$${e*10+t} + ${$*10+9}=${e*10+t}+${($+1)*10} - 1 = ${a}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q17":e=s(5,15),t=e*8,a=e*2,n=`Quel est le quart de $${t}$ ?`,c=`Le quart de $${t}$ est $${e*2}.$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q18":e=s(5,9),t=s(6,9),$=s(1,5),i=s(1,4),a=i*10+t,n=`$${$*10+e} + \\dots = ${o(($+i)*10+t+e)}$`,c=`$${o(($+i)*10+t+e)} - ${$*10+e} = ${a}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q19":e=s(11,24)*2+1,a=o(e*5),n=`$${e}\\times 5$`,c=`$${e}\\times 5 = ${e} \\div 2 \\times 10 = ${o(e/2)}\\times 10 =${a}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q20":e=s(0,7),t=l[e][1],$=s(l[e][2],l[e][3]),a=o($/50*t),n=`$${u($/100)}$ kg de ${l[e][0]} coûtent $${u($/100*t)}$ €, combien coûtent $${u($/50)}$ kg de ${l[e][0]} ?`,c=`$${u($/100*t)} \\times 2 = ${u(a)}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q21":e=s(3,7),t=s(2,9),$=s(1,9),i=s(5,9)*h([10,100]),a=o((e*100+t*10+$)*i),n=`$${u(e*100+t*10+$)}\\times ${i}$<br> Choisis la bonne réponse sans effectuer précisément le calcul<br>`,d=x([`$${u(a)}$`,`$${u(i*1e3+e*100+t*10+$)}$`,`$${u((e*1e3+t*100+$)*i)}$`]),n+=`${d[0]} ${k(4)} ${d[1]} ${k(4)} ${d[2]}`,c=`$${u(e*100+t*10+$)} \\times ${i} = ${u(a)}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q22":e=s(11,24)*10+s(0,9),h([!0,!1])?(a=o(e/100),n=`Convertir $${e}$ cm en m.`,c=`$${e}$ cm $= ${e} / 100$m $=${u(a)}$ m`):(a=o(e/1e3),n=`Convertir $${e}$ mm en m.`,c=`$${e}$ mm $= ${e} / 1000$m $=${u(a)}$ m`),m(this,r,a,{formatInteractif:"calcul"});break;case"q23":e=s(4,5),$=s(2,3),a=o(s(2,9)*10),t=o(a*e),n=`$\\dfrac{${$}}{${e}} \\text{ de } ${t} \\text{ L} = \\dots \\text{ L}$`,c=`$\\dfrac{${$}}{${e}}$ de $${t}$ L = $${$}\\times \\dfrac{${t}}{${e}}=${$}\\times ${a}=${a*$}$ L`,m(this,r,a*$,{formatInteractif:"calcul"});break;case"q24":e=h([12,15,20,25]),t=s(1,e-1),i=s(5,9),$=i*e+t,a=$%e,n=`Je possède ${$} bonbons et je fabrique des sacs de ${e} bonbons. Une fois mes sacs complétés, combien me restera-t-il de bonbons ?`,c=`$${$}=${i}\\times ${e} + ${t}$ , donc il me restera ${t} bonbons.`,m(this,r,t,{formatInteractif:"calcul"});break;case"q25":e=s(0,4),t=s(f[e][1],f[e][2]),d=x([`$${t}$ m`,`$${t}$ dm`,`$${t}$ cm`]),n=`Choisis parmi les propositions suivantes la hauteur d'une ${f[e][0]}<br>`,n+=`${d[0]} ${k(4)} ${d[1]} ${k(4)} ${d[2]}`,c=`La hauteur d'une ${f[e][0]} est ${t} ${f[e][3]}.`,m(this,r,new I(t,f[e][3]),{formatInteractif:"unites"});break;case"q26":e=s(2,9)*5,t=s(2,9,e)*10,a=o(e*t/100),n=`$${e}\\%$ de $${t}$`,c=`$${e}\\%$ de $${t} = ${a}$`,m(this,r,a,{formatInteractif:"calcul"});break;case"q27":e=s(3,6)*15,t=s(1,3),a=o(e*(t+.25)),n=`Une voiture roule à une vitesse constante de ${e} km/h. Quelle distance en km parcourt-elle en ${t} h et 20 min`,c=`$${e}\\times ${o(t+.5)} = ${a}$`,m(this,r,new I(a,"km"),{formatInteractif:"unites"});break;case"q28":e=s(3,9),t=s(0,1),n=`Est-il vrai qu'un carré de côté ${e} cm a le même périmètre qu'un rectangle de largeur ${e-t} cm et de longueur ${e+1} cm ? (V ou F)`,t===0?(c=`Faux car $4\\times ${e}$ cm $ \\neq 2\\times ${e}$ cm $ + 2\\times ${e+1}$ cm.`,m(this,r,"F")):(c=`Vrai car $4\\times ${e}$ cm $ = 2\\times ${e-1}$ cm $ + 2\\times ${e+1}$ cm $ = ${4*e}$ cm.`,m(this,r,"V"));break;case"q29":e=s(3,5),t=s(2,e*4-1),$=new L(t,e),a=o(t/e),n="Déterminer l'abscisse du point A situé ci-dessous :<br>"+y({xmin:-1,ymin:-1,xmax:14,ymax:1.5,scale:.5},C({Unite:3,Min:0,Max:4.2,x:0,y:0,thickSecDist:1/e,thickSec:!0,axeStyle:"|->",pointListe:[[t/e,"A"]],pointCouleur:"blue",labelsPrincipaux:!0,step1:1,step2:1})),c=`L'abscisse du point A est $\\dfrac{${t}}{${e}}$.`,e===3?m(this,r,[$.texFraction,`${Math.floor(e/t)}+\\dfrac{${e%t}}{${t}}`],{formatInteractif:"calcul"}):m(this,r,[$.texFraction,a,`${Math.floor(e/t)}+\\dfrac{${e%t}}{${t}}`],{formatInteractif:"calcul"});break;case"q30":e=s(0,7),t=o(l[e][1]*(1+h([-1,1])*s(1,3)*.1)),$=Math.round(s(l[e][2],l[e][3])/10),i=s(2,6),a=o(i*t),n=`$${$}$ kg de ${l[e][0]} coûtent $${b($*t)}$ €.<br> $${$+i}$ kg de ces mêmes ${l[e][0]} coûtent $${b(($+i)*t)}$ €.<br>Combien coûtent ${i} kg de ces ${l[e][0]} ?`,c=`$${b(($+i)*t)} € - ${b($*t)} € =${b(a)} €$`,m(this,r,b(a)+"€");break}p[r]==="q22"?n+=q(this,r,"",{texteApres:" m"}):p[r]==="q25"?n+=q(this,r,"",{texteApres:` ${f[e][3]}`}):p[r]==="q27"?n+=q(this,r," unites[longueurs]"):n+=q(this,r),this.questionJamaisPosee(r,e,t,$,i,a)&&(this.listeQuestions[r]=n,this.listeCorrections[r]=c,r++),v++}Q(this)}}export{ae as amcReady,re as amcType,oe as default,se as interactifReady,ie as interactifType,ce as refs,$e as titre,ne as uuid};
