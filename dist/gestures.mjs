var eventstart,eventend,eventmove,eventcancel;window.navigator.pointerEnabled?(eventstart="pointerdown",eventend="pointerup",eventmove="pointermove",eventcancel="pointercancel"):window.navigator.msPointerEnabled?(eventstart="MSPointerDown",eventend="MSPointerUp",eventmove="MSPointerMove",eventcancel="MSPointerCancel"):"ontouchstart"in window?(eventstart="touchstart",eventend="touchend",eventmove="touchmove",eventcancel="touchcancel"):(eventstart="mousedown",eventend="mouseup",eventmove="mousemove",eventcancel="mouseout");function trigger(a,b,c,d){if(!b)return void console.error("No event was provided. You do need to provide one.");if("string"==typeof a&&(a=document.querySelector(a)),document.createEvent){var e=document.createEvent("Events");e.initEvent(b,!0,!1),e.data=c,e.originalEvent=d,a.dispatchEvent(e)}}var gestures=function(){var g=Math.abs;function a(a){return"tagName"in a?a:a.parentNode}function b(a,b,c,d){return g(a-b)>=g(c-d)?0<a-b?"left":"right":0<c-d?"up":"down"}function c(a){if(n=null,k.last)try{k&&k.el&&(trigger(k.el,"longtap",null,a),k={})}catch(a){}}function d(){n&&clearTimeout(n),n=null}function f(){h&&clearTimeout(h),j&&clearTimeout(j),i&&clearTimeout(i),n&&clearTimeout(n),h=j=i=n=null,k={}}var h,i,j,k={},l=150,m=20;/android/gim.test(navigator.userAgent)&&(l=200);var n;(function(){var o,p,q=document.body;q.addEventListener(eventstart,function(b){if(o=Date.now(),p=o-(k.last||o),"mousedown"===eventstart)k.el=a(b.target),"ripple"===b.target.nodeName&&(k.el=b.target.parentNode),h&&clearTimeout(h),k.x1=b.pageX,k.y1=b.pageY;else if(1===b.touches.length){if(!!b.target.disabled)return;k.el=a(b.touches[0].target),h&&clearTimeout(h),k.x1=b.touches[0].pageX,k.y1=b.touches[0].pageY}0<p&&450>=p&&(k.isDoubleTap=!0),k.last=o,n=setTimeout(c,750,b)}),q.addEventListener(eventmove,function(a){if(d(),"mousemove"===eventmove)k.x2=a.pageX,k.y2=a.pageY;else if(1===a.touches.length)k.x2=a.touches[0].pageX,k.y2=a.touches[0].pageY,k.move=!0;else if(2===a.touches.length);}),q.addEventListener(eventend,function(a){d();!k.el||(k.x2&&g(k.x1-k.x2)>m||k.y2&&g(k.y1-k.y2)>m?i=setTimeout(function(){if(k&&k.el){var c=b(k.x1,k.x2,k.y1,k.y2);trigger(k.el,"swipe",c,a),trigger(k.el,"swipe"+c,null,a),k={}}},0):"last"in k&&(j=setTimeout(function(){k&&k.isDoubleTap?k&&k.el&&(trigger(k.el,"dbltap",null,a),a.preventDefault(),k={}):h=setTimeout(function(){h=null,k&&k.el&&!k.move?(trigger(k.el,"tap",null,a),k={}):f()},l)},0)))}),q.addEventListener("touchcancel",f)})()};function disableTextSelection(a,b){if(a){if(b&&"string"==typeof a){var c=Array.prototype.slice.call(document.querySelectorAll(a));c.map(function(a){a.classList.add("disable-user-select")})}else"string"==typeof a&&(a=document.querySelector(a),a.classList.add("disable-user-select"));var d=document.head.querySelector(".disable-user-select");d||(d=document.createElement("style"),d.className="disable-user-select",d.innerHTML=".disable-user-select, .disable-user-select * { user-select: none; -webkit-user-select: none; -ms-user-select: none; }",document.head.appendChild(d))}}function enableTextSelection(a,b){if(b&&"string"==typeof a){var c=Array.prototype.slice.call(document.querySelectorAll(a));c.map(function(a){a.classList.remove("disable-user-select")})}else{if("string"==typeof a&&(a=document.querySelector(a)),!a)return;a.classList.remove("disable-user-select")}}export{eventstart,eventend,eventmove,eventcancel,trigger,gestures,disableTextSelection,enableTextSelection};
//# sourceMappingURL=gestures.mjs.map
