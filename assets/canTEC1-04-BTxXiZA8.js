import{m as $,r as e}from"./embellissements-BYV7mIDn.js";import t from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const x="10/08/2025",y="41fa7",E={"fr-fr":["canTEC1-04"],"fr-ch":[]},k=!0,A="qcm",C="true",O="qcmMono",P="Calculer les puissances de $i$";class T extends t{versionOriginale=()=>{this.enonce="$i^{4}$ est égal à ",this.correction=`On sait que $i^{2}=-1$ donc $i^{4}=\\left(-1\\right)^{2}=${$("1")}.$`,this.reponses=["$1 $","$-1$ ","$i $","$-i$ "]};versionAleatoire=()=>{const i=e(3,15);switch(e(1,2)){case 1:this.enonce=`$i^{${i}}$ est égal à `,this.correction="Par définition, on sait que $i^{2}=-1$. ",i%4===0&&(i===4?this.correction+=` donc $i^{4}=${$("1")}$ .`:this.correction+=` donc $i^{4}=1$ .<br>$\\begin{aligned}i^{${i}}&=\\left(i^{4}\\right)^{${i/4}}\\\\
        &=${$("1")}.
        \\end{aligned}$`,this.reponses=["$1 $","$-1$ ","$i $","$-i$ "]),i===7&&(this.correction+=` donc $i^{4}=1$, <br> 
         $\\begin{aligned}
         i^{7}&=i^{4}\\times i^{3}\\\\
          &=i^{3}\\\\
         &=i^{2}\\timesi\\\\
          &=${$("-i.")}
         \\end{aligned}$`,this.reponses=["$-i $","$1 $","$-1$ ","$i$ "]),i===3&&(this.correction+=`  <br> 
         $\\begin{aligned}
         i^{3}&=i^{2}\\times i\\\\
         &=${$("-i.")}
         \\end{aligned}$`,this.reponses=["$-i $","$1 $","$-1$ ","$i$ "]),i%4===2&&(this.correction+=` donc $i^{4}=1$, <br>  
         $\\begin{aligned}
         i^{${i}}&=i^{${i-2}}\\times i^{2}\\\\
         &=\\left(i^{4}\\right)^{${(i-2)/4}}\\times i^{2}\\\\
         &=${$("-1.")}
         \\end{aligned}$`,this.reponses=["$-1$ ","$-i$ ","$1 $","$i $"]),i%4===1&&(this.correction+=` donc $i^{4}=1$, <br>  
         $\\begin{aligned}
         i^{${i}}&=i^{${i-1}}\\timesi\\\\
         &=\\left(i^{4}\\right)^{${(i-1)/4}}\\timesi\\\\
         &=${$("i.")}
         \\end{aligned}$`,this.reponses=["$i$ ","$1 $","$-1$ ","-$i $"]);break;case 2:if(this.enonce=`$\\left(\\mathrm{-i}\\right)^{${i}}$ est égal à `,this.correction=`On sait que $\\left(\\mathrm{-i}\\right)^{${i}}=\\left(\\mathrm{-1}\\right)^{${i}}\\times i^{${i}}$. <br>`,this.correction+="Par définition, on a $i^{2}=-1$ ",i%4===0&&(i===4?this.correction+=` donc $i^{4}=1$ et finalement $\\left(\\mathrm{-i}\\right)^{4}=${$("1")}$ .`:this.correction+=` donc $i^{4}=1$ .<br>
        $\\begin{aligned}\\left(\\mathrm{-i}\\right)^{${i}}
        &=\\mathrm{-i}^{${i}}\\\\
        &=\\left(i^{4}\\right)^{${i/4}}\\\\
        &=${$("1")}.
        \\end{aligned}$`,this.reponses=["$1 $","$-1$ ","$i $","$-i$ "]),i===7&&(this.correction+=` donc $i^{4}=1$, <br> 
         $\\begin{aligned}
         \\left(\\mathrm{-i}\\right)^{7}&=\\left(-1\\right)^{7}\\times i^{7}\\\\
         &=-i^{4}\\times i^{3}\\\\
         &=-i^{3}\\\\
         &=-i^{2}\\timesi\\\\
          &=${$("i.")}
         \\end{aligned}$`,this.reponses=["$i $","$1 $","$-1$ ","$-i$ "]),i===3&&(this.correction+=`  <br> 
         $\\begin{aligned}
         \\left(\\mathrm{-i}\\right)^{3}&= -i^{3}\\\\
         &=-i^{2}\\times i\\\\
         &=${$("i.")}
         \\end{aligned}$`,this.reponses=["$i $","$1 $","$-1$ ","$-i$ "]),i%4===2&&(this.correction+=` donc $i^{4}=1$, <br>  
         $\\begin{aligned}
         \\left(\\mathrm{-i}\\right)^{${i}}&=\\left(-1\\right)^{${i}}\\times i^{${i-2}}\\times i^{2}\\\\
         &=i^{${i-2}}\\times i^{2}\\\\
         &=\\left(i^{4}\\right)^{${(i-2)/4}}\\times i^{2}\\\\
         &=${$("-1.")}
         \\end{aligned}$`,this.reponses=["$-1$ ","$-i$ ","$1 $","$i $"]),i%4===1){this.correction+=` donc $i^{4}=1$, <br>  
         $\\begin{aligned}
         \\left(\\mathrm{-i}\\right)^{${i}}&=(-1)^{${i}}\\timesi^{${i-1}}\\timesi\\\\
         &=-i^{${i-1}}\\timesi\\\\
         &=${$("-i.")}
         \\end{aligned}$`,this.reponses=["$-i$ ","$1 $","$-1$ ","$i $"];break}}};constructor(){super(),this.versionAleatoire()}}export{C as amcReady,O as amcType,x as dateDePublication,T as default,k as interactifReady,A as interactifType,E as refs,P as titre,y as uuid};
