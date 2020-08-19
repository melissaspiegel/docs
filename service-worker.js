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
    "revision": "18e902338406661744b82044060d5409"
  },
  {
    "url": "assets/css/0.styles.81ef8c28.css",
    "revision": "696c4c0d4d4cdfaff4551993a1013157"
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
    "url": "assets/js/10.943dc1e2.js",
    "revision": "adc01db476cdbe307040a8d4bbaf71e4"
  },
  {
    "url": "assets/js/100.80207774.js",
    "revision": "f61d18766ec7d18d471e30158f9dfa23"
  },
  {
    "url": "assets/js/101.579762e3.js",
    "revision": "7b0ed48bbb003379d8522f4ee42ffeb3"
  },
  {
    "url": "assets/js/102.b0da28d6.js",
    "revision": "b56c61d059d51aed97f0bd573572fce2"
  },
  {
    "url": "assets/js/103.2da5f57e.js",
    "revision": "09070e4f66d8bcac47aa879cf7964372"
  },
  {
    "url": "assets/js/104.4b11feac.js",
    "revision": "f7e811a4b818d1dd3258a557a3906757"
  },
  {
    "url": "assets/js/105.91ffb138.js",
    "revision": "d16ec93c67820ebb3d8ea7ac8dedc51f"
  },
  {
    "url": "assets/js/106.eedd192e.js",
    "revision": "4840c24536297b81f46ba5d63284bcf0"
  },
  {
    "url": "assets/js/107.b1ee9108.js",
    "revision": "387c2aba46a71b6738ad7ffdfe644567"
  },
  {
    "url": "assets/js/108.b438ebb0.js",
    "revision": "917e05fd0d22a4cbbcf413e6f67a6526"
  },
  {
    "url": "assets/js/11.54d781fe.js",
    "revision": "7a0f1126a6c68ef5003edfae7492cd20"
  },
  {
    "url": "assets/js/12.8f69dc0b.js",
    "revision": "5cf100934eb39941ed76bda13096a3cc"
  },
  {
    "url": "assets/js/13.3725f737.js",
    "revision": "81cab4ce96b161a49e6de2b91a544f94"
  },
  {
    "url": "assets/js/14.aa45cd5f.js",
    "revision": "081544b023ff6a918cf8991a23b17417"
  },
  {
    "url": "assets/js/15.18b84d0a.js",
    "revision": "7a99149be53370b4a8cb037171f1fc74"
  },
  {
    "url": "assets/js/16.8ea791f9.js",
    "revision": "17cf90ecc0cb304e70e5b7e4802aa969"
  },
  {
    "url": "assets/js/17.989b182a.js",
    "revision": "96893072d4be37c88ee64d7baccbae3a"
  },
  {
    "url": "assets/js/18.c9295dc7.js",
    "revision": "3d5bcaf3d25103d2e18a8722af2241d7"
  },
  {
    "url": "assets/js/19.5712b18c.js",
    "revision": "949adba47857f19458d906aeeee6c3d0"
  },
  {
    "url": "assets/js/20.6e660c3d.js",
    "revision": "3a173c67fa79ffab19a99a7dd63ca73d"
  },
  {
    "url": "assets/js/21.5a208029.js",
    "revision": "5b66ad7328a5822d5d146f806993850a"
  },
  {
    "url": "assets/js/22.26f01def.js",
    "revision": "41f951b50825718926970edaf9220287"
  },
  {
    "url": "assets/js/23.5f277517.js",
    "revision": "a3e2132dc1b418aa4e5087cbe371fd12"
  },
  {
    "url": "assets/js/24.f177b25d.js",
    "revision": "d900a38bddd594fcf838a601736351bb"
  },
  {
    "url": "assets/js/25.1d8f82b5.js",
    "revision": "2c70ab19576ad8b657dbef5103eb7f63"
  },
  {
    "url": "assets/js/26.3c63116c.js",
    "revision": "4387163dba98a6c25cebc50c1a5c95f7"
  },
  {
    "url": "assets/js/27.dfc482e9.js",
    "revision": "ce622bffd1afc03d683c346d80b7f9f5"
  },
  {
    "url": "assets/js/28.c621e3df.js",
    "revision": "adb3295e7043b1a9722c39b82a7c143b"
  },
  {
    "url": "assets/js/29.f564ede1.js",
    "revision": "77b48eee5ceba73a237dcb33bf11b7f7"
  },
  {
    "url": "assets/js/3.92519795.js",
    "revision": "86a069171bd8888ff233b4108ad024b0"
  },
  {
    "url": "assets/js/30.cee9aa4b.js",
    "revision": "9f9a01a12037e92a400f951b02d21ccf"
  },
  {
    "url": "assets/js/31.e692c620.js",
    "revision": "d3aedc1e7baebafc512e5c800b776d19"
  },
  {
    "url": "assets/js/32.40b0b1d3.js",
    "revision": "8899b8ebcca49c859ba45ee36ef86920"
  },
  {
    "url": "assets/js/33.8331537e.js",
    "revision": "47c61f779154fc9647f32a15fbab71b6"
  },
  {
    "url": "assets/js/34.0e2c97a4.js",
    "revision": "ac72a9ad4144dfd740c921a21918c02e"
  },
  {
    "url": "assets/js/35.37d67c42.js",
    "revision": "d047a107ea13392fc96b42ebfc1b68db"
  },
  {
    "url": "assets/js/36.483eef87.js",
    "revision": "0a438e2a44a7ee4999b903370e195f19"
  },
  {
    "url": "assets/js/37.90c013cf.js",
    "revision": "4d5807d1745c7e421d2dd44491abfb50"
  },
  {
    "url": "assets/js/38.67acc83e.js",
    "revision": "c2f922493a9832b284354dc2d74cff90"
  },
  {
    "url": "assets/js/39.6e861e50.js",
    "revision": "695a1bb72f271f3814f1663982190233"
  },
  {
    "url": "assets/js/4.e295afa3.js",
    "revision": "cc2bd2f8d90a9a1442c13911d9ed84a8"
  },
  {
    "url": "assets/js/40.750a34ab.js",
    "revision": "4f42722e14c7c455e50b7d9e509e2fe1"
  },
  {
    "url": "assets/js/41.ad769b52.js",
    "revision": "3b0d880191a85fb42ec272c23ffa52e7"
  },
  {
    "url": "assets/js/42.df78a330.js",
    "revision": "a1a9c918791c527f3a28aacd7696f1d5"
  },
  {
    "url": "assets/js/43.18f2bbc5.js",
    "revision": "f4eeabdb36bbfa3994f674004a88e552"
  },
  {
    "url": "assets/js/44.5d90a2aa.js",
    "revision": "6a701dab0d7ad9eaaf02fe9fbdca1404"
  },
  {
    "url": "assets/js/45.54d31ee3.js",
    "revision": "55891a145614e915321e71c5c66c0bd5"
  },
  {
    "url": "assets/js/46.363b0b1c.js",
    "revision": "7a95f11aec6f62c162eb13a9c06dd6ae"
  },
  {
    "url": "assets/js/47.e5ee2691.js",
    "revision": "00b16836709b680076ee90b94acfbc8e"
  },
  {
    "url": "assets/js/48.2a654593.js",
    "revision": "950b78f9eef34261617ecd9e25b20939"
  },
  {
    "url": "assets/js/49.05294b31.js",
    "revision": "c4aaf46569aba1d9ae275f3d5a557595"
  },
  {
    "url": "assets/js/5.9a9fc504.js",
    "revision": "e65caf2702e14cb98d5309744560a385"
  },
  {
    "url": "assets/js/50.08703820.js",
    "revision": "9a37a97cd1dd64318584c9323e192202"
  },
  {
    "url": "assets/js/51.03fc4650.js",
    "revision": "0811ec8d70aef8ff364b569e7bc6cbe1"
  },
  {
    "url": "assets/js/52.e5a09e9d.js",
    "revision": "03d029b6f2b2806d8138383edf61dbb5"
  },
  {
    "url": "assets/js/53.13a70e6f.js",
    "revision": "658ca7a91921f2f8c466aa808c2d556d"
  },
  {
    "url": "assets/js/54.31bf7cf4.js",
    "revision": "a7b368523e13176e9694d00187d6629c"
  },
  {
    "url": "assets/js/55.dfa0269e.js",
    "revision": "cb3add0b83b9990a2f52f390613f0d67"
  },
  {
    "url": "assets/js/56.52312cb7.js",
    "revision": "a2425bcdf7b613d6ec2d7ae1b17dc2c1"
  },
  {
    "url": "assets/js/57.9d67442b.js",
    "revision": "5f757a76bd7ed0543c1d1a0c5a106080"
  },
  {
    "url": "assets/js/58.94b61bf7.js",
    "revision": "31b87edd82dda7df35fa833d028bc325"
  },
  {
    "url": "assets/js/59.d725ae0f.js",
    "revision": "835b1746cd67a7bffa2f315ca452cdad"
  },
  {
    "url": "assets/js/6.fb4e4987.js",
    "revision": "d359bc9e2d5f1e3715eac2741798accf"
  },
  {
    "url": "assets/js/60.41ea51f5.js",
    "revision": "eb8b6bee2ba55115e9a7c43d88954887"
  },
  {
    "url": "assets/js/61.5a028dfb.js",
    "revision": "b1b16e85c3c3b157b5a356ea67ecfe1a"
  },
  {
    "url": "assets/js/62.76e268ad.js",
    "revision": "d47f132fab5cc3b3c74c722aa30ae24f"
  },
  {
    "url": "assets/js/63.169422c1.js",
    "revision": "c6ba2840562c3ee9c24dc8e0f68a1905"
  },
  {
    "url": "assets/js/64.a40408fb.js",
    "revision": "ca3f100460f1a4b88a77b5473d096f68"
  },
  {
    "url": "assets/js/65.7e2c9f8d.js",
    "revision": "62c5514cfcbaee84b2b5bf3b4629603d"
  },
  {
    "url": "assets/js/66.0b50816f.js",
    "revision": "d2d97de6afd42f0270e858644ccd1093"
  },
  {
    "url": "assets/js/67.1463c585.js",
    "revision": "8fb643e904e6e515bef4fc3e42796414"
  },
  {
    "url": "assets/js/68.e0e66f5b.js",
    "revision": "0f4979b57e0ed559de8bf392c5d3a797"
  },
  {
    "url": "assets/js/69.e46a946e.js",
    "revision": "203889fec66dd80ca45ce8eb4ad5429a"
  },
  {
    "url": "assets/js/7.bd502dea.js",
    "revision": "acbe5e8d703c28d3a556cdff4eda41c7"
  },
  {
    "url": "assets/js/70.a4deaf6a.js",
    "revision": "48a47d670aa89d435bab6f3ecf321083"
  },
  {
    "url": "assets/js/71.837f2d8e.js",
    "revision": "d61234062aa5d523e79bd28ab4426b6d"
  },
  {
    "url": "assets/js/72.2e036572.js",
    "revision": "361faf2350b971ec2d427ceaec6d4b82"
  },
  {
    "url": "assets/js/73.d4da02ff.js",
    "revision": "b8e80be3d1667e8cbb2b1b41fbbc8bd6"
  },
  {
    "url": "assets/js/74.b82c6d29.js",
    "revision": "0fd0ff785d1e58835c6f864ae70da4ef"
  },
  {
    "url": "assets/js/75.f5e0c5b5.js",
    "revision": "722477a2d3ff5bfda58db3f52decb183"
  },
  {
    "url": "assets/js/76.07fc6e12.js",
    "revision": "30884e35647051888d5fcd20486fadaf"
  },
  {
    "url": "assets/js/77.09a23d42.js",
    "revision": "093f67b0cc2be99b56415c87f23907df"
  },
  {
    "url": "assets/js/78.10c7a55b.js",
    "revision": "83926034ba6ef6354020d5e98becad50"
  },
  {
    "url": "assets/js/79.5e228427.js",
    "revision": "b9d231cb9eee4f046f3b2a391d5d71d7"
  },
  {
    "url": "assets/js/8.0c07d9e3.js",
    "revision": "9b1649871775d6560c307c0d6fac47ef"
  },
  {
    "url": "assets/js/80.55cc94c0.js",
    "revision": "928d2e7ef2e8c17bab79b10a6505188b"
  },
  {
    "url": "assets/js/81.19fdabfa.js",
    "revision": "cdf5b30059ac4826eb81563e13ae4143"
  },
  {
    "url": "assets/js/82.cf6f1aa0.js",
    "revision": "29698e292548a7c4a05e26de517fee41"
  },
  {
    "url": "assets/js/83.782a5728.js",
    "revision": "cc4fedc96b4a45939caad05bd4d085c2"
  },
  {
    "url": "assets/js/84.e19abc63.js",
    "revision": "e5edb5b7c568208443a76ec9c1032415"
  },
  {
    "url": "assets/js/85.e42c446f.js",
    "revision": "b5ceec5acdd541888ef6f8def0282b16"
  },
  {
    "url": "assets/js/86.d821d255.js",
    "revision": "82ec8ebebe9dcd7e87e2ea6f9102477c"
  },
  {
    "url": "assets/js/87.6e64f789.js",
    "revision": "5c2a41c8757a70e442d5ca17459eb3eb"
  },
  {
    "url": "assets/js/88.d0e2f7b0.js",
    "revision": "ffce7667d0aa2e87bb927eba6a4c58fb"
  },
  {
    "url": "assets/js/89.21bb5417.js",
    "revision": "5ed1cb931a8c9861b9c957022fead451"
  },
  {
    "url": "assets/js/9.407b3278.js",
    "revision": "b542353d74e88f00c48f69f641af97e8"
  },
  {
    "url": "assets/js/90.91f1693e.js",
    "revision": "b9d1b4da0896fa9823fc9728ad7a8b8d"
  },
  {
    "url": "assets/js/91.39513e4f.js",
    "revision": "dd55a0ff3a3a94fab8ddea716f4dfd54"
  },
  {
    "url": "assets/js/92.7d0f7f7d.js",
    "revision": "ca7cf521c7cffa0e9306988f214f51b4"
  },
  {
    "url": "assets/js/93.9a5c8f5d.js",
    "revision": "106ef5d3d15669b8b89a9e6967f66508"
  },
  {
    "url": "assets/js/94.c023b385.js",
    "revision": "2971dd255cda00522588683ab2c42916"
  },
  {
    "url": "assets/js/95.84814407.js",
    "revision": "7071ba53ee996ae7f594e2d1d9da1a5c"
  },
  {
    "url": "assets/js/96.85425438.js",
    "revision": "2f2649ac69fdb92bc555d8bafff5aa32"
  },
  {
    "url": "assets/js/97.db98148f.js",
    "revision": "8d9189705a402b5c1c53ca8e1716944f"
  },
  {
    "url": "assets/js/98.0a91e6bd.js",
    "revision": "4cf98177c902da9ab64f4dd5c7e00ec9"
  },
  {
    "url": "assets/js/99.1fb512bc.js",
    "revision": "ca19afa2a51645f8cff7eeb8c3ea6c68"
  },
  {
    "url": "assets/js/app.01793f1d.js",
    "revision": "24e31b2bea864d49498343b5685b0409"
  },
  {
    "url": "assets/js/vendors~docsearch.7f7e78a4.js",
    "revision": "1833333cc9231e785803d70cf74d7b8e"
  },
  {
    "url": "configuration/api.html",
    "revision": "745faa566155ad977ceef0ddf53404ef"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "e5e597b6958f40d4e77462d1c9070fcb"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "e9ae50e771a7390eeb16345957d6bb23"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "22f8c6bb0d74c1dd93376fdd8c92ea16"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "a74205a94add5ef15959b24c28b22481"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "4f50d7ca13207a7a4a5532176bd71bce"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "2bd40204be3452732e021e10e5cb6a44"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "d12c3e30e9d5c81cf9439a08023fbbfc"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "4a3240934dec0d33644f84cb5b358464"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "706d2cf07b4bd4e2a6d770e65275bad6"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "de25a22e62fd15179493c35cec8661a8"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "6a229c9fae884a261525a5e75443d87a"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "00ac0b10a29ab6d073c2fbbecd2f6b8c"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "0d94e6cc1d74a00b9f38abc65c46c2f6"
  },
  {
    "url": "configuration/index.html",
    "revision": "b25b4e1818e654805cc1ecc988a987b7"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "3870d2c0721598a94b2dae84d26eafda"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "69448b1fa253f7087d0a8a9d928a5f69"
  },
  {
    "url": "contributing.html",
    "revision": "e12d62a69473a8596d888d1f83ccc7b1"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "c1284a37bc6d32bda51fa2e658564c45"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "8634ebc302befb2bbef53c5acd346756"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "835d43b835d0ee1df8b8885d65be89df"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "7b7e591119fd4820c7a251e42b50654a"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "72ce460c869b1518be54802296803dd4"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "f17a9a764b05c8f7be516361ac882a26"
  },
  {
    "url": "core-fields/background.html",
    "revision": "f9b057474850e82a4ee5d34861a98331"
  },
  {
    "url": "core-fields/border.html",
    "revision": "ec7ccd5e60fe73ef19e74a7aef8a707b"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "01f196cfb71b12bd73eb1b36f4fab990"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "6149f19c945df928d1ed83d27abe4c1c"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "b190d3d1769d70ce5fd5178eac024a57"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "e5f9d01ac1ef52e095561c879a8d49eb"
  },
  {
    "url": "core-fields/color.html",
    "revision": "c7d69f7806487c97c5bdc2902c5acbab"
  },
  {
    "url": "core-fields/date.html",
    "revision": "d98dfa18c37361b34ee392703aeac651"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "b78c5f55ffd030d45dbda35e5e83fc65"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "aede0e3fcf9d9dd1da40efefef26ce9f"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "3336434b8e879fb15b57bdc13c492afc"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "2c5cd00443b2d5fe3efc6208d75d806c"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "00f5e717d286766658421d8a7fae218b"
  },
  {
    "url": "core-fields/index.html",
    "revision": "426ce2f20b6f0729c1518eaa7838e525"
  },
  {
    "url": "core-fields/info.html",
    "revision": "ce0afc42ffa11f05eb2288a3e238a7f0"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "ccfe68b4ae17e5991282aaaeea39cb7f"
  },
  {
    "url": "core-fields/media.html",
    "revision": "ce13c60d072b09676009a02e76e3e860"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "d6cfcb3ebe60347b2431b70471e7ad34"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "484a45ccf871110323f6731cc0fa0c0a"
  },
  {
    "url": "core-fields/password.html",
    "revision": "ec2f88712615537ffef01e8920bc6826"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "2a28b969902a2b0249438626894543be"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "9fc66aea5c0022415dfee517bccacb82"
  },
  {
    "url": "core-fields/section.html",
    "revision": "8f5ea9f199ef527e6d903e4b23bff260"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "82e4e771a3d0d9b92b8a3c2a0daf1bc4"
  },
  {
    "url": "core-fields/select.html",
    "revision": "5200bb323043c523a608c233bd03c4b5"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "92f73a7fd1f87b3a51b29c6178bf1363"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "d201466a019d9c2b4954ebd5e6c59d5c"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "03285c40054fce7ad10793dcc518b6d5"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "41f2c91031c483ad4b7313058d0315d1"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "dfc61d9eab124f656e936e4d40a92772"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "3b683053d2afbf2fc110cd667aad4f6c"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "fad87f33e721064dfe63f9a57038a3ad"
  },
  {
    "url": "core-fields/text.html",
    "revision": "7e2a88fcac4869b094d7d8361fad89f7"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "e573b28a6699159daedac063200ba7db"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "537db0bb451b1bf9b47e171c2cd0e547"
  },
  {
    "url": "core/index.html",
    "revision": "07df48709555c2d0f023cc08d21c9b75"
  },
  {
    "url": "faq/index.html",
    "revision": "e06a65037b57c03af4035e6728b2337b"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "d6baee408606e923d29d3ee5df0fd817"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "5393fefdbb0576d17c90afc4e64925c3"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "14acce34cbad872023e7044d96e5704e"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "5e477130674e668a112d97b758138f93"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "2a43e879ba1c686d44de49211fe71947"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "a3a4a01dab59a16b8991a7dc2ad6e9b0"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "ed802a7e3ceb3aca27d500995ac24c6d"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "89104584beb2b83e34815a16d53a1f4b"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "f9d3a7a898d785d127a5c72fb96f46ee"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "d398fd376af78634a475e7101becdb94"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "17c64ea2ee93f83e42f0356d8bfe95eb"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "7872f6479fb9e3baec7aeae5f7b8d2df"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "4c60a9ad358941e0e22d8e42cac5b08d"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "547c3d8bbd14a3d4489c1ca545dde9f1"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "a2404a2ec30f6066cbe69dc5abfd60af"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "e2bffcfbe86eed4c3d518690278cff66"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "f6037dc0350adab6d250318ece50f9f0"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "54e81b37002e8799d6e0378fb69f4b08"
  },
  {
    "url": "guides/index.html",
    "revision": "54bc3c26c0a0b9449c148a817daaf87a"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "3ea158108d84a05e63bc9c94c0c7ab70"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "2138e4b0a4968a6b82493beb12cd6923"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "d41660215603754b25d80966b8ed7f4a"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "8e88704cc452c63ae64a3c7a67f3df17"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "91c1e850504ab4aa75d2cba9d9dfbf2b"
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
    "revision": "1ba96f6be6b68cae70fd481e37bb83bb"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "8a60cdbe47689aedd4b77406738693c8"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "e5ba75365c021aa5781260d9327b1b22"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "e0f5ad05139a5fe0773b97149738d0ca"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "449209d4db42a642deeda5111c23c25e"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "2897fbabf963b1b9c119eb750c34d636"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "eeb226d2529a736dc4b6a27a6e8c8fce"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "9609d7a17edef7951e06a16d1720c012"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "719b64d3cf5e5c81c7ef26995e623178"
  },
  {
    "url": "premium/index.html",
    "revision": "4dc0c5bb2c53f466ba8169e55debe6a2"
  },
  {
    "url": "premium/js-button.html",
    "revision": "2ebdbdf67265c5f372df75d2898b6640"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "52b0848f4dd78ae9f773e66637a0902e"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "739f4b3e9d87f9ddcb58866ed17e4165"
  },
  {
    "url": "premium/repeater.html",
    "revision": "7d8f148adc45accc036281c625b507d8"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "a3d1fcde439554358cb5a70cb272a99b"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "3436b161f7319752bb4fd6fc92a3410f"
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
