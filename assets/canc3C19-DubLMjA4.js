import $ from"./ExerciceSimple-CWWOU0FG.js";import{r as o,a as r,e as i,m as n}from"./embellissements-BYV7mIDn.js";import{a as c,p as l}from"./Personne-DRrbQFAY.js";import{K as p}from"./Exercice-DtXhjCyI.js";import"./exerciseMethods-CtbYPwln.js";import"./index-BUDQz6-w.js";import"katex";import"mathjs";import"crypto-js";import"seedrandom";import"decimal.js";import"earcut";import"roughjs";const y="Résoudre un problème avec une multiplication",L=!0,R="mathLive",V="31/10/2024",k="a24fb",D={"fr-fr":["canc3C19"],"fr-ch":[]};class U extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.spacing=1.5,this.formatChampTexte=p.clavierDeBase}nouvelleVersion(){switch(o(1,6)){case 1:{const s=l(),e=o(4,9),t=o(3,9);this.reponse=i(e*t,0),this.question=`Un fleuriste vend des bouquets de roses. Dans
chaque bouquet, il y a $${e}$ roses. <br>
${s} achète $${t}$ bouquets.<br>
Combien a-t-il de roses ?`,this.correction=`${s} achète $${t}$ bouquets de $${e}$ roses chacun.<br>
          $${e} \\times ${t}=${this.reponse}$<br>
          ${s} a $${n(this.reponse)}$ roses en tout.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ roses",this.optionsChampTexte={texteApres:"roses"}}break;case 2:{const s=r([25,50]),e=s===25?r([4,5,6,8,10]):o(4,12);this.reponse=i(s*e,0),this.question=`Une nageuse s'entraîne dans une piscine dont la longueur est  $${s}$ mètres.<br>
          Elle a parcouru $${e}$ longueurs.<br>
Combien de mètres a-t-elle parcouru ?`,this.correction=`La nageuse a parcouru $${e}$ longueurs d'une piscine de $${s}$ mètres.<br>
          $${s} \\times ${e}=${this.reponse}$ <br>          
          Elle a parcouru $${n(this.reponse)}$ mètres au total.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ m",this.optionsChampTexte={texteApres:"m"}}break;case 3:{const s=o(2,4)*100+r([50,0]),e=o(5,9);this.reponse=i(s*e,0),this.question=`Un collège achète $${e}$ VTT pour l'association sportive.<br>
           Chaque VTT coûte $${s}$ euros.<br>
Combien cela coûte-t-il pour le collège ?`,this.correction=`Le collège achète $${e}$ VTT à $${s}$ € l'unité.<br>
          $${s} \\times ${e}=${this.reponse}$<br>
          Le coût pour le collège est de  $${n(this.reponse)}$ €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break;case 4:{const s=o(4,9),e=o(5,9)*10;this.reponse=i(s*e,0),this.question=`Dans une salle, il y a $${s}$ rangées de $${e}$ chaises.<br>
          Combien y a-t-il de places assises dans cette salle ?`,this.correction=`Il y a $${s}$ rangées de $${e}$ chaises chacune.<br>
          $${s} \\times ${e}=${this.reponse}$<br>          
          Il y a $${n(this.reponse)}$ places assises dans cette salle.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ places assises",this.optionsChampTexte={texteApres:"places assises"}}break;case 5:{const e=r([[1e3,"mille"],[2e3,"deux mille"],[3e3,"trois mille"],[4e3,"quatre mille"],[5e3,"cinq mille"],[6e3,"six mille"],[7e3,"sept mille"],[8e3,"huit mille"],[9e3,"neuf mille"]]),t=o(9,25);this.reponse=i(e[0]*t,0),this.question=`Pour un concert, ${e[1]} billets ont été vendus. <br>
          Les places sont toutes au tarif de $${t}$ euros.<br>
          Quelle est la recette totale ? `,this.correction=`Les ${e[1]} billets ont été vendus au tarif unique de $${t}$ €.<br>        
        $${i(e[0],0)} \\times ${i(t,0)}=${this.reponse}$<br>
        La recette totale est  $${n(this.reponse)}$ €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €",this.optionsChampTexte={texteApres:"€"}}break;case 6:{const s=c(),t=r([[4,"trois"],[5,"quatre"],[6,"cinq"],[7,"six"]]),a=o(1,2)*10+o(1,9);this.reponse=i(t[0]*a,0),this.question=`${s} et ses ${t[1]} amis se partagent équitablement des bonbons.<br>
           Chacun en a eu $${a}$.<br>
Combien de bonbons avaient-ils à partager ?`,this.correction=`Chacun des ${t[0]} enfants (${s} et ses ${t[1]} amis) a le même nombre de bonbons.<br>
          $${i(t[0],0)} \\times ${a}=${this.reponse}$<br>
          Le nombre de bonbons à partager est $${n(this.reponse)}$.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ bonbons",this.optionsChampTexte={texteApres:"bonbons"}}break}this.interactif&&(this.question+="<br>")}}export{V as dateDePublication,U as default,L as interactifReady,R as interactifType,D as refs,y as titre,k as uuid};
