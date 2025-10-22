import{a as A,p as I,r as y,aJ as m,G as K,A as F,aK as v,k as P,aH as k,o as u,e as b,aG as Q,aO as N,F as T,aL as V}from"./embellissements-BYV7mIDn.js";import U from"./ExerciceSimple-CWWOU0FG.js";import H from"decimal.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const nr="Déterminer un produit scalaire sur des figures géométriques classiques ",lr=!0,hr="mathLive",cr="27/06/2022",gr="a394f",ur={"fr-fr":["can1G06"],"fr-ch":[]};class mr extends U{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,o,a,i,q,d,w,S,r,s,z,f,L,M,j,C,B,$,O,D,x,p,E,G,R,J,g,e,n,l,h,c;switch(A([1,2,3,4])){case 1:g=A(["a","b"]),t=I(0,0,"A","below"),r=y(4,8),s=y(4,8),f=new H(r*s).div(2),O=new T(r*s,2),o=m(t,s,0,"B","below"),B=A([30,45,60]),a=m(o,r,B,"C","above"),i=m(t,r,B,"D","above"),D=F(t,o,a,i),x=v(o,t,"black",.5,""),p=v(a,o,"black",.5,""),E=V(o,t,i,"black",1.5,`${B}^\\circ`),$=[],n=Math.min(t.x,o.x,a.x,i.x)-1,l=Math.min(t.y,o.y,a.y,i.y)-1,c=Math.max(t.x,o.x,a.x,i.x)+1,h=Math.max(t.y,o.y,a.y,i.y)+1,$.push(k(t,o,a,i),x,p,E,D),this.question="$ABCD$ est un parallélogramme.<br>",g==="a"&&(this.question+=`Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),B===30&&(this.correction=`
      $\\begin{aligned}
     \\overrightarrow{AB}\\cdot \\overrightarrow{AD}&=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
      &=${r}\\times ${s}\\times \\cos\\left(${B}°\\right)\\\\
               &=${r*s}\\times\\dfrac{\\sqrt{3}}{2}\\\\
               &=${b(f,1)}\\sqrt{3}
               \\end{aligned}$`,this.reponse=[`${f}\\sqrt{3}`,`${O.texFraction}\\times\\sqrt{3}`]),B===45&&(this.correction=`
      $\\begin{aligned}
     \\overrightarrow{AB}\\cdot \\overrightarrow{AD}&=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
      &=${r}\\times ${s}\\times \\cos\\left(${B}°\\right)\\\\
               &=${r*s}\\times \\dfrac{\\sqrt{2}}{2}\\\\
               &=${b(f,1)}\\sqrt{2}
               \\end{aligned}$`,this.reponse=[`${f}\\sqrt{2}`,`${O.texFraction}\\times\\sqrt{2}`]),B===60&&(this.correction=`
      $\\begin{aligned}
     \\overrightarrow{AB}\\cdot \\overrightarrow{AD}&=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
      &=${r}\\times ${s}\\times \\cos\\left(${B}°\\right)\\\\
               &=${r*s}\\times \\dfrac{1}{2}\\\\
               &=${b(f,1)}
               \\end{aligned}$`,this.reponse=[`${f}`,`${O.texFraction}`])),g==="b"&&(A([!0,!1])?(this.question+=`Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{DC}$.<br>
            
            `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`
    Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{DC}$ sont colinéaires et de même sens.<br>
    On en déduit : $\\overrightarrow{AB}\\cdot \\overrightarrow{DC}=AB\\times DC=${s}\\times ${s}=${s*s}$.`,this.reponse=s*s):(this.question=`Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{CD}$.<br>
            
            `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`
      Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ sont colinéaires et de sens contraires.<br>
      On en déduit : $\\overrightarrow{AB}\\cdot \\overrightarrow{CD}=-AB\\times DC=-${s}\\times ${s}=${-s*s}$.`,this.reponse=-s*s));break;case 2:e=A([!0,!1]),g=A(["a","b","c","d","e"]),t=I(0,0,"A","below"),r=A([4,6,8,10]),C=new H(r*r).div(4),o=m(t,r,0,"B","below"),a=m(o,r,90,"C","above"),i=m(t,r,90,"D","above"),D=F(t,o,a,i),q=K(t,o,"I","below"),x=v(i,a,"black",.5,""),p=v(a,o,"black",.5,""),$=[],n=Math.min(t.x,o.x,a.x,i.x)-1,l=Math.min(t.y,o.y,a.y,i.y)-1.5,c=Math.max(t.x,o.x,a.x,i.x)+1,h=Math.max(t.y,o.y,a.y,i.y)+1.5,$.push(k(t,o,a,i,q),x,p,D,P(q,i),N(t,q,"||"),N(q,o,"||")),g==="a"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{AD}":"\\overrightarrow{CB}"}$.<br>

          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Les vecteurs $\\overrightarrow{AB}$ et $${e?"\\overrightarrow{AD}":"\\overrightarrow{CB}"}$ sont orthogonaux, on en déduit : $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{AD}":"\\overrightarrow{CB}"}=0$.
     `,this.reponse=0),g==="b"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{DA}\\cdot \\overrightarrow{DI}$.<br>

          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Le projeté orthogonal de $I$ sur $(DA)$ est $A$. Ainsi : <br>
          $\\overrightarrow{DA}\\cdot \\overrightarrow{DI}=\\overrightarrow{DA}\\cdot \\overrightarrow{DA}=${r}^2=${r**2}$.
     `,this.reponse=r*r),g==="c"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{ID}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Le projeté orthogonal de $D$ sur $(AB)$ est $A$. Ainsi : <br>
          $\\overrightarrow{AB}\\cdot \\overrightarrow{ID}=\\overrightarrow{AB}\\cdot \\overrightarrow{IA}$.<br>
          Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{IA}$ sont colinéaires de sens contraire. On a donc
          $\\overrightarrow{AB}\\cdot \\overrightarrow{ID}=-${r}\\times ${b(r/2,0)}=${b(-r*r/2,0)}$.
     `,this.reponse=-r*r/2),g==="d"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{BI}\\cdot \\overrightarrow{ID}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Le projeté orthogonal de $D$ sur $(AB)$ est $A$. Ainsi : <br>
          $\\overrightarrow{BI}\\cdot \\overrightarrow{ID}=\\overrightarrow{BI}\\cdot \\overrightarrow{IA}$.<br>
          Les vecteurs $\\overrightarrow{BI}$ et $\\overrightarrow{IA}$ sont colinéaires de même sens. On a donc
          $\\overrightarrow{BI}\\cdot \\overrightarrow{ID}=${b(r/2,0)}\\times ${b(r/2,0)}=${b(C,0)}$.
     `,this.reponse=C),g==="e"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{BC}\\cdot  ${e?"\\overrightarrow{ID}":"\\overrightarrow{DI}"}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Le projeté orthogonal de $I$ sur $(BC)$ est $B$. Celui de $D$ sur $(BC)$ est $C$.  Ainsi : <br>
          $\\overrightarrow{BC}\\cdot ${e?"\\overrightarrow{ID}":"\\overrightarrow{DI}"}=\\overrightarrow{BC}\\cdot ${e?"\\overrightarrow{BC}":"\\overrightarrow{CB}"}$.<br>
           On a donc
          $\\overrightarrow{BC}\\cdot ${e?"\\overrightarrow{ID}":"\\overrightarrow{DI}"}=${r}\\times ${e?`${r}`:`(-${r})`}=${e?`${r*r}`:`${-r*r}`}$.
     `,this.reponse=e?r*r:-r*r);break;case 3:e=A([!0,!1]),g=A(["a","b","c"]),t=I(0,0,"A","below"),r=y(5,10),o=m(t,r,0,"B","below"),s=y(2,4),z=y(3,6),i=m(t,z,90,"D","above"),a=m(i,s,0,"C","above"),D=F(t,o,a,i),x=v(o,t,"black",.5,""),p=v(i,a,"black",.5,""),$=[],n=Math.min(t.x,o.x,a.x,i.x)-1,l=Math.min(t.y,o.y,a.y,i.y)-1,c=Math.max(t.x,o.x,a.x,i.x)+1,h=Math.max(t.y,o.y,a.y,i.y)+1,$.push(k(t,o,a,i),x,p,D,Q(o,t,i)),g==="a"&&(this.question=`$ABCD$ est un trapèze rectangle.<br>

          Calculer $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{AD}":"\\overrightarrow{DA}"}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`Les vecteurs $\\overrightarrow{AB}$ et $${e?"\\overrightarrow{AD}":"\\overrightarrow{DA}"}$ sont orthogonaux. <br>
          Donc $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{AD}":"\\overrightarrow{DA}"}=0$.
     `,this.reponse=0),g==="b"&&(this.question=`$ABCD$ est un trapèze rectangle.<br>

          Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`Le projeté orthogonal du point $C$ sur $(AB)$ est le point $H$ tel que $BH=${r-s}$.<br>
         On a :  $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}=\\overrightarrow{AB}\\cdot \\overrightarrow{BH}$ avec $\\overrightarrow{AB}$ et  $\\overrightarrow{BH}$ colinéaires de sens contraire.<br>
         On en déduit  $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}=-AB\\times BH=-${r}\\times ${r-s}=${-r*(r-s)}$.
     `,this.reponse=-r*(r-s)),g==="c"&&(this.question=`$ABCD$ est un trapèze rectangle.<br>

          Calculer $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{DC}":"\\overrightarrow{CD}"}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`Les vecteurs $\\overrightarrow{AB}$ et  $${e?"\\overrightarrow{DC}":"\\overrightarrow{CD}"}$ sont colinéaires ${e?"même sens":"sens contraire"}.<br>
         On a :  $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{DC}":"\\overrightarrow{CD}"}=${r}\\times ${e?`${s}`:`(-${s})`}=${e?`${r*s}`:`${-r*s}`}$
       
         
         
       
     `,this.reponse=e?r*s:-r*s);break;case 4:e=A([!0,!1]),g=A(["a","b","c","d","e","f"]),t=I(0,0,"A","below"),r=y(3,6),o=m(t,r,0,"B","below"),a=m(o,r,60,"C","right"),i=m(a,r,120,"D","above"),d=m(i,r,180,"E","above"),w=m(d,r,-120,"F","left"),S=K(w,a,"O","below"),D=F(t,o,a,i,d,w),x=v(o,t,"black",.5,""),p=v(i,a,"black",.5,""),E=v(d,i,"black",.5,""),G=v(w,d,"black",.5,""),R=v(t,w,"black",.5,""),J=v(a,o,"black",.5,""),L=P(d,o),M=P(w,a),j=P(t,i),L.pointilles=2,M.pointilles=2,j.pointilles=2,$=[],n=Math.min(t.x,o.x,a.x,i.x,d.x,w.x)-1,l=Math.min(t.y,o.y,a.y,i.y,d.y,w.y)-1,c=Math.max(t.x,o.x,a.x,i.x,d.x,w.x)+1,h=Math.max(t.y,o.y,a.y,i.y,d.y,w.y)+1,C=new H(r*r).div(2),$.push(k(t,o,a,i,d,w,S),x,p,E,G,R,J,D,L,M,j),g==="a"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

          Calculer $\\overrightarrow{OA}\\cdot ${e?"\\overrightarrow{OB}":"\\overrightarrow{OF}"}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
          $\\begin{aligned}
          \\overrightarrow{OA}\\cdot ${e?"\\overrightarrow{OB}":"\\overrightarrow{OF}"}&=OA\\times  ${e?"OB":"OF"}\\times \\cos(\\widehat{ ${e?"AOB":"AOF"}})\\\\
           &=${r}\\times ${r}\\times \\cos\\left(60°\\right)\\\\
                    &=${r*r}\\times\\dfrac{1}{2}\\\\
                    &=${b(C,1)}
                    \\end{aligned}$`,this.reponse=C),g==="b"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

          Calculer $\\overrightarrow{ED}\\cdot ${e?"\\overrightarrow{OC}":"\\overrightarrow{OF}"}$.<br>
          
          `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
          Les vecteurs $\\overrightarrow{ED}$ et $${e?"\\overrightarrow{OC}":"\\overrightarrow{OF}"}$ sont colinéaires ${e?"de même sens":"de sens contraire"}.<br>
Ainsi, $\\overrightarrow{ED}\\cdot ${e?"\\overrightarrow{OC}":"\\overrightarrow{OF}"}=${r}\\times ${e?`${r}`:`(-${r})`}=${e?`${r*r}`:`${-r*r}`}$.
         `,this.reponse=e?r*r:-r*r),g==="c"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

            Calculer $\\overrightarrow{OC}\\cdot ${e?"\\overrightarrow{OA}":"\\overrightarrow{OE}"}$.<br>
            
            `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
            $\\begin{aligned}
            \\overrightarrow{OC}\\cdot ${e?"\\overrightarrow{OA}":"\\overrightarrow{OE}"}&=OC\\times  ${e?"OA":"OE"}\\times \\cos(\\widehat{ ${e?"AOE":"COE"}})\\\\
             &=${r}\\times ${r}\\times \\cos\\left(120°\\right)\\\\
                      &=${r*r}\\times\\left(-\\dfrac{1}{2}\\right)\\\\
                      &=${b(-C,1)}
                      \\end{aligned}$`,this.reponse=-C),g==="d"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

            Calculer $\\overrightarrow{OC}\\cdot ${e?"\\overrightarrow{BD}":"\\overrightarrow{DB}"}$.<br>
            
            `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
           $OBCD$ est un losange (4 côtés de même longueur). Ses diagonales sont donc perpendiculaires. On en déduit : <br>
           $\\overrightarrow{OC}\\cdot ${e?"\\overrightarrow{BD}":"\\overrightarrow{DB}"}=0$.
  `,this.reponse=0),g==="e"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

            Calculer $\\overrightarrow{DE}\\cdot \\overrightarrow{DA}$.<br>
            
            `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
            $\\begin{aligned}
            \\overrightarrow{DE}\\cdot \\overrightarrow{DA}&=DE\\times DA\\times \\cos(\\widehat{ ADE})\\\\
             &=${r}\\times 2\\times ${r}\\times \\cos\\left(60°\\right)\\\\
                      &=${2*r*r}\\times\\dfrac{1}{2}\\\\
                      &=${r*r}
                      \\end{aligned}$`,this.reponse=r*r),g==="f"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

            Calculer $\\overrightarrow{OB}\\cdot ${e?"\\overrightarrow{EB}":"\\overrightarrow{BE}"}$.<br>
            
            `,this.question+=u({xmin:n,ymin:l,xmax:c,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
            Les vecteurs $\\overrightarrow{OB}$ et $${e?"\\overrightarrow{EB}":"\\overrightarrow{BE}"}$ sont colinéaires ${e?"de même sens":"de sens contraire"}.<br>
  Ainsi, $\\overrightarrow{OB}\\cdot ${e?"\\overrightarrow{EB}":"\\overrightarrow{BE}"}=${r}\\times ${e?`2\\times${r}`:`(-2\\times${r})`}=${e?`${2*r*r}`:`${-2*r*r}`}$.
           `,this.reponse=e?2*r*r:-2*r*r);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{cr as dateDePublication,mr as default,lr as interactifReady,hr as interactifType,ur as refs,nr as titre,gr as uuid};
