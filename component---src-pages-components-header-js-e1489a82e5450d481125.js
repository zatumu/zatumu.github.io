"use strict";(self.webpackChunkmyBlog=self.webpackChunkmyBlog||[]).push([[772,382,766],{455:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(7294),r=n(5444),u=n(237),l=function(){return a.createElement("header",{className:"Header-module--container--3I6Xw"},a.createElement("div",{className:"Header-module--inner--3rdw3"},a.createElement("h1",{className:"Header-module--siteName--2WuQ0"},a.createElement(r.rU,{to:"/"},"Header")),a.createElement(u.default,null)))}},9932:function(e,t,n){n.r(t);var a=n(7294);t.default=function(e){var t=e.str,n=e.includes,r=t.toLowerCase().indexOf(n.toLowerCase()),u=r+n.length,l=t.slice(r,u),c=t.replace(l,'<span style="background: rgba(255, 250, 118, 0.4); padding: 3px 0">'+l+"</span>");return a.createElement("span",{dangerouslySetInnerHTML:{__html:c}})}},237:function(e,t,n){n.r(t);var a=n(7294),r=n(5444),u=n(9932),l=function(e){var t=(0,r.K2)("4157272165"),n=(0,a.useState)([]),l=n[0],c=n[1];(0,a.useEffect)((function(){var e=[];t.allMarkdownRemark.edges.map((function(t){e.push(t.node.frontmatter)})),c(e)}),[]);var s=(0,a.useState)(""),o=s[0],i=s[1];(0,a.useEffect)((function(){var t;return t=e.focus&&""!==e.value?setTimeout((function(){i("active")}),100):setTimeout((function(){i("")}),100),function(){clearTimeout(t)}}),[e.focus,e.value]);var f=(0,a.useState)([]),m=f[0],d=f[1];return(0,a.useEffect)((function(){var t,n;""!==e.value&&(t=e.value.toLowerCase(),n=l.filter((function(e){return-1!==("\n      "+e.title.toLowerCase()+"\n      "+e.extract.toLowerCase()+"\n    ").indexOf(t)})),d(n))}),[e.value]),a.createElement("div",{className:o},a.createElement("div",{className:"resultInner"},a.createElement("span",{className:"res"},a.createElement("b",null,m.length),"件ヒットしました"),a.createElement("ul",null,m.map((function(t){return a.createElement("li",{key:t.slug},a.createElement(r.rU,{to:"/post/"+t.slug+"/"},a.createElement(u.default,{str:t.title,includes:e.value})))})))))};t.default=function(e){var t=(0,a.useState)(!1),n=t[0],r=t[1],u=(0,a.useState)(""),c=u[0],s=u[1];return a.createElement("div",{className:e.className,focus:n},a.createElement("input",{type:"text",onFocus:function(){r(!0)},onBlur:function(){r(!1)},onChange:function(e){s(e.target.value)}}),a.createElement(l,{focus:n,value:c}))}}}]);
//# sourceMappingURL=component---src-pages-components-header-js-e1489a82e5450d481125.js.map