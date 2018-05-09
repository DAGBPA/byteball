VERSION=`cut -d '"' -f2 $BUILDDIR/../version.js`


cordova-base:
	grunt dist-mobile

# ios:  cordova-base
# 	make -C cordova ios
# 	open cordova/project/platforms/ios/Copay
#
# android: cordova-base
# 	make -C cordova run-android
#
# release-android: cordova-base
# 	make -C cordova release-android
#
wp8-prod:
	cordova/build.sh WP8 --clear
	cordova/wp/fix-svg.sh
	echo -e "\a"

wp8-debug:
	cordova/build.sh WP8 --dbgjs
	cordova/wp/fix-svg.sh
	echo -e "\a"

ios-prod:
	cordova/build.sh IOS --clear
	cd ../dagpizzabuilds/project-IOS && cordova build ios
#	open ../dagpizzabuilds/project-IOS/platforms/ios/DAGPizza.xcodeproj

ios-debug:
	cordova/build.sh IOS --dbgjs
	cd ../dagpizzabuilds/project-IOS && cordova build ios
	open ../dagpizzabuilds/project-IOS/platforms/ios/DAGPizza.xcodeproj

android-prod:
	cordova/build.sh ANDROID --clear
#	cp ./etc/beep.ogg ./cordova/project/plugins/phonegap-plugin-barcodescanner/src/android/LibraryProject/res/raw/beep.ogg
	cd ../dagpizzabuilds/project-ANDROID && cordova run android --device
	
android-prod-fast:
	cordova/build.sh ANDROID
	cd ../dagpizzabuilds/project-ANDROID && cordova run android --device

android-debug:
	cordova/build.sh ANDROID --dbgjs --clear
#	cp ./etc/beep.ogg ./cordova/project/plugins/phonegap-plugin-barcodescanner/src/android/LibraryProject/res/raw/beep.ogg
	cd ../dagpizzabuilds/project-ANDROID && cordova run android --device

android-debug-fast:
	cordova/build.sh ANDROID --dbgjs
#	cp ./etc/beep.ogg ./cordova/project/plugins/phonegap-plugin-barcodescanner/src/android/LibraryProject/res/raw/beep.ogg
	cd ../dagpizzabuilds/project-ANDROID && cordova run android --device
#	cd ../dagpizzabuilds/project-ANDROID && cordova build android