function n(i,s,a){const e=Date.now();return typeof a>"u"&&(a=""),`
      <div id="warnMessage-${e}">
        <div id="title-warnMessage-${e}">
        ${a}
        </div>
        ${i}
      </div>
      `}function t({titre:i,texte:s,couleur:a}){const e=Date.now();return`
      <div id="infoMessage-${e}">
        <div id="title-infoMessage-${e}">
        ${i}
        </div>
        ${s}
      </div>
      `}function d({titre:i,texte:s,couleur:a}){const e=Date.now();return`
      <div id="lampeMessage-${e}">
        <div id="title-lampeMessage-${e}">
        ${i}
        </div>
        ${s}
      </div>
      `}export{t as i,d as l,n as w};
