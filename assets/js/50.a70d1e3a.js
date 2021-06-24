(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{292:function(t,e,a){"use strict";a.r(e);var r=a(4),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"微前端架构调研与思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构调研与思考","aria-hidden":"true"}},[t._v("#")]),t._v(" 微前端架构调研与思考")]),t._v(" "),a("p",[t._v("目前，我们前端团队的业务主要在官网以及相关的用户中心、商城等系统中，每个系统都有独立的域名，通过刷新浏览器或者新开标签页的方式实现系统间的跳转，即 MPA 模式，MPA 模式的优点在于部署简单、各应用之间硬隔离，天生具备技术栈无关、独立开发、独立部署的特性。缺点也很明显，应用之间切换会造成浏览器重刷，由于产品域名之间相互跳转，流程体验上会存在断点。相较于 MAP 模式来说，SPA 天生具备体验上的优势，应用直接无刷新切换，能极大的保证多产品之间流程操作串联时的流程性。缺点则在于各应用技术栈之间是强耦合的。")]),t._v(" "),a("p",[t._v("有没有一种方式能够兼顾 MPA 和 SPA 两者的优势，从而构建出一个即保证应用具备独立开发权的同时，又能将它们整合到一起保证产品完整的流程体验的前端系统呢？微前端架构是一个可靠的答案。")]),t._v(" "),a("h2",{attrs:{id:"微前端架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构","aria-hidden":"true"}},[t._v("#")]),t._v(" 微前端架构")]),t._v(" "),a("p",[t._v("微前端理念来源于后端微服务实践，希望在前端系统中，各个子应用能够做到，技术栈无关、独立开发、独立部署、应用运行时独立。")]),t._v(" "),a("p",[t._v("目前社区里比较成体系的实践方案有 "),a("a",{attrs:{href:"https://github.com/CanopyTax/single-spa",target:"_blank",rel:"noopener noreferrer"}},[t._v("single-spa"),a("OutboundLink")],1),t._v(" 以及在 single-spa 基础上开发的 "),a("a",{attrs:{href:"https://github.com/umijs/qiankun",target:"_blank",rel:"noopener noreferrer"}},[t._v("qiankun"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"single-spa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-spa","aria-hidden":"true"}},[t._v("#")]),t._v(" single-spa")]),t._v(" "),a("p",[t._v("single-spa 的核心思路是将每个子应用都打包成一个独立的 js 文件，通过 "),a("code",[t._v("registerApplication")]),t._v(" 这个接口来约定子应用与主框架的交互行为，比如：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'angularJS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/angularJS/angularJS.app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pathPrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/angularJS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("定义了子应用名称为 'angularJS'，应用入口地址为 "),a("code",[t._v("'./src/angularJS/angularJS.app.js'")]),t._v("，single-spa 通过 "),a("a",{attrs:{href:"https://github.com/systemjs/systemjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("SystemJS"),a("OutboundLink")],1),t._v(" 来加载模块，当浏览器路径以 "),a("code",[t._v("'/angularJS'")]),t._v(" 开头时加载子应用。同时，single-spa 还定义了应用的生命周期方法，子应用可以实现这些生命周期方法来做一些初始化和垃圾清理的操作。")]),t._v(" "),a("p",[t._v("single-spa 实现了子应用技术栈无关、独立开发、独立部署的关键特性，在此基础上我们甚至可以基于几个子应用组合出一个新的应用出来，极大的提高了业务灵活性。但是 single-spa 也有不足的地方，比如把所有资源都打包到一个 js 文件里，包括 css 、图片等资源，会造成包体积庞大，且无法利用并行加载。另外还存在全局变量、监听污染、样式污染等问题，需要制定一个规范来约束接入的子应用。")]),t._v(" "),a("h3",{attrs:{id:"qiankun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qiankun","aria-hidden":"true"}},[t._v("#")]),t._v(" qiankun")]),t._v(" "),a("p",[t._v("qiankun 是蚂蚁金服在 single-spa 基础上开发的微服务框架，在 single-spa 的基础上增加了通过 html 加载子应用，子应用样式、js 运行环境隔离等特性。")]),t._v(" "),a("h4",{attrs:{id:"html-entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-entry","aria-hidden":"true"}},[t._v("#")]),t._v(" html entry")]),t._v(" "),a("p",[t._v("html entry 本质上是一个应用静态资源表，可以理解成如下形式：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ''"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scripts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//xxx.yyy.com/index.js'], css: ['//xxx.yyy.com/index.css']})")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("html entry 相较于 single-spa 的 js entry 而言更加灵活，可以直接将子应用打出来 html 作为入口，框架会将 HTML document 作为子节点塞到主框架的容器中。子应用接入成本几乎为零，开发体验与独立开发时保持不变。")]),t._v(" "),a("h4",{attrs:{id:"样式隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式隔离","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式隔离")]),t._v(" "),a("p",[t._v("由于微前端场景下，不同技术栈的子应用会被集成到同一个运行时中，子应用之间难免会出现样式互相干扰的问题，而且这种问题往往要等到非常后期才会被发现。样式隔离有两个思路，第一个是使用类似于 CSS Module 或者 BEM 的方案，本质上是通过约定来避免冲突，对于新项目来说，这种方案成本很低，但是如果涉及到与老项目一同运行，那改造成本将会非常高昂。第二个思路是在子应用卸载的时候同时卸载掉样式表。技术原理是浏览器会对所有的样式表的插入、移除做整个 CSSOM 的重构，从而达到 插入、卸载 样式的目的。这样即能保证，在一个时间点里，只有一个应用的样式表是生效的。")]),t._v(" "),a("p",[t._v("qiankun 框架采用的是第二种思路，使用 "),a("a",{attrs:{href:"https://github.com/kuitos/import-html-entry",target:"_blank",rel:"noopener noreferrer"}},[t._v("import-html-entry"),a("OutboundLink")],1),t._v(" ，通过解析 html entry 中的 "),a("code",[t._v("<link>")]),t._v(" 和 "),a("code",[t._v("<style>")]),t._v(" 标签获取样式信息，下载样式文件，并最终以 "),a("code",[t._v("<style>")]),t._v(" 标签的形式插入到主框架的容器中去，在子应用卸载时一并移除。")]),t._v(" "),a("h4",{attrs:{id:"js-运行时沙箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-运行时沙箱","aria-hidden":"true"}},[t._v("#")]),t._v(" js 运行时沙箱")]),t._v(" "),a("p",[t._v("相较于样式隔离来说，js 隔离显得更为重要。因为在 SPA 的场景下，类似内存泄漏、全局变量冲突等问题的影响会被放大，可能某个子应用内的问题会影响到其他应用的运行。而且这种问题通常非常难以排查和定位，一旦发生，解决成本非常高。"),a("br"),t._v("\nqiankun 框架为每个子应用启用了一个沙箱环境，子应用内所有的 js 代码都是在这个沙箱环境中执行，不会影响到全局。")]),t._v(" "),a("blockquote",[a("p",[t._v("qiankun 的沙箱环境基于 "),a("code",[t._v("Proxy")]),t._v(" 实现，对浏览器有一定的要求，IE 无法兼容。\n总体来说，微前端架构旨在解决单体应用过度庞大引起的开发维护困难的问题，将独立的子系统拆分出来，独立开发、独立部署，完成子系统间的解耦。同时也提供了将拆分出来的子应用重新组合成新应用的可能性。")])]),t._v(" "),a("h2",{attrs:{id:"服务端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),a("p",[t._v("微前端本质是 SPA 的技术方式，只能在客户端完成页面的渲染工作。目前，前端团队的项目里都是通过 jade 模板完成页面生成，UI 层使用 JQuery 完成交互。虽然技术栈比较老旧，但是用户体验与现在流行的服务端渲染框架是一致的。当采用微前端架构之后，原有的服务端模板不复存在，如何保证 SEO 等功能不丢失呢？")]),t._v(" "),a("p",[t._v("单纯就 SEO 而言，可以通过为搜索引擎定制页面的形式，将预先渲染好的页面提供给搜索引擎。这块社区也有相关的技术方案，比较成熟的有 "),a("a",{attrs:{href:"https://prerender.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("prerender"),a("OutboundLink")],1),t._v("，还有 "),a("a",{attrs:{href:"https://github.com/GoogleChrome/puppeteer",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer"),a("OutboundLink")],1),t._v("。这两个方案本质上都是通过 CDP（Chrome Devtools Protocol）来控制 Chrome 浏览器。puppeteer 可定制化能力更强，可以阻断图片、样式等请求，已加快页面生成时间和节省服务端带宽。")]),t._v(" "),a("p",[t._v("如果我们希望通过服务端渲染解决首屏的性能和体验问题，那么单纯依靠 prerender 或者 puppeteer 来做服务端渲染就会比较粗糙，在某些场景下会对用户体验造成一定的影响。比如轮播图这样的组件，在完成服务端渲染后，会自动运行，这时候返回的 html 中轮播图可能是一个两张图片切换的过渡状态，对于用户来说会显得比较怪异。")]),t._v(" "),a("h2",{attrs:{id:"骨架屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏","aria-hidden":"true"}},[t._v("#")]),t._v(" 骨架屏")]),t._v(" "),a("p",[t._v("如果抛开服务端渲染，如何弥补 SPA 应用首屏用户体验缺失的问题呢？还有一种方案就是骨架屏。骨架屏的核心思路是通过展示占位元素的方式，减少用户在白屏时间内的焦虑感。\n目前社区做骨架屏主要有两个思路，一个是手写骨架屏，react 和 vue 都有成熟的解决方案，比如 "),a("a",{attrs:{href:"https://github.com/danilowoz/react-content-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-content-loader"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://github.com/egoist/vue-content-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-content-loader"),a("OutboundLink")],1),t._v("。手写骨架屏的优势是与页面真实内容完全一致，用户体验最好，缺点是一旦页面发生变更需要同步修改骨架屏。")]),t._v(" "),a("p",[t._v("第二个思路是通过预渲染的形式，预先获取页面信息，再对页面进行样式覆盖和结构精简，生成骨架屏。比较成体系的实践方式是饿了么前端基于 vue 和 webpack 做的"),a("a",{attrs:{href:"https://github.com/Jocs/jocs.github.io/issues/22",target:"_blank",rel:"noopener noreferrer"}},[t._v("骨架屏自动化生成方案"),a("OutboundLink")],1),t._v("，使用了 "),a("a",{attrs:{href:"https://github.com/ElemeFE/page-skeleton-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("page-skeleton-webpack-plugin"),a("OutboundLink")],1),t._v(" 这个插件来做最终的骨架屏生成。")]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("微前端架构是一套不错的前端系统解耦方案，同时兼备了 SPA 的用户体验。对于纯客户端渲染带来的体验问题，可以通过骨架屏等方案来进行弥补。虽然在性能层面比服务端渲染略有损失，但是换来的是整体开发和运维成本的降低，同时也为多项目管理提供了新的思路。")])])},[],!1,null,null,null);e.default=s.exports}}]);