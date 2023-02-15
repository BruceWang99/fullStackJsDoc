"use strict";(self.webpackChunkfull_stack_js_doc=self.webpackChunkfull_stack_js_doc||[]).push([[3779],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>N});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=r.createContext({}),u=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,m=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),o=u(a),s=l,N=o["".concat(m,".").concat(s)]||o[s]||c[s]||n;return a?r.createElement(N,p(p({ref:t},k),{},{components:a})):r.createElement(N,p({ref:t},k))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,p=new Array(n);p[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[o]="string"==typeof e?e:l,p[1]=i;for(var u=2;u<n;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=a(7462),l=(a(7294),a(3905));const n={},p=void 0,i={unversionedId:"JS\u3001TS\u57fa\u7840/ES6",id:"JS\u3001TS\u57fa\u7840/ES6",title:"ES6",description:"ES.next",source:"@site/docs/JS\u3001TS\u57fa\u7840/ES6.md",sourceDirName:"JS\u3001TS\u57fa\u7840",slug:"/JS\u3001TS\u57fa\u7840/ES6",permalink:"/fullStackJsDoc/docs/JS\u3001TS\u57fa\u7840/ES6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JS\u3001TS\u57fa\u7840/ES6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JS\u3001TS\u57fa\u7840",permalink:"/fullStackJsDoc/docs/category/jsts\u57fa\u7840"},next:{title:"TypeScript",permalink:"/fullStackJsDoc/docs/JS\u3001TS\u57fa\u7840/TypeScript"}},m={},u=[{value:"ES.next",id:"esnext",level:2},{value:"\u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u533a\u522b?",id:"\u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u533a\u522b",level:3},{value:"\u8c08\u8c08\u4f60\u5bf9ES6\u7684proxy\u7684\u7406\u89e3\uff1f",id:"\u8c08\u8c08\u4f60\u5bf9es6\u7684proxy\u7684\u7406\u89e3",level:3},{value:"\u8bf4\u8bf4Reflect?",id:"\u8bf4\u8bf4reflect",level:3},{value:"\u5bf9rest\u53c2\u6570\u7406\u89e3?(\u6269\u5c55\u8fd0\u7b97\u7b26)",id:"\u5bf9rest\u53c2\u6570\u7406\u89e3\u6269\u5c55\u8fd0\u7b97\u7b26",level:3},{value:"ES6\u6a21\u7248\u8bed\u6cd5\u4e0e\u5b57\u7b26\u4e32\u5904\u7406?",id:"es6\u6a21\u7248\u8bed\u6cd5\u4e0e\u5b57\u7b26\u4e32\u5904\u7406",level:3},{value:"map\u3001weakMap\u548cobject\u533a\u522b?",id:"mapweakmap\u548cobject\u533a\u522b",level:3},{value:"\u8bf4\u8bf4js\u7684\u88c5\u9970\u5668",id:"\u8bf4\u8bf4js\u7684\u88c5\u9970\u5668",level:3}],k={toc:u},o="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(o,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"esnext"},"ES.next"),(0,l.kt)("h3",{id:""}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5757\u7ea7\u4f5c\u7528\u57df"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u8986\u76d6\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8ba1\u6570\u7684\u5faa\u73af\u53d8\u91cf\u6cc4\u6f0f\u4e3a\u5168\u5c40\u53d8\u91cf\u95ee\u9898"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6682\u5b58\u6027\u6b7b\u533a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- \u58f0\u660e\u524d\u4e0d\u53ef\u7528\n\n    - var tmp = 123;\n")),(0,l.kt)("p",{parentName:"li"},"if (true) {\ntmp = 'abc'; // ReferenceError\nlet tmp;\n}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521d\u59cb\u503c\u8bbe\u7f6e:const")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6307\u9488\u6307\u5411"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"const\u6307\u5411\u7684\u90a3\u4e2a\u5185\u5b58\u5730\u5740\u4e0d\u80fd\u53d8"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5b58\u653e\u5728\u5806\u533a, \u4ecd\u7136\u53ef\u4ee5\u6539\u53d8\u5230\u5176\u5c5e\u6027\u7684\u5730\u5740\u6216\u503c"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53d8\u91cf\u63d0\u5347:var")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u91cd\u590d\u7533\u660e:var")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7ed9\u5168\u5c40\u6dfb\u52a0\u5c5e\u6027:var"))),(0,l.kt)("h3",{id:"\u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u533a\u522b"},"\u7bad\u5934\u51fd\u6570\u548c\u666e\u901a\u51fd\u6570\u533a\u522b?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b80\u6d01"),(0,l.kt)("li",{parentName:"ul"},"this"),(0,l.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"arguments\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"prototype"),(0,l.kt)("li",{parentName:"ul"},"generator")),(0,l.kt)("h3",{id:"\u8c08\u8c08\u4f60\u5bf9es6\u7684proxy\u7684\u7406\u89e3"},"\u8c08\u8c08\u4f60\u5bf9ES6\u7684proxy\u7684\u7406\u89e3\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u4ee3\u7406\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"new Proxy(target, handler)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"handler\u5bf9\u8c61\u7684get\u548cset\u5c5e\u6027\nget(target, key, receiver)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- receiver: Proxy\u6216\u8005\u7ee7\u627fProxy\u7684\u5bf9\u8c61\n- \u8fd4\u56de true \u4ee3\u8868\u5c5e\u6027\u8bbe\u7f6e\u6210\u529f\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Reflect\u642d\u914d\u4f7f\u7528"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u907f\u514dthis\u6307\u5411\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"Reflect.get(target, prop, receiver)")))),(0,l.kt)("h3",{id:"\u8bf4\u8bf4reflect"},"\u8bf4\u8bf4Reflect?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u5bf9\u8c61\u505a\u4e00\u4e9b\u64cd\u4f5c\u7684\u9759\u6001\u7c7b(\u548cProxy\u7684handler\u4e2d\u65b9\u6cd5\u4e00\u6837)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Reflect.get(target, key, receiver)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u628a\u4ee5\u524djs\u5404\u79cd\u4e0d\u540c\u683c\u5f0f\u64cd\u4f5c\u5bf9\u8c61\u505a\u4e86\u7edf\u4e00"))),(0,l.kt)("h3",{id:"\u5bf9rest\u53c2\u6570\u7406\u89e3\u6269\u5c55\u8fd0\u7b97\u7b26"},"\u5bf9rest\u53c2\u6570\u7406\u89e3?(\u6269\u5c55\u8fd0\u7b97\u7b26)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6574\u5408\u6210\u6570\u7ec4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u83b7\u53d6\u5269\u4f59\u53c2\u6570"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u653e\u6700\u540e\u4e00\u4f4d")))),(0,l.kt)("h3",{id:"es6\u6a21\u7248\u8bed\u6cd5\u4e0e\u5b57\u7b26\u4e32\u5904\u7406"},"ES6\u6a21\u7248\u8bed\u6cd5\u4e0e\u5b57\u7b26\u4e32\u5904\u7406?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u683c\u3001\u7f29\u8fdb\u3001\u6362\u884c\u88ab\u4fdd\u7559"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8fd0\u7b97${} "),(0,l.kt)("li",{parentName:"ul"},"includes\\startsWith\\endWith\\repeat")),(0,l.kt)("h3",{id:"mapweakmap\u548cobject\u533a\u522b"},"map\u3001weakMap\u548cobject\u533a\u522b?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u952e\u7684\u7c7b\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Map: \u4efb\u610f\u503c"),(0,l.kt)("li",{parentName:"ul"},"Object:  String \u6216Symbol"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u952e\u7684\u987a\u5e8f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Map: \u6709\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"Object: \u65e0\u5e8f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Size")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"iterable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u610f\u5916\u7684\u952e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Map: \u9ed8\u8ba4\u6ca1\u6709\u4efb\u4f55key"),(0,l.kt)("li",{parentName:"ul"},"Object: \u539f\u578b \u53ef\u66ff\u6362"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6027\u80fd"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9891\u7e41\u64cd\u4f5cmap\u66f4\u4f73"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WeakMap \u53ea\u63a5\u53d7\u5bf9\u8c61\u4f5c\u4e3a\u952e\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WeakMap\u952e\u503c(\u5f31\u5f15\u7528) \u503c\u53ef\u80fd\u5728\u4efb\u4f55\u65f6\u523b\u88ab\u56de\u6536\u3002"))),(0,l.kt)("h3",{id:"\u8bf4\u8bf4js\u7684\u88c5\u9970\u5668"},"\u8bf4\u8bf4js\u7684\u88c5\u9970\u5668"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u4e0d\u4fee\u6539\u539f\u6765\u7684\u4ee3\u7801\u60c5\u51b5\u4e0b, \u6765\u88c5\u9970\u7c7b\u6216\u8005\u65b9\u6cd5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u672c\u4f7f\u7528"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- const changeParams = () => {\n")),(0,l.kt)("p",{parentName:"li"},"  return (target, name, desc) => {\nconst fun = desc.value   //\u4fdd\u5b58\u6e90\u65b9\u6cd5\ndesc.value = function (params) {\nlet translate = params.toUpperCase()   //\u4fee\u6539\u53c2\u6570\uff0c\u5927\u5c0f\u5199\u8f6c\u6362\nreturn fun(translate)   // \u8fd4\u56de\u8981\u8fd0\u884c\u7684\u65b9\u6cd5\n}\n}\n}"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"    - target\n\n        - \u88c5\u9970\u7684\u65b9\u6cd5\u7684\u7c7b\u672c\u8eab\n\n    - name\n\n        - \u88c5\u9970\u7684\u65b9\u6cd5\u540d\u79f0\n\n    - desc (PropertyDescriptor)\n\n        - \u53ef\u4ee5\u7406\u89e3\u4e3aObject.defineProperty()\n\n- class myClass {\n")),(0,l.kt)("p",{parentName:"li"},"  @changeParams()    //\u8fd9\u91cc\u4f7f\u7528\u88c5\u9970\u5668\uff01\ngetList1(params) {\nconsole.log('params', params)\nreturn params\n}\n}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u88c5\u9970\u5668\u7c7b\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7c7b\u88c5\u9970\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u88c5\u9970\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c5e\u6027\u88c5\u9970\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53c2\u6570\u88c5\u9970\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u5668\u7684\u88c5\u9970\u5668"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"get set \u5173\u952e\u5b57\u5b9a\u4e49\u7684\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"TypeScript\u4e0d\u5141\u8bb8\u540c\u65f6\u88c5\u9970\u4e00\u4e2a\u6210\u5458\u7684get\u548cset\u8bbf\u95ee\u5668")))))))}c.isMDXComponent=!0}}]);