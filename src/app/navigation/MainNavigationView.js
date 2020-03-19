import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import MapScreen from '../screens/MapScreen';
import InfoScreen from '../screens/InfoScreen';
import ListScreen from '../screens/ListScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import React from 'react';
const bottomTabNavigator = createBottomTabNavigator(
  {
    Info: InfoScreen,
    Map: MapScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'Map',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IonicComponent = Ionicons;
        let FoundationComponent = Foundation;
        let iconName;
        if (routeName === 'Map') {
          iconName = 'map';
          return (
            <FoundationComponent name={iconName} size={25} color={tintColor} />
          );
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'List') {
          iconName = 'ios-list-box';
        } else if (routeName === 'Info') {
          iconName = 'ios-information-circle';
        }

        // You can return any component that you like here!
        return <IonicComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  },
);

const MainNavigationView = createAppContainer(bottomTabNavigator);
export default MainNavigationView;
