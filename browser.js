// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},p=r()?l:c,_=function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Math.floor,y=function e(r,t,n,o){var i,a,u,f,l,c,p,_,y,b,s,v,j;if(r<=0)return 0;if(1===r||0===n)return t[o];if(i=o,r<8){for(s=0,j=0;j<r;j++)s+=t[i],i+=n;return s}if(r<=128){for(a=t[i],u=t[i+n],f=t[i+2*n],l=t[i+3*n],c=t[i+4*n],p=t[i+5*n],_=t[i+6*n],y=t[i+7*n],i+=8*n,b=r%8,j=8;j<r-b;j+=8)a+=t[i],u+=t[i+n],f+=t[i+2*n],l+=t[i+3*n],c+=t[i+4*n],p+=t[i+5*n],_+=t[i+6*n],y+=t[i+7*n],i+=8*n;for(s=a+u+(f+l)+(c+p+(_+y));j<r;j++)s+=t[i],i+=n;return s}return v=d(r/2),e(v-=v%8,t,n,i)+e(r-v,t,n,i+v*n)},b=y,s=function(e,r,t){var n,o,i;if(e<=0)return 0;if(1===e||0===t)return r[0];if(n=t<0?(1-e)*t:0,e<8){for(o=0,i=0;i<e;i++)o+=r[n],n+=t;return o}return b(e,r,t,n)};_(s,"ndarray",y);var v=s;function j(e,r,t,n){var o,i,a,u,f,l,c;if(l=e-r,e<=0||l<=0)return NaN;if(1===e||0===n)return 0;for(o=v(e,t,n)/e,i=n<0?(1-e)*n:0,a=0,u=0,c=0;c<e;c++)a+=(f=t[i]-o)*f,u+=f,i+=n;return a/l-u/e*(u/l)}return _(j,"ndarray",(function(e,r,t,n,o){var i,a,u,f,l,c,p;if(c=e-r,e<=0||c<=0)return NaN;if(1===e||0===n)return 0;for(i=v.ndarray(e,t,n,o)/e,a=o,u=0,f=0,p=0;p<e;p++)u+=(l=t[a]-i)*l,f+=l,a+=n;return u/c-f/e*(f/c)})),j},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).variancepn=r();
//# sourceMappingURL=browser.js.map
