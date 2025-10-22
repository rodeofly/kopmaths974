import{p as o,C as H,k as r,cI as K,d5 as t,aX as O,o as S,r as T,a as p,m as e}from"./embellissements-BYV7mIDn.js";import{g as R}from"./reperes-WwrVcExd.js";import j from"./ExerciceSimple-CWWOU0FG.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const oi="Associer une mesure d'angle à un  point du cercle trigonométrique ",ai=!0,ni="mathLive",ci="31/10/2022",di="06/11/2024",li="33ae8",fi={"fr-fr":["can1G10"],"fr-ch":["2mTrigo-4"]};class ui extends j{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let i;const h=o(0,0,"O","below left"),B=H("O",-.4,-.4,0,"black",1),a=o(5,0,"I","right"),b=o(0,5,"J","above"),F=o(-5,0,"K","left"),P=o(0,-5,"L","below"),w=o(-5,0),I=o(0,-5),J=r(a,w),y=r(b,I),s=K(h,a);s.epaisseur=3;const G=r(h,a,"blue");G.epaisseur=3;const m=t(s,30,"A","above right"),L=t(s,210,"G","below left"),n=r(m,L,"blue");n.epaisseur=1,n.pointilles=5;const g=t(s,45,"B","above right"),q=t(s,225,"H","below left"),c=r(g,q,"blue");c.epaisseur=1,c.pointilles=5;const Q=t(s,60,"C","above right"),k=t(s,240,"M","below left"),d=r(Q,k,"blue");d.epaisseur=1,d.pointilles=5;const C=t(s,120,"D","above left"),E=t(s,-60,"N","below right"),l=r(C,E,"blue");l.epaisseur=1,l.pointilles=5;const A=t(s,135,"E","above left"),D=t(s,-45,"P","below right"),f=r(A,D,"blue");f.epaisseur=1,f.pointilles=5;const v=t(s,150,"F","above left"),x=t(s,-30,"Q","below right"),u=r(v,x,"blue");u.epaisseur=1,u.pointilles=5;const M=R(-5,-5,5,5,"black",.4,2.5),N=O(m,L,g,q,Q,k,C,E,A,D,v,x,a,b,F,P)[1],$=S({xmin:-8,xmax:8,ymin:-5-1.5,ymax:6,pixelsParCm:15,scale:.45,style:"margin: auto"},s,J,y,n,c,d,l,f,u,M,B,N);switch(T(1,16)){case 1:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$  a pour point-image le point $I$ ?<br>

        `,this.question+=`${$}`,i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le réel $${e("2\\pi")}$ est associé au point $I$ dans $${i}$.   `,this.reponse="2\\pi"):(this.correction=`Le réel $${e(0)}$ est associé au point $I$ dans $${i}$.   `,this.reponse="0");break;case 2:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $A$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="]-\\pi\\,;\\,\\pi]"?(this.correction=`Le réel $${e("\\dfrac{\\pi}{6}")}$  est associé au point $A$ dans $${i}$.   `,this.reponse="\\dfrac{\\pi}{6}"):i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $A$ est le point-image de $\\dfrac{\\pi}{6}$.<br>
            $\\dfrac{\\pi}{6}+2\\pi=\\dfrac{13\\pi}{6}\\in ${i}$.<br>
             Le réel $${e("\\dfrac{13\\pi}{6}")}$  est associé au point $A$ dans $${i}$.   `,this.reponse="\\dfrac{13\\pi}{6}"):(this.correction=`Le point $A$ est le point-image de $\\dfrac{\\pi}{6}$.<br>
            $\\dfrac{\\pi}{6}-2\\pi=-\\dfrac{11\\pi}{6}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{11\\pi}{6}")}$  est associé au point $A$ dans $${i}$.   `,this.reponse="-\\dfrac{11\\pi}{6}");break;case 3:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $B$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="]-\\pi\\,;\\,\\pi]"?(this.correction=`Le réel $${e("\\dfrac{\\pi}{4}")}$  est associé au point $B$ dans $${i}$.   `,this.reponse="\\dfrac{\\pi}{4}"):i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $B$ est le point-image de $\\dfrac{\\pi}{4}$.<br>
            $\\dfrac{\\pi}{4}+2\\pi=\\dfrac{9\\pi}{4}\\in ${i}$.<br>
             Le réel $${e("\\dfrac{9\\pi}{4}")}$  est associé au point $B$ dans $${i}$.   `,this.reponse="\\dfrac{9\\pi}{4}"):(this.correction=`Le point $B$ est le point-image de $\\dfrac{\\pi}{4}$.<br>
            $\\dfrac{\\pi}{4}-2\\pi=-\\dfrac{7\\pi}{4}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{7\\pi}{4}")}$  est associé au point $B$ dans $${i}$.   `,this.reponse="-\\dfrac{7\\pi}{4}");break;case 4:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $C$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="]-\\pi\\,;\\,\\pi]"?(this.correction=`Le réel $${e("\\dfrac{\\pi}{3}")}$  est associé au point $C$ dans $${i}$.   `,this.reponse="\\dfrac{\\pi}{3}"):i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $C$ est le point-image de $\\dfrac{\\pi}{3}$.<br>
            $\\dfrac{\\pi}{3}+2\\pi=\\dfrac{7\\pi}{3}\\in ${i}$.<br>
             Le réel $${e("\\dfrac{7\\pi}{3}")}$  est associé au point $C$ dans $${i}$.   `,this.reponse="\\dfrac{7\\pi}{3}"):(this.correction=`Le point $C$ est le point-image de $\\dfrac{\\pi}{3}$.<br>
            $\\dfrac{\\pi}{3}-2\\pi=-\\dfrac{5\\pi}{3}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{5\\pi}{3}")}$  est associé au point $C$ dans $${i}$.   `,this.reponse="-\\dfrac{5\\pi}{3}");break;case 5:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$  a pour point-image le point $J$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="]-\\pi\\,;\\,\\pi]"?(this.correction=`Le réel $${e("\\dfrac{\\pi}{2}")}$  est associé au point $J$ dans $${i}$.   `,this.reponse="\\dfrac{\\pi}{2}"):i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $J$ est le point-image de $\\dfrac{\\pi}{2}$.<br>
            $\\dfrac{\\pi}{2}+2\\pi=\\dfrac{5\\pi}{2}\\in ${i}$.<br>
             Le réel $${e("\\dfrac{5\\pi}{2}")}$  est associé au point $J$ dans $${i}$.   `,this.reponse="\\dfrac{5\\pi}{2}"):(this.correction=`Le point $J$ est le point-image de $\\dfrac{\\pi}{2}$.<br>
            $\\dfrac{\\pi}{2}-2\\pi=-\\dfrac{3\\pi}{2}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{3\\pi}{2}")}$  est associé au point $J$ dans $${i}$.   `,this.reponse="-\\dfrac{3\\pi}{2}");break;case 6:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $D$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="]-\\pi\\,;\\,\\pi]"?(this.correction=`Le réel $${e("\\dfrac{2\\pi}{3}")}$  est associé au point $D$ dans $${i}$.   `,this.reponse="\\dfrac{2\\pi}{3}"):i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $D$ est le point-image de $\\dfrac{2\\pi}{3}$.<br>
            $\\dfrac{2\\pi}{3}+2\\pi=\\dfrac{8\\pi}{3}\\in ${i}$.<br>
             Le réel $${e("\\dfrac{8\\pi}{3}")}$  est associé au point $D$ dans $${i}$.   `,this.reponse="\\dfrac{8\\pi}{3}"):(this.correction=`Le point $D$ est le point-image de $\\dfrac{2\\pi}{3}$.<br>
            $\\dfrac{2\\pi}{3}-2\\pi=-\\dfrac{4\\pi}{3}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{4\\pi}{3}")}$  est associé au point $D$ dans $${i}$.   `,this.reponse="-\\dfrac{4\\pi}{3}");break;case 7:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $E$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="]-\\pi\\,;\\,\\pi]"?(this.correction=`Le réel $${e("\\dfrac{3\\pi}{4}")}$  est associé au point $E$ dans $${i}$.   `,this.reponse="\\dfrac{3\\pi}{4}"):i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $E$ est le point-image de $\\dfrac{3\\pi}{4}$.<br>
            $\\dfrac{3\\pi}{4}+2\\pi=\\dfrac{11\\pi}{4}\\in ${i}$.<br>
             Le réel $${e("\\dfrac{11\\pi}{4}")}$  est associé au point $E$ dans $${i}$.   `,this.reponse="\\dfrac{11\\pi}{4}"):(this.correction=`Le point $E$ est le point-image de $\\dfrac{3\\pi}{4}$.<br>
            $\\dfrac{3\\pi}{4}-2\\pi=-\\dfrac{5\\pi}{4}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{5\\pi}{4}")}$  est associé au point $E$ dans $${i}$.   `,this.reponse="-\\dfrac{5\\pi}{4}");break;case 8:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $F$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="]-\\pi\\,;\\,\\pi]"?(this.correction=`Le réel $${e("\\dfrac{5\\pi}{6}")}$  est associé au point $F$ dans $${i}$.   `,this.reponse="\\dfrac{5\\pi}{6}"):i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $F$ est le point-image de $\\dfrac{5\\pi}{6}$.<br>
            $\\dfrac{5\\pi}{6}+2\\pi=\\dfrac{17\\pi}{6}\\in ${i}$.<br>
             Le réel $${e("\\dfrac{17\\pi}{6}")}$  est associé au point $F$ dans $${i}$.   `,this.reponse="\\dfrac{17\\pi}{6}"):(this.correction=`Le point $F$ est le point-image de $\\dfrac{5\\pi}{6}$.<br>
            $\\dfrac{5\\pi}{6}-2\\pi=-\\dfrac{7\\pi}{6}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{7\\pi}{6}")}$  est associé au point $F$ dans $${i}$.   `,this.reponse="-\\dfrac{7\\pi}{6}");break;case 9:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $K$ ?<br>

        `,this.question+=`${$}`,i==="]-2\\pi\\,;\\,0]"?(this.correction=`Le réel $${e("-\\pi")}$ est associé au point $K$ dans $${i}$.   `,this.reponse="-\\pi"):(this.correction=`Le réel $\\pi$ est associé au point $K$ dans $${i}$.   `,this.reponse="\\pi");break;case 10:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\,;\\,0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $G$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le réel $${e("\\dfrac{7\\pi}{6}")}$  est associé au point $G$ dans $${i}$.   `,this.reponse="\\dfrac{7\\pi}{6}"):(this.correction=`Le point $G$ est le point-image de $\\dfrac{7\\pi}{6}$.<br>
            $\\dfrac{7\\pi}{6}-2\\pi=-\\dfrac{5\\pi}{6}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{5\\pi}{6}")}$  est associé au point $G$ dans $${i}$.   `,this.reponse="-\\dfrac{5\\pi}{6}");break;case 11:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\;\\ 0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $H$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le réel $${e("\\dfrac{5\\pi}{4}")}$  est associé au point $H$ dans $${i}$.   `,this.reponse="\\dfrac{5\\pi}{4}"):(this.correction=`Le point $H$ est le point-image de $\\dfrac{5\\pi}{4}$.<br>
            $\\dfrac{5\\pi}{4}-2\\pi=-\\dfrac{3\\pi}{4}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{3\\pi}{4}")}$  est associé au point $H$ dans $${i}$.   `,this.reponse="-\\dfrac{3\\pi}{4}");break;case 12:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\;\\ 0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $M$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le réel $${e("\\dfrac{4\\pi}{3}")}$  est associé au point $M$ dans $${i}$.   `,this.reponse="\\dfrac{4\\pi}{3}"):(this.correction=`Le point $M$ est le point-image de $\\dfrac{4\\pi}{3}$.<br>
            $\\dfrac{4\\pi}{3}-2\\pi=-\\dfrac{2\\pi}{3}\\in ${i}$.<br>
             Le réel $${e("-\\dfrac{2\\pi}{3}")}$  est associé au point $M$ dans $${i}$.   `,this.reponse="-\\dfrac{2\\pi}{3}");break;case 13:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\;\\ 0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $L$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le réel $${e("\\dfrac{3\\pi}{2}")}$  est associé au point $L$ dans $${i}$.   `,this.reponse="\\dfrac{3\\pi}{2}"):(this.correction=`Le réel $${e("-\\dfrac{\\pi}{2}")}$  est associé au point $L$ dans $${i}$.   `,this.reponse="-\\dfrac{\\pi}{2}");break;case 14:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\;\\ 0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $N$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $N$ est le point-image de $-\\dfrac{\\pi}{3}$.<br>
          $-\\dfrac{\\pi}{3}+2\\pi=\\dfrac{5\\pi}{3}\\in ${i}$.<br>
           Le réel $${e("\\dfrac{5\\pi}{3}")}$  est associé au point $N$ dans $${i}$.   `,this.reponse="\\dfrac{5\\pi}{3}"):(this.correction=`Le réel $${e("-\\dfrac{\\pi}{3}")}$  est associé au point $N$ dans $${i}$.   `,this.reponse="-\\dfrac{\\pi}{3}");break;case 15:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\;\\ 0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $P$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $P$ est le point-image de $-\\dfrac{\\pi}{4}$.<br>
          $-\\dfrac{\\pi}{4}+2\\pi=\\dfrac{7\\pi}{4}\\in ${i}$.<br>
           Le réel $${e("\\dfrac{7\\pi}{4}")}$  est associé au point $P$ dans $${i}$.   `,this.reponse="\\dfrac{7\\pi}{4}"):(this.correction=`Le réel $${e("-\\dfrac{\\pi}{4}")}$  est associé au point $P$ dans $${i}$.   `,this.reponse="-\\dfrac{\\pi}{4}");break;case 16:default:i=p(["[0\\,;\\,2\\pi[","]-\\pi\\,;\\,\\pi]","[\\pi\\,;\\,3\\pi[","]-2\\pi\\;\\ 0]"]),this.question=`Quel réel de $${i}$ a pour point-image le point $Q$ ?<br>

        `,this.question+=`${$}`,i==="[0\\,;\\,2\\pi["||i==="[\\pi\\,;\\,3\\pi["?(this.correction=`Le point $Q$ est le point-image de $-\\dfrac{\\pi}{6}$.<br>
          $-\\dfrac{\\pi}{6}+2\\pi=\\dfrac{11\\pi}{6}\\in ${i}$.<br>
           Le réel $${e("\\dfrac{11\\pi}{6}")}$  est associé au point $Q$ dans $${i}$.   `,this.reponse="\\dfrac{11\\pi}{6}"):(this.correction=`Le réel $${e("-\\dfrac{\\pi}{6}")}$  est associé au point $Q$ dans $${i}$.   `,this.reponse="-\\dfrac{\\pi}{6}");break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{di as dateDeModifImportante,ci as dateDePublication,ui as default,ai as interactifReady,ni as interactifType,fi as refs,oi as titre,li as uuid};
