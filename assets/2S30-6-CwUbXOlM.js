import{E as q,K as p}from"./Exercice-DtXhjCyI.js";import{g as y,af as k,r as c,e,m as B,s as u,l as S}from"./embellissements-BYV7mIDn.js";import{a as P}from"./questionMathLive-DdRvWqlN.js";import{h as I}from"./gestionInteractif-DujZpSu8.js";import o from"decimal.js";import{t as L}from"./tableau-nuZmVTHQ.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";/* empty css                   */const ce="Calculer des probabilités avec des unions et intersections d'événements",ue="25/05/2024",oe=!0,be="mathLive",Ae="ea35b",le={"fr-fr":["2S30-6"],"fr-ch":[]};class pe extends q{constructor(){super(),this.sup=7,this.nbQuestions=1,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : On cherche P(A union B)","2 : On cherche P(A inter B)","3 : On cherche P(A)","4 : Avec des événements incompatibles","5 : Avec des événements contraires","6 : Avec un tableau","7 : Mélange"].join(`
`)]}nouvelleVersion(){const T=y({saisie:this.sup,min:1,max:6,melange:7,defaut:7,nbQuestions:this.nbQuestions}),v=k(T,this.nbQuestions);for(let s=0,h=0;s<this.nbQuestions&&h<50;){const C=c(1,20);let $="",a="",b="",n,t;n=new o(c(1,99)).div(100),t=new o(c(1,99)).div(100);let i;i=new o(c(1,99)).div(100);let r=n.add(t).sub(i);for(;r.greaterThan(.99)===!0||r.lessThan(.01)===!0||i.greaterThan(n.sub(.01))===!0||i.greaterThan(t.sub(.01))===!0;)n=new o(c(1,99)).div(100),t=new o(c(1,99)).div(100),i=new o(c(1,99)).div(100),r=n.add(t).sub(i);switch(v[s]){case 1:$=e(r,2),a=`Soient $A$ et $B$ deux événements vérifiant :  <br>
           $\\bullet$  $P(A)=${e(n,2)}$ ${u(4)} $\\bullet$  $P(B)=${e(t,2)}$ ${u(4)}
           $\\bullet$  $P(A\\cap B)=${e(i,2)}$.<br>
            Calculer $P(A\\cup B)$.
           `,b=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
            $\\begin{aligned} 
            P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
            &=${e(n,2)}+${e(t,2)}-${e(i,2)}\\\\
            &=${$}
            \\end{aligned}$<br>
            Ainsi $P(A\\cup B)=${B($)}$.`,a+="<br>"+P(this,s,p.clavierDeBase,{texteAvant:" $P(A\\cup B)=$"});break;case 2:$=e(i,2),a=`Soient $A$ et $B$ deux événements vérifiant :  <br>
         $\\bullet$  $P(A)=${e(n,2)}$  ${u(4)} $\\bullet$  $P(B)=${e(t,2)}$  ${u(4)} $\\bullet$  $P(A\\cup B)=${e(r,2)}$.<br>
          Calculer $P(A\\cap B)$.
         `,b=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
          $\\begin{aligned} 
          P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
          ${e(r,2)} &=${e(n,2)}+${e(t,2)}-P(A\\cap B)\\\\
          P(A\\cap B) &=${e(n,2)}+${e(t,2)}-${e(r,2)}\\\\
          P(A\\cap B)&=${$}
          \\end{aligned}$<br>
          Ainsi $P(A\\cap B)=${B($)}$.`,a+="<br>"+P(this,s,p.clavierDeBase,{texteAvant:"$P(A\\cap B)=$"});break;case 3:$=e(n,2),a=`Soient $A$ et $B$ deux événements vérifiant :  <br>
           $\\bullet$  $P(B)=${e(t,2)}$  ${u(4)} $\\bullet$  $P(A\\cap B)=${e(i,2)}$  ${u(4)}$\\bullet$  $P(A\\cup B)=${e(r,2)}$.<br>
            Calculer $P(A)$.
           `,b=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
            $\\begin{aligned} 
            P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
            ${e(r,2)}&=P(A)+${e(t,2)}-${e(i,2)}\\\\
            P(A)&=${e(r,2)}-${e(t,2)}+${e(i,2)}\\\\
            &=${$}
            \\end{aligned}$<br>
            Ainsi $P(A)=${B($)}$.`,a+="<br>"+P(this,s,p.clavierDeBase,{texteAvant:"$P(A)=$"});break;case 4:{const A=new o(c(1,40)).div(100),l=new o(c(1,40)).div(100),m=A.add(l);$=e(m,2),a=`Soient $A$ et $B$ deux événements incompatibles vérifiant :  <br>
          $\\bullet$  $P(A)=${e(A,2)}$ ${u(4)} $\\bullet$  $P(B)=${e(l,2)}$.<br>
           Calculer $P(A\\cup B)$.`,b=`Lorsque deux événements sont incompatibles,  $P(A\\cup B)=P(A)+P(B)$.<br><br>
          $\\begin{aligned} 
            P(A\\cup B)&=P(A)+P(B)\\\\
            P(A\\cup B)&=${e(A,2)}+${e(l,2)}\\\\
            P(A\\cup B) &=${$}           
            \\end{aligned}$<br>
            Ainsi $P(A\\cup B)=${B($)}$.`,a+="<br>"+P(this,s,p.clavierDeBase,{texteAvant:"$P(A\\cup B)=$"})}break;case 5:{const A=n.mul(-1).add(1),l=t.mul(-1).add(1);$=e(r,2),a=`Soient $A$ et $B$ deux événements  vérifiant :  <br>
             $\\bullet$  $P(\\bar{A})=${e(A,2)}$  ${u(4)} $\\bullet$  $P(\\bar{B})=${e(l,2)}$  ${u(4)} $\\bullet$  $P(A\\cap B)=${e(i,2)}$.<br>
              Calculer $P(A\\cup B)$.`,b=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
             Or $P(A)=1-P(\\bar{A})=${e(n,2)}$ et $P(B)=1-P(\\bar{B})=${e(t,2)}$.<br>
             <br>$\\begin{aligned} 
             P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
             P(A\\cup B)&=${e(n,2)}+${e(t,2)}-${e(i,2)}\\\\
             P(A\\cup B)&=${e(r,2)}
             \\end{aligned}$<br>
             Ainsi $P(A\\cup B)=${B($)}$.`,a+="<br>"+P(this,s,p.clavierDeBase,{texteAvant:"$P(A\\cup B)=$"})}break;case 6:{const A=n.mul(-1).add(1),l=t.mul(-1).add(1),m=n.mul(100),g=t.mul(100),d=i.mul(100),f=g.sub(d),w=m.sub(d),x=A.mul(100),D=l.mul(100),O=x.sub(f),Q=L(["","A","\\overline{A}","\\text{Total}"],["B","\\overline{B}","\\text{Total}"],[`${e(d,2)}`,`${e(f,2)}`,`${e(g,2)}`,`${e(w,2)}`,`${e(O,2)}`,`${e(D,2)}`,`${e(m,2)}`,`${e(x,2)}`,100]);$=e(r,2),a=`Voici un tableau d'effectifs concernant deux événements $A$ et $B$ :  <br>
            ${Q}
              
                Calculer $P(A\\cup B)$.`,b=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
               <br>$\\begin{aligned} 
               P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
               P(A\\cup B)&=${e(n,2)}+${e(t,2)}-${e(i,2)}\\\\
               P(A\\cup B)&=${e(r,2)}
               \\end{aligned}$<br>
               Ainsi $P(A\\cup B)=${B($)}$.`,a+="<br>"+P(this,s,p.clavierDeBase,{texteAvant:"$P(A\\cup B)=$"})}break}I(this,s,{reponse:{value:$}}),this.questionJamaisPosee(s,v[s],C)&&(this.listeQuestions[s]=a,this.listeCorrections[s]=b,s++),h++}S(this)}}export{ue as dateDePublication,pe as default,oe as interactifReady,be as interactifType,le as refs,ce as titre,Ae as uuid};
