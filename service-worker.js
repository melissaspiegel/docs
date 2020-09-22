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
    "revision": "d7037cf56d36bfd4f65f10e82792ef4a"
  },
  {
    "url": "assets/css/0.styles.7efc0001.css",
    "revision": "0db0e4877605efe0e339151d8e12a39a"
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
    "url": "assets/js/10.511556bc.js",
    "revision": "6e231da34d7c59f4331fb9e44d9fac33"
  },
  {
    "url": "assets/js/100.4a23826f.js",
    "revision": "01c8a8d3f39af95a9b721e2da74835f1"
  },
  {
    "url": "assets/js/101.1aa36adb.js",
    "revision": "f9317d900634c7f48267e1d22f853c7a"
  },
  {
    "url": "assets/js/102.43f0bd8a.js",
    "revision": "fc935a813346852da783406fcbb482df"
  },
  {
    "url": "assets/js/103.8be00148.js",
    "revision": "2a23dcb07800999b9caf27ce70541bbd"
  },
  {
    "url": "assets/js/104.395dac34.js",
    "revision": "a348bc88ac58ef50b9d9fee35fc85981"
  },
  {
    "url": "assets/js/105.a59606ea.js",
    "revision": "653e4c66fca2d170206db992650a2a0a"
  },
  {
    "url": "assets/js/106.815ca8f6.js",
    "revision": "ba5f2eb44b1062a91717293b50efa7a2"
  },
  {
    "url": "assets/js/107.56d16ef9.js",
    "revision": "5d03ef68a4d6da57ecf0658f66f481af"
  },
  {
    "url": "assets/js/108.fb2b6f34.js",
    "revision": "2b9a3a599fcfeb30de63d2f5a7450034"
  },
  {
    "url": "assets/js/11.66c3615a.js",
    "revision": "1df96d3eb88fd3789217ea83ccdf2ef2"
  },
  {
    "url": "assets/js/12.1fc02c79.js",
    "revision": "5ba5d06579fdfe20850d6d7c3102012a"
  },
  {
    "url": "assets/js/13.260cd13f.js",
    "revision": "15ab7f7e5da14bc097348055478c18a6"
  },
  {
    "url": "assets/js/14.efb6251d.js",
    "revision": "ce2751d9a3c061dd57bf95eb161fa1ec"
  },
  {
    "url": "assets/js/15.3201268f.js",
    "revision": "230a3d6de44c308317707e2bac4917ee"
  },
  {
    "url": "assets/js/16.038e6c0b.js",
    "revision": "d72a7b7d9b52929b574d9f3c332c569d"
  },
  {
    "url": "assets/js/17.2909550e.js",
    "revision": "891c7d8341eabe051547a4c03be73174"
  },
  {
    "url": "assets/js/18.8fe2a639.js",
    "revision": "6070a7bf51f6a1689873e9b265daedeb"
  },
  {
    "url": "assets/js/19.331e44d3.js",
    "revision": "458f4697c6d99415815851f4e830ae89"
  },
  {
    "url": "assets/js/20.226b7d8c.js",
    "revision": "d8a7963c16e3e2018ad1fb5c0d0f032f"
  },
  {
    "url": "assets/js/21.ae0b2f24.js",
    "revision": "92b83f768fe4787ad5101ec5be4e37f4"
  },
  {
    "url": "assets/js/22.0f17b308.js",
    "revision": "aa000aea32196331320657d3c7b11f43"
  },
  {
    "url": "assets/js/23.6e9a33e3.js",
    "revision": "a588111307ad41b5b7064d1f1564561b"
  },
  {
    "url": "assets/js/24.98cd7af2.js",
    "revision": "75e40209a75a19344b822bc68a61b7da"
  },
  {
    "url": "assets/js/25.40e75623.js",
    "revision": "a7e855cc64f883240df24779630da86e"
  },
  {
    "url": "assets/js/26.4ff4dcaa.js",
    "revision": "ab9800ba86c7061145e2087ef818f416"
  },
  {
    "url": "assets/js/27.04d0071b.js",
    "revision": "ca3b65118a0145babb830f8a05e77b00"
  },
  {
    "url": "assets/js/28.50fee63d.js",
    "revision": "d679f7efd0fad2466c27320eb6314d9b"
  },
  {
    "url": "assets/js/29.cc6100b3.js",
    "revision": "d9bcd66a85ba859916482f9d6c72d927"
  },
  {
    "url": "assets/js/3.e0dd6273.js",
    "revision": "cc2c88aa4cca08234531e355168c4e6d"
  },
  {
    "url": "assets/js/30.e2630ded.js",
    "revision": "d63b47a9ade803791ad3bdab30a08731"
  },
  {
    "url": "assets/js/31.1b1b1d41.js",
    "revision": "95116b73fe80f6968f3a6da6e397c4a4"
  },
  {
    "url": "assets/js/32.a7a9a485.js",
    "revision": "4296cc2016838df1fadae9a61f85eef2"
  },
  {
    "url": "assets/js/33.a861f116.js",
    "revision": "587da076bba1b9d54291f9227a1899a1"
  },
  {
    "url": "assets/js/34.fc82036a.js",
    "revision": "4b904a7ae888f465f8b5ef3284c08fde"
  },
  {
    "url": "assets/js/35.cf88305a.js",
    "revision": "3bceb35a9d20709b2df71ff01381c2f1"
  },
  {
    "url": "assets/js/36.baf4538e.js",
    "revision": "0a06b4e4e1ad3bb39be235a52b9ea14c"
  },
  {
    "url": "assets/js/37.143ae5c8.js",
    "revision": "429f2294f3c3598ee935389127fd29a0"
  },
  {
    "url": "assets/js/38.af1d817f.js",
    "revision": "601d7d2e7278370bfc09781a25e9b754"
  },
  {
    "url": "assets/js/39.33c62b59.js",
    "revision": "a80288a33e8b806defc2a803208f8a88"
  },
  {
    "url": "assets/js/4.e59aac5d.js",
    "revision": "cb73b89a78f15fad33485595eaa400bc"
  },
  {
    "url": "assets/js/40.0f486c6c.js",
    "revision": "c9853c8862ff9deba8be1ac39c6e45c1"
  },
  {
    "url": "assets/js/41.5292c25a.js",
    "revision": "907af6884b19409fbc605a1cdefafba6"
  },
  {
    "url": "assets/js/42.d1288048.js",
    "revision": "7377a48eff0498baede9f0296898288a"
  },
  {
    "url": "assets/js/43.c7a85b35.js",
    "revision": "272386fe524ff906a5398a4c253f78a4"
  },
  {
    "url": "assets/js/44.6ebceaab.js",
    "revision": "873b3652e3eebfeeba6d9c115192ed82"
  },
  {
    "url": "assets/js/45.22393096.js",
    "revision": "ab3104752029dd788fc03c68588681e3"
  },
  {
    "url": "assets/js/46.60bb28a5.js",
    "revision": "e0b74cf710c19bcf89140d7c81204315"
  },
  {
    "url": "assets/js/47.91c96fbf.js",
    "revision": "a12160db43d6bb649323a7c5a5c2ea69"
  },
  {
    "url": "assets/js/48.d4c8ba80.js",
    "revision": "8146ecdee872ab0980b0e47a5aeea59e"
  },
  {
    "url": "assets/js/49.6e3570ce.js",
    "revision": "3fce41ba2efecd36f655ab2fdf8c7aef"
  },
  {
    "url": "assets/js/5.54c8d5c8.js",
    "revision": "126c3080a596030769c29a5d3ef6a10c"
  },
  {
    "url": "assets/js/50.fa4ccf06.js",
    "revision": "57d4db6a23757c0c469397b1980f7076"
  },
  {
    "url": "assets/js/51.da63c18b.js",
    "revision": "8a349b6a1c1d29e1e7b03e2e50440250"
  },
  {
    "url": "assets/js/52.f554dc9e.js",
    "revision": "4168fcad1ca3e761bc08e14279fd8871"
  },
  {
    "url": "assets/js/53.bedf695d.js",
    "revision": "8eec51e0bb9a6709951cb1f4bc163a60"
  },
  {
    "url": "assets/js/54.9606bce8.js",
    "revision": "3e7d97f881accb190fef7f78d86c44a4"
  },
  {
    "url": "assets/js/55.fbd37bfa.js",
    "revision": "76bd6a48e046cbbe1b8a69121a943ff2"
  },
  {
    "url": "assets/js/56.a39e63a9.js",
    "revision": "f4fece490ab7c18cb4540786cad18173"
  },
  {
    "url": "assets/js/57.3d77931e.js",
    "revision": "eb0ab4ddc71102c110d1a3545a4771e9"
  },
  {
    "url": "assets/js/58.6391b76c.js",
    "revision": "7f6e3418f716df00cc3e5df049b9f1d2"
  },
  {
    "url": "assets/js/59.8d16c3bf.js",
    "revision": "5abee0954ba24c26b5a8edbcf0cfdf60"
  },
  {
    "url": "assets/js/6.61ad15c8.js",
    "revision": "27001857db41f6c4c67d6242084d8ee9"
  },
  {
    "url": "assets/js/60.f82dd79b.js",
    "revision": "740b318d7452c33d8c4111ca5dedcda4"
  },
  {
    "url": "assets/js/61.98168d90.js",
    "revision": "ee22a4ce935285aff9c56c482aa44fe9"
  },
  {
    "url": "assets/js/62.907df73d.js",
    "revision": "8dc4a11bb22ec949c7acd63ffd7a9f06"
  },
  {
    "url": "assets/js/63.b1feec15.js",
    "revision": "5d165dea33f01dafc059db5b93e2e455"
  },
  {
    "url": "assets/js/64.0ea644a8.js",
    "revision": "040673ae5bcba1cf543d96b2a4f27551"
  },
  {
    "url": "assets/js/65.f706dea2.js",
    "revision": "3023d8aca7003f9e27ee073cf81a0a06"
  },
  {
    "url": "assets/js/66.315540e4.js",
    "revision": "bfb6d4756e9ec535d6bfaa44bbf89cf0"
  },
  {
    "url": "assets/js/67.1caa2562.js",
    "revision": "a0b446e5e5ddeaab34ef841c010a4f84"
  },
  {
    "url": "assets/js/68.cfe56c8e.js",
    "revision": "6f291b11a1396dd131ff5d68759c490d"
  },
  {
    "url": "assets/js/69.f29499ff.js",
    "revision": "01bcbdd080af06476492a17a7f4b856b"
  },
  {
    "url": "assets/js/7.c7f4d24c.js",
    "revision": "d03548d99dfa51fd6a589cb96a3c770c"
  },
  {
    "url": "assets/js/70.bde49624.js",
    "revision": "a155e788f351b7077d1fda1121bf5145"
  },
  {
    "url": "assets/js/71.f17305ed.js",
    "revision": "fe895112ed2c27f8276d90b38f8c8843"
  },
  {
    "url": "assets/js/72.bf73ebc9.js",
    "revision": "7a9d77bce60c725418634ad89a441154"
  },
  {
    "url": "assets/js/73.adc1e672.js",
    "revision": "f3a9fcf88f307cc9d706f4e37ef99384"
  },
  {
    "url": "assets/js/74.f282cf89.js",
    "revision": "dd80c5d444e4c496199db4ee7a33d4ee"
  },
  {
    "url": "assets/js/75.66fd4c3f.js",
    "revision": "bea7eafc560c3892a88fe9ae720f2a0f"
  },
  {
    "url": "assets/js/76.a266507c.js",
    "revision": "ec1eac8503b85fc9a787e15a5e5df46e"
  },
  {
    "url": "assets/js/77.92b6cc13.js",
    "revision": "5e8ba3c4f4cf91d32ef1782c22298b05"
  },
  {
    "url": "assets/js/78.28987b79.js",
    "revision": "b7fb1352b24d23ba75fc1953d14081be"
  },
  {
    "url": "assets/js/79.3fc0e3b1.js",
    "revision": "87c942329cceb2a688d74c2866b29e4d"
  },
  {
    "url": "assets/js/8.8f05a5e6.js",
    "revision": "2ef89266e0fbcd799fa8c02d9c1d671b"
  },
  {
    "url": "assets/js/80.3b5b0858.js",
    "revision": "f89e00feca43c66710d25cbb435ffc39"
  },
  {
    "url": "assets/js/81.ae026ad1.js",
    "revision": "cdf5b30059ac4826eb81563e13ae4143"
  },
  {
    "url": "assets/js/82.5a0ae289.js",
    "revision": "7e2bcbed4eb4bfd140d1c4824290926c"
  },
  {
    "url": "assets/js/83.b9e569b6.js",
    "revision": "b5cd72b507a5246ac2d51095ef3a4fa6"
  },
  {
    "url": "assets/js/84.227d7f09.js",
    "revision": "ca57e59e701434066653c3d5f6043348"
  },
  {
    "url": "assets/js/85.f3bc9075.js",
    "revision": "9ad2afb4644fd59e088aa5021736dde6"
  },
  {
    "url": "assets/js/86.3d822408.js",
    "revision": "b4cb6dded383b1d224a406f8c5279ba9"
  },
  {
    "url": "assets/js/87.b99e6932.js",
    "revision": "d2e70a26f0ac3f4e939b26883fc7cbf7"
  },
  {
    "url": "assets/js/88.aed37a56.js",
    "revision": "41d425f52393fad3e2c5c62f31cf50b8"
  },
  {
    "url": "assets/js/89.e24617ea.js",
    "revision": "cd6e6e706a4cf530e0510c3a0895fce0"
  },
  {
    "url": "assets/js/9.bb036f6e.js",
    "revision": "ec3d10ffcfccaedfc9d88ab7a4d068fb"
  },
  {
    "url": "assets/js/90.f98ab63a.js",
    "revision": "b9776b83eb632c34a118f3456ceae140"
  },
  {
    "url": "assets/js/91.95dc5030.js",
    "revision": "915d038e644248d102d68bb6d1619d7a"
  },
  {
    "url": "assets/js/92.018f32c0.js",
    "revision": "94cddb0e60fb2e3fc0c51081734e0bbf"
  },
  {
    "url": "assets/js/93.a4bf2953.js",
    "revision": "63eb621939e827a718216d7358004392"
  },
  {
    "url": "assets/js/94.614c2266.js",
    "revision": "2e3145e384a86a13e12172654a80afb5"
  },
  {
    "url": "assets/js/95.15410b73.js",
    "revision": "f2780a04b5352f15b91d0d37787665e2"
  },
  {
    "url": "assets/js/96.944e56af.js",
    "revision": "77bc9a99bed6d1f09a7211f3776b5363"
  },
  {
    "url": "assets/js/97.93c0bbeb.js",
    "revision": "9d46b24980514902ec891f0f011d3e84"
  },
  {
    "url": "assets/js/98.a09805de.js",
    "revision": "c3300d00892045da74e92d9766d979ff"
  },
  {
    "url": "assets/js/99.c4b4c3d4.js",
    "revision": "3a0a80e4eadbc549ff13cf9090a9f577"
  },
  {
    "url": "assets/js/app.9a316ebe.js",
    "revision": "fdfe810e21e79a7928afd0ef26351981"
  },
  {
    "url": "assets/js/vendors~docsearch.b9debe6d.js",
    "revision": "8d03bcde112f2b49b46eeea945641ab4"
  },
  {
    "url": "configuration/api.html",
    "revision": "ec6373f080ddc2f1d10f191fbabcc58d"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "754235843e56fdefdf92e196930edc89"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "43b4284e81a36880bd6ec0a68ac760cc"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "cba099981bbb06ea468f1f4d8069b63c"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "b0da936dc932bba938ef336a3b7a4bf0"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "e82eb2d8065bb7b781778e1d9a6106d7"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "8856313ed10fb47936de275050895ad7"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "df70718e499bfcbd3a546004e2839fb3"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "bca081137392e45c3f6ee165e0bfc54e"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "84f2ee59e66b37917d2484fbacf6c5b6"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "611a37c971e5a11281ec072010bc57ec"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "f36deaac019e5f88a2f0513296b545ca"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "62c1deafcaedf98b415495bc09b892dc"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "c7088d89754990669534f9bf5393a578"
  },
  {
    "url": "configuration/index.html",
    "revision": "515954ccc87550f06e010efe0c826d5d"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "5d57e02932a80c78d04acfd8f517a9b6"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "68af286c9bb816f03345c6da2d21127a"
  },
  {
    "url": "contributing.html",
    "revision": "2c0a36e959a27c7cbf479c0d30e552c2"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "8131ec429715dadbafe173c0b3f2fdcf"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "e7af61f35152e3b64132c8d6569bdffe"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "f319917f6cd5aca694c696810e78d9e7"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "6845297777fe93878621875b0437244d"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "fdfe9fb25b80fed408481ae92001f7f6"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "20a6234e915cae65ba4604e19b2d5674"
  },
  {
    "url": "core-fields/background.html",
    "revision": "f81a6f96d2e3332330037e768c35a215"
  },
  {
    "url": "core-fields/border.html",
    "revision": "cc1d88c2316c2fd0538331650f3fa408"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "bd4d0b6db1de81f6c9faeadf177bb56c"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "50fc24b19e952af6a95c0e65151dd2ac"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "5d8c00d0b57b01fbc194489c13c68df7"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "d34252b5665a2d6522c9769622091905"
  },
  {
    "url": "core-fields/color.html",
    "revision": "45ab83e5d1d0f29e5a4233c2feb4c486"
  },
  {
    "url": "core-fields/date.html",
    "revision": "48f65275c861004cf2de4d5a0d020b23"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "f9635eff6df12b8824dbf7039e7c239e"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "2edae365d3c5b386f45f91fbeb77c50f"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "bc661baec0422860cd860c4eb1213117"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "f5d2db4925472d0e5b22a9c8245a6b9b"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "79139f9e2a2a3bf011078fa613564173"
  },
  {
    "url": "core-fields/index.html",
    "revision": "98b0145941957b8ed2180809e16713ee"
  },
  {
    "url": "core-fields/info.html",
    "revision": "80b33cfa8b578c5e37ed53df7f169c2d"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "6e6847a25f4949d6bc3d2a7329bb11c3"
  },
  {
    "url": "core-fields/media.html",
    "revision": "12f5a83b286c6e31d81b2bf1c57ddb4c"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "5f315defb4743987c8f32d6b9222b7a5"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "759a960d22ef6c5d6384b96b37bfc2ff"
  },
  {
    "url": "core-fields/password.html",
    "revision": "b1ff719f92a69474c36cdae4027612e5"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "b3cd850870054635ceb364f8093b0195"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "7b3b779bd6fc32a0517a83fcf2c18350"
  },
  {
    "url": "core-fields/section.html",
    "revision": "3446b2cf3f3a8037e6eb46d7864db44e"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "64548250298f9947da23e2783dd6164c"
  },
  {
    "url": "core-fields/select.html",
    "revision": "d11155ea0fc044720c787ef560f962eb"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "82aed4c9cc332571ff87670fad8eabb8"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "60bf3dd014f850e9d19bf291770e06da"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "c1f912fc0286f98aca930cd8d4d00902"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "2f727c48aebee7f139d873127e6e5e20"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "f8ecad980cfead76c20c486d8a919b04"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "d307b464ba82cfc88c8caddb63779535"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "4ca3f98840595c92493b212d0041098d"
  },
  {
    "url": "core-fields/text.html",
    "revision": "b86bad1e1cb530464587c3a3bfff6a86"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "d3b0959a57de2d6d4edae14ef7c4e53d"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "04856616c44617ac76648499f45e109d"
  },
  {
    "url": "core/index.html",
    "revision": "152ef7b09ea31682b59af2bdd6cb8c96"
  },
  {
    "url": "faq/index.html",
    "revision": "4a508e2fe54c79441b07b65463ff6cdc"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "4ac5f99b49a27c38730d701647f1fb91"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "116b6d9bc6a8e5bf78f716e7cd964b9a"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "66039523e2d0e5028cf74c66217a6a08"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "e3a9007b93ac80083db8526379700166"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "2eeaac9ada29cb42e8bb921d73a247a6"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "9d8aa51c480be3e1b28d6333ffc3dfb7"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "f5ab020e9bfef0a845f38959ca39f445"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "d862c236a253437300b5917d108d8431"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "bc2823e141e284eaf854d22c18acc8f8"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "ebb27d13b4035d504df1a5a409e70fbc"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "7732ae1e8917367737d1f6c70059232a"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "d58ff3ca515bf27948038003aad1a6e0"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "77cd707e4ad3b72f8881dad7df0e7f51"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "a46e82427fee008f40f7cd7b07cc2858"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "a2d0d51f0e0032e94d2951a3c321c665"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "64860921fc192c20bc1b1d63042c300f"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "917ff5dfc809445c57c6b7a3d580e4f2"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "1e6c654dde81298acde2e36560420731"
  },
  {
    "url": "guides/index.html",
    "revision": "925302378d1b6523b3636681c0074aa4"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "2ea0162642584bf5b6d0f11b27ae55a8"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "7b39365e71cba31ad28a769d73f71260"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "6838b598f2f738adb380b882a414ccbc"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "848c936d02bc711cc3ea2d1061d2a5af"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "b60b889795fca80ea98cbe4f31e3470e"
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
    "revision": "ebd2189a1fc242bd6dd609d57bc64782"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "eb020884a515ff2d89753617861b1884"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "5696f6364849a3e18ea49d41f6e24aa7"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "e01b9b41e4b5c2cc810afd89ebf3ba58"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "95b452954ff9c284cd32d9c235b7c5c4"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "71fd9e6d9f4343811639221adf4ee3c7"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "bd46beeb7b3ff3e29bb324e83880c16f"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "99ebb55d310687dfc4c1dafdb0e87d17"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "f7d5ee283a90649e7ef1b257d9f74181"
  },
  {
    "url": "premium/index.html",
    "revision": "bccebcb923b049b12a593f7f89ad849c"
  },
  {
    "url": "premium/js-button.html",
    "revision": "ad0d66b95bc60e93d9509e9fca0d8c7c"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "34439cbd8847c0705b62fd83669011a0"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "9144bfabe472ca5ecbd4c3556830971f"
  },
  {
    "url": "premium/repeater.html",
    "revision": "a9a1615b10263e4e132a363b8fbba51b"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "83ea6f4634ceeb7cc7b08ee1a80cde52"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "f13a8ae1e5c0e5543d0e7c4bb808bd99"
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
