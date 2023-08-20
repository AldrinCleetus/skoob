import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useTheme} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/Store';
import {setLoggedIn, setUserLoading} from '../store/features/userAuthSlice';
import {useAuth0} from 'react-native-auth0';

const SignInButton = () => {
  const {colors, dark} = useTheme();

  const dispatch = useDispatch<AppDispatch>();
  const {authorize, user, clearSession} = useAuth0();

  const onPress = async () => {
    try {
      dispatch(setUserLoading());
      await authorize();
      dispatch(setLoggedIn());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: 'flex',
        backgroundColor: colors.card,
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 100,
        marginTop: 60,
      }}>
      <FontAwesomeIcon
        size={20}
        color={colors.text}
        icon={faGoogle}></FontAwesomeIcon>
      <Text style={{textAlign: 'center', color: colors.text}}>
        Sign In With Google
      </Text>
    </TouchableOpacity>
  );
};

export default SignInButton;
