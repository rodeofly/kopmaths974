import{g as n,l as r}from"./embellissements-BYV7mIDn.js";import{E as o}from"./Exercice-DtXhjCyI.js";import a from"./3F20-Bmcotcth.js";import p from"./3F20-1-CnyJUAx9.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";import"./reperes-WwrVcExd.js";import"./questionMathLive-DdRvWqlN.js";import"./tableauMathlive-xx-nDjq0.js";import"./canStore-DaSrd7sp.js";import"./generalStore-C3E9FHtR.js";import"./comparisonFunctions-B45ZZ3C7.js";import"./compute-engine.min.umd-BwAhpA7x.js";import"./Hms-u2AUyU1C.js";import"./ListeDeroulanteElement-CXmzV-cr.js";import"./sizeTools-DfTC1Dgv.js";import"./time-DMC-jnVL.js";import"./gestionInteractif-DujZpSu8.js";import"./AjouteTableauMathlive-Bz24QHd3.js";const D="Fonctions affines et/ou linéaires",H="mathLive",P=!0,j=!0,k="AMCHybride",z="21/05/2023",B={"fr-fr":["3F20-2"],"fr-ch":["10FA5-14","11FA8-8"]},G="17c65";class J extends o{lycee;constructor(){super(),this.lycee=!1,this.comment="L'exercice propose de panacher les questions de 3F20 et 3F20-1.",this.sup=1,this.nbQuestions=8,this.sup2="11",this.spacingCorr=3,this.sup3="9",this.sup4="3",this.besoinFormulaireNumerique=["Coefficient : ",3,`1: Coefficient entier
2: Coefficient rationnel
3: Mélange`],this.besoinFormulaire2Texte=["Type de questions pour fonctions affines",`Nombres séparés par des tirets :
1: Image par expression
2: Image par valeurs
3: Image par graphique
4: Antécédent par expression
5: Antécédent par valeurs
6: Antécédent par graphique
7: Expression par valeurs
8: Expression par graphique
9: Expression par graphique fonctions affines uniquement (formule des accroissements)
10: Expression par valeurs fonctions affines uniquement (formule des accroissements)
11: Mélange`],this.besoinFormulaire3Texte=["Type de questions pour fonctions linéaires",`Nombres séparés par des tirets :
1: Image par expression
2: Image par valeurs
3: Image par graphique
4: Antécédent par expression
5: Antécédent par valeurs
6: Antécédent par graphique
7: Expression par valeurs
8: Expression par graphique
9: Mélange`],this.besoinFormulaire4Texte=["Type de fonctions",`Nombres séparés par des tirets :
1: Linéaire
2: Affine
3: Mélange`]}nouvelleVersion(){const i=new a,s=new p;s.interactif=this.interactif,s.nbQuestions=this.nbQuestions,s.lycee=this.lycee,s.sup=this.sup,s.sup2=this.sup2,s.numeroExercice=this.numeroExercice,s.nouvelleVersion(),i.interactif=this.interactif,i.nbQuestions=this.nbQuestions,i.lycee=this.lycee,i.sup=this.sup,i.sup2=this.sup3,i.numeroExercice=this.numeroExercice,i.nouvelleVersion(),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const t=n({saisie:this.sup4,min:1,max:2,defaut:3,melange:3,listeOfCase:["linéaire","affine"],nbQuestions:this.nbQuestions});for(let e=0;e<this.nbQuestions;e++)t[e]==="affine"?(this.listeQuestions[e]=s.listeQuestions[e],this.listeCorrections[e]=s.listeCorrections[e],this.autoCorrection.push(s.autoCorrection[e])):(this.listeQuestions[e]=i.listeQuestions[e],this.listeCorrections[e]=i.listeCorrections[e],this.autoCorrection.push(i.autoCorrection[e]));r(this)}}export{j as amcReady,k as amcType,z as dateDePublication,J as default,P as interactifReady,H as interactifType,B as refs,D as titre,G as uuid};
