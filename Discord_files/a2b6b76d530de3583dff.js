var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{5333:function(e,t,r){"use strict";t.__esModule=!0,t.getSelectionText=s,t.contextMenuCallbackNative=function(e){var t,r,n;e.preventDefault();var c=s();if("TEXTAREA"===e.target.tagName||"INPUT"===e.target.tagName)"checkbox"!==e.target.type&&(t=i.ContextMenuTypes.NATIVE_INPUT);else{if("none"===window.getComputedStyle(e.target).getPropertyValue("-webkit-user-select"))return;var d=e.target;do{null!=d.src&&(n=d.src),null!=d.href&&(r=d.href),d=d.parentNode}while(null!=d);null!=n?t=i.ContextMenuTypes.NATIVE_IMAGE:null!=r?t=i.ContextMenuTypes.NATIVE_LINK:c&&(t=i.ContextMenuTypes.NATIVE_TEXT)}t&&(0,l.openContextMenu)(e,function(e){return o.createElement(a.default,u({},e,{type:i.ContextMenuTypes[t],href:r,src:n,value:c}))})},t.contextMenuCallbackWeb=function(e){var t,r,n=!1;if("INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)n=!0;else if(s())n=!0;else{var o=e.target;do{null!=o.src&&(t=o.src),null!=o.href&&(r=o.href),o=o.parentNode}while(null!=o);null==r&&null==t||(n=!0)}n||e.preventDefault()};var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(306),a=(n=r(6147))&&n.__esModule?n:{default:n},i=r(0);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(){var e="";return window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!==document.selection.type&&(e=document.selection.createRange().text),e}},6040:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=(n=r(2))&&n.__esModule?n:{default:n},l=r(0);var a={saveDraft:function(e,t){o.default.dirtyDispatch({type:l.ActionTypes.DRAFT_SAVE,channelId:e,draft:t})},changeDraft:function(e,t){o.default.dirtyDispatch({type:l.ActionTypes.DRAFT_CHANGE,channelId:e,draft:t})}};t.default=a},6147:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=h(r(5960)),a=h(r(6148)),i=h(r(6470)),u=h(r(6149)),s=h(r(6471)),c=h(r(6472)),d=h(r(6478)),f=h(r(6152)),p=r(0);function h(e){return e&&e.__esModule?e:{default:e}}function v(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=new Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var y=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.type,r=e.target,n=e.className,h=e.href,y=e.src,g=e.value,_=e.onHeightUpdate;switch(t){case p.ContextMenuTypes.CHANNEL_TEXT_AREA:case p.ContextMenuTypes.CHANNEL_TEXT_AREA_EDIT:case p.ContextMenuTypes.NATIVE_INPUT:return v("div",{className:n},void 0,t===p.ContextMenuTypes.CHANNEL_TEXT_AREA||t===p.ContextMenuTypes.CHANNEL_TEXT_AREA_EDIT?v(l.default,{},void 0,v(d.default,{value:g,target:r,isEditing:t===p.ContextMenuTypes.CHANNEL_TEXT_AREA_EDIT})):null,r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement?o.createElement(o.Fragment,null,v(c.default,{value:g,target:r,onHeightUpdate:_}),v(l.default,{},void 0,v(a.default,{value:g,target:r,useSelection:!0}),v(i.default,{value:g,target:r}),v(s.default,{target:r}))):null);case p.ContextMenuTypes.NATIVE_LINK:return v("div",{className:n},void 0,v(a.default,{value:g,useSelection:!0}),v(u.default,{href:h,src:y}));case p.ContextMenuTypes.NATIVE_IMAGE:return v("div",{className:n},void 0,v(u.default,{href:h,src:y}));case p.ContextMenuTypes.NATIVE_TEXT:return v("div",{className:n},void 0,v(l.default,{},void 0,v(f.default,{value:g})),v(l.default,{},void 0,v(a.default,{value:g})));default:return console.warn("Error - no such ctx menu type"),null}},n}(o.PureComponent);y.displayName="NativeContextMenu";var g=y;t.default=g},6148:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(306),a=c(r(19)),i=c(r(11)),u=c(r(5957)),s=c(r(8));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleCopyItem=function(){(0,l.closeContextMenu)(),a.default.copy(t.props.value),t.props.target&&t.props.target.focus()},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.props,t=e.useSelection,r=e.value;return!i.default.embedded||t&&(null==r||0===r.length)?null:function(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=new Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(u.default,{label:s.default.Messages.COPY,hint:i.default.isOSX()?"⌘C":"Ctrl+C",action:this.handleCopyItem})},o}(o.PureComponent);d.displayName="NativeCopyItem",d.defaultProps={value:"",useSelection:!1};var f=d;t.default=f},6149:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(306),a=d(r(19)),i=d(r(11)),u=d(r(5960)),s=d(r(5957)),c=d(r(8));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=new Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var p=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleCopyLink=function(){(0,l.closeContextMenu)(),a.default.copy(t.props.href||t.props.src)},t.handleOpenLink=function(){(0,l.closeContextMenu)(),window.open(t.props.href||t.props.src)},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return i.default.embedded&&(this.props.href||this.props.src)?f(u.default,{},void 0,f(s.default,{label:c.default.Messages.COPY_LINK,action:this.handleCopyLink}),f(s.default,{label:c.default.Messages.OPEN_LINK,action:this.handleOpenLink})):null},n}(o.PureComponent);p.displayName="NativeLinkGroup";var h=p;t.default=h},6150:function(e,t,r){"use strict";t.__esModule=!0,t.isSupported=i,t.setEnabled=function(e){return null!=u?u.then(function(t){t.enabled=e}):Promise.resolve()},t.setLearnedWords=function(e){return null!=u?u.then(function(t){return t.setLearnedWords(e)}):Promise.resolve()},t.isMisspelled=function(e,t){void 0===t&&(t=!1);return null!=u?u.then(function(r){return r.isMisspelled(e,t)}):Promise.resolve(!1)},t.getCorrections=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=5);return null!=u?u.then(function(n){return n.getCorrectionsForMisspelling(e,t).slice(0,r)}):Promise.resolve([])},t.replaceWithCorrection=function(e){n.default.spellCheck.replaceMisspelling(e)};var n=a(r(95)),o=r(6475),l=a(r(11));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return l.default.embedded&&(l.default.isOSX()||l.default.isWindows()&&parseFloat(n.default.os.release)>=6.2)}var u=i()?(0,o.install)():null},6151:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n={aa:"aa-ET",af:"af-ZA",ak:"ak-GH",am:"am-ET",an:"an-ES",ar:"ar-MA",as:"as-IN",ay:"ay-PE",az:"az-AZ",be:"be-BY",bg:"bg-BG",bi:"bi-TV",bn:"bn-BD",bo:"bo-CN",br:"br-FR",bs:"bs-BA",ca:"ca-ES",ce:"ce-RU",cs:"cs-CZ",cv:"cv-RU",cy:"cy-GB",da:"da-DK",de:"de-DE",dv:"dv-MV",dz:"dz-BT",el:"el-GR",en:"en-US",es:"es-ES",et:"et-EE",eu:"eu-ES",fa:"fa-IR",ff:"ff-SN",fi:"fi-FI",fo:"fo-FO",fr:"fr-FR",fy:"fy-DE",ga:"ga-IE",gd:"gd-GB",gl:"gl-ES",gu:"gu-IN",gv:"gv-GB",ha:"ha-NG",he:"he-IL",hi:"hi-IN",hr:"hr-HR",ht:"ht-HT",hu:"hu-HU",hy:"hy-AM",ia:"ia-FR",id:"id-ID",ig:"ig-NG",ik:"ik-CA",is:"is-IS",it:"it-IT",iu:"iu-CA",ja:"ja-JP",ka:"ka-GE",kk:"kk-KZ",kl:"kl-GL",km:"km-KH",kn:"kn-IN",ko:"ko-KR",ks:"ks-IN",ku:"ku-TR",kw:"kw-GB",ky:"ky-KG",lb:"lb-LU",lg:"lg-UG",li:"li-BE",ln:"ln-CD",lo:"lo-LA",lt:"lt-LT",lv:"lv-LV",mg:"mg-MG",mh:"mh-MH",mi:"mi-NZ",mk:"mk-MK",ml:"ml-IN",mn:"mn-MN",mr:"mr-IN",ms:"ms-MY",mt:"mt-MT",my:"my-MM",nb:"nb-NO",ne:"ne-NP",nl:"nl-NL",nn:"nn-NO",nr:"nr-ZA",oc:"oc-FR",om:"om-KE",or:"or-IN",os:"os-RU",pa:"pa-PK",pl:"pl-PL",ps:"ps-AF",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",rw:"rw-RW",sa:"sa-IN",sc:"sc-IT",sd:"sd-IN",se:"se-NO",si:"si-LK",sk:"sk-SK",sl:"sl-SI",so:"so-SO",sq:"sq-AL",sr:"sr-RS",ss:"ss-ZA",st:"st-ZA",sv:"sv-SE",sw:"sw-KE",ta:"ta-IN",te:"te-IN",tg:"tg-TJ",th:"th-TH",ti:"ti-ER",tk:"tk-TM",tl:"tl-PH",tn:"tn-ZA",tr:"tr-TR",ts:"ts-ZA",tt:"tt-RU",ug:"ug-CN",uk:"uk-UA",ur:"ur-PK",uz:"uz-UZ",ve:"ve-ZA",vi:"vi-VN",wa:"wa-BE",wo:"wo-SN",xh:"xh-ZA",yi:"yi-US",yo:"yo-NG",zh:"zh-CN",zu:"zu-ZA"};t.default=n},6152:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(306),a=u(r(5957)),i=u(r(8));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleSearchWithGoogle=function(){(0,l.closeContextMenu)(),window.open("https://web.archive.org/web/20190914220455/https://www.google.com/search?q="+encodeURIComponent(t.props.value||""),"_blank")},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.props.value;return null==e||0===e.length?null:function(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=new Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(a.default,{label:i.default.Messages.SEARCH_WITH_GOOGLE,action:this.handleSearchWithGoogle})},o}(o.PureComponent);s.displayName="SearchWithGoogle",s.defaultProps={value:""};var c=s;t.default=c},6470:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(306),a=c(r(19)),i=c(r(11)),u=c(r(5957)),s=c(r(8));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleCutItem=function(){(0,l.closeContextMenu)(),t.props.target.focus(),setTimeout(function(){return a.default.cut()},0)},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){return this.props.value?function(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=new Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(u.default,{label:s.default.Messages.CUT,hint:i.default.isOSX()?"⌘X":"Ctrl+X",action:this.handleCutItem}):null},o}(o.PureComponent);d.displayName="NativeCutItem";var f=d;t.default=f},6471:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(306),a=c(r(19)),i=c(r(11)),u=c(r(5957)),s=c(r(8));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handlePasteItem=function(){(0,l.closeContextMenu)(),t.props.target.focus(),setTimeout(function(){return a.default.paste()},0)},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){return function(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=new Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(u.default,{label:s.default.Messages.PASTE,hint:i.default.isOSX()?"⌘V":"Ctrl+V",action:this.handlePasteItem})},o}(o.PureComponent);d.displayName="NativePasteItem";var f=d;t.default=f},6472:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=y(r(4)),a=r(306),i=r(6473),u=y(r(6474)),s=y(r(167)),c=r(6150),d=y(r(5960)),f=y(r(5957)),p=y(r(5978)),h=r(0),v=y(r(8));function y(e){return e&&e.__esModule?e:{default:e}}function g(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=new Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var _=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={misspelled:!1,corrections:[]},t._mounted=!1,t.handleLearnWord=function(){var e=t.props.value;(0,i.learnWord)(e),t.resetTarget()},t.handleToggle=function(){(0,i.toggleSpellcheck)(),t.resetTarget()},t.handleLanguages=function(){window.open(s.default.getArticleURL(h.HelpdeskArticles.SPELLCHECK))},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){this._mounted=!0,this.updateCorrections(this.props)},o.componentWillUnmount=function(){this._mounted=!1},o.UNSAFE_componentWillReceiveProps=function(e){var t=this.props,r=t.value,n=t.spellcheckEnabled;r===e.value&&n===e.spellcheckEnabled||this.updateCorrections(e)},o.render=function(){var e=this;if(!(0,c.isSupported)())return null;var t=this.props.spellcheckEnabled,r=this.state,n=r.misspelled,o=r.corrections,l=g(d.default,{},"options",n?g(f.default,{label:v.default.Messages.ADD_TO_DICTIONARY,action:this.handleLearnWord}):null,g(p.default,{label:v.default.Messages.SPELLCHECK,active:t,action:this.handleToggle}),t?g(f.default,{label:v.default.Messages.LANGUAGES,action:this.handleLanguages}):null);return 0===o.length?l:[g(d.default,{},"corrections",o.map(function(t,r){return g(f.default,{label:t,action:function(){return e.handleReplace(t)}},r)})),l]},o.handleReplace=function(e){var t=this.props.target;(0,a.closeContextMenu)(),(0,c.replaceWithCorrection)(e),t.focus()},o.resetTarget=function(){(0,a.closeContextMenu)();var e=this.props.target,t=e.selectionStart,r=e.selectionEnd,n=e.value;e.value="",e.value=n,e.selectionStart=t,e.selectionEnd=r,e.focus()},o.updateCorrections=function(e){var t=this,r=e.spellcheckEnabled,n=e.value,o=e.onHeightUpdate;r&&(0,c.isSupported)()&&Promise.all([(0,c.isMisspelled)(n,!0),(0,c.getCorrections)(n,!0)]).then(function(e){var r=e[0],n=e[1];t._mounted&&t.setState({misspelled:r,corrections:n},o)})},n}(o.PureComponent);_.displayName="NativeSpellcheckGroup",_.defaultProps={value:""};var b=l.default.connectStores([],function(){return{spellcheckEnabled:u.default.isEnabled()}})(_);t.default=b},6473:function(e,t,r){"use strict";t.__esModule=!0,t.toggleSpellcheck=function(){o.default.dispatch({type:l.ActionTypes.SPELLCHECK_TOGGLE})},t.learnWord=function(e){o.default.dispatch({type:l.ActionTypes.SPELLCHECK_LEARN_WORD,word:e})};var n,o=(n=r(2))&&n.__esModule?n:{default:n},l=r(0)},6474:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r(4)),o=i(r(25)),l=i(r(2)),a=r(6150);r(0);function i(e){return e&&e.__esModule?e:{default:e}}var u="SpellcheckStore",s=!0,c=new Set;function d(){o.default.set(u,{enabled:s,learnedWords:c})}var f=new(function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var l=n.prototype;return l.initialize=function(){var e=o.default.get(u);null!=e&&(s=e.enabled,c=new Set(e.learnedWords),(0,a.setEnabled)(s),(0,a.setLearnedWords)(c))},l.isEnabled=function(){return s},n}(n.default.Store))(l.default,{SPELLCHECK_TOGGLE:function(e){return s=!s,(0,a.setEnabled)(s),void d()},SPELLCHECK_LEARN_WORD:function(e){var t=e.word;c.add(t.toLocaleLowerCase()),(0,a.setLearnedWords)(c),d()}});t.default=f},6475:function(e,t,r){"use strict";t.__esModule=!0,t.install=function(){return l.default.ensureModule("discord_spellcheck").then(function(){var e=l.default.requireModule("discord_spellcheck").Spellchecker,t=new v(new e);return function(e){null!=document.body&&document.body.addEventListener("input",function(t){null!=t.target&&"string"==typeof t.target.value&&e.detectLocale(t.target.value)},!0)}(t),t})},t.Spellchecker=void 0;var n=r(6720),o=f(r(464)),l=f(r(19)),a=f(r(11)),i=f(r(95)),u=f(r(65)),s=f(r(6476)),c=f(r(6477)),d=f(r(6151));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){e=d.default[e]||e;var t=(0,n.parse)(e.replace(/[_-]/g,"-"));if(null==t||null==t.langtag.language||null==t.langtag.region)throw new Error(e+" is not a valid locale.");var r=t.langtag,o=r.language,l=r.region;return o.language.toLowerCase()+"-"+l.toUpperCase()}var v=function(){function e(e){var t=this;this._logger=u.default.create("Spellchecker"),this._isMisspelledCache=new o.default({max:512,maxAge:4e3}),this._localeAvailable=!1,this._enabled=!0,this._learnedWords=new Set,this._spellchecker=e;var r=this.getAvailableLocales();this._languageDetector=new s.default(r[0],this.getAvailableLanguages(r),function(e){return t.setLocale(e)})}var t,r,n,d=e.prototype;return d.reset=function(){var e=this;null!=this._locale&&(this._isMisspelledCache.reset(),i.default.spellCheck.setSpellCheckProvider(this._locale,!0,{spellCheck:function(t){return!e.isMisspelled(t)}}))},d.setLearnedWords=function(e){this._learnedWords=e,this.reset()},d.setLocale=function(e){e!==this._locale&&(this._locale=e,this._localeAvailable=this._spellchecker.setDictionary(e),this._logger.info("Switching to "+e,this._localeAvailable?"(available)":"(unavailable)"),this.reset())},d.detectLocale=function(e){this.enabled&&this._languageDetector.process(e)},d.getAvailableLocales=function(){var e=l.default.requireModule("discord_spellcheck").keyboardLayout;return(a.default.isOSX()?this._spellchecker.getAvailableDictionaries():e.getInstalledKeyboardLanguages()).map(h)},d.getAvailableLanguages=function(e){e=e||this.getAvailableLocales();var t={};return e.forEach(function(e){var r=e.split("-")[0];t[r]=t[r]||e}),t},d.isMisspelled=function(e,t){void 0===t&&(t=!1);var r=this._isMisspelledCache.get(e);return null!=r?r:!t&&(r=this._isMisspelled(e),this._isMisspelledCache.set(e,r),r)},d._isMisspelled=function(e){if(!this._enabled||!this._localeAvailable)return!1;if(1===e.length)return!1;var t=e.toLocaleLowerCase();return!this._learnedWords.has(t)&&!c.default.has(t)&&this._spellchecker.isMisspelled(e)},d.getCorrectionsForMisspelling=function(e,t){return void 0===t&&(t=!1),this.isMisspelled(e,t)&&this._spellchecker.getCorrectionsForMisspelling(e)||[]},t=e,(r=[{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled=e,this.reset()}}])&&p(t.prototype,r),n&&p(t,n),e}();t.Spellchecker=v},6476:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=l(r(19)),o=l(r(6151));function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(e,t,r){this._shouldProcess=!1,this._processing=!1,this._minimumTimeRemaining=5,this._locale=e,this._availableLanguages=t,this._languageHint=e.split("-")[0],this._onChange=r,r(e)}var t,r,l,i=e.prototype;return i.process=function(e){var t=this;this._processing||(this._processing=!0,requestIdleCallback(function(r){r.timeRemaining()<=t._minimumTimeRemaining?t._processEnd():(e.length>256&&(e=e.slice(0,256)),function(e,t){var r=n.default.requireModule("discord_spellcheck").cld;return new Promise(function(n,o){r.detect(e,{httpHint:t,encodingHint:"UTF8"},function(e,t){null!=e?o(new Error(e.message)):!t.reliable||t.languages[0].percent<90||t.languages[0].score<500?o(new Error("Not enough reliable text.")):n(t.languages[0].code)})})}(e,t._languageHint).then(function(e){var n=t._availableLanguages[e]||o.default[e];null!=n&&(t.locale=n),t._processEnd(r.didTimeout)},function(){t._processEnd(r.didTimeout)}))}))},i._processEnd=function(e){void 0===e&&(e=!1),this._processing=!1,e&&this._minimumTimeRemaining++},t=e,(r=[{key:"locale",get:function(){return this._locale},set:function(e){this._locale!==e&&(this._locale=e,this._onChange(e))}}])&&a(t.prototype,r),l&&a(t,l),e}();t.default=i},6477:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=new Set(["ain't","aren't","can't","could've","couldn't","couldn't've","didn't","doesn't","don't","hadn't","hadn't've","hasn't","haven't","he'd","he'd've","he'll","he's","how'd","how'll","how's","I'd","I'd've","I'll","I'm","I've","isn't","it'd","it'd've","it'll","it's","let's","ma'am","mightn't","mightn't've","might've","mustn't","must've","needn't","not've","o'clock","shan't","she'd","she'd've","she'll","she's","should've","shouldn't","shouldn't've","that'll","that's","there'd","there'd've","there're","there's","they'd","they'd've","they'll","they're","they've","wasn't","we'd","we'd've","we'll","we're","we've","weren't","what'll","what're","what's","what've","when's","where'd","where's","where've","who'd","who'll","who're","who's","who've","why'll","why're","why's","won't","would've","wouldn't","wouldn't've","y'all","y'all'd've","you'd","you'd've","you'll","you're","you've"].map(function(e){return e.replace(/'.*/,"")}));t.default=n},6478:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(306),a=f(r(6040)),i=f(r(168)),u=f(r(37)),s=f(r(5957)),c=r(0),d=f(r(8));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).tagAsSpoiler=function(){var e=t.props,r=e.target,n=e.value,o=void 0===n?"":n,s=e.isEditing;if(r instanceof HTMLTextAreaElement){var d=u.default.getChannelId();if(null!=d){(0,l.closeContextMenu)(),r.focus();var f=r.selectionStart,p=r.selectionEnd;r.value=r.value.slice(0,f)+(0,c.MARKDOWN_SPOILER_WRAPPER)(o)+r.value.slice(p),s?i.default.updateEditMessage(r.value):a.default.saveDraft(d,r.value)}}},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.props,t=e.value,r=e.target;return null!=t&&r instanceof HTMLTextAreaElement?function(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&l)for(var i in l)void 0===t[i]&&(t[i]=l[i]);else t||(t=l||{});if(1===a)t.children=o;else if(a>1){for(var u=new Array(a),s=0;s<a;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(s.default,{label:d.default.Messages.SPOILER_MARK_SELECTED,action:this.tagAsSpoiler}):null},o}(o.PureComponent);p.displayName="NativeSpoilerItem";var h=p;t.default=h}}]);
//# sourceMappingURL=a2b6b76d530de3583dff.js.map

}
/*
     FILE ARCHIVED ON 22:04:55 Sep 14, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:19:46 Aug 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.78
  exclusion.robots: 0.036
  exclusion.robots.policy: 0.021
  esindex: 0.013
  cdx.remote: 50.112
  LoadShardBlock: 40.219 (3)
  PetaboxLoader3.datanode: 79.983 (4)
  load_resource: 138.845
  PetaboxLoader3.resolve: 85.285
*/