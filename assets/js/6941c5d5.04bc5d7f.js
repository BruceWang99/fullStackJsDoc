"use strict";(self.webpackChunkfull_stack_js_doc=self.webpackChunkfull_stack_js_doc||[]).push([[9919],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),m=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return l.createElement(u.Provider,{value:t},e.children)},N="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),N=m(a),c=r,s=N["".concat(u,".").concat(c)]||N[c]||o[c]||n;return a?l.createElement(s,p(p({ref:t},k),{},{components:a})):l.createElement(s,p({ref:t},k))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[N]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<n;m++)p[m]=a[m];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>o,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var l=a(7462),r=(a(7294),a(3905));const n={},p=void 0,i={unversionedId:"Vue/Vue3",id:"Vue/Vue3",title:"Vue3",description:"Vue3",source:"@site/docs/Vue/Vue3.md",sourceDirName:"Vue",slug:"/Vue/Vue3",permalink:"/fullStackJsDoc/docs/Vue/Vue3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Vue/Vue3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/fullStackJsDoc/docs/category/vue"},next:{title:"Vue\u57fa\u7840",permalink:"/fullStackJsDoc/docs/Vue/Vue\u57fa\u7840"}},u={},m=[{value:"Vue3",id:"vue3",level:2},{value:"Vue3.0\u6709\u4ec0\u4e48\u66f4\u65b0",id:"vue30\u6709\u4ec0\u4e48\u66f4\u65b0",level:3},{value:"defineProperty\u548cproxy\u7684\u533a\u522b",id:"defineproperty\u548cproxy\u7684\u533a\u522b",level:3},{value:"\u8bf4\u4e0bVue3 Composition API",id:"\u8bf4\u4e0bvue3-composition-api",level:3},{value:"Composition API \u4e0e React Hook\u7684\u533a\u522b",id:"composition-api-\u4e0e-react-hook\u7684\u533a\u522b",level:3},{value:"reactivity \u5b9e\u73b0\u539f\u7406",id:"reactivity-\u5b9e\u73b0\u539f\u7406",level:3},{value:"Vue3\u521d\u59cb\u5316\u7684\u6d41\u7a0b",id:"vue3\u521d\u59cb\u5316\u7684\u6d41\u7a0b",level:3},{value:"vue3 \u7f16\u8bd1\u4f18\u5316",id:"vue3-\u7f16\u8bd1\u4f18\u5316",level:3},{value:"Vue 3.0 \u6027\u80fd\u63d0\u5347\u4e3b\u8981\u662f\u901a\u8fc7\u54ea\u51e0\u65b9\u9762\u4f53\u73b0\u7684\uff1f",id:"vue-30-\u6027\u80fd\u63d0\u5347\u4e3b\u8981\u662f\u901a\u8fc7\u54ea\u51e0\u65b9\u9762\u4f53\u73b0\u7684",level:3}],k={toc:m},N="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue3"},"Vue3"),(0,r.kt)("h3",{id:"vue30\u6709\u4ec0\u4e48\u66f4\u65b0"},"Vue3.0\u6709\u4ec0\u4e48\u66f4\u65b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"composition api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"teleport"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u628adom\u4f20\u9001\u5230\u6307\u5b9a\u7684\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"UI \u548c\u76f8\u5173\u884c\u4e3a\u5c01\u88c5\u5230\u7ec4\u4ef6\u4e2d\u7684\u601d\u60f3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7247\u6bb5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6709\u591a\u4e2a\u6839\u8282\u70b9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668(createRenderer API)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u505a\u8de8\u5e73\u53f0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<style>")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"v-bind"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"::v-global(.foo) {}")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40\u6837\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"::v-slotted(.foo) {}")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d2\u69fd\u6837\u5f0f"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5168\u5c40\u548c\u5185\u90e8 API \u5df2\u7ecf\u88ab\u91cd\u6784\u4e3a\u652f\u6301 tree-shake"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u7528\u5230\u7684\u4ee3\u7801\u4e0d\u88ab\u6253\u5305"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"emits"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"props \u9009\u9879\u7c7b\u4f3c, \u4e8b\u4ef6\u9700\u8981\u58f0\u660e")))),(0,r.kt)("h3",{id:"defineproperty\u548cproxy\u7684\u533a\u522b"},"defineProperty\u548cproxy\u7684\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u76d1\u542c\u4e3b\u4f53"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"defineProperty\u9488\u5bf9\u7684\u662f\u67d0\u4e2a\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"proxy \u662ftartget\u7684\u6240\u6709\u5c5e\u6027"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u76d1\u542c\u6548\u679c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"defineProperty\u5bf9\u8c61\u7684\u8d4b\u503c\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u4e0d\u80fd\u76d1\u542c"),(0,r.kt)("li",{parentName:"ul"},"defineProperty\u6570\u7ec4\u4e0b\u6807\u7684\u8d4b\u503c\u3001\u6570\u7ec4\u957f\u5ea6\u7684\u53d8\u5316\u4e0d\u80fd\u76d1\u542c"),(0,r.kt)("li",{parentName:"ul"},"proxy\u8fd8\u652f\u6301\u76d1\u542cMap\u3001Set\u5176\u4ed6\u6570\u636e\u7c7b\u578b")))),(0,r.kt)("h3",{id:"\u8bf4\u4e0bvue3-composition-api"},"\u8bf4\u4e0bVue3 Composition API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u52a8\u673a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u4e4b\u95f4\u590d\u7528\u72b6\u6001\u903b\u8f91\u5f88\u96be"),(0,r.kt)("li",{parentName:"ul"},"\u590d\u6742\u7ec4\u4ef6\u53d8\u5f97\u96be\u4ee5\u7406\u89e3"),(0,r.kt)("li",{parentName:"ul"},"minix \u4e0e\u7ec4\u4ef6\u4e4b\u95f4\u5b58\u5728\u9690\u5f0f\u4f9d\u8d56\uff0c\u53ef\u80fd\u4ea7\u751f\u51b2\u7a81\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u9636\u7ec4\u4ef6 \u591a\u5c42\u5305\u88f9\u5d4c\u5957\u7ec4\u4ef6\uff0c\u589e\u52a0\u4e86\u590d\u6742\u5ea6\u548c\u7406\u89e3\u6210\u672c"),(0,r.kt)("li",{parentName:"ul"},"Render Props \u4f7f\u7528\u7e41\u7410\uff0c\u4e0d\u597d\u7ef4\u62a4, \u4ee3\u7801\u4f53\u79ef\u8fc7\u5927\uff0c\u540c\u6837\u5bb9\u6613\u5d4c\u5957\u8fc7\u6df1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f18\u70b9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f8\u540c\u903b\u8f91\u4ee3\u7801\u7684\u590d\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c0f\u4e86\u4ee3\u7801\u4f53\u79ef"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709 this \u7684\u70e6\u607c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"setup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u7ec4\u4ef6\u88ab\u521b\u5efa\u4e4b\u524d\uff0cprops \u88ab\u89e3\u6790\u4e4b\u540e\u6267\u884c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u665a\u4e8e beforeCreate \u94a9\u5b50\uff0c\u65e9\u4e8e created \u94a9\u5b50\u88ab\u8c03\u7528"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5165\u53c2: props\u3001context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\u63a8\u65ad"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"defineComponent"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u751f\u547d\u5468\u671f\u94a9\u5b50"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onX\u51fd\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"onMounted onUpdated onUnmounted"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"provide \u548c inject \u542f\u7528\u4f9d\u8d56\u6ce8\u5165")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"getCurrentInstance \u652f\u6301\u8bbf\u95ee\u5185\u90e8\u7ec4\u4ef6\u5b9e\u4f8b\u3002"))),(0,r.kt)("h3",{id:"composition-api-\u4e0e-react-hook\u7684\u533a\u522b"},"Composition API \u4e0e React Hook\u7684\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"React Hooks\u53ea\u80fd\u7528\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5728\u51fd\u6570\u6700\u5916\u5c42\u8c03\u7528 Hook\u3002\u4e0d\u8981\u5728\u5faa\u73af\u3001\u6761\u4ef6\u5224\u65ad\u6216\u8005\u5b50\u51fd\u6570\u4e2d\u8c03\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"Composition \u56f4\u7ed5\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\u9009\u9879 setup \u800c\u521b\u5efa"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u539f\u7406"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"React Hook \u5e95\u5c42\u662f\u57fa\u4e8e\u94fe\u8868\u5b9e\u73b0\uff0c\u8c03\u7528\u7684\u6761\u4ef6\u662f\u6bcf\u6b21\u7ec4\u4ef6\u88ab render \u7684\u65f6\u5019\u90fd\u4f1a\u987a\u5e8f\u6267\u884c\u6240\u6709\u7684 Hooks"),(0,r.kt)("li",{parentName:"ul"},"Composition \u57fa\u4e8eproxy\u7684\u54cd\u5e94\u6570\u636e\u7ed1\u5b9a"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee3\u7801\u6267\u884c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"React Hooks \u4f1a\u5728\u7ec4\u4ef6\u6bcf\u6b21\u6e32\u67d3\u65f6\u5019\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},"setup() \u53ea\u5728\u7ec4\u4ef6\u521b\u5efa\u65f6\u8fd0\u884c\u4e00\u6b21"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u58f0\u660e\u72b6\u6001"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"React Hooks \u7684useState"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5411\u8c03\u7528\u4e2d\u4f20\u5165\u4e00\u4e2a\u521d\u59cb\u503c\u4f5c\u4e3a\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u521d\u59cb\u503c\u7684\u8ba1\u7b97\u4ee3\u4ef7\u6bd4\u8f83\u6602\u8d35\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5176\u8868\u8fbe\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u5c31\u53ea\u4f1a\u5728\u521d\u6b21\u6e32\u67d3\u65f6\u624d\u4f1a\u88ab\u6267\u884c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vue\u7684 ref \u548c reactive"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ref() \u8fd4\u56de\u4e00\u4e2a\u53cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u5176\u5185\u90e8\u503c\u53ef\u901a\u8fc7\u5176 value \u5c5e\u6027\u88ab\u8bbf\u95ee\u5230, \u53ef\u4ee5\u5c06\u5176\u7528\u4e8e\u57fa\u672c\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"reactive \u53ea\u5c06\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u5176\u8f93\u5165\u5e76\u8fd4\u56de\u4e00\u4e2a\u5bf9\u5176\u7684\u54cd\u5e94\u5f0f\u5bf9\u8c61"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8ddf\u8e2a\u4f9d\u8d56(\u526f\u4f5c\u7528)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"react"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"useEffect"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u5728\u6bcf\u6b21\u6e32\u67d3\u4e4b\u540e\u8fd0\u884c\u67d0\u4e9b\u526f\u4f5c\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u6b21\u6267\u884c\u56de\u8c03\u4e4b\u524d\u6216\u5f53\u7ec4\u4ef6\u5378\u8f7d\u65f6\u8fd0\u884c\u4e00\u4e9b\u6e05\u7406\u5de5\u4f5c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"useMemo"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u67d0\u4e2a\u4f9d\u8d56\u9879\u6539\u53d8\u65f6\u624d\u91cd\u65b0\u8ba1\u7b97 memoized \u503c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"useCallback"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u67d0\u4e2a\u4f9d\u8d56\u9879\u6539\u53d8\u65f6, \u8be5\u56de\u8c03\u51fd\u6570\u624d\u4f1a\u66f4\u65b0"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"vue"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"watch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4fa6\u542c\u7279\u5b9a\u7684\u6570\u636e\u6e90\uff0c\u5e76\u5728\u5355\u72ec\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u6267\u884c\u526f\u4f5c\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u60f0\u6027\u8c03\u7528-\u56de\u8c03\u4ec5\u5728\u4fa6\u542c\u6e90\u53d1\u751f\u53d8\u5316\u65f6\u88ab\u8c03\u7528"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"watchEffect"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7acb\u5373\u6267\u884c\u4f20\u5165\u7684\u4e00\u4e2a\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u65f6\u54cd\u5e94\u5f0f\u8ffd\u8e2a\u5176\u4f9d\u8d56\uff0c\u5e76\u5728\u5176\u4f9d\u8d56\u53d8\u66f4\u65f6\u91cd\u65b0\u8fd0\u884c\u8be5\u51fd\u6570"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"computed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5c5e\u6027, \u5e76\u5728\u5176\u4f9d\u8d56\u53d8\u66f4\u65f6\u91cd\u65b0\u8fd4\u56de\u503c"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u751f\u547d\u5468\u671f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"react hooks"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 React Hooks \u65f6\u505c\u6b62\u4ece\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u89d2\u5ea6\u601d\u8003\uff0c\u800c\u662f\u8003\u8651\u526f\u4f5c\u7528\u4f9d\u8d56\u4ec0\u4e48\u72b6\u6001\uff0c\u624d\u66f4\u7b26\u5408\u4e60\u60ef"),(0,r.kt)("li",{parentName:"ul"},"componentDidMount"),(0,r.kt)("li",{parentName:"ul"},"componentDidUpdate"),(0,r.kt)("li",{parentName:"ul"},"componentWillUnmount"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"vue"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"onX\u51fd\u6570"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u4ee3\u7801"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u90fd\u662f\u4f7f\u7528use\u5f00\u5934\u7684js\u51fd\u6570"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u7ec4\u4ef6\u6216\u8005DOM"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"react"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"useRef"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"vue"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ref")))))),(0,r.kt)("h3",{id:"reactivity-\u5b9e\u73b0\u539f\u7406"},"reactivity \u5b9e\u73b0\u539f\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c31\u662fvue3\u7684\u54cd\u5e94\u5f0f\u539f\u7406")),(0,r.kt)("h3",{id:"vue3\u521d\u59cb\u5316\u7684\u6d41\u7a0b"},"Vue3\u521d\u59cb\u5316\u7684\u6d41\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"createApp\u90e8\u5206"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"baseCreateRenderer().createApp()\u8fdb\u884c\u521b\u5efa\u5b9e\u4f8b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u662f\u4e00\u4e2a\u6709mount\u7b49\u65b9\u6cd5\u7684\u5bf9\u8c61"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"app.mount()\u90e8\u5206"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u6839\u7ec4\u4ef6\u521b\u5efa vnode(createVNode)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8c03\u7528 render\u65b9\u6cd5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u628avnode\u8f6c\u5316\u4e3a\u771f\u5b9edom,\u7136\u540e\u7ed1\u5b9a\u5230rootContainer\u4e0a\u3002")))))),(0,r.kt)("h3",{id:"vue3-\u7f16\u8bd1\u4f18\u5316"},"vue3 \u7f16\u8bd1\u4f18\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u7f13\u5b58"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u9996\u6b21\u7f16\u8bd1\u4e2d, \u7f13\u5b58\u51fd\u6570\u7f13\u5b58\u7ed1\u5b9a\u7684\u65b9\u6cd5, \u540e\u9762\u53ef\u4ee5\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u8c03\u7528\u4e8b\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9759\u6001\u8282\u70b9\u63d0\u5347"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728diff\u7684\u8fc7\u7a0b\u4e2d, \u53ea\u9700\u8981\u5bf9\u6bd4\u52a8\u6001\u8282\u70b9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u52a8\u6001\u8282\u70b9\u6807\u8bb0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8282\u70b9\u589e\u52a0\u4e86 patch flag, \u7528\u6765\u6807\u8bb0\u8282\u70b9\u7684\u7c7b\u578b\u548c\u5c5e\u6027\u7b49, diff\u7684\u8fc7\u7a0b\u4e2d, \u53ef\u4ee5\u7f29\u5c0f\u8303\u56f4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u589e\u52a0\u4e86fragment\u6807\u7b7e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},",\u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e2d\u6ca1\u6709\u552f\u4e00\u6839\u8282\u70b9\u65f6, \u4f5c\u4e3a\u6839\u8282\u70b9, \u51cf\u5c11\u4e86\u65e0\u7528\u7684\u6807\u7b7e")))),(0,r.kt)("h3",{id:"vue-30-\u6027\u80fd\u63d0\u5347\u4e3b\u8981\u662f\u901a\u8fc7\u54ea\u51e0\u65b9\u9762\u4f53\u73b0\u7684"},"Vue 3.0 \u6027\u80fd\u63d0\u5347\u4e3b\u8981\u662f\u901a\u8fc7\u54ea\u51e0\u65b9\u9762\u4f53\u73b0\u7684\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u54cd\u5e94\u5f0f\u7cfb\u7edf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u4f18\u5316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee3\u7801\u4f53\u79ef"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Vue3\u5bf9Tree-shaking\u7684\u652f\u6301\u66f4\u597d, Tree-shaking\u4f9d\u8d56ES module(export, import),\u901a\u8fc7\u7f16\u8bd1\u65f6\u7684\u9759\u6001\u5206\u6790, \u627e\u5230\u6ca1\u6709\u5f15\u5165\u7684\u6a21\u5757, \u6253\u5305\u7684\u65f6\u5019, \u76f4\u63a5\u8fc7\u6ee4\u6389, \u5f88\u591a\u6309\u9700\u5f15\u5165\u7684\u7ec4\u4ef6\u548c\u529f\u80fd")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"XMind: ZEN - Trial Version")))}o.isMDXComponent=!0}}]);