import{j as t,r as h,M as b,R as a,a as i,L as w,l as c,N as v,U as x,c as s,C as j}from"./landing-dTm-h_43.js";/* empty css              */import{T as y}from"./Tilegrid-BeomOgqC.js";import{p as d}from"./projects-kc57DcVm.js";import"./cursor-DeNeEaKd.js";const N=[{id:1,img:"/Portfolio/graphics/RDRGZ_Vector.svg",alt:"Logo of RDRGZ Corporate Relations ",url:"https://rdrgz.com/",target:"_blank",altText:"Navigate to the Website of RDRGZ Corporate Relations as a new tab",logoUrl:"https://rdrgz.com/"},{id:2,img:"/Portfolio/graphics/SonyMusic_Vector.svg",alt:"Logo of Sony Music",url:"https://www.sonymusic.com/",target:"_blank",altText:"Navigate to the Website ofSony-Music as a new tab",logoUrl:"https://www.sonymusic.com/"},{id:3,img:"/Portfolio/graphics/Globetrotter_Vector.svg",alt:"Logo of Globetrotter",url:"https://www.globetrotter.de/",target:"_blank",altText:"Navigate to the Website of Globetrotter as a new tab",logoUrl:"https://www.globetrotter.de/"},{id:4,img:"/Portfolio/graphics/Hcat-plus_Vector.svg",alt:"Logo of HCAT+",url:"https://www.hcatplus.de/",target:"_blank",altText:"Navigate to the Website of HCAT+ as a new tab",logoUrl:"https://www.hcatplus.de/"},{id:5,img:"/Portfolio/graphics/Good-Game_Vector.svg",alt:"Logo of Goodgame Studios",url:"https://goodgamestudios.com/de/",target:"_blank",altText:"Navigate to the Website of Goodgame Studios as a new tab",logoUrl:"https://goodgamestudios.com/de/"},{id:6,img:"/Portfolio/graphics/EatSmarter_Vector.svg",alt:"Logo of Eat Smarter",url:"https://eatsmarter.de/",target:"_blank",altText:"Navigate to the Website of Eat Smarter as a new tab",logoUrl:"https://eatsmarter.de/"},{id:7,img:"/Portfolio/graphics/AdStrat_Vector.svg",alt:"Logo of AdStrat",url:"https://www.adstrat.de/",target:"_blank",altText:"Navigate to the Website of AdStrat as a new tab",logoUrl:"https://www.adstrat.de/"}];function C(){return t.jsxs("section",{className:"section section__intro--beige",children:[t.jsx("div",{className:"section__intro sticky section__intro--beige",children:t.jsx("h2",{children:"Clients & Teams"})}),t.jsx("div",{className:"section__content tilegrid",children:t.jsx(y,{items:N,className:"tilegrid",tileClassName:"tile"})})]})}function I({filters:r,items:o,onFilterChange:n,children:m}){const[p,u]=h.useState("All Categories"),f=e=>{u(e);const _=e==="All Categories"?o:o.filter(l=>Array.isArray(l.category)?l.category.includes(e):l.category===e);n(_)};return t.jsxs("div",{children:[t.jsx("div",{className:"filter__container",children:r.map(e=>t.jsx("button",{"data-filter":e,onClick:()=>f(e),className:`filter__buttons--inactive ${p===e?"filter__buttons--active":""}`,"aria-label":`Filter by ${e}`,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),m]})}function S(){const[r,o]=h.useState(d);return t.jsxs("section",{className:"section section__intro--blue",children:[t.jsxs("div",{className:"sticky",children:[t.jsx("h2",{children:"Projects"}),t.jsx(I,{filters:["All Categories","Webdesign","Development","Branding","UX","UI","Illustration","Graphic","Typography/Lettering"],items:d,onFilterChange:n=>o(n)})]}),t.jsx("div",{className:"section__content",children:t.jsx(b,{items:r,cardClassName:"card--centered",className:"mediagrid__2-col",cardInfo:"card__info card__info--blue"})})]})}const R=[{id:1,title:"Research & Analysis",description:"Every project begins with a deep understanding of the target group, their needs and challenges. Through careful research and analysis, I create a solid basis for well-founded decisions and innovative solutions.",img:"/Portfolio/graphics/Illustration_Research-Analysis.svg",alt:"Illustration"},{id:2,title:"Strategy & Concept",description:"From the insights gained, I develop clear strategies and well thought out concepts that define the core of the project. This creates a concrete direction that meets both the users' needs and the project's objectives.",img:"/Portfolio/graphics/Illustration_Strategy-Concept.svg",alt:"Illustration"},{id:3,title:"Design & Implementation",description:"In this phase, the concept is visually designed and technically implemented to bring it to life. I attach great importance to a functional, scalable and cross-media design as well as precise implementation.",img:"/Portfolio/graphics/Illustration_Design-Implementation.svg",alt:"Illustration"},{id:4,title:"Testing & Refinement",description:"Before a project is completed, it is extensively tested and refined. Feedback from users and team members helps to refine the final product and ensure it meets the highest standards.",img:"/Portfolio/graphics/Illustration_Testing.svg",alt:"Illustration"}];a.createRoot(document.getElementById("root-header-work")).render(t.jsx(i.StrictMode,{children:t.jsx(w,{className:"landing-sub__content",title:c[1].title,subtitle:c[1].subtitle,body:c[1].body,radius:8,radiusSpirale:10,sinus:1.4,cosinus:2.1})}));a.createRoot(document.getElementById("root-nav")).render(t.jsx(i.StrictMode,{children:t.jsx(v,{})}));a.createRoot(document.getElementById("root-main-work")).render(t.jsxs(i.StrictMode,{children:[t.jsx(S,{}),t.jsx(x,{items:R,title:"Workflow",iconClassName:"icon-button",headerClassName:"section__intro",infoClassName:"info",className:"section__sticky--left",ctaData:s[1],sectionClassName:"section__intro--green"}),t.jsx(C,{})]}));var g;a.createRoot(document.getElementById("root-footer-work")).render(t.jsx(i.StrictMode,{children:t.jsx("div",{id:"contact-section",children:t.jsx(j,{iconPath:(g=s[0])==null?void 0:g.iconPath,altText:s[0].altText,iconClassName:"icon__cta",url:s[0].url})})}));
