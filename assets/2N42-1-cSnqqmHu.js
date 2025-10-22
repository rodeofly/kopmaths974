import{af as E,y as i,a as p,r as u,m as c,s as v,l as q}from"./embellissements-BYV7mIDn.js";import{E as U}from"./Exercice-DtXhjCyI.js";import{a as S}from"./questionMathLive-DdRvWqlN.js";import{h as O}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const H=!0,Y="mathLive",Z="Exprimer une variable en fonction des autres",_="25/09/2023",$$="27/09/2024",e$="ef686",n$={"fr-fr":["2N42-1"],"fr-ch":["11FA5-3"]};class i$ extends U{constructor(){super(),this.besoinFormulaireNumerique=["Niveau de difficulté",4,`1 : Niveau 1
 2 : Niveau 2
 3 : Niveau 3
 4 : Mélange des niveaux précédents`],this.nbQuestions=1,this.sup=1}nouvelleVersion(){let l=[];this.sup===1?l=[1]:this.sup===2?l=[2]:this.sup===3?l=[3]:l=[1,2,3];const h=E(l,this.nbQuestions);for(let d=0,t,n,r,x=0,b,e,o,$,a,s;d<this.nbQuestions&&x<50;){switch(b=h[d],n="",b){case 1:o=[i(["a","b","c"]),i(["x","y","z"]),i(["u","v","w"]),i(["A","B","C"]),i(["R","S","T"]),i(["I","J","K"]),i(["c","d","e"]),i(["K","L","M"]),i(["r","s","t"]),i(["U","V","W"])],$=p(o),a=u(1,5),a===1?(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres vérifiant l'égalité : 
          $${$[0]}=${$[1]}-${$[2]}$.<br>
          Exprimer $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$.`,s=$[1],r=`${$[0]}+${$[2]}`,n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
            $\\begin{aligned}
            ${$[0]}&=${$[1]}-${$[2]}\\\\
            ${$[0]}+${c($[2])}&=${$[1]}-${$[2]}+${c($[2])}\\\\
            ${$[0]}+${$[2]}&= ${$[1]}
                           \\end{aligned}$
                       <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$ est $${$[1]}= ${$[0]}+${$[2]}$.`):a===2?(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres vérifiant l'égalité :
             $${$[0]}=${$[1]}+${$[2]}$.<br>
            Exprimer $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$.`,s=$[1],r=[`${$[1]}=${$[0]}-${$[2]}`,`${$[0]}-${$[2]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
              $\\begin{aligned}
              ${$[0]}&=${$[1]}+${$[2]}\\\\
              ${$[0]}-${c($[2])}&=${$[1]}-${$[2]}-${c($[2])}\\\\
              ${$[0]}-${$[2]}&= ${$[1]}
                             \\end{aligned}$
                         <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$ est $${$[1]}= ${$[0]}-${$[2]}$.`):a===3?(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres non nuls vérifiant l'égalité  : 
  $${$[0]}=\\dfrac{${$[1]}}{${$[2]}}$.<br>
                            Exprimer $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$.`,s=$[1],r=[`${$[0]}\\times ${$[2]}`,`${$[0]}\\times ${$[2]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
                              $\\begin{aligned}
                              ${$[0]}&=\\dfrac{${$[1]}}{${$[2]}}\\\\
                              ${$[0]}\\times ${$[2]}&=${$[1]}                              
                                             \\end{aligned}$
                                         <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$ est $${$[1]}=${$[0]}\\times ${$[2]}$.`):a===4?(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres non nuls vérifiant l'égalité  :
  $${$[0]}=\\dfrac{${$[1]}}{${$[2]}}$.<br>
Exprimer $${$[2]}$ en fonction de $${$[0]}$ et $${$[1]}$.`,s=$[2],r=`\\dfrac{${$[1]}}{${$[0]}}`,n=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
$\\begin{aligned}   
 ${$[0]}&=\\dfrac{${$[1]}}{${$[2]}}\\\\
 ${$[0]}\\times ${$[2]}&=${$[1]} \\\\
 ${$[2]}&=\\dfrac{${$[1]}}{${$[0]}}                        
 \\end{aligned}$
<br> Une expression de $${$[2]}$ en fonction de $${$[0]}$ et $${$[1]}$ est $${$[2]}=\\dfrac{${$[1]}}{${$[0]}}$.`):(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres non nuls vérifiant l'égalité  :
  $${$[0]}=${$[1]}\\times ${$[2]}$.<br>
  Exprimer $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$.`,s=$[1],r=`${$[1]}=\\dfrac{${$[0]}}{${$[2]}}`,n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
    $\\begin{aligned}
    ${$[0]}&=${$[1]}\\times ${$[2]}\\\\
    \\dfrac{${$[0]}}{${$[2]}}&=${$[1]}
                   \\end{aligned}$
               <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$ est $${$[1]}= \\dfrac{${$[0]}}{${$[2]}}$.`);break;case 2:o=[i(["a","b","c","e"]),i(["x","y","z","w"]),i(["u","v","w","t"]),i(["A","B","C","E"]),i(["R","S","T","U"]),i(["I","J","K","L"]),i(["c","g","e","f"]),i(["c","m","f","e"]),i(["K","L","M","N"]),i(["r","s","t","u"]),i(["U","V","W","X"])],$=p(o),a=u(1,12),a===1?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e} $${$[0]}=${$[1]}-${$[2]}${$[3]}$.<br>
   Exprimer $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$.`,s=$[2],r=[`\\dfrac{${$[1]}-${$[0]}}{${$[3]}}`,`\\dfrac{${$[0]}-${$[1]}}{-${$[3]}}`],n=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
       $\\begin{aligned}
      ${$[0]}&=${$[1]}-${$[2]}${$[3]}\\\\
      ${$[0]}-${$[1]}&=-${$[2]}${$[3]}\\\\
       -${$[0]}+${$[1]}&= ${$[2]}${$[3]}\\\\
       \\dfrac{-${$[0]}+${$[1]}}{${$[3]}}&=${$[2]}
                 \\end{aligned}$
      <br> Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$ est $${$[2]}=  \\dfrac{${$[1]}-${$[0]}}{${$[3]}}$.`):a===2?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres (avec $${$[2]}$ non nul) vérifiant l'égalité  :`,t=`${e} $${$[0]}=${$[1]}-${$[2]}${$[3]}$.<br>
          Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$.`,s=$[3],r=[`\\dfrac{${$[1]}-${$[0]}}{${$[2]}}`,`\\dfrac{${$[0]}-${$[1]}}{-${$[2]}}`],n=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
              $\\begin{aligned}
             ${$[0]}&=${$[1]}-${$[2]}${$[3]}\\\\
             ${$[0]}-${$[1]}&=-${$[2]}${$[3]}\\\\
              -${$[0]}+${$[1]}&= ${$[2]}${$[3]}\\\\
              \\dfrac{-${$[0]}+${$[1]}}{${$[2]}}&=${$[3]}
                        \\end{aligned}$
      <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$ est $${$[3]}=  \\dfrac{${$[1]}-${$[0]}}{${$[2]}}$.`):a===3?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres vérifiant l'égalité :`,t=`${e} $${$[0]}=${$[1]}-${$[2]}${$[3]}$.<br>
     Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$.`,s=$[1],r=[`${$[0]}+${$[2]}${$[3]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
         $\\begin{aligned}
        ${$[0]}&=${$[1]}-${$[2]}${$[3]}\\\\
        ${$[0]}+${$[2]}${$[3]}&=${$[1]}
                   \\end{aligned}$
 <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[2]}$ est $${$[1]}= ${$[0]}+${$[2]}${$[3]}$.`):a===4?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres (avec $${$[2]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=${$[1]}${$[2]}+${$[3]}$.<br>
    Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$.`,s=$[1],r=[`\\dfrac{${$[0]}-${$[3]}}{${$[2]}}`,`\\dfrac{-${$[0]}+${$[3]}}{-${$[2]}}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
        $\\begin{aligned}
       ${$[0]}&=${$[1]}${$[2]}+${$[3]}\\\\
       ${$[0]}-${$[3]}&=${$[1]}${$[2]}\\\\
        \\dfrac{${$[0]}-${$[3]}}{${$[2]}}&=${$[1]}
                  \\end{aligned}$
       <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$ est $${$[1]}=  \\dfrac{${$[0]}-${$[3]}}{${$[2]}}$.`):a===5?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres vérifiant l'égalité suivante :`,t=`${e}  $${$[0]}=${$[1]}${$[2]}+${$[3]}$.<br>
     Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$.`,s=$[3],r=`${$[0]}-${$[1]}${$[2]}`,n=`On isole $${$[3]}$ dans un membre de l'égalité :<br> 
 $\\begin{aligned}
 ${$[0]}&=${$[1]}${$[2]}+${$[3]}\\\\
  ${$[0]}-${$[1]}${$[2]}&=${$[3]}
 \\end{aligned}$
   <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$ est $${$[3]}=  ${$[0]}-${$[1]}${$[2]}$.`):a===6?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}$.<br>
  Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$.`,s=$[1],r=`${$[3]}\\times ${$[0]}-${$[2]}`,n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}\\\\
 ${$[0]}\\times ${$[3]}&=${$[1]}+${$[2]}\\\\
 ${$[0]}\\times ${$[3]}-${$[2]}&=${$[1]}
 \\end{aligned}$
    <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$ est $${$[1]}= ${$[3]}\\times ${$[0]}-${$[2]}$.`):a===7?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}$.<br>
  Exprimer $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$.`,s=$[2],r=`${$[3]}\\times ${$[0]}-${$[1]}`,n=`On isole $${$[2]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}\\\\
 ${$[0]}\\times ${$[3]}&=${$[1]}+${$[2]}\\\\
 ${$[0]}\\times ${$[3]}-${$[1]}&=${$[2]}
 \\end{aligned}$
    <br> Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$ est $${$[2]}= ${$[3]}\\times ${$[0]}-${$[1]}$.`):a===8?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[3]}$ et $${$[0]}$  non nuls) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}$.<br>
  Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$.`,s=$[3],r=[`\\dfrac{${$[1]} +${$[2]}}{${$[0]}}`,`\\dfrac{-${$[1]} -${$[2]}}{-${$[0]}}`],n=`On isole $${$[3]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}\\\\
 ${$[0]}\\times ${$[3]}&=${$[1]}+${$[2]}\\\\
  ${$[3]}&=\\dfrac{${$[1]} +${$[2]}}{${$[0]}}
 \\end{aligned}$
    <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$ est $${$[3]}= \\dfrac{${$[1]} +${$[2]}}{${$[0]}}$.`):a===9?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=(${$[1]}+${$[2]})${$[3]}$.<br>
  Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et  $${$[2]}$.`,s=$[1],r=[`\\dfrac{${$[0]} -${$[2]}\\times ${$[3]}}{${$[3]}}`,`\\dfrac{-${$[0]} +${$[2]}\\times ${$[3]}}{-${$[3]}}`,`\\dfrac{${$[0]}}{${$[3]}}-${$[2]}`,`\\dfrac{${$[0]}}{${$[3]}}-${$[2]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=(${$[1]}+${$[2]})${$[3]}\\\\
 ${$[0]}&=${$[1]}${$[3]}+${$[2]}${$[3]}\\\\
  ${$[0]}-${$[2]}${$[3]}&=${$[1]}${$[3]}\\\\
 \\dfrac{${$[0]}-${$[2]}${$[3]}}{${$[3]}}&=${$[1]}
 \\end{aligned}$
    <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et  $${$[2]}$ est 
    $${$[1]}= \\dfrac{${$[0]} -${$[2]}\\times ${$[3]}}{${$[3]}}$ ou plus simplement $${$[1]}=\\dfrac{${$[0]}}{${$[3]}}-${$[2]}$.`):a===10?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[1]}+${$[2]}$  non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=(${$[1]}+${$[2]})${$[3]}$.<br>
  Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$.`,s=$[3],r=`\\dfrac{${$[0]}}{${$[1]}+${$[2]}}`,n=`On isole $${$[3]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=(${$[1]}+${$[2]})${$[3]}\\\\
\\dfrac{${$[0]}}{${$[1]}+${$[2]}} &=${$[3]}
 \\end{aligned}$
    <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$ est 
    $${$[3]}= \\dfrac{${$[0]}}{${$[1]}+${$[2]}}$.`):a===11?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=(${$[1]}-${$[2]})${$[3]}$.<br>
  Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et  $${$[2]}$.`,s=$[1],r=[`\\dfrac{${$[0]} +${$[2]}\\times ${$[3]}}{${$[3]}}`,`\\dfrac{${$[0]}}{${$[3]}}+${$[2]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=(${$[1]}-${$[2]})${$[3]}\\\\
 ${$[0]}&=${$[1]}${$[3]}-${$[2]}${$[3]}\\\\
  ${$[0]}+${$[2]}${$[3]}&=${$[1]}${$[3]}\\\\
 \\dfrac{${$[0]}+${$[2]}${$[3]}}{${$[3]}}&=${$[1]}
 \\end{aligned}$
    <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et  $${$[2]}$ est 
    $${$[1]}= \\dfrac{${$[0]} +${$[2]}${$[3]}}{${$[3]}}$ ou plus simplement $${$[1]}=\\dfrac{${$[0]}}{${$[3]}}+${$[2]}$.`):(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[3]}$  non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=(${$[1]}-${$[2]})${$[3]}$.<br>
  Exprimer $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$.`,s=$[2],r=[`\\dfrac{-${$[0]} +${$[1]}\\times ${$[3]}}{${$[3]}}`,`${$[1]}-\\dfrac{${$[0]}}{${$[3]}}`],n=`On isole $${$[2]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=(${$[1]}-${$[2]})${$[3]}\\\\
 ${$[0]}&=${$[1]}${$[3]}-${$[2]}${$[3]}\\\\
  ${$[0]}-${$[1]}${$[3]}&=-${$[2]}${$[3]}\\\\
 \\dfrac{${$[0]}-${$[1]}${$[3]}}{-${$[3]}}&=${$[2]}\\\\
 \\dfrac{-${$[0]}+${$[1]}${$[3]}}{${$[3]}}&=${$[2]}
 \\end{aligned}$
    <br> Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$ est 
    $${$[2]}=  \\dfrac{-${$[0]}+${$[1]}${$[3]}}{${$[3]}}$ ou plus simplement : 
    $${$[2]}= ${$[1]} -\\dfrac{${$[0]}}{${$[3]}}$ .`);break;case 3:default:o=[i(["a","b","c","e","f"]),i(["x","y","z","w","v"]),i(["u","v","w","t","r"]),i(["A","B","C","E","F"]),i(["R","S","T","U","V"]),i(["I","J","K","L","M"]),i(["c","g","e","f","h"]),i(["c","m","f","e","a"]),i(["K","L","M","N","P"]),i(["r","s","t","u","a"]),i(["U","V","W","X","R"])],$=p(o),a=u(1,6),a===1?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (avec $${$[3]}-${$[4]}$ non nul) vérifiant l'égalité  :`,t=`${e} $${$[0]}=(${$[1]}+${$[2]})(${$[3]}-${$[4]})$.<br>
       Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$.`,s=$[1],r=[`\\dfrac{${$[0]}-${$[2]}${$[3]}+${$[2]}${$[4]}}{${$[3]}-${$[4]}}`,` \\dfrac{${$[0]}}{${$[3]}-${$[4]}}-${$[2]}`,` \\dfrac{${$[0]}-${$[2]}(${$[3]}-${$[4]})}{${$[3]}-${$[4]}}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
           $\\begin{aligned}
          ${$[0]}&=(${$[1]}+${$[2]})(${$[3]}-${$[4]})\\\\
          ${$[0]}&=${$[1]}${$[3]}-${$[1]}${$[4]}+${$[2]}${$[3]}-${$[2]}${$[4]}\\\\
           ${$[0]}-${$[2]}${$[3]}+${$[2]}${$[4]}&= ${$[1]}(${$[3]}-${$[4]})\\\\
           \\dfrac{${$[0]}-${$[2]}${$[3]}+${$[2]}${$[4]}}{${$[3]}-${$[4]}}&=${$[1]}
                     \\end{aligned}$
          <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[3]}$ et $${$[4]}$ est $${$[1]}=\\dfrac{${$[0]}-${$[2]}${$[3]}+${$[2]}${$[4]}}{${$[3]}-${$[4]}}$ ou plus simplement 
          $${$[1]}= \\dfrac{${$[0]}}{${$[3]}-${$[4]}}-${$[2]}$.`):a===2?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (avec $${$[1]}+${$[2]}$ non nul) vérifiant l'égalité  :`,t=`${e} $${$[0]}=(${$[1]}+${$[2]})(${$[3]}-${$[4]})$.<br>
                Exprimer $${$[4]}$ en fonction de $${$[0]}$, $${$[2]}$, $${$[3]}$ et $${$[1]}$.`,s=$[4],r=[`\\dfrac{${$[0]}-${$[1]}${$[3]}-${$[2]}${$[3]}}{-${$[1]}-${$[2]}}`,`\\dfrac{-${$[0]}+${$[1]}${$[3]}+${$[2]}${$[3]}}{${$[1]}+${$[2]}}`,` \\dfrac{-${$[0]}}{${$[1]}+${$[2]}}+${$[3]}`,`\\dfrac{-${$[0]}+${$[3]}(${$[1]}+${$[2]})}{${$[1]}+${$[2]}}`,`\\dfrac{${$[0]}-${$[3]}(${$[1]}+${$[2]})}{-${$[1]}-${$[2]}}`],n=`On isole $${$[4]}$ dans un membre de l'égalité :<br>
                    $\\begin{aligned}
                   ${$[0]}&=(${$[1]}+${$[2]})(${$[3]}-${$[4]})\\\\
                   ${$[0]}&=${$[1]}${$[3]}-${$[1]}${$[4]}+${$[2]}${$[3]}-${$[2]}${$[4]}\\\\
${$[0]}-${$[1]}${$[3]}-${$[2]}${$[3]}&= -${$[1]}${$[4]}-${$[2]}${$[4]})\\\\
${$[0]}-${$[1]}${$[3]}-${$[2]}${$[3]}&= ${$[4]}(-${$[1]}-${$[2]})\\\\
 \\dfrac{${$[0]}-${$[1]}${$[3]}-${$[2]}${$[3]}}{-${$[1]}-${$[2]}}&=${$[4]}\\\\
 \\dfrac{-${$[0]}+${$[1]}${$[3]}+${$[2]}${$[3]}}{${$[1]}+${$[2]}}&=${$[4]}
                              \\end{aligned}$
                   <br> Une expression de $${$[4]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ est 
                   $${$[4]}=\\dfrac{-${$[0]}+${$[1]}${$[3]}+${$[2]}${$[3]}}{${$[1]}+${$[2]}}$ 
                   ou plus simplement 
                   $${$[4]}= -\\dfrac{${$[0]}}{${$[1]}+${$[2]}}+${$[3]}$.<br>
                   `):a===3?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (avec $${$[3]}-${$[4]}$ et $${$[0]}$ non nuls) vérifiant l'égalité  :`,t=`${e} $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}-${$[4]}}$.<br>
 Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[4]}$.`,s=$[3],r=`\\dfrac{${$[1]}+${$[2]}+${$[0]}${$[4]}}{${$[0]}}`,n=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
 $\\begin{aligned}
   ${$[0]}=&\\dfrac{${$[1]}+${$[2]}}{${$[3]}-${$[4]}}\\\\
    ${$[0]}(${$[3]}-${$[4]})&=${$[1]}+${$[2]}\\\\
   ${$[0]}${$[3]}-${$[0]}${$[4]}&= ${$[1]}+${$[2]}\\\\
   ${$[0]}${$[3]}&=${$[1]}+${$[2]}+${$[0]}${$[4]}\\\\
   ${$[3]}&=\\dfrac{${$[1]}+${$[2]}+${$[0]}${$[4]}}{${$[0]}}
     \\end{aligned}$
     <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[4]}$ est 
       $${$[3]}=\\dfrac{${$[1]}+${$[2]}+${$[0]}${$[4]}}{${$[0]}}$.`):a===4?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (avec $${$[3]}-${$[4]}$ et $${$[0]}$ non nuls) vérifiant l'égalité  :`,t=`${e} $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}-${$[4]}}$.<br>
    Exprimer $${$[4]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$.`,s=$[4],r=[`\\dfrac{${$[1]}+${$[2]}-${$[0]}${$[3]}}{-${$[0]}}`,`\\dfrac{-${$[1]}-${$[2]}+${$[0]}${$[3]}}{${$[0]}}`,`\\dfrac{-${$[1]}-${$[2]}}{${$[0]}}+${$[3]}`],n=`$${r}$On isole $${$[4]}$ dans un membre de l'égalité :<br>
     $\\begin{aligned}
      ${$[0]}=&\\dfrac{${$[1]}+${$[2]}}{${$[3]}-${$[4]}}\\\\
        ${$[0]}(${$[3]}-${$[4]})&=${$[1]}+${$[2]}\\\\
      ${$[0]}${$[3]}-${$[0]}${$[4]}&= ${$[1]}+${$[2]}\\\\
      -${$[0]}${$[4]} &=${$[1]}+${$[2]}-${$[0]}${$[3]}\\\\
      ${$[4]}&=\\dfrac{${$[1]}+${$[2]}-${$[0]}${$[3]}}{-${$[0]}}\\\\
      ${$[4]}&=\\dfrac{-${$[1]}-${$[2]}+${$[0]}${$[3]}}{${$[0]}}
         \\end{aligned}$
         <br> Une expression de $${$[4]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ est 
           $${$[4]}=\\dfrac{-${$[1]}-${$[2]}+${$[0]}${$[3]}}{${$[0]}}$.`):a===5?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (strictement positifs) vérifiant l'égalité  :`,t=`${e} $${$[0]}=${$[1]}+${$[2]}\\sqrt{${$[3]}+${$[4]}}$.<br>
    Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[4]}$.`,s=$[3],r=[`\\dfrac{${$[0]}^2-2${$[0]}${$[1]}+${$[1]}^2}{${$[2]}^2}-${$[4]}`,`(\\dfrac{${$[0]}-${$[1]}}{${$[2]}})^2-${$[4]}`,`$\\dfrac{${$[0]}^2-2${$[0]}${$[1]}+${$[1]}^2-${$[4]}${$[2]}^2}{${$[2]}^2}`,`\\dfrac{(${$[0]}-${$[1]})^2-${$[4]}${$[2]}^2}{${$[2]}^2}`],n=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
 $\\begin{aligned}
  ${$[0]}=&${$[1]}+${$[2]}\\sqrt{${$[3]}+${$[4]}}\\\\
   ${$[0]}-${$[1]}&=${$[2]}\\sqrt{${$[3]}+${$[4]}}\\\\
   \\dfrac{${$[0]}-${$[1]}}{${$[1]}}&= \\sqrt{${$[3]}+${$[4]}}\\\\
   \\left(\\dfrac{${$[0]}-${$[1]}}{${$[1]}}\\right)^2 &=${$[3]}+${$[4]}\\\\
   \\left(\\dfrac{${$[0]}-${$[1]}}{${$[1]}}\\right)^2-${$[4]}&=${$[3]}
\\end{aligned}$
 <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[4]}$ est 
   $${$[3]}=\\left(\\dfrac{${$[0]}-${$[1]}}{${$[1]}}\\right)^2-${$[4]}$ ou par exemple $${$[3]}=\\dfrac{\\left(${$[0]}-${$[1]}\\right)^2-${$[4]}${$[1]}^2}{${$[1]}^2}$.
 `):(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (strictement positifs) vérifiant l'égalité  :`,t=`${e} $${$[0]}=${$[1]}+${$[2]}\\sqrt{${$[3]}+${$[4]}}$.<br>
     Exprimer $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[3]}$ et $${$[4]}$.`,s=$[2],r=`\\dfrac{${$[0]}-${$[1]}}{\\sqrt{${$[3]}+${$[4]}}}`,n=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
  $\\begin{aligned}
   ${$[0]}=&${$[1]}+${$[2]}\\sqrt{${$[3]}+${$[4]}}\\\\
    ${$[0]}-${$[1]}&=${$[2]}\\sqrt{${$[3]}+${$[4]}}\\\\
    \\dfrac{${$[0]}-${$[1]}}{\\sqrt{${$[3]}+${$[4]}}}&=${$[2]}
 \\end{aligned}$
  <br> Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[3]}$ et $${$[4]}$ est 
    $${$[2]}= \\dfrac{${$[0]}-${$[1]}}{\\sqrt{${$[3]}+${$[4]}}}$.
  `);break}t+="<br>"+S(this,d," alphanumeric  ",{texteAvant:v(10)+`$${s} =$`}),O(this,d,{reponse:{value:r}});const f=n.split("=");let g=f[f.length-1];g=g.replace("$","").replace("<br>",""),n="";for(let m=0;m<f.length-1;m++)n+=f[m],n+=m<f.length-2?"=":"";n=n.slice(0,n.length-1)+v(2)+`${c(n[n.length-1]+"="+g)}$`,this.questionJamaisPosee(d,b,a,$.join())&&(this.listeQuestions[d]=t,this.listeCorrections[d]=n,d++),x++}q(this)}}export{$$ as dateDeModifImportante,_ as dateDePublication,i$ as default,H as interactifReady,Y as interactifType,n$ as refs,Z as titre,e$ as uuid};
