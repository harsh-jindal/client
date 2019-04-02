(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,a){e.exports=a(386)},191:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},316:function(e,t,a){},322:function(e,t,a){},384:function(e,t,a){},386:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),s=(a(191),a(14)),c=a(15),i=a(18),u=a(16),m=a(17),p=a(20),d=a(48),h=a(173),E=a(30),g={token:localStorage.getItem("token"),isAuthenticated:!1,isLoading:!1,user:null,openloginModal:!1,openregisterModal:!1},f={msg:"",status:"",id:null},y=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(E.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(E.a)({},e,{isLoading:!1,isAuthenticated:!0,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return Object(E.a)({},t.payload,{isAuthenticated:!0,isLoading:!1,openloginModal:!1,openregisterModal:!1});case"LOGIN_FAIL":case"REGISTER_FAIL":case"LOGOUT_SUCCESS":case"AITH_ERROR":return localStorage.removeItem("token"),Object(E.a)({},e,{isLoading:!1,isAuthenticated:!1,user:null,token:null});case"OPEN_LOGIN_MODAL":return Object(E.a)({},e,{openloginModal:!0,openregisterModal:!1});case"CLOSE_LOGIN_MODAL":return Object(E.a)({},e,{openloginModal:!1});case"OPEN_REGISTER_MODAL":return Object(E.a)({},e,{openregisterModal:!0,openloginModal:!1});case"CLOSE_REGISTER_MODAL":return Object(E.a)({},e,{openregisterModal:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return Object(E.a)({},e,{msg:t.payload.msg,status:t.payload.status,id:t.payload.id});case"CLEAR_ERRORS":return Object(E.a)({},e,{msg:"",status:"",id:null});default:return e}}}),b=[h.a],O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,v=Object(d.e)(y,{},O(d.a.apply(void 0,b))),C=(a(196),a(197),a(41),a(61)),j=a(62),I=a(45),w=(a(198),a(102)),S=a.n(w),k=function(e,t){return{type:"GET_ERRORS",payload:{msg:e.msg,status:t,id:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}},L=function(){return{type:"CLEAR_ERRORS"}},M=function(){return function(e){e({type:"OPEN_LOGIN_MODAL"})}},R=a(391),A=a(397),_=a(389),N=a(392),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visible:a.props.openloginModal,email:"",password:"",msg:null},a.toggleModal=function(){a.props.clearErrors(),a.setState({email:"",password:""}),a.props.closeLoginModal()},a.handleCancel=function(){a.toggleModal()},a.handleCreate=function(){var e=a.state,t={email:e.email,password:e.password};a.props.login(t)},a.onChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.openRegisterModal=function(){a.props.clearErrors(),a.setState({email:"",password:""}),a.props.openRegisterModal()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("LOGIN_FAIL"===a.id?this.setState({msg:a.msg}):this.setState({msg:null})),this.state.visible&&n&&(console.log("hello"),this.toggleModal())}},{key:"render",value:function(){var e=this.state,t=e.visible,a=e.email,n=e.password,l=e.msg;return r.a.createElement("div",null,r.a.createElement(R.a,{visible:t,title:"Login",okText:"Login",onCancel:this.handleCancel,onOk:this.handleCreate},l?r.a.createElement(A.a,{message:l,type:"error"}):null,r.a.createElement(_.a,{layout:"vertical"},r.a.createElement(_.a.Item,{label:"Email"},r.a.createElement(N.a,{type:"email",name:"email",value:a,onChange:this.onChange})),r.a.createElement(_.a.Item,{label:"Password"},r.a.createElement(N.a,{type:"password",name:"password",value:n,onChange:this.onChange})),"Don't have an account?",r.a.createElement("button",{className:"newbutton",onClick:this.openRegisterModal},"Register"))))}}]),t}(n.Component),P=Object(p.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error,openloginModal:e.auth.openloginModal}},{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});S.a.post("/api/login",n,{headers:{"Content-Type":"application/json"}}).then(function(t){return e({type:"LOGIN_SUCCESS",payload:t.data})}).catch(function(t){e(k(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:"LOGIN_FAIL"})})}},clearErrors:L,closeLoginModal:function(){return function(e){e({type:"CLOSE_LOGIN_MODAL"})}},openRegisterModal:function(){return function(e){e({type:"OPEN_REGISTER_MODAL"})}}})(G),D=(a(316),a(393)),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visible:a.props.openregisterModal,name:"",email:"",password:"",isVendor:!1,msg:null},a.toggleModal=function(){a.props.clearErrors(),a.setState({name:"",email:"",password:"",isVendor:!1}),a.props.closeRegisterModal()},a.handleCancel=function(){a.toggleModal()},a.handleCreate=function(){var e=a.state,t={name:e.name,email:e.email,password:e.password,isVendor:e.isVendor};a.props.register(t)},a.onChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.openLoginModal=function(){a.props.clearErrors(),a.setState({name:"",email:"",password:"",isVendor:!1}),a.props.openLoginModal()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("REGISTER_FAIL"===a.id?this.setState({msg:a.msg}):this.setState({msg:null})),this.state.visible&&n&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.visible,a=e.name,n=e.email,l=e.password,o=e.isVendor,s=e.msg;return r.a.createElement("div",null,r.a.createElement(R.a,{visible:t,title:"Register",okText:"Register",onCancel:this.handleCancel,onOk:this.handleCreate},s?r.a.createElement(A.a,{message:s,type:"error"}):null,r.a.createElement(_.a,{layout:"vertical"},r.a.createElement(_.a.Item,{label:"Are you a vendor also?"},r.a.createElement(D.a.Group,{name:"isVendor",buttonStyle:"solid",value:o,onChange:this.onChange},r.a.createElement(D.a.Button,{value:"true"},"Yes"),r.a.createElement(D.a.Button,{value:"false"},"No"))),r.a.createElement(_.a.Item,{label:"Name"},r.a.createElement(N.a,{name:"name",value:a,onChange:this.onChange})),r.a.createElement(_.a.Item,{label:"Email"},r.a.createElement(N.a,{type:"email",name:"email",value:n,onChange:this.onChange})),r.a.createElement(_.a.Item,{label:"Password"},r.a.createElement(N.a,{type:"password",name:"password",value:l,onChange:this.onChange})),"Already have an account?",r.a.createElement("button",{className:"newbutton2",onClick:this.openLoginModal},"Login"))))}}]),t}(n.Component),U=Object(p.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error,openregisterModal:e.auth.openregisterModal}},{register:function(e){var t=e.name,a=e.email,n=e.password,r=e.isVendor;return function(e){var l=JSON.stringify({name:t,email:a,password:n,isVendor:r});S.a.post("/api/register",l,{headers:{"Content-Type":"application/json"}}).then(function(t){return e({type:"REGISTER_SUCCESS",payload:t.data})}).catch(function(t){e(k(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:"REGISTER_FAIL"})})}},clearErrors:L,openLoginModal:M,closeRegisterModal:function(){return function(e){e({type:"CLOSE_REGISTER_MODAL"})}}})(T),F=a(394),x=a(395),V=a(9),B=a(40),H=(a(322),F.a.Sider),z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(H,{style:{overflow:"auto",height:"100vh",left:0},trigger:null,collapsible:!0,collapsedWidth:95,collapsed:this.props.collapseProp},r.a.createElement("div",{className:"logo"}),r.a.createElement(x.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement(x.a.Item,{key:"1"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Plumber")),r.a.createElement(x.a.Item,{key:"2"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Washerman")),r.a.createElement(x.a.Item,{key:"3"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Electrician")),r.a.createElement(x.a.Item,{key:"4"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Maid")),r.a.createElement(x.a.Item,{key:"5"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Mason")),r.a.createElement(x.a.Item,{key:"6"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Carpenter")),r.a.createElement(x.a.Item,{key:"7"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Painter")),r.a.createElement(x.a.Item,{key:"8"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Regular Repair Man")),r.a.createElement(x.a.Item,{key:"9"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Beautician")),r.a.createElement(x.a.Item,{key:"10"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Person 1")),r.a.createElement(x.a.Item,{key:"11"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Person 2")),r.a.createElement(x.a.Item,{key:"12"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Person 3")),r.a.createElement(x.a.Item,{key:"13"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Person 4")),r.a.createElement(x.a.Item,{key:"14"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Person 5")),r.a.createElement(x.a.Item,{key:"15"},r.a.createElement(V.a,{type:"form"}),r.a.createElement("span",null,"Person 6")))))}}]),t}(n.Component),J=a(396),W=a(387),K=a(388),X=a(390);function Y(e){var t="image/jpeg"===e.type;t||J.a.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||J.a.error("Image must smaller than 2MB!"),t&&a}var $=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",newpassword:"",phone:"",loading:!1},a.onChange=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&function(e,t){var a=new FileReader;a.addEventListener("load",function(){return t(a.result)}),a.readAsDataURL(e)}(e.file.originFileObj,function(e){return a.setState({imageUrl:e,loading:!1})}):a.setState({loading:!0})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,a=e.user,l=this.state,o=l.name,s=l.email,c=l.password,i=l.newpassword,u=l.phone,m=r.a.createElement("div",null,r.a.createElement(V.a,{type:this.state.loading?"loading":"plus"}),r.a.createElement("div",{className:"ant-upload-text"},"Upload")),p=this.state.imageUrl;return t&&!1===a.isVendor?r.a.createElement(n.Fragment,null,r.a.createElement(_.a,{layout:"vertical"},r.a.createElement(W.a,null,r.a.createElement(K.a,{span:8},r.a.createElement("p",null,"Here is a pic"),r.a.createElement(X.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"//jsonplaceholder.typicode.com/posts/",beforeUpload:Y,onChange:this.handleChange},p?r.a.createElement("img",{src:p,alt:"avatar"}):m)),r.a.createElement(K.a,{span:16},r.a.createElement(_.a.Item,{label:"Username"},r.a.createElement(N.a,{type:"text",name:"name",value:o,onChange:this.onChange})),r.a.createElement(_.a.Item,{label:"E-mail Id"},r.a.createElement(N.a,{type:"email",name:"email",value:s,onChange:this.onChange})),r.a.createElement(_.a.Item,{label:"New Password"},r.a.createElement(N.a,{type:"password",name:"password",value:c,onChange:this.onChange})),r.a.createElement(_.a.Item,{label:"Confirm New Password"},r.a.createElement(N.a,{type:"password",name:"newpassword",value:i,onChange:this.onChange})),r.a.createElement(_.a.Item,{label:"Phone Number"},r.a.createElement(N.a,{type:"text",name:"phone",value:u,onChange:this.onChange})),r.a.createElement(B.a,null,"UPDATE"))))):r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Please login to view user Profile."))}}]),t}(n.Component),q=Object(p.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}},{})($),Q=(a(384),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(C.b,{to:"/",onClick:this.props.logout},r.a.createElement(V.a,{type:"export"}),"Logout")}}]),t}(n.Component)),Z=Object(p.b)(null,{logout:function(){return function(e){e({type:"LOGOUT_SUCCESS"})}}})(Q),ee=x.a.SubMenu,te=x.a.ItemGroup,ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={current:"mail"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(x.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal",theme:"dark"},r.a.createElement(ee,{title:r.a.createElement("span",{className:"submenu-title-wrapper"},r.a.createElement(V.a,{type:"setting"}))},r.a.createElement(te,null,e.isVendor?r.a.createElement(x.a.Item,null,r.a.createElement(C.b,{to:"/vendorDashboard"},r.a.createElement(V.a,{type:"idcard"}),"Dashboard")):r.a.createElement(x.a.Item,null,r.a.createElement(C.b,{to:"/userDashboard"},r.a.createElement(V.a,{type:"idcard"}),"Dashboard")),r.a.createElement(x.a.Item,null,r.a.createElement(Z,null)))))}}]),t}(n.Component),ne=Object(p.b)(function(e){return{user:e.auth.user}},{})(ae),re=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,a=e.user;return t&&!1===a.isVendor?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"User Logged in")):r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Please login to view user Dashboard."))}}]),t}(n.Component),le=Object(p.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}},{})(re),oe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,a=e.user;return t&&!0===a.isVendor?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Vendor Logged in")):r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Please login to view vendor Dashboard."))}}]),t}(n.Component),se=Object(p.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}},{})(oe),ce=F.a.Header,ie=F.a.Content,ue=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.openLoginModal=function(){a.props.openLoginModal()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user,n=e.openloginModal,l=e.openregisterModal;return r.a.createElement(C.a,null,r.a.createElement(F.a,null,r.a.createElement(ce,{style:{position:"fixed",zIndex:1,width:"100%"},className:"header"},t?r.a.createElement(x.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},r.a.createElement(x.a.Item,{key:"1",className:"left"},r.a.createElement(V.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),"Sahaayak"),r.a.createElement(x.a.Item,{key:"2",className:"right",style:{margin:9}},r.a.createElement(ne,null)),r.a.createElement(x.a.Item,{key:"4",className:"right"},a?a.name:null)):r.a.createElement(x.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},r.a.createElement(x.a.Item,{key:"1",className:"left"},r.a.createElement(V.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),"Sahaayak"),r.a.createElement(x.a.Item,{key:"3",className:"right"},r.a.createElement(B.a,{type:"primary",onClick:this.openLoginModal},"Login"),n?r.a.createElement(P,null):null,l?r.a.createElement(U,null):null))),r.a.createElement(z,{collapseProp:this.state.collapsed}),r.a.createElement(F.a,null,r.a.createElement(ie,{style:{marginTop:"50px",padding:24,background:"#fff",minHeight:280}},r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/userProfile",component:q}),r.a.createElement(j.a,{exact:!0,path:"/userDashboard",component:le}),r.a.createElement(j.a,{exact:!0,path:"/vendorDashboard",component:se}))))))}}]),t}(n.Component),me=Object(p.b)(function(e){return{auth:e.auth}},{openLoginModal:M})(ue),pe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:v},r.a.createElement(me,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[186,1,2]]]);
//# sourceMappingURL=main.39b5f892.chunk.js.map