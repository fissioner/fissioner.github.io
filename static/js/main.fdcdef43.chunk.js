(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),s=a.n(l),i=(a(96),a(15)),o=a(16),c=a(18),m=a(17),p=a(19),u=a(14),d=a(12),h=a.n(d),y=a(13),E=a(26),b=a.n(E),v=a(38),f=a.n(v),g=a(84),w=a.n(g);function N(){var e=Object(u.a)(["\n{\n  employees {\n    id\n    first\n    last\n    email\n    phone\n    salary\n  }\n}\n"]);return N=function(){return e},e}var j=h()(N()),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r))))._salaryFormat=function(e){return e=String(e),"$".concat(e.substring(0,e.length-3),",").concat(e.substring(e.length-3,e.length))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=1,a=this.props,n=a.data,l=n.loading,s=n.employees,i=a.viewEmployee,o=a.createEmployee;return l?null:r.a.createElement("div",{className:"component"},r.a.createElement("h2",{className:"title"},"Employees"),r.a.createElement(f.a,{variant:"contained",color:"default","aria-label":"Add",size:"small",onClick:o},r.a.createElement(w.a,null)),"                ",r.a.createElement(b.a,{elevation:2},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"bg-primary"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Salary"))),r.a.createElement("tbody",null,s.map(function(a){return r.a.createElement("tr",{key:a.id,className:"item",onClick:function(){return i(a.id,a.first,a.last,a.email,a.phone,a.salary)}},r.a.createElement("th",{scope:"row"},t++),r.a.createElement("td",null,a.first," ",a.last),r.a.createElement("td",null,a.email),r.a.createElement("td",null,a.phone.length>9?"(".concat(a.phone.substring(0,3),") ").concat(a.phone.substring(3,6),"-").concat(a.phone.substring(6)):a.phone),r.a.createElement("td",null,a.salary>999?e._salaryFormat(a.salary):"$".concat(a.salary)))})))))}}]),t}(n.Component),S=Object(y.graphql)(j)(O),_=a(20),$=a.n(_),C=a(39),k=a(87),q=a.n(k),x=a(85),I=a.n(x),F=a(86),P=a.n(F);function L(){var e=Object(u.a)(["\nmutation($id: ID!) {\n    removeEmployee(id: $id)\n  }\n"]);return L=function(){return e},e}function T(){var e=Object(u.a)(["\n{\n  employees {\n    id\n    first\n    last\n    email\n    phone\n    salary\n  }\n}\n"]);return T=function(){return e},e}var A=h()(T()),D=h()(L()),Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r))))._removeEmployee=function(){var e=Object(C.a)($.a.mark(function e(t){return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.removeEmployee({variables:{id:a.props.id},update:function(e){var t=e.readQuery({query:A});t.employees=t.employees.filter(function(e){return e.id===a.props.id}),e.writeQuery({query:A,data:t})}});case 2:window.location.reload(!1);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a._salaryFormat=function(e){return e=String(e),"$".concat(e.substring(0,e.length-3),",").concat(e.substring(e.length-3,e.length))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.first,l=t.last,s=t.email,i=t.phone,o=t.salary,c=t.viewTable,m=t.editEmployee;return r.a.createElement("div",{className:"component"},r.a.createElement("h2",{className:"title"},"Employee Record"),r.a.createElement(f.a,{variant:"contained",color:"default","aria-label":"Add",size:"small",onClick:m},r.a.createElement(I.a,null)),r.a.createElement(f.a,{variant:"contained",color:"default","aria-label":"Add",size:"small"},r.a.createElement(P.a,{"data-toggle":"modal","data-target":"#deletePermanent"})),r.a.createElement(b.a,{elevation:2,className:"record"},r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Employee ID"),r.a.createElement("div",null,a)),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Full Name"),r.a.createElement("div",null,n," ",l)),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Email"),r.a.createElement("div",null,s)),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Phone"),r.a.createElement("div",null,i.length>9?"(".concat(i.substring(0,3),") ").concat(i.substring(3,6),"-").concat(i.substring(6)):i)),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Salary"),r.a.createElement("div",null,o>999?this._salaryFormat(o):"$".concat(o)))),r.a.createElement("button",{className:"btn btn-primary",onClick:c},"Back"),r.a.createElement("div",{className:"modal fade",id:"deletePermanent",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"ModalLabel"},r.a.createElement("b",null,"Warning!")),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body bg-danger"},"Are you sure you want to delete this employee record permanently?"),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(t){return e._removeEmployee(t)}},r.a.createElement(q.a,null)))))))}}]),t}(n.Component),B=Object(y.graphql)(D,{name:"removeEmployee"})(Q);function V(){var e=Object(u.a)(["\nmutation($id: ID!, $first: String!, $last: String!, $email: String!, $phone: String!, $salary: Int!) {\n    updateEmployee(id: $id, first: $first, last: $last, email: $email, phone: $phone, salary: $salary)\n  }\n"]);return V=function(){return e},e}function z(){var e=Object(u.a)(["\nmutation($first: String!, $last: String!, $email: String!, $phone: String!, $salary: Int!) {\n    createEmployee(first: $first, last: $last, email: $email, phone: $phone, salary: $salary) {\n      id\n      first\n      last\n      email\n      phone\n      salary\n    }\n  }\n"]);return z=function(){return e},e}function J(){var e=Object(u.a)(["\n{\n  employees {\n    id\n    first\n    last\n    email\n    phone\n    salary\n  }\n}\n"]);return J=function(){return e},e}var R=h()(J()),W=h()(z()),M=h()(V()),G=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"createEmployee",value:function(){var e=Object(C.a)($.a.mark(function e(t){return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.props.createEmployee({variables:{first:this.props.first,last:this.props.last,email:this.props.email,phone:this.props.phone,salary:parseInt(this.props.salary)},update:function(e,t){var a=t.data.createEmployee,n=e.readQuery({query:R});n.employees=n.employees.push(a),e.writeQuery({query:R,data:n})}});case 3:this.props.viewTable();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateEmployee",value:function(){var e=Object(C.a)($.a.mark(function e(t){var a=this;return $.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.props.updateEmployee({variables:{id:this.props.id,first:this.props.first,last:this.props.last,email:this.props.email,phone:this.props.phone,salary:parseInt(this.props.salary)},update:function(e){var t=e.readQuery({query:R});t.employees=t.employees.map(function(e){return e.id===a.props.id?{id:a.props.id,first:a.props.first,last:a.props.last,email:a.props.email,phone:a.props.phone,salary:a.props.salary}:e}),e.writeQuery({query:R,data:t})}});case 3:this.props.viewTable();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.first,l=t.last,s=t.email,i=t.phone,o=t.salary,c=t.viewEmployee,m=t.viewTable,p=t.updateFirst,u=t.updateLast,d=t.updateEmail,h=t.updatePhone,y=t.updateSalary,E=t.isCreate;return r.a.createElement("div",{className:"component"},r.a.createElement("h2",{className:"title"},E?"Create Employee Record":"Edit Employee Record"),r.a.createElement("form",{onSubmit:function(t){return E?e.createEmployee(t):e.updateEmployee(t)}},r.a.createElement(b.a,{elevation:2,className:"record"},E?"":r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Employee ID"),r.a.createElement("div",null,a)),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"First"),r.a.createElement("input",{type:"text",className:"form-control",onChange:p,value:n,placeholder:"Jane",required:!0})),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Last"),r.a.createElement("input",{type:"text",className:"form-control",onChange:u,value:l,placeholder:"Doe",required:!0})),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Email"),r.a.createElement("input",{type:"email",className:"form-control",onChange:d,value:s,placeholder:"example@mail.com",required:!0})),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Phone"),r.a.createElement("input",{type:"text",size:"10",maxLength:"10",minLength:"10",className:"form-control",onChange:h,value:i,placeholder:"Enter 10 digits",required:!0})),r.a.createElement("div",{className:"data"},r.a.createElement("b",null,"Salary"),r.a.createElement("input",{type:"number",max:"1000000",className:"form-control",onChange:y,value:o,placeholder:"Numbers only, e.g. 87000",required:!0}))),r.a.createElement("button",{id:"backBtn",type:"button",className:"btn btn-primary",onClick:E?m:c},"Back"),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},E?"Create":"Save")))}}]),t}(n.Component),H=Object(y.compose)(Object(y.graphql)(W,{name:"createEmployee"}),Object(y.graphql)(M,{name:"updateEmployee"}))(G),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e)))._editEmployee=function(){a.setState({isEdit:!0,isView:!1})},a._viewEmployee=function(){a.setState({isView:!0,isEdit:!1})},a._viewTable=function(){a.setState({isEdit:!1,isView:!1,isCreate:!1})},a._createEmployee=function(){a.setState({isCreate:!0,isEdit:!0,id:"",first:"",last:"",email:"",phone:"",salary:""})},a._selectEmployee=function(e,t,n,r,l,s){a.setState({id:e,first:t,last:n,email:r,phone:l,salary:s}),a._viewEmployee()},a._updateFirst=function(e){a.setState({first:e.target.value})},a._updateLast=function(e){a.setState({last:e.target.value})},a._updateEmail=function(e){a.setState({email:e.target.value})},a._updatePhone=function(e){a.setState({phone:parseInt(e.target.value)})},a._updateSalary=function(e){a.setState({salary:e.target.value})},a._updateState=function(){a.setState({state:a.state})},a.state={isView:!1,isEdit:!1,isCreate:!1,id:"",first:"",last:"",email:"",phone:"",salary:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.isView?r.a.createElement(B,{updateState:this._updateState,editEmployee:this._editEmployee,viewTable:this._viewTable,id:this.state.id,first:this.state.first,last:this.state.last,email:this.state.email,phone:this.state.phone,salary:this.state.salary}):this.state.isEdit?r.a.createElement(H,{isCreate:this.state.isCreate,viewTable:this._viewTable,updateFirst:this._updateFirst,updateLast:this._updateLast,updateEmail:this._updateEmail,updatePhone:this._updatePhone,updateSalary:this._updateSalary,viewEmployee:this._viewEmployee,id:this.state.id,first:this.state.first,last:this.state.last,email:this.state.email,phone:this.state.phone,salary:this.state.salary}):r.a.createElement(S,{viewEmployee:this._selectEmployee,createEmployee:this._createEmployee}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=new(a(89).a)({uri:"https://thawing-springs-45393.herokuapp.com"});s.a.render(r.a.createElement(y.ApolloProvider,{client:U},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(205)},96:function(e,t,a){}},[[91,2,1]]]);
//# sourceMappingURL=main.fdcdef43.chunk.js.map