<<<<<<<< HEAD:public/build/assets/Edit-50900f66.js
import{u as p,r as s,R as e,H as b,L as f,d as N}from"./app-86258cb8.js";import{L as v}from"./Admin-70d4abbe.js";import{S as h}from"./sweetalert2.all-36215d70.js";function y(){const{errors:t,puskesmas:l}=p().props,[m,o]=s.useState(l.name),[n,u]=s.useState(l.alamat),[r,d]=s.useState(l.email),[c,i]=s.useState(l.phone),E=async a=>{a.preventDefault(),N.Inertia.put(`/admin/puskesmas/${l.id}`,{name:m,alamat:n,email:r,phone:c},{onSuccess:()=>{h.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("title",null,"Edit Data Puskesmas - SIKAP")),e.createElement(v,null,e.createElement(f,{href:"/admin/puskesmas",className:"btn btn-md btn-primary border-0 shadow",type:"button"},e.createElement("i",{className:"fa fa-long-arrow-alt-left me-2"}),"Kembali"),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Edit Data Puskesmas")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:E},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama"),e.createElement("input",{type:"text",className:"form-control",value:m,onChange:a=>o(a.target.value),placeholder:"Masukkan Nama"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Alamat"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>u(a.target.value),placeholder:"Masukkan Alamat"})),t.alamat&&e.createElement("div",{className:"alert alert-danger"},t.alamat),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>d(a.target.value),placeholder:"Masukkan Email"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No. Telpon PIC"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>i(a.target.value),placeholder:"Masukkan No. Telpon PIC"})),t.phone&&e.createElement("div",{className:"alert alert-danger"},t.phone),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{y as default};
========
import{u as p,r as s,R as e,H as b,L as f,d as N}from"./app-af2035c0.js";import{L as v}from"./Admin-18ff5a87.js";import{S as h}from"./sweetalert2.all-86fde33c.js";function y(){const{errors:t,puskesmas:l}=p().props,[m,o]=s.useState(l.name),[n,u]=s.useState(l.alamat),[r,d]=s.useState(l.email),[c,i]=s.useState(l.phone),E=async a=>{a.preventDefault(),N.Inertia.put(`/admin/puskesmas/${l.id}`,{name:m,alamat:n,email:r,phone:c},{onSuccess:()=>{h.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("title",null,"Edit Data Puskesmas - SIKAP")),e.createElement(v,null,e.createElement(f,{href:"/admin/puskesmas",className:"btn btn-md btn-primary border-0 shadow",type:"button"},e.createElement("i",{className:"fa fa-long-arrow-alt-left me-2"}),"Kembali"),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Edit Data Puskesmas")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:E},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama"),e.createElement("input",{type:"text",className:"form-control",value:m,onChange:a=>o(a.target.value),placeholder:"Masukkan Nama"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Alamat"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>u(a.target.value),placeholder:"Masukkan Alamat"})),t.alamat&&e.createElement("div",{className:"alert alert-danger"},t.alamat),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Email"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>d(a.target.value),placeholder:"Masukkan Email"})),t.email&&e.createElement("div",{className:"alert alert-danger"},t.email),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No. Telpon PIC"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>i(a.target.value),placeholder:"Masukkan No. Telpon PIC"})),t.phone&&e.createElement("div",{className:"alert alert-danger"},t.phone),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{y as default};
>>>>>>>> 5f8a2ec (update proseses gaji):public/build/assets/Edit-859a250c.js
