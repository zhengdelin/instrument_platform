"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[827],{1067:(e,t,r)=>{r.d(t,{R:()=>n});var n={account:"帳號",password:"密碼",check_password:"再次確認密碼",email:"電子郵件",name:"名稱",phone:"電話",address:"地址",title:"標題",content:"內容",category:"類別",category_id:"類別",category_name:"類別",category_group:"類別群組",category_group_id:"類別群組",category_group_name:"類別群組",eng_name:"英文名稱",url:"網址",introduction:"簡介",description:"描述",price:"價格",image:"圖片",updated_at:"上次更新",status:"狀態",logo:"Logo",business_hours:"營業時間",isHeadquarter:"為總公司"}},3973:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".input_single_checkbox input{border:1px solid hsla(0,0%,50%,.5);border-radius:10px;padding-right:1rem}",""]);const a=o},4827:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(9200),o={class:"sm:w-[80%] lg:w-[60%] m-auto py-1"},a={class:"w-full flex-jc hover:cursor-pointer mt-1"};var u=r(7757),i=r.n(u),l=r(6695),s=r(7989),c=r(2262),d=r(2119),p=r(8637),f=r(1067),m=r(1014);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t,r,n,o,a,u){try{var i=e[a](u),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,o)}const v={components:{AlertBox:s.Z,InputText:l.Z,InputSingleCheckbox:m.Z},setup:function(){var e=(0,p.oR)(),t=e.dispatch,r=e.state,n=(0,d.tv)(),o=(0,c.qj)({account:"",password:"",email:"",remember:!0}),a=(0,c.iH)(""),u=function(){var e,a=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("userHandler/register",o);case 2:r.is_login&&n.push("/"===sessionStorage.getItem("redirect")?{name:"home"}:sessionStorage.getItem("redirect"));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){w(a,n,o,u,i,"next",e)}function i(e){w(a,n,o,u,i,"throw",e)}u(void 0)}))});return function(){return a.apply(this,arguments)}}();return g(g({},(0,c.BK)(o)),{},{check_password:a,handleRegister:u,dispatch:t,TITLE:f.R})}};const b=(0,r(3744).Z)(v,[["render",function(e,t,r,u,i,l){var s=(0,n.up)("input-text"),c=(0,n.up)("input-single-checkbox");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(s,{title:u.TITLE.account,focus:!0,required:!0,modelValue:e.account,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.account=t}),modelModifiers:{trim:!0},placeholder:"account",onChange:t[1]||(t[1]=function(t){return u.dispatch("userHandler/checkAccount",e.account)})},null,8,["title","modelValue"]),(0,n.Wm)(s,{title:u.TITLE.password,required:!0,type:"password",modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),modelModifiers:{trim:!0},placeholder:"password",onChange:t[3]||(t[3]=function(t){return u.dispatch("userHandler/checkPassword",{password:e.password,check_password:u.check_password})})},null,8,["title","modelValue"]),(0,n.Wm)(s,{type:"password",title:"再次輸入密碼",placeholder:"check password",modelValue:u.check_password,"onUpdate:modelValue":t[4]||(t[4]=function(e){return u.check_password=e}),modelModifiers:{trim:!0},onChange:t[5]||(t[5]=function(t){return u.dispatch("userHandler/checkAgainPassword",{password:e.password,check_password:u.check_password})})},null,8,["modelValue"]),(0,n.Wm)(s,{title:"電子郵件",placeholder:"email",modelValue:e.email,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.email=t}),modelModifiers:{trim:!0},onChange:t[7]||(t[7]=function(t){return u.dispatch("userHandler/checkEmail",e.email)})},null,8,["modelValue"]),(0,n.Wm)(c,{title:"保持登入",modelValue:e.remember,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.remember=t})},null,8,["modelValue"]),(0,n._)("div",a,[(0,n._)("input",{type:"button",value:"註冊",onClick:t[9]||(t[9]=function(e){return u.handleRegister()})})])])}]])},1014:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(9200),o={class:"input_single_checkbox w-full"},a={class:"py-1"},u=["checked"],i={for:"field",class:"font-bold px-1"};var l=r(6252),s=r(2262);const c={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var r=t.attrs,n=t.emit,o=(0,s.iH)(null);return(0,l.bv)((function(){e.focus&&o.value.focus()})),{props:e,attrs:r,field:o,emitInput:function(e){n("update:modelValue",e.target.checked)}}}};var d=r(3379),p=r.n(d),f=r(3973),m={insert:"head",singleton:!1};p()(f.Z,m);f.Z.locals;const h=(0,r(3744).Z)(c,[["render",function(e,t,r,l,s,c){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",a,[(0,n._)("input",(0,n.dG)({name:"field",type:"checkbox"},l.attrs,{ref:"field",checked:l.attrs.modelValue,onInput:t[0]||(t[0]=function(){return l.emitInput&&l.emitInput.apply(l,arguments)})}),null,16,u),(0,n._)("label",i,(0,n.zw)(l.props.title),1)])])}]])},6695:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(9200),o={class:"font-bold"},a={key:0,class:"text-red-500"},u={class:"font-MicrosoftJhengHei"},i={class:"w-full py-1"},l=["type","value"];var s=r(6252),c=r(2262);const d={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1},trim:{type:Boolean,default:!0},isNumber:{type:Boolean,default:!1},required:{type:Boolean,default:!1},type:{type:String,default:"text"}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var r=t.attrs,n=t.emit,o=(0,c.iH)(),a=e.title,u=e.trim,i=e.focus,l=e.isNumber,d=e.type,p=(0,s.Fl)((function(){return e.required}));return(0,s.bv)((function(){i&&o.value.focus()})),{title:a,attrs:r,required:p,field:o,emitInput:function(e){var t=e.target.value;u&&(t=t.trim()),l&&(t=t.replace(/[^0-9]/gi,"")),n("update:modelValue",t)},type:d}}};const p=(0,r(3744).Z)(d,[["render",function(e,t,r,s,c,d){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",o,[s.required?((0,n.wg)(),(0,n.iD)("span",a,"* ")):(0,n.kq)("",!0),(0,n._)("span",u,(0,n.zw)(s.title),1)]),(0,n._)("div",i,[(0,n._)("input",(0,n.dG)({class:"w-full h-[40px] border-gray-500 border-opacity-50 border-[1px] rounded-md pl-4",type:s.type||"text"},s.attrs,{ref:"field",value:s.attrs.modelValue,onInput:t[0]||(t[0]=function(){return s.emitInput&&s.emitInput.apply(s,arguments)})}),null,16,l)])])}]])}}]);