/*! For license information please see theme-bundle.chunk.646.js.LICENSE.txt */
(self.webpackChunkWebpackChiara=self.webpackChunkWebpackChiara||[]).push([[646],{88668:(t,e,r)=>{var n=r(1469);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return n(t)?t:[t]}},62705:(t,e,r)=>{var n=r(55639).Symbol;t.exports=n},47443:(t,e,r)=>{var n=r(42118);t.exports=function(t,e){return!(null==t||!t.length)&&n(t,e,0)>-1}},1196:t=>{t.exports=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}},29932:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},62488:t=>{t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},62663:t=>{t.exports=function(t,e,r,n){var o=-1,s=null==t?0:t.length;for(n&&s&&(r=t[++o]);++o<s;)r=e(r,t[o],o,t);return r}},44286:t=>{t.exports=function(t){return t.split("")}},49029:t=>{var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},20731:(t,e,r)=>{var n=r(88668),o=r(47443),s=r(1196),h=r(29932),a=r(7518),u=r(74757);t.exports=function(t,e,r,i){var f=-1,l=o,c=!0,p=t.length,v=[],d=e.length;if(!p)return v;r&&(e=h(e,a(r))),i?(l=s,c=!1):e.length>=200&&(l=u,c=!1,e=new n(e));t:for(;++f<p;){var m=t[f],x=null==r?m:r(m);if(m=i||0!==m?m:0,c&&x==x){for(var g=d;g--;)if(e[g]===x)continue t;v.push(m)}else l(e,x,i)||v.push(m)}return v}},21078:(t,e,r)=>{var n=r(62488),o=r(37285);t.exports=function t(e,r,s,h,a){var u=-1,i=e.length;for(s||(s=o),a||(a=[]);++u<i;){var f=e[u];r>0&&s(f)?r>1?t(f,r-1,s,h,a):n(a,f):h||(a[a.length]=f)}return a}},42118:t=>{t.exports=function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}},14259:t=>{t.exports=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var s=Array(o);++n<o;)s[n]=t[n+e];return s}},80531:(t,e,r)=>{var n=r(62705),o=r(29932),s=r(1469),h=r(33448),a=n?n.prototype:void 0,u=a?a.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(s(e))return o(e,t)+"";if(h(e))return u?u.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},7518:t=>{t.exports=function(t){return function(e){return t(e)}}},45652:(t,e,r)=>{var n=r(88668),o=r(47443),s=r(1196),h=r(74757),a=r(23593),u=r(21814);t.exports=function(t,e,r){var i=-1,f=o,l=t.length,c=!0,p=[],v=p;if(r)c=!1,f=s;else if(l>=200){var d=e?null:a(t);if(d)return u(d);c=!1,f=h,v=new n}else v=e?[]:p;t:for(;++i<l;){var m=t[i],x=e?e(m):m;if(m=r||0!==m?m:0,c&&x==x){for(var g=v.length;g--;)if(v[g]===x)continue t;e&&v.push(x),p.push(m)}else f(v,x,r)||(v!==p&&v.push(x),p.push(m))}return p}},74757:(t,e,r)=>{var n=r(42118);t.exports=function(t,e){return!(null==t||!t.length)&&n(t,e,0)>-1}},40180:(t,e,r)=>{var n=r(14259);t.exports=function(t,e,r){var o=t.length;return r=void 0===r?o:r,!e&&r>=o?t:n(t,e,r)}},98805:(t,e,r)=>{var n=r(40180),o=r(62689),s=r(83140),h=r(79833);t.exports=function(t){return function(e){e=h(e);var r=o(e)?s(e):void 0,a=r?r[0]:e.charAt(0),u=r?n(r,1).join(""):e.slice(1);return a[t]()+u}}},35393:(t,e,r)=>{var n=r(62663),o=r(53816),s=r(58748),h=RegExp("['’]","g");t.exports=function(t){return function(e){return n(s(o(e).replace(h,"")),t,"")}}},23593:t=>{t.exports=function(){}},62689:t=>{var e=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return e.test(t)}},93157:t=>{var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},37285:(t,e,r)=>{var n=r(62705),o=r(35694),s=r(1469),h=n?n.isConcatSpreadable:void 0;t.exports=function(t){return s(t)||o(t)||!!(h&&t&&t[h])}},21814:t=>{t.exports=function(){return[]}},83140:(t,e,r)=>{var n=r(44286),o=r(62689),s=r(676);t.exports=function(t){return o(t)?s(t):n(t)}},676:t=>{var e="\\ud800-\\udfff",r="["+e+"]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",s="[^"+e+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+n+"|"+o+")?",i="[\\ufe0e\\ufe0f]?",f=i+u+"(?:\\u200d(?:"+[s,h,a].join("|")+")"+i+u+")*",l="(?:"+[s+n+"?",n,h,a,r].join("|")+")",c=RegExp(o+"(?="+o+")|"+l+f,"g");t.exports=function(t){return t.match(c)||[]}},2757:t=>{var e="\\ud800-\\udfff",r="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",o="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",h="["+s+"]",a="\\d+",u="["+r+"]",i="["+n+"]",f="[^"+e+s+a+r+n+o+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+o+"]",v="(?:"+i+"|"+f+")",d="(?:"+p+"|"+f+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",x="(?:['’](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",y=b+g+"(?:\\u200d(?:"+["[^"+e+"]",l,c].join("|")+")"+b+g+")*",j="(?:"+[u,l,c].join("|")+")"+y,A=RegExp([p+"?"+i+"+"+m+"(?="+[h,p,"$"].join("|")+")",d+"+"+x+"(?="+[h,p+v,"$"].join("|")+")",p+"?"+v+"+"+m,p+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,j].join("|"),"g");t.exports=function(t){return t.match(A)||[]}},68929:(t,e,r)=>{var n=r(48403),o=r(35393)((function(t,e,r){return e=e.toLowerCase(),t+(r?n(e):e)}));t.exports=o},48403:(t,e,r)=>{var n=r(79833),o=r(11700);t.exports=function(t){return o(n(t).toLowerCase())}},53816:(t,e,r)=>{var n=r(80531);t.exports=function(t){return null==t?"":n(t)}},64721:(t,e,r)=>{var n=r(42118);t.exports=function(t,e){return!(null==t||!t.length)&&n(t,e,0)>-1}},29246:(t,e,r)=>{var n=r(98612),o=r(37005);t.exports=function(t){return o(t)&&n(t)}},33448:t=>{t.exports=function(){return!1}},35161:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},93386:(t,e,r)=>{var n=r(21078),o=r(5976),s=r(45652),h=r(29246),a=o((function(t){return s(n(t,1,h,!0))}));t.exports=a},11700:(t,e,r)=>{var n=r(98805)("toUpperCase");t.exports=n},82569:(t,e,r)=>{var n=r(20731),o=r(5976),s=r(29246),h=o((function(t,e){return s(t)?n(t,e):[]}));t.exports=h},58748:(t,e,r)=>{var n=r(49029),o=r(93157),s=r(79833),h=r(2757);t.exports=function(t,e,r){return t=s(t),void 0===(e=r?void 0:e)?o(t)?h(t):n(t):t.match(e)||[]}},62587:t=>{"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,r,n,o){r=r||"&",n=n||"=";var s={};if("string"!=typeof t||0===t.length)return s;var h=/\+/g;t=t.split(r);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var u=t.length;a>0&&u>a&&(u=a);for(var i=0;i<u;++i){var f,l,c,p,v=t[i].replace(h,"%20"),d=v.indexOf(n);d>=0?(f=v.substr(0,d),l=v.substr(d+1)):(f=v,l=""),c=decodeURIComponent(f),p=decodeURIComponent(l),e(s,c)?Array.isArray(s[c])?s[c].push(p):s[c]=[s[c],p]:s[c]=p}return s}},12361:t=>{"use strict";var e=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,r,n,o){return r=r||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map((function(o){var s=encodeURIComponent(e(o))+n;return Array.isArray(t[o])?t[o].map((function(t){return s+encodeURIComponent(e(t))})).join(r):s+encodeURIComponent(e(t[o]))})).join(r):o?encodeURIComponent(e(o))+n+encodeURIComponent(e(t)):""}},17673:(t,e,r)=>{"use strict";e.decode=e.parse=r(62587),e.encode=e.stringify=r(12361)},52511:function(t,e,r){var n;t=r.nmd(t),function(o){e&&e.nodeType,t&&t.nodeType;var s="object"==typeof r.g&&r.g;s.global!==s&&s.window!==s&&s.self;var h,a=2147483647,u=36,i=26,f=38,l=700,c=/^xn--/,p=/[^\x20-\x7E]/,v=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=u-1,x=Math.floor,g=String.fromCharCode;function b(t){throw RangeError(d[t])}function y(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function j(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),n+y((t=t.replace(v,".")).split("."),e).join(".")}function A(t){for(var e,r,n=[],o=0,s=t.length;o<s;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<s?56320==(64512&(r=t.charCodeAt(o++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--):n.push(e);return n}function C(t){return y(t,(function(t){var e="";return t>65535&&(e+=g((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+g(t)})).join("")}function O(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function w(t,e,r){var n=0;for(t=r?x(t/l):t>>1,t+=x(t/e);t>m*i>>1;n+=u)t=x(t/m);return x(n+(m+1)*t/(t+f))}function I(t){var e,r,n,o,s,h,f,l,c,p,v,d=[],m=t.length,g=0,y=128,j=72;for((r=t.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&b("not-basic"),d.push(t.charCodeAt(n));for(o=r>0?r+1:0;o<m;){for(s=g,h=1,f=u;o>=m&&b("invalid-input"),((l=(v=t.charCodeAt(o++))-48<10?v-22:v-65<26?v-65:v-97<26?v-97:u)>=u||l>x((a-g)/h))&&b("overflow"),g+=l*h,!(l<(c=f<=j?1:f>=j+i?i:f-j));f+=u)h>x(a/(p=u-c))&&b("overflow"),h*=p;j=w(g-s,e=d.length+1,0==s),x(g/e)>a-y&&b("overflow"),y+=x(g/e),g%=e,d.splice(g++,0,y)}return C(d)}function q(t){var e,r,n,o,s,h,f,l,c,p,v,d,m,y,j,C=[];for(d=(t=A(t)).length,e=128,r=0,s=72,h=0;h<d;++h)(v=t[h])<128&&C.push(g(v));for(n=o=C.length,o&&C.push("-");n<d;){for(f=a,h=0;h<d;++h)(v=t[h])>=e&&v<f&&(f=v);for(f-e>x((a-r)/(m=n+1))&&b("overflow"),r+=(f-e)*m,e=f,h=0;h<d;++h)if((v=t[h])<e&&++r>a&&b("overflow"),v==e){for(l=r,c=u;!(l<(p=c<=s?1:c>=s+i?i:c-s));c+=u)j=l-p,y=u-p,C.push(g(O(p+j%y,0))),l=x(j/y);C.push(g(O(l,0))),s=w(r,m,n==o),r=0,++n}++r,++e}return C.join("")}h={version:"1.3.2",ucs2:{decode:A,encode:C},decode:I,encode:q,toASCII:function(t){return j(t,(function(t){return p.test(t)?"xn--"+q(t):t}))},toUnicode:function(t){return j(t,(function(t){return c.test(t)?I(t.slice(4).toLowerCase()):t}))}},void 0===(n=function(){return h}.call(e,r,e,t))||(t.exports=n)}()},8575:(t,e,r)=>{"use strict";var n=r(52511),o=r(62502);function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){return o.isString(t)&&(t=b(t)),t instanceof s?t.format():s.prototype.format.call(t)},e.Url=s;var h=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,i=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),f=["'"].concat(i),l=["%","/","?",";","#"].concat(f),c=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,v=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},m={javascript:!0,"javascript:":!0},x={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=r(17673);function b(t,e,r){if(t&&o.isObject(t)&&t instanceof s)return t;var n=new s;return n.parse(t,e,r),n}s.prototype.parse=function(t,e,r){if(!o.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var s=t.indexOf("?"),a=-1!==s&&s<t.indexOf("#")?"?":"#",i=t.split(a);i[0]=i[0].replace(/\\/g,"/");var b=t=i.join(a);if(b=b.trim(),!r&&1===t.split("#").length){var y=u.exec(b);if(y)return this.path=b,this.href=b,this.pathname=y[1],y[2]?(this.search=y[2],this.query=e?g.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var j=h.exec(b);if(j){var A=(j=j[0]).toLowerCase();this.protocol=A,b=b.substr(j.length)}if(r||j||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var C="//"===b.substr(0,2);!C||j&&m[j]||(b=b.substr(2),this.slashes=!0)}if(!m[j]&&(C||j&&!x[j])){for(var O,w,I=-1,q=0;q<c.length;q++)-1!==(R=b.indexOf(c[q]))&&(-1===I||R<I)&&(I=R);for(-1!==(w=-1===I?b.lastIndexOf("@"):b.lastIndexOf("@",I))&&(O=b.slice(0,w),b=b.slice(w+1),this.auth=decodeURIComponent(O)),I=-1,q=0;q<l.length;q++){var R;-1!==(R=b.indexOf(l[q]))&&(-1===I||R<I)&&(I=R)}-1===I&&(I=b.length),this.host=b.slice(0,I),b=b.slice(I),this.parseHost(),this.hostname=this.hostname||"";var U="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!U)for(var k=this.hostname.split(/\./),S=(q=0,k.length);q<S;q++){var E=k[q];if(E&&!E.match(p)){for(var z="",Z=0,N=E.length;Z<N;Z++)E.charCodeAt(Z)>127?z+="x":z+=E[Z];if(!z.match(p)){var L=k.slice(0,q),T=k.slice(q+1),$=E.match(v);$&&(L.push($[1]),T.unshift($[2])),T.length&&(b="/"+T.join(".")+b),this.hostname=L.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),U||(this.hostname=n.toASCII(this.hostname));var F=this.port?":"+this.port:"",_=this.hostname||"";this.host=_+F,this.href+=this.host,U&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!d[A])for(q=0,S=f.length;q<S;q++){var D=f[q];if(-1!==b.indexOf(D)){var H=encodeURIComponent(D);H===D&&(H=escape(D)),b=b.split(D).join(H)}}var K=b.indexOf("#");-1!==K&&(this.hash=b.substr(K),b=b.slice(0,K));var M=b.indexOf("?");if(-1!==M?(this.search=b.substr(M),this.query=b.substr(M+1),e&&(this.query=g.parse(this.query)),b=b.slice(0,M)):e&&(this.search="",this.query={}),b&&(this.pathname=b),x[A]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){F=this.pathname||"";var P=this.search||"";this.path=F+P}return this.href=this.format(),this},s.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",s=!1,h="";this.host?s=t+this.host:this.hostname&&(s=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(h=g.stringify(this.query));var a=this.search||h&&"?"+h||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||x[e])&&!1!==s?(s="//"+(s||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):s||(s=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),e+s+(r=r.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(a=a.replace("#","%23"))+n},s.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},s.prototype.resolveObject=function(t){if(o.isString(t)){var e=new s;e.parse(t,!1,!0),t=e}for(var r=new s,n=Object.keys(this),h=0;h<n.length;h++){var a=n[h];r[a]=this[a]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var u=Object.keys(t),i=0;i<u.length;i++){var f=u[i];"protocol"!==f&&(r[f]=t[f])}return x[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!x[t.protocol]){for(var l=Object.keys(t),c=0;c<l.length;c++){var p=l[c];r[p]=t[p]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||m[t.protocol])r.pathname=t.pathname;else{for(var v=(t.pathname||"").split("/");v.length&&!(t.host=v.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==v[0]&&v.unshift(""),v.length<2&&v.unshift(""),r.pathname=v.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var d=r.pathname||"",g=r.search||"";r.path=d+g}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var b=r.pathname&&"/"===r.pathname.charAt(0),y=t.host||t.pathname&&"/"===t.pathname.charAt(0),j=y||b||r.host&&t.pathname,A=j,C=r.pathname&&r.pathname.split("/")||[],O=(v=t.pathname&&t.pathname.split("/")||[],r.protocol&&!x[r.protocol]);if(O&&(r.hostname="",r.port=null,r.host&&(""===C[0]?C[0]=r.host:C.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===v[0]?v[0]=t.host:v.unshift(t.host)),t.host=null),j=j&&(""===v[0]||""===C[0])),y)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,C=v;else if(v.length)C||(C=[]),C.pop(),C=C.concat(v),r.search=t.search,r.query=t.query;else if(!o.isNullOrUndefined(t.search))return O&&(r.hostname=r.host=C.shift(),(U=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=U.shift(),r.host=r.hostname=U.shift())),r.search=t.search,r.query=t.query,o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!C.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var w=C.slice(-1)[0],I=(r.host||t.host||C.length>1)&&("."===w||".."===w)||""===w,q=0,R=C.length;R>=0;R--)"."===(w=C[R])?C.splice(R,1):".."===w?(C.splice(R,1),q++):q&&(C.splice(R,1),q--);if(!j&&!A)for(;q--;q)C.unshift("..");!j||""===C[0]||C[0]&&"/"===C[0].charAt(0)||C.unshift(""),I&&"/"!==C.join("/").substr(-1)&&C.push("");var U,k=""===C[0]||C[0]&&"/"===C[0].charAt(0);return O&&(r.hostname=r.host=k?"":C.length?C.shift():"",(U=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=U.shift(),r.host=r.hostname=U.shift())),(j=j||r.host&&C.length)&&!k&&C.unshift(""),C.length?r.pathname=C.join("/"):(r.pathname=null,r.path=null),o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},s.prototype.parseHost=function(){var t=this.host,e=a.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},62502:t=>{"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}}}]);