"use strict";var o=function(r,v){return function(){return v||r((v={exports:{}}).exports,v),v.exports}};var m=o(function(z,q){
var w=require('@stdlib/blas-ext-base-gsumpw/dist');function O(r,v,p,a){var s,t,c,u,e,n,i;if(n=r-v,r<=0||n<=0)return NaN;if(r===1||a===0)return 0;for(s=w(r,p,a)/r,a<0?t=(1-r)*a:t=0,c=0,u=0,i=0;i<r;i++)e=p[t]-s,c+=e*e,u+=e,t+=a;return c/n-u/r*(u/n)}q.exports=O
});var y=o(function(A,x){
var R=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray;function b(r,v,p,a,s){var t,c,u,e,n,i,f;if(i=r-v,r<=0||i<=0)return NaN;if(r===1||a===0)return 0;for(t=R(r,p,a,s)/r,c=s,u=0,e=0,f=0;f<r;f++)n=p[c]-t,u+=n*n,e+=n,c+=a;return u/i-e/r*(e/i)}x.exports=b
});var l=o(function(B,g){
var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=m(),h=y();d(M,"ndarray",h);g.exports=M
});var j=l();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
