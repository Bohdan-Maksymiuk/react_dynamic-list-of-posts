(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),a=n(3),r=n(4),o=n(1),i=n.n(o),u=n(2),l=(n(12),n(13),n(14),n(0)),j=function(e){var t=e.posts,n=e.postId,c=e.handleSelectedPost;return Object(l.jsxs)("div",{className:"PostsList",children:[Object(l.jsx)("h2",{children:"Posts:"}),Object(l.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(l.jsxs)("li",{className:"PostsList__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"User #".concat(e.userId,": ")}),e.title]}),Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(e.id)},children:n===e.id?"Close":"Open"})]},e.id)}))})]})},p=(n(16),"https://mate.academy/students-api"),b="".concat(p,"/comments"),d=function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"?postId=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.postId,n=e.reloadComments,c=Object(u.useState)(""),s=Object(r.a)(c,2),o=s[0],j=s[1],p=Object(u.useState)(""),b=Object(r.a)(p,2),d=b[0],h=b[1],f=Object(u.useState)(""),O=Object(r.a)(f,2),x=O[0],v=O[1],_=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o){e.next=7;break}return e.next=3,m({postId:t,name:o,email:d,body:x});case 3:n(),j(""),h(""),v("");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("form",{className:"NewCommentForm",children:[Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){j(e.target.value)}})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){h(e.target.value)}})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:x,onChange:function(e){v(e.target.value)}})}),Object(l.jsx)("button",{type:"button",className:"NewCommentForm__submit-button button",onClick:function(){return _()},children:"Add a comment"})]})},O=(n(17),function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=6;break}return e.next=3,fetch("".concat(p,"/posts"));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,fetch("".concat(p,"/posts?userId=").concat(t));case 8:e.t0=e.sent;case 9:return n=e.t0,e.abrupt("return",n.json());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(n(18),function(){return Object(l.jsx)("div",{className:"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),_=function(e){var t=e.postId,n=Object(u.useState)(null),c=Object(r.a)(n,2),s=c[0],o=c[1],j=Object(u.useState)([]),p=Object(r.a)(j,2),b=p[0],m=p[1],O=Object(u.useState)(!0),_=Object(r.a)(O,2),N=_[0],w=_[1],y=Object(u.useState)(!1),k=Object(r.a)(y,2),C=k[0],P=k[1],S=function(){var e=Object(a.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,d(t);case 3:n=e.sent,m(n),P(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:S();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function I(){return(I=Object(a.a)(i.a.mark((function e(){var n,c,s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([x(t),d(t)]);case 2:n=e.sent,c=Object(r.a)(n,2),s=c[0],a=c[1],o(s),m(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[t]),s?Object(l.jsxs)("div",{className:"PostDetails",children:[Object(l.jsx)("h2",{children:"Post details:"}),Object(l.jsx)("section",{className:"PostDetails__post",children:Object(l.jsx)("p",{children:s.title})}),Object(l.jsxs)("section",{className:"PostDetails__comments",children:[0===b.length?Object(l.jsx)("h4",{children:"There are no comments"}):Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){w(!N)},children:N?"Hide ".concat(b.length," comments"):"Show ".concat(b.length," comments")}),N&&Object(l.jsx)("ul",{className:"PostDetails__list",children:b.map((function(e){return Object(l.jsxs)("li",{className:"PostDetails__list-item",children:[Object(l.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return g(e.id)},children:"X"}),Object(l.jsx)("p",{children:e.body})]},e.id)}))})]}),C&&Object(l.jsx)(v,{}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(l.jsx)(f,{postId:t,reloadComments:S})})})]}):Object(l.jsx)("h2",{children:"Post details are loading..."})},N=function(){var e=Object(u.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(u.useState)(0),o=Object(r.a)(s,2),p=o[0],b=o[1],d=Object(u.useState)([]),h=Object(r.a)(d,2),m=h[0],f=h[1],x=Object(u.useState)(!1),N=Object(r.a)(x,2),w=N[0],y=N[1];return Object(u.useEffect)((function(){!function(){var e=Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,O(n);case 3:t=e.sent,f(t),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App__header",children:Object(l.jsxs)("label",{htmlFor:"selectUser",children:["Select a user: \xa0",Object(l.jsxs)("select",{className:"App__user-selector",id:"selectUser",value:n,onChange:function(e){var t=e.currentTarget.value;c(+t),b(0)},children:[Object(l.jsx)("option",{value:"0",children:"All users"}),Object(l.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(l.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(l.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(l.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(l.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(l.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(l.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(l.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(l.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(l.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(l.jsxs)("main",{className:"App__main",children:[Object(l.jsxs)("div",{className:"App__sidebar",children:[Object(l.jsx)(j,{posts:m,postId:p,handleSelectedPost:function(e){b(e===p?0:e)}}),w&&Object(l.jsx)(v,{})]}),Object(l.jsx)("div",{className:"App__content",children:0!==p?Object(l.jsx)(_,{postId:p}):Object(l.jsx)("h3",{children:"Choose the post to see comments"})})]})]})};s.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.863e887e.chunk.js.map