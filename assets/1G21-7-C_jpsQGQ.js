import{r as m,aY as f,f as r,Y as _,v as i,z as n,m as b,e as x,l as h}from"./embellissements-BYV7mIDn.js";import{E as v}from"./Exercice-DtXhjCyI.js";import{h as y}from"./gestionInteractif-DujZpSu8.js";import{r as g}from"./questionMathLive-DdRvWqlN.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const U="Déterminer les coordonnées d'un projeté orthogonal sur une droite",F="30/06/2024",K=!0,W="mathLive",X="cee3b",Z={"fr-fr":["1G21-7"],"fr-ch":[]};class ee extends v{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){for(let $=0,l=0;$<this.nbQuestions&&l<50;){let p="",c="";const e=m(-2,2,0),t=e*m(-3,3,0),u=t*m(-3,3,0),d=m(-3,3,0),o=t*m(-3,3,[0,u/t]),s=e/t*o-e/t*u+d,a=-u*t-d*e;p=`Dans un repère $(O\\,;\\, \\vec{i}\\,,\\,\\vec{j})$, on considère la droite 
         $d$ d'équation 
         $${f(t,e,a)}=0$ et le point $A(${o}\\,;\\,${s})$. <br>
         Déterminer les coordonnées du point $H$ projeté orthogonal de $A$ sur $d$.
          `,c=`On sait, d'après le cours, que si une droite $(d)$ a une équation cartésienne de la forme $ax+by+c=0$,
       alors un vecteur directeur de cette droite est   : $\\vec {u} \\begin{pmatrix}-b\\\\a\\end{pmatrix}$.`,c+=`<br>Un vecteur directeur de la droite $d$ est donc $\\vec u \\begin{pmatrix}${-e}\\\\${t}\\end{pmatrix}$.<br>
      En notant $(x_H\\,;\\,y_H)$ les coordonnées du point $H$, on a $\\overrightarrow{AH}\\begin{pmatrix}x_H${r(-o)}\\\\y_H${r(-s)}\\end{pmatrix}$.<br>
      $H$ étant le projeté orthogonal de $A$ sur $d$, on a $\\overrightarrow{AH}\\cdot \\vec{u}=0$.<br>
      En appliquant cette égalité avec les coordonnées des vecteurs $\\overrightarrow{AH}$ et $\\vec u$, on obtient :<br>
       $${-e}\\times (x_H${r(-o)})+${_(t)}\\times (y_H${r(-s)})
       =0$ soit $${i(-e)}x_H${n(t)}y_H${r(o*e-t*s)}=0$.`,c+=` <br><br>Puisque le point $H$ est sur $d$ ses coordonnées vérifient aussi l'équation cartésienne de $d$, soit : <br>
      $${i(t)}x_H${n(e)}y_H${r(a)}=0$.<br>

      Ainsi les coordonnées du point $H$ verifient simultanément les deux équations : 
      $\\begin{cases} ${i(t)}x_H${n(e)}y_H${r(a)}=0 \\\\ ${i(-e)}x_H${n(t)}y_H${r(o*e-t*s)}=0 \\end{cases}$
       `,c+=`<br><br>On résout le système (par substitution en isolant $y_H$ dans la première équation) : <br><br>
       $\\begin{cases} ${t}x_H${n(e)}y_H${r(a)}=0 \\\\ ${i(-e)}x_H${n(t)}y_H${r(o*e-t*s)}=0 \\end{cases}
       \\iff \\begin{cases} y_H=${i(-t/e)}x_H${r(-a/e)} \\\\ ${i(-e)}x_H${n(t)}y_H${r(o*e-t*s)}=0 \\end{cases}
       \\iff \\begin{cases} y_H=${i(-t/e)}x_H${r(-a/e)} \\\\ ${i(-e)}x_H${n(t)}(${i(-t/e)}x_H${r(-a/e)})${r(o*e-t*s)}=0 \\end{cases}
       \\iff \\begin{cases} y_H=${d}\\\\ x_H=${u}\\end{cases}$`,c+=` <br><br>On en déduit que le point $H$ a pour coordonnées $(${b(x(u,0))}\\,;\\,${b(x(d,0))})$.`,this.interactif&&(p+="<br>Les coordonnées du point $H$ sont :"+g(this,$,"(%{champ1};{%{champ2})."),y(this,$,{bareme:H=>[Math.min(H[0],H[1]),1],champ1:{value:String(u)},champ2:{value:String(d)}},{formatInteractif:"fillInTheBlank"})),this.questionJamaisPosee($,p)&&(this.listeQuestions[$]=p,this.listeCorrections[$]=c,$++),l++}h(this)}}export{F as dateDePublication,ee as default,K as interactifReady,W as interactifType,Z as refs,U as titre,X as uuid};
