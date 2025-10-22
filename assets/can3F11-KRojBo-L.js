import{a as $,r as i,s as o}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const D="Utiliser le vocabulaire image/antécédent",y=!0,A="mathLive",F="02/10/2023",N="d85c2",k={"fr-fr":["can3F11"],"fr-ch":[]};class E extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const r=["f","g","h","u","v","w","c","d"];switch($([1,2,3])){case 1:{const t=$(r),n=$([!0,!1]),e=i(-10,10),s=i(-10,10,e);this.question=` Dans l'écriture $${t}(${e})=${s}$, quel nombre est ${n?"l'image":"un antécédent"} ?`,this.correction=`Dans l'écriture $${t}(a)=b$, on peut dire que : <br>
          $\\bullet$ $b$ est l'image de $a$ par la fonction $${t}$ ;<br>
          $\\bullet$ $a$ est un antécédent de $b$ par la fonction $${t}$.<br>
          Ainsi,  ${n?`le  nombre image  est $${s}$`:` un antécédent est $${e}$`}.`,this.reponse=n?`${s}`:`${e}`}break;case 2:{const t=$(r),n=$([!0,!1]),e=i(-10,10),s=i(-10,10,e);this.question="Dans le tableau ",this.question+="",this.question+=`$\\begin{array}{|c|c|}
          \\hline
          x&${o(5)}${e}${o(5)}\\\\
          \\hline
         ${t}(x) &${o(5)}${s}${o(5)}\\\\
          \\hline
          \\end{array}$  quel nombre est ${n?"l'image":"un antécédent"} ?`,this.question+="",this.correction=`Sur la première ligne du tableau on lit les valeurs de $x$ donc les antécédents. <br>
          Sur la deuxième ligne, on lit les valeurs de $${t}(x)$, donc les images.<br>
          Ainsi, ${n?`le  nombre image  est $${s}$`:`un antécédent est $${e}$`}.`,this.reponse=n?`${s}`:`${e}`}break;case 3:{const t=$(r),n=$([!0,!1]),e=i(-10,10),s=i(-10,10,e);this.question=` Dans l'écriture $${t}$ : $${e} \\longmapsto ${s}$, quel nombre est ${n?"l'image":"un antécédent"} ?`,this.correction=`Dans l'écriture $${t}$ : $a \\longmapsto b$, on peut dire que : <br>
              $\\bullet$ $b$ est l'image de $a$ par la fonction $${t}$ ;<br>
              $\\bullet$ $a$ est un antécédent de $b$ par la fonction $${t}$.<br>
              Ainsi,  ${n?`le  nombre image  est $${s}$`:`un antécédent est $${e}$`}.`,this.reponse=n?`${s}`:`${e}`}break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{F as dateDePublication,E as default,y as interactifReady,A as interactifType,k as refs,D as titre,N as uuid};
