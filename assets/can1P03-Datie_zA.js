import{r as h,a as x,o as $,e,l as y}from"./embellissements-BYV7mIDn.js";import{E as C}from"./Exercice-DtXhjCyI.js";import a from"decimal.js";import{A as n}from"./arbres-BoNgbwQ8.js";import{a as v}from"./questionMathLive-DdRvWqlN.js";import{s as A}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const X="Calculer la probabilité d’une intersection à partir d’un arbre",Y="04/07/2022",Z=!0,ee="mathLive",ne=!0,re="AMCNum",ie="7c8b7",ae={"fr-fr":["can1P03"],"fr-ch":[]};class oe extends C{constructor(){super(),this.sup=!0,this.keyboard=["numbers","fullOperations","variables","trigo","advanced"],this.nbQuestions=1}nouvelleVersion(){for(let o=0,d=0,u,B,P,w,l,i,b,f,t,m,s,r,c,p;o<this.nbQuestions&&d<50;){switch(p=[],l=new a(h(1,9,5)).div(10),t=new a(l).mul(-1).add(1),i=new a(h(1,9,5)).div(10),f=new a(i).mul(-1).add(1),m=new a(h(1,9,5)).div(10),b=new a(m).mul(-1).add(1),u=new a(l).mul(i),B=new a(l).mul(f),P=new a(t).mul(m),w=new a(t).mul(b),x([1,2,3,4])){case 1:s=new n({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new n({rationnel:!1,nom:"A",proba:1,visible:!1,alter:"",enfants:[new n({rationnel:!1,nom:"B",proba:1,visible:!1,alter:""}),new n({rationnel:!1,nom:"\\overline{B}",proba:new a(1-i)})]}),new n({rationnel:!1,nom:"\\overline{A}",proba:t,enfants:[new n({rationnel:!1,nom:"B",proba:new a(m)}),new n({rationnel:!1,nom:"\\overline{B}",proba:new a(1-m)})]})]}),s.setTailles(),p=s.represente(0,7,0,1.5,!0,1),r=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,r+=$({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...p),this.interactif?(r+="<br> $P(A\\cap B)=$ ",r+=v(this,o," lycee")):r+=`<br>
          
          Calculer $P(A\\cap B)$. `,c=` $P(A\\cap B)=P(A)\\times P_{A}(B)$.<br>
      $P(A)=1-${e(t,1)}= ${e(l,1)}$.<br>
      $P_{A}(B)=1-${e(1-i,1)}= ${e(i,1)}$.<br>
      Ainsi, $P(A\\cap B)=P(A)\\times P_{A}(B)=${e(l,1)}\\times ${e(i,1)}=${e(u,2)}$.
      `,A(this,o,u),this.canEnonce=r,this.canReponseACompleter="";break;case 2:s=new n({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new n({rationnel:!1,nom:"A",proba:1,visible:!1,alter:"",enfants:[new n({rationnel:!1,nom:"B",proba:i,alter:""}),new n({rationnel:!1,nom:"\\overline{B}",proba:1,visible:!1})]}),new n({rationnel:!1,nom:"\\overline{A}",proba:t,enfants:[new n({rationnel:!1,nom:"B",proba:new a(m)}),new n({rationnel:!1,nom:"\\overline{B}",proba:b})]})]}),s.setTailles(),p=s.represente(0,7,0,1.5,!0,1),r=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,r+=$({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...p),this.interactif?(r+="<br> $P(A\\cap \\overline{B})=$ ",r+=v(this,o," lycee")):r+=`<br>
          
          Calculer $P(A\\cap \\overline{B})$. `,c=` $P(A\\cap \\overline{B})=P(A)\\times P_{A}(\\overline{B})$.<br>
        $P(A)=1-${e(t,1)}= ${e(l,1)}$.<br>
        $P_{A}(\\overline{B})=1-${e(i,1)}= ${e(1-i,1)}$.<br>
        Ainsi, $P(A\\cap \\overline{B})=P(A)\\times P_{A}(\\overline{B})=${e(l,1)}\\times ${e(1-i,1)}=${e(B,2)}$.
        `,A(this,o,B),this.canEnonce=r,this.canReponseACompleter="";break;case 3:s=new n({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new n({rationnel:!1,nom:"A",proba:l,alter:"",enfants:[new n({rationnel:!1,nom:"B",proba:i,alter:""}),new n({rationnel:!1,nom:"\\overline{B}",proba:f})]}),new n({rationnel:!1,nom:"\\overline{A}",proba:1,visible:!1,enfants:[new n({rationnel:!1,nom:"B",proba:1,visible:!1}),new n({rationnel:!1,nom:"\\overline{B}",proba:b})]})]}),s.setTailles(),p=s.represente(0,7,0,1.5,!0,1),r=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,r+=$({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...p),this.interactif?(r+="<br> $P(\\overline{A}\\cap B)=$ ",r+=v(this,o," lycee")):r+=`<br>
          
          Calculer $P(\\overline{A}\\cap B)$. `,c=`
        





        $P(\\overline{A}\\cap B)=P(\\overline{A})\\times P_{\\overline{A}}(B)$.<br>
        $P(\\overline{A})=1-${e(l,1)}=${e(t,1)}$.<br>
        $P_{\\overline{A}}(B)=1-${e(b,1)}= ${e(1-b,1)}$.<br>
        Ainsi, $P(\\overline{A}\\cap B)=P(\\overline{A})\\times P_{\\overline{A}}(B)=${e(t,1)}\\times ${e(m,1)}=${e(P,2)}$.
        `,A(this,o,P),this.canEnonce=r,this.canReponseACompleter="";break;case 4:s=new n({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new n({rationnel:!1,nom:"A",proba:l,alter:"",enfants:[new n({rationnel:!1,nom:"B",proba:i,alter:""}),new n({rationnel:!1,nom:"\\overline{B}",proba:f})]}),new n({rationnel:!1,nom:"\\overline{A}",proba:1,visible:!1,enfants:[new n({rationnel:!1,nom:"B",proba:m}),new n({rationnel:!1,nom:"\\overline{B}",proba:1,visible:!1})]})]}),s.setTailles(),p=s.represente(0,7,0,1.5,!0,1),r=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,r+=$({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...p),this.interactif?(r+="<br> $P(\\overline{A}\\cap \\overline{B})=$ ",r+=v(this,o," lycee")):r+=`<br>
          
          Calculer $P(\\overline{A}\\cap \\overline{B})$. `,c=`
        





        $P(\\overline{A}\\cap \\overline{B})=P(\\overline{A})\\times P_{\\overline{A}}(\\overline{B})$.<br>
        $P(\\overline{A})=1-${e(l,1)}=${e(t,1)}$.<br>
        $P_{\\overline{A}}(\\overline{B})=1-${e(m,1)}= ${e(b,1)}$.<br>
        Ainsi, $P(\\overline{A}\\cap \\overline{B})=P(\\overline{A})\\times P_{\\overline{A}}(\\overline{B})=${e(t,1)}\\times ${e(b,1)}=${e(w,2)}$.
        `,A(this,o,w),this.canEnonce=r,this.canReponseACompleter="";break}this.questionJamaisPosee(o,l,i)&&(this.listeQuestions[o]=r,this.listeCorrections[o]=c,o++),d++}y(this)}}export{ne as amcReady,re as amcType,Y as dateDePublication,oe as default,Z as interactifReady,ee as interactifType,ae as refs,X as titre,ie as uuid};
