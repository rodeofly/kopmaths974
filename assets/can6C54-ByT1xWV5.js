import{K as a}from"./Exercice-DtXhjCyI.js";import{a as n,r,ax as o,m as s}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const E="Compléter une égalité de fractions",k=!0,y="mathLive",v="03/07/2025",L="39c09",T={"fr-fr":["can6C54","6N3H-flash1"],"fr-ch":[]};class A extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBase,this.formatInteractif="fillInTheBlank"}nouvelleVersion(){switch(n([1,2])){case 1:{const e=r(2,10),i=o(),t=n(i);this.reponse=t.num*e,this.consigne="Complèter. ",this.correction=`Le dénominateur de la fraction a été multiplié par $${e}$, donc le numérateur doit aussi être multiplié par $${e}$.<br>
        
        $\\begin{aligned}
        ${t.texFraction} &= \\dfrac{${t.num}\\times ${e}}{${t.den}\\times ${e}}\\\\
       ${t.texFraction} &=\\dfrac{${s(this.reponse)}}{${t.den*e}}
        \\end{aligned}$`,this.question=`${t.texFraction} =\\dfrac{%{champ1}}{${t.den*e}}`,this.canEnonce="Complèter.",this.canReponseACompleter=`$${t.texFraction} =\\dfrac{\\ldots}{${t.den*e}}$ `}break;case 2:{const e=r(2,10),i=o(),t=n(i);this.reponse=t.den*e,this.consigne="Compléter.",this.question=`${t.texFraction} = \\dfrac{${t.num*e}}{%{champ1}}`,this.correction=`Le numérateur de la fraction a été multiplié par $${e}$, donc le dénominateur doit aussi être multiplié par $${e}$.<br>
$\\begin{aligned}
${t.texFraction} &= \\dfrac{${t.num}\\times ${e}}{${t.den}\\times ${e}} \\\\
${t.texFraction}&= \\dfrac{${t.num*e}}{${s(this.reponse)}}
\\end{aligned}$
`,this.canEnonce=this.consigne,this.canReponseACompleter=`$${t.texFraction} = \\dfrac{${t.num*e}}{\\ldots}$`}break}}}export{v as dateDePublication,A as default,k as interactifReady,y as interactifType,T as refs,E as titre,L as uuid};
