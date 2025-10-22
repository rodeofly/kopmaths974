import{r as s,s as i,e as t,_ as n}from"./embellissements-BYV7mIDn.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Calculer une moyenne avec des décimaux",v=!0,E="mathLive",O=!0,R="AMCNum",q="debe7",A={"fr-fr":["can3C02"],"fr-ch":[]};class D extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){this.reponse=s(7,15);const o=s(4,this.reponse,[10,20])*10+s(1,9);let e,r;do e=s(o,this.reponse*30-o,[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]),(o+e)%10===0&&(e%10===1?e+=3:e-=1),r=this.reponse*30-o-e;while(e<0||r<0);this.question=`Calculer la moyenne des nombres :<br>
    
    $${i(8)}${t(o/10)}${i(8)}${t(e/10)}${i(8)}${t(r/10)}$`,this.correction=`La moyenne des trois nombres est : $\\dfrac{${t(o/10)}+${t(e/10)}+${t(r/10)}}{3}
    =\\dfrac{${t(o/10+e/10+r/10)}}{3}= ${this.reponse}$.`,this.correction+=n(`<br> Mentalement : <br>
    
    Pour faire la somme des trois nombres, <br>
    $\\bullet$ On commence par faire la somme de leurs unités :
    $${Math.floor(o/10)}+${Math.floor(e/10)}+${Math.floor(r/10)}
    =${t(Math.floor(o/10)+Math.floor(e/10)+Math.floor(r/10))}$.<br>
    $\\bullet$ Puis celle de leurs dixièmes :
    $${t(o/10-Math.floor(o/10))}+${t(e/10-Math.floor(e/10))}+${t(r/10-Math.floor(r/10))}=
    ${t(o/10-Math.floor(o/10)+e/10-Math.floor(e/10)+r/10-Math.floor(r/10))}$
    <br>
    $\\bullet$ On les additionne :
    $${t(Math.floor(o/10)+Math.floor(e/10)+Math.floor(r/10))}
    +${t(o/10-Math.floor(o/10)+e/10-Math.floor(e/10)+r/10-Math.floor(r/10))}=${t(o/10+e/10+r/10)}$
    <br>

    $\\bullet$ On divise par le nombre de valeurs (soit $3$) : $\\dfrac{${t(o/10+e/10+r/10)}}{3}= ${this.reponse}$  <br>
      `),this.canEnonce=this.question,this.canReponseACompleter=""}}export{O as amcReady,R as amcType,D as default,v as interactifReady,E as interactifType,A as refs,C as titre,q as uuid};
