"use strict";appMakeBeCool.gateway.addClass("DtMenu",function(n,l,s,e){function a(){if(appMakeBeCool.gateway.base.Class.apply(i,[o]),!t.preloaded)return i.init();i.globals.customCreate=function(){u(),c(),d(),r()},i.create()}var i=this,o=l.extend({navigation:"#navigation"},n),t={navigation:null,preloaded:!1},u=function(){t.navigation=l(o.navigation)},c=function(){v()},d=function(){},v=function(){var n,e,i;t.navigation.length&&s.width()<1200&&(n=t.navigation.find("li i"),t.navigation.find("li"),t.navigation.children("li"),e=t.navigation.find(".dl-submenu"),e.each(function(){l(this).prepend('<li class="dt-back"><a href="#"><i class="fa fa-angle-left"></i>Back</a>')}),i=t.navigation.find(".dt-back"),n.click(function(){var n,e,i,s=l(this).closest("li"),a=s.closest("ul");return a.hasClass("dl-menu")?(e=s.children("ul"),n=l(".mega-menu"),i=s.closest("li.subviewopen"),(e.length||n.length)&&(s.addClass("subviewopen"),a.addClass("subview"))):(e=s.children("ul"),(i=s.closest("li.subviewopen")).hasClass("subviewopen")&&(i.removeClass("subviewopen"),i.addClass("subview"),s.addClass("subviewopen"))),console.log("Nope"),!1}),i.click(function(){l(this);var n,e=l(this).closest("li.subviewopen"),i=e.closest("ul");return i.hasClass("dl-submenu")?(n=i.closest("li"),e.removeClass("subviewopen"),n.addClass("subviewopen")):(i.removeClass("subview"),e.removeClass("subviewopen")),!1}))},r=function(){i.globals.customResurrect=function(){},i.globals.customDestroy=function(){}};i.addMethod("init",function(){i.bind(s,i.globals.classType+"_Init",function(n,e,i){t.preloaded=!0,a()})}),a()});