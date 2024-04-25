import{_ as g}from"./ApiDoc.vue.BBsrfSvH.js";import{E as y}from"./index.CqeEYO5W.js";import{_ as x}from"./index.C6tN2IX9.js";import{g as L,r as u,o as p,c as m,b as a,u as n,O,a as e,d as c,t as d,p as b,f as I,_ as V,w as h}from"./entry._doioHTx.js";import{u as S}from"./vue.f36acd1f.BVcziSBg.js";import"./getPosition.C0X8YXSS.js";import"./arrow.vue.BALFL5yU.js";const k="OnInputList",w="default",F="on-input-list",N="",q={},D=[{name:"modelValue",description:"Содержимое поля ввода",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"list",description:"список в виде массива [{ key: 'item1', val: 'val1' }]",required:!0,type:{name:"Array",elements:[{name:"List"}]}},{name:"filter",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:`(list, filterText) => {
  if (filterText === '') { return list; }
  const filtered: List[] = [];
  const regexp = new RegExp(
    filterText.replace(/\\\\/g, '').toLowerCase(),
  );
  for (const i in list) {
    if (
      regexp.test(list[i].val.toString().toLowerCase()) ||
      regexp.test(list[i].key.toString().toLowerCase())
    ) {
      filtered.push(list[i]);
    }
  }
  return filtered;
}`}},{name:"size",description:"Размер поля ввода",required:!1,type:{name:"union",elements:[{name:"TOnInputSize"},{name:"string"}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",description:"Отключить поле",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Подсказка внутри поля (i18n)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"loading",description:"Показать индикатор загрузки",required:!1,type:{name:"boolean"}},{name:"prefix",description:"Префикс",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"suffix",description:"Суффикс",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"status",description:"Статус валидации",required:!1,type:{name:"union",elements:[{name:'"error"'},{name:'"warning"'},{name:'"success"'},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],T=[{name:"update:modelValue",type:{names:["string"]}},{name:"select",type:{names:["List"]}}],C=[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"item_id",title:"binding"},{name:"item_key",title:"binding"},{name:"first",title:"binding"},{name:"last",title:"binding"},{name:"active",title:"binding"}]},{name:"noitem"}],E="components/on-input-list/index.vue",$={name:k,exportName:w,displayName:F,description:N,tags:q,props:D,events:T,slots:C,sourceFile:E},f=s=>(b("data-v-a4d7ea75"),s=s(),I(),s),B={class:"demo"},z={class:"value"},J=f(()=>e("strong",null,"Value: ",-1)),A=f(()=>e("strong",null,"Selected value: ",-1)),R=L({__name:"basic",setup(s){const t=u("item1"),l=u([{key:"item1",val:"val1"},{key:"item2",val:"val2"},{key:"item3",val:"val3"},{key:"item4",val:"val4"}]),o=u(l.value[0]);return(v,i)=>{const _=x;return p(),m("div",B,[a(_,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=r=>O(t)?t.value=r:null),list:n(l),prefix:"prefix",size:"lg",onSelect:i[1]||(i[1]=r=>o.value=r)},null,8,["modelValue","list"]),e("div",z,[J,c(),e("code",null,d(JSON.stringify(n(t))),1),A,c(),e("code",null,d(JSON.stringify(n(o))),1)])])}}}),H=V(R,[["__scopeId","data-v-a4d7ea75"]]),P=`<script setup lang="ts">
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
  <div class="demo">
    <on-input-list
      v-model="value"
      :list="list"
      prefix="prefix"
      size="lg"
      @select="(val) => selected = val"
    />
    <div class="value">
      <strong>Value: </strong> <code>{{ JSON.stringify(value) }}</code>
      <strong>Selected value: </strong> <code>{{ JSON.stringify(selected) }}</code>
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
  margin-top: 8px;
}
</style>
`,U={class:"markdown-body"},j=e("h1",null,"OnInputList",-1),G=e("h2",null,"Примеры использования",-1),K=e("h2",null,"API",-1),te="OnInputList | OnFrontLib Docs",ne=[{property:"og:title",content:"OnInputList | OnFrontLib Docs"},{name:"twitter:title",content:"OnInputList | OnFrontLib Docs"}],se={__name:"on-input-list",setup(s,{expose:t}){return t({frontmatter:{title:"OnInputList | OnFrontLib Docs",meta:[{property:"og:title",content:"OnInputList | OnFrontLib Docs"},{name:"twitter:title",content:"OnInputList | OnFrontLib Docs"}]}}),S({title:"OnInputList | OnFrontLib Docs",meta:[{property:"og:title",content:"OnInputList | OnFrontLib Docs"},{name:"twitter:title",content:"OnInputList | OnFrontLib Docs"}]}),(v,i)=>(p(),m("div",U,[j,G,a(y,{code:n(P)},{default:h(()=>[a(H)]),_:1},8,["code"]),K,a(g,{value:n($)},null,8,["value"])]))}};export{se as default,ne as meta,te as title};
