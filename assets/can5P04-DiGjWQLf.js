import{a as $,r as t,e as n,d as s,_ as a}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const S="Calculer avec une proportion",P=!0,N="mathLive",L=!0,Q="AMCNum",k="eb6bc",x={"fr-fr":["can5P04"],"fr-ch":[]};class A extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,r;switch($(["a","b","c","d","e","f"])){case"a":e=t(3,7)*5,r=$(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$\\dfrac{1}{5}$ des élèves d'une classe de $${e}$ élèves a ${r}.<br>
        
              Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $\\dfrac{1}{5}$ de $${e}$ .<br>
        $\\dfrac{1}{5}\\times ${e}=\\dfrac{${e}}{5}=${n(e/5)}$.<br>
        $${n(e/5)}$ élèves ont ${r} .<br>
          Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${n(e/5)}=${n(e-e/5)}$`,this.correction+=a(`<br> Mentalement : <br>
          Pour calculer $\\dfrac{1}{5}$ d'une quantité, on la divise par $5$. <br>
          Ainsi, $\\dfrac{1}{5}\\times ${e}=${e}\\div 5=${e/5}$.`),this.reponse=s(4*e/5);break;case"b":e=t(3,6)*6,r=$(["des lunettes","un frère"," un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$\\dfrac{1}{6}$ des élèves d'une classe de $${e}$ élèves a ${r}.<br>

            Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $\\dfrac{1}{6}$ de $${e}$ .<br>
        $\\dfrac{1}{6}\\times ${e}=\\dfrac{${e}}{6}=${n(e/6)}$.<br>
        $${n(e/6)}$ élèves ont ${r} .<br>
          Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${n(e/6)}=${n(e-e/6)}$`,this.correction+=a(`<br> Mentalement : <br>
          Pour calculer $\\dfrac{1}{6}$ d'une quantité, on la divise par $6$. <br>
          Ainsi, $\\dfrac{1}{6}\\times ${e}=${e}\\div 6=${e/6}$.`),this.reponse=s(5*e/6);break;case"c":e=t(2,5)*7,r=$(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$\\dfrac{1}{7}$ d'une classe de $${e}$ élèves a ${r}.<br>

        Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $\\dfrac{1}{7}$ de $${e}$ .<br>
        $\\dfrac{1}{7}\\times ${e}=\\dfrac{${e}}{7}=${n(e/7)}$.<br>
        $${n(e/7)}$ élèves ont ${r} .<br>
          Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${n(e/7)}=${n(e-e/7)}$`,this.correction+=a(`<br> Mentalement : <br>
          Pour calculer $\\dfrac{1}{7}$ d'une quantité, on la divise par $7$. <br>
          Ainsi, $\\dfrac{1}{7}\\times ${e}=${e}\\div 7=${e/7}$.`),this.reponse=s(6*e/7);break;case"d":e=t(3,9)*4,r=$(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$\\dfrac{1}{4}$ d'une classe de $${e}$ élèves a ${r}.<br>

            Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $\\dfrac{1}{4}$ de $${e}$ .<br>
            $\\dfrac{1}{4}\\times ${e}=\\dfrac{${e}}{4}=${n(e/4)}$.<br>
            $${n(e/4)}$ élèves ont ${r} .<br>
              Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${n(e/4)}=${n(e-e/4)}$`,this.correction+=a(`<br> Mentalement : <br>
              Pour calculer $\\dfrac{1}{4}$ d'une quantité, on la divise par $4$. <br>
              Ainsi, $\\dfrac{1}{4}\\times ${e}=${e}\\div 4=${e/4}$.`),this.reponse=s(3*e/4);break;case"e":e=t(3,7)*5,r=$(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$20 \\%$  des élèves d'une classe de $${e}$ élèves ont ${r}.<br>
              Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $20 \\%$  de $${e}$ .<br>
             Prendre $20 \\%$  d'une quantité revient à en prendre le cinquième, c'est-à-dire à la diviser par $5$.<br>
              $20\\%$  de $${e}$ est égal à $\\dfrac{${e}}{5}=${n(e/5)}$.<br>
                            $${n(e/5)}$ élèves ont ${r} .<br>
                Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${n(e/5)}=${n(e-e/5)}$`,this.reponse=s(8*e/10);break;case"f":e=t(3,9)*4,r=$(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$25\\%$  des élèves d'une classe de $${e}$ élèves ont ${r}.<br>

                  Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $25 \\%$  de $${e}$ .<br>
                  Prendre $25 \\%$  d'une quantité revient à en prendre le quart, c'est-à-dire à la diviser par $4$.<br>
                   $25 \\%$  de $${e}$ est égal à $\\dfrac{${e}}{4}=${n(e/4)}$.<br>
                                 $${n(e/4)}$ élèves ont ${r} .<br>
                     Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${n(e/4)}=${n(e-e/4)}$`,this.reponse=s(e-.25*e);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{L as amcReady,Q as amcType,A as default,P as interactifReady,N as interactifType,x as refs,S as titre,k as uuid};
