import{u as m,R as e,H as r,L as c}from"./app-2045bf0c.js";import{L as s,h as n}from"./Admin-e7160ca5.js";import{S as d,P as o}from"./Pagination-30675008.js";import{D as i}from"./Delete-4848d34b.js";import"./sweetalert2.all-abbbe18e.js";function b(){const{biodatas:l}=m().props;return e.createElement(e.Fragment,null,e.createElement(r,null,e.createElement("title",null,"Bidoata - SIKAP")),e.createElement(s,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/admin/biodatas/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(d,{URL:"/admin/biodata"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," City")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kota"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kecamatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kelurahan/desa"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Bank"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Name"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Nik"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Alamat"),e.createElement("th",{scope:"col",style:{width:"15%"}},"No. Rekening"),e.createElement("th",{scope:"col",style:{width:"15%"}},"No. HP"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Foto KTP"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,l.data.map((t,a)=>e.createElement("tr",{key:a},e.createElement("td",{className:"text-center"},++a+(l.current_page-1)*l.per_page),e.createElement("td",null,t.city_id),e.createElement("td",null,t.subdistrict_id),e.createElement("td",null,t.village_id),e.createElement("td",null,t.bank_id),e.createElement("td",null,t.name),e.createElement("td",null,t.nik),e.createElement("td",null,t.alamat),e.createElement("td",null,t.norek),e.createElement("td",null,t.nohp),e.createElement("td",null,t.filektp),e.createElement("td",{className:"text-center"},n(["biodatas.edit"])&&e.createElement(c,{href:`/admin/biodatas/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),n(["biodatas.delete"])&&e.createElement(i,{URL:"/admin/biodatas",id:t.id}))))))),e.createElement("br",null),e.createElement(o,{links:l.links,align:"end"})))))))}export{b as default};