"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90078],{251636:(e,a,t)=>{t.r(a),t.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-5132644c","path":"/guide/installation/15_watchdog.html","title":"Watchdog","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":0},"excerpt":"","headers":[{"level":2,"title":"Customized delays","slug":"customized-delays","link":"#customized-delays","children":[]}],"git":{"updatedTime":1722113775000},"filePathRelative":"guide/installation/15_watchdog.md"}')},135631:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var s=t(166252);const i=[(0,s.uE)('<h1 id="watchdog" tabindex="-1"><a class="header-anchor" href="#watchdog" aria-hidden="true">#</a> Watchdog</h1><p>Zigbee2MQTT supports a simple watchdog for &quot;soft failures&quot; (failures that Zigbee2MQTT can handle properly without crashing, like &quot;adapter disconnected&quot;). The normal operation is to have to restart the Zigbee2MQTT process, or reset the container (for a containerized installation). This watchdog allows Zigbee2MQTT to try restarting internally without exiting the process. This is optional, and only enabled if the <code>env</code> variable is set and valid.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">Z2M_WATCHDOG</span><span class="token operator">=</span>default\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start Zigbee2MQTT with the watchdog&#39;s default retry delays (1min, 5min, 15min, 30min, 60min).</p><p>The number of configured delays is the de facto number of times the watchdog will retry, past that, the node process will be stopped (to avoid endlessly retrying when clearly, something&#39;s requiring the user&#39;s attention). The watchdog will retry after 1min on first failure, then after 5min on second failure, then after 15min on third failure, then after 30min on fourth failure, then after 60min on fifth failure, then exit if sixth start fails. Any successful start resets that to the beginning.</p><p>In addition, the following behaviors always apply:</p><ul><li>The watchdog will only trigger on failure after the initial (manual) start is successful.</li><li>A problem with settings will always ignore the watchdog and stop Z2M.</li><li>A manual stop/restart (like <code>CTRL+C</code>) will ignore the watchdog to comply with user intent.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In non-containerized environments, to handle NodeJS crashes, you will need a dedicated watchdog program on your operating system to allow restarting the Zigbee2MQTT process automatically.</p></div><h2 id="customized-delays" tabindex="-1"><a class="header-anchor" href="#customized-delays" aria-hidden="true">#</a> Customized delays</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">Z2M_WATCHDOG</span><span class="token operator">=</span>minutes_csv\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start Zigbee2MQTT with the watchdog&#39;s retry delays of your choosing. <code>minutes_csv</code> is expected to be a list of comma-separated numbers representing minutes (or fractions of minutes, with decimal point <code>.</code>). Other values/formats will prevent Z2M from starting.</p><p>Examples:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">Z2M_WATCHDOG</span><span class="token operator">=</span><span class="token number">5,10</span>,30\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start Zigbee2MQTT with the watchdog&#39;s retry delays as: 5min, 10min, 30min. This will result in 3 retry attempts.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">Z2M_WATCHDOG</span><span class="token operator">=</span><span class="token number">0.5</span>,3,6,15\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start Zigbee2MQTT with the watchdog&#39;s retry delays as: 30sec, 3min, 6min, 15min. This will result in 4 retry attempts.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">Z2M_WATCHDOG</span><span class="token operator">=</span><span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start Zigbee2MQTT with the watchdog&#39;s retry delays as: 1min. This will result in 1 retry attempt.</p>',18)],n={},l=(0,t(983744).Z)(n,[["render",function(e,a){return(0,s.wg)(),(0,s.iD)("div",null,i)}]])}}]);