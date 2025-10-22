import{r as n,p as l,k as v,a4 as E,a3 as S,ci as y,e as i,n as C,aN as P,b9 as q,aH as L,o as N,D as R,m as g}from"./embellissements-BYV7mIDn.js";import k from"./ExerciceCan-BGFYQSAT.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceSimple-CWWOU0FG.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const M="Partage d'un segment",U=!0,W="mathLive",X="y343x",Y={"fr-fr":[],"fr-ch":["PR-7"]};class Z extends k{enonce(t,e,s){if(t==null||e==null||s==null){e=n(3,6,5),t=n(1,e-1),s=n(4,9)*e/10;do e=n(3,6,5),t=n(1,e-1),s=n(4,9)*e/10;while(e===2*t)}const o=l(0,0,"A","above"),A=l(7*t/e,0,"B","above"),a=l(7,0),r=v(o,a);r.styleExtremites="|-|",r.tailleExtremites=7;const $=E(r,S(0,-.5));$.styleExtremites="<->";const f=y(`${i(s,1)}\\text{ cm}`,o,a,{distance:-.9,letterSize:"footnotesize"}),p=[],c=[o],B=C(o,a);let m;for(let h=0;h<e-1;h++){m=l((h+1)*7/e,0),c.push(m),c.push(m);const u=P(m,B);u.epaisseur=2,u.taille=.15,p.push(u)}c.push(a);const d=q("//","black",...c);d.echelle=.6;const x=L(o,A);this.reponse=i(t*s/e,2),this.question=`${N(Object.assign({pixelsParCm:30},R([r,$,d,p,x,f],{rymin:0})),[r,$,d,p,x,f])}`,this.correction=`Le segment $[AB]$ mesure $\\dfrac{${t}}{${e}}$ de $${i(s,1)}$ cm.<br>`,t===1?this.correction+=`$\\begin{aligned}
   AB&= \\dfrac{${t}}{${e}}\\times ${i(s,1)}\\\\
   &=\\dfrac{${i(s,1)}}{${e}}\\\\
    &=${i(s,1)}\\div ${e}\\\\
    &=${g(i(t*s/e,1))} \\text{ cm}
    \\end{aligned}$`:this.correction+=`$\\begin{aligned}
      AB&=\\dfrac{${t}}{${e}}\\times ${i(s,1)}\\\\
      &=${t}\\times\\dfrac{${i(s,1)}}{${e}}\\\\
      &=${t}\\times ${i(s/e,1)}\\\\
      &=${g(i(t*s/e,1))} \\text{ cm}
      \\end{aligned}$`,this.canEnonce=this.question,this.canReponseACompleter="$AB=\\ldots$ cm",this.optionsChampTexte={texteApres:" cm"},this.interactif?this.question+="<br>$AB=$":this.question+="<br>$AB=\\ldots$ cm"}nouvelleVersion(){this.canOfficielle?this.enonce(1,3,2.1):this.enonce()}}export{Z as default,U as interactifReady,W as interactifType,Y as refs,M as titre,X as uuid};
