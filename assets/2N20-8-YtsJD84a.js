import{af as b,r as i,e as $,l as p}from"./embellissements-BYV7mIDn.js";import{E as d}from"./Exercice-DtXhjCyI.js";import"mathjs";import"decimal.js";import"katex";import"earcut";import"roughjs";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"crypto-js";import"seedrandom";const A="Déterminer la parité d'une expression",I="3ec5c",E={"fr-fr":["2N20-8"],"fr-ch":["11FA4-2"]};class N extends d{constructor(){super(),this.consigne="Soit $n$ un entier naturel.",this.nbQuestions=4,this.nbCols=2,this.nbColsCorr=2}nouvelleVersion(){const a=[1,2,3];let m;const u=b(a,this.nbQuestions);for(let t=0,o=0;t<this.nbQuestions&&o<50;){let e=0,n=0,s="",r="";switch(m=u[t],m){case 1:e=i(2,6),n=i(2,11,[4,8,9]),s=`Que peut-on dire de la parité de ${e}$n$ ?`,e%2===0&&e!==2&&(r=`${e}$n=2\\times ${$(e/2)}n$<br>
                        Comme $${$(e/2)}n$ est un entier naturel, ${e}$n$ s'écrit comme le double d'un entier naturel, il est donc pair`),e===2&&(r=`${e}$n=2\\times n$<br>
                        Comme $n$ est un entier naturel, ${e}$n$ s'écrit comme le double d'un entier naturel, il est donc pair`),e===3&&(r=`${e}$n=2n+n$<br>
                            Comme $n$ est un entier naturel, $2 n$ est un nombre pair.<br>
                            Si $n$ est pair, $2n+n$ est la somme de deux nombres pairs, il sera donc pair. <br>
                            Si $n$ est impair, $2n+n$ est la somme d'un nombre pair et d'un impair, il sera donc impair. <br>
                            Au final, ${e}$n$ a donc la même parité que $n$.`),e%2!==0&&e!==3&&(r=`${e}$n=2\\times ${$((e-1)/2)}n+n$<br>
                            Comme $${$((e-1)/2)}n$ est un entier naturel, $2\\times ${$((e-1)/2)}n$ est un nombre pair.<br>
                            Si $n$ est pair, $2\\times${$((e-1)/2)}n+n$ est la somme de deux nombres pairs, il sera donc pair. <br>
                            Si $n$ est impair, $2\\times${$((e-1)/2)}n+n$ est la somme d'un nombre pair et d'un impair, il sera donc impair. <br>
                            Au final, ${e}$n$ a donc la même parité que $n$.`);break;case 2:e=i(2,6),n=i(2,11),s=`Que peut-on dire de la parité de $${e}n+${n}$ ?`,e%2===0&&n%2===0&&e!==2&&(r=`$${e}n+${n}=2\\times ${$(e/2)}n+${n}$<br>
                        Comme $${$(e/2)}n$ est un entier naturel, $2\\times ${$(e/2)}n$ est donc un nombre pair<br>
                        ${n} est aussi un nombre pair.
                        $${e}n+${n}$ est donc la somme de deux nombres pairs, il est donc pair`),e%2===0&&n%2!==0&&e!==2&&(r=`$${e}n+${n}=2\\times ${$(e/2)}n+${n}$<br>
                        Comme $${$(e/2)}n$ est un entier naturel, $2\\times ${$(e/2)}n$ est donc un nombre pair<br>
                        ${n} est un nombre impair.
                        $${e}n+${n}$ est donc la somme d'un nombre pair et d'un nombre impair. Il est donc impair`),e===2&&n%2===0&&(r=`Comme $n$ est un entier naturel, $2n$ est un nombre pair<br>
                        ${n} est aussi un nombre pair.
                        $${e}n+${n}$ est donc la somme de deux nombres pairs, il est donc pair`),e===2&&n%2!==0&&(r=`
                        Comme $n$ est un entier naturel, $2n$ est un nombre pair<br>
                        ${n} est un nombre impair.<br>
                        $2n+${n}$ est donc la somme d'un nombre pair et d'un nombre impair. Il est donc impair`),e===3&&n%2===0&&(r=`$${e}n+${n}=2n+n+${n}$<br>
                        Comme $n$ est un entier naturel, $2n$ est un nombre pair.<br>
                        ${n} est un nombre pair. <br>
                        $2n + ${n}$ est donc un nombre pair. <br>
                        $${e}n+${n}=2n+${n}+n$ est donc la somme d'un nombre pair et de $n$, il a donc la même parité que $n$.`),e===3&&n%2!==0&&(r=`$${e}n+${n}=2n+n+${n}$<br>
                        Comme $n$ est un entier naturel, $2n$ est un nombre pair.<br>
                        ${n} est un nombre impair. <br>
                        $2n + ${n}$ est donc un nombre impair. <br>
                        $${e}n+${n}=2n+${n}+n$ est donc la somme d'un nombre impair et de $n$, il a donc la parité contraire de $n$.`),e%2!==0&&n%2===0&&e!==3&&(r=`${e}$n=2\\times ${$((e-1)/2)}n+n+${n}$<br>
                        Comme $${$((e-1)/2)}n$ est un entier naturel, $2 ${$((e-1)/2)}n$ est donc un nombre pair<br>
                        ${n} est aussi un nombre pair.<br>
                        $${$((e-1)/2)}n +${n}$ est donc un nombre pair.<br>
                        $${e}n+${n}=2\\times${$((e-1)/2)}n+${n}+n$ est donc la somme d'un nombre pair et de $n$, il a donc la même parité que $n$.`),e%2!==0&&n%2!==0&&e!==3&&(r=`$${e}n+${n}=2\\times ${$((e-1)/2)}n+n+${n}$<br>
                        Comme $${$((e-1)/2)}n$ est un entier naturel, $2 \\times ${$((e-1)/2)}n$ est donc un nombre pair<br>
                        ${n} est un nombre impair.<br>
                        $2\\times${$((e-1)/2)}n +${n}$ est une somme d'un nombre pair et d'un nombre impair, c'est donc un nombre impair.<br>
                        $${e}n+${n}=2\\times${$((e-1)/2)}n+${n}+n$ est donc la somme d'un nombre impair et de $n$,  il a donc la parité contraire de $n$.`);break;case 3:e=i(2,6),n=i(2,11),s=`Que peut-on dire de la parité de $${e}n^{2}$ ?`,e===2&&(r=`
                        Comme $n^{2}$ est un entier naturel, $2n^{2}$ est un nombre pair<br>
                        `),e%2===0&&e!==2&&(r=`$${e}n^{2}=2\\times ${$(e/2)}n^{2}$<br>
                        Comme $${$(e/2)}n^{2}$ est un entier naturel, $2\\times ${$(e/2)}n^{2}$ est donc un nombre pair<br>
                        `),e%2===2&&(r=`Comme $n^{2}$ est un entier naturel, $2n^{2}$ est un nombre pair<br>
                        `),e%2!==0&&e!==3&&(r=`$${e}n^{2}=2\\times ${$((e-1)/2)}n^{2}+n^{2}$<br>
                        Comme $${$((e-1)/2)}n^{2}$ est un entier naturel, $2\\times ${$((e-1)/2)}n^{2}$ est donc un nombre pair<br>
                        $${e}n^{2}$ est donc la somme d'un nombre pair et de $n^{2}$. Il a donc la même parité que $n^{2}$<br>
                        Or, on sait d'après le cours (démonstration fondamentale) que $n^{2}$ et $n$ ont la même parité.<br>
                        Donc $${e}n^{2}$ a la même parité que $n$`);break}this.listeQuestions.indexOf(s)===-1&&(this.listeQuestions[t]=s,this.listeCorrections[t]=r,t++),o++}p(this)}}export{N as default,E as refs,A as titre,I as uuid};
