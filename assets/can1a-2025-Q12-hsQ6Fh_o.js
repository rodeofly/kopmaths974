import r from"./ExerciceSimple-CWWOU0FG.js";import{r as n,s as o,f as i,Y as s,m as a}from"./embellissements-BYV7mIDn.js";import{K as c}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const v="Utiliser un script Python",g=!0,C="mathLive",O="9e9fb",P={"fr-fr":[],"fr-ch":[]};class Q extends r{constructor(){super(),this.canOfficielle=!0,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierDeBase}nouvelleVersion(){const t=this.canOfficielle?3:n(-5,5,[-1,0,1]),e=this.canOfficielle?2:n(-3,3,[-1,0,1]);this.question="Soit le script Python : <br><br>",this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def resultat(a) :}  \\
 `,this.question+=`\\\\
${o(9)} \\texttt{return (a**2${i(e)}*a)} \\\\
`,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`<br><br>Que renvoie  $\\texttt{resultat(${t})}$ ?`,this.reponse=t**2+e*t,this.correction=` L'algorithme retourne $${s(t)}^2${i(e)}\\times${s(t)}=${a(this.reponse)}$.`,this.canEnonce="\\hspace*{10mm}\\fbox{",this.canEnonce+="\\parbox{0.6\\linewidth}{",this.canEnonce+="\\setlength{\\parskip}{.5cm}",this.canEnonce+=" \\texttt{def resultat(a) :}\\newline",this.canEnonce+=` \\hspace*{7mm}\\texttt{return (a**2${i(e)}*a)}`,this.canEnonce+="}",this.canEnonce+="}",this.canReponseACompleter=`$\\texttt{resultat(${t})}$ renvoie <br> $\\ldots$`,this.interactif&&(this.question+="<br>")}}export{Q as default,g as interactifReady,C as interactifType,P as refs,v as titre,O as uuid};
