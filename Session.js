import { NativeModules, NativeAppEventEmitter, Platform } from 'react-native';
const SessionManager = NativeModules.OpenTokSessionManager;

const listeners = [];

export const connect = SessionManager.connect;
export const sendMessage = SessionManager.sendMessage;

export const onMessageRecieved = (callback) => {
  listeners.push(NativeAppEventEmitter.addListener(
      'onMessageRecieved',
      (e) => callback(e)
    ));
};
export const onSessionConnect = (callback) => {
  listeners.push(NativeAppEventEmitter.addListener(
      'onSessionConnect',
      (e) => callback(e)
    ));
};
export const onSessionDisconnect = (callback) => {
  listeners.push(NativeAppEventEmitter.addListener(
      'onSessionDisconnect',
      (e) => callback(e)
    ));
};
export const onConnectionFailed = (callback) => {
  listeners.push(NativeAppEventEmitter.addListener(
      'onConnectionFailed',
      (e) => callback(e)
    ));
};

export const stopListener = () => {
  for (var listener of listeners) {
    listener.remove()
  }
};
