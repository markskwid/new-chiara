(self.webpackChunkWebpackChiara=self.webpackChunkWebpackChiara||[]).push([[723],{67313:(e,t,r)=>{"use strict";r.d(t,{Ek:()=>v,g_:()=>h,iR:()=>p,kI:()=>w});var i=r(48403),n=r.n(i),o=r(68929),a=r.n(o),s=r(64721),u=r.n(s),c=r(40097),d=r(73609),f=r(55825),l=["input","select","textarea"],v=function(e,t,r,i){return{onEmptyPasswordErrorText:e,onConfirmPasswordErrorText:t,onMismatchPasswordErrorText:r,onNotValidPasswordErrorText:i}};function p(e,t){void 0===t&&(t={});var r=f(e),i=r.find(l.join(", ")),o=t.formFieldClass,s=void 0===o?"form-field":o;return i.each((function(e,t){!function(e,t){var r,i=f(e),o=i.parent("."+t),s=i.prop("tagName").toLowerCase(),c=t+"--"+s;if("input"===s){var d=i.prop("type");u()(["radio","checkbox","submit"],d)?c=t+"--"+a()(d):r=""+c+n()(d)}o.addClass(c).addClass(r)}(t,s)})),r}function h(e){var t,r,i={type:"hidden",name:"FormFieldIsText"+(t=e,r=t.prop("name").match(/(\[.*\])/),r&&0!==r.length?r[0]:""),value:"1"};e.after(f("<input />",i))}var w={setEmailValidation:function(e,t,r){t&&e.add({selector:t,validate:function(e,t){e(d.Z.email(t))},errorMessage:r})},setPasswordValidation:function(e,t,r,i,n,o){var a=n.onEmptyPasswordErrorText,s=n.onConfirmPasswordErrorText,u=n.onMismatchPasswordErrorText,c=n.onNotValidPasswordErrorText,d=f(t),l=[{selector:t,validate:function(e,t){var r=t.length;if(o)return e(!0);e(r)},errorMessage:a},{selector:t,validate:function(e,t){var r=t.match(new RegExp(i.alpha))&&t.match(new RegExp(i.numeric))&&t.length>=i.minlength;if(o&&0===t.length)return e(!0);e(r)},errorMessage:c},{selector:r,validate:function(e,t){var r=t.length;if(o)return e(!0);e(r)},errorMessage:s},{selector:r,validate:function(e,t){e(t===d.val())},errorMessage:u}];e.add(l)},setMinMaxPriceValidation:function(e,t,r){void 0===r&&(r={});var i=t.errorSelector,n=t.fieldsetSelector,o=t.formSelector,a=t.maxPriceSelector,s=t.minPriceSelector,u=r,c=u.onMinPriceError,d=u.onMaxPriceError,f=u.minPriceNotEntered,l=u.maxPriceNotEntered,v=u.onInvalidPrice;e.configure({form:o,preventSubmit:!0,successClass:"_"}),e.add({errorMessage:c,selector:s,validate:"min-max:"+s+":"+a}),e.add({errorMessage:d,selector:a,validate:"min-max:"+s+":"+a}),e.add({errorMessage:l,selector:a,validate:"presence"}),e.add({errorMessage:f,selector:s,validate:"presence"}),e.add({errorMessage:v,selector:[s,a],validate:"min-number:0"}),e.setMessageOptions({selector:[s,a],parent:n,errorSpan:i})},setStateCountryValidation:function(e,t,r){t&&e.add({selector:t,validate:"presence",errorMessage:r})},cleanUpStateValidation:function(e){var t=f('[data-type="'+e.data("fieldType")+'"]');Object.keys(c.Z.classes).forEach((function(e){t.hasClass(c.Z.classes[e])&&t.removeClass(c.Z.classes[e])}))}}},91723:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var i,n=r(49230),o=r(40097),a=r(28350),s=r(73609),u=r(92618),c=r.n(u),d=r(53404),f=r(55825),l=(0,d.Z)("medium"),v=function(){function e(e){this.validator=(0,o.Z)({submit:e.find('input[type="submit"]')}),this.$reviewsContent=f("#product-reviews"),this.$collapsible=f("[data-collapsible]",this.$reviewsContent),this.initLinkBind(),this.initLinkBindChiara(),this.injectPaginationLink(),this.collapseReviews()}var t=e.prototype;return t.initLinkBind=function(){var e=this,t=f("#productReviews-content",this.$reviewsContent);f(".productView-reviewLink").on("click",(function(){t.hasClass("is-open")||e.$collapsible.trigger(a.XT.click)}))},t.initLinkBindChiara=function(){f(".productView-reviewLink").on("click",(function(e){if(l&&l.matches){var t=f(".productView-tab--reviews");t.length>0&&(e.preventDefault(),t.hasClass("is-active")||t.find("a").trigger("click"),c()(t.get(0),{offset:-100,duration:100}))}}))},t.collapseReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")||this.$collapsible.trigger(a.XT.click)},t.injectPaginationLink=function(){var e=f(".pagination-item--next .pagination-link",this.$reviewsContent),t=f(".pagination-item--previous .pagination-link",this.$reviewsContent);e.length&&e.attr("href",e.attr("href")+"#product-reviews"),t.length&&t.attr("href",t.attr("href")+"#product-reviews")},t.registerValidation=function(e){return this.context=e,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:this.context.reviewRating},{selector:'[name="revtitle"]',validate:"presence",errorMessage:this.context.reviewSubject},{selector:'[name="revtext"]',validate:"presence",errorMessage:this.context.reviewComment},{selector:'.writeReview-form [name="email"]',validate:function(e,t){e(s.Z.email(t))},errorMessage:this.context.reviewEmail}]),this.validator},t.validate=function(){return this.validator.performCheck()},e}(),p=r(94852),h=r(55825),w=function(){function e(e){this.$player=e.find("[data-video-player]"),this.$videos=e.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var t=e.prototype;return t.selectNewVideo=function(e){e.preventDefault();var t=h(e.currentTarget);this.currentVideo={id:t.data("videoId"),$selectedThumb:t},this.setMainVideo(),this.setActiveThumb()},t.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},t.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},t.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},e}(),x=r(67313),m=r(42066),g=r(55825);function b(e){m.hi.getPage(e,{template:"chiara/products/ajax-reviews",config:{product:{reviews:{limit:i.productpage_reviews_count}}}},(function(e,t){if(e)return e;g("[data-product-reviews]").html(t)}))}var y=r(55825);function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}var C=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).url=window.location.href,r.$reviewLink=y('[data-reveal-id="modal-review-form"]'),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,k(t,r);var o=n.prototype;return o.onReady=function(){var e,t,r=this;y(document).on("close.fndtn.reveal",(function(){-1!==r.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)})),(0,a.ZP)(),this.productDetails=new p.Z(y(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),h("[data-"+(t="video-gallery")+"]").each((function(e,r){var i=h(r);i.data(t)instanceof w||i.data(t,new w(i))}));var n,o=(0,x.iR)(".writeReview-form"),s=new v(o);y("body").on("click",'[data-reveal-id="modal-review-form"]',(function(){e=s.registerValidation(r.context)})),o.on("submit",(function(){return!!e&&(e.performCheck(),e.areAll("valid"))})),this.productReviewHandler(),n=this.context,i=n.themeSettings,g("body").on("click","[data-product-reviews] .pagination-link",(function(e){e.preventDefault(),e.stopPropagation();var t=g(e.currentTarget);window.history&&window.history.pushState&&window.history.pushState(null,document.title,t.attr("href")),b(t.attr("href"))})),g(window).on("popstate",(function(){b(window.location.href)}))},o.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},n}(n.Z)},62705:(e,t,r)=>{var i=r(55639).Symbol;e.exports=i},29932:e=>{e.exports=function(e,t){for(var r=-1,i=null==e?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n}},62663:e=>{e.exports=function(e,t,r,i){var n=-1,o=null==e?0:e.length;for(i&&o&&(r=e[++n]);++n<o;)r=t(r,e[n],n,e);return r}},44286:e=>{e.exports=function(e){return e.split("")}},49029:e=>{var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},42118:e=>{e.exports=function(e,t,r){for(var i=r-1,n=e.length;++i<n;)if(e[i]===t)return i;return-1}},14259:e=>{e.exports=function(e,t,r){var i=-1,n=e.length;t<0&&(t=-t>n?0:n+t),(r=r>n?n:r)<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var o=Array(n);++i<n;)o[i]=e[i+t];return o}},80531:(e,t,r)=>{var i=r(62705),n=r(29932),o=r(1469),a=r(33448),s=i?i.prototype:void 0,u=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return n(t,e)+"";if(a(t))return u?u.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},40180:(e,t,r)=>{var i=r(14259);e.exports=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:i(e,t,r)}},98805:(e,t,r)=>{var i=r(40180),n=r(62689),o=r(83140),a=r(79833);e.exports=function(e){return function(t){t=a(t);var r=n(t)?o(t):void 0,s=r?r[0]:t.charAt(0),u=r?i(r,1).join(""):t.slice(1);return s[e]()+u}}},35393:(e,t,r)=>{var i=r(62663),n=r(53816),o=r(58748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return i(o(n(t).replace(a,"")),e,"")}}},62689:e=>{var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},93157:e=>{var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},83140:(e,t,r)=>{var i=r(44286),n=r(62689),o=r(676);e.exports=function(e){return n(e)?o(e):i(e)}},676:e=>{var t="\\ud800-\\udfff",r="["+t+"]",i="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",n="\\ud83c[\\udffb-\\udfff]",o="[^"+t+"]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+i+"|"+n+")?",c="[\\ufe0e\\ufe0f]?",d=c+u+"(?:\\u200d(?:"+[o,a,s].join("|")+")"+c+u+")*",f="(?:"+[o+i+"?",i,a,s,r].join("|")+")",l=RegExp(n+"(?="+n+")|"+f+d,"g");e.exports=function(e){return e.match(l)||[]}},2757:e=>{var t="\\ud800-\\udfff",r="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+o+"]",s="\\d+",u="["+r+"]",c="["+i+"]",d="[^"+t+o+s+r+i+n+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+n+"]",p="(?:"+c+"|"+d+")",h="(?:"+v+"|"+d+")",w="(?:['’](?:d|ll|m|re|s|t|ve))?",x="(?:['’](?:D|LL|M|RE|S|T|VE))?",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?",b=g+m+"(?:\\u200d(?:"+["[^"+t+"]",f,l].join("|")+")"+g+m+")*",y="(?:"+[u,f,l].join("|")+")"+b,k=RegExp([v+"?"+c+"+"+w+"(?="+[a,v,"$"].join("|")+")",h+"+"+x+"(?="+[a,v+p,"$"].join("|")+")",v+"?"+p+"+"+w,v+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",s,y].join("|"),"g");e.exports=function(e){return e.match(k)||[]}},68929:(e,t,r)=>{var i=r(48403),n=r(35393)((function(e,t,r){return t=t.toLowerCase(),e+(r?i(t):t)}));e.exports=n},48403:(e,t,r)=>{var i=r(79833),n=r(11700);e.exports=function(e){return n(i(e).toLowerCase())}},53816:(e,t,r)=>{var i=r(80531);e.exports=function(e){return null==e?"":i(e)}},64721:(e,t,r)=>{var i=r(42118);e.exports=function(e,t){return!(null==e||!e.length)&&i(e,t,0)>-1}},33448:e=>{e.exports=function(){return!1}},11700:(e,t,r)=>{var i=r(98805)("toUpperCase");e.exports=i},58748:(e,t,r)=>{var i=r(49029),n=r(93157),o=r(79833),a=r(2757);e.exports=function(e,t,r){return e=o(e),void 0===(t=r?void 0:t)?n(e)?a(e):i(e):e.match(t)||[]}}}]);