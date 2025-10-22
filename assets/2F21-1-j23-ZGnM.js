import a from"decimal.js";import{d as ne,e as B,c as F}from"./courbes-C9fk0WuH.js";import{g as te,af as re,r as $,e,a as h,C as U,j as y,o as T,q as se,p as L,k as A,s as x,a7 as m,a8 as E,l as ae}from"./embellissements-BYV7mIDn.js";import{r as H}from"./reperes-WwrVcExd.js";import{c as b}from"./lists-i1i4IA1M.js";import{p as I,b as ie}from"./Personne-DRrbQFAY.js";import{E as oe}from"./Exercice-DtXhjCyI.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const we="Modéliser une situation à l'aide d'une fonction",Me="14/02/2023",Oe="13/12/2024",ke="5621b",Ce={"fr-fr":["2F21-1"],"fr-ch":["10FA5-16","11FA9-10"]};class De extends oe{constructor(){super(),this.nbQuestions=1,this.sup="12",this.spacing=1.5,this.spacingCorr=2,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : La salle de sport","2 : Location de voitures","3 : Distance de freinage","4 : Abonnement à une revue","5 : Station service","6 : La moto","7 : Alcool dans le sang","8 : Pression artérielle","9 : Le silo à grains","10 : Le hand-spinner","11 : La facture d'eau","12 : Mélange"].join(`
`)]}nouvelleVersion(){const J=te({saisie:this.sup,min:1,max:11,melange:12,defaut:12,nbQuestions:this.nbQuestions}),N=re(J,this.nbQuestions);for(let w=0,c,g,X=0;w<this.nbQuestions&&X<50;){const O=[["f"],["g"],["h"],["u"],["v"],["w"]];switch(N[w]){case 1:{const n=$(10,12),t=h([0,.25,.5,.75,1]),r=new a($(5,6)).add(t),s=$(25,30),i=h([0,.25,.5,.75,1]),o=new a($(4,4)).add(i),u=I(),d=$(30,70),p=$(25,30);c=` Dans une salle de sport, deux formules sont proposées :<br>
            ${E("Formule A :")} abonnement mensuel de $${n}$ € puis $${m(r)}$ € par séance ;<br>
            ${E("Formule B :")} abonnement mensuel de $${s}$ € puis $${m(o)}$ € par séance.<br>
            Le nombre de séances mensuelles ne peut excéder $${p}$. <br>
            On note $x$ le nombre de séances mensuelles d'un abonné, $f(x)$ le prix payé avec la formule A et $g(x)$ le prix payé avec la formule B.<br>
            `,c+=b({items:[" Donner l'ensemble de définition des fonctions $f$ et $g$."," Exprimer en fonction de $x$, $f(x)$, puis $g(x)$.",`${u} choisit une formule mais ne veut pas dépenser plus de $${d}$ € pour un mois.<br>
                Quelle formule lui conseiller s'il veut faire le maximum de séances de sport dans le mois ?`," À partir de combien de séances mensuelles, la formule B est-elle plus avantageuse ?"],style:"nombres"}),g=b({items:[`Le nombre minimal de séances dans le mois est $0$ et le nombre maximal est $${p}$, donc l'ensemble de définition des fonctions $f$ et $g$ est l'ensemble des entiers de l'intervalle $[0\\,;\\,${p}]$.`,` Les formules comprennent un abonnement fixe et un tarif particulier pour une séance. <br>
          Ainsi, le montant mensuel pour une formule est : Abonnement + Coût d'une séance $\\times$ Nombre de séances. <br>
          La fonction $f$ est définie par $f(x)=${n}+${m(r)}x$ et la fonction $g$ est définie par $g(x)=${s}+${m(o)}x$.`,` On cherche le nombre de séances maximum que l'on peut faire avec $${d}$ € avec les formule A et B.<br>
          Pour la formule A, on cherche $x$ tel que $f(x)\\leqslant${d}$.<br>
          $\\begin{aligned}
${n}+${m(r)}x&\\leqslant${d}\\\\
${m(r)}x&\\leqslant ${d}-${n}${x(8)} \\text{(On retranche ${n} à chaque membre)} \\\\
${m(r)}x&\\leqslant ${d-n}\\\\
x&\\leqslant \\dfrac{${d-n}}{${m(r)}}${x(8)}\\text{(On divise par ${m(r)}  chaque membre)}
\\end{aligned}$
<br>
Le plus grand entier inférieur ou égal à $\\dfrac{${d-n}}{${m(r)}}$ est $${new a(d-n).div(r).floor()}$.<br>
Avec la formule A, ${u} pourra faire au maximum $${new a(d-n).div(r).floor()}$ séances.<br><br>
Pour la formule B, on cherche $x$ tel que $g(x)\\leqslant${d}$.<br>
$\\begin{aligned}
${s}+${m(o)}x&\\leqslant${d}\\\\
${m(o)}x&\\leqslant ${d}-${s}${x(8)} \\text{(On retranche ${s} à chaque membre)} \\\\
${m(o)}x&\\leqslant ${d-s}\\\\
x&\\leqslant \\dfrac{${d-s}}{${m(o)}}${x(8)} \\text{(On divise par ${m(o)} chaque membre)}
\\end{aligned}$
<br>
Le plus grand entier inférieur ou égal à $\\dfrac{${d-s}}{${m(o)}}$ est $${new a(d-s).div(o).floor()}$.<br>
Avec la formule B, ${u} pourra faire au maximum $${new a(d-s).div(o).floor()}$ séances.<br><br>
          ${new a(d-s).div(o).floor()===new a(d-n).div(r).floor()?`Les deux formules permettent autant de séances avec un budget de $${d}$ €.<br><br>`:`${E("Conclusion : ")}  ${new a(d-s).div(o).floor()>new a(d-n).div(r).floor()?"La formule B ":"La formule A"} permet de faire plus de séances, elle est plus avanatgeuse pour ${u}.`}`,` La formule B est plus avantageuse que la formule A lorsque $g(x)$ est strictement inférieure à $f(x)$.<br>
            ${x(8)} $\\begin{aligned}
            ${s}+${m(o)}x&<${n}+${m(r)}x\\\\
            ${m(o)}x&< ${n}+${m(r)}x-${s}${x(8)}\\text{(On retranche ${s} à chaque membre)} \\\\
            ${m(o)}x-${m(r)}x&< ${n-s}${x(8)}\\text{(On retranche ${m(r)}  }x\\text{ à chaque membre)} \\\\
            ${m(o.sub(r))}x&<${n-s}\\\\
            x&> \\dfrac{${n-s}}{${m(o.sub(r))}}${x(8)}\\text{(On divise par } ${e(o.sub(r),2)}   < 0 \\text{  chaque membre)}\\\\
            x&> \\dfrac{${s-n}}{${m(r.sub(o))}} \\end{aligned}$<br>
            Le plus grand entier supérieur  à $\\dfrac{${s-n}}{${m(r.sub(o))}}$ est 
            $${new a(n-s).div(o.sub(r)).floor().add(1)}$.<br>
            La formule B est plus intéressante que la formule A à partir de $${new a(n-s).div(o.sub(r)).floor().add(1)}$  séances.`],style:"nombres"})}break;case 2:{const n=$(80,120),t=new a($(41,65,[50,60])).div(100),r=$(7,10)*100,s=$(50,400),i=new a(t).mul(s).add(n);c=`  Une société de location de véhicules particuliers propose le tarif suivant pour un week-end de location :<br>
          ${E("TARIF WEEK-END :")}  forfait de $${n}$ € puis $${e(t,2)}$ € par km parcouru (dans la limite de $${e(r,0)}$ km).<br>
          On note $x$ le nombre de km parcourus par un client au cours d'un week-end et on considère la fonction $T$ qui à chaque valeur de $x$ associe le prix payé par le client.<br>`,c+=b({items:["Donner l'ensemble de définition de la fonction $T$."," Exprimer $T(x)$ en fonction de $x$.",` Résoudre l'équation $T(x)=${e(i,2)}$.
          Interpréter ce résultat dans le contexte de l'exercice. `],style:"nombres"}),g=b({items:[`   On ne peut pas faire plus de $${e(r)}$ km durant le week-end, ainsi l'ensemble de 
                  définition de la fonction $T$ est $[0\\,;\\,${r}]$.`,` Le tarif  comprend un forfait fixe et un tarif par km parcouru. <br>
          Ainsi, le montant de la location est  : 
          Forfait + Coût d'un km $\\times$ Nombre de km parcourus, soit $T(x)=${n}+${e(t,2)}x$.`,` On résout l'équation  $T(x)=${e(i,2)}$.<br>
          $\\begin{aligned}
          ${n}+${e(t,2)}x&=${e(i,2)}\\\\
          ${e(t,2)}x&= ${e(i,2)}-${n}${x(8)} \\text{(On retranche ${n} à chaque membre)} \\\\
x&=\\dfrac{${e(new a(i).sub(n),2)}}{${e(t,2)}}${x(8)}\\text{(On divise par ${e(t,2)}  chaque membre)}\\\\
x&=${e(s,0)}
\\end{aligned}$<br>
L'équation a pour solution $${e(s,2)}$.<br>
On peut dire que lorsque le prix payé pour la location est $${e(i,2)}$ €, le client a parcouru $${e(s,0)}$ km durant le week-end.`],style:"nombres"})}break;case 3:{const n=new a($(2011,2035)).div(10),t=$(30,80),r=new a($(70,100));c=`  Sur toute sèche, la distance de freinage en mètres, d'une voiture est modélisée de la façon suivante : <br>
          En notant $v$ la vitesse du véhicule (en km/h), sa distance de freinage $d(v)$  (en m) est donnée par le carré de sa vitesse divisée par $${e(n,1)}$.`,c+=b({items:[" Donner l'expression de $d(v)$ en fonction de $v$. ",` Calculer au mètre près, la distance de freinage de la voiture si elle roule à $${r}$ km/h.`," La distance de freinage est-elle proportionnelle à la vitesse ?",`  La distance de freinage de cette voiture a été de $${t}$ m. Quelle était sa vitesse en km/h arrondie à l'unité ? `],style:"nombres"}),g=b({items:[` Le carré de la vitesse est $v^2$, donc la fonction $d$ est définie par : $d(v)=\\dfrac{v^2}{${e(n,1)}}$. `,` $d(${r})=\\dfrac{${r}^2}{${e(n,1)}}\\simeq ${e(new a(r.pow(2).div(n)),0)}$. La distance de freinage est d'environ $${e(new a(r.pow(2).div(n)),0)}$.`," La distance de freinage n'est pas proportionnelle à la vitesse car la fonction $d$ n'est pas une fonction linéaire. Elle ne traduit pas une situation de proportionnalité.",`   On cherche $v$ tel que $d(v)=${t}$.<br>
                    $\\begin{aligned}
\\dfrac{v^2}{${e(n,1)}}&=${t}\\\\
v^2&=${t} \\times ${e(n,2)} ${x(8)} \\text{(On multiplie par ${e(n,1)} chaque membre)} \\\\
v^2&= ${e(new a(t).mul(n),2)}\\\\
v&= -\\sqrt{${e(new a(t).mul(n),2)}} ${x(8)} \\text{ou} ${x(8)} v= \\sqrt{${e(new a(t).mul(n),2)}}${x(8)}\\text{(deux nombres ont pour carré } ${e(new a(t).mul(n),2)} \\text{)}
\\end{aligned}$<br>
Puisque $v$ est un nombre positif, on en déduit $v= \\sqrt{${e(new a(t).mul(n),2)}}\\simeq ${new a(t).mul(n).sqrt().round()}$.<br>
Lorsque la distance de freinage de la voiture est $${t}$ m, sa vitesse est alors d'environ $${new a(t).mul(n).sqrt().round()}$ km/h.<br>
`],style:"nombres"})}break;case 4:{const n=h(O),t=$(6,10)*1e3,r=h([40,50,80,100]),s=$(31,49)*100,i=$(30,39)*10;c=` Le nombre d'abonnés à une revue dépend du prix de l'abonnement à cette revue, prix exprimé en euros.<br>
          On considère que l'on a la relation : <br>
          nombre d'abonnés $= ${e(t)} - ${r} \\times$ (prix de l'abonnement en euros).<br>
          Soit $${n}$ la fonction qui donne le nombre d'abonnés en fonction du prix de l'abonnement annuel à cette revue.`,c+=b({items:[`Déterminer l'expression algébrique de $${n}$. Préciser la variable.`," Que peut-on dire du nombre d'abonnés lorsque le prix de l'abonnement augmente ?",` Expliquer pourquoi le prix de l'abonnement ne doit pas être de $${i}$ €. Déterminer l'ensemble de définition de la fonction $${n}$.`,` La directrice des abonnements souhaite avoir $${e(s)}$ abonnés à la revue. Quel doit être le prix de l'abonnement ?`,` On obtient la recette de la vente de $x$ abonnements en multipliant le nombre d'abonnés par le prix d'un abonnement. <br>
               Exprimer la recette en fonction du prix de l'abonnement sous forme développée.`],style:"nombres"}),g=b({items:[` En notant $x$ la variable, l'expression algébrique de $${n}$ est : $${n}(x)=${e(t)}-${r}x$.`,` La relation $${n}(x)=${e(t)}-${r}x$ montre que lorsque le prix de l'abonnement $x$ augmente, le nombre d'abonnés $${n}(x)$ diminue. <br>
          Plus précisément, à chaque hausse de $1$ €, le nombre d'abonnés diminue de $${r}$ (coefficient devant $x$).`,` Pour un montant de $${i}$ € de l'abonnement, on obtient $${n}(${i})=${e(t,0)}-${r}\\times ${i}=${e(t-r*i,0)}$.<br>
          On obtiendrait alors un nombre d'abonnés négatif ce qui est impossible. On ne peut donc pas fixer le montant de l'abonnement à $${i}$ €.<br>
          On cherche la valeur de $x$ donnant un nombre d'abonnés nul en résolvant l'équation $${n}(x)=0$ :<br>
          $\\begin{aligned}
          ${e(t)}-${r}x&=0\\\\
         - ${r}x&= -${e(t)}${x(8)} \\text{(On retranche ${e(t)} à chaque membre)} \\\\
x&=\\dfrac{${e(-t)}}{${-r}}${x(8)}\\text{(On divise par } ${-r} \\text{ chaque membre)}\\\\
x&=\\dfrac{${e(t)}}{${r}}\\\\
x&=${e(t/r,2)}
\\end{aligned}$<br>
On en déduit que le montant de l'abonnement doit se situer entre $0$ € et $${e(t/r,2)}$ €. <br>
Par conséquent l'ensemble de définition de la fonction $${n}$ est : $[0\\,;\\,${e(t/r,2)}]$.`,` On cherche la valeur de $x$  afin que $${n}(x)=${e(s)}$.<br>
          $\\begin{aligned}
          ${e(t)}-${r}x&=${e(s)}\\\\
         - ${r}x&= ${e(s)}-${t}${x(8)} \\text{(On retranche ${e(t)} à chaque membre)} \\\\
x&=\\dfrac{${e(-t+s)}}{${-r}}${x(8)}\\text{(On divise par } ${-r} \\text{ chaque membre)}\\\\
x&=\\dfrac{${e(t-s)}}{${r}}\\\\
x&=${e((t-s)/r,2)}
\\end{aligned}$<br>
Pour avoir $${e(s)}$ abonnés, la directrice des abonnements doit fixer le prix de l'abonnement à $${m((t-s)/r)}$ €.`,` Comme $x$ désigne le montant de l'abonnement et $${n}(x)$ le nombre d'abonnés, le produit du nombre d'abonnés par le prix d'un abonnement est $${n}(x)\\times x$, soit $(${e(t)}-${r}x)\\times x$.<br>
          Son expression développée est :  $${e(t)}x-${r}x^2$.`],style:"nombres"})}break;case 5:{const n=new a($(150,200)).div(100),t=$(3,6),r=h([40,45,50,55,60,65,70]),s=$(t,r),i=new a(n).mul(s),o=ie(),u=h(O);c=`  Dans une station service, le prix de l'essence sans plomb 95 est de $${e(n)}$ € le litre.<br>
Dans cette station, il n'est pas possible de prendre moins de $${t}$ litres d'essence.<br>
${o} fait le plein de sa voiture dans cette station service. Le réservoir de sa voiture est vide et peut contenir au maximum $${r}$ litres.<br>

On note $x$ le nombre de litres que met ${o} pour faire le plein du réservoir  de sa voiture. <br>
On considère la fonction $${u}$ qui associe à chaque valeur de $x$, le prix payé en euros par ${o}.`,c+=b({items:[`Donner l'ensemble de définition de la fonction $${u}$. `,` Déterminer l'expression algébrique de la fonction $${u}$ (c'est-à-dire l'expression de $${u}(x)$ en fonction de $x$).`," Le prix payé est-il proportionnel au nombre de litres mis dans le réservoir ? Justifier.",`  Résoudre l'équation $${u}(x)=${e(i,2)}$. Interpréter ce résultat dans le contexte de l'exercice. `],style:"nombres"}),g=b({items:[` Le minimum de litres que ${o} peut mettre est  $${t}$ et le maximum est $${r}$. <br>
            L'ensemble de définition de $${u}$ est donc $[${t}\\,;\\,${r}]$.`,` Pour obtenir le prix payé, on multiplie le nombre de litres par le prix d'un litre. <br>
            Ainsi, l'expression algébrique de $${u}$ est : $${u}(x)=${e(n,2)}\\times x$, soit $${u}(x)=${e(n,2)}x$.`,` Le prix payé est proportionnel au nombre de litres. La fonction $${u}$ est une fonction linéaire traduisant une situation de proportionnalité.`,`   On cherche $x$ tel que $${u}(x)=${e(i,2)}$.<br>
            $\\begin{aligned}
                      ${e(n,2)}x&=${e(i,2)}\\\\
  x&=\\dfrac{${e(i,2)}}{${e(n,2)}} ${x(8)} \\text{(On divise par ${e(n,2)} chaque membre)} \\\\
  x&= ${s}
    \\end{aligned}$<br>
  Pour $${s}$ litres mis dans le réservoir, le coût est de  $${e(i,2)}$ €.`],style:"nombres"})}break;case 6:{const n=new a($(-5,-2)),t=new a($(-15,-10)).div(10),r=new a($(-39,-25)).div(10),s=I(),i=h(O),o=y("\\text{O}",-.3,-.3,{letterSize:"scriptsize"}),u=y("\\text{Temps (en s)}",9,-.7,{letterSize:"scriptsize"}),d=y("\\text{Hauter (en m)}",1,7,{letterSize:"scriptsize"}),p=H({xMin:0,yMin:0,yMax:3,xMax:5,xUnite:2,yUnite:2,axeXStyle:"->",axeYStyle:"->",grilleX:!1,grilleY:!1,xThickMax:0,yThickMax:0}),l=T({xmin:-1,xmax:13,ymin:-1.2,ymax:7,pixelsParCm:20,scale:.7,style:"margin: auto"},F(q=>-.5*(q+1)*(q-4),{repere:p,xMin:0,xMax:4,color:"blue",epaisseur:2,step:.2}),u,d,p,o);c=`  Lors d'une course en moto-cross, après avoir franchi une rampe, ${s} a effectué un saut en moto.
          On note $t$ la durée (en secondes) de ce saut.<br>
          Le saut commence dès que ${s} quitte la rampe c'est-à-dire lorsque $t=0$.<br>
          La hauteur (en mètres) en fonction de la durée $t$ est donnée par la fonction $${i}$ défine par   :  $${i}(t)=(${e(n,3)}t${e(t,2)})(t${e(r,2)})$.<br>
          Voici la courbe représentative de cette fonction $${i}$ :<br><br>
          `,c+=`${l}`,c+=b({items:[` Calculer $${i}(4)$. Que peut-on en déduire ?`,`  À quelle hauteur ${s} se trouve-t-il lorsqu'il quitte la rampe ?`,`  Combien de temps dure le saut de ${s} ?`,`  Développer et réduire l'expression de $${i}$.`],style:"nombres"}),g=b({items:[` $${i}(4)=(${e(n,3)}\\times 4${e(t,2)})(4 ${e(r,2)})=
                  ${e(n.mul(4).plus(t),2)}\\times ${e(r.plus(4),2)}
                  =${e(new a(n).mul(4).plus(t).mul(r.plus(4)),2)}$<br>
                  
                  Comme le résultat est négatif, on en déduit que le saut dure moins de $4$ secondes.`,` La hauteur du début du saut est donnée par : $${i}(0)=(${e(n,3)}\\times 0${e(t,2)})(0 ${e(r,2)})
                    =${e(t.mul(r),2)}$.<br>
                     ${s} se trouve à $${e(t.mul(r),2)}$ mètres au début du saut.`,` Le saut commence à $t=0$ et se termine lorsque ${s} se retrouve au sol, c'est-à-dire lorsque la hauteur est nulle. <br>
                    Ainsi, le temps du saut est donnée par la solution positive de l'équation $(${e(n,3)}t${e(t,2)})(t${e(r,2)})=0$<br>
                    Il s'agit d'une équation produit nul qui a deux solutions : $t_1= -\\dfrac{${e(-t,2)}}{${e(-n,2)}}$ (valeur négative)  et   $t_2= ${e(-r,2)}$.  <br>
                    Le saut dure  $${e(-r,2)}$ secondes.`,`On développe en utilisant la double distributivité :<br>
                    $\\begin{aligned}
                    ${i}(t)&=(${e(n,3)}t${e(t,2)})(t${e(r,2)})\\\\
                    &=${e(n,3)}t^2+${e(n.mul(r),3)}t${e(t,2)}t+${e(t.mul(r),2)}\\\\
                    &=${e(n,3)}t^2+${e(n.mul(r).plus(t),2)}t+${e(t.mul(r),2)}     
                  \\end{aligned}$`],style:"nombres"})}break;case 7:{const n=$(17,21)/10,t=$(-10,-5)/10,r=h([11,12,13,17,18]),s=h(O),i=U("O",-.3,-.3),o=D=>n*D*Math.exp(t*D),u=D=>(n+n*t*D)*Math.exp(t*D),d=se(L(0,5),0,"","red");d.epaisseur=2;const p=B(0,7,u,0,.01);if(p===!1){window.notify("antecedentParDichotomie n'a pas trouvé d'antécédent",{s0:p});continue}const f=B(0,p*1.5,o,.5,.01);if(f===!1){window.notify("antecedentParDichotomie n'a pas trouvé d'antécédent",{s0:p,s1:f});continue}const l=B(p*1.5,6*1.5,o,.5,.01);if(l===!1){window.notify("antecedentParDichotomie n'a pas trouvé d'antécédent",{s0:p,s1:f,s2:l});continue}const q=H({xMin:0,yMin:0,yMax:o(-1/t)+.2,xMax:10,xUnite:1,yUnite:10,axeXStyle:"->",axeYStyle:"->",xThickDistance:1,yThickDistance:.1,xLabelMin:0,yLabelMin:0,yLabelEcart:1,xLabelEcart:.6,grilleXDistance:1,grilleYDistance:1,grilleXMin:0,grilleYMin:0,grilleXMax:10,grilleYMax:o(p)+.2}),v=L(p,o(p)*10),S=L(v.x,0),k=A(v,S);k.epaisseur=2,k.pointilles=5;const Q=L(0,v.y),M=A(v,Q);M.epaisseur=2,M.pointilles=5;const C=L(f,o(f)*10),P=L(C.x,0),V=A(C,P);V.epaisseur=2,V.pointilles=5;const j=L(l,o(l)*10),Y=L(j.x,0),z=A(j,Y);z.epaisseur=2,z.pointilles=5;const _=A(P,Y,"red");_.epaisseur=5;const R=y(`Max = ${Math.round(o(p)*100)/100}`,-3,v.y,{letterSize:"scriptsize"}),G=y(`${Math.round(p*10)/10}`,v.x,-1,{letterSize:"scriptsize"}),K=y(`${Math.round(f*10)/10}`,C.x,-1,{letterSize:"scriptsize"}),W=y(`${Math.round(l*10)/10}`,j.x,-1,{letterSize:"scriptsize"}),Z=T({xmin:-2,xmax:16,ymin:-1,ymax:(o(p)+.2)*10,pixelsParCm:30,scale:.7,style:"margin: auto"},[F(o,{repere:q,xMin:0,xMax:10,color:"blue",epaisseur:2,step:.15}),q,i]),ee=T({xmin:-5,xmax:16,ymin:-2.5,ymax:(o(p)+.2)*10,pixelsParCm:30,scale:.7,style:"margin: auto"},[F(o,{repere:q,xMin:0,xMax:9,color:"blue",epaisseur:2,step:.2}),q,i,k,M,z,V,_,R,G,K,W,d,q,i]);c=`Le Code de la route interdit toute conduite d'un véhicule lorsque le taux d'alcoolémie est supérieur ou égal à $0,5$ g/L.<br>
            Le taux d'alcoolémie d'une personne pendant les $10$ heures suivant la consommation d'une certaine quantité d'alcool est modélisé par la fonction $${s}$.<br>
          $\\bullet$  $t$ représente le temps (exprimé en heure) écoulé depuis la consommation d'alcool ;<br>
          $\\bullet$  $${s} (t)$ représente le taux d'alcoolémie (exprimé en g/L) de cette personne.<br>
          On donne la représentation graphique de la fonction $${s}$ dans un repère. <br>`,c+=`${Z}`,c+=b({items:[`
                  À quel instant le taux d'alcoolémie de cette personne est-il maximal ? <br>Quelle est alors sa valeur ? Arrondir
                au centième.`,`Résoudre graphiquement l'inéquation $${s}(t)>0,5$.`,` À l'instant $t=0$, il était $${r}$ h. <br>À quelle heure, à la minute près, l'automobiliste peut-il reprendre le volant sans être en infraction ?`],style:"nombres"}),g=b({items:[`     Le taux d'alcoolémie maximal est atteint lorsque $t=${e(Math.round(p*10)/10,1)}$. Sa valeur
            est environ  $${e(Math.round(o(p)*100)/100,2)}$.`,` Les solutions de l'inéquation $${s}(t)>0,5$ sont les abscisses des points de la courbe qui se situent strictement en dessous de la droite d'équation $y=0,5$. <br>
            Cette inéquation a pour ensemble de solution $]${e(Math.round(f*10)/10,1)}\\,;\\,${e(Math.round(l*10)/10,1)}[$. <br>
              `,`${Math.round(l*10)/10===2||Math.round(l*10)/10===3||Math.round(l*10)/10===4||Math.round(l*10)/10===5||Math.round(l*10)/10===6?` L'automobiliste peut reprendre la route (sans être en infraction)  $${Math.round(l*10)/10} \\text{ h }$ après la consommation de l'alcool,
              soit à $${Math.round(l*10)/10+r} \\text{ h}$.<br><br>`:`  $${e(Math.round(l*10)/10,1)}\\text{ h } =${Math.floor(l)} \\text{ h } +${e(Math.round(l*10)/10-Math.floor(l))}\\text{ h }$.<br>
              Or, $${e(Math.round(l*10)/10-Math.floor(l))}\\text{ h }=${e(Math.round(l*10)/10-Math.floor(l))}\\times 60 \\text{ min }=${e((Math.round(l*10)/10-Math.floor(l))*60)} \\text{ min }$.<br>
               L'automobiliste peut reprendre la route (sans être en infraction)  $${Math.floor(l)} \\text{ h }$ et $${e((Math.round(l*10)/10-Math.floor(l))*60)} \\text{ min }$ après la consommation de l'alcool,
              soit à $${Math.floor(l+r)} \\text{ h }$ et $${e((Math.round(l*10)/10-Math.floor(l))*60)} \\text{ min}$.`}<br>
              ${ee}`],style:"nombres"})}break;case 8:{const n=$(100,120),t=$(90,98),r=$(10,14)*10,s=$(60,75)*2,i=$(25,27)*10,o=$(48,53)*2,u=$(38,42)*10,d=$(55,60)*2,p=$(50,52)*10,f=$(43,47)*2,l=$(56,65)*10,q=f+5,v=h(O),S=U("O",0,15.5),k=U("Pression artérielle en mmHg",-2.4,24,-90,"black",1,"milieu",!1,1),Q=y("\\text{Temps (en ms)}",670*.03,72*.2,{orientation:0}),M=H({xMin:0,xMax:800,yMin:80,yMax:150,xUnite:.03,yUnite:.2,xThickDistance:50,yThickDistance:10,xLabelMin:0,yLabelMin:80,yLabelEcart:1,grilleXDistance:50*.03,grilleYDistance:10*.2}),C=ne([[0,t],[r,s],[i,o],[u,d],[p,f],[l,q]],{color:"blue",epaisseur:2,repere:M,xMin:0,xMax:650,step:2}),P=T({xmin:-3,xmax:24,ymin:15,ymax:31,pixelsParCm:20,scale:.5,style:"margin: auto"},k,Q,M,S,C);c=`La tonométrie artérielle permet d'obtenir une mesure continue de la pression artérielle. L'examen renseigne sur
          l'état des artères du patient dans le cadre du développement de l'hypertension artérielle. <br>
          Un enregistrement des mesures permet d'apprécier la courbe de pression artérielle.<br>
          On note $${v}$ la fonction qui au temps $t$ en millisecondes (ms) associe la pression artérielle radiale $${v}(t)$ en millimètres
          de mercure (mmHg), mesurée au repos chez un patient suspecté d'insuffisance cardiaque. On donne la courbe représentative de $${v}$ ci-dessous.<br>`,c+=`${P}`,c+=b({items:[`Quel est l'ensemble de définition de $${v}$.`,` Quelle inéquation a pour ensemble de solution l'imtervalle de temps pendant lequel la pression artérielle est supérieure ou égale à $${n}$ mmHg ?`," Déterminer la valeur systolique mesurée, c'est-à-dire la valeur maximale de la pression artérielle.","  Déterminer la valeur diastolique mesurée, c'est-à-dire la valeur minimale de la pression artérielle.",`  Un patient est en hypertension artérielle lorsque la pression systolique est supérieure ou égale à $140$ mmHg
                        ou que la pression diastolique est supérieure ou égale à $90$ mmHg.<br>
                        Ce patient est-il en hypertension ? Justifier.`,` La fonction $${v}$ a été représentée sur un intervalle de temps  correspondant à celui
                        d'un battement de cœur du patient.<br>On parle de tachycardie lorsque, au repos, le nombre de battements du cœur est supérieur à $100$ par minute. <br>
                        D'après cet examen, peut-on estimer que le patient souffre de tachycardie ?`],style:"nombres"}),g=b({items:[`L'ensemble de définition de $${v}$ est $[0\\,;\\, ${l}]$. `,` L'inéquation ayant pour ensemble de solution l'imtervalle de temps pendant lequel la pression artérielle est supérieure ou égale à $${n}$ mmHg est $${v}(t)\\geqslant ${n}$.`,` La valeur systolique mesurée est est donnée par l'ordonnée du point le plus haut de la courbe : $${s}$ mmHg.`,`  La valeur diastolique mesurée est est donnée par l'ordonnée du point le plus bas de la courbe : $${f}$ mmHg.`,`   La valeur systolique est $${s}$ mmHg, la valeur diastolique est $${f}$ mmHg. <br>
              ${s>=140||f>=90?f>=90?`Comme $${f} \\geqslant 90$, le patient est en hypertension artérielle.<br>`:`Comme $${s} \\geqslant 140$, le patient est en hypertension artérielle.<br>`:`Comme $${f} < 90$ et $${s} < 140$, le patient n'est pas en hypertension artérielle.<br>`}`,`L'intervalle de temps est $[0\\,;\\, ${l}]$, le temps d'un battement de cœur est donc $${l}$ ms.<br>
                              Comme $${l}$ ms $=${e(l/1e3,3)}$ s, en notant $n$ le nombre de battements en $1$ minute, on obtient le tableau de proportionnalité suivant :<br>
                               $\\begin{array}{|c|c|c|}
 \\hline

            
\\text{Nombre de battements} &1 &n   \\\\
 \\hline

            
 \\text{Temps (en s)}&${e(l/1e3,3)}&60  \\\\
 \\hline

            \\end{array}
$
            <br>
             $n=\\dfrac{60\\times 1}{${e(l/1e3,3)}}\\simeq ${e(60*1e3/l,0)}$.<br>
             ${60*1e3/l>100?`Comme $${e(60*1e3/l,0)}>100$, ce patient souffre de tachycardie.`:`Comme $${e(60*1e3/l,0)}\\leqslant 100$, ce patient ne souffre pas de tachycardie.`}`],style:"nombres"})}break;case 9:{const n=new a($(27,38,30)).add(h([.2,.4,.6,.8])),t=new a(n).mul(5).mul($(6,11)),r=$(15,25,20),s=n.mul(-1).mul($(12,17)).add(t),i=$(251,299);c=`  Un éleveur de poulets décide de remplir son silo à grains.<br>
             En notant $t$ le nombre de jours écoulés après avoir rempli son silo à grains et $f(t)$ la masse (en kg) restante 
            au bout de $t$ jours, on a : $f(t)=${e(t,0)}-${e(n,1)}t$<br>`,c+=b({items:[`Calculer l'image de $${r}$ par $f$. Interpréter le résultat dans le contexte de l'exercice.`,`Calculer l'antécédent de $${e(s,1)}$ par $f$.<br>`,"Sachant que l'éleveur avait rempli son silo au maximum de sa capacité, quelle est la contenance (en kg) du silo ?<br> ","  Au bout de combien de jours, l'éleveur sera-t-il à court de grains ? Justifier.<br> "," Quelle quantité de grains en kg consomment les poulets en une journée ?<br> ",` Un jour, des renards ont tué la moitié des poulets, divisant par deux la quantité de grains consommée par jour.<br>
                  Il  reste à l'éleveur $${i}$ kg de grains. <br>
                  Donner la fonction qui modélise la quantité de grains restante en fonction du nombre de jours écoulés. <br>
                  On notera $g$ cette fonction. `],style:"nombres"}),g=b({items:[` $f(${r})=${e(t,0)}-${e(n,1)}\\times ${r}=${e(new a(t).sub(n.mul(r)),2)}$.<br>
            Au bout de $${r}$ jours, il reste $${e(new a(t).sub(n.mul(r)),2)}$ kg de grains dans le silo.`,` L'antécédent de $${e(s,1)}$ est la solution de l'équation $f(x)=${e(s,1)}$. <br>
          $\\begin{aligned}
          ${e(t,0)}-${e(n,1)}t&=${e(s,1)}\\\\
          -${e(n,1)}t&=${e(s,1)}-${e(t,0)}\\\\
         t&=\\dfrac{${e(new a(s).sub(t),1)}}{-${e(n,1)}}\\\\
         t&=${e(new a(t.sub(s)).div(n),1)}
          \\end{aligned}$<br>
          L'antécédent de $${e(s,1)}$ est $${e(new a(t.sub(s)).div(n),1)}$.
`,` La contenance du silo est donnée par $f(0)$. <br>
          Comme $f(0)=${e(t,0)}-${e(n,1)}\\times 0=${e(t,0)}$, la contenance du silo est $${e(t,0)}$ kg.
          `,` On cherche $t$ tel que $f(t)=0$.<br>
$\\begin{aligned}
${e(t,0)}-${e(n,1)}t&=0\\\\
-${e(n,1)}x&=-${e(t,0)}\\\\
t&=\\dfrac{${e(-t,0)}}{-${e(n,1)}}\\\\
t&=${e(-t/-n,0)}
\\end{aligned}$<br>

Au bout de $${e(new a(t).div(n),0)}$ jours, l'éleveur sera à court de grains.`,` Chaque jour les poulets consomment $${e(n,1)}$ kg de grains. <br>
Par exemple,  la masse de grains mangés le premier jour est donnée par $f(0)-f(1)$.<br>
$\\begin{aligned}
f(0)-f(1)&=(${e(t,0)}-${e(n,1)}\\times 0)-(${e(t,0)}-${e(n,1)}\\times 1)\\\\
&=${e(t,0)}-${e(new a(t).sub(n),1)}\\\\
&=${e(n,1)}
\\end{aligned}$
`,` La fonction $g$ est donnée par : <br>
$g(t)=(\\text{masse dans le silo})-(\\text{masse  consommée par les poulets en un jour})\\times t$.<br>
Ainsi, $g(t)=${i}-${e(new a(n).div(2),1)}t$.
`],style:"nombres"})}break;case 10:{const n=$(20,27),t=new a($(-300,-200)).div(1e3);c=`  Le hand-spinner est une sorte de toupie plate qui tourne sur elle-même.<br>
On donne au  hand-spinner  une vitesse de rotation initiale au temps $t = 0$, puis, au cours du temps, sa vitesse de rotation diminue jusqu'à l'arrêt complet du hand-spinner.<br>
Sa vitesse de rotation est alors égale à $0$.<br>
Pour calculer la vitesse de rotation du  hand-spinner (en nombre de tours par seconde) en fonction du temps $t$ (en secondes), notée $V(t)$, on utilise la fonction suivante :
$V(t) = ${e(t,3)} \\times t + V_{\\text{initiale}}.$<br>
$\\bullet$ $t$ est le temps (en s) qui s'est écoulé depuis le début de rotation du hand-spinner  ;<br>
$\\bullet$ $V_{\\text{initiale}}$ est la vitesse de rotation (en nombre de tours par seconde) à laquelle on a lancé le  hand-spinner  au départ.<br><br>
On lance le  hand-spinner  à une vitesse initiale de $${n}$ tours par seconde.`,c+=b({items:[`
Calculer sa vitesse de rotation au bout de $1$ minute.`,"Le temps et la vitesse de rotation du  hand-spinner sont-ils proportionnels ? Justifier.","Au bout de combien de temps le hand-spinner va-t-il s'arrêter ? Arrondir le résultat à la seconde.","Est-il vrai que, d'une manière générale, si l'on fait tourner le hand-spinner deux fois plus vite au départ, il tournera deux fois plus longtemps ? Justifier. "],style:"nombres"}),g=b({items:[` Comme la vitesse initiale est $${n}$ tours par seconde, $V(t)$ est donné par : $V(t) = ${e(t,3)} \\times t + ${n}$.<br>
                  $1$ minute $=60$ secondes,<br>
                  $\\begin{aligned}
                  V(60)&=${e(t,3)} \\times 60 + ${n}\\\\
                  &=${e(new a(t.mul(60)),3)}+ ${n}\\\\
                  &=${e(new a(t.mul(60).add(n)),3)}
                  \\end{aligned}$
            <br>
            Au bout d'une minute, le hand-spinner a une vitesse de  $${e(new a(t.mul(60).add(n)),3)}$ tours par seconde.`,"Le temps et la vitesse de rotation du  hand-spinner ne sont pas proportionnels car la fonction $V$ n'est pas une fonction linéaire (elle n'est pas de la forme $V(t)=a\\times t$).",`Le hand-spinner s'arrête lorsque la vitesse de rotation est nulle. <br>
            On cherche donc la valeur de $t$ telle que : <br>
            $\\begin{aligned}
            V(t)&=0\\\\
            ${e(t,3)} \\times t + ${n}&= 0\\\\
           ${e(t,3)} \\times t&=-${n}\\\\
           t&=\\dfrac{${n}}{${e(-t,3)}}
           \\end{aligned}$<br>
           Comme  $\\dfrac{${n}}{${e(-t,3)}}\\simeq ${e(new a(-n).div(t),0)}$, le hand-spinner s'arrte au bout de $${e(new a(-n).div(t),0)}$ secondes (valeur arrondie à la seconde).`,` D'une manière générale, on a  : <br>
           $\\begin{aligned}
            V(t)&=0\\\\
            ${e(t,3)} \\times t + V_{\\text{initiale}}&= 0\\\\
           ${e(t,3)} \\times t&=- V_{\\text{initiale}}\\\\
           t&=\\dfrac{ V_{\\text{initiale}}}{${e(-t,3)}}
           \\end{aligned}$<br>
          Le hand-spinner s'arrête au bout de $\\dfrac{ V_{\\text{initiale}}}{${e(-t,3)}}$ secondes.<br>
           Si on fait tourner le hand-spinner deux fois plus vite au départ, il s'arrête au bout de $2\\times \\dfrac{  V_{\\text{initiale}}}{${e(-t,3)}}$ secondes.<br>
          On en déduit  si l'on fait tourner le hand-spinner deux fois plus vite au départ, il tournera bien deux fois plus longtemps.
           `],style:"nombres"})}break;default:{const n=new a($(451,691)).div(10),t=new a($(301,399)).div(100),r=$(70,99),s=new a(t).mul(r).add(n),i=$(90,110),o=$(60,80),u=new a(t).mul(o).add(n);c=` Dans une région de France, le tarif de l'eau est le suivant : <br>
            un abonnement annuel et $${e(t,2,!0)}$ € par mètre cube consommé. 
            `,c+=b({items:[`Une famille a payé une facture de $${e(s,2,!0)}$ € pour une consommation de $${r}$ m$^3$.<br>
                  Calculer le prix de l'abonnement.`,"Soit $f$ la fonction qui, à tout réel $x$ de $[0\\,;\\,+\\infty[$ associe le prix payé annuellement pour une consommation d'eau de $x$ m$^3$."+b({items:["Exprimer $f(x)$ en fonction de $x$.",`Déterminer le prix payé par un ménage consommant $${i}$ m$^3$ d'eau par an.`,`À partir de quelle quantité d'eau consommée, la facture s'élève à $${e(u,2,!0)}$ € ? `],style:"alpha"})],style:"nombres"}),g=b({items:[`La facture s'élève à $${e(s,3)}$ € pour une consommation de $${r}$ m$^3$.<br>
                 En notant $a$ le montant de l'abonnement, on obtient : <br>
                 $\\begin{aligned}
                 a+${e(t,2,!0)}\\times ${r} &=${e(s,3)}\\\\
                 a+${e(new a(t).mul(r),3)}&=${e(s,3)}\\\\
                 a&=${e(s,3)}-${e(new a(t).mul(r),3)}\\\\
                 a&=${e(n,2)}
                 \\end{aligned}$<br>
                 Le montant de l'abonnement est donc $${e(n,2,!0)}$ €.
                 `,b({items:[`Le tarif est composé du montant de l'abonnement et $${e(t,2,!0)}$ € par mètre cube consommé, on en déduit que : <br>
                      $f(x)=${e(n,2,!0)}+${e(t,2,!0)}x$.`,`Le prix payé par un ménage consommant $${i}$ m$^3$ d'eau par an est donné par $f(${i})$.<br>
                     $f(${i})=${e(n,2,!0)}+${e(t,2,!0)}\\times ${i}=${e(new a(t).mul(i).add(n),2)}$.<br>
                     Le ménage devra payer  $${e(new a(t).mul(i).add(n),2,!0)}$ €.`,`On cherche $x$ tel que : <br>
                      $\\begin{aligned}
                      f(x)&\\geqslant ${e(u,2,!0)}\\\\
                       ${e(n,2,!0)}+${e(t,2,!0)}x&\\geqslant ${e(u,2,!0)}\\\\
                       ${e(t,2,!0)}x&\\geqslant ${e(u,2,!0)}-${e(n,2,!0)}\\\\
                       x&\\geqslant \\dfrac{${e(new a(u).sub(n),3)}}{${e(t,2,!0)}}
                       \\end{aligned}$
                       <br>
                       Comme $\\dfrac{${e(new a(u).sub(n),3)}}{${e(t,2,!0)}}= ${e(new a(u.sub(n)).div(t),3)}$, c'est à partir d'une consommation de $${e(new a(u.sub(n)).div(t),3)}$ m$^3$ d'eau que la facture sera supérieure ou égale à  $${e(u,2,!0)}$ €.

                       
                       `],style:"alpha"})],style:"nombres"})}break}this.questionJamaisPosee(w,c)&&(this.listeQuestions[w]=c,this.listeCorrections[w]=g,w++),X++}ae(this)}}export{Oe as dateDeModifImportante,Me as dateDePublication,De as default,Ce as refs,we as titre,ke as uuid};
