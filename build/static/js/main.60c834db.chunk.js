(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),o=t.n(r),c=t(14),i=t(2),l=t(3),m=t.n(l);var f=function(e){var n=e.notification,t=e.notificationClass;return console.log(t),n?u.a.createElement("div",{className:t},n):null},s=function(e){var n=e.value,t=e.onChange;return u.a.createElement("div",null,"filter shown with ",u.a.createElement("input",{value:n,onChange:t}))},d=function(e){var n=e.handleSubmit,t=e.handleNameChange,a=e.handleNumberChange,r=e.newName,o=e.newNumber;return u.a.createElement("form",{onSubmit:n},u.a.createElement("h2",null,"Add New"),u.a.createElement("div",null,"name: ",u.a.createElement("input",{onChange:t,value:r})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{onChange:a,value:o})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},h=function(e){var n=e.filterValue,t=e.persons,a=e.handleRemove;return u.a.createElement("ul",null,n?t.filter((function(e){return new RegExp(n,"ig").test(e.name)})).map((function(e){return u.a.createElement("li",{key:e.id},e.name," ",e.number," ",u.a.createElement("button",{onClick:function(){return a(e.id,e.name)}},"delete"))})):t.map((function(e){return u.a.createElement("li",{key:e.id},e.name," ",e.number," ",u.a.createElement("button",{onClick:function(){return a(e.id,e.name)}},"delete"))})))},b=function(e){return m.a.post("/api/persons",e).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat("/api/persons","/").concat(e)).then((function(e){return e.data}))},E=function(e,n){return m.a.put("".concat("/api/persons","/").concat(n),e).then((function(e){return e.data}))},v=function(){var e=Object(a.useState)([{name:"Arto Hellas",id:1}]),n=Object(i.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),v=l[0],g=l[1],w=Object(a.useState)(""),j=Object(i.a)(w,2),O=j[0],C=j[1],N=Object(a.useState)(""),k=Object(i.a)(N,2),y=k[0],S=k[1],T=Object(a.useState)(""),x=Object(i.a)(T,2),A=x[0],R=x[1],J=Object(a.useState)(""),V=Object(i.a)(J,2),B=V[0],D=V[1];Object(a.useEffect)((function(){m.a.get("/api/persons").then((function(e){return e.data})).then((function(e){return r(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement(f,{notification:A,notificationClass:B}),u.a.createElement("h2",null,"Phonebook"),u.a.createElement(s,{value:y,onChange:function(e){S(e.target.value)}}),u.a.createElement(d,{handleSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===v}))){if(window.confirm("Would you like to update the existing number for ".concat(v," ?"))){var n=t.find((function(e){return e.name===v})),a=Object(c.a)({},n,{number:O});E(a,n.id).then((function(e){return r(t.map((function(n){return n.id===e.id?e:n})))})).then((function(e){D("success"),R("Number for ".concat(v," updated")),setTimeout((function(){R(""),D("")}),5e3),g(""),C("")})).catch((function(e){D("error"),R("This number has been already deleted"),setTimeout((function(){R(""),D("")}),5e3)}))}}else b({name:v,number:O}).then((function(e){return r(t.concat(e))})),D("success"),R("".concat(v," was added to the phonebook")),setTimeout((function(){R(""),D("")}),5e3),g(""),C("")},handleNumberChange:function(e){C(e.target.value)},handleNameChange:function(e){g(e.target.value)},newNumber:O,newName:v}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(h,{filterValue:y,persons:t,handleRemove:function(e,n){window.confirm("Are you sure, you want to delete ".concat(n," ?"))&&p(e).then((function(n){return r(t.filter((function(n){return n.id!==e})))})).catch((function(e){D("error"),R("This number has been already deleted"),setTimeout((function(){R(""),D("")}),5e3)}))}}))};t(37);o.a.render(u.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.60c834db.chunk.js.map