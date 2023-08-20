import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: 1, // Width of the separator
    height: '100%', // Height equal to the parent's height
    backgroundColor: '#ccc', // Color of the separator
  },
});

export default VerticalSeparator;
