import{r as h,a as P,o as A,e as r,l as $}from"./embellissements-BYV7mIDn.js";import{E as x}from"./Exercice-DtXhjCyI.js";import a from"decimal.js";import{A as e}from"./arbres-BoNgbwQ8.js";import{a as B}from"./questionMathLive-DdRvWqlN.js";import{s as w}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const S="Utiliser la formule des probabilités totales dans un arbre",W="05/07/2022",X=!0,Y="mathLive",Z=!0,ee="AMCNum",ne="ee478",re={"fr-fr":["can1P05"],"fr-ch":[]};class ae extends x{constructor(){super(),this.sup=!0,this.keyboard=["numbers","fullOperations","variables","trigo","advanced"],this.nbQuestions=1}nouvelleVersion(){for(let t=0,v=0,f,u,i,o,p,b,s,l,m,n,d,c;t<this.nbQuestions&&v<50;){switch(c=[],i=new a(h(1,9,5)).div(10),s=new a(i).mul(-1).add(1),o=new a(h(1,9,5)).div(10),b=new a(o).mul(-1).add(1),l=new a(h(1,9,5)).div(10),p=new a(l).mul(-1).add(1),f=new a(i).mul(o).add(new a(s).mul(l)),u=new a(i).mul(b).add(new a(s).mul(p)),P([1,2])){case 1:m=new e({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new e({rationnel:!1,nom:"A",proba:i,alter:"",enfants:[new e({rationnel:!1,nom:"B",proba:o,alter:""}),new e({rationnel:!1,nom:"\\overline{B}",proba:b})]}),new e({rationnel:!1,nom:"\\overline{A}",proba:s,enfants:[new e({rationnel:!1,nom:"B",proba:l}),new e({rationnel:!1,nom:"\\overline{B}",proba:p})]})]}),m.setTailles(),c=m.represente(0,7,0,1.5,!0,1),n=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,n+=A({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...c),this.interactif?(n+="<br>$P(B)=$ ",n+=B(this,t," lycee")):n+=`<br>
          
          Calculer $P(B)$. `,d=` D'après la formule des probabilités totales, <br>
         $\\begin{aligned}
      P(B)&=P(A\\cap B)+P(\\overline{A}\\cap B)\\\\
      &= P(A)\\times P_{A}(B)+P(\\overline{A})\\times P_{\\overline{A}}(B)\\\\
      &=${r(i,1)}\\times ${r(o,1)}+${r(s,1)}\\times ${r(l,1)}\\\\
      &=${r(f,2)}
      \\end{aligned}$
      `,w(this,t,f),this.canEnonce=n,this.canReponseACompleter="";break;case 2:m=new e({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new e({rationnel:!1,nom:"A",proba:i,alter:"",enfants:[new e({rationnel:!1,nom:"B",proba:o,alter:""}),new e({rationnel:!1,nom:"\\overline{B}",proba:b})]}),new e({rationnel:!1,nom:"\\overline{A}",proba:s,enfants:[new e({rationnel:!1,nom:"B",proba:l}),new e({rationnel:!1,nom:"\\overline{B}",proba:p})]})]}),m.setTailles(),c=m.represente(0,7,0,1.5,!0,1),n=`On donne l’arbre de probabilités ci-dessous :<br>

         `,n+=A({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...c),this.interactif?(n+="<br> $P(\\overline{B})=$ ",n+=B(this,t," lycee")):n+=`<br>
          
          Calculer $P(\\overline{B})$. `,d=` D'après la formule des probabilités totales, <br>
           $\\begin{aligned}
        P(\\overline{B})&=P(A\\cap \\overline{B})+P(\\overline{A}\\cap \\overline{B})\\\\
        &= P(A)\\times P_{A}(\\overline{B})+P(\\overline{A})\\times P_{\\overline{A}}(\\overline{B})\\\\
        &=${r(i,1)}\\times ${r(b,1)}+${r(s,1)}\\times ${r(p,1)}\\\\
        &=${r(u,2)}
        \\end{aligned}$
        `,w(this,t,u),this.canEnonce=n,this.canReponseACompleter="";break}this.questionJamaisPosee(t,i,o,l)&&(this.listeQuestions[t]=n,this.listeCorrections[t]=d,t++),v++}$(this)}}export{Z as amcReady,ee as amcType,W as dateDePublication,ae as default,X as interactifReady,Y as interactifType,re as refs,S as titre,ne as uuid};
