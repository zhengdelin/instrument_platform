"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[545],{1067:(e,t,r)=>{r.d(t,{R:()=>n});var n={account:"帳號",password:"密碼",check_password:"再次確認密碼",email:"電子郵件",name:"名稱",phone:"電話",address:"地址",title:"標題",content:"內容",category:"類別",category_id:"類別",category_name:"類別",category_group:"類別群組",category_group_id:"類別群組",category_group_name:"類別群組",eng_name:"英文名稱",url:"網址",introduction:"簡介",description:"描述",price:"價格",image:"圖片",updated_at:"上次更新",status:"狀態",logo:"Logo",business_hours:"營業時間",isHeadquarter:"為總公司"}},2545:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(9200),o={class:"col-span-6 md:col-span-3"},a={key:0,class:"col-span-6 md:col-span-3"},u={key:1,class:"col-span-6 md:col-span-3"};var l=r(2792),i=r(7965),p=r(746),s=r(3325),c=r(1067),d=r(8637),g=r(6252),m=r(2262),y=r(2119),f=r(5431);const _={components:{CreateButtonVue:l.Z,AdminInputFormVue:i.Z,InputTextVue:p.Z,InputSelectVue:s.Z,TitleItem:f.Z},setup:function(){var e=(0,d.oR)(),t=e.dispatch,r=e.state,n=(0,y.tv)(),o=(0,y.yj)(),a=(0,g.Fl)((function(){return o.params.type?o.params.type:"category"})),u=(0,g.Fl)((function(){return r.globalHandler.category_groups})),l=(0,m.iH)({name:"",eng_name:"",category_group_id:""});return{type:a,TITLE:c.R,category:l,category_groups:u,handleCreateCategory:function(){t("globalHandler/createCategory",{data:l.value,type:a.value}).then((function(){"error"!==r.status&&n.push({name:"admin-categories",params:{update_category:!0}})}))},dispatch:t}}};const v=(0,r(3744).Z)(_,[["render",function(e,t,r,l,i,p){var s=(0,n.up)("title-item"),c=(0,n.up)("create-button-vue"),d=(0,n.up)("input-text-vue"),g=(0,n.up)("input-select-vue"),m=(0,n.up)("admin-input-form-vue");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Uk)((0,n.zw)(l.category)+" ",1),(0,n.Wm)(s,{return_to_route_name:"admin-categories",title:"category"===l.type?"產品 - 新增類別":"產品 - 新增類別群組"},null,8,["title"]),(0,n.Wm)(s,{title:"category"===l.type?"類別":"類別群組"},{button:(0,n.w5)((function(){return[(0,n.Wm)(c,{onClick:l.handleCreateCategory},null,8,["onClick"])]})),_:1},8,["title"]),(0,n.Wm)(m,{class:"mb-2"},{form_items:(0,n.w5)((function(){return[(0,n._)("div",o,[(0,n.Wm)(d,{title:l.TITLE.name,focus:!0,required:!0,modelValue:l.category.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.category.name=e}),onChange:t[1]||(t[1]=function(e){return l.dispatch("globalHandler/checkName",l.category.name)})},null,8,["title","modelValue"])]),"category"===l.type?((0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(d,{title:l.TITLE.eng_name,required:!0,modelValue:l.category.eng_name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.category.eng_name=e}),onChange:t[3]||(t[3]=function(e){return l.dispatch("globalHandler/checkEngName",l.category.eng_name)})},null,8,["title","modelValue"])])):(0,n.kq)("",!0),"category"===l.type?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(g,{required:!0,title:l.TITLE.category_group,options:l.category_groups,modelValue:l.category.category_group_id,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.category.category_group_id=e})},null,8,["title","options","modelValue"])])):(0,n.kq)("",!0)]})),_:1})],64)}]])},7965:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9200),o={class:"bg-white rounded-md border-gray-500"},a={class:"p-4"},u={class:"grid grid-cols-6 gap-4 items-center"};const l={components:{},props:{input_cols:{type:Array,default:function(){return[{col_span:"col-span-2",component:"input-text-vue",trim:!0,title:String,model:String,func_call:String,func_datas:Array}]}},data_source:{type:Object||Array,default:function(){return{}||[]}}}};const i=(0,r(3744).Z)(l,[["render",function(e,t,r,l,i,p){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",a,[(0,n._)("div",u,[(0,n.WI)(e.$slots,"form_items")])])])}]])},2792:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(9200),o={class:"bg-blue-500 hover:bg-blue-400 hover:cursor-pointer text-white"};const a={props:{target_text:{type:String,default:""}},setup:function(e){return{target_text:e.target_text}}};const u=(0,r(3744).Z)(a,[["render",function(e,t,r,a,u,l){var i=(0,n.up)("svg-render-vue");return(0,n.wg)(),(0,n.iD)("button",o,[(0,n.Wm)(i,{type:"plus",class:"mr-1"}),(0,n._)("span",null,"新增"+(0,n.zw)(a.target_text),1)])}]])},3325:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(9200),o={class:"font-bold"},a={key:0,class:"text-red-500"},u={class:"w-full py-1"},l=["value"],i=(0,n._)("option",{value:"",disabled:""},"請選擇",-1),p=["value"],s=["label"],c=["value"];var d=r(8637);const g={inheritAttrs:!1,props:{title:{type:String,default:""},required:{type:Boolean,default:!1},option_group:{type:Object||Array,default:function(){return[]||0}},options:{type:Array,default:function(){return[]}},valChangeFun:{type:String,default:""}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var r=t.attrs,n=t.emit,o=(0,d.oR)().dispatch,a=e.title,u=e.required,l=e.options,i=e.option_group,p=e.valChangeFun;return{title:a,required:u,option_group:i,options:l,emitInput:function(e){p&&o(p,e.target.value),n("update:modelValue",e.target.value)},attrs:r}}};const m=(0,r(3744).Z)(g,[["render",function(e,t,r,d,g,m){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,[d.required?((0,n.wg)(),(0,n.iD)("span",a,"* ")):(0,n.kq)("",!0),(0,n._)("span",null,(0,n.zw)(d.title),1)]),(0,n._)("div",u,[(0,n._)("select",{class:"font-bold w-full h-[40px] border-gray-500 border-opacity-50 border-[1px] border-solid rounded-[10px] pl-2",value:d.attrs.modelValue,onChange:t[0]||(t[0]=function(){return d.emitInput&&d.emitInput.apply(d,arguments)})},[i,d.options.length?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(d.options,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id,value:e.id},(0,n.zw)(e.name),9,p)})),128)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(d.option_group,(function(e,t){return(0,n.wg)(),(0,n.iD)("optgroup",{key:t,label:t},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id,value:e.id},(0,n.zw)(e.name),9,c)})),128))],8,s)})),128))],40,l)])],64)}]])},746:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(9200),o={class:"font-bold"},a={key:0,class:"text-red-500"},u={class:"font-MicrosoftJhengHei"},l={class:"w-full py-1"},i=["value"];var p=r(6252),s=r(2262);const c={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1},trim:{type:Boolean,default:!0},isNumber:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var r=t.attrs,n=t.emit,o=(0,s.iH)(),a=e.title,u=e.trim,l=e.focus,i=e.isNumber,c=(0,p.Fl)((function(){return e.required}));return(0,p.bv)((function(){l&&o.value.focus()})),{title:a,attrs:r,required:c,field:o,emitInput:function(e){var t=e.target.value;u&&(t=t.trim()),i&&(t=t.replace(/[^0-9]/gi,"")),n("update:modelValue",t)}}}};const d=(0,r(3744).Z)(c,[["render",function(e,t,r,p,s,c){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",o,[p.required?((0,n.wg)(),(0,n.iD)("span",a,"* ")):(0,n.kq)("",!0),(0,n._)("span",u,(0,n.zw)(p.title),1)]),(0,n._)("div",l,[(0,n._)("input",(0,n.dG)({class:"w-full h-[40px] border-gray-500 border-opacity-50 border-[1px] rounded-md pl-4",type:"text"},p.attrs,{ref:"field",value:p.attrs.modelValue,onInput:t[0]||(t[0]=function(){return p.emitInput&&p.emitInput.apply(p,arguments)})}),null,16,i)])])}]])},5431:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(9200),o={class:"flex items-center justify-between"},a={class:"grid grid-flow-col gap-4"};var u=r(6252),l=r(8637);const i={props:{title:{type:String,default:"管理"},return_to_route_name:{type:String,default:""},py:{type:String,default:""}},setup:function(e){var t=(0,l.oR)().commit,r=e.return_to_route_name,n=e.py;return{title:(0,u.Fl)((function(){return e.title})),return_to_route_name:r,py:n,commit:t}}};const p=(0,r(3744).Z)(i,[["render",function(e,t,r,u,l,i){var p=(0,n.up)("svg-render-vue"),s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[u.return_to_route_name?((0,n.wg)(),(0,n.j4)(s,{key:0,to:{name:u.return_to_route_name},class:"text-blue-500",onClick:t[0]||(t[0]=function(e){return u.commit("clearStatus")})},{default:(0,n.w5)((function(){return[(0,n.Wm)(p,{type:"return",size:"lg"})]})),_:1},8,["to"])):(0,n.kq)("",!0),(0,n.WI)(e.$slots,"return_router"),(0,n._)("div",{class:(0,n.C_)(["flex-auto px-2 py-4 font-bold text-2xl",u.py])},(0,n.zw)(u.title),3),(0,n._)("div",a,[(0,n.WI)(e.$slots,"button")])])}]])}}]);