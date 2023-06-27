(function(){"use strict";var e={2087:function(e,t,n){var a=n(9242),r=n(3396),o=n(7139);const i={id:"formio-land-form",class:"container container-fluid qg-site-width"},s={id:"qg-three-col",class:"row no-secondary-nav"},l={id:"qg-primary-content",role:"main"},p=(0,r._)("br",null,null,-1),c=(0,r._)("em",null,"(Land Act 1994)",-1),u=(0,r._)("div",{class:"clearfix"},null,-1),d=(0,r._)("div",{class:"qg-content-footer"},[(0,r._)("dl",null,[(0,r._)("dt",null,"Version:"),(0,r._)("dd",null,"2022/01")])],-1),m=(0,r._)("div",{id:"qg-options",class:"row justify-content-sm-end"},null,-1),f={id:"qg-secondary-content"};function v(e,t,n,a,v,h){const _=(0,r.up)("FormWrapper"),P=(0,r.up)("RightSideBar"),U=(0,r.up)("LeftSideBar");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",s,[(0,r._)("div",l,[(0,r._)("h1",null,[(0,r.Uk)((0,o.zw)(v.formName),1),p,c]),(0,r.Wm)(_,{projectUrl:v.projectUrl,wizardUrl:v.wizardUrl,createFormUrl:v.createFormUrl,formIdentifier:v.formIdentifier,savedApplicationPage:v.savedApplicationPage,thankYouPage:v.thankYouPage,submissionId:v.submissionId,hasPayment:v.hasPayment,paymentUrl:v.paymentUrl,recaptchaSiteKey:v.recaptchaSiteKey,purchaseItemName:v.purchaseItemName,guidePageUrl:v.guidePageUrl,shortUuidToken:v.shortUuidToken,feesCode:v.feesCode,feesUrl:v.feesUrl,privateKey:v.privateKey},null,8,["projectUrl","wizardUrl","createFormUrl","formIdentifier","savedApplicationPage","thankYouPage","submissionId","hasPayment","paymentUrl","recaptchaSiteKey","purchaseItemName","guidePageUrl","shortUuidToken","feesCode","feesUrl","privateKey"]),u,d,m]),(0,r._)("aside",f,[(0,r.Wm)(P)]),(0,r.Wm)(U,{formName:v.formName},null,8,["formName"])])])}var h=n(4808),_={name:"App",components:{LeftSideBar:h.Jq,FormWrapper:h.n5,RightSideBar:h.mM},data(){return{projectUrl:"https://api.forms.platforms.qld.gov.au/la08e",wizardUrl:"https://api.forms.platforms.qld.gov.au/la08e/application",createFormUrl:"https://api.forms.platforms.qld.gov.au/la08e/application",formIdentifier:"la08-production",formName:"Form 08e - Owner's consent for a development application",purchaseItemName:{VUE_APP_NAME:"la08",VUE_APP_ENV:"production",VUE_APP_PROJECT_URL:"https://api.forms.platforms.qld.gov.au/la08e",VUE_APP_WIZARD_URL:"https://api.forms.platforms.qld.gov.au/la08e/application",VUE_APP_SAVED_APPLICATION_PAGE:"https://www.qld.gov.au/environment/land/state/application/forms/services/saved-application",VUE_APP_THANK_YOU_PAGE:"https://www.qld.gov.au/environment/land/state/application/services/services/thank-you",VUE_APP_HAS_PAYMENT:"false",VUE_APP_PAYMENT_URL:"https://apps.resources.qld.gov.au/payment/api/payment/land-application",VUE_APP_RECAPTCHA_SITE_KEY:"6LfKymMaAAAAAFLAylqOntXqT7CW6t2HlMgMcvkC",VUE_APP_FORM_NAME:"Form 08e - Owner's consent for a development application",VUE_APP_GUIDE_PAGE_URL:"https://www.qld.gov.au/environment/land/state/application/forms/services/owners-consent-for-a-development-application",VUE_APP_FEECODE:"",VUE_APP_FEE_URL:"",VUE_APP_PRIVATE_KEY:"",NODE_ENV:"production",BASE_URL:"https://www.qld.gov.au/?a=261903:/"}.VUE_APP_PURCHASE_ITEM_NAME,savedApplicationPage:"https://www.qld.gov.au/environment/land/state/application/forms/services/saved-application",thankYouPage:"https://www.qld.gov.au/environment/land/state/application/services/services/thank-you",guidePageUrl:"https://www.qld.gov.au/environment/land/state/application/forms/services/owners-consent-for-a-development-application",submissionId:"",hasPayment:"false",paymentUrl:"https://apps.resources.qld.gov.au/payment/api/payment/land-application",recaptchaSiteKey:"6LfKymMaAAAAAFLAylqOntXqT7CW6t2HlMgMcvkC",shortUuidToken:"",feesCode:"",feesUrl:"",privateKey:""}},beforeMount(){let e=window.location.search,t=new URLSearchParams(e),n=t.get("submissionId")??"",a=t.get("token")??"";this.createFormUrl=this.wizardUrl,""!==n&&""!==a&&(this.createFormUrl+="/submission/"+n),this.submissionId=n,this.shortUuidToken=a}},P=n(89);const U=(0,P.Z)(_,[["render",v]]);var A=U;(0,a.ri)(A).use(h.h).mount("#app")},6807:function(e){e.exports=Formio}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var p=r();void 0!==p&&(t=p)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],l=a[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(a);p<i.length;p++)o=i[p],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2087)}));a=n.O(a)})();
//# sourceMappingURL=app.3810a3f3.js.map