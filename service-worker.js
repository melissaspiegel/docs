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
    "revision": "be69f72db9a57f5b1d6ab589d90a118e"
  },
  {
    "url": "assets/css/0.styles.216e9bf3.css",
    "revision": "8655809e2f1dc6985c1318475e063207"
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
    "url": "assets/js/104.1430f48f.js",
    "revision": "3eac9a5993624cab9f047b128034f2f3"
  },
  {
    "url": "assets/js/105.d9728d7c.js",
    "revision": "559b6f11feeb1aa2fcf276716ec746d0"
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
    "url": "assets/js/13.e85c0eb0.js",
    "revision": "412f300bd58b51d5f487f1479cbd3c58"
  },
  {
    "url": "assets/js/14.65bac277.js",
    "revision": "9f136bff6f04030cb55cc1d32f4be812"
  },
  {
    "url": "assets/js/15.98a7ff72.js",
    "revision": "6266da215e095c72cbeef6e96f729f8b"
  },
  {
    "url": "assets/js/16.596e0dbd.js",
    "revision": "c0c90b8d71ec6743f520a741793c9c6b"
  },
  {
    "url": "assets/js/17.ed73def8.js",
    "revision": "4cc4ff6ffac18fda9a8ca90a1a45c623"
  },
  {
    "url": "assets/js/18.4f49d386.js",
    "revision": "e20fcbd2d20d69020891d6e075275f64"
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
    "url": "assets/js/23.0fabd50f.js",
    "revision": "053d95a67a836333ef6d41269ffe22f4"
  },
  {
    "url": "assets/js/24.e5a33def.js",
    "revision": "e720520dc74d5d0f65bb3691015ddee8"
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
    "url": "assets/js/28.f0e64bd2.js",
    "revision": "22d0e85e459f189e7fa691ddfe38aeb4"
  },
  {
    "url": "assets/js/29.79166724.js",
    "revision": "67aa89cac33fe3a0788d8b59457b5b24"
  },
  {
    "url": "assets/js/3.be0eed37.js",
    "revision": "b34e7157601da386d2f4c827ae28f156"
  },
  {
    "url": "assets/js/30.0f3a6d4f.js",
    "revision": "991ae1c082a89bb37abb7e0ce50f7f16"
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
    "url": "assets/js/35.b2275e5f.js",
    "revision": "72424da29e3c78a07d345b2ee4ee50e8"
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
    "url": "assets/js/41.8fe638bc.js",
    "revision": "52216220770638a43d6b345387c3e694"
  },
  {
    "url": "assets/js/42.95583810.js",
    "revision": "ebd7fe93cb26c54fd5e344599e2ac1bd"
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
    "url": "assets/js/46.7c8b3684.js",
    "revision": "e51ef5da49d5bbdb30772cbe110ab8e6"
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
    "url": "assets/js/52.b28283aa.js",
    "revision": "ec6e6d734ba7e81a41ee2169238d35d6"
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
    "url": "assets/js/56.bc4baa33.js",
    "revision": "7f9e89392af4e46a8c9159504f57603a"
  },
  {
    "url": "assets/js/57.3ab1f69c.js",
    "revision": "a9c3e64642322a16c3cae61720376f05"
  },
  {
    "url": "assets/js/58.690bfd56.js",
    "revision": "e9e31a633787665ef4330168a7a07674"
  },
  {
    "url": "assets/js/59.2ba46b9f.js",
    "revision": "9b0aae352d982f778aa37169c7ee00c9"
  },
  {
    "url": "assets/js/6.4d96ed87.js",
    "revision": "756e8c53f5aa7d145d491020e784bfc3"
  },
  {
    "url": "assets/js/60.2ba72684.js",
    "revision": "63659c03079aee6e9582eab15d934580"
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
    "url": "assets/js/67.507870d7.js",
    "revision": "35398914c15b812dbbcc995c284c10fe"
  },
  {
    "url": "assets/js/68.a671e41d.js",
    "revision": "b003cdba1cccea2d8f3e617ac08702f0"
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
    "url": "assets/js/8.87a99c24.js",
    "revision": "db2ebd0ef6c8b299ae7b7e87e52927a3"
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
    "url": "assets/js/85.21eb1d45.js",
    "revision": "02dd01af0398f50cad3d69dcd43935c2"
  },
  {
    "url": "assets/js/86.d21fcb32.js",
    "revision": "e29368ae1602c8476847ea11b257f90e"
  },
  {
    "url": "assets/js/87.d565d7cd.js",
    "revision": "02a471f6c1fe137b53ca541253fcd678"
  },
  {
    "url": "assets/js/88.e624bacf.js",
    "revision": "5ad61e9d574a349ac7d651eb0251d4ec"
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
    "url": "assets/js/94.7841a4a3.js",
    "revision": "3a5ee4a99452a6d4982d96e418de30f3"
  },
  {
    "url": "assets/js/95.f41adfc0.js",
    "revision": "85e66fa250fd7889c944eb6f30dddb8b"
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
    "url": "assets/js/app.5517d68b.js",
    "revision": "8e08ce6730c7c340c2c9f670b90f88e7"
  },
  {
    "url": "configuration/api.html",
    "revision": "5e6611b62f151f4f961bc55ff0c4a595"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "9244bf01d0310b9b697e8e174b34715f"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "eda141754a9ef7b284f44caab0ec34e2"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "9f8afbaf290671b7e2c5cd70ab1c963c"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "5617364bfe66b32100868b27d485942b"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "86e23095dceedc35f1f174b9ee8b4a6e"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "b91e41d9087a5178d65bd64e0f099f11"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "cd541b79acd85b9aab29f8df6ab17c1b"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "6cf5f4c7004adb962d9c8ae45ab34fb4"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "9949b7d09d5f79f2e1a424539a8faf78"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "1426259d484928e5a3b0cbd2f0a47fd9"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "3f0918c0c43a0865505ad75115ff8226"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "d82982724410ae87a0b64bed02b122c8"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "727b0145faae0129fafd1622f35f2428"
  },
  {
    "url": "configuration/index.html",
    "revision": "e230f0801cab49e8466efcec47103725"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "9f66308caffd211d2fbcc91c4ea93661"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "d2a73542b73e61a7227a9d6a0ba3ece5"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "61109063390b5c20e5df7a1a9c4b019c"
  },
  {
    "url": "contributing.html",
    "revision": "ef5c24738bdeeca76f6c2a44b4e696e1"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "d160a2c65afdfd24e40a934f6e036171"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "56125613ef9308140d0438b650881899"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "2564d662637b4e271fd82331f4dbe7f5"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "d86b0ee24edcf348aa86b9322ace1189"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "ec7553f8eab0137ccbf4036762b4cecb"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "f6d2627252c1a08e88bed58f6e2f040c"
  },
  {
    "url": "core-fields/background.html",
    "revision": "a21fbc264e24c721ed74adff227bd98d"
  },
  {
    "url": "core-fields/border.html",
    "revision": "f09dbf3d2977b41bf764b54c990ee74a"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "7da8a00ac32d2f2368d5ca1f651374b6"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "9220cb17bf505a8d6171b4681fd90d92"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "0c07b2d9f4eae9d7e2c7d79c05daf96b"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "6bd99500b003c288e77efd83b503f592"
  },
  {
    "url": "core-fields/color.html",
    "revision": "3d85ed06869106fb7432759097207659"
  },
  {
    "url": "core-fields/date.html",
    "revision": "f2fa832e9c6c8287f8ed4c5a05129e40"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "ac2cdad20775a80e028d2cb9c652ea73"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "61e384bd170701e26fa727481e0723f1"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "5d3de25e73b06ce09f9d18a3306bd14c"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "44888d3a3b5fdf9c1b11af6c158f6a75"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "1cb615842eadb16bd3547a4f3dab8a33"
  },
  {
    "url": "core-fields/index.html",
    "revision": "cbd79c4cf75a234dfb23257459ec274b"
  },
  {
    "url": "core-fields/info.html",
    "revision": "98e8aa5fe60b45dfeef2fa91aa2daf5a"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "7ddfaa0cbf718506fad148d7bf3c1392"
  },
  {
    "url": "core-fields/media.html",
    "revision": "221a4da7da3b0855c1fa922ab36792d8"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "37dde5ff4efc7857155b8dfae16aafd1"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "26c8dc7b1f29f7e6e56010d47a0a3650"
  },
  {
    "url": "core-fields/password.html",
    "revision": "ebf07a9470094561d4a374c9d786b5e0"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "c8203cc9771fd54dfda0c279cd3dca6c"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "5c76ef07239221b95b43b8588215b7bd"
  },
  {
    "url": "core-fields/section.html",
    "revision": "517e8e181244c3397caffba3eac33a77"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "868a4cd54ee1e8c337dbfb4c2cf022a3"
  },
  {
    "url": "core-fields/select.html",
    "revision": "3a5b0a460539e18def899600f79d62f7"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "b11d1ad913ce79304ad8c7712efd2b58"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "8f32272f30192e77ad02a094b2f3f61a"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "f598d0c9fa7c32a4adaee695c80c0504"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "943f0ec28d5a60275f73ab3a7a3526ce"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "b195bdd91b800da82b97d5d96de2a5e4"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "bdf9684838395946832d25f31b42a884"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "0f5a7d39cf48f87f33352c1966745385"
  },
  {
    "url": "core-fields/text.html",
    "revision": "0b00201d6d2eb8a11ec306a06f20ff38"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "8034376cce675a0fc278177a8aa3e683"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "333550f4613569729ba820fedd16e2a2"
  },
  {
    "url": "core/index.html",
    "revision": "191a2ddab62c957addd13f108f31e991"
  },
  {
    "url": "faq/index.html",
    "revision": "da2251080409287b12b0f05004fe70d4"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "f7029a1820b023e11442d5eb5de88aea"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "7aec02eb9e0153c2f4665d72badcb93c"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "f98641b30bb9bb20d6ebcfdae1a79f81"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "751428cf5a8374479d33b7bf815aae38"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "01e8c705d2a36514d54c7c8e83ef8cfb"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "b3f89248d5ff2274389098275c742241"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "e56985a89b946fdee8598a48960d13b0"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "88e538c46e8c90c391df99db8d83cf97"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "c596cd3ade0e4b6223deb98a0510e891"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "3d82a7436184dfae7de16717e238083a"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "42a6445c8a3dfd48f534a0f45d955dcc"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "9380f1fe346b5778b122df42c9f8b191"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "3bc63e20ea50c2c19aeea17e1cd5e69f"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "18ef18ecbf93997b72675a14468d25f5"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "d29edc05ccefbc0b00fb3ce42b8583ec"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "2a4b25d985abf6d060bef84f42407181"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "116a5edc06a0c587700a6424f57706f0"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "e2c65874ddce4baec03a2cb030f72fcc"
  },
  {
    "url": "guides/index.html",
    "revision": "d25d17ed1d818ed893254a1c606abe6f"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "7724ed3746443d7ee4102a1627affc1f"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "5636dd045b8f9b5cd9cdc992527e3a26"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "3dd86a0a999b54677a930fd5359d5d81"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "57e540962d3a137cb23f5f8cf078469e"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "a8626d3f539920bbed7b15e453aab7b0"
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
    "revision": "a50b94f643fbdd131f45b2bf358f2f59"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "444fb22bfb877d182c18195acdae3670"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "4706f0c13f93e635c9a1f72f4d88b75a"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "184fccbe24add41798ddc0b91976d39a"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "f0198a0cf3052e309078c1d16ab90ae0"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "c5d8b91b3652236c7fccb32caa0ff8a0"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "c31c782337991b0166fa52721fa7994a"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "5cd10188dde54d29b6138f4189c73f78"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "c067489c55cab8e8d5dd1bc8bc3e29a5"
  },
  {
    "url": "premium/index.html",
    "revision": "84d7f3131ca6da1b3a23cd74a6421e9f"
  },
  {
    "url": "premium/js-button.html",
    "revision": "b3a69996dd1456b38122f4f97dbb1b29"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "9bf20f922405870f69c31fc4cdfaab41"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "ac7099cf3819969662589f3e3fcacb03"
  },
  {
    "url": "premium/repeater.html",
    "revision": "e96e38030e44404e249dc1f7ee3150ec"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "fce669c1153829d96564fa1fd0771914"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "fe6295ae02ece0e3ca673dc30227dd7a"
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
