(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{230:function(e,t,n){e.exports=n(392)},235:function(e,t,n){},237:function(e,t,n){},308:function(e,t,n){},391:function(e,t,n){},392:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(45),i=n.n(c),u=(n(235),n(236),n(237),n(218)),l=n(23),s=n(16),o=n(21),d=n.n(o),m=n(29),f=n(199),p=n.n(f),b=localStorage.getItem("authToken"),E=p.a.create();b&&(E.defaults.headers.Authorization="Bearer ".concat(b)),E.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(console.log("Auth error",e.response.data),N.dispatch(w())),Promise.reject(e)}));var g,v=E,h=Object(l.b)("currentUser/fetchCurrentUser",function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/api/users/me");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{condition:function(){return!!v.defaults.headers.Authorization},dispatchConditionRejection:!1}),j=Object(l.c)({name:"currentUser",initialState:{user:null,isLoading:!1},reducers:{signIn:function(e,t){e.user=t.payload.user},logout:function(e){e.user=null,e.isLoading=!1}},extraReducers:(g={},Object(s.a)(g,h.pending,(function(e){e.loading=!0})),Object(s.a)(g,h.fulfilled,(function(e,t){e.user=t.payload})),Object(s.a)(g,h.rejected,(function(){return{user:null,isLoading:!1}})),g)}),O=j.actions,w=O.logout,y=O.signIn,k=j.reducer,x=function(e){return function(e){return function(t){if(t.type===y.toString()){var n=t.payload.authToken;localStorage.setItem("authToken",n),v.defaults.headers.Authorization="Bearer ".concat(n)}t.type===w.toString()&&(localStorage.clear(),delete v.defaults.headers.Authorization),e(t)}}},L=n(408),R=[].concat(Object(u.a)(Object(l.d)()),[x]),N=Object(l.a)({reducer:{currentUser:k,form:L.a},devTools:!0,middleware:R}),_=n(19),S=n(63),C=n(34),q=n(55),A=n(400),F=n(409),P=n(401),z=n(406),I=n(405),U=n(403),M=n(402);n(308);var T=Object(M.a)({form:"signin"})((function(e){var t=e.handleSubmit,n=e.pristine,a=e.submitting,c=e.error;return r.a.createElement("div",{className:"sign-in-form-wrapper"},r.a.createElement(P.a,{className:"sign-in-form",onSubmit:t},r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Email"),r.a.createElement(U.a,{name:"email",component:"input",type:"text"})),r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement(U.a,{name:"password",component:"input",type:"password"})),r.a.createElement(z.a,{disabled:n||a},"Sign In")),c&&r.a.createElement(I.a,{error:!0,attached:"bottom"},c))})),B=n(141);var J=function(){var e=Object(q.h)(),t=Object(q.g)(),n=Object(_.c)(),c=(e.state||{from:{pathname:"/"}}).from,i=Object(a.useCallback)((function(e){return v.post("/auth",e).then((function(e){return n(y(e.data))})).then((function(){return t.replace(c)})).catch((function(e){throw new B.a({_error:e.response.data.message})}))}),[]);return r.a.createElement(A.a,{className:"login-page"},r.a.createElement(T,{onSubmit:i}))};var W=function(e){return r.a.createElement("div",{className:"home page"},"This is a home page")};function $(){return r.a.createElement(A.a,{className:"page"},r.a.createElement(F.a,null,"404 Page not Found"))}var H=n(104),V=n(37),Y=Object(V.a)((function(e){return e.currentUser.user}),(function(e){return e}));function D(e){var t=e.children,n=Object(H.a)(e,["children"]),a=!!Object(_.d)(Y);return r.a.createElement(q.b,Object.assign({},n,{render:function(e){var n=e.location;return a?t:r.a.createElement(q.a,{to:{pathname:"/sign-in",state:{from:n}}})}}))}var G=n(407);var K=function(e){return r.a.createElement(G.a,null,r.a.createElement(C.b,{to:"/sign-in",className:"item",activeClassName:"active-nav"},"Sign In"),r.a.createElement(C.b,{to:"/sign-up",className:"item",activeClassName:"active-nav"},"Sign Up"))};var Q,X=function(){var e=Object(_.c)();return r.a.createElement(G.a,null,r.a.createElement(C.b,{to:"/posts",className:"item",activeClassName:"active-nav"},"Posts"),r.a.createElement(C.b,{to:"/users",className:"item",activeClassName:"active-nav"},"Users"),r.a.createElement(C.b,{to:"/friends",className:"item",activeClassName:"active-nav"},"Friends"),r.a.createElement(G.a.Menu,{position:"right"},r.a.createElement(G.a.Item,{onClick:function(){return e(w())}},"Logout")))},Z=Object(l.b)("posts/fetchPosts",function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{condition:function(){return!!v.defaults.headers.Authorization},dispatchConditionRejection:!1}),ee=Object(l.b)("posts/likePost",function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/".concat(t,"/like"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{condition:function(){return!!v.defaults.headers.Authorization},dispatchConditionRejection:!1});Object(l.c)({name:"posts",initialState:{posts:[],isLoading:!1},reducers:{},extraReducers:(Q={},Object(s.a)(Q,Z.pending,(function(e){e.isLoading=!0})),Object(s.a)(Q,Z.fulfilled,(function(e,t){e.posts=t.payload,e.isLoading=!1})),Object(s.a)(Q,Z.rejected,(function(){return{posts:[],isLoading:!1}})),Object(s.a)(Q,ee.pending,(function(e){e.isLoading=!0})),Object(s.a)(Q,ee.fulfilled,(function(e,t){e.isLoading=!1;var n=e.posts.find((function(e){return e._id===t.payload._id})),a=e.posts.indexOf(n);-1!==a&&(e.posts[a].likes=t.payload.likes,e.posts[a].likesNumber=t.payload.likesNumber)})),Q)}).reducer;var te=function(e){var t=e.post,n=Object(_.c)();return r.a.createElement("div",null,r.a.createElement("p",null,t._id),r.a.createElement("h2",null,t.title),r.a.createElement("p",null,r.a.createElement("span",null,t.author.first_name),r.a.createElement("span",null,t.author.last_name)),r.a.createElement("p",null,"Created: ",t.created_at),r.a.createElement("p",null,t.body),r.a.createElement("p",null," Likes number ",t.likesNumber),r.a.createElement("button",{onClick:function(){return e=t._id,console.log("postId in products.js",e),void n(ee(e));var e}},"Like"))};var ne,ae=function(){var e=Object(_.c)(),t=Object(_.d)((function(e){return e.posts})),n=(t.isLoading,t.posts);return Object(a.useEffect)((function(){e(Z())}),[e]),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(te,{key:e._id,post:e})})))},re=Object(l.b)("users/fetchUsers",function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{condition:function(){return!!v.defaults.headers.Authorization},dispatchConditionRejection:!1}),ce=Object(l.b)("users/addToFriends",function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/".concat(t,"/add"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{condition:function(){return!!v.defaults.headers.Authorization},dispatchConditionRejection:!1}),ie=(Object(l.c)({name:"users",initialState:{users:[],isLoading:!1,resultMessage:null},reducers:{},extraReducers:(ne={},Object(s.a)(ne,re.pending,(function(e){e.isLoading=!0,e.resultMessage=null})),Object(s.a)(ne,re.fulfilled,(function(e,t){e.users=t.payload,e.resultMessage=null,e.isLoading=!1})),Object(s.a)(ne,re.rejected,(function(){return{users:[],isLoading:!1}})),Object(s.a)(ne,ce.fulfilled,(function(e){e.isLoading=!1,e.resultMessage=null})),ne)}).reducer,function(){var e=Object(_.c)(),t=Object(_.d)((function(e){return e.users})),n=t.isLoading,c=t.users,i=t.resultMessage;Object(a.useEffect)((function(){e(re())}),[e]);var u=i?r.a.createElement("div",null,i.message):null;return n?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("ul",null,c.map((function(t){return r.a.createElement("li",{key:t._id},r.a.createElement("h2",null,r.a.createElement("span",null,t.first_name," "),r.a.createElement("span",null,t.last_name)),r.a.createElement("p",null,t._id),r.a.createElement("button",{onClick:function(){return n=t._id,void e(ce(n));var n}},"Add to friends"))}))),u)}),ue=(n(391),n(105));var le=function(e){var t,n=e.input,a=(e.label,e.type),c=e.meta,i=c.touched,u=c.error,l=c.warning,s=Object(H.a)(e,["input","label","type","meta"]);u?t="red":l&&(t="yellow");var o=u||l;return r.a.createElement(P.a.Field,null,r.a.createElement("input",Object.assign({type:a},n,s)),i&&o&&r.a.createElement(ue.a,{basic:!0,color:t,pointing:"above"},o))};var se=function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/signup/check-user",{params:{email:t.email}});case 2:if(!e.sent.data.isUserExist){e.next=5;break}throw{email:"This email is already taken"};case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=Object(M.a)({form:"signup",validate:function(e){var t={};return e.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Invalid email address"):t.email="Required!",e.password||(t.password="Required"),e.password!==e.repeatPassword&&(t.repeatPassword="Password Must be equal"),e.first_name||(t.first_name="Required"),e.last_name||(t.last_name="Required"),e.age?e.age<18&&(t.age="Sorry, you must be at least 18 years old"):t.age="Required",t},warn:function(e){var t,n={};return e.age<19&&(n.age="Hmm, you seem a bit young..."),(null===e||void 0===e?void 0:null===(t=e.password)||void 0===t?void 0:t.length)<6&&(n.password="Password is too weak"),n},asyncValidate:se,asyncBlurFields:["email"]})((function(e){var t=e.handleSubmit,n=e.pristine,a=e.submitting,c=e.error,i=e.invalid;return r.a.createElement("div",{className:"sign-up-form-wrapper"},r.a.createElement(P.a,{className:"sign-up-form",onSubmit:t},r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Email"),r.a.createElement(U.a,{name:"email",component:le,type:"text"})),r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement(U.a,{name:"password",component:le,type:"password"})),r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Repeat Password"),r.a.createElement(U.a,{name:"repeatPassword",component:le,type:"password"})),r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"First Name"),r.a.createElement(U.a,{name:"first_name",component:le,type:"text"})),r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Last Name"),r.a.createElement(U.a,{name:"last_name",component:le,type:"text"})),r.a.createElement(P.a.Field,null,r.a.createElement("label",null,"Age"),r.a.createElement(U.a,{name:"age",component:le,type:"number"})),r.a.createElement(z.a,{disabled:i||n||a},"Sign Up")),c&&r.a.createElement(I.a,{error:!0,attached:"bottom"},c))}));var de,me=function(){var e=Object(a.useState)(!1),t=Object(S.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),u=Object(S.a)(i,2),l=u[0],s=u[1];return r.a.createElement(A.a,{className:"sign-up-page"},!n&&r.a.createElement(oe,{onSubmit:function(e){v.post("/signup",e).then((function(){c(!0),s(e.email)}))}}),n&&r.a.createElement(I.a,{success:!0,header:"Your user registration was successful",content:r.a.createElement("div",null,"Please confirm your email address ",r.a.createElement("strong",null,l))}))},fe=Object(l.b)("friends/fetchUserFriend",function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{condition:function(){return!!v.defaults.headers.Authorization},dispatchConditionRejection:!1}),pe=Object(l.b)("friends/confirm",function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/".concat(t,"/confirm"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{condition:function(){return!!v.defaults.headers.Authorization},dispatchConditionRejection:!1}),be=Object(l.b)("friends/reject",function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/".concat(t,"/reject"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{condition:function(){return!!v.defaults.headers.Authorization},dispatchConditionRejection:!1});Object(l.c)({name:"friendsRequest",initialState:{friends:[],isRequestLoading:!1},reducers:{},extraReducers:(de={},Object(s.a)(de,fe.pending,(function(e){e.isRequestLoading=!0})),Object(s.a)(de,fe.fulfilled,(function(e,t){e.friends=t.payload,e.isRequestLoading=!1})),Object(s.a)(de,fe.rejected,(function(){return{friends:[],isLoading:!1}})),Object(s.a)(de,pe.pending,(function(e){e.isRequestLoading=!0})),Object(s.a)(de,pe.rejected,(function(){return{isLoading:!1}})),Object(s.a)(de,pe.fulfilled,(function(e,t){e.isRequestLoading=!1,e.friends=t.payload})),Object(s.a)(de,be.pending,(function(e){e.isRequestLoading=!0})),Object(s.a)(de,be.rejected,(function(){return{isLoading:!1}})),Object(s.a)(de,be.fulfilled,(function(e,t){e.isRequestLoading=!1,e.friends=t.payload})),de)}).reducer;var Ee=function(){var e=Object(_.c)(),t=Object(a.useState)(null),n=Object(S.a)(t,2),c=(n[0],n[1]),i=Object(_.d)((function(e){return e.friends})),u=i.friends,l=i.isRequestLoading,s=u.filter((function(e){return 2===e.status})),o=u.filter((function(e){return 3===e.status})).map((function(e){return function(e){return e.recipient}(e)}));return Object(a.useEffect)((function(){e(fe())}),[e]),l?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("h3",null,"Incoming requests"),r.a.createElement("ul",null,s.map((function(t){return r.a.createElement("li",null,r.a.createElement("h2",null,r.a.createElement("span",null,t.recipient.first_name),r.a.createElement("span",null,t.recipient.last_name)),r.a.createElement("button",{type:"button",onClick:function(){return n=t._id,c("confirm"),void e(pe(n));var n}},"Confirm"))}))),r.a.createElement("h3",null,"My friends"),r.a.createElement("ul",null,o.map((function(t){return r.a.createElement("li",null,r.a.createElement("h2",null,r.a.createElement("span",null,t.first_name),r.a.createElement("span",null,t.last_name)),r.a.createElement("button",{type:"button",onClick:function(){return n=t._id,c("reject"),void e(be(n));var n}},"Remove from friends"))}))))};var ge=function(){var e=Object(_.d)(Y),t=Object(_.c)(),n=Object(a.useState)(!1),c=Object(S.a)(n,2),i=c[0],u=c[1];return Object(a.useEffect)((function(){t(h()).then((function(){return u(!0)})).catch((function(){return u(!0)}))}),[t]),i?r.a.createElement(A.a,{className:"social-app"},r.a.createElement(C.a,null,r.a.createElement(F.a,null,r.a.createElement(C.b,{to:"/",activeClassName:"active-nav"},"Social app")),!e&&r.a.createElement(K,null),e&&r.a.createElement(X,null),r.a.createElement(q.d,null,r.a.createElement(q.b,{path:"/",exact:!0},r.a.createElement(W,null)),r.a.createElement(q.b,{path:"/sign-in",exact:!0},r.a.createElement(J,null)),r.a.createElement(q.b,{path:"/sign-up",exact:!0},r.a.createElement(me,null)),r.a.createElement(D,{path:"/posts",exact:!0},r.a.createElement(ae,null)),r.a.createElement(D,{path:"/users",exact:!0},r.a.createElement(ie,null)),r.a.createElement(D,{path:"/friends",exact:!0},r.a.createElement(Ee,null)),r.a.createElement(q.b,{path:"*",component:$})))):null};function ve(){return r.a.createElement(_.a,{store:N},r.a.createElement(ge,null))}var he=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ve,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[230,1,2]]]);
//# sourceMappingURL=main.621ac09a.chunk.js.map