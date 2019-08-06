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
    "revision": "cc958748a0a19ae050323fcf36bdc862"
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
    "url": "assets/js/10.6dea5753.js",
    "revision": "57b3fa9623c8fdc77b89a62878c27f97"
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
    "url": "assets/js/25.b8f96de5.js",
    "revision": "e2ea0a48e3b1fa51c9e7bfcb8249048c"
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
    "url": "assets/js/34.f9b7ff77.js",
    "revision": "638bddec84e69a9e1fe7b88958ced36b"
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
    "url": "assets/js/39.bd482276.js",
    "revision": "26fe8815bde619323447f769334c89b2"
  },
  {
    "url": "assets/js/4.b9e57436.js",
    "revision": "1858375b52f0ebaaed259f5adcb05ae5"
  },
  {
    "url": "assets/js/40.67f5213c.js",
    "revision": "c983c9870e07515745c6fbc938149887"
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
    "url": "assets/js/51.2069f215.js",
    "revision": "39096de3a368a0178ce2d3888b56c843"
  },
  {
    "url": "assets/js/52.1bd2a9c6.js",
    "revision": "62ab82adfe3b8a573267af0ad90ab79a"
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
    "url": "assets/js/56.db90f023.js",
    "revision": "112ad6cb242b1676ff1f2c024396aed7"
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
    "url": "assets/js/72.1f773b05.js",
    "revision": "d4169ad957d54af174d5923375567ab7"
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
    "url": "assets/js/80.6dcf378f.js",
    "revision": "ea01f4e35f361c4593f6c4da204abc7e"
  },
  {
    "url": "assets/js/81.cd2d79d0.js",
    "revision": "a73f713ba3bb6a07e8e9e222fa811ec6"
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
    "url": "assets/js/86.1347b03d.js",
    "revision": "cf8cdffec4df0db074a5f88f259bd124"
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
    "url": "assets/js/94.169c74a6.js",
    "revision": "e740f166743aedf9a086ecf477ad6ec7"
  },
  {
    "url": "assets/js/95.4d0e325d.js",
    "revision": "b08205ee9c0506d4981500071c75e3a1"
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
    "url": "assets/js/99.6ccb4c03.js",
    "revision": "50efb38f811bc7d4d42e3d38aa78a833"
  },
  {
    "url": "assets/js/app.f7ac9fa2.js",
    "revision": "634ebe56645a949234c3940eb812a64b"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "2a5cfdfb838bdef990ed10dbfc08b0d4"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "f41eb25c15b7c85dffa7829839458b4a"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "cfc1c6990ab3018004e1ab456a4373a9"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "68e32245f489898a4f06cf91c9fb3747"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "2f44a398d4ceadd982adddca8cdf2f33"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "56c1046344e54e2201925e586bba6a78"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "1985366999ee866744324b4ab2e0789d"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "bad128eee695d76427d839bcbfdff018"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "5a555d6d595c5d5bb3905c178a636404"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "e29601759dbcaa38c1e37c46a3308606"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "2c433347c9de592622297e7ffb520304"
  },
  {
    "url": "configuration/index.html",
    "revision": "7375fd5d17af0071d0d6a0f86b5ac10b"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "733a919733f36eb3664efae5d50e14d0"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "779bd1d022c25abf0e8c3bf117304c09"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "fdc09deb213012013de314d741c870ad"
  },
  {
    "url": "contributing.html",
    "revision": "58f195958be7df439faf788871c1d71e"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "a717f0024c7c7808fae67a9b18ea469d"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "a287d56bf5b5f63ae99dde27db573c6e"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "156c3712c3d5658c8a035d380b94068d"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "1e0c86c167838b3cfc57b20cf3c8e466"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "f314f7ab9a703e480abf4891fca6ccea"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "5caf498dd350bd0135f063ca331ad32e"
  },
  {
    "url": "core-fields/background.html",
    "revision": "ebe1ac4de69eac99a92362770cc779cb"
  },
  {
    "url": "core-fields/border.html",
    "revision": "e9603480618fba488a8a507644ac06ee"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "a0ae549aeb4fab0b27628b5786844d2b"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "16127c14b1338f59e6d975288b67195b"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "bdc1a8d4429ec026655358980f3b7b34"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "d3488c5f175df6003380af9d76b6d67a"
  },
  {
    "url": "core-fields/color.html",
    "revision": "f3c1ee01432edd19ef31a1de7d7b314d"
  },
  {
    "url": "core-fields/date.html",
    "revision": "1b68764830bac553b92df9dcdaeb29d0"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "2630dd82686e9c9b88133114a052eabf"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "0cc0d536fdec59200b0505ba9369eab3"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "74cc705d6071c19ab7028bbdcd3142cc"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "87a53512cb691000af4a1d51f3370503"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "6770fd8ca467c30c736a8b461d563221"
  },
  {
    "url": "core-fields/index.html",
    "revision": "5a67defb7bd2f268f66f54a539fe98d8"
  },
  {
    "url": "core-fields/info.html",
    "revision": "3b0a070f774a4284d0961eb328ed28af"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "9c878f442652a514c666d0b419ca3698"
  },
  {
    "url": "core-fields/media.html",
    "revision": "b6fd6148b255d6707dd8c240647c1a02"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "b6ba311b24fb6fa2d1c51c79564393c0"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "081f9884b41ce25df6ea1f78f2d88ad8"
  },
  {
    "url": "core-fields/password.html",
    "revision": "d0c04bea6593fa613964f0585af7d479"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "2c735ee130c24ec9de145720b2989991"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "df30851e29ef61330710228418ff0cd0"
  },
  {
    "url": "core-fields/section.html",
    "revision": "1de41ea5a8aeeb43ef92361f6f2c2cb5"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "edfc2ada3fb1117ea60f75fc15115a7f"
  },
  {
    "url": "core-fields/select.html",
    "revision": "6dafc26872472f2741c3374a2d989292"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "56964274bd8b02ebc149c9581d76e06c"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "942c055f8416cf22ada2fdfefe8259ce"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "ad1606042b519c751f40280d043e8b1d"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "e799611f980264edb92e4ae362a81f0d"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "379383d80499f8c269a7e6828122f7c4"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "7907295ce03445762803d578192fc585"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "53a6298a9e4ea424e2ee7cb0c397e7a3"
  },
  {
    "url": "core-fields/text.html",
    "revision": "7e1f93d1cdc3887142526e2dfaba2b57"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "36084d771390434f1cededc4636e6870"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "9c93b00b06a6e881186c03007d7a4c8c"
  },
  {
    "url": "core/index.html",
    "revision": "4809c36cef2fdf24deff55ef7af0237e"
  },
  {
    "url": "faq/index.html",
    "revision": "9cbeefa53bbb141173c117fddde4c1f4"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "9565af3df34a669acad0651a2c20d06b"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "e402a8acc830dbbfe77cc38d19c5c9fa"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "36f67984041d55a07c8cdadefd1af132"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "970a88d0b2740d36e1624cbf2d5cc2cc"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "3b61547f0796fc0128207775abf88327"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "b6a403521c7a5d8d1c427899d1f8f632"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "96c9ad60673039c7120c9e9bdaaa2b20"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "cbf343c8dcefd7702a1614804e3425dd"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "c0c3e010bdbe55d17a16a7f124fe80f2"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "e9d14507d9b1b77a4cd2f7b1e2aef1ac"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "0c58e6324075fc17ed38d47ac8a9ad96"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "9c8f250a80dafb9247ad3113d2832654"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "3d782082a2dc36bfa5b263feaf1c4abc"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "ca63113059d4b0219cdfab88dfb5f836"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "17897bd9bea5ea2ee1757b57c70abfd6"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "01bcf8154f8a46093fe75de5caec3104"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "3e1c7cbd2c65aeea9cadc7a2637ae0c4"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "cdef8aa02118ac34e6a4b27fea7379b8"
  },
  {
    "url": "guides/index.html",
    "revision": "a49f16d543863649f51392b295c1e3a0"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "f5bc04de0b8a822178cbd9b80911450c"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "25c4425b64cac210b207e483eed44e09"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "d7efee637c00da036b5542d852df1c7e"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "24e4fe13c25fade5ce435327b46788aa"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "929cd2fd61c6c29352bcea795a0d01ed"
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
    "revision": "6be65774062c4634971913a39fcca495"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "e1ba80384db83013325619e1e762c4ce"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "0706fc86796a15e15ba6e462e818f8aa"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "f09879485ff2c12fb22d9314d674c0b1"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "e204b1ad522f22ff4364e2daf8652fca"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "9a9819c14e69f1859f79856f414060d7"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "aa7d0228a83ee5ecc23b1c86a50dc2da"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "b801e7b3fa5b8185cd1cd00f8b3b1447"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "80ffbacd48166727233ec68ad4f3e736"
  },
  {
    "url": "premium/index.html",
    "revision": "44cecc48a136c11090f5101e14611e29"
  },
  {
    "url": "premium/js-button.html",
    "revision": "6cb53e9095537ad2fd76ccb60d1de750"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "ee0c4b9ab236add8010e0de62b10e744"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "55009ae0fd33e8ee1d7722276afa5011"
  },
  {
    "url": "premium/repeater.html",
    "revision": "e68442b66f020e338948214690eed4d0"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "63814539c78ed6fecd07f8bf86c195b1"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "786b3b4bbb8aca2d9d47d9be7180b111"
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
