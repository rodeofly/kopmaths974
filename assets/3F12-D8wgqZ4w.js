import{g as C,br as q,r as p,aq as n,m as o,l as D}from"./embellissements-BYV7mIDn.js";import{S as f}from"./macroSvgJs-DL5FJIUc.js";import{E as O}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./main-23QrOhwr.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const J="Calculer, de manières différentes, des images par une fonction",N="02116",P={"fr-fr":["3F12"],"fr-ch":["10FA5-9","11FA8-3"]};class R extends O{constructor(){super(),this.besoinFormulaireTexte=["Règle à travailler",`Nombres séparés par des tirets :
1 : À partir d'un programme de calcul
2 : À partir de l'expression algébrique sous forme f(x) = ...
3 : À partir de l'expression algébrique sous forme f : x --> ...
4 : À partir d'un diagramme
5 : Mélange`],this.sup=5,this.spacing=2,this.spacingCorr=2,this.nbQuestions=4,this.sup=5}nouvelleVersion(m){let l,a,u="",c="";const x="3F12";l="100%";let d;const h=C({saisie:this.sup,min:1,max:4,melange:5,defaut:5,nbQuestions:1}),v=q(h,this.nbQuestions);for(let $=0,i,t,e,s,r,b=0;$<this.nbQuestions&&b<50;){d=v[$],s="",r="";{const g=`${x}_${$}_${Date.now()}`;u=`div_svg${m}${g}`,c=`div_svg_corr${m}${g}`}switch(i=p(2,9),t=p(2,9),e=p(2,9),d){case 1:a=0,s="On donne le programme de calcul suivant qui correspond à une certaine fonction :",r="Avec ce programme de calcul :",s+=`
<br>
<div class="ui compact warning message">
<p>
- Choisir un nombre.<br>
- Multiplier ce nombre par ${i}.<br>
- Ajouter ${t} au résultat obtenu.<br>
</p>
</div>
<br>`,s+=n(a)+` Appliquer ce programme de calcul au nombre ${e}.<br>`,r+="<br>"+n(a)+`
<br>
<div class="ui compact warning message">
<p>
- On choisit le nombre ${e}.<br>
- On multiplie ce nombre par ${i}, soit ${i}$\\times$ ${e} = ${i*e}.<br>
- On ajoute ${t} au résultat obtenu, soit ${i*e}+${t}=${i*e+t}.<br>
</p>
</div>
<br>
`,a++,s+=n(a)+" Traduire ce calcul par une phrase contenant le mot image.",r+=n(a)+`L'image de ${e} par cette fonction vaut ${i*e+t}.`,r+=`<br> On peut aussi dire que ${i*e+t} est l'image de ${e} par cette fonction.`;break;case 2:a=0,s=`Soit $f$ la fonction définie par l'expression algébrique $f(x)=$ ${i}$x+$${t}.`,s+="<br>"+n(a)+` Calculer l'image de ${e}.`,s+="<br>",r=n(a)+` Calculons l'image par $f$ de $x= ${e}$ :`,r+=`<br>$f(${o("\\textit{\\textbf{x}}")})= ${i} ${o("\\textit{\\textbf{x}}")}+${t}$`,r+=`<br>$f(${o(e)})= ${i}\\times ${o(e)}+${t}$`,r+=`<br>$f(${o(e)})= ${i*e}+${t}$`,r+=`<br>$f(${o(e)})= ${i*e+t}$`,a++,s+=n(a)+" Traduire ce calcul par une phrase contenant le mot image.",r+="<br>"+n(a)+` L'image de ${e} par la fonction $f$ vaut ${i*e+t}.`,r+=`<br> On peut aussi dire que ${i*e+t} est l'image de ${e} par la fonction $f$.`;break;case 3:a=0,s=`Soit $g$ la fonction définie par $g:x\\longmapsto$ ${i}$x+$${t}.`,s+="<br>"+n(a)+` Calculer l'image de ${e}.`,s+="<br>",r=n(a)+` Calculons l'image par $g$ de $x= ${e}$ :`,r+=`<br>$g:${o("\\textit{\\textbf{x}}")}\\longmapsto ${i} ${o("\\textit{\\textbf{x}}")}+${t}$`,r+=`<br>$g:${o(e)}\\longmapsto ${i}\\times${o(e)}+${t}$`,r+=`<br>$g:${o(e)}\\longmapsto ${i*e}+${t}$`,r+=`<br>$g:${o(e)}\\longmapsto ${i*e+t}$`,a++,s+=n(a)+" Traduire ce calcul par une phrase contenant le mot image.",r+="<br>"+n(a)+` L'image de ${e} par la fonction $g$ vaut ${i*e+t}.`,r+=`<br> On peut aussi dire que ${i*e+t} est l'image de ${e} par la fonction $g$.`;break;case 4:s="",r="",r+="Calculer avec un diagramme.",a=0,s+="Soit la fonction $h$ définie par le diagramme :",s+=`<div id="${u}" style="width: ${l}"; height: 50px; display : table ">${f(u,800,100,"h","x",[[""+i,i+"x"],[""+t,i+"x+"+t]])}</div>`,s+=n(a)+` Calculer l'image de ${e}.`,s+="<br>",r+="<br>",r+=n(a)+` Calculons l'image par $h$ de $x=$ ${e} :`,r+=`<div id="${c}" style="width: ${l}"; display : table ">${f(c,800,100,"h",""+e,[[""+i,""+i*e],[""+t,""+(i*e+t)]])}</div>`,a++,s+=n(a)+" Traduire ce calcul par une phrase contenant le mot image.",r+="<br>"+n(a)+` L'image de ${e} par la fonction $h$ vaut ${i*e+t}.`,r+=`<br> On peut aussi dire que ${i*e+t} est l'image de ${e} par la fonction $h$.`;break}this.questionJamaisPosee($,i,t,e)&&(this.listeQuestions[$]=s,this.listeCorrections[$]=r,$++),b++}D(this)}}export{R as default,P as refs,J as titre,N as uuid};
