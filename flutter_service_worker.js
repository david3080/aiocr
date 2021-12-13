'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon%203.png": "5dcef449791fa27946b3d35ad8803796",
"favicon%202.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "1356a8dce485fa8940cfe1a15a8d1b65",
"index.html": "7cdb018972ea1da23a21d42e25b400c0",
"/": "7cdb018972ea1da23a21d42e25b400c0",
"main.dart.js": "d5b4bbc556fcd7f9af1f2ade9f247439",
"README.md": "2a7496fe84d66a16c385d800f0c1985f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-192%203.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-192%202.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192%203.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192%202.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512%203.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-512%202.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512%203.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512%202.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "263b57cfb729888750530e411d271c93",
".git/config": "8db30e1bd1115175f0921f726e55b9f9",
".git/objects/0d/03828b42364c19592371d5c4225f20e12871d9": "5e3d64e594ce63c04aa316e93bf2a2eb",
".git/objects/66/282fa32ee1260cc4bd45d01d8381e931357a9f": "f6882f350d707b5264d06bd626e3bed6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/47a60c8ddb0dab9b9f1c8e08f0f3443db1fc6a": "16fc8b2c6a1f8b3dba4710a2c379bf05",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/e0a4506ea7058f19716ece667084246858870b": "292c4650024ca5a26b5611ef69f6ed10",
".git/objects/51/6bebde5be034ba32ec171e1d6e20fb375a2427": "357ecfe944cfb23ecf137db33f89666c",
".git/objects/33/2fe99961d44e93991703ea011625277326968d": "d729bd5371f823080c47a83447e387ab",
".git/objects/9d/c0500ee39cd47a426496a6c916d756999c6c8d": "cabc7c93b2d5530fd80289a402076a53",
".git/objects/02/32d50bb4674bbf735aeb915c3314d158e14510": "7eb0183171110e99e483603f67465a62",
".git/objects/ac/f82abaf7e7ebff4fdfb3b2d82c5f59e690536d": "7e21927093e8399acc3564082e34db24",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b3/de470c168332e42cfe8c7595564c19eff5b006": "8c79690cfbee5b1b971131a4237e459f",
".git/objects/df/ac081addedcba72ffe0826f4ec4e09dbf218ac": "ff0cdbaa5c33742daf78f2b936af39f6",
".git/objects/d1/1483e8bde6ea6a9bf6fbd7968276aa7156c180": "3217433b587efbcf4def600c4d7bba2d",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bdb11c3c16d1e00da2610dd78d30f3bd3556e0": "c8320e97783aa9d1ff9b4fb884981b31",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/7b23e92a344cf1d5568b01c25ce367788c7933": "da086f87836ffeb5c7d402aa3da9acdd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/27/4584ac2b249f73327c9fcb1e9781910de2525d": "fa3ef432d34c65dffe6d5c03dfbf6081",
".git/objects/45/5cbad2fbc303b734e72030a0ed11444025deae": "9fe6eaca2773be50caf227094475d50d",
".git/objects/28/c0e4b9beffe8c172690006bb6da2db11253fac": "d12c8c3c72230008ddfd0544f52e8a11",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/8ae7aeb015486fc61a0f8860b5b5d94bdd5313": "4ecf5569be7cd4ac87f38957f8a623fd",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/09/018131f267fd8425c83831d77416e97b4bf01a": "08c0582702f54fd335c23948e15d9dfb",
".git/objects/65/b1c0f7cc83ba4681c83a8ed208b9fa8d0dd1ef": "634d87badbcbe39e19688f6ba503031f",
".git/objects/96/bb23460acc0991c206ecede7e95b35c0e07a1d": "2925ff625aa2bccc7771f97222d92ad7",
".git/objects/5b/83ce148570b1023fadc36fe55850433e848aff": "bd7cd8a2623c51ff4cf603328ba9cbb4",
".git/objects/52/73e2c2954279bd38f199d2945214aadabf50bc": "f9582c4fe70b3eb6c83b203a8141fd29",
".git/objects/97/0bbd57f5b4b5172bbe82733403973b4696256f": "af2f4616e8da90d17a29d12904c8797e",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/d3/85bf0cd2507a7584d4bdf1eee65a24bd347fc1": "64e0e1dc5013ec846d41b9e7e0b5aeb9",
".git/objects/d3/1ee78e890184e5a0861971b80ff6cf73f4cd25": "e85e2254da4bc063ef6590b4574d8fe1",
".git/objects/a7/8d6179d8d29e124ed9b25a8ac57fb81d8f29f2": "8c4684b09d354d081d38d911d0c5d04b",
".git/objects/a9/f0e5f08179e29896c785ad880b3e224796f8cc": "4dc7e2ebebdfb6a6a7c08150858f0a3c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/22a5834dcfe4673f2202bcad083ae194ef08e4": "b948e1fd6cba8531b71aaf6c1abe9161",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/27ab02c7d5df518bf8caaad43c0592764dec51": "914e6ca869127887037e4a1ed9873b13",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/0e269dd12cd5c88f9ab6b7e52330d31dc24095": "6f1c6fdad04a0db233a7e51a10d0e289",
".git/objects/f7/328523d4a3a3358d232e374b2666df2dd1fe7f": "fffed4a343a6b85f75fa60f715e2c6b3",
".git/objects/f7/7acf2e780a5d2a9183df6ce0c3239f09e96807": "d8db2f98c7d64874de9b828715fc31f9",
".git/objects/e7/af75e4321d134e7663a165ae0c9e726caf9848": "ea1f087e82b8f4092af952203a0a965b",
".git/objects/ce/aa3269b096dcf8908d3eba1f32a44ef2b827b4": "8a79d6ccec81018f2eccb345fa7309f1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e12fc3426958ad3c3f89d7dc906997d8b00adc": "cb6a8399fe60114e14adf8dbab6b6e03",
".git/objects/2d/f62eca7012abb21dd5ae3b23a0941e3f1b88fb": "02e7d9a5cf007203ba9b29665a1fc325",
".git/objects/1b/a6d8a6f35b200753cfd53f44b1d555fa57e713": "455231c71f549bbabb710395059ac207",
".git/objects/70/ff2827a474c845f4c3c3477ddc5a08d4c9c170": "585d80f31d2e49db1b042a53de32aaf9",
".git/objects/15/7af6d76403d2358aa1e2dbbac599e889435cec": "8ddc9e97fc5fe683da31a7df36e7300c",
".git/objects/49/2345f3d6dd6f82e4043db933a677c275f2a66d": "e0ed535f22486c4e0668fa21210fdec7",
".git/objects/47/eb12b6b7db3efa8b3edc33b726cd140de97d71": "72b96e361680c5888272b2674cf31aac",
".git/objects/47/2721a9fc30e87d028f3c68d5476f10b0e44718": "57090a56be55d9f816886bc90490114d",
".git/objects/7f/a6f54057f92e78abcd8eae8e9bf4b293726377": "94b4869cede9bd70c0f933dc6313464a",
".git/objects/22/28d5865555aece3082d211d970961fd5ee6061": "3ed023d87ea7e966b6c28c32620549bf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a03bab4f0a8ad6da60c684b692b0e3c6",
".git/logs/refs/heads/main": "c67919b06604559a5419d4eda2b7fcd4",
".git/logs/refs/remotes/origin/main": "d2267075001f41d7ebc2bf51ce37f3c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e8fd8ab73ec257ef7c4816a6450d5bbb",
".git/refs/remotes/origin/main": "e8fd8ab73ec257ef7c4816a6450d5bbb",
".git/index": "cc9a5f4df7db857bc896e954d549457b",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "fae3dcf2c3f920049077736acb16f805",
"manifest%202.json": "263b57cfb729888750530e411d271c93",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "cb6a3899fea888c8c73f13fd0b06ae1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"manifest%203.json": "263b57cfb729888750530e411d271c93",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
