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
    "revision": "d3f2c9a81ae2e4a6a67cafe20542ed1a"
  },
  {
    "url": "assets/css/0.styles.3b609d0a.css",
    "revision": "d66408d645d2c01773fdac8d5e4caafb"
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
    "url": "assets/js/10.0b2db4bd.js",
    "revision": "a779f437d6120f4cd4f08069d6d7b8d7"
  },
  {
    "url": "assets/js/100.2218e4ce.js",
    "revision": "1aef97b6927aa1800b7c2f2d57eb6d9c"
  },
  {
    "url": "assets/js/101.0f98123d.js",
    "revision": "542dca759dad297bf2e6f6695cae09f0"
  },
  {
    "url": "assets/js/102.038eb295.js",
    "revision": "b2c38362a295494cf5ba27afc936d3e0"
  },
  {
    "url": "assets/js/103.797925c9.js",
    "revision": "e35edc52be9524092b9c06de5888471b"
  },
  {
    "url": "assets/js/104.9dfc872a.js",
    "revision": "1b9aea14fc1f900efb6fc829060faa72"
  },
  {
    "url": "assets/js/105.2eedcf6a.js",
    "revision": "76dc8f833459508de3c980d81295c1bb"
  },
  {
    "url": "assets/js/106.25caf0ac.js",
    "revision": "ab0edcd5285f7b1cce2d87c86f73c41a"
  },
  {
    "url": "assets/js/107.9335c1dd.js",
    "revision": "27bd1ea05ccf97f21cf552e3fc10c600"
  },
  {
    "url": "assets/js/108.067392f3.js",
    "revision": "72595305c315b989bd4d0adc025c0195"
  },
  {
    "url": "assets/js/11.fa905f35.js",
    "revision": "131d96bab9c367e01d9cbcb32ac69894"
  },
  {
    "url": "assets/js/12.3940617a.js",
    "revision": "990169728110d36d129003ca6672ee94"
  },
  {
    "url": "assets/js/13.52ace892.js",
    "revision": "64a627d7ac7b594b8c2192b1bb2cd3dc"
  },
  {
    "url": "assets/js/14.ca565da8.js",
    "revision": "a28ae6e49cdb6a32c2a7cc0c6203debd"
  },
  {
    "url": "assets/js/15.ab5ca162.js",
    "revision": "780fc8736242f01e8153271f34c50c39"
  },
  {
    "url": "assets/js/16.9bf11e78.js",
    "revision": "30f0f2683ddeba6d61a43a138b88ddae"
  },
  {
    "url": "assets/js/17.5398457d.js",
    "revision": "219f899f6671089f2231cfa02c397432"
  },
  {
    "url": "assets/js/18.4884c5bd.js",
    "revision": "60098559ac19012c097c3a64a6b1e491"
  },
  {
    "url": "assets/js/19.41caf8cc.js",
    "revision": "808b399513e6e5ee5525784c6eb12882"
  },
  {
    "url": "assets/js/2.616b6b31.js",
    "revision": "031ee245ab8caea0d1075e50b81462f4"
  },
  {
    "url": "assets/js/20.a6cc7904.js",
    "revision": "263829fd5bd5cca51a51ffc377042925"
  },
  {
    "url": "assets/js/21.9eaada1f.js",
    "revision": "53f20e12632c2932e569b3289ad56b6d"
  },
  {
    "url": "assets/js/22.28553474.js",
    "revision": "94e5a1795572f6153566247195379d06"
  },
  {
    "url": "assets/js/23.1f197d4a.js",
    "revision": "6f391fa5954cde6a24e00bdb7366fa73"
  },
  {
    "url": "assets/js/24.ca680925.js",
    "revision": "ce16ed988cbe62d0b70c922c7b8d3e5a"
  },
  {
    "url": "assets/js/25.1733e1d6.js",
    "revision": "ccda83c7749cf0a16139326cc5795ad2"
  },
  {
    "url": "assets/js/26.92044595.js",
    "revision": "387a19dd88efe4f66d73fab9e2c33fee"
  },
  {
    "url": "assets/js/27.b0f28073.js",
    "revision": "7d5de3b939a29b6b2a5c16d54abf7d41"
  },
  {
    "url": "assets/js/28.cbbd86f5.js",
    "revision": "76be22107b931c803112a30a8de639ca"
  },
  {
    "url": "assets/js/29.ac72072a.js",
    "revision": "d4d6c98c4967cc8cd0b8fcb9bb86a443"
  },
  {
    "url": "assets/js/3.8ec555e7.js",
    "revision": "56ff8f170d5455b0daa250f6655ae1cd"
  },
  {
    "url": "assets/js/30.928a64cf.js",
    "revision": "dcf1bd038f655bd0f4fc302780217ff8"
  },
  {
    "url": "assets/js/31.0ab41b24.js",
    "revision": "56f1d815c3119f3f1ddac636432feea8"
  },
  {
    "url": "assets/js/32.915f619f.js",
    "revision": "5cc455fd86b4f041f9bfc1da5d8c78fe"
  },
  {
    "url": "assets/js/33.1aeaf5b6.js",
    "revision": "50f58ef1f1926bca86d836f2875f6145"
  },
  {
    "url": "assets/js/34.87284493.js",
    "revision": "f36052b92f1a06e39df3f8eea0161247"
  },
  {
    "url": "assets/js/35.ce6734d0.js",
    "revision": "7c1c785e55aba9981cd81d3c3349d2d7"
  },
  {
    "url": "assets/js/36.160ae938.js",
    "revision": "cd22d4ffa5d4ec83e5af84ed5325084a"
  },
  {
    "url": "assets/js/37.df2ad322.js",
    "revision": "18b4e948d5b1b1a967de9d764bbe4baf"
  },
  {
    "url": "assets/js/38.7f6c94e3.js",
    "revision": "ba3027d55479b458130b0f9564d85ceb"
  },
  {
    "url": "assets/js/39.513addfc.js",
    "revision": "5c1eebb34335dbc3dd13f4ca1b621e27"
  },
  {
    "url": "assets/js/4.ca755335.js",
    "revision": "baefc20d24d22ebe217b4b3473aacbc0"
  },
  {
    "url": "assets/js/40.423849f7.js",
    "revision": "e08b8011d0b5af95ab3ebd58094b703b"
  },
  {
    "url": "assets/js/41.b631d28f.js",
    "revision": "861a8dbe2967178e6ba8c3365954dc04"
  },
  {
    "url": "assets/js/42.fd52f3ff.js",
    "revision": "34c4f5589e211ef167f821cff44859a1"
  },
  {
    "url": "assets/js/43.295a199e.js",
    "revision": "a2b2fe67f5c309b8fc4ec2519e365e82"
  },
  {
    "url": "assets/js/44.bc6d20f5.js",
    "revision": "e1775b4eea269c766b1f2a1f63590e8f"
  },
  {
    "url": "assets/js/45.3860c7ea.js",
    "revision": "bbae9ef7433d970c0518d376b7105357"
  },
  {
    "url": "assets/js/46.0ba925e2.js",
    "revision": "92cb411e2eac511e9f6994de84d08661"
  },
  {
    "url": "assets/js/47.d1cba1f2.js",
    "revision": "5c9c6143de268d3790d520ce14e9a883"
  },
  {
    "url": "assets/js/48.3e12ac89.js",
    "revision": "e3713aeeba37d338130f76bd22c9b9a8"
  },
  {
    "url": "assets/js/49.6fde9a0b.js",
    "revision": "1e0f74044485e0caa7b3b50b86938892"
  },
  {
    "url": "assets/js/5.7a248f18.js",
    "revision": "bb67b5806c7dcf0ba0411d6e3e1bcd03"
  },
  {
    "url": "assets/js/50.b1d1aabb.js",
    "revision": "e9a3078f216f73162aae611a83a7f2c0"
  },
  {
    "url": "assets/js/51.b42d7a3f.js",
    "revision": "4f8531ce2b1ccc75f06ffc587c3e5884"
  },
  {
    "url": "assets/js/52.b00896af.js",
    "revision": "eef2d7e3ce32ce326cd8b62742dc43f0"
  },
  {
    "url": "assets/js/53.ab535a97.js",
    "revision": "d57369e2ae5060ce7e010fce49e5cc4b"
  },
  {
    "url": "assets/js/54.4931bd66.js",
    "revision": "7187160e61f5da1462b502e1cbd0229f"
  },
  {
    "url": "assets/js/55.2a9f9dde.js",
    "revision": "e5c123e6d808bdc18e0e6f08d0bd37c7"
  },
  {
    "url": "assets/js/56.aa5f6fa5.js",
    "revision": "ef17bcff5a166b85227d1e135392a385"
  },
  {
    "url": "assets/js/57.2813b7e8.js",
    "revision": "6847c8b4eac9cbca91f2cb25b4634f5f"
  },
  {
    "url": "assets/js/58.ebada0c9.js",
    "revision": "52e6f0c681772b50852f74cdb05058f6"
  },
  {
    "url": "assets/js/59.32bab271.js",
    "revision": "8bad1ebb7435b590cda79cb3106d22ce"
  },
  {
    "url": "assets/js/6.d7424168.js",
    "revision": "f48b17d4af652561e535b3b6c83aff5b"
  },
  {
    "url": "assets/js/60.0ea85b33.js",
    "revision": "d238f27213c8d60594bfb30479870d77"
  },
  {
    "url": "assets/js/61.688f9f99.js",
    "revision": "bae1060bca0adb79b5e6e7508c1f8e27"
  },
  {
    "url": "assets/js/62.5ffe1808.js",
    "revision": "000e3d22deea05897233e5378aa829f5"
  },
  {
    "url": "assets/js/63.f807b964.js",
    "revision": "6ed14dfd21e05264678d2d599db9d676"
  },
  {
    "url": "assets/js/64.327ecff8.js",
    "revision": "b38ab832cd95a8e4f06085b0550c21b0"
  },
  {
    "url": "assets/js/65.ad3d7e3f.js",
    "revision": "382c79afbfadf62456a607d22c6a6ed8"
  },
  {
    "url": "assets/js/66.bab4978c.js",
    "revision": "e744324e53a3cd8ae014842062f240ab"
  },
  {
    "url": "assets/js/67.5b63a9ac.js",
    "revision": "c01ff14b0a10959f4a76cc7bf4d4eb2c"
  },
  {
    "url": "assets/js/68.dc7aaee7.js",
    "revision": "17fbe491c1bffd4346ea27fe15748115"
  },
  {
    "url": "assets/js/69.02bf1959.js",
    "revision": "8ed91c83187f5d65c993d2ca81efe570"
  },
  {
    "url": "assets/js/7.382894a9.js",
    "revision": "ec7352bf4190ebf2d026d750dcd8ef1b"
  },
  {
    "url": "assets/js/70.45118448.js",
    "revision": "edea223ade670a0ff4aeb29409b9dde0"
  },
  {
    "url": "assets/js/71.7e9f41b9.js",
    "revision": "e7829b9ace6e6695cbecbef22ca7df19"
  },
  {
    "url": "assets/js/72.7fd54146.js",
    "revision": "f566baf7307af19c7df686f2705b1268"
  },
  {
    "url": "assets/js/73.8efb2371.js",
    "revision": "d0578b4bf265810f8b383e865dfab963"
  },
  {
    "url": "assets/js/74.9d612d02.js",
    "revision": "827447fb4686831b6d37d6bf8728ba42"
  },
  {
    "url": "assets/js/75.969c7fb6.js",
    "revision": "d141c124afb131bb8ee66c6115523be2"
  },
  {
    "url": "assets/js/76.b267fb72.js",
    "revision": "34979c34b8e91720454e4b0b98293e05"
  },
  {
    "url": "assets/js/77.1210cc74.js",
    "revision": "d8579ebda11446a3c3d248fd397aea58"
  },
  {
    "url": "assets/js/78.639a04ed.js",
    "revision": "0b601e7cc8f7e7627ce835ffb8cf79a3"
  },
  {
    "url": "assets/js/79.596cd0df.js",
    "revision": "0e1ef177e789c80761e54d89ecbcb355"
  },
  {
    "url": "assets/js/8.2d916f46.js",
    "revision": "46a5bc21ab5e6c971ba164633d86e4f6"
  },
  {
    "url": "assets/js/80.0ff27716.js",
    "revision": "daf3e8d74c797932e9a0a3aeea540594"
  },
  {
    "url": "assets/js/81.404da9df.js",
    "revision": "5e4c4ce0e6a6a8b0ec4421a906353dfd"
  },
  {
    "url": "assets/js/82.67313697.js",
    "revision": "4c5b8df64321fca83edb73187f113217"
  },
  {
    "url": "assets/js/83.af80c4aa.js",
    "revision": "c9e6f9ace65399fcf99836185b254aa4"
  },
  {
    "url": "assets/js/84.cc4e4092.js",
    "revision": "58cf7b6a2e7eafb20b3885a67710aa42"
  },
  {
    "url": "assets/js/85.1e46496f.js",
    "revision": "c3754e55bd1081a80a728e86155e409e"
  },
  {
    "url": "assets/js/86.505ce128.js",
    "revision": "3e784830eea93ec03e48be71428ebf37"
  },
  {
    "url": "assets/js/87.d7d85d94.js",
    "revision": "6f1098eea50af13548ae0ecdf953a659"
  },
  {
    "url": "assets/js/88.aa17e363.js",
    "revision": "bec3c7fe002004fea004cbc13f498c32"
  },
  {
    "url": "assets/js/89.897a816f.js",
    "revision": "d958efad4f5b2bfc5719511e14cb780e"
  },
  {
    "url": "assets/js/9.b5d14369.js",
    "revision": "3af33dbfd6450f10de97fa9db9c4bf8f"
  },
  {
    "url": "assets/js/90.28402531.js",
    "revision": "0f231235e4ad58b94a5ee939f2b65d9b"
  },
  {
    "url": "assets/js/91.323d5974.js",
    "revision": "cda8b8fef94dd79de43f2b9132eb222e"
  },
  {
    "url": "assets/js/92.47e72ff2.js",
    "revision": "e5c57479a6c15512514b42575f103808"
  },
  {
    "url": "assets/js/93.989f1f86.js",
    "revision": "5c995036683845a91538af7f687cfb9d"
  },
  {
    "url": "assets/js/94.23c17d63.js",
    "revision": "1ada3b1b782a4f4f712f141da538b382"
  },
  {
    "url": "assets/js/95.fc905dcf.js",
    "revision": "0c911dc3a2fe38d5563f51869d828434"
  },
  {
    "url": "assets/js/96.f7329175.js",
    "revision": "550ca1cbd0e643f846301480c844a88f"
  },
  {
    "url": "assets/js/97.a545cdd7.js",
    "revision": "ecfdb828bfb1bde12f9dc6d31b52795c"
  },
  {
    "url": "assets/js/98.e8a26cbe.js",
    "revision": "8248e05fe9e457a02b50723ee24e9b85"
  },
  {
    "url": "assets/js/99.26b52952.js",
    "revision": "3ba4a7603e4e329efe83b549932aeabf"
  },
  {
    "url": "assets/js/app.4a227405.js",
    "revision": "ce3de13de4a35dec87581577c8a573be"
  },
  {
    "url": "configuration/api.html",
    "revision": "41c93c93d12e8ba81a5e5b1123ee58fb"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "105f6f51c43347faef3bb85f453fa97d"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "9effad301492963451012ae7fb336f50"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "53a6aeb3b27af3fa0c513bcfef1cba2a"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "42bf6afc07879990dc181e62a71715ef"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "c1b1766a9a2a27b31e3838160a31d279"
  },
  {
    "url": "configuration/fields/output_variables.html",
    "revision": "0e6b152c97a861fcfbbcda3367584989"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "1f9bd07c59eca5cc22fde9ed896ed016"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "9e10d66b7bccf2f526d8db2e5ef08df9"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "1ce88d61421f8b6d55cf6a082f73f540"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "ef646f3e3bd1e44a78f2f4ff8a0bf832"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "189b6d2084092c6836e03d47e71f293e"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "178c0d248d7a7294fd512713b975487e"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "cf7357c9bdae5399f721d5175fd8a4bb"
  },
  {
    "url": "configuration/index.html",
    "revision": "bd006857222b4dabee0625eaaca6dcbc"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "bea8853f5a13e0ed50c16f083de4c9b7"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "fb396f7629b159156e212503aac6878c"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "e36534eb54f38019dfaa3500929ed73b"
  },
  {
    "url": "contributing.html",
    "revision": "d8ae864b9639bd98ff1b1883fd487535"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "ec07ea0c838555015b9db76d6f40e5ff"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "7f0785d8388955a7c11fded91f55869d"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "6639c4cbc7b7c0ffe490577a01726277"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "3b6d225f40f9622d8ddd8b6fc785717d"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "31e7213330a714ece37a3d9927e59b9c"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "4e4584c99d8d3d1a3736f9c5888f8a0e"
  },
  {
    "url": "core-fields/background.html",
    "revision": "1f46ab413d39188af98bdca90e5c87d3"
  },
  {
    "url": "core-fields/border.html",
    "revision": "81b54d68ab874b3078a990f6823f4b07"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "6fe9ead355807e6f1ba058be6091cff3"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "33919cc6f4dc77deb3fbcacc29e79e8b"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "4cf2d496c2cbe477ee9efdb95a55fa85"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "9294386c0371cf3afdb48069a97a6936"
  },
  {
    "url": "core-fields/color.html",
    "revision": "8da2b4d558928c92ab6172bc28587122"
  },
  {
    "url": "core-fields/date.html",
    "revision": "9aa4952818e9a467a13af25f9ee3f6a0"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "a4b56c389cf9f8ee2c6e721f2f305d9e"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "d491a74cb4852fc462d2c95d69d2ebe4"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "ecec336c6d43e44ecbfec1fbf9c5766f"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "33d60a1de9911139f212a041eb0615f7"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "734b5d427a2aa3dbf52d680ff19154bf"
  },
  {
    "url": "core-fields/index.html",
    "revision": "3a3155fdda8c764020f653777658434b"
  },
  {
    "url": "core-fields/info.html",
    "revision": "abf856e228e3a1f7e20ac0b3ae38fd23"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "98c444115546f4ab8091e11e9697340d"
  },
  {
    "url": "core-fields/media.html",
    "revision": "b6bdb04367a982c0ea171ac5965fcf8c"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "6ff058d7862d22236e0fd8f66cecbf4e"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "813349cb9201a7b3f11d15674c2d0d4c"
  },
  {
    "url": "core-fields/password.html",
    "revision": "440c35af55a4de973642947a408e2e0c"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "d676fbeb4f6726b9c56155cf45435be2"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "6e32b939f440a5f6c116486e748c0681"
  },
  {
    "url": "core-fields/section.html",
    "revision": "5646d91663e8b8573d8fc40bd0504fd7"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "6b0b374cc5509caa742588d60b21d28e"
  },
  {
    "url": "core-fields/select.html",
    "revision": "49c7e0ab55ac8bc1ce7dc8a4ff80ab6a"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "fa02683aca2b6ce953ee190621563e26"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "ff714a31ddb1b9afa920f2a48441ee75"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "989fef8b45bc8ab4c86959879565f381"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "78c62623ff289ebd359282e0426c7c85"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "01fa7062530d598f890c78a898309d3a"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "e3e841fde9aa66b9101d0026ad481006"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "0d036bf096e30d8aacd498c743251cb2"
  },
  {
    "url": "core-fields/text.html",
    "revision": "ea5630fe171f67c87c150641ec9cdb3e"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "349bbc6a016995e9c53050d4b4497759"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "dc70effd56dea69257e54a3225f784bf"
  },
  {
    "url": "core/index.html",
    "revision": "7bf969f37f38340a74aa212308cdbde8"
  },
  {
    "url": "faq/index.html",
    "revision": "3b6e0863661014298c6013f5147f71ae"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "d368c8f5d94845627f2defb497c2dc25"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "b5d9029a3ff83eeae00d33ebaa73f553"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "e9e85f2659eefc6e6fce111faeb00031"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "e1eb3516a98a7b7f9445ffd35e408b46"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "e2b301c72b1b4f1c82faab525e21e35d"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "6528463bad7f44c668b38a1c1be0a255"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "0efec8181902362fc9fe2390ba2fa505"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "9257becfcbf0c047cdfb50c7243f8d73"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "c0fcbd32d7da458e0d7f23127e5326df"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "d0c2a606dc1aabb574f4564fe1adcdd2"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "2004e10f471df5a2faa9ccea3c2a1401"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "06b90a8f193d6b5b3c8f263146e31f86"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "41b6a32b6b12538a7235f73fe9cf319a"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "301f00d72c33c5c9dc07959d34310149"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "f80d82aca757f39ebcb98146c2329478"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "378c23df2ff3376e9f9c6f061ccb7575"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "4cc27c0b6e4b22200f1ef087c6cc1c9c"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "51a21e3666815f00c754f87c2b1c77c5"
  },
  {
    "url": "guides/index.html",
    "revision": "4a8a8a3b8eedeb81e2312492e583c6ab"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "caae7229c3ccf86075fd8858d20d56f2"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "70eeb3632240d98ba4a0fccb24aa9bb4"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "48505fd002fe442e94da9875691f41eb"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "4945602723a57b14f698f6520bd0087d"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "ee1437e31247374718bd9d40c405b842"
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
    "revision": "2d32df62400dde4de46f4e2a10dd7dc2"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "aaa2d7a6a6f8935bf08ff62215f7647a"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "571516e808eb31a0f4eec89bae66b205"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "5870430c09ab69b1fc8498a33b976c17"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "47219613466cf60743dba39962464d9a"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "40884f5dba6def2d00a3b2d19578e55b"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "38ced1047345b8e562816a52aeba0d90"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "12a663e34c6f22cb2c1f440d290a874f"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "420f59591e95fa5c6c9394ef9da3b099"
  },
  {
    "url": "premium/index.html",
    "revision": "304a730aaa1a12c33bb69a7855b8eaf8"
  },
  {
    "url": "premium/js-button.html",
    "revision": "42e065b240a732d1d0d0b15740c84198"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "16041a649fd6ce735ab72e0c0ae6c75f"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "1b950f657d4e312b020498d98d21acd5"
  },
  {
    "url": "premium/repeater.html",
    "revision": "5da57a34091f31a3947ac0bff5767b34"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "76702b46be383ffa6fc5fe1f6639762f"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "efe0d3099414f3226fe11a86c8888744"
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
