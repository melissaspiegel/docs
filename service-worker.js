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
    "revision": "2cce7dff8578f77b1845f4d40ef0499e"
  },
  {
    "url": "assets/css/0.styles.6af9f1c2.css",
    "revision": "5ef7862535fb570057c6a17c0555de3a"
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
    "url": "assets/js/10.1657fc54.js",
    "revision": "11b547290e443db869a2ecd5a37d44f8"
  },
  {
    "url": "assets/js/100.59d273ea.js",
    "revision": "8ae744b7cb1e97d3890ec50caf921ec2"
  },
  {
    "url": "assets/js/101.4dfb941f.js",
    "revision": "7633d3686acd930003887071800ea606"
  },
  {
    "url": "assets/js/102.fe5ad8e3.js",
    "revision": "2eb1e785ca53dad09a12a6737d54831c"
  },
  {
    "url": "assets/js/103.ce640bec.js",
    "revision": "3b7ef3b850b94ffe28a48f764afafc25"
  },
  {
    "url": "assets/js/104.b7a15ed7.js",
    "revision": "31f8953ee01ba64407e6c716115aab3e"
  },
  {
    "url": "assets/js/105.2f202f1e.js",
    "revision": "442d2992c5e89b1a00ff7908e00f5199"
  },
  {
    "url": "assets/js/106.9a8118a2.js",
    "revision": "17f013a22d929219712c29b0c600a500"
  },
  {
    "url": "assets/js/107.1bf7d413.js",
    "revision": "657f534b7ef243fa8f853313b5a246fa"
  },
  {
    "url": "assets/js/108.3b8e5e8b.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.4586533c.js",
    "revision": "5df6ad43b89306eae13419838cea44b0"
  },
  {
    "url": "assets/js/12.bbb477fc.js",
    "revision": "636b5f35d7086f72f92d3be71ccb8595"
  },
  {
    "url": "assets/js/13.4822532d.js",
    "revision": "b9625e22ad46e6422df3de4f38d24b06"
  },
  {
    "url": "assets/js/14.4f439d34.js",
    "revision": "2321f10b94a78e9c71f2018b132b7c85"
  },
  {
    "url": "assets/js/15.00e62c54.js",
    "revision": "c046022d130f23925e21ac10738deb5a"
  },
  {
    "url": "assets/js/16.ce8c4c03.js",
    "revision": "7f2f7e4cbdc894631cdbc85f29caf79a"
  },
  {
    "url": "assets/js/17.dc9c4146.js",
    "revision": "2dea33a5eda5277dc71c53e42e219ed1"
  },
  {
    "url": "assets/js/18.1443d5e4.js",
    "revision": "14aecbf1ae8840e980b3c243dc982604"
  },
  {
    "url": "assets/js/19.e8bafe8b.js",
    "revision": "1354cb62f1ecd2a9169a2c36d9eb345d"
  },
  {
    "url": "assets/js/2.c9709cb0.js",
    "revision": "61c928409a48f11943a50928486d3366"
  },
  {
    "url": "assets/js/20.ba120362.js",
    "revision": "f390c43df2263f6129750f7ea5687523"
  },
  {
    "url": "assets/js/21.9a58699a.js",
    "revision": "9eb2b141045105051143f7dc0d852560"
  },
  {
    "url": "assets/js/22.b911abbd.js",
    "revision": "652a8d950062137d5e8ce33eb0ab27e1"
  },
  {
    "url": "assets/js/23.b38996fb.js",
    "revision": "2332a05135c1c5948075bb69c5dcae1a"
  },
  {
    "url": "assets/js/24.07a65ecc.js",
    "revision": "22be30f03dba55164669e7b2b0ded706"
  },
  {
    "url": "assets/js/25.e9304aa5.js",
    "revision": "f2ca26362738994e95d271fa78fe1aa5"
  },
  {
    "url": "assets/js/26.c3403c4f.js",
    "revision": "88356d66c7335cade81eac889c8cf3c6"
  },
  {
    "url": "assets/js/27.71bd0dfd.js",
    "revision": "6771bef6bd1a5d4a8aff7c2a3649d225"
  },
  {
    "url": "assets/js/28.794af265.js",
    "revision": "8995cb4bb61829d2b5f0cf9968a1a634"
  },
  {
    "url": "assets/js/29.447de628.js",
    "revision": "715bca1d0ee206af6907c2f62e88d5fc"
  },
  {
    "url": "assets/js/3.20b6228c.js",
    "revision": "2f592a79bb60b489ff36b881ac2b5a11"
  },
  {
    "url": "assets/js/30.e84cbbce.js",
    "revision": "996130335894d9bb133cfcfe2bcc5b29"
  },
  {
    "url": "assets/js/31.1cab2b9d.js",
    "revision": "2b62c892adb01a96f37779fdc0061827"
  },
  {
    "url": "assets/js/32.26d48e90.js",
    "revision": "46cc609d7e6b3a1af73cbe19d1389a26"
  },
  {
    "url": "assets/js/33.9ae1cde3.js",
    "revision": "4e880c620cf74e31423ffef9a8a518c0"
  },
  {
    "url": "assets/js/34.98f53d2c.js",
    "revision": "cf7cdd8a574baf1cdde571f33ff15d7a"
  },
  {
    "url": "assets/js/35.5068dc33.js",
    "revision": "eb35e1b6574ec4350c64e36db6832df7"
  },
  {
    "url": "assets/js/36.a9c7b2b1.js",
    "revision": "262fc29a7125f737e00d7f76de3f02e4"
  },
  {
    "url": "assets/js/37.c8bdb0b2.js",
    "revision": "c2f47b4450e59c7ce3e8a0884418d010"
  },
  {
    "url": "assets/js/38.173e30a0.js",
    "revision": "1769d548baf421f090261eec0c7e747d"
  },
  {
    "url": "assets/js/39.1839a434.js",
    "revision": "f0e0b128fb77040b8915b682a50e7dd4"
  },
  {
    "url": "assets/js/4.1ca1fae0.js",
    "revision": "b0e3e11a1271c59ac0ecbee983d3227a"
  },
  {
    "url": "assets/js/40.1bb47e5f.js",
    "revision": "559eb7a6e5f042974363bcb6a294fae5"
  },
  {
    "url": "assets/js/41.c568e080.js",
    "revision": "1f277cadcb56bfc185d236eda11abff8"
  },
  {
    "url": "assets/js/42.39355ae9.js",
    "revision": "14b4949ea155b36d0b79c1ea449d00ff"
  },
  {
    "url": "assets/js/43.b0432f9b.js",
    "revision": "1794af18dae213c9a6d619a082f08fc6"
  },
  {
    "url": "assets/js/44.8f4fb1d9.js",
    "revision": "b05af29266424b57d12911d9001a1e10"
  },
  {
    "url": "assets/js/45.f195aeac.js",
    "revision": "76095438cef131a1ad67c7d239641129"
  },
  {
    "url": "assets/js/46.2b86663c.js",
    "revision": "a3c6bea65a407d51d6dd6ac84e6db8c6"
  },
  {
    "url": "assets/js/47.e24816c3.js",
    "revision": "4a79232efad7967fe28be4983f0faee2"
  },
  {
    "url": "assets/js/48.5af74f8b.js",
    "revision": "ad3a8f1b7456ebc239bd3539eba8e469"
  },
  {
    "url": "assets/js/49.8f36abaa.js",
    "revision": "cc87a43462dd52705c02e311ed0d8753"
  },
  {
    "url": "assets/js/5.38cd6285.js",
    "revision": "bd63ac02234adddc2047dd7195eeacfc"
  },
  {
    "url": "assets/js/50.50c665f7.js",
    "revision": "b53a063c7b7b24aac68a1869ce95cc8a"
  },
  {
    "url": "assets/js/51.8ba05502.js",
    "revision": "465789ac211118d3275624a2b5fe8b05"
  },
  {
    "url": "assets/js/52.7199e346.js",
    "revision": "886373489767655ce662782bd6a40393"
  },
  {
    "url": "assets/js/53.38afe61b.js",
    "revision": "de5d9520058535bd7e68e4486add0be3"
  },
  {
    "url": "assets/js/54.cb8e7250.js",
    "revision": "792f7d4f577562d5d2b9ef766e7885b8"
  },
  {
    "url": "assets/js/55.3c1de4a1.js",
    "revision": "20b9c9baf29ad855bf0f7079ca12261d"
  },
  {
    "url": "assets/js/56.2e479578.js",
    "revision": "ae15fb8be1b9c118e0879ef4c8b4f614"
  },
  {
    "url": "assets/js/57.300cf8b5.js",
    "revision": "309aa68b06a03b98ebcdf21e74b02541"
  },
  {
    "url": "assets/js/58.5f75a3e8.js",
    "revision": "cc974280c1c0f8f7ea96671ad71e31ff"
  },
  {
    "url": "assets/js/59.6763dfd4.js",
    "revision": "a6b49532b8a6cc960a7cf43c17d1d387"
  },
  {
    "url": "assets/js/6.2a7a811f.js",
    "revision": "95d897c8f2cd5885e401f325a4388efe"
  },
  {
    "url": "assets/js/60.6e0bb53c.js",
    "revision": "06a36aa29ef8ed91cfff7cbd295ff468"
  },
  {
    "url": "assets/js/61.d7cd323b.js",
    "revision": "60a78e3e596cb6939527d117c7b21165"
  },
  {
    "url": "assets/js/62.bfdfce3d.js",
    "revision": "d21ac6c6b84635ee040a6486041f9e9a"
  },
  {
    "url": "assets/js/63.a308abe6.js",
    "revision": "d64812a5e97e4b6f97bb444bcdbe879a"
  },
  {
    "url": "assets/js/64.69036c20.js",
    "revision": "4813b17bc6eb2dcf02a93f8ecb9d9ac9"
  },
  {
    "url": "assets/js/65.48fa9c03.js",
    "revision": "48a2ac97c89e5cf944bf3cacf4e56524"
  },
  {
    "url": "assets/js/66.a246a3c5.js",
    "revision": "c6bfb2095a5632f3f43b236959c7d0b1"
  },
  {
    "url": "assets/js/67.58f1638e.js",
    "revision": "222f75f9da86f37062cb8bdc8c46da78"
  },
  {
    "url": "assets/js/68.95038e79.js",
    "revision": "318b9d99c1ccf69575f83bb055ecced5"
  },
  {
    "url": "assets/js/69.c413364e.js",
    "revision": "065d295bff2482a90a68cfffc664f7a1"
  },
  {
    "url": "assets/js/7.fab47044.js",
    "revision": "2563c272e3984c34b217f1a4016e7c99"
  },
  {
    "url": "assets/js/70.b1363de3.js",
    "revision": "f56c3a368222c3ee2eb723ec575ad57e"
  },
  {
    "url": "assets/js/71.b51d2680.js",
    "revision": "6757351bf6bfa559a83e2d45aeed36d0"
  },
  {
    "url": "assets/js/72.83388d9a.js",
    "revision": "aecfa382089eab0628b8cf0aedf03f4a"
  },
  {
    "url": "assets/js/73.eb792c5e.js",
    "revision": "f2ace1dccedc202ae4dace5eddcb34f0"
  },
  {
    "url": "assets/js/74.854e1153.js",
    "revision": "96e3aa7ef8d923272b17caf522ef5f5b"
  },
  {
    "url": "assets/js/75.b4c23431.js",
    "revision": "1117f1c1ff78afea3dd0433e1b3266c9"
  },
  {
    "url": "assets/js/76.3d8d4fe7.js",
    "revision": "5ee4f15fb5313fca01e604d2e118a819"
  },
  {
    "url": "assets/js/77.3abb6033.js",
    "revision": "124cd5bab061fdb02d7dcc96ea22ca0a"
  },
  {
    "url": "assets/js/78.30732204.js",
    "revision": "d4d314d44909e647f2da51ec6f7d298d"
  },
  {
    "url": "assets/js/79.ae62c493.js",
    "revision": "f5cdea07aac5b64728aa05c5baa49191"
  },
  {
    "url": "assets/js/8.ec12d6a7.js",
    "revision": "d7c2660c681bd6e6b5f64e87dcaad63e"
  },
  {
    "url": "assets/js/80.37f12a6b.js",
    "revision": "0c7985a92f3f07c5708ce298c1993de7"
  },
  {
    "url": "assets/js/81.985d6fef.js",
    "revision": "289fbbf5ca6a4652d1cc36233403ab79"
  },
  {
    "url": "assets/js/82.9441f773.js",
    "revision": "f377676814a3df12f7af14d522a005b4"
  },
  {
    "url": "assets/js/83.75c48516.js",
    "revision": "75086118e8b290a66a4cd46ad8bc7caa"
  },
  {
    "url": "assets/js/84.644ff801.js",
    "revision": "79fad13f741c9473df82573035143421"
  },
  {
    "url": "assets/js/85.13455ba1.js",
    "revision": "10e222e38197a672b8ddbc0abf79308f"
  },
  {
    "url": "assets/js/86.9919af93.js",
    "revision": "4c1b882a28f76bb3db718102f1ca2146"
  },
  {
    "url": "assets/js/87.d979ce3e.js",
    "revision": "466e3d1c9ec91e16d9af53f66c71af20"
  },
  {
    "url": "assets/js/88.4263be52.js",
    "revision": "204562535feeccc3d4e063dfa8393dfa"
  },
  {
    "url": "assets/js/89.477d4d16.js",
    "revision": "279bac69086b858a12b09f9374abb59f"
  },
  {
    "url": "assets/js/9.d3c271f7.js",
    "revision": "8f827b67d88e246f96d82d1e793b1953"
  },
  {
    "url": "assets/js/90.77663a84.js",
    "revision": "80e424dc1b30e605925c4f085eedf46e"
  },
  {
    "url": "assets/js/91.7bc2c5a0.js",
    "revision": "c2679c837dbea00a149ed14785fe0533"
  },
  {
    "url": "assets/js/92.1c61d352.js",
    "revision": "c03a90061c4bfc91e57e4507823fb151"
  },
  {
    "url": "assets/js/93.807c75bf.js",
    "revision": "2e7c92796d70c9df3e3834b0ca7d7e2a"
  },
  {
    "url": "assets/js/94.b7773135.js",
    "revision": "48c92ba27c7561d1dff7477f41591674"
  },
  {
    "url": "assets/js/95.56610828.js",
    "revision": "97f1e42beb8efefefaa5ed3a1798b5bc"
  },
  {
    "url": "assets/js/96.f954da7c.js",
    "revision": "51123bed140d7af0345384464d975d98"
  },
  {
    "url": "assets/js/97.196882c9.js",
    "revision": "a06133ead11b11812eb34115942eaff8"
  },
  {
    "url": "assets/js/98.89d4841b.js",
    "revision": "af77da15e8a695c6d0a5734c695b0fa5"
  },
  {
    "url": "assets/js/99.ce1750cf.js",
    "revision": "6317907368fad638c75124d40339b863"
  },
  {
    "url": "assets/js/app.41af0126.js",
    "revision": "dfdebfdd82d7d60b299e5b1e417c6c93"
  },
  {
    "url": "configuration/api.html",
    "revision": "ee9a5a0c302d34bd03cb2669d3fe43ba"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "4830366bfc84dbe1e5eaf345f98f914a"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "4d761c96a5e0e05cba2fe31cdae4079d"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "19c52a60f537ed5267e8db1aaefb44ab"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "1e28b53267c3a92b7ce98a9f088a8af1"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "db2e53cb4c2843180843596f9d6ff15f"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "b8c9f9f049768f76c6b0b325eac26fec"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "876d4936a0c7e0a4603792e37368ed1f"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "ea0c7fc0fdee846dfed7f8b9d40be456"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "433495d91c3bd9e94cc579cb391c13f9"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "6c94dc51ec72397f2e90258124d6fc02"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "4525a4a28484030308edf046608107cd"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "193eeeae859d691caaad840f32fc49ba"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "04f5c6070aaca424dd10d4ef628b4030"
  },
  {
    "url": "configuration/index.html",
    "revision": "882abbb48ce9578b221f293fd505d9da"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "2d1ac1765e4aa0dd160b73282034e2e1"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "4e327eff9b1f51f3ad6c511ea909f3ee"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "8eda620b64b733a4b5200c7beb404e1d"
  },
  {
    "url": "contributing.html",
    "revision": "fc90a7716ac00132e8054f0a92ef472a"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "bbcdecc837e4e4afbccacacb0477a533"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "d6a8008d3a30b6b68cb577d6d4d3c8ab"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "3af043d59fcb7e54eaf0fd4ee3e77996"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "a18616f70a1b9876cfe6b7702bf0a8c9"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "7c4ccf38c2de650c9263894afbfa1d03"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "826877b00942af71ff5ccaa1867ff7ce"
  },
  {
    "url": "core-fields/background.html",
    "revision": "a67c5b4e64de3dc2cb68b821797a0261"
  },
  {
    "url": "core-fields/border.html",
    "revision": "77cef162d538353fde5ff49ff518a716"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "af68fdceaccd8b928c03ceb11892722a"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "452ebd082b3bbb819da4b9ca0081eb83"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "4390e25df82c3db52c55dae55f5a2b9a"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "f5474f83ec86eca01722786bd2f1d23d"
  },
  {
    "url": "core-fields/color.html",
    "revision": "c04ba5074dd545c4de1b51a2624a9cf5"
  },
  {
    "url": "core-fields/date.html",
    "revision": "e97870f7cf8c1d0e96c967333fd6a951"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "9418491104c2c9ebaf29891b78139d3b"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "9b3eccd63b4889151ebe5ff4379b906d"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "1493a6a5f7c1c68ded4145f393f05cde"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "f2f4ebd98c1b1ed13e7b004427ce4b44"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "d19a240fa243f8ff65e7f413e32f3d3f"
  },
  {
    "url": "core-fields/index.html",
    "revision": "0eb36faad766126f03b2501f537e3f5c"
  },
  {
    "url": "core-fields/info.html",
    "revision": "e444e8339b95e986b197e724a47e51de"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "55b6182f0a07b71a784e1d82dd7f559f"
  },
  {
    "url": "core-fields/media.html",
    "revision": "8a96790b00123eddc8279f564690de03"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "14ec42e7aac2298f2861f7f817cd5324"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "e6ed9bdf9dfcebfdb15c96d49499044a"
  },
  {
    "url": "core-fields/password.html",
    "revision": "0d22a44e4df20337d09e09759a08cbc1"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "6e34faf8c1f53870aae6d4ec5952b1d7"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "5c52247804d7afa14e7ecabb5c169225"
  },
  {
    "url": "core-fields/section.html",
    "revision": "591f4652611eaee4da662b9777dad3db"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "267676f52fb9fda4c1eb15ff54c1c6df"
  },
  {
    "url": "core-fields/select.html",
    "revision": "bae20c02f3d84a3b65b53943a06872bc"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "a4a2fadf7abe631c699eced6213e986b"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "dfd74819f306dc480801b5c6904d37b2"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "8961abbcb9906076bdaebccb3d8da7d2"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "23413c2566b04b487d72daa2759ac156"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "3a45bb6d8106db0530d42b4f03aec118"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "3f914505ced3a00631ba91e3e63f4cd1"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "47cd66f38bfe3d079084bb9e07d22e4b"
  },
  {
    "url": "core-fields/text.html",
    "revision": "a764ee22f820643c63b1b54a2a022443"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "b4817f8dbcdee17acf3d659fe53bcb7c"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "c53029bfcd981f7e952262dc0d001969"
  },
  {
    "url": "core/index.html",
    "revision": "e84a37d52d32ff13bcbf38e090d29dc1"
  },
  {
    "url": "faq/index.html",
    "revision": "a8e76c5f452e50c02eccc2bcc3febe61"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "4be3051b4c84b610babe29f5e54e4c88"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "ba2a4ac3be3fa3ba23c198449eeeb6cd"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "bb6ae7cd341f7b2154e17d08a8afdec3"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "7c4f98fe3381c321018160659225d007"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "3fc62f2e89892a3aac093fdcf95497af"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "1a2fd98de29e4543a11039c3e90ba0eb"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "6a426db96cac2c1f68821704ef2a0122"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "5eff5d6728d00ac789a88b1350b09446"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "defbd4974751467735d66c034477649e"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "ee51bb73070042bbe92e494842ef5040"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "451ed1b84f0cd8d160ca665e2536be8c"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "c0b005fc9da7f247f62df27e235f77d4"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "04e9ef2b425ab83bd188e856877d246d"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "fd66db738c963a39dd7d1f74102e2282"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "6e52ee6a867e9f7162a9092edf89125c"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "20b0b70d5f341163bf2a6d412870387f"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "7837e216004c031d524e2d669b2fe37d"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "b2215f10d54a1b4976b174203e750c98"
  },
  {
    "url": "guides/index.html",
    "revision": "433e0d15cb764a26fb22ed449c1de415"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "c3b841b38de61b4093e20887871ace02"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "a30c7aeea6f2a82edc6774b0f823a1d2"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "a47d3bd4706509421a2206b5d625fe52"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "71c697265e5ffcf6bc2d3d7cb5c850c6"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "70b4389e7b25835a594ff0ae178935f3"
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
    "revision": "9435159e8788464ed5303ff5ab603458"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "8e2cfa02ead394a842e84795c0f79a05"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "3d53ba089cbe331906b09781990ce6f0"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "cacbfbcf5124d63930a2e4873f82c32a"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "f739f51d9eb49385b3a0a177431a774e"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "373777a39324d3ba9e061c7deb0490f0"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "b2282ea47b82832a179f18c255ebac6a"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "648cd5a2545626d47a7b351e329cc9c9"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "7192afdeaeab44a7359a9ad7cdee5196"
  },
  {
    "url": "premium/index.html",
    "revision": "cd85f5df79fd32fa5388ea4a4798ba53"
  },
  {
    "url": "premium/js-button.html",
    "revision": "1f420c7db9a7eb96d4df547297376295"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "337f50efc78eb1cd58d5838d4ae07e67"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "01bb271ffe23b7610de41474d11268ea"
  },
  {
    "url": "premium/repeater.html",
    "revision": "ff011ea754f36453fd5508d9ff69317b"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "2d025d2eeb4d2c83d69f7aba817e41d3"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "188503e15bd84c4dc35e5589c45a959f"
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
