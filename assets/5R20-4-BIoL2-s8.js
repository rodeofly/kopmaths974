import{r as l,a as E,d as t,_ as x,aq as p,l as L}from"./embellissements-BYV7mIDn.js";import{a as k,p as w}from"./Personne-DRrbQFAY.js";import{c as i,t as G}from"./style-CcGLZIPY.js";import{E as A}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const K="Résoudre un problème en utilisant une somme algébrique de relatifs",W="6667e",X={"fr-fr":["5R20-4"],"fr-ch":["9NO9-9"]};class Y extends A{constructor(){super(),this.nbQuestions=1,this.spacing=2,this.spacingCorr=2}nouvelleVersion(){for(let _=0,m,P,C=0;_<this.nbQuestions&&C<50;){let s,a;do s=l(10,30),a=l(10,30);while(s%5!==0||a%5!==0||a<=s);const $=l(5,10);let r,o;do r=l(2,5),o=l(2,5);while(r+o>=$);if(o<r&&l(0,1)===0){const e=o;o=r,r=e}const Q=[[k(),"Elle","elle"],[w(),"Il","il"]],g=E(Q),d=function(e,j,b){let u="";switch(j){case"gain":u=`(+${i(b)}~$€$)`;for(let c=1;c<e;c++)u+=`+(+${i(b)}~$€$)`;break;case"perte":u=`(-${i(b)}~$€$)`;for(let c=1;c<e;c++)u+=`+(-${i(b)}~$€$)`;break}return u},S=function(e){return e>=0};let f;S(t(($-r-o)*t(a/10))+t(r*t(s/10))-t(o*t(s/10)))?f=["Globalement, le montant des gains","est supérieur au montant des pertes",`${x("Le bilan est donc positif.")}`,"a gagné",i(t(($-r-o)*t(a/10))+t(r*t(s/10))-t(o*t(s/10)))]:f=["Globalement, le montant des gains","est inférieur au montant des pertes",`${x("Le bilan est donc négatif.")}`,"a perdu",i(-1*(t(($-r-o)*t(a/10))+t(r*t(s/10))-t(o*t(s/10))))];const n=[{nb_tot_lancers:$,nb_gains_unitaires:r,nb_pertes:o,nb_gains:$-r-o,perte:t(s/10),gain_unitaire:t(s/10),gain_multiple:t(a/10),enonce_1:"lancer une balle sur des quilles.",enonce_2:"- Si la balle touche plusieurs quilles, le joueur gagne ",enonce_3:"- Si la balle ne touche qu'une quille, le joueur gagne ",enonce_4:"- Si la balle ne touche aucune quille, le joueur perd ",enonce_5:"a lancé",enonce_6:"la balle",correction_1:"touché plusieurs quilles",correction_2:"touché qu'une seule quille",prenom:g[0],pronomMaj:g[1],pronomMin:g[2],bilan:f}],h=[];let q,M;for(let e=0;e<n.length;e++)q=0,M=0,h.push({enonce:`
Un jeu consiste à ${n[e].enonce_1}<br>
${n[0].enonce_2} $${i(n[0].gain_multiple)}~$€.<br>
${n[0].enonce_3} $${i(n[0].gain_unitaire)}~$€.<br>
${n[0].enonce_4} $${i(n[0].perte)}~$€.<br>
${n[e].prenom} ${n[e].enonce_5} $${n[e].nb_tot_lancers}$ fois ${n[e].enonce_6}.<br>
${n[e].pronomMaj} a perdu de l'argent $${n[e].nb_pertes}$ fois et a gagné $${n[e].nb_gains_unitaires}$ fois $${i(n[e].gain_unitaire)}~$€.<br> 
${p(q++)} A-t-${n[e].pronomMin} globalement gagné ou perdu de l'argent ?<br> 
${p(q++)} Combien a-t-${n[e].pronomMin} globalement gagné ou perdu ?
`,question:"",correction:`
${n[e].prenom} ${n[e].enonce_5} $${n[e].nb_tot_lancers}$ fois ${n[e].enonce_6}.<br>
Sur les $${n[e].nb_tot_lancers}$ lancers, on sait combien de fois ${n[e].pronomMin} a perdu de l'argent et combien de fois ${n[e].pronomMin} a gagné $${i(n[e].gain_unitaire)}~$€.<br>
Les autres lancers correspondent donc au nombre de fois où ${n[e].pronomMin} a ${n[e].correction_1} et gagné $${i(n[e].gain_multiple)}~$€.<br>
$${n[e].nb_tot_lancers}-${n[e].nb_pertes}-${n[e].nb_gains_unitaires} = ${n[e].nb_tot_lancers-n[e].nb_pertes-n[e].nb_gains_unitaires}$,
${n[e].pronomMin} a donc ${n[e].correction_1} $${n[e].nb_gains}$ fois.<br>
${G(`Gains lorsqu'${n[e].pronomMin} a ${n[e].correction_1} :`)}<br>
$${d(n[e].nb_gains,"gain",n[e].gain_multiple)} = ${n[e].nb_gains}\\times (+${i(n[e].gain_multiple)}~$€$) = (+${i(n[e].nb_gains*n[e].gain_multiple)}~$€)<br>
${G(`Gains lorsqu'${n[e].pronomMin} n'a ${n[e].correction_2} :`)}<br>
$${d(n[e].nb_gains_unitaires,"gain",n[e].gain_unitaire)} = ${n[e].nb_gains_unitaires}\\times (+${i(n[e].gain_unitaire)}~$€$) = (+${i(n[e].nb_gains_unitaires*n[e].gain_unitaire)}~$€)<br>
${G("Pertes :")}<br>
$${d(n[e].nb_pertes,"perte",n[e].perte)} = ${n[e].nb_pertes}\\times (-${i(n[e].perte)}~$€$) = (-${i(n[e].nb_pertes*n[e].perte)}~$€)<br>
${p(M++)} ${n[e].bilan[0]} ${n[e].bilan[1]}.<br> 
${n[e].bilan[2]}<br>
${p(M++)}
$(+${i(n[e].nb_gains*n[e].gain_multiple)}~$€$)+(+${i(n[e].nb_gains_unitaires*n[e].gain_unitaire)}~$€$)+(-${i(n[e].nb_pertes*n[e].perte)}~$€$) = (${i(n[e].nb_gains*n[e].gain_multiple+n[e].nb_gains_unitaires*n[e].gain_unitaire-n[e].nb_pertes*n[e].perte)}~$€$)$<br>
${x(`Globalement, ${n[e].prenom} ${n[e].bilan[3]} $${n[e].bilan[4]}~$€.`)}
`});m=`${h[0].enonce}`,P=`${h[0].correction}`,this.listeQuestions.indexOf(m)===-1&&(this.listeQuestions[_]=m,this.listeCorrections[_]=P,_++),C++}L(this)}}export{Y as default,X as refs,K as titre,W as uuid};
