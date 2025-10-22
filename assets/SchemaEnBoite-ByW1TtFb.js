import{e as r,bI as H}from"./embellissements-BYV7mIDn.js";class p{topBraces;bottomBraces;lignes=[];rightBraces;maxEnteteLength;constructor({lignes:l,bottomBraces:t,topBraces:o,rightBraces:e}={lignes:[]}){this.lignes=l,this.rightBraces=[],t&&(this.bottomBraces=t),o&&(this.topBraces=o),e&&(this.rightBraces=e)}display(l=.8){{let t=0,o=!1;for(const i of this.lignes)i.entete!==void 0&&(o=!0,(i.entete.longueur??0)>t&&(t=i.entete.longueur??0));this.maxEnteteLength=t;let e="";if(this.topBraces)for(let i=0;i<this.topBraces.length;i++){const s=this.topBraces[i],u=s.start,f=s.end,$=s.text,w=s.type??"accolade",a=s.options??{},b=a.justify??"center",d=a.color??"black",v=a.fontSize??"1em",m=a.fontWeight??"normal",y=a.lineHeight??"1.2em";u!=null&&f!=null&&$!=null&&(e+=w==="flèche"?`<div class="SchemaTop" style="grid-row: 1; grid-column-start: ${u+t}; grid-column-end: ${f+t}; text-align:center; border: none; --arrow-color: ${d}">
                    <div class="latexAccoladeTop" style="text-align: ${b}; color: ${d}; font-size: ${v}; font-weight: ${m}; line-height: ${y}">${$}</div>
                  <div class="horizontalArrow">
                    <div class="horizontalArrowHead" style="transform: rotate(180deg);"></div>
                    <div class="horizontalArrowLine"></div>
                    <div class="horizontalArrowHead"></div>
                  </div>
                </div>
`:`<div class="SchemaTop" style="grid-row: 1; grid-column-start: ${u+t}; grid-column-end: ${f+t}; text-align:center; border: none"; --brace-color: ${d}">
                    <div class="latexAccoladeTop" style="text-align: ${b}; color: ${d}; font-size: ${v}; font-weight: ${m}; line-height: ${y}">${$}</div>
                    <div class="braceTop">
                      <div class="braceTopLeft">
                        <div class="curlTopLeftLeft"></div>
                        <div class="lineTopLeftMiddle"></div>
                        <div class="curlTopLeftRight"></div>
                      </div>
                      <div class="braceTopRight">
                        <div class="curlTopRightLeft"></div>
                        <div class="lineTopRightMiddle"></div>
                        <div class="curlTopRightRight"></div>
                      </div>
                    </div>
                </div>
`)}const n=[];let g=0;for(let i=0;i<this.lignes.length;i++){const s=this.lignes[i],u=s.entete?.content??"",f=s.entete?.couleur??"black",$=s.entete?.fontSize??"1em",w=s.entete?.fontWeight??"normal",a=s.spacing??0,b=s.height??"1.2em";let d="",v=1;const m=s.barres??[];for(let y=0;y<m.length;y++){const c=m[y];if(c.length<=0)continue;c.content==null&&(c.content=""),c.color==null&&(c.color="lightgray"),c.options==null&&(c.options={});const x=c.options??{},j=x.justify??"center",B=x.color??"black",R=x.fontSize??"1em",T=x.fontWeight??"normal",A=x.style??"",k=c.type??"boite",L=x.borderless??!1;d+=k==="boite"?`<div class="SchemaItem" style="grid-row: ${i+2+g};
                  grid-column-start: ${v+t};
                  grid-column-end: ${v+c.length+t};
                  background-color:${c.color};
                  justify-content:${j};
                  color:${B};
                  font-size:${R};
                  font-weight:${T};
                  line-height:${b};
                  ${L?"border: none;":y>0?"border-left: none;":"border: solid 1px black;"}
                   ${A}">
                ${c.content.includes("<br>")?`<div style="text-align: center;">${c.content}</div>
`:c.content}
              </div>
`:`<div class="SchemaItem" style="grid-row: ${i+2+g};
                  grid-column-start: ${v+t};
                  grid-column-end: ${v+c.length+t};
                  background-color:${c.color};
                  font-size:${R};
                  font-weight:${T};
                  line-height:${b};
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  border: ${L?"none":"solid 1px black"};
                  ${A}">
                <div class="horizontalArrow" style="width: 100%;margin-top: 0.5em; --arrow-color: ${B}">
                  <div class="horizontalArrowHead" style="border-left: 12px solid ${B}; transform: rotate(180deg);"></div>
                  <div class="horizontalArrowLine" style="--arrow-color: ${B}"></div>
                  <div class="horizontalArrowHead" style="border-left: 12px solid ${B};"></div>
                </div>
                <div style="width: 100%; text-align: center; color: ${B};">${c.content}</div>
              </div>
`,v+=c.length}o?n.push(`<div class="SchemaItem" style="grid-row: ${i+2+g}; grid-column-start: 1; grid-column-end: ${t+1}; border: none; color: ${f}; font-size: ${$}; font-weight: ${w}">${u}</div>
`+d):n.push(d),a>0&&(n.push(`<div class="SchemaItem" style="grid-row: ${i+3+g}; grid-column-start: 1; grid-column-end: 2; border: none; height: ${a}em"></div>
`),g++)}let h="";if(this.bottomBraces)for(let i=0;i<this.bottomBraces.length;i++){const s=this.bottomBraces[i],u=s.start,f=s.end,$=s.text,w=s.type??"accolade",a=s.options??{},b=a.justify??"center",d=a.color??"black",v=a.fontSize??"1em",m=a.fontWeight??"normal",y=a.lineHeight??"1.2em";u!=null&&f!=null&&$!=null&&(h+=w==="flèche"?`<div class="SchemaBottom" style="grid-row: ${this.lignes.length+2+g}; grid-column-start: ${u}; grid-column-end: ${f}; text-align:center; border: none; --brace-color: ${d}">
                  <div class="horizontalArrow">
                    <div class="horizontalArrowHead" style="transform: rotate(180deg);"></div>
                    <div class="horizontalArrowLine"></div>
                    <div class="horizontalArrowHead"></div>
                  </div>
                    <div class="latexAccoladeBottom" style="text-align: ${b}; color: ${d}; font-size: ${v}; font-weight: ${m}; line-height: ${y}">${$}</div>
                </div>
`:`<div class="SchemaBottom" style="grid-row: ${this.lignes.length+2+g}; grid-column-start: ${u+t}; grid-column-end: ${f+t}; text-align:center; border: none; --brace-color: ${d}">
                    <div class="braceBottom">
                      <div class="braceBottomLeft">
                        <div class="curlBottomLeftLeft"></div>
                        <div class="lineBottomLeftMiddle"></div>
                        <div class="curlBottomLeftRight"></div>
                      </div>
                    <div class="braceBottomRight">
                      <div class="curlBottomRightLeft"></div>
                      <div class="lineBottomRightMiddle"></div>
                      <div class="curlBottomRightRight"></div>
                    </div>
                  </div>
                <div class="latexAccoladeBottom" style="text-align: ${b}; color: ${d}; font-size: ${v}; font-weight: ${m}; line-height: ${y}">
                  ${$.includes("<br>")?`<div style="text-align: center;">${$}</div>
`:`${$}`}</div>

                  </div>
`)}let z="";if(this.rightBraces)for(let i=0;i<this.rightBraces.length;i++){const s=Math.max(...this.lignes.map(y=>y.barres.reduce((c,x)=>c+(x.length??0),0)+(t??0)+1)),u=this.rightBraces[i],f=u.start,$=u.end,w=u.text,a=u.options??{},b=a.justify??"center",d=a.color??"black",v=a.fontSize??"1em",m=a.fontWeight??"normal";f!=null&&$!=null&&w!=null&&(z+=`<div class="SchemaRight" style="grid-row: ${f}/${$}; grid-column-start: ${s+1}; grid-column-end: ${s+2}; text-align:center; border: none; --brace-color: ${d}">
    <div class="braceRight">
      <div class="braceRightTop">
        <div class="curlRightTopTop"></div>
        <div class="lineRightTopMiddle"></div>
        <div class="curlRightTopBottom"></div>
      </div>
      <div class="braceRightBottom">
        <div class="curlRightBottomTop"></div>
        <div class="lineRightBottomMiddle"></div>
        <div class="curlRightBottomBottom"></div>
      </div>
    </div>
  </div>
    <div class="latexAccoladeRight" style="grid-row: ${Math.round((f+$)/2)-1}; grid-column-start: ${s+2}; grid-column-end: ${s+10};text-align: ${b}; color: ${d}; font-size: ${v}; font-weight: ${m}">
     <div style="display: inline-block; text-align: center;">${w}</div>

    </div>
`)}return`<div class="SchemaContainer">${e}
${n.join(`
`)}
${h}${z}</div>
`}}static multiplication(l,t,o,e){return new p({topBraces:[{start:1,end:8+o*2,text:t!=null?`$${r(t,o)}\\text{ fois}$`:"? fois"}],lignes:[{barres:[{color:"lightgray",length:2+o,content:l!=null?`$${r(l,o)}$`:"?",type:"boite"},{color:"lightgray",length:3,content:"\\ldots",type:"boite"},{color:"lightgray",length:2+o,content:l!=null?`$${r(l,o)}$`:"?",type:"boite"}]},{barres:[{color:"white",length:7+o*2,content:e??"?"}]}]})}static division(l,t,o,e){return new p({topBraces:[{start:1,end:8+2*e,text:o==null?"? fois":`${r(o,0)} fois`}],lignes:[{barres:[{color:"lightgray",length:2+e,content:t==null?"?":`$${r(t,e)}$`,type:"boite"},{color:"lightgray",length:3,content:"\\ldots",type:"boite"},{color:"lightgray",length:2+e,content:t==null?"?":`$${r(t,e)}$`,type:"boite"}]},{barres:[{color:"white",length:7+2*e,content:l==null?"?":`$${r(l,e)}$`}]}]})}static multiplicationPuisDivisionAvecReste(l,t,o,e,n,g){const h=typeof l=="number"?l*3:10;return new p({topBraces:l!=null?typeof l=="string"?[{start:1,end:h+1,text:`${l}`,type:"accolade"}]:[{start:1,end:h+1,text:`${r(l,0)}`,type:"accolade"}]:[{start:1,end:h+1,text:"? fois",type:"accolade"}],lignes:[{spacing:.5,barres:typeof l=="number"?H(l-1).map(i=>({color:"white",length:3,content:t!=null?typeof t=="number"?`$${r(t,g)}$`:`${t}`:"?",type:"boite"})):[{color:"lightgray",length:3,content:t!=null?typeof t=="number"?`$${r(t,g)}$`:`${t}`:"?",type:"boite"},{color:"lightgray",length:h-3,content:"\\ldots",type:"boite",options:{justify:"start"}}]},{barres:[{color:"lightgray",length:3,content:o!=null?typeof o=="number"?`$${r(o,g)}$`:`${o}`:"?",type:"boite"},{color:"lightgray",length:h-6,content:"\\ldots",type:"boite",options:{justify:"start"}},{color:"lightgray",length:3,content:n!=null?typeof n=="number"?`$${r(n,g)}$`:`${n}`:"?",type:"boite",options:{justify:"center"}}]}],bottomBraces:[{start:1,end:h-2,text:e!=null?typeof e=="string"?e:`$${r(Number(e),g)}$`:"?",type:"flèche"}]})}static divisionAvecReste(l,t,o,e,n){return new p({topBraces:[{start:1,end:8+2*e,text:o==null?"? fois":`$${o}$ fois`}],lignes:[{barres:[{color:"lightgray",length:2+e,content:t==null?"?":`$${r(t,e)}$`},{color:"lightgray",length:3,content:"\\ldots"},{color:"lightgray",length:2+e,content:t==null?"?":`$${r(t,e)}$`},{color:"lightgray",length:2,content:n??"?"}]},{barres:[{color:"white",length:9+2*e,content:l==null?"?":`$${r(l,e)}$`}]}]})}static addition(l,t,o){return new p({lignes:[{barres:[{color:"lightgray",length:2+o,content:l!=null?`$${r(l,o)}$`:"?"},{color:"lightgray",length:2+o,content:t!=null?`$${r(t,o)}$`:"?"}]},{barres:[{color:"white",length:4+o*2,content:"?"}]}]})}static additionPartiesTout(l,t,o){const e=o.length,n=e<3?4:3;return new p({topBraces:[{start:1,end:e*n+1,text:l!=null?typeof l=="string"?l:`$${r(l,t)}$`:"?",type:"accolade"}],lignes:[{barres:o.map((h,z)=>Object.assign({color:"lightgray",length:n,content:h!=null?typeof h=="string"?h:`$${r(Number(h),t)}$`:"?"},{}))}]})}static additionPartiesToutComparaison(l,t,o,e,n){return new p({rightBraces:[{start:1,end:5,text:e!=null?`${r(e,n)}$`:"?",type:"accolade"}],lignes:[{barres:[{color:"lightgray",length:8+n,content:l==null?"?":`$${r(l,n)}$`}]},{barres:[{color:"lightgray",length:4+n,content:t==null?"?":`$${r(t,n)}$`},{color:"white",type:"flèche",length:4+n,content:o!=null?`$${r(o,n)}$`:"différence",options:{style:"border-left: none;border-top: none; border-bottom: none;border-right: dashed;"}}]}]})}static additionPartiesToutComparaison2(l,t,o,e,n,g){return new p(g?Object.assign({},{lignes:[{spacing:.5,barres:[{color:"lightgray",length:3,content:l},{color:"lightgray",length:7,content:t}]},{barres:[{color:"lightgray",length:6,content:o},{color:"white",type:"flèche",length:4,content:e,options:{style:"border-left: none;border-top: none; border-bottom: none;border-right: dashed;"}}]}],topBraces:[{start:1,end:11,text:n,type:"accolade"}]}):Object.assign({},{lignes:[{spacing:.5,barres:[{color:"lightgray",length:3,content:l},{color:"lightgray",length:7,content:t}]},{barres:[{color:"lightgray",length:6,content:o},{color:"white",type:"flèche",length:4,content:e,options:{style:"border-left: none;border-top: none; border-bottom: none;border-right: dashed;"}}]}]}))}static soustraction(l,t,o,e){return new p({lignes:[{barres:[{color:"lightgray",length:2+e,content:l==null?"?":`$${r(l,e)}$`},{color:"lightgray",length:2+e,content:o==null?"?":`$${r(o,e)}$`}]},{barres:[{color:"white",length:4+e*2,content:t==null?"?":`$${r(t,e)}$`}]}]})}}export{p as S};
