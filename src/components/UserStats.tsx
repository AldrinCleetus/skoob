import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {MyDarkTheme} from '../utils/Theme';
import VerticalSeparator from './VerticalSeparator';

const UserStats = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.stats}>
      <View style={styles.statItem}>
        <Text style={[styles.statItemTitle, {color: colors.text}]}>
          Currently Reading
        </Text>
        <Text style={[styles.statItemCount, {color: colors.primary}]}>12</Text>
      </View>
      <VerticalSeparator />
      <View style={styles.statItem}>
        <Text style={[styles.statItemTitle, {color: colors.text}]}>
          Finished Reading
        </Text>
        <Text style={[styles.statItemCount, {color: colors.primary}]}>25</Text>
      </View>
      <VerticalSeparator />
      <View style={styles.statItem}>
        <Text style={[styles.statItemTitle, {color: colors.text}]}>
          Bookmarked
        </Text>
        <Text style={[styles.statItemCount, {color: colors.primary}]}>53</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    flex: 1,
    justifyContent: 'space-between',
    gap: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignContent: 'center',
  },
  statItemTitle: {
    fontSize: 16,
  },
  statItemCount: {
    fontSize: 22,
  },
});

export default UserStats;
