import{K as n}from"./Exercice-DtXhjCyI.js";import{a as r,r as x,e as o}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const R="Calculer une somme de nombres avec des unités",q="05/11/2022",k=!0,v="mathLive",y="85e82",D={"fr-fr":["canc3M03"],"fr-ch":[]};class K extends c{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple",this.formatChampTexte=n.clavierDeBase}nouvelleVersion(){const $=["k","h","da","","d","c","m"],e=r(["g","m","L"]);let t;const s=x(1,9),i=x(1,19);switch(r([1,2,3])){case 1:t=x(0,5),r([!0,!1])?(this.question=`Compléter : <br>
        $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+1]}${e} }= ${this.interactif?"":`\\ldots \\text{ ${$[t+1]}${e}}`}$`,this.reponse=s*10+i,this.optionsChampTexte={texteApres:`$\\text{ ${$[t+1]}${e}}$`},this.correction=`$${s}\\text{ ${$[t]}${e} }=${s*10}\\text{ ${$[t+1]}${e} }$<br>
        Ainsi, $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+1]}${e} }
        = ${s*10}\\text{ ${$[t+1]}${e}}+${i}\\text{ ${$[t+1]}${e} }
        = ${s*10+i}\\text{ ${$[t+1]}${e}}$.`,this.canEnonce="Compléter. ",this.canReponseACompleter=`$${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+1]}${e} }= \\ldots \\text{ ${$[t+1]}${e}}$`):(this.question=`Compléter : <br>
        $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+1]}${e} }= ${this.interactif?"":`\\ldots \\text{ ${$[t]}${e}}`}$`,this.reponse=s+i/10,this.optionsChampTexte={texteApres:`$\\text{ ${$[t]}${e}}$`},this.correction=`$${i}\\text{ ${$[t+1]}${e} }=${o(i/10,1)}\\text{ ${$[t]}${e} }$<br>
        Ainsi, $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+1]}${e} }
        = ${s}\\text{ ${$[t]}${e}}+${o(i/10,1)}\\text{ ${$[t]}${e} }
        = ${o(s+i/10,1)}\\text{ ${$[t]}${e}}$.`,this.canEnonce="Compléter. ",this.canReponseACompleter=`$${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+1]}${e} }= \\ldots \\text{ ${$[t]}${e}}$`);break;case 2:t=x(0,4),r([!0,!1])?(this.question=`Compléter : <br>
            $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+2]}${e} }= ${this.interactif?"":`\\ldots \\text{ ${$[t+2]}${e}}`}$`,this.reponse=s*100+i,this.optionsChampTexte={texteApres:`$\\text{ ${$[t+2]}${e}}$`},this.correction=`$${s}\\text{ ${$[t]}${e} }=${s*100}\\text{ ${$[t+2]}${e} }$<br>
            Ainsi, $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+2]}${e} }
            = ${s*100}\\text{ ${$[t+2]}${e}}+${i}\\text{ ${$[t+2]}${e} }
            = ${s*100+i}\\text{ ${$[t+2]}${e}}$.`,this.canEnonce="Compléter. ",this.canReponseACompleter=`$${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+2]}${e} }= \\ldots \\text{ ${$[t+2]}${e}}$`):(this.question=`Compléter : <br>
            $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+2]}${e} }= ${this.interactif?"":`\\ldots \\text{ ${$[t]}${e}}`}$`,this.reponse=s+i/100,this.optionsChampTexte={texteApres:`$\\text{ ${$[t]}${e}}$`},this.correction=`$${i}\\text{ ${$[t+2]}${e} }=${o(i/100,2)}\\text{ ${$[t]}${e} }$<br>
            Ainsi, $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+2]}${e} }
            = ${s}\\text{ ${$[t]}${e}}+${o(i/100,2)}\\text{ ${$[t]}${e} }
            = ${o(s+i/100,2)}\\text{ ${$[t]}${e}}$.`,this.canEnonce="Compléter. ",this.canReponseACompleter=`$${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+2]}${e} }= \\ldots \\text{ ${$[t]}${e}}$`);break;case 3:t=x(0,3),r([!0,!1])?(this.question=`Compléter : <br>
                $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+3]}${e} }= ${this.interactif?"":`\\ldots \\text{ ${$[t+3]}${e}}`}$`,this.reponse=s*1e3+i,this.optionsChampTexte={texteApres:`$\\text{ ${$[t+3]}${e}}$`},this.correction=`$${s}\\text{ ${$[t]}${e} }=${s*1e3}\\text{ ${$[t+3]}${e} }$<br>
                Ainsi, $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+3]}${e} }
                = ${s*1e3}\\text{ ${$[t+3]}${e}}+${i}\\text{ ${$[t+3]}${e} }
                = ${s*1e3+i}\\text{ ${$[t+3]}${e}}$.`,this.canEnonce="Compléter. ",this.canReponseACompleter=`$${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+3]}${e} }= \\ldots \\text{ ${$[t+3]}${e}}$`):(this.question=`Compléter : <br>
                $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+3]}${e} }= ${this.interactif?"":`\\ldots \\text{ ${$[t]}${e}}`}$`,this.reponse=s+i/1e3,this.optionsChampTexte={texteApres:`$\\text{ ${$[t]}${e}}$`},this.correction=`$${i}\\text{ ${$[t+3]}${e} }=${o(i/1e3,3)}\\text{ ${$[t]}${e} }$<br>
                Ainsi, $${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+3]}${e} }
                = ${s}\\text{ ${$[t]}${e}}+${o(i/1e3,3)}\\text{ ${$[t]}${e} }
                = ${o(s+i/1e3,3)}\\text{ ${$[t]}${e}}$.`,this.canEnonce="Compléter. ",this.canReponseACompleter=`$${s}\\text{ ${$[t]}${e}}+${i}\\text{ ${$[t+3]}${e} }= \\ldots \\text{ ${$[t]}${e}}$`);break}}}export{q as dateDePublication,K as default,k as interactifReady,v as interactifType,D as refs,R as titre,y as uuid};
