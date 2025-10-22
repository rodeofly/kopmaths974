import{af as v,r as q,e as s,z as n,m as a,f as b,l as C}from"./embellissements-BYV7mIDn.js";import{E as L}from"./Exercice-DtXhjCyI.js";import{a as f}from"./questionMathLive-DdRvWqlN.js";import{s as o}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const X="Encadrer avec les racines carrées",Y=!0,Z="mathLive",_="28/09/2022",tt="ed2ee",rt={"fr-fr":["2N12-3"],"fr-ch":["10NO3-5"]};class et extends L{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",4,`1 : Encadrer sqrt(a)
2 : Encadrer a+b*sqrt(c) avec des entiers
3 : Encadrer a+b*sqrt(c) avec des décimaux
4 : Mélange`],this.nbQuestions=2,this.sup=1}nouvelleVersion(){let p;this.sup===1?p=["Encadrer1"]:this.sup===2?p=["Encadrer2"]:this.sup===3?p=["Encadrer3"]:p=["Encadrer1","Encadrer2","Encadrer3"];const g=v(p,this.nbQuestions);for(let $=0,x=0;$<this.nbQuestions&&x<50;){let l="",h="",t=0,e=0,r=0,E=0;switch(g[$]){case"Encadrer1":t=q(3,143,[4,9,16,25,36,49,64,81,100,121]),E=Math.floor(Math.sqrt(t)),l=`Encadrer $\\sqrt{${t}}$ par deux entiers consécutifs.<br>`,this.interactif&&(l+=f(this,2*$,"")+`$< \\sqrt{${t}} <$`+f(this,2*$+1," ")),h=`Comme $${t}$ n'est pas le carré d'un nombre entier, on encadre $${t}$ par deux carrés d'entiers : <br>
          $${Math.floor(Math.sqrt(t))**2} < ${t} < ${(Math.floor(Math.sqrt(t))+1)**2}$, soit $${Math.floor(Math.sqrt(t))}^2 < ${t} < ${Math.floor(Math.sqrt(t))+1}^2$.<br><br>
          En prenant la racine carrée de chacun de ces nombres, on obtient : <br>$\\sqrt{${Math.floor(Math.sqrt(t))}^2} < \\sqrt{${t}} < \\sqrt{${Math.floor(Math.sqrt(t))+1}^2}$
        (on ne change pas le sens des inégalités en prenant les racines carrées. Ce résultat admis sera démontré dans le chapitre sur les variations). <br><br>
        Finalement, on obtient l'encadrement de  $\\sqrt{${t}}$ par deux entiers consécutifs   : $${Math.floor(Math.sqrt(t))}< \\sqrt{${t}} < ${Math.floor(Math.sqrt(t))+1}$.
   `,o(this,2*$,E),o(this,2*$+1,E+1);break;case"Encadrer2":{t=q(3,143,[4,9,16,25,36,49,64,81,100,121]),e=q(-9,9,0),r=q(-9,9,[0,1]);const i=e+r*Math.floor(Math.sqrt(t)),c=e+r*Math.floor(Math.sqrt(t)+1);l=`En utilisant un encadrement  de $\\sqrt{${t}}$ par  deux entiers consécutifs, donner un encadrement de $${e}${n(r)}\\sqrt{${t}}$ le plus précis possible.<br>`,this.interactif&&(l+=f(this,2*$,"")+`$< ${e}${n(r)}\\sqrt{${t}} <$`+f(this,2*$+1," ")),h=`Comme $${t}$ n'est pas le carré d'un nombre entier, on encadre $${t}$ par deux carrés d'entiers : <br>
          $${Math.floor(Math.sqrt(t))**2} < ${t} < ${(Math.floor(Math.sqrt(t))+1)**2}$, soit $${Math.floor(Math.sqrt(t))}^2 < ${t} < ${Math.floor(Math.sqrt(t))+1}^2$.<br><br>
          En prenant la racine carrée de chacun de ces nombres, on obtient : <br>$\\sqrt{${Math.floor(Math.sqrt(t))}^2} < \\sqrt{${t}} < \\sqrt{${Math.floor(Math.sqrt(t))+1}^2}$
        (on ne change pas le sens des inégalités en prenant les racines carrées. Ce résultat admis sera démontré dans le chapitre sur les variations). <br><br>
        Finalement, on obtient l'encadrement de  $\\sqrt{${t}}$ par deux entiers consécutifs   : $${Math.floor(Math.sqrt(t))}< \\sqrt{${t}} < ${Math.floor(Math.sqrt(t))+1}$. <br><br>
        En partant de cet encadrement, on obbtient successivement :<br>`,r>0?(h+=`$\\begin{aligned}
        ${Math.floor(Math.sqrt(t))} &< \\sqrt{${t}} < ${Math.floor(Math.sqrt(t))+1}\\\\
        ${a(r)}\\times ${Math.floor(Math.sqrt(t))}&< ${a(r)}\\times \\sqrt{${t}} < ${a(r)}\\times ${Math.floor(Math.sqrt(t))+1}{\\text{ (On multiplie par un nombre strictement positif)}}\\\\
        ${r*Math.floor(Math.sqrt(t))}&< ${r}\\sqrt{${t}} < ${r*(Math.floor(Math.sqrt(t))+1)}\\\\
        ${a(e)}${b(r*Math.floor(Math.sqrt(t)))}&< ${a(e)}${n(r)}\\sqrt{${t}} < ${a(e)}${b(r*(Math.floor(Math.sqrt(t))+1))}\\\\
        ${e+r*Math.floor(Math.sqrt(t))}&< ${e}${n(r)}\\sqrt{${t}} < ${e+r*(Math.floor(Math.sqrt(t))+1)}
                       \\end{aligned}$<br>
                       L'encadrement demandé est donc : $ ${e+r*Math.floor(Math.sqrt(t))}< ${e}${n(r)}\\sqrt{${t}} < ${e+r*(Math.floor(Math.sqrt(t))+1)}$.`,o(this,2*$,i),o(this,2*$+1,c)):(h+=`$\\begin{aligned}
                       ${Math.floor(Math.sqrt(t))} &< \\sqrt{${t}} < ${Math.floor(Math.sqrt(t))+1}\\\\
                       ${a(r)}\\times ${Math.floor(Math.sqrt(t))}&> ${a(r)}\\times \\sqrt{${t}} > ${a(r)}\\times ${Math.floor(Math.sqrt(t))+1}{\\text{ (On multiplie par un nombre strictement négatif)}}\\\\
                       ${r*Math.floor(Math.sqrt(t))}&> ${r}\\sqrt{${t}} > ${r*(Math.floor(Math.sqrt(t))+1)}\\\\
                       ${a(e)}${b(r*Math.floor(Math.sqrt(t)))}&> ${a(e)}${n(r)}\\sqrt{${t}} > ${a(e)}${b(r*(Math.floor(Math.sqrt(t))+1))}\\\\
                       ${e+r*Math.floor(Math.sqrt(t))}&> ${e}${n(r)}\\sqrt{${t}} > ${e+r*(Math.floor(Math.sqrt(t))+1)}
                                      \\end{aligned}$<br>
                                      L'encadrement demandé est donc : $ ${e+r*(Math.floor(Math.sqrt(t))+1)}< ${e}${n(r)}\\sqrt{${t}} < ${e+r*Math.floor(Math.sqrt(t))}$.`,o(this,2*$,c),o(this,2*$+1,i))}break;case"Encadrer3":{t=q(3,143,[4,9,16,25,36,49,64,81,100,121]),e=q(-9,9,0),r=q(-9,9,[0,1]);const i=Math.sqrt(t)-.05,c=i*r,m=c+e,d=Math.sqrt(t)+.05,u=d*r,M=u+e;l=`En utilisant l'encadrement $${s(i,1)}<\\sqrt{${t}}<${s(d,1)}$, donner un encadrement de $${e}${n(r)}\\sqrt{${t}}$ le plus précis possible.<br>`,this.interactif&&(l+=f(this,2*$,"")+`$< ${e}${n(r)}\\sqrt{${t}} <$`+f(this,2*$+1," ")),h=`À partir de l'encadrement $${s(i,1)}<\\sqrt{${t}}<${s(d,1)}$, on obtient successivement :<br>`,r>0?(h+=`$\\begin{aligned}
            ${s(i,1)} &< \\sqrt{${t}} < ${s(d,1)}\\\\
        ${a(r)}\\times ${s(i,1)}&< ${a(r)}\\times \\sqrt{${t}} < ${a(r)}\\times ${s(d,1)}{\\text{ (On multiplie par un nombre strictement positif)}}\\\\
        ${s(c,1)}&< ${r}\\sqrt{${t}} <${s(u,1)}\\\\
        ${a(e)}+${s(c,1)}&< ${a(e)}${n(r)}\\sqrt{${t}} < ${a(e)}+${s(u,1)}\\\\
        ${s(m,1)}&< ${e}${n(r)}\\sqrt{${t}} < ${s(M,1)}
                       \\end{aligned}$<br>
                       L'encadrement demandé est donc : $ ${s(m,1)}< ${e}${n(r)}\\sqrt{${t}} < ${s(M,1)}$.`,o(this,2*$,m),o(this,2*$+1,M)):(h+=`$\\begin{aligned}
            ${s(i,1)} &< \\sqrt{${t}} < ${s(d,1)}\\\\
        ${a(r)}\\times ${s(i,1)}&> ${a(r)}\\times \\sqrt{${t}} > ${a(r)}\\times ${s(d,1)}{\\text{ (On multiplie par un nombre strictement négatif)}}\\\\
        ${s(c,1)}&> ${r}\\sqrt{${t}} >${s(u,1)}\\\\
        ${a(e)}${s(c,1)}&> ${a(e)}${n(r)}\\sqrt{${t}} > ${a(e)}${s(u,1)}\\\\
        ${s(m,1)}&> ${e}${n(r)}\\sqrt{${t}} > ${s(M,1)}
                       \\end{aligned}$<br>
                       L'encadrement demandé est donc : $ ${s(M,1)}< ${e}${n(r)}\\sqrt{${t}} < ${s(m,1)}$.`,o(this,2*$,M),o(this,2*$+1,m))}break}this.questionJamaisPosee($,t,e,r,g[$])&&(this.listeQuestions[$]=l,this.listeCorrections[$]=h,$++),x++}C(this)}}export{_ as dateDePublication,et as default,Y as interactifReady,Z as interactifType,rt as refs,X as titre,tt as uuid};
