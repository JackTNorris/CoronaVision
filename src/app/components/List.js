import React from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/styles/styles';
import ListItem from './ListItem';
export default class List extends React.Component {
  render() {
    return this.props.stats.map(stat => {
      let name = (stat.provState.length > 0
        ? stat.provState
        : stat.countryReg
      )?.toLowerCase();
      if (
        name.includes(this.props.searchString.toLowerCase()) ||
        this.props.searchString.length === 0
      ) {
        return <ListItem stat={stat} />;
      }
    });
  }
}
