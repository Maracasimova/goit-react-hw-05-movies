"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[426,160],{155:function(e,t,r){r.d(t,{Z:function(){return m}});r(791);var n=r(87),a=r(160),s="MoviesList_moviesList__P6SP5",i="MoviesList_list__0Owr9",c="MoviesList_link__8rTGX",o="MoviesList_img__v4jFC",u="MoviesList_movieName__HnGim",l=r(184);function m(e){var t=e.movies,r=e.location;return(0,l.jsx)("ul",{className:s,children:t.length>0&&t.map((function(e){var t=e.id,s=e.title,m=e.poster_path;return(0,l.jsx)("li",{className:i,id:t,children:(0,l.jsxs)(n.rU,{className:c,to:"/movies/".concat(t),state:{from:r},children:[(0,l.jsx)("img",{className:o,src:m?"https://image.tmdb.org/t/p/w500".concat(m):a,alt:"poster",width:"",height:""}),(0,l.jsx)("p",{className:u,children:s})]})},t)}))})}},426:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(87),u=r(689),l=r(243);l.Z.defaults.baseURL="https://api.themoviedb.org/3/";var m=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat("c850ec5ba16f4b711da56dfde72a63cf","&page=1&query=").concat(t),e.next=3,l.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=r(155),f="SearchForm_container__7Y-wu",p="SearchForm_input__HOxJo",v="SearchForm_btn__TXrR3",_=r(184);function d(e){var t=e.handleSubmit,r=e.searchMovie,n=e.setSearchMovie;return(0,_.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),t()},children:[(0,_.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:r,className:p}),(0,_.jsx)("button",{className:v,type:"submit",children:"\ud83d\udd0d"})]})}function x(){var e=(0,c.useState)(""),t=(0,a.Z)(e,2),r=t[0],s=t[1],l=(0,c.useState)([]),f=(0,a.Z)(l,2),p=f[0],v=f[1],x=(0,o.lr)(),b=(0,a.Z)(x,2),g=b[0],j=b[1],w=(0,u.TH)();(0,c.useEffect)((function(){var e=g.get("query");if(e){var t=function(){var t=(0,n.Z)(i().mark((function t(){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:r=t.sent,n=r.results,v(n),s(e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[g]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("header",{children:(0,_.jsx)(d,{handleSubmit:function(){r.trim()&&(j({query:r}),s(""))},searchMovie:r,setSearchMovie:s})}),(0,_.jsx)(h.Z,{movies:p,location:w})]})}},160:function(e,t,r){e.exports=r.p+"static/media/noPoster.63581b434a994b65ee43.png"}}]);
//# sourceMappingURL=426.15d40439.chunk.js.map