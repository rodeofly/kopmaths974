import a from"decimal.js";import{m as i,a as s,r as o,e}from"./embellissements-BYV7mIDn.js";import c from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const A="8cf80",U={"fr-fr":["1A-C19"],"fr-ch":[]},F=!0,k="qcm",R="true",q="qcmMono",C="Résoudre un problème",T="29/07/2025";class M extends c{versionOriginale=()=>{this.enonce=`Dans une région de France, le tarif de l'eau est le suivant : <br>
              Un abonnement annuel et $3{,}50$ € par mètre cube consommé. <br>
              Une famille a payé une facture de $352{,}50$ € pour une consommation de $85$ m$^3$.<br>
            Le prix de l'abonnement est donné par le calcul :`,this.correction=`La facture s'élève à $352{,}50$ € pour une consommation de $85$ m$^3$.<br>
                   En notant $a$ le montant de l'abonnement, on obtient : <br>
                   $\\begin{aligned}
                   a+3{,}50\\times 85 &=352{,}50\\\\
                   a&=${i("352{,}50-3{,}50\\times 85")}
                   \\end{aligned}$
                   `,this.reponses=["$352{,}50-3{,}50\\times 85$","$\\dfrac{352{,}50}{3{,}50\\times 85}$","$\\dfrac{3{,}50\\times 85}{352{,}50}$","$352{,}50+3{,}50\\times 85$"]};versionAleatoire=()=>{switch(s([1,2,3])){case 1:{const r=new a(o(451,691)).div(10),$=new a(o(301,399)).div(100),t=o(70,99),n=new a($).mul(t).add(r);this.enonce=`Dans une région de France, le tarif de l'eau est le suivant : <br>
                    un abonnement annuel et $${e($,2,!0)}$ € par mètre cube consommé. <br>
                    Une famille a payé une facture de $${e(n,2,!0)}$ € pour une consommation de $${t}$ m$^3$.<br>
                  Le prix de l'abonnement est donné par le calcul :`,this.correction=`La facture s'élève à $${e(n,3)}$ € pour une consommation de $${t}$ m$^3$.<br>
                         En notant $a$ le montant de l'abonnement, on obtient : <br>
                         $\\begin{aligned}
                         a+${e($,2,!0)}\\times ${t} &=${e(n,3)}\\\\
                         a&=${i(`${e(n,3)}-${e($,2,!0)}\\times ${t}`)}
                         \\end{aligned}$
                         `,this.reponses=[`$${e(n,3)}-${e($,2,!0)}\\times ${t}$`,`$\\dfrac{${e(n,3)}}{${e($,2,!0)}\\times ${t}}$`,`$\\dfrac{${e($,2,!0)}\\times ${t}}{${e(n,3)}}$`,`$${e(n,3)}+${e($,2,!0)}\\times ${t}$`]}break;case 2:{const r=new a(o(451,691)).div(10),$=new a(o(301,399)).div(100),t=o(70,99),n=new a($).mul(t).add(r);this.enonce=`Dans une région de France, le tarif de l'eau est le suivant : <br>
                    un abonnement annuel de $${e(r,2,!0)}$ € et un prix par mètre cube consommé. <br>
                    Une famille a payé une facture de $${e(n,2,!0)}$ € pour une consommation de $${t}$ m$^3$.<br>
                  Le prix du mètre cube consommé est donné par le calcul :`,this.correction=`La facture s'élève à $${e(n,3)}$ € pour une consommation de $${t}$ m$^3$.<br>
                         En notant $a$ le prix du mètre cube, on obtient : <br>
                         $\\begin{aligned}
                         ${e(r,2)}+a\\times ${t} &=${e(n,3)}\\\\
                         a&=${i(`\\dfrac{${e(n,3)}-${e(r,2,!0)}}{${t}}`)}
                         \\end{aligned}$
                         `,this.reponses=[`$\\dfrac{${e(n,3)}-${e(r,2,!0)}}{${t}}$`,`$\\dfrac{${e(n,3)}-${t}}{${e(r,2,!0)}}$`,`$${e(n,3)}-${e(r,2,!0)}\\times ${t}$`,`$\\dfrac{${e($,2,!0)}\\times ${t}}{${e(n,3)}}$`]}break;case 3:default:{const r=new a(o(451,691)).div(10),$=new a(o(301,399)).div(100),t=o(70,99),n=new a($).mul(t).add(r);this.enonce=`Dans une région de France, le tarif de l'eau est le suivant : <br>
                  un abonnement annuel de $${e(r,2,!0)}$ € et $${e($,2,!0)}$ € par mètre cube consommé. <br>
                    Une famille a payé une facture de $${e(n,2,!0)}$ € pour sa consommation annuelle.<br>
                  Le nombre de mètres cubes consommés est donné par le calcul :`,this.correction=`La facture s'élève à $${e(n,3)}$ € pour la consommation annuelle.<br>
                         En notant $a$ le nombre de  mètres cubes consommés, on obtient : <br>
                         $\\begin{aligned}
                         ${e(r,2)}+${e($,2,!0)}\\times a &=${e(n,3)}\\\\
                         a&=${i(`\\dfrac{${e(n,3)}-${e(r,2,!0)}}{${e($,2,!0)}}`)}
                         \\end{aligned}$
                         `,this.reponses=[`$\\dfrac{${e(n,3)}-${e(r,2,!0)}}{${e($,2,!0)}}$`,`$\\dfrac{${e(n,3)}-${e($,2,!0)}}{${e(r,2,!0)}}$`,`$${e(n,3)}-${e(r,2,!0)}\\times ${e($,2,!0)}$`,`$${e(r,2,!0)}\\times${e($,3)}-${e(n,2,!0)}$`]}break}};constructor(){super(),this.versionAleatoire(),this.spacing=1.5}}export{R as amcReady,q as amcType,T as dateDePublication,M as default,F as interactifReady,k as interactifType,U as refs,C as titre,A as uuid};
