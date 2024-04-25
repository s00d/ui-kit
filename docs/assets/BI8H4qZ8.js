import{_ as F}from"./BI8L1cvd.js";import{E as $}from"./Cepu5Cdp.js";import{g as y,J as A,o as s,j as f,w as v,q as E,T as N,D as b,c as d,a as o,b as p,k as D,v as B,u as r,l as H,I as C,p as S,f as M,_ as h,h as O,F as V,H as j,K as P,d as I}from"./C296uaLE.js";import{u as U}from"./CNmpcN_a.js";const z="OnFaq",J="default",K="on-faq",Q="",G={},R=[{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"{q: string, a: string}"}]}]},defaultValue:{func:!1,value:"() => ([])"}},{name:"activeIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"-1"}}],W=[{name:"update:activeIndex"}],X="components/on-faq/index.vue",Y={name:z,exportName:J,displayName:K,description:Q,tags:G,props:R,events:W,sourceFile:X},Z="OnFaqItem",ee="default",te="item",ne="",ae={},oe=[{name:"q",required:!0,type:{name:"string"}},{name:"a",required:!0,type:{name:"string"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"isText",required:!1,type:{name:"boolean"}}],se=[{name:"update:active"}],ie="components/on-faq/item.vue",ce={name:Z,exportName:ee,displayName:te,description:ne,tags:ae,props:oe,events:se,sourceFile:ie},re=y({name:"TransitionExpand",__name:"index",setup(n){const a=A({}),t=e=>{const l=a.height;e.style.overflow=a.overflow,e.style.height=l},_=e=>{a.transition=e.style.transition,a.overflow=e.style.overflow,a.height=e.style.height},c=e=>{e.style.overflow="hidden",e.style.setProperty("transition","none","important");const l=`${e.offsetHeight}px`;e.style.height="0",e.offsetHeight,e.style.transition=a.transition,requestAnimationFrame(()=>{e.style.height=l})},i=e=>{a.transition="",a.overflow=e.style.overflow,a.height=e.style.height,e.style.overflow="hidden",e.style.height=`${e.offsetHeight}px`,e.offsetHeight,requestAnimationFrame(()=>{e.style.height="0"})};return(e,l)=>(s(),f(N,{name:"on-expand",onBeforeEnter:_,onEnter:c,onAfterEnter:t,onEnterCancelled:t,onLeave:i,onAfterLeave:t,onLeaveCancelled:t},{default:v(()=>[E(e.$slots,"default")]),_:3}))}}),le=n=>(S("data-v-f031718b"),n=n(),M(),n),pe=["innerHTML"],me=le(()=>o("i",{class:"icon"},null,-1)),de={class:"body"},ue={class:"content"},_e=["innerHTML"],fe=y({name:"OnFaqItem",__name:"item",props:{q:{},a:{},active:{type:Boolean},isText:{type:Boolean}},emits:["update:active"],setup(n,{emit:a}){const c=b(n,"active",a,{passive:!0});return(i,e)=>{const l=C,q=re;return s(),d("article",{class:H(["faq-item",{"--is-active":r(c)}]),onClick:e[0]||(e[0]=x=>c.value=!r(c))},[o("header",null,[i.isText?(s(),d("span",{key:1,innerHTML:i.q},null,8,pe)):(s(),f(l,{key:0,path:i.q},null,8,["path"])),me]),o("div",de,[p(q,null,{default:v(()=>[D(o("div",ue,[i.isText?(s(),d("span",{key:1,innerHTML:i.a},null,8,_e)):(s(),f(l,{key:0,path:i.a,tag:"p"},null,8,["path"]))],512),[[B,r(c)]])]),_:1})])],2)}}}),w=h(fe,[["__scopeId","data-v-f031718b"]]);function ve(n){return typeof n=="string"?[n]:Array.isArray(n)?n:typeof n=="object"&&n?Object.values(n):[]}const he={class:"faq-list"},qe=y({name:"OnFaq",__name:"index",props:{value:{default:()=>[]},activeIndex:{default:-1}},emits:["update:activeIndex"],setup(n,{emit:a}){const t=n,c=b(t,"activeIndex",a,{passive:!0}),{$i18n:i}=P(),e=O(()=>typeof t.value=="string"?ve(i.tm(t.value)):t.value??[]),l=O(()=>typeof t.value!="string"),q=(m,g)=>{c.value=g?m:-1},x=m=>typeof t.value!="string"?t.value[m-1].a:`${t.value}.${m-1}.a`,L=m=>typeof t.value!="string"?t.value[m-1].q:`${t.value}.${m-1}.q`;return(m,g)=>{const k=w;return s(),d("div",he,[(s(!0),d(V,null,j(r(e).length,u=>(s(),f(k,{"is-text":r(l),key:u-1,active:r(c)===u-1,a:x(u),q:L(u),"onUpdate:active":T=>q(u-1,T)},null,8,["is-text","active","a","q","onUpdate:active"]))),128))])}}}),ye=h(qe,[["__scopeId","data-v-bb4dfc71"]]),xe={};function ge(n,a){const t=ye;return s(),d("div",null,[p(t,{value:[{q:"example",a:"example"},{q:"example2",a:"example2"},{q:"example3",a:"example3"}]})])}const Fe=h(xe,[["render",ge],["__scopeId","data-v-9b1d89b2"]]),$e=`<script setup lang="ts">

<\/script>

<template>
  <div>
    <on-faq
      :value="[
        {q: 'example', a: 'example'},
        {q: 'example2', a: 'example2'},
        {q: 'example3', a: 'example3'}
      ]"
    />
  </div>
</template>

<style scoped lang="scss">
.green-feedback {
  --feedback-color: #28cd28;
}
</style>
`,Oe={};function be(n,a){const t=w;return s(),d("div",null,[p(t,{a:"example",q:"example","is-text":!0})])}const Ie=h(Oe,[["render",be],["__scopeId","data-v-2d308826"]]),we=`<script setup lang="ts">

<\/script>

<template>
  <div>
    <on-faq-item
      a="example"
      q="example"
      :is-text="true"
    />
  </div>
</template>

<style scoped lang="scss">
.green-feedback {
  --feedback-color: #28cd28;
}
</style>
`,Le={class:"markdown-body"},ke=o("h1",null,"OnFaq",-1),Te=o("p",null,"Простой компонент для вывода faq",-1),Ae=o("h2",null,"Примеры использования",-1),Ee=o("h3",null,"Basic",-1),Ne=o("h3",null,"item",-1),De=o("h2",null,[o("code",null,"OnFaq"),I(" API")],-1),Be=o("h2",null,[o("code",null,"OnFaqItem"),I(" API")],-1),Ve="OnFaq | OnFrontLib Docs",je=[{property:"og:title",content:"OnFaq | OnFrontLib Docs"},{name:"twitter:title",content:"OnFaq | OnFrontLib Docs"}],Pe={__name:"on-faq",setup(n,{expose:a}){return a({frontmatter:{title:"OnFaq | OnFrontLib Docs",meta:[{property:"og:title",content:"OnFaq | OnFrontLib Docs"},{name:"twitter:title",content:"OnFaq | OnFrontLib Docs"}]}}),U({title:"OnFaq | OnFrontLib Docs",meta:[{property:"og:title",content:"OnFaq | OnFrontLib Docs"},{name:"twitter:title",content:"OnFaq | OnFrontLib Docs"}]}),(c,i)=>(s(),d("div",Le,[ke,Te,Ae,Ee,p($,{code:r($e)},{default:v(()=>[p(Fe)]),_:1},8,["code"]),Ne,p($,{code:r(we)},{default:v(()=>[p(Ie)]),_:1},8,["code"]),De,p(F,{value:r(Y)},null,8,["value"]),Be,p(F,{value:r(ce)},null,8,["value"])]))}};export{Pe as default,je as meta,Ve as title};
