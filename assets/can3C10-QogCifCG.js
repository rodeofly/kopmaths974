import{a as r,r as $,e as s}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="Encadrer avec des puissances de 10",v=!0,q="mathLive",L="3c064",O={"fr-fr":["can3C10"],"fr-ch":[]};class Q extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e;const t=r(["$a$","$b$"]);switch(r(["a","b","c","d","e"])){case"a":e=$(2,9)*10**4+$(1,9)*10**3+$(1,9)*10**2+$(1,9)*10+$(1,9),this.question=`L'encadrement de $${s(e)}$ par  deux puissances de $10$ d'exposants consécutifs est $10^a<${s(e)}<10^b$.<br>
  
        Quelle est la valeur de ${t} ?
  `,t==="$b$"?(this.correction=`Comme $10000<${s(e)}<100000$, alors :<br>
       $10^4<${s(e)}<10^5$. On en déduit que $b=5$.`,this.reponse=["5"]):(this.correction=`Comme $10000<${s(e)}<100000$, alors :<br>
           $10^4<${s(e)}<10^5$. On en déduit que $a=4$.`,this.reponse=["4"]);break;case"b":e=$(2,9)*10**5+$(1,9)*10**4+$(1,9)*10**3+$(1,9)*10**2+$(1,9)*10+$(1,9),this.question=`L'encadrement de $${s(e)}$ par  deux puissances de $10$ d'exposants consécutifs est $10^a<${s(e)}<10^b$.<br>
      
        Quelle est la valeur de ${t} ?
      `,t==="$b$"?(this.correction=`Comme $100000<${s(e)}<1000000$, alors :<br>
       $10^5<${s(e)}<10^6$. On en déduit $b=6$.`,this.reponse=["6"]):(this.correction=`Comme $100000<${s(e)}<1000000$, alors :<br>
           $10^5<${s(e)}<10^6$. On en déduit $a=5$.`,this.reponse=["5"]);break;case"c":e=$(2,9)*.001+$(1,9)*.01,this.question=`L'encadrement de $${s(e)}$ par  deux puissances de $10$ d'exposants consécutifs est $10^a<${s(e)}<10^b$.<br>
        
        Quelle est la valeur de ${t} ?
            `,t==="$b$"?(this.correction=`Comme $0,01<${s(e)}<0,1$, alors :<br>
       $10^{-2}<${s(e)}<10^{-1}$. On en déduit : $b=-1$.`,this.reponse=["-1"]):(this.correction=`Comme $0,01<${s(e)}<0,1$, alors :<br>
        $10^{-2}<${s(e)}<10^{-1}$. On en déduit : $a=-2$.`,this.reponse=["-2"]);break;case"d":e=$(2,9)*.001,this.question=`L'encadrement de $${s(e)}$ par  deux puissances de $10$ d'exposants consécutifs est $10^a<${s(e)}<10^b$.<br>
        
        Quelle est la valeur de ${t} ?
              `,t==="$a$"?(this.correction=`Comme $0,001<${s(e)}<0,01$, alors :<br>
       $10^{-3}<${s(e)}<10^{-2}$, donc $a=-3$.`,this.reponse=["-3"]):(this.correction=`Comme $0,001<${s(e)}<0,01$, alors :<br>
        $10^{-3}<${s(e)}<10^{-2}$, donc $b=-2$.`,this.reponse=["-2"]);break;case"e":e=$(2,9)*.01+$(1,5)*.1,this.question=`L'encadrement de $${s(e)}$ par  deux puissances de $10$ d'exposants consécutifs est $10^a<${s(e)}<10^b$.<br>
        
        Quelle est la valeur de ${t} ?
                `,t==="$a$"?(this.correction=`Comme $0,1<${s(e)}<1$, alors :<br>
         $10^{-1}<${s(e)}<10^{0}$, donc $a=-1$.`,this.reponse=["-1"]):(this.correction=`Comme $0,1<${s(e)}<1$, alors :<br>
           $10^{-1}<${s(e)}<10^{0}$, donc $b=0$.`,this.reponse=["0"]);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{Q as default,v as interactifReady,q as interactifType,O as refs,C as titre,L as uuid};
