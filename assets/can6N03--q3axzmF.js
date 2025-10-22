import{r as s,a as o,e,m as r}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const x="Déterminer un nombre à partir de son nombre de centaines, dizaines, unités",y=!0,N="mathLive",R=!0,k="AMCNum",v="01/07/2021",z="26/10/2024",A="1dbee",D={"fr-fr":["can6N03","6N1A-flash3"],"fr-ch":["NR"]};class M extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const i=s(2,30),t=s(2,30,i),n=s(2,30,[i,t]);switch(o([1,2,3])){case 1:this.reponse=i*100+t*10,this.question=`Écrire le nombre égal à $${i}$ centaines et $${t}$ dizaines.`,this.correction=`$\\begin{aligned}
        ${i} \\times 100 + ${t} \\times 10 &= ${e(i*100)} + ${t*10}\\\\
        &=${r(e(i*100+t*10))}
        \\end{aligned}$`;break;case 2:this.reponse=i*100+n,this.question=`Écrire le nombre égal à $${e(i)}$ centaines et $${e(n)}$ unités. `,this.correction=`$\\begin{aligned}
        ${e(i)} \\times 100 + ${e(n)}\\times 1 &=${e(i*100)}+${n}\\\\
        &= ${r(e(i*100+n))}
        \\end{aligned}$`;break;case 3:this.reponse=t*10+n,this.question=`Écrire le nombre égal à $${e(t)}$ dizaines et $${e(n)}$ unités. `,this.correction=`$\\begin{aligned}
        ${e(t)} \\times 10 + ${e(n)}\\times 1 &=${e(t*10)}+${n}\\\\
        &= ${r(e(t*10+n))}
        \\end{aligned}$`;break}this.interactif&&(this.question+="<br>"),this.canEnonce=this.question,this.canReponseACompleter=""}}export{R as amcReady,k as amcType,z as dateDeModifImportante,v as dateDePublication,M as default,y as interactifReady,N as interactifType,D as refs,x as titre,A as uuid};
