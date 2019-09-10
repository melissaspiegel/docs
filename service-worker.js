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
    "revision": "524a435efeab2d535e04c79f92dcb582"
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
    "url": "assets/js/100.82e00ad3.js",
    "revision": "7fe4bc755e77b98c5aae5a8f0b713b1f"
  },
  {
    "url": "assets/js/101.ee1cd9e1.js",
    "revision": "70eb478cac611accb434651d9f393939"
  },
  {
    "url": "assets/js/102.7fbac032.js",
    "revision": "4a6e3394298ec6315812cadfefcb23ba"
  },
  {
    "url": "assets/js/103.0d7408e2.js",
    "revision": "b05defee822f72112d3bc9d61dfe54f2"
  },
  {
    "url": "assets/js/104.7575a3dc.js",
    "revision": "94b3fb390edcb9d9bd85232b2a518e08"
  },
  {
    "url": "assets/js/105.2eedcf6a.js",
    "revision": "76dc8f833459508de3c980d81295c1bb"
  },
  {
    "url": "assets/js/106.d50a952b.js",
    "revision": "4d94d4d7b5f75ae4548c1e02f4b3e31b"
  },
  {
    "url": "assets/js/107.8596dc78.js",
    "revision": "880a340caacfccaf348c3a1bc8694376"
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
    "url": "assets/js/12.e759e73c.js",
    "revision": "8aac91db2ae7cbbbde6f4e5afd43deac"
  },
  {
    "url": "assets/js/13.99978dbd.js",
    "revision": "1f8235574aafe95d65f146199fb652ad"
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
    "url": "assets/js/17.c98d1e01.js",
    "revision": "dbec3dfea256157a640fff58ae222911"
  },
  {
    "url": "assets/js/18.19f680be.js",
    "revision": "91272f38f9beb25abc6be084392abf74"
  },
  {
    "url": "assets/js/19.9daafef8.js",
    "revision": "17bc822ff10c0e9f7a6f119d0682563f"
  },
  {
    "url": "assets/js/2.616b6b31.js",
    "revision": "031ee245ab8caea0d1075e50b81462f4"
  },
  {
    "url": "assets/js/20.0ecf492b.js",
    "revision": "ef0ef99a5d3788048bbac9850fe69eaa"
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
    "url": "assets/js/28.6f81dc19.js",
    "revision": "6b734ec59cdd235f7b5d9e49bb3c82d6"
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
    "url": "assets/js/40.b875e383.js",
    "revision": "c8384b488922f1c1ce7142d350f472f9"
  },
  {
    "url": "assets/js/41.a403b7b8.js",
    "revision": "be334e39fbaa6a7505ea0e389940ecfc"
  },
  {
    "url": "assets/js/42.28389dac.js",
    "revision": "9e0bb260f43f79b5272303ed4d0d0b3f"
  },
  {
    "url": "assets/js/43.4fb68ac8.js",
    "revision": "77578622f3ceeeac5debe4b14adad104"
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
    "url": "assets/js/5.1a17d023.js",
    "revision": "7da8f066818243170da08415b88634b3"
  },
  {
    "url": "assets/js/50.3ba4b14a.js",
    "revision": "a35c84384a601423ffcc0d2aff399426"
  },
  {
    "url": "assets/js/51.879c35af.js",
    "revision": "9d8df8faa91c19c3074313a26de73ee8"
  },
  {
    "url": "assets/js/52.a9d93535.js",
    "revision": "f7b5ec6900390b677f1594ba9f87934d"
  },
  {
    "url": "assets/js/53.16dab589.js",
    "revision": "62e5128a360f66c248221493ed55f167"
  },
  {
    "url": "assets/js/54.11b762ca.js",
    "revision": "40b708586ca1d83d385b7fa255616b25"
  },
  {
    "url": "assets/js/55.2a9f9dde.js",
    "revision": "e5c123e6d808bdc18e0e6f08d0bd37c7"
  },
  {
    "url": "assets/js/56.64a45851.js",
    "revision": "4442ff42b216d393d20caf0e3c95af0b"
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
    "url": "assets/js/61.6b5c50b2.js",
    "revision": "0116a76ef3878e03fe4d98c132abbd55"
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
    "url": "assets/js/65.20b05301.js",
    "revision": "40c1a2f94f451fe386a18bfddd42f9f7"
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
    "url": "assets/js/76.0337408b.js",
    "revision": "d54dd26f608d618a7049794b6201dbf0"
  },
  {
    "url": "assets/js/77.9f748e8b.js",
    "revision": "cc0703c1793ce308e0002faec4ad3289"
  },
  {
    "url": "assets/js/78.50c5a2c0.js",
    "revision": "08f2e2cf032e055a51a6d22d8650f8d7"
  },
  {
    "url": "assets/js/79.cd84bf41.js",
    "revision": "b339fd100ab6232b3bf0b3173f073485"
  },
  {
    "url": "assets/js/8.eecf288c.js",
    "revision": "15be9b0e233682f41f323d1464b0cd8d"
  },
  {
    "url": "assets/js/80.719073d2.js",
    "revision": "dd6fb910c8490dcd9d88495312ea2356"
  },
  {
    "url": "assets/js/81.1ce3b37b.js",
    "revision": "7b8e92169d697f4bf51a6b5dddb7bda2"
  },
  {
    "url": "assets/js/82.17df21f7.js",
    "revision": "5a8d50c12739504ca52c5b7582df52dc"
  },
  {
    "url": "assets/js/83.c308729b.js",
    "revision": "3df63f6b3b495a60e20e906b45705b84"
  },
  {
    "url": "assets/js/84.8ea28fe2.js",
    "revision": "05373be358ab650883f6b404d9242074"
  },
  {
    "url": "assets/js/85.7edd2e84.js",
    "revision": "0c1f82f8aa78cfc0c581adee735042fc"
  },
  {
    "url": "assets/js/86.82a7a9e3.js",
    "revision": "4d9e0eaad238584ea3f60c16d14b076e"
  },
  {
    "url": "assets/js/87.2041c82c.js",
    "revision": "4f5b7bf2fce8912243fb9b7c5fd5cefe"
  },
  {
    "url": "assets/js/88.a9fca5de.js",
    "revision": "04b4ea21468088c960083220bb4a9502"
  },
  {
    "url": "assets/js/89.f2e01b11.js",
    "revision": "e429cc460d2efb785e2bb5393cda9ee4"
  },
  {
    "url": "assets/js/9.1123f7cc.js",
    "revision": "e8bc88f8185abf35e55c007a0e407eac"
  },
  {
    "url": "assets/js/90.6a0955c5.js",
    "revision": "9b40cecab096ecd7b52bf7aa8a8c05c7"
  },
  {
    "url": "assets/js/91.e22bc604.js",
    "revision": "25768fc275b025cecb80b111fa71f1f9"
  },
  {
    "url": "assets/js/92.6314400b.js",
    "revision": "0a5b499b338938ccd8d5d9c09a3f84c6"
  },
  {
    "url": "assets/js/93.74ebe4bf.js",
    "revision": "76a558fab3916ed29894262cef5fc863"
  },
  {
    "url": "assets/js/94.8acc2b4a.js",
    "revision": "acf9472ff5c29e825b2363e312e9333a"
  },
  {
    "url": "assets/js/95.fc905dcf.js",
    "revision": "0c911dc3a2fe38d5563f51869d828434"
  },
  {
    "url": "assets/js/96.4e426d43.js",
    "revision": "012d24b9e130256ff596675e8f1f39f5"
  },
  {
    "url": "assets/js/97.f81523e0.js",
    "revision": "cedf0ab3bb25e00ebe7e3d84a3992db8"
  },
  {
    "url": "assets/js/98.f4b6eb3b.js",
    "revision": "e4ba37cd11efd83852be54e10e6bf9f8"
  },
  {
    "url": "assets/js/99.f715c023.js",
    "revision": "85cf79b6df73d0d426a97dd1ff4173e9"
  },
  {
    "url": "assets/js/app.05b129aa.js",
    "revision": "6b3b8bf528efcfba3a935dd50271f7d5"
  },
  {
    "url": "configuration/api.html",
    "revision": "6fe6c8695e1d800c94ff746d5919dc67"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "12779f7006938bc5bbe8533fe9c89a47"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "b7d07a200da4a628c79c98d39e44d9a8"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "81f7500474bba694e9a96ae88288ce43"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "c435394ed59a54efa5f761b4683ec64f"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "bb8c5054f49b24b63dba101b29bb4d7e"
  },
  {
    "url": "configuration/fields/output_variables.html",
    "revision": "6a152b3816f08b9bc84b79ddedff0afa"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "94b261153c58ca27f5374605b2961e42"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "64bf73c1eaa5487bcfa71d22053a9dba"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "50dce51d55c045bbed6b5f4362c0d3a1"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "45fddd238c236842ae6e35dc63f01417"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "4222e74fd054435c6f03ddb40c4bf3ad"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "e68f1e34e2d7828115f5e94a60239f9e"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "05ce4df3cda8845ee1448e8b59bbb3ae"
  },
  {
    "url": "configuration/index.html",
    "revision": "ee567dc276615cc879c7f71ee9ab8f37"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "2ad5fae7befba6d845263df3451f5a6c"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "36bd6cd0abb448f0bef69e286367d9d3"
  },
  {
    "url": "configuration/redux-api.html",
    "revision": "4f6a480920d46a9bdfa4e3eab3a14444"
  },
  {
    "url": "contributing.html",
    "revision": "6f374d2b57e30d74ac4747e3ba9ae2ef"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "593f2275af4f9cea3c6eaddf08d4d009"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "f735f8004aeb2441b81fd58ba151fbbb"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "69b0d6fc787c0144bc9d922b332f3440"
  },
  {
    "url": "core-extensions/metaboxes-lite.html",
    "revision": "8e68b9f0c16af27441f51147904e30cc"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "9fb93bc8433ee938e047d3acb4f08211"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "28b19cd6cedeb3302f73b9ef672e0ae8"
  },
  {
    "url": "core-fields/background.html",
    "revision": "6caefc888d5569635cf60f72dd07ee64"
  },
  {
    "url": "core-fields/border.html",
    "revision": "d0095ddaf6c9aa0947004e9de4a531ae"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "4a51f2bd3e67e60a5d5a94ae8a3151a3"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "17b18d0497e9722b830e2c721b600e51"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "e955d62d07184d36583d242ac45eb04b"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "c6bc439842ec067ef2778bc371098a0b"
  },
  {
    "url": "core-fields/color.html",
    "revision": "6ab8adff271b4c4bfec55341d632aa16"
  },
  {
    "url": "core-fields/date.html",
    "revision": "78d065015c243c99ca3e3bea8fd0dddc"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "92e204e159e52c982a6b923df46abc61"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "6b212993d3987d54f14468cb22d76a61"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "8c57b1fb92dcc3fbd3150e740be65146"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "542816c1e8c2d5143108bc5505c59ca7"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "8ddfd9caa3196bf47e2b73a04a540cb6"
  },
  {
    "url": "core-fields/index.html",
    "revision": "1627a86fb2262556cb8a8159049d6682"
  },
  {
    "url": "core-fields/info.html",
    "revision": "a9f1be4c0711a5239e1371df0160a818"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "ab03d09ce5edc94488d43cb043aac24f"
  },
  {
    "url": "core-fields/media.html",
    "revision": "360240537aa676546bffe29e1db22ea8"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "6bdf34528ad925a07e7eaf43f5d132f8"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "deed931cacef07fab9ea2ee3ec619c41"
  },
  {
    "url": "core-fields/password.html",
    "revision": "5f9ef6aa2813876b22b69df08f2ea940"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "d1dbea5af0b3801ea8d1e657b4e92970"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "fbd063d7ed7706185f8c28b7d2a21224"
  },
  {
    "url": "core-fields/section.html",
    "revision": "e8d819ef231aa14be3521ec7f26c4051"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "f601613bb2efb7ad04922473da69ab51"
  },
  {
    "url": "core-fields/select.html",
    "revision": "f53caefff9b682a51a47109e60e9777f"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "0c3728c4f7fdddd05467b89969ba3d16"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "89170a553a91cbdcd432f8a12c5d0c95"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "f34f4e0a2c52a7a35d81bcafde85f324"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "674ff01971cbeac55f61e6ebd824a858"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "68339612d530b7e6b2bf2d4de68b645b"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "725265dbfc952bf9da66a784eda454f7"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "700c25981e39e64bf206207a20443fb8"
  },
  {
    "url": "core-fields/text.html",
    "revision": "d66c18e89e89b5b56843df3f73d1634b"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "d300c287dc243a1270dcb6cf9599ad90"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "808c19edb6ba2c99bae570c3b5cd841a"
  },
  {
    "url": "core/index.html",
    "revision": "f3661a1e6afa180b93511853ec371c3b"
  },
  {
    "url": "faq/index.html",
    "revision": "1fd5ee292d1d729f0fe09771f5b940f7"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "33f9dab86416cba59badc9b2ab6cb9d9"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "fc695208bc2b1e6c5845c7c4a14ebba7"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "91bd7a7fe5ec25fe93f6447962de637f"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "164415576a21b33bcea20dbbb46d5e4a"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "3f1f596cd7187cc51f4eefb4654d8cc8"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "61b3324822888b5ab8ef1a069ea2af58"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "b9f3d45eb7a1ae3c9ae99a98e0b993fd"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "69a65733755c94d3dfd8240b071177a7"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "c1061243d494f5b47d7ea396ea87ae32"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "fe183d59abb691a79e551076ca802d43"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "8d2ccc8e1a0d190a05e78f7556850c37"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "929134b72f3148f9cd6ca179265d335a"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "3d1699ad367033424c77933955daac4d"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "9a871328f0b25c51a1cb736b4ccfdcfe"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "484ced959fe741b56f6bbae323ed3871"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "7f0d96c31377bc6b4e47cfb0a6cba71f"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "3aab31d03ef4479919c0ab8f8b26c2c8"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "24c070040f5adecb1d50da766809f3b2"
  },
  {
    "url": "guides/index.html",
    "revision": "f614217afeb516687f311e3ad677770b"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "9fae94b365bae5c784edafa578cecf14"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "6334b4cec86bef544d50ab6cb8d59200"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "6493912604f9c5fbc8023fe0952702eb"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "8cc897a597850b4be30de716507687ee"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "83efb63f7640cb5ef5d562df44591df0"
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
    "revision": "3b076ed0b0043dc8230c541bd7664f4c"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "7aaec423d45c24f06737550570d57c68"
  },
  {
    "url": "premium/codemirror.html",
    "revision": "823e1516b49dcb4171ebad3746feb19b"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "ff321cc6153ccde90edcb46aabd12734"
  },
  {
    "url": "premium/css-layout.html",
    "revision": "b00f113b9547cd3426d0ee144ccf3249"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "c37e5b67c7317a7e307f3e0c6041b21b"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "c9a3fc094cecffefc8e8a36dbefb1114"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "42c0b6d501080b4dc66be417d3d34851"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "49ea27041d063dad26fe23799a7e61b1"
  },
  {
    "url": "premium/index.html",
    "revision": "72aed9c242f0c672cce83851de6d42a6"
  },
  {
    "url": "premium/js-button.html",
    "revision": "f160d3aea33aaaae56cba7b7f2200ee8"
  },
  {
    "url": "premium/metaboxes.html",
    "revision": "e75b8c5da56fe848eccb296c3e8dcc4e"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "381dac7c2dcafdfe38935bd2828b6a32"
  },
  {
    "url": "premium/repeater.html",
    "revision": "104d630d75145ec94fd52b1a4ad2493e"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "5db2b1914133c7c4d10517e8f7b73f6f"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "c16004a9b18395cf0bd08d864b68db34"
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
