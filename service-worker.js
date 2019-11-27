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
    "revision": "bdea7bfcbe872c3571b11f37adc95226"
  },
  {
    "url": "assets/css/0.styles.a4ab851f.css",
    "revision": "74b3f9782a40fd3a5681a57421677621"
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
    "url": "assets/js/10.a46af49d.js",
    "revision": "bd89a70e7559b56cddc019e7892fc60d"
  },
  {
    "url": "assets/js/100.904a550f.js",
    "revision": "23690d208f60dc4864613336135f0591"
  },
  {
    "url": "assets/js/101.481b5824.js",
    "revision": "d494c32cfef392d86b1c3951dceaa9d6"
  },
  {
    "url": "assets/js/102.5d4f88d4.js",
    "revision": "32845caf198bb98d3d64b08f9232ff1e"
  },
  {
    "url": "assets/js/103.249f7690.js",
    "revision": "18c92809a6261dcd8e0640c11096d63c"
  },
  {
    "url": "assets/js/104.7a2fc791.js",
    "revision": "77bc4d82114bbd7438df0a076af2f4c9"
  },
  {
    "url": "assets/js/105.eec6dac7.js",
    "revision": "0a6bc32569714e6e46f38f51638ba5db"
  },
  {
    "url": "assets/js/106.82421c16.js",
    "revision": "0ae74431a93ad7934eaaa34e70c33f9f"
  },
  {
    "url": "assets/js/107.816e4ee9.js",
    "revision": "8fa3e5ce5b152eb786930594ba3cd869"
  },
  {
    "url": "assets/js/108.36a3c260.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.a4c5bb9f.js",
    "revision": "e0ccc446f9564a07810a70a4143f7ecf"
  },
  {
    "url": "assets/js/12.3e7824f2.js",
    "revision": "4b0726372db1b882fa9eceefc08564e8"
  },
  {
    "url": "assets/js/13.5fc21801.js",
    "revision": "24fa39b58a85371738a07f27a77e6667"
  },
  {
    "url": "assets/js/14.77d05092.js",
    "revision": "3d93960d7689004c2e29d9bb911744d0"
  },
  {
    "url": "assets/js/15.99159f67.js",
    "revision": "1f258e507b235c32c62b7aa5ea130aa6"
  },
  {
    "url": "assets/js/16.57e8b1b8.js",
    "revision": "6fd1d1d06b64c0f0b64fdf15da962863"
  },
  {
    "url": "assets/js/17.30fdc714.js",
    "revision": "f0ea7c9f851be7b0d7c7a4850e30d935"
  },
  {
    "url": "assets/js/18.cedb3bff.js",
    "revision": "3aa62573566ff4da2f5797c8838e9e84"
  },
  {
    "url": "assets/js/19.e82307ec.js",
    "revision": "67bb92af34ba8d6bdecd573dd1d33002"
  },
  {
    "url": "assets/js/2.ccc392ab.js",
    "revision": "61c928409a48f11943a50928486d3366"
  },
  {
    "url": "assets/js/20.8692ebf7.js",
    "revision": "38f49f83ef0b45826705e12142bb37c4"
  },
  {
    "url": "assets/js/21.ba8ee3b5.js",
    "revision": "f142170bb59f75c54c13d0010192a58b"
  },
  {
    "url": "assets/js/22.3e028742.js",
    "revision": "fdf257d394073858079e4280eefd4cea"
  },
  {
    "url": "assets/js/23.47eaa68f.js",
    "revision": "555de54c8f8378cca69fed77cfcae679"
  },
  {
    "url": "assets/js/24.505f0786.js",
    "revision": "9ce95d0adbd4ce7ce4019b9aa5574396"
  },
  {
    "url": "assets/js/25.9523261f.js",
    "revision": "c9af3df0dc870a1e09dbe1e53db8d036"
  },
  {
    "url": "assets/js/26.91bcd9b6.js",
    "revision": "90bb01d86aafe0877830c3c6570e3a8b"
  },
  {
    "url": "assets/js/27.884a76b2.js",
    "revision": "89f9390196a38a45a11e91fa3487fc16"
  },
  {
    "url": "assets/js/28.bec9567f.js",
    "revision": "24d75fbef571113d9223c7037341d108"
  },
  {
    "url": "assets/js/29.48805e96.js",
    "revision": "0ebfb11b59d3b5ae29c1a59e7bc69d7b"
  },
  {
    "url": "assets/js/3.aa89a3f5.js",
    "revision": "0452839fb9cc1a5ad4b51280c0ab3408"
  },
  {
    "url": "assets/js/30.07090f47.js",
    "revision": "4b5724c6298e75d71d9f4da6d8bf63dd"
  },
  {
    "url": "assets/js/31.c0b467e2.js",
    "revision": "93fb2b58a7bee003aa26ca7533085146"
  },
  {
    "url": "assets/js/32.b33bc02e.js",
    "revision": "0293ef3f67b7beedda9d2777a053731a"
  },
  {
    "url": "assets/js/33.b8494511.js",
    "revision": "1edcf8108bbe00d0c8e4bcb4ecc095e2"
  },
  {
    "url": "assets/js/34.46607e9f.js",
    "revision": "94ddea830e28c41317db6e305ee76fcc"
  },
  {
    "url": "assets/js/35.6a071785.js",
    "revision": "22a1d6e284a4b10891f97039833de29e"
  },
  {
    "url": "assets/js/36.01614cc1.js",
    "revision": "00a1cf09c22fe84e98727042acfc0230"
  },
  {
    "url": "assets/js/37.2a7b995d.js",
    "revision": "ab61ca5d0a92aeb724db6e47a6d1443e"
  },
  {
    "url": "assets/js/38.8b4b22e5.js",
    "revision": "88610d99b51796b6f577eba36431f60b"
  },
  {
    "url": "assets/js/39.465fd3a0.js",
    "revision": "2c242bbd16f77ed0173578676c9b8c06"
  },
  {
    "url": "assets/js/4.b6f5d100.js",
    "revision": "e60e9cd3ae4979773c2bcdfaeca2cc65"
  },
  {
    "url": "assets/js/40.390f630c.js",
    "revision": "a15801846830e21f904127dcd0e1f7f8"
  },
  {
    "url": "assets/js/41.7d3f4293.js",
    "revision": "9e1a4d155dc54145ef94ce9052227b3e"
  },
  {
    "url": "assets/js/42.03e1d420.js",
    "revision": "b255117883539a472d64ab1922be9bda"
  },
  {
    "url": "assets/js/43.b830a6f2.js",
    "revision": "ab27e8fb7d015416d623f85232ab8c80"
  },
  {
    "url": "assets/js/44.81ec9e85.js",
    "revision": "2650e15047a77a7f7748a76dc258fa42"
  },
  {
    "url": "assets/js/45.d0a77e1e.js",
    "revision": "3217343a3497af872ba909adf7173e0e"
  },
  {
    "url": "assets/js/46.55a5b2d9.js",
    "revision": "ea1c9c3caf85ea6fa158aa5ea27d77c3"
  },
  {
    "url": "assets/js/47.d98328ad.js",
    "revision": "83e56bba822e57509b015d29b5e050fa"
  },
  {
    "url": "assets/js/48.156868a4.js",
    "revision": "62958730ac52112bf2e9fb1b6931bdf6"
  },
  {
    "url": "assets/js/49.278729d4.js",
    "revision": "8fff3ffee608916e7482d73b2f223a6a"
  },
  {
    "url": "assets/js/5.016ee0ed.js",
    "revision": "cdfd05b07b1931b31ab8b2dd30f2be6d"
  },
  {
    "url": "assets/js/50.0807ba85.js",
    "revision": "93ac87a80f4eec21d317809be4945187"
  },
  {
    "url": "assets/js/51.b4813b79.js",
    "revision": "434adce9777ce215dd428473ccc2aee2"
  },
  {
    "url": "assets/js/52.3be8bb05.js",
    "revision": "78d048275a0d3956289080934e75d692"
  },
  {
    "url": "assets/js/53.ff1563a8.js",
    "revision": "4ea6ad7c792eea335ce3156015abe40d"
  },
  {
    "url": "assets/js/54.0463d684.js",
    "revision": "cec420ef5aba6186fd7d1000226c792c"
  },
  {
    "url": "assets/js/55.5941863b.js",
    "revision": "0c5052c294cf329a932ee184187e97ce"
  },
  {
    "url": "assets/js/56.8e9480a1.js",
    "revision": "239cfd1041d29b017fe3ee9474593d31"
  },
  {
    "url": "assets/js/57.21da6ba0.js",
    "revision": "cb6a694bd4a2a3b77993a7ee62bce743"
  },
  {
    "url": "assets/js/58.d13a8683.js",
    "revision": "42eff0e5a375fd62c76245ecb179bc52"
  },
  {
    "url": "assets/js/59.9e19d421.js",
    "revision": "ebb3ecb1c701aee9592b6dd477af01fe"
  },
  {
    "url": "assets/js/6.9a91b9ad.js",
    "revision": "9ee0b1f7cbbbac810d8e2d983ec8e8e7"
  },
  {
    "url": "assets/js/60.59ad70ac.js",
    "revision": "8a65ba7901cba268d52ccd096904f757"
  },
  {
    "url": "assets/js/61.b369faac.js",
    "revision": "a95d1b096e6f00021c36de2bff5651d7"
  },
  {
    "url": "assets/js/62.71dbdbe3.js",
    "revision": "da34b9a75bd11d67d6386d716a6f0b2a"
  },
  {
    "url": "assets/js/63.db7cbb4f.js",
    "revision": "9e7bc23ccf1038b79f45b0327f025fb5"
  },
  {
    "url": "assets/js/64.53f4983e.js",
    "revision": "4fde02b8d9341be8fb398392500a8c58"
  },
  {
    "url": "assets/js/65.48ccf6ab.js",
    "revision": "518a3a91631fc7da6b64b508b82f3428"
  },
  {
    "url": "assets/js/66.3a736fc7.js",
    "revision": "56ccb39453f9c82c7c5220155f5772ff"
  },
  {
    "url": "assets/js/67.6e6c5542.js",
    "revision": "75f343584ae1b147e01c4958421b6544"
  },
  {
    "url": "assets/js/68.662271b9.js",
    "revision": "d52a4f81ce72a39f4bf6eaf4f0666c4d"
  },
  {
    "url": "assets/js/69.854a64c4.js",
    "revision": "de5d7b6ec5a2c3ed139c251bcd6c538c"
  },
  {
    "url": "assets/js/7.068df052.js",
    "revision": "eee64a90275be89987c10e24ae5623a1"
  },
  {
    "url": "assets/js/70.2f48e14d.js",
    "revision": "70155ebdb3a5f09eaa71eb623b089ba0"
  },
  {
    "url": "assets/js/71.814fb635.js",
    "revision": "8b41469099fc0c85981d81ef9f503a0f"
  },
  {
    "url": "assets/js/72.4562135c.js",
    "revision": "0865fdd5ff143ce459ee44d274fa5026"
  },
  {
    "url": "assets/js/73.bad7e6b3.js",
    "revision": "6c521ec51fe83b583715bc26df3b1c3a"
  },
  {
    "url": "assets/js/74.57c3d4cd.js",
    "revision": "33b82e64cffe0914faaed1901498326c"
  },
  {
    "url": "assets/js/75.45800daf.js",
    "revision": "2d161e20375e7e1cd4b017c81a7bc424"
  },
  {
    "url": "assets/js/76.47d947fc.js",
    "revision": "a2776a5d337ad2b4bffe5ba99dceb39b"
  },
  {
    "url": "assets/js/77.afb99050.js",
    "revision": "510736ac22a1666dd95ef3932b90faca"
  },
  {
    "url": "assets/js/78.0ab4c322.js",
    "revision": "a88533be0fbd7b73d934c4fc13a1d00b"
  },
  {
    "url": "assets/js/79.adfac072.js",
    "revision": "118cd1b9553f4d0e88bfcd3c8567870e"
  },
  {
    "url": "assets/js/8.4764e751.js",
    "revision": "d045b45a578880d71d899b50e25ac826"
  },
  {
    "url": "assets/js/80.ee548d19.js",
    "revision": "0c7985a92f3f07c5708ce298c1993de7"
  },
  {
    "url": "assets/js/81.00894cac.js",
    "revision": "af62e738917b80539bb4eb29a3703f7f"
  },
  {
    "url": "assets/js/82.7eb70d9a.js",
    "revision": "6b5a8f5a3ce73dedfacb0906dbad4a77"
  },
  {
    "url": "assets/js/83.c316123a.js",
    "revision": "73a422373835a8b16eb9ed1b9191beff"
  },
  {
    "url": "assets/js/84.e2df94d0.js",
    "revision": "345ae8e8911db6e24edc00cb839ac668"
  },
  {
    "url": "assets/js/85.e74f3300.js",
    "revision": "703ffc455f72feddb5e95d53ac200456"
  },
  {
    "url": "assets/js/86.315362c5.js",
    "revision": "4298b73c57236cf3656e7ac6186137c1"
  },
  {
    "url": "assets/js/87.ba2adb40.js",
    "revision": "a75f6a66900fa5881c8d664a221e5616"
  },
  {
    "url": "assets/js/88.6e2be90b.js",
    "revision": "3e4004a4945bf6c345fcf3ab2ea8ce98"
  },
  {
    "url": "assets/js/89.877cbf59.js",
    "revision": "01af9c89806cc3d6e0f473dd7b5e0a04"
  },
  {
    "url": "assets/js/9.7ec15579.js",
    "revision": "cc578b6bc4119dc28002ef40e3ee8720"
  },
  {
    "url": "assets/js/90.00d7e923.js",
    "revision": "435bdadad4ff19f2dfda4d5117e1df1e"
  },
  {
    "url": "assets/js/91.7df08a89.js",
    "revision": "9553083db95386806a96ee00dc9befe7"
  },
  {
    "url": "assets/js/92.2b062d7a.js",
    "revision": "31ac57144e32926dc9b5a34a7489f72f"
  },
  {
    "url": "assets/js/93.78739eae.js",
    "revision": "3de9eb0d8f55762d40850fb2aa1f740f"
  },
  {
    "url": "assets/js/94.384931e1.js",
    "revision": "b5db27a9b72f7a6d76e4ed9da138fdf9"
  },
  {
    "url": "assets/js/95.fa02a9ac.js",
    "revision": "330460a6792841ac33e739f9030fcc7e"
  },
  {
    "url": "assets/js/96.39c49b2a.js",
    "revision": "3c60c1dca9d21b1ce9fbcb09d1c96dec"
  },
  {
    "url": "assets/js/97.3230bdbb.js",
    "revision": "49933e3d7621c631781e1a7cbdda9b11"
  },
  {
    "url": "assets/js/98.5cb2ce4c.js",
    "revision": "373c2cb1e7574d1ebf56750063b675a1"
  },
  {
    "url": "assets/js/99.ad82530f.js",
    "revision": "90f959fbc92a73072306a370a0b5734d"
  },
  {
    "url": "assets/js/app.36b9a018.js",
    "revision": "fb251b2b98a7ba7849888f0c338888e4"
  },
  {
    "url": "configuration/api.html",
    "revision": "b15830bc75019347d525d3b6af713c4e"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "83dbc94b10f97fe8864de7578d3a7adf"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "2ff14547b5cb320cc05159c464d3eb18"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "5cc1012ada273a3d6a9814df3fd00346"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "0b0b80c7d840be1e4d2f2aea6942df36"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "42c7d6eb3888c4a40bda3bdc0b5719b5"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "a39da12e2d035972bf9e3f79b5b4b22b"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "1c112d8574922d8e9b76cf5c17aa7672"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "f692d90c8b91fefa32aa42fd96acc560"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "18bfbc42a5f239cd55edc6dd5fd8864a"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "740f2b3ba98d0b1de420c2a862da32a9"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "a31bb13fa325ef0aae3d4526f6421152"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "2b95d0821904a6695a6468be7ef0e476"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "68f1de13c93c5d80f5173bf36dc72aac"
  },
  {
    "url": "configuration/index.html",
    "revision": "5b9d6b2df4c69351022a40e60acc3ffc"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "146bc01af56f2dda6424c6d47ef70557"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "3e1c36c2508df1ed2451ca2d5d99ad75"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "6f9f9e3ff011b4f0c932fa0e5643c658"
  },
  {
    "url": "contributing.html",
    "revision": "e4dc82d86e92b14d4ab09a1c5d1ff62d"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "331a463361e6e998a97d650eb2337898"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "404bed5f8cbd88ec094a4758a84a09a0"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "ca13f05b23acb7b38d68a224d75b4161"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "84e848da5376bab0f650efc09cc845b0"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "bfa549319898280a2d72fba66f4d099d"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "93a59f55ac86c000d0ae095f28822b21"
  },
  {
    "url": "core-fields/background.html",
    "revision": "0883918174d9362f7727de522f1a9783"
  },
  {
    "url": "core-fields/border.html",
    "revision": "48aec15beb005c0d9d15fff00e40b5b1"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "0b18ff117ee40528cef09ee6b0442901"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "739eca9dff297110a3c960707a68dc8d"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "4f2a5a24f59f5a83d53aa1b2f8feb0d0"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "a41e074a671d933d68b77528c3cff772"
  },
  {
    "url": "core-fields/color.html",
    "revision": "6b50fa9aab334fce39f2eb656af3b60d"
  },
  {
    "url": "core-fields/date.html",
    "revision": "12ff8e51cfcc7e3854a94e1a4ed54b25"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "30fd4b12cf21045570e94bf705cfff65"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "fafd58891e966561f2f448f51c441505"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "1a804c45d3cd47cface806cfc96eef4a"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "00f39cfdb78ed0b5941ea3179e43b618"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "08e257f908eb248ecda40ae93b48f61c"
  },
  {
    "url": "core-fields/index.html",
    "revision": "5ef001cc379e32249e2eeee24a71affd"
  },
  {
    "url": "core-fields/info.html",
    "revision": "b59583a2e3b0c2c50ff8774e8e4be080"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "2eabacacf259c6026a22bc588d4212bc"
  },
  {
    "url": "core-fields/media.html",
    "revision": "49865bfad5ae348df207c76077462bf8"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "8e14970796bfb474a5caeae84e4dc106"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "4baa4ee1916dabebbf13c2c0a686e34f"
  },
  {
    "url": "core-fields/password.html",
    "revision": "c0d3d04a17fc3f981923e3bba234566f"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "c468432d5deabd63ddc9a3bb31044d98"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "cff2f9a9fa752348904ba30932b4578c"
  },
  {
    "url": "core-fields/section.html",
    "revision": "5869e355a59b20ecd0986a4d386e8fa5"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "d55d43184f5d54b055967ace447031da"
  },
  {
    "url": "core-fields/select.html",
    "revision": "bc80daf66969df833b3cd3926a41b40c"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "501ed30215b5c03513404a2ea8b63f75"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "6e6994b4ab262e084b2ef43cb5d2a118"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "a008e1c83848a16f77ed2697735b8132"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "045c72e5131ee973475503c10ee75694"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "249c6aa8a60a2e798723056e5f0ed1d4"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "1c76760be611b305719be8f393ea25f2"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "7821b553975cb19eac60c4474fade700"
  },
  {
    "url": "core-fields/text.html",
    "revision": "39649af979692669b718f9a6ed23f7e3"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "94d352794bd1576e79b716d6b82a7e7a"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "b461ef894a66624d44d41fa8cb84ed6c"
  },
  {
    "url": "core/index.html",
    "revision": "3bc4bad6f0f01339b72acc401953303c"
  },
  {
    "url": "faq/index.html",
    "revision": "a0ec30d9080ae83829a455d1980e635a"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "92c4433e4ca2b242eb2d90c71a5b36ed"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "cd169e5d246770da804608a958ea1fac"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "05ca6663f4fa5812a101ded3ba39f5b2"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "bad637608a2a395ae397e49ec4e996d1"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "fc64da88bad369cfe26d97e6c6885f75"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "c56022b8fc405cc8f47cd509812f76fd"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "3a4a3bffa1a2a141a016c1d90f21843d"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "4e8bbb46da0292ccd857605b550b12f2"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "3f87626b9602bdd7e59dff448a43ac34"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "84826d8ca1992ad768ca21eaa6942edb"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "7c86b4a47be1e1fc0a33d552b240ffdb"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "a6e5229a18e588522f12532eadf69e78"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "f73c8919ea84ce3ccbadd60db4b70597"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "7571d83091903774476e037e2fc3407d"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "bd2f34e773fc113ce2663ca185cbbd40"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "5d5b6e34843e77d64972c11d43f2de73"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "73946949a4e0a7b30f6a444842a3f180"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "11e47a3beef691d6fdcb1ed2c9eebed2"
  },
  {
    "url": "guides/index.html",
    "revision": "8695261ae0c015b90b6565ee8e1e4121"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "8cd821d5b8a39107d297ae4402435d8f"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "2d0b4debcffbc9497f283674ae077046"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "b6f0b8da9f1b3ccc9cd400a7cb31b92e"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "56cf434d12455679b74a83eb2da3679e"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "9becb29818e58d90693d65984875e6a0"
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
    "revision": "1471d6d7d04de2f13753abbf0411d311"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "bf57a6a4c3a3c896adc53ff9b1628226"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "48479acb309ee20fdf40087343a77f52"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "8f4491993e172fc7f6307fb6d414351f"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "0ab1e7f55fa723344acb89f2c1f2a165"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "6e53c812663ba992f5d78849f8e10c52"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "53e9c32f2248070d2bc948b5eca2224c"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "5c9ae1f9550223861edab86bc1472c19"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "8e266d1099ca7752e6bfcd7d32c3e396"
  },
  {
    "url": "premium/index.html",
    "revision": "d10b9677dbba3afa283c4d4eac8e98e4"
  },
  {
    "url": "premium/js-button.html",
    "revision": "7773b567c623eb6aba99f1be3a0f4631"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "a444c641bd0cb638d8dc0c298c9881fd"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "6d4afb509c9186de9e1d36ccfc7c7ca2"
  },
  {
    "url": "premium/repeater.html",
    "revision": "b630a1310e5b4846b5aeae8199d5d04b"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "e2f045d13f9a74f3ac58cdec7e10d869"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "a71ac03b1828e4657c1a424c3aec58c9"
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
