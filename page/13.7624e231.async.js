(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{QFkr:function(e,t,n){"use strict";n.r(t);n("SwVN"),n("wQBs");var a=n("Fcif"),r=n("mK0O"),c=n("mXGw"),i=n.n(c),o=n("8Jek"),l=n.n(o),s=n("2bKy"),u=n("Bfez"),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},m=function(e){var t,n,i=e.prefixCls,o=e.className,s=e.color,m=void 0===s?"blue":s,d=e.dot,b=e.pending,f=void 0!==b&&b,v=(e.position,e.label),h=e.children,O=p(e,["prefixCls","className","color","dot","pending","position","label","children"]),g=c["useContext"](u["b"]),y=g.getPrefixCls,j=y("timeline",i),w=l()((t={},Object(r["a"])(t,"".concat(j,"-item"),!0),Object(r["a"])(t,"".concat(j,"-item-pending"),f),t),o),x=l()((n={},Object(r["a"])(n,"".concat(j,"-item-head"),!0),Object(r["a"])(n,"".concat(j,"-item-head-custom"),!!d),Object(r["a"])(n,"".concat(j,"-item-head-").concat(m),!0),n));return c["createElement"]("li",Object(a["a"])({},O,{className:w}),v&&c["createElement"]("div",{className:"".concat(j,"-item-label")},v),c["createElement"]("div",{className:"".concat(j,"-item-tail")}),c["createElement"]("div",{className:x,style:{borderColor:/blue|red|green|gray/.test(m||"")?void 0:m}},d),c["createElement"]("div",{className:"".concat(j,"-item-content")},h))},d=m,b=n("Bu1f"),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e){var t,n=c["useContext"](u["b"]),i=n.getPrefixCls,o=n.direction,p=e.prefixCls,m=e.pending,v=void 0===m?null:m,h=e.pendingDot,O=e.children,g=e.className,y=e.reverse,j=void 0!==y&&y,w=e.mode,x=void 0===w?"":w,N=f(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),E=i("timeline",p),k="boolean"===typeof v?null:v,C=v?c["createElement"](d,{pending:!!v,dot:h||c["createElement"](s["a"],null)},k):null,B=c["Children"].toArray(O);B.push(C),j&&B.reverse();var S=function(e,t){return"alternate"===x?"right"===e.props.position?"".concat(E,"-item-right"):"left"===e.props.position?"".concat(E,"-item-left"):"".concat(E,t%2===0?"-item-left":"-item-right"):"left"===x?"".concat(E,"-item-left"):"right"===x||"right"===e.props.position?"".concat(E,"-item-right"):""},P=B.filter((function(e){return!!e})),L=c["Children"].count(P),A="".concat(E,"-item-last"),H=c["Children"].map(P,(function(e,t){var n=t===L-2?A:"",a=t===L-1?A:"";return Object(b["a"])(e,{className:l()([e.props.className,!j&&v?n:a,S(e,t)])})})),I=B.some((function(e){var t;return!!(null===(t=null===e||void 0===e?void 0:e.props)||void 0===t?void 0:t.label)})),J=l()(E,(t={},Object(r["a"])(t,"".concat(E,"-pending"),!!v),Object(r["a"])(t,"".concat(E,"-reverse"),!!j),Object(r["a"])(t,"".concat(E,"-").concat(x),!!x&&!I),Object(r["a"])(t,"".concat(E,"-label"),I),Object(r["a"])(t,"".concat(E,"-rtl"),"rtl"===o),t),g);return c["createElement"]("ul",Object(a["a"])({},N,{className:J}),H)};v.Item=d;var h=v,O=h,g=(n("sbMj"),n("H4M2")),y=n("rQJw"),j=n.n(y),w=n("t9Gk"),x=n("gvoz"),N=n("UI0R"),E=n("72t7"),k=n("TOBq"),C=n("9kvl"),B=function(e){Object(E["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;Object(x["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),e.state={btnName:"\u5f00\u59cb\u6784\u5efa",btnLoading:!1},e.startBuild=function(t){e._startBuild().then((function(e){}))},e}return Object(N["a"])(n,[{key:"componentDidMount",value:function(){this.getStatus().then((function(e){}))}},{key:"getStatus",value:function(){var e=Object(w["a"])(j.a.mark((function e(){var t,n,a=this;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,t({type:"Home/callBuildAction",code:1});case 3:n=e.sent,"null"!==n.status&&setTimeout((function(){return a.getStatus()}),1e3);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"_startBuild",value:function(){var e=Object(w["a"])(j.a.mark((function e(){var t;return j.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,t({type:"Home/callBuildAction",code:2});case 3:return e.next=5,this.getStatus();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"render",value:function(){var e=this.props,t=e.timeLineObj,n=e.btnName,a=e.btnLoading;return i.a.createElement("div",null,i.a.createElement("div",{style:{textAlign:"center",marginBottom:"12px"}},i.a.createElement(g["a"],{type:"primary",loading:a,onClick:this.startBuild},n)),i.a.createElement(O,{mode:"left"},t.map((function(e,t){return i.a.createElement(O.Item,{color:"success"===e.type?"green":"red",key:t,label:e.time},e.msg)}))))}}]),n}(c["Component"]);t["default"]=Object(C["b"])((function(e){var t=e.Home,n=e.loading;return{loading:n.effects["Home/callBuildAction"],timeLineObj:t.build.timeLineObj,btnName:t.build.btnName,btnLoading:t.build.btnLoading}}))(B)},wQBs:function(e,t,n){}}]);