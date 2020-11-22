import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const commonStyles = StyleSheet.create({
  container: {
    padding: 15,
  },
  row: {
    flexDirection: 'row',
  },
  loader: {
    color: colors.blackPearl,
    marginTop: 60,
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16.0/9.0,
    marginTop: 16,
    marginBottom: 16,
  },
  video: {
    flex: 1,
    width: '100%',
    aspectRatio: 16.0 / 9.0,
  },
  infoBox: {
    justifyContent: 'space-between',
    flex: 1,
    flexWrap: 'wrap',
  },
  meta: {
    color: '#888',
  },
  scoreImage: {
    height: 12,
    width: 120,
  },
});

export default commonStyles;
