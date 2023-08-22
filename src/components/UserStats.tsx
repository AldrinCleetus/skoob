import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import VerticalSeparator from './VerticalSeparator';
import React from 'react';

export type UserStatsProps = {
  statOne: {
    title: string;
    value: number;
  };
  statTwo: {
    title: string;
    value: number;
  };
  statThree: {
    title: string;
    value: number;
  };
};

const UserStats = ({statOne, statTwo, statThree}: UserStatsProps) => {
  const {colors} = useTheme();

  return (
    <View style={styles.stats}>
      <View style={styles.statItem}>
        <Text style={[styles.statItemTitle, {color: colors.text}]}>
          {statOne.title}
        </Text>
        <Text style={[styles.statItemCount, {color: colors.primary}]}>
          {statOne.value}
        </Text>
      </View>
      <VerticalSeparator />
      <View style={styles.statItem}>
        <Text style={[styles.statItemTitle, {color: colors.text}]}>
          {statTwo.title}
        </Text>
        <Text style={[styles.statItemCount, {color: colors.primary}]}>
          {statTwo.value}
        </Text>
      </View>
      <VerticalSeparator />
      <View style={styles.statItem}>
        <Text style={[styles.statItemTitle, {color: colors.text}]}>
          {statThree.title}
        </Text>
        <Text style={[styles.statItemCount, {color: colors.primary}]}>
          {statThree.value}
        </Text>
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
