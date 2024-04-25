import{_ as S}from"./BI8L1cvd.js";import{E as u}from"./Cepu5Cdp.js";import{_ as m}from"./D9cpl7au.js";import{g,r as h,o as i,c as r,b as e,u as l,G as L,a as n,d as o,t as b,p as y,f as w,_,w as c,x as $,P as V}from"./C296uaLE.js";import{u as D}from"./CNmpcN_a.js";const E="OnSwitch",I="default",N="on-switch",z="",q={},C=[{name:"modelValue",description:"Текущее значение. Используется в `v-model`.",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"undefined"}},{name:"trueValue",description:"Значение, которое будет установлено при включении переключателя.",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"true"}},{name:"falseValue",description:"Значение, которое будет установлено при выключении переключателя",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"false"}},{name:"trueLabel",description:"Надпись внутри переключателя, когда он включен (i18n).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"falseLabel",description:"Надпись внутри переключателя, когда он выключен (i18n).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"label",description:"Надпись рядом с переключателем (i18n).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"labelPosition",description:"Отображать надпись (label) перед переключателем (before) или после переключателя (after)",required:!1,type:{name:"union",elements:[{name:'"before"'},{name:'"after"'}]},defaultValue:{func:!1,value:"'after'"}},{name:"loading",description:"Состояние загрузки",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Размер переключателя. Высота 22px для размера `md`, и 16px для размера `sm`",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",description:"Отключает переключатель",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",description:'Режим "только просмотр"',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],F=[{name:"update:modelValue"}],k=[{name:"default"},{name:"true-label"},{name:"false-label"}],B="components/on-switch/index.vue",J={name:E,exportName:I,displayName:N,description:z,tags:q,props:C,events:F,slots:k,sourceFile:B},T=a=>(y("data-v-3aa0c29c"),a=a(),w(),a),P={class:"demo"},R={class:"value"},M=T(()=>n("strong",null,"Value:",-1)),A=g({__name:"basic",setup(a){const s=h(!1);return(t,p)=>{const d=m;return i(),r("div",P,[e(d,{modelValue:l(s),"onUpdate:modelValue":p[0]||(p[0]=f=>L(s)?s.value=f:null)},null,8,["modelValue"]),n("div",R,[M,o(" "+b(JSON.stringify(l(s))),1)])])}}}),G=_(A,[["__scopeId","data-v-3aa0c29c"]]),H=`<script setup lang="ts">
const value = ref(false);
<\/script>

<template>
  <div class="demo">
    <on-switch v-model="value" />
    <div class="value">
      <strong>Value:</strong> {{ JSON.stringify(value) }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
  margin-top: 8px;
}
</style>
`,x=a=>(y("data-v-d21051d5"),a=a(),w(),a),U={class:"demo"},j={class:"value"},K=x(()=>n("strong",null,"Disabled:",-1)),Q={class:"value"},W=x(()=>n("strong",null,"Readonly:",-1)),X={class:"btn"},Y=g({__name:"disabled",setup(a){const s=h(!1),t=h(!1);return(p,d)=>{const f=m,v=$;return i(),r("div",U,[e(f,{disabled:l(s),readonly:l(t)},null,8,["disabled","readonly"]),n("div",j,[K,o(" "+b(JSON.stringify(l(s))),1)]),n("div",Q,[W,o(" "+b(JSON.stringify(l(t))),1)]),n("div",X,[e(v,{onClick:d[0]||(d[0]=O=>s.value=!l(s))},{default:c(()=>[o(" Toggle disabled ")]),_:1}),e(v,{onClick:d[1]||(d[1]=O=>t.value=!l(t))},{default:c(()=>[o(" Toggle readonly ")]),_:1})])])}}}),Z=_(Y,[["__scopeId","data-v-d21051d5"]]),ee=`<script setup lang="ts">
const disabled = ref(false);
const readonly = ref(false);
<\/script>

<template>
  <div class="demo">
    <on-switch
      :disabled="disabled"
      :readonly="readonly"
    />
    <div class="value">
      <strong>Disabled:</strong> {{ JSON.stringify(disabled ) }}
    </div>
    <div class="value">
      <strong>Readonly:</strong> {{ JSON.stringify(readonly ) }}
    </div>
    <div class="btn">
      <on-btn @click="disabled = !disabled">
        Toggle disabled
      </on-btn>
      <on-btn @click="readonly = !readonly">
        Toggle readonly
      </on-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.on-switch {
  margin-bottom: 16px;
}
.btn {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}
</style>
`,ne={},te={class:"demo"};function se(a,s){const t=m;return i(),r("div",te,[e(t,{label:"Label (after)"}),e(t,{label:"Label (before)","label-position":"before"}),e(t,null,{default:c(()=>[o(" Label (slot) ")]),_:1})])}const le=_(ne,[["render",se],["__scopeId","data-v-7552dcd3"]]),ae=`<template>
  <div class="demo">
    <on-switch label="Label (after)" />
    <on-switch
      label="Label (before)"
      label-position="before"
    />
    <on-switch>
      Label (slot)
    </on-switch>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
`,oe={},ce={class:"demo"};function de(a,s){const t=m;return i(),r("div",ce,[e(t,{"false-label":"Off","true-label":"On"})])}const ie=_(oe,[["render",de]]),re=`<template>
  <div class="demo">
    <on-switch
      false-label="Off"
      true-label="On"
    />
  </div>
</template>
`,ue={},me={class:"demo"};function _e(a,s){const t=m;return i(),r("div",me,[e(t,{size:"lg",label:"Large (lg)"}),e(t,{size:"md",label:"Medium (md)"}),e(t,{size:"sm",label:"Small (sm)"})])}const pe=_(ue,[["render",_e],["__scopeId","data-v-5856d2a3"]]),fe=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-switch
      size="lg"
      label="Large (lg)"
    />
    <on-switch
      size="md"
      label="Medium (md)"
    />
    <on-switch
      size="sm"
      label="Small (sm)"
    />
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;
  gap:16px;
}
</style>
`,he={},be={class:"demo"};function ve(a,s){const t=m;return i(),r("div",be,[e(t,{loading:"","model-value":!0}),e(t,{size:"sm",loading:""})])}const ge=_(he,[["render",ve],["__scopeId","data-v-a6ab479f"]]),ye=`<template>
  <div class="demo">
    <on-switch
      loading
      :model-value="true"
    />
    <on-switch
      size="sm"
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
`,we={class:"markdown-body"},xe=n("h1",null,"OnSwitch",-1),Oe=n("p",null,"Переключатель состояния",-1),Se=n("h2",null,"Примеры использования",-1),Le=n("h3",null,"Basic",-1),$e=n("h3",null,"Disabled and readonly",-1),Ve=n("p",null,"Оба свойства блокируют взаимодействие с переключателем, но устанавливают разные стили отображения.",-1),De=n("h3",null,"Label",-1),Ee=n("p",null,[o("Надпись может быть установлена через параметр "),n("code",null,"label"),o(" или слот "),n("code",null,"default"),o(". С помощью параметра "),n("code",null,"labelPosition"),o(" можно изменить позицию надписи.")],-1),Ie=n("h3",null,"Inner text",-1),Ne=n("p",null,[o("Можно задать текст для включенного или выключенного состояния. Для этого используйте параметры "),n("code",null,"trueLabel"),o(" и "),n("code",null,"falseLabel")],-1),ze=V("<h3>Sizes</h3><p>С помощью параметра <code>size</code> можно установить размер переключателя. Из коробки доступно три размера: <code>sm</code>, <code>md</code> и <code>lg</code>.</p><p>Размеры всех элементов переключателя рассчитываются из его высоты, которая задаётся CSS-переменной <code>--on-sw-height</code>.</p>",3),qe=n("h3",null,"Loading",-1),Ce=n("p",null,[o("При отображении индикатора загрузки применяется стиль "),n("code",null,"disabled"),o(", взаимодействие с переключателем блокируется.")],-1),Fe=n("h2",null,"API",-1),Re="OnSwitch | OnFrontLib Docs",Me=[{property:"og:title",content:"OnSwitch | OnFrontLib Docs"},{name:"twitter:title",content:"OnSwitch | OnFrontLib Docs"}],Ae={__name:"on-switch",setup(a,{expose:s}){return s({frontmatter:{title:"OnSwitch | OnFrontLib Docs",meta:[{property:"og:title",content:"OnSwitch | OnFrontLib Docs"},{name:"twitter:title",content:"OnSwitch | OnFrontLib Docs"}]}}),D({title:"OnSwitch | OnFrontLib Docs",meta:[{property:"og:title",content:"OnSwitch | OnFrontLib Docs"},{name:"twitter:title",content:"OnSwitch | OnFrontLib Docs"}]}),(d,f)=>(i(),r("div",we,[xe,Oe,Se,Le,e(u,{code:l(H)},{default:c(()=>[e(G)]),_:1},8,["code"]),$e,Ve,e(u,{code:l(ee)},{default:c(()=>[e(Z)]),_:1},8,["code"]),De,Ee,e(u,{code:l(ae)},{default:c(()=>[e(le)]),_:1},8,["code"]),Ie,Ne,e(u,{code:l(re)},{default:c(()=>[e(ie)]),_:1},8,["code"]),ze,e(u,{code:l(fe)},{default:c(()=>[e(pe)]),_:1},8,["code"]),qe,Ce,e(u,{code:l(ye)},{default:c(()=>[e(ge)]),_:1},8,["code"]),Fe,e(S,{value:l(J)},null,8,["value"])]))}};export{Ae as default,Me as meta,Re as title};
