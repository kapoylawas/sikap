import{u as r,R as e,H as m,L as n}from"./app-449953c9.js";import{L as s,h as c}from"./Admin-5de45ef5.js";import{S as o,P as d}from"./Pagination-1951b4b7.js";import{D as i}from"./Delete-1cd0c2d3.js";import"./sweetalert2.all-21d7b9e9.js";function N(){const{honors:t}=r().props;return console.log(t),e.createElement(e.Fragment,null,e.createElement(m,null,e.createElement("title",null,"Honor - SIKAP")),e.createElement(s,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(n,{href:"/admin/honor/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(o,{URL:"/admin/honor"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Master Honor")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Jabatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Tahun"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Nominal"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",null,a.jabatan.name),e.createElement("td",null,a.tahun),e.createElement("td",null,a.nominal),e.createElement("td",{className:"text-center"},c(["banks.edit"])&&e.createElement(n,{href:`/admin/honor/${a.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),c(["banks.delete"])&&e.createElement(i,{URL:"/admin/honor",id:a.id}))))))),e.createElement("br",null),e.createElement(d,{links:t.links,align:"end"})))))))}export{N as default};
