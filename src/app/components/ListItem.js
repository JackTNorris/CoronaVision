import React from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/styles/styles';

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 4}}>
          <Text style={styles.list1Text}>
            {this.props.stat.provState.length > 0
              ? this.props.stat.provState
              : this.props.stat.countryReg}
          </Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.confirmedText}>Cases</Text>
          <Text style={styles.deathText}>Deaths</Text>
          <Text style={styles.recoveredText}>Recovered</Text>
        </View>
        <View style={{flex: 2, alignItems: 'flex-end'}}>
          <Text style={styles.list2Text}>{this.props.stat?.confirmed}</Text>
          <Text style={styles.list2Text}>{this.props.stat?.deaths}</Text>
          <Text style={styles.list2Text}>{this.props.stat?.recovered}</Text>
        </View>
      </View>
    );
  }
}
