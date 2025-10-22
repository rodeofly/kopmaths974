import{K as p}from"./Exercice-DtXhjCyI.js";import{a as l,r as a,e as n,m as s,_ as c}from"./embellissements-BYV7mIDn.js";import{b as $}from"./colors-bl7PrqSM.js";import h from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const q="Déterminer le complément à 10, 100, 1000",A=!0,V="mathLive",k=!0,N="AMCNum",R="03/08/2025",K="cb93a",S={"fr-fr":["can6C62","canc3C23"],"fr-ch":[]};class j extends h{constructor(){super(),this.nbQuestions=1,this.formatChampTexte=p.clavierNumbers,this.typeExercice="simple",this.optionsDeComparaison={nombreDecimalSeulement:!0},this.optionsChampTexte={texteAvant:"<br>"}}nouvelleVersion(){switch(l([1,1,1,2,3,3,3,3])){case 1:{const e=a(11,89,[20,30,40,50,60,70,80]);this.question=`Calculer $100-${e}$.`,this.correction=`$100-${e}=${s(100-e)}$<br>`,this.reponse=100-e,this.correction+=c(`
    <br> Mentalement : <br><br>
    $${e} \\xrightarrow{+${10-e%10}} ${e+(10-e%10)} \\xrightarrow{+${100-(e+(10-e%10))}} 100$.
     `,$)}break;case 2:{const e=a(1,9);this.question=`Calculer $10-${e}$.`,this.correction=`$10-${e}=${s(10-e)}$<br>`,this.reponse=10-e,this.correction+=c(`
    <br> Mentalement : <br>
    pour calculer $10-${e}$, on peut penser : « Combien faut-il ajouter à $${e}$ pour obtenir $10$ ? » <br>
     $${10-e}$ car $${e}+${10-e}=10$. <br><br>
     `,$)}break;case 3:default:{const e=a(101,899,[200,300,400,500,600,700,800]);this.question=`Calculer $${n(1e3)}-${e}$.`,this.correction=`$${n(1e3)}-${e}=${s(1e3-e)}$<br>`,this.reponse=1e3-e;let o=`$${e}`,r=e;if(e%10!==0){const t=Math.ceil(e/10)*10,i=t-e;o+=` \\xrightarrow{+${i}} ${t}`,r=t}if(r%100!==0){const t=Math.ceil(r/100)*100,i=t-r;o+=` \\xrightarrow{+${i}} ${t}`,r=t}const m=1e3-r;o+=` \\xrightarrow{+${m}} ${n(1e3)}$.`,this.correction+=c(`
    <br> Mentalement : <br><br>
    ${o} <br><br>
     `,$)}break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{k as amcReady,N as amcType,R as dateDePublication,j as default,A as interactifReady,V as interactifType,S as refs,q as titre,K as uuid};
