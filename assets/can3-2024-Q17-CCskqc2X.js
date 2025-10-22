import $ from"./ExerciceSimple-CWWOU0FG.js";import{F as i,m as t,r as s}from"./embellissements-BYV7mIDn.js";import{K as o}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Calculer une probabilité",F=!0,O="mathLive",q="54dc6";class A extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=o.clavierDeBaseAvecFraction,this.canOfficielle=!1}nouvelleVersion(){let r;if(this.canOfficielle)r=new i(4,10),this.reponse=r.texFraction,this.question=`Une urne contient des jetons numérotés de $1$ à $10$.<br>
      On tire au hasard un jeton. <br>
     Quelle est la probabilité de tirer un nombre premier ?`,this.correction=`Les nombres premiers inférieurs à $10$ sont : $2$, $3$, $5$, $7$.<br>
      Il y a donc $4$ nombres premiers inférieurs à $10$. <br>
      On en déduit que la probabilité d'obtenir un nombre premier est : $${t(this.reponse)}${r.texSimplificationAvecEtapes()}$.`;else{const e=s(8,22),n=4;this.question=`Une urne contient des jetons numérotés de $1$ à $${e}$.<br>
        On tire au hasard un jeton. <br>
        Quelle est la probabilité de tirer un nombre premier ?`,e<11?(r=new i(n,e),this.correction=`Les nombres premiers inférieurs à $${e}$ sont : $2$, $3$, $5$, $7$.<br>
        Il y a donc $4$ nombres premiers inférieurs à $${e}$. <br>
        On en déduit que la probabilité d'obtenir un nombre premier est : $${t(r.texFraction)}${r.texSimplificationAvecEtapes()}$.`):e>10&&e<13?(r=new i(n+1,e),this.correction=`Les nombres premiers inférieurs à $${e}$ sont : $2$, $3$, $5$, $7$, $11$.<br>
Il y a donc $5$ nombres premiers inférieurs à $${e}$. <br>
On en déduit que la probabilité d'obtenir un nombre premier est : $${t(r.texFraction)}${r.texSimplificationAvecEtapes()}$.`):e>12&&e<17?(r=new i(n+2,e),this.correction=`Les nombres premiers inférieurs à $${e}$ sont : $2$, $3$, $5$, $7$, $11$, $13$.<br>
Il y a donc $6$ nombres premiers inférieurs à $${e}$. <br>
On en déduit que la probabilité d'obtenir un nombre premier est : $${t(r.texFraction)}${r.texSimplificationAvecEtapes()}$.`):e>16&&e<19?(r=new i(n+3,e),this.correction=`Les nombres premiers inférieurs à $${e}$ sont : $2$, $3$, $5$, $7$, $11$, $13$, $17$.<br>
Il y a donc $7$ nombres premiers inférieurs à $${e}$. <br>
On en déduit que la probabilité d'obtenir un nombre premier est : $${t(r.texFraction)}${r.texSimplificationAvecEtapes()}$.`):(r=new i(n+4,e),this.correction=`Les nombres premiers inférieurs à $${e}$ sont : $2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$.<br>
Il y a donc $8$ nombres premiers inférieurs à $${e}$.
<br>
On en déduit que la probabilité d'obtenir un nombre premier est : $${t(r.texFraction)}${r.texSimplificationAvecEtapes()}$.`)}this.reponse=r.texFraction,this.canEnonce=this.question,this.canReponseACompleter=""}}export{A as default,F as interactifReady,O as interactifType,y as titre,q as uuid};
