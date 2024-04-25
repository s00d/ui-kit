import{_ as L}from"./ApiDoc.vue.BBsrfSvH.js";import{E as f}from"./index.CqeEYO5W.js";import{_,o as u,c as m,b as n,w as e,d as t,x as y,a as o,g as T,u as s,F as $,r as O,y as B,p as P,f as q}from"./entry._doioHTx.js";import{_ as k}from"./index.m8d4Zag1.js";import{u as C}from"./vue.f36acd1f.BVcziSBg.js";const I="default",E="on-btn",V="",R={},S=[{name:"tag",description:"HTML-тег элемента",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"type",description:"Тип кнопки",tags:{values:[{description:"primary, default, dashed, text, link, primary-light",title:"values"}]},required:!1,type:{name:"union",elements:[{name:"TButtonType"},{name:"string"}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",description:"Размер кнопки",tags:{values:[{description:"sm, md, lg",title:"values"}]},required:!1,type:{name:"union",elements:[{name:"TButtonSize"},{name:"string"}]},defaultValue:{func:!1,value:"'md'"}},{name:"ghost",description:"Прозрачный фон, только обводка",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"Отобразить индикатор загрузки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loaderOverlay",description:"Индикатор загрузки поверх текста кнопки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loaderClickable",description:"Разрешить событие @click при loading: true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",description:"Красная кнопка",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Отключить кнопку",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"block",description:"width: 100%",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"htmlType",description:"Значение атрибута type элемента <button />",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'button'"}},{name:"shape",description:"Форма кнопки",required:!1,type:{name:"union",elements:[{name:"TButtonShape"},{name:"string"}]},defaultValue:{func:!1,value:"'default'"}},{name:"text",description:"Текст внутри кнопки (i18n)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],F=[{name:"click"}],G=[{name:"default"}],N="components/on-btn/index.vue",M={exportName:I,displayName:E,description:V,tags:R,props:S,events:F,slots:G,sourceFile:N},A={},H={class:"demo"};function j(c,r){const a=y;return u(),m("div",H,[n(a,{type:"primary"},{default:e(()=>[t(" Primary ")]),_:1}),n(a,{type:"primary-light"},{default:e(()=>[t(" Primary Light ")]),_:1}),n(a,{type:"default"},{default:e(()=>[t(" Default ")]),_:1}),n(a,{type:"dashed"},{default:e(()=>[t(" Dashed ")]),_:1}),n(a,{type:"text"},{default:e(()=>[t(" Text ")]),_:1}),n(a,{type:"link"},{default:e(()=>[t(" Link ")]),_:1})])}const J=_(A,[["render",j],["__scopeId","data-v-cde75e44"]]),K=`<template>
  <div class="demo">
    <on-btn type="primary">
      Primary
    </on-btn>
    <on-btn type="primary-light">
      Primary Light
    </on-btn>
    <on-btn type="default">
      Default
    </on-btn>
    <on-btn type="dashed">
      Dashed
    </on-btn>
    <on-btn type="text">
      Text
    </on-btn>
    <on-btn type="link">
      Link
    </on-btn>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
</style>
`,Q={},U={class:"demo"},W={class:"row"},X={class:"row"},Y={class:"row"};function Z(c,r){const a=k,l=y;return u(),m("div",U,[o("div",W,[n(l,{type:"primary"},{default:e(()=>[n(a,{name:"_default",style:{"font-size":"24px"},icon:""})]),_:1}),n(l,{type:"primary"},{default:e(()=>[n(a,{name:"_default",style:{"font-size":"24px"},icon:"",class:"--left"}),t(" Иконка + текст ")]),_:1}),n(l,{type:"primary"},{default:e(()=>[t(" Текст + иконка "),n(a,{name:"_default",style:{"font-size":"24px"},icon:"",class:"--right"})]),_:1})]),o("div",X,[n(l,null,{default:e(()=>[n(a,{name:"_default",style:{"font-size":"24px"},icon:""})]),_:1}),n(l,null,{default:e(()=>[n(a,{name:"_default",style:{"font-size":"24px"},icon:"",class:"--left"}),t(" Иконка + текст ")]),_:1}),n(l,null,{default:e(()=>[t(" Текст + иконка "),n(a,{name:"_default",style:{"font-size":"24px"},icon:"",class:"--right"})]),_:1})]),o("div",Y,[n(l,{type:"dashed"},{default:e(()=>[n(a,{name:"_default",style:{"font-size":"24px"},icon:""})]),_:1}),n(l,{type:"dashed"},{default:e(()=>[n(a,{name:"_default",style:{"font-size":"24px"},icon:"",class:"--left"}),t(" Иконка + текст ")]),_:1}),n(l,{type:"dashed"},{default:e(()=>[t(" Текст + иконка "),n(a,{name:"_default",style:{"font-size":"24px"},icon:"",class:"--right"})]),_:1})])])}const nn=_(Q,[["render",Z],["__scopeId","data-v-e12b81d9"]]),en=`<script setup lang="ts">

<\/script>

<template>
  <div class="demo">
    <div class="row">
      <on-btn type="primary">
        <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
        />
      </on-btn>
      <on-btn type="primary">
        <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
          class="--left"
        /> Иконка + текст
      </on-btn>
      <on-btn type="primary">
        Текст + иконка <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
          class="--right"
        />
      </on-btn>
    </div>
    <div class="row">
      <on-btn>
        <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
        />
      </on-btn>
      <on-btn>
        <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
          class="--left"
        /> Иконка + текст
      </on-btn>
      <on-btn>
        Текст + иконка <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
          class="--right"
        />
      </on-btn>
    </div>
    <div class="row">
      <on-btn type="dashed">
        <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
        />
      </on-btn>
      <on-btn type="dashed">
        <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
          class="--left"
        /> Иконка + текст
      </on-btn>
      <on-btn type="dashed">
        Текст + иконка <on-svg
          name="_default"
          style="font-size: 24px;"
          icon
          class="--right"
        />
      </on-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo {
  .on-btn {
    margin-bottom: 8px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
`,tn={},an={class:"demo"},on={class:"row"},ln={class:"row"};function dn(c,r){const a=k,l=y;return u(),m("div",an,[o("div",on,[n(l,{shape:"circle",type:"primary"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{shape:"square",type:"primary"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{shape:"round",type:"primary"},{default:e(()=>[t(" Round ")]),_:1})]),o("div",ln,[n(l,{shape:"circle"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{shape:"square"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{shape:"round"},{default:e(()=>[t(" Round ")]),_:1})])])}const sn=_(tn,[["render",dn],["__scopeId","data-v-be72e15e"]]),rn=`<script setup lang="ts">

<\/script>

<template>
  <div class="demo">
    <div class="row">
      <on-btn
        shape="circle"
        type="primary"
      >
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn
        shape="square"
        type="primary"
      >
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn
        shape="round"
        type="primary"
      >
        Round
      </on-btn>
    </div>
    <div class="row">
      <on-btn shape="circle">
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn shape="square">
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn shape="round">
        Round
      </on-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
</style>
`,pn={},cn={class:"demo"},un={class:"row"},mn={class:"row"},fn={class:"row"};function _n(c,r){const a=k,l=y;return u(),m("div",cn,[o("div",un,[n(l,{size:"sm",shape:"circle",type:"default"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{size:"sm",shape:"square",type:"default"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{size:"sm",type:"default"},{default:e(()=>[t(" Small 24px ")]),_:1}),n(l,{size:"sm",type:"primary"},{default:e(()=>[t(" Small 24px ")]),_:1})]),o("div",mn,[n(l,{size:"md",shape:"circle",type:"default"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{size:"md",shape:"square",type:"default"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{size:"md",type:"default"},{default:e(()=>[t(" Medium 32px ")]),_:1}),n(l,{size:"md",type:"primary"},{default:e(()=>[t(" Medium 32px ")]),_:1})]),o("div",fn,[n(l,{size:"lg",shape:"circle",type:"default"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{size:"lg",shape:"square",type:"default"},{default:e(()=>[n(a,{icon:"",name:"_default"})]),_:1}),n(l,{size:"lg",type:"default"},{default:e(()=>[t(" Large 40px ")]),_:1}),n(l,{size:"lg",type:"primary"},{default:e(()=>[t(" Large 40px ")]),_:1})])])}const yn=_(pn,[["render",_n],["__scopeId","data-v-557b6059"]]),bn=`<script setup lang="ts">

<\/script>

<template>
  <div class="demo">
    <div class="row">
      <on-btn
        size="sm"
        shape="circle"
        type="default"
      >
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn
        size="sm"
        shape="square"
        type="default"
      >
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn
        size="sm"
        type="default"
      >
        Small 24px
      </on-btn>
      <on-btn
        size="sm"
        type="primary"
      >
        Small 24px
      </on-btn>
    </div>
    <div class="row">
      <on-btn
        size="md"
        shape="circle"
        type="default"
      >
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn
        size="md"
        shape="square"
        type="default"
      >
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn
        size="md"
        type="default"
      >
        Medium 32px
      </on-btn>
      <on-btn
        size="md"
        type="primary"
      >
        Medium 32px
      </on-btn>
    </div>
    <div class="row">
      <on-btn
        size="lg"
        shape="circle"
        type="default"
      >
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn
        size="lg"
        shape="square"
        type="default"
      >
        <on-svg
          icon
          name="_default"
        />
      </on-btn>
      <on-btn
        size="lg"
        type="default"
      >
        Large 40px
      </on-btn>
      <on-btn
        size="lg"
        type="primary"
      >
        Large 40px
      </on-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
</style>
`,gn={},hn={class:"demo"};function vn(c,r){const a=y;return u(),m("div",hn,[n(a,{type:"primary",danger:""},{default:e(()=>[t(" Primary ")]),_:1}),n(a,{type:"primary-light",danger:""},{default:e(()=>[t(" Primary Light ")]),_:1}),n(a,{type:"default",danger:""},{default:e(()=>[t(" Default ")]),_:1}),n(a,{type:"dashed",danger:""},{default:e(()=>[t(" Dashed ")]),_:1}),n(a,{type:"text",danger:""},{default:e(()=>[t(" Text ")]),_:1}),n(a,{type:"link",danger:""},{default:e(()=>[t(" Link ")]),_:1})])}const xn=_(gn,[["render",vn],["__scopeId","data-v-ae89127c"]]),kn=`<template>
  <div class="demo">
    <on-btn
      type="primary"
      danger
    >
      Primary
    </on-btn>
    <on-btn
      type="primary-light"
      danger
    >
      Primary Light
    </on-btn>
    <on-btn
      type="default"
      danger
    >
      Default
    </on-btn>
    <on-btn
      type="dashed"
      danger
    >
      Dashed
    </on-btn>
    <on-btn
      type="text"
      danger
    >
      Text
    </on-btn>
    <on-btn
      type="link"
      danger
    >
      Link
    </on-btn>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
</style>
`,$n={},Dn={class:"demo"};function zn(c,r){const a=y;return u(),m("div",Dn,[n(a,{type:"primary",ghost:""},{default:e(()=>[t(" Primary ")]),_:1}),n(a,{type:"primary-light",ghost:""},{default:e(()=>[t(" Primary Light ")]),_:1}),n(a,{type:"default",ghost:""},{default:e(()=>[t(" Default ")]),_:1}),n(a,{type:"dashed",ghost:""},{default:e(()=>[t(" Dashed ")]),_:1}),n(a,{type:"primary",ghost:"",danger:""},{default:e(()=>[t(" Primary danger ")]),_:1})])}const wn=_($n,[["render",zn],["__scopeId","data-v-514104c3"]]),Ln=`<template>
  <div class="demo">
    <on-btn
      type="primary"
      ghost
    >
      Primary
    </on-btn>
    <on-btn
      type="primary-light"
      ghost
    >
      Primary Light
    </on-btn>
    <on-btn
      type="default"
      ghost
    >
      Default
    </on-btn>
    <on-btn
      type="dashed"
      ghost
    >
      Dashed
    </on-btn>
    <on-btn
      type="primary"
      ghost
      danger
    >
      Primary danger
    </on-btn>
  </div>
</template>

<script setup lang="ts">
<\/script>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  background: rgb(190, 200, 200);
  padding: 16px;
}
</style>
`,D=c=>(P("data-v-d34c5469"),c=c(),q(),c),Tn=D(()=>o("div",{class:"title"}," Default ",-1)),On={class:"demo"},Bn=D(()=>o("div",{class:"title"}," Overlay mode ",-1)),Pn={class:"demo"},qn=T({__name:"loading",setup(c){function r(x,d){const i=O(x);let p=null;const z=()=>{i.value=x};return B(i,w=>{p&&clearTimeout(p),w!==x&&(p=setTimeout(z,d))}),i}const a=r(!1,4e3),l=r(!1,4e3),b=r(!1,4e3),g=r(!1,4e3),h=r(!1,4e3),v=r(!1,4e3);return(x,d)=>{const i=y;return u(),m($,null,[Tn,o("div",On,[n(i,{type:"primary",loading:s(a),onClick:d[0]||(d[0]=p=>a.value=!0)},{default:e(()=>[t(" Primary ")]),_:1},8,["loading"]),n(i,{type:"primary-light",loading:s(l),onClick:d[1]||(d[1]=p=>l.value=!0)},{default:e(()=>[t(" Primary Light ")]),_:1},8,["loading"]),n(i,{type:"default",loading:s(b),onClick:d[2]||(d[2]=p=>b.value=!0)},{default:e(()=>[t(" Default ")]),_:1},8,["loading"]),n(i,{type:"dashed",loading:s(g),onClick:d[3]||(d[3]=p=>g.value=!0)},{default:e(()=>[t(" Dashed ")]),_:1},8,["loading"]),n(i,{type:"text",loading:s(h),onClick:d[4]||(d[4]=p=>h.value=!0)},{default:e(()=>[t(" Text ")]),_:1},8,["loading"]),n(i,{type:"link",loading:s(v),onClick:d[5]||(d[5]=p=>v.value=!0)},{default:e(()=>[t(" Link ")]),_:1},8,["loading"])]),Bn,o("div",Pn,[n(i,{type:"primary","loader-overlay":"",loading:s(a),onClick:d[6]||(d[6]=p=>a.value=!0)},{default:e(()=>[t(" Primary ")]),_:1},8,["loading"]),n(i,{type:"primary-light","loader-overlay":"",loading:s(l),onClick:d[7]||(d[7]=p=>l.value=!0)},{default:e(()=>[t(" Primary Light ")]),_:1},8,["loading"]),n(i,{type:"default","loader-overlay":"",loading:s(b),onClick:d[8]||(d[8]=p=>b.value=!0)},{default:e(()=>[t(" Default ")]),_:1},8,["loading"]),n(i,{type:"dashed","loader-overlay":"",loading:s(g),onClick:d[9]||(d[9]=p=>g.value=!0)},{default:e(()=>[t(" Dashed ")]),_:1},8,["loading"]),n(i,{type:"text","loader-overlay":"",loading:s(h),onClick:d[10]||(d[10]=p=>h.value=!0)},{default:e(()=>[t(" Text ")]),_:1},8,["loading"]),n(i,{type:"link","loader-overlay":"",loading:s(v),onClick:d[11]||(d[11]=p=>v.value=!0)},{default:e(()=>[t(" Link ")]),_:1},8,["loading"])])],64)}}}),Cn=_(qn,[["__scopeId","data-v-d34c5469"]]),In=`<script setup lang="ts">
import type { Ref } from 'vue';

function useResetTimeout<T> (defaultValue: T, timeout: number) {
  const model = ref<T>(defaultValue) as Ref<T>;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  const reset = () => {
    model.value = defaultValue;
  };
  watch(model, (val: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (val !== defaultValue) {
      timeoutId = setTimeout(reset, timeout);
    }
  });
  return model;
}

const loader1 = useResetTimeout(false, 4000);
const loader2 = useResetTimeout(false, 4000);
const loader3 = useResetTimeout(false, 4000);
const loader4 = useResetTimeout(false, 4000);
const loader5 = useResetTimeout(false, 4000);
const loader6 = useResetTimeout(false, 4000);

<\/script>

<template>
  <div class="title">
    Default
  </div>
  <div class="demo">
    <on-btn
      type="primary"
      :loading="loader1"
      @click="loader1 = true"
    >
      Primary
    </on-btn>
    <on-btn
      type="primary-light"
      :loading="loader2"
      @click="loader2 = true"
    >
      Primary Light
    </on-btn>
    <on-btn
      type="default"
      :loading="loader3"
      @click="loader3 = true"
    >
      Default
    </on-btn>
    <on-btn
      type="dashed"
      :loading="loader4"
      @click="loader4 = true"
    >
      Dashed
    </on-btn>
    <on-btn
      type="text"
      :loading="loader5"
      @click="loader5 = true"
    >
      Text
    </on-btn>
    <on-btn
      type="link"
      :loading="loader6"
      @click="loader6 = true"
    >
      Link
    </on-btn>
  </div>
  <div class="title">
    Overlay mode
  </div>
  <div class="demo">
    <on-btn
      type="primary"
      loader-overlay
      :loading="loader1"
      @click="loader1 = true"
    >
      Primary
    </on-btn>
    <on-btn
      type="primary-light"
      loader-overlay
      :loading="loader2"
      @click="loader2 = true"
    >
      Primary Light
    </on-btn>
    <on-btn
      type="default"
      loader-overlay
      :loading="loader3"
      @click="loader3 = true"
    >
      Default
    </on-btn>
    <on-btn
      type="dashed"
      loader-overlay
      :loading="loader4"
      @click="loader4 = true"
    >
      Dashed
    </on-btn>
    <on-btn
      type="text"
      loader-overlay
      :loading="loader5"
      @click="loader5 = true"
    >
      Text
    </on-btn>
    <on-btn
      type="link"
      loader-overlay
      :loading="loader6"
      @click="loader6 = true"
    >
      Link
    </on-btn>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
.title {
  margin-bottom: 4px;
}
</style>
`,En={},Vn={class:"demo"},Rn={class:"demo"},Sn={class:"demo"},Fn={class:"demo"},Gn={class:"demo"},Nn={class:"demo"},Mn={class:"demo"},An={class:"demo"},Hn={class:"demo dark"},jn={class:"demo dark"};function Jn(c,r){const a=y;return u(),m($,null,[o("div",Vn,[n(a,{type:"primary"},{default:e(()=>[t(" Primary ")]),_:1}),n(a,{type:"primary",disabled:""},{default:e(()=>[t(" Primary (disabled) ")]),_:1})]),o("div",Rn,[n(a,{type:"primary-light"},{default:e(()=>[t(" Primary Light ")]),_:1}),n(a,{type:"primary-light",disabled:""},{default:e(()=>[t(" Primary Light (disabled) ")]),_:1})]),o("div",Sn,[n(a,{type:"default"},{default:e(()=>[t(" Default ")]),_:1}),n(a,{type:"default",disabled:""},{default:e(()=>[t(" Default (disabled) ")]),_:1})]),o("div",Fn,[n(a,{type:"dashed"},{default:e(()=>[t(" Dashed ")]),_:1}),n(a,{type:"dashed",disabled:""},{default:e(()=>[t(" Dashed (disabled) ")]),_:1})]),o("div",Gn,[n(a,{type:"text"},{default:e(()=>[t(" Text ")]),_:1}),n(a,{type:"text",disabled:""},{default:e(()=>[t(" Text (disabled) ")]),_:1})]),o("div",Nn,[n(a,{type:"link"},{default:e(()=>[t(" Link ")]),_:1}),n(a,{type:"link",disabled:""},{default:e(()=>[t(" Link (disabled) ")]),_:1})]),o("div",Mn,[n(a,{type:"primary",danger:""},{default:e(()=>[t(" Danger primary ")]),_:1}),n(a,{type:"primary",danger:"",disabled:""},{default:e(()=>[t(" Danger primary (disabled) ")]),_:1})]),o("div",An,[n(a,{type:"text",danger:""},{default:e(()=>[t(" Danger text ")]),_:1}),n(a,{type:"text",danger:"",disabled:""},{default:e(()=>[t(" Danger text (disabled) ")]),_:1})]),o("div",Hn,[n(a,{ghost:""},{default:e(()=>[t(" Ghost ")]),_:1}),n(a,{ghost:"",disabled:""},{default:e(()=>[t(" Ghost (disabled) ")]),_:1})]),o("div",jn,[n(a,{ghost:"",danger:""},{default:e(()=>[t(" Ghost danger ")]),_:1}),n(a,{ghost:"",danger:"",disabled:""},{default:e(()=>[t(" Ghost danger (disabled) ")]),_:1})])],64)}const Kn=_(En,[["render",Jn],["__scopeId","data-v-cb3d45c4"]]),Qn=`<template>
  <div class="demo">
    <on-btn type="primary">
      Primary
    </on-btn>
    <on-btn
      type="primary"
      disabled
    >
      Primary (disabled)
    </on-btn>
  </div>
  <div class="demo">
    <on-btn type="primary-light">
      Primary Light
    </on-btn>
    <on-btn
      type="primary-light"
      disabled
    >
      Primary Light (disabled)
    </on-btn>
  </div>
  <div class="demo">
    <on-btn type="default">
      Default
    </on-btn>
    <on-btn
      type="default"
      disabled
    >
      Default (disabled)
    </on-btn>
  </div>
  <div class="demo">
    <on-btn type="dashed">
      Dashed
    </on-btn>
    <on-btn
      type="dashed"
      disabled
    >
      Dashed (disabled)
    </on-btn>
  </div>
  <div class="demo">
    <on-btn type="text">
      Text
    </on-btn>
    <on-btn
      type="text"
      disabled
    >
      Text (disabled)
    </on-btn>
  </div>
  <div class="demo">
    <on-btn type="link">
      Link
    </on-btn>
    <on-btn
      type="link"
      disabled
    >
      Link (disabled)
    </on-btn>
  </div>
  <div class="demo">
    <on-btn
      type="primary"
      danger
    >
      Danger primary
    </on-btn>
    <on-btn
      type="primary"
      danger
      disabled
    >
      Danger primary (disabled)
    </on-btn>
  </div>
  <div class="demo">
    <on-btn
      type="text"
      danger
    >
      Danger text
    </on-btn>
    <on-btn
      type="text"
      danger
      disabled
    >
      Danger text (disabled)
    </on-btn>
  </div>
  <div class="demo dark">
    <on-btn ghost>
      Ghost
    </on-btn>
    <on-btn
      ghost
      disabled
    >
      Ghost (disabled)
    </on-btn>
  </div>
  <div class="demo dark">
    <on-btn
      ghost
      danger
    >
      Ghost danger
    </on-btn>
    <on-btn
      ghost
      danger
      disabled
    >
      Ghost danger (disabled)
    </on-btn>
  </div>
</template>

<script setup lang="ts">
<\/script>
<style scoped lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
.dark {
  background: rgb(190, 200, 200);
  padding: 16px;
}
</style>
`,Un={class:"markdown-body"},Wn=o("h1",null,"OnBtn",-1),Xn=o("p",null,"Кнопка в стиле AntDesign",-1),Yn=o("h2",null,"Примеры использования",-1),Zn=o("h3",null,"Type",-1),ne=o("p",null,[t("Внешний вид кнопки настраивается свойством "),o("code",null,"type"),t(".")],-1),ee=o("h3",null,"Icon",-1),te=o("p",null,"Кнопка может содержать текст, иконку или всё вместе.",-1),ae=o("p",null,[t("Для добавления отступа между иконкой и текстом используйте css-классы "),o("code",null,"--left"),t(" и "),o("code",null,"--right")],-1),oe=o("h3",null,"Shape",-1),le=o("p",null,[t("Поддерживаются формы: "),o("code",null,"circle"),t(", "),o("code",null,"square"),t(" и "),o("code",null,"round"),t(". Первые две рекомендуется применять, когда кнопка содержит только иконку.")],-1),de=o("h3",null,"Size",-1),se=o("p",null,[t("Доступно три размера: "),o("code",null,"sm"),t(", "),o("code",null,"md"),t(" (по умолчанию) и "),o("code",null,"lg")],-1),ie=o("h3",null,"Danger",-1),re=o("p",null,[t("Красная кнопка, применяется с любыми значениями свойства "),o("code",null,"type")],-1),pe=o("h3",null,"Ghost",-1),ce=o("p",null,"Кнопки с обводкой и прозрачным фоном",-1),ue=o("h3",null,"Loading",-1),me=o("p",null,[t("Состояние загрузки. По умолчанию, индикатор загрузки появляется слева, сдвигая содержимое кнопки (и увеличивая её размер). В режиме "),o("code",null,"loading-overlay"),t(" индикатор загрузки отображается на переднем слое, оставляя размер кнопки без изменений.")],-1),fe=o("h3",null,"Disabled",-1),_e=o("h2",null,"API",-1),xe="OnBtn | OnFrontLib Docs",ke=[{property:"og:title",content:"OnBtn | OnFrontLib Docs"},{name:"twitter:title",content:"OnBtn | OnFrontLib Docs"}],$e={__name:"on-btn",setup(c,{expose:r}){return r({frontmatter:{title:"OnBtn | OnFrontLib Docs",meta:[{property:"og:title",content:"OnBtn | OnFrontLib Docs"},{name:"twitter:title",content:"OnBtn | OnFrontLib Docs"}]}}),C({title:"OnBtn | OnFrontLib Docs",meta:[{property:"og:title",content:"OnBtn | OnFrontLib Docs"},{name:"twitter:title",content:"OnBtn | OnFrontLib Docs"}]}),(b,g)=>(u(),m("div",Un,[Wn,Xn,Yn,Zn,ne,n(f,{code:s(K)},{default:e(()=>[n(J)]),_:1},8,["code"]),ee,te,ae,n(f,{code:s(en)},{default:e(()=>[n(nn)]),_:1},8,["code"]),oe,le,n(f,{code:s(rn)},{default:e(()=>[n(sn)]),_:1},8,["code"]),de,se,n(f,{code:s(bn)},{default:e(()=>[n(yn)]),_:1},8,["code"]),ie,re,n(f,{code:s(kn)},{default:e(()=>[n(xn)]),_:1},8,["code"]),pe,ce,n(f,{code:s(Ln)},{default:e(()=>[n(wn)]),_:1},8,["code"]),ue,me,n(f,{code:s(In)},{default:e(()=>[n(Cn)]),_:1},8,["code"]),fe,n(f,{code:s(Qn)},{default:e(()=>[n(Kn)]),_:1},8,["code"]),_e,n(L,{value:s(M)},null,8,["value"])]))}};export{$e as default,ke as meta,xe as title};
