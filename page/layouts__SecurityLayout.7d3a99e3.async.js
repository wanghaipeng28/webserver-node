(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0jlH":function(e,t,n){"use strict";n.r(t);var c=n("3EJg"),r=n("mXGw"),a=n.n(r),u=n("oNR1"),s=n("9kvl"),i=n("UKnr"),o=n("bIAK"),f=function(e){var t=e.loading,n=e.currentUser,s=e.dispatch,f=e.location,l=e.children,b=f.pathname,j=f.search,O=Object(r["useState"])(!1),d=Object(c["a"])(O,2),g=d[0],p=d[1],h=Object(r["useState"])(!1),w=Object(c["a"])(h,2),E=w[0],m=w[1],v=Object(r["useState"])(""),U=Object(c["a"])(v,2),k=U[0],J=U[1];return Object(r["useEffect"])((function(){m(!!n&&n.id>0)}),[n]),Object(r["useEffect"])((function(){J(Object(i["stringify"])({redirect:b+j}))}),[f]),Object(r["useEffect"])((function(){s&&s({type:"user/fetchCurrent"}),p(!0)}),[1]),!E&&t||!g?a.a.createElement(o["a"],null):E||"/user/login"===b?a.a.createElement(a.a.Fragment,null,l):a.a.createElement(u["c"],{to:"/user/login?".concat(k)})};t["default"]=Object(s["b"])((function(e){var t=e.user,n=e.loading;return{currentUser:t.currentUser,loading:n.effects["user/fetchCurrent"]}}))(f)}}]);