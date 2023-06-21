import{u as c,R as e,H as r,L as m}from"./app-9b943a52.js";import{L as s,h as n}from"./Admin-8929720c.js";import{S as o}from"./Search-aae10aa7.js";import{D as d}from"./Delete-f7fe7abe.js";import{P as i}from"./Pagination-befc3469.js";import"./sweetalert2.all-afcd9a6a.js";function f(){const{jabatans:a}=c().props;return console.log(a),e.createElement(e.Fragment,null,e.createElement(r,null,e.createElement("title",null,"Jabatan - SIKAP")),e.createElement(s,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(m,{href:"/admin/jabatans/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(o,{URL:"/admin/jabatans"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Master Kelompok Jabatan")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kelompok Jabatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Nama Jabatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(a.current_page-1)*a.per_page),e.createElement("td",null,t.job.name),e.createElement("td",null,t.name),e.createElement("td",{className:"text-center"},n(["jabatans.edit"])&&e.createElement(m,{href:`/admin/jabatans/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),n(["jabatans.delete"])&&e.createElement(d,{URL:"/admin/jabatans",id:t.id}))))))),e.createElement("br",null),e.createElement(i,{links:a.links,align:"end"})))))))}export{f as default};
