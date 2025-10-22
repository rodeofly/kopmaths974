import{t as w}from"./tableau-nuZmVTHQ.js";import{r as p,a as R,e as f,m as j}from"./embellissements-BYV7mIDn.js";import{nombreElementsDifferents as O}from"./ExerciceQcm-DOkcCRBu.js";import S from"./ExerciceQcmA-CHnTcRvH.js";import"decimal.js";import"mathjs";import"roughjs";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./tableauMathlive-xx-nDjq0.js";import"./index-BUDQz6-w.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"katex";import"crypto-js";import"earcut";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";/* empty css                   */import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";const ue="91cbe",$e={"fr-fr":["1A-S4-4"],"fr-ch":[]},de=!0,pe="qcm",fe="true",be="qcmMono",he="Déterminer la valeur manquante d'une série de valeurs pondérées dont on connaît la moyenne.",ge="01/08/2025";class xe extends S{appliquerLesValeurs(){let a,l,o,r,s,n,b=!0,$;do{$=p(3,4),l=Array.from({length:$},()=>p(8,15)),o=R([2,3]),r=p(10,16);const e=l.reduce((i,u)=>i+u,0);n=$+o,s=e,a=(r*n-s)/o,Number.isInteger(a)&&(b=a>=0&&a<=20)}while(!Number.isInteger(a)||!b&&Math.random()<.8);function d(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}}function y(e,t){const i=[-3,-2,-1,1,2,3].map(m=>e+m).filter(m=>Number.isInteger(m)&&m>=0&&m<=20&&m!==e);d(i);const u=i.slice(0,t?2:3).map(m=>`$x=${f(m)}$`);return t&&u.push("Impossible, il faudrait une note supérieure à 20."),d(u),u}const C=l.length+1,L=["\\text{Devoir}"].concat(Array.from({length:C},(e,t)=>`${t+1}`)),A=["\\text{Note}","\\text{Coefficient}"],E=[...l.map(e=>`${e}`),"x"],I=[...l.map(()=>"1"),`${o}`],N=[...E,...I],P=w(L,A,N),g=l.map(e=>`${e} \\times 1`).join(" + "),x=`${s} + ${o}x`,v=l.map(()=>"1").join(" + ")+` + ${o}`,q=Array.from({length:l.length},(e,t)=>t+1),M=q.reduce((e,t)=>e+t,0)+(l.length+1),D=l.reduce((e,t,i)=>e+t*q[i],0),h=(r*M-D)/(l.length+1);let c=null;if(Number.isInteger(h)&&(h>20?c="Impossible, il faudrait une note supérieure à 20.":c=`$x=${f(h)}$`),this.enonce=`
Voici les $${$+1}$ notes sur vingt obtenues par un élève en mathématiques :<br><br>
${P}
<br><br>
On cherche ce que doit valoir $x$ pour que la moyenne de l'élève soit égale $${r}$.`,b){const e=a>=18,t=y(a,e);c&&!t.includes(c)&&(t.pop(),t.push(c),d(t)),this.reponses=[`$x=${f(a)}$`,...t],this.correction=`
Pour déterminer la moyenne de l'élève, on calcule :<br>
$\\bullet$ La somme des produits de chaque note par son coefficient :

$${g} + x \\times ${o} = ${x}$.<br>

$\\bullet$ La somme des coefficients : $${v}= ${n}$.
<br>Remarque : On fera bien attention à ne pas utiliser la ligne des numéros de devoirs du tableau, donnée qui n'intervient pas dans le calcul de la moyenne.
<br>La moyenne est donc égale à $\\dfrac{${s} + ${o}x}{${n}}$. <br> Comme elle doit être égale à $${r}$, on doit résoudre l'équation suivante :
<br>
$
\\begin{aligned}
\\dfrac{${s} + ${o}x}{${n}} &= ${r}\\\\
${s} + ${o}x &= ${r} \\times ${n}\\\\
    ${s} + ${o}x&= ${r*n}\\\\
${o}x &= ${r*n} - ${s}\\\\
 ${o}x &= ${r*n-s}\\\\
x &= \\dfrac{${r*n-s}}{${o}}\\\\
x&= ${j(a)}.
\\end{aligned}
$
`}else{const e=new Set;for(e.add(20);e.size<3;){const i=p(17,20,0);e.add(i)}const t=Array.from(e).map(i=>`$x=${f(i)}$`);d(t),this.reponses=["Impossible, il faudrait une note supérieure à 20.",...t],this.correction=`
Pour déterminer la moyenne de l'élève, on calcule :<br>
$\\bullet$ La somme des produits de chaque note par son coefficient :

$${g} + x \\times ${o} = ${x}$.

<br>$\\bullet$ La somme des coefficients : $${v}= ${n}$.
<br>Remarque : On fera bien attention à ne pas utiliser la ligne des numéros de devoirs du tableau, donnée qui n'intervient pas dans le calcul de la moyenne.
<br>La moyenne est donc égale à $\\dfrac{${s} + ${o}x}{${n}}$. <br> Comme elle doit être égale à $${r}$, on doit résoudre l'équation suivante :
<br>
$\\dfrac{${s} + ${o}x}{${n}} = ${r}$<br>
$${s} + ${o}x = ${r*n}$<br>
$x = \\dfrac{${r*n-s}}{${o}} = ${a}$<br>
Mais cette valeur dépasse 20. Il est donc <strong>impossible</strong> d'obtenir une telle moyenne avec une note sur 20.
`}}versionAleatoire=()=>{do this.appliquerLesValeurs();while(O(this.reponses)<4)};constructor(){super(),this.options={vertical:!1,ordered:!1},this.versionAleatoire()}}export{fe as amcReady,be as amcType,ge as dateDePublication,xe as default,de as interactifReady,pe as interactifType,$e as refs,he as titre,ue as uuid};
