import{u as f,r as c,R as e,H as b,L as p,d as N}from"./app-11778ce3.js";import{L as h}from"./Admin-dece0392.js";import{S as v}from"./sweetalert2.all-3baf2af4.js";function w(){const{errors:s,permissions:o,role:m}=f().props,[r,i]=c.useState(m.name),[n,d]=c.useState(m.permissions.map(a=>a.name)),u=a=>{let t=n;t.some(l=>l===a.target.value)?t=t.filter(l=>l!==a.target.value):t.push(a.target.value),d(t)},E=async a=>{a.preventDefault(),N.Inertia.put(`/admin/roles/${m.id}`,{name:r,permissions:n},{onSuccess:()=>{v.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("title",null,"Edit Roles - SIKAP")),e.createElement(h,null,e.createElement(p,{href:"/admin/roles",className:"btn btn-md btn-primary border-0 shadow",type:"button"},e.createElement("i",{className:"fa fa-long-arrow-alt-left me-2"}),"Kembali"),e.createElement("div",{className:"row mt-3"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shield-alt"})," Edit Role")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:E},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Role Name"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>i(a.target.value),placeholder:"Enter Role Name"})),s.name&&e.createElement("div",{className:"alert alert-danger"},s.name),e.createElement("hr",null),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"fw-bold"},"Permissions"),e.createElement("br",null),o.map((a,t)=>e.createElement("div",{className:"form-check form-check-inline",key:t},e.createElement("input",{className:"form-check-input",type:"checkbox",value:a.name,defaultChecked:n.some(l=>l===a.name),onChange:u,id:`check-${a.id}`}),e.createElement("label",{className:"form-check-label",htmlFor:`check-${a.id}`},a.name))),s.permissions&&e.createElement("div",{className:"alert alert-danger mt-2"},s.permissions)),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," ","Update"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{w as default};