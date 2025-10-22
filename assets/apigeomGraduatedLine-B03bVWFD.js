import{S as $}from"./main-Vl0czKSA.js";import{G as k,g as b}from"./exerciseMethods-CtbYPwln.js";import{d as t}from"./embellissements-BYV7mIDn.js";function I({xMin:n,xMax:s,scale:i=1,points:r}){const e=new $({xMin:n-.2/i,yMin:-1.5,width:650,height:80,dy:10,dx:t(1/(10*i),6),xScale:3*i,snapGrid:!0});e.setToolbar({tools:["POINT","DRAG","REMOVE"],position:"top"});const m=e.xMax*e.pixelsPerUnit*e.scale*e.xScale,h=s*e.pixelsPerUnit*e.scale*e.xScale;m-h<15&&(s=(m-15)/(e.pixelsPerUnit*e.scale*e.xScale)),new k(e,{min:n,max:s,step:t(1/i,6),stepBis:t(1/(10*i),6)}).draw();const o=t(1/i,6),a=b(Math.ceil(n/o)*o);let c=`
\\bigskip
    \\begin{tikzpicture}[x=2.2mm]
    \\draw[-{Latex[round]},thick] (0,0) -- (72,0);
    \\foreach \\x in {0,1,...,70} \\draw[thick] ([yshift=-0.8mm]\\x,0) -- ([yshift=0.8mm]\\x,0);
    \\foreach \\x [count=\\i from 0] in {0,10,...,70} \\draw[ultra thick] ([yshift=-1.5mm]\\x,0) coordinate (a\\i) -- ([yshift=1.5mm]\\x,0);
    \\foreach \\x [count=\\i from 0] in {${t(a)},${t(a+1*o)},${t(a+2*o)},${t(a+3*o)},${t(a+4*o)},${t(a+5*o)},${t(a+6*o)},${t(a+7*o)}} {
      \\node[below=2mm of a\\i,inner sep=0pt,font=\\small] {$\\num{\\x}$};
    }`;if(r!==void 0){const x=t((r[0].x-n)*i*10),l=t((r[1].x-n)*i*10),d=t((r[2].x-n)*i*10),p=r[0].label,u=r[1].label,f=r[2].label;c+=`
\\tkzText[above=2mm](${x},0){${p}}
      
\\tkzText[above=2mm](${l},0){${u}}
      
\\tkzText[above=2mm](${d},0){${f}}
      
\\tkzDrawPoint[shape=cross out, size=5pt, thick](${x},0)
      
\\tkzDrawPoint[shape=cross out, size=5pt, thick](${l},0)
      
\\tkzDrawPoint[shape=cross out, size=5pt, thick](${d},0)`}return c+=`
\\end{tikzpicture}`,{figure:e,latex:c}}export{I as a};
