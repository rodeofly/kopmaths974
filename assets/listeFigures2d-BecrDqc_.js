import{k as d,p as m,r as b}from"./embellissements-BYV7mIDn.js";import{F as $}from"./Figures2D-C1IYLm7-.js";import{z as R,a as V,b as Z,m as B,x as G,y as H,h as K,i as J,g as N,d as O,j as Q,k as X,n as Y,f as U,e as _,c as ee,l as h,w as te,u as ne,v as re,s as oe,r as ie,t as ae,q as ce,A as x,o as ue,p as le,B as se,C as P,D as de,E as $e,F as W,G as ge,H as w,I as q,J as he,K as A,L as me,M as fe}from"./panneaux-BCuKbHaQ.js";function T(n){const r={0:2,1:1,2:0,3:1,4:0,5:0,6:0,7:0,8:2,9:0};if(n<0||n>9||n!==(n|0))throw new Error("Le paramètre doit être un entier de 0 à 9");return r[n]}function pe(n){const r={0:m(0,0),1:m(2,0),2:m(0,0),3:null,4:null,5:m(0,0),6:null,7:null,8:m(0,0),9:null};if(n<0||n>9||n!==(n|0))throw new Error("Le paramètre doit être un entier de 0 à 9");return r[n]}function ye(n,r={x:0,y:0,fillStyle:"red",strokeStyle:"black",lineWidth:2}){if(n<0||n>9||n!==(n|0))throw new Error("Le paramètre doit être un entier de 0 à 9");const{x:o=0,y:t=0,fillStyle:e,strokeStyle:u,lineWidth:a}=r,i=[[1,1,1,1,1,1,0],[0,1,1,0,0,0,0],[1,1,0,1,1,0,1],[1,1,1,1,0,0,1],[0,1,1,0,0,1,1],[1,0,1,1,0,1,1],[1,0,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,1]][n],c=[{tx:0,ty:-35,rot:0},{tx:17.5,ty:-17.5,rot:90},{tx:17.5,ty:17.5,rot:90},{tx:0,ty:35,rot:0},{tx:-17.5,ty:17.5,rot:90},{tx:-17.5,ty:-17.5,rot:90},{tx:0,ty:0,rot:0}],l=[],s=[];return c.forEach(({tx:f,ty:p,rot:y},M)=>{const S=!!i[M];if(S&&l.push(`<polygon points="-15,-2.5 15,-2.5 17.5,0 15,2.5 -15,2.5 -17.5,0" transform="translate(${f},${p})${y?` rotate(${y})`:""}"/>`),S){const I=[{x:-15,y:-2.5},{x:15,y:-2.5},{x:17.5,y:0},{x:15,y:2.5},{x:-15,y:2.5},{x:-17.5,y:0}],L=y*Math.PI/180,z=Math.cos(L),v=Math.sin(L),j=I.map(k=>{const E=k.x*z-k.y*v,C=k.x*v+k.y*z,D=(o+f+E)/20,F=(-t-p-C)/20;return`(${D.toFixed(2)},${F.toFixed(2)})`}).join(" -- ");s.push(`\\draw[fill=${e}, draw=${u}, line width=${a}pt] ${j} -- cycle;`)}}),{svg:`<g transform="translate(${o},${t})">${l.join("")}</g>`,tikz:s.join(`
`)}}function g(n){const r=n?.fillStyle||"green",o=n?.strokeStyle||"black",t=n?.lineWidth||2,e=n?.opacite??1,u=n?.chiffre??0,{svg:a,tikz:i}=ye(u,{x:0,y:0,fillStyle:r,strokeStyle:o,lineWidth:t}),c=a.replaceAll(/<polygon /g,`<polygon fill="${r}" stroke="${o}" stroke-width="${t}" opacity="${e}" `),l=i.replaceAll(/\\draw\[fill=red\]/g,`\\draw[fill=${r}, draw=${o}, line width=${t}pt]`);return new $({codeSvg:c,codeTikz:l,width:2,height:6,opacite:e,centre:pe(u),axes:T(u)===0?[]:T(u)===1?[d(m(-2.5,0),m(2.5,0))]:[d(m(-2.5,0),m(2.5,0)),d(m(0,-2.5),m(0,2.5))],nonAxe:u===4||u===7||u===2||u===5?d(-2,0,2,0):u===6||u===9?d(m(0,-4*(u===6?-1:1)),m(0,4*(u===6?-1:1))):void 0})}function ke(n){const r=g({chiffre:8}),o=r.copy(Date.now().toString());o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,centre:m(0,0),axes:[d(-2,0,2,0),d(0,-2,0,2)]})}function we(n){const r=g({chiffre:8}),o=g({chiffre:3});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,axes:[d(-2,0,2,0)]})}function xe(n){const r=g({chiffre:0}),o=g({chiffre:3});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${o.svg(20)}
${r.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,axes:[d(-2,0,2,0)]})}function Se(n){const r=g({chiffre:5}),o=g({chiffre:2});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,axes:[d(0,-2,0,2)]})}function Le(n){const r=g({chiffre:5}),o=g({chiffre:7});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,nonAxe:d(0,-4,0,4)})}function ze(n){const r=g({chiffre:3}),o=g({chiffre:1});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,axes:[d(-2,0,2,0)]})}function ve(n){const r=g({chiffre:2}),o=g({chiffre:5});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,axes:[d(0,-2,0,2)]})}function be(n){const r=g({chiffre:3}),o=g({chiffre:7});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,nonAxe:d(0,-4,0,4)})}function Pe(n){const r=g({chiffre:6}),o=g({chiffre:2});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,nonAxe:d(0,-4,0,4)})}function We(n){const r=g({chiffre:2}),o=g({chiffre:4});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,nonAxe:d(0,-4,0,4)})}function qe(n){const r=g({chiffre:6}),o=g({chiffre:9});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,centre:m(0,0),nonAxe:d(0,-4,0,4)})}function Ae(n){const r=g({chiffre:0}),o=g({chiffre:8});o.translate(-1.2,0),r.translate(1.2,0);const t=`\\begin{scope}
  ${r.tikz()}
${o.tikz()}\\end{scope}`,e=`<g>${r.svg(20)}
${o.svg(20)}</g>`;return new $({codeSvg:e,codeTikz:t,width:6,height:6,opacite:n?.opacite??1,axes:[d(-2,0,2,0)]})}function Te(n){const r=n?.fillStyle||"black",o=n?.strokeStyle||"black",t=n?.lineWidth||6,e=n?.largeur||3,u=n?.hauteur||4,a=n?.opacite||1,i=e*20,c=u*20,s=`
    <polygon points="${[`${-i/2},${c/2}`,`0,${-c/2}`,`${i/2},${c/2}`,`${i*7/16},${c/2}`,`0,${-c/3}`,`${-i*7/16},${c/2}`].join(" ")}" fill="${r}" stroke="${o}" stroke-width="${t}"  stroke-linejoin="round" />
    <line x1="${-i/3}" y1="${c/5}" x2="${i/3}" y2="${c/5}" stroke="${o}" stroke-width="${t*1.5}" />
  `.trim(),f=[`(${-e/2},${-u/2})`,`(0,${u/2})`,`(${e/2},${-u/2})`,`(${e*7/16},${-u/2})`,`(0,${u/3})`,`(${-e*7/16},${-u/2})`].join(" -- "),p=`
    % Lettre A
   \\draw[fill=${r}, draw=${o}, line width=${t}pt, , rounded corners, line cap=round]
        ${f} -- cycle;
    \\draw[draw=${o}, line width=${t*1.5}pt,, rounded corners, line cap=round]
        (${-e/4},${-u/5}) -- (${e/4},${-u/5});
  `.trim(),y=[d(0,-u/2,0,u/2)];return new $({codeSvg:s,codeTikz:p,width:e,height:u,axes:y,opacite:a})}function Me(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=i/4,l=`
        <path d="
            M ${-a/2},${i/2}
            L ${-a/2},${-i/2}
            L 0,${-i/2}
            A ${c},${c} 0 1,1 0,0
            L ${-a/2},0
            L 0,0
            A ${c},${c} 0 1,1 0,${i/2}
            Z
        " fill="none" stroke="${r}" stroke-width="${o}" stroke-linejoin="round" />
    `.trim(),s=`
            % Lettre B
            \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
                    (${-t/2},${-e/2}) -- (${-t/2},${e/2})
                    -- (0,${e/2})
                    arc[start angle=90, end angle=-90, radius=${c/20}cm]
                    -- (0,0)
                    -- (${-t/2},0)
                    -- (0,0)
                    arc[start angle=90, end angle=-90, radius=${c/20}cm]
                    -- cycle;
    `.trim(),f=[d(-t/1.5,0,t/1.5,0)];return new $({codeSvg:l,codeTikz:s,width:t,height:e,axes:f,opacite:u})}function Ie(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||2.8,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=i/2,l=`
                <path d="
                        M ${a/2},${-i/2}
                        L ${a/4},${-i/2}
                        A ${c*3/4},${c} 0 1,0 ${a/4},${i/2}
                        L ${a/2},${i/2}
                " fill="none" stroke="${r}" stroke-width="${o}"  stroke-linecap="round"/>
        `.trim(),s=`
                            % Lettre C
                            \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
                                            (${t/3},${e/2})
                                            -- (0,${e/2})
                                            arc[start angle=90, end angle=270, x radius=${c*3/80}cm, y radius=${c/20}cm]
                                            -- (0,${-e/2})
                                            -- (${t/3},${-e/2});
            `.trim(),f=[d(-t/2,0,t/2,0)];return new $({codeSvg:l,codeTikz:s,width:t,height:e,axes:f,opacite:u})}function je(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||2.5,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=i/2,l=`
        <path d="
            M ${-a/2},${i/2}
            L ${-a/2},${-i/2}
            L 0,${-i/2}
            A ${a/2},${c} 0 1,1 0,${i/2}
            Z
        " fill="none" stroke="${r}" stroke-width="${o}" stroke-linejoin="round"/>
    `.trim(),s=`
                % Lettre D
                \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
                        (${-t/2},${-e/2}) -- (${-t/2},${e/2})
                        -- (0,${e/2})
                        arc[start angle=90, end angle=-90, x radius=${t/2}cm, y radius=${c/20}cm]
                        -- cycle;
        `.trim(),f=[d(-t/2,0,t/2,0)];return new $({codeSvg:l,codeTikz:s,width:t,height:e,axes:f,opacite:u})}function Ee(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||2.5,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=`
                <path d="
                        M ${a/2},${-i/2}
                        L ${-a/2},${-i/2}
                        L ${-a/2},${i/2}
                        L ${a/2},${i/2}
                        M ${-a/2},0
                        L ${a/4},0
                " fill="none" stroke="${r}" stroke-width="${o}"  stroke-linejoin="round" stroke-linecap="round" />
        `.trim(),l=`
                % Lettre E
                \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
                        (${t/2},${e/2}) -- (${-t/2},${e/2})
                        -- (${-t/2},${-e/2}) -- (${t/2},${-e/2});
                \\draw[draw=${r}, line width=${o}pt, rounded corners, line cap=round]
                        (${-t/2},0) -- (${t/4},0);
        `.trim(),s=[d(-t/2,0,t/2,0)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u})}function Ce(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||2.5,e=n?.hauteur||3.8,u=n?.opacite||1,a=t*20,i=e*20,c=`
        <path d="
            M ${-a/2},${i/2}
            L ${-a/2},${-i/2}
            L ${a/2},${-i/2}
            M ${-a/2},0
            L ${a/4},0
        " fill="none" stroke="${r}" stroke-width="${o}"  stroke-linejoin="round" stroke-linecap="round"/>
    `.trim(),l=`
                    % Lettre F
                    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
                                    (${-t/2},${-e/2}) -- (${-t/2},${e/2})
                                    -- (${t/2},${e/2});
                    \\draw[draw=${r}, line width=${o}pt, rounded corners, line cap=round]
                                    (${-t/2},0) -- (${t/4},0);
    `.trim();return new $({codeSvg:c,codeTikz:l,width:t,height:e,opacite:u,nonAxe:d(3,0,-3,0)})}function De(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||2.5,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=a/1.6,l=a/4,s=i/8,f=`
                <path d="
                        M ${l+a/3},${-i/3+s}
                        A ${c},${c} 0 1,0 ${l+a/2},${s}
                        L ${a/4},${s}
                " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round" stroke-linejoin="round"/>
        `.trim(),p=`
          % Lettre G
          \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${t/2},${e/3-s/10})
            arc[start angle=60, end angle=360, x radius=${c/20}cm, y radius=${c/20}cm]
            -- (${t/4},${-s/10});
        `.trim();return new $({codeSvg:f,codeTikz:p,width:t+l/10,height:e+s/20,opacite:u,nonAxe:null}).dilate({x:1,y:1.1}).translate(0,.7)}function Fe(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=`
        <path d="
            M ${-a*.4},${i/2}
            L ${-a*.4},${-i/2}
            M ${a*.4},${i/2}
            L ${a*.4},${-i/2}
            M ${-a*.4},0
            L ${a*.4},0
        " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round"/>
    `.trim(),l=`
        % Lettre H
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},${-e/2}) -- (${-t/2},${e/2});
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${t/2},${-e/2}) -- (${t/2},${e/2});
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},0) -- (${t/2},0);
    `.trim(),s=[d(-t/2,0,t/2,0),d(0,-e/2,0,e/2)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u,centre:m(0,0)})}function Re(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||1,e=n?.hauteur||3.4,u=n?.opacite||1,a=t*20,i=e*20,c=`
        <path d="
            M ${-a/2},${i/2}
            L ${a/2},${i/2}
            M 0,${i/2}
            L 0,${-i/2}
            M ${-a/2},${-i/2}
            L ${a/2},${-i/2}
        " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round"/>
    `.trim(),l=`
        % Lettre I
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},${e/2}) -- (${t/2},${e/2});
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (0,${e/2}) -- (0,${-e/2});
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},${-e/2}) -- (${t/2},${-e/2});
    `.trim(),s=[d(0,-e/2,0,e/2),d(-t/2,0,t/2,0)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u,centre:m(0,0)})}function Ve(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||2,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=a/2,l=`
        <path d="
            M ${-a/2},${i/2-a/2}
            A ${c},${c} 1 0,0 ${a/2},${i/2-a/2}
            L ${a/2},${-i/2}
        " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round"/>
    `.trim(),s=`
        % Lettre J
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},${-e/2+t/2})
            arc[start angle=-180, end angle=0, radius=${c/20}cm]
            -- (${t/2},${e/2});
    `.trim();return new $({codeSvg:l,codeTikz:s,width:t,height:e,opacite:u,nonAxe:d(-3,0,3,0)})}function Ze(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||2.5,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=`
        <path d="
            M ${-a/2},${i/2}
            L ${-a/2},${-i/2}
            M ${-a/2},0
            L ${a*.4},${i/2}
            M ${-a/2},0
            L ${a*.4},${-i/2}
        " fill="none" stroke="${r}" stroke-width="${o}"  stroke-linecap="round" />
    `.trim(),l=`
        % Lettre K
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},${-e/2}) -- (${-t/2},${e/2});
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t*.4},0) -- (${t*.4},${e*.5});
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t*.4},0) -- (${t*.4},${-e*.5});
    `.trim(),s=[d(-t/2,0,t/2,0)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u})}function Be(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||2.5,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=`
        <path d="
            M ${-a/2},${-i/2}
            L ${-a/2},${i/2}
            L ${a/2},${i/2}
        " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round" stroke-linejoin="round"/>
    `.trim(),l=`
        % Lettre L
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},${e/2}) -- (${-t/2},${-e/2})
            -- (${t/2},${-e/2});
    `.trim();return new $({codeSvg:c,codeTikz:l,width:t,height:e,opacite:u,nonAxe:d(-3,0,3,0)})}function Ge(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=`
        <path d="
            M ${-a/2},${i/2}
            L ${-a/2},${-i/2}
            L 0,${i/4}
            L ${a/2},${-i/2}
            L ${a/2},${i/2}
        " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round" stroke-linejoin="round"/>
    `.trim(),l=`
        % Lettre M
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},${-e/2}) -- (${-t/2},${e/2})
            -- (0,${e/4}) -- (${t/2},${e/2})
            -- (${t/2},${-e/2});
    `.trim(),s=[d(0,-e/2,0,e/2)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u})}function He(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=`
           
            <path d="
                M ${-a/2},${i/2}
                L ${-a/2},${-i/2}
                L ${a/2},${i/2}
                L ${a/2},${-i/2}
            " fill="none" stroke="${r}" stroke-width="${o}"  stroke-linecap="round" stroke-linejoin="round"/>
    `.trim(),l=`
        % Lettre N
        \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
            (${-t/2},${-e/2}) -- (${-t/2},${e/2})
            -- (${t/2},${-e/2}) -- (${t/2},${e/2});
    `.trim();return new $({codeSvg:c,codeTikz:l,width:t,height:e,opacite:u,centre:m(0,0),nonAxe:d(0,-4,0,4)})}function Ke(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=`
    <ellipse
      cx="0"
      cy="0"
      rx="${a/2}"
      ry="${i/2}"
      fill="none"
      stroke="${r}"
      stroke-width="${o}"
    />
  `.trim(),l=`
    % Lettre O
    \\draw[fill=none, draw=${r}, line width=${o}pt]
      (0,0) ellipse [x radius=${t/2}cm, y radius=${e/2}cm];
  `.trim(),s=[d(-t/2,0,t/2,0),d(0,-e/2,0,e/2)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u,centre:m(0,0)})}function Je(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||3.8,u=n?.opacite||1,a=t*20,i=e*20,c=i/4,l=`
    <path d="
      M ${-a/2},${i/2}
      L ${-a/2},${-i/2}
      L 0,${-i/2}
      A ${c},${c} 0 1,1 0,0
      L ${-a/2},0
      Z
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round" stroke-linejoin="round"/>
  `.trim(),s=`
    % Lettre P
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${-e/2}) -- (${-t/2},${e/2})
      -- (0,${e/2})
      arc[start angle=90, end angle=-90, radius=${c/20}cm]
      -- (${-t/2},0) -- cycle;
  `.trim();return new $({codeSvg:l,codeTikz:s,width:t,height:e,opacite:u,nonAxe:d(2.5,0,-2.5,0)})}function Ne(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=`
    <ellipse
      cx="0"
      cy="0"
      rx="${a/2}"
      ry="${i/2}"
      fill="none"
      stroke="${r}"
      stroke-width="${o}"
    />
    <line
      x1="${a/4}"
      y1="${i/4}"
      x2="${a/2}"
      y2="${i/2}"
      stroke="${r}"
      stroke-width="${o}"
      stroke-linecap="round"
    />
  `.trim(),l=`
    % Lettre Q
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (0,0) ellipse [x radius=${t/2}cm, y radius=${e/2}cm];
    \\draw[draw=${r}, line width=${o}pt, line cap=round]
      (${t/4},${-e/4}) -- (${t/2},${-e/2});
  `.trim();return new $({codeSvg:c,codeTikz:l,width:t,height:e,opacite:u,nonAxe:d(-3,3.6,3,-3.6)})}function Oe(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=i/4,l=`
    <path d="
      M ${-a/2},${i/2}
      L ${-a/2},${-i/2}
      L 0,${-i/2}
      A ${c},${c} 0 1,1 0,0
      L ${-a/2},0
      M ${-a/5},0
      L ${a/3},${i/2-o/4}
    " fill="none" stroke="${r}" stroke-width="${o}" />
  `.trim(),s=`
    % Lettre R
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${-e/2}) -- (${-t/2},${e/2})
      -- (0,${e/2})
      arc[start angle=90, end angle=-90, radius=${c/20}cm]
      -- (${-t/2},0);
    \\draw[draw=${r}, line width=${o}pt]
      (0,0) -- (${t/2},${-e/2});
  `.trim();return new $({codeSvg:l,codeTikz:s,width:t,height:e,opacite:u,nonAxe:d(-3,0,3,0)})}function Qe(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=`
    <path d="
      M ${-a/2},${-i/2}
      L ${a/2},${-i/2}
      M 0,${-i/2}
      L 0,${i/2}
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round"/>
  `.trim(),l=`
    % Lettre T
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${e/2}) -- (${t/2},${e/2});
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (0,${e/2}) -- (0,${-e/2});
  `.trim(),s=[d(0,-e/2,0,e/2)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u})}function Xe(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=a/2,l=`
    <path d="
      M ${-a/2},${-i/2}
      L ${-a/2},${i/2-c}
      A ${c},${c} 0 0,0 ${a/2},${i/2-c}
      L ${a/2},${-i/2}
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round"/>
  `.trim(),s=`
    % Lettre U
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${e/2}) -- (${-t/2},${-e/2+t/2})
      arc[start angle=-180, end angle=0, radius=${c/20}cm]
      -- (${t/2},${e/2});
  `.trim(),f=[d(0,-e/2,0,e/2)];return new $({codeSvg:l,codeTikz:s,width:t,height:e,axes:f,opacite:u})}function Ye(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=`
    <path d="
      M ${-a/2},${-i/2}
      L 0,${i/2}
      L ${a/2},${-i/2}
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round" stroke-linejoin="round"/>
  `.trim(),l=`
    % Lettre V
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${e/2}) -- (0,${-e/2}) -- (${t/2},${e/2});
  `.trim(),s=[d(0,-e/2,0,e/2)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u})}function Ue(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=`
    <path d="
      M ${-a/2},${-i/2}
      L ${-a/4},${i/2}
      L 0,${-i/4}
      L ${a/4},${i/2}
      L ${a/2},${-i/2}
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round" stroke-linejoin="round"/>
  `.trim(),l=`
    % Lettre W
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${e/2}) -- (${-t/4},${-e/2})
      -- (0,${e/4}) -- (${t/4},${-e/2})
      -- (${t/2},${e/2});
  `.trim(),s=[d(0,-e/2,0,e/2)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u})}function _e(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=`
    <path d="
      M ${-a/2},${i/2}
      L ${a/2},${-i/2}
      M ${-a/2},${-i/2}
      L ${a/2},${i/2}
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round"/>
  `.trim(),l=`
    % Lettre X
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${e/2}) -- (${t/2},${-e/2});
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${-e/2}) -- (${t/2},${e/2});
  `.trim(),s=[d(0,-e/2,0,e/2),d(-t/2,0,t/2,0)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u,centre:m(0,0)})}function et(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||3.8,u=n?.opacite||1,a=t*20,i=e*20,c=`
    <path d="
      M ${-a/2},${-i/2}
      L 0,0
      L ${a/2},${-i/2}
      M 0,0
      L 0,${i/2}
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round"/>
  `.trim(),l=`
    % Lettre Y
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t/2},${e/2}) -- (0,0) -- (${t/2},${e/2});
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (0,0) -- (0,${-e/2});
  `.trim(),s=[d(0,-e/2,0,e/2)];return new $({codeSvg:c,codeTikz:l,width:t,height:e,axes:s,opacite:u})}function tt(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||3.6,u=n?.opacite||1,a=t*20,i=e*20,c=`
    <path d="
      M ${-a*.4},${-i/2}
      L ${a*.4},${-i/2}
      L ${-a*.4},${i/2}
      L ${a*.4},${i/2}
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linejoin="round" />
  `.trim(),l=`
    % Lettre Z
    \\draw[fill=none, draw=${r}, line width=${o}pt, rounded corners, line cap=round]
      (${-t*.4},${e*.5}) -- (${t*.4},${e*.5})
      -- (${-t*.4},${-e*.5}) -- (${t*.4},${-e*.5});
  `.trim();return new $({codeSvg:c,codeTikz:l,width:t,height:e,opacite:u,centre:m(0,0),nonAxe:d(1.2,1.8,-1.2,-1.8)})}function nt(n){const r=n?.strokeStyle||"black",o=n?.lineWidth||8,t=n?.largeur||3,e=n?.hauteur||4,u=n?.opacite||1,a=t*20,i=e*20,c=a/2,l=`
    <path d="
      M ${a/2},${-i/4}
      A ${c},${c*.8} 0 0,0 0,${-i/2}
      A ${c},${c} 0 0,0 ${-a/2},${-i/4}
      A ${c},${c*.8} 0 0,0 0,0
      A ${c},${c*.8} 0 0,1 ${a/2},${i/4}
      A ${c},${c} 0 0,1 0,${i/2}
      A ${c},${c*.8} 0 0,1 ${-a/2},${i/4}
    " fill="none" stroke="${r}" stroke-width="${o}" stroke-linecap="round" stroke-linejoin="round" />
  `.trim(),s=`
    % Lettre S
    \\draw[fill=none, draw=${r}, line width=${o}pt, line cap=round]
      (${t/2},${e/4}) arc[start angle=0, end angle=90, x radius=${c/20}cm, y radius=${e/4}cm]
       arc[start angle=90, end angle=180, x radius=${c/20}cm, y radius=${e/4}cm]
       arc[start angle=180, end angle=270, x radius=${c/20}cm, y radius=${e/4}cm]
       arc[start angle=90, end angle=0, x radius=${c/20}cm, y radius=${e/4}cm]
       arc[start angle=0, end angle=-90, x radius=${c/20}cm, y radius=${e/4}cm]
       arc[start angle=-90, end angle=-180, x radius=${c/20}cm, y radius=${e/4}cm];
  `.trim();return new $({codeSvg:l,codeTikz:s,width:t,height:e,opacite:u,centre:m(0,0),nonAxe:d(-t,0,t,0)})}const at=[{numero:1,name:"fin de limitation",type:"panneau",style:"disque",figure2d:R},{numero:2,name:"sens interdit",type:"panneau",style:"disque",figure2d:V},{numero:3,name:"interdiction de s'arrêter",type:"panneau",style:"disque",figure2d:Z},{numero:4,name:"interdiction de circuler à tout véhicule",type:"panneau",style:"disque",figure2d:B},{numero:5,name:"danger : céder le passage",type:"panneau",style:"triangle",figure2d:G},{numero:6,name:"danger : circulation à double sens",type:"panneau",style:"triangle",figure2d:H},{numero:7,name:"danger : retrécissement de chaussée",type:"panneau",style:"triangle",figure2d:K},{numero:8,name:"danger : retrécissement de chaussée",type:"panneau",style:"triangle",figure2d:J},{numero:9,name:"danger : croisement à priorité à droite",type:"panneau",style:"triangle",figure2d:N},{numero:10,name:"fin de route prioritaire",type:"panneau",style:"losange",figure2d:O},{numero:11,name:"danger : feu tricolore",type:"panneau",style:"triangle",figure2d:Q},{numero:12,name:"voie sans issue",type:"panneau",style:"carre",figure2d:X},{numero:13,name:"parking",type:"panneau",style:"carre",figure2d:Y},{numero:14,name:"stop",type:"panneau",style:"octogone",figure2d:U},{numero:15,name:"stationnement interdit",type:"panneau",style:"disque",figure2d:_},{numero:16,name:"route prioritaire",type:"panneau",style:"losange",figure2d:ee},{numero:17,name:"lego2x2",type:"lego",figure2d:h,options:{nx:2,ny:2}},{numero:18,name:"lego3x2",type:"lego",figure2d:h,options:{nx:3,ny:2}},{numero:19,name:"lego4x2",type:"lego",figure2d:h,options:{nx:4,ny:2}},{numero:20,name:"lego5x2",type:"lego",figure2d:h,options:{nx:5,ny:2}},{numero:21,name:"lego6x2",type:"lego",figure2d:h,options:{nx:6,ny:2}},{numero:22,name:"lego8x2",type:"lego",figure2d:h,options:{nx:8,ny:2}},{numero:23,name:"lego5x4",type:"lego",figure2d:h,options:{nx:5,ny:4}},{numero:24,name:"lego6x4",type:"lego",figure2d:h,options:{nx:6,ny:4}},{numero:25,name:"lego8x4",type:"lego",figure2d:h,options:{nx:8,ny:4}},{numero:26,name:"lego3x3",type:"lego",figure2d:h,options:{nx:3,ny:3}},{numero:27,name:"lego4x4",type:"lego",figure2d:h,options:{nx:4,ny:4}},{numero:28,name:"lego4x3",type:"lego",figure2d:h,options:{nx:4,ny:3}},{numero:29,name:"lego5x3",type:"lego",figure2d:h,options:{nx:5,ny:3}},{numero:30,name:"lego6x3",type:"lego",figure2d:h,options:{nx:6,ny:3}},{numero:31,name:"lego8x3",type:"lego",figure2d:h,options:{nx:8,ny:3}},{numero:32,name:"lego8x6",type:"lego",figure2d:h,options:{nx:8,ny:6}},{numero:33,name:"lego2x1",type:"lego",figure2d:h,options:{nx:2,ny:1}},{numero:34,name:"lego3x1",type:"lego",figure2d:h,options:{nx:3,ny:1}},{numero:35,name:"lego4x1",type:"lego",figure2d:h,options:{nx:4,ny:1}},{numero:36,name:"lego5x1",type:"lego",figure2d:h,options:{nx:5,ny:1}},{numero:37,name:"lego6x1",type:"lego",figure2d:h,options:{nx:6,ny:1}},{numero:38,name:"lego8x1",type:"lego",figure2d:h,options:{nx:8,ny:1}},{numero:39,name:"lego8x8",type:"lego",figure2d:h,options:{nx:8,ny:8}},{numero:40,name:"triangle quelconque",type:"geometrique",figure2d:te,options:{opacite:.8}},{numero:41,name:"pentagone régulier",type:"geometrique",figure2d:ne,options:{rayon:2,opacite:.7}},{numero:42,name:"etoile à 5 branches",type:"geometrique",figure2d:re,options:{rayonInterieur:.7,rayonExterieur:1.5}},{numero:43,name:"cerf-volant",type:"geometrique",figure2d:oe,options:{largeur:b(2,5)/2,hauteur:b(32,40)/10,opacite:.8}},{numero:44,name:"aile delta",type:"geometrique",figure2d:ie,options:{base:4,hauteur:2}},{numero:45,name:"trapèze isocèle",type:"geometrique",figure2d:ae,options:{baseInferieure:4,baseSuperieure:2,hauteur:2.5}},{numero:46,name:"hexagone non régulier",type:"geometrique",figure2d:ce,options:{rayonHorizontal:2,rayonVertical:1}},{numero:47,name:"croissant de lune 1",type:"geometrique",figure2d:x,options:{rayonExterieur:3,rayonInterieur:4}},{numero:48,name:"croissant de lune 2",type:"geometrique",figure2d:x,options:{rayonExterieur:3,rayonInterieur:5.5,angle:90}},{numero:49,name:"ovale",type:"geometrique",figure2d:ue},{numero:50,name:"pacman",type:"geometrique",figure2d:le},{numero:51,name:"fer à cheval",type:"geometrique",figure2d:se,options:{rayonInterieur:1.5,rayonExterieur:2}},{numero:52,name:"parallélogramme 1",type:"geometrique",figure2d:P,options:{base:4,hauteur:2,angle:60}},{numero:53,name:"parallélogramme 2",type:"geometrique",figure2d:P,options:{base:4,hauteur:3,angle:80}},{numero:54,name:"croissant de lune 4",type:"geometrique",figure2d:x,options:{rayonExterieur:3.5,rayonInterieur:3,angle:45}},{numero:55,name:"coeur",type:"geometrique",figure2d:de,options:{base:3}},{numero:56,name:"ogive",type:"geometrique",figure2d:$e,options:{hauteur:2,opacite:.5}},{numero:57,name:"etoile à 4 branches 1",type:"geometrique",figure2d:W,options:{rayonExterieur:2,rayonInterieur:.5}},{numero:58,name:"etoile à 4 branches 2",type:"geometrique",figure2d:W,options:{rayonExterieur:2,rayonInterieur:1}},{numero:59,name:"croix rouge",type:"geometrique",figure2d:ge,options:{}},{numero:60,name:"rectangle 1",type:"geometrique",figure2d:w,options:{angle:45,coinsArrondis:!0,fillStyle:"green",opacite:.7}},{numero:61,name:"rectangle 2",type:"geometrique",figure2d:w,options:{angle:-20,coinsArrondis:!0,largeur:3,hauteur:2,fillStyle:"blue",opacite:.5}},{numero:62,name:"rectangle 3",type:"geometrique",figure2d:w},{numero:63,name:"rectangle 4",type:"geometrique",figure2d:w,options:{angle:20,hauteur:1,largeur:4,fillStyle:"yellow",opacite:.9}},{numero:64,name:"losange 1",type:"geometrique",figure2d:q,options:{fillStyle:"cyan"}},{numero:65,name:"losange 2",type:"geometrique",figure2d:q,options:{fillStyle:"magenta",coinsArrondis:!0,hauteur:3,largeur:5,angle:45,opacite:.5}},{numero:66,name:"triangle isocèle",type:"geometrique",figure2d:he,options:{fillStyle:"purple",opacite:.6}},{numero:67,name:"triangle équilatéral 1",type:"geometrique",figure2d:A,options:{fillStyle:"orange",base:4,opacite:.6}},{numero:68,name:"danger : croisement avec une route secondaire",type:"panneau",figure2d:me},{numero:69,name:"triangle équilatéral 2",type:"geometrique",figure2d:A,options:{fillStyle:"red",base:4,opacite:.6,angle:-30}},{numero:70,name:"rétrécissement e chaussée 3",type:"panneau",figure2d:fe},{numero:71,name:"lettre A",type:"lettre",figure2d:Te},{numero:72,name:"lettre B",type:"lettre",figure2d:Me},{numero:73,name:"lettre C",type:"lettre",figure2d:Ie},{numero:74,name:"lettre D",type:"lettre",figure2d:je},{numero:75,name:"lettre E",type:"lettre",figure2d:Ee},{numero:76,name:"lettre F",type:"lettre",figure2d:Ce},{numero:77,name:"lettre G",type:"lettre",figure2d:De},{numero:78,name:"lettre H",type:"lettre",figure2d:Fe},{numero:79,name:"lettre I",type:"lettre",figure2d:Re},{numero:80,name:"lettre J",type:"lettre",figure2d:Ve,options:{base:4,fillStyle:"red"}},{numero:81,name:"lettre K",type:"lettre",figure2d:Ze},{numero:82,name:"lettre L",type:"lettre",figure2d:Be},{numero:83,name:"lettre M",type:"lettre",figure2d:Ge},{numero:84,name:"lettre N",type:"lettre",figure2d:He},{numero:85,name:"lettre O",type:"lettre",figure2d:Ke},{numero:86,name:"lettre P",type:"lettre",figure2d:Je},{numero:88,name:"lettre Q",type:"lettre",figure2d:Ne},{numero:88,name:"lettre R",type:"lettre",figure2d:Oe},{numero:89,name:"lettre S",type:"lettre",figure2d:nt,options:{base:4,fillStyle:"red"}},{numero:90,name:"lettre T",type:"lettre",figure2d:Qe},{numero:91,name:"lettre U",type:"lettre",figure2d:Xe},{numero:92,name:"lettre V",type:"lettre",figure2d:Ye},{numero:93,name:"lettre W",type:"lettre",figure2d:Ue},{numero:94,name:"lettre X",type:"lettre",figure2d:_e},{numero:95,name:"lettre Y",type:"lettre",figure2d:et},{numero:96,name:"lettre Z",type:"lettre",figure2d:tt},{numero:97,name:"chiffre 0",type:"chiffre",figure2d:g,options:{chiffre:0}},{numero:98,name:"chiffre 1",type:"chiffre",figure2d:g,options:{chiffre:1}},{numero:99,name:"chiffre 2",type:"chiffre",figure2d:g,options:{chiffre:2}},{numero:100,name:"chiffre 3",type:"chiffre",figure2d:g,options:{chiffre:3}},{numero:101,name:"chiffre 4",type:"chiffre",figure2d:g,options:{chiffre:4}},{numero:102,name:"chiffre 5",type:"chiffre",figure2d:g,options:{chiffre:5}},{numero:103,name:"chiffre 6",type:"chiffre",figure2d:g,options:{chiffre:6}},{numero:104,name:"chiffre 7",type:"chiffre",figure2d:g,options:{chiffre:7}},{numero:105,name:"chiffre 8",type:"chiffre",figure2d:g,options:{chiffre:8}},{numero:106,name:"chiffre 9",type:"chiffre",figure2d:g,options:{chiffre:9}},{numero:107,name:"quatre-vingt-huit",type:"chiffre",figure2d:ke},{numero:108,name:"trente-huit",type:"chiffre",figure2d:we},{numero:109,name:"trente",type:"chiffre",figure2d:xe},{numero:110,name:"vingt-cinq",type:"chiffre",figure2d:Se},{numero:111,name:"soixante-quinze",type:"chiffre",figure2d:Le},{numero:112,name:"treize",type:"chiffre",figure2d:ze},{numero:113,name:"cinquante-deux",type:"chiffre",figure2d:ve},{numero:114,name:"soixante-treize",type:"chiffre",figure2d:be},{numero:115,name:"vingt-six",type:"chiffre",figure2d:Pe},{numero:116,name:"quarante-deux",type:"chiffre",figure2d:We},{numero:117,name:"quatre-vingt-seize",type:"chiffre",figure2d:qe},{numero:118,name:"quatre-vingt",type:"chiffre",figure2d:Ae}];export{at as l};
