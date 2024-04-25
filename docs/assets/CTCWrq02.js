import{_ as C}from"./BI8L1cvd.js";import{E as D}from"./Cepu5Cdp.js";import{g as I,C as N,D as P,h as $,r as E,o as c,j as O,w as e,a as i,b as n,q as x,E as F,u as f,G as H,_ as V,c as m,F as v,H as w,d as p,t as y,x as A}from"./C296uaLE.js";import{_ as M,a as R}from"./Cc5CV2ac.js";import{o as S,_ as j}from"./DcAZa88H.js";import{u as q}from"./CNmpcN_a.js";import"./Dt696U6n.js";import"./CwnFFlTy.js";import"./CBge_H_R.js";const z="OnDropdown2",G="default",L="on-dropdown-2",T="",U={},W=[{name:"update:active",type:{names:["boolean"]}}],J=[{name:"default"},{name:"content"}],K="components/on-dropdown-2/index.vue",Q={name:z,exportName:G,displayName:L,description:T,tags:U,events:W,slots:J,sourceFile:K};function g(l,r){const t={...l};for(const a of r)delete t[a];return t}const X={...g(S,["interactive"]),transitionName:"on-dropdown",trigger:"click",arrow:!1,transitionProps:()=>({duration:200})},Y={class:"scroll-wrap"},Z=I({name:"OnDropdown2",__name:"index",props:N({placement:{},active:{type:Boolean},lazy:{type:Boolean},popperClass:{},popperOptions:{},trigger:{},mouseMoveDebounce:{},transitionName:{},transitionProps:{},disabled:{type:Boolean},arrow:{type:Boolean},popperAttrs:{},tabIndex:{},fullWidth:{type:Boolean},offset:{}},X),emits:["update:active"],setup(l,{emit:r}){const t=l,s=P(t,"active",r,{passive:!0}),o=$(()=>({...g(t,["active"]),popperClass:[t.popperClass,"on-dropdown-popper"]})),h=E(),k=(d,_)=>{var u;_||(u=h.value)==null||u.close()};return(d,_)=>{const u=M,b=j;return c(),O(b,F({ref_key:"popperRef",ref:h},f(o),{active:f(s),"onUpdate:active":_[0]||(_[0]=B=>H(s)?s.value=B:null),interactive:""}),{content:e(()=>[i("div",Y,[n(u,{"onClick:item":k},{default:e(()=>[x(d.$slots,"content")]),_:3})])]),default:e(()=>[x(d.$slots,"default")]),_:3},16,["active"])}}}),ee={},ne={class:"demo"};function te(l,r){const t=A,a=R,s=Z;return c(),m("div",ne,[n(s,{trigger:"hover"},{content:e(()=>[(c(),m(v,null,w(10,o=>n(a,{key:o},{default:e(()=>[p(" Item "+y(o),1)]),_:2},1024)),64))]),default:e(()=>[n(t,null,{default:e(()=>[p("Hover me")]),_:1})]),_:1}),n(s,null,{content:e(()=>[(c(),m(v,null,w(20,o=>n(a,{key:o},{default:e(()=>[p(" Item "+y(o),1)]),_:2},1024)),64))]),default:e(()=>[n(t,null,{default:e(()=>[p("Click me")]),_:1})]),_:1}),n(s,{placement:"right-start"},{content:e(()=>[(c(),m(v,null,w(20,o=>n(a,{key:o},{default:e(()=>[p(" Item "+y(o),1)]),_:2},1024)),64))]),default:e(()=>[n(t,null,{default:e(()=>[p("Click me")]),_:1})]),_:1})])}const oe=V(ee,[["render",te],["__scopeId","data-v-efe01660"]]),se=`<script setup lang="ts">

<\/script>

<template>
  <div class="demo">
    <on-dropdown-2 trigger="hover">
      <on-btn>Hover me</on-btn>
      <template #content>
        <on-menu-item
          v-for="i in 10"
          :key="i"
        >
          Item {{ i }}
        </on-menu-item>
      </template>
    </on-dropdown-2>
    <on-dropdown-2>
      <on-btn>Click me</on-btn>
      <template #content>
        <on-menu-item
          v-for="i in 20"
          :key="i"
        >
          Item {{ i }}
        </on-menu-item>
      </template>
    </on-dropdown-2>
    <on-dropdown-2 placement="right-start">
      <on-btn>Click me</on-btn>
      <template #content>
        <on-menu-item
          v-for="i in 20"
          :key="i"
        >
          Item {{ i }}
        </on-menu-item>
      </template>
    </on-dropdown-2>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  gap: 8px;
}
</style>
`,ae={class:"markdown-body"},re=i("h1",null,"OnDropdown-2",-1),pe=i("p",null,"Простой компонент для вывода on-dropdown-2",-1),ce=i("h2",null,"Примеры использования",-1),ie=i("h3",null,"Basic",-1),le=i("h2",null,"API",-1),xe=[],ge={__name:"on-dropdown-2",setup(l,{expose:r}){return r({frontmatter:{meta:[]}}),q({meta:[]}),(s,o)=>(c(),m("div",ae,[re,pe,ce,ie,n(D,{code:f(se)},{default:e(()=>[n(oe)]),_:1},8,["code"]),le,n(C,{value:f(Q)},null,8,["value"])]))}};export{ge as default,xe as meta};
