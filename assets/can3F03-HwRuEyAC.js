import{K as f}from"./Exercice-DtXhjCyI.js";import{a as r,r as a,f as o,Y as m,F as s,m as p,e as c}from"./embellissements-BYV7mIDn.js";import l from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Calculer une image par une fonction affine",q=!0,j="mathLive",k=!0,A="AMCNum",T="23/07/2025",D="cf55d",L={"fr-fr":["can3F03"],"fr-ch":[]};class N extends l{constructor(){super(),this.optionsDeComparaison={fractionEgale:!0},this.nbQuestions=1,this.versionQcmDisponible=!0,this.typeExercice="simple",this.formatChampTexte=f.clavierDeBaseAvecFraction,this.optionsChampTexte={texteAvant:"<br> "}}nouvelleVersion(){let n,i,e,t,$;switch(this.versionQcm?r([2,3]):r([1,2,3])){case 1:i=a(-9,9,[0,1,-1]),e=r([2,4,5]),t=a(2,6,[e,e*2,e*3]),n=r(["f","g","h","u","v","w","p","m","t","k"]),this.question=`Soit $${n}$ la fonction définie par : $${n}(x)=${t}x+${e}$.<br>
        
        Quelle est l'image de $${i}$ par la fonction $${n}$ ?`,this.correction=`Comme $${n}(x)=${t}x+${e}$, on a  :<br>
         $\\begin{aligned}
         ${n}(${i})&=${t}\\times ${m(i)}+${e}\\\\
         &=${t*i}+${e}\\\\
         &=${p(t*i+e)}
         \\end{aligned}$`,this.reponse=t*i+e;break;case 2:i=a(-9,9,[0,1,-1]),e=r([2,3,5]),t=a(2,6,[e,e*2,e*3]),$=a(-9,9,[i,0]),n=r(["f","g","h","u","v","w","p","m","t","k"]),this.question=`Soit $${n}$ la fonction définie par : $${n}(x)=\\dfrac{${t}}{${e}}x${o($)}$.<br>        
            `,this.question+=this.versionQcm?`L'image de $${e*i}$ par la fonction $${n}$ est :`:`Quelle est l'image de $${e*i}$ par la fonction $${n}$ ?`,this.correction=`Comme $${n}(x)=\\dfrac{${t}}{${e}}x${o($)}$, on a :<br>
        $\\begin{aligned}
        ${n}(${e*i})&=\\dfrac{${t}}{${e}}\\times ${m(e*i)}${o($)}\\\\
        &=${t}\\times \\dfrac{${e*i}}{${e}}${o($)}\\\\
        &=${t*i}${o($)}\\\\
        &=${p(t*i+$)}
        \\end{aligned}$`,this.reponse=this.versionQcm?`$${c(t*i+$)}$`:t*i+$,this.distracteurs=[`$${new s(t*i,e*i).ajouteEntier($).texFractionSimplifiee}$`,`$${c(e*i+$)}$`,`$${c(t*e*i+$)}$`];break;case 3:e=r([2,3,5]),t=a(2,6,[e,e*2,e*3]),i=a(-5,5,[0,1,-1,e,-e,2*e,-2*e]),$=a(-5,5,[i,0]),n=r(["f","g","h","u","v","w","p","m","t","k"]),this.question=`Soit $${n}$ la fonction définie par : $${n}(x)=\\dfrac{${t}}{${e}}x${o($)}$.<br>         `,this.question+=this.versionQcm?`L'image de $${i}$ par la fonction $${n}$ est :`:`Quelle est l'image de $${i}$ par la fonction $${n}$ ?`,this.correction=`Comme $${n}(x)=\\dfrac{${t}}{${e}}x${o($)}$, on a :<br>
        $\\begin{aligned}
        ${n}(${i})&=\\dfrac{${t}}{${e}}\\times ${m(i)}${o($)}\\\\
        &=${new s(t*i,e).texFractionSimplifiee}${o($)}\\\\
        &=${p(`${new s(t*i,e).ajouteEntier($).texFractionSimplifiee}`)}
        \\end{aligned}$`,this.reponse=this.versionQcm?`$${new s(t*i,e).ajouteEntier($).texFractionSimplifiee}$`:`${new s(t*i,e).ajouteEntier($).texFractionSimplifiee}`,this.distracteurs=[`$${new s(t*i,e*i).ajouteEntier($).texFractionSimplifiee}$`,`$${new s(t,e).ajouteEntier(i+$).texFractionSimplifiee}$`,`$${c(t*i+$)}$`];break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{k as amcReady,A as amcType,T as dateDeModifImportante,N as default,q as interactifReady,j as interactifType,L as refs,y as titre,D as uuid};
