/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-74854057'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/css/animate.min.css",
    "revision": "c4075cf02020f941bb9f0dd8989964a6"
  }, {
    "url": "assets/css/odometer.css",
    "revision": "d345025c9dcd10b083587e1a2cb95fd3"
  }, {
    "url": "assets/css/swiper.min.css",
    "revision": "8a4ebf4d3dc713d22a8835d54a58aab0"
  }, {
    "url": "assets/images/apple.png",
    "revision": "d18a495cf2ac0e72db9352ddce7eca6c"
  }, {
    "url": "assets/images/dark-bg.png",
    "revision": "cd05746ee2b347a41f779d8edaf3c528"
  }, {
    "url": "assets/images/fav-192.png",
    "revision": "8f912942b8304c2de31dcb51cec0e38c"
  }, {
    "url": "assets/images/fav-512.png",
    "revision": "60adf6d2ad09a1965dbac9836131da3c"
  }, {
    "url": "assets/images/favicon.png",
    "revision": "4280470195fe2d3540d4df9b132797ce"
  }, {
    "url": "assets/images/fb.png",
    "revision": "f42dab67c9b9de2b0e6ee188687729af"
  }, {
    "url": "assets/images/football_field.png",
    "revision": "728aab10b14e5d35636b01f9cc1c56b1"
  }, {
    "url": "assets/images/google.png",
    "revision": "f13a71f9f2b5327bf9cff63a89f61b23"
  }, {
    "url": "assets/images/latest-update-bg.png",
    "revision": "6d63c0b5f40cb3bdbf6cef3fc526cd77"
  }, {
    "url": "assets/images/latest-update-img.png",
    "revision": "acb4ef070f5a74aab542542143d1bad2"
  }, {
    "url": "assets/images/live-streaming-img.png",
    "revision": "d481c6b4afe1a8f04e48ecb3c0db1385"
  }, {
    "url": "assets/images/logo/arsenal.png",
    "revision": "e86044414038c710c0e8c354557d1c86"
  }, {
    "url": "assets/images/match-report-img.png",
    "revision": "d8fd5c6fff8a57768bf4fbabf28cedcd"
  }, {
    "url": "assets/images/news-img-1.png",
    "revision": "f4973942bd3f0b951887022c83eb2e64"
  }, {
    "url": "assets/images/news-img-2.png",
    "revision": "836df982dc9eb7fc5dad94d9c0a37080"
  }, {
    "url": "assets/images/news-img-3.png",
    "revision": "269abe9f4845ff47e6cc46682b629325"
  }, {
    "url": "assets/images/news-img-4.png",
    "revision": "39b737e2e217678dae2e0b7def5d0cc7"
  }, {
    "url": "assets/images/news-page-img.png",
    "revision": "0192e0faf1d778873190f34d1c6f57cc"
  }, {
    "url": "assets/images/onboarding-logo.png",
    "revision": "1dd3159927152cfdc720c0544dad33ca"
  }, {
    "url": "assets/images/onboarding-slider-img1.png",
    "revision": "a4939c4869dd387fb846afae2aee9268"
  }, {
    "url": "assets/images/onboarding-slider-img2.png",
    "revision": "de2eae0ac15e1449332a583dd71408d3"
  }, {
    "url": "assets/images/onboarding-slider-img3.png",
    "revision": "580db49e581c87ddfb79afec3aabc0f6"
  }, {
    "url": "assets/images/onboarding-slider-img4.png",
    "revision": "c31689589767bdda078b2047c9df2c82"
  }, {
    "url": "assets/images/player-profile-img.png",
    "revision": "6700472956f494ec2baa05da9382d5fa"
  }, {
    "url": "assets/images/player-stat-img.png",
    "revision": "4cbcc72e947a9f515b56ac42dbae0b7a"
  }, {
    "url": "assets/images/player-stats-img-1.png",
    "revision": "507826922fae996d1907fa13ede967a4"
  }, {
    "url": "assets/images/player-stats-img-2.png",
    "revision": "26f4a26bec106cda2317e1666fb7b466"
  }, {
    "url": "assets/images/player-stats-img-3.png",
    "revision": "66580792e0068e2af4ef44546cb98bf3"
  }, {
    "url": "assets/images/player-stats-img-4.png",
    "revision": "395a1ed3790921a811217757b45ed584"
  }, {
    "url": "assets/images/team-logo/ArminiaBielefeld.png",
    "revision": "56c6c9b885b67e2236849d90bacde598"
  }, {
    "url": "assets/images/team-logo/Atletico.png",
    "revision": "23b6c903123016c5feb8dfb4c5caf9af"
  }, {
    "url": "assets/images/team-logo/Augsburg.png",
    "revision": "95fb07dd9b0f1ff6dda371f6ee422b52"
  }, {
    "url": "assets/images/team-logo/BayerLeverkusen.png",
    "revision": "58923a29c7668a5cd32f497b264d51bf"
  }, {
    "url": "assets/images/team-logo/BayernMünchen.png",
    "revision": "6f07c558a0686b968bb4d43c785b73fd"
  }, {
    "url": "assets/images/team-logo/BirminghamCity.png",
    "revision": "11f1562c6c0262d31bee9cf65656f331"
  }, {
    "url": "assets/images/team-logo/BlackburnRovers.png",
    "revision": "f458c304218c96dbbc2282bec0e50dd0"
  }, {
    "url": "assets/images/team-logo/BoltonWanderers.png",
    "revision": "dd9a4e65c99cc831e70d22952f19f5cb"
  }, {
    "url": "assets/images/team-logo/Bornemouth.png",
    "revision": "a3dad346d73d3530bf48bb548b051d3f"
  }, {
    "url": "assets/images/team-logo/BorussiaMönchengladbach.png",
    "revision": "a5b03564afc4e1edcacdac283074a413"
  }, {
    "url": "assets/images/team-logo/BradfordCity.png",
    "revision": "3dcea92f52fec85cde1e445656bca1cd"
  }, {
    "url": "assets/images/team-logo/CardiffCity.png",
    "revision": "9e3eb38aa7e5e46c91336c6cc0e48380"
  }, {
    "url": "assets/images/team-logo/CharltonAthletic.png",
    "revision": "9419b13ea2f18161b84fa725f32f60fb"
  }, {
    "url": "assets/images/team-logo/Cologne.png",
    "revision": "423d65dde29ded7a5f6f44759dde03ed"
  }, {
    "url": "assets/images/team-logo/Darmstadt.png",
    "revision": "eac6af96cd265454ed7c6d7d88168a98"
  }, {
    "url": "assets/images/team-logo/DerbyCounty.png",
    "revision": "aa03a38dd4f8cc2b1696ab82c875e7b9"
  }, {
    "url": "assets/images/team-logo/Dortmund.png",
    "revision": "24791afd6dd40322ac81ac92d014bf6f"
  }, {
    "url": "assets/images/team-logo/DynamoDresden.png",
    "revision": "7a03ae6e0fff7f3ad678c7cb9d9c6205"
  }, {
    "url": "assets/images/team-logo/EintrachtBraunschweig.png",
    "revision": "dd8fb5f194fef8045c45450c4ef7af48"
  }, {
    "url": "assets/images/team-logo/EintrachtFrankfurt.png",
    "revision": "384301bf04017a81ad8e0ecf1297f92d"
  }, {
    "url": "assets/images/team-logo/ErzgebirgeAue.png",
    "revision": "ad5cb7ec6d69ea195264cb584a1fa154"
  }, {
    "url": "assets/images/team-logo/FSVMainz.png",
    "revision": "e0367d4124b8df5b7ca3b1b868565a7f"
  }, {
    "url": "assets/images/team-logo/FortunaDüsseldorf.png",
    "revision": "c720ce416ae9e740264faf5deb65dfd2"
  }, {
    "url": "assets/images/team-logo/HSV.png",
    "revision": "a9465ec88a3669480bda570306755db2"
  }, {
    "url": "assets/images/team-logo/Hannover96.png",
    "revision": "65441d3f96200665ff358a69e964b4fc"
  }, {
    "url": "assets/images/team-logo/HerthaBSC.png",
    "revision": "d50a4db22bee65a5cbe5221ddf370bd7"
  }, {
    "url": "assets/images/team-logo/Ingolstadt.png",
    "revision": "54bfc142d326e4f6d3f022e9180fc760"
  }, {
    "url": "assets/images/team-logo/Kaiserslautern.png",
    "revision": "c09880cb0baa53b5e9d5417507283635"
  }, {
    "url": "assets/images/team-logo/KarlsruherSC.png",
    "revision": "235f2dfa94c2bf58a88fbb5155a007a8"
  }, {
    "url": "assets/images/team-logo/KickersWurzburg.png",
    "revision": "0b283fef150153cc9bc6ba7cfa245a96"
  }, {
    "url": "assets/images/team-logo/Middlesbrough.png",
    "revision": "f7def67d79fd17a5fbab083272be514f"
  }, {
    "url": "assets/images/team-logo/Nürnberg.png",
    "revision": "bb0274b93f836fcf1f371ff606138180"
  }, {
    "url": "assets/images/team-logo/Queenparkrangers.png",
    "revision": "f055555e907c7d6b6c4fbc58c1f5840b"
  }, {
    "url": "assets/images/team-logo/RBLeipzig.png",
    "revision": "f906cb22fb204e7d94026ebcaffe96dc"
  }, {
    "url": "assets/images/team-logo/Reading.png",
    "revision": "e5c4991a1442e831f236da08dcf89d00"
  }, {
    "url": "assets/images/team-logo/Real Betis.png",
    "revision": "26a53439d8dc8f494ef37526b58fef42"
  }, {
    "url": "assets/images/team-logo/SCFreiburg.png",
    "revision": "9c87d70a94ccce30d640181e27aadef5"
  }, {
    "url": "assets/images/team-logo/SV_Sandhausen.png",
    "revision": "5d798dc342f0aaa3b0657e15ed8ccaf7"
  }, {
    "url": "assets/images/team-logo/Schalke.png",
    "revision": "485eb94697ad53fa188d02b7ed025d54"
  }, {
    "url": "assets/images/team-logo/SpVgg_Greuther_Fürth.png",
    "revision": "4a0f6ca37ab16968edbc16e4b82df6bb"
  }, {
    "url": "assets/images/team-logo/StPauli.png",
    "revision": "a226a5356e356e7d2c6f55ad041bef7f"
  }, {
    "url": "assets/images/team-logo/TSG_1899_Hoffenheim.png",
    "revision": "fe1cb90375bd9da12bc59cd80454bb55"
  }, {
    "url": "assets/images/team-logo/TSV_1860_München.png",
    "revision": "2d86ae6711d647bc5f53cf86e52f6735"
  }, {
    "url": "assets/images/team-logo/UEFA_Champions.jpg",
    "revision": "39bb588ed863962cdf433cded2690721"
  }, {
    "url": "assets/images/team-logo/VfB_Stuttgart.png",
    "revision": "d612b028af9f150f8cd82656ebd17420"
  }, {
    "url": "assets/images/team-logo/WiganAthletic.png",
    "revision": "0f0499fab94af81365ddbe80774258da"
  }, {
    "url": "assets/images/team-logo/Wolfsburg.png",
    "revision": "26a1037c57a53f3aa2d3212c3476fe43"
  }, {
    "url": "assets/images/team-logo/Wolverhampton.png",
    "revision": "d57a8105648732345741db7ebd4b4379"
  }, {
    "url": "assets/images/team-logo/arsenal.png",
    "revision": "73d1a2d0f0167b23d472d21815e6819c"
  }, {
    "url": "assets/images/team-logo/astonvilla.png",
    "revision": "c59a964195060d69699c86d77c6baca0"
  }, {
    "url": "assets/images/team-logo/barcelona.png",
    "revision": "aa052cca714918c093693ea6b5ce8354"
  }, {
    "url": "assets/images/team-logo/blackpool.png",
    "revision": "f9edc881871ec1daa4223cd85ef61cae"
  }, {
    "url": "assets/images/team-logo/burnley.png",
    "revision": "cc15e6c26e84cae5c8ebf258b5454faf"
  }, {
    "url": "assets/images/team-logo/cadiz.png",
    "revision": "8e0b0d682f1eef499b91367b599e6479"
  }, {
    "url": "assets/images/team-logo/celta.png",
    "revision": "6becb041f146c660ada6b260703c2539"
  }, {
    "url": "assets/images/team-logo/chelsea.png",
    "revision": "6166460cf5d4729135d714ae272425af"
  }, {
    "url": "assets/images/team-logo/copa-america.png",
    "revision": "bec8caa9fb39d947ed9390817377bb38"
  }, {
    "url": "assets/images/team-logo/crystalPalace.png",
    "revision": "7883b443051ed1d1df92619c080177a2"
  }, {
    "url": "assets/images/team-logo/europa-league.png",
    "revision": "69e1c8ada136b95a08a5c16a01e95433"
  }, {
    "url": "assets/images/team-logo/everton.png",
    "revision": "9ac8a350a1f2f031fa01effb4d3de29d"
  }, {
    "url": "assets/images/team-logo/fcHeidenheim.png",
    "revision": "1899d0ec5ef47d812f08fafb1619b9d8"
  }, {
    "url": "assets/images/team-logo/fulham.png",
    "revision": "331bd37284184f0a1baf1b0755db5166"
  }, {
    "url": "assets/images/team-logo/granada.png",
    "revision": "1869a0987afd32ec2687c1f531d421e2"
  }, {
    "url": "assets/images/team-logo/hullcity.png",
    "revision": "6b0499ea96dc7f31f464669230690df3"
  }, {
    "url": "assets/images/team-logo/juventus.png",
    "revision": "ca6c35a6d234e93f07fa07d753f2479a"
  }, {
    "url": "assets/images/team-logo/leedsUnited.png",
    "revision": "d1dc536cb512e3e0128de96ef506ff9a"
  }, {
    "url": "assets/images/team-logo/leicester.png",
    "revision": "d1f56fe42ee98a1c6a01ee650f405d59"
  }, {
    "url": "assets/images/team-logo/levante.png",
    "revision": "2119c6cea642b1ba03c842537199901e"
  }, {
    "url": "assets/images/team-logo/liverpool.png",
    "revision": "a6d704f157024247713d6ff8ffc657eb"
  }, {
    "url": "assets/images/team-logo/manCity.png",
    "revision": "b2b1033fc724ee53a4890b4c90ec873f"
  }, {
    "url": "assets/images/team-logo/manchester.png",
    "revision": "6d3fbc8a87dccdc5cfa1cf12ee967629"
  }, {
    "url": "assets/images/team-logo/newcastleUnited.png",
    "revision": "2e56680fdf0cce5941329876045d6d07"
  }, {
    "url": "assets/images/team-logo/norwichcity.png",
    "revision": "b6b5b543d6e00ce0e1c4fb3ec7833b13"
  }, {
    "url": "assets/images/team-logo/portsmounth.png",
    "revision": "461324b9b75059f582c1fcd1a80f4d27"
  }, {
    "url": "assets/images/team-logo/premier-league-new-logo.png",
    "revision": "92a732b84fc11016dfbe30af0a0a0304"
  }, {
    "url": "assets/images/team-logo/real socieded.png",
    "revision": "c85fdc7d7862cd6d8483886af1afc7a9"
  }, {
    "url": "assets/images/team-logo/realmadrid.png",
    "revision": "4f1d757de1602c014b7325d3cd189981"
  }, {
    "url": "assets/images/team-logo/sevilla.png",
    "revision": "cd9b3e745a55dbc47344eaf6de1ed12d"
  }, {
    "url": "assets/images/team-logo/southampton.png",
    "revision": "d4659953dc352802d4f44164b0c9eb9f"
  }, {
    "url": "assets/images/team-logo/stokecity.png",
    "revision": "59400bd9680638b70c1c6c7e6a486f89"
  }, {
    "url": "assets/images/team-logo/sunderland.png",
    "revision": "3e6586d49b35f94a4e8bf7cc775ffd16"
  }, {
    "url": "assets/images/team-logo/swanseaCity.png",
    "revision": "75f90951913e7773e23b98a07758147e"
  }, {
    "url": "assets/images/team-logo/tottenham.png",
    "revision": "e2e9b0b07dca1ed776eab4b429346f89"
  }, {
    "url": "assets/images/team-logo/unionBerlin.png",
    "revision": "a4b979fc91f6cfbf52290c6f4c8ec63f"
  }, {
    "url": "assets/images/team-logo/valencia.png",
    "revision": "86d4c9857e12ec1da401b98918f19ff9"
  }, {
    "url": "assets/images/team-logo/villareal.png",
    "revision": "50d12c59f3678d94f8727e241864912b"
  }, {
    "url": "assets/images/team-logo/watfoed.png",
    "revision": "374d5b91b89ddacc788359de1a764a4d"
  }, {
    "url": "assets/images/team-logo/westbromwich.png",
    "revision": "070fef55ab6b28029a0f3b891e1baad4"
  }, {
    "url": "assets/images/team-logo/westham.png",
    "revision": "c6333a39a1b839bd5e6e3762d4931207"
  }, {
    "url": "assets/images/team-logo/worldcup.png",
    "revision": "239dc7eec79def7817e085786e38032b"
  }, {
    "url": "assets/images/trophy.png",
    "revision": "22c7a0aea2d0df5722bef9ef8b5a3b31"
  }, {
    "url": "assets/images/user_img.jpg",
    "revision": "8942fdba26bbd5cb25d8bc187506580f"
  }, {
    "url": "assets/images/video-page-img.png",
    "revision": "92533cbb6337f2c41fc5be0d61a823f3"
  }, {
    "url": "assets/images/video-post-img-1.png",
    "revision": "b32caae5f7fb84782313e1d3516f3c05"
  }, {
    "url": "assets/images/white-bg.png",
    "revision": "ce026206e483ed76e583f6fd8750b912"
  }, {
    "url": "assets/js/main.js",
    "revision": "0fb93737529a6d7fa30a2751102f1cb2"
  }, {
    "url": "assets/js/plugins/apexcharts-custom.js",
    "revision": "d33438ee54d9a9949bb7148e0da8db8f"
  }, {
    "url": "assets/js/plugins/apexcharts.min.js",
    "revision": "f5e7b26f14bea2d1e4954e52f91a34c9"
  }, {
    "url": "assets/js/plugins/opt-form.js",
    "revision": "40f0e272bc66850cc9a7d2aaf6df2904"
  }, {
    "url": "assets/js/plugins/plugin-custom.js",
    "revision": "05e4f17c9cd31e1a37086e9f2160d5be"
  }, {
    "url": "assets/js/plugins/plugins.js",
    "revision": "d39e87756aec6ee74e98d33ffceed130"
  }, {
    "url": "assets/js/plugins/wow.min.js",
    "revision": "130ea3c4827210a8fcda0853ee3605b5"
  }, {
    "url": "assets/js/service-worker-settings.js",
    "revision": "127a98dcfeb82077387fd089917f9dc5"
  }, {
    "url": "complete-profile.html",
    "revision": "c686ea1e33d038005915e9d576b06170"
  }, {
    "url": "create-new-password.html",
    "revision": "1271c6c539829360bfeaff962cd45e35"
  }, {
    "url": "favourite-competitions.html",
    "revision": "59c3f1b7fa4c776ff22c1706e097f121"
  }, {
    "url": "favourite-matches.html",
    "revision": "9d253c8e5723d7e9f75ff55fdcc82f3b"
  }, {
    "url": "favourite-teams.html",
    "revision": "b453f4c12359cb119bc3dbbe36fdc43a"
  }, {
    "url": "follow-competitions.html",
    "revision": "393a55d86685ef88a21d2051f059816d"
  }, {
    "url": "follow-teams.html",
    "revision": "346acfbd9d52e948ef4683673cbc5bd5"
  }, {
    "url": "forget-password.html",
    "revision": "2fbb0402a3d9a61fdd6b8bb48b19c34f"
  }, {
    "url": "general-settings.html",
    "revision": "8c0cbae40632702d2312e1a0d532cd82"
  }, {
    "url": "help-center.html",
    "revision": "3a78d1c87cc892889a062739b2c04a03"
  }, {
    "url": "home.html",
    "revision": "f99f69bd58fecace2491241c91f841ff"
  }, {
    "url": "index.html",
    "revision": "be47e1f22e6f2d701871c0d182127a8c"
  }, {
    "url": "index.js",
    "revision": "5713475768adbf215fb08ff43ac4259d"
  }, {
    "url": "language.html",
    "revision": "a4f3e3152d57c80c7416c6136afa90dd"
  }, {
    "url": "league-news.html",
    "revision": "b9c07711547f198d8628232aa6a633a0"
  }, {
    "url": "league-table.html",
    "revision": "f576460e9a8ccf91c98d2ac0dd7d108e"
  }, {
    "url": "live-match.html",
    "revision": "9feb2c899fd321bb2eae585dee974647"
  }, {
    "url": "manifest.json",
    "revision": "f0f94cbbab5e956e10ab6854afe804a9"
  }, {
    "url": "match-h2h.html",
    "revision": "177394a8b23f5473448a422accdfc713"
  }, {
    "url": "match-info.html",
    "revision": "2fb9457d0d171bc36c401c20cbd9d75a"
  }, {
    "url": "match-lineup.html",
    "revision": "b5b2a6a220fd9b189810a11e55a226b9"
  }, {
    "url": "match-report.html",
    "revision": "52a80889efa8b3d4be5ad8aef41b8d58"
  }, {
    "url": "match-stats.html",
    "revision": "3a0e25113fc68896b51e3199a889bc6b"
  }, {
    "url": "match-summery.html",
    "revision": "48afbf175535bd28c0531d2874937527"
  }, {
    "url": "news-details.html",
    "revision": "7f82f56631e361dc91e661486d84fff5"
  }, {
    "url": "news-page.html",
    "revision": "86048e6d475797b3fb4a13d178b7ea8d"
  }, {
    "url": "notifications-settings.html",
    "revision": "408782287322596e79e7b755734b4c1e"
  }, {
    "url": "password-reset-successful.html",
    "revision": "b4d5639cf3579248adf9085f79d06d7a"
  }, {
    "url": "personal-info.html",
    "revision": "db7e15ed257866eec1ad7d41421e2988"
  }, {
    "url": "player-profile.html",
    "revision": "eb9ddf02fe3d739135a106841b8aa7f2"
  }, {
    "url": "premier-league-matches.html",
    "revision": "aa285e52d5a64670ea020001eb97ff06"
  }, {
    "url": "premier-league-news.html",
    "revision": "4cfe7d3ece3bdbc88dcbb1e1a8918c2e"
  }, {
    "url": "premier-league-overview.html",
    "revision": "ad6001edf63816f3e8ce324ded22a415"
  }, {
    "url": "premier-league-player-stats.html",
    "revision": "d922d43814b06e46047a55a5a41636c0"
  }, {
    "url": "premier-league-table.html",
    "revision": "dfd3c8ffcbd3a8104a1a4a2651d88be8"
  }, {
    "url": "premier-league-team-stats.html",
    "revision": "b7cb244783c05137809c29637686ecc5"
  }, {
    "url": "premier-league-videos.html",
    "revision": "3f1e1abf3c5cf8756cace9ed1cd21b6a"
  }, {
    "url": "search.html",
    "revision": "c344037a9f0ffaa0d31ab0dfd5bbf9a2"
  }, {
    "url": "security.html",
    "revision": "722866b187d755ba137937da47ff982d"
  }, {
    "url": "set-notifications.html",
    "revision": "08b0f8a523bf9161402b4cbc92849713"
  }, {
    "url": "settings.html",
    "revision": "be15aa48a92f04d2770c3436e6959c9e"
  }, {
    "url": "sign-in.html",
    "revision": "e86a17e0004c32c10fb18cb56e4a520a"
  }, {
    "url": "sign-up-successful.html",
    "revision": "edbf4f831bb6bde242c794006b673245"
  }, {
    "url": "sign-up.html",
    "revision": "6d2b3f1cc26ada47e63178932e507425"
  }, {
    "url": "style.css",
    "revision": "625012b74810c12ba24c99ef3c404ede"
  }, {
    "url": "team-matches.html",
    "revision": "7d3c713eb13fdbf130498b870be09abd"
  }, {
    "url": "team-overview.html",
    "revision": "7d449d901ad1c5b61d48a0e0defd4cf9"
  }, {
    "url": "team-stats.html",
    "revision": "db64c683c9a072f522b898d34a1f8367"
  }, {
    "url": "terms-conditions.html",
    "revision": "384959d9cc2cbda23d43fa53cdf81fc8"
  }, {
    "url": "verify-otp.html",
    "revision": "5516e8107824a22b30e0223cb9ad2b6f"
  }, {
    "url": "video-details.html",
    "revision": "7305052b9a6697f7a03e7bc80b27df54"
  }, {
    "url": "video-page.html",
    "revision": "b51efaea5c5cb6c18347c6cd55c464a1"
  }], {});

}));
