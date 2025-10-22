import{K as h}from"./Exercice-DtXhjCyI.js";import{a as t,r as m}from"./embellissements-BYV7mIDn.js";import{p,a as b}from"./Personne-DRrbQFAY.js";import q from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const L='Résoudre un problème avec "fois plus", "fois moins"*',M=!0,S="mathLive",K=!0,N="AMCNum",w="23/07/2022",B="06268",I={"fr-fr":["canc3C10","auto6P3B-flash2"],"fr-ch":["PR-10"]};class O extends q{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=h.clavierNumbers}nouvelleVersion(){const d=[["biscuits"],["billes"],["bonbons"],["ballons"],["vis"],["clous"]],f=[["judo"],["tennis"],["tennis de table"],["musique"],["théâtre"],["danse"]];let $,s,i,c,n,e,r,l,o,u,a;switch(t([1,2,3])){case 1:e=t([!0,!1]),c=p(),n=b(),o=t(d),$=m(3,12),i=t([3,4,5,6]),s=$*i,t([!0,!1])?(r=$+s,l=$+s,this.reponse=e?r:l,this.question=`${c} a $${i}$ fois  ${e?" plus":" moins "}  de ${o}
              que ${n} qui en a ${e?`$${$}$`:` $${s}$`}. <br>
           Combien de ${o[0]} ont-ils ensemble ? `,this.correction=`${n}  a ${e?`$${$}$`:` $${s}$`}  ${o}. <br>
          ${c} en a $${i}$ fois  ${e?" plus":" moins "}, il en a donc
          ${e?`$${i}\\times ${$}$`:` $${s}\\div ${i}$ `}, soit ${e?`$${i*$}$`:` $${$}$`}.<br>
          Ensemble ils en ont ${e?`$${$}+${s}$`:` $${$}+ ${s}$ `}, soit ${e?`$${$+s}$`:` $${$+s}$ `}.
          `):(r=$+s,l=$+s,this.reponse=e?r:l,this.question=`${n} a ${e?`$${$}$`:` $${s}$ `}  ${o}. ${c} en a $${i}$ fois ${e?" plus":" moins"}. <br>
       Combien de ${o[0]} ont-ils ensemble ? `,this.correction=`${n}  a ${e?`$${$}$`:` $${s}$ `}  ${o}. <br>
       ${c} en a $${i}$ fois  ${e?" plus":" moins "}, il en a donc
       ${e?`$${i}\\times ${$}$`:` $${s}\\div ${i}$ `}, soit ${e?`$${i*$}$`:` $${$}$`}.<br>
       Ensemble ils en ont ${e?`$${$}+${s}$`:` $${$}+ ${s}$ `}, soit ${e?`$${$+s}$`:` $${$+s}$`}.
       `),this.interactif&&(this.optionsChampTexte={texteApres:` ${o}`});break;case 2:e=t([!0,!1]),c=p(),n=b(),o=t(d),$=m(3,12),i=t([3,4,5,6]),s=$*i,t([!0,!1])?(r=$+s,l=s+$,this.reponse=e?r:l,this.question=`${c} a ${e?`$${s}$`:` $${$}$ `} ${o}. Il en a $${i}$ fois
              ${e?" plus":" moins "}  que ${n}. <br>
               Combien de ${o[0]}  ont-ils ensemble ? `,this.correction=`Puisque   ${c} a ${e?`$${s}$`:` $${$}$ `} ${o} et qu'il en a $${i}$ fois
              ${e?" plus":" moins "}  que ${n}, ${n} en a donc $${i}$ fois ${e?" moins":" plus "}. <br>
              Elle en a donc ${e?`$${s}\\div ${i}$`:` $${i}\\times ${$}$ `}, soit ${e?`$${$}$`:` $${s}$ `} ${o}.<br>
              Ensemble, ils en ont donc : ${e?`$${$}+${s}$`:` $${s}+${$}$ `} soit $${$+s}$.`):(r=$+s,l=$+s,this.reponse=e?r:l,this.question=`${c} a  $${i}$ fois
              ${e?" plus":" moins "} de ${o} que ${n}. Sachant qu'il a ${e?`$${s}$`:` $${$}$`} ${o}, combien en ont-ils ensemble ? `,this.correction=`Puisque   ${c} a ${e?`$${s}$`:` $${$}$ `} ${o} et qu'il en a $${i}$ fois
              ${e?" plus":" moins "}  que ${n}, ${n} en a donc $${i}$ fois ${e?" moins":" plus"}. <br>
              Elle en a donc ${e?`$${s}\\div ${i}$`:` $${i}\\times ${$}$ `}, soit ${e?`$${$}$`:` $${s}$`} ${o}.<br>
              Ensemble, ils en ont donc : ${e?`$${$}+${s}$`:` $${s}+${$}$ `} soit $${$+s}$.`),this.interactif&&(this.optionsChampTexte={texteApres:` ${o}`});break;case 3:e=t([!0,!1]),a=t([!0,!1]),c=p(),n=b(),u=t(f),$=m(3,12),i=t([3,4,5,6]),s=$*i,t([!0,!1])?(r=$+s,l=$+s,this.reponse=e?r:l,this.question=`Dans un club de ${u}, il y a ${e?`$${$}$`:` $${s}$ `} ${a?" garçons ":" filles"} et
                  $${i}$ fois  ${e?" plus":" moins "} de ${a?" filles ":" garçons"}.<br>
                  Combien y a-t-il d'adhérents dans ce club ? `,this.correction=`Puisqu'il y a    ${e?`$${$}$`:` $${s}$ `} ${a?" garçons ":" filles"}
                  et $${i}$ fois  ${e?" plus":" moins "} de ${a?" filles ":" garçons"},
                  le nombre de ${a?" filles ":" garçons"} est donc :
                  ${e?`$${i}\\times ${$}$`:` $${s}\\div ${i}$ `}, soit ${e?`$${i*$}$`:` $${$}$`}.<br>
                  Le nombre total d'adhérents dans ce club est donc ${e?`$${i*$}+${$}$`:` $${$}+${s}$`} soit ${e?`$${$+s}$`:` $${$+s}$`}.`):(r=s+$,l=$+s,this.reponse=e?r:l,this.question=`Dans un club de ${u}, il y a $${i}$ fois  ${e?"plus":"moins"} de ${a?" filles":" garçons"} que de ${a?" garçons":" filles"}. <br>
                  Sachant qu'il y a ${e?`$${$}$`:` $${s}$ `} ${a?" garçons ":" filles"}, combien y a-t-il d'adhérents dans ce club ? `,this.correction=`Puisqu'il y a  $${i}$ fois  ${e?" plus":" moins "} de ${a?" filles ":" garçons"} que de ${a?" garçons ":" filles"},
                  le nombre de  ${a?" filles ":" garçons"} est : ${e?`$${i}\\times ${$}$`:` $${s}\\div ${i}$ `}, soit ${e?`$${i*$}$`:` $${$}$`}.<br>
                  Le nombre total d'adhérents dans ce club est donc ${e?`$${i*$}+${$}$`:` $${$}+${s}$ `} soit ${e?`$${$+s}$`:` $${$+s}$`}.`),this.interactif&&(this.optionsChampTexte={texteApres:" adhérents"});break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{K as amcReady,N as amcType,w as dateDePublication,O as default,M as interactifReady,S as interactifType,I as refs,L as titre,B as uuid};
