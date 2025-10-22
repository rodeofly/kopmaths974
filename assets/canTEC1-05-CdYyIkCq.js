import m from"./ExerciceSimple-CWWOU0FG.js";import{r as c,m as r}from"./embellissements-BYV7mIDn.js";import{complex as n,conj as o}from"mathjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Déterminer le conjugué d'un nombre complexe",k=!0,E="mathLive",O=!0,C="AMCHybride",R="07/092025",T="ac62a",P={"fr-fr":["canTEC1-05"],"fr-ch":[]};class w extends m{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple"}nouvelleVersion(){const e=c(-5,5),i=c(-5,5),t=n(e,i),$=n(-e,-i),s=n(-i,e),a=n(e,-i),l=n(i,e),g=n(i,-e),u=c(0,4);switch(this.question=`On donne le nombre complexe $z = ${t.toString()}$.<br>`,this.correction="Par définition, le conjugué d'un nombre complexe qui s'écrit sous la forme $z=a+ib$, avec $a$ et $b$ deux réels, est $\\overline{z} =a-ib$.<br>",u){case 0:this.question+="Déterminer le conjugué de $z$.",this.correction+=`On a donc ici : $\\overline{z} = ${r(`${o(t).toString()}`)}$.`,this.reponse=`${e}+${-i}i`;break;case 1:this.question+="Déterminer $\\overline{z}$.",this.correction+=`On a donc ici : $\\overline{z} = ${r(`${o(t).toString()}`)}$.`,this.reponse=`${e}+${-i}i`;break;case 2:this.question+="Déterminer la forme algébrique de $Z=\\overline{-z}$.",this.correction+=`
    $\\begin{aligned}
    Z&=\\overline{-z}\\\\
     &= \\overline{${$.toString()}}\\\\
    &=${r(`${o($).toString()}`)}.
    \\end{aligned}$`,this.reponse=`${-e}+${i}i`;break;case 3:this.question+="Déterminer la forme algébrique de $Z=\\overline{iz}$.",this.correction+=`
    $\\begin{aligned}
    Z&=\\overline{iz}\\\\
      &= \\overline{i\\left(${t.toString()}\\right)}\\\\
      &= \\overline{${s.toString()}}\\\\
    &=${r(`${o(s).toString()}`)}.
    \\end{aligned}$<br>
    On aurait pu aussi utiliser la propriété  des produits des conjugués :<br>
     $\\begin{aligned}
    Z&=\\overline{iz}\\\\
      &= \\overline{i} \\times \\overline{${t.toString()}}\\\\
       &= -i \\left({${a.toString()}}\\right)\\\\
       &=${r(`${o(s).toString()}`)}.
    \\end{aligned}$<br>`,this.reponse=`${-e}+${-i}i`;break;case 4:this.question+="Déterminer la forme algébrique de $Z=\\overline{-iz}$.",this.correction+=`
    $\\begin{aligned}
    Z&=\\overline{-iz}\\\\
      &= \\overline{-i\\left(${t.toString()}\\right)}\\\\
      &= \\overline{${g.toString()}}\\\\
    &=${r(`${l.toString()}`)}.
    \\end{aligned}$<br>
    On aurait pu aussi utiliser la propriété  des produits des conjugués :<br>
     $\\begin{aligned}
    Z&=\\overline{-iz}\\\\
      &= \\overline{-i} \\times \\left(\\overline{${t.toString()}}\\right)\\\\
       &= i \\left({${o(t).toString()}}\\right)\\\\
      &=${r(`${l.toString()}`)}.
    \\end{aligned}$<br>`,this.reponse=`${-i}+${-e}i`;break}}}export{O as amcReady,C as amcType,R as dateDePublication,w as default,k as interactifReady,E as interactifType,P as refs,y as titre,T as uuid};
