"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[54790],{654498:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-5aa2c7d6","path":"/devices/TS0601_gas_sensor_4.html","title":"Tuya TS0601_gas_sensor_4 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_gas_sensor_4 control via MQTT","description":"Integrate your Tuya TS0601_gas_sensor_4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Gas (binary)","slug":"gas-binary","link":"#gas-binary","children":[]},{"level":3,"title":"Gas value (numeric)","slug":"gas-value-numeric","link":"#gas-value-numeric","children":[]},{"level":3,"title":"Preheat (binary)","slug":"preheat-binary","link":"#preheat-binary","children":[]},{"level":3,"title":"Fault alarm (binary)","slug":"fault-alarm-binary","link":"#fault-alarm-binary","children":[]},{"level":3,"title":"Alarm switch (binary)","slug":"alarm-switch-binary","link":"#alarm-switch-binary","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722113775000},"filePathRelative":"devices/TS0601_gas_sensor_4.md"}')},477480:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var i=t(166252);const s=(0,i._)("h1",{id:"tuya-ts0601-gas-sensor-4",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-ts0601-gas-sensor-4","aria-hidden":"true"},"#"),(0,i.Uk)(" Tuya TS0601_gas_sensor_4")],-1),l=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"TS0601_gas_sensor_4")],-1),r=(0,i._)("td",null,"Vendor",-1),o=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Gas sensor")],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"gas, gas_value, preheat, fault_alarm, alarm_switch, silence, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_gas_sensor_4.png",alt:"Tuya TS0601_gas_sensor_4"})])],-1),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="gas-binary" tabindex="-1"><a class="header-anchor" href="#gas-binary" aria-hidden="true">#</a> Gas (binary)</h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id="gas-value-numeric" tabindex="-1"><a class="header-anchor" href="#gas-value-numeric" aria-hidden="true">#</a> Gas value (numeric)</h3><p>Measured gas concentration. Value can be found in the published state on the <code>gas_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>LEL</code>.</p><h3 id="preheat-binary" tabindex="-1"><a class="header-anchor" href="#preheat-binary" aria-hidden="true">#</a> Preheat (binary)</h3><p>Indicates sensor preheat is active. Value can be found in the published state on the <code>preheat</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> preheat is ON, if <code>false</code> OFF.</p><h3 id="fault-alarm-binary" tabindex="-1"><a class="header-anchor" href="#fault-alarm-binary" aria-hidden="true">#</a> Fault alarm (binary)</h3><p>Indicates whether a fault was detected. Value can be found in the published state on the <code>fault_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault alarm is ON, if <code>false</code> OFF.</p><h3 id="alarm-switch-binary" tabindex="-1"><a class="header-anchor" href="#alarm-switch-binary" aria-hidden="true">#</a> Alarm switch (binary)</h3><p>Value can be found in the published state on the <code>alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_switch&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm switch is ON, if <code>false</code> OFF.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary" aria-hidden="true">#</a> Silence (binary)</h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),h={},p=(0,t(983744).Z)(h,[["render",function(e,a){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),s,(0,i._)("table",null,[l,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,i.w5)((()=>[(0,i.Uk)("Tuya")])),_:1})])]),o,d,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);