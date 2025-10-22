import{m as n,y as t,a as r,r as s}from"./embellissements-BYV7mIDn.js";import o from"./ExerciceQcmA-CHnTcRvH.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./ExerciceQcm-DOkcCRBu.js";import"./qcm-BQR8Ns0N.js";import"./lists-i1i4IA1M.js";import"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const k="8d642",A={"fr-fr":["1A-C13-2"],"fr-ch":[]},y=!0,E="qcm",w="true",C="qcmMono",R="Exprimer une variable en fonction des autres",T="05/08/2025";class V extends o{versionOriginale=()=>{this.enonce=`Soient $a$, $b$, $c$ et $d$ quatre nombres (avec $d$ non nul) vérifiant l'égalité :<br>
    $a = b - cd$.<br>
    Exprimer $c$ en fonction de $a$, $b$ et $d$.`,this.correction=`On isole $c$ dans un membre de l'égalité :<br>
    $\\begin{aligned}
    a &= b - cd\\\\
    a - b &= -cd\\\\
    -a + b &= cd\\\\
    \\dfrac{-a + b}{d} &= c
    \\end{aligned}$
    <br>Une expression de $c$ en fonction de $a$, $b$ et $d$ est $${n("c = \\dfrac{b - a}{d}")}$.`,this.reponses=["$c = \\dfrac{b - a}{d}$","$c = \\dfrac{a - b}{d}$","$c = d(b - a)$","$c = \\dfrac{b + a}{d}$"]};versionAleatoire=()=>{const i=[t(["a","b","c","e"]),t(["x","y","z","w"]),t(["u","v","w","t"]),t(["A","B","C","E"]),t(["R","S","T","U"]),t(["I","J","K","L"]),t(["c","g","e","f"]),t(["c","m","f","e"]),t(["K","L","M","N"]),t(["r","s","t","u"]),t(["U","V","W","X"])],$=r(i);switch(s(1,12)){case 1:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = ${$[1]} - ${$[2]}${$[3]}$.<br>
        Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]} - ${$[2]}${$[3]}\\\\
        ${$[0]} - ${$[1]} &= -${$[2]}${$[3]}\\\\
        -${$[0]} + ${$[1]} &= ${$[2]}${$[3]}\\\\
        \\dfrac{-${$[0]} + ${$[1]}}{${$[3]}} &= ${$[2]}
        \\end{aligned}$
        <br>Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est $${n($[2]+" = \\dfrac{"+$[1]+" - "+$[0]+"}{"+$[3]+"}")}$.`,this.reponses=[`$${$[2]} = \\dfrac{${$[1]} - ${$[0]}}{${$[3]}}$`,`$${$[2]} = \\dfrac{${$[0]} - ${$[1]}}{${$[3]}}$`,`$${$[2]} = ${$[3]}(${$[1]} - ${$[0]})$`,`$${$[2]} = \\dfrac{${$[1]} + ${$[0]}}{${$[3]}}$`];break}case 2:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[2]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = ${$[1]} - ${$[2]}${$[3]}$.<br>
        Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]} - ${$[2]}${$[3]}\\\\
        ${$[0]} - ${$[1]} &= -${$[2]}${$[3]}\\\\
        -${$[0]} + ${$[1]} &= ${$[2]}${$[3]}\\\\
        \\dfrac{-${$[0]} + ${$[1]}}{${$[2]}} &= ${$[3]}
        \\end{aligned}$
        <br>Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est $${n($[3]+" = \\dfrac{"+$[1]+" - "+$[0]+"}{"+$[2]+"}")}$.`,this.reponses=[`$${$[3]} = \\dfrac{${$[1]} - ${$[0]}}{${$[2]}}$`,`$${$[3]} = \\dfrac{${$[0]} - ${$[1]}}{${$[2]}}$`,`$${$[3]} = ${$[2]}(${$[1]} - ${$[0]})$`,`$${$[3]} = \\dfrac{${$[1]} + ${$[0]}}{${$[2]}}$`];break}case 3:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = ${$[1]} - ${$[2]}${$[3]}$.<br>
         Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]} - ${$[2]}${$[3]}\\\\
        ${$[0]} + ${$[2]}${$[3]} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est $${n($[1]+" = "+$[0]+" + "+$[2]+$[3])}$.`,this.reponses=[`$${$[1]} = ${$[0]} + ${$[2]}${$[3]}$`,`$${$[1]} = ${$[0]} - ${$[2]}${$[3]}$`,`$${$[1]} = \\dfrac{${$[0]}}{${$[2]}${$[3]}}$`,`$${$[1]} = ${$[0]} \\times ${$[2]}${$[3]}$`];break}case 4:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[2]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = ${$[1]}${$[2]} + ${$[3]}$.<br>
        Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]}${$[2]} + ${$[3]}\\\\
        ${$[0]} - ${$[3]} &= ${$[1]}${$[2]}\\\\
        \\dfrac{${$[0]} - ${$[3]}}{${$[2]}} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est $${n($[1]+" = \\dfrac{"+$[0]+" - "+$[3]+"}{"+$[2]+"}")}$.`,this.reponses=[`$${$[1]} = \\dfrac{${$[0]} - ${$[3]}}{${$[2]}}$`,`$${$[1]} = \\dfrac{${$[0]} + ${$[3]}}{${$[2]}}$`,`$${$[1]} = ${$[2]}(${$[0]} - ${$[3]})$`,`$${$[1]} = \\dfrac{${$[3]} - ${$[0]}}{${$[2]}}$`];break}case 5:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres vérifiant l'égalité suivante :`;this.enonce=`${e} $${$[0]} = ${$[1]}${$[2]} + ${$[3]}$.<br>
         Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]}${$[2]} + ${$[3]}\\\\
        ${$[0]} - ${$[1]}${$[2]} &= ${$[3]}
        \\end{aligned}$
        <br>Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est $${n($[3]+" = "+$[0]+" - "+$[1]+$[2])}$.`,this.reponses=[`$${$[3]} = ${$[0]} - ${$[1]}${$[2]}$`,`$${$[3]} = ${$[0]} + ${$[1]}${$[2]}$`,`$${$[3]} = \\dfrac{${$[0]}}{${$[1]}${$[2]}}$`,`$${$[3]} = ${$[0]} \\times ${$[1]}${$[2]}$`];break}case 6:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}$.<br>
        Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}\\\\
        ${$[0]} \\times ${$[3]} &= ${$[1]} + ${$[2]}\\\\
        ${$[0]} \\times ${$[3]} - ${$[2]} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est $${n($[1]+" = "+$[3]+" \\times "+$[0]+" - "+$[2])}$.`,this.reponses=[`$${$[1]} = ${$[3]} \\times ${$[0]} - ${$[2]}$`,`$${$[1]} = ${$[3]} \\times ${$[0]} + ${$[2]}$`,`$${$[1]} = \\dfrac{${$[0]} - ${$[2]}}{${$[3]}}$`,`$${$[1]} = ${$[0]} - ${$[2]} \\times ${$[3]}$`];break}case 7:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}$.<br>
         Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}\\\\
        ${$[0]} \\times ${$[3]} &= ${$[1]} + ${$[2]}\\\\
        ${$[0]} \\times ${$[3]} - ${$[1]} &= ${$[2]}
        \\end{aligned}$
        <br>Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est $${n($[2]+" = "+$[3]+" \\times "+$[0]+" - "+$[1])}$.`,this.reponses=[`$${$[2]} = ${$[3]} \\times ${$[0]} - ${$[1]}$`,`$${$[2]} = ${$[3]} \\times ${$[0]} + ${$[1]}$`,`$${$[2]} = \\dfrac{${$[0]} - ${$[1]}}{${$[3]}}$`,`$${$[2]} = ${$[0]} - ${$[1]} \\times ${$[3]}$`];break}case 8:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ et $${$[0]}$ non nuls) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}$.<br>
         Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}\\\\
        ${$[0]} \\times ${$[3]} &= ${$[1]} + ${$[2]}\\\\
        ${$[3]} &= \\dfrac{${$[1]} + ${$[2]}}{${$[0]}}
        \\end{aligned}$
        <br>Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est $${n($[3]+" = \\dfrac{"+$[1]+" + "+$[2]+"}{"+$[0]+"}")}$.`,this.reponses=[`$${$[3]} = \\dfrac{${$[1]} + ${$[2]}}{${$[0]}}$`,`$${$[3]} = \\dfrac{${$[1]} - ${$[2]}}{${$[0]}}$`,`$${$[3]} = ${$[0]}(${$[1]} + ${$[2]})$`,`$${$[3]} = \\dfrac{${$[0]}}{${$[1]} + ${$[2]}}$`];break}case 9:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = (${$[1]} + ${$[2]})${$[3]}$.<br>
         Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= (${$[1]} + ${$[2]})${$[3]}\\\\
        ${$[0]} &= ${$[1]}${$[3]} + ${$[2]}${$[3]}\\\\
        ${$[0]} - ${$[2]}${$[3]} &= ${$[1]}${$[3]}\\\\
        \\dfrac{${$[0]} - ${$[2]}${$[3]}}{${$[3]}} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et $${$[2]}$ est $${n($[1]+" = \\dfrac{"+$[0]+"}{"+$[3]+"} - "+$[2])}$.`,this.reponses=[`$${$[1]} = \\dfrac{${$[0]}}{${$[3]}} - ${$[2]}$`,`$${$[1]} = \\dfrac{${$[0]}}{${$[3]}} + ${$[2]}$`,`$${$[1]} = ${$[0]} - ${$[2]}${$[3]}$`,`$${$[1]} = \\dfrac{${$[0]} + ${$[2]}${$[3]}}{${$[3]}}$`];break}case 10:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[1]} + ${$[2]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = (${$[1]} + ${$[2]})${$[3]}$.<br>
         Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= (${$[1]} + ${$[2]})${$[3]}\\\\
        \\dfrac{${$[0]}}{${$[1]} + ${$[2]}} &= ${$[3]}
        \\end{aligned}$
        <br>Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est $${n($[3]+" = \\dfrac{"+$[0]+"}{"+$[1]+" + "+$[2]+"}")}$.`,this.reponses=[`$${$[3]} = \\dfrac{${$[0]}}{${$[1]} + ${$[2]}}$`,`$${$[3]} = \\dfrac{${$[0]}}{${$[1]} - ${$[2]}}$`,`$${$[3]} = ${$[0]}(${$[1]} + ${$[2]})$`,`$${$[3]} = \\dfrac{${$[1]} + ${$[2]}}{${$[0]}}$`];break}case 11:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = (${$[1]} - ${$[2]})${$[3]}$.<br>
        Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= (${$[1]} - ${$[2]})${$[3]}\\\\
        ${$[0]} &= ${$[1]}${$[3]} - ${$[2]}${$[3]}\\\\
        ${$[0]} + ${$[2]}${$[3]} &= ${$[1]}${$[3]}\\\\
        \\dfrac{${$[0]} + ${$[2]}${$[3]}}{${$[3]}} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et $${$[2]}$ est $${n($[1]+" = \\dfrac{"+$[0]+"}{"+$[3]+"} + "+$[2])}$.`,this.reponses=[`$${$[1]} = \\dfrac{${$[0]}}{${$[3]}} + ${$[2]}$`,`$${$[1]} = \\dfrac{${$[0]}}{${$[3]}} - ${$[2]}$`,`$${$[1]} = ${$[0]} + ${$[2]}${$[3]}$`,`$${$[1]} = \\dfrac{${$[0]} - ${$[2]}${$[3]}}{${$[3]}}$`];break}case 12:default:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = (${$[1]} - ${$[2]})${$[3]}$.<br>
        Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= (${$[1]} - ${$[2]})${$[3]}\\\\
        ${$[0]} &= ${$[1]}${$[3]} - ${$[2]}${$[3]}\\\\
        ${$[0]} - ${$[1]}${$[3]} &= -${$[2]}${$[3]}\\\\
        \\dfrac{${$[0]} - ${$[1]}${$[3]}}{-${$[3]}} &= ${$[2]}\\\\
        \\dfrac{-${$[0]} + ${$[1]}${$[3]}}{${$[3]}} &= ${$[2]}
        \\end{aligned}$
        <br>Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est $${n($[2]+" = "+$[1]+" - \\dfrac{"+$[0]+"}{"+$[3]+"}")}$.`,this.reponses=[`$${$[2]} = ${$[1]} - \\dfrac{${$[0]}}{${$[3]}}$`,`$${$[2]} = ${$[1]} + \\dfrac{${$[0]}}{${$[3]}}$`,`$${$[2]} = \\dfrac{${$[0]} - ${$[1]}${$[3]}}{${$[3]}}$`,`$${$[2]} = ${$[0]} - ${$[1]}${$[3]}$`];break}}};constructor(){super(),this.versionAleatoire()}}export{w as amcReady,C as amcType,T as dateDePublication,V as default,y as interactifReady,E as interactifType,A as refs,R as titre,k as uuid};
