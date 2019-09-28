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
    "revision": "c52a3759e5c792c360d409013faa2770"
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
    "url": "assets/js/10.345111cc.js",
    "revision": "75a86793e197c093c5661e6e47508fcf"
  },
  {
    "url": "assets/js/100.a3c73971.js",
    "revision": "2ce509dfca658df2b5f8246a5fb78bcf"
  },
  {
    "url": "assets/js/101.b4049654.js",
    "revision": "9d0350875a2ae2e343d771c18d8e9d79"
  },
  {
    "url": "assets/js/102.baf0670c.js",
    "revision": "e522d264d59e81959e98bc8949859d02"
  },
  {
    "url": "assets/js/103.2f472840.js",
    "revision": "80aff2f159ef321930475c245c5aecc1"
  },
  {
    "url": "assets/js/104.7bf88a44.js",
    "revision": "3eac9a5993624cab9f047b128034f2f3"
  },
  {
    "url": "assets/js/105.5cab8e5d.js",
    "revision": "e0cb7930b0969b2b3519d95e2beee391"
  },
  {
    "url": "assets/js/106.529fa598.js",
    "revision": "58358c42f8da19d447eface71d3f2415"
  },
  {
    "url": "assets/js/107.4532a620.js",
    "revision": "0b045ee37ab8a0df3fa1a46fc1e7089e"
  },
  {
    "url": "assets/js/108.09b8b8c4.js",
    "revision": "c122fb9ceddc1d5b4b8a333087255b57"
  },
  {
    "url": "assets/js/11.616f4bf0.js",
    "revision": "456fbef70ace0d1372aef88f6efcf38c"
  },
  {
    "url": "assets/js/12.4f501042.js",
    "revision": "79bb1a35fc13819e7c30c569a5031d8d"
  },
  {
    "url": "assets/js/13.e0f54887.js",
    "revision": "5c2a708451171f15257950ffe10e359f"
  },
  {
    "url": "assets/js/14.a351d267.js",
    "revision": "52068cec8c0c562d9dc3657226ce46c4"
  },
  {
    "url": "assets/js/15.1614d5ca.js",
    "revision": "c112f5c06128c809a3d6be4e3f897ee3"
  },
  {
    "url": "assets/js/16.8c96a5c6.js",
    "revision": "b3d0ca6b5607ae870353bd3539ecc2ae"
  },
  {
    "url": "assets/js/17.d6424671.js",
    "revision": "3e9ad737177a6daff7b8a390519ff70a"
  },
  {
    "url": "assets/js/18.b3b248d8.js",
    "revision": "42fb7e4e8aac6f78ca020879bca3360b"
  },
  {
    "url": "assets/js/19.7533540e.js",
    "revision": "14deebbce3100e5829c2369852f58de5"
  },
  {
    "url": "assets/js/2.118f6404.js",
    "revision": "29daf0cbe18fecb5f9dc7bc6d19da9d7"
  },
  {
    "url": "assets/js/20.03eacb16.js",
    "revision": "cef3897749e39d9ecc74bcd8b567a6b2"
  },
  {
    "url": "assets/js/21.baa8158d.js",
    "revision": "375620a64b29e40e07d102c535a76e3e"
  },
  {
    "url": "assets/js/22.ebe7b945.js",
    "revision": "468ed618e06b86ecf9f58fa77de6ef03"
  },
  {
    "url": "assets/js/23.05076e02.js",
    "revision": "0bcd831cce04a41038ab8c10b30608d9"
  },
  {
    "url": "assets/js/24.c538e577.js",
    "revision": "ed3b103a683546f6286590399b71b08a"
  },
  {
    "url": "assets/js/25.07d43ebf.js",
    "revision": "0ef12d0a6d1f28f2ee0ca78c7c32e197"
  },
  {
    "url": "assets/js/26.3f23af69.js",
    "revision": "a2182d3d6a8dc13a651de70cd2127ca1"
  },
  {
    "url": "assets/js/27.4fd0b816.js",
    "revision": "5dcb56de36b1625c2b26e7253278feef"
  },
  {
    "url": "assets/js/28.b42de94a.js",
    "revision": "220b159a338041845853cb1ec22d85d3"
  },
  {
    "url": "assets/js/29.e53e9271.js",
    "revision": "cf39a07ce8baca93924e22b366c86349"
  },
  {
    "url": "assets/js/3.20f35e9a.js",
    "revision": "4015eb7e9a247366aa8def847a99282b"
  },
  {
    "url": "assets/js/30.75733cb7.js",
    "revision": "72b3ca9595df0cca1c52024d557fb553"
  },
  {
    "url": "assets/js/31.a11faa28.js",
    "revision": "02aa4915322a1d846e30cd641aabfd46"
  },
  {
    "url": "assets/js/32.6bd10e31.js",
    "revision": "60dac19995dd670b9e3524e002fb0197"
  },
  {
    "url": "assets/js/33.7fd89bc8.js",
    "revision": "4a5d9d24275951a0fa488414430373da"
  },
  {
    "url": "assets/js/34.6aad4aa1.js",
    "revision": "ed06d6c0019e331df3f3ec7e73eb9662"
  },
  {
    "url": "assets/js/35.23ce4d6e.js",
    "revision": "a76c5a7b3e1b6d62c0435e08850afe5c"
  },
  {
    "url": "assets/js/36.e63b813e.js",
    "revision": "adfdee6691afc78eb7c5650069a1a44d"
  },
  {
    "url": "assets/js/37.9cf7c3a6.js",
    "revision": "644a3f2af0d1ccb0176ec421c72fe587"
  },
  {
    "url": "assets/js/38.aaecb9a1.js",
    "revision": "8c058a9fffd9ad837180373600eed6be"
  },
  {
    "url": "assets/js/39.36d0e926.js",
    "revision": "ef83981527ee0666d5a0def11e0b7542"
  },
  {
    "url": "assets/js/4.dc1e94a4.js",
    "revision": "8b7d58e61bb038507092af716afe7d65"
  },
  {
    "url": "assets/js/40.bf2dd682.js",
    "revision": "450f5b584b20f0a572bcbe9f396a437d"
  },
  {
    "url": "assets/js/41.c77140cf.js",
    "revision": "39914edf2418fe788ed3c58deed51a2c"
  },
  {
    "url": "assets/js/42.b35d7074.js",
    "revision": "16a056e3b587ac31d4b8d7b29a0a07da"
  },
  {
    "url": "assets/js/43.7aed6fd5.js",
    "revision": "79f45b4dd2dbd52ca592b0e2adf477a4"
  },
  {
    "url": "assets/js/44.3c6e7da7.js",
    "revision": "0f5c62d5627198d959e5fa2596d7a073"
  },
  {
    "url": "assets/js/45.003df249.js",
    "revision": "2b373b5501b68ae9bbc635e39d8460cc"
  },
  {
    "url": "assets/js/46.7ef4b9db.js",
    "revision": "e408a83e8e6feac4e7f67131a420296b"
  },
  {
    "url": "assets/js/47.db7fff59.js",
    "revision": "c14fc38c78e3b49e4e12f78d84303374"
  },
  {
    "url": "assets/js/48.cdb24ae3.js",
    "revision": "434c416bb8677cbc33fdeb72abbd19c6"
  },
  {
    "url": "assets/js/49.2a829373.js",
    "revision": "bff5fdca1ba4e54951731740b3df6580"
  },
  {
    "url": "assets/js/5.48d05347.js",
    "revision": "b119626ddbce3fb31684ed8d67203321"
  },
  {
    "url": "assets/js/50.6fbb8183.js",
    "revision": "8ce25285207151fab622fbb52c5ad3bc"
  },
  {
    "url": "assets/js/51.96997969.js",
    "revision": "40afaf2f2daab7c41fb1b62d384050a6"
  },
  {
    "url": "assets/js/52.cee8e464.js",
    "revision": "50770eb35fe5fa7d32134d8703da635d"
  },
  {
    "url": "assets/js/53.4a20062b.js",
    "revision": "796bcb891e0d9c0dc70a681b4e1ea251"
  },
  {
    "url": "assets/js/54.59dd90ae.js",
    "revision": "5f225920066ebc737f5f4121646aa933"
  },
  {
    "url": "assets/js/55.c00df105.js",
    "revision": "f36d16b000ca4e0bc62b841359200102"
  },
  {
    "url": "assets/js/56.8215f028.js",
    "revision": "9d7af37caa5c1ae205333b85a9f5aad8"
  },
  {
    "url": "assets/js/57.dc57ec0c.js",
    "revision": "27e1e61d0ded01265ee8fc22e1ee4aa5"
  },
  {
    "url": "assets/js/58.3e37da4a.js",
    "revision": "de6afe45bff682a68e2c0de398816b5c"
  },
  {
    "url": "assets/js/59.e9323457.js",
    "revision": "3a817a49246447bd397a482dd3fcfcd5"
  },
  {
    "url": "assets/js/6.155429ef.js",
    "revision": "60e483b26978a347dff110ccae83f472"
  },
  {
    "url": "assets/js/60.b73b08ee.js",
    "revision": "a936207c6cdd8a2c0b5dfe47bcee77f5"
  },
  {
    "url": "assets/js/61.a7501f84.js",
    "revision": "6d7cde8d1ece2b4f168da1a94366146e"
  },
  {
    "url": "assets/js/62.6db8d588.js",
    "revision": "2b8fa5a1ef2cc7a9d00980eba7183cb2"
  },
  {
    "url": "assets/js/63.f0beed7c.js",
    "revision": "7c7b9963ba63f972ce138d950906b81c"
  },
  {
    "url": "assets/js/64.a3afd04a.js",
    "revision": "32ebb8fea0cf5202f215a792c97d7da0"
  },
  {
    "url": "assets/js/65.6a373720.js",
    "revision": "dcd4c53dd6dfa2e40f12b364ff4f11a3"
  },
  {
    "url": "assets/js/66.00f442b5.js",
    "revision": "c94255e4bdf19c6a6767e5d2ed944f92"
  },
  {
    "url": "assets/js/67.d933257a.js",
    "revision": "378998d27abb0b664efca6fa07521731"
  },
  {
    "url": "assets/js/68.849825ff.js",
    "revision": "167186a18ac693616eaab87851010ec8"
  },
  {
    "url": "assets/js/69.e92ac2ac.js",
    "revision": "90c0a9a6a13090459160fd68563ba789"
  },
  {
    "url": "assets/js/7.8bb26904.js",
    "revision": "e3dab1af1895fe70a1d6cdd2cc9b2d07"
  },
  {
    "url": "assets/js/70.464a4e71.js",
    "revision": "f300f9dfb2933db50dcab57799f3660b"
  },
  {
    "url": "assets/js/71.32611d8a.js",
    "revision": "991570c474abd6d02d2d502bbffbea59"
  },
  {
    "url": "assets/js/72.db9cf45e.js",
    "revision": "657442c36dda3ba6424a26608900638f"
  },
  {
    "url": "assets/js/73.e46a641d.js",
    "revision": "50342406c75338c0b56248b6100e64ea"
  },
  {
    "url": "assets/js/74.e2849e13.js",
    "revision": "2f4a91151aab1529394e88b6b88987a6"
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
    "url": "assets/js/79.d66ad7e3.js",
    "revision": "22889f9e0ff763addfc22072b6fc5f4d"
  },
  {
    "url": "assets/js/8.9e9ca89d.js",
    "revision": "d4a33f7a62423f0dd007e6625c1352c0"
  },
  {
    "url": "assets/js/80.4c99dd7c.js",
    "revision": "1ce847f2a796642b7f4f9649be03c4fb"
  },
  {
    "url": "assets/js/81.74c450a0.js",
    "revision": "620985a1a4eda50a6fe56ceb2dd3efca"
  },
  {
    "url": "assets/js/82.33c33702.js",
    "revision": "5634b222a6fdf4cd019112602f7e7eaf"
  },
  {
    "url": "assets/js/83.965697ce.js",
    "revision": "b3493025630042214c473525a28cc7c5"
  },
  {
    "url": "assets/js/84.6220c9a6.js",
    "revision": "7fbf664841bbf186db2e9f55b8bc2609"
  },
  {
    "url": "assets/js/85.0a9ae1f9.js",
    "revision": "ea21b7b9fcda7731cfcf1560460c8995"
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
    "url": "assets/js/88.7f8dcf52.js",
    "revision": "da2e3c88ea532096aba48e725fca3a16"
  },
  {
    "url": "assets/js/89.045bed13.js",
    "revision": "b0f8446c82781264aa82dbae5e9fc1d3"
  },
  {
    "url": "assets/js/9.7671e42c.js",
    "revision": "6912b47b90aca0759250817a020ef974"
  },
  {
    "url": "assets/js/90.ee5768c5.js",
    "revision": "84c5c738dbdb338ce91cc7c78b99979d"
  },
  {
    "url": "assets/js/91.0d32d0e0.js",
    "revision": "dea4caf7688ed9a3f370d43c3436c895"
  },
  {
    "url": "assets/js/92.d53797d1.js",
    "revision": "1eaab99632426c69b8fe61d6d5e52b33"
  },
  {
    "url": "assets/js/93.0e261d50.js",
    "revision": "3f75e6a83d786c0ee6bfd11cba9ab718"
  },
  {
    "url": "assets/js/94.7c05b65f.js",
    "revision": "5d4029a7b25fd05ed4b11c03766f7b7f"
  },
  {
    "url": "assets/js/95.de7d6703.js",
    "revision": "72fa600cee160e2b4bb2f71ef775a0a0"
  },
  {
    "url": "assets/js/96.359c1b57.js",
    "revision": "cd14493109574ac82d21596854446976"
  },
  {
    "url": "assets/js/97.dc463cdf.js",
    "revision": "50ad898ff936cdfd23b1750e8bfebf8d"
  },
  {
    "url": "assets/js/98.251965a0.js",
    "revision": "8a24b3cce04c6f480b74b7cffcd1a7df"
  },
  {
    "url": "assets/js/99.4bcfe038.js",
    "revision": "fcf8fab794fc249a2db47617c4f8ee4c"
  },
  {
    "url": "assets/js/app.e31f74b9.js",
    "revision": "d9e8f71c429fbb9c9fc5d1c1c841dc85"
  },
  {
    "url": "configuration/api.html",
    "revision": "1ef7f9a22918c1e2be762b13634ca255"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "3fd9a43d2814866ac6f91a410dd9b589"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "2a4b6cd53ad544b058c818d252e4a2d0"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "17728461017ec4f27c192da542f5af46"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "a1a7df460b17f11345aa936973c94762"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "e95ab49ee2a9a3d8ea6c1ce6d73a2777"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "423b80d8158334f594b4bddc79c512c2"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "a5638110d783eb0e29da5a6f7f4f19b7"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "3b20ee5e939ec91d3ec5f7a28f2edfa5"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "aafb9208a43a25bb32e20feb535fdefd"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "dfee63cda62dcfdb9e17911f826dba60"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "4bece0865e088d0b1b75e00fa73acffc"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "49f668490a648a64d52d73641fa474ff"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "2fdd11ad6a3cbd45997a510bd9e1c2f6"
  },
  {
    "url": "configuration/index.html",
    "revision": "7dca433ca4914874a6f85f76a743e3e6"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "5462de5d04d350b424b75a456b0deb11"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "be885f6d8795e942d7d183edb7dd5a7f"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "bc223719fab3f4b885d430fb369cdf10"
  },
  {
    "url": "contributing.html",
    "revision": "6c01e73acfb0fbeea8cb9f8f3045b754"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "ad86133cb639395285c0df7f4ca94a19"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "8c82f555d8c0e5c7939933d1801bb674"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "f6c3d39d2e9a2c5849ae04510d0ae0fe"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "b84dcf03f8b61fb17b5d2008361c7232"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "ff55a8994cc848e9d20afd3dd30a06c8"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "808f7e478bdd07fe74c066bbbd38cd99"
  },
  {
    "url": "core-fields/background.html",
    "revision": "e7b1d44ebf91fbe3b1d25ae836681712"
  },
  {
    "url": "core-fields/border.html",
    "revision": "7f0a004dcfef526e2de5bcb297e6f987"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "beed6d7df0fe67999957b72cddafdb41"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "e9163781ec329c9489c3cb8c39585955"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "3f1de23e8607aa23c6266dbf3359759a"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "d8188cd2942a3c04ba81fb4c0291ca0c"
  },
  {
    "url": "core-fields/color.html",
    "revision": "3907f7aa722584e3d456d5b42048b900"
  },
  {
    "url": "core-fields/date.html",
    "revision": "33cf07fb820177d6404e58a7efa2aafe"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "b170b2d46e29dbe549e08760b491da09"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "9f3cab618d994df398b8f48101eed29b"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "07ada1c9514a42aeb00d633b59b1f0f2"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "5b0678c7754ec50f0e1a8771fcebd643"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "8e6293e278582305c82a01780646b744"
  },
  {
    "url": "core-fields/index.html",
    "revision": "6e317b0a394102685c4a52f65172c5e7"
  },
  {
    "url": "core-fields/info.html",
    "revision": "d9ba95ba6df30e3140f5009cfc366ea6"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "1c62da078d88c13b1e7b4a35e8af5592"
  },
  {
    "url": "core-fields/media.html",
    "revision": "00d57d7779532b6183353f6794aa0249"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "03a5f7572a5507cb217017efe7056428"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "3f2fbf5e6eb67e44f3b98a420f1c7a14"
  },
  {
    "url": "core-fields/password.html",
    "revision": "de6d115787463f497f840a5a569c5b3b"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "0716222693beea45fc0ce63ed8acd901"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "683043c3bd0c28914b3333f80aaf01e8"
  },
  {
    "url": "core-fields/section.html",
    "revision": "672cf160944a66118e612697278f6b97"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "46bd38b3cd37106457a1f1231f290485"
  },
  {
    "url": "core-fields/select.html",
    "revision": "63e774623829ac62996bb39eba5cd2f0"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "ec77429b6e6f34475308cf4e3eede480"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "c1853840bb571bfc62a2b622ac2961e3"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "c9d008b73129123076b429f321303e99"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "1a37af4347e91afc1f8c72a22715d075"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "e1ff7ee72995d98e7e7da91fbbd8cff4"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "caf31166adedca7a561a005531d168be"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "04336d25aedff37391ee90d941427b27"
  },
  {
    "url": "core-fields/text.html",
    "revision": "e50f4d5b9519aa13307e17272dfa7fbc"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "abc986783854ad57ec29f30b86d1880f"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "7de28af51ea318d23a72f554bfe69362"
  },
  {
    "url": "core/index.html",
    "revision": "41f5e6c2494cfaf879654ba2354914b7"
  },
  {
    "url": "faq/index.html",
    "revision": "56ac34023a960930f5cd8c10e75543d1"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "9d33a42e39791de5391e66a03992f0c2"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "ec15576bcf62608df59ca1e016bbe4f2"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "db9f25a44745ba856d045052998fac34"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "8f69d1bb861179f9e5981e11dd374992"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "4a6e2469c0e0fee519d6222f0d30ecd0"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "d47c81455f92c936beb728884d5dd784"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "5eef8cc28e41eb6e1c199b53e738c9a7"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "0070dafa0c7dfbd0c51aba5be58b3237"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "eae342c71713f284030ea99e8eb5592e"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "591856440ab70f0cd0ecd0bbe8517a69"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "12b7a5d9f625d1d595628bad694deed2"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "6e8e9184b8dd2de2c8ac9151c87979d0"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "301ade9d108d26cfb85c52352b9c681b"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "63865ffedbcd5d58a05d14b6dd142512"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "414a6f3a559c5f481b9286651ea040d4"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "4414add3b3dcfff1be698c3d4f357f88"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "800f8b6749c951b677226b57de83758c"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "1e94015eec0c9c284b133aa32cb58af6"
  },
  {
    "url": "guides/index.html",
    "revision": "60f5167b834971ac7574b3d40ffd3108"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "94a86010336350fe20480cdeb2153a52"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "3c4c8fb61535086d44227d96f80bf191"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "0fba76ddf31ff31622958f56b5791b0f"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "08b71afe5daaa6934b316d86a587a516"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "9237bb0ad9d10388e0799830410c30e7"
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
    "revision": "fe46cb6b4b7ba04786386234dd24f34a"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "b7fb9387acd1ee02b7a7b4e7229ca3da"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "f99b64d0fb3d875b67b1052708665880"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "aed5696643b7bc1bae4854d2e69a6a5b"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "e44e6a4b8d1ca1ea966c8c598aadc84f"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "3d30a453a68c0925bd8e561462013b14"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "0a53e797c529e5d06856fa8ed9d298f8"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "d5275bda271dbc9cf110f8ac2b03b83f"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "1188a524b453fd920fe706763db403af"
  },
  {
    "url": "premium/index.html",
    "revision": "a6bc4b90f657a495976c84b2e8d41d80"
  },
  {
    "url": "premium/js-button.html",
    "revision": "3a47087bf78114f2252dd7c788603a70"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "607130e62a986ffaeec94ff5c647a110"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "534fa88965a247b47272d78e21e6adf4"
  },
  {
    "url": "premium/repeater.html",
    "revision": "efcf0da83f595a2b8b48786c55c1e042"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "3141c51490b7ed22082f4aa07bedee1b"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "28396758e1f52471f95af2f8834c852e"
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
