// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

  chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.set({singleAmount: 2}, function() {});    
	
	chrome.storage.local.set(
	{
		piggyBanks: [
'https://www.siepomaga.pl/skarbonki/devhelpmikolaj/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mercedesautocentrumdlamikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/httpswww-siepomaga-plmikolaj-sma/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/imionadlamikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/stowplatmikolaj/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/groszdogroszadlamikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolajowe-urodziny-roberta/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolajmusiwygrac/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/zbiorka-mikolaj-od-tomka/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/konkursleba/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/maxfornicolas/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/kocyk-rycerza/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/zolnierzeipracownicywp/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/5dlamikusia/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/rozizbiera/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/sulerak/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/neurosyspomaga/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/30aga/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/rycerzeokraglejcebuli/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/urodzinowa-skarbonka-mikolaj/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/prezentulimikolajowi/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/drobniaki/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/rycerz-mikolaj/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolaju-walcz/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikus-sma/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/pizza-6-dla-mikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/30dlarycerza/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikusiowy-mis/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/strazacynaratunek/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/sokzrycerzemmikolajem/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/kasiaiprzyjaciele/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/karteczki-dla-mikiego/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/urodzinowomikolajowi/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/kleszczele30082020/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/porankizmalymrycerzem/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolaj-sma-skarbonka/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/daniel-dla-mikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/imieniny-tereni/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikusiowa-kawiarenka/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolajdlamikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/dawid-dla-mikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/creativemargaret-ice-breakers/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/pomagamy-mikolajowi/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/zlotowkamawielkamoc/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/tomaszs/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/dietazmikolajem/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/krzysiek36-dla-mikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/dla-mikolaja-karelus/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/smacznepomaganiemikolajowikarelusowi/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/rycerzmikolajwalczyzesmokiem/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/aniurodziny/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/smakolykidlamikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/adam-dla-mikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/wplac10zl-mikolaj/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/fani-marvela/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolajuzyj/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/urodzinowodlamikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/sakiewkadlamikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/moc-milosci/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/zlotylos/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikichallenge/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/policjancinarstunek/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/fraszka/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolaj9zl/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/uurodzinowa-skarbonka-marzeny/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/rycerzmikolaj/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/ekipacolosseum/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/alltheworldwithmiki/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/pawieoczko/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolajlajkowanie/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/dzielnyrycerzmikus/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/sernik-dla-mikolaja/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/zabawydokawymikolaj/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/wypiekidlarycerza/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolajsma/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/koncoweczki-do-zbioreczki/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolaj-sma-03/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolaj-sma-02/koszyk/dodaj',
'https://www.siepomaga.pl/skarbonki/mikolaj-sma-01/koszyk/dodaj'
				]
	}, function() {});
	
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'siepomaga.pl'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
