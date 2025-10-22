import m from"decimal.js";import{K as d}from"./Exercice-DtXhjCyI.js";import{a as $,r as l,m as u,e as i}from"./embellissements-BYV7mIDn.js";import{p as b,a as h}from"./Personne-DRrbQFAY.js";import f from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const w="Résoudre un problème de partage*",K=!0,j="mathLive",k="03/07/2025",I="6c977",F={"fr-fr":["can6C52","6N2K-flash3"],"fr-ch":[]};class M extends f{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=d.clavierNumbers}nouvelleVersion(){const c=[["au quart du",4],[" au tiers du",3],["à la moitié du",2],["au cinquième du",5],["à la moitié du",2]],p=[["au double du",2],["au triple du",3],["au triple du ",3],["quatre fois le ",4],["cinq fois le ",5]];let e,s,o,n,t,a,r;switch($([1,2])){case 1:a=$([!0,!1]),t=h(),e=l(2,5),s=$([10,20,25]),o=$([10,20,25])/100,this.reponse=a?`${new m(e).div(o)}`:`${new m(e).mul(100).div(s)}`,this.question=`  Pour son anniversaire, ${t} a acheté $${e}$ litres de jus de fruits.<br>
         Les verres de  ${t} contiennent ${a?`$${i(o,2,!0)}$ litre`:`$${i(s,0,!0)}$ centilitres`}.<br>

            Combien de verres de jus de fruits ${t} pourra-t-elle servir ? `,this.correction=`Dans un litre, il y a ${a?`$${i(1/o,0,!0)}\\times ${i(o,2,!0)}$ litre `:`$${i(100/s,0,!0)}\\times ${i(s,0,!0)}$ centilitres`}.<br>
        Dans $${e}$ litres, il y a donc ${a?`$${i(e/o,0,!0)}\\times ${i(o,2,!0)}$ litre `:`$${i(100*e/s,0,!0)}\\times ${i(s,0,!0)}$ centilitres`}.<br>
        Elle pourra donc servir ${a?`$${u(i(e/o,0,!0))}$`:`$${u(i(100*e/s,0,!0))}$`} verres.`,this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:" verres"}),this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ verres";break;case 2:$([!0,!1])?(r=$(c),t=b(),e=l(2,10),n=e*Number(r[1])+e,this.reponse=e,this.question=`  Le nombre de billes de ${t} est égal ${r[0]}  nombre
                de billes de sa sœur.<br>
                 À eux deux, ils ont $${n}$ billes.<br>
                Combien de billes a ${t} ? `,this.correction=`Il faut partager le nombre de billes en $${Number(r[1])+1}$.<br>
        $${n}\\div ${Number(r[1])+1}=${n/(Number(r[1])+1)}$.<br>
        ${t} aura donc $${u(e)}$ billes (sa sœur en aura $${e}\\times ${Number(r[1])}$, soit $${e*Number(r[1])}$).
        `):(r=$(p),t=b(),e=l(2,10),n=e*Number(r[1])+e,this.reponse=e*Number(r[1]),this.question=`  Le nombre de billes de ${t} est égal ${r[0]}  nombre
                  de billes de sa sœur.<br>
                   À eux deux, ils ont $${n}$ billes.<br>
                  Combien de billes a ${t} ? `,this.correction=`Il faut partager le nombre de billes en $${Number(r[1])+1}$.<br>
          $${n}\\div ${Number(r[1])+1}=${n/(Number(r[1])+1)}$.<br>
          ${t} aura donc $${e}\\times ${r[1]}=${u(this.reponse)}$ billes (sa sœur en aura $${e}$).
          `),this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:" billes"}),this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ billes";break}}}export{k as dateDePublication,M as default,K as interactifReady,j as interactifType,F as refs,w as titre,I as uuid};
