import r from"./ExerciceSimple-CWWOU0FG.js";import{e,m as o,r as n,a as c,d as a}from"./embellissements-BYV7mIDn.js";import{K as $}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const C="Calculer avec des puissances de 10",T=!0,q="mathLive",A="847a9";class K extends r{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=$.clavierDeBaseAvecFraction,this.optionsChampTexte={texteAvant:" $=$"}}nouvelleVersion(){if(this.canOfficielle)this.reponse="100.1",this.question="$10^{-1}+10^{2}$",this.correction=`$\\begin{aligned}
      10^{-1}+10^{2}&=${e(.1)} +${e(100)}\\\\
      &=${o(e(100.1))}
      \\end{aligned}$`;else{const i=n(2,4),t=n(-3,0),s=c([!0,!1]);this.reponse=a(10**i+10**t,3),this.question=`${s?`$10^{${i}}+10^{${t}}$ `:`$10^{${t}}+10^{${i}}$ `}`,this.correction=`$\\begin{aligned}
      ${s?`10^{${i}}+10^{${t}}&=${e(10**i,0)} +${e(10**t,3)}`:`10^{${t}}+10^{${i}}&=${e(10**t,3)} +${e(10**i,0)}`}\\\\
      &=${o(e(this.reponse,3))}
      \\end{aligned}$`}this.canEnonce=this.question,this.canReponseACompleter=""}}export{K as default,T as interactifReady,q as interactifType,C as titre,A as uuid};
