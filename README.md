# Puck Vue (puck-vue)

application to train stick handling


## Basic Commands

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

## Development

To run the app in either ios or android run
```bash
quasar dev -m capacitor -T [ios|android]

..or the longer form:
quasar dev --mode capacitor --target [ios|android]
```
This will open the respective IDE (Android Studio or Xcode). From there, you can:

Select an emulator (or multiple emulators simultaneously).

Install the development app on the emulator(s).

Run the app on a real mobile or tablet device.

## WARNING

In Android Studio, you will be greeted with a message recommending to upgrade the Gradle version. DO NOT UPGRADE GRADLE as it will break the Capacitor project. Same goes for any other requested upgrades.

### Building for Production
```bash
$ quasar build -m capacitor -T [ios|android]

..or the longer form:
$ quasar build --mode capacitor --target [ios|android]

If you want a production build with debugging enabled for the UI code:

$ quasar build -m capacitor -T [ios|android] -d

..or the longer form
$ quasar build -m capacitor -T [ios|android] --debug
```
### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
