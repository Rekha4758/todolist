(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(4),l=n.n(c),i=(n(13),n(3)),o=n(5),r=n(6),d=n(8),j=n(7),h=n(0);var m=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"shadow p-2 my-2 col-sm-9",children:e.value}),Object(h.jsx)("button",{className:"btn btn-danger my-2 col-sm-2 offset-1",onClick:function(){e.sendData(e.id)},children:"X"})]})},u=(n(15),n(16),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={items:[],text:""},e.handleChange=function(t){e.setState({text:t.target.value})},e.handleAdd=function(t){if(""!==e.state.text){var n=[].concat(Object(i.a)(e.state.items),[e.state.text]);e.setState({items:n,text:""})}},e.handleDelete=function(t){console.log("Deleted",t);var n=Object(i.a)(e.state.items);console.log("Olditems",n);var s=n.filter((function(e,n){return n!==t}));console.log("Newitems",s),e.setState({items:s})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"container-fluid my-5",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-sm-6 mx-auto text-white shadow-lg p-3",children:[Object(h.jsx)("h2",{className:"text-center",children:" Today's Plan "}),Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsxs)("div",{className:"row row1",children:[Object(h.jsx)("div",{className:"col-9",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Write Plan Here",value:this.state.text,onChange:this.handleChange})}),Object(h.jsx)("div",{className:"col-2",children:Object(h.jsx)("button",{className:"btn btn-info px-3 font-weight-bold",onClick:this.handleAdd,children:"Add"})})]}),Object(h.jsx)("div",{className:"conatiner",children:Object(h.jsx)("ul",{className:"list-unstyled row m-5",children:this.state.items.map((function(t,n){return Object(h.jsx)(m,{id:n,value:t,sendData:e.handleDelete},n)}))})})]})]})})})}}]),n}(s.Component)),b=u;l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f4b34ac9.chunk.js.map