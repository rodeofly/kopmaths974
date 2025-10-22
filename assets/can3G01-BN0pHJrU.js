import{a as r,r as i}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const x="Calculer et utiliser un agrandissement/réduction",f=!0,k="mathLive",A=!0,C="AMCNum",v="dcc68",y={"fr-fr":["can3G01"],"fr-ch":[]};class T extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,s,t;switch(r(["a","b","c","c"])){case"a":e=i(2,10),this.question=`Les longueurs d'un triangle sont multipliées par $${e}$.<br>

        Par quelle valeur est multipliée son aire ?
        `,this.optionsChampTexte={texteApres:""},this.reponse=e*e,this.correction=` Si les longueurs sont multiplées par $k$, les aires sont multipliées par $k^2$, soit ici par $${e}^2=${e**2}$.<br>
        `;break;case"b":e=i(2,10),s=e*e,this.question=`L'aire d'un quadrilatère a été multipliée par $${s}$.<br>

        Par quelle valeur ont été multipliées les longueurs de ce quadrilatère ?
        `,this.optionsChampTexte={texteApres:""},this.reponse=e,this.correction=` Si les aires sont multiplées par $k$, les longueurs sont multipliées par $\\sqrt{k}$, soit ici par $\\sqrt{${s}}=${e}$.<br>
        `;break;case"c":e=i(2,4),t=i(2,4),this.question=`Les longueurs d'un rectangle de $${e}$ cm$^2$  sont multipliées par $${t}$.<br>

            Quelle est l'aire du rectangle ainsi obtenu ?        `,this.optionsChampTexte={texteApres:" cm$^2$"},this.reponse=e*t*t,this.correction=` Si les longueurs sont multiplées par $k$, les aires sont multipliées par $k^2$, soit ici par $${t}^2=${t**2}$.<br>
            Ainsi, l'aire du nouveau rectangle est : $${e}\\times ${t*t}=${e*t*t}$ cm$^2$.
    `;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{A as amcReady,C as amcType,T as default,f as interactifReady,k as interactifType,y as refs,x as titre,v as uuid};
