import{F as y}from"./Figures2D-C1IYLm7-.js";import{k as w,p as f,a as M}from"./embellissements-BYV7mIDn.js";function p(e){const o=e?.fillStyle||"lime",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.rayonExterieur||1,i=e?.rayonInterieur||.5,r=e?.opacite||1,c=`
      <polygon points="${Array.from({length:10},(a,s)=>{const m=Math.PI/5*s-Math.PI/2,S=s%2===0?t*20:i*20;return`${S*Math.cos(m)},${S*Math.sin(m)}`}).join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
    `.trim(),$=Array.from({length:10},(a,s)=>{const m=Math.PI/5*s-Math.PI/2,S=s%2===0?t:i;return`(${S*Math.cos(m)},-${S*Math.sin(m)})`}).join(" -- "),h=`
    % Étoile à 5 branches
      \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${$} -- cycle;
    `.trim(),k=[0,72,144,216,288].map(a=>a+90).map(a=>w(-Math.cos(a*Math.PI/180)*t,-Math.sin(a*Math.PI/180)*t,Math.cos(a*Math.PI/180)*t,Math.sin(a*Math.PI/180)*t));return new y({codeSvg:c,codeTikz:h,width:t*2,height:t*2,axes:k,opacite:r})}function P(e){const o=e?.fillStyle||"blue",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.rayon||3,i=e?.opacite||1,d=`
            <polygon points="${Array.from({length:5},(k,a)=>{const s=2*Math.PI/5*a-Math.PI/2;return`${t*20*Math.cos(s)},${t*20*Math.sin(s)}`}).join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
        `.trim(),c=Array.from({length:5},(k,a)=>{const s=2*Math.PI/5*a-Math.PI/2;return`(${t*Math.cos(s)},${-t*Math.sin(s)})`}).join(" -- "),$=`
            % Pentagone régulier
            \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${c} -- cycle;
        `.trim(),h=[0,72,144,216,288].map(k=>k+90).map(k=>w(-Math.cos(k*Math.PI/180)*t*1.1,-Math.sin(k*Math.PI/180)*t*1.1,Math.cos(k*Math.PI/180)*t*1.1,Math.sin(k*Math.PI/180)*t*1.1));return new y({codeSvg:d,codeTikz:$,width:t*2,height:t*2,axes:h,opacite:i})}function I(e){const o=e?.fillStyle||"green",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.largeur||2,i=e?.hauteur||3,r=e?.opacite||1,c=`
            <polygon points="${[`0,${-i*10}`,`${t*10},${-i*7}`,`0,${i*10}`,`${-t*10},${-i*7}`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
        `.trim(),$=[`(0,${i/2})`,`(${t},${i*.35})`,`(0,${-i/2})`,`(${-t},${i*.35})`].join(" -- "),h=`
            % Cerf-volant
            \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${$} -- cycle;
        `.trim(),k=[w(0,-i*.6,0,i*.6)];return new y({codeSvg:c,codeTikz:h,width:t,height:i,axes:k,opacite:r})}function F(e){const o=e?.fillStyle||"yellow",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.base||3,i=e?.hauteur||4,r=e?.opacite||1,c=`
                        <polygon points="${[`0,${-i*10}`,`${t*10},${i*10}`,`0,${i*5}`,`${-t*10},${i*10}`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
                `.trim(),$=[`(0,${i/2})`,`(${t/2},${-i/2})`,`(0,${-i/4})`,`(${-t/2},${-i/2})`].join(" -- "),h=`
    % Aile delta
                        \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${$} -- cycle;
                `.trim(),k=[w(0,-i*.6,0,i*.7)];return new y({codeSvg:c,codeTikz:h,width:t,height:i,axes:k,opacite:r})}function z(e){const o=e?.fillStyle||"pink",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.baseSuperieure||2,i=e?.baseInferieure||4,r=e?.hauteur||2.5,d=e?.opacite||1,$=`
        <polygon points="${[`${-i*10},${r*10}`,`${i*10},${r*10}`,`${t*10},${-r*10}`,`${-t*10},${-r*10}`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
    `.trim(),h=[`(${-i/2},${-r/2})`,`(${i/2},${-r/2})`,`(${t/2},${r/2})`,`(${-t/2},${r/2})`].join(" -- "),k=`
    % Trapèze isocèle
        \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${h} -- cycle;
    `.trim(),a=[w(0,-r*.6,0,r*.6)];return new y({codeSvg:$,codeTikz:k,width:i,height:r,axes:a,opacite:d})}function W(e){const o=e?.fillStyle||"orange",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.rayonHorizontal||1.5,i=e?.rayonVertical||1,r=e?.opacite||1,c=`
                <polygon points="${[`${-t*10},${-i*20}`,`${t*10},${-i*20}`,`${t*20},0`,`${t*10},${i*20}`,`${-t*10},${i*20}`,`${-t*20},0`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
        `.trim(),$=[`(${-t/2},${i})`,`(${t/2},${i})`,`(${t},0)`,`(${t/2},${-i})`,`(${-t/2},${-i})`,`(${-t},0)`].join(" -- "),h=`
        % Hexagone non régulier
                \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${$} -- cycle;
        `.trim(),k=[w(0,-i*1.2,0,i*1.2),w(-t*1.2,0,t*1.2,0)];return new y({codeSvg:c,codeTikz:h,width:t*2,height:i*2,axes:k,centre:f(0,0),opacite:r})}function j(e){const o=e?.fillStyle||"teal",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.base||4,i=e?.hauteur||4,r=e?.opacite||1,c=`
            <polygon points="${[`${-t*10-5},${-i*8}`,`${t*10+5},${i*10}`,`${-t*10},${i*10}`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
        `.trim(),$=[`(${-t/2-.25},${i*.4})`,`(${t/2+.25},${-i/2})`,`(${-t/2},${-i/2})`].join(" -- "),h=`
  % Triangle
            \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${$} -- cycle;
        `.trim();return new y({codeSvg:c,codeTikz:h,width:(t*20+10)/20,height:i,opacite:r,nonAxe:w(-t*1.1,-i*1.1,t*.55,i*.55)})}function v(e){const o=e?.fillStyle||"gray",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.rayonExterieur||2,i=e?.rayonInterieur||3,r=e?.angle||0,d=Math.min(t,i),c=Math.max(t,i),$=e?.opacite||1,h=t<i?`
     <path d="
      M 0,${-d*10}
      A ${d*10},${d*10} 0 0 1 0,${d*10}
      A ${c*10},${c*10} 0 0 0 0,${-d*10}
      Z
    " fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim():`
    <path d="
      M 0,${-d*10}
      A ${d*10},${d*10} 0 1 1 0,${d*10}
      A ${c*10},${c*10} 0 1 0 0,${-d*10}
      Z
    " fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),k=Math.asin(d/c)*180/Math.PI,a=`
    % Croissant de lune
    \\draw[fill=${o}, draw=${l}, line width=${n}pt] 
      (0,${-d/2}) 
      arc[start angle=${-k}, end angle=${k}, radius=${c/2}] 
      -- (0,${d/2})
      arc[start angle=90, end angle=-90, radius=${d/2}] 
      -- cycle;
  `.trim(),s=[w(-.5,0,d,0)];return new y({codeSvg:h,codeTikz:a,width:t>i?c:d,height:t>i?c:d,axes:s,angle:r,opacite:$})}function L(e){const o=e?.fillStyle||"yellow",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.opacite||1,r=`<path d="${`
        M 0,0
        L 40,0
        A 40,40 0 1,1 0,-40
        Z
    `.trim()}" fill="${o}" stroke="${l}" stroke-width="${n}" />`,d=e?.fillStyle||"yellow",c=e?.strokeStyle||"black",$=e?.lineWidth||"1pt",h=`
    % Pacman
        \\draw[fill=${d}, draw=${c}, line width=${$}] 
        (0,0) -- (0,1) 
        arc[start angle=90, end angle=360, radius=2cm] -- cycle;
    `.trim(),k=[w(-2.2,-2.2,1,1)];return new y({codeSvg:r,codeTikz:h,width:4,height:4,axes:k,opacite:t})}function C(e){const o=e?.fillStyle||"gray",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.rayonExterieur||2,i=e?.rayonInterieur||1.5,r=e?.opacite||1,d=`
    <path d="
      M ${-t*20},${-t*20} 
      L 0,${-t*20}
      A ${t*20} ,${t*20}  0 0 1 0,${t*20}  
      L ${-t*20},${t*20}
      L ${-t*20},${i*20}
      L 0,${i*20}
      A ${i*20},${i*20} 0 0 0 0,${-i*20}
      L ${-t*20},${-i*20}
      L ${-t*20},${-t*20}

      Z
    " fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),c=`
    % Fer à cheval
    \\draw[fill=${o}, draw=${l}, line width=${n}pt]
      (${-t},${t}) 
      -- (0,${t}) 
      arc[start angle=90, end angle=-90, radius=${t}]
      -- (${-t},${-t})
      -- (${-t},${-i})
      -- (0,${-i})
      arc[start angle=-90, end angle=90, radius=${i}]
      -- (${-t},${i})
      -- cycle;
  `.trim(),$=[w(-t,0,t+.5,0)];return new y({codeSvg:d,codeTikz:c,width:t*2,height:t*2,axes:$,opacite:r})}function T(e){const o=e?.fillStyle||"cyan",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.base||4,i=e?.hauteur||3,r=e?.angle||60,d=e?.opacite||1,c=i*20/Math.tan(r*Math.PI/180),h=`
    <polygon points="${[`${-t*10-c/2},${i*10}`,`${t*10-c/2},${i*10}`,`${t*10+c/2},${-i*10}`,`${-t*10+c/2},${-i*10}`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),k=[`(${-t/2-c/20},${i/2})`,`(${t/2-c/20},${i/2})`,`(${t/2+c/20},${-i/2})`,`(${-t/2+c/20},${-i/2})`].join(" -- "),a=`
  % Parallélogramme
    \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${k} -- cycle;
  `.trim();return new y({codeSvg:h,codeTikz:a,width:t+Math.abs(c/10),height:i,centre:f(0,0),nonAxe:w((-t/2+c/40)*2.5,i*1.25,(t/2-c/40)*2.5,-i*1.25),opacite:d})}function A(e){const o=e?.fillStyle||"pink",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.base||2,i=e?.opacite||1,r=`
    <path d="
      M 0,${-t*10}
      C ${-t*10},${-t*20} ${-t*20},${-t*5} 0,${t*10}
      C ${t*20},${-t*5} ${t*10},${-t*20} 0,${-t*10}
      Z
    " fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),d=`
    % Coeur
    \\draw[fill=${o}, draw=${l}, line width=${n}pt]
      (0,${t/2})
      .. controls (${t/2},${t}) and (${t},${t/4}) .. (0,${-t/2})
      .. controls (${-t},${t/4}) and (${-t/2},${t}) .. (0,${t/2})
      -- cycle;
  `.trim(),c=[w(0,t*.7,0,-t*.7)];return new y({codeSvg:r,codeTikz:d,width:t*2,height:t*2,axes:c,opacite:i})}function D(e){const o=e?.fillStyle||"purple",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.hauteur||3;let i=e?.rayon||2;const r=e?.base||3,d=e?.opacite||1;i<t/2&&(i=t/2+1);const c=r/2,$=[`${-c*20},0`,`${c*20},0`],h=`
    <path d="
      M ${$[0]}
      A ${i*20},${i*20} 0 0 1 ${$[1]}
      A ${i*20},${i*20} 0 0 1 ${$[0]}
      Z
    " fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),k=`
    % Ogive
    \\begin{scope}
      \\clip (0,${i/r}) circle(${i});
      \\fill[fill=${o}] (0,${-i/r}) circle(${i});
      \\draw[draw=${l}, line width=${n}pt] (0,${-i/r}) circle(${i});
    \\end{scope}
    \\begin{scope}
      \\clip (0,${-i/r}) circle(${i});
      \\draw[draw=${l}, line width=${n}pt] (0,${i/r}) circle(${i});
      \\end{scope}
  `.trim(),a=[w(-c-1,0,c+1,0),w(0,-t,0,t)];return new y({codeSvg:h,codeTikz:k,width:r,height:t,axes:a,centre:f(0,0),opacite:d})}function E(e){const o=e?.fillStyle||"gray",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.rayonExterieur||1,i=e?.rayonInterieur||.3,r=e?.opacite||1,c=`
    <polygon points="${Array.from({length:8},(a,s)=>{const m=Math.PI/4*s,S=s%2===0?t*20:i*20;return`${S*Math.cos(m)},${S*Math.sin(m)}`}).join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),$=Array.from({length:8},(a,s)=>{const m=Math.PI/4*s,S=s%2===0?t:i;return`(${S*Math.cos(m)},-${S*Math.sin(m)})`}).join(" -- "),h=`
% Etoile à 4 branches
    \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${$} -- cycle;
  `.trim(),k=[0,45,90,135].map(a=>w(-Math.cos(a*Math.PI/180)*Math.max(t,i)*1.1,-Math.sin(a*Math.PI/180)*Math.max(t,i)*1.1,Math.cos(a*Math.PI/180)*Math.max(t,i)*1.1,Math.sin(a*Math.PI/180)*Math.max(t,i)*1.1));return new y({codeSvg:c,codeTikz:h,width:t*2,height:t*2,axes:k,centre:f(0,0),opacite:r})}function R(e){const o=e?.fillStyle||"red",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.largeurBras||.6,i=e?.longueurBras||2.5,r=e?.opacite||1,c=`
    <polygon points="${[`${-t*10},${-i*10}`,`${t*10},${-i*10}`,`${t*10},${-t*10}`,`${i*10},${-t*10}`,`${i*10},${t*10}`,`${t*10},${t*10}`,`${t*10},${i*10}`,`${-t*10},${i*10}`,`${-t*10},${t*10}`,`${-i*10},${t*10}`,`${-i*10},${-t*10}`,`${-t*10},${-t*10}`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" opacity="0.6"/>
  `.trim(),$=[`(${-t/2},${-i/2})`,`(${t/2},${-i/2})`,`(${t/2},${-t/2})`,`(${i/2},${-t/2})`,`(${i/2},${t/2})`,`(${t/2},${t/2})`,`(${t/2},${i/2})`,`(${-t/2},${i/2})`,`(${-t/2},${t/2})`,`(${-i/2},${t/2})`,`(${-i/2},${-t/2})`,`(${-t/2},${-t/2})`].join(" -- "),h=`
  % Croix rouge
    \\draw[fill=${o}, draw=${l}, line width=${n}pt, opacity=0.6] ${$} -- cycle;
  `.trim(),k=[0,45,90,135].map(a=>w(-Math.cos(a*Math.PI/180)*i*.7,-Math.sin(a*Math.PI/180)*i*.7,Math.cos(a*Math.PI/180)*i*.7,Math.sin(a*Math.PI/180)*i*.7));return new y({codeSvg:c,codeTikz:h,width:i*2,height:i*2,axes:k,centre:f(0,0),opacite:r})}function Z(e){const o=e?.fillStyle||"gray",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.largeur||4,i=e?.hauteur||2,r=e?.coinsArrondis||!1,d=e?.angle||0,c=e?.opacite||1,$=[`${-t*10},${-i*10}`,`${t*10},${-i*10}`,`${t*10},${i*10}`,`${-t*10},${i*10}`].join(" "),h=r?`
      <rect x="${-t*10}" y="${-i*10}" width="${t*20}" height="${i*20}" rx="${Math.min(t,i)*5}" ry="${Math.min(t,i)*5}" fill="${o}" stroke="${l}" stroke-width="${n}" />
    `.trim():`
      <polygon points="${$}" fill="${o}" stroke="${l}" stroke-width="${n}" />
    `.trim(),k=(r?`\\draw[fill=${o}, draw=${l}, line width=${n}pt, rounded corners=${Math.min(t,i)/5}cm] 
        (${-t/2},${-i/2}) rectangle (${t/2},${i/2});`:`\\draw[fill=${o}, draw=${l}, line width=${n}pt] 
        (${-t/2},${-i/2}) rectangle (${t/2},${i/2});`).trim(),a=[w(-t*5/8,0,t*5/8,0),w(0,-i*5/8,0,i*5/8)];return new y({codeSvg:h,codeTikz:k,width:t,height:i,axes:a,centre:f(0,0),angle:d,opacite:c})}function _(e){const o=e?.fillStyle||"orange",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.base||4,i=e?.hauteur||2,r=e?.angle||0,d=e?.opacite||1,c=t*10,$=i*10,k=`
      <polygon points="${[`0,${-$}`,`${c},0`,`0,${$}`,`${-c},0`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
    `.trim(),a=[`(0,${-i/2})`,`(${t/2},0)`,`(0,${i/2})`,`(${-t/2},0)`].join(" -- "),s=`
  % losange
    \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${a} -- cycle;
  `.trim(),m=[w(-t*5/8,0,t*5/8,0),w(0,-i*5/8,0,i*5/8)];return new y({codeSvg:k,codeTikz:s,width:t,height:i,axes:m,centre:f(0,0),angle:r,opacite:d})}function B(e){const o=e?.fillStyle||"blue",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.base||4,i=e?.hauteur||2,r=e?.opacite||1,c=`
    <polygon points="${[`0,${-i*10}`,`${t*10},${i*10}`,`${-t*10},${i*10}`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),$=[`(0,${-i/2})`,`(${t/2},${i/2})`,`(${-t/2},${i/2})`].join(" -- "),h=`
  % triangle isocèle
    \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${$} -- cycle;
  `.trim(),k=[w(0,-i*5/8,0,i*5/8)];return new y({codeSvg:c,codeTikz:h,width:t,height:i,axes:k,opacite:r})}function O(e){const o=e?.fillStyle||"blue",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.base||4,i=e?.opacite||1,r=Math.round(Math.sqrt(3)/2*t*100)/100,c=`
    <polygon points="${[`0,${(-r*40/3).toFixed(2)}`,`${t*10},${(r*20/3).toFixed(2)}`,`${-t*10},${(r*20/3).toFixed(2)}`].join(" ")}" fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),$=[`(0,${(-r/3).toFixed(2)})`,`(${t/2},${(2*r/3).toFixed(2)})`,`(${-t/2},${(2*r/3).toFixed(2)})`].join(" -- "),h=`
  % triangle équilatéral
    \\draw[fill=${o}, draw=${l}, line width=${n}pt] ${$} -- cycle;
  `.trim(),k=[90,210,-30].map(a=>w(-Math.cos(a*Math.PI/180)*t*.7,-Math.sin(a*Math.PI/180)*t*.7,Math.cos(a*Math.PI/180)*t*.7,Math.sin(a*Math.PI/180)*t*.7));return new y({codeSvg:c,codeTikz:h,width:t,height:r,axes:k,opacite:i})}function q(e){const o=e?.fillStyle||"maroon",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.opacite||.7,i=`
    <ellipse cx="0" cy="0" rx="40" ry="20" fill="${o}" stroke="${l}" stroke-width="${n}" />
  `.trim(),r=`fill=${o}`,d=`draw=${l}`,c=`line width=${n}pt`,$=`
    \\draw[${r}, ${d}, ${c}] (0,0) ellipse (2cm and 1cm);
  `.trim();return new y({codeSvg:i,codeTikz:$,width:4,height:2,opacite:t,axes:[w(-2.2,0,2.2,0),w(0,-1.2,0,1.2)],centre:f(0,0)})}function V(e){let o=e?.nx||2,l=e?.ny||2;(o<1||l<1)&&(o=1,l=1);const n=M(["blue","brown","green","cyan","darkgray","pink","orange","red","magenta","purple","violet","white","yellow"]),t=e?.fillStyle||n,i=e?.strokeStyle||"black",r=e?.lineWidth||1,d=e?.studFillStyle||n,c=e?.studStrokeStyle||"black",$=o/2,h=l/2,k=`
<rect x="${-$*10}" y="${-h*10}" width="${$*20}" height="${h*20}" fill="${t}" stroke="${i}" stroke-width="${r}" />
${Array.from({length:o},(m,S)=>Array.from({length:l},(x,u)=>`<circle cx="${-$*10+5+S*10}" cy="${-h*10+5+u*10}" r="3" fill="${d}" stroke="${c}" stroke-width="${r}" />`).join("")).join("")}
`.trim(),a=`
\\draw[fill=${t}, draw=${i}, line width=${r}pt] (${(-$/2).toFixed(1)},${(-h/2).toFixed(1)}) rectangle (${($/2).toFixed(1)},${(h/2).toFixed(1)});
\\foreach \\x in {0,...,${o-1}} {
  \\foreach \\y in {0,...,${l-1}} {
    \\fill[${d}] (${(-$/2+.25).toFixed(2)}+\\x/2,${(-h/2+.25).toFixed(2)}+\\y/2) circle (0.15);
    \\draw[draw=${c}, line width=${r}pt] (${(-$/2+.25).toFixed(2)}+\\x/2,${(-h/2+.25).toFixed(2)}+\\y/2) circle (0.15);
  }
}
`.trim(),s=[];return o===l&&(s.push(w(-$*.6-.2,-h*.6-.2,$*.6+.2,h*.6+.2)),s.push(w(-$*.6-.2,h*.6+.2,$*.6+.2,-h*.6-.2))),s.push(w(-$*.6-.2,0,$*.6+.2,0)),s.push(w(0,-h*.6-.2,0,h*.6+.2)),new y({codeSvg:k,codeTikz:a,width:o/2,height:l/2,axes:s,centre:f(0,0)})}function H(e){const o=e?.fillStyle||"yellow",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.borderFillSyle||"white",i=`
  <g transform="scale(0.707) rotate(45)"><rect x="-20" y="-20" width="40" height="40" fill="${t}" stroke="${l}" stroke-width="${n}" rx="2" ry="2"/>
    <rect x="-15" y="-15" width="30" height="30" fill="${o}" stroke="${l}" stroke-width="${n}" rx="2" ry="2"/></g>
  `.trim(),r=`fill=${o}`,d=`draw=${l}`,c=`line width=${n}pt`,$=`
    \\draw[fill=${t}, ${d}, ${c}] (0,-1) -- (1,0) -- (0,1) -- (-1,0) -- cycle;
    \\draw[${r}, ${d}, ${c}] (0,-0.75) -- (0.75,0) -- (0,0.75) -- (-0.75,0) -- cycle;
  `.trim(),h=[w(-1,-1,1,1),w(-1,1,1,-1),w(-1.2,0,1.2,0),w(0,-1.2,0,1.2)];return new y({codeSvg:i,codeTikz:$,width:2,height:2,axes:h,centre:f(0,0)})}function N(e){const o=e?.fillStyle||"yellow",l=e?.strokeStyle||"gray",n=e?.cancelStroke||"black",t=e?.lineWidth||1,i=e?.borderFillSyle||"white",r=`
   <g transform="scale(0.707) rotate(45)"><rect x="-20" y="-20" width="40" height="40" fill="${i}" stroke="${l}" stroke-width="${t}" rx="2" ry="2"/>
    <rect x="-15" y="-15" width="30" height="30" fill="${o}" stroke="${l}" stroke-width="${t}" rx="2" ry="2"/></g>
    <line x1="-10" y1="10" x2="10" y2="-10" stroke="${n}" stroke-width="3" />
  `.trim(),d=`fill=${o}`,c=`draw=${l}`,$=`line width=${t}pt`,h=`draw=${n}`,k=`
    \\draw[fill=${i}, ${c}, ${$}] (0,-1) -- (1,0) -- (0,1) -- (-1,0) -- cycle;
    \\draw[${d}, ${c}, ${$}] (0,-0.75) -- (0.75,0) -- (0,0.75) -- (-0.75,0) -- cycle;
    \\draw[${h}, line width=3pt] (-0.5,-0.5) -- (0.5,0.5);
  `.trim(),a=[w(-1,-1,1,1),w(-1,1,1,-1)];return new y({codeSvg:r,codeTikz:k,width:2,height:2,axes:a,centre:f(0,0)})}function X(e){const o=e?.fillStyle||"blue",l=e?.strokeStyle||"red",n=e?.lineWidth||5,i=`
  <circle cx="0" cy="0" r="20" stroke="black" stroke-width="1" />
    <circle cx="0" cy="0" r="17" fill="${o}" stroke="${l}" stroke-width="${n}" />
    <line x1="-13" y1="-13" x2="13" y2="13" stroke="red" stroke-width="3" />
  `.trim(),r=`fill=${o}`,d=`draw=${l}`,c=`line width=${n*1.1}pt`,h=`
   \\draw[draw=black, line width=1pt] (0,0) circle (1cm);
    \\draw[${r}, ${d}, ${c}] (0,0) circle (0.9cm);
      \\draw[red, line width=5pt] (-0.7,0.7) -- (0.7,-0.7);
  `.trim(),k=[w(-1,-1,1,1),w(-1,1,1,-1)];return new y({codeSvg:i,codeTikz:h,width:2,height:2,axes:k,centre:f(0,0)})}function Y(e){const o=e?.fillStyle||"red",l=e?.strokeStyle||"white",n=e?.lineWidth||2,t=e?.textColor||"white",i=`
   <polygon points="-8.8,-20 8.8,-20 20,-8.8 20,8.8 8.8,20 -8.8,20 -20,8.8 -20,-8.8" fill="white" stroke="black" stroke-width="1"/>
  <polygon points="-8.8,-20 8.8,-20 20,-8.8 20,8.8 8.8,20 -8.8,20 -20,8.8 -20,-8.8" fill="${o}" stroke="${l}" stroke-width="${n}" transform="scale(0.9)"/>
    <text x="0" y="5" fill="${t}" font-size="12" font-family="Arial" font-weight="bold" text-anchor="middle">STOP</text>
  `.trim(),r=`
                    \\draw[fill=white, draw=black, line width=1pt] (-0.5,-1) -- (0.5,-1) -- (1,-0.5) -- (1,0.5) -- (0.5,1) -- (-0.5,1) -- (-1,0.5) -- (-1,-0.5) -- cycle;
             \\begin{scope}[scale=0.95]\\draw[fill=${o}, draw=${l}, line width=${n}pt] (-0.5,-1) -- (0.5,-1) -- (1,-0.5) -- (1,0.5) -- (0.5,1) -- (-0.5,1) -- (-1,0.5) -- (-1,-0.5) -- cycle;\\end{scope}
                    \\node at (0,0) {\\textcolor{${t}}{\\textbf{\\small STOP}}};
    `.trim();return new y({codeSvg:i,codeTikz:r,width:2,height:2,nonAxe:w(0,-2.5,0,2.5)})}function G(e){const o=e?.fillStyle||"blue",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.tFillStyle||"white",i=e?.barFillStyle||"red",r=`
    <rect x="-20" y="-20" width="40" height="40" rx="5" fill="white" stroke="${l}" stroke-width="${n}" />
    <rect x="-17" y="-17" width="34" height="34" fill="${o}" />
    <rect x="-2.5" y="-10" width="5" height="24" fill="${t}" />
    <rect x="-7" y="-14" width="14" height="9" fill="${t}" />
    <rect x="-6" y="-13" width="12" height="7" fill="${i}" />
  `.trim(),d=`
    \\draw[fill=white, draw=${l}, line width=${n}pt, rounded corners=2pt] (-1,-1) rectangle (1,1);
    \\fill[${o}] (-0.85,-0.85) rectangle (0.85,0.85);
    \\fill[${t}] (-0.125,-0.5) rectangle (0.125,0.7);
    \\fill[${t}] (-0.35,0.35) rectangle (0.35,0.7);
    \\fill[${i}] (-0.3,0.4) rectangle (0.3,0.6);
  `.trim(),c=[w(0,-1.2,0,1.2)];return new y({codeSvg:r,codeTikz:d,width:2,height:2,axes:c})}function J(e){const o=e?.fillStyle||"blue",l=e?.strokeStyle||"black",n=e?.lineWidth||1,t=e?.pFillStyle||"white",i=`
    <rect x="-20" y="-20" width="40" height="40" rx="5" fill="white" stroke="${l}" stroke-width="${n}" />
    <rect x="-17" y="-17" width="34" height="34" fill="${o}" />
    <text x="0" y="12" font-size="30" font-family="Arial" font-weight="bold" text-anchor="middle" fill="${t}">P</text>
  `.trim(),r=`
    \\draw[fill=white, draw=${l}, line width=${n}pt, rounded corners=2pt] (-1,-1) rectangle (1,1);
    \\fill[${o}] (-0.85,-0.85) rectangle (0.85,0.85);
    \\node[text=${t}, font=\\bfseries, scale=1.5] at (0,0) {P};
  `.trim();return new y({codeSvg:i,codeTikz:r,width:2,height:2,nonAxe:w(0,-2.5,0,2.5)})}function K(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"red",n=e?.lineWidth||3,t=e?.borderStyle||"black",i=e?.borderWidth||1,r=[-90,30,150].map(s=>`${(22*Math.cos(s*Math.PI/180)).toFixed(2)},${(-22*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),d=[-90,30,150].map(s=>`${(19*Math.cos(s*Math.PI/180)).toFixed(2)},${(-19*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),c=`
    <polygon points="${r}" fill="${o}" stroke="${t}" stroke-width="${i}" />
    <polygon points="${d}" fill="none" stroke="${l}" stroke-width="${n}" />
  `.trim(),$=[-90,30,150].map(s=>`(${(22*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),h=[-90,30,150].map(s=>`(${(19*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),k=`
    \\draw[fill=${o}, draw=${t}, line width=${i}pt] 
      ${$} -- cycle;
    \\draw[draw=${l}, line width=${n}pt] 
      ${h} -- cycle;
  `.trim(),a=[-90,30,150].map(s=>w(1.2*Math.cos(s*Math.PI/180),-1.2*Math.sin(s*Math.PI/180),-1.2*Math.cos(s*Math.PI/180),1.2*Math.sin(s*Math.PI/180)));return new y({codeSvg:c,codeTikz:k,width:2,height:2,axes:a})}function Q(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"red",n=e?.lineWidth||3,t=e?.borderStyle||"black",i=e?.borderWidth||1,r=[90,-30,-150].map(a=>`${(22*Math.cos(a*Math.PI/180)).toFixed(2)},${(-22*Math.sin(a*Math.PI/180)).toFixed(2)}`).join(" "),d=[90,-30,-150].map(a=>`${(19*Math.cos(a*Math.PI/180)).toFixed(2)},${(-19*Math.sin(a*Math.PI/180)).toFixed(2)}`).join(" "),c=`
    <polygon points="${r}" fill="${o}" stroke="${t}" stroke-width="${i}" />
    <polygon points="${d}" fill="none" stroke="${l}" stroke-width="${n}" />
    <path d="M -2,-7 L -2,2 L -0.5,2 L -3,7 L -5.5,2 L -4,2 L -4,-7 Z" fill="black" />
    <path d="M 4,7 L 4,-2 L 5.5,-2 L 3,-7 L 0.5,-2 L 2,-2 L 2,7 Z" fill="black" />
  `.trim(),$=[90,-30,-150].map(a=>`(${(22*Math.cos(a*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(a*Math.PI/180)/20).toFixed(3)})`).join(" -- "),h=[90,-30,-150].map(a=>`(${(19*Math.cos(a*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(a*Math.PI/180)/20).toFixed(3)})`).join(" -- "),k=`
    \\draw[fill=${o}, draw=${t}, line width=${i}pt] 
      ${$} -- cycle;
    \\draw[draw=${l}, line width=${n}pt] 
      ${h} -- cycle;
      \\path[fill=black] 
        (-0.1,0.35) -- (-0.1,-0.1) -- (-0.025,-0.1) -- (-0.15,-0.35) -- (-0.275,-0.1) -- (-0.2,-0.1) -- (-0.2,0.35) -- cycle;
      \\path[fill=black] 
        (0.2,-0.35) -- (0.2,0.1) -- (0.275,0.1) -- (0.15,0.35) -- (0.025,0.1) -- (0.1,0.1) -- (0.1,-0.35) -- cycle;
  `.trim();return new y({codeSvg:c,codeTikz:k,width:2,height:2,nonAxe:w(0,-2.5,0,2.5)})}function U(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"red",n=e?.lineWidth||3,t=e?.borderStyle||"black",i=e?.borderWidth||1,r=[90,-30,-150].map(a=>`${(22*Math.cos(a*Math.PI/180)).toFixed(2)},${(-22*Math.sin(a*Math.PI/180)).toFixed(2)}`).join(" "),d=[90,-30,-150].map(a=>`${(19*Math.cos(a*Math.PI/180)).toFixed(2)},${(-19*Math.sin(a*Math.PI/180)).toFixed(2)}`).join(" "),c=`
    <polygon points="${r}" fill="${o}" stroke="${t}" stroke-width="${i}" />
    <polygon points="${d}" fill="none" stroke="${l}" stroke-width="${n}" />
    <line x1="-2" y1="6" x2="-2" y2="-6" stroke="black" stroke-width="2" />
    <path d="M 3.5,6 L 3.5,2 L 2,-2 L 2,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim(),$=[90,-30,-150].map(a=>`(${(22*Math.cos(a*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(a*Math.PI/180)/20).toFixed(3)})`).join(" -- "),h=[90,-30,-150].map(a=>`(${(19*Math.cos(a*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(a*Math.PI/180)/20).toFixed(3)})`).join(" -- "),k=`
    \\draw[fill=${o}, draw=${t}, line width=${i}pt] 
      ${$} -- cycle;
    \\draw[draw=${l}, line width=${n}pt] 
      ${h} -- cycle;
     \\draw[draw=black, line width=2pt] (-0.1,-0.3) -- (-0.1,0.3);
    \\draw[draw=black, line width=2pt] (0.175,-0.3) -- (0.175,-0.1) -- (0.1,0.1) -- (0.1,0.3);
  `.trim();return new y({codeSvg:c,codeTikz:k,width:2,height:2,nonAxe:w(0,-2.5,0,2.5)})}function tt(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"red",n=e?.lineWidth||3,t=e?.borderStyle||"black",i=e?.borderWidth||1,r=[90,-30,-150].map(s=>`${(22*Math.cos(s*Math.PI/180)).toFixed(2)},${(-22*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),d=[90,-30,-150].map(s=>`${(19*Math.cos(s*Math.PI/180)).toFixed(2)},${(-19*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),c=`
    <polygon points="${r}" fill="${o}" stroke="${t}" stroke-width="${i}" />
    <polygon points="${d}" fill="none" stroke="${l}" stroke-width="${n}" />
   <path d="M -3.9,6 L -3.9,2 L -1.9,-2 L -1.9,-6" stroke="black" stroke-width="2" fill="none" />
    <path d="M 3.9,6 L 3.9,2 L 1.9,-2 L 1.9,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim(),$=[90,-30,-150].map(s=>`(${(22*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),h=[90,-30,-150].map(s=>`(${(19*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),k=`
  % panneauRetrecissementChaussee2
    \\draw[fill=${o}, draw=${t}, line width=${i}pt] 
      ${$} -- cycle;
    \\draw[draw=${l}, line width=${n}pt] 
      ${h} -- cycle;
     \\draw[draw=black, line width=2pt] (-0.195,-0.3) -- (-0.195,-0.1) -- (-0.1,0.1) -- (-0.1,0.3);
    \\draw[draw=black, line width=2pt] (0.195,-0.3) -- (0.195,-0.1) -- (0.1,0.1) -- (0.1,0.3);
  `.trim(),a=[w(0,-1.2,0,1.2)];return new y({codeSvg:c,codeTikz:k,width:2,height:2,axes:a})}function et(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"red",n=e?.lineWidth||3,t=e?.borderStyle||"black",i=e?.borderWidth||1,r=[90,-30,-150].map(a=>`${(22*Math.cos(a*Math.PI/180)).toFixed(2)},${(-22*Math.sin(a*Math.PI/180)).toFixed(2)}`).join(" "),d=[90,-30,-150].map(a=>`${(19*Math.cos(a*Math.PI/180)).toFixed(2)},${(-19*Math.sin(a*Math.PI/180)).toFixed(2)}`).join(" "),c=`
    <polygon points="${r}" fill="${o}" stroke="${t}" stroke-width="${i}" />
    <polygon points="${d}" fill="none" stroke="${l}" stroke-width="${n}" />
   <line x1="2" y1="6" x2="2" y2="-6" stroke="black" stroke-width="2" />
    <path d="M -3.5,6 L -3.5,2 L -2,-2 L -2,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim(),$=[90,-30,-150].map(a=>`(${(22*Math.cos(a*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(a*Math.PI/180)/20).toFixed(3)})`).join(" -- "),h=[90,-30,-150].map(a=>`(${(19*Math.cos(a*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(a*Math.PI/180)/20).toFixed(3)})`).join(" -- "),k=`
    \\draw[fill=${o}, draw=${t}, line width=${i}pt] 
      ${$} -- cycle;
    \\draw[draw=${l}, line width=${n}pt] 
      ${h} -- cycle;
     \\draw[draw=black, line width=2pt] (0.1,-0.3) -- (0.1,0.3);
    \\draw[draw=black, line width=2pt] (-0.175,-0.3) -- (-0.175,-0.1) -- (-0.1,0.1) -- (-0.1,0.3);
  `.trim();return new y({codeSvg:c,codeTikz:k,width:2,height:2,nonAxe:w(0,-2.5,0,2.5)})}function it(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"red",n=e?.lineWidth||3,t=e?.borderStyle||"black",i=e?.borderWidth||1,r=[90,-30,-150].map(s=>`${(22*Math.cos(s*Math.PI/180)).toFixed(2)},${(-22*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),d=[90,-30,-150].map(s=>`${(19*Math.cos(s*Math.PI/180)).toFixed(2)},${(-19*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),c=`
    <polygon points="${r}" fill="${o}" stroke="${t}" stroke-width="${i}" />
    <polygon points="${d}" fill="none" stroke="${l}" stroke-width="${n}" />
     <line x1="-4.5" y1="4.5" x2="4.5" y2="-4.5" stroke="black" stroke-width="2"/>
    <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5" stroke="black" stroke-width="2"/>
  `.trim(),$=[90,-30,-150].map(s=>`(${(22*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),h=[90,-30,-150].map(s=>`(${(19*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),k=`
  % panneau de croisement
    \\draw[fill=${o}, draw=${t}, line width=${i}pt] 
      ${$} -- cycle;
    \\draw[draw=${l}, line width=${n}pt] 
      ${h} -- cycle;
     \\draw[draw=black, line width=3pt] (-0.25,0.25) -- (0.25,-0.25);
    \\draw[draw=black, line width=3pt] (-0.25,-0.25) -- (0.25,0.25);
  `.trim(),a=[w(0,-1.2,0,1.2)];return new y({codeSvg:c,codeTikz:k,width:2,height:2,axes:a})}function lt(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"red",n=e?.lineWidth||3,t=e?.borderStyle||"black",i=e?.borderWidth||1,r=[90,-30,-150].map(s=>`${(22*Math.cos(s*Math.PI/180)).toFixed(2)},${(-22*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),d=[90,-30,-150].map(s=>`${(19*Math.cos(s*Math.PI/180)).toFixed(2)},${(-19*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),c=`
    <polygon points="${r}" fill="${o}" stroke="${t}" stroke-width="${i}" />
    <polygon points="${d}" fill="none" stroke="${l}" stroke-width="${n}" />
      <rect x="-3" y="-8" width="6" height="14" rx="3" fill="black" />
    <circle cx="0" cy="-5" r="1.5" fill="red" />
    <circle cx="0" cy="-1" r="1.5" fill="orange" />
    <circle cx="0" cy="3" r="1.5" fill="green" />`.trim(),$=[90,-30,-150].map(s=>`(${(22*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),h=[90,-30,-150].map(s=>`(${(19*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),k=`
  % Panneau feu tricolore
    \\draw[fill=${o}, draw=${t}, line width=${i}pt] 
      ${$} -- cycle;
    \\draw[draw=${l}, line width=${n}pt] 
      ${h} -- cycle;
       \\fill[black, rounded corners=0.15cm] (-0.15,0.4) rectangle (0.15,-0.3);
    \\fill[red] (0,0.25) circle (0.075);
    \\fill[orange] (0,0.05) circle (0.075);
    \\fill[green] (0,-0.15) circle (0.075);
  `.trim(),a=[w(0,-1.2,0,1.2)];return new y({codeSvg:c,codeTikz:k,width:2,height:2,axes:a})}function ot(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"red",n=e?.lineWidth||3,t=e?.borderStyle||"black",i=e?.borderWidth||1,r=[90,-30,-150].map(s=>`${(22*Math.cos(s*Math.PI/180)).toFixed(2)},${(-22*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),d=[90,-30,-150].map(s=>`${(19*Math.cos(s*Math.PI/180)).toFixed(2)},${(-19*Math.sin(s*Math.PI/180)).toFixed(2)}`).join(" "),c=`
    <polygon points="${r}" fill="${o}" stroke="${t}" stroke-width="${i}" />
    <polygon points="${d}" fill="none" stroke="${l}" stroke-width="${n}" />
    <path d="M -3,-7 L 0,-11 L 3,-7 L 3,6 L 0,4 L -3,6 Z" fill="black" />
    <line x1="-6" y1="-1" x2="6" y2="-1" stroke="black" stroke-width="2" />
  `.trim(),$=[90,-30,-150].map(s=>`(${(22*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),h=[90,-30,-150].map(s=>`(${(19*Math.cos(s*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(s*Math.PI/180)/20).toFixed(3)})`).join(" -- "),k=`
  % Panneau de croisement avec une route secondaire
    \\draw[fill=${o}, draw=${t}, line width=${i}pt] 
      ${$} -- cycle;
    \\draw[draw=${l}, line width=${n}pt] 
      ${h} -- cycle;
    \\fill[black] (-0.15,0.35) -- (0,0.55) -- (0.15,0.35) -- (0.15,-0.3) -- (0,-0.2) -- (-0.15,-0.3) -- cycle;
    \\draw[draw=black, line width=2pt] (-0.3,0.05) -- (0.3,0.05);
  `.trim(),a=[w(0,-1.2,0,1.2)];return new y({codeSvg:c,codeTikz:k,width:2,height:2,axes:a})}function nt(e){const o=e?.fillStyle||"red",l=e?.strokeStyle||"red",n=e?.lineWidth||2,i=`${`
        <circle cx="0" cy="0" r="20" fill="${o}" stroke="black" stroke-width="1" />
        <circle cx="0" cy="0" r="18" fill="${o}" stroke="${l}" stroke-width="0" />
        <rect x="-13" y="-3.5" width="26" height="7" fill="white" />
    `.trim()}`,r=`fill=${o}`,d=`draw=${l}`,c=`line width=${n}pt`,$=`
     \\draw[ draw=black, line width=1pt] (0,0) circle (1cm);
   \\draw[${r}, ${d}, ${c}] (0,0) circle (0.95cm);
    \\fill[white] (-0.75, -0.125) rectangle (0.75, 0.125);
  `.trim(),h=[w(-1.2,0,1.2,0),w(0,-1.2,0,1.2)];return new y({codeSvg:i,codeTikz:$,width:2,height:2,axes:h,centre:f(0,0)})}function rt(e){const o=e?.fillStyle||"red",l=e?.strokeStyle||"red",n=e?.lineWidth||2,t=`
     <circle cx="0" cy="0" r="20" fill="${o}" stroke="black" stroke-width="1" />
        <circle cx="0" cy="0" r="18" fill="${o}" stroke="${l}" stroke-width="0" />
        <circle cx="0" cy="0" r="14" fill="white" stroke="${l}" stroke-width="0" />
    `.trim(),i=`fill=${o}`,r=`draw=${l}`,d=`line width=${n}pt`,c=`
     \\draw[ draw=black, line width=1pt] (0,0) circle (1cm);
   \\draw[${i}, ${r}, ${d}] (0,0) circle (0.95cm);
    \\fill[white] (-0,0) circle (0.7cm);
  `.trim(),$=[];for(let h=0;h<10;h++){const k=w(-1.2*Math.cos(Math.PI*(h*180/10)/180),-1.2*Math.sin(Math.PI*(h*180/10)/180),1.2*Math.cos(Math.PI*(h*180/10)/180),1.2*Math.sin(Math.PI*(h*180/10)/180));$.push(k)}return new y({codeSvg:t,codeTikz:c,width:2,height:2,nbAxes:Number.POSITIVE_INFINITY,axes:$,centre:f(0,0)})}function ct(e){const o=e?.fillStyle||"white",l=e?.strokeStyle||"black",n=e?.lineWidth||2,t=e?.diagonalColor||"gray",i=`
    <circle cx="0" cy="0" r="20" fill="${o}" stroke="${l}" stroke-width="${n}" />
    <line x1="-15" y1="15" x2="15" y2="-15" stroke="${t}" stroke-width="2" />
  `.trim(),r=`fill=${o}`,d=`draw=${l}`,c=`line width=${n}pt`,h=`
    \\draw[${r}, ${d}, ${c}] (0,0) circle (1cm);
    \\draw[${t}, line width=1pt] (-0.75,-0.75) -- (0.75,0.75);
  `.trim(),k=[w(-1,-1,1,1),w(-1,1,1,-1)];return new y({codeSvg:i,codeTikz:h,width:2,height:2,axes:k,centre:f(0,0)})}function st(e){const o=e?.fillStyle||"blue",l=e?.strokeStyle||"red",n=e?.lineWidth||5,t="red",i=`
    <circle cx="0" cy="0" r="20" stroke="black" stroke-width="1" />
    <circle cx="0" cy="0" r="17" fill="${o}" stroke="${l}" stroke-width="${n}" />
    <line x1="-13" y1="-13" x2="13" y2="13" stroke="${t}" stroke-width="3" />
    <line x1="-13" y1="13" x2="13" y2="-13" stroke="${t}" stroke-width="3" />
  `.trim(),r=`fill=${o}`,d=`draw=${l}`,c=`line width=${n*1.1}pt`,$="red",h=`
      \\draw[draw=black, line width=1pt] (0,0) circle (1cm);
    \\draw[${r}, ${d}, ${c}] (0,0) circle (0.9cm);
    \\draw[${$}, line width=5pt] (-0.7,-0.7) -- (0.7,0.7);
    \\draw[${$}, line width=5pt] (-0.7,0.7) -- (0.7,-0.7);
  `.trim(),k=[w(-1.2,0,1.2,0),w(0,-1.2,0,1.2),w(-1,-1,1,1),w(-1,1,1,-1)];return new y({codeSvg:i,codeTikz:h,width:2,height:2,axes:k,centre:f(0,0)})}export{v as A,C as B,T as C,A as D,D as E,E as F,R as G,Z as H,_ as I,B as J,O as K,ot as L,et as M,nt as a,st as b,H as c,N as d,X as e,Y as f,it as g,U as h,tt as i,lt as j,G as k,V as l,rt as m,J as n,q as o,L as p,W as q,F as r,I as s,z as t,P as u,p as v,j as w,K as x,Q as y,ct as z};
