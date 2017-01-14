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
  Platform,
  Text, Switch,
} from 'react-native';
import {  PublisherView, SubscriberView, Session } from 'react-native-opentok';
import config from './variables';



class Basic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPublisher: false
    };
  }
  componentWillMount() {
    Session.connect(config.OPENTOK_API_KEY, config.SESSION_ID, config.TOKEN);
    Session.onMessageRecieved((e) => console.log(e));
  }
  render() {
    const { isPublisher } = this.state;
    return (
      <View style={styles.container}>
        <Text onPress={() => { Session.sendMessage('test'); }}>
          {isPublisher ? 'Publisher' : 'Subscriber'}
        </Text>
        {
          isPublisher ? (
            <PublisherView
              apiKey={config.OPENTOK_API_KEY}
              sessionId={config.SESSION_ID}
              token={config.TOKEN}
              style={{ width: 300, height: 200 }}
            />
          ) : (
            <SubscriberView
              apiKey={config.OPENTOK_API_KEY}
              sessionId={config.SESSION_ID}
              token={config.TOKEN}
              style={{ width: 300, height: 200 }}
            />
          )
        }
        <View>
          <Text>Is Publisher:</Text>
          <Switch
              value={isPublisher}
              onValueChange={() => this.setState({ isPublisher: !isPublisher })}
            />
        </View>
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

AppRegistry.registerComponent('TokBox', () => Basic);
