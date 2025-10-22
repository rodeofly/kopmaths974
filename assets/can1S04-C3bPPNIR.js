import{a as s,r as o,f as d,l as m}from"./embellissements-BYV7mIDn.js";import{E as l}from"./Exercice-DtXhjCyI.js";import{p as u}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const R="Donner la nature d’une suite (formule de récurrence)",E=!0,z="qcm",L="16/02/2022",O="b119b",k={"fr-fr":["can1S04"],"fr-ch":[]};class w extends l{constructor(){super(),this.nbQuestions=1,this.spacing=1.5}nouvelleVersion(){let $,a,t,c,r,n;const e=s(["u","v","w"]);for(let i=0,p=0;i<this.nbQuestions&&p<50;){switch(s([1,2,3])){case 1:t=o(1,10)*s([-1,1]),r=o(1,10)*s([-1,1]),$=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} = ${e}_n ${d(t)}$.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[i]={enonce:$,options:{horizontal:!0},propositions:[{texte:`arithmétique de raison $${t}$`,statut:!0},{texte:`arithmétique de raison $${r}$`,statut:!1},{texte:`géométrique de raison $${t}$`,statut:!1}]},n=u(this,i),this.interactif?$+=n.texte:$=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} = ${e}_n ${d(t)}$.<br>
          
            Quelle est la nature de cette suite ? <br>
            
            Donner sa raison.`,a=`La formule de récurrence est de la forme $${e}_{n+1}=${e}_n+r$ avec $r=${t}$.<br>
        On en déduit que $(${e}_n)$ est une suite arithmétique de raison $${t}$ et de premier terme $${e}_0=${r}$.`;break;case 2:t=o(2,10)*s([-1,1]),r=o(1,10)*s([-1,1]),$=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} = ${t}${e}_n $.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[i]={enonce:$,options:{horizontal:!0},propositions:[{texte:`géométrique de raison $${t}$`,statut:!0},{texte:`géométrique de raison $${r}$`,statut:!1},{texte:`arithmétique de raison $${t}$`,statut:!1}]},n=u(this,i),this.interactif?$+=n.texte:$=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} = ${t}${e}_n $.<br>
          
            Quelle est la nature de cette suite ? <br>
            
            Donner sa raison.`,a=`La formule de récurrence est de la forme $${e}_{n+1}=q\\times ${e}_n$ avec $q=${t}$.<br>
        On en déduit que $(${e}_n)$ est une suite géométrique de raison $${t}$ et de premier terme $${e}_0=${r}$.`;break;case 3:t=o(2,10),r=o(1,10)*s([-1,1]),c=s([-1,1]),c<0?($=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} = -\\dfrac{${e}_{n}}{${t}}$.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[i]={enonce:$,options:{horizontal:!0},propositions:[{texte:`géométrique de raison $-\\dfrac{1}{${t}}$`,statut:!0},{texte:`géométrique de raison $-${t}$`,statut:!1},{texte:`arithmétique de raison $-${t}$`,statut:!1}]},n=u(this,i),this.interactif?$+=n.texte:$=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} =- \\dfrac{${e}_{n}}{${t}}$.<br>
              
              Quelle est la nature de cette suite ? <br>
              
              Donner sa raison.`,a=`La formule de récurrence est de la forme $${e}_{n+1}=q\\times ${e}_n$ avec $q=-\\dfrac{1}{${t}}$.<br>
        On en déduit que $(${e}_n)$ est une suite géométrique de raison $-\\dfrac{1}{${t}}$ et de premier terme $${e}_0=${r}$.`):($=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} = \\dfrac{${e}_{n}}{${t}}$.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[i]={enonce:$,options:{horizontal:!0},propositions:[{texte:`géométrique de raison $\\dfrac{1}{${t}}$`,statut:!0},{texte:`géométrique de raison $${t}$`,statut:!1},{texte:`arithmétique de raison $${t}$`,statut:!1}]},n=u(this,i),this.interactif?$+=n.texte:$=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} = \\dfrac{${e}_{n}}{${t}}$.<br>
            
              Quelle est la nature de cette suite ? <br>
              
              Donner sa raison.`,a=`La formule de récurrence est de la forme $${e}_{n+1}=q\\times ${e}_n$ avec $q=\\dfrac{1}{${t}}$.<br>
        On en déduit que $(${e}_n)$ est une suite géométrique de raison $\\dfrac{1}{${t}}$ et de premier terme $${e}_0=${r}$.`);break}this.questionJamaisPosee(i,r,t)&&(this.listeQuestions[i]=$,this.listeCorrections[i]=a,this.canEnonce=$,this.canReponseACompleter=`Nature de la suite : $\\ldots$\\\\
         Raison $=\\ldots$`,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),i++),p++}m(this)}}export{L as dateDePublication,w as default,E as interactifReady,z as interactifType,k as refs,R as titre,O as uuid};
