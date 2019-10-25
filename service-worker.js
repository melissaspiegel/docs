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
    "revision": "7468b5bbab52ac9efe9dba489c1d85d5"
  },
  {
    "url": "assets/css/0.styles.93729d6e.css",
    "revision": "4ca55aab12c38f49c979bda66a0a54cb"
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
    "url": "assets/js/104.0f172bcb.js",
    "revision": "f733f3025e7094e9e0ca3e27f9dc2ea7"
  },
  {
    "url": "assets/js/105.84b083db.js",
    "revision": "38edfe2399db0a8450aa108ee9963220"
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
    "url": "assets/js/18.689ef92c.js",
    "revision": "222b991d66b19a025dc5635b596e03b8"
  },
  {
    "url": "assets/js/19.1541454c.js",
    "revision": "ede980d1974a94a0e56df5c6ed67ea6a"
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
    "url": "assets/js/3.1d879685.js",
    "revision": "f5d0a7a127cf3b3ef169f3690d5f2130"
  },
  {
    "url": "assets/js/30.463b1763.js",
    "revision": "6c168d41896a166d3fdcff521b4622cc"
  },
  {
    "url": "assets/js/31.2c8d9083.js",
    "revision": "3d77d5036d930ae36490787eece82d53"
  },
  {
    "url": "assets/js/32.08112200.js",
    "revision": "8a0b64693b463cc6aff53e2dbcdeb0e6"
  },
  {
    "url": "assets/js/33.5171fd2d.js",
    "revision": "c9f06ed988439f3c4b1ca2efa6ed57f3"
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
    "url": "assets/js/41.0d98b4e4.js",
    "revision": "9e1a4d155dc54145ef94ce9052227b3e"
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
    "url": "assets/js/44.acfe6bba.js",
    "revision": "e6627ab01ae2cb3bee05c72a1ff2544d"
  },
  {
    "url": "assets/js/45.f0d470fe.js",
    "revision": "58f4bda362e5c5a074a4500322a084ba"
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
    "url": "assets/js/48.a02b0f70.js",
    "revision": "113943ee63fdd4feedc04aba410f7a30"
  },
  {
    "url": "assets/js/49.5dea82c9.js",
    "revision": "1dce466dffd7d00044cc10953b91ea2e"
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
    "url": "assets/js/54.26829680.js",
    "revision": "d60f1dec2cf87a7a6d696c5ce6b06949"
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
    "url": "assets/js/57.84d8ea1e.js",
    "revision": "c66f5bf5a381a61e5c5628c2c1bd5ffd"
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
    "url": "assets/js/79.5d7621fe.js",
    "revision": "2799f36bf4e71e3b6a0f3551e9aca77c"
  },
  {
    "url": "assets/js/8.ec12d6a7.js",
    "revision": "d7c2660c681bd6e6b5f64e87dcaad63e"
  },
  {
    "url": "assets/js/80.629793a0.js",
    "revision": "35c8a3b4f42d6abcd49906a495f5b132"
  },
  {
    "url": "assets/js/81.adb9a621.js",
    "revision": "aa07c5f15774147064afbab7e9336272"
  },
  {
    "url": "assets/js/82.977294fd.js",
    "revision": "6b5a8f5a3ce73dedfacb0906dbad4a77"
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
    "url": "assets/js/91.5e6a121f.js",
    "revision": "a366042df66df8b57b5bb4fa83b9a7d8"
  },
  {
    "url": "assets/js/92.d7049ab9.js",
    "revision": "165eace7dfa8f6090f5c885120d2e8eb"
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
    "url": "assets/js/96.6684c452.js",
    "revision": "c586cbee708bd162c42c0ed089fd5696"
  },
  {
    "url": "assets/js/97.5dc71e73.js",
    "revision": "bf1bcdafa571aa6754b4e026372bd6c8"
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
    "url": "assets/js/app.258d5a28.js",
    "revision": "e140dddced19879694eacb032a94d92d"
  },
  {
    "url": "configuration/api.html",
    "revision": "864e5271667431f99c85573de500dbc4"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "dd6ecb50ef99721412ea7158b8e4bdc9"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "b813dd2d4867982f767455e52d58578c"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "8f49223e0f1cc347a5720b289a4f2420"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "bc394fc342e50097d60636734bfd9bc6"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "97c5d21c0a7295b2e7f3d76e0451a2a7"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "de70bf46933507a3363c8b24d019a62f"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "7534558ca1af7b1a77404bed7d7c6744"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "d405253ae6b583787ea4add4d8481822"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "85df790b1e87ffd123d7004ad096c925"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "fca0754768be23c5d03a39453dc8fdff"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "5e6d6ddb6126a82f903b0466b09e95a4"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "e1821bdb194f97988c260af2aa6b6adc"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "18d5d4f8419482ce02f4485120842604"
  },
  {
    "url": "configuration/index.html",
    "revision": "881bd29d3f4a859fc87d9ded07376245"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "89caef460bb102264d1bbe6de5e3b236"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "0d370895616a86e73415dc2468df4eae"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "a6923057e84ae240cf90f525a588fa39"
  },
  {
    "url": "contributing.html",
    "revision": "15f9ca57eb861268333634c9dfa02e0f"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "2334af41cce4904701c878bf3726b122"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "d788412a0aa56686eb1272389d066941"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "115582f7d16a524c6824228a71e4509d"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "b6b60d80f7bc567797748f8aef1dc20d"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "5c4ac1d1870a156f476067200b301199"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "da5cc0ac110c42c189b7189458516c44"
  },
  {
    "url": "core-fields/background.html",
    "revision": "e57a577c892b84acbdc228b8b10189b9"
  },
  {
    "url": "core-fields/border.html",
    "revision": "d8e19d2605c3c56508dca20e9a00fb1c"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "58d1fdca504037ae38a335e54686829d"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "a2e5dad523f1d4c2e362d9747a79f2d3"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "05ac742c31bb7d64eb4ab9cdad891905"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "1a756fa6ace2d4d32817fd3fbdf39160"
  },
  {
    "url": "core-fields/color.html",
    "revision": "a181702de19307cddbe8477e7f90bfba"
  },
  {
    "url": "core-fields/date.html",
    "revision": "bfa9f57247dc29b07e62dd97b98bc938"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "437b38b797698e52b3230c2852d312d3"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "7970540f1c93b80d0833704d07da09a1"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "f715f6108bfe9ad1867cfd5736c7b810"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "b9c1c1af670c2f4ca8ae8d3ddd4e8e0a"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "e33a30ce8aac73c60c0c7c54a58ade39"
  },
  {
    "url": "core-fields/index.html",
    "revision": "6d42cc7adf146df85deb6f212eb564eb"
  },
  {
    "url": "core-fields/info.html",
    "revision": "c515a6038f4d319ed3d2b5819c93acc1"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "576711bf659735840214cf5c769640b1"
  },
  {
    "url": "core-fields/media.html",
    "revision": "e7fe19e2fc81b9efa0b7542bee845cfd"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "a0df4692131d1204118e1cbcfd641216"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "46eb39e4f7d9847b48a645d96130ae0a"
  },
  {
    "url": "core-fields/password.html",
    "revision": "7da7638b5364b5c6f4138290758eac5a"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "f1d269ecc295fa71df62e2652a7c8fd7"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "0dbbed4f16b1e06e8775621497015452"
  },
  {
    "url": "core-fields/section.html",
    "revision": "218ab5795d323ac9ad859ad8bce882d0"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "c7b4558a1d974a41a9cc9d91bdd8589a"
  },
  {
    "url": "core-fields/select.html",
    "revision": "c0282bbcda3e5934ffb8aece0410c8e2"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "99ea97ce7c137a574a5ad11da33c23a3"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "c29f16e6c5566147dc77be2315576995"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "95e1fb96ef916de10886c69aa3ece779"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "58265c7e84b2339c541236737fef2b62"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "f041bcf7398a1564498a3c2228d4900e"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "1f3b98219546fa564f2b908e8b1a6439"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "2d2c2d6201927a0b06b08736c5484137"
  },
  {
    "url": "core-fields/text.html",
    "revision": "b7a0ca97108d6ea9ccc4896c80b4fd92"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "71f1c6352e29665065138edef6f142b3"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "8e09ed8f32f74cc56c11ebb72d57d8f1"
  },
  {
    "url": "core/index.html",
    "revision": "e303ec9d488718283934abe7280b3f26"
  },
  {
    "url": "faq/index.html",
    "revision": "5b66ea2eec5887244703f8e97e30b49b"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "044130b7e3d4be1f9bc4c35502100202"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "1f700294e06f5da5ee9527adae3be967"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "e7cf4bccec18b1526aa92744bd827b5f"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "cca6f5d27107cc93556831ad54903ca4"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "20d1cda0ae623cc4969f005f1e16a56c"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "1bbe487f88a4bf1dc7e5fad846cc51cd"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "6eca1fc3ed11dabbd9c0b1afca1a57a4"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "9335c9178d47cd2a7401b3131da4ee2b"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "d429d5020220de00b83ac170494ae27f"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "50ad01c945075c51b4dfe0a805186283"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "441c9cf433affcbb6bb096a3c8046f8a"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "8bdd8354ba3fefa897b8d168259a4483"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "2bdba57bd12855e69687d46782b0620e"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "34d034eeb8382b18475ce0b96ba38ae2"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "a3242ee5be1c5556062eb51bc3189ed8"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "1a7f1bcc4c5a172a0766a0687eab962e"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "335c41928fa607c87cae9fe057ad2153"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "5c55882905d86313e9915a7fe8d4ecc5"
  },
  {
    "url": "guides/index.html",
    "revision": "513e9baabfc728250ef258dd2c4bcffa"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "7da1bc85ae663a4ba7e54385c5e8a954"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "951c0f56ef5fc8783df9eb8be8237ed2"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "e9254c39f5dc1c6d0a7b6d2ac8ade132"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "63acec60dcdcc68f8a1fb2f34f608c41"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "d8000b70ad39c575fd321842168db912"
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
    "revision": "4e228b94fed353ad3e77fabbfc36bd1b"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "5a2155dbb4a298197908f4ef0dfb406d"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "5abea679b4e3de4d447becc7484f6c32"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "a8e9264b0e535b53e4bcf98f5bb72b61"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "041fe48b11251c986b172f8c94df6f53"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "c6e64e9570b38d47de684ec709b5d5fa"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "e727dd80229378ac207206883400a4c6"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "c92bdef7f6197f60804f0fa07d34ea6a"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "1d95493ba6f587c4c7e92d7a30b1d9de"
  },
  {
    "url": "premium/index.html",
    "revision": "1c80ee0efaf4228bb031bba71af0cc9c"
  },
  {
    "url": "premium/js-button.html",
    "revision": "50748ae35cb30d620ce84ac802c87c24"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "755b3f5146974ec67403233f0c85d7b1"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "a929b7dc1c0375876ca6bf248a98d651"
  },
  {
    "url": "premium/repeater.html",
    "revision": "44c0b3ed52767446890fb76d36e1b6a4"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "3b4a9e5184cd2a3113887e8b42168139"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "27ddc1ba8696d748a046b9664e0c9029"
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
