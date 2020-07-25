/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","cff7ea89ef79e8df191df05bf487488c"],["/about/index.html","c249133b584eec35962dc5cff5f4cd6e"],["/analytics/index.html","ff6d29baba794e3eb9872d5ae569ecb4"],["/archives/2019/07/index.html","c6ac8e6607bfaee76c7c9f9814e85c59"],["/archives/2019/08/index.html","0e63927bc1a3894ac98dd64272d6762c"],["/archives/2019/09/index.html","8b8dee55d5f630ca7db22d2db5536075"],["/archives/2019/10/index.html","474c463c1bffd20b6c57a993831220b4"],["/archives/2019/index.html","4cfb4bee8c3f3eeb98f876d1d1b18e62"],["/archives/2019/page/2/index.html","17c7a6e6a08ea542a8945c07984b0791"],["/archives/2020/01/index.html","67b7bdc21524879f39e01943f4fec248"],["/archives/2020/02/index.html","8b9b05002c95079374411f1f63900e56"],["/archives/2020/03/index.html","5263c933f2e147856ccfa5ae51b39599"],["/archives/2020/03/page/2/index.html","f93933375e280c3164ebeced83c58981"],["/archives/2020/04/index.html","26bbd273bf099789164c3784403702a0"],["/archives/2020/05/index.html","2026550aa149470da9e80f888da810d4"],["/archives/2020/06/index.html","1304b28d7b29e748843dae4132cb46eb"],["/archives/2020/index.html","89c5eeb192d7bdd37da1898b16372fad"],["/archives/2020/page/2/index.html","d481d8372c28112c799df851ae65ab09"],["/archives/2020/page/3/index.html","9b1dd78dee400b9d6b5e9ad17d89d65f"],["/archives/index.html","76aa8981bfa08649c80f8b7770bfa936"],["/archives/page/2/index.html","76aa8981bfa08649c80f8b7770bfa936"],["/archives/page/3/index.html","76aa8981bfa08649c80f8b7770bfa936"],["/archives/page/4/index.html","76aa8981bfa08649c80f8b7770bfa936"],["/box/about/index.html","ef2bb54be141e7a46240bc843dccd4b9"],["/box/index.html","6770dbad646ec3a365ca7ff7c71f917d"],["/categories/ACM解题报告/index.html","340447b38e60b2102b8a15d709542902"],["/categories/Algorithm/index.html","904dfc230b7aab66bbe732e3af3c2dc0"],["/categories/Docker/index.html","0ac758f92182553876ed1ee4f35753d9"],["/categories/Hexo/index.html","6234c72d33eff8d037d2103c2ab93af5"],["/categories/Linux/index.html","e438a6859c122a1a6bc38977d6f78afb"],["/categories/Python/index.html","ba2ec6619e64c89871d11bcc8e848562"],["/categories/index.html","88caae6d418d1b78f0d2642b8927c191"],["/categories/可视化/index.html","a20bdeb0776a38f6c28b32d45d2781f5"],["/categories/数据库/index.html","64bf104942013e49edae0052e222dfbb"],["/categories/活动线报/index.html","1d5b1badef39a71631e7994893565ab1"],["/categories/网站开发/index.html","5af6b3ee54de813b52484fb424cd9e50"],["/comments/index.html","7e75aaa9b72d6c15912fcf29765dd5f9"],["/css/style.css","be72b6fc41bafdd31c8e25b47f5319c6"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","6ac1f9e12c52b5ada80316fe9d0e8c91"],["/games/2048/index.html","22e4ba7fe1728a570eef066b43da55fb"],["/games/PacMan/index.html","a8ee52b7b93ec578bf8dc662b2d09d25"],["/games/cat/index.html","23eb03fb3d041f0b01936f8de3ce386e"],["/games/element/index.html","9f13d7ecec63e0ebe7b4d0454dd75a45"],["/games/gobang/index.html","3a900a72394532471bc2c8cee21b66e9"],["/games/piano/index.html","9ea20768aa571e9ecbc231c8b48164cb"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","e1ee5279b5a383b466360f4aa3ba3d46"],["/js/app.js","4bda9732dace5f29688d6002791829cb"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","05730680476171c371fbe31a8e469d8a"],["/page/2/index.html","b275976595c5a24911026c7ed83a01e7"],["/page/3/index.html","778d1e3072db0e4a7ad008402fb16e30"],["/page/4/index.html","ee849aa0b446367299ec0dc5cc08b1d8"],["/post/Activity/70th/index.html","7c203950b6a79106301b7538de6bbaf7"],["/post/Activity/exe/index.html","6581706928c783457812728f2cd19a1d"],["/post/Activity/jdzns/index.html","f47eea170f0ee6ae0e8d233c9c4ab5cd"],["/post/Algorithm/Algorithm-1/index.html","92b61d4d2045e15374703b8184d97e1c"],["/post/Algorithm/Algorithm-2/index.html","8090868d112d30ba3dd748ce9d874792"],["/post/Algorithm/word2vec/index.html","25232eae3078cfbb411e5c59de9efdcd"],["/post/CodeError/basemap/index.html","c0c8cc07bf96d3b22fc9263917b6227a"],["/post/Experience/DockerShell/index.html","19d50c9ff3b314644c8877926c763c90"],["/post/Experience/LinuxScript/index.html","a79ec88ef9beb4f2a1b5ceacc542e3f5"],["/post/Experience/LinuxShell/index.html","70d5bacea23e02a9da59523bf3abc31b"],["/post/Experience/MavenShell/index.html","50842d57ebe54ac0628af1727b8fb623"],["/post/Experience/Seaborn/index.html","585aabb5d8c7cd522dfc616ac9501735"],["/post/Experience/SparkEnvBulid/index.html","f6212351f033122daafc2b7b7cae4445"],["/post/Experience/buttonStream/index.html","83b2fe38965ec5f03d5b19d4aee715f2"],["/post/Experience/centosFirewall/index.html","937cba8a4268ff85ffb0bc4398bc7d3f"],["/post/Experience/jspEnvBulid/index.html","6987caf5cb75041ca0e2c73a02bc3c4c"],["/post/Experience/matplotlib-1/index.html","08f124d8cc77b831d472aa2b8a524522"],["/post/Experience/matplotlib-2/index.html","58fdd80ab85facc42059177172c05a60"],["/post/Experience/sqlShell-1/index.html","1598b030cf16d4405aa83af5098ecd5c"],["/post/Experience/sqlShell-2/index.html","1f07ed253c269bcb4e4665df6f12040c"],["/post/Experience/vpsDeftcc/index.html","3c862475954b92d38e83a0721d59538f"],["/post/OJContest/2020whuShopee/index.html","969407087a76b58e3236c4b1dca65785"],["/post/OJContest/AlgorithmNote-1/index.html","fd7166219ce5663b08dcb99b655d9795"],["/post/OJContest/AlgorithmNote-2/index.html","04e08d0fc09d54ac993d0f448e8f9907"],["/post/Python/Skill/Skills-1/index.html","7e1dc35966f71df49481aa826d9a9df1"],["/post/Python/Skill/jupyterCreated/index.html","4f97b4bfe86a08dc8bcf5ba643600e84"],["/post/Python/Visual/2020nCovVisualization/index.html","f7f3b075fa2c9ed7503d467734bb9e0d"],["/post/Script/dontCry/index.html","6609c4c6a6b3bdd5f7ebc8ad1e8fed03"],["/post/Script/zhihuPrettyGril/index.html","7a7f3ec67cfd4af07a82abf84968bf43"],["/post/TechShare/Bitwarden/index.html","6371eafec15045d90ba83d044d7a012e"],["/post/TechShare/CloudreveOnDocker/index.html","fb4629e7a8b512feb6be85709eb394d8"],["/post/TechShare/HexColor/index.html","f1835d5fc3426cdf8df1df34ede8c077"],["/post/TechShare/HexoPersonal/index.html","7fd19b7944a6164fc3c730c5116c5e08"],["/post/TechShare/Kettle/index.html","78fe1c187310e74bfca9cbe82ece0525"],["/post/TechShare/condaDown/index.html","812807f551f55863032104bb7e91327c"],["/post/TechShare/videoSec/index.html","59ab474418636b79d76e132f7f299966"],["/post/hello_world/index.html","02ad031c7e994edd10e5ac3c0b0dfc08"],["/tags/ACM/index.html","46edeea526efcc86e4430744a01fd772"],["/tags/Anaconda/index.html","720fe016ac700a7353c2b809c0fbac7c"],["/tags/CentOS/index.html","db65c51a3bba6e8a04676215f3e98c42"],["/tags/DDOS/index.html","e4b8c5b48205e3585fd7c1e36c27a1f9"],["/tags/HTML/index.html","c62138de792ee48958d6f17447493fca"],["/tags/HTTP-Client/index.html","fabfa60d3044468075a1587558493b1c"],["/tags/Hexo主题美化/index.html","bde223b26842ebf92eb82c387176923a"],["/tags/JSP/index.html","a456fb27fe44b19be77802f57ab68b14"],["/tags/Linux-Shell/index.html","9fd07600ed6f92df381ca11fb17a47b1"],["/tags/Plotly/index.html","10008a7701ceaded25cfd6b860f88b82"],["/tags/Python/index.html","5dbf8f8325aa92cb331a8e6218abb1cb"],["/tags/Python可视化/index.html","f357a24694bc5d76d44d1835ee39064d"],["/tags/Python小技巧/index.html","485329d52221c63c6a2e39b2e07134db"],["/tags/SQL/index.html","ce5a6a20953fa371f6fc8be79cf0ccfe"],["/tags/Word2Vec/index.html","fd958e97dfeff3d6277a129361be6783"],["/tags/Wythoff-s-game/index.html","227daac87708d99ce22f119f52ceca1b"],["/tags/basemap/index.html","f32d49f07e963bfe109bfc93387998a3"],["/tags/index.html","c4c0a8609b9ff539d8c566135e5002f6"],["/tags/kettle/index.html","7f8799b9815c264349ae424d1846d17a"],["/tags/matplotlib/index.html","c46eb9f9f2aac364a264ed90b2fd330d"],["/tags/pyproj/index.html","c4f38072ba1bc345ce55600a52e5390e"],["/tags/seaborn/index.html","47cd65ee3d3136022d1534309d86bbce"],["/tags/spark/index.html","7c8015b563cc05996453fee8ae048ec5"],["/tags/动态规划/index.html","dc7c78b174bdc335533db41af1fe0582"],["/tags/大数据/index.html","9c7a2cb0ccb31fa2511a82f9de308ce7"],["/tags/数据分析/index.html","0e1c68ea407542e3ab3a651dc5c11c03"],["/tags/数据库/index.html","aa2e4661d6f06bde983c9baac5baae40"],["/tags/数论/index.html","e50f6999dea2c3bf9e49d66aed602230"],["/tags/最优子结构/index.html","ded599679813603229fb6f650f2c8ccc"],["/tags/爬虫/index.html","749db52189ffad6381b6c778d1092867"],["/tags/词向量/index.html","415dbefa18e3615a326b7fe6a84ad12e"],["/tags/贪心算法/index.html","e21932d462e34e7e4b2db3feed60fa44"],["/tags/软件资源/index.html","17734586c7a27b580c7a5af50b7e9400"],["/tags/重叠子问题/index.html","7fe99106ef4387e55b8c3cd717153cfc"],["/tags/防火墙/index.html","fafeef62b7bc04292564c6e8da5c8cc6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







