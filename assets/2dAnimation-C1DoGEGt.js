import{O as l,ah as y,D as m,bg as c,d,a4 as v}from"./embellissements-BYV7mIDn.js";function u(n){const t=document.getElementById(n);t!=null?t.style.visibility="visible":console.log(n+" n'existe pas et ne peut pas être rendu visible.")}function h(n){const t=document.getElementById(n);t!=null?t.style.visibility="hidden":console.log(n+" n'existe pas et ne peut pas être caché.")}function g(n,t=1,i=5,e="Infinity"){let s=1;const r=setInterval(function(){if(document.getElementById(String(n.id)))if(clearInterval(r),h(String(n.id)),Number(e)===1)setTimeout(function(){u(String(n.id))},t*1e3);else{const a=setInterval(function(){h(String(n.id))},i*1e3);setTimeout(function(){u(String(n.id));const o=setInterval(function(){u(String(n.id)),s++,typeof e=="number"&&s>=e&&(clearInterval(a),clearInterval(o))},i*1e3)},t*1e3)}},100)}function p(n,t=1,i=5,e="Infinity"){let s=1;const r=setInterval(function(){if(document.getElementById(String(n.id)))if(clearInterval(r),u(String(n.id)),Number(e)===1)setTimeout(function(){h(String(n.id))},t*1e3);else{const a=setInterval(function(){u(String(n.id))},i*1e3);setTimeout(function(){h(String(n.id));const o=setInterval(function(){h(String(n.id)),s++,typeof e=="number"&&s>=e&&(clearInterval(o),clearInterval(a))},i*1e3)},t*1e3)}},100)}class b extends l{liste;dur;pourcentage;repeat;constructor(t,i=2,e=.5,s="indefinite"){super(),this.liste=t,this.dur=i,this.pourcentage=e,this.repeat=s}svg(t){let i="<g> ";if(Array.isArray(this.liste))for(const e of this.liste)i+=`
`+e.svg(t);else i+=`
`+this.liste.svg(t);return i+=`<animate attributeType="CSS"
    attributeName="visibility"
    from="hidden"
    to="hidden"
    values="hidden;visible;hidden"
    keyTimes="0; ${this.pourcentage}; 1"
    dur="${this.dur}"
    repeatCount="${this.repeat}"/>`,i+="</g>",i}tikz(){return""}}function G(n,t=2,i=.5,e="indefinite"){return new b(n,t,i,e)}class $ extends l{liste;v;animation;constructor(t,i,e='begin="0s" dur="2s" repeatCount="indefinite"'){super(),this.liste=Array.isArray(t)?t:[t],this.v=i,this.animation=e;const s=this.liste.map(a=>v(a,i)),r=m(this.liste.concat(s));this.bordures=[r.xmin,r.ymin,r.xmax,r.ymax]}svg(t){let i="<g> ";if(Array.isArray(this.liste))for(const e of this.liste)i+=`
`+e.svg(t);else i+=`
`+this.liste.svg(t);if(Array.isArray(this.v)){i+='<animateMotion path="M 0 0 l';for(const e of this.v)i+=` ${e.xSVG(t)} ${e.ySVG(t)} `;i+=`${this.animation} />`}else i+=`<animateMotion path="M 0 0 l ${this.v.xSVG(t)} ${this.v.ySVG(t)} " ${this.animation} />`;return i+="</g>",i}tikz(){return""}}function T(n,t,i='begin="0s" dur="2s" repeatCount="indefinite"'){return new $(n,t,i)}class x extends l{liste;O;angle;animation;constructor(t,i,e,s='begin="0s" dur="2s" repeatCount="indefinite"'){super(),this.liste=Array.isArray(t)?t:[t],this.O=i,this.angle=e,this.animation=s;const r=this.liste.map(o=>y(o,i,e)),a=m([...this.liste.concat(r)]);this.bordures=[a.xmin,a.ymin,a.xmax,a.ymax]}svg(t){let i="<g> ";for(const e of this.liste)i+=`
`+e.svg(t);return i+=`<animateTransform
  attributeName="transform"
  type="rotate"
  from="0 ${this.O.xSVG(t)} ${this.O.ySVG(t)}"
  to="${-this.angle} ${this.O.xSVG(t)} ${this.O.ySVG(t)}"
  ${this.animation}
  />`,i+="</g>",i}tikz(){return""}}function V(n,t,i,e='begin="0s" dur="2s" repeatCount="indefinite"'){return new x(n,t,i,e)}class A extends l{p;d;animation;constructor(t,i,e='begin="0s" dur="2s" repeatCount="indefinite"'){super(),this.p=t,this.d=i,this.animation=e;const s=m([t,c(t,i)]);this.bordures=[s.xmin,s.ymin,s.xmax,s.ymax]}svg(t){const i=this.p.binomesXY(t),s=c(this.p,this.d).binomesXY(t);return`<polygon stroke="${this.p.color[0]}" stroke-width="${this.p.epaisseur}" fill="${this.p.couleurDeRemplissage[0]}" >
    <animate attributeName="points" ${this.animation}
    from="${i}"
    to="${s}"
    />
    </polygon>`}tikz(){return""}}function O(n,t,i='begin="0s" dur="2s" repeatCount="indefinite"'){return new A(n,t,i)}class S extends l{figure1;v;figure2;O;angle;t1;t2;numId;constructor(t,i,e,s,r,a,o=5,f=2){super(),this.figure1=i,this.v=e,this.figure2=s,this.O=r,this.angle=a,this.t1=o,this.t2=f,this.numId=t}svg(t){Array.isArray(this.figure2)?this.figure2.forEach(e=>{g(e,this.t1,this.t1+this.t2,1)}):g(this.figure2,this.t1,this.t1+this.t2,1);let i="<g> ";if(Array.isArray(this.figure1))for(const e of this.figure1)i+=`
`+e.svg(t);else i+=`
`+this.figure1.svg(t);if(i+=`<animateTransform
    attributeName="transform"
    attributeType="XML"
    type="translate"
    from="0 0"
    to="${d(this.v.xSVG(t),0)} ${d(this.v.ySVG(t),0)}"
    begin="0s" dur="${this.t1}s" fill="freeze"  repeatCount="1" id="translat${this.numId}"
    /></path></g>`,Array.isArray(this.figure1)?this.figure1.forEach(e=>{p(e,this.t1,0,1)}):p(this.figure1,this.t1,0,1),i+="<g>",Array.isArray(this.figure2))for(const e of this.figure2)i+=`
`+e.svg(t);else i+=`
`+this.figure2.svg(t);return i+=`<animateTransform
  attributeName="transform"
  type="rotate"
  from="0 ${this.O.xSVG(t)} ${this.O.ySVG(t)}"
  to="${-this.angle} ${this.O.xSVG(t)} ${this.O.ySVG(t)}"
  begin="translat${this.numId}.end" dur="${this.t2}s" fill="freeze" repeatCount="1" id="rotat-${this.numId}"
  /></path>`,i+="</g>",i}}function C(n,t,i,e,s,r,a=5,o=2){return new S(n,t,i,e,s,r,a,o)}export{G as a,C as b,V as r,O as s,T as t};
