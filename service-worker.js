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
    "revision": "33dceadf43898d9a595f09010de83792"
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
    "url": "assets/js/10.383cde45.js",
    "revision": "d2976c0cdb0bdd8b0049ecf10e0b3354"
  },
  {
    "url": "assets/js/100.987a89df.js",
    "revision": "27c10bb142861c09117c98e626334f9d"
  },
  {
    "url": "assets/js/101.ec07dc54.js",
    "revision": "1281301cd674df8f825d14ad167b072e"
  },
  {
    "url": "assets/js/102.a9baff0b.js",
    "revision": "1512a84de02111c8ee8eaa9ace87a220"
  },
  {
    "url": "assets/js/103.79ac7ffa.js",
    "revision": "932c52c3028690aece55adbaefda6111"
  },
  {
    "url": "assets/js/104.7d41eafb.js",
    "revision": "5c145dede1bca63a79de2382d482d32a"
  },
  {
    "url": "assets/js/105.320ddb35.js",
    "revision": "8cd70562cb08a0d2f243cda62f883526"
  },
  {
    "url": "assets/js/106.f26a6d41.js",
    "revision": "f1be23fb0befe4911e9e170ba1b9baa2"
  },
  {
    "url": "assets/js/11.78450456.js",
    "revision": "c5d1e66bd1e7f844094cff3383c340d8"
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
    "url": "assets/js/14.3eaeecc3.js",
    "revision": "d854aa5e9e9bdd8e5ea0acda158eef1a"
  },
  {
    "url": "assets/js/15.1a9c67cb.js",
    "revision": "01c8aeb3ff8b26d200c820f20d563303"
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
    "url": "assets/js/18.877e25c8.js",
    "revision": "5f52ee0763f284cf96abf87f8f6b1693"
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
    "url": "assets/js/26.0bd30220.js",
    "revision": "03969fa1c355b37dc909c3a5792be705"
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
    "url": "assets/js/30.33a32f5f.js",
    "revision": "4d3ea2a2452f5b23ff44f28640ea5bb2"
  },
  {
    "url": "assets/js/31.5d8158b8.js",
    "revision": "e5d6079953042e7945c4626e32cfe8af"
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
    "url": "assets/js/40.6352d274.js",
    "revision": "cb574c788c18e3100a9133f7acabd8af"
  },
  {
    "url": "assets/js/41.2f585c68.js",
    "revision": "e9296616a2c7452bf7bb4d974e443b76"
  },
  {
    "url": "assets/js/42.92981e50.js",
    "revision": "3cee50cad040758210929da27bca023c"
  },
  {
    "url": "assets/js/43.064bd085.js",
    "revision": "11a27688df41974b7b2854d3ab60da56"
  },
  {
    "url": "assets/js/44.f82f1243.js",
    "revision": "9ee173e89dc11c9ee8d61e1d943e29eb"
  },
  {
    "url": "assets/js/45.26d95c5f.js",
    "revision": "047733b81e3c8f319822c543ff1074a7"
  },
  {
    "url": "assets/js/46.7ad1ad03.js",
    "revision": "1254edb8bd8f0b2cb0cfab4a195abb07"
  },
  {
    "url": "assets/js/47.ad0fcca6.js",
    "revision": "f9d8f88e8162ac237a37ca7d7a08f049"
  },
  {
    "url": "assets/js/48.b9a0221b.js",
    "revision": "c369a3c240a060710137a9dbf9c55b77"
  },
  {
    "url": "assets/js/49.a0f8ab4f.js",
    "revision": "00c125bd16f3a00d07ec8bf0b5e736e9"
  },
  {
    "url": "assets/js/5.261a13dd.js",
    "revision": "84e3eb819f8e68aee7aa071f19762819"
  },
  {
    "url": "assets/js/50.1101e984.js",
    "revision": "f61cae4069839ea9b8bf41b7b9e4cdc5"
  },
  {
    "url": "assets/js/51.13afd48b.js",
    "revision": "daef1d39ae5970884b9cc00d149c8568"
  },
  {
    "url": "assets/js/52.70ea0d50.js",
    "revision": "f11ff296f3e218a70d16661695ac89aa"
  },
  {
    "url": "assets/js/53.5915b795.js",
    "revision": "02b1b739fcab9fa1dc2cb52c327df713"
  },
  {
    "url": "assets/js/54.3dbbee6c.js",
    "revision": "e31b3072a0c9ed90d3fc5b39849d77dc"
  },
  {
    "url": "assets/js/55.bbab8896.js",
    "revision": "7c974182746b6fc1e144376d7fd69e4d"
  },
  {
    "url": "assets/js/56.fe7b72f0.js",
    "revision": "7d6aa22fb659cacec9228d3ddf16d437"
  },
  {
    "url": "assets/js/57.f22502ee.js",
    "revision": "b065a1e971519797112bfeab223b6625"
  },
  {
    "url": "assets/js/58.1a9fbfa6.js",
    "revision": "69574d539461f8be6bff50005a2a62c4"
  },
  {
    "url": "assets/js/59.788fab5a.js",
    "revision": "64fe39476e1f8da8785890f5f9bdbccd"
  },
  {
    "url": "assets/js/6.e01c8b91.js",
    "revision": "a0a12b88fd3b2e9206a15b825b94f658"
  },
  {
    "url": "assets/js/60.632d9a5b.js",
    "revision": "4a163ff90ff2ead0a27846d7965e9ec3"
  },
  {
    "url": "assets/js/61.89627a53.js",
    "revision": "7ed3890d2d64ca4fd5b6e29ce85ad411"
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
    "url": "assets/js/78.69bef584.js",
    "revision": "df75ded5495e2cbed2c624b9561c6f4a"
  },
  {
    "url": "assets/js/79.fada21db.js",
    "revision": "2e86133ea5a302ff0f8ef5cba46a019f"
  },
  {
    "url": "assets/js/8.a98ca243.js",
    "revision": "0a6ef2c6fd1f252e971878680597ca6c"
  },
  {
    "url": "assets/js/80.f20031f7.js",
    "revision": "ede77b7a580e1b6edb906b98d9449c6c"
  },
  {
    "url": "assets/js/81.f86464ec.js",
    "revision": "c9a5a292ab1a5dc39a3186da3feec802"
  },
  {
    "url": "assets/js/82.9c80fe1d.js",
    "revision": "17c7f4de36c597551ea0254144293b6b"
  },
  {
    "url": "assets/js/83.892ab0ab.js",
    "revision": "58c3a548b8cbfcafce74b54f598ea82c"
  },
  {
    "url": "assets/js/84.8cd55d49.js",
    "revision": "467827bd73e11d4104d0d8196223de2c"
  },
  {
    "url": "assets/js/85.a33e94da.js",
    "revision": "8f33d2612b22913644ee1cc1a637e015"
  },
  {
    "url": "assets/js/86.1347b03d.js",
    "revision": "cf8cdffec4df0db074a5f88f259bd124"
  },
  {
    "url": "assets/js/87.4d08a054.js",
    "revision": "206ab9c75a5ae5a6aa4cbe572cddaa00"
  },
  {
    "url": "assets/js/88.a6b1ea56.js",
    "revision": "9d199b36925586c31ebfe5c3a9320f22"
  },
  {
    "url": "assets/js/89.dbb8b4e9.js",
    "revision": "82746e6d777be514c2befc853844a23c"
  },
  {
    "url": "assets/js/9.5f70913f.js",
    "revision": "9f74bf378c338779576138e48b6ca71f"
  },
  {
    "url": "assets/js/90.6540567b.js",
    "revision": "e33681d67dd50cc402a48fe5e386d0cf"
  },
  {
    "url": "assets/js/91.1d54824f.js",
    "revision": "b7e045a1e9b975aa8c1b07d3ee4f36d4"
  },
  {
    "url": "assets/js/92.759ef976.js",
    "revision": "3391d8dabae9eaef76cd70c0d0b2a478"
  },
  {
    "url": "assets/js/93.c0f6094e.js",
    "revision": "e7f5470a5968791a4cec0d17550de269"
  },
  {
    "url": "assets/js/94.79caadf3.js",
    "revision": "d371094beedf1608affd22958fb9a5b1"
  },
  {
    "url": "assets/js/95.71126cb6.js",
    "revision": "c54cfae0a00b925dca25661db4cb1a3f"
  },
  {
    "url": "assets/js/96.6e4fcfa2.js",
    "revision": "cadbae012be016c84f225bdcb44e5fa0"
  },
  {
    "url": "assets/js/97.0ebbb54c.js",
    "revision": "69b4976cfdbca7bcddfa9c24005d7d34"
  },
  {
    "url": "assets/js/98.84b614eb.js",
    "revision": "5b93673888d1f37a7464ece829e42882"
  },
  {
    "url": "assets/js/99.8a940082.js",
    "revision": "344436159bba514a74f2b12907f70d12"
  },
  {
    "url": "assets/js/app.6b2978ee.js",
    "revision": "a66da6bdd6da8dbc0d94624c7a6d6c8e"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "a8dea360b83d4b066df713f548b1a3f9"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "e9961738b7d726a404cf89ddd7763ca8"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "0dbe0960cc34547d76215e2f8142da59"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "f60f14a457f5efa458ac0e9c7e164d36"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "8eb8066741eaaffc9f56e856a0ffd6b8"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "418623cb18799a0244e0cff6624bd1e2"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "3c35008b18af59ee18225a331a1a2aed"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "dc1fa8dd7faf0c6fec18072eab2c239f"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "853de5b692b58ad62056f0f1032ca8c0"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "9ceff9c31d172cd1d3a8c5c8654e256b"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "203adfaa205ffa4d106499ba0462baf1"
  },
  {
    "url": "configuration/index.html",
    "revision": "ad576d6d8e14c0592387b5263f4f5112"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "a62325587b6dedb11eac41efe3d36d65"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "c0d86dbe8ee6ea89685788905a314d1b"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "468adca3ce9ad49bab9ba79b461d82b3"
  },
  {
    "url": "contributing.html",
    "revision": "3aa6e0fc4f1c7e82a136d7873efcdddb"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "cc765e918513670708af23a69bdc8109"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "ebf72cfd72a4059659ce5ba99e725ce5"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "ba258853157867bf67fc6d0ffc2def8a"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "437a7aa4f9bc32c64a8562475c7de0ad"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "9d18ccf4da4367d1cfd824b756114fa4"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "af33e1628cede6cd1ebafb669be4437e"
  },
  {
    "url": "core-fields/background.html",
    "revision": "3746745870720f24bbe078fdec641f01"
  },
  {
    "url": "core-fields/border.html",
    "revision": "7ff4b8bdd6736d1dd3ddb3a77a21d3af"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "638518546006fc84eb4a20726a865974"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "268e42833442fd45b69cc9682b266c41"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "3ebbe9c8f068afcfd4c9b562f0b7d4b5"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "6bb2990e1d1823212378fb3ca1ec4675"
  },
  {
    "url": "core-fields/color.html",
    "revision": "bf429dca824606a26f14b14de87a92d9"
  },
  {
    "url": "core-fields/date.html",
    "revision": "8e600fa11ec3b460517c4d703261d73e"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "eff935ab3ea02fe9890c46f6b237fb6e"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "60c7a1cf38fe19c15ef3875a9840a24e"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "88c93db2ce309f84f475215b26941f33"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "c99a0ed1036a1243cabfce3c22b36832"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "f8a2d64ac4c5a5e0b6b18e3e2e144ab5"
  },
  {
    "url": "core-fields/index.html",
    "revision": "43dca945d612b1f00f34b492b737e716"
  },
  {
    "url": "core-fields/info.html",
    "revision": "b92e5588c23192aae4ecc38efca79602"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "b41b4e5ba8fc0a5167f6a1c0e9599a7b"
  },
  {
    "url": "core-fields/media.html",
    "revision": "6c6c8049f52c91103da97661e863cda2"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "bcbd7bbe5ef3e7aff9ec3e47c03f5879"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "ef2c3b925e3b63ac9c38288300f93880"
  },
  {
    "url": "core-fields/password.html",
    "revision": "abc883b3e7af370cfd03bd869f73e570"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "38bee9aa67917e8a73b5f444059afe8e"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "7b87d65e6923a5bc4251d33bdee33c83"
  },
  {
    "url": "core-fields/section.html",
    "revision": "0a37c923f2a0ae2b6abcc9107c8797b4"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "41c277cf90600309b10e40296cbbf9a8"
  },
  {
    "url": "core-fields/select.html",
    "revision": "684cfbdaa3ba438808de8023e6b2e149"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "930b22b361e5f7db9305107fe2969064"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "89e210ab3fdb156fabb539eb10987875"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "23c5bae778646f6bd7426af1d83f6f3b"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "70425bcb64afe3107e19a115a0614647"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "2a82dc5b46620685c457ddb30a2fd41a"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "35bf5e1249ccc26009aa396b9c0bf33c"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "1d445000eb3038449c070b11a98e9619"
  },
  {
    "url": "core-fields/text.html",
    "revision": "d6c525937fe48ffe86018d9798e4df8e"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "2aaa745aa947a24d291b4bae0ca0e3fd"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "50c2601334ddbd18ed1987f0d2e07ba1"
  },
  {
    "url": "core/index.html",
    "revision": "5b04a32ba1afc0c29cf62283403f9738"
  },
  {
    "url": "faq/index.html",
    "revision": "24b2cbace8e2b7cae6577b0e7616794c"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "796c80b9e07132c74ca2027f9b9c6555"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "567bf3a2ed7d51dd2738bad0c5bd6652"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "3264d7799a4f625d25f4cc948541aed3"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "37cdb0bc117651bf7b0eb9adf36d76f5"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "7a45802141c082d312f32a71a1d6b1a5"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "a85f7ee04f452963462689de5e2c67da"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "22a8aeb53c59ad151921cd2a0731ccd9"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "bf7555d7de1b1a7b46bb265f0ed773b2"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "e0c6e907e37f38104098a447cff84f98"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "e8f885034aaf5d7c9d78eb34a3991bf2"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "0411a337913208dfa4bf5e42d2819490"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "52f02030ff9229e0fd4a21cc0b74e45d"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "c05f1bd665a0e72fc5c4e500638d7f9f"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "4fbe55d4ed1fd2df2f79b04af103c1be"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "ed283c175a012c236c16e1b76b8ca97b"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "97eae79fa7d0995594d7e5e068af6220"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "14b0c4061521deabee24cd204725ac3f"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "2e0171c298ff154c12846fd3530512c0"
  },
  {
    "url": "guides/index.html",
    "revision": "7795bd0907b322b04ecca1e14fa0e196"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "5658858366d92eb1728929e93fac8cdb"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "e562ed4d2d598f9cc026e21933a61fcc"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "b8cdc5cf2355374e05d5bb3d8e49b957"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "abe0f0e5ea3b717ad08d5c6e0d6ab611"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "5956230c5491b5f72c6de204cc8a9b72"
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
    "revision": "e3f16523dfb447a39710a683f3121835"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "ade04d0f9d5eabc83d1061b8b69b2e53"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "2e097422fcd3477f432c4849b5b05440"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "a2b81119252a90f04ca1ad1339afab2f"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "84c31b05747a8a9bf37676cbb1e28222"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "843118d26822b1707181ff87e32a76c3"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "ac04425adc5ea8b4f749b949fbb94434"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "ddfa1d78b74ffb0eee3b60cee7f2501a"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "539c6dc13b7c553a491ad8979a03c7df"
  },
  {
    "url": "premium/index.html",
    "revision": "e1f33ffbd2baedfe5cb809fb98da13d0"
  },
  {
    "url": "premium/js-button.html",
    "revision": "8ba4f47d2929f45b0c16208e68c39717"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "4747f87cfc8fef2bd72402a71d0602dd"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "36700e49448b5c0a7e12439b96f38347"
  },
  {
    "url": "premium/repeater.html",
    "revision": "d5d429406af39613c2baa1c3e6390aa9"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "4d06d354af7c6a9095d63a479b25119f"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "889ba8c33889c5cb9013aee646bc8cd8"
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
