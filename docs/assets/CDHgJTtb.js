import{_ as g}from"./BI8L1cvd.js";import{E as y}from"./Cepu5Cdp.js";import{_ as h}from"./BNNEjD4f.js";import{g as O,r as p,o as v,c as _,b as u,u as t,G as f,a as e,d as i,t as r,p as V,f as D,_ as w,w as S}from"./C296uaLE.js";import{u as x}from"./CNmpcN_a.js";import"./D12PdOEx.js";import"./DiFNyx3A.js";const N="default",k="on-dropdown",q="",J={},L=[{name:"modelValue",required:!0,type:{name:"string"}},{name:"list",required:!1,type:{name:"Array",elements:[{name:"List"}]},defaultValue:{func:!1,value:"() => ([])"}},{name:"tag",description:"HTML-тег элемента",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"type",description:"Тип кнопки",tags:{values:[{description:"primary, default, dashed, text, link, primary-light",title:"values"}]},required:!1,type:{name:"union",elements:[{name:"TButtonType"},{name:"string"}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",description:"Размер кнопки",tags:{values:[{description:"sm, md, lg",title:"values"}]},required:!1,type:{name:"union",elements:[{name:"TButtonSize"},{name:"string"}]},defaultValue:{func:!1,value:"'md'"}},{name:"ghost",description:"Прозрачный фон, только обводка",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"htmlType",description:"Значение атрибута type элемента <button />",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"loaderOverlay",description:"Индикатор загрузки поверх текста кнопки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loaderClickable",description:"Разрешить событие @click при loading: true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"Отобразить индикатор загрузки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:"Красная кнопка",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Отключить кнопку",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"block",description:"width: 100%",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shape",description:"Форма кнопки",required:!1,type:{name:"union",elements:[{name:"TButtonShape"},{name:"string"}]},defaultValue:{func:!1,value:"'default'"}},{name:"text",defaultValue:{func:!1,value:"undefined"}}],F=[{name:"update:modelValue",type:{names:["string"]}},{name:"select",type:{names:["List"]}}],z=[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"item_id",title:"binding"},{name:"item_key",title:"binding"},{name:"first",title:"binding"},{name:"last",title:"binding"},{name:"active",title:"binding"}]}],B="components/on-dropdown/index.vue",T={exportName:N,displayName:k,description:q,tags:J,props:L,events:F,slots:z,sourceFile:B},n=d=>(V("data-v-7bebaed7"),d=d(),D(),d),I={class:"demo",style:{height:"100px",overflow:"scroll"}},$={class:"value"},E=n(()=>e("strong",null,"Value: ",-1)),C=n(()=>e("strong",null,"Selected value: ",-1)),U={class:"value"},A=n(()=>e("strong",null,"Value: ",-1)),H=n(()=>e("strong",null,"Selected value: ",-1)),G={class:"value"},M=n(()=>e("strong",null,"Value: ",-1)),P=n(()=>e("strong",null,"Selected value: ",-1)),R=n(()=>e("br",null,null,-1)),j=n(()=>e("br",null,null,-1)),K=n(()=>e("br",null,null,-1)),Q=n(()=>e("br",null,null,-1)),W=n(()=>e("br",null,null,-1)),X=n(()=>e("br",null,null,-1)),Y=n(()=>e("br",null,null,-1)),Z=n(()=>e("br",null,null,-1)),ee=n(()=>e("br",null,null,-1)),ne=n(()=>e("br",null,null,-1)),le=n(()=>e("br",null,null,-1)),te=n(()=>e("br",null,null,-1)),oe=n(()=>e("br",null,null,-1)),se=n(()=>e("br",null,null,-1)),ae=n(()=>e("br",null,null,-1)),ie=n(()=>e("br",null,null,-1)),re=n(()=>e("br",null,null,-1)),ue=n(()=>e("br",null,null,-1)),de=n(()=>e("br",null,null,-1)),ce=O({__name:"basic",setup(d){const l=p("item1"),c=p([{key:"item1",val:"val1"},{key:"item2",val:"val2"},{key:"item3",val:"val3"},{key:"item4",val:"val4"}]),a=p(c.value[0]);return(b,o)=>{const m=h;return v(),_("div",I,[u(m,{modelValue:t(l),"onUpdate:modelValue":o[0]||(o[0]=s=>f(l)?l.value=s:null),list:t(c),size:"md",onSelect:o[1]||(o[1]=s=>a.value=s)},null,8,["modelValue","list"]),e("div",$,[E,i(),e("code",null,r(JSON.stringify(t(l))),1),C,i(),e("code",null,r(JSON.stringify(t(a))),1)]),u(m,{modelValue:t(l),"onUpdate:modelValue":o[2]||(o[2]=s=>f(l)?l.value=s:null),list:t(c),size:"sm",onSelect:o[3]||(o[3]=s=>a.value=s)},null,8,["modelValue","list"]),e("div",U,[A,i(),e("code",null,r(JSON.stringify(t(l))),1),H,i(),e("code",null,r(JSON.stringify(t(a))),1)]),u(m,{modelValue:t(l),"onUpdate:modelValue":o[4]||(o[4]=s=>f(l)?l.value=s:null),list:t(c),size:"lg",onSelect:o[5]||(o[5]=s=>a.value=s)},null,8,["modelValue","list"]),e("div",G,[M,i(),e("code",null,r(JSON.stringify(t(l))),1),P,i(),e("code",null,r(JSON.stringify(t(a))),1)]),R,j,K,Q,W,X,Y,Z,ee,ne,le,te,oe,se,ae,ie,re,ue,de])}}}),me=w(ce,[["__scopeId","data-v-7bebaed7"]]),pe=`<script setup lang="ts">
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
`,fe={class:"markdown-body"},ve=e("h1",null,"OnDropDown",-1),_e=e("h2",null,"Примеры использования",-1),be=e("h2",null,"API",-1),Se="OnDropDown | OnFrontLib Docs",xe=[{property:"og:title",content:"OnDropDown | OnFrontLib Docs"},{name:"twitter:title",content:"OnDropDown | OnFrontLib Docs"}],Ne={__name:"on-dropdown",setup(d,{expose:l}){return l({frontmatter:{title:"OnDropDown | OnFrontLib Docs",meta:[{property:"og:title",content:"OnDropDown | OnFrontLib Docs"},{name:"twitter:title",content:"OnDropDown | OnFrontLib Docs"}]}}),x({title:"OnDropDown | OnFrontLib Docs",meta:[{property:"og:title",content:"OnDropDown | OnFrontLib Docs"},{name:"twitter:title",content:"OnDropDown | OnFrontLib Docs"}]}),(b,o)=>(v(),_("div",fe,[ve,_e,u(y,{code:t(pe)},{default:S(()=>[u(me)]),_:1},8,["code"]),be,u(g,{value:t(T)},null,8,["value"])]))}};export{Ne as default,xe as meta,Se as title};
