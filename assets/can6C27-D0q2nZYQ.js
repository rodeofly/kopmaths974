import{c as i}from"./style-CcGLZIPY.js";import{K as f}from"./Exercice-DtXhjCyI.js";import{a as c,r as s,m as a,e as d}from"./embellissements-BYV7mIDn.js";import{a as h}from"./Personne-DRrbQFAY.js";import l from"decimal.js";import x from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const J="Résoudre un problème de rendu de monnaie",K=!0,M="mathLive",P="22/08/2022",j="21/10/2021",z="02170",F={"fr-fr":["can6C27","6N2A-flash4"],"fr-ch":["NR"]};class I extends x{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=f.clavierNumbers}nouvelleVersion(){const b=[["pains au chocolat"," un pain au chocolat"],["chocolatines","une chocolatine"],["pains aux raisins","un pain aux raisins"],["cookies","un cookie"],["brioches","une brioche"]];let e,m,r,n,u,p,o,$,t;switch(c([1,2,3,4])){case 1:e=s(1,3)*10,r=s(1,4),m=e+2*r,this.reponse=50-e,this.question=`Un livre coûte $${i(m)}$ €. Je donne un billet de $50$  € et $${r}$ ${r>1?"pièces":"pièce"} de $2$  €. <br>

        Combien me rend-on ?`,this.correction=`On doit me rendre $${50+2*r}-${m}=${a(this.reponse)}$ €.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"}),this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €";break;case 2:e=s(1,6)+s(1,9)/10,this.reponse=10-e,this.question=`Chez le boulanger, je dois payer  $${i(e)}$ €. <br>
        Je donne un billet de $10$  €. <br>

Combien me rend-on ?`,this.correction=`On doit me rendre $10-${d(e)}=${a(d(10-e))}$ €.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"}),this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €";break;case 3:e=s(2,6),u=c(b),p=u[0],$=c([10,20]),n=h(),o=new l(c([9,11,12,13,14,15,16])).div(10),this.reponse=new l(o).mul(e).mul(-1).add($),this.question=`À la boulangerie, ${n} achète $${e}$ ${p} à $${i(o)}$ € l'unité.<br>
   Elle paie avec un billet de $${$}$ €.<br>

   Combien doit-on lui rendre ?`,this.correction=`${n} achète $${e}$ ${p} à $${i(o)}$ € l'unité.<br>
  Le coût est donc $${e}\\times ${i(o)} =${i(e*Number(o))}$ €.<br>
  On doit lui rendre : $${$}-${i(e*Number(o))}=${a(i(Number(this.reponse)))}$ €.
 `,this.interactif&&(this.optionsChampTexte={texteApres:" €"}),this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €";break;case 4:e=s(5,9),t=s(3,6),n=h(),this.reponse=t,e*t<35?(this.question=`${n} a acheté des mangas coûtant $${e}$ € chacun. Elle a donné $40$ € au vendeur
            qui lui a rendu $${40-e*t}$ €.<br>

            Combien de mangas ${n} a-t-elle achetés ?  `,this.correction=`On lui a rendu $${40-e*t}$ €, donc les mangas ont coûté $(40-${40-e*t})$ €,  soit $${e*t}$ €.<br>
         Le prix d'un manga est  $${e}$ €, donc  le nombre de  mangas est  donné par $${e*t}\\div ${e}=${a(t)}$.`):(this.question=`${n} a acheté des mangas coûtant $${e}$ € chacun. Elle a donné $60$ € au vendeur
              qui lui a rendu $${60-e*t}$ €.<br>

              Combien de mangas ${n} a-t-elle achetés ?  `,this.correction=`On lui a rendu $${60-e*t}$ €, donc les mangas ont coûté $(60-${60-e*t})$ €, soit $${e*t}$ € .<br>
          Le prix d'un manga est  $${e}$ €, donc  le nombre de  mangas est  donné par $${e*t}\\div ${e}=${a(t)}$.`),this.interactif&&(this.optionsChampTexte={texteApres:" mangas"}),this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ mangas";break}}}export{P as dateDeModifImportante,j as dateDePublication,I as default,K as interactifReady,M as interactifType,F as refs,J as titre,z as uuid};
