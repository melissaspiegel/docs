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
    "revision": "d6613ee2aa172e892f9cb7b586236155"
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
    "url": "assets/js/104.a58899ff.js",
    "revision": "ae486d364909f3ea14b7a161ec4bc5ce"
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
    "url": "assets/js/14.04a60c15.js",
    "revision": "3689140ce5dc7060ef8121c1c1407069"
  },
  {
    "url": "assets/js/15.52df0734.js",
    "revision": "8529647ccd4e9c16ac78a448b5fba67c"
  },
  {
    "url": "assets/js/16.6a016890.js",
    "revision": "5c04478fe8486d2a88307184b1b6c874"
  },
  {
    "url": "assets/js/17.42d8f0e4.js",
    "revision": "d92a9879121a25a3327a08e4e750c9dd"
  },
  {
    "url": "assets/js/18.a80981d4.js",
    "revision": "6272c0a15767b0f103100f5c6d2f1f5b"
  },
  {
    "url": "assets/js/19.fdc6a468.js",
    "revision": "b05d9fb7b077b15d5cbe8cd4f36c18d3"
  },
  {
    "url": "assets/js/2.46fa168e.js",
    "revision": "9f170e3dd17eb9d163a416fcd4e82c63"
  },
  {
    "url": "assets/js/20.4b27b30b.js",
    "revision": "12146a8dc41f68c44b67bf7d52cbc5e6"
  },
  {
    "url": "assets/js/21.ddf6ab02.js",
    "revision": "66b278ec0def4247628ee051405f9e59"
  },
  {
    "url": "assets/js/22.69d2a992.js",
    "revision": "c78acab01a69d42687cccb3193bb7ca2"
  },
  {
    "url": "assets/js/23.f0bd8071.js",
    "revision": "a5ec1d2f58651eefd54f39cd7160f1e1"
  },
  {
    "url": "assets/js/24.e2555a52.js",
    "revision": "638e0c2954df3137eb8f6d38329e83e9"
  },
  {
    "url": "assets/js/25.dab4f2e0.js",
    "revision": "7dbb2fd505eb66e4dc040e2085e79bfd"
  },
  {
    "url": "assets/js/26.0cfdc336.js",
    "revision": "b4aec4c00e00f8fee210203d03ccd8eb"
  },
  {
    "url": "assets/js/27.af3a1174.js",
    "revision": "523e9da3c9630cf8a9bec30f570df937"
  },
  {
    "url": "assets/js/28.9bdb3935.js",
    "revision": "c76101050608a8e89715e1036212a69c"
  },
  {
    "url": "assets/js/29.33006f30.js",
    "revision": "a97ed34dac2a736878de440f0e52d894"
  },
  {
    "url": "assets/js/3.5e2f0cf5.js",
    "revision": "9484395d867d9306ecadfd46688d650a"
  },
  {
    "url": "assets/js/30.ca67932e.js",
    "revision": "118da95cb1789560de8a2ae4de9d86b2"
  },
  {
    "url": "assets/js/31.84b4ff0f.js",
    "revision": "72bcd365f81b3ed3f9f467c885fa5d23"
  },
  {
    "url": "assets/js/32.b4f294b6.js",
    "revision": "f0ca4708986a22fdd8bf3bed6a636e5b"
  },
  {
    "url": "assets/js/33.2a217157.js",
    "revision": "0538199eeb9c6778fbe3c2bc8649b5dd"
  },
  {
    "url": "assets/js/34.2346cf61.js",
    "revision": "f862c7ac8efb652538befe9995b55187"
  },
  {
    "url": "assets/js/35.20e1f15d.js",
    "revision": "1a49a9c67f182b9d00d9e0b51a8e4fb3"
  },
  {
    "url": "assets/js/36.99b42611.js",
    "revision": "6a8910bcd787af91062527c9a603179e"
  },
  {
    "url": "assets/js/37.e676d905.js",
    "revision": "7f425504f74af08ed172212c73fcd2e2"
  },
  {
    "url": "assets/js/38.d38d2296.js",
    "revision": "898eebf72b666a121db4982a27251a66"
  },
  {
    "url": "assets/js/39.bc71a0f8.js",
    "revision": "24b2def3d1f1d1f8ba20ddac48cc51a3"
  },
  {
    "url": "assets/js/4.b9e57436.js",
    "revision": "1858375b52f0ebaaed259f5adcb05ae5"
  },
  {
    "url": "assets/js/40.fdbf2987.js",
    "revision": "448eb60e98b78f6612b4bd7fd386211c"
  },
  {
    "url": "assets/js/41.e7e1c1fd.js",
    "revision": "47cc55f639b479d08e3198ce690f3446"
  },
  {
    "url": "assets/js/42.3b9dfd60.js",
    "revision": "505bb8e462495250f236b1a3b22a505e"
  },
  {
    "url": "assets/js/43.8090c639.js",
    "revision": "a8872607cea74043cad7f40ab57b7fea"
  },
  {
    "url": "assets/js/44.ce44bd60.js",
    "revision": "867d2ae38c73b1cbe4e6d2d895c40b82"
  },
  {
    "url": "assets/js/45.34517036.js",
    "revision": "c5bc0d5c21bf53f33ccd0fcc95fa7ccf"
  },
  {
    "url": "assets/js/46.2ad1e675.js",
    "revision": "37c3b659314f385b7b11d12549d395b2"
  },
  {
    "url": "assets/js/47.e2e5ed42.js",
    "revision": "f0c91e51212a68f854b92b48d68b0acc"
  },
  {
    "url": "assets/js/48.5613176d.js",
    "revision": "bf037b323c9c9238d3d0f3a06a41187d"
  },
  {
    "url": "assets/js/49.b7e8195d.js",
    "revision": "b8dd12c4aa0eb1e69a32728bae7b52f6"
  },
  {
    "url": "assets/js/5.46671b19.js",
    "revision": "979c7463094b16148705cac4d7556a8e"
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
    "url": "assets/js/52.8d3156d8.js",
    "revision": "486c4da90a04e20bc4aa1e05c7bd3f5b"
  },
  {
    "url": "assets/js/53.a9511bba.js",
    "revision": "798b147d6f8deac0463266bcfe5b9d6e"
  },
  {
    "url": "assets/js/54.d7f73c76.js",
    "revision": "0379c6d792f1d06149b0f726e9b5490c"
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
    "url": "assets/js/6.c286ba77.js",
    "revision": "c45162875acbbac1727685a2eadf82b9"
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
    "url": "assets/js/72.4924035c.js",
    "revision": "6212c3851d978ed1af1112695a950f8c"
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
    "url": "assets/js/97.720249b9.js",
    "revision": "ff4cd50a476cb79f29a4a7e043673c24"
  },
  {
    "url": "assets/js/98.ede8c01a.js",
    "revision": "ca388505a3c243dfac07cf4d033330e7"
  },
  {
    "url": "assets/js/99.3768ffd4.js",
    "revision": "1b48f1150966f287a5b626a645120ab7"
  },
  {
    "url": "assets/js/app.df636dcd.js",
    "revision": "9a6af65acefadce886a6363c2108737a"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "e1cf8e916ee3958b2ce94971d64485d0"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "51964fdd010c1cd45ed42451bc4dc9ce"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "a487a15b1f7463d23f51f4338f38d25b"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "85439126c354536d2caa24d60bad7374"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "dc482625e4a890261109132cf8b23b19"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "de27e8e867ea5c1f04591222d05d46b0"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "03a72e4ea684f77e1c2e9f4afa46572a"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "833787c0f661e0375ed69c1ee38cfc38"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "646ef49191d5c0dc442f01b7ef073912"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "ac6683a1cb09acff947db4f2847c9882"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "ebb0a1382f195a1630ca3b2c9fe92d40"
  },
  {
    "url": "configuration/index.html",
    "revision": "63beece7601d5ef97ace4ea6e93a8d36"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "598c90e02606dda467e75405d557d66c"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "70c1cd86b4ff4c654426dbafd92896af"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "69995a92e85ec700dcdee9134a243014"
  },
  {
    "url": "contributing.html",
    "revision": "e0a8f11fa6d241f709e4110a12addfbb"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "c7131a99be7c155dc2e4d624a4888197"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "db52664533bbe59f2ed636a22d4585fb"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "a203694b6b5f54c9aafd24f72647d0a4"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "f211755235206a4a4d7a40d45ebf17c3"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "e7de54be656948e4ccb39f6e3530c587"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "1d401cd18c7c818eaa4026bd6ca2529f"
  },
  {
    "url": "core-fields/background.html",
    "revision": "27184eb319d1570c29a021f9151f553a"
  },
  {
    "url": "core-fields/border.html",
    "revision": "5dd1e73009f36472525b911e44e8c3d6"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "95749f195c2988355d4605e22673085e"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "7f54003552e67dbd487edaaba40f4382"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "ac885e352d2ca5901d0bb4be0a1af28e"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "dbf70657194bb65d34d3ca7ec8f3e78c"
  },
  {
    "url": "core-fields/color.html",
    "revision": "250c58f6e543d17d37fef1242d5b0140"
  },
  {
    "url": "core-fields/date.html",
    "revision": "09e44fb46b92b975e21a579f41cd5e06"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "060cfd5fa82e2f8b2d492b0432c0a656"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "9929a19f849c1f1c0425083ec9d1ff8a"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "e7305c018bd07517cc5fc62affc141ae"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "07551610d9c546acfb7415b4c6e1b717"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "9197c8ab277e16d7168df522b4d91d83"
  },
  {
    "url": "core-fields/index.html",
    "revision": "7f6612e29bf631ccc6cf9058baf43aeb"
  },
  {
    "url": "core-fields/info.html",
    "revision": "6dbcd0d07412a8a74233816071f8b84d"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "22c5269500da61b93506be3aa051883d"
  },
  {
    "url": "core-fields/media.html",
    "revision": "b8cf5d22c60906d3742bfa842f7a9746"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "727f73c3d9016cdf5f32bfcea90f5d05"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "cf79dea4c0041b4badeae2d576f3545f"
  },
  {
    "url": "core-fields/password.html",
    "revision": "0803fa0c83369453660dceb55b62493c"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "7cfd9f2b76d28b2faf0d48ada673161a"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "2d04ee57e0202ef25ea5724b86dcb4b6"
  },
  {
    "url": "core-fields/section.html",
    "revision": "8a7be292c986acf154618375b28ad347"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "d565b07521d6dc9983cf9dfb342685a2"
  },
  {
    "url": "core-fields/select.html",
    "revision": "15a13b5e74b1783739b535c1673265e0"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "a40332b5da38f3ce5501e09085736f44"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "ade89f82286439ae3d9d0d436c10090d"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "f621bceb4d4aca06526cc8330f936c7d"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "346032e52c8a8428a3c35c84098b63f7"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "e182406bd91ec8c69f83d957484372df"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "d7ada2d24b023509da3b00fe1c4b00fc"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "525f389da9dc7db82f064eb1021ae05d"
  },
  {
    "url": "core-fields/text.html",
    "revision": "b25b52ebd53a9100ed61396b98656872"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "31d07e86b733cba5ea44f363371db822"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "9df4faf7cca81e6681cae921a31347e8"
  },
  {
    "url": "core/index.html",
    "revision": "5fb3577e6af5debc968a09ea84a1ed78"
  },
  {
    "url": "faq/index.html",
    "revision": "26b71f4dfdb01834b166d002a0947a29"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "0fa764c2fde8a3e651936469756d77e0"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "a0add19ce8f9a9b5e4d1fcb033a59c73"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "fb04def131ad7d04fdaa8cd147972567"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "825aa1b501aa48b1654b0e22430a2033"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "c6bb39e9199d8f1456cd972435711af5"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "0b38f0199fe154d6666453508ca12f72"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "b53e2028ab71e97b06b280530ad1739b"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "2bcffb3d469f882cbed08ab29350baa4"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "08399faee51ae923d13aaee6a82b01fb"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "7e04552a5d7947423f8662cb94e7b635"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "4a96e7541b42ae647069d4da240f9625"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "70c8149c5a573bfb457c95e24e2002dc"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "ef70b8b626777095e12eef8ca73e1383"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "812259656ee0ac224348ce1dae5ef809"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "a9566f50fd52293fb04712074525a8a7"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "c8592f9631a29c936a7a9a161db04f52"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "e1b1681377ee95aedf5c69105865eadb"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "86e55d457b989401698d716f5650da6c"
  },
  {
    "url": "guides/index.html",
    "revision": "d2314345de7f2aaf12d59b5469c20e53"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "69f5ca2ab2fddaed0581397d1a74da94"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "9506182564c898ac3d1aea771d33ea31"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "255f3f96747658b4dc67d0013e8d6809"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "503aee49263b33146cc676f404aac698"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "56bfcdc858f916bbbb2ea3b231c9bfe7"
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
    "revision": "fc69f0f295bcd9e909e2144b13ceb22b"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "377eaa21f8303c2ef4c2381764597b3b"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "93e3ae24e585fe4c730331b6a29b6d53"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "c9b8cafeda67883daeff19445724e85a"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "15e2c6191387471ca5ac6a774bd0379b"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "b7fe0e4fc9bf130688de23858d478c21"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "068c63c07a94f10de588718d3ff8dc76"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "f3e04ba0cda1933f3937104b216d189d"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "95fc48abb395b979678c19cd82bd5b10"
  },
  {
    "url": "premium/index.html",
    "revision": "ebdfa9dadda61f8c651f794ca988cf05"
  },
  {
    "url": "premium/js-button.html",
    "revision": "51f270ace72c12aeaf8fe6ec70fe620b"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "6f332eefadffbf4938436ed0fde9cd3a"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "358af83ab27f18f4ef4201d693bde055"
  },
  {
    "url": "premium/repeater.html",
    "revision": "892656e38a05f5fcc2bcd342e8303df2"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "434779ab874a89cb6be7b2d4c23d7ccd"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "a71b715f666a1166a0de61285b293376"
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
