import{a as m,r as o,a2 as d,u as a,s as t,Y as g,f as r,a0 as u,l as x}from"./embellissements-BYV7mIDn.js";import{E as h}from"./Exercice-DtXhjCyI.js";import{p}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const k="Déterminer le sens de variation d’un pôlynome du second degré",Q=!0,P="qcm",E="1/11/2021",N="10/06/2022",T="cc460",V={"fr-fr":["can1F02"],"fr-ch":[]};class w extends h{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){let $,f,e,i,s,n,l,b;for(let c=0;c<this.nbQuestions;c++){switch(m([1,2,3,4,5,6])){case 1:e=o(-5,5,0),i=o(-9,9),n=o(-9,9,0),s=d(-i,2*e),l=d(i,2*e),$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${u(0,e,i,n)}$.<br>
  
              Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`,i===0?this.autoCorrection[c]={enonce:$,options:{vertical:!1},propositions:[{texte:`$\\bigg[${s.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e>0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${s.texFractionSimplifiee} \\bigg]$ `,statut:e<0},{texte:`$\\bigg[${e}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${e} \\bigg]$ `,statut:e===0}]}:this.autoCorrection[c]={enonce:$,options:{vertical:!1},propositions:[{texte:`$\\bigg[${s.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e>0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${s.texFractionSimplifiee} \\bigg]$ `,statut:e<0},{texte:`$\\bigg[${l.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:e===0}]},b=p(this,c),this.interactif&&($+=b.texte),e>0?f=`Comme le coefficient $${e}$ devant $x^2$ est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
            <br> $-\\dfrac{b}{2a}=-\\dfrac{${i}}{2\\times ${g(e)}}=${s.texFractionSimplifiee}$.
            <br>Ainsi, $f$ est croissante sur $\\bigg[${s.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$.    `:f=`Comme le coefficient $${e}$ devant $x^2$ est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
            <br>$-\\dfrac{b}{2a}=-\\dfrac{${i}}{2\\times ${g(e)}}=${s.texFractionSimplifiee}$.
            <br>Ainsi, $f$ est croissante sur $\\bigg]-\\infty${t(1)} ;${t(1)}${s.texFractionSimplifiee} \\bigg]$.    `;break;case 2:e=o(-10,10,0),i=o(-5,5,0),n=o(-9,9,0),e===1?$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=(${a(1,i)})^2${r(n)}$.
            <br>
            
            Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`:e===-1?$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=-(${a(1,i)})^2${r(n)}$.
              <br>   Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`:$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}$.
              <br>
              
              Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`,this.autoCorrection[c]={enonce:$,options:{vertical:!1},propositions:[{texte:`$\\bigg[${-i}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e>0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${-i} \\bigg]$ `,statut:e<0},{texte:`$\\bigg[${i}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${i} \\bigg]$ `,statut:e===0}]},b=p(this,c),this.interactif&&($+=b.texte),e>0&&(i>0?f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>  $f(x)=a(x-\\alpha)^2+\\beta$
          <br>    Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
          <br>  Ici,  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}=
         ${a(0,e)}(x-(\\underbrace{-${i}}_{\\alpha}))^2${r(n)}$, d'où $\\alpha=-${i}$.
         <br> Le coefficient $${e}$ devant la parenthèse est strictement positif, la fonction est donc
         d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
         <br>  Ainsi, $f$ est croissante sur $\\bigg[-${i} ${t(1)} ;${t(1)} +\\infty\\bigg[$.    `:f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>$f(x)=a(x-\\alpha)^2+\\beta$
           <br> Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
           <br>
           Ici,  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}$, d'où $\\alpha=${-i}$.
           <br>  Le coefficient $${e}$ devant la parenthèse est strictement positif, la fonction est donc
          d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
          <br>  Ainsi, $f$ est croissante sur $\\bigg[${-i} ${t(1)} ;${t(1)} +\\infty\\bigg[$.    `),e<0&&(i>0?f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>$f(x)=a(x-\\alpha)^2+\\beta$<br>
          Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
          <br> Ici,  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}=
         ${a(0,e)}(x-(\\underbrace{-${i}}_{\\alpha}))^2${r(n)}$, d'où $\\alpha=-${i}$.
         <br> Comme le coefficient $${e}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
         <br>    Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${t(1)} ;${t(1)} -${i}  \\bigg]$.    `:f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>  $f(x)=a(x-\\alpha)^2+\\beta$
              <br> Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
           <br> Ici,  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}$, d'où $\\alpha=${-i}$.
           <br> Comme le coefficient $${e}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
           Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${t(1)} ;${t(1)} ${-i}  \\bigg]$.    `);break;case 3:e=o(-5,5,0),i=o(-9,9),n=o(-9,9,0),l=d(i+n,2),s=d(-(i+n),2),e===1?$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=(${a(1,i)})(${a(1,n)})$.
            <br>
            
            Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`:e===-1?$=$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=-(${a(1,i)})(${a(1,n)})$.
              <br>
              
              Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`:$=$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${e}(${a(1,i)})(${a(1,n)})$.
              <br>
              
              Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`,this.autoCorrection[c]={enonce:$,options:{vertical:!1},propositions:[{texte:`$\\bigg[${s.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e>0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${s.texFractionSimplifiee} \\bigg]$ `,statut:e<0},{texte:`$\\bigg[${l.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:e===0}]},b=p(this,c),this.interactif&&($+=b.texte),e<0?f=`On reconnaît une forme factorisée d'une fonction polynôme du second degré :
            <br>       $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.
            <br>         L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-i}+${g(-n)}}{2}= ${s.texFractionSimplifiee}$.
            <br>           Comme le coefficient $${e}$ devant les parenthèses est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
                <br>           Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${t(1)} ;${t(1)} ${s.texFractionSimplifiee}  \\bigg]$.    `:f=`On reconnaît une forme factorisée d'une fonction polynôme du second degré :
            <br>      $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.
            <br>    L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-i}+${g(-n)}}{2}= ${s.texFractionSimplifiee}$.
            <br>            Comme le coefficient $${e}$ devant les parenthèses est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
              <br>     Ainsi, $f$ est croissante sur $\\bigg[${s.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$.    `;break;case 4:e=o(-5,5,0),i=o(-9,9),n=o(-9,9,0),s=d(-i,2*e),l=d(i,2*e),$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${u(0,e,i,n)}$.
          <br>
          
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`,i===0?this.autoCorrection[c]={enonce:$,options:{vertical:!1},propositions:[{texte:`$\\bigg[${s.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e<0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${s.texFractionSimplifiee} \\bigg]$ `,statut:e>0},{texte:`$\\bigg[${e}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${e} \\bigg]$ `,statut:e===0}]}:this.autoCorrection[c]={enonce:$,options:{vertical:!1},propositions:[{texte:`$\\bigg[${s.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e<0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${s.texFractionSimplifiee} \\bigg]$ `,statut:e>0},{texte:`$\\bigg[${l.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:e===0}]},b=p(this,c),this.interactif&&($+=b.texte),e>0?f=`Comme le coefficient $${e}$ devant $x^2$ est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
            <br>         $-\\dfrac{b}{2a}=-\\dfrac{${i}}{2\\times ${g(e)}}=${s.texFractionSimplifiee}$.
           <br>          Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${t(1)} ;${t(1)}${s.texFractionSimplifiee} \\bigg]$.    `:f=`Comme le coefficient $${e}$ devant $x^2$ est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
            <br>  $-\\dfrac{b}{2a}=-\\dfrac{${i}}{2\\times ${g(e)}}=${s.texFractionSimplifiee}$.
    <br>   Ainsi, $f$ est décroissante sur $\\bigg[${s.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$.    `;break;case 5:e=o(-10,10,0),i=o(-5,5,0),n=o(-9,9,0),e===1?$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=(${a(1,i)})^2${r(n)}$.
            <br>
  
            Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`:e===-1?$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=-(${a(1,i)})^2${r(n)}$.
              <br>
  
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`:$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}$.
              <br>
  
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`,this.autoCorrection[c]={enonce:$,options:{vertical:!1},propositions:[{texte:`$\\bigg[${-i}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e<0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${-i} \\bigg]$ `,statut:e>0},{texte:`$\\bigg[${i}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${i} \\bigg]$ `,statut:e===0}]},b=p(this,c),this.interactif&&($+=b.texte),e>0&&(i>0?f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>        $f(x)=a(x-\\alpha)^2+\\beta$<br>
          Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
          <br>       Ici,  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}=
         ${a(0,e)}(x-(\\underbrace{-${i}}_{\\alpha}))^2${r(n)}$, d'où $\\alpha=-${i}$.
         <br>       Le coefficient $${e}$ devant la parenthèse est strictement positif, la fonction est donc
         d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
         <br>    Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${t(1)} ;${t(1)}${-i} \\bigg]$.    `:f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>         $f(x)=a(x-\\alpha)^2+\\beta$
              <br>         Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
              <br>         Ici,  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}$, d'où $\\alpha=${-i}$.
              <br>        Le coefficient $${e}$ devant la parenthèse est strictement positif, la fonction est donc
          d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
          <br>           Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${t(1)} ;${t(1)}${-i} \\bigg]$.    `),e<0&&(i>0?f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>        $f(x)=a(x-\\alpha)^2+\\beta$
          <br>        Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
          <br>       Ici,  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}=
         ${a(0,e)}(x-(\\underbrace{-${i}}_{\\alpha}))^2${r(n)}$, d'où $\\alpha=-${i}$.
         <br>       Comme le coefficient $${e}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
         <br>         Ainsi, $f$ est décroissante sur $\\bigg[${-i}${t(1)} ;${t(1)} +\\infty\\bigg[$.    `:f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>         $f(x)=a(x-\\alpha)^2+\\beta$
           <br>         Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
           <br>         Ici,  $f(x)=${a(0,e)}(${a(1,i)})^2${r(n)}$, d'où $\\alpha=${-i}$.
           <br>         Comme le coefficient $${e}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
           <br>         Ainsi, $f$ est décroissante sur $\\bigg[${-i}${t(1)} ;${t(1)} +\\infty\\bigg[$.    `);break;case 6:e=o(-5,5,0),i=o(-9,9),n=o(-9,9,0),l=d(i+n,2),s=d(-(i+n),2),e===1?$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=(${a(1,i)})(${a(1,n)})$.
            <br>
  
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`:e===-1?$=$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=-(${a(1,i)})(${a(1,n)})$.
              <br>                           Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`:$=$=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${e}(${a(1,i)})(${a(1,n)})$.
              <br>
              
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`,this.autoCorrection[c]={enonce:$,options:{vertical:!1},propositions:[{texte:`$\\bigg[${s.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e<0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${s.texFractionSimplifiee} \\bigg]$ `,statut:e>0},{texte:`$\\bigg[${l.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:e===0}]},b=p(this,c),this.interactif&&($+=b.texte),e<0?f=`On reconnaît une forme factorisée d'une fonction polynôme du second degré :
            <br>              $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.
            <br>              L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-i}+${g(-n)}}{2}= ${s.texFractionSimplifiee}$.
                <br>              Comme le coefficient $${e}$ devant les parenthèses est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
                <br>              Ainsi, $f$ est décroissante sur $\\bigg[${s.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$.    `:f=`On reconnaît une forme factorisée d'une fonction polynôme du second degré :
            <br>            $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.
            <br> L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-i}+${g(-n)}}{2}= ${s.texFractionSimplifiee}$.
              <br>            Comme le coefficient $${e}$ devant les parenthèses est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
              <br> Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${t(1)} ;${t(1)} ${s.texFractionSimplifiee} \\bigg]$.    `;break}this.listeQuestions.push($),this.listeCorrections.push(f),x(this),this.canEnonce=$,this.canReponseACompleter=""}}}export{N as dateDeModifImportante,E as dateDePublication,w as default,Q as interactifReady,P as interactifType,V as refs,k as titre,T as uuid};
