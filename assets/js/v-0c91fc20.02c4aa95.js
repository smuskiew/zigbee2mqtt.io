"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[46633],{326228:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-0c91fc20","path":"/devices/TYZGTH1CH-D1RF.html","title":"Mumubiz TYZGTH1CH-D1RF control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Mumubiz TYZGTH1CH-D1RF control via MQTT","description":"Integrate your Mumubiz TYZGTH1CH-D1RF via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-30T19:12:33.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power outage memory (enum)","slug":"power-outage-memory-enum","link":"#power-outage-memory-enum","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Temperature calibration (numeric)","slug":"temperature-calibration-numeric","link":"#temperature-calibration-numeric","children":[]},{"level":3,"title":"Humidity calibration (numeric)","slug":"humidity-calibration-numeric","link":"#humidity-calibration-numeric","children":[]},{"level":3,"title":"Temperature sensitivity (numeric)","slug":"temperature-sensitivity-numeric","link":"#temperature-sensitivity-numeric","children":[]},{"level":3,"title":"Humidity sensitivity (numeric)","slug":"humidity-sensitivity-numeric","link":"#humidity-sensitivity-numeric","children":[]},{"level":3,"title":"Manual mode (binary)","slug":"manual-mode-binary","link":"#manual-mode-binary","children":[]},{"level":3,"title":"Auto settings (composite)","slug":"auto-settings-composite","link":"#auto-settings-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722113775000},"filePathRelative":"devices/TYZGTH1CH-D1RF.md"}')},977443:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(166252);const a=(0,o._)("h1",{id:"mumubiz-tyzgth1ch-d1rf",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#mumubiz-tyzgth1ch-d1rf","aria-hidden":"true"},"#"),(0,o.Uk)(" Mumubiz TYZGTH1CH-D1RF")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"TYZGTH1CH-D1RF")],-1),c=(0,o._)("td",null,"Vendor",-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Smart switch with temperature/humidity sensor")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"switch (state), power_outage_memory, lock (state), temperature, humidity, temperature_calibration, humidity_calibration, temperature_sensitivity, humidity_sensitivity, manual_mode, auto_settings, linkquality")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TYZGTH1CH-D1RF.png",alt:"Mumubiz TYZGTH1CH-D1RF"})])],-1),s=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),h=(0,o.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-outage-memory-enum" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-enum" aria-hidden="true">#</a> Power outage memory (enum)</h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-calibration-numeric" aria-hidden="true">#</a> Temperature calibration (numeric)</h3><p>Temperature calibration. Value can be found in the published state on the <code>temperature_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-calibration-numeric" aria-hidden="true">#</a> Humidity calibration (numeric)</h3><p>Humidity calibration. Value can be found in the published state on the <code>humidity_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>10</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sensitivity-numeric" aria-hidden="true">#</a> Temperature sensitivity (numeric)</h3><p>Temperature sensitivity. Value can be found in the published state on the <code>temperature_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>1</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-sensitivity-numeric" aria-hidden="true">#</a> Humidity sensitivity (numeric)</h3><p>Humidity sensitivity. Value can be found in the published state on the <code>humidity_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>. The unit of this value is <code>%</code>.</p><h3 id="manual-mode-binary" tabindex="-1"><a class="header-anchor" href="#manual-mode-binary" aria-hidden="true">#</a> Manual mode (binary)</h3><p>Manual mode or automatic. Value can be found in the published state on the <code>manual_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> manual mode is ON, if <code>OFF</code> OFF.</p><h3 id="auto-settings-composite" tabindex="-1"><a class="header-anchor" href="#auto-settings-composite" aria-hidden="true">#</a> Auto settings (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_settings&quot;: {&quot;enabled&quot;: VALUE, &quot;temp_greater_then&quot;: VALUE, &quot;temp_greater_value&quot;: VALUE, &quot;temp_lower_then&quot;: VALUE, &quot;temp_lower_value&quot;: VALUE}}</code></p><ul><li><code>enabled</code> (enum): Enable auto settings allowed values: <code>on</code>, <code>off</code>, <code>none</code></li><li><code>temp_greater_then</code> (enum): Greater action allowed values: <code>on</code>, <code>off</code>, <code>none</code></li><li><code>temp_greater_value</code> (numeric): Temperature greater than value min value is -20, max value is 80, unit is *C</li><li><code>temp_lower_then</code> (enum): Lower action allowed values: <code>on</code>, <code>off</code>, <code>none</code></li><li><code>temp_lower_value</code> (numeric): Temperature lower than value min value is -20, max value is 80, unit is *C</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',29),m={},p=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[d,(0,o._)("tbody",null,[u,(0,o._)("tr",null,[c,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Mumubiz"},{default:(0,o.w5)((()=>[(0,o.Uk)("Mumubiz")])),_:1})])]),n,r,l])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),s,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);