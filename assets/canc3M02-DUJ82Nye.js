import{K as q}from"./Exercice-DtXhjCyI.js";import{a as g,r as y,p as c,k as u,b9 as l,C as x,G as o,o as d,aG as h}from"./embellissements-BYV7mIDn.js";import C from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const M="Calculer une longueur/un périmètre/une aire (avec des entiers)",R="25/08/2022",G=!0,K="mathLive",j=!0,N="AMCNum",O="cb91f",V={"fr-fr":["canc3M02"],"fr-ch":[]};class z extends C{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple",this.formatChampTexte=q.clavierDeBase,this.optionsChampTexte={texteApres:" cm"}}nouvelleVersion(){let m,t,r,s,e,i,a,n=[],$,p,b,f;switch(g([1,2,3,4])){case 1:m=g([!0,!1]),n=[],t=y(3,14),s=c(0,0,"A","below"),e=c(6,0,"B","below"),i=c(6,6,"C","below"),a=c(0,6,"D","below"),$=u(s,e),p=u(e,i),b=u(i,a),f=u(s,a),g([!0,!1])?(n.push(l("||","blue",s,e),l("||","blue",e,i),l("||","blue",i,a),l("||","blue",s,a),x(`${t} cm`,o(s,e).x,o(s,e).y-.8),h(a,s,e),h(s,e,i),h(e,i,a),h(i,a,s),$,p,b,f),this.question=`${m?"Quel":"Quelle"} est ${m?"le périmètre":"l’aire"} de ce carré ? <br>`+d({xmin:-.5,ymin:-1.2,xmax:7,ymax:7,scale:.5,style:"margin: auto"},n),this.optionsChampTexte={texteApres:m?" cm":" cm$^2$"},this.reponse=m?4*t:t*t,this.correction=`Il s'agit d'un carré. <br>
        Son ${m?"périmètre":"aire"} est donc
        ${m?`$4$ fois la longueur de son côté, soit $4\\times ${t}=${4*t}$ cm.`:`le carré de la longueur de son côté, soit $${t}\\times ${t}=${t*t}$ cm$^2$.`}`):(n.push(l("||","blue",s,e),l("||","blue",e,i),l("||","blue",i,a),l("||","blue",s,a),x("?",o(s,e).x,o(s,e).y-.8),h(a,s,e),h(s,e,i),h(e,i,a),h(i,a,s),$,p,b,f),this.question=`Le périmètre  de ce carré est $${4*t}$ cm.<br>
            Quelle est la longueur de son côté ? <br>
            
            `+d({xmin:-.5,ymin:-1.5,xmax:7,ymax:7,scale:.5,style:"margin: auto"},n),this.optionsChampTexte={texteApres:" cm"},this.reponse=t,this.correction=`Il s'agit d'un carré. <br>
            Son côté est  donc le quart de son périmètre, soit $${4*t}\\div 4=${t}$ cm.`);break;case 2:m=g([!0,!1]),n=[],t=y(6,11),r=t-y(1,3),s=c(0,0,"A","below"),e=c(8,0,"B","below"),i=c(8,6,"C","below"),a=c(0,6,"D","below"),$=u(s,e),p=u(e,i),b=u(i,a),f=u(s,a),n.push(l("||","blue",s,e),l("|","blue",e,i),l("||","blue",i,a),l("|","blue",s,a),x(`${t} cm`,o(s,e).x,o(s,e).y-.7),x(`${r} cm`,o(e,i).x+1.5,o(e,i).y),h(a,s,e),h(s,e,i),h(e,i,a),h(i,a,s),$,p,b,f),this.question=`${m?"Quel":"Quelle"} est ${m?"le périmètre":"l’aire"} de ce rectangle ? <br>
        La figure n'est pas à l'échelle. <br>
        
        `+d({xmin:-.5,ymin:-1.5,xmax:11,ymax:7,scale:.5,style:"margin: auto"},n),this.optionsChampTexte={texteApres:m?" cm":" cm$^2$"},this.reponse=m?2*t+2*r:t*r,this.correction=`Il s'agit d'un rectangle. <br>
        Son ${m?"périmètre":"aire"} est donc
        ${m?`$2$ fois la longueur de son demi-périmètre, soit $2\\times (${t}+${r})=${2*t+2*r}$ cm.`:`le produit de sa longueur par sa largeur, soit $${t}\\times ${r}=${t*r}$ cm$^2$.`}`;break;case 3:n=[],t=y(3,14),s=c(0,0,"A","below"),e=c(6,0,"B","below"),i=c(3,5.2,"C","below"),$=u(s,e),p=u(e,i),b=u(s,i),g([!0,!1])?(n.push(l("||","blue",s,e),l("||","blue",e,i),l("||","blue",i,s),x(`${t} cm`,o(s,e).x,o(s,e).y-.8),$,p,b),this.question=`Quel est  le périmètre de ce triangle ? <br>
          
          `+d({xmin:-.5,ymin:-1.5,xmax:7,ymax:6,scale:.5,style:"margin: auto"},n),this.optionsChampTexte={texteApres:" cm"},this.reponse=3*t,this.correction=`Le triangle est équilatéral.<br>
        Son périmètre est $3$ fois la longueur de son côté, soit $3\\times ${t}=${3*t}$ cm.`):(n.push(l("||","blue",s,e),l("||","blue",e,i),l("||","blue",i,s),x("?",o(s,e).x,o(s,e).y-.7),$,p,b),this.question=`Le périmètre de ce triangle est  $${3*t}$ cm, quelle est la longueur de son côté ?<br>
          
          `+d({xmin:-.5,ymin:-1.5,xmax:7,ymax:6,scale:.5,style:"margin: auto"},n),this.optionsChampTexte={texteApres:" cm"},this.reponse=t,this.correction=`Puisque le triangle est équilatéral, la longueur de son côté est le tiers de son périmètre, soit $${3*t}\\div 3=${t}$ cm. `);break;case 4:n=[];do t=y(3,7),r=y(8,12);while(2*t<=r);s=c(0,0,"A","below"),e=c(5,0,"B","below"),i=c(2.5,2,"C","below"),$=u(s,e),p=u(e,i),b=u(s,i),m=g(["a","b","c"]),m==="a"&&(n.push(l("||","blue",e,i),l("||","blue",i,s),x(`${r} cm`,o(s,e).x,o(s,e).y-.7),x(`${t} cm`,o(e,i).x+1,o(e,i).y+.5),$,p,b),this.question=`Quel est  le périmètre de ce triangle ? <br>

        La figure n'est pas à l'échelle. <br>
        
        `+d({xmin:-.5,ymin:-1.5,xmax:6,ymax:3,scale:.7,style:"margin: auto"},n),this.optionsChampTexte={texteApres:" cm"},this.reponse=2*t+r,this.correction=`Le triangle est isocèle.<br>

        Son périmètre est : $2\\times ${t}+${r}=${2*t+r}$ cm.`),m==="b"&&(n.push(l("||","blue",e,i),l("||","blue",i,s),x(`${r} cm`,o(s,e).x,o(s,e).y-.7),x("?",o(e,i).x+1,o(e,i).y+.5),$,p,b),this.question=`Le périmètre de ce triangle est  $${2*t+r}$ cm, quelle est la longueur manquante ?<br>
          
          La figure n'est pas à l'échelle. <br>
            
            `+d({xmin:-.5,ymin:-1.5,xmax:6,ymax:2.5,scale:.7,style:"margin: auto"},n),this.optionsChampTexte={texteApres:" cm"},this.reponse=t,this.correction=`Le triangle est isocèle, il possède donc deux longueurs égales.<br>
            Puisque le périmètre est  $${2*t+r}$ cm, on obtient la somme des deux longueurs égales  du triangle en effectuant la différence $${2*t+r}-${r}=${2*t}$ cm.<br>
            On obtient  la longueur cherchée en divisant par $2$, soit $${2*t}\\div 2=${t}$ cm.`),m==="c"&&(n.push(l("||","blue",e,i),l("||","blue",i,s),x("?",o(s,e).x,o(s,e).y-.7),x(`${t} cm`,o(e,i).x+1,o(e,i).y+.5),$,p,b),this.question=`Le périmètre de ce triangle est  $${2*t+r}$ cm, quelle est la longueur manquante ?<br>
          
          La figure n'est pas à l'échelle. <br>
                
                `+d({xmin:-.5,ymin:-1.5,xmax:6,ymax:2.5,scale:.7,style:"margin: auto"},n),this.optionsChampTexte={texteApres:" cm"},this.reponse=r,this.correction=`Le triangle est isocèle, il possède donc deux longueurs égales.<br>
                Puisque le périmètre est  $${2*t+r}$ cm, on obtient la longueur manquante par : $${2*t+r}-2\\times ${t}=${r}$ cm.`);break}this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ cm"}}export{j as amcReady,N as amcType,R as dateDePublication,z as default,G as interactifReady,K as interactifType,V as refs,M as titre,O as uuid};
