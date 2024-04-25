import{_ as p}from"./BI8L1cvd.js";import{u as l}from"./CNmpcN_a.js";import{c as o,a as n,d as s,b as e,w as c,u as r,P as i,au as d,o as h}from"./C296uaLE.js";const m="default",g="page-list",j="",w={},u=[{name:"data",description:"Объект с данными (INewsList)",required:!0,type:{name:"INewsList"}},{name:"query",description:"Поисковый запрос из GET-параметра",required:!1,type:{name:"string"}},{name:"searchIcon",description:`Путь к иконке поиска, которая используется в качестве кнопки
и как префикс в on-input.
Передаётся в OnSvg.`,required:!0,type:{name:"string"}},{name:"emptyIcon",description:`Путь к иконке, которая отображается при отсутствии новостей.
Передаётся в OnSvg`,required:!1,type:{name:"string"}},{name:"emptyText",description:`Путь к тексту, который отображается при отсутствии новостей
(i18n path)`,required:!1,type:{name:"string"}},{name:"searchPlaceholder",description:`Путь к тексту, который используется в качестве placeholder
в поле поиска.
(i18n path)`,required:!1,type:{name:"string"}},{name:"titleFirstPage",description:`Путь к заголовку первой страницы
(i18n path)`,required:!1,type:{name:"string"}},{name:"titleNPage",description:`Путь к заголовку N-ой страницы
(i18n path)`,tags:{params:[{title:"param",type:{name:"mixed"},description:"n номер страницы"}]},required:!1,type:{name:"string"}},{name:"paginationRouteFn",description:"Функция, возвращающая маршрут к странице page с поисковым запросом searchQuery",tags:{params:[{title:"param",type:{name:"mixed"},name:"page"},{title:"param",type:{name:"mixed"},name:"searchQuery"}]},required:!0,type:{name:"TSFunctionType"}}],y=[{name:"search",type:{names:["string"]}}],f=[{name:"title-first-page"},{name:"title-n-page"},{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"empty"}],_="components/news/page-list.vue",k={exportName:m,displayName:g,description:j,tags:w,props:u,events:y,slots:f,sourceFile:_},N={class:"markdown-body"},x=n("h1",null,"News",-1),v=n("code",null,"news",-1),b=n("code",null,"layers/news",-1),L=i(`<h2>Содержимое модуля</h2><h3>API</h3><p>Модуль содержит класс с методами для осуществления запросов к API.</p><p>Импортируйте класс следующим образом:</p><pre><code class="hljs language-typescript">  <span class="hljs-keyword">import</span> <span class="hljs-title class_">News</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;~news-layer/api/news&#39;</span>;
</code></pre><p>Затем создайте экземпляр класса, передав в конструктор экземпляр <code>AxiosInstance</code>.</p><pre><code class="hljs language-typescript">  <span class="hljs-keyword">const</span> http = axios.<span class="hljs-title function_">create</span>(config);
  <span class="hljs-keyword">const</span> newsApi = <span class="hljs-keyword">new</span> <span class="hljs-title class_">News</span>(http);
</code></pre><p>Поскольку пути к методам API на разных проектах могут отличаться, конструктор поддерживает второй аргумент, с помощью которого можно настроить маршруты. Этот аргумент должен быть объектом, ключи которого соответствуют названию методов класса, а значения могут быть либо строкой, либо функцией, возвращающей сроку. В функцию передаются такие же аргументы, как и в сам метод. Упрощенно тип второго аргумента можно описать так:</p><pre><code class="hljs">  {
    [<span class="hljs-name">key</span>: <span class="hljs-built_in">string</span>]: <span class="hljs-built_in">string</span> | (<span class="hljs-function"><span class="hljs-params">(...args: any[])</span> =&gt;</span> <span class="hljs-built_in">string</span>);
  }
</code></pre><p>Маршруты по умолчанию можно импортировать так:</p><pre><code class="hljs language-typescript">  <span class="hljs-keyword">import</span> { defaultEndpoints } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;~news-layer/api/news&#39;</span>;
</code></pre><p>Пример переопределения маршрута:</p><pre><code class="hljs language-typescript">  <span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;axios&#39;</span>;
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">News</span>, { defaultEndpoints } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;~news-layer/api/news&#39;</span>;
  <span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">Endpoints</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;~news-layer/api/types&#39;</span>;

  <span class="hljs-keyword">const</span> http = axios.<span class="hljs-title function_">create</span>({});
  <span class="hljs-keyword">const</span> <span class="hljs-attr">endpoints</span>: <span class="hljs-title class_">Endpoints</span>&lt;<span class="hljs-title class_">News</span>&gt; = {
    ...defaultEndpoints,
    <span class="hljs-attr">getNewsPost</span>: <span class="hljs-function"><span class="hljs-params">slug</span> =&gt;</span> <span class="hljs-string">\`/api/v2/news/<span class="hljs-subst">\${slug}</span>\`</span>,
  };
  <span class="hljs-keyword">const</span> newsApi = <span class="hljs-keyword">new</span> <span class="hljs-title class_">News</span>(http, endpoints);

  <span class="hljs-keyword">const</span> res = <span class="hljs-keyword">await</span> newsApi.<span class="hljs-title function_">getNewsPost</span>(<span class="hljs-string">&#39;test-slug&#39;</span>); <span class="hljs-comment">// вызовет метод GET /api/v2/news/test-slug</span>
</code></pre><h3><code>page-list.vue</code></h3><p>Компонент страницы для отображения списка новостей. Поддерживается поиск и пагинация.</p><pre><code class="hljs language-typescript">  <span class="hljs-keyword">import</span> <span class="hljs-title class_">PageList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;~news-layer/components/news/page-list.vue&#39;</span>;
</code></pre><p>Создайте компонент страницы, например, <code>pages/news/index.vue</code>, напишите логику получения данных с сервера и передайте эти данные в компонент <code>PageList</code>.</p><p>Для того чтобы создать маршруты вида <code>/news</code> и <code>/news/page-:page</code>, необходимо добавить в <code>nuxt.config.ts</code> следующий код:</p><pre><code class="hljs language-typescript">  <span class="hljs-keyword">import</span> { createResolver } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nuxt/kit&#39;</span>;
  <span class="hljs-keyword">const</span> { resolve } = <span class="hljs-title function_">createResolver</span>(<span class="hljs-keyword">import</span>.<span class="hljs-property">meta</span>.<span class="hljs-property">url</span>);

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineNuxtConfig</span>({
    <span class="hljs-attr">hooks</span>: {
      <span class="hljs-string">&#39;pages:extend&#39;</span> (pages) {
        pages.<span class="hljs-title function_">push</span>({
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;news-page&#39;</span>,
          <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/news/page-:page&#39;</span>,
          <span class="hljs-comment">// путь к файлу со страницей /news</span>
          <span class="hljs-attr">file</span>: <span class="hljs-title function_">resolve</span>(<span class="hljs-string">&#39;pages/news/index.vue&#39;</span>),
        });
      },
    }
  });
</code></pre><p>i18n создаст локализованные маршруты автоматически.</p><h2><code>PageList</code> API</h2>`,21),T="News | OnFrontLib Docs",S=[{property:"og:title",content:"News | OnFrontLib Docs"},{name:"twitter:title",content:"News | OnFrontLib Docs"}],V={__name:"news",setup(F,{expose:a}){return a({frontmatter:{title:"News | OnFrontLib Docs",meta:[{property:"og:title",content:"News | OnFrontLib Docs"},{name:"twitter:title",content:"News | OnFrontLib Docs"}]}}),l({title:"News | OnFrontLib Docs",meta:[{property:"og:title",content:"News | OnFrontLib Docs"},{name:"twitter:title",content:"News | OnFrontLib Docs"}]}),(q,D)=>{const t=d("nuxt-link");return h(),o("div",N,[x,n("p",null,[s("Модуль "),v,s(" содержится в слое "),b,s(". Инструкция по установке слоя находится "),e(t,{to:"/layers/news"},{default:c(()=>[s("здесь.")]),_:1})]),L,e(p,{value:r(k)},null,8,["value"])])}}};export{V as default,S as meta,T as title};
