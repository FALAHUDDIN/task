(this["webpackJsonptdcx-assessment"]=this["webpackJsonptdcx-assessment"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),s=a.n(r),o=a(30),c=a.n(o),i=a(9),d=a(18),x=a(22),l=a(61),p=a(5),u="REQUEST_SHOW_TOKEN",b="RECEIVE_SHOW_TOKEN",h="FAILED_SHOW_TOKEN",m="REQUEST_SHOW_DASHBOARD",j="RECEIVE_SHOW_DASHBOARD",g="FAILED_SHOW_DASHBOARD",k="REQUEST_SHOW_TASKS",f="RECEIVE_SHOW_TASKS",O="FAILED_SHOW_TASKS",T="REQUEST_CREATE_TASKS",v="RECEIVE_CREATE_TASKS",w="FAILED_CREATE_TASKS",S="REQUEST_UPDATE_TASKS",F="RECEIVE_UPDATE_TASKS",E="FAILED_UPDATE_TASKS",C="REQUEST_DELETE_TASKS",N="RECEIVE_DELETE_TASKS",A="FAILED_DELETE_TASKS";var D=Object(x.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case b:return Object(p.a)(Object(p.a)({},e),{},{revShowToken:n,errorMessage:""});case h:return Object(p.a)(Object(p.a)({},e),{},{revShowToken:"",errorMessage:n});case j:return Object(p.a)(Object(p.a)({},e),{},{revShowDashboard:n,errorMessage:""});case g:return Object(p.a)(Object(p.a)({},e),{},{revShowDashboard:"",errorMessage:n});case f:return Object(p.a)(Object(p.a)({},e),{},{revShowTasks:n,errorMessage:""});case O:return Object(p.a)(Object(p.a)({},e),{},{revShowTasks:"",errorMessage:n});case v:return Object(p.a)(Object(p.a)({},e),{},{revCreateTasks:n,errorMessage:""});case w:return Object(p.a)(Object(p.a)({},e),{},{revCreateTasks:"",errorMessage:n});case F:return Object(p.a)(Object(p.a)({},e),{},{revUpdateTasks:n,errorMessage:""});case E:return Object(p.a)(Object(p.a)({},e),{},{revUpdateTasks:"",errorMessage:n});case N:return Object(p.a)(Object(p.a)({},e),{},{revDeleteTasks:n,errorMessage:""});case A:return Object(p.a)(Object(p.a)({},e),{},{revDeleteTasks:"",errorMessage:n});default:return e}}}),y=a(14),I=a.n(y),R=a(10),_=a(23),L=a.n(_),B=a(27),z=a.n(B),K="https://dev.teledirectasia.com:3092",H=function(){var e=L.a.getJSON("token").token;if(e)return{Authorization:"Bearer ".concat(e)}},P=function(e){return z.a.post(K+"/login",e)},M=function(){return z.a.get(K+"/dashboard",{headers:H()})},U=function(){return z.a.get(K+"/tasks",{headers:H()})},W=function(e){return z.a.post(K+"/tasks",e,{headers:H()})},Q=function(e){return z.a.put(K+"/tasks/"+e.id,e,{headers:H()})},V=function(e){return z.a.delete(K+"/tasks/"+e.id,{headers:H()})},J=I.a.mark(te),q=I.a.mark(ae),Y=I.a.mark(ne),G=I.a.mark(re),X=I.a.mark(se),Z=I.a.mark(oe),$=I.a.mark(ce),ee=!1;function te(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.c)(u,ae);case 2:return e.next=4,Object(R.c)(m,ne);case 4:return e.next=6,Object(R.c)(k,re);case 6:return e.next=8,Object(R.c)(T,se);case 8:return e.next=10,Object(R.c)(S,oe);case 10:return e.next=12,Object(R.c)(C,ce);case 12:case"end":return e.stop()}}),J)}function ae(e){var t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.formData,n.prev=1,n.next=4,Object(R.a)(P,t);case 4:return a=n.sent,n.next=7,Object(R.b)((r=a.data,{type:b,data:r}));case 7:L.a.set("token",a.data.token),window.location.reload(),n.next=17;break;case 11:if(n.prev=11,n.t0=n.catch(1),401!==n.t0.response.status){n.next=16;break}return n.next=16,Object(R.b)({type:"FAILED_SHOW_TOKEN",data:n.t0.response.data.msg});case 16:ee;case 17:case"end":return n.stop()}var r}),q,null,[[1,11]])}function ne(e){var t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.formData,n.prev=1,n.next=4,Object(R.a)(M,t);case 4:return a=n.sent,n.next=7,Object(R.b)((r=a.data,{type:j,data:r}));case 7:n.next=15;break;case 9:if(n.prev=9,n.t0=n.catch(1),401!==n.t0.response.status){n.next=14;break}return n.next=14,Object(R.b)({type:"FAILED_SHOW_DASHBOARD",data:n.t0.response.data.msg});case 14:ee;case 15:case"end":return n.stop()}var r}),Y,null,[[1,9]])}function re(e){var t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.formData,n.prev=1,n.next=4,Object(R.a)(U,t);case 4:return a=n.sent,n.next=7,Object(R.b)((r=a.data,{type:f,data:r}));case 7:n.next=15;break;case 9:if(n.prev=9,n.t0=n.catch(1),401!==n.t0.response.status){n.next=14;break}return n.next=14,Object(R.b)({type:"FAILED_SHOW_TASKS",data:n.t0.response.data.msg});case 14:ee;case 15:case"end":return n.stop()}var r}),G,null,[[1,9]])}function se(e){var t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.formData,n.prev=1,n.next=4,Object(R.a)(W,t);case 4:return a=n.sent,n.next=7,Object(R.b)((r=a.data,{type:v,data:r}));case 7:n.next=15;break;case 9:if(n.prev=9,n.t0=n.catch(1),401!==n.t0.response.status){n.next=14;break}return n.next=14,Object(R.b)({type:"FAILED_CREATE_TASKS",data:n.t0.response.data.msg});case 14:ee;case 15:case"end":return n.stop()}var r}),X,null,[[1,9]])}function oe(e){var t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.formData,n.prev=1,n.next=4,Object(R.a)(Q,t);case 4:return a=n.sent,n.next=7,Object(R.b)((r=a.data,{type:F,data:r}));case 7:n.next=15;break;case 9:if(n.prev=9,n.t0=n.catch(1),401!==n.t0.response.status){n.next=14;break}return n.next=14,Object(R.b)({type:"FAILED_UPDATE_TASKS",data:n.t0.response.data.msg});case 14:ee;case 15:case"end":return n.stop()}var r}),Z,null,[[1,9]])}function ce(e){var t,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.formData,n.prev=1,n.next=4,Object(R.a)(V,t);case 4:return a=n.sent,n.next=7,Object(R.b)((r=a.data,{type:N,data:r}));case 7:n.next=15;break;case 9:if(n.prev=9,n.t0=n.catch(1),401!==n.t0.response.status){n.next=14;break}return n.next=14,Object(R.b)({type:"FAILED_DELETE_TASKS",data:n.t0.response.data.msg});case 14:ee;case 15:case"end":return n.stop()}var r}),$,null,[[1,9]])}var ie=Object(l.a)(),de=Object(x.e)(D,Object(x.d)(Object(x.a)(ie)));ie.run(te);var xe=a(56),le=a.n(xe),pe=a(60),ue=a(12),be=a(25),he=a(26);function me(){var e=Object(i.a)({container:{display:"flex",flexDirection:"column",height:"100%"},content:{width:"296px",height:"249px",borderRadius:"12px",boxShadow:"0px 3px 6px #00000029",margin:"auto",padding:"24px",backgroundColor:"#FFFFFF"},txtLogin:{display:"flex",alignItems:"center",height:"24px",color:"#537178",fontSize:"20px"},errBoxLogin:{display:"flex",alignItems:"center",height:"24px",fontSize:"11px",color:"#d82424"},iptId:{padding:"0 16px",width:"100%",height:"40px",backgroundColor:"#EEF1F8",border:"unset",borderRadius:"8px",color:"#7A7D7E",fontSize:"14px"},iptnName:{marginTop:"12px",padding:"0 16px",width:"100%",height:"40px",backgroundColor:"#EEF1F8",border:"unset",borderRadius:"8px",color:"#7A7D7E",fontSize:"14px"},btnLogin:{marginTop:"12px",width:"100%",height:"40px",border:"unset",backgroundColor:"#5285EC",borderRadius:"8px",color:"#FFFFFF",fontSize:"14px"}})(),t=Object(r.useReducer)((function(e,t){return Object(p.a)(Object(p.a)({},e),t)}),{name:"",apiKey:""}),a=Object(he.a)(t,2),s=a[0],o=a[1],c=Object(d.c)((function(e){return e.data})),x=Object(d.b)(),l=function(e){return x(function(e){return{type:u,formData:e}}(e))},b=function(e){var t=e.target.name;"checkbox"===e.target.type?o(Object(be.a)({},t,e.target.checked)):o(Object(be.a)({},t,e.target.value))};return Object(n.jsx)("div",{className:e.container,children:Object(n.jsxs)("div",{className:e.content,children:[Object(n.jsx)("div",{className:e.txtLogin,children:"Login"}),Object(n.jsx)("div",{className:e.errBoxLogin,children:c.errorMessage}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{className:e.iptId,name:"name",type:"text",placeholder:"Id",value:s.name,onChange:b,autoFocus:!0,required:!0}),Object(n.jsx)("input",{className:e.iptnName,name:"apiKey",type:"password",placeholder:"Name",autoComplete:"username",value:s.apiKey,onChange:b,required:!0}),Object(n.jsx)("button",{type:"submit",className:e.btnLogin,onClick:function(){if(console.log("haluuu"),""!==s.name&&""!==s.apiKey){var e={name:s.name,apiKey:s.apiKey};l(e)}},children:Object(n.jsx)("div",{children:"Login"})})]})]})})}var je=a.p+"static/media/profileIcon.1fc62228.png";function ge(){var e=Object(i.a)({boxHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"72px",zIndex:1,backgroundColor:"#FFFFFF",boxShadow:"0px 3px 6px #00000029",padding:"12px 24px"},icnProfile:{width:"48px"},txtUsername:{marginRight:"auto",marginLeft:"16px",fontSize:"16px",color:"#6D8187"},txtLogout:{fontSize:"16px",color:"#6D8187",cursor:"default"},"@media (min-width: 1024px)":{boxHeader:{padding:"12px 123px 12px 120px"}}})(),t=L.a.getJSON("token").name;return Object(n.jsxs)("div",{className:e.boxHeader,children:[Object(n.jsx)("img",{className:e.icnProfile,src:je,alt:"profileIcon"}),Object(n.jsx)("div",{className:e.txtUsername,children:t}),Object(n.jsx)("div",{className:e.txtLogout,onClick:function(){return L.a.remove("token"),void window.location.reload()},children:"Logout"})]})}function ke(e){var t=Object(i.a)({boxTaskComplete:{marginTop:"12px",height:"158px",backgroundColor:"#FFFFFF",boxShadow:"0px 3px 6px #0000000A",padding:"24px 32px"},txtCompleted:{display:"flex",alignItems:"center",height:"24px",color:"#537178",fontSize:"20px"},boxCompleted:{display:"flex",flexDirection:"row"},numCompleted:{display:"flex",alignItems:"center",justifyContent:"center",color:"#5285EC",fontSize:"64px",height:"78px"},numTotal:{display:"flex",alignItems:"center",marginTop:"auto",marginLeft:"-9px",height:"24px",fontSize:"24px",color:"#8F9EA2"},"@media (min-width: 1024px)":{boxTaskComplete:{marginTop:"unset",width:"33.33%",borderRadius:"12px"}}})();return Object(n.jsxs)("div",{className:t.boxTaskComplete,children:[Object(n.jsx)("div",{className:t.txtCompleted,children:"Task Completed"}),Object(n.jsxs)("div",{className:t.boxCompleted,children:[Object(n.jsx)("div",{className:t.numCompleted,children:e.revShowDashboard.tasksCompleted}),Object(n.jsxs)("div",{className:t.numTotal,children:["/ ",e.revShowDashboard.totalTasks]})]})]})}function fe(e){var t=Object(i.a)({boxTaskLatest:{marginTop:"8px",height:"158px",backgroundColor:"#FFFFFF",boxShadow:"0px 3px 6px #0000000A",padding:"24px 28px 28px 32px"},txtLatestTask:{display:"flex",alignItems:"center",height:"24px",fontSize:"20px",color:"#537178"},boxTaskItem:{marginTop:"7px",width:"100%"},txtTaskRow:{display:"flex",alignItems:"center",height:"21px",width:"100%",paddingTop:"5px"},icnBullet:{height:"6px",width:"6px",borderRadius:"3px",backgroundColor:"#8F9EA2"},txtTaskItem:{width:"100%",marginLeft:"12px",color:"#8F9EA2",fontSize:"14px",overflow:"hidden",textOverflow:"ellipsis"},"@media (min-width: 1024px)":{boxTaskLatest:{marginTop:"unset",margin:"0 24px",width:"33.33%",borderRadius:"12px"}}})();return Object(n.jsxs)("div",{className:t.boxTaskLatest,children:[Object(n.jsx)("div",{className:t.txtLatestTask,children:"Latest Created Tasks"}),Object(n.jsx)("div",{className:t.boxTaskItem,children:e.revShowDashboard.latestTasks.map((function(e,a){var r=a;return Object(n.jsxs)("div",{className:t.txtTaskRow,children:[Object(n.jsx)("div",{className:t.icnBullet}),Object(n.jsx)("div",{className:t.txtTaskItem,style:{textDecoration:e.completed?"line-through":"unset"},children:e.name})]},r)}))})]})}var Oe=a(57);function Te(e){var t=Object(i.a)({boxPieChart:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"8px",height:"158px",backgroundColor:"#FFFFFF",boxShadow:"0px 3px 6px #0000000A"},chart:{width:"100px",transform:"rotate(-90deg)"},"@media (min-width: 1024px)":{boxPieChart:{marginTop:"unset",width:"33.33%",borderRadius:"12px"}}})();return Object(n.jsx)("div",{className:t.boxPieChart,children:Object(n.jsx)(Oe.PieChart,{className:t.chart,data:[{title:"One",value:e.revShowDashboard.tasksCompleted,color:"#5285EC"},{title:"Two",value:e.revShowDashboard.totalTasks-e.revShowDashboard.tasksCompleted,color:"#E8ECEC"}]})})}function ve(e){var t=Object(i.a)({boxFilter:{marginTop:"29px",padding:"0 13px"},iptFilter:{marginTop:"8px",width:"100%",height:"40px",border:"unset",backgroundColor:"#D9DFEB",borderRadius:"8px",textAlign:"center",color:"#7A7D7E",fontSize:"14px"},txtTask:{display:"flex",justifyContent:"center",alignItems:"center",height:"24px",color:"#537178",fontSize:"20px"},btnNewTask:{marginTop:"8px",width:"100%",height:"40px",backgroundColor:"#5285EC",color:"#FFFFFF",fontSize:"14px",border:"unset",borderRadius:"8px"},"@media (min-width: 1024px)":{boxFilter:{marginTop:"34px",padding:"unset",display:"flex",alignItems:"center",justifyContent:"space-between"},iptFilter:{marginTop:"unset",width:"244px"},btnNewTask:{marginTop:"unset",width:"124px",marginLeft:"12px"}}})();return Object(n.jsxs)("div",{className:t.boxFilter,children:[Object(n.jsx)("div",{className:t.txtTask,children:"Tasks"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{className:t.iptFilter,name:"taskName",type:"text",value:e.filterTaskState.taskName,onChange:e.handleInputFilterChange,placeholder:"Search by task name"}),Object(n.jsx)("button",{className:t.btnNewTask,onClick:function(){return e.handleBtnAddTask()},children:"+ New Task"})]})]})}var we=a(58),Se=a.n(we),Fe=a.p+"static/media/pen-solid.bbe77542.svg",Ee=a.p+"static/media/trash-solid.0d4a2cab.svg";function Ce(e){var t=Object(i.a)({boxTaskList:{margin:"16px 0 11px 0",padding:"0 16px",boxShadow:"0px 3px 6px #00000014",backgroundColor:"#FFFFFF"},txtTaskRow:{display:"flex",alignItems:"center",padding:"24px 0",width:"100%",borderBottom:"2px solid #E8E8E8"},spaceIcnBox:{width:"19px"},icnBox:{height:"19px",width:"19px",borderRadius:"4px",border:"2px solid #95A4AB"},icnTick:{marginTop:"-7px",marginLeft:"-4px",width:"30px !important",color:"#707070"},txtTaskItem:{width:"calc(100% - 51px)",marginLeft:"12px",fontSize:"20px",color:"#5285EC",overflow:"hidden",overflowWrap:"break-word"},icnPen:{width:"16px",margin:"0 17px"},"@media (min-width: 1024px)":{boxTaskList:{padding:"0 35px 0 24px",borderRadius:"12px"}}})();return Object(n.jsx)("div",{className:t.boxTaskList,children:e.revShowTasks&&0!==e.revShowTasks.tasks.length&&e.revShowTasks.tasks.sort((function(e,t){return Date.parse(t.createdAt)-Date.parse(e.createdAt)})).filter((function(t){var a=t.name.toLowerCase().includes(e.filterTaskState.taskName.toLowerCase());return e.filterTaskState.taskName?a:t})).map((function(a,r){var s=r;return Object(n.jsxs)("div",{className:t.txtTaskRow,style:{borderBottom:e.revShowTasks.tasks.length===r+1&&"unset"},children:[Object(n.jsx)("div",{className:t.spaceIcnBox,children:Object(n.jsx)("div",{className:t.icnBox,onClick:function(){return e.handleBoxCrossTask(a._id,a.completed)},children:a.completed&&Object(n.jsx)(Se.a,{className:t.icnTick})})}),Object(n.jsx)("div",{className:t.txtTaskItem,style:{textDecoration:a.completed?"line-through":"unset",color:a.completed&&"#537178"},children:a.name}),Object(n.jsx)("img",{className:t.icnPen,src:Fe,alt:"editIcon",onClick:function(){return e.handleBtnEditTask(a._id,a.name)}}),Object(n.jsx)("img",{src:Ee,alt:"deleteIcon",onClick:function(){return e.handleBtnDelTask(a._id)}})]},s)}))})}function Ne(e){var t=Object(i.a)({modalBackground:{display:"flex",position:"absolute",backgroundColor:"#00000033",height:"100%",width:"100%",top:0,left:0,zIndex:1},modalContent:{width:"296px",height:"193px",marginTop:"84px",marginLeft:"auto",marginRight:"auto",padding:"24px 24px 29px",borderRadius:"12px",backgroundColor:"#FFFFFF"},txtNewTask:{fontSize:"20px",color:"#537178",height:"24px"},txtTaskName:{display:"flex",alignItems:"center",marginTop:"24px",padding:"0 16px",width:"100%",height:"40px",fontSize:"14px",color:"#7A7D7E",backgroundColor:"#EEF1F8",borderRadius:"8px",border:"unset"},btnNewTask:{marginTop:"12px",width:"100%",height:"40px",backgroundColor:"#5285EC",borderRadius:"8px",border:"unset",fontSize:"14px",color:"#FFFFFF"},"@media (min-width: 1024px)":{modalContent:{margin:"auto"}}})();return Object(n.jsx)("div",{className:t.modalBackground,onClick:function(){return e.handleCancelAddTask()},children:Object(n.jsxs)("div",{className:t.modalContent,onClick:function(e){return e.stopPropagation()},children:[Object(n.jsx)("div",{className:t.txtNewTask,children:"+ New Task"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{className:t.txtTaskName,name:"taskName",type:"text",value:e.addTaskState.taskName,onChange:e.handleInputAddChange,placeholder:"Task Name",autoFocus:!0}),Object(n.jsx)("button",{type:"submit",className:t.btnNewTask,onClick:function(){return e.handleAddTask()},children:"+ New Task"})]})]})})}function Ae(e){var t=Object(i.a)({modalBackground:{display:"flex",position:"absolute",backgroundColor:"#00000033",height:"100%",width:"100%",top:0,left:0,zIndex:1},modalContent:{width:"296px",height:"193px",marginTop:"84px",marginLeft:"auto",marginRight:"auto",padding:"24px 24px 29px",borderRadius:"12px",backgroundColor:"#FFFFFF"},txtEditTask:{fontSize:"20px",color:"#537178",height:"24px"},txtTaskName:{display:"flex",alignItems:"center",marginTop:"24px",padding:"0 16px",width:"100%",height:"40px",fontSize:"14px",color:"#7A7D7E",backgroundColor:"#EEF1F8",borderRadius:"8px",border:"unset"},btnEditTask:{marginTop:"12px",width:"100%",height:"40px",backgroundColor:"#5285EC",borderRadius:"8px",border:"unset",fontSize:"14px",color:"#FFFFFF"},"@media (min-width: 1024px)":{modalContent:{margin:"auto"}}})();return Object(n.jsx)("div",{className:t.modalBackground,onClick:function(){return e.handleCancelEditTask()},children:Object(n.jsxs)("div",{className:t.modalContent,onClick:function(e){return e.stopPropagation()},children:[Object(n.jsx)("div",{className:t.txtEditTask,children:"Edit Task"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{className:t.txtTaskName,name:"taskName",type:"text",value:e.editTaskState.taskName,onChange:e.handleInputEditChange,placeholder:"Task Name",autoFocus:!0}),Object(n.jsx)("button",{type:"submit",className:t.btnEditTask,onClick:function(){return e.handleEditTask()},children:"Edit Task"})]})]})})}function De(e){var t=Object(i.a)({boxNoTask:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"12px",width:"100%",height:"158px",backgroundColor:"#FFFFFF",boxShadow:"0px 3px 6px #0000000A"},txtNoTask:{marginTop:"37px",height:"24px",fontSize:"20px",color:"#537178"},btnNewTask:{marginTop:"20px",width:"124px",height:"40px",backgroundColor:"#5285EC",borderRadius:"8px",fontSize:"14px",color:"#FFFFFF",border:"unset"},"@media (min-width: 1024px)":{boxNoTask:{margin:"auto",width:"304px",borderRadius:"12px"}}})();return Object(n.jsxs)("div",{className:t.boxNoTask,children:[Object(n.jsx)("div",{className:t.txtNoTask,children:"You have no task."}),Object(n.jsx)("button",{className:t.btnNewTask,onClick:function(){return e.handleBtnAddTask()},children:"+ New Task"})]})}a(96);var ye=a(62);function Ie(e){var t=Object(i.a)({modalBackground:{display:"flex",position:"absolute",backgroundColor:"#00000033",height:"100%",width:"100%",top:0,left:0,zIndex:1},modalContent:{margin:"auto"}})();return Object(n.jsx)("div",{className:t.modalBackground,children:Object(n.jsx)("div",{className:t.modalContent,children:Object(n.jsx)(ye.a,{animation:"border",variant:"primary",style:{width:"50px",height:"50px"}})})})}function Re(){var e=Object(i.a)({container:{display:"flex",flexDirection:"column",height:"100%"},content:{height:"calc(100% - 72px)",overflow:"auto"},contentTaskRow:{display:"flex",flexDirection:"column"},"@media (min-width: 1024px)":{content:{padding:"22px 120px"},contentTaskRow:{flexDirection:"row"}}})(),t=Object(r.useReducer)((function(e,t){return Object(p.a)(Object(p.a)({},e),t)}),{isAddTask:!1,isEditTask:!1}),a=Object(he.a)(t,2),s=a[0],o=a[1],c=Object(r.useReducer)((function(e,t){return Object(p.a)(Object(p.a)({},e),t)}),{taskName:""}),x=Object(he.a)(c,2),l=x[0],u=x[1],b=Object(r.useReducer)((function(e,t){return Object(p.a)(Object(p.a)({},e),t)}),{taskName:"",taskId:""}),h=Object(he.a)(b,2),j=h[0],g=h[1],f=Object(r.useReducer)((function(e,t){return Object(p.a)(Object(p.a)({},e),t)}),{taskName:""}),O=Object(he.a)(f,2),v=O[0],w=O[1],F=Object(d.c)((function(e){return e.data.revShowDashboard})),E=Object(d.c)((function(e){return e.data.revShowTasks})),N=Object(d.c)((function(e){return e.data.revCreateTasks})),A=Object(d.c)((function(e){return e.data.revUpdateTasks})),D=Object(d.c)((function(e){return e.data.revDeleteTasks})),y=Object(d.b)(),I=function(){return y({type:m,formData:e});var e},R=function(){return y({type:k,formData:e});var e},_=function(e){return y(function(e){return{type:T,formData:e}}(e))},L=function(e){return y(function(e){return{type:S,formData:e}}(e))},B=function(e){return y(function(e){return{type:C,formData:e}}(e))};Object(r.useEffect)((function(){I(),R()}),[N,A,D]);var z=function(){!0===s.isAddTask?(o({isAddTask:!1}),u({taskName:""})):o({isAddTask:!0})},K=function(){if(""!==l.taskName){var e={name:l.taskName};_(e)}H()},H=function(){o({isAddTask:!1}),u({taskName:""})},P=function(){o({isEditTask:!1}),g({taskName:""})},M=function(e){var t=e.target.name;u(Object(be.a)({},t,e.target.value))};return Object(n.jsxs)("div",{className:e.container,children:[Object(n.jsx)(ge,{}),F?F&&0!==F.latestTasks.length?Object(n.jsxs)("div",{className:e.content,children:[s.isAddTask&&Object(n.jsx)(Ne,{handleCancelAddTask:H,addTaskState:l,handleInputAddChange:M,handleAddTask:K}),s.isEditTask&&Object(n.jsx)(Ae,{handleCancelEditTask:P,editTaskState:j,handleInputEditChange:function(e){var t=e.target.name;g(Object(be.a)({},t,e.target.value))},handleEditTask:function(){if(""!==j.taskName){var e={id:j.taskId,name:j.taskName};L(e)}P()}}),Object(n.jsxs)("div",{className:e.contentTaskRow,children:[Object(n.jsx)(ke,{revShowDashboard:F}),Object(n.jsx)(fe,{revShowDashboard:F}),Object(n.jsx)(Te,{revShowDashboard:F})]}),Object(n.jsx)(ve,{filterTaskState:v,handleInputFilterChange:function(e){var t=e.target.name;w(Object(be.a)({},t,e.target.value))},handleBtnAddTask:z}),Object(n.jsx)(Ce,{revShowTasks:E,filterTaskState:v,handleBoxCrossTask:function(e,t){L(t?{id:e,completed:!1}:{id:e,completed:!0})},handleBtnEditTask:function(e,t){!0===s.isEditTask?(o({isEditTask:!1}),g({taskId:"",taskName:""})):(o({isEditTask:!0}),g({taskId:e,taskName:t}))},handleBtnDelTask:function(e){B({id:e})}})]}):s.isAddTask?Object(n.jsx)(Ne,{handleCancelAddTask:H,addTaskState:l,handleInputAddChange:M,handleAddTask:K}):Object(n.jsx)(De,{handleBtnAddTask:z}):Object(n.jsx)(Ie,{})]})}var _e=L.a.getJSON("token");function Le(){var e=function(){return!!_e};return Object(n.jsxs)(pe.a,{basename:"/#",children:[Object(n.jsx)(ue.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(ue.a,{to:"/home"})}}),Object(n.jsx)(ue.b,{exact:!0,path:"/login",render:function(){return e()?Object(n.jsx)(ue.a,{to:"/home"}):Object(n.jsx)(me,{})}}),Object(n.jsx)(ue.b,{exact:!0,path:"/home",render:function(){return e()?Object(n.jsx)(Re,{}):Object(n.jsx)(ue.a,{to:"/login"})}})]})}function Be(){var e=Object(i.a)({"@global":{body:{margin:0,padding:0,letterSpacing:"0.5px",boxSizing:"border-box"},div:{boxSizing:"border-box"},input:{boxSizing:"border-box"},button:{boxSizing:"border-box"},"input:focus":{outline:"unset",border:"2px solid #5285EC"},"input::placeholder":{color:"#7A7D7E"},"button:focus":{outline:"unset",border:"2px solid ##1251d0"},"button:hover":{backgroundColor:"#1251d0"}},container:{height:"100vh",width:"100vw",backgroundColor:"#F4F4F6",fontFamily:"Montserrat, medium, sans-serif"}})();return Object(n.jsx)("div",{className:e.container,children:Object(n.jsx)(d.a,{store:de,children:Object(n.jsx)(le.a,{children:Object(n.jsx)(Le,{})})})})}var ze=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Be,{})}),document.getElementById("root")),ze()}},[[101,1,2]]]);
//# sourceMappingURL=main.0c5810bb.chunk.js.map