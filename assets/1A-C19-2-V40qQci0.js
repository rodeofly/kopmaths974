import{F as o,a5 as m,e as u,m as $,a as x,r as v}from"./embellissements-BYV7mIDn.js";import E from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const D="2ab24",N={"fr-fr":["1A-C19-2"],"fr-ch":["10QCM-8"]},P=!0,k="qcm",z="true",B="qcmMono",G="Résoudre un problème avec des fractions (2)",H="05/08/2025";class J extends E{versionOriginale=()=>{const r=new o(1,3),e=new o(1,4),t=r.produitFraction(e),i=r.sommeFraction(t),c=i.entierMoinsFraction(1),n=m(r.den,t.den),a=new o(r.num*(n/r.den),n),s=new o(t.num*(n/t.den),n);this.enonce=`Une personne doit rembourser un crédit de $${u(1500,0)}$ en trois mois.<br>
        En janvier, elle rembourse $${r.texFraction}$ du crédit et en février elle rembourse $${e.texFraction}$ de ce qu'elle a remboursé en janvier.<br>
        En mars elle doit rembourser :`,this.correction=`
       
        En février, elle rembourse $${e.texFraction}$ de ce qu'elle a remboursé en janvier.<br>
        Elle rembourse donc $${e.texFraction} \\times ${r.texFraction} = ${t.texFractionSimplifiee}$ du crédit total.<br>
        
        
        Au total, en janvier et février, elle aura remboursé : $${r.texFraction} + ${t.texFraction}=${a.texFraction} + ${s.texFraction} = ${i.texFractionSimplifiee}$ du crédit. <br>
        
       
        Il lui restera à rembourser en mars : $1 - ${i.texFractionSimplifiee} = ${$(c.texFractionSimplifiee)}$ du crédit.
        `,this.reponses=[`$${c.texFractionSimplifiee}$ du crédit.`,"$\\dfrac{1}{2}$ du crédit.","$\\dfrac{5}{12}$ du crédit.","$\\dfrac{1}{4}$ du crédit."]};versionAleatoire=()=>{const r=x([[1,5,1,4],[1,5,1,3],[1,5,2,3],[2,5,1,4],[2,5,1,6],[3,5,1,6],[3,5,1,8],[4,5,1,10],[1,3,1,4],[1,4,1,3],[2,3,1,6],[2,3,1,8],[3,4,1,6],[1,6,1,4],[1,6,1,3],[5,6,1,10],[2,7,1,4],[3,7,1,4],[4,7,1,6],[1,7,1,3],[1,8,1,3],[3,8,1,4],[5,8,1,6],[7,8,1,10],[2,9,1,4],[4,9,1,5],[5,9,1,6],[7,9,1,8],[3,10,1,4],[7,10,1,4],[8,10,1,9]]),e=new o(r[0],r[1]),t=new o(r[2],r[3]),i=e.produitFraction(t),c=e.sommeFraction(i),n=c.entierMoinsFraction(1),a=v(12,25)*100,s=m(e.den,i.den),l=new o(e.num*(s/e.den),s),p=new o(i.num*(s/i.den),s);this.enonce=`Une personne doit rembourser un crédit de $${u(a,0)}$ en trois mois.<br>
        En janvier, elle rembourse $${e.texFraction}$ du crédit et en février elle rembourse $${t.texFraction}$ de ce qu'elle a remboursé en janvier.<br>
        En mars elle doit rembourser :`,this.correction=`
       
        En février, elle rembourse $${t.texFraction}$ de ce qu'elle a remboursé en janvier.<br>
        Elle rembourse donc $${t.texFraction} \\times ${e.texFraction} = ${i.texFractionSimplifiee}$ du crédit total.<br>
        
        
        Au total, en janvier et février, elle aura remboursé :  $${e.texFraction} + ${i.texFraction}=${l.texFraction} + ${p.texFraction} = ${c.texFractionSimplifiee}$ du crédit. <br>
        
       
        Il lui restera à rembourser en mars : $1 - ${c.texFractionSimplifiee} = ${$(n.texFractionSimplifiee)}$ du crédit.
        `;const f=t,F=e.sommeFraction(t),b=i;this.reponses=[`$${n.texFractionSimplifiee}$ du crédit.`,`$${f.texFractionSimplifiee}$ du crédit.`,`$${F.texFractionSimplifiee}$ du crédit.`,`$${b.texFractionSimplifiee}$ du crédit.`]};constructor(){super(),this.versionOriginale(),this.spacing=1.5,this.spacingCorr=2.5}}export{z as amcReady,B as amcType,H as dateDePublication,J as default,P as interactifReady,k as interactifType,N as refs,G as titre,D as uuid};
