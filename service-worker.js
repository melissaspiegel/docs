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
    "revision": "b31d9a15d52c105c233915ee8d734f25"
  },
  {
    "url": "assets/css/0.styles.3b609d0a.css",
    "revision": "d66408d645d2c01773fdac8d5e4caafb"
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
    "url": "assets/js/10.30d9c2bf.js",
    "revision": "80860e1e5b56cf28ed0b83389f8143db"
  },
  {
    "url": "assets/js/100.2218e4ce.js",
    "revision": "1aef97b6927aa1800b7c2f2d57eb6d9c"
  },
  {
    "url": "assets/js/101.0f98123d.js",
    "revision": "542dca759dad297bf2e6f6695cae09f0"
  },
  {
    "url": "assets/js/102.038eb295.js",
    "revision": "b2c38362a295494cf5ba27afc936d3e0"
  },
  {
    "url": "assets/js/103.797925c9.js",
    "revision": "e35edc52be9524092b9c06de5888471b"
  },
  {
    "url": "assets/js/104.887ad65b.js",
    "revision": "f3a49dc251b257dd44f5b610fda43e0f"
  },
  {
    "url": "assets/js/105.4159b710.js",
    "revision": "1c778312034ee0095d5412096f3b01ec"
  },
  {
    "url": "assets/js/106.25caf0ac.js",
    "revision": "ab0edcd5285f7b1cce2d87c86f73c41a"
  },
  {
    "url": "assets/js/107.9335c1dd.js",
    "revision": "27bd1ea05ccf97f21cf552e3fc10c600"
  },
  {
    "url": "assets/js/108.067392f3.js",
    "revision": "72595305c315b989bd4d0adc025c0195"
  },
  {
    "url": "assets/js/11.fa905f35.js",
    "revision": "131d96bab9c367e01d9cbcb32ac69894"
  },
  {
    "url": "assets/js/12.e759e73c.js",
    "revision": "8aac91db2ae7cbbbde6f4e5afd43deac"
  },
  {
    "url": "assets/js/13.52ace892.js",
    "revision": "64a627d7ac7b594b8c2192b1bb2cd3dc"
  },
  {
    "url": "assets/js/14.ca565da8.js",
    "revision": "a28ae6e49cdb6a32c2a7cc0c6203debd"
  },
  {
    "url": "assets/js/15.ab5ca162.js",
    "revision": "780fc8736242f01e8153271f34c50c39"
  },
  {
    "url": "assets/js/16.9bf11e78.js",
    "revision": "30f0f2683ddeba6d61a43a138b88ddae"
  },
  {
    "url": "assets/js/17.5398457d.js",
    "revision": "219f899f6671089f2231cfa02c397432"
  },
  {
    "url": "assets/js/18.19f680be.js",
    "revision": "91272f38f9beb25abc6be084392abf74"
  },
  {
    "url": "assets/js/19.41caf8cc.js",
    "revision": "808b399513e6e5ee5525784c6eb12882"
  },
  {
    "url": "assets/js/2.616b6b31.js",
    "revision": "031ee245ab8caea0d1075e50b81462f4"
  },
  {
    "url": "assets/js/20.a6cc7904.js",
    "revision": "263829fd5bd5cca51a51ffc377042925"
  },
  {
    "url": "assets/js/21.9eaada1f.js",
    "revision": "53f20e12632c2932e569b3289ad56b6d"
  },
  {
    "url": "assets/js/22.28553474.js",
    "revision": "94e5a1795572f6153566247195379d06"
  },
  {
    "url": "assets/js/23.1f197d4a.js",
    "revision": "6f391fa5954cde6a24e00bdb7366fa73"
  },
  {
    "url": "assets/js/24.0b31a31c.js",
    "revision": "da2722a37df161dfe30ca5fe044d319c"
  },
  {
    "url": "assets/js/25.0a3c56b3.js",
    "revision": "260d41ec87a5e2c75f45f6b34d939dc8"
  },
  {
    "url": "assets/js/26.92044595.js",
    "revision": "387a19dd88efe4f66d73fab9e2c33fee"
  },
  {
    "url": "assets/js/27.b0f28073.js",
    "revision": "7d5de3b939a29b6b2a5c16d54abf7d41"
  },
  {
    "url": "assets/js/28.cbbd86f5.js",
    "revision": "76be22107b931c803112a30a8de639ca"
  },
  {
    "url": "assets/js/29.ac72072a.js",
    "revision": "d4d6c98c4967cc8cd0b8fcb9bb86a443"
  },
  {
    "url": "assets/js/3.8ec555e7.js",
    "revision": "56ff8f170d5455b0daa250f6655ae1cd"
  },
  {
    "url": "assets/js/30.928a64cf.js",
    "revision": "dcf1bd038f655bd0f4fc302780217ff8"
  },
  {
    "url": "assets/js/31.0ab41b24.js",
    "revision": "56f1d815c3119f3f1ddac636432feea8"
  },
  {
    "url": "assets/js/32.915f619f.js",
    "revision": "5cc455fd86b4f041f9bfc1da5d8c78fe"
  },
  {
    "url": "assets/js/33.1aeaf5b6.js",
    "revision": "50f58ef1f1926bca86d836f2875f6145"
  },
  {
    "url": "assets/js/34.87284493.js",
    "revision": "f36052b92f1a06e39df3f8eea0161247"
  },
  {
    "url": "assets/js/35.ce6734d0.js",
    "revision": "7c1c785e55aba9981cd81d3c3349d2d7"
  },
  {
    "url": "assets/js/36.160ae938.js",
    "revision": "cd22d4ffa5d4ec83e5af84ed5325084a"
  },
  {
    "url": "assets/js/37.df2ad322.js",
    "revision": "18b4e948d5b1b1a967de9d764bbe4baf"
  },
  {
    "url": "assets/js/38.7f6c94e3.js",
    "revision": "ba3027d55479b458130b0f9564d85ceb"
  },
  {
    "url": "assets/js/39.513addfc.js",
    "revision": "5c1eebb34335dbc3dd13f4ca1b621e27"
  },
  {
    "url": "assets/js/4.ca755335.js",
    "revision": "baefc20d24d22ebe217b4b3473aacbc0"
  },
  {
    "url": "assets/js/40.423849f7.js",
    "revision": "e08b8011d0b5af95ab3ebd58094b703b"
  },
  {
    "url": "assets/js/41.b631d28f.js",
    "revision": "861a8dbe2967178e6ba8c3365954dc04"
  },
  {
    "url": "assets/js/42.28389dac.js",
    "revision": "9e0bb260f43f79b5272303ed4d0d0b3f"
  },
  {
    "url": "assets/js/43.d7d48530.js",
    "revision": "1aebaf2c86305d6cab8f3024677c18b2"
  },
  {
    "url": "assets/js/44.bc6d20f5.js",
    "revision": "e1775b4eea269c766b1f2a1f63590e8f"
  },
  {
    "url": "assets/js/45.3860c7ea.js",
    "revision": "bbae9ef7433d970c0518d376b7105357"
  },
  {
    "url": "assets/js/46.0ba925e2.js",
    "revision": "92cb411e2eac511e9f6994de84d08661"
  },
  {
    "url": "assets/js/47.d1cba1f2.js",
    "revision": "5c9c6143de268d3790d520ce14e9a883"
  },
  {
    "url": "assets/js/48.3e12ac89.js",
    "revision": "e3713aeeba37d338130f76bd22c9b9a8"
  },
  {
    "url": "assets/js/49.6fde9a0b.js",
    "revision": "1e0f74044485e0caa7b3b50b86938892"
  },
  {
    "url": "assets/js/5.8ec54341.js",
    "revision": "d276666de31d1adddfe0ee13ba2c5526"
  },
  {
    "url": "assets/js/50.b1d1aabb.js",
    "revision": "e9a3078f216f73162aae611a83a7f2c0"
  },
  {
    "url": "assets/js/51.b42d7a3f.js",
    "revision": "4f8531ce2b1ccc75f06ffc587c3e5884"
  },
  {
    "url": "assets/js/52.b00896af.js",
    "revision": "eef2d7e3ce32ce326cd8b62742dc43f0"
  },
  {
    "url": "assets/js/53.ab535a97.js",
    "revision": "d57369e2ae5060ce7e010fce49e5cc4b"
  },
  {
    "url": "assets/js/54.4931bd66.js",
    "revision": "7187160e61f5da1462b502e1cbd0229f"
  },
  {
    "url": "assets/js/55.2a9f9dde.js",
    "revision": "e5c123e6d808bdc18e0e6f08d0bd37c7"
  },
  {
    "url": "assets/js/56.64a45851.js",
    "revision": "4442ff42b216d393d20caf0e3c95af0b"
  },
  {
    "url": "assets/js/57.2813b7e8.js",
    "revision": "6847c8b4eac9cbca91f2cb25b4634f5f"
  },
  {
    "url": "assets/js/58.ebada0c9.js",
    "revision": "52e6f0c681772b50852f74cdb05058f6"
  },
  {
    "url": "assets/js/59.32bab271.js",
    "revision": "8bad1ebb7435b590cda79cb3106d22ce"
  },
  {
    "url": "assets/js/6.d7424168.js",
    "revision": "f48b17d4af652561e535b3b6c83aff5b"
  },
  {
    "url": "assets/js/60.ce373307.js",
    "revision": "e4fe602d7700bc6a3ce8e9f002f191c4"
  },
  {
    "url": "assets/js/61.d3f025a0.js",
    "revision": "89e33ba03d045e10c1eaa71b11683a68"
  },
  {
    "url": "assets/js/62.5ffe1808.js",
    "revision": "000e3d22deea05897233e5378aa829f5"
  },
  {
    "url": "assets/js/63.f807b964.js",
    "revision": "6ed14dfd21e05264678d2d599db9d676"
  },
  {
    "url": "assets/js/64.327ecff8.js",
    "revision": "b38ab832cd95a8e4f06085b0550c21b0"
  },
  {
    "url": "assets/js/65.ad3d7e3f.js",
    "revision": "382c79afbfadf62456a607d22c6a6ed8"
  },
  {
    "url": "assets/js/66.bab4978c.js",
    "revision": "e744324e53a3cd8ae014842062f240ab"
  },
  {
    "url": "assets/js/67.5b63a9ac.js",
    "revision": "c01ff14b0a10959f4a76cc7bf4d4eb2c"
  },
  {
    "url": "assets/js/68.dc7aaee7.js",
    "revision": "17fbe491c1bffd4346ea27fe15748115"
  },
  {
    "url": "assets/js/69.02bf1959.js",
    "revision": "8ed91c83187f5d65c993d2ca81efe570"
  },
  {
    "url": "assets/js/7.7646ad28.js",
    "revision": "1b460a4fc930ed99a0dd0152d4ebc249"
  },
  {
    "url": "assets/js/70.45118448.js",
    "revision": "edea223ade670a0ff4aeb29409b9dde0"
  },
  {
    "url": "assets/js/71.7e9f41b9.js",
    "revision": "e7829b9ace6e6695cbecbef22ca7df19"
  },
  {
    "url": "assets/js/72.711d7337.js",
    "revision": "23647ca1e237ed39aeebf986fd1fe3a1"
  },
  {
    "url": "assets/js/73.1be14f97.js",
    "revision": "845eee7008f885834718ffd4c86405e5"
  },
  {
    "url": "assets/js/74.e8c0d064.js",
    "revision": "36a65d9b1310fadd01bc2d6c2b225e7d"
  },
  {
    "url": "assets/js/75.54bf8176.js",
    "revision": "a5755d730ea77419d588ca7c29a85b64"
  },
  {
    "url": "assets/js/76.b267fb72.js",
    "revision": "34979c34b8e91720454e4b0b98293e05"
  },
  {
    "url": "assets/js/77.1210cc74.js",
    "revision": "d8579ebda11446a3c3d248fd397aea58"
  },
  {
    "url": "assets/js/78.639a04ed.js",
    "revision": "0b601e7cc8f7e7627ce835ffb8cf79a3"
  },
  {
    "url": "assets/js/79.596cd0df.js",
    "revision": "0e1ef177e789c80761e54d89ecbcb355"
  },
  {
    "url": "assets/js/8.eecf288c.js",
    "revision": "15be9b0e233682f41f323d1464b0cd8d"
  },
  {
    "url": "assets/js/80.0ff27716.js",
    "revision": "daf3e8d74c797932e9a0a3aeea540594"
  },
  {
    "url": "assets/js/81.404da9df.js",
    "revision": "5e4c4ce0e6a6a8b0ec4421a906353dfd"
  },
  {
    "url": "assets/js/82.67313697.js",
    "revision": "4c5b8df64321fca83edb73187f113217"
  },
  {
    "url": "assets/js/83.af80c4aa.js",
    "revision": "c9e6f9ace65399fcf99836185b254aa4"
  },
  {
    "url": "assets/js/84.cc4e4092.js",
    "revision": "58cf7b6a2e7eafb20b3885a67710aa42"
  },
  {
    "url": "assets/js/85.1e46496f.js",
    "revision": "c3754e55bd1081a80a728e86155e409e"
  },
  {
    "url": "assets/js/86.505ce128.js",
    "revision": "3e784830eea93ec03e48be71428ebf37"
  },
  {
    "url": "assets/js/87.d7d85d94.js",
    "revision": "6f1098eea50af13548ae0ecdf953a659"
  },
  {
    "url": "assets/js/88.bc01c5f3.js",
    "revision": "ff835a104c9a631a16605f47c47103ab"
  },
  {
    "url": "assets/js/89.f2e01b11.js",
    "revision": "e429cc460d2efb785e2bb5393cda9ee4"
  },
  {
    "url": "assets/js/9.36080038.js",
    "revision": "c76745ffb932bb33564e87017fe7ea8e"
  },
  {
    "url": "assets/js/90.6a0955c5.js",
    "revision": "9b40cecab096ecd7b52bf7aa8a8c05c7"
  },
  {
    "url": "assets/js/91.e22bc604.js",
    "revision": "25768fc275b025cecb80b111fa71f1f9"
  },
  {
    "url": "assets/js/92.6314400b.js",
    "revision": "0a5b499b338938ccd8d5d9c09a3f84c6"
  },
  {
    "url": "assets/js/93.989f1f86.js",
    "revision": "5c995036683845a91538af7f687cfb9d"
  },
  {
    "url": "assets/js/94.c0b5aecb.js",
    "revision": "26479d97d75607a8bd9431b4cae10ada"
  },
  {
    "url": "assets/js/95.8860e900.js",
    "revision": "161cb0255046373c348a028e5d56960b"
  },
  {
    "url": "assets/js/96.f7329175.js",
    "revision": "550ca1cbd0e643f846301480c844a88f"
  },
  {
    "url": "assets/js/97.3b2409a0.js",
    "revision": "7958358dfbf16a30dfaa23e843c4a6f9"
  },
  {
    "url": "assets/js/98.f4b6eb3b.js",
    "revision": "e4ba37cd11efd83852be54e10e6bf9f8"
  },
  {
    "url": "assets/js/99.26b52952.js",
    "revision": "3ba4a7603e4e329efe83b549932aeabf"
  },
  {
    "url": "assets/js/app.aa7349f7.js",
    "revision": "b6db1a50291ca08b7c912bb53d85e924"
  },
  {
    "url": "configuration/api.html",
    "revision": "413153e5736135de41d16dc8bf86db7d"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "8b4504c56d2783d6d290fe717ddbb234"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "047ea1bfe891af7a7fb5686b24d57130"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "892231e3adbcd9e3b017be0837fb5e11"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "c7ad41fd96dbcab64f96c32be36dad6b"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "b6dff02d4414d96992fe2aa520a7b679"
  },
  {
    "url": "configuration/fields/output_variables.html",
    "revision": "166dd8b20a180df491e899ea60d7ce0e"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "6ee9f031e425ea3a25c264f482152b9b"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "e770ed8b4c1d57b65836eec735307cb1"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "912701d0eb78aa19fae8de114f64d11e"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "ea892cd5b5e97435b5b9fe9cae175945"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "a1514379aaa52f0bc09db5a6a3ae70d5"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "733c58173e2e0eb16317e1e4e3bf7d58"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "6b3d138d8006f4e9fb8e44f7496bb8c3"
  },
  {
    "url": "configuration/index.html",
    "revision": "364a140fed7ac5c8166ed5d1eef9205b"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "cd949f1ae2199acfc32b10e7641d1787"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "4a98b752c4c19bba6807e70ef72b8097"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "1e8b6c4570c97888d6a50300f92878f2"
  },
  {
    "url": "contributing.html",
    "revision": "bbead490049d4f45486a2b14438a477d"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "ef57b216e1d2cbd5ee04673e8526a592"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "40de109d817964829943ceeda93c83fd"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "cd4e479e3ded92d3f8d1cbe4932f5c6c"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "a4a5dd6d416eea1322a3028b7685df49"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "4eb4d35ae5d663190719891bfe96c426"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "e1062238214439b216dde0c7bb3dc599"
  },
  {
    "url": "core-fields/background.html",
    "revision": "d6d59579d00098409fcd4f0495b05e62"
  },
  {
    "url": "core-fields/border.html",
    "revision": "fb5b3e692b27b7d49dd4dcf0a75ee2e3"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "6a3b547143cb8fbbcd0521af49373ea2"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "af27b6f40b2d92504bbf6b82e139b7cd"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "cb93b47305d70b6ffac5e837d24afdeb"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "5fc10f7eb646ee3d6bf109ae15228f47"
  },
  {
    "url": "core-fields/color.html",
    "revision": "523448c8c73f84fe22dcb6ea27f31a7e"
  },
  {
    "url": "core-fields/date.html",
    "revision": "f35d8d3c562a0cd17b21edb864ce9376"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "e83fcf76c3dba7d660d6f10330cb5af7"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "2b5a3e967bc36a0813c8045205a333c9"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "ecc3c57d18d8db21969a45fd11b93bcf"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "0603ac65342e3e3abc2b9875ccc21297"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "dac711ce7a03e48f2c38805760f720d2"
  },
  {
    "url": "core-fields/index.html",
    "revision": "ba01ebaaf7b5e182be4e72fb30177253"
  },
  {
    "url": "core-fields/info.html",
    "revision": "8e4a60da22fbea1dab5239faee4446f2"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "75dc55c353b4971898a8db101cc58c36"
  },
  {
    "url": "core-fields/media.html",
    "revision": "1b6a9e575ea8784f5555e727c4e5b289"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "f5aa9a459f7066c86e297df5fd09060f"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "6eb6b80ffdf986dffe9d638fe7e44406"
  },
  {
    "url": "core-fields/password.html",
    "revision": "0a0bb20b0659c1059f9701a61e7deec5"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "51b44a1c4cedf51910caa409a36acd77"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "9c69b49a22d933192671b4928626f9e7"
  },
  {
    "url": "core-fields/section.html",
    "revision": "0a4a589dc019cca7e31b15959ee3881c"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "475e44a4dd528a3cb4d61c8696663445"
  },
  {
    "url": "core-fields/select.html",
    "revision": "d07d05f8e035c1276ed680ea6a9abf62"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "dc7faaa2bb818bfd373bb5dc22e3379d"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "e5fc54695c012586914a64d32d72948f"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "8dd9a1c670521d478d22607d606e7716"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "95cbe788c730f66767181296b829951a"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "eff017b5e32992bc8d5078e1018ad8ba"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "c6c96c68cd51b6b323f489320ffce081"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "bbee9e4e4ce009d5e14ffeb7afffb0a3"
  },
  {
    "url": "core-fields/text.html",
    "revision": "35611a589d566f60abaa128ef61b1062"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "3cd888873b711aada55a4ac0c125b4ce"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "c847bc309ab509f568fec1db4c72724d"
  },
  {
    "url": "core/index.html",
    "revision": "b086d926933305bc591ff92aa89a26a6"
  },
  {
    "url": "faq/index.html",
    "revision": "426a4647155ef77179cb9e9ed38431c3"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "290533b3bef907bf6f5eb86929a759c5"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "7f2cf9f50448f0c539487a89157bf549"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "6019da9a40ce931037dd37d19276b066"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "edd72e02a1d2a6c2e217486873a6ade3"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "c8f59fb657dabfbd4cf0c7e82a40e2f9"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "3b5d7ecd65454832fa4048c8ad764352"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "cac49ee6eef6390874e7f9e263c807fe"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "02696a1f18c451034ced8178e7ae3d9a"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "85525e514bcdff40c01293afa49b9204"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "e0538d959d351a71a1278ad2598ea4ab"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "e1c675fd29b4f10d1296ec6fbd3cd21f"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "ea5d9c9374f036b2c8ff49f1f0f302eb"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "fb0d8d976afb129f5d5bf434e40c7e0b"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "026d70bb35508ef473f3d4a2bc5c0d61"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "1be764be15a05cf6332a5da94d2d6781"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "249685c6312a1c59e93ad62b31a3f371"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "d957cf9b6da325eaac464871f1afa4ad"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "7f9651c1199dc68cd8b1b2f686f72477"
  },
  {
    "url": "guides/index.html",
    "revision": "a6c9a1bd97812fbe4321cbd6bd5efb03"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "ed1270fa484646af49ca3015a98e668c"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "c876163f76eac014cb4aa4fef618581e"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "abe2d611b284f2edc85542b6d39576a7"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "d393433cfd91f58c395c9b1010f81756"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "d864daae283d2b65fb6b716a36133701"
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
    "revision": "e9fb69769ba71d657e32fede0bede54c"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "0cee141e1f14058668b401ae778570a5"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "0722988626243560968bbe67131e3f1c"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "a5e5e2d93a7222468e31eab3105a3ef4"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "2ee4301367b8d93f5528c1224021c004"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "521982b2d4709ae4f2e8c42a2c5e308b"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "decc25b934218650590aabe6f58c6407"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "b111d6f53dea6d2afb18ec00e978edd7"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "5c87e2bb0035bd37f692d6063b746c12"
  },
  {
    "url": "premium/index.html",
    "revision": "26bdee9f1c2d67a98de73bc8809bbf0a"
  },
  {
    "url": "premium/js-button.html",
    "revision": "e11622c2db18beb1c9559d5bbb8b1533"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "2340bc4168f91fdd2fe6ff66caff92ac"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "db2a54b5d3aa4aa518ef991aaaa473ff"
  },
  {
    "url": "premium/repeater.html",
    "revision": "1bbb40225c6367160c79020338b15e82"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "cd7646383d21b06f1262c052095df947"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "44265587b9d3908479683cc6245b0b00"
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
