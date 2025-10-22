import{af as g,r as d,a as h,e as n,t as u,b as C,S as D,F,l as q,s as f}from"./embellissements-BYV7mIDn.js";import{m as b}from"./dateEtHoraires-yqKtvK1K.js";import{p as Q,a as A}from"./Personne-DRrbQFAY.js";import{E}from"./Exercice-DtXhjCyI.js";import{a as M}from"./questionMathLive-DdRvWqlN.js";import{s as x}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const re="29/02/2024",ne="Problème de vitesse",ae=!0,oe="mathLive",me="a29bd",ce={"fr-fr":["5P11-1"],"fr-ch":["11FA11-1"]};class le extends E{constructor(){super(),this.nbQuestions=3,this.sup2===1?this.consigneCorrection=" À vitesse constante, la distance et le temps du trajet sont proportionnels. On peut donc utiliser la technique du produit en croix.":this.consigneCorrection="",this.sup=4,this.sup2=1,this.besoinFormulaireNumerique=["Type de problème",4,`1: Déterminer la vitesse
2 : Déterminer la durée
3 : Déterminer la distance 
4: Mélange `],this.besoinFormulaire2Numerique=["Type de correction",2,`1: Avec un tableau de proportionnalité
2: Avec les formules`]}nouvelleVersion(){let c=["vitesse","temps","distance"];this.sup===1?c=["vitesse"]:this.sup===2?c=["temps"]:this.sup===3&&(c=["distance"]);const T=g(c,this.nbQuestions);let l;for(let a=0,v=0;a<this.nbQuestions&&v<50;){let t,o,m,r,e;const i=d(8,26,[12])*5;i%2===0?t=d(5,39,[20])*3:t=d(2,19,[10])*6;const p=Math.floor(t/60),k=t%60,s=i*t/60,$=h(["il","elle"]);switch($==="il"?o=Q():o=A(),s<60?m=h(["à son travail","à l'école de ses enfants","au cinéma","au centre de loisirs"]):m=h(["jusqu'à sa location de vacances","dans la maison de ses parents","à une conférence"]),T[a]){case"vitesse":r=`${o} met ${b(t)} pour aller ${m} qui est à une distance de ${D(s)} km. Déterminer sa vitesse moyenne`,r+=this.interactif?" : ":".",this.sup2===1?(e=`$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|}
`,e+=`\\hline
`,e+=`\\text{Distance (en km)} & ${n(s)} & v\\\\ 
`,e+=`\\hline
`,e+=`\\text{Temps (en min)} & ${t} & 60 \\\\ 
`,e+=`\\hline
`,e+="\\end{array}$",e+="<br><br>",e+=`$v=\\dfrac{${n(s)}\\times 60}{${t}}=${i}$ 
`):p===0?e=`$v = \\dfrac{d}{t} = \\dfrac{${n(s)}~\\text{km}}{\\dfrac{${t}}{60}~\\text{h}}$`:e=`$v = \\dfrac{d}{t} = \\dfrac{${n(s)}~\\text{km}}{${p} + \\dfrac{${k}}{60}~\\text{h}}$`,e+="<br><br>",e+=`Sa vitesse moyenne est de ${u(i)} km/h.`,l=f()+" km/h",x(this,a,i);break;case"temps":if(r=`Si ${o} roule à ${i} km/h, combien de temps`,r+=this.interactif?" (en minutes)":"",r+=" lui faudra-t-",r+=`${$}`,r+=`  pour aller ${m} qui est à une distance de ${D(s)} km ?`,this.sup2===1)e=`$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|}
`,e+=`\\hline
`,e+=`\\text{Distance (en km)} & ${n(s)} & ${i}\\\\ 
`,e+=`\\hline
`,e+=`\\text{Temps (en min)} & t & 60 \\\\ 
`,e+=`\\hline
`,e+="\\end{array}$",e+="<br><br>",e+=`$t=\\dfrac{${n(s)}\\times 60}{${i}}=${t}$ 
`;else{const y=new F(s,i);e=`$t = \\dfrac{d}{v} = \\dfrac{${n(s)}~\\text{km}}{${i}~\\text{km/h}} = ${y.texFractionSimplifiee}~\\text{h} = ${y.texFractionSimplifiee} \\times 60~\\text{min} = ${t}~\\text{min}$`}e+="<br><br>",e+=`${o} mettra`,e+=this.interactif?` ${u(t)} min`:` ${u(b(t))}`,e+=` pour aller ${m}.`,l=f()+" minutes",x(this,a,t);break;case"distance":default:r=`${o} roule à ${i} km/h de moyenne pendant ${b(t)}. Calculer la distance parcourue`,r+=this.interactif?" : ":".",this.sup2===1?(e=`$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|}
`,e+=`\\hline
`,e+=`\\text{Distance (en km)} & d & ${i}\\\\ 
`,e+=`\\hline
`,e+=`\\text{Temps (en min)} & ${t} & 60 \\\\ 
`,e+=`\\hline
`,e+="\\end{array}$",e+="<br><br>",e+=`$d=\\dfrac{${n(t)}\\times ${i}}{60}=${n(s)}$ 
`):p===0?e=`$d = v \\times t = ${i}~\\text{km/h} \\times \\dfrac{${t}}{60}~\\text{h} = ${n(s)}~\\text{km}$`:e=`$d = v \\times t = ${i}~\\text{km/h} \\times \\left(${p} + \\dfrac{${k}}{60}\\right)~\\text{h} = ${n(s)}~\\text{km}$`,e+="<br><br>",e+=`${$.charAt(0).toUpperCase()+$.slice(1)} a donc parcouru ${u(C(s))} km.`,l=f()+" km",x(this,a,s);break}r+=M(this,a," ",{texteApres:l}),this.questionJamaisPosee(a,i,t)&&(this.listeQuestions[a]=r,this.listeCorrections[a]=e,a++),v++}q(this)}}export{re as dateDeModifImportante,le as default,ae as interactifReady,oe as interactifType,ce as refs,ne as titre,me as uuid};
