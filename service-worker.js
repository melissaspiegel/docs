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
    "revision": "a9ce16a542c809dc0607e15c9d2f203a"
  },
  {
    "url": "assets/css/0.styles.4ca99f17.css",
    "revision": "732e09c0be2e3193da93143ac15365a0"
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
    "url": "assets/js/10.c18fa950.js",
    "revision": "1bcb910bf4063338d82809a7252b60c9"
  },
  {
    "url": "assets/js/100.78dd1023.js",
    "revision": "9d0c49f809480373954739f5944ec8f4"
  },
  {
    "url": "assets/js/101.941ac357.js",
    "revision": "64cd91de9433c0e00dfc12c3c0a20dbc"
  },
  {
    "url": "assets/js/102.d188f952.js",
    "revision": "d9753602c661926aee94108b8bebc7c1"
  },
  {
    "url": "assets/js/103.a02427d3.js",
    "revision": "443b9958bc524a1b988b575ab32bc30e"
  },
  {
    "url": "assets/js/104.5cdea8ee.js",
    "revision": "ad032d827f6f0f8c4a910507b0a01648"
  },
  {
    "url": "assets/js/105.328304f3.js",
    "revision": "45c7475b49e3e2b929b71d6462cf3c5e"
  },
  {
    "url": "assets/js/106.68636076.js",
    "revision": "798d284242f7e7f91a4b7a730b1427ac"
  },
  {
    "url": "assets/js/107.303fd26d.js",
    "revision": "f66699429fd4cc7af5ba78a0f992f1cb"
  },
  {
    "url": "assets/js/108.7efd9f8c.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.342770e5.js",
    "revision": "12c1e3f6c0c4eaf230ca694ed03e39e1"
  },
  {
    "url": "assets/js/12.8121e462.js",
    "revision": "89ffb7022a55eac97d1ed0b42254e7f3"
  },
  {
    "url": "assets/js/13.a9b427c4.js",
    "revision": "4ff787789d843c4905b16c06988d5298"
  },
  {
    "url": "assets/js/14.849e5346.js",
    "revision": "8e7e41b3f3037412bc957dc738c2272b"
  },
  {
    "url": "assets/js/15.7ccd7424.js",
    "revision": "29b7cd8fa473220a6055838f734bebb2"
  },
  {
    "url": "assets/js/16.dcd3419b.js",
    "revision": "07794f2e28e7c15016ff0934324ca777"
  },
  {
    "url": "assets/js/17.2669f4b1.js",
    "revision": "4d41a567658cfdbcada37f2aa5ba6c32"
  },
  {
    "url": "assets/js/18.753e6b3b.js",
    "revision": "a593dfd4ca5ed5bae5a120b0f0cca535"
  },
  {
    "url": "assets/js/19.dd148fba.js",
    "revision": "134f7da9326baf5be11d4d8b044c1de3"
  },
  {
    "url": "assets/js/2.102b1694.js",
    "revision": "447f48c250394aa3140c874f7ecd4c96"
  },
  {
    "url": "assets/js/20.9f222008.js",
    "revision": "4933f4118a69d44829868baf90449dc5"
  },
  {
    "url": "assets/js/21.12ac9fb6.js",
    "revision": "03c8e7091bb9d4c4ff45ca3c651c568e"
  },
  {
    "url": "assets/js/22.74b2d549.js",
    "revision": "fe4c7cd7b23611f4a67bdd8ddde0b8ab"
  },
  {
    "url": "assets/js/23.a8f8ecf2.js",
    "revision": "2ed476f8f7f0e28a0774039c23703b39"
  },
  {
    "url": "assets/js/24.4f004cdf.js",
    "revision": "919612fe35e885a5fa4a7a3e2642f14b"
  },
  {
    "url": "assets/js/25.aba3fc17.js",
    "revision": "a35cdea4a85c6509b964283db50bf856"
  },
  {
    "url": "assets/js/26.0562fcbb.js",
    "revision": "1fa753ea358ee052089cf941bebd6ca3"
  },
  {
    "url": "assets/js/27.7878ae44.js",
    "revision": "3e4474c8ba3a058ace35a8f8d4320fc9"
  },
  {
    "url": "assets/js/28.772670bf.js",
    "revision": "da3a2300d43c65477d370e9432f5a540"
  },
  {
    "url": "assets/js/29.1226212c.js",
    "revision": "6b8a82b1603a1446d32d728730d01284"
  },
  {
    "url": "assets/js/3.65c0b009.js",
    "revision": "cf3cd3371f939b2c8b9ad9486c381740"
  },
  {
    "url": "assets/js/30.d71a3706.js",
    "revision": "fdca001dab4238136f3163a5fe50d0ee"
  },
  {
    "url": "assets/js/31.adf2b43a.js",
    "revision": "16bdc3759571fbf2a96a4e074d285a04"
  },
  {
    "url": "assets/js/32.88b38886.js",
    "revision": "c749d3188b85a99c9402c0373e711944"
  },
  {
    "url": "assets/js/33.496bdf18.js",
    "revision": "11b6659a358315a709b6d03dcd796612"
  },
  {
    "url": "assets/js/34.4f0d41d8.js",
    "revision": "42d6814dc6b8bc7ed4715b349c6dff1b"
  },
  {
    "url": "assets/js/35.3e5bd2ec.js",
    "revision": "731285039a76a2e300bbda72cdae13b3"
  },
  {
    "url": "assets/js/36.e8f2835e.js",
    "revision": "26dd9b765f0466ca4f34abe390e233b3"
  },
  {
    "url": "assets/js/37.b185b247.js",
    "revision": "4760b896f0fa6614a3c1055d3348d4ff"
  },
  {
    "url": "assets/js/38.4a3cc798.js",
    "revision": "f528a053ab057bbb96b80e1d16a6a0fa"
  },
  {
    "url": "assets/js/39.f91a9ec0.js",
    "revision": "2477a9eb3fd9cf6b86f193898466b041"
  },
  {
    "url": "assets/js/4.81050f89.js",
    "revision": "e0f06d2000fa652d8c3543fc93dac6ab"
  },
  {
    "url": "assets/js/40.88fe244d.js",
    "revision": "7fd2236b95296f98ce2bc819b21d0a7c"
  },
  {
    "url": "assets/js/41.fdd624f9.js",
    "revision": "1aac58972458cf0012984399437608d9"
  },
  {
    "url": "assets/js/42.f3321de5.js",
    "revision": "3800cece152bf649f808c0988fbb5834"
  },
  {
    "url": "assets/js/43.f757f2c0.js",
    "revision": "2aa51b3710fd28a77cc593585c2b43fa"
  },
  {
    "url": "assets/js/44.610b79c1.js",
    "revision": "5607c300c7755c7724011832eaba5549"
  },
  {
    "url": "assets/js/45.5e0f7d56.js",
    "revision": "a8e5a9b45ecedc692fc6eba7fc6939ad"
  },
  {
    "url": "assets/js/46.8bf2e179.js",
    "revision": "476f5acd8a60b4db3ffb09209a860655"
  },
  {
    "url": "assets/js/47.a5c20828.js",
    "revision": "b3c31f796925834d4cc42d930e64b16c"
  },
  {
    "url": "assets/js/48.6964685e.js",
    "revision": "a0a0624819bcd7b2cc826eeb9ac67892"
  },
  {
    "url": "assets/js/49.6f24873f.js",
    "revision": "cae696e3290f858eb1c9940f20d80e46"
  },
  {
    "url": "assets/js/5.821e0b7d.js",
    "revision": "468e2cbca92c9acaec9fd5dad205eb01"
  },
  {
    "url": "assets/js/50.23b6e189.js",
    "revision": "8cef65344fc481507f55cf1ea79e9994"
  },
  {
    "url": "assets/js/51.ec3da5d0.js",
    "revision": "4d349538ebd8d43cf811e2c0b7c6b04d"
  },
  {
    "url": "assets/js/52.ca079f50.js",
    "revision": "ec6e6d734ba7e81a41ee2169238d35d6"
  },
  {
    "url": "assets/js/53.b9f54554.js",
    "revision": "5752ff1bd704511529113074c6bad3a8"
  },
  {
    "url": "assets/js/54.a60ed4ba.js",
    "revision": "e578a47937fd24af08e741a09e23e496"
  },
  {
    "url": "assets/js/55.6a329a5b.js",
    "revision": "0f68645ba19a387671d5c54e31f54fac"
  },
  {
    "url": "assets/js/56.51c0e3a3.js",
    "revision": "ae15fb8be1b9c118e0879ef4c8b4f614"
  },
  {
    "url": "assets/js/57.8626928e.js",
    "revision": "c51dc2849fa055b854bb3b08c5d10225"
  },
  {
    "url": "assets/js/58.7358ae45.js",
    "revision": "9411860ce741c8ac42821ff58bca71ea"
  },
  {
    "url": "assets/js/59.83c14067.js",
    "revision": "5caec30be20248a32f7a9b20109cdc7b"
  },
  {
    "url": "assets/js/6.946ad32a.js",
    "revision": "e5a8e7913596c781d37425593182b06b"
  },
  {
    "url": "assets/js/60.742f6f54.js",
    "revision": "465adbfa605b02d1643df71f009614bd"
  },
  {
    "url": "assets/js/61.09c73cb4.js",
    "revision": "faeaa72454d4cfc245160cdb92c249d3"
  },
  {
    "url": "assets/js/62.281f1e11.js",
    "revision": "dbd283da2df566ef49ee003f324e4a1e"
  },
  {
    "url": "assets/js/63.5418e12e.js",
    "revision": "a8ac52fa9ea97e96e4a130cccbeedfaa"
  },
  {
    "url": "assets/js/64.30428efa.js",
    "revision": "b37388792b9f20fd05ad32590d79db5a"
  },
  {
    "url": "assets/js/65.38bb6d32.js",
    "revision": "33bdc2521957aa7e847687dd0dd7ec2a"
  },
  {
    "url": "assets/js/66.3ca74dd5.js",
    "revision": "c2939f26a6c5da279cfb98c2a2329c44"
  },
  {
    "url": "assets/js/67.b384354c.js",
    "revision": "d8b02abeae598b3131fd8401075b24ae"
  },
  {
    "url": "assets/js/68.0c2cbc3d.js",
    "revision": "9a703f70e96b155cbc7aab4cbcaa5a44"
  },
  {
    "url": "assets/js/69.8191c22b.js",
    "revision": "5381cc30c79500b5178043e037b3615a"
  },
  {
    "url": "assets/js/7.ad607ee5.js",
    "revision": "c7b14f45b8991451c8542f8f0a9a112f"
  },
  {
    "url": "assets/js/70.6c2c1a57.js",
    "revision": "615c8a7ec550a59536a3ef18bcc13324"
  },
  {
    "url": "assets/js/71.8990a44c.js",
    "revision": "2643e66ef0306af613e568c46c773938"
  },
  {
    "url": "assets/js/72.54798d32.js",
    "revision": "d3b5bfbd5c0b4340ee26e5ddf447dfbb"
  },
  {
    "url": "assets/js/73.f053953d.js",
    "revision": "5fac298b5fae46b5c3029675285596fb"
  },
  {
    "url": "assets/js/74.da3bba4a.js",
    "revision": "718726e6784aba0f8fed31eea80d91c4"
  },
  {
    "url": "assets/js/75.1a1b5f3a.js",
    "revision": "fed48994b1d94d8c0a9ad13eca5d883b"
  },
  {
    "url": "assets/js/76.622929b3.js",
    "revision": "ea646dc7a3ce961e1d0f25f404499956"
  },
  {
    "url": "assets/js/77.67485280.js",
    "revision": "cc0703c1793ce308e0002faec4ad3289"
  },
  {
    "url": "assets/js/78.839f4b6a.js",
    "revision": "4fd29b4afedd20a90f18458651e92e24"
  },
  {
    "url": "assets/js/79.3730eed5.js",
    "revision": "17b0e0a4c36042833a00a3b75ecfa116"
  },
  {
    "url": "assets/js/8.1e1d52ee.js",
    "revision": "2daefb943ae7386f6dd7279dc0eda219"
  },
  {
    "url": "assets/js/80.41197a77.js",
    "revision": "92f29f3f018f6dea86e59072c1a81db5"
  },
  {
    "url": "assets/js/81.21daf5cd.js",
    "revision": "8b219a05fc749ac9059e04a4c0e58307"
  },
  {
    "url": "assets/js/82.7f85bb4c.js",
    "revision": "deb158a0627d61ea42b39eb530cb8bcc"
  },
  {
    "url": "assets/js/83.5ee5ebe0.js",
    "revision": "b66d615df4492e870ca5a277db44ba9b"
  },
  {
    "url": "assets/js/84.90e8f8ed.js",
    "revision": "8a83de1ef6c1b76399a1a85b8116e7a9"
  },
  {
    "url": "assets/js/85.11b25dd2.js",
    "revision": "02dd01af0398f50cad3d69dcd43935c2"
  },
  {
    "url": "assets/js/86.94012413.js",
    "revision": "e29368ae1602c8476847ea11b257f90e"
  },
  {
    "url": "assets/js/87.89deff25.js",
    "revision": "02a471f6c1fe137b53ca541253fcd678"
  },
  {
    "url": "assets/js/88.efbfecf4.js",
    "revision": "aeee3ba5b7b8ca0e654ff75b3e638561"
  },
  {
    "url": "assets/js/89.7a65b806.js",
    "revision": "e30770136ce7f6ce2911be3e8e1af9f2"
  },
  {
    "url": "assets/js/9.0cbf4fa0.js",
    "revision": "f29343cd0678c1a1cf72314443b5de36"
  },
  {
    "url": "assets/js/90.bf876031.js",
    "revision": "06ead7db5c7e6b1bf49e4b23c138f9ff"
  },
  {
    "url": "assets/js/91.1a14a77a.js",
    "revision": "d1bd11fc60ffe53ad4f594296f9d06ef"
  },
  {
    "url": "assets/js/92.87ac609c.js",
    "revision": "971bd179aefaecf8fb9aac31077d9907"
  },
  {
    "url": "assets/js/93.737a25c6.js",
    "revision": "d7905dcd0b50e65f771f841404fb61b2"
  },
  {
    "url": "assets/js/94.a4680e56.js",
    "revision": "3a5ee4a99452a6d4982d96e418de30f3"
  },
  {
    "url": "assets/js/95.23576d38.js",
    "revision": "85e66fa250fd7889c944eb6f30dddb8b"
  },
  {
    "url": "assets/js/96.08683e96.js",
    "revision": "b88ebb45d2af1de202e00e07f7a1ca62"
  },
  {
    "url": "assets/js/97.7a5221e8.js",
    "revision": "d1fbcd2c397fabec8665c0d3e5905b58"
  },
  {
    "url": "assets/js/98.c57bdf12.js",
    "revision": "7a158be5ae73d62fbfe8931f417295dd"
  },
  {
    "url": "assets/js/99.1eb05b3c.js",
    "revision": "dc3e8f74e6938c3eb9ea46574db766bf"
  },
  {
    "url": "assets/js/app.12973272.js",
    "revision": "ed1ede5e5f934f50437f3fcd95d1b54f"
  },
  {
    "url": "configuration/api.html",
    "revision": "503cc7a38b64a4860401cd57c1ef61b7"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "9c307b8cde813c1099ae9539d79ad4de"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "4bc8dffba8e2994f38374fe41d338476"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "ba536490bed6372cbbc424e5fb00b74e"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "21a782655cbeceb5337692dff640c8ce"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "e49c797a1a742343f8eac18c141830f1"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "e1a8d2394a44a6b6b4c5a32cfe2bd10a"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "dd1f01a251056047b3cdeb3d5f6702ce"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "f34f0542b04a649c0321191cda560fe4"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "e8a483f831a5876df4f552f7c2fc2354"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "1dd29cb2d7d4b4910bf5abe14954fb78"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "150508d5fa435294fe3ba6d4a9cd4894"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "dac935c371227dd84aaadac4a94d518e"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "e20f32fe4b3757b52cfd837b3cfc7fe2"
  },
  {
    "url": "configuration/index.html",
    "revision": "ed6a7d9b926d261935fadd14c925a276"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "40be38dbfd3b2697fe5ec308d80478e1"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "d4c2e5c4f091a319ca48fd6f7343f349"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "b606bfafef40a46a601f72c69955856a"
  },
  {
    "url": "contributing.html",
    "revision": "d6773acd90e61dc200c132ba6d326758"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "3d9d5b45887c3036ee8c034aa4058498"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "8cf2f192809f5a18cb33bd9ad9777294"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "6e6346949ecd9f03a6645b97a63368ed"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "64efb912205e6f6ec40d44e442f604ce"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "1620c8ed61f3edc5acfe82ac1c731113"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "e353404625d646a1c8f2a1646d3987d6"
  },
  {
    "url": "core-fields/background.html",
    "revision": "389f2a405b87ecaa06abb228976e1cd7"
  },
  {
    "url": "core-fields/border.html",
    "revision": "4df31b75eae23ea389961b2b3452377e"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "5318db3f00c61d629bd29d3bd59d6846"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "076b7b93e92ce6f6438ffb8be3f0f439"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "403c9b5daaa39706969fa22c23d8205c"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "992ef5f44af59b352bee34df43173b0b"
  },
  {
    "url": "core-fields/color.html",
    "revision": "f2fec0bfd742b36896dce5e5a7025049"
  },
  {
    "url": "core-fields/date.html",
    "revision": "6c80fb0e51e48d6504683b4fbc64fada"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "5fd620ff729d59224ba2f08b9cd3706b"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "9ae540cc03c7a9a5aa20ab067162d656"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "b21b99b0fbf96ba3a24339f5e4530d1f"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "e76a0908bf7f43cfffe03761089a9346"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "d48d7c9d670f5a48bec11e90e24665b5"
  },
  {
    "url": "core-fields/index.html",
    "revision": "4b932cd887366f01b2344ffe7025e20c"
  },
  {
    "url": "core-fields/info.html",
    "revision": "cd2b7de7799b11f5d592db1ca27eac9c"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "66c5b5ccb01eb0f444ecc5f3ba3f418c"
  },
  {
    "url": "core-fields/media.html",
    "revision": "23fbc02931ee04bcd9c9a226dd8a46f4"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "09ab6de9035cab3a89c0ee50246bbc3c"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "e38b9efc26933117e199961415b6170b"
  },
  {
    "url": "core-fields/password.html",
    "revision": "c1e51a21c73a57754b0206eb7bd4f8cf"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "4bcf220ba280e9df1373d408a3b4d0d3"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "5795b8fe87c7f89b55e4c12bdf8e046f"
  },
  {
    "url": "core-fields/section.html",
    "revision": "903686fb8bef64b668870d64f085de88"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "3a046137af3a7749b9c66232f79cbd4f"
  },
  {
    "url": "core-fields/select.html",
    "revision": "aef6ebe23b9578282fc89e1c107844b5"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "7b93bd1c18500923538953cf433e05e6"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "18c24f61a891778463a0d21385e8f234"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "cebe481b816624d82f2d6a8b7959d018"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "0ca59e349ebdbdf9cf7ba85353130029"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "94e4b4004f07f286d4665aac606706cc"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "6d2fddc5e08d40088c45ae7efc52aa33"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "fac5790e2df4d88a4d4e39ee2b17669e"
  },
  {
    "url": "core-fields/text.html",
    "revision": "9f3b06fb7e389f036c720933bb4280a8"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "c17ec04d6d8ec60a4d17657c206475db"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "b2ab52936e0b86c7dfb759fc5eac6f29"
  },
  {
    "url": "core/index.html",
    "revision": "9a3efa16b2a0701cbd2de99483dac549"
  },
  {
    "url": "faq/index.html",
    "revision": "7a774cc30f6d42e8f2c062d12cfeeea6"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "4bebc0ecfc95e6a342ea1650c9c624cd"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "73eea83d738bb5f47a2a2fe7b8d37b5d"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "5bed9dc8ab4a4bba15b684148048d0f7"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "3d89f6b7461545fb6ac6759710743985"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "62344860c9aebad86e118ded4a65761f"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "7acf88d3bf0e493da307652809cc826c"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "37fff9199c32ad3e26ed41bb30c09cf5"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "cffb93b4502699577f435a09c46ac8f0"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "a9e9502e1f4d94dfe87f86b022cf1332"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "d238625ae9c0bf25f5483c8c95fd0724"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "3ce82cfc26e267929a75a14485c14f4a"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "a3ad7f82fe3138ce26192d6f142e6f6c"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "11f84e378ab3b84ee37fc4f052bbb72a"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "783808827823f8b537a827a4f25c5363"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "010269d361a2a464d3c8aa4cf220933f"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "e996e136a9b928439efbb7aa453071f3"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "308faf06606dc36227c93e0f535d4efa"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "5a643e043c67ee4c34e71e83b32ecf7e"
  },
  {
    "url": "guides/index.html",
    "revision": "3c06f2bfec143169f2691554c385cb21"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "753fd089b54b7bc5b0d94805fb662a97"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "9acc04a5e4062abfff4418b414ce6cec"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "378a7bd1e1d32ae519a2e1405b758192"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "393f7b8e9660bc7faee9a4f03d40c0d6"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "e92d805be049e1b519be66882848582f"
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
    "revision": "afd3d9ac5235b28383c025b383e95dfb"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "99af39e2edbc7fe353bf848b0f2ae386"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "6152375ee16e86ce4d217797778f7bbc"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "a35a3b65b3332582a39bcbc1d6d063df"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "55c98b1c611e6a0bbce71a54c9c28857"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "814c66c36f26386a4252cd8c4096574f"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "c4ca8be8d3bddb07d15a6a991a26bf16"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "5a751cfdc48f82cb9f1f081711c5492f"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "214c5596f8979a022cb1e47c8fe894a7"
  },
  {
    "url": "premium/index.html",
    "revision": "aa3944bf6e91e7644c6e3e0504fd2c50"
  },
  {
    "url": "premium/js-button.html",
    "revision": "6008e7fc45a3b707246f0251ea367aed"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "5d791f9da08867a13a3ffb9f93637b83"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "ac7d1e096f7bcd951045254bfd3ee0b8"
  },
  {
    "url": "premium/repeater.html",
    "revision": "83569d13632f3972faf37440156b64eb"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "e46dfae7b440e594dacc8a2183f69582"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "34fe3982691c782e5ffe65e4f3bec5d6"
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
