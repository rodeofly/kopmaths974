import{g as or,af as tr,r as h,a as X,F as Q,p as g,k as E,aK as _,j,aX as I,o as R,D as W,Y as w,l as ir}from"./embellissements-BYV7mIDn.js";import{E as ar}from"./Exercice-DtXhjCyI.js";import{c as J}from"./lists-i1i4IA1M.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const xr="Utiliser le produit scalaire pour montrer l'orthogonalité",fr="29/04/2025",qr="ec888",Cr={"fr-fr":["1G10-8"],"fr-ch":[]};class Dr extends ar{constructor(){super(),this.nbQuestions=1,this.sup=5,this.spacing=2,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Montrer que deux droites sont perpendiculaires","2 : Montrer qu'un triangle est rectangle","3 : Montrer que deux droites sont perpendiculaires dans un rectangle","4 : Montrer que deux droites sont perpendiculaires dans un rectangle (avec un repère)","5 : Mélange"].join(`
`)]}nouvelleVersion(){const $r=or({saisie:this.sup,min:1,max:4,melange:5,defaut:5,nbQuestions:this.nbQuestions}),er=tr($r,this.nbQuestions);for(let T=0,D,L,u,$,e,t,o,i,a,N,U,G,K,F,r,k,y,S,z,c,s,d,m,Y,H,l,v,n,p,b,x,f,q,A,M,O,P,V,B,Z,C,rr=0;T<this.nbQuestions&&rr<50;){switch(B=h(65,75),$=String.fromCharCode(B),e=String.fromCharCode(B+1),t=String.fromCharCode(B+2),o=String.fromCharCode(B+3),i=String.fromCharCode(B+4),a=String.fromCharCode(B+5),Z=[[3,4,2,6],[-3,4,2,-6],[2,6,12,1],[2,9,3,6],[2,3,1,6],[2,-9,3,-6],[6,5,10,3],[6,-5,-10,3],[-5,6,-3,10],[2,-12,-6,4],[3,-8,-6,4],[2,12,1,24],[2,-12,-8,3],[3,3,1,9],[3,-3,1,-9],[3,3,1,9],[2,8,4,4],[-4,4,-8,2],[7,4,14,2],[-14,2,-7,4]],C=X(Z),er[T]){case 1:switch(h(1,2)){case 1:c=h(-10,10),l=h(-10,10),s=h(-10,10,c),v=h(-10,10),d=h(-10,10,[c,s]),n=h(-10,10),Y=s-c,H=v-l,m=d-H,p=n+Y;break;case 2:default:c=h(-10,10),l=h(-10,10),s=c+C[0],v=l+C[2],d=h(-10,10),n=h(-10,10),m=d+C[1],p=-C[3]+n;break}D=`Dans un repère orthonormé, on considère les points $${$}(${c}\\,;\\,${l})$, $${e}(${s}\\,;\\,${v})$, $${t}(${d}\\,;\\,${n})$ et $${o}(${m}\\,;\\,${p})$.<br>
          Montrer que les droites $(${$}${e})$ et $(${t}${o})$ sont perpendiculaires.`,L=`On commence par calculer les coordonnées des vecteurs $\\overrightarrow{${$}${e}}$ et $\\overrightarrow{${t}${o}}$.<br>
         $\\overrightarrow{${$}${e}}\\begin{pmatrix}${s}-${w(c)}\\\\${v}-${w(l)}\\end{pmatrix}$,
           soit $\\overrightarrow{${$}${e}}\\begin{pmatrix}${s-c}\\\\${v-l}\\end{pmatrix}$.<br><br>
         $\\overrightarrow{${t}${o}}\\begin{pmatrix}${m}-${w(d)}\\\\${p}-${w(n)}\\end{pmatrix}$,
           soit $\\overrightarrow{${t}${o}}\\begin{pmatrix}${m-d}\\\\${p-n}\\end{pmatrix}$.<br><br>
          Ainsi, $\\overrightarrow{${$}${e}}\\cdot \\overrightarrow{${t}${o}}
          =${s-c}\\times ${w(m-d)}
         +${w(v-l)}\\times${w(p-n)}
          =${(s-c)*(m-d)+(v-l)*(p-n)}$<br>
          Comme $\\overrightarrow{${$}${e}}\\cdot \\overrightarrow{${t}${o}}=0$, on en déduit que les vecteurs  $\\overrightarrow{${$}${e}}$ et $\\overrightarrow{${t}${o}}$ sont orthogonaux et donc que les droites $(${$}${e})$ et $(${t}${o})$ sont perpendiculaires.`;break;case 2:switch(t=$,h(1,2)){case 1:c=h(-10,10),l=h(-10,10),s=h(-10,10,c),v=h(-10,10),d=c,n=l,Y=s-c,H=v-l,m=d-H,p=n+Y;break;case 2:default:c=h(-10,10),l=h(-10,10),s=c+C[0],v=l+C[2],d=c,n=l,m=d+C[1],p=-C[3]+n;break}D=`Dans un repère orthonormé, on considère les points $${$}(${c}\\,;\\,${l})$, $${e}(${s}\\,;\\,${v})$ et $${o}(${m}\\,;\\,${p})$.<br>
        Montrer que le triangle   $${$}${e}${o}$ est rectangle en $${$}$.`,L=`On commence par calculer les coordonnées des vecteurs $\\overrightarrow{${$}${e}}$ et $\\overrightarrow{${$}${o}}$.<br>
       $\\overrightarrow{${$}${e}}\\begin{pmatrix}${s}-${w(c)}\\\\${v}-${w(l)}\\end{pmatrix}$,
         soit $\\overrightarrow{${$}${e}}\\begin{pmatrix}${s-c}\\\\${v-l}\\end{pmatrix}$.<br><br>
       $\\overrightarrow{${t}${o}}\\begin{pmatrix}${m}-${w(d)}\\\\${p}-${w(n)}\\end{pmatrix}$,
         soit $\\overrightarrow{${t}${o}}\\begin{pmatrix}${m-d}\\\\${p-n}\\end{pmatrix}$.<br><br>
        Ainsi, $\\overrightarrow{${$}${e}}\\cdot \\overrightarrow{${t}${o}}
        =${s-c}\\times ${w(m-d)}
       +${w(v-l)}\\times${w(p-n)}
        =${(s-c)*(m-d)+(v-l)*(p-n)}$<br>
        Comme $\\overrightarrow{${$}${e}}\\cdot \\overrightarrow{${t}${o}}=0$, on en déduit que les vecteurs  $\\overrightarrow{${$}${e}}$ et $\\overrightarrow{${t}${o}}$ sont orthogonaux et donc que le triangle  $${$}${e}${o}$ est rectangle en $${$}$.`;break;case 3:switch(h(1,2)){case 1:u=[],F=[[12,4,1,1],[6,4,1,2],[15,5,2,1],[6,3,1,1],[8,4,2,1],[12,6,2,2],[14,7,3,2]],r=X(F),n=r[1],s=r[0],N=new Q(r[2],r[1]).simplifie(),U=new Q(r[3],r[0]).simplifie(),b=g(0,0,$),x=g(s,0,e),f=g(s,n,t),q=g(0,n,o),A=g(0,r[2],i),M=g(r[3],0,a),P=E(A,f),V=E(q,M),k=_(f,x,"black",.5,"",!0),y=_(q,f,"black",.5,"",!0),S=j(`${i}`,-.5,r[2],{letterSize:"normalsize"}),z=j(`${a}`,r[3],-.5,{letterSize:"normalsize"}),O=I(b,x,f,q),u.push(O,P,V,S,z,k,y),D=`Dans un rectangle $${$}${e}${t}${o}$ de longueur $${r[0]}$ et de largeur $${r[1]}$, on considère les points $${i}$ et $${a}$ tels que :<br>
              $\\overrightarrow{${$}${i}}=${N.texFraction}\\overrightarrow{${$}${o}}$ et  $\\overrightarrow{${$}${a}}=${U.texFraction}\\overrightarrow{${$}${e}}$.<br>
              Montrer que les droites $(${i}${t})$ et $(${o}${a})$ sont perpendiculaires.<br>`+R(Object.assign({scale:.7,pixelsParCm:25,style:"inline"},W(u)),u),L=`D'une part, $\\overrightarrow{${i}${t}}= \\overrightarrow{${i}${o}}+ \\overrightarrow{${o}${t}}$.<br>
              D'autre part, $\\overrightarrow{${o}${a}}= \\overrightarrow{${o}${$}}+ \\overrightarrow{${$}${a}}$.<br>
              Ainsi : <br>$\\begin{aligned}
              \\overrightarrow{${i}${t}}\\cdot \\overrightarrow{${o}${a}}&=(\\overrightarrow{${i}${o}}+ \\overrightarrow{${o}${t}})\\cdot (\\overrightarrow{${o}${$}}+ \\overrightarrow{${$}${a}})\\\\
              &=\\underbrace{\\overrightarrow{${i}${o}}\\cdot \\overrightarrow{${o}${$}}}_{=-${i}${o}\\times ${o}${$}}+\\underbrace{\\overrightarrow{${i}${o}}\\cdot\\overrightarrow{${$}${a}}}_{=0}+ \\underbrace{\\overrightarrow{${o}${t}}\\cdot \\overrightarrow{${o}${$}}}_{=0}+ \\underbrace{\\overrightarrow{${o}${t}}\\cdot \\overrightarrow{${$}${a}}}_{=${o}${t}\\times ${$}${a}}
              \\end{aligned}$<br><br>
              Justifications : `+J({items:[`$\\overrightarrow{${i}${o}}\\cdot \\overrightarrow{${o}${$}}=-${i}${o}\\times ${o}${$}$ car les vecteurs $\\overrightarrow{${i}${o}}$ et $\\overrightarrow{${o}${$}}$ sont colinéaires de sens contraires.`,`$\\overrightarrow{${i}${o}}\\cdot\\overrightarrow{${$}${a}}=0$ car $\\overrightarrow{${i}${o}}\\perp \\overrightarrow{${$}${a}}$.`,`$\\overrightarrow{${o}${t}}\\cdot\\overrightarrow{${o}${$}}=0$ car $\\overrightarrow{${o}${t}}\\perp \\overrightarrow{${o}${$}}$.`,`$\\overrightarrow{${o}${t}}\\cdot \\overrightarrow{${$}${a}}=${o}${t}\\times ${$}${a}$ car les vecteurs $\\overrightarrow{${o}${t}}$ et $\\overrightarrow{${$}${a}}$ sont colinéaires de même sens.<br>`],style:"fleches"})+`<br>Comme : <br>
                $${i}${o} = ${r[1]}-${N.texFraction}\\times ${r[1]} =${r[1]-r[2]}$  et $${$}${a} = ${U.texFraction}\\times ${r[0]} =${r[3]}$, on obtient :<br>
               
              $\\begin{aligned}
              \\overrightarrow{${i}${t}}\\cdot \\overrightarrow{${o}${a}}&=-${r[1]}\\times ${r[1]-r[2]}+${r[0]}\\times ${r[3]}\\\\
              &=0
              \\end{aligned}$<br> 
               Comme $\\overrightarrow{${i}${t}}\\cdot \\overrightarrow{${o}${a}}=0$, on en déduit  que les vecteurs   $\\overrightarrow{${i}${t}}$ et $\\overrightarrow{${o}${a}}$ sont orthogonaux et donc que les droites $(${i}${t})$ et $(${o}${a})$ sont perpendiculaires.`;break;case 2:default:u=[],F=[[9,6,3,2],[12,4,3,1],[8,4,2,1],[10,5,4,2],[6,4,3,2],[12,8,6,4],[9,6,3,2]],r=X(F),n=r[1],s=r[0],G=new Q(r[2],r[1]).simplifie(),K=new Q(r[3],r[0]).simplifie(),b=g(0,0,$),x=g(s,0,e),f=g(s,n,t),q=g(0,n,o),A=g(s,r[2],i),M=g(r[0]-r[3],n,a),P=E(A,b),V=E(x,M),k=_(x,b,"black",.5,"",!0),y=_(b,q,"black",.5,"",!0),S=j(`${i}`,r[0]+.5,r[2],{letterSize:"normalsize"}),z=j(`${a}`,r[0]-r[3],r[1]+.5,{letterSize:"normalsize"}),O=I(b,x,f,q),u.push(O,P,V,S,z,k,y),D=`Dans un rectangle $${$}${e}${t}${o}$ de longueur $${r[0]}$ et de largeur $${r[1]}$, on considère les points $${i}$ et $${a}$ tels que :<br>
             $\\overrightarrow{${e}${i}}=${G.texFraction}\\overrightarrow{${e}${t}}$ et  $\\overrightarrow{${t}${a}}=${K.texFraction}\\overrightarrow{${t}${o}}$.<br>
              Montrer que les droites $(${$}${i})$ et $(${e}${a})$ sont perpendiculaires.<br>`+R(Object.assign({scale:.7,pixelsParCm:25,style:"inline"},W(u)),u),L=`D'une part, $\\overrightarrow{${$}${i}}= \\overrightarrow{${$}${e}}+ \\overrightarrow{${e}${i}}$.<br>
              D'autre part, $\\overrightarrow{${e}${a}}= \\overrightarrow{${e}${t}}+ \\overrightarrow{${t}${a}}$.<br><br>
              Ainsi : <br>$\\begin{aligned}
              \\overrightarrow{${$}${i}}\\cdot \\overrightarrow{${e}${a}}&=(\\overrightarrow{${$}${e}}+ \\overrightarrow{${e}${i}})\\cdot (\\overrightarrow{${e}${t}}+ \\overrightarrow{${t}${a}})\\\\
              &=\\underbrace{\\overrightarrow{${$}${e}}\\cdot \\overrightarrow{${e}${t}}}_{=0}
              +\\underbrace{\\overrightarrow{${$}${e}}\\cdot\\overrightarrow{${t}${a}}}_{-${$}${e}\\times ${t}${a}}
              + \\underbrace{\\overrightarrow{${e}${i}}\\cdot \\overrightarrow{${e}${t}}}_{${e}${i}\\times ${e}${t}}
              + \\underbrace{\\overrightarrow{${e}${i}}\\cdot \\overrightarrow{${t}${a}}}_{=0}
              \\end{aligned}$<br><br>
              Justifications : `+J({items:[`$\\overrightarrow{${$}${e}}\\cdot \\overrightarrow{${e}${t}}=0$ car $\\overrightarrow{${$}${e}}\\perp \\overrightarrow{${e}${t}}$.`,`$\\overrightarrow{${$}${e}}\\cdot\\overrightarrow{${t}${a}}=-${$}${e}\\times ${t}${a}$ car car les vecteurs $\\overrightarrow{${$}${e}}$ et $\\overrightarrow{${t}${a}}$ sont colinéaires de sens contraires.`,`$\\overrightarrow{${e}${i}}\\cdot \\overrightarrow{${e}${t}}=${e}${i}\\times ${e}${t}$ car les vecteurs $\\overrightarrow{${e}${i}}$ et $\\overrightarrow{${e}${t}}$ sont colinéaires de même sens.`,`$\\overrightarrow{${e}${i}}\\cdot \\overrightarrow{${t}${a}}=0$ car $\\overrightarrow{${e}${i}}\\perp \\overrightarrow{${t}${a}}$.
                                     `],style:"fleches"})+`<br>Comme : <br>
              $${t}${a} = ${K.texFraction}\\times ${r[0]} =${r[3]}$ et  $${e}${i} = ${G.texFraction}\\times ${r[1]} =${r[2]}$, on obtient :<br>
               
              $\\begin{aligned}
               \\overrightarrow{${$}${i}}\\cdot \\overrightarrow{${e}${a}} &=-${$}${e}\\times ${t}${a}+${e}${i}\\times ${e}${t}\\\\
               &=-${r[0]}\\times ${r[3]}+${r[2]}\\times ${r[1]}\\\\
              &=0
              \\end{aligned}$<br> 
             Comme $\\overrightarrow{${$}${i}}\\cdot \\overrightarrow{${e}${a}}=0$, on en déduit que que les vecteurs   $\\overrightarrow{${$}${i}}$ et $\\overrightarrow{${e}${a}}$ sont orthogonaux et donc que les droites $(${$}${i})$ et $(${e}${a})$ sont perpendiculaires.`;break}break;case 4:default:switch(h(1,2)){case 1:u=[],F=[[12,4,1,1],[6,4,1,2],[15,5,2,1],[6,3,1,1],[8,4,2,1],[12,6,2,2],[14,7,3,2]],r=X(F),n=r[1],s=r[0],N=new Q(r[2],r[1]).simplifie(),U=new Q(r[3],r[0]).simplifie(),b=g(0,0,$),x=g(s,0,e),f=g(s,n,t),q=g(0,n,o),A=g(0,r[2],i),M=g(r[3],0,a),P=E(A,f),V=E(q,M),k=_(f,x,"black",.5,"",!0),y=_(q,f,"black",.5,"",!0),S=j(`${i}`,-.5,r[2],{letterSize:"normalsize"}),z=j(`${a}`,r[3],-.5,{letterSize:"normalsize"}),O=I(b,x,f,q),u.push(O,P,V,S,z,k,y),D=`Dans un rectangle $${$}${e}${t}${o}$ de longueur $${r[0]}$ et de largeur $${r[1]}$, on considère les points $${i}$ et $${a}$ tels que :<br>
                $\\overrightarrow{${$}${i}}=${N.texFraction}$ et  $\\overrightarrow{${$}${a}}=${U.texFraction}\\overrightarrow{${$}${e}}$.<br>
               On considère le repère $\\left(${$}\\,;\\,\\dfrac{1}{${r[0]}}\\overrightarrow{${$}${e}}\\,,\\, \\dfrac{1}{${r[1]}}\\overrightarrow{${$}${o}}\\right)$.
               `+J({items:["Montrer que ce repère est un repère orthonormé.","Donner les coordonnées de tous les points de la figure.",`Montrer que les droites $(${i}${t})$ et $(${o}${a})$ sont perpendiculaires.`],style:"nombres"})+R(Object.assign({scale:.7,pixelsParCm:25,style:"inline"},W(u)),u),L=J({items:[`Les vecteurs $\\overrightarrow{${$}${e}}$ et $\\overrightarrow{${$}${o}}$ sont orthogonaux. <br>
                        De plus,  $\\left\\Vert \\dfrac{1}{${r[0]}}\\overrightarrow{${$}${e}}\\right\\Vert=1$ et $\\left\\Vert \\dfrac{1}{${r[1]}}\\overrightarrow{${$}${o}}\\right\\Vert=1$.<br>
                        
                        
                        
                        On en déduit que le repère $\\left(${$}\\,;\\,\\dfrac{1}{${r[0]}}\\overrightarrow{${$}${e}}\\,,\\, \\dfrac{1}{${r[1]}}\\overrightarrow{${$}${o}}\\right)$ est un repère orthonormé.`,`$${$}(0\\,;\\,0)$, $${e}(${r[0]}\\,;\\,0)$, $${t}(${r[0]}\\,;\\,${r[1]})$, $${o}(0\\,;\\,${r[1]})$, $${i}(0\\,;\\,${r[2]})$ et $${a}(${r[3]}\\,;\\,0)$`,`Pour montrer que les droites $(${i}${t})$ et $(${o}${a})$ sont perpendiculaires, on calcule le produit scalaire $\\overrightarrow{${i}${t}}\\cdot \\overrightarrow{${o}${a}}$.<br>
     $\\overrightarrow{${i}${t}}\\begin{pmatrix}${r[0]}-0\\\\${r[1]}-${r[2]}\\end{pmatrix}$, soit $\\overrightarrow{${i}${t}}\\begin{pmatrix}${r[0]}\\\\${r[1]-r[2]}\\end{pmatrix}$<br>
     $\\overrightarrow{${o}${a}}\\begin{pmatrix}${r[3]}-0\\\\0-${r[1]}\\end{pmatrix}$, soit $\\overrightarrow{${o}${a}}\\begin{pmatrix}${r[3]}\\\\${-r[1]}\\end{pmatrix}$<br><br>
           Ainsi : <br>
       $\\begin{aligned}
     \\overrightarrow{${i}${t}}\\cdot \\overrightarrow{${o}${a}}&=${r[0]}\\times ${r[3]}+${r[1]-r[2]}\\times ${w(-r[1])}\\\\
     &=0                               
         \\end{aligned}$<br>
            Comme $\\overrightarrow{${i}${t}}\\cdot \\overrightarrow{${o}${a}}=0$, on en déduit que que que les vecteurs   $\\overrightarrow{${i}${t}}$ et $\\overrightarrow{${o}${a}}$ sont orthogonaux et donc que les droites $(${i}${t})$ et $(${o}${a})$ sont perpendiculaires.`],style:"nombres"});break;case 2:default:u=[],F=[[9,6,3,2],[12,4,3,1],[8,4,2,1],[10,5,4,2],[6,4,3,2],[12,8,6,4],[9,6,3,2]],r=X(F),n=r[1],s=r[0],G=new Q(r[2],r[1]).simplifie(),K=new Q(r[3],r[0]).simplifie(),b=g(0,0,$),x=g(s,0,e),f=g(s,n,t),q=g(0,n,o),A=g(s,r[2],i),M=g(r[0]-r[3],n,a),P=E(A,b),V=E(x,M),k=_(x,b,"black",.5,"",!0),y=_(b,q,"black",.5,"",!0),S=j(`${i}`,r[0]+.5,r[2],{letterSize:"normalsize"}),z=j(`${a}`,r[0]-r[3],r[1]+.5,{letterSize:"normalsize"}),O=I(b,x,f,q),u.push(O,P,V,S,z,k,y),D=`Dans un rectangle $${$}${e}${t}${o}$ de longueur $${r[0]}$ et de largeur $${r[1]}$, on considère les points $${i}$ et $${a}$ tels que :<br>
               $\\overrightarrow{${e}${i}}=${G.texFraction}\\overrightarrow{${e}${t}}$ et  $\\overrightarrow{${t}${a}}=${K.texFraction}\\overrightarrow{${t}${o}}$.<br>
              On considère le repère $\\left(${$}\\,;\\,\\dfrac{1}{${r[0]}}\\overrightarrow{${$}${e}}\\,,\\, \\dfrac{1}{${r[1]}}\\overrightarrow{${$}${o}}\\right)$.
               `+J({items:["Montrer que ce repère est un repère orthonormé.","Donner les coordonnées de tous les points de la figure.",` Montrer que les droites $(${$}${i})$ et $(${e}${a})$ sont perpendiculaires.`],style:"nombres"})+R(Object.assign({scale:.7,pixelsParCm:25,style:"inline"},W(u)),u),L=J({items:[`Les vecteurs $\\overrightarrow{${$}${e}}$ et $\\overrightarrow{${$}${o}}$ sont orthogonaux. <br>
                        De plus,  $\\left\\Vert \\dfrac{1}{${r[0]}}\\overrightarrow{${$}${e}}\\right\\Vert=1$ et $\\left\\Vert \\dfrac{1}{${r[1]}}\\overrightarrow{${$}${o}}\\right\\Vert=1$.<br>
                        
                        
                        
                        On en déduit que le repère $\\left(${$}\\,;\\,\\dfrac{1}{${r[0]}}\\overrightarrow{${$}${e}}\\,,\\, \\dfrac{1}{${r[1]}}\\overrightarrow{${$}${o}}\\right)$ est un repère orthonormé.`,`$${$}(0\\,;\\,0)$, $${e}(${r[0]}\\,;\\,0)$, $${t}(${r[0]}\\,;\\,${r[1]})$, $${o}(0\\,;\\,${r[1]})$, $${i}(${r[0]}\\,;\\,${r[2]})$ et $${a}(${r[0]-r[3]}\\,;\\,${r[1]})$`,`Pour montrer que les droites $(${$}${i})$ et $(${e}${a})$ sont perpendiculaires, on calcule le produit scalaire $\\overrightarrow{${$}${i}}\\cdot \\overrightarrow{${e}${a}}$.<br>
     $\\overrightarrow{${$}${i}}\\begin{pmatrix}${r[0]}-0\\\\${r[2]}-0\\end{pmatrix}$, soit $\\overrightarrow{${$}${i}}\\begin{pmatrix}${r[0]}\\\\${r[2]}\\end{pmatrix}$<br>
     $\\overrightarrow{${e}${a}}\\begin{pmatrix}${r[0]-r[3]}-${r[0]}\\\\${r[1]}-0\\end{pmatrix}$, soit $\\overrightarrow{${e}${a}}\\begin{pmatrix}${-r[3]}\\\\${r[1]}\\end{pmatrix}$<br><br>
           Ainsi : <br>
       $\\begin{aligned}
    \\overrightarrow{${$}${i}}\\cdot \\overrightarrow{${e}${a}}&=${r[0]}\\times(${-r[3]})+${r[2]}\\times ${r[1]}\\\\
     &=0                               
         \\end{aligned}$<br>
         Comme $\\overrightarrow{${$}${i}}\\cdot \\overrightarrow{${e}${a}}=0$, on en déduit  que les vecteurs   $\\overrightarrow{${$}${i}}$ et $\\overrightarrow{${e}${a}}$ sont orthogonaux et donc que les droites $(${$}${i})$ et $(${e}${a})$ sont perpendiculaires.`],style:"nombres"});break}break}this.questionJamaisPosee(T,D)&&(this.listeQuestions[T]=D,this.listeCorrections[T]=L,T++),rr++}ir(this)}}export{fr as dateDePublication,Dr as default,Cr as refs,xr as titre,qr as uuid};
