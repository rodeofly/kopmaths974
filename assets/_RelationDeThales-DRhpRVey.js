import{r as g,aP as J,p as V,aJ as w,aQ as z,aa as C,A as H,b6 as f,W as h,aW as P,ai as I,aE as k,aR as N,o as K,l as U}from"./embellissements-BYV7mIDn.js";import{b as X}from"./enrichissements-DZcTytgd.js";import{t as Y}from"./style-CcGLZIPY.js";import{E as Z}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const _t="Écrire une relation de Thalès";class yt extends Z{level;constructor(){super(),this.besoinFormulaireNumerique=["Configuration",3,`1 : Triangles imbriqués
2 : Papillon
3 : Mélange`],this.nbQuestions=1,this.sup=1,this.level=4}nouvelleVersion(e){let D=[];this.level===4&&(this.sup=1);const q=g(0,1);for(let t=0,m="",u="",A=0;t<this.nbQuestions&&A<50;){t%3===0&&(D=["QD"]);const y=J(5,D);D.push(y);const a=y[0],$=y[1],s=y[2],n=y[3],i=y[4],p=g(5,10),b=g(5,10,p),Q=g(Math.max(p-b,b-p)+1,p+b-1,[p,b]),o=V(0,0,a),d=w(o,p,$),B=z(o,d,b,Q);B.id=`M2D_${e}_${t}_1`;const l=B.listePoints[2];l.nom=s;let c=g(3,8,5)/10;this.sup===2&&(c*=-1),this.sup===3&&(t+q)%2===0&&(c*=-1);const _=C(o,l,c),r=C(d,l,c),v=H(_,r,l);v.id=`M2D_${e}_${t}_2`;const T=f(_,r,-.5),x=f(r,_,-.5),W=h(n,T,0,"black",1,"milieu",!0),L=h(i,x,0,"black",1,"milieu",!0),E=f(o,d,-.5),O=f(d,o,-.5),R=h(a,E,0,"black",1,"milieu",!0),S=h($,O,0,"black",1,"milieu",!0);let M;c<0?P(o,l,r)<P(r,l,o)?M=I(o,l,-N(o,l,r)/2,1/k(o,l)):M=I(o,l,-N(r,l,o)/2,1/k(o,l)*.5):M=I(o,l,-180+N(o,l,d)/2,1/k(o,l)*.5);const j=h(s,M,0,"black",1,"milieu",!0);m="Sur la figure suivante : ",c>0?m+=`
        <br> $\\leadsto ${n}$ est sur $${"["+s+a+"]"}$,
        <br> $\\leadsto ${i}$ est sur $${"["+s+$+"]"}$,`:m+=`<br> $\\leadsto$ les droites $(${a+n})$ et $(${$+i})$ sont sécantes en $${s}$,`,m+=`<br> $\\leadsto$ les droites $(${a+$})$ et $(${n+i})$ sont parallèles.<br>Écrire une relation de Thalès.<br>`,m+=K({xmin:Math.min(o.x,d.x,l.x,_.x,r.x)-1.5,ymin:Math.min(o.y,d.y,l.y,_.y,r.y)-.8,xmax:Math.max(o.x,d.x,l.x,_.x,r.x)+1.5,ymax:Math.max(o.y,d.y,l.y,_.y,r.y)+.8,scale:.5},B,v,R,S,j,W,L);const F=c<0?2:6,G=X(`${e}_${t}`,`if (!document.getElementById('M2D_${e}_${t}_1').dataset.colorie == true || (document.getElementById('M2D_${e}_${t}_1').dataset.colorie == 'false')){
          document.getElementById('M2D_${e}_${t}_1').style.stroke = 'blue';
          document.getElementById('M2D_${e}_${t}_2').style.stroke = 'red';
          document.getElementById('M2D_${e}_${t}_1').style.opacity = .5;
          document.getElementById('M2D_${e}_${t}_1').style.strokeWidth = ${F};
          document.getElementById('M2D_${e}_${t}_2').style.opacity = 1;
          document.getElementById('M2D_${e}_${t}_2').style.strokeWidth = 2;
          document.getElementById('M2D_${e}_${t}_1').dataset.colorie = true;
          document.getElementById('btnMathALEA2d_${e}_${t}').classList.add('active');
        } else {
          document.getElementById('M2D_${e}_${t}_1').style.stroke = 'black';
          document.getElementById('M2D_${e}_${t}_2').style.stroke = 'black';
          document.getElementById('M2D_${e}_${t}_1').style.opacity = 1;
          document.getElementById('M2D_${e}_${t}_1').style.strokeWidth = 1;
          document.getElementById('M2D_${e}_${t}_2').style.opacity = 1;
          document.getElementById('M2D_${e}_${t}_2').style.strokeWidth = 1;
          document.getElementById('M2D_${e}_${t}_1').dataset.colorie = false;
          document.getElementById('btnMathALEA2d_${e}_${t}').classList.remove('active');
  
        }
        `,"Mettre en couleur les 2 triangles");c>0?u=`Dans le triangle $${a+$+s}$ :
       <br> $\\leadsto$ $${n}\\in${"["+s+a+"]"}$,
       <br> $\\leadsto$ $${i}\\in${"["+s+$+"]"}$,
       <br> $\\leadsto$  $(${a+$})//(${n+i})$,
       <br> donc d'après le théorème de Thalès, les triangles $${a+$+s}$ et $${n+i+s}$ ont des longueurs proportionnelles.`:u=`$\\leadsto$ Les droites $(${a+n})$ et $(${$+i})$ sont sécantes en $${s}$,
        <br> $\\leadsto$ les droites $(${a+$})$ et $(${n+i})$ sont parallèles,<br>
        donc d'après le théorème de Thalès, les triangles $${a+$+s}$ et $${n+i+s}$ ont des longueurs proportionnelles.`,u+="<br><br>",u+=`$\\dfrac{\\color{red}${s+n}}{\\color{blue}${s+a}}=\\dfrac{\\color{red}${s+i}}{\\color{blue}${s+$}}=\\dfrac{\\color{red}${n+i}}{\\color{blue}${a+$}}$`,u+="<br>",u+=`<br>${Y("Remarque")}<br>On pourrait aussi écrire : `,u+=`$\\dfrac{\\color{blue}${s+a}}{\\color{red}${s+n}}=\\dfrac{\\color{blue}${s+$}}{\\color{red}${s+i}}=\\dfrac{\\color{blue}${a+$}}{\\color{red}${n+i}}$`,m+=`<br><div style="display: inline-block;margin-top:20px;">${G}</div>`,this.listeQuestions.indexOf(m)===-1&&(this.listeQuestions[t]=m,this.listeCorrections[t]=u,t++),A++}U(this)}}export{yt as default,_t as titre};
