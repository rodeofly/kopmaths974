import{a as n,r as s,at as $,Y as o,m as i,_ as a}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import{K as u}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Calculer la norme d’un vecteur",C=!0,E="mathLive",A="6/12/2021",M="18/05/2025",T="3a0e1",O={"fr-fr":["can2G13"],"fr-ch":[]};class K extends c{constructor(){super(),this.formatChampTexte=u.clavierFullOperations,this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let r,e,t;switch(n(["a"])){case"a":r=s(-9,9),e=s(-6,6,r),t=$(s(11,26,[15,24,25])),r**2+e**2===1||r**2+e**2===4||r**2+e**2===9||r**2+e**2===16||r**2+e**2===25||r**2+e**2===36||r**2+e**2===49||r**2+e**2===64||r**2+e**2===81||r**2+e**2===100?(this.question=`Dans un repère orthonormé du plan, on donne $\\overrightarrow{${t}}(${r};${e})$.<br>

        Déterminer la norme du vecteur $\\overrightarrow{${t}}$.<br>
        
        Donner le résultat sous la forme $\\sqrt{a}$ ou d'un nombre entier le cas échéant.`,this.optionsChampTexte={texteApres:"",texteAvant:"<br>"},this.correction=`D'après le cours, si $\\overrightarrow{u}(x;y)$ alors $\\| \\overrightarrow{u} \\|=\\sqrt{x^2+y^2}$. On a donc : <br><br>
          $ \\| \\overrightarrow{${t}} \\|=
          \\sqrt{${o(r)}^2+${o(e)}^2}=
          \\sqrt{${r**2}+ ${e**2}}=
          \\sqrt{${r**2+e**2}}=
          ${i(`${Math.sqrt(r**2+e**2)}`)}$.<br><br>`,this.correction+=a(`Comme $${r**2+e**2}$ est un carré parfait, on simplifie la racine carrée.`,"blue"),this.reponse=Math.sqrt(r**2+e**2)):(this.question=`Dans un repère orthonormé du plan, on donne $\\overrightarrow{${t}}(${r};${e})$.<br>
          Déterminer la norme du vecteur $\\overrightarrow{${t}}$.<br>
          (donner le résultat sous la forme $\\sqrt{a}$ ou d'un nombre entier le cas échéant)`,this.optionsChampTexte={texteApres:"",texteAvant:"<br>"},this.correction=`D'après le cours, si $\\overrightarrow{u}(x;y)$ alors $\\| \\overrightarrow{u} \\|=\\sqrt{x^2+y^2}$.<br><br>
          On a donc ici :<br><br>
          $\\| \\overrightarrow{${t}} \\| =
          \\sqrt{${o(r)}^2+${o(e)}^2}=
          \\sqrt{${r**2} + ${e**2}}=
          ${i(`\\sqrt{${r**2+e**2}}`)}$<br><br>`,this.correction+=a(`Comme $${r**2+e**2}$ n'est pas un carré parfait, on ne simplifie pas (la réponse doit être sous la forme $\\sqrt{a}$ ou d'un entier).<br>`,"blue"),this.reponse=[`\\sqrt{${r**2+e**2}}`,`${Math.sqrt(r**2+e**2)}`]);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{M as dateDeModifImportante,A as dateDePublication,K as default,C as interactifReady,E as interactifType,O as refs,y as titre,T as uuid};
