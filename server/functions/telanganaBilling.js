!function(t,n){for(var o in n)t[o]=n[o]}(exports,function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=37)}({37:function(t,n){t.exports=function(t){let n=0,o=[],e=[];return t>=0&&t<=50?(n=1.95*t+80,o.push({fromUnit:1,toUnit:t,units:t,rate:1.95,cost:1.95*t}),e.push({addCharges:"Fixed Charge",cost:80})):t>50&&t<=100?(n=97.5+3.1*(t-50)+140,o.push({fromUnit:1,toUnit:50,units:50,rate:1.95,cost:97.5}),o.push({fromUnit:51,toUnit:t,units:t-50,rate:3.1,cost:3.1*(t-50)}),e.push({addCharges:"Fixed Charge",cost:140})):t>100&&t<=200?(n=340+5.1*(t-100)+180,o.push({fromUnit:1,toUnit:100,units:100,rate:3.4,cost:340}),o.push({fromUnit:101,toUnit:t,units:t-100,rate:5.1,cost:5.1*(t-100)}),e.push({addCharges:"Fixed Charge",cost:180})):t>200&&t<=300?(n=850+7.7*(t-200)+200,o.push({fromUnit:1,toUnit:100,units:100,rate:3.4,cost:340}),o.push({fromUnit:101,toUnit:200,units:100,rate:5.1,cost:100*5.1}),o.push({fromUnit:201,toUnit:t,units:t-200,rate:7.7,cost:7.7*(t-200)}),e.push({addCharges:"Fixed Charge",cost:200})):t>300&&t<=400?(n=1620+9*(t-300)+240,o.push({fromUnit:1,toUnit:100,units:100,rate:3.4,cost:340}),o.push({fromUnit:101,toUnit:200,units:100,rate:5.1,cost:100*5.1}),o.push({fromUnit:201,toUnit:300,units:100,rate:7.7,cost:770}),o.push({fromUnit:301,toUnit:t,units:t-300,rate:9,cost:9*(t-300)}),e.push({addCharges:"Fixed Charge",cost:240})):t>400&&t<=800?(n=2520+9.5*(t-400)+280,o.push({fromUnit:1,toUnit:100,units:100,rate:3.4,cost:340}),o.push({fromUnit:101,toUnit:200,units:100,rate:5.1,cost:100*5.1}),o.push({fromUnit:201,toUnit:300,units:100,rate:7.7,cost:770}),o.push({fromUnit:301,toUnit:400,units:100,rate:9,cost:900}),o.push({fromUnit:401,toUnit:t,units:t-400,rate:9.5,cost:9.5*(t-400)}),e.push({addCharges:"Fixed Charge",cost:280})):t>800?(n=6320+10*(t-800)+320,o.push({fromUnit:1,toUnit:100,units:100,rate:3.4,cost:340}),o.push({fromUnit:101,toUnit:200,units:100,rate:5.1,cost:100*5.1}),o.push({fromUnit:201,toUnit:300,units:100,rate:7.7,cost:770}),o.push({fromUnit:301,toUnit:400,units:100,rate:9,cost:900}),o.push({fromUnit:401,toUnit:800,units:400,rate:9.5,cost:3800}),o.push({fromUnit:801,toUnit:t,units:t-800,rate:10,cost:10*(t-800)}),e.push({addCharges:"Fixed Charge",cost:320})):n=0,{bill:n,breakdown:o,customerCharge:e,sourceText:"* Rates from Telangana State Northern Power Distribution Company Limited, Telangana State Southern Power Distribution Company Limited",lastUpdateText:"Last Updated: June 2024"}}}}));