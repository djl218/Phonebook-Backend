(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=t(4),l=t(2),i=function(e){var n=e.newSearch,t=e.handleNewSearch;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.addNameNumber,t=e.newName,a=e.handleNewName,u=e.newNumber,c=e.handleNewNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.person,t=e.deleteNameNumber;return r.a.createElement("div",null,n.name," ",n.number,r.a.createElement("button",{onClick:t},"delete"))},f=t(3),s=t.n(f),b="http://localhost:3001/persons",h=function(){return s.a.get(b).then((function(e){return e.data}))},v=function(e){return s.a.post(b,e).then((function(e){return e.data}))},p=function(e,n){return s.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return s.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},N=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),s=f[0],b=f[1],N=Object(a.useState)(""),j=Object(l.a)(N,2),O=j[0],S=j[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),C=k[0],B=k[1],z=Object(a.useState)(null),D=Object(l.a)(z,2),I=D[0],J=D[1],L=Object(a.useState)(null),R=Object(l.a)(L,2),T=R[0],x=R[1];Object(a.useEffect)((function(){h().then((function(e){u(e)}))}),[]);var A=t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(E,{message:I}),r.a.createElement(g,{message:T}),r.a.createElement(i,{newSearch:C,handleNewSearch:function(e){B(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{addNameNumber:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(t.map((function(e){return e.name})).includes(s)){!0===window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))?p(n.id,Object(o.a)(Object(o.a)({},n),{},{number:O})).then((function(e){u(A.map((function(n){return n.name!==s?n:e}))),b(""),S("")})).catch((function(e){x("Information of ".concat(s," has already been removed from server")),b(""),S(""),setTimeout((function(){x(null)}),5e3)})):(u(A),b(""),S(""))}else{var a={name:s,number:O,id:t.length+1};v(a).then((function(e){u(t.concat(e)),J("Added ".concat(s)),b(""),S(""),setTimeout((function(){J(null)}),5e3)}))}},newName:s,handleNewName:function(e){b(e.target.value)},newNumber:O,handleNewNumber:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),A.map((function(e){return r.a.createElement(d,{key:e.id,person:e,deleteNameNumber:function(){return function(e){var n=t.find((function(n){return n.id===e}));if(!0!==window.confirm("Delete ".concat(n.name,"?")))return A;w(e).then((function(){u(A.filter((function(n){return n.id!==e})))}))}(e.id)}})})))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b2fa35b5.chunk.js.map