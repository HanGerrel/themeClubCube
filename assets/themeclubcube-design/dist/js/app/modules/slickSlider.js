"use strict";appMakeBeCool.gateway.addClass("SlickSlider",function(e,i,o,d){function n(){if(appMakeBeCool.gateway.base.Class.apply(r,[l]),!s.preloaded)return r.init();r.globals.customCreate=function(){t(),a(),f(),c()},r.create()}var r=this,l=i.extend({videoSlider:".b-video-item__slider",videoRefresh:".video-refresh",videoRefreshAnim:".video-refresh:before"},e),s={videoSlider:null,videoRefresh:null,videoRefreshAnim:null,preloaded:!1},t=function(){s.videoSlider=i(l.videoSlider),s.videoRefresh=i(l.videoRefresh),s.videoRefreshAnim=i(l.videoRefreshAnim)},a=function(){s.videoSlider.slick({nextArrow:s.videoRefresh,fade:!0,infinite:!0})},f=function(){},c=function(){r.globals.customResurrect=function(){},r.globals.customDestroy=function(){}};r.addMethod("init",function(){r.bind(o,r.globals.classType+"_Init",function(e,i,o){s.preloaded=!0,n()})}),n()});