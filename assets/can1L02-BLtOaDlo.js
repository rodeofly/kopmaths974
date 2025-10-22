import{a as u,r as c,a2 as d,u as n,f as a,m as r,a0 as m,Y as s,_ as l}from"./embellissements-BYV7mIDn.js";import p from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Déterminer le nombre de solutions d’une équation du second degré",L=!0,I="mathLive",O="1/11/2021",A="c74ea",M={"fr-fr":["can1L02"],"fr-ch":[]};class k extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,i,t,o,$;switch(u([1,2])){case 1:e=c(1,4)*u([-1,1]),i=c(-4,4,0),t=c(-4,4,0),o=i*i-4*e*t,this.question=`Donner le nombre de solutions de l'équation  $${m(0,e,i,t)}=0$.`,o<0&&(this.correction=`Le nombre de solutions est donné par le signe de $\\Delta$ :<br>
    $\\Delta =b^2-4ac=${s(i)}^2 - 4 \\times ${s(e)} \\times ${s(t)}=${o}$.<br>
    Comme $${o}$ est strictement négatif, l'équation n'a pas de solution.`,this.correction+=l(`<br> Mentalement : <br>
          Il n'est pas nécessaire de faire le calcul du discriminant puisque seul
          le signe de celui-ci permet de répondre à la question :<br>
          faites deux calculs séparés mentalement :
          $b^2=${s(i)}^2=${i**2}$ puis
          $4ac=4 \\times ${s(e)} \\times ${s(t)}=${4*e*t}$
          et évaluez le signe de leur différence.  `),this.reponse=0),o>0&&(this.correction=`Le nombre de solutions est donné par le signe de $\\Delta$ :<br>
    $\\Delta =b^2-4ac=${s(i)}^2 - 4 \\times ${s(e)} \\times ${s(t)}=${o}$.<br>
    Comme $${o}$ est strictement positif, l'équation a 2 solutions.`,this.correction+=l(`<br> Mentalement : <br>
          Il n'est pas nécessaire de faire le calcul du discriminant puisque seul
          le signe de celui-ci permet de répondre à la question :<br>
    par exemple, si le produit $4\\times a\\times c$ (c'est le cas lorsque $a$ et $c$ sont de signes contraires) est négatif, l'équation aura deux solutions puisque $\\Delta$ sera strictement positif.
<br>  Dans les autres cas, faites deux calculs séparés mentalement : $b^2=${s(i)}^2=${i**2}$ puis
$4ac=4 \\times ${s(e)} \\times ${s(t)}=${4*e*t}$
et évaluez le signe de leur différence. `),this.reponse=2),o===0&&(this.correction=`Le nombre de solutions est donné par le signe de $\\Delta$ :<br>
            $\\Delta =b^2-4ac=${s(i)}^2 - 4 \\times ${s(e)} \\times ${s(t)}=${o}$.<br>
            Comme $${o}$ est nul, l'équation a une unique solution.`,this.correction+=l(`<br> Mentalement : <br>
               Faites deux calculs séparés mentalement : $b^2=${s(i)}^2=${i**2}$ puis
     $4ac=4 \\times ${s(e)} \\times ${s(t)}=${4*e*t}$.  `),this.reponse=1);break;case 2:e=c(-10,10,0),i=c(-5,5,0),t=c(-5,5),$=d(-t,e),-t/e>0&&(this.question=`Donner le nombre de solutions de l'équation
       $${e===1?"":e}(${n(1,i)})^2${a(t)}=0$.`,this.correction=`On isole le carré : <br>
        $\\begin{aligned}
        ${e===1?"":e}(${n(1,i)})^2${a(t)}&=0\\\\
        ${e===1?"":e}(${n(1,i)})^2${a(t)}${r(a(-t))}&=0${r(a(-t))}\\\\`,this.correction+=e===1?"":`\\dfrac{${e}}{${r(e)}}(${n(1,i)})^2&=\\dfrac{${-t}}{${r(e)}}\\\\`,this.correction+=`
        (${n(1,i)})^2&=${$.texFractionSimplifiee}
                \\end{aligned}$<br>
        Puisque $${$.texFractionSimplifiee}$ est strictement positif, il y a deux nombres dont le carré est égal à $${$.texFractionSimplifiee}$, donc l'équation a deux solutions. `,this.reponse=2),-t/e===0&&(e===-1?(this.question=`Donner le nombre de solutions de l'équation
       $-(${n(1,i)})^2=0$.`,this.correction=`On isole le carré : <br>
             $\\begin{aligned}
             -(${n(1,i)})^2&=0\\\\
             ${e===1?"":e}(${n(1,i)})^2&=0\\\\`,this.correction+=e===1?"":`\\dfrac{${e}}{${r(e)}}(${n(1,i)})^2&=\\dfrac{${-t}}{${r(e)}}\\\\`,this.correction+=`
             (${n(1,i)})^2&=${$.texFractionSimplifiee}
                     \\end{aligned}$<br>
             Il y a un nombre dont le carré est nul, donc l'équation a une solution. `,this.reponse=1):(this.question=`Donner le nombre de solutions de l'équation
          $${e===1?"":e}(${n(1,i)})^2=0$.`,this.correction=`On isole le carré : <br>
                $\\begin{aligned}
                ${e===1?"":e}(${n(1,i)})^2&=0\\\\`,this.correction+=e===1?"":`\\dfrac{${e}}{${r(e)}}(${n(1,i)})^2&=\\dfrac{${-t}}{${r(e)}}\\\\`,this.correction+=`
                (${n(1,i)})^2&=${$.texFractionSimplifiee}
                        \\end{aligned}$<br>
                Il y a un nombre dont le carré est nul, donc l'équation a une solution. `,this.reponse=1)),-t/e<0&&(this.question=`Donner le nombre de solutions de l'équation
       $${e===1?"":e}(${n(1,i)})^2${a(t)}=0$.`,this.correction=`On isole le carré : <br>
                 $\\begin{aligned}
                 ${e===1?"":e}(${n(1,i)})^2${a(t)}&=0\\\\
                 ${e===1?"":e}(${n(1,i)})^2${a(t)}${r(a(-t))}&=0${r(a(-t))}\\\\`,this.correction+=e===1?"":`\\dfrac{${e}}{${r(e)}}(${n(1,i)})^2&=\\dfrac{${-t}}{${r(e)}}\\\\`,this.correction+=`(${n(1,i)})^2&=${$.texFractionSimplifiee}
                         \\end{aligned}$<br>
                         Puisque $${$.texFractionSimplifiee}$ est strictement négatif, il n'existe pas de nombres réels dont le carré est strictement négatif, donc l'équation n'a pas de solution. `,this.reponse=0);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{O as dateDePublication,k as default,L as interactifReady,I as interactifType,M as refs,C as titre,A as uuid};
