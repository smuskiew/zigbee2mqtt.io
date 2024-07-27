"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85009],{441727:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-aed7588e","path":"/devices/SODA_S8.html","title":"Tuya SODA_S8 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya SODA_S8 control via MQTT","description":"Integrate your Tuya SODA_S8 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-30T19:12:33.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing & Resetting","slug":"pairing-resetting","link":"#pairing-resetting","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Vacation (binary)","slug":"vacation-binary","link":"#vacation-binary","children":[]},{"level":3,"title":"Alarm (enum)","slug":"alarm-enum","link":"#alarm-enum","children":[]},{"level":3,"title":"Alarm switch (binary)","slug":"alarm-switch-binary","link":"#alarm-switch-binary","children":[]},{"level":3,"title":"Handlesound (binary)","slug":"handlesound-binary","link":"#handlesound-binary","children":[]},{"level":3,"title":"Opening mode (enum)","slug":"opening-mode-enum","link":"#opening-mode-enum","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Keysound (binary)","slug":"keysound-binary","link":"#keysound-binary","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Position (enum)","slug":"position-enum","link":"#position-enum","children":[]},{"level":3,"title":"Button left (enum)","slug":"button-left-enum","link":"#button-left-enum","children":[]},{"level":3,"title":"Button right (enum)","slug":"button-right-enum","link":"#button-right-enum","children":[]},{"level":3,"title":"Duration (numeric)","slug":"duration-numeric","link":"#duration-numeric","children":[]},{"level":3,"title":"Update frequency (numeric)","slug":"update-frequency-numeric","link":"#update-frequency-numeric","children":[]},{"level":3,"title":"Calibrate (enum)","slug":"calibrate-enum","link":"#calibrate-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722113775000},"filePathRelative":"devices/SODA_S8.md"}')},741731:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var o=i(166252);const a=(0,o._)("h1",{id:"tuya-soda-s8",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-soda-s8","aria-hidden":"true"},"#"),(0,o.Uk)(" Tuya SODA_S8")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"SODA_S8")],-1),r=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"SODA S8 premium window handle")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, battery_low, vacation, alarm, alarm_switch, handlesound, opening_mode, temperature, humidity, keysound, sensitivity, position, button_left, button_right, duration, update_frequency, calibrate, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SODA_S8.png",alt:"Tuya SODA_S8"})])],-1),c=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),h={href:"https://soda-gmbh.de/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.amazon.de/sp?ie=UTF8&isAmazonFulfilled=0&marketplaceSeller=1&seller=AS4J66PXH3SHW",target:"_blank",rel:"noopener noreferrer"},m={href:"https://soda-gmbh.de/assets/download/S8_Premium_Anleitung.pdf",target:"_blank",rel:"noopener noreferrer"},b=(0,o._)("h3",{id:"pairing-resetting",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#pairing-resetting","aria-hidden":"true"},"#"),(0,o.Uk)(" Pairing & Resetting")],-1),y=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("p",null,"To pair, press left button while inserting the batteries.")]),(0,o._)("li",null,[(0,o._)("p",null,"To reset, press both buttons while inserting batteries.")])],-1),f=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),v=(0,o.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="vacation-binary" tabindex="-1"><a class="header-anchor" href="#vacation-binary" aria-hidden="true">#</a> Vacation (binary)</h3><p>Vacation mode. Value can be found in the published state on the <code>vacation</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vacation&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> vacation is ON, if <code>OFF</code> OFF.</p><h3 id="alarm-enum" tabindex="-1"><a class="header-anchor" href="#alarm-enum" aria-hidden="true">#</a> Alarm (enum)</h3><p>Alarm. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>ALARM</code>, <code>IDLE</code>.</p><h3 id="alarm-switch-binary" tabindex="-1"><a class="header-anchor" href="#alarm-switch-binary" aria-hidden="true">#</a> Alarm switch (binary)</h3><p>Alarm enable. Value can be found in the published state on the <code>alarm_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm switch is ON, if <code>OFF</code> OFF.</p><h3 id="handlesound-binary" tabindex="-1"><a class="header-anchor" href="#handlesound-binary" aria-hidden="true">#</a> Handlesound (binary)</h3><p>Handle closed sound. Value can be found in the published state on the <code>handlesound</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;handlesound&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> handlesound is ON, if <code>OFF</code> OFF.</p><h3 id="opening-mode-enum" tabindex="-1"><a class="header-anchor" href="#opening-mode-enum" aria-hidden="true">#</a> Opening mode (enum)</h3><p>Window tilt. Value can be found in the published state on the <code>opening_mode</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>closed</code>, <code>tilted</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="keysound-binary" tabindex="-1"><a class="header-anchor" href="#keysound-binary" aria-hidden="true">#</a> Keysound (binary)</h3><p>Key beep sound. Value can be found in the published state on the <code>keysound</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keysound&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> keysound is ON, if <code>OFF</code> OFF.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Sensitivity of the alarm sensor. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>, <code>max</code>.</p><h3 id="position-enum" tabindex="-1"><a class="header-anchor" href="#position-enum" aria-hidden="true">#</a> Position (enum)</h3><p>Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>up</code>, <code>right</code>, <code>down</code>, <code>left</code>.</p><h3 id="button-left-enum" tabindex="-1"><a class="header-anchor" href="#button-left-enum" aria-hidden="true">#</a> Button left (enum)</h3><p>Value can be found in the published state on the <code>button_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>released</code>, <code>pressed</code>.</p><h3 id="button-right-enum" tabindex="-1"><a class="header-anchor" href="#button-right-enum" aria-hidden="true">#</a> Button right (enum)</h3><p>Value can be found in the published state on the <code>button_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>released</code>, <code>pressed</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric" aria-hidden="true">#</a> Duration (numeric)</h3><p>Duration of the alarm. Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>sec</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="update-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#update-frequency-numeric" aria-hidden="true">#</a> Update frequency (numeric)</h3><p>Update frequency. Value can be found in the published state on the <code>update_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;update_frequency&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>700</code>. The unit of this value is <code>min</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="calibrate-enum" tabindex="-1"><a class="header-anchor" href="#calibrate-enum" aria-hidden="true">#</a> Calibrate (enum)</h3><p>Value can be found in the published state on the <code>calibrate</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate&quot;: NEW_VALUE}</code>. The possible values are: <code>clear</code>, <code>execute</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',38),g={},_=(0,i(983744).Z)(g,[["render",function(e,t){const i=(0,o.up)("RouterLink"),g=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[n,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,o.w5)((()=>[(0,o.Uk)("Tuya")])),_:1})])]),l,s,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,(0,o._)("p",null,[(0,o.Uk)("The handles are from "),(0,o._)("a",h,[(0,o.Uk)("SODA GmBh"),(0,o.Wm)(g)]),(0,o.Uk)(" and sold on "),(0,o._)("a",p,[(0,o.Uk)("Amazon Germany"),(0,o.Wm)(g)]),(0,o.Uk)(".")]),(0,o._)("p",null,[(0,o._)("a",m,[(0,o.Uk)("Documentation/Manual"),(0,o.Wm)(g)])]),b,y,(0,o.kq)(" Notes END: Do not edit below this line "),f,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);