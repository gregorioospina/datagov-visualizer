(window.webpackJsonpfront=window.webpackJsonpfront||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(3),i=t.n(c),s=(t(14),t(4)),r=t(5),l=t(7),u=t(6),m=t(1),f=t(8),h=(t(15),function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).getNames=t.getNames.bind(Object(m.a)(t)),t.printNames=t.printNames.bind(Object(m.a)(t)),t.insertName=t.insertName.bind(Object(m.a)(t)),t.state={names:""},t}return Object(f.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null," Hola todos, como van !"),o.a.createElement("div",null,this.printNames()))}},{key:"componentDidMount",value:function(){this.insertName(),this.getNames()}},{key:"printNames",value:function(){return o.a.createElement("p",null," ",this.state.names," ")}},{key:"insertName",value:function(e){fetch("/newname",{method:"post",headers:{"Content-Type":"application/json"},body:{name:e}}).then((function(e){console.log(e),console.log("hoooola")})).then((function(e){console.log(e)}))}},{key:"getNames",value:function(){var e=this;fetch("/names").then((function(e){return console.log(e),e.json()})).then((function(n){e.setState({names:n.value})}))}}]),n}(o.a.Component));i.a.render(o.a.createElement(h,null),document.getElementById("root"))},9:function(e,n,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.19e64df1.chunk.js.map