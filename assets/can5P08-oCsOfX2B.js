import{c as $}from"./style-CcGLZIPY.js";import{K as l}from"./Exercice-DtXhjCyI.js";import{a as n,r as o,F as m,m as u}from"./embellissements-BYV7mIDn.js";import h from"./ExerciceSimple-CWWOU0FG.js";import"decimal.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const S="Résoudre un problème de proportionnalité**",R=!0,P="mathLive",F=!0,Q="AMCNum",K="19/07/2022",B="c3a01",M={"fr-fr":["can5P08"],"fr-ch":[]};class N extends h{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=l.clavierDeBaseAvecFraction}nouvelleVersion(){let r,s,c,e,t,i,a,p;const d=[["poires"],["melons"],["tomates"],["pommes"],["framboises"],["fraises"],["citrons"],["bananes"]],f=[["pastèques","pastèque"],["melons","melon"],["potimarrons","potimarron"],["citrouilles","citrouille"]];switch(n([1,2])){case 1:p=n(["a","b"]),p==="a"?(r=o(7,14,10),s=r-o(1,3),c=n(d),a=new m(5*s,r),this.question=`$5$ kg de ${c[0]} coûtent $${$(r)}$ €.<br>

        Quelle masse de ${c[0]} faut-il acheter pour payer $${$(s)}$ € ?<br>
        
        Donner la valeur exacte de cette masse.`,this.interactif&&(this.optionsChampTexte={texteApres:" kg"}),this.correction=`La masse que l'on peut acheter avec $1$ € est $\\dfrac{5}{${r}}$ kg. <br>
        Ainsi, pour payer $${$(s)}$ €, il faut acheter $\\dfrac{5\\times ${s}}{${r}}=${u(`\\dfrac{ ${5*s}}{${r}}`)}${a.texSimplificationAvecEtapes(!0,"#f15929")}$ kg.
       
        `):(r=o(5,14,[6,9,12]),s=r-o(1,3),c=n(d),a=new m(3*s,r),this.question=`$3$ ${c[0]} coûtent $${$(r)}$ €.<br>
        Quelle masse de ${c[0]} faut-il acheter pour payer $${$(s)}$ € ?<br>
        Donner la valeur exacte de cette masse.`,this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:"kg"}),this.correction=`La masse que l'on peut acheter avec $1$ € est $\\dfrac{3}{${r}}$ kg. <br>
        Ainsi, pour payer $${$(s)}$ €, il faut acheter $\\dfrac{3\\times ${s}}{${r}}=${u(`\\dfrac{ ${3*s}}{${r}}`)}${a.texSimplificationAvecEtapes(!0,"#f15929")}$ kg.
       
        `),this.reponse=a,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ kg";break;case 2:p=n(["a","b","c"]),p==="a"?(t=o(5,14,[6,9,12]),i=t-o(1,2),e=n(f),a=new m(3*i,t),this.question=`$3$ ${e[0]} (identiques) ont une masse $${t}$ kg.<br>

      Combien faut-il acheter de  ces mêmes ${e[0]} pour totaliser une masse de $${i}$ kg ? <br>

      Donner la valeur exacte de ce nombre.`,this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:`  de ${e[0]}.`}),this.correction=`La quantité de ${e[0]} par kg est $\\dfrac{3}{${t}}$ de ${e[1]}. <br>
      Ainsi, pour obtenir une masse de $${$(i)}$ kg, il faut acheter $\\dfrac{3\\times ${i}}{${t}}=${u(`\\dfrac{ ${3*i}}{${t}}`)}${a.texSimplificationAvecEtapes(!0,"#f15929")}$ de ${e[0]}.
      `):p==="b"?(t=o(3,7),i=t-1,e=n(f),a=new m(2*i,t),this.question=`$2$ ${e[0]} (identiques) ont une masse de $${t}$ kg.<br>
        Combien faut-il acheter  de ces mêmes ${e[0]} pour totaliser une masse de $${i}$ kg ? <br>
        Donner la valeur exacte de ce nombre.`,this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:`  de ${e[0]}.`}),this.correction=`La quantité de ${e[0]} par kg est $\\dfrac{2}{${t}}$ de ${e[1]}. <br>
        Ainsi, pour obtenir une masse de $${$(i)}$ kg, il faut acheter $\\dfrac{2\\times ${i}}{${t}}=${u(`\\dfrac{ ${2*i}}{${t}}`)}${a.texSimplificationAvecEtapes(!0,"#f15929")}$ de ${e[0]}.
        `):(t=o(9,14,10),i=t-o(1,4),e=n(f),a=new m(5*i,t),this.question=`$5$ ${e[0]} (identiques) ont une masse de $${t}$ kg.<br>
            Combien faut-il acheter de  ces mêmes ${e[0]} pour totaliser une masse de $${i}$ kg ? <br>
            Donner la valeur exacte de ce nombre.`,this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:`  de ${e[0]}.`}),this.correction=`La quantité de ${e[0]} par kg est $\\dfrac{5}{${t}}$ de ${e[1]}. <br>
            Ainsi, pour obtenir une masse de $${$(i)}$ kg, il faut acheter $\\dfrac{2\\times ${i}}{${t}}=${u(`\\dfrac{ ${5*i}}{${t}}`)}${a.texSimplificationAvecEtapes(!0,"#f15929")}$ de ${e[0]}.
            `),this.reponse=a,this.canEnonce=this.question,this.canReponseACompleter=`$\\ldots$ de ${e[0]}`;break}}}export{F as amcReady,Q as amcType,K as dateDePublication,N as default,R as interactifReady,P as interactifType,M as refs,S as titre,B as uuid};
