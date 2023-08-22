import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
  },
});

export default VerticalSeparator;
