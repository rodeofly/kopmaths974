import{s as c,r as t,e as r,t as d,a as x}from"./embellissements-BYV7mIDn.js";import p from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const D="28/07/2025",G="4c3c0",M={"fr-fr":["1A-F3"],"fr-ch":[]},N=!0,P="qcm",Q="true",j="qcmMono",z="Reconnaître une fonction affine";class B extends p{versionOriginale=()=>{this.enonce=`On considère les trois fonctions définies sur $\\mathbb{R}$ par : <br>
    $f_1\\,:\\,x \\longmapsto x^2-(1-x)^2$${c(8)}$f_2\\,:\\,x \\longmapsto \\dfrac{x}{2}-\\left(1+\\dfrac{1}{\\sqrt{2}}\\right)$${c(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{5-\\dfrac{2}{3}x}{0,7}$<br>

    On peut affirmer que :`,this.correction=`En développant, on obtient :<br> 
    $\\begin{aligned}
    f_1(x)&=x^2-(1-x)^2\\\\
    &=x^2-(1-2x+x^2)\\\\
    &=2x-1
    \\end{aligned}$<br>
    On retrouve une forme $mx+p$ avec $m=2$ et $p=1$, donc $f_1$ est une fonction affine.<br><br>
    
$f_2$ est une fonction affine avec $m=\\dfrac{1}{2}$ et $p=-\\left(1+\\dfrac{1}{\\sqrt{2}}\\right)$.<br><br>

 $\\begin{aligned}
    f_3(x)&=\\dfrac{5-\\dfrac{2}{3}x}{0,7}\\\\
    &=-\\dfrac{2}{2,1}x+\\dfrac{5}{0,7}
    \\end{aligned}$<br>
    On retrouve une forme $mx+p$ avec $m=\\dfrac{2}{2,1}$ et $p=\\dfrac{5}{0,7}$, donc $f_3$ est une fonction affine.<br><br>
    `,this.reponses=["Toutes ces fonctions sont affines","Aucune de ces fonctions n'est affine","Uniquement la fonction $f_1$ est affine","Uniquement les fonctions $f_2$ et $f_3$ sont affines"]};versionAleatoire=()=>{const m=t(1,4),u="On cherche si les fonctions $f$ peuvent s'écrire sous la forme $f(x)=mx+p$.<br>";switch(m){case 1:{const n=t(2,5),$=t(1,4),e=t(2,4),f=t(1,3),o=t(4,12),s=o+x([-1,1]),a=x([1,3]),i=x([1,2]),b=x([3,5,7,9]),l=x([.7,.9,.5,.6]);this.enonce=`On considère les trois fonctions définies  par : <br>
        $f_1\\,:\\,x \\longmapsto ${n}x^2-(${n}x+${$})(x-${e})$${c(8)}$f_2\\,:\\,x \\longmapsto \\dfrac{${f*s}x+${o}}{${s}}$${c(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{${a}-\\dfrac{${i}}{${b}}x}{${r(l,1)}}$<br>

        On peut affirmer que :`,this.correction=u+` $\\bullet$ En développant, on obtient :<br> 
        $\\begin{aligned}
        f_1(x)&=${n}x^2-(${n}x+${$})(x-${e})\\\\
        &=${n}x^2-(${n}x^2-${n*e}x+${$}x-${$*e})\\\\
        &=${n}x^2-${n}x^2+${n*e}x-${$}x+${$*e}\\\\
        &=${n*e-$}x+${$*e}
        \\end{aligned}$<br>
        On retrouve une forme $mx+p$, donc $f_1$ est une fonction affine.<br>
        
         $\\bullet$ $f_2(x)=\\dfrac{${f*s}x+${o}}{${s}}=${f}x+\\dfrac{${o}}{${s}}$<br>
        $f_2$ est une fonction affine.<br>

        $\\bullet$ $f_3(x)=\\dfrac{${a}-\\dfrac{${i}}{${b}}x}{${r(l,1)}}=-\\dfrac{${i}}{${r(b*l,1)}}x+\\dfrac{${a}}{${r(l,1)}}$<br>
        $f_3$ est une fonction affine.<br>
${d("Toutes ces fonctions sont affines.")}`,this.reponses=["Toutes ces fonctions sont affines","Aucune de ces fonctions n'est affine","Uniquement la fonction $f_1$ est affine","Uniquement les fonctions $f_2$ et $f_3$ sont affines"]}break;case 2:{const n=t(2,5),$=t(1,4),e=t(2,6),f=t(3,7),o=t(2,5),s=t(3,8);this.enonce=`On considère les trois fonctions définies  par : <br>
        $f_1\\,:\\,x \\longmapsto \\dfrac{${n}x+${$}}{x}$${c(8)}$f_2\\,:\\,x \\longmapsto ${f}\\sqrt{x}-${e}$${c(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{${o}}{x}+${s}$<br>

        On peut affirmer que :`,this.correction=u+` $\\bullet$ $f_1(x)=\\dfrac{${n}x+${$}}{x}=${n}+\\dfrac{${$}}{x}$<br>
        Après simplification, cette fonction contient un terme en $\\dfrac{1}{x}$, elle n'est donc pas affine.<br>
        
         $\\bullet$ $f_2(x)=${f}\\sqrt{x}-${e}$<br>
        Cette fonction contient un terme en $\\sqrt{x}$, elle n'est donc pas affine.<br>

        $\\bullet$ $f_3(x)=\\dfrac{${o}}{x}+${s}$<br>
        Cette fonction contient un terme en $\\dfrac{1}{x}$, elle n'est donc pas affine.<br>
${d("Aucune de ces fonctions n'est affine.")}`,this.reponses=["Aucune de ces fonctions n'est affine","Toutes ces fonctions sont affines","Uniquement la fonction $f_1$ est affine","Uniquement les fonctions $f_2$ et $f_3$ sont affines"]}break;case 3:{const n=t(2,5),$=t(3,7,n),e=t(2,5),f=t(3,7),o=t(2,4),s=t(3,8);this.enonce=`On considère les trois fonctions définies  par : <br>
        $f_1\\,:\\,x \\longmapsto x^2-(x+${n})(x-${$})$${c(8)}$f_2\\,:\\,x \\longmapsto ${e}\\sqrt{x}+${f}$${c(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{${o}}{x}-${s}$<br>

        On peut affirmer que :`,this.correction=u+` $\\bullet$ En développant, on obtient :<br> 
        $\\begin{aligned}
        f_1(x)&=x^2-(x+${n})(x-${$})\\\\
        &=x^2-(x^2-${$}x+${n}x-${n*$})\\\\
        &=x^2-x^2+${$}x-${n}x+${n*$}\\\\
        &=${$-n}x+${n*$}
        \\end{aligned}$<br>
        On retrouve une forme $mx+p$, donc $f_1$ est une fonction affine.<br>
        
         $\\bullet$ $f_2(x)=${e}\\sqrt{x}+${f}$<br>
        Cette fonction contient un terme en $\\sqrt{x}$, elle n'est donc pas affine.<br>

         $\\bullet$ $f_3(x)=\\dfrac{${o}}{x}-${s}$<br>
        Cette fonction contient un terme en $\\dfrac{1}{x}$, elle n'est donc pas affine.<br>
        ${d("Uniquement la fonction $f_1$ est affine.")}`,this.reponses=["Uniquement la fonction $f_1$ est affine","Toutes ces fonctions sont affines","Aucune de ces fonctions n'est affine","Uniquement les fonctions $f_2$ et $f_3$ sont affines"]}break;case 4:{const n=t(2,5),$=t(3,7),e=t(2,4),f=t(3,6),o=t(1,5),s=t(4,9),a=t(2,5),i=t(21,29)/100;this.enonce=`On considère les trois fonctions définies sur leur domaine de définition par : <br>
        $f_1\\,:\\,x \\longmapsto ${n}x^2+${$}$${c(8)}$f_2\\,:\\,x \\longmapsto ${e}x^2-${e}(x-${f})(x+${o})$${c(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{${s}+${a}x}{${r(i,2)}}$<br>

        On peut affirmer que :`,this.correction=u+` $\\bullet$ $f_1(x)=${n}x^2+${$}$<br>
        Cette fonction contient un terme en $x^2$, elle n'est donc pas affine.<br>
        
         $\\bullet$ En développant, on obtient :<br> 
        $\\begin{aligned}
        f_2(x)&=${e}x^2-${e}(x-${f})(x+${o})\\\\
        &=${e}x^2-${e}(x^2+${o}x-${f}x-${f*o})\\\\
        &=${e}x^2-${e}x^2-${e*o}x+${e*f}x+${e*f*o}\\\\
        &=${e*(f-o)}x+${e*f*o}
        \\end{aligned}$<br>
        On retrouve une forme $mx+p$, donc $f_2$ est une fonction affine.<br>

       $\\bullet$  $f_3(x)=\\dfrac{${s}+${a}x}{${r(i,2)}}=\\dfrac{${a}}{${r(i,2)}}x+\\dfrac{${s}}{${r(i,2)}}$<br>
        On retrouve une forme $mx+p$, donc $f_3$ est une fonction affine.<br>
        ${d("Uniquement les fonctions $f_2$ et $f_3$ sont affines.")}`,this.reponses=["Uniquement les fonctions $f_2$ et $f_3$ sont affines","Toutes ces fonctions sont affines","Aucune de ces fonctions n'est affine","Uniquement la fonction $f_1$ est affine"]}break}};constructor(){super(),this.versionAleatoire(),this.options={vertical:!0,ordered:!1}}}export{Q as amcReady,j as amcType,D as dateDePublication,B as default,N as interactifReady,P as interactifType,M as refs,z as titre,G as uuid};
