import p from"./ExerciceSimple-CWWOU0FG.js";import{r as u,a as l,m as o}from"./embellissements-BYV7mIDn.js";import{s as r}from"./scratchblock-CPHivmfQ.js";import{K as d}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const L="Comprendre un programme scratch",R=!0,T="mathLive",O="fdd2f";class Q extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=d.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){const c=this.canOfficielle?3:u(2,6),a=this.canOfficielle?50:l([10,20,50,100]);let t=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;t+=`\\blockinit{quand \\greenflag est cliqué}
`,t+=`\\blocklook{Le lutin est placé au centre de l'écran} 
`,t+=`\\blockrepeat{répéter \\ovalnum{${c}} fois}
`,t+=`{
`,t+=`\\blockmove{avancer de \\ovalnum{${a}} pas}
`,t+=`\\blockmove{attendre \\ovalmove{2} secondes}
`,t+=`}
`,t+="\\end{scratch}<br>";let n=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;n+=`\\blockinit{quand \\greenflag est cliqué}
`,n+=`\\blockrepeat{répéter \\ovalnum{4} fois}
`,n+=`{
`,n+=`\\blockpen{stylo en position d'écriture} 
`,n+=`\\blockmove{avancer de \\ovalnum{100} pas}
`,n+=`\\blockmove{tourner \\turnright{} de \\ovalnum{...} degrés}
`,n+=`}
`,n+="\\end{scratch}<br>";let i=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;i+=`\\blockinit{quand \\greenflag est cliqué}
`,i+=`\\blockrepeat{répéter \\ovalnum{3} fois}
`,i+=`{
`,i+=`\\blockpen{stylo en position d'écriture} 
`,i+=`\\blockmove{avancer de \\ovalnum{100} pas}
`,i+=`\\blockmove{tourner \\turnright{} de \\ovalnum{...} degrés}
`,i+=`}
`,i+="\\end{scratch}<br>";let e=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;if(e+=`\\blockinit{quand \\greenflag est cliqué}
`,e+=`\\blockrepeat{répéter \\ovalnum{...} fois}
`,e+=`{
`,e+=`\\blockpen{stylo en position d'écriture} 
`,e+=`\\blockmove{avancer de \\ovalnum{100} pas}
`,e+=`\\blockmove{tourner \\turnright{} de \\ovalnum{90} degrés}
`,e+=`\\blockmove{avancer de \\ovalnum{50} pas}
`,e+=`\\blockmove{tourner \\turnright{} de \\ovalnum{90} degrés}
`,e+=`}
`,e+="\\end{scratch}<br>",this.canOfficielle)this.reponse=150,this.question=`${r(t)}`,this.question+="À l'issue de l'exécution de ce programme, de combien de pas le lutin a-t-il avancé ?",this.correction=`Le lutin a avancé de $3\\times 50 =${o("150")}$ pas.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ pas",this.interactif&&(this.optionsChampTexte={texteApres:"pas "});else{const s=l(["a","b","c","d"]);s==="a"&&(this.reponse=90,this.question=`${r(n)}`,this.question+="Quel nombre doit-on écrire à la place des pointillés pour tracer un carré ?",this.correction=`Un carré a des angles droits, il faut donc écrire  $${o(90)}$.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$"),s==="b"&&(this.reponse=120,this.question=`${r(i)}`,this.question+="Quel nombre doit-on écrire à la place des pointillés pour tracer un triangle équilatéral ?",this.correction=`Un triangle équilatéral a des anlges de $60°$.<br>
     Le lutin doit tourner de $180-60=120°$ après avoir tracé un côté. <br>
     Ainsi, à la place des pointillés il faut écrire  $${o(120)}$.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$"),s==="c"&&(this.reponse=2,this.question=`${r(e)}`,this.question+="Quel nombre doit-on écrire à la place des pointillés pour tracer un  rectangle ?",this.correction=`
      La boucle contient le tracé d'une longueur et d'une largeur du rectangle. <br>
      Ainsi, à la place des pointillés il faut écrire  $${o(2)}$.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$"),s==="d"&&(this.reponse=c*a,this.question=`${r(t)}`,this.question+="À l'issue de l'exécution de ce programme, de combien de pas le lutin a-t-il avancé ?",this.correction=`Le lutin a avancé de $${c}\\times ${a} =${o(this.reponse)}$ pas.`,this.interactif&&(this.optionsChampTexte={texteApres:"pas "}),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ pas")}}}export{Q as default,R as interactifReady,T as interactifType,L as titre,O as uuid};
