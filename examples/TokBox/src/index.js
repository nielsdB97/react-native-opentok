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
  Platform
} from 'react-native';
import { PublisherView, SubscriberView, Session } from 'react-native-opentok';
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
    if(Platform.OS == 'ios') {
      return (
        <View style={styles.container}>
          <SubscriberView
            apiKey={config.OPENTOK_API_KEY}
            sessionId={config.SESSION_ID}
            token={config.TOKEN}
            style={{ width: 300, height: 200 }}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SubscriberView
            apiKey={config.OPENTOK_API_KEY}
            sessionId={config.SESSION_ID}
            token={config.TOKEN}
            style={{ width: 300, height: 200 }}
          />
          <PublisherView
            apiKey={config.OPENTOK_API_KEY}
            sessionId={config.SESSION_ID}
            token={config.TOKEN}
            style={{ width: 300, height: 200 }}
          />
        </View>
      );
    }
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

AppRegistry.registerComponent('TokBox', () => Basic);
