import{a as b,r as a,f as s,Y as o,m as c,e as n,_ as l,v as u}from"./embellissements-BYV7mIDn.js";import d from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const E="Calculer une image avec le second degré",L=!0,k="mathLive",S="b2c31",y={"fr-fr":["can2F01"],"fr-ch":[]};class A extends d{constructor(){super(),this.typeExercice="simple",this.versionQcmDisponible=!0,this.nbQuestions=1}nouvelleVersion(){let $,i,e,r,t,m;switch(b(["a","b","c","d"])){case"a":$=this.versionQcm?a(-5,-1):a(1,4),i=a(1,2),e=a(1,2),r=a(2,5),m=`${u(i)}x^2+${u(e)}x+${r}`,this.question=`On considère la fonction $f$ définie par $f(x)= ${m}$. <br>`,this.question+=this.versionQcm?`L'image de $${$}$ par la fonction $f$ est égale à :`:`Calculer $f(${$})$.`,i===1&&e!==1&&(this.correction=`On a : <br>
          $\\begin{aligned}
          f(${$})&= ${$}^2+${e}\\times ${o($)}+${r}\\\\
          &=${$*$}${s(e*$)}+${r}\\\\
          &= ${i*$*$}${s(e*$)}+${r}\\\\
          &=${c(i*$*$+e*$+r)}
          \\end{aligned}$<br>`,this.correction+=l(` Mentalement : <br>
          On commence par calculer le carré de $${$}$, soit $${$}^2=${n($**2)}$. <br>
   On calcule $${e}\\times ${$}$ que l'on ajoute à $${n(i*$**2)}$, soit $${i*$**2}+${e*$}=${i*$**2+e*$}$.<br>
  Pour finir, on ajoute   $${r}$, ce qui donne $${n(i*$**2+e*$)}+${r}$, soit $${n(i*$**2+e*$+r)}$.<br>
    `,"blue")),i!==1&&e!==1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${i}\\times${$}^2+${e}\\times ${$}+${r}\\\\
          &=${i}\\times ${$*$}${s(e*$)}+${r}\\\\
          &=${i*$*$}${s(e*$)}+${r}\\\\
          &=${c(i*$*$+e*$+r)}
          \\end{aligned}$.<br>`,this.correction+=l(` Mentalement : <br>
              On commence par calculer le carré de $${$}$, soit $${$}^2=${n($**2)}$. <br>
     On multiplie ensuite cette valeur par le coefficient devant $x^2$, soit $${i}\\times ${n($**2)}=${n(i*$**2)}$.<br>
      On calcule $${e}\\times ${$}$ que l'on ajoute à $${n(i*$**2)}$, soit $${i*$**2}+${e*$}=${i*$**2+e*$}$.<br>
      Pour finir, on ajoute   $${r}$, ce qui donne $${n(i*$**2+e*$)}+${r}$, soit $${n(i*$**2+e*$+r)}$.<br>
        `,"blue")),i===1&&e===1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${$}^2+ ${$}+${r}\\\\
          &=${$*$}+${$}+${r}\\\\
          &=${c($*$+e*$+r)}
          \\end{aligned}$<br>`,this.correction+=l(` Mentalement : <br>
          On commence par calculer le carré de $${$}$, soit $${$}^2=${n($**2)}$. <br>
   On ajoute  $${$}$ soit $${i*$**2}+${$}=${$**2+e*$}$.<br>
  Pour finir, on ajoute   $${r}$, ce qui donne $${n(i*$**2+e*$)}+${r}$, soit $${n(i*$**2+e*$+r)}$.<br>
    `,"blue")),i!==1&&e===1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${i}\\times${$}^2+${e}\\times ${o($)}+${r}\\\\
          &=${i}\\times ${$*$}${s(e*$)}+${r}\\\\
          &=${i*$*$}${s(e*$)}+${r}\\\\
          &=${c(i*$*$+e*$+r)}
          \\end{aligned}$<br>`,this.correction+=l(` Mentalement : <br>
          On commence par calculer le carré de $${$}$, soit $${$}^2=${n($**2)}$. <br>
 On multiplie ensuite cette valeur par le coefficient devant $x^2$, soit $${i}\\times ${n($**2)}=${n(i*$**2)}$.<br>
 On ajoute  $${$}$ soit $${i*$**2}+${$}=${i*$**2+e*$}$.<br>
  Pour finir, on ajoute   $${r}$, ce qui donne $${n(i*$**2+e*$)}+${r}$, soit $${n(i*$**2+e*$+r)}$.<br>
    `,"blue")),this.reponse=this.versionQcm?`$${n(i*$*$+e*$+r)}$`:i*$*$+e*$+r,this.distracteurs=[i*$*$+e*$+r===-i*$*$+e*$+r?`$${n(i*$-e*$-r)}$`:`$${n(-i*$*$+e*$+r)}$`,i*$*$+e*$+r===2*$+e*$+r?`$${n(-2*i*$+e*$+r)}$`:`$${n(-2*$+e*$+r)}$`,i*$*$+e*$+r===$+e*$+r?`$${n(-$+e*$+r)}$`:`$${n($+e*$+r)}$`];break;case"b":i=a(1,3),e=a(-2,2,[0]),r=a(1,3),t=a(-3,3,[0,e]),$=this.versionQcm?a(-5,-1):a(-3,3,[0]),m=`(${u(i)}x${s(e)})(${u(r)}x${s(t)})`,this.question=`On considère la fonction $f$ définie par $f(x)= ${m}$. <br>`,this.question+=this.versionQcm?`L'image de $${$}$ par la fonction $f$ est égale à :`:`Calculer $f(${$})$.`,i===1&&r===1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${o($)}${s(e)}\\right)\\left(${o($)}${s(t)}\\right)\\\\
          &=(${i*$}${s(e)})(${r*$}${s(t)})\\\\
          &=${i*$+e}\\times${o(r*$+t)}\\\\
          &=${c((i*$+e)*(r*$+t))}
          \\end{aligned}$<br>`,this.reponse=this.versionQcm?`$${(i*$+e)*(r*$+t)}$`:`${(i*$+e)*(r*$+t)}`,this.correction+=l(` Mentalement : <br>
          On commence par "calculer" la première parenthèse :  $${o($)}${s(e)}=${i*$+e}$.<br>
           Puis la deuxième : $${o($)}${s(t)}=${r*$+t}$.<br>
        On fait le produit des nombres obtenus : $${i*$+e}\\times ${r*$+t}=${(i*$+e)*(r*$+t)}$.
    `,"blue")),i!==1&&r!==1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${u(i)}\\times${o($)}${s(e)}\\right)\\left(${r}\\times${o($)}${s(t)}\\right)\\\\
          &=(${i*$}${s(e)})(${r*$}${s(t)})\\\\
          &= ${i*$+e}\\times${o(r*$+t)}=${c((i*$+e)*(r*$+t))}
          \\end{aligned}$<br>`,this.correction+=l(` Mentalement : <br>
        On commence par "calculer" la première parenthèse :  $${u(i)}\\times${o($)}${s(e)}=${i*$+e}$.
        <br>Puis la deuxième : $${r}\\times${o($)}${s(t)}=${r*$+t}$.<br>
        On fait le produit des nombres obtenus : $${i*$+e}\\times ${o(r*$+t)}=${(i*$+e)*(r*$+t)}$.
    `,"blue")),i===1&&r!==1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${o($)}${s(e)}\\right)\\left(${r}\\times${o($)}${s(t)}\\right)\\\\
          &=(${i*$}${s(e)})(${r*$}${s(t)})\\\\
          &=${i*$+e}\\times${o(r*$+t)}=${c((i*$+e)*(r*$+t))}
          \\end{aligned}$<br>`,this.correction+=l(` Mentalement : <br>
        On commence par "calculer" la première parenthèse :  $${o($)}${s(e)}=${i*$+e}$.
        <br>Puis la deuxième : $${r}\\times${o($)}${s(t)}=${r*$+t}$.<br>
        On fait le produit des nombres obtenus : $${i*$+e}\\times ${r*$+t}=${(i*$+e)*(r*$+t)}$.
    `,"blue")),i!==1&&r===1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${i}\\times${o($)}${s(e)}\\right)\\left(${o($)}${s(t)}\\right)\\\\
          &=(${i*$}${s(e)})(${r*$}${s(t)})\\\\
          &=${i*$+e}\\times${o(r*$+t)}=${c((i*$+e)*(r*$+t))}
          \\end{aligned}$<br>`,this.correction+=l(` Mentalement : <br>
        On commence par "calculer" la première parenthèse :  $${i}\\times${o($)}${s(e)}=${i*$+e}$.
        <br>Puis la deuxième : $${o($)}${s(t)}=${r*$+t}$.<br>
        On fait le produit des nombres obtenus : $${i*$+e}\\times ${o(r*$+t)}=${(i*$+e)*(r*$+t)}$.
    `,"blue")),this.reponse=this.versionQcm?`$${n((i*$+e)*(r*$+t))}$`:(i*$+e)*(r*$+t),this.distracteurs=[`$${n((i*$-e)*(r*$+t))}$`,`$${n((i*$+e)*(r*$-t))}$`,`$${n(i*$+e+(r*$+t))}$`,`$${n(-i*$+e+(r*$+t))}$`,`$${n(-i*$+e+(-r*$+t))}$`];break;case"c":i=a(-3,3,0),e=a(1,3),$=this.versionQcm?a(-5,-1):a(-3,3,[0]),m=`${i}-${u(e)}x^2`,this.question=`On considère la fonction $f$ définie par $f(x)= ${m}$. <br>`,this.question+=this.versionQcm?`L'image de $${$}$ par la fonction $f$ est égale à :`:`Calculer $f(${$})$.`,this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${i}- ${o($)}^2\\\\
          &=${c(i-e*$*$)}
          \\end{aligned}$<br>`,this.reponse=this.versionQcm?`$${n(i-e*$*$)}$`:i-e*$*$,e===1?this.correction+=l(` Mentalement : <br>
          On commence par "calculer" le carré de $${$}$ :  $${o($)}^2=${$*$}$.<br>
          On calcule alors $${i}-${$*$}=${i-$*$}$.<br>
    `,"blue"):(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${i}- ${e}\\times ${o($)}^2\\\\
          &=${c(i-e*$*$)}
          \\end{aligned}$<br>`,this.correction+=l(` Mentalement : <br>
    On commence par "calculer" le carré de $${$}$ :  $${o($)}^2=${$*$}$.<br>
    Puis on multiplie le résultat par $${e}$ : $${e}\\times ${$**2}=${e*$*$}$.<br>
    On calcule alors : $${i}-${e*$*$}=${i-e*$*$}$.`,"blue")),this.distracteurs=[`$${n(i+e*$*$)}$`,`$${n((i-e*$)**2)}$`,`$${n(-i+e*$*$)}$`,`$${n(i-2*e*$)}$`,`$${n(i+2*e*$)}$`];break;case"d":i=a(-4,4,[0,-1,1]),e=a(-4,4,[0]),r=a(-4,4,[0,-1,1]),t=a(-4,4,[0]),$=this.versionQcm?a(-4,-1,[0]):a(-2,2,[0]),m=`(${i}x${s(e)})^2`,this.question=`On considère la fonction $f$ définie par $f(x)= ${m}$. <br>`,this.question+=this.versionQcm?`L'image de $${$}$ par la fonction $f$ est égale à :`:`Calculer $f(${$})$.`,this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${i}\\times${o($)}${s(e)}\\right)^2\\\\
          &= (${i*$}${s(e)})^2\\\\
          &=${o(i*$+e)}^2\\\\
        &=${c((i*$+e)*(i*$+e))}
        \\end{aligned}$<br>`,this.reponse=this.versionQcm?`$${n((i*$+e)*(i*$+e))}$`:(i*$+e)*(i*$+e),this.correction+=l(` Mentalement : <br>
          On commence par "calculer" l'intérieur de la parenthèse, puis on élève le résultat au carré.
    `,"blue"),this.distracteurs=[`$${n(-1*(i*$+e)*(i*$+e))}$`,`$${n((i*$-e)*(i*$+e))}$`,`$${n(i*$+e)}$`,`$${n((i+$+e)*(i+$+e))}$`];break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{A as default,L as interactifReady,k as interactifType,y as refs,E as titre,S as uuid};
