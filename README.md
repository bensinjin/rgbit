# RGBit

### OSX development environment set up

Follow instructions to set up React Native see https://facebook.github.io/react-native/docs/getting-started.html choose "Building Projects with Native Code" tab and target IOS. Only the "Installing dependencies" step is required.

Clone
```
git clone https://github.com/bensinjin/rgbit.git
cd rgbit
```
Install deps. with yarn, see https://yarnpkg.com/en/docs/install
```
yarn
```
Alternatively, install dependencies with npm, see https://www.npmjs.com/get-npm
```
npm install
```
Run on IOS (if you targetted IOS)
```
react-native run-ios
```
Run on Android (if you targetted Android)
```
/Users/<your-name>/Library/Android/sdk/tools/emulator -list-avds
/Users/<your-name>/Library/Android/sdk/tools/emulator -avd <your-avd> -netdelay none -netspeed full
react-native run-android
```
