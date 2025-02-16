'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

<<<<<<< HEAD
const RESOURCES = {"assets/AssetManifest.bin": "fc8e35102fb231eadab582807a42a2d9",
"assets/AssetManifest.bin.json": "62caac59b83c5fb58d636b0aef556512",
"assets/AssetManifest.json": "7e36c68f5d7a373c94896e572bcb7a15",
"assets/assets/images/ca.png": "04d009f4a3a5690f7fb547bb479f4015",
"assets/assets/images/imn1.png": "3a2233eab6b19fc73f734aa5a1fb7f7b",
"assets/assets/images/imn2.png": "35997b4d5fdefa672436e5a3fabefe60",
"assets/assets/images/imn3.png": "d0798a56224b6461e48c7ba0e8cec3b6",
"assets/assets/images/na.png": "6db1497bd3443a8c8ab64895cebb42fd",
"assets/FontManifest.json": "2b6d2b84732e6274928532518c23fa04",
"assets/fonts/Genflox.ttf": "469d17f1195955eae33ab1b45e029094",
"assets/fonts/MaterialIcons-Regular.otf": "5c33067e7c6209f5e2e5c42b8e4e461a",
"assets/fonts/OriginTech.ttf": "89817b161de425f21fc1aca67c3dcfbb",
"assets/NOTICES": "90972c33d4dd4b7f8a8e8692163820f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bcead6c3c4c45cbbe0185c371dfdda8d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0c44c4873179a2d55f4099c2c3598028",
=======
const RESOURCES = {".git/COMMIT_EDITMSG": "a26819d340c2a0789c66c69f3bd3893c",
".git/config": "f3c9604b81792f4b6bf4c29340f43a36",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8e8fedfa1721fcf589a6e0495b46b93a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a81d3441d0dedd43e4b24c4b4fbf56ba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f7d53de036f37d6580b5e7f7454b335d",
".git/logs/refs/heads/main": "9870ed5c0184fabec26f1c648769f692",
".git/logs/refs/remotes/origin/gh-pages": "1b16b4fc0d365c95ff7f7bf4bdf51896",
".git/logs/refs/remotes/origin/main": "f7fd4179214ec24401c23a47289da38c",
".git/objects/00/664e46c9c21ec5b8eec6e68ddcf17175a84b96": "b8146061d304b02b264dd6121d904960",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/e75c0f3c213d97a880c7e157602b2889e2624a": "fa1fa315dfbaa7dcf3f6476ed58f749e",
".git/objects/09/2a327eb6595524dde03d1267ecf0791365bb5c": "74b7559547017f3108deff83b128d6fb",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/f28657e142f8dd43a03c7d2096ce003b205f3f": "952bb870d628cbbaee04562595d1bc70",
".git/objects/0f/172a5fda62accaa6919729dd09e04e01686082": "a9e866425626c208840e391563e9b9a6",
".git/objects/12/2e0443739ab3a010cf2e5ced657193ce11da8d": "e391d0adab3059380428b3bc21803171",
".git/objects/12/87c1c7f977fc5f3339191777b83dc1b36f3b7f": "55db82f45ca953e683f1626eddcb6621",
".git/objects/18/c2b607568ddf8fae164ec50f3604d706376efe": "3fc53a725b0a09ce6034c7725881c9b9",
".git/objects/1a/fe772221718d3506641ba55877c74fdf5d942a": "cfeaba5923cd278110a0c038571cdf07",
".git/objects/1c/aed763089ff87e8e12c0b1e1bc01e442e624bb": "60b30a2051c02481eeb3e01eef2cdc1f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cd0b534603ffb862505958d58354b4979c9459": "f5690fcf46110096c56702bdce45db2f",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/22/53dc03d93c10b58f4e951ddfbbfdb4a5c94f26": "e470c8cf1ddda9fa7e31ee804c0d75ea",
".git/objects/22/973eb518a001fcea90d3553859a5730ba29d9f": "64b319f0ec3636fe3400350c78e89e6e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2c/0029de44bc49836940da291543f8684a11bcac": "e12bf10713da4283eaeca569af3748a2",
".git/objects/2c/f851225daedd65dc7f328b1f40da87d27f49a5": "853a4310f48d83ced973ecab9764d33f",
".git/objects/2d/6159034081c0ff9b6157b22ecb73201c1a2e31": "019a4b1d4e1bf1fb576370ce1953772a",
".git/objects/30/37211e20567f66f1eaa185e800f1f7e41cc20d": "18a3664e7b27111dd8d88d51a35e64bc",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/7219d2306f69d872ca56d5640b39067ee02084": "c356ce92397c580f9f941ee3adc1ccdc",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/eb581a869987453479c9966bc17b390d8a5d95": "420c59c56b1c1ece1dff6a19fe4ae365",
".git/objects/3c/b9f86163ad7b2a6ff0c5ca82ffc654a2ccee69": "18b2d01c12d75acaa0ee597ef6481483",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/40/8417108c8ef44e16fa87339755e514e663b62d": "d90461849c9d067e0549019e88e2e079",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/9da8e583078c1a4d820b8899b52a3f356e891f": "0afe8fc9453564adf7385f76d83eb9f4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4d/13216eb0fa4b4cf244a68d659b90d4a6d57188": "60dd86f547528aa09774565becb4c165",
".git/objects/4f/b466859eab0a931d84fd23f330d1a32b3c0d24": "88da975c16071d0302a6b86a0abd99fd",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/b3e8f79cd77d4d90251548e3d6069310579686": "2283d91ac51f522c896e6a79d604a532",
".git/objects/54/875a8b709113bbdbc18bbf12ff392d2498293b": "0d714bc75e05c858e83e8bc052346e37",
".git/objects/56/2abfbf3bec3dce2c63ce22602029ff4f50da50": "e4a3435970e6cc4e1b90ef5db04b29a6",
".git/objects/59/c78f881401c9ede8075d7df6ded10d33899be0": "860a69c7e879d4b54081248ab602dded",
".git/objects/59/fbf68209af6461489398684cdd4f7b1cde9741": "727ecb42cd8247e6e29378a29093ee97",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/5d76545d19aa69ac0a34a43d5724ee239ef065": "2385ef9f34b9a468955b36c8df6cd012",
".git/objects/67/2923bc2775098e8af5847288d38f986adb984c": "65b12699226287fd7532349326f4a2a2",
".git/objects/67/5a70b0970c258320b21a3069ab5361de15b89a": "056461397af0f080f5dd9371ef72e4e4",
".git/objects/69/31643bae2dd0ade61653322ca009072ed3d069": "1e237e0aa3a441d93bf59232d14a405d",
".git/objects/6d/2944c0167eb199ce425d01ce9f883ce65a74c3": "a8433435adb871041a3483c646b677d2",
".git/objects/70/4257c92ec3dc1e6b7bd28614847c49831723c1": "679a72fbaf9e387113c1988c8310524c",
".git/objects/74/c72b2cac5aa96cff58c132aab693e72bbd3c4b": "e670920c81029eafede3e87cf75c56bc",
".git/objects/76/cd7b3926230977f3525773f826bf10717d0fb2": "fb4dae53334faaf2b321f8ab28449980",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/79/7ab61c9499fa77762f4a3fdba3a5dcd74a09be": "c3e1c25fa21626247aa84a9ed557444d",
".git/objects/7d/32c7bfadc1fdfb45b26bc9ac93eab79b1d3c70": "ac0b3855690b256bf4209bf29d57ee71",
".git/objects/7f/6a29f06c669a3bb8c4ac370cdda29b5fe4ff18": "7d28ba75f19ac65a4f6c49ec15158d1c",
".git/objects/80/0991723c6aecd21db59f66fc4099c8ad187705": "a44adbda178e28609e02a54c7591ba01",
".git/objects/85/304fa2131d0a269d06a487a756328f72b8088b": "3fcc145dd799eeed6bb90f00ad2c90e1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/7150098b8f6dc3e89b54e3cc19b24d3d25ae87": "cc4c7b08b6affa121f3faaa84aa4b672",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/6f45bb29b08837f8b8dc6409ddf9c7b946f595": "a32f2571faebe544af4dbd9460249216",
".git/objects/8c/6a4bf6aae17164bd9a09f319ae46bdea2e4472": "ab4621172fe1fc406a03613d67cd088b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/ab03514e74bdec3413869991d8a30524493083": "3c2753b034a04abff4f68bf953ceda08",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/25e3799dd6a6af5e7de67f390b7faa5792988c": "1936f7fecfaa511257570836d12cf156",
".git/objects/9f/937dac074cf8ae3798c51b7acd74090c11a156": "eb96445d9123abec7d92e6d0674717b9",
".git/objects/a4/442453702c953763fe632f6d902871b5f43a64": "f8441b0046ede9352e67b187c2824739",
".git/objects/b0/e39385b1c35ab57c9a67f9efae84391d38d3ed": "d0218c5302dd24ac8236a4988a6da7fd",
".git/objects/b2/7496d6c3a28428c9d8a6c8a8ba5e8b06029708": "c8ab8a35da2f6190305b2a9c10b96bde",
".git/objects/b7/20b44d96b6e0d33c0743c42719360f06b4d8d1": "c6e7bcfa7e08741cdd21c2a235b5dc8e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/52d8c3c8f5bd08bdd04130a567760f2c2f6b7c": "86c3ff94ce3524b272ca65ecea379f4f",
".git/objects/b9/869a6ffe572d3344ea619663333cc107bfca53": "17d053cb86540f9ad5a412026a4a3f9c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/39564b490fcfcac660fb482bd1f34f87faa95d": "f9773ab4337869fabe8e6da26a1d62bb",
".git/objects/c0/cc0da3ace9e7c65475c36b41ece42240b286e9": "ec426188fc65176310e86433a3ec98f9",
".git/objects/c4/490f5683e3bc61763fc10ff63721e35d89f57f": "3680c259a476d3c3bfa5965212589d8d",
".git/objects/c6/73005f46b347629205c947ee5bafc1a06e5bb1": "c4d5dca9a5d20766dabadba5a4719e0f",
".git/objects/c7/1ad2d989b3b17330dfc3cbaed1a94253e83f57": "63ae00e8d3c47a27855bae2d2d0a80c1",
".git/objects/ca/12da64d79166b30eb29028540e7e2b53874a11": "613476132084855bd168250280a90f41",
".git/objects/cd/3898fb1df692ddb5c082b7689bd3abfd672a8a": "6d3b0fc9a321f15206f836f34d8261dd",
".git/objects/cf/01f4ad364508448b22157ea82415a289164887": "1f785c5bd9cdd9290f73449f3bb759e6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/6a32e7910e680c62db4e4114306091ef8d26d2": "8978207fd2e9944e2f2dc41fcbfe3ce7",
".git/objects/e3/8d4719542b0681e3c9fc12fc357f6a2815f42e": "e84326526651943fa39cc6b8462c44c0",
".git/objects/e7/ef6cbe2f621a423315c2d651e3a1bf84507d06": "fa86e3c77b15e18563cfa8a375b1837c",
".git/objects/e8/5a69e7a101800e2e14aa1574b8db9a34a7a257": "0a8e0a2eb7a0de30b10592022ce3beb8",
".git/objects/eb/59527da340b1650c9dcedd7076adff2cd1fbbe": "4658e92f83504f18aeffc7e7d5ed6473",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e33eef2ed3d9f86dcff9eb36cb62a8ee82ea54": "1f7bd7d4e3c9e40bcc2b95d004f0b179",
".git/objects/ed/27796330a93ee931b65767acd8301bb4f183d8": "75639e4acce17f065f146720e23c1a49",
".git/objects/ed/b9552c4ffa0b9febb1a43e5da94b1f1c44c843": "f666d94fe4a95bea621130d34af0b0e0",
".git/objects/f5/0a4b2ae52daad6f4c44ba4adc8dd89434285b2": "7be74310da625cb95c19e0400e91d88e",
".git/objects/f5/7958c9d739ea9d73e47f2a09f7b5c3b1a8ce57": "bb8285db9d11bb0c9f3a0eafc6b68926",
".git/objects/f7/f7659af09aca02ba41c93769b2f37ce6c62eea": "f8b5b44cb2ab22a3290089c49c3516a9",
".git/ORIG_HEAD": "d9ce1bc3494d759f378baba9ebefd674",
".git/refs/heads/main": "8497451c3dd5327a8981f712cbf7f29b",
".git/refs/remotes/origin/gh-pages": "8497451c3dd5327a8981f712cbf7f29b",
".git/refs/remotes/origin/main": "24cea602ad7d4783797c950066ab9f76",
"assets/AssetManifest.bin": "18c1ef34f83e41d29aa15c939fe10668",
"assets/AssetManifest.bin.json": "b70fa7fdc284b3b1706c7bce75a481f7",
"assets/AssetManifest.json": "1a8309f0b535e44fb4fcc80d8c8d3fe6",
"assets/assets/images/imn1.png": "3a2233eab6b19fc73f734aa5a1fb7f7b",
"assets/assets/images/imn2.png": "35997b4d5fdefa672436e5a3fabefe60",
"assets/assets/images/imn3.png": "d0798a56224b6461e48c7ba0e8cec3b6",
"assets/FontManifest.json": "2b6d2b84732e6274928532518c23fa04",
"assets/fonts/Genflox.ttf": "469d17f1195955eae33ab1b45e029094",
"assets/fonts/MaterialIcons-Regular.otf": "15b66b813a0696091cb4a99d3630cc42",
"assets/fonts/OriginTech.ttf": "89817b161de425f21fc1aca67c3dcfbb",
"assets/NOTICES": "8489e8ef57724f8e4df746b93cb86042",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "05c8f3817fc11d70d844c6f1a8989d06",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "453930c411319ad9f60593ac75af6566",
>>>>>>> 231f45ae943984e673d47ce16a7c5d48691c8b21
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
<<<<<<< HEAD
"index.html": "af1b23d68d2ad8d245cf230d12942499",
"/": "af1b23d68d2ad8d245cf230d12942499",
"main.dart.js": "e03437392d1faaf2c96e38fae63231ec",
=======
"index.html": "c155cd6a09c6de08a2f62dafec03ef16",
"/": "c155cd6a09c6de08a2f62dafec03ef16",
"main.dart.js": "9afdcc16715d59ffb03896d5861e1a13",
>>>>>>> 231f45ae943984e673d47ce16a7c5d48691c8b21
"manifest.json": "ec99c58dcdf1921903d02d7d0fcb08e2",
"version.json": "38b6ff1bef76e401ac0db481e0ce8897"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
