"use strict";(self.webpackChunkWebpackChiara=self.webpackChunkWebpackChiara||[]).push([[484],{4484:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var c=a(42066),s=a(55825),o=function(){function t(t){this.$scope=t,this.url=this.$scope.data("url"),this.type=this.$scope.data("type"),this.$content=this.$scope.is("[data-content]")?this.$scope:this.$scope.find("[data-content]"),this.loadProducts()}return t.prototype.loadProducts=function(){var t=this,e="chiara/products-by-category/"+("carousel"==this.type?"carousel":"grid");c.ZP.api.getPage(this.url,{template:e},(function(e,a){t.$scope.find("[data-loader]").remove(),t.$content.append(a),t.$content.find("[data-slick]").slick()}))},t}();function i(t){return void 0===t&&(t="[data-products-by-category]"),s(t).get().map((function(t){return new o(s(t))}))}}}]);