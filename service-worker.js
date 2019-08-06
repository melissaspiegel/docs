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
    "revision": "2dff9c0703393f8a8791f98ee63e2215"
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
    "url": "assets/js/11.87ff38b0.js",
    "revision": "238cee6c2e58e96235ced27cfd8e5fe0"
  },
  {
    "url": "assets/js/12.16c968b1.js",
    "revision": "4fec171207287118123cbd1bfe069658"
  },
  {
    "url": "assets/js/13.78bab24c.js",
    "revision": "d519c4c7ffb66a04b55e1e8f752b4138"
  },
  {
    "url": "assets/js/14.bd1a5eee.js",
    "revision": "d24d16f99e36a2dba216c011ea6a9021"
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
    "url": "assets/js/17.96675b47.js",
    "revision": "0e7e118b48d58aff48cbbb81390ecb1b"
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
    "url": "assets/js/33.6d701ef0.js",
    "revision": "7d40ffb515e855b9e63b1727c76c9bf4"
  },
  {
    "url": "assets/js/34.95218ea6.js",
    "revision": "3f1ef70dbdf0fb70715df06642acc89d"
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
    "url": "assets/js/39.c8fbdb28.js",
    "revision": "048d2fcaa960dde003ea4f5dba30ff2a"
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
    "url": "assets/js/41.1ce34bba.js",
    "revision": "da19e376d602b8249dd17b1942be5d6d"
  },
  {
    "url": "assets/js/42.42572d53.js",
    "revision": "5ecc4cad3b6b471452e759afb156006c"
  },
  {
    "url": "assets/js/43.a124a423.js",
    "revision": "c59c6bb58552906272a0a646c8d69b20"
  },
  {
    "url": "assets/js/44.5acf42ae.js",
    "revision": "e6092b424718cd957d221c8c399313ef"
  },
  {
    "url": "assets/js/45.0655412a.js",
    "revision": "22b6fa5ebe397eb9c374c201906727da"
  },
  {
    "url": "assets/js/46.b9c9fe1f.js",
    "revision": "4a541f36a1275aa07b08cba1980be542"
  },
  {
    "url": "assets/js/47.10b164a3.js",
    "revision": "7af68bb900216a746c5b2017f16e14f2"
  },
  {
    "url": "assets/js/48.311324a1.js",
    "revision": "9e5b5b30fc8db4b25fbeeb7aed8b7abb"
  },
  {
    "url": "assets/js/49.a9828fcd.js",
    "revision": "7b3f642c414a161ac1c831497154fe39"
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
    "url": "assets/js/52.55a965eb.js",
    "revision": "90727d4d897aae12b3cffb4f0de3ed5d"
  },
  {
    "url": "assets/js/53.a0ab2ae1.js",
    "revision": "7e29ff88b77e6ed25dd708ccb5230940"
  },
  {
    "url": "assets/js/54.d0ef547e.js",
    "revision": "2bcd75181c93b771597ed4d19ccf7433"
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
    "url": "assets/js/58.ba881bcf.js",
    "revision": "af236c48dd01cccebba7df5e6b346145"
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
    "url": "assets/js/63.24bfb7ef.js",
    "revision": "c9beadbfb8aacfa9d1ef4b8d74ee7ef1"
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
    "url": "assets/js/73.9bc12e02.js",
    "revision": "9faa98f02dfe72b0215ad20f253a348d"
  },
  {
    "url": "assets/js/74.ef5b3aa9.js",
    "revision": "9e41dee052af5a1919c76f811e00d5b7"
  },
  {
    "url": "assets/js/75.a53659f9.js",
    "revision": "fe20169df5014e3859e301ecbc125e4c"
  },
  {
    "url": "assets/js/76.71779c5f.js",
    "revision": "4c182d58e656b53bcb15bb20f6e945e1"
  },
  {
    "url": "assets/js/77.5aa17e12.js",
    "revision": "1b4f1d8cfaf28dcd3f9d39796bcede26"
  },
  {
    "url": "assets/js/78.534f38b5.js",
    "revision": "a967cbf65296c350363ff31d68313ecc"
  },
  {
    "url": "assets/js/79.9fcfc7b7.js",
    "revision": "8abca39c4e7afd9ae4c0fea5781e1263"
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
    "url": "assets/js/81.47f5f640.js",
    "revision": "592261064c756bf36ea28502ab0b2a90"
  },
  {
    "url": "assets/js/82.8c6f5e4c.js",
    "revision": "702d744afbe0535f8cec6506ea209d93"
  },
  {
    "url": "assets/js/83.bab1f936.js",
    "revision": "3d9b6674902b96ac24fb2f78ef392faa"
  },
  {
    "url": "assets/js/84.779f9a74.js",
    "revision": "0514836b92f83e779230dbd393fa3651"
  },
  {
    "url": "assets/js/85.2e29f924.js",
    "revision": "afd6e268f47e0deaa53bdf2d3b5f223c"
  },
  {
    "url": "assets/js/86.f40f36e8.js",
    "revision": "2ab095d06d3bccad7f44bde0abd30019"
  },
  {
    "url": "assets/js/87.decf939b.js",
    "revision": "4969cb26caee64e92f3b90f405397607"
  },
  {
    "url": "assets/js/88.56f45a57.js",
    "revision": "7796894af82f70e0e0cc776ad94e183c"
  },
  {
    "url": "assets/js/89.4126ad41.js",
    "revision": "1ec2fb59b3e30eaf066a1a44afe7ed39"
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
    "url": "assets/js/app.24fef1e3.js",
    "revision": "da76eb99924aa58dd3221fc5f1894c8f"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "a4da093b6e0b50a3718aeba431c48b7c"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "67289b0c49beb7705675adac93313e3f"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "8f90481224690b47fdcee1200ba8505e"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "70d468085b202aa3e45b80ad872025fe"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "877c1417fe0291513dd6496427fcbc8c"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "539c80b7573fdd9c7cff217fb985255f"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "c9af9d11e7a970cb4492f2af6b30da2f"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "7f06a8f66ee97782c96d8e0b80826f00"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "6873026d11376fdfe6bdb60294e9e4ce"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "8ee5afe4aa7518d094c5b53d5be34efa"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "90f91ab35176c82c8e7a98efcc570cc6"
  },
  {
    "url": "configuration/index.html",
    "revision": "5777cc70b604485c929dfd5b5b0e5e60"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "8e50b52d865643e72cb0111d75019584"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "9132c3749df3ee46545ac407f9878cfc"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "0b749323800260609dae33579e9d7077"
  },
  {
    "url": "contributing.html",
    "revision": "063227e5c575cfced17fdcfa4b3817f8"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "17bc8e975c05fd88dda5b74f97262dc1"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "58f8a48c4fa1ad5fa8b58745044dbc6b"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "131072030ae85ae7d3f54139f8892f3f"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "4d2935f986de9e0e44cf22fa40a461ea"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "622f0d3f1968432417e58c4377f3618c"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "2e383676000d6f0ce8ea67d71202d85d"
  },
  {
    "url": "core-fields/background.html",
    "revision": "244cf67ea97c02a9615e402b292a3c1f"
  },
  {
    "url": "core-fields/border.html",
    "revision": "c491a02573c68fbc17a68ffd42b307cb"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "1c100c0660754de7e543af45c63c6588"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "a7b44232ea6affc3fd95b9671f31faf4"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "a50fb56de254ccdb17475b9c1ede7222"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "f2c4b7b7688bc4e5d473608cb92d0345"
  },
  {
    "url": "core-fields/color.html",
    "revision": "00e8897198becf6f37c0865eaa061c7a"
  },
  {
    "url": "core-fields/date.html",
    "revision": "ee1c4f17e04b5e4f425cdbbe4bdb45a2"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "a08ca40cf555ee75261494d1bf78765b"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "29e754a35e27b7fbd3b1b15a92b6546f"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "797482e480288213411d8b08d68b3a82"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "977f4a9371b5b06ce4afbfc9567b07d5"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "7c39f413574b4741df3a4eca5a6b1315"
  },
  {
    "url": "core-fields/index.html",
    "revision": "bbec7cbe2b9ffcd8143b808bddfa773f"
  },
  {
    "url": "core-fields/info.html",
    "revision": "49f93e3c1a63f0fc5b8e1c574e9f9a1a"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "c9bd6e45cb166b3338df0d203c8c53d3"
  },
  {
    "url": "core-fields/media.html",
    "revision": "76fe03e416c1dc53513b477db997f1c9"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "d1832f721ac5bfc440e6372aa4fc85fb"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "e2c3cafe1e8d31d81d7c11fd3748b41c"
  },
  {
    "url": "core-fields/password.html",
    "revision": "f82d3626b7cd046c183e5657bcd05448"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "62e9de4d127b4143a6ab9c3352827a9e"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "de237f81e1259c5dfee5dda91b48d394"
  },
  {
    "url": "core-fields/section.html",
    "revision": "6baf028e1a18b0b878a2ed8f485ce5ec"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "f4cc6252dd656030a711df16ed4768bc"
  },
  {
    "url": "core-fields/select.html",
    "revision": "19354ad5368616861b29d28412822623"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "a63abd351c02938627286970f087f1a0"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "c9ef8a1c926b4593cd702013af0cc519"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "b6f6cf230f8f8ed4f446f8395d17ff44"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "88c9056d62bded2fca1dbb29c2c3ef93"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "5e7f565cffe192e6fc7d894151f20153"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "e45e626ac7b19f11e83454dda3be7372"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "3b9cd3f00721421b4f5582728e9755ad"
  },
  {
    "url": "core-fields/text.html",
    "revision": "eaeb1af89743719813bf546ca331a1cd"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "95cc0f7c14e29f8b097453e4cecc308f"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "da22fa219fcaf9438931d7946fa218e6"
  },
  {
    "url": "core/index.html",
    "revision": "3752c7621a42ca514e634557e330f564"
  },
  {
    "url": "faq/index.html",
    "revision": "3c21452aaf5674f5aa471df45c8a0a0d"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "4b72a5474431fcafb9b4e785e1c102b1"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "c06f046cbc07c790397018f69c776679"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "26f6bc860be50a75e916e8907c445339"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "f6921310a7e917664be56dbbdda23481"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "e4846565efd3de549203cf5fe7a0a869"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "e8ed0f9cf34d0c93028ce008edfeaf99"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "a6454aac51ca1b1a6dcc2c3cadf0c8f1"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "16a3c341b2c90bc5b146cfab3baec669"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "e2a893573869ccdf8d2bd64577849aad"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "d8a9cee37a90a95660d53f5d1c2bd1d5"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "faaee3a751714cc391a17007164a28af"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "ea5c374c0ff0d5a66b1e4da07c19f668"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "c441fbb156130d2d7189de94849454f7"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "71f93f1d1094d61786576dd0f6414b53"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "4c2a3a1a22ac822e529782d6cc7d9b0f"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "cb3a717921b8bea8cf331bc4948736d4"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "2848bf3e74c61d59dc8e887b9c8bc038"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "fcb8e6743eaf467907ba39e50fd28cb3"
  },
  {
    "url": "guides/index.html",
    "revision": "892b153d25f88482eb3c12b3906b6521"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "0ffbaba4865ba9b5414a6c3713325097"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "c44f62b96f0d67849518bc1025a85f12"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "6e4e1bb09178dfc6cbeef34eb12d5ae5"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "df10d20f28f49535c817cf41d99b2f1b"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "4cc18708d49698a1ad066cf71c4fb5e4"
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
    "revision": "b4ea3e45b8a9aa32b17ab5a90ee53b10"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "6a0d126440bb0ffab237e3619882edd5"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "bc36b7ca248c762bf3a239bca98250bc"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "5e3a93ca97618abf7c3ba6cc8cc2a39c"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "f7c034cbaee19df62dbd56bfe610bbc4"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "c7d61b75af0277edd8a6598806676609"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "d933fb51c7544be2fef624f8af4908d6"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "4276f4399943895428419d423253eaec"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "833e599e95145b65aca2b8bd72a6c9a1"
  },
  {
    "url": "premium/index.html",
    "revision": "73f3eccfc15b1126c9f708fdabfe4c8f"
  },
  {
    "url": "premium/js-button.html",
    "revision": "1f624cc1e7cd8d330ecc8f34e15440a6"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "173c00dc0ed1b4f897dcf33fa7c34694"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "a8dbaa24f3d861a74edbf31bc30f712c"
  },
  {
    "url": "premium/repeater.html",
    "revision": "fe06efdbe81775efe2c51a709a183751"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "d88b4a13eb38450394f20a8c6b0a800b"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "1799626064757d2a5571c5c8b51ae04c"
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
