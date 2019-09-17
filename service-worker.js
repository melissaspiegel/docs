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
    "revision": "0fadc9b5b31a427853331e8fa60abb7b"
  },
  {
    "url": "assets/css/0.styles.e6758a89.css",
    "revision": "807ff17c49ce57ad0fa70a2a5ca1d336"
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
    "url": "assets/js/10.61678e40.js",
    "revision": "dd2cdbda0a9a9e624b0f1f12e6b9c4d2"
  },
  {
    "url": "assets/js/100.546a7e29.js",
    "revision": "aa653848fd4b8245235f9e59c13cc90a"
  },
  {
    "url": "assets/js/101.697db2a6.js",
    "revision": "b6ffd094be683afe06d5cf4aef609a27"
  },
  {
    "url": "assets/js/102.17f03aa9.js",
    "revision": "c948b5da6b33ebae9450dc01e458452e"
  },
  {
    "url": "assets/js/103.5e7ffa1f.js",
    "revision": "6fb9317cfc63699459a54769f45ee9a3"
  },
  {
    "url": "assets/js/104.0855885e.js",
    "revision": "82361e88c128fb30e030ca1a00b7084f"
  },
  {
    "url": "assets/js/105.9a62c43f.js",
    "revision": "559b6f11feeb1aa2fcf276716ec746d0"
  },
  {
    "url": "assets/js/106.8838bac5.js",
    "revision": "bdf319611ca4c7827fb9e8fb668a4a92"
  },
  {
    "url": "assets/js/107.29d2b438.js",
    "revision": "5df836499f0e0163fdc2457e82baea11"
  },
  {
    "url": "assets/js/108.43a01f57.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.2e1a79cf.js",
    "revision": "eb5bd877b135cef2f03cfc62c2d888f9"
  },
  {
    "url": "assets/js/12.9f6f253a.js",
    "revision": "f86eb0718d2a07960ad21a0576092aee"
  },
  {
    "url": "assets/js/13.e327c82d.js",
    "revision": "b011da46cf6cd26b11e17eed2a05d07e"
  },
  {
    "url": "assets/js/14.a4ff3e73.js",
    "revision": "d051293343912052b9f1f269ac00fb93"
  },
  {
    "url": "assets/js/15.7781125e.js",
    "revision": "16ec1ac9bb9b0d08951c5cb104774b5e"
  },
  {
    "url": "assets/js/16.0e28282a.js",
    "revision": "6359e2dbde706e73987985269c79026a"
  },
  {
    "url": "assets/js/17.ccbee32b.js",
    "revision": "336652902d463adc329c9bedf645f23f"
  },
  {
    "url": "assets/js/18.13146e66.js",
    "revision": "01dd6440e2faff57a03216633696bade"
  },
  {
    "url": "assets/js/19.27bb78ae.js",
    "revision": "29b0bb3200efe65c1b8932b161ab48c9"
  },
  {
    "url": "assets/js/2.8711c13d.js",
    "revision": "0606c409385b70701db4b776b2ae0c48"
  },
  {
    "url": "assets/js/20.47401c5d.js",
    "revision": "f66efd65a483e359f8c8654db2f6a0ec"
  },
  {
    "url": "assets/js/21.ea43c117.js",
    "revision": "767022e6c7305fbaf3faa2ff1a4f5b9a"
  },
  {
    "url": "assets/js/22.02d38c78.js",
    "revision": "9214005d1294a3efd4809f8640abcf0f"
  },
  {
    "url": "assets/js/23.3de78f01.js",
    "revision": "58c91168e7bf8fc80d1c238579e64163"
  },
  {
    "url": "assets/js/24.283bfadd.js",
    "revision": "46b55cde6a97be9e3e67aad5507a8d65"
  },
  {
    "url": "assets/js/25.cbe553ba.js",
    "revision": "306a83e9c6e6f33caabe9a19cc0cd546"
  },
  {
    "url": "assets/js/26.32513cdb.js",
    "revision": "55988382ac5fd127992f894d758bd07b"
  },
  {
    "url": "assets/js/27.a1c472c3.js",
    "revision": "0f2fdfb3b284b93543b21cbdb33e2140"
  },
  {
    "url": "assets/js/28.c970af6d.js",
    "revision": "66e15c7b67e2644eb101a24e677857c1"
  },
  {
    "url": "assets/js/29.ad07299b.js",
    "revision": "d8d63cab38ce87ee13fde9cfc5b31732"
  },
  {
    "url": "assets/js/3.5b7457de.js",
    "revision": "2b0b06f64085c24ddc9c47bb3527fcf8"
  },
  {
    "url": "assets/js/30.43f951e6.js",
    "revision": "96581d98fccefd36efcc9728be30fd4a"
  },
  {
    "url": "assets/js/31.180f664c.js",
    "revision": "8394769dd242e8be889fab806d957da5"
  },
  {
    "url": "assets/js/32.b9f52688.js",
    "revision": "c1a2158696accf0b56cc77b5ff4c56fe"
  },
  {
    "url": "assets/js/33.95e16e1f.js",
    "revision": "7e08264900ab353c992cfada3902c786"
  },
  {
    "url": "assets/js/34.f9570714.js",
    "revision": "b04b585d3bf11c89622b87397a4db0c7"
  },
  {
    "url": "assets/js/35.e545a2df.js",
    "revision": "d9fb77ef6950dfebc97ea6c6ee253649"
  },
  {
    "url": "assets/js/36.3cd84278.js",
    "revision": "3e25af2e3c9429781e819cb4cb5d2960"
  },
  {
    "url": "assets/js/37.226474f3.js",
    "revision": "7640e2d95975b8f1df5f0a7298a32b3e"
  },
  {
    "url": "assets/js/38.417d20ad.js",
    "revision": "643f5ac61c79c3fb6fd13a954638b936"
  },
  {
    "url": "assets/js/39.3746240c.js",
    "revision": "49b018b7d20f34a56460a2f03024bdf7"
  },
  {
    "url": "assets/js/4.c826d493.js",
    "revision": "b1a10ecbebe8c6e79146145bf73a0948"
  },
  {
    "url": "assets/js/40.3cd8b406.js",
    "revision": "bff17d3fe33c1f6a38bde4b97a2e4714"
  },
  {
    "url": "assets/js/41.5af19577.js",
    "revision": "39914edf2418fe788ed3c58deed51a2c"
  },
  {
    "url": "assets/js/42.25b483cb.js",
    "revision": "92f7f3e85111106adda28bbfa152f3fa"
  },
  {
    "url": "assets/js/43.2ea5b08f.js",
    "revision": "79f45b4dd2dbd52ca592b0e2adf477a4"
  },
  {
    "url": "assets/js/44.2644bcfc.js",
    "revision": "0f5c62d5627198d959e5fa2596d7a073"
  },
  {
    "url": "assets/js/45.3f4566b8.js",
    "revision": "2b373b5501b68ae9bbc635e39d8460cc"
  },
  {
    "url": "assets/js/46.c6c19e6a.js",
    "revision": "f9c8256bba6e6aac9ed843850fece35f"
  },
  {
    "url": "assets/js/47.0838a079.js",
    "revision": "5d9093311507983ca125e2aa79596a8a"
  },
  {
    "url": "assets/js/48.e310b87a.js",
    "revision": "1745c358ee6de7164d70e9eedd6baf6c"
  },
  {
    "url": "assets/js/49.420d0aa6.js",
    "revision": "12ee43f5444581083035134b74f95be6"
  },
  {
    "url": "assets/js/5.acbd72f3.js",
    "revision": "73e9c74a09df97c6a0dc431436bf3493"
  },
  {
    "url": "assets/js/50.0687cbe7.js",
    "revision": "8ce25285207151fab622fbb52c5ad3bc"
  },
  {
    "url": "assets/js/51.1f8403a4.js",
    "revision": "780d0bf4e773e721a43a8211d7391d1a"
  },
  {
    "url": "assets/js/52.d21503d0.js",
    "revision": "8809bd4bcb8facb0a394c77f991d67d3"
  },
  {
    "url": "assets/js/53.1bce9b9d.js",
    "revision": "fc3b801831889dbb9f08a331246a5518"
  },
  {
    "url": "assets/js/54.4f07f4de.js",
    "revision": "f3d532c79a4127e50e9a837e57b564c9"
  },
  {
    "url": "assets/js/55.3c41ff18.js",
    "revision": "12b3abf28dff121a13170be5d90f4cc3"
  },
  {
    "url": "assets/js/56.ef2f61b6.js",
    "revision": "7585162574dca9c66358d84d46639cad"
  },
  {
    "url": "assets/js/57.2c379fa5.js",
    "revision": "27e1e61d0ded01265ee8fc22e1ee4aa5"
  },
  {
    "url": "assets/js/58.3b3e620b.js",
    "revision": "de6afe45bff682a68e2c0de398816b5c"
  },
  {
    "url": "assets/js/59.0632ad6e.js",
    "revision": "3a817a49246447bd397a482dd3fcfcd5"
  },
  {
    "url": "assets/js/6.6eebb7dd.js",
    "revision": "202258e3ca1fcf9c40340922970f5e72"
  },
  {
    "url": "assets/js/60.e8587c7a.js",
    "revision": "a936207c6cdd8a2c0b5dfe47bcee77f5"
  },
  {
    "url": "assets/js/61.6ce8aa8a.js",
    "revision": "6d7cde8d1ece2b4f168da1a94366146e"
  },
  {
    "url": "assets/js/62.8efb7225.js",
    "revision": "2b8fa5a1ef2cc7a9d00980eba7183cb2"
  },
  {
    "url": "assets/js/63.9c0ea010.js",
    "revision": "7c7b9963ba63f972ce138d950906b81c"
  },
  {
    "url": "assets/js/64.41c599eb.js",
    "revision": "32ebb8fea0cf5202f215a792c97d7da0"
  },
  {
    "url": "assets/js/65.f141aedd.js",
    "revision": "dcd4c53dd6dfa2e40f12b364ff4f11a3"
  },
  {
    "url": "assets/js/66.9061c5f4.js",
    "revision": "5becf0fd84acda70b9f3ea072da76941"
  },
  {
    "url": "assets/js/67.e3889415.js",
    "revision": "378998d27abb0b664efca6fa07521731"
  },
  {
    "url": "assets/js/68.1b927e99.js",
    "revision": "167186a18ac693616eaab87851010ec8"
  },
  {
    "url": "assets/js/69.a1f64d1c.js",
    "revision": "90c0a9a6a13090459160fd68563ba789"
  },
  {
    "url": "assets/js/7.812c1049.js",
    "revision": "e3dab1af1895fe70a1d6cdd2cc9b2d07"
  },
  {
    "url": "assets/js/70.356c28ec.js",
    "revision": "f300f9dfb2933db50dcab57799f3660b"
  },
  {
    "url": "assets/js/71.9ec10a09.js",
    "revision": "991570c474abd6d02d2d502bbffbea59"
  },
  {
    "url": "assets/js/72.67513f2e.js",
    "revision": "657442c36dda3ba6424a26608900638f"
  },
  {
    "url": "assets/js/73.c4989558.js",
    "revision": "50342406c75338c0b56248b6100e64ea"
  },
  {
    "url": "assets/js/74.706098b6.js",
    "revision": "2f4a91151aab1529394e88b6b88987a6"
  },
  {
    "url": "assets/js/75.9b9529ad.js",
    "revision": "613986c3ad0ab342682cb4317d27d107"
  },
  {
    "url": "assets/js/76.30f7ba38.js",
    "revision": "0f45380b9d1027e75b33adaff08ecbfc"
  },
  {
    "url": "assets/js/77.5b931b66.js",
    "revision": "d8825d58a30c2a6987030b9bcdac8d46"
  },
  {
    "url": "assets/js/78.43e3b698.js",
    "revision": "1a75aa3ff528ec303a69035fd7947b20"
  },
  {
    "url": "assets/js/79.6fb487d7.js",
    "revision": "22889f9e0ff763addfc22072b6fc5f4d"
  },
  {
    "url": "assets/js/8.5d2a89f0.js",
    "revision": "e8fd85d4d79a49207b29b273bb646d73"
  },
  {
    "url": "assets/js/80.2315ea2e.js",
    "revision": "1ce847f2a796642b7f4f9649be03c4fb"
  },
  {
    "url": "assets/js/81.2d8a0c07.js",
    "revision": "620985a1a4eda50a6fe56ceb2dd3efca"
  },
  {
    "url": "assets/js/82.e9d099d8.js",
    "revision": "5634b222a6fdf4cd019112602f7e7eaf"
  },
  {
    "url": "assets/js/83.2486deac.js",
    "revision": "b3493025630042214c473525a28cc7c5"
  },
  {
    "url": "assets/js/84.abe296e9.js",
    "revision": "7fbf664841bbf186db2e9f55b8bc2609"
  },
  {
    "url": "assets/js/85.8c4b926b.js",
    "revision": "ffad9a0b4377b237183c3c4bc4484cae"
  },
  {
    "url": "assets/js/86.33a91f38.js",
    "revision": "b27cc9dc5c1a2eab247169aea6c15b26"
  },
  {
    "url": "assets/js/87.c9896a86.js",
    "revision": "8755257882007f4ef54a93ca305a61d0"
  },
  {
    "url": "assets/js/88.ef60b71c.js",
    "revision": "ca5beca7caa5dbe22afa5d56aab24ab3"
  },
  {
    "url": "assets/js/89.c8c61327.js",
    "revision": "7cebeefc77db7eb0227445828d31a6b2"
  },
  {
    "url": "assets/js/9.19cbd2e8.js",
    "revision": "c9e74492f67c266f258e24a0664e29b2"
  },
  {
    "url": "assets/js/90.38a7c3ee.js",
    "revision": "139c8ac564b2a0550f9f86ffecd5b728"
  },
  {
    "url": "assets/js/91.79b5c938.js",
    "revision": "84de2818f3ced4b3d8c543b3d90f4732"
  },
  {
    "url": "assets/js/92.277ebce0.js",
    "revision": "aa137a62655536db481a5ea84f88d09c"
  },
  {
    "url": "assets/js/93.8c312e77.js",
    "revision": "0f34cc49ccfe00b6c7a606913d9b04be"
  },
  {
    "url": "assets/js/94.f62e384f.js",
    "revision": "532c45b47a2a3a3135f69bf1b99d9459"
  },
  {
    "url": "assets/js/95.d9dad069.js",
    "revision": "992a5cc5b5c5d5b51a990d27a4df7e28"
  },
  {
    "url": "assets/js/96.ba1543b9.js",
    "revision": "67f84b89abc28fef6315f651edd00a5f"
  },
  {
    "url": "assets/js/97.9a6f2ac2.js",
    "revision": "d1fbcd2c397fabec8665c0d3e5905b58"
  },
  {
    "url": "assets/js/98.54e7980e.js",
    "revision": "7a158be5ae73d62fbfe8931f417295dd"
  },
  {
    "url": "assets/js/99.917f42d0.js",
    "revision": "dc3e8f74e6938c3eb9ea46574db766bf"
  },
  {
    "url": "assets/js/app.2fee494f.js",
    "revision": "da3de153b0b7e56c473a4f101bc5f485"
  },
  {
    "url": "configuration/api.html",
    "revision": "ae727d8868b70ef6747e1a1d6d684448"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "67a15a981b706a55d62e56aabc41b47a"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "bc1064e3d21671c1729cba073b44d2cf"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "8686a4db50215b828b2c6724c4256dfb"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "c68b365db3642e069f57c8f9960aee8f"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "e673f435fc54aff5321b5ec62349cfb7"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "423f409215798cee381da1343b9637a1"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "127d913a02586ed2a28c276566aa093b"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "2a804121f072407ff43a877922193333"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "583e248ed4e48ce71b5f72a36bc19169"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "24a278a4a82a8cddbd20eb8bdd91af2d"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "4b3426a3fb74e7879313c34894bbd44d"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "9439022c0990ed1e745786a1c8955f08"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "cbba30a7ce35d476c3c54e4ebdab1c26"
  },
  {
    "url": "configuration/index.html",
    "revision": "e33b36a06882ce495ca92b1869278f82"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "b4154b91fc771935105fe7f5f28911a3"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "2e8c798dfc2889a89ae5944f65875634"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "0f9b7c84af9dd99a44d913e4876ccdf6"
  },
  {
    "url": "contributing.html",
    "revision": "05f3af820aec32d21db679820a010c27"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "4d0ec1abadfc00f4c293344ebed4641b"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "0cc13ff3f14d8e28005ee29fa85032e0"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "2b61fbfa30c802cde748a67c6a666bd9"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "22b0e8e4bc5607e457d38a76471c6bd7"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "7be80e00f5ac985531f702e1e53eb503"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "bcf55617145267a3a3d3659a21151f15"
  },
  {
    "url": "core-fields/background.html",
    "revision": "17258ac1eee51239c31fd7d5e83e7a84"
  },
  {
    "url": "core-fields/border.html",
    "revision": "7cf7df6f4d025d4ad21d6397bc4cdeb8"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "94f4a03894d0bb72db420bc03b07acb6"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "3f2ba2c83f8d32dc6ba66fac9e6beada"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "cf0e259e68b7c7d68fe1aee3d0146482"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "ac57c42899a81f43e553c7b3c9d9be19"
  },
  {
    "url": "core-fields/color.html",
    "revision": "81aaed17fe95c774897a851d73194b82"
  },
  {
    "url": "core-fields/date.html",
    "revision": "9e7d01cad432494ada743263703f35e0"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "39d985e049f00df891cfa0e4e86543d8"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "140ac91e3928ef2e1e9aa114d2b14432"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "b5ac44501a8e84e209c6824577489c85"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "e2b163d7eae5e4713cc72d306d3e14aa"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "d01ea689880619a1bc2f2033028961b5"
  },
  {
    "url": "core-fields/index.html",
    "revision": "bc5e7501eec5f3668022eeaabebe58f2"
  },
  {
    "url": "core-fields/info.html",
    "revision": "ce1be147af39cfca7fbc67204de89fae"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "472d1c8d06fe0d91df816373a089ce0a"
  },
  {
    "url": "core-fields/media.html",
    "revision": "3cfd4fdbc622f367500d08b4c646d906"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "fa3cf8df76372adbeae58e883aa6baa1"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "ed6ba800f19eb79f727f03531d71109c"
  },
  {
    "url": "core-fields/password.html",
    "revision": "df2850159780016571c0300e2d999666"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "0304775dc7394ad2d0ec26709fca8ae8"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "e00c22be9f284716b7b39b259efb4daf"
  },
  {
    "url": "core-fields/section.html",
    "revision": "30082f244d3a8a1fc415d71f11a03dc2"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "2985fc5031d24a2ffc65b49f13d7ef71"
  },
  {
    "url": "core-fields/select.html",
    "revision": "16587bffb15017f7353b05163668d3fd"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "44113578334fcb1a4ee4df93545461b8"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "2ef9de39e70af3e3098afb6a8828cc29"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "0f0596de83703335237f5445b74729f1"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "99f2a095d7cf3541aced0beb18e5febc"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "9321d2efdbcfc872855d80a1875f49c8"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "693f04678900545deef3352641051fb7"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "6dc5eff476cd62bc995b95abf1aa8d6d"
  },
  {
    "url": "core-fields/text.html",
    "revision": "463bbe0b9231bdf855ea9e8ddcaf59ce"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "3fcee279446f885e1f7a2e2d7225392f"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "b28b95655a478079e2c7327a7f70ffe7"
  },
  {
    "url": "core/index.html",
    "revision": "84565eda27e8bc45c4f0cd17d2596e51"
  },
  {
    "url": "faq/index.html",
    "revision": "cbd8ec81a2fcc4fe04f1a3adaf56dad9"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "727f5f2a23bcfd0e0b73e8c972560f08"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "f02359dee673c4fe4112f878d4693bb0"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "069089e883ff53af9c72fff2df03a683"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "8f1953d26f8143930dd3206caa44d608"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "a0cf60592b861e45e7eb2fd2a3ce16a5"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "88a2647f8d55c75e546b95fdd47e7189"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "8839fc9fd7493cff4b926d08fdc2dd2c"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "fafaa75df72c75cd09f05f674cedd136"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "75fe79cdbbc2c9a2e8fead5269213e87"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "85c2545159a451669745bff3706b67ba"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "0e9eb5249fc28319b159c175f657f2c0"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "64f584e003b692af3902ab0f788479e5"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "c3959ab61b8c1091a4314b6f9e22c71a"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "6574e0d16cedd21920b445ee037ab5bf"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "2fdc7f01525fba5b31efa4eeed3ad7a5"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "15f21257739ade1a9e3d8ef0deaf7659"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "c1003dbcabe51ca73b102565b30d3c2c"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "23cb1693e6c626ab6d09f622ad7af369"
  },
  {
    "url": "guides/index.html",
    "revision": "394c766cacaa5ba7f23be0763e1736ba"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "f7f4341b1a33851a1f9976fb3df03271"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "12e78722f1b19af3feb5a467cea6a299"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "bf8c2299b589f660c2fe0490bb70101b"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "b3604bc9162a8ecb76ed72eaeb4d0973"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "3c3813d2cea2e88537f503376eb1f7a6"
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
    "revision": "6efc125faa6277d3b5e76aaaf3fdf46b"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "1ad6e4171e3bed0515f665ee74503e3d"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "990e80da419b485410a8a36d13efd4d0"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "12c2c946f52fb7748c706723855b9e00"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "49ef2580f87866ea1f34c3df85e72aef"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "ac3c13aabf3d120c6429c574609ae340"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "f8bbaeb77c316f3e3c40592e1b5115c9"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "886428c5764dea0ca2d8afee238c85eb"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "7bd1266f9f59992b731a594cf2f3c690"
  },
  {
    "url": "premium/index.html",
    "revision": "20ba1f82b6f9f9c15d8f892d688b95c1"
  },
  {
    "url": "premium/js-button.html",
    "revision": "a8df66d099285e0008ec7176584238df"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "6fe3e696bbe96fc1d315be3ce44206c3"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "aa52d1e3773e29edecf34125a6a0cbac"
  },
  {
    "url": "premium/repeater.html",
    "revision": "e487b67f960100217c6f758cf92f71cc"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "b30da0a27a3e8a5fbee6d7c7f3dc1958"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "e475bb064c3950e6bc237f25a6af50e1"
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
