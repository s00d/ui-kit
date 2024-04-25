import{_ as P}from"./BI8L1cvd.js";import{E as R}from"./Cepu5Cdp.js";import{_ as U}from"./Dt696U6n.js";import{_ as q}from"./DdLDaaAh.js";import{g as V,r as b,h as T,y as G,o as c,c as _,a as g,t as I,s as $,u as n,j as L,b as f,w as M,F as E,H as D,l as B,x as A,_ as F,A as X,i as j,z as W,O as Z,k as J,Z as K,N as Q,L as tt,G as O,d as et,Y as nt,$ as ot,a0 as st}from"./C296uaLE.js";import{I as z}from"./CTS6zevi.js";import{_ as lt}from"./CwnFFlTy.js";import{_ as at}from"./C5OU5SvG.js";import{u as it}from"./CNmpcN_a.js";import"./D12PdOEx.js";import"./DiFNyx3A.js";const ct="OnNotification",ut="default",rt="on-notification",dt="",mt={},pt=[{name:"init",required:!1,type:{name:"Array",elements:[{name:"INotification"}]},defaultValue:{func:!1,value:"() => []"}},{name:"name",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'notifications'"}}],ft="components/on-notification/index.vue",vt={name:ct,exportName:ut,displayName:rt,description:dt,tags:mt,props:pt,sourceFile:ft},_t={class:"header"},yt=["textContent"],bt=["innerHTML"],kt=["innerHTML"],ht={key:3,class:"control"},gt=["innerHTML"],xt={key:0,class:"actions"},$t=["textContent"],wt=V({name:"OnNotificationStack",__name:"stack",props:{body:{},title:{default:null},subtitle:{default:null},icon:{default:null},timeout:{default:null},actions:{default:()=>[]},type:{default:"default"},stack:{type:Boolean,default:!0},stackMessages:{default:()=>[]}},emits:["remove"],setup(i){const v=i,e=b(0),m=()=>e.value++,d=()=>e.value--,t=T(()=>v.stackMessages[e.value]),u=T(()=>{var r;const o=(r=t.value.title)==null?void 0:r.replaceAll(`
`,"<br>");return!o||o===""?"Notifications":o}),y=T(()=>{var o;return(o=t.value.subtitle)==null?void 0:o.replaceAll(`
`,"<br>")}),k=T(()=>{var o;return(o=t.value.body)==null?void 0:o.replaceAll(`
`,"<br>")});return G(v.stackMessages,o=>{o.length>1&&e.value>0&&m()},{deep:!0}),(o,r)=>{var l;const a=U,w=q,s=A;return c(),_("div",{class:B(["notification",[n(t).type??"default"]])},[g("div",_t,[o.stackMessages.length>1?(c(),_("div",{key:0,class:"count",textContent:I(o.stackMessages.length)},null,8,yt)):$("",!0),n(t).icon?(c(),L(a,{key:n(t).icon,class:"icon",name:n(t).icon},null,8,["name"])):$("",!0),g("div",{class:"title",innerHTML:n(u)},null,8,bt),n(t).subtitle?(c(),_("div",{key:2,class:"subtitle",innerHTML:n(y)},null,8,kt)):$("",!0),o.stackMessages.length>1?(c(),_("div",ht,[f(s,{class:"btn",type:"link",size:"sm",disabled:n(e)===0,onClick:d},{default:M(()=>[f(w,{disabled:n(e)===0,type:n(t).type??"default",revert:""},null,8,["disabled","type"])]),_:1},8,["disabled"]),f(s,{class:"btn",type:"link",size:"sm",disabled:n(e)===o.stackMessages.length-1,onClick:m},{default:M(()=>[f(w,{disabled:n(e)===o.stackMessages.length-1,type:n(t).type??"default"},null,8,["disabled","type"])]),_:1},8,["disabled"])])):$("",!0),f(z,{class:"close",onClick:r[0]||(r[0]=h=>o.$emit("remove"))})]),g("div",{class:"body",innerHTML:n(k)},null,8,gt),(l=n(t).actions)!=null&&l.length?(c(),_("div",xt,[(c(!0),_(E,null,D(n(t).actions,(h,N)=>(c(),L(s,{key:N,class:"btn",type:h.type,size:h.size,onClick:h.action},{default:M(()=>[g("span",{textContent:I(h.text)},null,8,$t)]),_:2},1032,["type","size","onClick"]))),128))])):$("",!0)],2)}}}),Lt=F(wt,[["__scopeId","data-v-a30d9503"]]),Nt={key:0,class:"header"},Tt=["innerHTML"],Mt={key:2,class:"title"},Ot=["innerHTML"],Ct=["innerHTML"],Ht={key:2,class:"actions"},Vt=["textContent"],Et=V({name:"OnNotificationItem",__name:"item",props:{body:{},title:{default:null},subtitle:{default:null},icon:{default:null},timeout:{default:null},actions:{default:()=>[]},type:{default:"default"},stack:{type:Boolean,default:!1},stackMessages:{default:()=>[]}},emits:["remove"],setup(i){const v=i,e=T(()=>{var t;return(t=v.title)==null?void 0:t.replaceAll(`
`,"<br>")}),m=T(()=>{var t;return(t=v.subtitle)==null?void 0:t.replaceAll(`
`,"<br>")}),d=T(()=>{var t;return(t=v.body)==null?void 0:t.replaceAll(`
`,"<br>")});return(t,u)=>{var o;const y=U,k=A;return c(),_("div",{class:B(["notification",[t.type??"default",{"notification-flex":!t.title}]])},[t.title?(c(),_("div",Nt,[t.icon?(c(),L(y,{key:t.icon,class:"icon",name:t.icon},null,8,["name"])):$("",!0),t.title?(c(),_("div",{key:1,class:"title",innerHTML:n(e)},null,8,Tt)):(c(),_("div",Mt)),t.subtitle?(c(),_("div",{key:3,class:"subtitle",innerHTML:n(m)},null,8,Ot)):$("",!0),f(z,{class:"close",onClick:u[0]||(u[0]=r=>t.$emit("remove"))})])):$("",!0),g("div",{class:"body",innerHTML:n(d)},null,8,Ct),t.title?$("",!0):(c(),L(z,{key:1,class:"close-body",onClick:u[1]||(u[1]=r=>t.$emit("remove"))})),(o=t.actions)!=null&&o.length?(c(),_("div",Ht,[(c(!0),_(E,null,D(t.actions,(r,a)=>(c(),L(k,{key:a,class:"btn",type:r.type,size:r.size,onClick:r.action},{default:M(()=>[g("span",{textContent:I(r.text)},null,8,Vt)]),_:2},1032,["type","size","onClick"]))),128))])):$("",!0)],2)}}}),Ft=F(Et,[["__scopeId","data-v-5006592a"]]),It={beforeMount(i,v){const e=v.modifiers??{right:!0};let m=0,d=0,t=0,u=0,y=!1;const k=a=>{document.addEventListener("touchmove",o),document.addEventListener("touchend",r),document.addEventListener("mousemove",o),document.addEventListener("mouseup",r),m=a.touches?a.touches[0].clientX:a.clientX,d=a.touches?a.touches[0].clientY:a.clientY,y=!0},o=a=>{if(!y)return;const w=a.touches?a.touches[0].clientX:a.clientX,s=a.touches?a.touches[0].clientY:a.clientY;t=-(m-w||1),u=-(d-s||1),!e.left&&!e.right&&(t=0),(!e.left||!e.right)&&(e.left&&t>0||e.right&&t<0)&&(t=0),!e.top&&!e.bottom&&(u=0),(!e.top||!e.bottom)&&(e.top&&u>0||e.bottom&&u<0)&&(u=0),(e.left||e.right)&&(i.style.transform=`translate(${t}px, ${u}px)`,a.preventDefault(),a.stopPropagation()),(e.top||e.bottom)&&(i.style.transform=`translate(${t}px, ${u}px)`,a.preventDefault(),a.stopPropagation())},r=()=>{document.removeEventListener("touchmove",i._touchHandlers.moveTouch),document.removeEventListener("touchend",i._touchHandlers.endTouch),document.removeEventListener("mousemove",i._touchHandlers.moveTouch),document.removeEventListener("mouseup",i._touchHandlers.endTouch),m=0,d=0;const a=t/i.offsetWidth*100,w=u/i.offsetHeight*100;i.style.transform="",v.value&&v.value({x:a,y:w,el:i,offcetX:t,offcetY:u}),t=0,u=0,y=!1};i.addEventListener("touchstart",k),i.addEventListener("mousedown",k),i._touchHandlers={startTouch:k,moveTouch:o,endTouch:r}},beforeUnmount(i){i.removeEventListener("touchstart",i._touchHandlers.startTouch),i.removeEventListener("mousedown",i._touchHandlers.startTouch)}},zt={class:"notification-wrapper"},Dt=V({name:"OnNotification",directives:{swipe:It},__name:"index",props:{init:{default:()=>[]},name:{default:"notifications"}},setup(i){const v=i,e=X(v.name),m=b(null),d=b(v.init.map(s=>({...s,id:t.value++}))),t=b(0),u=b(0),y=b(!1),k=T(()=>d.value),o=s=>{const l=t.value++,h=[];if(s.stack){const N=d.value.findIndex(C=>C.stack);if(N!==-1){d.value[N].stackMessages.unshift(s),y.value=!0,setTimeout(()=>{y.value=!1},500);return}h.push(s),u.value=0}d.value.unshift({id:l,...s,stackMessages:h}),setTimeout(()=>{r(l)},(s.timeout??10)*1e3)},r=s=>{const l=d.value.findIndex(h=>h.id===s);l!==-1&&(e.emit("remove",{index:l,stack:d.value[l].stack}),d.value.splice(l,1))},a=(s,l)=>{s.x>20&&(s.el.style.transform=`translateX(${s.offcetX}px)`,r(l))};j(()=>{m.value=e.on((s,l)=>{s==="add"&&o(l)})}),W(()=>{m.value&&(m.value(),m.value=null)});const w=s=>s.stack?s.stackMessages[u.value]:s;return(s,l)=>{const h=Lt,N=Ft,C=Z("swipe");return c(),L(Q,{to:"body"},[g("div",zt,[f(K,{name:"slide-fade"},{default:M(()=>[(c(!0),_(E,null,D(n(k),p=>J((c(),_("div",{key:p.id,class:B([w(p).type??"default",{shake:p.stack&&n(y)}])},[p.stack?(c(),L(h,{key:0,"stack-messages":p.stackMessages,onRemove:()=>r(p.id)},null,8,["stack-messages","onRemove"])):(c(),L(N,{key:1,type:p.type,body:p.body,title:p.title,subtitle:p.subtitle,icon:p.icon,timeout:p.timeout,actions:p.actions,onRemove:()=>r(p.id)},null,8,["type","body","title","subtitle","icon","timeout","actions","onRemove"]))],2)),[[C,H=>a(H,p.id),void 0,{right:!0}]])),128))]),_:1})])])}}}),Bt=F(Dt,[["__scopeId","data-v-bd7a8500"]]),At={class:"demo"},Ut=V({__name:"basic",setup(i){const v=b(null),e=b("notifications"),m=b("default"),d=b(!1),t=b("Title"),u=b("subtitle"),y=b("Body"),k=b("500"),o=b(!1),r=b([{key:"default",val:"default"},{key:"green",val:"green"},{key:"yellow",val:"yellow"},{key:"blue",val:"blue"},{key:"white",val:"white"},{key:"black",val:"black"},{key:"red",val:"red"}]),a=X(e.value),w=()=>{const s={title:t.value,body:y.value,type:m.value,timeout:parseInt(k.value),subtitle:u.value,stack:d.value};o.value&&(s.actions=[{text:"test action",action:()=>alert("click"),size:"sm"},{text:"test action",action:()=>alert("click"),size:"sm",type:"primary"}]),a.emit("add",s)};return tt(()=>{v.value&&clearInterval(v.value)}),(s,l)=>{const h=Bt,N=lt,C=at,p=nt,H=ot,Y=A,S=st;return c(),_(E,null,[f(N,null,{default:M(()=>[f(h,{name:n(e)},null,8,["name"])]),_:1}),g("div",At,[f(C,{modelValue:n(m),"onUpdate:modelValue":l[0]||(l[0]=x=>O(m)?m.value=x:null),list:n(r),size:"lg"},null,8,["modelValue","list"]),f(p,{modelValue:n(t),"onUpdate:modelValue":l[1]||(l[1]=x=>O(t)?t.value=x:null),placeholder:"title",style:{width:"50%"}},null,8,["modelValue"]),f(p,{modelValue:n(u),"onUpdate:modelValue":l[2]||(l[2]=x=>O(u)?u.value=x:null),placeholder:"subtitle",style:{width:"20%"}},null,8,["modelValue"]),n(d)?$("",!0):(c(),L(p,{key:0,modelValue:n(k),"onUpdate:modelValue":l[3]||(l[3]=x=>O(k)?k.value=x:null),type:"number",placeholder:"timeout",style:{width:"20%"}},null,8,["modelValue"])),f(H,{checked:n(o),"onUpdate:checked":l[4]||(l[4]=x=>O(o)?o.value=x:null),label:"Actions"},null,8,["checked"]),f(H,{checked:n(d),"onUpdate:checked":l[5]||(l[5]=x=>O(d)?d.value=x:null),label:"Stack"},null,8,["checked"]),f(Y,{onClick:w},{default:M(()=>[et(" add ")]),_:1})]),g("div",null,[f(S,{modelValue:n(y),"onUpdate:modelValue":l[6]||(l[6]=x=>O(y)?y.value=x:null),rows:5},null,8,["modelValue"])])],64)}}}),Xt=F(Ut,[["__scopeId","data-v-f7b1fe28"]]),Yt=`<script setup lang="ts">
import type { INotification } from "@onfl/components/on-notification/types";

const interval = ref<null|number>(null);
const busName = ref('notifications');
const type = ref<'green' | 'yellow' | 'blue' | 'white' | 'black' | 'red' | 'default'>('default');
const stack = ref(false);
const title = ref('Title');
const subtitle = ref('subtitle');
const body = ref('Body');
const timeout = ref('500');
const actions = ref(false);
const list = ref([
  { key: 'default', val: 'default' },
  { key: 'green', val: 'green' },
  { key: 'yellow', val: 'yellow' },
  { key: 'blue', val: 'blue' },
  { key: 'white', val: 'white' },
  { key: 'black', val: 'black' },
  { key: 'red', val: 'red' },
]);
const bus = useEventBus(busName.value);

const add = () => {
  const notification: INotification = {
    title: title.value,
    body: body.value,
    type: type.value,
    timeout: parseInt(timeout.value),
    subtitle: subtitle.value,
    stack: stack.value,
  };
  if (actions.value) {
    notification.actions = [
      { text: 'test action', action: () => alert('click'), size: "sm" },
      { text: 'test action', action: () => alert('click'), size: "sm", type: 'primary' },
    ];
  }
  bus.emit('add', notification);
};

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});
<\/script>

<template>
  <client-only>
    <on-notification
      :name="busName"
    />
  </client-only>

  <div class="demo">
    <on-input-list
      v-model="type"
      :list="list"
      size="lg"
    />
    <on-input
      v-model="title"
      placeholder="title"
      style="width: 50%"
    />
    <on-input
      v-model="subtitle"
      placeholder="subtitle"
      style="width: 20%"
    />
    <on-input
      v-if="!stack"
      v-model="timeout"
      type="number"
      placeholder="timeout"
      style="width: 20%"
    />
    <on-checkbox
      v-model:checked="actions"
      label="Actions"
    />
    <on-checkbox
      v-model:checked="stack"
      label="Stack"
    />
    <on-btn @click="add">
      add
    </on-btn>
  </div>
  <div>
    <on-textarea
      v-model="body"
      :rows="5"
    />
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  gap: 16px;
}
</style>
`,St={class:"markdown-body"},Pt=g("h1",null,"OnNotification",-1),Rt=g("p",null,"Компонент уведомлений.",-1),qt=g("h2",null,"Примеры использования",-1),Gt=g("h3",null,"Basic",-1),jt=g("h2",null,"API",-1),ae="OnNotification | OnFrontLib Docs",ie=[{property:"og:title",content:"OnNotification | OnFrontLib Docs"},{name:"twitter:title",content:"OnNotification | OnFrontLib Docs"}],ce={__name:"on-notification",setup(i,{expose:v}){return v({frontmatter:{title:"OnNotification | OnFrontLib Docs",meta:[{property:"og:title",content:"OnNotification | OnFrontLib Docs"},{name:"twitter:title",content:"OnNotification | OnFrontLib Docs"}]}}),it({title:"OnNotification | OnFrontLib Docs",meta:[{property:"og:title",content:"OnNotification | OnFrontLib Docs"},{name:"twitter:title",content:"OnNotification | OnFrontLib Docs"}]}),(d,t)=>(c(),_("div",St,[Pt,Rt,qt,Gt,f(R,{code:n(Yt)},{default:M(()=>[f(Xt)]),_:1},8,["code"]),jt,f(P,{value:n(vt)},null,8,["value"])]))}};export{ce as default,ie as meta,ae as title};
