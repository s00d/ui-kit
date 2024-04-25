import{_ as F}from"./ApiDoc.vue.BBsrfSvH.js";import{E as _}from"./index.CqeEYO5W.js";import{g as f,r as w,o as u,c as r,b as n,w as s,d as c,u as a,a as l,O as y,F as v,x as O,P as b,p as x,f as h,_ as M,Q as $,R as S,M as C}from"./entry._doioHTx.js";import{u as I}from"./vue.f36acd1f.BVcziSBg.js";const E="OnModal",R="default",q="on-modal",H="",L={},N=[{name:"open"},{name:"close"},{name:"isOpen"}],B=[{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"() => nanoid()"}},{name:"noOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeOnClickOutside",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"lazy",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"keepAlive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"transition",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'on-modal'"}},{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showX",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"windowClass",required:!1,type:{name:"any"},defaultValue:{func:!1,value:"null"}}],P=[{name:"update:modelValue"},{name:"opened"},{name:"closed"}],U=[{name:"close"},{name:"default",scoped:!0,bindings:[{name:"close",title:"binding"},{name:"is-open",title:"binding"},{name:"open",title:"binding"},{name:"modal-name",title:"binding"}]}],X="components/on-modal/index.vue",T={name:E,exportName:R,displayName:q,description:H,tags:L,expose:N,props:B,events:P,slots:U,sourceFile:X},V=o=>(x("data-v-b399a48a"),o=o(),h(),o),z={class:"modal1"},Q=V(()=>l("h2",null,"Hello, world",-1)),j=V(()=>l("p",null,"Modal content",-1)),G=f({__name:"basic",setup(o){const e=w(!1);return(m,t)=>{const i=O,d=b;return u(),r(v,null,[n(i,{onClick:t[0]||(t[0]=p=>e.value=!a(e))},{default:s(()=>[c(" Open modal ")]),_:1}),n(d,{modelValue:a(e),"onUpdate:modelValue":t[2]||(t[2]=p=>y(e)?e.value=p:null)},{default:s(()=>[l("div",z,[Q,j,n(i,{onClick:t[1]||(t[1]=p=>e.value=!1)},{default:s(()=>[c(" Close ")]),_:1})])]),_:1},8,["modelValue"])],64)}}}),J=M(G,[["__scopeId","data-v-b399a48a"]]),K=`<script setup lang="ts">
const isActive = ref(false);
<\/script>

<template>
  <on-btn @click="isActive = !isActive">
    Open modal
  </on-btn>
  <on-modal v-model="isActive">
    <div class="modal1">
      <h2>Hello, world</h2>
      <p>Modal content</p>
      <on-btn @click="isActive = false">
        Close
      </on-btn>
    </div>
  </on-modal>
</template>

<style scoped lang="scss">
.modal1 {
  padding: 16px 24px 32px;
  min-width: 300px;
}
</style>
`,W=o=>(x("data-v-9a33f061"),o=o(),h(),o),Y=W(()=>l("div",{class:"modal1"},[l("h2",null,"Hello, world"),l("p",null,"Modal content")],-1)),Z=f({__name:"show-x",setup(o){const e=w(!1);return(m,t)=>{const i=O,d=b;return u(),r(v,null,[n(i,{onClick:t[0]||(t[0]=p=>e.value=!a(e))},{default:s(()=>[c(" Open modal ")]),_:1}),n(d,{modelValue:a(e),"onUpdate:modelValue":t[1]||(t[1]=p=>y(e)?e.value=p:null),"show-x":""},{default:s(()=>[Y]),_:1},8,["modelValue"])],64)}}}),nn=M(Z,[["__scopeId","data-v-9a33f061"]]),en=`<script setup lang="ts">
const isActive = ref(false);
<\/script>

<template>
  <on-btn @click="isActive = !isActive">
    Open modal
  </on-btn>
  <on-modal
    v-model="isActive"
    show-x
  >
    <div class="modal1">
      <h2>Hello, world</h2>
      <p>Modal content</p>
    </div>
  </on-modal>
</template>

<style scoped lang="scss">
.modal1 {
  padding: 16px 24px 32px;
  min-width: 300px;
}
</style>
`,k=o=>(x("data-v-ec350196"),o=o(),h(),o),on={class:"modal1"},ln=k(()=>l("h2",null,"Hello, world",-1)),tn=k(()=>l("p",null,"Modal content",-1)),an=f({__name:"useOnModal",setup(o){const e=$("useOnModalDemo1");return(m,t)=>{const i=O,d=b;return u(),r(v,null,[n(i,{onClick:t[0]||(t[0]=p=>a(e).toggle())},{default:s(()=>[c(" Open modal ")]),_:1}),n(d,{name:"useOnModalDemo1"},{default:s(()=>[l("div",on,[ln,tn,n(i,{onClick:t[1]||(t[1]=p=>a(e).close())},{default:s(()=>[c(" Close ")]),_:1})])]),_:1})],64)}}}),sn=M(an,[["__scopeId","data-v-ec350196"]]),dn=`<script setup lang="ts">
import useOnModal from 'on-front-lib/composables/useOnModal';
const modal = useOnModal('useOnModalDemo1');
<\/script>

<template>
  <on-btn @click="modal.toggle()">
    Open modal
  </on-btn>
  <on-modal name="useOnModalDemo1">
    <div class="modal1">
      <h2>Hello, world</h2>
      <p>Modal content</p>
      <on-btn @click="modal.close()">
        Close
      </on-btn>
    </div>
  </on-modal>
</template>

<style scoped lang="scss">
.modal1 {
  padding: 16px 24px 32px;
  min-width: 300px;
}
</style>
`,cn=o=>(x("data-v-368eb69f"),o=o(),h(),o),pn={class:"modal1"},mn=cn(()=>l("h2",null,"Return example",-1)),un={class:"footer"},rn=f({__name:"return",setup(o){const e=$("useOnModalDemoReturn"),m=w(""),t=()=>{e.open().then(i=>{i===!1?window.alert("Cancel"):window.alert(`Hello, ${i}!`)})};return(i,d)=>{const p=O,D=S,A=b;return u(),r(v,null,[n(p,{onClick:t},{default:s(()=>[c(" Open modal ")]),_:1}),n(A,{name:"useOnModalDemoReturn"},{default:s(()=>[l("div",pn,[mn,n(D,{modelValue:a(m),"onUpdate:modelValue":d[0]||(d[0]=g=>y(m)?m.value=g:null),placeholder:"Введите что-нибудь"},null,8,["modelValue"]),l("div",un,[n(p,{onClick:d[1]||(d[1]=g=>a(e).close())},{default:s(()=>[c(" Cancel ")]),_:1}),n(p,{type:"primary",disabled:!a(m).length,onClick:d[2]||(d[2]=g=>a(e).close(a(m)))},{default:s(()=>[c(" Submit ")]),_:1},8,["disabled"])])])]),_:1})],64)}}}),_n=M(rn,[["__scopeId","data-v-368eb69f"]]),fn=`<script setup lang="ts">
import useOnModal from 'on-front-lib/composables/useOnModal';
const modal = useOnModal('useOnModalDemoReturn');
const name = ref('');

const openModal = () => {
  modal.open().then((data) => {
    if (data === false) {
      window.alert('Cancel');
    } else {
      window.alert(\`Hello, \${data}!\`);
    }
  });
};
<\/script>

<template>
  <on-btn @click="openModal">
    Open modal
  </on-btn>
  <on-modal name="useOnModalDemoReturn">
    <div class="modal1">
      <h2>Return example</h2>
      <on-input
        v-model="name"
        placeholder="Введите что-нибудь"
      />
      <div class="footer">
        <on-btn @click="modal.close()">
          Cancel
        </on-btn>
        <on-btn
          type="primary"
          :disabled="!name.length"
          @click="modal.close(name)"
        >
          Submit
        </on-btn>
      </div>
    </div>
  </on-modal>
</template>

<style scoped lang="scss">
.modal1 {
  padding: 16px 24px 32px;
  min-width: 300px;
}
.footer {
  padding-top: 24px;
  display: flex;
  gap: 16px;
  .on-btn {
    flex: 1 1 0;
  }
}
</style>
`,vn={class:"markdown-body"},On=C('<h1>OnModal</h1><p>Компонент <code>OnModal</code> предоставляет базовые возможности модальных окон.</p><h2>Архитектура</h2><p>Компонент использует хранилище Pinia (<code>useOnModalStore</code>) для хранения состояния каждого экземпляра компонента (булево значение, определяющее, отображается ли сейчас экземпляр).</p><p>Вместе с компонентом поставляется composable-функция <code>useOnModal(name: string)</code>, которая позволяет управлять видимостью модального окна из любого места приложения. Для использования этой возможности необходимо назначить каждому экземпляру уникальное имя с помощью параметра <code>name</code>.</p><p>Из модального окна можно возвращать значение (например, для реализации confirm/cancel).</p><p>Компонент монтируется в <code>document.body</code> с помощью <a href="https://nuxt.com/docs/api/components/teleports">Teleport</a>.</p><h2>Примеры использования</h2><h3>Simple</h3><p>Простой пример использования модального окна.</p>',10),bn=l("h3",null,"Кнопка закрытия",-1),xn=l("p",null,[c("Параметр "),l("code",null,"show-x"),c(" включает отображение кнопки закрытия в верхнем правом углу.")],-1),hn=C("<h3>useOnModal</h3><p>Для управления видимостью модального окна из любого места приложения используйте функцию <code>useOnModal(name: string)</code>.</p><p>Функция возвращает объект со следующими свойствами:</p><ul><li><code>{{ &#39;open: () =&gt; Promise&lt;unknown&gt;&#39; }}</code> – используется для открытия модального окна. Возвращает <code>Promise</code>, который будет выполнен (resolve) при закрытии окна. Если при закрытии в функцию <code>close(val?: any)</code> было передано значение <code>val</code>, это значение будет возвращено промисом. В противном случае будет возвращено <code>false</code>.</li><li><code>{{ &#39;close: (val?: any) =&gt; void&#39; }}</code> — закрывает модальное окно. Если было передано значение <code>val</code>, оно будет возвращено промисом, созданным при вызове функции <code>open()</code>.</li><li><code>{{ &#39;toggle: () =&gt; void&#39; }}</code> — переключает состояние модального окна.</li><li><code>{{ &#39;isOpen: ComputedRef&lt;boolean&gt;&#39; }}</code> — readonly-свойство, определяющее, открыто ли в данный момент модальное окно.</li></ul>",4),Mn=l("h4",null,"Возвращение данных",-1),gn=l("p",null,[c("Возвращение данных возможно при использовании функций "),l("code",null,"open()"),c(" и "),l("code",null,"close(val?: any)"),c(".")],-1),wn=l("h2",null,"API",-1),kn="OnModal | OnFrontLib Docs",Dn=[{property:"og:title",content:"OnModal | OnFrontLib Docs"},{name:"twitter:title",content:"OnModal | OnFrontLib Docs"}],An={__name:"on-modal",setup(o,{expose:e}){return e({frontmatter:{title:"OnModal | OnFrontLib Docs",meta:[{property:"og:title",content:"OnModal | OnFrontLib Docs"},{name:"twitter:title",content:"OnModal | OnFrontLib Docs"}]}}),I({title:"OnModal | OnFrontLib Docs",meta:[{property:"og:title",content:"OnModal | OnFrontLib Docs"},{name:"twitter:title",content:"OnModal | OnFrontLib Docs"}]}),(i,d)=>(u(),r("div",vn,[On,n(_,{code:a(K)},{default:s(()=>[n(J)]),_:1},8,["code"]),bn,xn,n(_,{code:a(en)},{default:s(()=>[n(nn)]),_:1},8,["code"]),hn,n(_,{code:a(dn)},{default:s(()=>[n(sn)]),_:1},8,["code"]),Mn,gn,n(_,{code:a(fn)},{default:s(()=>[n(_n)]),_:1},8,["code"]),wn,n(F,{value:a(T)},null,8,["value"])]))}};export{An as default,Dn as meta,kn as title};
