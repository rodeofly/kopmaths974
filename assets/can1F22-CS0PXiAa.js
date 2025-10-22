import{a as d,r as s,v as u,f as i,a0 as C,z as E,h as q,l as _}from"./embellissements-BYV7mIDn.js";import{E as v}from"./Exercice-DtXhjCyI.js";import{p as y}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const j="Reconnaitre une fonction polynôme du second degré (V/F)",B=!0,G="qcm",H="24/09/2022",K="6e9df",M={"fr-fr":["can1F22"],"fr-ch":[]};class N extends v{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){const g=[["f"],["g"],["h"],["u"],["v"],["w"],["r"]];let e,o;for(let f=0,S=0;f<this.nbQuestions&&S<50;){let n="",r="",t={texte:"",texteCorr:""};this.canEnonce="";let $=0,l=0,c=0,h=0,x=0,a=0,p=0,m=0,b,L;switch(d([1,2,3,4,5,6])){case 1:$=s(-3,3,0),l=s(-9,9,0),c=s(-9,9,0),h=d([5,7,10]),b=d([2,3,5,6,7,10]),e=d(g),o=d(["a","b","c","d","e","f","g"]),o==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${C(0,$,l,c)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${C(0,$,0,c)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="c"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${C(0,$,l,0)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="d"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${u(l)}x${i(c)}${E($)}x^2$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="e"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${u(l)}x${E($)}x^2${i(c)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="f"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=\\dfrac{${C(0,$,0,c)}}{${h}}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${u($)}x^2+\\sqrt{${b}}x${i(c)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:$<10},{texte:"Faux",statut:$>10}],options:{ordered:!0,radio:!0}},t=y(this,f),n+=t.texte,o==="a"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${$}$, $b=${l}$ et $c=${c}$.<br>
             $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:o==="b"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${$}$, $b=0$ et $c=${c}$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:o==="c"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${$}$, $b=${l}$ et $c=0$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:o==="d"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${$}$, $b=${l}$ et $c=${c}$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:o==="e"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${$}$, $b=${l}$ et $c=${c}$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:o==="f"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=\\dfrac{${$}}{${h}}$, $b=0$ et $c=\\dfrac{${c}}{${h}}$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${$}$, $b=\\sqrt{${b}}$ et $c=${c}$.<br>
                $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `;break;case 2:$=s(-3,3,0),x=s(-9,9,0),a=s(-9,9,[0,x]),e=d(g),b=d([2,3,5,6,7,10]),L=d([2,3,5,6,7,10]),o=d(["a","b","c","d","e","f"]),o==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${u($)}(x${i(x)})(x${i(a)})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${u($)}x(x${i(a)})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="c"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=x(x${i(a)})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="d"?(n=`Soit $${e}$ la fonction définie  par :<br>
                $${e}(x)=(${x}-x)(x${i(a)})$. <br>
                $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="e"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${u($)}(x+\\sqrt{${b}})(x-\\sqrt{${L}})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=\\sqrt{${b}}(x${i(x)})(x${i(a)})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:$<10},{texte:"Faux",statut:$>10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,o==="a"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=${$}$, $x_1=${-x}$ et $x_2=${-a}$.<br>  Il s'agit de la forme factorisée d'une fonction polynôme du second degré. `:o==="b"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=${$}$, $x_1=0$ et $x_2=${-a}$.<br> Il s'agit de la forme factorisée d'une fonction polynôme du second degré.   `:o==="c"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=1$, $x_1=0$ et $x_2=${-a}$.<br> Il s'agit de la forme factorisée d'une fonction polynôme du second degré.   `:o==="d"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                $${e}(x)=(${x}-x)(x${i(a)})=-(x${i(-x)})(x${i(a)})$.<br>
                $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=1$, $x_1=0$ et $x_2=${-a}$.<br> Il s'agit de la forme factorisée d'une fonction polynôme du second degré.   `:o==="e"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=${$}$, $x_1=-\\sqrt{${b}}$ et $x_2=\\sqrt{${L}}$.<br>  Il s'agit de la forme factorisée d'une fonction polynôme du second degré. `:r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=\\sqrt{${b}}$, $x_1=${-x}$ et $x_2=${-a}$.<br>  Il s'agit de la forme factorisée d'une fonction polynôme du second degré. `;break;case 3:$=s(-5,5,0),x=s(-9,9,0),a=s(-9,9,[0,x]),p=s(-9,9,0),m=s(-9,9,0),e=d(g),o=d(["a","b","c"]),o==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
                  $${e}(x)=${u($)}(x${i(p)})^2${i(m)}$. <br>         
                  $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
                  $${e}(x)=${u($)}(x${i(p)})^2$. <br>
                  $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
                  $${e}(x)=(x${i(p)})^2$. <br>
                  $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:$<10},{texte:"Faux",statut:$>10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,o==="a"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                  $${e}(x)$ est de la forme $a(x-\\alpha)^2+\\beta$ avec $a=${$}$, $\\alpha=${-p}$ et $\\beta=${m}$. <br> Il s'agit de la forme canonique d'une fonction polynôme du second degré. `:o==="b"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                  $${e}(x)$ est de la forme $a(x-\\alpha)^2+\\beta$ avec $a=${$}$, $\\alpha=${-p}$ et $\\beta=0$. <br> Il s'agit de la forme canonique d'une fonction polynôme du second degré. `:r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                    $${e}(x)$ est de la forme $a(x-\\alpha)^2+\\beta$ avec $a=1$, $\\alpha=${-p}$ et $\\beta=0$. <br> Il s'agit de la forme canonique d'une fonction polynôme du second degré. `;break;case 4:$=s(-3,3,0),l=s(-9,9,0),c=s(-9,9,0),h=d([5,7]),e=d(g),o=d(["a","b","c","d"]),o==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${C($,l,c,0)}$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${l}${E(c)}x^3$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="c"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${u($)}x^2${E(l)}x+\\dfrac{${q(c)}}{x}$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${u($)}x^2${E(l)}\\sqrt{x}${i(c)}$. <br>          
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:$>10},{texte:"Faux",statut:$<10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,o==="a"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
              $${e}(x)$ est une fonction polynôme du troisième degré.   `:o==="b"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
              $${e}(x)$ est une fonction polynôme du troisième degré.   `:o==="c"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
             L'expression  $${e}(x)$ contient une division par $x$.  `:r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second. <br>
              L'expression  $${e}(x)$ contient une racine carrée de $x$.   `;break;case 5:$=s(-3,3,0),x=s(-9,9,0),a=s(-9,9,[0,x]),e=d(g),o=d(["a","b"]),o==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
                    $${e}(x)=${u($)}x(x${i(x)})(x${i(a)})$. <br>          
                    $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
                  $${e}(x)=${u($)}x(\\sqrt{x}${i(x)})(x${i(a)})$. <br>            
                  $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:$>10},{texte:"Faux",statut:$<10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,o==="a"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                   En développant l'expression, on obtient une fonction polynôme du troisième degré. `:r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                  L'expression $${e}(x)$ contient une racine carrée de $x$. `;break;case 6:$=s(-5,5,0),p=s(-9,9,0),m=s(-9,9,0),e=d(g),o=d(["a","b","c"]),o==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
                            $${e}(x)=${u($)}x(x${i(p)})^2${i(m)}$. <br>                
                            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):o==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
                            $${e}(x)=${u($)}(x${i(p)})^2+\\sqrt{x}$. <br>
                            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
                              $${e}(x)=${u($)}(\\sqrt{x}${i(p)})^2${i(m)}$. <br>         
                              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:$>10},{texte:"Faux",statut:$<10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,o==="a"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                      En développant l'expression, on obtient une fonction polynôme du troisième degré. `:o==="b"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                      L'expression $${e}(x)$ contient une racine carrée de $x$. `:r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                        L'expression $${e}(x)$ contient une racine carrée de $x$. `;break}this.questionJamaisPosee(f,$,x,a,l,c,p,m)&&(this.listeQuestions[f]=n,this.listeCorrections[f]=r,this.canReponseACompleter=t.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),f++),S++}_(this)}}export{H as dateDePublication,N as default,B as interactifReady,G as interactifType,M as refs,j as titre,K as uuid};
