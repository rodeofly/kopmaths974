import{a,r as n,e,d as s}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const x="Calculer astucieusement avec une factorisation",k=!0,O="mathLive",_="7d21c",v={"fr-fr":["can5C16"],"fr-ch":[]};class y extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,r,i,$;switch(a(["a","b","c","c","d","e"])){case"a":t=n(5,99)/10,r=n(2,9)*5,i=100-r,this.question=`Calculer $${r}\\times${e(t)} + ${e(t)}\\times${i}$.
`,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${e(t)}$.<br>
En factorisant par ce nombre, on obtient : <br>
$\\begin{aligned}
${e(r)}\\times${e(t)} + ${e(t)}\\times${i}&=${e(t)}\\underbrace{(${e(r)}+${e(i)})}_{=100}\\\\
&=${e(t)}\\times 100\\\\
&=${e(100*t)}
\\end{aligned}$`,this.reponse=s(100*t);break;case"b":t=n(5,99)/100,r=n(2,8),i=10-r,this.question=`Calculer $ ${r}\\times${e(t)}+ ${i}\\times${e(t)}$.
`,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${e(t)}$.<br>
        En factorisant par ce nombre, on obtient : <br>
        $\\begin{aligned}
        ${e(r)}\\times${e(t)} + ${e(i)}\\times${e(t)}&=${e(t)}\\underbrace{(${e(r)}+${e(i)})}_{=10}\\\\
        &=${e(t)}\\times 10\\\\
        &=${e(10*t)}
        \\end{aligned}$`,this.reponse=s(10*t);break;case"c":t=n(5,99,[10,20,30,40,50,60,70,80,90])/10,r=n(2,8)/10,$=n(1,2),i=$-r,this.question=`Calculer $ ${e(r)}\\times${e(t)}+ ${e(i)}\\times${e(t)}$.
`,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${e(t)}$.<br>
        En factorisant par ce nombre, on obtient : <br>
$\\begin{aligned}
${e(t)}\\times ${e(r)}+${e(t)}\\times ${e(i)}&=${e(t)}\\underbrace{(${e(r)}+${e(i)})}_{=${$}}\\\\
&=${e(t)}\\times ${$}\\\\
&=${e($*t)}
\\end{aligned}$`,this.reponse=s($*t);break;case"d":t=n(5,99)/100,r=n(2,99)/10,i=10-r,this.question=`Calculer $ ${e(r)}\\times${e(t)}+ ${e(i)}\\times${e(t)}$.
    `,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${e(t)}$.<br>
            En factorisant par ce nombre, on obtient : <br>
            $\\begin{aligned}
            ${e(r)}\\times${e(t)} + ${e(i)}\\times${e(t)}&=${e(t)}\\underbrace{(${e(r)}+${e(i)})}_{=10}\\\\
            &=${e(t)}\\times 10\\\\
            &=${e(10*t)}
            \\end{aligned}$`,this.reponse=s(10*t);break;case"e":t=n(1,12)*10,r=n(2,9)/10,i=5-r,this.question=`Calculer $ ${e(t)}\\times${e(r)}+ ${e(i)}\\times${e(t)}$.
    `,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${e(t)}$.<br>
            En factorisant par ce nombre, on obtient : <br>
            $\\begin{aligned}
            ${e(t)}\\times${e(r)}+ ${e(i)}\\times${e(t)}&=${e(t)}\\underbrace{(${e(r)}+${e(i)})}_{=5}\\\\
            &=${e(t)}\\times 5\\\\
            &=${e(5*t)}
            \\end{aligned}$`,this.reponse=s(5*t);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{y as default,k as interactifReady,O as interactifType,v as refs,x as titre,_ as uuid};
