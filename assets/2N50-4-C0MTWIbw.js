import{af as H,r as p,p as s,k as l,aM as N,aG as L,aH as D,b9 as M,C as h,G as i,e as c,o as B,u as d,m as u,aS as k,b as O,s as P,v,l as z}from"./embellissements-BYV7mIDn.js";import{a as f}from"./deprecatedFractions-D2cbyAQf.js";import{E as j}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const $e="Modéliser une situation géométrique à l'aide d'une équation",te="16/12/2021",re="cf5b7",ae={"fr-fr":["2N50-4","BP2RES24"],"fr-ch":["11FA6-10"]};class ne extends j{constructor(){super(),this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.sup=1}nouvelleVersion(){const Q=H(["typeE1","typeE2","typeE3","typeE4","typeE5","typeE6","typeE7","typeE8"],this.nbQuestions);for(let q=0,w=0;q<this.nbQuestions&&w<50;){const b=[];let C="",o="";const A=[];switch(Q[q]){case"typeE1":{const e=p(1,10),$=p(1,7),t=p(4*$+2*e+1,50),n=t-2*e-2*$,r=s(0,0,"A","below"),x=s(10,0,"B","below"),a=s(10,6,"C"),m=s(0,6,"D");b.push(l(r,x),l(x,a),l(m,r),l(a,m),D(r,x,a,m)),b.push(h(`x+${c(e)}`,i(a,m).x+0,i(a,m).y+.7,0,"black",1,"milieu",!0),h(`${c($)}`,i(r,m).x-.5,i(r,m).y,0,"black",1,"milieu",!0)),C=` Un rectangle a pour largeur $${$}$ cm et pour longueur $x$ cm.<br>
            En ajoutant $${e}$ cm à la longueur de ce rectangle, on obtient un nouveau rectangle dont le périmètre est $${t}$ cm.<br>
             Quelle est la longueur $x$ du rectangle initial ?<br>
              `,o=" On réalise une petite figure à main levée pour visualiser la situation :<br>",o+=B({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},b),o+=`<br>Le périmètre du rectangle obtenu est donnée par la formule : $2\\times (\\ell+L)$ avec $\\ell$ la largeur du rectangle et $L$ sa longueur. <br>
                  Comme $\\ell=${$}$ et $L=x+${e}$, le périmètre est donné en fonction de $x$ par :  $ 2(${$}+x+${e})=2(x+${e+$})=2x+${2*e+2*$}$.<br>
       Puisque le périmètre du rectangle est $${t}$ cm, on cherche $x$ tel que :   $2x+${2*e+2*$}=${t}$.<br>
       $\\begin{aligned}
       2x+${2*e+2*$}&=${t}\\\\
       2x+${2*e+2*$}${u(-2*e-2*$)}&=${t}${u(-2*e-2*$)}\\\\
       2x&=${t-2*e-2*$}\\\\
       x&=\\dfrac{${t-2*e-2*$}}{2}\\\\
       x&=${c(n/2)}\\end{aligned}$<br>

       La longueur $x$ du rectangle initial est  $${c(n/2)}$ cm.
       `,A.push(e,t,n,$)}break;case"typeE2":{const e=p(1,10),$=p(1,5),t=p($*$+$*e+1,100),n=s(0,0,"A","below"),r=s(10,0,"B","below"),x=s(10,6,"C"),a=s(0,6,"D");b.push(l(n,r),l(r,x),l(a,n),l(x,a),D(n,r,x,a)),b.push(h(`x+${c(e)}`,i(x,a).x+0,i(x,a).y+.7,0,"black",1,"milieu",!0),h(`${c($)}`,i(n,a).x-.5,i(n,a).y,0,"black",1,"milieu",!0)),C=` Un rectangle a pour largeur $${$}$ cm et pour longueur $x$ cm.<br>
             En ajoutant $${e}$ cm à la longueur de ce rectangle, on obtient un nouveau rectangle dont l'aire est $${t}$ cm$^2$.<br>
              Quelle est la longueur $x$ du rectangle initial ? <br>
              On donnera le résultat sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant.`,o=" On réalise une petite figure à main levée pour visualiser la situation :<br>",o+=B({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},b),o+=`L'aire du rectangle obtenu est donnée par la formule : $\\ell\\times L$ avec $\\ell$ la largeur du rectangle et $L$ sa longueur. <br>
                   Comme $\\ell=${$}$ et $L=x+${e}$, l'aire est donnée en fonction de $x$ par :  $ ${v($)}\\times (x+${e})=${$}x+${$*e}$.<br>
        Puisque l'aire du rectangle est $${t}$ cm, on cherche $x$ tel que :   $${v($)}x+${$*e}=${t}$.<br>
       $\\begin{aligned}
        ${v($)}x+${$*e}&=${t}\\\\
        ${v($)}x+${$*e}${u(-$*e)}&=${t}${u(-$*e)}\\\\
                ${v($)}x&=${t-$*e}
        \\end{aligned}$<br>`,$!==1?o+=`${P(18)}$\\begin{aligned}
          \\dfrac{${$}x}{${u($)}}&=\\dfrac{${t-$*e}}{${u($)}}\\\\
               x&=${f(t-$*e,$)}\\end{aligned}$<br>`:o+="",o+=` La longueur $x$ du rectangle initial est  $${f(t-$*e,$)}$ cm.
        `,A.push(e,t,$)}break;case"typeE3":{const e=p(1,10),$=p(e*e+1,100),t=s(0,0,"A","below"),n=s(10,0,"B","below"),r=s(0,6,"C");b.push(l(t,n),l(n,r),l(t,r),D(t,n,r),L(n,t,r)),b.push(h(`${c(e)}`,i(t,n).x+0,i(t,n).y-.5,0,"black",1,"milieu",!0),h("x",i(t,r).x-.5,i(t,r).y,0,"black",1,"milieu",!0)),C=` Un triangle $ABC$ est rectangle en $A$. On a $AB= ${e}$ cm  et $AC= x$ cm.<br>
         Sachant que le carré de son hypoténuse est $${$}$, déterminer la valeur exacte de $x$. `,o=" On réalise une petite figure à main levée pour visualiser la situation :<br>",o+=B({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},b),o+=`Le carré de l'hypoténuse  est égal à $${$}$. On a donc $BC^2=${$}$.<br>
          Le triangle $ABC$ est rectangle en $A$, d'après le théorème de Pythagore :<br>
        $\\begin{aligned}
        AB^2+AC^2&=BC^2\\\\
        ${e*e}+x^2&=${$}\\\\
        ${e*e}+x^2${u(-e*e)}&=${$} ${u(-e*e)}\\\\
        x^2&=${$-e*e}\\\\
        x&=\\sqrt{${$-e*e}}${P(10)}  \\text{car}${P(2)} x>0
        \\end{aligned}$`,$-e*e===1||$-e*e===4||$-e*e===9||$-e*e===16||$-e*e===25||$-e*e===36||$-e*e===49||$-e*e===64||$-e*e===81||$-e*e===100?o+=`<br>
            ${P(28)} $x=${Math.sqrt($-e*e)}$<br>
         La valeur de $x$ cherchée est  $${Math.sqrt($-e*e)}$.
         `:o+=`<br>
         La valeur de $x$ cherchée est  $\\sqrt{${$-e*e}}$.
         `,A.push(e,$)}break;case"typeE4":{const e=p(1,10),$=p(e+1,15),t=s(0,0,"M","below"),n=s(10,0,"N","below"),r=s(0,6,"P");b.push(l(t,n),l(n,r),l(t,r),D(t,n,r),L(n,t,r)),b.push(h(`${c($)}`,i(t,r).x-.5,i(t,r).y,0,"black",1,"milieu",!0),h("x",i(t,n).x+0,i(t,n).y-.5,0,"black",1,"milieu",!0),k(`$x+${c(e)}$`,r,n,"black",.5)),C=` Un triangle $MNP$ est rectangle en $M$. On a $MP= ${$}$ cm  et $MN= x$ cm.<br>
             L'hypoténuse du triangle $MNP$ mesure  $${e}$ cm de plus que le côté $[MN]$.<br>
             Déterminer la valeur de $x$ sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant. `,o=" On réalise une petite figure à main levée pour visualiser la situation :<br>",o+=B({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},b),o+=`Le triangle $MNP$ est rectangle en $M$, d'après le théorème de Pythagore :<br>
            $\\begin{aligned}
            MN^2+MP^2&=PN^2\\\\
            x^2+${$}^2&=(x+${e})^2\\\\
            x^2+${$*$}&= x^2+2\\times x\\times ${e}+${e}^2\\\\
            x^2+${$*$}&= x^2+${2*e}x+${e*e}\\\\
            ${$*$}+\\cancel{x^2}&=\\cancel{x^2}+${2*e}x+${e*e} \\\\
            ${2*e}x+${e*e}&=${$*$}\\\\
            ${2*e}x+${e*e}${u(-e*e)}&=${$*$}${u(-e*e)}\\\\
            ${2*e}x&=${$*$-e*e}\\\\
            \\dfrac{${2*e}x}{${u(2*e)}}&=\\dfrac{${$*$-e*e}}{${u(2*e)}}\\\\
            x&=${f($*$-e*e,2*e)}\\end{aligned}$<br>
            
       La valeur de $x$ cherchée est : $${f($*$-e*e,2*e)}$.
       `,A.push($,e)}break;case"typeE5":{const e=p(1,8),$=p(e*e+1,100);C=` En augmentant le côté d'un carré de $${e}$ cm, son aire aumente de $${$}$ cm$^2$.<br>
      Quelle est la longueur du côté de ce carré ? <br>
      On donnera le résultat sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant.`,o=`On note $x$ la longueur du côté du carré que l'on cherche.<br>
      La différence des aires entre les deux carrés est  $${$}$, on cherche $x$ tel que :   <br>
      $\\begin{aligned}
      (x+${e})^2-x^2&=${$}\\\\
      \\cancel{x^2}+ ${2*e}x+${e}^2-\\cancel{x^2}&=${$}\\\\
       ${2*e}x+${e*e}&=${$}\\\\
        ${2*e}x+${e*e}${u(-e*e)}&=${$}${u(-e*e)}\\\\
         ${2*e}x&=${$-e*e}\\\\
         \\dfrac{${2*e}x}{${u(2*e)}}&=\\dfrac{${$-e*e}}{${u(2*e)}}\\\\
         x&=${f($-e*e,2*e)}\\end{aligned}$
           <br>
           La longueur du côté du carré est  $${f($-e*e,2*e)}$ cm.
 `,A.push(e,$)}break;case"typeE6":{const e=p(1,7),$=p(e+2,14),t=($-e)/2,r=p(1,10)*2*($+e)/2,x=s(0,0,"A","below"),a=s(9,0,"H","below"),m=s(15,0,"B","below"),g=s(15,8,"C"),y=s(9,8,"D"),E=s(0,-1,"E"),S=s(15,-1,"F");b.push(l(x,y),N(E,S),l(x,m),l(m,g),l(y,g),l(y,a),L(x,m,g),L(m,g,y),D(x,a,y,m,g),L(m,a,y)),b.push(k(`${O(e)} cm`,y,g,"black",.5),k(`${O($)} cm`,E,S,"black",-.5),h("x",i(m,g).x+.5,i(m,g).y,0,"black",1,"milieu",!0)),C=" $ABCD$ est un trapèze rectangle.<br> ",C+="Le schéma ci-dessous n'est pas à l'échelle.<br>"+B({xmin:-1,ymin:-2,xmax:16,ymax:10,pixelsParCm:20,scale:1},b),C+=`Sachant que l'aire de ce trapèze est $${r}$ cm$^2$ et en utilisant les données du graphique, déterminer la hauteur de ce trapèze.<br>
                    <br>`,o=B({xmin:-1,ymin:-3,xmax:16,ymax:10,pixelsParCm:20,scale:.7},b),o+=`<br>La  hauteur du trapèze est  $x$. Il est constitué du rectangle $HBCD$ et du triangle rectangle $AHD$. <br>
                    Son aire est donc la somme des aires de ces deux figures. <br>
                    $\\bullet~$ L' aire du rectangle $HBCD$ est : $${e}\\times x=${d(e,0)}$.<br>
                    $\\bullet~$ L' aire de triangle rectangle $AHD$ est : $\\dfrac{(${$}-${e})\\times x}{2}=${d(($-e)/2,0)}$.
                    <br>
                    Puisque l'aire du trapèze est $${r}$ cm$^2$, $x$ est donc la solution de l'équation : $${d(e,0)} + ${d(($-e)/2,0)}=${r}$.<br>
                    $\\begin{aligned}
                    ${d(e,0)} + ${d(($-e)/2,0)}&=${r}\\\\
                    ${c(e+($-e)/2)}x&=${r}\\\\
                    \\dfrac{${c(e+t)}x}{${u(c(e+t))}}&=\\dfrac{${r}}{${u(c(e+t))}}\\\\
                    x&=${f(r,e+t)}
                    \\end{aligned}$<br>
                    La hauteur du trapèze est : $${f(r,e+t)}$ cm.`,A.push($,e,r,t)}break;case"typeE7":{const e=p(3,8),$=p(1,6),t=p(1,6),r=(p(1,20)*(2*e+$)+2*e*t+t*$)/2,x=s(0,0,"A","below"),a=s(5,6,"H","below"),m=s(10,0,"B","below"),g=s(10,6,"C"),y=s(0,6,"D"),E=s(5,10,"E");b.push(l(x,m),l(m,g),l(g,y),l(x,y),l(E,g),l(E,y),l(E,a),L(E,a,g),D(x,a,y,m,g,E),M("//","blue",y,E,E,g)),b.push(h(`${c(e)}`,i(m,g).x+.4,i(m,g).y,0,"black",1,"milieu",!0),h(`${c($)}`,i(E,a).x+.4,i(E,a).y,0,"black",1,"milieu",!0),h(`x + ${c(t)}`,i(x,m).x+.4,i(x,m).y-.4,0,"black",1,"milieu",!0)),C=` La figure ci-dessous (qui n'est pas à l'échelle) est composée d'un rectangle $ABCD$ et d'un triangle isocèle $DEC$. <br>
        L'unité est le mètre.<br> `+B({xmin:-1,ymin:-1,xmax:12,ymax:11,pixelsParCm:20,scale:1},b),C+=`Sachant que l'aire de cette figure est $${c(r)}$ m$^2$ et en utilisant les données du graphique, déterminer la  valeur exacte de $x$.<br>
         <br>`,o=B({xmin:-1,ymin:-1,xmax:16,ymax:11,pixelsParCm:20,scale:.7},b),o+=`<br>La figure est  constituée du rectangle $ABCD$ et du triangle isocèle $DEC$.   <br>
        Son aire est donc la somme des aires de ces deux figures. <br>
        $\\bullet~$ L' aire du rectangle $ABCD$ est : $${e}\\times (x+${t})=${d(e,e*t)}$ ;<br>
        $\\bullet~$ L' aire de triangle isocèle $DEC$ est : $\\dfrac{${$}\\times(x +${t})}{2}=${f($,2)}(x+${t})=${d($/2,$*t/2)}$.<br>
        L'aire de la figure étant $${c(r)}$ m$^2$, on cherche $x$ tel que : <br>
        $\\begin{aligned}
        (${d(e,e*t)})+(${d($/2,$*t/2)})&=${c(r)}\\\\
        ${d(e,e*t)}+${d($/2,$*t/2)}&=${c(r)}\\\\
        ${d(e+$/2,e*t+$*t/2)}&=${c(r)}\\\\
        ${d(e+$/2,e*t+$*t/2)}${u(c(-e*t-$*t/2))}&=${r}${u(c(-e*t-$*t/2))}\\\\
                ${d(e+$/2,0)}&=${d(0,r-e*t-$*t/2)}\\\\
                \\dfrac{${d(e+$/2,0)}}{${u(c(e+$/2))}}&=\\dfrac{${c(r-e*t-$*t/2)}}{${u(c(e+$/2))}}\\\\
                x&=${f((r-e*t-$*t/2)*10,(e+$/2)*10)}
                \\end{aligned}$<br>
                La valeur de $x$ cherchée est donc : $ ${f((r-e*t-$*t/2)*10,(e+$/2)*10)}$.
                `,A.push(e,$,t,r)}break;case"typeE8":default:{const e=p(10,50),$=s(0,0,"A","below"),t=s(10,0,"B","below"),n=s(10,6,"C"),r=s(4,6,"D"),x=s(2,3.46,"E"),a=s(4,0,"M","below"),m=s(10,-1,"K"),g=s(0,-1,"L");b.push(l($,t),l($,x),N(m,g),l(x,a),l(a,r),l(t,n),l(r,n),L(t,a,r),L(a,t,n),L(t,n,r),L(n,r,a),D($,a,t,n,r,x),M("//","blue",$,x,x,a,$,a),M("/","blue",a,t,t,n,n,r,r,a)),b.push(h("$x$",i($,a).x,i($,a).y-.3,0,"black",2,"milieu",!0),h(`${c(e)}`,i($,t).x,i($,t).y-1.5,0,"black",1,"milieu",!0)),C=`$[AB]$ est un segment de longueur $${e}$ et $M$ est un point de ce segment.<br>
      Du même côté du segment $[AB]$, on trace le triangle équilatéral $AME$ et le carré $MBCD$.<br>
      On pose $AM=x$.<br>
     Déterminer la valeur de $x$ pour que le périmètre du triangle $AME$ soit égal à celui du carré $MBCD$.  `,o="<br>",o+=B({xmin:-1,ymin:-3,xmax:12,ymax:8,pixelsParCm:30,scale:2},b),o+=` Le triangle $AME$ est un triangle équilatéral de côté $x$, son périmètre est donc  $3x$.<br>
      
      Le carré $MBCD$ a pour côté $MB=${e}-x$. Son périmètre est donc : $4\\times (${e}-x)=${d(-4,4*e)} $.
      <br>
      On cherche $x$ tel que : <br>
      $\\begin{aligned}
      ${d(-4,4*e)}&=3x\\\\
      ${d(-4,4*e)} ${u("-3\\textit{x}")}&=3x${u("-3\\textit{x}")}\\\\
      ${d(-7,4*e)}&=0\\\\
      ${d(-7,4*e)}${u(-4*e)}&=0${u(-4*e)}\\\\
      \\dfrac{${d(-7,0)}}{${u("-7")}}&=\\dfrac{${d(0,-4*e)}}{${u("-7")}}\\\\
      x&=${f(-4*e,-7)}
      \\end{aligned}$<br>
      Les deux périmètres sont égaux lorsque  : $x=${f(-4*e,-7)}$.
      `,A.push(e)}break}this.questionJamaisPosee(q,A.map(String).join())&&(this.listeQuestions[q]=C,this.listeCorrections[q]=o,q++),w++}z(this)}}export{te as dateDePublication,ne as default,ae as refs,$e as titre,re as uuid};
