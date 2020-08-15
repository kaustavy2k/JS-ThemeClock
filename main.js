!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);function l(){let e=document.getElementById("time"),t=["clock","options"];for(let n=0;n<t.length;n++){let l=document.createElement("DIV");l.id=t[n],e.appendChild(l)}let n=document.getElementById("clock");!function e(){let t,l=new Date,o=l.getHours();12===o?t="pm":o>12?(o-=12,t="pm"):(o=o,t="am"),o=o<10?"0"+o:o,0==o&&(o=12);let c=l.getMinutes();c=c<10?"0"+c:c;let r=l.getSeconds();r=r<10?"0"+r:r;let d=`${o} : ${c} : ${r}`;n.innerHTML=`${d}  <div id="am-pm">${t}</div>`,setTimeout(e,1e3)}();let l=document.getElementById("options"),o=["curr-clock","stopwatch"],c=["CLOCK","STOPWATCH"];for(let e=0;e<2;e++){let t=document.createElement("BUTTON");t.classList.add(o[e]),0==e&&t.classList.add("activeoption"),t.textContent=c[e],l.appendChild(t)}}n(2);let o=0;function c(){let e=document.getElementById("color");for(let t=0;t<=7;t++){let n=document.createElement("SPAN");n.classList.add("colors"),n.classList.add("color"+t),t==o&&(n.className+=" activecolor"),e.appendChild(n)}let t=document.querySelector(".active"),n=document.querySelectorAll(".colors"),l=document.querySelector("html"),c=["rgb(255, 209, 124)","red","royalblue","rgb(73, 170, 170)","yellow","brown","rgb(253, 168, 168)","rgb(136, 161, 44)"];n.forEach((function(e,n){e.addEventListener("click",(function(e){let r=document.getElementsByClassName("activecolor");r[0].className=r[0].className.replace(" activecolor",""),e.target.className+=" activecolor",o=n,l.style.color=c[n],t.style.color=c[n]}))}))}n(3);function r(){let e=new Date,t=`${e.getDate()} ${{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"}[e.getMonth()]} ${e.getFullYear()}`,n=document.createTextNode(t);document.getElementById("date").appendChild(n)}n(4);function i(){let e=(new Date).getDay(),t={1:"Sun",2:"Mon",3:"Tue",4:"Wed",5:"Thurs",6:"Fri",7:"Sat"};7==e?e=1:e+=1;let n,l=t[e],c=document.querySelector("#days");for(let e=1;e<=7;e++){t[e]==l?(n=document.createElement("DIV"),n.classList.add("active")):n=document.createElement("DIV"),n.classList.add("diff-days");let r=document.createTextNode(t[e]);if(n.appendChild(r),c.appendChild(n),t[e]==l){let e=["rgb(255, 209, 124)","red","royalblue","rgb(73, 170, 170)","yellow","brown","rgb(253, 168, 168)","rgb(136, 161, 44)"];document.querySelector(".active").style.color=e[o]}}}n(5);let a,s,m,u,p=0,f=0,y=0,C=0,g=0,h=0,E=0,v=1,I=0,b=0,S=[],T=0,L=0,_="START",w="LAP";function B(){clearInterval(s),s=setInterval((function(){let e=(E<10?"0"+E:E)+":"+(h<10?"0"+h:h)+":"+(g<10?"0"+g:g);u.innerHTML=`<span id="laptime">LAP ${v} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${e}</span>`,g++,100==g&&(g=0,h++),60==h&&(h=0,E++)}),10)}function x(){1==P?(_=_,w=w,L=1,m=document.getElementById("clock_sw"),m.textContent=(C<10?"0"+C:C)+":"+(y<10?"0"+y:y)+":"+(f<10?"0"+f:f)):(_="STOP",w="LAP",L=1,p++,function(){m=document.getElementById("clock_sw");let e=document.getElementById("lap_record");function t(){let e=(C<10?"0"+C:C)+":"+(y<10?"0"+y:y)+":"+(f<10?"0"+f:f);m.textContent=e,0==T&&(u.innerHTML=`<span id="laptime">LAP 1 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${e}</span>`),f++,100==f&&(f=0,y++),60==y&&(y=0,C++)}I++,b=0,1==I&&(u=document.createElement("DIV"),u.id="laps",e.appendChild(u),S.unshift(u)),p>1?(clearInterval(a),a=setInterval(t,10)):a=setInterval(t,10)}(),B())}let P=0;function A(){let e=document.getElementById("time_sw"),t=["clock_sw","options_sw","timer_option","lap_record"];for(let n=0;n<t.length;n++){let l=document.createElement("DIV");l.id=t[n],e.appendChild(l)}let n=0,l=document.getElementById("clock_sw");if(0==p){l.textContent="00:00:00";for(let e=0;e<S.length;e++)d.appendChild(S[e])}else{P=1,x();let e=document.getElementById("lap_record");for(let t=0;t<S.length;t++)e.appendChild(S[t]);n="LAP"==w?0:1}let o=document.getElementById("options_sw"),c=["curr-clock_sw","stopwatch_sw"],r=["CLOCK","STOPWATCH"];for(let e=0;e<2;e++){let t=document.createElement("BUTTON");t.classList.add(c[e]),1==e&&t.classList.add("activeoption_sw"),t.textContent=r[e],o.appendChild(t)}let i=document.getElementById("timer_option"),A=["start","lap"],N=[_,w];for(let e=0;e<2;e++){let t=document.createElement("BUTTON");t.id=A[e],t.textContent=N[e],i.appendChild(t)}let O=document.getElementById("start"),D=document.getElementById("lap");O.addEventListener("click",()=>{"START"==O.textContent?(P=0,x(),O.textContent=_,D.textContent=w,n=0):"STOP"==O.textContent&&(P=0,_="START",w="RESET",clearInterval(a),clearInterval(s),b=1,O.textContent=_,D.textContent=w,n=1)}),D.addEventListener("click",()=>{1===n?(!function(){w="LAP",T=0,p=0;let e=document.getElementById("lap_record");for(S=[],p=0,m.textContent="00:00:00",clearInterval(a),clearInterval(s),f=0,y=0,C=0,I=0,b=0,v=1,g=0,h=0,E=0,L=0;e.firstChild;)e.removeChild(e.firstChild)}(),D.textContent=w):function(){if(1==L&&1!=b){let e;v++,T=1,g=0,h=0,E=0,v<=2&&(e=(C<10?"0"+C:C)+":"+(y<10?"0"+y:y)+":"+(f<10?"0"+f:f),u.innerHTML=`<span id="laptime">LAP 1 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${e}</span>`);let t=document.getElementById("lap_record");u=document.createElement("DIV"),u.id="laps",u.innerHTML=`<span id="laptime">  LAP ${v} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;00:00:00</span>`,t.insertBefore(u,t.childNodes[0]),S.unshift(u),B()}}()})}function N(){let e=document.querySelector("body"),t=document.createElement("DIV");t.className="content",e.appendChild(t);let n=document.querySelector(".content"),l=["date","days","time","color"];for(let e=0;e<l.length;e++){let t=document.createElement("DIV");t.id=l[e],n.appendChild(t)}}function O(){!function(){let e=document.querySelector(".content_sw");for(;e.firstChild;)e.removeChild(e.firstChild);e.parentNode.removeChild(e)}(),N(),r(),i(),l(),c(),document.querySelector(".stopwatch").addEventListener("click",()=>{D()})}function D(){!function(){let e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.firstChild);e.parentNode.removeChild(e)}(),function(){let e=document.querySelector("body"),t=document.createElement("DIV");t.className="content_sw",e.appendChild(t);let n=document.querySelector(".content_sw"),l=document.createElement("DIV");l.id="time_sw",n.appendChild(l)}(),A(),document.querySelector(".curr-clock_sw").addEventListener("click",()=>{O()})}N(),r(),i(),l(),c(),document.querySelector(".stopwatch").addEventListener("click",()=>{D()})}]);