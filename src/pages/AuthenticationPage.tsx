import {View, Image, ActivityIndicator, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/Store';
import {
  setLoggedIn,
  setLoggedOut,
  setUserLoading,
} from '../store/features/userAuthSlice';
import SignInButton from '../components/SignInButton';
import {useEffect} from 'react';
import {useAuth0} from 'react-native-auth0';
import React from 'react';

const AuthenticationPage = () => {
  const {colors, dark} = useTheme();

  const LogoImage = dark
    ? require('../../assets/logo-main.png')
    : require('../../assets/logo-main-light.png');

  const {status} = useSelector((state: RootState) => state.userAuth);

  const {hasValidCredentials} = useAuth0();

  const dispatch = useDispatch<AppDispatch>();

  const checkIfUserLoggedInAlready = async () => {
    dispatch(setUserLoading());
    const isLoggedIn = await hasValidCredentials(100);

    if (isLoggedIn) {
      // Retrieve credentials and redirect to the main flow
      // const credentials = await getCredentials();
      dispatch(setLoggedIn());
    } else {
      dispatch(setLoggedOut());
    }
  };

  useEffect(() => {
    checkIfUserLoggedInAlready();
    if (status !== 'pending') {
      // SplashScreen.hide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.authPageContainer, {backgroundColor: colors.primary}]}>
      <Image style={styles.authPageLogo} source={LogoImage} />
      {status === 'pending' && (
        <ActivityIndicator
          style={styles.loader}
          color={colors.card}
          size="large"
        />
      )}
      {status !== 'pending' && <SignInButton />}
    </View>
  );
};

const styles = StyleSheet.create({
  authPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    height: '100%',
    alignItems: 'flex-end',
  },
  authPageLogo: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
  },
  loader: {
    alignSelf: 'center',
  },
});

export default AuthenticationPage;
