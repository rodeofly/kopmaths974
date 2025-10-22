import{g as E,af as P,p as K,r as A,aJ as B,m as h,e as c,a as q,A as M,aK as x,aL as J,aH as N,o as S,D as z,l as G}from"./embellissements-BYV7mIDn.js";import{a as l}from"./questionMathLive-DdRvWqlN.js";import{E as H,K as v}from"./Exercice-DtXhjCyI.js";import{h as d}from"./gestionInteractif-DujZpSu8.js";import R from"decimal.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./tableauMathlive-xx-nDjq0.js";import"./index-BUDQz6-w.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"seedrandom";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./exerciseMethods-CtbYPwln.js";import"crypto-js";import"./AjouteTableauMathlive-Bz24QHd3.js";const Ar=!0,mr="mathLive",pr="Calculer un produit scalaire avec un angle",ur="29/04/2025",Cr="867cd",Dr={"fr-fr":["1G10-3"],"fr-ch":[]};class Br extends H{constructor(){super(),this.nbQuestions=1,this.sup=1,this.spacing=1.5,this.besoinFormulaire2CaseACocher=["Avec des radians"],this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Application de la formule","2 : Avec une figure (parallélogramme)","3: Mélange"].join(`
`)]}nouvelleVersion(){const O=E({saisie:this.sup,min:1,max:2,melange:3,defaut:3,nbQuestions:this.nbQuestions}),k=P(O,this.nbQuestions);for(let o=0,a,$,i,b=0;o<this.nbQuestions&&b<50;){switch(k[o]){case 1:{const t=A(2,12),e=A(2,12),s=q([[30,"\\dfrac{\\pi}{6}"],[45,"\\dfrac{\\pi}{4}"],[60,"\\dfrac{\\pi}{3}"],[120,"\\dfrac{2\\pi}{3}"],[135,"\\dfrac{3\\pi}{4}"],[150,"\\dfrac{5\\pi}{6}"],[180,"\\pi"]]),n=`\\overrightarrow{AB}\\cdot\\overrightarrow{AC}&=${t}\\times ${e}\\times \\cos\\left(${this.sup2?`${s[1]}`:`${s[0]}^\\circ`}\\right)\\\\`;a=`On considère un triangle $ABC$ tel que $AB=${t}$, $AC=${e}$ et $\\widehat{BAC}=${this.sup2?`${s[1]}`:`${s[0]}^\\circ`}$.<br>
          Calculer $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.`,$=`D'après le cours on a : $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=AB\\times AC\\times \\cos(\\widehat{BAC})$.<br>
          On applique avec les données de l'énoncé : <br>`,a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=$"}),s[0]===30?($+=`$\\begin{aligned}
                ${n}
                &=${t*e}\\times \\dfrac{\\sqrt{3}}{2}\\\\
                &=${h(`${c(t*e/2,1)}\\sqrt{3}`)}
                \\end{aligned}$`,i=[`${t*e/2}\\sqrt{3}`]):s[0]===45?($+=`$\\begin{aligned}
                ${n}
                &=${t*e}\\times \\dfrac{\\sqrt{2}}{2}\\\\
                &=${h(`${c(t*e/2,1)}\\sqrt{2}`)}
                \\end{aligned}$`,i=[`${t*e/2}\\sqrt{2}`]):s[0]===60?($+=`$\\begin{aligned}
                ${n}
                &=${t*e}\\times \\dfrac{1}{2}\\\\
                &=${h(`${c(t*e/2,1)}`)}
                \\end{aligned}$`,i=[`${t*e/2}`]):s[0]===120?($+=`$\\begin{aligned}
                ${n}
                &=${t*e}\\times \\left(-\\dfrac{1}{2}\\right)\\\\
                &=${h(`${c(-t*e/2,1)}`)}
                \\end{aligned}$`,i=[`${-t*e/2}`]):s[0]===135?($+=`$\\begin{aligned}
                        ${n}
                        &=${t*e}\\times \\left(-\\dfrac{\\sqrt{2}}{2}\\right)\\\\
                        &=${h(`${c(-t*e/2,1)}\\sqrt{2}`)}
                        \\end{aligned}$`,i=[`${-t*e/2}\\sqrt{2}`]):s[0]===150?($+=`$\\begin{aligned}
                            ${n}
                            &=${t*e}\\times \\left(-\\dfrac{\\sqrt{3}}{2}\\right)\\\\
                            &=${h(`${c(-t*e/2,1)}\\sqrt{3}`)}
                            \\end{aligned}$`,i=[`${-t*e/2}\\sqrt{3}`]):($+=`$\\begin{aligned}
                            ${n}
                            &=${t*e}\\times (-1)\\\\
                            &=${h(`${c(-t*e,1)}`)}
                            \\end{aligned}$`,i=[`${-t*e}`]),d(this,o,{reponse:{value:i}})}break;case 2:default:{const t=K(0,0,"A","below"),e=A(3,6),g=A(4,8),s=new R(e*g).div(2),n=B(t,g,0,"B","below"),F=[[30,"\\dfrac{\\pi}{6}","\\dfrac{\\sqrt{3}}{2}",`${h(`${c(s,1)}\\sqrt{3}`)}`,`${h(`-${c(s,1)}\\sqrt{3}`)}`,`${c(s,1)}\\sqrt{3}`,"\\dfrac{5\\pi}{6}",150],[45,"\\dfrac{\\pi}{4}","\\dfrac{\\sqrt{2}}{2}",`${h(`${c(s,1)}\\sqrt{2}`)}`,`${h(`-${c(s,1)}\\sqrt{2}`)}`,`${c(s,1)}\\sqrt{2}`,"\\dfrac{3\\pi}{4}",135],[60,"\\dfrac{\\pi}{3}","\\dfrac{1}{2}",`${h(`${c(s,1)}`)}`,`${h(`-${c(s,1)}`)}`,`${c(s,1)}`,"\\dfrac{2\\pi}{3}",120]],r=q(F),m=`
                &=${e}\\times ${g}\\times \\cos\\left(${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}\\right)\\\\
                         &=${e*g}\\times${r[2]}\\\\
                         &=${r[3]}
                         \\end{aligned}$`,f=`
                &=-${e}\\times ${g}\\times \\cos\\left(${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}\\right)\\\\
                         &=-${e*g}\\times${r[2]}\\\\
                         &=${r[4]}
                         \\end{aligned}$`,p=`
                         &=-${e}\\times ${g}\\times \\cos\\left(${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}\\right)\\\\
                                  &=-${e*g}\\times\\left(-${r[2]}\\right)\\\\
                                  &=${r[3]}
                                  \\end{aligned}$`,y=`
                         &=${e}\\times ${g}\\times \\cos\\left(${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}\\right)\\\\
                                  &=${e*g}\\times\\left(-${r[2]}\\right)\\\\
                                  &=${r[4]}
                                  \\end{aligned}$`,w="On écrit le produit scalaire en utilisant des vecteurs de même origine.<br>",u=B(n,e,r[0],"C","above"),C=B(t,e,r[0],"D","above"),Q=M(t,n,u,C),T=x(n,t,"black",.5,""),L=x(u,n,"black",.5,""),j=J(n,t,C,"black",1.8,`${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}`),D=[];switch(D.push(N(t,n,u,C),T,L,j,Q),a="$ABCD$ est un parallélogramme.<br>",a+=S(Object.assign({zoom:1,scale:.6},z(D)),D),A(1,10)){case 1:a+="Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>",$=`On a :<br> $\\begin{aligned}
         \\overrightarrow{AB}\\cdot \\overrightarrow{AD}&=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
         ${m}`,i=`${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AB}\\cdot \\overrightarrow{AD}=$"});break;case 2:a+="Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}$.<br>",$=w+`Comme  $\\overrightarrow{BC}=\\overrightarrow{AD}$, on a $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}=\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                         $\\begin{aligned}
             \\overrightarrow{AB}\\cdot \\overrightarrow{BC}&= \\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
             &=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
             ${m}`,i=`${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AB}\\cdot \\overrightarrow{BC}=$"});break;case 3:a+="Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{CB}$.<br>",$=w+`Comme  $\\overrightarrow{CB}=-\\overrightarrow{AD}$, on a $\\overrightarrow{AB}\\cdot \\overrightarrow{CB}=-\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                         $\\begin{aligned}
             \\overrightarrow{AB}\\cdot \\overrightarrow{CB}&= -\\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
             &=-AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
             ${f}`,i=`-${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AB}\\cdot \\overrightarrow{CB}=$"});break;case 4:a+="Calculer $\\overrightarrow{DC}\\cdot \\overrightarrow{BC}$.<br>",$=w+`Comme  $\\overrightarrow{DC}=\\overrightarrow{AB}$ et $\\overrightarrow{BC}=\\overrightarrow{AD}$, on a $\\overrightarrow{DC}\\cdot \\overrightarrow{BC}=\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                             $\\begin{aligned}
                 \\overrightarrow{DC}\\cdot \\overrightarrow{BC}&= \\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
                 &=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
                 ${m}`,i=`${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{DC}\\cdot \\overrightarrow{BC}=$"});break;case 5:a+="Calculer $\\overrightarrow{CD}\\cdot \\overrightarrow{AD}$.<br>",$=w+`Comme  $\\overrightarrow{CD}=-\\overrightarrow{AB}$, on a $\\overrightarrow{CD}\\cdot \\overrightarrow{AD}=-\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                                 $\\begin{aligned}
                     \\overrightarrow{CD}\\cdot \\overrightarrow{AD}&= -\\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
                     &=-AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
                     ${f}`,i=`-${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{CD}\\cdot \\overrightarrow{AD}=$"});break;case 6:a+="Calculer $\\overrightarrow{DA}\\cdot \\overrightarrow{BA}$.<br>",$=w+`Comme  $\\overrightarrow{DA}=-\\overrightarrow{AD}$ et $\\overrightarrow{BA}=-\\overrightarrow{AB}$, on a $\\overrightarrow{DA}\\cdot \\overrightarrow{BA}=\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                                     $\\begin{aligned}
                 \\overrightarrow{DA}\\cdot \\overrightarrow{BA}&= \\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
                 &=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
                 ${m}`,i=`${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{DA}\\cdot \\overrightarrow{BA}=$"});break;case 7:a+="Calculer $\\overrightarrow{DA}\\cdot \\overrightarrow{DC}$.<br>",$=w+`Comme  $ABCD$ est un parallélogramme, les angles consécutifs sont supplémentaires. <br>
                    Ainsi, $\\widehat{ADC}=${this.sup2?"\\pi":"180^\\circ"}-${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}= ${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}$.<br>
                                         $\\begin{aligned}
                     \\overrightarrow{DA}\\cdot \\overrightarrow{DC}&= \\overrightarrow{DA}\\cdot \\overrightarrow{DC}\\\\
                     &=DA\\times DC\\times \\cos(\\widehat{ADC})\\\\
                     ${y}`,i=`-${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{DA}\\cdot \\overrightarrow{DC}=$"});break;case 8:a+="Calculer $\\overrightarrow{AD}\\cdot \\overrightarrow{DC}$.<br>",$=w+`Comme  $\\overrightarrow{AD}=-\\overrightarrow{DA}$, $\\overrightarrow{AD}\\cdot \\overrightarrow{DC}=-\\overrightarrow{DA}\\cdot \\overrightarrow{DC}$.<br>
                        De plus,  $ABCD$ est un parallélogramme donc ses angles consécutifs sont supplémentaires. <br>
                        Ainsi, $\\widehat{ADC}=${this.sup2?"\\pi":"180^\\circ"}-${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}= ${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}$.<br>
                                             $\\begin{aligned}
                         \\overrightarrow{AD}\\cdot \\overrightarrow{DC}&= -\\overrightarrow{DA}\\cdot \\overrightarrow{DC}\\\\
                         &=-DA\\times DC\\times \\cos(\\widehat{ADC})\\\\
                         ${p}`,i=`${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AD}\\cdot \\overrightarrow{DC}=$"});break;case 9:a+="Calculer $\\overrightarrow{BC}\\cdot \\overrightarrow{DC}$.<br>",$=w+`Comme  $\\overrightarrow{BC}=-\\overrightarrow{DA}$, on a  $\\overrightarrow{BC}\\cdot \\overrightarrow{DC}=-\\overrightarrow{DA}\\cdot \\overrightarrow{DC}$.<br>
                        De plus,  $ABCD$ est un parallélogramme donc ses angles consécutifs sont supplémentaires. <br>
                        Ainsi, $\\widehat{ADC}=${this.sup2?"\\pi":"180^\\circ"}-${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}= ${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}$.<br>
                                             $\\begin{aligned}
                         \\overrightarrow{BC}\\cdot \\overrightarrow{DC}&= -\\overrightarrow{DA}\\cdot \\overrightarrow{DC}\\\\
                         &=-DA\\times DC\\times \\cos(\\widehat{ADC})\\\\
                         ${p}`,i=`${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{BC}\\cdot \\overrightarrow{DC}=$"});break;case 10:default:a+="Calculer $\\overrightarrow{BA}\\cdot \\overrightarrow{CB}$.<br>",$=w+`Comme  $\\overrightarrow{CB}=-\\overrightarrow{BC}$, on a  $\\overrightarrow{BA}\\cdot \\overrightarrow{CB}=-\\overrightarrow{BA}\\cdot \\overrightarrow{BC}$.<br>
                            De plus,  $ABCD$ est un parallélogramme donc ses angles consécutifs sont supplémentaires. <br>
                            Ainsi, $\\widehat{ABC}=${this.sup2?"\\pi":"180^\\circ"}-${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}= ${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}$.<br>
                                                 $\\begin{aligned}
                             \\overrightarrow{BA}\\cdot \\overrightarrow{CB}&= -\\overrightarrow{BA}\\cdot \\overrightarrow{BC}\\\\
                             &=-BA\\times BC\\times \\cos(\\widehat{ABC})\\\\
                             ${p}`,i=`${r[5]}`,d(this,o,{reponse:{value:i}}),a+=l(this,o,v.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{BA}\\cdot \\overrightarrow{CB}=$"});break}break}}this.questionJamaisPosee(o,a)&&(this.listeQuestions[o]=a,this.listeCorrections[o]=$,o++),b++}G(this)}}export{ur as dateDePublication,Br as default,Ar as interactifReady,mr as interactifType,Dr as refs,pr as titre,Cr as uuid};
