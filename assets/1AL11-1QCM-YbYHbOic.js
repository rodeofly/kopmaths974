import{u as c,m as o,_ as a,r as n,Y as u,F as m,f as $}from"./embellissements-BYV7mIDn.js";import b from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const w="10/08/2025",C="3bd46",E={"fr-fr":["1AL11-1QCM"],"fr-ch":[]},y=!0,D="qcm",P="true",M="qcmMono",Q="Calculer avec les suites arithmétiques et géométriques";class T extends b{versionOriginale=()=>{let r=-2,e=3;this.enonce=`Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${c(r,e,"n",{ordreInverse:!0})}$.`,this.correction=`Soit $n\\in \\mathbb{N}$. On sait que la forme explicite d'une suite arithmétique $(u_n)$, de premier terme $u_0\\in \\mathbb{R}$ et de raison $r\\in \\mathbb{R}$
    <br> est sous la forme : $u_n=u_0+n\\times r$.<br>
Avec $u_0=${e}$ et $r=${r}$, on a bien $u_n=${c(r,e,"n")}$.<br>
$${o("(u_n)")}$  ${a(`est donc une suite arithmétique de raison ${r}`)}. `,this.reponses=[`$(u_n)$ est une suite arithmétique de raison $${r}$.`,`$(u_n)$ est une suite arithmétique de raison $${e}$.`,`$(u_n)$ est une suite géométrique de raison $${r}$.`,"$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique."]};versionAleatoire=()=>{const r=n(1,6);if(r===1){let e=n(-5,5,[0,1]),t=n(-5,5,[-1,0,1,e]);this.enonce=`Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${c(e,t,"n")}$.`,this.correction=`Soit $n\\in \\mathbb{N}$. On sait que la forme explicite d'une suite arithmétique $(u_n)$, de premier terme $u_0\\in \\mathbb{R}$ et de raison $r\\in \\mathbb{R}$
    <br> est sous la forme : $u_n=u_0+n\\times r$.<br>
Avec $u_0=${t}$ et $r=${e}$, on a bien $u_n=${c(e,t,"n")}$.<br>
$${o("(u_n)")}$  ${a(`est donc une suite arithmétique de raison ${e}`)}. `,this.reponses=[`$(u_n)$ est une suite arithmétique de raison $${e}$.`,`$(u_n)$ est une suite arithmétique de raison $${t}$.`,`$(u_n)$ est une suite géométrique de raison $${e}$.`,"$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique."]}if(r===2){const e=n(-5,5,[0,1]),t=n(-5,5,[-1,0,1,e]);this.enonce=`Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${e}\\times ${u(t)}^n$.`,this.correction=`Soit $n\\in \\mathbb{N}$. On sait que la forme explicite d'une suite géométrique $(u_n)$, de premier terme $u_0\\in \\mathbb{R}$ et de raison $q\\in \\mathbb{R}$
    <br> est sous la forme : $u_n=u_0\\times q^n$.<br>
Avec $u_0=${e}$ et $q=${t}$, on a bien $u_n=${e}\\times ${u(t)}^n$.<br>
$${o("(u_n)")}$  ${a(`est donc une suite géométrique de raison ${t}`)}. `,this.reponses=[`$(u_n)$ est une suite géométrique de raison $${t}$`,`$(u_n)$ est une suite arithmétique de raison $${t}$`,`$(u_n)$ est une suite géométrique de raison $${e}$`,"$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique"]}if(r===3){const e=n(-5,5,[0,1]),t=n(-5,5,[-1,0,1,e,-e]);let i=new m(e+t,e+1),s=new m(e+t*t,e+t);this.enonce=`Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${e}+ ${u(t)}^n$.`,this.correction=`Soit $n\\in \\mathbb{N}$.<br>
    On calcule les premiers termes pour savoir si la suite peut être arithmétique ou géométrique : <br>
    $u_0=${e}+ ${u(t)}^0=${e}+1=${e+1}.$<br>
    $u_1=${e}+ ${u(t)}^1=${e}+${u(t)}=${e+t}.$<br>
    $u_2=${e}+ ${u(t)}^2=${e}+${u(t)}^2=${e+t*t}.$<br>
    On observe que $u_2-u_1=${e+t*t}${$(-e-t)}=${t*t-t}$.<br>
    et $u_1-u_0=${e+t}${$(-e-1)}=${t-1}$.  <br>
   Comme $u_2-u_1\\neq u_1-u_0$, on en déduit que la suite n'est pas arithmétique.<br>
   De même, on compare les quotients des termes consécutifs: <br>
   $\\dfrac{u_1}{u_0} = \\dfrac{${e+t}}{${e+1}}$`,i.estIrreductible||(this.correction+=` =$${i.texFractionSimplifiee}$`),this.correction+=` et $\\dfrac{u_2}{u_1} = \\dfrac{${e+t*t}}{${e+t}}$`,s.estIrreductible||(this.correction+=` =$${s.texFractionSimplifiee}$`),this.correction+=`<br>On observe que la suite n'est pas géométrique. <br>
    $${o("(u_n)")}$  ${a("est donc une suite ni arithmétique, ni géométrique ")}. `,this.reponses=["$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique.",`$(u_n)$ est une suite géométrique de raison $${t}$.`,`$(u_n)$ est une suite arithmétique de raison $${t}$.`,`$(u_n)$ est une suite arithmétique de raison $${e}$.`]}if(r===4){const e=n(-5,5,[0,1]),t=n(-5,5,[-1,0,1,e]),i=n(-5,5,[-1,0,1,e]);let s=new m(e*t+i,e+i),_=new m(e*t*t+i,e*t+i);this.enonce=`Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${e}\\times ${u(t)}^n${$(i)}$.`,this.correction=`Soit $n\\in \\mathbb{N}$.<br>
    On calcule les premiers termes pour savoir si la suite peut être arithmétique ou géométrique : <br>
    $u_0=${e}\\times ${u(t)}^0${$(i)}=${e}\\times 1${$(i)}=${e+i}.$<br>
    $u_1=${e}\\times ${u(t)}^1${$(i)}=${e}\\times ${u(t)}${$(i)}=${e*t+i}.$<br>
    $u_2=${e}\\times ${u(t)}^2${$(i)}=${e}\\times ${u(t*t)}${$(i)}=${e*t*t+i}.$<br>
    On observe que $u_2-u_1=${e*t*t+i}${$(-e*t-i)}=${e*t*t-e*t}$.<br>
    et $u_1-u_0=${e*t+i}${$(-e-i)}=${e*t-e}$.  <br>
   Comme $u_2-u_1\\neq u_1-u_0$, on en déduit que la suite n'est pas arithmétique.<br>
   De même, on compare les quotients des termes consécutifs: <br>
   $\\dfrac{u_1}{u_0} = \\dfrac{${e*t+i}}{${e+i}}$`,s.estIrreductible||(this.correction+=` =$${s.texFractionSimplifiee}$`),this.correction+=` et $\\dfrac{u_2}{u_1} = \\dfrac{${e*t*t+i}}{${e*t+i}}$`,_.estIrreductible||(this.correction+=` =$${_.texFractionSimplifiee}$`),this.correction+=`<br>On observe que la suite n'est pas géométrique. <br>
    $${o("(u_n)")}$  ${a("est donc une suite ni arithmétique, ni géométrique ")}. `,this.reponses=["$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique.",`$(u_n)$ est une suite géométrique de raison $${e}$.`,`$(u_n)$ est une suite arithmétique de raison $${i}$.`,`$(u_n)$ est une suite arithmétique de raison $${i}$ et géométrique de raison $${t}$.`]}if(r===5){const e=n(-5,5,[-1,0,1]);n(-5,5,[-1,0,1,e]),n(-5,5,[-1,0,1,e]),this.enonce=`Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${e}n$.`,this.correction=`Soit $n\\in \\mathbb{N}$. On sait que la forme explicite d'une suite arithmétique $(u_n)$, de premier terme $u_0\\in \\mathbb{R}$ et de raison $r\\in \\mathbb{R}$
    <br> est sous la forme : $u_n=u_0+n\\times r$.<br>
Avec $u_0=0$ et $r=${e}$, on a bien $u_n=${c(e,0,"n")}$.<br>
$${o("(u_n)")}$  ${a(`est donc une suite arithmétique de raison ${e}`)}. `,this.reponses=[`$(u_n)$ est une suite arithmétique de raison $${e}$.`,"$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique.",`$(u_n)$ est une suite géométrique de raison $${e}$.`,`$(u_n)$ est une suite arithmétique et géométrique de raison $${e}$.`]}if(r===6){const e=n(-5,5,[0,1]),t=n(-5,5,[-1,0,1,e,-2]);n(-5,5,[-1,0,1,e]);let i=new m(e+t,t),s=new m(4*e+t,e+t);this.enonce=`Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${e}n^2${$(t)}$.`,this.correction=`Soit $n\\in \\mathbb{N}$.<br>
    On calcule les premiers termes pour savoir si la suite peut être arithmétique ou géométrique : <br>
    $u_0=${e}\\times 0^2${$(t)}=${t}$<br>
    $u_1=${e}\\times 1^2${$(t)}=${e}+${$(t)}=${e+t}$<br>
    $u_2=${e}\\times 2^2${$(t)}=${e}\\times 4${$(t)}=${4*e+t}.$<br>
    On observe que $u_2-u_1=${4*e+t}${$(-e-t)}=${3*e}.$<br>
    et $u_1-u_0=${e+t}${$(-t)}=${e}$.  <br>
   Comme $u_2-u_1\\neq u_1-u_0$, on en déduit que la suite n'est pas arithmétique.<br>
   De même, on compare les quotients des termes consécutifs: <br>
   $\\dfrac{u_1}{u_0} = \\dfrac{${e+t}}{${t}}$`,i.estIrreductible||(this.correction+=`$ =${i.texFractionSimplifiee}$`),this.correction+=` et $\\dfrac{u_2}{u_1} = \\dfrac{${4*e+t}}{${e+t}}$`,s.estIrreductible||(this.correction+=` $=${s.texFractionSimplifiee}$`),this.correction+=`<br>On observe que la suite n'est pas géométrique. <br>
    $${o("(u_n)")}$  ${a("est donc une suite ni arithmétique, ni géométrique ")}. `,this.reponses=["$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique.",`$(u_n)$ est une suite arithmétique de raison $${e}$.`,`$(u_n)$ est une suite géométrique de raison $${e}$.`,`$(u_n)$ est une suite arithmétique de raison $${t}$.`]}};constructor(){super(),this.options={vertical:!0,ordered:!1},this.versionAleatoire()}}export{P as amcReady,M as amcType,w as dateDePublication,T as default,y as interactifReady,D as interactifType,E as refs,Q as titre,C as uuid};
