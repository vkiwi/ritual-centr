"use strict";var slideShow=function(t,e){var n,o,r=document.querySelector(t),i=r.querySelector(".slider__items"),s=r.querySelectorAll(".slider__item"),a=r.querySelectorAll(".slider__control"),l=0,c=0,d=[],u=0,m=s.length-1,f={isAutoplay:!1,directionAutoplay:"next",delayAutoplay:1e3,isPauseOnHover:!0};for(var v in e)v in f&&(f[v]=e[v]);for(var p=0,g=s.length;p<g;p++)d.push({item:s[p],position:p,transform:0});function h(t){var e,n=u;"next"===t?(++l>_.getItemPosition("max")&&(e=_.getItemIndex("min"),d[e].position=_.getItemPosition("max")+1,d[e].transform+=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),c-=100,m<(u+=1)&&(u=0)):(--l<_.getItemPosition("min")&&(e=_.getItemIndex("max"),d[e].position=_.getItemPosition("min")-1,d[e].transform-=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),c+=100,--u<0&&(u=m)),i.style.transform="translateX("+c+"%)",o[n].classList.remove("active"),o[u].classList.add("active")}function y(){f.isAutoplay&&(x(),n=setInterval(function(){h(f.directionAutoplay)},f.delayAutoplay))}var _={getItemIndex:function(t){for(var e=0,n=0,i=d.length;n<i;n++)(d[n].position<d[e].position&&"min"===t||d[n].position>d[e].position&&"max"===t)&&(e=n);return e},getItemPosition:function(t){return d[_.getItemIndex(t)].position}},x=function(){clearInterval(n)};return function(){var t=document.createElement("ol");t.classList.add("slider__indicators");for(var e=0,n=s.length;e<n;e++){var i=document.createElement("li");0===e&&i.classList.add("active"),i.setAttribute("data-slide-to",e),t.appendChild(i)}r.appendChild(t),o=r.querySelectorAll(".slider__indicators > li")}(),function(){var n=0;if("ontouchstart"in window||navigator.maxTouchPoints)r.addEventListener("touchstart",function(t){n=t.changedTouches[0].clientX,y()}),r.addEventListener("touchend",function(t){var e=t.changedTouches[0].clientX-n;50<e?h("prev"):e<-50&&h("next"),y()});else for(var t=0,e=a.length;t<e;t++)a[t].classList.add("slider__control_show");r.addEventListener("click",function(t){t.target.classList.contains("slider__control")?(t.preventDefault(),h(t.target.classList.contains("slider__control_next")?"next":"prev"),y()):t.target.getAttribute("data-slide-to")&&(t.preventDefault(),function(t){for(var e=0,n=u<t?"next":"prev";t!==u&&e<=m;)h(n),e++}(parseInt(t.target.getAttribute("data-slide-to"))),y())}),document.addEventListener("visibilitychange",function(){("hidden"===document.visibilityState?x:y)()},!1),f.isPauseOnHover&&f.isAutoplay&&(r.addEventListener("mouseenter",function(){x()}),r.addEventListener("mouseleave",function(){y()}))}(),y(),{next:function(){h("next")},left:function(){h("prev")},stop:function(){f.isAutoplay=!1,x()},cycle:function(){f.isAutoplay=!0,y()}}};slideShow(".slider",{isAutoplay:!1});