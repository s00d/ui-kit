import{_ as C}from"./BI8L1cvd.js";import{E as h}from"./Cepu5Cdp.js";import{_ as B}from"./D9cpl7au.js";import{g as x,D,ab as E,h as $,k as F,v as I,u as t,o as c,c as w,a as n,q as v,s as b,j as _,w as i,d as u,l as M,p as L,f as N,_ as f,r as A,b as a,G as S,F as q,P as z}from"./C296uaLE.js";import{u as H}from"./CNmpcN_a.js";const U="OnTranslatorBar",G="default",P="on-translator-bar",j="",R={},W=[{name:"active",description:"Управляет видимостью компонента",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideDefaultSwitch",description:'Скрывает переключатель "Режим переводчика"',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMeta",description:'Показывать переключатель "Редактор мета-тегов"',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeable",description:"Показывать кнопку закрытия",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sticky",description:"Добавить свойство position: sticky",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showServerIndicator",description:"Показывать индикатор серверных переводов",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],J=[{name:"update:active"},{name:"close"}],K=[{name:"server-indicator"},{name:"translate-mode-label"},{name:"meta-editor-label"},{name:"default"}],Q="components/on-translator-bar/index.vue",X={name:U,exportName:G,displayName:P,description:j,tags:R,props:W,events:J,slots:K,sourceFile:Q},Y=o=>(L("data-v-e5e02cb0"),o=o(),N(),o),Z={class:"content"},ee=Y(()=>n("span",{class:"server-indicator",title:"Server translations"},"S",-1)),te=x({name:"OnTranslatorBar",__name:"index",props:{active:{type:Boolean,default:!1},hideDefaultSwitch:{type:Boolean,default:!1},showMeta:{type:Boolean,default:!1},closeable:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},showServerIndicator:{type:Boolean,default:!1}},emits:["update:active","close"],setup(o,{emit:e}){const s=o,l=e,p=D(s,"active",l,{passive:!0}),d=E(),m=$(()=>({"on-translator-bar":!0,"--is-active":p.value,"--sticky":s.sticky})),V=r=>{d.setTranslateMode(r)},k=()=>{p.value=!1,l("close")};return(r,O)=>{const T=B;return F((c(),w("div",{class:M(t(m))},[n("div",Z,[r.showServerIndicator&&t(d).isServerTranslations?v(r.$slots,"server-indicator",{key:0},()=>[ee],!0):b("",!0),r.hideDefaultSwitch?b("",!0):(c(),_(T,{key:1,"model-value":t(d).translateMode,class:"switch --mode",size:"sm","onUpdate:modelValue":V},{default:i(()=>[v(r.$slots,"translate-mode-label",{},()=>[u(" Переводчик ")],!0)]),_:3},8,["model-value"])),r.showMeta?(c(),_(T,{key:2,modelValue:t(d).metaHeadEditor,"onUpdate:modelValue":O[0]||(O[0]=g=>t(d).metaHeadEditor=g),class:"switch --meta",size:"sm"},{default:i(()=>[v(r.$slots,"meta-editor-label",{},()=>[u(" Meta-теги ")],!0)]),_:3},8,["modelValue"])):b("",!0),v(r.$slots,"default",{},void 0,!0),r.closeable?(c(),w("button",{key:3,class:"close","aria-label":"close",onClick:k})):b("",!0)])],2)),[[I,t(p)]])}}}),y=f(te,[["__scopeId","data-v-e5e02cb0"]]),ae={};function ne(o,e){const s=y;return c(),_(s,{active:""})}const oe=f(ae,[["render",ne]]),se=`<script setup lang="ts">

<\/script>

<template>
  <on-translator-bar active />
</template>

<style scoped lang="scss">

</style>
`,le={};function re(o,e){const s=y;return c(),_(s,{active:"","show-meta":""})}const ce=f(le,[["render",re]]),ie=`<script setup lang="ts">

<\/script>

<template>
  <on-translator-bar
    active
    show-meta
  />
</template>

<style scoped lang="scss">

</style>
`,de=x({__name:"closeable",setup(o){const e=A(!0);return(s,l)=>{const p=B,d=y;return c(),w(q,null,[a(p,{modelValue:t(e),"onUpdate:modelValue":l[0]||(l[0]=m=>S(e)?e.value=m:null)},{default:i(()=>[u(" isActive ")]),_:1},8,["modelValue"]),a(d,{active:t(e),"onUpdate:active":l[1]||(l[1]=m=>S(e)?e.value=m:null),"show-meta":"",closeable:""},null,8,["active"])],64)}}}),ue=f(de,[["__scopeId","data-v-62913b83"]]),pe=`<script setup lang="ts">
const isActive = ref(true);
<\/script>

<template>
  <on-switch v-model="isActive">
    isActive
  </on-switch>
  <on-translator-bar
    v-model:active="isActive"
    show-meta
    closeable
  />
</template>

<style scoped lang="scss">
.on-switch {
  margin-bottom: 16px;
}
</style>
`,me={};function _e(o,e){const s=B,l=y;return c(),_(l,{active:"","show-meta":""},{default:i(()=>[a(s,{size:"sm"},{default:i(()=>[u(" God mode ")]),_:1})]),_:1})}const fe=f(me,[["render",_e]]),he=`<template>
  <on-translator-bar
    active
    show-meta
  >
    <on-switch size="sm">
      God mode
    </on-switch>
  </on-translator-bar>
</template>
`,ve={class:"markdown-body"},be=z("<h1>OnTranslatorBar</h1><p>Панель с переключателями режима переводчика, режима редактирования мета-тегов и т.п.</p><h2>Стили</h2><p>Компонент поставляется с базовыми стилями, без поддержки адаптивности. Это сделано с целью максимальной гибкости.</p><p>Содержимое компонента обёрнуто в элемент <code>.on-translator-bar .content</code>. Рекомендуется применить к этому селектору стили контейнера, используемые в проекте.</p><p>Для задания высоты и z-index используйте CSS-переменные <code>--on-translator-bar-height</code> и <code>--on-translator-bar-z</code>.</p><h2>Примеры использования</h2><h3>Basic</h3>",8),we=n("h3",null,"With meta",-1),ye=n("p",null,"Переключатель режима редактирования мета-тегов страницы.",-1),Be=n("p",null,[u("Управляет свойством "),n("code",null,"onTranslateStore.metaHeadEditor"),u(".")],-1),Oe=n("h3",null,"Closeable",-1),Te=n("p",null,[u("Отображает кнопку закрытия панели. При нажатии генерируется событие "),n("code",null,"close"),u(".")],-1),Se=n("h3",null,"Slot",-1),xe=n("p",null,"Дополнительные переключатели можно разместить, используя слот default.",-1),Ve=n("h2",null,"API",-1),$e="OnTranslatorBar | OnFrontLib Docs",Fe=[{property:"og:title",content:"OnTranslatorBar | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorBar | OnFrontLib Docs"}],Ie={__name:"on-translator-bar",setup(o,{expose:e}){return e({frontmatter:{title:"OnTranslatorBar | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTranslatorBar | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorBar | OnFrontLib Docs"}]}}),H({title:"OnTranslatorBar | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTranslatorBar | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslatorBar | OnFrontLib Docs"}]}),(p,d)=>(c(),w("div",ve,[be,a(h,{code:t(se)},{default:i(()=>[a(oe)]),_:1},8,["code"]),we,ye,Be,a(h,{code:t(ie)},{default:i(()=>[a(ce)]),_:1},8,["code"]),Oe,Te,a(h,{code:t(pe)},{default:i(()=>[a(ue)]),_:1},8,["code"]),Se,xe,a(h,{code:t(he)},{default:i(()=>[a(fe)]),_:1},8,["code"]),Ve,a(C,{value:t(X)},null,8,["value"])]))}};export{Ie as default,Fe as meta,$e as title};
