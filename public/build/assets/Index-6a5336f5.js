import{u as n,R as e,H as d,L as s}from"./app-8cc66fcf.js";import{L as o,h as r}from"./Admin-b848a91d.js";import{S as i}from"./Search-e92fd49f.js";import{D as E}from"./Delete-fcd338e0.js";import{P as b}from"./Pagination-a2c22cba.js";import"./sweetalert2.all-85c836c2.js";function v(){const{users:a}=n().props;return e.createElement(e.Fragment,null,e.createElement(d,null,e.createElement("title",null,"Users - SIKAP")),e.createElement(o,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(s,{href:"/admin/users/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{class:"col-md-9 col-12 mb-2"},e.createElement(i,{URL:"/admin/users"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-users"})," Users")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Email Address"),e.createElement("th",{scope:"col",style:{width:"30%"}},"Role"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(a.current_page-1)*a.per_page),e.createElement("td",null,t.name),e.createElement("td",null,t.email),e.createElement("td",null,t.roles.map((m,c)=>e.createElement("span",{className:"btn btn-danger btn-sm shadow-sm border-0 ms-2 mb-2",key:c},m.name))),e.createElement("td",{className:"text-center"},r(["users.edit"])&&e.createElement(s,{href:`/admin/users/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),r(["users.delete"])&&e.createElement(E,{URL:"/admin/users",id:t.id}))))))),e.createElement("br",null),e.createElement(b,{links:a.links,align:"end"})))))))}export{v as default};
