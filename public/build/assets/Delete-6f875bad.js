<<<<<<<< HEAD:public/build/assets/Delete-6f875bad.js
import{R as e,d as c}from"./app-86258cb8.js";import{S as t}from"./sweetalert2.all-36215d70.js";function u({URL:n,id:o}){const r=async s=>{t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&(c.Inertia.delete(`${n}/${s}`),t.fire({title:"Success!",text:"Data deleted successfully!",icon:"success",showConfirmButton:!1,timer:1500}))})};return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>r(o),className:"btn btn-danger btn-sm"},e.createElement("i",{className:"fa fa-trash"})))}export{u as D};
========
import{R as e,d as c}from"./app-af2035c0.js";import{S as t}from"./sweetalert2.all-86fde33c.js";function u({URL:n,id:o}){const r=async s=>{t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&(c.Inertia.delete(`${n}/${s}`),t.fire({title:"Success!",text:"Data deleted successfully!",icon:"success",showConfirmButton:!1,timer:1500}))})};return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>r(o),className:"btn btn-danger btn-sm"},e.createElement("i",{className:"fa fa-trash"})))}export{u as D};
>>>>>>>> 5f8a2ec (update proseses gaji):public/build/assets/Delete-61cede23.js
