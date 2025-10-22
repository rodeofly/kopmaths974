import $ from"./ExerciceSimple-CWWOU0FG.js";import{a as l,e as i,m as n}from"./embellissements-BYV7mIDn.js";import{K as m}from"./Exercice-DtXhjCyI.js";import o from"decimal.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const q="",y=!0,E="mathLive",k="91304",T={"fr-fr":[],"fr-ch":[]};class A extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:" bouteilles"},this.formatChampTexte=m.clavierDeBaseAvecVariable}nouvelleVersion(){const t=l([100,200]),r=l([20,25,10]),e=new o(t).div(r);this.reponse=new o(2025).div(e).floor();const s=i(new o(2025).div(e).floor());this.question=`Pour remplir $${r}$ bouteilles d'huile d'olive, Stéphane utilise $${t}$ kg d'olives.<br>
      Combien va-t-il remplir de bouteilles pleines avec ses $${i(2025,0)}$ kg d'olives cueillies ?`,this.correction=`Pour remplir $${r}$ bouteilles d'huile d'olive, Stéphane utilise $${t}$ kg d'olives.<br> Cela signifie que pour remplir $1$ bouteille d'huile, il utilise $${e}$ kg d'olives car $${t} \\div  ${r} = ${e}$.<br>`,new o(2025).modulo(e).equals(0)?this.correction+=`On a  : <br>
      $\\begin{aligned}
      ${i(2025,0)}&=${i(2e3)}+${i(25)}\\\\
      &=${i(new o(2e3).div(e))}\\times ${e}+${i(new o(25).div(e).floor())}\\times ${e}\\\\
      &=${s}\\times ${e}
      \\end{aligned}$<br>
      Il peut remplir $${n(s)}$ bouteilles d'huile d'olive.`:this.correction+=`On a :<br> 
      $\\begin{aligned}
      ${i(2025)}&=${i(2e3)}+${i(25)}\\\\
      &=${i(new o(2e3).div(e))}\\times ${e}+${i(new o(25).div(e).floor())}\\times ${e}+${i(new o(25).modulo(e))}\\\\
      &=${s}\\times ${e}+${i(new o(2025).modulo(e))}
      \\end{aligned}$<br>
      Il peut remplir $${n(s)}$ bouteilles d'huile d'olive.`,this.interactif&&(this.question+="<br>"),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ bouteilles"}}export{A as default,y as interactifReady,E as interactifType,T as refs,q as titre,k as uuid};
