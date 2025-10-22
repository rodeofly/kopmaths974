import $ from"./ExerciceSimple-CWWOU0FG.js";import{r as n,a as c,e,m as o}from"./embellissements-BYV7mIDn.js";import r from"decimal.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const v="Calculer une probabilité avec des événements indépendants",C=!0,E="mathLive",x="13/04/2024",g="f3d16",w={"fr-fr":["can1P10"],"fr-ch":[]};class y extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const t=new r(n(1,9)).div(10),s=new r(n(1,9)).div(10),i=t.mul(s);switch(c([1,2])){case 1:this.reponse=e(i,2),this.question=`$A$ et $B$ sont des événements indépendants.<br>
   On sait que $P(A)=${e(t,1)}$ et $P(B)=${e(s,1)}$.
   `,this.correction=` Comme $A$ et $B$ sont des événements indépendants,  $P(A\\cap B)=P(A)\\times  P(B)$.<br>
    Ainsi, <br>
    $\\begin{aligned}
    P(A\\cap B)&=${e(t,1)} \\times ${e(s,1)}\\\\
    P(A\\cap B)&=${o(this.reponse)}
    \\end{aligned}$
      `,this.canEnonce=this.question,this.canReponseACompleter="$P(A\\cap B)=\\ldots$",this.interactif?this.question+="<br>$P(A\\cap B)=$":this.question+="<br> Calculer $P(A\\cap B)$.";break;case 2:this.reponse=e(s,1),this.question=`$A$ et $B$ sont des événements indépendants.<br>
    On sait que $P(A)=${e(t,1)}$ et $P(A\\cap B)=${e(i,2)}$.
    `,this.correction=` Comme $A$ et $B$ sont des événements indépendants,  $P(A\\cap B)=P(A)\\times  P(B)$.<br>
    On cherche donc $P(B)$ tel que $${e(t,1)}\\times P(B)=${e(i,2)}$.<br>
    Comme $${e(t,1)}\\times ${e(s,1)}=${e(i,2)}$, on en déduit que $P(B)=${o(this.reponse)}$.
      `,this.canEnonce=this.question,this.canReponseACompleter="$P(B)=\\ldots$",this.interactif?this.question+="<br>$P(B)=$":this.question+="<br> Calculer $P(B)$.";break}}}export{x as dateDePublication,y as default,C as interactifReady,E as interactifType,w as refs,v as titre,g as uuid};
