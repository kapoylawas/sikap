import{u as r,R as e,H as s,L as c}from"./app-8cc66fcf.js";import{L as n,h as m}from"./Admin-b848a91d.js";import{S as i}from"./Search-e92fd49f.js";import{D as d}from"./Delete-fcd338e0.js";import{P as o}from"./Pagination-a2c22cba.js";import"./sweetalert2.all-85c836c2.js";function h(){const{citys:t}=r().props;return e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement("title",null,"City - SIKAP")),e.createElement(n,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/admin/citys/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(i,{URL:"/admin/citys"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," City")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",null,a.name),e.createElement("td",{className:"text-center"},m(["citys.edit"])&&e.createElement(c,{href:`/admin/citys/${a.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),m(["citys.delete"])&&e.createElement(d,{URL:"/admin/citys",id:a.id}))))))),e.createElement("br",null),e.createElement(o,{links:t.links,align:"end"})))))))}export{h as default};
