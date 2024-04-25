import{_ as J}from"./ApiDoc.vue.BBsrfSvH.js";import{E as I}from"./index.CqeEYO5W.js";import{g as C,r as c,h as $,o as _,c as g,a as e,b as p,w as L,l as x,u as n,j as E,k as M,J as H,F as B,G as P,q as U,t as v,K as A,s as K,x as j,_ as T,O as k,d as b,p as G,f as R}from"./entry._doioHTx.js";import{v as Q,g as q,s as W}from"./getPosition.C0X8YXSS.js";import{_ as X}from"./arrow.vue.BALFL5yU.js";import{u as Y}from"./vue.f36acd1f.BVcziSBg.js";const Z="default",ee="on-dropdown",le="",ne={},te=[{name:"modelValue",required:!0,type:{name:"string"}},{name:"list",required:!1,type:{name:"Array",elements:[{name:"List"}]},defaultValue:{func:!1,value:"() => ([])"}},{name:"tag",description:"HTML-тег элемента",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"type",description:"Тип кнопки",tags:{values:[{description:"primary, default, dashed, text, link, primary-light",title:"values"}]},required:!1,type:{name:"union",elements:[{name:"TButtonType"},{name:"string"}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",description:"Размер кнопки",tags:{values:[{description:"sm, md, lg",title:"values"}]},required:!1,type:{name:"union",elements:[{name:"TButtonSize"},{name:"string"}]},defaultValue:{func:!1,value:"'md'"}},{name:"ghost",description:"Прозрачный фон, только обводка",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"htmlType",description:"Значение атрибута type элемента <button />",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loaderOverlay",description:"Индикатор загрузки поверх текста кнопки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loaderClickable",description:"Разрешить событие @click при loading: true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"Отобразить индикатор загрузки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:"Красная кнопка",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Отключить кнопку",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"block",description:"width: 100%",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shape",description:"Форма кнопки",required:!1,type:{name:"union",elements:[{name:"TButtonShape"},{name:"string"}]},defaultValue:{func:!1,value:"'default'"}},{name:"text",defaultValue:{func:!1,value:"undefined"}}],se=[{name:"update:modelValue",type:{names:["string"]}},{name:"select",type:{names:["List"]}}],oe=[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"item_id",title:"binding"},{name:"item_key",title:"binding"},{name:"first",title:"binding"},{name:"last",title:"binding"},{name:"active",title:"binding"}]}],ae="components/on-dropdown/index.vue",ie={exportName:Z,displayName:ee,description:le,tags:ne,props:te,events:se,slots:oe,sourceFile:ae},re={class:"dropdown-border"},de=["innerHTML"],ue={class:"dropdown-list-block"},ce=["onClick"],pe=["textContent"],me=C({__name:"index",props:{modelValue:{},list:{default:()=>[]},tag:{default:"button"},type:{default:"default"},size:{default:"md"},ghost:{type:Boolean,default:!1},htmlType:{default:"button"},loaderOverlay:{type:Boolean,default:!1},loaderClickable:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1},shape:{default:"default"}},emits:["update:modelValue","select"],setup(m,{emit:o}){const u=m,r=o,d=c(!1),s=c(null),y=c(null),a=c(0),O=c(0),w=c(0),D=$(()=>u.list.findIndex(t=>t.key===u.modelValue)??0),S=$(()=>u.list.length),N=(t=0)=>{setTimeout(()=>{d.value&&(d.value=!1,s.value&&clearInterval(s.value))},t)},z=t=>{if(d.value)return N();const h=t.currentTarget,V=()=>{const i=q(h);(Math.abs(i.left-w.value)>10||Math.abs(i.top-O.value)>10)&&(d.value=!1,clearInterval(s.value))};d.value=!0;const f=q(h);O.value=f.top,w.value=f.left,a.value=f.width,s.value=W(()=>V(),10)},F=(t,h)=>{r("update:modelValue",t.key),r("select",t,h),d.value=!1};return(t,h)=>{const V=j;return _(),g(B,null,[e("div",re,[p(V,{ref_key:"btn",ref:y,class:"dropdown",tag:t.tag,type:t.type,block:t.block,danger:t.danger,disabled:t.disabled,ghost:t.ghost,"html-type":t.htmlType,"loader-clickable":t.loaderClickable,"loader-overlay":t.loaderOverlay,shape:t.shape,size:t.size,onClick:z},{default:L(()=>[e("span",{class:"text",innerHTML:t.modelValue},null,8,de),p(X,{class:x(["arrow_down",{isOpen:n(d)}])},null,8,["class"])]),_:1},8,["tag","type","block","danger","disabled","ghost","html-type","loader-clickable","loader-overlay","shape","size"])]),n(d)?(_(),E(A,{key:0,to:"body"},[M((_(),g("div",{class:"dropdown-list",style:H({width:`${n(a)}px`,top:`${n(O)}px`,left:`${n(w)}px`})},[e("ul",ue,[(_(!0),g(B,null,P(t.list,(f,i)=>(_(),g("li",{key:i,class:x([{active:n(D)===i,first:i===0,last:i===n(S)-1},"dropdown-list-block-item"]),onClick:Xe=>F(f,i)},[U(t.$slots,"item",{item:f,item_id:i,item_key:i,first:i===0,last:i===n(S)-1,active:n(D)===i},()=>[e("span",{textContent:v(f.val)},null,8,pe)],!0)],10,ce))),128))])],4)),[[n(Q),()=>N(10)]])])):K("",!0)],64)}}}),fe=T(me,[["__scopeId","data-v-6db3d197"]]),l=m=>(G("data-v-7bebaed7"),m=m(),R(),m),ve={class:"demo",style:{height:"100px",overflow:"scroll"}},_e={class:"value"},be=l(()=>e("strong",null,"Value: ",-1)),ge=l(()=>e("strong",null,"Selected value: ",-1)),ye={class:"value"},he=l(()=>e("strong",null,"Value: ",-1)),Oe=l(()=>e("strong",null,"Selected value: ",-1)),we={class:"value"},Ve=l(()=>e("strong",null,"Value: ",-1)),ke=l(()=>e("strong",null,"Selected value: ",-1)),De=l(()=>e("br",null,null,-1)),Se=l(()=>e("br",null,null,-1)),Ne=l(()=>e("br",null,null,-1)),$e=l(()=>e("br",null,null,-1)),xe=l(()=>e("br",null,null,-1)),Be=l(()=>e("br",null,null,-1)),qe=l(()=>e("br",null,null,-1)),Ce=l(()=>e("br",null,null,-1)),Le=l(()=>e("br",null,null,-1)),Te=l(()=>e("br",null,null,-1)),ze=l(()=>e("br",null,null,-1)),Fe=l(()=>e("br",null,null,-1)),Je=l(()=>e("br",null,null,-1)),Ie=l(()=>e("br",null,null,-1)),Ee=l(()=>e("br",null,null,-1)),Me=l(()=>e("br",null,null,-1)),He=l(()=>e("br",null,null,-1)),Pe=l(()=>e("br",null,null,-1)),Ue=l(()=>e("br",null,null,-1)),Ae=C({__name:"basic",setup(m){const o=c("item1"),u=c([{key:"item1",val:"val1"},{key:"item2",val:"val2"},{key:"item3",val:"val3"},{key:"item4",val:"val4"}]),r=c(u.value[0]);return(d,s)=>{const y=fe;return _(),g("div",ve,[p(y,{modelValue:n(o),"onUpdate:modelValue":s[0]||(s[0]=a=>k(o)?o.value=a:null),list:n(u),size:"md",onSelect:s[1]||(s[1]=a=>r.value=a)},null,8,["modelValue","list"]),e("div",_e,[be,b(),e("code",null,v(JSON.stringify(n(o))),1),ge,b(),e("code",null,v(JSON.stringify(n(r))),1)]),p(y,{modelValue:n(o),"onUpdate:modelValue":s[2]||(s[2]=a=>k(o)?o.value=a:null),list:n(u),size:"sm",onSelect:s[3]||(s[3]=a=>r.value=a)},null,8,["modelValue","list"]),e("div",ye,[he,b(),e("code",null,v(JSON.stringify(n(o))),1),Oe,b(),e("code",null,v(JSON.stringify(n(r))),1)]),p(y,{modelValue:n(o),"onUpdate:modelValue":s[4]||(s[4]=a=>k(o)?o.value=a:null),list:n(u),size:"lg",onSelect:s[5]||(s[5]=a=>r.value=a)},null,8,["modelValue","list"]),e("div",we,[Ve,b(),e("code",null,v(JSON.stringify(n(o))),1),ke,b(),e("code",null,v(JSON.stringify(n(r))),1)]),De,Se,Ne,$e,xe,Be,qe,Ce,Le,Te,ze,Fe,Je,Ie,Ee,Me,He,Pe,Ue])}}}),Ke=T(Ae,[["__scopeId","data-v-7bebaed7"]]),je=`<script setup lang="ts">
const value = ref('item1');
const list = ref([
  { key: 'item1', val: 'val1' },
  { key: 'item2', val: 'val2' },
  { key: 'item3', val: 'val3' },
  { key: 'item4', val: 'val4' },
]);

const selected = ref(list.value[0]);

<\/script>

<template>
  <div
    class="demo"
    style="height: 100px; overflow: scroll"
  >
    <on-dropdown
      v-model="value"
      :list="list"
      size="md"
      @select="(val) => selected = val"
    />
    <div class="value">
      <strong>Value: </strong> <code>{{ JSON.stringify(value) }}</code>
      <strong>Selected value: </strong> <code>{{ JSON.stringify(selected) }}</code>
    </div>
    <on-dropdown
      v-model="value"
      :list="list"
      size="sm"
      @select="(val) => selected = val"
    />
    <div class="value">
      <strong>Value: </strong> <code>{{ JSON.stringify(value) }}</code>
      <strong>Selected value: </strong> <code>{{ JSON.stringify(selected) }}</code>
    </div>
    <on-dropdown
      v-model="value"
      :list="list"
      size="lg"
      @select="(val) => selected = val"
    />
    <div class="value">
      <strong>Value: </strong> <code>{{ JSON.stringify(value) }}</code>
      <strong>Selected value: </strong> <code>{{ JSON.stringify(selected) }}</code>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<style scoped lang="scss">
.value {
  margin-top: 8px;
}
</style>
`,Ge={class:"markdown-body"},Re=e("h1",null,"OnDropDown",-1),Qe=e("h2",null,"Примеры использования",-1),We=e("h2",null,"API",-1),sl="OnDropDown | OnFrontLib Docs",ol=[{property:"og:title",content:"OnDropDown | OnFrontLib Docs"},{name:"twitter:title",content:"OnDropDown | OnFrontLib Docs"}],al={__name:"on-dropdown",setup(m,{expose:o}){return o({frontmatter:{title:"OnDropDown | OnFrontLib Docs",meta:[{property:"og:title",content:"OnDropDown | OnFrontLib Docs"},{name:"twitter:title",content:"OnDropDown | OnFrontLib Docs"}]}}),Y({title:"OnDropDown | OnFrontLib Docs",meta:[{property:"og:title",content:"OnDropDown | OnFrontLib Docs"},{name:"twitter:title",content:"OnDropDown | OnFrontLib Docs"}]}),(d,s)=>(_(),g("div",Ge,[Re,Qe,p(I,{code:n(je)},{default:L(()=>[p(Ke)]),_:1},8,["code"]),We,p(J,{value:n(ie)},null,8,["value"])]))}};export{al as default,ol as meta,sl as title};
