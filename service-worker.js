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
    "revision": "05055ee8813b1e0117d25398c87810c0"
  },
  {
    "url": "assets/css/0.styles.ac4768fe.css",
    "revision": "f8c0babb14c0638b229543b8541b43a2"
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
    "url": "assets/js/10.3abde9b8.js",
    "revision": "1bcb910bf4063338d82809a7252b60c9"
  },
  {
    "url": "assets/js/100.7c636f55.js",
    "revision": "9d0c49f809480373954739f5944ec8f4"
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
    "url": "assets/js/106.41ab8eea.js",
    "revision": "798d284242f7e7f91a4b7a730b1427ac"
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
    "url": "assets/js/14.d8b405c9.js",
    "revision": "8e7e41b3f3037412bc957dc738c2272b"
  },
  {
    "url": "assets/js/15.fb7d5130.js",
    "revision": "372a749efb26486e4bf800e7dc4c3859"
  },
  {
    "url": "assets/js/16.bba40604.js",
    "revision": "07794f2e28e7c15016ff0934324ca777"
  },
  {
    "url": "assets/js/17.ff3246d8.js",
    "revision": "4d41a567658cfdbcada37f2aa5ba6c32"
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
    "url": "assets/js/26.3fa3d466.js",
    "revision": "1fa753ea358ee052089cf941bebd6ca3"
  },
  {
    "url": "assets/js/27.d0c29ab2.js",
    "revision": "6247398f60d4048b8e96b0d74c2b5cfd"
  },
  {
    "url": "assets/js/28.89f07f79.js",
    "revision": "4ba32aa5cba49d282ddc3a01a7cb1d1b"
  },
  {
    "url": "assets/js/29.5356ff04.js",
    "revision": "73b9113f3f12ea156bf56f1a548881d8"
  },
  {
    "url": "assets/js/3.2597882a.js",
    "revision": "59d4d58fee05c32d0d0738344d7f1349"
  },
  {
    "url": "assets/js/30.4a9376e3.js",
    "revision": "e4660b1c54c43b2011041737df40cf52"
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
    "url": "assets/js/34.7bbc0e71.js",
    "revision": "42d6814dc6b8bc7ed4715b349c6dff1b"
  },
  {
    "url": "assets/js/35.e27ca49e.js",
    "revision": "dda590d7a3b5dcce941c67587abd5751"
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
    "url": "assets/js/39.d89438a7.js",
    "revision": "1f95b57c18ecdebad576fc28b01e2896"
  },
  {
    "url": "assets/js/4.d4da6fc3.js",
    "revision": "e0f06d2000fa652d8c3543fc93dac6ab"
  },
  {
    "url": "assets/js/40.7e71b4eb.js",
    "revision": "7fd2236b95296f98ce2bc819b21d0a7c"
  },
  {
    "url": "assets/js/41.f0433521.js",
    "revision": "52216220770638a43d6b345387c3e694"
  },
  {
    "url": "assets/js/42.cbef25eb.js",
    "revision": "3800cece152bf649f808c0988fbb5834"
  },
  {
    "url": "assets/js/43.89690b62.js",
    "revision": "2aa51b3710fd28a77cc593585c2b43fa"
  },
  {
    "url": "assets/js/44.d389bfef.js",
    "revision": "d85e4b41c3be14cfb6542c588ccc3a51"
  },
  {
    "url": "assets/js/45.4882652d.js",
    "revision": "8b39aa6411e8b9475ec28fcf83984e94"
  },
  {
    "url": "assets/js/46.58edc75a.js",
    "revision": "476f5acd8a60b4db3ffb09209a860655"
  },
  {
    "url": "assets/js/47.e6bf6914.js",
    "revision": "b3c31f796925834d4cc42d930e64b16c"
  },
  {
    "url": "assets/js/48.05dddeeb.js",
    "revision": "a0a0624819bcd7b2cc826eeb9ac67892"
  },
  {
    "url": "assets/js/49.1e41ea9a.js",
    "revision": "f4d29e5d41db65035647a54a5651630a"
  },
  {
    "url": "assets/js/5.29570679.js",
    "revision": "468e2cbca92c9acaec9fd5dad205eb01"
  },
  {
    "url": "assets/js/50.cd6bcb0b.js",
    "revision": "8cef65344fc481507f55cf1ea79e9994"
  },
  {
    "url": "assets/js/51.3774d103.js",
    "revision": "4d349538ebd8d43cf811e2c0b7c6b04d"
  },
  {
    "url": "assets/js/52.2e8cc9c9.js",
    "revision": "ec6e6d734ba7e81a41ee2169238d35d6"
  },
  {
    "url": "assets/js/53.2343b0d7.js",
    "revision": "5752ff1bd704511529113074c6bad3a8"
  },
  {
    "url": "assets/js/54.ab5048d5.js",
    "revision": "e578a47937fd24af08e741a09e23e496"
  },
  {
    "url": "assets/js/55.9214e81b.js",
    "revision": "0f68645ba19a387671d5c54e31f54fac"
  },
  {
    "url": "assets/js/56.27bd1866.js",
    "revision": "ae15fb8be1b9c118e0879ef4c8b4f614"
  },
  {
    "url": "assets/js/57.2e5729f5.js",
    "revision": "99a8a0b1e9091b87bedc978114ffb63e"
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
    "url": "assets/js/61.01a2fbfb.js",
    "revision": "a6abe89a4346a5bc66d72b1b56b36aa3"
  },
  {
    "url": "assets/js/62.819f3c98.js",
    "revision": "cf67208304dd844ef68c6daad16f65b5"
  },
  {
    "url": "assets/js/63.42fe9688.js",
    "revision": "a4b40f3cc8278daa3bab2a58e2dd272d"
  },
  {
    "url": "assets/js/64.fe73b553.js",
    "revision": "909a8afdff3fc09500f8d46cadb1deb4"
  },
  {
    "url": "assets/js/65.ed50abc0.js",
    "revision": "a1568a26759c1ce0a263a8f70c2d3ca8"
  },
  {
    "url": "assets/js/66.6c4dac00.js",
    "revision": "c2939f26a6c5da279cfb98c2a2329c44"
  },
  {
    "url": "assets/js/67.6697f2a7.js",
    "revision": "35398914c15b812dbbcc995c284c10fe"
  },
  {
    "url": "assets/js/68.bdc2bc3a.js",
    "revision": "b003cdba1cccea2d8f3e617ac08702f0"
  },
  {
    "url": "assets/js/69.c35724ed.js",
    "revision": "5381cc30c79500b5178043e037b3615a"
  },
  {
    "url": "assets/js/7.d09874fb.js",
    "revision": "2d0049266d57cd69b8d57880ae89f8c2"
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
    "url": "assets/js/8.6fb68a58.js",
    "revision": "5231163527fa0be13107c094ddb278ad"
  },
  {
    "url": "assets/js/80.f6993d4d.js",
    "revision": "92f29f3f018f6dea86e59072c1a81db5"
  },
  {
    "url": "assets/js/81.08aada13.js",
    "revision": "8b219a05fc749ac9059e04a4c0e58307"
  },
  {
    "url": "assets/js/82.523a6711.js",
    "revision": "deb158a0627d61ea42b39eb530cb8bcc"
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
    "url": "assets/js/86.c0b5632e.js",
    "revision": "e29368ae1602c8476847ea11b257f90e"
  },
  {
    "url": "assets/js/87.4ebc61c8.js",
    "revision": "02a471f6c1fe137b53ca541253fcd678"
  },
  {
    "url": "assets/js/88.5a81509e.js",
    "revision": "aeee3ba5b7b8ca0e654ff75b3e638561"
  },
  {
    "url": "assets/js/89.df69c886.js",
    "revision": "e30770136ce7f6ce2911be3e8e1af9f2"
  },
  {
    "url": "assets/js/9.3483c3e7.js",
    "revision": "301b5c3d9e1731abeb1d641a9340e91e"
  },
  {
    "url": "assets/js/90.5a8b5d37.js",
    "revision": "06ead7db5c7e6b1bf49e4b23c138f9ff"
  },
  {
    "url": "assets/js/91.cc931b78.js",
    "revision": "d1bd11fc60ffe53ad4f594296f9d06ef"
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
    "url": "assets/js/app.48b336b5.js",
    "revision": "4487d67fe64525f4a5d8dfa324ae53b5"
  },
  {
    "url": "configuration/api.html",
    "revision": "cf5b07f774d1381a3c49eab56246e8f2"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "6fc48c031e2f6af004ba5a0fa2c4155e"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "f5fa63857a838645c859bd0f524fda71"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "04a37121d613e91cbbc4235770d28e90"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "31d2fc857064ad8e59f173fd75f18352"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "0076c563460efb96b2d76d6df9c70eba"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "bca0a7d2ae06c0af88fef896b4ab60fd"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "c01a02a0ffedd121ff7520b7febcdd02"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "f57b67a1dbc888688508432f7f4b4477"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "492cd169c281a3db3dc78477c34861eb"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "1286361c91bc257ba00081c20fa4f1e8"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "c287cd10f32aeaf34f231d39843a4e70"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "35cd435824496486b9437abb6ec7f521"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "898cdb8d909139aa11618b76d9b5e0eb"
  },
  {
    "url": "configuration/index.html",
    "revision": "f95ec16c9565aea6beb0be29627d6cf7"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "8746182f1e42b1ab634e3d697e074dcf"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "3ea33b6fade4981acd0cd7ba33e704a3"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "8ea56a317f4a1d4def8c4f7cae82f27a"
  },
  {
    "url": "contributing.html",
    "revision": "d4ed4f9abbf225176c5f1a9693932087"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "54a379379fc3093326423b00485dc43b"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "46a1220d6e4c99b61d3927834f1ae3df"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "bb53ca35d2ee9a837909969f8f63d9a3"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "bfe3b7e982a3fbe10f4a6e9e29364a68"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "216420af3c4589564df9959fa8ff6bb0"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "aaf1d801383646129b6a49d0a514dbb2"
  },
  {
    "url": "core-fields/background.html",
    "revision": "f35d1017b4ba0858ef21a06eb2220918"
  },
  {
    "url": "core-fields/border.html",
    "revision": "ede432fc9b78e806cd20c34ff4c95469"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "ec755d4f7d3c01a2e49106bb84d31951"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "afe91b921f73f27fa8696666144832b4"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "ef352f6e81eb462ab7c4a56dced1d615"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "fbc4e282f96917dc67d5f4caf018eee8"
  },
  {
    "url": "core-fields/color.html",
    "revision": "0ce581b3c6186d92ffaa38789e1ef38c"
  },
  {
    "url": "core-fields/date.html",
    "revision": "9ae915d9e51173735f22abb2e4946f23"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "6f9f5ebfe32186eeccb7ad1f5d014881"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "afc9c6e4c8a09347f1840923e50e6ff0"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "3ef51ecbf99d2cfade407aac6bf736a3"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "b621e97b03556d2a806083f3f9265604"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "ff1122e2e3399322331e584379d389b4"
  },
  {
    "url": "core-fields/index.html",
    "revision": "01089c6fe5db430a8de007f9f807314e"
  },
  {
    "url": "core-fields/info.html",
    "revision": "42fe4439868dd4ae93225cbdfb40f074"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "4219aed439bb0e130c7877dd13927a73"
  },
  {
    "url": "core-fields/media.html",
    "revision": "f9b5d88f184566c9de0e05b0fe9a74be"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "3b28b369270fa35a2d3527e686fad7b5"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "cb5d67663034f27c9e26cd5ff87e82e0"
  },
  {
    "url": "core-fields/password.html",
    "revision": "48294e1e1b91ed3568f74d15c24adf74"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "28f40c0b92459bc264378a5fb512670b"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "a430352667567017506e0a51942416dc"
  },
  {
    "url": "core-fields/section.html",
    "revision": "6b5962ef1d1ca48ae9a5b1c5204a92ce"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "06c23b6bac20a773c86e2cd74bee43f5"
  },
  {
    "url": "core-fields/select.html",
    "revision": "e2f376e8fae13f65e4d9e0d1cce07bf3"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "b372f63ecba4a1cfec8da2325ec38ee9"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "da89d13981a020510f2f0f3e2e7ad671"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "3073d89b5ed8441a4b0a23070f6719c6"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "47b9f31a25606ea383adfe8ddabc9181"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "c6ade4130861a3181e806988ac04a831"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "679be9ca8b86e247d7ab3b91839fd78c"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "468c4b5a5aec6df8aa8985ab71fa6500"
  },
  {
    "url": "core-fields/text.html",
    "revision": "b79c6e8e1de124993856acfa13ce6657"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "64a1c47a2102da2e349efad484b73f6d"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "77b2eff6bde484e5f9fa518e33250765"
  },
  {
    "url": "core/index.html",
    "revision": "4ca9eedd66000001d7dedea2003adc63"
  },
  {
    "url": "faq/index.html",
    "revision": "9005fd9f09b457924f4738a3672114e1"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "71343529cae0776063ca0410e685388a"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "a2fd59ea8a1debb132bb96d1a690ca2d"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "0b9f4e33f19baf3cb8d801b3794e21a2"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "e41d59447747f74f6f9a2d56c56e90bb"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "587494a092afcea3b10e5b6595032b1f"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "e1a951f4c7301b2eda11678a339f35b9"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "67a1c5b97cc00ccfb92162c5fb118d53"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "f827013a2b3f3d1f90acf975d0b417e2"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "6777a11df5d7a57023c39c431f0d4958"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "da45fde640cea04cb5ca53c9139a1ee5"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "d64791fca602e25978e2967351a74671"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "64b8d53b990c0bc84400243ff4596798"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "b37e61f12db33821d6be339955d8bd4d"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "f4ff08797363a71e634e3aeb584df001"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "a615cc6591a06999673606a59ec95d82"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "5b844bca6f3fa1fbf234c5de9eea349e"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "3e7435711fab258fdc5a7717225c526c"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "022e8e866936a32df6925142366290b1"
  },
  {
    "url": "guides/index.html",
    "revision": "d9aa2a41ebbd6708b974ec38d74cf522"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "f711c75932ba9cfd915eb794c5b4cd5a"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "15c291c05ea0d61908bf5a210ddc87c5"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "9e395c098a3b54f1d2ab0350f5ee713c"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "c7008c15e65aa821ee197a05c1fcaadd"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "a98103cc31424cad7a7397d80e680e75"
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
    "revision": "12de954c2a22cff3714cded69f36434d"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "41d010cd84d9b71fa495e2f9bbc1a7a3"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "76ba8c4eb43cbbeb10bdd4d3636da6c4"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "052f63468a896c00a41b9d25969d2606"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "9de00100b4797dfe7ef4dddeafc21fd9"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "652680c39ece9171bbcf70dbdb345e0d"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "1b46431b6e9983a8317a49a59643ca37"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "75038e2a60361911bc88d232381dd2ad"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "8a0d6ed324eca706f7e08facf5165024"
  },
  {
    "url": "premium/index.html",
    "revision": "5e444650a2a9bde976d3d8738e856e1b"
  },
  {
    "url": "premium/js-button.html",
    "revision": "ceeaf5a99f5e994968fb618df395fec2"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "b2c86682db0bcfbdbe8ab48bce484231"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "85d310b5476f34946cdca3cdb602f9a7"
  },
  {
    "url": "premium/repeater.html",
    "revision": "6c0683aa075eb2d6df3c3f603b74f27d"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "664ed486df18d93f092ebd6a599e0f38"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "dc45f4265d9bee75c530f4082fbf9e16"
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
