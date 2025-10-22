import{E as bn}from"./Exercice-DtXhjCyI.js";import{g as xn,af as un,p as S,a as fn,r as d,ah as j,n as hn,aF as pn,A as qn,k as h,aG as v,aP as gn,aH as A,aV as B,o as C,D,Z as u,F as b,m as a,ap as f,l as En}from"./embellissements-BYV7mIDn.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const Tn="Relations métriques dans un triangle rectangle",Sn="10/04/2025",jn=!1,vn="4f81e",Qn={"fr-ch":["1mG3-6"],"fr-fr":[]};class Ln extends bn{constructor(){super(),this.nbQuestions=3,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : BD-BA","2 : BD-AD","3 : AB-AD","4 : AE-AB","5 : AE-ED","6 : AE-AD","7 : ED-AD","8 : AE-EB","9 : ED-EB","10 : AB-EB","11 : BD-EB","12 : ED-BD","13 : Mélange"].join(`
`)],this.besoinFormulaire2CaseACocher=["Nom des sommets qui changent"],this.besoinFormulaire3CaseACocher=["Appliquer une rotation aux triangles"],this.correctionDetaillee=!1,this.correctionDetailleeDisponible=!0,this.sup2=!1,this.sup3=!1,this.sup="13",this.comment=` Le triangle EAD est rectangle en E et les triangle AEB et EDB sont rectangles en B.<br>Le type de la question indique les longueurs fournies dans l'énoncé selon le triangle ci-dessous.<br> 
     <pre>      
          E<br>
         /|\\ <br>
        / | \\ <br>
       /  |  \\ <br>
      /   |   \\ <br>
     /    |    \\ <br>
    A-----B-----D <pre>`}nouvelleVersion(){const Z=xn({saisie:this.sup,min:1,max:12,melange:13,defaut:1,nbQuestions:this.nbQuestions}),z=un(Z,this.nbQuestions);this.consigne="";for(let q=0,Q=0;q<this.nbQuestions&&Q<50;){let P=function(t,o){const r=["above right","above left","below left","below right"],i=r.indexOf(t);if(i===-1)return t;const s=Math.floor(o/90),c=(i+s)%4;return r[c]},l="",x="",w=[];const L=[],R=S(0,0);let V=90,p=0;this.sup3===!0&&(V=fn([-1,1])*d(45,125),p=d(0,360));const N=5,K=P("below right",p),m=j(S(N,0),R,p,"D",K),U=P("below left",p),$=j(S(-N,0),R,p,"A",U),W=V<0?"below right":"above left",X=P(W,p),e=j(m,R,V,"E",X),Y=hn($,m),_=V<0?"above left":"below right",nn=P(_,p),n=pn(e,Y,"B",nn),M=m,G=qn($,m,e),on=h(e,m,"blue"),en=h($,m),$n=h($,e,"red"),mn=h($,n,"red"),tn=h(e,n,"blue"),rn=h($,e),an=h(m,e),sn=h(e,n,"red"),cn=h(n,m,"blue"),I=h(e,n),y=v($,e,m),F=v($,n,e),H=v(m,n,e),g=gn(5,L);L.push(g),this.sup2===!0&&($.nom=g[0],n.nom=g[1],M.nom=g[2],m.nom=g[3],e.nom=g[4]);const J=A($,n,M,m,e);w=[G,I,F,y,J];const E=[G,I,F,y,J],k=B(e,$,n,2,"|","black",.5,.2,"blue",.8,!1,!1),T=B(e,m,n,2,"||","black",.5,.2,"red",.8,!1,!1),ln=B($,e,n,2,"||","black",.5,.2,"red",.8,!1,!1),dn=B(n,e,m,2,"|","black",.5,.2,"blue",.8,!1,!1);if(E.push(k),E.push(T),E.push(H),this.correctionDetaillee){x+=`Les trois triangles sont rectangles. Les deux triangles inscrits dans le triangle $\\triangle ${$.nom}${e.nom}${m.nom}$ partage un angle avec ce même triangle, l'angle $\\widehat{${e.nom}${$.nom}${m.nom}}$ pour le triangle $\\triangle ${$.nom}${e.nom}${n.nom}$ (en bleu ci-dessous) et l'angle $\\widehat{${e.nom}${m.nom}${$.nom}}$ pour le triangle $\\triangle ${e.nom}${m.nom}${n.nom}$ (en rouge ci-dessous).`,x+="<br>"+C(Object.assign({pixelParCm:25,scale:.4},D(E)),E),x+=`Deux triangles qui ont deux paires d'angles égaux ont également leur troisième paire d'angles égaux. Par conséquent, les trois triangles $\\triangle ${$.nom}${e.nom}${m.nom}$, $\\triangle ${$.nom}${e.nom}${n.nom}$ et $\\triangle ${e.nom}${m.nom}${n.nom}$ sont semblables. On identifie les côtés correspondants comme ci-dessous.`;const t=A($,e,m),o=A($,e,n),r=A(e,m,n),i=[en,$n,on,t,y,T,k],s=[mn,rn,tn,o,F,ln,k],c=[cn,sn,an,r,H,T,dn];x+="<br>"+C(Object.assign({pixelParCm:25,scale:.4,style:"display: inline-block"},D(i)),i),x+=C(Object.assign({pixelParCm:25,scale:.4,style:"display: inline-block"},D(s)),s),x+=C(Object.assign({pixelParCm:25,scale:.4,style:"display: inline-block"},D(c)),c),x+=`<br>Par le théorème de Thalès, on a les rapports suivants : 
      <br><br>
      $\\begin{aligned}    
      \\dfrac{${u(`${$.nom}${e.nom}`,"red")}}{${u(`${$.nom}${m.nom}`,"black")}} = \\dfrac{${u(`${$.nom}${n.nom}`,"red")}}{${u(`${$.nom}${e.nom}`,"black")}} = \\dfrac{${u(`${e.nom}${n.nom}`,"red")}}{${u(`${e.nom}${m.nom}`,"black")}}\\\\\\\\
      \\dfrac{${u(`${$.nom}${e.nom}`,"red")}}{${u(`${e.nom}${m.nom}`,"blue")}} = \\dfrac{${u(`${$.nom}${n.nom}`,"red")}}{${u(`${e.nom}${n.nom}`,"blue")}} = \\dfrac{${u(`${e.nom}${n.nom}`,"red")}}{${u(`${n.nom}${m.nom}`,"blue")}}\\\\\\\\
      \\dfrac{${u(`${$.nom}${m.nom}`,"black")}}{${u(`${e.nom}${m.nom}`,"blue")}} = \\dfrac{${u(`${$.nom}${e.nom}`,"black")}}{${u(`${e.nom}${n.nom}`,"blue")}} = \\dfrac{${u(`${e.nom}${m.nom}`,"black")}}{${u(`${n.nom}${m.nom}`,"blue")}}
      \\end{aligned}$`}else x+=`Les trois triangles $\\triangle ${$.nom}${e.nom}${m.nom}$, $\\triangle ${$.nom}${e.nom}${n.nom}$ et $\\triangle ${e.nom}${m.nom}${n.nom}$ sont semblables, car ils sont tous rectangles et que $\\widehat{EAD}=\\widehat{EAB}$ et $\\widehat{EDA}=\\widehat{EDB}$.`;switch(l+="Déterminer la longueur des segments ",z[q]){case 1:{const t=d(5,10),o=d(2,t,[t]);l+=`$${$.nom}${e.nom}, ${e.nom}${m.nom}, ${e.nom}${n.nom}$ et $${$.nom}${m.nom}$, si `,l+=`$${$.nom+n.nom} = ${t}~\\text{cm}$ et $${n.nom+m.nom} = ${o}~\\text{cm}$.`;const r=f(t*o),i=f(t*o+o*o),s=f(t*o+t*t);x+=`<br> 
          On commence par déterminer $${$.nom+m.nom}$. On a $${$.nom+m.nom} = ${$.nom+n.nom} + ${n.nom+m.nom} = ${t} + ${o} = ${a(`${t+o}~\\text{cm}`)}$.
          <br> On détermine $${e.nom+n.nom}$.  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom}${n.nom}}{${e.nom}${n.nom}} = \\dfrac{${e.nom}${n.nom}}{${n.nom}${m.nom}}$, il s'ensuit que $${e.nom+n.nom}^2=${$.nom+n.nom}\\times ${n.nom+m.nom} = ${t} \\times ${o} = ${t*o}~\\text{cm}$, d'où $${e.nom+n.nom} =${r[1]===t*o?` ${a(`\\sqrt{${t*o}}~\\text{cm}`)}`:`\\sqrt{${t*o}}=${a(`${r[0]}${r[1]===1?"":`\\sqrt{${r[1]}}`}~\\text{cm}`)}`}$.<br>
          On détermine $${e.nom+m.nom}$ et $${$.nom+e.nom}$ en utilisant le théorème de Pythagore. On a 
          $${e.nom+m.nom} = \\sqrt{${e.nom+n.nom}^2+${n.nom+m.nom}^2}$, d'où 
          $${e.nom+m.nom}=${i[1]===t*o+o*o?`${a(`\\sqrt{${t*o+o*o}}~\\text{cm}`)}`:`\\sqrt{${t*o+o*o}}= ${a(`${i[0]}${i[1]===1?"":`\\sqrt{${i[1]}}`}~\\text{cm}`)}`}$.
          <br>On a
          $${$.nom+e.nom} = \\sqrt{${$.nom+n.nom}^2 + ${n.nom+e.nom}^2}$, d'où
          $${$.nom+e.nom}=${s[1]===t*o+t*t?`${a(`\\sqrt{${t*o+t*t}}~\\text{cm}`)}`:`\\sqrt{${t*o+t*t}}= ${a(`${s[0]}${s[1]===1?"":`\\sqrt{${s[1]}}`}~\\text{cm}`)}`}$.
          `;break}case 2:{const t=d(12,20);let o,r;do r=d(2,t-2),o=t-r;while(o===r);l+=`$${$.nom}${e.nom}, ${$.nom}${n.nom}, ${e.nom}${n.nom}$ et $${e.nom}${m.nom}$, si `,l+=`$${n.nom+m.nom} = ${r}~\\text{cm}$ et $${$.nom+m.nom} = ${t}~\\text{cm}$.`;const i=f(o*r),s=f(o*r+r*r),c=f(o*r+o*o);x+=`<br>
  On commence par déterminer $${$.nom+n.nom}$. On a 
  $
    ${$.nom+n.nom} = ${$.nom+m.nom} - ${n.nom+m.nom}$,
  d'où 
   $ ${$.nom+n.nom} = ${t} - ${r} = ${a(`${o}~\\text{cm}`)}$,
  <br>
  On détermine ensuite $${e.nom+n.nom}$.  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} 
  $
    \\dfrac{${$.nom}${n.nom}}{${e.nom}${n.nom}} = \\dfrac{${e.nom}${n.nom}}{${n.nom}${m.nom}}$,
  il s'ensuit que
  $
    ${e.nom+n.nom}^2 = ${$.nom+n.nom} \\times ${n.nom+m.nom} = ${o} \\times ${r} = ${o*r}~\\text{cm}^2
  $,
  d'où 
  $
    ${e.nom+n.nom} = ${i[1]===o*r?a(`\\sqrt{${o*r}}~\\text{cm}`):`\\sqrt{${o*r}} = ${a(`${i[0]}${i[1]===1?"":`\\sqrt{${i[1]}}`}~\\text{cm}`)}`}$,
  <br>
  On détermine $${e.nom+m.nom}$ en appliquant le théorème de Pythagore. On a 
  $
    ${e.nom+m.nom} = \\sqrt{{${e.nom+n.nom}}^2 + {${n.nom+m.nom}}^2} = \\sqrt{${o*r} + ${r*r}} = \\sqrt{${o*r+r*r}}~\\text{cm}$,
  d'où $
    ${e.nom+m.nom} = ${s[1]===o*r+r*r?a(`\\sqrt{${o*r+r*r}}~\\text{cm}`):`\\sqrt{${o*r+r*r}} = ${a(`${s[0]}${s[1]===1?"":`\\sqrt{${s[1]}}`}~\\text{cm}`)}`}$,
  <br>
  Enfin, on détermine $${$.nom+e.nom}$ en appliquant le théorème de Pythagore. On a 
    $${$.nom+e.nom} = \\sqrt{{${$.nom+n.nom}}^2 + {${e.nom+n.nom}}^2} = \\sqrt{${o*o} + ${o*r}} = \\sqrt{${o*o+o*r}}~\\text{cm}$,
  d'où 
  $${$.nom+e.nom} = ${c[1]===o*o+o*r?a(`\\sqrt{${o*o+o*r}}~\\text{cm}`):`\\sqrt{${o*o+o*r}} = ${a(`${c[0]}${c[1]===1?"":`\\sqrt{${c[1]}}`}~\\text{cm}`)}$`}.`;break}case 3:{const t=d(12,20);let o,r;do r=d(2,t-2),o=t-r;while(o===r);l+=`$${$.nom}${e.nom}, ${e.nom}${m.nom}, ${e.nom}${n.nom}$ et $${n.nom}${m.nom}$, si `,l+=`$${$.nom+n.nom} = ${o}~\\text{cm}$ et $${$.nom+m.nom} = ${t}~\\text{cm}$.`;const i=f(o*r),s=f(o*r+r*r),c=f(o*o+o*r);x+=`<br>
  On commence par déterminer $${n.nom+m.nom}$ : comme $${n.nom+m.nom} = ${$.nom+m.nom} - ${$.nom+n.nom}$, on a $${n.nom+m.nom} = ${t} - ${o} = ${a(`${r}~\\text{cm}`)}$. 

  <br>
  On détermine ensuite $${e.nom+n.nom}$.  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} 
  $
    \\dfrac{${$.nom}${n.nom}}{${e.nom}${n.nom}} = \\dfrac{${e.nom}${n.nom}}{${n.nom}${m.nom}}$,
  on a 
  $
    ${e.nom+n.nom}^2 = ${$.nom+n.nom} \\times ${n.nom+m.nom} = ${o} \\times ${r} = ${o*r}~\\text{cm}^2
  $,
  d'où 
  $
    ${e.nom+n.nom} = ${i[1]===o*r?a(`\\sqrt{${o*r}}~\\text{cm}`):`\\sqrt{${o*r}} = ${a(`${i[0]}${i[1]===1?"":`\\sqrt{${i[1]}}`}~\\text{cm}`)}`}$,
  <br>
  On détermine $${e.nom+m.nom}$ en appliquant le théorème de Pythagore. On a 
  $
    ${e.nom+m.nom} = \\sqrt{{${e.nom+n.nom}}^2 + {${n.nom+m.nom}}^2} = \\sqrt{${o*r} + ${r*r}} = \\sqrt{${o*r+r*r}}~\\text{cm}$,
  d'où $
    ${e.nom+m.nom} = ${s[1]===o*r+r*r?a(`\\sqrt{${o*r+r*r}}~\\text{cm}`):`\\sqrt{${o*r+r*r}} = ${a(`${s[0]}${s[1]===1?"":`\\sqrt{${s[1]}}`}~\\text{cm}`)}`}$,
  <br>
  Enfin, on détermine $${$.nom+e.nom}$ en appliquant le théorème de Pythagore. On a 
    $${$.nom+e.nom} = \\sqrt{{${$.nom+n.nom}}^2 + {${e.nom+n.nom}}^2} = \\sqrt{${o*o} + ${o*r}} = \\sqrt{${o*o+o*r}}~\\text{cm}$,
  d'où 
  $${$.nom+e.nom} = ${c[1]===o*o+o*r?a(`\\sqrt{${o*o+o*r}}~\\text{cm}`):`\\sqrt{${o*o+o*r}} = ${a(`${c[0]}${c[1]===1?"":`\\sqrt{${c[1]}}`}~\\text{cm}`)}$`}.`;break}case 4:{const t=d(6,20),o=d(3,t-1);l+=`$${e.nom}${m.nom}, ${n.nom}${m.nom}, ${e.nom}${n.nom}$ et $${$.nom}${m.nom}$, si `,l+=`$${$.nom+e.nom} = ${t}~\\text{cm}$ et $${$.nom+n.nom} = ${o}~\\text{cm}$.`;const r=f(t*t-o*o),i=new b(t*t-o*o,o),s=new b(t*t-o*o,1),c=i.produitFraction(i).sommeFraction(s);x+=`<br>
          On commence par déterminer $${e.nom+n.nom}$. Par le théorème de Pythagore, on a $${e.nom+n.nom} = \\sqrt{${$.nom+e.nom}^2 - ${$.nom+n.nom}^2}$, d'où $${e.nom+n.nom} = \\sqrt{${t}^2 - ${o}^2} = ${r[1]===t*t-o*o?a(`\\sqrt{${t*t-o*o}}~\\text{cm}`):`\\sqrt{${t*t-o*o}} = ${a(`${r[0]}${r[1]===1?"":`\\sqrt{${r[1]}}`}~\\text{cm}`)}`}$.
          <br> ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom+n.nom}}{${e.nom+n.nom}}=\\dfrac{${e.nom+n.nom}}{${n.nom+m.nom}}$, il s'ensuit que $${n.nom+m.nom}= \\dfrac{${e.nom+n.nom}^2}{${$.nom+n.nom}}=${a(i.texFractionSimplifiee+"~\\text{cm}")}$.
          <br> On détermine $ED$ à l'aide du théorème de Pythagore. On a $${e.nom+m.nom}=\\sqrt{${e.nom+n.nom}^2+${n.nom+m.nom}^2}$, d'où $${e.nom+m.nom}=\\sqrt{(${r[1]===t*t-o*o?`\\sqrt{${t*t-o*o}}`:`${r[0]}${r[1]===1?"":`\\sqrt{${r[1]}}`}`})^2+${i.simplifie().texParentheses}^2}=${a(c.simplifie().texRacineCarree()+"~\\text{cm}")}$
          <br> Enfin, on détermine $${$.nom+m.nom}$. On a $${$.nom+m.nom} = ${$.nom+n.nom} + ${n.nom+m.nom}$, d'où $${$.nom+m.nom} = ${o} + ${i.texFractionSimplifiee} = ${a(i.ajouteEntier(o).texFractionSimplifiee+"~\\text{cm}")}$.
  `;break}case 5:{const t=d(3,20),o=d(3,20,[t]),r=f(t*t+o*o),i=new b(t*t*o*o,t*t+o*o),s=t*t+o*o,c=new b(t*t*t*t,s);l+=`$${$.nom}${n.nom}, ${n.nom}${m.nom}, ${e.nom}${n.nom}$ et $${$.nom}${m.nom}$, si `,l+=`$${$.nom+e.nom} = ${t}~\\text{cm}$ et $${e.nom+m.nom} = ${o}~\\text{cm}$.`,x+=`
          <br>On détermine $${$.nom+m.nom}$ à l'aide du théorème de Pythagore. On a $${$.nom+m.nom} = \\sqrt{${$.nom+e.nom}^2 + ${e.nom+m.nom}^2}$, d'où $${$.nom+m.nom} = \\sqrt{${t}^2 + ${o}^2} = ${r[1]===t*t+o*o?a(`\\sqrt{${t*t+o*o}}~\\text{cm}`):`\\sqrt{${t*t+o*o}} = ${a(`${r[0]}${r[1]===1?"":`\\sqrt{${r[1]}}`}~\\text{cm}`)}`}$
          <br>  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom+e.nom}}{${$.nom+m.nom}}=\\dfrac{${e.nom+n.nom}}{${e.nom+m.nom}}$, il s'ensuit que $${e.nom+n.nom}=\\dfrac{${$.nom+e.nom}\\times ${e.nom+m.nom}}{${$.nom+m.nom}}=${a(i.simplifie().texRacineCarree()+"~\\text{cm}")}$.
          <br> On peut à présent utiliser le théorème de Thalès ou le théorème de Pythagore pour déterminer $${$.nom+n.nom}$ ou $${n.nom+m.nom}$.<br>On utilise une des relations données par le théorème de Thalès pour déterminer $${$.nom+n.nom}$. 
          On a $\\dfrac{${$.nom+e.nom}}{${$.nom+m.nom}}=\\dfrac{${$.nom+n.nom}}{${$.nom+e.nom}}$ d'où $${$.nom+n.nom}=\\dfrac{${$.nom+e.nom}^2}{${$.nom+m.nom}}=${a(c.simplifie().texRacineCarree())}$.
          <br> Enfin, on a que $${n.nom+m.nom} = ${$.nom+m.nom}-${$.nom+n.nom}=${r[1]===t*t+o*o?`\\sqrt{${t*t+o*o}}`:`${`${r[0]}${r[1]===1?"":`\\sqrt{${r[1]}}`}`}`}-${c.simplifie().texRacineCarree()}=${a(i.produitFraction(i).diviseFraction(c).simplifie().texRacineCarree()+"~\\text{cm}")}$.
          `;break}case 6:{const t=d(6,15),o=d(t+2,t+10),r=o*o-t*t,i=f(r),s=new b(t*t*r,o*o).simplifie(),c=new b(r,1).differenceFraction(s),O=new b(t*t,1).differenceFraction(s);l+=`$${$.nom}${n.nom}, ${e.nom}${m.nom}, ${e.nom}${n.nom}$ et $${n.nom}${m.nom}$, si `,l+=`$${$.nom+e.nom} = ${t}~\\text{cm}$ et $${$.nom+m.nom} = ${o}~\\text{cm}$.`,x+=`<br> Par le théorème de Pythagore, on a $${e.nom+m.nom} = \\sqrt{${$.nom+m.nom}^2 - ${$.nom+e.nom}^2}$, d'où $${e.nom+m.nom} = \\sqrt{${o}^2 - ${t}^2} = ${i[1]===o*o-t*t?a(`\\sqrt{${o*o-t*t}}~\\text{cm}`):`\\sqrt{${o*o-t*t}} = ${a(`${i[0]}${i[1]===1?"":`\\sqrt{${i[1]}}`}~\\text{cm}`)}`}$.
          <br>  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom+e.nom}}{${$.nom+m.nom}}=\\dfrac{${e.nom+n.nom}}{${e.nom+m.nom}}$, il s'ensuit que $${e.nom+n.nom}=\\dfrac{${$.nom+e.nom}\\times ${e.nom+m.nom}}{${$.nom+m.nom}}=${a(s.texRacineCarree()+"~\\text{cm}")}$.
          <br> On peut à présent utiliser le théorème de Thalès ou le théorème de Pythagore pour déterminer $${$.nom+n.nom}$ ou $${n.nom+m.nom}$.<br>On utilise le théorème de Pythagore. On a 
          $${$.nom+n.nom}= \\sqrt{${$.nom+e.nom}^2 - ${e.nom+n.nom}^2}$, d'où $${$.nom+n.nom}=\\sqrt{${t*t} - ${s.texFractionSimplifiee}}=${a(O.texRacineCarree()+"~\\text{cm}")}$.
          <br> Enfin, on détermine $${n.nom+m.nom}$. On a $${n.nom+m.nom} = ${$.nom+m.nom}-${$.nom+n.nom}=${o}-${O.texRacineCarree()}=${a(c.texRacineCarree()+"~\\text{cm}")}$.
          `;break}case 7:{const t=d(5,12),o=d(t+2,t+10),r=o*o-t*t,i=f(r),s=new b(t*t*r,o*o),c=new b(r,1).differenceFraction(s).simplifie();l+=`$${$.nom}${n.nom}, ${$.nom}${e.nom}, ${e.nom}${n.nom}$ et $${n.nom}${m.nom}$,`,l+=` si $${e.nom+m.nom} = ${t}~\\text{cm}$ et $${$.nom+m.nom} = ${o}~\\text{cm}$.`,x+=`<br>
    On a $${$.nom+e.nom}^2 = ${$.nom+m.nom}^2 - ${e.nom+m.nom}^2 = ${o}^2 - ${t}^2 = ${r}$, 
    d'où $${$.nom+e.nom} = ${i[1]===r?a(`\\sqrt{${r}}~\\text{cm}`):`\\sqrt{${r}} = ${a(`${i[0]}${i[1]===1?"":`\\sqrt{${i[1]}}`}~\\text{cm}`)}`}.$

    <br>
    ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom+e.nom}}{${$.nom+m.nom}} = \\dfrac{${e.nom+n.nom}}{${e.nom+m.nom}}$,
    il s'ensuit que $${e.nom+n.nom} = \\dfrac{${$.nom+e.nom}\\times ${e.nom+m.nom}}{${$.nom+m.nom}} = ${a(s.simplifie().texRacineCarree()+"~\\text{cm}")}.$

    <br>
   Par le théorème de Pythagore, on a 
    $${$.nom+n.nom} = \\sqrt{${$.nom+e.nom}^2 - ${e.nom+n.nom}^2}$ d'où $${$.nom+n.nom} = \\sqrt{${r} - ${s.simplifie().texFractionSimplifiee}} = ${a(c.texRacineCarree()+"~\\text{cm}")}.$

    <br>
    Enfin, $${n.nom+m.nom} = ${$.nom+m.nom} - ${$.nom+n.nom}=${a(s.multiplieEntier(t*t).diviseEntier(r).inverse().simplifie().texRacineCarree()+"~cm")}.$ 
  `;break}case 8:{const t=d(6,20),o=d(2,t-1),r=t*t-o*o,i=new b(o*o*o*o,r),s=new b(o*o,1).sommeFraction(i),c=s.ajouteEntier(t*t).simplifie().texRacineCarree();l+=`$${$.nom}${n.nom}, ${e.nom}${m.nom}, ${n.nom}${m.nom}$ et $${$.nom}${m.nom}$, si `,l+=`$${$.nom+e.nom} = ${t}~\\text{cm}$ et $${e.nom+n.nom} = ${o}~\\text{cm}$.`,x+=`<br> On commence par déterminer $${$.nom+n.nom}$. Par le théorème de Pythagore, on a $${$.nom+n.nom} = \\sqrt{${$.nom+e.nom}^2 - ${e.nom+n.nom}^2}$, d'où $${$.nom+n.nom} = \\sqrt{${t}^2 - ${o}^2} = ${a(new b(r,1).texRacineCarree()+"~\\text{cm}")}$.<br>
          On détermine ensuite $${n.nom+m.nom}$.  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom+n.nom}}{${e.nom+n.nom}}=\\dfrac{${e.nom+n.nom}}{${n.nom+m.nom}}$, il s'ensuit que $${n.nom+m.nom}=\\dfrac{${e.nom+n.nom}^2}{${$.nom+n.nom}}=${a(i.simplifie().texRacineCarree()+"~\\text{cm}")}$.
          <br>On détermine $${e.nom+m.nom}$ en appliquant le théorème de Pythagore. On a $${e.nom+m.nom} = \\sqrt{{${e.nom+n.nom}}^2 + {${n.nom+m.nom}}^2} = \\sqrt{${o*o} + ${i.simplifie().texFractionSimplifiee}} = ${a(s.simplifie().texRacineCarree()+"~\\text{cm}")}$.
          <br>Enfin, on détermine $${$.nom+m.nom}$. On a $${$.nom+m.nom} = ${$.nom+n.nom} + ${n.nom+m.nom}=${a(c+"~\\text{cm}")}$.
          `;break}case 9:{const t=d(3,20),o=d(2,t-1),r=t*t-o*o,i=new b(o*o*o*o,r),s=new b(o*o,1).sommeFraction(i),c=s.ajouteEntier(t*t).simplifie().texRacineCarree();l+=`$${$.nom}${e.nom}, ${$.nom}${n.nom}, ${n.nom}${m.nom}$ et $${$.nom}${m.nom}$, si `,l+=`$${e.nom+m.nom} = ${t}~\\text{cm}, ${e.nom+n.nom} = ${o}~\\text{cm}$.`,x+=`
          <br>
          On détermine $${n.nom+m.nom}$ à l'aide du théorème de Pythagore. On a $${n.nom+m.nom} = \\sqrt{${e.nom+m.nom}^2 - ${e.nom+n.nom}^2}$, d'où $${n.nom+m.nom} = \\sqrt{${t}^2 - ${o}^2} = ${a(new b(r,1).texRacineCarree()+"~\\text{cm}")}$.
         <br>On détermine ensuite $${$.nom+n.nom}$.  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom+n.nom}}{${e.nom+n.nom}}=\\dfrac{${e.nom+n.nom}}{${n.nom+m.nom}}$, il s'ensuit que $${$.nom+n.nom}=\\dfrac{${e.nom+n.nom}^2}{${n.nom+m.nom}}=${a(i.simplifie().texRacineCarree()+"~\\text{cm}")}$.
         <br> On détermine $${$.nom+e.nom}$ en appliquant le théorème de Pythagore. On a $${$.nom+e.nom} = \\sqrt{{${$.nom+n.nom}}^2 + {${e.nom+n.nom}}^2} = \\sqrt{${i.simplifie().texFractionSimplifiee} + ${o*o}} = ${a(s.simplifie().texRacineCarree()+"~\\text{cm}")}$.
         <br> Enfin, on détermine $${$.nom+m.nom}$. On a $${$.nom+m.nom} = ${$.nom+n.nom} + ${n.nom+m.nom}=${a(c+"~\\text{cm}")}$.
          `;break}case 10:{const t=d(5,20),o=d(2,t-1),r=t*t+o*o,i=new b(o*o*o*o,t*t),s=new b(o*o,1).sommeFraction(i),c=s.ajouteEntier(r).simplifie().texRacineCarree();l+=`$${$.nom}${e.nom}, ${e.nom}${m.nom}, ${n.nom}${m.nom}$ et $${$.nom}${m.nom}$, si `,l+=`$${$.nom+n.nom} = ${t}~\\text{cm}, ${e.nom+n.nom} = ${o}~\\text{cm}$.`,x+=`<br>On commence par déterminer $${$.nom+e.nom}$. Par le théorème de Pythagore, on a $${$.nom+e.nom} = \\sqrt{${$.nom+n.nom}^2 + ${e.nom+n.nom}^2}$, d'où $${$.nom+e.nom} = \\sqrt{${t}^2 + ${o}^2} = ${a(new b(r,1).texRacineCarree()+"~\\text{cm}")}$.
          <br> On détermine ensuite $${n.nom+m.nom}$.  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on"} $\\dfrac{${$.nom+n.nom}}{${e.nom+n.nom}}=\\dfrac{${e.nom+n.nom}}{${n.nom+m.nom}}$, il s'ensuit que $${n.nom+m.nom}=\\dfrac{${e.nom+n.nom}^2}{${$.nom+n.nom}}=${a(i.simplifie().texRacineCarree()+"~\\text{cm}")}$.
          <br> On détermine $${e.nom+m.nom}$ en appliquant le théorème de Pythagore. On a $${e.nom+m.nom} = \\sqrt{{${e.nom+n.nom}}^2 + {${n.nom+m.nom}}^2} = \\sqrt{${o*o} + ${i.simplifie().texFractionSimplifiee}} = ${a(s.simplifie().texRacineCarree()+"~\\text{cm}")}$.
          <br> Enfin, on détermine $${$.nom+m.nom}$. On a $${$.nom+m.nom} = ${$.nom+n.nom} + ${n.nom+m.nom}=${a(c+"~\\text{cm}")}$.
          `;break}case 11:{const t=d(3,20),o=d(3,20,[t]),r=o*o,i=t*t+o*o,s=new b(r*r,t*t),c=s.ajouteEntier(r),O=c.ajouteEntier(i).simplifie().texRacineCarree();l+=`$${$.nom}${e.nom}, ${$.nom}${n.nom}, ${e.nom}${m.nom}$ et $${$.nom}${m.nom}$, si `,l+=`$${n.nom+m.nom} = ${t}~\\text{cm}, ${e.nom+n.nom} = ${new b(r,1).simplifie().texRacineCarree()}~\\text{cm}$.`,x+=`<br> Par le théorème de Pythagore, on a $${e.nom+m.nom}=\\sqrt{${n.nom+m.nom}^2 + ${e.nom+n.nom}^2}$, d'où $${e.nom+m.nom} = \\sqrt{${t}^2 + ${new b(r,1).simplifie().texRacineCarree()}^2} = ${a(new b(i,1).texRacineCarree()+"~\\text{cm}")}$. <br>  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom+n.nom}}{${e.nom+n.nom}}=\\dfrac{${e.nom+n.nom}}{${n.nom+m.nom}}$, il s'ensuit que $${$.nom+n.nom}=\\dfrac{${e.nom+n.nom}^2}{${n.nom+m.nom}}=${a(s.simplifie().texRacineCarree()+"~\\text{cm}")}$.<br> Par le théorème de Pythagore, on a $${$.nom+e.nom} = \\sqrt{${$.nom+n.nom}^2 + ${e.nom+n.nom}^2}$, d'où $${$.nom+e.nom} = \\sqrt{${s.simplifie().texFractionSimplifiee} + ${r}} = ${a(c.simplifie().texRacineCarree()+"~\\text{cm}")}$.<br> Enfin, on détermine $${$.nom+m.nom}$. On a $${$.nom+m.nom} = ${$.nom+n.nom} + ${n.nom+m.nom}=${a(O+"~\\text{cm}")}$.
          `;break}case 12:{const t=d(3,15),o=d(2,t-1),r=new b(t*t-o*o,1),i=r.produitFraction(r).produitFraction(new b(o*o,1).inverse()),s=new b(t*t*t*t,1).produitFraction(new b(o*o,1).inverse()),c=s.ajouteEntier(-t*t);l+=`$${$.nom}${e.nom}, ${$.nom}${n.nom}, ${e.nom}${n.nom}$ et $${$.nom}${m.nom}$, si `,l+=`$${e.nom+m.nom} = ${t}~\\text{cm}$ et $${n.nom+m.nom} = ${o}~\\text{cm}$.`,x+=`<br> Par le théorème de Pythagore, on a $${e.nom+n.nom}^2=\\sqrt{${e.nom+m.nom}^2 - ${n.nom+m.nom}^2}$, d'où $${e.nom+n.nom} = \\sqrt{${t}^2 - ${o}^2} = ${a(r.simplifie().texRacineCarree()+"~\\text{cm}")}$. <br>  ${this.correctionDetaillee?"Par la relation":"Par le théorème de Thalès, on a "} $\\dfrac{${$.nom+n.nom}}{${e.nom+n.nom}}=\\dfrac{${e.nom+n.nom}}{${n.nom+m.nom}}$, il s'ensuit que $${$.nom+n.nom}=\\dfrac{${e.nom+n.nom}^2}{${n.nom+m.nom}}=${a(i.simplifie().texRacineCarree()+"~\\text{cm}")}$.<br> Par le théorème de Pythagore, on a $${$.nom+e.nom} = \\sqrt{${$.nom+n.nom}^2 + ${e.nom+n.nom}^2}$, d'où $${$.nom+e.nom} = \\sqrt{${i.simplifie().texFractionSimplifiee} + ${r.texFractionSimplifiee}} = ${a(c.simplifie().texRacineCarree()+"~\\text{cm}")}$.<br> Enfin, on détermine $${$.nom+m.nom}$. On a $${$.nom+m.nom} = ${$.nom+n.nom} + ${n.nom+m.nom}=${a(s.simplifie().texRacineCarree()+"~\\text{cm}")}$.
          `;break}}l+="<br>"+C(Object.assign({pixelParCm:25,scale:.4},D(w)),w),this.questionJamaisPosee(q,l)&&(this.listeQuestions[q]=l,this.listeCorrections[q]=x,q++),Q++}En(this)}}export{Sn as dateDePublication,Ln as default,jn as interactifReady,Qn as refs,Tn as titre,vn as uuid};
