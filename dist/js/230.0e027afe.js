"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[230],{3230:function(e,l,a){a.r(l),a.d(l,{default:function(){return h}});var s=a(3396),u=a(4870),n=a(6949),r=a(9488),t=a(678),o=a(5410),i=a.n(o),d=a(9733);const m={class:"loginPanel"},p=(0,s._)("img",{src:n,class:"logo"},null,-1),c=(0,s._)("br",null,null,-1),g={style:{margin:"16px"}},f=(0,s.Uk)(" Register "),v=(0,s._)("br",null,null,-1),w=(0,s.Uk)(" Login ");var b={__name:"RegisterView",setup(e){const{proxy:l}=(0,s.FN)(),a=(0,t.tv)(),n=(0,u.iH)(""),o=(0,u.iH)(""),b=e=>{l.request.post("/api/register",i().stringify(e)).then((e=>{1e4===e.data.status?(d.F.success("Register success!"),a.replace("/login")):d.F.fail(e.data.msg)}))};return(e,l)=>{const a=(0,s.up)("van-field"),t=(0,s.up)("van-cell-group"),i=(0,s.up)("van-button"),d=(0,s.up)("van-form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",m,[p,c,(0,s.Wm)(d,{onSubmit:b},{default:(0,s.w5)((()=>[(0,s.Wm)(t,{inset:""},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),name:"userName",label:"UserName",placeholder:"UserName",rules:[{required:!0,message:"Please fill in the username"}]},null,8,["modelValue"]),(0,s.Wm)(a,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),type:"password",name:"password",label:"Password",placeholder:"Password",rules:[{required:!0,message:"Please fill in the password"}]},null,8,["modelValue"])])),_:1}),(0,s._)("div",g,[(0,s.Wm)(i,{round:"",block:"",type:"primary","native-type":"submit"},{default:(0,s.w5)((()=>[f])),_:1}),v,(0,s.Wm)(i,{round:"",block:"",to:"/login"},{default:(0,s.w5)((()=>[w])),_:1})])])),_:1})]),(0,s.Wm)((0,u.SU)(r.Z))],64)}}};const _=b;var h=_},6949:function(e,l,a){e.exports=a.p+"img/logo.537e4f67.png"}}]);