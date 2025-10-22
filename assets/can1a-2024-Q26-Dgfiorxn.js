import s from"./ExerciceSimple-CWWOU0FG.js";import{a as c,F as n,e as o,m as d}from"./embellissements-BYV7mIDn.js";import{K as $}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const A="Additionner des fractions",O=!0,g="mathLive",C="9bbc7";class T extends s{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=$.clavierDeBaseAvecFraction,this.optionsDeComparaison={fractionIrreductible:!0},this.canOfficielle=!1}nouvelleVersion(){const a=this.canOfficielle?[[5,6,1,4,12]]:[[5,6,1,4,12],[5,6,3,4,12],[7,6,3,4,12],[1,6,1,4,12],[11,6,1,4,12],[5,9,1,6,18],[2,9,1,6,18],[4,9,1,6,18],[4,9,5,6,18],[2,9,5,6,18],[3,10,3,4,20],[7,10,3,4,20],[9,10,5,4,20],[3,10,1,6,30],[7,10,5,6,30]],i=c(a),r=c([!0,!1]),t=this.canOfficielle?new n(5,6):new n(i[0],i[1]),e=this.canOfficielle?new n(1,4):new n(i[2],i[3]);this.reponse=new n(t.n*e.d+e.n*t.d,t.d*e.d).simplifie(),this.question=`Écrire sous la forme d'une fraction irréductible : <br>
          $${r?`${t.texFraction} + ${e.texFraction}=`:`${e.texFraction} + ${t.texFraction}=`}$
             `,this.correction=`Pour additionner des fractions, on les met au même dénominateur.<br>
  Le plus petit dénominateur commun est $${i[4]}$.<br>
             Ainsi, <br>
           $\\begin{aligned}
           ${r?`${t.texFraction} + ${e.texFraction}`:`${e.texFraction} + ${t.texFraction}`}&=
           ${r?`\\dfrac{${o(t.n*i[4]/t.d,0)}}{${i[4]}} + \\dfrac{${o(e.n*i[4]/e.d,0)}}{${i[4]}}`:` \\dfrac{${o(e.n*i[4]/e.d,0)}}{${i[4]}}+\\dfrac{${o(t.n*i[4]/t.d,0)}}{${i[4]}} `}\\\\
           &=${d(`${new n(t.n*e.d+e.n*t.d,t.d*e.d).simplifie().texFraction}`)}\\text{(fraction irréductible)}
           \\end{aligned}$
             
             
            `,this.interactif||(this.question+=" $\\ldots$"),this.canEnonce=`Écrire sous la forme d'une fraction irréductible : <br>
    $${r?`${t.texFraction} + ${e.texFraction}`:`${e.texFraction} + ${t.texFraction}`}$
       `,this.canReponseACompleter=""}}export{T as default,O as interactifReady,g as interactifType,A as titre,C as uuid};
