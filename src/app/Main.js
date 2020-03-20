import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import MainNavigationView from './navigation/MainNavigationView';
import Header from './components/Header';
import {getVirusStats} from './lib/util/DataRetrieval';
const csv = require('csvtojson');
export default class Main extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    this.setState({data: await getVirusStats()});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header />
        </View>
        <View style={{flex: 9}}>
          <MainNavigationView screenProps={this.state} />
        </View>
      </View>
    );
  }
}
