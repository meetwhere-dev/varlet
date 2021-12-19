var C=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var V=(e,l,t)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,k=(e,l)=>{for(var t in l||(l={}))h.call(l,t)&&V(e,t,l[t]);if(f)for(var t of f(l))y.call(l,t)&&V(e,t,l[t]);return e};import{R as B,a as S}from"./index.37cfcba8.js";import{I as U}from"./index.c26bcc8d.js";import{A as g}from"./AppType.84afabc3.js";import{d as G}from"./index.77fe3760.js";import{w as j,a as A}from"./utils.43b02c52.js";import{u as E,a as _,_ as F,b as R,c as I}from"./en-US.fd4fd1d9.js";import{_ as M}from"./elevation.6f2b205f.js";import{q as N,_ as D,e as c,o as z,c as w,i as o,j as d,a as p,t as a,F as T,Y as L,Z as P,m as s}from"./vendor.8243c41e.js";import"./provide.2e9c45db.js";import"./components.d08fc2fc.js";import"./index.b947dc5d.js";import"./index.15644cea.js";var q={basicUsage:"\u57FA\u672C\u4F7F\u7528",currentValue:"\u5F53\u524D\u7684\u503C:",setState:"\u8BBE\u7F6E\u72B6\u6001\u503C",setStyle:"\u4FEE\u6539\u56FE\u6807\u548C\u989C\u8272",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",eat:"\u5403\u996D",sleep:"\u7761\u89C9",checkAll:"\u5168\u9009",inverseAll:"\u53CD\u9009",radioGroup:"\u5355\u9009\u6846\u7EC4",radioValidate:"\u5355\u9009\u6846\u5B57\u6BB5\u6821\u9A8C",radioGroupValidate:"\u5355\u9009\u6846\u7EC4\u5B57\u6BB5\u6821\u9A8C",radioValidateMessage:"\u8BF7\u52FE\u9009",radioGroupValidateMessage:"\u5FC5\u987B\u9009\u62E9\u5403\u996D"},Y={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State value",setStyle:"Modify the icon and color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",radioGroup:"RadioGroup",radioValidate:"Radio validation",radioGroupValidate:"RadioGroup validate",radioValidateMessage:"Please check your choice",radioGroupValidateMessage:"Please check eat"};const{add:b,use:Z,pack:H,packs:me,merge:fe}=E(),J=e=>{I(e),Z(e)};_("zh-CN",F);_("en-US",R);b("zh-CN",q);b("en-US",Y);const K={name:"RadioGroupExample",components:{VarRadioGroup:B,VarRadio:S,VarIcon:U,AppType:g},setup(){const e=N({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:0,value7:!1,value8:0});return j(J),A(G),k({pack:H},D(e))}},O=e=>(L("data-v-70bc6c2b"),e=e(),P(),e),Q={class:"relation"},W={class:"relation"},X=O(()=>p("div",{class:"space"},null,-1));function x(e,l,t,u,$,ee){const i=c("app-type"),n=c("var-radio"),v=c("var-icon"),m=c("var-radio-group");return z(),w(T,null,[o(i,null,{default:d(()=>[s(a(u.pack.basicUsage),1)]),_:1}),o(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r)},{default:d(()=>[s(a(u.pack.currentValue)+" "+a(e.value),1)]),_:1},8,["modelValue"]),o(i,null,{default:d(()=>[s(a(u.pack.setState),1)]),_:1}),o(n,{"unchecked-value":0,"checked-value":1,modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=r=>e.value2=r)},{default:d(()=>[s(a(u.pack.currentValue)+" "+a(e.value2),1)]),_:1},8,["modelValue"]),o(i,null,{default:d(()=>[s(a(u.pack.setStyle),1)]),_:1}),o(n,{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e.value3,"onUpdate:modelValue":l[2]||(l[2]=r=>e.value3=r)},{"unchecked-icon":d(()=>[o(v,{name:"heart-half-full",size:"24px"})]),"checked-icon":d(()=>[o(v,{name:"heart",size:"24px"})]),default:d(()=>[s(a(u.pack.currentValue)+" "+a(e.value3),1)]),_:1},8,["modelValue"]),o(i,null,{default:d(()=>[s(a(u.pack.disabled),1)]),_:1}),o(n,{disabled:"",modelValue:e.value4,"onUpdate:modelValue":l[3]||(l[3]=r=>e.value4=r)},{default:d(()=>[s(a(u.pack.currentValue)+" "+a(e.value4),1)]),_:1},8,["modelValue"]),o(i,null,{default:d(()=>[s(a(u.pack.readonly),1)]),_:1}),o(n,{readonly:"",modelValue:e.value5,"onUpdate:modelValue":l[4]||(l[4]=r=>e.value5=r)},{default:d(()=>[s(a(u.pack.currentValue)+" "+a(e.value5),1)]),_:1},8,["modelValue"]),o(i,null,{default:d(()=>[s(a(u.pack.radioGroup),1)]),_:1}),o(m,{modelValue:e.value6,"onUpdate:modelValue":l[5]||(l[5]=r=>e.value6=r)},{default:d(()=>[o(n,{"checked-value":0},{default:d(()=>[s(a(u.pack.eat),1)]),_:1}),o(n,{"checked-value":1},{default:d(()=>[s(a(u.pack.sleep),1)]),_:1})]),_:1},8,["modelValue"]),p("div",Q,a(u.pack.currentValue)+" "+a(e.value6),1),o(i,null,{default:d(()=>[s(a(u.pack.radioValidate),1)]),_:1}),o(n,{modelValue:e.value7,"onUpdate:modelValue":l[6]||(l[6]=r=>e.value7=r),rules:[r=>r||u.pack.radioValidateMessage]},{default:d(()=>[s(a(u.pack.currentValue)+" "+a(e.value7),1)]),_:1},8,["modelValue","rules"]),o(i,null,{default:d(()=>[s(a(u.pack.radioGroupValidate),1)]),_:1}),o(m,{modelValue:e.value8,"onUpdate:modelValue":l[7]||(l[7]=r=>e.value8=r),rules:[r=>r===0||u.pack.radioGroupValidateMessage]},{default:d(()=>[o(n,{"checked-value":0},{default:d(()=>[s(a(u.pack.eat),1)]),_:1}),o(n,{"checked-value":1},{default:d(()=>[s(a(u.pack.sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),p("div",W,a(u.pack.currentValue)+" "+a(e.value8),1),X],64)}var Ve=M(K,[["render",x],["__scopeId","data-v-70bc6c2b"]]);export{Ve as default};
