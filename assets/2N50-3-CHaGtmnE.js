import{af as M,r as a,bC as p,s as o,_ as y,m as i,e as t,u as x,a2 as j,aq as g,l as A}from"./embellissements-BYV7mIDn.js";import{a as c}from"./deprecatedFractions-D2cbyAQf.js";import{b as q}from"./Personne-DRrbQFAY.js";import{t as b}from"./style-CcGLZIPY.js";import{E as C}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const w="Modéliser une situation à l'aide d'une équation",z="16/12/2021",J="846b8",_={"fr-fr":["2N50-3","BP2RES23"],"fr-ch":["10FA3-12","11FA6-8"]};class H extends C{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",3,`1 : Situations concrètes
2 : Programmes de calculs
3 : Mélange`],this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.sup=3}nouvelleVersion(){let f;this.sup===1?f=["typeE1","typeE2","typeE3","typeE4"]:this.sup===2?f=["typeE5","typeE6","typeE7","typeE8"]:f=["typeE1","typeE2","typeE3","typeE4","typeE5","typeE6","typeE7","typeE8"];const v=M(f,this.nbQuestions);for(let m=0,h=0;m<this.nbQuestions&&h<50;){let l="",u="";const d=[];switch(v[m]){case"typeE1":{const e=a(10,20)*10,$=a(15,20)*10,r=a(6,9)*10,n=$-e+r,s=a(3,6),E=j(s,100);l=`  Le salaire mensuel d'un commercial est composé d'un salaire fixe auquel
                  s'ajoute une prime suivant ses objectifs.<br>
                   Au mois de janvier, son salaire fixe est $x$ € et sa prime a été de $${e}$ €.  <br>
                  Au mois de février son salaire fixe a augmenté de $${s}~\\%$ et il reçoit une prime de $${$}$ €. <br>
                  Globalement, son salaire au mois
                  de février a augmenté de $${n}$ € par rapport à celui du mois de janvier. <br>
                  ${g(0)} Exprimer en fonction de $x$ son salaire au mois de janvier, puis celui du mois de février.<br>
                  ${g(1)} Déterminer le salaire du commercial au mois de janvier (arrondir à l'euro près).<br>
              `,u=`${g(0)} Le salaire du mois de janvier en fonction de $x$ est : $x+${e}$.<br>
            Le salaire du mois de février en fonction de $x$ est : $\\left(1+${E.texFraction}\\right)x+${$}=${t(1+s/100)}x+${$}$.<br>
            ${g(1)} Globalement, le salaire au mois
                  de février a augmenté de $${n}$ € par rapport à celui du mois de janvier, cela signifie que le salaire du
                   mois de janvier augmenté de $${n}$ € est donc égal au salaire du mois de février.<br>
            Ainsi, $(x+${e})+${n}=${t(1+s/100)}x+${$}$<br>
            On résout l'équation :<br>
          ${o(8)} $ \\begin{aligned}
                        x+${t(e+n)}&=(1+${t(s/100)})x+${$}\\\\
                       x+${t(e+n)}&=${t(1+s/100)}x+${$}\\\\
                       x+${t(e+n)}-${i(t(e+n))}&=${t(1+s/100)}x+${$}-${i(t(e+n))}\\\\
            x&=${t(1+s/100)}x${t($-e-n)}\\\\
            x-${i(t(1+s/100))}${i("\\textit{x}")}&=${t(1+s/100)}x${t($-e-n)}-${i(t(1+s/100))}${i("\\textit{x}")}\\\\
            \\dfrac{${t(-s/100)}x}{${i(t(-s/100))}}&=\\dfrac{${t($-e-n)}}{${i(t(-s/100))}}\\\\
            x&=\\dfrac{${t($-e-n)}}{${t(-s/100)}}
            \\end{aligned}$<br>`,Math.round(($-e-n)/(-s/100))===($-e-n)/(-s/100)?u+=` ${o(40)}$ \\begin{aligned}
            x&= ${Math.round(($-e-n)/(-s/100))}
            \\end{aligned}$<br>`:u+=` ${o(40)}$ \\begin{aligned}
            x&\\simeq ${Math.round(($-e-n)/(-s/100))}
            \\end{aligned}$<br>`,u+=`Puisque le salaire est composé du fixe et de la prime, le salaire de ce commercial au mois de janvier a été de :
      $${Math.round(($-e-n)/(-s/100))}+${e}$ €, soit  $${Math.round(($-e-n)/(-s/100)+e)}$ €.`,d.push(n,r,$,e,s)}break;case"typeE2":{const e=a(20,30),$=a(e+5,50);let r=a(20,35);const n=a(15,r-1)/100;r=r/100,l=`  Une société de location de véhicules propose deux tarifs :<br>
                $\\bullet$ Tarif A : un forfait de $${e}$ € et $${t(r)}$ € par km parcouru ;<br>
                $\\bullet$  Tarif B : un forfait de $${$}$ € et $${t(n)}$ € par km parcouru ;<br>
          
                       Pour quelle distance (arrondie au km près), les deux tarifs sont-ils égaux ?<br>
                                      `,u=`En notant $x$, le nombre de km parcourus, on a :<br>
                $\\bullet$ Avec le tarif A, le prix à payer est : $${x(r,e)}$ ;<br>
                $\\bullet$  Avec le tarif B, le prix à payer est : $${x(n,$)}$ ;<br>
                          Les deux tarifs sont identiques lorsque : $${x(r,e)}=${x(n,$)}$.<br>
                On résout l'équation :<br>
                $\\begin{aligned}
                ${t(r)}x+${e}&=${t(n)}x+${$}\\\\
                 ${t(r)}x-${i(t(n))}${i("\\textit{x}")}+${e}&=${t(n)}x+${$}-${i(t(n))}${i("\\textit{x}")}\\\\
                       ${t(r-n)}x+${e}&=${$}\\\\
                ${t(r-n)}x+${e}-${i(t(e))}&=${$}-${e}\\\\
                ${t(r-n)}x&=${$-e}\\\\
        \\dfrac{${t(r-n)}x}{${i(t(r-n))}}&=\\dfrac{${$-e}}{${i(t(r-n))}}\\\\
        \\end{aligned}$<br>`,Math.round(($-e)/(r-n))===($-e)/(r-n)?u+=` ${o(40)}$ \\begin{aligned}
                            x&= ${Math.round(($-e)/(r-n))}
                            \\end{aligned}$<br>
                                            C'est pour une distance de $${Math.round(($-e)/(r-n))}$ km que les deux tarifs sont identiques.
               `:u+=` ${o(40)}$ \\begin{aligned}
                            x&\\simeq ${Math.round(($-e)/(r-n))}
                            \\end{aligned}$<br>
                                         C'est pour une distance d'environ $${Math.round(($-e)/(r-n))}$ km que les deux tarifs sont identiques.
                                `,d.push(e,$,r,n)}break;case"typeE3":{const e=a(4,10)/100,$=a(300,400),r=a(Math.floor((e+1)*100),12);l=`  Une usine fabrique des bouteilles en verre. <br>
            En notant $x$ le nombre de bouteilles fabriquées dans une journée, les coûts de fabrication en euros, sont donnés par :
            $${t(e)}x+${t($)}$.<br>
            Ces bouteilles sont toutes revendues au tarif unitaire de $${t(r)}$ €.<br>
            On appelle recette le produit du nombre de bouteilles vendues par le prix unitaire.<br>
            On appelle résultat net de l'entreprise (lorsqu'elle produit et vend $x$ bouteilles), la différence entre la recette et les coûts de fabrication.<br>
      
      Combien de bouteilles l'entreprise doit-elle produire et vendre pour que le résultat net soit nul ?
            <br>
                          `,u=`
      $\\bullet$ La recette est donnée par : $${t(r)}\\times x=${t(r)}x$ ;<br>
      $\\bullet$ Les coûts de fabrication sont donnés par : $${t(e)}x+${t($)}$ ;<br>
      $\\bullet$ Le résultat net est donné par la différence entre la recette et les coûts, donc par :<br>
       $${t(r)}x-(${t(e)}x+${t($)})=${t(r)}x-${t(e)}x-${t($)}=${t(r-e)}x-${t($)}$.<br>
            Le résultat est nul lorsque  : $${t(r-e)}x-${t($)}=0$<br>
            On résout l'équation :<br>
           $\\begin{aligned}
                  ${t(r-e)}x-${t($)}+${i(t($))}&=0+${i(t($))}\\\\
            ${t(r-e)}x&=${t($)}\\\\
            \\dfrac{${t(r-e)}x}{${i(t(r-e))}}&=\\dfrac{${t($)}}{${i(t(r-e))}}\\\\
                 \\end{aligned}$<br>`,Math.round($/(r-e))===$/(r-e)?u+=`${o(37)} $\\begin{aligned}
         x&=${Math.round($/(r-e))}
         \\end{aligned}$<br>
            C'est pour une production de $${Math.round($/(r-e))}$ bouteilles  que le résultat net de l'entreprise est nul.
        `:u+=`${o(37)} $\\begin{aligned}
        x&\\simeq${Math.round($/(r-e))}
        \\end{aligned}$<br>
           C'est pour une production d'environ $${Math.round($/(r-e))}$ bouteilles  que le résultat net de l'entreprise est nul.
       `,d.push(e,$,r)}break;case"typeE4":{const e=a(48,55),$=a(3,6),r=a(12,25),n=a(3,5),s=r*(e+$)-n*e;l=`  $${e}$ élèves  d'un lycée font une sortie théâtre. Ils sont accompagnés de $${$}$ adultes. <br>
            Les élèves bénéficient d'un tarif réduit. Ils paient $${n}$ € de moins que les adultes. <br>
            Le coût total de cette sortie (élèves $+$ adultes) est de $${s}$ €. <br>
            En notant $x$ le tarif pour un adulte, modéliser la situation à l'aide d'une équation puis déterminer le prix de la place pour un adulte.
      
              `,u=`En notant $x$ le tarif pour un adulte,  celui d'un élève est $(x-${n})$ €. <br>
            Puisque le coût total est de $${s}$ €, on obtient l'équation : <br>
            $\\begin{aligned}
            ${e}\\times (x-${n})+${$}\\times x &=${s}\\\\
                        ${t(e)}x-${t(e*n)}+${$} x &=${s}\\\\
            ${t(e+$)}x-${t(e*n)} &=${s}\\\\
            ${t(e+$)}x-${t(e*n)}+${i(t(e*n))} &=${s}+${i(t(e*n))}\\\\
            ${t(e+$)}x &=${t(s+e*n)}\\\\
            \\dfrac{${t(e+$)}x}{${i(t(e+$))}} &= \\dfrac{${t(s+e*n)}}{${i(t(e+$))}}\\\\
            x &= ${t((s+e*n)/(e+$))}\\end{aligned}$<br>
      Le prix de la place de théâtre pour un adulte est : $${t((s+e*n)/(e+$))}$ €.
              `,d.push(e,$,s,n)}break;case"typeE5":{const e=a(4,10),$=a(2,10),r=a(2,10),n=a(-5,5);l=` ${b("Voici un programme de calcul :")} `,l+=p(["Choisir un nombre",`Multiplier ce nombre par $${e}$`,`Ajouter $${$}$`,`Multiplier le résultat par $${r}$`]),l+=`Quel nombre doit-on choisir au départ pour obtenir $${n}$ comme résultat final ?<br>
               On donnera le résultat sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant.`,u=`En notant $x$ le nombre choisi au départ, on obtient  :<br>
          $\\bullet$ Multiplier ce nombre par $${e}$ : ${o(6)}$${e}\\times x=${e}x$ ;<br>
          $\\bullet$ Ajouter $${$}$ : ${o(6)}$${e}x+${$}$ ; <br>
          $\\bullet$ Multiplier le résultat par $${r}$ :${o(6)}$${r}\\times (${e}x+${$})=${t(r*e)}x+${t($*r)}$.<br>
          <br>
          On cherche $x$ tel que : <br>
          $\\begin{aligned}
          ${t(r*e)}x+${t($*r)}&=${t(n)}\\\\
         ${t(r*e)}x+${t($*r)}-${i(t($*r))}&=${t(n)}-${i(t($*r))}\\\\
         ${t(r*e)}x&=${t(n-$*r)}\\\\
         \\dfrac{${t(r*e)}x}{${i(t(r*e))}}&=\\dfrac{${t(n-$*r)}}{${i(t(r*e))}}\\\\
         x&=${c(n-$*r,r*e)}
         \\end{aligned}$<br>
           Le nombre que l'on doit choisir pour obtenir $${n}$ à la fin du programme est :  $${c(n-$*r,r*e)}$.
                     `,d.push(e,$,r,n)}break;case"typeE6":{const e=a(2,10),$=a(2,10),r=a(2,10,[e]),n=q(),s=q();l=`${n} choisit un nombre, le multiplie par $${e}$ puis ajoute $${$}$.  <br>
           ${s} choisit le même nombre, lui ajoute $${r}$, multiplie le résultat par le nombre de départ, puis soustrait le carré du nombre de départ.<br>
            Quel nombre doivent-ils choisir au départ pour obtenir le même résultat ?`,u=`En notant $x$ le nombre choisi au départ, on obtient :<br>
          $\\bullet$  avec le calcul de ${n} :
      $${e}\\times x+${$}=${e}x+${$}$ ;<br>
              $\\bullet$ avec celui de ${s}, on obtient : <br>
      $(x+${r})\\times x-x^2=\\cancel{x^2}+${r}x-\\cancel{x^2}=${r}x$.<br>
      <br>
      On cherche donc $x$ tel que : <br>
      $\\begin{aligned}
      ${e}x+${$}&=${r}x\\\\
      ${e}x+${$}-${i(t(r))}${i("\\textit{x}")}&=${r}x-${i(t(r))}${i("\\textit{x}")}\\\\
      ${x(e-r,0)}+${$}&=0\\\\
      ${x(e-r,0)}+${$}-${i($)}&=0-${i($)}
      \\end{aligned}$<br>`,e-r===1?u+=`${o(25)}$x=-${$}$<br>
           Le nombre commun que ${n} et ${s} doivent choisir au départ pour obtenir le même résultat est : $-${$}$.
                  `:u+=`
            ${o(20)}$ \\begin{aligned}
           \\dfrac{${e-r}x}{${i(e-r)}}&=\\dfrac{${-$}}{${i(e-r)}}\\\\
           x&=${c(-$,e-r)}
           \\end{aligned}$<br>
          Le nombre commun que ${n} et ${s} doivent choisir au départ pour obtenir le même résultat est : $${c(-$,e-r)}$.`,d.push(e,$,r)}break;case"typeE7":{const e=a(2,8),$=a(10,100);l=`On donne les deux programmes de calcul suivants :<br>
          ${b("Programme 1 :")}<br>
                 `,l+=p(["Choisir un nombre",`Ajouter $${e}$`,"Prendre le carré du résultat"]),l+=`<br>
          ${b("Programme 2 :")}<br>
                      `,l+=p(["Choisir un nombre",`Multiplier par $${t(2*e)}$ `,`Ajouter $${$}$`]),l+="<br>Déterminer les nombres éventuels que l'on peut entrer dans ces deux programmes pour qu'au final ils donnent le même résultat.<br><br>",u=`En notant $x$ le nombre choisi au départ : <br>
                 
                 On obtient avec le ${b("programme 1 :")} <br>
      $\\bullet$ Ajouter $${e}$ :${o(5)} $x+${e}$ ;<br>
      $\\bullet$ Prendre le carré du résultat :${o(5)} $(x+${e})^2=x^2+2\\times x\\times ${e}+${e}^2=x^2+${t(2*e)}x+${t(e*e)}$ ;<br>
                  <br> On obtient avec le ${b("programme 2 :")} <br>
      $\\bullet$ Multiplier par $${t(2*e)}$ :${o(5)} $x\\times ${t(2*e)}=${t(2*e)}x$ ;<br>
      $\\bullet$ Ajouter $${$}$ : ${o(5)} $${t(2*e)}x+${$}$.<br><br>
      Les deux programmes donnent le même résultat lorsque : <br>
      $\\begin{aligned}
      x^2+${t(2*e)}x+${t(e*e)}&=${t(2*e)}x+${$}\\\\
      x^2+${t(2*e)}x+${t(e*e)}-${i(t(2*e))}${i("\\textit{x}")}&=${t(2*e)}x+${$}-${i(t(2*e))}${i("\\textit{x}")}\\\\
      x^2+${t(e*e)}&=${$}\\\\
      x^2+${t(e*e)}-${i(t(e*e))}&=${$}-${i(t(e*e))}\\\\
      x^2&=${t($-e*e)}
      \\end{aligned}$
      <br>
            `,$<e*e?u+=`
           L'équation n'a pas de solution car $${t($-e*e)}<0$. <br>Par conséquent il n'existe pas de nombre qui donne le même résultat avec les deux programmes.
                  `:$===e*e?u+=`${o(8)}$\\begin{aligned}x&=-${$}\\\\
              x&=0
              \\end{aligned}<br>
           Quand on entre $0$, les deux programmes donnent le même résultat.
                  `:$-e*e===1||$-e*e===4||$-e*e===9||$-e*e===16||$-e*e===25||$-e*e===36||$-e*e===49||$-e*e===64||$-e*e===81||$-e*e===100?u+=`${o(10)}$x=-${Math.sqrt($-e*e)}$ ou $x=${Math.sqrt($-e*e)}$.<br>
              Quand on entre $-${Math.sqrt($-e*e)}$ ou $-${Math.sqrt($-e*e)}$, on obtient le même résultat avec les deux programmes.
                  `:u+=`${o(10)}$x=-\\sqrt{${$-e*e}}$ ou $x=\\sqrt{${$-e*e}}$.<br>
              Quand on entre   $-\\sqrt{${$-e*e}}$ ou $\\sqrt{${$-e*e}}$, on obtient le même résultat avec les deux programmes.
            `,d.push(e,$)}break;case"typeE8":default:{const e=a(2,10),$=a(2,10),r=a(2,10),n=a(2,10);l=`On donne les deux programmes de calcul suivants :<br>
          ${b("Programme 1 :")}<br>
                   `,l+=p(["Choisir un nombre","Prendre l'opposé de ce nombre",`Multiplier par $${$}$`,`Ajouter $${e}$`]),l+=`<br>
          ${b("Programme 2 :")}<br>
                        `,l+=p(["Choisir un nombre",`Multiplier par $${r}$ `,`Ajouter $${n}$`]),l+=`<br>On entre le même nombre dans chacun des deux programmes de calcul et on effectue le produit de ces deux nombres. <br>
              Quel(s) nombre(s) doit-on entrer pour que ce produit soit nul ?<br><br>`,u=`En notant $x$ le nombre choisi au départ : <br>
                   
                   On obtient avec le ${b("programme 1 :")} :<br>
        $\\bullet$ Prendre l'opposé de ce nombre :${o(10)} $-x$ <br>
        $\\bullet$ Multiplier par $${$}$ :${o(10)} $${$}\\times (-x)= -${$}x$ <br>
        $\\bullet$ Ajouter $${e}$ :${o(10)} $-${$}x+${e}$ <br>
                <br> On obtient avec le ${b("programme 1 :")} :<br>
        $\\bullet$ Multiplier par $${r}$ :${o(10)} $x\\times ${r}=${r}x$ <br>
        $\\bullet$ Ajouter $${n}$ : ${o(10)} $${r}x+${n}$<br>
        
        Le produit des deux nombres obtenu à l'issue de ces deux programmes est  : $(-${$}x+${e})(${r}x+${n})$<br>
        On cherche les valeurs de $x$ pour que ce produit soit nul c'est-à-dire les solutions de l'équation : $(-${$}x+${e})(${r}x+${n})=0$.<br>
        
        On reconnaît une équation produit nul.<br>
        ${y("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>
        
        $\\begin{aligned}
        -${$}x+${e}=0  &${o(2)}\\text{ou}${o(2)}  ${r}x+${n}=0\\\\
                -${$}x+${e}-${i(e)}=0-${i(e)}&${o(2)}\\text{ou}${o(2)} ${r}x+${n}-${i(n)}=0-${i(n)}\\\\
        -${$}x=-${e}&${o(2)}\\text{ou}${o(2)}${r}x=${-n}\\\\
        \\dfrac{-${$}x}{${i(-$)}}=\\dfrac{-${e}}{${i(-$)}} &${o(2)}\\text{ou} ${o(2)}\\dfrac{-${n}x}{${i(r)}}=\\dfrac{-${n}}{${i(r)}}\\\\
        x=${c(-e,-$)}&${o(2)}\\text{ou}${o(2)}x=${c(-n,r)}\\end{aligned}$<br>
              On obtient $0$ en faisant le produit des deux résultats de ces programmes en choisissant comme nombres au départ : $${c(-e,-$)}$ ou $${c(-n,r)}$.
              `,d.push(e,$,r,n)}break}this.questionJamaisPosee(m,d.map(String).join())&&(this.listeQuestions[m]=l,this.listeCorrections[m]=u,m++),h++}A(this)}}export{z as dateDePublication,H as default,_ as refs,w as titre,J as uuid};
