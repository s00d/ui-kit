import{_ as S}from"./BI8L1cvd.js";import{E as f}from"./Cepu5Cdp.js";import{a as I,_ as y}from"./Cc5CV2ac.js";import{_ as r,o as d,j as b,w as e,b as t,d as n,g as O,c as g,a as m,q as k,s as $,I as w,r as h,t as K,u as l,G as x,F as M,p as E,f as C}from"./C296uaLE.js";import{u as N}from"./CNmpcN_a.js";import"./Dt696U6n.js";import"./CwnFFlTy.js";import"./CBge_H_R.js";const A="OnMenu",B="default",G="on-menu",V="",q={},U=[{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'li'"}},{name:"selectedKeys",required:!1,type:{name:"Array",elements:[{name:"OnMenuItemKey"}]},defaultValue:{func:!1,value:"() => []"}},{name:"openKeys",required:!1,type:{name:"Array",elements:[{name:"OnMenuItemKey"}]},defaultValue:{func:!1,value:"() => []"}},{name:"allowSelect",required:!1,type:{name:"boolean"}},{name:"selectMultiple",required:!1,type:{name:"boolean"}}],F=[{name:"update:selectedKeys",type:{names:["Array"],elements:[{name:"OnMenuItemKey"}]}},{name:"update:openKeys",type:{names:["Array"],elements:[{name:"OnMenuItemKey"}]}},{name:"click:item",type:{names:["OnMenuItemKey"]}}],J=[{name:"default"}],R="components/on-menu/index.vue",L={name:A,exportName:B,displayName:G,description:V,tags:q,props:U,events:F,slots:J,sourceFile:R},Y={};function j(p,u){const o=I,c=y;return d(),b(c,null,{default:e(()=>[t(o,{icon:"round-image"},{after:e(()=>[n(" after slot ")]),default:e(()=>[n(" Item 1 ")]),_:1}),t(o,{icon:"round-image"},{default:e(()=>[n(" Item 2 ")]),_:1}),t(o,{icon:"round-image"},{default:e(()=>[n(" Item 3 ")]),_:1}),t(o,{icon:"round-image"},{default:e(()=>[n(" Item 4 ")]),_:1})]),_:1})}const D=r(Y,[["render",j],["__scopeId","data-v-831f78d3"]]),H=`<script setup lang="ts">
<\/script>

<template>
  <on-menu>
    <on-menu-item
      icon="round-image"
    >
      Item 1
      <template #after>
        after slot
      </template>
    </on-menu-item>
    <on-menu-item
      icon="round-image"
    >
      Item 2
    </on-menu-item>
    <on-menu-item
      icon="round-image"
    >
      Item 3
    </on-menu-item>
    <on-menu-item
      icon="round-image"
    >
      Item 4
    </on-menu-item>
  </on-menu>
</template>

<style scoped lang="scss">
.on-menu {
  max-width: 300px;
}
</style>
`,P={};function T(p,u){const o=I,c=y;return d(),b(c,null,{default:e(()=>[t(o,{href:"https://google.com",target:"_blank"},{default:e(()=>[n(" Google ")]),_:1}),t(o,{href:"https://yandex.ru",target:"_blank"},{default:e(()=>[n(" Yandex ")]),_:1}),t(o,{to:"/"},{default:e(()=>[n(" Inner link ")]),_:1})]),_:1})}const z=r(P,[["render",T],["__scopeId","data-v-bbdfb28e"]]),Q=`<script setup lang="ts">
<\/script>

<template>
  <on-menu>
    <on-menu-item
      href="https://google.com"
      target="_blank"
    >
      Google
    </on-menu-item>
    <on-menu-item
      href="https://yandex.ru"
      target="_blank"
    >
      Yandex
    </on-menu-item>
    <on-menu-item
      to="/"
    >
      Inner link
    </on-menu-item>
  </on-menu>
</template>

<style scoped lang="scss">
.on-menu {
  max-width: 300px;
}
</style>
`,W={class:"on-menu-group",role:"presentation"},X={class:"title",role:"presentation"},Z={class:"items"},ee=O({__name:"on-menu-group",props:{title:{}},setup(p){return(u,o)=>{const c=w;return d(),g("li",W,[m("span",X,[k(u.$slots,"title",{},()=>[u.title?(d(),b(c,{key:0,path:u.title},null,8,["path"])):$("",!0)],!0)]),m("ul",Z,[k(u.$slots,"default",{},void 0,!0)])])}}}),ne=r(ee,[["__scopeId","data-v-8f0ab84c"]]),te={},me={role:"separator",class:"on-menu-separator"};function oe(p,u){return d(),g("li",me)}const ue=r(te,[["render",oe],["__scopeId","data-v-ef244a52"]]),se={};function ae(p,u){const o=I,c=ne,s=ue,a=y;return d(),b(a,null,{default:e(()=>[t(c,{title:"Menu group"},{default:e(()=>[t(o,{icon:"round-image"},{after:e(()=>[n(" after slot ")]),default:e(()=>[n(" Item 1 ")]),_:1}),t(o,{icon:"round-image"},{default:e(()=>[n(" Item 2 ")]),_:1})]),_:1}),t(s),t(c,null,{title:e(()=>[n(" Menu group ")]),default:e(()=>[t(o,{icon:"round-image"},{default:e(()=>[n(" Item 3 ")]),_:1}),t(o,{icon:"round-image"},{default:e(()=>[n(" Item 4 ")]),_:1})]),_:1}),t(s),t(o,{icon:"round-image"},{default:e(()=>[n(" Item 5 ")]),_:1})]),_:1})}const le=r(se,[["render",ae],["__scopeId","data-v-e8adc34c"]]),ce=`<script setup lang="ts">
<\/script>

<template>
  <on-menu>
    <on-menu-group title="Menu group">
      <on-menu-item
        icon="round-image"
      >
        Item 1
        <template #after>
          after slot
        </template>
      </on-menu-item>
      <on-menu-item
        icon="round-image"
      >
        Item 2
      </on-menu-item>
    </on-menu-group>
    <on-menu-separator />
    <on-menu-group>
      <template #title>
        Menu group
      </template>
      <on-menu-item
        icon="round-image"
      >
        Item 3
      </on-menu-item>
      <on-menu-item
        icon="round-image"
      >
        Item 4
      </on-menu-item>
    </on-menu-group>
    <on-menu-separator />
    <on-menu-item
      icon="round-image"
    >
      Item 5
    </on-menu-item>
  </on-menu>
</template>

<style scoped lang="scss">
.on-menu {
  max-width: 300px;
}
</style>
`,ie=O({__name:"submenu",setup(p){const u=h([]);return(o,c)=>{const s=I,a=y;return d(),g(M,null,[n(K(l(u))+" ",1),t(a,{"open-keys":l(u),"onUpdate:openKeys":c[0]||(c[0]=i=>x(u)?u.value=i:null)},{default:e(()=>[t(s,{name:"1"},{submenu:e(()=>[t(s,{name:"1-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(s,{name:"1-2"},{default:e(()=>[n(" Item 2 ")]),_:1}),t(s,{name:"1-3"},{submenu:e(()=>[t(s,{name:"1-3-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(s,{name:"1-3-2"},{default:e(()=>[n(" Item 2 ")]),_:1})]),default:e(()=>[n(" Item 3 ")]),_:1})]),default:e(()=>[n(" Item 1 ")]),_:1}),t(s,{name:"2"},{default:e(()=>[n(" Item 2 ")]),_:1}),t(s,{name:"3"},{submenu:e(()=>[t(s,{name:"3-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(s,{name:"3-2"},{default:e(()=>[n(" Item 2 ")]),_:1})]),default:e(()=>[n(" Item 3 ")]),_:1})]),_:1},8,["open-keys"])],64)}}}),pe=r(ie,[["__scopeId","data-v-555a18dd"]]),de=`<script setup lang="ts">
const openKeys = ref([]);
<\/script>

<template>
  {{ openKeys }}
  <on-menu v-model:open-keys="openKeys">
    <on-menu-item
      name="1"
    >
      Item 1
      <template #submenu>
        <on-menu-item
          name="1-1"
        >
          Item 1
        </on-menu-item>
        <on-menu-item
          name="1-2"
        >
          Item 2
        </on-menu-item>
        <on-menu-item
          name="1-3"
        >
          Item 3
          <template #submenu>
            <on-menu-item
              name="1-3-1"
            >
              Item 1
            </on-menu-item>
            <on-menu-item
              name="1-3-2"
            >
              Item 2
            </on-menu-item>
          </template>
        </on-menu-item>
      </template>
    </on-menu-item>
    <on-menu-item
      name="2"
    >
      Item 2
    </on-menu-item>
    <on-menu-item
      name="3"
    >
      Item 3
      <template #submenu>
        <on-menu-item
          name="3-1"
        >
          Item 1
        </on-menu-item>
        <on-menu-item
          name="3-2"
        >
          Item 2
        </on-menu-item>
      </template>
    </on-menu-item>
  </on-menu>
</template>

<style scoped lang="scss">
.on-menu {
  max-width: 300px;
}
</style>
`,_e=O({__name:"submenu-accordion",setup(p){const u=["1","3"],o=h([]);function c(s){const a=JSON.parse(JSON.stringify(l(s))),i=a.slice().reverse().find(_=>u.includes(_));o.value=a.filter(_=>_===i||!u.includes(_))}return(s,a)=>{const i=I,_=y;return d(),g(M,null,[n(K(l(o))+" ",1),t(_,{"open-keys":l(o),"onUpdate:openKeys":[a[0]||(a[0]=v=>x(o)?o.value=v:null),c]},{default:e(()=>[t(i,{name:"1"},{submenu:e(()=>[t(i,{name:"1-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(i,{name:"1-2"},{default:e(()=>[n(" Item 2 ")]),_:1}),t(i,{name:"1-3"},{submenu:e(()=>[t(i,{name:"1-3-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(i,{name:"1-3-2"},{default:e(()=>[n(" Item 2 ")]),_:1})]),default:e(()=>[n(" Item 3 ")]),_:1})]),default:e(()=>[n(" Item 1 ")]),_:1}),t(i,{name:"2"},{default:e(()=>[n(" Item 2 ")]),_:1}),t(i,{name:"3"},{submenu:e(()=>[t(i,{name:"3-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(i,{name:"3-2"},{default:e(()=>[n(" Item 2 ")]),_:1})]),default:e(()=>[n(" Item 3 ")]),_:1})]),_:1},8,["open-keys"])],64)}}}),re=r(_e,[["__scopeId","data-v-ac710371"]]),fe=`<script setup lang="ts">
import type { OnMenuItemKey } from '@onfl/components/on-menu/types';

const rootKeys = ['1', '3'] as OnMenuItemKey[];
const openKeys = ref<OnMenuItemKey[]>([]);

function onOpenKeysChange (keys: string[]) {
  const plainKeys = JSON.parse(JSON.stringify(unref(keys))) as OnMenuItemKey[];
  const latestRootOpenKey = plainKeys.slice().reverse().find((key: OnMenuItemKey) => rootKeys.includes(key));
  openKeys.value = plainKeys.filter((key) => {
    return key === latestRootOpenKey || !rootKeys.includes(key);
  });
}
<\/script>

<template>
  {{ openKeys }}
  <on-menu
    v-model:open-keys="openKeys"
    @update:open-keys="onOpenKeysChange"
  >
    <on-menu-item
      name="1"
    >
      Item 1
      <template #submenu>
        <on-menu-item
          name="1-1"
        >
          Item 1
        </on-menu-item>
        <on-menu-item
          name="1-2"
        >
          Item 2
        </on-menu-item>
        <on-menu-item
          name="1-3"
        >
          Item 3
          <template #submenu>
            <on-menu-item
              name="1-3-1"
            >
              Item 1
            </on-menu-item>
            <on-menu-item
              name="1-3-2"
            >
              Item 2
            </on-menu-item>
          </template>
        </on-menu-item>
      </template>
    </on-menu-item>
    <on-menu-item
      name="2"
    >
      Item 2
    </on-menu-item>
    <on-menu-item
      name="3"
    >
      Item 3
      <template #submenu>
        <on-menu-item
          name="3-1"
        >
          Item 1
        </on-menu-item>
        <on-menu-item
          name="3-2"
        >
          Item 2
        </on-menu-item>
      </template>
    </on-menu-item>
  </on-menu>
</template>

<style scoped lang="scss">
.on-menu {
  max-width: 300px;
}
</style>
`,Ie=O({__name:"select-simple",setup(p){const u=h([]);return(o,c)=>{const s=I,a=y;return d(),g(M,null,[n(K(l(u))+" ",1),t(a,{"selected-keys":l(u),"onUpdate:selectedKeys":c[0]||(c[0]=i=>x(u)?u.value=i:null),"allow-select":""},{default:e(()=>[t(s,{icon:"round-image"},{after:e(()=>[n(" after slot ")]),default:e(()=>[n(" Item 1 ")]),_:1}),t(s,{icon:"round-image"},{default:e(()=>[n(" Item 2 ")]),_:1}),t(s,{icon:"round-image"},{default:e(()=>[n(" Item 3 ")]),_:1}),t(s,{icon:"round-image"},{default:e(()=>[n(" Item 4 ")]),_:1}),t(s,{icon:"round-image"},{default:e(()=>[n(" Item 5 ")]),_:1})]),_:1},8,["selected-keys"])],64)}}}),ye=r(Ie,[["__scopeId","data-v-40bf7892"]]),ge=`<script setup lang="ts">
const selectedItems = ref([]);
<\/script>

<template>
  {{ selectedItems }}
  <on-menu
    v-model:selected-keys="selectedItems"
    allow-select
  >
    <on-menu-item
      icon="round-image"
    >
      Item 1
      <template #after>
        after slot
      </template>
    </on-menu-item>
    <on-menu-item
      icon="round-image"
    >
      Item 2
    </on-menu-item>
    <on-menu-item
      icon="round-image"
    >
      Item 3
    </on-menu-item>
    <on-menu-item
      icon="round-image"
    >
      Item 4
    </on-menu-item>
    <on-menu-item
      icon="round-image"
    >
      Item 5
    </on-menu-item>
  </on-menu>
</template>

<style scoped lang="scss">
.on-menu {
  max-width: 300px;
}
</style>
`,he=p=>(E("data-v-4a5399dc"),p=p(),C(),p),Ke=he(()=>m("br",null,null,-1)),xe=O({__name:"select-multiple",setup(p){const u=h([]),o=h([]);return(c,s)=>{const a=I,i=y;return d(),g(M,null,[n(" openKeys: "+K(l(u)),1),Ke,n(" selectedKeys: "+K(l(o))+" ",1),t(i,{"open-keys":l(u),"onUpdate:openKeys":s[0]||(s[0]=_=>x(u)?u.value=_:null),"selected-keys":l(o),"onUpdate:selectedKeys":s[1]||(s[1]=_=>x(o)?o.value=_:null),"allow-select":"","select-multiple":""},{default:e(()=>[t(a,{name:"1"},{submenu:e(()=>[t(a,{name:"1-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(a,{name:"1-2"},{default:e(()=>[n(" Item 2 ")]),_:1}),t(a,{name:"1-3"},{submenu:e(()=>[t(a,{name:"1-3-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(a,{name:"1-3-2"},{default:e(()=>[n(" Item 2 ")]),_:1})]),default:e(()=>[n(" Item 3 ")]),_:1})]),default:e(()=>[n(" Item 1 ")]),_:1}),t(a,{name:"2"},{default:e(()=>[n(" Item 2 ")]),_:1}),t(a,{name:"3"},{submenu:e(()=>[t(a,{name:"3-1"},{default:e(()=>[n(" Item 1 ")]),_:1}),t(a,{name:"3-2"},{default:e(()=>[n(" Item 2 ")]),_:1})]),default:e(()=>[n(" Item 3 ")]),_:1})]),_:1},8,["open-keys","selected-keys"])],64)}}}),Oe=r(xe,[["__scopeId","data-v-4a5399dc"]]),be=`<script setup lang="ts">
const openKeys = ref([]);
const selectedKeys = ref([]);
<\/script>

<template>
  openKeys: {{ openKeys }}<br>
  selectedKeys: {{ selectedKeys }}
  <on-menu
    v-model:open-keys="openKeys"
    v-model:selected-keys="selectedKeys"
    allow-select
    select-multiple
  >
    <on-menu-item
      name="1"
    >
      Item 1
      <template #submenu>
        <on-menu-item
          name="1-1"
        >
          Item 1
        </on-menu-item>
        <on-menu-item
          name="1-2"
        >
          Item 2
        </on-menu-item>
        <on-menu-item
          name="1-3"
        >
          Item 3
          <template #submenu>
            <on-menu-item
              name="1-3-1"
            >
              Item 1
            </on-menu-item>
            <on-menu-item
              name="1-3-2"
            >
              Item 2
            </on-menu-item>
          </template>
        </on-menu-item>
      </template>
    </on-menu-item>
    <on-menu-item
      name="2"
    >
      Item 2
    </on-menu-item>
    <on-menu-item
      name="3"
    >
      Item 3
      <template #submenu>
        <on-menu-item
          name="3-1"
        >
          Item 1
        </on-menu-item>
        <on-menu-item
          name="3-2"
        >
          Item 2
        </on-menu-item>
      </template>
    </on-menu-item>
  </on-menu>
</template>

<style scoped lang="scss">
.on-menu {
  max-width: 300px;
}
</style>
`,Me={class:"markdown-body"},ke=m("h1",null,"OnMenu",-1),ve=m("p",null,"Простой компонент для вывода on-menu",-1),Se=m("h2",null,"Примеры использования",-1),$e=m("h3",null,"Basic",-1),we=m("h3",null,"Links",-1),Ee=m("p",null,[n("Для отображения ссылок передайте параметр "),m("code",null,"to"),n(" или "),m("code",null,"href"),n(" в компонент "),m("code",null,"OnMenuItem"),n(".")],-1),Ce=m("h3",null,"Groups",-1),Ne=m("p",null,[n("Для отображения групп используйте компонент "),m("code",null,"OnMenuGroup"),n(". Для отображения разделителя - "),m("code",null,"OnMenuSeparator")],-1),Ae=m("h3",null,"Submenu",-1),Be=m("p",null,"Компонент может отображать многоуровневые меню.",-1),Ge=m("p",null,[n("Для управления состоянием вложенных меню (открыто/закрыто) используется параметр "),m("code",null,"openKeys"),n(". Ключи назначаются компонентам "),m("code",null,"OnMenuItem"),n(" в параметре "),m("code",null,"name"),n(".")],-1),Ve=m("p",null,"Ниже приведён пример реализации “аккордеона”, когда на верхнем уровне может быть открыто лишь одно вложенное меню.",-1),qe=m("h3",null,"Allow select",-1),Ue=m("p",null,[n("Для того чтобы разрешить пользователю выбирать (отмечать) пункт меню, передайте параметр "),m("code",null,"allow-select"),n(".")],-1),Fe=m("p",null,[n("Список выбранных в данный момент пунктов меню можно передать в параметре "),m("code",null,"selectedKeys"),n(". Ключи назначаются компонентам "),m("code",null,"OnMenuItem"),n(" в параметре "),m("code",null,"name"),n(".")],-1),Je=m("p",null,[n("По умолчанию, можно выбрать лишь один элемент. Чтобы разрешить выбор нескольких элементов одновременно, передайте параметр "),m("code",null,"selectMultiple"),n(".")],-1),Re=m("p",null,"Пункты меню, содержащие вложенные меню, нельзя выбрать.",-1),Le=m("h2",null,"API",-1),We=[],Xe={__name:"on-menu",setup(p,{expose:u}){return u({frontmatter:{meta:[]}}),N({meta:[]}),(s,a)=>(d(),g("div",Me,[ke,ve,Se,$e,t(f,{code:l(H)},{default:e(()=>[t(D)]),_:1},8,["code"]),we,Ee,t(f,{code:l(Q)},{default:e(()=>[t(z)]),_:1},8,["code"]),Ce,Ne,t(f,{code:l(ce)},{default:e(()=>[t(le)]),_:1},8,["code"]),Ae,Be,Ge,t(f,{code:l(de)},{default:e(()=>[t(pe)]),_:1},8,["code"]),Ve,t(f,{code:l(fe)},{default:e(()=>[t(re)]),_:1},8,["code"]),qe,Ue,Fe,t(f,{code:l(ge)},{default:e(()=>[t(ye)]),_:1},8,["code"]),Je,Re,t(f,{code:l(be)},{default:e(()=>[t(Oe)]),_:1},8,["code"]),Le,t(S,{value:l(L)},null,8,["value"])]))}};export{Xe as default,We as meta};
