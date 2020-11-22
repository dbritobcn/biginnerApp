import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const listStyles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  item: {
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.zircon,
  },
  thumbnail: {
    height: 75,
    marginRight: 10,
    width: 75,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default listStyles;
