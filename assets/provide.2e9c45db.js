import{d as i,o as r,l as m,j as c,c as d,a,t as o,h as l,T as _}from"./vendor.8243c41e.js";import{_ as f}from"./elevation.6f2b205f.js";import{b as p,c as u}from"./components.d08fc2fc.js";const v={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const h=i({name:"VarFormDetails",props:v}),g={key:0,class:"var-form-details"},F={class:"var-form-details__message"},M={class:"var-form-details__length"};function b(e,s,x,y,I,T){return r(),m(_,{name:"var-form-details"},{default:c(()=>[e.errorMessage||e.maxlengthText?(r(),d("div",g,[a("div",F,o(e.errorMessage),1),a("div",M,o(e.maxlengthText),1)])):l("v-if",!0)]),_:1})}var t=f(h,[["render",b]]);t.install=function(e){e.component(t.name,t)};const n=Symbol("FORM_BIND_FORM_ITEM_KEY");function E(){const{bindParent:e,parentProvider:s}=p(n);return{bindForm:e,form:s}}function j(){const{bindChildren:e,childProviders:s}=u(n);return{formItems:s,bindFormItems:e}}export{t as F,j as a,E as u};
