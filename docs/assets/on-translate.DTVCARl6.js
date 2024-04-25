import{_ as x}from"./ApiDoc.vue.BBsrfSvH.js";import{E as g}from"./index.CqeEYO5W.js";import{_ as b}from"./index.K-o-6l0c.js";import{g as y,r as u,o as f,c as v,a as e,b as t,u as l,O as r,C as V,_ as O,R as M,w as _,t as T,d as s}from"./entry._doioHTx.js";import{u as $}from"./vue.f36acd1f.BVcziSBg.js";const w="OnTranslate",E="default",L="on-translate",F="",N={},q=[{name:"path",description:`Путь к переводу в json-файле
Пример: cabinet.auth.sign_in_btn`,required:!0,type:{name:"string"}},{name:"tag",description:"Корневой тэг. По-умолчанию span",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"content",description:"Контент для отображения вместо перевода",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"plural",description:"Использовать метод tc вместо t.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"params",description:"Параметры, которые будут переданы в функцию i18n.t() / i18n.tc() / i18n.i()",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]},defaultValue:{func:!1,value:"undefined"}},{name:"noHtml",description:"Запрещает интерполяцию HTML",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noGlobal",description:"Игнорирует состояние onTranslateStore.translateMode",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editMode",description:"Режим редактирования",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]},defaultValue:{func:!1,value:"false"}},{name:"scope",required:!1,type:{name:"union",elements:[{name:'"global"'},{name:'"parent"'}]},defaultValue:{func:!1,value:"'global'"}},{name:"handler",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"(val: string) => val"}},{name:"number",defaultValue:{func:!1,value:"undefined"}}],H=[{name:"content"}],D="components/on-translate/index.vue",C={name:w,exportName:E,displayName:L,description:F,tags:N,props:q,slots:H,sourceFile:D},P="default",S="meta",U="",I={},k=[{name:"withSwitch",required:!1,type:{name:"boolean"}},{name:"pageHeadPath",required:!1,type:{name:"string"}},{name:"jsonLdTitlePath",required:!1,type:{name:"string"}},{name:"jsonLdDescriptionPath",required:!1,type:{name:"string"}}],A="components/on-translate/meta.vue",B={exportName:P,displayName:S,description:U,tags:I,props:k,sourceFile:A},j="OnTranslateModal",R="default",z="modal",G="",X={},J=[{name:"modelValue",defaultValue:{func:!1,value:"false"}},{name:"showX",defaultValue:{func:!1,value:"false"}},{name:"transition",defaultValue:{func:!1,value:"undefined"}},{name:"closeOnClickOutside",defaultValue:{func:!1,value:"true"}},{name:"noOverlay",defaultValue:{func:!1,value:"false"}},{name:"keepAlive",defaultValue:{func:!1,value:"false"}},{name:"lazy",defaultValue:{func:!1,value:"true"}}],K="components/on-translate/modal.vue",Q={name:j,exportName:R,displayName:z,description:G,tags:X,props:J,sourceFile:K},W={class:"demo"},Y={class:"toggle"},Z=y({__name:"basic",setup(h){const n=u(!1);return(o,i)=>{const a=b,d=V;return f(),v("div",W,[e("div",Y,[t(a,{modelValue:l(n),"onUpdate:modelValue":i[0]||(i[0]=m=>r(n)?n.value=m:null),label:"Edit mode"},null,8,["modelValue"])]),e("span",null,[t(d,{path:"hello.world","edit-mode":l(n),"no-global":""},null,8,["edit-mode"])])])}}}),ee=O(Z,[["__scopeId","data-v-0a8332e2"]]),ne=`<script setup lang="ts">
const editMode = ref(false);
<\/script>

<template>
  <div class="demo">
    <div class="toggle">
      <on-switch
        v-model="editMode"
        label="Edit mode"
      />
    </div>
    <span>
      <on-translate
        path="hello.world"
        :edit-mode="editMode"
        no-global
      />
    </span>
  </div>
</template>

<style scoped lang="scss">
.toggle {
  margin-bottom: 16px;
}
</style>
`,te={class:"demo"},le={class:"toggle"},ae=y({__name:"html",setup(h){const n=u(!1),o=u(!0);return(i,a)=>{const d=b,m=V;return f(),v("div",te,[e("div",le,[t(d,{modelValue:l(n),"onUpdate:modelValue":a[0]||(a[0]=c=>r(n)?n.value=c:null),label:"Edit mode"},null,8,["modelValue"]),t(d,{modelValue:l(o),"onUpdate:modelValue":a[1]||(a[1]=c=>r(o)?o.value=c:null),label:"Allow HTML"},null,8,["modelValue"])]),e("div",null,[t(m,{path:"hello.html","edit-mode":l(n),"no-html":!l(o),"no-global":""},null,8,["edit-mode","no-html"])])])}}}),oe=O(ae,[["__scopeId","data-v-dafb870c"]]),se=`<script setup lang="ts">
const editMode = ref(false);
const html = ref(true);
<\/script>

<template>
  <div class="demo">
    <div class="toggle">
      <on-switch
        v-model="editMode"
        label="Edit mode"
      />
      <on-switch
        v-model="html"
        label="Allow HTML"
      />
    </div>
    <div>
      <on-translate
        path="hello.html"
        :edit-mode="editMode"
        :no-html="!html"
        no-global
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.toggle {
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
}
</style>
`,de={class:"demo"},ie={style:{"margin-bottom":"16px"}},me={style:{"margin-bottom":"16px"}},ue=y({__name:"params",setup(h){const n=u("Santa"),o=u(!1);return(i,a)=>{const d=b,m=M,c=V;return f(),v("div",de,[e("div",ie,[t(d,{modelValue:l(o),"onUpdate:modelValue":a[0]||(a[0]=p=>r(o)?o.value=p:null),label:"Edit mode"},null,8,["modelValue"])]),e("div",me,[t(m,{modelValue:l(n),"onUpdate:modelValue":a[1]||(a[1]=p=>r(n)?n.value=p:null)},null,8,["modelValue"])]),t(c,{path:"hello.param",params:{name:l(n)},"edit-mode":l(o),"no-global":""},null,8,["params","edit-mode"])])}}}),re=`<script setup lang="ts">
const name = ref('Santa');
const editMode = ref(false);
<\/script>

<template>
  <div class="demo">
    <div style="margin-bottom: 16px;">
      <on-switch
        v-model="editMode"
        label="Edit mode"
      />
    </div>
    <div style="margin-bottom: 16px;">
      <on-input v-model="name" />
    </div>
    <on-translate
      path="hello.param"
      :params="{ name }"
      :edit-mode="editMode"
      no-global
    />
  </div>
</template>
`,ce={class:"demo"},pe={style:{"margin-bottom":"16px"}},_e={style:{"margin-bottom":"16px"}},fe={href:"#"},ve=y({__name:"slots",setup(h){const n=u("Santa"),o=u(!1);return(i,a)=>{const d=b,m=M,c=V;return f(),v("div",ce,[e("div",pe,[t(d,{modelValue:l(o),"onUpdate:modelValue":a[0]||(a[0]=p=>r(o)?o.value=p:null),label:"Edit mode"},null,8,["modelValue"])]),e("div",_e,[t(m,{modelValue:l(n),"onUpdate:modelValue":a[1]||(a[1]=p=>r(n)?n.value=p:null)},null,8,["modelValue"])]),t(c,{path:"hello.param","edit-mode":l(o),"no-html":"","no-global":""},{name:_(()=>[e("a",fe,T(l(n)),1)]),_:1},8,["edit-mode"])])}}}),he=`<script setup lang="ts">
const name = ref('Santa');
const editMode = ref(false);
<\/script>

<template>
  <div class="demo">
    <div style="margin-bottom: 16px;">
      <on-switch
        v-model="editMode"
        label="Edit mode"
      />
    </div>
    <div style="margin-bottom: 16px;">
      <on-input v-model="name" />
    </div>
    <on-translate
      path="hello.param"
      :edit-mode="editMode"
      no-html
      no-global
    >
      <template #name>
        <a href="#">{{ name }}</a>
      </template>
    </on-translate>
  </div>
</template>
`,ge={class:"demo"},be={class:"toggle"},ye=y({__name:"plural",setup(h){const n=u(!1);return(o,i)=>{const a=b,d=V;return f(),v("div",ge,[e("div",be,[t(a,{modelValue:l(n),"onUpdate:modelValue":i[0]||(i[0]=m=>r(n)?n.value=m:null),label:"Edit mode"},null,8,["modelValue"])]),e("div",null,[t(d,{path:"days_plural","edit-mode":l(n),plural:0,"no-global":""},null,8,["edit-mode"])]),e("div",null,[t(d,{path:"days_plural","edit-mode":l(n),plural:1,"no-global":""},null,8,["edit-mode"])]),e("div",null,[t(d,{path:"days_plural","edit-mode":l(n),plural:7,"no-global":""},null,8,["edit-mode"])])])}}}),Ve=O(ye,[["__scopeId","data-v-f907a1ba"]]),xe=`<script setup lang="ts">
const editMode = ref(false);
<\/script>

<template>
  <div class="demo">
    <div class="toggle">
      <on-switch
        v-model="editMode"
        label="Edit mode"
      />
    </div>
    <div>
      <on-translate
        path="days_plural"
        :edit-mode="editMode"
        :plural="0"
        no-global
      />
    </div>
    <div>
      <on-translate
        path="days_plural"
        :edit-mode="editMode"
        :plural="1"
        no-global
      />
    </div>
    <div>
      <on-translate
        path="days_plural"
        :edit-mode="editMode"
        :plural="7"
        no-global
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.toggle {
  margin-bottom: 16px;
}
</style>
`,Oe={class:"markdown-body"},Me=e("h1",null,"OnTranslate",-1),Te=e("p",null,"Компонент, получающий на вход путь к переводу и отображающий текст перевода, в зависимости от текущей локали.",-1),$e=e("p",null,[s("Является расширенным аналогом компонента "),e("a",{href:"https://vue-i18n.intlify.dev/guide/advanced/component.html"},"i18n-t"),s(". Поддерживает редактирование текста перевода.")],-1),we=e("p",null,[s("Для возможности редактирования необходимо добавить компонент "),e("code",null,"<on-translate-modal />"),s(" в любое место шаблона (рекомендуется в layout).")],-1),Ee=e("h2",null,"Примеры использования",-1),Le=e("h3",null,"Basic",-1),Fe=e("h3",null,"HTML",-1),Ne=e("p",null,[s("По умолчанию, весь HTML код, содержащийся в тексте перевода, интерполируется. Для отключения этой возможности необходимо передать параметр "),e("code",null,"noHtml"),s(".")],-1),qe=e("h3",null,"Передача параметров",-1),He=e("p",null,[s("Существует два способа передачи параметров. Первый - передача объекта в "),e("code",null,"params"),s(".")],-1),De=e("p",null,[s("Второй способ - передача параметров в именованных слотах. Этот способ работает только при выключенной интерполяции HTML (параметр "),e("code",null,"noHtml"),s("), но он позволяет отображать компоненты вместо параметров.")],-1),Ce=e("h3",null,"Числительные",-1),Pe=e("p",null,[s("Для склонения фразы в зависимости от числа, необходимо передать это число в параметре "),e("code",null,"plural"),s(".")],-1),Se=e("h2",null,[e("code",null,"OnTranslate"),s(" API")],-1),Ue=e("h2",null,[e("code",null,"OnTranslateMeta"),s(" API")],-1),Ie=e("h2",null,[e("code",null,"OnTranslateModal"),s(" API")],-1),ze="OnTranslate | OnFrontLib Docs",Ge=[{property:"og:title",content:"OnTranslate | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslate | OnFrontLib Docs"}],Xe={__name:"on-translate",setup(h,{expose:n}){return n({frontmatter:{title:"OnTranslate | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTranslate | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslate | OnFrontLib Docs"}]}}),$({title:"OnTranslate | OnFrontLib Docs",meta:[{property:"og:title",content:"OnTranslate | OnFrontLib Docs"},{name:"twitter:title",content:"OnTranslate | OnFrontLib Docs"}]}),(a,d)=>(f(),v("div",Oe,[Me,Te,$e,we,Ee,Le,t(g,{code:l(ne)},{default:_(()=>[t(ee)]),_:1},8,["code"]),Fe,Ne,t(g,{code:l(se)},{default:_(()=>[t(oe)]),_:1},8,["code"]),qe,He,t(g,{code:l(re)},{default:_(()=>[t(ue)]),_:1},8,["code"]),De,t(g,{code:l(he)},{default:_(()=>[t(ve)]),_:1},8,["code"]),Ce,Pe,t(g,{code:l(xe)},{default:_(()=>[t(Ve)]),_:1},8,["code"]),Se,t(x,{value:l(C)},null,8,["value"]),Ue,t(x,{value:l(B)},null,8,["value"]),Ie,t(x,{value:l(Q)},null,8,["value"])]))}};export{Xe as default,Ge as meta,ze as title};
