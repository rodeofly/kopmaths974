import{a as t,r as s,m as r}from"./embellissements-BYV7mIDn.js";import i from"./ExerciceSimple-CWWOU0FG.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const f="Développer des égalités remarquables avec des racines carrées",D=!0,x="mathLive",O="30/03/2023",k="9883e",C={"fr-fr":["can2C17"],"fr-ch":[]};class y extends i{constructor(){super(),this.optionsChampTexte={texteAvant:"<br>"},this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierFullOperations,this.optionsDeComparaison={texteSansCasse:!0}}nouvelleVersion(){switch(t([1,2,3,4,5,6])){case 1:{const e=t([2,3,5,7]),$=s(1,9);this.question=` Développer et réduire $(\\sqrt{${e}}+${$})^2$.`,this.correction=`On utilise l'égalité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $a=\\sqrt{${e}}$ et $b=${$}$.<br>
$\\begin{aligned}
(\\sqrt{${e}}+${$})^2&=(\\sqrt{${e}})^2+2 \\times ${$} \\times \\sqrt{${e}}+${$}^2\\\\
&=${e}+${2*$}\\sqrt{${e}}+${$*$}\\\\
&=${r(`${e+$*$}+${2*$}\\sqrt{${e}}`)}
\\end{aligned}$`,this.reponse=[`${e+$*$}+${2*$}\\sqrt${e}`,`${2*$}\\sqrt${e}+${e+$*$}`,`${2*$}\\times\\sqrt${e}+${e+$*$}`,`${e+$*$}+${2*$}\\times\\sqrt${e}`,`${e+$*$}+\\sqrt${e}\\times${2*$}`]}break;case 2:{const e=t([2,3,5,7]),$=s(1,9);this.question=` Développer et réduire $(\\sqrt{${e}}-${$})^2$.`,this.correction=`On utilise l'égalité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $a=\\sqrt{${e}}$ et $b=${$}$.<br>
      $\\begin{aligned}
      (\\sqrt{${e}}-${$})^2&=(\\sqrt{${e}})^2-2 \\times ${$} \\times \\sqrt{${e}}+${$}^2\\\\
      &=${e}-${2*$}\\sqrt{${e}}+${$*$}\\\\
      &=${r(`${e+$*$}-${2*$}\\sqrt{${e}}`)}
      \\end{aligned}$`,this.reponse=[`${e+$*$}-${2*$}\\sqrt${e}`,`${e+$*$}-${2*$}\\times\\sqrt${e}`,`${-2*$}\\sqrt${e}+${e+$*$}`,`${-2*$}\\times\\sqrt${e}+${e+$*$}`,`${e+$*$}+${-2*$}\\times\\sqrt${e}`,`${e+$*$}+\\sqrt${e}\\times${-2*$}`]}break;case 3:{const e=t([2,3,5,7]),$=s(1,9);this.question=`Développer et réduire $(\\sqrt{${e}}-${$})(\\sqrt{${e}}+${$})$.`,this.correction=`On utilise l'égalité remarquable $(a+b)(a-b)=a^2-b^2$ avec $a=\\sqrt{${e}}$ et $b=${$}$.<br>
          $\\begin{aligned}
          (\\sqrt{${e}}-${$})(\\sqrt${e}+${$})&=(\\sqrt${e})^2-${$}^2=${e}-${$*$}\\\\
          &=${r(`${e-$*$}`)}
          \\end{aligned}$`,this.reponse=[`${e-$*$}`]}break;case 4:{const e=t([2,3]),$=s(1,5);this.question=`Développer et réduire $(2\\sqrt{${e}}+${$})^2$.`,this.correction=`On utilise l'égalité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $a=2\\sqrt{${e}}$ et $b=${$}$.<br>
      $\\begin{aligned}
      (2\\sqrt{${e}}+${$})^2&=(2\\sqrt{${e}})^2+2 \\times 2\\sqrt{${e}} \\times ${$} + ${$}^2\\\\
      &=4\\times${e}+${4*$}\\sqrt{${e}}+${$*$}\\\\
      &=${r(`${4*e+$*$}+${4*$}\\sqrt${e}`)}
      \\end{aligned}$`,this.reponse=[`${4*e+$*$}+${4*$}\\sqrt${e}`,`${4*e+$*$}+${4*$}\\times\\sqrt${e}`,`${4*$}\\sqrt${e}+${4*e+$*$}`,`${4*$}\\times\\sqrt${e}+${4*e+$*$}`]}break;case 5:{const e=t([2,3]),$=s(1,5);this.question=`Développer et réduire $(2\\sqrt{${e}}-${$})^2$.`,this.correction=`On utilise l'égalité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $a=2\\sqrt{${e}}$ et $b=${$}$.<br>
              $\\begin{aligned}
              (2\\sqrt{${e}}-${$})^2&=(2\\sqrt{${e}})^2-2 \\times 2\\sqrt{${e}} \\times ${$} + ${$}^2\\\\
              &=4\\times${e}-${4*$}\\sqrt{${e}}+${$*$}\\\\
              &=${r(`${4*e+$*$}-${4*$}\\sqrt{${e}}`)}
              \\end{aligned}$`,this.reponse=[`${4*e+$*$}-${4*$}\\sqrt${e}`,`${4*e+$*$}-${4*$}\\times\\sqrt${e}`,`-${4*$}\\sqrt${e}+${4*e+$*$}`,`-${4*$}\\times\\sqrt${e}+${4*e+$*$}`]}break;case 6:{const e=t([2,3,5]),$=s(1,6);this.question=`Développer et réduire $(2\\sqrt{${e}}-${$})(2\\sqrt{${e}}+${$})$.`,this.correction=`On utilise l'égalité remarquable $(a+b)(a-b)=a^2-b^2$ avec $a=2\\sqrt{${e}}$ et $b=${$}$.<br>
                $\\begin{aligned}
                (2\\sqrt{${e}}-${$})(2\\sqrt{${e}}+${$})&=(2\\sqrt{${e}})^2-${$}^2\\\\
                &=4\\times${e}-${$*$}\\\\
                &=${r(`${4*e-$*$}`)}
                \\end{aligned}$`,this.reponse=[`${4*e-$*$}`]}break}}}export{O as dateDePublication,y as default,D as interactifReady,x as interactifType,C as refs,f as titre,k as uuid};
