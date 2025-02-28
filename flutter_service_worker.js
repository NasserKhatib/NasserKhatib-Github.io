'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "c788be0ddc0b5a0e5379d3c4f3bf1b31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "61b3dc5ff61ce30842a146883d145736",
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
".git/index": "513b374f6ebf834bfbc7cdd480a0ea53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34119446d423505e7a69763fb2bec000",
".git/logs/refs/heads/main": "ca9e5d69eae5d6f1181abb9f9550c2f9",
".git/logs/refs/remotes/origin/main": "fbbf84c7441b8dfa72f1af0075eec4bd",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/de1b26b88d61f8dd7036cfd32dd6cba411baad": "2fbf69088ccafbbcea9c250e42a8eef9",
".git/objects/09/403023631ddc2d4e20e8e19cf6cd8387278252": "a8c89646107042474aac85aedfc30d76",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/16/eb42b73e132fe168ff7a58d369ef1601f86802": "a33ec80bf5ced6fa12336ec332928bdc",
".git/objects/17/669d9e7dccb573058cac50117499eccccdf1ad": "cdb82418fc663f61d307338f3fb88e96",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/16aeaaf8ad86ab90e07b522e109a731bf39c4c": "346c175c77a604ce8e16bff29459ad2e",
".git/objects/24/735b2241e459cb4994f5774207fdf9e34adc9c": "eed4c18e586b0aaf7426ffed1b3f66f3",
".git/objects/25/33f45ddb6a5ef705208afdd0689dc706905617": "8afb712594b5f979993116b6a143bd63",
".git/objects/25/abd34d012591dcebbf5529080e648d750a6aa1": "a94f250e8ebec2c1cc2827e03d1ee902",
".git/objects/26/7bcadecf159dbb6080510e8cb6775d3c7bf2d9": "194042c2986e50a91924bd79114fa07b",
".git/objects/2c/31cb3a6702febcc17307654a6ca4c8e95c478d": "305e44875af2c5729ab13e9f24e97361",
".git/objects/30/37211e20567f66f1eaa185e800f1f7e41cc20d": "18a3664e7b27111dd8d88d51a35e64bc",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3e/8372f4cc6d1b4905a3fa3cc96c898ad49b01a7": "c7b330eff3060feb8b2c240f4d04a4b4",
".git/objects/43/b95228148eddc6204b905ffca6ba679a466de2": "9c178e2ee1eae7991cd5d83f690711ed",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/0507305a3785b7289fb80ebe46ed0c2b5ad8b2": "7b3ae715e5d182c4877e80adcc33d787",
".git/objects/4f/8b595349a685d67a84be71746403fe51921fa6": "73c10621a8a09a9e3fff68e06c63e935",
".git/objects/4f/b466859eab0a931d84fd23f330d1a32b3c0d24": "88da975c16071d0302a6b86a0abd99fd",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/57/d89024fe13f2caa00aaf0b2fe80dc81c3e2147": "283d7c980378c3491d8a3c48d557fd47",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/5d76545d19aa69ac0a34a43d5724ee239ef065": "2385ef9f34b9a468955b36c8df6cd012",
".git/objects/69/31643bae2dd0ade61653322ca009072ed3d069": "1e237e0aa3a441d93bf59232d14a405d",
".git/objects/6a/b32f74721a4af2eff6a015b21ed1e2f62519d7": "534fe9a579ebe94dd3ef7e2e801e734b",
".git/objects/6d/2944c0167eb199ce425d01ce9f883ce65a74c3": "a8433435adb871041a3483c646b677d2",
".git/objects/73/02d5636f60c6cddeb455d6e7f3880c305a7240": "ea6ebc6326f8a3dacb08c15ae79392fe",
".git/objects/73/7a0dab619a1b97bb9dfd53000b1510897092a7": "8757a615e42e591bcd2306405fc72c46",
".git/objects/80/06207945f18590a7acfcbcaa7aca6bda4cbcaf": "3f1a392d0ad3a2f7b2ae6409dfcc3d5c",
".git/objects/84/10648049a3952b481b97b16af83970250fc00e": "6ebf229040685794023927df605715a0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/29b6802cd4db2e0a7fa60aa27cec06557ac2d7": "a4fca824ee0a5f46d223db339f6a9b60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5ad10dd2d8616de31abe1c2e275165e208e83d": "8135468e3f217d22a347cb522d68c8cc",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/1ff82aadcf2616b00066f4165052d6d8894601": "e260ef73930212c36807ca2f8b484d14",
".git/objects/94/7029f462e1246be9a029a8f424b19c30b55f9f": "f63fad1f870171fee9c8934d32a84139",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/de258209e3661a4c372b3c6f124af1b5aaa77e": "5b4fba4edacad45d82224ce249319e94",
".git/objects/9c/25e3799dd6a6af5e7de67f390b7faa5792988c": "1936f7fecfaa511257570836d12cf156",
".git/objects/9f/9fc881883e3eba704d0427037b15bc61f1ddde": "68cadecb104805620a5ae2529b33771f",
".git/objects/a5/f326d8eeeb2132594737251402478df37d103e": "c221bb6ec84f39b7b846efc8a9944329",
".git/objects/b1/8dc8e0872023535a7cf72fad676454c4375220": "ea3f0fc7c9571b38102165ea77d976a2",
".git/objects/b6/c3a2a503a726d9826673b89f3407c665fd7168": "4cacbf8aefe0e27a729d9eb03e31bccf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/68479cf1a4878a43a0c9c2308d84d4c181130b": "578293aed45e4094c74643783bcc6cfe",
".git/objects/c0/cc0da3ace9e7c65475c36b41ece42240b286e9": "ec426188fc65176310e86433a3ec98f9",
".git/objects/c4/40a6d1f206412b52e13c38e161e2f67bfab28d": "511d86cd1d11d9ba6b1c658b9c640d85",
".git/objects/c6/73005f46b347629205c947ee5bafc1a06e5bb1": "c4d5dca9a5d20766dabadba5a4719e0f",
".git/objects/c7/1ad2d989b3b17330dfc3cbaed1a94253e83f57": "63ae00e8d3c47a27855bae2d2d0a80c1",
".git/objects/c8/94642953c49dc48d423f5dafc3b645bfac619d": "3d16c0dae2e4c11c74d358d7c350ad71",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/75fcf8ebe098ca182f0fa1b610f9e61c6d3f4a": "1b336dbb7d029a3075576684c1bbdd71",
".git/objects/db/6a32e7910e680c62db4e4114306091ef8d26d2": "8978207fd2e9944e2f2dc41fcbfe3ce7",
".git/objects/e8/523153482f0835a5bb1afcfe0553d252678749": "859bff51bb278b42238c2c80901a1b3f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/pack/pack-80e2fb05ebc359fb98e785fa2042d1db0de2ccee.idx": "af4e678fd145bdce62f5fff11bce8cbd",
".git/objects/pack/pack-80e2fb05ebc359fb98e785fa2042d1db0de2ccee.pack": "bd5c9eca7cfac0a8d240ec781f90f4db",
".git/objects/pack/pack-80e2fb05ebc359fb98e785fa2042d1db0de2ccee.rev": "8fabc47560341253649640a830a28070",
".git/ORIG_HEAD": "d84ac89dddde93b82e2d5bab8f77b183",
".git/refs/heads/main": "feda3211a7d8cd99f5b0a649792b9629",
".git/refs/remotes/origin/main": "feda3211a7d8cd99f5b0a649792b9629",
"assets/AssetManifest.bin": "fc8e35102fb231eadab582807a42a2d9",
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
"index.html": "3a4cbd1103c252708060f2b7a88f92c3",
"/": "3a4cbd1103c252708060f2b7a88f92c3",
"main.dart.js": "8e475b7cfe531e98a03078bc11035892",
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
