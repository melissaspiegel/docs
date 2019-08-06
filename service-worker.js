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
    "revision": "537cb20bd608b30d91d74a776d97e131"
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
    "url": "assets/js/10.a29317d0.js",
    "revision": "6c02f3eb0e489c3e678d86f9fa14ff63"
  },
  {
    "url": "assets/js/100.a57c21b9.js",
    "revision": "4565f37c6c5dae1892f395a97409c7c3"
  },
  {
    "url": "assets/js/101.be3ee92c.js",
    "revision": "56d858ddcd925fecfe559cd27b931fc7"
  },
  {
    "url": "assets/js/102.4a9795ca.js",
    "revision": "07051f8ff04a134c8bec739b3f137328"
  },
  {
    "url": "assets/js/103.8703c58a.js",
    "revision": "ffef3f46fbfa52ee5e15b3bdfdb7336b"
  },
  {
    "url": "assets/js/104.7d41eafb.js",
    "revision": "5c145dede1bca63a79de2382d482d32a"
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
    "url": "assets/js/11.d1faf7e1.js",
    "revision": "04c06b6ffd60e9305d76956e2ea358d6"
  },
  {
    "url": "assets/js/12.c83c6ad5.js",
    "revision": "a3dad2f3dcd4a21ed712e862a34bf4b1"
  },
  {
    "url": "assets/js/13.78bab24c.js",
    "revision": "d519c4c7ffb66a04b55e1e8f752b4138"
  },
  {
    "url": "assets/js/14.ca99e1c4.js",
    "revision": "f3cf98ed361c6d72ff482e7fa017463d"
  },
  {
    "url": "assets/js/15.7e06981d.js",
    "revision": "d70a51573dc7f427db36c7c5d6a09761"
  },
  {
    "url": "assets/js/16.f7700003.js",
    "revision": "bb6ddc9ee239285fa058498249fd58c5"
  },
  {
    "url": "assets/js/17.d52cffe5.js",
    "revision": "74a5fe0559b9dc38309c57b3d2d92cb0"
  },
  {
    "url": "assets/js/18.ab55c4c5.js",
    "revision": "26f948a86f94229d6a69eeda19681af0"
  },
  {
    "url": "assets/js/19.f4d74c0c.js",
    "revision": "06a5c93aa20cd118b0085a204c01386f"
  },
  {
    "url": "assets/js/2.af152067.js",
    "revision": "a2e01cd2c85c788d47d09ed416dee50f"
  },
  {
    "url": "assets/js/20.d6d635d0.js",
    "revision": "acbe6716ef72782325e55e5a80efa2e6"
  },
  {
    "url": "assets/js/21.828d1d0c.js",
    "revision": "c4c2f983a16b81bb9e6e2ae209093e17"
  },
  {
    "url": "assets/js/22.66c7f466.js",
    "revision": "aa8513cd5969a0b9d23de982526e0021"
  },
  {
    "url": "assets/js/23.5126f08e.js",
    "revision": "47890bd0585dc5f08f8b34324e3e0b2b"
  },
  {
    "url": "assets/js/24.6f4e4ae2.js",
    "revision": "8f2a153aa7d10912279aa969aeac9e64"
  },
  {
    "url": "assets/js/25.cd286b6e.js",
    "revision": "4cff2791c42df60f2f9805d728b57202"
  },
  {
    "url": "assets/js/26.f4441d6a.js",
    "revision": "5e49925d52a5db52ad4cd4d803e9d68a"
  },
  {
    "url": "assets/js/27.6d8e0011.js",
    "revision": "3523dd305170599f2f5f8816dc6a2fa4"
  },
  {
    "url": "assets/js/28.689860ba.js",
    "revision": "b03713d6cbff6d035ee924df63829fa0"
  },
  {
    "url": "assets/js/29.afcd30c5.js",
    "revision": "ae61584faf949656628e01c21c999aab"
  },
  {
    "url": "assets/js/3.1f4aa71e.js",
    "revision": "2fc334da7db6411b4e8e24b7029d7ffa"
  },
  {
    "url": "assets/js/30.a05f3fb7.js",
    "revision": "151299054ed589825df79251a27802d4"
  },
  {
    "url": "assets/js/31.eff6b60e.js",
    "revision": "6d64e8156a1775d252ae2e3b6c027af0"
  },
  {
    "url": "assets/js/32.851c1724.js",
    "revision": "14ad4f1883cc074387a71284ad3afbab"
  },
  {
    "url": "assets/js/33.6c95bb83.js",
    "revision": "75bfbbe0c750732c855e69119dc29d03"
  },
  {
    "url": "assets/js/34.484bbed5.js",
    "revision": "2c38a0c526c7e41ed1639529b42091e8"
  },
  {
    "url": "assets/js/35.00a3d29d.js",
    "revision": "b2667080493e38a37cbce008bffa6ab9"
  },
  {
    "url": "assets/js/36.9d4a428b.js",
    "revision": "8e476a091ee7da6e2e6cd086dc171a63"
  },
  {
    "url": "assets/js/37.da2e290c.js",
    "revision": "cb8f34d39d28975adca25b1de7ac96ef"
  },
  {
    "url": "assets/js/38.c19ef3df.js",
    "revision": "fe2658a0c9a2b2830ad2634af4a8824b"
  },
  {
    "url": "assets/js/39.e29e693f.js",
    "revision": "284a3021095e186e47d2d8e97ec600c1"
  },
  {
    "url": "assets/js/4.fdf3b33e.js",
    "revision": "ad02c45fd165ba3e35229475cb246cdb"
  },
  {
    "url": "assets/js/40.d964a872.js",
    "revision": "f1b037b21edabfb50a983de6e2bbb651"
  },
  {
    "url": "assets/js/41.b218dd30.js",
    "revision": "b89ae58b77c8b855fdc5d2da7b8411b4"
  },
  {
    "url": "assets/js/42.47394861.js",
    "revision": "a147e77244b226153c96f3191e6c179c"
  },
  {
    "url": "assets/js/43.4971a5c3.js",
    "revision": "64aa2ed942963647f22f8ae914b04f0e"
  },
  {
    "url": "assets/js/44.734ee08d.js",
    "revision": "a36b125420280e5811ad14865f68897d"
  },
  {
    "url": "assets/js/45.26d95c5f.js",
    "revision": "047733b81e3c8f319822c543ff1074a7"
  },
  {
    "url": "assets/js/46.ced0b006.js",
    "revision": "b266f2fe9efc7d994946ae3c0a73a9fb"
  },
  {
    "url": "assets/js/47.ad0fcca6.js",
    "revision": "f9d8f88e8162ac237a37ca7d7a08f049"
  },
  {
    "url": "assets/js/48.67ea8c2b.js",
    "revision": "badb9cf71836d1bf7532fc10b577718d"
  },
  {
    "url": "assets/js/49.49d01def.js",
    "revision": "c5712ae4d3f8a96480d9245db3e5aaa9"
  },
  {
    "url": "assets/js/5.261a13dd.js",
    "revision": "84e3eb819f8e68aee7aa071f19762819"
  },
  {
    "url": "assets/js/50.a6a3d86c.js",
    "revision": "a8447950e05d265aa8788bbe1a63cc35"
  },
  {
    "url": "assets/js/51.13afd48b.js",
    "revision": "daef1d39ae5970884b9cc00d149c8568"
  },
  {
    "url": "assets/js/52.b61d3e9a.js",
    "revision": "b9acff9857efe428a05999e2609dc662"
  },
  {
    "url": "assets/js/53.aa6d4aa4.js",
    "revision": "7fd93062d9a047c2d6db85bba4546098"
  },
  {
    "url": "assets/js/54.3dbbee6c.js",
    "revision": "e31b3072a0c9ed90d3fc5b39849d77dc"
  },
  {
    "url": "assets/js/55.6d78c088.js",
    "revision": "1d0b178823d3677b2c2f37ccd7a40353"
  },
  {
    "url": "assets/js/56.fe7b72f0.js",
    "revision": "7d6aa22fb659cacec9228d3ddf16d437"
  },
  {
    "url": "assets/js/57.0d7188cc.js",
    "revision": "7d3bbde1c177b66a59ea37053f539b21"
  },
  {
    "url": "assets/js/58.1a9fbfa6.js",
    "revision": "69574d539461f8be6bff50005a2a62c4"
  },
  {
    "url": "assets/js/59.9a064651.js",
    "revision": "fa5d0b1cfd5768f519e595899d09794f"
  },
  {
    "url": "assets/js/6.eb229e42.js",
    "revision": "051329a6b74d33d807bc5271fd9cfb0d"
  },
  {
    "url": "assets/js/60.632d9a5b.js",
    "revision": "4a163ff90ff2ead0a27846d7965e9ec3"
  },
  {
    "url": "assets/js/61.196d2b17.js",
    "revision": "aa13dfa9ea3bd022dab092dbe20c48f6"
  },
  {
    "url": "assets/js/62.15e896a5.js",
    "revision": "4a249ebb99c50b0bdd6f40430e0e06cd"
  },
  {
    "url": "assets/js/63.6fdff4ab.js",
    "revision": "f5bd97f8cc72f5e94231d1eeddb3e3d5"
  },
  {
    "url": "assets/js/64.c08280d4.js",
    "revision": "3e79b64120cbc167938352e77f1b19d3"
  },
  {
    "url": "assets/js/65.f464233f.js",
    "revision": "f4df39a532f9d71258e00c9545742df6"
  },
  {
    "url": "assets/js/66.6d6df889.js",
    "revision": "9aaeb93e53d5e725966da07a1826bd14"
  },
  {
    "url": "assets/js/67.7025e0ed.js",
    "revision": "683f50593eb58b056debef83b7f6d6f8"
  },
  {
    "url": "assets/js/68.2a388883.js",
    "revision": "9df32fc0085ca2f4ccbc9f165e4b6c68"
  },
  {
    "url": "assets/js/69.42ad7bb9.js",
    "revision": "07c1407c2f476c0db94a14554b4eb05a"
  },
  {
    "url": "assets/js/7.6a9bcf19.js",
    "revision": "748baa25c8f7fe38b5cdbec217082b05"
  },
  {
    "url": "assets/js/70.6c2e236d.js",
    "revision": "991182a356148c32651b1e60744e5db1"
  },
  {
    "url": "assets/js/71.48eb5bac.js",
    "revision": "1758efb8648b2182babb86b5595ee790"
  },
  {
    "url": "assets/js/72.05ae5eb7.js",
    "revision": "008cd9215196d4e18f327712a7f4624c"
  },
  {
    "url": "assets/js/73.388dce5e.js",
    "revision": "fad058ee5b14b31bc48b48fb9c113208"
  },
  {
    "url": "assets/js/74.8267a1e2.js",
    "revision": "f51886fb19b01f6a787b19868cd8e0b8"
  },
  {
    "url": "assets/js/75.3da6a37c.js",
    "revision": "bb094f7722ff9a7689ccdd02beb389ed"
  },
  {
    "url": "assets/js/76.a6a20ad0.js",
    "revision": "682a384aa16e578dd22b2481a59285ce"
  },
  {
    "url": "assets/js/77.646d8a6e.js",
    "revision": "a0d3941db5c2a1f281e322dea80e1fea"
  },
  {
    "url": "assets/js/78.8417db3b.js",
    "revision": "08068220d714cbc19842743fe4613d73"
  },
  {
    "url": "assets/js/79.21bdd983.js",
    "revision": "85ff7de0463f62db94f2982d53a81981"
  },
  {
    "url": "assets/js/8.a98ca243.js",
    "revision": "0a6ef2c6fd1f252e971878680597ca6c"
  },
  {
    "url": "assets/js/80.0d483c1e.js",
    "revision": "820e5b08ba2e3cbeba8f851d9cd99c7b"
  },
  {
    "url": "assets/js/81.bfb3513d.js",
    "revision": "a201553e59140377e92fa04618ab60ab"
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
    "url": "assets/js/84.21f245f0.js",
    "revision": "7d2b32f0f89931dfa344579071d0c5ae"
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
    "url": "assets/js/9.5f70913f.js",
    "revision": "9f74bf378c338779576138e48b6ca71f"
  },
  {
    "url": "assets/js/90.9f6ac2d5.js",
    "revision": "426f4a4a34d171495b00f0b30e2519d4"
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
    "url": "assets/js/98.84b614eb.js",
    "revision": "5b93673888d1f37a7464ece829e42882"
  },
  {
    "url": "assets/js/99.9d0561ac.js",
    "revision": "28eb55d573ef95c95b09a44ef1252e1e"
  },
  {
    "url": "assets/js/app.1e0a4222.js",
    "revision": "13b5e19a4087b32d2afe4910d4666065"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "1c4a751c92b759ede6050431c600a18f"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "b7475f891f05276cd7a2657ff61f0ad2"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "970eb248704544744845ae752eee600c"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "8066177b217b2cfb629b9b34b321dda0"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "ffe1fe432c17b57e7d960876ba3971db"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "d5418805dc765d4b4d07b6c761b57e12"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "ac8adaf0b2b56dd8aff3ccb5d63a8391"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "8c02fed659085adf056ad180c47c1807"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "bf588a0280dfea768766d1c9a7e2a1c3"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "d6c0f06051de4675507b7b1a03863bb0"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "82e2d98dc83989b9c5eccf301b957a62"
  },
  {
    "url": "configuration/index.html",
    "revision": "f4fe9108d8f0b86658fbf91349536908"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "f6ac8c921d8454b19f47ed0cc1177f03"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "740b1dc49b443563a214c76d009dbb5e"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "f50abb932dae3eb2a3fe916efffc5977"
  },
  {
    "url": "contributing.html",
    "revision": "fe60d3351347ba53e8b76a6895322335"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "dddb5f68509f5aa4002cec2367e1dfdf"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "8caf4e74b62f5528dedae19d79719928"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "b9c9d8f06173b6f52c56c249c90ce2d1"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "b7e46aba9617cb84c70bfaafe613f57a"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "4470fd4a7ae288f493eec924b566d4f8"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "d7bef4c3d7ff10be86c2c208d6d42e46"
  },
  {
    "url": "core-fields/background.html",
    "revision": "7646dd8102db81a944f87137e6c5b126"
  },
  {
    "url": "core-fields/border.html",
    "revision": "95b57654321d3caa432cfe14e36a09ad"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "4881e13a93001146174751da46e14051"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "b37d631853e2802d3c06283f05277dad"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "1ccbaf94fa8c746b9fdec4d6c1b5aa50"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "7634139c34aa7c982a77c92caebe1d6d"
  },
  {
    "url": "core-fields/color.html",
    "revision": "c56dd820587ccae290154db3cdc33e26"
  },
  {
    "url": "core-fields/date.html",
    "revision": "be0e72da3e6c6447da9afcdb563a61e7"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "8b08dc38736b5f633f495044393e5151"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "eb55aaca788327066a1a59f0fa75c17c"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "62f320af0fc9f60992efa8efb49fc05d"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "050640c1c203666621e85fad2a800efd"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "93df0f03a0a2d0571b449c9b9b321839"
  },
  {
    "url": "core-fields/index.html",
    "revision": "7880cbbfe063c861376569fa13d3ab4d"
  },
  {
    "url": "core-fields/info.html",
    "revision": "68e2e9f4f9d2df80fabdeff174af2184"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "64d9480fa4d97c04d86321b6fcbf14dc"
  },
  {
    "url": "core-fields/media.html",
    "revision": "21a218d4c29dc794faf781540099cd4b"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "b9b487b14b5f8c08ab1b238462da6c79"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "fd092b947c9ee16ab69a76f57419d226"
  },
  {
    "url": "core-fields/password.html",
    "revision": "b19bf57fb19182f2d9b1b7b0ec0b1ede"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "5c072fad02eea1f2c7399abaed006c3d"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "0c88424d5a5373343aaf2b21e73823fb"
  },
  {
    "url": "core-fields/section.html",
    "revision": "125623dbf045053145d2bbfb05862e59"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "67d044c731dcd492269cbc33ac9a9451"
  },
  {
    "url": "core-fields/select.html",
    "revision": "1a4c4eb11414fe5a2b710699fd03d3e4"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "7cffaeddadba56581376161a62df242f"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "6628d31496f79f9d43f45578f9839433"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "69f96f2b6238bff9b0d7eb95711577f7"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "caf776d691303b3e688491d06f43ff98"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "831c82ef2e47aad085eb04708a26fc9d"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "3c7ff3a65a1e4c285ce84ccc50152c96"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "7ce2f636ceaafe462bc926cca65d30f6"
  },
  {
    "url": "core-fields/text.html",
    "revision": "d5ebf6a62cf88c9e2eff87615f6763c7"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "873bcee8f31c74a5ad8fe27164bf3113"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "153707a780743057658834c3219f653b"
  },
  {
    "url": "core/index.html",
    "revision": "d3b88ecc1544f8e611eeea0e27ef5fe8"
  },
  {
    "url": "faq/index.html",
    "revision": "00cb89d7f91426cecf2a9984749b8c0e"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "0a98a84197940430751436208a1e0ef7"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "c59daea6191f633f6d060a50b2259c78"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "a05ed52b62faee452f0d6d736edba2b3"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "4cabf094971273ee7dfa70fcbcfd15b9"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "9a9c9546ec4f2bdcebe0e6d25eb0e60d"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "ec607f239773b420d71decab5066fa5e"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "93752f969dc43689b635390cb8a9b517"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "e2d9f37a1880dd74e317eb9796171d8f"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "ee832bdfbdb481416f738289cdfd58b2"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "1f855705b2643a40b0e820830f2a813b"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "e7d9af333e8bff6ac7944bbfd6a57bce"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "ea83bf0fcd3850f2014f57f8fea06798"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "01506ce4162b580c703919829b1f2bc8"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "81896bfc066842c302ab0d873ba92c1a"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "d5133a76218c1c44b3b120f7730700c6"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "d1954e9f54de8cfdf71c88e06899caf7"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "5af44ed038beda84ad7661dee033e9e7"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "8acb13392a8fb8a7e2adef514565fecc"
  },
  {
    "url": "guides/index.html",
    "revision": "ff5255ec7aaaddd09c8dd12ecc48ca37"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "9f505f42ee7355f7697d8bc0858d07d5"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "345fcca965516c6a1db79a8957c02c6a"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "86b83e6fb5de2679ef6ea32b3fd0c9ba"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "8bfd7018072509a07485f9b8033e74b7"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "925db415610873a02de4e37bc2ca76bf"
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
    "revision": "0b44781abce203ac615466357e5dda2c"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "059fa1bd6d2b5f6553124153361fca0a"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "4df7913368b446ab8f93239a3edda3e6"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "31c3d35080a190c4ceedc0df037782e0"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "e71d0f6317be41fab45e3a0a37c88160"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "a06ff3ec11c27aae8beef7a5eea1bb42"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "a0125f6e8997788d4783c787844406c4"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "334c83c356bea7b48c98e649ff8855a9"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "8be12a9095b0791d700d9960e1d3e753"
  },
  {
    "url": "premium/index.html",
    "revision": "bd35f39b72467f80d2187e4594e2bccf"
  },
  {
    "url": "premium/js-button.html",
    "revision": "448ccf9d401390cc6d9743291683a24c"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "64515103eb023b1262fd7286c90701dd"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "ec16333aab12b1d74043ef593c85d6a7"
  },
  {
    "url": "premium/repeater.html",
    "revision": "ad9792b8689bab326619a81a2d68e52a"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "9ef3ee35d03a71ef7013dc853f5655d7"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "47745c28645f5dbe2765c4734d080d15"
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
