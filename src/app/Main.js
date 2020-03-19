import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Map from './screens/Map';
export default class Main extends React.Component {
  render() {
    return <Map />;
  }
}
