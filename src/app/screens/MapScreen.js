import React from 'react';
import {View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, LatLng} from 'react-native-maps';
import {mapStyle} from '../assets/styles/styles';
//(36.334400, -94.125763) 34.9697,-92.3731
export default class MapScreen extends React.Component {
  render() {
    return (
      <MapView style={styles.map} customMapStyle={mapStyle}>
        {this.props.screenProps.data.map(coord => {
          return (
            <Marker
              coordinate={{
                latitude: coord.latitude,
                longitude: coord.longitude,
              }}
              title={`${
                coord.provState.length > 0 ? coord.provState : coord.countryReg
              }`}
              description={`${coord.confirmed} Cases`}
              onPress={() =>
                Alert.alert(
                  coord.provState.length > 0
                    ? coord.provState
                    : coord.countryReg,
                  `Confirmed Cases: ${coord.confirmed}\nDeaths: ${
                    coord.deaths
                  }\nRecovered: ${coord.recovered}`,
                )
              }
              image={require('../assets/images/marker.png')}
            />
          );
        })}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
