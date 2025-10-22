import r from"./ExerciceSimple-CWWOU0FG.js";import{r as s,e,m as o}from"./embellissements-BYV7mIDn.js";import{K as a}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const v="Calculer la probabilité d'une intersection d'événements indépendants",x=!0,q="mathLive",y="4b3b4",C={"fr-fr":[],"fr-ch":[]};class E extends r{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBase,this.canOfficielle=!0}nouvelleVersion(){const t=this.canOfficielle?.4:s(1,9)/10,i=this.canOfficielle?.6:s(1,9)/10,n=t*i;this.reponse=e(n,2),this.question=`$A$ et $B$ sont des événements indépendants tels que $P(A)=${e(t,1)}$ et $P(B)=${e(i,1)}$.
`,this.correction=` Comme $A$ et $B$ sont des événements indépendants,  $P(A\\cap B)=P(A)\\times  P(B)$.<br>
Ainsi, <br>
$\\begin{aligned}
P(A\\cap B)&=${e(t,1)} \\times ${e(i,1)}\\\\
P(A\\cap B)&=${o(this.reponse)}
\\end{aligned}$
  `,this.canEnonce=`$A$ et $B$ sont des événements indépendants tels que $P(A)=${e(t,1)}$ et $P(B)=${e(i,1)}$.`,this.canReponseACompleter="$P(A\\cap B)=\\ldots$",this.interactif?this.question+="<br>$P(A\\cap B)=$":this.question+="<br> $P(A\\cap B)=\\ldots$."}}export{E as default,x as interactifReady,q as interactifType,C as refs,v as titre,y as uuid};
