import{aP as c,a as g,s as i,m as $,l as v}from"./embellissements-BYV7mIDn.js";import{E as l}from"./Exercice-DtXhjCyI.js";import{p as s}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const k="Utiliser la relation de Chasles/réductions vectorielles",z=!0,Q="qcm",D="30/10/2021",P="03/01/2022",y="26f3b",q={"fr-fr":["can2G10"],"fr-ch":["NR"]};class N extends l{constructor(){super(),this.nbQuestions=1,this.spacing=2}nouvelleVersion(){let e,a,o;for(let t=0,n=0;t<this.nbQuestions&&n<50;){const r=c(6,["QD"]),h=g([1,2,3,4,5,6]);switch(h){case 1:e=`$\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[2]}${r[5]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$\\overrightarrow{${r[2]}${r[0]}}$ `,statut:!0},{texte:"$\\overrightarrow{0}$ ",statut:!1},{texte:`$\\overrightarrow{${r[0]}${r[5]}}$ `,statut:!1}]},o=s(this,t),this.interactif?e+=o.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
        $\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[2]}${r[5]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`$\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[2]}${r[5]}}=\\ldots$`,a=`On utilise la relation de Chasles :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[2]}${r[5]}}
        &=\\underbrace{\\overrightarrow{${r[2]}${$(r[5])}}+\\overrightarrow{${$(r[5])}${r[0]}}}_{\\overrightarrow{${r[2]}${r[0]}}}\\\\
        &=\\overrightarrow{${r[2]}${r[0]}}
        \\end{aligned}$
        `;break;case 2:e=`$\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[1]}${r[0]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$2${i(1)}\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!0},{texte:"$\\overrightarrow{0}$ ",statut:!1},{texte:`$2${i(1)}\\overrightarrow{${r[1]}${r[0]}}$ `,statut:!1}]},o=s(this,t),this.interactif?e+=o.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
        $\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[1]}${r[0]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`$\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[1]}${r[0]}}=\\ldots$`,a=`
            $\\begin{aligned}
            \\overrightarrow{${r[0]}${r[1]}}\\underbrace{-\\overrightarrow{${r[1]}${r[0]}}}_{+\\overrightarrow{${r[0]}${r[1]}}}
            &=\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}\\\\
            &=2${i(1)}\\overrightarrow{${r[0]}${r[1]}}
            \\end{aligned}$
            `;break;case 3:e=`$-\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[1]}${r[0]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$2${i(1)}\\overrightarrow{${r[1]}${r[0]}}$ `,statut:!0},{texte:"$\\overrightarrow{0}$ ",statut:!1},{texte:`$2${i(1)}\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!1}]},o=s(this,t),this.interactif?e+=o.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
        $-\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[1]}${r[0]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`$-\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[1]}${r[0]}}=\\ldots$`,a=`
            $\\begin{aligned}
            \\underbrace{-\\overrightarrow{${r[0]}${r[1]}}}_{+\\overrightarrow{${r[1]}${r[0]}}}+\\overrightarrow{${r[1]}${r[0]}}
            &=\\overrightarrow{${r[1]}${r[0]}}+\\overrightarrow{${r[1]}${r[0]}}\\\\
            &=2${i(1)}\\overrightarrow{${r[1]}${r[0]}}
            \\end{aligned}$
            `;break;case 4:e=`$-\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:"$\\overrightarrow{0}$ ",statut:!0},{texte:`$2${i(1)}\\overrightarrow{${r[1]}${r[0]}}$ `,statut:!1},{texte:`$2${i(1)}\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!1}]},o=s(this,t),this.interactif?e+=o.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
        $-\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`$-\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}=\\ldots$`,a=`
                $\\begin{aligned}
                \\underbrace{-\\overrightarrow{${r[0]}${r[1]}}}_{+\\overrightarrow{${r[1]}${r[0]}}}+\\overrightarrow{${r[0]}${r[1]}}
                &=\\underbrace{\\overrightarrow{${r[1]}${$(r[0])}}+\\overrightarrow{${$(r[0])}${r[1]}}}_{\\overrightarrow{${r[1]}${r[1]}}}\\\\
                &=\\overrightarrow{0}
                \\end{aligned}$
                `;break;case 5:e=`$\\overrightarrow{${r[4]}${r[1]}}-\\overrightarrow{${r[4]}${r[2]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:`$\\overrightarrow{${r[2]}${r[1]}}$ `,statut:!0},{texte:"$\\overrightarrow{0}$ ",statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[2]}}$ `,statut:!1}]},o=s(this,t),this.interactif?e+=o.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
        $\\overrightarrow{${r[4]}${r[1]}}-\\overrightarrow{${r[4]}${r[2]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`$\\overrightarrow{${r[4]}${r[1]}}-\\overrightarrow{${r[4]}${r[2]}}=\\ldots$`,a=`On utilise la relation de Chasles :<br>
            $\\begin{aligned}
            \\overrightarrow{${r[4]}${r[1]}}\\underbrace{-\\overrightarrow{${r[4]}${r[2]}}}_{+\\overrightarrow{${r[2]}${r[4]}}}
            &=\\underbrace{\\overrightarrow{${r[2]}${$(r[4])}}+\\overrightarrow{${$(r[4])}${r[1]}}}_{\\overrightarrow{${r[2]}${r[1]}}}\\\\
            &=\\overrightarrow{${r[2]}${r[1]}}
            \\end{aligned}$
            `;break;case 6:e=`$\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[1]}${r[0]}}=$`,this.autoCorrection[t]={enonce:e,options:{horizontal:!0},propositions:[{texte:"$\\overrightarrow{0}$ ",statut:!0},{texte:`$2${i(1)}\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!1}]},o=s(this,t),this.interactif?e+=o.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
        $\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[1]}${r[0]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=` $\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[1]}${r[0]}}=\\ldots$`,a=`
                $\\begin{aligned}
                \\underbrace{\\overrightarrow{${r[0]}${$(r[1])}}+\\overrightarrow{${$(r[1])}${r[0]}}}_{\\overrightarrow{${r[0]}${r[0]}}}
                                &=\\overrightarrow{${r[0]}${r[0]}}\\\\
                                &=\\overrightarrow{0}
                \\end{aligned}$
                `;break}this.questionJamaisPosee(t,r,h)&&(this.listeQuestions[t]=e,this.listeCorrections[t]=a,this.canEnonce=e,this.canReponseACompleter=o.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),t++),n++}v(this)}}export{P as dateDeModifImportante,D as dateDePublication,N as default,z as interactifReady,Q as interactifType,q as refs,k as titre,y as uuid};
