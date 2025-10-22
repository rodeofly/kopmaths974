import{c as g}from"./style-CcGLZIPY.js";import{a as u}from"./questionMathLive-DdRvWqlN.js";import{g as M,r as n,e as t,m as p,s as a,aq as m,t as D,l as B}from"./embellissements-BYV7mIDn.js";import{a as y,b as L,c as S}from"./Personne-DRrbQFAY.js";import{E as P,K as d}from"./Exercice-DtXhjCyI.js";import{h as c}from"./gestionInteractif-DujZpSu8.js";import"decimal.js";import"./tableauMathlive-xx-nDjq0.js";import"./index-BUDQz6-w.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"mathjs";import"katex";import"earcut";import"roughjs";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";const ie=!0,ae="mathLive",oe="Résoudre des problèmes (plus complexes)",ne="27/11/2022",le="17/02/2025",me="e906e",ue={"fr-fr":["6N5-11"],"fr-2016":["6C32-1"],"fr-ch":["9FA3-8"]};class ce extends P{constructor(){super(),this.sup=11,this.spacing=1.5,this.spacingCorr=1.5,this.nbQuestions=3,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Régime alimentaire","2 : Fromagerie","3 : Programme de calcul","4 : Cinéma (siège)","5 : Cinéma (pellicule)","6 : Boulangerie (sandwichs)","7 : Cagettes","8 : Billets","9 : Fruits","10 : Devinette","11 : Mélange"].join(`
`)]}nouvelleVersion(){const C=M({max:10,defaut:11,melange:11,nbQuestions:this.nbQuestions,saisie:this.sup});let i=0;for(let F=0,A=0;F<this.nbQuestions&&A<50;A++){let o="",h="",v=[];switch(C[F]){case 1:{const e=3+n(1,3)*.1,r=.3+n(1,3)*.01,s=1+n(1,3)*.1,$=.5+n(1,3)*.01,l=120+n(1,9),b=150+n(0,5),x=40+n(0,9),f=120+n(0,5);v=[1,e,r,s,$,l,b,x,f];const q=S(),k=q.prenom;o+=`${k} suit un régime et ne doit pas absorber plus de $700$ calories par repas.<br>
                   Aujourd'hui, ${q.pronom} a mangé le repas suivant :<br>
                   une côtelette d'agneau de $${l}$ g,<br> $${b}$ g d'épinards,<br> $${x}$ g de fromage blanc <br> et une pomme de $${f}$ g. <br>
                   <br>On sait que $1$ g d'agneau fournit $${t(e)}$ calories, <br> $1$ g d'épinards fournit $${t(r)}$ calories, <br> $1$ g de fromage blanc fournit $${t(s)}$ calories <br> et $1$ g de pomme $${t($)}$ calories.<br>`,h+=`Agneau : $${l}\\times ${t(e)} =   ${p(t(e*l))}$ calories. <br>
                        Epinards : $${b}\\times ${t(r)} =   ${p(t(r*b))}$ calories. <br>
                        Fromage blanc : $${x}\\times ${t(s)} =   ${p(t(s*x))}$ calories. <br>
                        Pomme : $${f}\\times ${t($)} =   ${p(t($*f))}$ calories. <br>
                        Cela fait un total de : $${t(e*l)} + ${t(r*b)} + ${t(s*x)} + ${t($*f)} =  ${t(e*l+r*b+s*x+$*f)} $ calories.<br>
                        ${e*l+r*b+s*x+$*f<700?`${k} ${D("respecte")}  son règime`:`${k} ${D("ne respecte pas")} son règime`}
                        car $${t(e*l+r*b+s*x+$*f)} ${e*l+r*b+s*x+$*f<700?"< 700":"> 700"}$.`,this.interactif&&(o+="<br>"+m(0)+`Combien de calories fournit une côtelette d'agneau de $${l}$ g ?`,c(this,i,{reponse:{value:(e*l).toFixed(2)}}),o+=u(this,i,d.clavierDeBase,{texteApres:" calories"}),o+="<br>"+m(1)+`Combien de calories fournit $${b}$ g d'épinards ?`,c(this,i+1,{reponse:{value:(r*b).toFixed(2)}}),o+=u(this,i+1,d.clavierDeBase,{texteApres:" calories"}),o+="<br>"+m(2)+`Combien de calories fournit $${x}$ g de fromage blanc ?`,c(this,i+2,{reponse:{value:(s*x).toFixed(2)}}),o+=u(this,i+2,d.clavierDeBase,{texteApres:" calories"}),o+="<br>"+m(3)+`Combien de calories fournit une pomme de $${f}$ g ?`,c(this,i+3,{reponse:{value:($*f).toFixed(2)}}),o+=u(this,i+3,d.clavierDeBase,{texteApres:" calories"}),o+="<br>"+m(4)),o+=`${k} respecte-t-${q.pronom} son régime ?`,c(this,i+4,{reponse:{value:e*l+r*b+s*x+$*f<700?"Oui":"Non",options:{texteSansCasse:!0}}}),o+=u(this,i+4,d.alphanumeric,{texteApres:" (oui ou non)"}),i+=5;break}case 2:{const e=130+n(0,9),r=2.3+n(0,9)*.01,s=120+n(0,9),$=3.1+n(0,9)*.01,l=e*r+s*$;v=[2,e,r,s,$,l],o+=`Le livreur d'une fromagerie charge $${e}$ fromages pesant chacun $${t(r)}$ kg <br>
                                  et $${s}$ autres pesant chacun $${t($)}$ kg dans une voiture pouvant transporter $700$ kg de fromage.<br>
                                  Le véhicule est-il en surcharge ?`,c(this,i,{reponse:{value:l>700?"Oui":"Non",options:{texteSansCasse:!0}}}),o+=u(this,i,d.alphanumeric,{texteApres:" (oui ou non)"}),o+="<br>Si oui, de combien ? Si non, combien reste-t-il ?",c(this,i+1,{reponse:{value:l>700?(l-700).toFixed(2):(700-l).toFixed()}}),o+=u(this,i+1,d.clavierDeBase,{texteApres:" kg"}),h+=`Première sorte de fromage : $${e}\\times ${t(r)}${a()}\\text{kg} =   ${t(e*r)}${a()}\\text{kg}$. <br>
                        Deuxième sorte de fromage : $${s}\\times ${t($)}${a()}\\text{kg} =   ${t(s*$)}${a()}\\text{kg}$. <br>
                        Cela fait un total de $${t(e*r)}${a()}\\text{kg} + ${t(s*$)}${a()}\\text{kg} = ${t(e*r+s*$)}${a()}\\text{kg}$.<br>
                        ${l>700?`${D("Le véhicule est en surcharge")} et la surcharge est de : $${t(l)}${a()}\\text{kg} - 700${a()}\\text{kg} = ${p(t(l-700))}${a()}\\text{kg}$.`:`${D("Le véhicule n'est pas en surcharge")} et il reste : $700${a()}\\text{kg} - ${t(l)}${a()}\\text{kg} = ${p(t(700-l))}${a()}\\text{kg}$.`}`,i+=2;break}case 3:{const e=n(1,8)*.1,r=n(10,30),s=n(2,9),$=n(2,9,[s]);v=[3,e,r,s,$],o+=`On considère le programme de calcul :<br>
          • Choisir un nombre.<br>
          • Multiplier ce nombre par $${t(e)}$.<br>
          • Multiplier le résultat par $${t(r)}$.<br>`,this.interactif?(o+=`<br>${m(0)} Effectuer ce programme avec $${s}$.`,c(this,i,{reponse:{value:(s*e*r).toFixed(2)}}),o+=u(this,i,d.clavierDeBase),o+=`<br>${m(1)} Effectuer ce programme avec $${$}$.`,c(this,i+1,{reponse:{value:($*e*r).toFixed(2)}}),o+=u(this,i+1,d.clavierDeBase)):o+=`<br>${m(0)} Effectuer ce programme avec $${s}$ et  $${$}$.
            <br>${m(1)} Remplacer ce programme par un programme plus court. Expliquer.`;const l=`Si le nombre est $${s}$ :<br>
                        • $${s} \\times ${t(e)} = ${t(s*e)}$ ;<br>
                        • $${t(s*e)} \\times ${t(r)} = ${p(t(s*e*r))}$.<br>`,b=`Si le nombre est $${$}$ :<br>
                        • $${$} \\times ${t(e)} = ${t($*e)}$ ;<br>
                        • $${t($*e)} \\times ${t(r)} = ${p(t($*e*r))}$.<br>`;h=this.interactif?`${m(0)} ${l} ${m(1)} ${b}`:`${m(0)} ${l} ${b}
                        ${m(1)} Le programme de calcul se résume par cette expression :<br>
                        « nombre de départ $\\times ${t(e)} \\times ${t(r)}$ » <br>
                        C'est une expression avec uniquement des multiplications, il n'y a pas priorité, <br>
                        elle se résume par : « nombre de départ $\\times ${t(e*r)}$ » car : $${t(e)}\\times${t(r)}=${t(e*r)}$.<br>
                        Donc le programme peut être le suivant : <br>
                        • Choisir un nombre.<br>
                        • Multiplier ce nombre par $${t(e*r)}$.<br>`,i+=2;break}case 4:{const e=n(20,40),r=n(10,20),s=n(5,12)+n(5,8)*.1,$=n(10,15);v=[4,e,r,s,$],o+=`Dans une salle de cinéma, il y a $${e}$ rangées de $${r}$ fauteuils.<br>
                    Le prix d'une place pour une séance est de $${g(s)}$ €.<br>
                  ${m(0)} Si toutes les places sont occupées, quelle est la somme d'argent récoltée ?`,c(this,i,{reponse:{value:(r*e*s).toFixed(2)}}),o+=u(this,i,d.clavierDeBase,{texteApres:" €"}),o+=`<br>
                  ${m(1)} Pour une autre séance, $${$}$ rangées sont pleines, le reste des
                  rangées étant vides. Quelle est la recette pour cette séance ?`,c(this,i+1,{reponse:{value:(r*$*s).toFixed(2)}}),o+=u(this,i+1,d.clavierDeBase,{texteApres:" €"}),h+=`${m(0)} $${e} \\times ${r} =${r*e}$<br>
                        Il y a $${r*e}$ places dans la salle.<br>
                        $${r*e} \\times ${g(s)} = ${g(r*e*s)}$<br>
                        La somme d'argent perçue est $${p(g(r*e*s))}$ €.<br>
                        ${m(1)} $${$} \\times ${r} =${r*$}$<br>
                        Il y a $${r*$}$ places occupées dans la salle.<br>
                        $${r*$} \\times ${t(s)} = ${t(r*$*s)}$<br>
                        La somme d'argent perçue est $${p(g(r*$*s))}$ €.<br>`,i+=2;break}case 5:{const e=n(1,5)*10,r=n(2,9)*30,s=n(3,8);v=[5,e,r,s],o+=`Avant l'arrivée du numérique, au cinéma, la pellicule était utilisée pour projeter des films.<br>
                   Le format souvent utilisé était le format $35$ mm ce qui signifie que la pellicule faisait $35$ mm de largeur.<br>
                   Avec $24$ images par seconde, une pellicule de film de $30$ mètres de long représente $1$ minute de projection.<br>
                   Pour projeter un film, plusieurs pellicules étaient nécessaires et le projectionniste avait pour rôle de les changer.<br>
                   ${m(0)} Si le film a $${s}$ pellicules de $600$ m, quelle est la longueur totale en mètres du film ?`,c(this,i,{reponse:{value:(s*600).toFixed(2)}}),o+=u(this,i,d.clavierDeBase,{texteApres:" m"}),o+=`<br> ${m(1)} Si le film a $${s}$ pellicules de $600$ m, quelle est la durée totale du film ?`,c(this,i+1,{reponse:{value:(s*20).toFixed(2)}}),o+=u(this,i+1,d.clavierDeBase,{texteApres:" minutes"}),o+=`<br>${m(2)} Si le film dure $1${a()}\\text{h}${a()}${e}$, quelle est la longueur totale, en mètres, du film ?`,c(this,i+2,{reponse:{value:((60+e)*30).toFixed(2)}}),o+=u(this,i+2,"",{texteApres:" m"}),o+=`<br>${m(3)} Si le film dure $1${a()}\\text{h}${a()}${e}$, combien faut-il de pellicules entières de $600$ m ?`,c(this,i+3,{reponse:{value:Math.floor((60+e)*30/600).toFixed(2)}}),o+=u(this,i+3,d.clavierDeBase,{texteApres:" pellicules entières de $600$ m"}),o+=`<br>${m(4)} Si la pellicule mesure $${r}$ m, quelle est la durée de la pellicule ?`,c(this,i+4,{reponse:{value:Math.floor(r/30).toFixed(2)}}),o+=u(this,i+4,d.clavierDeBase,{texteApres:" minutes"}),o+=`<br>${m(5)} Si la pellicule mesure $${r}$ m, combien d'images y a-t-il sur la pellicule ?`,c(this,i+5,{reponse:{value:(Math.floor(r/30)*60*24).toFixed(2)}}),o+=u(this,i+5,d.clavierDeBase,{texteApres:" images"}),h+=`${m(0)} $${s}${a()}\\text{ pellicules} \\times 600${a()}\\text{m} = ${t(s*600)}${a()}\\text{m}$<br>
                        La longueur totale du film est de $${p(t(s*600))}$ mètres.<br>
                        ${m(1)} $30${a()}\\text{m} \\times 20 = 600${a()}\\text{m}$ donc une pellicule de $600$ m représente $1${a()}\\text{min} \\times 20 = 20${a()}\\text{min}$.<br>
                        $${s}${a()}\\text{pellicules} \\times 20${a()}\\text{min} = ${t(s*20)}${a()}\\text{min}$<br>
                        La durée totale du film est de $${p(t(s*20))}$ minutes.<br>
                        ${m(2)} $${60+e}${a()}\\text{min} \\times 30${a()}\\text{m}= ${t((60+e)*30)}${a()}\\text{m}$<br>
                        La longueur totale en mètres d'un film de $1${a()}\\text{h}${a()}${e}$ est de $${p(t((60+e)*30))}$ mètres.<br>
                        ${m(3)} $${t(Math.floor((60+e)*30/600))} \\times 600${a()}\\text{m} = ${t(Math.floor((60+e)*30/600)*600)}${a()}\\text{m}$`,h+=(60+e)*30-Math.floor((60+e)*30/600)*600!==0?` et $${t(1+Math.floor((60+e)*30/600))} \\times 600${a()}\\text{m} = ${t((1+Math.floor((60+e)*30/600))*600)}${a()}\\text{m}$.`:"",h+=`<br>Donc il faut $${p(t(Math.floor((60+e)*30/600)))}$ bobines de $600$ mètres`,h+=(60+e)*30-Math.floor((60+e)*30/600)*600!==0?` (et $1$ bobine de  $${t((60+e)*30-Math.floor((60+e)*30/600)*600)}$ mètres).<br>`:".<br>",h+=`${m(4)} $${t(Math.floor(r/30))} \\times 30${a()}\\text{m} = ${t(r)}$ m<br>
                        Donc la durée de la pellicule est de $${p(t(Math.floor(r/30)))}$ minutes.<br>
                        ${m(5)} $${t(Math.floor(r/30))} \\times 60 = ${t(Math.floor(r/30)*60)}$ secondes<br>
                        $${t(Math.floor(r/30)*60)}${a()}\\text{secondes} \\times 24${a()}\\text{images} = ${t(Math.floor(r/30)*60*24)}${a()}\\text{images}$<br>
                         Il y a $${p(t(Math.floor(r/30)*60*24))}${a()}\\text{images}$ dans la pellicule.`,i+=6;break}case 6:{const e=n(2,5),r=1+n(1,9)*.1+n(1,9)*.01,s=n(2,5,[e]),$=3+n(1,9)*.1+n(1,9)*.01;v=[6,e,r,s,$];const l=L();o+=`Dans une boulangerie, ${l} achète ${s} sandwichs à $${t($)}$ € chacun.<br>
                    et ${e} boissons à $${t(r,2)}$ € chacune.<br>
                    ${l} a un billet de 50 €, combien va lui rendre le caissier ?`,c(this,i,{reponse:{value:(50-(e*r+s*$)).toFixed(2)}}),o+=u(this,i,d.clavierDeBase,{texteApres:" €"}),h+=`$${s} \\times ${t($,2)} =${t(s*$,2)}$<br>
                        Le prix des sandwichs est de $${g(s*$)}$ €.<br>
                        $${e} \\times ${t(r)} =${t(e*r,2)}$<br>
                        Le prix des boisons est de $${g(e*r)}$ €.<br>
                        $${t(e*r,2)} + ${t(s*$,2)} =${t(e*r+s*$,2)}$<br>
                        Le prix total à payer est $${g(e*r+s*$)}$ €.<br>
                        $50 -  (${t(e*r)} + ${t(s*$,2)}) = ${t(50-(e*r+s*$),2)}$<br>
                        Le caissier va rendre la somme de $${p(g(50-(e*r+s*$)))}$ €.<br>`,i++;break}case 7:{const e=n(2,5),r=5+n(2,5)*.1,s=6+n(2,9)*.1+n(2,9)*.01,$=1+n(5,9)*.1;v=[7,e,r,s,$],o+=`Un commerçant achète $${e}$ cagettes d'oranges. Chaque cagette contient <br>
                    $${t(r)}$ kg d'oranges et coûte $${g(s)}$ €.<br>
                    Le commerçant revend les oranges $${g($)}$ € le kilogramme.<br>
                    Quel est son bénéfice s'il réussit à tout vendre ?`,c(this,i,{reponse:{value:(e*r*$-e*s).toFixed(2)}}),o+=u(this,i,d.clavierDeBase,{texteApres:" €"}),h+=`$${e} \\times ${t(r)} =${t(e*r)}$<br>
                        Il y a $${t(e*r)}$ kg d'oranges.<br>
                        $${t(e)} \\times ${t(s)} =${t(e*s)}$<br>
                        Ce qui lui coûte $${g(e*s)}$ €.<br>
                        $${t(e*r)} \\times ${t($)} =${t(e*r*$)}$<br>
                        S'il revend tout, il va gagner $${g(e*r*$)}$ €.<br>
                        $${t(e*r*$)} - ${t(e*s)} = ${t(e*r*$-e*s)}$<br>
                        Le bénéfice sera alors de $${p(g(e*r*$-e*s))}$ €.<br>`,i++;break}case 8:{const e=n(10,20),r=n(10,20,[e]);v=[8,e,r];const s=y();o+=`${s} a dans sa tirelire uniquement des billets de $5$ € et de $10$ €.<br>
                    Au total, elle a $${t(e+r)}$ billets qui représentent $${t(e*10+r*5)}$ €.<br>`,this.interactif?(o+="Combien a-t-elle de billets de $5$ € ?",c(this,i,{reponse:{value:r.toFixed(2)}}),o+=u(this,i,d.clavierDeBase,{texteApres:" billets de 5 €"}),o+="<br>Combien a-t-elle de billets de $10$ € ?",c(this,i+1,{reponse:{value:e.toFixed(2)}}),o+=u(this,i+1,d.clavierDeBase,{texteApres:" billets de 10 €"})):o+="Combien a-t-elle de billets de $5$ € et de $10$ € ?<br>",h+=`Après plusieurs essais, on trouve qu'elle a $${p(e)}$ billets de 10 € et $${p(r)}$ billets de 5 €.`,h+=`<br><br>Vérification :<br>
                    Nombre de billets : $${e} \\text{ billets de 10 €} +  ${r} \\text{ billets de 5 €} =${t(e+r)}${a()}\\text{billets}$.<br>
                    Somme d'argent : $${e} \\times 10${a()}\\text{€} +  ${r} \\times 5${a()}\\text{€} =${t(e*10+r*5)}${a()}\\text{€}$.`,i+=2;break}case 9:{const e=n(20,30),r=250*n(2,5),s=7+n(2,5)*.1,$=n(20,30,[e]),l=250*n(2,5),b=8+n(2,5)*.1,x=e*r*.001*s+$*l*.001*b;v=[9,e,r,s,$,l,b,x];const f=Math.abs(x*100-Math.round(x*100))>.001?"environ":"";o+=`Un marchand de fruits vend $${e}$ barquettes de $${t(r)}$ g de fraises des bois à $${g(s)}$ € le kg<br>
                    et $${$}$ barquettes de $${t(l)}$ g de myrtilles des bois à $${g(b)}$ € le kg.<br>
                    Combien d'argent lui rapporte cette vente ?`,c(this,i,{reponse:{value:x.toFixed(2)}}),o+=u(this,i,d.clavierDeBase,{texteApres:" €"}),h+=`$${e} \\times ${t(r)}${a()}\\text{g} = ${t(e*r)}${a()}\\text{g}$ de fraises.<br>
                        $${t(e*r)}${a()}\\text{g} \\div 1${a()}000 = ${t(e*r*.001,4)} $ kg de fraises.<br>
                        $${t(e*r*.001)}${a()}\\text{kg} \\times ${t(s)}${a()}\\text{€/kg} =${t(e*r*.001*s)}$ € pour les fraises.<br>
                        $${$} \\times ${t(l)}${a()}\\text{g} = ${t($*l)}${a()}\\text{g}$ de myrtilles.<br>
                        $${t($*l)}${a()}\\text{g} \\div 1${a()}000 = ${t($*l*.001)}${a()}\\text{kg}$ de myrtilles.<br>
                        $${t($*l*.001)}${a()}\\text{kg} \\times ${t(b)}${a()}\\text{€/kg} =${t($*l*.001*b)}$ € pour les myrtilles.<br>
                        $${t(e*r*.001*s)} + ${t($*l*.001*b)} = ${t(e*r*.001*s+$*l*.001*b)}$<br>
                        Cette vente va lui rapporter ${f} $${p(g(x))}$ €.<br>`,i++;break}case 10:{const e=n(5,10),r=n(2,e-1),s=n(1,3),$=n(1,3,[s]);v=[10,e,r,s,$],o+=`Devinette : je pense à deux nombres entiers.<br>
                    Si j'effectue ${s===1?"la somme":s===2?"la différence":"le produit"} entre ses deux nombres,
                    alors j'obtiens $${s===1?t(e+r):s===2?t(e-r):t(e*r)}$.<br>
                    Si j'effectue ${$===1?"la somme":$===2?"la différence":"le produit"} entre ses deux nombres,
                    alors j'obtiens $${$===1?t(e+r):$===2?t(e-r):t(e*r)}$.<br>`,this.interactif?(o+="Quel est le plus petit de ces deux nombres ?",c(this,i,{reponse:{value:Math.min(e,r).toFixed(2)}}),o+=u(this,i,d.clavierDeBase),o+="<br>Quel est le plus grand de ces deux nombres ?",c(this,i+1,{reponse:{value:Math.max(e,r).toFixed(2)}}),o+=u(this,i+1,d.clavierDeBase)):o+="Quels sont ces deux nombres ?",h+=`Par essais-erreurs, on trouve $${p(e)}$ et $${p(r)}$.<br>
                        Vérification :<br>
                        $${e} ${s===1?"+":s===2?"-":"\\times"} ${r} = ${s===1?t(e+r):s===2?t(e-r):t(e*r)}$<br>
                        $${e} ${$===1?"+":$===2?"-":"\\times"} ${r} = ${$===1?t(e+r):$===2?t(e-r):t(e*r)}$<br>
                        `,i+=2;break}}this.questionJamaisPosee(F,...v)&&(this.listeQuestions[F]=o,this.listeCorrections[F]=h,F++)}B(this)}}export{le as dateDeModifImportante,ne as dateDePublication,ce as default,ie as interactifReady,ae as interactifType,ue as refs,oe as titre,me as uuid};
