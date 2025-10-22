import{r as c,_ as m,a as p,e as t,m as u}from"./embellissements-BYV7mIDn.js";import d from"./ExerciceSimple-CWWOU0FG.js";import{K as l}from"./Exercice-DtXhjCyI.js";import{b as h}from"./colors-bl7PrqSM.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const N="Additionner astucieusement",R=!0,K="mathLive",w=!0,B="AMCNum",D="25/10/2023",L="792c3",O={"fr-fr":["can6C47"],"fr-ch":[]};class P extends d{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=l.clavierNumbers}nouvelleVersion(){const o=c(2,4)*100,$=c(1,2)*100,r=c(1,5)*5,s=o-r,i=c(1,$),n=$-i,e=c(1,40),a=m("Mentalement : <br>On regroupe astucieusement les termes pour les additionner plus simplement. <br><br><br>",h);switch(p([1,2,3,4])){case 1:this.reponse=o+e,this.question=`Calculer $${t(r,0)} + ${t(e,0)} + ${t(s,0)}$.`,this.correction=`${a}`,this.correction+=`$\\begin{aligned}     
        ${r} + ${e}+ ${s}  
        &= \\underbrace{${r}+${s}}_{${r+s}} + ${e} \\\\ 
        &= ${o}+ ${e}\\\\
        &=${u(this.reponse)}
        \\end{aligned}$`;break;case 2:this.reponse=$+e,this.question=`Calculer  $${t(i,0)} + ${t(e,0)} + ${t(n,0)}$.`,this.correction=`${a}`,this.correction+=`$\\begin{aligned}     
        ${i} + ${e} + ${n}  
        &= \\underbrace{${i}+${n}}_{${i+n}}+ ${e} \\\\ 
        &= ${$}+ ${e}\\\\
        &=${u(this.reponse)}
        \\end{aligned}$`;break;case 3:this.reponse=o+$+e,this.question=`Calculer $${t(r,0)} + ${t(i,0)} + ${t(s,0)} + ${t(n,0)} + ${t(e,0)}$.`,this.correction=`${a}`,this.correction+=`$\\begin{aligned}     
        ${r} + ${i} + ${s} + ${n} + ${e} 
        &= \\underbrace{${r}+${s}}_{${r+s}} + \\underbrace{${i}+${n}}_{${i+n}}+ ${e} \\\\ 
        &= ${o} + ${$}+ ${e}\\\\
        &=${u(this.reponse)}
        \\end{aligned}$`;break;case 4:this.reponse=o+$+e,this.question=`Calculer $${t(s,0)} + ${t(i,0)} + ${t(e,0)} + ${t(n,0)} + ${t(r,0)}$.`,this.correction=`${a}`,this.correction+=`$\\begin{aligned}     
        ${s} + ${i} + ${e} + ${n} + ${r} 
        &= \\underbrace{${s}+${r}}_{${r+r}} + \\underbrace{${i}+${n}}_{${i+n}}+ ${e} \\\\ 
        &= ${o} + ${$}+ ${e}\\\\
        &=${u(this.reponse)}
        \\end{aligned}$`;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{w as amcReady,B as amcType,D as dateDePublication,P as default,R as interactifReady,K as interactifType,O as refs,N as titre,L as uuid};
