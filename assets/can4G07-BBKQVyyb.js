import{a as d,aP as c,r as m,p as o,k as n,b9 as p,aH as b,e as u,o as h}from"./embellissements-BYV7mIDn.js";import g from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const Q="Calculer une longueur avec le théorème de Thalès (milieu)",T=!0,B="mathLive",N="ae712",S={"fr-fr":["can4G07","BP2AutoR13"],"fr-ch":[]};class j extends g{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,$,r,s,i,a,l,e;d([!0,!1])?(e=c(5,["QD"]),t=m(1,9)+m(1,5)/10+m(1,9)/100,$=o(0,0,e[0],"below"),r=o(6,0,e[1],"below"),s=o(5,4,e[2],"above"),i=o(2.5,2,e[3],"above"),a=o(3,0,e[4],"below"),l=[],l.push(n($,r),n(i,a),n($,s),n(r,s),p("||","blue",$,i,i,s),b($,r,s,i,a)),this.question=`$(${e[3]}${e[4]})//(${e[1]}${e[2]})$ et
      $${e[3]}${e[4]}=${u(t)}$.<br>

      Calculer $${e[1]}${e[2]}$.<br>

     `,this.question+=h({xmin:-1,ymin:-1,xmax:8,ymax:5,pixelsParCm:18,mainlevee:!1,amplitude:.5,style:"margin: auto"},l),this.correction=` Les longueurs du triangle $${e[0]}${e[1]}${e[2]}$ sont 2 fois plus grandes que les longueurs du triangle $${e[0]}${e[3]}${e[4]}$.<br>
      Le triangle $${e[0]}${e[1]}${e[2]}$ est un agrandissement du triangle $${e[0]}${e[3]}${e[4]}$.<br>
      Ainsi : $${e[1]}${e[2]}=2\\times ${e[3]}${e[4]}=2\\times ${u(t)}=${u(2*t)}$.
  `,this.reponse=2*t,this.canEnonce=this.question,this.canReponseACompleter=`$${e[1]}${e[2]}=\\ldots$`):(e=c(5,["QD"]),t=(m(1,9)+m(1,5)/10)*2,$=o(0,0,e[0],"below"),r=o(6,0,e[1],"below"),s=o(5,4,e[2],"above"),i=o(2.5,2,e[3],"above"),a=o(3,0,e[4],"below"),l=[],l.push(n($,r),n(i,a),n($,s),n(r,s),p("||","blue",$,i,i,s),b($,r,s,i,a)),this.question=`$(${e[3]}${e[4]})//(${e[1]}${e[2]})$ et
       $${e[1]}${e[2]}=${u(t)}$. <br>

         Calculer $${e[3]}${e[4]}$.<br>
         
         `,this.question+=h({xmin:-1,ymin:-1,xmax:8,ymax:5,pixelsParCm:18,mainlevee:!1,amplitude:.5,style:"margin: auto"},l),this.correction=` Les longueurs du triangle $${e[0]}${e[3]}${e[4]}$ sont 2 fois plus petites que les longueurs du triangle $${e[0]}${e[1]}${e[2]}$.<br>
      Le triangle $${e[0]}${e[3]}${e[4]}$ est une réduction du triangle $${e[0]}${e[1]}${e[2]}$. <br>
            Ainsi : $${e[3]}${e[4]}= ${e[1]}${e[2]} \\div 2 = ${u(t)}\\div 2 =${u(t/2)}$.
     `,this.reponse=t/2,this.canEnonce=this.question,this.canReponseACompleter=`$${e[3]}${e[4]}=\\ldots$`)}}export{j as default,T as interactifReady,B as interactifType,S as refs,Q as titre,N as uuid};
