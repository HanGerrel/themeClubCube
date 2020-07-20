!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(X){"use strict";var b={};b.fileapi=void 0!==X("<input type='file'/>").get(0).files,b.formdata=void 0!==window.FormData;var C=!!X.fn.prop;function r(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),X(e.target).ajaxSubmit(t))}function a(e){var t=e.target,r=X(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=this;"image"==(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof X.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function _(){var e;X.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}X.fn.attr2=function(){if(!C)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},X.fn.ajaxSubmit=function(E){if(!this.length)return _("ajaxSubmit: skipping submit process - no element selected"),this;var M,e,t,F=this;"function"==typeof E?E={success:E}:void 0===E&&(E={}),M=E.type||this.attr2("method"),t=(t=(t="string"==typeof(e=E.url||this.attr2("action"))?X.trim(e):"")||window.location.href||"")&&(t.match(/^([^#]+)/)||[])[1],E=X.extend(!0,{url:t,success:X.ajaxSettings.success,type:M||X.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},E);var r={};if(this.trigger("form-pre-serialize",[this,E,r]),r.veto)return _("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(E.beforeSerialize&&!1===E.beforeSerialize(this,E))return _("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var a=E.traditional;void 0===a&&(a=X.ajaxSettings.traditional);var n,O=[],o=this.formToArray(E.semantic,O);if(E.data&&(E.extraData=E.data,n=X.param(E.data,a)),E.beforeSubmit&&!1===E.beforeSubmit(o,this,E))return _("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[o,this,E,r]),r.veto)return _("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var i=X.param(o,a);n&&(i=i?i+"&"+n:n),"GET"==E.type.toUpperCase()?(E.url+=(0<=E.url.indexOf("?")?"&":"?")+i,E.data=null):E.data=i;var s,u,c,l=[];E.resetForm&&l.push(function(){F.resetForm()}),E.clearForm&&l.push(function(){F.clearForm(E.includeHidden)}),!E.dataType&&E.target?(s=E.success||function(){},l.push(function(e){var t=E.replaceTarget?"replaceWith":"html";X(E.target)[t](e).each(s,arguments)})):E.success&&l.push(E.success),E.success=function(e,t,r){for(var a=E.context||this,n=0,o=l.length;n<o;n++)l[n].apply(a,[e,t,r||F,F])},E.error&&(u=E.error,E.error=function(e,t,r){var a=E.context||this;u.apply(a,[e,t,r,F])}),E.complete&&(c=E.complete,E.complete=function(e,t){var r=E.context||this;c.apply(r,[e,t,F])});var f=0<X("input[type=file]:enabled",this).filter(function(){return""!==X(this).val()}).length,m="multipart/form-data",p=F.attr("enctype")==m||F.attr("encoding")==m,d=b.fileapi&&b.formdata;_("fileAPI :"+d);var h,v=(f||p)&&!d;!1!==E.iframe&&(E.iframe||v)?E.closeKeepAlive?X.get(E.closeKeepAlive,function(){h=x(o)}):h=x(o):h=(f||p)&&d?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(E.extraData){var a=function(e){var t,r,a=X.param(e,E.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(E.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}E.data=null;var n=X.extend(!0,{},X.ajaxSettings,E,{contentType:!1,processData:!1,cache:!1,type:M||"POST"});E.uploadProgress&&(n.xhr=function(){var e=X.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),E.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){E.formData?t.data=E.formData:t.data=r,o&&o.call(this,e,t)},X.ajax(n)}(o):X.ajax(E),F.removeData("jqxhr").data("jqxhr",h);for(var g=0;g<O.length;g++)O[g]=null;return this.trigger("form-submit-notify",[this,E]),this;function x(e){var t,r,l,f,o,m,p,d,a,n,h,v,i=F[0],g=X.Deferred();if(g.abort=function(e){d.abort(e)},e)for(r=0;r<O.length;r++)t=X(O[r]),C?t.prop("disabled",!1):t.removeAttr("disabled");if((l=X.extend(!0,{},X.ajaxSettings,E)).context=l.context||l,o="jqFormIO"+(new Date).getTime(),l.iframeTarget?(n=(m=X(l.iframeTarget)).attr2("name"))?o=n:m.attr2("name",o):(m=X('<iframe name="'+o+'" src="'+l.iframeSrc+'" />')).css({position:"absolute",top:"-1000px",left:"-1000px"}),p=m[0],d={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";_("aborting upload... "+t),this.aborted=1;try{p.contentWindow.document.execCommand&&p.contentWindow.document.execCommand("Stop")}catch(e){}m.attr("src",l.iframeSrc),d.error=t,l.error&&l.error.call(l.context,d,t,e),f&&X.event.trigger("ajaxError",[d,l,t]),l.complete&&l.complete.call(l.context,d,t)}},(f=l.global)&&0==X.active++&&X.event.trigger("ajaxStart"),f&&X.event.trigger("ajaxSend",[d,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,d,l))return l.global&&X.active--,g.reject(),g;if(d.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"==a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,b=2;function y(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){_("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){_("cannot get iframe.contentDocument: "+e),r=t.document}return r}var s=X("meta[name=csrf-token]").attr("content"),u=X("meta[name=csrf-param]").attr("content");function c(){var e=F.attr2("target"),t=F.attr2("action"),r=F.attr("enctype")||F.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),M&&!/post/i.test(M)||i.setAttribute("method","POST"),t!=l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||M&&!/post/i.test(M)||F.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,D(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(X.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(X('<input type="hidden" name="'+l.extraData[n].name+'">').val(l.extraData[n].value).appendTo(i)[0]):a.push(X('<input type="hidden" name="'+n+'">').val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||m.appendTo("body"),p.attachEvent?p.attachEvent("onload",D):p.addEventListener("load",D,!1),setTimeout(function e(){try{var t=y(p).readyState;_("state = "+t),t&&"uninitialized"==t.toLowerCase()&&setTimeout(e,50)}catch(e){_("Server abort: ",e," (",e.name,")"),D(b),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):F.removeAttr("target"),X(a).remove()}}u&&s&&(l.extraData=l.extraData||{},l.extraData[u]=s),l.forceSync?c():setTimeout(c,10);var T,j,w,S=50;function D(e){if(!d.aborted&&!w){if((j=y(p))||(_("cannot access response document"),e=b),e===x&&d)return d.abort("timeout"),void g.reject(d,"timeout");if(e==b&&d)return d.abort("server abort"),void g.reject(d,"error","server abort");if(j&&j.location.href!=l.iframeSrc||h){p.detachEvent?p.detachEvent("onload",D):p.removeEventListener("load",D,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"==l.dataType||j.XMLDocument||X.isXMLDoc(j);if(_("isXml="+a),!a&&window.opera&&(null===j.body||!j.body.innerHTML)&&--S)return _("requeing onLoad callback, DOM not available"),void setTimeout(D,250);var n=j.body?j.body:j.documentElement;d.responseText=n?n.innerHTML:null,d.responseXML=j.XMLDocument?j.XMLDocument:j,a&&(l.dataType="xml"),d.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(d.status=Number(n.getAttribute("status"))||d.status,d.statusText=n.getAttribute("statusText")||d.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=j.getElementsByTagName("textarea")[0])?(d.responseText=o.value,d.status=Number(o.getAttribute("status"))||d.status,d.statusText=o.getAttribute("statusText")||d.statusText):c&&(i=j.getElementsByTagName("pre")[0],s=j.getElementsByTagName("body")[0],i?d.responseText=i.textContent?i.textContent:i.innerText:s&&(d.responseText=s.textContent?s.textContent:s.innerText)):"xml"==u&&!d.responseXML&&d.responseText&&(d.responseXML=k(d.responseText));try{T=L(d,u,l)}catch(e){r="parsererror",d.error=t=e||r}}catch(e){_("error caught: ",e),r="error",d.error=t=e||r}d.aborted&&(_("upload aborted"),r=null),d.status&&(r=200<=d.status&&d.status<300||304===d.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,T,"success",d),g.resolve(d.responseText,"success",d),f&&X.event.trigger("ajaxSuccess",[d,l])):r&&(void 0===t&&(t=d.statusText),l.error&&l.error.call(l.context,d,r,t),g.reject(d,"error",t),f&&X.event.trigger("ajaxError",[d,l,t])),f&&X.event.trigger("ajaxComplete",[d,l]),f&&!--X.active&&X.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,d,r),w=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?m.attr("src",l.iframeSrc):m.remove(),d.responseXML=null},100)}}}var k=X.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},A=X.parseJSON||function(e){return window.eval("("+e+")")},L=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n="xml"===t||!t&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&X.error&&X.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&("json"===t||!t&&0<=a.indexOf("json")?o=A(o):("script"===t||!t&&0<=a.indexOf("javascript"))&&X.globalEval(o)),o};return g}},X.fn.ajaxForm=function(e){if((e=e||{}).delegation=e.delegation&&X.isFunction(X.fn.on),e.delegation||0!==this.length)return e.delegation?(X(document).off("submit.form-plugin",this.selector,r).off("click.form-plugin",this.selector,a).on("submit.form-plugin",this.selector,e,r).on("click.form-plugin",this.selector,e,a),this):this.ajaxFormUnbind().bind("submit.form-plugin",e,r).bind("click.form-plugin",e,a);var t={s:this.selector,c:this.context};return!X.isReady&&t.s?(_("DOM not ready, queuing ajaxForm"),X(function(){X(t.s,t.c).ajaxForm(e)})):_("terminating; zero elements found by selector"+(X.isReady?"":" (DOM not ready)")),this},X.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},X.fn.formToArray=function(e,t){var r=[];if(0===this.length)return r;var a,n,o,i,s,u,c,l,f,m,p=this[0],d=this.attr("id"),h=e?p.getElementsByTagName("*"):p.elements;if(h&&!/MSIE [678]/.test(navigator.userAgent)&&(h=X(h).get()),d&&(a=X(":input[form="+d+"]").get()).length&&(h=(h||[]).concat(a)),!h||!h.length)return r;for(n=0,u=h.length;n<u;n++)if((m=(s=h[n]).name)&&!s.disabled)if(e&&p.clk&&"image"==s.type)p.clk==s&&(r.push({name:m,value:X(s).val(),type:s.type}),r.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((i=X.fieldValue(s,!0))&&i.constructor==Array)for(t&&t.push(s),o=0,c=i.length;o<c;o++)r.push({name:m,value:i[o]});else if(b.fileapi&&"file"==s.type){t&&t.push(s);var v=s.files;if(v.length)for(o=0;o<v.length;o++)r.push({name:m,value:v[o],type:s.type});else r.push({name:m,value:"",type:s.type})}else null!=i&&(t&&t.push(s),r.push({name:m,value:i,type:s.type,required:s.required}));return e||!p.clk||(m=(f=(l=X(p.clk))[0]).name)&&!f.disabled&&"image"==f.type&&(r.push({name:m,value:l.val()}),r.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),r},X.fn.formSerialize=function(e){return X.param(this.formToArray(e))},X.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=X.fieldValue(this,n);if(t&&t.constructor==Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),X.param(o)},X.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=X.fieldValue(n,e);null==o||o.constructor==Array&&!o.length||(o.constructor==Array?X.merge(t,o):t.push(o))}return t},X.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"==a||"button"==a||("checkbox"==a||"radio"==a)&&!e.checked||("submit"==a||"image"==a)&&e.form&&e.form.clk!=e||"select"==n&&-1==e.selectedIndex))return null;if("select"!=n)return X(e).val();var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"==a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected){var m=(m=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return m;i.push(m)}}return i},X.fn.clearForm=function(e){return this.each(function(){X("input,select,textarea",this).clearFields(e)})},X.fn.clearFields=X.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"==t?this.value="":"checkbox"==e||"radio"==e?this.checked=!1:"select"==t?this.selectedIndex=-1:"file"==e?/MSIE/.test(navigator.userAgent)?X(this).replaceWith(X(this).clone(!0)):X(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&X(this).is(r))&&(this.value="")})},X.fn.resetForm=function(){return this.each(function(){"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset()})},X.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},X.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"==t||"radio"==t?this.checked=r:"option"==this.tagName.toLowerCase()&&(e=X(this).parent("select"),r&&e[0]&&"select-one"==e[0].type&&e.find("option").selected(!1),this.selected=r)})},X.fn.ajaxSubmit.debug=!1});