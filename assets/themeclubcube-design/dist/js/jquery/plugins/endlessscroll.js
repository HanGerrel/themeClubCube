!function(i){var c={page:1};i.fn.endlessscroll=function(e){var o=i.extend({container:"#containerItems",pages:"#pages",total:0,loader:"#pagination-loader"},e),r=0,t="page=";c.total=o.total;var s=i(o.loader);return i(window).scroll(function(){var e,n,a;i(document).height()-i(window).height()-i(document).scrollTop()<300&&(n=i(o.container).parent().hasClass("blocks"),void 0!==(a=i(o.pages+" .next a").attr("href"))&&(e=a.split("?"),0==r&&e[1].substr(t.length)!=c.page&&(c.page=e[1].substr(t.length),r=1,i.ajax({type:"POST",url:a,dataType:"html",cache:!1,beforeSend:function(e){s.addClass("active"),i.ajaxPrefilter(e)},success:function(e){var a,t;s.removeClass("active"),n==i(o.container).parent().hasClass("blocks")&&(a=i(e).find(o.container).html(),t=i(e).find(o.pages),i(o.container).append(a),i(o.pages).remove(),t.after(o.container),t.hide(),r=0)}}))))}),this.each(function(){c.page=1,i(o.pages).hide()})}}(jQuery);