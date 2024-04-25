import{_ as I}from"./ApiDoc.vue.BBsrfSvH.js";import{E as r}from"./index.CqeEYO5W.js";import{g as v,r as x,o as i,c as p,b as n,u as l,O as h,a as e,d as t,t as y,R as u,p as g,f as O,_ as m,w as d}from"./entry._doioHTx.js";import{u as b}from"./vue.f36acd1f.BVcziSBg.js";const V="OnInput",$="default",w="on-input",E="",P={},S=[{name:"focus",description:"Функция для установки фокуса в поле ввода"},{name:"clear",description:"Функция для очистки поля"},{name:"inputEl",description:"Ref на элемент input"}],C=[{name:"modelValue",description:"Содержимое поля ввода",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"inputAttrs",description:"Атрибуты для элемента input",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"Размер поля ввода",required:!1,type:{name:"union",elements:[{name:"TOnInputSize"},{name:"string"}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",description:"Отключить поле",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",description:"Запретить редактирование",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Подсказка внутри поля (i18n)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"copyBtn",description:"Отобразить кнпоку копирования",required:!1,type:{name:"boolean"}},{name:"allowClear",description:"Отобразить кнпоку очистки",required:!1,type:{name:"boolean"}},{name:"type",description:"Значение атрибута type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"noEye",description:`Не отображать кнопку переключения видимости пароля
Работает только при type="password"`,required:!1,type:{name:"boolean"}},{name:"loading",description:"Показать индикатор загрузки",required:!1,type:{name:"boolean"}},{name:"status",description:"Статус валидации",required:!1,type:{name:"union",elements:[{name:'"error"'},{name:'"warning"'},{name:'"success"'},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"prefix",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"suffix",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"inputRef",required:!1,type:{name:"union",elements:[{name:"HTMLInputElement"},{name:"undefined"}]},defaultValue:{func:!1,value:"undefined"}}],q=[{name:"update:modelValue",type:{names:["string"]},description:"При обновлении `modelValue`"},{name:"keydown",type:{names:["KeyboardEvent"]},description:"При нажатии клавиши внутри текстового поля"},{name:"pressEnter",type:{names:["KeyboardEvent"]},description:"При нажатии клавиши Enter внутри текстового поля"},{name:"click:clear",description:"При клике по кнопке очистки поля"},{name:"focus",description:"При установке фокуса в поле"},{name:"blur",description:"При потере фокуса из поля"}],B=[{name:"addon-before",description:"Слот для добавления элементов перед полем ввода"},{name:"prefix",description:"Префикс, отображается в начале поля ввода"},{name:"input",scoped:!0,bindings:[{name:"data",title:"binding",description:"Ref, содержащий данные. Можно изменять напрямую.",type:{name:"Ref",elements:[{name:"string"}]}}],description:"Используйте этот слот для замены поля ввода"},{name:"clear",description:"Иконка очистки содержимого поля"},{name:"copy",description:"Иконка копирования содержимого поля"},{name:"eye",scoped:!0,bindings:[{name:"masked",title:"binding",description:"текущее состояние видимости",type:{name:"Ref",elements:[{name:"union",elements:[{name:"boolean"},{name:"string"}]}]}}],description:"Иконка переключения видимости пароля"},{name:"suffix",description:"Суффикс, отображается в конце поля ввода"},{name:"loader",description:"Индикатор загрузки"},{name:"addon-after",description:"Слот для добавления элементов после поля ввода"}],L="components/on-input/index.vue",N={name:V,exportName:$,displayName:w,description:E,tags:P,expose:S,props:C,events:q,slots:B,sourceFile:L},F=a=>(g("data-v-188cba8e"),a=a(),O(),a),z={class:"demo"},A={class:"value"},D=F(()=>e("strong",null,"Value: ",-1)),R=v({__name:"basic",setup(a){const o=x("");return(s,c)=>{const _=u;return i(),p("div",z,[n(_,{modelValue:l(o),"onUpdate:modelValue":c[0]||(c[0]=f=>h(o)?o.value=f:null)},null,8,["modelValue"]),e("div",A,[D,t(),e("code",null,y(JSON.stringify(l(o))),1)])])}}}),k=m(R,[["__scopeId","data-v-188cba8e"]]),J=`<script setup lang="ts">
const value = ref('');
<\/script>

<template>
  <div class="demo">
    <on-input v-model="value" />
    <div class="value">
      <strong>Value: </strong> <code>{{ JSON.stringify(value) }}</code>
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
  margin-top: 8px;
}
</style>
`,T={},U={class:"demo"};function H(a,o){const s=u;return i(),p("div",U,[n(s,{size:"sm",placeholder:"sm 24px"}),n(s,{size:"md",placeholder:"md 32px"}),n(s,{size:"lg",placeholder:"lg 40px"})])}const K=m(T,[["render",H],["__scopeId","data-v-3efdb122"]]),M=`<template>
  <div class="demo">
    <on-input
      size="sm"
      placeholder="sm 24px"
    />
    <on-input
      size="md"
      placeholder="md 32px"
    />
    <on-input
      size="lg"
      placeholder="lg 40px"
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
`,j=a=>(g("data-v-2dbda016"),a=a(),O(),a),G={class:"demo"},Q={class:"value"},W=j(()=>e("strong",null,"Value: ",-1)),X=v({__name:"allow-clear",setup(a){const o=x("");return(s,c)=>{const _=u;return i(),p("div",G,[n(_,{modelValue:l(o),"onUpdate:modelValue":c[0]||(c[0]=f=>h(o)?o.value=f:null),"allow-clear":""},null,8,["modelValue"]),e("div",Q,[W,t(),e("code",null,y(JSON.stringify(l(o))),1)])])}}}),Y=m(X,[["__scopeId","data-v-2dbda016"]]),Z=`<script setup lang="ts">
const value = ref('');
<\/script>

<template>
  <div class="demo">
    <on-input
      v-model="value"
      allow-clear
    />
    <div class="value">
      <strong>Value: </strong> <code>{{ JSON.stringify(value) }}</code>
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
  margin-top: 8px;
}
</style>
`,ee=a=>(g("data-v-a12aeae7"),a=a(),O(),a),ne={class:"demo"},te={class:"value"},oe=ee(()=>e("strong",null,"Value: ",-1)),ae=v({__name:"copy-btn",setup(a){const o=x("");return(s,c)=>{const _=u;return i(),p("div",ne,[n(_,{modelValue:l(o),"onUpdate:modelValue":c[0]||(c[0]=f=>h(o)?o.value=f:null),"copy-btn":""},null,8,["modelValue"]),e("div",te,[oe,t(),e("code",null,y(JSON.stringify(l(o))),1)])])}}}),se=m(ae,[["__scopeId","data-v-a12aeae7"]]),le=`<script setup lang="ts">
const value = ref('');
<\/script>

<template>
  <div class="demo">
    <on-input
      v-model="value"
      copy-btn
    />
    <div class="value">
      <strong>Value: </strong> <code>{{ JSON.stringify(value) }}</code>
    </div>
  </div>
</template>

<style scoped lang="scss">
.value {
  margin-top: 8px;
}
</style>
`,de={},ce={class:"demo"};function ie(a,o){const s=u;return i(),p("div",ce,[n(s,{type:"password"}),n(s,{type:"password","no-eye":""})])}const pe=m(de,[["render",ie],["__scopeId","data-v-d775a6dd"]]),re=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-input type="password" />
    <on-input
      type="password"
      no-eye
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
`,ue={},me={class:"demo"};function _e(a,o){const s=u;return i(),p("div",me,[n(s,{loading:""})])}const fe=m(ue,[["render",_e]]),ve=`<script setup lang="ts">
<\/script>

<template>
  <div class="demo">
    <on-input loading />
  </div>
</template>

<style scoped lang="scss">
</style>
`,xe={},he={class:"demo"};function ye(a,o){const s=u;return i(),p("div",he,[n(s,{placeholder:"Placeholder"},{"addon-before":d(()=>[t(" Before ")]),_:1}),n(s,{placeholder:"Placeholder"},{"addon-after":d(()=>[t(" After ")]),_:1}),n(s,{placeholder:"Placeholder"},{"addon-before":d(()=>[t(" Before ")]),"addon-after":d(()=>[t(" After ")]),_:1})])}const ge=m(xe,[["render",ye],["__scopeId","data-v-a87eaef3"]]),Oe=`<template>
  <div class="demo">
    <on-input placeholder="Placeholder">
      <template #addon-before>
        Before
      </template>
    </on-input>
    <on-input placeholder="Placeholder">
      <template #addon-after>
        After
      </template>
    </on-input>
    <on-input placeholder="Placeholder">
      <template #addon-before>
        Before
      </template>
      <template #addon-after>
        After
      </template>
    </on-input>
  </div>
</template>

<script setup lang="ts">
<\/script>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
`,Ie={},be={class:"demo"};function Ve(a,o){const s=u;return i(),p("div",be,[n(s,{placeholder:"Placeholder"},{prefix:d(()=>[t(" Prefix ")]),_:1}),n(s,{placeholder:"Placeholder"},{suffix:d(()=>[t(" Suffix ")]),_:1}),n(s,{placeholder:"Placeholder",prefix:"input.prefix",suffix:"input.suffix"})])}const $e=m(Ie,[["render",Ve],["__scopeId","data-v-472def9c"]]),we=`<template>
  <div class="demo">
    <on-input placeholder="Placeholder">
      <template #prefix>
        Prefix
      </template>
    </on-input>
    <on-input placeholder="Placeholder">
      <template #suffix>
        Suffix
      </template>
    </on-input>
    <on-input
      placeholder="Placeholder"
      prefix="input.prefix"
      suffix="input.suffix"
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
`,Ee={class:"markdown-body"},Pe=e("h1",null,"OnInput",-1),Se=e("p",null,"Поле ввода. Используется для ввода строковых значений. Является базовым компонентов для других полей ввода",-1),Ce=e("h2",null,"Примеры использования",-1),qe=e("h3",null,"Простое поле",-1),Be=e("h3",null,"Размеры",-1),Le=e("p",null,[t("Доступно три размера: "),e("code",null,"sm"),t(" (24px), "),e("code",null,"md"),t(" (32px) и "),e("code",null,"lg"),t(" (40px)")],-1),Ne=e("h3",null,"allowClear",-1),Fe=e("p",null,[t("Для отображения кнопки очистки поля передайте параметр "),e("code",null,"allowClear"),t(". Кнопка будет отображаться только если поле непустое.")],-1),ze=e("h3",null,"Кнопка копирования",-1),Ae=e("p",null,[t("Для отображения кнопки копирования значения поля передайте параметр "),e("code",null,"copyBtn"),t(".")],-1),De=e("h3",null,"Пароль",-1),Re=e("p",null,[t("При использовании "),e("code",null,'type="password"'),t(" в поле ввода автоматически отображается кнопка-переключатель видимости пароля. Это можно отключить, передав параметр "),e("code",null,"noEye"),t(".")],-1),ke=e("h3",null,"Индикатор загрузки",-1),Je=e("h3",null,"Аддоны",-1),Te=e("p",null,[t("Для размещения дополнительных элементов можно использовать слоты "),e("code",null,"addon-before"),t(" и "),e("code",null,"addon-after"),t(".")],-1),Ue=e("h3",null,"Префиксы и суффиксы",-1),He=e("h2",null,"API",-1),Qe="OnInput | OnFrontLib Docs",We=[{property:"og:title",content:"OnInput | OnFrontLib Docs"},{name:"twitter:title",content:"OnInput | OnFrontLib Docs"}],Xe={__name:"on-input",setup(a,{expose:o}){return o({frontmatter:{title:"OnInput | OnFrontLib Docs",meta:[{property:"og:title",content:"OnInput | OnFrontLib Docs"},{name:"twitter:title",content:"OnInput | OnFrontLib Docs"}]}}),b({title:"OnInput | OnFrontLib Docs",meta:[{property:"og:title",content:"OnInput | OnFrontLib Docs"},{name:"twitter:title",content:"OnInput | OnFrontLib Docs"}]}),(_,f)=>(i(),p("div",Ee,[Pe,Se,Ce,qe,n(r,{code:l(J)},{default:d(()=>[n(k)]),_:1},8,["code"]),Be,Le,n(r,{code:l(M)},{default:d(()=>[n(K)]),_:1},8,["code"]),Ne,Fe,n(r,{code:l(Z)},{default:d(()=>[n(Y)]),_:1},8,["code"]),ze,Ae,n(r,{code:l(le)},{default:d(()=>[n(se)]),_:1},8,["code"]),De,Re,n(r,{code:l(re)},{default:d(()=>[n(pe)]),_:1},8,["code"]),ke,n(r,{code:l(ve)},{default:d(()=>[n(fe)]),_:1},8,["code"]),Je,Te,n(r,{code:l(Oe)},{default:d(()=>[n(ge)]),_:1},8,["code"]),Ue,n(r,{code:l(we)},{default:d(()=>[n($e)]),_:1},8,["code"]),He,n(I,{value:l(N)},null,8,["value"])]))}};export{Xe as default,We as meta,Qe as title};
