"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29,160],{29:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(861),s=n(439),a=n(757),i=n.n(a),c=n(791),o=n(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat("c850ec5ba16f4b711da56dfde72a63cf"),e.next=3,o.Z.get(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=n(689),m="Home_title__L087v",p=n(87),f=n(160),v="MoviesList_moviesList__P6SP5",d="MoviesList_list__0Owr9",h="MoviesList_link__8rTGX",_="MoviesList_img__v4jFC",x="MoviesList_movieName__HnGim",g=n(184);function w(e){var t=e.movies,n=e.location;return(0,g.jsx)("ul",{className:v,children:t.length>0&&t.map((function(e){var t=e.id,r=e.title,s=e.poster_path;return(0,g.jsx)("li",{className:d,id:t,children:(0,g.jsxs)(p.rU,{className:h,to:{pathname:"/movies/".concat(t),state:{from:{location:n}}},children:[(0,g.jsx)("img",{className:_,src:s?"https://image.tmdb.org/t/p/w500".concat(s):f,alt:"poster",width:"",height:""}),(0,g.jsx)("p",{className:x,children:r})]})},t)}))})}function b(){var e=(0,l.TH)(),t=(0,c.useState)([]),n=(0,s.Z)(t,2),a=n[0],o=n[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,n=t.results,o(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{className:m,children:"Trending today"}),(0,g.jsx)(w,{movies:a,location:e})]})}},160:function(e,t,n){e.exports=n.p+"static/media/noPoster.63581b434a994b65ee43.png"}}]);
//# sourceMappingURL=29.b9be44d0.chunk.js.map