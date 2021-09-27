(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={input:"Styles_input__nOoyE",label:"Styles_label__3APz2",button:"Styles_button__2lBsi"}},13:function(e,t,n){e.exports={input:"Style_input__2Qelg",contacts:"Style_contacts__4ymdB",contact:"Style_contact__28ZvR",button:"Style_button__26zBA"}},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(14),s=n.n(o),i=n(9),u=n(19),l=n(3),b=n(4),j=n(6),d=n(5),O=n(10),p=n(11),h=n(12),m=n.n(h),f=n(1),v=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.handleSubmit,a=e.state;return Object(f.jsxs)("form",{className:m.a.form,onSubmit:n,children:[Object(f.jsxs)("label",{className:m.a.label,children:[Object(f.jsx)("span",{children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",value:a.name,placeholder:"John Doe",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:t,className:m.a.input})]}),Object(f.jsxs)("label",{className:m.a.label,children:[Object(f.jsx)("span",{children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",value:a.number,placeholder:"+38...",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:t,className:m.a.input})]}),Object(f.jsx)("button",{className:m.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),y=n(39),x=n(7),C=Object(x.b)("app/addContacts",(function(e){return{payload:{id:Object(y.a)(),name:e.name,number:e.number}}})),g=Object(x.b)("app/deleteContacts"),_=Object(x.b)("app/filterContacts"),S={name:"",number:""},k=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=Object(p.a)({},S),e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(O.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(Object(p.a)({},e.state)),e.reset()},e.reset=function(){e.setState(Object(p.a)({},S))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsx)(v,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,state:this.state})}}]),n}(c.Component),N=Object(i.b)(null,(function(e){return{onSubmit:function(t){return e(C(t))}}}))(k),A=n(13),w=n.n(A),z=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.handleFilter;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",name:"query",value:t,required:!0,onInput:n,className:w.a.input,autoComplete:"off"})]})}}]),n}(c.Component),B=Object(i.b)(null,(function(e){return{handleFilter:function(t){return e(_(t.target.value))}}}))(z),q=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.contacts,n=e.deleteContact;return Object(f.jsx)("ul",{className:w.a.contacts,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(f.jsxs)("li",{className:w.a.contact,children:[Object(f.jsx)("span",{children:a}),Object(f.jsx)("span",{children:c}),Object(f.jsx)("button",{className:w.a.button,onClick:function(){return n(t)},children:"X"})]},t)}))})}}]),n}(c.Component),F=Object(i.b)((function(e){var t=e.contacts;return{contacts:function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){var a=e.name,c=e.number;return a.toLocaleLowerCase().includes(n)||c.includes(t)}))}(t.items,t.filter)}}),(function(e){return{deleteContact:function(t){return e(g(t))}}}))(q),J=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(B,{}),Object(f.jsx)(F,{})]})}}]),n}(c.Component),L=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(N,{}),Object(f.jsx)(J,{})]})]})}}]),n}(c.Component),Z=n(15),D=n(8),E=n(20),I=n.n(E),M=n(2),P=Object(x.c)([],(a={},Object(O.a)(a,C,(function(e,t){var n=t.payload;console.log(e);var a=e.some((function(e){return e.name===n.name}));return console.log(a),a?alert("".concat(n.name," is already in contacts!")):[].concat(Object(Z.a)(e),[n])})),Object(O.a)(a,g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),Q=Object(x.c)("",Object(O.a)({},_,(function(e,t){return t.payload}))),R=Object(M.b)({items:P,filter:Q}),T=n(21),X=n.n(T),$=[].concat(Object(Z.a)(Object(x.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[X.a]),G={key:"root",storage:I.a,blacklist:["filter"]},H=Object(x.a)({reducer:{contacts:Object(D.g)(G,R)},middleware:$,devTools:!1}),K={store:H,persistor:Object(D.h)(H)};n(36);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(i.a,{store:K.store,children:Object(f.jsx)(u.a,{loading:null,persistor:K.persistor,children:Object(f.jsx)(L,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b95a4e93.chunk.js.map