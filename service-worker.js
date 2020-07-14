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

var precacheConfig = [["/404.html","cead5b692243ef8ff34833d7c6c4bdbc"],["/about/index.html","bbdf4cd492dd924769395915f476e7db"],["/analytics/index.html","58a3eaefffbfdd55d3bf386a367bfc54"],["/archives/2019/07/index.html","4f5b1d564743b1fa93f54875d3cba7cc"],["/archives/2019/08/index.html","263903066d17e604b88286801a022413"],["/archives/2019/09/index.html","cee92f04339facd4fb058ad068c9218a"],["/archives/2019/10/index.html","81b281c499eb28a4963cf3a79fba3505"],["/archives/2019/index.html","cd55d6a177687ee06e4908ee149d0d4d"],["/archives/2019/page/2/index.html","4cde1cdba09ace861537af9033bf661f"],["/archives/2020/01/index.html","3be313bb06a4daf630592fc2c185abda"],["/archives/2020/02/index.html","b96952a00f3e68e40f1d8bcf41a862cb"],["/archives/2020/03/index.html","20d35a6e67d4abbf8f6f769c5c0e2918"],["/archives/2020/03/page/2/index.html","126748881d4ee981ee4abb9ad6dc1b0c"],["/archives/2020/04/index.html","4d0143992ad6cd565fda43742e552b62"],["/archives/2020/05/index.html","9b9c35bbce33968a3a4fdb149b69a021"],["/archives/2020/06/index.html","f352634a19fb852e442d1fc41ab72700"],["/archives/2020/index.html","19a155e7a97136c5fd03a5c40f6109b7"],["/archives/2020/page/2/index.html","79f530426787728357aa65541f74dabc"],["/archives/2020/page/3/index.html","30d9ff8bfd5ec3ea6c7acd4ca02c7bb0"],["/archives/index.html","72ae553f7c1859dfed2a117ca31bdd2b"],["/archives/page/2/index.html","72ae553f7c1859dfed2a117ca31bdd2b"],["/archives/page/3/index.html","72ae553f7c1859dfed2a117ca31bdd2b"],["/archives/page/4/index.html","72ae553f7c1859dfed2a117ca31bdd2b"],["/box/about/index.html","2f6ef087704c8803d780208a25ba70f0"],["/box/index.html","fca012b2219f61393f54e6dd90553f83"],["/categories/ACM解题报告/index.html","8f789cd667c725872b257e2aac2d291c"],["/categories/Algorithm/index.html","fb4360fecf35ad7f32943a7cfe1d9d7c"],["/categories/Docker/index.html","3b022ef5ad5f8e0d56e428721fa6284c"],["/categories/Hexo/index.html","7dbfd9c6f4c80ac038af6fb7cddaa394"],["/categories/Linux/index.html","411be2baba0e08eb453b051f3398e563"],["/categories/Python/index.html","650f6c46cbe72923113a6537cc10e75e"],["/categories/index.html","195c7e1e12c02fbda4abb01a255b3a14"],["/categories/可视化/index.html","3bd083f844c21f874ed2b4becfba8980"],["/categories/数据库/index.html","1f5d375c8a32ef733bda26dc3dcf635a"],["/categories/活动线报/index.html","7c95ede16eedd3759f52bf340fd69efd"],["/categories/网站开发/index.html","5d253257bf13b5d37db453af35ae23df"],["/comments/index.html","710d1c313f6ddfafb66d0138d9e9b683"],["/css/style.css","d742e92c8a989f29784e5d6ed26ad415"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","eb5847bf4dda04341243fa3f0ef8f575"],["/games/2048/index.html","f7c74ed7367fe7ddc8047f789fa7f345"],["/games/PacMan/index.html","fed7d472761823046093004699fe314e"],["/games/cat/index.html","62f92dd93f8fffa6a3f79cfaa878f607"],["/games/element/index.html","0850b284c9282fdef593e1e2049a1af6"],["/games/gobang/index.html","2b1130534d838fe326b9d8072f32f19d"],["/games/piano/index.html","2e5c6943cc7d954aee9728e8f08fff88"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","7eb3ec53ce574a14e12c0564b7044cfd"],["/js/app.js","4bda9732dace5f29688d6002791829cb"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/mylist/index.html","d10d21d089c99c174dffaadc07575427"],["/page/2/index.html","eb2611f04945f96cdb63fa26bf55270d"],["/page/3/index.html","cba72340d74da9294d81d0dc65e7f6d1"],["/page/4/index.html","991a775e9ab2a6e1ee609d7906b8ddcc"],["/post/Activity/70th/index.html","4c7ae081ef45239b958f8e4db8fec60e"],["/post/Activity/exe/index.html","4ec8656385670054f6c3b872862f517e"],["/post/Activity/jdzns/index.html","b6e254af0df27bfb5197a6e8d76a68fc"],["/post/Algorithm/Algorithm-1/index.html","4da04a01d50e239d34eaa3a6be638535"],["/post/Algorithm/Algorithm-2/index.html","52697e6df6566b1d4670cd07ff2e90da"],["/post/Algorithm/word2vec/index.html","9d1cad5c060a0f0aca9da76d93fcdc39"],["/post/CodeError/basemap/index.html","dc3304f1e708c01fd63b0bb5c798d523"],["/post/Experience/DockerShell/index.html","df6166d049e0bf500c1ac5b3950b260f"],["/post/Experience/LinuxScript/index.html","997ebc0b09499580459e4358d0481f20"],["/post/Experience/LinuxShell/index.html","9586be960dbb273d2984995a49017e9d"],["/post/Experience/MavenShell/index.html","ecdbd430d56079e2ff8184023b1f647c"],["/post/Experience/Seaborn/index.html","cbbe3f198091e3401bb5f741e18a9c3f"],["/post/Experience/SparkEnvBulid/index.html","697ae5172590758b9b4036b105fd040a"],["/post/Experience/buttonStream/index.html","a260734aced07722d37c45d52207a6ab"],["/post/Experience/centosFirewall/index.html","90fe49fff7f7a8f013e6a4f813cdf17c"],["/post/Experience/jspEnvBulid/index.html","5a52cbced797419b37485f590d64ea2e"],["/post/Experience/matplotlib-1/index.html","296e83dad0a9e8725cbae3ce0da41b8f"],["/post/Experience/matplotlib-2/index.html","a28d5292647250e7a99b3f456d7e3ca2"],["/post/Experience/sqlShell-1/index.html","3e22e7e6eebfa9f7433280f28476aa42"],["/post/Experience/sqlShell-2/index.html","dac0a0aac008e2790400c3ffadc1d566"],["/post/Experience/vpsDeftcc/index.html","dcd44832d048a41305df9878b721c005"],["/post/OJContest/2020whuShopee/index.html","7785e1f6d4adc311fa3680243d268413"],["/post/OJContest/AlgorithmNote-1/index.html","23b30db096053398dae54a35551747d9"],["/post/OJContest/AlgorithmNote-2/index.html","572225287004d179f56d39e94cab8577"],["/post/Python/Skill/Skills-1/index.html","561e9cc5a127ee306d529d5382170bf2"],["/post/Python/Skill/jupyterCreated/index.html","0214dab947bee961262c543804f42751"],["/post/Python/Visual/2020nCovVisualization/index.html","66594203c17f72a8c0431fefcb599f41"],["/post/Script/dontCry/index.html","ca01db4fd90d6ebb02d3a22b68bf15a6"],["/post/Script/zhihuPrettyGril/index.html","add4f91e1356a8c0a748500226d6b9b3"],["/post/TechShare/Bitwarden/index.html","17992f1e6ade7a3196cd7cc131736767"],["/post/TechShare/CloudreveOnDocker/index.html","f5ff35b6fab220b5a02e272291600073"],["/post/TechShare/HexColor/index.html","b407e1a81301ba656da1b44a8dfc76e6"],["/post/TechShare/HexoPersonal/index.html","f8bbdb1e51f3011812fca32be6b2d32c"],["/post/TechShare/Kettle/index.html","eb18d6a30a8150c3270ab12e9ccfa5ef"],["/post/TechShare/condaDown/index.html","ac0f782a9921fe687b4358ceddb145b8"],["/post/TechShare/videoSec/index.html","7e23b37864043e1ba87b1b087af41d8d"],["/post/hello_world/index.html","a55e475da1a5316084c0f8c802a3b989"],["/tags/ACM/index.html","87df51dba008130350e17ec9a98b92e5"],["/tags/Anaconda/index.html","e80aee702b04dded58d9ae748a90789c"],["/tags/CentOS/index.html","fbbc044c838c3327dc2a0d6d0c4ac798"],["/tags/DDOS/index.html","c304d631671cd228006d009c0c3bd442"],["/tags/HTML/index.html","4419560086aa35ab55dc46bd4a1934b2"],["/tags/HTTP-Client/index.html","7340125b155cfecb3ff0119ad6e5be4e"],["/tags/Hexo主题美化/index.html","6a4900a2699f72503d8d87370c04c520"],["/tags/JSP/index.html","bbfffa034ad823df3cf6ad4b3542fea0"],["/tags/Linux-Shell/index.html","2c3b9d2864da889e4295d1dd7702bbc6"],["/tags/Plotly/index.html","c6464e57ebff842d18b0f53c66110408"],["/tags/Python/index.html","c2aef13b91b770680c8280e2df1a90ba"],["/tags/Python可视化/index.html","bbb1c43ec9a602e4f15032f3b5b84e21"],["/tags/Python小技巧/index.html","d56052309b3069ee9572185da446a163"],["/tags/SQL/index.html","943009416f234f7ad7288c6b6b3dbd0f"],["/tags/Word2Vec/index.html","c6c41dcca68198715b33888ba2f149e9"],["/tags/Wythoff-s-game/index.html","202d695bbe0f2e2bf2d978fa9a250db8"],["/tags/basemap/index.html","9ffceb30590685f2e6a05ba949b9b4b2"],["/tags/index.html","a1f9d26e39ba107688f2a7ad75461e60"],["/tags/kettle/index.html","5fc563f665e0e8d4064f539ba28f480d"],["/tags/matplotlib/index.html","104053aa2d3f07cd230a7ea762592928"],["/tags/pyproj/index.html","ddb7577bb2ae914c0502f8de594fa24c"],["/tags/seaborn/index.html","efb67e80de8eec43719c4e1d41980963"],["/tags/spark/index.html","3d87cbfc042b018ca16c71f9ac456d4d"],["/tags/动态规划/index.html","baee41bd0b2ae2318fcf4bb6074b562a"],["/tags/大数据/index.html","d8c4af53a89f24fb4db0322f22d3e7ba"],["/tags/数据分析/index.html","1c2bf51733a93195712079bd1c6f2bc4"],["/tags/数据库/index.html","dcae544c47d92a47bcbac937e59df147"],["/tags/数论/index.html","28d85f0c5c8228475b281a64f9f80f8b"],["/tags/最优子结构/index.html","ce9a7df2481cd0e8806634ea1cce6a6f"],["/tags/爬虫/index.html","12696debdb6eb45be35f5bb6ae3f7c78"],["/tags/词向量/index.html","9b2847e3d174e5f712f1cce68f9c433f"],["/tags/贪心算法/index.html","ce8f4eb91a41973cec1368c206a18c50"],["/tags/软件资源/index.html","51b8915e725e3e1a59bacc80eb660954"],["/tags/重叠子问题/index.html","167e8fa391cb35fce65cb191a1d70f18"],["/tags/防火墙/index.html","e42cc1a0b7cc1bb0c34f26317ca5a646"]];
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







