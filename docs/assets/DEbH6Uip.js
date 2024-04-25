import{_}from"./BI8L1cvd.js";import{E as m}from"./Cepu5Cdp.js";import{g as u,r as x,o as c,c as r,b as t,w as a,d as f,u as s,k as h,v as b,a as n,x as v}from"./C296uaLE.js";import{_ as g}from"./CBge_H_R.js";import{u as y}from"./CNmpcN_a.js";const k="OnExpandTransition",V="default",E="on-expand-transition",N="",w={},T=[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"x",required:!1,type:{name:"boolean"}}],B=[{name:"default"}],$="components/on-expand-transition/index.vue",C={name:k,exportName:V,displayName:E,description:N,tags:w,props:T,slots:B,sourceFile:$},O={style:{height:"400px",background:"deepskyblue"}},q=u({__name:"basic",setup(d){const e=x(!1);return(p,o)=>{const i=v,l=g;return c(),r("div",null,[t(i,{onClick:o[0]||(o[0]=j=>e.value=!s(e))},{default:a(()=>[f(" Toggle ")]),_:1}),t(l,null,{default:a(()=>[h(n("div",O,null,512),[[b,s(e)]])]),_:1})])}}}),F=`<script setup lang="ts">
const isVisible = ref(false);
<\/script>

<template>
  <div>
    <on-btn @click="isVisible = !isVisible">
      Toggle
    </on-btn>
    <on-expand-transition>
      <div
        v-show="isVisible"
        style="height: 400px; background: deepskyblue;"
      />
    </on-expand-transition>
  </div>
</template>

<style scoped lang="scss">

</style>
`,I={class:"markdown-body"},A=n("h1",null,"OnExpandTransition",-1),D=n("p",null,"Простой компонент для вывода on-expand-transition",-1),H=n("h2",null,"Примеры использования",-1),P=n("h3",null,"Basic",-1),S=n("h2",null,"API",-1),M=[],Q={__name:"on-expand-transition",setup(d,{expose:e}){return e({frontmatter:{meta:[]}}),y({meta:[]}),(i,l)=>(c(),r("div",I,[A,D,H,P,t(m,{code:s(F)},{default:a(()=>[t(q)]),_:1},8,["code"]),S,t(_,{value:s(C)},null,8,["value"])]))}};export{Q as default,M as meta};
