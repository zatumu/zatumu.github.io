"use strict";(self.webpackChunkmyBlog=self.webpackChunkmyBlog||[]).push([[772,382,766],{455:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(7294),u=n(5444),r=n(237),l=function(){return a.createElement("header",{className:"Header-module--container--3I6Xw"},a.createElement("div",{className:"Header-module--inner--3rdw3"},a.createElement("h1",{className:"Header-module--siteName--2WuQ0"},a.createElement(u.rU,{to:"/"},"Header")),a.createElement(r.default,null)))}},9932:function(e,t,n){n.r(t);n(7294);if("undefined"!=typeof toLowerCase&&"undefined"!=typeof indexOf);t.default=TextHighlighter},237:function(e,t,n){n.r(t);var a=n(7294),u=n(5444),r=n(9932),l=function(e){var t=(0,u.K2)("4157272165"),n=(0,a.useState)([]),l=(n[0],n[1]);(0,a.useEffect)((function(){var e=[];t.allMarkdownRemark.edges.map((function(t){e.push(t.node.frontmatter)})),l(e)}),[]);var c=(0,a.useState)(""),s=c[0],o=c[1];(0,a.useEffect)((function(){var t;return t=e.focus&&""!==e.value?setTimeout((function(){o("active")}),100):setTimeout((function(){o("")}),100),function(){clearTimeout(t)}}),[e.focus,e.value]);var f=(0,a.useState)([]),i=f[0];f[1];if("undefined"!=typeof toLowerCase);return(0,a.useEffect)((function(){""!==e.value&&search()}),[e.value]),a.createElement("div",{className:s},a.createElement("div",{className:"resultInner"},a.createElement("span",{className:"res"},a.createElement("b",null,i.length),"件ヒットしました"),a.createElement("ul",null,i.map((function(t){return a.createElement("li",{key:t.slug},a.createElement(u.rU,{to:"/"+t.slug+"/"},a.createElement(r.default,{title:t.title,extract:t.extract,includes:e.value})))})))))};t.default=function(e){var t=(0,a.useState)(!1),n=t[0],u=t[1],r=(0,a.useState)(""),c=r[0],s=r[1];return a.createElement("div",{className:e.className,focus:n},a.createElement("input",{type:"text",onFocus:function(){u(!0)},onBlur:function(){u(!1)},onChange:function(e){s(e.target.value)}}),a.createElement(l,{focus:n,value:c}))}}}]);
//# sourceMappingURL=component---src-pages-components-header-js-2562c4d71f49fd01b721.js.map