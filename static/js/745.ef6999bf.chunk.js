"use strict";(self.webpackChunksam_azimi_portfolio=self.webpackChunksam_azimi_portfolio||[]).push([[745],{2745:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(2791),a=n(457),o=n(9898),l=n(6695),c=n(4802),i=n(8185),r=n(184);const u={buttonStyles:{margin:"5px"}};function d(){const[e,t]=(0,s.useState)(),[a,d]=(0,s.useState)(1),[h,b]=(0,s.useState)(null);(0,s.useEffect)((()=>{n.e(385).then(n.t.bind(n,5385,17)).then((e=>b(e.default)))}),[]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{style:u.buttonStyles,className:"btn btn-outline-secondary",onClick:()=>{a>1&&d(a-1)},children:[(0,r.jsx)(i.SMk,{})," Previous Page"]}),(0,r.jsxs)("button",{style:u.buttonStyles,className:"btn btn-outline-secondary",onClick:()=>{a<e&&d(a+1)},children:[" Next Page ",(0,r.jsx)(i.Iq5,{})]}),(0,r.jsxs)("button",{style:u.buttonStyles,className:"btn btn-outline-secondary",onClick:()=>{fetch(h).then((e=>e.blob())).then((e=>{(0,c.saveAs)(e,"Sam_Azimi_Resume.pdf")})).catch((e=>{console.error("Error fetching the PDF file:",e)}))},children:[" ",(0,r.jsx)(i.eEq,{})," Download"]}),(0,r.jsxs)("p",{children:["Page ",a," of ",e]}),h&&(0,r.jsx)(o.Z,{file:h,onLoadSuccess:function(e){let{numPages:n}=e;t(n)},children:(0,r.jsx)(l.Z,{pageNumber:a,renderTextLayer:!1,renderAnnotationLayer:!1,canvasBackground:"#e6f3f3"})})]})}function h(){return(0,r.jsx)("div",{children:(0,r.jsxs)(a.LG,{cascade:!0,damping:.5,children:[(0,r.jsx)("h2",{children:"My Resume"}),(0,r.jsx)(d,{})]})})}}}]);
//# sourceMappingURL=745.ef6999bf.chunk.js.map