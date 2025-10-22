import{a as r,r as i,e as $,m as s,_ as n}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const f="Calculer un prix après une évolution en pourcentage",P=!0,Q="mathLive",M=!0,O="AMCNum",A="7487c",E={"fr-fr":["can5P01"],"fr-ch":[]};class C extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.versionQcmDisponible=!0,this.spacing=1.5,this.optionsChampTexte={texteApres:" €",texteAvant:"<br>"}}nouvelleVersion(){let e,t,a;switch(r(["a","b","c","d","e"])){case"a":e=i(4,13)*5,a=r(["pull","pantalon","tee-shirt","vêtement","blouson","sweat"]),t=r([10,20]),this.question=`Le prix d'un ${a} est $${e}$ €.<br>
       Il baisse de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="  Quel est son nouveau prix ? ",this.distracteurs=[`$${$(e+t*e/100,2)} $ €`,`$${$(e-t*e/1e3,2)} $ €`,`$${$(e-t/100,2)} $ €`],this.correction=`Le nouveau prix est de $${s($(e-t*e/100,2))} $ €.`,t===10?this.correction+=n(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de la réduction. <br>
    Prendre $10\\,\\,\\%$  d'une quantité revient à la diviser par $10$. <br>
    Ainsi, $${t}\\,\\,\\%$  de $${e}$ est égal à $${e}\\div 10=${$(e/10,2)}$.<br>
                 La réduction est donc de : $${$(t*e/100,2)}$ €.<br>
         Le nouveau prix est :   $${e}-${$(t*e/100,2)}= ${$(e-t*e/100,2)}$  €.
    
  `):this.correction+=n(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de la réduction. <br>
    Pour calculer $20\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
    par $10$ :<br> $10\\,\\%$ de $${e}$ est égal à $${e}\\div 10=${e/10}$.<br>
    Puisque $20\\,\\%$  est deux fois plus grand que $10\\,\\%$ ,  $20\\,\\%$  de $${e}$ est égal à $2\\times ${e/10}=${2*e/10}$.<br>
                    La réduction est donc de : $${$(t*e/100)}$ €.<br>
         Le nouveau prix est :   $${e}-${$(t*e/100)}= ${$(e-t*e/100)}$  €.`),this.reponse=this.versionQcm?`$${$(e-t*e/100)}$ €`:e-t*e/100;break;case"b":e=i(2,6)*10,a=r(["pull","pantalon","tee-shirt","vêtement","blouson","sweat"]),t=r([5,15]),this.question=`Le prix d'un ${a} est $${e}$ €.<br>
        Il baisse de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="  Quel est son nouveau prix ? ",this.distracteurs=[`$${$(e+t*e/100,2)} $ €`,`$${$(e-t*e/1e3,2)} $ €`,`$${$(e-t/100,2)} $ €`],this.correction=`
         Le nouveau prix est :  $ ${s($(e-t*e/100,2))} $ €.`,t===5?this.correction+=n(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de la réduction. <br>
    Pour calculer $5\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
    par $10$ :<br> $10\\,\\%$  de $${e}$ est égal à $${e}\\div 10=${$(e/10,2)}$.<br>
    Puisque $5\\,\\%$  est deux fois plus petit  que $10\\,\\%$ ,  $5\\,\\%$  de $${e}$ est égal à $ ${$(e/10,2)}\\div 2=${$(e/20,2)}$.<br>
                 La réduction est donc de : $${$(t*e/100,2)}$ €.<br>
         Le nouveau prix est :   $${e}-${$(t*e/100,2)}= ${$(e-t*e/100,2)}$  €.
    
  `):this.correction+=n(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de la réduction. <br>
    Pour calculer $15\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
    par $10$ :<br> $10\\,\\%$ de $${e}$ est égal à $${e}\\div 10=${e/10}$.<br>
    Puis on calcule $5\\,\\%$  de $${e}$ qui est égal à la moitié de $10\\,\\%$  de $${e}$, soit
    $${e/10}\\div 2=${e/20}$.<br>
    Puisque $15\\,\\%$  est égal à $10\\,\\%$  $+5\\,\\%$ ,  $15\\,\\%$  de $${e}$ est égal à $${e/10}+${e/20}=${3*e/20}$.<br>
                    La réduction est donc de : $${$(3*e/20)}$ €.<br>
         Le nouveau prix est :   $${e}-${$(t*e/100)}= ${$(e-t*e/100)}$  €.
    
`),this.reponse=this.versionQcm?`$${$(e-t*e/100,2)}$ €`:e-t*e/100;break;case"c":e=i(4,13)*5,a=r(["pull","pantalon","tee-shirt","vêtement","blouson"]),t=r([10,20]),this.question=`Le prix d'un ${a} est $${e}$ €.<br>
        Il augmente de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="  Quel est son nouveau prix ? ",this.distracteurs=[`$${$(e-t*e/100,2)} $ €`,`$${$(e+t*e/1e3,2)} $ €`,`$${$(e+t/100,2)} $ €`],this.correction=`
         Le nouveau prix est :  $ ${s($(e+t*e/100,2))} $ €.`,this.reponse=this.versionQcm?`$${$(e+t*e/100,2)}$ €`:e+t*e/100,t===10?this.correction+=n(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de l'augmentation. <br>
    Prendre $10\\,\\%$  d'une quantité revient à la diviser par $10$. <br>
    Ainsi, $${t}\\,\\%$ de $${e}$ est égal à $${e}\\div 10=${$(e/10,2)}$.<br>
                 L'augmentation est donc de : $${$(t*e/100,2)}$ €.<br>
         Le nouveau prix est :   $${e}+${$(t*e/100,2)}= ${s($(e+t*e/100,2))}$  €.
    
  `):this.correction+=n(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de l'augmentation. <br>
    Pour calculer $20\\,\\%$ d'une quantité, on commence par calculer $10\\,\\%$  en divisant
    par $10$ :<br> $10\\,\\%$  de $${e}$ est égal à $${e}\\div 10=${$(e/10)}$.<br>
    Puisque $20\\,\\%$  est deux fois plus grand que $10\\,\\%$ ,  $20\\,\\%$  de $${e}$ est égal à $2\\times ${e/10}=${2*e/10}$.<br>
                    L'augmentation est donc de : $${$(t*e/100)}$ €.<br>
         Le nouveau prix est :   $${e}+${$(t*e/100)}= ${s($(e+t*e/100))}$  €.
    
`);break;case"d":e=i(10,20)*1e3,t=i(1,5),this.question=`Le prix d'une voiture est $${$(e)}$ €.<br>
        Il augmente de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="Quel est son nouveau prix ? ",this.correction=`
         Le nouveau prix est : $ ${s($(e+t*e/100,2))} $ €.`,this.reponse=this.versionQcm?`$${$(e+t*e/100,2)}$ €`:e+t*e/100,this.distracteurs=[`$${$(e-t*e/100,2)} $ €`,`$${$(e+t*e/1e3,2)} $ €`,`$${$(e+t/100,2)} $ €`],t===1&&(this.correction+=n(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de l'augmentation. <br>
        Prendre $1\\,\\%$  d'une quantité revient à la diviser par $100$. <br>
        Ainsi, $${$(t,2)}\\,\\%$  de $${$(e,2)}$ est égal à $${$(e,2)}\\div 100=${$(e/100,2)}$.<br>
                     L'augmentation est donc de : $${$(t*e/100,2)}$ €.<br>
             Le nouveau prix est :   $${$(e,2)}+${$(t*e/100,2)}= ${$(e+t*e/100,2)}$  €.
        
      `)),t===5&&(this.correction+=n(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de l'augmentation. <br>
        Pour calculer $5\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
        par $10$ :<br> $10\\,\\%$  de $${$(e)}$ est égal à $${$(e)}\\div 10=${$(e/10)}$.<br>
        Puisque $5\\,\\%$  est deux fois plus petit  que $10\\,\\%$ ,  $5\\,\\%$  de $${$(e)}$ est égal à $ ${$(e/10)}\\div 2=${$(e/20)}$.<br>
                     L'augmentation est donc de : $${$(t*e/100)}$ €.<br>
             Le nouveau prix est :   $${$(e)}+${$(t*e/100)}= ${$(e+t*e/100)}$  €.
        
      `)),(t===2||t===3||t===4)&&(this.correction+=n(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de l'augmenattion. <br>
        Pour calculer $${$(t)}\\,\\%$  d'une quantité, on commence par calculer $1\\,\\%$  en divisant
        par $100$ :<br> $1\\,\\%$  de $${$(e)}$ est égal à $${$(e)}\\div 100=${$(e/100)}$.<br>
        Puisque $${$(t)}\\,\\%$  est $${t}$ fois plus grand que $1\\,\\%$ ,  $${$(t)}\\,\\%$  de $${$(e)}$ est égal à $${$(t)}\\times ${$(e/100)}=${$(t*e/100)}$.<br>
                        L'augmentation est donc de : $${$(t*e/100)}$ €.<br>
             Le nouveau prix est :   $${$(e)}+${$(t*e/100)}= ${$(e+t*e/100)}$  €.
        
    `));break;case"e":e=i(10,20)*1e3,t=i(1,5),this.question=`Le prix d'une voiture est $${$(e)}$ €.<br>
        Il baisse de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="  Quel est son nouveau prix ? ",this.optionsChampTexte={texteApres:"€"},this.correction=`
         Le nouveau prix est :   $ ${s($(e-t*e/100,2))} €.$`,this.distracteurs=[`$${$(e+t*e/100,2)} $ €`,`$${$(e-t*e/1e3,2)} $ €`,`$${$(e-t/100,2)} $ €`],this.reponse=this.versionQcm?`$${$(e-t*e/100,2)}$ €`:e-t*e/100,t===1&&(this.correction+=n(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de la réduction. <br>
        Prendre $1\\,\\%$  d'une quantité revient à la diviser par $100$. <br>
        Ainsi, $${t}\\,\\%$  de $${$(e,2)}$ est égal à $${$(e,2)}\\div 100=${$(e/100,2)}$.<br>
        La réduction est donc de : $${$(t*e/100,2)}$ €.<br>
             Le nouveau prix est :   $${$(e,2)}-${$(t*e/100,2)}= ${$(e-t*e/100,2)}$  €.
        
      `)),t===5&&(this.correction+=n(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de la réduction. <br>
        Pour calculer $5\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
        par $10$ :<br> $10\\,\\%$  de $${$(e,2)}$ est égal à $${$(e,2)}\\div 10=${$(e/10,2)}$.<br>
        Puisque $5\\,\\%$  est deux fois plus petit  que $10\\,\\%$ ,  $5\\,\\%$  de $${$(e)}$ est égal à $ ${$(e/10,2)}\\div 2=${$(e/20,2)}$.<br>
        La réduction est donc de : $${$(t*e/100,2)}$ €.<br>
             Le nouveau prix est :   $${$(e,2)}-${$(t*e/100,2)}= ${$(e-t*e/100,2)}$  €.
        
      `)),(t===2||t===3||t===4)&&(this.correction+=n(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de la réduction. <br>
        Pour calculer $${t}\\,\\%$  d'une quantité, on commence par calculer $1\\,\\%$  en divisant
        par $100$ :<br> $1\\,\\%$  de $${$(e)}$ est égal à $${$(e)}\\div 100=${$(e/100)}$.<br>
        Puisque $${t}\\,\\%$  est $${t}$ fois plus grand que $1\\,\\%$,  $${t}\\,\\%$  de $${$(e)}$ est égal à $${t}\\times ${e/100}=${t*e/100}$.<br>
        La réduction est donc de : $${$(t*e/100)}$ €.<br>
             Le nouveau prix est :   $${$(e)}-${$(t*e/100)}= ${$(e-t*e/100)}$  €.
        
    `));break}this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €"}}export{M as amcReady,O as amcType,C as default,P as interactifReady,Q as interactifType,E as refs,f as titre,A as uuid};
