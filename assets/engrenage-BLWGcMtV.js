import{O as R,d as l,I as d,cD as f,bq as y}from"./embellissements-BYV7mIDn.js";class G extends R{rayon;rayonExt;rayonInt;nbDents;xCenter;yCenter;couleurDeRemplissage;couleurDuTrou;dureeTour;angleStart;marqueurG;marqueurD;marqueurColorG;marqueurColorD;constructor({rayon:t=1,rayonExt:r,rayonInt:e,nbDents:s=12,xCenter:u=0,yCenter:$=0,color:a="black",couleurDeRemplissage:c="black",couleurDuTrou:g="white",dureeTour:h=10,angleStart:p=90,marqueurG:i=null,marqueurD:n=null,marqueurColorG:m="Sienna",marqueurColorD:o="Sienna"}){super(),this.rayon=t,this.rayonExt=r>t?r:l(t*4/3),this.rayonInt=e<t?e:l(t*3/4),this.nbDents=s,this.xCenter=u,this.yCenter=$,this.dureeTour=h,this.marqueurG=i,this.marqueurD=n,this.marqueurColorG=m,this.marqueurColorD=o,this.color=d(a),this.couleurDeRemplissage=d(c),this.couleurDuTrou=d(g),this.angleStart=p,this.bordures=[u-r-.2,$-r-.2,u+r+.2,$+r+.2]}svg(t){const r=this.xCenter*t,e=-this.yCenter*t,s=l(this.rayon*t),u=l(this.rayonExt*t),$=l(this.rayonInt*t),a=360/this.nbDents,c=l(u-s),g=l(s*f(.25*a)),h=l(r+s*y(a*.25+this.angleStart)),p=l(e+s*f(a*.25+this.angleStart));let i=`<g class="roueEngrenage" id=roue${this.id}>
      <path stroke="${this.color[0]}" fill="${this.couleurDeRemplissage[0]}"
        d="M ${h},${p} `;for(let n=0;n<this.nbDents;n++){const m=r+s*y(a*(-n-.25)+this.angleStart),o=e+s*f(a*(-n-.25)+this.angleStart),x=r+u*y(a*(-n+.125)+this.angleStart),C=e+u*f(a*(-n+.125)+this.angleStart),S=r+u*y(a*(-n-.125)+this.angleStart),q=e+u*f(a*(-n-.125)+this.angleStart),T=r+s*y(a*(-n-.75)+this.angleStart),k=e+s*f(a*(-n-.75)+this.angleStart);i+=`A${c},${g} ${180+this.angleStart-n*a},0 0 ${x},${C} L${S},${q} A${c},${g} ${l(180+this.angleStart-(n-.125)*a)}, 0, 0 ${m},${o} A${s},${s} 0, 0, 0 ${T},${k} `}return i+='Z"/>',typeof this.marqueurG=="number"&&(i+=`<circle cx="${l(r+(s-5)*y(this.marqueurG))}" cy="${l(e+(s-5)*f(this.marqueurG))}" r="3" stroke="HotPink" fill="${this.marqueurColorG}" />`),typeof this.marqueurD=="number"&&(i+=`<circle cx="${l(r+(s-5)*y(this.marqueurD))}" cy="${l(e+(s-5)*f(this.marqueurD))}" r="3" stroke="HotPink" fill="${this.marqueurColorD}" />`),this.dureeTour!==0?i+=`<animateTransform
        id="animRoue${this.id}"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 ${r} ${e}"
        to="${this.dureeTour<0?-360:360} ${r} ${e}"
        dur="${Math.abs(this.dureeTour)}"
        repeatCount="indefinite"
        />
        </g>
        <circle cx="${r}" cy="${e}" r="${$}" stroke="${this.color[0]}" fill="${this.couleurDuTrou[0]}" />
        <text class="compteurDeTours" id="compteur${this.id}" fill="red" align="middle" dominant-baseline="middle" text-anchor="middle" x="${r}" y="${e}">0</text>`:i+=`</g>
        <circle cx="${r}" cy="${e}" r="${$}" stroke="${this.color[0]}" fill="${this.couleurDuTrou[0]}" />`,i}tikz(){const t=this.rayon,r=this.rayonExt,e=this.rayonInt;let s=`% engrenage de rayon ${this.rayon}, avec ${this.nbDents} dents centré en (${this.xCenter};${this.yCenter})
      \\foreach \\i in {1,2,...,${this.nbDents}}{
                    \\pgfmathparse{360*(\\i-1)/${this.nbDents}}\\let\\angle\\pgfmathresult
                    \\begin{scope}[shift={(${this.xCenter},${this.yCenter})}]
                        \\pgfmathparse{${this.rayon}*cos(${this.angleStart}+90/${this.nbDents})}\\let\\Ax\\pgfmathresult
                    \\pgfmathparse{${t}*sin(${this.angleStart}+90/${this.nbDents})}\\let\\Ay\\pgfmathresult
                    \\pgfmathparse{${t}*cos(${this.angleStart}-90/${this.nbDents})}\\let\\Bx\\pgfmathresult
                    \\pgfmathparse{${t}*sin(${this.angleStart}-90/${this.nbDents})}\\let\\By\\pgfmathresult
                    \\pgfmathparse{${r}*cos(${this.angleStart}+45/${this.nbDents})}\\let\\Cx\\pgfmathresult
                    \\pgfmathparse{${r}*sin(${this.angleStart}+45/${this.nbDents})}\\let\\Cy\\pgfmathresult
                    \\pgfmathparse{${r}*cos(${this.angleStart}-45/${this.nbDents})}\\let\\Dx\\pgfmathresult
                    \\pgfmathparse{${r}*sin(${this.angleStart}-45/${this.nbDents})}\\let\\Dy\\pgfmathresult
                    \\pgfmathparse{${this.angleStart}-90/${this.nbDents}}\\let\\a\\pgfmathresult
                    \\pgfmathparse{${this.angleStart}-270/${this.nbDents}}\\let\\b\\pgfmathresult
                    \\fill[${this.couleurDeRemplissage[1]},draw,rotate=\\angle] (0,0) -- (\\Ax,\\Ay) to[bend left=15] (\\Cx,\\Cy) -- (\\Dx,\\Dy) to[bend left=15] (\\Bx,\\By) arc (\\a:\\b:${t}cm) -- cycle;
                    \\draw[${this.color[1]},rotate=\\angle] (\\Ax,\\Ay) to[bend left=15] (\\Cx,\\Cy) -- (\\Dx,\\Dy) to[bend left=15] (\\Bx,\\By) arc (\\a:\\b:${t}cm);
                    \\end{scope}}
                \\fill[${this.couleurDuTrou[1]},draw=${this.color[1]}] (${this.xCenter},${this.yCenter}) circle (${e});
    `;return typeof this.marqueurD=="number"&&(s+=`\\fill[HotPink,draw=black] (${l(this.xCenter+(t-.2)*y(this.marqueurD),2)},${l(this.yCenter+(t-.2)*f(this.marqueurD),2)}) circle (0.1degS);
  `),s}}function b({rayon:D=1,rayonExt:t,rayonInt:r,nbDents:e=12,xCenter:s=0,yCenter:u=0,color:$="black",couleurDeRemplissage:a="black",couleurDuTrou:c="white",dureeTour:g=10,angleStart:h=90,marqueurG:p=null,marqueurD:i=null,marqueurColorG:n="Sienna",marqueurColorD:m="Sienna"}){return new G({rayon:D,rayonExt:t,rayonInt:r,nbDents:e,xCenter:s,yCenter:u,color:$,couleurDeRemplissage:a,couleurDuTrou:c,dureeTour:g,angleStart:h,marqueurG:p,marqueurD:i,marqueurColorG:n,marqueurColorD:m})}function w({dureeTourBase:D=0,module:t=.5,marqueurs:r=!1}={},...e){const s=[];let u=0;const $=0;let a=0,c=0,g=D,h=0,p,i,n,m;for(let o=0;o<e.length-1;o++){a=t*e[o],c=t*e[o+1];const x=(a+c)/2;r&&(o===0?(p=null,i=0,m="Sienna"):o%2===1?(p=180,i=0,n="Sienna",m="blue"):(p=180,i=0,n="blue",m="Sienna")),s.push(b({marqueurG:p,marqueurD:i,marqueurColorD:m,marqueurColorG:n,dureeTour:g,angleStart:h,rayonInt:t*2,rayon:a*.5-.625*t,rayonExt:a*.5+t/2,nbDents:e[o],xCenter:u,yCenter:$,couleurDeRemplissage:"green",color:"black",couleurDuTrou:"white"})),u+=x,h===0?e[o+1]%2===0?h=180/e[o+1]:h=0:e[o+1]%2===0?h=0:h=180/e[o+1],g=-g*c/a}return s.push(b({marqueurG:180,marqueurD:null,marqueurColorG:m,dureeTour:g,angleStart:h,rayonInt:t*2,rayon:c*.5-.625*t,rayonExt:c*.5+t/2,nbDents:e[e.length-1],xCenter:u,yCenter:$,couleurDeRemplissage:"green",color:"black",couleurDuTrou:"white"})),s}export{w as e};
