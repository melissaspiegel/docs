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
    "revision": "7e4dc4a9968b707cbfe0d8080056f2fc"
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
    "url": "assets/js/100.4bb1549d.js",
    "revision": "be50ab4f03fb21fac877603d7cd56ee3"
  },
  {
    "url": "assets/js/101.4f32fb3d.js",
    "revision": "943511430316a728632a90be24f171f0"
  },
  {
    "url": "assets/js/102.18acc32a.js",
    "revision": "7623a7c848ec2fe8e13a3a9f9a7e799c"
  },
  {
    "url": "assets/js/103.7efde5d8.js",
    "revision": "ab009c3ba8794013c485c2af59d311f1"
  },
  {
    "url": "assets/js/104.1aff28e4.js",
    "revision": "ec1c8e504f633ebcd3a4d1d011a44362"
  },
  {
    "url": "assets/js/105.c6e412dc.js",
    "revision": "c303c7aed3a6b2edd9741fb2aa2dd874"
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
    "url": "assets/js/14.b463783d.js",
    "revision": "c6823d4858e661d21efb51120bb9f4b6"
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
    "url": "assets/js/18.76874e0c.js",
    "revision": "85e0f09510f4d7e95a973cbf6dcf2e8b"
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
    "url": "assets/js/25.3c57c383.js",
    "revision": "dc5a603cafdfd4115dacda0294ee3975"
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
    "url": "assets/js/33.6d701ef0.js",
    "revision": "7d40ffb515e855b9e63b1727c76c9bf4"
  },
  {
    "url": "assets/js/34.ebe722da.js",
    "revision": "a8bc989e7b2dde90fcdbd60fb35566e4"
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
    "url": "assets/js/39.84e395d4.js",
    "revision": "c402ce49470e0c52abf8b4416c211481"
  },
  {
    "url": "assets/js/4.b9e57436.js",
    "revision": "1858375b52f0ebaaed259f5adcb05ae5"
  },
  {
    "url": "assets/js/40.6f3ef109.js",
    "revision": "40848a9746c059790fd2250639f11fdc"
  },
  {
    "url": "assets/js/41.581c86f7.js",
    "revision": "d1a639d0a26d93a561e96ff7b9280fce"
  },
  {
    "url": "assets/js/42.f2b3b1b6.js",
    "revision": "aadf907750a8da636d534ecaa0732421"
  },
  {
    "url": "assets/js/43.9c8af43b.js",
    "revision": "0022b889e1ad09772f37bebb5dca0bed"
  },
  {
    "url": "assets/js/44.0bb921ec.js",
    "revision": "14f9f24a37c5c54590bc070d52c86d5d"
  },
  {
    "url": "assets/js/45.82c06af3.js",
    "revision": "9c45475c30f691129b7be73c94c38144"
  },
  {
    "url": "assets/js/46.88dbc7b4.js",
    "revision": "aa3db67ad560744c47d6c9394795f3e1"
  },
  {
    "url": "assets/js/47.6cd91efc.js",
    "revision": "b43463f73cde0e5f8205785965e9ba12"
  },
  {
    "url": "assets/js/48.56f5fc4c.js",
    "revision": "79de62556bb7c12b29f216308310ef1a"
  },
  {
    "url": "assets/js/49.dcac939e.js",
    "revision": "4526e02fc03c7f0c869b0f113cbe61e3"
  },
  {
    "url": "assets/js/5.6de79308.js",
    "revision": "36febcffc5f503db2df02b09d493d666"
  },
  {
    "url": "assets/js/50.eba6bdce.js",
    "revision": "d4e04a8373aa31cee8b60fb741564171"
  },
  {
    "url": "assets/js/51.6a8b7534.js",
    "revision": "b75d478f7306fec046ba0a78b3e81d94"
  },
  {
    "url": "assets/js/52.3bdc8b38.js",
    "revision": "a4120e8f48c4f9282f5e7aa510f07108"
  },
  {
    "url": "assets/js/53.bf0abc20.js",
    "revision": "2cb6139e7f611cd8fc7094b68a519094"
  },
  {
    "url": "assets/js/54.2f7e2813.js",
    "revision": "e1babf457f36174799225295766b7474"
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
    "url": "assets/js/6.c69ea96f.js",
    "revision": "4f936e2fb8c93df8e674bf86f7ed1b71"
  },
  {
    "url": "assets/js/60.214829e8.js",
    "revision": "ab5976e8869b7fc8bcfa51d5eb764215"
  },
  {
    "url": "assets/js/61.dd48deff.js",
    "revision": "e4cf52b930c951f2e8f80002c15816de"
  },
  {
    "url": "assets/js/62.15f97c70.js",
    "revision": "739e85fed501a744cd4c33d48ee70f9a"
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
    "url": "assets/js/66.e9aa17af.js",
    "revision": "7bb88dabac92a10d459576f3cfb99c40"
  },
  {
    "url": "assets/js/67.14e49308.js",
    "revision": "97729302b159fbd35d05ef2bb9d20810"
  },
  {
    "url": "assets/js/68.b88840d7.js",
    "revision": "ad93db5a0057ce33b3c8052f696d2556"
  },
  {
    "url": "assets/js/69.6480a81f.js",
    "revision": "aa9f1ad8d6a3a4a1d7b75f2a5cfadf2d"
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
    "url": "assets/js/72.3a0e1f16.js",
    "revision": "f5b85520ec70e9041df5a3e544d5d85c"
  },
  {
    "url": "assets/js/73.9bc12e02.js",
    "revision": "9faa98f02dfe72b0215ad20f253a348d"
  },
  {
    "url": "assets/js/74.959ebf36.js",
    "revision": "182735de0be1411d5fe1cb292b4eea04"
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
    "url": "assets/js/78.534f38b5.js",
    "revision": "a967cbf65296c350363ff31d68313ecc"
  },
  {
    "url": "assets/js/79.3146d710.js",
    "revision": "958c91ff8fe7a9cf45f326602da62d0a"
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
    "url": "assets/js/90.9eca67ef.js",
    "revision": "1bd36a34efcdce52029ba8c4236fecd8"
  },
  {
    "url": "assets/js/91.d5706ff5.js",
    "revision": "3a9c3430ea11fbe4d7c7d8dd2b771e99"
  },
  {
    "url": "assets/js/92.d2d694c7.js",
    "revision": "d12ca9d6e2f67710c5d2482b15a275c9"
  },
  {
    "url": "assets/js/93.0cf63e0e.js",
    "revision": "c1150855acf57453156fba14e74801b4"
  },
  {
    "url": "assets/js/94.bca5e366.js",
    "revision": "04fc14ea7ee6222c40c7c0d00683b3a5"
  },
  {
    "url": "assets/js/95.b4b05c07.js",
    "revision": "084814d88f72e1d385acb22b8cc74ccb"
  },
  {
    "url": "assets/js/96.20151eda.js",
    "revision": "558ac6616ebac7430f8e1c4cec011629"
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
    "url": "assets/js/99.6ccb4c03.js",
    "revision": "50efb38f811bc7d4d42e3d38aa78a833"
  },
  {
    "url": "assets/js/app.9bef93c4.js",
    "revision": "2cc511219556525a7e749eafa19482d9"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "67b03cd35fadda300cfcffbd9e78a66d"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "3cf3f23675bb886d098523675f15fc26"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "305a6ae3ef23b9283e2650c89db4718f"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "6eb78329b48150ee9ac4febe2482c855"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "2e1850e8c98b652477a8a122ac4eb76a"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "e83374087a62ac598b7cad5889f13e51"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "ca5fb5d21af542484b05f2c4f5b90095"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "144bae585dffe853794d894fd237b61b"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "370716158d39979621c79ee2d56216b5"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "da6ee9a20fce6b18a5e9e9bedd69bb2f"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "1be59d5e4772cd2cd04c5ae36169e705"
  },
  {
    "url": "configuration/index.html",
    "revision": "b5be237061c5a5b1edcfc829b139e64c"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "e75c0dc132a2db03a61a0cb1d8276a2d"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "ae29d2a9f08c16a87cf7523808b49cb1"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "7e805eb49a87acd2f71e321c29c05e1a"
  },
  {
    "url": "contributing.html",
    "revision": "ad37d97041534e27f2eecb5f4e078ce3"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "4357a625cd514d301a102616971b31d9"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "bd8269d5b1cb0f5d6eedf1b0a7aac283"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "7655ba917a33b11497095020089c3f47"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "2672a423dbf0435ee93b744a5c2c63c7"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "5bd1cf03f86f154bb57fb2e526e86b51"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "a66f3c8b2d3797c0895c602403df2cb4"
  },
  {
    "url": "core-fields/background.html",
    "revision": "886bb8652abd476f6a4abee21ae4b5cf"
  },
  {
    "url": "core-fields/border.html",
    "revision": "edf595f5da58dcd14ddf9e021910b1ed"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "f05b710ca5767d730091bdc598e4ea7d"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "94020ed1a7b13ba24a1bd245ab576f43"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "fd9a4ef207467a5e9bac01945203976b"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "a1c9664d448b1647aadd4b99d951dbfe"
  },
  {
    "url": "core-fields/color.html",
    "revision": "9552a631e59bca351b79cecf8f924e18"
  },
  {
    "url": "core-fields/date.html",
    "revision": "6d2ad3720afc1ad1df1dd52ed874a601"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "cfb1463aa59510766293804b758fe7a3"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "6c31be753c6e0a23a95188e09bb20788"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "02d4cb35a72fd6889c461c682a2b214c"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "f66094f33e85509a7431415debe2bd67"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "c8002fe081ae23951030dabafe6d2e5d"
  },
  {
    "url": "core-fields/index.html",
    "revision": "c168b0d4388905952dc227bb8f255ec4"
  },
  {
    "url": "core-fields/info.html",
    "revision": "5112fa27dcebdc4e46e5e1e767821d1c"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "56c00e911b7258d6b26fd8dc957b7f45"
  },
  {
    "url": "core-fields/media.html",
    "revision": "d616b000ac101ca2a7003de3abcb4ae9"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "ec9bcce5ed074c5938660cdd26c0cfc2"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "523ce949d70fc6e59bd16f15cf3b5c63"
  },
  {
    "url": "core-fields/password.html",
    "revision": "bfeaa1e51f6d0b82bfe69915c16c1b42"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "7856b0ef905422ed18d699cc6ecb63ca"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "629deace1606a113cedf20fd00a8b047"
  },
  {
    "url": "core-fields/section.html",
    "revision": "e734bb120e61b4de124fc51f7373b26f"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "3f8acbb333bc443b0fde68125e003bf1"
  },
  {
    "url": "core-fields/select.html",
    "revision": "9b4c57c89e4ee57022eda2ee0215b8f9"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "e767f6c258f5e1ccbdcfa24e24342472"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "3ddba85de762afd3c95a783231a8688a"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "edeb4bc766e4d4bceed1b5083357780a"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "31b49d7a1f174d894d599b36b61a13cc"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "5b6286e728bfd18d2584af023c2f8f98"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "cf02afd1b9fc438f359b3fdc30707346"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "81d188e33b060c4909959dd7fa1e3ee0"
  },
  {
    "url": "core-fields/text.html",
    "revision": "511abcc2e912b1389cb9f587fbcfd195"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "db766f3f065cef189214e91cd1935e9a"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "3b5e6d4f4af5b77350bddb595fbcf0c7"
  },
  {
    "url": "core/index.html",
    "revision": "de4b62a0c1080e857998516b523100f1"
  },
  {
    "url": "faq/index.html",
    "revision": "33672a25be64bcc1443b09efa1ed1c77"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "883aea3e74b5bb4dbaceca88dbf06e88"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "4072661a57202e53459bbcd395336685"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "46d4f789e3efa90fad50dd3920c3a4d4"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "daf3b336d444a3d827d215026055907e"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "4e14703185b89fba00d972fe70376eab"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "469c42aeab2f50ed39f682eea21a643f"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "0861ec4bf58647d577526e6a2b9673b5"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "52cb9f48a78c2bb2279e179a46788f52"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "f7ffee0e94cc3c7fa05ee7b05873a45f"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "cf26501346c34e03049d7e68a007ca68"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "318c46bd8cd9f05ff7523e5187cada2a"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "6b090a5560f78ef320c710dc8636399f"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "7f320eff94c25428f888785676f68405"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "f1bd4d192f1f56fd4fc172f0ba15bd7c"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "d0afdf89b578281542b1d6ded28ce00b"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "27cf7f92922b20527ffa7a4e3f72d17e"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "aca200b97aa18e6e9f741c2161ad864a"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "0e5275814fc7c84a7b4db04e63e0f0c3"
  },
  {
    "url": "guides/index.html",
    "revision": "0a96bb4802df779f51be939ba8bb8136"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "d4d14e9a2c73c046b8a1ba6804548a2e"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "ab6953625335ae70ea250291b00f22c1"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "b3106ef5f869c756c28a52901e1de5bf"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "6c1b8f45672e536f8d0791f5b77ac15f"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "94e631cdc8ad57528e02fc6b7f0b62d8"
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
    "revision": "370f569bcb545969d5a939209a62e070"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "19982f384e522fb6d6077a87f99d5441"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "54dad81c7fd5dcab31a6299114df875d"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "a25e61be95833a7a5bef799224285c07"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "08d514d46a29abfb448316149bbc5de3"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "d3819c289997fd337823e75d70328443"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "7da3b6c4c6ede55c94e060850209005b"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "9b8a88335c0d63469b7a801cbc5cc3e9"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "e26f37ff090af42a18dc6b40db314ed6"
  },
  {
    "url": "premium/index.html",
    "revision": "4ab4b303add55231197d763d3399f783"
  },
  {
    "url": "premium/js-button.html",
    "revision": "dbe25e2fca423116986dc1e0b3ae459b"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "ebe9893b3b92b6a060a63d8617dca3f2"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "bdb74036b2b25659735de4c829a2b746"
  },
  {
    "url": "premium/repeater.html",
    "revision": "2a97d2904861cb9ee1ca62087b2eeaa3"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "a4357b629f6bebb7f9c20698eb298fe8"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "c1214cc7b1326574872979933826b3cb"
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
