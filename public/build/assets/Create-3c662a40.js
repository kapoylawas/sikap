import{u as k,r as l,R as e,H as w,L as y,d as K}from"./app-449953c9.js";import{L as D}from"./Admin-5de45ef5.js";import{S as C}from"./sweetalert2.all-21d7b9e9.js";function x(){const{errors:t,villages:i,jabatans:d,subdistricts:u}=k().props,[s,b]=l.useState(""),[n,E]=l.useState(""),[r,f]=l.useState(""),[m,v]=l.useState(""),[c,N]=l.useState(""),[o,g]=l.useState(""),[p,S]=l.useState(null),h=async a=>{a.preventDefault(),K.Inertia.post("/admin/sks",{village_id:s,subdistrict_id:n,jabatan_id:r,tahun:m,name:c,tglsk:o,filesk:p},{onSuccess:()=>{C.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(w,null,e.createElement("title",null,"Create SK - SIKAP")),e.createElement(D,null,e.createElement(y,{href:"/admin/sks",className:"btn btn-md btn-primary border-0 shadow",type:"button"},e.createElement("i",{className:"fa fa-long-arrow-alt-left me-2"}),"Kembali"),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-paper"})," Add New SK")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:h},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kelurahan/Desa"),e.createElement("select",{className:"form-select",value:s,onChange:a=>b(a.target.value)},e.createElement("option",{value:""},"-- Select Desa --"),i.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name)))),t.village_id&&e.createElement("div",{className:"alert alert-danger"},t.village_id),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kecamatan"),e.createElement("select",{className:"form-select",value:n,onChange:a=>E(a.target.value)},e.createElement("option",{value:""},"-- Select Kecamatan --"),u.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name)))),t.subdistrict_id&&e.createElement("div",{className:"alert alert-danger"},t.subdistrict_id),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kelompok Jabatan"),e.createElement("select",{className:"form-select",value:r,onChange:a=>f(a.target.value)},e.createElement("option",{value:""},"-- Select Jabatan --"),d.map(a=>e.createElement("option",{value:a.id,key:a.id},a.name)))),t.jabatan_id&&e.createElement("div",{className:"alert alert-danger"},t.jabatan_id),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tahun"),e.createElement("input",{type:"number",className:"form-control",value:m,onChange:a=>v(a.target.value),placeholder:"Masukkan Tahun"})),t.tahun&&e.createElement("div",{className:"alert alert-danger"},t.tahun),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No SK"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>N(a.target.value),placeholder:"Masukkan Nama"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tanggal SK"),e.createElement("input",{type:"date",className:"form-control",value:o,onChange:a=>g(a.target.value),placeholder:"Masukkan Tanggal SK"})),t.tglsk&&e.createElement("div",{className:"alert alert-danger"},t.tglsk),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"File SK ",e.createElement("li",{style:{color:"red"}},"(File Wajib PDF max 4 mb)")),e.createElement("input",{type:"file",className:"form-control",onChange:a=>S(a.target.files[0])})),t.filesk&&e.createElement("div",{className:"alert alert-danger"},t.filesk),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{x as default};
