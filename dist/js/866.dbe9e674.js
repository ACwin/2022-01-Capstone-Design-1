"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[866],{9866:function(e,l,a){a.r(l),a.d(l,{default:function(){return h}});var s=a(3396),n=a(4870),u=a(6949),t=a(9488),r=a(678),o=a(9733),i=a(5410),d=a.n(i);const m={class:"loginPanel"},p=(0,s._)("img",{src:u,class:"logo"},null,-1),c=(0,s._)("br",null,null,-1),g={style:{margin:"16px"}},f=(0,s.Uk)(" Login "),v=(0,s._)("br",null,null,-1),w=(0,s.Uk)(" Register ");var b={__name:"LoginView",setup(e){const{proxy:l}=(0,s.FN)(),a=(0,r.tv)(),u=(0,n.iH)(""),i=(0,n.iH)(""),b=e=>{l.request.post("/api/login",d().stringify(e)).then((e=>{1e4===e.data.status?(sessionStorage.setItem("user",JSON.stringify(e.data.data)),o.F.success("Login success!"),a.replace("/user")):o.F.fail(e.data.msg)}))};return(e,l)=>{const a=(0,s.up)("van-field"),r=(0,s.up)("van-cell-group"),o=(0,s.up)("van-button"),d=(0,s.up)("van-form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",m,[p,c,(0,s.Wm)(d,{onSubmit:b},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{inset:""},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value=e),name:"userName",label:"UserName",placeholder:"UserName",rules:[{required:!0,message:"Please fill in the username"}]},null,8,["modelValue"]),(0,s.Wm)(a,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=e=>i.value=e),type:"password",name:"password",label:"Password",placeholder:"Password",rules:[{required:!0,message:"Please fill in the password"}]},null,8,["modelValue"])])),_:1}),(0,s._)("div",g,[(0,s.Wm)(o,{round:"",block:"",type:"primary","native-type":"submit"},{default:(0,s.w5)((()=>[f])),_:1}),v,(0,s.Wm)(o,{round:"",block:"",to:"/register"},{default:(0,s.w5)((()=>[w])),_:1})])])),_:1})]),(0,s.Wm)((0,n.SU)(t.Z))],64)}}};const _=b;var h=_},6949:function(e,l,a){e.exports=a.p+"img/logo.537e4f67.png"}}]);