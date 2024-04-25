import{_ as T}from"./ApiDoc.vue.BBsrfSvH.js";import{E as _}from"./index.CqeEYO5W.js";import{g as z,E as V,h,o as l,c as u,j as $,w as d,q as b,N as k,u as e,m as C,s as w,F as D,G as I,d as g,t as N,l as S,e as q,p as A,f as M,a as o,_ as f,b as t}from"./entry._doioHTx.js";import{u as H}from"./vue.f36acd1f.BVcziSBg.js";const j="OnPagination",G="default",R="on-pagination",W="",J={},K=[{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:"string"}]},defaultValue:{func:!1,value:"'md'"}},{name:"filled",required:!1,type:{name:"boolean"}},{name:"currentPage",required:!0,type:{name:"number"}},{name:"totalPages",required:!0,type:{name:"number"}},{name:"itemsTag",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"'button'"}},{name:"linksCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"hideArrows",required:!1,type:{name:"boolean"}},{name:"toFn",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"undefined"}},{name:"itemPropsFn",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"undefined"}}],Q=[{name:"update:currentPage"}],U=[{name:"prev"},{name:"item"},{name:"next"}],X="components/on-pagination/index.vue",Y={name:j,exportName:G,displayName:R,description:W,tags:J,props:K,events:Q,slots:U,sourceFile:X},E=i=>(A("data-v-6fee1a17"),i=i(),M(),i),Z=E(()=>o("svg",{viewBox:"64 64 896 896",focusable:"false",fill:"currentColor"},[o("path",{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"})],-1)),nn=E(()=>o("svg",{viewBox:"64 64 896 896",focusable:"false",fill:"currentColor"},[o("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"})],-1)),en=z({name:"OnPagination",__name:"index",props:{size:{default:"md"},filled:{type:Boolean},currentPage:{},totalPages:{},itemsTag:{default:"button"},linksCount:{default:5},hideArrows:{type:Boolean},toFn:{type:Function,default:void 0},itemPropsFn:{type:Function,default:void 0}},emits:["update:currentPage"],setup(i,{emit:r}){const n=i,s=V(n,"currentPage",r,{passive:!0}),y=h(()=>Math.min(n.linksCount,n.totalPages)),B=h(()=>{const a=Math.floor(y.value/2);return n.totalPages<=s.value+a?Math.max(n.totalPages-n.linksCount+1,1):Math.max(s.value-a,1)}),m=h(()=>Array.from({length:y.value},(a,p)=>p+B.value)),P=h(()=>n.itemsTag==="nuxt-link"||n.itemsTag==="NuxtLink"?q:n.itemsTag),x=a=>{var O;const p=((O=n.itemPropsFn)==null?void 0:O.call(n,a))??{};if(!m.value.includes(a))return p;const c={};return n.toFn&&(n.itemsTag==="a"?c.href=n.toFn(a).toString():c.to=n.toFn(a)),{...c,...p}},F=a=>{m.value.includes(a)&&(s.value=a)};return(a,p)=>(l(),u("div",{class:S(["on-pagination",[`--size-${a.size}`,{"--filled":a.filled}]])},[a.hideArrows?w("",!0):(l(),$(C(e(P)),k({key:0},x(e(s)-1),{class:["item item-prev",{"--disabled":!e(m).length||e(s)<=e(m)[0]}],"aria-label":"prev",onClick:p[0]||(p[0]=c=>F(e(s)-1))}),{default:d(()=>[b(a.$slots,"prev",{},()=>[Z],!0)]),_:3},16,["class"])),(l(!0),u(D,null,I(e(m),c=>(l(),$(C(e(P)),k({key:c,class:["item",{"--active":c===e(s)}]},x(c),{onClick:O=>F(c)}),{default:d(()=>[b(a.$slots,"item",{},()=>[g(N(c),1)],!0)]),_:2},1040,["class","onClick"]))),128)),a.hideArrows?w("",!0):(l(),$(C(e(P)),k({key:1},x(e(s)-1),{class:["item item-next",{"--disabled":!e(m).length||e(s)>=e(m)[e(m).length-1]}],"aria-label":"next",onClick:p[1]||(p[1]=c=>F(e(s)+1))}),{default:d(()=>[b(a.$slots,"next",{},()=>[nn],!0)]),_:3},16,["class"]))],2))}}),v=f(en,[["__scopeId","data-v-6fee1a17"]]),tn={},an={class:"demo"};function on(i,r){const n=v;return l(),u("div",an,[t(n,{"current-page":1,"total-pages":10})])}const sn=f(tn,[["render",on]]),ln=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-pagination
      :current-page="1"
      :total-pages="10"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,cn={},rn={class:"demo"};function pn(i,r){const n=v;return l(),u("div",rn,[t(n,{filled:"","current-page":1,"total-pages":10})])}const dn=f(cn,[["render",pn]]),un=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-pagination
      filled
      :current-page="1"
      :total-pages="10"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,mn={},gn={class:"demo"};function _n(i,r){const n=v;return l(),u("div",gn,[t(n,{"current-page":1,"total-pages":10,"links-count":8})])}const fn=f(mn,[["render",_n]]),vn=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-pagination
      :current-page="1"
      :total-pages="10"
      :links-count="8"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,hn={},yn={class:"demo"};function Pn(i,r){const n=v;return l(),u("div",yn,[t(n,{"hide-arrows":"","current-page":1,"total-pages":10})])}const xn=f(hn,[["render",Pn]]),Fn=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-pagination
      hide-arrows
      :current-page="1"
      :total-pages="10"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,On={class:"demo"},$n=z({__name:"links-fn",setup(i){const r=n=>`#page-${n}`;return(n,L)=>{const s=v;return l(),u("div",On,[t(s,{"items-tag":"a","current-page":1,"total-pages":10,"to-fn":r})])}}}),bn=`<script setup lang="ts">
const toFn = (page: number) => \`#page-\${page}\`;
<\/script>

<template>
  <div class="demo">
    <on-pagination
      items-tag="a"
      :current-page="1"
      :total-pages="10"
      :to-fn="toFn"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,kn={},Cn={class:"demo"};function Ln(i,r){const n=v;return l(),u("div",Cn,[t(n,{size:"sm","current-page":1,"total-pages":10}),t(n,{size:"md","current-page":1,"total-pages":10}),t(n,{size:"lg","current-page":1,"total-pages":10})])}const wn=f(kn,[["render",Ln],["__scopeId","data-v-8e275c0a"]]),zn=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-pagination
      size="sm"
      :current-page="1"
      :total-pages="10"
    />
    <on-pagination
      size="md"
      :current-page="1"
      :total-pages="10"
    />
    <on-pagination
      size="lg"
      :current-page="1"
      :total-pages="10"
    />
  </div>
</template>

<style scoped lang="scss">
.on-pagination {
  margin-bottom: 16px;
}
</style>
`,En={class:"markdown-body"},Bn=o("h1",null,"OnPagination",-1),Tn=o("h2",null,"Примеры использования",-1),Vn=o("h3",null,"Basic",-1),Dn=o("h3",null,"Filled style",-1),In=o("h3",null,"Links count",-1),Nn=o("h3",null,"Without prev/next",-1),Sn=o("h3",null,"Links",-1),qn=o("p",null,[g("Для того чтобы изменить тег элементов, используйте параметр "),o("code",null,"itemsTag"),g(".")],-1),An=o("p",null,[g("При отображении ссылок передайте функцию, возвращающую ссылку, в параметр "),o("code",null,"toFn"),g(". Единственным аргументом функции является номер страницы.")],-1),Mn=o("h3",null,"Sizes",-1),Hn=o("p",null,[g("Доступно три размера, по аналогии с компонентом "),o("code",null,"OnBtn"),g(".")],-1),jn=o("h2",null,"API",-1),Kn="OnPagination | OnFrontLib Docs",Qn=[{property:"og:title",content:"OnPagination | OnFrontLib Docs"},{name:"twitter:title",content:"OnPagination | OnFrontLib Docs"}],Un={__name:"on-pagination",setup(i,{expose:r}){return r({frontmatter:{title:"OnPagination | OnFrontLib Docs",meta:[{property:"og:title",content:"OnPagination | OnFrontLib Docs"},{name:"twitter:title",content:"OnPagination | OnFrontLib Docs"}]}}),H({title:"OnPagination | OnFrontLib Docs",meta:[{property:"og:title",content:"OnPagination | OnFrontLib Docs"},{name:"twitter:title",content:"OnPagination | OnFrontLib Docs"}]}),(s,y)=>(l(),u("div",En,[Bn,Tn,Vn,t(_,{code:e(ln)},{default:d(()=>[t(sn)]),_:1},8,["code"]),Dn,t(_,{code:e(un)},{default:d(()=>[t(dn)]),_:1},8,["code"]),In,t(_,{code:e(vn)},{default:d(()=>[t(fn)]),_:1},8,["code"]),Nn,t(_,{code:e(Fn)},{default:d(()=>[t(xn)]),_:1},8,["code"]),Sn,qn,An,t(_,{code:e(bn)},{default:d(()=>[t($n)]),_:1},8,["code"]),Mn,Hn,t(_,{code:e(zn)},{default:d(()=>[t(wn)]),_:1},8,["code"]),jn,t(T,{value:e(Y)},null,8,["value"])]))}};export{Un as default,Qn as meta,Kn as title};
