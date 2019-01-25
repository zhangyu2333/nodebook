/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f2a9af3a9b3a9aaaa2dc8705e99d785"
  },
  {
    "url": "assets/css/1.styles.27d21806.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.54abfbd5.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.eda86128.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.bd344d2d.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.4f83f8bd.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.e21b0013.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/7.styles.65b127a3.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.2c15206a.css",
    "revision": "fecdab6fbc2c34817d0b01b77565c040"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.27d21806.js",
    "revision": "b7970ca52a3e1a3c047516103fcacabb"
  },
  {
    "url": "assets/js/10.654b4d7f.js",
    "revision": "82881b724b39026fbfe5a347c04609d4"
  },
  {
    "url": "assets/js/11.ab175195.js",
    "revision": "7cfae245f25d72294e44cdb68dbb8371"
  },
  {
    "url": "assets/js/12.07a15390.js",
    "revision": "152cb93e5b53b57be20e535b3e7b6c93"
  },
  {
    "url": "assets/js/13.bf258799.js",
    "revision": "89b7f64eaa3a21b752260aded590a1e5"
  },
  {
    "url": "assets/js/14.1f51314d.js",
    "revision": "59bd6153b4ce3f7985cac98d99821cc5"
  },
  {
    "url": "assets/js/15.c280a019.js",
    "revision": "4a66aec82d691026573edad4f782522c"
  },
  {
    "url": "assets/js/16.5a554acf.js",
    "revision": "ab230e498675e00b7b371563d8df7d1a"
  },
  {
    "url": "assets/js/17.562ae3a4.js",
    "revision": "fcc5f484584a107975b2a619480f84a4"
  },
  {
    "url": "assets/js/18.21446a84.js",
    "revision": "41cc6b95fa871e7f1dbbdcf638c54123"
  },
  {
    "url": "assets/js/19.601f3bda.js",
    "revision": "971ef2e3ffffeeea862f7e5c5029e200"
  },
  {
    "url": "assets/js/2.54abfbd5.js",
    "revision": "01eb8d19f3d89dd9f8af43ba63349b1c"
  },
  {
    "url": "assets/js/20.56cbab5b.js",
    "revision": "83fe8f4aa633e162b9e4a32630cb5ed9"
  },
  {
    "url": "assets/js/21.24c86fd5.js",
    "revision": "c24f8697787c6cba5972201ee74e262e"
  },
  {
    "url": "assets/js/22.bfc70da3.js",
    "revision": "b98640618ecefb47918d662c9cae2fad"
  },
  {
    "url": "assets/js/23.cf90c12c.js",
    "revision": "4479fe0b592aec79ba0922f8c22e65e6"
  },
  {
    "url": "assets/js/24.d9d1976a.js",
    "revision": "03a73d2dba5b4f33bf6bd90277ae3115"
  },
  {
    "url": "assets/js/25.f3da7aa9.js",
    "revision": "e7518b8fd7cdf00a550297640f3bdc61"
  },
  {
    "url": "assets/js/26.4b9e3c0e.js",
    "revision": "a82f2a3ff83b3400ea7dbd37f3b60baa"
  },
  {
    "url": "assets/js/27.a9e7442c.js",
    "revision": "8fe78fa0dd90e185d7bad5b254b5be68"
  },
  {
    "url": "assets/js/28.404a2f73.js",
    "revision": "cdd9d9e0e59d39b4a8a0cf30d3d10934"
  },
  {
    "url": "assets/js/29.5db914ff.js",
    "revision": "9f26bc86d0b3a2d55422e5634e1cb320"
  },
  {
    "url": "assets/js/3.eda86128.js",
    "revision": "255c1956a89d0fe9b905672f961dd94e"
  },
  {
    "url": "assets/js/30.88573f9b.js",
    "revision": "55664c1e2bd692fc7d35ddb5307271fe"
  },
  {
    "url": "assets/js/31.8f80fe54.js",
    "revision": "158619402a2c298af2cf83d1185c93ab"
  },
  {
    "url": "assets/js/32.59c6a91c.js",
    "revision": "2bc9aedc43559d2967c80007e340900e"
  },
  {
    "url": "assets/js/33.cbd10c93.js",
    "revision": "46dbf1ef47c04d515980013880da5f03"
  },
  {
    "url": "assets/js/34.6dcacab0.js",
    "revision": "c1b86be63971b479512371164d5c7516"
  },
  {
    "url": "assets/js/35.b57e19d8.js",
    "revision": "2a948f8878c4b491c6c921c254b91cc7"
  },
  {
    "url": "assets/js/36.144343bd.js",
    "revision": "bbbdeecffd6f7b32ebd31f87a43720aa"
  },
  {
    "url": "assets/js/37.f15dc6ad.js",
    "revision": "61930d351d7b94299614d3484504f9f8"
  },
  {
    "url": "assets/js/38.ef611aca.js",
    "revision": "7c48412a0998d440b0faa66d98b8c5b8"
  },
  {
    "url": "assets/js/39.7198f5e3.js",
    "revision": "914e1cb061f424c6d051326d020b4a52"
  },
  {
    "url": "assets/js/4.bd344d2d.js",
    "revision": "4f6950a3b33e933ad1979f4afc575431"
  },
  {
    "url": "assets/js/40.87a7a00d.js",
    "revision": "9e8cf96e8f4de70ccda11d242c69fd88"
  },
  {
    "url": "assets/js/41.ea9774e7.js",
    "revision": "d9046e060f3bbf69777ca1c9ff9429f4"
  },
  {
    "url": "assets/js/42.1a7db393.js",
    "revision": "d400e3b0d757e97ad67fd0a3149a1a43"
  },
  {
    "url": "assets/js/43.ff59f968.js",
    "revision": "4c7465b7c0e8852e49f26873f6822a4b"
  },
  {
    "url": "assets/js/44.abe55d27.js",
    "revision": "68b005daf17dca78e14c0d46f44a5aef"
  },
  {
    "url": "assets/js/45.ef40ad91.js",
    "revision": "d970e4690dbc49f70da0ae979d9a0987"
  },
  {
    "url": "assets/js/46.713dee08.js",
    "revision": "46c8d689d38d5ee2458e6718d0851615"
  },
  {
    "url": "assets/js/47.314edbbe.js",
    "revision": "588181e2ea456a2dac4c83722e9151d7"
  },
  {
    "url": "assets/js/48.a37a0c66.js",
    "revision": "f1aae229521bab921178365d0632c23a"
  },
  {
    "url": "assets/js/49.2bd2444e.js",
    "revision": "7ccdcff9ad765d8fd9690f0e48ebd1e9"
  },
  {
    "url": "assets/js/5.4f83f8bd.js",
    "revision": "936c23e091703df830676b5bb7927acc"
  },
  {
    "url": "assets/js/50.3d018e88.js",
    "revision": "d95bb3b840d06b665c98f17eb5d070a4"
  },
  {
    "url": "assets/js/51.d6f00b82.js",
    "revision": "243b5877b570baf5ab411473230e4671"
  },
  {
    "url": "assets/js/52.3064ed68.js",
    "revision": "94421773c932ba0bd10e65dfb8e1c53a"
  },
  {
    "url": "assets/js/53.2746e33b.js",
    "revision": "982707e06d901c1391846fbaf015bdac"
  },
  {
    "url": "assets/js/54.b22be80c.js",
    "revision": "64b1163e0b2abb7941e3233e987a03b0"
  },
  {
    "url": "assets/js/55.b3985bd6.js",
    "revision": "9781c7591b5e528c729c528266b82fdc"
  },
  {
    "url": "assets/js/56.d83107b4.js",
    "revision": "3c7f67058b7338332044bdb25bf3f515"
  },
  {
    "url": "assets/js/57.139fee6a.js",
    "revision": "ff7c35a987284600cf87f45049a854f7"
  },
  {
    "url": "assets/js/58.6c8fe65a.js",
    "revision": "bae031f9e640def66650a8ffb2702d5f"
  },
  {
    "url": "assets/js/59.45cf1e1d.js",
    "revision": "5fc02c628d80f9aa6123d004fa005a7f"
  },
  {
    "url": "assets/js/6.e21b0013.js",
    "revision": "2977d276a5cb061e59d8caa9dae7d83b"
  },
  {
    "url": "assets/js/60.8d3a6d20.js",
    "revision": "ca9fd0d357c4d0269bb1ba956b90d6ff"
  },
  {
    "url": "assets/js/61.8f710d55.js",
    "revision": "94bf641c4c1ece6617c755186738625b"
  },
  {
    "url": "assets/js/62.cb615e16.js",
    "revision": "2691670d694307285ebfbc4ed87fd394"
  },
  {
    "url": "assets/js/63.2a494333.js",
    "revision": "c79b75422c25047ac0dc35a421d45196"
  },
  {
    "url": "assets/js/64.78af4330.js",
    "revision": "01208ecbbbd8a64b52dcfff8d0ade2b2"
  },
  {
    "url": "assets/js/65.6b056af6.js",
    "revision": "2de4fbe683689fb98d57cfb4e3464f00"
  },
  {
    "url": "assets/js/66.d89d8c9f.js",
    "revision": "76527ab13108f2c2c866eb4a42c896ff"
  },
  {
    "url": "assets/js/67.0598ad50.js",
    "revision": "7f0376dfee217d932c9ebcbf760eead3"
  },
  {
    "url": "assets/js/68.db398bd7.js",
    "revision": "0c5ffeff78f3602301d17ba6a4ec33cb"
  },
  {
    "url": "assets/js/7.65b127a3.js",
    "revision": "a065a1cd372fd5240a8700c4498df6c1"
  },
  {
    "url": "assets/js/8.ac139e3e.js",
    "revision": "d23237490c028bab0220dec2e3efd280"
  },
  {
    "url": "assets/js/9.de2de4bc.js",
    "revision": "72424efd4aaca8d7b3b4fdb2b433d010"
  },
  {
    "url": "assets/js/app.2c15206a.js",
    "revision": "dc3c0466f448e110b19e5562e7a272ad"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "config/index.html",
    "revision": "03f22a5d7e5c41fad501338e9f31b1d6"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "c323a5a8c25a4246f4e47309c6b3b000"
  },
  {
    "url": "guide/assets.html",
    "revision": "627fab28c36fbf98d8ef284c880a34fe"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "6ca06024d6935fca51de1f22d396b3f8"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "b25a6aed54464fd78a89ec87bb6a82cf"
  },
  {
    "url": "guide/deploy.html",
    "revision": "6b2641daf472e975f7e277ede3739ef8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5577762325251ecce3e56115d228aec7"
  },
  {
    "url": "guide/i18n.html",
    "revision": "83ff03c70bb19e226b29d4bffcfbaf01"
  },
  {
    "url": "guide/index.html",
    "revision": "6a06a0e92b96466f0e59223ba1a39ba4"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ad334374af6657f1bc22d599a64ea6d3"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "da5266bf7248788e42bedfefc6272130"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "b25745c018f329a6fda5d8d7c11af7d2"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "5faef4e1338c3d2b5eadfc0b4cb73509"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "67ac0f73139eb5546d909a1e395dc950"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "9b510a5be5d1227441b1e442e72a2144"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "11410cbcd6f37d4d69dc4ce896e52680"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "6372262a52b594d37bc7eccd5f086778"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "b909bc0c57b1f01521ad89ff93d8e46e"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "7392fa5e42005352651477dd3a471346"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "21d49cf739531312b6858c330133d31a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ef6c2f7cd36d1719cda3eb9302bb62fb"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "ef0a7d5beafccbef5f199d3d13f5975f"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "d67ce1808eb95ab454940e674e4eed99"
  },
  {
    "url": "zh/index.html",
    "revision": "da3c07167b8bbc621b8bd1d6035e8c8d"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "95127d18847fce2769c1eb0c018862cf"
  },
  {
    "url": "zh/interview/headline.html",
    "revision": "d1004d234473b0a71cbc851af5a8fcb2"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "ebeed46ceaefc27ba8f8fb1ddc728303"
  },
  {
    "url": "zh/interview/quick.html",
    "revision": "9840a313ee91b41a5c521f8bc582525e"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "8f6fbe3288d3d79ab81f94cabaa07e19"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "e2ed3a3719a1edf2366c30333779e159"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "5d9cde7b02c432418143fd57f0450168"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "6f510f6a52316b716947ff2af505332c"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "0328e031a203e6ee7fa4efee60db824a"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "52ab56be8974549191dbd668c05ca736"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "1724c2f45ec3503842c5fa085c65ed57"
  },
  {
    "url": "zh/react/index.html",
    "revision": "fc94d9db1d1a3607bbe25255354259e7"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "efc78b9a7c0bfc7babc6e67173d95ac0"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "a96b05a5b36b918ab71ff75bf6bc58f5"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "880f1d475ab179ee911aa4ec027b9ea1"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "51c6bb8edae4170d726df3627fbd6673"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "9cdae7b1e48e3741669aef6f03409acd"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "1bf4d92cfb97089f54deb71c967e780a"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "e3cff62b8bd8251f1ba75d1df065a107"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "de9ffd277d07df6f6a8d6b66a97ef3c1"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "31d2c5efceb388c80fad0b3953376a83"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "0285a56fe756faac7e8d7a3a441596ab"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "fb068f792af58d770da5ec608ef88704"
  },
  {
    "url": "zh/standard/node.html",
    "revision": "463df9ed4054f091bb87614cfb6d0294"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "3d29a2a76ae38aeb89afbd057bbe65b3"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "4853329c546f551915d42f278088a8c6"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "d5bfddf451a73c5784eb0a4b691d963c"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "5d146b833314a80b771f23e66ecfb095"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "5d4c729fea65d0adf4881116e99b5c69"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "dc7ee23dc188735bc13f41845037e4b6"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "b45b2cba7c140d9b95981137026ab1c6"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "cdef28d9c26e7cb19a1208031379ad88"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "8d400d6e6e578340e71aa3a40ea4e8aa"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "771a4f885e01db9d34a0f878e7929015"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "60d0dd0907f0d40a6114c7a6af5b3d8a"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "c005a1c788ce90bf0933f4be49922f76"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "5d4bf7d807b60d7e23b1e1025dc95a5e"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "8228804e74238e8cc013b1026ce24132"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
