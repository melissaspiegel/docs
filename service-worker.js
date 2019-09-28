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
    "revision": "3fe2eaf601346204f64a6d5c647893bd"
  },
  {
    "url": "assets/css/0.styles.8c005762.css",
    "revision": "4cdd48c104705e8cf0f8ee34f35089e1"
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
    "url": "assets/js/10.b0925b97.js",
    "revision": "282ee9792f3d8dbc9dad86260112d9c2"
  },
  {
    "url": "assets/js/100.e3cfc4ee.js",
    "revision": "40c354e1de5f98e2296f5dcf46d58f04"
  },
  {
    "url": "assets/js/101.1eeda470.js",
    "revision": "55982dbaf9afd8a413611d7b63e1615f"
  },
  {
    "url": "assets/js/102.de46a9c4.js",
    "revision": "798a5171216bf19b8970d968e9814a53"
  },
  {
    "url": "assets/js/103.05d3cf4e.js",
    "revision": "ad3660b3c844f9315d7bc8583cbe8dd1"
  },
  {
    "url": "assets/js/104.03620ca5.js",
    "revision": "81c06b90c010331387d8a1b011fb1f2d"
  },
  {
    "url": "assets/js/105.82d0e64a.js",
    "revision": "df211d9dff95a0824aa7f4d561738cf3"
  },
  {
    "url": "assets/js/106.ad616637.js",
    "revision": "ac6d8b757c20123bd08c0428c5ab3cb0"
  },
  {
    "url": "assets/js/107.98d7c79b.js",
    "revision": "2068f0fea7f0c05b50f73020ab187430"
  },
  {
    "url": "assets/js/108.09b8b8c4.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.f41cb989.js",
    "revision": "13528008a321fd4bcc6953dd49e973c0"
  },
  {
    "url": "assets/js/12.22eb0f45.js",
    "revision": "cb5085b4302f61f404cb758cd9980be9"
  },
  {
    "url": "assets/js/13.a124ccb9.js",
    "revision": "50c2212812a6cec9da7daa9e183073be"
  },
  {
    "url": "assets/js/14.2148352b.js",
    "revision": "661ee5ef9483e94b953104a5732e2472"
  },
  {
    "url": "assets/js/15.a95fdc1b.js",
    "revision": "c8836eeacb2b2abd9600b61acfd26370"
  },
  {
    "url": "assets/js/16.df8085b3.js",
    "revision": "56eb505765178d13ec4471159687c203"
  },
  {
    "url": "assets/js/17.754d3be7.js",
    "revision": "aad50dd1f2298815cc7afcc0f935ff74"
  },
  {
    "url": "assets/js/18.bd3903b1.js",
    "revision": "c4f38d7e9b66a8166e0d805c130f063d"
  },
  {
    "url": "assets/js/19.b5b40a02.js",
    "revision": "29b0bb3200efe65c1b8932b161ab48c9"
  },
  {
    "url": "assets/js/2.118f6404.js",
    "revision": "29daf0cbe18fecb5f9dc7bc6d19da9d7"
  },
  {
    "url": "assets/js/20.98a67242.js",
    "revision": "b6aaa4d74e2dc267a621e8d8ab8f1410"
  },
  {
    "url": "assets/js/21.ed258030.js",
    "revision": "767022e6c7305fbaf3faa2ff1a4f5b9a"
  },
  {
    "url": "assets/js/22.b65aad63.js",
    "revision": "710893bd5c8a629715a1760270dcc44b"
  },
  {
    "url": "assets/js/23.7b409ca0.js",
    "revision": "5fbc41e4c7a493262e1e9026c2c92f37"
  },
  {
    "url": "assets/js/24.a8b73bdd.js",
    "revision": "46b55cde6a97be9e3e67aad5507a8d65"
  },
  {
    "url": "assets/js/25.0da79720.js",
    "revision": "306a83e9c6e6f33caabe9a19cc0cd546"
  },
  {
    "url": "assets/js/26.62c40e4a.js",
    "revision": "42c8eda7f06fffeca37f5fc4b32cb812"
  },
  {
    "url": "assets/js/27.402528b9.js",
    "revision": "40751b5c164eec89f57c96eddf473146"
  },
  {
    "url": "assets/js/28.a85667bc.js",
    "revision": "e39153c6d8ebf0f39ae1d282ee101e05"
  },
  {
    "url": "assets/js/29.e11d3cbb.js",
    "revision": "43725eecdc7bca1fa969e178053a4837"
  },
  {
    "url": "assets/js/3.18d73eb9.js",
    "revision": "4015eb7e9a247366aa8def847a99282b"
  },
  {
    "url": "assets/js/30.4939493f.js",
    "revision": "f90bc73658042c9ccc00f3b84776f16f"
  },
  {
    "url": "assets/js/31.9ddc98fe.js",
    "revision": "ba8c3eb644a88b50a38c5c2db740ec0d"
  },
  {
    "url": "assets/js/32.ac19e992.js",
    "revision": "60306f2815b269f4f5d56dbe22ed444f"
  },
  {
    "url": "assets/js/33.2319c56b.js",
    "revision": "56d1f98756d41c9863c4454c38fc3222"
  },
  {
    "url": "assets/js/34.a9e0ee3f.js",
    "revision": "a5d053cec5b62401cff15799626c9225"
  },
  {
    "url": "assets/js/35.b581dec7.js",
    "revision": "4d788f85babdb278468d37896df33e6c"
  },
  {
    "url": "assets/js/36.5c0a3c36.js",
    "revision": "fc5cfeda593d504fc706bb616d25be4d"
  },
  {
    "url": "assets/js/37.e23e8db6.js",
    "revision": "bd2d61c54d9f4ad2028e32e5ffdcfc64"
  },
  {
    "url": "assets/js/38.9bf016a2.js",
    "revision": "ab92cf1a225f222ee7e0ed174201316d"
  },
  {
    "url": "assets/js/39.822c3ba6.js",
    "revision": "0cf9eb9da536e3e8b1ca2b9426c0365d"
  },
  {
    "url": "assets/js/4.cabcd6c9.js",
    "revision": "b1a10ecbebe8c6e79146145bf73a0948"
  },
  {
    "url": "assets/js/40.0ffcee3d.js",
    "revision": "97c1eff3a9b80d633f136aa2f9d48577"
  },
  {
    "url": "assets/js/41.84df5a1a.js",
    "revision": "c7e80e15f0b8587baa41965ae7471217"
  },
  {
    "url": "assets/js/42.e76613a2.js",
    "revision": "1eaa966368f1a4c42ffa4cf8d153dcae"
  },
  {
    "url": "assets/js/43.f3cb2dcb.js",
    "revision": "06ba5d838291c29ba08378fa94d52882"
  },
  {
    "url": "assets/js/44.707bd72b.js",
    "revision": "c960e0dae693ae3a6389c52e19eb0a61"
  },
  {
    "url": "assets/js/45.f472bd92.js",
    "revision": "6a1a49248106f82c35c339108db30b22"
  },
  {
    "url": "assets/js/46.1e8eea87.js",
    "revision": "f110b581aa0f8b51301d623897d40c6e"
  },
  {
    "url": "assets/js/47.1692d019.js",
    "revision": "e077ed2ba285bb50da6fd931f8eaaea6"
  },
  {
    "url": "assets/js/48.93361e34.js",
    "revision": "2e4171d53d42ef825ea1f0c1d0357b8f"
  },
  {
    "url": "assets/js/49.7c366d33.js",
    "revision": "12ee43f5444581083035134b74f95be6"
  },
  {
    "url": "assets/js/5.093ec226.js",
    "revision": "87f605bf9f469878b90c6b131c063e78"
  },
  {
    "url": "assets/js/50.cce8bd35.js",
    "revision": "4454f71c6abab81f821a5eca2b794595"
  },
  {
    "url": "assets/js/51.e1dade3e.js",
    "revision": "f37ced1de9ced5121f573c96a828435e"
  },
  {
    "url": "assets/js/52.9e7c47d0.js",
    "revision": "22d97f13020d35c16acd239552a93490"
  },
  {
    "url": "assets/js/53.2563f947.js",
    "revision": "b6124b260b345686cfea34590446e973"
  },
  {
    "url": "assets/js/54.89deea01.js",
    "revision": "6e250ace207339a53977989f99f2e15e"
  },
  {
    "url": "assets/js/55.db07eb1e.js",
    "revision": "8bfb4e96a3448ce3734bad493f8ec144"
  },
  {
    "url": "assets/js/56.8215f028.js",
    "revision": "9d7af37caa5c1ae205333b85a9f5aad8"
  },
  {
    "url": "assets/js/57.2f998541.js",
    "revision": "8e79e7dc6c117659e1eb336b139a57ef"
  },
  {
    "url": "assets/js/58.b644b6cd.js",
    "revision": "bb87347a48b4be5fc80dee336d8ed038"
  },
  {
    "url": "assets/js/59.ac68601e.js",
    "revision": "aa3bb8ee081b20f42c840f7075293aff"
  },
  {
    "url": "assets/js/6.07a14459.js",
    "revision": "0bbe80a4ea7bc98f823e73c701e958be"
  },
  {
    "url": "assets/js/60.35841057.js",
    "revision": "92f878315fdcd648dc02e13fa4d31301"
  },
  {
    "url": "assets/js/61.4a48bf3a.js",
    "revision": "55ab49be37670baf905a29b9f2c3ac14"
  },
  {
    "url": "assets/js/62.6db8d588.js",
    "revision": "2b8fa5a1ef2cc7a9d00980eba7183cb2"
  },
  {
    "url": "assets/js/63.6ef18423.js",
    "revision": "76e48499d78b1374665ab3bd8aa5ec1d"
  },
  {
    "url": "assets/js/64.d4860815.js",
    "revision": "7f8c3e581a5908932cd6910a30783734"
  },
  {
    "url": "assets/js/65.f8f3c826.js",
    "revision": "08277d8bf5acb3e33c5efe55bab5f5cc"
  },
  {
    "url": "assets/js/66.a02a42f5.js",
    "revision": "0f3fc7880cce9198d3b218aea97e0d59"
  },
  {
    "url": "assets/js/67.2c355790.js",
    "revision": "b96eaadb967bca21ac344999f9c5ab64"
  },
  {
    "url": "assets/js/68.c6d20ed5.js",
    "revision": "31d879bbe69af0bed40c563094b17e3b"
  },
  {
    "url": "assets/js/69.25317794.js",
    "revision": "72f6ef4a9c01d252dcbdc3307afddb14"
  },
  {
    "url": "assets/js/7.65ea5cdb.js",
    "revision": "c0cc7cf0bf7b1ee6634252dacb64c2b9"
  },
  {
    "url": "assets/js/70.97f7692b.js",
    "revision": "258b73086e510016bdb833fd5d3e9904"
  },
  {
    "url": "assets/js/71.09c3077e.js",
    "revision": "62245ad8f89d24cbee35a67e5f0da9da"
  },
  {
    "url": "assets/js/72.b94a6b04.js",
    "revision": "ebd538bb6eb0c54680ff0b11d6e5f8f0"
  },
  {
    "url": "assets/js/73.0d7f5e7a.js",
    "revision": "fbd6f284e4743dbb4ffee45c02aee3cd"
  },
  {
    "url": "assets/js/74.e24ad968.js",
    "revision": "ae816e1ff1ce8c817a05891312728479"
  },
  {
    "url": "assets/js/75.aec65443.js",
    "revision": "613986c3ad0ab342682cb4317d27d107"
  },
  {
    "url": "assets/js/76.1027e841.js",
    "revision": "0f45380b9d1027e75b33adaff08ecbfc"
  },
  {
    "url": "assets/js/77.bd346b32.js",
    "revision": "d8825d58a30c2a6987030b9bcdac8d46"
  },
  {
    "url": "assets/js/78.0649876e.js",
    "revision": "1a75aa3ff528ec303a69035fd7947b20"
  },
  {
    "url": "assets/js/79.d1d73a83.js",
    "revision": "d12e2bcfb4bf1e58f558826e97f82926"
  },
  {
    "url": "assets/js/8.6bb41ade.js",
    "revision": "6d5e66304e78ce7bbd1a8e209318a92e"
  },
  {
    "url": "assets/js/80.4f87ed11.js",
    "revision": "a36e4211f66a70b26bb8c7a186fa0371"
  },
  {
    "url": "assets/js/81.74c450a0.js",
    "revision": "620985a1a4eda50a6fe56ceb2dd3efca"
  },
  {
    "url": "assets/js/82.bd06d222.js",
    "revision": "b888733f2aaf8d33a01c5e511bfd3fd1"
  },
  {
    "url": "assets/js/83.7a5566d7.js",
    "revision": "6febd0f03eefb3e9bda65478c4964008"
  },
  {
    "url": "assets/js/84.77a0b459.js",
    "revision": "d1a9ef96a3fba759f6e4a99022f42c6b"
  },
  {
    "url": "assets/js/85.0c2fad9a.js",
    "revision": "f9b3f6ac8e0e176a0ac46f0cded2d986"
  },
  {
    "url": "assets/js/86.566400c3.js",
    "revision": "b27cc9dc5c1a2eab247169aea6c15b26"
  },
  {
    "url": "assets/js/87.27efa3c6.js",
    "revision": "20d5288af3f0b846d5b872982a7e25fc"
  },
  {
    "url": "assets/js/88.488cbcb5.js",
    "revision": "f2131c072578253b7c5440555b583afb"
  },
  {
    "url": "assets/js/89.e34bd940.js",
    "revision": "7cebeefc77db7eb0227445828d31a6b2"
  },
  {
    "url": "assets/js/9.2ed98711.js",
    "revision": "453dd286c42bbd507278a99fc7085974"
  },
  {
    "url": "assets/js/90.9d47c79d.js",
    "revision": "139c8ac564b2a0550f9f86ffecd5b728"
  },
  {
    "url": "assets/js/91.eb01f661.js",
    "revision": "174afe9222d800bc69986e00a43a8f9f"
  },
  {
    "url": "assets/js/92.4a5d7cb7.js",
    "revision": "971bd179aefaecf8fb9aac31077d9907"
  },
  {
    "url": "assets/js/93.e196cf9f.js",
    "revision": "5cb3a38a87e6dc433dd6a235d954c735"
  },
  {
    "url": "assets/js/94.59aac462.js",
    "revision": "f0c7175f11138ca015f618ba915d537c"
  },
  {
    "url": "assets/js/95.8e35024d.js",
    "revision": "1d1575f047fef98fef12bc13231e830f"
  },
  {
    "url": "assets/js/96.aae866f9.js",
    "revision": "cd1ca8bbd5ca641c413edfe3b40adddc"
  },
  {
    "url": "assets/js/97.f73bb2e9.js",
    "revision": "0e7d23c2534bf3476b028192bba19016"
  },
  {
    "url": "assets/js/98.568d8f04.js",
    "revision": "b1ed9f068f63175345ee39853995c68f"
  },
  {
    "url": "assets/js/99.c6157bf6.js",
    "revision": "6d6a04c1ec431927ecbdde96e935aef7"
  },
  {
    "url": "assets/js/app.22796b4e.js",
    "revision": "d79e8d809d90f4caf47532ba89c709d7"
  },
  {
    "url": "configuration/api.html",
    "revision": "796b7cdf64152c4eb9fbe610e0933635"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "ca74a911b3e14aab53455438c066d4bc"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "a2877af97bc86e990696a2dc56456521"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "744dcd2294f9a2aa057e1c468ecd2051"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "a8d0fb820c23a6700ec75dcbd6393fe7"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "af569f77e1f64353e097605e7e008e8a"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "9785f49063ce693baf2e81789a882a5b"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "cafa30b73c377bd344739f98edc8f7a4"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "9762d1fbe12c74b89b287b23c1da9a08"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "808cd9b282765f723e67bfd8c8160266"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "0a52fec0f90c12d833ebe15a53282223"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "84e95023a900b287f330879a7f06fd32"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "6844bef3437da43eaa645c6358a78d86"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "281aa67cb3fc807f9e706caa0d88056f"
  },
  {
    "url": "configuration/index.html",
    "revision": "bf64bc166749225718a771f12d05773a"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "fd6a005f644c1c8e8c5767b09a4103bc"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "a3dd4375918cdcb1f6067e43f5d2e441"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "b94de9b8df23c59f9294c01624f7f6ea"
  },
  {
    "url": "contributing.html",
    "revision": "af39200f6f24e24bd7e486d12448f0ad"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "4a26d49775b8052fc03bf9b1dd6c87c0"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "6c57db5bdd2ba63df47373030d9eb8a5"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "a662502aaf76b744f11322f4a2c937cb"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "4ddb718d640b218e8b173078151015eb"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "447859bd5b64646114ba7660b0413c2d"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "84906b9b70c32d763cbfd95037a3f41f"
  },
  {
    "url": "core-fields/background.html",
    "revision": "ab58b557d7eebace28675cf36a8dfaae"
  },
  {
    "url": "core-fields/border.html",
    "revision": "e9419bcb62e532b3b4be4963813bdf9b"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "e60044d2bc8ea9cc87132a74e2755643"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "369af0280267717b8192f58f6d71e9c2"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "315c3a0c77af12b305a08bb71f21dcbe"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "e5dac9a8c2e9e2b6db74328c047eba03"
  },
  {
    "url": "core-fields/color.html",
    "revision": "501f2386298807328c014fee529cbaf7"
  },
  {
    "url": "core-fields/date.html",
    "revision": "4aa674cc1f981273d756f05c5d51c580"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "ef281df8d75bc6bdcb9e84ceb0f90a44"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "330eb1b0b20e96f61f41a55cc0bd8a38"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "d5431348767f564174cfd8e25c197fb1"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "6df6750e9459a4eb678352b0042be8fb"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "0678776b975fd5e49d0697a427335d55"
  },
  {
    "url": "core-fields/index.html",
    "revision": "948df2acd3cbe2ebb8ed3379ea14c407"
  },
  {
    "url": "core-fields/info.html",
    "revision": "901822c7dd4ad5e285d600bd969447e8"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "4cfb0ff711e1f43649c7a82fcb0cf3ae"
  },
  {
    "url": "core-fields/media.html",
    "revision": "802e2e5f5be7805cd5ce8aad7c79d811"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "6d4c995260f9b201d7a3356e11f3517f"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "7e96485e597cc12ae21dba57d5f75f1d"
  },
  {
    "url": "core-fields/password.html",
    "revision": "ab500f39507284dc04393f8dc9688734"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "8d4327e5145ab44d3370007a2ec59dc6"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "24b664c47a33767bf32502e327376c72"
  },
  {
    "url": "core-fields/section.html",
    "revision": "4b66c0ea5f64c557b5a29f9f029c5ee0"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "ee5b7580bb0a1d36ae3fe9ea25c66a30"
  },
  {
    "url": "core-fields/select.html",
    "revision": "576eae87e8a21c10a6b10af407a39bdf"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "cc37dea334356d53dbb3e4efe80f21c8"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "83f2b8ebf11b78332ced90e0781c63da"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "4f347ae5c886f5add91268c627fc70c1"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "9d79e7183e0203325b9644546cfd7a50"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "cd5031ec880f0977480cbea8ff211533"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "113c1efc9138d6add0698c124dcb9f4f"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "921b3dc17acc8ef5b3ff3d521c0dde20"
  },
  {
    "url": "core-fields/text.html",
    "revision": "a9c31c3932d1890e4e96944c776cbba2"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "9d9d0c0bf1ae1bbc507745aab1ba3c2a"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "05948f6e147ece266eecb0a0ada78e5e"
  },
  {
    "url": "core/index.html",
    "revision": "e2e947c2f2801bb660fb546404624875"
  },
  {
    "url": "faq/index.html",
    "revision": "3f3ee0fac3628184b601158cbd6c940c"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "0bac1aa34111746fdeab15664862603e"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "a24e29dec1ac5e4f6e85037545c08d05"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "d527443adc12757a309a0767554a81f6"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "5ad94fc504fa773263fd3dae9d770f24"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "7866e96d1d9930385b001875db3b3bf7"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "80cf27b912404cdd6215de639b58fb98"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "535e979406247546c948f95e4065b422"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "cfec3decbf65cb963357c12649e69f2c"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "838502e2efb2ce88cff92f397d900c10"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "d193bf5b44b14daf780c0c7bdfee9107"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "b197a1c52969d640caf92b6e4a32df58"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "3bc84f0b757b2fe86dc6412d76696edf"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "b0f55d13b479c1574f65cf551a3775d1"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "0f75f5c051bbc2235f283a74f3095485"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "36225f7ba255fcdf8d2ee004badb16d2"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "7913fcd08be6a16b0c8b3ffcdac7a6ac"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "0ea97ffa7367c81498e952fb7ca3f362"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "4a30188fe489cee78ba0e5723fe4e9cd"
  },
  {
    "url": "guides/index.html",
    "revision": "be24c4f8ba28239b4ad06f81dfd9841e"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "f59612abde2f2cc31f0b79a9f234828d"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "55ee5a4c2867cfa4e478f9d7f74d58ff"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "498a4c85baca99edc20bac6a898bcb23"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "502f554357a4bab86344b5faaeff7ae1"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "620d041cca80a539a4a1a155730fe861"
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
    "revision": "656e14d9dcbe512c8ec7f45118f56a8b"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "1420ad2a55eaaae90fe698f2ba514891"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "06a21e4b1b806c74d972508d95a1e63e"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "8ee0991336e269a17739250216973d05"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "69be33d10ae6b24588e2bf082b55a8a3"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "57623da1a682126403a8e1b2af64ed8c"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "4b2cf33d6f12b181bfaf9989fd7a8bb7"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "84e0f931782e427f9066b5f7cef6bf09"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "329ab9741de6a8534d2740b2db4b4956"
  },
  {
    "url": "premium/index.html",
    "revision": "400dc6f4ec2fa77d5089dd29b59b12a6"
  },
  {
    "url": "premium/js-button.html",
    "revision": "e81f5d3662422fa4aeba48d2c5fe4127"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "f1163d9343422769d7b18c666576c331"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "854511e15e10e750f0365409fbfab363"
  },
  {
    "url": "premium/repeater.html",
    "revision": "3b49464a01cc439718aacb557610e5a9"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "e5b3b16fa18f52366012b6041b8cef91"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "ad1bcc4692017f4d2402b4b356dc4a3e"
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
