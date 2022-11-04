// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,f){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(e,r)||a.call(e,r)?(l=e.__proto__,e.__proto__=t,delete e[r],e[r]=f.value,e.__proto__=l):e[r]=f.value),p="get"in f,_="set"in f,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,r,f.get),_&&i&&i.call(e,r,f.set),e};function l(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function p(e,r,t,n){var o,i,u,a,f,l,_,d,y,b,s,v,j;if(e<=0)return 0;if(1===e||0===t)return r[n];if(o=n,e<8){for(s=0,j=0;j<e;j++)s+=r[o],o+=t;return s}if(e<=128){for(i=r[o],u=r[o+t],a=r[o+2*t],f=r[o+3*t],l=r[o+4*t],_=r[o+5*t],d=r[o+6*t],y=r[o+7*t],o+=8*t,b=e%8,j=8;j<e-b;j+=8)i+=r[o],u+=r[o+t],a+=r[o+2*t],f+=r[o+3*t],l+=r[o+4*t],_+=r[o+5*t],d+=r[o+6*t],y+=r[o+7*t],o+=8*t;for(s=i+u+(a+f)+(l+_+(d+y));j<e;j++)s+=r[o],o+=t;return s}return v=c(e/2),p(v-=v%8,r,t,o)+p(e-v,r,t,o+v*t)}function _(e,r,t){var n,o,i;if(e<=0)return 0;if(1===e||0===t)return r[0];if(n=t<0?(1-e)*t:0,e<8){for(o=0,i=0;i<e;i++)o+=r[n],n+=t;return o}return p(e,r,t,n)}function d(e,r,t,n){var o,i,u,a,f,l,c;if(l=e-r,e<=0||l<=0)return NaN;if(1===e||0===n)return 0;for(o=_(e,t,n)/e,i=n<0?(1-e)*n:0,u=0,a=0,c=0;c<e;c++)u+=(f=t[i]-o)*f,a+=f,i+=n;return u/l-a/e*(a/l)}return l(_,"ndarray",p),l(d,"ndarray",(function(e,r,t,n,o){var i,u,a,f,l,c,_;if(c=e-r,e<=0||c<=0)return NaN;if(1===e||0===n)return 0;for(i=p(e,t,n,o)/e,u=o,a=0,f=0,_=0;_<e;_++)a+=(l=t[u]-i)*l,f+=l,u+=n;return a/c-f/e*(f/c)})),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).variancepn=r();
//# sourceMappingURL=browser.js.map