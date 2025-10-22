import{o as p,D as b,r as s,F as a}from"./embellissements-BYV7mIDn.js";import{A as e}from"./arbres-BoNgbwQ8.js";import g from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const Q="10/08/2025",U="93b62",k={"fr-fr":["1A-P3-2"],"fr-ch":[]},z=!0,G="qcm",H="true",I="qcmMono",J="Utiliser un arbre pour calculer une probabilité (conditionnelle)";class K extends g{versionOriginale=()=>{let i=[];const t=new e({racine:!0,rationnel:!0,nom:"",proba:1,visible:!1,alter:"",enfants:[new e({rationnel:!0,nom:"A",proba:.3,visible:!1,enfants:[new e({rationnel:!0,nom:"C",proba:.6,visible:!1}),new e({rationnel:!0,nom:"\\bar C",proba:.4,visible:!1})]}),new e({rationnel:!0,nom:"\\bar A",proba:.7,enfants:[new e({rationnel:!0,nom:"C",proba:.4,visible:!0,alter:""}),new e({rationnel:!0,nom:"\\bar C",proba:.6,visible:!1,alter:""})]})]});t.setTailles(),i=t.represente(0,6,0,3,!0,1,8),this.enonce="On donne l'arbre de probabilités ci-dessous :<br>",this.enonce+=p(Object.assign({style:"inline"},b(i)),i),this.enonce+="<br>On sait que $P(A \\cap C)=\\dfrac{9}{50}$.",this.enonce+="<br>$P_A(\\overline{C})=\\ldots$",this.correction=`On déduit de l'énoncé<br>$\\begin{aligned}
        P(A)&=1-P(\\overline{A})\\\\
        &=1-\\dfrac{7}{10}\\\\
        &=\\dfrac{3}{10}.\\end{aligned}$<br>
        Avec la donnée de $P(A \\cap C)=\\dfrac{9}{50}$ dans l'énoncé, on peut alors calculer : <br>$\\begin{aligned}
        P_A(C)&=\\dfrac{P(A \\cap C)}{P(A)}\\\\
        &=\\dfrac{ \\dfrac{9}{50}}{\\dfrac{3}{10}} \\\\
        &=\\dfrac{9}{50} \\times \\dfrac{10}{3} \\\\
        &= \\dfrac{3}{5}.
      \\end{aligned}$<br>
        On sait alors que <br>$\\begin{aligned}
        P_A(\\overline{C})&=1-P_A(C)\\\\
        &=1-\\dfrac{3}{5}\\\\
        &=\\dfrac{2}{5}.\\end{aligned}$<br>`,this.reponses=["$\\dfrac{2}{5}$","$\\dfrac{3}{5}$ ","$\\dfrac{7}{50}$ ","$\\dfrac{1}{5}$ "]};versionAleatoire=()=>{let i=[];const t=s(1,9),f=10,c=s(1,9,t),$=10,u=s(2,8),A=10,n=new a(t,f),r=new a(c,$),l=new a(u,A),C=s(1,9,10-c),v=new a(C,10),d=new e({racine:!0,rationnel:!0,nom:"",proba:1,visible:!1,alter:"",enfants:[new e({rationnel:!0,nom:"A",proba:n,visible:!1,enfants:[new e({rationnel:!0,nom:"C",proba:r,visible:!1}),new e({rationnel:!0,nom:"\\overline C",proba:r.entierMoinsFraction(1),visible:!1})]}),new e({rationnel:!0,nom:"\\overline A",proba:n.entierMoinsFraction(1),enfants:[new e({rationnel:!0,nom:"C",proba:l,visible:!0}),new e({rationnel:!0,nom:"\\overline C",proba:l.entierMoinsFraction(1),visible:!1,alter:""})]})]});d.setTailles(),i=d.represente(0,6,0,3,!0,1,8);const o=n.produitFraction(r),F=new a(n.den,n.num);this.enonce="On donne l'arbre de probabilités ci-dessous :<br>",this.enonce+=p(Object.assign({style:"inline"},b(i)),i),this.enonce+=`<br>On sait que $P(A \\cap C)=${o.texFractionSimplifiee}$.<br>`,this.enonce+="$P_A(\\overline{C})=\\ldots$",this.correction=`On déduit de l'énoncé<br>$\\begin{aligned}
        P(A)&=1-P(\\overline{A})\\\\
        &=1-${n.entierMoinsFraction(1).texFractionSimplifiee}\\\\
        &=${n.texFractionSimplifiee}.\\end{aligned}$<br>
        Avec la donnée de $P(A \\cap C)=${o.texFractionSimplifiee}$ dans l'énoncé, on peut alors calculer : <br>$\\begin{aligned}
        P_A(C)&=\\dfrac{P(A \\cap C)}{P(A)}\\\\
        &=\\dfrac{ ${o.texFractionSimplifiee}}{ ${n.texFractionSimplifiee}} \\\\
        &=${o.texFractionSimplifiee} \\times ${F.texFractionSimplifiee} \\\\
        &= ${o.diviseFraction(n).texFractionSimplifiee}.
      \\end{aligned}$<br>
        On sait alors que <br>$\\begin{aligned}
        P_A(\\overline{C})&=1-P_A(C)\\\\
        &=1-${r.texFractionSimplifiee}\\\\
        &=${r.entierMoinsFraction(1).texFractionSimplifiee} .\\end{aligned}$<br>`,this.reponses=[`$${r.entierMoinsFraction(1).texFractionSimplifiee}$`,`$${l.texFractionSimplifiee}$`,`$${v.texFractionSimplifiee}$`,`$${r.texFractionSimplifiee}$`]};constructor(){super(),this.versionAleatoire()}}export{H as amcReady,I as amcType,Q as dateDePublication,K as default,z as interactifReady,G as interactifType,k as refs,J as titre,U as uuid};
