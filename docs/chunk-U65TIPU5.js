import{Aa as T,Ba as P,Fa as k,L as _,M as a,N as I,Q as D,R as d,S as l,Ta as x,Ua as N,W as M,X as B,Xa as $,Y as L,ma as O,ua as p,va as R,ya as h}from"./chunk-HKXAAMIK.js";var F=null;function m(){return F}function Ze(i){F||(F=i)}var U=class{},S=new D("DocumentToken"),v=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>l(W),providedIn:"platform"});let i=t;return i})(),We=new D("Location Initialized"),W=(()=>{let t=class t extends v{constructor(){super(),this._doc=l(S),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return m().getBaseHref(this._doc)}onPopState(e){let n=m().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=m().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function b(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function z(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function c(i){return i&&i[0]!=="?"?"?"+i:i}var g=(()=>{let t=class t{historyGo(e){throw new Error("Not implemented")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a({token:t,factory:()=>l(K),providedIn:"root"});let i=t;return i})(),H=new D("appBaseHref"),K=(()=>{let t=class t extends g{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(S).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return b(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+c(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,u){let o=this.prepareExternalUrl(r+c(u));this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,u){let o=this.prepareExternalUrl(r+c(u));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(d(v),d(H,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ke=(()=>{let t=class t extends g{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash;return n==null&&(n="#"),n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=b(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,u){let o=this.prepareExternalUrl(r+c(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,u){let o=this.prepareExternalUrl(r+c(u));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(d(v),d(H,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac});let i=t;return i})(),X=(()=>{let t=class t{constructor(e){this._subject=new P,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Q(z(j(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+c(n))}normalize(e){return t.stripTrailingSlash(J(this._basePath,j(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=c,t.joinWithSlash=b,t.stripTrailingSlash=z,t.\u0275fac=function(n){return new(n||t)(d(g))},t.\u0275prov=a({token:t,factory:()=>q(),providedIn:"root"});let i=t;return i})();function q(){return new X(d(g))}function J(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function j(i){return i.replace(/\/index.html$/,"")}function Q(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function Xe(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var C=class{constructor(t,s,e,n){this.$implicit=t,this.ngForOf=s,this.index=e,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},qe=(()=>{let t=class t{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,u,o)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new C(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(u===null?void 0:u);else if(u!==null){let f=n.get(u);n.move(f,o),G(f,r)}});for(let r=0,u=n.length;r<u;r++){let f=n.get(r).context;f.index=r,f.count=u,f.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let u=n.get(r.currentIndex);G(u,r)})}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(h(k),h($),h(R))},t.\u0275dir=B({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=t;return i})();function G(i,t){i.context.$implicit=t.item}function ee(i,t){return new _(2100,!1)}var E=class{createSubscription(t,s){return p(()=>t.subscribe({next:s,error:e=>{throw e}}))}dispose(t){p(()=>t.unsubscribe())}},w=class{createSubscription(t,s){return t.then(s,e=>{throw e})}dispose(t){}},te=new w,ne=new E,Je=(()=>{let t=class t{constructor(e){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(x(e))return te;if(N(e))return ne;throw ee(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this._ref.markForCheck())}};t.\u0275fac=function(n){return new(n||t)(h(T,16))},t.\u0275pipe=L({name:"async",type:t,pure:!1,standalone:!0});let i=t;return i})();var Qe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=M({type:t}),t.\u0275inj=I({});let i=t;return i})(),ie="browser",re="server";function se(i){return i===ie}function et(i){return i===re}var tt=(()=>{let t=class t{};t.\u0275prov=a({token:t,providedIn:"root",factory:()=>se(l(O))?new A(l(S),window):new y});let i=t;return i})(),A=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=ue(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),e=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(e-r[0],n-r[1])}};function ue(i,t){let s=i.getElementById(t)||i.getElementsByName(t)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let e=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=e.currentNode;for(;n;){let r=n.shadowRoot;if(r){let u=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(u)return u}n=e.nextNode()}}return null}var y=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},V=class{};export{m as a,Ze as b,U as c,S as d,We as e,g as f,K as g,Ke as h,X as i,Xe as j,qe as k,Je as l,Qe as m,ie as n,et as o,tt as p,V as q};