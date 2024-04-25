import{_ as P}from"./ApiDoc.vue.BBsrfSvH.js";import{E as q}from"./index.CqeEYO5W.js";import{_ as S}from"./index.m8d4Zag1.js";import{_ as G}from"./arrow-right.D0V4y3zK.js";import{g as V,r as k,i as U,S as W,c as y,h as T,y as j,o as r,a as g,t as F,s as $,u as n,j as L,b as v,w as O,F as I,G as D,l as B,x as A,_ as E,A as X,z as K,L as J,k as Q,U as Z,K as ee,I as te,O as M,d as ne,R as oe,V as se,W as le}from"./entry._doioHTx.js";import{I as z}from"./close.CEqdIK7P.js";import{_ as ae}from"./index.C6tN2IX9.js";import{u as ie}from"./vue.f36acd1f.BVcziSBg.js";import"./getPosition.C0X8YXSS.js";import"./arrow.vue.BALFL5yU.js";const ce=Symbol.for("nuxt:client-only"),ue=V({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:d,attrs:t}){const p=k(!1);return U(()=>{p.value=!0}),W(ce,!0),i=>{var b;if(p.value)return(b=d.default)==null?void 0:b.call(d);const e=d.fallback||d.placeholder;if(e)return e();const c=i.fallback||i.placeholder||"",_=i.fallbackTag||i.placeholderTag||"span";return y(_,t,c)}}}),re="OnNotification",de="default",me="on-notification",pe="",fe={},ve=[{name:"init",required:!1,type:{name:"Array",elements:[{name:"INotification"}]},defaultValue:{func:!1,value:"() => []"}},{name:"name",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'notifications'"}}],_e="components/on-notification/index.vue",ye={name:re,exportName:de,displayName:me,description:pe,tags:fe,props:ve,sourceFile:_e},be={class:"header"},ke=["textContent"],he=["innerHTML"],ge=["innerHTML"],xe={key:3,class:"control"},$e=["innerHTML"],we={key:0,class:"actions"},Le=["textContent"],Ne=V({name:"OnNotificationStack",__name:"stack",props:{body:{},title:{default:null},subtitle:{default:null},icon:{default:null},timeout:{default:null},actions:{default:()=>[]},type:{default:"default"},stack:{type:Boolean,default:!0},stackMessages:{default:()=>[]}},emits:["remove"],setup(a){const d=a,t=k(0),p=()=>t.value++,i=()=>t.value--,e=T(()=>d.stackMessages[t.value]),c=T(()=>{var m;const o=(m=e.value.title)==null?void 0:m.replaceAll(`
`,"<br>");return!o||o===""?"Notifications":o}),_=T(()=>{var o;return(o=e.value.subtitle)==null?void 0:o.replaceAll(`
`,"<br>")}),b=T(()=>{var o;return(o=e.value.body)==null?void 0:o.replaceAll(`
`,"<br>")});return j(d.stackMessages,o=>{o.length>1&&t.value>0&&p()},{deep:!0}),(o,m)=>{var l;const u=S,w=G,s=A;return r(),y("div",{class:B(["notification",[n(e).type??"default"]])},[g("div",be,[o.stackMessages.length>1?(r(),y("div",{key:0,class:"count",textContent:F(o.stackMessages.length)},null,8,ke)):$("",!0),n(e).icon?(r(),L(u,{key:n(e).icon,class:"icon",name:n(e).icon},null,8,["name"])):$("",!0),g("div",{class:"title",innerHTML:n(c)},null,8,he),n(e).subtitle?(r(),y("div",{key:2,class:"subtitle",innerHTML:n(_)},null,8,ge)):$("",!0),o.stackMessages.length>1?(r(),y("div",xe,[v(s,{class:"btn",type:"link",size:"sm",disabled:n(t)===0,onClick:i},{default:O(()=>[v(w,{disabled:n(t)===0,type:n(e).type??"default",revert:""},null,8,["disabled","type"])]),_:1},8,["disabled"]),v(s,{class:"btn",type:"link",size:"sm",disabled:n(t)===o.stackMessages.length-1,onClick:p},{default:O(()=>[v(w,{disabled:n(t)===o.stackMessages.length-1,type:n(e).type??"default"},null,8,["disabled","type"])]),_:1},8,["disabled"])])):$("",!0),v(z,{class:"close",onClick:m[0]||(m[0]=h=>o.$emit("remove"))})]),g("div",{class:"body",innerHTML:n(b)},null,8,$e),(l=n(e).actions)!=null&&l.length?(r(),y("div",we,[(r(!0),y(I,null,D(n(e).actions,(h,N)=>(r(),L(s,{key:N,class:"btn",type:h.type,size:h.size,onClick:h.action},{default:O(()=>[g("span",{textContent:F(h.text)},null,8,Le)]),_:2},1032,["type","size","onClick"]))),128))])):$("",!0)],2)}}}),Te=E(Ne,[["__scopeId","data-v-a30d9503"]]),Oe={key:0,class:"header"},Me=["innerHTML"],Ce={key:2,class:"title"},Ve=["innerHTML"],He=["innerHTML"],Ie={key:2,class:"actions"},Ee=["textContent"],Fe=V({name:"OnNotificationItem",__name:"item",props:{body:{},title:{default:null},subtitle:{default:null},icon:{default:null},timeout:{default:null},actions:{default:()=>[]},type:{default:"default"},stack:{type:Boolean,default:!1},stackMessages:{default:()=>[]}},emits:["remove"],setup(a){const d=a,t=T(()=>{var e;return(e=d.title)==null?void 0:e.replaceAll(`
`,"<br>")}),p=T(()=>{var e;return(e=d.subtitle)==null?void 0:e.replaceAll(`
`,"<br>")}),i=T(()=>{var e;return(e=d.body)==null?void 0:e.replaceAll(`
`,"<br>")});return(e,c)=>{var o;const _=S,b=A;return r(),y("div",{class:B(["notification",[e.type??"default",{"notification-flex":!e.title}]])},[e.title?(r(),y("div",Oe,[e.icon?(r(),L(_,{key:e.icon,class:"icon",name:e.icon},null,8,["name"])):$("",!0),e.title?(r(),y("div",{key:1,class:"title",innerHTML:n(t)},null,8,Me)):(r(),y("div",Ce)),e.subtitle?(r(),y("div",{key:3,class:"subtitle",innerHTML:n(p)},null,8,Ve)):$("",!0),v(z,{class:"close",onClick:c[0]||(c[0]=m=>e.$emit("remove"))})])):$("",!0),g("div",{class:"body",innerHTML:n(i)},null,8,He),e.title?$("",!0):(r(),L(z,{key:1,class:"close-body",onClick:c[1]||(c[1]=m=>e.$emit("remove"))})),(o=e.actions)!=null&&o.length?(r(),y("div",Ie,[(r(!0),y(I,null,D(e.actions,(m,u)=>(r(),L(b,{key:u,class:"btn",type:m.type,size:m.size,onClick:m.action},{default:O(()=>[g("span",{textContent:F(m.text)},null,8,Ee)]),_:2},1032,["type","size","onClick"]))),128))])):$("",!0)],2)}}}),ze=E(Fe,[["__scopeId","data-v-5006592a"]]),De={beforeMount(a,d){const t=d.modifiers??{right:!0};let p=0,i=0,e=0,c=0,_=!1;const b=u=>{document.addEventListener("touchmove",o),document.addEventListener("touchend",m),document.addEventListener("mousemove",o),document.addEventListener("mouseup",m),p=u.touches?u.touches[0].clientX:u.clientX,i=u.touches?u.touches[0].clientY:u.clientY,_=!0},o=u=>{if(!_)return;const w=u.touches?u.touches[0].clientX:u.clientX,s=u.touches?u.touches[0].clientY:u.clientY;e=-(p-w||1),c=-(i-s||1),!t.left&&!t.right&&(e=0),(!t.left||!t.right)&&(t.left&&e>0||t.right&&e<0)&&(e=0),!t.top&&!t.bottom&&(c=0),(!t.top||!t.bottom)&&(t.top&&c>0||t.bottom&&c<0)&&(c=0),(t.left||t.right)&&(a.style.transform=`translate(${e}px, ${c}px)`,u.preventDefault(),u.stopPropagation()),(t.top||t.bottom)&&(a.style.transform=`translate(${e}px, ${c}px)`,u.preventDefault(),u.stopPropagation())},m=()=>{document.removeEventListener("touchmove",a._touchHandlers.moveTouch),document.removeEventListener("touchend",a._touchHandlers.endTouch),document.removeEventListener("mousemove",a._touchHandlers.moveTouch),document.removeEventListener("mouseup",a._touchHandlers.endTouch),p=0,i=0;const u=e/a.offsetWidth*100,w=c/a.offsetHeight*100;a.style.transform="",d.value&&d.value({x:u,y:w,el:a,offcetX:e,offcetY:c}),e=0,c=0,_=!1};a.addEventListener("touchstart",b),a.addEventListener("mousedown",b),a._touchHandlers={startTouch:b,moveTouch:o,endTouch:m}},beforeUnmount(a){a.removeEventListener("touchstart",a._touchHandlers.startTouch),a.removeEventListener("mousedown",a._touchHandlers.startTouch)}},Be={class:"notification-wrapper"},Ae=V({name:"OnNotification",directives:{swipe:De},__name:"index",props:{init:{default:()=>[]},name:{default:"notifications"}},setup(a){const d=a,t=X(d.name),p=k(null),i=k(d.init.map(s=>({...s,id:e.value++}))),e=k(0),c=k(0),_=k(!1),b=T(()=>i.value),o=s=>{const l=e.value++,h=[];if(s.stack){const N=i.value.findIndex(C=>C.stack);if(N!==-1){i.value[N].stackMessages.unshift(s),_.value=!0,setTimeout(()=>{_.value=!1},500);return}h.push(s),c.value=0}i.value.unshift({id:l,...s,stackMessages:h}),setTimeout(()=>{m(l)},(s.timeout??10)*1e3)},m=s=>{const l=i.value.findIndex(h=>h.id===s);l!==-1&&(t.emit("remove",{index:l,stack:i.value[l].stack}),i.value.splice(l,1))},u=(s,l)=>{s.x>20&&(s.el.style.transform=`translateX(${s.offcetX}px)`,m(l))};U(()=>{p.value=t.on((s,l)=>{s==="add"&&o(l)})}),K(()=>{p.value&&(p.value(),p.value=null)});const w=s=>s.stack?s.stackMessages[c.value]:s;return(s,l)=>{const h=Te,N=ze,C=J("swipe");return r(),L(ee,{to:"body"},[g("div",Be,[v(Z,{name:"slide-fade"},{default:O(()=>[(r(!0),y(I,null,D(n(b),f=>Q((r(),y("div",{key:f.id,class:B([w(f).type??"default",{shake:f.stack&&n(_)}])},[f.stack?(r(),L(h,{key:0,"stack-messages":f.stackMessages,onRemove:()=>m(f.id)},null,8,["stack-messages","onRemove"])):(r(),L(N,{key:1,type:f.type,body:f.body,title:f.title,subtitle:f.subtitle,icon:f.icon,timeout:f.timeout,actions:f.actions,onRemove:()=>m(f.id)},null,8,["type","body","title","subtitle","icon","timeout","actions","onRemove"]))],2)),[[C,H=>u(H,f.id),void 0,{right:!0}]])),128))]),_:1})])])}}}),Se=E(Ae,[["__scopeId","data-v-bd7a8500"]]),Ue={class:"demo"},Xe=V({__name:"basic",setup(a){const d=k(null),t=k("notifications"),p=k("default"),i=k(!1),e=k("Title"),c=k("subtitle"),_=k("Body"),b=k("500"),o=k(!1),m=k([{key:"default",val:"default"},{key:"green",val:"green"},{key:"yellow",val:"yellow"},{key:"blue",val:"blue"},{key:"white",val:"white"},{key:"black",val:"black"},{key:"red",val:"red"}]),u=X(t.value),w=()=>{const s={title:e.value,body:_.value,type:p.value,timeout:parseInt(b.value),subtitle:c.value,stack:i.value};o.value&&(s.actions=[{text:"test action",action:()=>alert("click"),size:"sm"},{text:"test action",action:()=>alert("click"),size:"sm",type:"primary"}]),u.emit("add",s)};return te(()=>{d.value&&clearInterval(d.value)}),(s,l)=>{const h=Se,N=ue,C=ae,f=oe,H=se,Y=A,R=le;return r(),y(I,null,[v(N,null,{default:O(()=>[v(h,{name:n(t)},null,8,["name"])]),_:1}),g("div",Ue,[v(C,{modelValue:n(p),"onUpdate:modelValue":l[0]||(l[0]=x=>M(p)?p.value=x:null),list:n(m),size:"lg"},null,8,["modelValue","list"]),v(f,{modelValue:n(e),"onUpdate:modelValue":l[1]||(l[1]=x=>M(e)?e.value=x:null),placeholder:"title",style:{width:"50%"}},null,8,["modelValue"]),v(f,{modelValue:n(c),"onUpdate:modelValue":l[2]||(l[2]=x=>M(c)?c.value=x:null),placeholder:"subtitle",style:{width:"20%"}},null,8,["modelValue"]),n(i)?$("",!0):(r(),L(f,{key:0,modelValue:n(b),"onUpdate:modelValue":l[3]||(l[3]=x=>M(b)?b.value=x:null),type:"number",placeholder:"timeout",style:{width:"20%"}},null,8,["modelValue"])),v(H,{checked:n(o),"onUpdate:checked":l[4]||(l[4]=x=>M(o)?o.value=x:null),label:"Actions"},null,8,["checked"]),v(H,{checked:n(i),"onUpdate:checked":l[5]||(l[5]=x=>M(i)?i.value=x:null),label:"Stack"},null,8,["checked"]),v(Y,{onClick:w},{default:O(()=>[ne(" add ")]),_:1})]),g("div",null,[v(R,{modelValue:n(_),"onUpdate:modelValue":l[6]||(l[6]=x=>M(_)?_.value=x:null),rows:5},null,8,["modelValue"])])],64)}}}),Ye=E(Xe,[["__scopeId","data-v-f7b1fe28"]]),Re=`<script setup lang="ts">
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
`,Pe={class:"markdown-body"},qe=g("h1",null,"OnNotification",-1),Ge=g("p",null,"Компонент уведомлений.",-1),We=g("h2",null,"Примеры использования",-1),je=g("h3",null,"Basic",-1),Ke=g("h2",null,"API",-1),it="OnNotification | OnFrontLib Docs",ct=[{property:"og:title",content:"OnNotification | OnFrontLib Docs"},{name:"twitter:title",content:"OnNotification | OnFrontLib Docs"}],ut={__name:"on-notification",setup(a,{expose:d}){return d({frontmatter:{title:"OnNotification | OnFrontLib Docs",meta:[{property:"og:title",content:"OnNotification | OnFrontLib Docs"},{name:"twitter:title",content:"OnNotification | OnFrontLib Docs"}]}}),ie({title:"OnNotification | OnFrontLib Docs",meta:[{property:"og:title",content:"OnNotification | OnFrontLib Docs"},{name:"twitter:title",content:"OnNotification | OnFrontLib Docs"}]}),(i,e)=>(r(),y("div",Pe,[qe,Ge,We,je,v(q,{code:n(Re)},{default:O(()=>[v(Ye)]),_:1},8,["code"]),Ke,v(P,{value:n(ye)},null,8,["value"])]))}};export{ut as default,ct as meta,it as title};
