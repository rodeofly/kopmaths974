import{a as c,r as n,m as r,X as i,_ as a}from"./embellissements-BYV7mIDn.js";import s from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const E="Calculer la diagonale d’un carré",C=!0,v="mathLive",y="09/09/2021",R="66672",O={"fr-fr":["can4G05"],"fr-ch":["NR"]};class P extends s{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){switch(c([1,2])){case 1:{const e=n(1,10),t=2*e**2;this.question=`Calculer la valeur exacte de la longueur de la diagonale $d$ d'un carré de côté $${e}$.`,this.interactif&&(this.question+="<br>$d=$"),this.correction=` En utilisant le théorème de Pythagore dans un carré de côté $${e}$ et de diagonale $d$, on a :<br><br>
    $\\begin{aligned}
    d^2&=${e}^2+${e}^2\\\\
    d^2&= ${e**2}+${e**2}\\\\
    d&=${r(`\\sqrt{ ${2*e**2}}`)}
       \\end{aligned}$
   `,this.correction+=a(`<br> Mentalement : <br>
   On calcule le double du carré du côté du carré,
   soit $2\\times ${e}^2=2\\times ${e**2}=${t}$, puis on en prend la racine carrée.    `,"blue"),this.reponse=i(t)}break;case 2:{const e=n(2,48,[4,9,16,25,36]),t=2*e;this.question=`Calculer la valeur exacte de la longueur de la diagonale $d$ d'un carré de côté $\\sqrt{${e}}$.`,this.interactif&&(this.question+="<br>$d=$"),this.correction=` En utilisant le théorème de Pythagore dans un carré de côté $c=\\sqrt{${e}}$
       et de diagonale $d$, on a :<br>`,t===4||t===16||t===36||t===64||t===100?this.correction+=`
       $\\begin{aligned}
       c^2+c^2&=d^2\\\\
       \\sqrt{${e}}^2+\\sqrt{${e}}^2&=d^2\\\\
       d^2&=${e}+${e}\\\\
       d^2&=${t}\\\\
       d&=${r(i(t))}
       \\end{aligned}$`:this.correction+=`
       $\\begin{aligned}
       c^2+c^2&=d^2\\\\
       \\sqrt{${e}}^2+\\sqrt{${e}}^2&=d^2\\\\
       d^2&=${e}+${e}\\\\
       d^2&=${t}\\\\
       d&=${r(`\\sqrt{${t}}`)}
       \\end{aligned}$`,this.correction+=a(`<br> Mentalement : <br>
       On calcule le double du carré du côté du carré, soit
       $2\\times (\\sqrt{${e}})^2=2\\times ${e}=${t}$, puis on en prend la racine carrée.    `,"blue"),this.reponse=i(t)}break}this.canEnonce=this.question,this.canReponseACompleter="$d=\\ldots$"}}export{y as dateDePublication,P as default,C as interactifReady,v as interactifType,O as refs,E as titre,R as uuid};
