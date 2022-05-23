"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[308],{1308:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Z});var r=n(9200),o={class:"flex-1 p-2 md:p-5"},u={class:"w-full gap-4 flex flex-col group p-2"},c={class:"bg-white grid grid-cols-4 md:grid-cols-8 p-2 border-gray-300-sm"},a=(0,r._)("button",{class:"font-bold col-span-1 md:col-span-4"},"商品",-1),i=(0,r._)("button",{class:"font-bold col-span-1 md:col-span-2"},"數量",-1),l=(0,r._)("button",{class:"font-bold col-span-1"},"總價",-1),s={class:"bg-white divide-y divide-gray-300 border-gray-300-sm"},d={class:"bg-white p-2 border-gray-300-sm flex justify-end items-center gap-4 sticky bottom-0"},p={class:"text-lg"},f={class:"text-orange-500 font-bold"},v=(0,r._)("div",{class:"p-2"},[(0,r._)("button",{class:"bg-red-300 px-20 py-3"},"去買單")],-1);var m=n(7757),g=n.n(m),b=n(2262),h=n(8637),_={class:"grid grid-cols-4 md:grid-cols-8 justify-items-center items-center p-2"},y={class:"col-span-1 hidden md:block"},w=["src","alt"],P={class:"col-span-1 text-orange-500"},C={class:"col-span-1 md:col-span-2"},x={class:"col-span-1 text-orange-500 font-bold"};function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(t){return void n(t)}a.done?e(i):Promise.resolve(i).then(r,o)}function D(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function c(t){I(u,r,o,c,a,"next",t)}function a(t){I(u,r,o,c,a,"throw",t)}c(void 0)}))}}const H={components:{CounterObject:n(6432).Z},props:{cart_product_info:{type:Object,default:function(){}},getCartProductInfos:{type:Function,default:function(){}}},setup:function(t){var e=(0,h.oR)(),n=e.getters,r=e.dispatch,o=(0,b.BK)(t),u=o.cart_product_info,c=o.getCartProductInfos,a=function(){var t=D(g().mark((function t(e){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.value.amount=e,t.next=3,r("productHandler/addProductToCart",{amount:e,product_id:u.value.product_id,order_id:u.value.order_id});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=D(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("productHandler/deleteCartProduct",{product_id:u.value.product_id,order_id:u.value.order_id}).then((function(t){t&&c.value()}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return O(O({},(0,b.BK)(u.value)),{},{formattedPrice:function(t){return n["productHandler/getFormattedPrice"](t)},amountChange:a,handleDeleteCartProduct:i})}};var T=n(3744);const W=(0,T.Z)(H,[["render",function(t,e,n,o,u,c){var a=(0,r.up)("router-link"),i=(0,r.up)("counter-object");return(0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",y,[(0,r._)("img",{src:t.image,alt:t.name,width:"100",height:"100"},null,8,w)]),(0,r.Wm)(a,{to:{path:"/products/".concat(t.c_eng_name,"/").concat(t.product_id)},class:"col-span-1 md:col-span-3 hover:text-blue-800 font-bold"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,r.zw)(t.name),1)]})),_:1},8,["to"]),(0,r._)("div",P," NT$"+(0,r.zw)(o.formattedPrice(t.price)),1),(0,r._)("div",C,[(0,r.Wm)(i,{init_value:t.amount,onValueChange:o.amountChange,onDecreaseLowerThan0:o.handleDeleteCartProduct},null,8,["init_value","onValueChange","onDecreaseLowerThan0"])]),(0,r._)("div",x," NT$"+(0,r.zw)(o.formattedPrice(t.price*t.amount)),1)])}]]);var F=n(6252);function N(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(t){return void n(t)}a.done?e(i):Promise.resolve(i).then(r,o)}function z(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function c(t){N(u,r,o,c,a,"next",t)}function a(t){N(u,r,o,c,a,"throw",t)}c(void 0)}))}}const S={components:{ShoppingCartRow:W},setup:function(){return z(g().mark((function t(){var e,n,r,o,u,c,a,i;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,h.oR)(),n=e.dispatch,r=e.getters,o=(0,b.iH)(),u=function(){var t=z(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("productHandler/getCartByMember");case 2:o.value=t.sent,console.log(o.value);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=5,u();case 5:return c=function(t){if("price"===t)o.value.sort((function(t,e){return e.price-t.price}))},a=(0,F.Fl)((function(){return o.value.reduce((function(t,e){return t+=e.price*e.amount}),0)})),i=function(t){return r["productHandler/getFormattedPrice"](t)},t.abrupt("return",{cart_product_infos:o,getCartProductInfos:u,totalPrice:a,formattedPrice:i,sortCartProductInfos:c});case 9:case"end":return t.stop()}}),t)})))()}},Z=(0,T.Z)(S,[["render",function(t,e,n,m,g,b){var h=(0,r.up)("shopping-cart-row"),_=(0,r.up)("loading-vue");return(0,r.wg)(),(0,r.j4)(r.n4,null,{fallback:(0,r.w5)((function(){return[(0,r.Wm)(_)]})),default:(0,r.w5)((function(){return[(0,r._)("div",o,[(0,r._)("div",u,[(0,r._)("div",c,[a,(0,r._)("button",{class:"font-bold col-span-1",onClick:e[0]||(e[0]=function(t){return m.sortCartProductInfos("price")})},"單價"),i,l]),(0,r._)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.cart_product_infos,(function(t){return(0,r.wg)(),(0,r.j4)(h,{key:t.product_id,cart_product_info:t,getCartProductInfos:m.getCartProductInfos},null,8,["cart_product_info","getCartProductInfos"])})),128))]),(0,r._)("div",d,[(0,r._)("div",p,[(0,r.Uk)(" 總金額( "+(0,r.zw)(m.cart_product_infos.length)+"個產品 )： ",1),(0,r._)("span",f,"NT$"+(0,r.zw)(m.formattedPrice(m.totalPrice)),1)]),v])])])]})),_:1})}]])},6432:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(9200),o={class:"flex items-center"};var u=n(2262),c=n(6252);const a={props:{init_value:{type:Number,default:1}},emits:{valueChange:{type:Number,default:0},decreaseLowerThan0:{type:Number}},setup:function(t,e){var n=e.emit,r=(0,u.iH)();r.value=t.init_value;var o=(0,c.Fl)((function(){return r.value.toString().length})),a=function(){return n("valueChange",r.value)},i=(0,c.Fl)((function(){return(o.value<3?3:o.value)+"rem"}));return{amount:r,increment:function(){r.value++,a()},decrement:function(){1===r.value?n("decreaseLowerThan0"):(r.value--,a())},getInputWidth:i,amountInput:function(){var t=document.querySelector("input[id=amount]");t.value=t.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"),t.value||(t.value=1)},emitAmount:a}}};const i=(0,n(3744).Z)(a,[["render",function(t,e,n,u,c,a){var i=(0,r.up)("svg-render-vue");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("button",{onClick:e[0]||(e[0]=function(){return u.decrement&&u.decrement.apply(u,arguments)}),class:"border border-gray-200 px-2 py-1 hover:bg-gray-200"},[(0,r.Wm)(i,{type:"minus"})]),(0,r.wy)((0,r._)("input",{type:"text",id:"amount","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.amount=t}),class:"px-1 py-1 text-center",style:(0,r.j5)({width:u.getInputWidth}),onInput:e[2]||(e[2]=function(){return u.amountInput&&u.amountInput.apply(u,arguments)}),onChange:e[3]||(e[3]=function(){return u.emitAmount&&u.emitAmount.apply(u,arguments)})},null,36),[[r.nr,u.amount]]),(0,r._)("button",{onClick:e[4]||(e[4]=function(){return u.increment&&u.increment.apply(u,arguments)}),class:"border border-gray-200 px-2 py-1 hover:bg-gray-200"},[(0,r.Wm)(i,{type:"plus"})])])}]])}}]);