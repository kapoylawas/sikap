import{u as E,r as l,R as e,H as b,L as f,d as N}from"./app-d2b39c48.js";import{L as p}from"./Admin-3411e1ec.js";import{S as v}from"./sweetalert2-c4dac608.js";function w(){const{errors:t}=E().props,[s,c]=l.useState(""),[m,o]=l.useState(""),[n,u]=l.useState(""),[r,d]=l.useState(""),i=async a=>{a.preventDefault(),N.Inertia.post("/admin/puskesmas",{name:s,alamat:m,email:n,phone:r},{onSuccess:()=>{v.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("title",null,"Create Puskesmas - SIKAP")),e.createElement(p,null,e.createElement(f,{href:"/admin/puskesmas",className:"btn btn-md btn-primary border-0 shadow",type:"button"},e.createElement("i",{className:"fa fa-long-arrow-alt-left me-2"}),"Kembali"),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-task"})," Add New Puskesmas")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:i},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Name"),e.createElement("input",{type:"text",className:"form-control",value:s,onChange:a=>c(a.target.value),placeholder:"Masukkan Nama"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Alamat"),e.createElement("input",{type:"text",className:"form-control",value:m,onChange:a=>o(a.target.value),placeholder:"Masukkan Alamat"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>u(a.target.value),placeholder:"Masukkan Email"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Phone"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>d(a.target.value),placeholder:"Masukkan No. Telpon"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{w as default};
