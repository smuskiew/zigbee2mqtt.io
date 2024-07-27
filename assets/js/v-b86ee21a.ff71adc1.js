"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[73772],{773933:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-b86ee21a","path":"/devices/TICMeter.html","title":"GammaTroniques TICMeter control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"GammaTroniques TICMeter control via MQTT","description":"Integrate your GammaTroniques TICMeter via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-05-09T20:14:11.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722113775000},"filePathRelative":"devices/TICMeter.md"}')},766751:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var i=o(166252);const a=(0,i._)("h1",{id:"gammatroniques-ticmeter",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#gammatroniques-ticmeter","aria-hidden":"true"},"#"),(0,i.Uk)(" GammaTroniques TICMeter")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"TICMeter")],-1),n=(0,i._)("td",null,"Vendor",-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"TICMeter pour Linky")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TICMeter.png",alt:"GammaTroniques TICMeter"})])],-1),r=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><p><code>refresh_rate</code>: Refresh rate for static values (those with refresh buttons). Default: 120 s. The value must be a number with a minimum value of <code>60</code> and with a with a maximum value of <code>3600</code></p></li><li><p><code>tic_mode</code>: Linky TIC communication mode. Defaults to AUTO mode. To be used in case of problem. The value must be one of <code>HISTORIQUE</code>, <code>STANDARD</code>, <code>AUTO</code></p></li><li><p><code>contract_type</code>: Current electricity contract on Linky. Defaults to AUTO mode. Displays the correct entities. To be used in case of problem. The value must be one of <code>AUTO</code>, <code>BASE</code>, <code>HCHP</code>, <code>EJP</code>, <code>TEMPO</code>, <code>PRODUCTEUR</code></p></li><li><p><code>linky_elec</code>: Linky electrical mode. Defaults to AUTO mode. To be used in case of problem. The value must be one of <code>MONOPHASE</code>, <code>TRIPHASE</code>, <code>AUTO</code></p></li><li><p><code>producer</code>: Producer mode: displays electricity production indexes. Default: OFF. The value must be <code>ON</code> or <code>OFF</code></p></li><li><p><code>advanced</code>: Displays all meter data. For advanced use. Default: OFF. The value must be <code>ON</code> or <code>OFF</code></p></li><li><p><code>translation</code>: Language: Default French. The value must be one of <code>FRANCAIS</code>, <code>ENGLISH</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',4),m={},T=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=GammaTroniques"},{default:(0,i.w5)((()=>[(0,i.Uk)("GammaTroniques")])),_:1})])]),c,u,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),r,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);