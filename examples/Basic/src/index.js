/**
 * Copyright (c) 2016-present, Callstack Sp z o.o.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';
import { PublisherView,SubscriberView, Session } from 'react-native-opentok';
import config from './variables';



class Basic extends Component {

  componentWillMount() {
    Session.connect(config.OPENTOK_API_KEY, config.SESSION_ID, config.PUBLISHER_TOKEN || config.SUBSCRIBER_TOKEN);
    Session.onMessageRecieved((e) => console.log(e));
  }

  state = {
    isPublisher: true,
  }

  render() {
    return (
      <View style={styles.container}>
        <SubscriberView
          apiKey="45740142"
          sessionId="1_MX40NTc0MDE0Mn5-MTQ4NDM1NjU4NzQwOX5TZnhMaWgvSjV3TUVHUGxBOFpzY0phN0x-UH4"
          token="T1==cGFydG5lcl9pZD00NTc0MDE0MiZzaWc9NjkxNjcyMjExZjY1MDFjNzg0MWZjYjhkZjI3NmVlNTBhMWQxMWM2NzpzZXNzaW9uX2lkPTFfTVg0ME5UYzBNREUwTW41LU1UUTRORE0xTmpVNE56UXdPWDVUWm5oTWFXZ3ZTalYzVFVWSFVHeEJPRnB6WTBwaE4weC1VSDQmY3JlYXRlX3RpbWU9MTQ4NDM1NjU4NyZub25jZT01NDMzNDUmcm9sZT1QVUJMSVNIRVI="
          style={{ width: 300, height: 200 }}
        />
        <PublisherView
          apiKey="45740142"
          sessionId="1_MX40NTc0MDE0Mn5-MTQ4NDM1NjU4NzQwOX5TZnhMaWgvSjV3TUVHUGxBOFpzY0phN0x-UH4"
          token="T1==cGFydG5lcl9pZD00NTc0MDE0MiZzaWc9NjkxNjcyMjExZjY1MDFjNzg0MWZjYjhkZjI3NmVlNTBhMWQxMWM2NzpzZXNzaW9uX2lkPTFfTVg0ME5UYzBNREUwTW41LU1UUTRORE0xTmpVNE56UXdPWDVUWm5oTWFXZ3ZTalYzVFVWSFVHeEJPRnB6WTBwaE4weC1VSDQmY3JlYXRlX3RpbWU9MTQ4NDM1NjU4NyZub25jZT01NDMzNDUmcm9sZT1QVUJMSVNIRVI="
          style={{ width: 300, height: 200 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Basic', () => Basic);
