import{aP as x,r as a,p as y,aJ as q,ai as g,aX as f,a as P,m as c,aG as C,C as l,G as n,e as u,o as E}from"./embellissements-BYV7mIDn.js";import v from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const J="Calculer l’hypoténuse avec le théorème de Pythagore",L=!0,T="mathLive",V="6341d",X={"fr-fr":["can2G03"],"fr-ch":[]};class z extends v{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,$;const t=x(3,["QD"]);e=a(2,7),$=a(3,7);const s=y(0,0,t[0]),r=q(s,e,a(0,45),t[1]),o=g(s,r,90,$/e,t[2]),m=f(s,r,o),i=[],h=Math.min(s.x,r.x,o.x)-1,p=Math.min(s.y,r.y,o.y)-1,d=Math.max(s.x,r.x,o.x)+1,b=Math.max(s.y,r.y,o.y)+1;switch(P(["a","b"])){case"a":i.push(m[0],m[1],C(s,r,o)),i.push(l("x",n(s,o).x,n(s,o).y-.3,"milieu","black",1,"middle",!0),l(`${u(e)}`,n(s,r).x,n(s,r).y+.4),l(`${u($)}`,n(r,o).x+.4,n(r,o).y)),this.question=`Sur cette figure $x=\\sqrt{a}$.<br>
        
        Quelle est la valeur de $a$ ?<br>

        `,this.question+=E({xmin:h,ymin:p,xmax:d,ymax:b,pixelsParCm:18,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},i),this.correction=` En utilisant le théorème de Pythagore, on a :<br>
        $${t[0]}${t[1]}^2+${t[1]}${t[2]}^2=${t[0]}${t[2]}^2$, soit
        $${e}^2+${$}^2=x^2$, d'où $x=\\sqrt{${e}^2+${$}^2}=\\sqrt{${e**2+$**2}}$
       <br>
       Ainsi, $a=${c(e**2+$**2)}$.`,this.reponse=e**2+$**2,this.canEnonce=this.question,this.canReponseACompleter="$a=\\ldots$";break;case"b":e=a(1,10),$=a(2,10,[4,9]),e**2+$===4||e**2+$===9||e**2+$===16||e**2+$===25||e**2+$===36||e**2+$===49?(this.question=`$${t[0]}${t[1]}${t[2]}$ est un triangle rectangle en $${t[0]}$.<br>
        $${t[0]}${t[1]}=${e}$ ; $${t[0]}${t[2]}=\\sqrt{${$}}$.<br>
        
        Calculer $${t[1]}${t[2]}$ .<br>

        (donner le résultat sous la forme $\\sqrt{a}$ ou d'un nombre entier le cas échéant)`,this.correction=` En utilisant le théorème de Pythagore dans $${t[0]}${t[1]}${t[2]}$ rectangle en $${t[0]}$, on obtient :<br>
               $${t[0]}${t[1]}^2+${t[0]}${t[2]}^2=${t[1]}${t[2]}^2$, <br>
               soit $${e}^2+\\sqrt{${$}}^2=${t[1]}${t[2]}^2$, d'où $${t[1]}${t[2]}^2=${e*e+$}$ soit $${t[1]}${t[2]}=\\sqrt{${e*e+$}}=${c(`${Math.sqrt(e*e+$)}`)}$.
             <br>`,this.reponse=Math.sqrt(e**2+$)):(this.question=`$${t[0]}${t[1]}${t[2]}$ est un triangle rectangle en $${t[0]}$.<br>

          $${t[0]}${t[1]}=${e}$ ; $${t[0]}${t[2]}=\\sqrt{${$}}$.<br>
          
          Calculer $${t[1]}${t[2]}$ .<br>

          (donner le résultat sous la forme $\\sqrt{a}$ ou d'un nombre entier le cas échéant)`,this.correction=` En utilisant le théorème de Pythagore dans $${t[0]}${t[1]}${t[2]}$ rectangle en $${t[0]}$, on obtient :<br>
                 $${t[0]}${t[1]}^2+${t[0]}${t[2]}^2=${t[1]}${t[2]}^2$, <br>
                 soit $${e}^2+\\sqrt{${$}}^2=${t[1]}${t[2]}^2$, d'où $${t[1]}${t[2]}^2=${e*e+$}$ soit $${t[1]}${t[2]}=${c(`\\sqrt{${e*e+$}}`)}$.
               <br>`,this.reponse=`\\sqrt{${e**2+$}}`),this.canEnonce=this.question,this.canReponseACompleter=`$${t[1]}${t[2]}=\\ldots$`;break}}}export{z as default,L as interactifReady,T as interactifType,X as refs,J as titre,V as uuid};
