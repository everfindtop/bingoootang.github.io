if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return i[s]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=s,document.head.appendChild(i),i.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!i[s])throw new Error(`Module ${s} didn’t register its module`);return i[s]}))},e=(e,i)=>{Promise.all(e.map(s)).then((s=>i(1===s.length?s[0]:s)))},i={require:Promise.resolve(e)};self.define=(e,r,a)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return i;case"module":return o;default:return s(e)}}))).then((s=>{const e=a(...s);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"6de35046573c8f4696b85f87f0471850"},{url:"assets/css/styles.7e19cd01.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/js/205.25c1c209.js",revision:null},{url:"assets/js/389.093b50a0.js",revision:null},{url:"assets/js/616.201e44bd.js",revision:null},{url:"assets/js/871.a8862a45.js",revision:null},{url:"assets/js/app.b01ac2ec.js",revision:null},{url:"assets/js/runtime~app.76135346.js",revision:null},{url:"assets/js/v-01554e16.0f9e0523.js",revision:null},{url:"assets/js/v-15e0d1af.82a75e95.js",revision:null},{url:"assets/js/v-228ea995.98660601.js",revision:null},{url:"assets/js/v-2ffc1846.80974e84.js",revision:null},{url:"assets/js/v-3706649a.8f461f06.js",revision:null},{url:"assets/js/v-4dc49caa.67a2093f.js",revision:null},{url:"assets/js/v-508c1a72.8371a628.js",revision:null},{url:"assets/js/v-57d2f725.3de95723.js",revision:null},{url:"assets/js/v-60d0b1eb.14e0e49f.js",revision:null},{url:"assets/js/v-64a2fc74.caf5c619.js",revision:null},{url:"assets/js/v-8946ff9a.9f7cf477.js",revision:null},{url:"assets/js/v-8daa1a0e.02aa9927.js",revision:null},{url:"assets/js/v-9d4f619e.cdacdde6.js",revision:null},{url:"assets/js/v-ba339de4.7d19c135.js",revision:null},{url:"assets/js/v-d037e718.342f9cdf.js",revision:null},{url:"assets/js/v-d440f426.485d5b74.js",revision:null},{url:"assets/js/v-e1e3da16.a2c13bdf.js",revision:null},{url:"code-reading/index.html",revision:"ade18b2308d1c4b580c77203b0f97608"},{url:"favicon.png",revision:"3d5693a86da6ed0504a389c3c2ca4f62"},{url:"hero.png",revision:"4840453a79a8d3d73a31a18c807de85d"},{url:"index.html",revision:"be3b24fa3ced53cf7e56c7fe0b8b9a92"},{url:"logo-144.png",revision:"6902201fa3966b4eb36d5c8a32ce4b04"},{url:"logo-192.png",revision:"c3eb2452e69c6232e30f524b9761a01c"},{url:"logo-384.png",revision:"87a6abe6fac82f349a6d5347b5470d01"},{url:"posts/2016/05/20/flexbox.html",revision:"b59c9876ba14ca3cf9d91b9d32e74edf"},{url:"posts/2018/03/27/css-grid.html",revision:"f898c07d4d0d912df0532979dc72a82b"},{url:"posts/2018/09/10/http-cache.html",revision:"477ad0eb777407234297dcd56d9fef6e"},{url:"posts/2019/02/20/regexp-handbook.html",revision:"b54c440e3a78ffc238ee47412a434082"},{url:"posts/2019/06/10/same-origin-cors.html",revision:"6db484a7c8fac34491e7716163e176f2"},{url:"posts/2021/06/24/solid.html",revision:"7e564275ffedd4bac758432ccfa7094f"},{url:"posts/images/css-grid/align-content-center.jpg",revision:"78195c1e08fa3d7009db9c79a8bc46a2"},{url:"posts/images/css-grid/align-content-end.jpg",revision:"c6de4e8f884f2f3d80246552126b630d"},{url:"posts/images/css-grid/align-content-space-around.jpg",revision:"d78b1a3569f06c143f273a8d0d123787"},{url:"posts/images/css-grid/align-content-space-between.jpg",revision:"12f344d52c8a7b24242181de0e2fc2f4"},{url:"posts/images/css-grid/align-content-space-evenly.jpg",revision:"495635de92d09b656bc02e085ef02c29"},{url:"posts/images/css-grid/align-content-start.jpg",revision:"38e918ec03d73bc4247feedf99677bf8"},{url:"posts/images/css-grid/align-content-stretch.jpg",revision:"ed2f7b7c41979512fd2853399a7f7bb4"},{url:"posts/images/css-grid/align-items-center.jpg",revision:"061420c295eeb6d774d52b5ba78dbf1b"},{url:"posts/images/css-grid/align-items-end.jpg",revision:"29bc5a279cdc8009ff24b47d656e6c81"},{url:"posts/images/css-grid/align-items-start.jpg",revision:"dacf93d4ff39c5a5a9c70850b9bd1eb5"},{url:"posts/images/css-grid/align-items-stretch.jpg",revision:"35e402e49fce4a71b3144d24bca01782"},{url:"posts/images/css-grid/align-self-center.jpg",revision:"8c5d9a24585d753b839b5974e1432c08"},{url:"posts/images/css-grid/align-self-end.jpg",revision:"f23521fdb04b1fd844a5d2ab251bf968"},{url:"posts/images/css-grid/align-self-start.jpg",revision:"98fe8223e2385faf232eb72e81d61c44"},{url:"posts/images/css-grid/align-self-stretch.jpg",revision:"a550d56724910198b05d73a606b86687"},{url:"posts/images/css-grid/grid-area.jpg",revision:"d77d685a64b92843aa2eef16afcca7aa"},{url:"posts/images/css-grid/grid-auto-flow-demo-2.jpg",revision:"87379e62ead163410ac908b1260e796f"},{url:"posts/images/css-grid/grid-auto-flow-demo.jpg",revision:"29f69875565ffcfd0464df4b041d61d7"},{url:"posts/images/css-grid/grid-auto-rows-columns-demo-2.jpg",revision:"b3fcb70c0381edf3daca465eac3e37af"},{url:"posts/images/css-grid/grid-auto-rows-columns-demo-3.jpg",revision:"81c5edaaf5049a83867a35c0442919a0"},{url:"posts/images/css-grid/grid-auto-rows-columns-demo.jpg",revision:"4f5b474760808d2d3ed6858400901843"},{url:"posts/images/css-grid/grid-gap.jpg",revision:"3dfe1cc92e435d77cd6c0b0bcb538472"},{url:"posts/images/css-grid/grid-line-name-2.jpg",revision:"f52fc0728a1cdcb28b034c21e7cd3493"},{url:"posts/images/css-grid/grid-line-name.jpg",revision:"f52fc0728a1cdcb28b034c21e7cd3493"},{url:"posts/images/css-grid/grid-row-column-start-end-demo-2.jpg",revision:"f2ddd1da573e5042c489dfc76e12babb"},{url:"posts/images/css-grid/grid-row-column-start-end-demo.jpg",revision:"37a932e59c23f49496fc90613d924f19"},{url:"posts/images/css-grid/grid-row-column.jpg",revision:"6a0188a6df57cc0a2b8d31f4d88e04f0"},{url:"posts/images/css-grid/grid-template-areas.jpg",revision:"60ce651e20881a926e4498dfb56a5963"},{url:"posts/images/css-grid/justify-content-center.jpg",revision:"15508b8eee3dcc232e757c2c88f16ada"},{url:"posts/images/css-grid/justify-content-end.jpg",revision:"4fa066af5ffb144285e095e1faad152d"},{url:"posts/images/css-grid/justify-content-space-around.jpg",revision:"b0055f2f0a923382a2133c3a77f635bc"},{url:"posts/images/css-grid/justify-content-space-between.jpg",revision:"c1e2d49e90f5a795e22da1ff848ee87c"},{url:"posts/images/css-grid/justify-content-space-evenly.jpg",revision:"9da778b545ca31822859a82d0cbbf788"},{url:"posts/images/css-grid/justify-content-start.jpg",revision:"59da8f4e4884c38315788c2cb2ba4911"},{url:"posts/images/css-grid/justify-content-stretch.jpg",revision:"efb247a6b245a50f6682c29e10bbc407"},{url:"posts/images/css-grid/justify-items-center.jpg",revision:"79e2283317994013c1c822a318e44580"},{url:"posts/images/css-grid/justify-items-end.jpg",revision:"48e3f774625c3b08343d4b4858ca5090"},{url:"posts/images/css-grid/justify-items-start.jpg",revision:"aa64a9703625e2d52ca3c2e35c2b7830"},{url:"posts/images/css-grid/justify-items-stretch.jpg",revision:"35e402e49fce4a71b3144d24bca01782"},{url:"posts/images/css-grid/justify-self-center.jpg",revision:"3baddba60b3b0dde8f524d8ceb396c21"},{url:"posts/images/css-grid/justify-self-end.jpg",revision:"cd7139ba172d1233c8247becc0d6155b"},{url:"posts/images/css-grid/justify-self-start.jpg",revision:"debbbe5ef84dd96eb57dfb5306731388"},{url:"posts/images/css-grid/justify-self-stretch.jpg",revision:"c1b861615b03862696f61c673ca695ea"},{url:"posts/images/flex/align-content.png",revision:"d8f5f6d32420392d40c861e164040c25"},{url:"posts/images/flex/align-items.png",revision:"d9ac5ed56dd762e9262a151324be7202"},{url:"posts/images/flex/align-self.png",revision:"5bdefb596cc61cba6f8a42c728cff4ff"},{url:"posts/images/flex/flex-container.png",revision:"3675fdbab34e899581ce889725a172c6"},{url:"posts/images/flex/flex-direction.png",revision:"525419b18654ea77b03a4a26574d524d"},{url:"posts/images/flex/flex-grow.png",revision:"a5a476d7c6ca553ab3d53c6b3740adec"},{url:"posts/images/flex/flex-items.png",revision:"129e7839f8a5750968e02b880a884ea5"},{url:"posts/images/flex/flex-wrap.png",revision:"0863df12bf149f9801c8859683a6cc28"},{url:"posts/images/flex/justify-content.png",revision:"92a944f3a4a9231cec7fd5c7ad3997ef"},{url:"posts/images/flex/order.png",revision:"e309585fe71069c29d4141775f717aa1"},{url:"posts/images/how-to-use-google/advanced.jpg",revision:"a0b5826fae6de04b291e19c8a37a676b"},{url:"posts/images/how-to-use-google/exclude.jpg",revision:"84a95984580e5066ed41178d2bc20b64"},{url:"posts/images/how-to-use-google/fullmatch.jpg",revision:"eb9a8b8f5fa666d9063fa85af762ef11"},{url:"posts/images/how-to-use-google/media.jpg",revision:"67d151910de489bf84253c912c3acd69"},{url:"posts/images/how-to-use-google/or.jpg",revision:"7bf9d73a66b25219b2db1846e7357b66"},{url:"posts/images/how-to-use-google/price.jpg",revision:"c9f19b416314272069e4ecb9191fee5b"},{url:"posts/images/how-to-use-google/range.jpg",revision:"095956a0b88263bf0248976801379070"},{url:"posts/images/how-to-use-google/related.jpg",revision:"8c4e301c9673ef3b2070940330638671"},{url:"posts/images/how-to-use-google/site.jpg",revision:"f8087ec1b572342aa8a7b2b84ae72144"},{url:"posts/images/http-cache/get.jpg",revision:"c297875e017ce493e8f29b7b1794b3f2"},{url:"posts/images/same-origin-cors/cors.jpg",revision:"88a6c25d3623b528e55b27a0fe1e5a74"},{url:"posts/index.html",revision:"637b3fcacbd2008d584ec5725eece511"},{url:"solutions/graphql/bff.html",revision:"9e4ebb54e9e911450ecfe1673b889786"},{url:"solutions/graphql/index.html",revision:"4622549d7802564aeede02caf8fa66fd"},{url:"solutions/index.html",revision:"3ebaf2fe9b1a436deea3cde94cc8d10f"},{url:"solutions/micro-frontend/index.html",revision:"49d4ad2eab23a2cc4fe85c7a1e576866"},{url:"solutions/micro-frontend/intro.html",revision:"a00f365e292000c475caabc8001872d4"},{url:"tools/how-to-use-google.html",revision:"618d7b9c19ad187f6aeb3578102bb9d5"},{url:"tools/index.html",revision:"8b9598c7c2ce4329b61e0f920557c77d"}],{})}));