(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"14b9":function(t,n,e){var r=e("5ca1");r(r.P,"String",{repeat:e("9744")})},"2299e":function(t,n,e){"use strict";var r=e("ad63"),o=e.n(r);o.a},"230e":function(t,n,e){var r=e("d3f4"),o=e("7726").document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},"24cc":function(t,n,e){"use strict";var r=e("9d79"),o=e.n(r);o.a},"2aba":function(t,n,e){var r=e("7726"),o=e("32e9"),c=e("69a8"),i=e("ca5a")("src"),u=e("fa5b"),a="toString",f=(""+u).split(a);e("8378").inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var a="function"==typeof e;a&&(c(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(c(e,i)||o(e,i,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,a,function(){return"function"==typeof this&&this[i]||u.call(this)})},"2d00":function(t,n){t.exports=!1},"32e9":function(t,n,e){var r=e("86cc"),o=e("4630");t.exports=e("9e1e")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},4588:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},4630:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"51f9":function(t,n,e){},"53a0":function(t,n,e){"use strict";var r=e("51f9"),o=e.n(r);o.a},5537:function(t,n,e){var r=e("8378"),o=e("7726"),c="__core-js_shared__",i=o[c]||(o[c]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"5ca1":function(t,n,e){var r=e("7726"),o=e("8378"),c=e("32e9"),i=e("2aba"),u=e("9b43"),a="prototype",f=function(t,n,e){var s,l,p,d,v=t&f.F,m=t&f.G,b=t&f.S,h=t&f.P,y=t&f.B,x=m?r:b?r[n]||(r[n]={}):(r[n]||{})[a],w=m?o:o[n]||(o[n]={}),_=w[a]||(w[a]={});for(s in m&&(e=n),e)l=!v&&x&&void 0!==x[s],p=(l?x:e)[s],d=y&&l?u(p,r):h&&"function"==typeof p?u(Function.call,p):p,x&&i(x,s,p,t&f.U),w[s]!=p&&c(w,s,d),h&&_[s]!=p&&(_[s]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},"69a8":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"6a99":function(t,n,e){var r=e("d3f4");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},7726:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"79e5":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},8378:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},"86cc":function(t,n,e){var r=e("cb7c"),o=e("c69a"),c=e("6a99"),i=Object.defineProperty;n.f=e("9e1e")?Object.defineProperty:function(t,n,e){if(r(t),n=c(n,!0),r(e),o)try{return i(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},9744:function(t,n,e){"use strict";var r=e("4588"),o=e("be13");t.exports=function(t){var n=String(o(this)),e="",c=r(t);if(c<0||c==1/0)throw RangeError("Count can't be negative");for(;c>0;(c>>>=1)&&(n+=n))1&c&&(e+=n);return e}},"9b43":function(t,n,e){var r=e("d8e8");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"9d79":function(t,n,e){},"9e1e":function(t,n,e){t.exports=!e("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},ad63:function(t,n,e){},bb51:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"home"},[e("welcome-section")],1)},o=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"welcome"},[e("welcome-logo"),e("h1",{staticClass:"welcomeTitle"},[t._v("Vue-snake-game")]),e("start-game-button",{on:{click:t.redirectToGame}})],1)},i=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"welcomeLogoWrapper"},[e("table",t._l(3,function(n){return e("tr",{class:"row"+n},t._l(8,function(t){return e("td",{class:"col"+t})}),0)}),0)])},a=[],f={data:function(){return{}}},s=f,l=(e("2299e"),e("2877")),p=Object(l["a"])(s,u,a,!1,null,"200d7eb0",null),d=p.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"startGameBtn",on:{click:t.onClick}},[e("span",{staticClass:"btnIcon"},[e("fa-icon",{attrs:{icon:"play-circle"}})],1),e("span",{staticClass:"btnText"},[t._v(t._s(t.buttonTextComputed))])])},m=[],b=(e("14b9"),{props:{repeat:{required:!1,type:Boolean,default:!1}},data:function(){return{}},computed:{buttonTextComputed:function(){return this.repeat?"Try one more!":"Start a game!"}},methods:{onClick:function(){this.$emit("click")}}}),h=b,y=(e("24cc"),Object(l["a"])(h,v,m,!1,null,"5973e29a",null)),x=y.exports,w={name:"WelcomeSection",components:{WelcomeLogo:d,StartGameButton:x},methods:{redirectToGame:function(){this.$router.push({name:"game"})}}},_=w,g=(e("53a0"),Object(l["a"])(_,c,i,!1,null,"8d85f2fa",null)),S=g.exports,C={name:"home",components:{WelcomeSection:S}},j=C,E=Object(l["a"])(j,r,o,!1,null,null,null);n["default"]=E.exports},be13:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c69a:function(t,n,e){t.exports=!e("9e1e")&&!e("79e5")(function(){return 7!=Object.defineProperty(e("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},cb7c:function(t,n,e){var r=e("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},d3f4:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d8e8:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},fa5b:function(t,n,e){t.exports=e("5537")("native-function-to-string",Function.toString)}}]);