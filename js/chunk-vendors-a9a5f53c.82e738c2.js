"use strict";(globalThis["webpackChunkDhyana"]=globalThis["webpackChunkDhyana"]||[]).push([[494],{9684:(e,t,a)=>{a.d(t,{Jn:()=>X,KN:()=>Z,Xd:()=>L,qX:()=>U});a(7658);var r=a(7142),s=a(5168),i=a(223),n=a(3831);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const h="@firebase/app",p="0.9.4",b=new s.Yd("@firebase/app"),f="@firebase/app-compat",l="@firebase/analytics-compat",d="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",u="@firebase/auth",w="@firebase/auth-compat",v="@firebase/database",_="@firebase/database-compat",C="@firebase/functions",y="@firebase/functions-compat",D="@firebase/installations",I="@firebase/installations-compat",$="@firebase/messaging",S="@firebase/messaging-compat",E="@firebase/performance",P="@firebase/performance-compat",k="@firebase/remote-config",A="@firebase/remote-config-compat",H="@firebase/storage",N="@firebase/storage-compat",x="@firebase/firestore",O="@firebase/firestore-compat",B="firebase",j="9.17.2",M={[h]:"fire-core",[f]:"fire-core-compat",[d]:"fire-analytics",[l]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[u]:"fire-auth",[w]:"fire-auth-compat",[v]:"fire-rtdb",[_]:"fire-rtdb-compat",[C]:"fire-fn",[y]:"fire-fn-compat",[D]:"fire-iid",[I]:"fire-iid-compat",[$]:"fire-fcm",[S]:"fire-fcm-compat",[E]:"fire-perf",[P]:"fire-perf-compat",[k]:"fire-rc",[A]:"fire-rc-compat",[H]:"fire-gcs",[N]:"fire-gcs-compat",[x]:"fire-fst",[O]:"fire-fst-compat","fire-js":"fire-js",[B]:"fire-js-all"},F=new Map,T=new Map;function R(e,t){try{e.container.addComponent(t)}catch(a){b.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function L(e){const t=e.name;if(T.has(t))return b.debug(`There were multiple attempts to register component ${t}.`),!1;T.set(t,e);for(const a of F.values())R(a,e);return!0}function U(e,t){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},J=new i.LL("app","Firebase",V);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X=j;function Z(e,t,a){var s;let i=null!==(s=M[e])&&void 0!==s?s:e;a&&(i+=`-${a}`);const n=i.match(/\s|\//),o=t.match(/\s|\//);if(n||o){const e=[`Unable to register library "${i}" with version "${t}":`];return n&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),n&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void b.warn(e.join(" "))}L(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q="firebase-heartbeat-database",z=1,K="firebase-heartbeat-store";let Y=null;function G(){return Y||(Y=(0,n.X3)(q,z,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(K)}}}).catch((e=>{throw J.create("idb-open",{originalErrorMessage:e.message})}))),Y}async function Q(e){try{const t=await G();return t.transaction(K).objectStore(K).get(ee(e))}catch(t){if(t instanceof i.ZR)b.warn(t.message);else{const e=J.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});b.warn(e.message)}}}async function W(e,t){try{const a=await G(),r=a.transaction(K,"readwrite"),s=r.objectStore(K);return await s.put(t,ee(e)),r.done}catch(a){if(a instanceof i.ZR)b.warn(a.message);else{const e=J.create("idb-set",{originalErrorMessage:null===a||void 0===a?void 0:a.message});b.warn(e.message)}}}function ee(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=1024,ae=2592e6;class re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),a=se();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==a&&!this._heartbeatsCache.heartbeats.some((e=>e.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),a=Date.now();return a-t<=ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=se(),{heartbeatsToSend:t,unsentEntries:a}=ie(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function se(){const e=new Date;return e.toISOString().substring(0,10)}function ie(e,t=te){const a=[];let r=e.slice();for(const s of e){const e=a.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),oe(a)>t){e.dates.pop();break}}else if(a.push({agent:s.agent,dates:[s.date]}),oe(a)>t){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Q(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const a=await this._canUseIndexedDBPromise;if(a){const a=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const a=await this._canUseIndexedDBPromise;if(a){const a=await this.read();return W(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function oe(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){L(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),L(new r.wA("heartbeat",(e=>new re(e)),"PRIVATE")),Z(h,p,e),Z(h,p,"esm2017"),Z("fire-js","")}ce("")}}]);