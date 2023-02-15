"use strict";(self.webpackChunkfull_stack_js_doc=self.webpackChunkfull_stack_js_doc||[]).push([[393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},l=void 0,i={unversionedId:"\u524d\u7aef\u6027\u80fd\u4f18\u5316/\u672c\u5730\u7f13\u5b58\u4f18\u5316",id:"\u524d\u7aef\u6027\u80fd\u4f18\u5316/\u672c\u5730\u7f13\u5b58\u4f18\u5316",title:"\u672c\u5730\u7f13\u5b58\u4f18\u5316",description:"\u672c\u5730\u7f13\u5b58\u4f18\u5316",source:"@site/docs/\u524d\u7aef\u6027\u80fd\u4f18\u5316/\u672c\u5730\u7f13\u5b58\u4f18\u5316.md",sourceDirName:"\u524d\u7aef\u6027\u80fd\u4f18\u5316",slug:"/\u524d\u7aef\u6027\u80fd\u4f18\u5316/\u672c\u5730\u7f13\u5b58\u4f18\u5316",permalink:"/fullStackJsDoc/docs/\u524d\u7aef\u6027\u80fd\u4f18\u5316/\u672c\u5730\u7f13\u5b58\u4f18\u5316",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u6027\u80fd\u4f18\u5316/\u672c\u5730\u7f13\u5b58\u4f18\u5316.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u5668\u7aef\u6e32\u67d3",permalink:"/fullStackJsDoc/docs/\u524d\u7aef\u6027\u80fd\u4f18\u5316/\u670d\u52a1\u5668\u7aef\u6e32\u67d3"},next:{title:"\u6d4f\u89c8\u5668\u6e32\u67d3\u5728\u5f00\u53d1\u4e2d\u53ef\u4f18\u5316\u70b9",permalink:"/fullStackJsDoc/docs/\u524d\u7aef\u6027\u80fd\u4f18\u5316/\u6d4f\u89c8\u5668\u6e32\u67d3\u5728\u5f00\u53d1\u4e2d\u53ef\u4f18\u5316\u70b9"}},c={},u=[{value:"\u672c\u5730\u7f13\u5b58\u4f18\u5316",id:"\u672c\u5730\u7f13\u5b58\u4f18\u5316",level:2},{value:"cookie",id:"cookie",level:3},{value:"LocalStorge\u548cSessionStorage",id:"localstorge\u548csessionstorage",level:3},{value:"IndexDB",id:"indexdb",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u672c\u5730\u7f13\u5b58\u4f18\u5316"},"\u672c\u5730\u7f13\u5b58\u4f18\u5316"),(0,o.kt)("h3",{id:"cookie"},"cookie"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6700\u59274k"),(0,o.kt)("li",{parentName:"ul"},"\u7d27\u8ddf\u57df\u540d\uff0c\u5f15\u8d77\u4e0d\u5fc5\u8981\u7684\u8bf7\u6c42\u5f00\u9500"),(0,o.kt)("li",{parentName:"ul"},"\u6ca1\u6709httpOnly\u548csameSite\u5c5e\u6027\u65f6\uff0c\u4e0d\u90a3\u4e48\u5b89\u5168")),(0,o.kt)("h3",{id:"localstorge\u548csessionstorage"},"LocalStorge\u548cSessionStorage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316\u65f6\u95f4\u4e0d\u540c"),(0,o.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u57df\u4e0d\u540c\uff08\u867d\u7136\u540c\u57df\u540d\u4e0b\u8d77\u4f5c\u7528\uff0c\u4f46SessionStorage\u8fd8\u53ea\u80fd\u5728\u5f53\u524dtab\uff09"),(0,o.kt)("li",{parentName:"ul"},"5M\u5de6\u53f3")),(0,o.kt)("h3",{id:"indexdb"},"IndexDB"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e0a\u7684\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u7a81\u7834\u5176\u4f59\u672c\u5730\u7f13\u5b58\u7684\u5927\u5c0f\u9650\u5236")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"XMind: ZEN - Trial Version")))}d.isMDXComponent=!0}}]);