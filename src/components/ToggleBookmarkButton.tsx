import {faBookBookmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';
export type ToggleButtonWithIconProps = {
  onPressFunction: () => void;
  status: 'ON' | 'OFF';
};

const ToggleButtonWithIcon = ({
  onPressFunction,
  status,
}: ToggleButtonWithIconProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {
        onPressFunction();
      }}
      style={[styles.buttonContainer, {backgroundColor: colors.card}]}>
      <FontAwesomeIcon
        style={styles.logo}
        size={20}
        color={status === 'ON' ? colors.primary : colors.text}
        icon={faBookBookmark}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  logo: {
    backgroundColor: '#FFFFFF00',
  },
});

export default ToggleButtonWithIcon;
