import{K as y}from"./Exercice-DtXhjCyI.js";import{a,r as d}from"./embellissements-BYV7mIDn.js";import{a as h,p as x}from"./Personne-DRrbQFAY.js";import{c as s}from"./style-CcGLZIPY.js";import T from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const N='Résoudre un problème avec "de plus", "de moins"*',O=!0,F="mathLive",Q=!0,V="AMCNum",z="24/07/2022",B="080f9",G={"fr-fr":["canc3C08"],"fr-ch":["PR-12"]};class H extends T{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=y.clavierNumbers}nouvelleVersion(){const g=[["biscuits"],["billes"],["bonbons"],["ballons"],["vis"],["clous"],["bandes dessinées"]],C=[["judo"],["tennis"],["tennis de table"],["musique"],["théâtre"],["danse"]];let f,e,$,n,r,u,m,o,i,t,b,p,q,l,c;switch(a([1,2,3])){case 1:if(f=a(["a","b","c","d"]),f==="a"){for(n=d(4,7)*10,r=d(1,3)*10,u=n-r,m=u+n,this.reponse=u+n,o=h(),i=h();i===o;)i=h();a([!0,!1])?(this.question=` ${i} dit à ${o}  : « J'ai $${s(n)}$ € soit $${s(r)}$ € de plus que toi ».<br>
            
            `,this.question+="Combien d'argent en tout possèdent les deux filles ?"):(this.question=` ${i} a $${s(n)}$ €. Elle a  $${s(r)}$ € de plus que ${o} ».<br>
            
            `,this.question+="Combien d'argent en tout possèdent les deux filles ?"),this.correction=`${i} a $${s(n)}$ €.<br>${i}  a $${s(r)}$ € `,this.correction+=" de plus ",this.correction+=`que ${o} donc ${o} a $${s(r)}$ € `,this.correction+=" de moins ",this.correction+=`que ${i}. <br>${o} a donc : $${s(n)}-${s(r)}=${s(u)}$ €.`,this.correction+=`<br>$${s(n)}+${s(u)}= ${s(m)}$`,this.correction+=`<br>Les deux filles possèdent en tout : $${s(m)}$ €.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"})}if(f==="b"){for(n=d(4,7)*10,r=d(1,3)*10,u=n+r,m=u+n,this.reponse=u+n,o=h(),i=h();i===o;)i=h();a([!0,!1])?(this.question=` ${i} dit à ${o}  : « J'ai $${s(n)}$ € soit $${s(r)}$ € de moins que toi ».<br>
            
            `,this.question+="Combien d'argent en tout possèdent les deux filles ? "):(this.question=` ${i} a $${s(n)}$ €. Elle a $${s(r)}$ € de moins ${o}.<br>
            
            `,this.question+="Combien d'argent en tout possèdent les deux filles ? "),this.correction=`${i} a  $${s(n)}$ €.<br>${i}  a $${s(r)}$ € `,this.correction+=" de moins ",this.correction+=`que ${o} signifie que ${o} a $${s(r)}$ € `,this.correction+=" de plus ",this.correction+=`que ${i}. <br>${o} a donc : $${s(n)} + ${s(r)} = ${s(u)}$ €.`,this.correction+=`<br>$${s(n)} + ${s(u)}  = ${s(m)}$`,this.correction+=`<br>Les deux filles possèdent en tout : $${s(m)}$ €.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"})}if(f==="c"){for(n=d(4,7)*10,r=d(1,3)*10,u=n-r,m=u+n,this.reponse=u+n,o=h(),i=h();i===o;)i=h();a([!0,!1])?(this.question=` ${i} dit à ${o}  : « J'ai $${s(n)}$ € et tu as  $${s(r)}$ € de moins que moi ».<br>
            
            `,this.question+="Combien d'argent en tout possèdent les deux filles ? "):(this.question=` ${i} a $${s(n)}$ €. ${o} a $${s(r)}$ € de moins.<br>
            
            `,this.question+="Combien d'argent en tout possèdent les deux filles ? "),this.correction=`${i} a  $${s(n)}$ €.<br>${o}  a $${s(r)}$ € `,this.correction+=" de moins ",this.correction+=`que ${i}.`,this.correction+=` <br>${o} a donc : $${s(n)} -${s(r)} = ${s(u)}$ €.`,this.correction+=`<br>$${s(n)} + ${s(u)}  = ${s(m)}$`,this.correction+=`<br>Les deux filles possèdent en tout : $${s(m)}$ €.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"})}if(f==="d"){for(n=d(4,7)*10,r=d(1,3)*10,u=n+r,m=u+n,this.reponse=u+n,o=h(),i=h();i===o;)i=h();a([!0,!1])?(this.question=` ${i} dit à ${o}  : « J'ai $${s(n)}$ € et tu as  $${s(r)}$ € de plus que moi ».<br>
            
            `,this.question+="Combien d'argent en tout possèdent les deux filles ?"):(this.question=` ${i} a $${s(n)}$ €. ${o} a $${s(r)}$ € de plus.<br>
            
            `,this.question+="Combien d'argent en tout possèdent les deux filles ? "),this.correction=`${i} a $${s(n)}$ €.<br>${o}  a $${s(r)}$ € `,this.correction+=" de plus ",this.correction+=`que ${i}.  `,this.correction+=`  <br>${o} a donc : $${s(n)}+${s(r)}=${s(u)}$ €.`,this.correction+=`<br>$${s(n)}+${s(u)}= ${s(m)}$`,this.correction+=`<br>Les deux filles possèdent en tout : $${s(m)}$ €.`,this.interactif&&(this.optionsChampTexte={texteApres:" €"})}break;case 2:f=a(["a","b"]),f==="a"&&(t=a([!0,!1]),o=h(),i=x(),l=a(g),e=d(35,60),$=d(9,21,[10,20]),b=2*e-$,p=2*e+$,this.reponse=t?b:p,a([!0,!1])?this.question=`${o} a $${e}$ ${l}. Elle en  a $${$}$ ${t?"de plus":" de moins "}
                      que ${i}. <br>

                      Combien  en ont-ils ensemble ?`:this.question=`${o} a $${$}$ ${l} ${t?"de plus":" de moins "} que ${i}. <br>
            
            Sachant que ${o} a $${e}$ ${l}, combien en ont-ils ensemble  ?`,this.correction=`${o} a $${$}$ ${l} ${t?"de plus":" de moins "} que ${i} donc ${i}  a $${$}$ ${l} ${t?"de moins":" de plus "} que ${o}.<br>
                      Il a donc  (${t?`$${e}-${$}$`:`$${e}+${$}$`}) ${l}, soit  ${t?`$${e-$}$`:`$${e+$}$`} ${l}.<br>
                      Ensemble, ils en ont (${t?`$${e-$}+${e}$`:`$${e+$}+${e}$`}) soit ${t?`$${b}$`:`$${p}$`}.`),f==="b"&&(t=a([!0,!1]),o=x(),i=h(),l=a(g),e=d(12,20),$=d(2,8),a([!0,!1])?(b=2*e+$,p=2*e-$,this.reponse=t?p:b,a([!0,!1])?this.question=`${o} a $${e}$ ${l}. Il a $${$}$ ${l} ${t?"de plus":" de moins "}
                  que ${i}. <br>
                  Combien  en ont-ils ensemble ?`:this.question=`${o} a $${$}$ ${l} ${t?"de plus":" de moins "}
                  que ${i}. <br>

                  Sachant qu'il a $${e}$ ${l}, combien de ${l} ont-ils ensemble ?`,this.correction=`${o} a $${$}$ ${l} ${t?"de plus":" de moins "} que ${i} donc ${i}  a $${$}$ ${l} ${t?"de moins":" de plus "} que ${o}.<br>
                  Il en a donc  (${t?`$${e}-${$}$`:`$${e}+${$}$`}), soit  ${t?`$${e-$}$`:`$${e+$}$`}.<br>
                  Ensemble, ils ont donc (${t?`$${e-$}+${e}$`:`$${e+$}+${e}$`}), soit  ${t?`$${p}$`:`$${b}$`} ${l}.
                   `):(b=2*e+$,p=2*e-$,this.reponse=t?b:p,a([!0,!1])?this.question=`${o} a $${e}$ ${l}. ${i} a $${$}$ ${l} ${t?"de plus":" de moins "}
                  que lui. <br>

                  Combien  en ont-ils ensemble ?`:this.question=`${i} a $${$}$ ${l} ${t?"de plus":" de moins "}
                  que ${o} qui en a $${e}$.  <br>

                  Combien  de ${l} ont-ils ensemble ?`,this.correction=`${o} a $${$}$ ${l} ${t?"de plus":" de moins "} que ${i}.
             Il en a donc  (${t?`$${e}+${$}$`:`$${e}-${$}$`}), soit  ${t?`$${e+$}$`:`$${e-$}$`}. <br>
             Ensemble, ils ont donc (${t?`$${e+$}+${e}$`:`$${e-$}+${e}$`}), soit  ${t?`$${b}$`:`$${p}$`} ${l}.
              `)),this.interactif&&(this.optionsChampTexte={texteApres:` ${l}`});break;case 3:f=a(["a","b"]),f==="a"&&(t=a([!0,!1]),c=a([!0,!1]),o=h(),i=x(),q=a(C),e=d(35,60),$=d(9,21,[10,20]),b=2*e+$,p=2*e-$,this.reponse=t?b:p,this.question=`Dans un club de ${q}, il y a $${e}$ ${c?" garçons ":" filles"}. <br>
              Il y a $${$}$ ${c?" filles ":" garçons"} ${t?"de plus":" de moins "}
                      que de ${c?" garçons ":" filles"}. <br>

                      Combien y a-t-il d'adhérents dans ce club ? `,this.correction=` Il y a $${$}$ ${c?" filles ":" garçons"} ${t?"de plus":" de moins "}
            que de ${c?" garçons ":" filles"}.<br>
                      Il y a donc  (${t?`$${e}+${$}$`:`$${e}-${$}$`}) ${c?" filles":" garçons"}, soit  ${t?`$${e+$}$`:`$${e-$}$`} ${c?" filles ":" garçons"}. <br>
                      Dans ce club, il y a donc au total (${t?`$${e+$}+${e}$`:`$${e-$}+${e}$`}) soit ${t?`$${b}$`:`$${p}$`} adhérents.`,this.interactif&&(this.optionsChampTexte={texteApres:" adhérents"})),f==="b"&&(t=a([!0,!1]),c=a([!0,!1]),o=h(),i=x(),q=a(C),e=d(35,60),$=d(9,21,[10,20]),b=2*e+$,p=2*e-$,this.reponse=t?p:b,this.question=`Dans un club de ${q}, il y a $${e}$ ${c?" filles ":" garçons"}.<br>
          
          Sachant qu'il y a $${$}$ ${c?" filles ":" garçons"} ${t?"de plus":" de moins "} que de ${c?" garçons ":" filles"}, combien y a-t-il d'adhérents dans ce club ? `,this.correction=` Il y a $${$}$ ${c?" filles ":" garçons"} ${t?"de plus":" de moins "}
                      que de ${c?" garçons ":" filles"}, il y a donc  $${$}$ ${c?" garçons ":" filles"} ${t?"de moins":" de plus "}
                      que de ${c?" filles ":" garçons"}.<br>
                     Il y a (${t?`$${e}-${$}$`:`$${e}+${$}$`}) ${c?" garçons":" filles"}, soit  ${t?`$${e-$}$`:`$${e+$}$`} ${c?" garçons":" filles"} dans ce club.
                     <br>Dans ce club, il y a donc au total (${t?`$${e-$}+${e}$`:`$${e+$}+${e}$`}) soit ${t?`$${p}$`:`$${b}$`} adhérents.`,this.interactif&&(this.optionsChampTexte={texteApres:" adhérents"}));break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{Q as amcReady,V as amcType,z as dateDePublication,H as default,O as interactifReady,F as interactifType,G as refs,N as titre,B as uuid};
