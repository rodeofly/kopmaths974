import{Y as i,f as o,m as u,e as n,r as s}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const N="10/08/2025",R="6ca02",E={"fr-fr":["1AL11-4QCM"],"fr-ch":[]},O=!0,P="qcm",C="true",I="qcmMono",M="Calculer avec les suites arithmétiques et géométriques";class Q extends a{versionOriginale=()=>{this.enonce=`Soient $(u_n)$ la suite arithmétique de premier rang  $u_1=5$ et de raison $-2$.<br>
   $u_{8}$ vaut :`,this.correction=`Soit $p\\in \\mathbb{N}$ et $r\\in\\mathbb{R}$.<br>
    On sait que le terme de rang $n$ d'une suite arithmétique $(u_n)$ de premier terme $u_p$ et de rasion $r$ s'écrit $u_n=u_p + (n-p)r$.<br>
    Il vient donc, en appliquant les valeurs de l'énoncé :<br>
    $\\begin{aligned}
    u_{8}&=u_{1} + (8-1)\\times${i(-2)}\\\\
    &=5+ 7\\times${i(-2)}\\\\
     &=5 ${o(7*-2)}\\\\
    &=${u(`${5+7*-2}`)}
    \\end{aligned}$`,this.reponses=[`$${n(5+7*-2)}$`,`$${n(5+8*-2)}$`,`$${n(5+6*-2)}$`,`$${n(5-7*-2)}$`]};versionAleatoire=()=>{const t=s(-5,5,[-1,0,1]),r=s(2,5),$=s(-5,5,[-1,0,1]),e=s(15,30);this.enonce=`Soient $(u_n)$ la suite arithmétique de premier rang  $u_${r}=${$}$ et de raison $${t}$.<br>
    $u_{${e}}$ vaut :`,this.correction=`Soit $p\\in \\mathbb{N}$ et $r\\in\\mathbb{R}$.<br>
    On sait que le terme de rang $n$ d'une suite arithmétique $(u_n)$ de premier terme $u_p$ et de rasion $r$ s'écrit $u_n=u_p + (n-p)r$.<br>
    Il vient donc, en appliquant les valeurs de l'énoncé :<br>
    $\\begin{aligned}
    u_{${e}}&=u_{${r}} + (${e}-${r})\\times${i(t)}\\\\
    &=${$}+ ${e-r}\\times${i(t)}\\\\
     &=${$} ${o((e-r)*t)}\\\\
    &=${u(`${$+(e-r)*t}`)}
    \\end{aligned}$`,this.reponses=[`$${n($+(e-r)*t)}$`,`$${n($+e*t)}$`,`$${n($-(e-r)*t)}$`,`$${n($+(e-r+1)*t)}$`]};constructor(){super(),this.versionAleatoire()}}export{C as amcReady,I as amcType,N as dateDePublication,Q as default,O as interactifReady,P as interactifType,E as refs,M as titre,R as uuid};
