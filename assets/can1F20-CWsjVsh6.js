import{a,r as p,F as b,v as n,z as u,s as e,f as r,h as x,l as S}from"./embellissements-BYV7mIDn.js";import{E as R}from"./Exercice-DtXhjCyI.js";import{p as m}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const w="Résoudre une équation du second degré sans $\\Delta$",O=!0,P="qcm",T="17/09/2022",U="5283f",J={"fr-fr":["can1F20"],"fr-ch":[]};class V extends R{constructor(){super(),this.nbQuestions=1,this.spacing=2}nouvelleVersion(){const q=[[2,8],[-2,-8],[-2,8],[2,-8],[2,2],[3,-3],[3,3],[10,10],[4,16],[5,20],[10,40],[-5,20],[-5,-20],[2,32],[-2,32],[-9,81],[9,36],[-6,24],[4,-36],[2,50],[-2,50],[3,-12],[3,-48],[3,48],[-4,36],[-4,-36]];let $,l,s,t,i,f,h,c;for(let o=0,d=0;o<this.nbQuestions&&d<50;){switch(a([1,2,3,3,4])){case 1:h=a(q),s=h[0],i=h[1],t=-i/s,a([!0,!1])?$=`L'ensemble des solutions $S$ de l'équation  $${s}x^2${r(i)}=0$ est :
               `:$=`L'ensemble des solutions $S$ de l'équation  $${i}${r(s)}x^2=0$ est :
               `,t>0?this.autoCorrection[o]={enonce:$,options:{horizontal:!0},propositions:[{texte:`$S=\\{-${Math.sqrt(t)}${e(1)};${e(1)}${Math.sqrt(t)}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{-\\sqrt{${x(i)}}${e(1)};${e(1)}\\sqrt{${x(i)}}\\}$`,statut:!1}]}:this.autoCorrection[o]={enonce:$,options:{horizontal:!0},propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-\\sqrt{${x(i)}}${e(1)};${e(1)}\\sqrt{${x(i)}}\\}$`,statut:!1},{texte:`$S=\\{-${Math.sqrt(-t)}${e(1)};${e(1)}${Math.sqrt(-t)}\\}$`,statut:!1}]},c=m(this,o),this.interactif&&($+=c.texte),this.interactif||(a([!0,!1])?($=`Résoudre dans $\\mathbb{R}$ :${e(2)}
            $${s}x^2${r(i)}=0$.`,this.canEnonce=$,this.canReponseACompleter=""):($=`Résoudre dans $\\mathbb{R}$ :${e(2)}
            $${i}${r(s)}x^2=0$.`,this.canEnonce=$,this.canReponseACompleter="")),l="",t>0?l+=`En isolant le carré, on obtient l'équation $x^2=${t}$ qui est de la forme $x^2=k$ avec $k=${t} >0$. <br>
            L'équation admet donc deux solutions : $-\\sqrt{${t}}=-${Math.sqrt(t)}$ et $\\sqrt{${t}}=${Math.sqrt(t)}$.
             <br>Ainsi,  $S=\\{-${Math.sqrt(t)}${e(1)};${e(1)}${Math.sqrt(t)}\\}$.
          `:l+=`En isolant le carré, on obtient l'équation  $x^2=${t}$ qui est de la forme $x^2=k$ avec $k<0$.<br>
            L'équation n'admet donc aucune solution.<br>
            Ainsi, $S=\\emptyset$.`;break;case 2:s=p(-3,9,[-1,0,1]),i=s*a([2,3,5,7,10,-2,-3,-10]),t=-i/s,a([!0,!1])?$=`L'ensemble des solutions $S$ de l'équation  $${s}x^2${r(i)}=0$ est :
               `:$=`L'ensemble des solutions $S$ de l'équation  $${i}${r(s)}x^2=0$ est :
               `,t>0?this.autoCorrection[o]={enonce:$,options:{horizontal:!0},propositions:[{texte:`$S=\\{-\\sqrt{${t}}${e(1)};${e(1)}\\sqrt{${t}}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{-\\sqrt{${x(i)}}${e(1)};${e(1)}\\sqrt{${x(i)}}\\}$`,statut:!1}]}:this.autoCorrection[o]={enonce:$,options:{horizontal:!0},propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-\\sqrt{${x(i)}}${e(1)};${e(1)}\\sqrt{${x(i)}}\\}$`,statut:!1},{texte:`$S=\\{-\\sqrt{${-t}}${e(1)};${e(1)}\\sqrt{${-t}}\\}$`,statut:!1}]},c=m(this,o),this.interactif&&($+=c.texte),this.interactif||(a([!0,!1])?($=`Résoudre dans $\\mathbb{R}$ :${e(2)}
            $${s}x^2${r(i)}=0$.`,this.canEnonce=$,this.canReponseACompleter=""):($=`Résoudre dans $\\mathbb{R}$ :${e(2)}
            $${i}${r(s)}x^2=0$.`,this.canEnonce=$,this.canReponseACompleter="")),l="",t>0?l+=`En isolant le carré, on obtient l'équation $x^2=${t}$ qui est de la forme $x^2=k$ avec $k>0$. <br>
           L'équation admet donc deux solutions : $-\\sqrt{${t}}$ et $\\sqrt{${t}}$.
             <br>Ainsi,  $S=\\{-\\sqrt{${t}}${e(1)};${e(1)}\\sqrt{${t}}\\}$.
          `:l+=`En isolant le carré, on obtient l'équation  $x^2=${t}$ qui est de la forme $x^2=k$ avec $k<0>$. <br>
           L'équation n'admet donc aucune solution.<br>
            Ainsi, $S=\\emptyset$.`;break;case 3:s=p(-5,3,0),i=p(-3,5,0),t=new b(-i,s),a([!0,!1])?$=`L'ensemble des solutions $S$ de l'équation  $${n(s)}x^2${u(i)}x=0$ est :
               `:$=`L'ensemble des solutions $S$ de l'équation  $${n(i)}x${u(s)}x^2=0$ est :
               `,t>0?this.autoCorrection[o]={enonce:$,options:{horizontal:!0},propositions:[{texte:`$S=\\left\\{0${e(1)};${e(1)}${t.texFractionSimplifiee}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${t.oppose().texFractionSimplifiee}${e(1)};${e(1)}0\\right\\}$`,statut:!1},{texte:`$S=\\left\\{0${e(1)};${e(1)}${t.inverse().texFractionSimplifiee}\\right\\}$`,statut:!1}]}:this.autoCorrection[o]={enonce:$,options:{horizontal:!0},propositions:[{texte:`$S=\\left\\{${t.texFractionSimplifiee}${e(1)};${e(1)}0\\right\\}$`,statut:!0},{texte:`$S=\\left\\{0${e(1)};${e(1)}${t.oppose().texFractionSimplifiee}\\right\\}$`,statut:!1},{texte:`$S=\\left\\{${t.inverse().texFractionSimplifiee}${e(1)};${e(1)}0\\right\\}$`,statut:!1}]},c=m(this,o),this.interactif?$+=c.texte:a([!0,!1])?($=`Résoudre dans $\\mathbb{R}$ :${e(2)}
              $${n(s)}x^2${u(i)}x=0$.`,this.canEnonce=$,this.canReponseACompleter=""):($=`Résoudre dans $\\mathbb{R}$ :${e(2)}
              $${n(i)}x${u(s)}x^2=0$.`,this.canEnonce=$,this.canReponseACompleter=""),t>0?l=`En factorisant le premier membre de l'équation on obtient :
            $x(${n(s)}x${r(i)})$.<br>
            L'équation s'écrit alors : $x(${n(s)}x${r(i)})=0$.<br>
            On reconnaît une équation produit nul. Un poduit de deux facteurs est nul si et seulement si l'un au moins des deux facteurs est nul.<br>
            $x=0$ ou $ ${n(s)}x${r(i)}=0$ soit $x=${t.texFraction}${t.texSimplificationAvecEtapes()}$.<br>
            Ainsi, $S=\\left\\{0${e(1)};${e(1)}${t.texFractionSimplifiee}\\right\\}$.`:l=`En factorisant le premier membre de l'équation on obtient :
            $x(${n(s)}x${r(i)})$.<br>
            L'équation s'écrit alors : $x(${n(s)}x${r(i)})=0$.<br>
            On reconnaît une équation produit nul. Un poduit de deux facteurs est nul si et seulement si l'un au moins des deux facteurs est nul.<br>
            $x=0$ ou $ ${n(s)}x${r(i)}=0$ soit $x=${t.texFraction}${t.texSimplificationAvecEtapes()}$.<br>
            Ainsi, $S=\\left\\{${t.texFractionSimplifiee}${e(1)};${e(1)}0\\right\\}$.`;break;case 4:s=a([1,2]),i=p(-3,5,0),f=i**2,t=new b(-i,s),a([!0,!1])?$=`L'ensemble des solutions $S$ de l'équation  $${n(s*s)}x^2${u(i*2*s)}x+${f}=0$ est :
               `:$=`L'ensemble des solutions $S$ de l'équation  $${n(i*2*s)}x${u(s*s)}x^2+${f}=0$ est :
               `,t>0?this.autoCorrection[o]={enonce:$,options:{horizontal:!0},propositions:[{texte:`$S=\\left\\{${t.texFractionSimplifiee}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${t.oppose().texFractionSimplifiee}\\right\\}$`,statut:!1},{texte:`$S=\\left\\{0${e(1)};${e(1)}${t.texFractionSimplifiee}\\right\\}$`,statut:!1}]}:this.autoCorrection[o]={enonce:$,options:{horizontal:!0},propositions:[{texte:`$S=\\left\\{${t.texFractionSimplifiee}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${t.oppose().texFractionSimplifiee}\\right\\}$`,statut:!1},{texte:`$S=\\left\\{0${e(1)};${e(1)}${t.texFractionSimplifiee}\\right\\}$`,statut:!1}]},c=m(this,o),this.interactif?$+=c.texte:a([!0,!1])?($=`Résoudre dans $\\mathbb{R}$ :${e(2)}
              $${n(s*s)}x^2${u(i*2*s)}x+${f}=0$.`,this.canEnonce=$,this.canReponseACompleter=""):($=`Résoudre dans $\\mathbb{R}$ :${e(2)}
              $${n(i*2*s)}x${u(s*s)}x^2+${f}=0$.`,this.canEnonce=$,this.canReponseACompleter=""),l=`On reconnaît dans le premier membre de l'équation le développement d'une égalité remarquable :  $(${n(s)}x${r(i)})=${n(s*s)}x^2${u(i*2*s)}x+${f}$.
           <br>
            L'équation s'écrit alors : $(${n(s)}x${r(i)})^2=0$.<br>
           Elle a pour unique solution $x=${t.texFractionSimplifiee}$.<br>
           
            Ainsi, $S=\\left\\{${t.texFractionSimplifiee}\\right\\}$.`;break}this.questionJamaisPosee(o,s,i)&&(this.listeQuestions[o]=$,this.listeCorrections[o]=l,o++),d++}S(this)}}export{T as dateDePublication,V as default,O as interactifReady,P as interactifType,J as refs,w as titre,U as uuid};
