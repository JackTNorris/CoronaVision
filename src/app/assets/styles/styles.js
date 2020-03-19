import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  headerImage: {
    resizeMode: 'center',
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
