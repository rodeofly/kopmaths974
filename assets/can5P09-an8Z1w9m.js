import{a as c,r as a,e as t,_ as p}from"./embellissements-BYV7mIDn.js";import{c as $}from"./style-CcGLZIPY.js";import m from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const y="Calculer un prix à partir d'un prix au kg",T=!0,q="mathLive",E=!0,P="AMCNum",Q="13/11/2022",R="7b350",N={"fr-fr":["can5P09"],"fr-ch":[]};class S extends m{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:" €"}}nouvelleVersion(){let e,i,s,r,o,n;switch(c([1,2,3])){case 1:e=a(2,6),s=c([" de pommes de terre"," de carottes"," de courgettes","de navets","de tomates","de poireaux","d'aubergines"]),i=a(1,9)*100,r=i/1e3,o=r*e,n=o,this.question=`Le prix d'un kg ${s} est $${$(e)}$ €. <br>

        Quel est le prix de $${i}$ g ? `,this.optionsChampTexte={texteApres:"€"},this.correction=`Comme $${i}$ g $=${t(r,1)}$ kg, le  prix  de $${i}$ g ${s} est donné par : <br>
        $${t(r,1)}\\times ${$(e)}=${t(o,2)}$.<br>
        Le prix de $${i}$ g ${s} est $${$(o)}$ €.`,i!==100?i===500?this.correction+=p(`
  <br> Mentalement : <br>
  Multiplier par $0,5$ revient à diviser par $2$. <br>
  Ainsi, $${t(r,1)}\\times ${$(e)}=${$(e)}\\div 2=${$(n)}$.
  
`):this.correction+=p(`
  <br> Mentalement : <br>
  $${t(r,1)}\\times ${$(e)}=${t(r*10,1)}\\times 0,1\\times ${t(e,1)}=${t(r*10,1)}\\times ${t(e/10,1)}=${$(n)}$.
  
`):this.correction+="",this.reponse=n;break;case 2:e=a(7,15),s=c(["de cerises","de fraises","de framboises"]),i=a(1,9)*100,r=i/1e3,o=r*e,n=o,this.question=`Le prix d'un kg ${s} est $${$(e)}$ €. <br>

        Quel est le prix de $${i}$ g ? `,this.optionsChampTexte={texteApres:"€"},this.correction=`Comme $${i}$ g $=${t(r,1)}$ kg, le  prix  de $${i}$ g ${s} est donné par : <br>
        $${t(r,1)}\\times ${$(e)}=${t(o,2)}$.<br>
        Le prix de $${i}$ g ${s} est $${$(o)}$ €.`,i!==100?i===500?this.correction+=p(`
  <br> Mentalement : <br>
  Multiplier par $0,5$ revient à diviser par $2$. <br>
  Ainsi, $${t(r,1)}\\times ${$(e)}=${$(e)}\\div 2=${$(n)}$.
  
`):this.correction+=p(`
  <br> Mentalement : <br>
  $${t(r,1)}\\times ${$(e)}=${t(r*10,1)}\\times 0,1\\times ${t(e,1)}=${t(r*10,1)}\\times ${t(e/10,1)}=${$(n)}$.
  
`):this.correction+="",this.reponse=n;break;case 3:default:e=a(16,25),s=c(["du Costa Rica","du Kenya","de Colombie","d'Ethiopie","du Salvador","du Nicaragua","du Mexique","du Honduras","du Guatemala"]),i=a(1,9)*100,r=i/1e3,o=r*e,n=o,this.question=`Le prix d'un kg de café ${s} est $${$(e)}$ €. <br>
        
          Quel est le prix de $${i}$ g ? `,this.optionsChampTexte={texteApres:"€"},this.correction=`Comme $${i}$ g $=${t(r,1)}$ kg, le  prix  de $${i}$ g de café ${s} est donné par : <br>
          $${t(r,1)}\\times ${$(e)}=${t(o,2)}$.<br>
          Le prix de $${i}$ g de café ${s} est $${$(o)}$ €.`,i!==100?i===500?this.correction+=p(`
    <br> Mentalement : <br>
    Multiplier par $0,5$ revient à diviser par $2$. <br>
    Ainsi, $${t(r,1)}\\times ${$(e)}=${$(e)}\\div 2=${$(n)}$.
    
  `):this.correction+=p(`
    <br> Mentalement : <br>
    $${t(r,1)}\\times ${$(e)}=${t(r*10,1)}\\times 0,1\\times ${t(e,1)}=${t(r*10,1)}\\times ${t(e/10,1)}=${$(n)}$.
    
  `):this.correction+="",this.reponse=n;break}this.reponse=this.reponse.toFixed(2),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €"}}export{E as amcReady,P as amcType,Q as dateDePublication,S as default,T as interactifReady,q as interactifType,N as refs,y as titre,R as uuid};
