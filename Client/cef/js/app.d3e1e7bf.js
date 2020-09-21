(function(e){function t(t){for(var i,o,s=t[0],r=t[1],l=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var r=n[s];0!==c[r]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},c={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2743:function(e,t,n){},"3b24":function(e,t,n){"use strict";(function(e){t["a"]={name:"register",data:function(){return{username:"",email:"",password:"",confirmPassword:""}},methods:{changeWindow:function(){this.$emit("change-window")},register:function(){var t=/^[a-zA-Z0-9]+$/,n=/^[a-zA-Z1-9]+$/,i=/\S+@\S+\.\S+/;return this.password!==this.confirmPassword?e.app.addNotify("e","Passwords don't match"):t.test(this.password)?this.password.length>=8&&this.password.length<=32?n.test(this.username)?this.username.length>3&&this.username.length<17?i.test(this.email)?this.email.length>6&&this.email.length<49?void window.mp.trigger("client::auth:register",this.username,this.email,this.password):e.app.addNotify("e","E-mail must be between 6 and 48 characters"):e.app.addNotify("e","E-mail doesn't match the format"):e.app.addNotify("e","Login must be between 4 and 16 characters"):e.app.addNotify("e","Login can only contain a-z A-Z 1-9"):e.app.addNotify("e","Password must be between 8 and 32 characters"):e.app.addNotify("e","Password may only contain a-z A-Z 0-9")}}}}).call(this,n("c8ba"))},"3dfd":function(e,t,n){"use strict";var i=n("7a23"),c={id:"app"};function a(e,t,n,a,o,s){var r=Object(i["i"])("Auth"),l=Object(i["i"])("Notification");return Object(i["f"])(),Object(i["c"])("div",c,[o.interfaces.auth.show?(Object(i["f"])(),Object(i["c"])(r,{key:0})):Object(i["d"])("",!0),Object(i["e"])(l,{ref:"notify"},null,512)])}var o=Object(i["n"])("data-v-7835319f");Object(i["h"])("data-v-7835319f");var s=Object(i["e"])("div",{class:"blackBG"},null,-1),r={class:"auth__main"},l=Object(i["e"])("div",{class:"auth__server__name"},"Simple",-1),u={class:"auth__action"};Object(i["g"])();var d=o((function(e,t,n,c,a,o){var d=Object(i["i"])("Login"),f=Object(i["i"])("Register");return Object(i["f"])(),Object(i["c"])(i["a"],null,[s,Object(i["e"])("div",r,[l,Object(i["e"])("div",u,Object(i["j"])(a.action),1),a.loginWindow?(Object(i["f"])(),Object(i["c"])(d,{key:0,"onChange-window":t[1]||(t[1]=function(e){return o.changeWindow(!1)})})):(Object(i["f"])(),Object(i["c"])(f,{key:1,"onChange-window":t[2]||(t[2]=function(e){return o.changeWindow(!0)})}))])],64)})),f=Object(i["n"])("data-v-4d90550a");Object(i["h"])("data-v-4d90550a");var p={id:"login__block"};Object(i["g"])();var h=f((function(e,t,n,c,a,o){return Object(i["f"])(),Object(i["c"])("div",p,[Object(i["m"])(Object(i["e"])("input",{type:"text",spellcheck:"false",placeholder:"Login","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.username=e})},null,512),[[i["k"],a.username]]),Object(i["m"])(Object(i["e"])("input",{type:"password",spellcheck:"false",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[i["k"],a.password]]),Object(i["e"])("div",{class:"login__button",onClick:t[3]||(t[3]=function(){return o.login.apply(o,arguments)})},"Sign in"),Object(i["e"])("div",{class:"login__singup",onClick:t[4]||(t[4]=function(){return o.changeWindow.apply(o,arguments)})},"Sign up")])})),b={name:"login",data:function(){return{username:"",password:""}},methods:{changeWindow:function(){this.$emit("change-window")},login:function(){window.mp.trigger("client::auth:login",this.username,this.password)}}};n("ca7c");b.render=h,b.__scopeId="data-v-4d90550a";var m=b,O=Object(i["n"])("data-v-5e620cea");Object(i["h"])("data-v-5e620cea");var w={id:"signup__block"};Object(i["g"])();var j=O((function(e,t,n,c,a,o){return Object(i["f"])(),Object(i["c"])("div",w,[Object(i["m"])(Object(i["e"])("input",{type:"text",spellcheck:"false",placeholder:"Username","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.username=e})},null,512),[[i["k"],a.username]]),Object(i["m"])(Object(i["e"])("input",{type:"email",spellcheck:"false",placeholder:"E-mail","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.email=e})},null,512),[[i["k"],a.email]]),Object(i["m"])(Object(i["e"])("input",{type:"password",spellcheck:"false",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.password=e})},null,512),[[i["k"],a.password]]),Object(i["m"])(Object(i["e"])("input",{type:"password",spellcheck:"false",placeholder:"Password","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.confirmPassword=e})},null,512),[[i["k"],a.confirmPassword]]),Object(i["e"])("div",{class:"signup__button",onClick:t[5]||(t[5]=function(){return o.register.apply(o,arguments)})},"Sign up"),Object(i["e"])("div",{class:"signup__window",onClick:t[6]||(t[6]=function(){return o.changeWindow.apply(o,arguments)})},"Back")])})),g=n("3b24");n("5d5b");g["a"].render=j,g["a"].__scopeId="data-v-5e620cea";var v=g["a"],y={name:"auth",data:function(){return{loginWindow:!0,action:"Sign In"}},components:{Login:m,Register:v},methods:{changeWindow:function(e){this.loginWindow=e,this.action=e?"Sign In":"Sign Up"}}};n("aff2");y.render=d,y.__scopeId="data-v-7835319f";var _=y,x=Object(i["n"])("data-v-bdd5c6b2");Object(i["h"])("data-v-bdd5c6b2");var k={id:"notice__screen"},P={class:"notice__body"},N={class:"notice__left"},S={class:"notice__body"},C={class:"notice__left"},W={class:"notice__body"},A={class:"notice__left"};Object(i["g"])();var I=x((function(e,t,n,c,a,o){return Object(i["f"])(),Object(i["c"])("div",k,[Object(i["m"])(Object(i["e"])("div",P,[Object(i["e"])("div",N,[Object(i["e"])("i",{class:o.getPic(a.list[2].pic),"aria-hidden":"true"},null,2)]),Object(i["e"])("div",{class:"notice__text",textContent:a.list[2].text},null,8,["textContent"])],512),[[i["l"],a.list[2].show]]),Object(i["m"])(Object(i["e"])("div",S,[Object(i["e"])("div",C,[Object(i["e"])("i",{class:o.getPic(a.list[1].pic),"aria-hidden":"true"},null,2)]),Object(i["e"])("div",{class:"notice__text",textContent:a.list[1].text},null,8,["textContent"])],512),[[i["l"],a.list[1].show]]),Object(i["m"])(Object(i["e"])("div",W,[Object(i["e"])("div",A,[Object(i["e"])("i",{class:o.getPic(a.list[0].pic),"aria-hidden":"true"},null,2)]),Object(i["e"])("div",{class:"notice__text",textContent:a.list[0].text},null,8,["textContent"])],512),[[i["l"],a.list[0].show]])])})),U=(n("4160"),n("c975"),n("159b"),{name:"notification",data:function(){return{list:[{show:!1,pic:"",text:""},{show:!1,pic:"",text:""},{show:!1,pic:"",text:""}],queue:[]}},methods:{addNotify:function(e,t){var n=this,i=!1;this.list.forEach((function(c){if(!c.show&&!i){i=!0;var a=n.list.indexOf(c);n.list[a]={show:!0,pic:e,text:t},console.log(n.list),setTimeout(n.removeNotify,5e3)}})),i||this.queue.push({type:e,text:t})},removeNotify:function(){try{if(this.queue[0]){var e=this.queue.shift();this.list.push({show:!0,pic:e.type,text:e.text}),this.list.shift(),setTimeout(this.removeNotify,5e3)}else this.list.push({show:!1,pic:"",text:""}),this.list.shift(),console.log(this.list)}catch(t){console.log(t)}},getPic:function(e){switch(e){case"s":return"fa fa-bell";case"w":return"fa fa-exclamation-triangle";case"e":return"fa fa-times"}}},computed:{}});n("7dbf");U.render=I,U.__scopeId="data-v-bdd5c6b2";var V=U,L={name:"App",data:function(){return{interfaces:{auth:{show:0}}}},components:{Auth:_,Notification:V},methods:{addNotify:function(e,t){this.$refs.notify.addNotify(e,t)},showInterface:function(e,t){this.interfaces[e].show=t},hideAllInterfaces:function(){for(var e in this.interfaces)this.interfaces[e]=0}}};n("64be");L.render=a;t["a"]=L},"56d7":function(e,t,n){"use strict";n.r(t),function(e){n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("7a23"),i=n("3dfd");window.mp||(window.mp={trigger:function(){}}),e.app=Object(t["b"])(i["a"]).mount("#app")}.call(this,n("c8ba"))},"5d5b":function(e,t,n){"use strict";n("2743")},"64be":function(e,t,n){"use strict";n("c894")},"7dbf":function(e,t,n){"use strict";n("7f8c")},"7f8c":function(e,t,n){},"85f9":function(e,t,n){},aff2:function(e,t,n){"use strict";n("b6ae")},b6ae:function(e,t,n){},c894:function(e,t,n){},ca7c:function(e,t,n){"use strict";n("85f9")}});
//# sourceMappingURL=app.d3e1e7bf.js.map