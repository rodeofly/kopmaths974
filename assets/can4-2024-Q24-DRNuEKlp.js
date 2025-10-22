import $ from"./ExerciceSimple-CWWOU0FG.js";import{u as n,m as o,r,a as c}from"./embellissements-BYV7mIDn.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Réduire une expression littérale",A=!0,R="mathLive",O="23d19";class T extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBaseAvecVariable,this.optionsChampTexte={texteAvant:" $=$",texteApres:"."},this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=`${n(16,-5)}`,this.question="Réduis",this.question+=this.interactif?" : <br> ":" ",this.question+="$2x-5+14x$",this.correction=`$2x-5+14x=${o("16x-5")}$`;else{const e=r(2,9),i=r(2,9),t=r(2,9),s=r(2,9);this.question="Réduire "+(this.interactif?" : <br> ":" "),c([!0,!1])?(this.reponse=`${n(e+t,i+s)}`,this.question+=`$${e}x+${i}+${t}x+${s}$ `,this.correction=` On réduit l'expression :<br>
        $\\begin{aligned}
        ${e}x+${i}+${t}x+${s}&=${e}x+${t}x+${i}+${s}\\\\
        &=${o(this.reponse)}
        \\end{aligned}$`):(this.reponse=`${n(e+t,i)}`,this.question+=`$${e}x+${i}+${t}x$`,this.correction=` On réduit l'expression :<br>
        $\\begin{aligned}
        ${e}x+${i}+${t}x&=${e}x+${t}x+${i}\\\\
        &=${o(this.reponse)}
        \\end{aligned}$`)}this.canEnonce=this.question,this.canReponseACompleter=""}}export{T as default,A as interactifReady,R as interactifType,y as titre,O as uuid};
