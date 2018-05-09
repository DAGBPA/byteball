DAGPizza is a wallet for storage and transfer of decentralized value.  See [p.top](http://p.top/).

## Binary Downloads

[p.top](http://p.top/)

## Main Features

TBD

## Installation

Download and install [NW.js v0.14.7 LTS](https://dl.nwjs.io/v0.14.7) and [Node.js v5.12.0](https://nodejs.org/download/release/v5.12.0/).  These versions are recommended for easiest install but newer versions will work too.  If you already have another version of Node.js installed, you can use [NVM](https://github.com/creationix/nvm) to keep both.

Clone the source:

```sh
git clone https://github.com/DAGBPA/dag-pizza.git
cd dag-pizza
```

If you are building for testnet, switch to testnet branch:
```sh
git checkout testnet
```

Install [bower](http://bower.io/) and [grunt](http://gruntjs.com/getting-started) if you haven't already:

```sh
npm install -g bower
npm install -g grunt-cli
```

Build DAGPizza:

```sh
bower install
npm install
grunt
```
If you are on Windows or using NW.js and Node.js versions other than recommended, see [NW.js instructions about building native modules](http://docs.nwjs.io/en/latest/For%20Users/Advanced/Use%20Native%20Node%20Modules/).

After first run, you'll likely encounter runtime error complaining about node_sqlite3.node not being found, copy the file from the neighboring directory to where the program tries to find it, and run again. (e.g. from `dag-pizza/node_modules/sqlite3/lib/binding/node-v47-darwin-x64` to `dag-pizza/node_modules/sqlite3/lib/binding/node-webkit-v0.14.7-darwin-x64`)

Then run DAGPizza desktop client:

```sh
/path/to/your/nwjs/nwjs .
```

## Build DAGPizza App Bundles

All app bundles will be placed at `../dagpizzabuilds` dir, so create it first: `mkdir -p ../dagpizzabuilds`


### Android
- Install jdk1.8 (9 and higher won't work)
- Install Android SDK (from Android Studio)
- Run `make android-debug`
  * In case of `could not find gradle wrapper within android sdk` error, download Android SDK tools package v25:
    * http://dl-ssl.google.com/android/repository/tools_r25.2.5-macosx.zip
    * http://dl-ssl.google.com/android/repository/tools_r25.2.5-windows.zip

  and extract to android_sdk_folder/ (should replace ./tools folder).

### iOS

- Install Xcode 7 (or newer)
- Install Cordova 6 `npm install cordova@6 -g`
- Run `make ios-debug`
  * In case of ios-deploy missing error: `npm install -g ios-deploy`
  * In case of `DeviceSupport` missing error, run `cd /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport/ && sudo ln -s 10.3.1\ \(14E8301\)/ 10.3`
  * If you encounter 'bitcore' not found after app launch, install it also `npm install bitcore-lib` and remove `../dapizzabuilds/project-IOS` folder completely, then rerun make again.
  * On code signing error, open Xcode project `../dagpizzabuilds/project-IOS/platforms/ios/DAGPizza.xcodeproj` in Xcode, open project properties, select DAGPizza target and set your AppleID account as a team. Xcode may also ask you to change bundle identifier to be unique, just append any random string to 'org.dagpizza.wallet' bundle identifier.

### macOS

- `grunt desktop`
- copy `node_modules` into the app bundle ../dapizzabuilds/DAGPizza/osx64/DAGPizza.app/Contents/Resources/app.nw, except those that are important only for development (karma, grunt, jasmine)
- `grunt dmg`

### Windows

- `grunt desktop`
- copy `node_modules` into the app bundle ../dapizzabuilds/DAGPizza/win64, except those that are important only for development (karma, grunt, jasmine)
- `grunt inno64`

### Linux

- `grunt desktop`
- copy `node_modules` into the app bundle ../dapizzabuilds/DAGPizza/linux64, except those that are important only for development (karma, grunt, jasmine)
- `grunt linux64`


## About DAG Pizza

TBD

## DAG Pizza Backups and Recovery

DAG Pizza uses a single extended private key for all wallets, BIP44 is used for wallet address derivation.  There is a BIP39 mnemonic for backing up the wallet key, but it is not enough.  Private payments and co-signers of multisig wallets are stored only in the app's data directory, which you have to back up manually:

* macOS: `~/Library/Application Support/dag-pizza`
* Linux: `~/.config/dag-pizza`
* Windows: `%LOCALAPPDATA%\dag-pizza`


## Translations

DAG Pizza uses standard gettext PO files for translations and [Crowdin](https://crowdin.com/project/dagpizza) as the front-end tool for translators. To join our team of translators, please create an account at [Crowdin](https://crowdin.com) and translate the DAG Pizza documentation and application text into your native language.

To download and build using the latest translations from Crowdin, please use the following commands:

```sh
cd i18n
node crowdin_download.js
```

This will download all partial and complete language translations while also cleaning out any untranslated ones.


## Support

* [GitHub Issues](https://github.com/DAGBPA/dag-pizza/issues)
  * Open an issue if you are having problems with this project
* [Email Support](mailto:bitcoinpizza.bpa@gmail.com)

## Credits

The GUI is based on [Copay](https://github.com/bitpay/copay), the most beautiful and easy to use Bitcoin wallet.

## License

MIT.
