(this.webpackJsonpreactcalc=this.webpackJsonpreactcalc||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(7),i=n.n(a),s=n(2),o=n(3),u=n(5),h=n(4),j=(n(13),n(0)),l=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{id:"header",children:Object(j.jsxs)("section",{id:"container",children:[Object(j.jsx)("h1",{id:"title",children:"Calculator"}),Object(j.jsx)("a",{id:"github",href:"https://github.com/DanielRios549/ReactCalc",children:"Fork Me"})]})})}}]),n}(c.a.Component),b=(n(15),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("footer",{id:"footer",children:Object(j.jsx)("span",{children:"Version: 0.0.1"})})}}]),n}(c.a.Component)),d=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("button",{onClick:this.props.onClick,className:this.props.name,"data-info":this.props.info,"data-display":this.props.text,children:Object(j.jsx)("span",{children:this.props.text})})}}]),n}(c.a.PureComponent),p=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).current=function(){return""!==t.props.show?t.props.show:"0"},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("section",{id:"display",children:Object(j.jsx)("div",{id:"operation",children:this.current()})})}}]),n}(c.a.Component),O=n(8),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={items:[]},t.shouldComponentUpdate=function(){return void 0!==t.props.item},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("aside",{id:"history",children:Object(j.jsx)("ul",{id:"operations",children:this.state.items.map((function(t,e){return Object(j.jsx)("li",{id:"".concat(e),className:"item",children:t},e)}))})})}}]),n}(c.a.Component);f.getDerivedStateFromProps=function(t,e){return void 0!==t.item?{items:[].concat(Object(O.a)(e.items),[t.item])}:null};var v=function t(e){var n=this;Object(s.a)(this,t),this.state=e,this.handleButton=function(t){var e=t.currentTarget.getAttribute("data-display"),r="",c=!1;return n.state.history=void 0,"\u2190"===e?r=n.backSpace():"C"===e?r="0":"="===e?(r=n.resolve(),c=!0,n.state.history=n.history()):r=n.show(e),{current:r,result:c,history:n.state.history}},this.backSpace=function(){return 1===n.state.current.length||!1!==n.state.result?"0":n.state.current.slice(0,-1)},this.show=function(t){return"0"===n.state.current?"".concat(t):"".concat(n.state.current).concat(t)},this.history=function(){return n.state.history=n.state.current},this.resolve=function(){return(0,eval)(n.state.current).toString()}},m=(n(16),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).dial=[["(",")","\u2190","C"],["1","2","3","*"],["4","5","6","/"],["7","8","9","+"],[".","0","=","-"]],t.state={current:"",result:!1,history:void 0},t.update=function(e){var n=new v(t.state);t.setState(n.handleButton(e))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{show:this.state.current}),Object(j.jsx)("main",{id:"basic",className:"calc",children:this.dial.map((function(e,n){return Object(j.jsx)("div",{id:"line".concat(n+1),className:"line",children:e.map((function(e,r){var c="".concat(n+1,"-").concat(r+1);return Object(j.jsx)(d,{onClick:t.update,name:"button".concat(c),text:e,info:"Button ".concat(e)},c)}))},n)}))}),Object(j.jsx)(f,{item:this.state.history})]})}}]),n}(c.a.Component)),y=(n(17),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(m,{})}}]),n}(c.a.Component));i.a.render(Object(j.jsxs)(c.a.StrictMode,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(y,{}),Object(j.jsx)(b,{})]}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.6ba9cfea.chunk.js.map