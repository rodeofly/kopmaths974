import{S as z}from"./main-Vl0czKSA.js";import{af as v,r as u,bn as y,d as h,a2 as w,bh as x,c as C,l as T}from"./embellissements-BYV7mIDn.js";import{G}from"./exerciseMethods-CtbYPwln.js";import{f as L}from"./figureApigeom-Da_B6AP0.js";import{E as S}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./generalStore-C3E9FHtR.js";import"./canStore-DaSrd7sp.js";const Y="29/06/2021",Z="03/05/2024",_="Placer des points d'abscisses fractionnaires",ee=!0,te="custom",se=!0,ie="AMCHybride",oe="2ba53",I={"fr-fr":["CM2N2E-2"],"fr-2016":["6N21"],"fr-ch":["9NO11-4"]};class re extends S{goodAnswers;figuresApiGeom;constructor(){super(),this.nbQuestions=5,this.sup=1,this.exoCustomResultat=!0,this.besoinFormulaireNumerique=["Niveau de difficulté",4,`1 : Demis, tiers ou quarts avec zéro placé
2 : Des cinquièmes aux neuvièmes avec zéro placé 
3 : Toutes les fractions précédentes mais zéro non visible
4 : Mélange`]}nouvelleVersion(){this.figuresApiGeom=[],this.goodAnswers=[];let r;this.sup>3?r=v([1,2,3],this.nbQuestions):r=v([this.sup],this.nbQuestions);const n=[],t=[[],[],[]];for(let s=0,f=0;s<this.nbQuestions&&f<50;){let a="",m="",i,c,e;switch(r[s]){case 1:i=this.sup>4?u(-4,1):0,e=u(2,4,t[0]),c=i*e+u(1,e*4),t[0].push(e),t[0].length===3&&(t[0]=[]);break;case 2:i=this.sup>4?u(-4,1):0,e=u(5,9,t[1]),c=i*e+u(1,e*4),t[1].push(e),t[1].length===5&&(t[1]=[]);break;default:i=this.sup>4?u(-4,1):u(1,7),e=u(2,9,t[2]),c=u(i*e+1,(i+4)*e,e),t[2].push(e),t[2].length===8&&(t[2]=[])}const d=u(i*e+1,(i+4)*e,[c,e]),p=u(i*e+1,(i+4)*e,[c,d,e]),b=y(s*3+1),g=y(s*3+2),$=y(s*3+3);this.goodAnswers[s]=[{label:b,x:h(c/e,4)},{label:g,x:h(d/e,4)},{label:$,x:h(p/e,4)}],a=`Placer les points $${b}\\left(${w(c,e).texFraction}\\right)$, $~${g}\\left(${w(d,e).texFraction}\\right)$ et $~${$}\\left(${w(p,e).texFraction}\\right)$.`;const{figure:k,latex:D}=P({xMin:i,xMax:i+4,scale:2,stepBis:1/e});k.options.labelAutomaticBeginsWith=b,k.options.pointDescriptionWithCoordinates=!1,this.figuresApiGeom[s]=k;const{figure:A,latex:O}=P({xMin:i,xMax:i+4,scale:2,stepBis:h(1/e,6),points:this.goodAnswers[s]});switch(A.create("Point",{label:b,x:h(c/e,4),color:x,colorLabel:x,shape:"x",labelDxInPixels:0}),A.create("Point",{label:g,x:h(d/e,4),color:x,colorLabel:x,labelDxInPixels:0}),A.create("Point",{label:$,x:h(p/e,4),color:x,colorLabel:x,labelDxInPixels:0}),!0){case this.interactif:a+="<br>"+L({exercice:this,i:s,idAddendum:I["fr-fr"][0],figure:k,defaultAction:"POINT"}),m+=A.getStaticHtml();break;case C.isHtml:a+="<br>"+k.getStaticHtml(),m+=A.getStaticHtml();break;default:a+=`

`+D,m+=`\\;
`+O;break}N(n,[c,e])||(this.listeQuestions[s]=a,this.listeCorrections[s]=m,s++,n[s]=[c,e]),f++}T(this)}correctionInteractive=r=>{if(r===void 0)return["KO"];if(this.answers==null&&(this.answers={}),this==null)return["KO"];if(this.figures==null)return["KO"];this.answers[this.figuresApiGeom[r].id]=this.figuresApiGeom[r].json;const n=[],t=this.figuresApiGeom[r];t.isDynamic=!1,t.divButtons.style.display="none",t.divUserMessage.style.display="none";const s=this.goodAnswers[r],f=document.querySelector(`#feedback${`Ex${this.numeroExercice}Q${r}`}`);for(let a=0;a<s.length;a++){const m=s[a].label,i=s[a].x,{isValid:c,points:e}=t.checkCoords({checkOnlyAbscissa:!0,label:m,x:i,y:0}),l=e[0];c?(n.push("OK"),l.color="green",l.colorLabel="green",l.thickness=3):(n.push("KO"),l!==void 0&&(l.color="red",l.colorLabel="red",l.color="red",l.thickness=3))}if(f!=null)if(n[0]==="OK"&&n[1]==="OK"&&n[2]==="OK")f.innerHTML="😎";else{const a=document.createElement("p");a.innerText="☹️",f.insertBefore(a,f.firstChild)}return n}}function N(o,r){const n=JSON.stringify(r);return o.some(function(s){return JSON.stringify(s)===n})}function P({xMin:o,xMax:r,scale:n=1,points:t,step:s=1,stepBis:f=.25}){const i=new z({xMin:o-.2/n,yMin:-1.5,width:750,height:80,dy:10,dx:f,xScale:3*n,snapGrid:!0});i.setToolbar({tools:["POINT","DRAG","REMOVE"],position:"top"}),new G(i,{min:o,max:r,step:s,stepBis:f}).draw();let e=`
\\bigskip
  \\begin{tikzpicture}[x=2.5mm]
  \\draw[-{Latex[round]},thick] (0,0) -- (61,0);
  \\foreach \\x in {0,${10*f},...,60} \\draw[thick] ([yshift=-0.8mm]\\x,0) -- ([yshift=0.8mm]\\x,0);
  \\foreach \\x [count=\\i from 0] in {0,10,...,60} \\draw[ultra thick] ([yshift=-1.5mm]\\x,0) coordinate (a\\i) -- ([yshift=1.5mm]\\x,0);
  \\foreach \\x [count=\\i from 0] in {${o},${o+1},${o+2},${o+3},${o+4},${o+5},${o+6}} {
    \\node[below=2mm of a\\i,inner sep=0pt,font=\\small] {$\\num{\\x}$};
  }`;if(t!==void 0){const l=h((t[0].x-o)*10),d=h((t[1].x-o)*10),p=h((t[2].x-o)*10),b=t[0].label,g=t[1].label,$=t[2].label;e+=`
\\tkzText[above=2mm](${l},0){${b}}
    
\\tkzText[above=2mm](${d},0){${g}}
    
\\tkzText[above=2mm](${p},0){${$}}
    
\\tkzDrawPoint[shape=cross out, size=5pt, thick](${l},0)
    
\\tkzDrawPoint[shape=cross out, size=5pt, thick](${d},0)
    
\\tkzDrawPoint[shape=cross out, size=5pt, thick](${p},0)`}return e+=`
\\end{tikzpicture}`,{figure:i,latex:e}}export{se as amcReady,ie as amcType,Z as dateDeModifImportante,Y as dateDePublication,re as default,ee as interactifReady,te as interactifType,I as refs,_ as titre,oe as uuid};
