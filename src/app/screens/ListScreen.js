import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ListItem from '../components/ListItem';
import {SearchBar} from 'react-native-elements';
import List from '../components/List';
export default class ListScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = s => {
    this.setState({search: s});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <SearchBar
          placeholder="Search"
          value={this.state.search}
          onChangeText={this.updateSearch}
          containerStyle={{backgroundColor: '#424242'}}
          inputStyle={{color: 'green'}}
        />
        <ScrollView style={{flex: 1}}>
          <List
            stats={this.props.screenProps.data}
            searchString={this.state.search}
          />
        </ScrollView>
      </View>
    );
  }
}
