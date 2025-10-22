import{g as w}from"./index-BUDQz6-w.js";import{c as H}from"./compute-engine.min.umd-BwAhpA7x.js";const _=["développer","simplifier","dériver","compiler"],U=[["notation","scientifique","ingénieure"]],z=["irréductible","forcer décimal en rationnel","fraction plus simple"],G=["ordonnée","croissant","élimine doublons"],J=["simplifier","dériver"],a=new H.ComputeEngine;a.latexOptions.decimalMarker="{,}";a.latexOptions.exponentProduct="\\times";const P=function(x,r){return Number.isInteger(x)||(x=Math.round(x)),Number.isInteger(r)||(r=Math.round(r)),r?P(r,x%r):x};function K(x){for(const r of Array.from(x.children))r.children.length>0&&r instanceof HTMLDivElement?K(r):r.textContent!==""&&(r.textContent="")}function Q(x,r,{saisieCanonical:C,reponseCanonical:S,isEqual:y,formatSelector:b,optionsFormatSaisie:d,optionsFormatReponse:E}){b==="fraction"&&(C=!1,S=!1);const L=document.querySelector("div#feedback");let T,m,k,A,O,f;L!=null&&K(L);let n,i,v;switch(b){case"litteral":n=a.parse(x,{canonical:C}),i=a.parse(r,{canonical:S}),d.litteral&&(d.litteral.developper&&(n=a.box(["Expand",n]).evaluate()),d.litteral.simplifier&&(n=n.simplify()),d.litteral.deriver&&(alert("Attention ! la dérivée n'est fonctionnelle que pour les polynômes."),n=a.box(["D",n,"x"]).evaluate()),d.litteral.compiler&&(T=n.compile())),k=n.latex,E.litteral&&(E.litteral.developper&&(i=a.box(["Expand",i]).evaluate()),E.litteral.simplifier&&(i=i.simplify()),E.litteral.deriver&&(i=a.box(["Derivative",i,"x"]).evaluate()),E.litteral.compiler&&(m=i.compile())),A=i.latex;break;case"numerique":O=d.numerique?.notation,O&&(O==="scientifique"?(a.latexOptions.notation="scientific",a.latexOptions.avoidExponentsInRange=[0,0]):O==="ingénieure"?(a.latexOptions.notation="engineering",a.latexOptions.avoidExponentsInRange=[0,0]):(a.latexOptions.notation="auto",a.latexOptions.avoidExponentsInRange=[-9,9])),n=a.parse(x,{canonical:C}),k=n.latex,f=E.numerique?.notation,f&&(f==="scientifique"?(a.latexOptions.notation="scientific",a.latexOptions.avoidExponentsInRange=[0,0]):f==="ingénieure"?(a.latexOptions.notation="engineering",a.latexOptions.avoidExponentsInRange=[0,0]):(a.latexOptions.notation="auto",a.latexOptions.avoidExponentsInRange=[-9,9])),i=a.parse(r,{canonical:S}),A=i.latex;break;case"liste":case"fonction":case"fraction":default:d.fraction?.forcerdecimalenrationnel&&(a.latexOptions.parseNumbers="rational"),i=a.parse(r,{canonical:!1}),n=a.parse(x,{canonical:!1}),d.fraction?.forcerdecimalenrationnel?y=!0:(y=!0,d.fraction?.irreductible&&(i=i.canonical)),k=n.latex,A=i.latex;break}if(b==="fraction")if(d.fraction?.fractionplussimple){const s=n.op1.numericValue,o=i.op1.numericValue;s!=null&&o!=null?(v=n.isEqual(i),v=v&&s<o):(console.warn(`On a un problème avec l'un des deux numérateurs : numSaisie = ${s} et numReponse = ${o} `),v=!1)}else if(d.fraction?.irreductible){const s=Number(n.op1.numericValue),o=Number(n.op2.numericValue);v=P(s,o)===1&&n.isEqual(i)}else v=n.isEqual(i);else v=y?n.isEqual(i):n.isSame(i);const $=document.querySelector("#resultatSaisie"),V=document.querySelector("#resultatReponse");if($&&V&&($.textContent=`${k}`,V.textContent=`${A}`),L!=null){const s=document.querySelector("div#conclusion");if(s&&s.appendChild(document.createTextNode(`Comparaison de la saisie élève [${n.json}] soit ${n.latex} et de la réponse [${i.json}] soit ${i.latex} en utilisant la méthode ${y?"isEqual()":"isSame()"} avec le processus de traitement pour le format ${b} : ${String(v)}`)),T){const o=document.querySelector("div#saisieCompile");o&&o.appendChild(document.createTextNode(`saisie compilée : ${T}`))}if(m){const o=document.querySelector("div#reponseCompile");o&&o.appendChild(document.createTextNode(`réponse compilée : ${m}`))}}return v}const Y="sandboxCE",Z="Compute-engine sandbox";class F{typeExercice;numeroExercice;sup;titre;container;constructor(){this.typeExercice="html",this.titre="Compute-engine sandbox",this.container=document.createElement("div"),this.container.setAttribute("overflow","auto");const r=window.mathVirtualKeyboard;this.container.id="sandbox",this.container.innerHTML=`<table id="table1">
        <thead>
        <tr>
            <th colspan="3">
                <h2>Saisir deux expressions puis choisir le type de comparaison</h2>
            </th>
        </tr>
        <tr>
            <td>
             <label>Type de comparaison :
                    <select id="format">
                        <option>littéral</option>
                        <option>numérique</option>
                        <option>fraction</option>
                        <option>liste</option>
                        <option>fonction</option>
                    </select>
                </label>
</td>
<td>    </td>
     <td>séparateur décimal
     <form id="sep">
     <input type="radio" name="sep" value="virgule" checked><label>virgule</label></input>
     <input type="radio" name="sep" value="point"><label>point</label></input>
</form>
</td>          
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><h3>Saisie élève</h3></td>
            <td><h3>Réponse attendue</h3></td>
            <td><h3>Résultat de la comparaison</h3></td>
        </tr>
        <tr>
            <td id="saisie"></td>
            <td id="reponse"></td>
            <td id="resultat">true</td>
        </tr>
        <tr>
            <td id="optionsSaisie"></td>
            <td id="optionsReponse"></td>
        </tr>
        <tr>
            <th>Rendre canonique la saisie élève ?</th>
            <th>Rendre canonique la réponse attendue ?</th>
            <th>Utiliser isSame() ou isEqual() ?</th>
        </tr>
        <tr>
            <th>
                <form id='canonicalSaisie'>
                    <label><input type='radio' name='canonicalSaisie' value='true' checked>True</label><br>
                    <label><input type='radio' name='canonicalSaisie' value='false'>False</label>
                </form>
            </th>
            <th>
                <form id='canonicalReponse'>
                    <label><input type='radio' name='canonicalReponse' value='true' checked>True</label><br>
                    <label><input type='radio' name='canonicalReponse' value='false'>False</label>
                </form>
            </th>
            <th>
                <form id="isEqual">
                    <label><input type='radio' name='isEqual' value='true' checked>isEqual()</label><br>
                    <label><input type='radio' name='isEqual' value='false'>isSame()</label>
                </form>
            </th>
        </tr>
        <tr>

        </tr>
        <tr>
            <th colspan="2">
                résultat après traitement
            </th>
        </tr>
        <tr>
            <th id="resultatSaisie">
                &nbsp;
            </th>
            <th id="resultatReponse">
                &nbsp;
            </th>
        </tr>
        </tbody>
    </table>
    <div id="feedback" style="display: block">
        <div id="conclusion"></div>
        <div id="divCompile" style="display: inline">
            <div id="saisieCompile" style="display: inline"></div>
            &nbsp;&nbsp;
            <div id="reponseCompile" style="display: inline"></div>
        </div>
    </div>
`;const C=this.container.querySelector("#sep"),S=this.container.querySelector("#canonicalSaisie"),y=this.container.querySelector("#canonicalReponse"),b=this.container.querySelector("#optionsSaisie"),d=this.container.querySelector("#optionsReponse"),E=this.container.querySelector("#isEqual"),L=S?.querySelectorAll("input"),T=y?.querySelectorAll("input"),m=E?.querySelectorAll("input"),k=this.container.querySelector("#saisie"),A=this.container.querySelector("#reponse"),O=this.container.querySelector("#resultat"),f=this.container.querySelector("#format");let n=!1,i=!1,v=!1,$,V;w.decimalSeparator=",";const s=new w,o=new w;s.mathVirtualKeyboardPolicy="manual",o.mathVirtualKeyboardPolicy="manual",s.addEventListener("focusin",()=>r.show()),o.addEventListener("focusin",()=>r.show()),s.addEventListener("focusout",()=>r.hide()),o.addEventListener("focusout",()=>r.hide());const q=document.createElement("form"),R=document.createElement("form");function N(){if(b&&q){for(const e of Array.from(q.children))q.removeChild(e);for(const e of Array.from(b.children))b.removeChild(e)}if(d&&R){for(const e of Array.from(R.children))R.removeChild(e);for(const e of Array.from(d.children))d.removeChild(e)}}function I(e,u,t){const l=document.createElement("label"),h=document.createTextNode(e),c=document.createElement("input");return c.addEventListener("change",()=>g()),c.type="checkbox",c.value=u,c.checked=t,c.name=u,l.appendChild(c),l.appendChild(h),l}function D(e,u){const t=document.createElement("label"),l=document.createTextNode(e[0]+" : "),h=document.createElement("input");h.addEventListener("change",()=>g()),h.type="radio",h.value=e[1],h.checked=u,h.name=e[0];const c=document.createElement("input");c.addEventListener("change",()=>g()),c.type="radio",c.value=e[2],c.checked=!1,c.name=e[0];const p=document.createTextNode(e[1]),B=document.createTextNode(e[2]);return t.appendChild(l),t.appendChild(h),t.appendChild(p),t.appendChild(c),t.appendChild(B),t}function j(e,...u){N();for(const t of u){const l=Array.isArray(t)?D(t,!1):I(t,t.replaceAll("é","e").replaceAll(/\s/g,""),!1);q.appendChild(l),q.appendChild(document.createElement("br")),e||(R.appendChild(Array.isArray(t)?D(t,!1):I(t,t.replaceAll("é","e").replaceAll(/\s/g,""),!1)),R.appendChild(document.createElement("br")))}}function M(e){if(e&&b&&d){switch(e){case"littéral":j(!1,..._);break;case"numérique":j(!1,...U);break;case"fonction":j(!1,...J);break;case"liste":j(!1,...G);break;case"fraction":j(!0,...z);break;default:throw N(),Error(`Le sélecteur de format a rencontré une valeur imprévue : ${f?.value}`)}b.appendChild(q),d.appendChild(R)}}if(f&&f.addEventListener("change",()=>{if(f?.value==="fraction"&&(alert(`En format "fraction", le test se fait toujours avec isEqual, et l'option canonical à false.
Si l'option "forcer décimal en rationnel" est active, les nombres décimaux sont convertis en fractions décimales.
Les options permettent d'affiner le test.`),y)){const e=Array.from(y.querySelectorAll("input"));e[1]&&(e[1].checked=!0)}M(f.value)}),C){const e=({from:u,to:t,json:l})=>{if(Array.isArray(l))for(const h of l)e({from:u,to:t,json:h});else typeof l=="string"&&l.replaceAll(u,t)};C.addEventListener("change",()=>{const u=Array.from(C.querySelectorAll("input")),t=s.expression,l=o.expression;if(Array.isArray(u)&&u.length>0){const h=u.find(c=>c?.checked);h&&(h.value==="virgule"?(w.decimalSeparator=",",e({from:".",to:",",json:t}),e({from:".",to:",",json:l}),s.expression=t,o.expression=l):(w.decimalSeparator=".",e({from:",",to:".",json:t}),e({from:",",to:".",json:l}),s.expression=t,o.expression=l))}})}S&&S.addEventListener("change",()=>{if(f?.value==="fraction"){alert(`En format "fraction", le test se fait avec isEqual, l'option canonical à false.
Les options permettent de configurer plus finement le test.
De plus, si l'option "forcer décimal en rationnel" est active, les nombres décimaux sont convertis en fraction décimale avant le test.`);const e=Array.from(S.querySelectorAll("input"));e[1]&&(e[1].checked=!0);return}L&&(n=!!L[0]?.checked),g()}),y&&y.addEventListener("change",()=>{if(f?.value==="fraction"){alert(`En format "fraction", l'option canonical reste à false car sinon, cela provoque la réduction de la fraction.`);const e=Array.from(y.querySelectorAll("input"));e[1]&&(e[1].checked=!0);return}T&&(i=!!T[0]?.checked),g()}),E&&E.addEventListener("change",()=>{if(m&&f&&f.value==="fraction"){const e=document.querySelector("#optionsSaisie");e&&(e.firstChild.elements[1].checked?(v=!0,m[0]&&m[1]&&(m[0].checked=!0,m[1].checked=!1)):(v=!1,m[0]&&m[1]&&(m[1].checked=!0,m[0].checked=!1)))}else m&&(v=!!m[0]?.checked);g()}),s&&s.addEventListener("change",()=>{g()}),o&&o.addEventListener("change",()=>{g()});function g(){$={},V={};let e;if(f){const u=f.value;if(["littéral","fraction","fonction","numérique","liste"].includes(u)){e=u.replaceAll("é","e").replaceAll(/\s/g,"");const t=Array.from(q.elements).filter(p=>p.checked).map(p=>p.name==="notation"?[p.name,p.value]:[p.name,!0]),l=Array.from(R.elements).filter(p=>p.checked).map(p=>p.name==="notation"?[p.name,p.value]:[p.name,!0]),h=[e,Object.fromEntries(t)],c=[e,Object.fromEntries(l)];if($=Object.fromEntries([h]),V=Object.fromEntries([c]),O){const p=Q(s.value,o.value,{saisieCanonical:n,reponseCanonical:i,isEqual:v,formatSelector:e,optionsFormatSaisie:$,optionsFormatReponse:V});O.innerText=String(p)}}}}k&&k.appendChild(s),A&&A.appendChild(o),M("littéral")}get html(){return this.container}}export{F as default,Z as titre,Y as uuid};
