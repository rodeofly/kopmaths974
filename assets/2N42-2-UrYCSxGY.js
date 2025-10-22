import{y as c,af as b,m as d,a as t,l as f,s as p}from"./embellissements-BYV7mIDn.js";import{E as u}from"./Exercice-DtXhjCyI.js";import{a as g}from"./questionMathLive-DdRvWqlN.js";import{h}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const R=!0,S="mathLive",V="Exprimer une variable en fonction des autres à  partir de formules mathématiques",G="02/10/2023",H="06/11/2024",K="96bac",W={"fr-fr":["2N42-2","BP2AutoJ1"],"fr-ch":["11FA5-4"]};class X extends u{constructor(){super(),this.besoinFormulaireNumerique=["Cas possibles",3,`1 : Sans rappel de formule
 2 : Avec rappel d'une formule
 3 : Mélange `],this.nbQuestions=1,this.sup=1}nouvelleVersion(){let s=[];this.sup===1?s=c([1,2,3,4,5,6,7,8,9,10,11,12,13,14]):this.sup===2?s=c([15,16,17,18,19,20,21,22]):s=c([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]);const l=b(s,this.nbQuestions);for(let a=0,o=0;a<this.nbQuestions&&o<50;){const m=l[a];let n="",r="",$="",i=[];switch(m){case 1:$="c",r="Exprimer le côté $c$ d'un carré  en fonction de son périmètre $P$.<br>",i=["\\dfrac{P}{4}","0.25\\times P","P\\times 0.25"],n=`Le périmètre $P$ d'un carré en fonction de son côté $c$ est donné par $P=4\\times c$.<br>
          On isole $c$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
      P&=4\\times c\\\\
      \\dfrac{P}{4}&=c
                 \\end{aligned}$ <br>      
                 Ainsi, $c=${d("\\dfrac{P}{4}")}$. `;break;case 2:$="c",r="Exprimer le côté $c$ d'un triangle équilatéral  en fonction de son périmètre $P$.<br>",i=["\\dfrac{P}{3}","\\dfrac{P}{3}","\\dfrac{1}{3}\\times P","P\\times \\dfrac{1}{3}"],n=`Le périmètre $P$ d'un triangle équilatéral en fonction de son côté $c$ est donné par $P=3\\times c$.<br>
          On isole $c$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
      P&=3\\times c\\\\
     \\dfrac{P}{3}&=c
     \\end{aligned}$ <br>      
    Ainsi, $c=${d("\\dfrac{P}{3}")}$. `;break;case 3:$="r",r="Exprimer le rayon $r$ d'un cercle  en fonction de son périmètre $P$.<br>",i=["\\dfrac{P}{2\\pi}","\\dfrac{1}{2\\pi}\\times P","\\dfrac{1}{2\\pi}\\times P"],n=`Le périmètre $P$ d'un cerclce en fonction de son rayon $r$ est donné par $P=2\\pi r$.<br>
          On isole $r$ dans un membre de l'égalité :<br>
           $\\begin{aligned}
 P&=2\\times \\pi \\times r\\\\
  \\dfrac{P}{2\\times \\pi}&=r
 \\end{aligned}$ <br>      
   Ainsi, $r=\\dfrac{P}{2\\times \\pi}$ ou encore $r=${d("\\dfrac{P}{2\\pi}")}$.`;break;case 4:$="d",r="Exprimer le diamètre $d$ d'un cercle  en fonction de son périmètre $P$.<br>",i=["\\dfrac{P}{\\pi}","\\dfrac{1}{\\pi}\\times P"],n=`Le périmètre $P$ d'un cerclce en fonction de son diamètre $d$ est donné par $P=\\pi \\times d$.<br>
          On isole $d$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
     P&=\\pi \\times d\\\\
     \\dfrac{P}{\\pi}&=d
       \\end{aligned}$ <br>      
     Ainsi, $d=${d("\\dfrac{P}{\\pi}")}$.`;break;case 5:$="P",r="Exprimer le périmètre $P$  d'un cercle  en fonction de son diamètre $d$.<br>",i=["\\pi\\times d","\\pi\\times d"],n=`Le périmètre $P$ d'un cerclce en fonction de son diamètre $d$ est donné par $P=\\pi \\times d$ ou encore $P=${d("\\pi d")}$.`;break;case 6:$="P",r="Exprimer le périmètr $P$  d'un cercle  en fonction de son rayon $r$.<br>",i=["2\\pi\\times r","2\\pi\\times r"],n=`Le périmètre $P$ d'un cerclce en fonction de son rayon $r$ est donné par $P=2\\pi\\times r$ ou plus simplement $P=${d("2\\pi r")}$.`;break;case 7:$="c",r="Exprimer le côté $c$ d'un carré  en fonction de son aire $A$.<br>",i=["\\sqrt{A}"],n=`L'aire $A$ d'un carré en fonction de son côté $c$ est donnée par $A=c^2$.<br>
          On isole $c$ dans un membre de l'égalité :<br>
  $\\begin{aligned}
  A&=c^2\\\\
  \\sqrt{A}&=c
  \\end{aligned}$ <br>      
  Ainsi, $c=${d("\\sqrt{A}")}$.`;break;case 8:$="d",r="Exprimer le diamètre $d$ d'un cercle  en fonction de son périmètre $P$.<br>",i=["\\dfrac{P}{\\pi}","\\dfrac{2P}{2\\pi}"],n=`Le périmètre d'un cercle en fonction de son rayon $r$ est donné par $P=2\\times \\pi\\times r$.<br>
    Or $r=\\dfrac{d}{2}$, donc le périmètre d'un cercle en fonction de son diamètre $d$ est donné par $P=2\\times \\pi\\times \\dfrac{d}{2}$.<br>
    On isole $d$ dans un membre de l'égalité :<br>
    $\\begin{aligned}
    P&=2\\times \\pi\\times \\dfrac{d}{2}\\\\
    P&= \\pi\\times d\\\\
    \\dfrac{P}{\\pi}&=d
    \\end{aligned}$ <br>      
    Ainsi, $d=${d("\\dfrac{P}{\\pi}")}$.`;break;case 9:$="r",r="Exprimer le rayon $r$ d'un disque en fonction de son aire $A$.<br>",i=["\\sqrt{\\dfrac{A}{\\pi}}","\\dfrac{\\sqrt{A}}{\\sqrt{\\pi}}"],n=`L'aire $A$ d'un disque en fonction de son rayon $r$ est donnée par $A=\\pi\\times r^2$.<br>
          On isole $r$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
    A&=\\pi\\times r^2\\\\
    \\dfrac{A}{\\pi}&=r^2\\\\
    \\sqrt{ \\dfrac{A}{\\pi}}&=r
    \\end{aligned}$ <br>  
    Ainsi, $r=\\sqrt{\\dfrac{A}{\\pi}}$ ou encore $r=${d("\\dfrac{\\sqrt{A}}{\\sqrt{\\pi}}")}$.`;break;case 10:$="d",r="Exprimer le diamètre $d$ d'un disque en fonction de son aire $A$.<br>",i=["\\sqrt{\\dfrac{4\\times A}{\\pi}}","\\dfrac{2\\sqrt{A}}{\\sqrt{\\pi}}","2\\times\\sqrt{\\dfrac{A}{\\pi}}","2\\times\\dfrac{\\sqrt{A}}{\\sqrt{\\pi}}"],n=`L'aire $A$ d'un disque en fonction de son rayon $r$ est donnée par $A=\\pi\\times r^2$.<br>
      Comme $r=\\dfrac{d}{2}$, alors $A=\\pi\\times \\left(\\dfrac{d}{2}\\right)^2$.<br>
      On isole $d$ dans un membre de l'égalité :<br>
      $\\begin{aligned}
      A&=\\pi\\times \\left(\\dfrac{d}{2}\\right)^2\\\\
      A&=\\pi \\times \\dfrac{d^2}{4}\\\\
     4\\times A &=\\pi \\times d^2\\\\
    \\dfrac{4\\times A}{\\pi} &= d^2\\\\
    \\sqrt{\\dfrac{4\\times A}{\\pi}} &= d
      \\end{aligned}$ <br>  
      Ainsi, $d=\\sqrt{\\dfrac{4\\times A}{\\pi}}$ ou encore $d=${d("2\\dfrac{\\sqrt{A}}{\\sqrt{\\pi}}")}$.`;break;case 11:{const e=t([["longueur","L","largeur","l"],["largeur","l","longueur","L"]]);$=e[1],r=`Exprimer la ${e[0]} $${e[1]}$ d'un rectangle en fonction de son périmètre $P$ et de sa ${e[2]} $${e[3]}$.<br>`,i=[`\\dfrac{P-2${e[3]}}{2}`,`\\dfrac{P}{2}-${e[3]}`],n=`Le périmètre $P$ d'un rectangle en fonction de sa longueur et de largeur est donné par $P=2L+2l$.<br>
          On isole $${e[1]}$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
    P&=2L+2l\\\\
   P-2${e[3]}&=2${e[1]}\\\\
    \\dfrac{P-2${e[3]}}{2}&=${e[1]}
    \\end{aligned}$ <br>  
    Ainsi, $${e[1]}=${d(`\\dfrac{P-2${e[3]}}{2}`)}$ ou, par exemple $${e[1]}=\\dfrac{P}{2}-${e[3]}$.`}break;case 12:{const e=t([["longueur","L","largeur","l"],["largeur","l","longueur","L"]]);$=e[1],r=`Exprimer la ${e[0]} $${e[1]}$ d'un rectangle en fonction de son aire $A$ et de sa ${e[2]} $${e[3]}$.<br>`,i=[`\\dfrac{A}{${e[3]}}`],n=`L'aire $A$ d'un rectangle en fonction de sa longueur et de largeur est donnée par $A=L\\times l$.<br>
          On isole $${e[1]}$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
A&=L\\times l\\\\
\\dfrac{A}{${e[3]}}&=${e[1]}\\\\
\\end{aligned}$ <br>  
Ainsi, $${e[1]}=${d(`\\dfrac{A}{${e[3]}}`)}$.`}break;case 13:$="d",r="Exprimer le diamètre $d$ d'un cercle  en fonction de son rayon $r$.<br>",i=["2\\times r"],n=`Le diamètre d'un cercle est le double de son rayon. <br>
  Ainsi, $d=2\\times r$ ou encore $${d("d=2r")}$.`;break;case 14:$="r",r="Exprimer le rayon $r$ d'un cercle  en fonction de son diamètre $d$.<br>",i=["\\dfrac{d}{2}","\\dfrac{1}{2}\\times d","0.5\\times d"],n=`Le diamètre d'un cercle est le double de son rayon, donc le rayon est la moitié du diamètre : <br>
   Ainsi,  $r=${d("\\dfrac{d}{2}")}$.`;break;case 15:{const e=t([["hauteur","h","base","B"],["Base","B","hauteur","h"]]);$=e[1],r=`L'aire $A$ d'un triangle est donnée par : $A=\\dfrac{B\\times h}{2}$, avec $B$ la longueur d'un côté et $h$ la hauteur relative à ce côté.<br>
 Exprimer $${e[1]}$ en fonction de $A$ et de $${e[3]}$.<br>`,i=[`\\dfrac{2\\times A}{${e[3]}}`,`2\\times\\dfrac{A}{${e[3]}}`,`\\dfrac{2}{${e[3]}}\\times A`],n=`On isole $${e[1]}$ dans un membre de l'égalité :<br>
       $\\begin{aligned}
      A&=\\dfrac{B\\times h}{2}\\\\
      A\\times 2&=B\\times h\\\\
      \\dfrac{A\\times 2}{${e[3]}}&= ${e[1]}
                     \\end{aligned}$
      <br> 
     Une expression de  $${e[1]}$ en fonction de $A$ et de $${e[3]}$ est $${e[1]}=\\dfrac{A\\times 2}{${e[3]}}$ ou plus simplement $${e[1]}=${d(`\\dfrac{2A}{${e[3]}}`)}$.`}break;case 16:{const e=t([["b","B"],["B","b"]]);$=e[0],r=`L'aire $A$ d'un trapèze est donnée par : $A=\\dfrac{(b+B)\\times h}{2}$, avec $B$ la longueur de la grande base, $b$ la longueur de la petite base et  $h$ la hauteur du trapèze.<br>
Exprimer $${e[0]}$ en fonction de $A$, de $${e[1]}$ et de $h$.<br>`,i=[`2\\times\\dfrac{A}{h}-${e[1]}`,`\\dfrac{2\\times A}{h}-${e[1]}`,`\\dfrac{2\\times A-${e[1]}\\times h}{h}`],n=`On isole $${e[0]}$ dans un membre de l'égalité :<br>
    $\\begin{aligned}
   A&=\\dfrac{(b+B)\\times h}{2}\\\\
  2\\times A&=(b+B)\\times h\\\\
  \\dfrac{2A}{h}&=b+B\\\\
  \\dfrac{2A}{h}-${e[1]}   &=${e[0]}\\end{aligned}$
     <br> 
    
 Une expression de  $${e[0]}$ en fonction de $A$, de  $${e[1]}$ et de $h$ est $${e[0]}=${d(`\\dfrac{2A}{h}-${e[1]}`)}$.`}break;case 17:$="h",r=`L'aire $A$ d'un trapèze est donnée par : $A=\\dfrac{(b+B)\\times h}{2}$, avec $B$ la longueur de la grande base, $b$ la longueur de la petite base et  $h$ la hauteur du trapèze.<br>
Exprimer $h$ en fonction de $A$, de $B$ et de $b$.<br>`,i=["\\dfrac{2\\times A}{B+b}","2\\times \\dfrac{A}{B+b}"],n=`On isole $h$ dans un membre de l'égalité :<br>
 $\\begin{aligned}
  A&=\\dfrac{(b+B)\\times h}{2}\\\\
  2\\times A&=(b+B)\\times h\\\\
  \\dfrac{2A}{b+B}&=h
  \\end{aligned}$
     <br> 
                 
  Une expression de  $h$ en fonction de $A$, de  $B$ et de $b$ est $h= ${d("\\dfrac{2A}{b+B}")}$.`;break;case 18:{const e=t([["a","b"],["b","a"]]);$=e[0],r=`La moyenne arithmétique de deux nombres $a$ et $b$ est le nombre $m$ défini par  : 
      $m=\\dfrac{a+b}{2}$.<br>
     Exprimer $${e[0]}$ en fonction de $m$ et de $${e[1]}$.<br>`,i=[`2\\times m - ${e[1]}`,`-${e[1]}+2\\times m`],n=`On isole $${e[0]}$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
        m&=\\dfrac{a+b}{2}\\\\
       2\\times m&=a+b\\\\
       2\\times m-${e[1]}&=${e[0]}\\end{aligned}$
          <br> 
         
      Une expression de  $${e[0]}$ en fonction de $m$ et de $${e[1]}$ est $${e[0]}=${d(`2m-${e[1]}`)}$.`}break;case 19:{const e=t([["a","b"],["b","a"]]);$=e[0],r=`La moyenne géométrique de deux nombres non nuls $a$ et $b$ (de même signe) est le nombre $m$ défini par  : 
      $m=\\sqrt{a\\times b}$.<br>
     Exprimer $${e[0]}$ en fonction de $m$ et de $${e[1]}$.<br>`,i=[`\\dfrac{m^2}{${e[1]}}`,`\\dfrac{1}{${e[1]}}\\times m^2`],n=`On isole $${e[0]}$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
        m&=\\sqrt{a\\times b}\\\\
        m^2&=a\\times b\\\\
       \\dfrac{m^2}{${e[1]}}&=${e[0]}\\end{aligned}$
          <br> 
         
      Une expression de  $${e[0]}$ en fonction de $m$ et de $${e[1]}$ est  $${d(`\\dfrac{m^2}{${e[1]}}`)}$.`}break;case 20:{const e=t([["a","b"],["b","a"]]);$=e[0],r=`La moyenne harmonique de deux nombres non nuls $a$ et $b$  est le nombre $h$ défini par  : 
      $\\dfrac{1}{h}=\\dfrac{1}{2}\\left(\\dfrac{1}{a}+\\dfrac{1}{b}\\right)$.<br>
     Exprimer $${e[0]}$ en fonction de $h$ et de $${e[1]}$.<br>`,i=[`\\dfrac{1}{\\dfrac{2}{h}-\\dfrac{1}{${e[1]}}}`,`\\dfrac{${e[1]}\\times h}{2\\times ${e[1]}-h}`,`\\dfrac{1}{\\dfrac{2\\times ${e[1]}-h}{${e[1]}\\times h}}`],n=`On isole $${e[0]}$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
         \\dfrac{1}{h}&=\\dfrac{1}{2}\\left(\\dfrac{1}{a}+\\dfrac{1}{b}\\right)\\\\
         \\dfrac{2}{h}&=\\dfrac{1}{a}+\\dfrac{1}{b}\\\\
         \\dfrac{2}{h}-\\dfrac{1}{${e[1]}}&=\\dfrac{1}{${e[0]}}\\\\
       \\dfrac{1}{\\dfrac{2}{h}-\\dfrac{1}{${e[1]}}}&=${e[0]}\\\\
       \\dfrac{1}{\\dfrac{2${e[1]}}{${e[1]}h}-\\dfrac{h}{${e[1]}h}}&=${e[0]}\\\\
       \\dfrac{1}{\\dfrac{2${e[1]}-h}{${e[1]}h}}&=${e[0]}\\\\
       \\dfrac{${e[1]}h}{2${e[1]}-h}&=${e[0]}
       \\end{aligned}$
          <br> 
         
      Une expression de  $${e[0]}$ en fonction de $h$ et de $${e[1]}$ est  $${e[0]}=${d(`\\dfrac{${e[1]}h}{2${e[1]}-h}`)}$.`}break;case 21:$="F",r=`Le taux d'évolution  entre deux valeurs $I$ et  $F$ est le nombre $T$ défini par  : 
      $T=\\dfrac{F-I}{I}$.<br>
     Exprimer $F$ en fonction de $I$ et de $T$.<br>`,i=["T\\times I+I","I\\times(T+1)"],n=`On isole $F$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
         T&=\\dfrac{F-I}{I}\\\\
         T\\times I&=F-I\\\\
         T\\times I+I&=F
       \\end{aligned}$
          <br> 
         
      Une expression de  $F$ en fonction de $T$ et de $I$ est  $F=T\\times I +I$ ou encore $F=${d("I(T+1)")}$.`;break;case 22:default:$="I",r=`Le taux d'évolution  entre deux valeurs $I$ et  $F$ est le nombre $T$ défini par  : 
      $T=\\dfrac{F-I}{I}$.<br>
     Exprimer $I$ en fonction de $F$ et de $T$.<br>`,i=["\\dfrac{F}{T+1}"],n=`On isole $I$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
         T&=\\dfrac{F-I}{I}\\\\
         T\\times I+I&=F\\\\
         I(T+1)&=F\\\\
         I&=\\dfrac{F}{T+1}
       \\end{aligned}$
          <br> 
         
      Une expression de  $I$ en fonction de $T$ et de $F$ est  $I=${d("\\dfrac{F}{T+1}")}$.`;break}this.interactif&&(r+="<br>"+g(this,a," alphanumeric  ",{texteAvant:p(10)+`$${$} =$`})),h(this,a,{reponse:{value:i}}),this.questionJamaisPosee(a,m,$)&&(this.listeQuestions[a]=r,this.listeCorrections[a]=n,a++),o++}f(this)}}export{H as dateDeModifImportante,G as dateDePublication,X as default,R as interactifReady,S as interactifType,W as refs,V as titre,K as uuid};
