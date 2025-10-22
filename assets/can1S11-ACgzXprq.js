import{a as c,r as n,s as i,f as h}from"./embellissements-BYV7mIDn.js";import l from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const w="Donner le résultat d’un programme Python",L=!0,Q="mathLive",D="21/02/2022",E="0f014",S={"fr-fr":["can1S11"],"fr-ch":["autres-7"]};class A extends l{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,r,u,e,o,$,a=0;switch(c(["a","b","c"])){case"a":t=n(2,5),e=n(1,8)*c([-1,1]),o=n(1,9)*c([-1,1]),u=t,this.question=`Que renvoie l'instruction $\\texttt{suite(${t})}$ ?<br>
        
        $\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def suite(n) :}  \\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{u = ${e}}\\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{for i in range(n) :}\\
 `,this.question+=`\\\\
 ${i(12)} \\texttt{u = u${h(o)}}\\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{return u}\\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`
        
        `,this.correction=` L'instruction $\\texttt{for i in range(n)}$ signifie : pour i allant de $0$ à $${t-1}$.<br>
      On calcule les valeurs successives de la variable u :
           `;for(let s=0;s<u;s++)this.correction+=`<br>Pour i=${s},  u = $${e} ${h(o)} = ${e+o}$`,e=e+o;this.reponse=e;break;case"b":t=n(3,4),e=n(1,8)*c([-1,1]),u=t,this.question=`Que renvoie l'instruction $\\texttt{suite(${t})}$ ?<br>
        
        $\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def suite(n) :}  \\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{u = ${e}}\\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{for i in range(1,n) :}\\
 `,this.question+=`\\\\
 ${i(12)} \\texttt{u = u+i}\\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{return u}\\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`
        
        `,this.correction=` L'instruction $\\texttt{for i in range(1,n)}$ signifie : pour i allant de 1 à $${t-1}$.<br>
        
        On calcule les valeurs successives de la variable u :`;for(let s=1;s<u;s++)this.correction+=`<br>Pour i=${s}, u = $${e} +${s} = ${e+s}$`,e=e+s;this.reponse=e;break;case"c":for(t=n(1,5),r=n(6,80),$=n(2,3),u=t,this.question=`Que renvoie l'instruction $\\texttt{suite(${t})}$ ?<br>
        
        $\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def suite(u) :}  \\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{u=${t}}\\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{n=0}\\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{while u<${r}:}\\
 `,this.question+=`\\\\
 ${i(12)} \\texttt{u = u*${$}}\\
 `,this.question+=`\\\\
 ${i(12)} \\texttt{n = n+1}\\
 `,this.question+=`\\\\
 ${i(6)} \\texttt{return n}\\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`
        
        `,this.correction=` L'instruction $\\texttt{while u<${r}}$ signifie : tant que u<${r}.<br>

        On calcule les valeurs successives des  variables u et n. On s'arrête dès que u dépasse ${r} :<br>
        On a au départ, u=${t} et n=0, puis, <br>`;t<r;)this.correction+=`<br>n=${a+1} et u=${t}$\\times$ ${$} = ${t*$} `,a=a+1,t=$*t;this.correction+=`$> ${r}$. Donc l'algorithme retourne $${a}$.`,this.reponse=a;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{D as dateDePublication,A as default,L as interactifReady,Q as interactifType,S as refs,w as titre,E as uuid};
