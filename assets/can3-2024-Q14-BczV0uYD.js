import o from"./ExerciceSimple-CWWOU0FG.js";import{s as i,m as n,a,r as s,Y as r}from"./embellissements-BYV7mIDn.js";import{K as $}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const E="Calculer avec un programme de calcul",g=!0,v="mathLive",N="f9727";class O extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=$.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=9,this.question="Nombre de départ <br>",this.question+=`${i(15)}$\\downarrow$<br>`,this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\text{Soustraire } 5 \\
`,this.question+=`\\\\
 \\text{Prendre son carré } \\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$<br>`,this.question+=`${i(15)}$\\downarrow$<br>
       `,this.question+=`${i(7)}Résultat<br>`,this.question+="Quel est le résultat  si le nombre de départ est $2$ ?",this.correction=`On soustrait $5$, on obtient : $2-5=-3$.<br>
      En prenant le carré, on obtient  : $(-3)^2=${n(this.reponse)}$.`;else if(a([!0,!1])){const t=s(6,10),e=s(1,t-1);this.reponse=(e-t)**2,this.question="Nombre de départ <br>",this.question+=`${i(15)}$\\downarrow$<br>`,this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\text{Soustraire } ${t} \\
`,this.question+=`\\\\
 \\text{Prendre son carré } \\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$<br>`,this.question+=`${i(15)}$\\downarrow$<br>
         `,this.question+=`${i(7)}Résultat<br>`,this.question+=`Quel est le résultat  si le nombre de départ est $${e}$ ?`,this.correction=`On soustrait $${t}$, on obtient : $${e}-${t}=${e-t}$.<br>
         En prenant le carré, on obtient  : $${r(e-t)}^2=${n(this.reponse)}$.
        `}else{const t=s(1,10),e=s(-10,-1);this.reponse=(e+t)**2,this.question="Nombre de départ <br>",this.question+=`${i(15)}$\\downarrow$<br>`,this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\text{Ajouter } ${t} \\
`,this.question+=`\\\\
 \\text{Prendre son carré } \\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$<br>`,this.question+=`${i(15)}$\\downarrow$<br>
         `,this.question+=`${i(8)}Résultat`,this.question+="<br>",this.question+=`Quel est le résultat  si le nombre de départ est $${e}$ ?`,this.correction=`On ajoute  $${t}$, on obtient : $${e}+${t}=${e+t}$.<br>
       En prenant le carré, on obtient  : $${r(e+t)}^2=${n(this.reponse)}$.
      `}this.canEnonce=this.question,this.canReponseACompleter=""}}export{O as default,g as interactifReady,v as interactifType,E as titre,N as uuid};
