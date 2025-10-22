import{aP as c,a as l,r as i,Y as s,m as o,_ as a}from"./embellissements-BYV7mIDn.js";import u from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Calculer une distance avec les coordonnées",M=!0,P="mathLive",C="b0d98",v={"fr-fr":["can2G05"],"fr-ch":[]};class R extends u{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,$,n,t;const r=c(2,"OPQD");switch(l(["a","a","b"])){case"a":e=i(1,6),$=i(1,6,e),n=i(1,6),t=i(1,6,$),(n-e)**2+(t-$)**2===1||(n-e)**2+(t-$)**2===4||(n-e)**2+(t-$)**2===9||(n-e)**2+(t-$)**2===16||(n-e)**2+(t-$)**2===25||(n-e)**2+(t-$)**2===36?(this.question=`Dans un repère du plan d'origine $O$, on donne $${r[0]}(${e}\\,;\\,${$})$ et $${r[1]}(${n}\\,;\\,${t})$.<br>
        Déterminer la longueur du segment $[${r[0]}${r[1]}]$.`,this.correction=`$${r[0]}${r[1]}=\\sqrt{(x_${r[1]}-x_${r[0]})^2+(y_${r[1]}-y_${r[0]})^2}=
          \\sqrt{(${n}-${s(e)})^2+(${t}-${s($)})^2}=
          \\sqrt{${(n-e)**2}+${(t-$)**2}}=\\sqrt{${(n-e)**2+(t-$)**2}}=
          ${o(`${Math.sqrt((n-e)**2+(t-$)**2)}`)}$<br><br>`,this.correction+=a(` Mentalement : <br>
          On calcule  $(${n}-${e})^2$ et $(${t}-${$})^2$, ce qui donne $${(n-e)**2}$ et $${(t-$)**2}$. <br>
          Puis on calcule la somme de ces nombres soit $${(n-e)**2}+${(t-$)**2}=${(n-e)**2+(t-$)**2}$.<br>
           Enfin, on en prend la racine carrée.`,"blue"),this.reponse=Math.sqrt((n-e)**2+(t-$)**2)):(this.question=`Dans un repère du plan d'origine $O$, on donne $${r[0]}(${e}\\,;\\,${$})$ et $${r[1]}(${n}\\,;\\,${t})$.<br>
        Déterminer la longueur du segment $[${r[0]}${r[1]}]$.`,this.correction=`$${r[0]}${r[1]}=
          \\sqrt{(x_${r[1]}-x_${r[0]})^2+(y_${r[1]}-y_${r[0]})^2}=
          \\sqrt{(${n}-${s(e)})^2+(${t}-${s($)})^2}=
          \\sqrt{${(n-e)**2}+${(t-$)**2}}=${o(`\\sqrt{${(n-e)**2+(t-$)**2}}`)}$<br><br>`,this.correction+=a(` Mentalement : <br>
          On calcule  $(${n}-${e})^2$ et $(${t}-${$})^2$, ce qui donne $${(n-e)**2}$ et $${(t-$)**2}$. <br>
          Puis on calcule la somme de ces nombres soit $${(n-e)**2}+${(t-$)**2}=${(n-e)**2+(t-$)**2}$.<br>
           Enfin, on en prend la racine carrée.<br>
            Comme $${(n-e)**2+(t-$)**2}$ n'est pas un carré parfait, on ne simplifie pas (la réponse doit être sous la forme $\\sqrt{a}$ ou d'un entier).
           `,"blue"),this.reponse=[`\\sqrt{${(n-e)**2+(t-$)**2}}`,`${Math.sqrt((n-e)**2+(t-$)**2)}`]),this.interactif&&(this.question+=`<br>$${r[0]}${r[1]}=$`),this.canEnonce=this.question,this.canReponseACompleter=`$${r[0]}${r[1]}=\\ldots$`;break;case"b":e=i(-5,5,0),$=i(-5,5,0),e**2+$**2===25?(this.question=`Dans un repère du plan d'origine $O$, on donne $${r[0]}(${e}\\,;\\,${$})$.<br>
        Déterminer la longueur du segment $[O${r[0]}]$. `,this.correction=`$O${r[0]}=\\sqrt{x_${r[0]}^2+y_${r[0]}^2}=
          \\sqrt{${s(e)}^2+${s($)}^2}
          =\\sqrt{${e**2}+${$**2}}
          =\\sqrt{${e**2+$**2}}=${o(`${Math.sqrt(e**2+$**2)}`)}$<br><br>`,this.correction+=a(` Mentalement : <br>
        On calcule  $${s(e)}^2$ et $${s($)}^2$, ce qui donne $${e**2}$ et $${$**2}$. <br>
        Puis on calcule la somme de ces nombres soit $${e**2}+${$**2}=${e**2+$**2}$.<br>
         Enfin, on en prend la racine carrée.<br>
          Comme $25$ est pas un carré parfait, on  simplifie.
         `,"blue"),this.reponse=Math.sqrt(e**2+$**2)):(this.question=`Dans un repère du plan d'origine $O$, on donne $${r[0]}(${e}\\,;\\,${$})$.<br>
        Déterminer la longueur du segment $[O${r[0]}]$.`,this.correction=`$O${r[0]}=\\sqrt{x_${r[0]}^2+y_${r[0]}^2}
          =\\sqrt{${s(e)}^2+${s($)}^2}
          =\\sqrt{${e**2}+${$**2}}=${o(`\\sqrt{${e**2+$**2}}`)}$<br><br>`,this.correction+=a(` Mentalement : <br>
        On calcule  $${s(e)}^2$ et $${s($)}^2$, ce qui donne $${e**2}$ et $${$**2}$. <br>
        Puis on calcule la somme de ces nombres soit $${e**2}+${$**2}=${e**2+$**2}$.<br>
         Enfin, on en prend la racine carrée.         
         `,"blue"),this.reponse=`\\sqrt{${e**2+$**2}}`,this.interactif&&(this.question+=`<br>$O${r[0]}=$`)),this.canEnonce=this.question,this.canReponseACompleter=`$O${r[0]}=\\ldots$`;break}}}export{R as default,M as interactifReady,P as interactifType,v as refs,y as titre,C as uuid};
