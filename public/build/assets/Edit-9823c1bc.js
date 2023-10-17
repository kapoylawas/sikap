import{u as b,r as o,R as e,H as p,L as N,d as f}from"./app-449953c9.js";import{L as h}from"./Admin-5de45ef5.js";import{S as v}from"./sweetalert2.all-21d7b9e9.js";import{S as g,P as y}from"./Pagination-1951b4b7.js";function x(){const{errors:s,permissions:n,role:r}=b().props,[c,d]=o.useState(r.name),[m,i]=o.useState(r.permissions.map(t=>t.name));console.log("role",m);const E=t=>{let a=m;a.some(l=>l===t.target.value)?a=a.filter(l=>l!==t.target.value):a.push(t.target.value),i(a)},u=async t=>{t.preventDefault(),f.Inertia.put(`/admin/roles/${r.id}`,{name:c,permissions:m},{onSuccess:()=>{v.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("title",null,"Edit Roles - SIKAP")),e.createElement(h,null,e.createElement(N,{href:"/admin/roles",className:"btn btn-md btn-primary border-0 shadow",type:"button"},e.createElement("i",{className:"fa fa-long-arrow-alt-left me-2"}),"Kembali"),e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{class:"col-md-9 col-12 mb-2"},e.createElement(g,{URL:`/admin/roles/${r.id}/edit`}))))),e.createElement("div",{className:"row mt-3"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-shield-alt"})," Edit Role")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:u},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Role Name"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:t=>d(t.target.value),placeholder:"Enter Role Name"})),s.name&&e.createElement("div",{className:"alert alert-danger"},s.name),e.createElement("hr",null),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"fw-bold"},"Permissions"),e.createElement("br",null),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Role Name Route"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Action"))),e.createElement("tbody",null,n.data.map((t,a)=>e.createElement(e.Fragment,null,e.createElement("tr",{key:a},e.createElement("td",{className:"text-center"},++a+(n.current_page-1)*n.per_page),e.createElement("td",null,t.name),e.createElement("td",null,e.createElement("input",{className:"form-check-input",type:"checkbox",value:t.name,defaultChecked:m.some(l=>l===t.name),onChange:E,id:`check-${t.id}`}))))))))),e.createElement(y,{links:n.links,align:"end"}),s.permissions&&e.createElement("div",{className:"alert alert-danger mt-2"},s.permissions)),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," ","Update"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{x as default};
