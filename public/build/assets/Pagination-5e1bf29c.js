<<<<<<<< HEAD:public/build/assets/Pagination-824932b3.js
import{r as s,R as e,d as c,L as m}from"./app-86258cb8.js";function u({URL:r}){const[t,a]=s.useState(""),n=l=>{l.preventDefault(),c.Inertia.get(`${r}?q=${t}`)};return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:n},e.createElement("div",{className:"input-group"},e.createElement("input",{type:"text",value:t,onChange:l=>a(l.target.value),class:"form-control border-0 shadow-sm",placeholder:"type keywords and enter..."}),e.createElement("span",{className:"input-group-text-search border-0 shadow-sm"},e.createElement("i",{className:"fa fa-search"})))))}function i({links:r,align:t}){return e.createElement(e.Fragment,null,e.createElement("nav",null,e.createElement("ul",{className:`pagination justify-content-${t} mb-0`},r.map((a,n)=>e.createElement("li",{className:`page-item ${a.url==null} ? 'disabled' : '' ${a.active?"active":""}`,key:n},e.createElement(m,{className:"page-link",href:a.url===null?"#":a.url,dangerouslySetInnerHTML:{__html:a.label}}))))))}export{i as P,u as S};
========
import{r as s,R as e,d as c,L as m}from"./app-af2035c0.js";function u({URL:r}){const[t,a]=s.useState(""),n=l=>{l.preventDefault(),c.Inertia.get(`${r}?q=${t}`)};return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:n},e.createElement("div",{className:"input-group"},e.createElement("input",{type:"text",value:t,onChange:l=>a(l.target.value),class:"form-control border-0 shadow-sm",placeholder:"type keywords and enter..."}),e.createElement("span",{className:"input-group-text-search border-0 shadow-sm"},e.createElement("i",{className:"fa fa-search"})))))}function i({links:r,align:t}){return e.createElement(e.Fragment,null,e.createElement("nav",null,e.createElement("ul",{className:`pagination justify-content-${t} mb-0`},r.map((a,n)=>e.createElement("li",{className:`page-item ${a.url==null} ? 'disabled' : '' ${a.active?"active":""}`,key:n},e.createElement(m,{className:"page-link",href:a.url===null?"#":a.url,dangerouslySetInnerHTML:{__html:a.label}}))))))}export{i as P,u as S};
>>>>>>>> 5f8a2ec (update proseses gaji):public/build/assets/Pagination-5e1bf29c.js
