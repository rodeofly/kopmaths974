import{a as c,r,e as n}from"./embellissements-BYV7mIDn.js";import l from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const P="Proportions de proportions",D=!0,A="mathLive",k=!0,B="AMCNum",Q="09/05/2023",I="f0c23",S={"fr-fr":["techno1P4"],"fr-ch":[]};class C extends l{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:" %"}}nouvelleVersion(){let o,e,s,p,t,a,$,i;switch(c(["association","lycee","lyceeBis","election","associationBis","electionBis"])){case"association":e=r(3,80),a=e/100,o=r(20,50),s=r(20,50),$=s/100,p=r(2,15),t=e*s/100,i=e*s/1e4,this.question=`Dans une association,  $${e}\\,\\%$ des adhérents ont plus de $${o}$ ans. <br>
        Parmi eux,   $${s}\\,\\%$ ont plus de $${p}$ années d'ancienneté.<br>
        Quel est le pourcentage d'adhérents de plus de $${o}$ ans ayant plus de $${p}$ années d'ancienneté dans cette association ?<br>`,this.correction=`La population de référence est celle des membres de l'association.<br>
        La première sous-population est celle des plus de $${o}$ ans,
        qui représente $p_1=${e}\\,\\%$ de la population de référence. <br>
        Dans cette sous-population, on sait que la population de ceux qui ont plus de $${p}$ années d'ancienneté représente $p_2=${s}\\,\\%$.<br>
        <br> D'après le cours, on calcule $p=p_1\\times p_2$, ce qui représente $${e}\\,\\%$ de $${s}\\,\\%$.<br>
      <br>Ainsi,  $p=${n(a)}\\times ${n($)}=${n(i,4)}$.<br>
      Il y a donc $${n(t,2)}\\,\\%$ d'adhérents de plus de $${o}$ ans ayant plus de $${o}$ années d'ancienneté.`,this.reponse=t.toFixed(2);break;case"associationBis":e=r(3,80),a=e/100,o=r(35,50),s=r(20,50),$=s/100,p=r(3,15),t=e*s/100,i=e*s/1e4,this.question=`Dans une association,  $${e}\\,\\%$ des adhérents ont plus de  $${o}$ ans. <br>
       On dénombre également dans cette association  $${n(t,2)}\\,\\%$ d'adhérents de  plus $${o}$ ans ayant plus de $${p}$ années d'ancienneté.<br>
       Parmi les adhérents de plus de $${o}$ ans, quel est le pourcentage de ceux qui ont plus de $${p}$ années d'ancienneté ?<br> `,this.correction=`La population de référence est celle des membres de l'association.<br>
        La première sous-population est celle des plus de $${o}$ ans,
        qui représente $p_1=${e}\\,\\%$ de la population de référence. <br>
        Dans cette sous-population, on note $p_2$ la proportion de ceux qui ont  plus de  $${p}$ années d'ancienneté.<br>
        La proportion $P$ des adhérents de  plus $${o}$ ans qui ont plus de $${p}$ ans d'ancienneté est $P=${n(t,2)}\\,\\%$.<br>
        <br> D'après le cours, on a $P=p_1\\times p_2$, ce qui donne  $${n(i,4)}=${n(a,2)}\\times p_2$<br>
        <br>Ainsi, $p_2=\\dfrac{${n(i,4)}}{${n(a,2)}}=${n($,4)}$.<br>
      Il y a donc $${n(s,2)}\\,\\%$ d'adhérents de plus de  $${p}$ ans d'ancienneté parmi les adhérents de plus de $${o}$ ans.`,this.reponse=s.toString();break;case"lycee":e=r(20,40),a=e/100,o=r(20,50),s=r(10,70),$=s/100,t=e*s/100,i=e*s/1e4,this.question=`Dans un lycée,  $${e}\\,\\%$ des lycéens sont en classe de première. <br>
            Parmi eux,   $${s}\\,\\%$ sont en filière technologique.<br>
            Quel est le pourcentage d'élèves en première technologique de ce lycée ?<br>`,this.correction=`La population de référence est celle des élèves du lycée.<br>
            La sous-population est celle des élèves de première et d'après l'énoncé, $p_1=${e}\\,\\%$.<br>
             Les élèves de 1ère technologique sont une sous-population des élèves de première, qui représente d'après l'énnoncé d'après l'énoncé, $p_2=${s}\\,\\%$. <br>
             <br>Pour connaitre la proportion $p$ des élèves de première technologique par rapport à la population de référence (les élèves du lycée), on calcule $p=p_1\\times p_2$, ce qui revient à calculer $${e}\\,\\%$ de $${s}\\,\\%$.<br>
             <br>Ainsi, $p=${n(e/100)}\\times ${n($,2)}=${n(i,4)}$.<br>
             Il y a $${n(t,2)}\\,\\%$ d'élèves de première technologique parmi les élèves du lycée.`,this.reponse=t.toFixed(2);break;case"lyceeBis":e=r(20,40),a=e/100,o=r(20,50),s=r(10,70),$=s/100,t=e*s/100,i=e*s/1e4,this.question=`Dans un lycée,  $${e}\\,\\%$ des lycéens sont en classe de première et  $${n(t,2)}\\,\\%$ des lycéens sont en première technologique.<br>
              Quel est le pourcentage d'élèves en première technologique parmi les élèves du lycée ?<br>`,this.correction=`La population de référence est celle des élèves du lycée.<br>
              La sous-population est celle des élèves de première et d'après l'énoncé, $p_1=${e}\\,\\%$.<br>
              Dans cette sous-population, on note $p_2$ la proportion des élèves en première technologique.<br>
              La proportion $P$ des élèves en première technologique parmi les élèves du lycée est $P=${n(t,2)}\\,\\%$.<br>
              <br> D'après le cours, on a $P=p_1\\times p_2$, ce qui donne  $${n(i,4)}=${n(a,2)}\\times p_2$<br>
              Ainsi, $p_2=\\dfrac{${n(i,4)}}{${n(a,2)}}=${n($,4)}$.<br>
              Il y a donc $${n(s,2)}\\,\\%$ des élèves de première en première technologique.`,this.reponse=s.toString();break;case"election":e=r(40,80),a=e/100,o=r(20,50),s=r(10,70),$=s/100,t=e*s/100,i=e*s/1e4,this.question=`Lors d'une élection,  la participation (suffrages exprimés) a été de $${e}\\,\\%$ des inscrits.<br>
               Un candidat a obtenu   $${s}\\,\\%$ des suffrages exprimés.<br>
                Quel est le pourcentage de voix obtenues par ce candidat par rapport au nombre d' inscrits ?<br>`,this.correction=`La population de référence est celle des inscrits sur les listes électorales.<br>
                La sous-population est celle des suffrages exprimés et d'après l'énoncé, $p_1=${e}\\,\\%$.<br>
                 Les suffrages du candidat sont une sous-population des suffrages exprimés, qui représentent d'après l'énoncé, $p_2=${s}\\,\\%$. <br>
                 <br>Pour connaitre le pourcentage de voix obtenues  par ce candidat par rapport aux nombre d'inscrits, on calcule $p=p_1\\times p_2$, ce qui revient à calculer $${e}\\,\\%$ de $${s}\\,\\%$.<br>
                 <br>Ainsi, $p=${n(a,2)}\\times ${n($,2)}=${n(i,4)}$.<br>
                Ce candidat a donc obtenu $${n(t,2)}\\,\\%$ des voix des inscrits.`,this.reponse=t.toFixed(2);break;case"electionBis":e=r(40,80),a=e/100,o=r(20,50),s=r(10,70),$=s/100,t=e*s/100,i=e*s/1e4,this.question=`Lors d'une élection,  la participation (suffrages exprimés) a été de $${e}\\,\\%$ des inscrits.<br>
        Un candidat a obtenu $${n(t,2)}\\,\\%$ de voix parmi les inscrits.<br>
                Quel est le pourcentage de voix obtenues par ce candidat par rapport aux suffrages exprimés ?<br>`,this.correction=`La population de référence est celle des inscrits sur les listes électorales.<br>
                La sous-population est celle des suffrages exprimés et d'après l'énoncé, $p_1=${e}\\,\\%$.<br>
Dans cette sous-population, on note $p_2$ la proportion des suffrages du candidat.<br>
La proportion $P$ des suffrages du candidat parmi les inscrits est $P=${n(t,2)}\\,\\%$.<br>
<br>D'après le cours, on a $P=p_1\\times p_2$, ce qui donne  $${n(i,4)}=${n(a,2)}\\times p_2$<br>
<br>Ainsi, $p_2=\\dfrac{${n(i,4)}}{${n(a,2)}}=${n($,4)}$.<br>
$${n(s,2)}\\,\\%$ des suffrages exprimés ont voté pour le candidat.`,this.reponse=s.toString();break}this.interactif&&(this.question+="<br>")}}export{k as amcReady,B as amcType,Q as dateDeModifImportante,C as default,D as interactifReady,A as interactifType,S as refs,P as titre,I as uuid};
