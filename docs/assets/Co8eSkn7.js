import{_ as C}from"./BI8L1cvd.js";import{E as b}from"./Cepu5Cdp.js";import{g as k,r as x,o as m,c as p,a as n,b as e,u as t,G as f,d as u,t as _,F as g,$ as v,h as V,p as $,f as N,_ as y,w as r,P as L}from"./C296uaLE.js";import{_ as I}from"./sshmS7Co.js";import{u as F}from"./CNmpcN_a.js";const q="OnCheckbox",D="default",E="on-checkbox",J="",w={},B=[{name:"checked",description:`Отмечен ли чекбокс.
 Может использоваться в v-model:checked`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"indeterminate",description:"Неопределенное состояние.",required:!1,type:{name:"boolean"}},{name:"value",description:"Значение, которое будет установлено при отмеченном чекбоксе (только при использовании внутри OnCheckboxGroup)",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"true"}},{name:"name",description:"Значение атрибута name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"label",description:"Надпись рядом с чекбоксом (i18n)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"labelPosition",description:"Отображать надпись (label) перед чекбоксом (before) или после чекбокса (after)",required:!1,type:{name:"union",elements:[{name:'"before"'},{name:'"after"'}]},defaultValue:{func:!1,value:"'after'"}},{name:"size",description:"Размер чекбокса. Высота 22px для размера `md`, и 16px для размера `sm`",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",description:"Отключает чекбокс",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",description:'Режим "только просмотр"',required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"status",description:"Статус валидации",required:!1,type:{name:"union",elements:[{name:'"error"'},{name:'"warning"'},{name:'"success"'},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],z=[{name:"update:checked"}],A=[{name:"default"},{name:"check"}],G="components/on-checkbox/index.vue",P={name:q,exportName:D,displayName:E,description:J,tags:w,props:B,events:z,slots:A,sourceFile:G},R="OnCheckboxGroup",U="default",M="group",W="",H={},T=[{name:"modelValue",description:"Текущее значение. Используется в `v-model`.",required:!1,type:{name:"Array",elements:[{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]}]},defaultValue:{func:!1,value:"() => []"}},{name:"disabled",description:"Отключает все чекбоксы",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",description:"Имя, которое будет установлено каждому чекбоксу",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],j=[{name:"update:modelValue"}],K=[{name:"default"}],Q="components/on-checkbox/group.vue",X={name:R,exportName:U,displayName:M,description:W,tags:H,props:T,events:j,slots:K,sourceFile:Q},Y=n("strong",null,"Value: ",-1),Z=k({__name:"basic",setup(a){const l=x(!0);return(o,c)=>{const s=v;return m(),p(g,null,[n("div",null,[e(s,{checked:t(l),"onUpdate:checked":c[0]||(c[0]=d=>f(l)?l.value=d:null),label:"Label"},null,8,["checked"])]),n("div",null,[Y,u(" "+_(JSON.stringify(t(l))),1)])],64)}}}),ee=`<script setup lang="ts">
const model = ref(true);
<\/script>

<template>
  <div>
    <on-checkbox
      v-model:checked="model"
      label="Label"
    />
  </div>
  <div>
    <strong>Value: </strong> {{ JSON.stringify(model) }}
  </div>
</template>

<style scoped lang="scss">

</style>
`;function ne(a,l,o){return V({get(){return a.value===t(l)},set(c){a.value=c?t(l):t(o)}})}const le=n("strong",null,"Bool value: ",-1),oe=n("strong",null,"Model value: ",-1),te=k({__name:"bool-proxy",setup(a){const l=x("off"),o=ne(l,"on","off");return(c,s)=>{const d=v;return m(),p(g,null,[n("div",null,[e(d,{checked:t(o),"onUpdate:checked":s[0]||(s[0]=i=>f(o)?o.value=i:null),label:"Label"},null,8,["checked"])]),n("div",null,[le,u(" "+_(JSON.stringify(t(o))),1)]),n("div",null,[oe,u(" "+_(JSON.stringify(t(l))),1)])],64)}}}),ae=`<script setup lang="ts">
const model = ref('off');
const boolValue = useBoolProxy(model, 'on', 'off');
<\/script>

<template>
  <div>
    <on-checkbox
      v-model:checked="boolValue"
      label="Label"
    />
  </div>
  <div>
    <strong>Bool value: </strong> {{ JSON.stringify(boolValue) }}
  </div>
  <div>
    <strong>Model value: </strong> {{ JSON.stringify(model) }}
  </div>
</template>

<style scoped lang="scss">

</style>
`,S=a=>($("data-v-94104ec4"),a=a(),N(),a),se={class:"values"},ce=S(()=>n("strong",null,"isAllChecked: ",-1)),de=S(()=>n("strong",null,"isIndeterminate: ",-1)),ie=k({__name:"indeterminate",setup(a){const l=x(!0),o=x(!1),c=V(()=>l.value!==o.value),s=V({get(){return l.value&&o.value},set(d){l.value=d,o.value=d}});return(d,i)=>{const O=v;return m(),p(g,null,[n("div",null,[e(O,{checked:t(s),"onUpdate:checked":i[0]||(i[0]=h=>f(s)?s.value=h:null),indeterminate:t(c),label:"Label"},null,8,["checked","indeterminate"])]),n("div",se,[e(O,{checked:t(l),"onUpdate:checked":i[1]||(i[1]=h=>f(l)?l.value=h:null),label:"Value 1"},null,8,["checked"]),e(O,{checked:t(o),"onUpdate:checked":i[2]||(i[2]=h=>f(o)?o.value=h:null),label:"Value 2"},null,8,["checked"])]),n("div",null,[ce,u(" "+_(JSON.stringify(t(s))),1)]),n("div",null,[de,u(" "+_(JSON.stringify(t(c))),1)])],64)}}}),ue=y(ie,[["__scopeId","data-v-94104ec4"]]),re=`<script setup lang="ts">
const val1 = ref(true);
const val2 = ref(false);

const isIndeterminate = computed(() => val1.value !== val2.value);

const isAllChecked = computed({
  get () { return val1.value && val2.value; },
  set (val: boolean) {
    val1.value = val;
    val2.value = val;
  },
});
<\/script>

<template>
  <div>
    <on-checkbox
      v-model:checked="isAllChecked"
      :indeterminate="isIndeterminate"
      label="Label"
    />
  </div>
  <div class="values">
    <on-checkbox
      v-model:checked="val1"
      label="Value 1"
    />
    <on-checkbox
      v-model:checked="val2"
      label="Value 2"
    />
  </div>
  <div>
    <strong>isAllChecked: </strong> {{ JSON.stringify(isAllChecked) }}
  </div>
  <div>
    <strong>isIndeterminate: </strong> {{ JSON.stringify(isIndeterminate) }}
  </div>
</template>

<style scoped lang="scss">
.values {
  padding: 8px 0;
  display: flex;
  gap: 16px;
}
</style>
`,me={},pe={class:"items"};function be(a,l){const o=v;return m(),p("div",pe,[e(o,{disabled:"",label:"Label"}),e(o,{checked:"",disabled:"",label:"Label"}),e(o,{indeterminate:"",disabled:"",label:"Label"})])}const fe=y(me,[["render",be],["__scopeId","data-v-7526f748"]]),_e=`<template>
  <div class="items">
    <on-checkbox
      disabled
      label="Label"
    />
    <on-checkbox
      checked
      disabled
      label="Label"
    />
    <on-checkbox
      indeterminate
      disabled
      label="Label"
    />
  </div>
</template>

<style scoped lang="scss">
.items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
</style>
`,ve=a=>($("data-v-8aa971c1"),a=a(),N(),a),he={class:"items"},xe=ve(()=>n("strong",null,"Value: ",-1)),ke=k({__name:"group",setup(a){const l=x([1,2,4]);return(o,c)=>{const s=v,d=I;return m(),p(g,null,[n("div",he,[e(d,{modelValue:t(l),"onUpdate:modelValue":c[0]||(c[0]=i=>f(l)?l.value=i:null),name:"cb-group"},{default:r(()=>[e(s,{value:1,label:"Value: 1"}),e(s,{value:2,label:"Value: 2"}),e(s,{value:3,label:"Value: 3"}),e(s,{value:4,label:"Value: 4"}),e(s,{value:1,label:"Value: 1 (duplicate)"})]),_:1},8,["modelValue"])]),n("div",null,[xe,u(" "+_(JSON.stringify(t(l))),1)])],64)}}}),ge=y(ke,[["__scopeId","data-v-8aa971c1"]]),ye=`<script setup lang="ts">
const model = ref([1, 2, 4]);
<\/script>

<template>
  <div class="items">
    <on-checkbox-group
      v-model="model"
      name="cb-group"
    >
      <on-checkbox
        :value="1"
        label="Value: 1"
      />
      <on-checkbox
        :value="2"
        label="Value: 2"
      />
      <on-checkbox
        :value="3"
        label="Value: 3"
      />
      <on-checkbox
        :value="4"
        label="Value: 4"
      />
      <on-checkbox
        :value="1"
        label="Value: 1 (duplicate)"
      />
    </on-checkbox-group>
  </div>
  <div>
    <strong>Value: </strong> {{ JSON.stringify(model) }}
  </div>
</template>

<style scoped lang="scss">
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
`,Oe={},Ve={class:"items"};function Ce(a,l){const o=v;return m(),p("div",Ve,[e(o,{size:"sm",label:"Small (sm)"}),e(o,{size:"md",label:"Medium (md)"}),e(o,{size:"lg",label:"Large (lg)"})])}const $e=y(Oe,[["render",Ce],["__scopeId","data-v-1caf3c61"]]),Ne=`<script setup lang="ts">
<\/script>

<template>
  <div class="items">
    <on-checkbox
      size="sm"
      label="Small (sm)"
    />
    <on-checkbox
      size="md"
      label="Medium (md)"
    />
    <on-checkbox
      size="lg"
      label="Large (lg)"
    />
  </div>
</template>

<style scoped lang="scss">
.items {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
</style>
`,Le={class:"markdown-body"},Se=L("<h1>OnCheckbox</h1><h2>Примеры использования</h2><h3>Basic</h3><p>Компонент принимает на вход <strong>булево</strong> значение в параметре <code>checked</code>. При изменении значения генерирует событие <code>update:checked</code>, что позволяет использовать сокращенный синтаксис <code>v-model:checked</code>.</p><p>Использование <code>v-model</code> без аргумента <code>checked</code> ошибочно и вызовет предупреждение в консоли.</p>",5),Ie=L("<p>При необходимости использования значений типа <code>string | number | null</code> вместо <code>boolean</code>, можно воспользоваться функцией <code>useBoolProxy(value, trueVal, falseVal)</code>.</p><p>Эта функция возвращает <code>WritableComputedRef&lt;boolean&gt;</code>, который можно использовать в качестве значения параметра <code>checked</code>.<br><code>trueVal</code> и <code>falseVal</code> могут быть примитивами, <code>Ref</code> или <code>ComputedRef</code>.<br><code>value</code> может иметь тип <code>Ref</code> или <code>WritableComputedRef</code>.</p>",2),Fe=n("h3",null,"Indeterminate",-1),qe=n("p",null,"Неопределенное состояние.",-1),De=n("h3",null,"Disabled",-1),Ee=n("h3",null,"Group",-1),Je=n("p",null,[u("Используйте компонент "),n("code",null,"OnCheckboxGroup"),u(" в тех случаях, когда необходимо отобразить большое количество чекбоксов и собрать отмеченные значения в массив.")],-1),we=n("h3",null,"Sizes",-1),Be=n("h2",null,[n("code",null,"OnCheckbox"),u(" API")],-1),ze=n("h2",null,[n("code",null,"OnCheckboxGroup"),u(" API")],-1),Me="OnCheckbox | OnFrontLib Docs",We=[{property:"og:title",content:"OnCheckbox | OnFrontLib Docs"},{name:"twitter:title",content:"OnCheckbox | OnFrontLib Docs"}],He={__name:"on-checkbox",setup(a,{expose:l}){return l({frontmatter:{title:"OnCheckbox | OnFrontLib Docs",meta:[{property:"og:title",content:"OnCheckbox | OnFrontLib Docs"},{name:"twitter:title",content:"OnCheckbox | OnFrontLib Docs"}]}}),F({title:"OnCheckbox | OnFrontLib Docs",meta:[{property:"og:title",content:"OnCheckbox | OnFrontLib Docs"},{name:"twitter:title",content:"OnCheckbox | OnFrontLib Docs"}]}),(s,d)=>(m(),p("div",Le,[Se,e(b,{code:t(ee)},{default:r(()=>[e(Z)]),_:1},8,["code"]),Ie,e(b,{code:t(ae)},{default:r(()=>[e(te)]),_:1},8,["code"]),Fe,qe,e(b,{code:t(re)},{default:r(()=>[e(ue)]),_:1},8,["code"]),De,e(b,{code:t(_e)},{default:r(()=>[e(fe)]),_:1},8,["code"]),Ee,Je,e(b,{code:t(ye)},{default:r(()=>[e(ge)]),_:1},8,["code"]),we,e(b,{code:t(Ne)},{default:r(()=>[e($e)]),_:1},8,["code"]),Be,e(C,{value:t(P)},null,8,["value"]),ze,e(C,{value:t(X)},null,8,["value"])]))}};export{He as default,We as meta,Me as title};
