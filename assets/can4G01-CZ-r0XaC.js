import{a as d,aP as y,p as f,aJ as x,aX as q,aK as l,r as C,aV as u,o as m,_ as A,e as i}from"./embellissements-BYV7mIDn.js";import P from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const V="Déterminer une longueur avec des triangles semblables",j=!0,w="mathLive",B=!0,G="AMCNum",J="f0b9b",K={"fr-fr":["can4G01"],"fr-ch":[]};class X extends P{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:" cm"}}nouvelleVersion(){const s=d([[6,8,10],[9,12,15],[12,16,20],[15,20,25],[18,24,30],[21,28,35],[24,32,40],[27,36,45],[30,40,50]]),t=y(3,["QD"]),[$,e,p]=s,r=f(0,0,t[0]),o=x(r,e,0,t[1]),n=x(o,$,90,t[2]),a=q(r,o,n),b=l(o,r),h=l(n,o),g=l(r,n),c=[];switch(C(0,2)){case 0:c.push(a[0],a[1],h,g,u(r,o,n)),this.question=`Un triangle dont les côtés ont pour longueurs $3$, $4$ et $5$ est un triangle rectangle.<br>

      Calculer la longueur $${t[0]}${t[1]}$.<br>
      
      `,this.question+=m({xmin:-e/10-1,xmax:e+e/10+1,ymin:-e/10-1,ymax:n.y+e/10+1,pixelsParCm:140/e,scale:4/e,style:"margin: auto"},c)+"<br>",this.correction=` $${t[0]}${t[1]}=${e}$ cm.`,this.reponse=e,this.canEnonce=this.question,this.canReponseACompleter=` $${t[0]}${t[1]}=\\ldots$ cm.`;break;case 1:c.push(a[0],a[1],b,g,u(r,o,n)),this.question=`Un triangle dont les côtés ont pour longueurs $3$, $4$ et $5$ est un triangle rectangle.<br>
        Calculer la longueur $${t[1]}${t[2]}$.<br>
        
        `,this.question+=m({xmin:-e/10-1,xmax:e+e/10+1,ymin:-e/10-1,ymax:n.y+e/10+1,pixelsParCm:140/e,scale:4/e,style:"margin: auto"},c)+"<br>",this.correction=` $${t[1]}${t[2]}=${$}$ cm.`,this.reponse=$,this.canEnonce=this.question,this.canReponseACompleter=` $${t[1]}${t[2]}=\\ldots$ cm.`;break;case 2:c.push(a[0],a[1],h,b,u(r,o,n)),this.question=`Un triangle dont les côtés ont pour longueurs $3$, $4$ et $5$ est un triangle rectangle.<br>
       Calculer la longueur $${t[0]}${t[2]}$.<br>
       
       `,this.question+=m({xmin:-e/10-1,xmax:e+e/10+1,ymin:-e/10-1,ymax:n.y+e/10+1,pixelsParCm:140/e,scale:4/e,style:"margin: auto"},c)+"<br>",this.correction=` $${t[0]}${t[2]}=${p}$ cm.`,this.reponse=p,this.canEnonce=this.question,this.canReponseACompleter=` $${t[0]}${t[2]}=\\ldots$ cm.`;break}this.correction+=A(`<br> Mentalement : <br>
    Les deux valeurs sur le graphique montrent que ce triangle est semblable au triangle rectangle $3$, $4$, $5$ (qui correspond à un triplet pythagoricien bien connu). <br>
    Pour obtenir ses longueurs, il suffit de multiplier les nombres $3$, $4$, $5$ par $${i(s[0]/3)}$.<br>
    On obtient ainsi les longueurs : <br>
    $\\bullet$  $${i(s[0]/3)}\\times 3= ${i(s[0])}$ cm ;<br>
    $\\bullet$  $${i(s[0]/3)}\\times 4= ${i(s[1])}$ cm ;<br>
    $\\bullet$  $${i(s[0]/3)}\\times 5= ${i(s[2])}$ cm ;<br>
    On obtient la longueur manquante par déduction.`)}}export{B as amcReady,G as amcType,X as default,j as interactifReady,w as interactifType,K as refs,V as titre,J as uuid};
