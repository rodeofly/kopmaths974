import o from"decimal.js";import{c as n}from"./style-CcGLZIPY.js";import{K as y}from"./Exercice-DtXhjCyI.js";import{a as m,r as q,e as s,m as c}from"./embellissements-BYV7mIDn.js";import{p as w,a as k}from"./Personne-DRrbQFAY.js";import C from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"earcut";import"roughjs";const K='Résoudre un problème avec "de plus", "de moins"',F=!0,L="mathLive",S=!0,V="AMCNum",B="27/07/2022",G="95dd2",H={"fr-fr":["can6C35","6N2A-flash6"],"fr-ch":[]};class J extends C{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=y.clavierNumbers}nouvelleVersion(){let e,t,u,r,i,$,a,d,p,g,f,l,h,b;switch(m([1,1,1,2,3,3,3])){case 1:for(p=m(["a","b","c","d"]),$=m([!0,!1]),r=k(),i=k();i===r;)i=w();e=new o(q(81,119,[80,90,100,110])).div(10),t=new o(m([15,25,35,45,55])).div(10),u=new o(t).div(100),p==="a"?(a=new o(e).add(t),d=new o(e).sub(t),this.reponse=$?a:d,this.question=`${r} et ${i} sont allées acheter un déjeuner dans une sandwicherie.<br>
                ${r} a payé $${n(e)}$ € pour son déjeuner. ${i} a payé le sien $${n(t)}$ € ${$?"de plus":" de moins "}.<br>
                
                Combien ${i} a-t-elle payé son déjeuner ? `,this.correction=`${i} a payé son déjeuner $${n(t)}$ € ${$?"de plus":" de moins "} que celui de ${r}.<br>
        Elle l'a donc payé  (${$?`$${n(e)}+${n(t)}$`:`$${n(e)}-${n(t)}$`}) €, soit ${$?`$${c(n(a))}$`:`$${c(n(d))}$`} €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €"):p==="b"?(d=new o(e).add(t),a=new o(e).sub(t),this.reponse=$?a:d,this.question=`${r} et ${i} sont allées acheter un déjeuner dans une sandwicherie.<br>
                      ${r} a payé $${n(e)}$ € pour son déjeuner soit $${n(t)}$ € ${$?"de plus":" de moins "} que ${i}. <br>
                     
                      Combien ${i} a-t-elle payé son déjeuner ? `,this.correction=`${r} a payé son déjeuner $${n(t)}$ € ${$?"de plus":" de moins "} que celui de ${i}.<br>
              ${i} a donc payé son déjeuner $${n(t)}$ € ${$?"de moins":" de plus "}.  Elle l'a donc payé  (${$?`$${n(e)}-${n(t)}$`:`$${n(e)}+${n(t)}$`}) €, soit ${$?`$${c(n(a))}$`:`$${c(n(d))}$`} €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €"):p==="c"?(g=new o(e).add(t),f=new o(e).sub(t),d=new o(e).mul(2).add(t),a=new o(e).mul(2).sub(t),this.reponse=$?a:d,this.question=`${r} et ${i} sont allées acheter un déjeuner dans une sandwicherie.<br>
                      ${r} a payé $${n(e)}$ € pour son déjeuner soit $${n(t)}$ € ${$?"de plus":" de moins "}
                       que ${i}.<br>
                      
                      Combien ont-elles payé ensemble leur déjeuner ? `,this.correction=`${r} a payé son déjeuner $${n(t)}$ € ${$?"de plus":" de moins "}
          que celui de ${i}.<br>
              ${i} a donc payé son déjeuner $${n(t)}$ € ${$?"de moins":" de plus "}.
              Elle l'a donc payé  (${$?`$${n(e)}-${n(t)}$`:`$${n(e)}+${n(t)}$`}) €,
              soit ${$?`$${n(f)}$`:`$${n(g)}$`} €.<br>
              Ensemble, elles ont donc payé : (${$?`$${n(e)}+${n(f)}$`:`$${n(e)}+${n(g)}$`}) €,
              soit ${$?`$${n(a)}$`:`$${c(n(d))}$`} €. `,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €"):(g=new o(e).add(t),f=new o(e).sub(t),d=new o(e).add(g),a=new o(e).add(f),this.reponse=$?d:a,this.question=`${r} et ${i} sont allées acheter un déjeuner dans une sandwicherie.<br>
          ${r} a payé $${n(e)}$ € pour son déjeuner. ${i} a payé le sien $${n(t)}$ € ${$?"de plus":" de moins "}.<br>
          
          Combien ont-elles payé ensemble leur déjeuner ? `,this.correction=`${i} a payé son déjeuner $${n(t)}$ € ${$?"de plus":" de moins "} que celui de ${r}.<br>
          Elle l'a donc payé  (${$?`$${n(e)}+${n(t)}$`:`$${n(e)}-${n(t)}$`}) €, soit ${$?`$${n(g)}$`:`$${n(f)}$`} €. <br>
              Ensemble, elles ont donc payé : (${$?`$${n(e)}+${n(g)}$`:`$${n(e)}+${n(f)}$`}) €,
              soit ${$?`$${n(d)}$`:`$${n(a)}$`} €. `,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €"),this.interactif&&(this.optionsChampTexte={texteApres:" €"});break;case 2:for($=m([!0,!1]),r=w(),i=w();i===r;)i=w();e=new o(q(130,160)).div(100),t=q(2,15),u=new o(t).div(100),m([!0,!1])?(a=new o(e).add(u),d=new o(e).sub(u),this.reponse=$?d:a,this.question=`${r} mesure $${s(e,2,!0)}$ m. Il mesure $${t}$ cm ${$?"de plus":" de moins "}
              que ${i}. <br>

              Quelle est la taille de ${i} ?`,this.correction=`${r} mesure $${t}$ cm ${$?"de plus":" de moins "} que ${i} donc ${i} mesure $${t}$ cm ${$?"de moins":" de plus "} que ${r}.<br>
              Il mesure donc  (${$?`$${s(e,2,!0)}-${s(u,2,!0)}$`:`$${s(e,2,!0)}+${s(u,2,!0)}$`}) m, soit  ${$?`$${s(d,2,!0)}$`:`$${c(s(a,2,!0))}$`} m. `,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ m"):(a=new o(e).add(u),d=new o(e).sub(u),this.reponse=$?a:d,this.question=`${r} mesure $${s(e,2,!0)}$ m. ${i} mesure $${t}$ cm ${$?"de plus":" de moins "}
                    que ${r}. <br>
                    Quelle est la taille de ${i} ?`,this.correction=`${i} mesure $${t}$ cm ${$?"de plus":" de moins "} que ${r} donc ${i} mesure (${$?`$${s(e,2,!0)}+${s(u,2,!0)}$`:`$${s(e,2,!0)}-${s(u,2,!0)}$`}) m, soit  ${$?`$${s(a,2,!0)}$`:`$${c(s(d,2,!0))}$`} m. `,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ m"),this.interactif&&(this.optionsChampTexte={texteApres:" m"});break;case 3:for(p=m(["a","b","c","d"]),$=m([!0,!1]),l=m([!0,!1]),r=w(),i=w();i===r;)i=w();e=new o(q(1,5)*10+q(1,10)).div(10),t=q(1,9)*100,u=new o(t).div(1e3),p==="a"?(a=new o(e).add(u),d=new o(e).sub(u),this.reponse=$?d:a,this.question=`Chez le primeur, ${r} a acheté  $${s(e,1)}$ kg de ${l?"fruits":" légumes "}.<br>
            Il en a acheté $${t}$ g ${$?"de plus":" de moins "} que ${i}.<br>

            Quelle masse de ${l?"fruits":" légumes "} a acheté ${i} ?`,this.correction=`${r} a acheté $${t}$ g de ${l?"fruits":" légumes "}  ${$?"de plus":" de moins "} que ${i}, donc ${i} en a acheté $${t}$ g ${$?"de moins":" de plus "} que ${r}.<br>
            Or $${t}$ g $=${s(u,1)}$ kg. <br>
            ${i} a donc acheté $(${$?`${s(e,1)}-${s(u,1)}`:`${s(e,1)}+${s(u,1)}`})$ kg
            soit $${$?`${c(s(d,1))}`:`${c(s(a,1))}`}$ kg de ${l?"fruits":" légumes "}.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ kg"):p==="b"?(a=new o(e).add(u),d=new o(e).sub(u),this.reponse=$?a:d,this.question=`Chez le primeur, ${r} a acheté  $${s(e,1)}$ kg de ${l?"fruits":" légumes "}.<br>
          ${i} en a acheté $${t}$ g ${$?"de plus":" de moins "}.<br>

            Quelle masse de ${l?"fruits":" légumes "} a acheté ${i} ?`,this.correction=`$${t}$ g $=${s(u,1)}$ kg. <br>
          ${i} a acheté $${s(u,1)}$ kg de ${l?"fruits":" légumes "}  ${$?"de plus":" de moins "} que ${r},
          donc ${i} en a acheté  $(${$?`${s(e,1)}+${s(u,1)}`:`${s(e,1)}-${s(u,1)}`})$ kg
            soit $${$?`${c(s(a,1))}`:`${c(s(d,1))}`}$ kg de ${l?"fruits":" légumes "}.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ kg"):p==="c"?(h=new o(e).add(u),b=new o(e).sub(u),a=new o(h).add(e),d=new o(b).add(e),this.reponse=$?a:d,this.question=`Chez le primeur, ${r} a acheté  $${s(e,1)}$ kg de ${l?"fruits":" légumes "}.<br>
          ${i} en a acheté $${t}$ g ${$?"de plus":" de moins "}.<br>

            Quelle masse de ${l?"fruits":" légumes "} ont-ils acheté ensemble ?`,this.correction=`$${t}$ g $=${s(u,1)}$ kg. <br>
          ${i} a acheté $${s(u,1)}$ kg de ${l?"fruits":" légumes "}  ${$?"de plus":" de moins "} que ${r},
          donc ${i} en a acheté  $(${$?`${s(e,1)}+${s(u,1)}`:`${s(e,1)}-${s(u,1)}`})$ kg
            soit $${$?`${s(h,1)}`:`${s(b,1)}`}$ kg de ${l?"fruits":" légumes "}.<br>
            Ensemble, ils ont donc acheté :  $(${$?`${s(e,1)}+${s(h,1)}`:`${s(e,1)}+${s(b,1)}`})$ kg
            soit $${$?`${c(s(a,1))}`:`${c(s(d,1))}`}$ kg de ${l?"fruits":" légumes "}.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ kg"):(h=new o(e).add(u),b=new o(e).sub(u),a=new o(h).add(e),d=new o(b).add(e),this.reponse=$?d:a,this.question=`Chez le primeur, ${r} a acheté  $${s(e,1)}$ kg de ${l?"fruits":" légumes "}.<br>
          Il en a acheté $${t}$ g ${$?"de plus":" de moins "} que ${i}.<br>

          Quelle masse de ${l?"fruits":" légumes "} ont-ils acheté ensemble ?`,this.correction=`${r} a acheté $${t}$ g  ${l?"fruits":" légumes "} de ${$?"de plus":" de moins "} que ${i}, donc ${i} en a acheté $${t}$ g ${$?"de moins":" de plus "} que ${r}.<br>
            Or $${t}$ g $=${s(u,1)}$ kg. <br>
            ${i} a donc acheté $(${$?`${s(e,1)}-${s(u,1)}`:`${s(e,1)}+${s(u,1)}`})$ kg
            soit $${$?`${s(b,1)}`:`${s(h,1)}`}$ kg de ${l?"fruits":" légumes "}.<br>
            Ensemble, ils ont donc acheté :  $(${$?`${s(e,1)}+${s(b,1)}`:`${s(e,1)}+${s(h,1)}`})$ kg
            soit $${$?`${c(s(d,1))}`:`${c(s(a,1))}`}$ kg de ${l?"fruits":" légumes "}.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ kg"),this.interactif&&(this.optionsChampTexte={texteApres:" kg"});break}}}export{S as amcReady,V as amcType,B as dateDePublication,J as default,F as interactifReady,L as interactifType,H as refs,K as titre,G as uuid};
