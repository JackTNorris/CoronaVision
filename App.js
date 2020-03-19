/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Main from './src/app/Main';
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Main />
      </View>
    );
  }
}
