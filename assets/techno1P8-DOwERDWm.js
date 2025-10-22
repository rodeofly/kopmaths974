import{t as a}from"./style-CcGLZIPY.js";import{af as b,r as s,m as l,e as i,l as f}from"./embellissements-BYV7mIDn.js";import{E as q}from"./Exercice-DtXhjCyI.js";import"decimal.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const I="Union et Intersection de proportions",P="26/06/2022",L="24/10/2021",g="1aad3",k={"fr-fr":["techno1P8"],"fr-ch":["3mP1-11"]};class w extends q{constructor(){super(),this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2}nouvelleVersion(){const $=b(["type1","type2"],this.nbQuestions);for(let n=0,e,t,o,r,u,p,d,c=0;n<this.nbQuestions&&c<50;){do e=s(22,80),t=s(10,e-10),o=s(10,e-10),r=s(3,Math.min(t,o)-1),u=t+o-r;while(u>e);switch(p=`Dans un club du 3ème age comprenant $${e}$ personnes, $${t}$ jouent à la belote régulièrement,
      $${o}$ jouent au tarot et $${r}$ d'entre eux pratiquent chacun des
      deux jeux de cartes. <br>`,$[n]){case"type1":p+=`Quelle est la proportion de personnes du club qui jouent  au tarot ${a("ou")} à la belote?`,d=`On note :<br>
          $\\quad\\bullet\\quad p_T$ la proportion de personnes du club qui jouent au tarot.<br>
          $\\quad\\bullet\\quad p_B$ la proportion de personnes du club qui jouent à la belote.<br>
          $\\quad\\bullet\\quad p_{T\\cup B}$ la proportion de personnes du club qui jouent au tarot ${a("ou")} à la belote.<br>
          $\\quad\\bullet\\quad p_{T\\cap B}$ la proportion de personnes du club qui jouent au tarot ${a("et")} à la belote.<br>
        La population de référence est l'ensemble des membres du club, son effectif est $${e}$.<br>
        <br>D'après le cours, pour calculer la proportion d'une sous-population dans une population, on calcule :<br>
        <br>$p=\\dfrac{\\text{effectif de la sous-population}}{\\text{effectif de la population de référence}}$<br>
        <br>On a donc :  $p_T=\\dfrac{${o}}{${e}}\\quad;\\quad p_B=\\dfrac{${t}}{${e}} \\quad;\\quad p_{T\\cap B}=\\dfrac{${r}}{${e}}$<br>
          On sait que  $p_{T\\cup B} = p_T + p_B -  p_{T\\cap B}$.<br>
         Ce qui revient, en appliquant les données de l'énoncé, à écrire :<br>
         $p_{T\\cup B} = \\dfrac{${o}}{${e}} +\\dfrac{${t}}{${e}}-\\dfrac{${r}}{${e}}=\\dfrac{${u}}{${e}} \\approx ${l(i(u/e,2))}$<br>
         Il y a donc environ $${l(i(100*u/e,0)+"\\%")}$ de personnes du club qui jouent à la belote et au tarot dans ce club.<br>
         `;break;case"type2":default:p+=`Quelle est la proportion de personnes du club qui jouent au tarot ${a("et")} à la belote ?`,d=`On note :<br>
          $\\quad\\bullet\\quad p_T$ la proportion de personnes du club qui jouent au tarot.<br>
          $\\quad\\bullet\\quad p_B$ la proportion de personnes du club qui jouent à la belote.<br>
          $\\quad\\bullet\\quad p_{T\\cup B}$ la proportion de personnes du club qui jouent au tarot ${a("ou")} à la belote.<br>
          $\\quad\\bullet\\quad p_{T\\cap B}$ la proportion de personnes du club qui jouent au tarot ${a("et")} à la belote.<br>
        La population de référence est l'ensemble des membres du club, son effectif est $${e}$.<br>
       <br>
        D'après le cours, pour calculer la proportion d'une sous-population dans une population, on calcule :<br>
        <br>$p=\\dfrac{\\text{effectif de la sous-population}}{\\text{effectif de la population de référence}}$<br>
        <br>On a donc :  $p_T=\\dfrac{${o}}{${e}}\\quad ; \\quad p_B=\\dfrac{${t}}{${e}}\\quad ; \\quad p_{T\\cup B}=\\dfrac{${u}}{${e}}$<br>
         On note
         On sait que  $p_{T\\cup B} = p_T + p_B -  p_{T\\cap B}$.<br>
         Ce qui revient, en appliquant les données de l'énoncé, à écrire :
         $ \\dfrac{${u}}{${e}}= \\dfrac{${o}}{${e}} +\\dfrac{${t}}{${e}} - p_{T\\cap B}$<br>
         $p_{T\\cap B}=\\dfrac{${o}}{${e}} +\\dfrac{${t}}{${e}}-\\dfrac{${u}}{${e}} =\\dfrac{${r}}{${e}} \\approx ${l(i(r/e,2))}$<br>
         Il y a donc environ $${l(i(100*r/e,0)+"\\%")}$  de personnes du club qui jouent à la belote et au tarot dans ce club.<br>
         `;break}this.questionJamaisPosee(n,e,t,o)&&(this.listeQuestions[n]=p,this.listeCorrections[n]=d,n++),c++}f(this)}}export{L as dateDeModifImportante,P as dateDePublication,w as default,k as refs,I as titre,g as uuid};
