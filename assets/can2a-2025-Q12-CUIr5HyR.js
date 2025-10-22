import r from"./ExerciceSimple-CWWOU0FG.js";import{s as i,m as s,r as o,a as c}from"./embellissements-BYV7mIDn.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const v="Trouver le résultat d'un programme Python",w=!0,g="mathLive",k="ca805",Q={"fr-fr":[],"fr-ch":[]};class C extends r{constructor(){super(),this.canOfficielle=!0,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBaseAvecFraction}nouvelleVersion(){if(this.canOfficielle)this.question=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def mystere(a) :}  \\
 `,this.question+=`\\\\
${i(9)}\\texttt{b=2*a*a} \\
`,this.question+=`\\\\
${i(9)}\\texttt{b=b+5} \\
`,this.question+=`\\\\
${i(9)} \\texttt{return b} \\\\
`,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+="<br>Que renvoie  $\\texttt{mystere(10)}$ ?",this.reponse=205,this.correction=`L'algorithme retourne $(2\\times 10\\times 10)+5=${s("205")}$. `,this.canEnonce="\\medskip",this.canEnonce+="\\hspace*{10mm}\\fbox{",this.canEnonce+="\\parbox{0.5\\linewidth}{",this.canEnonce+="\\setlength{\\parskip}{.5cm}",this.canEnonce+=" \\texttt{def mystere(a) :}\\newline",this.canEnonce+=" \\hspace*{7mm}\\texttt{b=2*a*a}\\newline",this.canEnonce+=" \\hspace*{7mm}\\texttt{b=b+5}\\newline",this.canEnonce+=" \\hspace*{7mm}\\texttt{return b}",this.canEnonce+="}",this.canEnonce+="}\\newline",this.canEnonce+="\\medskip",this.canEnonce+="<br>Que renvoie  $\\texttt{mystere(10)}$ ?",this.canReponseACompleter+="$\\ldots$";else{const t=o(1,7),n=c([!0,!1]),e=o(2,3,t);this.question=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def mystere(a) :}  \\
 `,this.question+=`\\\\
${i(9)} ${n?`\\texttt{b=${e}*a*a}`:`\\texttt{b=${e}+a}`} \\
`,this.question+=`\\\\
${i(9)} ${n?"\\texttt{b=b+a}":"\\texttt{b=b*a}"} \\
`,this.question+=`\\\\
${i(9)} \\texttt{return b} \\\\
`,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`<br>Que renvoie  $\\texttt{mystere(${t})}$ ?`,this.reponse=n?`${e*t*t+t}`:`${(e+t)*t}`,this.correction=` L'algorithme retourne ${n?`$(${e}\\times${t}\\times${t})+${t}=${s(this.reponse)}$.`:`$(${e}+${t})\\times ${t}=${s(this.reponse)}$.`} `,this.canEnonce="\\medskip",this.canEnonce+="\\hspace*{10mm}\\fbox{",this.canEnonce+="\\parbox{0.6\\linewidth}{",this.canEnonce+="\\setlength{\\parskip}{.5cm}",this.canEnonce+=" \\texttt{def mystere(a) :}\\newline",this.canEnonce+=` \\hspace*{7mm}${n?`\\texttt{b=${e}*a*a}`:`\\texttt{b=${e}+a}`}\\newline`,this.canEnonce+=` \\hspace*{7mm}${n?"\\texttt{b=b+a}":"\\texttt{b=b*a}"}\\newline`,this.canEnonce+=" \\hspace*{7mm}\\texttt{return b}",this.canEnonce+="}",this.canEnonce+="}",this.canEnonce+=`<br>Que renvoie  $\\texttt{mystere(${t})}$ ?`,this.canReponseACompleter="$\\ldots$"}this.interactif&&(this.question+="<br>")}}export{C as default,w as interactifReady,g as interactifType,Q as refs,v as titre,k as uuid};
