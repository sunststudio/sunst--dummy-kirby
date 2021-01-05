(function () {function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function C(t,e,r){return e&&m(t.prototype,e),r&&m(t,r),t}function D(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function F(t){var e=I();return function(){var r,n=p(t);if(e){var i=p(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return G(this,r)}}function G(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?H(t):e}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e,t,r){return t&&q(e.prototype,t),r&&q(e,r),e}var L=function(){function e(){J(this,e)}return K(e,[{key:"convertHslToRgb",value:function(){var e,t,r=this.h/360,n=this.s/100,a=this.l/100,i=a,o=a,u=a;0!==n&&(t=2*a-(e=a<.5?a*(1+n):a+n-a*n),i=this.convertHueToRgb(t,e,r+1/3),o=this.convertHueToRgb(t,e,r),u=this.convertHueToRgb(t,e,r-1/3)),this.r=255*i,this.g=255*o,this.b=255*u}},{key:"convertHueToRgb",value:function(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}},{key:"convertRgbToHsl",value:function(){var e=this.r/255,t=this.g/255,r=this.b/255,n=Math.max(e,t,r),a=Math.min(e,t,r),i=n+a,o=n-a,u=0,c=0,s=i/2;if(a!=n)switch(c=s<.5?o/i:o/(c=2-n-a),n){case e:u=t-r,u/=o;break;case t:u=r-e,u/=o,u+=2;break;case r:u=e-t,u/=o,u+=4;}(u*=60)<0&&(u+=360),this.h=u,this.s=100*c,this.l=100*s}},{key:"convertValueToDecimal",value:function(e){var t=parseFloat(e);return t<1&&-1===e.toString().indexOf("%")&&(t*=100),t}},{key:"convertDecimalToHex",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=Math.round(e).toString(16);return t&&(r=r.padStart(2,"0")),r}},{key:"convertHexToDecimal",value:function(e){return parseInt(e,16)}},{key:"convertToFloat",value:function(e){return Math.round(e)/100}},{key:"rebaseDecimalForHex",value:function(e){return Math.round(e/100*255)}},{key:"rebaseHexForDecimal",value:function(e){var t=this.convertHexToDecimal(e);return Math.round(t/255*100)}},{key:"round",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t>0?e.toPrecision(t):Math.round(e)}}]),e}();function M(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function v(t,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,a,e){return a&&v(t.prototype,a),e&&v(t,e),t}var w=function(){function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#fff",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["#fff","#000"];M(this,t),this.color=new b(a),this.combinations=[],this.highest=0,e.forEach(function(t){var a=new b(t),e=this.setContrastRatio(a),r=this.setRating(e);this.combinations.push({color:a,contrast:e,accessibility:r})},this)}return N(t,[{key:"setContrastRatio",value:function(t){var a=this.getLuminance(this.color),e=this.getLuminance(t);return a>e?(a+.05)/(e+.05):(e+.05)/(a+.05)}},{key:"setRating",value:function(t){var a=[];return t>=3&&a.push("aaLarge"),t>=4.5&&(a.push("aaaLarge"),a.push("aa")),t>=7&&a.push("aaa"),a.length>this.highest&&(this.highest=a.length),a}},{key:"getLuminance",value:function(t){var a=t.toValues(),e=a.r/255,r=a.g/255,i=a.b/255;return .2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))}},{key:"toReport",value:function(){return{color:this.color,combinations:this.combinations}}},{key:"toMostReadable",value:function(){return this.combinations.filter(function(t){return t.accessibility.length===this.highest},this)}}]),t}();var b=function(t){D(r,L);var e=F(r);function r(t){var n;if(B(this,r),(n=e.call(this)).original=null,n.space=null,n.r=null,n.g=null,n.b=null,n.h=null,n.s=null,n.l=null,n.a=100,t instanceof r){var i=t.toValues();n.setValues(i)}else n.isHex(t)?(n.original=t,n.space="hex",n.parseHex(t)):n.isRgb(t)?(n.original=t,n.space="rgb",n.parseRgb(t)):n.isHsl(t)?(n.original=t,n.space="hsl",n.parseHsl(t)):n.setDefault();return n}return C(r,[{key:"isHex",value:function(t){return!!t&&0===t.indexOf("#")}},{key:"isRgb",value:function(t){return!!t&&0===t.indexOf("rgb")}},{key:"isHsl",value:function(t){return!!t&&0===t.indexOf("hsl")}},{key:"hasAlpha",value:function(){return 100!==this.a}},{key:"parseHex",value:function(t){var e;(t=t.replace(/[#; ]/g,"")).length<6?(e=t.match(/.{1}/g)).forEach(function(t,r){e[r]=t.repeat(2)}):e=t.match(/.{2}/g),this.setHex(e)}},{key:"parseRgb",value:function(t){var e=t.match(/\((.*)\)/)[1].split(/[\s,\/]+/);this.setRgb(e)}},{key:"parseHsl",value:function(t){var e=t.match(/\((.*)\)/)[1].split(/[\s,\/]+/);this.setHsl(e)}},{key:"setDefault",value:function(){this.setValues({original:null,space:"hex",r:255,g:255,b:255,h:0,s:0,l:100,a:100})}},{key:"setValues",value:function(t){this.original=t.original,this.space=t.space,this.r=t.r,this.g=t.g,this.b=t.b,this.h=t.h,this.s=t.s,this.l=t.l,this.a=t.a}},{key:"setSpace",value:function(t){this.space=t}},{key:"setRed",value:function(t){this.r=this.convertValueToDecimal(t)}},{key:"setGreen",value:function(t){this.g=this.convertValueToDecimal(t)}},{key:"setBlue",value:function(t){this.b=this.convertValueToDecimal(t)}},{key:"setHue",value:function(t){this.h=this.convertValueToDecimal(t)}},{key:"setSaturation",value:function(t){this.s=this.convertValueToDecimal(t)}},{key:"setLightness",value:function(t){this.l=this.convertValueToDecimal(t)}},{key:"setAlpha",value:function(t){this.a=this.convertValueToDecimal(t)}},{key:"setHex",value:function(t){t?(this.setRed(parseInt(t[0],16)),this.setGreen(parseInt(t[1],16)),this.setBlue(parseInt(t[2],16)),4===t.length&&this.setAlpha(this.rebaseHexForDecimal(t[3])),this.convertRgbToHsl()):this.setDefault()}},{key:"setRgb",value:function(t){t?(this.setRed(t[0]),this.setGreen(t[1]),this.setBlue(t[2]),4===t.length&&this.setAlpha(t[3]),this.convertRgbToHsl()):this.setDefault()}},{key:"setHsl",value:function(t){t?(this.setHue(t[0]),this.setSaturation(t[1]),this.setLightness(t[2]),4===t.length&&this.setAlpha(t[3]),this.convertHslToRgb()):this.setDefault()}},{key:"getAlpha",value:function(){return this.a}},{key:"toReadabilityReport",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["#fff","#000"];return new w(this,t).toReport()}},{key:"toMostReadable",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["#fff","#000"];return new w(this,t).toMostReadable()}},{key:"toOriginal",value:function(){return this.original}},{key:"toSpace",value:function(){return this.space}},{key:"toValues",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{original:this.original,space:this.space,r:this.round(this.r),g:this.round(this.g),b:this.round(this.b),h:this.round(this.h),s:this.round(this.s),l:this.round(this.l),a:this.round(this.a)}}},{key:"toHex",value:function(){return{r:this.convertDecimalToHex(this.r),g:this.convertDecimalToHex(this.g),b:this.convertDecimalToHex(this.b),a:this.convertDecimalToHex(this.rebaseDecimalForHex(this.a))}}},{key:"toRgb",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{r:this.round(this.r),g:this.round(this.g),b:this.round(this.b),a:this.convertToFloat(this.a)}}},{key:"toHsl",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{h:this.round(this.h),s:this.round(this.s),l:this.round(this.l),a:this.convertToFloat(this.a)}}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t||(t=this.toSpace()),0===t.indexOf("hsl")){var e=this.toHsl();return this.a<100?"hsla(".concat(e.h,", ").concat(e.s,"%, ").concat(e.l,"%, ").concat(e.a,")"):"hsla(".concat(e.h,", ").concat(e.s,"%, ").concat(e.l,"%)")}if(0===t.indexOf("rgb")){var r=this.toRgb();return this.a<100?"rgba(".concat(r.r,", ").concat(r.g,", ").concat(r.b,", ").concat(r.a,")"):"rgb(".concat(r.r,", ").concat(r.g,", ").concat(r.b,")")}var n=this.toHex();return this.a<100?"#".concat(n.r).concat(n.g).concat(n.b).concat(n.a):"#".concat(n.r).concat(n.g).concat(n.b)}}]),r}();var d={inheritAttrs:!1,props:{name:[String,Number],label:String,value:Array,contrast:Object,readability:Boolean,alpha:Boolean,invalid:Boolean,disabled:Boolean,required:Boolean,help:String},computed:{color:function(){return new b(this.value)},space:function(){return this.color.toSpace()}},methods:{onInput:function(o){this.store(o)},onChangeSpace:function(o){this.color.setSpace(o),this.store(this.color.toString())},onChangeOpacity:function(o){this.store(o)},store:function(o){this.$emit("input",o)}}};if(typeof d==="function"){d=d.options}Object.assign(d,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-field",_vm._b({class:{"k-colors-field":true,"shows-contrast":_vm.contrast!==false}},"k-field",_vm.$props,false),[_c("k-input",_vm._b({ref:"input",attrs:{"id":_vm._uid,"theme":"field","type":"colors"},on:{"input":_vm.onInput}},"k-input",_vm.$props,false),[_c("k-colors-picker",{attrs:{"color":_vm.color},on:{"input":_vm.onInput}}),_vm._v(" "),_c("k-colors-input",{attrs:{"color":_vm.color,"space":_vm.space},on:{"input":_vm.onInput}}),_vm._v(" "),_vm.alpha!==false?_c("k-colors-opacity",{attrs:{"color":_vm.color},on:{"change-opacity":_vm.onChangeOpacity}}):_vm._e(),_vm._v(" "),_c("k-colors-spaces",{attrs:{"space":_vm.space},on:{"change-space":_vm.onChangeSpace}})],1),_vm._v(" "),_vm.contrast!==false?_c("k-colors-contrast",{attrs:{"color":_vm.color,"contrast":_vm.contrast}}):_vm._e()],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());function x(r,t){return R(r)||Q(r,t)||P(r,t)||O()}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function P(r,t){if(r){if("string"==typeof r)return y(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(r,t):void 0}}function y(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=r[e];return a}function Q(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],a=!0,o=!1,n=void 0;try{for(var i,l=r[Symbol.iterator]();!(a=(i=l.next()).done)&&(e.push(i.value),!t||e.length!==t);a=!0);}catch($){o=!0,n=$}finally{try{a||null==l.return||l.return()}finally{if(o)throw n}}return e}}function R(r){if(Array.isArray(r))return r}var f={props:{color:Object,contrast:[Boolean,Array]},computed:{readable:function(){var r=this.contrast;return!0===r&&(r=["#fff","#000"]),this.color.toMostReadable(r)},rating:function(){if(this.readable.length){var r=x(this.readable,1)[0];return r.accessibility[r.accessibility.length-1]}},value:function(){if(this.readable.length)return x(this.readable,1)[0].color.toString()}}};if(typeof f==="function"){f=f.options}Object.assign(f,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-input",_vm._b({ref:"input",staticClass:"k-colors-contrast",attrs:{"id":_vm._uid,"theme":"field"}},"k-input",_vm.$props,false),[_c("div",{staticClass:"k-colors-color",style:{background:_vm.value},attrs:{"data-rating":_vm.rating}})])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var z={methods:{onInput:function(t){this.store(t.target.value)},onUp:function(t){var e=t.target,a=e.getAttribute("max");if(a){var r=parseInt(e.value,10),n=1;t.metaKey&&(n=10),(r=Math.min(r+n,a))<0&&(r=0),this.store(r,e)}},onDown:function(t){var e=t.target,a=e.getAttribute("min");if(a){var r=parseInt(e.value,10),n=1;t.metaKey&&(n=10),(r=Math.max(a,r-n))<0&&(r=0),this.store(r,e)}}}};var g={mixins:[z],props:{color:{validator:function(t){Color}},space:String},computed:{hex:function(){if(this.color.toOriginal())return this.color.toString("hex").substr(1,6)},rgb:function(){return this.color.toRgb()},hsl:function(){return this.color.toHsl()}},methods:{store:function(t,r){var o=this.$refs,e={};if(t||0===t){switch("hex"!==this.space&&(Object.keys(o).forEach(function(t){o[t]&&(e[t]=o[t].value)}),r&&(e[r.dataset.unit]=t)),this.space){case"hex":this.color.parseHex(t);break;case"rgb":this.color.setRgb([e.r,e.g,e.b]);break;case"hsl":this.color.setHsl([e.h,e.s,e.l]);}this.$emit("input",this.color.toString())}else this.$emit("input","")}}};if(typeof g==="function"){g=g.options}Object.assign(g,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-colors-units"},[_vm.space==="rgb"?[_c("label",{staticClass:"k-colors-label"},[_c("span",[_vm._v("R")]),_vm._v(" "),_c("input",{ref:"r",staticClass:"k-colors-input",attrs:{"data-unit":"r","type":"text","min":"0","max":"255"},domProps:{"value":_vm.rgb.r},on:{"input":_vm.onInput,"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.onUp($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.onDown($event)}]}})]),_vm._v(" "),_c("label",{staticClass:"k-colors-label"},[_c("span",[_vm._v("G")]),_vm._v(" "),_c("input",{ref:"g",staticClass:"k-colors-input",attrs:{"data-unit":"g","type":"text","min":"0","max":"255"},domProps:{"value":_vm.rgb.g},on:{"input":_vm.onInput,"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.onUp($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.onDown($event)}]}})]),_vm._v(" "),_c("label",{staticClass:"k-colors-label"},[_c("span",[_vm._v("B")]),_vm._v(" "),_c("input",{ref:"b",staticClass:"k-colors-input",attrs:{"data-unit":"b","type":"text","min":"0","max":"255"},domProps:{"value":_vm.rgb.b},on:{"input":_vm.onInput,"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.onUp($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.onDown($event)}]}})])]:_vm.space==="hsl"?[_c("label",{staticClass:"k-colors-label"},[_c("span",[_vm._v("H")]),_vm._v(" "),_c("input",{ref:"h",staticClass:"k-colors-input",attrs:{"data-unit":"h","type":"text","min":"0","max":"360"},domProps:{"value":_vm.hsl.h},on:{"input":_vm.onInput,"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.onUp($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.onDown($event)}]}})]),_vm._v(" "),_c("label",{staticClass:"k-colors-label"},[_c("span",[_vm._v("S")]),_vm._v(" "),_c("input",{ref:"s",staticClass:"k-colors-input",attrs:{"data-unit":"s","type":"text","min":"0","max":"100"},domProps:{"value":_vm.hsl.s},on:{"input":_vm.onInput,"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.onUp($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.onDown($event)}]}})]),_vm._v(" "),_c("label",{staticClass:"k-colors-label"},[_c("span",[_vm._v("L")]),_vm._v(" "),_c("input",{ref:"l",staticClass:"k-colors-input",attrs:{"data-unit":"l","type":"text","min":"0","max":"100"},domProps:{"value":_vm.hsl.l},on:{"input":_vm.onInput,"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.onUp($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.onDown($event)}]}})])]:[_c("label",{staticClass:"k-colors-label"},[_c("span",[_vm._v("#")]),_vm._v(" "),_c("input",{ref:"hex",staticClass:"is-hex k-colors-input",attrs:{"type":"text"},domProps:{"value":_vm.hex},on:{"change":_vm.onInput}})])]],2)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var h={mixins:[z],props:{color:Object},computed:{opacity:function(){return this.color.getAlpha()}},methods:{store:function(t){var e=parseInt(t,10),i=this.color.toSpace();this.color.setAlpha(e),this.$emit("change-opacity",this.color.toString(i))}}};if(typeof h==="function"){h=h.options}Object.assign(h,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("label",{staticClass:"k-colors-opacity"},[_c("input",{staticClass:"is-alpha k-colors-input",attrs:{"type":"text","min":"0","max":"100"},domProps:{"value":_vm.opacity},on:{"input":_vm.onInput,"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}$event.preventDefault();return _vm.onUp($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}$event.preventDefault();return _vm.onDown($event)}]}}),_vm._v(" "),_c("span",[_vm._v("%")])])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var j={props:{color:Object},data:{init:!1},computed:{value:function(){if(this.color.toOriginal())return this.color.toString("hex")},hex:function(){if(this.color.toOriginal())return this.color.toString("hex").substring(0,7)}},methods:{onInput:function(t){if(this.init){var o=new b(t.target.value),i=this.color.toSpace();o.setAlpha(this.color.getAlpha()),this.$emit("input",o.toString(i))}else this.init=!0}}};if(typeof j==="function"){j=j.options}Object.assign(j,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"k-colors-preview"},[_c("label",{staticClass:"k-colors-color",style:{background:_vm.value}},[_c("input",{staticClass:"k-colors-picker",attrs:{"type":"color"},domProps:{"value":_vm.hex},on:{"input":_vm.onInput}})])])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());var k={props:{space:String},methods:{showHex:function(){this.$emit("change-space","hex")},showRgb:function(){this.$emit("change-space","rgb")},showHsl:function(){this.$emit("change-space","hsl")}}};if(typeof k==="function"){k=k.options}Object.assign(k,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-dropdown",[_c("k-button",{staticClass:"k-colors-space-button",attrs:{"icon":"angle-down","tabindex":"-1"},on:{"click":function($event){return _vm.$refs.dropdown.toggle()}}}),_vm._v(" "),_c("k-dropdown-content",{ref:"dropdown",attrs:{"align":"right"}},[_c("k-dropdown-item",{class:{"is-current":_vm.space==="hex"},on:{"click":_vm.showHex}},[_vm._v("HEX")]),_vm._v(" "),_c("k-dropdown-item",{class:{"is-current":_vm.space==="rgb"},on:{"click":_vm.showRgb}},[_vm._v("RGB")]),_vm._v(" "),_c("k-dropdown-item",{class:{"is-current":_vm.space==="hsl"},on:{"click":_vm.showHsl}},[_vm._v("HSL")])],1)],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("hananils/colors",{fields:{colors:d},components:{"k-colors-contrast":f,"k-colors-input":g,"k-colors-opacity":h,"k-colors-picker":j,"k-colors-spaces":k}});})();