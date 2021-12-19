import{a as P}from"./provide.2e9c45db.js";import{_ as E}from"./elevation.6f2b205f.js";import{d as N,b as C,o as F,c as M,G as R,q as z,r as V,C as G,e as t,i as r,j as l,F as O,Y as L,Z as Y,m as n,t as d,a as x}from"./vendor.8243c41e.js";import{I as q}from"./index.91cab0b8.js";import{S as Z}from"./index.094aacb7.js";import{O as H}from"./index.6a515561.js";import{C as J}from"./index.5e35c986.js";import{C as K}from"./index.f0dec567.js";import{R as Q,a as W}from"./index.37cfcba8.js";import{B as X}from"./index.c4813cf9.js";import{S as $}from"./index.a35fe425.js";import{S as ee}from"./index.e28f214d.js";import{U as ae}from"./index.91a5224d.js";import{C as oe}from"./index.c9729bd0.js";import{R as re}from"./index.4c13eed7.js";import{A as le}from"./AppType.84afabc3.js";import{c as y}from"./index.15644cea.js";import{d as se}from"./index.77fe3760.js";import{b as te,w as ne,a as de}from"./utils.43b02c52.js";import{u as ue,a as j,_ as me,b as ce,c as ie}from"./en-US.fd4fd1d9.js";import"./components.d08fc2fc.js";import"./index.c26bcc8d.js";import"./index.0e231cdd.js";import"./zIndex.a9a0aa57.js";import"./index.8f0903ed.js";import"./index.b947dc5d.js";import"./index.b4c2ba7d.js";import"./index.8af291b9.js";import"./lock.cbce9ccd.js";import"./index.ff18bfbf.js";import"./index.6ea69389.js";import"./provide.fcbafc87.js";import"./index.c80c5b3b.js";const pe={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}};const fe=N({name:"VarForm",props:pe,setup(s){const o=C(()=>s.disabled),f=C(()=>s.readonly),{formItems:e,bindFormItems:b}=P(),u=async()=>(await Promise.all(e.map(({validate:p})=>p()))).every(p=>p===!0),m=()=>e.forEach(({reset:i})=>i()),v=()=>e.forEach(({resetValidation:i})=>i());return b({disabled:o,readonly:f}),{validate:u,reset:m,resetValidation:v}}}),be={class:"var-form"};function ge(s,o,f,e,b,u){return F(),M("div",be,[R(s.$slots,"default")])}var _=E(fe,[["render",ge]]);_.install=function(s){s.component(_.name,_)};var ve={example:"\u8868\u5355\u793A\u4F8B",username:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",usernameMessage:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",password:"\u8BF7\u8F93\u5165\u5BC6\u7801",passwordMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801",department:"\u8BF7\u9009\u62E9\u90E8\u95E8",departmentMessage:"\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",departmentUnit:"\u90E8",group:"\u8BF7\u9009\u62E9\u7EC4\u7EC7",groupMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7",groupUnit:"\u7EC4",genderMessage:"\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B",male:"\u7537",female:"\u5973",rateMessage:"\u5FC5\u987B\u5927\u4E8E2",likeMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D",licenseMessage:"\u60A8\u5FC5\u987B\u5F00\u542F",countMessage:"\u5FC5\u987B\u5927\u4E8E10",rangeMessage:"\u5FC5\u987B\u5927\u4E8E10",filesMessage:"\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",controller:"\u8868\u5355\u63A7\u5236",reset:"\u6E05\u7A7A\u8868\u5355",resetValidation:"\u6E05\u7A7A\u9A8C\u8BC1",validate:"\u89E6\u53D1\u9A8C\u8BC1",disabled:"\u8868\u5355\u7981\u7528",readonly:"\u8868\u5355\u53EA\u8BFB"},_e={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"};const{add:D,use:ke,pack:Ve,packs:na,merge:da}=ue(),xe=s=>{ie(s),ke(s)};j("zh-CN",me);j("en-US",ce);D("zh-CN",ve);D("en-US",_e);const ye={name:"FormExample",components:{VarForm:_,VarInput:q,VarSelect:Z,VarCheckboxGroup:J,VarCheckbox:K,VarRadioGroup:Q,VarRadio:W,VarOption:H,VarButton:X,VarSlider:ee,VarSwitch:$,VarUploader:ae,VarCounter:oe,VarRate:re,AppType:le},setup(){const s=z({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]}),o=V(null),f=V(!1),e=V(!1),b=y.touchmoveForbid;return te(u=>{u==="pc"&&(y.touchmoveForbid=!1)}),G(()=>{y.touchmoveForbid=b}),ne(u=>{var m;xe(u),(m=o.value)==null||m.reset()}),de(se),{pack:Ve,form:o,formData:s,disabled:f,readonly:e}}},Ee=s=>(L("data-v-4d60761c"),s=s(),Y(),s),Ce={class:"row mb"},Fe={class:"row mb"},Me=Ee(()=>x("div",{class:"space"},null,-1));function je(s,o,f,e,b,u){const m=t("app-type"),v=t("var-input"),c=t("var-option"),i=t("var-select"),p=t("var-radio"),h=t("var-radio-group"),k=t("var-checkbox"),U=t("var-checkbox-group"),B=t("var-rate"),w=t("var-switch"),A=t("var-counter"),S=t("var-slider"),I=t("var-uploader"),T=t("var-form"),g=t("var-button");return F(),M(O,null,[r(m,null,{default:l(()=>[n(d(e.pack.example),1)]),_:1}),r(T,{ref:"form",disabled:e.disabled,readonly:e.readonly},{default:l(()=>[r(v,{class:"mb",placeholder:e.pack.username,rules:[a=>!!a||e.pack.usernameMessage],modelValue:e.formData.username,"onUpdate:modelValue":o[0]||(o[0]=a=>e.formData.username=a)},null,8,["placeholder","rules","modelValue"]),r(v,{class:"mb",type:"password",placeholder:e.pack.password,rules:[a=>!!a||e.pack.passwordMessage],modelValue:e.formData.password,"onUpdate:modelValue":o[1]||(o[1]=a=>e.formData.password=a)},null,8,["placeholder","rules","modelValue"]),r(i,{class:"mb",placeholder:e.pack.department,rules:[a=>!!a||e.pack.departmentMessage],modelValue:e.formData.department,"onUpdate:modelValue":o[2]||(o[2]=a=>e.formData.department=a)},{default:l(()=>[r(c,{label:`${e.pack.eat}${e.pack.departmentUnit}`},null,8,["label"]),r(c,{label:`${e.pack.sleep}${e.pack.departmentUnit}`},null,8,["label"]),r(c,{label:`${e.pack.play}${e.pack.departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(i,{class:"mb",multiple:"",placeholder:e.pack.group,rules:[a=>a.length>=1||e.pack.groupMessage],modelValue:e.formData.group,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formData.group=a)},{default:l(()=>[r(c,{label:`${e.pack.eat}${e.pack.groupUnit}`},null,8,["label"]),r(c,{label:`${e.pack.sleep}${e.pack.groupUnit}`},null,8,["label"]),r(c,{label:`${e.pack.play}${e.pack.groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(h,{class:"mb",rules:[a=>!!a||e.pack.genderMessage],modelValue:e.formData.gender,"onUpdate:modelValue":o[4]||(o[4]=a=>e.formData.gender=a)},{default:l(()=>[r(p,{"checked-value":1},{default:l(()=>[n(d(e.pack.male),1)]),_:1}),r(p,{"checked-value":2},{default:l(()=>[n(d(e.pack.female),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(U,{class:"mb",rules:[a=>a.length>0||e.pack.likeMessage],modelValue:e.formData.like,"onUpdate:modelValue":o[5]||(o[5]=a=>e.formData.like=a)},{default:l(()=>[r(k,{"checked-value":1},{default:l(()=>[n(d(e.pack.eat),1)]),_:1}),r(k,{"checked-value":2},{default:l(()=>[n(d(e.pack.sleep),1)]),_:1}),r(k,{"checked-value":3},{default:l(()=>[n(d(e.pack.play),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(B,{class:"mb",rules:[a=>a>=3||e.pack.rateMessage],modelValue:e.formData.score,"onUpdate:modelValue":o[6]||(o[6]=a=>e.formData.score=a)},null,8,["rules","modelValue"]),x("div",Ce,[r(w,{rules:[a=>!!a||e.pack.licenseMessage],modelValue:e.formData.license,"onUpdate:modelValue":o[7]||(o[7]=a=>e.formData.license=a)},null,8,["rules","modelValue"])]),x("div",Fe,[r(A,{rules:[a=>a>10||e.pack.countMessage],modelValue:e.formData.count,"onUpdate:modelValue":o[8]||(o[8]=a=>e.formData.count=a)},null,8,["rules","modelValue"])]),r(S,{class:"mb",rules:[a=>a>10||e.pack.rangeMessage],modelValue:e.formData.range,"onUpdate:modelValue":o[9]||(o[9]=a=>e.formData.range=a)},null,8,["rules","modelValue"]),r(I,{class:"mb",rules:[a=>a.length>=1||e.pack.filesMessage],modelValue:e.formData.files,"onUpdate:modelValue":o[10]||(o[10]=a=>e.formData.files=a)},null,8,["rules","modelValue"])]),_:1},8,["disabled","readonly"]),r(m,null,{default:l(()=>[n(d(e.pack.controller),1)]),_:1}),r(g,{class:"mt",block:"",type:"danger",onClick:o[11]||(o[11]=a=>e.form.reset())},{default:l(()=>[n(d(e.pack.reset),1)]),_:1}),r(g,{class:"mt",block:"",type:"warning",onClick:o[12]||(o[12]=a=>e.form.resetValidation())},{default:l(()=>[n(d(e.pack.resetValidation),1)]),_:1}),r(g,{class:"mt",block:"",type:"success",onClick:o[13]||(o[13]=a=>e.form.validate())},{default:l(()=>[n(d(e.pack.validate),1)]),_:1}),r(g,{class:"mt",block:"",type:"info",onClick:o[14]||(o[14]=a=>e.disabled=!e.disabled)},{default:l(()=>[n(d(e.pack.disabled),1)]),_:1}),r(g,{class:"mt",block:"",type:"primary",onClick:o[15]||(o[15]=a=>e.readonly=!e.readonly)},{default:l(()=>[n(d(e.pack.readonly),1)]),_:1}),Me],64)}var ua=E(ye,[["render",je],["__scopeId","data-v-4d60761c"]]);export{ua as default};
