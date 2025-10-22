import{K as l}from"./Exercice-DtXhjCyI.js";import{a as r,r as a,F as c}from"./embellissements-BYV7mIDn.js";import u from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const Q="Résoudre un problème de proportionnalité*",T=!0,O="mathLive",y=!0,w="AMCNum",S="19/07/2022",R="afbda",F={"fr-fr":["can5P07"],"fr-ch":[]};class L extends u{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=l.clavierDeBaseAvecFraction}nouvelleVersion(){let e,t,i,n,s,$,o;const d=[["abricot"],["melon"],["tomate"],["pomme"],["fraise"],["citron"],["banane"]],p=[["pastèques","pastèque"],["melons","melon"],["potimarrons","potimarron"],["citrouilles","citrouille"]];switch(r([1,2])){case 1:o=r(["a","b","c"]),o==="a"?(e=a(4,7),t=e-1,i=r(d),$=new c(9*t,e),r([!0,!1])?this.question=`On paie  $9$ € pour $${e}$ kg de ${i[0]}s.<br>
       Quel est le prix de $${t}$ kg de ${i[0]}s ?<br>
        Donner la valeur exacte de ce prix.`:this.question=` $${e}$ kg de ${i[0]}s coûtent 9 €.<br>
        Quel est le prix de $${t}$ kg de ${i[0]}s ?<br>
         Donner la valeur exacte de ce prix.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"}),this.correction=`Un kg de ${i[0]} coûte $\\dfrac{9}{${e}}$ €.<br>
          On en déduit que $${t}$ kg de ${i[0]}s coûtent $\\dfrac{9\\times${t}}{${e}}=\\dfrac{${9*t}}{${e}}${$.texSimplificationAvecEtapes()}$ €.
       
        `):o==="b"?(e=a(3,5),t=e-1,i=r(d),$=new c(7*t,e),r([!0,!1])?this.question=`On paie  $7$ € pour $${e}$ kg de ${i[0]}s.<br>

          Quel est le prix de $${t}$ kg de ${i[0]}s ?<br>

           Donner la valeur exacte de ce prix.`:this.question=` $${e}$ kg de ${i[0]}s coûtent $7$ €.<br>

           Quel est le prix de $${t}$ kg de ${i[0]}s ?<br>

            Donner la valeur exacte de ce prix.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"}),this.correction=`Un kg de ${i[0]} coûte $\\dfrac{7}{${e}}$ €.<br>
             On en déduit que $${t}$ kg de ${i[0]}s coûtent $\\dfrac{7\\times${t}}{${e}}=\\dfrac{${7*t}}{${e}}${$.texSimplificationAvecEtapes()}$ €.
          
           `):(e=a(5,8),t=e-a(1,2),i=r(d),$=new c(11*t,e),r([!0,!1])?this.question=`On paie  $11$ € pour $${e}$ kg de ${i[0]}s.<br>

          Quel est le prix de $${t}$ kg de ${i[0]}s ?<br>

           Donner la valeur exacte de ce prix.`:this.question=` $${e}$ kg de ${i[0]}s coûtent $11$ €.<br>

           Quel est le prix de $${t}$ kg de ${i[0]}s ?<br>

            Donner la valeur exacte de ce prix.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"}),this.correction=`Un kg de ${i[0]} coûte $\\dfrac{11}{${e}}$ €.<br>
             On en déduit que $${t}$ kg de ${i[0]}s coûtent $\\dfrac{11\\times${t}}{${e}}=\\dfrac{${11*t}}{${e}}${$.texSimplificationAvecEtapes()}$ €.
          
           `),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €";break;case 2:o=r(["a","b"]),o==="a"&&(s=a(5,10,[6,9]),e=a(4,10),n=r(p),$=new c(e*s,3),this.question=`$3$ ${n[0]} (identiques) ont une masse $${s}$ kg.<br>

      Quelle est la masse de  $${e}$  de ces mêmes ${n[0]} ? <br>

      Donner la valeur exacte de ce nombre.`,this.interactif&&(this.optionsChampTexte={texteApres:"  kg"}),this.correction=`La masse de $1$ ${n[1]} est : $\\dfrac{${s}}{3}$ kg.<br>
          On en déduit que $${e}$ ${n[0]} ont une masse de $\\dfrac{${e}\\times${s}}{3}=\\dfrac{${e*s}}{3}${$.texSimplificationAvecEtapes()}$ kg.
      `),o==="b"&&(s=a(5,11,[6,8,10]),e=a(5,11,8),n=r(p),$=new c(e*s,4),this.question=`$4$ ${n[0]} (identiques) ont une masse $${s}$ kg.<br>

    Quelle est la masse de  $${e}$  de ces mêmes ${n[0]} ? <br>
    
    Donner la valeur exacte de ce nombre.`,this.interactif&&(this.optionsChampTexte={texteApres:"  kg"}),this.correction=`La masse de $1$ ${n[1]} est : $\\dfrac{${s}}{4}$ kg.<br>
        On en déduit que $${e}$ ${n[0]} ont une masse de $\\dfrac{${e}\\times${s}}{4}=\\dfrac{${e*s}}{4}${$.texSimplificationAvecEtapes()}$ kg.
    `),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ kg";break}this.reponse=$}}export{y as amcReady,w as amcType,S as dateDePublication,L as default,T as interactifReady,O as interactifType,F as refs,Q as titre,R as uuid};
