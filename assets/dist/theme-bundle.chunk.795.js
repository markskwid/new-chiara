"use strict";(self.webpackChunkWebpackChiara=self.webpackChunkWebpackChiara||[]).push([[795],{80795:(t,i,n)=>{n.r(i),n.d(i,{default:()=>l,initBrandPage:()=>h,initBrandsPage:()=>g,initCategoryPage:()=>d,initSearchPage:()=>u});var e=n(23279),o=n.n(e),a=n(22205),s=n.n(a),r=n(42066),c=n(55825),p=function(){function t(t,i,n){this.options=s()({},{containerSelector:".productGrid",paginationSelector:".pagination",nextLinkSelector:".pagination-item--next .pagination-link",loadingClass:"is-loading",threshold:100,appendSelector:".product",template:"chiara/category/ajax-product-listing",config:{}},i),this.$scope=t,this.context=n,this.isRequesting=!1,this.onScroll=this.onScroll.bind(this),this.bindEvents()}var i=t.prototype;return i.bindEvents=function(){c(window).on("scroll",o()(this.onScroll,200))},i.onScroll=function(){if(!this.isRequesting){var t=c(this.options.paginationSelector,this.$scope),i=c(this.options.nextLinkSelector,t);if(0!==i.length){var n=i.offset().top-this.options.threshold,e=c(window).scrollTop(),o=e+c(window).height();if(n>=e&&n<=o){var a=i.attr("href").replace(/&?limit=[0-9]+/,"")+"&limit="+this.context.themeSettings.products_per_page;this.request(a)}}}},i.request=function(t){var i=this,n=c(this.options.containerSelector,this.$scope),e=c(this.options.paginationSelector,this.$scope);this.isRequesting=!0,e.addClass(this.options.loadingClass),n.addClass(this.options.loadingClass),r.hi.getPage(t,{template:this.options.template,config:this.options.config},(function(t,o){if(i.isRequesting=!1,e.removeClass(i.options.loadingClass),n.removeClass(i.options.loadingClass),t)return t;var a=c(o),s=c(i.options.appendSelector,a);s.length>0&&n.append(s);var r=a.find(i.options.paginationSelector);e.empty().append(r.children())}))},t}();const l=p;function h(t){c("[data-brand-infinite-scroll]").each((function(i,n){new p(c(n),{template:"chiara/brand/ajax-product-listing",config:{brand:{products:{limit:parseInt(t.themeSettings.products_per_page,10)}}}},t)}))}function d(t){c("[data-category-infinite-scroll]").each((function(i,n){new p(c(n),{config:{category:{products:{limit:parseInt(t.themeSettings.products_per_page,10)}}}},t)}))}function g(t){c("[data-brands-infinite-scroll]").each((function(i,n){new p(c(n),{containerSelector:".brandGrid",appendSelector:".brand",template:"chiara/brand/ajax-brand-listing",config:{brands:{limit:parseInt(t.themeSettings.products_per_page,10)}}},t)}))}function u(t){c("[data-search-infinite-scroll]").each((function(i,n){new p(c(n),{template:"chiara/search/ajax-product-listing",config:{product_results:{limit:parseInt(t.themeSettings.products_per_page,10)}}},t)}))}}}]);