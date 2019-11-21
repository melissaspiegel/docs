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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "458c7bacc01eb9e89295913c96d07b73"
  },
  {
    "url": "assets/css/0.styles.4514c616.css",
    "revision": "754cb7a8a539b425d4946974fa5379e9"
  },
  {
    "url": "assets/img/accordion.c53c2160.png",
    "revision": "c53c2160beaff1bf09e2d7c68b9c428a"
  },
  {
    "url": "assets/img/active_plugins.f753cef9.png",
    "revision": "f753cef93c12b2ac64a11839ad158459"
  },
  {
    "url": "assets/img/background.be51f66e.png",
    "revision": "be51f66ead40f19762c1499a260dfddc"
  },
  {
    "url": "assets/img/button_set.e1c5f873.png",
    "revision": "e1c5f87341d8616302a9e875c98e5009"
  },
  {
    "url": "assets/img/checkbox.8ff588d8.png",
    "revision": "8ff588d87c0766105a694c700e80868d"
  },
  {
    "url": "assets/img/codemirror.c0516047.png",
    "revision": "c05160471955a0426f8da4a5d0b46087"
  },
  {
    "url": "assets/img/color_gradient.3bcd0cb8.png",
    "revision": "3bcd0cb817006399542865e811551825"
  },
  {
    "url": "assets/img/color_rgba.a7a2975a.png",
    "revision": "a7a2975aac49bf53bc9a1621a49afc18"
  },
  {
    "url": "assets/img/color_schemes_picker_color.4506076b.png",
    "revision": "4506076b88c5cc5df3ee4708df433466"
  },
  {
    "url": "assets/img/color_schemes_picker.5ca88a95.png",
    "revision": "5ca88a9593b59d6ce795f3cf5119536f"
  },
  {
    "url": "assets/img/color_schemes.2b73ff48.png",
    "revision": "2b73ff48d1ac4ff299eba52827647beb"
  },
  {
    "url": "assets/img/color.f1100a7f.png",
    "revision": "f1100a7f0b926c3e03a562283b0b12e3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/editor.0e39ed42.png",
    "revision": "0e39ed428e8debd9d069bd7fdc0f2249"
  },
  {
    "url": "assets/img/gallery.db07115f.png",
    "revision": "db07115fa418bb7e697ebad58dfec802"
  },
  {
    "url": "assets/img/google_maps.60a06a00.png",
    "revision": "60a06a000a4013727f40f8b4055f4b0a"
  },
  {
    "url": "assets/img/hints_alignment.63b7effc.jpg",
    "revision": "63b7effc1a8575d280f8f6b730f74378"
  },
  {
    "url": "assets/img/hints.f21699b3.png",
    "revision": "f21699b328a9bd6965a2e5ad998564b4"
  },
  {
    "url": "assets/img/icon_select.fcf0619c.png",
    "revision": "fcf0619c47a2ab496846458980a2a734"
  },
  {
    "url": "assets/img/image_select.4e71f892.png",
    "revision": "4e71f89281b32d8817ccfc329e7917c7"
  },
  {
    "url": "assets/img/imex.ffc40e5c.png",
    "revision": "ffc40e5c7617e49405e8159e1dc91a39"
  },
  {
    "url": "assets/img/media.157e2614.png",
    "revision": "157e26141bcec2553dfa08a2d284139b"
  },
  {
    "url": "assets/img/multi_text.29cbde62.png",
    "revision": "29cbde62bdeb76a9e52b82521db8ae6d"
  },
  {
    "url": "assets/img/palette_color.eeac131a.png",
    "revision": "eeac131a92b1ed2408981db8791c35a7"
  },
  {
    "url": "assets/img/radio.209501f2.png",
    "revision": "209501f2fa4cb72bd6febaabbfcc144a"
  },
  {
    "url": "assets/img/raw_full_width.52d22ecf.png",
    "revision": "52d22ecf53886f0d9d8a4f20c18c559f"
  },
  {
    "url": "assets/img/raw_sectioned.cdd956b1.png",
    "revision": "cdd956b1f2fd197b6e87508b3a585730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/section.309ec967.png",
    "revision": "309ec967c4769899b632e64e7c7caad9"
  },
  {
    "url": "assets/img/slider.82e0bf9a.png",
    "revision": "82e0bf9a2183def90b87728b42f4c789"
  },
  {
    "url": "assets/img/slides.8b60ff5a.png",
    "revision": "8b60ff5a17111c97f8cdb058739a903c"
  },
  {
    "url": "assets/img/support_hash.e4e84d3d.png",
    "revision": "e4e84d3d9b5219b4a91e657de563b8c5"
  },
  {
    "url": "assets/img/text-multidimensional.9034ca24.png",
    "revision": "9034ca24d0bda48c0533b362fdfc85b2"
  },
  {
    "url": "assets/img/text-simple.08f2a147.png",
    "revision": "08f2a14727cb26b3bd4778dc7c17b1ec"
  },
  {
    "url": "assets/img/textarea.8550ef5d.png",
    "revision": "8550ef5da1606f4da02ef25d1a5aec70"
  },
  {
    "url": "assets/img/typography.9680d7a0.png",
    "revision": "9680d7a0bc5f1b5cf2a4ee160c660637"
  },
  {
    "url": "assets/js/10.85c5eba6.js",
    "revision": "11b547290e443db869a2ecd5a37d44f8"
  },
  {
    "url": "assets/js/100.799fec1c.js",
    "revision": "6478f1eefb3411545d396115fd616e1c"
  },
  {
    "url": "assets/js/101.82736a38.js",
    "revision": "7633d3686acd930003887071800ea606"
  },
  {
    "url": "assets/js/102.3882dd4c.js",
    "revision": "2eb1e785ca53dad09a12a6737d54831c"
  },
  {
    "url": "assets/js/103.e9f6bf2d.js",
    "revision": "3b7ef3b850b94ffe28a48f764afafc25"
  },
  {
    "url": "assets/js/104.2d7f5c92.js",
    "revision": "31f8953ee01ba64407e6c716115aab3e"
  },
  {
    "url": "assets/js/105.3fb45636.js",
    "revision": "442d2992c5e89b1a00ff7908e00f5199"
  },
  {
    "url": "assets/js/106.3b5b7393.js",
    "revision": "af686d27884a8d4d74c853564757b567"
  },
  {
    "url": "assets/js/107.6a12e935.js",
    "revision": "657f534b7ef243fa8f853313b5a246fa"
  },
  {
    "url": "assets/js/108.36a3c260.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.fd802849.js",
    "revision": "5df6ad43b89306eae13419838cea44b0"
  },
  {
    "url": "assets/js/12.0bb771c0.js",
    "revision": "5066b044e98bd2ce4154236c66af2ad8"
  },
  {
    "url": "assets/js/13.ded3513e.js",
    "revision": "7764740bc675627c519f1d3fb97a4e58"
  },
  {
    "url": "assets/js/14.2b0699b5.js",
    "revision": "3418511caae8025f770581c5629faca9"
  },
  {
    "url": "assets/js/15.ef880fb6.js",
    "revision": "13963d45e2833118f8080c5a84e7366b"
  },
  {
    "url": "assets/js/16.6c6f4a40.js",
    "revision": "c3f86d794c666680ff4cc96a22370f02"
  },
  {
    "url": "assets/js/17.953e62c7.js",
    "revision": "1afb10e4cfbbbb5d99438982a3d7e451"
  },
  {
    "url": "assets/js/18.4222022f.js",
    "revision": "4b4f55092c02b9d30d6185bee2c90002"
  },
  {
    "url": "assets/js/19.f4a3c36f.js",
    "revision": "1a27a4380ac91e54d5655bcc8bb6064b"
  },
  {
    "url": "assets/js/2.ccc392ab.js",
    "revision": "61c928409a48f11943a50928486d3366"
  },
  {
    "url": "assets/js/20.faf56cce.js",
    "revision": "f390c43df2263f6129750f7ea5687523"
  },
  {
    "url": "assets/js/21.f43ebd64.js",
    "revision": "9eb2b141045105051143f7dc0d852560"
  },
  {
    "url": "assets/js/22.3a639a96.js",
    "revision": "652a8d950062137d5e8ce33eb0ab27e1"
  },
  {
    "url": "assets/js/23.b072d1b8.js",
    "revision": "2332a05135c1c5948075bb69c5dcae1a"
  },
  {
    "url": "assets/js/24.ac009326.js",
    "revision": "22be30f03dba55164669e7b2b0ded706"
  },
  {
    "url": "assets/js/25.0cd6932e.js",
    "revision": "f2ca26362738994e95d271fa78fe1aa5"
  },
  {
    "url": "assets/js/26.350730e7.js",
    "revision": "88356d66c7335cade81eac889c8cf3c6"
  },
  {
    "url": "assets/js/27.84ee4e1c.js",
    "revision": "6771bef6bd1a5d4a8aff7c2a3649d225"
  },
  {
    "url": "assets/js/28.708c5c32.js",
    "revision": "8995cb4bb61829d2b5f0cf9968a1a634"
  },
  {
    "url": "assets/js/29.1e4dee26.js",
    "revision": "622a755404e5c0b3fe8c7bc891a21216"
  },
  {
    "url": "assets/js/3.f9749d85.js",
    "revision": "f5d0a7a127cf3b3ef169f3690d5f2130"
  },
  {
    "url": "assets/js/30.75baa1cc.js",
    "revision": "996130335894d9bb133cfcfe2bcc5b29"
  },
  {
    "url": "assets/js/31.fdcb16da.js",
    "revision": "2b62c892adb01a96f37779fdc0061827"
  },
  {
    "url": "assets/js/32.52c9a67d.js",
    "revision": "8a0b64693b463cc6aff53e2dbcdeb0e6"
  },
  {
    "url": "assets/js/33.648727c1.js",
    "revision": "c9f06ed988439f3c4b1ca2efa6ed57f3"
  },
  {
    "url": "assets/js/34.083361d1.js",
    "revision": "ba08e9cbc4850b521be2099f6cee07e0"
  },
  {
    "url": "assets/js/35.68b096d3.js",
    "revision": "2d545c70d29a47dfbafa2c1bc91214c2"
  },
  {
    "url": "assets/js/36.65b57796.js",
    "revision": "cfc9baf73731f6e6f8ba7b4c43d31e5c"
  },
  {
    "url": "assets/js/37.e33e6385.js",
    "revision": "e8e0f8238aff4778c62cfa020c4a2670"
  },
  {
    "url": "assets/js/38.e2cf1a28.js",
    "revision": "cf4f8244f9d1f9532f559afbe0a8244a"
  },
  {
    "url": "assets/js/39.48d2e2fe.js",
    "revision": "f0e0b128fb77040b8915b682a50e7dd4"
  },
  {
    "url": "assets/js/4.3c07a4db.js",
    "revision": "b0e3e11a1271c59ac0ecbee983d3227a"
  },
  {
    "url": "assets/js/40.42a94d5d.js",
    "revision": "559eb7a6e5f042974363bcb6a294fae5"
  },
  {
    "url": "assets/js/41.7d3f4293.js",
    "revision": "9e1a4d155dc54145ef94ce9052227b3e"
  },
  {
    "url": "assets/js/42.233cca26.js",
    "revision": "14b4949ea155b36d0b79c1ea449d00ff"
  },
  {
    "url": "assets/js/43.61f03e69.js",
    "revision": "1794af18dae213c9a6d619a082f08fc6"
  },
  {
    "url": "assets/js/44.3467f697.js",
    "revision": "b05af29266424b57d12911d9001a1e10"
  },
  {
    "url": "assets/js/45.1c75531b.js",
    "revision": "76095438cef131a1ad67c7d239641129"
  },
  {
    "url": "assets/js/46.36307780.js",
    "revision": "a3c6bea65a407d51d6dd6ac84e6db8c6"
  },
  {
    "url": "assets/js/47.739aff84.js",
    "revision": "acda6f7e713a4181d87d7e320e78f439"
  },
  {
    "url": "assets/js/48.927f3c58.js",
    "revision": "70c453d35067d7c112b1ff299aaae3af"
  },
  {
    "url": "assets/js/49.8ee34470.js",
    "revision": "cc87a43462dd52705c02e311ed0d8753"
  },
  {
    "url": "assets/js/5.016ee0ed.js",
    "revision": "cdfd05b07b1931b31ab8b2dd30f2be6d"
  },
  {
    "url": "assets/js/50.a742c41f.js",
    "revision": "b53a063c7b7b24aac68a1869ce95cc8a"
  },
  {
    "url": "assets/js/51.e520bcbb.js",
    "revision": "d4c1123d5f70938acd572c483bc7666e"
  },
  {
    "url": "assets/js/52.811f09d5.js",
    "revision": "886373489767655ce662782bd6a40393"
  },
  {
    "url": "assets/js/53.01e1edac.js",
    "revision": "1968086777a16b9ad59398c9905bb536"
  },
  {
    "url": "assets/js/54.ef585644.js",
    "revision": "48f51408d78286740eb3c47afd36f69a"
  },
  {
    "url": "assets/js/55.28158b17.js",
    "revision": "20b9c9baf29ad855bf0f7079ca12261d"
  },
  {
    "url": "assets/js/56.697fd7d2.js",
    "revision": "ae15fb8be1b9c118e0879ef4c8b4f614"
  },
  {
    "url": "assets/js/57.d3875133.js",
    "revision": "c66f5bf5a381a61e5c5628c2c1bd5ffd"
  },
  {
    "url": "assets/js/58.dc7ddb8e.js",
    "revision": "cc974280c1c0f8f7ea96671ad71e31ff"
  },
  {
    "url": "assets/js/59.04a6afea.js",
    "revision": "a6b49532b8a6cc960a7cf43c17d1d387"
  },
  {
    "url": "assets/js/6.6105f6f5.js",
    "revision": "65ca17050cefc25aff3f002435a124de"
  },
  {
    "url": "assets/js/60.25a2c376.js",
    "revision": "06a36aa29ef8ed91cfff7cbd295ff468"
  },
  {
    "url": "assets/js/61.ba84df11.js",
    "revision": "60a78e3e596cb6939527d117c7b21165"
  },
  {
    "url": "assets/js/62.4729c448.js",
    "revision": "d21ac6c6b84635ee040a6486041f9e9a"
  },
  {
    "url": "assets/js/63.8c81a0e2.js",
    "revision": "d64812a5e97e4b6f97bb444bcdbe879a"
  },
  {
    "url": "assets/js/64.11cc5f75.js",
    "revision": "4813b17bc6eb2dcf02a93f8ecb9d9ac9"
  },
  {
    "url": "assets/js/65.5e10ee66.js",
    "revision": "48a2ac97c89e5cf944bf3cacf4e56524"
  },
  {
    "url": "assets/js/66.4b3497c6.js",
    "revision": "c6bfb2095a5632f3f43b236959c7d0b1"
  },
  {
    "url": "assets/js/67.8f61d51f.js",
    "revision": "222f75f9da86f37062cb8bdc8c46da78"
  },
  {
    "url": "assets/js/68.bd09ad73.js",
    "revision": "318b9d99c1ccf69575f83bb055ecced5"
  },
  {
    "url": "assets/js/69.3ab2b322.js",
    "revision": "065d295bff2482a90a68cfffc664f7a1"
  },
  {
    "url": "assets/js/7.c0835467.js",
    "revision": "2563c272e3984c34b217f1a4016e7c99"
  },
  {
    "url": "assets/js/70.17c23bc2.js",
    "revision": "f56c3a368222c3ee2eb723ec575ad57e"
  },
  {
    "url": "assets/js/71.94183313.js",
    "revision": "6757351bf6bfa559a83e2d45aeed36d0"
  },
  {
    "url": "assets/js/72.f1d151f0.js",
    "revision": "aecfa382089eab0628b8cf0aedf03f4a"
  },
  {
    "url": "assets/js/73.e8807bab.js",
    "revision": "f2ace1dccedc202ae4dace5eddcb34f0"
  },
  {
    "url": "assets/js/74.f4d43b1f.js",
    "revision": "96e3aa7ef8d923272b17caf522ef5f5b"
  },
  {
    "url": "assets/js/75.18f7fc1f.js",
    "revision": "8cfd5d5d8fde68e21496f5a3b2357851"
  },
  {
    "url": "assets/js/76.1f4a36c1.js",
    "revision": "f156e316d98b8bf557e11a18f9c628d8"
  },
  {
    "url": "assets/js/77.e7f37592.js",
    "revision": "124cd5bab061fdb02d7dcc96ea22ca0a"
  },
  {
    "url": "assets/js/78.2f6b4613.js",
    "revision": "4c37e143bc8f2b18dd60883f0698375c"
  },
  {
    "url": "assets/js/79.5b0df28e.js",
    "revision": "f5cdea07aac5b64728aa05c5baa49191"
  },
  {
    "url": "assets/js/8.814669ff.js",
    "revision": "8df9da0abb43377051395ccb3d4cd510"
  },
  {
    "url": "assets/js/80.4abe9762.js",
    "revision": "918b2feabb8ca7ea6755d7cc876cb99d"
  },
  {
    "url": "assets/js/81.634ac711.js",
    "revision": "aa07c5f15774147064afbab7e9336272"
  },
  {
    "url": "assets/js/82.54ff8320.js",
    "revision": "abd5c76b5807ee3806b479778c14cd9a"
  },
  {
    "url": "assets/js/83.88a911ad.js",
    "revision": "fa5b82663ea46a93ddd633be171d8df6"
  },
  {
    "url": "assets/js/84.f6b58983.js",
    "revision": "79fad13f741c9473df82573035143421"
  },
  {
    "url": "assets/js/85.fb1d86b9.js",
    "revision": "1601b2556d08bd464587a80e1f2bd3e2"
  },
  {
    "url": "assets/js/86.8d6295bf.js",
    "revision": "12b4810687d508ce90d4bef6da86a9c4"
  },
  {
    "url": "assets/js/87.8b681e5b.js",
    "revision": "0cb8e60e275c196155f0a195110a8912"
  },
  {
    "url": "assets/js/88.d389caad.js",
    "revision": "204562535feeccc3d4e063dfa8393dfa"
  },
  {
    "url": "assets/js/89.4fcb75f4.js",
    "revision": "279bac69086b858a12b09f9374abb59f"
  },
  {
    "url": "assets/js/9.514276a3.js",
    "revision": "8f827b67d88e246f96d82d1e793b1953"
  },
  {
    "url": "assets/js/90.f9f0de18.js",
    "revision": "80e424dc1b30e605925c4f085eedf46e"
  },
  {
    "url": "assets/js/91.9f07a3f4.js",
    "revision": "dcfcf44acea3f463b6b019eeafe04e44"
  },
  {
    "url": "assets/js/92.ae82dce1.js",
    "revision": "cc4ab3a5454959ee1b3f2fdaeeaf7524"
  },
  {
    "url": "assets/js/93.0b773c24.js",
    "revision": "2e7c92796d70c9df3e3834b0ca7d7e2a"
  },
  {
    "url": "assets/js/94.4ef57dbf.js",
    "revision": "48c92ba27c7561d1dff7477f41591674"
  },
  {
    "url": "assets/js/95.b4910f1e.js",
    "revision": "97f1e42beb8efefefaa5ed3a1798b5bc"
  },
  {
    "url": "assets/js/96.b9437ec6.js",
    "revision": "51123bed140d7af0345384464d975d98"
  },
  {
    "url": "assets/js/97.ed8b6674.js",
    "revision": "a06133ead11b11812eb34115942eaff8"
  },
  {
    "url": "assets/js/98.dc28d1c0.js",
    "revision": "af77da15e8a695c6d0a5734c695b0fa5"
  },
  {
    "url": "assets/js/99.c3dc7cae.js",
    "revision": "978f7cc88621631982617039654dd353"
  },
  {
    "url": "assets/js/app.252a79d6.js",
    "revision": "7ffe2551c078445b1c933cd1c2aaa88e"
  },
  {
    "url": "configuration/api.html",
    "revision": "8a52e4deee42f6f3a2875388d1a101fb"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "9186f8139a5784ddce57108c62024ca4"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "e55c5b0ae2a03549e38d240725d1d56c"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "a0f462c5c482ef4e50f46155f9c797a1"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "d519153a2c859c1f28d8d70d3b639a4b"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "5c486d6548c6cb3f938eaa39b900487b"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "9e085e7811210e88248c35abeea816f5"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "61ee89922ecfe0ff636cb1416e433b0e"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "db36f069835330bf4e672f345481cf8d"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "5e714ad60caf515cf3055ba2c2f57c93"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "70e26646c827093896a040fd92bfd4d1"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "84e03c484cb22b8d02473a84cff81373"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "cd0eaadd8f29d5fffd27cb8fa3faaa0f"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "de1e405622c333f1ed44d06eb63010ee"
  },
  {
    "url": "configuration/index.html",
    "revision": "2e5e178b35ecfa94a2c3e478df89aee0"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "1342bba1c74680cdf0f3090440102662"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "796f6dc470df539eb5faa575a3c81814"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "c6a1ec77f804496deb9395b193371b77"
  },
  {
    "url": "contributing.html",
    "revision": "e80aa5aced5d7192efd747e6edfb1dd3"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "43a34aac902ca977c60de051b5f37ec3"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "e41e67fd92b587081320c0e715a82613"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "58798c7ab6a14c360efdf94cb7a5c84d"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "a4dc7403c44646b4cadebf0f058f6c2c"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "c469b385d8530d768828797920c85779"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "c8b1a9ee6117de0d2670ca8756fc8c7c"
  },
  {
    "url": "core-fields/background.html",
    "revision": "55a06c8f3014201fef74072e44e1773b"
  },
  {
    "url": "core-fields/border.html",
    "revision": "9db6467e7ed1539895acfbb61817ba12"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "fc7a188d8a2312876100d3a2f40b0487"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "bc1128b228b048de34367eac1e26811c"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "1764f73b5c7ee7b0f6691b0acb3c5dc9"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "d47b80328cf3ada9968add93e8fdcac7"
  },
  {
    "url": "core-fields/color.html",
    "revision": "dccb67a1a38080ab8778a25250b2fb11"
  },
  {
    "url": "core-fields/date.html",
    "revision": "f2d126317264343141687e97036c5eb0"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "0ae223cdd6dde4dac8339ab51804777e"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "42d4fdda1ee2339deb7364c5cf05c641"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "708262c59adc30daf3720390554760f0"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "3d1ed64c38d917bdf5a87e52cda08220"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "8613da59be0e450f6bf0b8901cf08aaf"
  },
  {
    "url": "core-fields/index.html",
    "revision": "ac2ccda0d4687d6a121fae4a3a3cfc85"
  },
  {
    "url": "core-fields/info.html",
    "revision": "545cb73518d08df3ec60e64e1698cdf9"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "93165ebe07428d220c60d93049d19a9a"
  },
  {
    "url": "core-fields/media.html",
    "revision": "46b41deccaff44cf28daee3c83edad01"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "87da94d1d7f52e2ff27f4dc9009fb3e2"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "639f19168e863d317de9f902114786ad"
  },
  {
    "url": "core-fields/password.html",
    "revision": "3b1aa615d57a05e34fa4f31cf2d1225f"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "888035412a414725640e5f0b25ef9668"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "8eabf783bf803748c09e70e3936cc38a"
  },
  {
    "url": "core-fields/section.html",
    "revision": "9bcc148d094b0738c82844ac5bb70909"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "2c48b1c11a44aaac6983b051694be18c"
  },
  {
    "url": "core-fields/select.html",
    "revision": "9adab270ca758fc7aee754e6f387b2d9"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "bb1eec72ec29fafa018ce8f466a78874"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "9e18dec6ee91e7d54cbee0682f3cdabf"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "de9f4b60dfc2886ced53fc8f25b506df"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "f127290d371365153c49ed45dbafce5f"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "3c10de731566bf4fb05d0e7eb2516a8a"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "63f499ddd97c301b5f962af1c309513c"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "e24d7d90fc81a68d056407d306602f27"
  },
  {
    "url": "core-fields/text.html",
    "revision": "d7026fc6e5759f1118c0292c076afa72"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "676a6edc0e1746d209d46a2d4703f16f"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "46ecf0f42f8f4d9224d7c1869156ab68"
  },
  {
    "url": "core/index.html",
    "revision": "3303da6cdf326ba796ef262437ea11e3"
  },
  {
    "url": "faq/index.html",
    "revision": "f673d13ff3a3e1190e7435ded4fcf57d"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "cc58bf8601403d43d9290480938aa266"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "445502c45a9421bca087e5d0d108930d"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "fc79f3b22fdcd60ac40541db4b574d75"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "9aafb0fbd5a1dd1372b5c32df505b93c"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "0196ea25cb7af47e5102f083cda25e3d"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "b1ec853d67e8236dc7c92124120bff1e"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "c59c57b6b32da468d9c2f2f7336daf5b"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "faa69826e4d3524a2bc3e669f9bb11d1"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "12ee875ee5fbb5b0f32b197eacb4bb46"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "de6b5cb8201e78766b279cfd0721e1f5"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "83d891f76590324b6d6828364273648f"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "31a4112ab3e328464f6575208432e475"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "b3cca42297b0bb0df772a283b82f871b"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "7b91b8076e524b7096ace6723c001346"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "4ad2dddb0232280a6eefda4576fe29fd"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "9c5b54cc9b35be68680a9b06f315f405"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "1fc59175671d49bb1aca4826ca5bb79b"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "e475cb0c041113a49f8deeb0e79b7ede"
  },
  {
    "url": "guides/index.html",
    "revision": "dd5515c2fbe75c6d8f64a5c8832d42f3"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "cb81941d4d6b062c15dc0ef65019872a"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "c95c32b8d06d6329f23eb138c9813c82"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "f40da08e2a3454b313bd5ce23c38df42"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "5ee3f815ad4541cf699936d98ed81eb4"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "52feed43a65e9f4ddfbdc300dd131832"
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
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "f890c919dea7c19ef88bd613da124bd1"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "7ce10ce467bb7e705eea334030bd361b"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "253e0efd1772710b900ad31aaf71ba41"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "be48deeaf950242a0ab1c7acf490df78"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "ab01bb6da26a10515e8e025c15ddf54c"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "a0cb9e866c9282fdc5d56b702cd943f4"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "f8384a0c774f915743545f66b2950c8f"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "d3e5c5b8ea9314b4219308ffd4950211"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "00f7d530e94c6c279b5ebe347573383f"
  },
  {
    "url": "premium/index.html",
    "revision": "7e2af3f7b39caaecd79a63b739399e9f"
  },
  {
    "url": "premium/js-button.html",
    "revision": "bb39c2670b5e4cb3f57bdb7623c64d39"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "8f1163e45402ccc7928326ce266bf548"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "e5c666f6ed90fa9a81c8df8d81198289"
  },
  {
    "url": "premium/repeater.html",
    "revision": "a494afd3a76315c0fccbdbeb94abfa2f"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "bc57b74f79f4173af3e2ef54c2740838"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "4f812d7d92859ef3d73f210d51974841"
  },
  {
    "url": "redux-2x.png",
    "revision": "a3c7a8b9bdaf7c90d53cb80df4ddf319"
  },
  {
    "url": "redux.png",
    "revision": "73ee94cef04626971d17266e344ba958"
  },
  {
    "url": "top_logo-2x.png",
    "revision": "5fa8e8952709be452e415f738b0f4c15"
  },
  {
    "url": "top_logo.png",
    "revision": "12b361357b610542d3baeb79947cba6c"
  }
].concat(self.__precacheManifest || []);
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
