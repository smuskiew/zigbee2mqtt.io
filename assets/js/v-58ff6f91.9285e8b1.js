"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3708],{189621:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o=JSON.parse('{"key":"v-58ff6f91","path":"/devices/ORBIS_Vibration_Sensor.html","title":"Niceboy ORBIS Vibration Sensor control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Niceboy ORBIS Vibration Sensor control via MQTT","description":"Integrate your Niceboy ORBIS Vibration Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:13:29.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Vibration (binary)","slug":"vibration-binary","link":"#vibration-binary","children":[]},{"level":3,"title":"Sensitivity (numeric)","slug":"sensitivity-numeric","link":"#sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722113775000},"filePathRelative":"devices/ORBIS_Vibration_Sensor.md"}')},251724:(e,i,t)=>{t.r(i),t.d(i,{default:()=>v});var o=t(166252);const n=(0,o._)("h1",{id:"niceboy-orbis-vibration-sensor",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#niceboy-orbis-vibration-sensor","aria-hidden":"true"},"#"),(0,o.Uk)(" Niceboy ORBIS Vibration Sensor")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ORBIS Vibration Sensor")],-1),s=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Vibration sensor")],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, voltage, vibration, sensitivity, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ORBIS-Vibration-Sensor.png",alt:"Niceboy ORBIS Vibration Sensor"})])],-1),u=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),h=(0,o.uE)('<ul><li><code>vibration_timeout</code>: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary" aria-hidden="true">#</a> Vibration (binary)</h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#sensitivity-numeric" aria-hidden="true">#</a> Sensitivity (numeric)</h3><p>Sensitivty of the sensor (0 = highest sensitivity, 50 = lowest sensitivity). Press button on the device right before changing this. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),b={},v=(0,t(983744).Z)(b,[["render",function(e,i){const t=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),n,(0,o._)("table",null,[a,(0,o._)("tbody",null,[r,(0,o._)("tr",null,[s,(0,o._)("td",null,[(0,o.Wm)(t,{to:"/supported-devices/#v=Niceboy"},{default:(0,o.w5)((()=>[(0,o.Uk)("Niceboy")])),_:1})])]),l,d,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),u,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);