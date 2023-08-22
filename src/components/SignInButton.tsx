import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/Store';
import {
  setLoggedIn,
  setLoggedOut,
  setUserLoading,
} from '../store/features/userAuthSlice';
import {useAuth0} from 'react-native-auth0';
import React from 'react';

const SignInButton = () => {
  const {colors} = useTheme();

  const dispatch = useDispatch<AppDispatch>();
  const {authorize} = useAuth0();

  const onSignIn = async () => {
    try {
      dispatch(setUserLoading());
      authorize().then(e => {
        if (e) {
          dispatch(setLoggedIn());
        } else {
          dispatch(setLoggedOut());
        }
      });
    } catch (e) {
      dispatch(setLoggedOut());
    }
  };

  return (
    <TouchableOpacity
      onPress={onSignIn}
      style={[styles.signInButton, {backgroundColor: colors.card}]}>
      <FontAwesomeIcon size={20} color={colors.text} icon={faGoogle} />
      <Text style={[styles.signInButtonText, {color: colors.text}]}>
        Sign In With Google
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInButton: {
    display: 'flex',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  signInButtonText: {
    textAlign: 'center',
  },
});

export default SignInButton;
