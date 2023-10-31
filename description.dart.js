(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.hi(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.hj(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.dq(b)
return new s(c,this)}:function(){if(s===null)s=A.dq(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.dq(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={dc:function dc(){},
dn(a,b,c){return a},
hb(a){var s,r
for(s=$.aO.length,r=0;r<s;++r)if(a===$.aO[r])return!0
return!1},
a8:function a8(a){this.a=a},
I:function I(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ek(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ha(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
t(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ag(a)
return s},
b8(a){var s,r=$.dF
if(r==null)r=$.dF=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ch(a){return A.eS(a)},
eS(a){var s,r,q,p
if(a instanceof A.m)return A.u(A.a3(a),null)
s=J.a2(a)
if(s===B.w||s===B.y||t.E.b(a)){r=B.f(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.u(A.a3(a),null)},
eT(a){if(typeof a=="number"||A.dl(a))return J.ag(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.X)return a.h(0)
return"Instance of '"+A.ch(a)+"'"},
i(a,b){if(a==null)J.dv(a)
throw A.d(A.h_(a,b))},
h_(a,b){var s,r="index"
if(!A.e2(b))return new A.W(!0,b,r,null)
s=A.cW(J.dv(a))
if(b<0||b>=s)return A.c1(b,s,a,r)
return new A.aq(null,null,!0,b,r,"Value not in range")},
d(a){return A.eg(new Error(),a)},
eg(a,b){var s
if(b==null)b=new A.P()
a.dartException=b
s=A.hl
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
hl(){return J.ag(this.dartException)},
ej(a){throw A.d(a)},
dt(a,b){throw A.eg(b,a)},
d6(a){throw A.d(A.bO(a))},
Q(a){var s,r,q,p,o,n
a=A.hh(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.Z([],t.S)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cx(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cy(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dJ(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
dd(a,b){var s=b==null,r=s?null:b.method
return new A.b5(a,r,s?null:b.receiver)},
aP(a){if(a==null)return new A.cf(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a4(a,a.dartException)
return A.fU(a)},
a4(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.aE(r,16)&8191)===10)switch(q){case 438:return A.a4(a,A.dd(A.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.t(s)
return A.a4(a,new A.ap(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.en()
n=$.eo()
m=$.ep()
l=$.eq()
k=$.et()
j=$.eu()
i=$.es()
$.er()
h=$.ew()
g=$.ev()
f=o.p(s)
if(f!=null)return A.a4(a,A.dd(A.aG(s),f))
else{f=n.p(s)
if(f!=null){f.method="call"
return A.a4(a,A.dd(A.aG(s),f))}else{f=m.p(s)
if(f==null){f=l.p(s)
if(f==null){f=k.p(s)
if(f==null){f=j.p(s)
if(f==null){f=i.p(s)
if(f==null){f=l.p(s)
if(f==null){f=h.p(s)
if(f==null){f=g.p(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.aG(s)
return A.a4(a,new A.ap(s,f==null?e:f.method))}}}return A.a4(a,new A.bg(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.as()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.a4(a,new A.W(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.as()
return a},
aL(a){var s
if(a==null)return new A.aA(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.aA(a)},
hg(a){if(a==null)return J.d7(a)
if(typeof a=="object")return A.b8(a)
return J.d7(a)},
h9(a,b,c,d,e,f){t.Z.a(a)
switch(A.cW(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cF("Unsupported number of arguments for wrapped closure"))},
bz(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.h9)
a.$identity=s
return s},
eK(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bd().constructor.prototype):Object.create(new A.a6(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dC(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.eG(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dC(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
eG(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eD)}throw A.d("Error in functionType of tearoff")},
eH(a,b,c,d){var s=A.dB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dC(a,b,c,d){var s,r
if(c)return A.eJ(a,b,d)
s=b.length
r=A.eH(s,d,a,b)
return r},
eI(a,b,c,d){var s=A.dB,r=A.eE
switch(b?-1:a){case 0:throw A.d(new A.b9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
eJ(a,b,c){var s,r
if($.dz==null)$.dz=A.dy("interceptor")
if($.dA==null)$.dA=A.dy("receiver")
s=b.length
r=A.eI(s,c,a,b)
return r},
dq(a){return A.eK(a)},
eD(a,b){return A.cT(v.typeUniverse,A.a3(a.a),b)},
dB(a){return a.a},
eE(a){return a.b},
dy(a){var s,r,q,p=new A.a6("receiver","interceptor"),o=J.eO(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.d8("Field name "+a+" not found.",null))},
hi(a){throw A.d(new A.bj(a))},
h2(a){return v.getIsolateTag(a)},
hX(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hd(a){var s,r,q,p,o,n=A.aG($.ef.$1(a)),m=$.cZ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d3[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.fs($.e9.$2(a,n))
if(q!=null){m=$.cZ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.d3[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.d5(s)
$.cZ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.d3[n]=s
return s}if(p==="-"){o=A.d5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.eh(a,s)
if(p==="*")throw A.d(A.dK(n))
if(v.leafTags[n]===true){o=A.d5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.eh(a,s)},
eh(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ds(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
d5(a){return J.ds(a,!1,null,!!a.$ia7)},
hf(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.d5(s)
else return J.ds(s,c,null,null)},
h6(){if(!0===$.dr)return
$.dr=!0
A.h7()},
h7(){var s,r,q,p,o,n,m,l
$.cZ=Object.create(null)
$.d3=Object.create(null)
A.h5()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ei.$1(o)
if(n!=null){m=A.hf(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
h5(){var s,r,q,p,o,n,m=B.l()
m=A.ae(B.m,A.ae(B.n,A.ae(B.h,A.ae(B.h,A.ae(B.o,A.ae(B.p,A.ae(B.q(B.f),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ef=new A.d0(p)
$.e9=new A.d1(o)
$.ei=new A.d2(n)},
ae(a,b){return a(b)||b},
fZ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
eR(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(new A.bZ("Illegal RegExp pattern ("+String(n)+")",a))},
hh(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cx:function cx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ap:function ap(a,b){this.a=a
this.b=b},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a},
cf:function cf(a){this.a=a},
aA:function aA(a){this.a=a
this.b=null},
X:function X(){},
aW:function aW(){},
aX:function aX(){},
be:function be(){},
bd:function bd(){},
a6:function a6(a,b){this.a=a
this.b=b},
bj:function bj(a){this.a=a},
b9:function b9(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
c2:function c2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dH(a,b){var s=b.c
return s==null?b.c=A.dj(a,b.y,!0):s},
de(a,b){var s=b.c
return s==null?b.c=A.aD(a,"aj",[b.y]):s},
dI(a){var s=a.x
if(s===6||s===7||s===8)return A.dI(a.y)
return s===12||s===13},
eW(a){return a.at},
ec(a){return A.cS(v.typeUniverse,a,!1)},
a_(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.dW(a,r,!0)
case 7:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.dj(a,r,!0)
case 8:s=b.y
r=A.a_(a,s,a0,a1)
if(r===s)return b
return A.dV(a,r,!0)
case 9:q=b.z
p=A.aJ(a,q,a0,a1)
if(p===q)return b
return A.aD(a,b.y,p)
case 10:o=b.y
n=A.a_(a,o,a0,a1)
m=b.z
l=A.aJ(a,m,a0,a1)
if(n===o&&l===m)return b
return A.dh(a,n,l)
case 12:k=b.y
j=A.a_(a,k,a0,a1)
i=b.z
h=A.fR(a,i,a0,a1)
if(j===k&&h===i)return b
return A.dU(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.aJ(a,g,a0,a1)
o=b.y
n=A.a_(a,o,a0,a1)
if(f===g&&n===o)return b
return A.di(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.aT("Attempted to substitute unexpected RTI kind "+c))}},
aJ(a,b,c,d){var s,r,q,p,o=b.length,n=A.cU(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a_(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
fS(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cU(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a_(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
fR(a,b,c,d){var s,r=b.a,q=A.aJ(a,r,c,d),p=b.b,o=A.aJ(a,p,c,d),n=b.c,m=A.fS(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bn()
s.a=q
s.b=o
s.c=m
return s},
Z(a,b){a[v.arrayRti]=b
return a},
eb(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.h4(r)
s=a.$S()
return s}return null},
h8(a,b){var s
if(A.dI(b))if(a instanceof A.X){s=A.eb(a)
if(s!=null)return s}return A.a3(a)},
a3(a){if(a instanceof A.m)return A.J(a)
if(Array.isArray(a))return A.cV(a)
return A.dk(J.a2(a))},
cV(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
J(a){var s=a.$ti
return s!=null?s:A.dk(a)},
dk(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.fA(a,s)},
fA(a,b){var s=a instanceof A.X?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fn(v.typeUniverse,s.name)
b.$ccache=r
return r},
h4(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cS(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
h3(a){return A.af(A.J(a))},
fQ(a){var s=a instanceof A.X?A.eb(a):null
if(s!=null)return s
if(t.r.b(a))return J.eB(a).a
if(Array.isArray(a))return A.cV(a)
return A.a3(a)},
af(a){var s=a.w
return s==null?a.w=A.dZ(a):s},
dZ(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.cR(a)
s=A.cS(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.dZ(s):r},
fz(a){var s,r,q,p,o,n=this
if(n===t.K)return A.U(n,a,A.fF)
if(!A.V(n))if(!(n===t._))s=!1
else s=!0
else s=!0
if(s)return A.U(n,a,A.fJ)
s=n.x
if(s===7)return A.U(n,a,A.fx)
if(s===1)return A.U(n,a,A.e3)
r=s===6?n.y:n
s=r.x
if(s===8)return A.U(n,a,A.fB)
if(r===t.p)q=A.e2
else if(r===t.i||r===t.q)q=A.fE
else if(r===t.N)q=A.fH
else q=r===t.y?A.dl:null
if(q!=null)return A.U(n,a,q)
if(s===9){p=r.y
if(r.z.every(A.hc)){n.r="$i"+p
if(p==="z")return A.U(n,a,A.fD)
return A.U(n,a,A.fI)}}else if(s===11){o=A.fZ(r.y,r.z)
return A.U(n,a,o==null?A.e3:o)}return A.U(n,a,A.fv)},
U(a,b,c){a.b=c
return a.b(b)},
fy(a){var s,r=this,q=A.fu
if(!A.V(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.ft
else if(r===t.K)q=A.fr
else{s=A.aM(r)
if(s)q=A.fw}r.a=q
return r.a(a)},
by(a){var s,r=a.x
if(!A.V(a))if(!(a===t._))if(!(a===t.A))if(r!==7)if(!(r===6&&A.by(a.y)))s=r===8&&A.by(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
fv(a){var s=this
if(a==null)return A.by(s)
return A.j(v.typeUniverse,A.h8(a,s),null,s,null)},
fx(a){if(a==null)return!0
return this.y.b(a)},
fI(a){var s,r=this
if(a==null)return A.by(r)
s=r.r
if(a instanceof A.m)return!!a[s]
return!!J.a2(a)[s]},
fD(a){var s,r=this
if(a==null)return A.by(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.m)return!!a[s]
return!!J.a2(a)[s]},
fu(a){var s,r=this
if(a==null){s=A.aM(r)
if(s)return a}else if(r.b(a))return a
A.e_(a,r)},
fw(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.e_(a,s)},
e_(a,b){throw A.d(A.dT(A.dN(a,A.u(b,null))))},
dp(a,b,c,d){var s=null
if(A.j(v.typeUniverse,a,s,b,s))return a
throw A.d(A.dT("The type argument '"+A.u(a,s)+"' is not a subtype of the type variable bound '"+A.u(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
dN(a,b){return A.bW(a)+": type '"+A.u(A.fQ(a),null)+"' is not a subtype of type '"+b+"'"},
dT(a){return new A.aB("TypeError: "+a)},
w(a,b){return new A.aB("TypeError: "+A.dN(a,b))},
fB(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.de(v.typeUniverse,r).b(a)},
fF(a){return a!=null},
fr(a){if(a!=null)return a
throw A.d(A.w(a,"Object"))},
fJ(a){return!0},
ft(a){return a},
e3(a){return!1},
dl(a){return!0===a||!1===a},
fp(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.w(a,"bool"))},
hO(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool"))},
hN(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool?"))},
hP(a){if(typeof a=="number")return a
throw A.d(A.w(a,"double"))},
hR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double"))},
hQ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double?"))},
e2(a){return typeof a=="number"&&Math.floor(a)===a},
cW(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.w(a,"int"))},
hT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int"))},
hS(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int?"))},
fE(a){return typeof a=="number"},
hU(a){if(typeof a=="number")return a
throw A.d(A.w(a,"num"))},
hV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num"))},
fq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num?"))},
fH(a){return typeof a=="string"},
aG(a){if(typeof a=="string")return a
throw A.d(A.w(a,"String"))},
hW(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String"))},
fs(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String?"))},
e7(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.u(a[q],b)
return s},
fL(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.e7(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.u(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
e0(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.Z([],t.S)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.i.k(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.i(a5,j)
m=B.d.aj(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.u(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.u(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.u(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.u(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.u(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
u(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.u(a.y,b)
return s}if(l===7){r=a.y
s=A.u(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.u(a.y,b)+">"
if(l===9){p=A.fT(a.y)
o=a.z
return o.length>0?p+("<"+A.e7(o,b)+">"):p}if(l===11)return A.fL(a,b)
if(l===12)return A.e0(a,b,null)
if(l===13)return A.e0(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.i(b,n)
return b[n]}return"?"},
fT(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fo(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
fn(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cS(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aE(a,5,"#")
q=A.cU(s)
for(p=0;p<s;++p)q[p]=r
o=A.aD(a,b,q)
n[b]=o
return o}else return m},
fl(a,b){return A.dX(a.tR,b)},
fk(a,b){return A.dX(a.eT,b)},
cS(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dR(A.dP(a,null,b,c))
r.set(b,s)
return s},
cT(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dR(A.dP(a,b,c,!0))
q.set(c,r)
return r},
fm(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.dh(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
T(a,b){b.a=A.fy
b.b=A.fz
return b},
aE(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.C(null,null)
s.x=b
s.at=c
r=A.T(a,s)
a.eC.set(c,r)
return r},
dW(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.fh(a,b,r,c)
a.eC.set(r,s)
return s},
fh(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.V(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.C(null,null)
q.x=6
q.y=b
q.at=c
return A.T(a,q)},
dj(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fg(a,b,r,c)
a.eC.set(r,s)
return s},
fg(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.V(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aM(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.aM(q.y))return q
else return A.dH(a,b)}}p=new A.C(null,null)
p.x=7
p.y=b
p.at=c
return A.T(a,p)},
dV(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fe(a,b,r,c)
a.eC.set(r,s)
return s},
fe(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.V(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.aD(a,"aj",[b])
else if(b===t.P||b===t.T)return t.G}q=new A.C(null,null)
q.x=8
q.y=b
q.at=c
return A.T(a,q)},
fi(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.C(null,null)
s.x=14
s.y=b
s.at=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
aC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
fd(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
aD(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.C(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.T(a,r)
a.eC.set(p,q)
return q},
dh(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.aC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.C(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.T(a,o)
a.eC.set(q,n)
return n},
fj(a,b,c){var s,r,q="+"+(b+"("+A.aC(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.C(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
dU(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aC(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aC(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fd(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.C(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.T(a,p)
a.eC.set(r,o)
return o},
di(a,b,c,d){var s,r=b.at+("<"+A.aC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ff(a,b,c,r,d)
a.eC.set(r,s)
return s},
ff(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cU(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.a_(a,b,r,0)
m=A.aJ(a,c,r,0)
return A.di(a,n,m,c!==m)}}l=new A.C(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.T(a,l)},
dP(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dR(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.f7(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dQ(a,r,l,k,!1)
else if(q===46)r=A.dQ(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.Y(a.u,a.e,k.pop()))
break
case 94:k.push(A.fi(a.u,k.pop()))
break
case 35:k.push(A.aE(a.u,5,"#"))
break
case 64:k.push(A.aE(a.u,2,"@"))
break
case 126:k.push(A.aE(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.f9(a,k)
break
case 38:A.f8(a,k)
break
case 42:p=a.u
k.push(A.dW(p,A.Y(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.dj(p,A.Y(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.dV(p,A.Y(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.f6(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dS(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fb(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.Y(a.u,a.e,m)},
f7(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dQ(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.fo(s,o.y)[p]
if(n==null)A.ej('No "'+p+'" in "'+A.eW(o)+'"')
d.push(A.cT(s,o,n))}else d.push(p)
return m},
f9(a,b){var s,r=a.u,q=A.dO(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aD(r,p,q))
else{s=A.Y(r,a.e,p)
switch(s.x){case 12:b.push(A.di(r,s,q,a.n))
break
default:b.push(A.dh(r,s,q))
break}}},
f6(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
if(typeof l=="number")switch(l){case-1:s=b.pop()
r=n
break
case-2:r=b.pop()
s=n
break
default:b.push(l)
r=n
s=r
break}else{b.push(l)
r=n
s=r}q=A.dO(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.Y(m,a.e,l)
o=new A.bn()
o.a=q
o.b=s
o.c=r
b.push(A.dU(m,p,o))
return
case-4:b.push(A.fj(m,b.pop(),q))
return
default:throw A.d(A.aT("Unexpected state under `()`: "+A.t(l)))}},
f8(a,b){var s=b.pop()
if(0===s){b.push(A.aE(a.u,1,"0&"))
return}if(1===s){b.push(A.aE(a.u,4,"1&"))
return}throw A.d(A.aT("Unexpected extended operation "+A.t(s)))},
dO(a,b){var s=b.splice(a.p)
A.dS(a.u,a.e,s)
a.p=b.pop()
return s},
Y(a,b,c){if(typeof c=="string")return A.aD(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.fa(a,b,c)}else return c},
dS(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.Y(a,b,c[s])},
fb(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.Y(a,b,c[s])},
fa(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.aT("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.aT("Bad index "+c+" for "+b.h(0)))},
j(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.V(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.V(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.j(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.j(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.j(a,b.y,c,d,e)
if(r===6)return A.j(a,b.y,c,d,e)
return r!==7}if(r===6)return A.j(a,b.y,c,d,e)
if(p===6){s=A.dH(a,d)
return A.j(a,b,c,s,e)}if(r===8){if(!A.j(a,b.y,c,d,e))return!1
return A.j(a,A.de(a,b),c,d,e)}if(r===7){s=A.j(a,t.P,c,d,e)
return s&&A.j(a,b.y,c,d,e)}if(p===8){if(A.j(a,b,c,d.y,e))return!0
return A.j(a,b,c,A.de(a,d),e)}if(p===7){s=A.j(a,b,c,t.P,e)
return s||A.j(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.I)return!0
if(p===13){if(b===t.L)return!0
if(r!==13)return!1
n=b.z
m=d.z
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.j(a,j,c,i,e)||!A.j(a,i,e,j,c))return!1}return A.e1(a,b.y,c,d.y,e)}if(p===12){if(b===t.L)return!0
if(s)return!1
return A.e1(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.fC(a,b,c,d,e)}if(o&&p===11)return A.fG(a,b,c,d,e)
return!1},
e1(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.j(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.j(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.j(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.j(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.j(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
fC(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.cT(a,b,r[o])
return A.dY(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.dY(a,n,null,c,m,e)},
dY(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.j(a,r,d,q,f))return!1}return!0},
fG(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.j(a,r[s],c,q[s],e))return!1
return!0},
aM(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.V(a))if(r!==7)if(!(r===6&&A.aM(a.y)))s=r===8&&A.aM(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
hc(a){var s
if(!A.V(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
V(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
dX(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cU(a){return a>0?new Array(a):v.typeUniverse.sEA},
C:function C(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bn:function bn(){this.c=this.b=this.a=null},
cR:function cR(a){this.a=a},
bl:function bl(){},
aB:function aB(a){this.a=a},
f_(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.fW()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bz(new A.cB(q),1)).observe(s,{childList:true})
return new A.cA(q,s,r)}else if(self.setImmediate!=null)return A.fX()
return A.fY()},
f0(a){self.scheduleImmediate(A.bz(new A.cC(t.M.a(a)),0))},
f1(a){self.setImmediate(A.bz(new A.cD(t.M.a(a)),0))},
f2(a){A.df(B.u,t.M.a(a))},
df(a,b){return A.fc(a.a/1000|0,b)},
fc(a,b){var s=new A.cP()
s.ap(a,b)
return s},
d9(a,b){var s=A.dn(a,"error",t.K)
return new A.ah(s,b==null?A.eC(a):b)},
eC(a){var s
if(t.R.b(a)){s=a.gG()
if(s!=null)return s}return B.t},
eN(a,b){var s,r=!b.b(null)
if(r)throw A.d(A.bD(null,"computation","The type parameter is not nullable"))
s=new A.v($.n,b.i("v<0>"))
A.eZ(a,new A.c_(null,s,b))
return s},
f4(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.a9()
b.N(a)
A.bo(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.a7(q)}},
bo(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.e;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.cX(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bo(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.cX(i.a,i.b)
return}f=$.n
if(f!==g)$.n=g
else f=null
b=b.c
if((b&15)===8)new A.cK(p,c,m).$0()
else if(n){if((b&1)!==0)new A.cJ(p,i).$0()}else if((b&2)!==0)new A.cI(c,p).$0()
if(f!=null)$.n=f
b=p.c
if(b instanceof A.v){o=p.a.$ti
o=o.i("aj<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.I(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.f4(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.I(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
fM(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.d(A.bD(a,"onError",u.c))},
fK(){var s,r
for(s=$.ad;s!=null;s=$.ad){$.aI=null
r=s.b
$.ad=r
if(r==null)$.aH=null
s.a.$0()}},
fP(){$.dm=!0
try{A.fK()}finally{$.aI=null
$.dm=!1
if($.ad!=null)$.du().$1(A.ea())}},
e8(a){var s=new A.bi(a),r=$.aH
if(r==null){$.ad=$.aH=s
if(!$.dm)$.du().$1(A.ea())}else $.aH=r.b=s},
fO(a){var s,r,q,p=$.ad
if(p==null){A.e8(a)
$.aI=$.aH
return}s=new A.bi(a)
r=$.aI
if(r==null){s.b=p
$.ad=$.aI=s}else{q=r.b
s.b=q
$.aI=r.b=s
if(q==null)$.aH=s}},
eZ(a,b){var s=$.n
if(s===B.a)return A.df(a,t.M.a(b))
return A.df(a,t.M.a(s.ad(b)))},
cX(a,b){A.fO(new A.cY(a,b))},
e4(a,b,c,d,e){var s,r=$.n
if(r===c)return d.$0()
$.n=c
s=r
try{r=d.$0()
return r}finally{$.n=s}},
e5(a,b,c,d,e,f,g){var s,r=$.n
if(r===c)return d.$1(e)
$.n=c
s=r
try{r=d.$1(e)
return r}finally{$.n=s}},
fN(a,b,c,d,e,f,g,h,i){var s,r=$.n
if(r===c)return d.$2(e,f)
$.n=c
s=r
try{r=d.$2(e,f)
return r}finally{$.n=s}},
e6(a,b,c,d){t.M.a(d)
if(B.a!==c)d=c.ad(d)
A.e8(d)},
cB:function cB(a){this.a=a},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a){this.a=a},
cD:function cD(a){this.a=a},
cP:function cP(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
ah:function ah(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cG:function cG(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a){this.a=a},
cJ:function cJ(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
bi:function bi(a){this.a=a
this.b=null},
at:function at(){},
cn:function cn(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
aF:function aF(){},
cY:function cY(a,b){this.a=a
this.b=b},
bs:function bs(){},
cN:function cN(a,b){this.a=a
this.b=b},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
dE(a){return new A.ax(a.i("ax<0>"))},
dg(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
f5(a,b,c){var s=new A.ac(a,b,c.i("ac<0>"))
s.c=a.e
return s},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bp:function bp(a){this.a=a
this.c=this.b=null},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k:function k(){},
M:function M(){},
az:function az(){},
eL(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
eV(a){return new A.c2(a,A.eR(a,!1,!0,!1,!1,!1))},
eY(a,b,c){var s=J.eA(b)
if(!s.m())return a
if(c.length===0){do a+=A.t(s.gC())
while(s.m())}else{a+=A.t(s.gC())
for(;s.m();)a=a+c+A.t(s.gC())}return a},
bW(a){if(typeof a=="number"||A.dl(a)||a==null)return J.ag(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eT(a)},
eM(a,b){A.dn(a,"error",t.K)
A.dn(b,"stackTrace",t.l)
A.eL(a,b)},
aT(a){return new A.aS(a)},
d8(a,b){return new A.W(!1,null,b,a)},
bD(a,b,c){return new A.W(!0,a,b,c)},
dG(a,b,c,d,e){return new A.aq(b,c,!0,a,d,"Invalid value")},
eU(a,b,c){if(0>a||a>c)throw A.d(A.dG(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.dG(b,a,c,"end",null))
return b}return c},
c1(a,b,c,d){return new A.b2(b,!0,a,d,"Index out of range")},
cz(a){return new A.bh(a)},
dK(a){return new A.bf(a)},
eX(a){return new A.bc(a)},
bO(a){return new A.aZ(a)},
db(a,b,c){var s,r
if(A.hb(a))return b+"..."+c
s=new A.cp(b)
B.i.k($.aO,a)
try{r=s
r.a=A.eY(r.a,a,", ")}finally{if(0>=$.aO.length)return A.i($.aO,-1)
$.aO.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ai:function ai(a){this.a=a},
h:function h(){},
aS:function aS(a){this.a=a},
P:function P(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b2:function b2(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bh:function bh(a){this.a=a},
bf:function bf(a){this.a=a},
bc:function bc(a){this.a=a},
aZ:function aZ(a){this.a=a},
b6:function b6(){},
as:function as(){},
cF:function cF(a){this.a=a},
bZ:function bZ(a,b){this.a=a
this.b=b},
E:function E(){},
m:function m(){},
bt:function bt(){},
cp:function cp(a){this.a=a},
dx(){var s=document.createElement("a")
s.toString
return s},
dM(a,b){var s,r=a.classList
r.toString
for(s=0;s<3;++s)r.add(b[s])},
f3(a,b){var s,r,q=a.classList
q.toString
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.d6)(b),++r)q.remove(A.aG(b[r]))},
aa(a,b,c,d,e){var s=A.fV(new A.cE(c),t.B),r=s!=null
if(r&&!0){a.toString
t.o.a(s)
if(r)J.ez(a,b,s,!1)}return new A.bm(a,b,s,!1,e.i("bm<0>"))},
fV(a,b){var s=$.n
if(s===B.a)return a
return s.aK(a,b)},
b:function b(){},
a5:function a5(){},
aQ:function aQ(){},
G:function G(){},
bT:function bT(){},
bU:function bU(){},
ab:function ab(a,b){this.a=a
this.$ti=b},
o:function o(){},
a:function a(){},
x:function x(){},
b1:function b1(){},
L:function L(){},
A:function A(){},
f:function f(){},
ao:function ao(){},
ba:function ba(){},
F:function F(){},
N:function N(){},
au:function au(){},
R:function R(){},
ay:function ay(){},
bk:function bk(a){this.a=a},
da:function da(a,b){this.a=a
this.$ti=b},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bm:function bm(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cE:function cE(a){this.a=a},
B:function B(){},
b0:function b0(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bq:function bq(){},
br:function br(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
b_:function b_(){},
bP:function bP(a){this.a=a},
bR:function bR(a){this.a=a},
bQ:function bQ(){},
aU:function aU(a){this.a=a},
c:function c(){},
c7:function c7(){},
aY:function aY(){},
c8:function c8(){},
bL:function bL(){},
bN:function bN(){},
bM:function bM(){},
bS:function bS(){},
cg:function cg(){},
bV:function bV(){},
bX:function bX(){},
bY:function bY(){},
c0:function c0(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
bC:function bC(){},
ce:function ce(){},
ci:function ci(){},
ar:function ar(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
cq:function cq(){},
cs:function cs(){},
ca:function ca(){},
cr:function cr(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
c9:function c9(){},
eF(a){var s,r=document,q=r.querySelector(".slider-container")
q.toString
s=t.h
A.dp(s,s,"T","querySelectorAll")
r=r.querySelectorAll(".slider-single")
r.toString
r=new A.aV(!0,q,new A.ab(r,t.Y))
r.ao(!0)
return r},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=!1},
bE:function bE(a){this.a=a},
bK:function bK(a,b){this.a=a
this.b=b},
bI:function bI(a){this.a=a},
bJ:function bJ(a){this.a=a},
bF:function bF(a){this.a=a},
bG:function bG(a){this.a=a},
bH:function bH(a){this.a=a},
he(){var s=t.h,r=document
r.toString
A.dp(s,s,"T","querySelectorAll")
r=r.querySelectorAll(".mdc-card__primary-action")
r.toString
r=new A.ab(r,t.Y)
r.aL(r,new A.d4())
A.eF(!0)},
d4:function d4(){},
q(a){A.dt(new A.a8("Field '"+a+"' has not been initialized."),new Error())},
hk(a){A.dt(new A.a8("Field '"+a+"' has already been initialized."),new Error())},
hj(a){A.dt(new A.a8("Field '"+a+"' has been assigned during initialization."),new Error())}},J={
ds(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d_(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.dr==null){A.h6()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.dK("Return interceptor for "+A.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cM
if(o==null)o=$.cM=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.hd(a)
if(p!=null)return p
if(typeof a=="function")return B.x
s=Object.getPrototypeOf(a)
if(s==null)return B.j
if(s===Object.prototype)return B.j
if(typeof q=="function"){o=$.cM
if(o==null)o=$.cM=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.e,enumerable:false,writable:true,configurable:true})
return B.e}return B.e},
eO(a,b){a.fixed$length=Array
return a},
dD(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
eP(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.dD(r))break;++b}return b},
eQ(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.i(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.dD(q))break}return b},
a2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.al.prototype
return J.b4.prototype}if(typeof a=="string")return J.a1.prototype
if(a==null)return J.am.prototype
if(typeof a=="boolean")return J.b3.prototype
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof A.m)return a
return J.d_(a)},
ed(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof A.m)return a
return J.d_(a)},
ee(a){if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof A.m)return a
return J.d_(a)},
h1(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(!(a instanceof A.m))return J.a9.prototype
return a},
bA(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof A.m)return a
return J.d_(a)},
ex(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a2(a).E(a,b)},
ey(a,b){if(typeof b==="number")if(Array.isArray(a)||A.ha(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ee(a).A(a,b)},
ez(a,b,c,d){return J.bA(a).ar(a,b,c,d)},
r(a){return J.bA(a).gn(a)},
d7(a){return J.a2(a).gl(a)},
eA(a){return J.ee(a).gD(a)},
dv(a){return J.ed(a).gj(a)},
eB(a){return J.a2(a).gv(a)},
ag(a){return J.a2(a).h(a)},
dw(a){return J.h1(a).aU(a)},
ak:function ak(){},
b3:function b3(){},
am:function am(){},
H:function H(){},
e:function e(){},
b7:function b7(){},
a9:function a9(){},
K:function K(){},
y:function y(a){this.$ti=a},
c3:function c3(a){this.$ti=a},
aR:function aR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
an:function an(){},
al:function al(){},
b4:function b4(){},
a1:function a1(){}},B={}
var w=[A,J,B]
var $={}
A.dc.prototype={}
J.ak.prototype={
E(a,b){return a===b},
gl(a){return A.b8(a)},
h(a){return"Instance of '"+A.ch(a)+"'"},
gv(a){return A.af(A.dk(this))}}
J.b3.prototype={
h(a){return String(a)},
gl(a){return a?519018:218159},
gv(a){return A.af(t.y)},
$iO:1,
$iaK:1}
J.am.prototype={
E(a,b){return null==b},
h(a){return"null"},
gl(a){return 0},
$iO:1}
J.H.prototype={}
J.e.prototype={
gl(a){return 0},
h(a){return String(a)},
$iar:1}
J.b7.prototype={}
J.a9.prototype={}
J.K.prototype={
h(a){var s=a[$.em()]
if(s==null)return this.an(a)
return"JavaScript function for "+J.ag(s)},
$ia0:1}
J.y.prototype={
k(a,b){A.cV(a).c.a(b)
if(!!a.fixed$length)A.ej(A.cz("add"))
a.push(b)},
h(a){return A.db(a,"[","]")},
gD(a){return new J.aR(a,a.length,A.cV(a).i("aR<1>"))},
gl(a){return A.b8(a)},
gj(a){return a.length},
$ip:1,
$iz:1}
J.c3.prototype={}
J.aR.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.d6(q)
throw A.d(q)}s=r.c
if(s>=p){r.sa5(null)
return!1}r.sa5(q[s]);++r.c
return!0},
sa5(a){this.d=this.$ti.i("1?").a(a)}}
J.an.prototype={
M(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.cz(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aa(a,b){return(a|0)===a?a/b|0:this.aF(a,b)},
aF(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.cz("Result of truncating division is "+A.t(s)+": "+A.t(a)+" ~/ "+b))},
aE(a,b){var s
if(a>0)s=this.aD(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aD(a,b){return b>31?0:a>>>b},
gv(a){return A.af(t.q)},
$iaN:1}
J.al.prototype={
gv(a){return A.af(t.p)},
$iO:1,
$ibB:1}
J.b4.prototype={
gv(a){return A.af(t.i)},
$iO:1}
J.a1.prototype={
aj(a,b){return a+b},
al(a,b,c){return a.substring(b,A.eU(b,c,a.length))},
aU(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.i(p,0)
if(p.charCodeAt(0)===133){s=J.eP(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.i(p,r)
q=p.charCodeAt(r)===133?J.eQ(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ak(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.r)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aO(a,b,c){var s=b-a.length
if(s<=0)return a
return this.ak(c,s)+a},
h(a){return a},
gl(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gv(a){return A.af(t.N)},
gj(a){return a.length},
$iO:1,
$il:1}
A.a8.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.I.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ed(q),o=p.gj(q)
if(r.b!==o)throw A.d(A.bO(q))
s=r.c
if(s>=o){r.sa0(null)
return!1}r.sa0(p.K(q,s));++r.c
return!0},
sa0(a){this.d=this.$ti.i("1?").a(a)}}
A.cx.prototype={
p(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.ap.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.b5.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bg.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cf.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aA.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibb:1}
A.X.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ek(r==null?"unknown":r)+"'"},
$ia0:1,
gaV(){return this},
$C:"$1",
$R:1,
$D:null}
A.aW.prototype={$C:"$0",$R:0}
A.aX.prototype={$C:"$2",$R:2}
A.be.prototype={}
A.bd.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ek(s)+"'"}}
A.a6.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.hg(this.a)^A.b8(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ch(this.a)+"'")}}
A.bj.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.b9.prototype={
h(a){return"RuntimeError: "+this.a}}
A.d0.prototype={
$1(a){return this.a(a)},
$S:6}
A.d1.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.d2.prototype={
$1(a){return this.a(A.aG(a))},
$S:8}
A.c2.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags}}
A.C.prototype={
i(a){return A.cT(v.typeUniverse,this,a)},
B(a){return A.fm(v.typeUniverse,this,a)}}
A.bn.prototype={}
A.cR.prototype={
h(a){return A.u(this.a,null)}}
A.bl.prototype={
h(a){return this.a}}
A.aB.prototype={$iP:1}
A.cB.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:9}
A.cA.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:10}
A.cC.prototype={
$0(){this.a.$0()},
$S:3}
A.cD.prototype={
$0(){this.a.$0()},
$S:3}
A.cP.prototype={
ap(a,b){if(self.setTimeout!=null)self.setTimeout(A.bz(new A.cQ(this,b),0),a)
else throw A.d(A.cz("`setTimeout()` not found."))}}
A.cQ.prototype={
$0(){this.b.$0()},
$S:0}
A.ah.prototype={
h(a){return A.t(this.a)},
$ih:1,
gG(){return this.b}}
A.c_.prototype={
$0(){this.c.a(null)
this.b.a4(null)},
$S:0}
A.aw.prototype={
aN(a){if((this.c&15)!==6)return!0
return this.b.b.Z(t.m.a(this.d),a.a,t.y,t.K)},
aM(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.aQ(q,m,a.b,o,n,t.l)
else p=l.Z(t.v.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.t.b(A.aP(s))){if((r.c&1)!==0)throw A.d(A.d8("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.d8("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.v.prototype={
aT(a,b,c){var s,r,q,p=this.$ti
p.B(c).i("1/(2)").a(a)
s=$.n
if(s===B.a){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.d(A.bD(b,"onError",u.c))}else{c.i("@<0/>").B(p.c).i("1(2)").a(a)
if(b!=null)b=A.fM(b,s)}r=new A.v(s,c.i("v<0>"))
q=b==null?1:3
this.a2(new A.aw(r,q,a,b,p.i("@<1>").B(c).i("aw<1,2>")))
return r},
ai(a,b){return this.aT(a,null,b)},
N(a){this.a=a.a&30|this.a&1
this.c=a.c},
a2(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.a2(a)
return}r.N(s)}A.e6(null,null,r.b,t.M.a(new A.cG(r,a)))}},
a7(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.a7(a)
return}m.N(n)}l.a=m.I(a)
A.e6(null,null,m.b,t.M.a(new A.cH(l,m)))}},
a9(){var s=t.F.a(this.c)
this.c=null
return this.I(s)},
I(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a4(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
s=r.a9()
q.c.a(a)
r.a=8
r.c=a
A.bo(r,s)},
$iaj:1}
A.cG.prototype={
$0(){A.bo(this.a,this.b)},
$S:0}
A.cH.prototype={
$0(){A.bo(this.b,this.a.a)},
$S:0}
A.cK.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.aP(t.w.a(q.d),t.z)}catch(p){s=A.aP(p)
r=A.aL(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.d9(s,r)
o.b=!0
return}if(l instanceof A.v&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(l instanceof A.v){n=m.b.a
q=m.a
q.c=l.ai(new A.cL(n),t.z)
q.b=!1}},
$S:0}
A.cL.prototype={
$1(a){return this.a},
$S:11}
A.cJ.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.Z(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aP(l)
r=A.aL(l)
q=this.a
q.c=A.d9(s,r)
q.b=!0}},
$S:0}
A.cI.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.aN(s)&&p.a.e!=null){p.c=p.a.aM(s)
p.b=!1}}catch(o){r=A.aP(o)
q=A.aL(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.d9(r,q)
n.b=!0}},
$S:0}
A.bi.prototype={}
A.at.prototype={
gj(a){var s,r,q=this,p={},o=new A.v($.n,t.u)
p.a=0
s=A.J(q)
r=s.i("~(1)?").a(new A.cn(p,q))
t.J.a(new A.co(p,o))
A.aa(q.a,q.b,r,!1,s.c)
return o}}
A.cn.prototype={
$1(a){A.J(this.b).c.a(a);++this.a.a},
$S(){return A.J(this.b).i("~(1)")}}
A.co.prototype={
$0(){this.b.a4(this.a.a)},
$S:0}
A.aF.prototype={$idL:1}
A.cY.prototype={
$0(){A.eM(this.a,this.b)},
$S:0}
A.bs.prototype={
aR(a){var s,r,q
t.M.a(a)
try{if(B.a===$.n){a.$0()
return}A.e4(null,null,this,a,t.H)}catch(q){s=A.aP(q)
r=A.aL(q)
A.cX(t.K.a(s),t.l.a(r))}},
aS(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.a===$.n){a.$1(b)
return}A.e5(null,null,this,a,b,t.H,c)}catch(q){s=A.aP(q)
r=A.aL(q)
A.cX(t.K.a(s),t.l.a(r))}},
ad(a){return new A.cN(this,t.M.a(a))},
aK(a,b){return new A.cO(this,b.i("~(0)").a(a),b)},
aP(a,b){b.i("0()").a(a)
if($.n===B.a)return a.$0()
return A.e4(null,null,this,a,b)},
Z(a,b,c,d){c.i("@<0>").B(d).i("1(2)").a(a)
d.a(b)
if($.n===B.a)return a.$1(b)
return A.e5(null,null,this,a,b,c,d)},
aQ(a,b,c,d,e,f){d.i("@<0>").B(e).B(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.n===B.a)return a.$2(b,c)
return A.fN(null,null,this,a,b,c,d,e,f)}}
A.cN.prototype={
$0(){return this.a.aR(this.b)},
$S:0}
A.cO.prototype={
$1(a){var s=this.c
return this.a.aS(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.ax.prototype={
gD(a){var s=this,r=new A.ac(s,s.r,A.J(s).i("ac<1>"))
r.c=s.e
return r},
gj(a){return this.a},
t(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.au(b)
return r}},
au(a){var s=this.d
if(s==null)return!1
return this.S(s[this.O(a)],a)>=0},
k(a,b){var s,r,q=this
A.J(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.a1(s==null?q.b=A.dg():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.a1(r==null?q.c=A.dg():r,b)}else return q.aq(b)},
aq(a){var s,r,q,p=this
A.J(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.dg()
r=p.O(a)
q=s[r]
if(q==null)s[r]=[p.U(a)]
else{if(p.S(q,a)>=0)return!1
q.push(p.U(a))}return!0},
q(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.a8(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.a8(s.c,b)
else return s.aC(b)},
aC(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.O(a)
r=n[s]
q=o.S(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ab(p)
return!0},
a1(a,b){A.J(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.U(b)
return!0},
a8(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.ab(s)
delete a[b]
return!0},
T(){this.r=this.r+1&1073741823},
U(a){var s,r=this,q=new A.bp(A.J(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.T()
return q},
ab(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.T()},
O(a){return J.d7(a)&1073741823},
S(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ex(a[r].a,b))return r
return-1}}
A.bp.prototype={}
A.ac.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bO(q))
else if(r==null){s.sa3(null)
return!1}else{s.sa3(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sa3(a){this.d=this.$ti.i("1?").a(a)}}
A.k.prototype={
gD(a){return new A.I(a,this.gj(a),A.a3(a).i("I<k.E>"))},
K(a,b){return this.A(a,b)},
aL(a,b){var s,r
A.a3(a).i("~(k.E)").a(b)
s=this.gj(a)
for(r=0;r<s;++r){b.$1(this.A(a,r))
if(s!==this.gj(a))throw A.d(A.bO(a))}},
h(a){return A.db(a,"[","]")},
$ip:1,
$iz:1}
A.M.prototype={
L(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.d6)(a),++r)this.q(0,a[r])},
h(a){return A.db(this,"{","}")},
X(a,b){var s,r,q,p,o=this.gD(this)
if(!o.m())return""
s=o.d
r=J.ag(s==null?o.$ti.c.a(s):s)
if(!o.m())return r
s=o.$ti.c
if(b.length===0){q=r
do{p=o.d
q+=A.t(p==null?s.a(p):p)}while(o.m())
s=q}else{q=r
do{p=o.d
q=q+b+A.t(p==null?s.a(p):p)}while(o.m())
s=q}return s.charCodeAt(0)==0?s:s},
$ip:1,
$iD:1}
A.az.prototype={}
A.ai.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.ai&&this.a===b.a},
gl(a){return B.b.gl(this.a)},
h(a){var s,r,q,p=this.a,o=p%36e8,n=B.b.aa(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.b.aa(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.d.aO(B.b.h(o%1e6),6,"0")}}
A.h.prototype={
gG(){return A.aL(this.$thrownJsError)}}
A.aS.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bW(s)
return"Assertion failed"}}
A.P.prototype={}
A.W.prototype={
gR(){return"Invalid argument"+(!this.a?"(s)":"")},
gP(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gR()+q+o
if(!s.a)return n
return n+s.gP()+": "+A.bW(s.gW())},
gW(){return this.b}}
A.aq.prototype={
gW(){return A.fq(this.b)},
gR(){return"RangeError"},
gP(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.t(q):""
else if(q==null)s=": Not greater than or equal to "+A.t(r)
else if(q>r)s=": Not in inclusive range "+A.t(r)+".."+A.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.t(r)
return s}}
A.b2.prototype={
gW(){return A.cW(this.b)},
gR(){return"RangeError"},
gP(){if(A.cW(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.bh.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bf.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bc.prototype={
h(a){return"Bad state: "+this.a}}
A.aZ.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bW(s)+"."}}
A.b6.prototype={
h(a){return"Out of Memory"},
gG(){return null},
$ih:1}
A.as.prototype={
h(a){return"Stack Overflow"},
gG(){return null},
$ih:1}
A.cF.prototype={
h(a){return"Exception: "+this.a}}
A.bZ.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.d.al(q,0,75)+"..."
return r+"\n"+q}}
A.E.prototype={
gl(a){return A.m.prototype.gl.call(this,this)},
h(a){return"null"}}
A.m.prototype={$im:1,
E(a,b){return this===b},
gl(a){return A.b8(this)},
h(a){return"Instance of '"+A.ch(this)+"'"},
gv(a){return A.h3(this)},
toString(){return this.h(this)}}
A.bt.prototype={
h(a){return""},
$ibb:1}
A.cp.prototype={
gj(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.b.prototype={}
A.a5.prototype={
h(a){var s=String(a)
s.toString
return s},
$ia5:1}
A.aQ.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.G.prototype={
gj(a){return a.length}}
A.bT.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.bU.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.ab.prototype={
gj(a){return this.a.length},
A(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.i(s,b)
return this.$ti.c.a(s[b])}}
A.o.prototype={
gn(a){return new A.bk(a)},
h(a){var s=a.localName
s.toString
return s},
gag(a){return new A.S(a,"touchend",!1,t.s)},
gah(a){return new A.S(a,"touchstart",!1,t.s)},
$io:1}
A.a.prototype={$ia:1}
A.x.prototype={
ar(a,b,c,d){return a.addEventListener(b,A.bz(t.o.a(c),1),!1)},
$ix:1}
A.b1.prototype={
gj(a){return a.length}}
A.L.prototype={$iL:1}
A.A.prototype={$iA:1}
A.f.prototype={
h(a){var s=a.nodeValue
return s==null?this.am(a):s},
$if:1}
A.ao.prototype={
gj(a){var s=a.length
s.toString
return s},
A(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.c1(b,s,a,null))
s=a[b]
s.toString
return s},
K(a,b){if(!(b<a.length))return A.i(a,b)
return a[b]},
$ia7:1,
$ip:1,
$iz:1}
A.ba.prototype={
gj(a){return a.length}}
A.F.prototype={$iF:1}
A.N.prototype={$iN:1}
A.au.prototype={
gj(a){var s=a.length
s.toString
return s},
A(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.c1(b,s,a,null))
s=a[b]
s.toString
return s},
gaf(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.eX("No elements"))},
K(a,b){if(!(b<a.length))return A.i(a,b)
return a[b]},
$ia7:1,
$ip:1,
$iz:1}
A.R.prototype={}
A.ay.prototype={
gj(a){var s=a.length
s.toString
return s},
A(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.c1(b,s,a,null))
s=a[b]
s.toString
return s},
K(a,b){if(!(b<a.length))return A.i(a,b)
return a[b]},
$ia7:1,
$ip:1,
$iz:1}
A.bk.prototype={
u(){var s,r,q,p,o=A.dE(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=J.dw(s[q])
if(p.length!==0)o.k(0,p)}return o},
a_(a){this.a.className=t.C.a(a).X(0," ")},
gj(a){var s=this.a.classList.length
s.toString
return s},
ae(a){this.a.className=""},
t(a,b){var s=this.a.classList.contains(b)
s.toString
return s},
k(a,b){var s=this.a.classList,r=s.contains(b)
r.toString
s.add(b)
return!r},
q(a,b){var s,r
if(typeof b=="string"){s=this.a.classList
r=s.contains(b)
r.toString
s.remove(b)}else r=!1
return r},
L(a){A.f3(this.a,a)}}
A.da.prototype={}
A.av.prototype={}
A.S.prototype={}
A.bm.prototype={}
A.cE.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:12}
A.B.prototype={
gD(a){return new A.b0(a,this.gj(a),A.a3(a).i("b0<B.E>"))}}
A.b0.prototype={
m(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sa6(J.ey(s.a,r))
s.c=r
return!0}s.sa6(null)
s.c=q
return!1},
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
sa6(a){this.d=this.$ti.i("1?").a(a)}}
A.bq.prototype={}
A.br.prototype={}
A.bu.prototype={}
A.bv.prototype={}
A.bw.prototype={}
A.bx.prototype={}
A.b_.prototype={
V(a){var s=$.el()
if(s.b.test(a))return a
throw A.d(A.bD(a,"value","Not a valid class token"))},
h(a){return this.u().X(0," ")},
gD(a){var s=this.u()
return A.f5(s,s.r,A.J(s).c)},
gj(a){return this.u().a},
t(a,b){this.V(b)
return this.u().t(0,b)},
k(a,b){var s
this.V(b)
s=this.Y(new A.bP(b))
return A.fp(s==null?!1:s)},
q(a,b){var s,r
if(typeof b!="string")return!1
this.V(b)
s=this.u()
r=s.q(0,b)
this.a_(s)
return r},
L(a){this.Y(new A.bR(a))},
ae(a){this.Y(new A.bQ())},
Y(a){var s,r
t.x.a(a)
s=this.u()
r=a.$1(s)
this.a_(s)
return r}}
A.bP.prototype={
$1(a){return t.C.a(a).k(0,this.a)},
$S:13}
A.bR.prototype={
$1(a){return t.C.a(a).L(this.a)},
$S:4}
A.bQ.prototype={
$1(a){t.C.a(a)
if(a.a>0){a.b=a.c=a.d=a.e=a.f=null
a.a=0
a.T()}return null},
$S:4}
A.aU.prototype={
u(){var s,r,q,p,o=this.a.getAttribute("class"),n=A.dE(t.N)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=J.dw(s[q])
if(p.length!==0)n.k(0,p)}return n},
a_(a){this.a.setAttribute("class",a.X(0," "))}}
A.c.prototype={
gn(a){return new A.aU(a)},
gag(a){return new A.S(a,"touchend",!1,t.s)},
gah(a){return new A.S(a,"touchstart",!1,t.s)}}
A.c7.prototype={}
A.aY.prototype={}
A.c8.prototype={}
A.bL.prototype={}
A.bN.prototype={}
A.bM.prototype={}
A.bS.prototype={}
A.cg.prototype={}
A.bV.prototype={}
A.bX.prototype={}
A.bY.prototype={}
A.c0.prototype={}
A.c4.prototype={}
A.c5.prototype={}
A.c6.prototype={}
A.cb.prototype={}
A.cc.prototype={}
A.cd.prototype={}
A.bC.prototype={}
A.ce.prototype={}
A.ci.prototype={}
A.ar.prototype={}
A.cj.prototype={}
A.ck.prototype={}
A.cl.prototype={}
A.cm.prototype={}
A.cq.prototype={}
A.cs.prototype={}
A.ca.prototype={}
A.cr.prototype={}
A.ct.prototype={}
A.cu.prototype={}
A.cv.prototype={}
A.cw.prototype={}
A.c9.prototype={}
A.aV.prototype={
ao(a){var s,r=this,q=r.c,p=q.a,o=p.length
r.e!==$&&A.hk("lastSlideIndex")
s=r.e=o-1
r.d=-1
if(s===-1){J.r(r.b).ae(0)
return}if(s===0){if(0>=o)return A.i(p,0)
q=q.$ti.c.a(p[0])
r.r=q
J.r(q).k(0,"active")
return}r.aw()
r.aB()
r.aA()
q=r.b
p=J.bA(q)
o=p.gah(q)
s=o.$ti
A.aa(o.a,o.b,s.i("~(1)?").a(r.gaI()),!1,s.c)
q=p.gag(q)
p=q.$ti
A.aa(q.a,q.b,p.i("~(1)?").a(r.gaG()),!1,p.c)
r.az()
q=t.H
A.eN(B.v,q).ai(new A.bE(r),q)},
aw(){var s,r,q
for(s=this.c,r=s.$ti,s=new A.I(s,s.gj(s),r.i("I<k.E>")),r=r.i("k.E");s.m();){q=s.d
J.r(q==null?r.a(q):q).k(0,"next-hidden")}},
aB(){var s,r,q,p,o,n=document,m=n.createElement("div"),l=m.classList
l.contains("bullet-container").toString
l.add("bullet-container")
for(s=this.c.a,r=t.W,q=r.i("~(1)?"),r=r.c,p=0;p<s.length;++p){o=n.createElement("div")
l=o.classList
l.contains("bullet").toString
l.add("bullet")
o.id="bullet-index-"+p
A.aa(o,"click",q.a(new A.bK(this,p)),!1,r)
m.appendChild(o).toString}this.b.appendChild(m).toString},
aA(){var s,r,q,p,o,n=A.dx(),m=document,l=m.createElement("div")
l.toString
s=t.S
r=t.f
A.dM(l,r.a(A.Z(["fa","fa-chevron-left","fa-lg"],s)))
q=n.classList
q.contains("slider-left").toString
q.add("slider-left")
n.appendChild(l).toString
l=t.W
p=l.i("~(1)?")
l=l.c
A.aa(n,"click",p.a(new A.bI(this)),!1,l)
o=A.dx()
m=m.createElement("div")
m.toString
A.dM(m,r.a(A.Z(["fa","fa-chevron-right","fa-lg"],s)))
q=o.classList
q.contains("slider-right").toString
q.add("slider-right")
o.appendChild(m).toString
A.aa(o,"click",p.a(new A.bJ(this)),!1,l)
l=this.b
l.appendChild(n).toString
l.appendChild(o).toString},
aJ(a){var s,r=t.U.a(a).changedTouches
r.toString
r=B.k.gaf(r)
s=r.clientX
s.toString
s=B.c.M(s)
r=r.clientY
r.toString
B.c.M(r)
this.x=s
this.y=!0},
aH(a){var s,r,q,p=this,o="currentSlideIndex"
t.U.a(a)
if(p.y){s=a.changedTouches
s.toString
s=B.k.gaf(s)
r=s.clientX
r.toString
r=B.c.M(r)
s=s.clientY
s.toString
B.c.M(s)
s=p.x
s===$&&A.q("x0")
q=r-s
if(q>0){s=p.d
s===$&&A.q(o)
s=s>0}else s=!1
if(s)p.J()
else{if(q<0){s=p.d
s===$&&A.q(o)
r=p.e
r===$&&A.q("lastSlideIndex")
r=s<r
s=r}else s=!1
if(s)p.F()}p.y=!1}},
ac(){var s,r,q,p,o,n,m,l="currentSlideIndex",k="hidden",j=document,i=j.querySelector(".bullet-container")
i.toString
s=t.h
A.dp(s,s,"T","querySelectorAll")
i=i.querySelectorAll(".bullet")
for(r=0;r<i.length;++r){J.r(s.a(i[r])).q(0,"active")
q=this.d
q===$&&A.q(l)
if(r===q){if(!(r<i.length))return A.i(i,r)
J.r(s.a(i[r])).k(0,"active")}}i=t.a
p=i.a(j.querySelector(".slider-left"))
o=i.a(j.querySelector(".slider-right"))
j=this.d
j===$&&A.q(l)
i=this.c
s=i.a
q=s.length
n=q-1
if(j===n){if(0>=q)return A.i(s,0)
j=i.$ti.c
J.r(j.a(s[0])).k(0,k)
i=s.length
q=i-1
if(!(q>=0))return A.i(s,q)
J.r(j.a(s[q])).q(0,k)
m=p.classList
m.contains("hidden").toString
m.remove("hidden")
m=o.classList
m.contains("hidden").toString
m.add("hidden")}else{i=i.$ti.c
if(j===0){if(!(n>=0))return A.i(s,n)
J.r(i.a(s[n])).k(0,k)
if(0>=s.length)return A.i(s,0)
J.r(i.a(s[0])).q(0,k)
m=p.classList
m.contains("hidden").toString
m.add("hidden")
m=o.classList
m.contains("hidden").toString
m.remove("hidden")}else{if(!(n>=0))return A.i(s,n)
J.r(i.a(s[n])).q(0,k)
if(0>=s.length)return A.i(s,0)
J.r(i.a(s[0])).q(0,k)
m=p.classList
m.contains("hidden").toString
m.remove("hidden")
m=o.classList
m.contains("hidden").toString
m.remove("hidden")}}},
F(){var s,r,q,p,o,n,m=this,l="prev-hidden",k=m.d
k===$&&A.q("currentSlideIndex")
s=m.e
s===$&&A.q("lastSlideIndex")
k=k<s?m.d=k+1:m.d=0
r=m.c
q=r.$ti
p=r.a
if(k>0){o=k-1
if(!(o<p.length))return A.i(p,o)
m.f=q.c.a(p[o])}else{if(!(s>=0&&s<p.length))return A.i(p,s)
m.f=q.c.a(p[s])}q=p.length
if(!(k>=0&&k<q))return A.i(p,k)
o=r.$ti
n=o.c
m.r=n.a(p[k])
if(k<s){++k
if(!(k<q))return A.i(p,k)
m.w=n.a(p[k])}else{if(0>=q)return A.i(p,0)
m.w=n.a(p[0])}for(k=new A.I(r,r.gj(r),o.i("I<k.E>")),s=t.k,o=o.i("k.E");k.m();){r=k.d
if(r==null)r=o.a(r)
m.H(A.Z([r],s))
q=J.bA(r)
if(q.gn(r).t(0,l))q.gn(r).k(0,"next-hidden")
if(q.gn(r).t(0,"prev"))q.gn(r).k(0,l)}k=m.f
k===$&&A.q("prevSlide")
r=m.r
q=m.w
q===$&&A.q("nextSlide")
m.H(A.Z([k,r,q],s))
J.r(m.f).k(0,"prev")
J.r(m.r).k(0,"active")
J.r(m.w).k(0,"next")
m.ac()},
J(){var s,r,q,p,o,n,m=this,l="lastSlideIndex",k="next-hidden",j=m.d
j===$&&A.q("currentSlideIndex")
if(j>0)j=m.d=j-1
else{j=m.e
j===$&&A.q(l)
j=m.d=j}s=m.e
s===$&&A.q(l)
r=m.c
q=r.$ti
p=r.a
if(j<s){o=j+1
if(!(o>=0&&o<p.length))return A.i(p,o)
m.w=q.c.a(p[o])}else{if(0>=p.length)return A.i(p,0)
m.w=q.c.a(p[0])}q=p.length
if(!(j>=0&&j<q))return A.i(p,j)
o=r.$ti
n=o.c
m.r=n.a(p[j])
if(j>0)m.f=n.a(p[j-1])
else{if(!(s>=0&&s<q))return A.i(p,s)
m.f=n.a(p[s])}for(j=new A.I(r,r.gj(r),o.i("I<k.E>")),s=t.k,o=o.i("k.E");j.m();){r=j.d
if(r==null)r=o.a(r)
m.H(A.Z([r],s))
q=J.bA(r)
if(q.gn(r).t(0,"next"))q.gn(r).k(0,k)
if(q.gn(r).t(0,k))q.gn(r).k(0,"prev-hidden")}j=m.f
j===$&&A.q("prevSlide")
r=m.r
q=m.w
q===$&&A.q("nextSlide")
m.H(A.Z([j,r,q],s))
J.r(m.f).k(0,"prev")
J.r(m.r).k(0,"active")
J.r(m.w).k(0,"next")
m.ac()},
av(a){var s,r=this,q=r.d
q===$&&A.q("currentSlideIndex")
s=q<a?new A.bF(r):new A.bG(r)
for(;r.d!==a;)s.$0()},
H(a){var s,r
t.O.a(a)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.d6)(a),++r)J.r(a[r]).L(["prev-hidden","prev","active","next","next-hidden"])},
az(){A.aa(document.body,"keyup",t.d.a(new A.bH(this)),!1,t.j)}}
A.bE.prototype={
$1(a){return this.a.F()},
$S:14}
A.bK.prototype={
$1(a){t.V.a(a)
return this.a.av(this.b)},
$S:1}
A.bI.prototype={
$1(a){t.V.a(a)
return this.a.J()},
$S:1}
A.bJ.prototype={
$1(a){t.V.a(a)
return this.a.F()},
$S:1}
A.bF.prototype={
$0(){return this.a.F()},
$S:0}
A.bG.prototype={
$0(){return this.a.J()},
$S:0}
A.bH.prototype={
$1(a){var s,r,q=this,p="currentSlideIndex"
t.j.a(a)
s=a.keyCode
s.toString
if(s===37){s=q.a.d
s===$&&A.q(p)
s=s>0}else s=!1
if(s)q.a.J()
s=a.keyCode
s.toString
if(s===39){s=q.a
r=s.d
r===$&&A.q(p)
s=s.e
s===$&&A.q("lastSlideIndex")
s=r<s}else s=!1
if(s)q.a.F()},
$S:15}
A.d4.prototype={
$1(a){new mdc.ripple.MDCRipple(t.h.a(a))
return new A.c9()},
$S:16};(function aliases(){var s=J.ak.prototype
s.am=s.h
s=J.e.prototype
s.an=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_1u
s(A,"fW","f0",2)
s(A,"fX","f1",2)
s(A,"fY","f2",2)
r(A,"ea","fP",0)
var p
q(p=A.aV.prototype,"gaI","aJ",5)
q(p,"gaG","aH",5)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.m,null)
q(A.m,[A.dc,J.ak,J.aR,A.h,A.I,A.cx,A.cf,A.aA,A.X,A.c2,A.C,A.bn,A.cR,A.cP,A.ah,A.aw,A.v,A.bi,A.at,A.aF,A.M,A.bp,A.ac,A.k,A.ai,A.b6,A.as,A.cF,A.bZ,A.E,A.bt,A.cp,A.da,A.bm,A.B,A.b0,A.c7,A.aV])
q(J.ak,[J.b3,J.am,J.H,J.an,J.a1])
q(J.H,[J.e,J.y,A.x,A.bT,A.bU,A.a,A.bq,A.F,A.bu,A.bw])
q(J.e,[J.b7,J.a9,J.K,A.aY,A.c8,A.cg,A.cd,A.bC,A.ck,A.ca])
r(J.c3,J.y)
q(J.an,[J.al,J.b4])
q(A.h,[A.a8,A.P,A.b5,A.bg,A.bj,A.b9,A.bl,A.aS,A.W,A.bh,A.bf,A.bc,A.aZ])
r(A.ap,A.P)
q(A.X,[A.aW,A.aX,A.be,A.d0,A.d2,A.cB,A.cA,A.cL,A.cn,A.cO,A.cE,A.bP,A.bR,A.bQ,A.bE,A.bK,A.bI,A.bJ,A.bH,A.d4])
q(A.be,[A.bd,A.a6])
r(A.d1,A.aX)
r(A.aB,A.bl)
q(A.aW,[A.cC,A.cD,A.cQ,A.c_,A.cG,A.cH,A.cK,A.cJ,A.cI,A.co,A.cY,A.cN,A.bF,A.bG])
r(A.bs,A.aF)
q(A.M,[A.az,A.b_])
r(A.ax,A.az)
q(A.W,[A.aq,A.b2])
r(A.f,A.x)
q(A.f,[A.o,A.G])
q(A.o,[A.b,A.c])
q(A.b,[A.a5,A.aQ,A.b1,A.ba])
r(A.ab,A.k)
r(A.R,A.a)
q(A.R,[A.L,A.A,A.N])
r(A.br,A.bq)
r(A.ao,A.br)
r(A.bv,A.bu)
r(A.au,A.bv)
r(A.bx,A.bw)
r(A.ay,A.bx)
q(A.b_,[A.bk,A.aU])
r(A.av,A.at)
r(A.S,A.av)
q(A.aY,[A.bL,A.bN,A.bM,A.bS,A.bV,A.bX,A.bY,A.c0,A.c4,A.c5,A.c6,A.cb,A.cc,A.ce,A.ci,A.ar,A.cj,A.cl,A.cm,A.cq,A.cs,A.cr,A.ct,A.cu,A.cv,A.cw])
r(A.c9,A.c7)
s(A.bq,A.k)
s(A.br,A.B)
s(A.bu,A.k)
s(A.bv,A.B)
s(A.bw,A.k)
s(A.bx,A.B)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bB:"int",h0:"double",aN:"num",l:"String",aK:"bool",E:"Null",z:"List"},mangledNames:{},types:["~()","~(A)","~(~())","E()","~(D<l>)","~(N)","@(@)","@(@,l)","@(l)","E(@)","E(~())","v<@>(@)","~(a)","aK(D<l>)","~(~)","~(L)","~(o)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.fl(v.typeUniverse,JSON.parse('{"b7":"e","a9":"e","K":"e","aY":"e","c8":"e","bL":"e","bN":"e","bM":"e","bS":"e","cg":"e","bV":"e","bX":"e","bY":"e","c0":"e","c4":"e","c5":"e","c6":"e","cb":"e","cc":"e","cd":"e","bC":"e","ce":"e","ci":"e","ar":"e","cj":"e","ck":"e","cl":"e","cm":"e","cq":"e","cs":"e","ca":"e","cr":"e","ct":"e","cu":"e","cv":"e","cw":"e","hn":"a","hu":"a","hm":"c","hv":"c","ho":"b","hy":"b","hw":"f","ht":"f","hz":"A","hq":"R","hp":"G","hB":"G","hx":"o","b3":{"aK":[],"O":[]},"am":{"O":[]},"e":{"ar":[]},"y":{"z":["1"],"p":["1"]},"c3":{"y":["1"],"z":["1"],"p":["1"]},"an":{"aN":[]},"al":{"bB":[],"aN":[],"O":[]},"b4":{"aN":[],"O":[]},"a1":{"l":[],"O":[]},"a8":{"h":[]},"ap":{"P":[],"h":[]},"b5":{"h":[]},"bg":{"h":[]},"aA":{"bb":[]},"X":{"a0":[]},"aW":{"a0":[]},"aX":{"a0":[]},"be":{"a0":[]},"bd":{"a0":[]},"a6":{"a0":[]},"bj":{"h":[]},"b9":{"h":[]},"bl":{"h":[]},"aB":{"P":[],"h":[]},"v":{"aj":["1"]},"ah":{"h":[]},"aF":{"dL":[]},"bs":{"aF":[],"dL":[]},"ax":{"M":["1"],"D":["1"],"p":["1"]},"k":{"z":["1"],"p":["1"]},"M":{"D":["1"],"p":["1"]},"az":{"M":["1"],"D":["1"],"p":["1"]},"bB":{"aN":[]},"D":{"p":["1"]},"aS":{"h":[]},"P":{"h":[]},"W":{"h":[]},"aq":{"h":[]},"b2":{"h":[]},"bh":{"h":[]},"bf":{"h":[]},"bc":{"h":[]},"aZ":{"h":[]},"b6":{"h":[]},"as":{"h":[]},"bt":{"bb":[]},"o":{"f":[],"x":[]},"L":{"a":[]},"A":{"a":[]},"f":{"x":[]},"N":{"a":[]},"b":{"o":[],"f":[],"x":[]},"a5":{"o":[],"f":[],"x":[]},"aQ":{"o":[],"f":[],"x":[]},"G":{"f":[],"x":[]},"ab":{"k":["1"],"z":["1"],"p":["1"],"k.E":"1"},"b1":{"o":[],"f":[],"x":[]},"ao":{"k":["f"],"B":["f"],"z":["f"],"a7":["f"],"p":["f"],"k.E":"f","B.E":"f"},"ba":{"o":[],"f":[],"x":[]},"au":{"k":["F"],"B":["F"],"z":["F"],"a7":["F"],"p":["F"],"k.E":"F","B.E":"F"},"R":{"a":[]},"ay":{"k":["f"],"B":["f"],"z":["f"],"a7":["f"],"p":["f"],"k.E":"f","B.E":"f"},"bk":{"M":["l"],"D":["l"],"p":["l"]},"av":{"at":["1"]},"S":{"av":["1"],"at":["1"]},"b_":{"M":["l"],"D":["l"],"p":["l"]},"aU":{"M":["l"],"D":["l"],"p":["l"]},"c":{"o":[],"f":[],"x":[]}}'))
A.fk(v.typeUniverse,JSON.parse('{"az":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ec
return{a:s("a5"),n:s("ah"),h:s("o"),R:s("h"),B:s("a"),Z:s("a0"),e:s("aj<@>"),f:s("p<l>"),k:s("y<o>"),S:s("y<l>"),b:s("y<@>"),T:s("am"),L:s("K"),D:s("a7<@>"),j:s("L"),O:s("z<o>"),V:s("A"),P:s("E"),K:s("m"),I:s("hA"),C:s("D<l>"),l:s("bb"),N:s("l"),U:s("N"),r:s("O"),t:s("P"),E:s("a9"),W:s("S<A>"),s:s("S<N>"),Y:s("ab<o>"),c:s("v<@>"),u:s("v<bB>"),y:s("aK"),m:s("aK(m)"),i:s("h0"),z:s("@"),w:s("@()"),v:s("@(m)"),Q:s("@(m,bb)"),x:s("@(D<l>)"),p:s("bB"),A:s("0&*"),_:s("m*"),G:s("aj<E>?"),X:s("m?"),F:s("aw<@,@>?"),g:s("bp?"),o:s("@(a)?"),J:s("~()?"),d:s("~(L)?"),q:s("aN"),H:s("~"),M:s("~()")}})();(function constants(){B.w=J.ak.prototype
B.i=J.y.prototype
B.b=J.al.prototype
B.c=J.an.prototype
B.d=J.a1.prototype
B.x=J.K.prototype
B.y=J.H.prototype
B.j=J.b7.prototype
B.k=A.au.prototype
B.e=J.a9.prototype
B.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.l=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.q=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.m=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.p=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.o=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.n=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.h=function(hooks) { return hooks; }

B.r=new A.b6()
B.a=new A.bs()
B.t=new A.bt()
B.u=new A.ai(0)
B.v=new A.ai(5e5)})();(function staticFields(){$.cM=null
$.aO=A.Z([],A.ec("y<m>"))
$.dF=null
$.dA=null
$.dz=null
$.ef=null
$.e9=null
$.ei=null
$.cZ=null
$.d3=null
$.dr=null
$.ad=null
$.aH=null
$.aI=null
$.dm=!1
$.n=B.a})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hs","em",()=>A.h2("_$dart_dartClosure"))
s($,"hC","en",()=>A.Q(A.cy({
toString:function(){return"$receiver$"}})))
s($,"hD","eo",()=>A.Q(A.cy({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"hE","ep",()=>A.Q(A.cy(null)))
s($,"hF","eq",()=>A.Q(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hI","et",()=>A.Q(A.cy(void 0)))
s($,"hJ","eu",()=>A.Q(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hH","es",()=>A.Q(A.dJ(null)))
s($,"hG","er",()=>A.Q(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"hL","ew",()=>A.Q(A.dJ(void 0)))
s($,"hK","ev",()=>A.Q(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"hM","du",()=>A.f_())
s($,"hr","el",()=>A.eV("^\\S+$"))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.H,MediaError:J.H,NavigatorUserMediaError:J.H,OverconstrainedError:J.H,PositionError:J.H,GeolocationPositionError:J.H,HTMLAudioElement:A.b,HTMLBRElement:A.b,HTMLBaseElement:A.b,HTMLBodyElement:A.b,HTMLButtonElement:A.b,HTMLCanvasElement:A.b,HTMLContentElement:A.b,HTMLDListElement:A.b,HTMLDataElement:A.b,HTMLDataListElement:A.b,HTMLDetailsElement:A.b,HTMLDialogElement:A.b,HTMLDivElement:A.b,HTMLEmbedElement:A.b,HTMLFieldSetElement:A.b,HTMLHRElement:A.b,HTMLHeadElement:A.b,HTMLHeadingElement:A.b,HTMLHtmlElement:A.b,HTMLIFrameElement:A.b,HTMLImageElement:A.b,HTMLInputElement:A.b,HTMLLIElement:A.b,HTMLLabelElement:A.b,HTMLLegendElement:A.b,HTMLLinkElement:A.b,HTMLMapElement:A.b,HTMLMediaElement:A.b,HTMLMenuElement:A.b,HTMLMetaElement:A.b,HTMLMeterElement:A.b,HTMLModElement:A.b,HTMLOListElement:A.b,HTMLObjectElement:A.b,HTMLOptGroupElement:A.b,HTMLOptionElement:A.b,HTMLOutputElement:A.b,HTMLParagraphElement:A.b,HTMLParamElement:A.b,HTMLPictureElement:A.b,HTMLPreElement:A.b,HTMLProgressElement:A.b,HTMLQuoteElement:A.b,HTMLScriptElement:A.b,HTMLShadowElement:A.b,HTMLSlotElement:A.b,HTMLSourceElement:A.b,HTMLSpanElement:A.b,HTMLStyleElement:A.b,HTMLTableCaptionElement:A.b,HTMLTableCellElement:A.b,HTMLTableDataCellElement:A.b,HTMLTableHeaderCellElement:A.b,HTMLTableColElement:A.b,HTMLTableElement:A.b,HTMLTableRowElement:A.b,HTMLTableSectionElement:A.b,HTMLTemplateElement:A.b,HTMLTextAreaElement:A.b,HTMLTimeElement:A.b,HTMLTitleElement:A.b,HTMLTrackElement:A.b,HTMLUListElement:A.b,HTMLUnknownElement:A.b,HTMLVideoElement:A.b,HTMLDirectoryElement:A.b,HTMLFontElement:A.b,HTMLFrameElement:A.b,HTMLFrameSetElement:A.b,HTMLMarqueeElement:A.b,HTMLElement:A.b,HTMLAnchorElement:A.a5,HTMLAreaElement:A.aQ,CDATASection:A.G,CharacterData:A.G,Comment:A.G,ProcessingInstruction:A.G,Text:A.G,DOMException:A.bT,DOMTokenList:A.bU,MathMLElement:A.o,Element:A.o,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.x,HTMLFormElement:A.b1,KeyboardEvent:A.L,MouseEvent:A.A,DragEvent:A.A,PointerEvent:A.A,WheelEvent:A.A,Document:A.f,DocumentFragment:A.f,HTMLDocument:A.f,ShadowRoot:A.f,XMLDocument:A.f,Attr:A.f,DocumentType:A.f,Node:A.f,NodeList:A.ao,RadioNodeList:A.ao,HTMLSelectElement:A.ba,Touch:A.F,TouchEvent:A.N,TouchList:A.au,CompositionEvent:A.R,FocusEvent:A.R,TextEvent:A.R,UIEvent:A.R,NamedNodeMap:A.ay,MozNamedAttrMap:A.ay,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGScriptElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMTokenList:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.he
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=description.dart.js.map
