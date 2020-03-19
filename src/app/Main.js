import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import MainNavigationView from './navigation/MainNavigationView';
import Header from './components/Header';
export default class Main extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header />
        </View>
        <View style={{flex: 9}}>
          <MainNavigationView />
        </View>
      </View>
    );
  }
}
