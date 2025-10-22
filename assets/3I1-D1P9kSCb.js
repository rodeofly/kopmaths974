import{E as h,K as $}from"./Exercice-DtXhjCyI.js";import{r as i,t as v,l as g}from"./embellissements-BYV7mIDn.js";import{r as k}from"./questionMathLive-DdRvWqlN.js";import{h as x}from"./gestionInteractif-DujZpSu8.js";import{s as f}from"./scratchblock-CPHivmfQ.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const J=!0,O="mathLive",W="Trouver la position d'un lutin grâce à des instructions conditionnelles (scratch)",X="24/11/2020",Y="02/01/2025",Z="8cbd6",_={"fr-fr":["3I1"],"fr-ch":[]};class ee extends h{constructor(){super(),this.besoinFormulaireNumerique=["Variante",3,`1 : Sans condition imbriquée
2 : Avec une condition imbriquée
3 : Avec deux conditions imbriquées`],this.sup=1,this.nbQuestions=1,this.consigne="Donner les coordonnées de la position finale du lutin.",this.typeExercice="Scratch",this.nbQuestionsModifiable=!1}nouvelleVersion(){let s="";s=`\\begin{scratch}[fill blocks,scale=0.8]
`,s+="\\blockvariable{\\ovalvariable{var}}",s+="\\end{scratch}";let n="La position initiale d'un lutin dans un repère est (0,0).<br> Dans le programme, x désigne l'abscisse, et y désigne l'ordonnée d'un lutin. <br>";n+="Une variable a été créée, elle s'appelle",n+=f(s),n+=". <br>";let t=" ",e="",a=0,r=0;e+=`\\begin{scratch}[fill blocks,scale=0.8]
`;const o=i(1,10),l=i(1,10),c=i(1,10),u=i(1,10),m=i(1,10)*10,p=i(1,10)*10,b=i(1,10)*10,d=i(1,10)*10;e+=`\\blockinit{quand \\greenflag est cliqué}
`,e+=`\\blockmove{aller à x: \\ovalnum{0} y: \\ovalnum{0}}
`,e+=`\\blockvariable{mettre \\selectmenu{var} à \\ovalnum{${o}}}
`,e+=`\\blockifelse{si \\booloperator{\\ovalvariable{var} < \\ovalnum{${l}}} alors}
`,e+=`{\\blockmove{ajouter \\ovalnum{${m}} à x}
`,this.sup>1&&(e+=`\\blockif{si \\booloperator{\\ovalvariable{var} > \\ovalnum{${c}}} alors}
`,e+=`{\\blockmove{ajouter \\ovalnum{${p}} à x}
}
`),e+=`}
`,e+=`{\\blockmove{ajouter \\ovalnum{${b}} à y}
`,this.sup>2&&(e+=`\\blockif{si \\booloperator{\\ovalvariable{var} > \\ovalnum{${u}}} alors}
`,e+=`{\\blockmove{ajouter \\ovalnum{${d}} à y}
}
`),e+=`}
`,e+="\\end{scratch}",n+=f(e),o<l?(t+=`Comme l'inégalité "${o} < ${l}" est vraie, alors on ajoute ${m} à l'abscisse du lutin. <br>`,a+=m,this.sup>1&&(o>c?(t+=`Comme l'inégalité "${o} > ${c}" est vraie, alors on ajoute ${p} à l'abscisse du lutin. <br>`,a+=p):t+=`Comme l'inégalité "${o} > ${c}" est fausse, alors on ne change pas l'abscisse du lutin. <br>`)):(t+=`Comme l'inégalité "${o} < ${l}" est fausse, alors on ajoute ${b} à l'ordonnée du lutin. <br>`,r+=b,this.sup>2&&(o>u?(t+=`Comme l'inégalité "${o} > ${u}" est vraie, on ajoute ${d} à l'ordonnée du lutin. <br>`,r+=d):t+=`Comme l'inégalité "${o} > ${u}" est fausse, alors on ne change pas l'ordonnée du lutin. <br>`)),t+=` La position finale est donc : (${v(a)} ; ${v(r)}).`,this.interactif&&(n+="<br>La position finale du lutin est : "+k(this,0," (~%{champ1}~;~%{champ2}~).",$.clavierDeBase)),x(this,0,{champ1:{value:a},champ2:{value:r}},{formatInteractif:"fillInTheBlank"}),this.listeQuestions.push(n),this.listeCorrections.push(t),g(this)}}export{Y as dateDeModifImportante,X as dateDePublication,ee as default,J as interactifReady,O as interactifType,_ as refs,W as titre,Z as uuid};
