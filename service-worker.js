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
    "revision": "aef42bcc15d831155485a4b553551235"
  },
  {
    "url": "assets/css/0.styles.0862c083.css",
    "revision": "ac5ca3a7bfa13c5536eeadffecbe1c8f"
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
    "url": "assets/js/10.f91194fe.js",
    "revision": "adc01db476cdbe307040a8d4bbaf71e4"
  },
  {
    "url": "assets/js/100.a5def56c.js",
    "revision": "d63bae5694aadd2261fe2fbce2264672"
  },
  {
    "url": "assets/js/101.af557f59.js",
    "revision": "4002580c1b2a8fd22fe8607b169a8926"
  },
  {
    "url": "assets/js/102.18643ff2.js",
    "revision": "6f1ec8ec284a326394a8ca5aed3ea098"
  },
  {
    "url": "assets/js/103.47e0bb55.js",
    "revision": "0e065775f48741ffab1c2966c97c4d23"
  },
  {
    "url": "assets/js/104.d549dee4.js",
    "revision": "f01b333cb7838bd9d7949a9511503be5"
  },
  {
    "url": "assets/js/105.0945c738.js",
    "revision": "1971369983b00404e921f1b000ffef52"
  },
  {
    "url": "assets/js/106.5c50944e.js",
    "revision": "11dda5f3f0dc324eb3df59b9a2f2cda9"
  },
  {
    "url": "assets/js/107.4b9f6875.js",
    "revision": "89732d998fdd6285438aa9e890ca920d"
  },
  {
    "url": "assets/js/108.b438ebb0.js",
    "revision": "917e05fd0d22a4cbbcf413e6f67a6526"
  },
  {
    "url": "assets/js/11.9ab7a818.js",
    "revision": "7a0f1126a6c68ef5003edfae7492cd20"
  },
  {
    "url": "assets/js/12.778f16aa.js",
    "revision": "5cf100934eb39941ed76bda13096a3cc"
  },
  {
    "url": "assets/js/13.99acee50.js",
    "revision": "81cab4ce96b161a49e6de2b91a544f94"
  },
  {
    "url": "assets/js/14.e19a3951.js",
    "revision": "081544b023ff6a918cf8991a23b17417"
  },
  {
    "url": "assets/js/15.b0090d50.js",
    "revision": "7a99149be53370b4a8cb037171f1fc74"
  },
  {
    "url": "assets/js/16.18d26f4e.js",
    "revision": "31b877c54721afe57343aff23c71b22c"
  },
  {
    "url": "assets/js/17.970c759c.js",
    "revision": "96893072d4be37c88ee64d7baccbae3a"
  },
  {
    "url": "assets/js/18.814f817b.js",
    "revision": "ca2361d11334a0fe65752b0fcf6a3140"
  },
  {
    "url": "assets/js/19.d77f0c77.js",
    "revision": "5802943e531bb7a166f848f22429e560"
  },
  {
    "url": "assets/js/20.4b64b472.js",
    "revision": "3a173c67fa79ffab19a99a7dd63ca73d"
  },
  {
    "url": "assets/js/21.8a490adc.js",
    "revision": "5b66ad7328a5822d5d146f806993850a"
  },
  {
    "url": "assets/js/22.0e8e966e.js",
    "revision": "41f951b50825718926970edaf9220287"
  },
  {
    "url": "assets/js/23.304aedb7.js",
    "revision": "a3e2132dc1b418aa4e5087cbe371fd12"
  },
  {
    "url": "assets/js/24.787252ae.js",
    "revision": "d900a38bddd594fcf838a601736351bb"
  },
  {
    "url": "assets/js/25.56830e96.js",
    "revision": "2c70ab19576ad8b657dbef5103eb7f63"
  },
  {
    "url": "assets/js/26.262a987b.js",
    "revision": "4387163dba98a6c25cebc50c1a5c95f7"
  },
  {
    "url": "assets/js/27.042798fa.js",
    "revision": "ce622bffd1afc03d683c346d80b7f9f5"
  },
  {
    "url": "assets/js/28.c4552893.js",
    "revision": "adb3295e7043b1a9722c39b82a7c143b"
  },
  {
    "url": "assets/js/29.e06a35db.js",
    "revision": "7cfdc97038781f61a6c52fa3795bed69"
  },
  {
    "url": "assets/js/3.32dd8919.js",
    "revision": "be647e06ed540c76937266f36ba9d57b"
  },
  {
    "url": "assets/js/30.f6618dd2.js",
    "revision": "5a5dfcd8d8dd935c02ddcfdded096fae"
  },
  {
    "url": "assets/js/31.4c05fe57.js",
    "revision": "6563b9c6cf3b01fccdb5e0855090ea7f"
  },
  {
    "url": "assets/js/32.60d8cf0a.js",
    "revision": "b3e23b6ce3f2502356065d3eb8c25921"
  },
  {
    "url": "assets/js/33.0dca7983.js",
    "revision": "e5679197eee3016237503a5ca65d0115"
  },
  {
    "url": "assets/js/34.a890331c.js",
    "revision": "398f5145b665b0dfe42c2ee71f067e70"
  },
  {
    "url": "assets/js/35.581082f1.js",
    "revision": "e10c72d5052ec48a293939d03472001b"
  },
  {
    "url": "assets/js/36.4747d9ac.js",
    "revision": "993e004e84ddf83f315a1c0c363c851f"
  },
  {
    "url": "assets/js/37.da6923f5.js",
    "revision": "429f2294f3c3598ee935389127fd29a0"
  },
  {
    "url": "assets/js/38.708d6e9d.js",
    "revision": "601d7d2e7278370bfc09781a25e9b754"
  },
  {
    "url": "assets/js/39.2ed877d2.js",
    "revision": "3eee791258132e2688dd538074cb33a7"
  },
  {
    "url": "assets/js/4.4035c1cf.js",
    "revision": "cc2bd2f8d90a9a1442c13911d9ed84a8"
  },
  {
    "url": "assets/js/40.24e30f01.js",
    "revision": "3f1006d777a2024dd33d169e1b41f8b7"
  },
  {
    "url": "assets/js/41.ba750467.js",
    "revision": "8cbac319ffe368c29fe0ff8162ed66be"
  },
  {
    "url": "assets/js/42.d815b8be.js",
    "revision": "139b8e7a4ea62ac79de937a8733c84ec"
  },
  {
    "url": "assets/js/43.a0af304b.js",
    "revision": "edd28295ba3887d6ced28070226dde90"
  },
  {
    "url": "assets/js/44.7eecd953.js",
    "revision": "a1bbd76fd5bf91c2e7bd326f2507f708"
  },
  {
    "url": "assets/js/45.8627145b.js",
    "revision": "a4b44ebd1905864adece0e3efdddb9b5"
  },
  {
    "url": "assets/js/46.ff9f13d0.js",
    "revision": "83f68ed7d0780379cd98455235bc8d7f"
  },
  {
    "url": "assets/js/47.4d9d9b97.js",
    "revision": "8b239802cb4f991211b0b076ecf96cb0"
  },
  {
    "url": "assets/js/48.80266fe4.js",
    "revision": "bbb5c456d19a289c7ccdaea9f5248b82"
  },
  {
    "url": "assets/js/49.13a6ace0.js",
    "revision": "7dd4475cbf071df393d88ae2a8fe13eb"
  },
  {
    "url": "assets/js/5.2747301c.js",
    "revision": "e65caf2702e14cb98d5309744560a385"
  },
  {
    "url": "assets/js/50.f93747ee.js",
    "revision": "37e25a0611d4cb914b4d485827a76928"
  },
  {
    "url": "assets/js/51.db4b1a8b.js",
    "revision": "15fb39e70a06896724ddb9972e6879e8"
  },
  {
    "url": "assets/js/52.791448db.js",
    "revision": "08ff831eb7d3aff633854e44cdceaa69"
  },
  {
    "url": "assets/js/53.6a53b268.js",
    "revision": "b08e7765eeba61351a18a12c4b7812ed"
  },
  {
    "url": "assets/js/54.b1717a50.js",
    "revision": "3a7842cec70d459dc552aa71ca1a45c5"
  },
  {
    "url": "assets/js/55.a92148d4.js",
    "revision": "2e6ac60423bba6a295cc6c5696641a9b"
  },
  {
    "url": "assets/js/56.6654d169.js",
    "revision": "a2425bcdf7b613d6ec2d7ae1b17dc2c1"
  },
  {
    "url": "assets/js/57.1b4a0630.js",
    "revision": "5f757a76bd7ed0543c1d1a0c5a106080"
  },
  {
    "url": "assets/js/58.8ae395e6.js",
    "revision": "508b71789f59696412eb7f76466e0b9c"
  },
  {
    "url": "assets/js/59.cfc22f83.js",
    "revision": "6eff150c2ca6cd48d5ee4e6ff6cc5b66"
  },
  {
    "url": "assets/js/6.cf5f7597.js",
    "revision": "4cff100bdb161b01ed79dd35c50d60da"
  },
  {
    "url": "assets/js/60.188819f1.js",
    "revision": "34e2a042715dbeec5ed9d3a9266b25c5"
  },
  {
    "url": "assets/js/61.04a45c77.js",
    "revision": "083123bc5dcac44dc510513fb15eef48"
  },
  {
    "url": "assets/js/62.9de3a00e.js",
    "revision": "814e630031ec4b52ce2638e817ea3f56"
  },
  {
    "url": "assets/js/63.c30c061b.js",
    "revision": "a575a959dcdefb2d836fb51a9d1ff81e"
  },
  {
    "url": "assets/js/64.0f52d644.js",
    "revision": "5143e7bd0d0e392397ab21de1ecb103f"
  },
  {
    "url": "assets/js/65.ca1a2867.js",
    "revision": "9814cede0e4c54cd8f15453fc547263e"
  },
  {
    "url": "assets/js/66.853f4ef8.js",
    "revision": "70906f02ed7e4c63ac904610711836ef"
  },
  {
    "url": "assets/js/67.fd235770.js",
    "revision": "ff8b7c3a09f9401cf52071afa21c8d8a"
  },
  {
    "url": "assets/js/68.675ef78d.js",
    "revision": "cf38d3a3c5ced747e22c87ed7b4641b5"
  },
  {
    "url": "assets/js/69.0db5b9fc.js",
    "revision": "977d747699414a37ddaee5d29c88dc2f"
  },
  {
    "url": "assets/js/7.d228a778.js",
    "revision": "d03548d99dfa51fd6a589cb96a3c770c"
  },
  {
    "url": "assets/js/70.45839414.js",
    "revision": "393e742e547b46a9c926561bba21a559"
  },
  {
    "url": "assets/js/71.3d26af30.js",
    "revision": "e6a0ed7677e0b6a5f90fbf892fe06bf5"
  },
  {
    "url": "assets/js/72.3076270a.js",
    "revision": "8594564d4784ebb734fc7e3cd6181ba8"
  },
  {
    "url": "assets/js/73.d5ffb7f7.js",
    "revision": "16e5bdc6966d87eba5dbdf1a480da5a0"
  },
  {
    "url": "assets/js/74.e4aa7286.js",
    "revision": "3877b4ffbd699c9ecc99b14d8b04f108"
  },
  {
    "url": "assets/js/75.8335d86b.js",
    "revision": "722477a2d3ff5bfda58db3f52decb183"
  },
  {
    "url": "assets/js/76.c4e190ab.js",
    "revision": "30884e35647051888d5fcd20486fadaf"
  },
  {
    "url": "assets/js/77.dd7c743e.js",
    "revision": "093f67b0cc2be99b56415c87f23907df"
  },
  {
    "url": "assets/js/78.15cf7fb9.js",
    "revision": "602f6cdf6947fde28743e787bcbcc034"
  },
  {
    "url": "assets/js/79.049021a7.js",
    "revision": "b9d231cb9eee4f046f3b2a391d5d71d7"
  },
  {
    "url": "assets/js/8.b46409fa.js",
    "revision": "2b21b51bd6ac5d37af055f1afcd8f352"
  },
  {
    "url": "assets/js/80.7489da77.js",
    "revision": "928d2e7ef2e8c17bab79b10a6505188b"
  },
  {
    "url": "assets/js/81.0a4966e3.js",
    "revision": "cdf5b30059ac4826eb81563e13ae4143"
  },
  {
    "url": "assets/js/82.afcbf834.js",
    "revision": "29698e292548a7c4a05e26de517fee41"
  },
  {
    "url": "assets/js/83.9c00ef0f.js",
    "revision": "cc4fedc96b4a45939caad05bd4d085c2"
  },
  {
    "url": "assets/js/84.f19a4482.js",
    "revision": "e5edb5b7c568208443a76ec9c1032415"
  },
  {
    "url": "assets/js/85.8cb0d6a9.js",
    "revision": "f907e684061a520b9d66dc8a476ea931"
  },
  {
    "url": "assets/js/86.69255e0c.js",
    "revision": "82ec8ebebe9dcd7e87e2ea6f9102477c"
  },
  {
    "url": "assets/js/87.8755335a.js",
    "revision": "5c2a41c8757a70e442d5ca17459eb3eb"
  },
  {
    "url": "assets/js/88.a0c205d2.js",
    "revision": "cea047a8e7532c6d2f57feb6cf7ec994"
  },
  {
    "url": "assets/js/89.ac8721aa.js",
    "revision": "710bea1ee7750bdf1ca8e0dff8b75d86"
  },
  {
    "url": "assets/js/9.79c9a872.js",
    "revision": "1570da476ab9e3d2adc5fe5e3e6d0d9f"
  },
  {
    "url": "assets/js/90.c425826e.js",
    "revision": "38e18c51b1e5cdb7cc0138b2691ff822"
  },
  {
    "url": "assets/js/91.5723ba93.js",
    "revision": "014b31b66b3b33a40166af4844b58047"
  },
  {
    "url": "assets/js/92.30563030.js",
    "revision": "52c826758287ffad81dce2ea34a1b7d8"
  },
  {
    "url": "assets/js/93.b4881f21.js",
    "revision": "7fcb2084a5a8f27906a4c17322cf4e4a"
  },
  {
    "url": "assets/js/94.5a660034.js",
    "revision": "3ffc242911c3a16148258997debeafda"
  },
  {
    "url": "assets/js/95.b301ac16.js",
    "revision": "f2780a04b5352f15b91d0d37787665e2"
  },
  {
    "url": "assets/js/96.88d49921.js",
    "revision": "bdd955fb75c4370fac19f4f2bd548b74"
  },
  {
    "url": "assets/js/97.c544a51f.js",
    "revision": "9d46b24980514902ec891f0f011d3e84"
  },
  {
    "url": "assets/js/98.511ca910.js",
    "revision": "bfecdedda14f6d2a643bea615abe8fa6"
  },
  {
    "url": "assets/js/99.d8b8e4bc.js",
    "revision": "055796ed3e07fcfa309e77e51c4bc567"
  },
  {
    "url": "assets/js/app.43f413d0.js",
    "revision": "1eeadf3ee6ec6202e8c232f29725329b"
  },
  {
    "url": "assets/js/vendors~docsearch.7f7e78a4.js",
    "revision": "1833333cc9231e785803d70cf74d7b8e"
  },
  {
    "url": "configuration/api.html",
    "revision": "c54c7e73c499492595266ca578aaa722"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "f62ba9448733ef7ba7cc5f403f30e314"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "d85812068afe17c503134abc786ac43c"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "a0d785787bdc9853aa85ac86f0ae6dc1"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "c9271606d42abdf9380af444d005eadd"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "da657b522e1dc312a782ac4dce957ab3"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "e18508bd5a9ee933f48a1a6598c28137"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "80672b9510964a5eb007c72d9723204a"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "2f71ad04a811a882ae15152986c49c14"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "dc4d2d70497110a992e319813ba3da26"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "75ba79060f60fdbbecc0c896862a6a92"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "cb07a78b94793c7e007e1f99051dd763"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "8a140ddf489deb2e931176bc5f329213"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "366c5e711d166d938ae1856836e6a0c7"
  },
  {
    "url": "configuration/index.html",
    "revision": "85aef150a11dfaef8ffeeda8226d9ddd"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "c9c52b6ea6a1f87caab24980bd9510d0"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "6e08456ca5c1f5639925c2c64b545819"
  },
  {
    "url": "contributing.html",
    "revision": "9a654c841e79d7ebe386f9d389d124e1"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "38f2ed276c9646b2bd8bb29705422cf1"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "44edb9a2cd4639a4fb93cd56c2729fcf"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "332be424e9410a9b5b4f0d00e0c05ce4"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "b4fec2821c16baae99ac4f3a7c7d1f22"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "e375621633fe70b28b2c4fd772cd3a11"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "59b3323f420da2bda8fd869d6bfd1d0a"
  },
  {
    "url": "core-fields/background.html",
    "revision": "25923b89620d73fde58ebdeae2d2dab7"
  },
  {
    "url": "core-fields/border.html",
    "revision": "46d6e8463b7db63f0804febe9bc7cdd4"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "e25295a60891eab45cf4eeb4493b9350"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "acdfead23121aac9386e90f7e81d42cc"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "af8666d2da0ce30322b978535dc28fd1"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "232fadfb2609daeb737fc42c11d8fcc2"
  },
  {
    "url": "core-fields/color.html",
    "revision": "c78d8c8d02ecb02ffb0ddccf60e914b4"
  },
  {
    "url": "core-fields/date.html",
    "revision": "1c4346636793254b539329874bcbb287"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "80de69c0cbab7af7141641e80f10a9df"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "4bf23d0706cdf1be4e5745d317c67ed4"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "9fd8e183dad05848aae64b8c00e0712f"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "a84081d52c47ab606c8433b336d6693a"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "140e5730585240493594b70cfdc373e2"
  },
  {
    "url": "core-fields/index.html",
    "revision": "c1e53cd5a14f32a667fd30b5171b0aa5"
  },
  {
    "url": "core-fields/info.html",
    "revision": "856f08eef9af6c9de6ec17dff6bc08b6"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "01d38f988dd398ba23ba9e3baac59f22"
  },
  {
    "url": "core-fields/media.html",
    "revision": "99e33bde2496d64b593e2e27f6d2faeb"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "2e6c1432c1de516f86f2aadfbad594b8"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "778a1c23c6fa3a8a2deb22235617ca53"
  },
  {
    "url": "core-fields/password.html",
    "revision": "27eedec18c9e3df226168cac7a7573f6"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "b52763d45d128e1bb6f45b42aaca086b"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "32b3246507093d1702938000c7a1f59b"
  },
  {
    "url": "core-fields/section.html",
    "revision": "90d65677b86d67415695943423dfcb1f"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "9f874488a5be614836528724aeb0fba4"
  },
  {
    "url": "core-fields/select.html",
    "revision": "0894d632d25194e40112e1ec427a8537"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "e97737ac39dca24f12f9ec5253a2b8fc"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "eccc77e2f1c398fe9dee5d294a5007ef"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "b28cf49aae8e07979ed6bea9e71f17f3"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "5be3d67a2616473f90ede48a15f6c154"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "a6173294da68204040dfbb0e65d33bf6"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "0b675135fdf9f02883c6a28614b4573e"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "9656d4274df59d11a56199527e7096dc"
  },
  {
    "url": "core-fields/text.html",
    "revision": "ceb60d8d019564d92b881d09b17e62ee"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "9fb7117e02b228f6f1211c064b54906b"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "a4c73685b87b1ec24a0697d8314c01e8"
  },
  {
    "url": "core/index.html",
    "revision": "acceb6bd9b9ce5fbf144d2d1f5d5d36e"
  },
  {
    "url": "faq/index.html",
    "revision": "e03e0796f1c3734fd2aedefbaa128a0e"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "9faaf38e3f0ef31e8e4a851de7038aa0"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "30db91af641d7d79457aa19e4c5d0b08"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "acbdd70a28b8dd73c664df3f27208a3c"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "4a7cd35e61a314a63f2ca962aaceb06f"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "3c434fbeaefb745336bc015f9b94ad14"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "11447d036a29dd166c09652b97bd77d8"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "ab7a3c852f86b3cb3294d5bb73215e25"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "76fcf11aa0a77d64aea935574e3f0fe5"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "4389817e07d24c7adb66d487c4edc479"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "57147ee081a3ca0731cb4e39ac9b5f23"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "827542633183ff68f0ec07bafcdb08e8"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "a91c043f9f533ad093698a41ac7c462d"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "cdc478c2f0e36fad79696ab6905f2b85"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "de0678f2d736610fff4012a5ff792055"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "43ae2dd9f2c503017a279d7a48873d88"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "dea651f8b9d09b0fb3cb075937fe92c8"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "fd8d300db4c8c6c9e36bb89197db6f02"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "ae73c087ace381ef5112ba7bc6a85766"
  },
  {
    "url": "guides/index.html",
    "revision": "9d0b9a00b3b04bcc9a96dce77f388cbb"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "98a386493828962e693ded2277e48a57"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "88bac9fb43c6b848e5ae9dd1900b6984"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "f81c81533b6784e1b6f3eb1416c06fa4"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "66952fb4f5c1f4596253dfc1356612d2"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "1ed60874dedb0495f7259be27df1be1e"
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
    "revision": "6aff22eeb96accc184144a9ae49912a9"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "2ecb0d5410984dd522a224bfe117d9ab"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "a384fa7d27766c7ed8e100fd4d31b448"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "10cc2beb87223bee0246f37ab931f0c5"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "3525f03ebd35897eae34c0dd989addbc"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "fbc4178d3b911f5bed03f8827c275a49"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "612fdacfa35175b61dc70b908a297363"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "349f7fc3a1708d208ece12c37a838c79"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "67bf4dc52b81b9b9fcda117e8eec3e02"
  },
  {
    "url": "premium/index.html",
    "revision": "5b1f03710c78fa5d29c01da6339d5788"
  },
  {
    "url": "premium/js-button.html",
    "revision": "aec9dd9f31b8507be19ea099306f15c1"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "81e6ccefc90bfb104531147569a59baf"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "0c38aa7acc2c7cece9b6a7c680b0ecb1"
  },
  {
    "url": "premium/repeater.html",
    "revision": "fe631fe7c9b5800016327bfd7a83199d"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "7d644e2c7592eb59496c015b22563669"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "69b39ebf7a8bb615f0b73dc2bf88e1d1"
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
