import{af as p,r as o,f as e,l as f}from"./embellissements-BYV7mIDn.js";import{E as m}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const A="Multiplications de deux entiers relatifs dans un tableau à double entrée",L="c8f4b",N={"fr-fr":["4C10-5"],"fr-ch":["10NO4-7"]};class O extends m{constructor(){super(),this.sup=!1,this.consigne="Calculer.",this.nbQuestions=1,this.nbQuestionsModifiable=!1}nouvelleVersion(){const n=p([-1,1],4);let t=o(2,9),s=o(2,9,t),l=o(2,9,[t,s]),$=o(2,9,[t,s,l]),i=o(2,9),r=o(2,9,i),a=o(2,9,[i,r]),c=o(2,9,[i,r,a]);t*=n[0],s*=n[1],l*=n[2],$*=n[3],i*=n[0],r*=n[1],a*=n[2],c*=n[3];const h=`$\\def\\arraystretch{1.5}\\begin{array}{|c|c|c|c|c|}
    \\hline
    \\times & ${e(t)} & ${e(s)} & ${e(l)} & ${e($)} \\\\
    \\hline
    ${e(i)} &  &  & &  \\\\
    \\hline
    ${e(r)} & & & & \\\\
    \\hline
    ${e(a)} & & & & \\\\
    \\hline
    ${e(c)} & & & & \\\\
    \\hline
    \\end{array}$`,u=`$\\def\\arraystretch{1.5}\\begin{array}{|c|c|c|c|c|}
    \\hline
    \\times & ${e(t)} & ${e(s)} & ${e(l)} & ${e($)} \\\\
    \\hline
    ${e(i)} & ${e(t*i)} & ${e(s*i)} & ${e(l*i)} & ${e($*i)} \\\\
    \\hline
    ${e(r)} & ${e(t*r)} & ${e(s*r)} & ${e(l*r)} & ${e($*r)} \\\\
    \\hline
    ${e(a)} & ${e(t*a)} & ${e(s*a)} & ${e(l*a)} & ${e($*a)} \\\\
    \\hline
    ${e(c)} & ${e(t*c)} & ${e(s*c)} & ${e(l*c)} & ${e($*c)} \\\\
    \\hline
    \\end{array}$`;this.listeQuestions.push(h),this.listeCorrections.push(u),f(this)}}export{O as default,N as refs,A as titre,L as uuid};
