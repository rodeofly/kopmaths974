import{a as i,r,_ as s,e as n}from"./embellissements-BYV7mIDn.js";import{b as $}from"./Personne-DRrbQFAY.js";import a from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const x="Résoudre un problème avec la proportionnalité",E=!0,M="mathLive",y="25/10/2021",R="c58e0",C={"fr-fr":["can4P04"],"fr-ch":[]};class N extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,e;const o=i([30,40,50,60,80,100]);o===30&&(t=r(1,9),e=t*3,this.question=`${$()} a obtenu $${e}$ sur $30$ à son devoir.<br>

      Quelle est sa note sur $20$ ?`,this.correction=`Sa note est de $${e*2/3}$ sur $20$.`,this.correction+=s(`<br> Mentalement : <br>
      Pour obtenir la note sur $20$, on multiplie sa note par $2$ (on obtient $${e*2}$), puis on divise le résultat par $3$, soit  $${e*2}\\div 3=${e*2/3}$.<br>
      En multipliant par $2$, on obtient sa note sur $60$, puis en divisant par $3$, on la ramène sur $20$. `),this.reponse=e*2/3),o===40&&(e=2*r(1,9)+1,this.question=`${$()} a obtenu $${e}$ sur $40$ à son devoir.<br>

        Quelle est sa note sur $20$ ?`,this.correction=`Sa note est de $${n(e/2)}$ sur $20$.`,this.correction+=s(`<br> Mentalement : <br>
      Pour obtenir la note sur $20$, on divise la note sur $40$ par $2$. `),this.reponse=e/2),o===50&&(t=r(1,9),e=t*5,this.question=`${$()} a obtenu $${e}$ sur $50$ à son devoir.<br>

        Quelle est sa note sur $20$ ?`,this.correction=`Sa note est de $${n(e*2/5)}$ sur $20$.`,this.correction+=s(`<br> Mentalement : <br>
        Pour obtenir la note sur $20$, on multiplie sa note par $2$ (on obtient $${e*2}$), puis on divise le résultat par $5$, soit  $${e*2}\\div 5=${e*2/5}$.<br>
        En multipliant par $2$, on obtient sa note sur $100$, puis en divisant par $5$, on la ramène sur $20$. `),this.reponse=e*2/5),o===60&&(t=r(1,9),e=t*6,this.question=`${$()} a obtenu $${e}$ sur $60$ à son devoir.<br>

        Quelle est sa note sur $20$ ?`,this.correction=`Sa note est de $${n(e/3)}$ sur $20$.`,this.correction+=s(`<br> Mentalement : <br>
        Pour obtenir la note sur $20$, on divise la note sur $60$ par $3$. `),this.reponse=e/3),o===80&&(t=r(1,9),e=t*8,this.question=`${$()} a obtenu $${e}$ sur $80$ à son devoir.<br>

        Quelle est sa note sur $20$ ?`,this.correction=`Sa note est de $${n(e/4)}$ sur $20$.`,this.correction+=s(`<br> Mentalement : <br>
        Pour obtenir la note sur $20$, on divise la note sur $80$ par $4$. `),this.reponse=e/4),o===100&&(t=r(1,9),e=t*10,this.question=`${$()} a obtenu $${e}$ sur $100$ à son devoir.<br>

        Quelle est sa note sur $20$ ?`,this.correction=`Sa note est de $${n(e/5)}$ sur $20$.`,this.correction+=s(`<br> Mentalement : <br>
        Pour obtenir la note sur $20$, on divise la note sur $100$ par $5$. `),this.reponse=e/5),this.canEnonce=this.question,this.canReponseACompleter=""}}export{y as dateDePublication,N as default,E as interactifReady,M as interactifType,C as refs,x as titre,R as uuid};
