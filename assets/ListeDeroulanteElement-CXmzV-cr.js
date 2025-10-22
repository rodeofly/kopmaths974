import{z as p}from"./index-BUDQz6-w.js";function c(...l){for(const e of l)if(e!=null)for(;e?.lastChild!=null;)e.removeChild(e.lastChild)}function f(l,e){l.innerHTML=`$$${e}$$`,p(l);const t=l.querySelectorAll("span");t.length>2&&(t[2].style.display="none")}function a(l,e){if(e!=null)if(typeof e=="object"){if("latex"in e)f(l,e.latex??"");else if("image"in e){const t=document.createElement("img");t.src=e.image??e.value,t.style.width="30px",t.style.height="30px",l.appendChild(t)}else if("label"in e){const t=document.createElement("span");t.innerHTML=e.label??e.value,l.appendChild(t)}else if("svg"in e){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","-10 -10 20 20"),t.classList.add("svgChoice"),t.style.display="block",t.style.width="20px",t.style.height="20px",t.style.verticalAlign="middle",t.innerHTML=e.svg??"",l.appendChild(t)}}else throw Error(`Type de choix inconnu : ${e}`)}class h{disabled=!1;choices;givenChoices;_kbIndex=-1;changed=!1;_offset=0;reponse="";_elts=[];_clickListener;_keydownListener;container;spanSelected;ulContainer;initialChoice;width;constructor(e,{choix0:t}={choix0:!1}){if(arguments.length>2)throw Error("nombre d’arguments invalides");if(!Array.isArray(e))throw Error("Il faut passer une liste de choix");this.disabled=!1,this.choices=[...e],this.givenChoices=[...e],this._kbIndex=-1,this.changed=!1,this._offset=t?0:1,this.reponse="",this._elts=[]}_init({conteneur:e,sansFleche:t,select:n}={sansFleche:!1,select:0}){if(!e)throw Error("Le conteneur est obligatoire pour la liste déroulante !");this.container=e,this.container.classList.add("listeDeroulante");const o="˅";if(this.spanSelected=document.createElement("span"),this.container.appendChild(this.spanSelected),this.spanSelected.className="currentChoice",this.spanSelected.role="listbox",this.spanSelected.tabIndex=0,this._clickListener=i=>{i?.stopPropagation(),this.toggle()},this.container.onclick=this._clickListener,this._keydownListener=i=>{const{code:s,key:r}=i;s==="Tab"||r==="Tab"?this.hide():s==="ArrowDown"||r==="ArrowDown"?(i.preventDefault(),this._kbIndex<this.choices.length-1&&(this._kbIndex++,this.isVisible()||this.show(),this._kbSelect())):s==="ArrowUp"||r==="ArrowUp"?(i.preventDefault(),this._kbIndex===-1&&(this._kbIndex=this.choices.length),this._kbIndex>0&&(this._kbIndex--,this.isVisible()||this.show(),this._kbSelect())):(s==="Space"||r==="Space"||s==="Enter"||r==="Enter")&&(this.isVisible()?this.select(this._kbIndex,{withoutOffset:!0}):this.show())},!t){const i=document.createElement("span");i.className="trigger",i.textContent=o,this._clickListener&&(i.onclick=this._clickListener),this.container.appendChild(i)}this.ulContainer=document.createElement("ul"),this.container.appendChild(this.ulContainer),this.initialChoice=this._offset?this.choices.shift():this.choices[0];for(const[i,s]of this.choices.entries()){const r=document.createElement("li");r.role="option",this.ulContainer?.appendChild(r),a(r,s),r.addEventListener("click",d=>{d.stopPropagation(),this.select(i,{withoutOffset:!0})}),this._elts.push(r)}this.show(),this.hide(),this.spanSelected.addEventListener("keydown",this._keydownListener),document.body.addEventListener("click",({target:i})=>{let s=i;for(;s&&s instanceof HTMLElement;){if(s.classList.contains("listeDeroulante"))return;s=s.parentElement}this.hide()}),n?this.select(n):this._offset===0?this.select(0):this.reset(),this._replace()}focus(){this.spanSelected&&this.spanSelected.focus()}_replace(){if(this.container){const e=this.container.offsetHeight,t=this.spanSelected?.offsetWidth??0;this.ulContainer&&(this.ulContainer.style.top=`${e}px`,this.ulContainer.style.left=`${t-(this.width??0)}px`)}}reset(){this.hide(),this.spanSelected&&(c(this.spanSelected),a(this.spanSelected,this.initialChoice),this.spanSelected.style.fontStyle="italic",this.spanSelected.style.color="Grey",this._kbIndex=-1,this.reponse="",this.changed=!1,this._replace())}select(e,{withoutOffset:t}={}){if(this.spanSelected!=null){if(this.disabled)return;if(this.spanSelected.style.fontStyle="",this.spanSelected.style.color="",!Number.isInteger(e))return Error(`index non entier : ${e}`);const n=t?e:e-this._offset;if(n<0||n>=this.choices.length)return console.error(t?`index invalide : ${e} non compris entre 0 et ${this.choices.length-1}`:`index invalide : ${e} non compris entre ${this._offset} et ${this.choices.length-1+this._offset}`);c(this.spanSelected);const o=this.choices[n];if(a(this.spanSelected,o),this.reponse=String(typeof o=="string"?o:typeof o=="object"?o?.value:"undefined"),this.reponse==="undefined")throw Error(`Un problème avec la valeur de ce choix : ${o}`);this.changed=!0,this._kbIndex=e;for(const[i,s]of this._elts.entries())i===e?s.classList.add("selected"):s.classList.remove("selected");this._replace(),this.focus(),this.hide()}}_kbSelect(){for(const[e,t]of this._elts.entries())this._kbIndex===e?t.classList.add("selected"):t.classList.remove("selected")}hide(){this.ulContainer&&this.ulContainer.classList.remove("visible")}show(){if(!this.disabled){for(const e of document.querySelectorAll(".listeDeroulante ul.visible"))e.classList.remove("visible");this.ulContainer&&this.ulContainer.classList.add("visible"),this.width||(this.width=this.ulContainer?.offsetWidth,this._replace()),this.focus()}}toggle(){this.disabled||(this.isVisible()?this.hide():this.show())}isVisible(){return this.ulContainer?this.ulContainer.classList.contains("visible"):!1}getSelectedIndex(){return this._kbIndex}static create(e,t,{choix0:n,sansFleche:o,select:i}={choix0:!1,sansFleche:!1,select:0}){const s=new h(t,{choix0:n});if(!e)throw Error("Impossible de créer la liste déroulante, pas de conteneur");return s._init({conteneur:e,sansFleche:o,select:i}),s}}class u extends HTMLElement{_listeDeroulante;constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["choices"]}attributeChangedCallback(e,t,n){e==="choices"&&t!==n&&this.render()}connectedCallback(){this.render()}set choices(e){this._choices=e,this.render()}get choices(){return this._choices}_choices=[];render(){this.shadowRoot&&(this.shadowRoot.innerHTML="");const e=document.createElement("style");e.textContent=`
span.listeDeroulante {
  position: relative;
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #333;
  border: 1px solid #d1d5db; /* gris clair moderne */
  border-radius: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 2px 6px;
}

span.listeDeroulante:hover {
  border-color: #3b82f6; /* bleu Tailwind */
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

span.listeDeroulante span.currentChoice {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  outline: none;
}

span.listeDeroulante .trigger {
  margin-left: auto;
  padding: 6px 8px;
  font-weight: bold;
  font-size: 0.9em;
  color: #6b7280; /* gris neutre */
  border-left: 1px solid #e5e7eb;
  transition: color 0.2s ease;
}

span.listeDeroulante .trigger:hover {
  color: #111827; /* noir doux */
}

span.listeDeroulante .ok {
  color: #10b981; /* vert moderne */
}

span.listeDeroulante .ko {
  color: #ef4444; /* rouge moderne */
}

/* Liste déroulante */
span.listeDeroulante ul {
  position: absolute;
  top: 100%;
  left: 0;
  width: max-content;
  min-width: 100%;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  margin: 4px 0 0 0;
  padding: 4px 0;
  display: none;
  z-index: 100;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  animation: fadeIn 0.15s ease-out;
}

span.listeDeroulante ul.visible {
  display: block;
}

span.listeDeroulante ul li {
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #111827;
  background: #fff;
  transition: background 0.2s ease, color 0.2s ease;
  border: none;
}

span.listeDeroulante ul li:hover {
  background: #f3f4f6;
  color: #1d4ed8; /* bleu accent */
}

span.listeDeroulante ul li.selected {
  background: #e0f2fe;
  color: #0284c7;
  font-weight: 500;
}

span.listeDeroulante.disabled {
  cursor: not-allowed;
  background: #f9fafb;
  border-color: #e5e7eb;
  color: #9ca3af;
}

span.listeDeroulante.disabled .trigger {
  color: #d1d5db;
}

span.listeDeroulante.disabled span.currentChoice {
  pointer-events: none;
}

span.listeDeroulante math-field {
  pointer-events: none;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  padding: 0 !important;
}

span.listeDeroulante ul li svg.svgChoice {
  width: 1.2em;
  height: 1.2em;
  margin-right: 6px;
  flex-shrink: 0;
  fill: currentColor;
}

/* Animation d'apparition */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`,this.shadowRoot.appendChild(e);const t=document.createElement("span");this.shadowRoot.appendChild(t);let n=this.choices;if(!n.length&&this.hasAttribute("choices"))try{const i=decodeURIComponent(this.getAttribute("choices"));n=JSON.parse(i)}catch{n=[]}const o=this.hasAttribute("choix0")?this.getAttribute("choix0")!=="false":!1;this._listeDeroulante=new h(n,{choix0:o}),this._listeDeroulante._init({conteneur:t})}get value(){return this._listeDeroulante?.reponse??""}set value(e){this._listeDeroulante&&this._listeDeroulante.select(this._listeDeroulante.choices.findIndex(t=>t.value===e)+this._listeDeroulante._offset)}}customElements.define("liste-deroulante",u);
