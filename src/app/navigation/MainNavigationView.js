import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import MapScreen from '../screens/MapScreen';
const bottomTabNavigator = createBottomTabNavigator({

})

const MainNavigationView = createAppContainer(bottomTabNavigator);
export default MainNavigationView;
