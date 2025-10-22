import{a as s,r as i,e as r,_ as $}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Diviser avec des décimaux",O=!0,q="mathLive",y=!0,M="AMCNum",k="4fc0e",E={"fr-fr":["can5C14"],"fr-ch":[]};class A extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,t;switch(s(["a","b","c","d"])){case"a":e=i(3,9)/10,t=i(2,9),this.question=`Calculer sous forme décimale $\\dfrac{${r(e*t)}}{${r(e)}}$.`,this.correction=`$\\dfrac{${r(e*t)}}{${r(e)}}=${r(e*t/e)}$. `,this.correction+=$(`<br> Mentalement : <br>
        On multiplie par $10$ le numérateur et le dénominateur pour avoir des nombres entiers.<br>
        $\\dfrac{${r(e*t)}}{${r(e)}}=\\dfrac{${r(e*t)}\\times 10}{${r(e)}\\times 10}=\\dfrac{${r(e*t*10)}}{${r(e*10)}}=${r(e*t/e)}$.
         `),this.reponse=e*t/e;break;case"b":e=i(3,9)/100,t=i(2,9),this.question=`Calculer sous forme décimale $\\dfrac{${r(e*t)}}{${r(e)}}$.
        `,this.correction=`$\\dfrac{${r(e*t)}}{${r(e)}}=${r(e*t/e)}$. `,this.correction+=$(`<br> Mentalement : <br>
        On multiplie par $100$ le numérateur et le dénominateur pour avoir des nombres entiers.<br>
        $\\dfrac{${r(e*t)}}{${r(e)}}
        =\\dfrac{${r(e*t)}\\times 100}{${r(e)}\\times 100}
        =\\dfrac{${r(e*t*100)}}{${r(e*100)}}
        =${r(e*t/e)}$. `),this.reponse=e*t/e;break;case"c":e=i(3,9)/100,t=i(2,9),this.question=`Calculer sous forme décimale $\\dfrac{${r(e*t)}}{${r(e*10)}}$.
        `,this.correction=`$\\dfrac{${r(e*t)}}{${r(e*10)}}=
        ${r(e*t/(10*e))}$. `,this.correction+=$(`<br> Mentalement : <br>
        $\\bullet$ On multiplie par $100$ le numérateur et le dénominateur pour avoir des nombres entiers.<br>
        $\\dfrac{${r(e*t)}}{${r(e*10)}}=\\dfrac{${r(e*t)}\\times 100}{${r(e*10)}\\times 100}
        =\\dfrac{${r(e*t*100)}}{${r(e*1e3)}}$.<br>
        $\\bullet$ On décompose $\\dfrac{${r(e*t*100)}}{${r(e*1e3)}}$ en un produit plus simple à calculer :<br>
        $\\dfrac{1}{10}\\times\\dfrac{${r(e*t*100)}}{${r(e*100)}}=
        0,1\\times${r(e*t*100/(e*100))}=
        ${r(e*t/(10*e))}$.  `),this.reponse=e*t/(e*10);break;case"d":e=i(3,9)/10,t=s([1,3,7,9]),this.question=`Calculer sous forme décimale $\\dfrac{${r(e*t)}}{${r(e*10)}}$.`,this.correction=`$\\dfrac{${r(e*t)}}{${r(e*10)}}=
        ${r(e*t/(10*e))}$. `,this.correction+=$(`<br> Mentalement : <br>
        $\\bullet$ On multiplie par $10$ le numérateur et le dénominateur pour avoir des nombres entiers.<br>
        $\\dfrac{${r(e*t)}}{${r(e*10)}}=\\dfrac{${r(e*t)}\\times 10}{${r(e*10)}\\times 10}=\\dfrac{${r(e*t*10)}}{${r(e*100)}}$
        <br>$\\bullet$ On décompose $\\dfrac{${r(e*t*10)}}{${r(e*100)}}$ en un produit plus simple à calculer :<br>
        $\\dfrac{1}{10}\\times\\dfrac{${r(e*t*10)}}{${r(e*10)}}=
        0,1\\times${r(e*t*10/(e*10))}=
        ${r(e*t/(10*e))}$. `),this.reponse=e*t/(e*10);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{y as amcReady,M as amcType,A as default,O as interactifReady,q as interactifType,E as refs,C as titre,k as uuid};
