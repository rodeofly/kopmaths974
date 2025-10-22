import v from"decimal.js";import{d as M}from"./reperes-WwrVcExd.js";import{c as q}from"./style-CcGLZIPY.js";import{E as y,K as l}from"./Exercice-DtXhjCyI.js";import{s as c,h as w}from"./gestionInteractif-DujZpSu8.js";import{a as u}from"./questionMathLive-DdRvWqlN.js";import{g as R,r as $,a as f,F as C,o as S,e as o,y as g,s as x,d as k,x as L,l as T}from"./embellissements-BYV7mIDn.js";import{G as P}from"./comparisonFunctions-B45ZZ3C7.js";import{H as N}from"./Hms-u2AUyU1C.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"earcut";import"roughjs";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./compute-engine.min.umd-BwAhpA7x.js";const ce="11/09/2024",ue="5/08/2021",le="Course aux nombres fin de 6e",de=!0,he="mathLive",be=!0,pe="AMCNum",qe="3a526",fe={"fr-fr":["can6a-CoopMaths"],"fr-ch":[]};class ve extends y{constructor(){super(),this.besoinFormulaireTexte=["Choix des questions",` Nombres séparés par des tirets :
1 : Moitié et double

2 : Quotient de a par b

3 : Somme astucieuse de 4 nombres entiers

4 : Somme de deux décimaux avec retenue

5 : Double ou triple d'un nombre entier

6 : Double ou triple d'un nombre décimal

7 : Recomposition d'un entier

8 : Tables de multiplication

9 : Soustraire un nombre se finissant par 9

10 :  Le quart ou le tiers d'un nombre.

11 :  Recomposer un nombre à partir d'un nombre de centaines et d'un nombre d'unités

12 :  Recomposer une nombre avec chevauchement

13 :  Conversion heures et minutes

14 :  Reste de la division par 3

15 :  Une division par 9 qui tombe juste

16 :  Ajouter un nombre de la forme 10n+9

17 :  4 × #,## × 25 ou 2 × #,## × 50

18 :  Addition à trou

19 :  Nombre pair de 2 chiffres × 5

20 :  Proportionnalité simple

21 :  Ordre de grandeur

22 :  Conversion cm -> m

23 :  Fraction 1/n d'une quantité de L

24 :  Reste de la division euclidienne

25 :  Ordre de grandeur : hauteurs

26 :  Appliquer un pourcentage

27 :  Calcul de distance à vitesse constante

28 :  Comparaison de périmètre

29 :  Repérage fraction

30 :  Proportionnalité par linéarité

31 :  Mélange`],this.nbQuestions=30,this.nbCols=2,this.nbColsCorr=2}nouvelleVersion(){let e,s,t,n,i,b;const D=R({saisie:this.sup,max:30,melange:31,defaut:31,nbQuestions:this.nbQuestions,shuffle:!1}).map(h=>h-1),d=[["pêches",4,10,30],["noix",5,4,13],["cerises",6,11,20],["pommes",2,20,40],["framboises",15,1,5],["fraises",7,5,10],["citrons",1.5,15,30],["bananes",1.5,15,25]],p=[["chaise",75,115,"cm"],["grue",120,250,"dm"],["tour",50,180,"m"],["girafe",40,50,"dm"],["coline",75,150,"m"]],A=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12","q13","q14","q15","q16","q17","q18","q19","q20","q21","q22","q23","q24","q25","q26","q27","q28","q29","q30"];for(let h=0,r=0,a,m,B=0;h<this.nbQuestions&&B<50;){switch(A[D[h]]){case"q1":e=$(1,25),a=`Le double d'un nombre vaut ${2*e}, combien vaut sa moitié ?`,m=`Le nombre est ${e}, sa moitié est ${o(e/2)}.`,c(this,r,e/2),a+=u(this,r,l.clavierDeBase);break;case"q2":e=$(2,25),s=$(2,25,e),e=e/L(e,s),s=s/L(e,s),t=new C(e,s),i=e/s,a=`Quel est le nombre qui, multiplié par ${s} donne ${e} ?`,m=`C'est $${t.texFraction}$ car $${t.texFraction}\\times ${s} = ${e}$`,t.valeurDecimale?c(this,r,[t.texFraction,i,`${Math.floor(e/s)}+\\dfrac{${e%s}}{${s}}`]):c(this,r,[t.texFraction,`${Math.floor(e/s)}+\\dfrac{${e%s}}{${s}}`]),a+=u(this,r,l.clavierDeBaseAvecFraction);break;case"q3":e=$(1,9),s=$(1,9,e),t=$(3,7)*10,n=$(10,15)*10-t,i=2*(t+n),a=`$${t-e} + ${n+s} + ${t+e} + ${n-s}$`,m=`$${t-e} + ${t+e} + ${n+s}  + ${n-s} = ${2*t} + ${2*n}= ${2*(t+n)}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q4":e=$(1,9),s=$(1,9,e),t=$(1,9,[e,s]),n=$(1,9,[e,s,t]),i=k(10+(s+n)*.1+t*.01),a=`$${o(e+s*.1+t*.01)}+${o(10-e+n*.1)}$`,m=`$${o(e+s*.1+t*.01)}+${o(10-e+n*.1)}=${o(10+(s+n)*.1+t*.01)}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q5":e=$(1,3),s=$(1,9,e),t=e*10+s,f([!0,!1])?(i=3*t,a=`Quel est le triple de $${o(t)}$ ?`,m=`Le triple de $${o(t)}$ est $3 \\times ${o(t)}=${o(3*t)}$.`):(i=2*t,a=`Quel est le double de $${o(t)}$ ?`,m=`Le double de $${o(t)}$ est $2 \\times ${o(t)}=${o(2*t)}$.`),c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q6":e=$(1,3),s=$(1,9,e),n=$(1,9),t=e*10+s+n*.1,f([!0,!1])?(i=3*t,a=`Quel est le triple de $${o(t)}$ ?`,m=`Le triple de $${o(t)}$ est $3 \\times ${o(t)}=${o(3*t)}$.`):(i=2*t,a=`Quel est le double de $${o(t)}$ ?`,m=`Le double de $${o(t)}$ est $2 \\times ${o(t)}=${o(2*t)}$.`),c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q7":e=$(1,3),s=$(1,9,e),t=$(1,9,[e,s]),i=e*1e3+s*10+t*100,a=`$${o(e)}\\times 1000 + ${o(s)}\\times 10 + ${o(t)}\\times 100$`,m=`$${o(e)}\\times 1000 + ${o(s)}\\times 10 + ${o(t)}\\times 100 =${o(i)}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q8":e=$(5,9),s=$(5,9),i=e*s,a=`$${e} \\times ${s}$`,m=`$${e} \\times ${s}=${e*s}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q9":e=$(5,9),s=$(2,8),t=$(1,3),i=e*10+s-t*10-9,a=`$${e*10+s} - ${t*10+9}$`,m=`$${e*10+s} - ${t*10+9}=${e*10+s}-${(t+1)*10} + 1 = ${i}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q10":e=$(5,15),f([!0,!1])?(s=e*8,i=e*2,a=`Quel est le quart de $${s}$ ?`,m=`Le quart de $${s}$ est $${e*2}.$`,c(this,r,i)):(s=e*6,i=e*2,a=`Quel est le tiers de $${s}$ ?`,m=`Le tiers de $${s}$ est $${e*2}.$`,c(this,r,i)),a+=u(this,r,l.clavierDeBase);break;case"q11":e=$(20,70),s=$(20,70,e),i=e*100+s,a=`$${e}$ centaines et $${s}$ unités = `,m=`$${e} \\times 100 + ${s} = ${e*100+s}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q12":e=$(20,70),s=$(20,70,e),i=e*100+s*10,a=`$${e}$ centaines et $${s}$ dizaines = `,m=`$${e} \\times 100 + ${s} \\times 10 = ${e*100+s*10}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q13":e=$(2,4),s=$(10,59),n=e*60+s,a=`Convertir $${n}$ minutes en heures et minutes (format : ... h ...min)`,m=`$${n} = ${e} \\times 60 + ${s}$ donc $${n}$ minutes = ${e}h ${s}min`,i=new N({hour:e,minute:s}),w(this,r,{reponse:{value:i.toString(),options:{HMS:!0}}}),a+=u(this,r,l.clavierHms);break;case"q14":s=$(1,9),t=$(0,9),n=$(0,9,[s,t]),e=s*100+t*10+n,i=e%3,a=`Quel est le reste de la division de $${e}$ par $3$ ?`,m=`Le reste de la division de $${e}$ par $3$ est ${e%3}`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q15":s=$(5,9),e=s*90+9,i=s*10+1,a=`$${e}\\div 9$`,m=`$${e}\\div 9 = ${i}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q16":e=$(5,9),s=$(2,8),t=$(1,3),i=e*10+s+t*10+9,a=`$${e*10+s} + ${t*10+9}$`,m=`$${e*10+s} + ${t*10+9}=${e*10+s}+${(t+1)*10} - 1 = ${i}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q17":{e=$(1,9),s=$(1,9,e);const F=new v(s).div(10);t=$(1,9,[e,s]);const Q=new v(t).div(100);switch(n=new v(e).add(F).add(Q),i=new v(n).mul(100),f([1,2,3,4])){case 1:a=`$4 \\times ${o(n)}\\times 25$`,m=`$4 \\times ${o(n)}\\times 25 = 100 \\times ${o(n)} = ${i}$`;break;case 2:a=`$2 \\times ${o(n)}\\times 50$`,m=`$2 \\times ${o(n)}\\times 50 = 100 \\times ${o(n)} = ${i}$`;break;case 3:a=`$25 \\times ${o(n)}\\times 4$`,m=`$25 \\times ${o(n)}\\times 4 = 100 \\times ${o(n)} = ${i}$`;break;case 4:a=`$50 \\times ${o(n)}\\times 2$`,m=`$50 \\times ${o(n)}\\times 2 = 100 \\times ${o(n)} = ${i}$`;break}c(this,r,i),a+=u(this,r,l.clavierDeBase);break}case"q18":e=$(5,9),s=$(6,9),t=$(1,5),n=$(1,4),i=n*10+s,a=`$${t*10+e} + \\dots = ${(t+n)*10+s+e}$`,m=`$${(t+n)*10+s+e} - ${t*10+e} = ${i}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q19":e=$(11,24)*2,i=e*5,a=`$${e}\\times 5$`,m=`$${e}\\times 5 = ${e} \\div 2 \\times 10 = ${e/2}\\times 10 =${i}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q20":e=$(0,7),s=d[e][1],t=$(d[e][2],d[e][3]),i=k(t/5*s),a=`$${o(t/10)}$ kg de ${d[e][0]} coûtent $${o(t/10*s)}$ €, combien coûtent $${o(t/5)}$ kg de ${d[e][0]} ?`,m=`$${o(t/10*s)} \\times 2 = ${o(i)}$`,c(this,r,i),a+=u(this,r,"",{texteApres:"€"});break;case"q21":e=$(3,7),s=$(2,9),t=$(1,9),n=$(5,9),i=(e*100+s*10+t)*n,a=`$${o(e*100+s*10+t)}\\times ${n}$<br> Choisis la bonne réponse sans effectuer précisément le calcul<br>`,b=g([`$${o(i)}$`,`$${o(n*1e3+e*100+s*10+t)}$`,`$${o((e*1e3+s*100+t)*n)}$`]),a+=`${b[0]} ${x(4)} ${b[1]} ${x(4)} ${b[2]}`,m=`$${o(e*100+s*10+t)} \\times ${n} = ${o(i)}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q22":e=$(11,24)*10+$(0,9),i=k(e/100),a=`$${e}$ cm font combien de mètres ?`,m=`$${e}~\\text{cm} = ${o(i)}~\\text{m}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase,{texteApres:"m"});break;case"q23":e=$(3,5),i=$(2,9)*10,s=i*e,a=`$\\dfrac{1}{${e}} \\text{ de } ${s} \\text{ L} = \\dots \\text{ L}$`,m=`$\\dfrac{1}{${e}}$ de $${s}$ L = ${i} L`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q24":e=$(7,9),s=$(1,e-1),n=$(5,9),t=n*e+s,i=t%e,a=`Je possède ${t} bonbons et je fabrique des sacs de ${e} bonbons. Une fois mes sacs complétés, combien me restera-t-il de bonbons ?`,m=`$${t}=${n}\\times ${e} + ${s}$ , donc il me restera ${s} bonbons.`,c(this,r,s),a+=u(this,r,l.clavierDeBase);break;case"q25":e=$(0,4),s=$(p[e][1],p[e][2]),b=g([`$${s}$ m`,`$${s}$ dm`,`$${s}$ cm`]),a=`Choisis parmi les propositions suivantes la hauteur d'une ${p[e][0]} (nombre et unité)<br>`,a+=`${b[0]} ${x(4)} ${b[1]} ${x(4)} ${b[2]}`,m=`La hauteur d'une ${p[e][0]} est ${s} ${p[e][3]}`,a+=u(this,r,l.longueur),c(this,r,new P(s,p[e][3]),{formatInteractif:"unites"});break;case"q26":e=$(2,9)*10,s=$(2,9,e)*10,i=e*s/100,a=`$${e}\\%$ de $${s}$`,m=`$${e}\\%$ de $${s} = ${i}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase);break;case"q27":e=$(3,6)*20,s=$(1,3),i=e*(s+.5),a=`Une voiture roule à une vitesse constante de ${e} km/h. Combien de kilomètres parcourt-elle en ${s} h et 30 min ?`,m=`$${e}\\times ${o(s+.5)} = ${i}$`,c(this,r,i),a+=u(this,r,l.clavierDeBase,{texteApres:"km"});break;case"q28":e=$(3,9),s=$(0,1),a=`Est-il vrai qu'un carré de côté ${e} cm a le même périmètre qu'un rectangle de largeur ${e-s} cm et de longueur ${e+1} cm ? (V ou F)`,s===0?(m=`Faux car $4\\times ${e}$ cm $\\neq 2\\times ${e}$ cm $+ 2\\times ${e+1}$ cm.`,c(this,r,"F")):(m=`Vrai car $4\\times ${e}$ cm $= 2\\times ${e-1}$ cm $+ 2\\times ${e+1}$ cm $= ${4*e}$ cm.`,c(this,r,"V")),a+=u(this,r,l.clavierDeBaseAvecVariable);break;case"q29":e=$(3,5),s=$(2,e*4-1),t=new C(s,e),i=s/e,a="Déterminer l'abscisse du point A situé ci-dessous :<br>"+S({xmin:-1,ymin:-1,xmax:14,ymax:1.5,scale:.5},M({Unite:3,Min:0,Max:4.2,x:0,y:0,thickSecDist:1/e,thickSec:!0,axeStyle:"|->",pointListe:[[s/e,"A"]],pointCouleur:"blue",pointStyle:"x",labelsPrincipaux:!0,step1:1,step2:1})),m=`L'abscisse du point A est $\\dfrac{${s}}{${e}}$`,e===3?c(this,r,[t.texFraction,`${Math.floor(e/s)}+\\dfrac{${e%s}}{${s}}`]):c(this,r,[t.texFraction,i,`${Math.floor(e/s)}+\\dfrac{${e%s}}{${s}}`]),a+=u(this,r,l.clavierDeBaseAvecFraction);break;case"q30":e=$(0,7),s=d[e][1]*(1+f([-1,1])*$(1,3)*.1),t=Math.round($(d[e][2],d[e][3])/10),n=$(3,6),i=n*s,a=`$${t}$ kg de ${d[e][0]} coûtent $${q(t*s)}$ €.<br> $${t+n}$ kg de ces mêmes ${d[e][0]} coûtent $${q((t+n)*s)}$ €.<br>Combien coûtent ${n} kg de ces ${d[e][0]} ?`,m=`$${q((t+n)*s)} € - ${q(t*s)} € =${q(i)} €$`,c(this,r,i),a+=u(this,r,l.clavierDeBase,{texteApres:"€"});break}this.questionJamaisPosee(h,e,s,t,D[h])&&(this.listeQuestions[h]=a,this.listeCorrections[h]=m,r++,h++),B++}T(this)}}export{be as amcReady,pe as amcType,ce as dateDeModifImportante,ue as dateDePublication,ve as default,de as interactifReady,he as interactifType,fe as refs,le as titre,qe as uuid};
