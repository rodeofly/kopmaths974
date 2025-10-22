import{o as P,D as F,e as i,r as p,F as m}from"./embellissements-BYV7mIDn.js";import{A as e}from"./arbres-BoNgbwQ8.js";import O from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const U="10/08/2025",V="24438",W={"fr-fr":["1A-P3-3"],"fr-ch":["3mP1-2"]},X=!0,Y="qcm",Z="true",ee="qcmMono",ne="Déterminer une probabilité conditionnelle.";class te extends O{versionOriginale=()=>{let r=[];const b=new e({racine:!0,rationnel:!0,nom:"",proba:1,visible:!1,alter:"",enfants:[new e({rationnel:!0,nom:"A",proba:.3,enfants:[new e({rationnel:!0,nom:"C",proba:.6}),new e({rationnel:!0,nom:"\\bar C",proba:.4})]}),new e({rationnel:!0,nom:"\\bar A",proba:.7,enfants:[new e({rationnel:!0,nom:"C",proba:.4,visible:!0}),new e({rationnel:!0,nom:"\\bar C",proba:.6,visible:!0,alter:""})]})]});b.setTailles(),r=b.represente(0,6,0,3,!0,1,8),this.enonce="On donne l'arbre de probabilités ci-dessous :<br>",this.enonce+=P(Object.assign({style:"inline"},F(r)),r),this.enonce+="<br>$p_C(A)=\\ldots$",this.correction=`On sait que $ P_C(A)=\\dfrac{P(A \\cap C)}{P(C)}$<br>
        D'après la formule des probabilités totales :<br>
         $\\begin{aligned}P(C)&=p(A\\cap C)+p(\\bar A \\cap C)\\\\
         &=P(A)\\times P_A(C)+P(\\bar A)\\times P_{\\bar A}(C)\\\\
         &=${i(.3)}\\times ${i(.6)}+${i(.7)}\\times ${i(.4)}\\\\
         &=${i(.18)}+${i(.28)}\\\\
            &=${i(.46)}\\\\
            \\end{aligned}$<br>
         <br>$\\begin{aligned}
    P_C(A)&=\\dfrac{P(A \\cap C)}{P(C)}\\\\
    &=\\dfrac{P(A)\\times P_A(C)}{P(C)}\\\\
    &=\\dfrac{${i(.18)}}{${i(.46)}}\\\\
   &=\\dfrac{9}{23}
     \\end{aligned}$`,this.reponses=["$\\dfrac{9}{23}$","$\\dfrac{11}{23}$ ","$\\dfrac{13}{23}$ ","$\\dfrac{9}{50}$ "]};versionAleatoire=()=>{let r=[];const b=p(1,9),w=10,h=p(1,9),g=10,S=p(2,8),_=10,a=new m(b,w),s=new m(h,g),d=new m(S,_),C=new e({racine:!0,rationnel:!0,nom:"",proba:1,visible:!1,alter:"",enfants:[new e({rationnel:!0,nom:"A",proba:a,enfants:[new e({rationnel:!0,nom:"C",proba:s}),new e({rationnel:!0,nom:"\\bar C",proba:s.entierMoinsFraction(1)})]}),new e({rationnel:!0,nom:"\\bar A",proba:a.entierMoinsFraction(1),enfants:[new e({rationnel:!0,nom:"C",proba:d,visible:!0}),new e({rationnel:!0,nom:"\\bar C",proba:d.entierMoinsFraction(1),visible:!0,alter:""})]})]});C.setTailles(),r=C.represente(0,6,0,3,!0,1,8);const c=a.produitFraction(s),A=a.entierMoinsFraction(1).produitFraction(d),$=c.sommeFraction(A),l=c.diviseFraction($);this.enonce="On donne l'arbre de probabilités ci-dessous :<br>",this.enonce+=P(Object.assign({style:"inline"},F(r)),r),this.enonce+="<br>$P_C(A)=\\ldots$",l.texFractionSimplifiee,this.correction=`On sait que $ P_C(A)=\\dfrac{P(A \\cap C)}{P(C)}$<br>
        D'après la formule des probabilités totales :<br>
         $\\begin{aligned}P(C)&=p(A\\cap C)+p(\\bar A \\cap C)\\\\
         &=P(A)\\times P_A(C)+P(\\bar A)\\times P_{\\bar A}(C)\\\\
         &=${a.texFractionSimplifiee}\\times ${s.texFractionSimplifiee}+${a.entierMoinsFraction(1).texFractionSimplifiee}\\times ${d.texFractionSimplifiee}\\\\
         &=${c.texFractionSimplifiee}+${A.texFractionSimplifiee}\\\\
            &=${$.texFractionSimplifiee}\\\\
            \\end{aligned}$<br>
         <br>$\\begin{aligned}
    P_C(A)&=\\dfrac{P(A \\cap C)}{P(C)}\\\\
    &=\\dfrac{P(A)\\times P_A(C)}{P(C)}\\\\
    &=\\dfrac{${c.texFractionSimplifiee}}{${$.texFractionSimplifiee}}\\\\
    &=${l.texFractionSimplifiee}\\\\
     \\end{aligned}$`;const f=Math.max(1,l.denIrred),o=l.numIrred;let t=[];if(f>2)for(let n=1;n<f;n++)n!==o&&t.push(n);else t=[o+1,Math.max(1,o-1),o+2,o+3];for(t=Array.from(new Set(t)).filter(n=>n>0);t.length<2;){const n=o+p(1,5);!t.includes(n)&&n!==o&&t.push(n)}const u=()=>{const n=p(0,t.length-1);return t.splice(n,1)[0]},v=u(),D=u(),M=new m(v,f);new m(D,f),this.reponses=[`$${l.texFractionSimplifiee} $`,`$${M.texFractionSimplifiee}$ `,`$${c.texFractionSimplifiee} $`,`$${s.texFractionSimplifiee} $`]};constructor(){super(),this.versionAleatoire()}}export{Z as amcReady,ee as amcType,U as dateDePublication,te as default,X as interactifReady,Y as interactifType,W as refs,ne as titre,V as uuid};
