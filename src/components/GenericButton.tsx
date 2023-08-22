import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const GenericButton = () => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: colors.primary}]}>
      <Text style={styles.buttonTitle}>Read this book</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonTitle: {
    fontWeight: 'normal',
    fontSize: 24,
    color: 'white',
  },
});

export default GenericButton;
