"use strict";var d=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var x=d(function(E,m){
var w=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray;function j(r,a,n,e,c){var o,p,q,t,i,v,u,s,y;for(o=n.data,p=n.accessors[0],q=w(r,o,e,c)/r,s=r-a,t=c,i=0,v=0,y=0;y<r;y++)u=p(o,t)-q,i+=u*u,v+=u,t+=e;return i/s-v/r*(v/s)}m.exports=j
});var f=d(function(F,M){
var k=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray,O=require('@stdlib/array-base-arraylike2object/dist'),P=x();function R(r,a,n,e,c){var o,p,q,t,i,v,u,s;if(u=r-a,r<=0||u<=0)return NaN;if(r===1||e===0)return 0;if(t=O(n),t.accessorProtocol)return P(r,a,t,e,c);for(o=k(r,n,e,c)/r,p=c,q=0,i=0,s=0;s<r;s++)v=n[p]-o,q+=v*v,i+=v,p+=e;return q/u-i/r*(i/u)}M.exports=R
});var l=d(function(G,g){
var h=require('@stdlib/strided-base-stride2offset/dist'),z=f();function A(r,a,n,e){return z(r,a,n,e,h(r,e))}g.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=l(),C=f();B(b,"ndarray",C);module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
