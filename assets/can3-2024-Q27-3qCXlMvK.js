import G from"./ExerciceSimple-CWWOU0FG.js";import{p,aX as b,a as r,B as o,G as n,aH as h,aG as u,o as d,m as x}from"./embellissements-BYV7mIDn.js";import{K as f}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const K="Calculer une longueur dans un triangle rectangle",N=!0,j="mathLive",w="3f574";class D extends G{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=f.clavierFullOperations,this.optionsChampTexte={texteApres:"cm."},this.canOfficielle=!1}nouvelleVersion(){const i=p(0,0,"E","above"),t=p(4,0,"F","above"),s=p(4,-2,"G","below"),l=-1,c=-3,$=5,m=1,g=b(i,t,s),a=[];if(a.push(g[0]),this.canOfficielle){const e=r([[3,5,34]]);a.push(o(`${e[1]}\\text{ cm}`,n(i,t).x,n(i,t).y+.4,"black",0,0,""),o(`${e[0]} \\text{ cm}`,n(t,s).x+.6,n(t,s).y,"black",0,0,""),h(i,t,s),u(i,t,s)),this.reponse=`\\sqrt{${e[2]}}`,this.question=d({xmin:l,ymin:c,xmax:$,ymax:m,pixelsParCm:40,mainlevee:!1,amplitude:.5,scale:1,style:"margin: auto"},a),this.question+="<br>La valeur exacte de $EG$ est : ",this.correction=`On utilise le théorème de Pythagore dans le triangle  $EFG$ rectangle en $F$ :<br>
        $\\begin{aligned}
        EG^2&=FE^2+FG^2\\\\
        &=${e[0]}^2+${e[1]}^2\\\\
        &=${e[2]}
        \\end{aligned}$<br>
       Ainsi, $EG=${x(`\\sqrt{${e[2]}}`)}$. `,this.canEnonce=this.question,this.canReponseACompleter="$EG=\\ldots$ cm"}else if(r([!0,!1])){const e=r([[4,5,41],[2,5,29],[3,6,45],[4,7,65],[5,6,61]]);a.push(o(`${e[1]} \\text{ cm}`,n(i,t).x,n(i,t).y+.4,"black",0,0,""),o(`${e[0]}\\text{ cm}`,n(t,s).x+.5,n(t,s).y,"black",0,0,""),h(i,t,s),u(i,t,s)),this.reponse=`\\sqrt{${e[2]}}`,this.question=d({xmin:l,ymin:c,xmax:$,ymax:m,pixelsParCm:40,mainlevee:!1,amplitude:.5,scale:1,style:"margin: auto"},a),this.question+="<br>La valeur exacte de $EG$ est : ",this.correction=`On utilise le théorème de Pythagore dans le triangle  $EFG$ rectangle en $F$ :<br>
          $\\begin{aligned}
          EG^2&=FE^2+FG^2\\\\
          EG^2&=${e[0]}^2+${e[1]}^2\\\\
          EG^2&=${e[2]}
          \\end{aligned}$<br>
         Ainsi, $EG=${x(`\\sqrt{${e[2]}}`)}$. `,this.canEnonce=this.question,this.canReponseACompleter="$EG=\\ldots$ cm"}else{const e=r([[6,5,11],[4,3,7],[7,6,13],[8,5,39],[7,6,13],[10,9,19],[10,7,51]]);a.push(o(`${e[0]} \\text{ cm}`,n(i,s).x,n(i,s).y-.4,"black",0,0,""),o(`${e[1]}\\text{ cm} `,n(i,t).x,n(i,t).y+.5,"black",0,0,""),h(i,t,s),u(i,t,s)),this.reponse=`\\sqrt{${e[2]}}`,this.question=d({xmin:l,ymin:c,xmax:$,ymax:m,pixelsParCm:40,mainlevee:!1,amplitude:.5,scale:1,style:"margin: auto"},a),this.question+="<br>La valeur exacte de $FG$ est : ",this.correction=`On utilise le théorème de Pythagore dans le triangle  $EFG$ rectangle en $F$ :<br>
          $\\begin{aligned}
          EG^2&=FE^2+FG^2\\\\
          FG^2&=EG^2-FE^2\\\\
          FG^2&=${e[0]}^2-${e[1]}^2\\\\
          FG^2 &=${e[2]}
          \\end{aligned}$<br>
         Ainsi, $FG=${x(`\\sqrt{${e[2]}}`)}$. `,this.canEnonce=this.question,this.canReponseACompleter="$EF=\\ldots$ cm"}this.interactif||(this.question+="$\\ldots$ cm")}}export{D as default,N as interactifReady,j as interactifType,K as titre,w as uuid};
