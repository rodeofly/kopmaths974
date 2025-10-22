import{m as w,a as v,F as e,r as f,v as O,z as C,f as u}from"./embellissements-BYV7mIDn.js";import L from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const Y="10/09/2025",Z="7f52a",_={"fr-fr":["1A-F1-6"],"fr-ch":[]},ee=!0,re="qcm",te="true",ne="qcmMono",ie="Déterminer l'image d'une fraction par une fonction polynôme du second degré";class oe extends L{versionOriginale=()=>{this.enonce=`On considère la fonction  $f$ définie sur $\\mathbb{R}$ par $f(x)=2x^2+5x+8$<br>
    L'image de $-\\dfrac{5}{4}$ par cette fonction est : `,this.correction=`On remplace $x$ par $-\\dfrac{5}{4}$ dans l'expression de $f$ :<br>
     
    $\\begin{aligned}
    f\\left(-\\dfrac{5}{4}\\right)&=2\\times \\left(-\\dfrac{5}{4}\\right)^2+5\\times \\left(-\\dfrac{5}{4}\\right)+8\\\\
    &=2\\times \\dfrac{25}{16}-\\dfrac{25}{4}+8\\\\
    &=\\dfrac{25}{8}-\\dfrac{50}{8}+\\dfrac{64}{8}\\\\
    &=\\dfrac{25-50+64}{8}\\\\
    &=\\dfrac{39}{8}
    \\end{aligned}$<br>
    
    
    L'image de $-\\dfrac{5}{4}$  par la  fonction  $f$ est : $${w("\\dfrac{39}{8}")}$.`,this.reponses=["$\\dfrac{39}{8}$","$-\\dfrac{11}{8}$","$\\dfrac{25}{8}$","$\\dfrac{89}{16}$"]};versionAleatoire=()=>{const r=v([[1,3],[1,6],[2,3],[3,4],[3,5],[4,5],[5,3],[4,3],[5,4],[6,5],[5,3],[2,5]]),t=new e(r[0],r[1]).produitFraction(new e(-1,1)),n=f(-2,2,0),s=f(-5,5,[-1,0,1]),$=f(-2,2,0),p=new e(r[0]*r[0],r[1]*r[1]),c=p.produitFraction(new e(n,1)),i=t.produitFraction(new e(s,1)),a=new e($,1),m=c.sommeFraction(i).sommeFraction(a),l=(g,b)=>{const h=(S,d)=>d===0?S:h(d,S%d);return Math.abs(g*b)/h(g,b)},o=l(l(c.den,i.den),a.den),A=new e(c.num*(o/c.den),o),F=new e(i.num*(o/i.den),o),x=new e($*(o/a.den),o),D=m.oppose(),E=new e(t.num*s,t.den*s),q=c.sommeFraction(E).sommeFraction(a),X=new e(-r[0]*r[0],r[1]*r[1]).produitFraction(new e(n,1)).sommeFraction(i).sommeFraction(a);this.enonce=`On considère la fonction  $f$ définie sur $\\mathbb{R}$ par $f(x)=${O(n)}x^2${C(s)}x${u($)}$.<br>
    L'image de $${t.texFSD}$ par cette fonction est : `,this.correction=`On remplace $x$ par $${t.texFSD}$ dans l'expression de $f$ :<br>
     
    $\\begin{aligned}
    f\\left(${t.texFSD}\\right)&=${n===1?"":`${n===-1?"-":`${n}\\times`}`} \\left(${t.texFSD}\\right)^2${C(s)}\\times \\left(${t.texFSD}\\right)${u($)}\\\\
    &=${n===1?"":`${n===-1?"-":`${n}\\times`}`}${p.texFSD}${i.ecritureAlgebrique}${u($)}\\\\
    &=${c.texFSD}${i.ecritureAlgebrique}${a.ecritureAlgebrique}\\\\
    &=\\dfrac{${A.num}${F.num>=0?"+":""}${F.num}${x.num>=0?"+":""}${x.num}}{${o}}\\\\
    &=${m.texFractionSimplifiee}
    \\end{aligned}$<br>
    
    L'image de $${t.texFSD}$ par la fonction $f$ est : $${w(m.texFractionSimplifiee)}$.`,this.reponses=[`$${m.texFractionSimplifiee}$`,`$${D.texFractionSimplifiee}$`,`$${q.texFractionSimplifiee}$`,`$${X.texFractionSimplifiee}$`]};constructor(){super(),this.versionAleatoire()}}export{te as amcReady,ne as amcType,Y as dateDePublication,oe as default,ee as interactifReady,re as interactifType,_ as refs,ie as titre,Z as uuid};
