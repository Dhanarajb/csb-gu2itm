(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(11),i=c.n(r),a=c(7),j=c(2),o=c(1),d=function(){return Object(o.jsxs)("div",{className:"navv",children:[Object(o.jsx)(a.b,{className:"it",exact:!0,to:"/",style:{color:"#000",textDecoration:"none",marginRight:"20px"},children:"Item"}),Object(o.jsx)(a.b,{className:"it",exact:!0,to:"/cart",style:{color:"#000",textDecoration:"none",marginRight:"20px"},children:"Cart"})]})},l=[{id:1,name:"Apple",price:10},{id:2,name:"Banana",price:12},{id:3,name:"Guava",price:9},{id:4,name:"Water Mellon",price:15},{id:5,name:"Lichi",price:25},{id:6,name:"Cherry",price:5}],s=c(5),u=c(20),b=c(14),h=Object(b.b)({name:"cart reducer",initialState:[],reducers:{add:function(e,t){return[].concat(Object(u.a)(e),[t.payload])},inc:function(e,t){var c=e.map((function(e){return e.id===t.payload&&e.amount++,e}));e=c},dec:function(e,t){var c=e.map((function(e){return e.id===t.payload&&e.amount>1&&e.amount--,e}));e=c},remove:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},reset:function(){return[]}}}),O=h.actions,x=h.reducer,m=function(){var e=Object(s.c)((function(e){return e.cart})),t=Object(s.b)(),c=function(c){e.some((function(e){return e.id===c.id}))?alert("Already Added"):t(O.add({id:c.id,name:c.name,price:c.price,amount:1}))};return Object(o.jsx)(o.Fragment,{children:l.map((function(e){return Object(o.jsxs)("div",{style:{marginTop:"50px",paddingBottom:"50px",borderBottom:"1px solid"},children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("p",{children:e.price}),Object(o.jsx)("button",{onClick:c.bind(undefined,e),children:"Add to cart"})]},e.id)}))})},p=(c(31),void 0),f=function(){var e=Object(j.f)(),t=Object(s.c)((function(e){return e.cart})),c=Object(s.b)(),n=function(e){c(O.inc(e))},r=function(e){c(O.dec(e))},i=function(e){c(O.remove(e))};return Object(o.jsx)(o.Fragment,{children:0!==t.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("table",{style:{width:"100%",margin:"30px 0",borderCollapse:"collapse"},children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Id"}),Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Price"}),Object(o.jsx)("th",{children:"Total Price"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Action"})]}),t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id}),Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.price}),Object(o.jsx)("td",{children:e.price*e.amount}),Object(o.jsxs)("td",{children:[Object(o.jsx)("button",{onClick:r.bind(p,e.id),children:"-"})," ",e.amount," ",Object(o.jsx)("button",{onClick:n.bind(p,e.id),children:"+"})]}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:i.bind(p,e.id),children:"Delete"})})]})}))]}),Object(o.jsx)("button",{onClick:function(){c(O.reset())},children:"Remove All"}),Object(o.jsxs)("h3",{children:["Grand Total :"," ",t.reduce((function(e,t){return e+t.price*t.amount}),0)]}),Object(o.jsx)("button",{className:"btnn",onClick:function(){e.push("/checkout")},children:"Checkout"})]}):Object(o.jsx)("p",{style:{fontWeight:"bold"},children:"Empty Cart"})})},v=c(10),g=function(e){e.cartItems,e.handleCustomerInfo;var t=Object(n.useState)(""),c=Object(v.a)(t,2),r=c[0],i=c[1],a=Object(n.useState)(""),j=Object(v.a)(a,2),d=j[0],l=j[1],s=Object(n.useState)(""),u=Object(v.a)(s,2),b=u[0],h=u[1],O=Object(n.useState)(""),x=Object(v.a)(O,2),m=x[0],p=x[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"h1",children:"Checkout"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();alert("Your order is successfully done")},children:[Object(o.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(o.jsx)("input",{type:"text",id:"firstName",value:r,onChange:function(e){return i(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(o.jsx)("input",{type:"text",id:"lastName",value:d,onChange:function(e){return l(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(o.jsx)("input",{type:"email",id:"email",value:b,onChange:function(e){return h(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"phone",children:"Phone:"}),Object(o.jsx)("input",{type:"tel",id:"phone",value:m,onChange:function(e){return p(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"bt",type:"submit",children:"Submit"})]})]})},y=function(){return Object(o.jsxs)(a.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:m}),Object(o.jsx)(j.a,{exact:!0,path:"/cart",component:f}),Object(o.jsx)(j.a,{exact:!0,path:"/checkout",component:g})]})]})},C=Object(b.a)({reducer:{cart:x}}),N=document.getElementById("root");i.a.render(Object(o.jsx)(n.StrictMode,{children:Object(o.jsx)(s.a,{store:C,children:Object(o.jsx)(y,{})})}),N)}},[[32,1,2]]]);
//# sourceMappingURL=main.c2c63208.chunk.js.map