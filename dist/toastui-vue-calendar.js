!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("tui-calendar")):"function"==typeof define&&define.amd?define(["tui-calendar"],t):"object"==typeof exports?exports.toastui=t(require("tui-calendar")):e.toastui=t(e.tui.Calendar)}(window,function(e){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var i=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"tuiCalendar"})};i._withStripped=!0;var a=n(0),r=n.n(a),s=["start","category"];var o=function(e,t,n,i,a,r,s,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}({name:"ToastUICalendar",props:{calendars:{type:Array,default:function(){return[]}},schedules:{type:Array,default:function(){return[]},validator:function(e){var t=!1;return e.forEach(function(e){t=s.some(function(t){return!e.hasOwnProperty(t)})}),!t}},view:{type:String,default:"week"},taskView:{type:[Boolean,Array],default:!0},scheduleView:{type:[Boolean,Array],default:!0},theme:{type:Object,default:function(){return{}}},template:{type:Object,default:function(){return{}}},week:{type:Object,default:function(){return{}}},month:{type:Object,default:function(){return{}}},useCreationPopup:{type:Boolean,default:!0},useDetailPopup:{type:Boolean,default:!0},timezones:{type:Array,default:function(){return[]}},disableDblClick:{type:Boolean,default:!1},disableClick:{type:Boolean,default:!1},isReadOnly:{type:Boolean,default:!1},usageStatistics:{type:Boolean,default:!0}},watch:{calendars:function(e){this.calendarInstance.setCalendars(e)},schedules:function(){this.calendarInstance.clear(),this.reflectSchedules()},view:function(e){this.calendarInstance.changeView(e,!0)},taskView:function(e){this.calendarInstance.setOptions({taskView:e})},scheduleView:function(e){this.calendarInstance.setOptions({scheduleView:e})},theme:{handler:function(e){this.calendarInstance.setTheme(this.cloneData(e))},deep:!0},week:{handler:function(e){var t="week"!==this.view&&"day"!==this.view;this.calendarInstance.setOptions({week:this.cloneData(e)},t)},deep:!0},month:{handler:function(e){var t="month"!==this.view;this.calendarInstance.setOptions({month:this.cloneData(e)},t)},deep:!0},timezones:function(e){this.calendarInstance.setOptions({timezones:e})},disableDblClick:function(e){this.calendarInstance.setOptions({disableDblClick:e})},disableClick:function(e){this.calendarInstance.setOptions({disableClick:e})},isReadOnly:function(e){this.calendarInstance.setOptions({isReadOnly:e})}},mounted:function(){this.calendarInstance=new r.a(this.$refs.tuiCalendar,{defaultView:this.view,taskView:this.taskView,scheduleView:this.scheduleView,theme:this.theme,template:this.template,week:this.week,month:this.month,calendars:this.calendars,useCreationPopup:this.useCreationPopup,useDetailPopup:this.useDetailPopup,timezones:this.timezones,disableDblClick:this.disableDblClick,disableClick:this.disableClick,isReadOnly:this.isReadOnly,usageStatistics:this.usageStatistics}),this.addEventListeners(),this.reflectSchedules()},beforeDestroy:function(){this.calendarInstance.off(),this.calendarInstance.destroy()},methods:{cloneData:function(e){return JSON.parse(JSON.stringify(e))},addEventListeners:function(){for(var e=this,t=function(){var t=i[n];e.calendarInstance.on(t,function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e.$emit.apply(e,[t].concat(i))})},n=0,i=Object.keys(this.$listeners);n<i.length;n++)t()},reflectSchedules:function(){this.schedules.length>0&&this.invoke("createSchedules",this.schedules)},getRootElement:function(){return this.$refs.tuiCalendar},invoke:function(e){var t;if(this.calendarInstance[e]){for(var n,i=arguments.length,a=new Array(i>1?i-1:0),r=1;r<i;r++)a[r-1]=arguments[r];t=(n=this.calendarInstance)[e].apply(n,a)}return t}}},i,[],!1,null,null,null);o.options.__file="src/Calendar.vue";var l=o.exports;n.d(t,"Calendar",function(){return l})}])});