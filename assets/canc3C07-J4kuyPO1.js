import{K as b}from"./Exercice-DtXhjCyI.js";import{a as n,r as u}from"./embellissements-BYV7mIDn.js";import{a as p,p as c}from"./Personne-DRrbQFAY.js";import q from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const D='Résoudre un problème avec "de plus", "de moins"',M=!0,P="mathLive",K=!0,L="AMCNum",N="25/07/2022",O="02561",w={"fr-fr":["canc3C07"],"fr-ch":["PR-8"]};class F extends q{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=b.clavierNumbers}nouvelleVersion(){const m=[["biscuits"],["billes"],["bonbons"],["ballons"],["vis"],["clous"],["bandes dessinées"]],h=[["judo"],["tennis"],["tennis de table"],["musique"],["théâtre"],["danse"]];let d,e,$,i,t,s,l,r,a,o,f;switch(n([1,2,3])){case 1:d=n(["a","b"]),d==="a"&&(s=n([!0,!1]),i=c(),t=p(),e=u(12,20),$=u(2,8),n([!0,!1])?(l=e+$,r=e-$,this.reponse=s?r:l,n([!0,!1])?this.question=`${i} a $${e}$ ans. Il a $${$}$ ans ${s?"de plus":" de moins "}
                que ${t}. <br>

                Quel est l'âge de ${t} ?`:this.question=`${i} a $${$}$ ans ${s?"de plus":" de moins "}
                que ${t}. <br>
                
                Sachant qu'il a $${e}$ ans, quel est l'âge de ${t} ?`,this.correction=`${i} a $${$}$ ans ${s?"de plus":" de moins "} que ${t} donc ${t}  a $${$}$ années ${s?"de moins":" de plus "} que ${i}.<br>
                Il a donc  (${s?`$${e}-${$}$`:`$${e}+${$}$`}) ans, soit  ${s?`$${e-$}$`:`$${e+$}$`} ans. `,this.interactif&&(this.optionsChampTexte={texteApres:" ans"})):(l=e+$,r=e-$,this.reponse=s?l:r,n([!0,!1])?this.question=`${i} a $${e}$ ans. ${t} a $${$}$ ans ${s?"de plus":" de moins "}
                que ${i}. <br>

                Quel est l'âge de ${t} ?`:this.question=`${t} a $${$}$ ans ${s?"de plus":" de moins "}
                que ${i} qui a $${e}$ ans.  <br>
                Quel est l'âge de ${t} ?`,this.correction=`${i} a $${$}$ ans ${s?"de plus":" de moins "} que ${t}.
           Il a donc  (${s?`$${e}+${$}$`:`$${e}-${$}$`}) ans, soit  ${s?`$${e+$}$`:`$${e-$}$`} ans. `,this.interactif&&(this.optionsChampTexte={texteApres:" ans"}))),d==="b"&&(s=n([!0,!1]),i=c(),e=u(12,20),$=u(2,8),n([!0,!1])?(l=e+$,r=e-$,this.reponse=s?r:l,n([!0,!1])?this.question=`${i} a $${e}$ ans. Il a $${$}$ ans ${s?"de plus":" de moins "}
                  que sa sœur. <br>

                  Quel est l'âge de sa sœur ?`:this.question=`${i} a $${e}$ ans soit $${$}$ ans ${s?"de plus":" de moins "}
                  que sa sœur. <br>

                  Quel est l'âge de sa sœur ?`,this.correction=`${i} a $${$}$ ans ${s?"de plus":" de moins "} que sa sœur donc sa sœur a $${$}$ années ${s?"de moins":" de plus "} que son frère.<br>
                  Elle a donc  (${s?`$${e}-${$}$`:`$${e}+${$}$`}) ans, soit  ${s?`$${e-$}$`:`$${e+$}$`} ans. `):(l=e+$,r=e-$,this.reponse=s?l:r,n([!0,!1])?this.question=`${i} a $${e}$ ans. Sa sœur a $${$}$ ans ${s?"de plus":" de moins "}
                            que lui. <br>

                            Quel est l'âge de sa sœur ?`:this.question=`La sœur de ${i} a $${$}$ ans ${s?"de plus":" de moins "}
                            que lui. <br>Sachant que  ${i} a $${e}$ ans, quel est l'âge de sa sœur ?`,this.correction=`${i} a $${e}$ ans et sa sœur  a $${$}$ ans de ${s?"de plus":" de moins "}.<br>
                            Elle a donc  (${s?`$${e}+${$}$`:`$${e}-${$}$`}) ans, soit  ${s?`$${e+$}$`:`$${e-$}$`} ans. `),this.interactif&&(this.optionsChampTexte={texteApres:" ans"}));break;case 2:d=n(["a","b"]),d==="a"&&(s=n([!0,!1]),i=p(),t=c(),a=n(m),e=u(35,60),$=u(9,21,[10,20]),l=e+$,r=e-$,this.reponse=s?r:l,n([!0,!1])?this.question=`${i} a $${e}$ ${a}. Elle en  a $${$}$ ${s?"de plus":" de moins "}
                    que ${t}. <br>

                    Combien ${t} a-t-il de ${a} ?`:this.question=`${i} a $${$}$ ${a} ${s?"de plus":" de moins "} que ${t}. <br>
            
            Sachant que ${i} a $${e}$ ${a}, combien ${t} en a-t-il ?`,this.correction=`${i} a $${$}$ ${a} ${s?"de plus":" de moins "} que ${t} donc ${t}  a $${$}$ ${a} ${s?"de moins":" de plus "} que ${i}.<br>
                    Il a donc  (${s?`$${e}-${$}$`:`$${e}+${$}$`}) ${a}, soit  ${s?`$${e-$}$`:`$${e+$}$`} ${a}. `),d==="b"&&(s=n([!0,!1]),i=c(),t=p(),a=n(m),e=u(12,20),$=u(2,8),n([!0,!1])?(l=e+$,r=e-$,this.reponse=s?r:l,n([!0,!1])?this.question=`${i} a $${e}$ ${a}. Il a $${$}$ ${a} ${s?"de plus":" de moins "}
                que ${t}. <br>

                Combien ${t} a-t-il de ${a} ?`:this.question=`${i} a $${$}$ ${a} ${s?"de plus":" de moins "}
                que ${t}. <br>

                Sachant qu'il a $${e}$ ${a}, combien de ${a} possède ${t} ?`,this.correction=`${i} a $${$}$ ${a} ${s?"de plus":" de moins "} que ${t} donc ${t}  a $${$}$ ${a} ${s?"de moins":" de plus "} que ${i}.<br>
                Il en a donc  (${s?`$${e}-${$}$`:`$${e}+${$}$`}), soit  ${s?`$${e-$}$`:`$${e+$}$`}. `):(l=e+$,r=e-$,this.reponse=s?l:r,n([!0,!1])?this.question=`${i} a $${e}$ ${a}. ${t} a $${$}$ ${a} ${s?"de plus":" de moins "}
                que lui. <br>

                Combien ${t} a-t-il de ${a} ?`:this.question=`${t} a $${$}$ ${a} ${s?"de plus":" de moins "}
                que ${i} qui en a $${e}$.  <br>

                Combien ${t} a-t-il de ${a} ?`,this.correction=`${i} a $${$}$ ${a} ${s?"de plus":" de moins "} que ${t}.
           Il en a donc  (${s?`$${e}+${$}$`:`$${e}-${$}$`}), soit  ${s?`$${e+$}$`:`$${e-$}$`}. `)),this.interactif&&(this.optionsChampTexte={texteApres:` ${a}`});break;case 3:d=n(["a","b"]),d==="a"&&(s=n([!0,!1]),o=n([!0,!1]),i=p(),t=c(),f=n(h),e=u(35,60),$=u(9,21,[10,20]),l=e+$,r=e-$,this.reponse=s?l:r,this.question=`Dans un club de ${f}, il y a $${e}$ ${o?" garçons ":" filles"}. <br>
              Il y a $${$}$ ${o?" filles ":" garçons"} ${s?"de plus":" de moins "}
                      que de ${o?" garçons ":" filles"}. <br>

                      Combien y a-t-il de ${o?" filles":" garçons "} dans ce club ? `,this.correction=` Il y a $${$}$ ${o?" filles ":" garçons"} ${s?"de plus":" de moins "}
            que de ${o?" garçons ":" filles"}.<br>
                      Il y a donc  (${s?`$${e}+${$}$`:`$${e}-${$}$`}) ${o?" filles":" garçons"}, soit  ${s?`$${e+$}$`:`$${e-$}$`} ${o?" filles ":" garçons"}. `,this.interactif&&(this.optionsChampTexte={texteApres:` ${o?" filles":" garçons"}`})),d==="b"&&(s=n([!0,!1]),o=n([!0,!1]),i=p(),t=c(),f=n(h),e=u(35,60),$=u(9,21,[10,20]),l=e+$,r=e-$,this.reponse=s?r:l,this.question=`Dans un club de ${f}, il y a $${e}$ ${o?" filles ":" garçons"}.<br>
          
          Sachant qu'il y a $${$}$ ${o?" filles ":" garçons"} ${s?"de plus":" de moins "} que de ${o?" garçons ":" filles"}, combien y a-t-il de ${o?"garçons":"filles"} dans ce club ? `,this.correction=` Il y a $${$}$ ${o?" filles ":" garçons"} ${s?"de plus":" de moins "}
                      que de ${o?" garçons ":" filles"}, il y a donc  $${$}$ ${o?" garçons ":" filles"} ${s?"de moins":" de plus "}
                      que de ${o?" filles ":" garçons"}.<br>
                     Il y a (${s?`$${e}-${$}$`:`$${e}+${$}$`}) ${o?" garçons":" filles"}, soit  ${s?`$${e-$}$`:`$${e+$}$`} ${o?" garçons":" filles"} dans ce club.<br>
     `,this.interactif&&(this.optionsChampTexte={texteApres:` ${o?" garçons":" filles"}`}));break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{K as amcReady,L as amcType,N as dateDePublication,F as default,M as interactifReady,P as interactifType,w as refs,D as titre,O as uuid};
