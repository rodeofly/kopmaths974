import{v as $,z as a,m as s,r as n,f as t}from"./embellissements-BYV7mIDn.js";import d from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const L="14/10/2025",V="1aa6a",C={"fr-fr":["1A-C13-3"],"fr-ch":[]},R=!0,S="qcm",T="true",w="qcmMono",z="Exprimer une variable en fonction des autres (avec des quotients)";class D extends d{appliquerLesValeurs(i,e,r,c="+"){const u=c==="+"?"+":"-";this.enonce=`On considère des réels $x$, $y$ et $u$ non nuls tels que $\\dfrac{${i}}{x}${u}\\dfrac{${e}}{y}= \\dfrac{${r}}{u}$.<br>
      On peut affirmer que :`,c==="+"?(this.correction=`On isole $u$ dans le premier membre : <br>
          $\\begin{aligned} \\dfrac{${i}}{x}+\\dfrac{${e}}{y}&= \\dfrac{${r}}{u} \\\\ 
         \\dfrac{${$(i)}y${a(e)}x}{xy}&= \\dfrac{${r}}{u} \\\\ 
          ${r===1?"u":`\\dfrac{u}{${r}}`} &=   \\dfrac{xy}{${$(i)}y${a(e)}x} \\\\
          u&= ${s(`\\dfrac{${$(r)}xy}{${$(e)}x${a(i)}y}`)} 
          \\end{aligned}$
             `,this.reponses=[`$u=\\dfrac{${$(r)}xy}{${$(e)}x${a(i)}y}$`,`$u=${$(i*e)}xy$`,`$u=${$(e)}x${a(i)}y$`,`$u=\\dfrac{${$(e)}x${a(i)}y}{${$(r)}xy}$`]):(this.correction=`On isole $u$ dans le premier membre : <br>
          $\\begin{aligned} \\dfrac{${i}}{x}-\\dfrac{${$(e)}}{y}&= \\dfrac{${r}}{u} \\\\ 
          \\dfrac{${$(i)}y-${$(e)}x}{xy}&= \\dfrac{${r}}{u} \\\\ 
           ${r===1?"u":`\\dfrac{u}{${r}}`}&= \\dfrac{xy}{${$(i)}y-${$(e)}x} \\\\
          u&= ${s(`\\dfrac{${$(r)}xy}{${$(i)}y-${$(e)}x}`)} 
          \\end{aligned}$
             `,this.reponses=[`$u=\\dfrac{${$(r)}xy}{${$(i)}y-${$(e)}x}$`,`$u=\\dfrac{${$(r)}xy}{${$(e)}x-${$(i)}y}$`,`$u=${$(i-e)}xy$`,`$u=\\dfrac{${$(i)}y-${$(e)}x}{${$(r)}xy}$`])}versionOriginale=()=>{this.appliquerLesValeurs(1,1,1,"+")};versionAleatoire=()=>{const i=n(1,5),e=i+1,r=n(1,7);switch(n(1,4)){case 1:this.appliquerLesValeurs(i,e,r,"+");break;case 2:this.enonce=`On considère des réels $x$ et $u$ non nuls tels que $\\dfrac{${i}}{x}+\\dfrac{1}{${e}}= \\dfrac{${r}}{u}$.<br>
            On peut affirmer que :`,this.correction=`On isole $u$ dans le premier membre : <br>
              $\\begin{aligned} \\dfrac{${i}}{x}+\\dfrac{1}{${e}}&= \\dfrac{${r}}{u} \\\\ 
              \\dfrac{${i*e}+x}{${$(e)}x}&= \\dfrac{${$(r)}}{u} \\\\ 
              u&= \\dfrac{${r===1?"":`${r}\\times `}${e}x}{${i*e}+x}\\\\
              u&= ${s(`\\dfrac{${r*e}x}{${i*e}+x}`)} 
              \\end{aligned}$
                 `,this.reponses=[`$u=\\dfrac{${$(r*e)}x}{${$(i*e)}+x}$`,`$u=\\dfrac{${$(i*e)}+x}{${$(r*e)}x}$`,`$u=\\dfrac{${$(r)}x}{${i*e}x${t(i)}}$`,`$u=\\dfrac{${$(r)}x}{${i*e}x${t(e)}}$`];break;case 3:this.appliquerLesValeurs(i,e,r,"-");break;case 4:default:this.enonce=`On considère des réels $x$, $y$ et $u$ non nuls tels que $\\dfrac{${$(i)}x}{y}+${e}= \\dfrac{${r}}{u}$.<br>
            On peut affirmer que :`,this.correction=`On isole $u$ dans le premier membre : <br>
              $\\begin{aligned} \\dfrac{${$(i)}x}{y}+${e}&= \\dfrac{${r}}{u} \\\\ 
              \\dfrac{${$(i)}x+${$(e)}y}{y}&= \\dfrac{${r}}{u} \\\\ 
              u&=\\dfrac{${r===1?`${r}\\times`:`${r}\\times `}y}{${$(i)}x+${e}y} \\\\
              u&= ${s(`\\dfrac{${$(r)}y}{${$(i)}x+${$(e)}y}`)} 
              \\end{aligned}$
                 `,this.reponses=[`$u=\\dfrac{${$(r)}y}{${$(i)}x+${$(e)}y}$`,`$u=\\dfrac{${$(i)}x+${$(e)}y}{${$(r)}y}$`,`$u=${$(r)}y$`,`$u=\\dfrac{${$(r)}}{${i}x+${e}y}$`];break}};constructor(){super(),this.versionAleatoire()}}export{T as amcReady,w as amcType,L as dateDePublication,D as default,R as interactifReady,S as interactifType,C as refs,z as titre,V as uuid};
