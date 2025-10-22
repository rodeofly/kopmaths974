import{m as i,a as n,F as o}from"./embellissements-BYV7mIDn.js";import s from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const q="344f3",v={"fr-fr":["1A-C19-3"],"fr-ch":[]},y=!0,E="qcm",C="true",j="qcmMono",Q="Résoudre un problème de partage",R="23/09/2025";class w extends s{versionOriginale=()=>{this.enonce=`Deux amis, Alice et Louis, décident d'offrir un voyage d'anniversaire à leur ami Charles. <br>
    Ils organisent les dépenses de la façon suivante :<br>

$\\bullet$ Alice règle les billets de train ; <br>
$\\bullet$
Louis règle l'hébergement.<br>

Une fois le voyage terminé, ils souhaitent répartir équitablement toutes les dépenses entre eux deux, c'est-à-dire que chacun doit finalement payer la même somme.
<br>Les billets de train représentent $\\dfrac{1}{6}$ de la dépense totale et l'hébergement représente le reste.<br>  
Quelle fraction de la dépense totale Alice doit-elle donner à Louis pour que leurs contributions finales soient parfaitement équilibrées ?
 `,this.correction=`En notant $D$ la dépense totale, Alice a dépensé $\\dfrac{1}{6}D$ et Louis, $\\dfrac{5}{6}D$.<br>
Leur participation équilibrée doit être de $\\dfrac{1}{2}D$ chacun.<br>
Alice doit donc donner à Louis la somme de $\\dfrac{1}{2}D - \\dfrac{1}{6}D = \\dfrac{1}{3}D$.<br>
La fraction de la dépense totale que Alice doit donner à Louis est donc $${i("\\dfrac{1}{3}")}$.`,this.reponses=["$\\dfrac{1}{3}$","$\\dfrac{5}{6}$","$\\dfrac{2}{3}$","$\\dfrac{1}{12}$"]};versionAleatoire=()=>{const r=n([[1,9],[1,5],[1,4],[1,10],[1,7],[2,7],[3,7],[3,10],[2,5],[2,9]]),e=new o(r[0],r[1]),t=new o(1,2);this.enonce=`Deux amis, Alice et Louis, décident d'offrir un voyage d'anniversaire à leur ami Charles. <br>
    Ils organisent les dépenses de la façon suivante :<br>

$\\bullet$ Alice règle les billets de train ; <br>
$\\bullet$
Louis règle l'hébergement.<br>

Une fois le voyage terminé, ils souhaitent répartir équitablement toutes les dépenses entre eux deux, c'est-à-dire que chacun doit finalement payer la même somme.
<br>Les billets de train représentent $${e.texFraction}$ de la dépense totale et l'hébergement représente le reste.<br>  
Quelle fraction de la dépense totale Alice doit-elle donner à Louis pour que leurs contributions finales soient parfaitement équilibrées ?
 `,this.correction=`En notant $D$ la dépense totale, Alice a dépensé $${e.texFraction}D$ et Louis, $${e.oppose().ajouteEntier(1).texFraction}D$.<br>
Leur participation équilibrée doit être de $\\dfrac{1}{2}D$ chacun.<br>
Alice doit donc donner à Louis la somme de $\\dfrac{1}{2}D - ${e.texFraction}D = ${e.oppose().sommeFraction(t).texFraction}D$.<br>
La fraction de la dépense totale que Alice doit donner à Louis est donc $${i(`${e.oppose().sommeFraction(t).texFraction}`)}$.`,this.reponses=[`$${e.oppose().sommeFraction(t).texFraction}$`,`$${e.oppose().ajouteEntier(1).texFraction}$`,`$${e.oppose().ajouteEntier(1).sommeFraction(e.oppose()).texFraction}$`,`$${e.produitFraction(t).texFraction}$`]};constructor(){super(),this.versionAleatoire(),this.spacing=1.5}}export{C as amcReady,j as amcType,R as dateDePublication,w as default,y as interactifReady,E as interactifType,v as refs,Q as titre,q as uuid};
