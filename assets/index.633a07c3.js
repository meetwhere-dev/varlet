import{R as k}from"./index.b947dc5d.js";import{L as C}from"./index.2e8f8b72.js";import{q as F,_ as z}from"./elevation.6f2b205f.js";import{d as L,f as j,w,o as f,c as v,n as m,p as U,e as y,i as t,j as d,F as R,m as u,t as c,a as l,Y as E,Z as N}from"./vendor.8243c41e.js";import{A as B}from"./AppType.84afabc3.js";import{R as I}from"./index.99fe61cb.js";import{w as $}from"./utils.43b02c52.js";import{u as V,a as S,_ as A,b as D,c as M}from"./en-US.fd4fd1d9.js";import"./index.15644cea.js";import"./components.d08fc2fc.js";function T(e){return["fill","contain","cover","none","scale-down"].includes(e)}const x={src:{type:String},fit:{type:String,validator:T,default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}};const q=L({name:"VarImage",directives:{Lazy:C,Ripple:k},props:x,setup(e){return{toSizeUnit:F,handleLoad:r=>{const p=r.currentTarget,{lazy:n,onLoad:s,onError:a}=e;n?(p._lazy.state==="success"&&(s==null||s(r)),p._lazy.state==="error"&&(a==null||a(r))):s==null||s(r)},handleError:r=>{const{lazy:p,onError:n}=e;!p&&(n==null||n(r))}}}}),Y=["alt","lazy-error","lazy-loading"],Z=["alt","src"];function G(e,i,_,r,p,n){const s=j("lazy"),a=j("ripple");return w((f(),v("div",{class:U(["var-image var--box",[e.block?null:"var--inline-block"]]),style:m({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?w((f(),v("img",{key:0,class:"var-image__image",alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:m({objectFit:e.fit}),onLoad:i[0]||(i[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[1]||(i[1]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[2]||(i[2]=(...o)=>e.onClick&&e.onClick(...o))},null,44,Y)),[[s,e.src]]):(f(),v("img",{key:1,class:"var-image__image",alt:e.alt,style:m({objectFit:e.fit}),src:e.src,onLoad:i[3]||(i[3]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[4]||(i[4]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[5]||(i[5]=(...o)=>e.onClick&&e.onClick(...o))},null,44,Z))],6)),[[a,{disabled:!e.ripple}]])}var h=z(q,[["render",G]]);h.install=function(e){e.component(h.name,h)};var H={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},J={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"};const{add:b,use:K,pack:O,packs:_e,merge:ze}=V(),P=e=>{M(e),K(e)};S("zh-CN",A);S("en-US",D);b("zh-CN",H);b("en-US",J);const Q={name:"ImageExample",components:{VarImage:h,VarRow:I,AppType:B},setup(){return $(P),{pack:O}}},g=e=>(E("data-v-741fe41e"),e=e(),N(),e),W={class:"fit-item"},X=g(()=>l("div",null,"fill",-1)),ee={class:"fit-item"},te=g(()=>l("div",null,"cover",-1)),ae={class:"fit-item"},ie=g(()=>l("div",null,"contain",-1)),se={class:"fit-item"},oe=g(()=>l("div",null,"none",-1)),re={class:"fit-item"},le=g(()=>l("div",null,"scale-down",-1));function ne(e,i,_,r,p,n){const s=y("app-type"),a=y("var-image"),o=y("var-row");return f(),v(R,null,[t(s,null,{default:d(()=>[u(c(r.pack.basicUsage),1)]),_:1}),t(a,{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(s,null,{default:d(()=>[u(c(r.pack.fitMode),1)]),_:1}),t(o,null,{default:d(()=>[l("div",W,[t(a,{width:"85px",height:"85px",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),X]),l("div",ee,[t(a,{width:"85px",height:"85px",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),te]),l("div",ae,[t(a,{width:"85px",height:"85px",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ie]),l("div",se,[t(a,{width:"85px",height:"85px",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),oe]),l("div",re,[t(a,{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),le])]),_:1}),t(s,null,{default:d(()=>[u(c(r.pack.setRadius),1)]),_:1}),t(o,null,{default:d(()=>[t(a,{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",style:{"margin-right":"10px"}}),t(a,{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),t(s,null,{default:d(()=>[u(c(r.pack.useRipple),1)]),_:1}),t(a,{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(s,null,{default:d(()=>[u(c(r.pack.useLazyLoad),1)]),_:1}),t(a,{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64)}var je=z(Q,[["render",ne],["__scopeId","data-v-741fe41e"]]);export{je as default};
