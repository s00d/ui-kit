import{_ as C}from"./BI8L1cvd.js";import{E as O}from"./Cepu5Cdp.js";import{g as D,r as v,h,e as $,y as F,o as m,j as R,w as E,a as f,M as L,u as n,l as q,m as B,a4 as o,_ as w,c as g,b as a,F as A,H as P,G as b,d as N,$ as U,P as T}from"./C296uaLE.js";import{_ as j}from"./sshmS7Co.js";import{_ as H}from"./BNNEjD4f.js";import{u as G}from"./CNmpcN_a.js";import"./D12PdOEx.js";import"./DiFNyx3A.js";const M="default",Y="on-social-icon",J="",K={},Q=[{name:"service",description:"Название социальной сети",required:!0,type:{name:"ISocialService"}},{name:"size",description:"Размер иконки",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:"string"}]},defaultValue:{func:!1,value:"'lg'"}},{name:"form",description:"Форма иконки",required:!1,type:{name:"union",elements:[{name:'"circle"'},{name:'"square"'}]},defaultValue:{func:!1,value:"'circle'"}},{name:"color",description:"Цвет иконки",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"white-black"'},{name:'"black-white"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"svgFill",description:"Цвет svg-иконки (параметр fill)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"tag",description:"HTML-тег компонента. Поддерживается nuxt-link.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],W="components/on-social-icon/index.vue",X={exportName:M,displayName:Y,description:J,tags:K,props:Q,sourceFile:W},Z=D({__name:"index",props:{service:{},size:{default:"lg"},form:{default:"circle"},color:{default:"default"},svgFill:{default:void 0},tag:{default:"div"}},async setup(x){const t=x,r=v(null),_={blogger:"#fb8f3d",delicious:"#31a9ff",digg:"#000",evernote:"#24d666",facebook:"#3c5a99",github:"#000",google:"#fff",linkedin:"#0083be",lj:"#0d425a",moimir:"#168de2",ok:"#f70",onlinesim:"#1890ff",pinterest:"#c20724",pocket:"#ee4056",qzone:"#f5b53c",reddit:"#ff4500",renren:"#1760a7","sina-weibo":"#c53220",skype:"#00aff0",surfingbird:"#30baff",telegram:"#64a9dc","tencent-weibo":"#53a9d7",tumblr:"#547093",twitter:"#0f1419",viber:"#7b519d",vk:"#07f",whatsapp:"#65bc54",yandex:"#fc3f1d",youtube:"#ff0000"},u=Object.assign({"./icons/blogger.svg":()=>o(()=>import("./BMVe8PZy.js"),[],import.meta.url).then(e=>e.default),"./icons/delicious.svg":()=>o(()=>import("./DfZ0M0AG.js"),[],import.meta.url).then(e=>e.default),"./icons/digg.svg":()=>o(()=>import("./0ar_PZm-.js"),[],import.meta.url).then(e=>e.default),"./icons/evernote.svg":()=>o(()=>import("./EEs7eCdj.js"),[],import.meta.url).then(e=>e.default),"./icons/facebook.svg":()=>o(()=>import("./B247iuTX.js"),[],import.meta.url).then(e=>e.default),"./icons/github.svg":()=>o(()=>import("./C9nSpiWO.js"),[],import.meta.url).then(e=>e.default),"./icons/google.svg":()=>o(()=>import("./CTZ-ji4k.js"),[],import.meta.url).then(e=>e.default),"./icons/linkedin.svg":()=>o(()=>import("./CS-WtjRw.js"),[],import.meta.url).then(e=>e.default),"./icons/lj.svg":()=>o(()=>import("./GiUrnr_Y.js"),[],import.meta.url).then(e=>e.default),"./icons/moimir.svg":()=>o(()=>import("./O4KryQLl.js"),[],import.meta.url).then(e=>e.default),"./icons/ok.svg":()=>o(()=>import("./CqVLUTEt.js"),[],import.meta.url).then(e=>e.default),"./icons/onlinesim.svg":()=>o(()=>import("./DTDvZrSb.js"),[],import.meta.url).then(e=>e.default),"./icons/pinterest.svg":()=>o(()=>import("./BgbjT66s.js"),[],import.meta.url).then(e=>e.default),"./icons/pocket.svg":()=>o(()=>import("./CNcGMQ5z.js"),[],import.meta.url).then(e=>e.default),"./icons/qzone.svg":()=>o(()=>import("./MbaEUZiv.js"),[],import.meta.url).then(e=>e.default),"./icons/reddit.svg":()=>o(()=>import("./BAD1LubJ.js"),[],import.meta.url).then(e=>e.default),"./icons/renren.svg":()=>o(()=>import("./BUBGM_3K.js"),[],import.meta.url).then(e=>e.default),"./icons/sina-weibo.svg":()=>o(()=>import("./DmKnV7YP.js"),[],import.meta.url).then(e=>e.default),"./icons/skype.svg":()=>o(()=>import("./DO81qtuA.js"),[],import.meta.url).then(e=>e.default),"./icons/surfingbird.svg":()=>o(()=>import("./CO2u9C8G.js"),[],import.meta.url).then(e=>e.default),"./icons/telegram.svg":()=>o(()=>import("./CCXxfrB3.js"),[],import.meta.url).then(e=>e.default),"./icons/tencent-weibo.svg":()=>o(()=>import("./Cl4iRYBz.js"),[],import.meta.url).then(e=>e.default),"./icons/tumblr.svg":()=>o(()=>import("./ButUCiF5.js"),[],import.meta.url).then(e=>e.default),"./icons/twitter.svg":()=>o(()=>import("./CzlyK4_m.js"),[],import.meta.url).then(e=>e.default),"./icons/viber.svg":()=>o(()=>import("./Bcq2TvNc.js"),[],import.meta.url).then(e=>e.default),"./icons/vk.svg":()=>o(()=>import("./BDoAVW-d.js"),[],import.meta.url).then(e=>e.default),"./icons/whatsapp.svg":()=>o(()=>import("./RCJ8I4J2.js"),[],import.meta.url).then(e=>e.default),"./icons/yandex.svg":()=>o(()=>import("./BtF9Pdif.js"),[],import.meta.url).then(e=>e.default),"./icons/youtube.svg":()=>o(()=>import("./B46dwuJs.js"),[],import.meta.url).then(e=>e.default)});let d=null;const p=h(()=>{var e,i;return((e=t.tag)==null?void 0:e.toLowerCase())==="nuxt-link"||((i=t.tag)==null?void 0:i.toLowerCase())==="nuxtlink"?$??"div":t.tag??"div"}),k=async()=>{d=t.service.toLowerCase();const e=`./icons/${d}.svg`;u[e]&&u[e]().then(i=>{d===t.service&&(r.value=i??null)})};k();const y=h(()=>{if(!r.value)return null;const e=/<path\s+([^>]*)fill="([^"]*)"/g;let i=r.value;return t.svgFill?i=i.replace(e,`<path $1fill="${t.svgFill}"`):t.color==="white-black"?i=i.replace(e,'<path $1fill="#000"'):t.color==="black-white"&&(i=i.replace(e,'<path $1fill="#fff"')),I(i)});F(()=>t.service,k);const I=e=>window.btoa(decodeURIComponent(encodeURIComponent(e))),c=h(()=>({backgroundImage:y?`url(data:image/svg+xml;base64,${y.value})`:void 0})),s=h(()=>({"--on-social-icon-bg":t.color==="default"?_[t.service]??void 0:void 0})),V=h(()=>({"on-social-icon":!0,[`--s-${t.service.toLowerCase()}`]:!0,[`--f-${t.form}`]:!0,[`--size-${t.size}`]:!0,[`--c-${t.color}`]:!0}));return(e,i)=>(m(),R(B(n(p)),{class:q(["on-social-icon",n(V)]),style:L(n(s))},{default:E(()=>[f("i",{style:L(n(c))},null,4)]),_:1},8,["class","style"]))}}),z=w(Z,[["__scopeId","data-v-fdead197"]]),ee={};function oe(x,t){const r=z;return m(),g("div",null,[a(r,{service:"youtube"})])}const te=w(ee,[["render",oe]]),ne=`<script setup lang="ts">

<\/script>

<template>
  <div>
    <on-social-icon
      service="youtube"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
`,ie=["blogger","delicious","digg","evernote","facebook","github","google","linkedin","lj","moimir","ok","onlinesim","pinterest","pocket","qzone","reddit","renren","sina-weibo","skype","surfingbird","telegram","tencent-weibo","tumblr","twitter","viber","vk","whatsapp","yandex","youtube"],le={class:"container"},se={class:"services"},ae={class:"body"},re={class:"header"},ce={class:"icons"},de="#308efd",ue=D({__name:"full-demo",setup(x){const t=ie,r=v(["onlinesim","yandex","vk","twitter","youtube"]),_=v("lg"),u=v("default"),d=v("circle"),p=v(!1),k=["sm","md","lg","xl","custom"].map(c=>({key:c,val:c})),y=["circle","square"].map(c=>({key:c,val:c})),I=["default","white-black","black-white"].map(c=>({key:c,val:c}));return(c,s)=>{const V=U,e=j,i=H,S=z;return m(),g("div",le,[f("div",se,[a(e,{modelValue:n(r),"onUpdate:modelValue":s[0]||(s[0]=l=>b(r)?r.value=l:null)},{default:E(()=>[(m(!0),g(A,null,P(n(t),l=>(m(),g("div",{key:l},[a(V,{value:l,label:l},null,8,["value","label"])]))),128))]),_:1},8,["modelValue"])]),f("div",ae,[f("div",re,[a(i,{modelValue:n(_),"onUpdate:modelValue":s[1]||(s[1]=l=>b(_)?_.value=l:null),list:n(k),size:"md"},null,8,["modelValue","list"]),a(i,{modelValue:n(u),"onUpdate:modelValue":s[2]||(s[2]=l=>b(u)?u.value=l:null),list:n(I),size:"md"},null,8,["modelValue","list"]),a(i,{modelValue:n(d),"onUpdate:modelValue":s[3]||(s[3]=l=>b(d)?d.value=l:null),list:n(y),size:"md"},null,8,["modelValue","list"]),a(V,{checked:n(p),"onUpdate:checked":s[4]||(s[4]=l=>b(p)?p.value=l:null)},{default:E(()=>[N(" Custom svg fill ")]),_:1},8,["checked"])]),f("div",ce,[(m(!0),g(A,null,P(n(r),l=>(m(),R(S,{key:l,service:l,color:n(u),size:n(_),form:n(d),"svg-fill":n(p)?de:void 0},null,8,["service","color","size","form","svg-fill"]))),128))])])])}}}),me=w(ue,[["__scopeId","data-v-d2e01cf0"]]),_e=`<script setup lang="ts">
import { socialServicesArray } from '@onfl/components/on-social-icon/services';

const availableServices = socialServicesArray;
const selectedServices = ref(['onlinesim', 'yandex', 'vk', 'twitter', 'youtube']);
const size = ref('lg');
const color = ref('default');
const form = ref('circle');
const customFill = ref(false);
const customFillColor = '#308efd';
const sizes = ['sm', 'md', 'lg', 'xl', 'custom'].map(val => ({ key: val, val }));
const forms = ['circle', 'square'].map(val => ({ key: val, val }));
const colors = ['default', 'white-black', 'black-white'].map(val => ({ key: val, val }));
<\/script>

<template>
  <div class="container">
    <div class="services">
      <on-checkbox-group v-model="selectedServices">
        <div
          v-for="service in availableServices"
          :key="service"
        >
          <on-checkbox
            :value="service"
            :label="service"
          />
        </div>
      </on-checkbox-group>
    </div>
    <div class="body">
      <div class="header">
        <on-dropdown
          v-model="size"
          :list="sizes"
          size="md"
        />
        <on-dropdown
          v-model="color"
          :list="colors"
          size="md"
        />
        <on-dropdown
          v-model="form"
          :list="forms"
          size="md"
        />
        <on-checkbox v-model:checked="customFill">
          Custom svg fill
        </on-checkbox>
      </div>
      <div class="icons">
        <on-social-icon
          v-for="service in selectedServices"
          :key="service"
          :service="service"
          :color="color"
          :size="size"
          :form="form"
          :svg-fill="customFill ? customFillColor : undefined"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
}
.services {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 16px;
  border-right: 1px solid #ededed;
  flex: 0 0 auto;
}
.body {
  flex: 1 1 auto;
}
.header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #ededed;
}
.icons {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  .on-social-icon {
    flex: 0 0 auto;
  }
}

.on-social-icon.--size-custom {
  --on-social-icon-size: 50px;
  --on-social-icon-icon-size: 40px;
}
</style>
`,pe={class:"markdown-body"},ve=T("<h1>OnSocialIcon</h1><p>Компонент для вывода иконок социальных сетей.</p><p>Варианты использования:</p><ol><li>Ссылка на страницу компании в соц. сети</li><li>Кнопка для входа через OAuth</li><li>Кнопка “Поделиться”</li><li>Просто иконка соц. сети</li></ol><h2>Примеры использования</h2><h3>Basic</h3><p>Пример иконки Youtube</p>",7),fe=f("h3",null,"Full demo",-1),ge=T("<h2>CSS-переменные</h2><p>Внешний вид компонента можно изменить с помощью CSS-переменных:</p><ul><li><code>--on-social-icon-size</code> - размер контейнера</li><li><code>--on-social-icon-icon-size</code> - внутренний размер иконки (svg-элемента)</li><li><code>--on-social-icon-bg</code> - фон контейнера (свойство <code>background</code>)</li><li><code>--on-social-icon-radius</code> - радиус скругления углов (<code>border-radius</code>)</li></ul><h2>API</h2>",4),we=[],Oe={__name:"on-social-icon",setup(x,{expose:t}){return t({frontmatter:{meta:[]}}),G({meta:[]}),(u,d)=>(m(),g("div",pe,[ve,a(O,{code:n(ne)},{default:E(()=>[a(te)]),_:1},8,["code"]),fe,a(O,{code:n(_e)},{default:E(()=>[a(me)]),_:1},8,["code"]),ge,a(C,{value:n(X)},null,8,["value"])]))}};export{Oe as default,we as meta};
