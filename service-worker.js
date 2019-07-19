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
    "revision": "f66eebf238be5ff210f51c6b1daceef2"
  },
  {
    "url": "assets/css/0.styles.24c080dd.css",
    "revision": "9e9bd1e6cbb9099782bf0940e921cbdf"
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
    "url": "assets/js/10.800b41e6.js",
    "revision": "e5f289e1fb6c0be3490a891262b098e7"
  },
  {
    "url": "assets/js/100.e8a9e338.js",
    "revision": "5dcf1862006f1ac7bcb0fe4c1097e7f4"
  },
  {
    "url": "assets/js/101.f0386299.js",
    "revision": "02d1b03a3e51a168a14036b7d8271c27"
  },
  {
    "url": "assets/js/102.0e2647f0.js",
    "revision": "21da2874d17288cd52ebe0ba572b890b"
  },
  {
    "url": "assets/js/103.df0ee3bc.js",
    "revision": "a4318a7a9f659edea435b605de464e57"
  },
  {
    "url": "assets/js/104.cfc192b1.js",
    "revision": "a0e6aa806464a272f786bc4f7c8fefba"
  },
  {
    "url": "assets/js/105.71d4da7a.js",
    "revision": "bcb85b534121d55edc92d349b657ec0d"
  },
  {
    "url": "assets/js/106.7e649b0d.js",
    "revision": "f7cf79b37757b3f169369aeebbe0527a"
  },
  {
    "url": "assets/js/11.35cf58ed.js",
    "revision": "5c1f6f7dc6bd0c407da933e164384a7d"
  },
  {
    "url": "assets/js/12.1b4ff900.js",
    "revision": "338589d72baa3e251a81ded35b37641f"
  },
  {
    "url": "assets/js/13.855c212b.js",
    "revision": "7f1e9d15d9d60634ad9f6c1086dd0bbb"
  },
  {
    "url": "assets/js/14.a923b82d.js",
    "revision": "6cc10d19db651b79ae599ea894a6f0a6"
  },
  {
    "url": "assets/js/15.f85800e1.js",
    "revision": "591e6e90704be044611ed653752bc870"
  },
  {
    "url": "assets/js/16.0a20118d.js",
    "revision": "3802f45268cb3de8f4f38047eb69f253"
  },
  {
    "url": "assets/js/17.d6b6218f.js",
    "revision": "4a1d9d55fbfac269d9f2c9b8e5be1fd9"
  },
  {
    "url": "assets/js/18.f58a4397.js",
    "revision": "9a59cbf0892c9c0094fb9a4199de30a9"
  },
  {
    "url": "assets/js/19.36f4986f.js",
    "revision": "d91776ed7c4756c101c62a448b4a9a06"
  },
  {
    "url": "assets/js/2.9e4cdac5.js",
    "revision": "b564fc8356146b6d71c3c8ac9cdd077d"
  },
  {
    "url": "assets/js/20.e7cff466.js",
    "revision": "39b939f6b2bdb0bb85b5d0f716f47dc9"
  },
  {
    "url": "assets/js/21.ce121843.js",
    "revision": "cf7d24811ef28d538b36bcdda56b4c5e"
  },
  {
    "url": "assets/js/22.6f0f4612.js",
    "revision": "8462b78c89415d66612bb53c6e627aac"
  },
  {
    "url": "assets/js/23.b597b34a.js",
    "revision": "dd7280a0775b4f36c1ae5da88cd064d8"
  },
  {
    "url": "assets/js/24.460f23a6.js",
    "revision": "a12a609285268a968bd9fa3f16031f55"
  },
  {
    "url": "assets/js/25.d41e9715.js",
    "revision": "d38a35263f188d05977a39c0f445400e"
  },
  {
    "url": "assets/js/26.131b1fed.js",
    "revision": "2ce4b158c50933e3552df0600f993aa9"
  },
  {
    "url": "assets/js/27.3188b25d.js",
    "revision": "28b8f84d52b9b206901645f1e4347c47"
  },
  {
    "url": "assets/js/28.bcaf36e5.js",
    "revision": "efd1d51be7b9899a8fc617b96584c217"
  },
  {
    "url": "assets/js/29.10d67370.js",
    "revision": "d9544103bc5ce82d661b3989184a9c13"
  },
  {
    "url": "assets/js/3.328ec31f.js",
    "revision": "5ce768df8f392b96dafb5c049f2f6b3c"
  },
  {
    "url": "assets/js/30.374274a6.js",
    "revision": "8b9a2602a185896a19d84735d99bb2a1"
  },
  {
    "url": "assets/js/31.49f34b5c.js",
    "revision": "99a5567e095dcb304cc83f73a385d2e7"
  },
  {
    "url": "assets/js/32.2164dd97.js",
    "revision": "2ecb1736afa1257bf953bfd9f08a508e"
  },
  {
    "url": "assets/js/33.3b7eb231.js",
    "revision": "81471fbabde86f01b3e15782663f3b0c"
  },
  {
    "url": "assets/js/34.c3db0530.js",
    "revision": "44a43dc9604c494d57179194b7219195"
  },
  {
    "url": "assets/js/35.ac94df76.js",
    "revision": "c4429d9ee65f25a6a7f3a075fc465843"
  },
  {
    "url": "assets/js/36.ef88b0b4.js",
    "revision": "c84f1f3de6b2ea33510a1deb5a2006db"
  },
  {
    "url": "assets/js/37.ba7f9e8e.js",
    "revision": "9705a4d750b5d3c53a641d552cabc9cd"
  },
  {
    "url": "assets/js/38.34190bde.js",
    "revision": "a4204d4bb4c2f76e20ca0d876387e3b4"
  },
  {
    "url": "assets/js/39.3cd45fec.js",
    "revision": "75cd0ca48d786f063aa426bec646cb14"
  },
  {
    "url": "assets/js/4.a6c086d2.js",
    "revision": "08cefa296a17a2cc86ecf11f72fbd31a"
  },
  {
    "url": "assets/js/40.3949fea9.js",
    "revision": "0daadf5b612f7a5dadd2be6ac4949f16"
  },
  {
    "url": "assets/js/41.9b14ea80.js",
    "revision": "5a6bd51549427107569a27d108b17e0f"
  },
  {
    "url": "assets/js/42.5f588409.js",
    "revision": "074a9797eb762fdc3c47da6e84aaef20"
  },
  {
    "url": "assets/js/43.9038fd8f.js",
    "revision": "8c98240c7ee3383849ad3d67c2de33ee"
  },
  {
    "url": "assets/js/44.6b43bf33.js",
    "revision": "4312a6e5c9d215f5f05059219c747e41"
  },
  {
    "url": "assets/js/45.861ae89d.js",
    "revision": "209c87fbd170da703297aadb6236f3d5"
  },
  {
    "url": "assets/js/46.312a903b.js",
    "revision": "f9f1b3f835615c1015552aaa29184ce9"
  },
  {
    "url": "assets/js/47.ff2d6471.js",
    "revision": "abfb306867e383075d921cf907857c04"
  },
  {
    "url": "assets/js/48.daf8a501.js",
    "revision": "e44413206caf71c277cb093a55bcd08d"
  },
  {
    "url": "assets/js/49.d8356975.js",
    "revision": "80fe8dda267d0230d039f172953aa633"
  },
  {
    "url": "assets/js/5.5ff9091e.js",
    "revision": "c765293665573c12841e2aeab226b72b"
  },
  {
    "url": "assets/js/50.bc334e2d.js",
    "revision": "93b9d61c3a4b16d555a9bfc32efa6ba4"
  },
  {
    "url": "assets/js/51.d71be75a.js",
    "revision": "24f54e36624b8d4a5b6b55b0c4388d11"
  },
  {
    "url": "assets/js/52.a98cc1a6.js",
    "revision": "0b3852794f2edf3242dc719ed7799171"
  },
  {
    "url": "assets/js/53.a957c008.js",
    "revision": "8a20117efbb1f1e7e2d1b756643c1b74"
  },
  {
    "url": "assets/js/54.89fc9a8a.js",
    "revision": "12b3bdb199aeade7ee9ad4b75f0f52d2"
  },
  {
    "url": "assets/js/55.b165185a.js",
    "revision": "06ffcc4089d1348e4748fa8f27e553a4"
  },
  {
    "url": "assets/js/56.99fc0440.js",
    "revision": "0903b6d818ec51b7b9878f107c7ca051"
  },
  {
    "url": "assets/js/57.8164e5ae.js",
    "revision": "d54bb9eb94ec4acae1c59d6b244fddd6"
  },
  {
    "url": "assets/js/58.c850462a.js",
    "revision": "54c13e5ec9668c875c7c6aee48d96663"
  },
  {
    "url": "assets/js/59.fc39b95e.js",
    "revision": "1c3530a1706473905adaa46b651f002c"
  },
  {
    "url": "assets/js/6.d2371a2a.js",
    "revision": "78ff06ab473292cbfe544fa1c3fc320c"
  },
  {
    "url": "assets/js/60.9bd829e6.js",
    "revision": "81740af8ba731d8197e0a05b658d0da3"
  },
  {
    "url": "assets/js/61.8d5b9568.js",
    "revision": "8151acbaf76860a30505fb7c0ead284c"
  },
  {
    "url": "assets/js/62.2c11a0f9.js",
    "revision": "d197e67dca333225e84705aebfd51306"
  },
  {
    "url": "assets/js/63.ae58802a.js",
    "revision": "1b230b4be363f81cb91e69ce95a68b04"
  },
  {
    "url": "assets/js/64.95578515.js",
    "revision": "11e1d2f91b7b376419620a1bd45fd888"
  },
  {
    "url": "assets/js/65.229fa9af.js",
    "revision": "2fad625e8a82a46f2e11867272c463d8"
  },
  {
    "url": "assets/js/66.8f8de57d.js",
    "revision": "252e8c397fdb215a4ab750075301df9c"
  },
  {
    "url": "assets/js/67.6b8b4b09.js",
    "revision": "c962c57be32dd7e9acc99512c00c1d3c"
  },
  {
    "url": "assets/js/68.1b98dfac.js",
    "revision": "e4389c5f4ef6b6071afa3a3af3ba0f19"
  },
  {
    "url": "assets/js/69.353575ff.js",
    "revision": "6786203397770eaa19a6e2dd894872b5"
  },
  {
    "url": "assets/js/7.c5532f97.js",
    "revision": "8452001520254afe39c5fc44101002f7"
  },
  {
    "url": "assets/js/70.15c11da1.js",
    "revision": "34a24518f7abf64962057540f19145e7"
  },
  {
    "url": "assets/js/71.9d3c6357.js",
    "revision": "138545a45ffa76cd7c3b6539e219a582"
  },
  {
    "url": "assets/js/72.8a61f44e.js",
    "revision": "365a6e8fe073fe1f9b11001ffec67333"
  },
  {
    "url": "assets/js/73.46421026.js",
    "revision": "7bb5f9287828454b3463540d54e92b29"
  },
  {
    "url": "assets/js/74.67e3c6ff.js",
    "revision": "3e1b26b63ff46a8db8e98ac82cbdb77c"
  },
  {
    "url": "assets/js/75.45511b1d.js",
    "revision": "f7cc5f3e9612875b20bde5f3667128fc"
  },
  {
    "url": "assets/js/76.96e11485.js",
    "revision": "37a815f675ed1521ecb4b775b6dc98a5"
  },
  {
    "url": "assets/js/77.a14111b9.js",
    "revision": "e6ce55d2f42c0e9fc3b523c2011cf818"
  },
  {
    "url": "assets/js/78.88fce1b1.js",
    "revision": "d97e792aeaf15411d34ba42199af46ed"
  },
  {
    "url": "assets/js/79.288839b4.js",
    "revision": "16a9de51884ee23b27fb8e162cd60312"
  },
  {
    "url": "assets/js/8.0c47c03b.js",
    "revision": "ad55441f90e5ee1ee1547da6827c1628"
  },
  {
    "url": "assets/js/80.a2e88050.js",
    "revision": "8d0d76e469b1d6d0b5f6ac3121dca30d"
  },
  {
    "url": "assets/js/81.14c37266.js",
    "revision": "95c24ece7c16f64f90d540fb108474f7"
  },
  {
    "url": "assets/js/82.31430b4d.js",
    "revision": "c8696e11274ac0a384f4465648fed57a"
  },
  {
    "url": "assets/js/83.75556be6.js",
    "revision": "09d0e6b939beff473cb672521588e93a"
  },
  {
    "url": "assets/js/84.855f128d.js",
    "revision": "caeab55047a9cd60130fcfa70daace6b"
  },
  {
    "url": "assets/js/85.2000b9bc.js",
    "revision": "4e9f9c7609d61eb6f3718cbcf55c88b4"
  },
  {
    "url": "assets/js/86.28032ec1.js",
    "revision": "20274996c41cdbd128e4ea98c511ec9e"
  },
  {
    "url": "assets/js/87.0fefd0e2.js",
    "revision": "20b45c464bce2ce52470e725958fb66e"
  },
  {
    "url": "assets/js/88.25cd7e7c.js",
    "revision": "355c5e58a759e85ed55bab5791b24b1d"
  },
  {
    "url": "assets/js/89.08800f09.js",
    "revision": "cfde739740fca3470d49d9ddc1d84018"
  },
  {
    "url": "assets/js/9.3cb1b822.js",
    "revision": "da1b48d11b90eb6476b2f6558ef4a9c5"
  },
  {
    "url": "assets/js/90.0246d1c2.js",
    "revision": "c9c7d78bc1d31db6acc74b734be44911"
  },
  {
    "url": "assets/js/91.fc3a992a.js",
    "revision": "d94364a0f023b8ac8c0f432c531141d8"
  },
  {
    "url": "assets/js/92.bb84ccb4.js",
    "revision": "0280cc341495dcf5650e02ca27b30f46"
  },
  {
    "url": "assets/js/93.72a08391.js",
    "revision": "7548ee6308314e0ae9b0e0549fb2e646"
  },
  {
    "url": "assets/js/94.cd65e8e0.js",
    "revision": "88307dbee4bebea25e24ae3f1e87b95c"
  },
  {
    "url": "assets/js/95.61874200.js",
    "revision": "6eddb4fdee75505727f742759bb556b4"
  },
  {
    "url": "assets/js/96.e2bedd31.js",
    "revision": "d1712dfa3b43cc3528ee4df86c026d54"
  },
  {
    "url": "assets/js/97.21786778.js",
    "revision": "057e46495c7e49fd3f68e5a528b4082b"
  },
  {
    "url": "assets/js/98.c0f2cd15.js",
    "revision": "257195e6ab65006c3f637a6f263bd7a6"
  },
  {
    "url": "assets/js/99.50414e68.js",
    "revision": "4ac0c41d340c1d585a0748e4bec8bf65"
  },
  {
    "url": "assets/js/app.6a70e401.js",
    "revision": "a3ff139612336906140e928346de6f3c"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "725cbe52a1a93e0bc07d3cad94ccc0a1"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "9d09a2b9f9cd84b8b9a41e5010084b3a"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "314230ffeb73b7b427e5b99ec5dc7aa1"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "dcec89ca407d1c52d77be88057ee138c"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "0af3c30471b210c7b2cc3998fb498841"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "2dc8bb87b78f4f6081bfacabd778041e"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "dc114402b99c43abd33a897d840809d8"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "5964bf5f8e17eda7ab1aae72f2621c26"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "0c9ce808170e6b6385e10c3eba0b1e88"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "aaf9bf1ea0c298902a15c0ed85d116ac"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "d10b66936754d09c383b8f5d0d6d43e0"
  },
  {
    "url": "configuration/index.html",
    "revision": "46f529fb1d5a73a26e579545716671ee"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "648a02e032bc96696e62126b5b2b698c"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "f63ea1341eaff930a626d59a8c5ba7d9"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "ba1a24af9e825740d324da13311f2299"
  },
  {
    "url": "contributing.html",
    "revision": "2ae5261a47e96489de25c453726750b7"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "9b9afa3a658977b409e28d06a022bcbd"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "80d665ca302a5625afd05e6fad9429c4"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "4ea50be9ccff903de5d236a8c7d26eb8"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "3b9cf45deb0c38d3b23682d9d0060860"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "d46b84740806f595b2c19979db355c0b"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "2f90b31d31b5c47bafd938a25f65a3b2"
  },
  {
    "url": "core-fields/background.html",
    "revision": "b5d7f0843fd8ecc7ee2dc2ad1969d4a4"
  },
  {
    "url": "core-fields/border.html",
    "revision": "a8e3e76850cc56aca4108ad2f3924ecc"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "d4fc699b8302a8f641d5b23d14d03bae"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "383c02a66c027c1920a49410a8dc84aa"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "296d2222d4f346739f8d39f9f2172397"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "04c50099a64f8ca054f35f3d33193925"
  },
  {
    "url": "core-fields/color.html",
    "revision": "5fc33910df21acc3ab53d9933a164882"
  },
  {
    "url": "core-fields/date.html",
    "revision": "6939fbc775dfa16c2807cb6eb35b063b"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "79f4191710f7df72e7eae2c0034438f6"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "da474b37cf09f1a5aabbc9d3f58489bb"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "cc4e2380a54a62d730e2b379adfe0493"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "b436d2ec8ebbc991f34c09afb361f202"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "21405b8bf20a15b7c98187dca13131c4"
  },
  {
    "url": "core-fields/index.html",
    "revision": "c3f993737cce961b48bb0549ac4f0e0e"
  },
  {
    "url": "core-fields/info.html",
    "revision": "2ed32f786aefb96865d1698c6b0596db"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "6822894e6d4346ff3aa406a9f6560375"
  },
  {
    "url": "core-fields/media.html",
    "revision": "4084c7e9a37485851a73a7f7998c94f8"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "0f39cd37c032c93deaa94f18a0267c5e"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "c505a6f334310e312d179edf8e69fa17"
  },
  {
    "url": "core-fields/password.html",
    "revision": "609745b89d386dbfcb1aae6a4fe6f54c"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "964395053540f4dbb05ffe8f463b2e88"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "d90fa5a7cf495e46659d08ccd1a9a154"
  },
  {
    "url": "core-fields/section.html",
    "revision": "87a36349a19c58e6223dad0c1f6a0606"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "8cdd0364a8ddf46734d5683b23128378"
  },
  {
    "url": "core-fields/select.html",
    "revision": "1bb9bfcdd5afae74eccc5ab87322c28b"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "4fa56ec4aa9138e3fab8293bce6555e3"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "c79324a511754294860dc549bf239d70"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "9a729b699c6f0cffb114e453919c4177"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "b80247145eecad6260ab9f7a8d6febb1"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "462be786115e03d44c8a3bcf5ac328e5"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "a2eb2edc1e844617189c2e9eee6f27e7"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "d296c78123d40a8516c3fac1bd93f167"
  },
  {
    "url": "core-fields/text.html",
    "revision": "fa611f93b219086c6adef3b14c6dd10f"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "3d5993425eeb3b59f2865c0899787685"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "1ee9c1c16041dc19dc9e64a00a6c28f5"
  },
  {
    "url": "core/index.html",
    "revision": "3eebcf7a749d7db1584d49706dfe1d16"
  },
  {
    "url": "faq/index.html",
    "revision": "34d2f8e4bb7063f761c66f3f398bc230"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "55fd9f3c61dad28800405331b8b84c81"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "33bc4b3e4402d7b18b6c10e679a65a06"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "ea3d01fd07e2c4056cedaede3fa4d95f"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "615e91bdd914530dffc95566b749af00"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "fe824eace218e0b8e6126fe51b418ba6"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "1de2f6db42dadce8e1346e541045333a"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "a37b7f84e1e49a8341e8a462eab6d5b4"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "0e4ca43cb8cef6d4ef24517e26c61bfd"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "5c463ae13c486e49c203a48de0148006"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "f3f88ffd272c3b92534c189188f62503"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "e3d15cabb30a91fab5c49b1783a68de0"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "c742362de363bcefe5646bcfd7c6c2b5"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "39292c9124086bec82d9b08669dad08e"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "1a3c19645c0793315b3b68437536b33a"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "0af1898b044bf6f57cac9aa47d07815c"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "fb0c8436fa612066806833b371c45dce"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "7a4f6da1eac52247b556c97297ebc72f"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "63382dcb527e35faadd6882482df1112"
  },
  {
    "url": "guides/index.html",
    "revision": "005cde15c8d3eb683f4c21a409e25fc6"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "9c4e6c5262be09e9d0a8d071b18adf1f"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "f82dddf3f9a23dd262b20164f925d1d2"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "1ba1baa1af585d156cb9125c2e98ee88"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "9b26f978e37822fa4ef6040f9e58c024"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "00acbc52b94ee479ac29aa628b0a01d3"
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
    "revision": "82e8e5332ef90991b6c93bfb2c2cff62"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "9ec1188f95fe370f297da5d37190e073"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "383d29f31a765bccc3b28dc7f3835f5b"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "6314b3a0dadc6ca2e7e5885813e9f136"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "c13eb9e5a16f2ad1ddc318b576cfbb97"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "f111981de2248ac790d67e86c3178873"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "1bf26fe70f1da5fc6c446be4a5c096dd"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "3aa56c294dc0fa58b8547aea24bdf02b"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "1310083cbd6aad2bfcdc7aa6751f1739"
  },
  {
    "url": "premium/index.html",
    "revision": "1184e664ff3e5924a9c9e72cf4ef8fce"
  },
  {
    "url": "premium/js-button.html",
    "revision": "11f69ca7fe28336ea2d3836c6f2da585"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "d5bffd88f2c1d48241e35cfb128449fe"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "1f9203f4758bc3e8c876fba4e7dbff6f"
  },
  {
    "url": "premium/repeater.html",
    "revision": "917ec300645f2796a710fd3f9b51bfed"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "7ee2681220d8aac09f4d8964a8d38439"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "c51d6acdf53423525e5eb620fea5f683"
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
