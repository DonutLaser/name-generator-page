(function(e){function t(t){for(var o,i,c=t[0],l=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"30b7":function(e,t,n){},"4aea":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NamePreview",{attrs:{preview:e.name}}),n("div",{staticClass:"toolbar-row"},[n("ButtonAny",{on:{"click-event":e.addLetter}}),n("ButtonVowel",{on:{"click-event":e.addLetter}}),n("ButtonConsonant",{on:{"click-event":e.addLetter}}),n("ButtonSpace",{on:{"click-event":e.addLetter}})],1),n("div",{staticClass:"toolbar-row"},[n("BaseCheckbox",{attrs:{name:"Capitalize first word"},on:{toggle:e.capitalizeFirstWord}})],1)],1)},r=[],i=(n("fb6a"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"name-preview"}},[e.preview?e._e():n("h1",{attrs:{id:"placeholder"}},[e._v(" "+e._s(e.placeholder)+" ")]),n("h1",{attrs:{id:"preview"}},[e._v(" "+e._s(e.preview)+" ")])])}),c=[],l={props:{preview:{type:String,default:""}},data:function(){return{placeholder:"Choose between consonants and vowels to generate a name"}}},s=l,u=(n("8fd2"),n("2877")),p=Object(u["a"])(s,i,c,!1,null,null,null),f=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseButton",{attrs:{name:"Any letter"},on:{"click-event":e.generateRandomLetter}})},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",on:{click:e.onClick}},[e._v(" "+e._s(e.name)+" ")])},v=[],b={props:{name:{type:String,default:"Press Me"}},methods:{onClick:function(){this.$emit("click-event")}}},g=b,w=(n("a13a"),Object(u["a"])(g,m,v,!1,null,null,null)),B=w.exports,_={components:{BaseButton:B},methods:{generateRandomLetter:function(){var e=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],t=Math.floor(Math.random()*e.length);this.$emit("click-event",e[t])}}},k=_,y=Object(u["a"])(k,d,h,!1,null,null,null),C=y.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseButton",{attrs:{name:"Vowel"},on:{"click-event":e.generateRandomVowel}})},x=[],O={components:{BaseButton:B},methods:{generateRandomVowel:function(){var e=["a","e","i","o","u"],t=Math.floor(Math.random()*e.length);this.$emit("click-event",e[t])}}},$=O,S=Object(u["a"])($,j,x,!1,null,null,null),M=S.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseButton",{attrs:{name:"Consonant"},on:{"click-event":e.generateRandomConsonant}})},z=[],E={components:{BaseButton:B},methods:{generateRandomConsonant:function(){var e=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"],t=Math.floor(Math.random()*e.length);this.$emit("click-event",e[t])}}},L=E,R=Object(u["a"])(L,P,z,!1,null,null,null),V=R.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseButton",{attrs:{name:"Space"},on:{"click-event":e.getSpace}})},T=[],q={components:{BaseButton:B},methods:{getSpace:function(){this.$emit("click-event"," ")}}},F=q,J=Object(u["a"])(F,A,T,!1,null,null,null),N=J.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseButton",{class:{active:e.on},attrs:{name:e.name},on:{"click-event":e.onClick}})},W=[],D={components:{BaseButton:B},props:{name:{type:String,default:"Checkbox"}},data:function(){return{on:!1}},methods:{onClick:function(){this.on=!this.on,this.$emit("toggle",this.on)}}},G=D,H=(n("d62c"),Object(u["a"])(G,U,W,!1,null,null,null)),I=H.exports,K={name:"App",components:{NamePreview:f,ButtonAny:C,ButtonVowel:M,ButtonConsonant:V,ButtonSpace:N,BaseCheckbox:I},data:function(){return{name:"",capitalize:!1}},methods:{addLetter:function(e){this.name+=e,this.capitalize&&1===this.name.length&&(this.name=this.name.toUpperCase())},capitalizeFirstWord:function(e){this.capitalize=e,this.name&&(this.capitalize?this.name=this.name[0].toUpperCase()+this.name.slice(1):this.name=this.name.toLowerCase())}}},Q=K,X=(n("034f"),Object(u["a"])(Q,a,r,!1,null,null,null)),Y=X.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(Y)}}).$mount("#app")},5882:function(e,t,n){},"85ec":function(e,t,n){},"8fd2":function(e,t,n){"use strict";var o=n("5882"),a=n.n(o);a.a},a13a:function(e,t,n){"use strict";var o=n("4aea"),a=n.n(o);a.a},d62c:function(e,t,n){"use strict";var o=n("30b7"),a=n.n(o);a.a}});
//# sourceMappingURL=app.9a144913.js.map