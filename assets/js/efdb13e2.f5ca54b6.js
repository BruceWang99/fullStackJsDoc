"use strict";(self.webpackChunkfull_stack_js_doc=self.webpackChunkfull_stack_js_doc||[]).push([[220],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),m=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return l.createElement(u.Provider,{value:t},e.children)},N="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),N=m(a),c=n,s=N["".concat(u,".").concat(c)]||N[c]||o[c]||r;return a?l.createElement(s,i(i({ref:t},k),{},{components:a})):l.createElement(s,i({ref:t},k))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[N]="string"==typeof e?e:n,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=a(7462),n=(a(7294),a(3905));const r={},i=void 0,p={unversionedId:"JS\u3001TS\u57fa\u7840/\u6570\u636e\u7c7b\u578b",id:"JS\u3001TS\u57fa\u7840/\u6570\u636e\u7c7b\u578b",title:"\u6570\u636e\u7c7b\u578b",description:"\u6570\u636e\u7c7b\u578b",source:"@site/docs/JS\u3001TS\u57fa\u7840/\u6570\u636e\u7c7b\u578b.md",sourceDirName:"JS\u3001TS\u57fa\u7840",slug:"/JS\u3001TS\u57fa\u7840/\u6570\u636e\u7c7b\u578b",permalink:"/fullStackJsDoc/docs/JS\u3001TS\u57fa\u7840/\u6570\u636e\u7c7b\u578b",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JS\u3001TS\u57fa\u7840/\u6570\u636e\u7c7b\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u624b\u5199\u9898",permalink:"/fullStackJsDoc/docs/JS\u3001TS\u57fa\u7840/\u624b\u5199\u9898"},next:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/fullStackJsDoc/docs/JS\u3001TS\u57fa\u7840/\u8bbe\u8ba1\u6a21\u5f0f"}},u={},m=[{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u6240\u6709\u6570\u636e\u7c7b\u578b\u53ca\u533a\u522b?\xb7",id:"\u6240\u6709\u6570\u636e\u7c7b\u578b\u53ca\u533a\u522b",level:3},{value:"\u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b?",id:"\u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b",level:3},{value:"null\u548cundefined\u533a\u522b",id:"null\u548cundefined\u533a\u522b",level:3},{value:"instanceOf \u5b9e\u73b0\u539f\u7406",id:"instanceof-\u5b9e\u73b0\u539f\u7406",level:3},{value:"0.1 + 0.2 !== 0.3 ? \u600e\u4e48\u76f8\u7b49(\u6d6e\u70b9\u6570\u7cbe\u5ea6\u95ee\u9898)",id:"01--02--03--\u600e\u4e48\u76f8\u7b49\u6d6e\u70b9\u6570\u7cbe\u5ea6\u95ee\u9898",level:3},{value:"==\u64cd\u4f5c\u7b26\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u89c4\u5219?",id:"\u64cd\u4f5c\u7b26\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u89c4\u5219",level:3},{value:"Object.is()\u548c===\u3001==\u533a\u522b?",id:"objectis\u548c\u533a\u522b",level:3},{value:"typeof null?",id:"typeof-null",level:3},{value:"isNaN \u548cNumber.isNaN \u533a\u522b?",id:"isnan-\u548cnumberisnan-\u533a\u522b",level:3},{value:"\u5176\u4ed6\u503c\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u8f6c\u5316\u89c4\u5219?",id:"\u5176\u4ed6\u503c\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u8f6c\u5316\u89c4\u5219",level:3},{value:"\u5176\u4ed6\u503c\u5230number\u8f6c\u5316\u89c4\u5219",id:"\u5176\u4ed6\u503c\u5230number\u8f6c\u5316\u89c4\u5219",level:3},{value:"\u5176\u4ed6\u503c\u5230boolean\u8f6c\u5316\u89c4\u5219",id:"\u5176\u4ed6\u503c\u5230boolean\u8f6c\u5316\u89c4\u5219",level:3},{value:"js\u5982\u4f55\u9690\u5f0f\u7c7b\u578b\u8f6c\u5316?",id:"js\u5982\u4f55\u9690\u5f0f\u7c7b\u578b\u8f6c\u5316",level:3}],k={toc:m},N="wrapper";function o(e){let{components:t,...a}=e;return(0,n.kt)(N,(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,n.kt)("h3",{id:"\u6240\u6709\u6570\u636e\u7c7b\u578b\u53ca\u533a\u522b"},"\u6240\u6709\u6570\u636e\u7c7b\u578b\u53ca\u533a\u522b?\xb7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"8\u79cd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Undefined\u3001Null\u3001Boolean\u3001Number\u3001String\u3001Object\u3001Symbol\u3001BigInt"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BigInt  \u4efb\u610f\u7cbe\u5ea6\u683c\u5f0f\u7684\u6574\u6570"),(0,n.kt)("li",{parentName:"ul"},"Symbol  \u72ec\u4e00\u65e0\u4e8c\u4e14\u4e0d\u53ef\u53d8"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u539f\u59cb\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u4f4d\u7f6e\u4e0d\u540c")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    - \u5f15:  \u5806\n\n        - \u5b8c\u5168\u4e8c\u53c9\u6811\n        - \u5b69\u5b50\u8282\u70b9\u8981\u4e0d\u5927\u4e8e\u6216\u4e0d\u5c0f\u4e8e\u7236\u4eb2\u8282\u70b9\n\n    - \u539f: \u6808\n\n        - \u5148\u5165\u540e\u51fa\u7684\u7ebf\u6027\u8868\n\n- \u4f20\u503c\u65b9\u5f0f\u4e0d\u540c\n\n\n    - \u5f15:  \u6309\u5740\u4f20\u9012\n")),(0,n.kt)("p",null,"\u539f: \u6309\u503c\u4f20\u9012"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5305\u88c5\u7c7b\u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Boolean\u3001Number\u3001String"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fbf\u4e8e\u64cd\u4f5c\u8fd9\u4e09\u4e2a\u57fa\u7840\u6570\u636e\u7c7b\u578b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u7684\u751f\u5b58\u671f\u53ea\u5b58\u5728\u4e8e\u4e00\u884c\u4ee3\u7801\u7684\u6267\u884c\u77ac\u95f4"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2aString\u7684\u5305\u88c5\u7c7b\u578b\u5b9e\u4f8b"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u5b9e\u4f8b\u4e0a\u8c03\u7528substring\u65b9\u6cd5"),(0,n.kt)("li",{parentName:"ul"},"\u9500\u6bc1\u5b9e\u4f8b")))))),(0,n.kt)("h3",{id:"\u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b"},"\u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"typeof"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u7840\u7c7b\u578b \u9664null\u5916"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"instanceof"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f15\u7528\u7c7b\u578b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Object.prototype.toString.call()"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709\u7c7b\u578b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Array.isArray")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Number.isNaN"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u662f\u4e0d\u662f\u6570\u503c:NaN"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"isNaN"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5148\u7528Number\u9690\u5f0f\u8f6c\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u662f\u4e0d\u662f\u6570\u503c:NaN")))),(0,n.kt)("h3",{id:"null\u548cundefined\u533a\u522b"},"null\u548cundefined\u533a\u522b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Number(null): 0\nNumber(undefined): NaN ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"null: \u7a7a\u5bf9\u8c61"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u539f\u578b\u94fe\u5c3d\u5934"),(0,n.kt)("li",{parentName:"ul"},"\u8868\u793a\u4e0d\u662f\u5bf9\u8c61"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"undefined:\u672a\u5b9a\u4e49"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u58f0\u660e\u3001\u8c03\u7528\u3001\u8fd4\u56de\u6ca1\u6709\u8d4b\u503c")))),(0,n.kt)("h3",{id:"instanceof-\u5b9e\u73b0\u539f\u7406"},"instanceOf \u5b9e\u73b0\u539f\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u539f\u578b\u94fe\u67e5\u627e"),(0,n.kt)("li",{parentName:"ul"},"\u624b\u5199instanceof")),(0,n.kt)("h3",{id:"01--02--03--\u600e\u4e48\u76f8\u7b49\u6d6e\u70b9\u6570\u7cbe\u5ea6\u95ee\u9898"},"0.1 + 0.2 !== 0.3 ? \u600e\u4e48\u76f8\u7b49(\u6d6e\u70b9\u6570\u7cbe\u5ea6\u95ee\u9898)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e8c\u8fdb\u5236\u65e0\u9650\u5faa\u73af")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"IEEE754 \u6807\u51c6\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570(64\u4f4d\u957f\u5ea6)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7b26\u53f7\u4f4d S"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"0\u6b63 1\u8d1f"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9636\u7801(\u6307\u6570\u4f4d) E: 11"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u79fb\u7801\u8868\u793a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u539f\u7801 + \u504f\u7f6e\u503c"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"E(\u539f) = \u79fb\u7801 - \u504f\u7f6e\u503c"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u504f\u7f6e\u503c = 2^(n-1) - 1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"n\u8868\u793a\u9636\u7801\u4f4d\u6570"),(0,n.kt)("li",{parentName:"ul"},"\u53cc\u7cbe\u5ea6: 2^(11-1) - 1 = 1024 - 1 = 1023"),(0,n.kt)("li",{parentName:"ul"},"\u5355\u7cbe\u5ea6: 2^(8-1) - 1  = 128 - 1 = 127"))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8865\u7801\u7684\u7b26\u53f7\u4f4d\u53d6\u53cd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8865\u7801 = \u53cd\u7801  +1"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u7528\u79fb\u7801"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fbf\u4e8e\u6d6e\u70b9\u6570\u6bd4\u5927\u5c0f\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2^11(2048)\u4e2a\u6570\u4e2d,\u53bb\u5934\u5c3e: 2046\u4e2a\u6570, \u4e00\u534a\u6b63,\u4e00\u534a\u8d1f"),(0,n.kt)("li",{parentName:"ul"},"\u52a0\u4e0a\u504f\u7f6e\u503c\u4e3a 1023\u540e, \u6307\u6570\u5168\u90e8\u4e3a\u6b63, \u5e76\u4e14\u6ca1\u6709\u7b26\u53f7\u4f4d"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u65e0\u7b26\u53f7\u6b63\u6574\u6570")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8ba1\u7b97\u7684\u65f6\u5019, \u8981\u7528\u539f\u7801")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c3e\u6570(\u6570\u5b57\u4f4d) M: 52"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u539f\u7801\u8868\u793a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u89c4\u683c\u5316\u8868\u793a: \u6574\u6570\u4f4d\u4e3a1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1<= M < 2, \u5373M\u7684\u5f62\u5f0f\u4e3a1.xxxx\u7684\u5f62\u5f0f\uff0cxxx\u8868\u793a\u5c0f\u6570\u4f4d"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u820d\u53bb\u4e86\u7b2c\u4e00\u4f4d\u76841(\u4e00\u5b9a\u662f1), \u5b9e\u9645\u4e0a\u662f53\u4f4d")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8868\u793a\u516c\u5f0f: V =  (-1)^s ",(0,n.kt)("em",{parentName:"p"}," M ")," 2^E"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1011.1101")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1.0111101 * 2^3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(-1)^0 ",(0,n.kt)("em",{parentName:"p"}," 1.0111101 ")," 2^3"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"S = 0"),(0,n.kt)("li",{parentName:"ul"},"M = 1.0111101"),(0,n.kt)("li",{parentName:"ul"},"E = 3"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u662f\u7d22\u5f15\u6570\u5b57\u6216\u4f4d\u8fd0\u7b97\u662f32\u4f4d\u5355\u7cbe\u5ea6"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1\u4f4d\u7b26\u53f7\u4f4d"),(0,n.kt)("li",{parentName:"ul"},"\u540e31\u4f4d\u7528\u4e8e\u8868\u793a\u6574\u6570\u7684\u503c"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"js\u80fd\u8868\u793a\u7684\u6700\u5927\u6570"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9636\u7801: 11111111110"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"11111111111 : \u8fd9\u4e2a\u88abNaN\u5360\u7528\u4e86"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c3e\u6570: 1.52\u4e2a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7b26\u53f7\u4f4d\u662f0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1.52\u4e2a1  *  2^(11111111110\u7684\u5341\u8fdb\u5236 - 1023)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"js\u6700\u5927\u7684\u5b89\u5168\u6570(\u5c0f\u6570\u4f4d\u8d85\u8fc752\u4f4d\u7684\u6570\u5b57\u5c31\u5931\u53bb\u51c6\u786e\u4e86)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1.1111111111111111111111111111111111111111111111111111 * 2^52")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u5927\u4e8e53\u4f4d\u8868\u793a\u7684\u4e8c\u8fdb\u5236"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5b58\u50a853\u4f4d\u7684\u6570(\u4e0d\u5305\u542b\u7b26\u53f7\u4f4d)"))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u6d6e\u70b9\u6570\u8f6c\u4e3a\u6574\u6570\u8fd0\u7b97(number-precision)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u6d6e\u70b9\u6570\u8f6c\u4e3a\u5b57\u7b26\u4e32, \u6a21\u62df\u8fd0\u7b97(big.js)"))),(0,n.kt)("h3",{id:"\u64cd\u4f5c\u7b26\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u89c4\u5219"},"==\u64cd\u4f5c\u7b26\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u89c4\u5219?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u76f8\u540c \u4e25\u683c\u6bd4\u8f83"),(0,n.kt)("li",{parentName:"ul"},"null == undefined: true"),(0,n.kt)("li",{parentName:"ul"},"string\u3001boolean\u8f6cnumber"),(0,n.kt)("li",{parentName:"ul"},"object\u8f6c\u57fa\u7840\u7c7b\u578b(ToPrimitive)"),(0,n.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u5f15\u7528\u7c7b\u578b\u6bd4\u8f83, \u770b\u5f15\u7528\u5730\u5740\u662f\u4e0d\u662f\u540c\u4e00\u4e2a"),(0,n.kt)("li",{parentName:"ul"},"NaN == NaN false"),(0,n.kt)("li",{parentName:"ul"},"[] == ![]\u3001","[undefined]"," == false    true")),(0,n.kt)("h3",{id:"objectis\u548c\u533a\u522b"},"Object.is()\u548c===\u3001==\u533a\u522b?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"==: \u5f3a\u5236\u7c7b\u578b\u8f6c\u5316")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"===: \u4e25\u683c\u7b49\u4e8e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Object.is: \u5728===\u57fa\u7840\u4e0a, +0\u3001-0\u3001NaN"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b57\u9762\u4e0a\u4e5f\u8981\u4e00\u6837\u5c31\u76f8\u7b49")))),(0,n.kt)("h3",{id:"typeof-null"},"typeof null?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Object"),(0,n.kt)("li",{parentName:"ul"},"\u5386\u53f2\u95ee\u9898")),(0,n.kt)("h3",{id:"isnan-\u548cnumberisnan-\u533a\u522b"},"isNaN \u548cNumber.isNaN \u533a\u522b?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"is NaN: \u4f1a\u505aNumber\u7684\u9690\u5f0f\u8f6c\u5316")),(0,n.kt)("h3",{id:"\u5176\u4ed6\u503c\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u8f6c\u5316\u89c4\u5219"},"\u5176\u4ed6\u503c\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u8f6c\u5316\u89c4\u5219?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"number\u7c7b\u578b\u8f83\u5927\u6570\u4f1a\u8f6c\u6210\u6307\u6570\u7684\u5199\u6cd5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Symbol"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u5141\u8bb8\u663e\u5f0f\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362: Symbol(): 'Symbol()'"),(0,n.kt)("li",{parentName:"ul"},"\u9690\u5f0f\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u4f1a\u62a5\u9519: \u2018\u2019+Symbol()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Object"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5148toString() : [","[object object]","]"),(0,n.kt)("li",{parentName:"ul"},"\u540evalueOf()"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u884c\u62a5\u9519"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5176\u4ed6\u6b63\u5e38\u8f6c\u5b57\u7b26\u4e32\u5f62\u5f0f"))),(0,n.kt)("h3",{id:"\u5176\u4ed6\u503c\u5230number\u8f6c\u5316\u89c4\u5219"},"\u5176\u4ed6\u503c\u5230number\u8f6c\u5316\u89c4\u5219"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"undefined: NaN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"null: 0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Boolean: 0\\1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"string: NaN\\0\\number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Symbol: \u62a5\u9519")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Object: \u5148\u8f6c\u6210\u57fa\u672c\u7c7b\u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5148valueOf"),(0,n.kt)("li",{parentName:"ul"},"\u518dtoString"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u884c\u5c31\u62a5\u9519")))),(0,n.kt)("h3",{id:"\u5176\u4ed6\u503c\u5230boolean\u8f6c\u5316\u89c4\u5219"},"\u5176\u4ed6\u503c\u5230boolean\u8f6c\u5316\u89c4\u5219"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'6\u79cd: null undefined +0 -0 NaN "" \u8fd9\u4e9b\u662ffalse')),(0,n.kt)("h3",{id:"js\u5982\u4f55\u9690\u5f0f\u7c7b\u578b\u8f6c\u5316"},"js\u5982\u4f55\u9690\u5f0f\u7c7b\u578b\u8f6c\u5316?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"+\u3001-\u3001*\u3001/\u3001==\u3001>\u3001<"),(0,n.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u6210\u57fa\u672c\u7c7b\u578b(ToPrimitive)"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u7b97\u64cd\u4f5c")))}o.isMDXComponent=!0}}]);