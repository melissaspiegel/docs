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
    "revision": "b21fd33b942fba2209391888a924771b"
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
    "url": "assets/js/34.63148c6d.js",
    "revision": "cf7cdd8a574baf1cdde571f33ff15d7a"
  },
  {
    "url": "assets/js/35.cbbba521.js",
    "revision": "eb35e1b6574ec4350c64e36db6832df7"
  },
  {
    "url": "assets/js/36.2c4406ef.js",
    "revision": "a09438b69d5cd18f95b2298b70fc252d"
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
    "url": "assets/js/53.1215611a.js",
    "revision": "de5d9520058535bd7e68e4486add0be3"
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
    "url": "assets/js/61.b369faac.js",
    "revision": "a95d1b096e6f00021c36de2bff5651d7"
  },
  {
    "url": "assets/js/62.409d73bb.js",
    "revision": "56c64a49a692abffc7f17a83f6afe568"
  },
  {
    "url": "assets/js/63.db7cbb4f.js",
    "revision": "9e7bc23ccf1038b79f45b0327f025fb5"
  },
  {
    "url": "assets/js/64.875988f2.js",
    "revision": "3378fa9c6a7d76059c87b01581eb1010"
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
    "url": "assets/js/70.2f48e14d.js",
    "revision": "70155ebdb3a5f09eaa71eb623b089ba0"
  },
  {
    "url": "assets/js/71.afdcb1b7.js",
    "revision": "871d761ee544cff54cf03381d16dbdb4"
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
    "url": "assets/js/76.9f2be069.js",
    "revision": "63928954643dbd9ad138e1294d48b44e"
  },
  {
    "url": "assets/js/77.6bd53a32.js",
    "revision": "07fc6efc14e6864430e3f10208145a41"
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
    "url": "assets/js/86.4d71625e.js",
    "revision": "fa01c4af7a9a94a08edfaa95fb84e385"
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
    "url": "assets/js/99.d526032e.js",
    "revision": "6317907368fad638c75124d40339b863"
  },
  {
    "url": "assets/js/app.e2c42329.js",
    "revision": "a3dd65121395bd54155ccdc7ad1cfb38"
  },
  {
    "url": "configuration/api.html",
    "revision": "3626bf4f6bd8a78631eeccb12af8c77e"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "b6a9b1f56ad8c1c7f113a324f7085fae"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "6759a376b96d2ab67a490ae4f797b609"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "f7f33552c7292e4e4c63a3b0c5ba33e0"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "06792e844bfec6b994512035f4614ba3"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "02ef3add46450aebbbad5fa1b3ce3f10"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "33a999369f229b983c915c8fb5c8b247"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "3a81ff8c653ed57f1a94362186b3db32"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "4ea070b769306862da2c24d08af87bc0"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "ad52ffaaf3adaca38cbaf2f466802832"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "1fffa0bf6e563f450d81c2a397a5fe40"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "dfd3601d9561fbeee66e2d1f5fd19f1c"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "855a0620a865d330bd77f95f48ed04aa"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "7985559f4d742792844a111500b0da07"
  },
  {
    "url": "configuration/index.html",
    "revision": "f4d08c14bb38d315e0e3ff092d97909e"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "ded18ed52935debea646da3ca049158f"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "61742f41e116bf5608953b512d48da93"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "88139cd01cd2f17cf88bb8a1f85b7096"
  },
  {
    "url": "contributing.html",
    "revision": "154a384d55b6666cb45f2fdd9c75606b"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "fbcb988994700620c19d5e35414c8bfc"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "ad68244abdb95fde177f319bb715127a"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "3338fe9c5fa0ec405eb31384aea52261"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "aa2d6961111d49f60cdcf0958adefb03"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "cb6040d4a1c0c0e931d4a096549b84d5"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "761a98d54828fa750d6c34cfd5f3b14b"
  },
  {
    "url": "core-fields/background.html",
    "revision": "f89b4c2f204ee345acb7f848986bb4f3"
  },
  {
    "url": "core-fields/border.html",
    "revision": "247fe0608944c7ad7a03402c3314277f"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "99e7432f0b3a032a3ad386489b6283b8"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "612761918ecb84a12670f4b2d5afb0bc"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "f99d1a30213c6d84d48b43bb0a972909"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "5cd2bf9100f71ce85cce34734af12ea6"
  },
  {
    "url": "core-fields/color.html",
    "revision": "6eef8e9b8a1e98dc38831f5a37f341f2"
  },
  {
    "url": "core-fields/date.html",
    "revision": "369aac674d72df5003ccde2bd4e85d17"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "d012ada73b07e7aef96c4d0cb4fcc358"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "28410b03734591a9f022723606eb81ed"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "3587e2db3d1ced44e2ba98c5ca287958"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "2d6714fb7b74a6f5dd9f3a8fb2e8f2aa"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "ecf35a446c8819007feda275cba81f40"
  },
  {
    "url": "core-fields/index.html",
    "revision": "107c3be231fd099db8783c2d55f37fa4"
  },
  {
    "url": "core-fields/info.html",
    "revision": "a0a1ae4988532795bc620cdd1d9537ac"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "a8e7fbc1d14296b55adf8d3bb3bd69b5"
  },
  {
    "url": "core-fields/media.html",
    "revision": "2732f9166f9003f7abf3acb5eea3a6fd"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "50e87c95b9b70ee9744d3afebad7e9d1"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "28022641b86c77429f17287226b0b92d"
  },
  {
    "url": "core-fields/password.html",
    "revision": "8d226c1e4274133763c06ee652742123"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "22173f473f81d48f8969db953c9c66e0"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "e633444e05c4791c66d96b4530e9efa0"
  },
  {
    "url": "core-fields/section.html",
    "revision": "8699c861aefb64d2b1ce06b7e591148f"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "e287fac475e8bf71a24542eb008a05b0"
  },
  {
    "url": "core-fields/select.html",
    "revision": "aabbbec78c184fec060431da2300aea3"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "b2217c9d15ea2be0a6da0399000004ca"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "c38f51db77315db7f3e4723a22ef1d23"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "f0dc528ede534a1f8b12d632b5ac83f6"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "a355ce518ff993c8a7ca2fa7df13a9e4"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "482bb2f63f33864f9ca67ddd58ec1391"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "ee4a5dda816d1af7f90964ad63ca62a5"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "9f392b74167a7a24bb3947787eb052d4"
  },
  {
    "url": "core-fields/text.html",
    "revision": "65618c0946a540d919fe57c8f1664931"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "afd53c106f32ba9046954f4b02730711"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "806e8464a722069ab3ac129372b78bfb"
  },
  {
    "url": "core/index.html",
    "revision": "afb8a86b7c3074ad8fdbc14de83c57c1"
  },
  {
    "url": "faq/index.html",
    "revision": "530c5453c332492e59cc89723e2fb939"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "91bf61a592c8bd3d2d97e73427c5616a"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "312d8c2c760cc54453bbff942107bf3a"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "7aafa7c22571fb73b6aba1cae9f522d7"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "6ca226d83e125d2543a4026c1c4416b6"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "4e677c1a1dcf7b20f353f26ad2cded05"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "7af09dd82178a56480d7f96f9bfb825d"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "71f50c6e87e731210345e754ece2c505"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "82643405032e72662bf06d158471cc19"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "ea133c8741895e70f8e7f530784323f8"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "6bdfc94b6463c0299b7fe3877088b821"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "4d1ab73c64fc6bba450083cec31722cd"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "2c78c1bcffc274ff05fc63eb5ac7fa70"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "8c7117aa13dd6b496de2ac6743fcda99"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "c65f70d7db263128fb592846e7d1d1d1"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "c4650dc3900b9a875b33288b7956cbc7"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "b02131153f1ea642fa9f2c8bbb76a045"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "7474e07e3aa30acc0d2b05a333aab15a"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "3b1c6f1a2bd9742f29a37a86097baefa"
  },
  {
    "url": "guides/index.html",
    "revision": "aba96fbfc7140943254ee69aba8cd26b"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "bbf5fae5c6f353eae76e6edf80a6ca5b"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "cdeb789a505f29ecef1628e21699d85e"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "0b96386b58cbc39e0a8259188691b2cf"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "714627faf75234d7a0965984ddbc8494"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "afabaca63f767bc810dd43e14006821c"
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
    "revision": "33fbfbef543ed92445c5ccdede83c682"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "8804b03aef355d1eb5ce73dc0d306a5b"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "b8cc25043c658b84654083c8aa8a02f9"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "e04a9fb6c64332b2929a31c7661297a8"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "9aab94a38e875e3f3eed951f81a22d39"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "9472e8fcb9cd94f5ec620a566924b989"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "91b82cddc580bdf25f42095fbacf4c99"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "6ea85bdf81974f654329be28793fd721"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "e3b8dce1195e72e0687e38825285bc95"
  },
  {
    "url": "premium/index.html",
    "revision": "d8bb69792056c174f96560a630ec8744"
  },
  {
    "url": "premium/js-button.html",
    "revision": "0c6f1974eb182c9b8bf0dda878684d63"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "f1a232ef6888e1180c5d112f19155d3b"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "e5655f73e0a2cf2e53785dc564d47e69"
  },
  {
    "url": "premium/repeater.html",
    "revision": "e0776fae624e2984ad484c86dd3bbec3"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "1df7e18601d0321746a3611bf003c62d"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "f85c8b3ded35d6530f82e3c8a1a4dcfb"
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
