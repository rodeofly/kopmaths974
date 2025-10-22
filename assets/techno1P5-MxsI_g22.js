import{a as o,r,d as s,e as i}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const q="Déterminer un effectif à partir d'une proportion",v=!0,A="mathLive",L=!0,g="AMCNum",D="5b5c0",O={"fr-fr":["techno1P5"],"fr-ch":[]};class k extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:" €"}}nouvelleVersion(){let n,t,e;switch(o(["association","lycée","election"])){case"association":t=r(3,80),n=r(20,50),e=r(20,100),this.question=`Dans une association,  environ $${t}\\%$ des adhérents ont plus de  de $${n}$ ans. <br>
       Sachant qu'ils représentent $${e}$ personnes, combien de personnes sont adhérentes à l'association ?<br>`,this.correction=`La population de référence est celle des membres du club.<br>
        La sous-population est celle des plus de $${n}$ ans,
        qui représente $p=${t}\\%$ des membres d'après l'énoncé. <br>
        Appellons $N$ l'effectif de la population de référence, c'est-à-dire le nombre d'adhérents de l'association,<br>
        et $n$ l'effectif de la sous population étudiée. On a donc $n=${e}$ .<br>
        D'après le cours, on sait que $p=\\dfrac{\\text{effectif étudié}}{\\text{effectif total}}=\\dfrac{n}{N}=\\dfrac{${e}}{N}$.
        <br><br>Ainsi,  $p=\\dfrac{${t}}{100}= \\dfrac{${e}}{N}$.<br>
        Avec un produit en croix, on en déduit que : $${t}\\times N= 100\\times ${e}$.<br>
        On en déduit que $N=\\dfrac{100\\times ${e}}{${t}}\\approx ${s(100*e/t,0)}$.<br>
      Il y a  $${s(100*e/t,0)}$ adhérents dans ce club.`,this.reponse=i(t*e/100,0);break;case"lycée":t=r(25,35),n=r(20,50),e=r(25,200),this.question=`Dans une lycée,  $${t}\\%$ des lycéens sont en classe de 1ère. <br>
            Sachant qu'il y a  $${e}$ élèves en classe de 1ère,
            déterminer le nombre total d'élèves de ce lycée ?`,this.correction=`La population de référence est celle des élèves du lycée.<br>
            La sous-population est celle des élèves de 1ère,
            qui représente $p=${t}\\%$ des membres d'après l'énoncé. <br>
            Appellons $N$ l'effectif de la population de référence, c'est-à-dire le nombre d'élèves du lycée,<br>
            et $n$ l'effectif de la sous population étudiée. On a donc $n=${e}$ .<br>
            D'après le cours, on sait que $p=\\dfrac{\\text{effectif étudié}}{\\text{effectif total}}=\\dfrac{n}{N}=\\dfrac{${e}}{N}$.
            <br><br>Ainsi,  $p=\\dfrac{${t}}{100}= \\dfrac{${e}}{N}$.<br>
            Avec un produit en croix, on en déduit que : $${t}\\times N= 100\\times ${e}$.<br>
            On en déduit que $N=\\dfrac{100\\times ${e}}{${t}}\\approx ${s(100*e/t,0)}$.<br>
          Il y a  $${s(100*e/t,0)}$ élèves dans ce lycée.`,this.reponse=i(t*e/100,0);break;case"election":t=r(20,40),n=r(20,50),e=r(10,70),this.question=`Lors d'une élection,  un candidat a obtenu environ $${t}\\%$ des suffrages exprimés, soit un total de $${e}$ voix.<br>
  Calculer le nombre de suffrages exprimés lors de cette élection.`,this.correction=`La population de référence est celle des suffrages exprimés.<br>
                La sous-population est celle des suffrages obtenus par le candidat.<br>
                d'après l'énoncé, $p_1=${t}\\%$.<br>
                Appellons $N$ l'effectif de la population de référence, c'est-à-dire le nombre suffrages exprimés,<br>
            et $n$ l'effectif de la sous population étudiée. On a donc $n=${e}$ .<br>
            D'après le cours, on sait que $p=\\dfrac{\\text{effectif étudié}}{\\text{effectif total}}=\\dfrac{n}{N}=\\dfrac{${e}}{N}$.
            <br><br>Ainsi,  $p=\\dfrac{${t}}{100}= \\dfrac{${e}}{N}$.<br>
            Avec un produit en croix, on en déduit que : $${t}\\times N= 100\\times ${e}$.<br>
            On en déduit que $N=\\dfrac{100\\times ${e}}{${t}}\\approx ${s(100*e/t,0)}$.<br>
          Il y a eu $${s(100*e/t,0)}$ suffrages exprimés lors de cette élection.`,this.reponse=i(t*e/100,0);break}}}export{L as amcReady,g as amcType,k as default,v as interactifReady,A as interactifType,O as refs,q as titre,D as uuid};
