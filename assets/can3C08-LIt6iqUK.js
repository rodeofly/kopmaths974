import{d as l,r as o,a as c,e as r,Y as a,_ as u}from"./embellissements-BYV7mIDn.js";import b from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const Q="Calculer avec un programme de calcul",E=!0,M="mathLive",y="9094b",N={"fr-fr":["can3C08"],"fr-ch":[]};class R extends b{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const t=l(o(2,9)*5),i=l(o(2,9)*4),n=l(o(2,9)*3),s=l(o(2,9)*6),e=o(2,9,[t/5,i/4,n/3,s/6]),$=c(["quart","tiers","cinquième","sixième"]);$==="cinquième"&&(this.question=`Prendre le ${$} de $${t}$, puis soustraire $${e}$ et élever le résultat au carré. <br>
      
     Quel nombre obtient-on ?`,this.correction=`$\\bullet$ On prend le ${$} de $${t}$ : $\\dfrac{1}{5}\\times ${t}=${r(t/5)}$.
    <br>
    $\\bullet$ On soustrait $${e}$, on obtient : $${r(t/5)}-${r(e)}=${r(t/5-e)}$.
    <br>
    $\\bullet$ On élève au carré :  $${a(t/5-e)}^2= ${r((t/5-e)*(t/5-e))}$.
      `,this.correction+=u(`<br> Mentalement : <br>
      Prendre le cinquième d'un nombre revient à le diviser par 5.<br>
       Ainsi, le ${$} de $${t}$ est égal à $${t}\\div 5=${t/5}$.
        `),this.reponse=(t/5-e)*(t/5-e)),$==="quart"&&(this.question=`Prendre le ${$} de $${i}$, puis soustraire $${e}$ et élever le résultat au carré. <br>

      Quel nombre obtient-on ?`,this.correction=`$\\bullet$ On prend le ${$} de $${i}$ : $\\dfrac{1}{4}\\times ${i}=${r(i/4)}$.
      <br>
      $\\bullet$ On soustrait $${e}$, on obtient : $${r(i/4)}-${r(e)}=${r(i/4-e)}$.
      <br>
      $\\bullet$ On élève au carré : $${a(i/4-e)}^2= ${r((i/4-e)*(i/4-e))}$. `,this.correction+=u(`<br> Mentalement : <br>
    Prendre le quart d'un nombre revient à le diviser par 4.<br>
     Ainsi, le ${$} de $${i}$ est égal à $${i}\\div 4=${i/4}$.
      `),this.reponse=(i/4-e)*(i/4-e)),$==="tiers"&&(this.question=`Prendre le ${$} de $${n}$, puis soustraire $${e}$ et élever le résultat au carré. <br>

     Quel nombre obtient-on ?`,this.correction=`$\\bullet$ On prend le ${$} de $${n}$ : $\\dfrac{1}{3}\\times ${n}=${r(n/3)}$.
      <br>
      $\\bullet$ On soustrait $${e}$, on obtient : $${r(n/3)}-${r(e)}=${r(n/3-e)}$.
      <br>
      $\\bullet$ On élève au carré : $${a(n/3-e)}^2= ${r((n/3-e)*(n/3-e))}$. `,this.correction+=u(`<br> Mentalement : <br>
      Prendre le tiers d'un nombre revient à le diviser par 3.<br>
       Ainsi, le ${$} de $${n}$ est égal à $${n}\\div 3=${n/3}$.
        `),this.reponse=(n/3-e)*(n/3-e)),$==="sixième"&&(this.question=`Prendre le ${$} de $${s}$, puis soustraire $${e}$ et élever le résultat au carré. <br>
      Quel nombre obtient-on ?`,this.correction=`$\\bullet$ On prend le ${$} de $${s}$ : $\\dfrac{1}{6}\\times ${s}=${r(s/6)}$.
      <br>
      $\\bullet$ On soustrait $${e}$, on obtient : $${r(s/6)}-${r(e)}=${r(s/6-e)}$.
      <br>
      $\\bullet$ On élève au carré : $${a(s/6-e)}^2= ${r((s/6-e)*(s/6-e))}$. `,this.correction+=u(`<br> Mentalement : <br>
    Prendre le sixième d'un nombre revient à le diviser par 6.<br>
     Ainsi, le ${$} de $${s}$ est égal à $${s}\\div 6=${s/6}$.
      `),this.reponse=(s/6-e)*(s/6-e)),this.canEnonce=this.question,this.canReponseACompleter=""}}export{R as default,E as interactifReady,M as interactifType,N as refs,Q as titre,y as uuid};
