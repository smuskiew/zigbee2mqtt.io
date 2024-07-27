"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[76],{477550:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-43e13d14","path":"/devices/MHO-C401N-z.html","title":"Xiaomi MHO-C401N-z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi MHO-C401N-z control via MQTT","description":"Integrate your Xiaomi MHO-C401N-z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-01T08:46:57.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Smiley (binary)","slug":"smiley-binary","link":"#smiley-binary","children":[]},{"level":3,"title":"Temperature calibration (numeric)","slug":"temperature-calibration-numeric","link":"#temperature-calibration-numeric","children":[]},{"level":3,"title":"Humidity calibration (numeric)","slug":"humidity-calibration-numeric","link":"#humidity-calibration-numeric","children":[]},{"level":3,"title":"Comfort temperature min (numeric)","slug":"comfort-temperature-min-numeric","link":"#comfort-temperature-min-numeric","children":[]},{"level":3,"title":"Comfort temperature max (numeric)","slug":"comfort-temperature-max-numeric","link":"#comfort-temperature-max-numeric","children":[]},{"level":3,"title":"Comfort humidity min (numeric)","slug":"comfort-humidity-min-numeric","link":"#comfort-humidity-min-numeric","children":[]},{"level":3,"title":"Comfort humidity max (numeric)","slug":"comfort-humidity-max-numeric","link":"#comfort-humidity-max-numeric","children":[]},{"level":3,"title":"Measurement interval (numeric)","slug":"measurement-interval-numeric","link":"#measurement-interval-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722113775000},"filePathRelative":"devices/MHO-C401N-z.md"}')},328222:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var o=i(166252);const a=(0,o._)("h1",{id:"xiaomi-mho-c401n-z",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#xiaomi-mho-c401n-z","aria-hidden":"true"},"#"),(0,o.Uk)(" Xiaomi MHO-C401N-z")],-1),r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"MHO-C401N-z")],-1),u=(0,o._)("td",null,"Vendor",-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"E-Ink temperature & humidity sensor with custom firmware (pvxx/ZigbeeTLc)")],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, temperature, humidity, temperature_display_mode, smiley, temperature_calibration, humidity_calibration, comfort_temperature_min, comfort_temperature_max, comfort_humidity_min, comfort_humidity_max, measurement_interval, linkquality")],-1),m=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MHO-C401N-z.png",alt:"Xiaomi MHO-C401N-z"})])],-1),l=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),s={href:"https://github.com/pvvx/ZigbeeTLc",target:"_blank",rel:"noopener noreferrer"},h=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),p=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),b=(0,o.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum" aria-hidden="true">#</a> Temperature display mode (enum)</h3><p>The units of the temperature displayed on the device screen.. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="smiley-binary" tabindex="-1"><a class="header-anchor" href="#smiley-binary" aria-hidden="true">#</a> Smiley (binary)</h3><p>Whether to show a smiley on the device screen.. Value can be found in the published state on the <code>smiley</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;smiley&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;smiley&quot;: NEW_VALUE}</code>. If value equals <code>SHOW</code> smiley is ON, if <code>HIDE</code> OFF.</p><h3 id="temperature-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-calibration-numeric" aria-hidden="true">#</a> Temperature calibration (numeric)</h3><p>The temperature calibration, in 0.01° steps.. Value can be found in the published state on the <code>temperature_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-12.7</code> and the maximum value is <code>12.7</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-calibration-numeric" aria-hidden="true">#</a> Humidity calibration (numeric)</h3><p>The humidity offset is set in 0.01 % steps.. Value can be found in the published state on the <code>humidity_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-12.7</code> and the maximum value is <code>12.7</code>. The unit of this value is <code>%</code>.</p><h3 id="comfort-temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-min-numeric" aria-hidden="true">#</a> Comfort temperature min (numeric)</h3><p>Comfort parameters/Temperature minimum, in 1°C steps.. Value can be found in the published state on the <code>comfort_temperature_min</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;comfort_temperature_min&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature_min&quot;: NEW_VALUE}</code>. The minimal value is <code>-127</code> and the maximum value is <code>127</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-max-numeric" aria-hidden="true">#</a> Comfort temperature max (numeric)</h3><p>Comfort parameters/Temperature maximum, in 1°C steps.. Value can be found in the published state on the <code>comfort_temperature_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;comfort_temperature_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature_max&quot;: NEW_VALUE}</code>. The minimal value is <code>-127</code> and the maximum value is <code>127</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-humidity-min-numeric" aria-hidden="true">#</a> Comfort humidity min (numeric)</h3><p>Comfort parameters/Humidity minimum, in 1% steps.. Value can be found in the published state on the <code>comfort_humidity_min</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;comfort_humidity_min&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_humidity_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="comfort-humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-humidity-max-numeric" aria-hidden="true">#</a> Comfort humidity max (numeric)</h3><p>Comfort parameters/Humidity maximum, in 1% steps.. Value can be found in the published state on the <code>comfort_humidity_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;comfort_humidity_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_humidity_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="measurement-interval-numeric" tabindex="-1"><a class="header-anchor" href="#measurement-interval-numeric" aria-hidden="true">#</a> Measurement interval (numeric)</h3><p>Measurement interval, default 10 seconds.. Value can be found in the published state on the <code>measurement_interval</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;measurement_interval&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;measurement_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>255</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28),f={},y=(0,i(983744).Z)(f,[["render",function(e,t){const i=(0,o.up)("RouterLink"),f=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[r,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[u,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,o.w5)((()=>[(0,o.Uk)("Xiaomi")])),_:1})])]),c,n,m])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),l,(0,o._)("p",null,[(0,o.Uk)("Originally this device does not support Zigbee (only Bluetooth). To use this device with Zigbee2MQTT a custom firmware has to be flashed which is explained "),(0,o._)("a",s,[(0,o.Uk)("here"),(0,o.Wm)(f)]),(0,o.Uk)(". This firmware converts the device from Bluetooth to Zigbee. Requires firmware v0.1.2.1 or newer!")]),(0,o.kq)(" Notes END: Do not edit below this line "),h,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),p,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);