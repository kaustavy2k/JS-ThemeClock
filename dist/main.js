!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);n(2);n(3);n(4);!function(){let e=document.querySelector(".content"),t=["date","days","time","color"];for(let n=0;n<t.length;n++){let o=document.createElement("DIV");o.id=t[n],e.appendChild(o)}}(),function(){let e=new Date,t=`${e.getDate()} ${{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}[e.getMonth()]} ${e.getFullYear()}`,n=document.createTextNode(t);document.getElementById("date").appendChild(n)}(),function(){let e=(new Date).getDay(),t={1:"Sun",2:"Mon",3:"Tue",4:"Wed",5:"Thurs",6:"Fri",7:"Sat"};7==e?e=1:e+=1;let n,o=t[e],r=document.querySelector("#days");for(let e=1;e<=7;e++){t[e]==o?(n=document.createElement("DIV"),n.classList.add("active")):n=document.createElement("DIV"),n.classList.add("diff-days");let c=document.createTextNode(t[e]);n.appendChild(c),r.appendChild(n)}}(),function(){let e=document.getElementById("time");!function t(){let n,o=new Date,r=o.getHours();12===r?n="pm":r>12?(r-=12,n="pm"):(r=r,n="am"),r=r<10?"0"+r:r;let c=o.getMinutes();c=c<10?"0"+c:c;let l=o.getSeconds();l=l<10?"0"+l:l;let u=`${r} : ${c} : ${l}`;e.innerHTML=`${u}  <div id="am-pm">${n}</div>`,setTimeout(t,1e3)}()}(),function(){let e=document.getElementById("color");for(let t=1;t<=8;t++){let n=document.createElement("SPAN");n.classList.add("color"+t),1==t&&(n.className+=" activecolor"),e.appendChild(n)}let t=document.querySelector(".active"),n=document.querySelectorAll("span"),o=document.querySelector("html"),r=["rgb(255, 209, 124)","red","royalblue","rgb(73, 170, 170)","yellow","brown","rgb(253, 168, 168)","rgb(136, 161, 44)"];n.forEach((function(e,n){e.addEventListener("click",(function(e){let c=document.getElementsByClassName("activecolor");c[0].className=c[0].className.replace(" activecolor",""),e.target.className+=" activecolor",o.style.color=r[n],t.style.color=r[n]}))}))}()}]);