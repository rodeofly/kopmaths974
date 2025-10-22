import{cG as n,y as i,r as u,_ as o}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const q="Calculer un volume de pyramide",C=!0,A="mathLive",E=!0,L="AMCNum",M="f0128",P={"fr-fr":["can3M02"],"fr-ch":[]};class B extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:`cm${n(3)}`}}nouvelleVersion(){const s=i([3,u(2,8)*2,u(1,2)*5]),e=s[0],t=s[1],r=s[2];this.reponse=e*t*r/3,this.question=`Une pyramide a une hauteur de $${r}$ cm et pour base un rectangle de dimensions $${e}$ cm et $${t}$ cm.<br>
    
    Calculer son volume en cm${n(3)}.`,this.correction=`Le volume de cette pyramide est : $\\dfrac{1}{3} \\times ${e} \\times ${t} \\times ${r}=${this.reponse}$ cm${n(3)}`,r===3&&(this.correction+=o(`<br> Mentalement : <br>
    Le volume d'une pyramide est $\\dfrac{1}{3}\\times \\text{Aire(Base)}\\times \\text{Hauteur}$.<br>
    Puisque la base est un rectangle et que l'aire d'un rectangle est donnée par le produit de la longueur par la largeur, le volume est donc
    le produit des trois valeurs données par $\\dfrac{1}{3}$.<br>
    Comme l'une des trois longueur est $3$ et que $\\dfrac{1}{3}\\times 3=1$, on obtient le volume en multipliant les deux autres longueurs : $${e} \\times ${t}=${e*t}$.
      `)),e===3&&(this.correction+=o(`<br> Mentalement : <br>
    Le volume d'une pyramide est $\\dfrac{1}{3}\\times \\text{Aire(Base)}\\times \\text{Hauteur}$.<br>
    Puisque la base est un rectangle et que l'aire d'un rectangle est donnée par le produit de la longueur par la largeur, le volume est donc
    le produit des trois valeurs données par $\\dfrac{1}{3}$.<br>
    Comme l'une des trois longueur est $3$ et que $\\dfrac{1}{3}\\times 3=1$, on obtient le volume en multipliant les deux autres longueurs : $${t} \\times ${r}=${r*t}$.
      `)),t===3&&(this.correction+=o(`<br> Mentalement : <br>
    Le volume d'une pyramide est $\\dfrac{1}{3}\\times \\text{Aire(Base)}\\times \\text{Hauteur}$.<br>
    Puisque la base est un rectangle et que l'aire d'un rectangle est donnée par le produit de la longueur par la largeur, le volume est donc
    le produit des trois valeurs données par $\\dfrac{1}{3}$.<br>
    Comme l'une des trois longueur est $3$ et que $\\dfrac{1}{3}\\times 3=1$, on obtient le volume en multipliant les deux autres longueurs : $${e} \\times ${r}=${r*e}$.
      `)),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ cm$^3$"}}export{E as amcReady,L as amcType,B as default,C as interactifReady,A as interactifType,P as refs,q as titre,M as uuid};
