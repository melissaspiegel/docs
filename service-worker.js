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
    "revision": "064ad3ec2735c0e20945fd543bb21a67"
  },
  {
    "url": "assets/css/0.styles.325aa0e4.css",
    "revision": "288ac7668e0592d745b0cd4920382dc8"
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
    "url": "assets/js/10.a8fd3693.js",
    "revision": "14f4646fa53566c398a6000dd4269958"
  },
  {
    "url": "assets/js/100.600ab5c6.js",
    "revision": "afc750b85ed88f7e5b4ecd1bbbd2612f"
  },
  {
    "url": "assets/js/101.af8fd8fd.js",
    "revision": "8a1cdda197809d0424b5fd38c0a1f486"
  },
  {
    "url": "assets/js/102.9471edb9.js",
    "revision": "c0f9f214056223aa1c74133266c288fd"
  },
  {
    "url": "assets/js/103.33c6bff2.js",
    "revision": "6384b5a0cdd8e455752daac12b8b9e03"
  },
  {
    "url": "assets/js/104.86a704a4.js",
    "revision": "c945264be1dfd8f5104b12c7ab11726e"
  },
  {
    "url": "assets/js/105.1735c175.js",
    "revision": "4d81602c54b63ab4af499c0ca6e0a32c"
  },
  {
    "url": "assets/js/106.779455dd.js",
    "revision": "fe6dfcb6be32cad49a6508f647f58979"
  },
  {
    "url": "assets/js/107.b01ffae4.js",
    "revision": "bbb7d118f69ac5ba31069afe47ad1ec4"
  },
  {
    "url": "assets/js/11.481ae3ce.js",
    "revision": "97b286b0e560e55c32da8f14f3ac90f1"
  },
  {
    "url": "assets/js/12.211b504a.js",
    "revision": "9da5a74706693ac04b3ea1fe3e127f02"
  },
  {
    "url": "assets/js/13.4245d605.js",
    "revision": "89174a82a44cfa980ee79d3ac16c1fd9"
  },
  {
    "url": "assets/js/14.656854ba.js",
    "revision": "437c7fe79290faf5daacae24470a858a"
  },
  {
    "url": "assets/js/15.2ae4d285.js",
    "revision": "3c0e6b4dd5dcb3d6826841daca677f1e"
  },
  {
    "url": "assets/js/16.c3be9006.js",
    "revision": "21eed4dacdb6910863f64ab4e448f90f"
  },
  {
    "url": "assets/js/17.e26e3444.js",
    "revision": "25055e94a2d5c9bbcb49b8b582ba463c"
  },
  {
    "url": "assets/js/18.8bcb1c6e.js",
    "revision": "835548510775a0d4c4335b304d96045d"
  },
  {
    "url": "assets/js/19.a3619ea5.js",
    "revision": "984736003270ba859ba1179fc93c78a6"
  },
  {
    "url": "assets/js/2.aeb4c908.js",
    "revision": "e64ec4bb01cac75ee32256dd9daed2b2"
  },
  {
    "url": "assets/js/20.3c64448c.js",
    "revision": "ff31ecec3da739ad105aebf89aeb0e61"
  },
  {
    "url": "assets/js/21.d1fef1c2.js",
    "revision": "ec045f66972f4ea1df600cf39568fc93"
  },
  {
    "url": "assets/js/22.d3c2f219.js",
    "revision": "395285ee3f47b387f54acba5c1b67e6c"
  },
  {
    "url": "assets/js/23.88f3fc1f.js",
    "revision": "f47a3f73b6033aa77a466916e0e22717"
  },
  {
    "url": "assets/js/24.a2b4b4b9.js",
    "revision": "3ea7605b59797b72ea4cbe75ff5a0817"
  },
  {
    "url": "assets/js/25.1f9dd8e1.js",
    "revision": "ad07dad885fecd24765977922240aeb2"
  },
  {
    "url": "assets/js/26.814381d5.js",
    "revision": "dcfaaf7278f71dc9010aa113c5527482"
  },
  {
    "url": "assets/js/27.2ce0aed4.js",
    "revision": "2a909c5543d659a562e1d7be82f43db8"
  },
  {
    "url": "assets/js/28.04da8ffa.js",
    "revision": "8877c80938ac5aee0f5e53c36e96671d"
  },
  {
    "url": "assets/js/29.6d94c29c.js",
    "revision": "3c24f87c484487d319ac7663d060dba4"
  },
  {
    "url": "assets/js/3.20855875.js",
    "revision": "2602a4ae66c80924158593b188ba3b1b"
  },
  {
    "url": "assets/js/30.5c569716.js",
    "revision": "60be332d15888d5d9ef09ddcfcd331da"
  },
  {
    "url": "assets/js/31.0ba43ea0.js",
    "revision": "0540678add88647cdb4de52bcf435f47"
  },
  {
    "url": "assets/js/32.ec0450d3.js",
    "revision": "a2f9f83732a53bbc3bb0c57203f92a37"
  },
  {
    "url": "assets/js/33.10ee1f40.js",
    "revision": "e89fd79d1f4f6f9dd78392ec700ee824"
  },
  {
    "url": "assets/js/34.1b0fbb38.js",
    "revision": "5fe963fb9c5bb52d623c2dbeb16b332c"
  },
  {
    "url": "assets/js/35.6227e161.js",
    "revision": "8f8dad5bfd4d3ea8c7b6ec83098b4085"
  },
  {
    "url": "assets/js/36.cfd335d4.js",
    "revision": "a5025027ce3d7105032f23144bdc935d"
  },
  {
    "url": "assets/js/37.d3210d63.js",
    "revision": "9b7044ab4e842e93f1ca06b88561811d"
  },
  {
    "url": "assets/js/38.ccbb1c47.js",
    "revision": "66ff1e3046ed9504ec2a7be555247f11"
  },
  {
    "url": "assets/js/39.72bc3635.js",
    "revision": "7a0b9819d51fccd53b5f78b1028cc100"
  },
  {
    "url": "assets/js/4.55bc8b22.js",
    "revision": "7c98b1b298de7355252e5573eec65850"
  },
  {
    "url": "assets/js/40.8ab7966c.js",
    "revision": "21b57f2f2366ee084c2edd8c3568e62c"
  },
  {
    "url": "assets/js/41.4d16a1e8.js",
    "revision": "56dfcb96bded2808716274f7140d79e4"
  },
  {
    "url": "assets/js/42.a1e2c159.js",
    "revision": "5fcf44b75ca4acf723b3f5efc0550a88"
  },
  {
    "url": "assets/js/43.cd5ba0a4.js",
    "revision": "9926ac5d50ae957ef6a2da62093f8221"
  },
  {
    "url": "assets/js/44.bdf45932.js",
    "revision": "f70c0aea446c4abd30232840b188bf93"
  },
  {
    "url": "assets/js/45.da3fac4f.js",
    "revision": "8d0e5b89320d7c0b4357ed8abe674f2c"
  },
  {
    "url": "assets/js/46.8a6bbaf3.js",
    "revision": "ff043abbf8ff5785ab2b5f14e5f01384"
  },
  {
    "url": "assets/js/47.3c59919e.js",
    "revision": "7a6736cc8507df45ee6c1116ee6a1606"
  },
  {
    "url": "assets/js/48.fc1a2e06.js",
    "revision": "6c2efc1276ba0c9cd6dce418a3cd9f80"
  },
  {
    "url": "assets/js/49.51a5aee7.js",
    "revision": "68a8edcf820d667b978f7a0736486d9f"
  },
  {
    "url": "assets/js/5.88390d12.js",
    "revision": "ba61b078e142b5c2488c01ebb2aa79ce"
  },
  {
    "url": "assets/js/50.2a938364.js",
    "revision": "60adde943ec587e19cb5b3c7931b81f2"
  },
  {
    "url": "assets/js/51.d4413e8b.js",
    "revision": "455c46599b35624d1167fd4a1d4fed8a"
  },
  {
    "url": "assets/js/52.65cb68a8.js",
    "revision": "b85d6df16b89bd51f8c40dbe47a250bd"
  },
  {
    "url": "assets/js/53.62eaf9e0.js",
    "revision": "75f05b65828b9fe2c3612ecbc6734a60"
  },
  {
    "url": "assets/js/54.a5749c08.js",
    "revision": "b22dc078eb0795ecaef1523de385e203"
  },
  {
    "url": "assets/js/55.c2248eaa.js",
    "revision": "a5d968b9c928f419a4b9d7bfba712d81"
  },
  {
    "url": "assets/js/56.7d0f6c1e.js",
    "revision": "2b587f59d1db5049c4bc4c923a708e1b"
  },
  {
    "url": "assets/js/57.4c139780.js",
    "revision": "a8ffc1fb35b64311f1a08185be2ba10d"
  },
  {
    "url": "assets/js/58.35509e02.js",
    "revision": "0893ef58340077dd79dd395bc503f006"
  },
  {
    "url": "assets/js/59.efc81a1e.js",
    "revision": "5575f4e44abed41a95eeecff9f44784f"
  },
  {
    "url": "assets/js/6.7f8b9ed9.js",
    "revision": "43cd5a8468eb92534ba4a8e56a890579"
  },
  {
    "url": "assets/js/60.d98b6687.js",
    "revision": "e7ee7fd11fa83dbd2de5548cf5fbde27"
  },
  {
    "url": "assets/js/61.52a23f39.js",
    "revision": "560d82c501a1dece62128fab6a43dab4"
  },
  {
    "url": "assets/js/62.e747be23.js",
    "revision": "f989188cef2a654c86f2380930841507"
  },
  {
    "url": "assets/js/63.48ca476f.js",
    "revision": "905393dea4d50e9e8da4ac9568f610eb"
  },
  {
    "url": "assets/js/64.c5ad68fd.js",
    "revision": "b70d5267a53344ac366048cac17c0fd1"
  },
  {
    "url": "assets/js/65.c3c3b2a8.js",
    "revision": "06394a7f2277c903467e7c375cb84a88"
  },
  {
    "url": "assets/js/66.c893a70f.js",
    "revision": "629bf2a9f175be99051ea2ca1ca8dfc1"
  },
  {
    "url": "assets/js/67.a2647451.js",
    "revision": "e2246b6dbb55d3d326a6b819fda6b5bf"
  },
  {
    "url": "assets/js/68.40151f23.js",
    "revision": "10cbc8d243ccca788dfb894b17fdc561"
  },
  {
    "url": "assets/js/69.f1240010.js",
    "revision": "6354df57c67900ee8bc40306751eec41"
  },
  {
    "url": "assets/js/7.7448a1e2.js",
    "revision": "d93eba37d6c56282e9c51de61ccfaa58"
  },
  {
    "url": "assets/js/70.47bbc09f.js",
    "revision": "3b8a918aa66a889f20fb7b9fac7745dd"
  },
  {
    "url": "assets/js/71.6663cd1e.js",
    "revision": "600d0a32a127f9aaf338b1e013782e58"
  },
  {
    "url": "assets/js/72.feae07a6.js",
    "revision": "7853e3ffb3b52097cac1fb10c4aa6d6c"
  },
  {
    "url": "assets/js/73.f528a16b.js",
    "revision": "ad7bffe450bb99201536c75d85d25b59"
  },
  {
    "url": "assets/js/74.b4c233b5.js",
    "revision": "1a53bd61dde371fbd4badd59c24b0af8"
  },
  {
    "url": "assets/js/75.722d3de0.js",
    "revision": "0794c7eda648c392f1084785d7d3ccc7"
  },
  {
    "url": "assets/js/76.d66a5c6d.js",
    "revision": "42591bcf398387c22c2fa2aef744132a"
  },
  {
    "url": "assets/js/77.addab1bd.js",
    "revision": "9f1e3193e3553f8c6c0ebaaa6ad04cd7"
  },
  {
    "url": "assets/js/78.fd936d9d.js",
    "revision": "d684d93c6e33bcc5b251ddf958c476df"
  },
  {
    "url": "assets/js/79.d2d8a6c9.js",
    "revision": "106aaa0e39012cff6da7b6093ae72d95"
  },
  {
    "url": "assets/js/8.7a67cb5e.js",
    "revision": "cdbd82a4bfaecb82b166097075102cd7"
  },
  {
    "url": "assets/js/80.ef42bdd1.js",
    "revision": "f02a3b6350e18539d41c69b5cd3651bb"
  },
  {
    "url": "assets/js/81.d821b192.js",
    "revision": "d7799b8677ea2454a765e0b8c9d5c629"
  },
  {
    "url": "assets/js/82.54abf510.js",
    "revision": "5b950163f1935b5cf4f963718bfe55f3"
  },
  {
    "url": "assets/js/83.71c5082c.js",
    "revision": "1861626d7c8e7396899fcacc8192a0ae"
  },
  {
    "url": "assets/js/84.492b97ed.js",
    "revision": "a9e52c2d9b6c06aca7b826f71300e17b"
  },
  {
    "url": "assets/js/85.77173134.js",
    "revision": "1d4291cf8a64c78e83c4a0b18dbb83e6"
  },
  {
    "url": "assets/js/86.574441c1.js",
    "revision": "a474804ead6a4faa0f4ef2530769e6b7"
  },
  {
    "url": "assets/js/87.8c475a6c.js",
    "revision": "5026b7492a8ebf96cff49a9c13b454b1"
  },
  {
    "url": "assets/js/88.85a3a4ee.js",
    "revision": "6e872364c045f4a39107bd07659916f9"
  },
  {
    "url": "assets/js/89.8a349f3e.js",
    "revision": "e9235cdc280bab7d9cac916a802b1478"
  },
  {
    "url": "assets/js/9.df0ca265.js",
    "revision": "91272e59acef87bc7fe5e9f0ed9c59e2"
  },
  {
    "url": "assets/js/90.bd3cb84c.js",
    "revision": "cf00f08696e4e6f7625386c50aa414e2"
  },
  {
    "url": "assets/js/91.67d69260.js",
    "revision": "c97b3dd1e681c5aae4ec1b30dc4ab6c3"
  },
  {
    "url": "assets/js/92.06b4f524.js",
    "revision": "c6993d3d983857d85d1ca13774ed1130"
  },
  {
    "url": "assets/js/93.20cce0c7.js",
    "revision": "20be2cbd5351694a0bbfff5cb7782a4c"
  },
  {
    "url": "assets/js/94.87794e79.js",
    "revision": "be0bc13217ec1a30fdec7da5b494c78a"
  },
  {
    "url": "assets/js/95.43495d36.js",
    "revision": "4f6758c035b1c6427cf908fb91cd2a1d"
  },
  {
    "url": "assets/js/96.5d0d55af.js",
    "revision": "fe5b8b2bff8131cbfc6f121c258ff475"
  },
  {
    "url": "assets/js/97.15fada1d.js",
    "revision": "26b1bbf8d3d010885bc123154cba6d99"
  },
  {
    "url": "assets/js/98.c357eda7.js",
    "revision": "6e0ca7082574b38bfda51b18bec80de8"
  },
  {
    "url": "assets/js/99.742342aa.js",
    "revision": "d959ae45dda3c8e715b902c0a47549ca"
  },
  {
    "url": "assets/js/app.af131231.js",
    "revision": "3c6159e85e138090622a64b2acce245a"
  },
  {
    "url": "configuration/api.html",
    "revision": "28fdf167c66794242f43975b12fe63ce"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "552a0f57755fae6e34c28efda4aef005"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "845c1ab1250f86112894348bc7a80e3f"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "5cef9e0e58a38aa591b3d1d6aab7fdaa"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "46e147864bbf757cc8e9e9c7e74643d2"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "f361671ae71a53e74df97cdb0280e26e"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "3911bc02fe8ba9ceb8493501c4a6daae"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "8a277b20f6988d231784a34b58010b13"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "a6f766b3a355c734b98ca4ad10e4a54f"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "a963a9af722d58464985755b4fa978b8"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "18924452c73ad73328c14b099a6693d1"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "ee5f899d7af975af458c8bdd944fac10"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "a6144e4fe1174c61e4b14331941071d2"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "673751f7d0f1a5917c980827037157a5"
  },
  {
    "url": "configuration/index.html",
    "revision": "af2791694f721209c78477c19d271fee"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "f818d486cb32b0259b064cf62b5ffa20"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "a3bc8fa3582efc5d86688b5bbf610670"
  },
  {
    "url": "contributing.html",
    "revision": "69487e2ff08a2a35fb37f5195ec9fc1f"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "3253aeb41e6dae68afe4558f3ba7cd40"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "f5bf8618a3852ad5bbb2bd93f5e5ed8d"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "6461bbc08c55804af6d7bdab305d7961"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "c6fe7733c57ade18b59a09419f5c8931"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "368e2a62fa2811e42e73257dc1be1668"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "307b6359310607f85806e338a1bf89b4"
  },
  {
    "url": "core-fields/background.html",
    "revision": "71f8dd6f23d943769c599a40794cbf6d"
  },
  {
    "url": "core-fields/border.html",
    "revision": "6628b60182c98de1a161f5273078e8e3"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "54e8b92fd2327e530c203cb70c01f434"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "08062c4c8b00e19fd9e3db6adba00d01"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "1408ab277e9ca32ac5349b737eb20bdc"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "7a60cb2a39d29aedf9a653f283736bd6"
  },
  {
    "url": "core-fields/color.html",
    "revision": "9c31629afa678d46663e895fa15485ae"
  },
  {
    "url": "core-fields/date.html",
    "revision": "517a1a404c20254e5738f2e7a46abd53"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "f2e57ec7d03f3598cf1dde3e2b6ac1cb"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "8eb65efec3753b0471d70ca60e8d28ac"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "24aa72b3d65d886d25fdeff40e60568c"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "d9cf67082d1e480aad3de8331f00eb11"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "b79d257eaacf959029bc80af14dc6215"
  },
  {
    "url": "core-fields/index.html",
    "revision": "bcf351a98bbfd8074663742385a1b321"
  },
  {
    "url": "core-fields/info.html",
    "revision": "08a9497833fc70679b178b136ed76d50"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "ebb70414efb92a34335d2c45368771c0"
  },
  {
    "url": "core-fields/media.html",
    "revision": "ed1a818a4212b58e7a7e78873798fc53"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "48e4bfbbbfaf6d581eebdcdc3623773a"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "eeec3ad02ffba057295cda95ed9e6fd7"
  },
  {
    "url": "core-fields/password.html",
    "revision": "3f5f282493f29252f0e68a718d611992"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "3fa37e07fafd0382c7729a7fa30403e5"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "0c02ec77f3e5ded07b2c14096702a003"
  },
  {
    "url": "core-fields/section.html",
    "revision": "22ed6d20494e36c987be7a3c21ac5468"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "6fd3440c6dd8164ab9699073c8dd2bbf"
  },
  {
    "url": "core-fields/select.html",
    "revision": "8c3d800f0e7aafe3c0566b21f9e819d2"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "414997be2732779ce786f744724a71f5"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "907882905f48ce7efee3a8fd8683450b"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "77bc41d09ebd06ae1a163cce27cf2318"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "4494ec51384fd4af512c80a6dfa8ccd8"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "a01b39e7826c2e57a6e9f49ddb0e749b"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "0311d0d2df5e37344d3df6f6f971e3b6"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "48894e4686459c7536693ee5eb7d9859"
  },
  {
    "url": "core-fields/text.html",
    "revision": "bf9a3dd27c8f6e8eb1c955190a30ed32"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "61893188d93b466709d7ce7235d74e4a"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "638a30b2fed23da6460be5ccd9218be2"
  },
  {
    "url": "core/index.html",
    "revision": "6293e578beb7f406cbbd95acb137c67d"
  },
  {
    "url": "faq/index.html",
    "revision": "6ff0ff85a37b9342a856eab1eeeded92"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "55a15f0f64da85a08373c10c935bcc14"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "e7aef0fa9db6297daa92cb4eddbd75eb"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "ef5be135885b6249942404272b6c35a8"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "08b01fc8a9907ed33509afd39c7f9c7c"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "691a3c257f8607e341212e150b84b6b2"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "b59f9c6325042e66f79a8cc3f41d009f"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "8b0b20a6e94771504180b1e02fe8a157"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "11838a4ba8c8523a23e82da453ed9a97"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "f01dcc043c63783e07d328a97acb6d04"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "cb3c9fe5ef459ac39ddb86e172cd2aac"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "fe5aa260edc9d18e11aba1168f50b315"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "5ebf501c3b8cc93373dd5d6f25b9161d"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "4fdbd907106c9f1e3472f2b7b469ae3d"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "46f7ab7d8b7964e851a930c11b6e5e98"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "785b05452d2e2926200078b3f2ad5d20"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "36fa64f9e3be6b72cac53f9080d05b19"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "9a53b611d1cb058787dc3b65f54fd28c"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "24b6b799a440abe5cdb5e6a6088309a9"
  },
  {
    "url": "guides/index.html",
    "revision": "2f99e24d93e6c132e5a8b5bf41b639ee"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "555bf463eb9e14a72ce05a3f5caa3831"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "1f739c5322effb88173a1d686806023d"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "786505ca3a5b4f9dda709dcfe0dced5a"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "946c99f190c3ee77ed498d21c537deb7"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "4c1b49efbeddb91ea72027cfccf0db40"
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
    "revision": "2643f22d488e0cc87d56c84da2122cf7"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "506349e4bb357af1d75849e5a33000d1"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "fd7618b2e0cbe4885dd9c27c162e90cb"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "4fc4a961606adade742830404fafe537"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "8a00cb37d89e245746316906e6c407cf"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "1e9199058b4762dfce906e8348464e01"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "673e4bd32835b71a67d41fccb17c3d41"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "d97186666831ef49c3162cf3a987bfe2"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "277c1b14164b6686aa307307bb5bd51a"
  },
  {
    "url": "premium/index.html",
    "revision": "f04dc672e72deada25d2682131be9df1"
  },
  {
    "url": "premium/js-button.html",
    "revision": "6b609166a0855ce1d6adeb33b20d865a"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "5a8c950dcbcf7ab49647e7f735ebe278"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "ce7776c9b140f4bf8d575db7a1f366b9"
  },
  {
    "url": "premium/repeater.html",
    "revision": "f961dcf98eeb447f1e89a4924e13b94f"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "6e6aecfadf463ce3e23f79c7c16cbff5"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "cd3ca21952366ac77e0afa47823c42d7"
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
