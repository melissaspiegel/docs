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
    "revision": "a6a04ae238b9bd0a6001a677a5e1dee8"
  },
  {
    "url": "assets/css/0.styles.4225ad4a.css",
    "revision": "0d801753ab68e0fde7b70292a6b11a49"
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
    "url": "assets/js/10.3abde9b8.js",
    "revision": "1bcb910bf4063338d82809a7252b60c9"
  },
  {
    "url": "assets/js/100.8197c5c8.js",
    "revision": "0dc86970be157aacb498d88171b5fbef"
  },
  {
    "url": "assets/js/101.172de47d.js",
    "revision": "e626bb59b4e632bafd669d8217d43049"
  },
  {
    "url": "assets/js/102.e2e301a7.js",
    "revision": "77fdf188a99200a5e630b40bf72e3ca9"
  },
  {
    "url": "assets/js/103.8714d237.js",
    "revision": "b2530eaf58737dc9bcb4c969d17a721c"
  },
  {
    "url": "assets/js/104.6f31908f.js",
    "revision": "2054fdeed9313cd9064b8d4753da9525"
  },
  {
    "url": "assets/js/105.39cb6792.js",
    "revision": "14612ca4cb9dd02ec21bc212dd750887"
  },
  {
    "url": "assets/js/106.f11f03ac.js",
    "revision": "2469352fc136023c10a6ff5f65d7b53d"
  },
  {
    "url": "assets/js/107.07c1faf4.js",
    "revision": "ddac64c6f5de285f17d08f9740458945"
  },
  {
    "url": "assets/js/108.09b8b8c4.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.ab371d23.js",
    "revision": "39d20c24338822e961a62091d97ac51e"
  },
  {
    "url": "assets/js/12.8c8e8e44.js",
    "revision": "9b1321d2b3a70c805fa75430901deb5b"
  },
  {
    "url": "assets/js/13.1931309a.js",
    "revision": "e7cc1a6d9709d823a7dde360bc6f0a74"
  },
  {
    "url": "assets/js/14.205ec653.js",
    "revision": "324508b06d3d9bf0981dc7337725d0f8"
  },
  {
    "url": "assets/js/15.7b3a6d47.js",
    "revision": "cfef3e05f7717c69505c517587c347d2"
  },
  {
    "url": "assets/js/16.deb808ab.js",
    "revision": "be92f8df889e61cf3cfe3e04b61304d6"
  },
  {
    "url": "assets/js/17.68f5bace.js",
    "revision": "214da9eb4a99e8c338dc5673e1c986e6"
  },
  {
    "url": "assets/js/18.5982f65d.js",
    "revision": "f8c68421c4ac504988db0f90d7c7b708"
  },
  {
    "url": "assets/js/19.feea9b7b.js",
    "revision": "134f7da9326baf5be11d4d8b044c1de3"
  },
  {
    "url": "assets/js/2.58297af4.js",
    "revision": "ba8dfaf32755d1617787703c8d26ddd3"
  },
  {
    "url": "assets/js/20.8e1a080f.js",
    "revision": "d4f99ff56ea7a99e1caac27b1cf71337"
  },
  {
    "url": "assets/js/21.d80f9b20.js",
    "revision": "03c8e7091bb9d4c4ff45ca3c651c568e"
  },
  {
    "url": "assets/js/22.8f3746bf.js",
    "revision": "fe4c7cd7b23611f4a67bdd8ddde0b8ab"
  },
  {
    "url": "assets/js/23.da209aec.js",
    "revision": "2ed476f8f7f0e28a0774039c23703b39"
  },
  {
    "url": "assets/js/24.320e8d09.js",
    "revision": "919612fe35e885a5fa4a7a3e2642f14b"
  },
  {
    "url": "assets/js/25.1da28e1e.js",
    "revision": "a35cdea4a85c6509b964283db50bf856"
  },
  {
    "url": "assets/js/26.3fa3d466.js",
    "revision": "1fa753ea358ee052089cf941bebd6ca3"
  },
  {
    "url": "assets/js/27.dc39de15.js",
    "revision": "390ec474b79e7822888676411e538ab9"
  },
  {
    "url": "assets/js/28.2e5d23de.js",
    "revision": "0d6ddba5cf2a17230dfc692cf343f22a"
  },
  {
    "url": "assets/js/29.d0639587.js",
    "revision": "096ee3c1caa323bbbf545118dc62291e"
  },
  {
    "url": "assets/js/3.2597882a.js",
    "revision": "59d4d58fee05c32d0d0738344d7f1349"
  },
  {
    "url": "assets/js/30.4a9376e3.js",
    "revision": "e4660b1c54c43b2011041737df40cf52"
  },
  {
    "url": "assets/js/31.2ef0fe19.js",
    "revision": "402eb7d2417215f4a5b10eb040bdf667"
  },
  {
    "url": "assets/js/32.d5cc9b09.js",
    "revision": "a7ba95b5a6bdf4f74ec2a64e2f12abcd"
  },
  {
    "url": "assets/js/33.4b7aaffc.js",
    "revision": "becdd55f1aa10f079855e4d93bc2efde"
  },
  {
    "url": "assets/js/34.3d212c9b.js",
    "revision": "a01a376030514db0231dfd1455ef70c2"
  },
  {
    "url": "assets/js/35.2c5d8d53.js",
    "revision": "dc1074c042a972bfed9d792d16a6e829"
  },
  {
    "url": "assets/js/36.2a19f52b.js",
    "revision": "51b2b794ef2204823c7d0b0c035f0b0a"
  },
  {
    "url": "assets/js/37.b4d4f554.js",
    "revision": "5fa5ee7c144583aed4930512cb9dadfa"
  },
  {
    "url": "assets/js/38.4b66625d.js",
    "revision": "488e61b41126f34b1889f03f47986017"
  },
  {
    "url": "assets/js/39.67a74361.js",
    "revision": "11353235efcc071a7228096174e5a067"
  },
  {
    "url": "assets/js/4.d4da6fc3.js",
    "revision": "e0f06d2000fa652d8c3543fc93dac6ab"
  },
  {
    "url": "assets/js/40.cd80488e.js",
    "revision": "900f70eee16c631ae5d1df40eceb92d5"
  },
  {
    "url": "assets/js/41.6fbf927a.js",
    "revision": "7e4ff04f410975d93a2ddb6b23f873f6"
  },
  {
    "url": "assets/js/42.9f4530bd.js",
    "revision": "ece9e0eaafcbd34ce07b71108c61a33f"
  },
  {
    "url": "assets/js/43.b2846070.js",
    "revision": "e60133ff32e814b0c7822b02588c34d2"
  },
  {
    "url": "assets/js/44.5080c2f0.js",
    "revision": "b64cfac3225e223a40c1c1b48463b1f4"
  },
  {
    "url": "assets/js/45.5b2549a2.js",
    "revision": "beb0ff3f021ba82a32f6cba1d794c3d6"
  },
  {
    "url": "assets/js/46.9b776aae.js",
    "revision": "5f8f30b17b1973526f5e9d6a0ed6118a"
  },
  {
    "url": "assets/js/47.a581cc15.js",
    "revision": "381e0050b81f52c3c5869da681550ffa"
  },
  {
    "url": "assets/js/48.844ee98b.js",
    "revision": "ab70fea5c478f76203b3e822ad7e2b2e"
  },
  {
    "url": "assets/js/49.50ee2de3.js",
    "revision": "15196b2b97ebd0a2625f12d74d7f2ccf"
  },
  {
    "url": "assets/js/5.34563811.js",
    "revision": "c25d6dc7ada58c30468a07c7201cd297"
  },
  {
    "url": "assets/js/50.70d1d7e3.js",
    "revision": "ab84d2ac7ba5bac76eae0cf151b2f55a"
  },
  {
    "url": "assets/js/51.a8a85e6c.js",
    "revision": "5e27aa0c5da05b35543b5abca682a1a6"
  },
  {
    "url": "assets/js/52.93565309.js",
    "revision": "4ab01b69f9046e23ad3c2291df8bb1cd"
  },
  {
    "url": "assets/js/53.9e69f35f.js",
    "revision": "e4e54941f920e2fa57f951a112d56a59"
  },
  {
    "url": "assets/js/54.d9a4e648.js",
    "revision": "1386ac92e92f339b2d9bcb8dc0edb661"
  },
  {
    "url": "assets/js/55.0bafa9b8.js",
    "revision": "7edb60e9311bee571abe39c796c8e8c0"
  },
  {
    "url": "assets/js/56.03a79354.js",
    "revision": "239cfd1041d29b017fe3ee9474593d31"
  },
  {
    "url": "assets/js/57.a87abc06.js",
    "revision": "c51dc2849fa055b854bb3b08c5d10225"
  },
  {
    "url": "assets/js/58.12d7202e.js",
    "revision": "e9e31a633787665ef4330168a7a07674"
  },
  {
    "url": "assets/js/59.7e17d8b6.js",
    "revision": "9b0aae352d982f778aa37169c7ee00c9"
  },
  {
    "url": "assets/js/6.c396879b.js",
    "revision": "223f4c3ba79c771a23f046dbf16a0abc"
  },
  {
    "url": "assets/js/60.99a958be.js",
    "revision": "63659c03079aee6e9582eab15d934580"
  },
  {
    "url": "assets/js/61.01a2fbfb.js",
    "revision": "a6abe89a4346a5bc66d72b1b56b36aa3"
  },
  {
    "url": "assets/js/62.819f3c98.js",
    "revision": "cf67208304dd844ef68c6daad16f65b5"
  },
  {
    "url": "assets/js/63.42fe9688.js",
    "revision": "a4b40f3cc8278daa3bab2a58e2dd272d"
  },
  {
    "url": "assets/js/64.fe73b553.js",
    "revision": "909a8afdff3fc09500f8d46cadb1deb4"
  },
  {
    "url": "assets/js/65.ed50abc0.js",
    "revision": "a1568a26759c1ce0a263a8f70c2d3ca8"
  },
  {
    "url": "assets/js/66.595eb672.js",
    "revision": "1531fe71d4f589d472e328fd2fc88f29"
  },
  {
    "url": "assets/js/67.6697f2a7.js",
    "revision": "35398914c15b812dbbcc995c284c10fe"
  },
  {
    "url": "assets/js/68.bdc2bc3a.js",
    "revision": "b003cdba1cccea2d8f3e617ac08702f0"
  },
  {
    "url": "assets/js/69.40c056ac.js",
    "revision": "c5351ab82949d7ca564056b4a877e7a5"
  },
  {
    "url": "assets/js/7.7712debb.js",
    "revision": "17cfd62df416bd25fadbac921f50fbc4"
  },
  {
    "url": "assets/js/70.ed904f9e.js",
    "revision": "9741e3b341b1051aa3427c303194ed27"
  },
  {
    "url": "assets/js/71.52cb5316.js",
    "revision": "7bc5eeb1b73cbba07279e9b9fd01036e"
  },
  {
    "url": "assets/js/72.e5baf9d4.js",
    "revision": "c9ffd4409db8285874315176221ced6d"
  },
  {
    "url": "assets/js/73.3f83467c.js",
    "revision": "eb3a528a8dd8ee552a160c03985333b3"
  },
  {
    "url": "assets/js/74.78c08ec4.js",
    "revision": "534fd495610d310b47903c8808dbb330"
  },
  {
    "url": "assets/js/75.844ffee2.js",
    "revision": "fed48994b1d94d8c0a9ad13eca5d883b"
  },
  {
    "url": "assets/js/76.f935054a.js",
    "revision": "ea646dc7a3ce961e1d0f25f404499956"
  },
  {
    "url": "assets/js/77.359ca01e.js",
    "revision": "cc0703c1793ce308e0002faec4ad3289"
  },
  {
    "url": "assets/js/78.3cc662b4.js",
    "revision": "4fd29b4afedd20a90f18458651e92e24"
  },
  {
    "url": "assets/js/79.6c925572.js",
    "revision": "17b0e0a4c36042833a00a3b75ecfa116"
  },
  {
    "url": "assets/js/8.91b4fc3f.js",
    "revision": "cd193acc7f01d2f95c0108e3addc20e6"
  },
  {
    "url": "assets/js/80.f6993d4d.js",
    "revision": "92f29f3f018f6dea86e59072c1a81db5"
  },
  {
    "url": "assets/js/81.08aada13.js",
    "revision": "8b219a05fc749ac9059e04a4c0e58307"
  },
  {
    "url": "assets/js/82.523a6711.js",
    "revision": "deb158a0627d61ea42b39eb530cb8bcc"
  },
  {
    "url": "assets/js/83.f010b404.js",
    "revision": "2d5741e84989ba77b7158a7329c60dce"
  },
  {
    "url": "assets/js/84.976347d5.js",
    "revision": "ebbc8d1f01b7b7f00f84ff8c09b1ff1a"
  },
  {
    "url": "assets/js/85.0be91359.js",
    "revision": "11e9ccb05eda80e780562fc286a3e494"
  },
  {
    "url": "assets/js/86.5b33502f.js",
    "revision": "eaa2136661da0561834ab5858516b2ad"
  },
  {
    "url": "assets/js/87.c40700a4.js",
    "revision": "9cc5c0cffbddfb6e65f453abbfce49ea"
  },
  {
    "url": "assets/js/88.065b9413.js",
    "revision": "acdc711024ab86087a179d68aa937020"
  },
  {
    "url": "assets/js/89.97c3688a.js",
    "revision": "d20188c7365ef24144770ff69153b085"
  },
  {
    "url": "assets/js/9.3483c3e7.js",
    "revision": "301b5c3d9e1731abeb1d641a9340e91e"
  },
  {
    "url": "assets/js/90.ab6dffd3.js",
    "revision": "c33aca9f6ea2e21d8495ea552337c0d7"
  },
  {
    "url": "assets/js/91.69504dc1.js",
    "revision": "dbc92b6cdc3b1f30bc902a335aa5e582"
  },
  {
    "url": "assets/js/92.23fdc134.js",
    "revision": "b15b0726c4324c935d3acd3e42f3fa29"
  },
  {
    "url": "assets/js/93.66feada5.js",
    "revision": "cf4fbe737fbab583a9be832609845f15"
  },
  {
    "url": "assets/js/94.af70397c.js",
    "revision": "50409f1774065c025757a196c6962e1f"
  },
  {
    "url": "assets/js/95.13efe7c0.js",
    "revision": "a539c960f3b361619d695fd326c2ce10"
  },
  {
    "url": "assets/js/96.12c98e38.js",
    "revision": "4c950863a45690af354368292e69cb3f"
  },
  {
    "url": "assets/js/97.ba40f09e.js",
    "revision": "57df202181838ace3d70251e7f26cded"
  },
  {
    "url": "assets/js/98.3458b2f8.js",
    "revision": "12930a7de31008c0d2694ad7edeb4006"
  },
  {
    "url": "assets/js/99.ac365d8f.js",
    "revision": "e415d8b771533013034123b6d710524b"
  },
  {
    "url": "assets/js/app.6e695887.js",
    "revision": "58c11f2b87b40f9f1a73a6445fc1db98"
  },
  {
    "url": "configuration/api.html",
    "revision": "33082ed440e3cd596228c628217c33d7"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "105ec155fb2164339097310672dcc9ff"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "12b72ac91348db648a4611363b93127b"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "50354fec402f4aadec1e7361ea52e956"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "c9c3b8cce0756d3912ae3536ac935b5e"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "f009d7d446f6cd8327768be91e2ac4b7"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "fb8f66e3d63b8c047f43d44dfb93b138"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "44b5743d912cb0ca218fafec50e37f5d"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "fc300ba0aacbf45673c53dbb78641926"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "40467e6aeb11497159c2ed70c52cd0d9"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "df65b58fd0456955931abd027fb078b0"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "8d175176d3b1c4184cc25e29623e488a"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "e4bf178defbea5ee9e25086d24fe96d9"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "5bafd21e8bade5e04839e4be60b2e46e"
  },
  {
    "url": "configuration/index.html",
    "revision": "8fe864e17052e2ef94796647952bfee3"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "33a11a4193d904451e690db7a031ca59"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "4467dc2cfbc776154b0b8b57383bb611"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "5fa7769183c799850f0f40138a4f3c57"
  },
  {
    "url": "contributing.html",
    "revision": "2e5464e6510283fd54f8156546a78913"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "86aad5da02d9b87c6242e3ac3e92d438"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "d76520c4ad16021a8b161ee3ec5752d8"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "6a1df40d81e9007030f4434ae34a6955"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "d6b75cb1a3546ccbf1fcdc36731dd0bc"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "731982714f4e9f1678c58eda7c43489f"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "07c12ffa1fe9403a487677ae62598c55"
  },
  {
    "url": "core-fields/background.html",
    "revision": "7698b9940955f0be2489fcc93551905b"
  },
  {
    "url": "core-fields/border.html",
    "revision": "3203f443d16b8c031a402d895ce9dcf8"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "ac6fbc8c1aafc0a3f127320e7faa0078"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "6ee07b2375bc5aa967d7894bb365a4a0"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "d8d23a40a9d958daf6dd194a54d8c16d"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "59c9f79654525f173cead041d551e59f"
  },
  {
    "url": "core-fields/color.html",
    "revision": "9334d49e7b9015b741598bc338439395"
  },
  {
    "url": "core-fields/date.html",
    "revision": "c7bf1987bb3d0d8d15ea369a92bf9014"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "e75d6f101f3cadc603e64e5718c4871d"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "ed43719c966f85c9c5272ce9b4ffee06"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "d59784129e930fa27ccb86e99be5a5f8"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "3a72d29e05d7c58d8864e73382f75da3"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "931825d7e7fb2bdbbb38bdddb6a81f06"
  },
  {
    "url": "core-fields/index.html",
    "revision": "c5a68bd1783eaa710d1fc5dab6d8c73b"
  },
  {
    "url": "core-fields/info.html",
    "revision": "d4e4f4d8ccb939198980539afd0d7313"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "3da987458cc277584c0a2b9da2d716aa"
  },
  {
    "url": "core-fields/media.html",
    "revision": "edef4c46602850c95d59a85b50e138eb"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "85623aa2f321adb9e6c26aa5d2d86e7c"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "0bae8af4bcdf59193bd8f66b5b104f6f"
  },
  {
    "url": "core-fields/password.html",
    "revision": "028ac81ff5b877de66c2b049cc79bd73"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "de1a4bb41c13466bafe551e116d3f844"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "11fe53e374ecd3dddc843565597e55dd"
  },
  {
    "url": "core-fields/section.html",
    "revision": "46252fb16394283c4a8cf36bc36cfdaf"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "948afc3ecf9f5da5fc917404a7fdd48b"
  },
  {
    "url": "core-fields/select.html",
    "revision": "b6dbf6624aa0bada03716d6916bdf04a"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "a2d180c878f537b5d413232fe5afac16"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "e6db39c2b45e29dd071ffd56addc70e7"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "aba9879759a88c232e205ec439ce8915"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "53742f52f64ec64786ce6c1f1cdca6c1"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "478f9947b45bb94f71aaa13fffc63a64"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "f6cf2746e580ca3bbabcced5b7d4b6c5"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "a6258ace895dd03164e43a434fd63c5c"
  },
  {
    "url": "core-fields/text.html",
    "revision": "8a15767127b6c1cbe82d19904fa340d5"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "9865543ccd8359c326626da3c2cabed6"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "d1a07e8b5b46ae27b86c3c84ba5c36e9"
  },
  {
    "url": "core/index.html",
    "revision": "f800c7ea40e288b861816d3f1bfd8032"
  },
  {
    "url": "faq/index.html",
    "revision": "8292c6d75d72ec9656287ed754e2bdf3"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "5eb6e9a3c5b9e86a9e2839353cc376dd"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "c51394d7e8d10fd6918c46af6b1d1514"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "b43a74151ce167a0bc92914af6c42f2d"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "019347ec75db954b102ddca1d3170207"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "ff9040128c783b608ba5b6ccdd7dd3ca"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "a720412cbdf20522c1bfd8a5bdb9fb2a"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "fe664b3d59731abd5896d19c23fa5b50"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "cc5c504cadd2c4498910b13660bcba86"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "1a909c80be66c5d385f1e71a5a3f91ac"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "6000c2a7f7094a259f2f703e135ca4d6"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "f7ea6f69bf489fa013011eeb85746439"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "37e9972f7f403ba19740755b751f7ff7"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "a79031859166087f9e748aeb249cf52d"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "31cecc076713b3e390ce83aa8c5d0b8d"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "7e285240b818a2fd172395c9548c8cf7"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "8dc3aa4ddba7ef11e2aee8c6611aedfc"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "0cc0922afc6c4c243c34e02541bbb41a"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "8ed38a1368ea4c06fb9ab0e37fca70c8"
  },
  {
    "url": "guides/index.html",
    "revision": "c9794a5ccb2215bfbacaf822adaab0c7"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "2a95ee258c6896f343014f4fc95d8862"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "745fd88df8cdd8e80887dcf8c1474e1f"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "ae8e11a4df93927c86dd7b6b8559baf4"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "f9c6ab61e4f7ea0d10eac8c29913e519"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "aa9a3ecf03d42217159285bd07701013"
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
    "revision": "2e7490b9a0ca8f33f0e3b59a38be58a7"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "134a4dab00aec205e2076db0af4eeb09"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "c3d43aee02a7924caab815c993bd086e"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "99dc3839547c6f93dcac33462e5fe7e2"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "941fc50f46a763d3277f2e3e76589c92"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "62629f1724f8c4733afd4ca686561356"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "285e3712789d2c875028aaa68461eae5"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "8fa355e2326c5c4ad459495affb044d3"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "ca7adfdded9b3e097329bb514820cffc"
  },
  {
    "url": "premium/index.html",
    "revision": "2b92caa1f6fe53282e44e011fac03978"
  },
  {
    "url": "premium/js-button.html",
    "revision": "ec96993ea19c80f362649b9f1e714718"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "34c0099508ed9869d0a8a6f3b2a9e027"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "7815a4c47ac40c0f9d82a2c4f7958603"
  },
  {
    "url": "premium/repeater.html",
    "revision": "1ea239481d1e37e81f5d0eca23c3a0b4"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "5261139483b432ee6b98b04566da16d1"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "837a0005bf4ab38c1597a273cba44377"
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
