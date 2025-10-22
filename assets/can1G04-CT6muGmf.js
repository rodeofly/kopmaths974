import{a as p,p as C,r as f,aJ as g,F as E,k as u,aK as x,aL as M,aH as k,o as L,e as m}from"./embellissements-BYV7mIDn.js";import{c as P}from"./aleatoires-BLhzzHLc.js";import D from"./ExerciceSimple-CWWOU0FG.js";import S from"decimal.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./dateEtHoraires-yqKtvK1K.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const X="Calculer un produit scalaire à l’aide de normes et d’un angle ",Y=!0,Z="mathLive",_="26/06/2022",tt="df08a",et={"fr-fr":["can1G04"],"fr-ch":[]};class it extends D{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const c=p([!0,!1]),t=P(3,"O",!0),r=C(0,0,t[0],"below"),e=f(4,8),$=g(r,e,0,t[1],"below"),i=f(4,8),o=new S(e*i).div(2),n=new E(e*i,2),s=p([[60,"\\dfrac{\\pi}{3}","\\dfrac{\\pi}{3}",2.5],[30,"\\dfrac{\\pi}{6}","\\dfrac{\\pi}{6}",5],[45,"\\dfrac{\\pi}{4}","\\dfrac{\\pi}{4}",3],[120,"\\dfrac{2\\pi}{3}","\\dfrac{2\\pi}{3}",2],[135,"\\dfrac{3\\pi}{4}","\\dfrac{3\\pi}{4}",2],[150,"\\dfrac{5\\pi}{6}","\\dfrac{5\\pi}{6}",1.5]]),a=g(r,i,s[0],t[2],"above"),d=u(r,$,"blue","->");d.epaisseur=2;const w=x($,r,"black",.5,""),v=x(r,a,"black",.5,""),l=u(r,a,"red","->");l.epaisseur=2,l.tailleExtremites=7,d.tailleExtremites=7;const b=M($,r,a,"black",2,c?`${s[0]}°`:`${s[1]}`,{ecart:1}),h=[],q=Math.min(r.x,$.x,a.x)-1,y=Math.min(r.y,$.y,a.y)-1.5,A=Math.max(r.x,$.x,a.x)+1,F=Math.max(r.y,$.y,a.y)+1.5;h.push(b,d,l,k(r,$,a),w,v),this.question=`Calculer $\\overrightarrow{${t[0]}${t[1]}}\\cdot\\overrightarrow{${t[0]}${t[2]}}$.<br>
    
    `,this.question+=L({xmin:q,ymin:y,xmax:A,ymax:F,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},h),s[0]===30&&(this.correction=`
    $\\begin{aligned}
    \\overrightarrow{${t[0]}${t[1]}}\\cdot\\overrightarrow{${t[0]}${t[2]}}&=${t[0]}${t[1]}\\times ${t[0]}${t[2]}\\times \\cos(\\widehat{${t[2]}${t[0]}${t[1]}})\\\\
    &=${c?`${e}\\times ${i}\\times \\cos(${s[0]}°)`:`${e}\\times ${i}\\times \\cos\\left(${s[2]}\\right)`}\\\\
             &=\\dfrac{${e*i}\\sqrt{3}}{2}\\\\
             &=${m(o,1)}\\sqrt{3}
             \\end{aligned}$



   `,this.reponse=[`${o}\\sqrt{3}`,`${n.texFraction}\\times\\sqrt{3}`]),s[0]===45&&(this.correction=`
      $\\begin{aligned}
      \\overrightarrow{${t[0]}${t[1]}}\\cdot\\overrightarrow{${t[0]}${t[2]}}&=${t[0]}${t[1]}\\times ${t[0]}${t[2]}\\times \\cos(\\widehat{${t[2]}${t[0]}${t[1]}})\\\\
      &=${c?`${e}\\times ${i}\\times \\cos(${s[0]}°)`:`${e}\\times ${i}\\times \\cos\\left(${s[2]}\\right)`}\\\\
               &=\\dfrac{${e*i}\\times\\sqrt{2}}{2}\\\\
               &=${m(o,1)}\\sqrt{2}
               \\end{aligned}$



     `,this.reponse=[`${o}\\sqrt{2}`,`${n.texFraction}\\times\\sqrt{2}`]),s[0]===60&&(this.correction=`
      $\\begin{aligned}
      \\overrightarrow{${t[0]}${t[1]}}\\cdot\\overrightarrow{${t[0]}${t[2]}}&=${t[0]}${t[1]}\\times ${t[0]}${t[2]}\\times \\cos(\\widehat{${t[2]}${t[0]}${t[1]}})\\\\
               &=${c?`${e}\\times ${i}\\times \\cos(${s[0]}°)`:`${e}\\times ${i}\\times \\cos\\left(${s[2]}\\right)`}\\\\
               &=${e*i}\\times\\dfrac{1}{2}\\\\
               &=${m(o,1)}
               \\end{aligned}$



     `,this.reponse=[`${o}`,`${n.texFraction}`]),s[0]===120&&(this.correction=`
    $\\begin{aligned}
    \\overrightarrow{${t[0]}${t[1]}}\\cdot\\overrightarrow{${t[0]}${t[2]}}&=${t[0]}${t[1]}\\times ${t[0]}${t[2]}\\times \\cos(\\widehat{${t[2]}${t[0]}${t[1]}})\\\\
    &=${c?`${e}\\times ${i}\\times \\cos(${s[0]}°)`:`${e}\\times ${i}\\times \\cos\\left(${s[2]}\\right)`}\\\\
             &=${e*i}\\times\\dfrac{-1}{2}\\\\
             &=${m(-o,1)}
             \\end{aligned}$



   `,this.reponse=[`${-o}`,`${n.oppose().texFraction}`]),s[0]===135&&(this.correction=`
  $\\begin{aligned}
  \\overrightarrow{${t[0]}${t[1]}}\\cdot\\overrightarrow{${t[0]}${t[2]}}&=${t[0]}${t[1]}\\times ${t[0]}${t[2]}\\times \\cos(\\widehat{${t[2]}${t[0]}${t[1]}})\\\\
  &=${c?`${e}\\times ${i}\\times \\cos(${s[0]}°)`:`${e}\\times ${i}\\times \\cos\\left(${s[2]}\\right)`}\\\\
           &=${e*i}\\times\\dfrac{-\\sqrt{2}}{2}\\\\
           &=${m(-o,1)}\\sqrt{2}
           \\end{aligned}$



 `,this.reponse=[`${-o}\\sqrt{2}`,`${n.oppose().texFraction}\\times\\sqrt{2}`]),s[0]===150&&(this.correction=`
    $\\begin{aligned}
    \\overrightarrow{${t[0]}${t[1]}}\\cdot\\overrightarrow{${t[0]}${t[2]}}&=${t[0]}${t[1]}\\times ${t[0]}${t[2]}\\times \\cos(\\widehat{${t[2]}${t[0]}${t[1]}})\\\\
    &=${c?`${e}\\times ${i}\\times \\cos(${s[0]}°)`:`${e}\\times ${i}\\times \\cos\\left(${s[2]}\\right)`}\\\\
             &=${e*i}\\times\\dfrac{-\\sqrt{3}}{2}\\\\
             &=${m(-o,1)}\\sqrt{3}
             \\end{aligned}$



   `,this.reponse=[`${-o}\\sqrt{3}`,`${n.oppose().texFraction}\\times\\sqrt{3}`]),this.canEnonce=this.question,this.canReponseACompleter=""}}export{_ as dateDePublication,it as default,Y as interactifReady,Z as interactifType,et as refs,X as titre,tt as uuid};
