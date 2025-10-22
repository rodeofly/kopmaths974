import{af as u,r as n,e as s,l}from"./embellissements-BYV7mIDn.js";import{E as c}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const E="Proportion d'une sous-population",q="25/06/2022",B="",D="86f71",N={"fr-fr":["techno1P2-2"],"fr-ch":[]};class k extends c{constructor(){super(),this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2}nouvelleVersion(){const p=u(["Basket","STMG"],this.nbQuestions);for(let o=0,i=0;o<this.nbQuestions&&i<50;){let e,t,r="",a="";switch(p[o]){case"Basket":e=n(200,1500)*2,t=n(50,e/2),r=`Parmi les $${e}$ spectateurs d’un match de basket-ball, $${t}$ ont moins de $20$ ans. Calculer la valeur approchée, arrondie au centième, de la proportion de spectateurs
          ayant moins de $20$ ans.`,a=`La population de référence est celle des spectateurs du match.<br>
           On note $N=${e}$ son effectif.<br>
          La sous-population étudiée est celle des spectateurs de moins de $20$ ans.<br>
           On note $n=${t}$ son effectif.<br>
          D'après le cours, on sait que la proportion d'une sous-population dans une population est :<br>
          <br>$p=\\dfrac{\\text{Effectif de la sous population}}{\\text{Effectif de la population de référence}}=\\dfrac{n}{N}=\\dfrac{${t}}{${e}}\\approx${s(t/e,2)}$<br>
          <br>La proportion de moins de $20$ ans parmi les spectateurs est environ de $p=${s(t/e,2)}$ ou encore $p=${s(t*100/e,0)}\\%$`;break;case"STMG":default:e=n(12,18)*2,t=n(18,e/2),r=`L’an passé, parmi les $${e}$ élèves de terminale STMG, $${t}$ ont obtenu une place en BTS ou en IUT.<br>
            Calculer la valeur approchée, arrondie au centième, de la proportion d'élèves de cette classe qui ont obtenu une place en BTS ou en IUT.
            `,a=`La population de référence est celle des élèves de Terminale STMG.<br>
             On note $N=${e}$ son effectif.<br>
            La sous-population étudiée est celle des bacheliers de cette classe qui ont obtenu une place en BTS ou en IUT.<br>
             On note $n=${t}$ son effectif.<br>
            D'après le cours, on sait que la proportion d'une sous-population dans une population est :<br>
            <br>$p=\\dfrac{\\text{Effectif de la sous population}}{\\text{Effectif de la population de référence}}=\\dfrac{n}{N}=\\dfrac{${t}}{${e}}\\approx${s(t/e,2)}$<br>
            <br>La proportion d'élèves qui ont obtenu une place en BTS ou en IUT dans cette classe est environ de $p=${s(t/e,2)}$ ou encore $p=${s(t*100/e,0)}\\%$`;break}this.questionJamaisPosee(o,e,t)&&(this.listeQuestions[o]=r,this.listeCorrections[o]=a,o++),i++}l(this)}}export{B as dateDeModifImportante,q as dateDePublication,k as default,N as refs,E as titre,D as uuid};
