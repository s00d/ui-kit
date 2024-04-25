import{_ as T}from"./ApiDoc.vue.BBsrfSvH.js";import{E as u}from"./index.CqeEYO5W.js";import{g as x,r as v,o as r,c as f,b as e,u as s,O as g,a as t,d as c,t as y,W as m,p as h,f as O,_,F as V,j as b,w as p}from"./entry._doioHTx.js";import{u as w}from"./vue.f36acd1f.BVcziSBg.js";const z="OnTextarea",$="default",S="on-textarea",E="",C={},I=[{name:"modelValue",description:"Содержимое поля ввода",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"inputAttrs",description:"Атрибуты для элемента input",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",description:"Отключить поле",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",description:"Запретить редактирование",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Подсказка внутри поля (i18n)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"copyBtn",description:"Отобразить кнпоку копирования",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowClear",description:"Отобразить кнпоку очистки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"Показать индикатор загрузки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autosize",description:"Автоматически устанавливать высоту",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",description:"Количество строк",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"Размер поля ввода (по аналогии с OnInput)",required:!1,type:{name:"TOnTextareaSize"},defaultValue:{func:!1,value:"'md'"}},{name:"noResize",description:"Отключить возможность изменения высоты (CSS resize)",required:!1,type:{name:"boolean"}},{name:"status",description:"Статус валидации",required:!1,type:{name:"union",elements:[{name:'"error"'},{name:'"warning"'},{name:'"success"'},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],F=[{name:"update:modelValue"}],N=[{name:"prefix"},{name:"suffix"},{name:"addon-after"},{name:"addon-before"},{name:"clear"},{name:"copy"},{name:"loader"}],L="components/on-textarea/index.vue",q={name:z,exportName:$,displayName:S,description:E,tags:C,props:I,events:F,slots:N,sourceFile:L},D=a=>(h("data-v-1b304a09"),a=a(),O(),a),A={class:"demo"},B={class:"value"},J=D(()=>t("strong",null,"Value: ",-1)),R=x({__name:"basic",setup(a){const n=v("");return(o,l)=>{const d=m;return r(),f("div",A,[e(d,{modelValue:s(n),"onUpdate:modelValue":l[0]||(l[0]=i=>g(n)?n.value=i:null)},null,8,["modelValue"]),t("div",B,[J,c(" "+y(JSON.stringify(s(n))),1)])])}}}),k=_(R,[["__scopeId","data-v-1b304a09"]]),U=`<script setup lang="ts">
const val = ref('');
<\/script>

<template>
  <div class="demo">
    <on-textarea v-model="val" />

    <div class="value">
      <strong>Value: </strong> {{ JSON.stringify(val) }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,M=a=>(h("data-v-cd30ec63"),a=a(),O(),a),j={class:"value"},H=M(()=>t("strong",null,"Value: ",-1)),P=x({__name:"autosize",setup(a){const n=v("");return(o,l)=>{const d=m;return r(),f(V,null,[e(d,{modelValue:s(n),"onUpdate:modelValue":l[0]||(l[0]=i=>g(n)?n.value=i:null),autosize:""},null,8,["modelValue"]),t("div",j,[H,c(" "+y(JSON.stringify(s(n))),1)])],64)}}}),W=_(P,[["__scopeId","data-v-cd30ec63"]]),G=`<script setup lang="ts">
const val = ref('');
<\/script>

<template>
  <on-textarea
    v-model="val"
    autosize
  />
  <div class="value">
    <strong>Value: </strong> {{ JSON.stringify(val) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,K=a=>(h("data-v-cdb1cdc5"),a=a(),O(),a),Q={class:"value"},X=K(()=>t("strong",null,"Value: ",-1)),Y=x({__name:"rows",setup(a){const n=v("");return(o,l)=>{const d=m;return r(),f(V,null,[e(d,{modelValue:s(n),"onUpdate:modelValue":l[0]||(l[0]=i=>g(n)?n.value=i:null),autosize:"",rows:3},null,8,["modelValue"]),t("div",Q,[X,c(" "+y(JSON.stringify(s(n))),1)])],64)}}}),Z=_(Y,[["__scopeId","data-v-cdb1cdc5"]]),ee=`<script setup lang="ts">
const val = ref('');
<\/script>

<template>
  <on-textarea
    v-model="val"
    autosize
    :rows="3"
  />
  <div class="value">
    <strong>Value: </strong> {{ JSON.stringify(val) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,ne={},te={class:"demo"};function ae(a,n){const o=m;return r(),f("div",te,[e(o,{size:"sm",placeholder:"Small (sm)",autosize:""}),e(o,{size:"md",placeholder:"Medium (md)",autosize:""}),e(o,{size:"lg",placeholder:"Large (lg)",autosize:""})])}const se=_(ne,[["render",ae],["__scopeId","data-v-0e165970"]]),oe=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-textarea
      size="sm"
      placeholder="Small (sm)"
      autosize
    />
    <on-textarea
      size="md"
      placeholder="Medium (md)"
      autosize
    />
    <on-textarea
      size="lg"
      placeholder="Large (lg)"
      autosize
    />
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
`,le=a=>(h("data-v-312e21fc"),a=a(),O(),a),ce={class:"demo"},re={class:"value"},de=le(()=>t("strong",null,"Value: ",-1)),ie=x({__name:"allow-clear",setup(a){const n=v("");return(o,l)=>{const d=m;return r(),f("div",ce,[e(d,{modelValue:s(n),"onUpdate:modelValue":l[0]||(l[0]=i=>g(n)?n.value=i:null),"allow-clear":""},null,8,["modelValue"]),t("div",re,[de,c(" "+y(JSON.stringify(s(n))),1)])])}}}),ue=_(ie,[["__scopeId","data-v-312e21fc"]]),pe=`<script setup lang="ts">
const val = ref('');
<\/script>

<template>
  <div class="demo">
    <on-textarea
      v-model="val"
      allow-clear
    />

    <div class="value">
      <strong>Value: </strong> {{ JSON.stringify(val) }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
</style>
`,me={};function _e(a,n){const o=m;return r(),b(o,{loading:""})}const fe=_(me,[["render",_e]]),xe=`<script setup lang="ts">
<\/script>

<template>
  <on-textarea loading />
</template>

<style scoped lang="scss">
</style>
`,ve={};function ge(a,n){const o=m;return r(),b(o,{"copy-btn":""})}const ye=_(ve,[["render",ge]]),he=`<script setup lang="ts">
<\/script>

<template>
  <on-textarea copy-btn />
</template>

<style scoped lang="scss">
</style>
`,Oe={},Ve={class:"demo"};function be(a,n){const o=m;return r(),f("div",Ve,[e(o,{"copy-btn":"",loading:""}),e(o,{"copy-btn":"","allow-clear":""}),e(o,{"allow-clear":"",loading:""})])}const Te=_(Oe,[["render",be],["__scopeId","data-v-1b978723"]]),we=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-textarea
      copy-btn
      loading
    />
    <on-textarea
      copy-btn
      allow-clear
    />
    <on-textarea
      allow-clear
      loading
    />
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
`,ze={class:"markdown-body"},$e=t("h1",null,"OnTextarea",-1),Se=t("h2",null,"Примеры использования",-1),Ee=t("h3",null,"Basic",-1),Ce=t("h3",null,"Autosize",-1),Ie=t("p",null,[c("При использовании свойства "),t("code",null,"autosize"),c(" высота поля ввода будет изменяться автоматически при изменении содержимого.")],-1),Fe=t("p",null,[c("Для того чтобы задать минимальную (начальную) высоту, передайте необходимое количество строк в параметре "),t("code",null,"rows"),c(".")],-1),Ne=t("h3",null,"Sizes",-1),Le=t("p",null,[c("Размеры "),t("code",null,"OnTextarea"),c(" полностью соответствуют размерам "),t("code",null,"OnInput"),c(".")],-1),qe=t("h3",null,"Allow clear",-1),De=t("h3",null,"Loading",-1),Ae=t("h3",null,"Copy",-1),Be=t("h3",null,"Multiple features",-1),Je=t("h2",null,"API",-1),je="OnTextarea | OnFrontLib Docs",He=[{property:"og:title",content:"OnTextarea | OnFrontLib Docs"},{name:"twitter:title",content:"OnTextarea | OnFrontLib Docs"}],Pe={__name:"on-textarea",setup(a,{expose:n}){return n({frontmatter:{title:"OnTextarea | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTextarea | OnFrontLib Docs"},{name:"twitter:title",content:"OnTextarea | OnFrontLib Docs"}]}}),w({title:"OnTextarea | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTextarea | OnFrontLib Docs"},{name:"twitter:title",content:"OnTextarea | OnFrontLib Docs"}]}),(d,i)=>(r(),f("div",ze,[$e,Se,Ee,e(u,{code:s(U)},{default:p(()=>[e(k)]),_:1},8,["code"]),Ce,Ie,e(u,{code:s(G)},{default:p(()=>[e(W)]),_:1},8,["code"]),Fe,e(u,{code:s(ee)},{default:p(()=>[e(Z)]),_:1},8,["code"]),Ne,Le,e(u,{code:s(oe)},{default:p(()=>[e(se)]),_:1},8,["code"]),qe,e(u,{code:s(pe)},{default:p(()=>[e(ue)]),_:1},8,["code"]),De,e(u,{code:s(xe)},{default:p(()=>[e(fe)]),_:1},8,["code"]),Ae,e(u,{code:s(he)},{default:p(()=>[e(ye)]),_:1},8,["code"]),Be,e(u,{code:s(we)},{default:p(()=>[e(Te)]),_:1},8,["code"]),Je,e(T,{value:s(q)},null,8,["value"])]))}};export{Pe as default,He as meta,je as title};
