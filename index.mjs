// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsumpw@esm/index.mjs";var n=e;var t=function(r,e,t,a){var s,i,d,f,o,u,m;if(u=r-e,r<=0||u<=0)return NaN;if(1===r||0===a)return 0;for(s=n(r,t,a)/r,i=a<0?(1-r)*a:0,d=0,f=0,m=0;m<r;m++)d+=(o=t[i]-s)*o,f+=o,i+=a;return d/u-f/r*(f/u)},a=e.ndarray;var s=t;r(s,"ndarray",(function(r,e,n,t,s){var i,d,f,o,u,m,l;if(m=r-e,r<=0||m<=0)return NaN;if(1===r||0===t)return 0;for(i=a(r,n,t,s)/r,d=s,f=0,o=0,l=0;l<r;l++)f+=(u=n[d]-i)*u,o+=u,d+=t;return f/m-o/r*(o/m)}));var i=s;export{i as default};
//# sourceMappingURL=index.mjs.map
