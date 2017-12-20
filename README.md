# RGBit

### OSX development environment set up

Follow instructions to set up React Native see https://facebook.github.io/react-native/docs/getting-started.html choose "Building Projects with Native Code" tab and target IOS.

Clone
```
git clone https://github.com/bensinjin/rgbit.git
cd rgbit
```
Install deps. with yarn, see https://yarnpkg.com/en/ alternatively you can npm install
```
yarn
```
Run on Ios
```
react-native run-ios
```
Run on Andriod
```
/Users/<your-name>/Library/Android/sdk/tools/emulator -list-avds
/Users/<your-name>/Library/Android/sdk/tools/emulator -avd <your-avd> -netdelay none -netspeed full
react-native run-android
```
