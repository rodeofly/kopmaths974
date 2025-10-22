import{a as r,m as o,_ as s}from"./embellissements-BYV7mIDn.js";import n from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const E="Résoudre un problème de vitesse",k=!0,x="mathLive",C=!0,q="AMCNum",R="7374f",A={"fr-fr":["can4P02"],"fr-ch":[]};class L extends n{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=r([2,3,5,6,10]),i=60/e,t=r([30,60,90,120]);this.reponse=t/e,this.question=`Une voiture roule à $${t}$ km/h. <br>
    
    Combien de kilomètres parcourt-elle en $${i}$ minutes ?`,this.correction=`La voiture parcourt $${o(t/e)}$ km.`,this.correction+=s(`<br> Mentalement : <br>
    On cherche combien de "$${i}$ minutes" il y a dans $1$ heure soit $60$ minutes. Il y en a $${e}$,
    car $${e}\\times ${i}=60$.<br>
    Cela signifie qu'en $${i}$ minutes, elle parcourt $${e}$ fois moins de km qu'en $1$ heure, soit $\\dfrac{${t}}{${e}}=
    ${t/e}$ km.`,"blue"),this.canEnonce=this.question,this.canReponseACompleter=""}}export{C as amcReady,q as amcType,L as default,k as interactifReady,x as interactifType,A as refs,E as titre,R as uuid};
