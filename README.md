# rgbit

### OSX development environment set up

Follow instructions to set up React Native <ahref="https://facebook.github.io/react-native/docs/getting-started.html">here</a>, choose "Building Projects with Native Code" tab and target IOS.
```
// Install deps. with yarn, see https://yarnpkg.com/en/ alternatively npm install
yarn
// Run on Ios
react-native run-ios
// Run on Andriod (osx)
/Users/<your-name>/Library/Android/sdk/tools/emulator -list-avds
/Users/<your-name>/Library/Android/sdk/tools/emulator -avd <your-avd> -netdelay none -netspeed full
react-native run-android
```
