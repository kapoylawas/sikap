import{u as s,r as l,R as e,H as c,L as o}from"./app-d2b39c48.js";import{L as d}from"./Admin-3411e1ec.js";import"./sweetalert2-c4dac608.js";function b(){const{errors:a,puskesmas:r}=s().props,[n,m]=l.useState(r.name);return l.useState(r.alamat),e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement("title",null,"Edit Bank - SIKAP")),e.createElement(d,null,e.createElement(o,{href:"/admin/banks",className:"btn btn-md btn-primary border-0 shadow",type:"button"},e.createElement("i",{className:"fa fa-long-arrow-alt-left me-2"}),"Kembali"),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Add New Bank")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:updateBank},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Bank Name"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:t=>m(t.target.value),placeholder:"Enter Bank Name"})),a.name&&e.createElement("div",{className:"alert alert-danger"},a.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Biaya Tranfer"),e.createElement("input",{type:"number",className:"form-control",value:tranfer,onChange:t=>setTranfer(t.target.value),placeholder:"Enter Nominal Tranfer"})),a.tranfer&&e.createElement("div",{className:"alert alert-danger"},a.tranfer),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," Reset")))))))))}export{b as default};
