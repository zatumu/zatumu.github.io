"use strict";(self.webpackChunkmyBlog=self.webpackChunkmyBlog||[]).push([[772,382,766],{455:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),r=n(5444),l=n(237),u=function(){return a.createElement("header",{className:"Header-module--container--3I6Xw"},a.createElement("div",{className:"Header-module--inner--3rdw3"},a.createElement("h1",{className:"Header-module--siteName--2WuQ0"},a.createElement(r.rU,{to:"/"},"Header")),a.createElement(l.default,null)))}},9932:function(e,t,n){n.r(t);var a=n(7294);t.default=function(e){var t,n;if("undefined"!=typeof toLowerCase&&"undefined"!=typeof indexOf){var r=e.title,l=e.extract,u=e.includes,c=r.toLowerCase().indexOf(u.toLowerCase()),s=c+u.length,o=r.slice(c,s);t=r.replace(o,'<span class="highLight">'+o+"</span>");var i=l.toLowerCase().indexOf(u.toLowerCase()),f=i+u.length,m=l.slice(i,f);n=l.replace(m,'<span class="highLight">'+m+"</span>")}return a.createElement("div",null,a.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),a.createElement("br",null),a.createElement("span",{dangerouslySetInnerHTML:{__html:n}}))}},237:function(e,t,n){n.r(t);var a=n(7294),r=n(5444),l=n(9932),u=function(e){var t=(0,r.K2)("4157272165"),n=(0,a.useState)([]),u=(n[0],n[1]);(0,a.useEffect)((function(){var e=[];t.allMarkdownRemark.edges.map((function(t){e.push(t.node.frontmatter)})),u(e)}),[]);var c=(0,a.useState)(""),s=c[0],o=c[1];(0,a.useEffect)((function(){var t;return t=e.focus&&""!==e.value?setTimeout((function(){o("active")}),100):setTimeout((function(){o("")}),100),function(){clearTimeout(t)}}),[e.focus,e.value]);var i=(0,a.useState)([]),f=i[0];i[1];if("undefined"!=typeof toLowerCase);return(0,a.useEffect)((function(){""!==e.value&&search()}),[e.value]),a.createElement("div",{className:s},a.createElement("div",{className:"resultInner"},a.createElement("span",{className:"res"},a.createElement("b",null,f.length),"件ヒットしました"),a.createElement("ul",null,f.map((function(t){return a.createElement("li",{key:t.slug},a.createElement(r.rU,{to:"/"+t.slug+"/"},a.createElement(l.default,{title:t.title,extract:t.extract,includes:e.value})))})))))};t.default=function(e){var t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useState)(""),c=l[0],s=l[1];return a.createElement("div",{className:e.className,focus:n},a.createElement("input",{type:"text",onFocus:function(){r(!0)},onBlur:function(){r(!1)},onChange:function(e){s(e.target.value)}}),a.createElement(u,{focus:n,value:c}))}}}]);
//# sourceMappingURL=component---src-pages-components-header-js-1a3ed7c7a8fe7566c144.js.map