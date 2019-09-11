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
    "revision": "9c8ed4c57debb4b75d1ff161633e5e05"
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
    "url": "assets/js/10.30d9c2bf.js",
    "revision": "80860e1e5b56cf28ed0b83389f8143db"
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
    "url": "assets/js/104.887ad65b.js",
    "revision": "f3a49dc251b257dd44f5b610fda43e0f"
  },
  {
    "url": "assets/js/105.4159b710.js",
    "revision": "1c778312034ee0095d5412096f3b01ec"
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
    "url": "assets/js/34.3dd6ab26.js",
    "revision": "0a61b4bb42e211128d7c1e4aaaffe9fb"
  },
  {
    "url": "assets/js/35.0de333ef.js",
    "revision": "4bc302fa83cbba018813356320711df5"
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
    "url": "assets/js/40.02a3b759.js",
    "revision": "82179d6840f0477f686108d5c8a2ec6b"
  },
  {
    "url": "assets/js/41.fb9a8dab.js",
    "revision": "e0a15b9fa3374219de28b3256d781fba"
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
    "url": "assets/js/44.7e326a3d.js",
    "revision": "be5c8eca9f9e1d75bce4afcb4057f8b7"
  },
  {
    "url": "assets/js/45.58505b67.js",
    "revision": "1b2b34e193449b74c76d36fdf741a701"
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
    "url": "assets/js/5.8ec54341.js",
    "revision": "d276666de31d1adddfe0ee13ba2c5526"
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
    "url": "assets/js/60.ce373307.js",
    "revision": "e4fe602d7700bc6a3ce8e9f002f191c4"
  },
  {
    "url": "assets/js/61.a2985207.js",
    "revision": "7063b9e23d4ad697e3ab418a618c3a3d"
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
    "url": "assets/js/7.7646ad28.js",
    "revision": "1b460a4fc930ed99a0dd0152d4ebc249"
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
    "url": "assets/js/72.711d7337.js",
    "revision": "23647ca1e237ed39aeebf986fd1fe3a1"
  },
  {
    "url": "assets/js/73.1be14f97.js",
    "revision": "845eee7008f885834718ffd4c86405e5"
  },
  {
    "url": "assets/js/74.9d612d02.js",
    "revision": "827447fb4686831b6d37d6bf8728ba42"
  },
  {
    "url": "assets/js/75.54bf8176.js",
    "revision": "a5755d730ea77419d588ca7c29a85b64"
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
    "url": "assets/js/8.eecf288c.js",
    "revision": "15be9b0e233682f41f323d1464b0cd8d"
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
    "url": "assets/js/9.36080038.js",
    "revision": "c76745ffb932bb33564e87017fe7ea8e"
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
    "url": "assets/js/94.c0b5aecb.js",
    "revision": "26479d97d75607a8bd9431b4cae10ada"
  },
  {
    "url": "assets/js/95.8860e900.js",
    "revision": "161cb0255046373c348a028e5d56960b"
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
    "url": "assets/js/app.581328c7.js",
    "revision": "06992cd9566cb24a083ab71b5af468a3"
  },
  {
    "url": "configuration/api.html",
    "revision": "4b02f2d6e7288df38e4ed2114670bc7c"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "ccce26b29b5051e352df216f800437a1"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "760b1c18895928524507f165d4b3b10c"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "0a5a3f7c2bb66e4482a9a70011611cd8"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "e22ff22f7d46e7d756b8cd59c26506a9"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "46eafcb9bb71dd7f0e3dd58dc1f30566"
  },
  {
    "url": "configuration/fields/output_variables.html",
    "revision": "ad494e224ceb97a4f8a6517e457fb81c"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "e153be9e94985b555febf018db3bb91d"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "7714b24b81dfee78018bf61292785daf"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "dd50957cf37357c62b39849a4fb13be6"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "15b8b5fa46ee964bbcd0cac782ed10dc"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "81361fba87e86584d303084d82dd04be"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "48df35f210857598cce38f3dc4390fa5"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "1af02d00a31f7e57afc96c16c9e6adef"
  },
  {
    "url": "configuration/index.html",
    "revision": "15b0708d33ad9872a1772720ec8134a4"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "a2b1c6b76b06d67add77692fa13aeb3c"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "88a0ed288319abd36f6beae90d8f3a78"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "4b2f9b40b51cfb38d2151f816129aaad"
  },
  {
    "url": "contributing.html",
    "revision": "01a435b1d3eb4f38dc0d05e81bfaac94"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "873b58e6e36d0477b941ac02abb28ff1"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "fa8d7749c9d94282d986b9c3d7e72896"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "091fd072633cf080265317a2c9fbc379"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "73eb9d5363b8fad19d4ee1de2b74cc95"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "433b260f9e015c5e00fe0a266b7796dd"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "f89c0cbb06116b88ab9180ec5c6f4381"
  },
  {
    "url": "core-fields/background.html",
    "revision": "5916e31bfa87a6072d429f9b4ddaf35f"
  },
  {
    "url": "core-fields/border.html",
    "revision": "9e901488087a8c8e239b88eeb78c8145"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "231ee8d584df7021e8465622335a7496"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "13757fccd8ffc36141a3c13fdd5a8714"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "b1f4a77bf9903f1114d04f49fe2d414e"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "c6c4e1f518d1a4abc0adc3fdffa472b0"
  },
  {
    "url": "core-fields/color.html",
    "revision": "c907fdaf97b296ce18dff2e73629cd81"
  },
  {
    "url": "core-fields/date.html",
    "revision": "f7acd80e3e75e40d6ec9bbc0058a0f0c"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "e1b63c9235f0f4f78ac6acaef8e27cc3"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "d38ce12486b69e0ae9ac24e5b2a8ba12"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "81457f245804d8e2181e1eac8145f28e"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "fb4a9cf8d6c77dd2677842cc8ac2ff6b"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "80d704a905194cf858a5835508f4764a"
  },
  {
    "url": "core-fields/index.html",
    "revision": "18ce5c861ceafd3a63ab2c315e1e92bc"
  },
  {
    "url": "core-fields/info.html",
    "revision": "53735d0ea403d35a8757b0f603922741"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "f10a148e1e50c48589c1e5482b894303"
  },
  {
    "url": "core-fields/media.html",
    "revision": "ebacbc80fb62f8b89f8103aa0c5776a7"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "8585ef6e7158308debd5be0e5a8d2ee3"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "2c377c436b4b7383ce0ab2d2ecf1baf2"
  },
  {
    "url": "core-fields/password.html",
    "revision": "89cc35dffa8cbd35f1a3ead67ade3230"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "5d128b73a568d0c5324154c68c5c90f5"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "8716fa4b1f9c77f522a6dbbce8e3b71c"
  },
  {
    "url": "core-fields/section.html",
    "revision": "ee04315cf4671d6516fab30a76779974"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "4aeed15f11a00edd3a67a19cd4e6276b"
  },
  {
    "url": "core-fields/select.html",
    "revision": "c4530283c233ab0b548f70245df22e23"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "bdbe8b9fc126be849d640f121c69d6b0"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "385f43a00697afff279dbb0a1a3f1ff1"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "0dbbd843fa808ef6e66637392d6147b0"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "e7077c277c57d561d9674d4e7bca6987"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "fd0cbc3352845b7798e144c3f70658a2"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "0cc4c41fea6268c5cbe93c5c84d350d5"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "142d545d011e2c95bdcbebce7bec1707"
  },
  {
    "url": "core-fields/text.html",
    "revision": "3420d8e0309663b9782b9ed0b1c84b30"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "d3481bd92f3bb30b6366c33749417480"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "8f01d313176fe52e9ef477ecea7b6ad1"
  },
  {
    "url": "core/index.html",
    "revision": "7fc2046af961380ab792f1256280d109"
  },
  {
    "url": "faq/index.html",
    "revision": "a2693c222c4bcbb7a9433cc65ce56b95"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "89a5dfca120fdf1b72a9aacf248d6153"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "4dd086fbecd8a186a247a6995889867e"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "47819343ac4f3b3b04a5fe436529713e"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "ef2ce21634192f048a56e5d71fe118ba"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "0bc58d97e98cc84072101bf5c0688575"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "4c07192b09e22aa73db93707747bd691"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "3ec8ecbab3d4d8055b6ef8cee21272c6"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "5aef5b84da3b5832bdf5863de3ab5c05"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "59296a3c05fd5fb529cdbb12c72b2140"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "bcd0b26a0d8fbd97a971e9d9fd396446"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "8dc541bf3ae1c52c0090859efb64b016"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "e4ead7e71d084d38f56588ae65bbc36a"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "76b33435326ff6f3dd40ae940b3b8097"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "cd71e86e2e565ba13f3536bbfee3a7b5"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "6b808eb41cddfb7004d502ae0e32404e"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "76519ba89f0664b4e4423f9aafa29fdf"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "a25b372e598bea2cfa3c5598061b556d"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "27648f24a4699fb9a2a1387b594389b2"
  },
  {
    "url": "guides/index.html",
    "revision": "0b493ac6cc2af6ec1391acfe3fe0361f"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "1291577ab2d2428a1922592b517d0d07"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "32ff11fa7109335f5cb1124ccd8c0fad"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "2cb4afbf1f8b2b5976914fcf1e2132d2"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "14737dbdab994f1872d4d1b8bb55fe62"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "83ef63e7b88eb45a7b357c60e65ceb67"
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
    "revision": "079ee0e8b29e0fd7beed2c022f586551"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "b5a5558b6d1bece5aab9457d1b26e398"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "dfdcaa900ae1f96164f25c0ff8bbd6c5"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "b021ccd206270c1680ce55d1c29e49e8"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "73e646c0699ea8c7f574239072921c39"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "1136dc31a46298cfe826d1870a22637f"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "ca5e4fb06fe8e760817f78ed5a5d9ff6"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "0b7647dd07b4443b6711c3c8f1b21902"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "bc124530649d0314fabda1d883ef2d43"
  },
  {
    "url": "premium/index.html",
    "revision": "1924693a0d758261738eb0192e60cc59"
  },
  {
    "url": "premium/js-button.html",
    "revision": "a188ccef7f1690215b6f34aa03e3d40f"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "488bd89698df944b153704389f2afcf9"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "916195a2911a32a4d4c86cba5faa7bd6"
  },
  {
    "url": "premium/repeater.html",
    "revision": "702a3ea63d8ef0a09e269a338a9c68ae"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "603f34502592a342f150494a0bbfe4f7"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "f39f54fd60f082e4e20aaaa50feaca1f"
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
