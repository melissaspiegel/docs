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
    "revision": "b5b10f474165ff6ea457463de6f3a658"
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
    "url": "assets/js/25.0d5b9405.js",
    "revision": "1dc216fa7e909be9427cc198af5649b3"
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
    "url": "assets/js/30.4968e260.js",
    "revision": "efbfe5f5b8aaf95f584074b21aa45d87"
  },
  {
    "url": "assets/js/31.b0ba1edd.js",
    "revision": "6ebc839b36bd244c1ea263c2690623ec"
  },
  {
    "url": "assets/js/32.e99253f9.js",
    "revision": "0c5f0abc8dd2912ca25ec78cde7bc97c"
  },
  {
    "url": "assets/js/33.9d4d28a0.js",
    "revision": "fc18c5dbd4490c0964d354bf4e0af628"
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
    "url": "assets/js/36.acd9a103.js",
    "revision": "2c3177a049af922f87375d7c9c40f46b"
  },
  {
    "url": "assets/js/37.442414ec.js",
    "revision": "651d1639f522360d9db356334f6f7720"
  },
  {
    "url": "assets/js/38.9fb30918.js",
    "revision": "93fa6a0471e24a1f1cdd981c7ddb74f7"
  },
  {
    "url": "assets/js/39.a5534db4.js",
    "revision": "9bac5c15ebaa8fcab855331db323aaab"
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
    "url": "assets/js/41.15c0b80b.js",
    "revision": "d9e4d76c71a6ccbbba30a70fda965c76"
  },
  {
    "url": "assets/js/42.42572d53.js",
    "revision": "5ecc4cad3b6b471452e759afb156006c"
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
    "url": "assets/js/45.0655412a.js",
    "revision": "22b6fa5ebe397eb9c374c201906727da"
  },
  {
    "url": "assets/js/46.d145b089.js",
    "revision": "d181dacdf8e23d5608eacb06212deaa4"
  },
  {
    "url": "assets/js/47.dd52b778.js",
    "revision": "d241e7d04589972e00bdeff1ad11397f"
  },
  {
    "url": "assets/js/48.f8ba0d97.js",
    "revision": "e8c36046436025c197ba973a670c2350"
  },
  {
    "url": "assets/js/49.6b7d62f5.js",
    "revision": "1e88aa7530a4be9b24974d98ab1cc696"
  },
  {
    "url": "assets/js/5.c11f7dc4.js",
    "revision": "82ee6f8e9e606d7b9a71c027cacedd52"
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
    "url": "assets/js/52.a540cb0e.js",
    "revision": "6615b327e26488cd6eecceb0d17c6db1"
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
    "url": "assets/js/6.144cf10f.js",
    "revision": "8281a370c1e0acaa058108e72b92a997"
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
    "url": "assets/js/65.59fd2b51.js",
    "revision": "a16b00f046b1472a0eb40771e21b02ce"
  },
  {
    "url": "assets/js/66.c9a8730a.js",
    "revision": "f7d89cff1847d92b0a9f229b1780497f"
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
    "url": "assets/js/93.678f8dea.js",
    "revision": "211e4788347358166d98ec78469ef385"
  },
  {
    "url": "assets/js/94.bca5e366.js",
    "revision": "04fc14ea7ee6222c40c7c0d00683b3a5"
  },
  {
    "url": "assets/js/95.71126cb6.js",
    "revision": "c54cfae0a00b925dca25661db4cb1a3f"
  },
  {
    "url": "assets/js/96.be6908d9.js",
    "revision": "95296fbf26bc0c6cebeeed062726d1c5"
  },
  {
    "url": "assets/js/97.397ff8e5.js",
    "revision": "b50488662abd32392ef56768b33f9f7d"
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
    "url": "assets/js/app.a10f1714.js",
    "revision": "800cda484f16066ae7f591b87e5da0d1"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "e750701c73ce838940fbc403c9ac0935"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "6297961f3a8ff72b004415c5ac789909"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "b95b29fd78c0afcbb0506298d761fd9b"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "f63906a95c032b492de8cb2ba8eb0472"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "3f4a1d903339d06bd295e20f04730b26"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "68f4f002e854f9fc7f4f2f9f3f1cb3e3"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "4950f7744f91d6e28996ba7821ba95dd"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "bfa102c05891e64abe6003a1dc5649b8"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "47e2e66ec1d3096b747ca727ba74b3f6"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "3b02818c8f5ff9fc378651f49024a44b"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "e1b87599d574439635fa51b0ee6ec40c"
  },
  {
    "url": "configuration/index.html",
    "revision": "19c503f07b189ea8ed35a661d478f302"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "8a9fffc5bbd698292f8bc55b6488aa3f"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "996c012625eb2c53705673b9edf1c6bc"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "b87599b3df2723b15a7ac47dbeb6e05a"
  },
  {
    "url": "contributing.html",
    "revision": "754563714d2c851f8205aa13c80a433b"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "0427edf0224a4c841aeb696c14ea0279"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "a0c9889926a5609d2f8d349dce4ea330"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "d8957812b5ceddf38642d9652369bc01"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "ec3b8f59339f431ae324fa520dbd9829"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "bffae88c40f93a84da32afe8754423d8"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "ac31ad9fcca69765e2b163748b8aba83"
  },
  {
    "url": "core-fields/background.html",
    "revision": "a37fe6001a3947b542fb4b5d85e3c79c"
  },
  {
    "url": "core-fields/border.html",
    "revision": "dd8fbb4535424929de5ff3c153f9b292"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "73b3c823c9a64c4ebd1a896ed69f8d76"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "413c3827836daed54698b54caa333cd3"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "becf41417e166545e11817cf063d94a8"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "90cd53a06b529c1bbcc42f78e44648e3"
  },
  {
    "url": "core-fields/color.html",
    "revision": "d0a6324c934c76982223db724eedb6fc"
  },
  {
    "url": "core-fields/date.html",
    "revision": "718d0aa0186ad839f08ff66d33c40422"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "5bb635eef63eb92c4b3dd84ba6b74240"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "e2260fc003cfbd0f0acb2932ec058cba"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "467dfea36691dc32be963610cf59d58c"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "6a6d8519beb03c73d2110c1ddd8a8e47"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "f0b4af2e5e6f7134f384eda1d39135d2"
  },
  {
    "url": "core-fields/index.html",
    "revision": "a9a8ca815f8a3fa1f3ea4038be3141e3"
  },
  {
    "url": "core-fields/info.html",
    "revision": "d9f5e0b930e5329f0a5f38b1d2dcb12d"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "5f5cb0ede7d6f1895215127d0d563c5d"
  },
  {
    "url": "core-fields/media.html",
    "revision": "277e19a8f35b7b0cc4249ea1f3053b9b"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "6c984c26b72393a3c0f6cd180f07fae9"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "55bc7d82e05cc0869dfd8d2fd263a3a4"
  },
  {
    "url": "core-fields/password.html",
    "revision": "df42c937f238e1972ed261d3c8c0edf9"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "f5ec60412b4af99b8498ddc810cb57ec"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "56e0ecc7c58a08683d22252e8d013dc6"
  },
  {
    "url": "core-fields/section.html",
    "revision": "53bd782834b28c0bf200bcabdc51d19a"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "d4db4093400b5889945d42a7efd589a4"
  },
  {
    "url": "core-fields/select.html",
    "revision": "db08cecb1577e6effcd779dbb1e878ea"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "f1143e26058b963ff34e9af43a2f0de0"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "5326e12979007d6156ece0c08304177e"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "b43187819f79800d35389510bbf9c5ee"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "e054b26917ff7fc5498a08eec1401ad1"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "e0f6ea939d6c9c936bc53f20e9ee7d13"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "f35c73bdef4da1de81d9531378e26721"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "73be0d6b9dc3c8052ffdc60a3f96f888"
  },
  {
    "url": "core-fields/text.html",
    "revision": "33c4bf6b493e763ac6dab563a0626854"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "5727507177a2b6f1a43e473a85fe39fc"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "47a07e0f35e63d0c816880586e9bbc7d"
  },
  {
    "url": "core/index.html",
    "revision": "3fa1669a556b3c4df4648a3dae271431"
  },
  {
    "url": "faq/index.html",
    "revision": "2664e50e4fce9697ef145b0e6b52b384"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "1b8841c77949006d463109c14cec7d05"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "1dddaacd60d7c3d7d9f18c422d404aeb"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "24867b723242fab89fbe06027978b2a5"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "feaa55f52c75aafd4be603b48914cf04"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "ed0c0bf4a30c887a95d682cbc8ff6307"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "10110280227b7d9f288c45959eb2427b"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "d991a1e3100d7ec35a289b7c9b8f9e17"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "b166765d99d73524fe6898eb38ce28e2"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "9dafbf83a7d18c03d50938ca34c9ece6"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "605db4a34b07b6807e2b5a5c49204d2a"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "4b9fc704454759beb2951a7089035419"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "77d6d7a91bde81cb6a0f77fbf26a20a2"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "6bcda7166a72dceb306859c56f2cded4"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "993fbca83666a1eb0d0558ad8676eea7"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "2f34db90f3ff9752de450a7caaf47ade"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "fff4b1099ab0d4805f9d03bc4c8db327"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "2a072d5d21bfaa7d82e90fd5b2f52aeb"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "0549330a30823394ca6683e4cc602100"
  },
  {
    "url": "guides/index.html",
    "revision": "fa4918d40ed09a7b760a076471d6705b"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "b1b6922fa81e44a0c07d370293dabcd2"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "1af668e43fadf26dbade300046e96156"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "1bb20ecf00c97cbc57589d69ad378291"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "7548a2837e65d5be45d23cdda91c707a"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "3a0e5448c1e36665690d140a288e6ee7"
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
    "revision": "d4cfafef605060611dad79f5f465020f"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "080758074691f6ca3468984cebbff54d"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "5ca3797806aac6ed335ca53a9eb11739"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "54daafb055694471daa1f52818100af7"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "1cef1c4005736da404f9f20cabd680b9"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "5983d9e8ee2a6f246a506724e392dbbc"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "b1c96ebc25be203216db547ed138cf2f"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "216e84fe4b3026edb26009ca0db5ef42"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "6d14481c42a2582a92d9312d582a9c94"
  },
  {
    "url": "premium/index.html",
    "revision": "2bbd7a5f850ed0488474002530335dfe"
  },
  {
    "url": "premium/js-button.html",
    "revision": "1341ea0bcd289c95b7ea6e6286621578"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "9d3c74e6e9dda2d01385633ea9e54bec"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "5d98f0a8c878b5e1cdd41ed49db115f1"
  },
  {
    "url": "premium/repeater.html",
    "revision": "2c831fdf5130b4e997233a9eb8ad0d9a"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "ec909bf2b04ac6b426950ed38413d216"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "d758494a1931c5ffcfef6434519ac654"
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
