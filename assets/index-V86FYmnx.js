(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Qt=document.getElementById("dashboard"),H=document.getElementById("dashboard-infos"),W=document.getElementById("dashboard-grid"),At=document.getElementById("expand-dashboard");let w=!1;function bn(t){if(t){At.textContent="ver mais",w=!1;return}At.textContent=w?"ver mais":"ver menos",w=!w}function vn(t){t?(W.classList.remove("expanded"),W.classList.contains("compacted")||W.classList.add("compacted"),H.classList.contains("dashboard-infos-compact")||H.classList.add("dashboard-infos-compact")):(H.classList.remove(w?"dashboard-infos-expanded":"dashboard-infos-compact"),H.classList.add(w?"dashboard-infos-compact":"dashboard-infos-expanded"),W.classList.remove(w?"expanded":"compacted"),W.classList.add(w?"compacted":"expanded"))}function Oe(t){const e=H.querySelectorAll(".hidden-element");for(const n of e){const a=n;t?a.style.display="none":a.style.display=w?"none":"flex"}vn(t),bn(t),!w&&Qt.style.display==="flex"&&Qt.scrollIntoView({block:"center",behavior:"smooth"})}Oe(!0);At.addEventListener("click",()=>{Oe()});const xn=5e3;async function Zt(t){if(!t||typeof t!="string")return;const e=new AbortController,n=setTimeout(()=>e.abort(),xn);try{const a=await fetch(t,{signal:e.signal});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const r=await a.json();return!r||Array.isArray(r)&&r.length===0?void 0:r}catch(a){console.warn(a)}finally{clearTimeout(n)}}function An(t){return!t||typeof t!="object"||Number.isNaN(t.lat)||Number.isNaN(t.lon)?void 0:`https://api.openweathermap.org/data/2.5/weather?lat=${t.lat}&lon=${t.lon}&appid=038e275af85f24d177f11df510d52547&lang=pt_br`}function wn(t,e){return typeof t!="string"||typeof e!="string"?void 0:`http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(t)},BR-${e},BR&limit=1&appid=038e275af85f24d177f11df510d52547`}async function Sn(t,e){const n=wn(t,e);if(!n)return;const a=await Zt(n);if(!a)return;const r={lat:a[0].lat,lon:a[0].lon},o=An(r);return o?await Zt(o):void 0}function Cn(t){return t<=15?"fracas":t<=30?"frequentes":t<=50?"fortes":t<=70?"muito fortes":"muito perigosas"}function En(t){return t<1e3?"muito baixa":t<1013?"baixa":t<=1015?"normal":t<=1025?"alta":"muito alta"}function Pn(t){return{"feels-like":{value:`${Math.ceil(t.main.feels_like-273.15)} °C`,mintemp:`Mínimas de <strong>${Math.ceil(t.main.temp_min-273.15)} °C</strong>`,maxtemp:`Máximas de <strong>${Math.ceil(t.main.temp_max-273.15)} °C</strong>`},"wind-speed":{value:`${Math.round(t.wind.speed*3.6)} km/h`},humidity:{value:`${t.main.humidity} %`},"clouds-percent":{value:`${t.clouds.all} %`,weatherstatus:`Agora <strong>${t.clouds.all>=60?"está nublado":"não está nublado"}</strong>`},"atmospheric-pressure":{value:`${t.main.pressure} hPa`,atmosphericpressurestatus:`A pressão atmosférica <strong>está ${En(t.main.pressure)}</strong>`},"wind-direction":{value:`${Math.round(t.wind.deg)} °`},"wind-gust":{value:`${t.wind.gust?Math.round(t.wind.gust*3.6):0} km/h`,windguststatus:`As rajadas de vento <strong>estão ${Cn(t.wind.gust?Math.round(t.wind.gust*3.6):0)}</strong>`},"snow-probability":{value:`${t.snow?t.snow["1h"]:"-"} mm/h`,snowprobabilitystatus:t.snow?"<strong>Há previsão</strong> de neve ou gelo":"<strong>Não há previsão</strong> de neve ou gelo"},"rain-probability":{value:"- %",rainingstatus:"<strong>Informação indisponível no momento</strong>"}}}const Te=[{acronym:"AC",name:"Acre"},{acronym:"AL",name:"Alagoas"},{acronym:"AP",name:"Amapá"},{acronym:"AM",name:"Amazonas"},{acronym:"BA",name:"Bahia"},{acronym:"CE",name:"Ceará"},{acronym:"DF",name:"Distrito Federal"},{acronym:"ES",name:"Espírito Santo"},{acronym:"GO",name:"Goiás"},{acronym:"MA",name:"Maranhão"},{acronym:"MT",name:"Mato Grosso"},{acronym:"MS",name:"Mato Grosso do Sul"},{acronym:"MG",name:"Minas Gerais"},{acronym:"PA",name:"Pará"},{acronym:"PB",name:"Paraíba"},{acronym:"PR",name:"Paraná"},{acronym:"PE",name:"Pernambuco"},{acronym:"PI",name:"Piauí"},{acronym:"RJ",name:"Rio de Janeiro"},{acronym:"RN",name:"Rio Grande do Norte"},{acronym:"RS",name:"Rio Grande do Sul"},{acronym:"RO",name:"Rondônia"},{acronym:"RR",name:"Roraima"},{acronym:"SC",name:"Santa Catarina"},{acronym:"SP",name:"São Paulo"},{acronym:"SE",name:"Sergipe"},{acronym:"TO",name:"Tocantins"}];function Fe(t){if(typeof t!="string"||t.length<2)return;const e=Te.find(n=>n.acronym===t.toUpperCase());return e?e.name:void 0}function _e(){return Te}const gt={AC:"America/Rio_Branco",AM:"America/Manaus",MT:"America/Cuiaba",MS:"America/Campo_Grande",RO:"America/Porto_Velho",RR:"America/Boa_Vista",AP:"America/Belem",PA:"America/Belem",MA:"America/Fortaleza",PI:"America/Fortaleza",CE:"America/Fortaleza",RN:"America/Fortaleza",PB:"America/Fortaleza",PE:"America/Recife",AL:"America/Maceio",SE:"America/Aracaju",BA:"America/Bahia",SP:"America/Sao_Paulo",RJ:"America/Sao_Paulo",MG:"America/Sao_Paulo",PR:"America/Sao_Paulo",SC:"America/Sao_Paulo",RS:"America/Sao_Paulo",DF:"America/Sao_Paulo",GO:"America/Sao_Paulo",TO:"America/Araguaina"};function kn(t){if(!(typeof t!="string"||t==="")){if(!(t in gt)){const e=_e().find(n=>n.name===t);return e?gt[e.acronym]:void 0}return gt[t.toUpperCase()]}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function In(t,e,n){return(e=Nn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function te(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?te(Object(n),!0).forEach(function(a){In(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Mn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Nn(t){var e=Mn(t,"string");return typeof e=="symbol"?e:e+""}const ee=()=>{};let $t={},ze={},Re=null,De={mark:ee,measure:ee};try{typeof window<"u"&&($t=window),typeof document<"u"&&(ze=document),typeof MutationObserver<"u"&&(Re=MutationObserver),typeof performance<"u"&&(De=performance)}catch{}const{userAgent:ne=""}=$t.navigator||{},L=$t,p=ze,ae=Re,tt=De;L.document;const I=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",je=~ne.indexOf("MSIE")||~ne.indexOf("Trident/");var Ln=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,On=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Be={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Tn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$e=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",ct="duotone",Fn="sharp",_n="sharp-duotone",Ue=[h,ct,Fn,_n],zn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Rn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Dn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),jn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Bn=["fak","fa-kit","fakd","fa-kit-duotone"],re={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$n=["kit"],Un={kit:{"fa-kit":"fak"}},Yn=["fak","fakd"],Gn={kit:{fak:"fa-kit"}},oe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Hn=["fak","fa-kit","fakd","fa-kit-duotone"],Vn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},qn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},wt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Kn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],St=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Wn,...Kn],Jn=["solid","regular","light","thin","duotone","brands"],Ye=[1,2,3,4,5,6,7,8,9,10],Qn=Ye.concat([11,12,13,14,15,16,17,18,19,20]),Zn=[...Object.keys(qn),...Jn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(Ye.map(t=>"".concat(t,"x"))).concat(Qn.map(t=>"w-".concat(t))),ta={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const P="___FONT_AWESOME___",Ct=16,Ge="fa",We="svg-inline--fa",z="data-fa-i2svg",Et="data-fa-pseudo-element",ea="data-fa-pseudo-element-pending",Ut="data-prefix",Yt="data-icon",ie="fontawesome-i2svg",na="async",aa=["HTML","HEAD","STYLE","SCRIPT"],He=(()=>{try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const Ve=s({},Be);Ve[h]=s(s(s(s({},{"fa-duotone":"duotone"}),Be[h]),re.kit),re["kit-duotone"]);const ra=Q(Ve),Pt=s({},jn);Pt[h]=s(s(s(s({},{duotone:"fad"}),Pt[h]),oe.kit),oe["kit-duotone"]);const se=Q(Pt),kt=s({},wt);kt[h]=s(s({},kt[h]),Gn.kit);const Gt=Q(kt),It=s({},Xn);It[h]=s(s({},It[h]),Un.kit);Q(It);const oa=Ln,Xe="fa-layers-text",ia=On,sa=s({},zn);Q(sa);const ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt=Tn,la=[...$n,...Zn],X=L.FontAwesomeConfig||{};function fa(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ua(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ua(fa(n));r!=null&&(X[a]=r)});const qe={styleDefault:"solid",familyDefault:h,cssPrefix:Ge,replacementClass:We,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);const Y=s(s({},qe),X);Y.autoReplaceSvg||(Y.observeMutations=!1);const l={};Object.keys(qe).forEach(t=>{Object.defineProperty(l,t,{enumerable:!0,set:function(e){Y[t]=e,q.forEach(n=>n(l))},get:function(){return Y[t]}})});Object.defineProperty(l,"familyPrefix",{enumerable:!0,set:function(t){Y.cssPrefix=t,q.forEach(e=>e(l))},get:function(){return Y.cssPrefix}});L.FontAwesomeConfig=l;const q=[];function da(t){return q.push(t),()=>{q.splice(q.indexOf(t),1)}}const N=Ct,S={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ma(t){if(!t||!I)return;const e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=p.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return p.head.insertBefore(e,a),t}const ga="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function K(){let t=12,e="";for(;t-- >0;)e+=ga[Math.random()*62|0];return e}function G(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wt(t){return t.classList?G(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ke(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ke(t[n]),'" '),"").trim()}function lt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ht(t){return t.size!==S.size||t.x!==S.x||t.y!==S.y||t.rotate!==S.rotate||t.flipX||t.flipY}function ha(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(i," ").concat(c)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function ya(t){let{transform:e,width:n=Ct,height:a=Ct,startCentered:r=!1}=t,o="";return r&&je?o+="translate(".concat(e.x/N-n/2,"em, ").concat(e.y/N-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/N,"em), calc(-50% + ").concat(e.y/N,"em)) "):o+="translate(".concat(e.x/N,"em, ").concat(e.y/N,"em) "),o+="scale(".concat(e.size/N*(e.flipX?-1:1),", ").concat(e.size/N*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var ba=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Je(){const t=Ge,e=We,n=l.cssPrefix,a=l.replacementClass;let r=ba;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(c,".".concat(a))}return r}let ce=!1;function ht(){l.autoAddCss&&!ce&&(ma(Je()),ce=!0)}var va={mixout(){return{dom:{css:Je,insertCss:ht}}},hooks(){return{beforeDOMElementCreation(){ht()},beforeI2svg(){ht()}}}};const k=L||{};k[P]||(k[P]={});k[P].styles||(k[P].styles={});k[P].hooks||(k[P].hooks={});k[P].shims||(k[P].shims=[]);var C=k[P];const Qe=[],Ze=function(){p.removeEventListener("DOMContentLoaded",Ze),rt=1,Qe.map(t=>t())};let rt=!1;I&&(rt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),rt||p.addEventListener("DOMContentLoaded",Ze));function xa(t){I&&(rt?setTimeout(t,0):Qe.push(t))}function Z(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ke(t):"<".concat(e," ").concat(pa(n),">").concat(a.map(Z).join(""),"</").concat(e,">")}function le(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yt=function(e,n,a,r){var o=Object.keys(e),i=o.length,c=n,u,f,d;for(a===void 0?(u=1,d=e[o[0]]):(u=0,d=a);u<i;u++)f=o[u],d=c(d,e[f],f,e);return d};function Aa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Mt(t){const e=Aa(t);return e.length===1?e[0].toString(16):null}function wa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function fe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Nt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=fe(e);typeof C.hooks.addPack=="function"&&!a?C.hooks.addPack(t,fe(e)):C.styles[t]=s(s({},C.styles[t]||{}),r),t==="fas"&&Nt("fa",e)}const{styles:J,shims:Sa}=C,tn=Object.keys(Gt),Ca=tn.reduce((t,e)=>(t[e]=Object.keys(Gt[e]),t),{});let Vt=null,en={},nn={},an={},rn={},on={};function Ea(t){return~la.indexOf(t)}function Pa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ea(r)?r:null}const sn=()=>{const t=a=>yt(J,(r,o,i)=>(r[i]=yt(o,a,{}),r),{});en=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(c=>typeof c=="number").forEach(c=>{a[c.toString(16)]=o}),a)),nn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(c=>typeof c=="string").forEach(c=>{a[c]=o}),a)),on=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(c=>{a[c]=o}),a});const e="far"in J||l.autoFetchSvg,n=yt(Sa,(a,r)=>{const o=r[0];let i=r[1];const c=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:c}),a},{names:{},unicodes:{}});an=n.names,rn=n.unicodes,Vt=ft(l.styleDefault,{family:l.familyDefault})};da(t=>{Vt=ft(t.styleDefault,{family:l.familyDefault})});sn();function Xt(t,e){return(en[t]||{})[e]}function ka(t,e){return(nn[t]||{})[e]}function _(t,e){return(on[t]||{})[e]}function cn(t){return an[t]||{prefix:null,iconName:null}}function Ia(t){const e=rn[t],n=Xt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function O(){return Vt}const ln=()=>({prefix:null,iconName:null,rest:[]});function Ma(t){let e=h;const n=tn.reduce((a,r)=>(a[r]="".concat(l.cssPrefix,"-").concat(r),a),{});return Ue.forEach(a=>{(t.includes(n[a])||t.some(r=>Ca[a].includes(r)))&&(e=a)}),e}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,a=ra[n][t];if(n===ct&&!t)return"fad";const r=se[n][t]||se[n][a],o=t in C.styles?t:null;return r||o||null}function Na(t){let e=[],n=null;return t.forEach(a=>{const r=Pa(l.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function ue(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=St.concat(Hn),o=ue(t.filter(g=>r.includes(g))),i=ue(t.filter(g=>!St.includes(g))),c=o.filter(g=>(a=g,!$e.includes(g))),[u=null]=c,f=Ma(o),d=s(s({},Na(i)),{},{prefix:ft(u,{family:f})});return s(s(s({},d),Fa({values:t,family:f,styles:J,config:l,canonical:d,givenPrefix:a})),La(n,a,d))}function La(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?cn(r):{},i=_(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!J.far&&J.fas&&!l.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Oa=Ue.filter(t=>t!==h||t!==ct),Ta=Object.keys(wt).filter(t=>t!==h).map(t=>Object.keys(wt[t])).flat();function Fa(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:i={}}=t,c=n===ct,u=e.includes("fa-duotone")||e.includes("fad"),f=i.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!c&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Oa.includes(n)&&(Object.keys(o).find(m=>Ta.includes(m))||i.autoFetchSvg)){const m=Dn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=_(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=O()||"fas"),a}class _a{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=s(s({},this.definitions[o]||{}),r[o]),Nt(o,r[o]);const i=Gt[h][o];i&&Nt(i,r[o]),sn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:c}=a[r],u=c[2];e[o]||(e[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[o][f]=c)}),e[o][i]=c}),e}}let de=[],B={};const U={},za=Object.keys(U);function Ra(t,e){let{mixoutsTo:n}=e;return de=t,B={},Object.keys(U).forEach(a=>{za.indexOf(a)===-1&&delete U[a]}),de.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{B[i]||(B[i]=[]),B[i].push(o[i])})}a.provides&&a.provides(U)}),n}function Lt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(B[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function R(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(B[t]||[]).forEach(o=>{o.apply(null,n)})}function T(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return U[t]?U[t].apply(null,e):void 0}function Ot(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||O();if(e)return e=_(n,e)||e,le(fn.definitions,n,e)||le(C.styles,n,e)}const fn=new _a,Da=()=>{l.autoReplaceSvg=!1,l.observeMutations=!1,R("noAuto")},ja={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(R("beforeI2svg",t),T("pseudoElements2svg",t),T("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;l.autoReplaceSvg===!1&&(l.autoReplaceSvg=!0),l.observeMutations=!0,xa(()=>{$a({autoReplaceSvgRoot:e}),R("watch",t)})}},Ba={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ft(t[0]);return{prefix:n,iconName:_(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(l.cssPrefix,"-"))>-1||t.match(oa))){const e=ut(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||O(),iconName:_(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=O();return{prefix:e,iconName:_(e,t)||t}}}},v={noAuto:Da,config:l,dom:ja,parse:Ba,library:fn,findIconDefinition:Ot,toHtml:Z},$a=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=p}=t;(Object.keys(C.styles).length>0||l.autoFetchSvg)&&I&&l.autoReplaceSvg&&v.dom.i2svg({node:e})};function dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Z(n))}}),Object.defineProperty(t,"node",{get:function(){if(!I)return;const n=p.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ua(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(Ht(i)&&n.found&&!a.found){const{width:c,height:u}=n,f={x:c/u/2,y:.5};r.style=lt(s(s({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ya(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(l.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},r),{},{id:i}),children:a}]}]}function qt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:c,maskId:u,titleId:f,extra:d,watchable:g=!1}=t,{width:m,height:y}=n.found?n:e,M=Yn.includes(a),F=[l.replacementClass,r?"".concat(l.cssPrefix,"-").concat(r):""].filter(j=>d.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(d.classes).join(" ");let x={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:F,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})};const E=M&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};g&&(x.attributes[z]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||K())},children:[c]}),delete x.attributes.title);const b=s(s({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:o,symbol:i,styles:s(s({},E),d.styles)}),{children:A,attributes:D}=n.found&&e.found?T("generateAbstractMask",b)||{children:[],attributes:{}}:T("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=A,b.attributes=D,i?Ya(b):Ua(b)}function me(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:c=!1}=t,u=s(s(s({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});c&&(u[z]="");const f=s({},i.styles);Ht(r)&&(f.transform=ya({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=lt(f);d.length>0&&(u.style=d);const g=[];return g.push({tag:"span",attributes:u,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Ga(t){const{content:e,title:n,extra:a}=t,r=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=lt(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:bt}=C;function Tt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(l.cssPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(l.cssPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(l.cssPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Wa={found:!1,width:512,height:512};function Ha(t,e){!He&&!l.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ft(t,e){let n=e;return e==="fa"&&l.styleDefault!==null&&(e=O()),new Promise((a,r)=>{if(n==="fa"){const o=cn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&bt[e]&&bt[e][t]){const o=bt[e][t];return a(Tt(o))}Ha(t,e),a(s(s({},Wa),{},{icon:l.showMissingIcons&&t?T("missingIconAbstract")||{}:{}}))})}const ge=()=>{},_t=l.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:ge,measure:ge},V='FA "6.7.2"',Va=t=>(_t.mark("".concat(V," ").concat(t," begins")),()=>un(t)),un=t=>{_t.mark("".concat(V," ").concat(t," ends")),_t.measure("".concat(V," ").concat(t),"".concat(V," ").concat(t," begins"),"".concat(V," ").concat(t," ends"))};var Kt={begin:Va,end:un};const nt=()=>{};function pe(t){return typeof(t.getAttribute?t.getAttribute(z):null)=="string"}function Xa(t){const e=t.getAttribute?t.getAttribute(Ut):null,n=t.getAttribute?t.getAttribute(Yt):null;return e&&n}function qa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(l.replacementClass)}function Ka(){return l.autoReplaceSvg===!0?at.replace:at[l.autoReplaceSvg]||at.replace}function Ja(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function Qa(t){return p.createElement(t)}function dn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ja:Qa}=e;if(typeof t=="string")return p.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(dn(o,{ceFn:n}))}),a}function Za(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const at={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(dn(n),e)}),e.getAttribute(z)===null&&l.keepOriginalSource){let n=p.createComment(Za(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Wt(e).indexOf(l.replacementClass))return at.replace(t);const a=new RegExp("".concat(l.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,c)=>(c===l.replacementClass||c.match(a)?i.toSvg.push(c):i.toNode.push(c),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>Z(o)).join(`
`);e.setAttribute(z,""),e.innerHTML=r}};function he(t){t()}function mn(t,e){const n=typeof e=="function"?e:nt;if(t.length===0)n();else{let a=he;l.mutateApproach===na&&(a=L.requestAnimationFrame||he),a(()=>{const r=Ka(),o=Kt.begin("mutate");t.map(r),o(),n()})}}let Jt=!1;function gn(){Jt=!0}function zt(){Jt=!1}let ot=null;function ye(t){if(!ae||!l.observeMutations)return;const{treeCallback:e=nt,nodeCallback:n=nt,pseudoElementsCallback:a=nt,observeMutationsRoot:r=p}=t;ot=new ae(o=>{if(Jt)return;const i=O();G(o).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!pe(c.addedNodes[0])&&(l.searchPseudoElements&&a(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&l.searchPseudoElements&&a(c.target.parentNode),c.type==="attributes"&&pe(c.target)&&~ca.indexOf(c.attributeName))if(c.attributeName==="class"&&Xa(c.target)){const{prefix:u,iconName:f}=ut(Wt(c.target));c.target.setAttribute(Ut,u||i),f&&c.target.setAttribute(Yt,f)}else qa(c.target)&&n(c.target)})}),I&&ot.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function tr(){ot&&ot.disconnect()}function er(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],c=o.slice(1);return i&&c.length>0&&(a[i]=c.join(":").trim()),a},{})),n}function nr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ut(Wt(t));return r.prefix||(r.prefix=O()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ka(r.prefix,t.innerText)||Xt(r.prefix,Mt(t.innerText))),!r.iconName&&l.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ar(t){const e=G(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return l.autoA11y&&(n?e["aria-labelledby"]="".concat(l.replacementClass,"-title-").concat(a||K()):(e["aria-hidden"]="true",e.focusable="false")),e}function rr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:S,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=nr(t),o=ar(t),i=Lt("parseNodeAttributes",{},t);let c=e.styleParser?er(t):[];return s({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:S,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:o}},i)}const{styles:or}=C;function pn(t){const e=l.autoReplaceSvg==="nest"?be(t,{styleParser:!1}):be(t);return~e.extra.classes.indexOf(Xe)?T("generateLayersText",t,e):T("generateSvgReplacementMutation",t,e)}function ir(){return[...Bn,...St]}function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();const n=p.documentElement.classList,a=d=>n.add("".concat(ie,"-").concat(d)),r=d=>n.remove("".concat(ie,"-").concat(d)),o=l.autoFetchSvg?ir():$e.concat(Object.keys(or));o.includes("fa")||o.push("fa");const i=[".".concat(Xe,":not([").concat(z,"])")].concat(o.map(d=>".".concat(d,":not([").concat(z,"])"))).join(", ");if(i.length===0)return Promise.resolve();let c=[];try{c=G(t.querySelectorAll(i))}catch{}if(c.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Kt.begin("onTree"),f=c.reduce((d,g)=>{try{const m=pn(g);m&&d.push(m)}catch(m){He||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,g)=>{Promise.all(f).then(m=>{mn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),g(m)})})}function sr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pn(t).then(n=>{n&&mn([n],e)})}function cr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ot(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ot(r||{})),t(a,s(s({},n),{},{mask:r}))}}const lr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=S,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:c=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:g,iconName:m,icon:y}=t;return dt(s({type:"icon"},t),()=>(R("beforeDOMElementCreation",{iconDefinition:t,params:e}),l.autoA11y&&(i?f["aria-labelledby"]="".concat(l.replacementClass,"-title-").concat(c||K()):(f["aria-hidden"]="true",f.focusable="false")),qt({icons:{main:Tt(y),mask:r?Tt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:m,transform:s(s({},S),n),symbol:a,title:i,maskId:o,titleId:c,extra:{attributes:f,styles:d,classes:u}})))};var fr={mixout(){return{icon:cr(lr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ve,t.nodeCallback=sr,t}}},provides(t){t.i2svg=function(e){const{node:n=p,callback:a=()=>{}}=e;return ve(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:c,symbol:u,mask:f,maskId:d,extra:g}=n;return new Promise((m,y)=>{Promise.all([Ft(a,i),f.iconName?Ft(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[F,x]=M;m([e,qt({icons:{main:F,mask:x},prefix:i,iconName:a,transform:c,symbol:u,maskId:d,title:r,titleId:o,extra:g,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const c=lt(i);c.length>0&&(a.style=c);let u;return Ht(o)&&(u=T("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},ur={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return dt({type:"layer"},()=>{R("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(l.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},dr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return dt({type:"counter",content:t},()=>(R("beforeDOMElementCreation",{content:t,params:e}),Ga({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(l.cssPrefix,"-layers-counter"),...a]}})))}}}},mr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=S,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return dt({type:"text",content:t},()=>(R("beforeDOMElementCreation",{content:t,params:e}),me({content:t,transform:s(s({},S),n),title:a,extra:{attributes:o,styles:i,classes:["".concat(l.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,c=null;if(je){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/u,c=f.height/u}return l.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,me({content:e.innerHTML,width:i,height:c,transform:r,title:a,extra:o,watchable:!0})])}}};const gr=new RegExp('"',"ug"),xe=[1105920,1112319],Ae=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),Rn),ta),Vn),Rt=Object.keys(Ae).reduce((t,e)=>(t[e.toLowerCase()]=Ae[e],t),{}),pr=Object.keys(Rt).reduce((t,e)=>{const n=Rt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function hr(t){const e=t.replace(gr,""),n=wa(e,0),a=n>=xe[0]&&n<=xe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Mt(r?e[0]:e),isSecondary:a||r}}function yr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Rt[n]||{})[r]||pr[n]}function we(t,e){const n="".concat(ea).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=G(t.children).filter(m=>m.getAttribute(Et)===e)[0],c=L.getComputedStyle(t,e),u=c.getPropertyValue("font-family"),f=u.match(ia),d=c.getPropertyValue("font-weight"),g=c.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&g!=="none"&&g!==""){const m=c.getPropertyValue("content");let y=yr(u,d);const{value:M,isSecondary:F}=hr(m),x=f[0].startsWith("FontAwesome");let E=Xt(y,M),b=E;if(x){const A=Ia(M);A.iconName&&A.prefix&&(E=A.iconName,y=A.prefix)}if(E&&!F&&(!i||i.getAttribute(Ut)!==y||i.getAttribute(Yt)!==b)){t.setAttribute(n,b),i&&t.removeChild(i);const A=rr(),{extra:D}=A;D.attributes[Et]=e,Ft(E,y).then(j=>{const hn=qt(s(s({},A),{},{icons:{main:j,mask:ln()},prefix:y,iconName:b,extra:D,watchable:!0})),mt=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=hn.map(yn=>Z(yn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function br(t){return Promise.all([we(t,"::before"),we(t,"::after")])}function vr(t){return t.parentNode!==document.head&&!~aa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Et)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Se(t){if(I)return new Promise((e,n)=>{const a=G(t.querySelectorAll("*")).filter(vr).map(br),r=Kt.begin("searchPseudoElements");gn(),Promise.all(a).then(()=>{r(),zt(),e()}).catch(()=>{r(),zt(),n()})})}var xr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Se,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=p}=e;l.searchPseudoElements&&Se(n)}}};let Ce=!1;var Ar={mixout(){return{dom:{unwatch(){gn(),Ce=!0}}}},hooks(){return{bootstrap(){ye(Lt("mutationObserverCallbacks",{}))},noAuto(){tr()},watch(t){const{observeMutationsRoot:e}=t;Ce?zt():ye(Lt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ee=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var wr={mixout(){return{parse:{transform:t=>Ee(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ee(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},m={outer:i,inner:d,path:g};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),m.path)}]}]}}}};const vt={x:0,y:0,width:"100%",height:"100%"};function Pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Sr(t){return t.tag==="g"?t.children:[t]}var Cr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ut(n.split(" ").map(r=>r.trim())):ln();return a.prefix||(a.prefix=O()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:c}=e;const{width:u,icon:f}=r,{width:d,icon:g}=o,m=ha({transform:c,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:s(s({},vt),{},{fill:"white"})},M=f.children?{children:f.children.map(Pe)}:{},F={tag:"g",attributes:s({},m.inner),children:[Pe(s({tag:f.tag,attributes:s(s({},f.attributes),m.path)},M))]},x={tag:"g",attributes:s({},m.outer),children:[F]},E="mask-".concat(i||K()),b="clip-".concat(i||K()),A={tag:"mask",attributes:s(s({},vt),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Sr(g)},A]};return n.push(D,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(E,")")},vt)}),{children:n,attributes:a}}}},Er={provides(t){let e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=s(s({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:s(s({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Pr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},kr=[va,fr,ur,dr,mr,xr,Ar,wr,Cr,Er,Pr];Ra(kr,{mixoutsTo:v});v.noAuto;v.config;const Ir=v.library;v.dom;v.parse;v.findIconDefinition;v.toHtml;const Mr=v.icon;v.layer;v.text;v.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Nr={prefix:"fas",iconName:"cloud",icon:[640,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]},Lr={prefix:"fas",iconName:"cloud-showers-heavy",icon:[512,512,[],"f740","M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z"]},Or={prefix:"fas",iconName:"cloud-sun-rain",icon:[640,512,[127782],"f743","M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l10.4 62.4c-23.3 10.8-42.9 28.4-56 50.3c-14.6-9-31.8-14.1-50.2-14.1c-53 0-96 43-96 96c0 35.5 19.3 66.6 48 83.2c.8 31.8 13.2 60.7 33.1 82.7l-56 39.2c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM208 144c13.8 0 26.7 4.4 37.1 11.9c-1.2 4.1-2.2 8.3-3 12.6c-37.9 14.6-67.2 46.6-77.8 86.4C151.8 243.1 144 226.5 144 208c0-35.3 28.7-64 64-64zm69.4 276c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm74.5-116.1c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"]},Tr={prefix:"fas",iconName:"smog",icon:[640,512,[],"f75f","M32 144c0 79.5 64.5 144 144 144l123.3 0c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32l27.3 0c61.9 0 112-50.1 112-112s-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144zM616 368l-336 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-64 96l-112 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-192 0L24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zM224 392c0-13.3-10.7-24-24-24L96 368c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0c13.3 0 24-10.7 24-24z"]},Fr={prefix:"fas",iconName:"snowflake",icon:[448,512,[10052,10054],"f2dc","M224 0c17.7 0 32 14.3 32 32l0 30.1 15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49 0 70.3 61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7l0 70.3 49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15 0 30.1c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-30.1-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49 0-70.3-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3l0-70.3L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15L192 32c0-17.7 14.3-32 32-32z"]},_r={prefix:"fas",iconName:"question",icon:[320,512,[10067,10068,61736],"3f","M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},zr={prefix:"fas",iconName:"cloud-rain",icon:[512,512,[127783,9926],"f73d","M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3z"]},Rr={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"]},Dr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},jr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},Br={prefix:"fas",iconName:"cloud-moon-rain",icon:[576,512,[],"f73c","M481.2 0C417 0 363.5 46.5 353.7 107.6c35.4 17.6 60.2 53.3 62.1 95.1c23.2 11 42 29.7 53.1 52.7c4 .4 8.1 .6 12.3 .6c34.9 0 66.7-13.8 89.9-36.1c5.1-4.9 6.4-12.5 3.2-18.7s-10.1-9.7-17-8.6c-4.9 .8-10 1.3-15.2 1.3c-49 0-88.4-39.3-88.4-87.4c0-32.6 18-61.1 44.9-76.1c6.1-3.4 9.3-10.5 7.8-17.4s-7.3-12-14.3-12.6c-3.6-.3-7.3-.5-10.9-.5zM367.9 383.9c44.2 0 80-35.8 80-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C241.3 114.6 210.8 96 176 96c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6c0 53 43 96 96 96l271.9 0zM85.4 420.1c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3z"]},$r={prefix:"fas",iconName:"cloud-moon",icon:[640,512,[],"f6c3","M495.8 0c5.5 0 10.9 .2 16.3 .7c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-44.4 25.2-74.4 73-74.4 127.8c0 81 65.5 146.6 146.2 146.6c8.6 0 17-.7 25.1-2.1c6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7c-34.5 33.6-81.7 54.4-133.6 54.4c-9.3 0-18.4-.7-27.4-1.9c-11.2-22.6-29.8-40.9-52.6-51.7c-2.7-58.5-50.3-105.3-109.2-106.7c-1.7-10.4-2.6-21-2.6-31.8C304 86.1 389.8 0 495.8 0zM447.9 431.9c0 44.2-35.8 80-80 80L96 511.9c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"]},Ur={prefix:"fas",iconName:"cloud-sun",icon:[640,512,[9925],"f6c4","M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM639.9 431.9c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"]};Ir.add(Dr,jr,Nr,Ur,$r,zr,Or,Br,Lr,Rr,Tr,Fr,_r);const Yr={"01d":"sun","01n":"moon","02d":"cloud-sun","02n":"cloud-moon","03d":"cloud","03n":"cloud","04d":"cloud","04n":"cloud","09d":"cloud-showers-heavy","09n":"cloud-showers-heavy","10d":"cloud-sun-rain","10n":"cloud-moon-rain","11d":"cloud-bolt","11n":"cloud-bolt","13d":"snowflake","13n":"snowflake","50d":"smog","50n":"smog"},ke=document.getElementById("weather-large-icon");function Gr(t){const e=Yr[t]||"question",n=Mr({prefix:"fas",iconName:e});n&&(ke.innerHTML="",ke.appendChild(n.node[0]))}const Wr=document.getElementById("city-name"),Hr=document.getElementById("region-name"),Vr=document.getElementById("day-infos"),Xr=document.getElementById("current-temperature"),qr=document.getElementsByClassName("grid-element"),Kr=document.getElementById("search-cord");function Jr(t){const e=Pn(t);for(const n of qr){if(!(n.id in e))continue;const a=n.querySelector(".data");a.textContent=e[n.id].value;const r=n.querySelectorAll(".expanded-info");if(!(!r||!r.length))for(const o of r){const i=o.id.replace(/-/g,"");i in e[n.id]&&(o.innerHTML=e[n.id][i])}}Kr.innerHTML=`<strong>Latitude: ${t.coord.lat} | Longitude: ${t.coord.lon}</strong>`}function Qr(t,e){const n=Math.ceil(t.main.temp-273.15),a=new Date().toLocaleDateString("pt-BR",{weekday:"long"}),r=t.timezone/60/60,o=new Date(t.dt*1e3).toLocaleTimeString("pt-BR",{timeZone:kn(e),hour:"2-digit",minute:"2-digit",hour12:!1});Vr.textContent=`Hoje é ${a}, ${o} (UTC${r})`,Wr.textContent=t.name,Hr.textContent=`${e}, Brasil`,Xr.textContent=`${n} °C`,Gr(t.weather[0].icon)}function Zr(t,e){!t||typeof t!="object"||(Qr(t,Fe(e)),Jr(t))}const to=document.getElementById("search-form"),xt=document.getElementById("submit-user-region"),it=document.getElementById("city-input"),Dt=document.getElementById("province-input"),Ie=document.getElementById("dashboard"),st=document.getElementById("invalid-city-label"),Me=document.getElementById("format-label"),Ne=document.getElementById("province-label"),Le=document.getElementById("minimun-characters-label"),eo=/^[\p{L}\s]+$/u;function jt(){const t=it.value,e=t.trim().length>3,n=eo.test(t);return st.textContent="Hmm.. Este nome não parece familiar",st.style.display=e&&n?"none":"inline",Le.classList.remove(e?"invalid":"valid"),Le.classList.add(e?"valid":"invalid"),Me.classList.remove(n?"invalid":"valid"),Me.classList.add(n?"valid":"invalid"),e&&n}function Bt(){const t=!!Fe(Dt.value);return Ne.classList.remove(t?"invalid":"valid"),Ne.classList.add(t?"valid":"invalid"),t}async function no(){if(!jt()||!Bt())return;xt.setAttribute("disabled","");const t=await Sn(it.value,Dt.value);if(!t||!t.weather)return st.textContent="Nada foi encontrado, verifique a região selecionada e tente novamente!",st.style.display="inline",xt.removeAttribute("disabled"),console.warn("No weather data found!");Zr(t,Dt.value),Ie.style.display="flex",Ie.scrollIntoView({behavior:"smooth",block:"center"}),$("#province-input").val("").trigger("change"),it.value="",jt(),Bt(),xt.removeAttribute("disabled")}to.addEventListener("submit",t=>{t.preventDefault(),no()});it.addEventListener("input",jt);$("#province-input").on("select2:select",Bt);function ao(){const t=_e(),e=document.getElementById("province-input");for(const n of t){const a=document.createElement("option");a.value=n.acronym,a.textContent=n.name,e.appendChild(a)}$("#province-input").select2({placeholder:"Estado",allowClear:!1,language:"pt-BR",width:"style",dropdownCssClass:"province-select2-dropdown",theme:"SimpleWeather"})}ao();
