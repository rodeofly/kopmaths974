import{a as b,r,m as t,a0 as s}from"./embellissements-BYV7mIDn.js";import m from"./ExerciceSimple-CWWOU0FG.js";import{K as d}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const O="Développer avec les égalités remarquables",T=!0,C="mathLive",K="25/10/2021",P="12/07/2025",R="4c675",V={"fr-fr":["can2L06"],"fr-ch":[]};class w extends m{constructor(){super(),this.versionQcmDisponible=!0,this.formatChampTexte=d.clavierDeBaseAvecVariable,this.typeExercice="simple",this.nbQuestions=1,this.optionsDeComparaison={developpementEgal:!0}}nouvelleVersion(){const e=b(["x","y","a"]),$=r(1,9),i=r(2,5),a=`$(${e}+${$})^2$`,o=`$(${e}-${$})^2$`,n=`$(${e}-${$})(${e}+${$})$`,l=`$(${i}${e}+${$})^2$`,c=`$(${i}${e}-${$})^2$`,p=`$(${i}${e}-${$})(${i}${e}+${$})$`;switch(r(1,6)){case 1:this.versionQcm?this.question=`La forme développée de ${a} est :`:this.question=`Développer  ${a}.`,this.correction=`On utilise l'égalité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $a=${e}$ et $b=${$}$.<br>
$\\begin{aligned}
           (${e}+${$})^2&=${e}^2+2 \\times ${$} \\times ${e}+${$}^2\\\\
            &=${t(`${e}^2+${2*$}${e}+${$*$}`)}
            \\end{aligned}$`,this.reponse=`$${s(0,1,2*$,$**2,e)}$`,this.distracteurs=[`$${s(0,1,0,$*$,e)}$`,`$${s(0,1,-2*$,$*$,e)}$`,`$${s(0,1,$,$*$,e)}$`];break;case 2:this.versionQcm?this.question=`La forme développée de ${o} est :`:this.question=` Développer ${o}.`,this.correction=`On utilise l'égalité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $a=${e}$ et $b=${$}$.<br>
      $\\begin{aligned}
            (${e}-${$})^2&=${e}^2-2 \\times ${$} \\times ${e}+${$}^2\\\\
            &=${t(`${e}^2-${2*$}${e}+${$*$}`)}
            \\end{aligned}$`,this.reponse=`$${s(0,1,-2*$,$**2,e)}$`,this.distracteurs=[`$${s(0,1,0,$*$,e)}$`,`$${s(0,1,-2*$,-$*$,e)}$`,`$${s(0,1,2*$,$*$,e)}$`,`$${s(0,1,$,$*$,e)}$`];break;case 3:this.versionQcm?this.question=`La forme développée de ${n} est :`:this.question=`Développer ${n}.`,this.correction=`On utilise l'égalité remarquable $(a+b)(a-b)=a^2-b^2$ avec $a=${e}$ et $b=${$}$.<br>
 $\\begin{aligned}
           (${e}-${$})(${e}+${$})&=${e}^2-${$}^2\\\\
            &=${t(`${e}^2-${$*$}`)}
            \\end{aligned}$`,this.reponse=`$${s(0,1,0,-1*$**2,e)}$`,this.distracteurs=[`$${s(0,1,0,$*$,e)}$`,`$${s(0,1,-2*$,$*$,e)}$`,`$${s(0,1,2*$,$*$,e)}$`,`$${s(0,1,-2*$,-$*$,e)}$`];break;case 4:this.versionQcm?this.question=`La forme développée de ${l} est :`:this.question=`Développer ${l}.`,this.correction=`On utilise l'égalité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $a=${i}${e}$ et $b=${$}$.<br>
 $\\begin{aligned}
         (${i}${e}+${$})^2&=(${i}${e})^2+2 \\times ${i}${e} \\times ${$} + ${$}^2\\\\
            &=${t(`${i*i}${e}^2+${2*i*$}${e}+${$*$}`)}
            \\end{aligned}$`,this.reponse=`$${s(0,i**2,2*$*i,$**2,e)}$`,this.distracteurs=[`$${s(0,i*i,0,$*$,e)}$`,`$${s(0,i*i,$*i,$*$,e)}$`,`$${s(0,1,2*$,$*$,e)}$`,`$${s(0,1,$,$*$,e)}$`];break;case 5:this.versionQcm?this.question=`La forme développée de ${c} est :`:this.question=`Développer ${c}.`,this.correction=`On utilise l'égalité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $a=${i}${e}$ et $b=${$}$.<br>
        $\\begin{aligned}
         (${i}${e}-${$})^2&=(${i}${e})^2-2 \\times ${i}${e} \\times ${$} + ${$}^2\\\\
            &=${t(`${i*i}${e}^2-${2*i*$}${e}+${$*$}`)}
            \\end{aligned}$`,this.reponse=`$${s(0,i**2,-2*$*i,$**2,e)}$`,this.distracteurs=[`$${s(0,i*i,0,-$*$,e)}$`,`$${s(0,i*i,0,$*$,e)}$`,`$${s(0,i*i,2*i*$,$*$,e)}$`,`$${s(0,i*i,i*$,$*$,e)}$`,`$${s(0,i*i,-2*i*$,$*$,e)}$`];break;case 6:default:this.versionQcm?this.question=`La forme développée de ${p} est :`:this.question=`Développer ${p}.`,this.correction=`On utilise l'égalité remarquable $(a+b)(a-b)=a^2-b^2$ avec $a=${i}${e}$ et $b=${$}$.<br>
   $\\begin{aligned}
             (${i}${e}-${$})(${i}${e}+${$})&=(${i}${e})^2-${$}^2\\\\
              &=${t(`${i**2}${e}^2-${$*$}`)}
              \\end{aligned}$`,this.reponse=`$${s(0,i**2,0,-1*$**2,e)}$`,this.distracteurs=[`$${s(0,i*i,0,$*$,e)}$`,`$${s(0,i*i,-2*$*i,$*$,e)}$`,`$${s(0,i*i,2*$*i,$*$,e)}$`,`$${s(0,i*i,-2*$*i,-$*$,e)}$`];break}this.question+="<br>"}}export{P as dateDeModifImportante,K as dateDePublication,w as default,T as interactifReady,C as interactifType,V as refs,O as titre,R as uuid};
