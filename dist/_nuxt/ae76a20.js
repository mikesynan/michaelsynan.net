(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{195:function(t,e,r){var content=r(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("aa8e928c",content,!0,{sourceMap:!1})},198:function(t,e,r){"use strict";var n=r(195);r.n(n).a},199:function(t,e,r){(e=r(27)(!1)).push([t.i,".clear-navbar{padding-top:98px}",""]),t.exports=e},215:function(t,e,r){"use strict";r.r(e);r(16);var n=r(2),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","description","img","slug"]).sortBy("createdAt","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()}},c=(r(198),r(17)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clear-navbar"},[r("div",{staticClass:"text-left container mx-auto px-2 py-2"},[r("ul",{staticClass:"text-left"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",{staticClass:"px-2 py-2 my-2 bg-opal hover:bg-darkcyan2 hover:shadow rounded border-solid border-4 border-gray-600 hover:border-black hover:text-white transition duration-100 ease-in-out"},[r("h2",{staticClass:"font-semibold"},[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))])])])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);