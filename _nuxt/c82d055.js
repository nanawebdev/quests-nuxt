(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,r){"use strict";r(49);var o={computed:{pageClass:function(){return"/profile"===this.$route.path?"profile-page":"/news"===this.$route.path?"news-list-page":""},canShowNavigationPanel:function(){return!!["/","/news","/profile"].includes(this.$route.path)}}},l=r(20),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("header"),e._v(" "),r("main",{class:e.pageClass},[r("Nuxt"),e._v(" "),e.canShowNavigationPanel?r("NavigationPanel"):e._e()],1),e._v(" "),r("footer")])}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{NavigationPanel:r(187).default})},138:function(e,t,r){r(139),e.exports=r(140)},183:function(e,t,r){var content=r(184);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(60).default)("27894c40",content,!0,{sourceMap:!1})},184:function(e,t,r){var o=r(59),l=r(185),n=r(186),d=o(!1),f=l(n);d.push([e.i,':root{--profile-color:#3aa76d;--quests-color:#ff375f;--login-color:#276ef1;--news-color:#00d0ff;--divider:#28282c;--overlay:rgba(0,0,0,0.5);--bottomsheet-light:#f4f4f6;--default-light:#fff;--default-light-08:hsla(0,0%,100%,0.08);--default-light-12:hsla(0,0%,100%,0.12);--default-light-25:hsla(0,0%,100%,0.25);--default-light-50:hsla(0,0%,100%,0.5);--default-light-75:hsla(0,0%,100%,0.75);--default-dark:#101010;--default-dark-25:rgba(16,16,16,0.25);--default-dark-50:rgba(16,16,16,0.5);--default-dark-75:rgba(16,16,16,0.75)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;white-space:nowrap;-webkit-clip-path:inset(100%);clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}*{box-sizing:border-box}p{margin:0;padding:0}body,html{height:100%;min-height:100%}body{margin:0;font-family:"Roboto","Arial",sans-serif;font-style:normal;font-weight:700;background-color:#101010;background-color:var(--default-dark)}body,img{color:#fff;color:var(--default-light)}li{list-style-type:none}.wrapper{background-color:#101010;background-color:var(--default-dark);width:800px;margin:0 auto;padding-left:80px;padding-right:80px;flex-shrink:0;flex-grow:2}.wrapper,main{min-height:100%;position:relative}#__layout,#__nuxt{height:100%}.main-page,.quest-page{background-image:repeating-linear-gradient(90deg,#101010 0,rgba(16,16,16,.5) 25%,rgba(16,16,16,.5) 70%,#101010),repeating-linear-gradient(90deg,#ff375f 0,#ff375f 2px,#101010 0,#101010 60px);background-image:repeating-linear-gradient(90deg,var(--default-dark) 0,var(--default-dark-50) 25%,var(--default-dark-50) 70%,var(--default-dark)),repeating-linear-gradient(90deg,var(--quests-color) 0,var(--quests-color) 2px,var(--default-dark) 0,var(--default-dark) 60px);margin:0;padding:0}.login-page{background-image:repeating-linear-gradient(90deg,#101010 0,rgba(16,16,16,.5) 25%,rgba(16,16,16,.5) 70%,#101010),repeating-linear-gradient(90deg,#276ef1 0,#276ef1 2px,#101010 0,#101010 60px);background-image:repeating-linear-gradient(90deg,var(--default-dark) 0,var(--default-dark-50) 25%,var(--default-dark-50) 70%,var(--default-dark)),repeating-linear-gradient(90deg,var(--login-color) 0,var(--login-color) 2px,var(--default-dark) 0,var(--default-dark) 60px)}.profile,.registration-page{background-image:repeating-linear-gradient(90deg,#101010 0,rgba(16,16,16,.5) 25%,rgba(16,16,16,.5) 70%,#101010),repeating-linear-gradient(90deg,#3aa76d 0,#3aa76d 2px,#101010 0,#101010 60px);background-image:repeating-linear-gradient(90deg,var(--default-dark) 0,var(--default-dark-50) 25%,var(--default-dark-50) 70%,var(--default-dark)),repeating-linear-gradient(90deg,var(--profile-color) 0,var(--profile-color) 2px,var(--default-dark) 0,var(--default-dark) 60px)}.news,.news-page{background-image:repeating-linear-gradient(90deg,#101010 0,rgba(16,16,16,.5) 25%,rgba(16,16,16,.5) 70%,#101010),repeating-linear-gradient(90deg,#00d0ff 0,#00d0ff 2px,#101010 0,#101010 60px);background-image:repeating-linear-gradient(90deg,var(--default-dark) 0,var(--default-dark-50) 25%,var(--default-dark-50) 70%,var(--default-dark)),repeating-linear-gradient(90deg,var(--news-color) 0,var(--news-color) 2px,var(--default-dark) 0,var(--default-dark) 60px)}.cross{width:32px;height:32px;stroke:#fff;stroke:var(--default-light);position:absolute;top:38px;left:-49px}.cross:hover{stroke:hsla(0,0%,100%,.75);stroke:var(--default-light-75)}.title{font-size:24px;line-height:28px;margin:0 0 4px}.subtitle{font-weight:400;font-size:12px;line-height:16px}.divider{width:100%;height:1px;background-color:#28282c;background-color:var(--divider)}.image-wrapper{box-shadow:inset 0 0 2px 0 #3aa76d;box-shadow:inset 0 0 2px 0 var(--profile-color);width:60px;height:60px}.main-image{height:359px;width:640px}@media(max-width:640px){.wrapper{width:auto;padding:0}.main-image{width:100%;height:202px}.cross{top:10px;left:10px}}.navigation-panel-wrapper{width:640px;position:fixed;display:flex;bottom:24px}.navigation-panel{width:100%;border:1px solid #ff375f;border:1px solid var(--quests-color);border-radius:16px;display:flex;justify-content:space-between;overflow:hidden;height:56px;align-items:center;background-color:#101010;background-color:var(--default-dark)}.panel-page-name{font-family:"Roboto","Arial",sans-serif;font-weight:400;font-size:12px;line-height:16px;color:hsla(0,0%,100%,.5);color:var(--default-light-50);transition:color .3s}.panel-link{display:flex;flex-direction:column;justify-content:center;align-items:center;text-decoration:none;padding:8px 16px;transition:background-color .3s}.icon-fill{fill:#fff;fill:var(--default-light);fill-opacity:.5}.panel-item-quests._exact_active .icon-fill{fill:#ff375f;fill:var(--quests-color);fill-opacity:1}.panel-item-quests._exact_active .panel-page-name{color:#ff375f;color:var(--quests-color)}.panel-item-profile._exact_active .icon-fill{fill:#3aa76d;fill:var(--profile-color);fill-opacity:1}.panel-item-profile._exact_active .panel-page-name{color:#3aa76d;color:var(--profile-color)}.profile-page .navigation-panel{border-color:#3aa76d;border-color:var(--profile-color)}.panel-item-news._exact_active .icon-fill{fill:#00d0ff;fill:var(--news-color);fill-opacity:1}.news-page .navigation-panel{border-color:#00d0ff;border-color:var(--news-color)}.panel-link:hover .panel-page-name{color:#fff;color:var(--default-light)}.panel-link:hover .icon-fill{fill:#fff;fill:var(--default-light)}@media(max-width:640px){.navigation-panel-wrapper{width:100%;bottom:22px;padding:0 21px}}.wrapper{padding-top:36px}.divider{margin-top:32px}.social-links{padding:0;margin:34px 0 0;display:grid;grid-template-rows:-webkit-max-content;grid-template-rows:max-content;grid-row-gap:23px;row-gap:23px}.social-links li{list-style:none}.social-link{font-size:40px;line-height:40px;letter-spacing:.04em}@media(max-width:640px){.login-page .wrapper{padding:36px 20px}}.registration-page .wrapper,.registration-page main{height:100%}.registration-page-wrapper{display:grid;grid-template-rows:1fr -webkit-min-content;grid-template-rows:1fr min-content;min-height:100%;padding-bottom:24px}.registration-user-data .image-wrapper{border-radius:50%}.registration-user-data{display:grid;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr;margin-top:40px}.registration-avatar{width:100px;height:100px;border:1px solid #3aa76d;border:1px solid var(--profile-color);border-radius:50%;display:flex;justify-content:center;align-items:center}.registration-name-input{font-weight:400;position:relative;margin-left:32px;display:flex;flex-direction:column;justify-content:center}.input{background-color:transparent;border:none;color:#fff;color:var(--default-light);outline-style:none}.registration-name-input .title{color:hsla(0,0%,100%,.5);color:var(--default-light-50);font-size:12px;line-height:16px;margin-top:0}.registration-name-input .user-name{font-size:14px;line-height:20px}.registration-name-input:after{position:absolute;content:"";bottom:20px;height:2px;width:100%;background-color:#28282c;background-color:var(--divider)}.terms-of-use-text{font-weight:400;font-size:12px;line-height:16px;margin:4px;position:relative;padding:0 0 0 45px}.terms-of-use-text,.terms-of-use-text a{color:hsla(0,0%,100%,.75);color:var(--default-light-75)}.terms-of-use-wrapper{display:grid;position:relative;grid-template-rows:-webkit-min-content -webkit-min-content;grid-template-rows:min-content min-content;grid-row-gap:20px;row-gap:20px}.reg-checkbox{opacity:0;z-index:30;cursor:pointer}.reg-checkbox,.terms-of-use-text:before{width:24px;height:24px;position:absolute;left:0;top:0}.terms-of-use-text:before{content:"";background-color:#28282c;background-color:var(--divider);border-radius:4px}.reg-checkbox:checked+.terms-of-use-text:before{background-color:none;background-image:url('+f+');background-size:contain}@media(max-width:640px){.registration-avatar{width:80px;height:80px}.registration-user-data .image-wrapper,.user-avatar{width:48px;height:48px}.registration-name-input:after{bottom:10px}.registration-page .wrapper{padding-top:36px;padding-bottom:24px}.registration-page .button{margin-bottom:0}.registration-user-data{margin-top:33px}.registration-name-input{margin-left:20px}.registration-page-wrapper{padding-bottom:0}}.quests-list{list-style:none;padding:0 0 100px;margin:0}.preview-quest{display:grid;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;position:relative;text-decoration:none;padding-top:24px}.preview-quest .image-wrapper{border-radius:8px}.preview-quest-avatar{width:60px;height:60px;border-radius:8px}.preview-text{margin-left:16px}.preview-title{font-size:16px;line-height:24px;margin:0 0 4px;color:#fff;color:var(--default-light);padding-top:2px}.episodes-wrapper{display:flex;margin-top:8px}.episodes,.episodes-wrapper{font-weight:400;font-size:12px;line-height:16px}.episodes{color:hsla(0,0%,100%,.25);color:var(--default-light-25);margin-left:4px;margin-bottom:12px}.episodes-icon{color:#fff;color:var(--default-light)}.quest-description{color:hsla(0,0%,100%,.75);color:var(--default-light-75);font-size:14px;line-height:20px;font-weight:400;overflow-y:hidden;max-height:40px}@media(max-width:640px){.preview-quest{padding-top:15px}.preview-quest .divider{margin-top:4px}}.wrapper{padding-top:15px}.quests-list{padding:0 20px 100px}.main-page .quest-status{color:#fff;color:var(--default-light);position:absolute;top:88px;left:2px;font-weight:400;font-size:10px;line-height:12px}@media(max-width:640px){.main-page .wrapper{padding:15px 0 0}}.profile .wrapper{padding:0 60px}.profile-wrapper{background:linear-gradient(180deg,rgba(16,16,16,0),rgba(58,167,109,.25));border-radius:0 0 16px 16px;padding:48px 20px 20px}.user-info{display:flex}.profile .divider{margin-top:21px}.profile-wrapper .divider{margin-top:0;background-color:#101010;background-color:var(--default-dark)}.user-avatar{width:60px;height:60px;border-radius:50%}.user-name{font-size:16px;line-height:24px;margin:0;font-weight:700}.user-plan{color:hsla(0,0%,100%,.75);color:var(--default-light-75)}.cash,.user-plan{font-weight:300;font-size:12px;line-height:16px}.cash{margin:0;color:hsla(0,0%,100%,.25);color:var(--default-light-25);padding-top:20px}.cash-info{font-weight:300;font-size:24px;line-height:28px;display:flex;margin-top:4px}.dot{margin:0 6px;opacity:.25}.name-wrapper{display:flex;flex-direction:column;margin-left:20px;padding-top:7px}.cash-wrapper{margin-top:30px;position:relative}.list-title{margin:0;padding-top:31px;padding-left:20px;font-size:20px;line-height:24px}.profile .image-wrapper{position:relative}.quest-status{color:#fff;color:var(--default-light);position:absolute;top:64px;left:0;font-weight:400;font-size:10px;line-height:12px}.quest-status-review{color:hsla(0,0%,100%,.5)}.quest-status-private{color:#ed6e33}.quest-status-progress{color:#276ef1}.profile .preview-quest{position:relative;padding-top:20px}.open-bottomsheet{position:absolute;top:24px;right:0;width:25px;height:25px;background-color:transparent;border:none;display:flex;align-items:center;justify-content:center;padding:0}.profile .navigation-panel-wrapper{margin-left:20px}@media(max-width:640px){.profile .wrapper{padding:0}}.bottomsheet-wrapper{position:fixed;z-index:40;bottom:0;left:50%;margin-left:-320px;display:none}.bottomsheet{background-color:#fff;background-color:var(--default-light);color:#101010;color:var(--default-dark);border-top-left-radius:16px;border-top-right-radius:16px;padding:20px 20px 16px;position:relative;width:640px}.bottomsheet:after{position:absolute;content:"";top:8px;left:296px;background-color:rgba(16,16,16,.25);background-color:var(--default-dark-25);height:4px;width:48px;border-radius:2px}.bottomsheet .preview-title{color:#101010;color:var(--default-dark)}.bottomsheet .quest-description{color:rgba(16,16,16,.75);color:var(--default-dark-75)}.actions-wrapper{display:flex;flex-direction:column;align-items:flex-start;margin-left:76px;padding-top:10px}.bottomsheet-action{font-weight:400;font-size:16px;line-height:20px;color:rgba(16,16,16,.75);color:var(--default-dark-75);border:none;background-color:transparent;cursor:pointer;padding:10px 0}.bottomsheet .divider{background-color:#f4f4f6;background-color:var(--bottomsheet-light);margin-top:24px}.bottomsheet .episodes-wrapper{color:hsla(0,0%,100%,.5);color:var(--default-light-50)}.bottomsheet .episodes{color:rgba(16,16,16,.5);color:var(--default-dark-50)}.bottomsheet .preview-quest{padding-top:0}.bottomsheet .episodes-icon{color:#101010;color:var(--default-dark)}.news-list{list-style:none;margin:0;padding:40px 0 100px}.preview-news{text-decoration:none;display:grid;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr;grid-column-gap:32px;-moz-column-gap:32px;column-gap:32px;font-weight:400;margin-bottom:24px}.preview-news .image-wrapper{width:80px;height:80px;border-radius:8px;box-shadow:inset 0 0 2px 0 #00d0ff;box-shadow:inset 0 0 2px 0 var(--news-color)}.news-title{color:#fff;color:var(--default-light);font-size:16px;line-height:24px;margin:0}.main-description{color:hsla(0,0%,100%,.75);color:var(--default-light-75);font-size:14px;line-height:20px;margin:0}.preview-main-text{display:flex;flex-direction:column;height:80px;justify-content:center}.short-description{color:hsla(0,0%,100%,.75);color:var(--default-light-75);font-size:14px;line-height:20px;font-weight:400;overflow-y:hidden}.text-wrapper{height:104px;position:relative}.text-wrapper:after{position:absolute;content:"";bottom:0;height:1px;width:100%;background-color:#28282c;background-color:var(--divider)}.news-page .news-list,.news-page .quests-list{padding-bottom:0}.news-page .quests-list{padding-left:0}.news-page .wrapper{padding-top:0}.news-page .list-title{font-weight:700;font-size:24px;line-height:28px;margin:0;padding-left:0}.news-page .divider{margin-top:21px}.list-wrapper{margin-bottom:16px}.list-wrapper .news-list,.list-wrapper .preview-quest{padding-top:16px}.news-page .quest-status{top:80px;left:2px}@media(max-width:640px){.news-page .wrapper{padding:0}.news-page .lists,.news-page .main-text{padding:0 20px}.news-page .quests-list li:last-child{padding:0}.list-wrapper{margin-bottom:0}.news-page .news-list{padding:16px 0 0}}.news .navigation-panel{border-color:#00d0ff;border-color:var(--news-color)}.news .news-list{padding:10px 20px 80px}.main-description .title{margin:12px 0 0}.main-description .description{font-family:"PT Serif",serif;margin-top:16px;font-weight:400;font-size:18px;line-height:28px}.main-text{margin-bottom:15px;color:#fff;color:var(--default-light)}.quest-page .wrapper{padding-top:0}.quest-page .main-text{padding-left:20px;font-size:14px;line-height:20px;margin-top:10px;font-weight:400}.author-name{font-size:14px;line-height:20px;color:hsla(0,0%,100%,.25);color:var(--default-light-25)}.quest-page .description{margin-top:8px;font-size:14px;line-height:20px}.episodes-info-wrapper{margin-top:23px}.episodes-info{display:flex;margin-top:8px;font-weight:400;font-size:12px;line-height:16px}.episodes-info .info-item{margin-left:8px}@media(max-width:640px){.episodes-info-wrapper{margin:22px 0 0}}.button-wrapper{width:640px;position:fixed;z-index:10;bottom:24px;padding:0 20px}.button{background-color:#276ef1;background-color:var(--login-color);color:#fff;color:var(--default-light);border-radius:8px;display:flex;justify-content:center;align-items:center;height:48px;font-size:16px;line-height:20px;font-weight:700;border:none;outline:none;cursor:pointer;transition:.3s;width:100%}.button[disabled]{background-color:hsla(0,0%,100%,.12);background-color:var(--default-light-12);color:hsla(0,0%,100%,.25);color:var(--default-light-25);cursor:default}.button[disabled]:hover{opacity:1}.button:hover{opacity:.7}@media(max-width:640px){.button-wrapper{width:100%;bottom:22px;padding:0 21px}}.overlay{position:fixed;min-width:100%;min-height:100%;z-index:10;background-color:rgba(0,0,0,.5);background-color:var(--overlay);display:flex;justify-content:center;align-items:center;margin:0;padding:0}.loader-wrapper{position:absolute;top:50%;left:50%;margin-top:-40px;margin-left:-40px;z-index:30}.loader{box-shadow:inset 0 0 0 16px hsla(0,0%,100%,.08);box-shadow:inset 0 0 0 16px var(--default-light-08);border-radius:50%;display:flex;justify-content:center;align-items:center;width:80px;height:80px}.loader-item{width:48px;height:48px;position:absolute;top:16px;left:16px;stroke:#fff;stroke:var(--default-light);-webkit-animation:loader .5s linear infinite;animation:loader .5s linear infinite}.loader-logo{fill:#fff;fill:var(--default-light)}.loader-news .loader-item{stroke:#00d0ff;stroke:var(--news-color)}.loader-news .loader-logo{fill:#00d0ff;fill:var(--news-color)}.loader-quest .loader-item{stroke:#ff375f;stroke:var(--quests-color)}.loader-quest .loader-logo{fill:#ff375f;fill:var(--quests-color)}.loader-profile .loader-item{stroke:#3aa76d;stroke:var(--profile-color)}.loader-profile .loader-logo{fill:#3aa76d;fill:var(--profile-color)}.loader-login .loader-item{stroke:#276ef1;stroke:var(--login-color)}.loader-login .login-item{fill:#276ef1;fill:var(--login-color)}@-webkit-keyframes loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loader{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),e.exports=d},186:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBDMS43OTA4NiAwIDAgMS43OTA4NiAwIDRWMjBDMCAyMi4yMDkxIDEuNzkwODYgMjQgNCAyNEgyMEMyMi4yMDkxIDI0IDI0IDIyLjIwOTEgMjQgMjBWNEMyNCAxLjc5MDg2IDIyLjIwOTEgMCAyMCAwSDRaTTE4Ljg1MzYgNy4zNTM1NUMxOS4wNDg4IDcuMTU4MjkgMTkuMDQ4OCA2Ljg0MTcxIDE4Ljg1MzYgNi42NDY0NUMxOC42NTgzIDYuNDUxMTggMTguMzQxNyA2LjQ1MTE4IDE4LjE0NjQgNi42NDY0NUw5IDE1Ljc5MjlMNS44NTM1NSAxMi42NDY0QzUuNjU4MjkgMTIuNDUxMiA1LjM0MTcxIDEyLjQ1MTIgNS4xNDY0NSAxMi42NDY0QzQuOTUxMTggMTIuODQxNyA0Ljk1MTE4IDEzLjE1ODMgNS4xNDY0NSAxMy4zNTM2TDguNjQ2NDUgMTYuODUzNkM4Ljg0MTcxIDE3LjA0ODggOS4xNTgyOSAxNy4wNDg4IDkuMzUzNTUgMTYuODUzNkwxOC44NTM2IDcuMzUzNTVaIiBmaWxsPSIjMjc2RUYxIi8+Cjwvc3ZnPgo="},187:function(e,t,r){"use strict";r.r(t);var o=r(20),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navigation-panel-wrapper"},[r("div",{staticClass:"navigation-panel"},[r("NuxtLink",{staticClass:"panel-link panel-item-quests",attrs:{to:"/","exact-active-class":"_exact_active"}},[r("svg",{attrs:{width:"24",height:"23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"icon-fill",attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.25 21.095a10.512 10.512 0 005.061-7.103 5.983 5.983 0 001.57-.293 12.009 12.009 0 01-6.07 8.803 5.96 5.96 0 00-.56-1.407zM12 0c2.806 0 5.387.963 7.43 2.577-.485.23-.935.524-1.338.87A10.452 10.452 0 0012 1.5c-2.271 0-4.374.721-6.092 1.947a6.006 6.006 0 00-1.338-.87A11.949 11.949 0 0112 0zM1.689 13.992a10.512 10.512 0 005.06 7.103c-.243.438-.433.91-.56 1.407a12.009 12.009 0 01-6.07-8.803 5.983 5.983 0 001.57.293zM12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0 1.5a8 8 0 100-16 8 8 0 000 16zm0-5.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 1.5a4 4 0 100-8 4 4 0 000 8z",fill:"inherit"}})]),e._v(" "),r("span",{staticClass:"panel-page-name"},[e._v("Квесты")])]),e._v(" "),r("NuxtLink",{staticClass:"panel-link panel-item-news",attrs:{to:"/news","exact-active-class":"_exact_active"}},[r("svg",{staticClass:"panel-item",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"icon-fill",attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16 1.334l16 10.584h-.006H32l-9.575 17.723h-2.996l-2.462-3.692h-1.934L12.57 29.64H9.575L0 11.918 16 1.334zm0 0l-1.23 19.2-4.924-8.554-8.858-.056 9.13 16.733h1.926l2.462-3.693h2.988l2.462 3.693h1.927l9.129-16.733-8.858.056-4.923 8.553L16 1.334z",fill:"inherit","fill-opacity":"inherit"}})])]),e._v(" "),r("NuxtLink",{staticClass:"panel-link panel-item-profile",attrs:{to:"/profile","exact-active-class":"_exact_active"}},[r("svg",{attrs:{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"icon-fill",attrs:{opacity:"inherit","fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.5 13c-.5 1.5-3 2.5-4.5 2.5s-4-1-4.5-2.5c-1.665.833-2.984 2.358-3.379 4h15.757c-.394-1.642-1.713-3.167-3.378-4zm3.5 5H4c0 .73.237 1.402.654 2h14.692c.417-.598.654-1.27.654-2zm-8 5c-2.436 0-4.873-.742-6.405-2h12.81c-1.532 1.258-3.969 2-6.405 2z",fill:"inherit"}}),e._v(" "),r("path",{staticClass:"icon-fill",attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.874 5.78C17.24 3.34 15.059 1 12 1c-.686 0-1.328.118-1.918.328l7.792 4.453zM8.988 1.855a6.328 6.328 0 00-1.644 1.48L17.66 9.23c.155-.405.271-.818.34-1.23a4.85 4.85 0 00.06-.961L8.988 1.854zm7.019 10.003a8.719 8.719 0 001.23-1.717L6.786 4.167a6.57 6.57 0 00-.745 1.994l7.71 4.406.012-.007.01.02 2.235 1.277zm-.75.723C14.237 13.448 13.073 14 12 14c-.56 0-1.143-.15-1.72-.417l3.457-1.872 1.52.869zm-7.555-1.056a8.332 8.332 0 001.57 1.468l3.443-1.865-2.03-1.16-2.983 1.557zm1.951-2.146L5.937 7.254c.002.253.023.503.063.746.156.933.553 1.866 1.102 2.709l2.551-1.331z",fill:"inherit"}})]),e._v(" "),r("span",{staticClass:"panel-page-name"},[e._v("Профиль")])])],1)])}),[],!1,null,null,null);t.default=component.exports}},[[138,17,1,18]]]);