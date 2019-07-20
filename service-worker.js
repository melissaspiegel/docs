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
    "revision": "acfa21d97c8eed6e5d8048d54fcbc927"
  },
  {
    "url": "assets/css/0.styles.13ae0a18.css",
    "revision": "5e367c7c91e924ff23129e1c937595a4"
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
    "url": "assets/js/10.9dfaa6e8.js",
    "revision": "0c31fef52ee130e39302ea817bede46d"
  },
  {
    "url": "assets/js/100.fa96123a.js",
    "revision": "c02fc9f807d903cdcbdb10a897a78218"
  },
  {
    "url": "assets/js/101.f1133b14.js",
    "revision": "3db66fcd12ee429b607dfdda5d8550e0"
  },
  {
    "url": "assets/js/102.8af4a713.js",
    "revision": "d7b110bb7c0f2d4f07e6ce75f04a144b"
  },
  {
    "url": "assets/js/103.cfda2817.js",
    "revision": "8f868ba5251894a0b600793c87647bef"
  },
  {
    "url": "assets/js/104.b74dfdd0.js",
    "revision": "8dc98f37fcf9d6b28dfcd28f0816b745"
  },
  {
    "url": "assets/js/105.5c00441e.js",
    "revision": "837a3d321e29f09ef831139731e3aef0"
  },
  {
    "url": "assets/js/106.eef69f26.js",
    "revision": "b01867834a7c71ca8372d22ed1ae2d11"
  },
  {
    "url": "assets/js/11.8e132b79.js",
    "revision": "3dd3483bef524237b3999c828d4b4d8a"
  },
  {
    "url": "assets/js/12.d0854d64.js",
    "revision": "b8a6233b09d673151c43fc8fc64ea668"
  },
  {
    "url": "assets/js/13.10a108eb.js",
    "revision": "969bd783df89605c947e89857d63a5c8"
  },
  {
    "url": "assets/js/14.576d36fb.js",
    "revision": "1b0b8f1c2b9b2e2b517e3fdd0e5075ed"
  },
  {
    "url": "assets/js/15.b0788fbf.js",
    "revision": "5b11b942c1b6eec17f35c9e9d2ca2e1f"
  },
  {
    "url": "assets/js/16.3f0ad4d1.js",
    "revision": "c6c8e52dd35d3489a14820647106911f"
  },
  {
    "url": "assets/js/17.5edd0a14.js",
    "revision": "31f57c5c8b74edac2209dfeae40eb817"
  },
  {
    "url": "assets/js/18.17a9eb09.js",
    "revision": "eda2185402dd759963c57bc1a4992ee3"
  },
  {
    "url": "assets/js/19.252d3a60.js",
    "revision": "0fbba51b6055e31d89cdc74cf68c8d5b"
  },
  {
    "url": "assets/js/2.5e77bb24.js",
    "revision": "2663bc242e77ea1bca546d955995eee0"
  },
  {
    "url": "assets/js/20.d59fa6df.js",
    "revision": "51e04503475187fed3ba2ea6b1f45c97"
  },
  {
    "url": "assets/js/21.1724e7e9.js",
    "revision": "2a06ceddaec9d34c9c59176a94ea627e"
  },
  {
    "url": "assets/js/22.a59c06f7.js",
    "revision": "cb96a91f411fce4237847cf83e93baba"
  },
  {
    "url": "assets/js/23.bfc4d94d.js",
    "revision": "203b64f5aa54a5895792a2aaabe8a094"
  },
  {
    "url": "assets/js/24.583461e3.js",
    "revision": "cebea3349d451e09cf4146fc86dffc55"
  },
  {
    "url": "assets/js/25.5f0f72db.js",
    "revision": "2b9858db9f57e4a17bf77a5b02ca862c"
  },
  {
    "url": "assets/js/26.21419ce5.js",
    "revision": "5ad5fb45ceeb1e86db027807c730534e"
  },
  {
    "url": "assets/js/27.a53f422c.js",
    "revision": "02e22f6933cbad64df706dc68aecebc6"
  },
  {
    "url": "assets/js/28.0d0c6934.js",
    "revision": "94eda5463fc7ccf04165f336a8a3b64f"
  },
  {
    "url": "assets/js/29.e8a1e96b.js",
    "revision": "0bc2078d7d98f138fa1ac8e7b4fd33ba"
  },
  {
    "url": "assets/js/3.e1ac9629.js",
    "revision": "0ec5bb2acb869404d1b394a1a1aa99ff"
  },
  {
    "url": "assets/js/30.e15ce995.js",
    "revision": "db04b967692c013ab3b15802dc12d9f4"
  },
  {
    "url": "assets/js/31.ecc02aaf.js",
    "revision": "2275bcd7455ba07120182909c865a62b"
  },
  {
    "url": "assets/js/32.dd611a43.js",
    "revision": "b92c1b19da622a95c7732e7f5845ad7a"
  },
  {
    "url": "assets/js/33.7a66094f.js",
    "revision": "ba36aef4de11111f53d4ad4bfc91887a"
  },
  {
    "url": "assets/js/34.aa50303b.js",
    "revision": "fc89b83908cb3413144deca516236348"
  },
  {
    "url": "assets/js/35.556893c8.js",
    "revision": "1e76667e82c81cffee0a2dde16909562"
  },
  {
    "url": "assets/js/36.1af4eda6.js",
    "revision": "03f4a402bcbf6c8b7ba57a212bc4994f"
  },
  {
    "url": "assets/js/37.3d39665c.js",
    "revision": "ba48ba0d94e5819ef19747e8686e3e70"
  },
  {
    "url": "assets/js/38.778fc2f1.js",
    "revision": "2b495435e0dce5dc20c4d352aa1bfe52"
  },
  {
    "url": "assets/js/39.b7008f4f.js",
    "revision": "a888602e321541860c0ea9c4edf4020e"
  },
  {
    "url": "assets/js/4.d0f95c6b.js",
    "revision": "a4aa0091aeae16628daa640149032f7b"
  },
  {
    "url": "assets/js/40.c9e6673a.js",
    "revision": "d34debdc924c6f018351953ffb49c9d8"
  },
  {
    "url": "assets/js/41.5b63302f.js",
    "revision": "bf82815506fe4f3b1892c843b4783e75"
  },
  {
    "url": "assets/js/42.dd000aa1.js",
    "revision": "4b69cbe94afd7e7633b4cab7aa397dae"
  },
  {
    "url": "assets/js/43.db6d863c.js",
    "revision": "b138d4e5da60445fda849fac35defe3f"
  },
  {
    "url": "assets/js/44.25b8c9c0.js",
    "revision": "e138f0388706bdace04be8c816ef65c2"
  },
  {
    "url": "assets/js/45.0b434b0a.js",
    "revision": "f6ab0464ce98eb8f5c5d1fc00fddbdc8"
  },
  {
    "url": "assets/js/46.18272802.js",
    "revision": "05bdf5e51dbcceb43d1223242f0ee052"
  },
  {
    "url": "assets/js/47.ac3f3798.js",
    "revision": "c56df97c59ef3b88eb023f62e40637c1"
  },
  {
    "url": "assets/js/48.33b2ba5f.js",
    "revision": "2ab5625c21030be3fdbcbea91fa88623"
  },
  {
    "url": "assets/js/49.3c982264.js",
    "revision": "0faa6fced4387d6054ec04e2bddf9114"
  },
  {
    "url": "assets/js/5.f8eb4837.js",
    "revision": "4e0966c2c54bae03a0bdfc341fe85a11"
  },
  {
    "url": "assets/js/50.ae44c924.js",
    "revision": "44e89995e344c46e173174a920fe916a"
  },
  {
    "url": "assets/js/51.93369c64.js",
    "revision": "0e81b36af310e4d1df4c7f65b3d391b2"
  },
  {
    "url": "assets/js/52.b3dc9238.js",
    "revision": "81905bf09e0af2c3b1d44d59f129058b"
  },
  {
    "url": "assets/js/53.7601a20b.js",
    "revision": "e93fd16e31bd8984ba1520c5086cf3b4"
  },
  {
    "url": "assets/js/54.65ad637e.js",
    "revision": "4348397819330a91d609af5a8d0959cb"
  },
  {
    "url": "assets/js/55.f6f785e5.js",
    "revision": "ce5a917746172a9d56e3743dba8639af"
  },
  {
    "url": "assets/js/56.890767bc.js",
    "revision": "6b4901c738e561364bab19da3ececd51"
  },
  {
    "url": "assets/js/57.80979f19.js",
    "revision": "a816e71cfd25c9c6eb767b189bdccdc9"
  },
  {
    "url": "assets/js/58.b25838a1.js",
    "revision": "03d794a6e45e894a0983174ecccfb400"
  },
  {
    "url": "assets/js/59.2627ad48.js",
    "revision": "04c0e9a24d3544608912ef0fb09c214e"
  },
  {
    "url": "assets/js/6.32692dfd.js",
    "revision": "bf37199abfc7343c43bc6b4bdc89e11c"
  },
  {
    "url": "assets/js/60.041c52d2.js",
    "revision": "44c06a7bbc9685d50df8502831635e40"
  },
  {
    "url": "assets/js/61.84be74bd.js",
    "revision": "77d85731cbfbbcb46b9d9a101e94b7b2"
  },
  {
    "url": "assets/js/62.382d5094.js",
    "revision": "ea09737f337aec728924a5167c706373"
  },
  {
    "url": "assets/js/63.8afb35fb.js",
    "revision": "88aa20ba5ae33b88737aa108517031ad"
  },
  {
    "url": "assets/js/64.df21499d.js",
    "revision": "30fc912c5a5ae2a13aa20cabcffa4b4a"
  },
  {
    "url": "assets/js/65.81c6a234.js",
    "revision": "f82cf2c9a323cd85949b55843005d027"
  },
  {
    "url": "assets/js/66.1d3eb6f5.js",
    "revision": "5de45516475fac0ebaa1a852499772eb"
  },
  {
    "url": "assets/js/67.72f5d728.js",
    "revision": "f27ae5688101a44fc5dd6e276b3d6118"
  },
  {
    "url": "assets/js/68.8de23aab.js",
    "revision": "8ad95ad7b184c3fd99204127af6f6c34"
  },
  {
    "url": "assets/js/69.1017af60.js",
    "revision": "06cc704cdbfb1ac42a939587a124d607"
  },
  {
    "url": "assets/js/7.2f367b90.js",
    "revision": "e50ee7aeff84f94151d6657f94b2743c"
  },
  {
    "url": "assets/js/70.105233de.js",
    "revision": "11e58cbb50fffb9f21207ab64b326ab4"
  },
  {
    "url": "assets/js/71.a72a6716.js",
    "revision": "f80430d0ab7bc1101abef1b4acaa09d3"
  },
  {
    "url": "assets/js/72.d20d0e6e.js",
    "revision": "2a82634aa480bad8aa93e87442ccbab1"
  },
  {
    "url": "assets/js/73.06b8ad7d.js",
    "revision": "784efaf3533064b76deb17c877085811"
  },
  {
    "url": "assets/js/74.b3efaf8a.js",
    "revision": "5be90b9cb500b5c594f5c9e010bc9ceb"
  },
  {
    "url": "assets/js/75.2469b2b9.js",
    "revision": "f503fb3445c0eb54f1bef90a0a29469c"
  },
  {
    "url": "assets/js/76.b0627005.js",
    "revision": "45fd96f5d9199940b13d5010b7b7487a"
  },
  {
    "url": "assets/js/77.385390c4.js",
    "revision": "5f475a005b72f09a733ce83fafcee83a"
  },
  {
    "url": "assets/js/78.00c03eb3.js",
    "revision": "0446ec738967650aff7f529649058cbd"
  },
  {
    "url": "assets/js/79.ddec3b90.js",
    "revision": "96b80aed11f2eb17ffe447140f3672de"
  },
  {
    "url": "assets/js/8.d5c51527.js",
    "revision": "7d4eb1d285fd7be3df88c2a6043193af"
  },
  {
    "url": "assets/js/80.2cf558e2.js",
    "revision": "1f2b018327128dfca631168920ae9c90"
  },
  {
    "url": "assets/js/81.5f3bf74c.js",
    "revision": "aa5bc051648924a2dc3ddaed9348f38f"
  },
  {
    "url": "assets/js/82.883edea9.js",
    "revision": "84bb11d0a74b4d4bf5da85f7ad32c6d1"
  },
  {
    "url": "assets/js/83.71aff42b.js",
    "revision": "c32e9a5d1dc004183d0e9d5a89a24a4e"
  },
  {
    "url": "assets/js/84.a480f204.js",
    "revision": "3a45a7a438f9da0c7f519a6722edfd00"
  },
  {
    "url": "assets/js/85.42500e2a.js",
    "revision": "e2546e9f8b902151a3b28eb36cf481e7"
  },
  {
    "url": "assets/js/86.57abb854.js",
    "revision": "32089c951e0ea9a1605a4a494c43aca4"
  },
  {
    "url": "assets/js/87.65c27da8.js",
    "revision": "28cc8b5c5991fe95db4cc80ff9f7ef77"
  },
  {
    "url": "assets/js/88.bf1b48eb.js",
    "revision": "073507e9dd37da8755d3c5ac7bd2c325"
  },
  {
    "url": "assets/js/89.b2b5e747.js",
    "revision": "b94e6a468636dd1583c42c90e0043539"
  },
  {
    "url": "assets/js/9.dad22bf5.js",
    "revision": "cda3b53eca06e7f2d91fb497860da8fc"
  },
  {
    "url": "assets/js/90.d5d8a8ab.js",
    "revision": "b43811054296095431a8c5f2f1763346"
  },
  {
    "url": "assets/js/91.389ca21c.js",
    "revision": "7906ccd5b386dbc03dd253958e83c63f"
  },
  {
    "url": "assets/js/92.e44c8426.js",
    "revision": "23699c8e63c4dcddf17a5c3f00c01a60"
  },
  {
    "url": "assets/js/93.9f62326d.js",
    "revision": "33c9208616c4cbf5883100cd698eeb83"
  },
  {
    "url": "assets/js/94.9ddc61e1.js",
    "revision": "ac285117d9fc623dc8e92a65815e352d"
  },
  {
    "url": "assets/js/95.cf92a112.js",
    "revision": "c7c3c0e307746fd99d0ca54af16602df"
  },
  {
    "url": "assets/js/96.804439b6.js",
    "revision": "2c0666c0c701e52eabc395db31a1abd8"
  },
  {
    "url": "assets/js/97.8239e6b9.js",
    "revision": "37d1ee64cabaefb728f9dd3087ae6188"
  },
  {
    "url": "assets/js/98.fecae657.js",
    "revision": "23fa1bd82966f97d8ddb23deb3470664"
  },
  {
    "url": "assets/js/99.296e9382.js",
    "revision": "41df1666dc06adc3053e4289ed20046f"
  },
  {
    "url": "assets/js/app.4c43095c.js",
    "revision": "c9d0785fb330a8d9c8ecf98146b0994e"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "7829f82094c1c26a27ae0c2859898fe0"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "6f6b6016c68821284d8b5a7a5dd07f47"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "f5c707382eee8c3505c9983bd24b9c64"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "139efa39bdf225ed98e0a1eed855a762"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "896b26a9ee4b5350f0b0191f22fe5d0b"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "b032ab8dcdbc4f709a7e1ab0c636dbbb"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "adf321deab2203e8c66868b741f7c3b8"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "1754c04f757d6f7248a49b8723307a29"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "a5fa5fca24c3d4143aee8383ab97cdad"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "eb84a17ac28725d80445621447d1d43d"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "4056bb22a7e5b14935aa148b716dc171"
  },
  {
    "url": "configuration/index.html",
    "revision": "244089eae71d2e1ffe9577f83867fe40"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "c7726b4591a053b4e90a7ae794ceabc8"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "f4155dc5dc363ff810dc95b506dfe647"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "2ed4ad8b7d42f10c77c0dd14f92b0eed"
  },
  {
    "url": "contributing.html",
    "revision": "79caec7e9eb244a60598f4f74d7c75b9"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "bf602bcc9b087400b1287391a3e9c733"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "c39924d07b55df47c5f8b9f387b3f743"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "3bf94bb54f7306bb707c86a79e067f6b"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "93f6f7a7954af9a83b8ccc57caafeeb5"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "3a424b908406d2d86862c58025320602"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "e0b86504ea8455c29542cb366b72dc74"
  },
  {
    "url": "core-fields/background.html",
    "revision": "eef582b985a28021ad09e0213bb393cb"
  },
  {
    "url": "core-fields/border.html",
    "revision": "3f1d4f2791b72a6507312515726607a6"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "6ad0a974b975576a844a2bd79509fef9"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "93b631b65aa9a57697e6d087aec824d2"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "466d592afc7041449d6b0877b4886922"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "88df14acaca0f6c20e04d65da2ab2ed4"
  },
  {
    "url": "core-fields/color.html",
    "revision": "c39db9eab9f54fd327055e04975fc2d2"
  },
  {
    "url": "core-fields/date.html",
    "revision": "985f715dbdd9892a6b8cc44958982208"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "311242303fae5cf971ff9fcd1d8a3eaf"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "12cf4999c16049d224e9dc455e07879e"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "f164eb194c8d3618f964552b3f200afb"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "397acfd1556645f9fd503a7926725382"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "7fe6b501110f5a71d1a306e798145c02"
  },
  {
    "url": "core-fields/index.html",
    "revision": "baa1902ab3dd49c95d70008692e5778d"
  },
  {
    "url": "core-fields/info.html",
    "revision": "4783739549fed87a95ff8d791a5d659f"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "b1f72af2727315ba7a100d8ccff10aea"
  },
  {
    "url": "core-fields/media.html",
    "revision": "0c4a6c9b6af186dcb5a4ad8759925fc8"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "cc700a6911fec5d5797810f0a421ec1b"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "706554642ec292add413b23df3a8635e"
  },
  {
    "url": "core-fields/password.html",
    "revision": "eac81d81d0663ca8600bdc3070471b30"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "eda883ac386b6756f832bb848d3ddd17"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "8c566a410a96b5ef36d8c6761fa6692f"
  },
  {
    "url": "core-fields/section.html",
    "revision": "ed804193bf0633faea2ef3e6cabd0f4d"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "128bcb1bf899fec623210ff56f02037c"
  },
  {
    "url": "core-fields/select.html",
    "revision": "a5cbf3b5ff96e5247b1e5ec7744cbba5"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "1d7ca1a4417bc55e3c6133c9a5e30f91"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "bc7f34e846c9a38fb1a19af0c6aa33ec"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "80e963fbd3d42ed048fc0c2d206e09cd"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "a771c3e65ffa6228c8b5b37a41c886b1"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "a14529cddd2231293c16ca5a40161406"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "49afed09143335bee6e9a71370c55d72"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "dcae0a81f58fd0875b74beda0c9675e5"
  },
  {
    "url": "core-fields/text.html",
    "revision": "3487985c8ecc75d87719c2758e636d7f"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "88f46183ba7d6b6f6a0f27eaeab9fa66"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "4ef755e95a728f10ca844437742e6f63"
  },
  {
    "url": "core/index.html",
    "revision": "b397961e7a2b32566a313ecb264cab8b"
  },
  {
    "url": "faq/index.html",
    "revision": "56186f94be8fba75031dbfda9e6ca4a0"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "e9a8f75e144f31953d767086e4f8233b"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "55f0853273346749a97a5ce6996e5530"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "27e5590e68463bd6cc3c984ea94edbf2"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "910d98c0cd037b58d350aadb1c4923a4"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "c9896b29331910559d487c3a9798913e"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "103d27f29c8a2ee81cab4bad60e2e8e5"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "320db3c1d3873867e1fc1cd999f10710"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "1019139b5412ec0f350e4d76e4323f91"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "d710d8959dc10eebf22ea79c4bea3a69"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "1a81a096c3e7755ac6378934bcec29ea"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "1122e4ab99294231d93848c84afa527a"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "f5808d4d35247c763ae71123026b2b09"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "bb8832aa2b9ec4773f7a46abcac0f0b9"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "d632d717b36e54377e47206bf0e64657"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "ff52f5416250cf05e6d9fed6ba718ee7"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "9bb6ba5704e21766c5a13ba5e3da4730"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "99f9b6f9619725ad462e905570c7a5be"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "f60998253794723b36534818a6625993"
  },
  {
    "url": "guides/index.html",
    "revision": "2e54bf3adbf1355007d550ceae2e25fc"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "7c384196e60d9e54cb9d33f6f46cc7b7"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "1f11d7ba25e42e72871f2354d8633dd0"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "d5b50ab1f39dcb7256d6b52c614fd646"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "bfbcd18dff218037530e10814cdaf013"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "14fc051ee74bd25abf0fccb44b3e1970"
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
    "revision": "92ade6cfee7962b9581b517b491f1674"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "67707600733a5dfa192fc23c73a5cbf4"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "46f49cef5a162dd535e8328a066a58d5"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "38ed93069f52e50fdaca8eb81331d5a6"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "99f523e17273e637ac4be5b3050ec4b2"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "6a834fd4135003714c95efeed4055256"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "5db8a6768bb35619b893a9245352a5a0"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "08920b6e638ea609d2ef4a8970710f02"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "81658700aa404b585e7d3b440b7f793c"
  },
  {
    "url": "premium/index.html",
    "revision": "b0139b0cf003d5242459c79f055ea7cc"
  },
  {
    "url": "premium/js-button.html",
    "revision": "d64346c446cae19fbf0a5a880456c90e"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "7775372416a09a0bbdcf56534f1695b9"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "c1d376fc19a4db82be1bab856b39f699"
  },
  {
    "url": "premium/repeater.html",
    "revision": "7fda0dcf4ca06c71ff6e3a74d8517a5e"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "ff4c51f1e8c2c835c583053d81cbef1e"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "cf3135793cf90fe9f78c2360223969b0"
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
