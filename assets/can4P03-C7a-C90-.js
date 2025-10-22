import{r as o,a,_ as n}from"./embellissements-BYV7mIDn.js";import s from"./ExerciceSimple-CWWOU0FG.js";import{b as i}from"./tableau-nuZmVTHQ.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./AjouteTableauMathlive-Bz24QHd3.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";/* empty css                   */const T="Calculer une quatrième proportionnelle",w=!0,N="mathLive",V=!0,_="AMCNum",j="709b6",z={"fr-fr":["can4P03"],"fr-ch":[]};class B extends s{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=o(1,6),r=o(4,8,e)*2,t=a([2,3,4,5]);switch(this.reponse=r*t,o(0,3)){case 0:this.question=`Compléter le tableau de proportionnalité.<br>
        
        `,this.question+=i({L0C0:{content:String(r),background:"lightgray"},L1C0:{content:""},L0C1:{content:String(e),background:"lightgray"},L1C1:{content:String(e*t),background:"lightgray"}},this.numeroExercice??0,0),this.question+=`<br>
        
        `,this.correction=`La quatrième proportionnelle est donnée par  : $\\dfrac{${e*t}\\times ${r}}{${e}}=\\dfrac{${e*r*t}}{${e}}=${r*t}$`,this.correction+=n(`<br> Mentalement : <br>
    Pour passer de la première ligne du tableau à la deuxième, on multiplie par
     $${t}$ car $${e}\\times ${t}=${e*t}$.<br>
     Ainsi, le nombre manquant est donné par : $${r}\\times ${t}=${r*t}$.`);break;case 1:this.question=`Compléter le tableau de proportionnalité.<br>
        
        `,this.question+=i({L0C0:{content:String(e),background:"lightgray"},L1C1:{content:""},L1C0:{content:String(r),background:"lightgray"},L0C1:{content:String(e*t),background:"lightgray"}},this.numeroExercice??0,0),this.question+=`<br>
        
        `,this.correction=`La quatrième proportionnelle est donnée par : $\\dfrac{${e*t}\\times ${r}}{${e}}=\\dfrac{${e*r*t}}{${e}}=${r*t}$`,this.correction+=n(`<br> Mentalement : <br>
        Pour passer de la première colonne du tableau à la deuxième, on multiplie par
         $${t}$ car $${e}\\times ${t}=${e*t}$.<br>
         Ainsi, le nombre manquant est donné par : $${r}\\times ${t}=${r*t}$.`);break;case 2:this.question=`Compléter le tableau de proportionnalité.<br>
        
        `,this.question+=i({L1C0:{content:String(r),background:"lightgray"},L0C0:{content:""},L1C1:{content:String(e),background:"lightgray"},L0C1:{content:String(e*t),background:"lightgray"}},this.numeroExercice??0,0),this.question+=`<br>
        
        `,this.correction=`La quatrième proportionnelle est donnée par : $\\dfrac{${e*t}\\times ${r}}{${e}}=\\dfrac{${e*r*t}}{${e}}=${r*t}$`,this.correction+=n(`<br> Mentalement : <br>
        Pour passer de la deuxième ligne du tableau à la première, on multiplie par
         $${t}$ car $${e}\\times ${t}=${e*t}$.<br>
         Ainsi, le nombre manquant est donné par : $${r}\\times ${t}=${r*t}$.`);break;case 3:this.question=`Compléter le tableau de proportionnalité.<br>
        
        `,this.question+=i({L0C0:{content:String(r),background:"lightgray"},L0C1:{content:""},L1C0:{content:String(e),background:"lightgray"},L1C1:{content:String(e*t),background:"lightgray"}},this.numeroExercice??0,0),this.question+=`<br>
        
        `,this.correction=`La quatrième proportionnelle est donnée par : $\\dfrac{${e*t}\\times ${r}}{${e}}=\\dfrac{${e*r*t}}{${e}}=${r*t}$`,this.correction+=n(`<br> Mentalement : <br>
        Pour passer de la première colonne du tableau à la deuxième, on multiplie par
         $${t}$ car $${e}\\times ${t}=${e*t}$.<br>
         Ainsi, le nombre manquant est donné par : $${r}\\times ${t}=${r*t}$.`);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{V as amcReady,_ as amcType,B as default,w as interactifReady,N as interactifType,z as refs,T as titre,j as uuid};
