(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{204:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(218),o=n(209);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},209:function(t,e,n){"use strict";var a=n(217),r=n(0),i=n.n(r),o=n(224),c=n.n(o),l=function(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,l=a.data.site,s=e||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:o||l.siteMetadata.title,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o||l.siteMetadata.title},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o||l.siteMetadata.title},{name:"twitter:description",content:s}].concat(r)})};l.defaultProps={lang:"en",meta:[],description:""};var s=l;n.d(e,"a",function(){return s})},217:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Andy Tan Dev Portfolio","description":"A simple portfolio website created by using GatsbyJS","author":"Andy Tan"}}}}')},218:function(t,e,n){"use strict";n(219);var a=n(0),r=n.n(a),i=n(206),o=n(55),c=n(207);function l(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  font-weight: bold;\n"]);return l=function(){return t},t}var s=Object(c.default)(i.e)(l()),u=function(){return r.a.createElement(i.c,{as:"footer",my:4,justifyContent:"center",alignItems:"center"},r.a.createElement(s,null,"© ",(new Date).getFullYear()," | Built with  "),r.a.createElement(i.d,{href:"https://www.gatsbyjs.org",sx:{color:"primary",textDecoration:"none"}},r.a.createElement(s,null,"Gatsby")),r.a.createElement(s,null,"  by Andy Tan"))},m=(n(22),n(208));function d(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  margin: 0 1.2rem;\n  padding: 0.5rem 0;\n  font-size: 1.2rem;\n  cursor: pointer;\n"]);return d=function(){return t},t}var f=Object(c.default)(m.Link)(d()),p={smooth:"easeInOutQuart",spy:!0,hashSpy:!0,duration:700,activeClass:"activeLink",onClick:function(){setTimeout(function(){m.animateScroll.scrollMore(10)},600)}},b=function(){var t=Object(o.d)(),e=t[0],n=t[1],c=Object(a.useCallback)(function(){n("dark"===e?"light":"dark")},[e,n]);return Object(a.useEffect)(function(){setTimeout(function(){m.scrollSpy.update()},100)},[]),r.a.createElement(i.c,{px:4,py:2,width:1,alignItems:"center",sx:{position:"fixed","& .activeLink":{borderBottomWidth:"5px",borderBottomStyle:"solid",borderBottomColor:"primary"}}},r.a.createElement(f,Object.assign({to:"landing"},p),r.a.createElement(i.e,{fontWeight:"bold",as:"h2"},"Andy Tan")),r.a.createElement(i.a,{mx:"auto"}),r.a.createElement(f,Object.assign({to:"about-me"},p),"About Me"),r.a.createElement(f,Object.assign({to:"skills"},p),"Skills"),r.a.createElement(f,Object.assign({to:"projects"},p),"Projects"),r.a.createElement(i.b,{variant:"outline",ml:3,onClick:c},e))},E=n(209),w=n(64),g=n(106);function h(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n        body {\n          &,\n          & * {\n            &::-webkit-scrollbar {\n              width: 10px;\n            }\n\n            &::-webkit-scrollbar-thumb {\n              background: ",";\n            }\n\n            &::-webkit-scrollbar-track {\n              background-color: ",";\n            }\n          }\n        }\n      "]);return h=function(){return t},t}var y=function(){var t=Object(o.e)().theme.colors,e=t.primary,n=t.text;return r.a.createElement(w.a,{styles:Object(w.c)(h(),e,n)})},v=function(t){var e=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(o.b,{theme:g.a},r.a.createElement(i.a,{as:"main",width:1},r.a.createElement(E.a,null),r.a.createElement(y,null),e)),r.a.createElement(u,null))};n.d(e,"a",function(){return v})}}]);
//# sourceMappingURL=component---src-pages-404-tsx-c8764e2c8db4d088738f.js.map