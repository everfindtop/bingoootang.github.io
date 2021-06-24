(self.webpackChunkeverfind=self.webpackChunkeverfind||[]).push([[917],{854:(e,d,o)=>{"use strict";o.r(d),o.d(d,{data:()=>l});const l={key:"v-228ea995",path:"/posts/2019/02/20/regexp-handbook.html",title:"正则表达式备查手册",lang:"zh-CN",frontmatter:{title:"正则表达式备查手册",description:"正则表达式高频知识点",keywords:["regular expression","正则表达式","regexp"],date:"2019-02-20T00:00:00.000Z",permalinkPattern:"posts/:year/:month/:day/:slug.html",tags:["通用知识"]},excerpt:"",headers:[{level:2,title:"常用元字符",slug:"常用元字符",children:[]},{level:2,title:"常用限定符（重复）",slug:"常用限定符-重复",children:[]},{level:2,title:"常用反义码",slug:"常用反义码",children:[]},{level:2,title:"分支条件",slug:"分支条件",children:[]},{level:2,title:"分组（重复多个字符）",slug:"分组-重复多个字符",children:[]},{level:2,title:"后向引用",slug:"后向引用",children:[]},{level:2,title:"零宽断言",slug:"零宽断言",children:[]},{level:2,title:"负向零宽断言",slug:"负向零宽断言",children:[]},{level:2,title:"注释",slug:"注释",children:[]}],filePathRelative:"posts/regexp-handbook.md"}},8643:(e,d,o)=>{"use strict";o.r(d),o.d(d,{default:()=>c});const l=(0,o(6252).uE)('<h2 id="常用元字符"><a class="header-anchor" href="#常用元字符">#</a> 常用元字符</h2><ul><li><code>.</code> 匹配除换行符以外的任意字符</li><li><code>\\w</code> 匹配字母或数字或下划线或汉字</li><li><code>\\s</code> 匹配任意的空白符</li><li><code>\\d</code> 匹配数字</li><li><code>\\b</code> 匹配单词的开始或结束</li><li><code>^</code> 匹配字符串的开始</li><li><code>$</code> 匹配字符串的结束</li></ul><h2 id="常用限定符-重复"><a class="header-anchor" href="#常用限定符-重复">#</a> 常用限定符（重复）</h2><ul><li><code>*</code> 重复零次或更多次</li><li><code>*?</code> 重复任意次，但尽可能少重复</li><li><code>+</code> 重复一次或更多次</li><li><code>+?</code> 重复 1 次或更多次，但尽可能少重复</li><li><code>?</code> 重复零次或一次</li><li><code>??</code> 重复 0 次或 1 次，但尽可能少重复</li><li><code>{n}</code> 重复 n 次</li><li><code>{n,}</code> 重复 n 次或更多次</li><li><code>{n,}?</code> 重复 n 次以上，但尽可能少重复</li><li><code>{n,m}</code> 重复 n 到 m 次</li><li><code>{n,m}?</code> 重复 n 到 m 次，但尽可能少重复</li></ul><h2 id="常用反义码"><a class="header-anchor" href="#常用反义码">#</a> 常用反义码</h2><ul><li><code>\\W</code> 匹配任意不是字母，数字，下划线，汉字的字符</li><li><code>\\S</code> 匹配任意不是空白符的字符</li><li><code>\\D</code> 匹配任意非数字的字符</li><li><code>\\B</code> 匹配不是单词开头或结束的位置</li><li><code>[^x]</code> 匹配除了 x 以外的任意字符</li><li><code>[^aeiou]</code> 匹配除了 aeiou 这几个字母以外的任意字符</li></ul><h2 id="分支条件"><a class="header-anchor" href="#分支条件">#</a> 分支条件</h2><p>正则表达式中通过 <code>|</code> 来表示分支条件。</p><blockquote><p>例如，我们通过 <code>\\(?0\\d{2}[\\) -]?\\d{8}</code> 从文本中查找电话号码，我们可以成功查找出如 (010)88886666，或 022-22334455，或 02912345678 等格式的号码，也可以查找出 010)12345678 或 (022-87654321 等格式不正确的号码。为了解决这个问题，我们需要引入分支判断。修正后的正则表达式为 <code>\\(0\\d{2}\\)[- ]?\\d{8}|0\\d{2}[- ]?\\d{8}</code>。</p></blockquote><h2 id="分组-重复多个字符"><a class="header-anchor" href="#分组-重复多个字符">#</a> 分组（重复多个字符）</h2><p>通过限定符可以重复单个字符，通过小括号指定的子表达式（也叫做分组）可以重复多个字符。</p><blockquote><p>比如，可以通过 <code>(\\d{1,3}\\.){3}\\d{1,3}</code> 完成 IP 地址匹配。当然，这个规则有些缺陷，像 300.999.888.666 这样不可能存在的 IP 也会被匹配到，因此需要修正表达式为：<code>^((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)$</code>。<br> 笔者发现一个有趣的问题，<code>((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)</code> 测试 111.111.111.999 这样的字符串可以通过，但是测试 111.111.999.999 却无法通过。此中原因是 <code>[01]?\\d\\d?</code> 只能匹配 99 不能匹配 999。这也就是为什么上面修正后的正则表达式要严格限制开头和结尾匹配的原因。</p></blockquote><h2 id="后向引用"><a class="header-anchor" href="#后向引用">#</a> 后向引用</h2><p>分组捕获的内容（子表达式匹配的内容）有时候需要进一步处理。默认情况下，每个分组会自动拥有一个组号，规则是：从左到右，以分组的左括号为标志，第一个出现的分组的组号为 1，第二个为 2，以此类推（注意，命名分组的组号要大于未命名分组的组号）。<br> 反向引用用于重复搜索前面某个分组匹配的文本。</p><blockquote><p>例如，<code>\\b(\\w+)\\b\\s+\\1\\b</code> 可以用来匹配重复的单词，像 go go, 或者 kitty kitty。</p></blockquote><p>也可以通过 <code>(?&lt;Name&gt;\\w+)</code> 或者 <code>(?&#39;Name&#39;\\w+)</code> 的方式为分组指定组名，前面的 Name 就是分组的名称。要反向引用这个分组捕获的内容，可以使用 <code>\\k&lt;Name&gt;</code> 来完成。</p><blockquote><p>上面的例子可以改写为： <code>\\b(?&lt;Word&gt;\\w+)\\b\\s+\\k&lt;Word&gt;\\b</code>。</p></blockquote><p>也可以不指定分组的组号，不捕获分组匹配的文本，语法形式为： <code>(?:exp)</code>。</p><h2 id="零宽断言"><a class="header-anchor" href="#零宽断言">#</a> 零宽断言</h2><p>断言用来声明一个应该为真的事实。正则表达式中只有当断言为真时才会继续进行匹配。零宽断言用来指定一个位置，这个位置应该满足一定的条件（即断言）。</p><ul><li><code>(?=exp)</code> 断言自身出现的位置的后面能匹配表达式 exp。</li></ul><blockquote><p>比如 <code>\\b\\w+(?=ing\\b)</code>，匹配以 ing 结尾的单词的前面部分(除了 ing 以外的部分)，如查找 I&#39;m singing while you&#39;re dancing. 时，它会匹配 sing 和 danc。</p></blockquote><ul><li><code>(?&lt;=exp)</code> 断言自身出现的位置的前面能匹配表达式 exp。</li></ul><blockquote><p>比如 <code>(?&lt;=\\bre)\\w+\\b</code> 会匹配以 re 开头的单词的后半部分(除了 re 以外的部分)，例如在查找 reading a book 时，它匹配 ading。</p></blockquote><h2 id="负向零宽断言"><a class="header-anchor" href="#负向零宽断言">#</a> 负向零宽断言</h2><p>负向零宽断言与零宽断言类似，也指定一个位置，这个位置满足断言条件（与零宽断言条件相反，即不能满足表达式）。</p><ul><li><code>(?!exp)</code> 断言此位置的后面不能匹配表达式 exp。</li></ul><blockquote><p>例如：<code>\\d{3}(?!\\d)</code> 匹配三位数字，而且这三位数字的后面不能是数字；<code>\\b((?!abc)\\w)+\\b</code> 匹配不包含字符串 abc 的单词。</p></blockquote><ul><li><code>(?&lt;!exp)</code> 断言此位置的前面不能匹配表达式 exp。</li></ul><blockquote><p>例如：<code>(?&lt;![a-z])\\d{7}</code> 匹配前面不是小写字母的七位数字；<code>(?&lt;=&lt;(\\w+)&gt;).*(?=&lt;\\/\\1&gt;)</code> 匹配不包含属性的简单 HTML 标签内里的内容。</p></blockquote><h2 id="注释"><a class="header-anchor" href="#注释">#</a> 注释</h2><p>有时候正则表达式写的很复杂，可以通过 <code>(?#comment)</code> 添加一些注释，来增加可读性。</p><blockquote><p>比如，前面 IP 地址匹配的正则表达式添加如下注释： <code>2[0-4]\\d(?#200-249)|25[0-5](?#250-255)|[01]?\\d\\d?(?#0-199)</code>。</p></blockquote>',33),c={render:function(e,d){return l}}}}]);