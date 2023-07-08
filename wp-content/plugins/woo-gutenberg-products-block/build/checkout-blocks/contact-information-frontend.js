(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[37],{284:function(e,t,c){"use strict";var s=c(13),n=c.n(s),i=c(0),l=c(6),o=c.n(l);c(285),t.a=e=>{let{children:t,className:c,headingLevel:s,...l}=e;const a=o()("wc-block-components-title",c),r="h"+s;return Object(i.createElement)(r,n()({className:a},l),t)}},285:function(e,t){},287:function(e,t){},288:function(e,t,c){"use strict";var s=c(1);t.a=e=>{let{defaultTitle:t=Object(s.__)("Step","woo-gutenberg-products-block"),defaultDescription:c=Object(s.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:n=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:c},showStepNumber:{type:"boolean",default:n}}}},305:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var s=c(7),n=c(3);const i=()=>{const{customerData:e,isInitialized:t}=Object(s.useSelect)(e=>{const t=e(n.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}}),{setShippingAddress:c,setBillingAddress:i}=Object(s.useDispatch)(n.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:i,setShippingAddress:c}}},310:function(e,t,c){"use strict";var s=c(0),n=c(6),i=c.n(n),l=c(284);c(287);const o=e=>{let{title:t,stepHeadingContent:c}=e;return Object(s.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(s.createElement)(l.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!c&&Object(s.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},c))};t.a=e=>{let{id:t,className:c,title:n,legend:l,description:a,children:r,disabled:d=!1,showStepNumber:u=!0,stepHeadingContent:p=(()=>{})}=e;const b=l||n?"fieldset":"div";return Object(s.createElement)(b,{className:i()(c,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":u,"wc-block-components-checkout-step--disabled":d}),id:t,disabled:d},!(!l&&!n)&&Object(s.createElement)("legend",{className:"screen-reader-text"},l||n),!!n&&Object(s.createElement)(o,{title:n,stepHeadingContent:p()}),Object(s.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!a&&Object(s.createElement)("p",{className:"wc-block-components-checkout-step__description"},a),Object(s.createElement)("div",{className:"wc-block-components-checkout-step__content"},r)))}},401:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(2),n=c(0),i=c(7),l=c(3),o=c(305),a=c(120);const r=()=>{const{needsShipping:e}=Object(a.a)(),{useShippingAsBilling:t,prefersCollection:c}=Object(i.useSelect)(e=>({useShippingAsBilling:e(l.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(l.CHECKOUT_STORE_KEY).prefersCollection()})),{__internalSetUseShippingAsBilling:r}=Object(i.useDispatch)(l.CHECKOUT_STORE_KEY),{billingAddress:d,setBillingAddress:u,shippingAddress:p,setShippingAddress:b}=Object(o.a)(),g=Object(n.useCallback)(e=>{u({email:e})},[u]),m=Object(n.useCallback)(e=>{u({phone:e})},[u]),h=Object(n.useCallback)(e=>{b({phone:e})},[b]),O=Object(s.getSetting)("forcedBillingAddress",!1);return{shippingAddress:p,billingAddress:d,setShippingAddress:b,setBillingAddress:u,setEmail:g,setBillingPhone:m,setShippingPhone:h,defaultAddressFields:s.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:r,needsShipping:e,showShippingFields:!O&&e&&!c,showShippingMethods:e&&!c,showBillingFields:!e||!t||c,forcedBillingAddress:O,useBillingAsShipping:O||c}}},499:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(6),i=c.n(n),l=c(135),o=c(310),a=c(7),r=c(3),d=c(1),u=c(401),p=c(73),b=c(47),g=c(2),m=c(11),h=c(15),O=()=>{const{customerId:e,shouldCreateAccount:t}=Object(a.useSelect)(e=>{const t=e(r.CHECKOUT_STORE_KEY);return{customerId:t.getCustomerId(),shouldCreateAccount:t.getShouldCreateAccount()}}),{__internalSetShouldCreateAccount:c}=Object(a.useDispatch)(r.CHECKOUT_STORE_KEY),{billingAddress:n,setEmail:i}=Object(u.a)(),{dispatchCheckoutEvent:l}=Object(p.a)(),o=!e&&Object(g.getSetting)("checkoutAllowsGuest",!1)&&Object(g.getSetting)("checkoutAllowsSignup",!1)&&Object(s.createElement)(m.CheckboxControl,{className:"wc-block-checkout__create-account",label:Object(d.__)("Create an account?","woo-gutenberg-products-block"),checked:t,onChange:e=>c(e)});return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(m.StoreNoticesContainer,{context:b.d.CONTACT_INFORMATION}),Object(s.createElement)(m.ValidatedTextInput,{id:"email",type:"email",autoComplete:"email",errorId:"billing_email",label:Object(d.__)("Email address","woo-gutenberg-products-block"),value:n.email,required:!0,onChange:e=>{i(e),l("set-email-address")},customValidation:e=>!!Object(h.isEmail)(e.value)||(e.setCustomValidity(Object(d.__)("Please enter a valid email address","woo-gutenberg-products-block")),!1)}),o)},_=c(288),j={...Object(_.a)({defaultTitle:Object(d.__)("Contact information","woo-gutenberg-products-block"),defaultDescription:Object(d.__)("We'll use this email to send you details and updates about your order.","woo-gutenberg-products-block")}),className:{type:"string",default:""},lock:{type:"object",default:{remove:!0,move:!0}}};const E=`${c(37).f}?redirect_to=${encodeURIComponent(window.location.href)}`;var S=()=>{const e=Object(a.useSelect)(e=>e(r.CHECKOUT_STORE_KEY).getCustomerId());return!Object(g.getSetting)("checkoutShowLoginReminder",!0)||e?null:Object(s.createElement)(s.Fragment,null,Object(d.__)("Already have an account? ","woo-gutenberg-products-block"),Object(s.createElement)("a",{href:E},Object(d.__)("Log in.","woo-gutenberg-products-block")))};t.default=Object(l.withFilteredAttributes)(j)(e=>{let{title:t,description:c,showStepNumber:n,children:l,className:d}=e;const u=Object(a.useSelect)(e=>e(r.CHECKOUT_STORE_KEY).isProcessing());return Object(s.createElement)(o.a,{id:"contact-fields",disabled:u,className:i()("wc-block-checkout__contact-fields",d),title:t,description:c,showStepNumber:n,stepHeadingContent:()=>Object(s.createElement)(S,null)},Object(s.createElement)(O,null),l)})}}]);