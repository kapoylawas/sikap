import{u as n,R as e,H as r,L as l}from"./app-eb93aae6.js";import{L as s,h as m}from"./Admin-a16af164.js";import{S as d,P as i}from"./Pagination-c41a862c.js";import{D as o}from"./Delete-2c20488c.js";import"./sweetalert2.all-765fa324.js";function N(){const{biodatas:a}=n().props;return e.createElement(e.Fragment,null,e.createElement(r,null,e.createElement("title",null,"Bidoata - SIKAP")),e.createElement(s,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(l,{href:"/admin/biodatas/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(d,{URL:"/admin/biodatas"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Biodata")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kota"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kecamatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kelurahan/desa"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Nik"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,c)=>e.createElement("tr",{key:c},e.createElement("td",{className:"text-center"},++c+(a.current_page-1)*a.per_page),e.createElement("td",null,t.city.name),e.createElement("td",null,t.subdistrict.name),e.createElement("td",null,t.village.name),e.createElement("td",null,t.name),e.createElement("td",null,t.nik),e.createElement("td",{className:"text-center"},e.createElement(l,{href:`/admin/biodatas/${t.id}`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-address-card"})),m(["biodatas.edit"])&&e.createElement(l,{href:`/admin/biodatas/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),m(["biodatas.delete"])&&e.createElement(o,{URL:"/admin/biodatas",id:t.id}))))))),e.createElement("br",null),e.createElement(i,{links:a.links,align:"end"})))))))}export{N as default};
