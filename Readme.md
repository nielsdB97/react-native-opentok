react-native-opentok
====================

> React Native SDK for OpenTok platform.

## Installation

### Requirements
- RN >= 0.29.0

### iOS

To install this package, you need Cocoapods.
1. Install Cocoapods
2. Install this package using `npm install`
3. Insert the following line into your `Podfile`

  `pod 'react-native-opentok',  :path => '../node_modules/react-native-opentok'`
4. Run `pod install`


### Android


1. In your `android/app/build.gradle` add:
```groovy
...
dependencies {
  ...
  compile project(':react-native-opentok')
  compile 'com.opentok.android:opentok-android-sdk:2.8.+'
}
```

2. In your `android/settings.gradle` add:
```groovy
...
include ':react-native-opentok'
project(':react-native-opentok').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-opentok/android')
```

3. In your application object, add:
```java
import io.callstack.react.opentok.MainPackage;
...

    @Override protected List<ReactPackage> getPackages() {
      return Arrays.asList(
          ...
          new MainPackage()
        );
    }
```

### Props

Prop | Type  
------------ | -------------
apiKey | string
sessionId | string
token | string
------------ | -------------
spinnerContainerStyle | object || number
------------ | -------------
onPublishStart | function
onPublishError | function
onPublishStop | function
------------ | -------------
onSubscribeStart | function
onSubscribeError | function
onSubscribeStop | function

### Basic usage

#### Publisher

```js
import { PublisherView } from 'react-native-opentok';

export default function Publisher() {
  return (
    <PublisherView
      apiKey={OPENTOK_API_KEY}
      sessionId={OPENTOK_SESSION_ID}
      token={OPENTOK_PUBLISHER_TOKEN}
      style={{ width: 300, height: 200 }}
    />
  );
}
```

#### Subscriber

```js
import { SubscriberView } from 'react-native-opentok';

export default function Subscriber() {
  return (
    <SubscriberView
      apiKey={OPENTOK_API_KEY}
      sessionId={OPENTOK_SESSION_ID}
      token={OPENTOK_SUBSCRIBER_TOKEN}
      style={{ width: 300, height: 200 }}
    />
  );
}
```

#### Signaling

```js
import { Session } from 'react-native-opentok';

Session.connect(OPENTOK_API_KEY, SESSION_ID, PUBLISHER_TOKEN || SUBSCRIBER_TOKEN);
Session.onMessageRecieved((e) => console.log(e));
Session.sendMessage('message');
```

### Running example project

```bash
$ cd examples/Basic && npm i && npm start
```


> callstack.io
