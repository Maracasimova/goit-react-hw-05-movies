(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{854:function(){},829:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/reviews?api_key=").concat("c850ec5ba16f4b711da56dfde72a63cf"),e.next=3,i.Z.get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=n(791),h=n(689),l=n(854),p=n.n(l),f="Reviews_container__rhKnN",v="Reviews_list__pCzae",d="Reviews_author__Y70Lx",m=n(184);function x(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,o.useState)(!1),l=(0,a.Z)(i,2),x=l[0],w=l[1],_=(0,o.useState)(null),k=(0,a.Z)(_,2),j=k[0],b=k[1],Z=(0,h.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,u(Z);case 4:t=e.sent,n=t.results,s(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(e.t0);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),(0,m.jsxs)("div",{className:f,children:[x&&(0,m.jsx)(p(),{}),j&&(0,m.jsx)("p",{children:"Something wrong"}),n.length>0?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("ul",{className:v,children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,m.jsxs)("li",{children:[(0,m.jsx)("p",{className:d,children:n}),(0,m.jsx)("p",{children:r})]},t)}))})}):(0,m.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=829.32fc61f8.chunk.js.map