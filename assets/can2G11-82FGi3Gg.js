import{aP as w,a as n,s,m as o,l}from"./embellissements-BYV7mIDn.js";import{E as c}from"./Exercice-DtXhjCyI.js";import{p as h}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const O="Utiliser la relation de Chasles/réductions vectorielles*",Q=!0,D="qcm",P="30/10/2021",k="03/01/2022",y="7bc4a",q={"fr-fr":["can2G11"],"fr-ch":[]};class T extends c{constructor(){super(),this.nbQuestions=1,this.spacing=3}nouvelleVersion(){let e,i,$,a;for(let t=0,g=0;t<this.nbQuestions&&g<50;){const r=w(7,["QD"]),v=n([1,2,3,3]);switch(v){case 1:e=`$\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$\\overrightarrow{${r[0]}${r[3]}}$ `,statut:!0},{texte:`$\\overrightarrow{${r[0]}${r[2]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[2]}}$ `,statut:!1}]},$=h(this,t),this.interactif?e+=$.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
      $\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=` $\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}=\\ldots$`,i=`On utilise la relation de Chasles :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}
        &=\\underbrace{\\overrightarrow{${r[0]}${o(r[1])}}+
        \\overrightarrow{${o(r[1])}${r[2]}}}_{\\overrightarrow{${r[0]}${r[2]}}}+
        \\overrightarrow{${r[2]}${r[3]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[0]}${o(r[2])}}+
        \\overrightarrow{${o(r[2])}${r[3]}}}_{\\overrightarrow{${o(r[0])}${r[3]}}}\\\\
        &=\\overrightarrow{${r[0]}${r[3]}}
        \\end{aligned}$
        `;break;case 2:a=n(["a","b"]),a==="a"&&(e=`$\\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}-\\overrightarrow{${r[2]}${r[1]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$\\overrightarrow{${r[5]}${r[3]}}$ `,statut:!0},{texte:`$\\overrightarrow{${r[5]}${r[2]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[2]}}$ `,statut:!1}]},$=h(this,t),this.interactif?e+=$.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}-\\overrightarrow{${r[2]}${r[1]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=` $\\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}-\\overrightarrow{${r[2]}${r[1]}}=\\ldots$`,i=`On utilise la relation de Chasles :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}\\underbrace{-\\overrightarrow{${r[2]}${r[1]}}}_{+\\overrightarrow{${r[1]}${r[2]}}}
        &=  \\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[5]}${o(r[1])}}+
        \\overrightarrow{${o(r[1])}${r[2]}}}_{\\overrightarrow{${r[5]}${r[2]}}}+
        \\overrightarrow{${r[2]}${r[3]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[5]}${o(r[2])}}+
        \\overrightarrow{${o(r[2])}${r[3]}}}_{\\overrightarrow{${o(r[5])}${r[3]}}}\\\\
        &=\\overrightarrow{${r[5]}${r[3]}}
        \\end{aligned}$
        `),a==="b"&&(e=`$\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[1]}${r[2]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$\\overrightarrow{${r[0]}${r[3]}}$ `,statut:!0},{texte:`$\\overrightarrow{${r[0]}${r[2]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[2]}}$ `,statut:!1}]},$=h(this,t),this.interactif?e+=$.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[1]}${r[2]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`  $\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[1]}${r[2]}}=\\ldots$`,i=`On utilise la relation de Chasles       :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[0]}${r[1]}}\\underbrace{-\\overrightarrow{${r[3]}${r[2]}}}_{+\\overrightarrow{${r[2]}${r[3]}}}+\\overrightarrow{${r[1]}${r[2]}}
        &=  \\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[0]}${o(r[1])}}+
        \\overrightarrow{${o(r[1])}${r[2]}}}_{\\overrightarrow{${r[0]}${r[2]}}}+
        \\overrightarrow{${r[2]}${r[3]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[0]}${o(r[2])}}+
        \\overrightarrow{${o(r[2])}${r[3]}}}_{\\overrightarrow{${r[0]}${r[3]}}}\\\\
        &=\\overrightarrow{${r[0]}${r[3]}}
        \\end{aligned}$
        `);break;case 3:a=n(["a","b","c","d"]),a==="a"&&(e=`$\\overrightarrow{${r[3]}${r[4]}}+\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[4]}${r[3]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$\\overrightarrow{${r[5]}${r[0]}}$ `,statut:!0},{texte:"$\\overrightarrow{0}$ ",statut:!1},{texte:`$2${s(1)}\\overrightarrow{${r[4]}${r[3]}}$ `,statut:!1}]},$=h(this,t),this.interactif?e+=$.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[3]}${r[4]}}+\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[4]}${r[3]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`   $\\overrightarrow{${r[3]}${r[4]}}+\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[4]}${r[3]}}=\\ldots$`,i=`On utilise la relation de Chasles :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[3]}${r[4]}}+\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[4]}${r[3]}}
        &=\\underbrace{\\overrightarrow{${r[3]}${o(r[4])}}+\\overrightarrow{${o(r[4])}${r[3]}}}_{\\overrightarrow{${r[3]}${r[3]}}}+\\overrightarrow{${r[5]}${r[0]}}\\\\
&= \\overrightarrow{0}+\\overrightarrow{${r[5]}${r[0]}}\\\\
&= \\overrightarrow{${r[5]}${r[0]}}
        \\end{aligned}$
        `),a==="b"&&(e=`$\\overrightarrow{${r[2]}${r[0]}}+\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[0]}${r[3]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:"$\\overrightarrow{0}$ ",statut:!0},{texte:`$2${s(1)}\\overrightarrow{${r[0]}${r[2]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[2]}${r[3]}}$ `,statut:!1}]},$=h(this,t),this.interactif?e+=$.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[2]}${r[0]}}+\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[0]}${r[3]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`    $\\overrightarrow{${r[2]}${r[0]}}+\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[0]}${r[3]}}=\\ldots$`,i=`On utilise la relation de Chasles       :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[2]}${r[0]}}+\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[0]}${r[3]}}
        &=  \\underbrace{\\overrightarrow{${r[2]}${o(r[0])}}+\\overrightarrow{${o(r[0])}${r[3]}}}_{\\overrightarrow{${r[2]}${r[3]}}}+\\overrightarrow{${r[3]}${r[2]}}\\\\
        &=  \\underbrace{\\overrightarrow{${r[2]}${o(r[3])}}+\\overrightarrow{${o(r[3])}${r[2]}}}_{\\overrightarrow{${r[2]}${r[2]}}}\\\\
        &=\\overrightarrow{${r[2]}${r[2]}}\\\\
        &=\\overrightarrow{0}
        \\end{aligned}$
        `),a==="c"&&(e=`$\\overrightarrow{${r[4]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[4]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$2${s(1)}\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!0},{texte:"$\\overrightarrow{0}$ ",statut:!1},{texte:`$\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!1}]},$=h(this,t),this.interactif?e+=$.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[4]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[4]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`    $\\overrightarrow{${r[4]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[4]}}=\\ldots$`,i=`On utilise la relation de Chasles       :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[4]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[4]}}
        &= \\underbrace{\\overrightarrow{${r[0]}${o(r[4])}}+\\overrightarrow{${o(r[4])}${r[1]}}}_{\\overrightarrow{${r[0]}${r[1]}}}+\\overrightarrow{${r[0]}${r[1]}}\\\\
        &=  \\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}\\\\
        &=  2\\overrightarrow{${r[0]}${r[1]}}
        \\end{aligned}$
        `),a==="d"&&(e=`$\\overrightarrow{${r[6]}${r[1]}}-\\overrightarrow{${r[6]}${r[0]}}+\\overrightarrow{${r[1]}${r[0]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:"$\\overrightarrow{0}$ ",statut:!0},{texte:`$2${s(1)}\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[0]}}$ `,statut:!1}]},$=h(this,t),this.interactif?e+=$.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[6]}${r[1]}}-\\overrightarrow{${r[6]}${r[0]}}+\\overrightarrow{${r[1]}${r[0]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`   $\\overrightarrow{${r[6]}${r[1]}}-\\overrightarrow{${r[6]}${r[0]}}+\\overrightarrow{${r[1]}${r[0]}}=\\ldots$`,i=`On utilise la relation de Chasles       :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[6]}${r[1]}}\\underbrace{-\\overrightarrow{${r[6]}${r[0]}}}_{+\\overrightarrow{${r[0]}${r[6]}}}+\\overrightarrow{${r[1]}${r[0]}}
        &=\\overrightarrow{${r[6]}${r[1]}}+\\overrightarrow{${r[0]}${r[6]}}+\\overrightarrow{${r[1]}${r[0]}}\\\\
        &= \\underbrace{\\overrightarrow{${r[1]}${o(r[0])}}+\\overrightarrow{${o(r[0])}${r[6]}}}_{\\overrightarrow{${r[1]}${r[6]}}}+\\overrightarrow{${r[6]}${r[1]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[1]}${o(r[6])}}+\\overrightarrow{${o(r[6])}${r[1]}}}_{\\overrightarrow{${r[1]}${r[1]}}}\\\\
        &=\\overrightarrow{${r[1]}${r[1]}}\\\\
        &=\\overrightarrow{0}
        \\end{aligned}$
        `);break}this.questionJamaisPosee(t,r,v)&&(this.listeQuestions[t]=e,this.listeCorrections[t]=i,this.canEnonce=e,this.canReponseACompleter=$.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),t++),g++}l(this)}}export{k as dateDeModifImportante,P as dateDePublication,T as default,Q as interactifReady,D as interactifType,q as refs,O as titre,y as uuid};
