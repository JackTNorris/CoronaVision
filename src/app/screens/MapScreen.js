import React from 'react';
import {View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, LatLng} from 'react-native-maps';
import {decode as atob} from 'base-64';

const csv = require('csvtojson');
//(36.334400, -94.125763) 34.9697,-92.3731
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {coordinates: []};
  }
  getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '-' + day + '-' + year;
  }

  async componentDidMount() {
    let dateFile = new Date();
    dateFile.setDate(dateFile.getDate() - 1);
    let response = await fetch(
      'https://api.github.com/repos/CSSEGISandData/COVID-19/contents/csse_covid_19_data/csse_covid_19_daily_reports/' +
        this.getFormattedDate(dateFile) +
        '.csv',
    );
    let responseJson = await response.json();
    csv({noheader: true, output: 'csv'})
      .fromString(atob(responseJson.content))
      .then(csvRow => {
        for (let i = 1; i < csvRow.length; i++) {
          let temp = this.state.coordinates;
          //temp.push([parseFloat(csvRow[i][6]), parseFloat(csvRow[i][7])]);
          temp.push({
            provState: csvRow[i][0],
            countryReg: csvRow[i][1],
            updated: csvRow[i][2],
            deaths: csvRow[i][4],
            recovered: csvRow[i][5],
            confirmed: csvRow[i][3],
            latitude: parseFloat(csvRow[i][6]),
            longitude: parseFloat(csvRow[i][7]),
          });
          this.setState({coordinates: temp});
        }
      });
  }

  render() {
    return (
      <MapView style={styles.map}>
        {this.state.coordinates.map(coord => {
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
