"use strict";(self.webpackChunkfull_stack_js_doc=self.webpackChunkfull_stack_js_doc||[]).push([[1970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),k=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=k(e.components);return l.createElement(u.Provider,{value:t},e.children)},N="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},o=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),N=k(a),o=n,s=N["".concat(u,".").concat(o)]||N[o]||c[o]||r;return a?l.createElement(s,p(p({ref:t},m),{},{components:a})):l.createElement(s,p({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=o;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[N]="string"==typeof e?e:n,p[1]=i;for(var k=2;k<r;k++)p[k]=a[k];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}o.displayName="MDXCreateElement"},9350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var l=a(7462),n=(a(7294),a(3905));const r={},p=void 0,i={unversionedId:"\u524d\u7aef\u5de5\u7a0b\u5316/webpack",id:"\u524d\u7aef\u5de5\u7a0b\u5316/webpack",title:"webpack",description:"webpack",source:"@site/docs/\u524d\u7aef\u5de5\u7a0b\u5316/webpack.md",sourceDirName:"\u524d\u7aef\u5de5\u7a0b\u5316",slug:"/\u524d\u7aef\u5de5\u7a0b\u5316/webpack",permalink:"/fullStackJsDoc/docs/\u524d\u7aef\u5de5\u7a0b\u5316/webpack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u5de5\u7a0b\u5316/webpack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"node\u5de5\u5177",permalink:"/fullStackJsDoc/docs/\u524d\u7aef\u5de5\u7a0b\u5316/node\u5de5\u5177"},next:{title:"\u524d\u7aef\u76d1\u63a7",permalink:"/fullStackJsDoc/docs/\u524d\u7aef\u5de5\u7a0b\u5316/\u524d\u7aef\u76d1\u63a7"}},u={},k=[{value:"webpack",id:"webpack",level:2},{value:"\u6a21\u5757\u5316\u6253\u5305\u7684\u539f\u7406",id:"\u6a21\u5757\u5316\u6253\u5305\u7684\u539f\u7406",level:3},{value:"webpack\u7684\u6784\u5efa\u6d41\u7a0b?",id:"webpack\u7684\u6784\u5efa\u6d41\u7a0b",level:3},{value:"webpack \u70ed\u66f4\u65b0\u7684\u5b9e\u73b0\u539f\u7406\uff1f",id:"webpack-\u70ed\u66f4\u65b0\u7684\u5b9e\u73b0\u539f\u7406",level:3},{value:"bundle\uff0cchunk\uff0cmodule\u662f\u4ec0\u4e48\uff1f",id:"bundlechunkmodule\u662f\u4ec0\u4e48",level:3},{value:"hash\u7684\u7c7b\u578b\u548c\u533a\u522b",id:"hash\u7684\u7c7b\u578b\u548c\u533a\u522b",level:3},{value:"Loader\u548cPlugin\u7684\u4e0d\u540c\uff1f",id:"loader\u548cplugin\u7684\u4e0d\u540c",level:3},{value:"\u7f16\u5199loader\u6216plugin\u7684\u601d\u8def\uff1f",id:"\u7f16\u5199loader\u6216plugin\u7684\u601d\u8def",level:3},{value:"\u600e\u4e48\u914d\u7f6e\u5355\u2eda\u5e94\u2f64\uff1f\u600e\u4e48\u914d\u7f6e\u591a\u2eda\u5e94\u2f64\uff1f",id:"\u600e\u4e48\u914d\u7f6e\u5355\u5e94\u600e\u4e48\u914d\u7f6e\u591a\u5e94",level:3},{value:"webpack\u3001gulp\u3001rollup\u3001parcel\u3001vite\u533a\u522b\u548c\u9002\u7528\u573a\u666f",id:"webpackgulprollupparcelvite\u533a\u522b\u548c\u9002\u7528\u573a\u666f",level:3},{value:"\u5e38\u89c1\u7684Loader",id:"\u5e38\u89c1\u7684loader",level:3},{value:"\u5e38\u2ec5\u7684Plugin",id:"\u5e38\u7684plugin",level:3}],m={toc:k},N="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(N,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"webpack"},"webpack"),(0,n.kt)("h3",{id:"\u6a21\u5757\u5316\u6253\u5305\u7684\u539f\u7406"},"\u6a21\u5757\u5316\u6253\u5305\u7684\u539f\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u5b83\u4f1a\u9012\u5f52\u5730\u6784\u5efa\u4e00\u4e2a\u4f9d\u8d56\u5173\u7cfb\u56fe(dependency graph)\uff0c\u5176\u4e2d\u5305\u542b\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u7684\u6bcf\u4e2a\u6a21\u5757\uff0c\u7136\u540e\u5c06\u6240\u6709\u8fd9\u4e9b\u6a21\u5757\u6253\u5305\u6210\u4e00\u4e2a\u6216\u591a\u4e2a bundle\u3002")),(0,n.kt)("h3",{id:"webpack\u7684\u6784\u5efa\u6d41\u7a0b"},"webpack\u7684\u6784\u5efa\u6d41\u7a0b?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u53c2\u6570"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ece\u914d\u7f6e\u2f42\u4ef6\u548c Shell \u8bed\u53e5\u4e2d\u8bfb\u53d6\u4e0e\u5408\u5e76\u53c2\u6570\uff0c\u5f97\u51fa\u6700\u7ec8\u7684\u53c2\u6570"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5f00\u59cb\u7f16\u8bd1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316 compiler \u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u6240\u6709\u914d\u7f6e\u7684\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u8c03\u7528compiler\u5bf9\u8c61\u7684 run \u2f45\u6cd5\u8fdb\u884c\u7f16\u8bd1 "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u786e\u5b9a\u5165\u53e3"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u4e2dentry \u627e\u5230\u6240\u6709\u5165\u53e3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u6a21\u5757"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ece\u5165\u53e3\u6587\u4ef6\u51fa\u53d1\uff0c\u8c03\u7528\u6240\u6709\u914d\u7f6e\u7684 Loader \u5bf9\u6a21\u5757\u8fdb\u884c\u7ffb\u8bd1"),(0,n.kt)("li",{parentName:"ul"},"\u627e\u51fa\u8be5\u6a21\u5757\u4f9d\u8d56\u7684\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u9012\u5f52\u672c\u6b65\u9aa4, \u76f4\u5230\u6240\u6709\u5165\u53e3\u4f9d\u8d56\u7684\u6587\u4ef6\u90fd\u7ecf\u8fc7\u4e86\u672c\u6b65\u9aa4\u7684\u5904\u7406"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b8c\u6210\u6a21\u5757\u7f16\u8bd1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f97\u5230\u4e86\u6bcf\u4e2a\u6a21\u5757\u88ab\u7ffb\u8bd1\u540e\u7684\u6700\u7ec8\u5185\u5bb9\u4ee5\u53ca\u5b83\u4eec\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u51fa\u8d44\u6e90"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u5165\u53e3\u548c\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u7ec4\u88c5\u6210\u4e00\u4e2a\u4e2a\u5305\u542b\u591a\u4e2a\u6a21\u5757\u7684 Chunk"),(0,n.kt)("li",{parentName:"ul"},"\u628a\u6bcf\u4e2a Chunk \u8f6c\u6362\u6210\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u52a0\u5165\u5230\u8f93\u51fa\u5217\u8868"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u51fa\u5b8c\u6210"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u786e\u5b9a\u597d\u8f93\u51fa\u5185\u5bb9\u540e\uff0c\u6839\u636e\u914d\u7f6e\u786e\u5b9a\u8f93\u51fa\u7684\u8def\u5f84\u548c\u6587\u4ef6\u540d\uff0c\u628a\u6587\u4ef6\u5185\u5bb9\u5199\u5165\u5230\u6587\u4ef6\u7cfb\u7edf\u3002")))),(0,n.kt)("h3",{id:"webpack-\u70ed\u66f4\u65b0\u7684\u5b9e\u73b0\u539f\u7406"},"webpack \u70ed\u66f4\u65b0\u7684\u5b9e\u73b0\u539f\u7406\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5173\u952e\u70b9: 1\u3001\u4e24\u7aef\u90fd\u6709hmr\u8fd0\u884c\u65f6 2\u3001\u901a\u8fc7websocket\u901a\u4fe1"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u914d\u7f6e\u70ed\u66f4\u65b0\u65f6, \u4f1a\u5728\u5ba2\u6237\u7aef\u81ea\u52a8\u6ce8\u5165hmr\u8fd0\u884c\u65f6 (\u4ee5webpack-dev-server\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u4e3a\u4f8b)"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u542f\u52a8\u540e, websocket\u4f1a\u548c\u6d4f\u89c8\u5668\u5efa\u7acb\u8fde\u63a5"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u4fee\u6539\u4e86\u4ee3\u7801, webpack\u5177\u6709watch\u7684\u80fd\u529b, \u5f00\u59cb\u8fdb\u884c\u589e\u91cf\u7f16\u8bd1"),(0,n.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u5b8c\u6210, webpack\u5c31\u89e6\u53d1websocket, \u5411\u6d4f\u89c8\u5668\u53d1\u8d77\u66f4\u65b0\u901a\u77e5, \u4f1a\u4f20\u9012\u66f4\u65b0\u6587\u4ef6\u7684hash "),(0,n.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668hmr\u8fd0\u884c\u65f6\u54cd\u5e94websocket, \u901a\u8fc7\u8bf7\u6c42\u4e00\u4e2amainfest\u53bb\u4e86\u89e3\u66f4\u65b0\u7684\u6570\u636e, \u518d\u52a0\u4e0a\u62ff\u5230\u7684hash, \u5c31\u62fc\u63a5\u51fa\u66f4\u65b0\u7684\u6587\u4ef6, \u5728\u66ff\u6362\u8c03\u539f\u6765\u7684\u6587\u4ef6")),(0,n.kt)("h3",{id:"bundlechunkmodule\u662f\u4ec0\u4e48"},"bundle\uff0cchunk\uff0cmodule\u662f\u4ec0\u4e48\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"bundle (\u6346)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u662f\u7531webpack\u6253\u5305\u51fa\u6765\u7684\u2f42\u4ef6\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u6253\u5305\u7ed3\u679c\u7684\u4ee3\u7801\u5757"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"chunk (\u5927\u5757)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e2achunk\u7531\u591a\u4e2a\u6a21\u5757\u7ec4\u5408\u2f7d\u6210\uff0c\u2f64\u4e8e\u4ee3\u7801\u7684\u5408\u5e76\u548c\u5206\u5272\uff1b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"module"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u662f\u5f00\u53d1\u4e2d\u7684\u5355\u4e2a\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u5728webpack\u4e2d\uff0c\u2f00\u5207\u7686\u6a21\u5757\uff0c\u2f00\u4e2a\u6a21\u5757\u5bf9\u5e94\u2f00\u4e2a\u2f42\u4ef6")))),(0,n.kt)("h3",{id:"hash\u7684\u7c7b\u578b\u548c\u533a\u522b"},"hash\u7684\u7c7b\u578b\u548c\u533a\u522b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"hash"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9879\u76ee\u7ea7hash,\u9879\u76ee\u4e2d\u6709\u6587\u4ef6\u53d8\u52a8, hash\u5c31\u4f1a\u66f4\u6539"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"chunkhash"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5927\u5757\u7ea7hash, chunk, \u4e00\u822c\u662f\u51e0\u4e2amodule\u5408\u5e76\u7684, \u4e00\u4e2achunk\u7684\u6587\u4ef6, hash\u4e0d\u53d8"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"contenthash"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u8981\u8f93\u51fa\u7684bundle\u6587\u4ef6\u4e0d\u53d8, hash\u5c31\u4e0d\u53d8")))),(0,n.kt)("h3",{id:"loader\u548cplugin\u7684\u4e0d\u540c"},"Loader\u548cPlugin\u7684\u4e0d\u540c\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7528\u4e8e\u5bf9module\u7684\u6e90\u4ee3\u7801\u8fdb\u884c\u8f6c\u6362")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8ba9webpack\u62e5\u6709\u4e86\u52a0\u8f7d\u548c\u89e3\u6790\u2faeJavaScript\u2f42\u4ef6\u7684\u80fd\u2f12")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728 module.rules \u4e2d\u914d\u7f6e"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4ec0\u4e48\u7c7b\u578b\u7684\u2f42\u4ef6\uff08 test \uff09\uff0c\u4f7f\u2f64\u4ec0\u4e48\u52a0\u8f7d( loader )\u548c\u4f7f\u2f64\u7684\u53c2\u6570\uff08 options \uff09"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Plugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7528\u4e8e\u89e3\u51b3 loader \u65e0\u6cd5\u5b9e\u73b0\u7684\u5176\u4ed6\u4e8b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6269\u5c55webpack\u7684\u529f\u80fd\uff0c\u8ba9webpack\u5177\u6709\u66f4\u591a\u7684\u7075\u6d3b\u6027")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728 plugins \u4e2d\u5355\u72ec\u914d\u7f6e"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u2f00\u9879\u662f\u2f00\u4e2a plugin \u7684\u5b9e\u4f8b\uff0c\u53c2\u6570\u90fd\u901a\u8fc7\u6784\u9020\u51fd\u6570\u4f20\u2f0a")))))),(0,n.kt)("h3",{id:"\u7f16\u5199loader\u6216plugin\u7684\u601d\u8def"},"\u7f16\u5199loader\u6216plugin\u7684\u601d\u8def\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'\u7f16\u5199Loader\u65f6\u8981\u9075\u5faa\u5355\u2f00\u539f\u5219\uff0c\u6bcf\u4e2aLoader\u53ea\u505a\u2f00\u79cd"\u8f6c\u4e49"\u2f2f\u4f5c'),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2aLoader\u7684\u62ff\u5230\u7684\u662f\u6e90\u2f42\u4ef6\u5185\u5bb9\uff08source\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8fd4\u56de\u503c\u7684\u2f45\u5f0f\u5c06\u5904\u7406\u540e\u7684\u5185\u5bb9\u8f93\u51fa\uff0c\u4e5f\u53ef\u4ee5\u8c03\u2f64 this.callback() \u2f45\u6cd5\uff0c\u5c06\u5185\u5bb9\u8fd4\u56de\u7ed9webpack"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"plugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"webpack\u5728\u8fd0\u2f8f\u7684\u2f63\u547d\u5468\u671f\u4e2d\u4f1a\u2f34\u64ad\u51fa\u8bb8\u591a\u4e8b\u4ef6\uff0cPlugin \u53ef\u4ee5\u76d1\u542c\u8fd9\u4e9b\u4e8b\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u5408\u9002\u7684\u65f6\u673a\u901a\u8fc7 Webpack \u63d0\u4f9b\u7684 API \u6539\u53d8\u8f93\u51fa\u7ed3\u679c")))),(0,n.kt)("h3",{id:"\u600e\u4e48\u914d\u7f6e\u5355\u5e94\u600e\u4e48\u914d\u7f6e\u591a\u5e94"},"\u600e\u4e48\u914d\u7f6e\u5355\u2eda\u5e94\u2f64\uff1f\u600e\u4e48\u914d\u7f6e\u591a\u2eda\u5e94\u2f64\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5355\u2eda\u5e94\u2f64"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"entry \u4e2d\u6307\u5b9a\u5355\u2eda\u5e94\u2f64\u7684\u2f0a\u2f1d"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u591a\u2eda\u5e94\u2f64"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- \u591aentry\n\n    -  entry: {\npageOne: './src/pageOne/index.js',\npageTwo: './src/pageTwo/index.js',\n")),(0,n.kt)("p",{parentName:"li"},"  }"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- \u591ahtml\n\n    - plugins: [\nnew HtmlWebpackPlugin({ \n  filename: 'pageOne.html',\n  template: 'src/assets/pageOne.html'\n}),\n")),(0,n.kt)("p",{parentName:"li"},"new HtmlWebpackPlugin({\nfilename: 'pageTwo.html',\ntemplate: 'src/assets/pageOne.html'\n})]"))),(0,n.kt)("h3",{id:"webpackgulprollupparcelvite\u533a\u522b\u548c\u9002\u7528\u573a\u666f"},"webpack\u3001gulp\u3001rollup\u3001parcel\u3001vite\u533a\u522b\u548c\u9002\u7528\u573a\u666f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"gulp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4efb\u52a1\u8fd0\u884c\u7684\u6d41\u6c34\u7ebf\u5f0f\u6253\u5305"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6a21\u5757\u5316\u6253\u5305"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"webpack"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9002\u7528\u4e8e\u5927\u578b\u590d\u6742\u7684\u524d\u7aef\u7ad9\u70b9\u6784\u5efa")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8ba9\u6d4f\u89c8\u5668\u53ef\u4ee5\u517c\u5bb9cjs\u548cesm\u8bed\u6cd5"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6709\u4ee3\u7801\u6ce8\u5165"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"rollup"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9002\u7528\u4e8ejs\u5e93\u7684\u6253\u5305\u6216 \u9ad8\u7248\u672c\u65e0\u9700\u5f80\u4e0b\u517c\u5bb9\u7684\u6d4f\u89c8\u5668\u5e94\u7528\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u5f00\u53d1\u8005\u4f7f\u7528esm\u5199\u6a21\u5757"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tree-shaking\u5220\u9664\u65e0\u7528\u4ee3\u7801"),(0,n.kt)("li",{parentName:"ul"},"\u6253\u5305\u7684\u4ee3\u7801\u975e\u5e38\u5e72\u51c0\uff0c\u65e0\u6ce8\u5165\u4ee3\u7801"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cjs\u539f\u751f\u4e0d\u652f\u6301, \u9700\u8981\u589e\u52a0\u63d2\u4ef6")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"vite"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9002\u7528\u4e8e\u4e0d\u8003\u8651\u517c\u5bb9\u8001\u6d4f\u89c8\u5668\u7684\u5e94\u7528\u7a0b\u5e8f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"dev\u5f00\u53d1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"vite\u63d0\u4f9bdev\u670d\u52a1\u5668\uff0c\u4ee5\u53ca\u6bd4webpack\u5feb\u7684\u591a\u7684\u70ed\u66f4\u65b0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"prd\u751f\u4ea7"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u4e0a\u7528\u7684\u5c31\u662frollup"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"parcel"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u7b80\u5355\u5b9e\u9a8c\u6027\u9879\u76ee"),(0,n.kt)("li",{parentName:"ul"},"\u96f6\u914d\u7f6e\u8fd0\u884c")))))),(0,n.kt)("h3",{id:"\u5e38\u89c1\u7684loader"},"\u5e38\u89c1\u7684Loader"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"loader\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ece\u53f3\u5411\u5de6\u6267\u884c\u7684")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"babel-loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"presets"),(0,n.kt)("li",{parentName:"ul"},"plugins"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"style-loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0css\u5230style\u6807\u7b7e\u4e2d"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"css-loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u89e3\u91ca(interpret) @import \u548c url()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"options: importLoaders: 1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f15\u5165\u4e0a\u4e00\u4e2aloader\u5904\u7406"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"postcss-loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528postcss\u5904\u7406CSS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"postcss.config.js"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"postcss-preset-env(\u9884\u8bbe)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"autoprefixer"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7c7bbabel, \u5904\u7406css\u517c\u5bb9\u6027\u3001\u5355\u4f4d\u8f6c\u5316\u7b49")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"sass-loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u628asass\u8f6c\u6210css"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"vue-loader"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},".vue\u89e3\u6790,\u7ffb\u8bd1\u6210html css js")))),(0,n.kt)("h3",{id:"\u5e38\u7684plugin"},"\u5e38\u2ec5\u7684Plugin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"UglifyjsWebpackPlugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u538b\u7f29js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CopyWebpackPlugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u590d\u5236\u6587\u4ef6\u6216\u76ee\u5f55"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DefinePlugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7684\u5168\u5c40\u5e38\u91cf"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DllPlugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8fde\u63a5\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u5e38\u7528\u4f46\u53c8\u6784\u5efa\u65f6\u95f4\u957f\u7684\u4ee3\u7801\u63d0\u524d\u6253\u5305\u597d"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u9762\u518d\u6253\u5305\u7684\u65f6\u5019\u5c31\u8df3\u8fc7\u539f\u6765\u7684\u672a\u6253\u5305\u4ee3\u7801\uff0c\u76f4\u63a5\u7528 dll"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"HtmlWebpackPlugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7b80\u5316\u4e86HTML\u6587\u4ef6\u7684\u521b\u5efa"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"MinChunkSizePlugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5408\u5e76\u5c0f\u4e8e minChunkSize \u5927\u5c0f\u7684 chunk\uff0c"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SplitChunksPlugin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u62c6\u5206chunks")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"XMind: ZEN - Trial Version")))}c.isMDXComponent=!0}}]);