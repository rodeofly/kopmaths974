import{a as $,ap as a,Y as i,m as n}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const R="Calculer avec une racine carrée*",_=!0,v="mathLive",x="3a350",L={"fr-fr":["can2C08"],"fr-ch":[]};class O extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const q=[[2,8],[2,32],[2,50],[3,27],[5,20],[2,18],[2,72],[3,48],[5,45]];let s,e,t,r;switch($([1,2])){case 1:s=$(q),e=s[0],t=s[1],r=a(t),$([!0,!1])?(this.question=`Le carré de $\\sqrt{${e}}+\\sqrt{${t}}$ est égal à : `,this.correction=`On simpifie $\\sqrt{${t}}$ en $${r[0]}\\sqrt{${r[1]}}$, car
    $\\sqrt{${t}}=\\sqrt{${r[0]}^2\\times ${r[1]}} =
    \\sqrt{${r[0]}^2}\\times \\sqrt{${r[1]}}
    =${r[0]}\\sqrt{${r[1]}}$.<br>
    Ainsi :
    <br>
    $\\begin{aligned}
    (\\sqrt{${e}}+\\sqrt{${t}})^2&=(\\sqrt{${e}}+${r[0]}\\sqrt{${r[1]}})^2\\\\
    &= (${r[0]+1}\\sqrt{${r[1]}})^2 \\\\
    &=(${r[0]+1}\\sqrt{${r[1]}})\\times (${r[0]+1}\\sqrt{${r[1]}})\\\\
    &=\\underbrace{${r[0]+1}\\times ${r[0]+1}}_{${(r[0]+1)**2}}\\times \\underbrace{\\sqrt{${r[1]}}\\times \\sqrt{${r[1]}}}_{${r[1]}}\\\\
    &=  ${n(`${(r[0]+1)**2*r[1]}`)}
    \\end{aligned}$
  `,this.canEnonce=`Calculer le carré de $\\sqrt{${e}}+\\sqrt{${t}}$.`,this.canReponseACompleter=""):(this.question=`Le carré de $\\sqrt{${t}}+\\sqrt{${e}}$ est égal à : `,this.correction=`On simpifie $\\sqrt{${t}}$ en $${r[0]}\\sqrt{${r[1]}}$, car
  $\\sqrt{${t}}=\\sqrt{${r[0]}^2\\times ${r[1]}} =
  \\sqrt{${r[0]}^2}\\times \\sqrt{${r[1]}}
  =${r[0]}\\sqrt{${r[1]}}$.<br>
  Ainsi :
  <br>
  $\\begin{aligned}
  (\\sqrt{${t}}+\\sqrt{${e}})^2&=(${r[0]}\\sqrt{${r[1]}}+\\sqrt{${e}})^2\\\\
  &= (${r[0]+1}\\sqrt{${r[1]}})^2 \\\\
  &=(${r[0]+1}\\sqrt{${r[1]}})\\times (${r[0]+1}\\sqrt{${r[1]}})\\\\
  &=\\underbrace{${r[0]+1}\\times ${r[0]+1}}_{${(r[0]+1)**2}}\\times \\underbrace{\\sqrt{${r[1]}}\\times \\sqrt{${r[1]}}}_{${r[1]}}\\\\
   &=  ${n(`${(r[0]+1)**2*r[1]}`)}
  \\end{aligned}$
`,this.canEnonce=`Calculer le carré de $\\sqrt{${t}}+\\sqrt{${e}}$.`,this.canReponseACompleter=""),this.reponse=e+t+2*Math.sqrt(e*t);break;case 2:s=$(q),e=s[0],t=s[1],r=a(t),$([!0,!1])?(this.question=`Le carré de $\\sqrt{${e}}-\\sqrt{${t}}$ est égal à : `,this.correction=`On simpifie $\\sqrt{${t}}$ en $${r[0]}\\sqrt{${r[1]}}$, car
    $\\sqrt{${t}}=\\sqrt{${r[0]}^2\\times ${r[1]}} =
    \\sqrt{${r[0]}^2}\\times \\sqrt{${r[1]}}
    =${r[0]}\\sqrt{${r[1]}}$.<br>
    Ainsi :
    <br>
    $\\begin{aligned}
    (\\sqrt{${e}}-\\sqrt{${t}})^2&=(\\sqrt{${e}}-${r[0]}\\sqrt{${r[1]}})^2\\\\
    &= (${1-r[0]}\\sqrt{${r[1]}})^2 \\\\
    &=(${1-r[0]}\\sqrt{${r[1]}})\\times (${1-r[0]}\\sqrt{${r[1]}})\\\\
  &=\\underbrace{${i(1-r[0])}\\times ${i(1-r[0])}}_{${(1-r[0])**2}}\\times \\underbrace{\\sqrt{${r[1]}}\\times \\sqrt{${r[1]}}}_{${r[1]}}\\\\
      &=  ${n(`${(1-r[0])**2*r[1]}`)}
    \\end{aligned}$
  `,this.canEnonce=`Calculer le carré de $\\sqrt{${e}}-\\sqrt{${t}}$.`,this.canReponseACompleter=""):(this.question=`Le carré de $\\sqrt{${t}}-\\sqrt{${e}}$ est égal à : `,this.correction=`On simpifie $\\sqrt{${t}}$ en $${r[0]}\\sqrt{${r[1]}}$, car
  $\\sqrt{${t}}=\\sqrt{${r[0]}^2\\times ${r[1]}} =
  \\sqrt{${r[0]}^2}\\times \\sqrt{${r[1]}}
  =${r[0]}\\sqrt{${r[1]}}$.<br>
  Ainsi :
  <br>
  $\\begin{aligned}
  (\\sqrt{${t}}-\\sqrt{${e}})^2&=(${r[0]}\\sqrt{${r[1]}}-\\sqrt{${e}})^2\\\\
  &= (${r[0]-1}\\sqrt{${r[1]}})^2 \\\\
  &=(${r[0]-1}\\sqrt{${r[1]}})\\times (${r[0]-1}\\sqrt{${r[1]}})\\\\
  &=\\underbrace{${i(r[0]-1)}\\times ${i(r[0]-1)}}_{${(r[0]-1)**2}}\\times \\underbrace{\\sqrt{${r[1]}}\\times \\sqrt{${r[1]}}}_{${r[1]}}\\\\
       &=  ${n(`${(r[0]-1)**2*r[1]}`)}
  \\end{aligned}$
`,this.canEnonce=`Calculer le carré de $\\sqrt{${t}}-\\sqrt{${e}}$.`,this.canReponseACompleter=""),this.reponse=e+t-2*Math.sqrt(e*t);break}}}export{O as default,_ as interactifReady,v as interactifType,L as refs,R as titre,x as uuid};
