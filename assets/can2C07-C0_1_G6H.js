import{K as o}from"./Exercice-DtXhjCyI.js";import{a as r,ap as n,m as i}from"./embellissements-BYV7mIDn.js";import q from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const A="Calculer avec une racine carrée",O=!0,y="mathLive",E="2af85",R={"fr-fr":["can2C07"],"fr-ch":["11NO1-11"]};class T extends q{constructor(){super(),this.optionsChampTexte={texteAvant:"<br>"},this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=o.clavierFullOperations,this.optionsDeComparaison={texteSansCasse:!0}}nouvelleVersion(){const a=[[2,8],[2,32],[2,50],[3,27],[5,20],[2,18],[2,72],[3,48],[5,45],[2,200],[3,300],[5,500],[6,600],[7,700]];let $,e,s,t;switch(r([1,2])){case 1:$=r(a),e=$[0],s=$[1],t=n(s),r([!0,!1])?(this.question=`Écrire $\\sqrt{${e}}+\\sqrt{${s}}$ sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers et $b$ le plus petit possible. `,this.correction=`On a  $${s}=${t[0]}^2\\times ${t[1]}$.<br>
          Ainsi, $\\sqrt{${s}}=\\sqrt{${t[0]}^2\\times${t[1]}}=\\sqrt{${t[0]}^2}\\times \\sqrt{${t[1]}}
    =${t[0]}\\sqrt{${t[1]}}$.<br>
    $\\begin{aligned}
    \\sqrt{${e}}+\\sqrt{${s}}&=\\sqrt{${e}}+${t[0]}\\sqrt{${t[1]}}\\\\
    &= ${i(`${t[0]+1}\\sqrt{${t[1]}}`)}
    \\end{aligned}$
  `):(this.question=`Écrire $\\sqrt{${s}}+\\sqrt{${e}}$ sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers et $b$ le plus petit possible. `,this.correction=`On a  $${s}=${t[0]}^2\\times ${t[1]}$.<br>
          Ainsi, $\\sqrt{${s}}=\\sqrt{${t[0]}^2\\times${t[1]}}=\\sqrt{${t[0]}^2}\\times \\sqrt{${t[1]}}
    =${t[0]}\\sqrt{${t[1]}}$.<br>
  $\\begin{aligned}
  \\sqrt{${s}}+\\sqrt{${e}}&=${t[0]}\\sqrt{${t[1]}}+\\sqrt{${e}}\\\\
  &= ${i(`${t[0]+1}\\sqrt{${t[1]}}`)}
  \\end{aligned}$
`),this.reponse=[`${t[0]+1}\\sqrt${t[1]}`];break;case 2:$=r(a),e=$[0],s=$[1],t=n(s),r([!0,!1])?(this.question=`Écrire $\\sqrt{${e}}-\\sqrt{${s}}$ sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers et $b$ le plus petit possible. `,this.correction=`On a  $${s}=${t[0]}^2\\times ${t[1]}$.<br>
          Ainsi, $\\sqrt{${s}}=\\sqrt{${t[0]}^2\\times${t[1]}}=\\sqrt{${t[0]}^2}\\times \\sqrt{${t[1]}}
    =${t[0]}\\sqrt{${t[1]}}$.<br>
    $\\begin{aligned}
    \\sqrt{${e}}-\\sqrt{${s}}&=\\sqrt{${e}}-${t[0]}\\sqrt{${t[1]}}\\\\
    &= ${i(`${1-t[0]}\\sqrt{${t[1]}}`)}
    \\end{aligned}$
  `,1-t[0]===-1?this.reponse=[`${1-t[0]}\\sqrt${t[1]}`]:this.reponse=[`${1-t[0]}\\sqrt${t[1]}`,`-\\sqrt${t[1]}`]):(this.question=`Écrire $\\sqrt{${s}}-\\sqrt{${e}}$ sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers et $b$ le plus petit possible. `,this.correction=`On a  $${s}=${t[0]}^2\\times ${t[1]}$.<br>
          Ainsi, $\\sqrt{${s}}=\\sqrt{${t[0]}^2\\times${t[1]}}=\\sqrt{${t[0]}^2}\\times \\sqrt{${t[1]}}
    =${t[0]}\\sqrt{${t[1]}}$.<br>
  $\\begin{aligned}
  \\sqrt{${s}}-\\sqrt{${e}}&=${t[0]}\\sqrt{${t[1]}}-\\sqrt{${e}}\\\\
  &= ${i(`${t[0]-1}\\sqrt{${t[1]}}`)}
  \\end{aligned}$
`,1-t[0]===1?this.reponse=[`${t[0]-1}\\sqrt${t[1]}`,`\\sqrt${t[1]}`]:this.reponse=[`${t[0]-1}\\sqrt${t[1]}`]);break}}}export{T as default,O as interactifReady,y as interactifType,R as refs,A as titre,E as uuid};
