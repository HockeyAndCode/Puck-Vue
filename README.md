# Puck Vue (puck-vue)

application to train stick handling


### Basic Commands

### Install the dependencies
```bash
yarn
# or
npm install
```

### Lint the files
```bash
yarn lint
# or
npm run lint
```

### Format the files
```bash
yarn format
# or
npm run format
```

### Development

To run the app in either ios or android run

quasar dev -m capacitor -T [ios|android]

# ..or the longer form:
quasar dev --mode capacitor --target [ios|android]

It will open the IDE (Android Studio / Xcode) and from there you can manually select the emulator (or multiple ones simultaneously!) 
and install the dev app on it/them. You can also run the dev app on a real mobile/tablet device.

## WARNING

In Android Studio, you will be greeted with a message recommending to upgrade the Gradle version. DO NOT UPGRADE GRADLE as it will break the Capacitor project. Same goes for any other requested upgrades.

### Building for Production

$ quasar build -m capacitor -T [ios|android]

# ..or the longer form:
$ quasar build --mode capacitor --target [ios|android]

If you want a production build with debugging enabled for the UI code:

$ quasar build -m capacitor -T [ios|android] -d

# ..or the longer form
$ quasar build -m capacitor -T [ios|android] --debug

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
