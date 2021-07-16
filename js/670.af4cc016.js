(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[670],{670:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>c});var t=n(7875),l={class:"varlet-site-doc"},p=(0,t.uE)('<h1>表单</h1><div class="card"><h3>介绍</h3><p>提供了对所有表单组件进行控制的能力。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Form } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Form)\n</code></pre></div><div class="card"><h3>表单示例</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { reactive, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> formData = reactive({\n      <span class="hljs-attr">username</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">password</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">department</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">gender</span>: <span class="hljs-literal">undefined</span>,\n      <span class="hljs-attr">license</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">range</span>: <span class="hljs-number">10</span>,\n      <span class="hljs-attr">count</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">group</span>: [],\n      <span class="hljs-attr">score</span>:<span class="hljs-number">0</span>,\n      <span class="hljs-attr">like</span>: [],\n      <span class="hljs-attr">files</span>: []\n    })\n\n    <span class="hljs-keyword">const</span> form = ref(<span class="hljs-literal">null</span>)\n    <span class="hljs-keyword">const</span> disabled = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> readonly = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      form,\n      formData,\n      disabled,\n      readonly\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;form&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span> <span class="hljs-attr">:readonly</span>=<span class="hljs-string">&quot;readonly&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-input</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入用户名&quot;</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;用户名不能为空&#39;]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.username&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-input</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入密码&quot;</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;密码不能为空&#39;]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.password&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择部门&quot;</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;必须选一个部门&#39;]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.department&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭部&quot;</span>  /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉部&quot;</span>  /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;打游戏部&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-select</span>\n    <span class="hljs-attr">multiple</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择组织&quot;</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt;= 1 || &#39;至少选择一个组织&#39;]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.group&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;吃饭组&quot;</span>  /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;睡觉组&quot;</span>  /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;打游戏组&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-select</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio-group</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;必须选择一个性别&#39;]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.gender&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>男<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>女<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-radio-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox-group</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt; 0 || &#39;至少选择一个爱好&#39;]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.like&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>吃饭<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>睡觉<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-checkbox</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>打游戏<span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-checkbox-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> \n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt;= 3 || 必须大于2]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.score&quot;</span> \n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span>\n      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; !!v || &#39;您必须开启&#39;]&quot;</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.license&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>\n      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 10 || &#39;必须大于10&#39;]&quot;</span>\n      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.count&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 10 || &#39;必须大于10&#39;]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.range&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt;= 1 || &#39;至少上传一张图片&#39;]&quot;</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.files&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-form</span>&gt;</span>\n</code></pre></div><div class="card"><h3>表单控制</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.reset()&quot;</span>&gt;</span>\n  清空表单\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.resetValidation()&quot;</span>&gt;</span>\n  清空验证\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;form.validate()&quot;</span>&gt;</span>\n  触发验证\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;disabled = !disabled&quot;</span>&gt;</span>\n  表单禁用\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;readonly = !readonly&quot;</span>&gt;</span>\n  表单只读\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>validate</code></td><td>触发所有表单组件的校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空所有表单组件的校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空所有表单组件绑定的值和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>表单内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--form-details-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--form-details-length-color</code></td><td><code>#888</code></td></tr><tr><td><code>--form-details-margin-top</code></td><td><code>6px</code></td></tr><tr><td><code>--form-details-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--form-details-message-margin-right</code></td><td><code>4px</code></td></tr></tbody></table></div>',10);const c={render:function(s,a){return(0,t.wg)(),(0,t.j4)("div",l,[p])}}}}]);