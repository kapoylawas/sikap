import{u as c,R as e,H as s,L as m}from"./app-d2b39c48.js";import{L as n,h as r}from"./Admin-3411e1ec.js";import{S as o,P as d}from"./Pagination-16d55eed.js";import{D as i}from"./Delete-05f5f0eb.js";import"./sweetalert2-c4dac608.js";function h(){const{jobs:t}=c().props;return e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement("title",null,"Kelompok Jabatan - SIKAP")),e.createElement(n,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(m,{href:"/admin/jobs/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(o,{URL:"/admin/jobs"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Master Kelompok Jabatan")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",null,a.name),e.createElement("td",{className:"text-center"},r(["jobs.edit"])&&e.createElement(m,{href:`/admin/jobs/${a.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),r(["jobs.delete"])&&e.createElement(i,{URL:"/admin/jobs",id:a.id}))))))),e.createElement("br",null),e.createElement(d,{links:t.links,align:"end"})))))))}export{h as default};
