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
    "url": "complete-profile.html",
    "revision": "a89dccd024d038810eeb6d29de9eaa0e"
  }, {
    "url": "create-new-password.html",
    "revision": "6f6fe29109a1b631c453ceb218deaace"
  }, {
    "url": "favourite-competitions.html",
    "revision": "08794abc3a2c55baaad93410a75e2571"
  }, {
    "url": "favourite-matches.html",
    "revision": "de9745280d7aa8b7cbc7cb4150e56c3e"
  }, {
    "url": "favourite-teams.html",
    "revision": "2c2ae11c29c8d675f2393e82ea709f5a"
  }, {
    "url": "follow-competitions.html",
    "revision": "51ad5f474424a004d3189bcf6177cd4c"
  }, {
    "url": "follow-teams.html",
    "revision": "da219908f49a685ec7628da28e1950c4"
  }, {
    "url": "forget-password.html",
    "revision": "d443c15a450d923be314cbbbc48c553d"
  }, {
    "url": "general-settings.html",
    "revision": "89dd8e3538ce4550e3bff19b3ad5dfdf"
  }, {
    "url": "help-center.html",
    "revision": "0ad98d5310eb5cb9cf675719b9e15850"
  }, {
    "url": "home.html",
    "revision": "82f546bd32bc2d74c43fe4c8f6f5e379"
  }, {
    "url": "index.html",
    "revision": "fce9f71996062d60d64105272f848247"
  }, {
    "url": "index.js",
    "revision": "5713475768adbf215fb08ff43ac4259d"
  }, {
    "url": "language.html",
    "revision": "6e0346fe8d4762ec17031f826c11a48d"
  }, {
    "url": "league-news.html",
    "revision": "86de5f64ca9e4cd98bf35554eff92cd9"
  }, {
    "url": "league-table.html",
    "revision": "439118f32880d801de3744a4cce2d2ec"
  }, {
    "url": "live-match.html",
    "revision": "3492c3113b1ee5fbcbb194ec09640955"
  }, {
    "url": "manifest.json",
    "revision": "f0f94cbbab5e956e10ab6854afe804a9"
  }, {
    "url": "match-h2h.html",
    "revision": "789f4eb5631f4b10ac01edb88de071e5"
  }, {
    "url": "match-info.html",
    "revision": "6f65a4e0930d553c84aac5a6224883e1"
  }, {
    "url": "match-lineup.html",
    "revision": "d8450227856cad56f2711bd97c684c6c"
  }, {
    "url": "match-report.html",
    "revision": "081c0d738d0dbb48c014f4f65931b670"
  }, {
    "url": "match-stats.html",
    "revision": "621ab05fb58db7c949b85607227b4d5a"
  }, {
    "url": "match-summery.html",
    "revision": "a8b6f2932d4ca24521249ad17c0c19e3"
  }, {
    "url": "news-details.html",
    "revision": "506ebb6922679d21af858981b158c0a3"
  }, {
    "url": "news-page.html",
    "revision": "38b0c7abaaad3f05a61003c51a43acb7"
  }, {
    "url": "notifications-settings.html",
    "revision": "97a3ba4d15ac4bf24a8287e66fa0b668"
  }, {
    "url": "password-reset-successful.html",
    "revision": "8c4ed930b158be103cf5c53c8bd0c586"
  }, {
    "url": "personal-info.html",
    "revision": "67a381a9fa54edbe0befd0cd8d2bcbf7"
  }, {
    "url": "player-profile.html",
    "revision": "48f8debf9d73edfd19dcaaac6e33e2af"
  }, {
    "url": "premier-league-matches.html",
    "revision": "5a5fb79cc770a3a1b32b616ae5b1ab54"
  }, {
    "url": "premier-league-news.html",
    "revision": "9b7d25f43f5c3f2de2c0367fc3339c69"
  }, {
    "url": "premier-league-overview.html",
    "revision": "2be638cd147599592589e3a039290d34"
  }, {
    "url": "premier-league-player-stats.html",
    "revision": "b9872fabb9a6de36aa2eccd1a92fc61b"
  }, {
    "url": "premier-league-table.html",
    "revision": "635e652f51206796b6769c5560274c36"
  }, {
    "url": "premier-league-team-stats.html",
    "revision": "a39d0bffd0d3f95af48226f3637dfd5b"
  }, {
    "url": "premier-league-videos.html",
    "revision": "09f9109ba925e5f9d681ebde66c9461d"
  }, {
    "url": "search.html",
    "revision": "268c6686c3c83a8e671370f2d57e399f"
  }, {
    "url": "security.html",
    "revision": "04c84ae5f0801ab186af2828b9e845a7"
  }, {
    "url": "set-notifications.html",
    "revision": "4e29c2d268ac8f17d0b4e4b4ce30651e"
  }, {
    "url": "settings.html",
    "revision": "938f85326eeaccc04dcefa6fc1914af4"
  }, {
    "url": "sign-in.html",
    "revision": "d15eb5a264d9d87dd3cbeedb1d7f9ad7"
  }, {
    "url": "sign-up-successful.html",
    "revision": "3c66abd21805672d743e195a883e8ce1"
  }, {
    "url": "sign-up.html",
    "revision": "f2461aab44b7deaed7ecd14499d40f92"
  }, {
    "url": "style.css",
    "revision": "625012b74810c12ba24c99ef3c404ede"
  }, {
    "url": "team-matches.html",
    "revision": "b5e29940c03c7d88a4c38e4562c111bf"
  }, {
    "url": "team-overview.html",
    "revision": "00a2708b9ebbf52b73a81e61669c7d86"
  }, {
    "url": "team-stats.html",
    "revision": "72835a69acc0d809d3c8e8f8ce8adefb"
  }, {
    "url": "terms-conditions.html",
    "revision": "de9490f143b9fd5e781f28826ff4fc73"
  }, {
    "url": "verify-otp.html",
    "revision": "c8af179d0c7247539c02232f3cd62d7c"
  }, {
    "url": "video-details.html",
    "revision": "035d04f2d58d1f7467912926c28583b0"
  }, {
    "url": "video-page.html",
    "revision": "0401413688b2e5e9e5dfcb1ade1207ca"
  }], {});

}));
