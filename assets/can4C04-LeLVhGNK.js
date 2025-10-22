import{r as $,y as o,Y as s,m as n}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const v="Utiliser la règle des signes",y=!0,O="mathLive",R=!0,S="AMCNum",x="a630a",A={"fr-fr":["can4C04"],"fr-ch":[]};class D extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let i=$(-5,5,[-1,0,1]);const a=$(-4,4,[-1,0,1,i]),r=$(2,3);i>0&&a>0&&(i=-i);const e=i*a*r,t=o([i,a,r]);switch($(0,2)){case 0:this.question=`$${t[0]}\\times ${s(t[1])}\\times$ ? $=${e}$.<br>

        ? $=$`,this.reponse=t[2],this.correction=`Comme le produit $${t[0]}\\times ${s(t[1])}$
        est ${t[0]*t[1]>0?"positif":"négatif"} et que le résultat est ${e>0?"positif":"négatif"} alors le facteur manquant est forcément ${t[2]>0?"positif":"négatif"}.<br>`,this.correction+=`De plus, comme $${Math.abs(t[0])}\\times ${Math.abs(t[1])}=
        ${Math.abs(t[0]*t[1])}$,
        on cherche le nombre qui multiplié par $${Math.abs(t[0]*t[1])}$ donne $${Math.abs(e)}$.
         C'est $${Math.abs(e)}\\div ${Math.abs(t[0]*t[1])}=${Math.abs(t[2])}$. <br>`,this.correction+=`On en déduit que le facteur manquant est : $${t[2]}$.<br> On a bien : $${t[0]}\\times ${s(t[1])}\\times ${n(String(s(t[2])))}=${e}$`,this.canEnonce=`$${t[0]}\\times ${s(t[1])}\\times$ ? $=${e}$.
      `,this.canReponseACompleter=" ? $=\\ldots $";break;case 1:this.question=`$${t[0]}\\times$ ? $\\times ${s(t[2])}=${e}$<br>

        ? $=$`,this.reponse=t[1],this.correction=`Comme le produit $${t[0]}\\times ${s(t[2])}$
        est ${t[0]*t[2]>0?"positif":"négatif"} et que le résultat est ${e>0?"positif":"négatif"} alors le facteur manquant est forcément ${t[1]>0?"positif":"négatif"}.<br>`,this.correction+=`De plus, comme $${Math.abs(t[0])}\\times ${Math.abs(t[2])}=${Math.abs(t[0]*t[2])}$,
        on cherche le nombre qui multiplié par $${Math.abs(t[0]*t[2])}$ donne $${Math.abs(e)}$.
        C'est $${Math.abs(e)}\\div ${Math.abs(t[0]*t[2])}=${Math.abs(t[1])}$. <br>`,this.correction+=`On en déduit que le facteur manquant est :
        $${t[1]}$. <br>On a bien : $${t[0]}\\times ${n(String(s(t[1])))} \\times ${s(t[2])}=${e}$. <br>`,this.canEnonce=`$${t[0]}\\times$ ? $\\times ${s(t[2])}=${e}$
      `,this.canReponseACompleter=" ? $=\\ldots $";break;case 2:this.question=`? $\\times ${s(t[1])}\\times ${s(t[2])}=${e}$<br>
        
        ? $=$`,this.reponse=t[0],this.correction=`Comme le produit $${t[1]}\\times ${s(t[2])}$ est ${t[1]*t[2]>0?"positif":"négatif"} et que le résultat est ${e>0?"positif":"négatif"} alors le facteur manquant est forcément ${t[0]>0?"positif":"négatif"}.<br>`,this.correction+=`De plus, comme $${Math.abs(t[1])}\\times ${Math.abs(t[2])}=${Math.abs(t[1]*t[2])}$,
        on cherche le nombre qui multiplié par $${Math.abs(t[1]*t[2])}$ donne $${Math.abs(e)}$.
        C'est $${Math.abs(e)}\\div ${Math.abs(t[1]*t[2])}=${Math.abs(t[0])}$. <br>`,this.correction+=`On en déduit que le facteur manquant est : $${t[0]}$. <br>On a bien : $${n(t[0])}\\times ${s(t[1])} \\times ${s(t[2])}=${e}$`,this.canEnonce=`? $\\times ${s(t[1])}\\times ${s(t[2])}=${e}$
      `,this.canReponseACompleter=" ? $=\\ldots $";break}}}export{R as amcReady,S as amcType,D as default,y as interactifReady,O as interactifType,A as refs,v as titre,x as uuid};
