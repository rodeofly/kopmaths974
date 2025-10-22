import{a as u,r as c,d as q,e as m,f as p,l as x}from"./embellissements-BYV7mIDn.js";import{t as s}from"./deprecatedFractions-D2cbyAQf.js";import{E as g}from"./Exercice-DtXhjCyI.js";import{p as l}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const P="Donner la nature d’une suite (formule de récurrence)*",T=!0,I="qcm",J="16/02/2022",M="17/04/2024",V="e7e0c",j={"fr-fr":["can1S12"],"fr-ch":[]};class B extends g{constructor(){super(),this.nbQuestions=1,this.spacing=1.5}nouvelleVersion(){let n,d,t,a,r,h,f,i,$,_;const e=u(["u","v","w"]);for(let o=0,b=0;o<this.nbQuestions&&b<50;){switch(u([1,2,3,4,5])){case 1:t=c(1,10)*u([-1,1]),r=c(1,10)*u([-1,1]),n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1}  -${e}_n =${t}$.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[o]={enonce:n,options:{horizontal:!0},propositions:[{texte:`arithmétique de raison $${t}$`,statut:!0},{texte:`arithmétique de raison $${-t}$`,statut:!1},{texte:`géométrique de raison $${t}$`,statut:!1}]},_=l(this,o),this.interactif?n+=_.texte:n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1}  -${e}_n =${t}$.<br>
         
            Quelle est la nature de cette suite ?<br>
            
            Donner sa raison.`,d=`La formule de récurrence est de la forme $${e}_{n+1}=${e}_n+r$ avec $r=${t}$.<br>
        On en déduit que $(${e}_n)$ est une suite arithmétique de raison $${t}$ et de premier terme $${e}_0=${r}$.`;break;case 2:t=c(1,10)*u([-1,1]),r=c(1,10)*u([-1,1]),n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_n=${e}_{n+1}  ${p(t)} $.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[o]={enonce:n,options:{horizontal:!0},propositions:[{texte:`arithmétique de raison $${-t}$`,statut:!0},{texte:`arithmétique de raison $${t}$`,statut:!1},{texte:`géométrique de raison $${-t}$`,statut:!1}]},_=l(this,o),this.interactif?n+=_.texte:n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_n=${e}_{n+1}  ${p(t)} $.<br>
          
            Quelle est la nature de cette suite ?<br>
            
            Donner sa raison.`,d=`La formule de récurrence est de la forme $${e}_{n+1}=${e}_n+r$ avec $r=${-t}$.<br>
        On en déduit que $(${e}_n)$ est une suite arithmétique de raison $${-t}$ et de premier terme $${e}_0=${r}$.`;break;case 3:t=c(1,10)*u([-1,1]),r=c(1,10)*u([-1,1]),a=c(1,10)*u([-1,1]),n=`Soit $(u_n)$ une suite définie par $${e}_0=${r}$ et pour tout  
            $n\\in\\mathbb{N}$ par $${e}_{n+1}  =\\dfrac{${a} ${e}_n${p(a*t)}}{${a}}$.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[o]={enonce:n,options:{horizontal:!0},propositions:[{texte:`arithmétique de raison $${t}$`,statut:!0},{texte:`arithmétique de raison $${-t}$`,statut:!1},{texte:`géométrique de raison $${t}$`,statut:!1}]},_=l(this,o),this.interactif?n+=_.texte:n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par
             $${e}_{n+1}  =\\dfrac{${a} ${e}_n${p(a*t)}}{${a}}$.<br>
          
            Quelle est la nature de cette suite ? <br>
            
            Donner sa raison.`,d=`Comme $${e}_{n+1}  =\\dfrac{${a} ${e}_n${p(a*t)}}{${a}}=\\dfrac{${a} ${e}_n}{${a}}+\\dfrac{${a*t}}{${a}}= ${e}_n${p(t)}$, alors
        la formule de récurrence est de la forme $${e}_{n+1}=${e}_n+r$ avec $r=${t}$.<br>
        On en déduit que $(${e}_n)$ est une suite arithmétique de raison $${t}$ et de premier terme $${e}_0=${r}$.`;break;case 4:t=q(c(2,99)*u([-1,1]))/100,r=c(1,10)*u([-1,1]),n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} -${e}_{n}= ${m(t)}${e}_n $.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[o]={enonce:n,options:{horizontal:!0},propositions:[{texte:`géométrique de raison $${m(1+t)}$`,statut:!0},{texte:`géométrique de raison $${m(t)}$`,statut:!1},{texte:`arithmétique de raison $${m(t)}$`,statut:!1}]},_=l(this,o),this.interactif?n+=_.texte:n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} -${e}_{n}= ${m(t)}${e}_n $.<br>
          
            Quelle est la nature de cette suite ? <br>
            
            Donner sa raison.`,d=`$${e}_{n+1} -${e}_{n}= ${m(t)}${e}_n$ s'écrit : $${e}_{n+1} = ${m(t)}${e}_n+${e}_{n}=${m(1+t)}${e}_n$.<br>
           La formule de récurrence est de la forme $${e}_{n+1}=q\\times ${e}_n$ avec $q=${m(1+t)}$.<br>
        On en déduit que $(${e}_n)$ est une suite géométrique de raison $${m(1+t)}$ et de premier terme $${e}_0=${r}$.`;break;case 5:h=[[1,2],[2,3],[3,4],[2,5],[4,5],[5,6],[2,7],[4,7],[6,7],[3,8],[7,8],[2,9],[5,9],[8,9],[1,10],[3,10],[7,10],[9,10]],f=u(h),i=f[0],$=f[1],t=c(2,10),r=c(1,10)*u([-1,1]),a=u([-1,1]),a<0?(n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} =${e}_{n} -${s(i,$)}${e}_{n}$.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[o]={enonce:n,options:{horizontal:!0},propositions:[{texte:`géométrique de raison $${s($-i,$)}$`,statut:!0},{texte:`géométrique de raison $${s(i,$)}$`,statut:!1},{texte:`arithmétique de raison $-${s(i,$)}$`,statut:!1}]},_=l(this,o),this.interactif?n+=_.texte:n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} =${e}_{n} -${s(i,$)}${e}_{n}$.<br>
              
              Quelle est la nature de cette suite ? <br>
              
              Donner sa raison.`,d=`$${e}_{n+1} =${e}_{n} -${s(i,$)}${e}_{n}=\\left(1-${s(i,$)}\\right)${e}_{n}=${s($-i,$)}${e}_{n}$.<br>
                        La formule de récurrence est de la forme $${e}_{n+1}=q\\times ${e}_n$ avec $q=${s($-i,$)}$.<br>
        On en déduit que $(${e}_n)$ est une suite géométrique de raison $${s($-i,$)}$ et de premier terme $${e}_0=${r}$.`):(n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} =${e}_{n} +${s(i,$)}${e}_{n}$.<br>
          Alors, $(${e}_n)$ est une suite ...`,this.autoCorrection[o]={enonce:n,options:{horizontal:!0},propositions:[{texte:`géométrique de raison $${s($+i,$)}$`,statut:!0},{texte:`géométrique de raison $${s(i,$)}$`,statut:!1},{texte:`arithmétique de raison $${s(i,$)}$`,statut:!1}]},_=l(this,o),this.interactif?n+=_.texte:n=`Soit $(${e}_n)$ une suite définie par $${e}_0=${r}$ et pour tout  $n\\in\\mathbb{N}$ par $${e}_{n+1} =${e}_{n} +${s(i,$)}${e}_{n}$.<br>
             
              Quelle est la nature de cette suite ?<br>
              
              Donner sa raison.`,d=`$${e}_{n+1} =${e}_{n} +${s(i,$)}${e}_{n}=\\left(1+${s(i,$)}\\right)${e}_{n}=${s($+i,$)}${e}_{n}$.<br>
            La formule de récurrence est de la forme $${e}_{n+1}=q\\times ${e}_n$ avec $q=${s($+i,$)}$.<br>
On en déduit que $(${e}_n)$ est une suite géométrique de raison $${s($+i,$)}$ et de premier terme $${e}_0=${r}$.`);break}this.questionJamaisPosee(o,r,t)&&(this.listeQuestions[o]=n,this.listeCorrections[o]=d,this.canEnonce=n,this.canReponseACompleter=`Nature de la suite : $\\ldots$\\\\
         Raison $=\\ldots$`,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),o++),b++}x(this)}}export{M as dateDeModifImportante,J as dateDePublication,B as default,T as interactifReady,I as interactifType,j as refs,P as titre,V as uuid};
