import{a as c,r as a,e as $,s as t,_ as l}from"./embellissements-BYV7mIDn.js";import{a as m}from"./deprecatedFractions-D2cbyAQf.js";import d from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./colors-bl7PrqSM.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const k="Calculer une moyenne",C=!0,R="mathLive",S="c9d15",N={"fr-fr":["can3S05"],"fr-ch":[]};class w extends d{constructor(){super(),this.versionQcmDisponible=!0,this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,s,n,i,r,u,o;switch(this.versionQcm?c([1,2]):c([1,2,3,3])){case 1:e=a(2,6),s=a(8,15),n=a(7,11),r=c([36,40,44,48,52]),i=r-e-s-n,this.question=`$${e}$ ${t(2)} ; ${t(2)} $${s}$ ${t(2)} ; ${t(2)} $${n}$${t(2)} ; ${t(2)} $${i}$<br>
   
        ${this.versionQcm?"La moyenne de cette série est :":" Quelle est la moyenne de cette série ?"}`,this.correction=`La somme des $4$ valeurs est : $${e}+${s}+${n}+${i} =${r}$.<br>
         La moyenne est donc $\\dfrac{${r}}{4}=${m(r,4)}$.`,this.reponse=r/4,this.distracteurs=[`$${$(r/4-1)}$`,`$${$((r+1)/4)}$`,`$${$(r/4+1)}$`,`$${$(r/4+2)}$`,`$${$(r/4-2)}$`,`$${$(r/4-.5)}$`,`$${$(r/4+.5)}$`];break;case 2:e=a(1,2)*5,s=a(9,10),n=a(5,7),i=a(1,5),r=c([35,40,45,50]),u=r-e-s-n-i,this.question=`$${s}$${t(2)} ; ${t(2)} $${e}$ ${t(2)} ; ${t(2)}$${n}$${t(2)} ; ${t(2)}$${i}$ ${t(2)} ; ${t(2)}$${u}$<br>
       
        ${this.versionQcm?"La moyenne de cette série est :":" Quelle est la moyenne de cette série ?"}`,this.distracteurs=[`$${$(r/5-1)}$`,`$${$((r+1)/5)}$`,`$${$(r/5+1)}$`,`$${$(r/5+2)}$`,`$${$(r/5-2)}$`,`$${$(r/5-.5)}$`,`$${$(r/5+.5)}$`],this.correction=`La somme des $5$ valeurs est : $${s}+${e}+${n}+${i}+${u}= ${r}$.<br>
         La moyenne est donc $\\dfrac{${$(r)}}{5}=${m(r,5)}$.`,this.reponse=r/5;break;case 3:o=c(["a","b","c","d"]),o==="a"&&(e=a(1,10)+a(31,89,[40,50,60,70,80])/100,r=a(2,9)/100,s=e-r,n=e+r,this.question=`$${$(e)}$ ${t(2)} ; ${t(2)}  $${$(s)}$  ${t(2)} ; ${t(2)}  $${$(n)}$<br>
         
          Quelle est la moyenne de cette série ?`,this.correction=`La somme des $3$ valeurs est : $${$(e)}+${$(s)}+${$(n)} =${$(3*e)}$.<br>
          La moyenne est donc $\\dfrac{${$(3*e)}}{3}=${$(e)}$.`,this.correction+=l(`<br> Mentalement : <br>
          En écrivant les valeurs dans l'ordre croissant : <br>$\\underbrace{${$(s)}}_{${$(e)}- ${$(r)}}$ ${t(2)} ; ${t(2)}  $${$(e)}$  ${t(2)} ; ${t(2)}  $\\underbrace{${$(n)}}_{${$(e)}+ ${$(r)}}$,
                    on remarque que les écarts entre la valeur intermédiaire ($${$(e)}$) et les deux autres valeurs ($${$(e-r)}$ et $${$(e+r)}$) sont égaux (ils valent $${$(r)}$).<br>
          On en déduit que la moyenne est la valeur intermédiaire : $${$(e)}$.

          
          
          `),this.reponse=e),o==="b"&&(e=a(1,10)+a(31,89,[40,50,60,70,80])/100,r=a(2,9)/100,s=e-r,n=e+r,this.question=`$${$(s)}$ ${t(2)} ; ${t(2)}  $${$(n)}$  ${t(2)} ; ${t(2)}  $${$(e)}$<br>
        
          Quelle est la moyenne de cette série ?`,this.correction=`La somme des $3$ valeurs est : $${$(e)}+${$(s)}+${$(n)} =${$(3*e)}$.<br>
          La moyenne est donc $\\dfrac{${$(3*e)}}{3}=${$(e)}$.`,this.correction+=l(`<br> Mentalement : <br>
          En écrivant les valeurs dans l'ordre croissant : <br>$\\underbrace{${$(s)}}_{${$(e)}- ${$(r)}}$ ${t(2)} ; ${t(2)}  $${$(e)}$  ${t(2)} ; ${t(2)}  $\\underbrace{${$(n)}}_{${$(e)}+ ${$(r)}}$,
                    on remarque que les écarts entre la valeur intermédiaire ($${$(e)}$) et les deux autres valeurs ($${$(e-r)}$ et $${$(e+r)}$) sont égaux (ils valent $${$(r)}$).<br>
          On en déduit que la moyenne est la valeur intermédiaire : $${$(e)}$.

          
          
          `),this.reponse=e),o==="c"&&(e=a(100,200),r=a(2,9),s=e-r,n=e+r,this.question=`$${$(n)}$${t(2)} ; ${t(2)} $${$(e)}$ ${t(2)} ; ${t(2)}$${$(s)}$<br>
          
          Quelle est la moyenne de cette série ?`,this.correction=`La somme des $3$ valeurs est : $${$(e)}+${$(s)}+${$(n)} =${$(3*e)}$.<br>
                            La moyenne est donc $\\dfrac{${$(3*e)}}{3}=${$(e)}$.`,this.correction+=l(`<br> Mentalement : <br>
          On remarque que les écarts entre la valeur intermédiaire ($${$(e)}$) et les deux autres valeurs ($${$(e-r)}$ et $${$(e+r)}$) sont égaux (ils valent $${$(r)}$) :
          $\\underbrace{${$(n)}}_{${e}+ ${r}}$ ${t(2)} ; ${t(2)}  $${$(e)}$  ${t(2)} ; ${t(2)}  $\\underbrace{${$(s)}}_{${e}- ${r}}$. <br>
                            
                            On en déduit que la moyenne est la valeur intermédiaire : $${$(e)}$.
                  
                            
                            
                            `),this.reponse=e),o==="d"&&(e=a(100,200),r=a(2,9),s=e-r,n=e+r,this.question=`$${$(e)}$${t(2)} ; ${t(2)} $${$(n)}$ ${t(2)} ; ${t(2)}$${$(s)}$<br>
          
          Quelle est la moyenne de cette série ?`,this.correction=`La somme des $3$ valeurs est : $${$(e)}+${$(s)}+${$(n)} =${$(3*e)}$.<br>
                            La moyenne est donc $\\dfrac{${$(3*e)}}{3}=${$(e)}$.`,this.correction+=l(`<br> Mentalement : <br>
          En écrivant les valeurs dans l'ordre croissant : $\\underbrace{${$(s)}}_{${$(e)}- ${$(r)}}$ ${t(2)} ; ${t(2)}  $${$(e)}$  ${t(2)} ; ${t(2)}  $\\underbrace{${$(n)}}_{${$(e)}+ ${$(r)}}$,
                    on remarque que les écarts entre la valeur intermédiaire ($${$(e)}$) et les deux autres valeurs ($${$(e-r)}$ et $${$(e+r)}$) sont égaux (ils valent $${$(r)}$).<br>
          On en déduit que la moyenne est la valeur intermédiaire : $${$(e)}$.
                            
                            
                            `),this.reponse=e);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{w as default,C as interactifReady,R as interactifType,N as refs,k as titre,S as uuid};
