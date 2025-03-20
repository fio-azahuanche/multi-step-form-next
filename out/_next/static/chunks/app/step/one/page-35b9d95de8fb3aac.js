(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[600],{8466:function(e,t,n){Promise.resolve().then(n.bind(n,1381))},4369:function(e,t,n){"use strict";var s=n(2265),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=s.useState,r=s.useEffect,l=s.useLayoutEffect,u=s.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(e){return!0}}var o="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),s=i({inst:{value:n,getSnapshot:t}}),a=s[0].inst,o=s[1];return l(function(){a.value=n,a.getSnapshot=t,c(a)&&o({inst:a})},[e,n,t]),r(function(){return c(a)&&o({inst:a}),e(function(){c(a)&&o({inst:a})})},[e]),u(n),n};t.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:o},2860:function(e,t,n){"use strict";var s=n(2265),a=n(2558),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},r=a.useSyncExternalStore,l=s.useRef,u=s.useEffect,c=s.useMemo,o=s.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,s,a){var m=l(null);if(null===m.current){var d={hasValue:!1,value:null};m.current=d}else d=m.current;var p=r(e,(m=c(function(){function e(e){if(!u){if(u=!0,r=e,e=s(e),void 0!==a&&d.hasValue){var t=d.value;if(a(t,e))return l=t}return l=e}if(t=l,i(r,e))return t;var n=s(e);return void 0!==a&&a(t,n)?(r=e,t):(r=e,l=n)}var r,l,u=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,s,a]))[0],m[1]);return u(function(){d.hasValue=!0,d.value=p},[p]),o(p),p}},2558:function(e,t,n){"use strict";e.exports=n(4369)},5195:function(e,t,n){"use strict";e.exports=n(2860)},1381:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var s=n(7437),a=n(2265),i=n(6222);function r(){let[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(""),[l,u]=(0,a.useState)(""),[c,o]=(0,a.useState)({name:"",email:"",phoneNumber:""}),{nextStep:m}=(0,i.v)(),d=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,p=/^\+?[0-9]{1,3}?[0-9]{7,14}$/;return e&&d.test(n)&&p.test(l),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("form",{className:"flex justify-center",children:(0,s.jsxs)("div",{className:"pb-12 text-customGray max-w-xl w-full",children:[(0,s.jsx)("h2",{className:"text-customMarineBlue text-3xl font-semibold leading-7",children:"Personal Info"}),(0,s.jsx)("p",{className:"mt-1 text-customCoolGray text-base leading-6 font-medium",children:"Please provide your name, email address, and phone number."}),(0,s.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,s.jsxs)("div",{className:"sm:col-span-5",children:[(0,s.jsx)("label",{htmlFor:"name",className:"text-base text-customMarineBlue font-medium leading-6",children:"Name"}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("div",{className:"flex sm:max-w-md",children:(0,s.jsx)("input",{type:"text",name:"name",id:"name",className:"custom-input",placeholder:"e.g. Levi Ackerman",value:e,onChange:e=>{t(e.target.value),o(t=>({...t,name:e.target.value?"":"Name is required."}))}})}),c.name&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:c.name})]})]}),(0,s.jsxs)("div",{className:"sm:col-span-5",children:[(0,s.jsx)("label",{htmlFor:"email",className:"text-base text-customMarineBlue font-medium leading-6",children:"Email Address"}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("div",{className:"flex sm:max-w-md",children:(0,s.jsx)("input",{type:"text",name:"email",id:"email",className:"custom-input",placeholder:"e.g. leviackerman@lorem.com",value:n,onChange:e=>{let t=e.target.value;r(t),o(e=>({...e,email:d.test(t)?"":"Invalid email format."}))}})}),c.email&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:c.email})]})]}),(0,s.jsxs)("div",{className:"sm:col-span-5",children:[(0,s.jsx)("label",{htmlFor:"phoneNumber",className:"text-base text-customMarineBlue font-medium leading-6",children:"Phone Number"}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("div",{className:"flex sm:max-w-md",children:(0,s.jsx)("input",{type:"text",name:"phoneNumber",id:"phoneNumber",className:"custom-input",placeholder:"e.g. +1 234 567 890",value:l,onChange:e=>{let t=e.target.value;u(t),o(e=>({...e,phoneNumber:p.test(t)?"":"Invalid phone number format."}))}})}),c.phoneNumber&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:c.phoneNumber})]})]}),(0,s.jsx)("div",{className:"sm:col-span-5 flex justify-end",children:(0,s.jsx)("button",{onClick:m,className:"mt-4 custom-button text-base custom-button-valid",children:"Next Step"})})]})]})})})}},6222:function(e,t,n){"use strict";n.d(t,{v:function(){return s}});let s=(0,n(9625).Ue)(e=>({activeStep:1,completedSteps:[],nextStep:()=>e(e=>({activeStep:e.activeStep+1,completedSteps:[...e.completedSteps,e.activeStep]})),previousStep:()=>e(e=>({activeStep:e.activeStep>1?e.activeStep-1:e.activeStep})),setStep:t=>e(()=>({activeStep:t})),goToStep:t=>e(()=>({activeStep:t})),completeStep:t=>e(e=>({completedSteps:[...e.completedSteps,t]})),resetSteps:()=>e({activeStep:1,completedSteps:[],isConfirmed:!1}),isYearly:!1,setIsYearly:t=>e({isYearly:t}),isConfirmed:!1,confirmSubscription:()=>e({isConfirmed:!0})}))},9625:function(e,t,n){"use strict";n.d(t,{Ue:function(){return d}});let s=e=>{let t;let n=new Set,s=(e,s)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=s?s:"object"!=typeof a||null===a)?a:Object.assign({},t,a),n.forEach(n=>n(t,e))}},a=()=>t,i={setState:s,getState:a,getInitialState:()=>r,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},r=t=e(s,a,i);return i},a=e=>e?s(e):s;var i=n(2265),r=n(5195);let{useDebugValue:l}=i,{useSyncExternalStoreWithSelector:u}=r,c=!1,o=e=>e,m=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?a(e):e,n=(e,n)=>(function(e,t=o,n){n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let s=u(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return l(s),s})(t,e,n);return Object.assign(n,t),n},d=e=>e?m(e):m}},function(e){e.O(0,[971,117,744],function(){return e(e.s=8466)}),_N_E=e.O()}]);