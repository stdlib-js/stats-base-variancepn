// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e};function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var p=Math.floor;function _(e,r,t,n){var o,a,i,u,f,l,c,d,y,s,b,v,j;if(e<=0)return 0;if(1===e||0===t)return r[n];if(o=n,e<8){for(b=0,j=0;j<e;j++)b+=r[o],o+=t;return b}if(e<=128){for(a=r[o],i=r[o+t],u=r[o+2*t],f=r[o+3*t],l=r[o+4*t],c=r[o+5*t],d=r[o+6*t],y=r[o+7*t],o+=8*t,s=e%8,j=8;j<e-s;j+=8)a+=r[o],i+=r[o+t],u+=r[o+2*t],f+=r[o+3*t],l+=r[o+4*t],c+=r[o+5*t],d+=r[o+6*t],y+=r[o+7*t],o+=8*t;for(b=a+i+(u+f)+(l+c+(d+y));j<e;j++)b+=r[o],o+=t;return b}return v=p(e/2),_(v-=v%8,r,t,o)+_(e-v,r,t,o+v*t)}function d(e,r,t){var n,o,a;if(e<=0)return 0;if(1===e||0===t)return r[0];if(n=t<0?(1-e)*t:0,e<8){for(o=0,a=0;a<e;a++)o+=r[n],n+=t;return o}return _(e,r,t,n)}function y(e,r,t,n){var o,a,i,u,f,l,c;if(l=e-r,e<=0||l<=0)return NaN;if(1===e||0===n)return 0;for(o=d(e,t,n)/e,a=n<0?(1-e)*n:0,i=0,u=0,c=0;c<e;c++)i+=(f=t[a]-o)*f,u+=f,a+=n;return i/l-u/e*(u/l)}c(d,"ndarray",_),c(y,"ndarray",(function(e,r,t,n,o){var a,i,u,f,l,c,p;if(c=e-r,e<=0||c<=0)return NaN;if(1===e||0===n)return 0;for(a=_(e,t,n,o)/e,i=o,u=0,f=0,p=0;p<e;p++)u+=(l=t[i]-a)*l,f+=l,i+=n;return u/c-f/e*(f/c)}));const{ndarray:s}=y;e.default=y,e.ndarray=s,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).variancepn={});
//# sourceMappingURL=index.js.map
