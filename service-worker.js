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
    "revision": "1840ffa3e72c07f4bfd716d766648ccb"
  },
  {
    "url": "assets/css/0.styles.f8e787de.css",
    "revision": "17bc29a688a7ca10c6023f671db782b5"
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
    "url": "assets/js/10.b119f22a.js",
    "revision": "b85e7230cb6dd1aac7101b4368823aee"
  },
  {
    "url": "assets/js/100.e2a88cac.js",
    "revision": "ab0c38d811d20ea92fa36ee13a164f11"
  },
  {
    "url": "assets/js/101.be3ee92c.js",
    "revision": "56d858ddcd925fecfe559cd27b931fc7"
  },
  {
    "url": "assets/js/102.f2747731.js",
    "revision": "15d218e351d4aedb609a975d9dadd34e"
  },
  {
    "url": "assets/js/103.096759c1.js",
    "revision": "aecdf51f1cd3ace412bd4d5ea6d07dcd"
  },
  {
    "url": "assets/js/104.1aff28e4.js",
    "revision": "ec1c8e504f633ebcd3a4d1d011a44362"
  },
  {
    "url": "assets/js/105.c144b7a8.js",
    "revision": "15d622c75180e9e5928fb83e632e8728"
  },
  {
    "url": "assets/js/106.f26a6d41.js",
    "revision": "f1be23fb0befe4911e9e170ba1b9baa2"
  },
  {
    "url": "assets/js/11.c1899299.js",
    "revision": "937491eb727f82248365d9b5c915478b"
  },
  {
    "url": "assets/js/12.16c968b1.js",
    "revision": "4fec171207287118123cbd1bfe069658"
  },
  {
    "url": "assets/js/13.a9a0d9dc.js",
    "revision": "e94ea029ee9d2621dde7beb0eac8c6f2"
  },
  {
    "url": "assets/js/14.ac18e575.js",
    "revision": "46bf893d2bc4f5fad94549af51775070"
  },
  {
    "url": "assets/js/15.a19992b3.js",
    "revision": "0a4b42b57cad31ba5b7aba0da98ae9ec"
  },
  {
    "url": "assets/js/16.7b103aa5.js",
    "revision": "6078b08f27c2c0e56a06379cbcfd9d21"
  },
  {
    "url": "assets/js/17.913968f0.js",
    "revision": "197a2bd147b9ae22cfa9d21a0ef14f83"
  },
  {
    "url": "assets/js/18.cfd2c795.js",
    "revision": "001a002a143ab2ebbfa7c6142cbb688e"
  },
  {
    "url": "assets/js/19.ce50e1a0.js",
    "revision": "284cd9fbef2f58295b938ca219ee0c5f"
  },
  {
    "url": "assets/js/2.46fa168e.js",
    "revision": "9f170e3dd17eb9d163a416fcd4e82c63"
  },
  {
    "url": "assets/js/20.f27a28b0.js",
    "revision": "9ff0b416b2fb671bf1ab4b4a99d7daaa"
  },
  {
    "url": "assets/js/21.c2a6422a.js",
    "revision": "0a3207be3e40e67e3202d9b73d3eea85"
  },
  {
    "url": "assets/js/22.0bf00d2e.js",
    "revision": "af6e6fd8d29e3b053cfa6574d57e1470"
  },
  {
    "url": "assets/js/23.fb4f9f0c.js",
    "revision": "e825660bf312ac31f7a75156e34c359e"
  },
  {
    "url": "assets/js/24.66ab08e5.js",
    "revision": "95c61b0c1278514f602e307b7425dbf6"
  },
  {
    "url": "assets/js/25.0f2d1f73.js",
    "revision": "892e27d25666bde50074bc0f85206f41"
  },
  {
    "url": "assets/js/26.5e37569a.js",
    "revision": "f5512bbd55cf6ecc7b194ebe30ad30b5"
  },
  {
    "url": "assets/js/27.313eab12.js",
    "revision": "4bc0d9f333930858544591e3717cde3a"
  },
  {
    "url": "assets/js/28.ab03033e.js",
    "revision": "81340f23f0f0ef875f4622270dfbeba2"
  },
  {
    "url": "assets/js/29.ff01328e.js",
    "revision": "0911518fec1443018b92bd553a93c2b0"
  },
  {
    "url": "assets/js/3.3a96c050.js",
    "revision": "9b76c579a0ba15f6b35e5ff48b1ef779"
  },
  {
    "url": "assets/js/30.bd8303b9.js",
    "revision": "83970870917a46cf3fd3364c87bd9865"
  },
  {
    "url": "assets/js/31.7cd44a88.js",
    "revision": "8e71cf50b046f249342541ceef385e17"
  },
  {
    "url": "assets/js/32.e99253f9.js",
    "revision": "0c5f0abc8dd2912ca25ec78cde7bc97c"
  },
  {
    "url": "assets/js/33.6d701ef0.js",
    "revision": "7d40ffb515e855b9e63b1727c76c9bf4"
  },
  {
    "url": "assets/js/34.7b7158d8.js",
    "revision": "7a83e43b84218a74a8c0b513cd143690"
  },
  {
    "url": "assets/js/35.d94ea947.js",
    "revision": "baa19244adc848c6fe72372b5fe875d3"
  },
  {
    "url": "assets/js/36.7525d3b4.js",
    "revision": "eb5ab741fdec5302895569f909ce465e"
  },
  {
    "url": "assets/js/37.8b05f864.js",
    "revision": "0372c18b2a9e604f46a206153f20984e"
  },
  {
    "url": "assets/js/38.9fb30918.js",
    "revision": "93fa6a0471e24a1f1cdd981c7ddb74f7"
  },
  {
    "url": "assets/js/39.9f0ba30a.js",
    "revision": "c56fbb5f9ccfac81220878d4dd30be95"
  },
  {
    "url": "assets/js/4.b9e57436.js",
    "revision": "1858375b52f0ebaaed259f5adcb05ae5"
  },
  {
    "url": "assets/js/40.00ed1736.js",
    "revision": "68d2ffa3529114edb7638abae9705b71"
  },
  {
    "url": "assets/js/41.1fb50d96.js",
    "revision": "37e4269be4526bfd062673dc8cf4a463"
  },
  {
    "url": "assets/js/42.7a9e6a74.js",
    "revision": "fbd5a3d48ae794c7dbf5ed9123581e39"
  },
  {
    "url": "assets/js/43.9bab02e1.js",
    "revision": "f6bbf6c1f04f49e0702332fcc50b3e8c"
  },
  {
    "url": "assets/js/44.46320574.js",
    "revision": "7f4d8043f8b6aec584f156ebb9e311aa"
  },
  {
    "url": "assets/js/45.dc4cc65a.js",
    "revision": "1ca6aea1f840d189c6ba7c341ac8970f"
  },
  {
    "url": "assets/js/46.b9c9fe1f.js",
    "revision": "4a541f36a1275aa07b08cba1980be542"
  },
  {
    "url": "assets/js/47.f32b366d.js",
    "revision": "947cab1160f0f3fde5a5b704c0be0aad"
  },
  {
    "url": "assets/js/48.7043ee62.js",
    "revision": "ae63333ffe1ba3692f61657cdccd79cb"
  },
  {
    "url": "assets/js/49.6b7d62f5.js",
    "revision": "1e88aa7530a4be9b24974d98ab1cc696"
  },
  {
    "url": "assets/js/5.2949dab1.js",
    "revision": "6a5f55678551d5573990c0ac5aca2d93"
  },
  {
    "url": "assets/js/50.eba6bdce.js",
    "revision": "d4e04a8373aa31cee8b60fb741564171"
  },
  {
    "url": "assets/js/51.d809b61c.js",
    "revision": "af5720115a9dd74152d0421eedd0d6f9"
  },
  {
    "url": "assets/js/52.522e846d.js",
    "revision": "96ff25e5920955b3c4b443053e877980"
  },
  {
    "url": "assets/js/53.bf0abc20.js",
    "revision": "2cb6139e7f611cd8fc7094b68a519094"
  },
  {
    "url": "assets/js/54.55b3541e.js",
    "revision": "98752eac62f6fa872022fb57eef16f03"
  },
  {
    "url": "assets/js/55.38b6e7eb.js",
    "revision": "9de2815ab6e67615e433f05f2fe26216"
  },
  {
    "url": "assets/js/56.291ecc47.js",
    "revision": "688956c9949b387f8880727c097791a4"
  },
  {
    "url": "assets/js/57.e0abc467.js",
    "revision": "839a0443be35412f83b072cb3e4e0d49"
  },
  {
    "url": "assets/js/58.ab359c1f.js",
    "revision": "d2e360877fffbf0e411a490c1bb0f6f3"
  },
  {
    "url": "assets/js/59.917d305f.js",
    "revision": "a0d8b08fe362bbb09423df8fe4b06b33"
  },
  {
    "url": "assets/js/6.69aeb9c2.js",
    "revision": "67ae6a08441d8629e0e1ce96e669eeae"
  },
  {
    "url": "assets/js/60.27bfd48a.js",
    "revision": "13a43b0656a216ebb2de5cf54f947425"
  },
  {
    "url": "assets/js/61.abf7db1f.js",
    "revision": "8a169ed574a9a93a5c2c349b851d113e"
  },
  {
    "url": "assets/js/62.86d24bd9.js",
    "revision": "449b2f00619fe243e39f31e0cc05041d"
  },
  {
    "url": "assets/js/63.c1093158.js",
    "revision": "92f59c1c39bfdb8b890e6272f0f4d660"
  },
  {
    "url": "assets/js/64.861711c9.js",
    "revision": "ccdb0af4d7f0d7e75f13732dbc770268"
  },
  {
    "url": "assets/js/65.79949954.js",
    "revision": "29a18e165787495c6b77d9551f169af3"
  },
  {
    "url": "assets/js/66.8879b429.js",
    "revision": "e77a55bc80f8263507fec8918b2b9977"
  },
  {
    "url": "assets/js/67.050b6dff.js",
    "revision": "5a77283ec7adcbafe167caae1ea484b1"
  },
  {
    "url": "assets/js/68.7104f2ec.js",
    "revision": "05f3390e8b5c36d92937f6082e0d5fd4"
  },
  {
    "url": "assets/js/69.a9839717.js",
    "revision": "bdb464099ce192de2e8bdeb147eeb036"
  },
  {
    "url": "assets/js/7.209815fd.js",
    "revision": "ca6d5901f3f7a992981aa042955d681a"
  },
  {
    "url": "assets/js/70.400f19f7.js",
    "revision": "ba5b1262f9ffba28e630a603ecb095ca"
  },
  {
    "url": "assets/js/71.41f51002.js",
    "revision": "76b7af9ea1e12450c4a3c9cc2e931e28"
  },
  {
    "url": "assets/js/72.008a0454.js",
    "revision": "0e60dac2cb96dc97b5979eee23d8eb28"
  },
  {
    "url": "assets/js/73.119d95f7.js",
    "revision": "b318bf1629d9607949f2a6d9986eba65"
  },
  {
    "url": "assets/js/74.c31f6d33.js",
    "revision": "cb30d3733e60883a81f1560aa1dcd929"
  },
  {
    "url": "assets/js/75.5bfaf15f.js",
    "revision": "64d311a0f18eb72277df488422d4a75a"
  },
  {
    "url": "assets/js/76.275fd6bc.js",
    "revision": "835b08b04cdf85fe34bbfd9691002532"
  },
  {
    "url": "assets/js/77.74d6d067.js",
    "revision": "fe115c9595980d8d534712edc888ac6e"
  },
  {
    "url": "assets/js/78.9ec925a9.js",
    "revision": "9f2326186e661d76042612c0de135f2f"
  },
  {
    "url": "assets/js/79.3b4175ca.js",
    "revision": "d06e3c12710905aa41d02ff3bfcc0c6e"
  },
  {
    "url": "assets/js/8.9134209a.js",
    "revision": "e4d6500779036a9a01aefefd98e98931"
  },
  {
    "url": "assets/js/80.1f7a3fad.js",
    "revision": "20ffb7d25dd5c002c32cbc3289d4aac6"
  },
  {
    "url": "assets/js/81.8ab62cc5.js",
    "revision": "08aa622a88ff18fe154d004d2ee41965"
  },
  {
    "url": "assets/js/82.c08b25b2.js",
    "revision": "1f8fea0cf17615cbc5f0a9dfe4d3a335"
  },
  {
    "url": "assets/js/83.bab1f936.js",
    "revision": "3d9b6674902b96ac24fb2f78ef392faa"
  },
  {
    "url": "assets/js/84.b8ea7e29.js",
    "revision": "a9f4cd39a7c42ae607455cae05465d9b"
  },
  {
    "url": "assets/js/85.809b0632.js",
    "revision": "a15e40103ebc3faf622726ca0ae1647c"
  },
  {
    "url": "assets/js/86.0a946916.js",
    "revision": "eb668d903246ce2635f3a4f11abc25b1"
  },
  {
    "url": "assets/js/87.5a7399f2.js",
    "revision": "77149c068bd0673ec74ad31a485c9a37"
  },
  {
    "url": "assets/js/88.28905b2f.js",
    "revision": "561604b1bbd733ac19ecbbd05d267cc2"
  },
  {
    "url": "assets/js/89.af0208fa.js",
    "revision": "b47bfcfe97d6a439d2b03eba6088d0c8"
  },
  {
    "url": "assets/js/9.2c9c2791.js",
    "revision": "556afffa7e12f154984e7cb014133bcd"
  },
  {
    "url": "assets/js/90.8156d09e.js",
    "revision": "a312d15f76adfca1bbeb1c4530d22821"
  },
  {
    "url": "assets/js/91.9907b0fe.js",
    "revision": "efe527f5889f800ee71d91b7a32e6828"
  },
  {
    "url": "assets/js/92.550e2c6f.js",
    "revision": "b94938610ad89847aeaf3ca54c577860"
  },
  {
    "url": "assets/js/93.0cf63e0e.js",
    "revision": "c1150855acf57453156fba14e74801b4"
  },
  {
    "url": "assets/js/94.79caadf3.js",
    "revision": "d371094beedf1608affd22958fb9a5b1"
  },
  {
    "url": "assets/js/95.b4b05c07.js",
    "revision": "084814d88f72e1d385acb22b8cc74ccb"
  },
  {
    "url": "assets/js/96.6e4fcfa2.js",
    "revision": "cadbae012be016c84f225bdcb44e5fa0"
  },
  {
    "url": "assets/js/97.720249b9.js",
    "revision": "ff4cd50a476cb79f29a4a7e043673c24"
  },
  {
    "url": "assets/js/98.338f2f1e.js",
    "revision": "e9d47df49f60733c02732c23ec001d77"
  },
  {
    "url": "assets/js/99.3768ffd4.js",
    "revision": "1b48f1150966f287a5b626a645120ab7"
  },
  {
    "url": "assets/js/app.c733ec7f.js",
    "revision": "3d7a71b686c68c56b6041829799490cd"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "8d59501a2cdcd556124936cb3246287a"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "be4eae02cf22ef91ba1c9b22c9c11487"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "b1578bcd037ea874df33da9abce56eae"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "a4a0d16ee5e857e3e788dc99b56d6711"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "7c91a5a5118cfc0a889a894d0c8ea236"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "f256ed10599f653b85d12df115da5681"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "35c9d723dee484afc4155bcd486589e9"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "39106b7416bdc86bc8baa2e7f845f99d"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "c0dc4684fd334662370d239d91fd2e3d"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "f53a0763dbad9bd85df16128e521be48"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "debe9fd2e24c64948d4242c5d87f233f"
  },
  {
    "url": "configuration/index.html",
    "revision": "5bf6aefd54eda11fe6a2e11d844a6dd6"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "48781647ff44187fc0dc4fa07c37c322"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "31d07d98fdd714496d4710a7ad304d1b"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "d7d1af528aa3807b183ccf0c32108631"
  },
  {
    "url": "contributing.html",
    "revision": "e294a55eb5081312307bc5c9b3d90b10"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "a20427008d72b1b1048ff780636cb505"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "616a449d03875d9a2aa9e893e32dcd1c"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "e8d0f4a31bf97843d3ffe274c40d06be"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "1a98a77abc850174cd71d4a8490e42a3"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "daa0bc97541acfccd1d781bbbbf29510"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "fe51f73e82dc1ee70b455f5d6e9977ee"
  },
  {
    "url": "core-fields/background.html",
    "revision": "da7966dce0d4d2c7be0027b4f4af2134"
  },
  {
    "url": "core-fields/border.html",
    "revision": "520eda724481b155296eeebf0d1d5fad"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "29d8d7e9f6329eb52ed118088dadbff9"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "789dd656feab1cd1251b708c8e897237"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "32795930cc6a8a8e92420e03c70d3d54"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "71451b65bd62a45380aa622aaa12f809"
  },
  {
    "url": "core-fields/color.html",
    "revision": "36dfeb12c00ca60136af0efb59e8f5cb"
  },
  {
    "url": "core-fields/date.html",
    "revision": "c5b2a8fedef63a805aabf0b15edf45c2"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "813894f9309bacb1c3289046bbf6d7f3"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "5d5e89f1f949a270cb8cac1ffc56ffb8"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "2af25acae944768dbc06f63cc061dd21"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "5487344be29609a17af0365c12c7ef4a"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "d17ed475baec67d9610f458761798357"
  },
  {
    "url": "core-fields/index.html",
    "revision": "a96203b583b1af3c8c7d85fc08ab920f"
  },
  {
    "url": "core-fields/info.html",
    "revision": "d5e3b482b73c0bc0b7ffa9bdbe33d49e"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "a16693e65e4061a8c40214d1edf861d9"
  },
  {
    "url": "core-fields/media.html",
    "revision": "889f9283e513a76a42af9ffa182c29f5"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "75cdc0d8718a90d0b3f463d0fa945922"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "c1223c1d48f4b3ec3fa984e4196e68ec"
  },
  {
    "url": "core-fields/password.html",
    "revision": "7f883ebcf5ad15d2478751c58869c994"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "f7082a03ed3f3d0600d8cab903384988"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "f3cc6a6304a665e8f6b5c0c1fb8a9697"
  },
  {
    "url": "core-fields/section.html",
    "revision": "099909721c85a479360fab41480fc04d"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "a0a0f09c3fba96e9ec075addb899d1b1"
  },
  {
    "url": "core-fields/select.html",
    "revision": "13f0354754df69cdb0ec57d5e81df0a8"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "3661e3912bba8bc0f02b65363c7e11f8"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "041d1fae93f7cc55644d9b67c12ea5d0"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "d6d5b191062789f389c29c803bfebe75"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "98c4599ce24ffe028af7f71c402886af"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "10f809b3bc904504474d319eafb87b58"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "6d2083c428e22afede0c68675d8a6f51"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "24ded95433a31d559c6e3928d902c777"
  },
  {
    "url": "core-fields/text.html",
    "revision": "afea118803c377c38fa91de486c49ab3"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "08b4c396f32196b11fafb0b4cc858fe9"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "7616557aaa797bb23312abc168290dd0"
  },
  {
    "url": "core/index.html",
    "revision": "7e8fa2a9c16b631f5e6d8fd6c4930eaa"
  },
  {
    "url": "faq/index.html",
    "revision": "12d8864e4127145ff64ddbca83370c05"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "7197ae4673f23a4a3ee290c60af115f8"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "43237a16ef42a57276331589438a507a"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "ec3e90da5fc006643984e526980a5873"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "c6d6a22503d368719c2ab21557b431ed"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "733ff4c5954901ad9672b98551451d34"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "d12f0d101c4ce21e8d2f5523e1ae6fe6"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "9a21834b6875b0fc0e409ce68d01cf62"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "a157fb5250d44500c07311c4fbcac771"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "48732b9cfb44148f798f05ddf560b0c0"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "431aedbb7aace3b906abe3408b66553c"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "a590a8711394d18c0266a9791602d383"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "600e1bf8591c9bd0c0656cdba2054c8a"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "581a5400225550fe9aa3f65d6f0bac12"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "3a393e4c9bfe890f0076714551460bbc"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "41b83209c133d34cc0ade689f2c383ea"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "9309171181987142454140dc88b0b128"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "c0b2a07b0e4af22d5c9cf4ad65c695ed"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "83c63e51109247f6d44b98211dfb0eb0"
  },
  {
    "url": "guides/index.html",
    "revision": "783ef578f336f6540c0dc79d3c96f00b"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "84447a7a97d73cb81d07ef1ff82d7720"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "894592d4ce19217f0d79bf5c950a6611"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "75322cc4f03f7fbc104beaed513a4202"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "d4802c353484426fa197334a2a685942"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "a3aa9561f476cb6200ba267b61ee25f2"
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
    "revision": "51ae33288364e835b7e1ffc0d92c8c2e"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "c3efc2e0750747a6d17ed72ee46e608b"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "09ceaf4f38d7ea7db11ce05cb1a6380c"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "83aff65b1ec87b5bb25105abd22dbcde"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "65c8b3b95e3b032e9fdfaec998b3a0bc"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "16b2a46156baacf9e81eb7a0a7e7a549"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "04f309de96cafe204d3145fd3176849e"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "62c8bdb95ce9ebb411dd860dccf7e713"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "2a0ced34cc6a0dbccedd49a0bc00f124"
  },
  {
    "url": "premium/index.html",
    "revision": "7dc3d66be52c9795e7925d426a2c421b"
  },
  {
    "url": "premium/js-button.html",
    "revision": "5218f544f5d605be015fc1054982a545"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "245c1cb691387af642a2667fe0581ddd"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "710245e73247d16f10028ec8fd865528"
  },
  {
    "url": "premium/repeater.html",
    "revision": "75a161f0c942f44fae124af13305f4f2"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "6064c71f09b8af679b1fa90ad368832d"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "aa94ea18bbc82dcb3dd774ebfe2a8338"
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
