import{r as n,F as a,a as v,s as i,Y as s,v as m,f as p,m as u,z as x}from"./embellissements-BYV7mIDn.js";import h from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const O="Déterminer une coordonnée avec un produit scalaire",w=!0,P="mathLive",Q="29/06/2022",R="14aa1",j={"fr-fr":["can1G07"],"fr-ch":["3mAlgLin-4"]};class k extends h{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const e=n(-10,10,0),o=n(-10,10,0),r=n(-10,10,0),t=n(-10,10,0),$=new a(-e*r,t),c=new a(-o*t,e);switch(v([1,2])){case 1:this.question=` Dans un repère orthonormé $\\big(O ; \\vec \\imath,\\vec \\jmath\\big)$, on considère les vecteurs :<br>
    $\\vec{u}\\begin{pmatrix}${e}${i(1)} \\\\ ${i(1)}x\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r}${i(1)} \\\\ ${i(1)}${t}\\end{pmatrix}$<br>
  
    Que vaut $x$ si $\\vec{u}$ et $\\vec{v}$ sont orthogonaux ?`,this.correction=`Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont orthogonaux, donc $\\vec{u}\\cdot\\vec{v}=0$.<br>
    On en déduit : $${e}\\times ${s(r)}+x\\times ${s(t)}=0$, soit $${e*r}${x(t)}x=0$.<br>
    Cette équation a pour solution ${t===1?`$x=${u(-e*r)}$.`:`$x=\\dfrac{${-e*r}}{${t}}${$.texSimplificationAvecEtapes("none","#f15929")}$.`}
   `,this.reponse=$;break;case 2:this.question=` Dans un repère orthonormé $\\big(O ; \\vec \\imath,\\vec \\jmath\\big)$, on considère les vecteurs :<br>
        $\\vec{u}\\begin{pmatrix}${e}${i(1)} \\\\ ${i(1)}${o}\\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x${i(1)} \\\\ ${i(1)}${t}\\end{pmatrix}$<br>
        
        Que vaut $x$ si $\\vec{u}$ et $\\vec{v}$ sont orthogonaux ?`,this.correction=`Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont orthogonaux, donc $\\vec{u}\\cdot\\vec{v}=0$.<br>
        On en déduit : $${e}\\times x+${s(o)}\\times ${s(t)}=0$, soit $${m(e)}x ${p(o*t)}=0$.<br>
        Cette équation a pour solution 
        ${e===1?`$x=${u(-o*t)}$.`:`$x=\\dfrac{${-o*t}}{${e}}${c.texSimplificationAvecEtapes("none","#f15929")}$.`}`,this.reponse=c;break}this.interactif&&(this.question+="<br>"),this.canEnonce=this.question,this.canReponseACompleter="$x=\\ldots$"}}export{Q as dateDePublication,k as default,w as interactifReady,P as interactifType,j as refs,O as titre,R as uuid};
