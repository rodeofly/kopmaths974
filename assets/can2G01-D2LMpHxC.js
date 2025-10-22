import{a as r,F as n,m as o}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const x="Déterminer un agrandissement/réduction avec fraction",A=!0,E="mathLive",y=!0,v="AMCNum",F="4a666",R={"fr-fr":["can2G01"],"fr-ch":[]};class w extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const s=[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]];let e,t,i;switch(r(["a","b"])){case"a":i=r(s),e=i[0],t=i[1],this.question=`Les longueurs d'un triangle sont multipliées par $\\dfrac{${e}}{${t}}$.<br>
        
        Par quelle fraction est multipliée son aire  ?
        `,this.reponse=new n(e*e,t*t),this.correction=` Si les longueurs sont multiplées par $k$, les aires sont multipliées par $k^2$.<br>
        Ainsi, l'aire a été multipliée par : $\\left(\\dfrac{${e}}{${t}}\\right)^2=${o(`\\dfrac{${e*e}}{${t*t}}`)}$.
          `;break;case"b":i=r(s),e=i[0],t=i[1],this.question=`L'aire d'un parallélogramme a été multipliée par $\\dfrac{${e*e}}{${t*t}}$.<br>

        Par quelle fraction ont été multipliées les longueurs de ses côtés ?
        `,this.optionsChampTexte={texteApres:""},this.reponse=new n(e,t),this.correction=`Si les aires sont multiplées par $k$, les longueurs sont multipliées par $\\sqrt{k}$.<br>
        Ainsi, les longueurs ont été multipliées par  : $\\sqrt{\\dfrac{${e*e}}{${t*t}}}=${o(`\\dfrac{${e}}{${t}}`)}$.
    <br>`;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{y as amcReady,v as amcType,w as default,A as interactifReady,E as interactifType,R as refs,x as titre,F as uuid};
