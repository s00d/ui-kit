import{E as oe}from"./index.CqeEYO5W.js";import{g as C,h as k,o as s,j as F,N as se,u as i,_ as V,c as l,q as p,s as f,l as N,J as ie,b as t,F as I,G as D,a as e,d as L,t as B,C as P,B as le,r as O,w as m,k as M,a3 as ae,v as W,T as de,E as S,O as re,R as ce,A as _e}from"./entry._doioHTx.js";import{_ as pe}from"./index.m8d4Zag1.js";import{u as fe}from"./vue.f36acd1f.BVcziSBg.js";const me=C({__name:"index",props:{name:{},icon:{type:Boolean},img:{type:Boolean},immediate:{type:Boolean},default:{},placeholder:{},width:{},height:{},noSsr:{type:Boolean}},setup(c){const n=c,d=k(()=>({...n,name:`flags/${n.name.toLowerCase()}`,icon:!1}));return(a,_)=>{const r=pe;return s(),F(r,se(i(d),{class:"on-flag"}),null,16)}}}),ue=V(me,[["__scopeId","data-v-2e227377"]]),he={class:"fw-list-item"},ve={key:0,class:"fw-list-item__before"},ge={key:1,class:"fw-list-item__content"},ye={key:2,class:"fw-list-item__after"},J=C({name:"OnFreeWidgetListItem",__name:"list-item",setup(c){return(n,d)=>(s(),l("div",he,[n.$slots.before?(s(),l("div",ve,[p(n.$slots,"before")])):f("",!0),n.$slots.default?(s(),l("div",ge,[p(n.$slots,"default")])):f("",!0),n.$slots.after?(s(),l("div",ye,[p(n.$slots,"after")])):f("",!0)]))}});function Y(c,n="px"){if(!(c==null||c===""))return Number.isNaN(+c)?String(c):`${Number(c)}${n}`}const g=C({name:"OnFreeWidgetSkeleton",__name:"skeleton",props:{animation:{type:Boolean},height:{default:null},width:{default:null}},setup(c){const n=c,d=k(()=>({width:Y(n.width)||"",height:Y(n.height)||""})),a=k(()=>({"fw-skeleton":!0,"--active":n.animation}));return(_,r)=>(s(),l("div",{class:N(i(a)),style:ie(i(d))},null,6))}}),we={class:"fw-proxy-placeholder"},Ce=e("div",{class:"fw-proxy-placeholder__line"},null,-1),$e={class:"fw-proxy-placeholder__row"},be={class:"fw-proxy-placeholder__row"},xe=e("div",{class:"fw-proxy-placeholder__line"},null,-1),ke=e("div",{style:{height:"25px"}},null,-1),Le=C({name:"OnFreeWidgetProxyPlaceholder",__name:"proxy-placeholder",props:{loading:{type:Boolean}},setup(c){return(n,d)=>(s(),l("div",we,[t(g,{width:"254",height:"18",class:"fw-proxy-placeholder__title",animation:n.loading},null,8,["animation"]),(s(),l(I,null,D(2,a=>e("div",{key:"a"+a,class:"fw-proxy-placeholder__row"},[t(g,{width:"160",height:"14",style:{"margin-right":"64px"},animation:n.loading},null,8,["animation"]),t(g,{width:"89",height:"14",animation:n.loading},null,8,["animation"])])),64)),Ce,e("div",$e,[t(g,{width:"160",height:"14",animation:n.loading,style:{"margin-right":"127px"}},null,8,["animation"]),t(g,{width:"89",height:"14",animation:n.loading},null,8,["animation"])]),e("div",be,[t(g,{width:"254",height:"14",style:{"margin-right":"33px"},animation:n.loading},null,8,["animation"]),t(g,{width:"89",height:"14",animation:n.loading},null,8,["animation"])]),xe,(s(),l(I,null,D(2,a=>e("div",{key:"b"+a,class:"fw-proxy-placeholder__row"},[t(g,{width:"160",height:"14",animation:n.loading,style:{"margin-right":"64px"}},null,8,["animation"]),t(g,{width:"89",height:"14",animation:n.loading},null,8,["animation"])])),64)),ke,(s(),l(I,null,D(2,a=>e("div",{key:"c"+a,class:"fw-proxy-placeholder__row"},[t(g,{width:"160",height:"14",animation:n.loading},null,8,["animation"])])),64))]))}}),Ie={class:"fw-sms-item-placeholder"},Be={class:"fw-sms-item-placeholder__row"},De={class:"fw-sms-item-placeholder__row"},Q=C({name:"OnFreeWidgetSmsItemPlaceholder",__name:"sms-item-placeholder",props:{loading:{type:Boolean}},setup(c){return(n,d)=>(s(),l("div",Ie,[e("div",Be,[t(g,{height:"14",width:"125",animation:n.loading},null,8,["animation"]),t(g,{height:"14",width:"89",animation:n.loading},null,8,["animation"])]),e("div",De,[t(g,{height:"14",width:"160",animation:n.loading},null,8,["animation"]),t(g,{height:"14",width:"105",animation:n.loading},null,8,["animation"])])]))}}),Fe={class:"fw-sms-placeholder"},Ve={class:"fw-sms-placeholder__header"},Oe=C({name:"OnFreeWidgetSmsPlaceholder",__name:"sms-placeholder",props:{loading:{type:Boolean}},setup(c){return(n,d)=>{const a=g,_=Q;return s(),l("div",Fe,[e("div",Ve,[t(a,{width:"105",height:"18",animation:n.loading},null,8,["animation"]),t(a,{width:"105",height:"18",animation:n.loading},null,8,["animation"]),t(a,{width:"105",height:"18",animation:n.loading},null,8,["animation"]),t(a,{width:"105",height:"18",animation:n.loading},null,8,["animation"])]),(s(),l(I,null,D(5,r=>t(_,{key:"fw-sms-ph-"+r,loading:n.loading},null,8,["loading"])),64))])}}}),Pe={class:"fw-lv"},Te={class:"fw-lv__label"},Ke={class:"fw-lv__value"},Se={key:0,class:"fw-lv__icon"},Ne={class:"fw-lv__content"},He=C({name:"OnFreeWidgetLabelValue",__name:"label-value",props:{label:{},value:{},copyData:{}},setup(c){const n=c,d=k(()=>n.value??n.copyData??"");return(a,_)=>{const r=P,$=le;return s(),l("div",Pe,[e("div",Te,[p(a.$slots,"label",{},()=>[a.label?(s(),F(r,{key:0,path:a.label},null,8,["path"])):f("",!0)])]),e("div",Ke,[a.$slots.icon?(s(),l("span",Se,[p(a.$slots,"icon")])):f("",!0),e("span",Ne,[p(a.$slots,"default",{},()=>[n.value?(s(),F(r,{key:0,path:i(d)},null,8,["path"])):(s(),l(I,{key:1},[L(B(i(d)),1)],64))])]),a.copyData?(s(),F($,{key:1,text:a.copyData,class:"fw-lv__copy"},null,8,["text"])):f("",!0)])])}}}),Ee={},Me={viewBox:"64 64 896 896","data-icon":"copy",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false",class:""},We=e("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"},null,-1),Ae=[We];function ze(c,n){return s(),l("svg",Me,Ae)}const Ze=V(Ee,[["render",ze]]),Ge={class:"fw-sms"},Ue={class:"fw-sms__header"},Re={class:"fw-sms-sender"},je={key:0,class:"fw-sms-sender__icon"},Ye={class:"fw-sms-sender__text"},qe={class:"fw-sms__date"},Je={class:"fw-sms__body"},Qe={class:"fw-sms__content"},Xe={key:0,class:"fw-sms__btn"},en=C({name:"OnFreeWidgetSmsItem",__name:"sms-item",props:{copyFeedback:{default:""},copyData:{default:void 0},dateString:{default:""},sender:{default:""},text:{default:""}},emits:["copy"],setup(c,{emit:n}){const d=c,a=n,_=O(!1),r=O(null),$=()=>{d.copyData&&(a("copy",d.copyData),_.value=!0,r.value&&clearTimeout(r.value),r.value=setTimeout(()=>{_.value=!1},2e3))},w=()=>{_.value=!1};return(u,b)=>{const x=P;return s(),l("div",Ge,[e("div",Ue,[e("div",Re,[u.$slots.icon?(s(),l("div",je,[p(u.$slots,"icon")])):f("",!0),e("div",Ye,[p(u.$slots,"sender",{},()=>[L(B(u.sender),1)])])]),e("div",qe,[p(u.$slots,"date",{},()=>[L(B(u.dateString),1)])])]),e("div",Je,[e("div",Qe,[p(u.$slots,"default",{},()=>[L(B(u.text),1)])]),u.copyData?(s(),l("div",Xe,[e("span",{class:"fw-sms-copy-btn",tabindex:"-1",onBlur:w,onClick:$},[t(de,{name:"fw-sms-copy"},{default:m(()=>[M(e("div",{class:"fw-sms-copy-tooltip",onClick:b[0]||(b[0]=ae(()=>{},["stop"]))},[u.copyFeedback?(s(),F(x,{key:0,path:u.copyFeedback},null,8,["path"])):f("",!0)],512),[[W,i(_)]])]),_:1}),t(Ze,{class:"fw-sms-copy-btn__icon"}),e("span",null,[p(u.$slots,"btn-text")])],32)])):f("",!0)])])}}}),nn={},tn={width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on=e("path",{d:"M10.8335 5.83334H9.16683V10.8333H10.8335V5.83334ZM10.0002 18.3333C14.6043 18.3333 18.3335 14.6042 18.3335 10C18.3335 5.39584 14.6043 1.66667 10.0002 1.66667C5.396 1.66667 1.66683 5.39584 1.66683 10C1.66683 14.6042 5.396 18.3333 10.0002 18.3333ZM10.0002 3.33334C13.6752 3.33334 16.6668 6.325 16.6668 10C16.6668 13.675 13.6752 16.6667 10.0002 16.6667C6.32516 16.6667 3.3335 13.675 3.3335 10C3.3335 6.325 6.32516 3.33334 10.0002 3.33334ZM10.8335 12.5H9.16683V14.1667H10.8335V12.5Z"},null,-1),sn=[on];function ln(c,n){return s(),l("svg",tn,sn)}const an=V(nn,[["render",ln]]),dn={class:"fw-popover"},rn={class:"fw-popover__content"},cn={class:"fw-popover__icon"},_n=C({name:"OnFreeWidgetPopover",__name:"popover",props:{message:{default:"Please select"}},setup(c){return(n,d)=>{const a=P;return s(),l("div",dn,[e("span",rn,[p(n.$slots,"default",{},()=>[t(a,{path:n.message},null,8,["path"])])]),e("span",cn,[p(n.$slots,"icon",{},()=>[t(an)])])])}}}),pn={},fn={width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},mn=e("path",{d:"M4.32467 9.335L16.2187 0.0450593C16.2498 0.0205909 16.2872 0.00538495 16.3265 0.00118745C16.3658 -0.00301006 16.4055 0.0039712 16.4411 0.0213296C16.4766 0.038688 16.5065 0.0657196 16.5274 0.0993197C16.5483 0.13292 16.5593 0.171726 16.5591 0.211281V2.25079C16.5591 2.38008 16.4984 2.50408 16.3981 2.58324L6.89978 9.99989L16.3981 17.4165C16.501 17.4957 16.5591 17.6197 16.5591 17.749V19.7885C16.5591 19.9653 16.3559 20.0629 16.2187 19.9547L4.32467 10.6648C4.22358 10.5859 4.1418 10.485 4.08555 10.3698C4.0293 10.2546 4.00007 10.1281 4.00007 9.99989C4.00007 9.87168 4.0293 9.74516 4.08555 9.62994C4.1418 9.51473 4.22358 9.41386 4.32467 9.335Z"},null,-1),un=[mn];function hn(c,n){return s(),l("svg",fn,un)}const q=V(pn,[["render",hn]]),vn={},gn={width:"1em",height:"1em",viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},yn=e("path",{d:"M29.3999 5.73344C30.1327 7.0175 29.9796 8.62531 29.0171 9.7475L27.2999 11.7578C26.1843 13.0484 26.1733 14.9625 27.2671 16.275L28.7546 18.0469C29.3452 18.7578 29.3999 19.775 28.8858 20.5516C28.3608 21.3281 27.3764 21.6672 26.4905 21.3719L23.8546 20.5297C23.1764 20.2672 22.3452 20.3328 21.6233 20.6938L20.9671 21.0109C19.9827 21.5141 19.5124 22.6516 19.8624 23.7016C20.0264 24.2156 20.3874 24.6531 20.8577 24.9156L24.6311 27.0813C25.6921 27.6828 26.8952 28 28.0108 28H32.8233C34.2124 28 35.5577 28.5578 36.5421 29.5422L36.9577 29.9578C37.9421 30.9422 38.4999 32.2875 38.4999 33.6766V34.5734C38.4999 36.4656 37.4936 38.2047 35.853 39.1344L34.9671 39.6484C33.3155 40.5891 32.1124 42.175 31.653 44.0234L31.3468 45.2484C30.8983 46.9328 29.5421 48.4312 27.7702 48.9344C26.1296 49.4047 24.4014 48.1797 24.4014 46.4734V42.2078C24.4014 41.0047 23.8218 39.9109 22.6514 39.375C21.678 38.8391 20.9014 37.7453 20.9014 36.5422V32.1781C20.9014 30.2203 19.7093 28.5031 17.7296 27.9672L11.2218 26.0859C9.62707 25.6266 8.24348 24.6203 7.32254 23.2312L4.9502 19.6766C8.35723 10.2419 17.3905 3.5 27.9014 3.5C28.0436 3.5 28.0874 3.5 28.1202 3.5L29.3999 5.73344ZM49.503 16.2531C51.4171 19.7422 52.4999 23.7453 52.4999 28C52.4999 29.3563 52.2921 30.6797 52.1827 31.9812L47.1624 30.3078C46.1124 29.9578 45.2921 29.1375 44.9421 28.0875L43.0389 22.3781C42.4593 20.6281 43.3452 18.7141 45.0624 18.025L49.503 16.2531Z",fill:"#D9D9D9"},null,-1),wn=e("path",{opacity:"0.4",d:"M4.95031 19.6766L7.32266 23.2312C8.24359 24.6203 9.62719 25.6266 11.2219 26.0859L17.7297 27.9672C19.7094 28.5031 20.9016 30.2203 20.9016 32.1781V36.5422C20.9016 37.7453 21.6781 38.8391 22.6516 39.2766C23.8219 39.9109 24.4016 41.0047 24.4016 42.2078V46.4734C24.4016 48.1797 26.1297 49.4047 27.7703 48.9344C29.5422 48.4312 30.8984 46.9328 31.3469 45.2484L31.6531 44.0234C32.1125 42.175 33.3156 40.5891 34.9672 39.6375L35.8531 39.1344C37.4937 38.2047 38.5 36.4656 38.5 34.5734V33.6766C38.5 32.2766 37.9422 30.9422 36.9578 29.9578L36.5422 29.5422C35.5578 28.5578 34.2125 27.9016 32.8234 27.9016H28.0109C26.8953 27.9016 25.6922 27.6828 24.6313 27.0813L20.8578 24.9156C20.3875 24.6531 20.0266 24.2156 19.8625 23.7016C19.5125 22.6516 19.9828 21.5031 20.9672 21.0109L21.6234 20.6938C22.3453 20.3328 23.1766 20.2672 23.8547 20.5297L26.4906 21.3719C27.3766 21.6672 28.3609 21.3281 28.8859 20.5516C29.4 19.775 29.3453 18.7578 28.7547 18.0469L27.2672 16.275C26.1734 14.9625 26.1844 13.0484 27.3 11.7578L29.0172 9.7475C29.9797 8.62422 30.1328 7.0175 29.4 5.73344L28.1203 3.5C37.3406 3.54594 45.3578 8.68547 49.5031 16.2531L45.0625 18.025C43.3453 18.7141 42.4594 20.6172 43.0391 22.3781L44.9422 28.0875C45.2922 29.1375 46.1125 29.9578 47.1625 30.3078L52.1828 31.9812C50.2797 43.6187 40.1734 52.4016 28 52.4016C14.4703 52.4016 3.5 41.5297 3.5 27.9016C3.5 25.0797 4.01187 22.2687 4.95031 19.6766Z",fill:"#D9D9D9"},null,-1),Cn=[yn,wn];function $n(c,n){return s(),l("svg",gn,Cn)}const bn=V(vn,[["render",$n]]),xn={},kn={width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Ln=e("path",{d:"M15.7126 14.9131L12.0564 11.2569H12.017C13.144 9.9281 13.7135 8.21503 13.6064 6.47602C13.4993 4.737 12.7239 3.10675 11.4425 1.92628C10.161 0.74581 8.47272 0.106575 6.73078 0.142289C4.98883 0.178003 3.32817 0.8859 2.09617 2.1179C0.864172 3.3499 0.156275 5.01056 0.12056 6.75251C0.0848463 8.49445 0.724082 10.1827 1.90455 11.4642C3.08502 12.7457 4.71527 13.521 6.45429 13.6281C8.1933 13.7352 9.90637 13.1657 11.2351 12.0387C11.2351 12.0387 11.2351 12.0669 11.2351 12.0781L14.8914 15.7344C14.9437 15.7871 15.0059 15.8289 15.0744 15.8575C15.143 15.8861 15.2165 15.9008 15.2908 15.9008C15.365 15.9008 15.4385 15.8861 15.5071 15.8575C15.5756 15.8289 15.6378 15.7871 15.6901 15.7344C15.7478 15.6833 15.7944 15.6209 15.827 15.5512C15.8595 15.4814 15.8774 15.4056 15.8795 15.3286C15.8817 15.2516 15.8679 15.175 15.8392 15.1035C15.8105 15.0321 15.7674 14.9673 15.7126 14.9131ZM6.87576 12.5C5.76324 12.5 4.67571 12.1701 3.75068 11.552C2.82565 10.9339 2.10468 10.0554 1.67894 9.02759C1.2532 7.99975 1.1418 6.86875 1.35885 5.77761C1.57589 4.68647 2.11162 3.68419 2.89829 2.89752C3.68496 2.11085 4.68724 1.57512 5.77838 1.35807C6.86952 1.14103 8.00052 1.25243 9.02836 1.67817C10.0562 2.10391 10.9347 2.82488 11.5528 3.74991C12.1709 4.67494 12.5008 5.76247 12.5008 6.87499C12.5008 7.61368 12.3553 8.34513 12.0726 9.02759C11.7899 9.71004 11.3756 10.3301 10.8532 10.8525C10.3309 11.3748 9.71081 11.7891 9.02836 12.0718C8.3459 12.3545 7.61445 12.5 6.87576 12.5Z"},null,-1),In=[Ln];function Bn(c,n){return s(),l("svg",kn,In)}const Dn=V(xn,[["render",Bn]]),Fn={class:"f-widget-top"},Vn={class:"f-widget-search"},On={class:"f-widget-top-nav"},Pn={key:0,class:"f-widget-top-nav__content f-widget-top-nav__content--items"},Tn={key:1,class:"f-widget-top-nav__content f-widget-top-nav__content--info"},Kn={class:"f-widget__row"},Sn={"data-fw-col":"",class:"f-widget__col f-widget__col--countries"},Nn={class:"f-widget-scroll"},Hn={key:0,class:"f-widget-list"},En=["onClick"],Mn={class:"fw-no-results"},Wn={class:"fw-no-results__icon"},An={class:"fw-no-results__text"},zn={"data-fw-col":"",class:"f-widget__col f-widget__col--items"},Zn={key:0,class:"f-widget-items-header"},Gn={class:"f-widget-scroll"},Un={key:0,class:"f-widget-list"},Rn=["onClick"],jn={key:1,class:"f-widget-list"},Yn={"data-fw-col":"",class:"f-widget__col f-widget__col--info"},qn={key:0,class:"f-widget__col-header"},Jn={class:"f-widget-scroll"},Qn={key:0,class:"f-widget-info"},Xn={key:1,class:"f-widget-info"},et={key:1,class:"f-widget__col-footer"},nt={"data-fw-col":"",class:"f-widget__col f-widget__col--empty"},tt=C({name:"OnFreeWidget",__name:"index",props:{search:{default:""},searchPlaceholder:{default:""},noResultsText:{default:"No results"},mode:{default:"countries"},countries:{},countryKeyProp:{default:"id"},countryTextProp:{default:"text"},countryFilterFn:{type:Function,default:(c,n,d)=>n.filter(a=>a==null?void 0:a[d].toString().toLowerCase().includes(c.toLowerCase()))},countryDisabledProp:{default:"disabled"},selectedCountryKey:{default:null},items:{},itemKeyProp:{default:"id"},itemTextProp:{default:"text"},itemDisabledProp:{default:"disabled"},selectedItemKey:{default:null},loading:{type:Boolean},itemsLoading:{type:Boolean},empty:{type:Boolean},popoverCountry:{default:void 0},popoverItem:{default:void 0}},emits:["update:selectedCountryKey","update:selectedItemKey","update:mode","update:search","transition-end","navigation"],setup(c,{emit:n}){const d=c,a=n,_=S(d,"selectedCountryKey",a,{passive:!0}),r=S(d,"selectedItemKey",a,{passive:!0}),$=S(d,"mode",a,{passive:!0}),w=S(d,"search",a,{passive:!0}),u=k(()=>w.value?d.countryFilterFn(w.value,d.countries,d.countryTextProp):d.countries),b=k(()=>_.value&&d.countries.find(o=>o[d.countryKeyProp]===_.value)||null),x=k(()=>d.empty?!0:!b.value||d.loading?!1:!d.items.length),y=k(()=>r.value&&d.items.find(o=>o[d.itemKeyProp]===r.value)||null),A=k(()=>({[`f-widget--mode-${$.value}`]:!0,"f-widget--empty":x.value})),z=_e("on-free-widget"),H=o=>{o.target.hasAttribute("data-fw-col")&&z.emit("transition-end")},v=o=>{$.value=o},T=async o=>{r.value=null,_.value=o,v("items"),K()},Z=async o=>{r.value=o,v("info"),K()},X=async()=>{v("countries"),r.value=null,_.value=null,K()},ee=async()=>{v("items"),r.value=null,K()},K=()=>{a("navigation",{proxyUrl:r.value,countryCode:_.value})};return(o,G)=>{const ne=ce,E=P,U=J,R=g,j=_n;return s(),l("div",{class:N(["f-widget",i(A)]),onTransitionend:H},[e("div",Fn,[e("div",Vn,[t(ne,{modelValue:i(w),"onUpdate:modelValue":G[0]||(G[0]=h=>re(w)?w.value=h:null),placeholder:o.searchPlaceholder,"allow-clear":""},{prefix:m(()=>[t(Dn)]),_:1},8,["modelValue","placeholder"])]),e("div",On,[e("button",{class:"f-widget-back-btn f-widget-back-btn--items",onClick:X},[t(q)]),e("button",{class:"f-widget-back-btn f-widget-back-btn--info",onClick:ee},[t(q)]),i(_)?(s(),l("div",Pn,[p(o.$slots,"items-nav",{selectedCountryKey:i(_),selectedCountry:i(b)})])):f("",!0),i(r)?(s(),l("div",Tn,[p(o.$slots,"info-nav",{selectedCountryKey:i(_),selectedItemKey:i(r),selectedCountry:i(b),selectedItem:i(y)})])):f("",!0)])]),e("div",Kn,[e("div",Sn,[e("div",Nn,[i(u).length?(s(),l("ul",Hn,[(s(!0),l(I,null,D(i(u),h=>(s(),l("li",{key:h[o.countryKeyProp],class:N(["f-widget-list__item",{"f-widget-list__item--is-selected":h[o.countryKeyProp]===i(_),"f-widget-list__item--is-disabled":h[o.countryDisabledProp]}]),onClick:te=>T(h[o.countryKeyProp])},[p(o.$slots,"country",{country:h,isSelected:i(_)===h[o.countryKeyProp]},()=>[t(U,null,{default:m(()=>[t(E,{path:h[o.countryTextProp]},null,8,["path"])]),_:2},1024)])],10,En))),128))])):f("",!0),i(u).length?f("",!0):p(o.$slots,"no-results",{key:1,search:i(w)},()=>[e("div",Mn,[e("div",Wn,[t(bn)]),e("div",An,[t(E,{path:o.noResultsText},null,8,["path"])])])])])]),e("div",zn,[i(x)?f("",!0):(s(),l(I,{key:0},[o.$slots["items-header"]?(s(),l("div",Zn,[p(o.$slots,"items-header")])):f("",!0),e("div",Gn,[i(_)&&o.items.length&&!o.itemsLoading?(s(),l("ul",Un,[(s(!0),l(I,null,D(o.items,h=>(s(),l("li",{key:h[o.itemKeyProp],class:N(["f-widget-list__item",{"f-widget-list__item--is-selected":h[o.itemKeyProp]===i(r),"f-widget-list__item--is-disabled":h[o.itemDisabledProp]}]),onClick:te=>Z(h[o.itemKeyProp])},[p(o.$slots,"item",{item:h,isSelected:i(r)===h[o.itemKeyProp]},()=>[t(U,null,{default:m(()=>[t(E,{value:h[o.itemTextProp]},null,8,["value"])]),_:2},1024)])],10,Rn))),128))])):f("",!0),!i(_)||!o.items.length||o.itemsLoading?(s(),l("ul",jn,[(s(),l(I,null,D(11,h=>e("li",{key:`fw-placeholder-${h}`,class:"f-widget-list__item f-widget-list__item--placeholder"},[t(R,{height:"14",animation:o.loading},null,8,["animation"]),t(R,{height:"10",animation:o.loading},null,8,["animation"])])),64))])):f("",!0)])],64))]),e("div",Yn,[o.$slots["info-header"]?(s(),l("div",qn,[p(o.$slots,"info-header")])):f("",!0),e("div",Jn,[o.$slots.default&&i(r)&&!o.loading?(s(),l("div",Qn,[p(o.$slots,"default",{selectedCountryKey:i(_),selectedItemKey:i(r),selectedCountry:i(b),selectedItem:i(y)})])):f("",!0),o.$slots["info-placeholder"]&&(!i(r)||o.loading)?(s(),l("div",Xn,[p(o.$slots,"info-placeholder")])):f("",!0)]),o.$slots["info-footer"]?(s(),l("div",et,[p(o.$slots,"info-footer")])):f("",!0)]),e("div",nt,[i(x)?p(o.$slots,"empty",{key:0,selectedCountry:i(b),selectedCountryKey:i(_)}):f("",!0)])]),M(t(j,{message:o.popoverCountry,class:"f-widget__popover f-widget__popover--country"},{default:m(()=>[p(o.$slots,"popover-country")]),_:3},8,["message"]),[[W,!i(_)&&!i(x)&&!o.loading]]),M(t(j,{message:o.popoverItem,class:"f-widget__popover f-widget__popover--item"},{default:m(()=>[p(o.$slots,"popover-item")]),_:3},8,["message"]),[[W,i(_)&&!i(r)&&!i(x)&&!o.loading]])],34)}}}),ot=e("span",null,"Онлайн-прокси",-1),st=e("span",null,"Скорость",-1),it={key:0,class:"proxy-info"},lt=e("div",{class:"proxy-info__header"},[e("div",{class:"proxy-info__title"}," Данные для подключения "),e("div",{class:"proxy-info__update-date"}," Обновлено 12.12.2022 16:21:13 ")],-1),at={class:"proxy-info__row"},dt={class:"proxy-info__col"},rt={class:"proxy-info__col"},ct=e("hr",{class:"proxy-info__hr"},null,-1),_t={class:"proxy-info__row proxy-info__row--wrap-sm"},pt={class:"proxy-info__col"},ft={class:"proxy-info__col"},mt=e("hr",{class:"proxy-info__hr"},null,-1),ut={class:"proxy-info__row"},ht={class:"proxy-info__col"},vt={class:"proxy-info__col"},gt={class:"proxy-info__row proxy-info__row--wrap-sm"},yt={class:"proxy-info__col"},wt={class:"proxy-info__col"},Ct={class:"proxy-info__row"},$t={class:"proxy-info__col"},bt={class:"proxy-info__col"},xt={class:"proxy-info__row proxy-info__row--wrap-sm"},kt={class:"proxy-info__col"},Lt={class:"proxy-info__col proxy-info__col--sm-only"};const It=C({__name:"basic",setup(c){const n=O(!1),d=O([{code:"ru",info:3},{code:"us",info:15,disabled:!0},{code:"no",info:2,disabled:!0},{code:"AD",info:42},{code:"AG",info:46},{code:"AT",info:74},{code:"BA",info:32},{code:"BG",info:56},{code:"CA",info:84},{code:"CN",info:73},{code:"HR",info:26},{code:"CY",info:1},{code:"DO",info:63},{code:"DE",info:23},{code:"GT",info:65},{code:"IE",info:4}]),a=O([{id:1,content:"Item 1",info:3},{id:2,content:"Item 2",info:4},{id:3,content:"Item 3",info:7},{id:4,content:"Item 4",info:17,disabled:!0}]);return(_,r)=>{const $=P,w=ue,u=J,b=Le,x=Oe,y=He,A=en,z=Q,H=tt;return s(),F(H,{countries:i(d),"country-key-prop":"code","country-text-prop":"code","no-results-text":"cabinet.common.days_plural","search-placeholder":"foo.bar","popover-country":"foo.bar","popover-item":"foo.bar",items:i(a),loading:i(n),"onUpdate:selectedItemKey2":r[0]||(r[0]=v=>n.value=!0)},{country:m(({country:v,isSelected:T})=>[t(u,null,{before:m(()=>[t(w,{name:v.code.toLowerCase()},null,8,["name"])]),after:m(()=>[L(B(v.info),1)]),default:m(()=>[t($,{path:`countries.${v.code.toUpperCase()}`},null,8,["path"])]),_:2},1024)]),item:m(({item:v,isSelected:T})=>[t(u,null,{after:m(()=>[L(B(v.info),1)]),default:m(()=>[L(B(v.content)+" ",1)]),_:2},1024)]),"items-nav":m(({selectedCountryKey:v})=>[t(w,{name:`${v.toString().toLowerCase()}`},null,8,["name"]),t($,{path:`countries.${v.toString().toUpperCase()}`},null,8,["path"])]),"info-nav":m(({selectedItemKey:v})=>[L(B(v),1)]),"items-header":m(()=>[ot,st]),empty:m(()=>[L(" EMPTY ")]),"info-placeholder":m(()=>[f("",!0),t(x,{loading:i(n)},null,8,["loading"])]),default:m(({selectedItem:v,selectedCountry:T})=>[(s(),l("div",it,[lt,e("div",at,[e("div",dt,[t(y,{label:"IP адрес","copy-data":"190.109.72.244"})]),e("div",rt,[t(y,{label:"Порт","copy-data":"33633"})])]),ct,e("div",_t,[e("div",pt,[t(y,{label:"Логин","copy-data":"9ids`fmnfdem,dfsduf;df8jsd"})]),e("div",ft,[t(y,{label:"Пароль","copy-data":"5432DDkdf21"})])]),mt,e("div",ut,[e("div",ht,[t(y,{label:"Местоположение",value:"Россия, МоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМосква"},{icon:m(()=>[t(w,{name:"ru"})]),_:1})]),e("div",vt,[t(y,{label:"Протокол",value:"HTTPS"})])]),e("div",gt,[e("div",yt,[t(y,{label:"Организация",value:"AS24940 Hetzner Online GmbH"})]),e("div",wt,[t(y,{label:"Таймзона",value:"Europe/Helsinki"})])]),e("div",Ct,[e("div",$t,[t(y,{label:"Домен",value:"hetzner.de"})]),e("div",bt,[t(y,{label:"Роут",value:"95.217.0.0/16"})])]),e("div",xt,[e("div",kt,[t(y,{label:"Тип",value:"Hosting"})]),e("div",Lt,[t(y,{label:"Обновлено",value:"12.12.2022 16:21:13"})])])])),f("",!0),f("",!0)]),_:1},8,["countries","items","loading"])}}}),Bt=`<script setup lang="ts">
const loading = ref(false);
const countries = ref([
  {
    code: 'ru',
    info: 3,
  },
  {
    code: 'us',
    info: 15,
    disabled: true,
  },
  {
    code: 'no',
    info: 2,
    disabled: true,
  },
  {
    code: 'AD',
    info: 42,
  },
  {
    code: 'AG',
    info: 46,
  },
  {
    code: 'AT',
    info: 74,
  },
  {
    code: 'BA',
    info: 32,
  },
  {
    code: 'BG',
    info: 56,
  },
  {
    code: 'CA',
    info: 84,
  },
  {
    code: 'CN',
    info: 73,
  },
  {
    code: 'HR',
    info: 26,
  },
  {
    code: 'CY',
    info: 1,
  },
  {
    code: 'DO',
    info: 63,
  },
  {
    code: 'DE',
    info: 23,
  },
  {
    code: 'GT',
    info: 65,
  },
  {
    code: 'IE',
    info: 4,
  },
]);

const items = ref([
  {
    id: 1,
    content: 'Item 1',
    info: 3,
  },
  {
    id: 2,
    content: 'Item 2',
    info: 4,
  },
  {
    id: 3,
    content: 'Item 3',
    info: 7,
  },
  {
    id: 4,
    content: 'Item 4',
    info: 17,
    disabled: true,
  },
]);
<\/script>

<template>
  <on-free-widget
    :countries="countries"
    country-key-prop="code"
    country-text-prop="code"
    no-results-text="cabinet.common.days_plural"
    search-placeholder="foo.bar"
    popover-country="foo.bar"
    popover-item="foo.bar"
    :items="items"
    :loading="loading"
    @update:selected-item-key2="loading = true"
  >
    <template #country="{country, isSelected}">
      <on-free-widget-list-item>
        <on-translate :path="\`countries.\${country.code.toUpperCase()}\`" />
        <template #before>
          <on-flag
            :name="country.code.toLowerCase()"
          />
        </template>
        <template #after>
          {{ country.info }}
        </template>
      </on-free-widget-list-item>
    </template>
    <template #item="{item, isSelected}">
      <on-free-widget-list-item>
        {{ item.content }}
        <template #after>
          {{ item.info }}
        </template>
      </on-free-widget-list-item>
    </template>
    <template #items-nav="{ selectedCountryKey }">
      <on-flag :name="\`\${selectedCountryKey.toString().toLowerCase()}\`" />
      <on-translate
        :path="\`countries.\${selectedCountryKey.toString().toUpperCase()}\`"
      />
    </template>
    <template #info-nav="{ selectedItemKey }">
      {{ selectedItemKey }}
    </template>
    <template #items-header>
      <span>Онлайн-прокси</span>
      <span>Скорость</span>
    </template>
    <template #empty>
      EMPTY
    </template>
    <template #info-placeholder>
      <on-free-widget-proxy-placeholder
        v-if="false"
        :loading="loading"
      />
      <on-free-widget-sms-placeholder :loading="loading" />
    </template>
    <template #default="{selectedItem, selectedCountry}">
      <div
        v-if="true"
        class="proxy-info"
      >
        <div class="proxy-info__header">
          <div class="proxy-info__title">
            Данные для подключения
          </div>
          <div class="proxy-info__update-date">
            Обновлено 12.12.2022 16:21:13
          </div>
        </div>
        <div class="proxy-info__row">
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="IP адрес"
              copy-data="190.109.72.244"
            />
          </div>
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Порт"
              copy-data="33633"
            />
          </div>
        </div>
        <hr class="proxy-info__hr">
        <div class="proxy-info__row proxy-info__row--wrap-sm">
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Логин"
              copy-data="9ids\`fmnfdem,dfsduf;df8jsd"
            />
          </div>
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Пароль"
              copy-data="5432DDkdf21"
            />
          </div>
        </div>
        <hr class="proxy-info__hr">
        <div class="proxy-info__row">
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Местоположение"
              value="Россия, МоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМоскваМосква"
            >
              <template #icon>
                <on-flag name="ru" />
              </template>
            </on-free-widget-label-value>
          </div>
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Протокол"
              value="HTTPS"
            />
          </div>
        </div>
        <div class="proxy-info__row proxy-info__row--wrap-sm">
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Организация"
              value="AS24940 Hetzner Online GmbH"
            />
          </div>
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Таймзона"
              value="Europe/Helsinki"
            />
          </div>
        </div>
        <div class="proxy-info__row">
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Домен"
              value="hetzner.de"
            />
          </div>
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Роут"
              value="95.217.0.0/16"
            />
          </div>
        </div>
        <div class="proxy-info__row proxy-info__row--wrap-sm">
          <div class="proxy-info__col">
            <on-free-widget-label-value
              label="Тип"
              value="Hosting"
            />
          </div>
          <div class="proxy-info__col proxy-info__col--sm-only">
            <on-free-widget-label-value
              label="Обновлено"
              value="12.12.2022 16:21:13"
            />
          </div>
        </div>
      </div>
      <div
        v-if="false && selectedItem.disabled"
        class="sms-info"
      >
        Этот номер - архивный
      </div>
      <div
        v-if="false && !selectedItem.disabled"
        class="sms-info"
      >
        <on-free-widget-sms-item>
          <template #sender>
            +7 992 210 48 90
          </template>
          <template #btn-text>
            Код из СМС
          </template>
          <template #date>
            15 секунд назад
          </template>
          СМС без кода
        </on-free-widget-sms-item>
        <on-free-widget-sms-item copy-data="1111">
          <template #sender>
            +7 992 210 48 90
          </template>
          <template #btn-text>
            Код из СМС
          </template>
          <template #date>
            15 секунд назад
          </template>
          Ваш код ****** для подтверждения регистрации
        </on-free-widget-sms-item>
        <on-free-widget-sms-item-placeholder
          v-for="i in 15"
          :key="i"
        />
      </div>
    </template>
  </on-free-widget>
</template>

<style lang="scss">
@use "@onfl/components/on-free-widget/variables" as *;

.wf-demo {
  margin: 0 auto;
}

.proxy-info {
  width: 100%;
  overflow: hidden;
  padding: 12px 20px;
  @media (min-width: $fw-bp-tablet) {
    padding: 12px 38px 0 41px;
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    height: 48px;
  }
  &__title {
    flex: 1 1 auto;
    font-weight: 500;
    font-size: 18px;
    line-height: normal;
    color: #000000;
  }
  &__update-date {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    display: none;
    @media (min-width: $fw-bp-tablet) {
      display: inline-flex;
    }
  }
  &__col {
    width: calc(100% / 2 - 20px);
    flex: 1 1 auto;
    margin-left: 10px;
    margin-right: 10px;
    &:last-child {
      width: 136px;
      flex: 0 0 auto;
    }
    @media (min-width: $fw-bp-tablet) {
      &:last-child {
        width: calc(100% / 2 - 20px);
        flex: 1 1 auto;
      }
      &--sm-only {
        display: none;
      }
    }
  }
  &__row {
    display: flex;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 24px;
    &--wrap-sm {
      flex-wrap: wrap;
      .proxy-info__col {
        width: calc(100% - 20px);
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      @media (min-width: $fw-bp-tablet) {
        flex-wrap: nowrap;
        .proxy-info__col {
          width: calc(100% / 2 - 20px);
          margin: 0 10px;
        }
      }
    }
  }
  &__hr {
    border: none;
    border-top: 1px solid #D9D9D9;
    margin: 24px 0 20px;
  }
}
</style>
`,Dt={class:"markdown-body"},Ft=e("h1",null,"OnFreeWidget",-1),Vt=e("h2",null,"Примеры использования",-1),St="OnFreeWidget | OnFrontLib Docs",Nt=[{property:"og:title",content:"OnFreeWidget | OnFrontLib Docs"},{name:"twitter:title",content:"OnFreeWidget | OnFrontLib Docs"}],Ht={__name:"on-free-widget",setup(c,{expose:n}){return n({frontmatter:{title:"OnFreeWidget | OnFrontLib Docs",meta:[{property:"og:title",content:"OnFreeWidget | OnFrontLib Docs"},{name:"twitter:title",content:"OnFreeWidget | OnFrontLib Docs"}]}}),fe({title:"OnFreeWidget | OnFrontLib Docs",meta:[{property:"og:title",content:"OnFreeWidget | OnFrontLib Docs"},{name:"twitter:title",content:"OnFreeWidget | OnFrontLib Docs"}]}),(_,r)=>(s(),l("div",Dt,[Ft,Vt,t(oe,{code:i(Bt)},{default:m(()=>[t(It)]),_:1},8,["code"])]))}};export{Ht as default,Nt as meta,St as title};
