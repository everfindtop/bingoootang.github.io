(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(t,a,r){},241:function(t,a,r){"use strict";var s=r(195);r.n(s).a},250:function(t,a,r){"use strict";r.r(a);var s={data:function(){return{data:"",error:""}},methods:{onChange:function(t){this.data=t.currentTarget.value,this.error=""},doFormat:function(){try{var t=/\{(.|\s)+\}/.exec(this.data);if(t){var a=JSON.parse(t[0]);this.data=JSON.stringify(a,null,4)}else this.error="\n\n===JSON 数据不合法",this.data+=this.error}catch(t){this.error="\n\n===JSON 数据不合法: ".concat(t.stack),this.data+=this.error}}}},n=(r(241),r(4)),e=Object(n.a)(s,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("section",{staticClass:"wrapper"},[a("textarea",{class:this.error?"error":"",domProps:{value:this.data},on:{change:this.onChange}}),this._v(" "),a("div",{staticClass:"toolbar"},[a("span",{staticClass:"button",on:{click:this.doFormat}},[this._v("格式化")])])])])},[],!1,null,"c8a1eb1a",null);a.default=e.exports}}]);