import a from"./ExerciceSimple-CWWOU0FG.js";import{s as i,m as s,r,a as o,Y as c}from"./embellissements-BYV7mIDn.js";import{K as h}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const g="Trouver le résultat d'un programme Python",w=!0,k="mathLive",P="eb3e8";class S extends a{constructor(){super(),this.canOfficielle=!1,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=h.clavierDeBaseAvecFraction}nouvelleVersion(){if(this.canOfficielle)this.question="Soit le script Python : <br>",this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def mystere(a) :}  \\
 `,this.question+=`\\\\
${i(9)}\\texttt{b=3*a} \\
`,this.question+=`\\\\
${i(9)} \\texttt{return b} \\\\
`,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+="<br>Que renvoie  $\\texttt{mystere(12)}$ ?",this.reponse=36,this.correction=`L'algorithme retourne $3\\times12=${s("36")}$. `,this.canEnonce="Soit le script Python :<br>",this.canEnonce+="\\medskip",this.canEnonce+="\\hspace*{10mm}\\fbox{",this.canEnonce+="\\parbox{0.4\\linewidth}{",this.canEnonce+="\\setlength{\\parskip}{.5cm}",this.canEnonce+=" \\texttt{def mystere(a) :}\\newline",this.canEnonce+=" \\hspace*{7mm}\\texttt{b=3*a}\\newline",this.canEnonce+=" \\hspace*{7mm}\\texttt{return b}",this.canEnonce+="}",this.canEnonce+="}\\newline",this.canEnonce+="\\medskip",this.canReponseACompleter="Que renvoie  $\\texttt{mystere(12)}$ ? <br> $\\ldots$";else{const e=r(2,9)*o([-1,1]),n=o([!0,!1]),t=r(2,6)*o([-1,1]);this.question="Soit le script Python : <br><br>",this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def mystere(a) :}  \\
 `,this.question+=`\\\\
${i(9)} ${n?`\\texttt{b=${t}*a}`:`\\texttt{b=${t}+a}`} \\
`,this.question+=`\\\\
${i(9)} \\texttt{return b} \\\\
`,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`<br>Que renvoie  $\\texttt{mystere(${e})}$ ?`,this.reponse=n?`${t*e}`:`${t+e}`,this.correction=` L'algorithme retourne ${n?`$${t}\\times${c(e)}=${s(this.reponse)}$.`:`$${t}+${c(e)}=${s(this.reponse)}$.`} `,this.canEnonce="Soit le script Python : <br><br>",this.canEnonce+="\\medskip",this.canEnonce+="\\hspace*{10mm}\\fbox{",this.canEnonce+="\\parbox{0.5\\linewidth}{",this.canEnonce+="\\setlength{\\parskip}{.5cm}",this.canEnonce+=" \\texttt{def mystere(a) :}\\newline",this.canEnonce+=` \\hspace*{7mm}${n?`\\texttt{b=${t}*a}`:`\\texttt{b=${t}+a}`}\\newline`,this.canEnonce+=" \\hspace*{7mm}\\texttt{return b}",this.canEnonce+="}",this.canEnonce+="}\\newline",this.canEnonce+="\\medskip",this.canReponseACompleter=`Que renvoie  $\\texttt{mystere(${e})}$ ?<br> $\\ldots$`}}}export{S as default,w as interactifReady,k as interactifType,g as titre,P as uuid};
