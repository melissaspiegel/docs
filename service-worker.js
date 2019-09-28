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
    "revision": "0678127336bf9b52c9489b8c8a928ba0"
  },
  {
    "url": "assets/css/0.styles.eed1de34.css",
    "revision": "689bcdfd02aed72afbaebd330f4a1ab0"
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
    "url": "assets/js/10.dddf36e7.js",
    "revision": "1b933072a6c73abd779657146b365c8b"
  },
  {
    "url": "assets/js/100.65fb2907.js",
    "revision": "0e2eeb22b93404f1128dc42fd3e96c99"
  },
  {
    "url": "assets/js/101.cd0d031d.js",
    "revision": "64cd91de9433c0e00dfc12c3c0a20dbc"
  },
  {
    "url": "assets/js/102.4cd5b8bf.js",
    "revision": "d9753602c661926aee94108b8bebc7c1"
  },
  {
    "url": "assets/js/103.55e94d42.js",
    "revision": "443b9958bc524a1b988b575ab32bc30e"
  },
  {
    "url": "assets/js/104.e1f3efca.js",
    "revision": "ad032d827f6f0f8c4a910507b0a01648"
  },
  {
    "url": "assets/js/105.43d3c0d5.js",
    "revision": "45c7475b49e3e2b929b71d6462cf3c5e"
  },
  {
    "url": "assets/js/106.c650e80c.js",
    "revision": "ade71148437787f0f84a4328b1988474"
  },
  {
    "url": "assets/js/107.1486e9d1.js",
    "revision": "f66699429fd4cc7af5ba78a0f992f1cb"
  },
  {
    "url": "assets/js/108.09b8b8c4.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.77a4f624.js",
    "revision": "12c1e3f6c0c4eaf230ca694ed03e39e1"
  },
  {
    "url": "assets/js/12.cc533a21.js",
    "revision": "7d68f5408134a6c5215f60e82fa0c891"
  },
  {
    "url": "assets/js/13.21d32436.js",
    "revision": "851a848e90c376745ce37517527beedf"
  },
  {
    "url": "assets/js/14.db8625a4.js",
    "revision": "dd8d01f824005f997549ca4c888fe1c9"
  },
  {
    "url": "assets/js/15.e38b30ee.js",
    "revision": "30cb85de4d9df577c778993ef4a45dfd"
  },
  {
    "url": "assets/js/16.deb808ab.js",
    "revision": "be92f8df889e61cf3cfe3e04b61304d6"
  },
  {
    "url": "assets/js/17.68f5bace.js",
    "revision": "214da9eb4a99e8c338dc5673e1c986e6"
  },
  {
    "url": "assets/js/18.5982f65d.js",
    "revision": "f8c68421c4ac504988db0f90d7c7b708"
  },
  {
    "url": "assets/js/19.feea9b7b.js",
    "revision": "134f7da9326baf5be11d4d8b044c1de3"
  },
  {
    "url": "assets/js/2.58297af4.js",
    "revision": "ba8dfaf32755d1617787703c8d26ddd3"
  },
  {
    "url": "assets/js/20.8e1a080f.js",
    "revision": "d4f99ff56ea7a99e1caac27b1cf71337"
  },
  {
    "url": "assets/js/21.d80f9b20.js",
    "revision": "03c8e7091bb9d4c4ff45ca3c651c568e"
  },
  {
    "url": "assets/js/22.8f3746bf.js",
    "revision": "fe4c7cd7b23611f4a67bdd8ddde0b8ab"
  },
  {
    "url": "assets/js/23.da209aec.js",
    "revision": "2ed476f8f7f0e28a0774039c23703b39"
  },
  {
    "url": "assets/js/24.320e8d09.js",
    "revision": "919612fe35e885a5fa4a7a3e2642f14b"
  },
  {
    "url": "assets/js/25.1da28e1e.js",
    "revision": "a35cdea4a85c6509b964283db50bf856"
  },
  {
    "url": "assets/js/26.6fa4ea1e.js",
    "revision": "d32af2fae2c214c15a769df855c5df8e"
  },
  {
    "url": "assets/js/27.d0c29ab2.js",
    "revision": "6247398f60d4048b8e96b0d74c2b5cfd"
  },
  {
    "url": "assets/js/28.45a679c7.js",
    "revision": "bf789ba5ec829b20dd76466fe86420fd"
  },
  {
    "url": "assets/js/29.5f9c2dbd.js",
    "revision": "6b8a82b1603a1446d32d728730d01284"
  },
  {
    "url": "assets/js/3.2597882a.js",
    "revision": "59d4d58fee05c32d0d0738344d7f1349"
  },
  {
    "url": "assets/js/30.0de84a6c.js",
    "revision": "ab70a1547d59d1a8627d34a945bce105"
  },
  {
    "url": "assets/js/31.87342d1b.js",
    "revision": "9d15a49ce5269df732f439cd3b333847"
  },
  {
    "url": "assets/js/32.1a6dcf26.js",
    "revision": "c749d3188b85a99c9402c0373e711944"
  },
  {
    "url": "assets/js/33.842c666b.js",
    "revision": "4f2fd500cc2906f2b4a77f1fc6ccd376"
  },
  {
    "url": "assets/js/34.a3a8c2fd.js",
    "revision": "8441d697eb68df40b80db2e513c7defc"
  },
  {
    "url": "assets/js/35.2c5d8d53.js",
    "revision": "dc1074c042a972bfed9d792d16a6e829"
  },
  {
    "url": "assets/js/36.9bfe072b.js",
    "revision": "26dd9b765f0466ca4f34abe390e233b3"
  },
  {
    "url": "assets/js/37.322582e4.js",
    "revision": "4760b896f0fa6614a3c1055d3348d4ff"
  },
  {
    "url": "assets/js/38.7796c7e3.js",
    "revision": "f528a053ab057bbb96b80e1d16a6a0fa"
  },
  {
    "url": "assets/js/39.28447270.js",
    "revision": "150ba0f0c7e05d4a431740699d9d5ddb"
  },
  {
    "url": "assets/js/4.d4da6fc3.js",
    "revision": "e0f06d2000fa652d8c3543fc93dac6ab"
  },
  {
    "url": "assets/js/40.81f5ecd5.js",
    "revision": "59f77af02e4d30f25ae8dd8a7ca0090c"
  },
  {
    "url": "assets/js/41.65490acc.js",
    "revision": "1aac58972458cf0012984399437608d9"
  },
  {
    "url": "assets/js/42.8c339159.js",
    "revision": "ebd7fe93cb26c54fd5e344599e2ac1bd"
  },
  {
    "url": "assets/js/43.89690b62.js",
    "revision": "2aa51b3710fd28a77cc593585c2b43fa"
  },
  {
    "url": "assets/js/44.3836ce24.js",
    "revision": "5607c300c7755c7724011832eaba5549"
  },
  {
    "url": "assets/js/45.f253975a.js",
    "revision": "a8e5a9b45ecedc692fc6eba7fc6939ad"
  },
  {
    "url": "assets/js/46.024f18b9.js",
    "revision": "e51ef5da49d5bbdb30772cbe110ab8e6"
  },
  {
    "url": "assets/js/47.ef3fb879.js",
    "revision": "9c71705beb287ba487a655e377c9ec59"
  },
  {
    "url": "assets/js/48.81358269.js",
    "revision": "660e6e453cd460789ca0fdcf9a684cc4"
  },
  {
    "url": "assets/js/49.1e41ea9a.js",
    "revision": "f4d29e5d41db65035647a54a5651630a"
  },
  {
    "url": "assets/js/5.5b1b84d7.js",
    "revision": "8b7b867e66518de54c4dab0ba8e6a095"
  },
  {
    "url": "assets/js/50.cd6bcb0b.js",
    "revision": "8cef65344fc481507f55cf1ea79e9994"
  },
  {
    "url": "assets/js/51.2e7837b8.js",
    "revision": "be112ffedb3838db637dcb2a4cf29a1e"
  },
  {
    "url": "assets/js/52.ea9cb7d3.js",
    "revision": "5162ad4a3b5f2be52c6778a1a98814d6"
  },
  {
    "url": "assets/js/53.d8054111.js",
    "revision": "635a7a52396c8db953a3442a236dc478"
  },
  {
    "url": "assets/js/54.b7e3ef22.js",
    "revision": "ef194278c152628b8e2361767dab8978"
  },
  {
    "url": "assets/js/55.b0998c3d.js",
    "revision": "b5a1ab67fd4468a8327c7cfaf10d0e4e"
  },
  {
    "url": "assets/js/56.00e3cfc1.js",
    "revision": "7585162574dca9c66358d84d46639cad"
  },
  {
    "url": "assets/js/57.a87abc06.js",
    "revision": "c51dc2849fa055b854bb3b08c5d10225"
  },
  {
    "url": "assets/js/58.33840578.js",
    "revision": "9411860ce741c8ac42821ff58bca71ea"
  },
  {
    "url": "assets/js/59.23e130d9.js",
    "revision": "5caec30be20248a32f7a9b20109cdc7b"
  },
  {
    "url": "assets/js/6.96d1cd3e.js",
    "revision": "e5a8e7913596c781d37425593182b06b"
  },
  {
    "url": "assets/js/60.9765e669.js",
    "revision": "465adbfa605b02d1643df71f009614bd"
  },
  {
    "url": "assets/js/61.fb2dba5a.js",
    "revision": "faeaa72454d4cfc245160cdb92c249d3"
  },
  {
    "url": "assets/js/62.8a076c11.js",
    "revision": "dbd283da2df566ef49ee003f324e4a1e"
  },
  {
    "url": "assets/js/63.bd08a4ab.js",
    "revision": "a8ac52fa9ea97e96e4a130cccbeedfaa"
  },
  {
    "url": "assets/js/64.34994ccc.js",
    "revision": "b37388792b9f20fd05ad32590d79db5a"
  },
  {
    "url": "assets/js/65.758adb1b.js",
    "revision": "33bdc2521957aa7e847687dd0dd7ec2a"
  },
  {
    "url": "assets/js/66.6c4dac00.js",
    "revision": "c2939f26a6c5da279cfb98c2a2329c44"
  },
  {
    "url": "assets/js/67.4b163f8e.js",
    "revision": "d8b02abeae598b3131fd8401075b24ae"
  },
  {
    "url": "assets/js/68.8b713670.js",
    "revision": "9a703f70e96b155cbc7aab4cbcaa5a44"
  },
  {
    "url": "assets/js/69.c35724ed.js",
    "revision": "5381cc30c79500b5178043e037b3615a"
  },
  {
    "url": "assets/js/7.89601d8a.js",
    "revision": "c7b14f45b8991451c8542f8f0a9a112f"
  },
  {
    "url": "assets/js/70.71b580cf.js",
    "revision": "615c8a7ec550a59536a3ef18bcc13324"
  },
  {
    "url": "assets/js/71.66a9d32c.js",
    "revision": "2643e66ef0306af613e568c46c773938"
  },
  {
    "url": "assets/js/72.a0655e07.js",
    "revision": "d3b5bfbd5c0b4340ee26e5ddf447dfbb"
  },
  {
    "url": "assets/js/73.dd7591f3.js",
    "revision": "5fac298b5fae46b5c3029675285596fb"
  },
  {
    "url": "assets/js/74.b9ef4067.js",
    "revision": "718726e6784aba0f8fed31eea80d91c4"
  },
  {
    "url": "assets/js/75.844ffee2.js",
    "revision": "fed48994b1d94d8c0a9ad13eca5d883b"
  },
  {
    "url": "assets/js/76.f935054a.js",
    "revision": "ea646dc7a3ce961e1d0f25f404499956"
  },
  {
    "url": "assets/js/77.359ca01e.js",
    "revision": "cc0703c1793ce308e0002faec4ad3289"
  },
  {
    "url": "assets/js/78.3cc662b4.js",
    "revision": "4fd29b4afedd20a90f18458651e92e24"
  },
  {
    "url": "assets/js/79.6c925572.js",
    "revision": "17b0e0a4c36042833a00a3b75ecfa116"
  },
  {
    "url": "assets/js/8.8235aa7e.js",
    "revision": "d103ae85642f4805b9afdd6eeacae872"
  },
  {
    "url": "assets/js/80.f6993d4d.js",
    "revision": "92f29f3f018f6dea86e59072c1a81db5"
  },
  {
    "url": "assets/js/81.2d79ff51.js",
    "revision": "fbad0acb6dafa634d753d7ed74b9dd93"
  },
  {
    "url": "assets/js/82.b7e71f08.js",
    "revision": "f643400719eadab10a9a0dbe013de026"
  },
  {
    "url": "assets/js/83.f010b404.js",
    "revision": "2d5741e84989ba77b7158a7329c60dce"
  },
  {
    "url": "assets/js/84.671b0560.js",
    "revision": "ae02fdc6442140e4040b849af7309531"
  },
  {
    "url": "assets/js/85.bceb2aec.js",
    "revision": "02dd01af0398f50cad3d69dcd43935c2"
  },
  {
    "url": "assets/js/86.566400c3.js",
    "revision": "b27cc9dc5c1a2eab247169aea6c15b26"
  },
  {
    "url": "assets/js/87.5369e732.js",
    "revision": "6f1098eea50af13548ae0ecdf953a659"
  },
  {
    "url": "assets/js/88.8fb0c224.js",
    "revision": "6f55487be907b9746086e02a9ddd8afa"
  },
  {
    "url": "assets/js/89.c4d8ac4e.js",
    "revision": "ad73349c7053c388d0e6cd72892851e4"
  },
  {
    "url": "assets/js/9.3483c3e7.js",
    "revision": "301b5c3d9e1731abeb1d641a9340e91e"
  },
  {
    "url": "assets/js/90.fec32470.js",
    "revision": "255ad1582bf45a249f32e2d3ae5bd285"
  },
  {
    "url": "assets/js/91.64b4cb18.js",
    "revision": "a993a922c6d8ecbf78fff131d4bb684f"
  },
  {
    "url": "assets/js/92.4a5d7cb7.js",
    "revision": "971bd179aefaecf8fb9aac31077d9907"
  },
  {
    "url": "assets/js/93.da43d25b.js",
    "revision": "d7905dcd0b50e65f771f841404fb61b2"
  },
  {
    "url": "assets/js/94.cc51504d.js",
    "revision": "3a5ee4a99452a6d4982d96e418de30f3"
  },
  {
    "url": "assets/js/95.be065dda.js",
    "revision": "85e66fa250fd7889c944eb6f30dddb8b"
  },
  {
    "url": "assets/js/96.00d9d52e.js",
    "revision": "66ee9933f2e49af0c1f1894fecd18212"
  },
  {
    "url": "assets/js/97.d2a5c0e8.js",
    "revision": "bdbe849be9607527b61a2a6704956343"
  },
  {
    "url": "assets/js/98.bdd64b97.js",
    "revision": "722f50937975d91625f58a846e299c14"
  },
  {
    "url": "assets/js/99.fb9b9dbb.js",
    "revision": "8310a3b415aef35021be94cb0092cac3"
  },
  {
    "url": "assets/js/app.d9ff0003.js",
    "revision": "f858e5ef78a324db90bfc0099860a303"
  },
  {
    "url": "configuration/api.html",
    "revision": "325dff1ecde8284283c55fc8a66cc623"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "affad5e2008cd2719ed5f2e251e0183f"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "e4cb27c12d50957cbeff2f0d85a696b6"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "b9ee126f590ac1f9f8cc8fe682d5cc15"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "62e4b98541306cbb2efad4cf48938a4b"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "27e505cc95be4c823bee7e00d275038f"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "5d62d7d6b3fe4a5a701e180e90cebb6a"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "e572b67ce9a1b46bcfabec5ccbbc224e"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "595d6660a878edf36042d85e40517e27"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "7c80c324ea5c4b71dc0614448089283b"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "b626aba3dace1d3d6fd485a94991d5cd"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "36066ec8021e10f653455730866cea47"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "277ed14939beb7a5cc652af75004d316"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "08e6cd59b4263b2e014fc0b8449938b3"
  },
  {
    "url": "configuration/index.html",
    "revision": "9cb25a6fab94f8c1300ed216b58b378b"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "fa2b20a4589c63a16c831640db4fe302"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "b2f1c116733826e505941a0eb2dce359"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "2d2071a6766dd4ba49c18df788814ce2"
  },
  {
    "url": "contributing.html",
    "revision": "1e8287f308e90146582d7d6a37479a66"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "41dc9a949c21bb231e095d189f521f24"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "0cc7a97dd8271f6378fa79cca3ad0cf9"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "d5d001b526383ad2293f3125dd6ef311"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "47ceb76c185199d2fa15939f283ffef6"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "c6487f6cc52b145d62b7105aa2b177ac"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "c19ec06302ece5d227700472fa7da949"
  },
  {
    "url": "core-fields/background.html",
    "revision": "133f91f13299d91fdd78631777c35160"
  },
  {
    "url": "core-fields/border.html",
    "revision": "252f052cfee852889c4bd248bdddbd54"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "44fce547771128f3aaa85488e4f5f51a"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "66ab41582e874af7300f3771f8f2956f"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "aff0d904a8157d45ddb6b1c59f0ce602"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "0c51fcca153ed60281aade4b9cf5f5bf"
  },
  {
    "url": "core-fields/color.html",
    "revision": "13fd72591582c3d42c091895aa1a9e7a"
  },
  {
    "url": "core-fields/date.html",
    "revision": "1d3d88e8d77da8f07ccfc4cd211c755c"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "12db1106c27f9812a62c8476c30db4de"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "0753e3ed166e37d8462c5a846830c79f"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "914ee3e4207ebc199640adc8015252c7"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "eb8ed3bad4382fc0a4314ada6d5dbb9f"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "67cbc8bf993e40367c58657ce16d47c3"
  },
  {
    "url": "core-fields/index.html",
    "revision": "95a27a5764cee49ee69ea5bb7285ce37"
  },
  {
    "url": "core-fields/info.html",
    "revision": "7086866609ea47cdc1b69bd503a907be"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "5c346080127d5144fae04bdab07f531c"
  },
  {
    "url": "core-fields/media.html",
    "revision": "4b64c2d72d64d0071c700b30adab4197"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "a89e8a10ead9d13a1ba868d570e93dc3"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "0918f0561fc86988587f77abdb001fcd"
  },
  {
    "url": "core-fields/password.html",
    "revision": "0edc92a3082417e4540b67650d588cdf"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "f7af967099c328227dc808813740c2ec"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "e60c96217e066ee488e6d4098d0f0702"
  },
  {
    "url": "core-fields/section.html",
    "revision": "21ecb43a859bac8f88d2587a7a43dbec"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "47a3a0089c3c93faa8679e0eb2169830"
  },
  {
    "url": "core-fields/select.html",
    "revision": "ac1fbf11b89a01d3098ef60a36cdab32"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "196b8f29aca66768975567b5a1ddbd14"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "5b9e9973477124bb10a5eff879113176"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "dd8e5626ada8113c08c553f3cfd7d51d"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "68c47a1c2c2b2eff8081a73ef39188ac"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "b6448b0eac2f1b44dfc561cff1b3068e"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "57917c68b8c5eb1f6bc3965a26cebcb3"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "f3efcf1927708a4ad4b4efe6be757e25"
  },
  {
    "url": "core-fields/text.html",
    "revision": "8ce8889e66d5cf4990ccab31abcec99c"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "cd2b64a5eda6ad9b1f8db11fc936ac36"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "74aa81b3efefdf68142fe0824184eb7e"
  },
  {
    "url": "core/index.html",
    "revision": "a9f6c9414c9417550e28478fddd75360"
  },
  {
    "url": "faq/index.html",
    "revision": "64ad79c9911faf8c16496247fff2025d"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "08797340d6e05f594b8d0b9667d221ce"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "a883f15835315ac8786e64420591141a"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "0060e540b3183c47383646ffef125407"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "b62a077bdb7f16199476b38b1b7bd14e"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "7cb502be9138158eeafe532621cf9c4e"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "7bd3511e3252356792c330813dbec09e"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "65fe3567b606e16f1d2fbb4d1df34e1a"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "e59a172d2f41539c194fd371ce7143df"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "332d4849a4f1d93e5d54ec7cb7c59a7d"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "5168bfb7914edaa8c87bdcfd8a7ecad5"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "484936c2591aa35c4b54b5b7c1cc1f6b"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "62ddd02605551ab06f2ebe684467f535"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "2a9d1dc9252a863263c11fcb13467122"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "b23431df584d77baca7df898f1223f1d"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "d1d5fb6aeb6ed82252b642a9304503fb"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "ac7f10e616c9ea6e2dcdbb03b625433b"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "1f0ef7e81dde5a953b25d735b17b723d"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "6d9c8073a9f3fda69fb179197322b59c"
  },
  {
    "url": "guides/index.html",
    "revision": "9bd3ee01f8cc40498edf548535cd43ff"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "abd329c09fe6de9ce785d4fc2877bf3e"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "fcf5330858e4396ac4ed15a15ca993a4"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "35655e7a17202a7275c74d156498e514"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "b5a0932dc9afdbb8b27858535082dc3a"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "9968a638f4380cc50befcf2fb25b29b7"
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
    "revision": "db3236acc9dd53f59255bacef95bb944"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "09aaca76739d4415b636ab942595c669"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "caeac3022bb2edf1d6aec76b315c0883"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "352573582df14ce717f9f93d7b7a7233"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "24601379cc474d922b6a699627d5a46a"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "a8d4f81d9c0c0bf0a16c0e412222e511"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "4aff7b750602577ea501f093e12f087f"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "1542fc2f47066676791f55287086bf4b"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "6cd33437683e018826f85f0732e55601"
  },
  {
    "url": "premium/index.html",
    "revision": "50800d01e66c70321b35bc7e76d2655a"
  },
  {
    "url": "premium/js-button.html",
    "revision": "787cee0644d72696ba5634b978a6686a"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "ebee68fefbf03f25d1fccfb630ac3d6c"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "319fa1eb206a2e5417fd37f1971c17b2"
  },
  {
    "url": "premium/repeater.html",
    "revision": "5e64c7b0f9ef9aceb9c5f004696202c5"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "493c3242bf5640b7f89590210c6d0cbc"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "adb07bf897cfd55b1cc7d3b8b95ff7b4"
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
