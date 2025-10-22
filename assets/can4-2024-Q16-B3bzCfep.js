import r from"./ExerciceSimple-CWWOU0FG.js";import{r as s,m as o}from"./embellissements-BYV7mIDn.js";import{K as n}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Calculer une probabilité",E=!0,v="mathLive",w="9c540";class O extends r{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=n.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){const t=this.canOfficielle?-1:s(-10,-1),e=this.canOfficielle?2:s(2,4),i=this.canOfficielle?3:s(2,5);this.reponse=t*e-i,this.question="Nombre de départ <br>",this.question+="$\\downarrow$<br>",this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\text{Multiplier par } ${e} \\
`,this.question+=`\\\\
 \\text{Soustraire } ${i}\\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$<br>`,this.question+=`$\\downarrow$<br>
     `,this.question+="Résultat",this.question+=`<br>Quel est le résultat de ce programme de calcul lorsque le nombre de départ est $${t}$ ?`,this.correction=`Le résultat est donné par : $(${t}\\times ${e})- ${i}=${o(this.reponse)}$.`,this.canEnonce=this.question,this.canReponseACompleter=""}}export{O as default,E as interactifReady,v as interactifType,y as titre,w as uuid};
