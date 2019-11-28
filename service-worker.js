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
    "revision": "f069c9a7ae4410f55c2f38e92bdf31b0"
  },
  {
    "url": "assets/css/0.styles.5da7efee.css",
    "revision": "e087118461a9aa8921db512108b2bd07"
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
    "url": "assets/js/10.2f005a00.js",
    "revision": "f96d7de06c640146046ad5e28d6a9cee"
  },
  {
    "url": "assets/js/100.c772913a.js",
    "revision": "620af43f1bd71f856a357814f38c5132"
  },
  {
    "url": "assets/js/101.fa90b708.js",
    "revision": "0d902c4f278190fefc74cd753d4b4492"
  },
  {
    "url": "assets/js/102.c92d0df0.js",
    "revision": "4a9c3944c540cd096a7a96b72b6aa2d1"
  },
  {
    "url": "assets/js/103.fe4060c1.js",
    "revision": "e6d8d05dfc717bc3430f472db1f77f21"
  },
  {
    "url": "assets/js/104.23e7cffe.js",
    "revision": "4b0c4cce3391571b8915f28ac3e05e79"
  },
  {
    "url": "assets/js/105.3090319a.js",
    "revision": "0dc1de7f6b6a88653105641d50dbccf0"
  },
  {
    "url": "assets/js/106.0f93de30.js",
    "revision": "5d7207c66bada6ea4dc9a255bf37ea97"
  },
  {
    "url": "assets/js/107.b427ba62.js",
    "revision": "2968a23a76cd55429b4c03f1bb75c5ec"
  },
  {
    "url": "assets/js/11.430fffae.js",
    "revision": "f7ddee95633d4c36c394ea96927a740c"
  },
  {
    "url": "assets/js/12.c48a526c.js",
    "revision": "44a2dd32feb0cb1c3e0df3f64f72b95d"
  },
  {
    "url": "assets/js/13.3e8c2fa3.js",
    "revision": "58f763edec39796f6bcdf9d2ab475329"
  },
  {
    "url": "assets/js/14.a434f77b.js",
    "revision": "ab908fad13c58b7e7eacc0f1d6cf0a12"
  },
  {
    "url": "assets/js/15.8f3bf13c.js",
    "revision": "c046022d130f23925e21ac10738deb5a"
  },
  {
    "url": "assets/js/16.4e1c960e.js",
    "revision": "e756c5e808d0a576f6e400ac4e37e55f"
  },
  {
    "url": "assets/js/17.1d0ea3c9.js",
    "revision": "fc3326ce477fc084303d04df1757bf12"
  },
  {
    "url": "assets/js/18.81eab362.js",
    "revision": "9ec6ffa0898b3b4e407bb9df9afbb5b4"
  },
  {
    "url": "assets/js/19.556bd1b4.js",
    "revision": "a3d9e449c49d1fe6c752b36d653faa16"
  },
  {
    "url": "assets/js/2.7a0a4af3.js",
    "revision": "4b41499f374e72cc9684baa06287ef7a"
  },
  {
    "url": "assets/js/20.1733e262.js",
    "revision": "d6dccf52256a246c846407f005ddca40"
  },
  {
    "url": "assets/js/21.31ea55f8.js",
    "revision": "f4ea82c97a3730d60fd625161f9079bc"
  },
  {
    "url": "assets/js/22.4134dbc4.js",
    "revision": "c9eda9acdec360f4d335c6fe50f1f930"
  },
  {
    "url": "assets/js/23.5242b775.js",
    "revision": "a217470169e9ba428647d8d693ef250e"
  },
  {
    "url": "assets/js/24.994e7f3c.js",
    "revision": "04d4465573febf925e9880747146313d"
  },
  {
    "url": "assets/js/25.df181961.js",
    "revision": "6689d83e6d51f289d1834ae3367022d3"
  },
  {
    "url": "assets/js/26.4d0760b0.js",
    "revision": "3b85c0afac954c6dfeec844f9a56e361"
  },
  {
    "url": "assets/js/27.3a9bec6f.js",
    "revision": "34a8bea8f7e440f8eb5169a420dbb55b"
  },
  {
    "url": "assets/js/28.c6525b95.js",
    "revision": "7647a69c877d185a19708281f29a692f"
  },
  {
    "url": "assets/js/29.00028324.js",
    "revision": "eac24558fabf26555dad16954e846cbf"
  },
  {
    "url": "assets/js/3.d0a2020c.js",
    "revision": "7f9f3368f060d4db431b558b3ea80fd7"
  },
  {
    "url": "assets/js/30.7f9efbe0.js",
    "revision": "405f85750d4c69061f2cf22bab1e9149"
  },
  {
    "url": "assets/js/31.f894a8c5.js",
    "revision": "c3d893c7aa6dc8256fa1c28f40f738f8"
  },
  {
    "url": "assets/js/32.b33bc02e.js",
    "revision": "0293ef3f67b7beedda9d2777a053731a"
  },
  {
    "url": "assets/js/33.ac9f39df.js",
    "revision": "49064318796f70d2617110749a493398"
  },
  {
    "url": "assets/js/34.887aa970.js",
    "revision": "26541bb90b21660aa1df1fa312b45aff"
  },
  {
    "url": "assets/js/35.9242c7b9.js",
    "revision": "44c6ffc7c045f4b089103d5e79ea42a8"
  },
  {
    "url": "assets/js/36.e55b04e5.js",
    "revision": "3aed126c08c9bab2a040abb50189ea50"
  },
  {
    "url": "assets/js/37.10d3387b.js",
    "revision": "ea9884afda3ac7aa329565763dcb3bd4"
  },
  {
    "url": "assets/js/38.7068a298.js",
    "revision": "9a4d8f6212a423d44fc5fcbcb3c47bd4"
  },
  {
    "url": "assets/js/39.9be58913.js",
    "revision": "e8cc49b8ddbbf965ed24faf35fdeb007"
  },
  {
    "url": "assets/js/4.0b2a2b51.js",
    "revision": "6a115c8cbb8c9d68fad0eebaeb0bfd6c"
  },
  {
    "url": "assets/js/40.d54b292b.js",
    "revision": "dbdd9f8ccf2b53254bb883f2078b132f"
  },
  {
    "url": "assets/js/41.5b9486b5.js",
    "revision": "3df78637ac314009e7c546c3b825b3ff"
  },
  {
    "url": "assets/js/42.d71a9bb0.js",
    "revision": "6889181e10e0acc95775c866f6634163"
  },
  {
    "url": "assets/js/43.8d538f07.js",
    "revision": "134d9c22ea50f5454e2d4000a8c9e427"
  },
  {
    "url": "assets/js/44.fb9d2641.js",
    "revision": "177456c43510925a70d3ac424042223c"
  },
  {
    "url": "assets/js/45.36ef9955.js",
    "revision": "fcfea18df923c20f7085d9362d256c00"
  },
  {
    "url": "assets/js/46.a737e15b.js",
    "revision": "38bcbc56bbc8a30c14f42c29e7e66c87"
  },
  {
    "url": "assets/js/47.3024ed84.js",
    "revision": "75aacd3fc8af519c92338e728386d92b"
  },
  {
    "url": "assets/js/48.c0c249d2.js",
    "revision": "5f6da85b8a2e5f9f332fa553d4c124ad"
  },
  {
    "url": "assets/js/49.a3fd745a.js",
    "revision": "7f93c30d1ae216afc48b45040073c5e5"
  },
  {
    "url": "assets/js/5.f733b047.js",
    "revision": "a6ccd77bc2282189fb7f61bfb23ee05e"
  },
  {
    "url": "assets/js/50.574a0a41.js",
    "revision": "c97a625772de6a9220945690468ab71a"
  },
  {
    "url": "assets/js/51.bbc68691.js",
    "revision": "70b5c8aebdc3fe1898ab754917c50e16"
  },
  {
    "url": "assets/js/52.7bbe0d6d.js",
    "revision": "6384236a57b8c8044dc173e7712005e1"
  },
  {
    "url": "assets/js/53.e6254557.js",
    "revision": "7557a24eb054eb9c1d532716705943c0"
  },
  {
    "url": "assets/js/54.b7c01fa9.js",
    "revision": "2f241a71226876083d995a5c84bf8a67"
  },
  {
    "url": "assets/js/55.e2a8205c.js",
    "revision": "dc1f55a48e2da22c152fc9d8e7f05428"
  },
  {
    "url": "assets/js/56.62dc71e8.js",
    "revision": "95a96b5e491021a6d6b3daec36cbe405"
  },
  {
    "url": "assets/js/57.d35b9a9f.js",
    "revision": "34241845cf18739b5e302727f66ce00f"
  },
  {
    "url": "assets/js/58.5ef986fd.js",
    "revision": "d18801c7651c2baf36dde52ad3f21733"
  },
  {
    "url": "assets/js/59.f71949f0.js",
    "revision": "d9d03cfdf3794e475ba103ae7840f14a"
  },
  {
    "url": "assets/js/6.fd72b17c.js",
    "revision": "220e24296eabd647dd493e89591c7d9b"
  },
  {
    "url": "assets/js/60.b881de16.js",
    "revision": "cdcfa24d5b582f5f87b0acba0a62d95b"
  },
  {
    "url": "assets/js/61.c849faab.js",
    "revision": "364c2dfafeb3451f09314132a5b3d7ac"
  },
  {
    "url": "assets/js/62.fc599fae.js",
    "revision": "e46f95185cc0483a7c1bcb6e810bc973"
  },
  {
    "url": "assets/js/63.a772b381.js",
    "revision": "89acd8934eec2d9d806fa7d1bdac93de"
  },
  {
    "url": "assets/js/64.a9edda72.js",
    "revision": "46dc25b1c6586016ef09b4b977e85100"
  },
  {
    "url": "assets/js/65.5e43d75b.js",
    "revision": "88288372e65400d19cd26d00bb40dc94"
  },
  {
    "url": "assets/js/66.0148b134.js",
    "revision": "82cd2c94b59aada84123673f75bfd1b5"
  },
  {
    "url": "assets/js/67.4941b7fc.js",
    "revision": "a06fe31adc5ceca5d711845ff88f8d0f"
  },
  {
    "url": "assets/js/68.0e1b2c44.js",
    "revision": "f07c741693d6449a7b8a652e4baac885"
  },
  {
    "url": "assets/js/69.0c9d2c12.js",
    "revision": "6847f8c629349b91495e0cd211145f11"
  },
  {
    "url": "assets/js/7.1500f975.js",
    "revision": "bb215f0b5ec0362a3d0261799e53ffe3"
  },
  {
    "url": "assets/js/70.d70d8e14.js",
    "revision": "a7755b3b4c414d8409f5c12edc30ed40"
  },
  {
    "url": "assets/js/71.d704741a.js",
    "revision": "eb7dbbad28cdd82b8b92ce91863782a5"
  },
  {
    "url": "assets/js/72.c56b134b.js",
    "revision": "0c73a43202521047b604c5f2e8757db8"
  },
  {
    "url": "assets/js/73.b4e110fd.js",
    "revision": "24f7236ea81014a48d471cdb2d0a6557"
  },
  {
    "url": "assets/js/74.791ec5c1.js",
    "revision": "8a7b0332f1e147a9d2cfc99ed6eabe6d"
  },
  {
    "url": "assets/js/75.10b7efbd.js",
    "revision": "50e029869617ce14fc252854e08319da"
  },
  {
    "url": "assets/js/76.b80547b0.js",
    "revision": "7babbc1fcd896f9b16a44257da758bac"
  },
  {
    "url": "assets/js/77.9cbe3bb4.js",
    "revision": "4c96ef14146fc6f934cdaca7a02267b3"
  },
  {
    "url": "assets/js/78.ca1deb74.js",
    "revision": "c98722926086cd99048aa02f6a705cc8"
  },
  {
    "url": "assets/js/79.ae7685ef.js",
    "revision": "6ba974a1869d0e88d6c5ca5e9140dca5"
  },
  {
    "url": "assets/js/8.6716e358.js",
    "revision": "cf96136a29ae0e1e3515fe1105687cb0"
  },
  {
    "url": "assets/js/80.6fe4f172.js",
    "revision": "fc911efc2c7ef2a6e0141feff455089c"
  },
  {
    "url": "assets/js/81.dc7a14c7.js",
    "revision": "a6f61b81e4daeec3cb3a734a30eb187c"
  },
  {
    "url": "assets/js/82.c864e191.js",
    "revision": "702b4e45d0add61d8c950300474fb332"
  },
  {
    "url": "assets/js/83.09524fba.js",
    "revision": "3bb5bef340a2f4272113d435578e51e8"
  },
  {
    "url": "assets/js/84.facbafc5.js",
    "revision": "b3ef6f0f44cd47abd0002ee7b70d9ad9"
  },
  {
    "url": "assets/js/85.45d820db.js",
    "revision": "a7938c71b0c959567234c92ffbdb20dc"
  },
  {
    "url": "assets/js/86.0530e1ea.js",
    "revision": "e50362356a1b776f966e01127f8f0434"
  },
  {
    "url": "assets/js/87.78d105f9.js",
    "revision": "c27b5e8db89a43bcf41f45fd57eacf29"
  },
  {
    "url": "assets/js/88.084e7b0d.js",
    "revision": "6e872364c045f4a39107bd07659916f9"
  },
  {
    "url": "assets/js/89.8a7065dc.js",
    "revision": "924171aa557b9155feb2bc95898f89fd"
  },
  {
    "url": "assets/js/9.d5640b99.js",
    "revision": "12c07b1947a1622f4f2d289c114c5bbd"
  },
  {
    "url": "assets/js/90.5e5d54e8.js",
    "revision": "6d5173ce27fcb43a63bb06e43db0f59b"
  },
  {
    "url": "assets/js/91.2e397040.js",
    "revision": "dfcd7891b9471f3cd827d6e86970f9cd"
  },
  {
    "url": "assets/js/92.17367c2d.js",
    "revision": "a8b9b25379910c2a3cf9a4b0d6e8c4d5"
  },
  {
    "url": "assets/js/93.ecd83b77.js",
    "revision": "ec8ee18944a9134d1e3b599d9d08480b"
  },
  {
    "url": "assets/js/94.dc5984b2.js",
    "revision": "fbc09828b71c520bb4f87435beb68724"
  },
  {
    "url": "assets/js/95.b851f09a.js",
    "revision": "8b9c4253a13516e980c5e7b6b7301cba"
  },
  {
    "url": "assets/js/96.58625b98.js",
    "revision": "8267d36eee1c5bb3c3f021e2fc0cae61"
  },
  {
    "url": "assets/js/97.d1021475.js",
    "revision": "ebc89130463986a1c1394939de7b1770"
  },
  {
    "url": "assets/js/98.3096121c.js",
    "revision": "8920b475003dd6355b47934dfeaff9ad"
  },
  {
    "url": "assets/js/99.e6a0729f.js",
    "revision": "e5af0151fa7d7601d9b41e88e6e1a8a3"
  },
  {
    "url": "assets/js/app.fecc2176.js",
    "revision": "f182e44f2c3bfea892ef2facfa7441ea"
  },
  {
    "url": "configuration/api.html",
    "revision": "8bf34d68016f2a965f6237c7636e7d52"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "7a4d1c54d1200326ff2263d78eb31cf5"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "da1ba604d273f6fb09595aed73c7118e"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "3eb6a991e2f2cc7550ba13ed3b3a554d"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "c0d86e1f4b8023e627424545ae6d42c5"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "16af107ba31d2e82a7f831f7eab642f6"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "522e8c7bf4e4fee0786e5010d1c5ec6e"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "d487fb97be120ef86206f80fd3028931"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "a2af8ac7ae93cd05fa35b1c93503934b"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "9ddd24308f577ac5a48732f5dc69aa5a"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "6e428d65b7de7b9dc5a7bcabe5916773"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "be3df7d0f1a93ae55588a03c7dafbacb"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "c77c2e31aa5841597998c850d9271ae3"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "7b5cbae2bf4bf0c20899e05c2a90038d"
  },
  {
    "url": "configuration/index.html",
    "revision": "2de8044e756eaec18a3d92b0df6bac27"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "0fa50d061f0f52bfc3d14227aa7d6f13"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "b21abcd50aca192174998f323d8839d9"
  },
  {
    "url": "contributing.html",
    "revision": "bda151ec2235f68f27b68d07fe8fc89d"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "90f5590f3f88fd346dd99acd42340e0e"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "e6d7947887344f4eab1fee526f49d336"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "49a68548da6de993b543d7f746aef309"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "62213d628a8617e0168558b90b7c3fc3"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "8b9689de4b0bc0a50b7d17f29360dc6d"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "554a362023d7d8293518e51382e719e6"
  },
  {
    "url": "core-fields/background.html",
    "revision": "7fff6cdc951843dbc7d4eec313131f7e"
  },
  {
    "url": "core-fields/border.html",
    "revision": "92df355a8e93ff55e01b4095cb8dd4d8"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "7990b76b8ddf7dcc97c766892b9e5e88"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "7afd0ffbd73000fca93e89f646025d00"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "5d02817652a3969317f26f1339a530ff"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "a192dcfe05fbb445c825292c75e2ba31"
  },
  {
    "url": "core-fields/color.html",
    "revision": "5eaa8a24d22ffa5309cd12909f9f0630"
  },
  {
    "url": "core-fields/date.html",
    "revision": "aa120ccf91f583021ff19f78babbef29"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "8732af39a417032206c698a6e536b3f5"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "d5d7933c93bd7c9457644c6c6f23edbf"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "e6717b942f82bcf0f3928d7935a44b31"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "f95b17e89937635e18817c5bb902ed6b"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "194db8742edf7a7f8595db710e3459b9"
  },
  {
    "url": "core-fields/index.html",
    "revision": "16a6362b65a7b335906bda0b06b8608a"
  },
  {
    "url": "core-fields/info.html",
    "revision": "de39abc40395be473308f0564d6b8beb"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "0f825297c7fc39a967095b5f9696557e"
  },
  {
    "url": "core-fields/media.html",
    "revision": "bb3ef895d2b43897af604f35aa20766a"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "38566033fa4c91550f7f2db2362cfba4"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "e882db46bf2848c21eba2808a108364b"
  },
  {
    "url": "core-fields/password.html",
    "revision": "5dd78e77584df95d25645a292ded59c3"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "e5939b1e98e0d402d6c0d07b7e93cebb"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "a5a7aa9f678188660f76e439be5de969"
  },
  {
    "url": "core-fields/section.html",
    "revision": "bed1ee0d8bd06885df762d90facefeac"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "3b2afb85ee1e740873ea0b1df3b32a17"
  },
  {
    "url": "core-fields/select.html",
    "revision": "916417256028add8404088afc275b091"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "0813f670f6a78a2530c8e28cf38192e9"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "8464c6ee86cfc794026c07ae0e2ec4fe"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "8fbcad36217ec2291ffabe690eb25195"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "31828ae282e2a6afaa7fd0806bbc0e9f"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "94e816858242a0695b8b5d8f8ecfc304"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "973ecb85ec3859f4c081563bfdb11e28"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "0879b83697a429e042c01f80992f3b82"
  },
  {
    "url": "core-fields/text.html",
    "revision": "7811576146910a50683173880da4586d"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "e6c8f28184fd53986e34276d589669f2"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "081d220d68380a1fde02c6248cc6d567"
  },
  {
    "url": "core/index.html",
    "revision": "58e3df238abfd0f5367ae0f877bf1c7d"
  },
  {
    "url": "faq/index.html",
    "revision": "cbbb2a9e5dba9e94f4459bde8d04654b"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "1593a96ce6234b883bbec70a1414254d"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "4ffe3bda7e8fe5dbfbe80f14ae1a6645"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "6c446c49c5608341f313172f08111450"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "d326371781f0d2ccd0760ac180809327"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "7c68718c6ac183a18b36467d62cd62b4"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "b93c63ab06b65800a72fd8eb8cd3e167"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "acf69582b439ad6df4aa35b17a94af7b"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "36a43f7d00e412eaf561e9555cafbb67"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "03a4c04b403bcfdc10140fa2108ead21"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "3dca32887c769c790330922d4cf582eb"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "646e6f39976a35742e809314786a6280"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "71f113348e3e810f3bddfa7d6a119678"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "c3dbaff787844dfe2705cf344249788b"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "5b9168c9e9fcb69ea1ec10e988dd7cb4"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "494923f24a4057e85ee62be475b5b0ea"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "80d6cbd4689fbe9b0740b8e7eccae153"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "70495d30418f10eaf0bb0767ecbead75"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "67447fdd79b98d7b963a9188c6163ba4"
  },
  {
    "url": "guides/index.html",
    "revision": "9b9fc71b712a38912ce5a5e90c3087ba"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "2fad9ea0d4c6e11817e48ddc3a2ecca4"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "9914adcabbccda3890612b5855020144"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "76b4be300bf932d78e90f7c2b1e01fde"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "2946937e1811240ca6a174b858f03dfc"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "802e7690e5cc8a26204d4eb234e1b8b7"
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
    "revision": "0f901bbdc0374277faf5db8d5f3e0dc1"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "425d9aa518a35f971b6bf43c0c464034"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "56ef0bb86f8ab103a2091f19fae6a2c6"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "2bcdcb84fce823c2153d6623885aea66"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "6e2875f60da1abedf478ec0764c98a8f"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "80c883a42b1b4b7c73088f42db74e57c"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "d48a756e565ad4de91e0b8a64c73f7d5"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "93f94eed2635be727aea5310ee9171b2"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "a1920daa0c4e4091f9e13a4dee8d78de"
  },
  {
    "url": "premium/index.html",
    "revision": "df367d3dbbc29a2085107ab721994b23"
  },
  {
    "url": "premium/js-button.html",
    "revision": "ade8e80ae8383baf72b5809df494b371"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "71f94a77fd278d8bc28307a097bad124"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "a292432b37bf2f1ec8b0a5ca26fcf94d"
  },
  {
    "url": "premium/repeater.html",
    "revision": "6e1e23971d6a1dbaa3c2a606e86dbc16"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "324f3b6ded47814323cadfd44f808feb"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "4bade40ef81e2eec88d12bcae13676f2"
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
