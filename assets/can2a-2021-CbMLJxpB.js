import{d as ie,y as S,a as h,a2 as v,r as a,o as R,e as l,p as k,aO as F,C as L,G as q,b as A,aH as G,k as g,s as y,v as Q,f as B,z as N,F as se,l as re}from"./embellissements-BYV7mIDn.js";import{c as ae}from"./courbes-C9fk0WuH.js";import{r as ne}from"./reperes-WwrVcExd.js";import{s as H,a as oe}from"./deprecatedFractions-D2cbyAQf.js";import{E as ce}from"./Exercice-DtXhjCyI.js";import{h as U,s as f}from"./gestionInteractif-DujZpSu8.js";import{a as d}from"./questionMathLive-DdRvWqlN.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const Oe="CAN Seconde sujet 2021",je=!0,_e="mathLive",we="05/04/2022";function J(T,M){return T-M}const Re="1f0cd",Ue={"fr-fr":["can2a-2021"],"fr-ch":["NR"]};class Te extends ce{constructor(){super(),this.nbQuestions=30,this.comment=`Cet exercice fait partie des annales des Courses Aux Nombres.<br>
  Il est composé de 30 questions réparties de la façon suivante :<br>
  Les 10 premières questions, parfois communes à plusieurs niveaux, font appel à des questions élémentaires et les 20 suivantes (qui ne sont pas rangées dans un ordre de difficulté) sont un peu plus « coûteuses » cognitivement.<br>
  Par défaut, les questions sont rangées dans le même ordre que le sujet officiel avec des données aléatoires. Ainsi, en cliquant sur « Nouvelles données », on obtient une nouvelle Course Aux Nombres avec des données différentes.
  En choisissant un nombre de questions inférieur à 30, on fabrique une « mini » Course Aux Nombres qui respecte la proportion de nombre de questions élémentaires par rapport aux autres.
  Par exemple, en choisissant 20 questions, la course aux nombres sera composée de 7 ou 8 questions élémentaires choisies aléatoirement dans les 10 premières questions du sujet officiel puis de 12 ou 13 autres questions choisies aléatoirement parmi les 20 autres questions du sujet officiel.`}nouvelleVersion(){const M=Math.min(ie(this.nbQuestions*8/30),8),K=Math.min(this.nbQuestions-M,22),W=S([1,2,3,4,5,6,8,9]).slice(-M).sort(J),X=S([7,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]).slice(-K).sort(J),Y=W.concat(X),Z=[[1,3,1,5],[1,7,1,2],[1,4,1,3],[1,2,1,5],[1,9,1,2],[1,7,1,4],[1,11,1,2],[1,5,1,6],[1,10,1,3],[1,3,1,8],[1,9,1,4],[1,5,1,9],[1,7,1,10],[1,6,1,7]],ee=[[1,5,3,2],[2,5,1,3],[1,5,2,3],[1,3,5,2],[1,3,5,4]],te=[[5,3],[7,9],[3,7],[5,7],[9,7],[2,9],[4,7],[11,5],[11,3]];for(let D=0,r=0,V=0;D<this.nbQuestions&&V<50;){let e=0,t=0,C=0,u=0,x=0,E=0,m=1,$="",o="",s=0;switch(Y[D]){case 1:e=a(2,9),$=`$${e} \\times 99=$ `,o=`$${e} \\times 99=${e}\\times 100-${e}=${e*99}$`,s=e*99,f(this,r,s,{formatInteractif:"calcul"}),this.interactif?$+=d(this,r," "):$+="$\\ldots$",m=1;break;case 2:e=a(1,9)*10,C=a(2,9,5)*10,s=e*C/100,$=`$${C}\\,\\%$ de $${e}= $`,o=`          Prendre $${C}\\,\\%$  de $${e}$ revient à prendre $${C/10}\\times 10\\,\\%$  de $${e}$.<br>
            Comme $10\\,\\%$  de $${e}$ vaut $${e/10}$ (pour prendre $10\\,\\%$  d'une quantité, on la divise par $10$), alors
            $${C}\\,\\%$ de $${e}=${C/10}\\times ${e/10}=${s}$.
           `,f(this,r,s,{formatInteractif:"calcul"}),this.interactif?$+=d(this,r," "):$+="$\\ldots$",m=1;break;case 3:{const c=h(Z),i=v(c[0],c[1]),n=v(c[2],c[3]);$=`$${i.texFraction} + ${n.texFraction}=$
             `,o=`Pour additionner des fractions, on les met au même dénominateur.<br>
  
             Ainsi, $${i.texFraction} + ${n.texFraction}
             =\\dfrac{${i.n}\\times${n.d}}{${i.d}\\times${n.d}}+ \\dfrac{${n.n}\\times${i.d}}{${i.d}\\times${n.d}}
             =\\dfrac{${i.n*n.d}+${n.n*i.d}}{${n.d*i.d}}=\\dfrac{${i.n*n.d+n.n*i.d}}{${i.d*n.d}}$.`,s=v(i.n*n.d+n.n*i.d,i.d*n.d),f(this,r,s,{formatInteractif:"fractionEgale"}),this.interactif?$+=d(this,r," "):$+="$\\ldots$",m=1}break;case 4:e=a(1,10),t=e*e,$=`$\\sqrt{${t}}=$
               `,o=`$\\sqrt{${t}}$ est le nombre positif dont le carré vaut $${t}$. Comme  $${e}^2=${t}$, alors $\\sqrt{${t}}=${e}$.`,s=e,f(this,r,s,{formatInteractif:"calcul"}),this.interactif?$+=d(this,r," "):$+="$\\ldots$",m=1;break;case 5:e=a(3,15),t=h([15,30]),$=`Si l'on parcourt $${e}$ km en $${t}$ min, la vitesse moyenne est de
             `,t===15?(o=`$15$ min est le quart d'une heure. Donc la vitesse moyenne est $${e}\\times 4=${4*e}$ km/h.`,s=e*4):(o=`$30$ min est la moitié d'une heure. Donc la vitesse moyenne est $${e}\\times 2=${2*e}$ km/h.`,s=e*2),f(this,r,s,{formatInteractif:"calcul"}),this.interactif?$+=d(this,r," ")+"km/h":$+="$\\ldots$ km/h",m=1;break;case 6:e=a(-9,-1),t=a(2,9),s=e**2+t,$=`Calculer $x^2+${t}$ pour $x=${e}$.
               `,o=`Pour $x=${e}$, $x^2+${t}=(${e})^2+${t}=${e**2}+${t}=${s}$.`,f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 7:{const c=h(ee),i=v(c[0],c[1]),n=v(c[2],c[3]),b=3,p=7;$=`$\\dfrac{${i.n*p}}{${i.d*b}}\\times \\dfrac{${n.n*b}}{${n.d*p}}=$
             `,s=v(i.n*n.n,i.d*n.d),o=`$\\dfrac{${i.n*p}}{${i.d*b}}\\times \\dfrac{${n.n*b}}{${n.d*p}}=
          \\dfrac{${i.n}\\times ${p}}{${i.d}\\times${b}}\\times \\dfrac{${n.n}\\times ${b}}{${n.d}\\times ${p}}=\\dfrac{${i.n}\\times ${p}\\times ${n.n}\\times ${b}}{${i.d}\\times${b}\\times ${n.d}\\times ${p}}=${oe(i.n*n.n,i.d*n.d)}$`,s=v(i.n*n.n,i.d*n.d),f(this,r,s,{formatInteractif:"fractionEgale"}),this.interactif?$+=d(this,r," "):$+="$\\ldots$",m=1}break;case 8:e=a(2,5),s=a(2,9),u=a(1,9),t=u-e*s,$=`Résoudre : <br>$${e}x${B(t)}=${u}$`,o=`
             $\\begin{aligned}
             ${e}x${B(t)}&=${u}\\\\
            ${e}x&=${u}${B(-t)}\\\\
                                 x&=${s}
            \\end{aligned}$<br>
                      `,f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 9:h([!0,!1])?(e=a(2,9),t=h([-1,-2]),$=`Écriture décimale de : <br>
                        $10^3+${e}\\times 10^2+10^{${t}}$`,o=`$10^3+${e}\\times 10^2+10^{${t}}=1000+${e*100}+${l(10**t,2)}=${l(1e3+e*100+10**t,2)}$`,s=1e3+e*100+10**t):(e=a(2,9),t=h([-1,-2]),$=`Écriture décimale de : <br>
                         $${e}\\times 10^3+ 10^2+10^{${t}}$`,o=`$${e}\\times10^3+ 10^2+10^{${t}}=${e*1e3}+100+${l(10**t,2)}=${l(e*1e3+100+10**t,2)}$`,s=e*1e3+100+10**t),f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 10:e=a(3,11),t=a(5,12,e),s=30-e-t,$=`La moyenne de $${e}$ ; $${t}$ et $n$ vaut $10$.<br>
         $n=$`,o=`
        Pour avoir une moyenne de $10$, la somme des $3$ nombres doit être égale à $30$. <br>Par conséquent $n=30-${e}-${t}=${30-e-t}$.
                   `,f(this,r,s,{formatInteractif:"calcul"}),this.interactif?$+=d(this,r," "):$+="$\\ldots$",m=1;break;case 11:{const c=h(["a","b","c"]);if(c==="a"){e=a(11,39,[10,20,30])/1e3;const i=e*100;s=`${A(i)}\\times 10^{-2}`,$=`Écriture  scientifique de $${l(e,3)}$`,o=`La notation scientifique est de la forme $a\\times 10^{n}$ avec $1\\leqslant a <10$ et $n$ un entier relatif.<br>
            Ici : $${l(e,3)}=\\underbrace{${l(i,3)}}_{1\\leqslant ${l(i,3)} <10}\\times 10^{-2}$. `}else if(c==="b"){e=a(111,399,[200,300])/1e5;const i=e*1e3;s=`${A(i)}\\times 10^{-3}`,$=`Écriture  scientifique de $${l(e,5)}$`,o=`La notation scientifique est de la forme $a\\times 10^{n}$ avec $1\\leqslant a <10$ et $n$ un entier relatif.<br>
              Ici : $${l(e,5)}=\\underbrace{${l(i,5)}}_{1\\leqslant ${l(i,5)} <10}\\times 10^{-3}$. `}else{e=a(111,399,[200,300])/1e6;const i=e*1e4;s=`${A(i)}\\times 10^{-4}`,$=`Écriture  scientifique de $${l(e,6)}$`,o=`La notation scientifique est de la forme $a\\times 10^{n}$ avec $1\\leqslant a <10$ et $n$ un entier relatif.<br>
                Ici : $${l(e,6)}=\\underbrace{${l(i,6)}}_{1\\leqslant ${l(i,6)} <10}\\times 10^{-4}$. `}f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1}break;case 12:e=a(3,99,[4,9,16,25,36,49,64,81]),s=Math.floor(Math.sqrt(e)),$=`Encadrer $\\sqrt{${e}}$  par deux entiers consécutifs :<br>
      `,s=`${Math.floor(Math.sqrt(e))};${Math.floor(Math.sqrt(e))+1}`,$+=`$\\ldots < \\sqrt{${e}} < \\ldots$`,o=` On cherche le carré parfait le plus proche de $${e}$ inférieur à $${e}$.<br>
       Comme $${Math.floor(Math.sqrt(e))**2}=${Math.floor(Math.sqrt(e))}^2$, alors :
     $${Math.floor(Math.sqrt(e))}< \\sqrt{${e}} < ${Math.floor(Math.sqrt(e))+1}$.`,U(this,r,{reponse:{value:s,options:{suiteDeNombres:!0}}}),this.interactif&&($+="<br>Écrire les entiers séparés par un point-virgule.",$+=d(this,r,"")),m=1;break;case 13:e=a(1,5),t=a(2,5),h([!0,!1])?($=`Développer $(${t}x+${e})^2$`,o=`On utilise l'égalité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $a=${t}x$ et $b=${e}$.<br>
              $(${t}x+${e})^2=(${t}x)^2+2 \\times ${t}x \\times ${e} + ${e}^2=${t*t}x^2+${2*t*e}x+${e*e}$`,s=[`${t*t}x^2+${2*t*e}x+${e*e}`]):($=`Développer $(${t}x-${e})^2$`,o=`On utilise l'égalité remarquable $(a+b)^2=a^2-2ab+b^2$ avec $a=${t}x$ et $b=${e}$.<br>
              $(${t}x-${e})^2=(${t}x)^2-2 \\times ${t}x \\times ${e} + ${e}^2=${t*t}x^2-${2*t*e}x+${e*e}$`,s=[`${t*t}x^2-${2*t*e}x+${e*e}`]),f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 14:h(["a","b"])==="a"?(e=a(11,39,[10,20,30])+a(1,9)/10,s=e*1e3,$=`$${l(e,1)}$ m$^3=$`,o=`$1$ m$^3 = 1000$ L, donc  $${l(e,1)}$ m$^3=${l(e,1)}\\times 1000$ L$=${l(e*1e3,1)}$ L`):(e=a(11,39,[10,20,30])+a(11,99,[10,20,30,40,50,60,70,80,90])/100,s=e*1e3,$=`$${l(e,2)}$ m$^3=$`,o=`$1$ m$^3 = 1000$ L, donc  $${l(e,2)}$ m$^3=${l(e,2)}\\times 1000$ L$=${l(e*1e3,2)}$ L`),f(this,r,s,{formatInteractif:"calcul"}),this.interactif?$+=d(this,r," ")+"L":$+="$\\ldots$ L",m=1;break;case 15:{const c=h(te),i=v(c[0],c[1]),n=h([3,5,7,9]);$=`Écrire $\\dfrac{${i.n*n}}{${i.d*n}}$ sous forme d'une fraction irréductible.
             `,o=`$\\dfrac{${i.n*n}}{${i.d*n}}=\\dfrac{${i.n}\\times ${n}}{${i.d}\\times ${n}}=\\dfrac{${i.n}}{${i.d}}$.`,s=v(i.n,i.d).simplifie(),U(this,D,{reponse:{value:s.toLatex(),options:{fractionIrreductible:!0}}}),this.interactif&&($+=d(this,r," ")),m=1}break;case 16:{if(h(["a","b"])==="a"){let i=[2,3,5,7];i=S(i),s=[`${i[0]}\\times${i[1]}\\times ${i[2]}`],$=`Décomposer $${i[0]*i[1]*i[2]}$ en produits de facteurs premiers.`,o=`$${i[0]*i[1]*i[2]}=${i[0]}\\times ${i[1]}\\times ${i[2]}$`}else{let i=[2,3,5];i=S(i),s=[`${i[0]}\\times${i[0]}\\times ${i[1]}`,`${i[0]}^2\\times ${i[1]}`],$=`Décomposer $${i[0]*i[0]*i[1]}$ en produits de facteurs premiers.`,o=`$${i[0]*i[0]*i[1]}=${i[0]}\\times ${i[0]}\\times ${i[1]}=${i[0]}^2\\times ${i[1]}$`}f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1}break;case 17:e=a(5,99,10)/10,t=a(2,9)*5,u=100-t,$=`$${t}\\times${l(e,1)} + ${l(e,1)}\\times${u}=$
      `,o=` On factorise : <br>     $\\begin{aligned}
      ${t}\\times${l(e,1)} + ${l(e,1)}\\times${u}&=${l(e,1)}\\times \\underbrace{(${t}+${u})}_{=100}\\\\
      &=${l(e,1)}\\times 100\\\\
      &=${100*e}
      \\end{aligned}$`,s=100*e,f(this,r,s,{formatInteractif:"calcul"}),this.interactif?$+=d(this,r," "):$+="$\\ldots$",m=1;break;case 18:e=a(1,6),t=a(3,5),u=a(2,9),x=a(1,10),s=`${l((e+t)/2,1)};${l((u+x)/2,1)}`,$=`Dans un repère du plan, on donne $A(${e};${u})$ et $B(${t};${x})$.<br>
        Déterminer les coordonnées du milieu du segment  $[AB]$ (sans utiliser de fraction).`,o=`Les coordonnées du milieu sont  données par :
        $\\left(\\dfrac{${e}+${t}}{2};\\dfrac{${u}+${x}}{2}\\right)=
        \\left(\\dfrac{${e+t}}{2};\\dfrac{${u+x}}{2}\\right)=
        (${l((e+t)/2,1)};${l((u+x)/2,1)})$.`,f(this,r,s,{formatInteractif:"texte"}),$+="<br>"+d(this,r," ",{texteAvant:"$($",texteApres:"$)$"}),m=1;break;case 19:{e=a(3,9);const c=a(2,5);t=c*e,u=a(1,e-1),x=c*u;const i=k(0,4,"A","above"),n=k(3.75,4,"D","above"),b=k(4,-1,"E","below"),p=k(6,-1,"B","below"),I=k(3.91,.74,"C","left"),O=-1,j=-2.5,_=7,w=5,P=[];P.push(L(`${A(x)} cm`,q(i,n).x,q(i,n).y+.3),L(" ?",q(p,b).x,q(p,b).y-.3),L(`${A(t)} cm`,q(i,I).x-.6,q(i,I).y),L(`${A(e)} cm`,q(I,p).x+.5,q(I,p).y+.2),G(i,p,I,n,b),g(p,b),g(n,b),g(i,n),g(i,p)),s=u,$=`$A$, $C$ et $B$ sont alignés, et $D$, $C$ et $E$ sont alignés. De plus, $(AD)//(EB)$.
           <br>`,$+=R({xmin:O,ymin:j,xmax:_,ymax:w,pixelsParCm:30,mainlevee:!1,amplitude:.5,scale:.8,style:"margin: auto"},P),o=`Le triangle $ACD$ est un agrandissement du triangle $EBC$. Le coefficient d'agrandissement est donné par : $\\dfrac{${t}}{${e}}=${c}$.<br>
          On obtient donc la longueur $EB$ en divisant par $${c}$ la longueur $AD$.<br>
          $EB=\\dfrac{${x}}{${c}}=${u}$ cm.<br>`,f(this,r,s,{formatInteractif:"calcul"}),this.interactif?($+="<br>$EB=$",$+=d(this,r," ")+"cm"):$+=" $EB=\\ldots$ cm",m=1}break;case 20:h(["a","b"])==="a"?(e=a(18,25)*10,t=h([20,25]),s=e*100/t,$=`$${t}\\,\\%$ des élèves d'un lycée sont externes. <br>
          Il y a $${e}$ externes. Combien y a-t-il d'élèves dans ce lycée ?
      `,o=` Comme $100\\,\\%$ est égal à $${100/t}$ fois $${t}\\,\\%$, alors le nombre d'élèves dans ce lycée est : $${e}\\times ${100/t}=${s}$.`):(e=a(8,15)*10,t=10,s=e*10,$=`$${t}\\,\\%$ des élèves d'un lycée sont externes. <br>
            Il y a $${e}$ externes. Combien y a-t-il d'élèves dans ce lycée ?
        `,o=` Comme $100\\,\\%$ est égal à $${100/t}$ fois $${t}\\,\\%$, alors le nombre d'élèves dans ce lycée est : $${e}\\times ${100/t}=${s}$.`),f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 21:h(["a","b"])==="a"?(e=a(2,10),t=a(2,10),s=[`(${Q(e)}x${B(-t)})(${Q(e)}x${B(t)})`,`(${Q(e)}x${B(t)})(${Q(e)}x${B(-t)})`],$=`Factoriser $${e**2}x^2-${t**2}$.
      `,o=` On reconnaît une différence de deux carrés : $a^2-b^2$ avec $a=${e}x$ et $b=${t}$.<br>
            Comme $a^2-b^2=(a-b)(a+b)$, alors $${e**2}x^2-${t**2}=(${e}x-${t})(${e}x+${t})$.`):(e=a(2,10),t=a(2,10),s=[`(${t}${N(-e)}x)(${t}${N(e)}x)`,`(${t}${N(e)}x)(${t}${N(-e)}x)`],$=`Factoriser $${t**2}-${e**2}x^2$.
      `,o=` On reconnaît une différence de deux carrés : $a^2-b^2$ avec $a=${t}$ et $b=${e}x$.<br>
            Comme $a^2-b^2=(a-b)(a+b)$, alors  $${t**2}-${e**2}x^2=(${t}-${e}x)(${t}+${e}x)$.`),f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 22:e=a(5,6),t=a(6,10),h([!0,!1])?($="Soit le script Python suivant :<br>",$+=`$\\begin{array}{|l|}
`,$+=`\\hline
`,$+=`\\
 \\texttt{def calcul(a,b) :}  \\
 `,$+=`\\\\
 ${y(6)} \\texttt{if a!=6 or b>8 :}\\
 `,$+=`\\\\
 ${y(12)} \\texttt{b = a+b}\\
 `,$+=`\\\\
 ${y(6)} \\texttt{else :}\\
 `,$+=`\\\\
 ${y(12)} \\texttt{b = a-b}\\
 `,$+=`\\\\
 ${y(6)} \\texttt{return b}\\\\
 `,$+=`\\hline
`,$+=`\\end{array}
$`,$+=`<br> Que renvoie l'instruction $\\texttt{calcul(${e},${t})}$ ?`,e!==6||t>8?(o=`Si $a$ est différent de $6$ ou $b>8$, le script renvoie la somme de $a$ et de $b$, sinon il renvoie la différence.<br>
          Dans ce cas, il renvoie la somme : $${e}+${t}=${e+t}$.`,s=e+t):(o=`Si $a$ est différent de $6$ ou $b>8$, le script renvoie la somme de $a$ et de $b$, sinon il renvoie la différence.<br>
              Dans ce cas, il renvoie la différence : $${e}-${t}=${e-t}$.`,s=e-t)):($="Soit le script Python suivant :<br>",$+=`$\\begin{array}{|l|}
`,$+=`\\hline
`,$+=`\\
 \\texttt{def calcul(a,b) :}  \\
 `,$+=`\\\\
 ${y(6)} \\texttt{if a!=6 or b<8 :}\\
 `,$+=`\\\\
 ${y(12)} \\texttt{b = a+b}\\
 `,$+=`\\\\
 ${y(6)} \\texttt{else :}\\
 `,$+=`\\\\
 ${y(12)} \\texttt{b = a-b}\\
 `,$+=`\\\\
 ${y(6)} \\texttt{return b}\\\\
 `,$+=`\\hline
`,$+=`\\end{array}
$`,$+=`<br> Que renvoie l'instruction $\\texttt{calcul(${e},${t})}$ ?`,e!==6||t<8?(o=`Si $a$ est différent de $6$ ou $b<8$, le script renvoie la somme de $a$ et de $b$, sinon il renvoie la différence.<br>
              Dans ce cas, il renvoie la somme : $${e}+${t}=${e+t}$.`,s=e+t):(o=`Si $a$ est différent de $6$ ou $b<8$, le script renvoie la somme de $a$ et de $b$, sinon il renvoie la différence.<br>
                  Dans ce cas, il renvoie la différence : $${e}-${t}=${e-t}$.`,s=e-t)),f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 23:e=a(1,9),t=a(1,9),E=a(1,4),u=e+E,x=t+a(2,4)*E,$=`Dans un repère du plan, on considère les points $A(${e};${t})$ et $B(${u};${x})$.<br>
          Calculer le coefficient directeur de $(AB)$.
      `,o=` Le coefficient directeur de la droite $(AB)$ est donné par :<br>
           $\\dfrac{y_B-y_A}{x_B-x_A}=\\dfrac{${x}-${t}}{${u}-${e}}=${(x-t)/(u-e)}$.
          `,s=v(x-t,u-e),f(this,r,s,{formatInteractif:"fractionEgale"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 24:e=a(2,10),s=4*e,$=`Déterminer le périmètre d'un carré d'aire $${e**2}$ cm$^2$.
      `,o=`Si l'aire du carré est $${e**2}$ cm$^2$, la longueur de son côté est $\\sqrt{${e**2}}=${e}$ cm. <br>
          On en déduit que le périmètre du carré est $4\\times ${e}=${4*e}$ cm. `,f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")+"cm"),m=1;break;case 25:e=a(2,10),t=a(2,10),s=v(e,e+t),$=`On tire une boule dans une urne contenant $${e}$ boules rouges et $${t}$ boules vertes.<br>
          Quelle est la probabilité de tirer une boule rouge ?
      `,o=`Il y a $${t}$ boules rouges sur un total de $${e+t}$ boules. <br>
          La probabilité de tirer une boule rouge est donc : $\\dfrac{${e}}{${e+t}}${H(e,e+t)}$`,f(this,r,s,{formatInteractif:"fractionEgale"}),this.interactif&&($+=d(this,r," ")),m=1;break;case 26:{const c=h(["a","b","c"]);c==="a"?(e=h([40,60,80,100,120]),s=e/4,$=`Une voiture roule à la vitesse moyenne de $${e}$ km/h.<br>
            Combien de kilomètres a-t-elle parcourus en $15$ minutes ?
        `,o=`Dans une heure, il y a $4\\times 15$ minutes. <br>Ainsi en $15$ minutes, la voiture aura parcouru $${e}\\div 4=${e/4}$ km.<br>
            `):c==="b"?(e=h([60,90,120]),s=e/6,$=`Une voiture roule à la vitesse moyenne de $${e}$ km/h.<br>
                          Combien de kilomètres a-t-elle parcourus en $10$ minutes ?
                      `,o=`Dans une heure, il y a $6\\times 10$ minutes. <br>Ainsi en $10$ minutes, la voiture aura parcouru $${e}\\div 6=${e/6}$ km.
                          `):(e=h([30,60,90,120]),s=e/3,$=`Une voiture roule à la vitesse moyenne de $${e}$ km/h.<br>
                                        Combien de kilomètres a-t-elle parcourus en $20$ minutes ?
                                    `,o=`Dans une heure, il y a $3\\times 20$ minutes. <br>Ainsi en $20$ minutes, la voiture aura parcouru $${e}\\div 3=${e/3}$ km.
                                        `),f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")+"km"),m=1}break;case 27:{e=a(1,10);const c=k(0,0,"A","below"),i=k(4,0,"B","below"),n=k(4,4,"C","above"),b=k(0,4,"D","above"),p=F(c,i,"|"),I=F(i,n,"|"),O=F(n,b,"|"),j=F(c,b,"|"),_=-1,w=-1,P=5,$e=5,z=[];z.push(L(`${A(e)} cm`,q(c,i).x,q(c,i).y-.4),L("?",q(b,i).x+.2,q(b,i).y+.1),G(c,i,n,b),g(c,i),g(i,n),g(n,b),g(b,c),g(i,b),p,I,O,j),s=[`\\sqrt{${2*e**2}}`,`${Math.sqrt(2*e**2)}`,`${e}\\sqrt{2}`],$=`Compléter : <br>
            `,$+=R({xmin:_,ymin:w,xmax:P,ymax:$e,pixelsParCm:30,mainlevee:!1,amplitude:.5,scale:.8,style:"margin: auto"},z),o=`Le théorème de Pythagore dans le triangle rectangle $ADB$ donne : <br>
            $DB^2=AD^2+AB^2$ soit $DB^2=${e}^2+${e}^2=2\\times ${e}^2=${2*e**2}$.<br>
            Ainsi, $DB=\\sqrt{${2*e**2}}$ ou encore $DB=${e}\\sqrt{2}$.`,f(this,r,s,{formatInteractif:"calcul"}),this.interactif?($+="<br>$DB=$",$+=d(this,r," ")+"cm"):$+=" $DB=\\ldots$ cm",m=1}break;case 28:e=h([1,2,3,4,10]),s=e**3/100,$=`La masse volumique d'un solide  est de $10$ g/cm$^3$.<br>
          Combien pèse (en kg) ce solide qui a la forme d'un cube  d'arête $${e}$ cm  ?
      `,o=`Le volume du cube est $${e}^3=${e**3}$ cm$^3$.<br>
          Sa masse  est donc donnée par $${e**3}\\times 10=${10*e**3}$ g soit $${l(e**3/100,2)}$ kg.

          `,f(this,r,s,{formatInteractif:"calcul"}),this.interactif&&($+=d(this,r," ")+"kg"),m=1;break;case 29:{e=a(-1,6),t=a(1,4)+a(1,9)/10;const c=ne({xMin:-4,xMax:4,yMin:-3,yMax:8,xUnite:2,yUnite:1}),n=ae(b=>.5*b**3+t,{repere:c,color:"red"});s=[Math.cbrt(2*(e-t))-.1,Math.cbrt(2*(e-t))+.1],$=`Voici la courbe d'une fonction $f$. <br>
Donner une valeur approchée de l'antécédent de $${e}$ par $f$ ?<br>`,$+=R({xmin:-8,xmax:8.2,ymin:-3,ymax:8,scale:.5},c,n),o=`L'antécédent de $${e}$ par $f$ est l'abscisse du point de la courbe d'ordonnée $${e}$ : $${l(Math.cbrt(2*(e-t)),1)}$ en est une valeur approchée. `,f(this,r,s,{formatInteractif:"intervalle"}),this.interactif&&($+=d(this,r," ")),m=1}break;case 30:{u=h([2,3,11,12]);const c=[1,2,3,4,5,6,5,4,3,2,1],i=h(["a","b","b"]);i==="a"&&($="On lance deux fois de suite un dé cubique équilibré.<br>Quelle est la probabilité d’obtenir deux fois le même nombre ?<br>Donner le résultat sous la forme d'une fraction irréductible.",o="Sur $36$ cas possibles équiprobables, il y en a $6$ qui sont des doubles. Donc la probabilité d'obtenir deux fois le même nombre est $\\dfrac{6}{36}=\\dfrac{1}{6}$.",s=v(1,6)),i==="b"&&($=`On lance deux dés cubiques équilibrés.<br>Quelle est la probabilité d’obtenir un total de $${u}$ ?<br>Donner le résultat sous la forme d'une fraction irréductible.`,o=`Sur $36$ cas possibles équiprobables, il y en a $${c[u-2]}$ qui donnent une somme de $${u}$. Donc la probabilité d'obtenir un total de $${u}$ est $\\dfrac{${c[u-2]}}{36}${H(c[u-2],36)}$.`,s=v(c[u-2],36).simplifie()),U(this,D,{reponse:{value:s.toLatex(),options:{fractionIrreductible:!0}}}),this.interactif&&($+=d(this,r," ")),m=1}break}this.questionJamaisPosee(D,e,t,u,x,C,E,m,s instanceof se?s.texFraction:s)&&(this.listeQuestions[D]=$,this.listeCorrections[D]=o,D++,r+=m),V++}re(this)}}export{we as dateDePublication,Te as default,je as interactifReady,_e as interactifType,Ue as refs,Oe as titre,Re as uuid};
