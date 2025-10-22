import{a as u,r as a,Y as i,t as l,_ as x,l as d}from"./embellissements-BYV7mIDn.js";import{E as b}from"./Exercice-DtXhjCyI.js";import{p as m}from"./qcm-BQR8Ns0N.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const Q="Reconnaitre des vecteurs colinéaires (V/F)",k=!0,M="qcm",S="30/10/2021",I="2ba42",R={"fr-fr":["can2G12"],"fr-ch":["2mQCM-5"]};class w extends b{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){let e,t,r,s,$;for(let v=0,n,o,c,p=0;v<this.nbQuestions&&p<50;){switch(u([1,2,3,4,5])){case 1:e=a(-3,3,0)*2,t=a(-3,3,[0,e/2])*2,$=u([.5,1.5,3,2.5,3.5])*u([-1,1]),r=$*e,s=$*t,n=`Dans un repère, on considère les vecteurs $\\vec{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r} \\\\ ${s} \\end{pmatrix}$.<br>
        Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${s})$.<br>

        Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[v]={enonce:n,propositions:[{texte:"Vrai",statut:e*s===t*r},{texte:"Faux",statut:e===50}],options:{ordered:!0,radio:!0}},c=m(this,v),n+=c.texte,o=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
        sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
        Si $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
        alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
        En utilisant les données de l'énoncé, on obtient : <br>
        $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
        ${i(e)}\\times ${i(s)}-${i(t)}\\times ${i(r)}
        =${e*s}-${i(t*r)}=${e*s-t*r}$.<br>
        On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires, il fallait donc cocher "${l("Vrai")}".`,o+=x(`<br><br> Mentalement : <br>
        On compare les produits en croix : $${i(e)}\\times ${i(s)}=${e*s}$ et $${i(t)}\\times ${i(r)}=${t*r}$.<br>
        Ils sont égaux, donc les vecteurs sont colinéaires.`,"blue");break;case 2:r=a(-3,3,0)*2,s=a(-3,3,[0,r/2])*2,$=u([.5,1.5,3,2.5,3.5])*u([-1,1]),e=$*r,t=$*s,n=`Dans un repère, on considère les vecteurs $\\overrightarrow{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}${r} \\\\ ${s} \\end{pmatrix}$.<br>
        Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${s})$.<br>
       
        Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[v]={enonce:n,propositions:[{texte:"Vrai",statut:e*s===t*r},{texte:"Faux",statut:e===50}],options:{ordered:!0}},c=m(this,v),n+=c.texte,o=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
            sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
            Si $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
            alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
            En utilisant les données de l'énoncé, on obtient : <br>
            $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
            ${i(e)}\\times ${i(s)}-${i(t)}\\times ${i(r)}
            =${e*s}-${i(t*r)}=${e*s-t*r}$.<br>
            On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires, il fallait donc cocher "${l("Vrai")}".`,o+=x(`<br><br> Mentalement : <br>
            On compare les produits en croix : $${i(e)}\\times ${i(s)}=${e*s}$ et $${i(t)}\\times ${i(r)}=${t*r}$.<br>
            Ils sont égaux, donc les vecteurs sont colinéaires.`,"blue");break;case 3:e=a(-3,3,0)*2,t=a(-3,3,[0,e/2])*2,$=u([.5,1.5,3,2.5,3.5])*u([-1,1]),r=$*e,s=$*t+1,n=`Dans un repère, on considère les vecteurs $\\vec{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r} \\\\ ${s} \\end{pmatrix}$.<br>
            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${s})$.<br>

            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[v]={enonce:n,propositions:[{texte:"Vrai",statut:e===100},{texte:"Faux",statut:e*s!==t*r}],options:{ordered:!0}},c=m(this,v),n+=c.texte,o=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
            sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
            Si  $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
            alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
            En utilisant les données de l'énoncé, on obtient : <br>
            $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
            ${i(e)}\\times ${i(s)}-${i(t)}\\times ${i(r)}
            =${e*s}-${i(t*r)}=${e*s-t*r}\\neq0$.<br>
            On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, il fallait donc cocher "${l("Faux")}".`,o+=x(`<br><br> Mentalement : <br>
            On compare les produits en croix : $${i(e)}\\times ${i(s)}=${e*s}$ et $${i(t)}\\times ${i(r)}=${t*r}$.<br>
            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.`,"blue");break;case 4:e=a(-3,3,0)*2,t=a(-3,3,[0,e/2])*2,$=u([.5,1.5,3,2.5,3.5])*u([-1,1]),r=$*e+1,s=$*t,n=`Dans un repère, on considère les vecteurs $\\vec{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r} \\\\ ${s} \\end{pmatrix}$.<br>
            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${s})$.<br>

            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[v]={enonce:n,propositions:[{texte:"Vrai",statut:e===100},{texte:"Faux",statut:e*s!==t*r}],options:{ordered:!0}},c=m(this,v),n+=c.texte,o=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
            sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
            Si  $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
            alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
            En utilisant les données de l'énoncé, on obtient : <br>
            $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
            ${i(e)}\\times ${i(s)}-${i(t)}\\times ${i(r)}
            =${e*s}-${i(t*r)}=${e*s-t*r}\\neq0$.<br>
            On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, il fallait donc cocher "${l("Faux")}".`,o+=x(`<br><br> Mentalement : <br>
            On compare les produits en croix : $${i(e)}\\times ${i(s)}=${e*s}$ et $${i(t)}\\times ${i(r)}=${t*r}$.<br>
            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.`,"blue");break;case 5:default:e=a(-3,3,0)*2,t=a(-3,3,[0,e/2])*2,$=u([.5,1.5,3,2.5,3.5])*u([-1,1]),r=$*e,s=$*t*-1,n=`Dans un repère, on considère les vecteurs $\\vec{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r} \\\\ ${s} \\end{pmatrix}$.<br>
            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${s})$.<br>
        
            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[v]={enonce:n,propositions:[{texte:"Vrai",statut:e===100},{texte:"Faux",statut:e*s!==t*r}],options:{ordered:!0}},c=m(this,v),n+=c.texte,o=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
            sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
            Si  $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
            alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
            En utilisant les données de l'énoncé, on obtient : <br>
            $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
            ${i(e)}\\times ${i(s)}-${i(t)}\\times ${i(r)}
            =${e*s}-${i(t*r)}=${e*s-t*r}\\neq0$.<br>
            On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, il fallait donc cocher "${l("Faux")}".`,o+=x(`<br><br> Mentalement : <br>
            On compare les produits en croix : $${i(e)}\\times ${i(s)}=${e*s}$ et $${i(t)}\\times ${i(r)}=${t*r}$.<br>
            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.`,"blue");break}this.questionJamaisPosee(v,e,t,r,s)&&(this.listeQuestions[v]=n,this.listeCorrections[v]=o,v++),this.canReponseACompleter=c.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),p++}d(this)}}export{S as dateDePublication,w as default,k as interactifReady,M as interactifType,R as refs,Q as titre,I as uuid};
