import{a as o,r as s,e as c,Y as q}from"./embellissements-BYV7mIDn.js";import p from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const E="Calculer la raison d’une suite arithmétique/géométrique*",R=!0,L="mathLive",O="18/02/2022",P="baa9f",y={"fr-fr":["can1S08"],"fr-ch":[]};class w extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let i,e,n,u,$,r,a;const t=o(["u","v","w"]);switch(o(["a","b"])){case"a":i=s(-12,12,0),u=s(-10,10,0),r=s(2,10),n=i+r*u,e=s(0,10),this.question=`Soit $(${t}_n)$ une suite arithmétique telle que :<br>
$${t}_{${e}}=${i}$ et  $${t}_{${e+r}}=${n}$.<br>

Donner la raison $r$ de cette suite.`,this.interactif?this.question+="<br> $r=$":this.question+="",this.correction=`La suite $(${t}_n)$ est une suite arithmétique  de raison $r$. Donc, pour tout entier naturel $n$ et $p$, on a : $u_n=u_p+(n-p)r$.<br>
        Ainsi, $${t}_{${e+r}}=${t}_{${e}}+(${e+r}-${e})r=${t}_{${e}}+${r}r$.<br>
       On en déduit :  $r=\\dfrac{${t}_{${e+r}}-${t}_{${e}}}{${r}}=\\dfrac{${n}-${q(i)}}{${r}}=${u}$.`,this.reponse=u,this.canEnonce=this.question,this.canReponseACompleter="$r=\\ldots$";break;case"b":a=o([1,2,3]),a===1&&(i=s(1,10),$=o([2,3,10]),n=i*$**2,e=s(0,10),this.question=`Soit $(${t}_n)$ une suite géométrique de raison positive telle que :<br>
$${t}_{${e}}=${i}$ et  $${t}_{${e+2}}=${n}$.<br>

Donner la raison $q$ de cette suite.`,this.interactif?this.question+="<br> $q=$":this.question+="",this.correction=`La suite $(${t}_n)$ est une suite géométrique  de raison $q$ positive. Donc, pour tout entier naturel $n$ et $p$, on a : $u_n=u_p\\times q^{n-p}$.<br>
        Ainsi, $${t}_{${e+2}}=${t}_{${e}}\\times q^{${e+2}-${e}}=${t}_{${e}}\\times q^{2}$.<br>
       On en déduit :  $q^2=\\dfrac{${t}_{${e+2}}}{${t}_{${e}}}=\\dfrac{${n}}{${i}}=${c($*$)}$.<br>
       Puisque $q$ est un nombre positif, on obtient : $q=${c($)}$.`,this.reponse=$,this.canEnonce=this.question,this.canReponseACompleter="$q=\\ldots$"),a===2&&(i=s(1,10),$=o([2,3,10]),n=i*$**2,e=s(0,10),this.question=`Soit $(${t}_n)$ une suite géométrique de raison négative telle que :<br>
    $${t}_{${e}}=${i}$ et  $${t}_{${e+2}}=${n}$.<br>

    Donner la raison $q$ de cette suite.`,this.interactif?this.question+="<br> $q=$":this.question+="",this.correction=`La suite $(${t}_n)$ est une suite géométrique  de raison $q$ positive. Donc, pour tout entier naturel $n$ et $p$, on a : $u_n=u_p\\times q^{n-p}$.<br>
            Ainsi, $${t}_{${e+2}}=${t}_{${e}}\\times q^{${e+2}-${e}}=${t}_{${e}}\\times q^{2}$.<br>
           On en déduit :  $q^2=\\dfrac{${t}_{${e+2}}}{${t}_{${e}}}=\\dfrac{${n}}{${i}}=${$*$}$.<br>
           Puisque $q$ est un nombre négatif, on obtient : $q=${-$}$.`,this.reponse=-$,this.canEnonce=this.question,this.canReponseACompleter="$q=\\ldots$"),a===3&&(i=s(1,3)*o([-1,1]),$=o([-3,-2,2,3]),n=i*$**3,e=s(0,10),this.question=`Soit $(${t}_n)$ une suite géométrique  telle que :<br>
  $${t}_{${e}}=${i}$ et  $${t}_{${e+3}}=${n}$.<br>

  Donner la raison $q$ de cette suite.`,this.interactif?this.question+="<br> $q=$":this.question+="",this.correction=`La suite $(${t}_n)$ est une suite géométrique  de raison $q$ positive. Donc, pour tout entier naturel $n$ et $p$, on a : $u_n=u_p\\times q^{n-p}$.<br>
          Ainsi, $${t}_{${e+3}}=${t}_{${e}}\\times q^{${e+3}-${e}}=${t}_{${e}}\\times q^{3}$.<br>
         On en déduit :  $q^3=\\dfrac{${t}_{${e+3}}}{${t}_{${e}}}=\\dfrac{${n}}{${i}}=${$**3}$.<br>
         On obtient : $q=${$}$.`,this.reponse=$,this.canEnonce=this.question,this.canReponseACompleter="$q=\\ldots$")}}}export{O as dateDePublication,w as default,R as interactifReady,L as interactifType,y as refs,E as titre,P as uuid};
