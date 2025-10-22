import{t as i,a,r as t,a8 as s}from"./embellissements-BYV7mIDn.js";import n from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const C="04e68",A={"fr-fr":["1A-E4-3"],"fr-ch":["10FA4-9"]},O=!0,T="qcm",j="true",_="qcmMono",E="Déterminer l'effet de deux évolutions successives",M="18/07/2025";class y extends n{versionOriginale=()=>{this.enonce=` Un prix augmente de $20\\,\\%$ puis diminue de $20\\,\\%$. <br>
    Après ces deux évolutions, on peut affirmer que :  `,this.correction=`Lorsqu'on applique une augmentation de $20\\,\\%$, on ajoute $20\\,\\%$ du prix initial.<br>
   Lorsqu'on applique ensuite une diminution de $20\\,\\%$, on retire $20\\,\\%$ du nouveau prix (qui est plus élevé que le prix initial).<br>
   Par conséquent, la somme retirée est plus importante que la somme ajoutée initialement.<br>
   ${i("Le prix final sera donc strictement inférieur au prix initial.")}`,this.reponses=["Le prix est strictement inférieur à sa valeur de départ. ","Le prix est égal à sa valeur de départ. ","Le prix est strictement supérieur à sa valeur de départ. "," On ne peut pas savoir : cela dépend de la valeur de départ.  "]};versionAleatoire=()=>{switch(a([1,2,2,2,3,3,3])){case 1:{const e=t(1,9)*10,r=a([!0,!1]);this.enonce=` Un prix ${r?"augmente":"diminue"} de $${e}\\,\\%$ puis ${r?"diminue":"augmente"} de $${e}\\,\\%$. <br>
    Après ces deux évolutions, on peut affirmer que :  `,this.correction=`Lorsqu'on applique une ${r?"augmentation":"diminution"} de $${e}\\,\\%$, on ${r?"ajoute":"retire"} $${e}\\,\\%$ du prix initial.<br>
   Lorsqu'on applique ensuite une ${r?"diminution":"augmentation"} de $${e}\\,\\%$, on ${r?"retire":"ajoute"} $${e}\\,\\%$ du nouveau prix (qui est ${r?"plus grand":"plus petit"} que le prix initial).<br>
  Par conséquent, ${r?"la somme retirée est plus importante que la somme ajoutée initialement":"la somme retirée initialement est plus importante que la somme ajoutée ensuite"}.<br>
   ${i("Le prix final sera donc strictement inférieur au prix initial.")}<br>
   
          ${s("Autre justification :")} <br>
           Le coefficient multiplicateur associé à une augmentation de taux $T$ est $CM_1=1+T$.<br>
   Celui associé à une diminution de même taux $T$ est  $CM_2=1-T$.<br>
   Ainsi le coefficient multiplicateur glogal est $CM_G=CM_1\\times CM_2=\\underbrace{(1+T)(1-T)}_{(a+b)(a-b)}=\\underbrace{1-T^2}_{a^2-b^2}$.<br>
   Ce dernier résultat montre que le coefficient multiplicateur global est inférieur à $1$. <br>
   Ainsi le prix final sera  strictement inférieur au prix initial.`,this.reponses=["Le prix est strictement inférieur à sa valeur de départ. ","Le prix est égal à sa valeur de départ. ","Le prix est strictement supérieur à sa valeur de départ. "," On ne peut pas savoir : cela dépend de la valeur de départ.  "]}break;case 2:{const e=t(20,30);this.enonce=`
  Un prix diminue de $20\\,\\%$ puis augmente de $${e}\\,\\%$. <br>
Sachant que le taux réciproque d'une baisse de $20\\,\\%$ est une augmentation de $25\\,\\%$, après ces deux évolutions, on peut affirmer que :  `,e>25?(this.correction=`
    Le taux réciproque d'une baisse de $20\\,\\%$ est une augmentation de $25\\,\\%$.<br>
    Comme $${e}\\,\\% > 25\\,\\%$, l'augmentation appliquée est plus forte que celle nécessaire pour retrouver le prix initial.<br>
    ${i("Le prix final sera donc strictement supérieur au prix initial.")}`,this.reponses=["Le prix est strictement supérieur à sa valeur de départ. ","Le prix est égal à sa valeur de départ. ","Le prix est strictement inférieur à sa valeur de départ. "," On ne peut pas savoir : cela dépend de la valeur de départ.  "]):e===25?(this.correction=`
      Le taux réciproque d'une baisse de $20\\,\\%$ est une augmentation de $25\\,\\%$.<br>
      Comme on applique exactement le taux réciproque, les deux opérations s'annulent parfaitement.<br>
      ${i("Le prix final sera donc égal au prix initial.")}`,this.reponses=["Le prix est égal à sa valeur de départ. ","Le prix est strictement inférieur à sa valeur de départ. ","Le prix est strictement supérieur à sa valeur de départ. "," On ne peut pas savoir : cela dépend de la valeur de départ.  "]):(this.correction=`
      Le taux réciproque d'une baisse de $20\\,\\%$ est une augmentation de $25\\,\\%$.<br>
      Comme $${e}\\,\\% < 25\\,\\%$, l'augmentation appliquée est insuffisante pour retrouver le prix initial.<br>
      ${i("Le prix final sera donc strictement inférieur au prix initial.")}`,this.reponses=["Le prix est strictement inférieur à sa valeur de départ. ","Le prix est égal à sa valeur de départ. ","Le prix est strictement supérieur à sa valeur de départ. "," On ne peut pas savoir : cela dépend de la valeur de départ.  "])}break;case 3:default:{const e=t(15,25);this.enonce=`
Un prix augmente de $25\\,\\%$ puis baisse de $${e}\\,\\%$. <br>
Sachant que le taux réciproque d'une augmentation de $25\\,\\%$ est une baisse de $20\\,\\%$, après ces deux évolutions, on peut affirmer que :  `,e>20?(this.correction=`
Le taux réciproque d'une augmentation de $25\\,\\%$ est une baisse de $20\\,\\%$.<br>
Comme $${e}\\,\\% > 20\\,\\%$, la baisse appliquée est plus forte que celle nécessaire pour retrouver le prix initial.<br>
${i("Le prix final sera donc strictement inférieur au prix initial.")}`,this.reponses=["Le prix est strictement inférieur à sa valeur de départ. ","Le prix est égal à sa valeur de départ. ","Le prix est strictement supérieur à sa valeur de départ. "," On ne peut pas savoir : cela dépend de la valeur de départ.  "]):e===20?(this.correction=`
Le taux réciproque d'une augmentation de $25\\,\\%$ est une baisse de $20\\,\\%$.<br>
Comme on applique exactement le taux réciproque, les deux opérations s'annulent parfaitement.<br>
${i("Le prix final sera donc égal au prix initial.")}`,this.reponses=["Le prix est égal à sa valeur de départ. ","Le prix est strictement inférieur à sa valeur de départ. ","Le prix est strictement supérieur à sa valeur de départ. "," On ne peut pas savoir : cela dépend de la valeur de départ.  "]):(this.correction=`
Le taux réciproque d'une augmentation de $25\\,\\%$ est une baisse de $20\\,\\%$.<br>
Comme $${e}\\,\\% < 20\\,\\%$, la baisse appliquée est insuffisante pour annuler l'augmentation initiale.<br>
${i("Le prix final sera donc strictement supérieur au prix initial.")}`,this.reponses=["Le prix est strictement supérieur à sa valeur de départ. ","Le prix est égal à sa valeur de départ. ","Le prix est strictement inférieur à sa valeur de départ. "," On ne peut pas savoir : cela dépend de la valeur de départ.  "])}break}};constructor(){super(),this.options={vertical:!0,ordered:!1},this.versionAleatoire()}}export{j as amcReady,_ as amcType,M as dateDePublication,y as default,O as interactifReady,T as interactifType,A as refs,E as titre,C as uuid};
