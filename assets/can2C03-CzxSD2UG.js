import{a as o,r as i,Y as m,m as r,s as a,h as c,e as t}from"./embellissements-BYV7mIDn.js";import u from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const x="Calculer avec  des puissances*",y=!0,O="mathLive",N=!0,g="AMCNum",L="b1517",P={"fr-fr":["can2C03"],"fr-ch":[]};class S extends u{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,s,n,$;switch(o(["a","b","c","d","e","f"])){case"a":e=o([.25,.5]),s=i(2,5),this.question=`Calculer sous la forme d'un nombre entier $4^{${s}} \\times ${t(e)}^{${s}}$.`,this.correction=`On utilise la formule $a^n\\times b^n=(a\\times b)^{n}$
         avec $a=4$,  $b=${t(e)}$ et $n=${s}$.<br>
        $4^{${s}}\\times ${t(e)}^{${s}}=(4\\times ${t(e)})^{${s}}=
        ${4*e}^${t(s)}=${r(t(4**s*e**s))} $`,this.reponse=4**s*e**s,this.canEnonce=this.question,this.canReponseACompleter="";break;case"b":e=o([.2,.4]),s=i(2,5),this.question=`Calculer sous la forme d'un nombre entier  $5^{${s}} \\times ${t(e)}^{${s}}$.`,this.correction=`On utilise la formule $a^n\\times b^n=(a\\times b)^{n}$
        avec $a=5$,  $b=${t(e)}$ et $n=${s}$.<br>
       $5^{${s}}\\times ${t(e)}^{${s}}=(5\\times ${t(e)})^{${s}}=
       ${5*e}^${t(s)}=${r(t(5**s*e**s))} $`,this.reponse=5**s*e**s,this.canEnonce=this.question,this.canReponseACompleter="";break;case"c":e=i(-3,-1),this.question=`Calculer sous la forme d'un nombre entier $2^{${e}} \\times 8$.`,this.correction=`Comme $a^{-n}=\\dfrac{1}{a^n}$, ${a(4)}  $2^{${e}}=\\dfrac{1}{2^{${-e}}}=\\dfrac{1}{${2**-e}}$. <br>

        
        $2^{${e}}\\times 8=\\dfrac{1}{${2**c(e)}}\\times 8=${r(t(8*1/2**-e))} $`,this.reponse=2**e*8,this.canEnonce=this.question,this.canReponseACompleter="";break;case"d":e=i(-4,-1),this.question=`Calculer sous la forme d'un nombre entier $2^{${e}} \\times 16$.`,this.correction=`Comme $a^{-n}=\\dfrac{1}{a^n}$, ${a(4)}  $2^{${e}}=\\dfrac{1}{2^{${-e}}}=\\dfrac{1}{${2**-e}}$. <br>

        
        $2^{${e}}\\times 16=\\dfrac{1}{${2**c(e)}}\\times 16=${r(t(16*1/2**-e))} $`,this.reponse=2**e*16,this.canEnonce=this.question,this.canReponseACompleter="";break;case"e":e=i(-5,-1),this.question=`Calculer sous la forme d'un nombre entier $2^{${e}} \\times 32$.`,this.correction=`Comme $a^{-n}=\\dfrac{1}{a^n}$, ${a(4)}  $2^{${e}}=\\dfrac{1}{2^{${-e}}}=\\dfrac{1}{${2**-e}}$. <br>

        
        $2^{${e}}\\times 32=\\dfrac{1}{${2**c(e)}}\\times 32=${r(t(32*1/2**-e))} $`,this.reponse=2**e*32,this.canEnonce=this.question,this.canReponseACompleter="";break;case"f":e=i(2,10),n=i(-5,10,[0,1]),$=i(2,10),this.question=`Compléter :<br> $${e}^{...}\\times ${e}^{${n}}=${e}^{${-$}}$`,this.correction=`On utilise la formule $a^n\\times a^m=a^{n+m}$.
        La somme des exposants doit donner $${-$}$.<br>
        On cherche donc le nombre qui, ajouté à $${n}$ donne $${-$}$.<br> Il s'agit de  :
$-${$}-${m(n)}=${r(-$-n)}$.`,this.reponse=-$-n,this.canEnonce="Compléter.",this.canReponseACompleter=`$${e}^{\\ldots}\\times ${e}^{${n}}=${e}^{${-$}}$`;break}}}export{N as amcReady,g as amcType,S as default,y as interactifReady,O as interactifType,P as refs,x as titre,L as uuid};
