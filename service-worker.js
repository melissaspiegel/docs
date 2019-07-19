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
    "revision": "baa035447307505cf39cc0d193a596bc"
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
    "url": "assets/js/100.b38a1d14.js",
    "revision": "441cc68f2de4541bc6be477b1e0fd3ba"
  },
  {
    "url": "assets/js/101.e0609f12.js",
    "revision": "72bfb896e1b0288ae879de4da9c40ebb"
  },
  {
    "url": "assets/js/102.1822bd51.js",
    "revision": "2c5880f61f30cae0e95c620eecb9a666"
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
    "url": "assets/js/105.f87ee9a4.js",
    "revision": "9a86adf2f0608ccc7a6af8586608c9f2"
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
    "url": "assets/js/14.d8022944.js",
    "revision": "e53032a3338c7fa196c262ae044b1ec4"
  },
  {
    "url": "assets/js/15.41951be9.js",
    "revision": "01a7a6bc0de6a608233f0c398b80e173"
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
    "url": "assets/js/18.a7a9635e.js",
    "revision": "96066159c33be6166a7d08adc6ec13a5"
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
    "url": "assets/js/20.f4da414f.js",
    "revision": "cad6011fb91e1a2eff0e824e3ded5a60"
  },
  {
    "url": "assets/js/21.f636eda9.js",
    "revision": "1a90f08583310974073c4f03d820a246"
  },
  {
    "url": "assets/js/22.ab0eb005.js",
    "revision": "8098aa8208ae98d686456ee400b0236b"
  },
  {
    "url": "assets/js/23.861fce91.js",
    "revision": "6027fdfca0a7a430191e0b7b6ccca492"
  },
  {
    "url": "assets/js/24.583461e3.js",
    "revision": "cebea3349d451e09cf4146fc86dffc55"
  },
  {
    "url": "assets/js/25.036cbba3.js",
    "revision": "4732379c45a17b8a9c421b6fea93a1e1"
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
    "url": "assets/js/29.e4dc07f6.js",
    "revision": "6229ad9f83a3d20629f62c906c2ef18b"
  },
  {
    "url": "assets/js/3.e1ac9629.js",
    "revision": "0ec5bb2acb869404d1b394a1a1aa99ff"
  },
  {
    "url": "assets/js/30.068d4d8a.js",
    "revision": "433fe07f88c716f8096853759a35c755"
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
    "url": "assets/js/35.9b0a2a05.js",
    "revision": "f0c915828cf2151285d86d7006087ed1"
  },
  {
    "url": "assets/js/36.11876773.js",
    "revision": "79c689ac00c167fa1a7abc448ab1cf59"
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
    "url": "assets/js/39.0ed462f1.js",
    "revision": "188b0239ed616ed31750e92e31bdb1b5"
  },
  {
    "url": "assets/js/4.d0f95c6b.js",
    "revision": "a4aa0091aeae16628daa640149032f7b"
  },
  {
    "url": "assets/js/40.d5730c76.js",
    "revision": "f3b14408e2fd393aa18557711f499e9d"
  },
  {
    "url": "assets/js/41.79e78e63.js",
    "revision": "c83ef528dc76b01181ab119259a2b8ce"
  },
  {
    "url": "assets/js/42.9d806482.js",
    "revision": "9f7ff1136c59da7c46dac78d3d5485c7"
  },
  {
    "url": "assets/js/43.7e6045c5.js",
    "revision": "4ec0f734c7b8fdff909056fe36d8c3d0"
  },
  {
    "url": "assets/js/44.b5255019.js",
    "revision": "ce94dc06e1e7e67c4c85feeab3b3d099"
  },
  {
    "url": "assets/js/45.60244da0.js",
    "revision": "ef30c7457d33c3f264e96b8f527c3c47"
  },
  {
    "url": "assets/js/46.65d5f48c.js",
    "revision": "f81ec2bc7313e96a4452470b89c3531e"
  },
  {
    "url": "assets/js/47.670883ce.js",
    "revision": "eb9d48170e45dd9a022246c0cf70d4f3"
  },
  {
    "url": "assets/js/48.2a6c0aeb.js",
    "revision": "0c7b727cf4c79e5328e10981a7da2470"
  },
  {
    "url": "assets/js/49.413fadbd.js",
    "revision": "0541b2ec98c23c80082be2de86343a8f"
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
    "url": "assets/js/51.1c9fc179.js",
    "revision": "af883d4a87e6352a2cf3585dde024084"
  },
  {
    "url": "assets/js/52.5fa3fbc8.js",
    "revision": "93b4082e5c1f3d78c6f3b061cfdd2bfd"
  },
  {
    "url": "assets/js/53.7601a20b.js",
    "revision": "e93fd16e31bd8984ba1520c5086cf3b4"
  },
  {
    "url": "assets/js/54.7cb9471d.js",
    "revision": "c37d329a3305478ea64329b033473a92"
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
    "url": "assets/js/7.02af3637.js",
    "revision": "d60a6976bf55a5e66ab9133a011afd6e"
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
    "url": "assets/js/72.60e50c9c.js",
    "revision": "4504c8fc30e477291f8df9c1ea2c3659"
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
    "url": "assets/js/75.d3cf31cc.js",
    "revision": "019497fee6b4b69c0435ad2117131f3f"
  },
  {
    "url": "assets/js/76.16569d6f.js",
    "revision": "42335695bb8350e183c301a7b89ca80b"
  },
  {
    "url": "assets/js/77.91d525ef.js",
    "revision": "020564e20d76c901cd8fe8eac6d8b58a"
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
    "url": "assets/js/86.60096141.js",
    "revision": "92071cbc895cf83ec795ea0b864d97df"
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
    "url": "assets/js/app.edb796c7.js",
    "revision": "0b5a0e5c0abd286a6ac0f059572b1465"
  },
  {
    "url": "configuration/arguments/arguments_reference.html",
    "revision": "1d1a8a8f5a7c27188599bd1b32e6a8f4"
  },
  {
    "url": "configuration/arguments/attributes.html",
    "revision": "b4be49605023b751936b8a316b1b7924"
  },
  {
    "url": "configuration/arguments/compiler.html",
    "revision": "4689670d22d4f193b3ddf160f66af1fd"
  },
  {
    "url": "configuration/arguments/data.html",
    "revision": "5fabd8c4e68d1e5d4ff742eaed6bac65"
  },
  {
    "url": "configuration/arguments/hints.html",
    "revision": "68cfc8e5a1b3f01eee163abf16a227bd"
  },
  {
    "url": "configuration/arguments/output.html",
    "revision": "ed2ebf7edc22806ea1653db41ac33994"
  },
  {
    "url": "configuration/arguments/permissions.html",
    "revision": "980c8e539c3a2c34af6aaabdbbf6d76e"
  },
  {
    "url": "configuration/arguments/required.html",
    "revision": "5fc4f271601e1cb6270022fa6b0ca368"
  },
  {
    "url": "configuration/arguments/validate.html",
    "revision": "34844fc779c6bc4b395b975fe37fbb0a"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "a22223b6e46b2929696825582723e2f6"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "83f8c32460d2fd20bcd4607a887297e4"
  },
  {
    "url": "configuration/index.html",
    "revision": "0943e47e6abf6528a1e1e9beebe9058e"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "f6b4da8b5eb0e460bb4eba16bbf7c33b"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "e4d12b005ba910053e3d696091c63e6c"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "b6021121b1ed8e06f9c929eaae91ef5d"
  },
  {
    "url": "contributing.html",
    "revision": "0290ec7b1296c278c59ec7b8a4867655"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "cd0460eec72c9ef1e5ed762ab42880e9"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "8fb91f21572402df7d85c57701735fc2"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "718485c452835c63ccae731d7426eaaa"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "329ea37c746c9f32948ebe4241318959"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "debd80d37428fd9463dd4e1bb62c17fe"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "e13739e7ac3732bbae319cef39369c5d"
  },
  {
    "url": "core-fields/background.html",
    "revision": "4bcb99ae69ff4d4bf237d124f1c1e22a"
  },
  {
    "url": "core-fields/border.html",
    "revision": "4a94e06265bb02bcd49de589cbd5ce05"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "21de56b8de91de506eb418414b13a3e0"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "d11cd4804580b087631d10674c90462d"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "27dcb84bb5800cab49f4e16637904e27"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "ea889e9527b878d8df14ee72421d0743"
  },
  {
    "url": "core-fields/color.html",
    "revision": "d9db273df9120507801d9dd8ef724d86"
  },
  {
    "url": "core-fields/date.html",
    "revision": "e00806ccf672ad16663e550a5ddb4059"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "112fc2d12ef5f03cc63b62ec553abc85"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "2ff180e057f7d5271e69942c375d3c3c"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "5b27517cdfa865ae8abecade34b52058"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "0bcc925c7a16a8b13837d7ec7897af16"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "53306a8f0035d20b327884ba5385f800"
  },
  {
    "url": "core-fields/index.html",
    "revision": "dd63fe20eec5c32d16100c650da70593"
  },
  {
    "url": "core-fields/info.html",
    "revision": "d98f14fe2960338ae70e9bd093defe7c"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "787967a4278ba056c0808a1e53f10bff"
  },
  {
    "url": "core-fields/media.html",
    "revision": "04e4d4d7ab9eb3ec780d08f2dec075fd"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "49cbd33abcdb399225c8d87877cb5d72"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "ef0cb0b990a06253476ba70e5b7b4035"
  },
  {
    "url": "core-fields/password.html",
    "revision": "f798bd12a094b5be5301fae866232ab8"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "e0ce696ef295211df605b1777fa10cac"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "8da675c78aac4c96c4d9583fc4769978"
  },
  {
    "url": "core-fields/section.html",
    "revision": "fbd68c6e290eb081f3f03c0eb1ccd51c"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "e784b31e7d49c1c84496c39485a7ca68"
  },
  {
    "url": "core-fields/select.html",
    "revision": "5bd798c5a2b15a69ea24b31e8744c6c2"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "d75781e3fd3c56223ec117c32fd8b9aa"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "92b20f68807cc0972cd61637abfb2113"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "ad324d99d7606257b2e6d0e474c08306"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "07a0dc16916b2beef434c1825271ba56"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "4f9b5a14afb60be0837da159f0094d52"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "869e692f1470b372fb839274896bb694"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "257932b0999b7ad473a8eeb289281aea"
  },
  {
    "url": "core-fields/text.html",
    "revision": "44efb388674b16eb1b770dc44833d2bb"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "cfecbbb5fe1edb2419aab9ba8c0f47c9"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "18f54e100bf89c656a8bca58aa9028f6"
  },
  {
    "url": "core/index.html",
    "revision": "07c6d16ab425c82ab99fce6bc2bd3a1f"
  },
  {
    "url": "faq/index.html",
    "revision": "9d8a699394060b6a98fce0ffb091c19b"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "aad6bb9e517bd0fe29a49fd5b302a868"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "e5c86927997fb384e908a91b6239db5b"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "51c337d863c3c8303daa88f7601ed2a9"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "4c85b08a0d033a907c8c2caaf8ea5ab6"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "e193be1c73cdfc9b0791fe0e5b39b8eb"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "110de99ca20e3ee787c89db1fdb9096e"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "6b87846e68f2c8a80ca8d507b139884a"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "b3f8779723b96b20a9d201e76f5823a0"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "c77dbbe0b4af44687086b4e8eee5f422"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "c65568597dfb03962e20afea7643453b"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "2c829fc7a0b18990b5aa8c477983c63d"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "93cfc444795042d0f1bdb9a9442f1d71"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "0970aa875b4e171eb3dc51b1f70d69d0"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "84a2861c33aebaab4023224272e6971b"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "39a15590f07fcd2f78fef0af7b84eea5"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "23a6c6617913bbf21117986c7c5c684e"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "eb17f06992b5f12542fda8bf7f6369b6"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "c10060bf42e57896da66eea0d0100a28"
  },
  {
    "url": "guides/index.html",
    "revision": "42de33242555dc8e2be6ebabb8d2f231"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "67f52e8d9a2d9054f243240224fe043e"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "fe88d46c51912121db55fa73c035e4b6"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "86d382c42f0cd2bd6f4fb08703308063"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "f48617135d4a6f5c3c08e4db3d1e2a56"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "1c8d49d60e043972a4f22d2555ab6098"
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
    "revision": "41aef4ba643b49e2925047833f59258b"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "b4f7c0eb394d3a4041b235789c0a65b1"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "7ad7d985f8ee2cccae9d4bc1faa98316"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "f710ab31c6c5a159ca723f710ffe2dcb"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "2847fa6ed89ee53a1ec52a4af3e56f9f"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "874eb85ff621074649c989e1a42068ec"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "50c3bb832d8cb5f19bd1d6b52dd957da"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "59588c50b82b2ebd124afafe09e3fbbd"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "22c29e2a3852db268e905713904dca2f"
  },
  {
    "url": "premium/index.html",
    "revision": "105d98e9742ce0c3bdbb580fc28da05d"
  },
  {
    "url": "premium/js-button.html",
    "revision": "0868a1310eda954c3cc09ad0b3b13c69"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "eef9eae0a7980f37edeed2621c173d19"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "c920e7230d0b09fc58434c416698f959"
  },
  {
    "url": "premium/repeater.html",
    "revision": "ea6e4c5af27588bc4e5e55d9cca78159"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "5d47a4b0ff8c17ec85f887ab779c5d5b"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "b34d172a3c58c9513dcad95f48e1734a"
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
