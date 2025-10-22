import{K as c}from"./Exercice-DtXhjCyI.js";import{r as a,z as o,f as i,u as s,m as $}from"./embellissements-BYV7mIDn.js";import f from"./ExerciceSimple-CWWOU0FG.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const D="Déterminer une forme canonique",E=!0,L="mathLive",C="07/06/2022",T="d1ad9",g={"fr-fr":["can1L06"],"fr-ch":[]};class B extends f{constructor(){super(),this.typeExercice="simple",this.formatChampTexte=c.clavierDeBaseAvecVariable,this.nbQuestions=1}nouvelleVersion(){const e=a(-3,3,[0]),n=a(-5,5,[0]),t=-2*e,r=e*e+n;r!==0?this.interactif?this.question=`Soit $f(x)= x^2${o(t)}x${i(r)}$.<br>

        La forme canonique de $f(x)$ est :<br> $f(x)=$`:this.question=`Soit $f(x)= x^2${o(t)}x${i(r)}$.<br>

       Donner la forme canonique de $f(x)$.`:this.interactif?this.question=`Soit
        $f(x)= x^2${o(t)}x$.<br>
        
       La forme canonique de $f(x)$ est : $f(x)=$`:this.question=`Soit
        $f(x)= x^2${o(t)}x$.<br>

        Donner la forme canonique de $f(x)$.`,this.correction="La forme canonique est donnée par : $f(x)=a(x-\\alpha)^2+\\beta$.",this.correction+=`<br> On a $a=1$, et on reconnaît dans $x^2${o(t)}x${i(r)}$, le début du carré de $(${s(1,-e)})^2$.`,this.correction+=`<br>On peut donc écrire :  $\\underbrace{x^2${o(t)}x}_{(${s(1,-e)})^2-${(-e)**2}}${i(r)}
    =(${s(1,-e)})^2-${(-e)**2}${i(r)}$.`,this.correction+="<br>Soit : $f(x)=",this.reponse=[`(x${i(t/2)})^2${i(n)}`,`${n}+(x${i(t/2)})^2`],this.correction+=`${$(this.reponse[0])}$`,this.canEnonce=this.question,this.canReponseACompleter=""}}export{C as dateDePublication,B as default,E as interactifReady,L as interactifType,g as refs,D as titre,T as uuid};
