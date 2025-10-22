import{E as T,K as m}from"./Exercice-DtXhjCyI.js";import{a as g}from"./comparisonFunctions-B45ZZ3C7.js";import{h as l}from"./gestionInteractif-DujZpSu8.js";import{a as v}from"./questionMathLive-DdRvWqlN.js";import{P as f}from"./Polynome-BIt5zaQj.js";import{g as _,r as $,a as d,x as y,v as i,m as u,F as A,Y as k,al as L,z as F,u as h,f as M,w,h as C,l as Q}from"./embellissements-BYV7mIDn.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"./compute-engine.min.umd-BwAhpA7x.js";import"decimal.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"earcut";import"roughjs";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const oe="Calculer la dérivée d'une fonction avec exponentielle",ne="06/08/2025",ie=!0,ae="mathLive",ce="d2a2d",xe={"fr-fr":["1AN14-9"],"fr-ch":[""]};class be extends T{constructor(){super(),this.nbQuestions=1,this.besoinFormulaireTexte=["Choix des questions",`Nombres séparés par des tirets :
1 : a*e^x+bx+c
2 : e^u avec u affine
3 :  e^u avec u poly second degré
4 : u*e^x
5 : (ax+b)*e^mx
6 : (m*e^x)/(ax+b) ou  (m*e^x)/(ax^2+b) 
7 : Mélange`],this.sup="7",this.spacing=1.5,this.spacingCorr=1.5}nouvelleVersion(){const P=_({saisie:this.sup,min:1,max:6,melange:7,defaut:7,nbQuestions:this.nbQuestions});for(let o=0,R=0;o<this.nbQuestions&&R<50;){let a="",c="",x="";const p="On considère la fonction $f$ définie sur $\\mathbb{R}$ par :";switch(P[o]){case 1:{const n=$(-10,10,0),e=$(-5,5),t=$(-5,5,e),r=d([!0,!1]);c=`La fonction $f$ est dérivable sur $\\mathbb{R}$ comme somme de fonctions dérivables sur $\\mathbb{R}$.<br><br>
            Pour tout $x$ de $\\mathbb{R}$, `,r===!0?(a=p+` $f(x)=${i(n)}\\text{e}^x${e===0?`${M(t)}`:`${w(e)}${h(C(e),t)}`}$.<br>
            Calculer $f'(x)$.`,c+=`$f'(x)=${u(`${i(n)}\\text{e}^x${e===0?"":`${M(e)}`}`)}$.`):(a=p+` $f(x)=${h(e,t)}${w(n)}${i(C(n))}\\text{e}^x$.<br>
            Calculer $f'(x)$.`,c+=`$f'(x)=${u(`${e===0?"":`${e}`}${F(n)}\\text{e}^x`)}$.`),a+=v(this,o,m.clavierFonctionsTerminales,{texteAvant:"<br>$f'(x)=$"}),x=`${`${n}e^x+${e}`}`,l(this,o,{reponse:{value:x}})}break;case 2:{const n=[[$(-10,10,[0,1]),0],[$(-30,30,[0,10])/10,0],[$(-5,5,0),$(-10,10,0)],[$(-30,30,[0,10])/10,$(-30,30,[0,10])/10]],e=d(n),t=new f({rand:!0,coeffs:[e[1],e[0]]}),r=t.derivee();a=p+`$f(x)=\\text{e}^{${t}}$.<br>
             Calculer $f'(x)$.`,c=`La fonction $f$ est dérivable sur $\\mathbb{R}$ comme composée de fonctions dérivables sur $\\mathbb{R}$.<br>
            $f$ est de la forme $\\text{e}^u$ avec $u(x)=${t}$, donc sa fonction dérivée est donnée par $f'=u'\\text{e}^u$.<br><br>
            Pour tout $x$ de $\\mathbb{R}$, `,c+=`${r.isMon()?`$f'(x)=${u(`${r}\\text{e}^{${t}}`)}$`:`$f'(x)=${u(`(${r})\\text{e}^{${t}}`)}$`}.`,a+=v(this,o,m.clavierFonctionsTerminales,{texteAvant:"<br>$f'(x)=$"}),x=`${`${r}e^{${t}}`}`}l(this,o,{reponse:{value:x}});break;case 3:{const n=[[$(-10,10,0),0,0],[$(-2,2,0),$(-2,2,0),0],[$(-2,2,0),0,$(-2,2,0)],[$(-2,2,0),$(-5,5,0),$(-2,2,0)],[$(-30,30,[-20,-10,0,10,20])/10,0,0]],e=d(n),t=new f({rand:!0,coeffs:[e[2],e[1],e[0]]}),r=t.derivee();a=p+`$f(x)=\\text{e}^{${t}}$.<br>
             Calculer $f'(x)$.`,c=`La fonction $f$ est dérivable sur $\\mathbb{R}$ comme composée de fonctions dérivables sur $\\mathbb{R}$.<br>
            $f$ est de la forme $\\text{e}^u$ avec $u(x)=${t}$, donc sa fonction dérivée est donnée par $f'=u'\\text{e}^u$.<br><br>
            Pour tout $x$ de $\\mathbb{R}$, `,c+=`${r.isMon()?`$f'(x)=${u(`${r}\\text{e}^{${t}}`)}$`:`$f'(x)=${u(`(${r})\\text{e}^{${t}}`)}$`}.`,a+=v(this,o,m.clavierFonctionsTerminales,{texteAvant:"<br>$f'(x)=$"}),x=`${`${r}e^{${t}}`}`}l(this,o,{reponse:{value:x}});break;case 4:switch($(1,2)){case 1:{const n=[[$(-10,10,0),0],[$(-29,29,0)/10,0],[$(-10,10,0),$(-10,10,0)]],e=d(n),t=new f({rand:!0,coeffs:[e[1],e[0]]});c=`La fonction $f$ est dérivable sur $\\mathbb{R}$ comme produit de fonctions dérivables sur $\\mathbb{R}$.<br>
            $f$ est de la forme $u\\times v$ avec $u(x)=${t}$ et $v(x)=\\text{e}^x$, donc sa fonction dérivée est donnée par 
            $f'=u'\\times v+ u\\times v'$.<br><br>
            Pour tout $x$ de $\\mathbb{R}$, <br>`,a=p+` $f(x)=${t.isMon()?`${t}\\text{e}^x`:`(${t})\\text{e}^x`}$.<br>
            Calculer $f'(x)$ et écrire son expression sous forme factorisée.`,c+=` 
              $\\begin{aligned}
              f'(x)&=\\underbrace{${t.derivee()}}_{u'(x)}\\times \\underbrace{\\text{e}^x}_{v(x)}+\\underbrace{(${t})}_{u(x)}\\times \\underbrace{\\text{e}^x}_{v'(x)}\\\\
            ${t.isMon()?"":`&=\\text{e}^x(${t.derivee()}+(${t}))\\\\`}
              &= ${u(`${e[0]+e[1]===0?`${e[0]}\\text{e}^x`:`\\text{e}^x(${h(e[0],e[0]+e[1])})`}`)}.
              \\end{aligned}$`,a+=v(this,o,m.clavierFonctionsTerminales,{texteAvant:"<br>$f'(x)=$"}),x=`${`(${h(e[0],e[0]+e[1])})e^x`}`,l(this,o,{reponse:{value:x,options:{factorisation:!0}}})}break;case 2:default:{const n=[[$(-10,10,0),0,0],[$(-2,2,0),$(-2,2,0),0],[$(-2,2,0),0,$(-2,2,0)],[$(-2,2,0),$(-5,5,0),$(-2,2,0)],[$(-30,30,[-20,-10,0,10,20])/10,0,0]],e=d(n),t=new f({rand:!0,coeffs:[e[2],e[1],e[0]]}),r=t.derivee(),s=new f({rand:!0,coeffs:[e[2]+e[1],2*e[0]+e[1],e[0]]});c=`La fonction $f$ est dérivable sur $\\mathbb{R}$ comme produit de fonctions dérivables sur $\\mathbb{R}$.<br>
            $f$ est de la forme $u\\times v$ avec $u(x)=${t}$ et $v(x)=\\text{e}^x$, donc sa fonction dérivée est donnée par 
            $f'=u'\\times v+ u\\times v'$.<br><br>
            Pour tout $x$ de $\\mathbb{R}$, <br>`,a=p+` $f(x)=${t.isMon()?`${t}\\text{e}^x`:`(${t})\\text{e}^x`}$.<br>
            Calculer $f'(x)$ et écrire son expression sous forme factorisée.`,c+=` 
              $\\begin{aligned}
              f'(x)&=\\underbrace{${r.isMon()?`${r}`:`(${r})`}}_{u'(x)}\\times \\underbrace{\\text{e}^x}_{v(x)}+\\underbrace{(${t})}_{u(x)}\\times \\underbrace{\\text{e}^x}_{v'(x)}\\\\
           &=${r.isMon()?`${u(`\\text{e}^x(${s})`)}.`:`\\text{e}^x(${r}+(${t}))`}\\\\
              ${r.isMon()?"":`&=${u(`\\text{e}^x(${s})`)}.`}
              \\end{aligned}$`,a+=v(this,o,m.clavierFonctionsTerminales,{texteAvant:"<br>$f'(x)=$"}),x=`${`(${s})e^x`}`,l(this,o,{reponse:{value:x,options:{factorisation:!0}}})}break}break;case 5:{const n=[[$(-10,10,[0,1]),0],[$(-29,29,0)/10,0],[$(-10,10,0),$(-10,10,0)]],e=d(n),t=new f({rand:!0,coeffs:[e[1],e[0]]}),r=t.derivee(),s=$(-10,10,[0,1]),b=new f({rand:!0,coeffs:[e[0]+s*e[1],s*e[0]]});c=`La fonction $f$ est dérivable sur $\\mathbb{R}$ comme produit de fonctions dérivables sur $\\mathbb{R}$.<br>
            $f$ est de la forme $u\\times v$ avec $u(x)=${t}$ et $v(x)=\\text{e}^{${i(s)}x}$, donc sa fonction dérivée est donnée par 
            $f'=u'\\times v+ u\\times v'$.<br><br>
            Pour tout $x$ de $\\mathbb{R}$, <br>`,a=p+` $f(x)=${t.isMon()?`${t}\\text{e}^{${i(s)}x}`:`(${t})\\text{e}^{${i(s)}x}`}$.<br>
            Calculer $f'(x)$ et écrire son expression sous forme factorisée.`,c+=` 
              $\\begin{aligned}
              f'(x)&=\\underbrace{${r}}_{u'(x)}\\times \\underbrace{\\text{e}^{${i(s)}x}}_{v(x)}+\\underbrace{(${t})}_{u(x)}\\times \\underbrace{${L(s)}\\text{e}^{${i(s)}x}}_{v'(x)}\\\\
            ${t.isMon()?`&=${i(s)}\\text{e}^{${i(s)}x} ${F(e[0]*s)}x\\text{e}^{${i(s)}x}\\\\`:""}
            ${t.isMon()?"":`&=\\text{e}^{${i(s)}x}(${r}+${t.isMon()?`(${s}\\times (${t}))`:`(${s}(${t}))`}\\\\`}
              &= ${u(`\\text{e}^{${i(s)}x}(${b})`)}.
              \\end{aligned}$`,a+=v(this,o,m.clavierFonctionsTerminales,{texteAvant:"<br>$f'(x)=$"}),x=`${`(${b})e^{${s}x}`}`,l(this,o,{reponse:{value:x,options:{factorisation:!0}}})}break;case 6:switch($(1,2)){case 1:{const n=[[$(1,3),0],[$(1,10),$(-4,4,0)]];let e=d(n),t=$(1,5);do e=d(n),t=$(1,7);while(y(t,e[0])!==1);const r=new f({rand:!0,coeffs:[e[1],e[0]]}),s=r.multiply(t).add(-t*e[0]),b=new A(-e[1],e[0]).simplifie();c=`La fonction $f$ est dérivable sur $\\mathbb{R}$ comme quotient de fonctions dérivables sur $\\mathbb{R}\\smallsetminus\\left\\{${b.texFraction}\\right\\}$ dont le dénominateur ne s'annule pas sur $\\mathbb{R}\\smallsetminus\\left\\{${b.texFraction}\\right\\}$.<br>
            $f$ est de la forme $\\dfrac{u}{v}$ avec $u(x)=${i(t)}\\text{e}^{x}$ et $v(x)=${r}$, donc sa fonction dérivée est donnée par 
            $f'=\\dfrac{u'\\times v- u\\times v'}{v^2}$.<br><br>
            Pour tout $x$ de $\\mathbb{R}\\smallsetminus\\left\\{${b.texFraction}\\right\\}$, <br>`,a=` On considère la fonction $f$ définie sur $\\mathbb{R}\\smallsetminus\\left\\{${b.texFraction}\\right\\}$ par : 
            $f(x)=\\dfrac{${i(t)}\\text{e}^{x}}{${r}}$.<br>
            Calculer $f'(x)$.`,c+=` 
              $\\begin{aligned}
              f'(x)&=\\dfrac{\\overbrace{${i(t)}\\text{e}^{x}}^{u'(x)}\\times \\overbrace{${r.isMon()?`${r}`:`(${r})`}}^{v(x)}-\\overbrace{${i(t)}\\text{e}^{x}}^{u(x)}\\times \\overbrace{${k(e[0])}}^{v'(x)}}{\\underbrace{(${r})^2}_{(v(x))^2}}\\\\
         &=\\dfrac{  ${r.multiply(t)}\\text{e}^{x}- ${t*e[0]}\\text{e}^{x}}{(${r})^2} \\\\
        &=${u(`\\dfrac{${s.isMon()?` ${s}`:`(${s})`}\\text{e}^{x}}{${e[0]===1&&e[1]===0?`${r}^2`:`(${r})^2`}}`)}.
              \\end{aligned}$`,a+=v(this,o,m.clavierFonctionsTerminales,{texteAvant:"<br>$f'(x)=$"}),x=`${`\\dfrac{(${s})e^{x}}{(${r})^2}`}`,l(this,o,{reponse:{value:x,compare:g}})}break;case 2:default:{const n=[[$(1,10,0),0,0],[$(1,10,0),0,$(1,10)]];let e=d(n),t=$(1,7);do e=d(n),t=$(1,7);while(y(t,e[0])!==1);const r=new f({rand:!0,coeffs:[e[2],e[1],e[0]]}),s=r.derivee(),b=new f({rand:!0,coeffs:[e[2]*t,-2*e[0]*t,t*e[0]]});c=`La fonction $f$ est dérivable sur $${e[2]!==0?"\\mathbb{R}":"\\mathbb{R}^*"}$ comme quotient de fonctions dérivables sur ${e[2]!==0?"$\\mathbb{R}$":"$\\mathbb{R}^*$ dont le dénominateur ne s'annule pas sur $\\mathbb{R}^*$"}.<br>
            $f$ est de la forme $\\dfrac{u}{v}$ avec $u(x)=${i(t)}\\text{e}^{x}$ et $v(x)=${r}$, donc sa fonction dérivée est donnée par 
            $f'=\\dfrac{u'\\times v- u\\times v'}{v^2}$.<br><br>
            Pour tout $x$ de $\\mathbb{R}$, <br>`,a=`
               On considère la fonction $f$ définie sur $\\mathbb{R}$ par : 
            $f(x)=\\dfrac{${i(t)}\\text{e}^{x}}{${r}}$.<br>
            Calculer $f'(x)$.`,c+=` 
              $\\begin{aligned}
              f'(x)&=\\dfrac{\\overbrace{${i(t)}\\text{e}^{x}}^{u'(x)}\\times \\overbrace{${r.isMon()?`${r}`:`(${r})`}}^{v(x)}-\\overbrace{${i(t)}\\text{e}^{x}}^{u(x)}\\times \\overbrace{${s}}^{v'(x)}}{\\underbrace{(${r})^2}_{(v(x))^2}}\\\\
        &=${u(`\\dfrac{${b.isMon()?` ${b}`:`(${b})`}\\text{e}^{x}}{(${r})^2}`)}.
              \\end{aligned}$`,a+=v(this,o,m.clavierFonctionsTerminales,{texteAvant:"<br>$f'(x)=$"}),x=`${`\\dfrac{(${b})e^{x}}{(${r})^2}`}`,l(this,o,{reponse:{value:x,compare:g}})}break}break}this.questionJamaisPosee(o,a)&&(this.listeQuestions[o]=a,this.listeCorrections[o]=c,o++),R++}Q(this)}}export{ne as dateDePublication,be as default,ie as interactifReady,ae as interactifType,xe as refs,oe as titre,ce as uuid};
