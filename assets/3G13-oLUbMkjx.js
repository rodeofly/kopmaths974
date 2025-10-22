import{g as Ie,F as O,a as oe,r as g,d as Ne,p as Oe,aa as Fe,ah as Se,e as i,aM as be,cf as P,cc as ne,aH as Ce,o as ee,D as te,af as ie,m as D,l as Ue,aS as je}from"./embellissements-BYV7mIDn.js";import{c as Me}from"./aleatoires-BLhzzHLc.js";import{E as Te}from"./Exercice-DtXhjCyI.js";import{h as Q}from"./gestionInteractif-DujZpSu8.js";import{p as ye}from"./qcm-BQR8Ns0N.js";import{a as I}from"./questionMathLive-DdRvWqlN.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./dateEtHoraires-yqKtvK1K.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const ht="Effectuer des calculs liés aux homothéties",dt="28/11/2021",bt="15/04/2024",At=!0,vt="mathLive",Ot="6f383",Dt={"fr-fr":["3G13"],"fr-ch":["11ES3-5"]};function N(Ae,re,W,H="black",w=.5,o=!1){return re.x<W.x?je(Ae,re,W,H,w,o):je(Ae,W,re,H,w,o)}class ft extends Te{constructor(){super(),this.nbQuestions=4,this.nbCols=0,this.nbColsCorr=0,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,this.spacing=1.5,this.spacingCorr=1.5,this.sup=12,this.sup2=3,this.sup3=1,this.sup4=!0,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Calculer le rapport","2 : Calculer une longueur image","3 : Calculer une longueur antécédent","4 : Calculer une longueur image (deux étapes)","5 : Calculer une longueur antécédent (deux étapes)","6 : Calculer une aire image","7 : Calculer une aire antécédent","8 : Calculer le rapport à partir des aires","9 : Calculer le rapport connaissant OA et AA'","10 : Encadrer le rapport k","11 : Encadrer le rapport k connaissant OA et AA'","12 : Mélange"].join(`
`)],this.besoinFormulaire2Numerique=["Signe du rapport",3,`1 : Positif
2 : Négatif
3 : Mélange`],this.besoinFormulaire3Numerique=["Choix des valeurs",3,`1 : k est décimal
2 : k est fractionnaire
3 : k est une fractionnaire et les mesures sont entières`],this.besoinFormulaire4CaseACocher=["Figure dans l'énoncé (Cas 1 à 5 et 9 à 11)",!1]}nouvelleVersion(){const re=["rapport","image","antécédent","image2etapes","antecendent2etapes","aireImage","aireAntécédent","aireRapport","rapport2","encadrerk","encadrerk2"],W=Ie({saisie:this.sup,min:1,max:11,melange:12,defaut:12,nbQuestions:this.nbQuestions,listeOfCase:re}),H=this.sup3>1,w=this.sup3===3;for(let o=0,ce,d,n,$,De=0;o<this.nbQuestions&&De<50;){const ae=Me(5,["P","Q","U","V","W","X","Y","Z"]),r=ae[0],a=ae[1],t=ae[2],y=ae[3],S=ae[4],qe=new O(this.sup2===1?1:this.sup2===2?-1:oe([1,-1]));let s=new O(1);do s=new O(H?g(1,9):oe([g(15,40),g(1,9)]),H?g(1,9):10),s=s.produitFraction(qe),s=s.simplifie();while(s.valeurDecimale===1);const h=s.valeurAbsolue(),v=h.valeurDecimale>1,p=s.valeurDecimale>0,ve=w?new O(g(1,19)):new O(g(11,99));let c=v?ve.entierDivise(10):ve;c=c.multiplieEntier(10**w*h.d**H);let u=s.produitFraction(c),E=new O(g(10,99,[parseInt(ve.valeurDecimale)]),10);E=E.multiplieEntier(10**w*h.d**H);let C=s.produitFraction(E),q=u.differenceFraction(c).simplifie();q=q.valeurAbsolue();let A=new O(oe([g(1,4)*10+5+oe([0,5]),g(1,9)]),1);A=A.entierDivise(10),A=A.simplifie();const x=w?new O(g(10,99)):new O(g(100,999),10),f=A.produitFractions(A,x).valeurDecimale,$e=Ne(f,2),X=v?">":"<",U=v?"un agrandissement":"une réduction",M=v?p?"k > 1":"k < -1":p?"0 < k < 1":"-1 < k < 0",V=p?"positif":"négatif",m=p?"":"-",ue=p?"":"l'opposé de ",pe=p?"le":"l'opposé du ",Y=this.sup4?"":`de rapport ${V} et `,fe=p?"\\in":"\\notin",T=this.sup4?"":"Pour vous aider, illustrer cette situation par une figure (sans forcément respecter l'échelle).<br>",k=new O(1).diviseFraction(h),we=u.entierDivise(k.d).simplifie().valeurAbsolue().texFSD,Ee=C.entierDivise(k.denIrred).valeurAbsolue().valeurDecimale;let Z=new O(Math.max(c.valeurAbsolue().valeurDecimale,u.valeurAbsolue().valeurDecimale,q.valeurAbsolue().valeurDecimale),1);Z=new O(10,1).diviseFraction(Z),Z=Z.multiplieEntier(2);let me=u,ge=c,xe=!0;h.valeurDecimale<.3?me=c.produitFraction(new O(3,10).multiplieEntier((-1)**(s.valeurDecimale<0))):h.valeurDecimale<1&&h.valeurDecimale>.7?me=c.produitFraction(new O(7,10).multiplieEntier((-1)**(s.valeurDecimale<0))):h.valeurDecimale>1&&h.valeurDecimale<1.3?me=c.produitFraction(new O(13,10).multiplieEntier((-1)**(s.valeurDecimale<0))):h.valeurDecimale>4?ge=c.multiplieEntier(2):xe=!1;const L=!(xe&&this.sup4)||[4,5,6,7,8].includes(W[o])?"":"La figure ci-dessous n'est pas à l'échelle.<br>",Le=this.sup4?"La figure ci-dessous n'est pas à l'échelle.<br>":"";let e={O:Oe(0,0,`${t}`,"below"),A:Oe(ge.produitFraction(Z).valeurDecimale,0,`${r}`,"below"),hA:Oe(me.produitFraction(Z).valeurDecimale,0,`${a}`,"below")};const ke=oe([g(20,50),g(130,160)]);e=Object.assign({},e,{B:Fe(Se(e.A,e.O,ke),e.O,1.2,`${y}`),hB:Fe(Se(e.hA,e.O,ke),e.O,1.2,`${S}`,p?"above":"below")}),u=u.valeurAbsolue().valeurDecimale;const Pe=w&&!h.estEntiere?`=${u}\\times ${k.texFSD}`+(k.d!==1?`=\\dfrac{${u}}{${k.d}}\\times ${k.n}=${we}\\times ${k.n}`:""):"";C=C.valeurAbsolue().valeurDecimale;const Qe=w&&!h.estEntiere?`=${C}\\times ${k.texFSD}`+(k.d!==1?`=\\dfrac{${C}}{${k.d}}\\times ${k.n}=${Ee}\\times ${k.n}`:""):"",se=(h.d===1||this.sup3===1)&&p?i(A.valeurDecimale):`\\left(${m}${this.sup3===1?i(A.valeurDecimale):A.texFSD}\\right)`,Be=p?v?`${t}${r} + ${r}${a} = ${i(c.valeurAbsolue().valeurDecimale,2)} + ${i(q.valeurAbsolue().valeurDecimale,2)} `:`${t}${r} - ${r}${a} = ${i(c.valeurAbsolue().valeurDecimale,2)} - ${i(q.valeurAbsolue().valeurDecimale,2)}`:`${a}${r} - ${t}${r} = ${i(q.valeurAbsolue().valeurDecimale,2)} - ${i(c.valeurAbsolue().valeurDecimale,2)}`;e=Object.assign({},e,{segmentOA:be(e.O,e.A),segmentOhA:be(e.O,e.hA),segmentOB:be(e.O,e.B),segmentOhB:be(e.O,e.hB)}),e=Object.assign({},e,{arcOA:v||!p?e.A:ne(e.O,e.A,60,!1),arcOhA:!v||!p?e.hA:ne(e.O,e.hA,60,!1),arcOB:v||!p?e.B:ne(e.B,e.O,60,!1),arcOhB:!v||!p?e.hB:ne(e.hB,e.O,60,!1),arcAhA:p?e.A:ne(e.hA,e.A,60,!1),legendeOA:v||!p?N(`$${i(c.valeurDecimale)}~\\text{cm}$`,e.A,e.O,"black",.6):P(`$${i(c.valeurDecimale)}~\\text{cm}$`,e.O,e.A,60,"black",.3),legendeOhA:!v||!p?N(`$${i(u)}~\\text{cm}$`,e.hA,e.O,"black",.6):P(`$${i(u)}~\\text{cm}$`,e.O,e.hA,60,"black",.3),legendeOB:v||!p?N(`$${i(E.valeurDecimale)}~\\text{cm}$`,e.B,e.O,"black",.6):P(`$${i(E.valeurDecimale)}~\\text{cm}$`,e.B,e.O,60,"black",.3),legendeOhB:!v||!p?N(`$${i(C)}~\\text{cm}$`,e.hB,e.O,"black",.6):P(`$${i(C)}~\\text{cm}$`,e.hB,e.O,60,"black",.3),legendeAhA:p?N(`$${i(q.valeurDecimale)}~\\text{cm}$`,e.hA,e.A,"black",.6):P(`$${i(q.valeurDecimale)}~\\text{cm}$`,e.hA,e.A,60,"black",.3)}),e.arcOA.pointilles=5,e.arcOhA.pointilles=5,e.arcOB.pointilles=5,e.arcOhB.pointilles=5,e.arcAhA.pointilles=5,e=Object.assign({},e,{legendeOAi:v||!p?N("$?$",e.O,e.A,"black",.6):P("$?$",e.O,e.A,60,"black",.3),legendeOhAi:!v||!p?N("$?$",e.O,e.hA,"black",.6):P("$?$",e.hA,e.O,60,"black",.3,!0),legendeOBi:v||!p?N("$?$",e.O,e.B,"black",.6):P("$?$",e.B,e.O,60,"black",.3),legendeOhBi:!v||!p?N("$?$",e.O,e.hB,"black",.6):P("$?$",e.hB,e.O,60,"black",.3,!0)});let l=[];const K=1,R=Ce(e.O,e.A,e.hA);l=[e.segmentOA,e.segmentOhA,e.legendeOA,e.legendeOhA],e.arcOA.typeObjet!=="point"&&l.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&l.push(e.arcOhA);let j=ee(Object.assign({},te([...l,...R]),{style:"inline",scale:K}),l,R);j={enonce:this.sup4?j+"<br>":"",solution:this.sup4?"":j+"<br>"},l=[e.segmentOA,e.segmentOhA,e.legendeOA,e.legendeOhAi],e.arcOA.typeObjet!=="point"&&l.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&l.push(e.arcOhA);let _=ee(Object.assign({},te([...l,...R]),{style:"inline",scale:K}),l,R);_={enonce:this.sup4?_+"<br>":"",solution:this.sup4?"":_+"<br>"},l=[e.segmentOA,e.segmentOhA,e.legendeOhA,e.legendeOAi],e.A.typeObjet!=="point"&&l.push(e.A),e.O.typeObjet!=="point"&&l.push(e.O),e.hA.typeObjet!=="point"&&l.push(e.hA),e.arcOA.typeObjet!=="point"&&l.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&l.push(e.arcOhA);let z=ee(Object.assign({},te([...l,...R]),{style:"inline",scale:K}),l,R);z={enonce:this.sup4?z+"<br>":"",solution:this.sup4?"":z+"<br>"};const he=Ce(e.O,e.A,e.hA,e.B,e.hB);l=[e.segmentOA,e.segmentOhA,e.segmentOB,e.segmentOhB,e.legendeOA,e.legendeOhA,e.legendeOB,e.legendeOhBi],e.A.typeObjet!=="point"&&l.push(e.A),e.O.typeObjet!=="point"&&l.push(e.O),e.hA.typeObjet!=="point"&&l.push(e.hA),e.B.typeObjet!=="point"&&l.push(e.B),e.hB.typeObjet!=="point"&&l.push(e.hB),e.arcOA.typeObjet!=="point"&&l.push(e.arcOA),e.arcOB.typeObjet!=="point"&&l.push(e.arcOB),e.arcOhA.typeObjet!=="point"&&l.push(e.arcOhA),e.arcOhB.typeObjet!=="point"&&l.push(e.arcOhB);let G=ee(Object.assign({},te([...l,...he]),{style:"inline",scale:K}),l,he);G={enonce:this.sup4?G+"<br>":"",solution:this.sup4?"":G+"<br>"},l=[e.segmentOA,e.segmentOhA,e.segmentOB,e.segmentOhB,e.legendeOBi,e.legendeOhB,e.legendeOA,e.legendeOhA],e.arcOA.typeObjet!=="point"&&l.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&l.push(e.arcOhA),e.arcOB.typeObjet!=="point"&&l.push(e.arcOB),e.arcOhB.typeObjet!=="point"&&l.push(e.arcOhB);let le=ee(Object.assign({},te([...l,...he]),{style:"inline",scale:K}),l,he);le={enonce:this.sup4?le+"<br>":"",solution:this.sup4?"":le+"<br>"},l=[e.segmentOA,e.segmentOhA,e.legendeOA,e.legendeOhA,e.legendeAhA],e.arcOA.typeObjet!=="point"&&l.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&l.push(e.arcOhA),e.arcAhA.typeObjet!=="point"&&l.push(e.arcAhA);let J=ee(Object.assign({},te([...l,...R]),{style:"inline",scale:K}),l,R);J={enonce:this.sup4?"<br>"+J+"<br>":"",solution:this.sup4?"":J+"<br>"};let b,B,F,de;switch(W[o]){case"rapport":b=[`${t}${a}=${i(u)}\\text{ cm}`,`${t}${r}=${i(c.valeurDecimale)}\\text{ cm}`],d=ie([0,1]),B=b[d[0]],F=b[d[1]],n=`$${a}$ est l'image de $${r}$
          par une homothétie ${Y}
          de centre $${t}$ tel que $${B}$ et $${F}$.
          <br>
          ${T} ${L}
          Calculer le rapport $k$ de cette homothétie`,n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :"}),n+=".<br>"+j.enonce,Q(this,o,{reponse:{value:s.texFSD}}),this.correctionDetaillee?($=`$[${t}${a}]$ est l'image de $[${t}${r}]$ par cette homothétie
            et $${t} ${a} ${X} ${t} ${r}$,
            donc c'est ${U} et on a : $${M}$.<br>
            ${j.solution}
            `,$+=`Le rapport de cette homothétie est ${pe} quotient
            de la longueur d'un segment "à l'arrivée"
            par sa longueur "au départ".
            <br>
            Soit `):$=j.solution,$+=`$k=${m}\\dfrac{${t}${a}}{${t}${r}}=${m}\\dfrac{${i(u)}}{${i(c.valeurDecimale)}}=${D(this.sup3===1?i(s.valeurDecimale,2):s.texFSD)}$.`;break;case"image":n=`$${a}$ est l'image de $${r}$ par une homothétie
          de centre $${t}$ et de rapport $k=${this.sup3===1?i(s.valeurDecimale):s.texFSD}$
          tel que $ {${t}${r}=${c.valeurDecimale}\\text{ cm}}$.
          <br>
          ${T} ${L} 
          Calculer $${t}${a}$`,n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:"$ \\text{ cm}$"}),n+=".<br>"+_.enonce,Q(this,o,{reponse:{value:u}}),this.correctionDetaillee?($=`$[${t}${a}]$ est l'image de $[${t}${r}]$ par cette homothétie et $${M}$, donc $[${t}${a}]$ est ${U} de $[${t}${r}]$.
            <br>${_.solution}`,$+=`Une homothétie de rapport ${V} est
            une transformation qui multiplie
            toutes les longueurs par ${ue} son rapport.
            <br>
            Soit $${t}${a}=${m}k \\times ${t}${r}$.
            <br>
            Donc `):$=_.solution,$+=`$${t}${a}= ${this.sup3===1?i(h.valeurDecimale):h.texFSD} \\times ${i(c.valeurDecimale)} =  ${D(i(u))}~\\text{cm}$.`;break;case"antécédent":n=`$${a}$ est l'image de $${r}$ par une
          homothétie de centre $${t}$ et de rapport
          $k=${this.sup3===1?i(s.valeurDecimale):s.texFSD}$ tel que $ {${t}${a}=${i(u)}\\text{ cm}}$.
          <br>
          ${T} ${L} 
          Calculer $${t}${r}$`,n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:"$ \\text{ cm}$"}),n+=".<br>"+z.enonce,Q(this,o,{reponse:{value:c.texFSD}}),this.correctionDetaillee?$=`$[${t}${a}]$ est l'image de $[${t}${r}]$ par cette homothétie et 
            $${M}$, donc $[${t}${a}]$ est ${U} de $[${t}${r}]$.
            <br>${z.solution}
            Une homothétie de rapport ${V} est
            une transformation qui multiplie
            toutes les longueurs par ${ue} son rapport.
            <br>
            Soit $${t}${a}=${m}k \\times  ${t}${r}$.
            <br>
            Donc `:$=z.solution,$+=`$${t}${r}=\\dfrac{${t}${a}}{${m}k}=\\dfrac{${i(u)}}{${this.sup3===1?i(h.valeurDecimale):h.texFSD}} ${Pe} = ${D(i(c.valeurDecimale))}~\\text{cm}$.`;break;case"image2etapes":b=[`${t}${y}=${i(E.valeurDecimale)}\\text{ cm}`,`${t}${a}=${i(u)}\\text{ cm}`,`${t}${r}=${i(c.valeurDecimale)}\\text{ cm}`],d=ie([0,1,2]),B=b[d[0]],F=b[d[1]],de=b[d[2]],n=`$${a}$ et $${S}$ sont les images respectives
          de $${r}$ et $${y}$ par une homothétie
          ${Y} de centre $${t}$ tel que
          $ {${B}}$, $ {${F}}$ et $ {${de}}$.
          <br>
          ${T} ${L} 
          Calculer $${t}${S}$`,n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:"$ \\text{ cm}$"}),n+=".<br>"+G.enonce,Q(this,o,{reponse:{value:C}}),this.correctionDetaillee?($=`$[${t}${a}]$ est l'image de $[${t}${r}]$
            et $${t} ${a} ${X} ${t} ${r}$
            donc c'est ${U} et on a : $${M}$.
            <br>${G.solution}`,$+=`Le rapport de cette homothétie est
            ${pe} quotient de la longueur d'un segment
            "à l'arrivée" par sa longueur "au départ".
            <br>
            Soit $k=${m}\\dfrac{${t}${a}}{${t}${r}}=${m}\\dfrac{${i(u)}}{${i(c.valeurDecimale)}}=${this.sup3===1?i(s.valeurDecimale):s.texFSD}$.
            <br>
            $[${t}${S}]$ est l'image de $[${t}${y}]$.
            <br>
            Or, une homothétie de rapport ${V}
            est une transformation qui multiplie
            toutes les longueurs par ${ue} son rapport.
            <br>
            Soit $${t}${S}= ${m}k \\times ${t}${y}$.
            <br>
            Donc `):($=G.solution,$+=`Soit $k=${m}\\dfrac{${t}${a}}{${t}${r}}=${m}\\dfrac{${i(u)}}{${i(c.valeurDecimale)}}=${this.sup3===1?i(s.valeurDecimale):s.texFSD}$.
            <br><br>`),$+=`$${t}${S}= ${this.sup3===1?i(h.valeurDecimale):h.texFSD} \\times ${i(E.valeurDecimale)} = ${D(i(C))}~\\text{cm}$.`;break;case"antecendent2etapes":b=[`${t}${S}=${i(C)}\\text{ cm}`,`${t}${a}=${i(u)}\\text{ cm}`,`${t}${r}=${i(c.valeurDecimale)}\\text{ cm}`],d=ie([0,1,2]),B=b[d[0]],F=b[d[1]],de=b[d[2]],n=`$${a}$ et $${S}$ sont les images respectives
          de $${r}$ et $${y}$ par une homothétie ${Y}
          de centre $${t}$ tel que
          $ {${B}}$, $ {${F}}$ et $ {${de}}$.
          <br>
          ${T} ${Le} 
          Calculer $${t}${y}$`,n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:"$ \\text{ cm}$"}),n+=".<br>"+le.enonce,Q(this,o,{reponse:{value:E.texFSD}}),this.correctionDetaillee?($=`$[${t}${a}]$ est l'image de $[${t}${r}]$
            et $${t} ${a} ${X} ${t} ${r}$
            donc c'est ${U} et on a : $${M}$.
            <br>${le.solution}`,$+=`Le rapport de cette homothétie est ${pe} quotient
            de la longueur d'un segment "à l'arrivée" par sa longueur "au départ".
            <br>
            Soit $k=${m}\\dfrac{${t}${a}}{${t}${r}}=${m}\\dfrac{${i(u)}}{${i(c.valeurDecimale)}}=${this.sup3===1?i(s.valeurDecimale):s.texFSD}$.
            <br>
            $[${t}${S}]$ est l'image de $[${t}${y}]$.
            <br>
            Or, une homothétie de rapport ${V} est
            une transformation qui multiplie
            toutes les longueurs par ${ue} son rapport.
            <br>
            Soit $${t}${S}=${m}k \\times ${t}${y}$.
            <br>
            Donc `):($=G.solution,$+=`Soit $k=${m}\\dfrac{${t}${a}}{${t}${r}}=${m}\\dfrac{${i(u)}}{${i(c.valeurDecimale)}}=${this.sup3===1?i(s.valeurDecimale):s.texFSD}$.
            <br><br>`),$+=`$${t}${y}=\\dfrac{${t}${S}}{${m}k}=\\dfrac{${i(C)}}{${this.sup3===1?i(h.valeurDecimale):h.texFSD}} ${Qe} = ${D(i(E.valeurDecimale))}~\\text{cm}$.`;break;case"aireImage":ce=f===$e?"":"environ",n=`Une figure a pour aire $ {${i(x.valeurDecimale)}\\text{ cm}^2}$.<br>
          Calculer l'aire de son image par une homothétie de rapport $${m}${this.sup3===1?i(A.valeurDecimale):A.texFSD}$`,this.interactif?n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:" $\\text{ cm}^2$ (arrondi au $\\text{ mm}^2$ si besoin)"}):n+=" (arrondir au $\\text{mm}^2$ près si besoin)",Q(this,o,{reponse:{value:$e}}),$=`$${se}^2 \\times ${i(x.valeurDecimale)}`,$+=ce==="environ"?` = ${i(f)} \\approx ${D(i($e))}`:` = ${D(i(f))}`,$+="~\\text{cm}^2$",this.correctionDetaillee&&($=`Une homothétie est une transformation qui multiplie toutes les aires par le carré de son rapport.
            <br>
            $${se}^2 \\times ${i(x.valeurDecimale)} = ${i(f)}`,$+=ce==="environ"?`\\approx ${i($e)}`:"",$+=`$<br>
            Donc l'aire de l'image de cette figure est ${ce} $ {${D(i($e))}~\\text{cm}^2}$.`);break;case"aireAntécédent":n=`L'image d'une figure par une homothétie de rapport $${m}${this.sup3===1?i(A.valeurDecimale):A.texFSD}$ a pour aire $ {${i(f)}\\text{ cm}^2}$.
          <br>
          Calculer l'aire de la figure de départ`,n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:" $\\text{ cm}^2$"}),n+=".",Q(this,o,{reponse:{value:x.texFSD}}),$=`$ {\\dfrac{${i(f)}}{${se}^2} = ${D(i(x.valeurDecimale))}~\\text{cm}^2}$`,this.correctionDetaillee&&($=`Une homothétie est une transformation qui multiplie toutes les aires par le carré de son rapport.
            <br>
            Notons $\\mathscr{A}$ l'aire de la figure de départ.
            <br>
            D'où $${se}^2 \\times \\mathscr{A} = ${i(f)}$.
            <br>
            Puis $\\mathscr{A}=\\dfrac{${i(f)}}{${se}^2}=${i(x.valeurDecimale)}$.
            <br>
            Donc l'aire de la figure de départ est $ {${D(i(x.valeurDecimale))}~\\text{cm}^2}$.`);break;case"aireRapport":A=V==="positif"?A:A.multiplieEntier(-1),n=`Une figure et son image par une homothétie de rapport ${V} ont respectivement pour aires $ {${i(x.valeurDecimale)}\\text{ cm}^2}$ et $ {${i(f)}\\text{ cm}^2}$.
          <br>
          Calculer le rapport de l'homothétie`,n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :"}),n+=".",Q(this,o,{reponse:{value:A.texFSD}}),this.correctionDetaillee&&($=`Une homothétie est une transformation qui multiplie toutes les aires par le carré de son rapport. <br>
            Notons $k$ le rapport de cette homothétie.
            On a donc $k^2 \\times ${i(x.valeurDecimale)} = ${i(f)}$,
            ou encore $k^2=\\dfrac{${i(f)}}{${i(x.valeurDecimale)}}$.
            <br>
            D'où `),$+=`$ {k=${m}\\sqrt{\\dfrac{${i(f)}}{${i(x.valeurDecimale)}}} = ${D(this.sup3===1?i(A.valeurDecimale):A.texFSD)}}$.`;break;case"rapport2":b=[`${r}${a}=${i(q.valeurDecimale)}\\text{ cm}`,`${t}${r}=${i(c.valeurDecimale)}\\text{ cm}`],d=ie([0,1]),B=b[d[0]],F=b[d[1]],n=`$${a}$ est l'image de $${r}$
          par une homothétie ${Y}
          de centre $${t}$ tel que $ {${B}}$ et $ {${F}}$.
          <br>
          ${T} ${L} 
          Calculer le rapport $k$ de cette homothétie`,n+=I(this,o,"clavierDeBaseAvecFraction  ",{texteAvant:" :"}),n+=".<br>"+J.enonce,Q(this,o,{reponse:{value:s.texFSD}}),this.correctionDetaillee?($=`$${t}${a} = ${Be} = ${i(u)}\\text{ cm}$
            <br>
            $[${t}${a}]$ est l'image de $[${t}${r}]$
            et $${t} ${a} ${X} ${t} ${r}$
            donc c'est ${U} et on a : $${M}$.
            <br> ${j.solution}`,$+=`Le rapport de cette homothétie est ${pe} quotient
            de la longueur d'un segment "à l'arrivée"
            par sa longueur "au départ".
            <br>
            Soit `):$=j.solution,$+=`$k=${m}\\dfrac{${t}${a}}{${t}${r}}=${m}\\dfrac{${i(u)}}{${i(c.valeurDecimale)}}=${D(this.sup3===1?i(s.valeurDecimale):s.texFSD)}$.`;break;case"encadrerk":b=[`${t}${a}=${i(u)}\\text{ cm}`,`${t}${r}=${i(c.valeurDecimale)}\\text{ cm}`],d=ie([0,1]),B=b[d[0]],F=b[d[1]],n=`$${a}$ est l'image de $${r}$
          par une homothétie ${Y}
          de centre $${t}$ tel que $ {${B}}$ et $ {${F}}$.
          <br>
          ${T} ${L} 
          Sans effectuer de calculs, que peut-on dire du rapport $k$ de cette homothétie ? Choisir la bonne réponse.
          <br>
          ${L}
          ${j.enonce}`,this.autoCorrection[o]={},this.autoCorrection[o].propositions=[{texte:"$k < -1$",statut:s.valeurDecimale<-1},{texte:"$ -1 < k < -0 $",statut:s.valeurDecimale>-1&&s.valeurDecimale<0},{texte:"$0 < k < 1$",statut:s.valeurDecimale<1&&s.valeurDecimale>0},{texte:"$k > 1$",statut:s.valeurDecimale>1}],this.autoCorrection[o].options={ordered:!1},n+="<br>"+ye(this,o).texte,this.correctionDetaillee?$=`$[${t}${a}]$ est l'image de $[${t}${r}]$
            et $${t} ${a} ${X} ${t} ${r}$
            donc c'est ${U}.
            <br>
            De plus, $${a}${fe}[${t}${r})$.
            ${j.solution}
            <br>Donc `:$=j.solution+"<br>",$+=`$${D(M)}$`,$+=this.correctionDetaillee?".":"";break;case"encadrerk2":b=[`${r}${a}=${i(q.valeurDecimale)}\\text{ cm}`,`${t}${r}=${i(c.valeurDecimale)}\\text{ cm}`],d=ie([0,1]),B=b[d[0]],F=b[d[1]],n=`$${a}$ est l'image de $${r}$
          par une homothétie ${Y}
          de centre $${t}$ tel que $ {${B}}$ et $ {${F}}$.
          <br>
          ${T} ${L} 
          Sans effectuer de calculs, que peut-on dire du rapport $k$ de cette homothétie ? Choisir la bonne réponse.
          <br>
          ${L}
          ${J.enonce}`,this.autoCorrection[o]={},this.autoCorrection[o].propositions=[{texte:"$k < -1$",statut:s.valeurDecimale<-1},{texte:"$ -1 < k < -0 $",statut:s.valeurDecimale>-1&&s.valeurDecimale<0},{texte:"$0 < k < 1$",statut:s.valeurDecimale<1&&s.valeurDecimale>0},{texte:"$k > 1$",statut:s.valeurDecimale>1}],this.autoCorrection[o].options={ordered:!1},n+="<br>"+ye(this,o).texte,this.correctionDetaillee?$=`$${t}${a} = ${Be} = ${i(u)}\\text{ cm}$
            <br>
            $[${t}${a}]$ est l'image de $[${t}${r}]$
            et $${t} ${a} ${X} ${t} ${r}$
            donc c'est ${U}.
            <br>
            De plus, $${a}${fe}[${t}${r})$.
            ${J.solution}
            <br>Donc `:$=J.solution+"<br>",$+=`$${D(M)}$`,$+=this.correctionDetaillee?".":"";break}this.questionJamaisPosee(o,s)&&(this.listeQuestions[o]=n,this.listeCorrections[o]=$,o++),De++}Ue(this)}}export{bt as dateDeModifImportante,dt as dateDePublication,ft as default,At as interactifReady,vt as interactifType,Dt as refs,ht as titre,Ot as uuid};
