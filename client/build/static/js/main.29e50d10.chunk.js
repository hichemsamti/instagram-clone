(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(21),i=n.n(a),s=(n(28),n(2)),l=(n(29),n(3)),r=n(4),d=n(0);function j(){var e=Object(c.useContext)(S),t=e.state,n=e.dispatch,o=Object(l.f)();return Object(d.jsx)("nav",{children:Object(d.jsxs)("div",{className:"nav-wrapper white",style:{color:"black"},children:[Object(d.jsx)(r.b,{to:t?"/":"/signin",className:"brand-logo left",children:"Instagram"}),Object(d.jsx)("ul",{id:"nav-mobile",className:"right ",children:t?[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/profile",children:"Profile"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/create",children:"Create Post"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/myfollowingspost",children:"Following Posts"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"btn #c62828 red darken-3",onClick:function(){localStorage.clear(),n({type:"CLEAR"}),o.push("/signin")},children:"Logout"})})]:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/signin",children:"Signin"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/signup",children:"Signup"})})]})]})})}function h(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useContext)(S),i=a.state;a.dispatch;Object(c.useEffect)((function(){fetch("http://localhost:5000/allpost",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.posts)}))}),[]);return Object(d.jsx)("div",{className:"home",children:n.map((function(e){return Object(d.jsxs)("div",{className:"card home-card",children:[Object(d.jsxs)("h5",{children:[" ",Object(d.jsx)(r.b,{to:e.postedBy._id!==i._id?"profile/"+e.postedBy._id:"/profile",children:e.postedBy.name}),e.postedBy._id===i._id&&Object(d.jsx)("i",{class:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("http://localhost:5000/deletepost/"+t,{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));o(t)}));var t},children:"delete"})]}),Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:e.photo})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(i._id)?Object(d.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("http://localhost:5000/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(d.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("http://localhost:5000/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(d.jsxs)("h6",{children:[e.likes.length," likes "]}),Object(d.jsx)("h6",{children:e.title}),Object(d.jsx)("p",{children:e.body}),e.comments.map((function(t){return console.log(e.comments),Object(d.jsxs)("h6",{children:[Object(d.jsx)("span",{style:{fontWeight:"500"},children:t.postedBy.name}),t.text]},t._id)})),Object(d.jsx)("form",{onSubmit:function(t){var c,a;t.preventDefault(),c=t.target[0].value,a=e._id,fetch("http://localhost:5000/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:a,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:Object(d.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})}var u=n(10),p=n.n(u);function f(){var e=Object(c.useContext)(S),t=(e.state,e.dispatch),n=Object(l.f)(),o=Object(c.useState)(""),a=Object(s.a)(o,2),i=a[0],j=a[1],h=Object(c.useState)(""),u=Object(s.a)(h,2),f=u[0],b=u[1];return Object(d.jsx)("div",{className:"mycard",children:Object(d.jsxs)("div",{className:"card auth-card ",children:[Object(d.jsx)("h2",{children:"Instagram"}),Object(d.jsx)("input",{type:"email",placeholder:"email",value:f,onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"password",value:i,onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue lighten-2",onClick:function(){fetch("http://localhost:5000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:i,email:f})}).then((function(e){return e.json()})).catch((function(e){console.log(e)})).then((function(e){console.log(e),e.error?p.a.toast({html:e.error,classes:"#d32f2f red darken-2"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),p.a.toast({html:"signed in",classes:"#43a047 green darken-1"}),n.push("/"))})).catch((function(e){console.log(e)}))},children:"Login"}),Object(d.jsx)("h5",{children:Object(d.jsx)(r.b,{to:"/signup",children:" Don't have an account ? "})})]})})}var b=n(6);function O(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useContext)(S),i=a.state,l=a.dispatch,r=Object(c.useState)(""),j=Object(s.a)(r,2),h=j[0],u=j[1],p=Object(c.useState)(""),f=Object(s.a)(p,2),O=(f[0],f[1]);Object(c.useEffect)((function(){fetch("http://localhost:5000/mypost",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){o(e.mypost)}))}),[]),Object(c.useEffect)((function(){if(h){var e=new FormData;e.append("file",h),e.append("upload_preset","instagram-clone"),e.append("cloud-name","dnpkkxist"),fetch("https://api.cloudinary.com/v1_1/dnpkkxist/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){O(e.url),fetch("http://localhost:5000/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(b.a)(Object(b.a)({},i),{},{pic:e.pic}))),l({type:"UPDATEPIC",payload:e.pic}),window.location.reload()})).catch((function(e){console.log(e)})),window.location.reload()})).catch((function(e){console.log(e)}))}}),[h]);return Object(d.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(d.jsxs)("div",{style:{margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:i?i.pic:"loading",alt:""})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:i?i.name:"loading"}),Object(d.jsx)("h5",{children:i?i.email:"loading"}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"110%"},children:[Object(d.jsxs)("h6",{children:[i?n.length:"loading"," posts"]}),Object(d.jsxs)("h6",{children:[i?i.followers.length:"loading"," followers"]}),Object(d.jsxs)("h6",{children:[i?i.following.length:"loading"," following"]})]})]})]}),Object(d.jsxs)("div",{className:"file-field input-field",style:{margin:"10px"},children:[Object(d.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(d.jsx)("span",{children:"Update Picture"}),Object(d.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void u(t);var t}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(d.jsx)("div",{className:"gallery",children:n.map((function(e){return Object(d.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]})}function g(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(""),j=Object(s.a)(i,2),h=j[0],u=j[1],f=Object(c.useState)(""),b=Object(s.a)(f,2),O=b[0],g=b[1],m=Object(c.useState)(""),x=Object(s.a)(m,2),y=x[0],v=x[1],w=Object(c.useState)(void 0),S=Object(s.a)(w,2),N=S[0],C=S[1];Object(c.useEffect)((function(){N&&_()}),[N]);var _=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(O)?fetch("http://localhost:5000/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,password:h,email:O,pic:N})}).then((function(e){return e.json()})).catch((function(e){console.log(e)})).then((function(t){t.error?p.a.toast({html:t.error,classes:"#d32f2f red darken-2"}):(p.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):p.a.toast({html:"invalid email",classes:"#d32f2f red darken-2"})};return Object(d.jsx)("div",{className:"mycard",children:Object(d.jsxs)("div",{className:"card auth-card ",children:[Object(d.jsx)("h2",{children:"Instagram"}),Object(d.jsx)("input",{type:"text",placeholder:"name",value:o,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"email",placeholder:"email",value:O,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"password",value:h,onChange:function(e){return u(e.target.value)}}),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(d.jsx)("span",{children:"Uplaod Picture"}),Object(d.jsx)("input",{type:"file",onChange:function(e){return v(e.target.files[0])}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(d.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue lighten-2",onClick:function(){y?function(){var e=new FormData;e.append("file",y),e.append("upload_preset","instagram-clone"),e.append("cloud-name","dnpkkxist"),fetch("https://api.cloudinary.com/v1_1/dnpkkxist/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){C(e.url)})).catch((function(e){console.log(e)}))}():_()},children:"Signup"}),Object(d.jsx)("h5",{children:Object(d.jsx)(r.b,{to:"/signin",children:" Already have an account ? "})})]})})}var m=function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),j=r[0],h=r[1],u=Object(c.useState)(""),f=Object(s.a)(u,2),b=f[0],O=f[1],g=Object(c.useState)(""),m=Object(s.a)(g,2),x=m[0],y=m[1];Object(c.useEffect)((function(){x&&fetch("http://localhost:5000/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:o,body:j,pic:x})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?p.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(p.a.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[x]);return Object(d.jsxs)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(d.jsx)("input",{type:"text",placeholder:"title",value:o,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"body",value:j,onChange:function(e){return h(e.target.value)}}),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(d.jsx)("span",{children:"Uplaod Image"}),Object(d.jsx)("input",{type:"file",onChange:function(e){return O(e.target.files[0])}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(d.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",b),e.append("upload_preset","instagram-clone"),e.append("cloud-name","dnpkkxist"),fetch("https://api.cloudinary.com/v1_1/dnpkkxist/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){y(e.url)})).catch((function(e){console.log(e)}))}()},children:"Submit post"})]})},x=function(e,t){return"USER"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"===t.type?Object(b.a)(Object(b.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"===t.type?Object(b.a)(Object(b.a)({},e),{},{pic:t.payload.pic}):e},y=n(23);function v(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useContext)(S),i=a.state,r=a.dispatch,j=Object(l.g)().userid,h=Object(c.useState)(!i||!i.following.includes(j)),u=Object(s.a)(h,2),p=u[0],f=u[1];Object(c.useEffect)((function(){fetch("/user/".concat(j),{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e),console.log(i)})).catch((function(e){console.log(e)}))}));return Object(d.jsx)(d.Fragment,{children:n?Object(d.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:n.user.pic,alt:""})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:n.user.name}),Object(d.jsx)("h5",{children:n.user.email}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"110%"},children:[Object(d.jsxs)("h6",{children:[n.posts.length," posts"]}),Object(d.jsxs)("h6",{children:[n.user.followers.length," followers"]}),Object(d.jsxs)("h6",{children:[n.user.following.length," following"]})]}),p?Object(d.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:j})}).then((function(e){return e.json()})).then((function(e){console.log(e),r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),o((function(t){return Object(b.a)(Object(b.a)({},t),{},{user:Object(b.a)(Object(b.a)({},t.user),{},{followers:[].concat(Object(y.a)(t.user.followers),[e._id])})})})),f(!1)})).catch((function(e){console.log(e)}))},children:"  Follow    "}):Object(d.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:j})}).then((function(e){return e.json()})).then((function(e){console.log(e),r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),o((function(t){var n=t.user.followers.filter((function(t){return t!==e._id}));return Object(b.a)(Object(b.a)({},t),{},{user:Object(b.a)(Object(b.a)({},t.user),{},{followers:n})})})),f(!0)})).catch((function(e){console.log(e)}))},children:"  Unfollow    "})]})]}),Object(d.jsx)("div",{className:"gallery",children:n.posts.map((function(e){return Object(d.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]}):Object(d.jsx)("h2",{children:"loading..."})})}function w(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useContext)(S),i=a.state;a.dispatch;Object(c.useEffect)((function(){fetch("http://localhost:5000/getsubpost",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.posts)}))}),[]);return Object(d.jsx)("div",{className:"home",children:n.map((function(e){return Object(d.jsxs)("div",{className:"card home-card",children:[Object(d.jsxs)("h5",{children:[" ",Object(d.jsx)(r.b,{to:e.postedBy._id!==i._id?"profile/"+e.postedBy._id:"/profile",children:e.postedBy.name}),e.postedBy._id===i._id&&Object(d.jsx)("i",{class:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("http://localhost:5000/deletepost/"+t,{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));o(t)}));var t},children:"delete"})]}),Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:e.photo})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(i._id)?Object(d.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("http://localhost:5000/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(d.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("http://localhost:5000/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(d.jsxs)("h6",{children:[e.likes.length," likes "]}),Object(d.jsx)("h6",{children:e.title}),Object(d.jsx)("p",{children:e.body}),e.comments.map((function(t){return console.log(e.comments),Object(d.jsxs)("h6",{children:[Object(d.jsx)("span",{style:{fontWeight:"500"},children:t.postedBy.name}),t.text]},t._id)})),Object(d.jsx)("form",{onSubmit:function(t){var c,a;t.preventDefault(),c=t.target[0].value,a=e._id,fetch("http://localhost:5000/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:a,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id===e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))},children:Object(d.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})}var S=Object(c.createContext)();function N(){var e=Object(l.f)(),t=Object(c.useContext)(S),n=(t.state,t.dispatch);return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.push("/signin")}),[]),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(h,{})}),Object(d.jsx)(l.a,{path:"/signin",children:Object(d.jsx)(f,{})}),Object(d.jsx)(l.a,{path:"/signup",children:Object(d.jsx)(g,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/profile",children:Object(d.jsx)(O,{})}),Object(d.jsx)(l.a,{path:"/create",children:Object(d.jsx)(m,{})}),Object(d.jsx)(l.a,{path:"/profile/:userid",children:Object(d.jsx)(v,{})}),Object(d.jsx)(l.a,{path:"/myfollowingspost",children:Object(d.jsx)(w,{})})]})}var C=function(){var e=Object(c.useReducer)(x,null),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(d.jsx)(S.Provider,{value:{state:n,dispatch:o},children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(N,{})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.29e50d10.chunk.js.map