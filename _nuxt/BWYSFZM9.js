import{D as d,E as D,v as y,G as w,s as g,d as H,H as S,I as _,J as p}from"./BiNFQgyS.js";import{u as b}from"./1Y6dL1NH.js";import q from"./ngvIavwa.js";import x from"./8J7YUFGx.js";import"./Btega009.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./aBPedIbF.js";import"./YmnFdnGD.js";import"./C7v7ovcA.js";const a=(u,s=y())=>{const e=d(u),m=g();D(()=>d(u),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),w(()=>b(t))},{immediate:!0})},$=H({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(u){const{contentHead:s}=g().public.content,e=S(),{tag:m,excerpt:f,path:n,query:t,head:r}=u,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||_(y().path),find:"one"},v=(o,i)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return p(x,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:C,excerpt:f,...this.$attrs})}:({data:o})=>(c&&a(o),p(q,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):v("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||p("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||p("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),G=$;export{G as default};
