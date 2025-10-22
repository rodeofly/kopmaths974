import{a as h,aP as f,r as g,p as x,aJ as p,k as m,aH as y,j as b,G as l,e as i,o as z,D as v}from"./embellissements-BYV7mIDn.js";import q from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const Q="Calculer une longueur avec le théorème de Thalès",T=!0,k="mathLive",G="14145",H={"fr-fr":["can3G03","BP2AutoR11"],"fr-ch":["NR"]};class J extends q{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,t,s,$,d,a,r,o,n,u,c;h([!0,!1])?(e=f(5,["QD"]),d=h([1.5,2,2.5]),s=g(2,5)*2,t=d*s,$=g(2,6,s),a=x(0,0,e[0],"above"),r=p(a,s,-30,e[1],"below"),o=p(r,$,110,e[2],"above"),n=p(a,t,150,e[3],"above"),u=p(n,d*$,-70,e[4],"below"),c=[],c.push(m(r,n),m(n,u),m(o,u),m(r,o),y(a,r,o,n,u)),c.push(b(`${i(s)}`,l(a,r).x,l(a,r).y-.7,{letterSize:"scriptsize"}),b(`${i($)}`,l(r,o).x+.5,l(r,o).y,{letterSize:"scriptsize"}),b(`${i(t)}`,l(a,n).x+.5,l(a,n).y+.5,{letterSize:"scriptsize"})),this.question=`Les droites $(${e[1]}${e[2]})$ et $(${e[3]}${e[4]})$ sont parallèles.
      
      Calculer $${e[3]}${e[4]}$.<br>
      
      `,this.correction=` Le triangle $${e[0]}${e[3]}${e[4]}$ est un agrandissement du triangle $${e[0]}${e[1]}${e[2]}$.<br>
    Le coefficient d'agrandissement est  donné par :  $\\dfrac{${e[0]}${e[3]}}{${e[0]}${e[1]}}=\\dfrac{${i(t)}}{${s}}=${i(t/s)}$.<br>
    On en déduit que les longueurs du triangle $${e[0]}${e[3]}${e[4]}$ sont $${i(t/s)}$ fois plus grandes que les longueurs du triangle $${e[0]}${e[1]}${e[2]}$. <br>
        Ainsi, $${e[3]}${e[4]}=${i(t/s)}\\times ${$}=${i(t*$/s)}$.
                  <br>`,this.reponse=t*$/s,this.canReponseACompleter=`$${e[3]}${e[4]}=\\ldots$`):(e=f(5,["QD"]),d=h([1.5,2,2.5]),s=g(2,5)*2,t=d*s,$=g(2,6,s),a=x(0,0,e[0],"above"),r=p(a,$,-30,e[1],"below"),o=p(r,s,110,e[2],"above"),n=p(a,d*$,150,e[3],"above"),u=p(n,t,-70,e[4],"below"),c=[],c.push(m(r,n),m(n,u),m(o,u),m(r,o),y(a,r,o,n,u)),c.push(b(`${i(s)}`,l(r,o).x+.5,l(r,o).y,{letterSize:"scriptsize"}),b(`${i($)}`,l(a,r).x,l(a,r).y-.5,{letterSize:"scriptsize"}),b(`${i(t)}`,l(n,u).x-.8,l(n,u).y,{letterSize:"scriptsize"})),this.question=`Les droites $(${e[1]}${e[2]})$ et $(${e[3]}${e[4]})$ sont parallèles.<br>
      
      Calculer $${e[3]}${e[0]}$.<br>

      `,this.correction=` Le triangle $${e[0]}${e[3]}${e[4]}$ est un agrandissement du triangle $${e[0]}${e[1]}${e[2]}$.<br>
       Le coefficient d'agrandissement est  donné par : $\\dfrac{${e[3]}${e[4]}}{${e[2]}${e[1]}}=\\dfrac{${i(t)}}{${s}}=${i(t/s)}$.<br>
       On en déduit que les longueurs du triangle $${e[0]}${e[3]}${e[4]}$ sont $${i(t/s)}$ fois plus grandes que les longueurs du triangle $${e[0]}${e[1]}${e[2]}$. <br>
           Ainsi, $${e[3]}${e[0]}=${i(t/s)}\\times ${$}=${i(t*$/s)}$.
                     <br>`,this.reponse=t*$/s,this.canReponseACompleter=`$${e[3]}${e[0]}=\\ldots$`),this.question+=z(Object.assign({},v(c,{rxmin:-.1*$,rymin:-.75*$,rxmax:.1*$,rymax:.1*$}),{pixelsParCm:15,mainlevee:!1,amplitude:.5,scale:.2,style:"margin: auto"}),c),this.canEnonce=this.question}}export{J as default,T as interactifReady,k as interactifType,H as refs,Q as titre,G as uuid};
