import{ay as b,af as x,r as a,f as t,Y as c,m,e as y,a as v,l as L}from"./embellissements-BYV7mIDn.js";import{E as C}from"./Exercice-DtXhjCyI.js";import{a as P}from"./questionMathLive-DdRvWqlN.js";import{s as u}from"./gestionInteractif-DujZpSu8.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const K="Calculer la valeur d'une expression littérale",O=!0,X="mathLive",Z="26/05/2025",_="17e39",$$={"fr-fr":["5L14"],"fr-ch":["10FA1-2","11FA1-6"]};class e$ extends C{version;constructor(){super(),this.version="5L14",this.nbQuestions=5}nouvelleVersion(){let p;this.version==="5L13-5"||this.version==="4L21"?p=b(2):p=b(10);const f=x(p,this.nbQuestions);for(let l=0,h,o,d=0;l<this.nbQuestions&&d<50;){let e,i,r,g,$,s;switch(f[l]){case 1:if(e=a(2,10),$=a(2,10,e),i=a(1,10,[e,$]),this.version.startsWith("4L")){const n=x([-1,1],3);e*=n[0],i=n[1],$*=n[2]}h=`Calculer $${e}x${t(i)}$ pour $x=${$}$`,o=`Pour $x=${$}$ : <br>`,o+=`$\\begin{aligned}${e}x${t(i)}
          &=${e}\\times ${c($)}${t(i)}\\\\
          &=${e*$}${t(i)}\\\\
          &=${m(`${e*$+i}`)}\\end{aligned}$`,u(this,l,e*$+i);break;case 2:if(e=a(2,10),$=a(2,10,e),i=a(1,10,[e,$]),this.version.startsWith("4L")){const n=x([-1,1],3);e*=n[0],i=n[1],$*=n[2]}h=`Calculer $${e}(x${t(i)})$ pour $x=${$}$`,o=`Pour $x=${$}$ : <br>`,o+=`$\\begin{aligned}${e}(x${t(i)})
          &=${e}\\times (${$}${t(i)})\\\\
          &=${e}\\times ${c($+i)}\\\\
          &=${m(`${e*($+i)}`)}\\end{aligned}$`,u(this,l,e*($+i));break;case 3:if($=a(2,10),s=a(2,10),this.version.startsWith("4L")){const n=x([-1,1,-1],2);$*=n[0],s*=n[1]}h=`Calculer $x^2+y^2$ pour $x=${$}$ et $y=${s}$`,o=`Pour $x=${$}$ et $y=${s}$ : <br>`,o+=`$\\begin{aligned}x^2+y^2
          &=${c($)}^2+${c(s)}^2\\\\
          &=${$**2}+${s**2}\\\\
          &=${m(`${$**2+s**2}`)}\\end{aligned}$`,u(this,l,$**2+s**2);break;case 4:if($=a(2,10),s=a(1,$-1),this.version.startsWith("4L")){const n=x([-1,1,-1],2);$*=n[0],s*=n[1]}h=`Calculer $x^2-y^2$ pour $x=${$}$ et $y=${s}$`,o=`Pour $x=${$}$ et $y=${s}$ : <br>`,o+=`$\\begin{aligned}x^2-y^2
          &=${c($)}^2-${c(s)}^2\\\\
          &=${$**2}-${s**2}\\\\
          &=${m(`${$**2-s**2}`)}\\end{aligned}$`,u(this,l,$**2-s**2);break;case 5:if(e=a(2,5),i=a(2,6),r=a(2,6),$=a(3,6),s=v([1,2,3,5,10]),this.version.startsWith("4L")){const n=x([-1,1,-1,1],5);$*=n[0],s*=n[1],e*=n[2],i*=n[3],r*=n[4]}h=`Calculer $${e}x^2${t(i)}(x-1)${t(r)}y^3$ pour $x=${$}$ et $y=${s}$`,o=`Pour $x=${$}$ et $y=${s}$ : <br>`,o+=`$\\begin{aligned}${e}x^2${t(i)}(x-1)${t(r)}y^3&=${e}\\times ${c($)}^2${t(i)}(${$}-1)${t(r)}\\times ${c(s)}^3\\\\
          &=${e}\\times ${$**2}${t(i)}\\times ${c($-1)}${t(r)}\\times ${c(s**3)}\\\\
          &=${e*$**2}${t(i*($-1))}${t(r*s**3)}\\\\
          &=${m(`${e*$**2+i*($-1)+r*s**3}`)}
          \\end{aligned}$`,u(this,l,e*$**2+i*($-1)+r*s**3);break;case 6:if(e=a(2,5),i=a(2,6),r=a(2,6),$=a(3,6),this.version.startsWith("4L")){const n=x([-1,1,-1,1],4);$*=n[0],e*=n[2],i*=n[3],r*=n[1]}h=`Calculer $${e}x^2${t(i)}x${t(r)}$ pour $x=${$}$`,o=`Pour $x=${$}$ : <br>`,o+=`$\\begin{aligned}${e}x^2${t(i)}x${t(r)}
          &=${e}\\times ${$}^2${t(i)}\\times ${c($)}${t(r)}\\\\
          &=${e}\\times ${$**2}${t(i*$)}${t(r)}\\\\
          &=${e*$**2}${t(i*$)}${t(r)}\\\\
          &=${m(`${e*$**2+i*$+r}`)}\\end{aligned}$`,u(this,l,e*$**2+i*$+r);break;case 7:if(e=a(2,5),i=a(2,6),r=a(2,6),$=a(3,6),this.version.startsWith("4L")){const n=x([-1,1],3);$*=n[0],e*=n[1],i*=n[2]}h=`Calculer $${e}x^2${t(i)}x-${r}$ pour $x=${$}$`,o=`Pour $x=${$}$ : <br>`,o+=`$\\begin{aligned}${e}x^2${t(i)}x-${r}
          &=${e}\\times ${c($)}^2${t(i)}\\times ${c($)}-${r}\\\\
          &=${e}\\times ${$**2}${t(i*$)}-${r}\\\\
          &=${m(`${e*$**2+i*$-r}`)}\\end{aligned}$`,u(this,l,e*$**2+i*$-r);break;case 8:if(e=a(2,5),i=a(2,e),r=a(2,6),$=a(3,6),this.version.startsWith("4L")){const n=x([-1,1],3);$*=n[0],e*=n[1],r*=n[2]}h=`Calculer $${e}x^2-${i}x${t(r)}$ pour $x=${$}$`,o=`Pour $x=${$}$ : <br>`,o+=`$\\begin{aligned}${e}x^2-${i}x${t(r)}
          &=${e}\\times ${c($)}^2-${i}\\times ${c($)}${t(r)}\\\\
          &=${e}\\times ${$**2}${t(-i*$)}${t(r)}\\\\
          &=${m(`${e*$**2-i*$+r}`)}\\end{aligned}$`,u(this,l,e*$**2-i*$+r);break;case 9:if(e=a(2,10),$=a(2,10),s=a(2,10,$),this.version.startsWith("4L")){const n=x([-1,1],3);$*=n[0],e*=n[1],s*=n[2]}h=`Calculer $${e}xy+x+y$ pour $x=${$}$ et $y=${s}$`,o=`Pour $x=${$}$ et $y=${s}$ : <br>`,o+=`$\\begin{aligned}${e}xy+x+y&=${e}\\times ${c($)}\\times ${c(s)}${t($)}${t(s)}\\\\
          &=${e*$*s}${t($)}${t(s)}\\\\
          &=${m(`${e*$*s+$+s}`)}\\end{aligned}$`,u(this,l,e*$*s+$+s);break;case 10:default:if(e=a(2,10),$=a(2,10),i=a(1,10),s=a(2,10,$),r=a(2,10),g=a(1,Math.min(10,r*s)),this.version.startsWith("4L")){const n=x([-1,1,-1,1,-1,1],6);$*=n[0],e*=n[2],r*=n[3],s*=n[1],i*=n[4],g*=n[5]}h=`Calculer $(${e}x${t(i)})(${r}y${t(-g)})$ pour $x=${$}$ et $y=${s}$`,o=`Pour $x=${$}$ et $y=${s}$ : <br>`,o+=`$\\begin{aligned}(${e}x${t(i)})(${r}y${t(-g)})
          &=(${e}\\times ${c($)}${t(i)})(${r}\\times ${c(s)}${t(-g)})\\\\
          &=(${e*$}${t(i)})(${r*s}${t(-g)})\\\\
          &=${e*$+i}\\times ${c(r*s-g)}\\\\
          &=${m(`${y((e*$+i)*(r*s-g),0)}`)}\\end{aligned}$`,u(this,l,(e*$+i)*(r*s-g));break}h+=this.interactif?" : "+P(this,l):".",this.questionJamaisPosee(l,o)&&(this.listeQuestions[l]=h,this.listeCorrections[l]=o,l++),d++}L(this)}}export{Z as dateDeModificationImportante,e$ as default,O as interactifReady,X as interactifType,$$ as refs,K as titre,_ as uuid};
