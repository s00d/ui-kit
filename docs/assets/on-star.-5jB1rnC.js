import{_ as b}from"./ApiDoc.vue.BBsrfSvH.js";import{E as f}from"./index.CqeEYO5W.js";import{_ as V}from"./index.H9eKdogE.js";import{g as h,r as m,o as i,c,b as o,u as s,O as r,F as v,a as l,w as O}from"./entry._doioHTx.js";import{u as g}from"./vue.f36acd1f.BVcziSBg.js";const x="default",F="on-star",y="",S={},D=[{name:"modelValue",description:"Количество звезд",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"disabled",description:"Отключить изменение",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"max",description:"Максимальное количество звезд",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],L=[{name:"update:modelValue",type:{names:["number"]}}],w="components/on-star/index.vue",N={exportName:x,displayName:F,description:y,tags:S,props:D,events:L,sourceFile:w},U=l("h3",null,"good: ",-1),$=l("h3",null,"bad: ",-1),B=l("h3",null,"neutral: ",-1),E=l("h3",null,"max 30: ",-1),k=l("h3",null,"good disabled: ",-1),q=l("h3",null,"bad disabled: ",-1),C=h({__name:"basic",setup(p){const a=m(5),t=m(1),u=m(3);return(_,e)=>{const d=V;return i(),c(v,null,[U,o(d,{modelValue:s(a),"onUpdate:modelValue":e[0]||(e[0]=n=>r(a)?a.value=n:null)},null,8,["modelValue"]),$,o(d,{modelValue:s(t),"onUpdate:modelValue":e[1]||(e[1]=n=>r(t)?t.value=n:null)},null,8,["modelValue"]),B,o(d,{modelValue:s(u),"onUpdate:modelValue":e[2]||(e[2]=n=>r(u)?u.value=n:null)},null,8,["modelValue"]),E,o(d,{modelValue:s(t),"onUpdate:modelValue":e[3]||(e[3]=n=>r(t)?t.value=n:null),max:30},null,8,["modelValue"]),k,o(d,{modelValue:s(a),"onUpdate:modelValue":e[4]||(e[4]=n=>r(a)?a.value=n:null),disabled:""},null,8,["modelValue"]),q,o(d,{modelValue:s(t),"onUpdate:modelValue":e[5]||(e[5]=n=>r(t)?t.value=n:null),disabled:""},null,8,["modelValue"])],64)}}}),I=`<script setup lang="ts">
const good = ref(5);
const bad = ref(1);
const neutral = ref(3);
<\/script>

<template>
  <h3>good: </h3>
  <on-star v-model="good" />
  <h3>bad: </h3>
  <on-star v-model="bad" />
  <h3>neutral: </h3>
  <on-star v-model="neutral" />
  <h3>max 30: </h3>
  <on-star
    v-model="bad"
    :max="30"
  />
  <h3>good disabled: </h3>
  <on-star
    v-model="good"
    disabled
  />
  <h3>bad disabled: </h3>
  <on-star
    v-model="bad"
    disabled
  />

</template>

<style scoped lang="scss"></style>
`,A={class:"markdown-body"},H=l("h1",null,"OnStar",-1),P=l("h3",null,"Basic",-1),R=l("h2",null,"API",-1),M="OnStar | OnFrontLib Docs",Q=[{property:"og:title",content:"OnStar | OnFrontLib Docs"},{name:"twitter:title",content:"OnStar | OnFrontLib Docs"}],T={__name:"on-star",setup(p,{expose:a}){return a({frontmatter:{title:"OnStar | OnFrontLib Docs",meta:[{property:"og:title",content:"OnStar | OnFrontLib Docs"},{name:"twitter:title",content:"OnStar | OnFrontLib Docs"}]}}),g({title:"OnStar | OnFrontLib Docs",meta:[{property:"og:title",content:"OnStar | OnFrontLib Docs"},{name:"twitter:title",content:"OnStar | OnFrontLib Docs"}]}),(_,e)=>(i(),c("div",A,[H,P,o(f,{code:s(I)},{default:O(()=>[o(C)]),_:1},8,["code"]),R,o(b,{value:s(N)},null,8,["value"])]))}};export{T as default,Q as meta,M as title};
