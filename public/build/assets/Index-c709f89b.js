import{u as r,R as e,H as m}from"./app-52ca4d22.js";import{L as s}from"./Admin-5be2f07b.js";import{S as c}from"./Search-9cd3c924.js";import{P as n}from"./Pagination-b0eff79b.js";function p(){const{permissions:t}=r().props;return e.createElement(e.Fragment,null,e.createElement(m,null,e.createElement("title",null,"Permissions - Sikap")),e.createElement(s,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(c,{URL:"/admin/permissions"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-key"})," Permissions")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col"},"Permission Name"))),e.createElement("tbody",null,t.data.map((l,a)=>e.createElement("tr",{key:a},e.createElement("td",{className:"text-center"},++a+(t.current_page-1)*t.per_page),e.createElement("td",null,l.name)))))),e.createElement("br",null),e.createElement(n,{links:t.links,align:"end"})))))))}export{p as default};
