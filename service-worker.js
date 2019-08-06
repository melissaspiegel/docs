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
    "revision": "8c5bff348038ea3a0fe6d3029937f78e"
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
    "url": "assets/js/34.78b866dd.js",
    "revision": "96ab16f86ef690c3c8ba4d1ebb447047"
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
    "url": "assets/js/39.9eebba4b.js",
    "revision": "abf072a358c17f66822c85ea1ab58c6d"
  },
  {
    "url": "assets/js/4.b9e57436.js",
    "revision": "1858375b52f0ebaaed259f5adcb05ae5"
  },
  {
    "url": "assets/js/40.e54d84f5.js",
    "revision": "a574fb087f78ead380d910822fc19d98"
  },
  {
    "url": "assets/js/41.7d857943.js",
    "revision": "c4283ed0197ef23420c1a45c92be8321"
  },
  {
    "url": "assets/js/42.58dcf43b.js",
    "revision": "7a3f2a3fc1098ac0b6a0a88a8406a4a1"
  },
  {
    "url": "assets/js/43.88d28c2e.js",
    "revision": "3add3f6d4b5e308c3af646f9e45e6e09"
  },
  {
    "url": "assets/js/44.6c037b6b.js",
    "revision": "3034d562332df118ce51877eb4fa35db"
  },
  {
    "url": "assets/js/45.481a89c6.js",
    "revision": "e2bb4f30af683eed721ac9f7c58da3f8"
  },
  {
    "url": "assets/js/46.3bb2331c.js",
    "revision": "90d6a6b6149561de29d1ea74551ce10e"
  },
  {
    "url": "assets/js/47.af3d869a.js",
    "revision": "ed1c7bca75eb56f149cd92fc1da7b6f0"
  },
  {
    "url": "assets/js/48.2daa0e8b.js",
    "revision": "acb0b1d79cd9cf40c82350b37fe71475"
  },
  {
    "url": "assets/js/49.041ecd4b.js",
    "revision": "1018e2999e977c7dda78c8d38b350f48"
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
    "url": "assets/js/59.25a482f0.js",
    "revision": "051dd6fe59909613b3ebf8cdc6eff127"
  },
  {
    "url": "assets/js/6.d7c31d1f.js",
    "revision": "1893633ba53173d145a1f411bcc4372c"
  },
  {
    "url": "assets/js/60.c5defc56.js",
    "revision": "753f8ab916b6eb0682ce9ecd27ba9841"
  },
  {
    "url": "assets/js/61.171e1b42.js",
    "revision": "8215258d2216ce66b406e124411a46c4"
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
    "url": "assets/js/72.cbd25026.js",
    "revision": "d39cb4743634463cfb436455162febf9"
  },
  {
    "url": "assets/js/73.a43b57f7.js",
    "revision": "d59476e543c8cf5e2f08ef442db0d604"
  },
  {
    "url": "assets/js/74.959ebf36.js",
    "revision": "182735de0be1411d5fe1cb292b4eea04"
  },
  {
    "url": "assets/js/75.8c2aa290.js",
    "revision": "fa562658487385d963d83989e051dac9"
  },
  {
    "url": "assets/js/76.722a30b2.js",
    "revision": "d84bac08f9848f643715a8f99decb2b3"
  },
  {
    "url": "assets/js/77.d7fcf4c0.js",
    "revision": "c7aec9265a3a559922132aa2fb524088"
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
    "url": "assets/js/99.3768ffd4.js",
    "revision": "1b48f1150966f287a5b626a645120ab7"
  },
  {
    "url": "assets/js/app.261d4ee9.js",
    "revision": "3e2225e022e53eb785b6282a5f9c2c9b"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "10d64ec1a8c49ed6dafbf68237be0681"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "2e30ae4ffce33ff5e28ee916b522fa60"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "9d2a45eaee135238de557b6e714efa56"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "ff9f25d36040d74512c15a9ea5eb335c"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "a6e6214d8e598027fec990151df7e744"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "b12c537af1e98563d0963ad11b9430a3"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "c24af6219ab6a1fe6e3a1349f74863c9"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "a71bab0db101b1ddbb682a03f99b28b2"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "850d3632d9e83755df28e2349ab885b2"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "c92bfa556bf7fc49b799ee4598facd8d"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "5f562637190aefd3029f887131ce6ce2"
  },
  {
    "url": "configuration/index.html",
    "revision": "61c6a43b9de5ddaee56ce1b5f4216eca"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "07a46daac40f9983dcf9efa2ec14382e"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "f38985c90a70bc93df031c8cbca9226f"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "b343644e92c829124eb447e1bcab0e68"
  },
  {
    "url": "contributing.html",
    "revision": "cb34b929826a2aa6cc49f92637499b5a"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "dcb8d5442845b76f2e61dc7bce4c0007"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "df99ea531039aa9be6d118c0254ac660"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "53e57b399e9bb748b624c58b2141cd52"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "3d5e9953606394306eb44ed6cfac35b6"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "3e70b84e38bf4980e00089e6a258a347"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "6e2a4edd55301057480d779f78ded2a0"
  },
  {
    "url": "core-fields/background.html",
    "revision": "565f9b7667c930e79b95ac99fee33afe"
  },
  {
    "url": "core-fields/border.html",
    "revision": "444e39f86155495330301e406d21d123"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "04f5b034dc2c140169655dec6e6bbfdb"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "e4c15d12282335a4152db089fddaa15e"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "ba2eafab6da894347e1520074077f0f6"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "428a00a1528702c51b2fbb4e561f1512"
  },
  {
    "url": "core-fields/color.html",
    "revision": "720efee9068e0203d279b0a1f9b0ee79"
  },
  {
    "url": "core-fields/date.html",
    "revision": "7220d4c9a39b8b608c9a27db588d0130"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "8624bba27c5c9b73c6d2774cba1bb898"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "7d18b932996e0ee952419b3f42cb39a0"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "bf725452bf44972a059b4da5d6ebb657"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "8db93fd9e0a25145c94b172ce39a6144"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "e43efd23f7eac639f78ffbcb13a7d7c3"
  },
  {
    "url": "core-fields/index.html",
    "revision": "f5fe4d5f49e54af299e4ba890a431482"
  },
  {
    "url": "core-fields/info.html",
    "revision": "1892f2f44f604de9109509d18769e61f"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "efb750f790b013613101cffa14e23d1f"
  },
  {
    "url": "core-fields/media.html",
    "revision": "8d7d3f2f883086ac50000ef99f376f40"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "3cbf49738ea804cdbf6d32c4154a5b9c"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "f08503860ab832b8543d009cde25aa5b"
  },
  {
    "url": "core-fields/password.html",
    "revision": "f469fce883d80b3c0938bd0b581590e5"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "ac7c18c633fc1d6094bb3fd732cf2836"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "38b65b8ca0f0a852c236c660a4b01933"
  },
  {
    "url": "core-fields/section.html",
    "revision": "1341d4f03d9e5ef5286e1c4bcacf5bb4"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "7400e1d55231a49401998a132a76613a"
  },
  {
    "url": "core-fields/select.html",
    "revision": "41910e2e31962577fda8ca5617a1719d"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "2c1156bef6245cb48acdb945777f3659"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "18d1fb70a09712453a0d65cab9487e1a"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "f06eee49379863153328086e09b83bc2"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "10c89d990cf1f99a983c04681a5e7697"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "4cf159c4ac96eabf8d2ed8de2a260597"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "ec78db643ee826231ce00b191fc8be25"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "9ce5e43bcc3f7467347aac8c66bf17e0"
  },
  {
    "url": "core-fields/text.html",
    "revision": "427b585d0a49f905b809816372abfb4d"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "40c0468f52ad281139bde4e30574a544"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "4228d7920e0350b011815acafc3ad762"
  },
  {
    "url": "core/index.html",
    "revision": "81cd67d07ebcb9393922c0f51eb34f2d"
  },
  {
    "url": "faq/index.html",
    "revision": "64b06146a8c0dc42c7b9325e71222f6c"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "c6ca5c4621bc920712264394d998f15b"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "00bfaf837d7c8a70bd0db5abea1bce93"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "2fabfa31c6b2348683eaa1db216e2a00"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "282309e48dc6b0dae122cd2d0e2c0848"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "c93b3c66d983d5a42da6b5b8832e0eb7"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "b63c09a339997f2e6d8e3491c85bcea9"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "de2040018a56b0ca8b01151c3888474e"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "2071b304be5fdebdcf29dfc6a3bfd1e7"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "ba33e3e7d674790695428a49e8bdf908"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "e43a72393872904ca03ae879a63c45cd"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "4b0f85977eaa5769bcdea090a4f47c78"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "faad3c789c40de49a50cc05f0e0710c2"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "6d37c8e63697a9554a27f93ec94d5fa8"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "f2eafd6f885aab99b979b3b0e1bfacce"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "89bd55a1a3eb4888995c6b36003b2cb5"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "eab700e0a9e485dcb9891480ad26be66"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "6b2639addc40d73c548f9df7ea86d364"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "b0fb29ec76e5dd454089c0099352eb0a"
  },
  {
    "url": "guides/index.html",
    "revision": "196b1ceb41b106ee5ec8efc088e70892"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "43e84cc38296724285b357ea71ee889d"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "a0f76e5218dcd06092a7750ec68cc7d5"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "404c6cbc0b6c0458b7ec03866878933b"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "fbaf8774502c94d35def6c338f770335"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "dcf168ae7c4f1aa2f1275cb46e81efe6"
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
    "revision": "1fca140101362bdf95611baa2a4d11e9"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "449c17bff7a16b6cfda8516b9dfcacb6"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "e0e61875bf618447591d90b5d61e5114"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "bc19dd73cf07ab1c519041a5d0c3a3f1"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "39a4591d1772ae5789da8e907d3c3331"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "9afaff083844e0d975592b7f1ae326d7"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "886c12ad8d059c0dbbaf89454d85bc85"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "067a0f4197a64ac4bb6c36539d660998"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "ea12f1a2ca156ac5f7ddbf3dfb41e74c"
  },
  {
    "url": "premium/index.html",
    "revision": "174cb32fe937d85bcc7d3c7e79b77fe6"
  },
  {
    "url": "premium/js-button.html",
    "revision": "651c5756eed1ac9a24842b36f86fbc7a"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "6f68988748e48975c51db9165d621f7a"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "453ce76dda462f48a4fcf8cf02e487e8"
  },
  {
    "url": "premium/repeater.html",
    "revision": "e2e501d970239982129271e2668d5635"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "ec4f0a08fb98b85044408c8183df1d0b"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "782706998255cf912061cf9264bed396"
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
