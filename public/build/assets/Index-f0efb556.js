import{u as s,R as e,H as r,L as c}from"./app-109c1484.js";import{L as n,h as m}from"./Admin-0477e073.js";import{S as d,P as i}from"./Pagination-4bc2b6f1.js";import{D as o}from"./Delete-e9173f05.js";import"./sweetalert2.all-5e986b9f.js";function h(){const{subdistricts:t}=s().props;return e.createElement(e.Fragment,null,e.createElement(r,null,e.createElement("title",null,"Kecamatan - SIKAP")),e.createElement(n,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/admin/subdistricts/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(d,{URL:"/admin/subdistricts"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Kecamatan")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name Kota"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name Kecamatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,t.data.map((a,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(t.current_page-1)*t.per_page),e.createElement("td",null,a.city.name),e.createElement("td",null,a.name),e.createElement("td",{className:"text-center"},m(["subdistricts.edit"])&&e.createElement(c,{href:`/admin/subdistricts/${a.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),m(["subdistricts.delete"])&&e.createElement(o,{URL:"/admin/subdistricts",id:a.id}))))))),e.createElement("br",null),e.createElement(i,{links:t.links,align:"end"})))))))}export{h as default};