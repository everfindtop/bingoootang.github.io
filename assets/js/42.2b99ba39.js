(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{251:function(t,r,e){"use strict";e.r(r);var a=e(4),i=Object(a.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安卓应用架构最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安卓应用架构最佳实践","aria-hidden":"true"}},[t._v("#")]),t._v(" 安卓应用架构最佳实践")]),t._v(" "),e("p",[t._v("在上一篇文章 "),e("router-link",{attrs:{to:"/blog/2018/10/17/activity-basics/"}},[t._v("Activity 必知")]),t._v("中，我们已经知道移动应用与桌面应用交互模式的不同。同时，由于移动端资源有限，系统随时可能关闭应用进程，所以，我们不能将应用状态或数据存储在应用组件中，组件彼此之间也不能有很强的依赖关系。那么，如何来组织应用的各个模块、组件才能保证一个完美的用户体验呢？")],1),t._v(" "),e("h2",{attrs:{id:"通用架构原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用架构原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用架构原则")]),t._v(" "),e("p",[t._v("如果不能通过应用组件来保存应用数据或状态的话，安卓如何来设计应用呢？")]),t._v(" "),e("h3",{attrs:{id:"关注点分离（separation-of-concerns）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关注点分离（separation-of-concerns）","aria-hidden":"true"}},[t._v("#")]),t._v(" 关注点分离（separation of concerns）")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Separation_of_concerns",target:"_blank",rel:"noopener noreferrer"}},[t._v("关注点分离"),e("OutboundLink")],1),t._v(" 是最重要的基础原则之一。刚刚接触编程的人常常有一个共同的问题，就是经常会在一个函数里实现所有的逻辑，导致函数又大又长、非常复杂，后期无法维护。这正是关注点分离原则反对的。关注点分离原则要求将应用逻辑进行划分，从另一个方向可以理解为单一职责原则。也就说，组件的功能尽量单一，比如展示组件仅负责展示组件而不负责处理和保存数据。")]),t._v(" "),e("h3",{attrs:{id:"数据驱动-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动-ui","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据驱动 UI")]),t._v(" "),e("p",[t._v("通过数据模型来驱动 UI，持久化数据模型更加。数据模型（model）负责处理应用数据，它独立于视图对象和应用组件，与生命周期无关。")]),t._v(" "),e("h2",{attrs:{id:"推荐应用架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐应用架构","aria-hidden":"true"}},[t._v("#")]),t._v(" 推荐应用架构")]),t._v(" "),e("p",[t._v("在安卓中，我们通常通过如下图来组织应用。"),e("br"),t._v(" "),e("img",{attrs:{src:"/images/2018/android-app-architecture-best-practise/architecture.jpg",alt:"IMAGE"}})]),t._v(" "),e("p",[t._v("从图中可以看出，每个组件仅仅依赖于它下一层的组件。比如，Activity 仅仅依赖于 ViewModel。")]),t._v(" "),e("p",[t._v("这个设计创造了一致性的用户体验。不管用户什么时候重新打开应用，都可以看到之前缓存的数据。如果数据过期的话，Repository 将会负责更新数据。")]),t._v(" "),e("p",[t._v("在上图中，每个组件都有官方提供的实现，比如在 ViewModel 中可以通过 LiveData 来做数据和 UI 的同步，在 Model 中通过 Room 来做数据持久化。由于太过于细节，这里不做展开，可以在文尾的参考链接中查询详细使用。")]),t._v(" "),e("h2",{attrs:{id:"一些建议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些建议","aria-hidden":"true"}},[t._v("#")]),t._v(" 一些建议")]),t._v(" "),e("p",[t._v("编程是一件富有创造性的工作，同一个问题有不同的解决方法。不过通过遵循下面的一些建议，更有利于构建一个长期来看更加健壮、可测试、易维护的应用。")]),t._v(" "),e("ul",[e("li",[t._v("不要将应用的入口点（Activity、Service 等）作为数据源。"),e("br"),t._v("\n每个用户的交互不同，系统的健康状况不同，每个组件的生命时间也不确定。因此，应用入口点应该从其他组件查询与该入口点有关的数据子集。")]),t._v(" "),e("li",[t._v("为应用中的每个模块定义边界。"),e("br"),t._v("\n也就是单一职责原则。比如，不要让加载数据的逻辑散落在不同的模块中，同理也不要将不同职责的功能放在一个模块里。")]),t._v(" "),e("li",[t._v("每个模块对外暴露的尽量少。"),e("br"),t._v("\n不要将模块中所有实现细节都向外暴露，虽然短期内使用会十分的方便，但是长期来看，随着代码规模的扩大，技术债务将会越来越大。")]),t._v(" "),e("li",[t._v("考虑如何让每个模块单独可测试。"),e("br"),t._v("\n比如，一个定义清晰的从网络加载数据的 API 可以让一个使用数据并将数据保存在本地数据库的模块变得更容易测试。相反，如果将这两个逻辑混在一起，或者分散在整个代码库中，则测试将很难进行。")]),t._v(" "),e("li",[t._v("聚焦于应用特有的核心功能，使得应用可以从其他应用中脱颖而出。"),e("br"),t._v("\n不要试图重新发明轮子，聚焦于应用特有的核心功能，让安卓系统或者其他库完成重复功能，不如相机等。")]),t._v(" "),e("li",[t._v("持久化尽可能多的彼此之间相关的数据。"),e("br"),t._v("\n通过如此，可以保证用户即使在离线状态下的应用功能体验。")]),t._v(" "),e("li",[t._v("单一数据源。"),e("br"),t._v("\n保证数据只有一个来源。Single source of truth。")])]),t._v(" "),e("p",[t._v("参考链接：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.android.com/jetpack/docs/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Guide to app architecture"),e("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=i.exports}}]);