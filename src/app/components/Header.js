import React from 'react';
import {View, Image} from 'react-native';
import styles from '../assets/styles/styles';
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/headerLogo.png')}
          style={styles.headerImage}
        />
      </View>
    );
  }
}
