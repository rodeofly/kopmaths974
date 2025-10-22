import s from"./ExerciceSimple-CWWOU0FG.js";import{r as o,a as n,e as i,a7 as r,m as a}from"./embellissements-BYV7mIDn.js";import{K as c}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const C="Calculer un prix après une réduction",E=!0,L="mathLive",T="14a1a",q={"fr-fr":[""],"fr-ch":["NR"]};class O extends s{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierDeBase,this.canOfficielle=!0,this.optionsChampTexte={texteAvant:"<br>",texteApres:"euros."}}nouvelleVersion(){const e=this.canOfficielle?150:o(9,15)*10,t=this.canOfficielle?20:n([20,30,40]);this.question=`Une veste coûte $${e}$ €.<br>Son prix baisse de $${t}\\,\\%$ pendant les soldes.<br>
             Le nouveau prix est de `,this.optionsChampTexte={texteApres:"€"},this.correction=`
             Le nouveau prix est de  $ ${i(e-t*e/100)} $ €.`,this.correction=` 
        On calcule d'abord le montant de la réduction. <br>
        Pour calculer $${t}\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
        par $10$ :<br> $10\\,\\%$  de $${e}$ est égal à $${e}\\div 10=${i(e/10,0)}$.<br>
        $${t}\\,\\%$  de $${e}$ est donc égal à $ ${i(e/10,0)}\\times ${i(t/10,0)}=${i(e*t/100,2)}$.<br>
                     La réduction est donc de : $${r(t*e/100)}$ €.<br>
             Le nouveau prix est de  $${e}-${i(t*e/100)}= ${a(r(e-t*e/100))}$  €.`,this.reponse=e-t*e/100,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ euros",this.interactif||(this.question+=" $\\ldots$ euros.")}}export{O as default,E as interactifReady,L as interactifType,q as refs,C as titre,T as uuid};
