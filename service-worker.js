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
    "revision": "29f4acbe0fe9d74f9c73850241fc67b7"
  },
  {
    "url": "assets/css/0.styles.bf2a601f.css",
    "revision": "e42981b7920d32942f62c202d1fdc113"
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
    "url": "assets/js/10.a4e94d31.js",
    "revision": "9f0c7c5b7e930af6c358edf362d18002"
  },
  {
    "url": "assets/js/100.a3c73971.js",
    "revision": "2ce509dfca658df2b5f8246a5fb78bcf"
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
    "url": "assets/js/11.b64b9114.js",
    "revision": "8640cb4e409d9384db38c309b2e9af13"
  },
  {
    "url": "assets/js/12.62694415.js",
    "revision": "8f2c091b327404190d7e28580e776462"
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
    "url": "assets/js/15.9bf599a5.js",
    "revision": "17e84619b9dce262ddeab9af675ddcac"
  },
  {
    "url": "assets/js/16.8c96a5c6.js",
    "revision": "b3d0ca6b5607ae870353bd3539ecc2ae"
  },
  {
    "url": "assets/js/17.c072e544.js",
    "revision": "8eecef588490f9bd2fba63df06a8e2c6"
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
    "url": "assets/js/27.f91591e0.js",
    "revision": "58b6e043ae1b49e95ad886e032487cc6"
  },
  {
    "url": "assets/js/28.2eb91a6e.js",
    "revision": "c5372de69bb18ab4e7dab2c807c158ef"
  },
  {
    "url": "assets/js/29.e84ffd96.js",
    "revision": "e77b0b5c446c3f0e9c7185e966ddcc3f"
  },
  {
    "url": "assets/js/3.810d002e.js",
    "revision": "c48c54c84fba6e117fd9b135c715ea99"
  },
  {
    "url": "assets/js/30.f851c883.js",
    "revision": "897bcf0e8f5531f9592e411d53078270"
  },
  {
    "url": "assets/js/31.47e58778.js",
    "revision": "0ebac11ef7d6d9b6f7b79bc15ea61484"
  },
  {
    "url": "assets/js/32.f0d3bfd7.js",
    "revision": "8d74269c499cb609f66338b87622dbed"
  },
  {
    "url": "assets/js/33.f07e4a0b.js",
    "revision": "04a584975b1a26b0258f3fdbfea75c4b"
  },
  {
    "url": "assets/js/34.688b4bd5.js",
    "revision": "8f12b05cf268a747569cf6b3c6ceec55"
  },
  {
    "url": "assets/js/35.4732eb1a.js",
    "revision": "1094154250b54ff9dec0b71e82c6a68e"
  },
  {
    "url": "assets/js/36.88614859.js",
    "revision": "f14da1eb7ac776b25a2e2c16a910bdf1"
  },
  {
    "url": "assets/js/37.df1380b2.js",
    "revision": "b66c8f56029464f76836155d17ad46d4"
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
    "url": "assets/js/40.560d7335.js",
    "revision": "c5e6573f76c945ebd6b865cb20f4fc63"
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
    "url": "assets/js/46.1e8eea87.js",
    "revision": "f110b581aa0f8b51301d623897d40c6e"
  },
  {
    "url": "assets/js/47.db7fff59.js",
    "revision": "c14fc38c78e3b49e4e12f78d84303374"
  },
  {
    "url": "assets/js/48.93361e34.js",
    "revision": "2e4171d53d42ef825ea1f0c1d0357b8f"
  },
  {
    "url": "assets/js/49.b396cdf0.js",
    "revision": "127d0c9fdc644dc57a0cc523b907b3ef"
  },
  {
    "url": "assets/js/5.093ec226.js",
    "revision": "87f605bf9f469878b90c6b131c063e78"
  },
  {
    "url": "assets/js/50.6fbb8183.js",
    "revision": "8ce25285207151fab622fbb52c5ad3bc"
  },
  {
    "url": "assets/js/51.f5f79a24.js",
    "revision": "7af46ed4d4dfb3214a467c252323e18b"
  },
  {
    "url": "assets/js/52.3b44c8be.js",
    "revision": "8809bd4bcb8facb0a394c77f991d67d3"
  },
  {
    "url": "assets/js/53.18e0accc.js",
    "revision": "6bc776149e029d3f97ad8d238ff3dba2"
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
    "url": "assets/js/56.00e3cfc1.js",
    "revision": "7585162574dca9c66358d84d46639cad"
  },
  {
    "url": "assets/js/57.2e5729f5.js",
    "revision": "99a8a0b1e9091b87bedc978114ffb63e"
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
    "url": "assets/js/6.b54d7b3b.js",
    "revision": "e769b50aa2487400dd7e610a14fe8301"
  },
  {
    "url": "assets/js/60.b73b08ee.js",
    "revision": "a936207c6cdd8a2c0b5dfe47bcee77f5"
  },
  {
    "url": "assets/js/61.8ee41be8.js",
    "revision": "6c91c8545c6f1b1b9999a8e45cb1a78d"
  },
  {
    "url": "assets/js/62.8a076c11.js",
    "revision": "dbd283da2df566ef49ee003f324e4a1e"
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
    "url": "assets/js/66.a02a42f5.js",
    "revision": "0f3fc7880cce9198d3b218aea97e0d59"
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
    "url": "assets/js/8.5f7cafe2.js",
    "revision": "20c6cb82b05b23e575b1d135eebf203f"
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
    "url": "assets/js/85.6f6d5e32.js",
    "revision": "011e51b538fe5d9a031c77b10e837f63"
  },
  {
    "url": "assets/js/86.566400c3.js",
    "revision": "b27cc9dc5c1a2eab247169aea6c15b26"
  },
  {
    "url": "assets/js/87.71009a13.js",
    "revision": "8755257882007f4ef54a93ca305a61d0"
  },
  {
    "url": "assets/js/88.dbd93309.js",
    "revision": "ca5beca7caa5dbe22afa5d56aab24ab3"
  },
  {
    "url": "assets/js/89.e34bd940.js",
    "revision": "7cebeefc77db7eb0227445828d31a6b2"
  },
  {
    "url": "assets/js/9.104a2ceb.js",
    "revision": "c9e74492f67c266f258e24a0664e29b2"
  },
  {
    "url": "assets/js/90.9d47c79d.js",
    "revision": "139c8ac564b2a0550f9f86ffecd5b728"
  },
  {
    "url": "assets/js/91.9c4e37f2.js",
    "revision": "84de2818f3ced4b3d8c543b3d90f4732"
  },
  {
    "url": "assets/js/92.4a5d7cb7.js",
    "revision": "971bd179aefaecf8fb9aac31077d9907"
  },
  {
    "url": "assets/js/93.da43d25b.js",
    "revision": "d7905dcd0b50e65f771f841404fb61b2"
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
    "url": "assets/js/app.075c76e0.js",
    "revision": "fbf3198d672c30facef9bda11c73c02a"
  },
  {
    "url": "configuration/api.html",
    "revision": "2b7fa23b27f749f40ddb5757339dc45f"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "9318f0c5b578cdd0f21d5d2549dd302f"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "01bdf309475bb7a3e21e3c3eef269822"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "04e8efb0ac2375cecaa04864be77dc58"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "e232fbe4a2eded72b3ad9fcd8f2c4373"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "02de410371c0abe70c89294473af3c39"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "1dc4eba060f17e7084ffa169b33939a4"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "b44831cf9983af974a9c7ca6b85f7172"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "db9075c1060f2b09b73ae7dc708d57db"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "8db8484f2d7c4cf5359131c91570c535"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "1406450acc17a44255ec7a6cdce31282"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "9557564dff79a95c044988f8589a80a2"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "a5a1f90a59c1a9c1edc73316d2227aba"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "dd4de5cc81d93d37dbfe4212175da39c"
  },
  {
    "url": "configuration/index.html",
    "revision": "729a68c4abbb31e47c6a2523962de4c3"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "56b50f8ff2b2faf095b59735046635cb"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "e9d18f8e1616ba20cf458939868b8128"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "5ab2876d64811e1779587c71df5ba36f"
  },
  {
    "url": "contributing.html",
    "revision": "78204ed66ad9a7e00780c55c42031813"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "8de949bd0e6af63d0cb799dade25ea3c"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "97c7971eff2935faeaadb4d0e3f66663"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "30ab7998d5ef8d0040abcf794fc8b602"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "903633bb3fc03fca49ce7a5873c6f2e2"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "39237de39e231ad5ba51ae84c870d96c"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "1789e752ba533c995bec1028f853d0a2"
  },
  {
    "url": "core-fields/background.html",
    "revision": "4df3ddfe6829772b4f8495e1e82a8521"
  },
  {
    "url": "core-fields/border.html",
    "revision": "da2c4fcdaa0c0c00d56d12a1b28f6876"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "d09a254a1f6eecda15f1f2dcc3022105"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "1d9187eb5269315534998642ad732e22"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "11a553ebc1cf42a1b17d1c08c9459d70"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "ac6f3e23229c9fe21032998477524ae9"
  },
  {
    "url": "core-fields/color.html",
    "revision": "fd98a31ad9a1e7fabdd757a860938861"
  },
  {
    "url": "core-fields/date.html",
    "revision": "dfaccaf9cfc6df075e7ad73aa7342af9"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "36c388a5933bef166238ff4c6e501565"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "7439525cedff1f70570d75cd7659765b"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "41e0cd9c0cb736c0d75b02ed7b96f2e4"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "dc4907ed64432efe34d10e2e99d61227"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "9ae6a2139e4aeb074dd8fbb404ecf087"
  },
  {
    "url": "core-fields/index.html",
    "revision": "6c9d70a8787b5df317539bcb6db68888"
  },
  {
    "url": "core-fields/info.html",
    "revision": "77920e42de315c71f45411317a83ffaf"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "0e04a0c7dc79fac0c9c84c2a1875eb44"
  },
  {
    "url": "core-fields/media.html",
    "revision": "dbe701ff52033cde4c885994fd47808c"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "33428868cb39a8b0a45a996f27334a09"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "eef072b40beb5dc0b7350e9aa4da5775"
  },
  {
    "url": "core-fields/password.html",
    "revision": "0de0808b656981a2832535a250040213"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "c3793ec75b273ca5045c58d8425aab0c"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "4a5c12847a9eaecb22edf06f81e852bc"
  },
  {
    "url": "core-fields/section.html",
    "revision": "f5ad78c57c9cbb81982d9240fcb284d3"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "5f8ad7aea580484df5fe14b27787505d"
  },
  {
    "url": "core-fields/select.html",
    "revision": "146a7b383aa665677a23a0927b2b2f19"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "0f0ada7d793eedd9907343e357a23386"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "b382275a25e8b8e3437de694f757c327"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "1f07da4a62c86656b6eae1e932248bac"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "62ffb3a58302cd6003c78835e633499f"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "6a0293e922c2620b95d51168518d2721"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "5614d5f23642d8a2a677782fa8330649"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "d0f46a9f4e3ce069855a0568bdb59dc9"
  },
  {
    "url": "core-fields/text.html",
    "revision": "f606fc999226e22f44e71fec42e1ed60"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "bf3cc9447262f438bae7bf4dc2d44d7f"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "38df6b1583816627c409f60118a51a80"
  },
  {
    "url": "core/index.html",
    "revision": "cee99b8bd501626efa753aa54727a885"
  },
  {
    "url": "faq/index.html",
    "revision": "b808e53290d8087f1e83d340d8f6fc1a"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "507bf85b5de302aad47dee9d82ab435a"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "06b1880fefd97200edc7580297aab90a"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "891e5e34b8ebfaebf21af8f5327df19e"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "10236faefbb2846a5949db86abcebdb0"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "182b7b9ed0c911ba37577d4dcee7179d"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "c713a2b1240c145ee77da4ec99b01800"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "92a152aecddd601aadec6420dde66980"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "d0b82159bccee86bd65cb63412c8976f"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "97017deb17986ccccd7eede1fbe94b12"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "5e6b0ddeb377aac13ac272f6bb3e77da"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "5092ef7c07c78286b7f7958c3313ebdd"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "713b2504288d4ecf4dc4c94d8e2488fb"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "188f9cd2f2ee646f1e26c2a1b9967a69"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "12b626ab0ece40628e4fbcdd864f951c"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "94fb1c6b3dcc4ecb7fc163864fc66e56"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "d453a5485c6e978d79c346221cee34a5"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "f0cc660342eef9893ede5e8c71a9e61a"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "15219279c983762cf01a3673c5d13757"
  },
  {
    "url": "guides/index.html",
    "revision": "b26d15302bf940b184475ab6901c85f5"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "cb6a8b8b5f53566c1524aeda71517e36"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "871905656964ea48d5fb712b85ff67a8"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "2ea6d0dd9f7910d3b25d1438599d7d53"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "7d0c2fc4326178e05b493cf028078f0e"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "621c126e43de119fe821b9debdcaa9ae"
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
    "revision": "97e8b23a8cca1a1eb3214fccf5464a7a"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "a38a35c95bb5d6ec887aa26a3a0d2643"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "9a7adae726e96114b86e5ece0f306fad"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "cba15267f3760e4b7a2dfb6fda80aaa2"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "983da848b6c9602741888a6478696d4d"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "44ee8c4ebaf3003844674d348766ce19"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "d29884060c00769cdaf42cc4ec78700f"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "a14a414542498988c536466a6994be56"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "ff54d8c4c712cc4c1c6c0a3d52c86524"
  },
  {
    "url": "premium/index.html",
    "revision": "8b1219098be0e3667b5f93a257d295fa"
  },
  {
    "url": "premium/js-button.html",
    "revision": "06631d6c11f973a38f22f1a7ae1aeab0"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "f30b91a385b640734ad30ad08472cb7a"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "a901242ff3e72852cf6baec6d5751b1d"
  },
  {
    "url": "premium/repeater.html",
    "revision": "84b24b90f49cb44bebf1f9cb86184b0a"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "dfd89d3c3b01d9b8154afd430259c366"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "c44099ead8789b407fc40d9e74d6749e"
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
