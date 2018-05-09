'use strict';

angular.module('copayApp.controllers').controller('preferencesUnitController',
  function($rootScope, $scope, $log, configService, go) {
    var config = configService.getSync();
    this.unitName = config.wallet.settings.unitName;
    this.unitOpts = [
      // TODO : add Satoshis to bitcore-wallet-client formatAmount()
      // {
      //     name: 'Satoshis (100,000,000 satoshis = 1BTC)',
      //     shortName: 'SAT',
      //     value: 1,
      //     decimals: 0,
      //     code: 'sat',
      //   }, 
      /*{
        name: 'bits (1,000,000 bits = 1BTC)',
        shortName: 'bits',
        value: 100,
        decimals: 2,
        code: 'bit',
      }*/
      // TODO : add mBTC to bitcore-wallet-client formatAmount()
      // ,{
      //   name: 'mBTC (1,000 mBTC = 1BTC)',
      //   shortName: 'mBTC',
      //   value: 100000,
      //   decimals: 5,
      //   code: 'mbtc',
      // }
      /*, {
        name: 'BTC',
        shortName: 'BTC',
        value: 100000000,
        decimals: 8,
        code: 'btc',
      }
      , */{
        name: 'pizza',
        shortName: 'pizza',
        value: 1,
        decimals: 0,
        code: 'one',
      }
      , {
        name: 'kPizza (1,000 pizza)',
        shortName: 'kP',
        value: 1000,
        decimals: 3,
        code: 'kilo',
      }
      , {
        name: 'MPizza (1,000,000 pizza)',
        shortName: 'MP',
        value: 1000000,
        decimals: 6,
        code: 'mega',
      }
      , {
        name: 'GPizza (1,000,000,000 pizza)',
        shortName: 'GP',
        value: 1000000000,
        decimals: 9,
        code: 'giga',
      }
    ];

    this.save = function(newUnit) {
      var opts = {
        wallet: {
          settings: {
            unitName: newUnit.shortName,
            unitValue: newUnit.value,
            unitDecimals: newUnit.decimals,
            unitCode: newUnit.code,
          }
        }
      };
      this.unitName = newUnit.shortName;

      configService.set(opts, function(err) {
        if (err) $log.warn(err);
        $scope.$emit('Local/UnitSettingUpdated');
        go.preferencesGlobal();
      });

    };
    
    go.onBackButton = function(){
        console.log('units backbutton');
    };
    //console.log('topbar: '+$scope.topbar);
  });
