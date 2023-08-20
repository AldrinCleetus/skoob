import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {AuthenticationPageProps} from '../types/types';
import {useTheme} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
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

const AuthenticationPage = (props: AuthenticationPageProps) => {
  const {colors, dark} = useTheme();

  const LogoImage = dark
    ? require('../../assets/logo-main.png')
    : require('../../assets/logo-main-light.png');

  const {isUserLoggedIn, status} = useSelector(
    (state: RootState) => state.userAuth,
  );

  const {authorize, user, clearSession, hasValidCredentials, getCredentials} =
    useAuth0();

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
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: '100%',
        alignItems: 'flex-end',
      }}>
      <Image
        style={{width: '100%', height: 300, alignSelf: 'center'}}
        source={LogoImage}></Image>
      {status === 'pending' && (
        <ActivityIndicator
          style={{alignSelf: 'center'}}
          color={colors.card}
          size="large"
        />
      )}
      {status !== 'pending' && <SignInButton />}
    </View>
  );
};

export default AuthenticationPage;
