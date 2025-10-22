import{aP as d,r as $,p as f,aJ as l,aX as b,aG as g,C as c,G as n,e as p,o as P,m as q}from"./embellissements-BYV7mIDn.js";import v from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const J="Calculer une longueur avec le théorème de Pythagore",L=!0,O="mathLive",T="31f61",V={"fr-fr":["can2G02"],"fr-ch":["NR"]};class X extends v{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const t=d(3,["QD"]),i=$(1,5),a=$(6,10),e=f(0,0,t[0]),o=l(e,i,90,t[1]),s=l(o,Math.sqrt(a**2-i**2),0,t[2]),m=b(e,o,s),r=[],u=Math.min(e.x,o.x,s.x)-1,x=Math.min(e.y,o.y,s.y)-1,h=Math.max(e.x,o.x,s.x)+1,y=Math.max(e.y,o.y,s.y)+1;r.push(m[0],m[1],g(e,o,s)),r.push(c(`${p(a)}`,n(e,s).x+.2,n(e,s).y-.3),c(`${p(i)}`,n(e,o).x-.3,n(e,o).y),c("x",n(o,s).x,n(o,s).y+.3,"milieu","black",1,"middle",!0)),this.question=`Sur cette figure $x=\\sqrt{a}$.<br>
    
    Quelle est la valeur de $a$ ?<br>

    `,this.question+=P({xmin:u,ymin:x,xmax:h,ymax:y,pixelsParCm:25,mainlevee:!1,amplitude:.3,scale:.7,style:"margin: auto"},r),this.correction=` En utilisant le théorème de Pythagore, on a :<br>
        $${t[0]}${t[1]}^2+${t[1]}${t[2]}^2=${t[0]}${t[2]}^2$, soit
        $${t[1]}${t[2]}^2=${t[0]}${t[2]}^2-${t[0]}${t[1]}^2$. <br>
        On en déduit : $x^2=${a}^2-${i}^2$, d'où $x=\\sqrt{${a}^2-${i}^2}=\\sqrt{${a**2-i**2}}$
       <br>
       Ainsi, $a=${q(a**2-i**2)}$.`,this.reponse=a**2-i**2,this.canEnonce=this.question,this.canReponseACompleter="$a=\\ldots$"}}export{X as default,L as interactifReady,O as interactifType,V as refs,J as titre,T as uuid};
