"use strict";(self.webpackChunkyoutube=self.webpackChunkyoutube||[]).push([[207],{6207:function(e,t,n){n.r(t);var c=n(4165),r=n(5861),a=n(9439),s=n(2791),i=n(7689),o=n(1087),u=n(3585),l=n(676),d=n(9434),h=n(1123),x=n(184);t.default=function(){var e=(0,i.UO)().id,t=(0,s.useState)([]),n=(0,a.Z)(t,2),f=n[0],p=n[1],m=((0,d.v9)((function(e){return e.app.isMenuOpen})),(0,d.v9)((function(e){return e.app.Theme})));(0,s.useEffect)((function(){v()}),[e]);var v=function(){var t=(0,r.Z)((0,c.Z)().mark((function t(){var n,r;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(e,"%2023&key=").concat(u.JO));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,p(r.items);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{children:!f.length&&(0,x.jsx)(h.nH,{})}),(0,x.jsx)("div",{className:"flex flex-col items-center  ".concat("ml-[500px]"," p-16"),children:f&&f.map((function(e){return(0,x.jsx)(o.rU,{to:"/watch?v="+e.id.videoId,children:(0,x.jsx)(l.Z,{info:e,Theme:m})},e.id.videoId)}))})]})}},676:function(e,t,n){n(2791);var c=n(184);t.Z=function(e){var t=e.info,n=e.flag,r=e.Theme,a=t.snippet,s=a.thumbnails,i=a.title,o=a.channelTitle;return(0,c.jsx)("div",{className:"".concat("X"===n?"w-[350px] relative overflow-hidden":"w-[500px]","  shadow-md rounded-lg overflow-hidden ").concat(r?"hover:bg-gray-100 text-black":"text-white hover:bg-gray-600 bg-gray-800 "),children:(0,c.jsxs)("div",{className:"flex p-4",children:[(0,c.jsx)("img",{className:"rounded-lg ".concat("X"===n?"h-14 w-18":"h-20 w-40"," mr-4"),alt:"thumbnail",src:s.medium.url}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"".concat("X"===n?"text-xs ":"","font-bold"),children:i}),(0,c.jsx)("p",{className:"".concat(r?"text-black":"text-white"," ").concat("X"===n?"text-xs ":""),children:o})]})]})})}}}]);
//# sourceMappingURL=207.0529dfaa.chunk.js.map