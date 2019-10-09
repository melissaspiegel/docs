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
    "revision": "4adfea5b3fb6d108a991369dfb811fad"
  },
  {
    "url": "assets/css/0.styles.bea7f81e.css",
    "revision": "37ef7ffd78d3c0e283bf6566a6bc054b"
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
    "url": "assets/js/10.b47fe7e7.js",
    "revision": "08a6d6baa5557b4d856f8048701f8104"
  },
  {
    "url": "assets/js/100.fefd3fc5.js",
    "revision": "dc401585a474d2bc16970e86c471281a"
  },
  {
    "url": "assets/js/101.36633656.js",
    "revision": "64cd91de9433c0e00dfc12c3c0a20dbc"
  },
  {
    "url": "assets/js/102.5b54ad6f.js",
    "revision": "d9753602c661926aee94108b8bebc7c1"
  },
  {
    "url": "assets/js/103.4aa2ce16.js",
    "revision": "443b9958bc524a1b988b575ab32bc30e"
  },
  {
    "url": "assets/js/104.4e091424.js",
    "revision": "ad032d827f6f0f8c4a910507b0a01648"
  },
  {
    "url": "assets/js/105.14c45269.js",
    "revision": "45c7475b49e3e2b929b71d6462cf3c5e"
  },
  {
    "url": "assets/js/106.6c748ca3.js",
    "revision": "58358c42f8da19d447eface71d3f2415"
  },
  {
    "url": "assets/js/107.66a999dd.js",
    "revision": "f66699429fd4cc7af5ba78a0f992f1cb"
  },
  {
    "url": "assets/js/108.5dfedaee.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.8a4d6ad7.js",
    "revision": "f1a76f356134e01c06b82054482f5f40"
  },
  {
    "url": "assets/js/12.ac697289.js",
    "revision": "ab0d755dec0b98aa61c30a3e69ecf9e9"
  },
  {
    "url": "assets/js/13.6b5ee4a8.js",
    "revision": "1539c3e39c2c2ab5ca127c796749b758"
  },
  {
    "url": "assets/js/14.ab102aff.js",
    "revision": "ff6b65d5e0465ddeaec453820e713051"
  },
  {
    "url": "assets/js/15.c6e9dc7a.js",
    "revision": "9c52f7440c61a37d5afbfc0af3fd83b2"
  },
  {
    "url": "assets/js/16.82ed2a11.js",
    "revision": "d929551ea20f0f7290c533620bd673e5"
  },
  {
    "url": "assets/js/17.f1a436fe.js",
    "revision": "7d80fee6eefda8b8a2ddc6e6b17b5982"
  },
  {
    "url": "assets/js/18.0bfa0d8a.js",
    "revision": "84a5267ecbe8b74af8bbfa6dbcc649b6"
  },
  {
    "url": "assets/js/19.fec72f43.js",
    "revision": "06db7e0afc2b7b6f6f5c669e8482884c"
  },
  {
    "url": "assets/js/2.ccdd453c.js",
    "revision": "447f48c250394aa3140c874f7ecd4c96"
  },
  {
    "url": "assets/js/20.d9d64ac8.js",
    "revision": "19f38c9a21384754c10f6b3df300a2f4"
  },
  {
    "url": "assets/js/21.c2083cd5.js",
    "revision": "1657af39bbdb8ff05d7eae5a48d8ad31"
  },
  {
    "url": "assets/js/22.dd32e8b7.js",
    "revision": "4fb569a2bdc3bb56f4d65437ed35daa8"
  },
  {
    "url": "assets/js/23.3d51f662.js",
    "revision": "d6fa2d7bc6b41b8b6746ac92c6755c17"
  },
  {
    "url": "assets/js/24.4d8830c7.js",
    "revision": "5c17095f605aa29bed2c208d7e4b6150"
  },
  {
    "url": "assets/js/25.b5a86dc8.js",
    "revision": "f82d2b88521a216e745eb70b88b356b9"
  },
  {
    "url": "assets/js/26.8e4a229f.js",
    "revision": "8c6beb7e9a5b65ea19e42074116953cb"
  },
  {
    "url": "assets/js/27.1eeb97f5.js",
    "revision": "0ecd15790be01b09e921299da1903792"
  },
  {
    "url": "assets/js/28.38c35bbb.js",
    "revision": "bfa95daf26baec2ac04968a5423e3377"
  },
  {
    "url": "assets/js/29.8b1505db.js",
    "revision": "b3c59f1c4a008e8085fbf527f712f3e4"
  },
  {
    "url": "assets/js/3.a582c250.js",
    "revision": "401d3b9e67f4a6f2ad54844eee943e0c"
  },
  {
    "url": "assets/js/30.80129ec6.js",
    "revision": "3e7d048d2b57fec49f305c96f11aefd6"
  },
  {
    "url": "assets/js/31.c005c1a7.js",
    "revision": "f8f32999edb465ebcc4f0f6f00330cb8"
  },
  {
    "url": "assets/js/32.cd73d13e.js",
    "revision": "49424dd005968625642cb9d5597e306d"
  },
  {
    "url": "assets/js/33.ca22f2a9.js",
    "revision": "fb8a0c9ba5911c3049d0dabfc905ef97"
  },
  {
    "url": "assets/js/34.120a08e7.js",
    "revision": "b1a41f8b037cc79a07f9ac76017a9d7c"
  },
  {
    "url": "assets/js/35.12b54582.js",
    "revision": "78203becc45762d0b02796b89848f408"
  },
  {
    "url": "assets/js/36.31a993b8.js",
    "revision": "5b1c92d10ae8a803afc76767e203ee8a"
  },
  {
    "url": "assets/js/37.ae831f2c.js",
    "revision": "5955eb28aa5c171f67480bd0682635f7"
  },
  {
    "url": "assets/js/38.c393cdee.js",
    "revision": "3f9e75acae7833bac95a6c29b4f83abe"
  },
  {
    "url": "assets/js/39.8bde6359.js",
    "revision": "3d112fe939ed565e19b0aeb0be3b5a1c"
  },
  {
    "url": "assets/js/4.19efcdd0.js",
    "revision": "11b1f928fc47438b22a64b1efa127f71"
  },
  {
    "url": "assets/js/40.5f95c20d.js",
    "revision": "fd076aa2804a8b4e9458bc62c023e224"
  },
  {
    "url": "assets/js/41.e13c4772.js",
    "revision": "7e4ff04f410975d93a2ddb6b23f873f6"
  },
  {
    "url": "assets/js/42.d269667f.js",
    "revision": "3800cece152bf649f808c0988fbb5834"
  },
  {
    "url": "assets/js/43.18dc88aa.js",
    "revision": "e60133ff32e814b0c7822b02588c34d2"
  },
  {
    "url": "assets/js/44.15100266.js",
    "revision": "b64cfac3225e223a40c1c1b48463b1f4"
  },
  {
    "url": "assets/js/45.f1520de2.js",
    "revision": "beb0ff3f021ba82a32f6cba1d794c3d6"
  },
  {
    "url": "assets/js/46.6e0f97d5.js",
    "revision": "476f5acd8a60b4db3ffb09209a860655"
  },
  {
    "url": "assets/js/47.032f2061.js",
    "revision": "b3c31f796925834d4cc42d930e64b16c"
  },
  {
    "url": "assets/js/48.3826e4f7.js",
    "revision": "f7cce6d560d2850289cd5de4fbcc31d6"
  },
  {
    "url": "assets/js/49.af21caab.js",
    "revision": "48940496ae2014dd3ccefad5db51d16e"
  },
  {
    "url": "assets/js/5.d5c7ca3e.js",
    "revision": "fa067db6c3a5eeb77a81c8eedc73aa1d"
  },
  {
    "url": "assets/js/50.c257ca3c.js",
    "revision": "ab84d2ac7ba5bac76eae0cf151b2f55a"
  },
  {
    "url": "assets/js/51.85c754f3.js",
    "revision": "4d349538ebd8d43cf811e2c0b7c6b04d"
  },
  {
    "url": "assets/js/52.e7af43a8.js",
    "revision": "2ae64e10619962d7a180548bf432e13f"
  },
  {
    "url": "assets/js/53.74de754a.js",
    "revision": "5752ff1bd704511529113074c6bad3a8"
  },
  {
    "url": "assets/js/54.fa143c5b.js",
    "revision": "4dd45f4d6d8a12ec0851c7108b03e8b3"
  },
  {
    "url": "assets/js/55.1d517ed8.js",
    "revision": "0f68645ba19a387671d5c54e31f54fac"
  },
  {
    "url": "assets/js/56.16ade964.js",
    "revision": "239cfd1041d29b017fe3ee9474593d31"
  },
  {
    "url": "assets/js/57.f9a63217.js",
    "revision": "c51dc2849fa055b854bb3b08c5d10225"
  },
  {
    "url": "assets/js/58.690bfd56.js",
    "revision": "e9e31a633787665ef4330168a7a07674"
  },
  {
    "url": "assets/js/59.e0633bf7.js",
    "revision": "5caec30be20248a32f7a9b20109cdc7b"
  },
  {
    "url": "assets/js/6.4d96ed87.js",
    "revision": "756e8c53f5aa7d145d491020e784bfc3"
  },
  {
    "url": "assets/js/60.1915f1fe.js",
    "revision": "9dc4d6370f1b017dbe4e6c020ebf0eb6"
  },
  {
    "url": "assets/js/61.26ca005f.js",
    "revision": "a6abe89a4346a5bc66d72b1b56b36aa3"
  },
  {
    "url": "assets/js/62.83f66a2a.js",
    "revision": "cf67208304dd844ef68c6daad16f65b5"
  },
  {
    "url": "assets/js/63.26a6a337.js",
    "revision": "a4b40f3cc8278daa3bab2a58e2dd272d"
  },
  {
    "url": "assets/js/64.0e3586e5.js",
    "revision": "909a8afdff3fc09500f8d46cadb1deb4"
  },
  {
    "url": "assets/js/65.6a68d644.js",
    "revision": "a1568a26759c1ce0a263a8f70c2d3ca8"
  },
  {
    "url": "assets/js/66.4203c846.js",
    "revision": "c2939f26a6c5da279cfb98c2a2329c44"
  },
  {
    "url": "assets/js/67.88365151.js",
    "revision": "d8b02abeae598b3131fd8401075b24ae"
  },
  {
    "url": "assets/js/68.21fe51c1.js",
    "revision": "af37d8a394e8fcff424f725cfba3ac60"
  },
  {
    "url": "assets/js/69.1d8cad3d.js",
    "revision": "c5351ab82949d7ca564056b4a877e7a5"
  },
  {
    "url": "assets/js/7.23082292.js",
    "revision": "17cfd62df416bd25fadbac921f50fbc4"
  },
  {
    "url": "assets/js/70.50248350.js",
    "revision": "9741e3b341b1051aa3427c303194ed27"
  },
  {
    "url": "assets/js/71.69f3bc02.js",
    "revision": "7bc5eeb1b73cbba07279e9b9fd01036e"
  },
  {
    "url": "assets/js/72.80a8706f.js",
    "revision": "c9ffd4409db8285874315176221ced6d"
  },
  {
    "url": "assets/js/73.41a08c81.js",
    "revision": "eb3a528a8dd8ee552a160c03985333b3"
  },
  {
    "url": "assets/js/74.81f8e283.js",
    "revision": "534fd495610d310b47903c8808dbb330"
  },
  {
    "url": "assets/js/75.a3a98906.js",
    "revision": "fed48994b1d94d8c0a9ad13eca5d883b"
  },
  {
    "url": "assets/js/76.a7f98477.js",
    "revision": "ea646dc7a3ce961e1d0f25f404499956"
  },
  {
    "url": "assets/js/77.dfeb2cf9.js",
    "revision": "cc0703c1793ce308e0002faec4ad3289"
  },
  {
    "url": "assets/js/78.84d15f18.js",
    "revision": "4fd29b4afedd20a90f18458651e92e24"
  },
  {
    "url": "assets/js/79.11fce37f.js",
    "revision": "17b0e0a4c36042833a00a3b75ecfa116"
  },
  {
    "url": "assets/js/8.95d3526c.js",
    "revision": "6f032b7da57a8d8794cf41664dfdb3ce"
  },
  {
    "url": "assets/js/80.20f6f05c.js",
    "revision": "92f29f3f018f6dea86e59072c1a81db5"
  },
  {
    "url": "assets/js/81.276ecdbf.js",
    "revision": "8b219a05fc749ac9059e04a4c0e58307"
  },
  {
    "url": "assets/js/82.f835314c.js",
    "revision": "deb158a0627d61ea42b39eb530cb8bcc"
  },
  {
    "url": "assets/js/83.48eb3da1.js",
    "revision": "2d5741e84989ba77b7158a7329c60dce"
  },
  {
    "url": "assets/js/84.156a5eb0.js",
    "revision": "ae02fdc6442140e4040b849af7309531"
  },
  {
    "url": "assets/js/85.56a7beb4.js",
    "revision": "0db2b5caa95d204bfe22e9c8f33cab76"
  },
  {
    "url": "assets/js/86.f89c9cc6.js",
    "revision": "eaa2136661da0561834ab5858516b2ad"
  },
  {
    "url": "assets/js/87.52bf9585.js",
    "revision": "9cc5c0cffbddfb6e65f453abbfce49ea"
  },
  {
    "url": "assets/js/88.17762dce.js",
    "revision": "e94566c94c6a8d177effbd576105e15c"
  },
  {
    "url": "assets/js/89.678422f8.js",
    "revision": "e30770136ce7f6ce2911be3e8e1af9f2"
  },
  {
    "url": "assets/js/9.66b3d6da.js",
    "revision": "0d9f2838439b9d4ae982a03384b452b7"
  },
  {
    "url": "assets/js/90.fe2c03d3.js",
    "revision": "06ead7db5c7e6b1bf49e4b23c138f9ff"
  },
  {
    "url": "assets/js/91.8de91568.js",
    "revision": "e945639f81b8b4f1b490303f096737bc"
  },
  {
    "url": "assets/js/92.7666e563.js",
    "revision": "1eaab99632426c69b8fe61d6d5e52b33"
  },
  {
    "url": "assets/js/93.10847935.js",
    "revision": "d7905dcd0b50e65f771f841404fb61b2"
  },
  {
    "url": "assets/js/94.c8bdae64.js",
    "revision": "5d4029a7b25fd05ed4b11c03766f7b7f"
  },
  {
    "url": "assets/js/95.5a47d3ef.js",
    "revision": "992a5cc5b5c5d5b51a990d27a4df7e28"
  },
  {
    "url": "assets/js/96.2c1a1135.js",
    "revision": "66ee9933f2e49af0c1f1894fecd18212"
  },
  {
    "url": "assets/js/97.a95e04d9.js",
    "revision": "bdbe849be9607527b61a2a6704956343"
  },
  {
    "url": "assets/js/98.5d118307.js",
    "revision": "722f50937975d91625f58a846e299c14"
  },
  {
    "url": "assets/js/99.2fda0d7e.js",
    "revision": "8310a3b415aef35021be94cb0092cac3"
  },
  {
    "url": "assets/js/app.2ffd8755.js",
    "revision": "a3609decae6acddf2b8f7180bc83570a"
  },
  {
    "url": "configuration/api.html",
    "revision": "d995567fb6387418b8c4d9148acf6ff5"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "075b7d08b9685e1b2b3e98d7187e07ea"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "e8020b778d827884205c0362772d4e79"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "f8f9e55e642a2c697cead784b591dfd2"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "b0aab44749bcee3f927bc8cbfd84c509"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "4f17129ad29d193313e7ca7504957174"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "863edb4cff52218633772cde6b80ae7f"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "844f6fd1531f2a3790a6166b354f4df2"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "aa30488fe5d07ca7800b972af85111e5"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "703aeb4770619c8ec6e6945474cb60e9"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "76b7dc86152569397bcf3f7c0e7adba5"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "9b8dfb91251074265a86a1d7dae1eb8e"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "afdb0237fb4e0edf2d932d81495f9b78"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "09ad6c4cff6f757ce67b799052b662a8"
  },
  {
    "url": "configuration/index.html",
    "revision": "329641ba6794bf465b195ac36bcbb298"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "0019efc51f3115e24b2c1f41e38fa931"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "5de85956f688f5ee397153ab242c17b7"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "0bec576918300463cc31f91473374eea"
  },
  {
    "url": "contributing.html",
    "revision": "d0f4f871e24f23295ca3f70967db9fea"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "dd7115c11e1399bc18c3d9b4c3885b1e"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "12343a832687399f951975e18636861b"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "838a589764c66a10eb3930ed34dbeddf"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "965b35ceecc6a208700564195feedb80"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "380a82983310517e24b75a1b264f4f80"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "cd9bfa708d4a96b2feac2a518e041098"
  },
  {
    "url": "core-fields/background.html",
    "revision": "dd80a1c5a449e3a7c5b8592e580380dd"
  },
  {
    "url": "core-fields/border.html",
    "revision": "6b303ca0cdae8fda9a57388d811a6a6b"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "7bbdf4617bdd0de00f7e053eed6f68fe"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "379bd4f1f96c360c884ab8f7194e2e70"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "c5c6248d8b48cd10814380b59a3f411a"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "988dd388c253cdd13e9f910381b99cca"
  },
  {
    "url": "core-fields/color.html",
    "revision": "e266c025db3ec28f41f357b735fe6980"
  },
  {
    "url": "core-fields/date.html",
    "revision": "66cc329dd4f3d3b97e0c52999e597b4c"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "310f682153f0296426c9fd2b60a15ca6"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "37cf95aafaebd40e1eea4da8ea6f4fb2"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "9cb251ce86b6e5e9068ee5ee9d7ec80f"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "b9618412da687714f7ea3258114ff802"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "5572b65c95769d8864313a4cfad52e1e"
  },
  {
    "url": "core-fields/index.html",
    "revision": "98ee09872eb1d84a16b3ff28ae70e2fe"
  },
  {
    "url": "core-fields/info.html",
    "revision": "75806ff12d9092202f5bca87dd2c6f18"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "270e8ae7175b52c467cb55ca5e4f8f06"
  },
  {
    "url": "core-fields/media.html",
    "revision": "b9ba8c35c3e03690659f1d216640cb05"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "ae7c7dab9461115532e321f13542d161"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "130a8db5d4e781b8e3cb6c4036c8ce70"
  },
  {
    "url": "core-fields/password.html",
    "revision": "51a5c054d2aad63e604460b7383af002"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "930b101103f22ac0c0d31409cd258358"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "8f6be2e62c1c27d9d1b7b5c213f5d860"
  },
  {
    "url": "core-fields/section.html",
    "revision": "37651a9d113d29943fe5dec2ac0a70cb"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "f56fd018b181c77acdc8fcf29b763558"
  },
  {
    "url": "core-fields/select.html",
    "revision": "e2ee8904f9939de0ba4b2f195e49f674"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "5e6dfdf93c224e772f86baaff8b6310f"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "43e9a8789737a8dae13692ed5431e59f"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "2e3700f5949f3e3138c30e666273cf39"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "51bc22cfaad3c58af8ffa543297582d4"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "d709e916ba9aaea3d23816555f0a6f24"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "b5e3504b2757314d40777c38c69bc231"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "f5a7b97568099c2c485ab781fdba97ef"
  },
  {
    "url": "core-fields/text.html",
    "revision": "8494b04d6a90a73e1faab72f321cc3b1"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "1241af74b7977c2903978fe246905716"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "9b0b5c46157ecac2b499a92ecbefc208"
  },
  {
    "url": "core/index.html",
    "revision": "d2cbf06d29d9926606d5ab0eea171a39"
  },
  {
    "url": "faq/index.html",
    "revision": "bf4575f4a9aa682768dc1d43ed0da78e"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "ad0b7fee7ff2d26a1dae33582c9b1456"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "530b46e5470d5184d756e156c767f5c2"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "60362e2508dfbc1a7a3485e423ddf12f"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "2c0bb01f460636e87a4d6b4ae0b800c7"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "aeb3a4e1a94a189403100c5720f5a7f4"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "37ec4eddf03940e9d7e79db68769d3ec"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "8d54cef791482d233d68b92ab1b6346f"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "3817112fc709a8d7412afb1fd7578607"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "3c8cb0779769d11965f41a52d02368c1"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "f6b8ce764b53c562f039563b2484620b"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "0e42d57b9f5c1a8e11178ab61cbb6cf0"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "ab57f46a1641acf1880814173dcfccee"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "a84f24dad13f85c4cbb6f7cb08dc62b8"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "f4d3181ede05c1766f4fab9ca0a1dcfc"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "6567dc659f73c92d730dd4bbff1749ac"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "727e9547537919aab840076e0069bcb8"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "ea95f369560b884fda7db73dde4078e9"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "062b81c9eff3a2c5e8309cb0ff913c8e"
  },
  {
    "url": "guides/index.html",
    "revision": "24d9f75fc5d484634fb508e7137c1910"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "751c78085d325d9fc70c68884a4c17e0"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "fe75e77ab56cc02bd43abe544b71eb26"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "93589aad8ce37ffefb2373707089844f"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "df41356d675b95d19f25f4128d9f98cd"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "78dae6d1ae864687c2ea7ce8afb0ba0d"
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
    "revision": "811b587fd580992369c4a891744e9e9f"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "e5fee4fc23273b7cbf2220f08ce27807"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "50413ca303a85a0e512b9486d145b183"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "8d06bc72ef31edb521b68eabbe582fb5"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "f3238937b5330e70041d09bcca18ae64"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "6daf9fc0330363802a00d22fcf6edb58"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "3361ae1694523f48db20a9372311f1ff"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "a1e3bba979e60336c5226d9d2ffe777d"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "1d02dd4fd68a34f17a33e71761b0ca41"
  },
  {
    "url": "premium/index.html",
    "revision": "86a833165702c7648faf409668798526"
  },
  {
    "url": "premium/js-button.html",
    "revision": "270ce0df8c39e1cd1071bdd1dd84778c"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "c53d96b49719e5346e2338727f7572aa"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "1ce2c14eaad53d908e46224f5e7f78d7"
  },
  {
    "url": "premium/repeater.html",
    "revision": "0d9eaef56adb50fe4a8d0723299f648f"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "3589c98eddaf73d6b1fe6c752ccc88d2"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "92368cf0517bc3e0deb091e1d2948b4a"
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
