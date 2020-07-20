var SharrrePlatform=SharrrePlatform||function(){var n={};return{register:function(t,e){n[t]=e},get:function(t,e){return n[t]?new n[t](e):(console.error("Sharrre - No platform found for "+t),!1)}}}();SharrrePlatform.register("delicious",function(t){return defaultSettings={url:"",urlCount:!1,layout:"1",count:!0,popup:{width:550,height:550}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,url:function(t){return"http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?"},trackingAction:{site:"delicious",action:"add"},load:function(t){var e,n,i;i="tall"==t.options.buttons.delicious.size?(e="width:50px;",n="height:35px;width:50px;font-size:15px;line-height:35px;","height:18px;line-height:18px;margin-top:3px;"):(e="width:93px;",n="float:right;padding:0 3px;height:20px;width:26px;line-height:20px;","float:left;height:20px;line-height:20px;");var o=t.shorterTotal(t.options.count.delicious);void 0===o&&(o=0),$(t.element).find(".buttons").append('<div class="button delicious"><div style="'+e+'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="'+n+'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">'+o+'</div><div style="'+i+'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="https://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>'),$(t.element).find(".delicious").on("click",function(){t.openPopup("delicious")})},tracking:function(){},popup:function(t){window.open("https://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent(""!==this.settings.url?this.settings.url:t.url)+"&title="+t.text,"delicious","toolbar=no,width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("digg",function(t){return defaultSettings={url:"",urlCount:!1,type:"DiggCompact",count:!0,popup:{width:650,height:360}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,url:function(t){return"http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?"},trackingAction:{site:"digg",action:"add"},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton '+e.type+'" rel="nofollow external" href="http://digg.com/submit?url='+encodeURIComponent(""!==e.url?e.url:t.options.url)+'"></a></div>');var n,i,o=0;"undefined"==typeof __DBW&&0==o&&(o=1,n=document.createElement("SCRIPT"),i=document.getElementsByTagName("SCRIPT")[0],n.type="text/javascript",n.async=!0,n.src="http://widgets.digg.com/buttons.js",i.parentNode.insertBefore(n,i))},tracking:function(){},popup:function(t){window.open("http://digg.com/tools/diggthis/submit?url="+encodeURIComponent(""!==t.buttons.digg.url?t.buttons.digg.url:t.url)+"&title="+t.text+"&related=true&style=true","","toolbar=0, status=0, width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("facebook",function(t){return defaultSettings={url:"",urlCount:!1,action:"like",layout:"button_count",count:!0,width:"",send:"false",faces:"false",colorscheme:"",font:"",lang:"en_US",share:"",appId:"",popup:{width:900,height:500}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,url:function(t){return"https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?"},trackingAction:{site:"facebook",action:"like"},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="'+(""!==e.url?e.url:t.options.url)+'" data-send="'+e.send+'" data-layout="'+e.layout+'" data-width="'+e.width+'" data-show-faces="'+e.faces+'" data-action="'+e.action+'" data-colorscheme="'+e.colorscheme+'" data-font="'+e.font+'" data-via="'+e.via+'" data-share="'+e.share+'"></div></div>');var n,i,o,s,r,a=0;"undefined"==typeof FB&&0==a?(a=1,n=document,i="script",o="facebook-jssdk",r=n.getElementsByTagName(i)[0],n.getElementById(o)||((s=n.createElement(i)).id=o,s.src="https://connect.facebook.net/"+e.lang+"/all.js#xfbml=1",e.appId&&(s.src+="&appId="+e.appId),r.parentNode.insertBefore(s,r))):FB.XFBML.parse()},tracking:function(){fb=window.setInterval(function(){"undefined"!=typeof FB&&(FB.Event.subscribe("edge.create",function(t){_gaq.push(["_trackSocial","facebook","like",t])}),FB.Event.subscribe("edge.remove",function(t){_gaq.push(["_trackSocial","facebook","unlike",t])}),FB.Event.subscribe("message.send",function(t){_gaq.push(["_trackSocial","facebook","send",t])}),clearInterval(fb))},1e3)},popup:function(t){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(""!==this.settings.url?this.settings.url:t.url)+"&t="+t.text,"","toolbar=0, status=0, width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("googlePlus",function(t){return defaultSettings={url:"",urlCount:!1,size:"medium",lang:"en-US",annotation:"",count:!0,popup:{width:900,height:500}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,url:function(t){return t+"?url={url}&type=googlePlus"},trackingAction:{site:"Google",action:"+1"},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="'+e.size+'" data-href="'+(""!==e.url?e.url:t.options.url)+'" data-annotation="'+e.annotation+'"></div></div>'),window.___gcfg={lang:e.lang};var n=0;"undefined"!=typeof gapi&&void 0!==gapi.plusone||0!=n?gapi.plusone.go():(n=1,function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://apis.google.com/js/plusone.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}())},tracking:function(){},popup:function(t){window.open("https://plus.google.com/share?hl="+this.settings.lang+"&url="+encodeURIComponent(""!==this.settings.url?this.settings.url:t.url),"","toolbar=0, status=0, width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("linkedin",function(t){return defaultSettings={url:"",urlCount:!1,counter:"",count:!0,popup:{width:550,height:550}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,url:function(t){return"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?"},trackingAction:{site:"linkedin",action:"share"},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div class="button linkedin"><script type="IN/share" data-url="'+(""!==e.url?e.url:t.options.url)+'" data-counter="'+e.counter+'"><\/script></div>');var n=0;void 0===window.IN&&0==n?(n=1,function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://platform.linkedin.com/in.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()):void 0!==window.IN&&window.IN.parse&&IN.parse(document)},tracking:function(){},popup:function(t){window.open("https://www.linkedin.com/cws/share?url="+encodeURIComponent(""!==this.settings.url?this.settings.url:t.url)+"&token=&isFramed=true","linkedin","toolbar=no, width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("pinterest",function(t){return defaultSettings={url:"",media:"",description:"",layout:"horizontal",popup:{width:700,height:300}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,url:function(t){return"https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"},trackingAction:{site:"pinterest",action:"pin"},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div class="button pinterest"><a href="https://www.pinterest.com/pin/create/button/?url='+(""!==e.url?e.url:t.options.url)+"&media="+e.media+"&description="+e.description+'" data-pin-do="buttonBookmark" count-layout="'+e.layout+'">Pin It</a></div>'),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://assets.pinterest.com/js/pinit.js",t.setAttribute("data-pin-build","parsePinBtns");var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),window.parsePinBtns&&window.parsePinBtns(),$(t.element).find(".pinterest").on("click",function(){t.openPopup("pinterest")})},tracking:function(){},popup:function(t){window.open("https://pinterest.com/pin/create/button/?url="+encodeURIComponent(""!==this.settings.url?this.settings.url:t.url)+"&media="+encodeURIComponent(this.settings.media)+"&description="+this.settings.description,"pinterest","toolbar=no,width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("reddit",function(t){return defaultSettings={url:"",urlCount:!1,count:!1,popup:{width:900,height:550}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,trackingAction:{site:"reddit",action:"share"},url:function(t){return""},load:function(t){var e=this.settings,n=this;$(t.element).find(".buttons").append('<div class="button reddit"><a href="https://www.reddit.com/submit?url='+(""!==e.url?e.url:t.options.url)+'"><img src="https://www.redditstatic.com/spreddit7.gif" alt="submit to reddit" border="0" /></a></div>'),$(t.element).find(".reddit").on("click",function(){n.popup(t.options)})},tracking:function(){},popup:function(t){window.open("https://www.reddit.com/submit?url="+encodeURIComponent(""!==this.settings.url?this.setting.url:t.url),"","toolbar=0, status=0,width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("stumbleupon",function(t){return defaultSettings={url:"",urlCount:!1,size:"medium",count:!0,popup:{width:550,height:550}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,url:function(t){return t+"?url={url}&type=stumbleupon"},trackingAction:{site:"stumbleupon",action:"add"},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="'+e.layout+'" location="'+(""!==e.url?e.url:t.options.url)+'"></su:badge></div>');var n=0;"undefined"==typeof STMBLPN&&0==n?(n=1,function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://platform.stumbleupon.com/1/widgets.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),s=window.setTimeout(function(){"undefined"!=typeof STMBLPN&&(STMBLPN.processWidgets(),clearInterval(s))},500)):(STMBLPN.wasProcessLoaded=!1,STMBLPN.processWidgets())},tracking:function(){},popup:function(t){window.open("https://www.stumbleupon.com/badge/?url="+encodeURIComponent(""!==this.settings.url?this.settings.url:t.url),"stumbleupon","toolbar=no, width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("tumblr",function(t){return defaultSettings={url:"",urlCount:!1,description:"",name:"",count:!1,title:"Share on Tumblr",color:"blue",notes:"none",popup:{width:900,height:500}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,url:function(t){return""},trackingAction:{site:"tumblr",action:"share"},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div title="'+e.title+'" class="button tumblr"><a class="tumblr-share-button" data-color="'+e.color+'" data-notes="'+e.notes+'" data-href="'+(""!==e.url?e.url:t.options.url)+'"  href="https://www.tumblr.com/share">'+e.title+"</a></div>");var n,i,o=0;"undefined"==typeof Tumblr&&0==o?(o=1,n=document.createElement("script"),i=document.getElementsByTagName("script")[0],n.src="https://secure.assets.tumblr.com/share-button.js",i.parentNode.insertBefore(n,i)):Tumblr.activate_share_on_tumblr_buttons()},tracking:function(){},popup:function(t){window.open("https://www.tumblr.com/share/link?canonicalUrl="+encodeURIComponent(""!==this.settings.url?this.settings.url:t.url)+"&name="+encodeURIComponent(this.settings.name)+"&description="+encodeURIComponent(this.settings.description),"","toolbar=0, status=0, width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("twitter",function(t){return defaultSettings={url:"",urlCount:!1,count:!1,hashtags:"",via:"",related:"",lang:"en",popup:{width:650,height:360}},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,trackingAction:{site:"twitter",action:"tweet"},url:function(t){return"https://opensharecount.com/count.json?url={url}"},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="'+(""!==e.url?e.url:t.options.url)+'" data-count="'+e.count+'" data-text="'+t.options.text+'" data-via="'+e.via+'" data-hashtags="'+e.hashtags+'" data-related="'+e.related+'" data-lang="'+e.lang+'">Tweet</a></div>');var n=0;"undefined"==typeof twttr&&0==n?(n=1,function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://platform.twitter.com/widgets.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()):$.ajax({url:"https://platform.twitter.com/widgets.js",dataType:"script",cache:!0})},tracking:function(){tw=window.setInterval(function(){"undefined"!=typeof twttr&&(twttr.events.bind("tweet",function(t){t&&_gaq.push(["_trackSocial","twitter","tweet"])}),clearInterval(tw))},1e3)},popup:function(t){window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(t.text)+"&url="+encodeURIComponent(""!==this.settings.url?this.setting.url:t.url)+(""!==this.settings.via?"&via="+this.settings.via:""),"","toolbar=0, status=0,width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),SharrrePlatform.register("twitterFollow",function(t){return defaultSettings={url:"",urlCount:!1,count:!0,display:"horizontal",lang:"en",popup:{width:650,height:360},user:"",size:"default",showCount:"false"},defaultSettings=$.extend(!0,{},defaultSettings,t),{settings:defaultSettings,trackingAction:{site:"twitter",action:"follow"},url:function(t){return""},load:function(t){var e=this.settings;$(t.element).find(".buttons").append('<div class="button twitterFollow"><a href="https://twitter.com/'+e.user+'" class="twitter-follow-button"" data-size="'+e.size+'" data-show-count="'+e.showCount+'" data-lang="'+e.lang+'">Follow @'+e.user+"</a></div>");var n=0;"undefined"==typeof twttr&&0==n?(n=1,function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://platform.twitter.com/widgets.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()):$.ajax({url:"https://platform.twitter.com/widgets.js",dataType:"script",cache:!0})},tracking:function(){},popup:function(t){window.open("https://twitter.com/intent/follow?screen_name="+encodeURIComponent(this.settings.user),"","toolbar=0, status=0, ,width="+this.settings.popup.width+", height="+this.settings.popup.height)}}}),function(r,t){function i(t,e){this.element=t,this.options=r.extend(!0,{},n,e),this.options.share=e.share,this._defaults=n,this._name=o,this.platforms={},this.init()}var o="sharrre",n={className:"sharrre",share:{},shareTotal:0,template:"",title:"",url:t.location.href,text:t.title,urlCurl:"sharrre.php",count:{},total:0,shorterTotal:!0,enableHover:!0,enableCounter:!0,enableTracking:!1,defaultUrl:"javascript:void(0);",popup:{width:900,height:500},hover:function(){},hide:function(){},click:function(){},render:function(){}};i.prototype.init=function(){var n=this;r.each(n.options.share,function(t,e){!0===e&&(n.platforms[t]=SharrrePlatform.get(t,n.options.buttons[t]))}),r(this.element).addClass(this.options.className),void 0!==r(this.element).data("title")&&(this.options.title=r(this.element).attr("data-title")),void 0!==r(this.element).data("url")&&(this.options.url=r(this.element).data("url")),void 0!==r(this.element).data("text")&&(this.options.text=r(this.element).data("text")),r.each(this.options.share,function(t,e){!0===e&&n.options.shareTotal++}),!0===n.options.enableCounter?r.each(this.options.share,function(t,e){if(!0===e)try{n.getSocialJson(t)}catch(t){}}):""!==n.options.template&&(n.renderer(),n.options.count[name]=0,n.rendererPerso()),""!==n.options.template?this.options.render(this,this.options):this.loadButtons(),r(this.element).on("mouseenter",function(){0===r(this).find(".buttons").length&&!0===n.options.enableHover&&n.loadButtons(),n.options.hover(n,n.options)}).on("mouseleave",function(){n.options.hide(n,n.options)}),r(this.element).click(function(t){return t.preventDefault(),n.options.click(n,n.options),!1})},i.prototype.loadButtons=function(){var n=this;r(this.element).append('<div class="buttons"></div>'),r.each(n.options.share,function(t,e){1==e&&(n.platforms[t].load(n),!0===n.options.enableTracking&&n.platforms[t].tracking())})},i.prototype.getSocialJson=function(n){var i=this,o=0,t=i.platforms[n].settings,e=i.platforms[n].url(this.options.urlCurl),s=encodeURIComponent(this.options.url);t.url.length&&(e=t.url),!0===t.urlCount&&""!==e&&(s=e),!1===t.count&&(e=""),url=e.replace("{url}",s),""!=url?r.getJSON(url,function(t){var e;void 0!==t.count?(e=(e=t.count+"").replace("Â ",""),o+=parseInt(e,10)):t.data&&0<t.data.length&&void 0!==t.data[0].total_count?o+=parseInt(t.data[0].total_count,10):void 0!==t[0]?o+=parseInt(t[0].total_posts,10):t[0],i.options.count[n]=o,i.options.total+=o,i.renderer(),i.rendererPerso()}).error(function(){i.options.count[n]=0,i.rendererPerso()}):(i.renderer(),i.options.count[n]=0,i.rendererPerso())},i.prototype.rendererPerso=function(){var t=0;for(e in this.options.count)t++;t===this.options.shareTotal&&this.options.render(this,this.options)},i.prototype.renderer=function(){var t=this.options.total,e=this.options.template;!0===this.options.shorterTotal&&(t=this.shorterTotal(t)),""!==e?(e=e.replace("{total}",t),r(this.element).html(e)):r(this.element).html('<div class="box"><a class="count" href="'+this.options.defaultUrl+'">'+t+"</a>"+(""!==this.options.title?'<a class="share" href="'+this.options.defaultUrl+'">'+this.options.title+"</a>":"")+"</div>")},i.prototype.shorterTotal=function(t){return 1e6<=t?t=(t/1e6).toFixed(2)+"M":1e3<=t&&(t=(t/1e3).toFixed(1)+"k"),t},i.prototype.openPopup=function(t){this.platforms[t].popup(this.options),!0===this.options.enableTracking&&(infos=this.platforms[t].trackingAction,_gaq.push(["_trackSocial",infos.site,infos.action]))},i.prototype.simulateClick=function(){var t=r(this.element).html();r(this.element).html(t.replace(this.options.total,this.options.total+1))},i.prototype.update=function(t,e){""!==t&&(this.options.url=t),""!==e&&(this.options.text=e)},r.fn[o]=function(e){var n=arguments;return void 0===e||"object"==typeof e?this.each(function(){r(this).data("plugin_"+o)||r(this).data("plugin_"+o,new i(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var t=r(this).data("plugin_"+o);t instanceof i&&"function"==typeof t[e]&&t[e].apply(t,Array.prototype.slice.call(n,1))}):void 0}}(window.jQuery||window.Zepto,(window,document));