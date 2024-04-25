import{E as k}from"./index.CqeEYO5W.js";import{g as w,D as $,r as u,o as f,c as g,b as n,w as t,a1 as V,R as x,u as o,x as F,d as c,a3 as E,a2 as C,a as m,t as I,F as S,n as D,p as P,f as W,_ as M,i as q,G as U,h as B,W as G,M as N,al as H}from"./entry._doioHTx.js";import{u as X}from"./vue.f36acd1f.BVcziSBg.js";const z=p=>(P("data-v-7be322c8"),p=p(),W(),p),A={class:"value"},K=z(()=>m("strong",null,"Value:",-1)),Q=w({__name:"basic",setup(p){const a=$({name:"",email:""}),v={name:[s=>s.length>=3||{message:"landing.global.validation.minLength",params:{n:3}}],email:[s=>s.length>=3&&/.+@[^@]+\.[^@]{2,}$/.test(s)||"landing.global.validation.email"]},r=u(),h=()=>{var l;const s=(l=r.value)==null?void 0:l.validate();if(console.dir(s),!s){console.log("Validation error");return}console.log("Form is valid")},_=()=>{a.name="",a.email="",D(()=>{var s;(s=r.value)==null||s.resetValidation()})};return(s,l)=>(f(),g(S,null,[n(C,{ref_key:"formRef",ref:r,model:o(a),rules:v,name:"basic",class:"demo-form",onSubmit:l[2]||(l[2]=E(()=>{},["prevent"]))},{default:t(()=>[n(V,{name:"name",label:"Name"},{default:t(()=>[n(x,{modelValue:o(a).name,"onUpdate:modelValue":l[0]||(l[0]=d=>o(a).name=d)},null,8,["modelValue"])]),_:1}),n(V,{name:"email",label:"Email"},{default:t(()=>[n(x,{modelValue:o(a).email,"onUpdate:modelValue":l[1]||(l[1]=d=>o(a).email=d)},null,8,["modelValue"])]),_:1}),n(V,{class:"actions"},{default:t(()=>[n(F,{type:"primary",onClick:h},{default:t(()=>[c(" Submit ")]),_:1}),n(F,{type:"default",onClick:_},{default:t(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1},8,["model"]),m("div",A,[K,c(" "+I(JSON.stringify(o(a))),1)])],64))}}),Y=M(Q,[["__scopeId","data-v-7be322c8"]]),Z=`<script setup lang="ts">
import OnForm from '@onfl/components/on-form/index.vue';
import OnFormItem from '@onfl/components/on-form-item/index.vue';
import OnInput from '@onfl/components/on-input/index.vue';
import OnBtn from '@onfl/components/on-btn/index.vue';
import type { IOnFormExposed } from '@onfl/components/on-form/types';
import type { IValidationMessageWithParams } from '@onfl/types/IValidationRule';

const form = reactive({
  name: '',
  email: '',
});

const rules = {
  name: [
    (val: string) => val.length >= 3 || {
      message: 'landing.global.validation.minLength',
      params: { n: 3 },
    } as IValidationMessageWithParams,
  ],
  email: [
    (val: string) => (val.length >= 3 && /.+@[^@]+\\.[^@]{2,}$/.test(val)) || 'landing.global.validation.email',
  ],
};

const formRef = ref<IOnFormExposed>();

const onSubmit = () => {
  const res = formRef.value?.validate();
  console.dir(res);
  if (!res) {
    console.log('Validation error');
    return;
  }
  console.log('Form is valid');
};

const onReset = () => {
  form.name = '';
  form.email = '';
  nextTick(() => {
    formRef.value?.resetValidation();
  });
};
<\/script>

<template>
  <on-form
    ref="formRef"
    :model="form"
    :rules="rules"
    name="basic"
    class="demo-form"
    @submit.prevent
  >
    <on-form-item
      name="name"
      label="Name"
    >
      <on-input v-model="form.name" />
    </on-form-item>
    <on-form-item
      name="email"
      label="Email"
    >
      <on-input v-model="form.email" />
    </on-form-item>
    <on-form-item class="actions">
      <on-btn
        type="primary"
        @click="onSubmit"
      >
        Submit
      </on-btn>
      <on-btn
        type="default"
        @click="onReset"
      >
        Reset
      </on-btn>
    </on-form-item>
  </on-form>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(form) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
.demo-form {
  :deep(.label-wrap) {
    width: 70px;
  }
}
.actions {
  padding-left: 70px;
  :deep(.input-wrap) {
    display: flex;
    gap:16px;
  }
}
</style>
`,nn=p=>(P("data-v-1e4fed09"),p=p(),W(),p),en={class:"value"},an=nn(()=>m("strong",null,"Value:",-1)),on=w({__name:"trigger-change",setup(p){const a=$({name:"",email:""}),v={name:[s=>s.length>=3||{message:"landing.global.validation.minLength",params:{n:3}}],email:[s=>s.length>=3&&/.+@[^@]+\.[^@]{2,}$/.test(s)||"landing.global.validation.email"]},r=u(),h=()=>{var l;const s=(l=r.value)==null?void 0:l.validate();if(console.dir(s),!s){console.log("Validation error");return}console.log("Form is valid")},_=()=>{a.name="",a.email="",D(()=>{var s;(s=r.value)==null||s.resetValidation()})};return(s,l)=>(f(),g(S,null,[n(C,{ref_key:"formRef",ref:r,model:o(a),rules:v,name:"trigger-change",class:"demo-form",trigger:"change",onSubmit:l[2]||(l[2]=E(()=>{},["prevent"]))},{default:t(()=>[n(V,{name:"name",label:"Name"},{default:t(()=>[n(x,{modelValue:o(a).name,"onUpdate:modelValue":l[0]||(l[0]=d=>o(a).name=d)},null,8,["modelValue"])]),_:1}),n(V,{name:"email",label:"Email"},{default:t(()=>[n(x,{modelValue:o(a).email,"onUpdate:modelValue":l[1]||(l[1]=d=>o(a).email=d)},null,8,["modelValue"])]),_:1}),n(V,{class:"actions"},{default:t(()=>[n(F,{type:"primary",onClick:h},{default:t(()=>[c(" Submit ")]),_:1}),n(F,{type:"default",onClick:_},{default:t(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1},8,["model"]),m("div",en,[an,c(" "+I(JSON.stringify(o(a))),1)])],64))}}),sn=M(on,[["__scopeId","data-v-1e4fed09"]]),tn=`<script setup lang="ts">
import OnForm from '@onfl/components/on-form/index.vue';
import OnFormItem from '@onfl/components/on-form-item/index.vue';
import OnInput from '@onfl/components/on-input/index.vue';
import OnBtn from '@onfl/components/on-btn/index.vue';
import type { IOnFormExposed } from '@onfl/components/on-form/types';
import type { IValidationMessageWithParams } from '@onfl/types/IValidationRule';

const form = reactive({
  name: '',
  email: '',
});

const rules = {
  name: [
    (val: string) => val.length >= 3 || {
      message: 'landing.global.validation.minLength',
      params: { n: 3 },
    } as IValidationMessageWithParams,
  ],
  email: [
    (val: string) => (val.length >= 3 && /.+@[^@]+\\.[^@]{2,}$/.test(val)) || 'landing.global.validation.email',
  ],
};

const formRef = ref<IOnFormExposed>();

const onSubmit = () => {
  const res = formRef.value?.validate();
  console.dir(res);
  if (!res) {
    console.log('Validation error');
    return;
  }
  console.log('Form is valid');
};

const onReset = () => {
  form.name = '';
  form.email = '';
  nextTick(() => {
    formRef.value?.resetValidation();
  });
};
<\/script>

<template>
  <on-form
    ref="formRef"
    :model="form"
    :rules="rules"
    name="trigger-change"
    class="demo-form"
    trigger="change"
    @submit.prevent
  >
    <on-form-item
      name="name"
      label="Name"
    >
      <on-input v-model="form.name" />
    </on-form-item>
    <on-form-item
      name="email"
      label="Email"
    >
      <on-input v-model="form.email" />
    </on-form-item>
    <on-form-item class="actions">
      <on-btn
        type="primary"
        @click="onSubmit"
      >
        Submit
      </on-btn>
      <on-btn
        type="default"
        @click="onReset"
      >
        Reset
      </on-btn>
    </on-form-item>
  </on-form>
  <div class="value">
    <strong>Value:</strong> {{ JSON.stringify(form) }}
  </div>
</template>

<style scoped lang="scss">
.value {
  padding-top: 16px;
}
.demo-form {
  :deep(.label-wrap) {
    width: 70px;
  }
}
.actions {
  padding-left: 70px;
  :deep(.input-wrap) {
    display: flex;
    gap:16px;
  }
}
</style>
`,ln={class:"state"},rn={class:"events"},mn=w({__name:"events",setup(p){const a=$({name:"",email:""}),v={name:[e=>e.length>=3||{message:"landing.global.validation.minLength",params:{n:3}}],email:[e=>e.length>=3&&/.+@[^@]+\.[^@]{2,}$/.test(e)||"landing.global.validation.email"]},r=u(),h=()=>{var i;const e=(i=r.value)==null?void 0:i.validate();if(console.dir(e),!e){console.log("Validation error");return}console.log("Form is valid")},_=()=>{a.name="",a.email="",D(()=>{var e;(e=r.value)==null||e.resetValidation()})},s=u(null),l=u([]),d=u(!1),L=e=>{d.value=e;const i=new Date().toISOString();l.value.push(`[${i}] isFormValid === ${e}`)},T=e=>{s.value=e;const i=new Date().toISOString();l.value.push(`[${i}] state changed`)};return q(()=>{var e;(e=r.value)==null||e.validate(void 0,!0)}),(e,i)=>{const O=x,y=V,R=F;return f(),g(S,null,[n(C,{ref_key:"formRef",ref:r,model:o(a),rules:v,name:"events",class:"demo-form",onSubmit:i[2]||(i[2]=E(()=>{},["prevent"])),onValidate:L,onChange:T},{default:t(()=>[n(y,{name:"name",label:"Name"},{default:t(()=>[n(O,{modelValue:o(a).name,"onUpdate:modelValue":i[0]||(i[0]=b=>o(a).name=b)},null,8,["modelValue"])]),_:1}),n(y,{name:"email",label:"Email"},{default:t(()=>[n(O,{modelValue:o(a).email,"onUpdate:modelValue":i[1]||(i[1]=b=>o(a).email=b)},null,8,["modelValue"])]),_:1}),n(y,{class:"actions"},{default:t(()=>[n(R,{type:"primary",disabled:!o(d),onClick:h},{default:t(()=>[c(" Submit ")]),_:1},8,["disabled"]),n(R,{type:"default",onClick:_},{default:t(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1},8,["model"]),m("div",ln,I(JSON.stringify(o(s)??{},null,2)),1),m("div",rn,[(f(!0),g(S,null,U(o(l),(b,j)=>(f(),g("div",{key:j},I(b),1))),128))])],64)}}}),dn=M(mn,[["__scopeId","data-v-3f678e04"]]),cn=`<script setup lang="ts">
import OnForm from '@onfl/components/on-form/index.vue';
import type { IValidationMessageWithParams } from '@onfl/types/IValidationRule';
import type { IOnFormExposed } from '@onfl/components/on-form/types';
import type {IValidationField} from '@onfl/types/IValidationField';

const form = reactive({
  name: '',
  email: '',
});

const rules = {
  name: [
    (val: string) => val.length >= 3 || {
      message: 'landing.global.validation.minLength',
      params: { n: 3 },
    } as IValidationMessageWithParams,
  ],
  email: [
    (val: string) => (val.length >= 3 && /.+@[^@]+\\.[^@]{2,}$/.test(val)) || 'landing.global.validation.email',
  ],
};

const formRef = ref<IOnFormExposed>();

const onSubmit = () => {
  const res = formRef.value?.validate();
  console.dir(res);
  if (!res) {
    console.log('Validation error');
    return;
  }
  console.log('Form is valid');
};

const onReset = () => {
  form.name = '';
  form.email = '';
  nextTick(() => {
    formRef.value?.resetValidation();
  });
};

const formState = ref<Record<string, IValidationField> | null>(null);
const events = ref<string[]>([]);
const isFormValid = ref(false);

const onValidate = (val: boolean) => {
  isFormValid.value = val;
  const dt = (new Date()).toISOString();
  events.value.push(\`[\${dt}] isFormValid === \${val}\`);
};
const onChange = (val: Record<string, IValidationField>) => {
  formState.value = val;
  const dt = (new Date()).toISOString();
  events.value.push(\`[\${dt}] state changed\`);
};

onMounted(() => {
  // получаем актуальное состояние
  formRef.value?.validate(undefined, true);
});
<\/script>

<template>
  <on-form
    ref="formRef"
    :model="form"
    :rules="rules"
    name="events"
    class="demo-form"
    @submit.prevent
    @validate="onValidate"
    @change="onChange"
  >
    <on-form-item
      name="name"
      label="Name"
    >
      <on-input v-model="form.name" />
    </on-form-item>
    <on-form-item
      name="email"
      label="Email"
    >
      <on-input v-model="form.email" />
    </on-form-item>
    <on-form-item class="actions">
      <on-btn
        type="primary"
        :disabled="!isFormValid"
        @click="onSubmit"
      >
        Submit
      </on-btn>
      <on-btn
        type="default"
        @click="onReset"
      >
        Reset
      </on-btn>
    </on-form-item>
  </on-form>
  <div class="state">
    {{ JSON.stringify(formState ?? {}, null, 2) }}
  </div>
  <div class="events">
    <div
      v-for="(event, i) in events"
      :key="i"
    >
      {{ event }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.state {
  white-space: pre-wrap;
}
.events, .state {
  padding-top: 16px;
  font-family: var(--on-font-mono);
}
.demo-form {
  :deep(.label-wrap) {
    width: 70px;
  }
}
.actions {
  padding-left: 70px;
  :deep(.input-wrap) {
    display: flex;
    gap:16px;
  }
}
</style>
`,pn={class:"state"},un={class:"events"},fn=w({__name:"deps",setup(p){const a=$({needle:"",text:""}),v=B(()=>(a.needle,{needle:[e=>e.length>=3||{message:"landing.global.validation.minLength",params:{n:3}}],text:[e=>e.includes(a.needle)||"landing.global.validation.no_needle"]})),r=u(),h=()=>{var i;const e=(i=r.value)==null?void 0:i.validate();if(console.dir(e),!e){console.log("Validation error");return}console.log("Form is valid")},_=()=>{a.needle="",a.text="",D(()=>{var e;(e=r.value)==null||e.resetValidation()})},s=u(null),l=u([]),d=u(!1),L=e=>{d.value=e;const i=new Date().toISOString();l.value.push(`[${i}] isFormValid === ${e}`)},T=e=>{s.value=e;const i=new Date().toISOString();l.value.push(`[${i}] state changed`)};return q(()=>{var e;(e=r.value)==null||e.validate(void 0,!0)}),(e,i)=>{const O=x,y=V,R=G,b=F;return f(),g(S,null,[n(C,{ref_key:"formRef",ref:r,model:o(a),rules:o(v),name:"deps",class:"demo-form",onSubmit:i[2]||(i[2]=E(()=>{},["prevent"])),onValidate:L,onChange:T},{default:t(()=>[n(y,{name:"needle",label:"Needle"},{default:t(()=>[n(O,{modelValue:o(a).needle,"onUpdate:modelValue":i[0]||(i[0]=j=>o(a).needle=j)},null,8,["modelValue"])]),_:1}),n(y,{name:"text",label:"Text"},{default:t(()=>[n(R,{modelValue:o(a).text,"onUpdate:modelValue":i[1]||(i[1]=j=>o(a).text=j)},null,8,["modelValue"])]),_:1}),n(y,{class:"actions"},{default:t(()=>[n(b,{type:"primary",disabled:!o(d),onClick:h},{default:t(()=>[c(" Submit ")]),_:1},8,["disabled"]),n(b,{type:"default",onClick:_},{default:t(()=>[c(" Reset ")]),_:1})]),_:1})]),_:1},8,["model","rules"]),m("div",pn,I(JSON.stringify(o(s)??{},null,2)),1),m("div",un,[(f(!0),g(S,null,U(o(l),(j,J)=>(f(),g("div",{key:J},I(j),1))),128))])],64)}}}),gn=M(fn,[["__scopeId","data-v-ae2daae2"]]),vn=`<script setup lang="ts">
import OnForm from '@onfl/components/on-form/index.vue';
import type { IValidationMessageWithParams } from '@onfl/types/IValidationRule';
import type { IOnFormExposed } from '@onfl/components/on-form/types';
import type { IValidationField } from '@onfl/types/IValidationField';

const form = reactive({
  needle: '',
  text: '',
});

const rules = computed(() => {
  // eslint-disable-next-line no-void
  void form.needle;
  return {
    needle: [
      (val: string) => val.length >= 3 || {
        message: 'landing.global.validation.minLength',
        params: { n: 3 },
      } as IValidationMessageWithParams,
    ],
    text: [
      (val: string) => (val.includes(form.needle)) || 'landing.global.validation.no_needle',
    ],
  };
});

const formRef = ref<IOnFormExposed>();

const onSubmit = () => {
  const res = formRef.value?.validate();
  console.dir(res);
  if (!res) {
    console.log('Validation error');
    return;
  }
  console.log('Form is valid');
};

const onReset = () => {
  form.needle = '';
  form.text = '';
  nextTick(() => {
    formRef.value?.resetValidation();
  });
};

const formState = ref<Record<string, IValidationField> | null>(null);
const events = ref<string[]>([]);
const isFormValid = ref(false);

const onValidate = (val: boolean) => {
  isFormValid.value = val;
  const dt = (new Date()).toISOString();
  events.value.push(\`[\${dt}] isFormValid === \${val}\`);
};
const onChange = (val: Record<string, IValidationField>) => {
  formState.value = val;
  const dt = (new Date()).toISOString();
  events.value.push(\`[\${dt}] state changed\`);
};

onMounted(() => {
  // получаем актуальное состояние
  formRef.value?.validate(undefined, true);
});
<\/script>

<template>
  <on-form
    ref="formRef"
    :model="form"
    :rules="rules"
    name="deps"
    class="demo-form"
    @submit.prevent
    @validate="onValidate"
    @change="onChange"
  >
    <on-form-item
      name="needle"
      label="Needle"
    >
      <on-input v-model="form.needle" />
    </on-form-item>
    <on-form-item
      name="text"
      label="Text"
    >
      <on-textarea v-model="form.text" />
    </on-form-item>
    <on-form-item class="actions">
      <on-btn
        type="primary"
        :disabled="!isFormValid"
        @click="onSubmit"
      >
        Submit
      </on-btn>
      <on-btn
        type="default"
        @click="onReset"
      >
        Reset
      </on-btn>
    </on-form-item>
  </on-form>
  <div class="state">
    {{ JSON.stringify(formState ?? {}, null, 2) }}
  </div>
  <div class="events">
    <div
      v-for="(event, i) in events"
      :key="i"
    >
      {{ event }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.state {
  white-space: pre-wrap;
}
.events, .state {
  padding-top: 16px;
  font-family: var(--on-font-mono);
}
.demo-form {
  :deep(.label-wrap) {
    width: 70px;
  }
}
.actions {
  padding-left: 70px;
  :deep(.input-wrap) {
    display: flex;
    gap:16px;
  }
}
</style>
`,hn={class:"markdown-body"},_n=m("h1",null,"Валидация форм",-1),bn=N(`<h2>Использование</h2><p>Для использования валидации необходимо передать в компонент <code>OnForm</code> параметры <code>model</code> и <code>rules</code>. Значение параметра <code>model</code> должно быть объектом, каждый ключ которого содержит значение соответствующего поля. Пример:</p><pre><code class="hljs language-typescript"><span class="hljs-keyword">const</span> model = <span class="hljs-title function_">reactive</span>({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">email</span>: <span class="hljs-string">&#39;&#39;</span>,
});
</code></pre><p>Значение параметра <code>rules</code> так же должно быть объектом, с такими же ключами, как у <code>model</code>. Значением каждого ключа является массив <strong>правил валидации</strong>.</p><p><strong>Правило валидации</strong> - это функция, принимающая в единственном аргументе текущее значение поля. Функция может возвращать строку, булево значение или объект <code>IValidationMessageWithParams</code>:</p><pre><code class="hljs language-typescript"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">IValidationMessageWithParams</span> {
  <span class="hljs-comment">// путь к переводу i18n с сообщением об ошибке</span>
  <span class="hljs-attr">message</span>: <span class="hljs-built_in">string</span>,
  <span class="hljs-comment">// параметры (params) для OnTranslate</span>
  <span class="hljs-attr">params</span>: <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">any</span>&gt;,
  <span class="hljs-comment">// число для склонения</span>
  plural?: <span class="hljs-built_in">number</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">IValidationRuleFn</span> = <span class="hljs-function">(<span class="hljs-params">val: <span class="hljs-built_in">unknown</span></span>) =&gt;</span> <span class="hljs-built_in">boolean</span> | <span class="hljs-built_in">string</span> | <span class="hljs-title class_">IValidationMessageWithParams</span>;
</code></pre><p>Если функция возвращает строку, эта строка будет передана в компонент <code>OnTranslate</code> как <em>путь к переводу <code>i18n</code></em> с сообщением об ошибке.</p><p>Объект <code>IValidationMessageWithParams</code> можно использовать, когда в компонент <code>OnTranslate</code> необходимо передать дополнительные параметры (<code>params</code>) или число для склонения (<code>params.n</code>).</p><p>Пример объекта <code>rules</code>:</p><pre><code class="hljs language-typescript"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">IValidationMessageWithParams</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@onfl/types/IValidationRule&#39;</span>;

<span class="hljs-keyword">const</span> rules = {
  <span class="hljs-attr">name</span>: [
    <span class="hljs-function">(<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt;</span> val.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">3</span> || {
      <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;landing.global.validations.minLength&#39;</span>,
      <span class="hljs-attr">params</span>: { <span class="hljs-attr">n</span>: <span class="hljs-number">3</span> },
    } <span class="hljs-keyword">as</span> <span class="hljs-title class_">IValidationMessageWithParams</span>,
  ],
  <span class="hljs-attr">email</span>: [
    <span class="hljs-function">(<span class="hljs-params">val: <span class="hljs-built_in">string</span></span>) =&gt;</span> (val.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">3</span> &amp;&amp; <span class="hljs-regexp">/.+@[^@]+\\.[^@]{2,}$/</span>.<span class="hljs-title function_">test</span>(val)) || <span class="hljs-string">&#39;landing.global.validations.email&#39;</span>,
  ],
};
</code></pre><p>Для вывода ошибок валидации рядом с соответствующими полями, нужно обернуть поля компонентом <code>OnFormItem</code> и передать параметр <code>name</code>, значение которого должно соответствовать ключу из объектов <code>model</code> и <code>rules</code> компонента <code>OnForm</code>:</p><pre><code class="hljs language-vue"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">on-form</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">:model</span>=<span class="hljs-string">&quot;model&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">on-form-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">on-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;model.name&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">on-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">on-form-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;email&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">on-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;model.email&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">on-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">on-form</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</span></code></pre><p>Компонент <code>OnFormItem</code> с помощью механизма <code>Provide/Inject</code> получает состояние валидации поля ввода (из <code>OnForm</code>) и отображает сообщение об ошибке, если это необходимо.</p><h3>Интерактивный пример</h3>`,14),Vn=N("<h3>“Ленивая” валидация</h3><p>По умолчанию используется “ленивая” валидация, т.е. проверка значений происходит только при потере фокуса (или при “ручном” запуске валидации). Это поведение можно изменить, установив параметр <code>trigger</code> компонента <code>OnForm</code> в значение <code>change</code> вместо <code>blur</code>.</p><ul><li><strong>blur</strong>: Если текущее состояние - <code>error</code>, проверка будет запускаться при каждом изменении значения. В противном случае - только при потере фокуса.</li><li><strong>change</strong>: Независимо от текущего состояния, проверка будет запускаться при каждом изменении значения.</li></ul><p>Ниже приведён пример с <code>trigger=&quot;change&quot;</code>.</p>",4),yn=N("<p>Обратите внимание, что такое поведение может негативно сказаться на UX, поскольку сообщения об ошибке начинают появляться сразу же после ввода первого символа, когда пользователь ещё не закончил взаимодействие с полем.</p><h3>Принудительная проверка</h3><p>Перед отправкой формы на сервер можно запустить принудительную проверку значений формы. Для этого установите <code>ref</code> компоненту <code>OnForm</code> и вызовите метод <code>validate()</code>.</p><p>Спецификация метода: <code>(fields?: string[], noTouch: boolean = false, trigger?: &#39;blur&#39; | &#39;change&#39;) =&gt; boolean</code></p><p>Если передан параметр <code>fields</code>, проверка будет запущена только для указанных полей. Массив должен содержать ключи из объекта <code>model</code> / <code>rules</code>.</p><p>При <code>noTouch === true</code> (по умолчанию <code>false</code>) сообщения об ошибке не будут показаны, если поле не изменялось.</p><p>При передаче <code>trigger === &#39;change&#39;</code> и одновременном выполнении одним или нескольких полей следующих условий:</p><ul><li>значение поля до запуска проверки валидно <strong>ИЛИ</strong> поле ранее не менялось и не получало фокус</li><li><code>trigger</code> компонента <code>OnForm</code> установлен в <code>blur</code></li></ul><p>соответствующее поле <strong>не будет проверено</strong>, его состояние не будет изменено. Не используйте этот параметр, если не уверены, что это действительно необходимо. В большинстве случаев достаточно вызова метода <code>validate()</code> без передачи каких-либо аргументов.</p><p>Примеры выше демонстрируют запуск валидации при отправке формы, результат отображается в консоли.</p><h3>Отслеживание состояния</h3><p>Компонент следит за изменением состояния формы и отправляет события <code>change</code> и <code>validate</code>. Тело события <code>change</code> содержит весь объект <code>Record&lt;string, IValidationField&gt;</code>, а тело события <code>validate</code> - только булево значение, отражающее, валидна ли в данный момент форма.</p><p>Обратите внимание, что отслеживание начинается только на клиенте, после монтирования компонента.</p><p>Пример использования:</p>",14),jn=N("<p>Частота срабатывания событий напрямую зависит от параметра <code>trigger</code>.</p><p>Обратите внимание, что валидация <strong>не запускается</strong> автоматически при монтировании компонента. Первое событие <code>validate</code> произойдет после монтирования и вернёт <code>false</code>.</p><p>Если форма создаётся частично заполненной и она может быть изначально валидна, запустите метод <code>validate()</code> в <code>onMounted()</code>, чтобы получить актуальное состояние.</p><h3>Зависимости в правилах</h3><p>Если правило одного поля зависит от динамического значения другого поля, необходимо обернуть объект с правилами в <code>computed</code> и добавить зависимость (например, с помощью <code>void someField.value;</code>).</p><p>По умолчанию отслеживание изменений <code>rules</code> отключено. Чтобы его включить, передайте параметр <code>watch-rules</code> в компонент <code>OnForm</code>. Дополнительно можно передать <code>touch-on-rules-change</code>, в этом случае при изменении правил всем полям будет установлено <code>touched: true</code>, и будут показаны ошибки, даже если поля ранее не получали фокус.</p><p>В следующем примере правила установлены таким образом, что значение поля <code>Text</code> должно содержать подстроку - значение поля <code>Needle</code>.</p>",7),xn=m("h3",null,"Поддержка компонентами",-1),Fn=m("p",null,"В настоящий момент валидация поддерживается компонентами:",-1),In=m("ul",null,[m("li",null,"OnInput"),m("li",null,"OnTextarea"),m("li",null,"OnInputMasked")],-1),kn="Валидация | OnFrontLib Docs",wn=[{property:"og:title",content:"Валидация | OnFrontLib Docs"},{name:"twitter:title",content:"Валидация | OnFrontLib Docs"}],$n={__name:"validation",setup(p,{expose:a}){return a({frontmatter:{title:"Валидация | OnFrontLib Docs",meta:[{property:"og:title",content:"Валидация | OnFrontLib Docs"},{name:"twitter:title",content:"Валидация | OnFrontLib Docs"}]}}),X({title:"Валидация | OnFrontLib Docs",meta:[{property:"og:title",content:"Валидация | OnFrontLib Docs"},{name:"twitter:title",content:"Валидация | OnFrontLib Docs"}]}),(h,_)=>{const s=H("nuxt-link");return f(),g("div",hn,[_n,m("p",null,[c("Компонент "),n(s,{to:"/04.%20Forms/on-form"},{default:t(()=>[c("OnForm")]),_:1}),c(" поддерживает валидацию введённых значений на основе правил.")]),bn,n(k,{code:o(Z)},{default:t(()=>[n(Y)]),_:1},8,["code"]),Vn,n(k,{code:o(tn)},{default:t(()=>[n(sn)]),_:1},8,["code"]),yn,n(k,{code:o(cn)},{default:t(()=>[n(dn)]),_:1},8,["code"]),jn,n(k,{code:o(vn)},{default:t(()=>[n(gn)]),_:1},8,["code"]),xn,Fn,In])}}};export{$n as default,wn as meta,kn as title};
